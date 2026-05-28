var e = $;
(function(e2, t2) {
  for (var n2 = $, r2 = e2(); ; ) try {
    if (-parseInt(n2(1050)) / 1 * (parseInt(n2(1250)) / 2) + -parseInt(n2(1362)) / 3 + parseInt(n2(389)) / 4 + parseInt(n2(1420)) / 5 * (parseInt(n2(425)) / 6) + -parseInt(n2(596)) / 7 + -parseInt(n2(976)) / 8 * (parseInt(n2(819)) / 9) + parseInt(n2(245)) / 10 === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(ds, 902713);
function t(e2, t2) {
  (t2 == null || t2 > e2[$(441)]) && (t2 = e2.length);
  for (var n2 = 0, r2 = Array(t2); n2 < t2; n2++) r2[n2] = e2[n2];
  return r2;
}
function n(e2) {
  if (Array.isArray(e2)) return e2;
}
function r(e2) {
  if (Array.isArray(e2)) return t(e2);
}
function i(e2, t2) {
  var n2 = $;
  if (!(e2 instanceof t2)) throw TypeError(n2(763));
}
function a(e2, t2) {
  for (var n2 = $, r2 = 0; r2 < t2.length; r2++) {
    var i2 = t2[r2];
    i2[n2(685)] = i2[n2(685)] || false, i2.configurable = true, `value` in i2 && (i2.writable = true), Object.defineProperty(e2, g(i2.key), i2);
  }
}
function o(e2, t2, n2) {
  var r2 = $;
  return t2 && a(e2.prototype, t2), Object.defineProperty(e2, r2(216), { writable: false }), e2;
}
function s(e2, t2) {
  var n2 = $, r2 = typeof Symbol < `u` && e2[Symbol.iterator] || e2[`@@iterator`];
  if (!r2) {
    if (Array.isArray(e2) || (r2 = v(e2)) || t2) {
      r2 && (e2 = r2);
      var i2 = 0, a2 = function() {
      };
      return { s: a2, n: function() {
        return i2 >= e2[$(441)] ? { done: true } : { done: false, value: e2[i2++] };
      }, e: function(e3) {
        throw e3;
      }, f: a2 };
    }
    throw TypeError(n2(772));
  }
  var o2, s2 = true, c2 = false;
  return { s: function() {
    r2 = r2.call(e2);
  }, n: function() {
    var e3 = r2.next();
    return s2 = e3.done, e3;
  }, e: function(e3) {
    c2 = true, o2 = e3;
  }, f: function() {
    try {
      s2 || r2.return == null || r2.return();
    } finally {
      if (c2) throw o2;
    }
  } };
}
function c(e2, t2, n2) {
  return (t2 = g(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function l(e2) {
  if (typeof Symbol < `u` && e2[Symbol.iterator] != null || e2[`@@iterator`] != null) return Array.from(e2);
}
function u(e2, t2) {
  var n2 = $, r2 = e2 == null ? null : typeof Symbol < `u` && e2[Symbol.iterator] || e2[`@@iterator`];
  if (r2 != null) {
    var i2, a2, o2, s2, c2 = [], l2 = true, u2 = false;
    try {
      if (o2 = (r2 = r2.call(e2)).next, t2 === 0) {
        if (Object(r2) !== r2) return;
        l2 = false;
      } else for (; !(l2 = (i2 = o2.call(r2)).done) && (c2.push(i2.value), c2.length !== t2); l2 = true) ;
    } catch (e3) {
      u2 = true, a2 = e3;
    } finally {
      try {
        if (!l2 && r2[n2(1306)] != null && (s2 = r2[n2(1306)](), Object(s2) !== s2)) return;
      } finally {
        if (u2) throw a2;
      }
    }
    return c2;
  }
}
function d() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function f() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function p(e2, t2) {
  return n(e2) || u(e2, t2) || v(e2, t2) || d();
}
function m(e2) {
  return r(e2) || l(e2) || v(e2) || f();
}
function h(e2, t2) {
  if (typeof e2 != `object` || !e2) return e2;
  var n2 = e2[Symbol.toPrimitive];
  if (n2 !== void 0) {
    var r2 = n2.call(e2, t2);
    if (typeof r2 != `object`) return r2;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return String(e2);
}
function g(e2) {
  var t2 = h(e2, `string`);
  return typeof t2 == `symbol` ? t2 : t2 + ``;
}
function _(e2) {
  "@babel/helpers - typeof";
  var t2 = $;
  return _ = typeof Symbol == `function` && typeof Symbol[t2(911)] == `symbol` ? function(e3) {
    return typeof e3;
  } : function(e3) {
    var n2 = t2;
    return e3 && typeof Symbol == `function` && e3.constructor === Symbol && e3 !== Symbol[n2(216)] ? `symbol` : typeof e3;
  }, _(e2);
}
function v(e2, n2) {
  var r2 = $;
  if (e2) {
    if (typeof e2 == `string`) return t(e2, n2);
    var i2 = {}.toString.call(e2).slice(8, -1);
    return i2 === `Object` && e2.constructor && (i2 = e2[r2(295)][r2(958)]), i2 === `Map` || i2 === `Set` ? Array.from(e2) : i2 === r2(448) || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i2) ? t(e2, n2) : void 0;
  }
}
var y = typeof window > `u` ? null : window, b = y ? y[e(1371)] : null;
y && y.document;
var x = _(``), S = _({}), C = _(function() {
}), w = typeof HTMLElement > `u` ? e(1054) : _(HTMLElement), T = function(t2) {
  var n2 = e;
  return t2 && t2[n2(363)] && D(t2.instanceString) ? t2[n2(363)]() : null;
}, E = function(e2) {
  return e2 != null && _(e2) == x;
}, D = function(e2) {
  return e2 != null && _(e2) === C;
}, O = function(e2) {
  return !P(e2) && (Array.isArray ? Array.isArray(e2) : e2 != null && e2 instanceof Array);
}, k = function(e2) {
  return e2 != null && _(e2) === S && !O(e2) && e2.constructor === Object;
}, A = function(e2) {
  return e2 != null && _(e2) === S;
}, j = function(e2) {
  return e2 != null && _(e2) === _(1) && !isNaN(e2);
}, M = function(e2) {
  return j(e2) && Math.floor(e2) === e2;
}, N = function(e2) {
  if (w !== `undefined`) return e2 != null && e2 instanceof HTMLElement;
}, P = function(e2) {
  return F(e2) || I(e2);
}, F = function(e2) {
  return T(e2) === `collection` && e2._private.single;
}, I = function(e2) {
  return T(e2) === `collection` && !e2._private.single;
}, L = function(e2) {
  return T(e2) === `core`;
}, R = function(e2) {
  return T(e2) === `stylesheet`;
}, z = function(e2) {
  return T(e2) === `event`;
}, B = function(e2) {
  return e2 == null ? true : !!(e2 === `` || e2.match(/^\s+$/));
}, V = function(e2) {
  return typeof HTMLElement > `u` ? false : e2 instanceof HTMLElement;
}, H = function(e2) {
  return k(e2) && j(e2.x1) && j(e2.x2) && j(e2.y1) && j(e2.y2);
}, U = function(e2) {
  return A(e2) && D(e2.then);
}, W = function() {
  return b && b.userAgent.match(/msie|trident|edge/i);
}, G = function(e2, t2) {
  t2 || (t2 = function() {
    var e3 = $;
    if (arguments.length === 1) return arguments[0];
    if (arguments[e3(441)] === 0) return `undefined`;
    for (var t3 = [], n3 = 0; n3 < arguments.length; n3++) t3[e3(254)](arguments[n3]);
    return t3.join(`$`);
  });
  var n2 = function() {
    var r2 = this, i2 = arguments, a2, o2 = t2.apply(r2, i2), s2 = n2.cache;
    return (a2 = s2[o2]) || (a2 = s2[o2] = e2.apply(r2, i2)), a2;
  };
  return n2.cache = {}, n2;
}, K = G(function(e2) {
  return e2.replace(/([A-Z])/g, function(e3) {
    return `-` + e3.toLowerCase();
  });
}), q = G(function(e2) {
  return e2.replace(/(-\w)/g, function(e3) {
    var t2 = $;
    return e3[1][t2(1317)]();
  });
}), J = G(function(e2, t2) {
  return e2 + t2[0].toUpperCase() + t2.substring(1);
}, function(e2, t2) {
  return e2 + `$` + t2;
}), Y = function(t2) {
  var n2 = e;
  return B(t2) ? t2 : t2[n2(476)](0).toUpperCase() + t2.substring(1);
}, ee = function(e2, t2) {
  return e2.slice(-1 * t2.length) === t2;
}, X = `(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))`, te = `rgb[a]?\\((` + X + `[%]?)\\s*,\\s*(` + X + `[%]?)\\s*,\\s*(` + X + `[%]?)(?:\\s*,\\s*(` + X + `))?\\)`, ne = e(1422) + X + `[%]?)\\s*,\\s*(?:` + X + `[%]?)\\s*,\\s*(?:` + X + `[%]?)(?:\\s*,\\s*(?:` + X + `))?\\)`, re = `hsl[a]?\\((` + X + `)\\s*,\\s*(` + X + e(1114) + X + `[%])(?:\\s*,\\s*(` + X + `))?\\)`, ie = e(400) + X + `)\\s*,\\s*(?:` + X + `[%])\\s*,\\s*(?:` + X + `[%])(?:\\s*,\\s*(?:` + X + `))?\\)`, ae = `\\#[0-9a-fA-F]{3}`, oe = `\\#[0-9a-fA-F]{6}`, se = function(e2, t2) {
  return e2 < t2 ? -1 : +(e2 > t2);
}, ce = function(e2, t2) {
  return -1 * se(e2, t2);
}, Z = Object.assign == null ? function(e2) {
  for (var t2 = arguments, n2 = 1; n2 < t2.length; n2++) {
    var r2 = t2[n2];
    if (r2 != null) for (var i2 = Object.keys(r2), a2 = 0; a2 < i2.length; a2++) {
      var o2 = i2[a2];
      e2[o2] = r2[o2];
    }
  }
  return e2;
} : Object[e(378)].bind(Object), le = function(t2) {
  var n2 = e;
  if (!(!(t2.length === 4 || t2[n2(441)] === 7) || t2[0] !== `#`)) {
    var r2 = t2[n2(441)] === 4, i2, a2, o2, s2 = 16;
    return r2 ? (i2 = parseInt(t2[1] + t2[1], s2), a2 = parseInt(t2[2] + t2[2], s2), o2 = parseInt(t2[3] + t2[3], s2)) : (i2 = parseInt(t2[1] + t2[2], s2), a2 = parseInt(t2[3] + t2[4], s2), o2 = parseInt(t2[5] + t2[6], s2)), [i2, a2, o2];
  }
}, ue = function(t2) {
  var n2 = e, r2, i2, a2, o2, s2, c2, l2, u2;
  function d2(e2, t3, n3) {
    return n3 < 0 && (n3 += 1), n3 > 1 && --n3, n3 < 1 / 6 ? e2 + (t3 - e2) * 6 * n3 : n3 < 1 / 2 ? t3 : n3 < 2 / 3 ? e2 + (t3 - e2) * (2 / 3 - n3) * 6 : e2;
  }
  var f2 = RegExp(`^` + re + `$`).exec(t2);
  if (f2) {
    if (i2 = parseInt(f2[1]), i2 < 0 ? i2 = (360 - -1 * i2 % 360) % 360 : i2 > 360 && (i2 %= 360), i2 /= 360, a2 = parseFloat(f2[2]), a2 < 0 || a2 > 100 || (a2 /= 100, o2 = parseFloat(f2[3]), o2 < 0 || o2 > 100) || (o2 /= 100, s2 = f2[4], s2 !== void 0 && (s2 = parseFloat(s2), s2 < 0 || s2 > 1))) return;
    if (a2 === 0) c2 = l2 = u2 = Math.round(o2 * 255);
    else {
      var p2 = o2 < 0.5 ? o2 * (1 + a2) : o2 + a2 - o2 * a2, m2 = 2 * o2 - p2;
      c2 = Math[n2(798)](255 * d2(m2, p2, i2 + 1 / 3)), l2 = Math.round(255 * d2(m2, p2, i2)), u2 = Math.round(255 * d2(m2, p2, i2 - 1 / 3));
    }
    r2 = [c2, l2, u2, s2];
  }
  return r2;
}, de = function(e2) {
  var t2, n2 = RegExp(`^` + te + `$`).exec(e2);
  if (n2) {
    t2 = [];
    for (var r2 = [], i2 = 1; i2 <= 3; i2++) {
      var a2 = n2[i2];
      if (a2[a2.length - 1] === `%` && (r2[i2] = true), a2 = parseFloat(a2), r2[i2] && (a2 = a2 / 100 * 255), a2 < 0 || a2 > 255) return;
      t2.push(Math.floor(a2));
    }
    var o2 = r2[1] || r2[2] || r2[3], s2 = r2[1] && r2[2] && r2[3];
    if (o2 && !s2) return;
    var c2 = n2[4];
    if (c2 !== void 0) {
      if (c2 = parseFloat(c2), c2 < 0 || c2 > 1) return;
      t2.push(c2);
    }
  }
  return t2;
}, fe = function(e2) {
  return me[e2.toLowerCase()];
}, pe = function(e2) {
  return (O(e2) ? e2 : null) || fe(e2) || le(e2) || de(e2) || ue(e2);
}, me = { transparent: [0, 0, 0, 0], aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], grey: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] }, he = function(e2) {
  for (var t2 = e2.map, n2 = e2.keys, r2 = n2.length, i2 = 0; i2 < r2; i2++) {
    var a2 = n2[i2];
    if (k(a2)) throw Error(`Tried to set map with object key`);
    i2 < n2.length - 1 ? (t2[a2] ?? (t2[a2] = {}), t2 = t2[a2]) : t2[a2] = e2.value;
  }
}, ge = function(t2) {
  for (var n2 = e, r2 = t2.map, i2 = t2[n2(520)], a2 = i2.length, o2 = 0; o2 < a2; o2++) {
    var s2 = i2[o2];
    if (k(s2)) throw Error(`Tried to get map with object key`);
    if (r2 = r2[s2], r2 == null) return r2;
  }
  return r2;
}, _e = typeof globalThis < `u` ? globalThis : typeof window < `u` ? window : typeof global < `u` ? global : typeof self < `u` ? self : {};
function ve(e2) {
  return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, `default`) ? e2.default : e2;
}
var ye, be;
function xe() {
  if (be) return ye;
  be = 1;
  function e2(e3) {
    var t2 = typeof e3;
    return e3 != null && (t2 == `object` || t2 == `function`);
  }
  return ye = e2, ye;
}
var Se, Ce;
function we() {
  var t2 = e;
  return Ce ? Se : (Ce = 1, Se = typeof _e == t2(1083) && _e && _e.Object === Object && _e, Se);
}
var Te, Ee;
function De() {
  if (Ee) return Te;
  Ee = 1;
  var e2 = we(), t2 = typeof self == `object` && self && self.Object === Object && self;
  return Te = e2 || t2 || Function(`return this`)(), Te;
}
var Oe, ke;
function Ae() {
  if (ke) return Oe;
  ke = 1;
  var e2 = De();
  return Oe = function() {
    return e2.Date.now();
  }, Oe;
}
var je, Me;
function Ne() {
  if (Me) return je;
  Me = 1;
  var e2 = /\s/;
  function t2(t3) {
    for (var n2 = t3.length; n2-- && e2.test(t3.charAt(n2)); ) ;
    return n2;
  }
  return je = t2, je;
}
var Pe, Fe;
function Ie() {
  if (Fe) return Pe;
  Fe = 1;
  var e2 = Ne(), t2 = /^\s+/;
  function n2(n3) {
    return n3 && n3.slice(0, e2(n3) + 1).replace(t2, ``);
  }
  return Pe = n2, Pe;
}
var Le, Re;
function ze() {
  return Re ? Le : (Re = 1, Le = De().Symbol, Le);
}
var Be, Ve;
function He() {
  if (Ve) return Be;
  Ve = 1;
  var e2 = ze(), t2 = Object.prototype, n2 = t2.hasOwnProperty, r2 = t2.toString, i2 = e2 ? e2.toStringTag : void 0;
  function a2(e3) {
    var t3 = $, a3 = n2.call(e3, i2), o2 = e3[i2];
    try {
      e3[i2] = void 0;
      var s2 = true;
    } catch {
    }
    var c2 = r2[t3(962)](e3);
    return s2 && (a3 ? e3[i2] = o2 : delete e3[i2]), c2;
  }
  return Be = a2, Be;
}
var Ue, We;
function Ge() {
  if (We) return Ue;
  We = 1;
  var e2 = Object.prototype.toString;
  function t2(t3) {
    return e2.call(t3);
  }
  return Ue = t2, Ue;
}
var Ke, qe;
function Je() {
  if (qe) return Ke;
  qe = 1;
  var e2 = ze(), t2 = He(), n2 = Ge(), r2 = `[object Null]`, i2 = `[object Undefined]`, a2 = e2 ? e2.toStringTag : void 0;
  function o2(e3) {
    return e3 == null ? e3 === void 0 ? i2 : r2 : a2 && a2 in Object(e3) ? t2(e3) : n2(e3);
  }
  return Ke = o2, Ke;
}
var Ye, Xe;
function Ze() {
  if (Xe) return Ye;
  Xe = 1;
  function e2(e3) {
    return typeof e3 == $(1083) && !!e3;
  }
  return Ye = e2, Ye;
}
var Qe, $e;
function et() {
  if ($e) return Qe;
  $e = 1;
  var e2 = Je(), t2 = Ze(), n2 = `[object Symbol]`;
  function r2(r3) {
    return typeof r3 == `symbol` || t2(r3) && e2(r3) == n2;
  }
  return Qe = r2, Qe;
}
var tt, nt;
function rt() {
  if (nt) return tt;
  nt = 1;
  var e2 = Ie(), t2 = xe(), n2 = et(), r2 = NaN, i2 = /^[-+]0x[0-9a-f]+$/i, a2 = /^0b[01]+$/i, o2 = /^0o[0-7]+$/i, s2 = parseInt;
  function c2(c3) {
    var l2 = $;
    if (typeof c3 == l2(1134)) return c3;
    if (n2(c3)) return r2;
    if (t2(c3)) {
      var u2 = typeof c3.valueOf == `function` ? c3.valueOf() : c3;
      c3 = t2(u2) ? u2 + `` : u2;
    }
    if (typeof c3 != l2(1157)) return c3 === 0 ? c3 : +c3;
    c3 = e2(c3);
    var d2 = a2[l2(348)](c3);
    return d2 || o2.test(c3) ? s2(c3.slice(2), d2 ? 2 : 8) : i2.test(c3) ? r2 : +c3;
  }
  return tt = c2, tt;
}
var it, at;
function ot() {
  if (at) return it;
  at = 1;
  var e2 = xe(), t2 = Ae(), n2 = rt(), r2 = `Expected a function`, i2 = Math.max, a2 = Math.min;
  function o2(o3, s2, c2) {
    var l2 = $, u2, d2, f2, p2, m2, h2, g2 = 0, _2 = false, v2 = false, y2 = true;
    if (typeof o3 != `function`) throw TypeError(r2);
    s2 = n2(s2) || 0, e2(c2) && (_2 = !!c2[l2(1160)], v2 = `maxWait` in c2, f2 = v2 ? i2(n2(c2[l2(860)]) || 0, s2) : f2, y2 = `trailing` in c2 ? !!c2.trailing : y2);
    function b2(e3) {
      var t3 = u2, n3 = d2;
      return u2 = d2 = void 0, g2 = e3, p2 = o3.apply(n3, t3), p2;
    }
    function x2(e3) {
      return g2 = e3, m2 = setTimeout(w2, s2), _2 ? b2(e3) : p2;
    }
    function S2(e3) {
      var t3 = e3 - h2, n3 = e3 - g2, r3 = s2 - t3;
      return v2 ? a2(r3, f2 - n3) : r3;
    }
    function C2(e3) {
      var t3 = e3 - h2, n3 = e3 - g2;
      return h2 === void 0 || t3 >= s2 || t3 < 0 || v2 && n3 >= f2;
    }
    function w2() {
      var e3 = t2();
      if (C2(e3)) return T2(e3);
      m2 = setTimeout(w2, S2(e3));
    }
    function T2(e3) {
      return m2 = void 0, y2 && u2 ? b2(e3) : (u2 = d2 = void 0, p2);
    }
    function E2() {
      m2 !== void 0 && clearTimeout(m2), g2 = 0, u2 = h2 = d2 = m2 = void 0;
    }
    function D2() {
      return m2 === void 0 ? p2 : T2(t2());
    }
    function O2() {
      var e3 = t2(), n3 = C2(e3);
      if (u2 = arguments, d2 = this, h2 = e3, n3) {
        if (m2 === void 0) return x2(h2);
        if (v2) return clearTimeout(m2), m2 = setTimeout(w2, s2), b2(h2);
      }
      return m2 === void 0 && (m2 = setTimeout(w2, s2)), p2;
    }
    return O2[l2(215)] = E2, O2.flush = D2, O2;
  }
  return it = o2, it;
}
var st = ve(ot()), ct = y ? y.performance : null, lt = ct && ct[e(231)] ? function() {
  return ct.now();
} : function() {
  return Date.now();
}, ut = (function() {
  if (y) {
    if (y.requestAnimationFrame) return function(e2) {
      y.requestAnimationFrame(e2);
    };
    if (y.mozRequestAnimationFrame) return function(e2) {
      y.mozRequestAnimationFrame(e2);
    };
    if (y.webkitRequestAnimationFrame) return function(e2) {
      y[$(288)](e2);
    };
    if (y.msRequestAnimationFrame) return function(e2) {
      y.msRequestAnimationFrame(e2);
    };
  }
  return function(e2) {
    e2 && setTimeout(function() {
      e2(lt());
    }, 1e3 / 60);
  };
})(), dt = function(e2) {
  return ut(e2);
}, ft = lt, pt = 9261, mt = 65599, ht = 5381, gt = function(t2) {
  for (var n2 = e, r2 = arguments[n2(441)] > 1 && arguments[1] !== void 0 ? arguments[1] : pt, i2; i2 = t2.next(), !i2.done; ) r2 = r2 * mt + i2.value | 0;
  return r2;
}, _t = function(e2) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pt) * mt + e2 | 0;
}, vt = function(e2) {
  var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ht;
  return (t2 << 5) + t2 + e2 | 0;
}, yt = function(e2, t2) {
  return e2 * 2097152 + t2;
}, bt = function(e2) {
  return e2[0] * 2097152 + e2[1];
}, xt = function(e2, t2) {
  return [_t(e2[0], t2[0]), vt(e2[1], t2[1])];
}, St = function(e2, t2) {
  var n2 = { value: 0, done: false }, r2 = 0, i2 = e2.length;
  return gt({ next: function() {
    return r2 < i2 ? n2.value = e2[r2++] : n2.done = true, n2;
  } }, t2);
}, Ct = function(e2, t2) {
  var n2 = { value: 0, done: false }, r2 = 0, i2 = e2.length;
  return gt({ next: function() {
    return r2 < i2 ? n2.value = e2.charCodeAt(r2++) : n2.done = true, n2;
  } }, t2);
}, wt = function() {
  return Tt(arguments);
}, Tt = function(e2) {
  for (var t2, n2 = 0; n2 < e2.length; n2++) {
    var r2 = e2[n2];
    t2 = n2 === 0 ? Ct(r2) : Ct(r2, t2);
  }
  return t2;
};
function Et(e2, t2, n2, r2, i2) {
  var a2 = i2 * Math.PI / 180;
  return { x: Math.cos(a2) * (e2 - n2) - Math.sin(a2) * (t2 - r2) + n2, y: Math.sin(a2) * (e2 - n2) + Math.cos(a2) * (t2 - r2) + r2 };
}
var Dt = function(e2, t2, n2, r2, i2, a2) {
  return { x: (e2 - n2) * i2 + n2, y: (t2 - r2) * a2 + r2 };
};
function Ot(e2, t2, n2) {
  if (n2 === 0) return e2;
  var r2 = (t2.x1 + t2.x2) / 2, i2 = (t2.y1 + t2.y2) / 2, a2 = t2.w / t2.h, o2 = 1 / a2, s2 = Et(e2.x, e2.y, r2, i2, n2), c2 = Dt(s2.x, s2.y, r2, i2, a2, o2);
  return { x: c2.x, y: c2.y };
}
var kt = true, At = console.warn != null, jt = console.trace != null, Mt = 9007199254740991, Nt = function() {
  return true;
}, Pt = function() {
  return false;
}, Ft = function() {
  return 0;
}, It = function() {
}, Lt = function(e2) {
  throw Error(e2);
}, Rt = function(e2) {
  if (e2 !== void 0) kt = !!e2;
  else return kt;
}, zt = function(e2) {
  Rt() && (At ? console.warn(e2) : (console.log(e2), jt && console.trace()));
}, Bt = function(e2) {
  return Z({}, e2);
}, Vt = function(e2) {
  return e2 == null ? e2 : O(e2) ? e2.slice() : k(e2) ? Bt(e2) : e2;
}, Ht = function(e2) {
  return e2.slice();
}, Ut = function(t2, n2) {
  var r2 = e;
  for (n2 = t2 = ``; t2++ < 36; n2 += t2 * 51 & 52 ? (t2 ^ 15 ? 8 ^ Math[r2(1278)]() * (t2 ^ 20 ? 16 : 4) : 4).toString(16) : `-`) ;
  return n2;
}, Wt = {}, Gt = function() {
  return Wt;
}, Kt = function(e2) {
  var t2 = Object.keys(e2);
  return function(n2) {
    for (var r2 = {}, i2 = 0; i2 < t2.length; i2++) {
      var a2 = t2[i2], o2 = n2 == null ? void 0 : n2[a2];
      r2[a2] = o2 === void 0 ? e2[a2] : o2;
    }
    return r2;
  };
}, qt = function(e2, t2, n2) {
  for (var r2 = e2.length - 1; r2 >= 0; r2--) e2[r2] === t2 && e2.splice(r2, 1);
}, Jt = function(e2) {
  e2.splice(0, e2.length);
}, Yt = function(e2, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var r2 = t2[n2];
    e2.push(r2);
  }
}, Xt = function(e2, t2, n2) {
  return n2 && (t2 = J(n2, t2)), e2[t2];
}, Zt = function(e2, t2, n2, r2) {
  n2 && (t2 = J(n2, t2)), e2[t2] = r2;
}, Qt = typeof Map < `u` ? Map : (function() {
  function e2() {
    i(this, e2), this._obj = {};
  }
  return o(e2, [{ key: `set`, value: function(e3, t2) {
    return this._obj[e3] = t2, this;
  } }, { key: `delete`, value: function(e3) {
    return this._obj[e3] = void 0, this;
  } }, { key: `clear`, value: function() {
    this._obj = {};
  } }, { key: `has`, value: function(e3) {
    var t2 = $;
    return this[t2(1156)][e3] !== void 0;
  } }, { key: `get`, value: function(e3) {
    return this._obj[e3];
  } }]);
})(), $t = `undefined`, en = (function() {
  var t2 = e;
  function n2(e2) {
    var t3 = $;
    if (i(this, n2), this[t3(1156)] = Object[t3(546)](null), this[t3(1092)] = 0, e2 != null) for (var r2 = e2.instanceString != null && e2.instanceString() === this[t3(363)]() ? e2.toArray() : e2, a2 = 0; a2 < r2.length; a2++) this.add(r2[a2]);
  }
  return o(n2, [{ key: `instanceString`, value: function() {
    return `set`;
  } }, { key: t2(1213), value: function(e2) {
    var t3 = this._obj;
    t3[e2] !== 1 && (t3[e2] = 1, this.size++);
  } }, { key: `delete`, value: function(e2) {
    var t3 = this._obj;
    t3[e2] === 1 && (t3[e2] = 0, this.size--);
  } }, { key: t2(1385), value: function() {
    this._obj = /* @__PURE__ */ Object.create(null);
  } }, { key: `has`, value: function(e2) {
    var n3 = t2;
    return this[n3(1156)][e2] === 1;
  } }, { key: `toArray`, value: function() {
    var e2 = t2, n3 = this;
    return Object.keys(this._obj)[e2(670)](function(e3) {
      return n3.has(e3);
    });
  } }, { key: `forEach`, value: function(e2, n3) {
    var r2 = t2;
    return this.toArray()[r2(1390)](e2, n3);
  } }]);
})(), tn = (typeof Set > `u` ? `undefined` : _(Set)) === $t ? en : Set, nn = function(t2, n2) {
  var r2 = e, i2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  if (t2 === void 0 || n2 === void 0 || !L(t2)) {
    Lt(`An element must have a core reference and parameters set`);
    return;
  }
  var a2 = n2.group;
  if (a2 ?? (a2 = n2.data && n2.data[r2(1256)] != null && n2.data.target != null ? `edges` : `nodes`), a2 !== r2(565) && a2 !== `edges`) {
    Lt("An element must be of type `nodes` or `edges`; you specified `" + a2 + "`");
    return;
  }
  this.length = 1, this[0] = this;
  var o2 = this[r2(820)] = { cy: t2, single: true, data: n2[r2(1036)] || {}, position: n2.position || { x: 0, y: 0 }, autoWidth: void 0, autoHeight: void 0, autoPadding: void 0, compoundBoundsClean: false, listeners: [], group: a2, style: {}, rstyle: {}, styleCxts: [], styleKeys: {}, removed: true, selected: !!n2.selected, selectable: n2.selectable === void 0 ? true : !!n2.selectable, locked: !!n2.locked, grabbed: false, grabbable: n2[r2(654)] === void 0 ? true : !!n2.grabbable, pannable: n2.pannable === void 0 ? a2 === r2(297) : !!n2.pannable, active: false, classes: new tn(), animation: { current: [], queue: [] }, rscratch: {}, scratch: n2.scratch || {}, edges: [], children: [], parent: n2[r2(1096)] && n2[r2(1096)].isNode() ? n2.parent : null, traversalCache: {}, backgrounding: false, bbCache: null, bbCacheShift: { x: 0, y: 0 }, bodyBounds: null, overlayBounds: null, labelBounds: { all: null, source: null, target: null, main: null }, arrowBounds: { source: null, target: null, "mid-source": null, "mid-target": null } };
  if (o2.position.x ?? (o2.position.x = 0), o2[r2(225)].y ?? (o2.position.y = 0), n2.renderedPosition) {
    var s2 = n2.renderedPosition, c2 = t2[r2(996)](), l2 = t2[r2(1242)]();
    o2.position = { x: (s2.x - c2.x) / l2, y: (s2.y - c2.y) / l2 };
  }
  var u2 = [];
  O(n2.classes) ? u2 = n2.classes : E(n2[r2(703)]) && (u2 = n2[r2(703)].split(/\s+/));
  for (var d2 = 0, f2 = u2.length; d2 < f2; d2++) {
    var p2 = u2[d2];
    !p2 || p2 === `` || o2.classes.add(p2);
  }
  this.createEmitter(), (i2 === void 0 || i2) && this[r2(1162)]();
  var m2 = n2[r2(1353)] || n2[r2(943)];
  m2 && (zt("Setting a `style` bypass at element creation should be done only when absolutely necessary.  Try to use the stylesheet instead."), this.style(m2));
}, rn = function(t2) {
  var n2 = e;
  return t2 = { bfs: t2[n2(255)] || !t2[n2(549)], dfs: t2.dfs || !t2[n2(255)] }, function(e2, r2, i2) {
    var a2 = n2, o2;
    k(e2) && !P(e2) && (o2 = e2, e2 = o2.roots || o2.root, r2 = o2.visit, i2 = o2.directed), i2 = arguments.length === 2 && !D(r2) ? r2 : i2, r2 = D(r2) ? r2 : function() {
    };
    for (var s2 = this._private.cy, c2 = e2 = E(e2) ? this.filter(e2) : e2, l2 = [], u2 = [], d2 = {}, f2 = {}, p2 = {}, m2 = 0, h2, g2 = this.byGroup(), _2 = g2[a2(565)], v2 = g2.edges, y2 = 0; y2 < c2.length; y2++) {
      var b2 = c2[y2], x2 = b2.id();
      b2.isNode() && (l2.unshift(b2), t2.bfs && (p2[x2] = true, u2[a2(254)](b2)), f2[x2] = 0);
    }
    for (var S2 = function() {
      var e3 = a2, n3 = t2.bfs ? l2.shift() : l2.pop(), o3 = n3.id();
      if (t2.dfs) {
        if (p2[o3]) return 0;
        p2[o3] = true, u2.push(n3);
      }
      var s3 = f2[o3], c3 = d2[o3], g3 = c3 == null ? null : c3.source(), y3 = c3 == null ? null : c3.target(), b3 = c3 == null ? void 0 : n3.same(g3) ? y3[0] : g3[0], x3 = r2(n3, c3, b3, m2++, s3);
      if (x3 === true) return h2 = n3, 1;
      if (x3 === false) return 1;
      for (var S3 = n3.connectedEdges().filter(function(e4) {
        var t3 = $;
        return (!i2 || e4.source().same(n3)) && v2[t3(1099)](e4);
      }), C3 = 0; C3 < S3.length; C3++) {
        var w3 = S3[C3], T3 = w3.connectedNodes()[e3(670)](function(e4) {
          return !e4.same(n3) && _2.has(e4);
        }), E2 = T3.id();
        T3.length !== 0 && !p2[E2] && (T3 = T3[0], l2.push(T3), t2.bfs && (p2[E2] = true, u2[e3(254)](T3)), d2[E2] = w3, f2[E2] = f2[o3] + 1);
      }
    }, C2; l2.length !== 0 && (C2 = S2(), !(C2 !== 0 && C2 === 1)); ) ;
    for (var w2 = s2.collection(), T2 = 0; T2 < u2.length; T2++) {
      var O2 = u2[T2], A2 = d2[O2.id()];
      A2 != null && w2.push(A2), w2.push(O2);
    }
    return { path: s2.collection(w2), found: s2.collection(h2) };
  };
}, an = { breadthFirstSearch: rn({ bfs: true }), depthFirstSearch: rn({ dfs: true }) };
an[e(255)] = an[e(837)], an.dfs = an.depthFirstSearch;
var on = { exports: {} }, sn = on.exports, cn;
function ln() {
  return cn ? on.exports : (cn = 1, (function(e2, t2) {
    (function() {
      var t3, n2, r2 = Math.floor, i2, a2, o2, s2, c2, l2, u2 = Math.min, d2, f2, p2, m2, h2;
      n2 = function(e3, t4) {
        return e3 < t4 ? -1 : +(e3 > t4);
      }, l2 = function(e3, t4, i3, a3, o3) {
        var s3 = $, c3;
        if (i3 ?? (i3 = 0), o3 ?? (o3 = n2), i3 < 0) throw Error(`lo must be non-negative`);
        for (a3 ?? (a3 = e3.length); i3 < a3; ) c3 = r2((i3 + a3) / 2), o3(t4, e3[c3]) < 0 ? a3 = c3 : i3 = c3 + 1;
        return [].splice.apply(e3, [i3, i3 - i3][s3(627)](t4)), t4;
      }, o2 = function(e3, t4, r3) {
        return r3 ?? (r3 = n2), e3.push(t4), m2(e3, 0, e3.length - 1, r3);
      }, a2 = function(e3, t4) {
        var r3 = $, i3, a3;
        return t4 ?? (t4 = n2), i3 = e3[r3(229)](), e3.length ? (a3 = e3[0], e3[0] = i3, h2(e3, 0, t4)) : a3 = i3, a3;
      }, c2 = function(e3, t4, r3) {
        var i3;
        return r3 ?? (r3 = n2), i3 = e3[0], e3[0] = t4, h2(e3, 0, r3), i3;
      }, s2 = function(e3, t4, r3) {
        var i3 = $, a3;
        return r3 ?? (r3 = n2), e3[i3(441)] && r3(e3[0], t4) < 0 && (a3 = [e3[0], t4], t4 = a3[0], e3[0] = a3[1], h2(e3, 0, r3)), t4;
      }, i2 = function(e3, t4) {
        var i3 = $, a3, o3, s3, c3, l3, u3;
        for (t4 ?? (t4 = n2), c3 = (function() {
          u3 = [];
          for (var t5 = 0, n3 = r2(e3.length / 2); 0 <= n3 ? t5 < n3 : t5 > n3; 0 <= n3 ? t5++ : t5--) u3.push(t5);
          return u3;
        }).apply(this)[i3(840)](), l3 = [], o3 = 0, s3 = c3.length; o3 < s3; o3++) a3 = c3[o3], l3.push(h2(e3, a3, t4));
        return l3;
      }, p2 = function(e3, t4, r3) {
        var i3;
        if (r3 ?? (r3 = n2), i3 = e3.indexOf(t4), i3 !== -1) return m2(e3, 0, i3, r3), h2(e3, i3, r3);
      }, d2 = function(e3, t4, r3) {
        var a3 = $, o3, c3, l3, u3, d3;
        if (r3 ?? (r3 = n2), c3 = e3[a3(534)](0, t4), !c3.length) return c3;
        for (i2(c3, r3), d3 = e3.slice(t4), l3 = 0, u3 = d3.length; l3 < u3; l3++) o3 = d3[l3], s2(c3, o3, r3);
        return c3.sort(r3).reverse();
      }, f2 = function(e3, t4, r3) {
        var o3 = $, s3, c3, d3, f3, p3, m3, h3, g2, _2;
        if (r3 ?? (r3 = n2), t4 * 10 <= e3.length) {
          if (d3 = e3.slice(0, t4)[o3(1425)](r3), !d3.length) return d3;
          for (c3 = d3[d3.length - 1], h3 = e3[o3(534)](t4), f3 = 0, m3 = h3.length; f3 < m3; f3++) s3 = h3[f3], r3(s3, c3) < 0 && (l2(d3, s3, 0, null, r3), d3.pop(), c3 = d3[d3.length - 1]);
          return d3;
        }
        for (i2(e3, r3), _2 = [], p3 = 0, g2 = u2(t4, e3[o3(441)]); 0 <= g2 ? p3 < g2 : p3 > g2; 0 <= g2 ? ++p3 : --p3) _2.push(a2(e3, r3));
        return _2;
      }, m2 = function(e3, t4, r3, i3) {
        var a3, o3, s3;
        for (i3 ?? (i3 = n2), a3 = e3[r3]; r3 > t4; ) {
          if (s3 = r3 - 1 >> 1, o3 = e3[s3], i3(a3, o3) < 0) {
            e3[r3] = o3, r3 = s3;
            continue;
          }
          break;
        }
        return e3[r3] = a3;
      }, h2 = function(e3, t4, r3) {
        var i3 = $, a3, o3, s3, c3, l3;
        for (r3 ?? (r3 = n2), o3 = e3[i3(441)], l3 = t4, s3 = e3[t4], a3 = 2 * t4 + 1; a3 < o3; ) c3 = a3 + 1, c3 < o3 && !(r3(e3[a3], e3[c3]) < 0) && (a3 = c3), e3[t4] = e3[a3], t4 = a3, a3 = 2 * t4 + 1;
        return e3[t4] = s3, m2(e3, l3, t4, r3);
      }, t3 = (function() {
        var e3 = $;
        t4[e3(254)] = o2, t4.pop = a2, t4.replace = c2, t4.pushpop = s2, t4[e3(261)] = i2, t4.updateItem = p2, t4.nlargest = d2, t4.nsmallest = f2;
        function t4(e4) {
          this.cmp = e4 ?? n2, this.nodes = [];
        }
        return t4.prototype.push = function(e4) {
          return o2(this.nodes, e4, this.cmp);
        }, t4.prototype.pop = function() {
          return a2(this.nodes, this.cmp);
        }, t4.prototype.peek = function() {
          var t5 = e3;
          return this[t5(565)][0];
        }, t4[e3(216)][e3(773)] = function(t5) {
          var n3 = e3;
          return this[n3(565)].indexOf(t5) !== -1;
        }, t4.prototype[e3(440)] = function(e4) {
          return c2(this.nodes, e4, this.cmp);
        }, t4.prototype.pushpop = function(t5) {
          var n3 = e3;
          return s2(this.nodes, t5, this[n3(1416)]);
        }, t4[e3(216)].heapify = function() {
          var t5 = e3;
          return i2(this[t5(565)], this.cmp);
        }, t4.prototype.updateItem = function(t5) {
          var n3 = e3;
          return p2(this.nodes, t5, this[n3(1416)]);
        }, t4.prototype.clear = function() {
          return this.nodes = [];
        }, t4.prototype.empty = function() {
          var t5 = e3;
          return this[t5(565)][t5(441)] === 0;
        }, t4.prototype[e3(1092)] = function() {
          var t5 = e3;
          return this.nodes[t5(441)];
        }, t4.prototype.clone = function() {
          var n3 = e3, r3 = new t4();
          return r3.nodes = this[n3(565)].slice(0), r3;
        }, t4.prototype.toArray = function() {
          return this.nodes.slice(0);
        }, t4.prototype.insert = t4.prototype.push, t4.prototype.top = t4[e3(216)].peek, t4.prototype.front = t4.prototype.peek, t4[e3(216)].has = t4.prototype.contains, t4.prototype.copy = t4.prototype.clone, t4;
      })(), (function(t4, n3) {
        return e2.exports = n3();
      })(this, function() {
        return t3;
      });
    }).call(sn);
  })(on), on.exports);
}
var un, dn;
function fn() {
  return dn ? un : (dn = 1, un = ln(), un);
}
var pn = ve(fn()), mn = Kt({ root: null, weight: function(e2) {
  return 1;
}, directed: false }), hn = { dijkstra: function(t2) {
  var n2 = e;
  if (!k(t2)) {
    var r2 = arguments;
    t2 = { root: r2[0], weight: r2[1], directed: r2[2] };
  }
  var i2 = mn(t2), a2 = i2.root, o2 = i2.weight, s2 = i2.directed, c2 = this, l2 = o2, u2 = E(a2) ? this.filter(a2)[0] : a2[0], d2 = {}, f2 = {}, p2 = {}, m2 = this.byGroup(), h2 = m2.nodes, g2 = m2[n2(297)];
  g2.unmergeBy(function(e2) {
    return e2[n2(228)]();
  });
  for (var _2 = function(e2) {
    return d2[e2.id()];
  }, v2 = function(e2, t3) {
    d2[e2.id()] = t3, y2.updateItem(e2);
  }, y2 = new pn(function(e2, t3) {
    return _2(e2) - _2(t3);
  }), b2 = 0; b2 < h2[n2(441)]; b2++) {
    var x2 = h2[b2];
    d2[x2.id()] = x2.same(u2) ? 0 : 1 / 0, y2.push(x2);
  }
  for (var S2 = function(e2, t3) {
    for (var n3 = (s2 ? e2.edgesTo(t3) : e2.edgesWith(t3)).intersect(g2), r3 = 1 / 0, i3, a3 = 0; a3 < n3.length; a3++) {
      var o3 = n3[a3], c3 = l2(o3);
      (c3 < r3 || !i3) && (r3 = c3, i3 = o3);
    }
    return { edge: i3, dist: r3 };
  }; y2[n2(1092)]() > 0; ) {
    var C2 = y2[n2(229)](), w2 = _2(C2), T2 = C2.id();
    if (p2[T2] = w2, w2 !== 1 / 0) for (var D2 = C2.neighborhood().intersect(h2), O2 = 0; O2 < D2.length; O2++) {
      var A2 = D2[O2], j2 = A2.id(), M2 = S2(C2, A2), N2 = w2 + M2.dist;
      N2 < _2(A2) && (v2(A2, N2), f2[j2] = { node: C2, edge: M2.edge });
    }
  }
  return { distanceTo: function(e2) {
    return p2[(E(e2) ? h2.filter(e2)[0] : e2[0]).id()];
  }, pathTo: function(e2) {
    var t3 = n2, r3 = E(e2) ? h2.filter(e2)[0] : e2[0], i3 = [], a3 = r3, o3 = a3.id();
    if (r3[t3(441)] > 0) for (i3.unshift(r3); f2[o3]; ) {
      var s3 = f2[o3];
      i3.unshift(s3.edge), i3.unshift(s3.node), a3 = s3.node, o3 = a3.id();
    }
    return c2[t3(1418)](i3);
  } };
} }, gn = { kruskal: function(t2) {
  var n2 = e;
  t2 || (t2 = function(e2) {
    return 1;
  });
  for (var r2 = this.byGroup(), i2 = r2.nodes, a2 = r2.edges, o2 = i2.length, s2 = Array(o2), c2 = i2, l2 = function(e2) {
    for (var t3 = 0; t3 < s2.length; t3++) if (s2[t3].has(e2)) return t3;
  }, u2 = 0; u2 < o2; u2++) s2[u2] = this.spawn(i2[u2]);
  for (var d2 = a2.sort(function(e2, n3) {
    return t2(e2) - t2(n3);
  }), f2 = 0; f2 < d2.length; f2++) {
    var p2 = d2[f2], m2 = p2.source()[0], h2 = p2.target()[0], g2 = l2(m2), _2 = l2(h2), v2 = s2[g2], y2 = s2[_2];
    g2 !== _2 && (c2.merge(p2), v2[n2(1221)](y2), s2.splice(_2, 1));
  }
  return c2;
} }, _n = Kt({ root: null, goal: null, weight: function(e2) {
  return 1;
}, heuristic: function(e2) {
  return 0;
}, directed: false }), vn = { aStar: function(t2) {
  var n2 = e, r2 = this.cy(), i2 = _n(t2), a2 = i2[n2(575)], o2 = i2.goal, s2 = i2[n2(897)], c2 = i2.directed, l2 = i2.weight;
  a2 = r2.collection(a2)[0], o2 = r2[n2(999)](o2)[0];
  var u2 = a2.id(), d2 = o2.id(), f2 = {}, p2 = {}, m2 = {}, h2 = new pn(function(e2, t3) {
    return p2[e2.id()] - p2[t3.id()];
  }), g2 = new tn(), _2 = {}, v2 = {}, y2 = function(e2, t3) {
    h2.push(e2), g2.add(t3);
  }, b2, x2, S2 = function() {
    b2 = h2.pop(), x2 = b2.id(), g2.delete(x2);
  }, C2 = function(e2) {
    return g2.has(e2);
  };
  y2(a2, u2), f2[u2] = 0, p2[u2] = s2(a2);
  for (var w2 = 0; h2.size() > 0; ) {
    if (S2(), w2++, x2 === d2) {
      for (var T2 = [], E2 = o2, D2 = d2, O2 = v2[D2]; T2.unshift(E2), O2 != null && T2.unshift(O2), E2 = _2[D2], E2 != null; ) D2 = E2.id(), O2 = v2[D2];
      return { found: true, distance: f2[x2], path: this[n2(1418)](T2), steps: w2 };
    }
    m2[x2] = true;
    for (var k2 = b2[n2(820)].edges, A2 = 0; A2 < k2[n2(441)]; A2++) {
      var j2 = k2[A2];
      if (this[n2(374)](j2.id()) && !(c2 && j2.data(`source`) !== x2)) {
        var M2 = j2.source(), N2 = j2.target(), P2 = M2.id() === x2 ? N2 : M2, F2 = P2.id();
        if (this.hasElementWithId(F2) && !m2[F2]) {
          var I2 = f2[x2] + l2(j2);
          if (!C2(F2)) {
            f2[F2] = I2, p2[F2] = I2 + s2(P2), y2(P2, F2), _2[F2] = b2, v2[F2] = j2;
            continue;
          }
          I2 < f2[F2] && (f2[F2] = I2, p2[F2] = I2 + s2(P2), _2[F2] = b2, v2[F2] = j2);
        }
      }
    }
  }
  return { found: false, distance: void 0, path: void 0, steps: w2 };
} }, yn = Kt({ weight: function(e2) {
  return 1;
}, directed: false }), bn = { floydWarshall: function(t2) {
  for (var n2 = e, r2 = this.cy(), i2 = yn(t2), a2 = i2.weight, o2 = i2.directed, s2 = a2, c2 = this[n2(621)](), l2 = c2[n2(565)], u2 = c2.edges, d2 = l2.length, f2 = d2 * d2, p2 = function(e2) {
    return l2.indexOf(e2);
  }, m2 = function(e2) {
    return l2[e2];
  }, h2 = Array(f2), g2 = 0; g2 < f2; g2++) {
    var _2 = g2 % d2;
    (g2 - _2) / d2 === _2 ? h2[g2] = 0 : h2[g2] = 1 / 0;
  }
  for (var v2 = Array(f2), y2 = Array(f2), b2 = 0; b2 < u2.length; b2++) {
    var x2 = u2[b2], S2 = x2.source()[0], C2 = x2[n2(1192)]()[0];
    if (S2 !== C2) {
      var w2 = p2(S2), T2 = p2(C2), D2 = w2 * d2 + T2, O2 = s2(x2);
      if (h2[D2] > O2 && (h2[D2] = O2, v2[D2] = T2, y2[D2] = x2), !o2) {
        var k2 = T2 * d2 + w2;
        !o2 && h2[k2] > O2 && (h2[k2] = O2, v2[k2] = w2, y2[k2] = x2);
      }
    }
  }
  for (var A2 = 0; A2 < d2; A2++) for (var j2 = 0; j2 < d2; j2++) for (var M2 = j2 * d2 + A2, N2 = 0; N2 < d2; N2++) {
    var P2 = j2 * d2 + N2, F2 = A2 * d2 + N2;
    h2[M2] + h2[F2] < h2[P2] && (h2[P2] = h2[M2] + h2[F2], v2[P2] = v2[M2]);
  }
  var I2 = function(e2) {
    return (E(e2) ? r2.filter(e2) : e2)[0];
  }, L2 = function(e2) {
    return p2(I2(e2));
  };
  return { distance: function(e2, t3) {
    var n3 = L2(e2), r3 = L2(t3);
    return h2[n3 * d2 + r3];
  }, path: function(e2, t3) {
    var i3 = n2, a3 = L2(e2), o3 = L2(t3), s3 = m2(a3);
    if (a3 === o3) return s3.collection();
    if (v2[a3 * d2 + o3] == null) return r2.collection();
    var c3 = r2.collection(), l3 = a3, u3;
    for (c3[i3(1221)](s3); a3 !== o3; ) l3 = a3, a3 = v2[a3 * d2 + o3], u3 = y2[l3 * d2 + a3], c3.merge(u3), c3.merge(m2(a3));
    return c3;
  } };
} }, xn = Kt({ weight: function(e2) {
  return 1;
}, directed: false, root: null }), Sn = { bellmanFord: function(t2) {
  var n2 = e, r2 = this, i2 = xn(t2), a2 = i2.weight, o2 = i2[n2(275)], s2 = i2.root, c2 = a2, l2 = this, u2 = this.cy(), d2 = this.byGroup(), f2 = d2.edges, p2 = d2.nodes, m2 = p2.length, h2 = new Qt(), g2 = false, _2 = [];
  s2 = u2[n2(999)](s2)[0], f2.unmergeBy(function(e2) {
    return e2.isLoop();
  });
  for (var v2 = f2.length, y2 = function(e2) {
    var t3 = h2[n2(1276)](e2.id());
    return t3 || (t3 = {}, h2.set(e2.id(), t3)), t3;
  }, b2 = function(e2) {
    return (E(e2) ? u2.$(e2) : e2)[0];
  }, x2 = function(e2) {
    return y2(b2(e2)).dist;
  }, S2 = function(e2) {
    for (var t3 = n2, i3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s2, a3 = b2(e2), o3 = [], c3 = a3; ; ) {
      if (c3 == null) return r2.spawn();
      var u3 = y2(c3), d3 = u3.edge, f3 = u3[t3(527)];
      if (o3.unshift(c3[0]), c3.same(i3) && o3.length > 0) break;
      d3 != null && o3[t3(1282)](d3), c3 = f3;
    }
    return l2.spawn(o3);
  }, C2 = 0; C2 < m2; C2++) {
    var w2 = p2[C2], T2 = y2(w2);
    w2[n2(562)](s2) ? T2.dist = 0 : T2[n2(1366)] = 1 / 0, T2.pred = null, T2.edge = null;
  }
  for (var D2 = false, O2 = function(e2, t3, r3, i3, a3, o3) {
    var s3 = n2, c3 = i3.dist + o3;
    c3 < a3.dist && !r3[s3(562)](i3.edge) && (a3.dist = c3, a3.pred = e2, a3[s3(1191)] = r3, D2 = true);
  }, k2 = 1; k2 < m2; k2++) {
    D2 = false;
    for (var A2 = 0; A2 < v2; A2++) {
      var j2 = f2[A2], M2 = j2[n2(1256)](), N2 = j2.target(), P2 = c2(j2), F2 = y2(M2), I2 = y2(N2);
      O2(M2, N2, j2, F2, I2, P2), o2 || O2(N2, M2, j2, I2, F2, P2);
    }
    if (!D2) break;
  }
  if (D2) for (var L2 = [], R2 = 0; R2 < v2; R2++) {
    var z2 = f2[R2], B2 = z2.source(), V2 = z2.target(), H2 = c2(z2), U2 = y2(B2)[n2(1366)], W2 = y2(V2)[n2(1366)];
    if (U2 + H2 < W2 || !o2 && W2 + H2 < U2) if (g2 || (g2 = (zt(`Graph contains a negative weight cycle for Bellman-Ford`), true)), t2.findNegativeWeightCycles !== false) {
      var G2 = [];
      U2 + H2 < W2 && G2[n2(254)](B2), !o2 && W2 + H2 < U2 && G2.push(V2);
      for (var K2 = G2.length, q2 = 0; q2 < K2; q2++) {
        var J2 = G2[q2], Y2 = [J2];
        Y2.push(y2(J2).edge);
        for (var ee2 = y2(J2).pred; Y2.indexOf(ee2) === -1; ) Y2.push(ee2), Y2.push(y2(ee2).edge), ee2 = y2(ee2).pred;
        Y2 = Y2.slice(Y2.indexOf(ee2));
        for (var X2 = Y2[0].id(), te2 = 0, ne2 = 2; ne2 < Y2.length; ne2 += 2) Y2[ne2].id() < X2 && (X2 = Y2[ne2].id(), te2 = ne2);
        Y2 = Y2.slice(te2).concat(Y2.slice(0, te2)), Y2.push(Y2[0]);
        var re2 = Y2[n2(393)](function(e2) {
          return e2.id();
        }).join(`,`);
        L2.indexOf(re2) === -1 && (_2.push(l2[n2(1418)](Y2)), L2.push(re2));
      }
    } else break;
  }
  return { distanceTo: x2, pathTo: S2, hasNegativeWeightCycle: g2, negativeWeightCycles: _2 };
} }, Cn = Math.sqrt(2), wn = function(e2, t2, n2) {
  n2.length === 0 && Lt(`Karger-Stein must be run on a connected (sub)graph`);
  for (var r2 = n2[e2], i2 = r2[1], a2 = r2[2], o2 = t2[i2], s2 = t2[a2], c2 = n2, l2 = c2.length - 1; l2 >= 0; l2--) {
    var u2 = c2[l2], d2 = u2[1], f2 = u2[2];
    (t2[d2] === o2 && t2[f2] === s2 || t2[d2] === s2 && t2[f2] === o2) && c2.splice(l2, 1);
  }
  for (var p2 = 0; p2 < c2.length; p2++) {
    var m2 = c2[p2];
    m2[1] === s2 ? (c2[p2] = m2.slice(), c2[p2][1] = o2) : m2[2] === s2 && (c2[p2] = m2.slice(), c2[p2][2] = o2);
  }
  for (var h2 = 0; h2 < t2.length; h2++) t2[h2] === s2 && (t2[h2] = o2);
  return c2;
}, Tn = function(t2, n2, r2, i2) {
  for (var a2 = e; r2 > i2; ) n2 = wn(Math.floor(Math.random() * n2[a2(441)]), t2, n2), r2--;
  return n2;
}, En = { kargerStein: function() {
  var t2 = e, n2 = this, r2 = this.byGroup(), i2 = r2[t2(565)], a2 = r2[t2(297)];
  a2[t2(260)](function(e2) {
    return e2.isLoop();
  });
  var o2 = i2.length, s2 = a2[t2(441)], c2 = Math.ceil((Math.log(o2) / Math.LN2) ** 2), l2 = Math.floor(o2 / Cn);
  if (o2 < 2) {
    Lt(`At least 2 nodes are required for Karger-Stein algorithm`);
    return;
  }
  for (var u2 = [], d2 = 0; d2 < s2; d2++) {
    var f2 = a2[d2];
    u2.push([d2, i2.indexOf(f2.source()), i2[t2(294)](f2.target())]);
  }
  for (var p2 = 1 / 0, m2 = [], h2 = Array(o2), g2 = Array(o2), _2 = Array(o2), v2 = function(e2, t3) {
    for (var n3 = 0; n3 < o2; n3++) t3[n3] = e2[n3];
  }, y2 = 0; y2 <= c2; y2++) {
    for (var b2 = 0; b2 < o2; b2++) g2[b2] = b2;
    var x2 = Tn(g2, u2.slice(), o2, l2), S2 = x2.slice();
    v2(g2, _2);
    var C2 = Tn(g2, x2, l2, 2), w2 = Tn(_2, S2, l2, 2);
    C2.length <= w2.length && C2.length < p2 ? (p2 = C2.length, m2 = C2, v2(g2, h2)) : w2.length <= C2.length && w2.length < p2 && (p2 = w2.length, m2 = w2, v2(_2, h2));
  }
  for (var T2 = this.spawn(m2.map(function(e2) {
    return a2[e2[0]];
  })), E2 = this[t2(1418)](), D2 = this.spawn(), O2 = h2[0], k2 = 0; k2 < h2.length; k2++) {
    var A2 = h2[k2], j2 = i2[k2];
    A2 === O2 ? E2[t2(1221)](j2) : D2.merge(j2);
  }
  var M2 = function(e2) {
    var r3 = t2, i3 = n2[r3(1418)]();
    return e2.forEach(function(e3) {
      var t3 = r3;
      i3.merge(e3), e3[t3(778)]().forEach(function(e4) {
        var r4 = t3;
        n2.contains(e4) && !T2[r4(773)](e4) && i3.merge(e4);
      });
    }), i3;
  };
  return { cut: T2, components: [M2(E2), M2(D2)], partition1: E2, partition2: D2 };
} }, Dn = function(e2) {
  return { x: e2.x, y: e2.y };
}, On = function(e2, t2, n2) {
  return { x: e2.x * t2 + n2.x, y: e2.y * t2 + n2.y };
}, kn = function(e2, t2, n2) {
  return { x: (e2.x - n2.x) / t2, y: (e2.y - n2.y) / t2 };
}, An = function(e2) {
  return { x: e2[0], y: e2[1] };
}, jn = function(t2) {
  for (var n2 = e, r2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, i2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : t2[n2(441)], a2 = 1 / 0, o2 = r2; o2 < i2; o2++) {
    var s2 = t2[o2];
    isFinite(s2) && (a2 = Math.min(s2, a2));
  }
  return a2;
}, Mn = function(e2) {
  for (var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e2.length, r2 = -1 / 0, i2 = t2; i2 < n2; i2++) {
    var a2 = e2[i2];
    isFinite(a2) && (r2 = Math.max(a2, r2));
  }
  return r2;
}, Nn = function(t2) {
  for (var n2 = e, r2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, i2 = arguments[n2(441)] > 2 && arguments[2] !== void 0 ? arguments[2] : t2.length, a2 = 0, o2 = 0, s2 = r2; s2 < i2; s2++) {
    var c2 = t2[s2];
    isFinite(c2) && (a2 += c2, o2++);
  }
  return a2 / o2;
}, Pn = function(t2) {
  var n2 = e, r2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, i2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : t2.length, a2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, o2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, s2 = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true;
  a2 ? t2 = t2.slice(r2, i2) : (i2 < t2.length && t2.splice(i2, t2.length - i2), r2 > 0 && t2.splice(0, r2));
  for (var c2 = 0, l2 = t2[n2(441)] - 1; l2 >= 0; l2--) {
    var u2 = t2[l2];
    s2 ? isFinite(u2) || (t2[l2] = -1 / 0, c2++) : t2[n2(1185)](l2, 1);
  }
  o2 && t2.sort(function(e2, t3) {
    return e2 - t3;
  });
  var d2 = t2.length, f2 = Math.floor(d2 / 2);
  return d2 % 2 == 0 ? (t2[f2 - 1 + c2] + t2[f2 + c2]) / 2 : t2[f2 + 1 + c2];
}, Fn = function(e2) {
  return Math.PI * e2 / 180;
}, In = function(e2, t2) {
  return Math.atan2(t2, e2) - Math.PI / 2;
}, Ln = Math[e(802)] || function(e2) {
  return Math.log(e2) / Math.log(2);
}, Rn = function(e2) {
  return e2 > 0 ? 1 : e2 < 0 ? -1 : 0;
}, zn = function(e2, t2) {
  return Math.sqrt(Bn(e2, t2));
}, Bn = function(e2, t2) {
  var n2 = t2.x - e2.x, r2 = t2.y - e2.y;
  return n2 * n2 + r2 * r2;
}, Vn = function(e2) {
  for (var t2 = e2.length, n2 = 0, r2 = 0; r2 < t2; r2++) n2 += e2[r2];
  for (var i2 = 0; i2 < t2; i2++) e2[i2] = e2[i2] / n2;
  return e2;
}, Hn = function(e2, t2, n2, r2) {
  return (1 - r2) * (1 - r2) * e2 + 2 * (1 - r2) * r2 * t2 + r2 * r2 * n2;
}, Un = function(e2, t2, n2, r2) {
  return { x: Hn(e2.x, t2.x, n2.x, r2), y: Hn(e2.y, t2.y, n2.y, r2) };
}, Wn = function(e2, t2, n2, r2) {
  var i2 = { x: t2.x - e2.x, y: t2.y - e2.y }, a2 = zn(e2, t2), o2 = { x: i2.x / a2, y: i2.y / a2 };
  return n2 ?? (n2 = 0), r2 ?? (r2 = n2 * a2), { x: e2.x + o2.x * r2, y: e2.y + o2.y * r2 };
}, Gn = function(t2, n2, r2) {
  return Math.max(t2, Math[e(1120)](r2, n2));
}, Kn = function(e2) {
  if (e2 == null) return { x1: 1 / 0, y1: 1 / 0, x2: -1 / 0, y2: -1 / 0, w: 0, h: 0 };
  if (e2.x1 != null && e2.y1 != null) {
    if (e2.x2 != null && e2.y2 != null && e2.x2 >= e2.x1 && e2.y2 >= e2.y1) return { x1: e2.x1, y1: e2.y1, x2: e2.x2, y2: e2.y2, w: e2.x2 - e2.x1, h: e2.y2 - e2.y1 };
    if (e2.w != null && e2.h != null && e2.w >= 0 && e2.h >= 0) return { x1: e2.x1, y1: e2.y1, x2: e2.x1 + e2.w, y2: e2.y1 + e2.h, w: e2.w, h: e2.h };
  }
}, qn = function(e2) {
  return { x1: e2.x1, x2: e2.x2, w: e2.w, y1: e2.y1, y2: e2.y2, h: e2.h };
}, Jn = function(e2) {
  e2.x1 = 1 / 0, e2.y1 = 1 / 0, e2.x2 = -1 / 0, e2.y2 = -1 / 0, e2.w = 0, e2.h = 0;
}, Yn = function(e2, t2) {
  e2.x1 = Math.min(e2.x1, t2.x1), e2.x2 = Math.max(e2.x2, t2.x2), e2.w = e2.x2 - e2.x1, e2.y1 = Math.min(e2.y1, t2.y1), e2.y2 = Math.max(e2.y2, t2.y2), e2.h = e2.y2 - e2.y1;
}, Xn = function(t2, n2, r2) {
  var i2 = e;
  t2.x1 = Math.min(t2.x1, n2), t2.x2 = Math.max(t2.x2, n2), t2.w = t2.x2 - t2.x1, t2.y1 = Math.min(t2.y1, r2), t2.y2 = Math[i2(701)](t2.y2, r2), t2.h = t2.y2 - t2.y1;
}, Zn = function(e2) {
  var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e2.x1 -= t2, e2.x2 += t2, e2.y1 -= t2, e2.y2 += t2, e2.w = e2.x2 - e2.x1, e2.h = e2.y2 - e2.y1, e2;
}, Qn = function(t2) {
  var n2 = e, r2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [0], i2, a2, o2, s2;
  if (r2.length === 1) i2 = a2 = o2 = s2 = r2[0];
  else if (r2[n2(441)] === 2) i2 = o2 = r2[0], s2 = a2 = r2[1];
  else if (r2.length === 4) {
    var c2 = p(r2, 4);
    i2 = c2[0], a2 = c2[1], o2 = c2[2], s2 = c2[3];
  }
  return t2.x1 -= s2, t2.x2 += a2, t2.y1 -= i2, t2.y2 += o2, t2.w = t2.x2 - t2.x1, t2.h = t2.y2 - t2.y1, t2;
}, $n = function(e2, t2) {
  e2.x1 = t2.x1, e2.y1 = t2.y1, e2.x2 = t2.x2, e2.y2 = t2.y2, e2.w = e2.x2 - e2.x1, e2.h = e2.y2 - e2.y1;
}, er = function(e2, t2) {
  return !(e2.x1 > t2.x2 || t2.x1 > e2.x2 || e2.x2 < t2.x1 || t2.x2 < e2.x1 || e2.y2 < t2.y1 || t2.y2 < e2.y1 || e2.y1 > t2.y2 || t2.y1 > e2.y2);
}, tr = function(e2, t2, n2) {
  return e2.x1 <= t2 && t2 <= e2.x2 && e2.y1 <= n2 && n2 <= e2.y2;
}, nr = function(e2, t2) {
  return tr(e2, t2.x, t2.y);
}, rr = function(e2, t2) {
  return tr(e2, t2.x1, t2.y1) && tr(e2, t2.x2, t2.y2);
}, ir = Math.hypot ?? function(e2, t2) {
  return Math.sqrt(e2 * e2 + t2 * t2);
};
function ar(t2, n2) {
  var r2 = e;
  if (t2.length < 3) throw Error(`Need at least 3 vertices`);
  var i2 = function(e2, t3) {
    return { x: e2.x + t3.x, y: e2.y + t3.y };
  }, a2 = function(e2, t3) {
    return { x: e2.x - t3.x, y: e2.y - t3.y };
  }, o2 = function(e2, t3) {
    return { x: e2.x * t3, y: e2.y * t3 };
  }, s2 = function(e2, t3) {
    return e2.x * t3.y - e2.y * t3.x;
  }, c2 = function(e2) {
    var t3 = ir(e2.x, e2.y);
    return t3 === 0 ? { x: 0, y: 0 } : { x: e2.x / t3, y: e2.y / t3 };
  }, l2 = function(e2) {
    for (var t3 = $, n3 = 0, r3 = 0; r3 < e2[t3(441)]; r3++) {
      var i3 = e2[r3], a3 = e2[(r3 + 1) % e2[t3(441)]];
      n3 += i3.x * a3.y - a3.x * i3.y;
    }
    return n3 / 2;
  }, u2 = function(e2, t3, n3, r3) {
    var c3 = a2(t3, e2), l3 = a2(r3, n3), u3 = s2(c3, l3);
    return Math.abs(u3) < 1e-9 ? i2(e2, o2(c3, 0.5)) : i2(e2, o2(c3, s2(a2(n3, e2), l3) / u3));
  }, d2 = t2.map(function(e2) {
    return { x: e2.x, y: e2.y };
  });
  l2(d2) < 0 && d2.reverse();
  for (var f2 = d2.length, p2 = [], m2 = 0; m2 < f2; m2++) {
    var h2 = d2[m2], g2 = d2[(m2 + 1) % f2], _2 = a2(g2, h2), v2 = c2({ x: _2.y, y: -_2.x });
    p2[r2(254)](v2);
  }
  for (var y2 = p2.map(function(e2, t3) {
    return { p1: i2(d2[t3], o2(e2, n2)), p2: i2(d2[(t3 + 1) % f2], o2(e2, n2)) };
  }), b2 = [], x2 = 0; x2 < f2; x2++) {
    var S2 = y2[(x2 - 1 + f2) % f2], C2 = y2[x2], w2 = u2(S2.p1, S2.p2, C2.p1, C2.p2);
    b2[r2(254)](w2);
  }
  return b2;
}
function or(t2, n2, r2, i2, a2, o2) {
  var s2 = e, c2 = ar(wr(t2, n2, r2, i2, a2), o2), l2 = Kn();
  return c2[s2(1390)](function(e2) {
    return Xn(l2, e2.x, e2.y);
  }), l2;
}
var sr = function(t2, n2, r2, i2, a2, o2, s2) {
  var c2 = e, l2 = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : `auto`, u2 = l2 === `auto` ? jr(a2, o2) : l2, d2 = a2 / 2, f2 = o2 / 2;
  u2 = Math[c2(1120)](u2, d2, f2);
  var p2 = u2 !== d2, m2 = u2 !== f2, h2;
  if (p2) {
    var g2 = r2 - d2 + u2 - s2, _2 = i2 - f2 - s2;
    if (h2 = Cr(t2, n2, r2, i2, g2, _2, r2 + d2 - u2 + s2, _2, false), h2.length > 0) return h2;
  }
  if (m2) {
    var v2 = r2 + d2 + s2;
    if (h2 = Cr(t2, n2, r2, i2, v2, i2 - f2 + u2 - s2, v2, i2 + f2 - u2 + s2, false), h2.length > 0) return h2;
  }
  if (p2) {
    var y2 = r2 - d2 + u2 - s2, b2 = i2 + f2 + s2;
    if (h2 = Cr(t2, n2, r2, i2, y2, b2, r2 + d2 - u2 + s2, b2, false), h2.length > 0) return h2;
  }
  if (m2) {
    var x2 = r2 - d2 - s2;
    if (h2 = Cr(t2, n2, r2, i2, x2, i2 - f2 + u2 - s2, x2, i2 + f2 - u2 + s2, false), h2.length > 0) return h2;
  }
  var S2, C2 = r2 - d2 + u2, w2 = i2 - f2 + u2;
  if (S2 = xr(t2, n2, r2, i2, C2, w2, u2 + s2), S2.length > 0 && S2[0] <= C2 && S2[1] <= w2) return [S2[0], S2[1]];
  var T2 = r2 + d2 - u2, E2 = i2 - f2 + u2;
  if (S2 = xr(t2, n2, r2, i2, T2, E2, u2 + s2), S2.length > 0 && S2[0] >= T2 && S2[1] <= E2) return [S2[0], S2[1]];
  var D2 = r2 + d2 - u2, O2 = i2 + f2 - u2;
  if (S2 = xr(t2, n2, r2, i2, D2, O2, u2 + s2), S2[c2(441)] > 0 && S2[0] >= D2 && S2[1] >= O2) return [S2[0], S2[1]];
  var k2 = r2 - d2 + u2, A2 = i2 + f2 - u2;
  return S2 = xr(t2, n2, r2, i2, k2, A2, u2 + s2), S2.length > 0 && S2[0] <= k2 && S2[1] >= A2 ? [S2[0], S2[1]] : [];
}, cr = function(t2, n2, r2, i2, a2, o2, s2) {
  var c2 = e, l2 = s2, u2 = Math.min(r2, a2), d2 = Math.max(r2, a2), f2 = Math.min(i2, o2), p2 = Math[c2(701)](i2, o2);
  return u2 - l2 <= t2 && t2 <= d2 + l2 && f2 - l2 <= n2 && n2 <= p2 + l2;
}, lr = function(t2, n2, r2, i2, a2, o2, s2, c2, l2) {
  var u2 = e, d2 = { x1: Math[u2(1120)](r2, s2, a2) - l2, x2: Math[u2(701)](r2, s2, a2) + l2, y1: Math.min(i2, c2, o2) - l2, y2: Math.max(i2, c2, o2) + l2 };
  return !(t2 < d2.x1 || t2 > d2.x2 || n2 < d2.y1 || n2 > d2.y2);
}, ur = function(e2, t2, n2, r2) {
  n2 -= r2;
  var i2 = t2 * t2 - 4 * e2 * n2;
  if (i2 < 0) return [];
  var a2 = Math.sqrt(i2), o2 = 2 * e2;
  return [(-t2 + a2) / o2, (-t2 - a2) / o2];
}, dr = function(t2, n2, r2, i2, a2) {
  var o2 = e;
  t2 === 0 && (t2 = 1e-5), n2 /= t2, r2 /= t2, i2 /= t2;
  var s2, c2 = (3 * r2 - n2 * n2) / 9, l2 = -(27 * i2) + n2 * (9 * r2 - n2 * n2 * 2), u2, d2, f2, p2, m2;
  if (l2 /= 54, s2 = c2 * c2 * c2 + l2 * l2, a2[1] = 0, p2 = n2 / 3, s2 > 0) {
    d2 = l2 + Math.sqrt(s2), d2 = d2 < 0 ? -((-d2) ** (1 / 3)) : d2 ** (1 / 3), f2 = l2 - Math.sqrt(s2), f2 = f2 < 0 ? -Math[o2(1252)](-f2, 1 / 3) : f2 ** (1 / 3), a2[0] = -p2 + d2 + f2, p2 += (d2 + f2) / 2, a2[4] = a2[2] = -p2, p2 = Math.sqrt(3) * (-f2 + d2) / 2, a2[3] = p2, a2[5] = -p2;
    return;
  }
  if (a2[5] = a2[3] = 0, s2 === 0) {
    m2 = l2 < 0 ? -((-l2) ** (1 / 3)) : l2 ** (1 / 3), a2[0] = -p2 + 2 * m2, a2[4] = a2[2] = -(m2 + p2);
    return;
  }
  c2 = -c2, u2 = c2 * c2 * c2, u2 = Math[o2(531)](l2 / Math.sqrt(u2)), m2 = 2 * Math.sqrt(c2), a2[0] = -p2 + m2 * Math.cos(u2 / 3), a2[2] = -p2 + m2 * Math.cos((u2 + 2 * Math.PI) / 3), a2[4] = -p2 + m2 * Math.cos((u2 + 4 * Math.PI) / 3);
}, fr = function(t2, n2, r2, i2, a2, o2, s2, c2) {
  var l2 = e, u2 = 1 * r2 * r2 - 4 * r2 * a2 + 2 * r2 * s2 + 4 * a2 * a2 - 4 * a2 * s2 + s2 * s2 + i2 * i2 - 4 * i2 * o2 + 2 * i2 * c2 + 4 * o2 * o2 - 4 * o2 * c2 + c2 * c2, d2 = 9 * r2 * a2 - 3 * r2 * r2 - 3 * r2 * s2 - 6 * a2 * a2 + 3 * a2 * s2 + 9 * i2 * o2 - 3 * i2 * i2 - 3 * i2 * c2 - 6 * o2 * o2 + 3 * o2 * c2, f2 = 3 * r2 * r2 - 6 * r2 * a2 + r2 * s2 - r2 * t2 + 2 * a2 * a2 + 2 * a2 * t2 - s2 * t2 + 3 * i2 * i2 - 6 * i2 * o2 + i2 * c2 - i2 * n2 + 2 * o2 * o2 + 2 * o2 * n2 - c2 * n2, p2 = 1 * r2 * a2 - r2 * r2 + r2 * t2 - a2 * t2 + i2 * o2 - i2 * i2 + i2 * n2 - o2 * n2, m2 = [];
  dr(u2, d2, f2, p2, m2);
  for (var h2 = 1e-7, g2 = [], _2 = 0; _2 < 6; _2 += 2) Math[l2(1296)](m2[_2 + 1]) < h2 && m2[_2] >= 0 && m2[_2] <= 1 && g2.push(m2[_2]);
  g2.push(1), g2.push(0);
  for (var v2 = -1, y2, b2, x2, S2 = 0; S2 < g2.length; S2++) y2 = Math[l2(1252)](1 - g2[S2], 2) * r2 + 2 * (1 - g2[S2]) * g2[S2] * a2 + g2[S2] * g2[S2] * s2, b2 = (1 - g2[S2]) ** 2 * i2 + 2 * (1 - g2[S2]) * g2[S2] * o2 + g2[S2] * g2[S2] * c2, x2 = (y2 - t2) ** 2 + Math[l2(1252)](b2 - n2, 2), v2 >= 0 ? x2 < v2 && (v2 = x2) : v2 = x2;
  return v2;
}, pr = function(e2, t2, n2, r2, i2, a2) {
  var o2 = [e2 - n2, t2 - r2], s2 = [i2 - n2, a2 - r2], c2 = s2[0] * s2[0] + s2[1] * s2[1], l2 = o2[0] * o2[0] + o2[1] * o2[1], u2 = o2[0] * s2[0] + o2[1] * s2[1], d2 = u2 * u2 / c2;
  return u2 < 0 ? l2 : d2 > c2 ? (e2 - i2) * (e2 - i2) + (t2 - a2) * (t2 - a2) : l2 - d2;
}, mr = function(e2, t2, n2) {
  for (var r2, i2, a2, o2, s2, c2 = 0, l2 = 0; l2 < n2.length / 2; l2++) if (r2 = n2[l2 * 2], i2 = n2[l2 * 2 + 1], l2 + 1 < n2.length / 2 ? (a2 = n2[(l2 + 1) * 2], o2 = n2[(l2 + 1) * 2 + 1]) : (a2 = n2[(l2 + 1 - n2.length / 2) * 2], o2 = n2[(l2 + 1 - n2.length / 2) * 2 + 1]), !(r2 == e2 && a2 == e2)) if (r2 >= e2 && e2 >= a2 || r2 <= e2 && e2 <= a2) s2 = (e2 - r2) / (a2 - r2) * (o2 - i2) + i2, s2 > t2 && c2++;
  else continue;
  return c2 % 2 != 0;
}, hr = function(t2, n2, r2, i2, a2, o2, s2, c2, l2) {
  var u2 = e, d2 = Array(r2.length), f2;
  c2[0] == null ? f2 = c2 : (f2 = Math.atan(c2[1] / c2[0]), c2[0] < 0 ? f2 += Math.PI / 2 : f2 = -f2 - Math.PI / 2);
  for (var p2 = Math.cos(-f2), m2 = Math.sin(-f2), h2 = 0; h2 < d2[u2(441)] / 2; h2++) d2[h2 * 2] = o2 / 2 * (r2[h2 * 2] * p2 - r2[h2 * 2 + 1] * m2), d2[h2 * 2 + 1] = s2 / 2 * (r2[h2 * 2 + 1] * p2 + r2[h2 * 2] * m2), d2[h2 * 2] += i2, d2[h2 * 2 + 1] += a2;
  return mr(t2, n2, l2 > 0 ? _r(vr(d2, -l2)) : d2);
}, gr = function(t2, n2, r2, i2, a2, o2, s2, c2) {
  for (var l2 = e, u2 = Array(r2.length * 2), d2 = 0; d2 < c2.length; d2++) {
    var f2 = c2[d2];
    if (u2[d2 * 4 + 0] = f2.startX, u2[d2 * 4 + 1] = f2.startY, u2[d2 * 4 + 2] = f2.stopX, u2[d2 * 4 + 3] = f2.stopY, (f2.cx - t2) ** 2 + (f2.cy - n2) ** 2 <= f2[l2(853)] ** 2) return true;
  }
  return mr(t2, n2, u2);
}, _r = function(t2) {
  for (var n2 = e, r2 = Array(t2.length / 2), i2, a2, o2, s2, c2, l2, u2, d2, f2 = 0; f2 < t2.length / 4; f2++) {
    i2 = t2[f2 * 4], a2 = t2[f2 * 4 + 1], o2 = t2[f2 * 4 + 2], s2 = t2[f2 * 4 + 3], f2 < t2[n2(441)] / 4 - 1 ? (c2 = t2[(f2 + 1) * 4], l2 = t2[(f2 + 1) * 4 + 1], u2 = t2[(f2 + 1) * 4 + 2], d2 = t2[(f2 + 1) * 4 + 3]) : (c2 = t2[0], l2 = t2[1], u2 = t2[2], d2 = t2[3]);
    var p2 = Cr(i2, a2, o2, s2, c2, l2, u2, d2, true);
    r2[f2 * 2] = p2[0], r2[f2 * 2 + 1] = p2[1];
  }
  return r2;
}, vr = function(t2, n2) {
  for (var r2 = e, i2 = Array(t2[r2(441)] * 2), a2, o2, s2, c2, l2 = 0; l2 < t2[r2(441)] / 2; l2++) {
    a2 = t2[l2 * 2], o2 = t2[l2 * 2 + 1], l2 < t2.length / 2 - 1 ? (s2 = t2[(l2 + 1) * 2], c2 = t2[(l2 + 1) * 2 + 1]) : (s2 = t2[0], c2 = t2[1]);
    var u2 = c2 - o2, d2 = -(s2 - a2), f2 = Math.sqrt(u2 * u2 + d2 * d2), p2 = u2 / f2, m2 = d2 / f2;
    i2[l2 * 4] = a2 + p2 * n2, i2[l2 * 4 + 1] = o2 + m2 * n2, i2[l2 * 4 + 2] = s2 + p2 * n2, i2[l2 * 4 + 3] = c2 + m2 * n2;
  }
  return i2;
}, yr = function(e2, t2, n2, r2, i2, a2) {
  var o2 = n2 - e2, s2 = r2 - t2;
  o2 /= i2, s2 /= a2;
  var c2 = Math.sqrt(o2 * o2 + s2 * s2), l2 = c2 - 1;
  if (l2 < 0) return [];
  var u2 = l2 / c2;
  return [(n2 - e2) * u2 + e2, (r2 - t2) * u2 + t2];
}, br = function(e2, t2, n2, r2, i2, a2, o2) {
  return e2 -= i2, t2 -= a2, e2 /= n2 / 2 + o2, t2 /= r2 / 2 + o2, e2 * e2 + t2 * t2 <= 1;
}, xr = function(t2, n2, r2, i2, a2, o2, s2) {
  var c2 = e, l2 = [r2 - t2, i2 - n2], u2 = [t2 - a2, n2 - o2], d2 = l2[0] * l2[0] + l2[1] * l2[1], f2 = 2 * (u2[0] * l2[0] + u2[1] * l2[1]), p2 = u2[0] * u2[0] + u2[1] * u2[1] - s2 * s2, m2 = f2 * f2 - 4 * d2 * p2;
  if (m2 < 0) return [];
  var h2 = (-f2 + Math.sqrt(m2)) / (2 * d2), g2 = (-f2 - Math[c2(1311)](m2)) / (2 * d2), _2 = Math.min(h2, g2), v2 = Math.max(h2, g2), y2 = [];
  if (_2 >= 0 && _2 <= 1 && y2[c2(254)](_2), v2 >= 0 && v2 <= 1 && y2.push(v2), y2.length === 0) return [];
  var b2 = y2[0] * l2[0] + t2, x2 = y2[0] * l2[1] + n2;
  return y2.length > 1 ? y2[0] == y2[1] ? [b2, x2] : [b2, x2, y2[1] * l2[0] + t2, y2[1] * l2[1] + n2] : [b2, x2];
}, Sr = function(e2, t2, n2) {
  return t2 <= e2 && e2 <= n2 || n2 <= e2 && e2 <= t2 ? e2 : e2 <= t2 && t2 <= n2 || n2 <= t2 && t2 <= e2 ? t2 : n2;
}, Cr = function(e2, t2, n2, r2, i2, a2, o2, s2, c2) {
  var l2 = e2 - i2, u2 = n2 - e2, d2 = o2 - i2, f2 = t2 - a2, p2 = r2 - t2, m2 = s2 - a2, h2 = d2 * f2 - m2 * l2, g2 = u2 * f2 - p2 * l2, _2 = m2 * u2 - d2 * p2;
  if (_2 !== 0) {
    var v2 = h2 / _2, y2 = g2 / _2, b2 = 1e-3, x2 = 0 - b2, S2 = 1 + b2;
    return x2 <= v2 && v2 <= S2 && x2 <= y2 && y2 <= S2 || c2 ? [e2 + v2 * u2, t2 + v2 * p2] : [];
  } else if (h2 === 0 || g2 === 0) return Sr(e2, n2, o2) === o2 ? [o2, s2] : Sr(e2, n2, i2) === i2 ? [i2, a2] : Sr(i2, o2, n2) === n2 ? [n2, r2] : [];
  else return [];
}, wr = function(t2, n2, r2, i2, a2) {
  var o2 = e, s2 = [], c2 = i2 / 2, l2 = a2 / 2, u2 = n2, d2 = r2;
  s2.push({ x: u2 + c2 * t2[0], y: d2 + l2 * t2[1] });
  for (var f2 = 1; f2 < t2[o2(441)] / 2; f2++) s2.push({ x: u2 + c2 * t2[f2 * 2], y: d2 + l2 * t2[f2 * 2 + 1] });
  return s2;
}, Tr = function(e2, t2, n2, r2, i2, a2, o2, s2) {
  var c2 = [], l2, u2 = Array(n2.length), d2 = true;
  a2 ?? (d2 = false);
  var f2;
  if (d2) {
    for (var p2 = 0; p2 < u2.length / 2; p2++) u2[p2 * 2] = n2[p2 * 2] * a2 + r2, u2[p2 * 2 + 1] = n2[p2 * 2 + 1] * o2 + i2;
    f2 = s2 > 0 ? _r(vr(u2, -s2)) : u2;
  } else f2 = n2;
  for (var m2, h2, g2, _2, v2 = 0; v2 < f2.length / 2; v2++) m2 = f2[v2 * 2], h2 = f2[v2 * 2 + 1], v2 < f2.length / 2 - 1 ? (g2 = f2[(v2 + 1) * 2], _2 = f2[(v2 + 1) * 2 + 1]) : (g2 = f2[0], _2 = f2[1]), l2 = Cr(e2, t2, r2, i2, m2, h2, g2, _2), l2.length !== 0 && c2.push(l2[0], l2[1]);
  return c2;
}, Er = function(t2, n2, r2, i2, a2, o2, s2, c2, l2) {
  var u2 = e, d2 = [], f2, p2 = Array(r2.length * 2);
  l2.forEach(function(e2, r3) {
    var o3 = $;
    r3 === 0 ? (p2[p2.length - 2] = e2.startX, p2[p2.length - 1] = e2.startY) : (p2[r3 * 4 - 2] = e2.startX, p2[r3 * 4 - 1] = e2[o3(496)]), p2[r3 * 4] = e2[o3(792)], p2[r3 * 4 + 1] = e2[o3(494)], f2 = xr(t2, n2, i2, a2, e2.cx, e2.cy, e2.radius), f2.length !== 0 && d2[o3(254)](f2[0], f2[1]);
  });
  for (var m2 = 0; m2 < p2.length / 4; m2++) f2 = Cr(t2, n2, i2, a2, p2[m2 * 4], p2[m2 * 4 + 1], p2[m2 * 4 + 2], p2[m2 * 4 + 3], false), f2.length !== 0 && d2.push(f2[0], f2[1]);
  if (d2.length > 2) {
    for (var h2 = [d2[0], d2[1]], g2 = (h2[0] - t2) ** 2 + Math[u2(1252)](h2[1] - n2, 2), _2 = 1; _2 < d2.length / 2; _2++) {
      var v2 = Math[u2(1252)](d2[_2 * 2] - t2, 2) + (d2[_2 * 2 + 1] - n2) ** 2;
      v2 <= g2 && (h2[0] = d2[_2 * 2], h2[1] = d2[_2 * 2 + 1], g2 = v2);
    }
    return h2;
  }
  return d2;
}, Dr = function(e2, t2, n2) {
  var r2 = [e2[0] - t2[0], e2[1] - t2[1]], i2 = Math.sqrt(r2[0] * r2[0] + r2[1] * r2[1]), a2 = (i2 - n2) / i2;
  return a2 < 0 && (a2 = 1e-5), [t2[0] + a2 * r2[0], t2[1] + a2 * r2[1]];
}, Or = function(e2, t2) {
  var n2 = Ar(e2, t2);
  return n2 = kr(n2), n2;
}, kr = function(t2) {
  for (var n2 = e, r2, i2, a2 = t2.length / 2, o2 = 1 / 0, s2 = 1 / 0, c2 = -1 / 0, l2 = -1 / 0, u2 = 0; u2 < a2; u2++) r2 = t2[2 * u2], i2 = t2[2 * u2 + 1], o2 = Math.min(o2, r2), c2 = Math.max(c2, r2), s2 = Math.min(s2, i2), l2 = Math.max(l2, i2);
  for (var d2 = 2 / (c2 - o2), f2 = 2 / (l2 - s2), p2 = 0; p2 < a2; p2++) r2 = t2[2 * p2] = t2[2 * p2] * d2, i2 = t2[2 * p2 + 1] = t2[2 * p2 + 1] * f2, o2 = Math.min(o2, r2), c2 = Math.max(c2, r2), s2 = Math.min(s2, i2), l2 = Math[n2(701)](l2, i2);
  if (s2 < -1) for (var m2 = 0; m2 < a2; m2++) i2 = t2[2 * m2 + 1] = t2[2 * m2 + 1] + (-1 - s2);
  return t2;
}, Ar = function(t2, n2) {
  var r2 = e, i2 = 1 / t2 * 2 * Math.PI, a2 = t2 % 2 == 0 ? Math.PI / 2 + i2 / 2 : Math.PI / 2;
  a2 += n2;
  for (var o2 = Array(t2 * 2), s2, c2 = 0; c2 < t2; c2++) s2 = c2 * i2 + a2, o2[2 * c2] = Math[r2(1188)](s2), o2[2 * c2 + 1] = Math.sin(-s2);
  return o2;
}, jr = function(e2, t2) {
  return Math.min(e2 / 4, t2 / 4, 8);
}, Mr = function(e2, t2) {
  return Math.min(e2 / 10, t2 / 10, 8);
}, Nr = function() {
  return 8;
}, Pr = function(e2, t2, n2) {
  return [e2 - 2 * t2 + n2, 2 * (t2 - e2), e2];
}, Fr = function(e2, t2) {
  return { heightOffset: Math.min(15, 0.05 * t2), widthOffset: Math.min(100, 0.25 * e2), ctrlPtOffsetPct: 0.05 };
};
function Ir(e2, t2) {
  function n2(e3) {
    for (var t3 = $, n3 = [], r3 = 0; r3 < e3[t3(441)]; r3++) {
      var i3 = e3[r3], a3 = e3[(r3 + 1) % e3.length], o3 = { x: a3.x - i3.x, y: a3.y - i3.y }, s2 = { x: -o3.y, y: o3.x }, c3 = Math.sqrt(s2.x * s2.x + s2.y * s2.y);
      n3[t3(254)]({ x: s2.x / c3, y: s2.y / c3 });
    }
    return n3;
  }
  function r2(e3, t3) {
    var n3 = 1 / 0, r3 = -1 / 0, i3 = s(e3), a3;
    try {
      for (i3.s(); !(a3 = i3.n()).done; ) {
        var o3 = a3.value, c3 = o3.x * t3.x + o3.y * t3.y;
        n3 = Math.min(n3, c3), r3 = Math.max(r3, c3);
      }
    } catch (e4) {
      i3.e(e4);
    } finally {
      i3.f();
    }
    return { min: n3, max: r3 };
  }
  function i2(e3, t3) {
    return !(e3.max < t3.min || t3.max < e3.min);
  }
  var a2 = s([].concat(m(n2(e2)), m(n2(t2)))), o2;
  try {
    for (a2.s(); !(o2 = a2.n()).done; ) {
      var c2 = o2.value;
      if (!i2(r2(e2, c2), r2(t2, c2))) return false;
    }
  } catch (e3) {
    a2.e(e3);
  } finally {
    a2.f();
  }
  return true;
}
var Lr = Kt({ dampingFactor: 0.8, precision: 1e-6, iterations: 200, weight: function(e2) {
  return 1;
} }), Rr = { pageRank: function(t2) {
  for (var n2 = e, r2 = Lr(t2), i2 = r2[n2(828)], a2 = r2.precision, o2 = r2.iterations, s2 = r2.weight, c2 = this._private.cy, l2 = this.byGroup(), u2 = l2.nodes, d2 = l2.edges, f2 = u2.length, p2 = f2 * f2, m2 = d2.length, h2 = Array(p2), g2 = Array(f2), _2 = (1 - i2) / f2, v2 = 0; v2 < f2; v2++) {
    for (var y2 = 0; y2 < f2; y2++) {
      var b2 = v2 * f2 + y2;
      h2[b2] = 0;
    }
    g2[v2] = 0;
  }
  for (var x2 = 0; x2 < m2; x2++) {
    var S2 = d2[x2], C2 = S2.data(n2(1256)), w2 = S2.data(`target`);
    if (C2 !== w2) {
      var T2 = u2.indexOfId(C2), E2 = u2.indexOfId(w2), D2 = s2(S2), O2 = E2 * f2 + T2;
      h2[O2] += D2, g2[T2] += D2;
    }
  }
  for (var k2 = 1 / f2 + _2, A2 = 0; A2 < f2; A2++) if (g2[A2] === 0) for (var j2 = 0; j2 < f2; j2++) {
    var M2 = j2 * f2 + A2;
    h2[M2] = k2;
  }
  else for (var N2 = 0; N2 < f2; N2++) {
    var P2 = N2 * f2 + A2;
    h2[P2] = h2[P2] / g2[A2] + _2;
  }
  for (var F2 = Array(f2), I2 = Array(f2), L2, R2 = 0; R2 < f2; R2++) F2[R2] = 1;
  for (var z2 = 0; z2 < o2; z2++) {
    for (var B2 = 0; B2 < f2; B2++) I2[B2] = 0;
    for (var V2 = 0; V2 < f2; V2++) for (var H2 = 0; H2 < f2; H2++) {
      var U2 = V2 * f2 + H2;
      I2[V2] += h2[U2] * F2[H2];
    }
    Vn(I2), L2 = F2, F2 = I2, I2 = L2;
    for (var W2 = 0, G2 = 0; G2 < f2; G2++) {
      var K2 = L2[G2] - F2[G2];
      W2 += K2 * K2;
    }
    if (W2 < a2) break;
  }
  return { rank: function(e2) {
    var t3 = n2;
    return e2 = c2.collection(e2)[0], F2[u2[t3(294)](e2)];
  } };
} }, zr = Kt({ root: null, weight: function(e2) {
  return 1;
}, directed: false, alpha: 0 }), Br = { degreeCentralityNormalized: function(t2) {
  var n2 = e;
  t2 = zr(t2);
  var r2 = this.cy(), i2 = this.nodes(), a2 = i2.length;
  if (t2.directed) {
    for (var o2 = {}, s2 = {}, c2 = 0, l2 = 0, u2 = 0; u2 < a2; u2++) {
      var d2 = i2[u2], f2 = d2.id();
      t2.root = d2;
      var p2 = this.degreeCentrality(t2);
      c2 < p2.indegree && (c2 = p2.indegree), l2 < p2.outdegree && (l2 = p2.outdegree), o2[f2] = p2[n2(1260)], s2[f2] = p2.outdegree;
    }
    return { indegree: function(e2) {
      return c2 == 0 ? 0 : (E(e2) && (e2 = r2.filter(e2)), o2[e2.id()] / c2);
    }, outdegree: function(e2) {
      return l2 === 0 ? 0 : (E(e2) && (e2 = r2.filter(e2)), s2[e2.id()] / l2);
    } };
  } else {
    for (var m2 = {}, h2 = 0, g2 = 0; g2 < a2; g2++) {
      var _2 = i2[g2];
      t2.root = _2;
      var v2 = this.degreeCentrality(t2);
      h2 < v2.degree && (h2 = v2[n2(252)]), m2[_2.id()] = v2.degree;
    }
    return { degree: function(e2) {
      return h2 === 0 ? 0 : (E(e2) && (e2 = r2.filter(e2)), m2[e2.id()] / h2);
    } };
  }
}, degreeCentrality: function(t2) {
  var n2 = e;
  t2 = zr(t2);
  var r2 = this.cy(), i2 = this, a2 = t2, o2 = a2[n2(575)], s2 = a2.weight, c2 = a2[n2(275)], l2 = a2.alpha;
  if (o2 = r2.collection(o2)[0], c2) {
    for (var u2 = o2.connectedEdges(), d2 = u2.filter(function(e2) {
      return e2[n2(1192)]().same(o2) && i2.has(e2);
    }), f2 = u2.filter(function(e2) {
      var t3 = n2;
      return e2[t3(1256)]()[t3(562)](o2) && i2.has(e2);
    }), p2 = d2.length, m2 = f2.length, h2 = 0, g2 = 0, _2 = 0; _2 < d2[n2(441)]; _2++) h2 += s2(d2[_2]);
    for (var v2 = 0; v2 < f2.length; v2++) g2 += s2(f2[v2]);
    return { indegree: Math[n2(1252)](p2, 1 - l2) * h2 ** +l2, outdegree: m2 ** (1 - l2) * g2 ** +l2 };
  } else {
    for (var y2 = o2.connectedEdges().intersection(i2), b2 = y2.length, x2 = 0, S2 = 0; S2 < y2.length; S2++) x2 += s2(y2[S2]);
    return { degree: b2 ** (1 - l2) * x2 ** +l2 };
  }
} };
Br.dc = Br.degreeCentrality, Br.dcn = Br[e(1257)] = Br.degreeCentralityNormalized;
var Vr = Kt({ harmonic: true, weight: function() {
  return 1;
}, directed: false, root: null }), Hr = { closenessCentralityNormalized: function(t2) {
  for (var n2 = e, r2 = Vr(t2), i2 = r2[n2(666)], a2 = r2.weight, o2 = r2.directed, s2 = this.cy(), c2 = {}, l2 = 0, u2 = this.nodes(), d2 = this.floydWarshall({ weight: a2, directed: o2 }), f2 = 0; f2 < u2.length; f2++) {
    for (var p2 = 0, m2 = u2[f2], h2 = 0; h2 < u2.length; h2++) if (f2 !== h2) {
      var g2 = d2.distance(m2, u2[h2]);
      i2 ? p2 += 1 / g2 : p2 += g2;
    }
    i2 || (p2 = 1 / p2), l2 < p2 && (l2 = p2), c2[m2.id()] = p2;
  }
  return { closeness: function(e2) {
    var t3 = n2;
    return l2 == 0 ? 0 : (e2 = E(e2) ? s2[t3(670)](e2)[0].id() : e2.id(), c2[e2] / l2);
  } };
}, closenessCentrality: function(t2) {
  var n2 = e, r2 = Vr(t2), i2 = r2.root, a2 = r2.weight, o2 = r2[n2(275)], s2 = r2.harmonic;
  i2 = this.filter(i2)[0];
  for (var c2 = this.dijkstra({ root: i2, weight: a2, directed: o2 }), l2 = 0, u2 = this.nodes(), d2 = 0; d2 < u2[n2(441)]; d2++) {
    var f2 = u2[d2];
    if (!f2.same(i2)) {
      var p2 = c2[n2(725)](f2);
      s2 ? l2 += 1 / p2 : l2 += p2;
    }
  }
  return s2 ? l2 : 1 / l2;
} };
Hr.cc = Hr.closenessCentrality, Hr.ccn = Hr.closenessCentralityNormalised = Hr.closenessCentralityNormalized;
var Ur = Kt({ weight: null, directed: false }), Wr = { betweennessCentrality: function(t2) {
  for (var n2 = e, r2 = Ur(t2), i2 = r2.directed, a2 = r2.weight, o2 = a2 != null, s2 = this.cy(), c2 = this.nodes(), l2 = {}, u2 = {}, d2 = 0, f2 = { set: function(e2, t3) {
    u2[e2] = t3, t3 > d2 && (d2 = t3);
  }, get: function(e2) {
    return u2[e2];
  } }, p2 = 0; p2 < c2[n2(441)]; p2++) {
    var m2 = c2[p2], h2 = m2.id();
    i2 ? l2[h2] = m2[n2(1414)]().nodes() : l2[h2] = m2[n2(377)]().nodes(), f2[n2(1280)](h2, 0);
  }
  for (var g2 = function() {
    for (var e2 = n2, t3 = c2[_2].id(), r3 = [], i3 = {}, u3 = {}, d3 = {}, p3 = new pn(function(e3, t4) {
      return d3[e3] - d3[t4];
    }), m3 = 0; m3 < c2[e2(441)]; m3++) {
      var h3 = c2[m3].id();
      i3[h3] = [], u3[h3] = 0, d3[h3] = 1 / 0;
    }
    for (u3[t3] = 1, d3[t3] = 0, p3.push(t3); !p3.empty(); ) {
      var g3 = p3.pop();
      if (r3.push(g3), o2) for (var v3 = 0; v3 < l2[g3][e2(441)]; v3++) {
        var y2 = l2[g3][v3], b2 = s2.getElementById(g3), x2 = void 0;
        x2 = b2.edgesTo(y2).length > 0 ? b2.edgesTo(y2)[0] : y2.edgesTo(b2)[0];
        var S2 = a2(x2);
        y2 = y2.id(), d3[y2] > d3[g3] + S2 && (d3[y2] = d3[g3] + S2, p3.nodes[e2(294)](y2) < 0 ? p3.push(y2) : p3[e2(491)](y2), u3[y2] = 0, i3[y2] = []), d3[y2] == d3[g3] + S2 && (u3[y2] = u3[y2] + u3[g3], i3[y2].push(g3));
      }
      else for (var C2 = 0; C2 < l2[g3].length; C2++) {
        var w2 = l2[g3][C2].id();
        d3[w2] == 1 / 0 && (p3.push(w2), d3[w2] = d3[g3] + 1), d3[w2] == d3[g3] + 1 && (u3[w2] = u3[w2] + u3[g3], i3[w2].push(g3));
      }
    }
    for (var T2 = {}, E2 = 0; E2 < c2.length; E2++) T2[c2[E2].id()] = 0;
    for (; r3.length > 0; ) {
      for (var D2 = r3[e2(229)](), O2 = 0; O2 < i3[D2][e2(441)]; O2++) {
        var k2 = i3[D2][O2];
        T2[k2] = T2[k2] + u3[k2] / u3[D2] * (1 + T2[D2]);
      }
      D2 != c2[_2].id() && f2.set(D2, f2.get(D2) + T2[D2]);
    }
  }, _2 = 0; _2 < c2[n2(441)]; _2++) g2();
  var v2 = { betweenness: function(e2) {
    var t3 = s2.collection(e2).id();
    return f2.get(t3);
  }, betweennessNormalized: function(e2) {
    var t3 = n2;
    if (d2 == 0) return 0;
    var r3 = s2[t3(999)](e2).id();
    return f2.get(r3) / d2;
  } };
  return v2.betweennessNormalised = v2.betweennessNormalized, v2;
} };
Wr.bc = Wr.betweennessCentrality;
var Gr = Kt({ expandFactor: 2, inflateFactor: 2, multFactor: 1, maxIterations: 20, attributes: [function(e2) {
  return 1;
}] }), Kr = function(e2) {
  return Gr(e2);
}, qr = function(e2, t2) {
  for (var n2 = 0, r2 = 0; r2 < t2.length; r2++) n2 += t2[r2](e2);
  return n2;
}, Jr = function(e2, t2, n2) {
  for (var r2 = 0; r2 < t2; r2++) e2[r2 * t2 + r2] = n2;
}, Yr = function(e2, t2) {
  for (var n2, r2 = 0; r2 < t2; r2++) {
    n2 = 0;
    for (var i2 = 0; i2 < t2; i2++) n2 += e2[i2 * t2 + r2];
    for (var a2 = 0; a2 < t2; a2++) e2[a2 * t2 + r2] = e2[a2 * t2 + r2] / n2;
  }
}, Xr = function(e2, t2, n2) {
  for (var r2 = Array(n2 * n2), i2 = 0; i2 < n2; i2++) {
    for (var a2 = 0; a2 < n2; a2++) r2[i2 * n2 + a2] = 0;
    for (var o2 = 0; o2 < n2; o2++) for (var s2 = 0; s2 < n2; s2++) r2[i2 * n2 + s2] += e2[i2 * n2 + o2] * t2[o2 * n2 + s2];
  }
  return r2;
}, Zr = function(e2, t2, n2) {
  for (var r2 = e2.slice(0), i2 = 1; i2 < n2; i2++) e2 = Xr(e2, r2, t2);
  return e2;
}, Qr = function(e2, t2, n2) {
  for (var r2 = Array(t2 * t2), i2 = 0; i2 < t2 * t2; i2++) r2[i2] = e2[i2] ** +n2;
  return Yr(r2, t2), r2;
}, $r = function(t2, n2, r2, i2) {
  for (var a2 = e, o2 = 0; o2 < r2; o2++) if (Math.round(t2[o2] * Math[a2(1252)](10, i2)) / 10 ** i2 != Math.round(n2[o2] * Math[a2(1252)](10, i2)) / 10 ** i2) return false;
  return true;
}, ei = function(t2, n2, r2, i2) {
  for (var a2 = e, o2 = [], s2 = 0; s2 < n2; s2++) {
    for (var c2 = [], l2 = 0; l2 < n2; l2++) Math[a2(798)](t2[s2 * n2 + l2] * 1e3) / 1e3 > 0 && c2.push(r2[l2]);
    c2.length !== 0 && o2.push(i2[a2(999)](c2));
  }
  return o2;
}, ti = function(e2, t2) {
  for (var n2 = 0; n2 < e2.length; n2++) if (!t2[n2] || e2[n2].id() !== t2[n2].id()) return false;
  return true;
}, ni = function(e2) {
  for (var t2 = 0; t2 < e2.length; t2++) for (var n2 = 0; n2 < e2.length; n2++) t2 != n2 && ti(e2[t2], e2[n2]) && e2.splice(n2, 1);
  return e2;
}, ri = function(t2) {
  for (var n2 = e, r2 = this.nodes(), i2 = this.edges(), a2 = this.cy(), o2 = Kr(t2), s2 = {}, c2 = 0; c2 < r2.length; c2++) s2[r2[c2].id()] = c2;
  for (var l2 = r2.length, u2 = l2 * l2, d2 = Array(u2), f2, p2 = 0; p2 < u2; p2++) d2[p2] = 0;
  for (var m2 = 0; m2 < i2.length; m2++) {
    var h2 = i2[m2], g2 = s2[h2.source().id()], _2 = s2[h2.target().id()], v2 = qr(h2, o2.attributes);
    d2[g2 * l2 + _2] += v2, d2[_2 * l2 + g2] += v2;
  }
  Jr(d2, l2, o2.multFactor), Yr(d2, l2);
  for (var y2 = true, b2 = 0; y2 && b2 < o2[n2(992)]; ) y2 = false, f2 = Zr(d2, l2, o2.expandFactor), d2 = Qr(f2, l2, o2.inflateFactor), $r(d2, f2, u2, 4) || (y2 = true), b2++;
  var x2 = ei(d2, l2, r2, a2);
  return x2 = ni(x2), x2;
}, ii = { markovClustering: ri, mcl: ri }, ai = function(e2) {
  return e2;
}, oi = function(t2, n2) {
  return Math[e(1296)](n2 - t2);
}, si = function(e2, t2, n2) {
  return e2 + oi(t2, n2);
}, ci = function(e2, t2, n2) {
  return e2 + (n2 - t2) ** 2;
}, li = function(e2) {
  return Math.sqrt(e2);
}, ui = function(t2, n2, r2) {
  return Math[e(701)](t2, oi(n2, r2));
}, di = function(e2, t2, n2, r2, i2) {
  for (var a2 = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : ai, o2 = r2, s2, c2, l2 = 0; l2 < e2; l2++) s2 = t2(l2), c2 = n2(l2), o2 = i2(o2, s2, c2);
  return a2(o2);
}, fi = { euclidean: function(e2, t2, n2) {
  return e2 >= 2 ? di(e2, t2, n2, 0, ci, li) : di(e2, t2, n2, 0, si);
}, squaredEuclidean: function(e2, t2, n2) {
  return di(e2, t2, n2, 0, ci);
}, manhattan: function(e2, t2, n2) {
  return di(e2, t2, n2, 0, si);
}, max: function(e2, t2, n2) {
  return di(e2, t2, n2, -1 / 0, ui);
} };
fi[`squared-euclidean`] = fi.squaredEuclidean, fi.squaredeuclidean = fi.squaredEuclidean;
function pi(e2, t2, n2, r2, i2, a2) {
  var o2 = D(e2) ? e2 : fi[e2] || fi.euclidean;
  return t2 === 0 && D(e2) ? o2(i2, a2) : o2(t2, n2, r2, i2, a2);
}
var mi = Kt({ k: 2, m: 2, sensitivityThreshold: 1e-4, distance: `euclidean`, maxIterations: 10, attributes: [], testMode: false, testCentroids: null }), hi = function(e2) {
  return mi(e2);
}, gi = function(e2, t2, n2, r2, i2) {
  var a2 = i2 === `kMedoids` ? function(e3) {
    return r2[e3](n2);
  } : function(e3) {
    return n2[e3];
  }, o2 = function(e3) {
    return r2[e3](t2);
  }, s2 = n2, c2 = t2;
  return pi(e2, r2.length, a2, o2, s2, c2);
}, _i = function(t2, n2, r2) {
  for (var i2 = e, a2 = r2.length, o2 = Array(a2), s2 = Array(a2), c2 = Array(n2), l2 = null, u2 = 0; u2 < a2; u2++) o2[u2] = t2.min(r2[u2]).value, s2[u2] = t2.max(r2[u2])[i2(1310)];
  for (var d2 = 0; d2 < n2; d2++) {
    l2 = [];
    for (var f2 = 0; f2 < a2; f2++) l2[f2] = Math.random() * (s2[f2] - o2[f2]) + o2[f2];
    c2[d2] = l2;
  }
  return c2;
}, vi = function(e2, t2, n2, r2, i2) {
  for (var a2 = 1 / 0, o2 = 0, s2 = 0; s2 < t2.length; s2++) {
    var c2 = gi(n2, e2, t2[s2], r2, i2);
    c2 < a2 && (a2 = c2, o2 = s2);
  }
  return o2;
}, yi = function(e2, t2, n2) {
  for (var r2 = [], i2 = null, a2 = 0; a2 < t2.length; a2++) i2 = t2[a2], n2[i2.id()] === e2 && r2.push(i2);
  return r2;
}, bi = function(e2, t2, n2) {
  return Math.abs(t2 - e2) <= n2;
}, xi = function(t2, n2, r2) {
  for (var i2 = e, a2 = 0; a2 < t2.length; a2++) for (var o2 = 0; o2 < t2[a2][i2(441)]; o2++) if (Math.abs(t2[a2][o2] - n2[a2][o2]) > r2) return false;
  return true;
}, Si = function(e2, t2, n2) {
  for (var r2 = 0; r2 < n2; r2++) if (e2 === t2[r2]) return true;
  return false;
}, Ci = function(t2, n2) {
  var r2 = e, i2 = Array(n2);
  if (t2.length < 50) for (var a2 = 0; a2 < n2; a2++) {
    for (var o2 = t2[Math[r2(1163)](Math.random() * t2.length)]; Si(o2, i2, a2); ) o2 = t2[Math.floor(Math.random() * t2.length)];
    i2[a2] = o2;
  }
  else for (var s2 = 0; s2 < n2; s2++) i2[s2] = t2[Math.floor(Math.random() * t2[r2(441)])];
  return i2;
}, wi = function(t2, n2, r2) {
  for (var i2 = e, a2 = 0, o2 = 0; o2 < n2.length; o2++) a2 += gi(`manhattan`, n2[o2], t2, r2, i2(1270));
  return a2;
}, Ti = function(t2) {
  var n2 = e, r2 = this.cy(), i2 = this.nodes(), a2 = null, o2 = hi(t2), s2 = Array(o2.k), c2 = {}, l2;
  o2[n2(1289)] ? typeof o2.testCentroids == n2(1134) ? (o2[n2(687)], l2 = _i(i2, o2.k, o2[n2(865)])) : l2 = _(o2[n2(687)]) === `object` ? o2.testCentroids : _i(i2, o2.k, o2.attributes) : l2 = _i(i2, o2.k, o2.attributes);
  for (var u2 = true, d2 = 0; u2 && d2 < o2.maxIterations; ) {
    for (var f2 = 0; f2 < i2[n2(441)]; f2++) a2 = i2[f2], c2[a2.id()] = vi(a2, l2, o2.distance, o2[n2(865)], `kMeans`);
    u2 = false;
    for (var p2 = 0; p2 < o2.k; p2++) {
      var m2 = yi(p2, i2, c2);
      if (m2.length !== 0) {
        for (var h2 = o2.attributes.length, g2 = l2[p2], v2 = Array(h2), y2 = Array(h2), b2 = 0; b2 < h2; b2++) {
          y2[b2] = 0;
          for (var x2 = 0; x2 < m2[n2(441)]; x2++) a2 = m2[x2], y2[b2] += o2[n2(865)][b2](a2);
          v2[b2] = y2[b2] / m2.length, bi(v2[b2], g2[b2], o2.sensitivityThreshold) || (u2 = true);
        }
        l2[p2] = v2, s2[p2] = r2.collection(m2);
      }
    }
    d2++;
  }
  return s2;
}, Ei = function(t2) {
  var n2 = e, r2 = this.cy(), i2 = this.nodes(), a2 = null, o2 = hi(t2), s2 = Array(o2.k), c2, l2 = {}, u2, d2 = Array(o2.k);
  o2.testMode ? typeof o2.testCentroids == `number` || (c2 = _(o2[n2(687)]) === `object` ? o2.testCentroids : Ci(i2, o2.k)) : c2 = Ci(i2, o2.k);
  for (var f2 = true, p2 = 0; f2 && p2 < o2.maxIterations; ) {
    for (var m2 = 0; m2 < i2[n2(441)]; m2++) a2 = i2[m2], l2[a2.id()] = vi(a2, c2, o2.distance, o2.attributes, `kMedoids`);
    f2 = false;
    for (var h2 = 0; h2 < c2[n2(441)]; h2++) {
      var g2 = yi(h2, i2, l2);
      if (g2.length !== 0) {
        d2[h2] = wi(c2[h2], g2, o2.attributes);
        for (var v2 = 0; v2 < g2.length; v2++) u2 = wi(g2[v2], g2, o2[n2(865)]), u2 < d2[h2] && (d2[h2] = u2, c2[h2] = g2[v2], f2 = true);
        s2[h2] = r2.collection(g2);
      }
    }
    p2++;
  }
  return s2;
}, Di = function(t2, n2, r2, i2, a2) {
  for (var o2 = e, s2, c2, l2 = 0; l2 < n2[o2(441)]; l2++) for (var u2 = 0; u2 < t2[o2(441)]; u2++) i2[l2][u2] = r2[l2][u2] ** +a2.m;
  for (var d2 = 0; d2 < t2.length; d2++) for (var f2 = 0; f2 < a2.attributes.length; f2++) {
    s2 = 0, c2 = 0;
    for (var p2 = 0; p2 < n2.length; p2++) s2 += i2[p2][d2] * a2.attributes[f2](n2[p2]), c2 += i2[p2][d2];
    t2[d2][f2] = s2 / c2;
  }
}, Oi = function(t2, n2, r2, i2, a2) {
  for (var o2 = e, s2 = 0; s2 < t2.length; s2++) n2[s2] = t2[s2][o2(534)]();
  for (var c2, l2, u2, d2 = 2 / (a2.m - 1), f2 = 0; f2 < r2[o2(441)]; f2++) for (var p2 = 0; p2 < i2.length; p2++) {
    c2 = 0;
    for (var m2 = 0; m2 < r2.length; m2++) l2 = gi(a2[o2(1407)], i2[p2], r2[f2], a2.attributes, `cmeans`), u2 = gi(a2[o2(1407)], i2[p2], r2[m2], a2.attributes, `cmeans`), c2 += (l2 / u2) ** +d2;
    t2[p2][f2] = 1 / c2;
  }
}, ki = function(t2, n2, r2, i2) {
  for (var a2 = e, o2 = Array(r2.k), s2 = 0; s2 < o2.length; s2++) o2[s2] = [];
  for (var c2, l2, u2 = 0; u2 < n2.length; u2++) {
    c2 = -1 / 0, l2 = -1;
    for (var d2 = 0; d2 < n2[0].length; d2++) n2[u2][d2] > c2 && (c2 = n2[u2][d2], l2 = d2);
    o2[l2].push(t2[u2]);
  }
  for (var f2 = 0; f2 < o2.length; f2++) o2[f2] = i2[a2(999)](o2[f2]);
  return o2;
}, Ai = function(t2) {
  for (var n2 = e, r2 = this.cy(), i2 = this.nodes(), a2 = hi(t2), o2, s2, c2, l2 = Array(i2.length), u2, d2 = 0; d2 < i2.length; d2++) l2[d2] = Array(a2.k);
  c2 = Array(i2.length);
  for (var f2 = 0; f2 < i2.length; f2++) c2[f2] = Array(a2.k);
  for (var p2 = 0; p2 < i2.length; p2++) {
    for (var m2 = 0, h2 = 0; h2 < a2.k; h2++) c2[p2][h2] = Math.random(), m2 += c2[p2][h2];
    for (var g2 = 0; g2 < a2.k; g2++) c2[p2][g2] = c2[p2][g2] / m2;
  }
  s2 = Array(a2.k);
  for (var _2 = 0; _2 < a2.k; _2++) s2[_2] = Array(a2.attributes[n2(441)]);
  u2 = Array(i2[n2(441)]);
  for (var v2 = 0; v2 < i2.length; v2++) u2[v2] = Array(a2.k);
  for (var y2 = true, b2 = 0; y2 && b2 < a2.maxIterations; ) y2 = false, Di(s2, i2, c2, u2, a2), Oi(c2, l2, s2, i2, a2), xi(c2, l2, a2[n2(1387)]) || (y2 = true), b2++;
  return o2 = ki(i2, c2, a2, r2), { clusters: o2, degreeOfMembership: c2 };
}, ji = { kMeans: Ti, kMedoids: Ei, fuzzyCMeans: Ai, fcm: Ai }, Mi = Kt({ distance: `euclidean`, linkage: `min`, mode: `threshold`, threshold: 1 / 0, addDendrogram: false, dendrogramDepth: 0, attributes: [] }), Ni = { single: `min`, complete: e(701) }, Pi = function(e2) {
  var t2 = Mi(e2), n2 = Ni[t2.linkage];
  return n2 != null && (t2.linkage = n2), t2;
}, Fi = function(t2, n2, r2, i2, a2) {
  for (var o2 = e, s2 = 0, c2 = 1 / 0, l2, u2 = a2.attributes, d2 = function(e2, t3) {
    return pi(a2.distance, u2.length, function(t4) {
      return u2[t4](e2);
    }, function(e3) {
      return u2[e3](t3);
    }, e2, t3);
  }, f2 = 0; f2 < t2.length; f2++) {
    var p2 = t2[f2].key, m2 = r2[p2][i2[p2]];
    m2 < c2 && (s2 = p2, c2 = m2);
  }
  if (a2.mode === `threshold` && c2 >= a2.threshold || a2[o2(478)] === o2(1056) && t2.length === 1) return false;
  var h2 = n2[s2], g2 = n2[i2[s2]], _2 = a2.mode === `dendrogram` ? { left: h2, right: g2, key: h2.key } : { value: h2.value.concat(g2.value), key: h2.key };
  t2[h2.index] = _2, t2.splice(g2.index, 1), n2[h2.key] = _2;
  for (var v2 = 0; v2 < t2.length; v2++) {
    var y2 = t2[v2];
    h2.key === y2.key ? l2 = 1 / 0 : a2.linkage === `min` ? (l2 = r2[h2[o2(238)]][y2.key], r2[h2.key][y2.key] > r2[g2[o2(238)]][y2[o2(238)]] && (l2 = r2[g2.key][y2.key])) : a2.linkage === `max` ? (l2 = r2[h2.key][y2.key], r2[h2.key][y2[o2(238)]] < r2[g2[o2(238)]][y2.key] && (l2 = r2[g2.key][y2.key])) : l2 = a2[o2(372)] === `mean` ? (r2[h2.key][y2[o2(238)]] * h2.size + r2[g2.key][y2[o2(238)]] * g2.size) / (h2.size + g2.size) : a2.mode === `dendrogram` ? d2(y2.value, h2.value) : d2(y2.value[0], h2.value[0]), r2[h2.key][y2.key] = r2[y2.key][h2[o2(238)]] = l2;
  }
  for (var b2 = 0; b2 < t2.length; b2++) {
    var x2 = t2[b2].key;
    if (i2[x2] === h2.key || i2[x2] === g2.key) {
      for (var S2 = x2, C2 = 0; C2 < t2[o2(441)]; C2++) {
        var w2 = t2[C2][o2(238)];
        r2[x2][w2] < r2[x2][S2] && (S2 = w2);
      }
      i2[x2] = S2;
    }
    t2[b2].index = b2;
  }
  return h2[o2(238)] = g2.key = h2[o2(576)] = g2.index = null, true;
}, Ii = function(t2, n2, r2) {
  var i2 = e;
  t2 && (t2.value ? n2.push(t2[i2(1310)]) : (t2.left && Ii(t2.left, n2), t2.right && Ii(t2.right, n2)));
}, Li = function(t2, n2) {
  var r2 = e;
  if (!t2) return ``;
  if (t2[r2(474)] && t2.right) {
    var i2 = Li(t2.left, n2), a2 = Li(t2.right, n2), o2 = n2.add({ group: `nodes`, data: { id: i2 + `,` + a2 } });
    return n2.add({ group: `edges`, data: { source: i2, target: o2.id() } }), n2.add({ group: r2(297), data: { source: a2, target: o2.id() } }), o2.id();
  } else if (t2.value) return t2.value.id();
}, Ri = function(t2, n2, r2) {
  var i2 = e;
  if (!t2) return [];
  var a2 = [], o2 = [], s2 = [];
  return n2 === 0 ? (t2.left && Ii(t2.left, a2), t2[i2(207)] && Ii(t2.right, o2), s2 = a2.concat(o2), [r2.collection(s2)]) : n2 === 1 ? t2[i2(1310)] ? [r2[i2(999)](t2.value)] : (t2[i2(474)] && Ii(t2.left, a2), t2[i2(207)] && Ii(t2.right, o2), [r2.collection(a2), r2[i2(999)](o2)]) : t2.value ? [r2.collection(t2.value)] : (t2.left && (a2 = Ri(t2[i2(474)], n2 - 1, r2)), t2.right && (o2 = Ri(t2.right, n2 - 1, r2)), a2.concat(o2));
}, zi = function(t2) {
  for (var n2 = e, r2 = this.cy(), i2 = this[n2(565)](), a2 = Pi(t2), o2 = a2.attributes, s2 = function(e2, t3) {
    return pi(a2.distance, o2.length, function(t4) {
      return o2[t4](e2);
    }, function(e3) {
      return o2[e3](t3);
    }, e2, t3);
  }, c2 = [], l2 = [], u2 = [], d2 = [], f2 = 0; f2 < i2.length; f2++) {
    var p2 = { value: a2.mode === `dendrogram` ? i2[f2] : [i2[f2]], key: f2, index: f2 };
    c2[f2] = p2, d2[f2] = p2, l2[f2] = [], u2[f2] = 0;
  }
  for (var m2 = 0; m2 < c2.length; m2++) for (var h2 = 0; h2 <= m2; h2++) {
    var g2 = void 0;
    g2 = a2.mode === `dendrogram` ? m2 === h2 ? 1 / 0 : s2(c2[m2].value, c2[h2].value) : m2 === h2 ? 1 / 0 : s2(c2[m2].value[0], c2[h2].value[0]), l2[m2][h2] = g2, l2[h2][m2] = g2, g2 < l2[m2][u2[m2]] && (u2[m2] = h2);
  }
  for (var _2 = Fi(c2, d2, l2, u2, a2); _2; ) _2 = Fi(c2, d2, l2, u2, a2);
  var v2;
  return a2[n2(478)] === `dendrogram` ? (v2 = Ri(c2[0], a2.dendrogramDepth, r2), a2.addDendrogram && Li(c2[0], r2)) : (v2 = Array(c2.length), c2[n2(1390)](function(e2, t3) {
    var i3 = n2;
    e2[i3(238)] = e2.index = null, v2[t3] = r2.collection(e2.value);
  })), v2;
}, Bi = { hierarchicalClustering: zi, hca: zi }, Vi = Kt({ distance: `euclidean`, preference: `median`, damping: 0.8, maxIterations: 1e3, minIterations: 100, attributes: [] }), Hi = function(t2) {
  var n2 = e, r2 = t2.damping, i2 = t2.preference;
  0.5 <= r2 && r2 < 1 || Lt(`Damping must range on [0.5, 1).  Got: ` + r2);
  var a2 = [`median`, `mean`, `min`, `max`];
  return a2.some(function(e2) {
    return e2 === i2;
  }) || j(i2) || Lt(n2(662) + a2[n2(393)](function(e2) {
    return `'` + e2 + `'`;
  }).join(`, `) + `] or a number.  Got: ` + i2), Vi(t2);
}, Ui = function(t2, n2, r2, i2) {
  var a2 = e, o2 = function(e2, t3) {
    return i2[t3](e2);
  };
  return -pi(t2, i2[a2(441)], function(e2) {
    return o2(n2, e2);
  }, function(e2) {
    return o2(r2, e2);
  }, n2, r2);
}, Wi = function(t2, n2) {
  var r2 = e, i2 = null;
  return i2 = n2 === r2(1154) ? Pn(t2) : n2 === r2(937) ? Nn(t2) : n2 === `min` ? jn(t2) : n2 === `max` ? Mn(t2) : n2, i2;
}, Gi = function(e2, t2, n2) {
  for (var r2 = [], i2 = 0; i2 < e2; i2++) t2[i2 * e2 + i2] + n2[i2 * e2 + i2] > 0 && r2.push(i2);
  return r2;
}, Ki = function(t2, n2, r2) {
  for (var i2 = e, a2 = [], o2 = 0; o2 < t2; o2++) {
    for (var s2 = -1, c2 = -1 / 0, l2 = 0; l2 < r2[i2(441)]; l2++) {
      var u2 = r2[l2];
      n2[o2 * t2 + u2] > c2 && (s2 = u2, c2 = n2[o2 * t2 + u2]);
    }
    s2 > 0 && a2.push(s2);
  }
  for (var d2 = 0; d2 < r2.length; d2++) a2[r2[d2]] = r2[d2];
  return a2;
}, qi = function(e2, t2, n2) {
  for (var r2 = Ki(e2, t2, n2), i2 = 0; i2 < n2.length; i2++) {
    for (var a2 = [], o2 = 0; o2 < r2.length; o2++) r2[o2] === n2[i2] && a2.push(o2);
    for (var s2 = -1, c2 = -1 / 0, l2 = 0; l2 < a2.length; l2++) {
      for (var u2 = 0, d2 = 0; d2 < a2.length; d2++) u2 += t2[a2[d2] * e2 + a2[l2]];
      u2 > c2 && (s2 = l2, c2 = u2);
    }
    n2[i2] = a2[s2];
  }
  return r2 = Ki(e2, t2, n2), r2;
}, Ji = function(t2) {
  for (var n2 = e, r2 = this.cy(), i2 = this.nodes(), a2 = Hi(t2), o2 = {}, s2 = 0; s2 < i2.length; s2++) o2[i2[s2].id()] = s2;
  for (var c2 = i2.length, l2 = c2 * c2, u2 = Array(l2), d2, f2, p2, m2 = 0; m2 < l2; m2++) u2[m2] = -1 / 0;
  for (var h2 = 0; h2 < c2; h2++) for (var g2 = 0; g2 < c2; g2++) h2 !== g2 && (u2[h2 * c2 + g2] = Ui(a2.distance, i2[h2], i2[g2], a2.attributes));
  d2 = Wi(u2, a2.preference);
  for (var _2 = 0; _2 < c2; _2++) u2[_2 * c2 + _2] = d2;
  f2 = Array(l2);
  for (var v2 = 0; v2 < l2; v2++) f2[v2] = 0;
  p2 = Array(l2);
  for (var y2 = 0; y2 < l2; y2++) p2[y2] = 0;
  for (var b2 = Array(c2), x2 = Array(c2), S2 = Array(c2), C2 = 0; C2 < c2; C2++) b2[C2] = 0, x2[C2] = 0, S2[C2] = 0;
  for (var w2 = Array(c2 * a2.minIterations), T2 = 0; T2 < w2.length; T2++) w2[T2] = 0;
  var E2;
  for (E2 = 0; E2 < a2.maxIterations; E2++) {
    for (var D2 = 0; D2 < c2; D2++) {
      for (var O2 = -1 / 0, k2 = -1 / 0, A2 = -1, j2 = 0, M2 = 0; M2 < c2; M2++) b2[M2] = f2[D2 * c2 + M2], j2 = p2[D2 * c2 + M2] + u2[D2 * c2 + M2], j2 >= O2 ? (k2 = O2, O2 = j2, A2 = M2) : j2 > k2 && (k2 = j2);
      for (var N2 = 0; N2 < c2; N2++) f2[D2 * c2 + N2] = (1 - a2.damping) * (u2[D2 * c2 + N2] - O2) + a2.damping * b2[N2];
      f2[D2 * c2 + A2] = (1 - a2[n2(1299)]) * (u2[D2 * c2 + A2] - k2) + a2.damping * b2[A2];
    }
    for (var P2 = 0; P2 < c2; P2++) {
      for (var F2 = 0, I2 = 0; I2 < c2; I2++) b2[I2] = p2[I2 * c2 + P2], x2[I2] = Math.max(0, f2[I2 * c2 + P2]), F2 += x2[I2];
      F2 -= x2[P2], x2[P2] = f2[P2 * c2 + P2], F2 += x2[P2];
      for (var L2 = 0; L2 < c2; L2++) p2[L2 * c2 + P2] = (1 - a2.damping) * Math.min(0, F2 - x2[L2]) + a2.damping * b2[L2];
      p2[P2 * c2 + P2] = (1 - a2[n2(1299)]) * (F2 - x2[P2]) + a2.damping * b2[P2];
    }
    for (var R2 = 0, z2 = 0; z2 < c2; z2++) {
      var B2 = +(p2[z2 * c2 + z2] + f2[z2 * c2 + z2] > 0);
      w2[E2 % a2.minIterations * c2 + z2] = B2, R2 += B2;
    }
    if (R2 > 0 && (E2 >= a2.minIterations - 1 || E2 == a2.maxIterations - 1)) {
      for (var V2 = 0, H2 = 0; H2 < c2; H2++) {
        S2[H2] = 0;
        for (var U2 = 0; U2 < a2.minIterations; U2++) S2[H2] += w2[U2 * c2 + H2];
        (S2[H2] === 0 || S2[H2] === a2.minIterations) && V2++;
      }
      if (V2 === c2) break;
    }
  }
  for (var W2 = Gi(c2, f2, p2), G2 = qi(c2, u2, W2), K2 = {}, q2 = 0; q2 < W2.length; q2++) K2[W2[q2]] = [];
  for (var J2 = 0; J2 < i2.length; J2++) {
    var Y2 = G2[o2[i2[J2].id()]];
    Y2 != null && K2[Y2].push(i2[J2]);
  }
  for (var ee2 = Array(W2.length), X2 = 0; X2 < W2.length; X2++) ee2[X2] = r2.collection(K2[W2[X2]]);
  return ee2;
}, Yi = { affinityPropagation: Ji, ap: Ji }, Xi = Kt({ root: void 0, directed: false }), Zi = { hierholzer: function(t2) {
  var n2 = e;
  if (!k(t2)) {
    var r2 = arguments;
    t2 = { root: r2[0], directed: r2[1] };
  }
  var i2 = Xi(t2), a2 = i2.root, o2 = i2.directed, s2 = this, c2 = false, l2, u2, d2;
  a2 && (d2 = E(a2) ? this.filter(a2)[0].id() : a2[0].id());
  var f2 = {}, p2 = {};
  o2 ? s2[n2(1390)](function(e2) {
    var t3 = n2, r3 = e2.id();
    if (e2.isNode()) {
      var i3 = e2[t3(1260)](true), a3 = e2.outdegree(true), o3 = i3 - a3, s3 = a3 - i3;
      o3 == 1 ? l2 ? c2 = true : l2 = r3 : s3 == 1 ? u2 ? c2 = true : u2 = r3 : (s3 > 1 || o3 > 1) && (c2 = true), f2[r3] = [], e2.outgoers().forEach(function(e3) {
        e3.isEdge() && f2[r3].push(e3.id());
      });
    } else p2[r3] = [void 0, e2[t3(1192)]().id()];
  }) : s2.forEach(function(e2) {
    var t3 = e2.id();
    e2.isNode() ? (e2.degree(true) % 2 && (l2 ? u2 ? c2 = true : u2 = t3 : l2 = t3), f2[t3] = [], e2.connectedEdges().forEach(function(e3) {
      return f2[t3].push(e3.id());
    })) : p2[t3] = [e2.source().id(), e2.target().id()];
  });
  var m2 = { found: false, trail: void 0 };
  if (c2) return m2;
  if (u2 && l2) if (o2) {
    if (d2 && u2 != d2) return m2;
    d2 = u2;
  } else if (d2 && u2 != d2 && l2 != d2) return m2;
  else d2 || (d2 = u2);
  else d2 || (d2 = s2[0].id());
  var h2 = function(e2) {
    for (var t3 = n2, r3 = e2, i3 = [e2], a3, s3, c3; f2[r3][t3(441)]; ) a3 = f2[r3].shift(), s3 = p2[a3][0], c3 = p2[a3][1], r3 == c3 ? !o2 && r3 != s3 && (f2[s3] = f2[s3].filter(function(e3) {
      return e3 != a3;
    }), r3 = s3) : (f2[c3] = f2[c3].filter(function(e3) {
      return e3 != a3;
    }), r3 = c3), i3.unshift(a3), i3.unshift(r3);
    return i3;
  }, g2 = [], _2 = [];
  for (_2 = h2(d2); _2.length != 1; ) f2[_2[0]].length == 0 ? (g2[n2(1282)](s2[n2(1337)](_2.shift())), g2[n2(1282)](s2.getElementById(_2.shift()))) : _2 = h2(_2.shift())[n2(627)](_2);
  for (var v2 in g2.unshift(s2.getElementById(_2.shift())), f2) if (f2[v2].length) return m2;
  return m2.found = true, m2.trail = this.spawn(g2, true), m2;
} }, Qi = function() {
  var e2 = this, t2 = {}, n2 = 0, r2 = 0, i2 = [], a2 = [], o2 = {}, s2 = function(n3, r3) {
    for (var o3 = $, s3 = a2.length - 1, c3 = [], l3 = e2.spawn(); a2[s3].x != n3 || a2[s3].y != r3; ) c3.push(a2.pop().edge), s3--;
    c3[o3(254)](a2.pop()[o3(1191)]), c3.forEach(function(n4) {
      var r4 = n4.connectedNodes().intersection(e2);
      l3.merge(n4), r4.forEach(function(n5) {
        var r5 = $, i3 = n5.id(), a3 = n5[r5(778)]().intersection(e2);
        l3[r5(1221)](n5), t2[i3].cutVertex ? l3.merge(a3.filter(function(e3) {
          return e3.isLoop();
        })) : l3[r5(1221)](a3);
      });
    }), i2.push(l3);
  }, c2 = function(l3, u2, d2) {
    var f2 = $;
    l3 === d2 && (r2 += 1), t2[u2] = { id: n2, low: n2++, cutVertex: false };
    var p2 = e2.getElementById(u2).connectedEdges().intersection(e2);
    if (p2.size() === 0) i2.push(e2[f2(1418)](e2[f2(1337)](u2)));
    else {
      var m2, h2, g2, _2;
      p2.forEach(function(e3) {
        var n3 = f2;
        m2 = e3.source().id(), h2 = e3.target().id(), g2 = m2 === u2 ? h2 : m2, g2 !== d2 && (_2 = e3.id(), o2[_2] || (o2[_2] = true, a2.push({ x: u2, y: g2, edge: e3 })), g2 in t2 ? t2[u2].low = Math.min(t2[u2].low, t2[g2].id) : (c2(l3, g2, u2), t2[u2].low = Math[n3(1120)](t2[u2].low, t2[g2].low), t2[u2].id <= t2[g2].low && (t2[u2].cutVertex = true, s2(u2, g2))));
      });
    }
  };
  e2.forEach(function(e3) {
    if (e3[$(704)]()) {
      var n3 = e3.id();
      n3 in t2 || (r2 = 0, c2(n3, n3), t2[n3].cutVertex = r2 > 1);
    }
  });
  var l2 = Object.keys(t2).filter(function(e3) {
    return t2[e3].cutVertex;
  }).map(function(t3) {
    return e2.getElementById(t3);
  });
  return { cut: e2.spawn(l2), components: i2 };
}, $i = { hopcroftTarjanBiconnected: Qi, htbc: Qi, htb: Qi, hopcroftTarjanBiconnectedComponents: Qi }, ea = function() {
  var e2 = this, t2 = {}, n2 = 0, r2 = [], i2 = [], a2 = e2.spawn(e2), o2 = function(s2) {
    var c2 = $;
    if (i2.push(s2), t2[s2] = { index: n2, low: n2++, explored: false }, e2.getElementById(s2).connectedEdges()[c2(1399)](e2).forEach(function(e3) {
      var n3 = c2, r3 = e3[n3(1192)]().id();
      r3 !== s2 && (r3 in t2 || o2(r3), t2[r3].explored || (t2[s2][n3(477)] = Math.min(t2[s2].low, t2[r3].low)));
    }), t2[s2][c2(576)] === t2[s2].low) {
      for (var l2 = e2.spawn(); ; ) {
        var u2 = i2.pop();
        if (l2.merge(e2.getElementById(u2)), t2[u2].low = t2[s2].index, t2[u2][c2(742)] = true, u2 === s2) break;
      }
      var d2 = l2.edgesWith(l2), f2 = l2.merge(d2);
      r2.push(f2), a2 = a2.difference(f2);
    }
  };
  return e2.forEach(function(e3) {
    if (e3.isNode()) {
      var n3 = e3.id();
      n3 in t2 || o2(n3);
    }
  }), { cut: a2, components: r2 };
}, ta = { tarjanStronglyConnected: ea, tsc: ea, tscc: ea, tarjanStronglyConnectedComponents: ea }, na = {};
[an, hn, gn, vn, bn, Sn, En, Rr, Br, Hr, Wr, ii, ji, Bi, Yi, Zi, $i, ta].forEach(function(e2) {
  Z(na, e2);
});
var ra = 0, ia = 1, aa = 2, oa = function(t2) {
  var n2 = e;
  if (!(this instanceof oa)) return new oa(t2);
  this.id = `Thenable/1.0.7`, this[n2(909)] = ra, this.fulfillValue = void 0, this.rejectReason = void 0, this[n2(240)] = [], this.onRejected = [], this.proxy = { then: this.then[n2(931)](this) }, typeof t2 == `function` && t2.call(this, this.fulfill.bind(this), this[n2(679)].bind(this));
};
oa.prototype = { fulfill: function(t2) {
  var n2 = e;
  return sa(this, ia, n2(846), t2);
}, reject: function(e2) {
  return sa(this, aa, `rejectReason`, e2);
}, then: function(t2, n2) {
  var r2 = e, i2 = this, a2 = new oa();
  return i2.onFulfilled.push(ua(t2, a2, `fulfill`)), i2.onRejected[r2(254)](ua(n2, a2, r2(679))), ca(i2), a2.proxy;
} };
var sa = function(e2, t2, n2, r2) {
  return e2.state === ra && (e2.state = t2, e2[n2] = r2, ca(e2)), e2;
}, ca = function(e2) {
  e2.state === ia ? la(e2, `onFulfilled`, e2.fulfillValue) : e2.state === aa && la(e2, `onRejected`, e2.rejectReason);
}, la = function(e2, t2, n2) {
  if (e2[t2].length !== 0) {
    var r2 = e2[t2];
    e2[t2] = [];
    var i2 = function() {
      for (var e3 = 0; e3 < r2.length; e3++) r2[e3](n2);
    };
    typeof setImmediate == `function` ? setImmediate(i2) : setTimeout(i2, 0);
  }
}, ua = function(e2, t2, n2) {
  return function(r2) {
    if (typeof e2 != `function`) t2[n2].call(t2, r2);
    else {
      var i2;
      try {
        i2 = e2(r2);
      } catch (e3) {
        t2.reject(e3);
        return;
      }
      da(t2, i2);
    }
  };
}, da = function(e2, t2) {
  if (e2 === t2 || e2.proxy === t2) {
    e2.reject(TypeError(`cannot resolve promise with itself`));
    return;
  }
  var n2;
  if (_(t2) === `object` && t2 !== null || typeof t2 == `function`) try {
    n2 = t2.then;
  } catch (t3) {
    e2.reject(t3);
    return;
  }
  if (typeof n2 == `function`) {
    var r2 = false;
    try {
      n2.call(t2, function(n3) {
        r2 || (r2 = true, n3 === t2 ? e2.reject(TypeError(`circular thenable chain`)) : da(e2, n3));
      }, function(t3) {
        r2 || (r2 = true, e2.reject(t3));
      });
    } catch (t3) {
      r2 || e2.reject(t3);
    }
    return;
  }
  e2.fulfill(t2);
};
oa.all = function(e2) {
  return new oa(function(t2, n2) {
    for (var r2 = Array(e2.length), i2 = 0, a2 = function(n3, a3) {
      r2[n3] = a3, i2++, i2 === e2.length && t2(r2);
    }, o2 = 0; o2 < e2.length; o2++) (function(t3) {
      var r3 = e2[t3];
      r3 != null && r3.then != null ? r3.then(function(e3) {
        a2(t3, e3);
      }, function(e3) {
        n2(e3);
      }) : a2(t3, r3);
    })(o2);
  });
}, oa[e(222)] = function(e2) {
  return new oa(function(t2, n2) {
    t2(e2);
  });
}, oa.reject = function(e2) {
  return new oa(function(t2, n2) {
    n2(e2);
  });
};
var fa = typeof Promise < `u` ? Promise : oa, pa = function(t2, n2, r2) {
  var i2 = e, a2 = L(t2), o2 = !a2, s2 = this._private = Z({ duration: 1e3 }, n2, r2);
  if (s2.target = t2, s2.style = s2.style || s2[i2(943)], s2[i2(1367)] = false, s2[i2(1394)] = false, s2.hooked = false, s2[i2(1382)] = false, s2.progress = 0, s2.completes = [], s2.frames = [], s2.complete && D(s2.complete) && s2[i2(370)].push(s2.complete), o2) {
    var c2 = t2.position();
    s2.startPosition = s2.startPosition || { x: c2.x, y: c2.y }, s2.startStyle = s2.startStyle || t2.cy().style()[i2(796)](t2, s2.style);
  }
  if (a2) {
    var l2 = t2.pan();
    s2[i2(264)] = { x: l2.x, y: l2.y }, s2.startZoom = t2.zoom();
  }
  this.length = 1, this[0] = this;
}, ma = pa[e(216)];
Z(ma, { instanceString: function() {
  return `animation`;
}, hook: function() {
  var t2 = e, n2 = this[t2(820)];
  if (!n2.hooked) {
    var r2, i2 = n2.target[t2(820)].animation;
    r2 = n2.queue ? i2.queue : i2.current, r2.push(this), P(n2.target) && n2[t2(1192)].cy().addToAnimationPool(n2.target), n2.hooked = true;
  }
  return this;
}, play: function() {
  var t2 = e, n2 = this._private;
  return n2.progress === 1 && (n2.progress = 0), n2.playing = true, n2.started = false, n2[t2(475)] = false, this.hook(), this;
}, playing: function() {
  var t2 = e;
  return this._private[t2(1394)];
}, apply: function() {
  var e2 = this._private;
  return e2.applying = true, e2.started = false, e2.stopped = false, this.hook(), this;
}, applying: function() {
  return this._private.applying;
}, pause: function() {
  var e2 = this._private;
  return e2.playing = false, e2.started = false, this;
}, stop: function() {
  var t2 = e, n2 = this._private;
  return n2.playing = false, n2[t2(1367)] = false, n2.stopped = true, this;
}, rewind: function() {
  var t2 = e;
  return this[t2(934)](0);
}, fastforward: function() {
  var t2 = e;
  return this[t2(934)](1);
}, time: function(e2) {
  var t2 = this._private;
  return e2 === void 0 ? t2.progress * t2.duration : this.progress(e2 / t2.duration);
}, progress: function(t2) {
  var n2 = e, r2 = this._private, i2 = r2.playing;
  return t2 === void 0 ? r2.progress : (i2 && this.pause(), r2[n2(934)] = t2, r2.started = false, i2 && this.play(), this);
}, completed: function() {
  var t2 = e;
  return this[t2(820)].progress === 1;
}, reverse: function() {
  var t2 = e, n2 = this._private, r2 = n2[t2(1394)];
  r2 && this[t2(995)](), n2.progress = 1 - n2.progress, n2.started = false;
  var i2 = function(e2, t3) {
    var r3 = n2[e2];
    r3 != null && (n2[e2] = n2[t3], n2[t3] = r3);
  };
  if (i2(`zoom`, `startZoom`), i2(`pan`, `startPan`), i2(`position`, `startPosition`), n2[t2(1353)]) for (var a2 = 0; a2 < n2.style.length; a2++) {
    var o2 = n2.style[a2], s2 = o2.name, c2 = n2.startStyle[s2];
    n2.startStyle[s2] = o2, n2.style[a2] = c2;
  }
  return r2 && this.play(), this;
}, promise: function(e2) {
  var t2 = this._private, n2;
  switch (e2) {
    case `frame`:
      n2 = t2.frames;
      break;
    default:
    case `complete`:
    case `completed`:
      n2 = t2.completes;
  }
  return new fa(function(e3, t3) {
    n2[$(254)](function() {
      e3();
    });
  });
} }), ma.complete = ma[e(1400)], ma.run = ma[e(1227)], ma.running = ma.playing;
var ha = { animated: function() {
  return function() {
    var e2 = $, t2 = this, n2 = t2.length === void 0 ? [t2] : t2;
    if (!(this[e2(820)].cy || this).styleEnabled()) return false;
    var r2 = n2[0];
    if (r2) return r2._private.animation.current.length > 0;
  };
}, clearQueue: function() {
  return function() {
    var e2 = $, t2 = this, n2 = t2.length === void 0 ? [t2] : t2;
    if (!(this._private.cy || this)[e2(633)]()) return this;
    for (var r2 = 0; r2 < n2.length; r2++) {
      var i2 = n2[r2];
      i2._private[e2(812)].queue = [];
    }
    return this;
  };
}, delay: function() {
  return function(e2, t2) {
    var n2 = $;
    return (this._private.cy || this).styleEnabled() ? this[n2(908)]({ delay: e2, duration: e2, complete: t2 }) : this;
  };
}, delayAnimation: function() {
  return function(e2, t2) {
    var n2 = $;
    return (this._private.cy || this)[n2(633)]() ? this.animation({ delay: e2, duration: e2, complete: t2 }) : this;
  };
}, animation: function() {
  return function(e2, t2) {
    var n2 = $, r2 = this, i2 = r2.length !== void 0, a2 = i2 ? r2 : [r2], o2 = this._private.cy || this, s2 = !i2, c2 = !s2;
    if (!o2.styleEnabled()) return this;
    var l2 = o2.style();
    if (e2 = Z({}, e2, t2), Object[n2(520)](e2).length === 0) return new pa(a2[0], e2);
    switch (e2.duration === void 0 && (e2.duration = 400), e2.duration) {
      case `slow`:
        e2[n2(989)] = 600;
        break;
      case `fast`:
        e2.duration = 200;
        break;
    }
    if (c2 && (e2.style = l2[n2(537)](e2.style || e2.css), e2[n2(943)] = void 0), c2 && e2.renderedPosition != null) {
      var u2 = e2.renderedPosition, d2 = o2.pan(), f2 = o2.zoom();
      e2.position = kn(u2, f2, d2);
    }
    if (s2 && e2.panBy != null) {
      var p2 = e2.panBy, m2 = o2.pan();
      e2.pan = { x: m2.x + p2.x, y: m2.y + p2.y };
    }
    var h2 = e2.center || e2.centre;
    if (s2 && h2 != null) {
      var g2 = o2[n2(439)](h2[n2(1015)], e2.zoom);
      g2 != null && (e2.pan = g2);
    }
    if (s2 && e2.fit != null) {
      var _2 = e2.fit, v2 = o2[n2(1241)](_2[n2(1015)] || _2.boundingBox, _2.padding);
      v2 != null && (e2.pan = v2[n2(996)], e2.zoom = v2[n2(1242)]);
    }
    if (s2 && k(e2.zoom)) {
      var y2 = o2.getZoomedViewport(e2.zoom);
      y2 == null ? e2.zoom = null : (y2.zoomed && (e2.zoom = y2.zoom), y2.panned && (e2.pan = y2.pan));
    }
    return new pa(a2[0], e2);
  };
}, animate: function() {
  return function(e2, t2) {
    var n2 = $, r2 = this, i2 = r2[n2(441)] === void 0 ? [r2] : r2;
    if (!(this._private.cy || this).styleEnabled()) return this;
    t2 && (e2 = Z({}, e2, t2));
    for (var a2 = 0; a2 < i2.length; a2++) {
      var o2 = i2[a2], s2 = o2.animated() && (e2.queue === void 0 || e2.queue);
      o2.animation(e2, s2 ? { queue: true } : void 0).play();
    }
    return this;
  };
}, stop: function() {
  return function(e2, t2) {
    var n2 = $, r2 = this, i2 = r2.length === void 0 ? [r2] : r2, a2 = this._private.cy || this;
    if (!a2.styleEnabled()) return this;
    for (var o2 = 0; o2 < i2.length; o2++) {
      for (var s2 = i2[o2]._private, c2 = s2[n2(812)].current, l2 = 0; l2 < c2.length; l2++) {
        var u2 = c2[l2][n2(820)];
        t2 && (u2.duration = 0);
      }
      e2 && (s2.animation.queue = []), t2 || (s2.animation.current = []);
    }
    return a2[n2(541)](`draw`), this;
  };
} }, ga, _a;
function va() {
  return _a ? ga : (_a = 1, ga = Array.isArray, ga);
}
var ya, ba;
function xa() {
  if (ba) return ya;
  ba = 1;
  var e2 = va(), t2 = et(), n2 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, r2 = /^\w*$/;
  function i2(i3, a2) {
    var o2 = $;
    if (e2(i3)) return false;
    var s2 = typeof i3;
    return s2 == `number` || s2 == o2(861) || s2 == `boolean` || i3 == null || t2(i3) ? true : r2.test(i3) || !n2.test(i3) || a2 != null && i3 in Object(a2);
  }
  return ya = i2, ya;
}
var Sa, Ca;
function wa() {
  if (Ca) return Sa;
  Ca = 1;
  var e2 = Je(), t2 = xe(), n2 = `[object AsyncFunction]`, r2 = `[object Function]`, i2 = `[object GeneratorFunction]`, a2 = `[object Proxy]`;
  function o2(o3) {
    if (!t2(o3)) return false;
    var s2 = e2(o3);
    return s2 == r2 || s2 == i2 || s2 == n2 || s2 == a2;
  }
  return Sa = o2, Sa;
}
var Ta, Ea;
function Da() {
  return Ea ? Ta : (Ea = 1, Ta = De()[`__core-js_shared__`], Ta);
}
var Oa, ka;
function Aa() {
  if (ka) return Oa;
  ka = 1;
  var e2 = Da(), t2 = (function() {
    var t3 = $, n3 = /[^.]+$/.exec(e2 && e2.keys && e2[t3(520)].IE_PROTO || ``);
    return n3 ? `Symbol(src)_1.` + n3 : ``;
  })();
  function n2(e3) {
    return !!t2 && t2 in e3;
  }
  return Oa = n2, Oa;
}
var ja, Ma;
function Na() {
  var t2 = e;
  if (Ma) return ja;
  Ma = 1;
  var n2 = Function[t2(216)].toString;
  function r2(e2) {
    if (e2 != null) {
      try {
        return n2.call(e2);
      } catch {
      }
      try {
        return e2 + ``;
      } catch {
      }
    }
    return ``;
  }
  return ja = r2, ja;
}
var Pa, Fa;
function Ia() {
  var t2 = e;
  if (Fa) return Pa;
  Fa = 1;
  var n2 = wa(), r2 = Aa(), i2 = xe(), a2 = Na(), o2 = /[\\^$.*+?()[\]{}|]/g, s2 = /^\[object .+?Constructor\]$/, c2 = Function.prototype, l2 = Object.prototype, u2 = c2.toString, d2 = l2.hasOwnProperty, f2 = RegExp(`^` + u2[t2(962)](d2).replace(o2, `\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, t2(1235)) + `$`);
  function p2(e2) {
    return !i2(e2) || r2(e2) ? false : (n2(e2) ? f2 : s2).test(a2(e2));
  }
  return Pa = p2, Pa;
}
var La, Ra;
function za() {
  if (Ra) return La;
  Ra = 1;
  function e2(e3, t2) {
    return e3 == null ? void 0 : e3[t2];
  }
  return La = e2, La;
}
var Ba, Va;
function Ha() {
  if (Va) return Ba;
  Va = 1;
  var e2 = Ia(), t2 = za();
  function n2(n3, r2) {
    var i2 = t2(n3, r2);
    return e2(i2) ? i2 : void 0;
  }
  return Ba = n2, Ba;
}
var Ua, Wa;
function Ga() {
  var t2 = e;
  return Wa ? Ua : (Wa = 1, Ua = Ha()(Object, t2(546)), Ua);
}
var Ka, qa;
function Ja() {
  if (qa) return Ka;
  qa = 1;
  var e2 = Ga();
  function t2() {
    this.__data__ = e2 ? e2(null) : {}, this.size = 0;
  }
  return Ka = t2, Ka;
}
var Ya, Xa;
function Za() {
  if (Xa) return Ya;
  Xa = 1;
  function e2(e3) {
    var t2 = this.has(e3) && delete this.__data__[e3];
    return this.size -= +!!t2, t2;
  }
  return Ya = e2, Ya;
}
var Qa, $a;
function eo() {
  var t2 = e;
  if ($a) return Qa;
  $a = 1;
  var n2 = Ga(), r2 = `__lodash_hash_undefined__`, i2 = Object.prototype[t2(1352)];
  function a2(e2) {
    var a3 = t2, o2 = this[a3(639)];
    if (n2) {
      var s2 = o2[e2];
      return s2 === r2 ? void 0 : s2;
    }
    return i2.call(o2, e2) ? o2[e2] : void 0;
  }
  return Qa = a2, Qa;
}
var to, no;
function ro() {
  if (no) return to;
  no = 1;
  var e2 = Ga(), t2 = Object.prototype.hasOwnProperty;
  function n2(n3) {
    var r2 = $, i2 = this[r2(639)];
    return e2 ? i2[n3] !== void 0 : t2.call(i2, n3);
  }
  return to = n2, to;
}
var io, ao;
function oo() {
  if (ao) return io;
  ao = 1;
  var e2 = Ga(), t2 = `__lodash_hash_undefined__`;
  function n2(n3, r2) {
    var i2 = this.__data__;
    return this.size += +!this.has(n3), i2[n3] = e2 && r2 === void 0 ? t2 : r2, this;
  }
  return io = n2, io;
}
var so, co;
function lo() {
  var t2 = e;
  if (co) return so;
  co = 1;
  var n2 = Ja(), r2 = Za(), i2 = eo(), a2 = ro(), o2 = oo();
  function s2(e2) {
    var t3 = -1, n3 = e2 == null ? 0 : e2.length;
    for (this.clear(); ++t3 < n3; ) {
      var r3 = e2[t3];
      this.set(r3[0], r3[1]);
    }
  }
  return s2.prototype[t2(1385)] = n2, s2[t2(216)].delete = r2, s2.prototype.get = i2, s2[t2(216)].has = a2, s2[t2(216)].set = o2, so = s2, so;
}
var uo, fo;
function po() {
  if (fo) return uo;
  fo = 1;
  function e2() {
    this.__data__ = [], this.size = 0;
  }
  return uo = e2, uo;
}
var mo, ho;
function go() {
  if (ho) return mo;
  ho = 1;
  function e2(e3, t2) {
    return e3 === t2 || e3 !== e3 && t2 !== t2;
  }
  return mo = e2, mo;
}
var _o, vo;
function yo() {
  if (vo) return _o;
  vo = 1;
  var e2 = go();
  function t2(t3, n2) {
    for (var r2 = t3[$(441)]; r2--; ) if (e2(t3[r2][0], n2)) return r2;
    return -1;
  }
  return _o = t2, _o;
}
var bo, xo;
function So() {
  var t2 = e;
  if (xo) return bo;
  xo = 1;
  var n2 = yo(), r2 = Array.prototype[t2(1185)];
  function i2(e2) {
    var i3 = t2, a2 = this.__data__, o2 = n2(a2, e2);
    return o2 < 0 ? false : (o2 == a2.length - 1 ? a2.pop() : r2[i3(962)](a2, o2, 1), --this.size, true);
  }
  return bo = i2, bo;
}
var Co, wo;
function To() {
  if (wo) return Co;
  wo = 1;
  var e2 = yo();
  function t2(t3) {
    var n2 = this.__data__, r2 = e2(n2, t3);
    return r2 < 0 ? void 0 : n2[r2][1];
  }
  return Co = t2, Co;
}
var Eo, Do;
function Oo() {
  if (Do) return Eo;
  Do = 1;
  var e2 = yo();
  function t2(t3) {
    return e2(this.__data__, t3) > -1;
  }
  return Eo = t2, Eo;
}
var ko, Ao;
function jo() {
  if (Ao) return ko;
  Ao = 1;
  var e2 = yo();
  function t2(t3, n2) {
    var r2 = $, i2 = this.__data__, a2 = e2(i2, t3);
    return a2 < 0 ? (++this[r2(1092)], i2.push([t3, n2])) : i2[a2][1] = n2, this;
  }
  return ko = t2, ko;
}
var Mo, No;
function Po() {
  var t2 = e;
  if (No) return Mo;
  No = 1;
  var n2 = po(), r2 = So(), i2 = To(), a2 = Oo(), o2 = jo();
  function s2(e2) {
    var t3 = -1, n3 = e2 == null ? 0 : e2.length;
    for (this.clear(); ++t3 < n3; ) {
      var r3 = e2[t3];
      this.set(r3[0], r3[1]);
    }
  }
  return s2[t2(216)][t2(1385)] = n2, s2.prototype.delete = r2, s2.prototype[t2(1276)] = i2, s2.prototype[t2(1099)] = a2, s2.prototype.set = o2, Mo = s2, Mo;
}
var Fo, Io;
function Lo() {
  return Io ? Fo : (Io = 1, Fo = Ha()(De(), `Map`), Fo);
}
var Ro, zo;
function Bo() {
  if (zo) return Ro;
  zo = 1;
  var e2 = lo(), t2 = Po(), n2 = Lo();
  function r2() {
    this.size = 0, this.__data__ = { hash: new e2(), map: new (n2 || t2)(), string: new e2() };
  }
  return Ro = r2, Ro;
}
var Vo, Ho;
function Uo() {
  if (Ho) return Vo;
  Ho = 1;
  function e2(e3) {
    var t2 = $, n2 = typeof e3;
    return n2 == t2(1157) || n2 == `number` || n2 == `symbol` || n2 == `boolean` ? e3 !== t2(1061) : e3 === null;
  }
  return Vo = e2, Vo;
}
var Wo, Go;
function Ko() {
  if (Go) return Wo;
  Go = 1;
  var e2 = Uo();
  function t2(t3, n2) {
    var r2 = $, i2 = t3.__data__;
    return e2(n2) ? i2[typeof n2 == r2(1157) ? `string` : `hash`] : i2.map;
  }
  return Wo = t2, Wo;
}
var qo, Jo;
function Yo() {
  if (Jo) return qo;
  Jo = 1;
  var e2 = Ko();
  function t2(t3) {
    var n2 = e2(this, t3).delete(t3);
    return this.size -= +!!n2, n2;
  }
  return qo = t2, qo;
}
var Xo, Zo;
function Qo() {
  if (Zo) return Xo;
  Zo = 1;
  var e2 = Ko();
  function t2(t3) {
    return e2(this, t3).get(t3);
  }
  return Xo = t2, Xo;
}
var $o, es;
function ts() {
  if (es) return $o;
  es = 1;
  var e2 = Ko();
  function t2(t3) {
    return e2(this, t3).has(t3);
  }
  return $o = t2, $o;
}
var ns, rs;
function is() {
  if (rs) return ns;
  rs = 1;
  var e2 = Ko();
  function t2(t3, n2) {
    var r2 = e2(this, t3), i2 = r2.size;
    return r2.set(t3, n2), this.size += r2.size == i2 ? 0 : 1, this;
  }
  return ns = t2, ns;
}
var as, os;
function ss() {
  if (os) return as;
  os = 1;
  var e2 = Bo(), t2 = Yo(), n2 = Qo(), r2 = ts(), i2 = is();
  function a2(e3) {
    var t3 = -1, n3 = e3 == null ? 0 : e3.length;
    for (this.clear(); ++t3 < n3; ) {
      var r3 = e3[t3];
      this.set(r3[0], r3[1]);
    }
  }
  return a2.prototype.clear = e2, a2.prototype.delete = t2, a2.prototype.get = n2, a2.prototype.has = r2, a2.prototype.set = i2, as = a2, as;
}
var cs, ls;
function us() {
  var t2 = e;
  if (ls) return cs;
  ls = 1;
  var n2 = ss(), r2 = `Expected a function`;
  function i2(e2, t3) {
    var a2 = $;
    if (typeof e2 != `function` || t3 != null && typeof t3 != `function`) throw TypeError(r2);
    var o2 = function() {
      var n3 = $, r3 = arguments, i3 = t3 ? t3.apply(this, r3) : r3[0], a3 = o2.cache;
      if (a3.has(i3)) return a3.get(i3);
      var s2 = e2.apply(this, r3);
      return o2.cache = a3[n3(1280)](i3, s2) || a3, s2;
    };
    return o2[a2(1072)] = new (i2.Cache || n2)(), o2;
  }
  return i2[t2(1377)] = n2, cs = i2, cs;
}
function ds() {
  var e2 = [`elements`, `1484996DBEipd`, `downTime`, `pow`, `parents`, `cutrectangle`, `enqueueElementRefinement`, `source`, `degreeCentralityNormalised`, `toStringCache`, `animations`, `indegree`, `appendToStyle`, `tgtArrowAngle`, `start`, `font-size`, `hasPie`, `400`, `lineWidthBuffer`, `srcArrowAngle`, `edge-text-rotation`, `kMedoids`, `_createVAO`, `-arrow-color`, `drawEdgePath`, `closePath`, `drawEdgeArrow`, `get`, `recalculateEdgeLabelProjections`, `random`, `active`, `set`, `line-fill`, `unshift`, `deleteCache`, `host`, `indexBuffer`, `haystackPts`, `onUpdateEleCalcs`, `dequeueingSetup`, `testMode`, `node`, `startBatch`, `drawCachedNodes`, `resetToDefault`, `invalidateKey`, `wrappedCount`, `abs`, `mapped`, `hasBezier`, `damping`, `zIndex`, `edgeDistances`, `drawInscribedImage`, `which`, `append`, `substring`, `return`, `min-width`, `recalculateRenderedStyle`, `TEXTURE_BUFFER`, `value`, `sqrt`, `edgeSize`, `updateTransitions`, `positions`, `midX`, `text-justification`, `toUpperCase`, `drawCachedElement`, `stripe-direction`, `srcShape`, `simpleCount`, `renderTypes`, `every`, `eleStrokeStyle`, `hollow`, `triangle-cross`, `#000`, `NODE_SOURCE`, `linear`, `nodeX`, `idToIndex`, `calculateLabelAngle`, `TRUE`, `frames`, `complement`, `layout`, `getElementById`, `drawArrowShape`, `settingTriggersEvent`, `-background-opacity`, `startDist`, `border-right-width`, `UNDIRECTED_EDGE`, `corner-radius`, `texture`, `selector`, `outer`, `downward`, `to-bottom-right`, `lineJoin`, `

      vec4 blend(vec4 top, vec4 bot) { // blend colors with premultiplied alpha
        return vec4( 
          top.rgb + (bot.rgb * (1.0 - top.a)),
          top.a   + (bot.a   * (1.0 - top.a)) 
        );
      }

      vec4 distInterp(vec4 cA, vec4 cB, float d) { // interpolate color using Signed Distance
        // scale to the zoom level so that borders don't look blurry when zoomed in
        // note 1.5 is an aribitrary value chosen because it looks good
        return mix(cA, cB, 1.0 - smoothstep(0.0, 1.5 / uZoom, abs(d))); 
      }

      void main(void) {
        if(vVertType == `, `hasOwnProperty`, `style`, `panningEnabled`, `canvasNeedsRedraw`, `_cyreg`, `vmouseup`, `findStraightEdgePoints`, `eleImgCaches`, `background`, `bufferIfNeeded`, `423939QUHIyl`, `height`, `line-opacity`, `layersByLevel`, `dist`, `started`, `segments`, `safeDrawImage`, `needsBuffer`, `navigator`, `touchend`, `pstyle`, `styleCxtKey`, `$id`, `graphSet`, `Cache`, `#aaa`, `stripe-`, `getAtlasSize`, `strValue`, `applying`, `:unselectable`, `clockwise`, `clear`, `outside-to-line-or-label`, `sensitivityThreshold`, `layoutstop`, `units`, `forEach`, `colorStrokeStyle`, `compoundCount`, `calculateLabelAngles`, `playing`, `storeAllpts`, `topLeft`, `clearedForMotionBlur`, `vao`, `intersection`, `completed`, `generateMipmap`, `hoverData`, `clearStyleHints`, `visible`, `round-diamond`, `background-position-y`, `distance`, `blob-promise`, `background-clip`, `webgl`, `mapScratch`, `zoomRange`, `to-top-left`, `outgoers`, `padding-left`, `cmp`, `len`, `spawn`, `srcX`, `4145Yyatop`, `clearingMotionBlur`, `rgb[a]?\\((?:`, `tee`, `ceil`, `sort`, `minX`, `rendered`, `px|em`, `neighbourhood`, `addEventListener`, `PICKING`, `animationThreshold`, `round-rectangle`, `addColorStop`, `deqRedrawThreshold`, `getTextureQueue`, `vmousemove`, `right`, `hasCache`, `peek`, `bufferSubData`, `valueMax`, `VERTEX_SHADER`, `field`, `extent`, `cancel`, `prototype`, `checkTextureFullness`, `3.33.3`, `Buffer`, `silentPosition`, `globalAlpha`, `resolve`, `src`, `canvas`, `position`, `apply`, `ready`, `isLoop`, `pop`, `isEdge`, `now`, `circle`, "Can not register `", `tag`, `usedWidth`, `getKey`, `edgeEndpoint`, `key`, `-90deg`, `onFulfilled`, `tapholdTimeout`, `reduce`, `borderStyle`, `bypass`, `12530660onzbHc`, `each`, `COLLECTION`, `:ungrabbable`, `quadraticCurveTo`, `midsrcArrowAngle`, `include`, `degree`, `dirtyBoundingBoxCache`, `push`, `bfs`, `refineElementTextures`, `target-label`, ` has edge-distances:endpoints specified without manual endpoints specified via source-endpoint and target-endpoint.  Falling back on edge-distances:intersection (default).`, `outerHeight`, `unmergeBy`, `heapify`, `cut-rectangle`, `enable`, `startPan`, `dragging`, `sourceId`, `|\\!`, `capture`, `Invalid state`, `selection-box-color`, `labelWrapCachedLines`, `outdegree`, `s|ms`, `tgtX`, `directed`, `texSize`, `boundingBox`, `selecting`, `step`, `uppercaseOuterName`, `background-opacity`, `overlay-opacity`, `png`, `min-width-bias-right`, `namespace`, `rect`, `registerBinding`, `webkitRequestAnimationFrame`, `source-label`, `crossLinePts`, `startX`, `toArray`, `positionY`, `indexOf`, `constructor`, `removeData`, `edges`, `buffer`, `text-valign`, `not`, `getAtlases`, `autorotate`, `level`, `measureText`, `codirected`, `arrowShape`, `components`, `typeAndIdToKey`, `descendants`, `context`, `thisIsSrc`, `cxttapstart`, `motionBlurPxRatio`, `batch`, `types`, `rad`, `zIndexCompare`, `drawTexture`, `propertyNames`, `control-point-distances`, `parseImplWarn`, `Skipping parsing of block: Invalid selector found in string stylesheet: `, `vclick`, `includeMainLabels`, `miter`, `hasStripe`, `isParent`, `drawImage`, `batchStyleEles`, `isDefaultPrevented`, `updateElementsInLayers`, `FRAGMENT_SHADER`, `multiClickDebounceTime`, `texBuffer`, "`is invalid", `if(vAtlasId == `, `motionBlur`, `getNonDefaultPropertiesHash`, `removeAttr`, `compound`, `isArray`, `target-endpoint`, `updateKeyMappingFor`, `bindFramebuffer`, `remove`, `ancestors`, `sameText`, `test`, `underlay-corner-radius`, `getSegmentPoints`, `COMPILE_STATUS`, `font`, `selection-box-opacity`, `wrap`, `textureCache`, `triggerFnName`, `clientY`, `componentSpacing`, `SELECT_BOX`, `invalidateDimensions`, `instanceCount`, `group`, `instanceString`, `targetRot`, `shapeProps`, `some`, `startGPosition`, `collections`, `boxSelectionEnabled`, `completes`, `min-height`, `linkage`, `endpoints`, `hasElementWithId`, "Can not create second element with ID `", `blendFunc`, `openNeighborhood`, `assign`, `updateStyle`, `round-octagon`, `background-offset-x`, `lineTo`, `touches`, `backgroundTimestamp`, `appendChild`, `includeTargetLabels`, `tgtPos`, `scale`, `2037184FUcnMW`, `drawNodeOverlay`, `idealLength`, `updateCompoundBounds`, `map`, `applyLabelDimensions`, `outline-offset`, `anySame`, `getEdgeMidpoint`, `trigger`, `padding-bottom`, `hsl[a]?\\((?:`, `onUpdateEleCalcsFns`, `scrollingPage`, `nodeSize`, `move`, `onDequeue`, `labelDimensions`, `labelBounds`, `unlisten`, `use-credentials`, `recalculateNodeLabelProjection`, `bindBuffer`, `butt`, `source-distance-from-node`, `tgtH`, `invalid`, `animated`, `roundCorners`, `arrowStartX`, `(-)`, `texRows`, `aCornerRadius`, `parallelEdges`, `z-index-compare`, `isGrabTarget`, `12804unaRNR`, `Can not get id list for null key`, `intersectLine`, `webglTexRows`, `mouse`, `touchTapThreshold2`, `redrawHint`, `mutiple`, `getNodeShape`, `translate`, `text`, `main`, `bottomRight`, `labelCalcCanvasContext`, `getCenterPan`, `replace`, `length`, `row`, `elesQueue`, `save`, `event`, `border-color`, `getCache`, `Arguments`, ` && vid < 3) {
          // massage the first triangle into an edge arrow
          if(vid == 0)
            position = vec2(-0.15, -0.3);
          if(vid == 1)
            position = vec2(  0.0,  0.0);
          if(vid == 2)
            position = vec2( 0.15, -0.3);

          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);
          vColor = aColor;
        }
        else {
          gl_Position = vec4(2.0, 0.0, 0.0, 1.0); // discard vertex by putting it outside webgl clip space
        }

        vAtlasId = aAtlasId;
        vVertType = aVertType;
        vIndex = aIndex;
      }
    `, `atlasManager`, `allpts`, `vec3`, `arrowWidth`, `clientX`, `variable`, `drawEdgeTrianglePath`, `calculatedIntersection`, `pie-`, `ctrlpts`, `CHILD`, `selected`, `nodesOverlap`, `minZoom`, `DIRECTED_EDGE`, `applyContextStyle`, `straight-triangle`, `tryToCorrectInvalidPoints`, `webglDebugShowAtlases`, `split`, `delete`, `(?:[\\w-.]|(?:\\\\`, `positiveNumber`, `markKeyForGC`, `left`, `stopped`, `charAt`, `low`, `mode`, `drawNodeUnderlay`, `valueMin`, `transparent`, `drawBarrelPath`, `stripeBackgroundN`, `drawEdge`, `pickingProgram`, `text-wrap`, `MOTIONBLUR_BUFFER_DRAG`, `FLOAT`, `getCachedZSortedEles`, `vertical`, `updateItem`, `multibezier`, `isChildless`, `stopY`, `text-opacity`, `startY`, `type`, `drawNode`, `getAttribLocation`, `circle-triangle`, `useCache`, `bbCache`, `arrow-shape`, `#999`, `window`, `compoundIncludeLabels`, `node-body`, `)\\s*,\\s*(`, "`.  Bailing maximal adjustment due to cycle.  Use `options.maximal: true` only on DAGs.", `getIdsFor`, `tapunselect`, `emitter`, `isChild`, `numIter`, `neighborhood`, `setCache`, `aliases`, `swipePanning`, `border-width`, `keys`, `checkTrigger`, `delayAnimation`, `zeroOneNumber`, `isSimple`, `cornerRadius`, `createElement`, `pred`, `selection-box-border-color`, `ele`, `bbCachePosKey`, `acos`, `polygon`, `^(none)$`, `slice`, `border-dash-pattern`, `moveTo`, `getPropsList`, `destroy`, `subtract`, `forceRedraw`, `notify`, `element`, `unselect`, `transitioning`, `DOMNodeRemoved`, `create`, `bounds.* dirty.*`, `srcManEndpt`, `dfs`, `undirectedEdge`, `font-family`, "` with nonexistent ", `updateStyleHints`, `draggingEles`, `stroke`, `clip`, `counterclockwise`, `IGNORE`, `touchDragEles`, `viewport`, `alias`, `same`, `segment-weights`, `getTargetLabelKey`, `nodes`, `userPanningEnabled`, `clientWidth`, `findMidptPtsEtc`, `source-endpoint`, `contexts`, `cxt`, `arrow-scale`, `immutableKeys`, `gestureStartZoom`, `root`, `index`, `segpts`, `fieldMax`, `-color`, `bezierPts`, `outside-to-line`, `textureMult`, `startsWith`, `tgtY`, `text-border-style`, `tgtCornerRadius`, `singleTouchMoved`, `DYNAMIC_DRAW`, `renderer`, `dirtyCompoundBoundsCache`, `resizeObserver`, `redrawCount`, "The selector `", `getElementKeyToQueue`, `isLocked`, `7506282NQHRQd`, `atlases`, `topRight`, `mapping`, `dragDelta`, `getBoundingBox`, `atlasIdBuffer`, `activate`, `widthOffset`, `mozBackingStorePixelRatio`, `defaultProperties`, `node-position`, `startAnimationLoop`, `bindVertexArray`, `spawnSelf`, `containerBB`, `startPosition`, `mpan`, `beforeRenderPriorities`, `initRenderer`, `roots`, `lyrTxrDeq`, `animateFilter`, `ang`, `unpanify`, `byGroup`, `aLineWidth`, `addToPool`, `canvases`, `text-background-shape`, `getView`, `concat`, `comparatorOp`, `transition-timing-function`, `triangle-backcurve`, `rstyle`, `transition-delay`, `styleEnabled`, `recalculateEdgeProjections`, `tapdragover`, `render`, `setLineDash`, `DEPTH_BUFFER_BIT`, `__data__`, `black`, `source-arrow-shape`, `conf`, `promise`, `isBottom`, `gap`, `inside-to-node`, `strokeStyle`, `polygonPointList`, `bbAtOldPos`, `layersQueue`, `className`, `pathsEnabled`, `padBottom`, `grabbable`, `retireTexture`, `destroyed`, `idealEdgeLength`, `aBorderColor`, `includeLabels`, `dispose`, `any`, `Preference must be one of [`, `drag`, `log`, `nodeShapeImpl`, `harmonic`, `DESCENDANT`, `touch`, `document`, `filter`, `getCachesAt`, `midY`, `core`, `transformBuffer`, `backgrounding`, `pfValue`, `hasCompoundNodes`, `styleKeyToAtlas`, `reject`, `mid-source`, `listeners`, `pie`, `invalid atlas collection name '`, `overrideBypass`, `enumerable`, `averageRedrawTime`, `testCentroids`, `bypassed`, `outline-color`, `dequeue`, `numbers`, `triangle`, `bounds-expansion`, `imgLayerCaches`, `drawElement`, `maxY`, `to-left-bottom`, `layoutNodes`, `webglTexSize`, `isOverThresholdDrag`, `max`, `tgtW`, `classes`, `isNode`, `prevFnValue`, `biasDiff`, `nodeRepulsion`, `beforeGet`, `select`, `manualEndptToPx`, `points`, `options`, `notifications`, `setTransform`, `srcW`, `didDrag`, `loop-direction`, `scrollingPageTimeout`, `zeroNonZero`, `getOffsets`, `container`, `deg`, `DRAG`, `addListener`, `distanceTo`, `requestRedraw`, `subject`, `srcH`, `extension`, `oldBackgroundTimestamp`, `renderOptions`, `edgesWith`, `border-style`, `unactivate`, `ANCESTOR`, `bufferCanvases`, `destination-out`, `defaultLength`, `atan`, `addClass`, `jpg`, `explored`, `radius-type`, `mdownGPos`, `parentId`, `midVector`, `^([\\w- \\"]+(?:\\s*,\\s*[\\w- \\"]+)*)$`, `dragData`, `panned`, `stylesheet`, `batchManager`, "` is not a valid property name", `layoutready`, `labelCalcDiv`, `fontCaches`, `autoungrabify`, `text-rotation`, `labelDimsKey`, `_copyTextureToNewAtlas`, `sizeMaybePercent`, `checks`, `shape`, `Cannot call a class as a function`, `touchTapThreshold`, `pointerId`, `bindings`, `aVertType`, `autolock`, `cxtdrag`, `selection`, `insertBefore`, `Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`, `contains`, `zeroOneNumbers`, `styleObserver`, `to-right-top`, `interactive`, `connectedEdges`, `arrow-color`, `yes`, `removed`, `PARENT`, `offsetY`, `queueLayer`, `registerCalculationListeners`, `MOTIONBLUR_BUFFER_NODE`, `background-image-containment`, `solid`, `ellipse`, `TEXTURE_MIN_FILTER`, `arrowEndX`, `stopX`, `endBatch`, `labelHeight`, `getLayers`, `getAnimationStartStyle`, `dashed`, `round`, `applyBypass`, `aPosition`, `:parent`, `log2`, `getOrCreateCorners`, `concentric`, `getControlPoints`, `round-hexagon`, `bgActivePosistion`, `screenX`, `labelKey`, `lastRedrawTime`, `dragfree`, `animation`, `prefixedLabelDimsKey`, `done`, `globalCompositeOperation`, `pickingFrameBuffer`, `modelPosition`, `emit`, `873QYQKoo`, `_private`, `clearTraversalCache`, `labelStyleKey`, `picking`, `panZoomMatrix`, `projectIntoViewport`, `drawEdgeLine`, `overlay`, `dampingFactor`, `_isVisible`, `off`, `upward`, `rectangle`, `doesEleInvalidateKey`, `DATA_BOOL`, `labelAngle`, `getTextAngle`, `breadthFirstSearch`, `wheelZooming`, `canvasWidth`, `reverse`, `boundingbox`, `cachedH`, ` keys, `, `clientHeight`, `appendFromString`, `fulfillValue`, `args`, `invalidate`, `labelWidth`, `inside`, `styleKeys`, `srcRs`, `radius`, `z-index`, `globalOptions`, `round-triangle`, `motionBlurTransparency`, `setPoint`, `head`, `maxWait`, `symbol`, `-opacity`, `hidden`, `line-outline-color`, `attributes`, `filled`, `isVisible`, `getStyleKey`, `fullnessChecks`, `800`, `toString`, `origin`, `one`, `text-background-color`, `none`, `exec`, `drawBottomRoundRectanglePath`, `spacing`, `#eee`, `midtgtArrowAngle`, `fontFamily`, `poolIndex`, `findHaystackPoints`, `mid-target`, `generatePolygon`, `uppercase`, `beginPath`, `data-id`, `drawPickingRectangle`, `eventAliasesOn`, `bgColor`, `json`, `timeToRender`, `NODE`, `keyForId`, `sourceRot`, `heuristic`, `ids`, `arrowShapeImpl`, `getContext`, `width`, `qualifier`, `fillStyle`, `bidirectionalSize`, `isBundledBezier`, `batchAtlases`, `vector`, `animate`, `state`, `maxZoom`, `iterator`, `unmerge`, `fillText`, `wheelSensitivity`, `positionX`, `shift`, `rgba(255, 0, 0, 0.75)`, `edgeType`, `mouseover`, `maxWidth`, `active-bg-color`, `touchData`, `compound-sizing-wrt-labels`, `renderLoopStarted`, `labelX`, `zCompoundDepth`, `line-dash-offset`, `midpoint`, `control-point-weight`, `font-style`, `bind`, `selectable`, `forcedZoom`, `progress`, `renderedBoundingBox`, `garbage collect flag set`, `mean`, `fnValue`, `int`, `padTop`, `dragfreeon`, `sources`, `css`, `cmptId`, `stop`, `pointermove`, `mbFrames`, `oBackingStorePixelRatio`, `temperature`, `setTransformMatrix`, `top`, `grab`, `TEXTURE_2D`, `fromString`, `straight`, `NODE_NEIGHBOR`, `setAttribute`, `name`, `checkTriggers`, `deg|rad`, `drawArraysInstanced`, `call`, `slbTxrCache`, `vertTypeBuffer`, `texImage2D`, `inDragLayer`, `getContextStyle`, `bottom`, `easingImpl`, `buffers`, `reqs`, `autounselectify`, `node-overlay`, `border-opacity`, `draw`, `55472clQiLX`, `visibility`, `square`, `resize`, `currentSubject`, `showFps`, "Edge `", `image`, `STATE`, `tex2`, `freePointer`, `offsetX`, `cxtDragged`, `duration`, `prevViewport`, `)\\s*\\)$`, `maxIterations`, `maxX`, `acyclic`, `pause`, `pan`, `parentNode`, `child`, `collection`, `endY`, `transition-duration`, `aTransform`, `addToList`, `complete`, `padLeft`, `radii`, `base`, `addSimpleShapeRenderType`, `desktopTapThreshold`, `haystack`, `makeLayer`, `DATA_COMPARE`, `charCodeAt`, `drawPie`, `eles`, `invalidateContainerClientCoordsCache`, `debug`, `eleCacheQueue`, `) - time `, `counterClockwise`, `eleCaches`, `nodeShapes`, `labelY`, `grabbed`, `findLoopPoints`, `trim`, `xor`, `selectionType`, `tapholdDuration`, `mount`, `outside-to-node-or-label`, `effectiveOpacity`, `badLine`, `zoomingEnabled`, `double`, `data`, `auto`, `taxi-radius`, `run`, `sin`, `downscale`, `_isValidEdge`, `active-bg-opacity`, `equidistant`, `BUFFER_COUNT`, `arrowShapes`, `vectorNormInverse`, `avoidOverlap`, `hasUnbundled`, `1fXJGKt`, `invalidateElements`, `findEdgeControlPoints`, `paddedWidth`, `undefined`, `autoPadding`, `dendrogram`, `hypot`, `aPointCPointD`, `outerWidth`, `
      `, `__proto__`, `padding-right`, `removeListener`, `empty`, `pannable`, `outgoing`, `drawText`, `colorFillStyle`, `fit`, `) {
            d = ellipseSD(p, b);
          } else {
            d = roundRectangleSD(p, b, vCornerRadius.wzyx);
          }

          // use the distance to interpolate a color to smooth the edges of the shape, doesn't need multisampling
          // we must smooth colors inwards, because we can't change pixels outside the shape's bounding box
          if(d > 0.0) {
            if(d > outerBorder) {
              discard;
            } else {
              outColor = distInterp(vBorderColor, vec4(0), d - outerBorder);
            }
          } else {
            if(d > innerBorder) {
              vec4 outerColor = outerBorder == 0.0 ? vec4(0) : vBorderColor;
              vec4 innerBorderColor = blend(vBorderColor, vColor);
              outColor = distInterp(innerBorderColor, outerColor, d);
            } 
            else {
              vec4 outerColor;
              if(innerBorder == 0.0 && outerBorder == 0.0) {
                outerColor = vec4(0);
              } else if(innerBorder == 0.0) {
                outerColor = vBorderColor;
              } else {
                outerColor = blend(vBorderColor, vColor);
              }
              outColor = distInterp(vColor, outerColor, d - innerBorder);
            }
          }
        }
        else {
          outColor = vColor;
        }

        `, `possibleDragElements`, `cache`, `pointsTee`, `text-halign`, `nodeIsDraggable`, `line-height`, `next`, `\\[\\[\\s*(`, `_getScratchCanvas`, `fill`, `deltaY`, `update`, `object`, `center`, `minY`, `operator`, `bottom-round-rectangle`, `drawCachedElements`, `zoomed`, `maxInstances`, `generateRoundPolygon`, `size`, `#ddd`, `findEndpoints`, `bool`, `parent`, `color`, `layoutPositions`, `has`, `join`, `settingEvent`, `findBezierPoints`, `deleteIdForKey`, `properties`, `setupTextStyle`, `-background-color`, `layoutstart`, `textureOnViewport`, `preventDefault`, `matches`, `line-gradient-stop-colors`, `redrawTotalTime`, `expr`, `[%])\\s*,\\s*(`, `arc-radius`, `_buffers`, `self`, `mapLayoutData`, `toLowerCase`, `min`, `over`, `children`, `mutableElements`, `outside`, `scratch`, `bufferContexts`, `bindTexture`, `startAngle`, `drawing`, `includeOverlays`, `text-outline-width`, `getUniformLocation`, `CLASS`, `number`, `background-height`, `lookup`, `class`, `FRAMEBUFFER`, `cols`, `cssRule`, `findNearestElement`, `getElement`, `rgba(`, `createProgram`, `endX`, `match`, `unbind`, `arrowFill`, `outline-style`, `{{i}}`, `rscratch`, `contain`, `bufferCanvasImage`, `median`, `avoidOverlapPadding`, `_obj`, `string`, `right-rhomboid`, `edgeCount`, `leading`, `to-bottom`, `restore`, `floor`, `getNumberOfIdsForKey`, `styleDirty`, `eventMatches`, `bezier`, `parse`, `textRotation`, `depth`, `:grabbable`, `null`, `prev`, `arc`, `delay`, `layoutData`, `control-point-step-size`, `enums`, `drawElementOverlay`, `includeEdges`, `#version 300 es
      precision highp float;

      uniform mat3 uPanZoomMatrix;
      uniform int  uAtlasSize;
      
      // instanced
      in vec2 aPosition; // a vertex from the unit square
      
      in mat3 aTransform; // used to transform verticies, eg into a bounding box
      in int aVertType; // the type of thing we are rendering

      // the z-index that is output when using picking mode
      in vec4 aIndex;
      
      // For textures
      in int aAtlasId; // which shader unit/atlas to use
      in vec4 aTex; // x/y/w/h of texture in atlas

      // for edges
      in vec4 aPointAPointB;
      in vec4 aPointCPointD;
      in vec2 aLineWidth; // also used for node border width

      // simple shapes
      in vec4 aCornerRadius; // for round-rectangle [top-right, bottom-right, top-left, bottom-left]
      in vec4 aColor; // also used for edges
      in vec4 aBorderColor; // aLineWidth is used for border width

      // output values passed to the fragment shader
      out vec2 vTexCoord;
      out vec4 vColor;
      out vec2 vPosition;
      // flat values are not interpolated
      flat out int vAtlasId; 
      flat out int vVertType;
      flat out vec2 vTopRight;
      flat out vec2 vBotLeft;
      flat out vec4 vCornerRadius;
      flat out vec4 vBorderColor;
      flat out vec2 vBorderWidth;
      flat out vec4 vIndex;
      
      void main(void) {
        int vid = gl_VertexID;
        vec2 position = aPosition; // TODO make this a vec3, simplifies some code below

        if(aVertType == `, `display`, `layoutEdges`, `CANVAS_LAYERS`, `splice`, `targetLabelKey`, `nodePathCache`, `cos`, `vertexAttribDivisor`, `getEleLevelForLayerLevel`, `edge`, `target`, `cxtOver`, `bgRepeat`, `pointAPointBBuffer`, `needsDraw`, `inner`, `srcIntn`, `multiple`, `#0169D9`, `col`, `bezierProjPcts`, `pointerType`, `aniEles`, `sourceLabelAngle`, `RGBA`, `ARRAY_BUFFER`, `outerName`, `full`, `padding`, `panBy`, `getForCachedKey`, `add`, `includes`, `outside-to-node`, `emitAndNotify`, `redraw`, `arrowStartY`, `imageSmoothingEnabled`, `label`, `merge`, `stdFilter`, `layoutDimensions`, `uTextures`, `) { // simple shapes

          // the bounding box is needed by the fragment shader
          vBotLeft  = (aTransform * vec3(0, 0, 1)).xy; // flat
          vTopRight = (aTransform * vec3(1, 1, 1)).xy; // flat
          vPosition = (aTransform * vec3(position, 1)).xy; // will be interpolated

          // calculations are done in the fragment shader, just pass these along
          vColor = aColor;
          vCornerRadius = aCornerRadius;
          vBorderColor = aBorderColor;
          vBorderWidth = aLineWidth;

          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);
        }
        else if(aVertType == `, `substr`, `play`, `:grabbed`, `srcY`, `segment-weight`, `cachedW`, `pathCache`, `mouseup`, `justStartedPan`, `$1.*?`, `stripe-{{i}}-background-color`, `findSegmentsPoints`, `propertyGroupKeys`, `pixelRatio`, `repeat`, `getFitViewport`, `zoom`, `pie-hole`, `miterBounds`, `uniform1i`, `text-outline-opacity`, `_getEdgePoints`, `bottomLeft`];
  return ds = function() {
    return e2;
  }, ds();
}
var fs, ps;
function ms() {
  if (ps) return fs;
  ps = 1;
  var e2 = us(), t2 = 500;
  function n2(n3) {
    var r2 = e2(n3, function(e3) {
      return i2[$(1092)] === t2 && i2.clear(), e3;
    }), i2 = r2.cache;
    return r2;
  }
  return fs = n2, fs;
}
var hs, gs;
function _s() {
  if (gs) return hs;
  gs = 1;
  var e2 = ms(), t2 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, n2 = /\\(\\)?/g;
  return hs = e2(function(e3) {
    var r2 = $, i2 = [];
    return e3[r2(1013)](0) === 46 && i2.push(``), e3.replace(t2, function(e4, t3, r3, a2) {
      i2.push(r3 ? a2.replace(n2, `$1`) : t3 || e4);
    }), i2;
  }), hs;
}
var vs, ys;
function bs() {
  if (ys) return vs;
  ys = 1;
  function e2(e3, t2) {
    for (var n2 = -1, r2 = e3 == null ? 0 : e3.length, i2 = Array(r2); ++n2 < r2; ) i2[n2] = t2(e3[n2], n2, e3);
    return i2;
  }
  return vs = e2, vs;
}
var xs, Ss;
function Cs() {
  if (Ss) return xs;
  Ss = 1;
  var e2 = ze(), t2 = bs(), n2 = va(), r2 = et(), i2 = e2 ? e2.prototype : void 0, a2 = i2 ? i2.toString : void 0;
  function o2(e3) {
    if (typeof e3 == `string`) return e3;
    if (n2(e3)) return t2(e3, o2) + ``;
    if (r2(e3)) return a2 ? a2.call(e3) : ``;
    var i3 = e3 + ``;
    return i3 == `0` && 1 / e3 == -1 / 0 ? `-0` : i3;
  }
  return xs = o2, xs;
}
var ws, Ts;
function Es() {
  if (Ts) return ws;
  Ts = 1;
  var e2 = Cs();
  function t2(t3) {
    return t3 == null ? `` : e2(t3);
  }
  return ws = t2, ws;
}
var Ds, Os;
function ks() {
  if (Os) return Ds;
  Os = 1;
  var e2 = va(), t2 = xa(), n2 = _s(), r2 = Es();
  function i2(i3, a2) {
    return e2(i3) ? i3 : t2(i3, a2) ? [i3] : n2(r2(i3));
  }
  return Ds = i2, Ds;
}
var As, js;
function Ms() {
  if (js) return As;
  js = 1;
  var e2 = et();
  function t2(t3) {
    if (typeof t3 == `string` || e2(t3)) return t3;
    var n2 = t3 + ``;
    return n2 == `0` && 1 / t3 == -1 / 0 ? `-0` : n2;
  }
  return As = t2, As;
}
var Ns, Ps;
function Fs() {
  if (Ps) return Ns;
  Ps = 1;
  var e2 = ks(), t2 = Ms();
  function n2(n3, r2) {
    r2 = e2(r2, n3);
    for (var i2 = 0, a2 = r2.length; n3 != null && i2 < a2; ) n3 = n3[t2(r2[i2++])];
    return i2 && i2 == a2 ? n3 : void 0;
  }
  return Ns = n2, Ns;
}
var Is, Ls;
function Rs() {
  if (Ls) return Is;
  Ls = 1;
  var e2 = Fs();
  function t2(t3, n2, r2) {
    var i2 = t3 == null ? void 0 : e2(t3, n2);
    return i2 === void 0 ? r2 : i2;
  }
  return Is = t2, Is;
}
var zs = ve(Rs()), Bs, Vs;
function Hs() {
  if (Vs) return Bs;
  Vs = 1;
  var e2 = Ha();
  return Bs = (function() {
    try {
      var t2 = e2(Object, `defineProperty`);
      return t2({}, ``, {}), t2;
    } catch {
    }
  })(), Bs;
}
var Us, Ws;
function Gs() {
  if (Ws) return Us;
  Ws = 1;
  var e2 = Hs();
  function t2(t3, n2, r2) {
    n2 == `__proto__` && e2 ? e2(t3, n2, { configurable: true, enumerable: true, value: r2, writable: true }) : t3[n2] = r2;
  }
  return Us = t2, Us;
}
var Ks, qs;
function Js() {
  if (qs) return Ks;
  qs = 1;
  var e2 = Gs(), t2 = go(), n2 = Object.prototype.hasOwnProperty;
  function r2(r3, i2, a2) {
    var o2 = r3[i2];
    (!(n2.call(r3, i2) && t2(o2, a2)) || a2 === void 0 && !(i2 in r3)) && e2(r3, i2, a2);
  }
  return Ks = r2, Ks;
}
var Ys, Xs;
function Zs() {
  if (Xs) return Ys;
  Xs = 1;
  var e2 = 9007199254740991, t2 = /^(?:0|[1-9]\d*)$/;
  function n2(n3, r2) {
    var i2 = typeof n3;
    return r2 ?? (r2 = e2), !!r2 && (i2 == `number` || i2 != `symbol` && t2.test(n3)) && n3 > -1 && n3 % 1 == 0 && n3 < r2;
  }
  return Ys = n2, Ys;
}
var Qs, $s;
function ec() {
  if ($s) return Qs;
  $s = 1;
  var e2 = Js(), t2 = ks(), n2 = Zs(), r2 = xe(), i2 = Ms();
  function a2(a3, o2, s2, c2) {
    var l2 = $;
    if (!r2(a3)) return a3;
    o2 = t2(o2, a3);
    for (var u2 = -1, d2 = o2[l2(441)], f2 = d2 - 1, p2 = a3; p2 != null && ++u2 < d2; ) {
      var m2 = i2(o2[u2]), h2 = s2;
      if (m2 === `__proto__` || m2 === `constructor` || m2 === `prototype`) return a3;
      if (u2 != f2) {
        var g2 = p2[m2];
        h2 = c2 ? c2(g2, m2, p2) : void 0, h2 === void 0 && (h2 = r2(g2) ? g2 : n2(o2[u2 + 1]) ? [] : {});
      }
      e2(p2, m2, h2), p2 = p2[m2];
    }
    return a3;
  }
  return Qs = a2, Qs;
}
var tc, nc;
function rc() {
  if (nc) return tc;
  nc = 1;
  var e2 = ec();
  function t2(t3, n2, r2) {
    return t3 == null ? t3 : e2(t3, n2, r2);
  }
  return tc = t2, tc;
}
var ic = ve(rc()), ac, oc;
function sc() {
  if (oc) return ac;
  oc = 1;
  function e2(e3, t2) {
    var n2 = -1, r2 = e3.length;
    for (t2 || (t2 = Array(r2)); ++n2 < r2; ) t2[n2] = e3[n2];
    return t2;
  }
  return ac = e2, ac;
}
var cc, lc;
function uc() {
  if (lc) return cc;
  lc = 1;
  var e2 = bs(), t2 = sc(), n2 = va(), r2 = et(), i2 = _s(), a2 = Ms(), o2 = Es();
  function s2(s3) {
    return n2(s3) ? e2(s3, a2) : r2(s3) ? [s3] : t2(i2(o2(s3)));
  }
  return cc = s2, cc;
}
var dc = ve(uc()), fc = { data: function(e2) {
  return e2 = Z({}, { field: `data`, bindingEvent: `data`, allowBinding: false, allowSetting: false, allowGetting: false, settingEvent: `data`, settingTriggersEvent: false, triggerFnName: `trigger`, immutableKeys: {}, updateStyle: false, beforeGet: function(e3) {
  }, beforeSet: function(e3, t2) {
  }, onSet: function(e3) {
  }, canSet: function(e3) {
    return true;
  } }, e2), function(t2, n2) {
    var r2 = $, i2 = e2, a2 = this, o2 = a2.length !== void 0, s2 = o2 ? a2 : [a2], l2 = o2 ? a2[0] : a2;
    if (E(t2)) {
      var u2 = t2.indexOf(`.`) !== -1 && dc(t2);
      if (i2.allowGetting && n2 === void 0) {
        var d2;
        return l2 && (i2[r2(708)](l2), d2 = u2 && l2[r2(820)][i2[r2(213)]][t2] === void 0 ? zs(l2._private[i2.field], u2) : l2._private[i2.field][t2]), d2;
      } else if (i2.allowSetting && n2 !== void 0 && !i2[r2(573)][t2]) {
        var f2 = c({}, t2, n2);
        i2.beforeSet(a2, f2);
        for (var p2 = 0, m2 = s2.length; p2 < m2; p2++) {
          var h2 = s2[p2];
          i2.canSet(h2) && (u2 && l2._private[i2.field][t2] === void 0 ? ic(h2._private[i2.field], u2, n2) : h2[r2(820)][i2[r2(213)]][t2] = n2);
        }
        i2.updateStyle && a2.updateStyle(), i2.onSet(a2), i2.settingTriggersEvent && a2[i2.triggerFnName](i2.settingEvent);
      }
    } else if (i2.allowSetting && k(t2)) {
      var g2 = t2, _2, v2, y2 = Object[r2(520)](g2);
      i2.beforeSet(a2, g2);
      for (var b2 = 0; b2 < y2.length; b2++) if (_2 = y2[b2], v2 = g2[_2], !i2.immutableKeys[_2]) for (var x2 = 0; x2 < s2[r2(441)]; x2++) {
        var S2 = s2[x2];
        i2.canSet(S2) && (S2._private[i2.field][_2] = v2);
      }
      i2.updateStyle && a2.updateStyle(), i2.onSet(a2), i2[r2(1339)] && a2[i2[r2(356)]](i2[r2(1101)]);
    } else if (i2.allowBinding && D(t2)) {
      var C2 = t2;
      a2.on(i2.bindingEvent, C2);
    } else if (i2.allowGetting && t2 === void 0) {
      var w2;
      return l2 && (i2.beforeGet(l2), w2 = l2[r2(820)][i2.field]), w2;
    }
    return a2;
  };
}, removeData: function(e2) {
  return e2 = Z({}, { field: `data`, event: `data`, triggerFnName: `trigger`, triggerEvent: false, immutableKeys: {} }, e2), function(t2) {
    var n2 = $, r2 = e2, i2 = this, a2 = i2.length === void 0 ? [i2] : i2;
    if (E(t2)) {
      for (var o2 = t2.split(/\s+/), s2 = o2.length, c2 = 0; c2 < s2; c2++) {
        var l2 = o2[c2];
        if (!B(l2) && !r2.immutableKeys[l2]) for (var u2 = 0, d2 = a2[n2(441)]; u2 < d2; u2++) a2[u2][n2(820)][r2.field][l2] = void 0;
      }
      r2.triggerEvent && i2[r2.triggerFnName](r2.event);
    } else if (t2 === void 0) {
      for (var f2 = 0, p2 = a2[n2(441)]; f2 < p2; f2++) for (var m2 = a2[f2]._private[r2.field], h2 = Object.keys(m2), g2 = 0; g2 < h2.length; g2++) {
        var _2 = h2[g2];
        r2.immutableKeys[_2] || (m2[_2] = void 0);
      }
      r2.triggerEvent && i2[r2.triggerFnName](r2.event);
    }
    return i2;
  };
} }, pc = { eventAliasesOn: function(t2) {
  var n2 = e, r2 = t2;
  r2.addListener = r2.listen = r2.bind = r2.on, r2[n2(408)] = r2[n2(1147)] = r2[n2(830)] = r2.removeListener, r2.trigger = r2.emit, r2.pon = r2.promiseOn = function(e2, t3) {
    var n3 = this, r3 = Array.prototype.slice.call(arguments, 0);
    return new fa(function(e3, t4) {
      var i2 = $, a2 = r3.concat([function(t5) {
        n3.off.apply(n3, o2), e3(t5);
      }]), o2 = a2.concat([]);
      n3.on[i2(226)](n3, a2);
    });
  };
} }, mc = {};
[ha, fc, pc][e(1390)](function(e2) {
  Z(mc, e2);
});
var hc = { animate: mc.animate(), animation: mc.animation(), animated: mc.animated(), clearQueue: mc.clearQueue(), delay: mc.delay(), delayAnimation: mc.delayAnimation(), stop: mc.stop() }, gc = { classes: function(t2) {
  var n2 = e, r2 = this;
  if (t2 === void 0) {
    var i2 = [];
    return r2[0]._private.classes.forEach(function(e2) {
      return i2.push(e2);
    }), i2;
  } else O(t2) || (t2 = (t2 || ``).match(/\S+/g) || []);
  for (var a2 = [], o2 = new tn(t2), s2 = 0; s2 < r2.length; s2++) {
    for (var c2 = r2[s2], l2 = c2._private, u2 = l2.classes, d2 = false, f2 = 0; f2 < t2.length; f2++) {
      var p2 = t2[f2];
      if (!u2[n2(1099)](p2)) {
        d2 = true;
        break;
      }
    }
    d2 || (d2 = u2.size !== t2.length), d2 && (l2.classes = o2, a2[n2(254)](c2));
  }
  return a2.length > 0 && this[n2(1418)](a2).updateStyle().emit(n2(1137)), r2;
}, addClass: function(e2) {
  return this.toggleClass(e2, true);
}, hasClass: function(e2) {
  var t2 = this[0];
  return t2 != null && t2._private.classes.has(e2);
}, toggleClass: function(t2, n2) {
  var r2 = e;
  O(t2) || (t2 = t2.match(/\S+/g) || []);
  for (var i2 = this, a2 = n2 === void 0, o2 = [], s2 = 0, c2 = i2.length; s2 < c2; s2++) for (var l2 = i2[s2], u2 = l2[r2(820)].classes, d2 = false, f2 = 0; f2 < t2.length; f2++) {
    var p2 = t2[f2], m2 = u2.has(p2), h2 = false;
    n2 || a2 && !m2 ? (u2.add(p2), h2 = true) : (!n2 || a2 && m2) && (u2.delete(p2), h2 = true), !d2 && h2 && (o2[r2(254)](l2), d2 = true);
  }
  return o2.length > 0 && this.spawn(o2).updateStyle().emit(`class`), i2;
}, removeClass: function(e2) {
  return this.toggleClass(e2, false);
}, flashClass: function(t2, n2) {
  var r2 = e, i2 = this;
  if (n2 == null) n2 = 250;
  else if (n2 === 0) return i2;
  return i2[r2(740)](t2), setTimeout(function() {
    i2.removeClass(t2);
  }, n2), i2;
} };
gc.className = gc.classNames = gc.classes;
var _c = { metaChar: `[\\!\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\\`\\{\\|\\}\\~]`, comparatorOp: `=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=`, boolOp: `\\?|\\!|\\^`, string: `"(?:\\\\"|[^"])*"|'(?:\\\\'|[^'])*'`, number: X, meta: `degree|indegree|outdegree`, separator: `\\s*,\\s*`, descendant: `\\s+`, child: `\\s+>\\s+`, subject: `\\$`, group: `node|edge|\\*`, directedEdge: `\\s+->\\s+`, undirectedEdge: `\\s+<->\\s+` };
_c.variable = e(471) + _c.metaChar + `))+`, _c.className = `(?:[\\w-]|(?:\\\\` + _c.metaChar + `))+`, _c.value = _c[e(1157)] + `|` + _c.number, _c.id = _c.variable, (function() {
  var t2 = e, n2 = _c.comparatorOp.split(`|`), r2, i2;
  for (i2 = 0; i2 < n2.length; i2++) r2 = n2[i2], _c[t2(628)] += `|@` + r2;
  for (n2 = _c.comparatorOp.split(`|`), i2 = 0; i2 < n2.length; i2++) r2 = n2[i2], !(r2.indexOf(`!`) >= 0) && r2 !== `=` && (_c.comparatorOp += t2(267) + r2);
})();
var vc = function() {
  return { checks: [] };
}, Q = { GROUP: 0, COLLECTION: 1, FILTER: 2, DATA_COMPARE: 3, DATA_EXIST: 4, DATA_BOOL: 5, META_COMPARE: 6, STATE: 7, ID: 8, CLASS: 9, UNDIRECTED_EDGE: 10, DIRECTED_EDGE: 11, NODE_SOURCE: 12, NODE_TARGET: 13, NODE_NEIGHBOR: 14, CHILD: 15, DESCENDANT: 16, PARENT: 17, ANCESTOR: 18, COMPOUND_SPLIT: 19, TRUE: 20 }, yc = [{ selector: `:selected`, matches: function(t2) {
  return t2[e(461)]();
} }, { selector: `:unselected`, matches: function(e2) {
  return !e2.selected();
} }, { selector: `:selectable`, matches: function(e2) {
  return e2.selectable();
} }, { selector: e(1383), matches: function(e2) {
  return !e2.selectable();
} }, { selector: `:locked`, matches: function(e2) {
  return e2.locked();
} }, { selector: `:unlocked`, matches: function(e2) {
  return !e2.locked();
} }, { selector: `:visible`, matches: function(e2) {
  return e2.visible();
} }, { selector: `:hidden`, matches: function(e2) {
  return !e2.visible();
} }, { selector: `:transparent`, matches: function(t2) {
  return t2[e(481)]();
} }, { selector: e(1228), matches: function(e2) {
  return e2.grabbed();
} }, { selector: `:free`, matches: function(e2) {
  return !e2.grabbed();
} }, { selector: `:removed`, matches: function(t2) {
  return t2[e(781)]();
} }, { selector: `:inside`, matches: function(e2) {
  return !e2.removed();
} }, { selector: e(1171), matches: function(e2) {
  return e2.grabbable();
} }, { selector: e(248), matches: function(e2) {
  return !e2.grabbable();
} }, { selector: `:animated`, matches: function(t2) {
  return t2[e(416)]();
} }, { selector: `:unanimated`, matches: function(e2) {
  return !e2.animated();
} }, { selector: e(801), matches: function(t2) {
  return t2[e(327)]();
} }, { selector: `:childless`, matches: function(e2) {
  return e2.isChildless();
} }, { selector: `:child`, matches: function(e2) {
  return e2.isChild();
} }, { selector: `:orphan`, matches: function(e2) {
  return e2.isOrphan();
} }, { selector: `:nonorphan`, matches: function(e2) {
  return e2.isChild();
} }, { selector: `:compound`, matches: function(t2) {
  var n2 = e;
  return t2.isNode() ? t2.isParent() : t2[n2(1256)]().isParent() || t2.target().isParent();
} }, { selector: `:loop`, matches: function(t2) {
  return t2[e(228)]();
} }, { selector: `:simple`, matches: function(t2) {
  return t2[e(524)]();
} }, { selector: `:active`, matches: function(e2) {
  return e2.active();
} }, { selector: `:inactive`, matches: function(e2) {
  return !e2.active();
} }, { selector: `:backgrounding`, matches: function(e2) {
  return e2.backgrounding();
} }, { selector: `:nonbackgrounding`, matches: function(e2) {
  return !e2.backgrounding();
} }].sort(function(t2, n2) {
  var r2 = e;
  return ce(t2.selector, n2[r2(1346)]);
}), bc = (function() {
  for (var t2 = e, n2 = {}, r2, i2 = 0; i2 < yc.length; i2++) r2 = yc[i2], n2[r2.selector] = r2[t2(1110)];
  return n2;
})(), xc = function(e2, t2) {
  return bc[e2](t2);
}, Sc = `(` + yc[e(393)](function(e2) {
  return e2.selector;
})[e(1100)](`|`) + `)`, Cc = function(e2) {
  return e2.replace(RegExp(`\\\\(` + _c.metaChar + `)`, `g`), function(e3, t2) {
    return t2;
  });
}, wc = function(e2, t2, n2) {
  e2[e2.length - 1] = n2;
}, Tc = [{ name: `group`, query: true, regex: `(` + _c[e(362)] + `)`, populate: function(e2, t2, n2) {
  var r2 = p(n2, 1)[0];
  t2.checks.push({ type: Q.GROUP, value: r2 === `*` ? r2 : r2 + `s` });
} }, { name: `state`, query: true, regex: Sc, populate: function(e2, t2, n2) {
  var r2 = p(n2, 1)[0];
  t2.checks.push({ type: Q.STATE, value: r2 });
} }, { name: `id`, query: true, regex: `\\#(` + _c.id + `)`, populate: function(t2, n2, r2) {
  var i2 = e, a2 = p(r2, 1)[0];
  n2[i2(761)].push({ type: Q.ID, value: Cc(a2) });
} }, { name: `className`, query: true, regex: `\\.(` + _c.className + `)`, populate: function(e2, t2, n2) {
  var r2 = p(n2, 1)[0];
  t2.checks.push({ type: Q.CLASS, value: Cc(r2) });
} }, { name: `dataExists`, query: true, regex: `\\[\\s*(` + _c.variable + `)\\s*\\]`, populate: function(t2, n2, r2) {
  var i2 = e, a2 = p(r2, 1)[0];
  n2[i2(761)][i2(254)]({ type: Q.DATA_EXIST, field: Cc(a2) });
} }, { name: `dataCompare`, query: true, regex: `\\[\\s*(` + _c.variable + `)\\s*(` + _c.comparatorOp + `)\\s*(` + _c.value + `)\\s*\\]`, populate: function(t2, n2, r2) {
  var i2 = e, a2 = p(r2, 3), o2 = a2[0], s2 = a2[1], c2 = a2[2];
  c2 = RegExp(`^` + _c.string + `$`).exec(c2) == null ? parseFloat(c2) : c2.substring(1, c2.length - 1), n2.checks.push({ type: Q[i2(1012)], field: Cc(o2), operator: s2, value: c2 });
} }, { name: `dataBool`, query: true, regex: `\\[\\s*(` + _c.boolOp + `)\\s*(` + _c[e(455)] + `)\\s*\\]`, populate: function(e2, t2, n2) {
  var r2 = p(n2, 2), i2 = r2[0], a2 = r2[1];
  t2.checks.push({ type: Q.DATA_BOOL, field: Cc(a2), operator: i2 });
} }, { name: `metaCompare`, query: true, regex: e(1078) + _c.meta + `)\\s*(` + _c.comparatorOp + `)\\s*(` + _c.number + `)\\s*\\]\\]`, populate: function(t2, n2, r2) {
  var i2 = e, a2 = p(r2, 3), o2 = a2[0], s2 = a2[1], c2 = a2[2];
  n2.checks[i2(254)]({ type: Q.META_COMPARE, field: Cc(o2), operator: s2, value: parseFloat(c2) });
} }, { name: `nextQuery`, separator: true, regex: _c.separator, populate: function(t2, n2) {
  var r2 = e, i2 = t2.currentSubject, a2 = t2.edgeCount, o2 = t2[r2(1392)], s2 = t2[t2[r2(441)] - 1];
  return i2 != null && (s2.subject = i2, t2.currentSubject = null), s2.edgeCount = a2, s2.compoundCount = o2, t2.edgeCount = 0, t2.compoundCount = 0, t2[t2.length++] = vc();
} }, { name: `directedEdge`, separator: true, regex: _c.directedEdge, populate: function(t2, n2) {
  var r2 = e;
  if (t2.currentSubject == null) {
    var i2 = vc(), a2 = n2, o2 = vc();
    return i2.checks.push({ type: Q.DIRECTED_EDGE, source: a2, target: o2 }), wc(t2, n2, i2), t2.edgeCount++, o2;
  } else {
    var s2 = vc(), c2 = n2, l2 = vc();
    return s2.checks.push({ type: Q[r2(1328)], source: c2, target: l2 }), wc(t2, n2, s2), t2.edgeCount++, l2;
  }
} }, { name: `undirectedEdge`, separator: true, regex: _c[e(550)], populate: function(t2, n2) {
  var r2 = e;
  if (t2[r2(980)] == null) {
    var i2 = vc(), a2 = n2, o2 = vc();
    return i2.checks.push({ type: Q.UNDIRECTED_EDGE, nodes: [a2, o2] }), wc(t2, n2, i2), t2.edgeCount++, o2;
  } else {
    var s2 = vc(), c2 = n2, l2 = vc();
    return s2[r2(761)][r2(254)]({ type: Q.NODE_NEIGHBOR, node: c2, neighbor: l2 }), wc(t2, n2, s2), l2;
  }
} }, { name: e(998), separator: true, regex: _c.child, populate: function(t2, n2) {
  var r2 = e;
  if (t2.currentSubject == null) {
    var i2 = vc(), a2 = vc(), o2 = t2[t2.length - 1];
    return i2.checks[r2(254)]({ type: Q.CHILD, parent: o2, child: a2 }), wc(t2, n2, i2), t2.compoundCount++, a2;
  } else if (t2.currentSubject === n2) {
    var s2 = vc(), c2 = t2[t2.length - 1], l2 = vc(), u2 = vc(), d2 = vc(), f2 = vc();
    return s2.checks.push({ type: Q.COMPOUND_SPLIT, left: c2, right: l2, subject: u2 }), u2.checks = n2.checks, n2.checks = [{ type: Q.TRUE }], f2.checks.push({ type: Q[r2(1333)] }), l2[r2(761)].push({ type: Q.PARENT, parent: f2, child: d2 }), wc(t2, c2, s2), t2.currentSubject = u2, t2[r2(1392)]++, d2;
  } else {
    var p2 = vc(), m2 = vc(), h2 = [{ type: Q.PARENT, parent: p2, child: m2 }];
    return p2.checks = n2.checks, n2.checks = h2, t2.compoundCount++, m2;
  }
} }, { name: `descendant`, separator: true, regex: _c.descendant, populate: function(t2, n2) {
  var r2 = e;
  if (t2.currentSubject == null) {
    var i2 = vc(), a2 = vc(), o2 = t2[t2.length - 1];
    return i2.checks.push({ type: Q.DESCENDANT, ancestor: o2, descendant: a2 }), wc(t2, n2, i2), t2.compoundCount++, a2;
  } else if (t2.currentSubject === n2) {
    var s2 = vc(), c2 = t2[t2.length - 1], l2 = vc(), u2 = vc(), d2 = vc(), f2 = vc();
    return s2.checks.push({ type: Q.COMPOUND_SPLIT, left: c2, right: l2, subject: u2 }), u2.checks = n2[r2(761)], n2.checks = [{ type: Q.TRUE }], f2.checks.push({ type: Q.TRUE }), l2.checks.push({ type: Q.ANCESTOR, ancestor: f2, descendant: d2 }), wc(t2, c2, s2), t2.currentSubject = u2, t2.compoundCount++, d2;
  } else {
    var p2 = vc(), m2 = vc(), h2 = [{ type: Q[r2(735)], ancestor: p2, descendant: m2 }];
    return p2.checks = n2.checks, n2.checks = h2, t2.compoundCount++, m2;
  }
} }, { name: `subject`, modifier: true, regex: _c.subject, populate: function(t2, n2) {
  var r2 = e;
  if (t2.currentSubject != null && t2[r2(980)] !== n2) return zt("Redefinition of subject in selector `" + t2[r2(871)]() + "`"), false;
  t2[r2(980)] = n2;
  var i2 = t2[t2.length - 1].checks[0], a2 = i2 == null ? null : i2.type;
  a2 === Q[r2(464)] ? i2.type = Q.NODE_TARGET : a2 === Q.UNDIRECTED_EDGE && (i2.type = Q[r2(956)], i2.node = i2[r2(565)][1], i2.neighbor = i2.nodes[0], i2.nodes = null);
} }];
Tc.forEach(function(e2) {
  return e2.regexObj = RegExp(`^` + e2.regex);
});
var Ec = function(t2) {
  for (var n2 = e, r2, i2, a2, o2 = 0; o2 < Tc[n2(441)]; o2++) {
    var s2 = Tc[o2], c2 = s2.name, l2 = t2.match(s2.regexObj);
    if (l2 != null) {
      i2 = l2, r2 = s2, a2 = c2;
      var u2 = l2[0];
      t2 = t2[n2(1305)](u2.length);
      break;
    }
  }
  return { expr: r2, match: i2, name: a2, remaining: t2 };
}, Dc = function(e2) {
  var t2 = e2.match(/^\s+/);
  if (t2) {
    var n2 = t2[0];
    e2 = e2.substring(n2.length);
  }
  return e2;
}, Oc = { parse: function(t2) {
  var n2 = e, r2 = this, i2 = r2.inputText = t2, a2 = r2[0] = vc();
  for (r2.length = 1, i2 = Dc(i2); ; ) {
    var o2 = Ec(i2);
    if (o2[n2(1113)] == null) return zt(n2(593) + t2 + n2(335)), false;
    var s2 = o2.match.slice(1), c2 = o2.expr.populate(r2, a2, s2);
    if (c2 === false) return false;
    if (c2 != null && (a2 = c2), i2 = o2.remaining, i2.match(/^\s*$/)) break;
  }
  var l2 = r2[r2.length - 1];
  r2.currentSubject != null && (l2.subject = r2[n2(980)]), l2.edgeCount = r2.edgeCount, l2.compoundCount = r2[n2(1392)];
  for (var u2 = 0; u2 < r2.length; u2++) {
    var d2 = r2[u2];
    if (d2.compoundCount > 0 && d2.edgeCount > 0) return zt("The selector `" + t2 + "` is invalid because it uses both a compound selector and an edge selector"), false;
    if (d2.edgeCount > 1) return zt("The selector `" + t2 + "` is invalid because it uses multiple edge selectors"), false;
    d2[n2(1159)] === 1 && zt("The selector `" + t2 + "` is deprecated.  Edge selectors do not take effect on changes to source and target nodes after an edge is added, for performance reasons.  Use a class or data selector on edges instead, updating the class or data of an edge when your app detects a change in source or target nodes.");
  }
  return true;
}, toString: function() {
  var t2 = e;
  if (this.toStringCache != null) return this[t2(1258)];
  for (var n2 = function(e2) {
    return e2 ?? ``;
  }, r2 = function(e2) {
    return E(e2) ? `"` + e2 + `"` : n2(e2);
  }, i2 = function(e2) {
    return ` ` + e2 + ` `;
  }, a2 = function(e2, a3) {
    var s3 = t2, c3 = e2.type, l3 = e2.value;
    switch (c3) {
      case Q.GROUP:
        var u2 = n2(l3);
        return u2.substring(0, u2.length - 1);
      case Q.DATA_COMPARE:
        var d2 = e2.field, f2 = e2.operator;
        return `[` + d2 + i2(n2(f2)) + r2(l3) + `]`;
      case Q.DATA_BOOL:
        var p2 = e2.operator, m2 = e2.field;
        return `[` + n2(p2) + m2 + `]`;
      case Q.DATA_EXIST:
        return `[` + e2.field + `]`;
      case Q.META_COMPARE:
        var h2 = e2[s3(1086)];
        return `[[` + e2.field + i2(n2(h2)) + r2(l3) + `]]`;
      case Q[s3(984)]:
        return l3;
      case Q.ID:
        return `#` + l3;
      case Q[s3(1133)]:
        return `.` + l3;
      case Q[s3(782)]:
      case Q[s3(460)]:
        return o2(e2[s3(1096)], a3) + i2(`>`) + o2(e2.child, a3);
      case Q.ANCESTOR:
      case Q.DESCENDANT:
        return o2(e2.ancestor, a3) + ` ` + o2(e2.descendant, a3);
      case Q.COMPOUND_SPLIT:
        var g2 = o2(e2.left, a3), _2 = o2(e2[s3(727)], a3), v2 = o2(e2[s3(207)], a3);
        return g2 + (g2[s3(441)] > 0 ? ` ` : ``) + _2 + v2;
      case Q[s3(1333)]:
        return ``;
    }
  }, o2 = function(e2, t3) {
    return e2.checks.reduce(function(n3, r3, i3) {
      return n3 + (t3 === e2 && i3 === 0 ? `$` : ``) + a2(r3, t3);
    }, ``);
  }, s2 = ``, c2 = 0; c2 < this[t2(441)]; c2++) {
    var l2 = this[c2];
    s2 += o2(l2, l2[t2(727)]), this[t2(441)] > 1 && c2 < this.length - 1 && (s2 += `, `);
  }
  return this.toStringCache = s2, s2;
} }, kc = function(t2, n2, r2) {
  var i2 = e, a2, o2 = E(t2), s2 = j(t2), c2 = E(r2), l2, u2, d2 = false, f2 = false, p2 = false;
  switch (n2.indexOf(`!`) >= 0 && (n2 = n2.replace(`!`, ``), f2 = true), n2.indexOf(`@`) >= 0 && (n2 = n2[i2(440)](`@`, ``), d2 = true), (o2 || c2 || d2) && (l2 = !o2 && !s2 ? `` : `` + t2, u2 = `` + r2), d2 && (t2 = l2 = l2.toLowerCase(), r2 = u2 = u2[i2(1119)]()), n2) {
    case `*=`:
      a2 = l2.indexOf(u2) >= 0;
      break;
    case `$=`:
      a2 = l2[i2(294)](u2, l2[i2(441)] - u2.length) >= 0;
      break;
    case `^=`:
      a2 = l2.indexOf(u2) === 0;
      break;
    case `=`:
      a2 = t2 === r2;
      break;
    case `>`:
      p2 = true, a2 = t2 > r2;
      break;
    case `>=`:
      p2 = true, a2 = t2 >= r2;
      break;
    case `<`:
      p2 = true, a2 = t2 < r2;
      break;
    case `<=`:
      p2 = true, a2 = t2 <= r2;
      break;
    default:
      a2 = false;
      break;
  }
  return f2 && (t2 != null || !p2) && (a2 = !a2), a2;
}, Ac = function(e2, t2) {
  switch (t2) {
    case `?`:
      return !!e2;
    case `!`:
      return !e2;
    case `^`:
      return e2 === void 0;
  }
}, jc = function(e2) {
  return e2 !== void 0;
}, Mc = function(e2, t2) {
  return e2.data(t2);
}, Nc = function(e2, t2) {
  return e2[t2]();
}, Pc = [], Fc = function(t2, n2) {
  var r2 = e;
  return t2[r2(761)][r2(1323)](function(e2) {
    return Pc[e2[r2(497)]](e2, n2);
  });
};
Pc[Q.GROUP] = function(e2, t2) {
  var n2 = e2.value;
  return n2 === `*` || n2 === t2.group();
}, Pc[Q.STATE] = function(e2, t2) {
  var n2 = e2.value;
  return xc(n2, t2);
}, Pc[Q.ID] = function(e2, t2) {
  var n2 = e2.value;
  return t2.id() === n2;
}, Pc[Q.CLASS] = function(e2, t2) {
  var n2 = e2.value;
  return t2.hasClass(n2);
}, Pc[Q.META_COMPARE] = function(t2, n2) {
  var r2 = e, i2 = t2.field, a2 = t2[r2(1086)], o2 = t2.value;
  return kc(Nc(n2, i2), a2, o2);
}, Pc[Q.DATA_COMPARE] = function(e2, t2) {
  var n2 = e2.field, r2 = e2.operator, i2 = e2.value;
  return kc(Mc(t2, n2), r2, i2);
}, Pc[Q[e(834)]] = function(t2, n2) {
  var r2 = e, i2 = t2.field, a2 = t2[r2(1086)];
  return Ac(Mc(n2, i2), a2);
}, Pc[Q.DATA_EXIST] = function(t2, n2) {
  var r2 = e, i2 = t2.field;
  return t2[r2(1086)], jc(Mc(n2, i2));
}, Pc[Q[e(1343)]] = function(t2, n2) {
  var r2 = e, i2 = t2[r2(565)][0], a2 = t2.nodes[1], o2 = n2[r2(1256)](), s2 = n2.target();
  return Fc(i2, o2) && Fc(a2, s2) || Fc(a2, o2) && Fc(i2, s2);
}, Pc[Q[e(956)]] = function(t2, n2) {
  return Fc(t2[e(1290)], n2) && n2.neighborhood().some(function(e2) {
    return e2.isNode() && Fc(t2.neighbor, e2);
  });
}, Pc[Q.DIRECTED_EDGE] = function(e2, t2) {
  return Fc(e2.source, t2.source()) && Fc(e2.target, t2.target());
}, Pc[Q[e(1328)]] = function(e2, t2) {
  return Fc(e2.source, t2) && t2.outgoers().some(function(t3) {
    var n2 = $;
    return t3.isNode() && Fc(e2[n2(1192)], t3);
  });
}, Pc[Q.NODE_TARGET] = function(e2, t2) {
  return Fc(e2.target, t2) && t2.incomers().some(function(t3) {
    return t3[$(704)]() && Fc(e2.source, t3);
  });
}, Pc[Q[e(460)]] = function(e2, t2) {
  return Fc(e2.child, t2) && Fc(e2.parent, t2.parent());
}, Pc[Q.PARENT] = function(e2, t2) {
  return Fc(e2.parent, t2) && t2.children().some(function(t3) {
    return Fc(e2.child, t3);
  });
}, Pc[Q[e(667)]] = function(t2, n2) {
  var r2 = e;
  return Fc(t2.descendant, n2) && n2.ancestors()[r2(366)](function(e2) {
    return Fc(t2.ancestor, e2);
  });
}, Pc[Q.ANCESTOR] = function(e2, t2) {
  return Fc(e2.ancestor, t2) && t2.descendants().some(function(t3) {
    return Fc(e2.descendant, t3);
  });
}, Pc[Q.COMPOUND_SPLIT] = function(e2, t2) {
  return Fc(e2.subject, t2) && Fc(e2.left, t2) && Fc(e2.right, t2);
}, Pc[Q.TRUE] = function() {
  return true;
}, Pc[Q.COLLECTION] = function(e2, t2) {
  return e2.value.has(t2);
}, Pc[Q.FILTER] = function(e2, t2) {
  var n2 = e2.value;
  return n2(t2);
};
var Ic = { matches: function(e2) {
  for (var t2 = this, n2 = 0; n2 < t2.length; n2++) {
    var r2 = t2[n2];
    if (Fc(r2, e2)) return true;
  }
  return false;
}, filter: function(t2) {
  var n2 = e, r2 = this;
  if (r2.length === 1 && r2[0].checks.length === 1 && r2[0].checks[0].type === Q.ID) return t2.getElementById(r2[0].checks[0][n2(1310)]).collection();
  var i2 = function(e2) {
    for (var t3 = 0; t3 < r2.length; t3++) {
      var n3 = r2[t3];
      if (Fc(n3, e2)) return true;
    }
    return false;
  };
  return r2.text() ?? (i2 = function() {
    return true;
  }), t2[n2(670)](i2);
} }, Lc = function(t2) {
  var n2 = e;
  this.inputText = t2, this.currentSubject = null, this.compoundCount = 0, this[n2(1159)] = 0, this.length = 0, t2 == null || E(t2) && t2.match(/^\s*$/) || (P(t2) ? this.addQuery({ checks: [{ type: Q[n2(247)], value: t2.collection() }] }) : D(t2) ? this.addQuery({ checks: [{ type: Q.FILTER, value: t2 }] }) : E(t2) ? this.parse(t2) || (this.invalid = true) : Lt(`A selector must be created from a string; found `));
}, Rc = Lc[e(216)];
[Oc, Ic].forEach(function(e2) {
  return Z(Rc, e2);
}), Rc.text = function() {
  return this.inputText;
}, Rc.size = function() {
  return this.length;
}, Rc.eq = function(e2) {
  return this[e2];
}, Rc.sameText = function(t2) {
  var n2 = e;
  return !this.invalid && !t2[n2(415)] && this.text() === t2[n2(435)]();
}, Rc.addQuery = function(e2) {
  this[this.length++] = e2;
}, Rc.selector = Rc[e(871)];
var zc = { allAre: function(e2) {
  var t2 = new Lc(e2);
  return this.every(function(e3) {
    return t2.matches(e3);
  });
}, is: function(e2) {
  var t2 = new Lc(e2);
  return this.some(function(e3) {
    return t2.matches(e3);
  });
}, some: function(e2, t2) {
  for (var n2 = 0; n2 < this.length; n2++) if (t2 ? e2.apply(t2, [this[n2], n2, this]) : e2(this[n2], n2, this)) return true;
  return false;
}, every: function(e2, t2) {
  for (var n2 = 0; n2 < this.length; n2++) if (!(t2 ? e2.apply(t2, [this[n2], n2, this]) : e2(this[n2], n2, this))) return false;
  return true;
}, same: function(e2) {
  if (this === e2) return true;
  e2 = this.cy().collection(e2);
  var t2 = this.length;
  return t2 === e2.length ? t2 === 1 ? this[0] === e2[0] : this.every(function(t3) {
    return e2.hasElementWithId(t3.id());
  }) : false;
}, anySame: function(t2) {
  var n2 = e;
  return t2 = this.cy()[n2(999)](t2), this.some(function(e2) {
    return t2.hasElementWithId(e2.id());
  });
}, allAreNeighbors: function(t2) {
  var n2 = e;
  t2 = this.cy()[n2(999)](t2);
  var r2 = this.neighborhood();
  return t2.every(function(e2) {
    return r2.hasElementWithId(e2.id());
  });
}, contains: function(e2) {
  e2 = this.cy().collection(e2);
  var t2 = this;
  return e2.every(function(e3) {
    return t2.hasElementWithId(e3.id());
  });
} };
zc.allAreNeighbours = zc.allAreNeighbors, zc.has = zc.contains, zc.equal = zc.equals = zc.same;
var Bc = function(e2, t2) {
  return function(n2, r2, i2, a2) {
    var o2 = n2, s2 = this, c2;
    if (o2 == null ? c2 = `` : P(o2) && o2.length === 1 && (c2 = o2.id()), s2.length === 1 && c2) {
      var l2 = s2[0]._private, u2 = l2.traversalCache = l2.traversalCache || {}, d2 = u2[t2] = u2[t2] || [], f2 = Ct(c2);
      return d2[f2] || (d2[f2] = e2.call(s2, n2, r2, i2, a2));
    } else return e2.call(s2, n2, r2, i2, a2);
  };
}, Vc = { parent: function(t2) {
  var n2 = e, r2 = [];
  if (this.length === 1) {
    var i2 = this[0][n2(820)][n2(1096)];
    if (i2) return i2;
  }
  for (var a2 = 0; a2 < this.length; a2++) {
    var o2 = this[a2]._private.parent;
    o2 && r2.push(o2);
  }
  return this.spawn(r2, true).filter(t2);
}, parents: function(t2) {
  for (var n2 = e, r2 = [], i2 = this.parent(); i2.nonempty(); ) {
    for (var a2 = 0; a2 < i2.length; a2++) {
      var o2 = i2[a2];
      r2[n2(254)](o2);
    }
    i2 = i2.parent();
  }
  return this.spawn(r2, true).filter(t2);
}, commonAncestors: function(e2) {
  for (var t2, n2 = 0; n2 < this.length; n2++) {
    var r2 = this[n2].parents();
    t2 || (t2 = r2), t2 = t2.intersect(r2);
  }
  return t2.filter(e2);
}, orphans: function(e2) {
  return this.stdFilter(function(e3) {
    return e3.isOrphan();
  }).filter(e2);
}, nonorphans: function(t2) {
  var n2 = e;
  return this[n2(1222)](function(e2) {
    return e2.isChild();
  }).filter(t2);
}, children: Bc(function(t2) {
  for (var n2 = e, r2 = [], i2 = 0; i2 < this[n2(441)]; i2++) for (var a2 = this[i2]._private[n2(1122)], o2 = 0; o2 < a2.length; o2++) r2.push(a2[o2]);
  return this.spawn(r2, true).filter(t2);
}, `children`), siblings: function(e2) {
  return this.parent().children().not(this).filter(e2);
}, isParent: function() {
  var t2 = e, n2 = this[0];
  if (n2) return n2.isNode() && n2._private.children[t2(441)] !== 0;
}, isChildless: function() {
  var t2 = e, n2 = this[0];
  if (n2) return n2[t2(704)]() && n2._private.children.length === 0;
}, isChild: function() {
  var e2 = this[0];
  if (e2) return e2.isNode() && e2._private.parent != null;
}, isOrphan: function() {
  var e2 = this[0];
  if (e2) return e2.isNode() && e2._private.parent == null;
}, descendants: function(e2) {
  var t2 = [];
  function n2(e3) {
    for (var r2 = $, i2 = 0; i2 < e3.length; i2++) {
      var a2 = e3[i2];
      t2.push(a2), a2.children().nonempty() && n2(a2[r2(1122)]());
    }
  }
  return n2(this.children()), this.spawn(t2, true).filter(e2);
} };
function Hc(t2, n2, r2, i2) {
  for (var a2 = e, o2 = [], s2 = new tn(), c2 = t2.cy().hasCompoundNodes(), l2 = 0; l2 < t2[a2(441)]; l2++) {
    var u2 = t2[l2];
    r2 ? o2.push(u2) : c2 && i2(o2, s2, u2);
  }
  for (; o2.length > 0; ) {
    var d2 = o2.shift();
    n2(d2), s2[a2(1213)](d2.id()), c2 && i2(o2, s2, d2);
  }
  return t2;
}
function Uc(t2, n2, r2) {
  var i2 = e;
  if (r2[i2(327)]()) for (var a2 = r2._private.children, o2 = 0; o2 < a2[i2(441)]; o2++) {
    var s2 = a2[o2];
    n2.has(s2.id()) || t2[i2(254)](s2);
  }
}
Vc.forEachDown = function(t2) {
  var n2 = e, r2 = arguments[n2(441)] > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  return Hc(this, t2, r2, Uc);
};
function Wc(t2, n2, r2) {
  var i2 = e;
  if (r2.isChild()) {
    var a2 = r2[i2(820)].parent;
    n2.has(a2.id()) || t2.push(a2);
  }
}
Vc.forEachUp = function(e2) {
  var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  return Hc(this, e2, t2, Wc);
};
function Gc(e2, t2, n2) {
  Wc(e2, t2, n2), Uc(e2, t2, n2);
}
Vc.forEachUpAndDown = function(e2) {
  var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  return Hc(this, e2, t2, Gc);
}, Vc.ancestors = Vc.parents;
var Kc = qc = { data: mc.data({ field: `data`, bindingEvent: e(1036), allowBinding: true, allowSetting: true, settingEvent: `data`, settingTriggersEvent: true, triggerFnName: `trigger`, allowGetting: true, immutableKeys: { id: true, source: true, target: true, parent: true }, updateStyle: true }), removeData: mc.removeData({ field: `data`, event: e(1036), triggerFnName: `trigger`, triggerEvent: true, immutableKeys: { id: true, source: true, target: true, parent: true }, updateStyle: true }), scratch: mc.data({ field: e(1125), bindingEvent: `scratch`, allowBinding: true, allowSetting: true, settingEvent: e(1125), settingTriggersEvent: true, triggerFnName: `trigger`, allowGetting: true, updateStyle: true }), removeScratch: mc[e(296)]({ field: `scratch`, event: `scratch`, triggerFnName: `trigger`, triggerEvent: true, updateStyle: true }), rscratch: mc.data({ field: `rscratch`, allowBinding: false, allowSetting: true, settingTriggersEvent: false, allowGetting: true }), removeRscratch: mc.removeData({ field: `rscratch`, triggerEvent: false }), id: function() {
  var e2 = this[0];
  if (e2) return e2._private.data.id;
} }, qc;
function $(e2, t2) {
  return e2 -= 196, ds()[e2];
}
Kc.attr = Kc.data, Kc.removeAttr = Kc.removeData;
var Jc = qc, Yc = {};
function Xc(e2) {
  return function(t2) {
    var n2 = $, r2 = this;
    if (t2 === void 0 && (t2 = true), r2[n2(441)] !== 0) if (r2[n2(704)]() && !r2[n2(781)]()) {
      for (var i2 = 0, a2 = r2[0], o2 = a2._private.edges, s2 = 0; s2 < o2[n2(441)]; s2++) {
        var c2 = o2[s2];
        !t2 && c2.isLoop() || (i2 += e2(a2, c2));
      }
      return i2;
    } else return;
  };
}
Z(Yc, { degree: Xc(function(e2, t2) {
  return t2.source().same(t2.target()) ? 2 : 1;
}), indegree: Xc(function(e2, t2) {
  return +!!t2.target().same(e2);
}), outdegree: Xc(function(e2, t2) {
  return +!!t2.source().same(e2);
}) });
function Zc(e2, t2) {
  return function(n2) {
    for (var r2, i2 = this.nodes(), a2 = 0; a2 < i2.length; a2++) {
      var o2 = i2[a2][e2](n2);
      o2 !== void 0 && (r2 === void 0 || t2(o2, r2)) && (r2 = o2);
    }
    return r2;
  };
}
Z(Yc, { minDegree: Zc(`degree`, function(e2, t2) {
  return e2 < t2;
}), maxDegree: Zc(`degree`, function(e2, t2) {
  return e2 > t2;
}), minIndegree: Zc(`indegree`, function(e2, t2) {
  return e2 < t2;
}), maxIndegree: Zc(`indegree`, function(e2, t2) {
  return e2 > t2;
}), minOutdegree: Zc(e(272), function(e2, t2) {
  return e2 < t2;
}), maxOutdegree: Zc(`outdegree`, function(e2, t2) {
  return e2 > t2;
}) }), Z(Yc, { totalDegree: function(e2) {
  for (var t2 = 0, n2 = this.nodes(), r2 = 0; r2 < n2.length; r2++) t2 += n2[r2].degree(e2);
  return t2;
} });
var Qc, $c, el = function(e2, t2, n2) {
  for (var r2 = 0; r2 < e2.length; r2++) {
    var i2 = e2[r2];
    if (!i2.locked()) {
      var a2 = i2._private.position, o2 = { x: t2.x == null ? 0 : t2.x - a2.x, y: t2.y == null ? 0 : t2.y - a2.y };
      i2.isParent() && !(o2.x === 0 && o2.y === 0) && i2.children().shift(o2, n2), i2.dirtyBoundingBoxCache();
    }
  }
}, tl = { field: `position`, bindingEvent: e(225), allowBinding: true, allowSetting: true, settingEvent: `position`, settingTriggersEvent: true, triggerFnName: `emitAndNotify`, allowGetting: true, validKeys: [`x`, `y`], beforeGet: function(e2) {
  e2.updateCompoundBounds();
}, beforeSet: function(e2, t2) {
  el(e2, t2, false);
}, onSet: function(t2) {
  t2[e(590)]();
}, canSet: function(e2) {
  return !e2.locked();
} };
Qc = $c = { position: mc.data(tl), silentPosition: mc.data(Z({}, tl, { allowBinding: false, allowSetting: true, settingTriggersEvent: false, allowGetting: false, beforeSet: function(e2, t2) {
  el(e2, t2, true);
}, onSet: function(t2) {
  t2[e(590)]();
} })), positions: function(t2, n2) {
  var r2 = e;
  if (k(t2)) n2 ? this[r2(220)](t2) : this.position(t2);
  else if (D(t2)) {
    var i2 = t2, a2 = this.cy();
    a2.startBatch();
    for (var o2 = 0; o2 < this.length; o2++) {
      var s2 = this[o2], c2 = void 0;
      (c2 = i2(s2, o2)) && (n2 ? s2[r2(220)](c2) : s2.position(c2));
    }
    a2.endBatch();
  }
  return this;
}, silentPositions: function(e2) {
  return this.positions(e2, true);
}, shift: function(t2, n2, r2) {
  var i2 = e, a2;
  if (k(t2) ? (a2 = { x: j(t2.x) ? t2.x : 0, y: j(t2.y) ? t2.y : 0 }, r2 = n2) : E(t2) && j(n2) && (a2 = { x: 0, y: 0 }, a2[t2] = n2), a2 != null) {
    var o2 = this.cy();
    o2.startBatch();
    for (var s2 = 0; s2 < this.length; s2++) {
      var c2 = this[s2];
      if (!(o2.hasCompoundNodes() && c2.isChild() && c2[i2(346)]().anySame(this))) {
        var l2 = c2.position(), u2 = { x: l2.x + a2.x, y: l2.y + a2.y };
        r2 ? c2[i2(220)](u2) : c2.position(u2);
      }
    }
    o2.endBatch();
  }
  return this;
}, silentShift: function(e2, t2) {
  return k(e2) ? this.shift(e2, true) : E(e2) && j(t2) && this.shift(e2, t2, true), this;
}, renderedPosition: function(t2, n2) {
  var r2 = e, i2 = this[0], a2 = this.cy(), o2 = a2.zoom(), s2 = a2[r2(996)](), c2 = k(t2) ? t2 : void 0, l2 = c2 !== void 0 || n2 !== void 0 && E(t2);
  if (i2 && i2[r2(704)]()) if (l2) for (var u2 = 0; u2 < this.length; u2++) {
    var d2 = this[u2];
    n2 === void 0 ? c2 !== void 0 && d2[r2(225)](kn(c2, o2, s2)) : d2.position(t2, (n2 - s2[t2]) / o2);
  }
  else return c2 = On(i2[r2(225)](), o2, s2), t2 === void 0 ? c2 : c2[t2];
  else if (!l2) return;
  return this;
}, relativePosition: function(t2, n2) {
  var r2 = e, i2 = this[0], a2 = this.cy(), o2 = k(t2) ? t2 : void 0, s2 = o2 !== void 0 || n2 !== void 0 && E(t2), c2 = a2.hasCompoundNodes();
  if (i2 && i2.isNode()) if (s2) for (var l2 = 0; l2 < this.length; l2++) {
    var u2 = this[l2], d2 = c2 ? u2.parent() : null, f2 = d2 && d2.length > 0, p2 = f2;
    f2 && (d2 = d2[0]);
    var m2 = p2 ? d2.position() : { x: 0, y: 0 };
    n2 === void 0 ? o2 !== void 0 && u2.position({ x: o2.x + m2.x, y: o2.y + m2.y }) : u2.position(t2, n2 + m2[t2]);
  }
  else {
    var h2 = i2.position(), g2 = c2 ? i2[r2(1096)]() : null, _2 = g2 && g2[r2(441)] > 0, v2 = _2;
    _2 && (g2 = g2[0]);
    var y2 = v2 ? g2[r2(225)]() : { x: 0, y: 0 };
    return o2 = { x: h2.x - y2.x, y: h2.y - y2.y }, t2 === void 0 ? o2 : o2[t2];
  }
  else if (!s2) return;
  return this;
} }, Qc[e(817)] = Qc.point = Qc.position, Qc.modelPositions = Qc.points = Qc.positions, Qc.renderedPoint = Qc.renderedPosition, Qc.relativePoint = Qc.relativePosition;
var nl = $c, rl = il = {}, il;
il[e(935)] = function(t2) {
  var n2 = e, r2 = this.boundingBox(t2), i2 = this.cy(), a2 = i2[n2(1242)](), o2 = i2[n2(996)](), s2 = r2.x1 * a2 + o2.x, c2 = r2.x2 * a2 + o2.x, l2 = r2.y1 * a2 + o2.y, u2 = r2.y2 * a2 + o2.y;
  return { x1: s2, x2: c2, y1: l2, y2: u2, w: c2 - s2, h: u2 - l2 };
}, il.dirtyCompoundBoundsCache = function() {
  var t2 = e, n2 = arguments[t2(441)] > 0 && arguments[0] !== void 0 ? arguments[0] : false, r2 = this.cy();
  return !r2.styleEnabled() || !r2[t2(677)]() || this.forEachUp(function(e2) {
    if (e2.isParent()) {
      var t3 = e2._private;
      t3.compoundBoundsClean = false, t3.bbCache = null, n2 || e2.emitAndNotify(`bounds`);
    }
  }), this;
}, il[e(392)] = function() {
  var t2 = e, n2 = arguments[t2(441)] > 0 && arguments[0] !== void 0 ? arguments[0] : false, r2 = this.cy();
  if (!r2.styleEnabled() || !r2.hasCompoundNodes() || !n2 && r2.batching()) return this;
  function i2(e2) {
    var n3 = t2;
    if (!e2[n3(327)]()) return;
    var r3 = e2[n3(820)], i3 = e2.children(), a3 = e2.pstyle(`compound-sizing-wrt-labels`)[n3(1310)] === `include`, o3 = { width: { val: e2.pstyle(`min-width`).pfValue, left: e2.pstyle(`min-width-bias-left`), right: e2.pstyle(n3(284)) }, height: { val: e2.pstyle(n3(371)).pfValue, top: e2.pstyle(`min-height-bias-top`), bottom: e2.pstyle(`min-height-bias-bottom`) } }, s3 = i3.boundingBox({ includeLabels: a3, includeOverlays: false, useCache: false }), c2 = r3[n3(225)];
    (s3.w === 0 || s3.h === 0) && (s3 = { w: e2.pstyle(n3(901)).pfValue, h: e2.pstyle(`height`)[n3(676)] }, s3.x1 = c2.x - s3.w / 2, s3.x2 = c2.x + s3.w / 2, s3.y1 = c2.y - s3.h / 2, s3.y2 = c2.y + s3.h / 2);
    function l2(e3, t3, n4) {
      var r4 = 0, i4 = 0, a4 = t3 + n4;
      return e3 > 0 && a4 > 0 && (r4 = t3 / a4 * e3, i4 = n4 / a4 * e3), { biasDiff: r4, biasComplementDiff: i4 };
    }
    function u2(e3, t3, n4, r4) {
      if (n4.units === `%`) switch (r4) {
        case `width`:
          return e3 > 0 ? n4.pfValue * e3 : 0;
        case `height`:
          return t3 > 0 ? n4.pfValue * t3 : 0;
        case `average`:
          return e3 > 0 && t3 > 0 ? n4.pfValue * (e3 + t3) / 2 : 0;
        case `min`:
          return e3 > 0 && t3 > 0 ? e3 > t3 ? n4.pfValue * t3 : n4.pfValue * e3 : 0;
        case `max`:
          return e3 > 0 && t3 > 0 ? e3 > t3 ? n4.pfValue * e3 : n4.pfValue * t3 : 0;
        default:
          return 0;
      }
      else if (n4.units === `px`) return n4.pfValue;
      else return 0;
    }
    var d2 = o3.width.left.value;
    o3.width.left[n3(1389)] === `px` && o3.width.val > 0 && (d2 = d2 * 100 / o3.width.val);
    var f2 = o3.width.right.value;
    o3.width[n3(207)][n3(1389)] === `px` && o3.width.val > 0 && (f2 = f2 * 100 / o3.width.val);
    var p2 = o3.height.top.value;
    o3.height.top.units === `px` && o3.height.val > 0 && (p2 = p2 * 100 / o3.height.val);
    var m2 = o3.height.bottom.value;
    o3.height.bottom.units === `px` && o3.height.val > 0 && (m2 = m2 * 100 / o3.height.val);
    var h2 = l2(o3[n3(901)].val - s3.w, d2, f2), g2 = h2.biasDiff, _2 = h2.biasComplementDiff, v2 = l2(o3.height.val - s3.h, p2, m2), y2 = v2[n3(706)], b2 = v2.biasComplementDiff;
    r3.autoPadding = u2(s3.w, s3.h, e2.pstyle(n3(1210)), e2.pstyle(`padding-relative-to`).value), r3.autoWidth = Math.max(s3.w, o3.width.val), c2.x = (-g2 + s3.x1 + s3.x2 + _2) / 2, r3.autoHeight = Math.max(s3.h, o3.height.val), c2.y = (-y2 + s3.y1 + s3.y2 + b2) / 2;
  }
  for (var a2 = 0; a2 < this[t2(441)]; a2++) {
    var o2 = this[a2], s2 = o2._private;
    (!s2.compoundBoundsClean || n2) && (i2(o2), r2.batching() || (s2.compoundBoundsClean = true));
  }
  return this;
};
var al = function(e2) {
  return e2 === 1 / 0 || e2 === -1 / 0 ? 0 : e2;
}, ol = function(e2, t2, n2, r2, i2) {
  r2 - t2 === 0 || i2 - n2 === 0 || t2 == null || n2 == null || r2 == null || i2 == null || (e2.x1 = t2 < e2.x1 ? t2 : e2.x1, e2.x2 = r2 > e2.x2 ? r2 : e2.x2, e2.y1 = n2 < e2.y1 ? n2 : e2.y1, e2.y2 = i2 > e2.y2 ? i2 : e2.y2, e2.w = e2.x2 - e2.x1, e2.h = e2.y2 - e2.y1);
}, sl = function(e2, t2) {
  return t2 == null ? e2 : ol(e2, t2.x1, t2.y1, t2.x2, t2.y2);
}, cl = function(e2, t2, n2) {
  return Xt(e2, t2, n2);
}, ll = function(t2, n2, r2) {
  var i2 = e;
  if (!n2.cy().headless()) {
    var a2 = n2._private, o2 = a2.rstyle, s2 = o2[i2(453)] / 2, c2 = n2[i2(1373)](r2 + `-arrow-shape`).value, l2, u2;
    if (c2 !== `none`) {
      r2 === `source` ? (l2 = o2.srcX, u2 = o2.srcY) : r2 === `target` ? (l2 = o2.tgtX, u2 = o2[i2(584)]) : (l2 = o2.midX, u2 = o2[i2(672)]);
      var d2 = a2.arrowBounds = a2.arrowBounds || {}, f2 = d2[r2] = d2[r2] || {};
      f2.x1 = l2 - s2, f2.y1 = u2 - s2, f2.x2 = l2 + s2, f2.y2 = u2 + s2, f2.w = f2.x2 - f2.x1, f2.h = f2.y2 - f2.y1, Zn(f2, 1), ol(t2, f2.x1, f2.y1, f2.x2, f2.y2);
    }
  }
}, ul = function(t2, n2, r2) {
  var i2 = e;
  if (!n2.cy().headless()) {
    var a2 = r2 ? r2 + `-` : ``, o2 = n2._private, s2 = o2[i2(631)];
    if (n2[i2(1373)](a2 + `label`).strValue) {
      var c2 = n2.pstyle(i2(1074)), l2 = n2.pstyle(i2(299)), u2 = cl(s2, `labelWidth`, r2), d2 = cl(s2, `labelHeight`, r2), f2 = cl(s2, `labelX`, r2), p2 = cl(s2, `labelY`, r2), m2 = n2.pstyle(a2 + `text-margin-x`).pfValue, h2 = n2.pstyle(a2 + `text-margin-y`).pfValue, g2 = n2[i2(230)](), _2 = n2.pstyle(a2 + `text-rotation`), v2 = n2.pstyle(`text-outline-width`).pfValue, y2 = n2.pstyle(`text-border-width`).pfValue / 2, b2 = n2.pstyle(`text-background-padding`).pfValue, x2 = 2, S2 = d2, C2 = u2, w2 = C2 / 2, T2 = S2 / 2, E2, D2, O2, k2;
      if (g2) E2 = f2 - w2, D2 = f2 + w2, O2 = p2 - T2, k2 = p2 + T2;
      else {
        switch (c2[i2(1310)]) {
          case `left`:
            E2 = f2 - C2, D2 = f2;
            break;
          case i2(1084):
            E2 = f2 - w2, D2 = f2 + w2;
            break;
          case `right`:
            E2 = f2, D2 = f2 + C2;
            break;
        }
        switch (l2.value) {
          case `top`:
            O2 = p2 - S2, k2 = p2;
            break;
          case `center`:
            O2 = p2 - T2, k2 = p2 + T2;
            break;
          case `bottom`:
            O2 = p2, k2 = p2 + S2;
            break;
        }
      }
      var A2 = m2 - Math.max(v2, y2) - b2 - x2, j2 = m2 + Math[i2(701)](v2, y2) + b2 + x2, M2 = h2 - Math[i2(701)](v2, y2) - b2 - x2, N2 = h2 + Math.max(v2, y2) + b2 + x2;
      E2 += A2, D2 += j2, O2 += M2, k2 += N2;
      var P2 = r2 || `main`, F2 = o2.labelBounds, I2 = F2[P2] = F2[P2] || {};
      I2.x1 = E2, I2.y1 = O2, I2.x2 = D2, I2.y2 = k2, I2.w = D2 - E2, I2.h = k2 - O2, I2.leftPad = A2, I2.rightPad = j2, I2.topPad = M2, I2.botPad = N2;
      var L2 = g2 && _2.strValue === i2(302), R2 = _2[i2(676)] != null && _2.pfValue !== 0;
      if (L2 || R2) {
        var z2 = L2 ? cl(o2.rstyle, `labelAngle`, r2) : _2.pfValue, B2 = Math.cos(z2), V2 = Math.sin(z2), H2 = (E2 + D2) / 2, U2 = (O2 + k2) / 2;
        if (!g2) {
          switch (c2.value) {
            case `left`:
              H2 = D2;
              break;
            case `right`:
              H2 = E2;
              break;
          }
          switch (l2.value) {
            case `top`:
              U2 = k2;
              break;
            case `bottom`:
              U2 = O2;
              break;
          }
        }
        var W2 = function(e2, t3) {
          return e2 -= H2, t3 -= U2, { x: e2 * B2 - t3 * V2 + H2, y: e2 * V2 + t3 * B2 + U2 };
        }, G2 = W2(E2, O2), K2 = W2(E2, k2), q2 = W2(D2, O2), J2 = W2(D2, k2);
        E2 = Math[i2(1120)](G2.x, K2.x, q2.x, J2.x), D2 = Math.max(G2.x, K2.x, q2.x, J2.x), O2 = Math.min(G2.y, K2.y, q2.y, J2.y), k2 = Math[i2(701)](G2.y, K2.y, q2.y, J2.y);
      }
      var Y2 = P2 + `Rot`, ee2 = F2[Y2] = F2[Y2] || {};
      ee2.x1 = E2, ee2.y1 = O2, ee2.x2 = D2, ee2.y2 = k2, ee2.w = D2 - E2, ee2.h = k2 - O2, ol(t2, E2, O2, D2, k2), ol(o2.labelBounds.all, E2, O2, D2, k2);
    }
    return t2;
  }
}, dl = function(t2, n2) {
  var r2 = e;
  if (!n2.cy().headless()) {
    var i2 = n2.pstyle(`outline-opacity`).value, a2 = n2.pstyle(`outline-width`).value + n2[r2(1373)](r2(395)).value;
    fl(t2, n2, i2, a2, `outside`, a2 / 2);
  }
}, fl = function(t2, n2, r2, i2, a2, o2) {
  var s2 = e;
  if (!(r2 === 0 || i2 <= 0 || a2 === `inside`)) {
    var c2 = n2.cy().renderer(), l2 = c2.nodeShapes[c2.getNodeShape(n2)];
    if (l2) {
      var u2 = n2[s2(225)](), d2 = u2.x, f2 = u2.y, p2 = n2.width(), m2 = n2.height();
      l2.hasMiterBounds ? (a2 === `center` && (i2 /= 2), sl(t2, l2[s2(1244)](d2, f2, p2, m2, i2))) : o2 != null && o2 > 0 && Qn(t2, [o2, o2, o2, o2]);
    }
  }
}, pl = function(t2, n2) {
  var r2 = e;
  if (!n2.cy().headless()) {
    var i2 = n2.pstyle(`border-opacity`).value, a2 = n2[r2(1373)](r2(519)).pfValue, o2 = n2.pstyle(`border-position`).value;
    fl(t2, n2, i2, a2, o2);
  }
}, ml = function(t2, n2) {
  var r2 = e, i2 = t2[r2(820)].cy, a2 = i2.styleEnabled(), o2 = i2.headless(), s2 = Kn(), c2 = t2._private, l2 = t2.isNode(), u2 = t2[r2(230)](), d2, f2, p2, m2, h2, g2, _2 = c2.rstyle, v2 = l2 && a2 ? t2.pstyle(`bounds-expansion`).pfValue : [0], y2 = function(e2) {
    return e2.pstyle(`display`).value !== `none`;
  }, b2 = !a2 || y2(t2) && (!u2 || y2(t2.source()) && y2(t2.target()));
  if (b2) {
    var x2 = 0, S2 = 0;
    a2 && n2[r2(1130)] && (x2 = t2.pstyle(r2(282)).value, x2 !== 0 && (S2 = t2.pstyle(`overlay-padding`)[r2(1310)]));
    var C2 = 0, w2 = 0;
    a2 && n2.includeUnderlays && (C2 = t2[r2(1373)](`underlay-opacity`).value, C2 !== 0 && (w2 = t2.pstyle(`underlay-padding`).value));
    var T2 = Math.max(S2, w2), E2 = 0, D2 = 0;
    if (a2 && (E2 = t2.pstyle(`width`)[r2(676)], D2 = E2 / 2), l2 && n2.includeNodes) {
      var O2 = t2.position();
      h2 = O2.x, g2 = O2.y;
      var k2 = t2.outerWidth() / 2, A2 = t2.outerHeight() / 2;
      d2 = h2 - k2, f2 = h2 + k2, p2 = g2 - A2, m2 = g2 + A2, ol(s2, d2, p2, f2, m2), a2 && dl(s2, t2), a2 && n2.includeOutlines && !o2 && dl(s2, t2), a2 && pl(s2, t2);
    } else if (u2 && n2.includeEdges) if (a2 && !o2) {
      var j2 = t2.pstyle(`curve-style`)[r2(1381)];
      if (d2 = Math.min(_2.srcX, _2[r2(1315)], _2.tgtX), f2 = Math.max(_2[r2(1419)], _2.midX, _2[r2(274)]), p2 = Math.min(_2.srcY, _2.midY, _2[r2(584)]), m2 = Math.max(_2[r2(1229)], _2.midY, _2.tgtY), d2 -= D2, f2 += D2, p2 -= D2, m2 += D2, ol(s2, d2, p2, f2, m2), j2 === `haystack`) {
        var M2 = _2.haystackPts;
        if (M2 && M2.length === 2) {
          if (d2 = M2[0].x, p2 = M2[0].y, f2 = M2[1].x, m2 = M2[1].y, d2 > f2) {
            var N2 = d2;
            d2 = f2, f2 = N2;
          }
          if (p2 > m2) {
            var P2 = p2;
            p2 = m2, m2 = P2;
          }
          ol(s2, d2 - D2, p2 - D2, f2 + D2, m2 + D2);
        }
      } else if (j2 === `bezier` || j2 === `unbundled-bezier` || ee(j2, `segments`) || ee(j2, `taxi`)) {
        var F2;
        switch (j2) {
          case `bezier`:
          case `unbundled-bezier`:
            F2 = _2.bezierPts;
            break;
          case r2(1368):
          case `taxi`:
          case `round-segments`:
          case `round-taxi`:
            F2 = _2.linePts;
            break;
        }
        if (F2 != null) for (var I2 = 0; I2 < F2.length; I2++) {
          var L2 = F2[I2];
          d2 = L2.x - D2, f2 = L2.x + D2, p2 = L2.y - D2, m2 = L2.y + D2, ol(s2, d2, p2, f2, m2);
        }
      }
    } else {
      var R2 = t2.source()[r2(225)](), z2 = t2[r2(1192)]().position();
      if (d2 = R2.x, f2 = z2.x, p2 = R2.y, m2 = z2.y, d2 > f2) {
        var B2 = d2;
        d2 = f2, f2 = B2;
      }
      if (p2 > m2) {
        var V2 = p2;
        p2 = m2, m2 = V2;
      }
      d2 -= D2, f2 += D2, p2 -= D2, m2 += D2, ol(s2, d2, p2, f2, m2);
    }
    if (a2 && n2[r2(1180)] && u2 && (ll(s2, t2, `mid-source`), ll(s2, t2, `mid-target`), ll(s2, t2, `source`), ll(s2, t2, `target`)), a2 && t2.pstyle(`ghost`).value === r2(780)) {
      var H2 = t2.pstyle(`ghost-offset-x`)[r2(676)], U2 = t2[r2(1373)](`ghost-offset-y`)[r2(676)];
      ol(s2, s2.x1 + H2, s2.y1 + U2, s2.x2 + H2, s2.y2 + U2);
    }
    var W2 = c2.bodyBounds = c2.bodyBounds || {};
    $n(W2, s2), Qn(W2, v2), Zn(W2, 1), a2 && (d2 = s2.x1, f2 = s2.x2, p2 = s2.y1, m2 = s2.y2, ol(s2, d2 - T2, p2 - T2, f2 + T2, m2 + T2));
    var G2 = c2.overlayBounds = c2.overlayBounds || {};
    $n(G2, s2), Qn(G2, v2), Zn(G2, 1);
    var K2 = c2.labelBounds = c2[r2(407)] || {};
    K2.all == null ? K2.all = Kn() : Jn(K2.all), a2 && n2.includeLabels && (n2[r2(324)] && ul(s2, t2, null), u2 && (n2.includeSourceLabels && ul(s2, t2, r2(1256)), n2.includeTargetLabels && ul(s2, t2, `target`)));
  }
  return s2.x1 = al(s2.x1), s2.y1 = al(s2.y1), s2.x2 = al(s2.x2), s2.y2 = al(s2.y2), s2.w = al(s2.x2 - s2.x1), s2.h = al(s2.y2 - s2.y1), s2.w > 0 && s2.h > 0 && b2 && (Qn(s2, v2), Zn(s2, 1)), s2;
}, hl = function(e2) {
  var t2 = 0, n2 = function(e3) {
    return +!!e3 << t2++;
  }, r2 = 0;
  return r2 += n2(e2.incudeNodes), r2 += n2(e2.includeEdges), r2 += n2(e2.includeLabels), r2 += n2(e2.includeMainLabels), r2 += n2(e2.includeSourceLabels), r2 += n2(e2.includeTargetLabels), r2 += n2(e2.includeOverlays), r2 += n2(e2.includeOutlines), r2;
}, gl = function(t2) {
  var n2 = e, r2 = function(e2) {
    return Math.round(e2);
  };
  if (t2.isEdge()) {
    var i2 = t2[n2(1256)]().position(), a2 = t2.target().position();
    return St([r2(i2.x), r2(i2.y), r2(a2.x), r2(a2.y)]);
  } else {
    var o2 = t2.position();
    return St([r2(o2.x), r2(o2.y)]);
  }
}, _l = function(t2, n2) {
  var r2 = e, i2 = t2._private, a2, o2 = t2.isEdge(), s2 = (n2 == null ? yl : hl(n2)) === yl;
  if (i2.bbCache == null ? (a2 = ml(t2, vl), i2[r2(502)] = a2, i2.bbCachePosKey = gl(t2)) : a2 = i2[r2(502)], !s2) {
    var c2 = t2.isNode();
    a2 = Kn(), (n2.includeNodes && c2 || n2.includeEdges && !c2) && (n2.includeOverlays ? sl(a2, i2.overlayBounds) : sl(a2, i2.bodyBounds)), n2[r2(659)] && (n2[r2(324)] && (!o2 || n2.includeSourceLabels && n2[r2(386)]) ? sl(a2, i2.labelBounds.all) : (n2.includeMainLabels && sl(a2, i2.labelBounds.mainRot), n2.includeSourceLabels && sl(a2, i2.labelBounds[r2(896)]), n2.includeTargetLabels && sl(a2, i2[r2(407)].targetRot))), a2.w = a2.x2 - a2.x1, a2.h = a2.y2 - a2.y1;
  }
  return a2;
}, vl = { includeNodes: true, includeEdges: true, includeLabels: true, includeMainLabels: true, includeSourceLabels: true, includeTargetLabels: true, includeOverlays: true, includeUnderlays: true, includeOutlines: true, useCache: true }, yl = hl(vl), bl = Kt(vl);
il.boundingBox = function(t2) {
  var n2 = e, r2, i2 = t2 === void 0 || t2[n2(501)] === void 0 || t2.useCache === true, a2 = G(function(e2) {
    var t3 = n2, r3 = e2[t3(820)];
    return r3.bbCache == null || r3.styleDirty || r3[t3(530)] !== gl(e2);
  }, function(e2) {
    return e2.id();
  });
  if (i2 && this.length === 1 && !a2(this[0])) t2 = t2 === void 0 ? vl : bl(t2), r2 = _l(this[0], t2);
  else {
    r2 = Kn(), t2 || (t2 = vl);
    var o2 = bl(t2), s2 = this, c2 = s2.cy().styleEnabled();
    this.edges().forEach(a2), this[n2(565)]().forEach(a2), c2 && this.recalculateRenderedStyle(i2), this[n2(392)](!i2);
    for (var l2 = 0; l2 < s2.length; l2++) {
      var u2 = s2[l2];
      a2(u2) && u2.dirtyBoundingBoxCache(), sl(r2, _l(u2, o2));
    }
  }
  return r2.x1 = al(r2.x1), r2.y1 = al(r2.y1), r2.x2 = al(r2.x2), r2.y2 = al(r2.y2), r2.w = al(r2.x2 - r2.x1), r2.h = al(r2.y2 - r2.y1), r2;
}, il.dirtyBoundingBoxCache = function() {
  for (var t2 = e, n2 = 0; n2 < this.length; n2++) {
    var r2 = this[n2]._private;
    r2.bbCache = null, r2.bbCachePosKey = null, r2.bodyBounds = null, r2.overlayBounds = null, r2.labelBounds.all = null, r2.labelBounds.source = null, r2.labelBounds.target = null, r2.labelBounds.main = null, r2[t2(407)].sourceRot = null, r2.labelBounds[t2(364)] = null, r2[t2(407)].mainRot = null, r2.arrowBounds.source = null, r2.arrowBounds[t2(1192)] = null, r2.arrowBounds[`mid-source`] = null, r2.arrowBounds[t2(884)] = null;
  }
  return this[t2(1216)](`bounds`), this;
}, il.boundingBoxAt = function(t2) {
  var n2 = e, r2 = this.nodes(), i2 = this.cy(), a2 = i2.hasCompoundNodes(), o2 = i2[n2(999)]();
  if (a2 && (o2 = r2.filter(function(e2) {
    return e2.isParent();
  }), r2 = r2.not(o2)), k(t2)) {
    var s2 = t2;
    t2 = function() {
      return s2;
    };
  }
  var c2 = function(e2, r3) {
    var i3 = n2;
    return e2._private[i3(649)] = t2(e2, r3);
  }, l2 = function(e2) {
    return e2._private.bbAtOldPos;
  };
  i2.startBatch(), r2.forEach(c2).silentPositions(t2), a2 && (o2.dirtyCompoundBoundsCache(), o2[n2(253)](), o2.updateCompoundBounds(true));
  var u2 = qn(this.boundingBox({ useCache: false }));
  return r2.silentPositions(l2), a2 && (o2.dirtyCompoundBoundsCache(), o2.dirtyBoundingBoxCache(), o2.updateCompoundBounds(true)), i2.endBatch(), u2;
}, rl[e(841)] = rl.bb = rl.boundingBox, rl.renderedBoundingbox = rl.renderedBoundingBox;
var xl = il, Sl = Cl = {}, Cl, wl = function(t2) {
  var n2 = e;
  t2.uppercaseName = Y(t2.name), t2.autoName = `auto` + t2.uppercaseName, t2.labelName = `label` + t2.uppercaseName, t2[n2(1208)] = n2(1347) + t2.uppercaseName, t2.uppercaseOuterName = Y(t2.outerName), Sl[t2.name] = function() {
    var e2 = n2, r2 = this[0], i2 = r2._private, a2 = i2.cy._private.styleEnabled;
    if (r2) if (a2) {
      if (r2[e2(327)]()) return r2.updateCompoundBounds(), i2[t2.autoName] || 0;
      var o2 = r2.pstyle(t2.name);
      switch (o2.strValue) {
        case e2(1220):
          return r2.recalculateRenderedStyle(), i2[e2(631)][t2.labelName] || 0;
        default:
          return o2.pfValue;
      }
    } else return 1;
  }, Sl[n2(1347) + t2.uppercaseName] = function() {
    var e2 = n2, r2 = this[0], i2 = r2[e2(820)].cy[e2(820)][e2(633)];
    if (r2) if (i2) {
      var a2 = r2[t2.name](), o2 = r2.pstyle(`border-position`)[e2(1310)], s2 = o2 === `center` ? r2[e2(1373)](`border-width`).pfValue : o2 === `outside` ? 2 * r2[e2(1373)](`border-width`)[e2(676)] : 0, c2 = 2 * r2.padding();
      return a2 + s2 + c2;
    } else return 1;
  }, Sl[n2(196) + t2.uppercaseName] = function() {
    var e2 = this[0];
    if (e2) return e2[t2.name]() * this.cy().zoom();
  }, Sl[`rendered` + t2[n2(280)]] = function() {
    var e2 = this[0];
    if (e2) return e2[t2.outerName]() * this.cy().zoom();
  };
};
wl({ name: `width` }), wl({ name: `height` }), Cl.padding = function() {
  var t2 = e, n2 = this[0], r2 = n2._private;
  return n2.isParent() ? (n2.updateCompoundBounds(), r2[t2(1055)] === void 0 ? n2.pstyle(`padding`)[t2(676)] : r2.autoPadding) : n2.pstyle(`padding`).pfValue;
}, Cl.paddedHeight = function() {
  var e2 = this[0];
  return e2.height() + 2 * e2.padding();
}, Cl.paddedWidth = function() {
  var t2 = e, n2 = this[0];
  return n2[t2(901)]() + 2 * n2.padding();
};
var Tl = Cl, El = function(e2, t2) {
  if (e2.isEdge() && e2.takesUpSpace()) return t2(e2);
}, Dl = function(t2, n2) {
  var r2 = e;
  if (t2.isEdge() && t2.takesUpSpace()) {
    var i2 = t2.cy();
    return On(n2(t2), i2[r2(1242)](), i2.pan());
  }
}, Ol = function(t2, n2) {
  var r2 = e;
  if (t2.isEdge() && t2.takesUpSpace()) {
    var i2 = t2.cy(), a2 = i2.pan(), o2 = i2.zoom();
    return n2(t2)[r2(393)](function(e2) {
      return On(e2, o2, a2);
    });
  }
}, kl = { controlPoints: { get: function(t2) {
  return t2[e(589)]().getControlPoints(t2);
}, mult: true }, segmentPoints: { get: function(t2) {
  var n2 = e;
  return t2[n2(589)]()[n2(350)](t2);
}, mult: true }, sourceEndpoint: { get: function(e2) {
  return e2.renderer().getSourceEndpoint(e2);
} }, targetEndpoint: { get: function(e2) {
  return e2.renderer().getTargetEndpoint(e2);
} }, midpoint: { get: function(t2) {
  return t2[e(589)]().getEdgeMidpoint(t2);
} } }, Al = function(e2) {
  return `rendered` + e2[0].toUpperCase() + e2.substr(1);
}, jl = Z({}, nl, xl, Tl, Object.keys(kl)[e(242)](function(e2, t2) {
  var n2 = kl[t2], r2 = Al(t2);
  return e2[t2] = function() {
    var e3 = $;
    return El(this, n2[e3(1276)]);
  }, n2.mult ? e2[r2] = function() {
    return Ol(this, n2.get);
  } : e2[r2] = function() {
    return Dl(this, n2.get);
  }, e2;
}, {})), Ml = function(e2, t2) {
  this.recycle(e2, t2);
};
function Nl() {
  return false;
}
function Pl() {
  return true;
}
Ml.prototype = { instanceString: function() {
  return `event`;
}, recycle: function(t2, n2) {
  var r2 = e;
  if (this.isImmediatePropagationStopped = this.isPropagationStopped = this[r2(330)] = Nl, t2 != null && t2.preventDefault ? (this.type = t2.type, this.isDefaultPrevented = t2.defaultPrevented ? Pl : Nl) : t2 != null && t2[r2(497)] ? n2 = t2 : this.type = t2, n2 != null && (this.originalEvent = n2.originalEvent, this.type = n2.type == null ? this.type : n2.type, this.cy = n2.cy, this.target = n2.target, this.position = n2.position, this.renderedPosition = n2.renderedPosition, this[r2(285)] = n2.namespace, this.layout = n2.layout), this.cy != null && this.position != null && this.renderedPosition == null) {
    var i2 = this[r2(225)], a2 = this.cy.zoom(), o2 = this.cy.pan();
    this.renderedPosition = { x: i2.x * a2 + o2.x, y: i2.y * a2 + o2.y };
  }
  this.timeStamp = t2 && t2.timeStamp || Date[r2(231)]();
}, preventDefault: function() {
  var t2 = e;
  this.isDefaultPrevented = Pl;
  var n2 = this.originalEvent;
  n2 && n2[t2(1109)] && n2.preventDefault();
}, stopPropagation: function() {
  this.isPropagationStopped = Pl;
  var e2 = this.originalEvent;
  e2 && e2.stopPropagation && e2.stopPropagation();
}, stopImmediatePropagation: function() {
  this.isImmediatePropagationStopped = Pl, this.stopPropagation();
}, isDefaultPrevented: Nl, isPropagationStopped: Nl, isImmediatePropagationStopped: Nl };
var Fl = /^([^.]+)(\.(?:[^.]+))?$/, Il = `.*`, Ll = { qualifierCompare: function(e2, t2) {
  return e2 === t2;
}, eventMatches: function() {
  return true;
}, addEventFields: function() {
}, callbackContext: function(e2) {
  return e2;
}, beforeEmit: function() {
}, afterEmit: function() {
}, bubble: function() {
  return false;
}, parent: function() {
  return null;
}, context: null }, Rl = Object[e(520)](Ll), zl = {};
function Bl() {
  for (var t2 = e, n2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : zl, r2 = arguments.length > 1 ? arguments[1] : void 0, i2 = 0; i2 < Rl[t2(441)]; i2++) {
    var a2 = Rl[i2];
    this[a2] = n2[a2] || Ll[a2];
  }
  this.context = r2 || this.context, this.listeners = [], this.emitting = 0;
}
var Vl = Bl.prototype, Hl = function(t2, n2, r2, i2, a2, o2, s2) {
  var c2 = e;
  D(i2) && (a2 = i2, i2 = null), s2 && (o2 = o2 == null ? s2 : Z({}, o2, s2));
  for (var l2 = O(r2) ? r2 : r2[c2(469)](/\s+/), u2 = 0; u2 < l2.length; u2++) {
    var d2 = l2[u2];
    if (!B(d2)) {
      var f2 = d2.match(Fl);
      if (f2) {
        var p2 = f2[1];
        if (n2(t2, d2, p2, f2[2] ? f2[2] : null, i2, a2, o2) === false) break;
      }
    }
  }
}, Ul = function(e2, t2) {
  return e2.addEventFields(e2.context, t2), new Ml(t2.type, t2);
}, Wl = function(t2, n2, r2) {
  var i2 = e;
  if (z(r2)) {
    n2(t2, r2);
    return;
  } else if (k(r2)) {
    n2(t2, Ul(t2, r2));
    return;
  }
  for (var a2 = O(r2) ? r2 : r2.split(/\s+/), o2 = 0; o2 < a2.length; o2++) {
    var s2 = a2[o2];
    if (!B(s2)) {
      var c2 = s2[i2(1146)](Fl);
      if (c2) {
        var l2 = c2[1];
        n2(t2, Ul(t2, { type: l2, namespace: c2[2] ? c2[2] : null, target: t2.context }));
      }
    }
  }
};
Vl.on = Vl[e(724)] = function(e2, t2, n2, r2, i2) {
  return Hl(this, function(e3, t3, n3, r3, i3, a2, o2) {
    D(a2) && e3.listeners.push({ event: t3, callback: a2, type: n3, namespace: r3, qualifier: i3, conf: o2 });
  }, e2, t2, n2, r2, i2), this;
}, Vl.one = function(e2, t2, n2, r2) {
  return this.on(e2, t2, n2, r2, { one: true });
}, Vl.removeListener = Vl.off = function(t2, n2, r2, i2) {
  var a2 = e, o2 = this;
  this.emitting !== 0 && (this.listeners = Ht(this[a2(681)]));
  for (var s2 = this.listeners, c2 = function(e2) {
    var a3 = s2[e2];
    Hl(o2, function(n3, r3, i3, o3, c3, l3) {
      var u2 = $;
      if ((a3.type === i3 || t2 === `*`) && (!o3 && a3.namespace !== `.*` || a3[u2(285)] === o3) && (!c3 || n3.qualifierCompare(a3.qualifier, c3)) && (!l3 || a3.callback === l3)) return s2.splice(e2, 1), false;
    }, t2, n2, r2, i2);
  }, l2 = s2.length - 1; l2 >= 0; l2--) c2(l2);
  return this;
}, Vl.removeAllListeners = function() {
  return this.removeListener(`*`);
}, Vl[e(818)] = Vl[e(398)] = function(t2, n2, r2) {
  var i2 = e, a2 = this.listeners, o2 = a2[i2(441)];
  return this.emitting++, O(n2) || (n2 = [n2]), Wl(this, function(e2, t3) {
    r2 != null && (a2 = [{ event: t3.event, type: t3.type, namespace: t3.namespace, callback: r2 }], o2 = a2.length);
    for (var i3 = function() {
      var r3 = $, i4 = a2[s2];
      if (i4.type === t3[r3(497)] && (!i4[r3(285)] || i4[r3(285)] === t3.namespace || i4.namespace === Il) && e2[r3(1166)](e2.context, i4, t3)) {
        var o3 = [t3];
        n2 != null && Yt(o3, n2), e2.beforeEmit(e2.context, i4, t3), i4.conf && i4.conf.one && (e2[r3(681)] = e2.listeners.filter(function(e3) {
          return e3 !== i4;
        }));
        var c2 = e2.callbackContext(e2.context, i4, t3), l2 = i4.callback.apply(c2, o3);
        e2.afterEmit(e2.context, i4, t3), l2 === false && (t3.stopPropagation(), t3[r3(1109)]());
      }
    }, s2 = 0; s2 < o2; s2++) i3();
    e2.bubble(e2.context) && !t3.isPropagationStopped() && e2.parent(e2.context).emit(t3, n2);
  }, t2), this.emitting--, this;
};
var Gl = { qualifierCompare: function(t2, n2) {
  return t2 == null || n2 == null ? t2 == null && n2 == null : t2[e(347)](n2);
}, eventMatches: function(t2, n2, r2) {
  var i2 = n2[e(902)];
  return i2 == null ? true : t2 !== r2.target && F(r2.target) && i2.matches(r2.target);
}, addEventFields: function(e2, t2) {
  t2.cy = e2.cy(), t2.target = e2;
}, callbackContext: function(e2, t2, n2) {
  return t2.qualifier == null ? e2 : n2.target;
}, beforeEmit: function(t2, n2) {
  n2[e(642)] && n2.conf.once && n2.conf.onceCollection.removeListener(n2.event, n2.qualifier, n2.callback);
}, bubble: function() {
  return true;
}, parent: function(e2) {
  return e2.isChild() ? e2.parent() : e2.cy();
} }, Kl = function(e2) {
  return E(e2) ? new Lc(e2) : e2;
}, ql = { createEmitter: function() {
  for (var e2 = 0; e2 < this.length; e2++) {
    var t2 = this[e2], n2 = t2._private;
    n2.emitter || (n2.emitter = new Bl(Gl, t2));
  }
  return this;
}, emitter: function() {
  return this._private.emitter;
}, on: function(e2, t2, n2) {
  for (var r2 = Kl(t2), i2 = 0; i2 < this.length; i2++) this[i2].emitter().on(e2, r2, n2);
  return this;
}, removeListener: function(t2, n2, r2) {
  for (var i2 = e, a2 = Kl(n2), o2 = 0; o2 < this.length; o2++) this[o2].emitter()[i2(1063)](t2, a2, r2);
  return this;
}, removeAllListeners: function() {
  for (var t2 = e, n2 = 0; n2 < this[t2(441)]; n2++) this[n2].emitter().removeAllListeners();
  return this;
}, one: function(t2, n2, r2) {
  for (var i2 = e, a2 = Kl(n2), o2 = 0; o2 < this[i2(441)]; o2++) this[o2][i2(512)]().one(t2, a2, r2);
  return this;
}, once: function(e2, t2, n2) {
  for (var r2 = Kl(t2), i2 = 0; i2 < this.length; i2++) this[i2].emitter().on(e2, r2, n2, { once: true, onceCollection: this });
}, emit: function(e2, t2) {
  for (var n2 = 0; n2 < this.length; n2++) this[n2].emitter().emit(e2, t2);
  return this;
}, emitAndNotify: function(e2, t2) {
  if (this.length !== 0) return this.cy().notify(e2, this), this.emit(e2, t2), this;
} };
mc[e(890)](ql);
var Jl = { nodes: function(e2) {
  return this.filter(function(e3) {
    return e3[$(704)]();
  }).filter(e2);
}, edges: function(t2) {
  var n2 = e;
  return this.filter(function(e2) {
    return e2.isEdge();
  })[n2(670)](t2);
}, byGroup: function() {
  for (var t2 = e, n2 = this.spawn(), r2 = this.spawn(), i2 = 0; i2 < this.length; i2++) {
    var a2 = this[i2];
    a2.isNode() ? n2[t2(254)](a2) : r2.push(a2);
  }
  return { nodes: n2, edges: r2 };
}, filter: function(t2, n2) {
  var r2 = e;
  if (t2 === void 0) return this;
  if (E(t2) || P(t2)) return new Lc(t2)[r2(670)](this);
  if (D(t2)) {
    for (var i2 = this[r2(1418)](), a2 = this, o2 = 0; o2 < a2.length; o2++) {
      var s2 = a2[o2];
      (n2 ? t2.apply(n2, [s2, o2, a2]) : t2(s2, o2, a2)) && i2.push(s2);
    }
    return i2;
  }
  return this.spawn();
}, not: function(t2) {
  var n2 = e;
  if (t2) {
    E(t2) && (t2 = this[n2(670)](t2));
    for (var r2 = this.spawn(), i2 = 0; i2 < this.length; i2++) {
      var a2 = this[i2];
      t2[n2(1099)](a2) || r2.push(a2);
    }
    return r2;
  } else return this;
}, absoluteComplement: function() {
  return this.cy().mutableElements().not(this);
}, intersect: function(t2) {
  var n2 = e;
  if (E(t2)) {
    var r2 = t2;
    return this[n2(670)](r2);
  }
  for (var i2 = this.spawn(), a2 = this, o2 = t2, s2 = this.length < t2.length, c2 = s2 ? a2 : o2, l2 = s2 ? o2 : a2, u2 = 0; u2 < c2.length; u2++) {
    var d2 = c2[u2];
    l2.has(d2) && i2[n2(254)](d2);
  }
  return i2;
}, xor: function(e2) {
  var t2 = this._private.cy;
  E(e2) && (e2 = t2.$(e2));
  var n2 = this.spawn(), r2 = this, i2 = e2, a2 = function(e3, t3) {
    for (var r3 = $, i3 = 0; i3 < e3.length; i3++) {
      var a3 = e3[i3], o2 = a3._private[r3(1036)].id;
      t3.hasElementWithId(o2) || n2.push(a3);
    }
  };
  return a2(r2, i2), a2(i2, r2), n2;
}, diff: function(e2) {
  var t2 = this._private.cy;
  E(e2) && (e2 = t2.$(e2));
  var n2 = this.spawn(), r2 = this.spawn(), i2 = this.spawn(), a2 = this, o2 = e2, s2 = function(e3, t3, n3) {
    for (var r3 = $, a3 = 0; a3 < e3[r3(441)]; a3++) {
      var o3 = e3[a3], s3 = o3[r3(820)].data.id;
      t3.hasElementWithId(s3) ? i2.merge(o3) : n3.push(o3);
    }
  };
  return s2(a2, o2, n2), s2(o2, a2, r2), { left: n2, right: r2, both: i2 };
}, add: function(t2) {
  var n2 = e, r2 = this[n2(820)].cy;
  if (!t2) return this;
  if (E(t2)) {
    var i2 = t2;
    t2 = r2[n2(1123)]().filter(i2);
  }
  for (var a2 = this.spawnSelf(), o2 = 0; o2 < t2.length; o2++) {
    var s2 = t2[o2];
    this[n2(1099)](s2) || a2.push(s2);
  }
  return a2;
}, merge: function(t2) {
  var n2 = e, r2 = this._private, i2 = r2.cy;
  if (!t2) return this;
  if (t2 && E(t2)) {
    var a2 = t2;
    t2 = i2.mutableElements()[n2(670)](a2);
  }
  for (var o2 = r2.map, s2 = 0; s2 < t2[n2(441)]; s2++) {
    var c2 = t2[s2], l2 = c2._private[n2(1036)].id;
    if (!o2.has(l2)) {
      var u2 = this.length++;
      this[u2] = c2, o2.set(l2, { ele: c2, index: u2 });
    }
  }
  return this;
}, unmergeAt: function(t2) {
  var n2 = e, r2 = this[t2].id(), i2 = this._private[n2(393)];
  this[t2] = void 0, i2.delete(r2);
  var a2 = t2 === this.length - 1;
  if (this.length > 1 && !a2) {
    var o2 = this.length - 1, s2 = this[o2], c2 = s2._private.data.id;
    this[o2] = void 0, this[t2] = s2, i2[n2(1280)](c2, { ele: s2, index: t2 });
  }
  return this.length--, this;
}, unmergeOne: function(e2) {
  e2 = e2[0];
  var t2 = this._private, n2 = e2._private.data.id, r2 = t2.map.get(n2);
  if (!r2) return this;
  var i2 = r2.index;
  return this.unmergeAt(i2), this;
}, unmerge: function(t2) {
  var n2 = e, r2 = this._private.cy;
  if (!t2) return this;
  if (t2 && E(t2)) {
    var i2 = t2;
    t2 = r2.mutableElements().filter(i2);
  }
  for (var a2 = 0; a2 < t2[n2(441)]; a2++) this.unmergeOne(t2[a2]);
  return this;
}, unmergeBy: function(e2) {
  for (var t2 = this.length - 1; t2 >= 0; t2--) {
    var n2 = this[t2];
    e2(n2) && this.unmergeAt(t2);
  }
  return this;
}, map: function(t2, n2) {
  for (var r2 = e, i2 = [], a2 = this, o2 = 0; o2 < a2.length; o2++) {
    var s2 = a2[o2], c2 = n2 ? t2[r2(226)](n2, [s2, o2, a2]) : t2(s2, o2, a2);
    i2.push(c2);
  }
  return i2;
}, reduce: function(t2, n2) {
  for (var r2 = e, i2 = n2, a2 = this, o2 = 0; o2 < a2[r2(441)]; o2++) i2 = t2(i2, a2[o2], o2, a2);
  return i2;
}, max: function(e2, t2) {
  for (var n2 = -1 / 0, r2, i2 = this, a2 = 0; a2 < i2.length; a2++) {
    var o2 = i2[a2], s2 = t2 ? e2.apply(t2, [o2, a2, i2]) : e2(o2, a2, i2);
    s2 > n2 && (n2 = s2, r2 = o2);
  }
  return { value: n2, ele: r2 };
}, min: function(e2, t2) {
  for (var n2 = 1 / 0, r2, i2 = this, a2 = 0; a2 < i2.length; a2++) {
    var o2 = i2[a2], s2 = t2 ? e2.apply(t2, [o2, a2, i2]) : e2(o2, a2, i2);
    s2 < n2 && (n2 = s2, r2 = o2);
  }
  return { value: n2, ele: r2 };
} }, Yl = Jl;
Yl.u = Yl[`|`] = Yl[`+`] = Yl.union = Yl.or = Yl.add, Yl[`\\`] = Yl[`!`] = Yl[`-`] = Yl.difference = Yl.relativeComplement = Yl[e(539)] = Yl.not, Yl.n = Yl[`&`] = Yl[`.`] = Yl.and = Yl.intersection = Yl.intersect, Yl[`^`] = Yl[`(+)`] = Yl[e(419)] = Yl.symmetricDifference = Yl.symdiff = Yl[e(1027)], Yl.fnFilter = Yl.filterFn = Yl.stdFilter = Yl.filter, Yl[e(1335)] = Yl.abscomp = Yl.absoluteComplement;
var Xl = { isNode: function() {
  return this.group() === `nodes`;
}, isEdge: function() {
  return this.group() === `edges`;
}, isLoop: function() {
  var t2 = e;
  return this[t2(230)]() && this.source()[0] === this[t2(1192)]()[0];
}, isSimple: function() {
  return this.isEdge() && this.source()[0] !== this.target()[0];
}, group: function() {
  var t2 = e, n2 = this[0];
  if (n2) return n2._private[t2(362)];
} }, Zl = function(t2, n2) {
  var r2 = e, i2 = t2.cy()[r2(677)]();
  function a2(e2) {
    var t3 = r2, n3 = e2.pstyle(`z-compound-depth`);
    return n3.value === `auto` ? i2 ? e2.zDepth() : 0 : n3.value === t3(968) ? -1 : n3.value === t3(951) ? Mt : 0;
  }
  var o2 = a2(t2) - a2(n2);
  if (o2 !== 0) return o2;
  function s2(e2) {
    var t3 = r2;
    return e2.pstyle(t3(423))[t3(1310)] === t3(1037) ? +!!e2.isNode() : 0;
  }
  var c2 = s2(t2) - s2(n2);
  if (c2 !== 0) return c2;
  var l2 = t2[r2(1373)](`z-index`).value - n2.pstyle(r2(854)).value;
  return l2 === 0 ? t2.poolIndex() - n2.poolIndex() : l2;
}, Ql = { forEach: function(e2, t2) {
  if (D(e2)) for (var n2 = this.length, r2 = 0; r2 < n2; r2++) {
    var i2 = this[r2];
    if ((t2 ? e2.apply(t2, [i2, r2, this]) : e2(i2, r2, this)) === false) break;
  }
  return this;
}, toArray: function() {
  for (var t2 = e, n2 = [], r2 = 0; r2 < this[t2(441)]; r2++) n2[t2(254)](this[r2]);
  return n2;
}, slice: function(e2, t2) {
  var n2 = [], r2 = this.length;
  t2 ?? (t2 = r2), e2 ?? (e2 = 0), e2 < 0 && (e2 = r2 + e2), t2 < 0 && (t2 = r2 + t2);
  for (var i2 = e2; i2 >= 0 && i2 < t2 && i2 < r2; i2++) n2.push(this[i2]);
  return this.spawn(n2);
}, size: function() {
  return this.length;
}, eq: function(e2) {
  return this[e2] || this.spawn();
}, first: function() {
  return this[0] || this.spawn();
}, last: function() {
  return this[this.length - 1] || this.spawn();
}, empty: function() {
  return this.length === 0;
}, nonempty: function() {
  return !this.empty();
}, sort: function(e2) {
  if (!D(e2)) return this;
  var t2 = this.toArray().sort(e2);
  return this.spawn(t2);
}, sortByZIndex: function() {
  return this.sort(Zl);
}, zDepth: function() {
  var t2 = e, n2 = this[0];
  if (n2) {
    var r2 = n2._private;
    if (r2.group === `nodes`) {
      var i2 = r2[t2(1036)][t2(1096)] ? n2[t2(1253)]().size() : 0;
      return n2.isParent() ? i2 : Mt - 1;
    } else {
      var a2 = r2.source, o2 = r2.target, s2 = a2.zDepth(), c2 = o2.zDepth();
      return Math.max(s2, c2, 0);
    }
  }
} };
Ql[e(246)] = Ql.forEach, (function() {
  var t2 = e, n2 = `undefined`;
  (typeof Symbol > `u` ? `undefined` : _(Symbol)) != n2 && _(Symbol.iterator) != n2 && (Ql[Symbol[t2(911)]] = function() {
    var e2 = t2, n3 = this, r2 = { value: void 0, done: false }, i2 = 0, a2 = this.length;
    return c({ next: function() {
      var e3 = $;
      return i2 < a2 ? r2.value = n3[i2++] : (r2.value = void 0, r2[e3(814)] = true), r2;
    } }, Symbol[e2(911)], function() {
      return this;
    });
  });
})();
var $l = Kt({ nodeDimensionsIncludeLabels: false }), eu = { layoutDimensions: function(t2) {
  var n2 = e;
  t2 = $l(t2);
  var r2;
  if (!this.takesUpSpace()) r2 = { w: 0, h: 0 };
  else if (t2.nodeDimensionsIncludeLabels) {
    var i2 = this[n2(277)]();
    r2 = { w: i2.w, h: i2.h };
  } else r2 = { w: this[n2(1059)](), h: this.outerHeight() };
  return (r2.w === 0 || r2.h === 0) && (r2.w = r2.h = 1), r2;
}, layoutPositions: function(t2, n2, r2) {
  var i2 = e, a2 = this[i2(565)]().filter(function(e2) {
    return !e2.isParent();
  }), o2 = this.cy(), s2 = n2.eles, c2 = function(e2) {
    return e2.id();
  }, l2 = G(r2, c2);
  t2.emit({ type: `layoutstart`, layout: t2 }), t2.animations = [];
  var u2 = function(e2, t3, n3) {
    var r3 = { x: t3.x1 + t3.w / 2, y: t3.y1 + t3.h / 2 }, i3 = { x: (n3.x - r3.x) * e2, y: (n3.y - r3.y) * e2 };
    return { x: r3.x + i3.x, y: r3.y + i3.y };
  }, d2 = n2.spacingFactor && n2.spacingFactor !== 1, f2 = (function() {
    if (!d2) return null;
    for (var e2 = Kn(), t3 = 0; t3 < a2.length; t3++) {
      var n3 = a2[t3], r3 = l2(n3, t3);
      Xn(e2, r3.x, r3.y);
    }
    return e2;
  })(), p2 = G(function(e2, t3) {
    var r3 = l2(e2, t3);
    return d2 && (r3 = u2(Math.abs(n2.spacingFactor), f2, r3)), n2.transform != null && (r3 = n2.transform(e2, r3)), r3;
  }, c2);
  if (n2.animate) {
    for (var m2 = 0; m2 < a2.length; m2++) {
      var h2 = a2[m2], g2 = p2(h2, m2);
      if (n2.animateFilter == null || n2[i2(618)](h2, m2)) {
        var _2 = h2.animation({ position: g2, duration: n2.animationDuration, easing: n2.animationEasing });
        t2.animations[i2(254)](_2);
      } else h2[i2(225)](g2);
    }
    if (n2.fit) {
      var v2 = o2.animation({ fit: { boundingBox: s2.boundingBoxAt(p2), padding: n2.padding }, duration: n2.animationDuration, easing: n2.animationEasing });
      t2[i2(1259)].push(v2);
    } else if (n2.zoom !== void 0 && n2.pan !== void 0) {
      var y2 = o2.animation({ zoom: n2[i2(1242)], pan: n2.pan, duration: n2.animationDuration, easing: n2.animationEasing });
      t2.animations.push(y2);
    }
    t2.animations[i2(1390)](function(e2) {
      return e2[i2(1227)]();
    }), t2[i2(873)](`layoutready`, n2[i2(227)]), t2.emit({ type: i2(753), layout: t2 }), fa.all(t2.animations.map(function(e2) {
      return e2[i2(643)]();
    })).then(function() {
      var e2 = i2;
      t2.one(`layoutstop`, n2[e2(945)]), t2.emit({ type: `layoutstop`, layout: t2 });
    });
  } else a2[i2(1314)](p2), n2[i2(1069)] && o2[i2(1069)](n2[i2(1015)], n2.padding), n2.zoom != null && o2.zoom(n2[i2(1242)]), n2.pan && o2.pan(n2[i2(996)]), t2.one(`layoutready`, n2.ready), t2[i2(818)]({ type: i2(753), layout: t2 }), t2.one(`layoutstop`, n2.stop), t2.emit({ type: `layoutstop`, layout: t2 });
  return this;
}, layout: function(e2) {
  return this.cy().makeLayout(Z({}, e2, { eles: this }));
} };
eu.createLayout = eu.makeLayout = eu.layout;
function tu(e2, t2, n2) {
  var r2 = n2._private, i2 = r2.styleCache = r2.styleCache || [], a2;
  return (a2 = i2[e2]) ?? (a2 = i2[e2] = t2(n2)), a2;
}
function nu(e2, t2) {
  return e2 = Ct(e2), function(n2) {
    return tu(e2, t2, n2);
  };
}
function ru(e2, t2) {
  e2 = Ct(e2);
  var n2 = function(e3) {
    return t2.call(e3);
  };
  return function() {
    var t3 = this[0];
    if (t3) return tu(e2, n2, t3);
  };
}
var iu = { recalculateRenderedStyle: function(t2) {
  var n2 = e, r2 = this.cy(), i2 = r2[n2(589)](), a2 = r2[n2(633)]();
  return i2 && a2 && i2.recalculateRenderedStyle(this, t2), this;
}, dirtyStyleCache: function() {
  var t2 = e, n2 = this.cy(), r2 = function(e2) {
    return e2._private.styleCache = null;
  };
  if (n2.hasCompoundNodes()) {
    var i2 = this.spawnSelf().merge(this.descendants()).merge(this.parents());
    i2[t2(1221)](i2[t2(778)]()), i2.forEach(r2);
  } else this[t2(1390)](function(e2) {
    var n3 = t2;
    r2(e2), e2.connectedEdges()[n3(1390)](r2);
  });
  return this;
}, updateStyle: function(t2) {
  var n2 = e, r2 = this._private.cy;
  if (!r2.styleEnabled()) return this;
  if (r2.batching()) return r2[n2(820)][n2(329)].merge(this), this;
  var i2 = r2.hasCompoundNodes(), a2 = this;
  t2 = !!(t2 || t2 === void 0), i2 && (a2 = this[n2(610)]().merge(this.descendants()).merge(this.parents()));
  var o2 = a2;
  return t2 ? o2.emitAndNotify(`style`) : o2.emit(`style`), a2.forEach(function(e2) {
    var t3 = n2;
    return e2[t3(820)].styleDirty = true;
  }), this;
}, cleanStyle: function() {
  var t2 = e, n2 = this.cy();
  if (n2.styleEnabled()) for (var r2 = 0; r2 < this.length; r2++) {
    var i2 = this[r2];
    i2._private.styleDirty && (i2._private.styleDirty = false, n2.style()[t2(226)](i2));
  }
}, parsedStyle: function(t2) {
  var n2 = e, r2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, i2 = this[0], a2 = i2.cy();
  if (a2.styleEnabled() && i2) return i2[n2(820)].styleDirty && (i2._private.styleDirty = false, a2.style().apply(i2)), i2._private[n2(1353)][t2] ?? (r2 ? a2.style().getDefaultProperty(t2) : null);
}, numericStyle: function(t2) {
  var n2 = e, r2 = this[0];
  if (r2.cy().styleEnabled() && r2) {
    var i2 = r2[n2(1373)](t2);
    return i2.pfValue === void 0 ? i2.value : i2[n2(676)];
  }
}, numericStyleUnits: function(t2) {
  var n2 = e, r2 = this[0];
  if (r2.cy()[n2(633)]() && r2) return r2.pstyle(t2).units;
}, renderedStyle: function(t2) {
  var n2 = e, r2 = this.cy();
  if (!r2[n2(633)]()) return this;
  var i2 = this[0];
  if (i2) return r2.style().getRenderedStyle(i2, t2);
}, style: function(t2, n2) {
  var r2 = e, i2 = this.cy();
  if (!i2.styleEnabled()) return this;
  var a2 = false, o2 = i2.style();
  if (k(t2)) {
    var s2 = t2;
    o2[r2(799)](this, s2, a2), this.emitAndNotify(`style`);
  } else if (E(t2)) if (n2 === void 0) {
    var c2 = this[0];
    return c2 ? o2.getStylePropertyValue(c2, t2) : void 0;
  } else o2[r2(799)](this, t2, n2, a2), this.emitAndNotify(r2(1353));
  else if (t2 === void 0) {
    var l2 = this[0];
    return l2 ? o2.getRawStyle(l2) : void 0;
  }
  return this;
}, removeStyle: function(t2) {
  var n2 = e, r2 = this.cy();
  if (!r2.styleEnabled()) return this;
  var i2 = false, a2 = r2[n2(1353)](), o2 = this;
  if (t2 === void 0) for (var s2 = 0; s2 < o2.length; s2++) {
    var c2 = o2[s2];
    a2.removeAllBypasses(c2, i2);
  }
  else {
    t2 = t2.split(/\s+/);
    for (var l2 = 0; l2 < o2.length; l2++) {
      var u2 = o2[l2];
      a2.removeBypasses(u2, t2, i2);
    }
  }
  return this.emitAndNotify(n2(1353)), this;
}, show: function() {
  return this.css(`display`, `element`), this;
}, hide: function() {
  var t2 = e;
  return this[t2(943)](t2(1182), `none`), this;
}, effectiveOpacity: function() {
  var t2 = e, n2 = this.cy();
  if (!n2.styleEnabled()) return 1;
  var r2 = n2.hasCompoundNodes(), i2 = this[0];
  if (i2) {
    var a2 = i2._private, o2 = i2.pstyle(`opacity`).value;
    if (!r2) return o2;
    var s2 = a2[t2(1036)].parent ? i2[t2(1253)]() : null;
    if (s2) for (var c2 = 0; c2 < s2.length; c2++) o2 = s2[c2].pstyle(`opacity`).value * o2;
    return o2;
  }
}, transparent: function() {
  var t2 = e;
  if (!this.cy()[t2(633)]()) return false;
  var n2 = this[0], r2 = n2.cy().hasCompoundNodes();
  if (n2) return r2 ? n2.effectiveOpacity() === 0 : n2.pstyle(`opacity`).value === 0;
}, backgrounding: function() {
  return this.cy().styleEnabled() ? !!this[0]._private.backgrounding : false;
} };
function au(t2, n2) {
  var r2 = e, i2 = t2._private.data.parent ? t2[r2(1253)]() : null;
  if (i2) for (var a2 = 0; a2 < i2.length; a2++) {
    var o2 = i2[a2];
    if (!n2(o2)) return false;
  }
  return true;
}
function ou(e2) {
  var t2 = e2.ok, n2 = e2.edgeOkViaNode || e2.ok, r2 = e2.parentOk || e2.ok;
  return function() {
    var e3 = $, i2 = this.cy();
    if (!i2[e3(633)]()) return true;
    var a2 = this[0], o2 = i2[e3(677)]();
    if (a2) {
      var s2 = a2[e3(820)];
      if (!t2(a2)) return false;
      if (a2.isNode()) return !o2 || au(a2, r2);
      var c2 = s2[e3(1256)], l2 = s2.target;
      return n2(c2) && (!o2 || au(c2, n2)) && (c2 === l2 || n2(l2) && (!o2 || au(l2, n2)));
    }
  };
}
var su = nu(`eleTakesUpSpace`, function(t2) {
  var n2 = e;
  return t2.pstyle(`display`)[n2(1310)] === n2(542) && t2.width() !== 0 && (t2.isNode() ? t2.height() !== 0 : true);
});
iu.takesUpSpace = ru(`takesUpSpace`, ou({ ok: su })), iu.interactive = ru(`interactive`, ou({ ok: nu(`eleInteractive`, function(t2) {
  var n2 = e;
  return t2.pstyle(`events`).value === `yes` && t2.pstyle(n2(977))[n2(1310)] === `visible` && su(t2);
}), parentOk: nu(`parentInteractive`, function(t2) {
  var n2 = e;
  return t2[n2(1373)](`visibility`).value === n2(1404) && su(t2);
}), edgeOkViaNode: su })), iu.noninteractive = function() {
  var e2 = this[0];
  if (e2) return !e2.interactive();
}, iu.visible = ru(e(1404), ou({ ok: nu(`eleVisible`, function(t2) {
  var n2 = e;
  return t2.pstyle(`visibility`).value === `visible` && t2[n2(1373)](`opacity`).pfValue !== 0 && su(t2);
}), edgeOkViaNode: su })), iu[e(863)] = function() {
  var t2 = e, n2 = this[0];
  if (n2) return !n2[t2(1404)]();
}, iu.isBundledBezier = ru(e(905), function() {
  var t2 = e;
  return this.cy().styleEnabled() ? !this[t2(781)]() && this.pstyle(`curve-style`).value === `bezier` && this.takesUpSpace() : false;
}), iu.bypass = iu.css = iu.style, iu.renderedCss = iu.renderedStyle, iu.removeBypass = iu.removeCss = iu.removeStyle, iu.pstyle = iu.parsedStyle;
var cu = {};
function lu(e2) {
  return function() {
    var t2 = $, n2 = arguments, r2 = [];
    if (n2.length === 2) {
      var i2 = n2[0], a2 = n2[1];
      this.on(e2.event, i2, a2);
    } else if (n2.length === 1 && D(n2[0])) {
      var o2 = n2[0];
      this.on(e2[t2(445)], o2);
    } else if (n2.length === 0 || n2.length === 1 && O(n2[0])) {
      for (var s2 = n2.length === 1 ? n2[0] : null, c2 = 0; c2 < this[t2(441)]; c2++) {
        var l2 = this[c2], u2 = !e2.ableField || l2._private[e2.ableField], d2 = l2._private[e2.field] != e2.value;
        if (e2.overrideAble) {
          var f2 = e2.overrideAble(l2);
          if (f2 !== void 0 && (u2 = f2, !f2)) return this;
        }
        u2 && (l2._private[e2.field] = e2.value, d2 && r2.push(l2));
      }
      var p2 = this.spawn(r2);
      p2.updateStyle(), p2[t2(818)](e2.event), s2 && p2.emit(s2);
    }
    return this;
  };
}
function uu(t2) {
  var n2 = e;
  cu[t2.field] = function() {
    var e2 = this[0];
    if (e2) {
      if (t2.overrideField) {
        var n3 = t2.overrideField(e2);
        if (n3 !== void 0) return n3;
      }
      return e2._private[t2.field];
    }
  }, cu[t2.on] = lu({ event: t2.on, field: t2.field, ableField: t2.ableField, overrideAble: t2.overrideAble, value: true }), cu[t2.off] = lu({ event: t2[n2(830)], field: t2[n2(213)], ableField: t2.ableField, overrideAble: t2.overrideAble, value: false });
}
uu({ field: `locked`, overrideField: function(e2) {
  return e2.cy().autolock() ? true : void 0;
}, on: `lock`, off: `unlock` }), uu({ field: `grabbable`, overrideField: function(t2) {
  var n2 = e;
  return t2.cy().autoungrabify() || t2[n2(1065)]() ? false : void 0;
}, on: `grabify`, off: `ungrabify` }), uu({ field: `selected`, ableField: `selectable`, overrideAble: function(e2) {
  return e2.cy().autounselectify() ? false : void 0;
}, on: `select`, off: `unselect` }), uu({ field: `selectable`, overrideField: function(e2) {
  return e2.cy().autounselectify() ? false : void 0;
}, on: `selectify`, off: `unselectify` }), cu.deselect = cu[e(543)], cu.grabbed = function() {
  var t2 = e, n2 = this[0];
  if (n2) return n2._private[t2(1024)];
}, uu({ field: `active`, on: `activate`, off: `unactivate` }), uu({ field: `pannable`, on: `panify`, off: `unpanify` }), cu.inactive = function() {
  var e2 = this[0];
  if (e2) return !e2._private.active;
};
var du = {}, fu = function(e2) {
  return function(t2) {
    for (var n2 = this, r2 = [], i2 = 0; i2 < n2.length; i2++) {
      var a2 = n2[i2];
      if (a2.isNode()) {
        for (var o2 = false, s2 = a2.connectedEdges(), c2 = 0; c2 < s2.length; c2++) {
          var l2 = s2[c2], u2 = l2.source(), d2 = l2.target();
          if (e2.noIncomingEdges && d2 === a2 && u2 !== a2 || e2.noOutgoingEdges && u2 === a2 && d2 !== a2) {
            o2 = true;
            break;
          }
        }
        o2 || r2.push(a2);
      }
    }
    return this.spawn(r2, true).filter(t2);
  };
}, pu = function(e2) {
  return function(t2) {
    for (var n2 = $, r2 = this, i2 = [], a2 = 0; a2 < r2[n2(441)]; a2++) {
      var o2 = r2[a2];
      if (o2.isNode()) for (var s2 = o2.connectedEdges(), c2 = 0; c2 < s2.length; c2++) {
        var l2 = s2[c2], u2 = l2.source(), d2 = l2.target();
        e2.outgoing && u2 === o2 ? (i2.push(l2), i2.push(d2)) : e2.incoming && d2 === o2 && (i2.push(l2), i2[n2(254)](u2));
      }
    }
    return this.spawn(i2, true).filter(t2);
  };
}, mu = function(e2) {
  return function(t2) {
    for (var n2 = $, r2 = this, i2 = [], a2 = {}; ; ) {
      var o2 = e2[n2(1066)] ? r2[n2(1414)]() : r2.incomers();
      if (o2.length === 0) break;
      for (var s2 = false, c2 = 0; c2 < o2.length; c2++) {
        var l2 = o2[c2], u2 = l2.id();
        a2[u2] || (a2[u2] = true, i2.push(l2), s2 = true);
      }
      if (!s2) break;
      r2 = o2;
    }
    return this.spawn(i2, true).filter(t2);
  };
};
du[e(821)] = function() {
  for (var e2 = 0; e2 < this.length; e2++) this[e2]._private.traversalCache = null;
}, Z(du, { roots: fu({ noIncomingEdges: true }), leaves: fu({ noOutgoingEdges: true }), outgoers: Bc(pu({ outgoing: true }), `outgoers`), successors: mu({ outgoing: true }), incomers: Bc(pu({ incoming: true }), `incomers`), predecessors: mu({}) }), Z(du, { neighborhood: Bc(function(t2) {
  for (var n2 = e, r2 = [], i2 = this.nodes(), a2 = 0; a2 < i2.length; a2++) for (var o2 = i2[a2], s2 = o2.connectedEdges(), c2 = 0; c2 < s2[n2(441)]; c2++) {
    var l2 = s2[c2], u2 = l2.source(), d2 = l2[n2(1192)](), f2 = o2 === u2 ? d2 : u2;
    f2.length > 0 && r2.push(f2[0]), r2[n2(254)](l2[0]);
  }
  return this.spawn(r2, true).filter(t2);
}, `neighborhood`), closedNeighborhood: function(t2) {
  var n2 = e;
  return this[n2(515)]().add(this).filter(t2);
}, openNeighborhood: function(e2) {
  return this.neighborhood(e2);
} }), du[e(198)] = du.neighborhood, du.closedNeighbourhood = du.closedNeighborhood, du.openNeighbourhood = du.openNeighborhood, Z(du, { source: Bc(function(e2) {
  var t2 = this[0], n2;
  return t2 && (n2 = t2._private.source || t2.cy().collection()), n2 && e2 ? n2.filter(e2) : n2;
}, `source`), target: Bc(function(e2) {
  var t2 = this[0], n2;
  return t2 && (n2 = t2._private.target || t2.cy().collection()), n2 && e2 ? n2.filter(e2) : n2;
}, `target`), sources: hu({ attr: `source` }), targets: hu({ attr: `target` }) });
function hu(e2) {
  return function(t2) {
    for (var n2 = $, r2 = [], i2 = 0; i2 < this[n2(441)]; i2++) {
      var a2 = this[i2][n2(820)][e2.attr];
      a2 && r2.push(a2);
    }
    return this.spawn(r2, true).filter(t2);
  };
}
Z(du, { edgesWith: Bc(gu(), e(732)), edgesTo: Bc(gu({ thisIsSrc: true }), `edgesTo`) });
function gu(e2) {
  return function(t2) {
    var n2 = $, r2 = [], i2 = this[n2(820)].cy, a2 = e2 || {};
    E(t2) && (t2 = i2.$(t2));
    for (var o2 = 0; o2 < t2.length; o2++) for (var s2 = t2[o2]._private.edges, c2 = 0; c2 < s2.length; c2++) {
      var l2 = s2[c2], u2 = l2._private[n2(1036)], d2 = this.hasElementWithId(u2.source) && t2.hasElementWithId(u2.target), f2 = t2.hasElementWithId(u2.source) && this.hasElementWithId(u2.target);
      (d2 || f2) && ((a2.thisIsSrc || a2.thisIsTgt) && (a2[n2(311)] && !d2 || a2.thisIsTgt && !f2) || r2.push(l2));
    }
    return this.spawn(r2, true);
  };
}
Z(du, { connectedEdges: Bc(function(t2) {
  for (var n2 = e, r2 = [], i2 = this, a2 = 0; a2 < i2.length; a2++) {
    var o2 = i2[a2];
    if (o2.isNode()) for (var s2 = o2._private.edges, c2 = 0; c2 < s2.length; c2++) {
      var l2 = s2[c2];
      r2[n2(254)](l2);
    }
  }
  return this.spawn(r2, true).filter(t2);
}, `connectedEdges`), connectedNodes: Bc(function(t2) {
  for (var n2 = e, r2 = [], i2 = this, a2 = 0; a2 < i2.length; a2++) {
    var o2 = i2[a2];
    o2.isEdge() && (r2.push(o2.source()[0]), r2[n2(254)](o2.target()[0]));
  }
  return this[n2(1418)](r2, true).filter(t2);
}, `connectedNodes`), parallelEdges: Bc(_u(), `parallelEdges`), codirectedEdges: Bc(_u({ codirected: true }), `codirectedEdges`) });
function _u(e2) {
  return e2 = Z({}, { codirected: false }, e2), function(t2) {
    for (var n2 = $, r2 = [], i2 = this.edges(), a2 = e2, o2 = 0; o2 < i2.length; o2++) for (var s2 = i2[o2]._private, c2 = s2.source, l2 = c2._private.data.id, u2 = s2[n2(1036)].target, d2 = c2._private.edges, f2 = 0; f2 < d2.length; f2++) {
      var p2 = d2[f2], m2 = p2._private.data, h2 = m2[n2(1192)], g2 = m2.source, _2 = h2 === u2 && g2 === l2, v2 = l2 === h2 && u2 === g2;
      (a2[n2(305)] && _2 || !a2.codirected && (_2 || v2)) && r2.push(p2);
    }
    return this[n2(1418)](r2, true)[n2(670)](t2);
  };
}
Z(du, { components: function(t2) {
  var n2 = e, r2 = this, i2 = r2.cy(), a2 = i2.collection(), o2 = t2 == null ? r2.nodes() : t2.nodes(), s2 = [];
  t2 != null && o2.empty() && (o2 = t2[n2(942)]());
  var c2 = function(e2, t3) {
    a2.merge(e2), o2.unmerge(e2), t3.merge(e2);
  };
  if (o2.empty()) return r2.spawn();
  var l2 = function() {
    var e2 = n2, t3 = i2.collection();
    s2.push(t3);
    var a3 = o2[0];
    c2(a3, t3), r2[e2(255)]({ directed: false, roots: a3, visit: function(e3) {
      return c2(e3, t3);
    } }), t3.forEach(function(n3) {
      var i3 = e2;
      n3[i3(778)]().forEach(function(e3) {
        r2[i3(1099)](e3) && t3.has(e3.source()) && t3.has(e3.target()) && t3.merge(e3);
      });
    });
  };
  do
    l2();
  while (o2.length > 0);
  return s2;
}, component: function() {
  var e2 = this[0];
  return e2.cy().mutableElements().components(e2)[0];
} }), du.componentsOf = du[e(307)];
var vu = function(t2, n2) {
  var r2 = e, i2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, a2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if (t2 === void 0) {
    Lt(`A collection must have a reference to the core`);
    return;
  }
  var o2 = new Qt(), s2 = false;
  if (!n2) n2 = [];
  else if (n2[r2(441)] > 0 && k(n2[0]) && !F(n2[0])) {
    s2 = true;
    for (var c2 = [], l2 = new tn(), u2 = 0, d2 = n2[r2(441)]; u2 < d2; u2++) {
      var f2 = n2[u2];
      f2.data ?? (f2.data = {});
      var p2 = f2.data;
      if (p2.id == null) p2.id = Ut();
      else if (t2.hasElementWithId(p2.id) || l2.has(p2.id)) continue;
      var m2 = new nn(t2, f2, false);
      c2.push(m2), l2[r2(1213)](p2.id);
    }
    n2 = c2;
  }
  this.length = 0;
  for (var h2 = 0, g2 = n2.length; h2 < g2; h2++) {
    var _2 = n2[h2][0];
    if (_2 != null) {
      var v2 = _2._private.data.id;
      (!i2 || !o2.has(v2)) && (i2 && o2.set(v2, { index: this.length, ele: _2 }), this[this[r2(441)]] = _2, this.length++);
    }
  }
  this[r2(820)] = { eles: this, cy: t2, get map() {
    return this.lazyMap ?? this.rebuildMap(), this.lazyMap;
  }, set map(e2) {
    this.lazyMap = e2;
  }, rebuildMap: function() {
    for (var e2 = r2, t3 = this.lazyMap = new Qt(), n3 = this.eles, i3 = 0; i3 < n3[e2(441)]; i3++) {
      var a3 = n3[i3];
      t3[e2(1280)](a3.id(), { index: i3, ele: a3 });
    }
  } }, i2 && (this._private.map = o2), s2 && !a2 && this.restore();
}, yu = nn.prototype = vu.prototype = Object.create(Array.prototype);
yu.instanceString = function() {
  return `collection`;
}, yu.spawn = function(e2, t2) {
  return new vu(this.cy(), e2, t2);
}, yu[e(610)] = function() {
  var t2 = e;
  return this[t2(1418)](this);
}, yu.cy = function() {
  return this._private.cy;
}, yu.renderer = function() {
  return this._private.cy.renderer();
}, yu[e(542)] = function() {
  return this[0];
}, yu.collection = function() {
  return I(this) ? this : new vu(this._private.cy, [this]);
}, yu.unique = function() {
  return new vu(this._private.cy, this, true);
}, yu.hasElementWithId = function(e2) {
  return e2 = `` + e2, this._private.map.has(e2);
}, yu.getElementById = function(t2) {
  var n2 = e;
  t2 = `` + t2;
  var r2 = this._private.cy, i2 = this[n2(820)].map.get(t2);
  return i2 ? i2.ele : new vu(r2);
}, yu[e(1375)] = yu.getElementById, yu.poolIndex = function() {
  var t2 = e, n2 = this._private.cy._private.elements, r2 = this[0][t2(820)].data.id;
  return n2._private.map.get(r2).index;
}, yu[e(294)] = function(e2) {
  var t2 = e2[0]._private.data.id;
  return this._private.map.get(t2).index;
}, yu.indexOfId = function(e2) {
  return e2 = `` + e2, this._private.map.get(e2).index;
}, yu[e(892)] = function(t2) {
  var n2 = e, r2 = this.element(), i2 = this.cy();
  if (r2 == null && t2) return this;
  if (r2 != null) {
    var a2 = r2._private;
    if (k(t2)) {
      if (i2[n2(1291)](), t2.data) {
        r2.data(t2[n2(1036)]);
        var o2 = a2.data;
        if (r2.isEdge()) {
          var s2 = false, c2 = {}, l2 = t2[n2(1036)][n2(1256)], u2 = t2.data.target;
          l2 != null && l2 != o2[n2(1256)] && (c2.source = `` + l2, s2 = true), u2 != null && u2 != o2[n2(1192)] && (c2[n2(1192)] = `` + u2, s2 = true), s2 && (r2 = r2[n2(404)](c2));
        } else {
          var d2 = n2(1096) in t2.data, f2 = t2.data.parent;
          d2 && (f2 != null || o2.parent != null) && f2 != o2.parent && (f2 === void 0 && (f2 = null), f2 != null && (f2 = `` + f2), r2 = r2[n2(404)]({ parent: f2 }));
        }
      }
      t2.position && r2[n2(225)](t2.position);
      var p2 = function(e2, n3, i3) {
        var o3 = t2[e2];
        o3 != null && o3 !== a2[e2] && (o3 ? r2[n3]() : r2[i3]());
      };
      return p2(n2(781), `remove`, `restore`), p2(`selected`, n2(709), n2(543)), p2(`selectable`, `selectify`, `unselectify`), p2(`locked`, `lock`, `unlock`), p2(`grabbable`, `grabify`, `ungrabify`), p2(`pannable`, `panify`, n2(620)), t2[n2(703)] != null && r2.classes(t2[n2(703)]), i2.endBatch(), this;
    } else if (t2 === void 0) {
      var m2 = { data: Vt(a2[n2(1036)]), position: Vt(a2.position), group: a2.group, removed: a2.removed, selected: a2.selected, selectable: a2.selectable, locked: a2.locked, grabbable: a2[n2(654)], pannable: a2.pannable, classes: null };
      m2.classes = ``;
      var h2 = 0;
      return a2.classes.forEach(function(e2) {
        return m2.classes += h2++ === 0 ? e2 : ` ` + e2;
      }), m2;
    }
  }
}, yu.jsons = function() {
  for (var t2 = e, n2 = [], r2 = 0; r2 < this[t2(441)]; r2++) {
    var i2 = this[r2].json();
    n2.push(i2);
  }
  return n2;
}, yu.clone = function() {
  for (var e2 = this.cy(), t2 = [], n2 = 0; n2 < this.length; n2++) {
    var r2 = new nn(e2, this[n2].json(), false);
    t2.push(r2);
  }
  return new vu(e2, t2);
}, yu.copy = yu.clone, yu.restore = function() {
  for (var t2 = e, n2 = arguments[t2(441)] > 0 && arguments[0] !== void 0 ? arguments[0] : true, r2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, i2 = this, a2 = i2.cy(), o2 = a2._private, s2 = [], c2 = [], l2, u2 = 0, d2 = i2[t2(441)]; u2 < d2; u2++) {
    var f2 = i2[u2];
    r2 && !f2[t2(781)]() || (f2.isNode() ? s2.push(f2) : c2.push(f2));
  }
  l2 = s2.concat(c2);
  var p2, m2 = function() {
    l2.splice(p2, 1), p2--;
  };
  for (p2 = 0; p2 < l2.length; p2++) {
    var h2 = l2[p2], g2 = h2[t2(820)], _2 = g2.data;
    if (h2.clearTraversalCache(), !(!r2 && !g2.removed)) {
      if (_2.id === void 0) _2.id = Ut();
      else if (j(_2.id)) _2.id = `` + _2.id;
      else if (B(_2.id) || !E(_2.id)) {
        Lt("Can not create element with invalid string ID `" + _2.id + "`"), m2();
        continue;
      } else if (a2.hasElementWithId(_2.id)) {
        Lt(t2(375) + _2.id + "`"), m2();
        continue;
      }
    }
    var v2 = _2.id;
    if (h2.isNode()) {
      var y2 = g2[t2(225)];
      y2.x ?? (y2.x = 0), y2.y ?? (y2.y = 0);
    }
    if (h2[t2(230)]()) {
      for (var b2 = h2, x2 = [t2(1256), `target`], S2 = x2.length, C2 = false, w2 = 0; w2 < S2; w2++) {
        var T2 = x2[w2], D2 = _2[T2];
        j(D2) && (D2 = _2[T2] = `` + _2[T2]), D2 == null || D2 === `` ? (Lt("Can not create edge `" + v2 + "` with unspecified " + T2), C2 = true) : a2.hasElementWithId(D2) || (Lt("Can not create edge `" + v2 + t2(552) + T2 + " `" + D2 + "`"), C2 = true);
      }
      if (C2) {
        m2();
        continue;
      }
      var O2 = a2.getElementById(_2.source), k2 = a2.getElementById(_2[t2(1192)]);
      O2.same(k2) ? O2._private.edges.push(b2) : (O2._private.edges[t2(254)](b2), k2._private.edges.push(b2)), b2._private.source = O2, b2._private.target = k2;
    }
    g2[t2(393)] = new Qt(), g2.map[t2(1280)](v2, { ele: h2, index: 0 }), g2.removed = false, r2 && a2[t2(623)](h2);
  }
  for (var A2 = 0; A2 < s2.length; A2++) {
    var M2 = s2[A2], N2 = M2._private.data;
    j(N2[t2(1096)]) && (N2.parent = `` + N2.parent);
    var P2 = N2.parent;
    if (P2 != null || M2._private.parent) {
      var F2 = M2._private.parent ? a2[t2(999)]().merge(M2[t2(820)].parent) : a2[t2(1337)](P2);
      if (F2[t2(1064)]()) N2[t2(1096)] = void 0;
      else if (F2[0].removed()) zt(`Node added with missing parent, reference to parent removed`), N2[t2(1096)] = void 0, M2._private[t2(1096)] = null;
      else {
        for (var I2 = false, L2 = F2; !L2.empty(); ) {
          if (M2.same(L2)) {
            I2 = true, N2.parent = void 0;
            break;
          }
          L2 = L2.parent();
        }
        I2 || (F2[0]._private.children[t2(254)](M2), M2[t2(820)].parent = F2[0], o2.hasCompoundNodes = true);
      }
    }
  }
  if (l2[t2(441)] > 0) {
    for (var R2 = l2[t2(441)] === i2[t2(441)] ? i2 : new vu(a2, l2), z2 = 0; z2 < R2.length; z2++) {
      var V2 = R2[z2];
      V2.isNode() || (V2.parallelEdges().clearTraversalCache(), V2.source()[t2(821)](), V2.target().clearTraversalCache());
    }
    (o2.hasCompoundNodes ? a2.collection().merge(R2).merge(R2.connectedNodes()).merge(R2.parent()) : R2)[t2(590)]().dirtyBoundingBoxCache()[t2(379)](n2), n2 ? R2[t2(1216)](`add`) : r2 && R2.emit(`add`);
  }
  return i2;
}, yu.removed = function() {
  var e2 = this[0];
  return e2 && e2._private.removed;
}, yu.inside = function() {
  var t2 = e, n2 = this[0];
  return n2 && !n2._private[t2(781)];
}, yu.remove = function() {
  var t2 = e, n2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, r2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, i2 = this, a2 = [], o2 = {}, s2 = i2[t2(820)].cy;
  function c2(e2) {
    for (var t3 = e2._private.edges, n3 = 0; n3 < t3.length; n3++) u2(t3[n3]);
  }
  function l2(e2) {
    for (var t3 = e2._private.children, n3 = 0; n3 < t3.length; n3++) u2(t3[n3]);
  }
  function u2(e2) {
    var t3 = o2[e2.id()];
    r2 && e2.removed() || t3 || (o2[e2.id()] = true, e2.isNode() ? (a2.push(e2), c2(e2), l2(e2)) : a2.unshift(e2));
  }
  for (var d2 = 0, f2 = i2.length; d2 < f2; d2++) {
    var p2 = i2[d2];
    u2(p2);
  }
  function m2(e2, n3) {
    var r3 = t2, i3 = e2._private.edges;
    qt(i3, n3), e2[r3(821)]();
  }
  function h2(e2) {
    e2.clearTraversalCache();
  }
  var g2 = [];
  g2.ids = {};
  function _2(e2, n3) {
    var r3 = t2;
    n3 = n3[0], e2 = e2[0];
    var i3 = e2._private.children, a3 = e2.id();
    qt(i3, n3), n3._private.parent = null, g2[r3(898)][a3] || (g2.ids[a3] = true, g2.push(e2));
  }
  i2.dirtyCompoundBoundsCache(), r2 && s2.removeFromPool(a2);
  for (var v2 = 0; v2 < a2.length; v2++) {
    var y2 = a2[v2];
    if (y2.isEdge()) {
      var b2 = y2.source()[0], x2 = y2.target()[0];
      m2(b2, y2), m2(x2, y2);
      for (var S2 = y2.parallelEdges(), C2 = 0; C2 < S2.length; C2++) {
        var w2 = S2[C2];
        h2(w2), w2[t2(905)]() && w2.dirtyBoundingBoxCache();
      }
    } else {
      var T2 = y2.parent();
      T2.length !== 0 && _2(T2, y2);
    }
    r2 && (y2._private.removed = true);
  }
  var E2 = s2._private.elements;
  s2._private.hasCompoundNodes = false;
  for (var D2 = 0; D2 < E2.length; D2++) if (E2[D2].isParent()) {
    s2._private.hasCompoundNodes = true;
    break;
  }
  var O2 = new vu(this.cy(), a2);
  O2.size() > 0 && (n2 ? O2.emitAndNotify(`remove`) : r2 && O2.emit(`remove`));
  for (var k2 = 0; k2 < g2.length; k2++) {
    var A2 = g2[k2];
    (!r2 || !A2.removed()) && A2.updateStyle();
  }
  return O2;
}, yu.move = function(t2) {
  var n2 = e, r2 = this._private.cy, i2 = this, a2 = false, o2 = false, s2 = function(e2) {
    return e2 == null ? e2 : `` + e2;
  };
  if (t2.source !== void 0 || t2.target !== void 0) {
    var c2 = s2(t2.source), l2 = s2(t2.target), u2 = c2 != null && r2.hasElementWithId(c2), d2 = l2 != null && r2.hasElementWithId(l2);
    (u2 || d2) && (r2.batch(function() {
      var e2 = $;
      i2.remove(a2, o2), i2.emitAndNotify(`moveout`);
      for (var t3 = 0; t3 < i2.length; t3++) {
        var n3 = i2[t3], r3 = n3._private.data;
        n3.isEdge() && (u2 && (r3[e2(1256)] = c2), d2 && (r3[e2(1192)] = l2));
      }
      i2.restore(a2, o2);
    }), i2[n2(1216)](`move`));
  } else if (t2.parent !== void 0) {
    var f2 = s2(t2[n2(1096)]);
    if (f2 === null || r2.hasElementWithId(f2)) {
      var p2 = f2 === null ? void 0 : f2;
      r2[n2(314)](function() {
        var e2 = n2, t3 = i2.remove(a2, o2);
        t3.emitAndNotify(`moveout`);
        for (var r3 = 0; r3 < i2.length; r3++) {
          var s3 = i2[r3], c3 = s3._private[e2(1036)];
          s3.isNode() && (c3[e2(1096)] = p2);
        }
        t3.restore(a2, o2);
      }), i2.emitAndNotify(`move`);
    }
  }
  return this;
}, [na, hc, gc, zc, Vc, Jc, Yc, jl, ql, Jl, Xl, Ql, eu, iu, cu, du].forEach(function(e2) {
  Z(yu, e2);
});
var bu = { add: function(t2) {
  var n2 = e, r2, i2 = this;
  if (P(t2)) {
    var a2 = t2;
    if (a2._private.cy === i2) r2 = a2.restore();
    else {
      for (var o2 = [], s2 = 0; s2 < a2.length; s2++) {
        var c2 = a2[s2];
        o2.push(c2.json());
      }
      r2 = new vu(i2, o2);
    }
  } else if (O(t2)) r2 = new vu(i2, t2);
  else if (k(t2) && (O(t2.nodes) || O(t2.edges))) {
    for (var l2 = t2, u2 = [], d2 = [`nodes`, `edges`], f2 = 0, p2 = d2.length; f2 < p2; f2++) {
      var m2 = d2[f2], h2 = l2[m2];
      if (O(h2)) for (var g2 = 0, _2 = h2[n2(441)]; g2 < _2; g2++) {
        var v2 = Z({ group: m2 }, h2[g2]);
        u2.push(v2);
      }
    }
    r2 = new vu(i2, u2);
  } else r2 = new nn(i2, t2).collection();
  return r2;
}, remove: function(e2) {
  if (!P(e2) && E(e2)) {
    var t2 = e2;
    e2 = this.$(t2);
  }
  return e2.remove();
} };
function xu(t2, n2, r2, i2) {
  var a2 = e, o2 = 4, s2 = 1e-3, c2 = 1e-7, l2 = 10, u2 = 11, d2 = 1 / (u2 - 1), f2 = typeof Float32Array < `u`;
  if (arguments.length !== 4) return false;
  for (var p2 = 0; p2 < 4; ++p2) if (typeof arguments[p2] != a2(1134) || isNaN(arguments[p2]) || !isFinite(arguments[p2])) return false;
  t2 = Math.min(t2, 1), r2 = Math[a2(1120)](r2, 1), t2 = Math.max(t2, 0), r2 = Math.max(r2, 0);
  var m2 = f2 ? new Float32Array(u2) : Array(u2);
  function h2(e2, t3) {
    return 1 - 3 * t3 + 3 * e2;
  }
  function g2(e2, t3) {
    return 3 * t3 - 6 * e2;
  }
  function _2(e2) {
    return 3 * e2;
  }
  function v2(e2, t3, n3) {
    return ((h2(t3, n3) * e2 + g2(t3, n3)) * e2 + _2(t3)) * e2;
  }
  function y2(e2, t3, n3) {
    return 3 * h2(t3, n3) * e2 * e2 + 2 * g2(t3, n3) * e2 + _2(t3);
  }
  function b2(e2, n3) {
    for (var i3 = 0; i3 < o2; ++i3) {
      var a3 = y2(n3, t2, r2);
      if (a3 === 0) return n3;
      var s3 = v2(n3, t2, r2) - e2;
      n3 -= s3 / a3;
    }
    return n3;
  }
  function x2() {
    for (var e2 = 0; e2 < u2; ++e2) m2[e2] = v2(e2 * d2, t2, r2);
  }
  function S2(e2, n3, i3) {
    var a3, o3, s3 = 0;
    do
      o3 = n3 + (i3 - n3) / 2, a3 = v2(o3, t2, r2) - e2, a3 > 0 ? i3 = o3 : n3 = o3;
    while (Math.abs(a3) > c2 && ++s3 < l2);
    return o3;
  }
  function C2(e2) {
    for (var n3 = 0, i3 = 1, a3 = u2 - 1; i3 !== a3 && m2[i3] <= e2; ++i3) n3 += d2;
    --i3;
    var o3 = (e2 - m2[i3]) / (m2[i3 + 1] - m2[i3]), c3 = n3 + o3 * d2, l3 = y2(c3, t2, r2);
    return l3 >= s2 ? b2(e2, c3) : l3 === 0 ? c3 : S2(e2, n3, n3 + d2);
  }
  var w2 = false;
  function T2() {
    w2 = true, (t2 !== n2 || r2 !== i2) && x2();
  }
  var E2 = function(e2) {
    return w2 || T2(), t2 === n2 && r2 === i2 ? e2 : e2 === 0 ? 0 : e2 === 1 ? 1 : v2(C2(e2), n2, i2);
  };
  E2[a2(805)] = function() {
    return [{ x: t2, y: n2 }, { x: r2, y: i2 }];
  };
  var D2 = `generateBezier(` + [t2, n2, r2, i2] + `)`;
  return E2.toString = function() {
    return D2;
  }, E2;
}
var Su = /* @__PURE__ */ (function() {
  function e2(e3) {
    return -e3.tension * e3.x - e3.friction * e3.v;
  }
  function t2(t3, n3, r2) {
    var i2 = { x: t3.x + r2.dx * n3, v: t3.v + r2.dv * n3, tension: t3.tension, friction: t3.friction };
    return { dx: i2.v, dv: e2(i2) };
  }
  function n2(n3, r2) {
    var i2 = { dx: n3.v, dv: e2(n3) }, a2 = t2(n3, r2 * 0.5, i2), o2 = t2(n3, r2 * 0.5, a2), s2 = t2(n3, r2, o2), c2 = 1 / 6 * (i2.dx + 2 * (a2.dx + o2.dx) + s2.dx), l2 = 1 / 6 * (i2.dv + 2 * (a2.dv + o2.dv) + s2.dv);
    return n3.x += c2 * r2, n3.v += l2 * r2, n3;
  }
  return function e3(t3, r2, i2) {
    var a2 = { x: -1, v: 0, tension: null, friction: null }, o2 = [0], s2 = 0, c2 = 1 / 1e4, l2 = 16 / 1e3, u2, d2, f2;
    for (t3 = parseFloat(t3) || 500, r2 = parseFloat(r2) || 20, i2 || (i2 = null), a2.tension = t3, a2.friction = r2, u2 = i2 !== null, u2 ? (s2 = e3(t3, r2), d2 = s2 / i2 * l2) : d2 = l2; f2 = n2(f2 || a2, d2), o2.push(1 + f2.x), s2 += 16, Math.abs(f2.x) > c2 && Math.abs(f2.v) > c2; ) ;
    return u2 ? function(e4) {
      return o2[e4 * (o2.length - 1) | 0];
    } : s2;
  };
})(), Cu = function(e2, t2, n2, r2) {
  var i2 = xu(e2, t2, n2, r2);
  return function(e3, t3, n3) {
    return e3 + (t3 - e3) * i2(n3);
  };
}, wu = { linear: function(e2, t2, n2) {
  return e2 + (t2 - e2) * n2;
}, ease: Cu(0.25, 0.1, 0.25, 1), "ease-in": Cu(0.42, 0, 1, 1), "ease-out": Cu(0, 0, 0.58, 1), "ease-in-out": Cu(0.42, 0, 0.58, 1), "ease-in-sine": Cu(0.47, 0, 0.745, 0.715), "ease-out-sine": Cu(0.39, 0.575, 0.565, 1), "ease-in-out-sine": Cu(0.445, 0.05, 0.55, 0.95), "ease-in-quad": Cu(0.55, 0.085, 0.68, 0.53), "ease-out-quad": Cu(0.25, 0.46, 0.45, 0.94), "ease-in-out-quad": Cu(0.455, 0.03, 0.515, 0.955), "ease-in-cubic": Cu(0.55, 0.055, 0.675, 0.19), "ease-out-cubic": Cu(0.215, 0.61, 0.355, 1), "ease-in-out-cubic": Cu(0.645, 0.045, 0.355, 1), "ease-in-quart": Cu(0.895, 0.03, 0.685, 0.22), "ease-out-quart": Cu(0.165, 0.84, 0.44, 1), "ease-in-out-quart": Cu(0.77, 0, 0.175, 1), "ease-in-quint": Cu(0.755, 0.05, 0.855, 0.06), "ease-out-quint": Cu(0.23, 1, 0.32, 1), "ease-in-out-quint": Cu(0.86, 0, 0.07, 1), "ease-in-expo": Cu(0.95, 0.05, 0.795, 0.035), "ease-out-expo": Cu(0.19, 1, 0.22, 1), "ease-in-out-expo": Cu(1, 0, 0, 1), "ease-in-circ": Cu(0.6, 0.04, 0.98, 0.335), "ease-out-circ": Cu(0.075, 0.82, 0.165, 1), "ease-in-out-circ": Cu(0.785, 0.135, 0.15, 0.86), spring: function(e2, t2, n2) {
  if (n2 === 0) return wu.linear;
  var r2 = Su(e2, t2, n2);
  return function(e3, t3, n3) {
    return e3 + (t3 - e3) * r2(n3);
  };
}, "cubic-bezier": Cu };
function Tu(t2, n2, r2, i2, a2) {
  var o2 = e;
  if (i2 === 1 || n2 === r2) return r2;
  var s2 = a2(n2, r2, i2);
  return t2 == null ? s2 : ((t2.roundValue || t2.color) && (s2 = Math.round(s2)), t2[o2(1120)] !== void 0 && (s2 = Math.max(s2, t2.min)), t2.max !== void 0 && (s2 = Math[o2(1120)](s2, t2.max)), s2);
}
function Eu(t2, n2) {
  var r2 = e;
  return t2[r2(676)] != null || t2.value != null ? t2.pfValue != null && (n2 == null || n2.type.units !== `%`) ? t2[r2(676)] : t2[r2(1310)] : t2;
}
function Du(e2, t2, n2, r2, i2) {
  var a2 = i2 == null ? null : i2.type;
  n2 < 0 ? n2 = 0 : n2 > 1 && (n2 = 1);
  var o2 = Eu(e2, i2), s2 = Eu(t2, i2);
  if (j(o2) && j(s2)) return Tu(a2, o2, s2, n2, r2);
  if (O(o2) && O(s2)) {
    for (var c2 = [], l2 = 0; l2 < s2.length; l2++) {
      var u2 = o2[l2], d2 = s2[l2];
      if (u2 != null && d2 != null) {
        var f2 = Tu(a2, u2, d2, n2, r2);
        c2.push(f2);
      } else c2.push(d2);
    }
    return c2;
  }
}
function Ou(t2, n2, r2, i2) {
  var a2 = e, o2 = !i2, s2 = t2._private, c2 = n2._private, l2 = c2.easing, u2 = c2.startTime, d2 = (i2 ? t2 : t2.cy()).style();
  if (!c2[a2(969)]) if (l2 == null) c2.easingImpl = wu.linear;
  else {
    var f2 = E(l2) ? d2.parse(a2(629), l2)[a2(1310)] : l2, p2, m2;
    E(f2) ? (p2 = f2, m2 = []) : (p2 = f2[1], m2 = f2[a2(534)](2).map(function(e2) {
      return +e2;
    })), m2.length > 0 ? (p2 === `spring` && m2.push(c2.duration), c2.easingImpl = wu[p2].apply(null, m2)) : c2[a2(969)] = wu[p2];
  }
  var h2 = c2[a2(969)], g2 = c2.duration === 0 ? 1 : (r2 - u2) / c2[a2(989)];
  if (c2.applying && (g2 = c2.progress), g2 < 0 ? g2 = 0 : g2 > 1 && (g2 = 1), c2[a2(1175)] == null) {
    var _2 = c2.startPosition, v2 = c2.position;
    if (v2 && o2 && !t2.locked()) {
      var y2 = {};
      ku(_2.x, v2.x) && (y2.x = Du(_2.x, v2.x, g2, h2)), ku(_2.y, v2.y) && (y2.y = Du(_2.y, v2.y, g2, h2)), t2.position(y2);
    }
    var b2 = c2[a2(264)], x2 = c2.pan, S2 = s2.pan, C2 = x2 != null && i2;
    C2 && (ku(b2.x, x2.x) && (S2.x = Du(b2.x, x2.x, g2, h2)), ku(b2.y, x2.y) && (S2.y = Du(b2.y, x2.y, g2, h2)), t2.emit(`pan`));
    var w2 = c2.startZoom, T2 = c2.zoom, D2 = T2 != null && i2;
    D2 && (ku(w2, T2) && (s2.zoom = Gn(s2.minZoom, Du(w2, T2, g2, h2), s2.maxZoom)), t2.emit(`zoom`)), (C2 || D2) && t2.emit(`viewport`);
    var O2 = c2.style;
    if (O2 && O2[a2(441)] > 0 && o2) {
      for (var k2 = 0; k2 < O2.length; k2++) {
        var A2 = O2[k2], j2 = A2[a2(958)], M2 = A2, N2 = c2.startStyle[j2], P2 = d2[a2(1104)][N2.name], F2 = Du(N2, M2, g2, h2, P2);
        d2[a2(684)](t2, j2, F2);
      }
      t2.emit(`style`);
    }
  }
  return c2.progress = g2, g2;
}
function ku(e2, t2) {
  return e2 == null || t2 == null ? false : j(e2) && j(t2) ? true : !!(e2 && t2);
}
function Au(e2, t2, n2, r2) {
  var i2 = t2._private;
  i2.started = true, i2.startTime = n2 - i2.progress * i2.duration;
}
function ju(t2, n2) {
  var r2 = e, i2 = n2._private[r2(1204)], a2 = [];
  function o2(e2, n3) {
    var i3 = r2, o3 = e2._private, s3 = o3.animation.current, c3 = o3[i3(812)].queue, l3 = false;
    if (s3.length === 0) {
      var u3 = c3.shift();
      u3 && s3.push(u3);
    }
    for (var d3 = function(e3) {
      for (var t3 = e3.length - 1; t3 >= 0; t3--) {
        var n4 = e3[t3];
        n4();
      }
      e3.splice(0, e3.length);
    }, f2 = s3.length - 1; f2 >= 0; f2--) {
      var p2 = s3[f2], m2 = p2._private;
      if (m2.stopped) {
        s3.splice(f2, 1), m2.hooked = false, m2[i3(1394)] = false, m2.started = false, d3(m2[i3(1334)]);
        continue;
      }
      !m2[i3(1394)] && !m2.applying || (m2.playing && m2.applying && (m2.applying = false), m2[i3(1367)] || Au(e2, p2, t2), Ou(e2, p2, t2, n3), m2.applying && (m2.applying = false), d3(m2.frames), m2.step != null && m2.step(t2), p2[i3(1400)]() && (s3[i3(1185)](f2, 1), m2.hooked = false, m2.playing = false, m2.started = false, d3(m2.completes)), l3 = true);
    }
    return !n3 && s3.length === 0 && c3.length === 0 && a2.push(e2), l3;
  }
  for (var s2 = false, c2 = 0; c2 < i2.length; c2++) {
    var l2 = i2[c2], u2 = o2(l2);
    s2 || (s2 = u2);
  }
  var d2 = o2(n2, true);
  (s2 || d2) && (i2.length > 0 ? n2.notify(r2(975), i2) : n2.notify(`draw`)), i2.unmerge(a2), n2.emit(r2(279));
}
var Mu = { animate: mc.animate(), animation: mc.animation(), animated: mc.animated(), clearQueue: mc.clearQueue(), delay: mc.delay(), delayAnimation: mc.delayAnimation(), stop: mc.stop(), addToAnimationPool: function(t2) {
  var n2 = e, r2 = this;
  r2[n2(633)]() && r2._private[n2(1204)].merge(t2);
}, stopAnimationLoop: function() {
  this._private.animationsRunning = false;
}, startAnimationLoop: function() {
  var e2 = this;
  if (e2._private.animationsRunning = true, !e2.styleEnabled()) return;
  function t2() {
    e2[$(820)].animationsRunning && dt(function(n3) {
      ju(n3, e2), t2();
    });
  }
  var n2 = e2.renderer();
  n2 && n2.beforeRender ? n2.beforeRender(function(t3, n3) {
    ju(n3, e2);
  }, n2.beforeRenderPriorities.animations) : t2();
} }, Nu = { qualifierCompare: function(e2, t2) {
  return e2 == null || t2 == null ? e2 == null && t2 == null : e2.sameText(t2);
}, eventMatches: function(t2, n2, r2) {
  var i2 = e, a2 = n2.qualifier;
  return a2 == null ? true : t2 !== r2.target && F(r2[i2(1192)]) && a2.matches(r2[i2(1192)]);
}, addEventFields: function(e2, t2) {
  t2.cy = e2, t2.target = e2;
}, callbackContext: function(t2, n2, r2) {
  var i2 = e;
  return n2.qualifier == null ? t2 : r2[i2(1192)];
} }, Pu = function(e2) {
  return E(e2) ? new Lc(e2) : e2;
}, Fu = { createEmitter: function() {
  var e2 = this._private;
  return e2.emitter || (e2.emitter = new Bl(Nu, this)), this;
}, emitter: function() {
  var t2 = e;
  return this._private[t2(512)];
}, on: function(e2, t2, n2) {
  return this.emitter().on(e2, Pu(t2), n2), this;
}, removeListener: function(e2, t2, n2) {
  return this.emitter().removeListener(e2, Pu(t2), n2), this;
}, removeAllListeners: function() {
  return this.emitter().removeAllListeners(), this;
}, one: function(e2, t2, n2) {
  return this.emitter().one(e2, Pu(t2), n2), this;
}, once: function(e2, t2, n2) {
  return this.emitter().one(e2, Pu(t2), n2), this;
}, emit: function(e2, t2) {
  return this.emitter().emit(e2, t2), this;
}, emitAndNotify: function(e2, t2) {
  return this.emit(e2), this.notify(e2, t2), this;
} };
mc.eventAliasesOn(Fu);
var Iu = { png: function(t2) {
  var n2 = e, r2 = this[n2(820)].renderer;
  return t2 || (t2 = {}), r2.png(t2);
}, jpg: function(t2) {
  var n2 = e, r2 = this[n2(820)].renderer;
  return t2 || (t2 = {}), t2.bg = t2.bg || `#fff`, r2[n2(741)](t2);
} };
Iu.jpeg = Iu.jpg;
var Lu = { layout: function(e2) {
  var t2 = this;
  if (e2 == null) {
    Lt(`Layout options must be specified to make a layout`);
    return;
  }
  if (e2.name == null) {
    Lt("A `name` must be specified to make a layout");
    return;
  }
  var n2 = e2.name, r2 = t2.extension(`layout`, n2);
  if (r2 == null) {
    Lt("No such layout `" + n2 + "` found.  Did you forget to import it and `cytoscape.use()` it?");
    return;
  }
  return new r2(Z({}, e2, { cy: t2, eles: E(e2.eles) ? t2.$(e2.eles) : e2.eles == null ? t2.$() : e2.eles }));
} };
Lu.createLayout = Lu.makeLayout = Lu.layout;
var Ru = { notify: function(t2, n2) {
  var r2 = e, i2 = this._private;
  if (this.batching()) {
    i2.batchNotifications = i2.batchNotifications || {};
    var a2 = i2.batchNotifications[t2] = i2.batchNotifications[t2] || this.collection();
    n2 != null && a2.merge(n2);
    return;
  }
  if (i2.notificationsEnabled) {
    var o2 = this.renderer();
    this.destroyed() || !o2 || o2[r2(541)](t2, n2);
  }
}, notifications: function(e2) {
  var t2 = this._private;
  return e2 === void 0 ? t2.notificationsEnabled : (t2.notificationsEnabled = !!e2, this);
}, noNotifications: function(e2) {
  this.notifications(false), e2(), this.notifications(true);
}, batching: function() {
  var t2 = e;
  return this[t2(820)].batchCount > 0;
}, startBatch: function() {
  var t2 = e, n2 = this[t2(820)];
  return n2.batchCount ?? (n2.batchCount = 0), n2.batchCount === 0 && (n2.batchStyleEles = this[t2(999)](), n2.batchNotifications = {}), n2.batchCount++, this;
}, endBatch: function() {
  var t2 = e, n2 = this[t2(820)];
  if (n2.batchCount === 0) return this;
  if (n2.batchCount--, n2.batchCount === 0) {
    n2.batchStyleEles[t2(379)]();
    var r2 = this.renderer();
    Object.keys(n2.batchNotifications).forEach(function(e2) {
      var i2 = t2, a2 = n2.batchNotifications[e2];
      a2[i2(1064)]() ? r2.notify(e2) : r2.notify(e2, a2);
    });
  }
  return this;
}, batch: function(t2) {
  var n2 = e;
  return this[n2(1291)](), t2(), this.endBatch(), this;
}, batchData: function(e2) {
  var t2 = this;
  return this.batch(function() {
    for (var n2 = $, r2 = Object.keys(e2), i2 = 0; i2 < r2[n2(441)]; i2++) {
      var a2 = r2[i2], o2 = e2[a2];
      t2.getElementById(a2)[n2(1036)](o2);
    }
  });
} }, zu = Kt({ hideEdgesOnViewport: false, textureOnViewport: false, motionBlur: false, motionBlurOpacity: 0.05, pixelRatio: void 0, desktopTapThreshold: 4, touchTapThreshold: 8, wheelSensitivity: 1, debug: false, showFps: false, webgl: false, webglDebug: false, webglDebugShowAtlases: false, webglTexSize: 2048, webglTexRows: 36, webglTexRowsNodes: 18, webglBatchSize: 2048, webglTexPerBatch: 14, webglBgColor: [255, 255, 255] }), Bu = { renderTo: function(e2, t2, n2, r2) {
  return this._private.renderer.renderTo(e2, t2, n2, r2), this;
}, renderer: function() {
  var t2 = e;
  return this._private[t2(589)];
}, forceRender: function() {
  return this.notify(`draw`), this;
}, resize: function() {
  var t2 = e;
  return this.invalidateSize(), this[t2(1216)](`resize`), this;
}, initRenderer: function(t2) {
  var n2 = e, r2 = this, i2 = r2[n2(729)](`renderer`, t2.name);
  if (i2 == null) {
    Lt("Can not initialise: No such renderer `" + t2.name + "` found. Did you forget to import it and `cytoscape.use()` it?");
    return;
  }
  t2[n2(914)] !== void 0 && zt(`You have set a custom wheel sensitivity.  This will make your app zoom unnaturally when using mainstream mice.  You should change this value from the default only if you can guarantee that all your users will use the same hardware and OS configuration as your current machine.`);
  var a2 = zu(t2);
  a2.cy = r2, r2._private.renderer = new i2(a2), this[n2(541)](`init`);
}, destroyRenderer: function() {
  var t2 = e, n2 = this;
  n2.notify(`destroy`);
  var r2 = n2.container();
  if (r2) for (r2[t2(1356)] = null; r2.childNodes.length > 0; ) r2.removeChild(r2.childNodes[0]);
  n2._private[t2(589)] = null, n2[t2(1123)]().forEach(function(e2) {
    var n3 = t2, r3 = e2._private;
    r3.rscratch = {}, r3.rstyle = {}, r3.animation.current = [], r3[n3(812)].queue = [];
  });
}, onRender: function(e2) {
  return this.on(`render`, e2);
}, offRender: function(e2) {
  return this.off(`render`, e2);
} };
Bu[e(360)] = Bu.resize;
var Vu = { collection: function(t2, n2) {
  var r2 = e;
  return E(t2) ? this.$(t2) : P(t2) ? t2[r2(999)]() : O(t2) ? (n2 || (n2 = {}), new vu(this, t2, n2.unique, n2[r2(781)])) : new vu(this);
}, nodes: function(e2) {
  var t2 = this.$(function(e3) {
    return e3.isNode();
  });
  return e2 ? t2.filter(e2) : t2;
}, edges: function(t2) {
  var n2 = e, r2 = this.$(function(e2) {
    return e2.isEdge();
  });
  return t2 ? r2[n2(670)](t2) : r2;
}, $: function(t2) {
  var n2 = e, r2 = this[n2(820)].elements;
  return t2 ? r2.filter(t2) : r2.spawnSelf();
}, mutableElements: function() {
  return this._private.elements;
} };
Vu.elements = Vu[e(670)] = Vu.$;
var Hu = {}, Uu = `t`, Wu = `f`;
Hu[e(226)] = function(t2) {
  for (var n2 = e, r2 = this, i2 = r2._private.cy.collection(), a2 = 0; a2 < t2[n2(441)]; a2++) {
    var o2 = t2[a2], s2 = r2.getContextMeta(o2);
    if (!s2.empty) {
      var c2 = r2.getContextStyle(s2), l2 = r2.applyContextStyle(s2, c2, o2);
      o2._private.appliedInitStyle ? r2[n2(1313)](o2, l2.diffProps) : o2._private.appliedInitStyle = true, r2.updateStyleHints(o2) && i2.push(o2);
    }
  }
  return i2;
}, Hu.getPropertiesDiff = function(t2, n2) {
  var r2 = e, i2 = this, a2 = i2[r2(820)].propDiffs = i2._private.propDiffs || {}, o2 = t2 + `-` + n2, s2 = a2[o2];
  if (s2) return s2;
  for (var c2 = [], l2 = {}, u2 = 0; u2 < i2.length; u2++) {
    var d2 = i2[u2], f2 = t2[u2] === Uu, p2 = n2[u2] === Uu, m2 = f2 !== p2, h2 = d2.mappedProperties[r2(441)] > 0;
    if (m2 || p2 && h2) {
      var g2 = void 0;
      m2 && h2 || m2 ? g2 = d2.properties : h2 && (g2 = d2.mappedProperties);
      for (var _2 = 0; _2 < g2.length; _2++) {
        for (var v2 = g2[_2], y2 = v2.name, b2 = false, x2 = u2 + 1; x2 < i2.length; x2++) {
          var S2 = i2[x2];
          if (n2[x2] === Uu && (b2 = S2.properties[v2.name] != null, b2)) break;
        }
        !l2[y2] && !b2 && (l2[y2] = true, c2.push(y2));
      }
    }
  }
  return a2[o2] = c2, c2;
}, Hu.getContextMeta = function(t2) {
  for (var n2 = e, r2 = this, i2 = ``, a2, o2 = t2._private.styleCxtKey || ``, s2 = 0; s2 < r2.length; s2++) {
    var c2 = r2[s2];
    c2[n2(1346)] && c2.selector.matches(t2) ? i2 += Uu : i2 += Wu;
  }
  return a2 = r2.getPropertiesDiff(o2, i2), t2._private.styleCxtKey = i2, { key: i2, diffPropNames: a2, empty: a2.length === 0 };
}, Hu[e(967)] = function(t2) {
  var n2 = e, r2 = t2[n2(238)], i2 = this, a2 = this._private.contextStyles = this._private.contextStyles || {};
  if (a2[r2]) return a2[r2];
  for (var o2 = { _private: { key: r2 } }, s2 = 0; s2 < i2[n2(441)]; s2++) {
    var c2 = i2[s2];
    if (r2[s2] === Uu) for (var l2 = 0; l2 < c2.properties.length; l2++) {
      var u2 = c2.properties[l2];
      o2[u2[n2(958)]] = u2;
    }
  }
  return a2[r2] = o2, o2;
}, Hu[e(465)] = function(t2, n2, r2) {
  for (var i2 = e, a2 = this, o2 = t2.diffPropNames, s2 = {}, c2 = a2.types, l2 = 0; l2 < o2.length; l2++) {
    var u2 = o2[l2], d2 = n2[u2], f2 = r2.pstyle(u2);
    if (!d2) if (f2) d2 = f2[i2(244)] ? { name: u2, deleteBypassed: true } : { name: u2, delete: true };
    else continue;
    if (f2 !== d2) {
      if (d2.mapped === c2.fn && f2 != null && f2.mapping != null && f2.mapping.value === d2.value) {
        var p2 = f2[i2(599)];
        if ((p2[i2(938)] = d2.value(r2)) === p2[i2(705)]) continue;
      }
      var m2 = s2[u2] = { prev: f2 };
      a2.applyParsedProperty(r2, d2), m2.next = r2.pstyle(u2), m2.next && m2.next.bypass && (m2[i2(1077)] = m2.next.bypassed);
    }
  }
  return { diffProps: s2 };
}, Hu.updateStyleHints = function(t2) {
  var n2 = e, r2 = t2._private, i2 = this, a2 = i2.propertyGroupNames, o2 = i2[n2(1238)], s2 = function(e2, t3, n3) {
    return i2.getPropertiesHash(e2, t3, n3);
  }, c2 = r2.styleKey;
  if (t2.removed()) return false;
  var l2 = r2.group === `nodes`, u2 = t2._private.style;
  a2 = Object.keys(u2);
  for (var d2 = 0; d2 < o2.length; d2++) {
    var f2 = o2[d2];
    r2.styleKeys[f2] = [pt, ht];
  }
  for (var p2 = function(e2, t3) {
    return r2.styleKeys[t3][0] = _t(e2, r2.styleKeys[t3][0]);
  }, m2 = function(e2, t3) {
    var i3 = n2;
    return r2.styleKeys[t3][1] = vt(e2, r2[i3(851)][t3][1]);
  }, h2 = function(e2, t3) {
    p2(e2, t3), m2(e2, t3);
  }, g2 = function(e2, t3) {
    for (var n3 = 0; n3 < e2.length; n3++) {
      var r3 = e2.charCodeAt(n3);
      p2(r3, t3), m2(r3, t3);
    }
  }, _2 = 2e9, v2 = function(e2) {
    return -128 < e2 && e2 < 128 && Math.floor(e2) !== e2 ? _2 - (e2 * 1024 | 0) : e2;
  }, y2 = 0; y2 < a2.length; y2++) {
    var b2 = a2[y2], x2 = u2[b2];
    if (x2 != null) {
      var S2 = this[n2(1104)][b2], C2 = S2.type, w2 = S2.groupKey, T2 = void 0;
      S2.hashOverride == null ? x2.pfValue != null && (T2 = x2.pfValue) : T2 = S2.hashOverride(t2, x2);
      var E2 = S2.enums == null ? x2[n2(1310)] : null, D2 = T2 != null, O2 = D2 || E2 != null, k2 = x2.units;
      C2.number && O2 && !C2[n2(1199)] ? (h2(v2(D2 ? T2 : E2), w2), !D2 && k2 != null && g2(k2, w2)) : g2(x2.strValue, w2);
    }
  }
  for (var A2 = [pt, ht], j2 = 0; j2 < o2.length; j2++) {
    var M2 = o2[j2], N2 = r2.styleKeys[M2];
    A2[0] = _t(N2[0], A2[0]), A2[1] = vt(N2[1], A2[1]);
  }
  r2.styleKey = yt(A2[0], A2[1]);
  var P2 = r2.styleKeys;
  r2.labelDimsKey = bt(P2.labelDimensions);
  var F2 = s2(t2, [`label`], P2[n2(406)]);
  if (r2.labelKey = bt(F2), r2.labelStyleKey = bt(xt(P2.commonLabel, F2)), !l2) {
    var I2 = s2(t2, [`source-label`], P2.labelDimensions);
    r2.sourceLabelKey = bt(I2), r2.sourceLabelStyleKey = bt(xt(P2.commonLabel, I2));
    var L2 = s2(t2, [`target-label`], P2.labelDimensions);
    r2.targetLabelKey = bt(L2), r2.targetLabelStyleKey = bt(xt(P2.commonLabel, L2));
  }
  if (l2) {
    var R2 = r2[n2(851)], z2 = R2.nodeBody, B2 = R2.nodeBorder, V2 = R2.nodeOutline, H2 = R2.backgroundImage, U2 = R2.compound, W2 = R2[n2(682)], G2 = R2.stripe;
    r2.nodeKey = bt([z2, B2, V2, H2, U2, W2, G2].filter(function(e2) {
      return e2 != null;
    }).reduce(xt, [pt, ht])), r2.hasPie = W2 != null && W2[0] !== pt && W2[1] !== ht, r2[n2(326)] = G2 != null && G2[0] !== pt && G2[1] !== ht;
  }
  return c2 !== r2.styleKey;
}, Hu[e(1403)] = function(t2) {
  var n2 = e, r2 = t2._private;
  r2[n2(1374)] = ``, r2.styleKeys = {}, r2.styleKey = null, r2[n2(809)] = null, r2.labelStyleKey = null, r2.sourceLabelKey = null, r2.sourceLabelStyleKey = null, r2[n2(1186)] = null, r2.targetLabelStyleKey = null, r2.nodeKey = null, r2.hasPie = null, r2.hasStripe = null;
}, Hu.applyParsedProperty = function(t2, n2) {
  var r2 = e, i2 = this, a2 = n2, o2 = t2._private.style, s2, c2 = i2.types, l2 = i2.properties[a2.name].type, u2 = a2.bypass, d2 = o2[a2.name], f2 = d2 && d2.bypass, p2 = t2._private, m2 = `mapping`, h2 = function(e2) {
    return e2 == null ? null : e2.pfValue == null ? e2.value : e2.pfValue;
  }, g2 = function() {
    var e2 = h2(d2), n3 = h2(a2);
    i2.checkTriggers(t2, a2.name, e2, n3);
  };
  if (n2.name === `curve-style` && t2[r2(230)]() && (n2.value !== `bezier` && t2.isLoop() || n2.value === r2(1010) && (t2[r2(1256)]().isParent() || t2.target().isParent())) && (a2 = n2 = this[r2(1168)](n2.name, `bezier`, u2)), a2[r2(470)]) return o2[a2.name] = void 0, g2(), true;
  if (a2.deleteBypassed) return d2 ? d2[r2(244)] ? (d2.bypassed = void 0, g2(), true) : false : (g2(), true);
  if (a2.deleteBypass) return d2 ? d2.bypass ? (o2[a2.name] = d2.bypassed, g2(), true) : false : (g2(), true);
  var _2 = function() {
    var e2 = r2;
    zt("Do not assign mappings to elements without corresponding data (i.e. ele `" + t2.id() + "` has no mapping for property `" + a2[e2(958)] + "` with data field `" + a2.field + "`); try a `[" + a2.field + "]` selector to limit scope to elements with `" + a2[e2(213)] + "` defined");
  };
  switch (a2.mapped) {
    case c2.mapData:
      for (var v2 = a2.field.split(`.`), y2 = p2.data, b2 = 0; b2 < v2.length && y2; b2++) {
        var x2 = v2[b2];
        y2 = y2[x2];
      }
      if (y2 == null) return _2(), false;
      var S2;
      if (j(y2)) {
        var C2 = a2[r2(578)] - a2.fieldMin;
        S2 = C2 === 0 ? 0 : (y2 - a2.fieldMin) / C2;
      } else return zt("Do not use continuous mappers without specifying numeric data (i.e. `" + a2.field + `: ` + y2 + "` for `" + t2.id() + "` is non-numeric)"), false;
      if (S2 < 0 ? S2 = 0 : S2 > 1 && (S2 = 1), l2[r2(1097)]) {
        var w2 = a2[r2(480)][0], T2 = a2.valueMax[0], E2 = a2.valueMin[1], D2 = a2[r2(211)][1], O2 = a2.valueMin[2], k2 = a2.valueMax[2], A2 = a2.valueMin[3] == null ? 1 : a2.valueMin[3], M2 = a2[r2(211)][3] == null ? 1 : a2.valueMax[3], N2 = [Math.round(w2 + (T2 - w2) * S2), Math.round(E2 + (D2 - E2) * S2), Math.round(O2 + (k2 - O2) * S2), Math.round(A2 + (M2 - A2) * S2)];
        s2 = { bypass: a2[r2(244)], name: a2.name, value: N2, strValue: `rgb(` + N2[0] + `, ` + N2[1] + `, ` + N2[2] + `)` };
      } else if (l2[r2(1134)]) {
        var P2 = a2.valueMin + (a2[r2(211)] - a2.valueMin) * S2;
        s2 = this[r2(1168)](a2.name, P2, a2[r2(244)], m2);
      } else return false;
      if (!s2) return _2(), false;
      s2.mapping = a2, a2 = s2;
      break;
    case c2.data:
      for (var F2 = a2.field.split(`.`), I2 = p2.data, L2 = 0; L2 < F2.length && I2; L2++) {
        var R2 = F2[L2];
        I2 = I2[R2];
      }
      if (I2 != null && (s2 = this.parse(a2.name, I2, a2[r2(244)], m2)), !s2) return _2(), false;
      s2[r2(599)] = a2, a2 = s2;
      break;
    case c2.fn:
      var z2 = a2.value, B2 = a2[r2(938)] == null ? z2(t2) : a2.fnValue;
      if (a2.prevFnValue = B2, B2 == null) return zt("Custom function mappers may not return null (i.e. `" + a2.name + "` for ele `" + t2.id() + "` is null)"), false;
      if (s2 = this.parse(a2.name, B2, a2[r2(244)], m2), !s2) return zt("Custom function mappers may not return invalid values for the property type (i.e. `" + a2[r2(958)] + "` for ele `" + t2.id() + "` is invalid)"), false;
      s2.mapping = Vt(a2), a2 = s2;
      break;
    case void 0:
      break;
    default:
      return false;
  }
  return u2 ? (f2 ? a2.bypassed = d2.bypassed : a2.bypassed = d2, o2[a2.name] = a2) : f2 ? d2[r2(688)] = a2 : o2[a2[r2(958)]] = a2, g2(), true;
}, Hu.cleanElements = function(t2, n2) {
  for (var r2 = e, i2 = 0; i2 < t2.length; i2++) {
    var a2 = t2[i2];
    if (this.clearStyleHints(a2), a2.dirtyCompoundBoundsCache(), a2.dirtyBoundingBoxCache(), !n2) a2._private.style = {};
    else for (var o2 = a2._private[r2(1353)], s2 = Object[r2(520)](o2), c2 = 0; c2 < s2.length; c2++) {
      var l2 = s2[c2], u2 = o2[l2];
      u2 != null && (u2.bypass ? u2.bypassed = null : o2[l2] = null);
    }
  }
}, Hu[e(1082)] = function() {
  this._private.cy.mutableElements().updateStyle();
}, Hu.updateTransitions = function(t2, n2) {
  var r2 = e, i2 = this, a2 = t2._private, o2 = t2[r2(1373)](`transition-property`).value, s2 = t2[r2(1373)](r2(1001))[r2(676)], c2 = t2.pstyle(`transition-delay`).pfValue;
  if (o2.length > 0 && s2 > 0) {
    for (var l2 = {}, u2 = false, d2 = 0; d2 < o2[r2(441)]; d2++) {
      var f2 = o2[d2], p2 = t2[r2(1373)](f2), m2 = n2[f2];
      if (m2) {
        var h2 = m2[r2(1173)], g2 = m2.next == null ? p2 : m2.next, _2 = false, v2 = void 0, y2 = 1e-6;
        h2 && (j(h2.pfValue) && j(g2.pfValue) ? (_2 = g2.pfValue - h2.pfValue, v2 = h2.pfValue + y2 * _2) : j(h2.value) && j(g2[r2(1310)]) ? (_2 = g2.value - h2[r2(1310)], v2 = h2.value + y2 * _2) : O(h2.value) && O(g2.value) && (_2 = h2.value[0] !== g2.value[0] || h2.value[1] !== g2[r2(1310)][1] || h2.value[2] !== g2.value[2], v2 = h2.strValue), _2 && (l2[f2] = g2.strValue, this[r2(799)](t2, f2, v2), u2 = true));
      }
    }
    if (!u2) return;
    a2.transitioning = true, new fa(function(e2) {
      var n3 = r2;
      c2 > 0 ? t2[n3(522)](c2).play()[n3(643)]().then(e2) : e2();
    }).then(function() {
      var e2 = r2;
      return t2.animation({ style: l2, duration: s2, easing: t2.pstyle(`transition-timing-function`)[e2(1310)], queue: false }).play().promise();
    }).then(function() {
      var e2 = r2;
      i2.removeBypasses(t2, o2), t2[e2(1216)](e2(1353)), a2.transitioning = false;
    });
  } else a2[r2(544)] && (this.removeBypasses(t2, o2), t2.emitAndNotify(`style`), a2.transitioning = false);
}, Hu.checkTrigger = function(t2, n2, r2, i2, a2, o2) {
  var s2 = e, c2 = this[s2(1104)][n2], l2 = a2(c2);
  t2[s2(781)]() || l2 != null && l2(r2, i2, t2) && o2(c2);
}, Hu.checkZOrderTrigger = function(e2, t2, n2, r2) {
  var i2 = this;
  this.checkTrigger(e2, t2, n2, r2, function(e3) {
    return e3.triggersZOrder;
  }, function() {
    i2[$(820)].cy.notify(`zorder`, e2);
  });
}, Hu.checkBoundsTrigger = function(t2, n2, r2, i2) {
  var a2 = e;
  this[a2(521)](t2, n2, r2, i2, function(e2) {
    return e2.triggersBounds;
  }, function(e2) {
    t2[a2(590)](), t2.dirtyBoundingBoxCache();
  });
}, Hu.checkConnectedEdgesBoundsTrigger = function(e2, t2, n2, r2) {
  this.checkTrigger(e2, t2, n2, r2, function(e3) {
    return e3.triggersBoundsOfConnectedEdges;
  }, function(t3) {
    e2.connectedEdges().forEach(function(e3) {
      e3.dirtyBoundingBoxCache();
    });
  });
}, Hu.checkParallelEdgesBoundsTrigger = function(e2, t2, n2, r2) {
  this.checkTrigger(e2, t2, n2, r2, function(e3) {
    return e3.triggersBoundsOfParallelEdges;
  }, function(t3) {
    var n3 = $;
    e2.parallelEdges()[n3(1390)](function(e3) {
      e3[n3(253)]();
    });
  });
}, Hu[e(959)] = function(e2, t2, n2, r2) {
  e2.dirtyStyleCache(), this.checkZOrderTrigger(e2, t2, n2, r2), this.checkBoundsTrigger(e2, t2, n2, r2), this.checkConnectedEdgesBoundsTrigger(e2, t2, n2, r2), this.checkParallelEdgesBoundsTrigger(e2, t2, n2, r2);
};
var Gu = {};
Gu.applyBypass = function(t2, n2, r2, i2) {
  var a2 = e, o2 = this, s2 = [], c2 = true;
  if (n2 === `*` || n2 === `**`) {
    if (r2 !== void 0) for (var l2 = 0; l2 < o2[a2(1104)].length; l2++) {
      var u2 = o2.properties[l2].name, d2 = this.parse(u2, r2, true);
      d2 && s2.push(d2);
    }
  } else if (E(n2)) {
    var f2 = this.parse(n2, r2, true);
    f2 && s2.push(f2);
  } else if (k(n2)) {
    var p2 = n2;
    i2 = r2;
    for (var m2 = Object.keys(p2), h2 = 0; h2 < m2.length; h2++) {
      var g2 = m2[h2], _2 = p2[g2];
      if (_2 === void 0 && (_2 = p2[q(g2)]), _2 !== void 0) {
        var v2 = this.parse(g2, _2, true);
        v2 && s2.push(v2);
      }
    }
  } else return false;
  if (s2.length === 0) return false;
  for (var y2 = false, b2 = 0; b2 < t2[a2(441)]; b2++) {
    for (var x2 = t2[b2], S2 = {}, C2 = void 0, w2 = 0; w2 < s2.length; w2++) {
      var T2 = s2[w2];
      if (i2) {
        var D2 = x2.pstyle(T2.name);
        C2 = S2[T2.name] = { prev: D2 };
      }
      y2 = this.applyParsedProperty(x2, Vt(T2)) || y2, i2 && (C2.next = x2.pstyle(T2.name));
    }
    y2 && this[a2(553)](x2), i2 && this.updateTransitions(x2, S2, c2);
  }
  return y2;
}, Gu.overrideBypass = function(t2, n2, r2) {
  var i2 = e;
  n2 = K(n2);
  for (var a2 = 0; a2 < t2.length; a2++) {
    var o2 = t2[a2], s2 = o2._private.style[n2], c2 = this[i2(1104)][n2].type, l2 = c2.color, u2 = c2[i2(432)], d2 = s2 ? s2.pfValue == null ? s2.value : s2[i2(676)] : null;
    !s2 || !s2.bypass ? this[i2(799)](o2, n2, r2) : (s2[i2(1310)] = r2, s2.pfValue != null && (s2.pfValue = r2), l2 ? s2.strValue = `rgb(` + r2.join(`,`) + `)` : u2 ? s2.strValue = r2.join(` `) : s2.strValue = `` + r2, this.updateStyleHints(o2)), this.checkTriggers(o2, n2, d2, r2);
  }
}, Gu.removeAllBypasses = function(e2, t2) {
  return this.removeBypasses(e2, this.propertyNames, t2);
}, Gu.removeBypasses = function(e2, t2, n2) {
  for (var r2 = true, i2 = 0; i2 < e2.length; i2++) {
    for (var a2 = e2[i2], o2 = {}, s2 = 0; s2 < t2.length; s2++) {
      var c2 = t2[s2], l2 = this.properties[c2], u2 = a2.pstyle(l2.name);
      if (!(!u2 || !u2.bypass)) {
        var d2 = this.parse(c2, ``, true), f2 = o2[l2.name] = { prev: u2 };
        this.applyParsedProperty(a2, d2), f2.next = a2.pstyle(l2.name);
      }
    }
    this.updateStyleHints(a2), n2 && this.updateTransitions(a2, o2, r2);
  }
};
var Ku = {};
Ku.getEmSizeInPixels = function() {
  var e2 = this.containerCss(`font-size`);
  return e2 == null ? 1 : parseFloat(e2);
}, Ku.containerCss = function(e2) {
  var t2 = this._private.cy, n2 = t2.container(), r2 = t2.window();
  if (r2 && n2 && r2.getComputedStyle) return r2.getComputedStyle(n2).getPropertyValue(e2);
};
var qu = {};
qu.getRenderedStyle = function(e2, t2) {
  return t2 ? this.getStylePropertyValue(e2, t2, true) : this.getRawStyle(e2, true);
}, qu.getRawStyle = function(t2, n2) {
  var r2 = e, i2 = this;
  if (t2 = t2[0], t2) {
    for (var a2 = {}, o2 = 0; o2 < i2.properties.length; o2++) {
      var s2 = i2.properties[o2], c2 = i2.getStylePropertyValue(t2, s2.name, n2);
      c2 != null && (a2[s2.name] = c2, a2[q(s2[r2(958)])] = c2);
    }
    return a2;
  }
}, qu.getIndexedStyle = function(t2, n2, r2, i2) {
  var a2 = e;
  return t2.pstyle(n2)[r2][i2] ?? t2.cy()[a2(1353)]().getDefaultProperty(n2)[r2][0];
}, qu.getStylePropertyValue = function(t2, n2, r2) {
  var i2 = e, a2 = this;
  if (t2 = t2[0], t2) {
    var o2 = a2.properties[n2];
    o2.alias && (o2 = o2.pointsTo);
    var s2 = o2.type, c2 = t2[i2(1373)](o2.name);
    if (c2) {
      var l2 = c2.value, u2 = c2.units, d2 = c2.strValue;
      if (r2 && s2[i2(1134)] && l2 != null && j(l2)) {
        var f2 = t2.cy().zoom(), p2 = function(e2) {
          return e2 * f2;
        }, m2 = function(e2, t3) {
          return p2(e2) + t3;
        }, h2 = O(l2);
        return (h2 ? u2.every(function(e2) {
          return e2 != null;
        }) : u2 != null) ? h2 ? l2.map(function(e2, t3) {
          return m2(e2, u2[t3]);
        }).join(` `) : m2(l2, u2) : h2 ? l2.map(function(e2) {
          return E(e2) ? e2 : `` + p2(e2);
        }).join(` `) : `` + p2(l2);
      } else if (d2 != null) return d2;
    }
    return null;
  }
}, qu.getAnimationStartStyle = function(e2, t2) {
  for (var n2 = {}, r2 = 0; r2 < t2.length; r2++) {
    var i2 = t2[r2].name, a2 = e2.pstyle(i2);
    a2 !== void 0 && (a2 = k(a2) ? this.parse(i2, a2.strValue) : this.parse(i2, a2)), a2 && (n2[i2] = a2);
  }
  return n2;
}, qu.getPropsList = function(t2) {
  var n2 = e, r2 = this, i2 = [], a2 = t2, o2 = r2.properties;
  if (a2) for (var s2 = Object.keys(a2), c2 = 0; c2 < s2.length; c2++) {
    var l2 = s2[c2], u2 = a2[l2], d2 = o2[l2] || o2[K(l2)], f2 = this.parse(d2.name, u2);
    f2 && i2[n2(254)](f2);
  }
  return i2;
}, qu[e(338)] = function(t2, n2, r2) {
  var i2 = e, a2 = r2.slice(), o2, s2, c2, l2, u2, d2;
  for (u2 = 0; u2 < n2.length; u2++) if (o2 = n2[u2], s2 = t2.pstyle(o2, false), s2 != null) if (s2[i2(676)] != null) a2[0] = _t(l2, a2[0]), a2[1] = vt(l2, a2[1]);
  else for (c2 = s2.strValue, d2 = 0; d2 < c2.length; d2++) l2 = c2.charCodeAt(d2), a2[0] = _t(l2, a2[0]), a2[1] = vt(l2, a2[1]);
  return a2;
}, qu.getPropertiesHash = qu.getNonDefaultPropertiesHash;
var Ju = {};
Ju.appendFromJson = function(t2) {
  for (var n2 = e, r2 = this, i2 = 0; i2 < t2.length; i2++) {
    var a2 = t2[i2], o2 = a2.selector, s2 = a2.style || a2.css, c2 = Object[n2(520)](s2);
    r2[n2(1346)](o2);
    for (var l2 = 0; l2 < c2.length; l2++) {
      var u2 = c2[l2], d2 = s2[u2];
      r2.css(u2, d2);
    }
  }
  return r2;
}, Ju.fromJson = function(e2) {
  var t2 = this;
  return t2.resetToDefault(), t2.appendFromJson(e2), t2;
}, Ju.json = function() {
  for (var t2 = e, n2 = [], r2 = this.defaultLength; r2 < this.length; r2++) {
    for (var i2 = this[r2], a2 = i2[t2(1346)], o2 = i2.properties, s2 = {}, c2 = 0; c2 < o2[t2(441)]; c2++) {
      var l2 = o2[c2];
      s2[l2.name] = l2[t2(1381)];
    }
    n2.push({ selector: a2 ? a2.toString() : `core`, style: s2 });
  }
  return n2;
};
var Yu = {};
Yu[e(845)] = function(t2) {
  var n2 = e, r2 = this, i2 = this, a2 = `` + t2, o2, s2, c2;
  a2 = a2.replace(/[/][*](\s|.)+?[*][/]/g, ``);
  function l2() {
    var e2 = $;
    a2 = a2[e2(441)] > o2.length ? a2[e2(1226)](o2.length) : ``;
  }
  function u2() {
    s2 = s2.length > c2.length ? s2.substr(c2.length) : ``;
  }
  for (; !a2.match(/^\s*$/); ) {
    var d2 = a2.match(/^\s*((?:.|\s)+?)\s*\{((?:.|\s)+?)\}/);
    if (!d2) {
      zt(`Halting stylesheet parsing: String stylesheet contains more to parse but no selector and block found in: ` + a2);
      break;
    }
    o2 = d2[0];
    var f2 = d2[1];
    if (f2 !== `core` && new Lc(f2)[n2(415)]) {
      zt(n2(322) + f2), l2();
      continue;
    }
    var p2 = d2[2], m2 = false;
    s2 = p2;
    for (var h2 = []; !s2.match(/^\s*$/); ) {
      var g2 = s2.match(/^\s*(.+?)\s*:\s*(.+?)(?:\s*;|\s*$)/);
      if (!g2) {
        zt(`Skipping parsing of block: Invalid formatting of style property and value definitions found in:` + p2), m2 = true;
        break;
      }
      c2 = g2[0];
      var _2 = g2[1], v2 = g2[2];
      if (!r2[n2(1104)][_2]) {
        zt(`Skipping property: Invalid property name in: ` + c2), u2();
        continue;
      }
      if (!i2.parse(_2, v2)) {
        zt(`Skipping property: Invalid property definition in: ` + c2), u2();
        continue;
      }
      h2[n2(254)]({ name: _2, val: v2 }), u2();
    }
    if (m2) {
      l2();
      break;
    }
    i2.selector(f2);
    for (var y2 = 0; y2 < h2[n2(441)]; y2++) {
      var b2 = h2[y2];
      i2.css(b2.name, b2.val);
    }
    l2();
  }
  return i2;
}, Yu.fromString = function(e2) {
  var t2 = this;
  return t2.resetToDefault(), t2.appendFromString(e2), t2;
};
var Xu = {};
(function() {
  var t2 = e, n2 = X, r2 = ne, i2 = ie, a2 = ae, o2 = oe, s2 = function(e2) {
    return `^` + e2 + `\\s*\\(\\s*([\\w\\.]+)\\s*\\)$`;
  }, c2 = function(e2) {
    var t3 = n2 + `|\\w+|` + r2 + `|` + i2 + `|` + a2 + `|` + o2;
    return `^` + e2 + `\\s*\\(([\\w\\.]+)\\s*\\,\\s*(` + n2 + `)\\s*\\,\\s*(` + n2 + `)\\s*,\\s*(` + t3 + `)\\s*\\,\\s*(` + t3 + `)\\)$`;
  }, l2 = [`^url\\s*\\(\\s*['"]?(.+?)['"]?\\s*\\)$`, t2(533), `^(.+)$`];
  Xu[t2(315)] = { time: { number: true, min: 0, units: t2(273), implicitUnits: `ms` }, percent: { number: true, min: 0, max: 100, units: `%`, implicitUnits: `%` }, percentages: { number: true, min: 0, max: 100, units: `%`, implicitUnits: `%`, multiple: true }, zeroOneNumber: { number: true, min: 0, max: 1, unitless: true }, zeroOneNumbers: { number: true, min: 0, max: 1, unitless: true, multiple: true }, nOneOneNumber: { number: true, min: -1, max: 1, unitless: true }, nonNegativeInt: { number: true, min: 0, integer: true, unitless: true }, nonNegativeNumber: { number: true, min: 0, unitless: true }, position: { enums: [`parent`, `origin`] }, nodeSize: { number: true, min: 0, enums: [`label`] }, number: { number: true, unitless: true }, numbers: { number: true, unitless: true, multiple: true }, positiveNumber: { number: true, unitless: true, min: 0, strictMin: true }, size: { number: true, min: 0 }, bidirectionalSize: { number: true }, bidirectionalSizeMaybePercent: { number: true, allowPercent: true }, bidirectionalSizes: { number: true, multiple: true }, sizeMaybePercent: { number: true, min: 0, allowPercent: true }, axisDirection: { enums: [`horizontal`, `leftward`, `rightward`, `vertical`, `upward`, `downward`, `auto`] }, axisDirectionExplicit: { enums: [`leftward`, `rightward`, `upward`, t2(1348)] }, axisDirectionPrimary: { enums: [`horizontal`, `vertical`] }, paddingRelativeTo: { enums: [`width`, `height`, `average`, `min`, `max`] }, bgWH: { number: true, min: 0, allowPercent: true, enums: [`auto`], multiple: true }, bgPos: { number: true, allowPercent: true, multiple: true }, bgRelativeTo: { enums: [t2(1197), `include-padding`], multiple: true }, bgRepeat: { enums: [t2(1240), `repeat-x`, `repeat-y`, `no-repeat`], multiple: true }, bgFit: { enums: [t2(875), t2(1152), `cover`], multiple: true }, bgCrossOrigin: { enums: [`anonymous`, t2(409), `null`], multiple: true }, bgClip: { enums: [`none`, `node`], multiple: true }, bgContainment: { enums: [`inside`, t2(1121)], multiple: true }, boxSelection: { enums: [`contain`, `overlap`, `none`] }, color: { color: true }, colors: { color: true, multiple: true }, fill: { enums: [`solid`, `linear-gradient`, `radial-gradient`] }, bool: { enums: [`yes`, `no`] }, bools: { enums: [`yes`, `no`], multiple: true }, lineStyle: { enums: [`solid`, `dotted`, `dashed`] }, lineCap: { enums: [`butt`, `round`, t2(978)] }, linePosition: { enums: [`center`, `inside`, `outside`] }, lineJoin: { enums: [`round`, `bevel`, `miter`] }, borderStyle: { enums: [t2(788), `dotted`, t2(797), `double`] }, curveStyle: { enums: [`bezier`, `unbundled-bezier`, t2(1010), `segments`, `straight`, `straight-triangle`, `taxi`, `round-segments`, `round-taxi`] }, radiusType: { enums: [`arc-radius`, `influence-radius`], multiple: true }, fontFamily: { regex: t2(747) }, fontStyle: { enums: [`italic`, `normal`, `oblique`] }, fontWeight: { enums: [`normal`, `bold`, `bolder`, `lighter`, `100`, `200`, `300`, t2(1266), `500`, `600`, t2(870), `900`, 100, 200, 300, 400, 500, 600, 700, 800, 900] }, textDecoration: { enums: [t2(875), `underline`, `overline`, `line-through`] }, textTransform: { enums: [`none`, `uppercase`, `lowercase`] }, textWrap: { enums: [t2(875), `wrap`, `ellipsis`] }, textOverflowWrap: { enums: [`whitespace`, `anywhere`] }, textBackgroundShape: { enums: [`rectangle`, `roundrectangle`, `round-rectangle`, `circle`] }, nodeShape: { enums: `rectangle.roundrectangle.round-rectangle.cutrectangle.cut-rectangle.bottomroundrectangle.bottom-round-rectangle.barrel.ellipse.triangle.round-triangle.square.pentagon.round-pentagon.hexagon.round-hexagon.concavehexagon.concave-hexagon.heptagon.round-heptagon.octagon.round-octagon.tag.round-tag.star.diamond.round-diamond.vee.rhomboid.right-rhomboid.polygon`.split(`.`) }, overlayShape: { enums: [`roundrectangle`, `round-rectangle`, `ellipse`] }, cornerRadius: { number: true, min: 0, units: `px|em`, implicitUnits: `px`, enums: [`auto`] }, compoundIncludeLabels: { enums: [`include`, `exclude`] }, arrowShape: { enums: [`tee`, `triangle`, `triangle-tee`, `circle-triangle`, t2(1326), t2(630), `vee`, t2(978), `circle`, `diamond`, `chevron`, `none`] }, arrowFill: { enums: [`filled`, `hollow`] }, arrowWidth: { number: true, units: `%|px|em`, implicitUnits: `px`, enums: [`match-line`] }, display: { enums: [`element`, t2(875)] }, visibility: { enums: [`hidden`, t2(1404)] }, zCompoundDepth: { enums: [`bottom`, `orphan`, `auto`, `top`] }, zIndexCompare: { enums: [`auto`, `manual`] }, valign: { enums: [`top`, `center`, `bottom`] }, halign: { enums: [`left`, `center`, `right`] }, justification: { enums: [t2(474), `center`, t2(207), `auto`] }, text: { string: true }, data: { mapping: true, regex: s2(`data`) }, layoutData: { mapping: true, regex: s2(t2(1176)) }, scratch: { mapping: true, regex: s2(`scratch`) }, mapData: { mapping: true, regex: c2(`mapData`) }, mapLayoutData: { mapping: true, regex: c2(t2(1118)) }, mapScratch: { mapping: true, regex: c2(t2(1411)) }, fn: { mapping: true, fn: true }, url: { regexes: l2, singleRegexMatchValue: true }, urls: { regexes: l2, singleRegexMatchValue: true, multiple: true }, propList: { propList: true }, angle: { number: true, units: `deg|rad`, implicitUnits: t2(316) }, textRotation: { number: true, units: t2(960), implicitUnits: `rad`, enums: [`none`, `autorotate`] }, polygonPointList: { number: true, multiple: true, evenMultiple: true, min: -1, max: 1, unitless: true }, edgeDistances: { enums: [t2(1399), t2(607), `endpoints`] }, edgeEndpoint: { number: true, multiple: true, units: `%|px|em|deg|rad`, implicitUnits: `px`, enums: [`inside-to-node`, `outside-to-node`, t2(1031), t2(581), `outside-to-line-or-label`], singleEnum: true, validate: function(e2, n3) {
    var r3 = t2;
    switch (e2.length) {
      case 2:
        return n3[0] !== r3(722) && n3[0] !== `rad` && n3[1] !== `deg` && n3[1] !== r3(316);
      case 1:
        return E(e2[0]) || n3[0] === `deg` || n3[0] === r3(316);
      default:
        return false;
    }
  } }, easing: { regexes: [`^(spring)\\s*\\(\\s*(` + n2 + `)\\s*,\\s*(` + n2 + t2(991), `^(cubic-bezier)\\s*\\(\\s*(` + n2 + `)\\s*,\\s*(` + n2 + `)\\s*,\\s*(` + n2 + t2(508) + n2 + `)\\s*\\)$`], enums: `linear.ease.ease-in.ease-out.ease-in-out.ease-in-sine.ease-out-sine.ease-in-out-sine.ease-in-quad.ease-out-quad.ease-in-out-quad.ease-in-cubic.ease-out-cubic.ease-in-out-cubic.ease-in-quart.ease-out-quart.ease-in-out-quart.ease-in-quint.ease-out-quint.ease-in-out-quint.ease-in-expo.ease-out-expo.ease-in-out-expo.ease-in-circ.ease-out-circ.ease-in-out-circ`.split(`.`) }, gradientDirection: { enums: [t2(1161), `to-top`, `to-left`, `to-right`, t2(1349), `to-bottom-left`, `to-top-right`, `to-top-left`, `to-right-bottom`, t2(697), t2(776), `to-left-top`] }, boundsExpansion: { number: true, multiple: true, min: 0, validate: function(e2) {
    var t3 = e2.length;
    return t3 === 1 || t3 === 2 || t3 === 4;
  } } };
  var u2 = { zeroNonZero: function(e2, t3) {
    return (e2 == null || t3 == null) && e2 !== t3 || e2 == 0 && t3 != 0 ? true : e2 != 0 && t3 == 0;
  }, any: function(e2, t3) {
    return e2 != t3;
  }, emptyNonEmpty: function(e2, t3) {
    var n3 = B(e2), r3 = B(t3);
    return n3 && !r3 || !n3 && r3;
  } }, d2 = Xu.types, f2 = [{ name: t2(1220), type: d2.text, triggersBounds: u2.any, triggersZOrder: u2.emptyNonEmpty }, { name: t2(757), type: d2[t2(1169)], triggersBounds: u2[t2(661)] }, { name: `text-margin-x`, type: d2.bidirectionalSize, triggersBounds: u2.any }, { name: `text-margin-y`, type: d2.bidirectionalSize, triggersBounds: u2.any }], p2 = [{ name: `source-label`, type: d2.text, triggersBounds: u2.any }, { name: `source-text-rotation`, type: d2.textRotation, triggersBounds: u2[t2(661)] }, { name: `source-text-margin-x`, type: d2[t2(904)], triggersBounds: u2.any }, { name: `source-text-margin-y`, type: d2.bidirectionalSize, triggersBounds: u2.any }, { name: `source-text-offset`, type: d2.size, triggersBounds: u2.any }], m2 = [{ name: `target-label`, type: d2.text, triggersBounds: u2.any }, { name: `target-text-rotation`, type: d2.textRotation, triggersBounds: u2.any }, { name: `target-text-margin-x`, type: d2.bidirectionalSize, triggersBounds: u2.any }, { name: `target-text-margin-y`, type: d2.bidirectionalSize, triggersBounds: u2[t2(661)] }, { name: `target-text-offset`, type: d2.size, triggersBounds: u2.any }], h2 = [{ name: t2(551), type: d2[t2(881)], triggersBounds: u2.any }, { name: t2(930), type: d2.fontStyle, triggersBounds: u2[t2(661)] }, { name: `font-weight`, type: d2.fontWeight, triggersBounds: u2.any }, { name: `font-size`, type: d2.size, triggersBounds: u2.any }, { name: `text-transform`, type: d2.textTransform, triggersBounds: u2[t2(661)] }, { name: `text-wrap`, type: d2.textWrap, triggersBounds: u2.any }, { name: `text-overflow-wrap`, type: d2.textOverflowWrap, triggersBounds: u2.any }, { name: `text-max-width`, type: d2[t2(1092)], triggersBounds: u2.any }, { name: t2(1131), type: d2.size, triggersBounds: u2.any }, { name: t2(1076), type: d2[t2(472)], triggersBounds: u2.any }], g2 = [{ name: `text-valign`, type: d2.valign, triggersBounds: u2.any }, { name: `text-halign`, type: d2.halign, triggersBounds: u2.any }, { name: `color`, type: d2.color }, { name: `text-outline-color`, type: d2.color }, { name: `text-outline-opacity`, type: d2.zeroOneNumber }, { name: t2(874), type: d2.color }, { name: `text-background-opacity`, type: d2[t2(523)] }, { name: `text-background-padding`, type: d2.size, triggersBounds: u2.any }, { name: `text-border-opacity`, type: d2.zeroOneNumber }, { name: `text-border-color`, type: d2.color }, { name: `text-border-width`, type: d2.size, triggersBounds: u2.any }, { name: t2(585), type: d2.borderStyle, triggersBounds: u2.any }, { name: `text-background-shape`, type: d2.textBackgroundShape, triggersBounds: u2.any }, { name: `text-justification`, type: d2.justification }, { name: `box-select-labels`, type: d2[t2(1095)], triggersBounds: u2.any }], _2 = [{ name: `events`, type: d2.bool, triggersZOrder: u2.any }, { name: `text-events`, type: d2.bool, triggersZOrder: u2.any }, { name: `box-selection`, type: d2.boxSelection, triggersZOrder: u2.any }], v2 = [{ name: `display`, type: d2[t2(1182)], triggersZOrder: u2.any, triggersBounds: u2[t2(661)], triggersBoundsOfConnectedEdges: u2.any, triggersBoundsOfParallelEdges: function(e2, t3, n3) {
    return e2 === t3 ? false : n3.pstyle(`curve-style`).value === `bezier`;
  } }, { name: `visibility`, type: d2.visibility, triggersZOrder: u2[t2(661)] }, { name: `opacity`, type: d2.zeroOneNumber, triggersZOrder: u2.zeroNonZero }, { name: t2(495), type: d2[t2(523)] }, { name: `min-zoomed-font-size`, type: d2.size }, { name: `z-compound-depth`, type: d2[t2(926)], triggersZOrder: u2.any }, { name: `z-index-compare`, type: d2[t2(317)], triggersZOrder: u2.any }, { name: t2(854), type: d2[t2(1134)], triggersZOrder: u2.any }], y2 = [{ name: `overlay-padding`, type: d2.size, triggersBounds: u2.any }, { name: `overlay-color`, type: d2.color }, { name: `overlay-opacity`, type: d2.zeroOneNumber, triggersBounds: u2[t2(719)] }, { name: `overlay-shape`, type: d2.overlayShape, triggersBounds: u2.any }, { name: `overlay-corner-radius`, type: d2.cornerRadius }], b2 = [{ name: `underlay-padding`, type: d2.size, triggersBounds: u2.any }, { name: `underlay-color`, type: d2.color }, { name: `underlay-opacity`, type: d2.zeroOneNumber, triggersBounds: u2[t2(719)] }, { name: `underlay-shape`, type: d2.overlayShape, triggersBounds: u2[t2(661)] }, { name: `underlay-corner-radius`, type: d2.cornerRadius }], x2 = [{ name: `transition-property`, type: d2.propList }, { name: t2(1001), type: d2.time }, { name: t2(632), type: d2.time }, { name: `transition-timing-function`, type: d2.easing }], S2 = function(e2, t3) {
    return t3.value === `label` ? -e2.poolIndex() : t3.pfValue;
  }, C2 = [{ name: `height`, type: d2.nodeSize, triggersBounds: u2.any, hashOverride: S2 }, { name: `width`, type: d2.nodeSize, triggersBounds: u2.any, hashOverride: S2 }, { name: `shape`, type: d2.nodeShape, triggersBounds: u2.any }, { name: `shape-polygon-points`, type: d2[t2(648)], triggersBounds: u2.any }, { name: `corner-radius`, type: d2[t2(525)] }, { name: `background-color`, type: d2.color }, { name: `background-fill`, type: d2.fill }, { name: `background-opacity`, type: d2[t2(523)] }, { name: `background-blacken`, type: d2.nOneOneNumber }, { name: `background-gradient-stop-colors`, type: d2.colors }, { name: `background-gradient-stop-positions`, type: d2.percentages }, { name: `background-gradient-direction`, type: d2.gradientDirection }, { name: `padding`, type: d2.sizeMaybePercent, triggersBounds: u2[t2(661)] }, { name: `padding-relative-to`, type: d2.paddingRelativeTo, triggersBounds: u2.any }, { name: t2(693), type: d2.boundsExpansion, triggersBounds: u2.any }], w2 = [{ name: `border-color`, type: d2[t2(1097)] }, { name: `border-opacity`, type: d2.zeroOneNumber }, { name: `border-width`, type: d2.size, triggersBounds: u2[t2(661)] }, { name: `border-style`, type: d2.borderStyle }, { name: `border-cap`, type: d2.lineCap }, { name: `border-join`, type: d2[t2(1350)] }, { name: `border-dash-pattern`, type: d2[t2(691)] }, { name: `border-dash-offset`, type: d2[t2(1134)] }, { name: `border-position`, type: d2.linePosition }], T2 = [{ name: `outline-color`, type: d2.color }, { name: `outline-opacity`, type: d2.zeroOneNumber }, { name: `outline-width`, type: d2.size, triggersBounds: u2.any }, { name: t2(1149), type: d2[t2(243)] }, { name: t2(395), type: d2.size, triggersBounds: u2.any }], D2 = [{ name: `background-image`, type: d2.urls }, { name: `background-image-crossorigin`, type: d2.bgCrossOrigin }, { name: `background-image-opacity`, type: d2[t2(774)] }, { name: `background-image-containment`, type: d2.bgContainment }, { name: `background-image-smoothing`, type: d2.bools }, { name: `background-position-x`, type: d2.bgPos }, { name: `background-position-y`, type: d2.bgPos }, { name: `background-width-relative-to`, type: d2.bgRelativeTo }, { name: `background-height-relative-to`, type: d2.bgRelativeTo }, { name: `background-repeat`, type: d2[t2(1194)] }, { name: `background-fit`, type: d2.bgFit }, { name: `background-clip`, type: d2.bgClip }, { name: `background-width`, type: d2.bgWH }, { name: t2(1135), type: d2.bgWH }, { name: `background-offset-x`, type: d2.bgPos }, { name: `background-offset-y`, type: d2.bgPos }], O2 = [{ name: `position`, type: d2.position, triggersBounds: u2.any }, { name: t2(923), type: d2[t2(506)], triggersBounds: u2[t2(661)] }, { name: t2(1307), type: d2[t2(1092)], triggersBounds: u2[t2(661)] }, { name: `min-width-bias-left`, type: d2.sizeMaybePercent, triggersBounds: u2[t2(661)] }, { name: `min-width-bias-right`, type: d2.sizeMaybePercent, triggersBounds: u2[t2(661)] }, { name: `min-height`, type: d2.size, triggersBounds: u2[t2(661)] }, { name: `min-height-bias-top`, type: d2.sizeMaybePercent, triggersBounds: u2.any }, { name: `min-height-bias-bottom`, type: d2[t2(760)], triggersBounds: u2.any }], k2 = [{ name: `line-style`, type: d2.lineStyle }, { name: `line-color`, type: d2.color }, { name: t2(1281), type: d2.fill }, { name: `line-cap`, type: d2.lineCap }, { name: t2(1364), type: d2.zeroOneNumber }, { name: `line-dash-pattern`, type: d2.numbers }, { name: `line-dash-offset`, type: d2[t2(1134)] }, { name: `line-outline-width`, type: d2.size }, { name: t2(864), type: d2.color }, { name: t2(1111), type: d2.colors }, { name: `line-gradient-stop-positions`, type: d2.percentages }, { name: `curve-style`, type: d2.curveStyle, triggersBounds: u2.any, triggersBoundsOfParallelEdges: function(e2, n3) {
    return e2 === n3 ? false : e2 === `bezier` || n3 === t2(1167);
  } }, { name: `haystack-radius`, type: d2.zeroOneNumber, triggersBounds: u2.any }, { name: `source-endpoint`, type: d2.edgeEndpoint, triggersBounds: u2.any }, { name: `target-endpoint`, type: d2[t2(237)], triggersBounds: u2[t2(661)] }, { name: t2(1177), type: d2.size, triggersBounds: u2[t2(661)] }, { name: t2(320), type: d2.bidirectionalSizes, triggersBounds: u2.any }, { name: `control-point-weights`, type: d2.numbers, triggersBounds: u2.any }, { name: `segment-distances`, type: d2.bidirectionalSizes, triggersBounds: u2.any }, { name: `segment-weights`, type: d2.numbers, triggersBounds: u2.any }, { name: `segment-radii`, type: d2.numbers, triggersBounds: u2.any }, { name: `radius-type`, type: d2.radiusType, triggersBounds: u2.any }, { name: `taxi-turn`, type: d2.bidirectionalSizeMaybePercent, triggersBounds: u2[t2(661)] }, { name: `taxi-turn-min-distance`, type: d2.size, triggersBounds: u2.any }, { name: `taxi-direction`, type: d2.axisDirection, triggersBounds: u2.any }, { name: `taxi-radius`, type: d2[t2(1134)], triggersBounds: u2.any }, { name: `edge-distances`, type: d2[t2(1301)], triggersBounds: u2.any }, { name: `arrow-scale`, type: d2.positiveNumber, triggersBounds: u2.any }, { name: t2(717), type: d2.angle, triggersBounds: u2[t2(661)] }, { name: `loop-sweep`, type: d2.angle, triggersBounds: u2.any }, { name: t2(413), type: d2.size, triggersBounds: u2.any }, { name: `target-distance-from-node`, type: d2.size, triggersBounds: u2.any }], A2 = [{ name: `ghost`, type: d2.bool, triggersBounds: u2.any }, { name: `ghost-offset-x`, type: d2.bidirectionalSize, triggersBounds: u2.any }, { name: `ghost-offset-y`, type: d2.bidirectionalSize, triggersBounds: u2.any }, { name: `ghost-opacity`, type: d2.zeroOneNumber }], j2 = [{ name: `selection-box-color`, type: d2[t2(1097)] }, { name: `selection-box-opacity`, type: d2.zeroOneNumber }, { name: `selection-box-border-color`, type: d2.color }, { name: `selection-box-border-width`, type: d2.size }, { name: `active-bg-color`, type: d2.color }, { name: `active-bg-opacity`, type: d2.zeroOneNumber }, { name: `active-bg-size`, type: d2.size }, { name: `outside-texture-bg-color`, type: d2.color }, { name: `outside-texture-bg-opacity`, type: d2.zeroOneNumber }], M2 = [];
  Xu.pieBackgroundN = 16, M2[t2(254)]({ name: `pie-size`, type: d2.sizeMaybePercent }), M2[t2(254)]({ name: `pie-hole`, type: d2.sizeMaybePercent }), M2.push({ name: `pie-start-angle`, type: d2.angle });
  for (var N2 = 1; N2 <= Xu.pieBackgroundN; N2++) M2.push({ name: t2(458) + N2 + `-background-color`, type: d2.color }), M2.push({ name: t2(458) + N2 + `-background-size`, type: d2.percent }), M2.push({ name: `pie-` + N2 + `-background-opacity`, type: d2.zeroOneNumber });
  var P2 = [];
  Xu.stripeBackgroundN = 16, P2.push({ name: `stripe-size`, type: d2.sizeMaybePercent }), P2.push({ name: t2(1319), type: d2.axisDirectionPrimary });
  for (var F2 = 1; F2 <= Xu.stripeBackgroundN; F2++) P2[t2(254)]({ name: t2(1379) + F2 + `-background-color`, type: d2[t2(1097)] }), P2.push({ name: `stripe-` + F2 + `-background-size`, type: d2.percent }), P2.push({ name: `stripe-` + F2 + `-background-opacity`, type: d2.zeroOneNumber });
  var I2 = [], L2 = Xu.arrowPrefixes = [`source`, `mid-source`, `target`, `mid-target`];
  [{ name: `arrow-shape`, type: d2[t2(306)], triggersBounds: u2.any }, { name: `arrow-color`, type: d2.color }, { name: `arrow-fill`, type: d2[t2(1148)] }, { name: `arrow-width`, type: d2.arrowWidth }].forEach(function(e2) {
    L2.forEach(function(t3) {
      var n3 = $, r3 = t3 + `-` + e2[n3(958)], i3 = e2[n3(497)], a3 = e2.triggersBounds;
      I2[n3(254)]({ name: r3, type: i3, triggersBounds: a3 });
    });
  }, {});
  var R2 = Xu.properties = [].concat(_2, x2, v2, y2, b2, A2, g2, h2, f2, p2, m2, C2, w2, T2, D2, M2, P2, O2, k2, I2, j2), z2 = Xu.propertyGroups = { behavior: _2, transition: x2, visibility: v2, overlay: y2, underlay: b2, ghost: A2, commonLabel: g2, labelDimensions: h2, mainLabel: f2, sourceLabel: p2, targetLabel: m2, nodeBody: C2, nodeBorder: w2, nodeOutline: T2, backgroundImage: D2, pie: M2, stripe: P2, compound: O2, edgeLine: k2, edgeArrow: I2, core: j2 }, V2 = Xu.propertyGroupNames = {};
  (Xu.propertyGroupKeys = Object.keys(z2)).forEach(function(e2) {
    var n3 = t2;
    V2[e2] = z2[e2][n3(393)](function(e3) {
      return e3.name;
    }), z2[e2].forEach(function(t3) {
      return t3.groupKey = e2;
    });
  });
  var H2 = Xu[t2(517)] = [{ name: `content`, pointsTo: t2(1220) }, { name: `control-point-distance`, pointsTo: `control-point-distances` }, { name: t2(929), pointsTo: `control-point-weights` }, { name: `segment-distance`, pointsTo: `segment-distances` }, { name: t2(1230), pointsTo: t2(563) }, { name: `segment-radius`, pointsTo: `segment-radii` }, { name: t2(1269), pointsTo: `text-rotation` }, { name: `padding-left`, pointsTo: `padding` }, { name: t2(1062), pointsTo: `padding` }, { name: `padding-top`, pointsTo: `padding` }, { name: `padding-bottom`, pointsTo: `padding` }];
  Xu[t2(319)] = R2.map(function(e2) {
    return e2[t2(958)];
  });
  for (var U2 = 0; U2 < R2.length; U2++) {
    var W2 = R2[U2];
    R2[W2.name] = W2;
  }
  for (var G2 = 0; G2 < H2.length; G2++) {
    var K2 = H2[G2], q2 = R2[K2.pointsTo], J2 = { name: K2.name, alias: true, pointsTo: q2 };
    R2.push(J2), R2[K2.name] = J2;
  }
})(), Xu.getDefaultProperty = function(e2) {
  return this.getDefaultProperties()[e2];
}, Xu.getDefaultProperties = function() {
  var t2 = e, n2 = this._private;
  if (n2.defaultProperties != null) return n2.defaultProperties;
  for (var r2 = Z({ "selection-box-color": t2(1093), "selection-box-opacity": 0.65, "selection-box-border-color": t2(1378), "selection-box-border-width": 1, "active-bg-color": t2(640), "active-bg-opacity": 0.15, "active-bg-size": 30, "outside-texture-bg-color": t2(1327), "outside-texture-bg-opacity": 0.125, events: `yes`, "text-events": `no`, "text-valign": t2(951), "text-halign": `center`, "text-justification": `auto`, "line-height": 1, color: `#000`, "box-selection": t2(1152), "text-outline-color": `#000`, "text-outline-width": 0, "text-outline-opacity": 1, "text-opacity": 1, "text-decoration": `none`, "text-transform": t2(875), "text-wrap": `none`, "text-overflow-wrap": `whitespace`, "text-max-width": 9999, "text-background-color": `#000`, "text-background-opacity": 0, "text-background-shape": t2(832), "text-background-padding": 0, "text-border-opacity": 0, "text-border-width": 0, "text-border-style": `solid`, "text-border-color": `#000`, "font-family": `Helvetica Neue, Helvetica, sans-serif`, "font-style": `normal`, "font-weight": `normal`, "font-size": 16, "min-zoomed-font-size": 0, "text-rotation": `none`, "source-text-rotation": `none`, "target-text-rotation": `none`, visibility: `visible`, display: `element`, opacity: 1, "z-compound-depth": `auto`, "z-index-compare": t2(1037), "z-index": 0, label: ``, "text-margin-x": 0, "text-margin-y": 0, "source-label": ``, "source-text-offset": 0, "source-text-margin-x": 0, "source-text-margin-y": 0, "target-label": ``, "target-text-offset": 0, "target-text-margin-x": 0, "target-text-margin-y": 0, "overlay-opacity": 0, "overlay-color": `#000`, "overlay-padding": 10, "overlay-shape": `round-rectangle`, "overlay-corner-radius": `auto`, "underlay-opacity": 0, "underlay-color": `#000`, "underlay-padding": 10, "underlay-shape": `round-rectangle`, "underlay-corner-radius": `auto`, "transition-property": `none`, "transition-duration": 0, "transition-delay": 0, "transition-timing-function": t2(1329), "box-select-labels": `no`, "background-blacken": 0, "background-color": `#999`, "background-fill": `solid`, "background-opacity": 1, "background-image": `none`, "background-image-crossorigin": `anonymous`, "background-image-opacity": 1, "background-image-containment": `inside`, "background-image-smoothing": `yes`, "background-position-x": `50%`, "background-position-y": `50%`, "background-offset-x": 0, "background-offset-y": 0, "background-width-relative-to": `include-padding`, "background-height-relative-to": `include-padding`, "background-repeat": `no-repeat`, "background-fit": `none`, "background-clip": `node`, "background-width": `auto`, "background-height": `auto`, "border-color": `#000`, "border-opacity": 1, "border-width": 0, "border-style": `solid`, "border-dash-pattern": [4, 2], "border-dash-offset": 0, "border-cap": t2(412), "border-join": t2(325), "border-position": `center`, "outline-color": t2(504), "outline-opacity": 1, "outline-width": 0, "outline-offset": 0, "outline-style": `solid`, height: 30, width: 30, shape: `ellipse`, "shape-polygon-points": `-1, -1,   1, -1,   1, 1,   -1, 1`, "corner-radius": `auto`, "bounds-expansion": 0, "background-gradient-direction": `to-bottom`, "background-gradient-stop-colors": `#999`, "background-gradient-stop-positions": `0%`, ghost: `no`, "ghost-offset-y": 0, "ghost-offset-x": 0, "ghost-opacity": 0, padding: 0, "padding-relative-to": `width`, position: t2(872), "compound-sizing-wrt-labels": t2(251), "min-width": 0, "min-width-bias-left": 0, "min-width-bias-right": 0, "min-height": 0, "min-height-bias-top": 0, "min-height-bias-bottom": 0 }, { "pie-size": `100%`, "pie-hole": 0, "pie-start-angle": `0deg` }, [{ name: `pie-{{i}}-background-color`, value: `black` }, { name: `pie-{{i}}-background-size`, value: `0%` }, { name: `pie-{{i}}-background-opacity`, value: 1 }][t2(242)](function(e2, n3) {
    for (var r3 = t2, i3 = 1; i3 <= Xu.pieBackgroundN; i3++) {
      var a3 = n3.name.replace(`{{i}}`, i3);
      e2[a3] = n3[r3(1310)];
    }
    return e2;
  }, {}), { "stripe-size": `100%`, "stripe-direction": `horizontal` }, [{ name: t2(1236), value: `black` }, { name: `stripe-{{i}}-background-size`, value: `0%` }, { name: `stripe-{{i}}-background-opacity`, value: 1 }][t2(242)](function(e2, n3) {
    for (var r3 = t2, i3 = 1; i3 <= Xu.stripeBackgroundN; i3++) {
      var a3 = n3.name[r3(440)](r3(1150), i3);
      e2[a3] = n3.value;
    }
    return e2;
  }, {}), { "line-style": `solid`, "line-color": `#999`, "line-fill": t2(788), "line-cap": t2(412), "line-opacity": 1, "line-outline-width": 0, "line-outline-color": `#000`, "line-gradient-stop-colors": `#999`, "line-gradient-stop-positions": `0%`, "control-point-step-size": 40, "control-point-weights": 0.5, "segment-weights": 0.5, "segment-distances": 20, "segment-radii": 15, "radius-type": `arc-radius`, "taxi-turn": `50%`, "taxi-radius": 15, "taxi-turn-min-distance": 10, "taxi-direction": `auto`, "edge-distances": `intersection`, "curve-style": `haystack`, "haystack-radius": 0, "arrow-scale": 1, "loop-direction": `-45deg`, "loop-sweep": t2(239), "source-distance-from-node": 0, "target-distance-from-node": 0, "source-endpoint": `outside-to-node`, "target-endpoint": `outside-to-node`, "line-dash-pattern": [6, 3], "line-dash-offset": 0 }, [{ name: t2(503), value: t2(875) }, { name: t2(779), value: `#999` }, { name: `arrow-fill`, value: t2(866) }, { name: `arrow-width`, value: 1 }][t2(242)](function(e2, t3) {
    return Xu.arrowPrefixes.forEach(function(n3) {
      var r3 = $, i3 = n3 + `-` + t3[r3(958)];
      e2[i3] = t3.value;
    }), e2;
  }, {})), i2 = {}, a2 = 0; a2 < this.properties.length; a2++) {
    var o2 = this.properties[a2];
    if (!o2.pointsTo) {
      var s2 = o2[t2(958)], c2 = r2[s2];
      i2[s2] = this[t2(1168)](s2, c2);
    }
  }
  return n2.defaultProperties = i2, n2[t2(606)];
}, Xu.addDefaultStylesheet = function() {
  var t2 = e;
  this.selector(t2(801)).css({ shape: `rectangle`, padding: 10, "background-color": t2(879), "border-color": `#ccc`, "border-width": 1 }).selector(`edge`).css({ width: 3 }).selector(`:loop`)[t2(943)]({ "curve-style": t2(1167) }).selector(`edge:compound`).css({ "curve-style": `bezier`, "source-endpoint": `outside-to-line`, "target-endpoint": `outside-to-line` }).selector(`:selected`).css({ "background-color": t2(1200), "line-color": t2(1200), "source-arrow-color": t2(1200), "target-arrow-color": t2(1200), "mid-source-arrow-color": `#0169D9`, "mid-target-arrow-color": `#0169D9` }).selector(`:parent:selected`).css({ "background-color": `#CCE1F9`, "border-color": `#aec8e5` }).selector(`:active`).css({ "overlay-color": `black`, "overlay-padding": 10, "overlay-opacity": 0.25 }), this[t2(738)] = this.length;
};
var Zu = {};
Zu.parse = function(t2, n2, r2, i2) {
  var a2 = e, o2 = this;
  if (D(n2)) return o2.parseImplWarn(t2, n2, r2, i2);
  var s2 = i2 === `mapping` || i2 === true || i2 === false || i2 == null ? `dontcare` : i2, c2 = r2 ? `t` : `f`, l2 = wt(t2, `` + n2, c2, s2), u2 = o2.propCache = o2.propCache || [], d2;
  return (d2 = u2[l2]) || (d2 = u2[l2] = o2[a2(321)](t2, n2, r2, i2)), (r2 || i2 === `mapping`) && (d2 = Vt(d2), d2 && (d2.value = Vt(d2.value))), d2;
}, Zu.parseImplWarn = function(e2, t2, n2, r2) {
  var i2 = this.parseImpl(e2, t2, n2, r2);
  return !i2 && t2 != null && zt("The style property `" + e2 + `: ` + t2 + "` is invalid"), i2 && (i2.name === `width` || i2.name === `height`) && t2 === `label` && zt("The style value of `label` is deprecated for `" + i2.name + "`"), i2;
}, Zu.parseImpl = function(t2, n2, r2, i2) {
  var a2 = e, o2 = this;
  t2 = K(t2);
  var s2 = o2.properties[t2], c2 = n2, l2 = o2.types;
  if (!s2 || n2 === void 0) return null;
  s2[a2(561)] && (s2 = s2.pointsTo, t2 = s2.name);
  var u2 = E(n2);
  u2 && (n2 = n2[a2(1026)]());
  var d2 = s2[a2(497)];
  if (!d2) return null;
  if (r2 && (n2 === `` || n2 === null)) return { name: t2, value: n2, bypass: true, deleteBypass: true };
  if (D(n2)) return { name: t2, value: n2, strValue: `fn`, mapped: l2.fn, bypass: r2 };
  var f2, p2;
  if (!(!u2 || i2 || n2.length < 7 || n2[1] !== `a`)) {
    if (n2.length >= 7 && n2[0] === `d` && (f2 = new RegExp(l2.data.regex)[a2(876)](n2))) {
      if (r2) return false;
      var m2 = l2[a2(1036)];
      return { name: t2, value: f2, strValue: `` + n2, mapped: m2, field: f2[1], bypass: r2 };
    } else if (n2.length >= 10 && n2[0] === `m` && (p2 = new RegExp(l2.mapData.regex).exec(n2))) {
      if (r2 || d2.multiple) return false;
      var h2 = l2.mapData;
      if (!(d2.color || d2.number)) return false;
      var g2 = this.parse(t2, p2[4]);
      if (!g2 || g2.mapped) return false;
      var _2 = this.parse(t2, p2[5]);
      if (!_2 || _2.mapped) return false;
      if (g2.pfValue === _2.pfValue || g2.strValue === _2.strValue) return zt("`" + t2 + `: ` + n2 + "` is not a valid mapper because the output range is zero; converting to `" + t2 + `: ` + g2.strValue + "`"), this.parse(t2, g2.strValue);
      if (d2[a2(1097)]) {
        var v2 = g2.value, y2 = _2.value;
        if (v2[0] === y2[0] && v2[1] === y2[1] && v2[2] === y2[2] && (v2[3] === y2[3] || (v2[3] == null || v2[3] === 1) && (y2[3] == null || y2[3] === 1))) return false;
      }
      return { name: t2, value: p2, strValue: `` + n2, mapped: h2, field: p2[1], fieldMin: parseFloat(p2[2]), fieldMax: parseFloat(p2[3]), valueMin: g2[a2(1310)], valueMax: _2.value, bypass: r2 };
    }
  }
  if (d2.multiple && i2 !== `multiple`) {
    var b2 = u2 ? n2.split(/\s+/) : O(n2) ? n2 : [n2];
    if (d2.evenMultiple && b2.length % 2 != 0) return null;
    for (var x2 = [], S2 = [], C2 = [], w2 = ``, T2 = false, k2 = 0; k2 < b2.length; k2++) {
      var A2 = o2.parse(t2, b2[k2], r2, `multiple`);
      T2 || (T2 = E(A2.value)), x2.push(A2[a2(1310)]), C2.push(A2.pfValue == null ? A2.value : A2.pfValue), S2.push(A2.units), w2 += (k2 > 0 ? ` ` : ``) + A2.strValue;
    }
    return d2.validate && !d2.validate(x2, S2) ? null : d2.singleEnum && T2 ? x2.length === 1 && E(x2[0]) ? { name: t2, value: x2[0], strValue: x2[0], bypass: r2 } : null : { name: t2, value: x2, pfValue: C2, strValue: w2, bypass: r2, units: S2 };
  }
  var j2 = function() {
    for (var e2 = 0; e2 < d2.enums.length; e2++) if (d2.enums[e2] === n2) return { name: t2, value: n2, strValue: `` + n2, bypass: r2 };
    return null;
  };
  if (d2.number) {
    var N2, P2 = `px`;
    if (d2.units && (N2 = d2.units), d2.implicitUnits && (P2 = d2.implicitUnits), !d2.unitless) if (u2) {
      var F2 = a2(197) + (d2.allowPercent ? `|\\%` : ``);
      N2 && (F2 = N2);
      var I2 = n2.match(`^(` + X + `)(` + F2 + `)?$`);
      I2 && (n2 = I2[1], N2 = I2[2] || P2);
    } else (!N2 || d2.implicitUnits) && (N2 = P2);
    if (n2 = parseFloat(n2), isNaN(n2) && d2[a2(1178)] === void 0) return null;
    if (isNaN(n2) && d2.enums !== void 0) return n2 = c2, j2();
    if (d2.integer && !M(n2) || d2.min !== void 0 && (n2 < d2.min || d2.strictMin && n2 === d2.min) || d2[a2(701)] !== void 0 && (n2 > d2.max || d2.strictMax && n2 === d2.max)) return null;
    var L2 = { name: t2, value: n2, strValue: `` + n2 + (N2 || ``), units: N2, bypass: r2 };
    return d2.unitless || N2 !== `px` && N2 !== `em` ? L2.pfValue = n2 : L2.pfValue = N2 === `px` || !N2 ? n2 : this.getEmSizeInPixels() * n2, (N2 === `ms` || N2 === `s`) && (L2.pfValue = N2 === `ms` ? n2 : 1e3 * n2), (N2 === `deg` || N2 === `rad`) && (L2.pfValue = N2 === `rad` ? n2 : Fn(n2)), N2 === `%` && (L2.pfValue = n2 / 100), L2;
  } else if (d2.propList) {
    var R2 = [], z2 = `` + n2;
    if (z2 !== `none`) {
      for (var B2 = z2[a2(469)](/\s*,\s*|\s+/), V2 = 0; V2 < B2[a2(441)]; V2++) {
        var H2 = B2[V2].trim();
        o2[a2(1104)][H2] ? R2.push(H2) : zt("`" + H2 + a2(752));
      }
      if (R2[a2(441)] === 0) return null;
    }
    return { name: t2, value: R2, strValue: R2.length === 0 ? a2(875) : R2.join(` `), bypass: r2 };
  } else if (d2.color) {
    var U2 = pe(n2);
    return U2 ? { name: t2, value: U2, pfValue: U2, strValue: `rgb(` + U2[0] + `,` + U2[1] + `,` + U2[2] + `)`, bypass: r2 } : null;
  } else if (d2.regex || d2.regexes) {
    if (d2[a2(1178)]) {
      var W2 = j2();
      if (W2) return W2;
    }
    for (var G2 = d2.regexes ? d2.regexes : [d2.regex], q2 = 0; q2 < G2[a2(441)]; q2++) {
      var J2 = new RegExp(G2[q2]).exec(n2);
      if (J2) return { name: t2, value: d2.singleRegexMatchValue ? J2[1] : J2, strValue: `` + n2, bypass: r2 };
    }
    return null;
  } else if (d2.string) return { name: t2, value: `` + n2, strValue: `` + n2, bypass: r2 };
  else if (d2.enums) return j2();
  else return null;
};
var Qu = function(t2) {
  var n2 = e;
  if (!(this instanceof Qu)) return new Qu(t2);
  if (!L(t2)) {
    Lt(`A style must have a core reference`);
    return;
  }
  this._private = { cy: t2, coreStyle: {} }, this[n2(441)] = 0, this.resetToDefault();
}, $u = Qu.prototype;
$u[e(363)] = function() {
  return `style`;
}, $u.clear = function() {
  for (var t2 = e, n2 = this._private, r2 = n2.cy[t2(1249)](), i2 = 0; i2 < this.length; i2++) this[i2] = void 0;
  return this.length = 0, n2.contextStyles = {}, n2.propDiffs = {}, this.cleanElements(r2, true), r2.forEach(function(e2) {
    var n3 = t2, r3 = e2[0]._private;
    r3[n3(1165)] = true, r3.appliedInitStyle = false;
  }), this;
}, $u[e(1293)] = function() {
  return this.clear(), this.addDefaultStylesheet(), this;
}, $u.core = function(e2) {
  return this._private.coreStyle[e2] || this.getDefaultProperty(e2);
}, $u.selector = function(t2) {
  var n2 = e, r2 = t2 === `core` ? null : new Lc(t2), i2 = this[n2(441)]++;
  return this[i2] = { selector: r2, properties: [], mappedProperties: [], index: i2 }, this;
}, $u.css = function() {
  var t2 = e, n2 = this, r2 = arguments;
  if (r2[t2(441)] === 1) for (var i2 = r2[0], a2 = 0; a2 < n2[t2(1104)].length; a2++) {
    var o2 = n2[t2(1104)][a2], s2 = i2[o2.name];
    s2 === void 0 && (s2 = i2[q(o2.name)]), s2 !== void 0 && this[t2(1140)](o2.name, s2);
  }
  else r2.length === 2 && this[t2(1140)](r2[0], r2[1]);
  return this;
}, $u.style = $u[e(943)], $u.cssRule = function(t2, n2) {
  var r2 = e, i2 = this[r2(1168)](t2, n2);
  if (i2) {
    var a2 = this.length - 1;
    this[a2][r2(1104)].push(i2), this[a2][r2(1104)][i2[r2(958)]] = i2, i2.name[r2(1146)](/pie-(\d+)-background-size/) && i2.value && (this._private.hasPie = true), i2.name.match(/stripe-(\d+)-background-size/) && i2.value && (this._private.hasStripe = true), i2[r2(1297)] && this[a2].mappedProperties.push(i2), this[a2].selector || (this._private.coreStyle[i2[r2(958)]] = i2);
  }
  return this;
}, $u[e(1304)] = function(e2) {
  return R(e2) ? e2.appendToStyle(this) : O(e2) ? this.appendFromJson(e2) : E(e2) && this.appendFromString(e2), this;
}, Qu.fromJson = function(e2, t2) {
  var n2 = new Qu(e2);
  return n2.fromJson(t2), n2;
}, Qu[e(954)] = function(e2, t2) {
  return new Qu(e2).fromString(t2);
}, [Hu, Gu, Ku, qu, Ju, Yu, Xu, Zu][e(1390)](function(e2) {
  Z($u, e2);
}), Qu.types = $u[e(315)], Qu.properties = $u[e(1104)], Qu.propertyGroups = $u.propertyGroups, Qu.propertyGroupNames = $u.propertyGroupNames, Qu.propertyGroupKeys = $u.propertyGroupKeys;
var ed = { style: function(t2) {
  var n2 = e;
  return t2 && this.setStyle(t2).update(), this[n2(820)].style;
}, setStyle: function(t2) {
  var n2 = e, r2 = this._private;
  return R(t2) ? r2.style = t2.generateStyle(this) : O(t2) ? r2[n2(1353)] = Qu.fromJson(this, t2) : E(t2) ? r2.style = Qu.fromString(this, t2) : r2.style = Qu(this), r2.style;
}, updateStyle: function() {
  var t2 = e;
  this[t2(1123)]().updateStyle();
} }, td = `single`, nd = { autolock: function(t2) {
  var n2 = e;
  if (t2 !== void 0) this[n2(820)].autolock = !!t2;
  else return this._private[n2(768)];
  return this;
}, autoungrabify: function(e2) {
  if (e2 !== void 0) this._private.autoungrabify = !!e2;
  else return this._private.autoungrabify;
  return this;
}, autounselectify: function(t2) {
  var n2 = e;
  if (t2 !== void 0) this[n2(820)].autounselectify = !!t2;
  else return this._private.autounselectify;
  return this;
}, selectionType: function(t2) {
  var n2 = e, r2 = this._private;
  if (r2.selectionType ?? (r2.selectionType = td), t2 !== void 0) (t2 === `additive` || t2 === `single`) && (r2[n2(1028)] = t2);
  else return r2.selectionType;
  return this;
}, panningEnabled: function(e2) {
  if (e2 !== void 0) this._private.panningEnabled = !!e2;
  else return this._private.panningEnabled;
  return this;
}, userPanningEnabled: function(e2) {
  if (e2 !== void 0) this._private.userPanningEnabled = !!e2;
  else return this._private.userPanningEnabled;
  return this;
}, zoomingEnabled: function(t2) {
  var n2 = e;
  if (t2 !== void 0) this._private[n2(1034)] = !!t2;
  else return this[n2(820)].zoomingEnabled;
  return this;
}, userZoomingEnabled: function(t2) {
  var n2 = e;
  if (t2 !== void 0) this._private.userZoomingEnabled = !!t2;
  else return this[n2(820)].userZoomingEnabled;
  return this;
}, boxSelectionEnabled: function(e2) {
  if (e2 !== void 0) this._private.boxSelectionEnabled = !!e2;
  else return this._private.boxSelectionEnabled;
  return this;
}, pan: function() {
  var t2 = e, n2 = arguments, r2 = this._private.pan, i2, a2, o2, s2, c2;
  switch (n2.length) {
    case 0:
      return r2;
    case 1:
      if (E(n2[0])) return i2 = n2[0], r2[i2];
      if (k(n2[0])) {
        if (!this._private.panningEnabled) return this;
        o2 = n2[0], s2 = o2.x, c2 = o2.y, j(s2) && (r2.x = s2), j(c2) && (r2.y = c2), this.emit(`pan viewport`);
      }
      break;
    case 2:
      if (!this._private.panningEnabled) return this;
      i2 = n2[0], a2 = n2[1], (i2 === `x` || i2 === `y`) && j(a2) && (r2[i2] = a2), this[t2(818)](`pan viewport`);
      break;
  }
  return this.notify(`viewport`), this;
}, panBy: function(t2, n2) {
  var r2 = e, i2 = arguments, a2 = this._private.pan, o2, s2, c2, l2, u2;
  if (!this._private[r2(1354)]) return this;
  switch (i2.length) {
    case 1:
      k(t2) && (c2 = i2[0], l2 = c2.x, u2 = c2.y, j(l2) && (a2.x += l2), j(u2) && (a2.y += u2), this.emit(`pan viewport`));
      break;
    case 2:
      o2 = t2, s2 = n2, (o2 === `x` || o2 === `y`) && j(s2) && (a2[o2] += s2), this.emit(`pan viewport`);
      break;
  }
  return this[r2(541)](`viewport`), this;
}, gc: function() {
  this.notify(`gc`);
}, fit: function(t2, n2) {
  var r2 = e, i2 = this.getFitViewport(t2, n2);
  if (i2) {
    var a2 = this._private;
    a2.zoom = i2[r2(1242)], a2.pan = i2.pan, this.emit(`pan zoom viewport`), this[r2(541)](r2(560));
  }
  return this;
}, getFitViewport: function(t2, n2) {
  var r2 = e;
  if (j(t2) && n2 === void 0 && (n2 = t2, t2 = void 0), !(!this._private.panningEnabled || !this._private.zoomingEnabled)) {
    var i2;
    if (E(t2)) {
      var a2 = t2;
      t2 = this.$(a2);
    } else if (H(t2)) {
      var o2 = t2;
      i2 = { x1: o2.x1, y1: o2.y1, x2: o2.x2, y2: o2.y2 }, i2.w = i2.x2 - i2.x1, i2.h = i2.y2 - i2.y1;
    } else P(t2) || (t2 = this.mutableElements());
    if (!(P(t2) && t2.empty())) {
      i2 || (i2 = t2.boundingBox());
      var s2 = this.width(), c2 = this.height(), l2;
      if (n2 = j(n2) ? n2 : 0, !isNaN(s2) && !isNaN(c2) && s2 > 0 && c2 > 0 && !isNaN(i2.w) && !isNaN(i2.h) && i2.w > 0 && i2.h > 0) {
        l2 = Math[r2(1120)]((s2 - 2 * n2) / i2.w, (c2 - 2 * n2) / i2.h), l2 = l2 > this._private[r2(910)] ? this._private.maxZoom : l2, l2 = l2 < this._private.minZoom ? this._private[r2(463)] : l2;
        var u2 = { x: (s2 - l2 * (i2.x1 + i2.x2)) / 2, y: (c2 - l2 * (i2.y1 + i2.y2)) / 2 };
        return { zoom: l2, pan: u2 };
      }
    }
  }
}, zoomRange: function(t2, n2) {
  var r2 = e, i2 = this._private;
  if (n2 == null) {
    var a2 = t2;
    t2 = a2.min, n2 = a2.max;
  }
  return j(t2) && j(n2) && t2 <= n2 ? (i2.minZoom = t2, i2.maxZoom = n2) : j(t2) && n2 === void 0 && t2 <= i2.maxZoom ? i2[r2(463)] = t2 : j(n2) && t2 === void 0 && n2 >= i2[r2(463)] && (i2[r2(910)] = n2), this;
}, minZoom: function(e2) {
  return e2 === void 0 ? this._private.minZoom : this.zoomRange({ min: e2 });
}, maxZoom: function(t2) {
  var n2 = e;
  return t2 === void 0 ? this[n2(820)].maxZoom : this[n2(1412)]({ max: t2 });
}, getZoomedViewport: function(t2) {
  var n2 = e, r2 = this._private, i2 = r2.pan, a2 = r2.zoom, o2, s2, c2 = false;
  if (r2.zoomingEnabled || (c2 = true), j(t2) ? s2 = t2 : k(t2) && (s2 = t2[n2(303)], t2[n2(225)] == null ? t2.renderedPosition != null && (o2 = t2.renderedPosition) : o2 = On(t2[n2(225)], a2, i2), o2 != null && !r2.panningEnabled && (c2 = true)), s2 = s2 > r2.maxZoom ? r2.maxZoom : s2, s2 = s2 < r2.minZoom ? r2.minZoom : s2, c2 || !j(s2) || s2 === a2 || o2 != null && (!j(o2.x) || !j(o2.y))) return null;
  if (o2 != null) {
    var l2 = i2, u2 = a2, d2 = s2;
    return { zoomed: true, panned: true, zoom: d2, pan: { x: -d2 / u2 * (o2.x - l2.x) + o2.x, y: -d2 / u2 * (o2.y - l2.y) + o2.y } };
  } else return { zoomed: true, panned: false, zoom: s2, pan: i2 };
}, zoom: function(t2) {
  var n2 = e;
  if (t2 === void 0) return this._private[n2(1242)];
  var r2 = this.getZoomedViewport(t2), i2 = this._private;
  return r2 == null || !r2[n2(1089)] ? this : (i2.zoom = r2.zoom, r2[n2(749)] && (i2.pan.x = r2.pan.x, i2.pan.y = r2.pan.y), this.emit(`zoom` + (r2.panned ? ` pan` : ``) + ` viewport`), this.notify(`viewport`), this);
}, viewport: function(t2) {
  var n2 = e, r2 = this._private, i2 = true, a2 = true, o2 = [], s2 = false, c2 = false;
  if (!t2 || (j(t2.zoom) || (i2 = false), k(t2.pan) || (a2 = false), !i2 && !a2)) return this;
  if (i2) {
    var l2 = t2.zoom;
    l2 < r2.minZoom || l2 > r2[n2(910)] || !r2.zoomingEnabled ? s2 = true : (r2.zoom = l2, o2[n2(254)](`zoom`));
  }
  if (a2 && (!s2 || !t2.cancelOnFailedZoom) && r2.panningEnabled) {
    var u2 = t2.pan;
    j(u2.x) && (r2.pan.x = u2.x, c2 = false), j(u2.y) && (r2.pan.y = u2.y, c2 = false), c2 || o2[n2(254)](`pan`);
  }
  return o2.length > 0 && (o2.push(`viewport`), this.emit(o2.join(` `)), this.notify(`viewport`)), this;
}, center: function(t2) {
  var n2 = e, r2 = this.getCenterPan(t2);
  return r2 && (this._private.pan = r2, this[n2(818)](`pan viewport`), this.notify(`viewport`)), this;
}, getCenterPan: function(t2, n2) {
  var r2 = e;
  if (this[r2(820)][r2(1354)]) {
    if (E(t2)) {
      var i2 = t2;
      t2 = this.mutableElements().filter(i2);
    } else P(t2) || (t2 = this[r2(1123)]());
    if (t2.length !== 0) {
      var a2 = t2.boundingBox(), o2 = this.width(), s2 = this.height();
      return n2 = n2 === void 0 ? this._private.zoom : n2, { x: (o2 - n2 * (a2.x1 + a2.x2)) / 2, y: (s2 - n2 * (a2.y1 + a2.y2)) / 2 };
    }
  }
}, reset: function() {
  var t2 = e;
  return !this._private.panningEnabled || !this._private.zoomingEnabled || this[t2(560)]({ pan: { x: 0, y: 0 }, zoom: 1 }), this;
}, invalidateSize: function() {
  this._private.sizeCache = null;
}, size: function() {
  var e2 = this._private, t2 = e2.container, n2 = this;
  return e2.sizeCache = e2.sizeCache || (t2 ? (function() {
    var e3 = $, r2 = n2.window().getComputedStyle(t2), i2 = function(e4) {
      return parseFloat(r2.getPropertyValue(e4));
    };
    return { width: t2[e3(567)] - i2(e3(1415)) - i2(`padding-right`), height: t2.clientHeight - i2(`padding-top`) - i2(e3(399)) };
  })() : { width: 1, height: 1 });
}, width: function() {
  var t2 = e;
  return this[t2(1092)]().width;
}, height: function() {
  return this.size().height;
}, extent: function() {
  var e2 = this._private.pan, t2 = this._private.zoom, n2 = this.renderedExtent(), r2 = { x1: (n2.x1 - e2.x) / t2, x2: (n2.x2 - e2.x) / t2, y1: (n2.y1 - e2.y) / t2, y2: (n2.y2 - e2.y) / t2 };
  return r2.w = r2.x2 - r2.x1, r2.h = r2.y2 - r2.y1, r2;
}, renderedExtent: function() {
  var e2 = this.width(), t2 = this.height();
  return { x1: 0, y1: 0, x2: e2, y2: t2, w: e2, h: t2 };
}, multiClickDebounceTime: function(t2) {
  var n2 = e;
  if (t2) this._private.multiClickDebounceTime = t2;
  else return this[n2(820)].multiClickDebounceTime;
  return this;
} };
nd.centre = nd.center, nd.autolockNodes = nd.autolock, nd.autoungrabifyNodes = nd.autoungrabify;
var rd = { data: mc.data({ field: `data`, bindingEvent: `data`, allowBinding: true, allowSetting: true, settingEvent: `data`, settingTriggersEvent: true, triggerFnName: `trigger`, allowGetting: true, updateStyle: true }), removeData: mc.removeData({ field: `data`, event: `data`, triggerFnName: `trigger`, triggerEvent: true, updateStyle: true }), scratch: mc.data({ field: e(1125), bindingEvent: `scratch`, allowBinding: true, allowSetting: true, settingEvent: `scratch`, settingTriggersEvent: true, triggerFnName: `trigger`, allowGetting: true, updateStyle: true }), removeScratch: mc.removeData({ field: `scratch`, event: `scratch`, triggerFnName: `trigger`, triggerEvent: true, updateStyle: true }) };
rd.attr = rd[e(1036)], rd[e(339)] = rd.removeData;
var id = function(t2) {
  var n2 = e, r2 = this;
  t2 = Z({}, t2);
  var i2 = t2.container;
  i2 && !N(i2) && N(i2[0]) && (i2 = i2[0]);
  var a2 = i2 ? i2._cyreg : null;
  a2 || (a2 = {}), a2 && a2.cy && (a2.cy.destroy(), a2 = {});
  var o2 = a2.readies = a2.readies || [];
  i2 && (i2._cyreg = a2), a2.cy = r2;
  var s2 = y !== void 0 && i2 !== void 0 && !t2.headless, c2 = t2;
  c2.layout = Z({ name: s2 ? `grid` : `null` }, c2.layout), c2.renderer = Z({ name: s2 ? `canvas` : `null` }, c2[n2(589)]);
  var l2 = function(e2, t3, n3) {
    return t3 === void 0 ? n3 === void 0 ? e2 : n3 : t3;
  }, u2 = this._private = { container: i2, ready: false, options: c2, elements: new vu(this), listeners: [], aniEles: new vu(this), data: c2.data || {}, scratch: {}, layout: null, renderer: null, destroyed: false, notificationsEnabled: true, minZoom: 1e-50, maxZoom: 1e50, zoomingEnabled: l2(true, c2.zoomingEnabled), userZoomingEnabled: l2(true, c2.userZoomingEnabled), panningEnabled: l2(true, c2[n2(1354)]), userPanningEnabled: l2(true, c2.userPanningEnabled), boxSelectionEnabled: l2(true, c2[n2(369)]), autolock: l2(false, c2.autolock, c2.autolockNodes), autoungrabify: l2(false, c2.autoungrabify, c2.autoungrabifyNodes), autounselectify: l2(false, c2.autounselectify), styleEnabled: c2.styleEnabled === void 0 ? s2 : c2.styleEnabled, zoom: j(c2.zoom) ? c2.zoom : 1, pan: { x: k(c2.pan) && j(c2.pan.x) ? c2.pan.x : 0, y: k(c2.pan) && j(c2.pan.y) ? c2[n2(996)].y : 0 }, animation: { current: [], queue: [] }, hasCompoundNodes: false, multiClickDebounceTime: l2(250, c2.multiClickDebounceTime) };
  this.createEmitter(), this.selectionType(c2.selectionType), this.zoomRange({ min: c2.minZoom, max: c2.maxZoom });
  var d2 = function(e2, t3) {
    if (e2[n2(366)](U)) return fa.all(e2).then(t3);
    t3(e2);
  };
  u2.styleEnabled && r2.setStyle([]);
  var f2 = Z({}, c2, c2.renderer);
  r2[n2(615)](f2);
  var p2 = function(e2, t3, i3) {
    var a3 = n2;
    r2[a3(713)](false);
    var o3 = r2.mutableElements();
    o3.length > 0 && o3.remove(), e2 != null && (k(e2) || O(e2)) && r2.add(e2), r2.one(`layoutready`, function(e3) {
      var n3 = a3;
      r2.notifications(true), r2.emit(e3), r2[n3(873)](`load`, t3), r2.emitAndNotify(`load`);
    })[a3(873)](`layoutstop`, function() {
      var e3 = a3;
      r2.one(`done`, i3), r2[e3(818)](`done`);
    });
    var s3 = Z({}, r2[a3(820)].options.layout);
    s3[a3(1015)] = r2.elements(), r2.layout(s3).run();
  };
  d2([c2.style, c2.elements], function(e2) {
    var t3 = n2, i3 = e2[0], s3 = e2[1];
    u2.styleEnabled && r2.style()[t3(1304)](i3), p2(s3, function() {
      var e3 = t3;
      r2.startAnimationLoop(), u2.ready = true, D(c2.ready) && r2.on(`ready`, c2.ready);
      for (var n3 = 0; n3 < o2.length; n3++) {
        var i4 = o2[n3];
        r2.on(e3(227), i4);
      }
      a2 && (a2.readies = []), r2[e3(818)](`ready`);
    }, c2.done);
  });
}, ad = id.prototype;
Z(ad, { instanceString: function() {
  return e(673);
}, isReady: function() {
  return this._private.ready;
}, destroyed: function() {
  var t2 = e;
  return this._private[t2(656)];
}, ready: function(t2) {
  var n2 = e;
  return this.isReady() ? this.emitter().emit(n2(227), [], t2) : this.on(n2(227), t2), this;
}, destroy: function() {
  var t2 = e, n2 = this;
  if (!n2.destroyed()) return n2.stopAnimationLoop(), n2.destroyRenderer(), this.emit(`destroy`), n2[t2(820)][t2(656)] = true, n2;
}, hasElementWithId: function(e2) {
  return this._private.elements.hasElementWithId(e2);
}, getElementById: function(e2) {
  return this._private.elements.getElementById(e2);
}, hasCompoundNodes: function() {
  return this._private.hasCompoundNodes;
}, headless: function() {
  var t2 = e;
  return this._private[t2(589)].isHeadless();
}, styleEnabled: function() {
  return this._private.styleEnabled;
}, addToPool: function(t2) {
  var n2 = e;
  return this[n2(820)][n2(1249)].merge(t2), this;
}, removeFromPool: function(t2) {
  var n2 = e;
  return this._private.elements[n2(912)](t2), this;
}, container: function() {
  var t2 = e;
  return this._private[t2(721)] || null;
}, window: function() {
  var t2 = e;
  if (this[t2(820)].container == null) return y;
  var n2 = this[t2(820)].container.ownerDocument;
  return n2 === void 0 || n2 == null ? y : n2.defaultView || y;
}, mount: function(t2) {
  var n2 = e;
  if (t2 != null) {
    var r2 = this, i2 = r2[n2(820)], a2 = i2.options;
    return !N(t2) && N(t2[0]) && (t2 = t2[0]), r2.stopAnimationLoop(), r2.destroyRenderer(), i2.container = t2, i2.styleEnabled = true, r2.invalidateSize(), r2.initRenderer(Z({}, a2, a2.renderer, { name: a2[n2(589)][n2(958)] === `null` ? n2(224) : a2.renderer.name })), r2[n2(608)](), r2.style(a2.style), r2.emit(n2(1030)), r2;
  }
}, unmount: function() {
  var t2 = e, n2 = this;
  return n2.stopAnimationLoop(), n2.destroyRenderer(), n2[t2(615)]({ name: t2(1172) }), n2[t2(818)](`unmount`), n2;
}, options: function() {
  return Vt(this._private.options);
}, json: function(t2) {
  var n2 = e, r2 = this, i2 = r2[n2(820)], a2 = r2[n2(1123)](), o2 = function(e2) {
    return r2.getElementById(e2.id());
  };
  if (k(t2)) {
    if (r2.startBatch(), t2.elements) {
      var s2 = {}, c2 = function(e2, t3) {
        for (var i3 = n2, a3 = [], o3 = [], c3 = 0; c3 < e2.length; c3++) {
          var l3 = e2[c3];
          if (!l3.data.id) {
            zt(`cy.json() cannot handle elements without an ID attribute`);
            continue;
          }
          var u3 = `` + l3.data.id, d3 = r2[i3(1337)](u3);
          s2[u3] = true, d3.length === 0 ? (t3 && (l3.group = t3), a3[i3(254)](l3)) : o3.push({ ele: d3, json: l3 });
        }
        r2[i3(1213)](a3);
        for (var f3 = 0; f3 < o3[i3(441)]; f3++) {
          var p3 = o3[f3], m3 = p3.ele, h3 = p3.json;
          m3[i3(892)](h3);
        }
      };
      if (O(t2.elements)) c2(t2.elements);
      else for (var l2 = [`nodes`, `edges`], u2 = 0; u2 < l2.length; u2++) {
        var d2 = l2[u2], f2 = t2.elements[d2];
        O(f2) && c2(f2, d2);
      }
      var p2 = r2.collection();
      a2.filter(function(e2) {
        return !s2[e2.id()];
      }).forEach(function(e2) {
        var t3 = n2;
        e2.isParent() ? p2.merge(e2) : e2[t3(345)]();
      }), p2.forEach(function(e2) {
        return e2.children().move({ parent: null });
      }), p2.forEach(function(e2) {
        var t3 = n2;
        return o2(e2)[t3(345)]();
      });
    }
    t2.style && r2.style(t2[n2(1353)]), t2.zoom != null && t2.zoom !== i2[n2(1242)] && r2.zoom(t2.zoom), t2.pan && (t2.pan.x !== i2.pan.x || t2.pan.y !== i2.pan.y) && r2[n2(996)](t2.pan), t2.data && r2[n2(1036)](t2.data);
    for (var m2 = [`minZoom`, n2(910), n2(1034), `userZoomingEnabled`, n2(1354), `userPanningEnabled`, `boxSelectionEnabled`, `autolock`, n2(756), n2(972), `multiClickDebounceTime`], h2 = 0; h2 < m2.length; h2++) {
      var g2 = m2[h2];
      t2[g2] != null && r2[g2](t2[g2]);
    }
    return r2.endBatch(), this;
  } else {
    var _2 = !!t2, v2 = {};
    _2 ? v2.elements = this[n2(1249)]().map(function(e2) {
      return e2.json();
    }) : (v2[n2(1249)] = {}, a2.forEach(function(e2) {
      var t3 = e2.group();
      v2.elements[t3] || (v2.elements[t3] = []), v2.elements[t3].push(e2.json());
    })), this._private.styleEnabled && (v2.style = r2.style().json()), v2.data = Vt(r2.data());
    var y2 = i2.options;
    return v2.zoomingEnabled = i2.zoomingEnabled, v2.userZoomingEnabled = i2.userZoomingEnabled, v2[n2(1242)] = i2.zoom, v2.minZoom = i2.minZoom, v2[n2(910)] = i2.maxZoom, v2.panningEnabled = i2.panningEnabled, v2.userPanningEnabled = i2[n2(566)], v2.pan = Vt(i2.pan), v2.boxSelectionEnabled = i2.boxSelectionEnabled, v2.renderer = Vt(y2.renderer), v2.hideEdgesOnViewport = y2.hideEdgesOnViewport, v2.textureOnViewport = y2.textureOnViewport, v2.wheelSensitivity = y2.wheelSensitivity, v2.motionBlur = y2.motionBlur, v2.multiClickDebounceTime = y2.multiClickDebounceTime, v2;
  }
} }), ad[e(1375)] = ad.getElementById, [bu, Mu, Fu, Iu, Lu, Ru, Bu, Vu, ed, nd, rd][e(1390)](function(e2) {
  Z(ad, e2);
});
var od = { fit: true, directed: false, direction: `downward`, padding: 30, circle: false, grid: false, spacingFactor: 1.75, boundingBox: void 0, avoidOverlap: true, nodeDimensionsIncludeLabels: false, roots: void 0, depthSort: void 0, animate: false, animationDuration: 500, animationEasing: void 0, animateFilter: function(e2, t2) {
  return true;
}, ready: void 0, stop: void 0, transform: function(e2, t2) {
  return t2;
} }, sd = { maximal: false, acyclic: false }, cd = function(t2) {
  return t2[e(1125)](`breadthfirst`);
}, ld = function(t2, n2) {
  return t2[e(1125)](`breadthfirst`, n2);
};
function ud(e2) {
  this.options = Z({}, od, sd, e2);
}
ud.prototype.run = function() {
  var t2 = e, n2 = this.options, r2 = n2.cy, i2 = n2.eles, a2 = i2.nodes()[t2(670)](function(e2) {
    return e2.isChildless();
  }), o2 = i2, s2 = n2.directed, c2 = n2.acyclic || n2.maximal || n2.maximalAdjustments > 0, l2 = !!n2.boundingBox, u2 = Kn(l2 ? n2[t2(277)] : structuredClone(r2.extent())), d2;
  if (P(n2.roots)) d2 = n2.roots;
  else if (O(n2.roots)) {
    for (var f2 = [], p2 = 0; p2 < n2.roots.length; p2++) {
      var m2 = n2[t2(616)][p2], h2 = r2.getElementById(m2);
      f2[t2(254)](h2);
    }
    d2 = r2.collection(f2);
  } else if (E(n2.roots)) d2 = r2.$(n2.roots);
  else if (s2) d2 = a2[t2(616)]();
  else {
    var g2 = i2[t2(307)]();
    d2 = r2.collection();
    for (var _2 = function() {
      var e2 = g2[v2], t3 = e2.maxDegree(false), n3 = e2.filter(function(e3) {
        return e3.degree(false) === t3;
      });
      d2 = d2.add(n3);
    }, v2 = 0; v2 < g2.length; v2++) _2();
  }
  var y2 = [], b2 = {}, x2 = function(e2, n3) {
    var r3 = t2;
    y2[n3] ?? (y2[n3] = []);
    var i3 = y2[n3].length;
    y2[n3][r3(254)](e2), ld(e2, { index: i3, depth: n3 });
  }, S2 = function(e2, n3) {
    var r3 = t2, i3 = cd(e2), a3 = i3[r3(1170)], o3 = i3.index;
    y2[a3][o3] = null, e2[r3(493)]() && x2(e2, n3);
  };
  o2[t2(255)]({ roots: d2, directed: n2.directed, visit: function(e2, t3, n3, r3, i3) {
    var a3 = e2[0], o3 = a3.id();
    a3.isChildless() && x2(a3, i3), b2[o3] = true;
  } });
  for (var C2 = [], w2 = 0; w2 < a2.length; w2++) {
    var T2 = a2[w2];
    b2[T2.id()] || C2.push(T2);
  }
  var D2 = function(e2) {
    for (var t3 = y2[e2], n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      if (r3 == null) {
        t3.splice(n3, 1), n3--;
        continue;
      }
      ld(r3, { depth: e2, index: n3 });
    }
  }, k2 = function(e2, r3) {
    for (var a3 = t2, o3 = cd(e2), s3 = e2.incomers().filter(function(e3) {
      return e3.isNode() && i2.has(e3);
    }), c3 = -1, l3 = e2.id(), u3 = 0; u3 < s3.length; u3++) {
      var d3 = s3[u3], f3 = cd(d3);
      c3 = Math.max(c3, f3[a3(1170)]);
    }
    if (o3.depth <= c3) {
      if (!n2[a3(994)] && r3[l3]) return null;
      var p3 = c3 + 1;
      return S2(e2, p3), r3[l3] = p3, true;
    }
    return false;
  };
  if (s2 && c2) {
    var A2 = [], j2 = {}, M2 = function(e2) {
      return A2[t2(254)](e2);
    }, N2 = function() {
      return A2[t2(916)]();
    };
    for (a2[t2(1390)](function(e2) {
      return A2.push(e2);
    }); A2.length > 0; ) {
      var F2 = N2(), I2 = k2(F2, j2);
      if (I2) F2[t2(1414)]().filter(function(e2) {
        return e2.isNode() && i2.has(e2);
      }).forEach(M2);
      else if (I2 === null) {
        zt("Detected double maximal shift for node `" + F2.id() + t2(509));
        break;
      }
    }
  }
  var L2 = 0;
  if (n2.avoidOverlap) for (var R2 = 0; R2 < a2.length; R2++) {
    var z2 = a2[R2].layoutDimensions(n2), B2 = z2.w, V2 = z2.h;
    L2 = Math.max(L2, B2, V2);
  }
  var H2 = {}, U2 = function(e2) {
    var n3 = t2;
    if (H2[e2.id()]) return H2[e2.id()];
    for (var r3 = cd(e2).depth, i3 = e2.neighborhood(), o3 = 0, s3 = 0, c3 = 0; c3 < i3[n3(441)]; c3++) {
      var l3 = i3[c3];
      if (!(l3.isEdge() || l3.isParent() || !a2.has(l3))) {
        var u3 = cd(l3);
        if (u3 != null) {
          var d3 = u3[n3(576)], f3 = u3.depth;
          if (!(d3 == null || f3 == null)) {
            var p3 = y2[f3].length;
            f3 < r3 && (o3 += d3 / p3, s3++);
          }
        }
      }
    }
    return s3 = Math.max(1, s3), o3 /= s3, s3 === 0 && (o3 = 0), H2[e2.id()] = o3, o3;
  }, W2 = function(e2, t3) {
    var n3 = U2(e2) - U2(t3);
    return n3 === 0 ? se(e2.id(), t3.id()) : n3;
  };
  n2.depthSort !== void 0 && (W2 = n2.depthSort);
  for (var G2 = y2.length, K2 = 0; K2 < G2; K2++) y2[K2].sort(W2), D2(K2);
  for (var q2 = [], J2 = 0; J2 < C2[t2(441)]; J2++) q2[t2(254)](C2[J2]);
  q2.length && (y2.unshift(q2), G2 = y2[t2(441)], (function() {
    for (var e2 = 0; e2 < G2; e2++) D2(e2);
  })());
  for (var Y2 = 0, ee2 = 0; ee2 < G2; ee2++) Y2 = Math.max(y2[ee2].length, Y2);
  var X2 = { x: u2.x1 + u2.w / 2, y: u2.y1 + u2.h / 2 }, te2 = a2[t2(242)](function(e2, r3) {
    return (function(t3) {
      return { w: e2.w === -1 ? t3.w : (e2.w + t3.w) / 2, h: e2.h === -1 ? t3.h : (e2.h + t3.h) / 2 };
    })(r3[t2(277)]({ includeLabels: n2.nodeDimensionsIncludeLabels }));
  }, { w: -1, h: -1 }), ne2 = Math[t2(701)](G2 === 1 ? 0 : l2 ? (u2.h - n2.padding * 2 - te2.h) / (G2 - 1) : (u2.h - n2[t2(1210)] * 2 - te2.h) / (G2 + 1), L2), re2 = y2.reduce(function(e2, n3) {
    return Math[t2(701)](e2, n3.length);
  }, 0), ie2 = function(e2) {
    var r3 = t2, i3 = cd(e2), a3 = i3[r3(1170)], o3 = i3.index;
    if (n2[r3(232)]) {
      var s3 = Math[r3(1120)](u2.w / 2 / G2, u2.h / 2 / G2);
      s3 = Math[r3(701)](s3, L2);
      var c3 = s3 * a3 + s3 - (G2 > 0 && y2[0][r3(441)] <= 3 ? s3 / 2 : 0), d3 = 2 * Math.PI / y2[a3].length * o3;
      return a3 === 0 && y2[0].length === 1 && (c3 = 1), { x: X2.x + c3 * Math.cos(d3), y: X2.y + c3 * Math.sin(d3) };
    } else {
      var f3 = y2[a3].length, p3 = Math.max(f3 === 1 ? 0 : l2 ? (u2.w - n2.padding * 2 - te2.w) / ((n2.grid ? re2 : f3) - 1) : (u2.w - n2.padding * 2 - te2.w) / ((n2.grid ? re2 : f3) + 1), L2);
      return { x: X2.x + (o3 + 1 - (f3 + 1) / 2) * p3, y: X2.y + (a3 + 1 - (G2 + 1) / 2) * ne2 };
    }
  }, ae2 = { downward: 0, leftward: 90, upward: 180, rightward: -90 };
  return Object.keys(ae2).indexOf(n2.direction) === -1 && Lt(`Invalid direction '` + n2.direction + `' specified for breadthfirst layout. Valid values are: ` + Object[t2(520)](ae2).join(`, `)), i2[t2(565)]()[t2(1098)](this, n2, function(e2) {
    return Ot(ie2(e2), u2, ae2[n2.direction]);
  }), this;
};
var dd = { fit: true, padding: 30, boundingBox: void 0, avoidOverlap: true, nodeDimensionsIncludeLabels: false, spacingFactor: void 0, radius: void 0, startAngle: 3 / 2 * Math.PI, sweep: void 0, clockwise: true, sort: void 0, animate: false, animationDuration: 500, animationEasing: void 0, animateFilter: function(e2, t2) {
  return true;
}, ready: void 0, stop: void 0, transform: function(e2, t2) {
  return t2;
} };
function fd(e2) {
  this.options = Z({}, dd, e2);
}
fd.prototype.run = function() {
  var t2 = e, n2 = this.options, r2 = n2, i2 = n2.cy, a2 = r2.eles, o2 = r2[t2(557)] === void 0 ? r2[t2(1384)] : !r2.counterclockwise, s2 = a2.nodes().not(`:parent`);
  r2.sort && (s2 = s2.sort(r2.sort));
  for (var c2 = Kn(r2.boundingBox ? r2.boundingBox : { x1: 0, y1: 0, w: i2.width(), h: i2.height() }), l2 = { x: c2.x1 + c2.w / 2, y: c2.y1 + c2.h / 2 }, u2 = (r2.sweep === void 0 ? 2 * Math.PI - 2 * Math.PI / s2[t2(441)] : r2.sweep) / Math.max(1, s2[t2(441)] - 1), d2, f2 = 0, p2 = 0; p2 < s2.length; p2++) {
    var m2 = s2[p2][t2(1223)](r2), h2 = m2.w, g2 = m2.h;
    f2 = Math.max(f2, h2, g2);
  }
  if (d2 = j(r2.radius) ? r2.radius : s2.length <= 1 ? 0 : Math[t2(1120)](c2.h, c2.w) / 2 - f2, s2.length > 1 && r2.avoidOverlap) {
    f2 *= 1.75;
    var _2 = Math.cos(u2) - Math.cos(0), v2 = Math[t2(1040)](u2) - Math.sin(0), y2 = Math.sqrt(f2 * f2 / (_2 * _2 + v2 * v2));
    d2 = Math[t2(701)](y2, d2);
  }
  return a2.nodes().layoutPositions(this, r2, function(e2, n3) {
    var i3 = t2, a3 = r2.startAngle + n3 * u2 * (o2 ? 1 : -1), s3 = d2 * Math.cos(a3), c3 = d2 * Math[i3(1040)](a3);
    return { x: l2.x + s3, y: l2.y + c3 };
  }), this;
};
var pd = { fit: true, padding: 30, startAngle: 3 / 2 * Math.PI, sweep: void 0, clockwise: true, equidistant: false, minNodeSpacing: 10, boundingBox: void 0, avoidOverlap: true, nodeDimensionsIncludeLabels: false, height: void 0, width: void 0, spacingFactor: void 0, concentric: function(e2) {
  return e2.degree();
}, levelWidth: function(e2) {
  return e2.maxDegree() / 4;
}, animate: false, animationDuration: 500, animationEasing: void 0, animateFilter: function(e2, t2) {
  return true;
}, ready: void 0, stop: void 0, transform: function(e2, t2) {
  return t2;
} };
function md(t2) {
  var n2 = e;
  this[n2(712)] = Z({}, pd, t2);
}
md.prototype.run = function() {
  for (var t2 = e, n2 = this.options, r2 = n2, i2 = r2.counterclockwise === void 0 ? r2.clockwise : !r2.counterclockwise, a2 = n2.cy, o2 = r2.eles, s2 = o2.nodes()[t2(300)](`:parent`), c2 = Kn(r2.boundingBox ? r2.boundingBox : { x1: 0, y1: 0, w: a2.width(), h: a2.height() }), l2 = { x: c2.x1 + c2.w / 2, y: c2.y1 + c2.h / 2 }, u2 = [], d2 = 0, f2 = 0; f2 < s2.length; f2++) {
    var p2 = s2[f2], m2 = void 0;
    m2 = r2.concentric(p2), u2.push({ value: m2, node: p2 }), p2[t2(820)][t2(1125)][t2(804)] = m2;
  }
  s2.updateStyle();
  for (var h2 = 0; h2 < s2.length; h2++) {
    var g2 = s2[h2].layoutDimensions(r2);
    d2 = Math.max(d2, g2.w, g2.h);
  }
  u2.sort(function(e2, t3) {
    return t3.value - e2.value;
  });
  for (var _2 = r2.levelWidth(s2), v2 = [[]], y2 = v2[0], b2 = 0; b2 < u2.length; b2++) {
    var x2 = u2[b2];
    y2.length > 0 && Math[t2(1296)](y2[0].value - x2.value) >= _2 && (y2 = [], v2.push(y2)), y2[t2(254)](x2);
  }
  var S2 = d2 + r2.minNodeSpacing;
  if (!r2.avoidOverlap) {
    var C2 = v2.length > 0 && v2[0].length > 1, w2 = (Math[t2(1120)](c2.w, c2.h) / 2 - S2) / (v2.length + C2 ? 1 : 0);
    S2 = Math.min(S2, w2);
  }
  for (var T2 = 0, E2 = 0; E2 < v2.length; E2++) {
    var D2 = v2[E2], O2 = D2.dTheta = (r2.sweep === void 0 ? 2 * Math.PI - 2 * Math.PI / D2.length : r2.sweep) / Math.max(1, D2.length - 1);
    if (D2.length > 1 && r2.avoidOverlap) {
      var k2 = Math.cos(O2) - Math[t2(1188)](0), A2 = Math.sin(O2) - Math.sin(0), j2 = Math.sqrt(S2 * S2 / (k2 * k2 + A2 * A2));
      T2 = Math.max(j2, T2);
    }
    D2.r = T2, T2 += S2;
  }
  if (r2[t2(1044)]) {
    for (var M2 = 0, N2 = 0, P2 = 0; P2 < v2[t2(441)]; P2++) {
      var F2 = v2[P2].r - N2;
      M2 = Math.max(M2, F2);
    }
    N2 = 0;
    for (var I2 = 0; I2 < v2[t2(441)]; I2++) {
      var L2 = v2[I2];
      I2 === 0 && (N2 = L2.r), L2.r = N2, N2 += M2;
    }
  }
  for (var R2 = {}, z2 = 0; z2 < v2.length; z2++) for (var B2 = v2[z2], V2 = B2.dTheta, H2 = B2.r, U2 = 0; U2 < B2[t2(441)]; U2++) {
    var W2 = B2[U2], G2 = r2[t2(1128)] + (i2 ? 1 : -1) * V2 * U2, K2 = { x: l2.x + H2 * Math.cos(G2), y: l2.y + H2 * Math.sin(G2) };
    R2[W2.node.id()] = K2;
  }
  return o2.nodes().layoutPositions(this, r2, function(e2) {
    return R2[e2.id()];
  }), this;
};
var hd, gd = { ready: function() {
}, stop: function() {
}, animate: true, animationEasing: void 0, animationDuration: void 0, animateFilter: function(e2, t2) {
  return true;
}, animationThreshold: 250, refresh: 20, fit: true, padding: 30, boundingBox: void 0, nodeDimensionsIncludeLabels: false, randomize: false, componentSpacing: 40, nodeRepulsion: function(e2) {
  return 2048;
}, nodeOverlap: 4, idealEdgeLength: function(e2) {
  return 32;
}, edgeElasticity: function(e2) {
  return 32;
}, nestingFactor: 1.2, gravity: 1, numIter: 1e3, initialTemp: 1e3, coolingFactor: 0.99, minTemp: 1 };
function _d(t2) {
  var n2 = e;
  this.options = Z({}, gd, t2), this.options.layout = this;
  var r2 = this.options.eles.nodes(), i2 = this.options.eles.edges().filter(function(e2) {
    var t3 = $, n3 = e2[t3(1256)]().data(`id`), i3 = e2.target().data(`id`), a2 = r2[t3(366)](function(e3) {
      return e3.data(`id`) === n3;
    }), o2 = r2.some(function(e3) {
      return e3.data(`id`) === i3;
    });
    return !a2 || !o2;
  });
  this.options[n2(1015)] = this.options.eles.not(i2);
}
_d[e(216)].run = function() {
  var t2 = e, n2 = this.options, r2 = n2.cy, i2 = this;
  i2[t2(475)] = false, (n2[t2(908)] === true || n2.animate === false) && i2[t2(818)]({ type: `layoutstart`, layout: i2 }), hd = true === n2.debug;
  var a2 = vd(r2, i2, n2);
  hd && xd(a2), n2.randomize && Sd(a2);
  var o2 = ft(), s2 = function() {
    var e2 = t2;
    wd(a2, r2, n2), true === n2[e2(1069)] && r2.fit(n2.padding);
  }, c2 = function(e2) {
    var r3 = t2;
    return !(i2.stopped || e2 >= n2[r3(514)] || (Td(a2, n2), a2.temperature *= n2.coolingFactor, a2[r3(949)] < n2.minTemp));
  }, l2 = function() {
    var e2 = t2;
    if (n2.animate === true || n2.animate === false) s2(), i2[e2(873)](`layoutstop`, n2.stop), i2.emit({ type: `layoutstop`, layout: i2 });
    else {
      var r3 = n2.eles.nodes(), o3 = Cd(a2, n2, r3);
      r3.layoutPositions(i2, n2, o3);
    }
  }, u2 = 0, d2 = true;
  if (n2.animate === true) {
    var f2 = function() {
      for (var e2 = t2, r3 = 0; d2 && r3 < n2.refresh; ) d2 = c2(u2), u2++, r3++;
      d2 ? (ft() - o2 >= n2[e2(201)] && s2(), dt(f2)) : (Ld(a2, n2), l2());
    };
    f2();
  } else {
    for (; d2; ) d2 = c2(u2), u2++;
    Ld(a2, n2), l2();
  }
  return this;
}, _d.prototype.stop = function() {
  return this.stopped = true, this.thread && this.thread.stop(), this.emit(`layoutstop`), this;
}, _d.prototype.destroy = function() {
  return this.thread && this.thread.stop(), this;
};
var vd = function(t2, n2, r2) {
  for (var i2 = e, a2 = r2.eles.edges(), o2 = r2[i2(1015)].nodes(), s2 = Kn(r2.boundingBox ? r2[i2(277)] : { x1: 0, y1: 0, w: t2.width(), h: t2.height() }), c2 = { isCompound: t2.hasCompoundNodes(), layoutNodes: [], idToIndex: {}, nodeSize: o2.size(), graphSet: [], indexToGraph: [], layoutEdges: [], edgeSize: a2.size(), temperature: r2.initialTemp, clientWidth: s2.w, clientHeight: s2.h, boundingBox: s2 }, l2 = r2[i2(1015)].components(), u2 = {}, d2 = 0; d2 < l2.length; d2++) for (var f2 = l2[d2], p2 = 0; p2 < f2[i2(441)]; p2++) {
    var m2 = f2[p2];
    u2[m2.id()] = d2;
  }
  for (var d2 = 0; d2 < c2.nodeSize; d2++) {
    var h2 = o2[d2], g2 = h2[i2(1223)](r2), _2 = {};
    _2.isLocked = h2.locked(), _2.id = h2.data(`id`), _2[i2(745)] = h2.data(`parent`), _2[i2(944)] = u2[h2.id()], _2.children = [], _2.positionX = h2.position(`x`), _2.positionY = h2.position(`y`), _2.offsetX = 0, _2[i2(783)] = 0, _2.height = g2.w, _2.width = g2.h, _2.maxX = _2.positionX + _2.width / 2, _2.minX = _2.positionX - _2.width / 2, _2[i2(696)] = _2.positionY + _2.height / 2, _2.minY = _2.positionY - _2.height / 2, _2.padLeft = parseFloat(h2.style(`padding`)), _2.padRight = parseFloat(h2.style(`padding`)), _2.padTop = parseFloat(h2.style(`padding`)), _2[i2(653)] = parseFloat(h2[i2(1353)](i2(1210))), _2.nodeRepulsion = D(r2[i2(707)]) ? r2.nodeRepulsion(h2) : r2[i2(707)], c2.layoutNodes[i2(254)](_2), c2.idToIndex[_2.id] = d2;
  }
  for (var v2 = [], y2 = 0, b2 = -1, x2 = [], d2 = 0; d2 < c2.nodeSize; d2++) {
    var h2 = c2.layoutNodes[d2], S2 = h2.parentId;
    S2 == null ? (v2[++b2] = h2.id, x2[i2(254)](h2.id)) : c2.layoutNodes[c2[i2(1331)][S2]][i2(1122)].push(h2.id);
  }
  for (c2[i2(1376)][i2(254)](x2); y2 <= b2; ) {
    var C2 = v2[y2++], w2 = c2.idToIndex[C2], m2 = c2.layoutNodes[w2], T2 = m2.children;
    if (T2[i2(441)] > 0) {
      c2.graphSet.push(T2);
      for (var d2 = 0; d2 < T2.length; d2++) v2[++b2] = T2[d2];
    }
  }
  for (var d2 = 0; d2 < c2[i2(1376)].length; d2++) for (var E2 = c2.graphSet[d2], p2 = 0; p2 < E2.length; p2++) {
    var O2 = c2[i2(1331)][E2[p2]];
    c2.indexToGraph[O2] = d2;
  }
  for (var d2 = 0; d2 < c2[i2(1312)]; d2++) {
    var k2 = a2[d2], A2 = {};
    A2.id = k2.data(`id`), A2[i2(266)] = k2.data(`source`), A2.targetId = k2.data(`target`);
    var j2 = D(r2.idealEdgeLength) ? r2[i2(657)](k2) : r2.idealEdgeLength, M2 = D(r2.edgeElasticity) ? r2.edgeElasticity(k2) : r2.edgeElasticity, N2 = c2.idToIndex[A2.sourceId], P2 = c2[i2(1331)][A2.targetId];
    if (c2.indexToGraph[N2] != c2.indexToGraph[P2]) {
      for (var F2 = yd(A2.sourceId, A2.targetId, c2), I2 = c2[i2(1376)][F2], L2 = 0, _2 = c2.layoutNodes[N2]; I2[i2(294)](_2.id) === -1; ) _2 = c2.layoutNodes[c2[i2(1331)][_2.parentId]], L2++;
      for (_2 = c2[i2(698)][P2]; I2.indexOf(_2.id) === -1; ) _2 = c2.layoutNodes[c2.idToIndex[_2.parentId]], L2++;
      j2 *= L2 * r2.nestingFactor;
    }
    A2[i2(391)] = j2, A2.elasticity = M2, c2[i2(1183)].push(A2);
  }
  return c2;
}, yd = function(e2, t2, n2) {
  var r2 = bd(e2, t2, 0, n2);
  return 2 > r2.count ? 0 : r2.graph;
}, bd = function(t2, n2, r2, i2) {
  var a2 = e, o2 = i2.graphSet[r2];
  if (-1 < o2.indexOf(t2) && -1 < o2.indexOf(n2)) return { count: 2, graph: r2 };
  for (var s2 = 0, c2 = 0; c2 < o2.length; c2++) {
    var l2 = o2[c2], u2 = i2.idToIndex[l2], d2 = i2[a2(698)][u2].children;
    if (d2.length !== 0) {
      var f2 = i2.indexToGraph[i2.idToIndex[d2[0]]], p2 = bd(t2, n2, f2, i2);
      if (p2.count !== 0) if (p2.count === 1) {
        if (s2++, s2 === 2) break;
      } else return p2;
    }
  }
  return { count: s2, graph: r2 };
}, xd, Sd = function(t2, n2) {
  for (var r2 = e, i2 = t2[r2(567)], a2 = t2[r2(844)], o2 = 0; o2 < t2.nodeSize; o2++) {
    var s2 = t2.layoutNodes[o2];
    s2.children.length === 0 && !s2.isLocked && (s2.positionX = Math.random() * i2, s2.positionY = Math.random() * a2);
  }
}, Cd = function(e2, t2, n2) {
  var r2 = e2.boundingBox, i2 = { x1: 1 / 0, x2: -1 / 0, y1: 1 / 0, y2: -1 / 0 };
  return t2.boundingBox && (n2.forEach(function(t3) {
    var n3 = e2.layoutNodes[e2.idToIndex[t3.data(`id`)]];
    i2.x1 = Math.min(i2.x1, n3.positionX), i2.x2 = Math.max(i2.x2, n3.positionX), i2.y1 = Math.min(i2.y1, n3.positionY), i2.y2 = Math.max(i2.y2, n3.positionY);
  }), i2.w = i2.x2 - i2.x1, i2.h = i2.y2 - i2.y1), function(n3, a2) {
    var o2 = $, s2 = e2.layoutNodes[e2.idToIndex[n3.data(`id`)]];
    if (t2[o2(277)]) {
      var c2 = i2.w === 0 ? 0.5 : (s2.positionX - i2.x1) / i2.w, l2 = i2.h === 0 ? 0.5 : (s2[o2(293)] - i2.y1) / i2.h;
      return { x: r2.x1 + c2 * r2.w, y: r2.y1 + l2 * r2.h };
    } else return { x: s2.positionX, y: s2.positionY };
  };
}, wd = function(t2, n2, r2) {
  var i2 = e, a2 = r2.layout, o2 = r2.eles[i2(565)](), s2 = Cd(t2, r2, o2);
  o2.positions(s2), true !== t2.ready && (t2.ready = true, a2.one(i2(753), r2.ready), a2.emit({ type: `layoutready`, layout: this }));
}, Td = function(e2, t2, n2) {
  Ed(e2, t2), jd(e2), Md(e2, t2), Nd(e2), Pd(e2);
}, Ed = function(t2, n2) {
  for (var r2 = e, i2 = 0; i2 < t2.graphSet.length; i2++) for (var a2 = t2[r2(1376)][i2], o2 = a2.length, s2 = 0; s2 < o2; s2++) for (var c2 = t2.layoutNodes[t2.idToIndex[a2[s2]]], l2 = s2 + 1; l2 < o2; l2++) {
    var u2 = t2[r2(698)][t2.idToIndex[a2[l2]]];
    Od(c2, u2, t2, n2);
  }
}, Dd = function(e2) {
  return -1 + 2 * e2 * Math.random();
}, Od = function(t2, n2, r2, i2) {
  var a2 = e;
  if (!(t2.cmptId !== n2[a2(944)] && !r2.isCompound)) {
    var o2 = n2.positionX - t2.positionX, s2 = n2.positionY - t2.positionY, c2 = 1;
    o2 === 0 && s2 === 0 && (o2 = Dd(c2), s2 = Dd(c2));
    var l2 = kd(t2, n2, o2, s2);
    if (l2 > 0) var u2 = i2.nodeOverlap * l2, d2 = Math.sqrt(o2 * o2 + s2 * s2), f2 = u2 * o2 / d2, p2 = u2 * s2 / d2;
    else var m2 = Ad(t2, o2, s2), h2 = Ad(n2, -1 * o2, -1 * s2), g2 = h2.x - m2.x, _2 = h2.y - m2.y, v2 = g2 * g2 + _2 * _2, d2 = Math.sqrt(v2), u2 = (t2.nodeRepulsion + n2.nodeRepulsion) / v2, f2 = u2 * g2 / d2, p2 = u2 * _2 / d2;
    t2.isLocked || (t2.offsetX -= f2, t2[a2(783)] -= p2), n2[a2(595)] || (n2.offsetX += f2, n2[a2(783)] += p2);
  }
}, kd = function(t2, n2, r2, i2) {
  var a2 = e;
  if (r2 > 0) var o2 = t2.maxX - n2.minX;
  else var o2 = n2[a2(993)] - t2.minX;
  if (i2 > 0) var s2 = t2[a2(696)] - n2.minY;
  else var s2 = n2.maxY - t2.minY;
  return o2 >= 0 && s2 >= 0 ? Math.sqrt(o2 * o2 + s2 * s2) : 0;
}, Ad = function(t2, n2, r2) {
  var i2 = e, a2 = t2.positionX, o2 = t2.positionY, s2 = t2[i2(1363)] || 1, c2 = t2[i2(901)] || 1, l2 = r2 / n2, u2 = s2 / c2, d2 = {};
  return n2 === 0 && 0 < r2 || n2 === 0 && 0 > r2 ? (d2.x = a2, d2.y = o2 + s2 / 2, d2) : 0 < n2 && -1 * u2 <= l2 && l2 <= u2 ? (d2.x = a2 + c2 / 2, d2.y = o2 + c2 * r2 / 2 / n2, d2) : 0 > n2 && -1 * u2 <= l2 && l2 <= u2 ? (d2.x = a2 - c2 / 2, d2.y = o2 - c2 * r2 / 2 / n2, d2) : 0 < r2 && (l2 <= -1 * u2 || l2 >= u2) ? (d2.x = a2 + s2 * n2 / 2 / r2, d2.y = o2 + s2 / 2, d2) : 0 > r2 && (l2 <= -1 * u2 || l2 >= u2) ? (d2.x = a2 - s2 * n2 / 2 / r2, d2.y = o2 - s2 / 2, d2) : d2;
}, jd = function(t2, n2) {
  for (var r2 = e, i2 = 0; i2 < t2.edgeSize; i2++) {
    var a2 = t2.layoutEdges[i2], o2 = t2.idToIndex[a2.sourceId], s2 = t2.layoutNodes[o2], c2 = t2.idToIndex[a2.targetId], l2 = t2.layoutNodes[c2], u2 = l2[r2(915)] - s2.positionX, d2 = l2[r2(293)] - s2.positionY;
    if (!(u2 === 0 && d2 === 0)) {
      var f2 = Ad(s2, u2, d2), p2 = Ad(l2, -1 * u2, -1 * d2), m2 = p2.x - f2.x, h2 = p2.y - f2.y, g2 = Math.sqrt(m2 * m2 + h2 * h2), _2 = Math[r2(1252)](a2[r2(391)] - g2, 2) / a2.elasticity;
      if (g2 !== 0) var v2 = _2 * m2 / g2, y2 = _2 * h2 / g2;
      else var v2 = 0, y2 = 0;
      s2.isLocked || (s2.offsetX += v2, s2.offsetY += y2), l2[r2(595)] || (l2.offsetX -= v2, l2[r2(783)] -= y2);
    }
  }
}, Md = function(t2, n2) {
  var r2 = e;
  if (n2.gravity !== 0) for (var i2 = 1, a2 = 0; a2 < t2.graphSet.length; a2++) {
    var o2 = t2[r2(1376)][a2], s2 = o2.length;
    if (a2 === 0) var c2 = t2.clientHeight / 2, l2 = t2.clientWidth / 2;
    else var u2 = t2[r2(698)][t2.idToIndex[o2[0]]], d2 = t2.layoutNodes[t2.idToIndex[u2.parentId]], c2 = d2[r2(915)], l2 = d2.positionY;
    for (var f2 = 0; f2 < s2; f2++) {
      var p2 = t2.layoutNodes[t2.idToIndex[o2[f2]]];
      if (!p2.isLocked) {
        var m2 = c2 - p2.positionX, h2 = l2 - p2.positionY, g2 = Math.sqrt(m2 * m2 + h2 * h2);
        if (g2 > i2) {
          var _2 = n2.gravity * m2 / g2, v2 = n2.gravity * h2 / g2;
          p2[r2(987)] += _2, p2.offsetY += v2;
        }
      }
    }
  }
}, Nd = function(t2, n2) {
  var r2 = e, i2 = [], a2 = 0, o2 = -1;
  for (i2.push.apply(i2, t2.graphSet[0]), o2 += t2.graphSet[0].length; a2 <= o2; ) {
    var s2 = i2[a2++], c2 = t2.idToIndex[s2], l2 = t2.layoutNodes[c2], u2 = l2.children;
    if (0 < u2.length && !l2.isLocked) {
      for (var d2 = l2.offsetX, f2 = l2.offsetY, p2 = 0; p2 < u2.length; p2++) {
        var m2 = t2.layoutNodes[t2[r2(1331)][u2[p2]]];
        m2.offsetX += d2, m2.offsetY += f2, i2[++o2] = u2[p2];
      }
      l2.offsetX = 0, l2.offsetY = 0;
    }
  }
}, Pd = function(t2, n2) {
  for (var r2 = e, i2 = 0; i2 < t2.nodeSize; i2++) {
    var a2 = t2.layoutNodes[i2];
    0 < a2.children.length && (a2.maxX = void 0, a2.minX = void 0, a2.maxY = void 0, a2.minY = void 0);
  }
  for (var i2 = 0; i2 < t2[r2(403)]; i2++) {
    var a2 = t2[r2(698)][i2];
    if (!(0 < a2[r2(1122)].length || a2.isLocked)) {
      var o2 = Fd(a2.offsetX, a2.offsetY, t2.temperature);
      a2.positionX += o2.x, a2.positionY += o2.y, a2.offsetX = 0, a2.offsetY = 0, a2.minX = a2.positionX - a2[r2(901)], a2[r2(993)] = a2.positionX + a2.width, a2.minY = a2.positionY - a2.height, a2.maxY = a2[r2(293)] + a2[r2(1363)], Id(a2, t2);
    }
  }
  for (var i2 = 0; i2 < t2.nodeSize; i2++) {
    var a2 = t2[r2(698)][i2];
    0 < a2.children.length && !a2.isLocked && (a2.positionX = (a2.maxX + a2.minX) / 2, a2[r2(293)] = (a2.maxY + a2[r2(1085)]) / 2, a2.width = a2.maxX - a2.minX, a2[r2(1363)] = a2[r2(696)] - a2.minY);
  }
}, Fd = function(t2, n2, r2) {
  var i2 = Math[e(1311)](t2 * t2 + n2 * n2);
  if (i2 > r2) var a2 = { x: r2 * t2 / i2, y: r2 * n2 / i2 };
  else var a2 = { x: t2, y: n2 };
  return a2;
}, Id = function(t2, n2) {
  var r2 = e, i2 = t2.parentId;
  if (i2 != null) {
    var a2 = n2.layoutNodes[n2.idToIndex[i2]], o2 = false;
    if ((a2[r2(993)] == null || t2.maxX + a2.padRight > a2.maxX) && (a2.maxX = t2.maxX + a2.padRight, o2 = true), (a2.minX == null || t2[r2(1426)] - a2.padLeft < a2.minX) && (a2.minX = t2[r2(1426)] - a2[r2(1005)], o2 = true), (a2.maxY == null || t2[r2(696)] + a2.padBottom > a2.maxY) && (a2.maxY = t2[r2(696)] + a2.padBottom, o2 = true), (a2[r2(1085)] == null || t2[r2(1085)] - a2.padTop < a2.minY) && (a2.minY = t2.minY - a2[r2(940)], o2 = true), o2) return Id(a2, n2);
  }
}, Ld = function(t2, n2) {
  for (var r2 = e, i2 = t2[r2(698)], a2 = [], o2 = 0; o2 < i2.length; o2++) {
    var s2 = i2[o2], c2 = s2.cmptId;
    (a2[c2] = a2[c2] || []).push(s2);
  }
  for (var l2 = 0, o2 = 0; o2 < a2.length; o2++) {
    var u2 = a2[o2];
    if (u2) {
      u2.x1 = 1 / 0, u2.x2 = -1 / 0, u2.y1 = 1 / 0, u2.y2 = -1 / 0;
      for (var d2 = 0; d2 < u2.length; d2++) {
        var f2 = u2[d2];
        u2.x1 = Math.min(u2.x1, f2.positionX - f2[r2(901)] / 2), u2.x2 = Math.max(u2.x2, f2.positionX + f2[r2(901)] / 2), u2.y1 = Math.min(u2.y1, f2.positionY - f2.height / 2), u2.y2 = Math.max(u2.y2, f2.positionY + f2.height / 2);
      }
      u2.w = u2.x2 - u2.x1, u2.h = u2.y2 - u2.y1, l2 += u2.w * u2.h;
    }
  }
  a2.sort(function(e2, t3) {
    return t3.w * t3.h - e2.w * e2.h;
  });
  for (var p2 = 0, m2 = 0, h2 = 0, g2 = 0, _2 = Math.sqrt(l2) * t2.clientWidth / t2.clientHeight, o2 = 0; o2 < a2.length; o2++) {
    var u2 = a2[o2];
    if (u2) {
      for (var d2 = 0; d2 < u2.length; d2++) {
        var f2 = u2[d2];
        f2.isLocked || (f2.positionX += p2 - u2.x1, f2[r2(293)] += m2 - u2.y1);
      }
      p2 += u2.w + n2[r2(358)], h2 += u2.w + n2.componentSpacing, g2 = Math[r2(701)](g2, u2.h), h2 > _2 && (m2 += g2 + n2.componentSpacing, p2 = 0, h2 = 0, g2 = 0);
    }
  }
}, Rd = { fit: true, padding: 30, boundingBox: void 0, avoidOverlap: true, avoidOverlapPadding: 10, nodeDimensionsIncludeLabels: false, spacingFactor: void 0, condense: false, rows: void 0, cols: void 0, position: function(e2) {
}, sort: void 0, animate: false, animationDuration: 500, animationEasing: void 0, animateFilter: function(e2, t2) {
  return true;
}, ready: void 0, stop: void 0, transform: function(e2, t2) {
  return t2;
} };
function zd(e2) {
  this.options = Z({}, Rd, e2);
}
zd.prototype[e(1039)] = function() {
  var t2 = e, n2 = this[t2(712)], r2 = n2, i2 = n2.cy, a2 = r2.eles, o2 = a2[t2(565)]().not(`:parent`);
  r2.sort && (o2 = o2.sort(r2.sort));
  var s2 = Kn(r2.boundingBox ? r2.boundingBox : { x1: 0, y1: 0, w: i2.width(), h: i2.height() });
  if (s2.h === 0 || s2.w === 0) a2.nodes().layoutPositions(this, r2, function(e2) {
    return { x: s2.x1, y: s2.y1 };
  });
  else {
    var c2 = o2.size(), l2 = Math.sqrt(c2 * s2.h / s2.w), u2 = Math.round(l2), d2 = Math.round(s2.w / s2.h * l2), f2 = function(e2) {
      var n3 = t2;
      if (e2 == null) return Math[n3(1120)](u2, d2);
      Math.min(u2, d2) == u2 ? u2 = e2 : d2 = e2;
    }, p2 = function(e2) {
      var n3 = t2;
      if (e2 == null) return Math.max(u2, d2);
      Math[n3(701)](u2, d2) == u2 ? u2 = e2 : d2 = e2;
    }, m2 = r2.rows, h2 = r2[t2(1139)] == null ? r2.columns : r2.cols;
    if (m2 != null && h2 != null) u2 = m2, d2 = h2;
    else if (m2 != null && h2 == null) u2 = m2, d2 = Math.ceil(c2 / u2);
    else if (m2 == null && h2 != null) d2 = h2, u2 = Math.ceil(c2 / d2);
    else if (d2 * u2 > c2) {
      var g2 = f2(), _2 = p2();
      (g2 - 1) * _2 >= c2 ? f2(g2 - 1) : (_2 - 1) * g2 >= c2 && p2(_2 - 1);
    } else for (; d2 * u2 < c2; ) {
      var v2 = f2(), y2 = p2();
      (y2 + 1) * v2 >= c2 ? p2(y2 + 1) : f2(v2 + 1);
    }
    var b2 = s2.w / d2, x2 = s2.h / u2;
    if (r2.condense && (b2 = 0, x2 = 0), r2[t2(1048)]) for (var S2 = 0; S2 < o2.length; S2++) {
      var C2 = o2[S2], w2 = C2._private.position;
      (w2.x == null || w2.y == null) && (w2.x = 0, w2.y = 0);
      var T2 = C2[t2(1223)](r2), E2 = r2[t2(1155)], D2 = T2.w + E2, O2 = T2.h + E2;
      b2 = Math[t2(701)](b2, D2), x2 = Math[t2(701)](x2, O2);
    }
    for (var k2 = {}, A2 = function(e2, t3) {
      return !!k2[`c-` + e2 + `-` + t3];
    }, j2 = function(e2, t3) {
      k2[`c-` + e2 + `-` + t3] = true;
    }, M2 = 0, N2 = 0, P2 = function() {
      N2++, N2 >= d2 && (N2 = 0, M2++);
    }, F2 = {}, I2 = 0; I2 < o2.length; I2++) {
      var L2 = o2[I2], R2 = r2[t2(225)](L2);
      if (R2 && (R2.row !== void 0 || R2.col !== void 0)) {
        var z2 = { row: R2.row, col: R2.col };
        if (z2[t2(1201)] === void 0) for (z2.col = 0; A2(z2.row, z2.col); ) z2.col++;
        else if (z2.row === void 0) for (z2.row = 0; A2(z2.row, z2.col); ) z2.row++;
        F2[L2.id()] = z2, j2(z2.row, z2.col);
      }
    }
    o2.layoutPositions(this, r2, function(e2, n3) {
      var r3 = t2, i3, a3;
      if (e2.locked() || e2.isParent()) return false;
      var o3 = F2[e2.id()];
      if (o3) i3 = o3[r3(1201)] * b2 + b2 / 2 + s2.x1, a3 = o3.row * x2 + x2 / 2 + s2.y1;
      else {
        for (; A2(M2, N2); ) P2();
        i3 = N2 * b2 + b2 / 2 + s2.x1, a3 = M2 * x2 + x2 / 2 + s2.y1, j2(M2, N2), P2();
      }
      return { x: i3, y: a3 };
    });
  }
  return this;
};
var Bd = { ready: function() {
}, stop: function() {
} };
function Vd(e2) {
  this.options = Z({}, Bd, e2);
}
Vd.prototype.run = function() {
  var t2 = e, n2 = this[t2(712)], r2 = n2.eles, i2 = this;
  return n2.cy, i2[t2(818)](t2(1107)), r2[t2(565)]().positions(function() {
    return { x: 0, y: 0 };
  }), i2[t2(873)](t2(753), n2.ready), i2.emit(`layoutready`), i2.one(`layoutstop`, n2.stop), i2[t2(818)](t2(1388)), this;
}, Vd.prototype.stop = function() {
  return this;
};
var Hd = { positions: void 0, zoom: void 0, pan: void 0, fit: true, padding: 30, spacingFactor: void 0, animate: false, animationDuration: 500, animationEasing: void 0, animateFilter: function(e2, t2) {
  return true;
}, ready: void 0, stop: void 0, transform: function(e2, t2) {
  return t2;
} };
function Ud(e2) {
  this.options = Z({}, Hd, e2);
}
Ud.prototype[e(1039)] = function() {
  var t2 = e, n2 = this[t2(712)], r2 = n2.eles.nodes(), i2 = D(n2[t2(1314)]);
  function a2(e2) {
    var r3 = t2;
    return n2.positions == null ? Dn(e2.position()) : i2 ? n2[r3(1314)](e2) : n2.positions[e2._private[r3(1036)].id] ?? null;
  }
  return r2.layoutPositions(this, n2, function(e2, t3) {
    var n3 = a2(e2);
    return e2.locked() || n3 == null ? false : n3;
  }), this;
};
var Wd = { fit: true, padding: 30, boundingBox: void 0, animate: false, animationDuration: 500, animationEasing: void 0, animateFilter: function(e2, t2) {
  return true;
}, ready: void 0, stop: void 0, transform: function(e2, t2) {
  return t2;
} };
function Gd(t2) {
  var n2 = e;
  this[n2(712)] = Z({}, Wd, t2);
}
Gd.prototype.run = function() {
  var t2 = e, n2 = this.options, r2 = n2.cy, i2 = n2.eles, a2 = Kn(n2.boundingBox ? n2.boundingBox : { x1: 0, y1: 0, w: r2.width(), h: r2.height() });
  return i2.nodes()[t2(1098)](this, n2, function(e2, n3) {
    var r3 = t2;
    return { x: a2.x1 + Math.round(Math.random() * a2.w), y: a2.y1 + Math.round(Math[r3(1278)]() * a2.h) };
  }), this;
};
var Kd = [{ name: `breadthfirst`, impl: ud }, { name: `circle`, impl: fd }, { name: `concentric`, impl: md }, { name: `cose`, impl: _d }, { name: `grid`, impl: zd }, { name: `null`, impl: Vd }, { name: `preset`, impl: Ud }, { name: `random`, impl: Gd }];
function qd(t2) {
  var n2 = e;
  this[n2(712)] = t2, this.notifications = 0;
}
var Jd = function() {
}, Yd = function() {
  throw Error(`A headless instance can not render images`);
};
qd.prototype = { recalculateRenderedStyle: Jd, notify: function() {
  var t2 = e;
  this[t2(713)]++;
}, init: Jd, isHeadless: function() {
  return true;
}, png: Yd, jpg: Yd };
var Xd = {};
Xd.arrowShapeWidth = 0.3, Xd.registerArrowShapes = function() {
  var t2 = e, n2 = this.arrowShapes = {}, r2 = this, i2 = function(e2, t3, n3, r3, i3, a3, o3) {
    var s3 = i3.x - n3 / 2 - o3, c3 = i3.x + n3 / 2 + o3, l3 = i3.y - n3 / 2 - o3, u2 = i3.y + n3 / 2 + o3;
    return s3 <= e2 && e2 <= c3 && l3 <= t3 && t3 <= u2;
  }, a2 = function(e2, t3, n3, r3, i3) {
    var a3 = $, o3 = e2 * Math.cos(r3) - t3 * Math[a3(1040)](r3), s3 = e2 * Math.sin(r3) + t3 * Math.cos(r3), c3 = o3 * n3, l3 = s3 * n3;
    return { x: c3 + i3.x, y: l3 + i3.y };
  }, o2 = function(e2, t3, n3, r3) {
    for (var i3 = $, o3 = [], s3 = 0; s3 < e2[i3(441)]; s3 += 2) {
      var c3 = e2[s3], l3 = e2[s3 + 1];
      o3.push(a2(c3, l3, t3, n3, r3));
    }
    return o3;
  }, s2 = function(e2) {
    for (var t3 = $, n3 = [], r3 = 0; r3 < e2[t3(441)]; r3++) {
      var i3 = e2[r3];
      n3.push(i3.x, i3.y);
    }
    return n3;
  }, c2 = function(e2) {
    var t3 = $;
    return e2.pstyle(`width`).pfValue * e2[t3(1373)](`arrow-scale`).pfValue * 2;
  }, l2 = function(e2, t3) {
    E(t3) && (t3 = n2[t3]), n2[e2] = Z({ name: e2, points: [-0.15, -0.3, 0.15, -0.3, 0.15, 0.3, -0.15, 0.3], collide: function(e3, t4, n3, r3, i3, a3) {
      var c3 = $;
      return mr(e3, t4, s2(o2(this[c3(711)], n3 + 2 * a3, r3, i3)));
    }, roughCollide: i2, draw: function(e3, t4, n3, i3) {
      var a3 = o2(this.points, t4, n3, i3);
      r2.arrowShapeImpl(`polygon`)(e3, a3);
    }, spacing: function(e3) {
      return 0;
    }, gap: c2 }, t3);
  };
  l2(`none`, { collide: Pt, roughCollide: Pt, draw: It, spacing: Ft, gap: Ft }), l2(t2(692), { points: [-0.15, -0.3, 0, 0, 0.15, -0.3] }), l2(`arrow`, `triangle`), l2(t2(630), { points: n2.triangle.points, controlPoint: [0, -0.15], roughCollide: i2, draw: function(e2, n3, i3, s3, c3) {
    var l3 = t2, u2 = o2(this.points, n3, i3, s3), d2 = this.controlPoint, f2 = a2(d2[0], d2[1], n3, i3, s3);
    r2.arrowShapeImpl(this[l3(958)])(e2, u2, f2);
  }, gap: function(e2) {
    return c2(e2) * 0.8;
  } }), l2(`triangle-tee`, { points: [0, 0, 0.15, -0.3, -0.15, -0.3, 0, 0], pointsTee: [-0.15, -0.4, -0.15, -0.5, 0.15, -0.5, 0.15, -0.4], collide: function(e2, n3, r3, i3, a3, c3, l3) {
    var u2 = t2, d2 = s2(o2(this.points, r3 + 2 * l3, i3, a3)), f2 = s2(o2(this[u2(1073)], r3 + 2 * l3, i3, a3));
    return mr(e2, n3, d2) || mr(e2, n3, f2);
  }, draw: function(e2, n3, i3, a3, s3) {
    var c3 = t2, l3 = o2(this[c3(711)], n3, i3, a3), u2 = o2(this.pointsTee, n3, i3, a3);
    r2.arrowShapeImpl(this[c3(958)])(e2, l3, u2);
  } }), l2(t2(500), { radius: 0.15, pointsTr: [0, -0.15, 0.15, -0.45, -0.15, -0.45, 0, -0.15], collide: function(e2, n3, r3, i3, a3, c3, l3) {
    var u2 = t2, d2 = a3, f2 = (d2.x - e2) ** 2 + Math[u2(1252)](d2.y - n3, 2) <= ((r3 + 2 * l3) * this.radius) ** 2;
    return mr(e2, n3, s2(o2(this.points, r3 + 2 * l3, i3, a3))) || f2;
  }, draw: function(e2, n3, i3, a3, s3) {
    var c3 = t2, l3 = o2(this.pointsTr, n3, i3, a3);
    r2.arrowShapeImpl(this[c3(958)])(e2, l3, a3.x, a3.y, this.radius * n3);
  }, spacing: function(e2) {
    var n3 = t2;
    return r2.getArrowWidth(e2.pstyle(`width`).pfValue, e2.pstyle(`arrow-scale`)[n3(1310)]) * this.radius;
  } }), l2(`triangle-cross`, { points: [0, 0, 0.15, -0.3, -0.15, -0.3, 0, 0], baseCrossLinePts: [-0.15, -0.4, -0.15, -0.4, 0.15, -0.4, 0.15, -0.4], crossLinePts: function(e2, t3) {
    var n3 = this.baseCrossLinePts.slice(), r3 = t3 / e2, i3 = 3, a3 = 5;
    return n3[i3] = n3[i3] - r3, n3[a3] = n3[a3] - r3, n3;
  }, collide: function(e2, n3, r3, i3, a3, c3, l3) {
    var u2 = t2, d2 = s2(o2(this.points, r3 + 2 * l3, i3, a3)), f2 = s2(o2(this[u2(290)](r3, c3), r3 + 2 * l3, i3, a3));
    return mr(e2, n3, d2) || mr(e2, n3, f2);
  }, draw: function(e2, n3, i3, a3, s3) {
    var c3 = t2, l3 = o2(this.points, n3, i3, a3), u2 = o2(this.crossLinePts(n3, s3), n3, i3, a3);
    r2[c3(899)](this[c3(958)])(e2, l3, u2);
  } }), l2(`vee`, { points: [-0.15, -0.3, 0, 0, 0.15, -0.3, 0, -0.15], gap: function(e2) {
    return c2(e2) * 0.525;
  } }), l2(`circle`, { radius: 0.15, collide: function(e2, n3, r3, i3, a3, o3, s3) {
    var c3 = t2, l3 = a3;
    return (l3.x - e2) ** 2 + (l3.y - n3) ** 2 <= Math[c3(1252)]((r3 + 2 * s3) * this.radius, 2);
  }, draw: function(e2, n3, i3, a3, o3) {
    var s3 = t2;
    r2.arrowShapeImpl(this[s3(958)])(e2, a3.x, a3.y, this.radius * n3);
  }, spacing: function(e2) {
    var n3 = t2;
    return r2.getArrowWidth(e2.pstyle(`width`)[n3(676)], e2.pstyle(`arrow-scale`).value) * this.radius;
  } }), l2(t2(1423), { points: [-0.15, 0, -0.15, -0.1, 0.15, -0.1, 0.15, 0], spacing: function(e2) {
    return 1;
  }, gap: function(e2) {
    return 1;
  } }), l2(t2(978), { points: [-0.15, 0, 0.15, 0, 0.15, -0.3, -0.15, -0.3] }), l2(`diamond`, { points: [-0.15, -0.15, 0, -0.3, 0.15, -0.15, 0, 0], gap: function(e2) {
    return e2.pstyle(`width`).pfValue * e2.pstyle(`arrow-scale`).value;
  } }), l2(`chevron`, { points: [0, 0, -0.15, -0.15, -0.1, -0.2, 0, -0.1, 0.1, -0.2, 0.15, -0.15], gap: function(e2) {
    var n3 = t2;
    return 0.95 * e2[n3(1373)](`width`).pfValue * e2[n3(1373)](`arrow-scale`).value;
  } });
};
var Zd = {};
Zd.projectIntoViewport = function(e2, t2) {
  var n2 = this.cy, r2 = this.findContainerClientCoords(), i2 = r2[0], a2 = r2[1], o2 = r2[4], s2 = n2.pan(), c2 = n2.zoom();
  return [((e2 - i2) / o2 - s2.x) / c2, ((t2 - a2) / o2 - s2.y) / c2];
}, Zd.findContainerClientCoords = function() {
  var t2 = e;
  if (this.containerBB) return this.containerBB;
  var n2 = this.container, r2 = n2.getBoundingClientRect(), i2 = this.cy.window().getComputedStyle(n2), a2 = function(e2) {
    return parseFloat(i2.getPropertyValue(e2));
  }, o2 = { left: a2(`padding-left`), right: a2(`padding-right`), top: a2(`padding-top`), bottom: a2(`padding-bottom`) }, s2 = { left: a2(`border-left-width`), right: a2(t2(1342)), top: a2(`border-top-width`), bottom: a2(`border-bottom-width`) }, c2 = n2.clientWidth, l2 = n2[t2(844)], u2 = o2.left + o2.right, d2 = o2.top + o2.bottom, f2 = s2.left + s2.right, p2 = r2[t2(901)] / (c2 + f2), m2 = c2 - u2, h2 = l2 - d2, g2 = r2.left + o2[t2(474)] + s2.left, _2 = r2.top + o2.top + s2.top;
  return this[t2(611)] = [g2, _2, m2, h2, p2];
}, Zd.invalidateContainerClientCoordsCache = function() {
  this.containerBB = null;
}, Zd.findNearestElement = function(e2, t2, n2, r2) {
  return this.findNearestElements(e2, t2, n2, r2)[0];
}, Zd.findNearestElements = function(t2, n2, r2, i2) {
  var a2 = e, o2 = this, s2 = this, c2 = s2.getCachedZSortedEles(), l2 = [], u2 = s2.cy.zoom(), d2 = s2.cy.hasCompoundNodes(), f2 = (i2 ? 24 : 8) / u2, p2 = (i2 ? 8 : 2) / u2, m2 = (i2 ? 8 : 2) / u2, h2 = 1 / 0, g2, _2;
  r2 && (c2 = c2.interactive);
  function v2(e2, t3) {
    var n3 = $;
    if (e2.isNode()) {
      if (_2) return;
      _2 = e2, l2.push(e2);
    }
    if (e2.isEdge() && (t3 == null || t3 < h2)) if (g2) {
      if (g2.pstyle(`z-compound-depth`).value === e2[n3(1373)](`z-compound-depth`).value && g2.pstyle(`z-compound-depth`).value === e2.pstyle(`z-compound-depth`).value) {
        for (var r3 = 0; r3 < l2.length; r3++) if (l2[r3][n3(230)]()) {
          l2[r3] = e2, g2 = e2, h2 = t3 ?? h2;
          break;
        }
      }
    } else l2.push(e2), g2 = e2, h2 = t3 ?? h2;
  }
  function y2(e2) {
    var r3 = $, i3 = e2.outerWidth() + 2 * p2, a3 = e2.outerHeight() + 2 * p2, c3 = i3 / 2, l3 = a3 / 2, u3 = e2.position(), d3 = e2.pstyle(`corner-radius`).value === r3(1037) ? `auto` : e2.pstyle(r3(1344)).pfValue, f3 = e2._private.rscratch;
    if (u3.x - c3 <= t2 && t2 <= u3.x + c3 && u3.y - l3 <= n2 && n2 <= u3.y + l3 && s2[r3(1022)][o2.getNodeShape(e2)].checkPoint(t2, n2, 0, i3, a3, u3.x, u3.y, d3, f3)) return v2(e2, 0), true;
  }
  function b2(e2) {
    var r3 = $, i3 = e2[r3(820)], a3 = i3.rscratch, c3 = e2.pstyle(r3(901))[r3(676)], u3 = e2.pstyle(`arrow-scale`).value, p3 = c3 / 2 + f2, m3 = p3 * p3, h3 = p3 * 2, g3 = i3.source, _3 = i3.target, b3;
    if (a3.edgeType === `segments` || a3[r3(918)] === `straight` || a3.edgeType === `haystack`) {
      for (var x3 = a3.allpts, S3 = 0; S3 + 3 < x3.length; S3 += 2) if (cr(t2, n2, x3[S3], x3[S3 + 1], x3[S3 + 2], x3[S3 + 3], h3) && m3 > (b3 = pr(t2, n2, x3[S3], x3[S3 + 1], x3[S3 + 2], x3[S3 + 3]))) return v2(e2, b3), true;
    } else if (a3[r3(918)] === r3(1167) || a3.edgeType === r3(492) || a3.edgeType === `self` || a3.edgeType === `compound`) {
      for (var x3 = a3[r3(451)], S3 = 0; S3 + 5 < a3.allpts.length; S3 += 4) if (lr(t2, n2, x3[S3], x3[S3 + 1], x3[S3 + 2], x3[S3 + 3], x3[S3 + 4], x3[S3 + 5], h3) && m3 > (b3 = fr(t2, n2, x3[S3], x3[S3 + 1], x3[S3 + 2], x3[S3 + 3], x3[S3 + 4], x3[S3 + 5]))) return v2(e2, b3), true;
    }
    for (var g3 = g3 || i3.source, _3 = _3 || i3.target, C3 = o2.getArrowWidth(c3, u3), w3 = [{ name: `source`, x: a3.arrowStartX, y: a3.arrowStartY, angle: a3.srcArrowAngle }, { name: `target`, x: a3[r3(791)], y: a3.arrowEndY, angle: a3.tgtArrowAngle }, { name: `mid-source`, x: a3[r3(1315)], y: a3.midY, angle: a3.midsrcArrowAngle }, { name: `mid-target`, x: a3.midX, y: a3.midY, angle: a3[r3(880)] }], S3 = 0; S3 < w3.length; S3++) {
      var T2 = w3[S3], E2 = s2[r3(1046)][e2.pstyle(T2.name + `-arrow-shape`).value], D2 = e2.pstyle(`width`).pfValue;
      if (E2.roughCollide(t2, n2, C3, T2.angle, { x: T2.x, y: T2.y }, D2, f2) && E2.collide(t2, n2, C3, T2.angle, { x: T2.x, y: T2.y }, D2, f2)) return v2(e2), true;
    }
    d2 && l2.length > 0 && (y2(g3), y2(_3));
  }
  function x2(e2, t3, n3) {
    return Xt(e2, t3, n3);
  }
  function S2(e2, r3) {
    var i3 = $, a3 = e2[i3(820)], o3 = m2, s3 = r3 ? r3 + `-` : ``;
    e2.boundingBox();
    var c3 = a3.labelBounds[r3 || `main`], l3 = e2.pstyle(s3 + `label`)[i3(1310)];
    if (!(e2.pstyle(`text-events`).strValue !== `yes` || !l3)) {
      var u3 = x2(a3.rscratch, `labelX`, r3), d3 = x2(a3.rscratch, `labelY`, r3), f3 = x2(a3.rscratch, i3(835), r3), p3 = e2.pstyle(s3 + `text-margin-x`)[i3(676)], h3 = e2[i3(1373)](s3 + `text-margin-y`).pfValue, g3 = c3.x1 - o3 - p3, _3 = c3.x2 + o3 - p3, y3 = c3.y1 - o3 - h3, b3 = c3.y2 + o3 - h3;
      if (f3) {
        var S3 = Math[i3(1188)](f3), C3 = Math.sin(f3), w3 = function(e3, t3) {
          return e3 -= u3, t3 -= d3, { x: e3 * S3 - t3 * C3 + u3, y: e3 * C3 + t3 * S3 + d3 };
        }, T2 = w3(g3, y3), E2 = w3(g3, b3), D2 = w3(_3, y3), O2 = w3(_3, b3);
        if (mr(t2, n2, [T2.x + p3, T2.y + h3, D2.x + p3, D2.y + h3, O2.x + p3, O2.y + h3, E2.x + p3, E2.y + h3])) return v2(e2), true;
      } else if (tr(c3, t2, n2)) return v2(e2), true;
    }
  }
  for (var C2 = c2.length - 1; C2 >= 0; C2--) {
    var w2 = c2[C2];
    w2[a2(704)]() ? y2(w2) || S2(w2) : b2(w2) || S2(w2) || S2(w2, `source`) || S2(w2, `target`);
  }
  return l2;
}, Zd.getAllInBox = function(t2, n2, r2, i2) {
  var a2 = e, o2 = this.getCachedZSortedEles()[a2(777)], s2 = 2 / this.cy[a2(1242)](), c2 = [], l2 = Math.min(t2, r2), u2 = Math.max(t2, r2), d2 = Math.min(n2, i2), f2 = Math.max(n2, i2);
  t2 = l2, r2 = u2, n2 = d2, i2 = f2;
  var m2 = Kn({ x1: t2, y1: n2, x2: r2, y2: i2 }), h2 = [{ x: m2.x1, y: m2.y1 }, { x: m2.x2, y: m2.y1 }, { x: m2.x2, y: m2.y2 }, { x: m2.x1, y: m2.y2 }], g2 = [[h2[0], h2[1]], [h2[1], h2[2]], [h2[2], h2[3]], [h2[3], h2[0]]];
  function _2(e2, t3, n3) {
    return Xt(e2, t3, n3);
  }
  function v2(e2, t3) {
    var n3 = a2, r3 = e2._private, i3 = s2, o3 = ``;
    e2.boundingBox();
    var c3 = r3.labelBounds.main;
    if (!c3) return null;
    var l3 = _2(r3.rscratch, `labelX`, t3), u3 = _2(r3[n3(1151)], `labelY`, t3), d3 = _2(r3.rscratch, `labelAngle`, t3), f3 = e2.pstyle(o3 + `text-margin-x`).pfValue, p2 = e2.pstyle(o3 + `text-margin-y`).pfValue, m3 = c3.x1 - i3 - f3, h3 = c3.x2 + i3 - f3, g3 = c3.y1 - i3 - p2, v3 = c3.y2 + i3 - p2;
    if (d3) {
      var y3 = Math.cos(d3), b3 = Math[n3(1040)](d3), x3 = function(e3, t4) {
        return e3 -= l3, t4 -= u3, { x: e3 * y3 - t4 * b3 + l3, y: e3 * b3 + t4 * y3 + u3 };
      };
      return [x3(m3, g3), x3(h3, g3), x3(h3, v3), x3(m3, v3)];
    } else return [{ x: m3, y: g3 }, { x: h3, y: g3 }, { x: h3, y: v3 }, { x: m3, y: v3 }];
  }
  function y2(e2, t3, n3, r3) {
    function i3(e3, t4, n4) {
      return (n4.y - e3.y) * (t4.x - e3.x) > (t4.y - e3.y) * (n4.x - e3.x);
    }
    return i3(e2, n3, r3) !== i3(t3, n3, r3) && i3(e2, t3, n3) !== i3(e2, t3, r3);
  }
  for (var b2 = 0; b2 < o2.length; b2++) {
    var x2 = o2[b2];
    if (x2.isNode()) {
      var S2 = x2, C2 = S2.pstyle(`text-events`).strValue === a2(780), w2 = S2.pstyle(`box-selection`).strValue, T2 = S2.pstyle(`box-select-labels`).strValue === `yes`;
      if (w2 === `none`) continue;
      var E2 = (w2 === `overlap` || T2) && C2, D2 = S2.boundingBox({ includeNodes: true, includeEdges: false, includeLabels: E2 });
      if (w2 === `contain`) {
        var O2 = false;
        if (T2 && C2) {
          var k2 = v2(S2);
          k2 && Ir(k2, h2) && (c2.push(S2), O2 = true);
        }
        !O2 && rr(m2, D2) && c2.push(S2);
      } else if (w2 === `overlap` && er(m2, D2)) {
        var A2 = S2.boundingBox({ includeNodes: true, includeEdges: true, includeLabels: false, includeMainLabels: false, includeSourceLabels: false, includeTargetLabels: false });
        if (Ir([{ x: A2.x1, y: A2.y1 }, { x: A2.x2, y: A2.y1 }, { x: A2.x2, y: A2.y2 }, { x: A2.x1, y: A2.y2 }], h2)) c2.push(S2);
        else {
          var j2 = v2(S2);
          j2 && Ir(j2, h2) && c2[a2(254)](S2);
        }
      }
    } else {
      var M2 = x2, N2 = M2._private, P2 = N2.rscratch, F2 = M2.pstyle(`box-selection`).strValue;
      if (F2 === `none`) continue;
      if (F2 === `contain`) {
        if (P2.startX != null && P2[a2(496)] != null && !tr(m2, P2.startX, P2.startY) || P2[a2(1145)] != null && P2.endY != null && !tr(m2, P2.endX, P2[a2(1e3)])) continue;
        if (P2.edgeType === `bezier` || P2.edgeType === `multibezier` || P2.edgeType === `self` || P2.edgeType === a2(340) || P2.edgeType === a2(1368) || P2.edgeType === `haystack`) {
          for (var I2 = N2.rstyle.bezierPts || N2.rstyle.linePts || N2.rstyle.haystackPts, L2 = true, R2 = 0; R2 < I2.length; R2++) if (!nr(m2, I2[R2])) {
            L2 = false;
            break;
          }
          L2 && c2.push(M2);
        } else P2.edgeType === a2(955) && c2.push(M2);
      } else if (F2 === `overlap`) {
        var z2 = false;
        if (P2.startX != null && P2.startY != null && P2.endX != null && P2.endY != null && (tr(m2, P2.startX, P2.startY) || tr(m2, P2.endX, P2.endY))) c2.push(M2), z2 = true;
        else if (!z2 && P2.edgeType === `haystack`) {
          for (var B2 = N2.rstyle.haystackPts, V2 = 0; V2 < B2.length; V2++) if (nr(m2, B2[V2])) {
            c2.push(M2), z2 = true;
            break;
          }
        }
        if (!z2) {
          var H2 = N2.rstyle.bezierPts || N2.rstyle.linePts || N2.rstyle.haystackPts;
          if ((!H2 || H2.length < 2) && P2[a2(918)] === `straight` && P2[a2(291)] != null && P2.startY != null && P2.endX != null && P2.endY != null && (H2 = [{ x: P2.startX, y: P2.startY }, { x: P2.endX, y: P2.endY }]), !H2 || H2[a2(441)] < 2) continue;
          for (var U2 = 0; U2 < H2.length - 1; U2++) {
            for (var W2 = H2[U2], G2 = H2[U2 + 1], K2 = 0; K2 < g2.length; K2++) {
              var q2 = p(g2[K2], 2), J2 = q2[0], Y2 = q2[1];
              if (y2(W2, G2, J2, Y2)) {
                c2.push(M2), z2 = true;
                break;
              }
            }
            if (z2) break;
          }
        }
      }
    }
  }
  return c2;
};
var Qd = {};
Qd.calculateArrowAngles = function(t2) {
  var n2 = e, r2 = t2._private.rscratch, i2 = r2.edgeType === `haystack`, a2 = r2.edgeType === `bezier`, o2 = r2.edgeType === `multibezier`, s2 = r2.edgeType === `segments`, c2 = r2.edgeType === `compound`, l2 = r2[n2(918)] === `self`, u2, d2, f2, p2, m2, h2, g2, _2;
  if (i2 ? (f2 = r2[n2(1286)][0], p2 = r2.haystackPts[1], m2 = r2.haystackPts[2], h2 = r2.haystackPts[3]) : (f2 = r2.arrowStartX, p2 = r2.arrowStartY, m2 = r2.arrowEndX, h2 = r2.arrowEndY), g2 = r2.midX, _2 = r2[n2(672)], s2) u2 = f2 - r2[n2(577)][0], d2 = p2 - r2.segpts[1];
  else if (o2 || c2 || l2 || a2) {
    var v2 = r2.allpts, y2 = Hn(v2[0], v2[2], v2[4], 0.1), b2 = Hn(v2[1], v2[3], v2[5], 0.1);
    u2 = f2 - y2, d2 = p2 - b2;
  } else u2 = f2 - g2, d2 = p2 - _2;
  r2[n2(1268)] = In(u2, d2);
  var g2 = r2.midX, _2 = r2.midY;
  if (i2 && (g2 = (f2 + m2) / 2, _2 = (p2 + h2) / 2), u2 = m2 - f2, d2 = h2 - p2, s2) {
    var v2 = r2.allpts;
    if (v2.length / 2 % 2 == 0) {
      var x2 = v2.length / 2, S2 = x2 - 2;
      u2 = v2[x2] - v2[S2], d2 = v2[x2 + 1] - v2[S2 + 1];
    } else if (r2.isRound) u2 = r2[n2(746)][1], d2 = -r2.midVector[0];
    else {
      var x2 = v2[n2(441)] / 2 - 1, S2 = x2 - 2;
      u2 = v2[x2] - v2[S2], d2 = v2[x2 + 1] - v2[S2 + 1];
    }
  } else if (o2 || c2 || l2) {
    var v2 = r2.allpts, C2 = r2.ctrlpts, w2, T2, E2, D2;
    if (C2.length / 2 % 2 == 0) {
      var O2 = v2[n2(441)] / 2 - 1, k2 = O2 + 2, A2 = k2 + 2;
      w2 = Hn(v2[O2], v2[k2], v2[A2], 0), T2 = Hn(v2[O2 + 1], v2[k2 + 1], v2[A2 + 1], 0), E2 = Hn(v2[O2], v2[k2], v2[A2], 1e-4), D2 = Hn(v2[O2 + 1], v2[k2 + 1], v2[A2 + 1], 1e-4);
    } else {
      var k2 = v2.length / 2 - 1, O2 = k2 - 2, A2 = k2 + 2;
      w2 = Hn(v2[O2], v2[k2], v2[A2], 0.4999), T2 = Hn(v2[O2 + 1], v2[k2 + 1], v2[A2 + 1], 0.4999), E2 = Hn(v2[O2], v2[k2], v2[A2], 0.5), D2 = Hn(v2[O2 + 1], v2[k2 + 1], v2[A2 + 1], 0.5);
    }
    u2 = E2 - w2, d2 = D2 - T2;
  }
  if (r2.midtgtArrowAngle = In(u2, d2), r2.midDispX = u2, r2.midDispY = d2, u2 *= -1, d2 *= -1, s2) {
    var v2 = r2.allpts;
    if (v2.length / 2 % 2 != 0 && !r2.isRound) {
      var x2 = v2.length / 2 - 1, j2 = x2 + 2;
      u2 = -(v2[j2] - v2[x2]), d2 = -(v2[j2 + 1] - v2[x2 + 1]);
    }
  }
  if (r2[n2(250)] = In(u2, d2), s2) u2 = m2 - r2.segpts[r2.segpts.length - 2], d2 = h2 - r2.segpts[r2.segpts.length - 1];
  else if (o2 || c2 || l2 || a2) {
    var v2 = r2.allpts, M2 = v2.length, y2 = Hn(v2[M2 - 6], v2[M2 - 4], v2[M2 - 2], 0.9), b2 = Hn(v2[M2 - 5], v2[M2 - 3], v2[M2 - 1], 0.9);
    u2 = m2 - y2, d2 = h2 - b2;
  } else u2 = m2 - g2, d2 = h2 - _2;
  r2.tgtArrowAngle = In(u2, d2);
}, Qd.getArrowWidth = Qd.getArrowHeight = function(e2, t2) {
  var n2 = this.arrowWidthCache = this.arrowWidthCache || {}, r2 = n2[e2 + `, ` + t2];
  return r2 || (r2 = Math.max((e2 * 13.37) ** 0.9, 29) * t2, n2[e2 + `, ` + t2] = r2, r2);
};
var $d, ef, tf = {}, nf = {}, rf, af, of, sf, cf, lf, uf, df, ff, pf, mf, hf, gf, _f, vf, yf = function(e2, t2, n2) {
  n2.x = t2.x - e2.x, n2.y = t2.y - e2.y, n2.len = Math.sqrt(n2.x * n2.x + n2.y * n2.y), n2.nx = n2.x / n2.len, n2.ny = n2.y / n2.len, n2.ang = Math.atan2(n2.ny, n2.nx);
}, bf = function(t2, n2) {
  var r2 = e;
  n2.x = t2.x * -1, n2.y = t2.y * -1, n2.nx = t2.nx * -1, n2.ny = t2.ny * -1, n2.ang = t2[r2(619)] > 0 ? -(Math.PI - t2.ang) : Math.PI + t2[r2(619)];
}, xf = function(t2, n2, r2, i2, a2) {
  var o2 = e;
  if (t2 === vf ? bf(nf, tf) : yf(n2, t2, tf), yf(n2, r2, nf), rf = tf.nx * nf.ny - tf.ny * nf.nx, af = tf.nx * nf.nx - tf.ny * -nf.ny, cf = Math.asin(Math.max(-1, Math.min(1, rf))), Math.abs(cf) < 1e-6) {
    $d = n2.x, ef = n2.y, uf = ff = 0;
    return;
  }
  of = 1, sf = false, af < 0 ? cf < 0 ? cf = Math.PI + cf : (cf = Math.PI - cf, of = -1, sf = true) : cf > 0 && (of = -1, sf = true), ff = n2.radius === void 0 ? i2 : n2[o2(853)], lf = cf / 2, pf = Math.min(tf.len / 2, nf[o2(1417)] / 2), a2 ? (df = Math[o2(1296)](Math.cos(lf) * ff / Math.sin(lf)), df > pf ? (df = pf, uf = Math[o2(1296)](df * Math.sin(lf) / Math.cos(lf))) : uf = ff) : (df = Math.min(pf, ff), uf = Math.abs(df * Math.sin(lf) / Math[o2(1188)](lf))), gf = n2.x + nf.nx * df, _f = n2.y + nf.ny * df, $d = gf - nf.ny * uf * of, ef = _f + nf.nx * uf * of, mf = n2.x + tf.nx * df, hf = n2.y + tf.ny * df, vf = n2;
};
function Sf(t2, n2) {
  var r2 = e;
  n2[r2(853)] === 0 ? t2.lineTo(n2.cx, n2.cy) : t2.arc(n2.cx, n2.cy, n2.radius, n2[r2(1128)], n2.endAngle, n2[r2(1020)]);
}
function Cf(t2, n2, r2, i2) {
  var a2 = e, o2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true;
  return i2 === 0 || n2.radius === 0 ? { cx: n2.x, cy: n2.y, radius: 0, startX: n2.x, startY: n2.y, stopX: n2.x, stopY: n2.y, startAngle: void 0, endAngle: void 0, counterClockwise: void 0 } : (xf(t2, n2, r2, i2, o2), { cx: $d, cy: ef, radius: uf, startX: mf, startY: hf, stopX: gf, stopY: _f, startAngle: tf[a2(619)] + Math.PI / 2 * of, endAngle: nf.ang - Math.PI / 2 * of, counterClockwise: sf });
}
var wf = 0.01, Tf = Math.sqrt(2 * wf), Ef = {};
Ef.findMidptPtsEtc = function(t2, n2) {
  var r2 = e, i2 = n2.posPts, a2 = n2.intersectionPts, o2 = n2.vectorNormInverse, s2, c2 = t2.pstyle(r2(569)), l2 = t2[r2(1373)](r2(342)), u2 = c2[r2(1389)] != null && l2.units != null, d2 = function(e2, t3, n3, r3) {
    var i3 = r3 - t3, a3 = n3 - e2, o3 = Math.sqrt(a3 * a3 + i3 * i3);
    return { x: -i3 / o3, y: a3 / o3 };
  };
  switch (t2.pstyle(`edge-distances`).value) {
    case `node-position`:
      s2 = i2;
      break;
    case `intersection`:
      s2 = a2;
      break;
    case r2(373):
      if (u2) {
        var f2 = p(this[r2(710)](t2.source()[0], c2), 2), m2 = f2[0], h2 = f2[1], g2 = p(this.manualEndptToPx(t2.target()[0], l2), 2), _2 = g2[0], v2 = g2[1], y2 = { x1: m2, y1: h2, x2: _2, y2: v2 };
        o2 = d2(m2, h2, _2, v2), s2 = y2;
      } else zt(`Edge ` + t2.id() + r2(258)), s2 = a2;
      break;
  }
  return { midptPts: s2, vectorNormInverse: o2 };
}, Ef.findHaystackPoints = function(t2) {
  for (var n2 = e, r2 = 0; r2 < t2.length; r2++) {
    var i2 = t2[r2], a2 = i2._private, o2 = a2.rscratch;
    if (!o2.haystack) {
      var s2 = Math.random() * 2 * Math.PI;
      o2.source = { x: Math.cos(s2), y: Math.sin(s2) }, s2 = Math.random() * 2 * Math.PI, o2.target = { x: Math.cos(s2), y: Math.sin(s2) };
    }
    var c2 = a2.source, l2 = a2.target, u2 = c2.position(), d2 = l2.position(), f2 = c2.width(), p2 = l2.width(), m2 = c2.height(), h2 = l2[n2(1363)](), g2 = i2.pstyle(`haystack-radius`).value / 2;
    o2[n2(1286)] = o2.allpts = [o2.source.x * f2 * g2 + u2.x, o2.source.y * m2 * g2 + u2.y, o2[n2(1192)].x * p2 * g2 + d2.x, o2.target.y * h2 * g2 + d2.y], o2.midX = (o2.allpts[0] + o2.allpts[2]) / 2, o2.midY = (o2.allpts[1] + o2.allpts[3]) / 2, o2.edgeType = `haystack`, o2[n2(1010)] = true, this.storeEdgeProjections(i2), this.calculateArrowAngles(i2), this.recalculateEdgeLabelProjections(i2), this[n2(1393)](i2);
  }
}, Ef[e(1237)] = function(t2, n2) {
  var r2 = e, i2 = t2._private.rscratch, a2 = t2.pstyle(`segment-weights`), o2 = t2.pstyle(`segment-distances`), s2 = t2[r2(1373)](`segment-radii`), c2 = t2[r2(1373)](`radius-type`), l2 = Math.min(a2[r2(676)][r2(441)], o2.pfValue.length), u2 = s2.pfValue[s2.pfValue.length - 1], d2 = c2[r2(676)][c2.pfValue.length - 1];
  i2.edgeType = `segments`, i2.segpts = [], i2.radii = [], i2.isArcRadius = [];
  for (var f2 = 0; f2 < l2; f2++) {
    var p2 = a2.pfValue[f2], m2 = o2.pfValue[f2], h2 = 1 - p2, g2 = p2, _2 = this.findMidptPtsEtc(t2, n2), v2 = _2.midptPts, y2 = _2.vectorNormInverse, b2 = { x: v2.x1 * h2 + v2.x2 * g2, y: v2.y1 * h2 + v2.y2 * g2 };
    i2.segpts[r2(254)](b2.x + y2.x * m2, b2.y + y2.y * m2), i2.radii.push(s2.pfValue[f2] === void 0 ? u2 : s2.pfValue[f2]), i2.isArcRadius[r2(254)]((c2.pfValue[f2] === void 0 ? d2 : c2.pfValue[f2]) === `arc-radius`);
  }
}, Ef.findLoopPoints = function(t2, n2, r2, i2) {
  var a2 = e, o2 = t2._private[a2(1151)], s2 = n2.dirCounts, c2 = n2.srcPos, l2 = t2.pstyle(a2(320)), u2 = l2 ? l2[a2(676)][0] : void 0, d2 = t2.pstyle(`loop-direction`)[a2(676)], f2 = t2.pstyle(`loop-sweep`).pfValue, p2 = t2.pstyle(a2(1177)).pfValue;
  o2.edgeType = `self`;
  var m2 = r2, h2 = p2;
  i2 && (m2 = 0, h2 = u2);
  var g2 = d2 - Math.PI / 2, _2 = g2 - f2 / 2, v2 = g2 + f2 / 2, y2 = String(d2 + `_` + f2);
  m2 = s2[y2] === void 0 ? s2[y2] = 0 : ++s2[y2], o2.ctrlpts = [c2.x + Math.cos(_2) * 1.4 * h2 * (m2 / 3 + 1), c2.y + Math.sin(_2) * 1.4 * h2 * (m2 / 3 + 1), c2.x + Math.cos(v2) * 1.4 * h2 * (m2 / 3 + 1), c2.y + Math[a2(1040)](v2) * 1.4 * h2 * (m2 / 3 + 1)];
}, Ef.findCompoundLoopPoints = function(t2, n2, r2, i2) {
  var a2 = e, o2 = t2._private.rscratch;
  o2[a2(918)] = a2(340);
  var s2 = n2.srcPos, c2 = n2[a2(387)], l2 = n2.srcW, u2 = n2[a2(728)], d2 = n2.tgtW, f2 = n2[a2(414)], p2 = t2[a2(1373)](`control-point-step-size`).pfValue, m2 = t2.pstyle(`control-point-distances`), h2 = m2 ? m2.pfValue[0] : void 0, g2 = r2, _2 = p2;
  i2 && (g2 = 0, _2 = h2);
  var v2 = 50, y2 = { x: s2.x - l2 / 2, y: s2.y - u2 / 2 }, b2 = { x: c2.x - d2 / 2, y: c2.y - f2 / 2 }, x2 = { x: Math.min(y2.x, b2.x), y: Math.min(y2.y, b2.y) }, S2 = 0.5, C2 = Math.max(S2, Math[a2(664)](l2 * wf)), w2 = Math.max(S2, Math.log(d2 * wf));
  o2.ctrlpts = [x2.x, x2.y - (1 + v2 ** 1.12 / 100) * _2 * (g2 / 3 + 1) * C2, x2.x - (1 + Math[a2(1252)](v2, 1.12) / 100) * _2 * (g2 / 3 + 1) * w2, x2.y];
}, Ef.findStraightEdgePoints = function(e2) {
  e2._private.rscratch.edgeType = `straight`;
}, Ef[e(1102)] = function(t2, n2, r2, i2, a2) {
  var o2 = e, s2 = t2._private.rscratch, c2 = t2.pstyle(o2(1177)).pfValue, l2 = t2.pstyle(`control-point-distances`), u2 = t2.pstyle(`control-point-weights`), d2 = l2 && u2 ? Math.min(l2.value[o2(441)], u2.value.length) : 1, f2 = l2 ? l2.pfValue[0] : void 0, p2 = u2.value[0], m2 = i2;
  s2.edgeType = m2 ? o2(492) : `bezier`, s2.ctrlpts = [];
  for (var h2 = 0; h2 < d2; h2++) {
    var g2 = (0.5 - n2.eles.length / 2 + r2) * c2 * (a2 ? -1 : 1), _2 = void 0, v2 = Rn(g2);
    m2 && (f2 = l2 ? l2[o2(676)][h2] : c2, p2 = u2.value[h2]), _2 = i2 ? f2 : f2 === void 0 ? void 0 : v2 * f2;
    var y2 = _2 === void 0 ? g2 : _2, b2 = 1 - p2, x2 = p2, S2 = this[o2(568)](t2, n2), C2 = S2.midptPts, w2 = S2[o2(1047)], T2 = { x: C2.x1 * b2 + C2.x2 * x2, y: C2.y1 * b2 + C2.y2 * x2 };
    s2.ctrlpts.push(T2.x + w2.x * y2, T2.y + w2.y * y2);
  }
}, Ef.findTaxiPoints = function(t2, n2) {
  var r2 = e, i2 = t2._private.rscratch;
  i2.edgeType = `segments`;
  var a2 = r2(490), o2 = `horizontal`, s2 = `leftward`, c2 = `rightward`, l2 = `downward`, u2 = r2(831), d2 = `auto`, f2 = n2.posPts, p2 = n2.srcW, m2 = n2.srcH, h2 = n2.tgtW, g2 = n2.tgtH, _2 = t2.pstyle(`edge-distances`).value !== r2(607), v2 = t2.pstyle(`taxi-direction`).value, y2 = v2, b2 = t2.pstyle(`taxi-turn`), x2 = b2[r2(1389)] === `%`, S2 = b2.pfValue, C2 = S2 < 0, w2 = t2.pstyle(`taxi-turn-min-distance`).pfValue, T2 = _2 ? (p2 + h2) / 2 : 0, E2 = _2 ? (m2 + g2) / 2 : 0, D2 = f2.x2 - f2.x1, O2 = f2.y2 - f2.y1, k2 = function(e2, t3) {
    return e2 > 0 ? Math[r2(701)](e2 - t3, 0) : Math.min(e2 + t3, 0);
  }, A2 = k2(D2, T2), j2 = k2(O2, E2), M2 = false;
  y2 === d2 ? v2 = Math.abs(A2) > Math.abs(j2) ? o2 : a2 : y2 === u2 || y2 === l2 ? (v2 = a2, M2 = true) : (y2 === s2 || y2 === c2) && (v2 = o2, M2 = true);
  var N2 = v2 === a2, P2 = N2 ? j2 : A2, F2 = N2 ? O2 : D2, I2 = Rn(F2), L2 = false;
  !(M2 && (x2 || C2)) && (y2 === l2 && F2 < 0 || y2 === u2 && F2 > 0 || y2 === s2 && F2 > 0 || y2 === c2 && F2 < 0) && (I2 *= -1, P2 = I2 * Math[r2(1296)](P2), L2 = true);
  var R2 = x2 ? (S2 < 0 ? 1 + S2 : S2) * P2 : (S2 < 0 ? P2 : 0) + S2 * I2, z2 = function(e2) {
    return Math.abs(e2) < w2 || Math.abs(e2) >= Math.abs(P2);
  }, B2 = z2(R2), V2 = z2(Math.abs(P2) - Math.abs(R2));
  if ((B2 || V2) && !L2) if (N2) {
    var H2 = Math.abs(F2) <= m2 / 2, U2 = Math.abs(D2) <= h2 / 2;
    if (H2) {
      var W2 = (f2.x1 + f2.x2) / 2;
      i2.segpts = [W2, f2.y1, W2, f2.y2];
    } else if (U2) {
      var G2 = (f2.y1 + f2.y2) / 2;
      i2.segpts = [f2.x1, G2, f2.x2, G2];
    } else i2.segpts = [f2.x1, f2.y2];
  } else {
    var K2 = Math.abs(F2) <= p2 / 2, q2 = Math.abs(O2) <= g2 / 2;
    if (K2) {
      var J2 = (f2.y1 + f2.y2) / 2;
      i2.segpts = [f2.x1, J2, f2.x2, J2];
    } else if (q2) {
      var Y2 = (f2.x1 + f2.x2) / 2;
      i2.segpts = [Y2, f2.y1, Y2, f2.y2];
    } else i2.segpts = [f2.x2, f2.y1];
  }
  else if (N2) {
    var ee2 = f2.y1 + R2 + (_2 ? m2 / 2 * I2 : 0);
    i2[r2(577)] = [f2.x1, ee2, f2.x2, ee2];
  } else {
    var X2 = f2.x1 + R2 + (_2 ? p2 / 2 * I2 : 0);
    i2.segpts = [X2, f2.y1, X2, f2.y2];
  }
  if (i2.isRound) {
    var te2 = t2.pstyle(r2(1038)).value, ne2 = t2.pstyle(r2(743)).value[0] === r2(1115);
    i2[r2(1006)] = Array(i2.segpts.length / 2).fill(te2), i2.isArcRadius = Array(i2[r2(577)].length / 2).fill(ne2);
  }
}, Ef[e(467)] = function(t2, n2) {
  var r2 = e, i2 = t2[r2(820)][r2(1151)];
  if (i2.edgeType === `bezier`) {
    var a2 = n2.srcPos, o2 = n2.tgtPos, s2 = n2[r2(715)], c2 = n2.srcH, l2 = n2.tgtW, u2 = n2.tgtH, d2 = n2[r2(1320)], f2 = n2.tgtShape, p2 = n2.srcCornerRadius, m2 = n2.tgtCornerRadius, h2 = n2[r2(852)], g2 = n2.tgtRs, _2 = !j(i2.startX) || !j(i2.startY), v2 = !j(i2.arrowStartX) || !j(i2.arrowStartY), y2 = !j(i2.endX) || !j(i2[r2(1e3)]), b2 = !j(i2.arrowEndX) || !j(i2.arrowEndY), x2 = 3 * (this.getArrowWidth(t2.pstyle(`width`).pfValue, t2.pstyle(`arrow-scale`).value) * this.arrowShapeWidth), S2 = zn({ x: i2.ctrlpts[0], y: i2.ctrlpts[1] }, { x: i2.startX, y: i2.startY }), C2 = S2 < x2, w2 = zn({ x: i2.ctrlpts[0], y: i2.ctrlpts[1] }, { x: i2[r2(1145)], y: i2[r2(1e3)] }), T2 = w2 < x2, E2 = false;
    if (_2 || v2 || C2) {
      E2 = true;
      var D2 = { x: i2.ctrlpts[0] - a2.x, y: i2.ctrlpts[1] - a2.y }, O2 = Math.sqrt(D2.x * D2.x + D2.y * D2.y), k2 = { x: D2.x / O2, y: D2.y / O2 }, A2 = Math.max(s2, c2), M2 = { x: i2.ctrlpts[0] + k2.x * 2 * A2, y: i2.ctrlpts[1] + k2.y * 2 * A2 }, N2 = d2.intersectLine(a2.x, a2.y, s2, c2, M2.x, M2.y, 0, p2, h2);
      C2 ? (i2.ctrlpts[0] = i2.ctrlpts[0] + k2.x * (x2 - S2), i2.ctrlpts[1] = i2.ctrlpts[1] + k2.y * (x2 - S2)) : (i2.ctrlpts[0] = N2[0] + k2.x * x2, i2.ctrlpts[1] = N2[1] + k2.y * x2);
    }
    if (y2 || b2 || T2) {
      E2 = true;
      var P2 = { x: i2[r2(459)][0] - o2.x, y: i2.ctrlpts[1] - o2.y }, F2 = Math.sqrt(P2.x * P2.x + P2.y * P2.y), I2 = { x: P2.x / F2, y: P2.y / F2 }, L2 = Math.max(s2, c2), R2 = { x: i2.ctrlpts[0] + I2.x * 2 * L2, y: i2.ctrlpts[1] + I2.y * 2 * L2 }, z2 = f2.intersectLine(o2.x, o2.y, l2, u2, R2.x, R2.y, 0, m2, g2);
      T2 ? (i2.ctrlpts[0] = i2.ctrlpts[0] + I2.x * (x2 - w2), i2.ctrlpts[1] = i2.ctrlpts[1] + I2.y * (x2 - w2)) : (i2.ctrlpts[0] = z2[0] + I2.x * x2, i2.ctrlpts[1] = z2[1] + I2.y * x2);
    }
    E2 && this.findEndpoints(t2);
  }
}, Ef.storeAllpts = function(t2) {
  var n2 = e, r2 = t2._private.rscratch;
  if (r2.edgeType === n2(492) || r2.edgeType === `bezier` || r2.edgeType === `self` || r2.edgeType === `compound`) {
    r2.allpts = [], r2.allpts.push(r2.startX, r2.startY);
    for (var i2 = 0; i2 + 1 < r2.ctrlpts.length; i2 += 2) r2.allpts.push(r2.ctrlpts[i2], r2.ctrlpts[i2 + 1]), i2 + 3 < r2[n2(459)][n2(441)] && r2.allpts.push((r2.ctrlpts[i2] + r2.ctrlpts[i2 + 2]) / 2, (r2[n2(459)][i2 + 1] + r2[n2(459)][i2 + 3]) / 2);
    r2.allpts.push(r2.endX, r2[n2(1e3)]);
    var a2, o2;
    r2.ctrlpts.length / 2 % 2 == 0 ? (a2 = r2[n2(451)].length / 2 - 1, r2.midX = r2.allpts[a2], r2.midY = r2.allpts[a2 + 1]) : (a2 = r2.allpts.length / 2 - 3, o2 = 0.5, r2.midX = Hn(r2.allpts[a2], r2.allpts[a2 + 2], r2.allpts[a2 + 4], o2), r2.midY = Hn(r2.allpts[a2 + 1], r2.allpts[a2 + 3], r2.allpts[a2 + 5], o2));
  } else if (r2.edgeType === `straight`) r2.allpts = [r2.startX, r2.startY, r2[n2(1145)], r2.endY], r2.midX = (r2.startX + r2.endX + r2.arrowStartX + r2.arrowEndX) / 4, r2.midY = (r2[n2(496)] + r2.endY + r2.arrowStartY + r2.arrowEndY) / 4;
  else if (r2.edgeType === `segments`) {
    if (r2.allpts = [], r2.allpts[n2(254)](r2.startX, r2.startY), r2[n2(451)].push.apply(r2.allpts, r2.segpts), r2.allpts[n2(254)](r2[n2(1145)], r2.endY), r2.isRound) {
      r2.roundCorners = [];
      for (var s2 = 2; s2 + 3 < r2.allpts.length; s2 += 2) {
        var c2 = r2.radii[s2 / 2 - 1], l2 = r2.isArcRadius[s2 / 2 - 1];
        r2.roundCorners.push(Cf({ x: r2.allpts[s2 - 2], y: r2.allpts[s2 - 1] }, { x: r2.allpts[s2], y: r2.allpts[s2 + 1], radius: c2 }, { x: r2[n2(451)][s2 + 2], y: r2.allpts[s2 + 3] }, c2, l2));
      }
    }
    if (r2[n2(577)].length % 4 == 0) {
      var u2 = r2.segpts.length / 2, d2 = u2 - 2;
      r2.midX = (r2.segpts[d2] + r2.segpts[u2]) / 2, r2[n2(672)] = (r2.segpts[d2 + 1] + r2.segpts[u2 + 1]) / 2;
    } else {
      var f2 = r2.segpts[n2(441)] / 2 - 1;
      if (!r2.isRound) r2[n2(1315)] = r2.segpts[f2], r2.midY = r2.segpts[f2 + 1];
      else {
        var p2 = { x: r2[n2(577)][f2], y: r2.segpts[f2 + 1] }, m2 = r2.roundCorners[f2 / 2];
        if (m2[n2(853)] === 0) {
          var h2 = { x: r2.segpts[f2 + 2], y: r2.segpts[f2 + 3] };
          r2.midX = p2.x, r2.midY = p2.y, r2.midVector = [p2.y - h2.y, h2.x - p2.x];
        } else {
          var g2 = [p2.x - m2.cx, p2.y - m2.cy], _2 = m2.radius / Math.sqrt(g2[0] ** 2 + Math[n2(1252)](g2[1], 2));
          g2 = g2.map(function(e2) {
            return e2 * _2;
          }), r2.midX = m2.cx + g2[0], r2.midY = m2.cy + g2[1], r2.midVector = g2;
        }
      }
    }
  }
}, Ef.checkForInvalidEdgeWarning = function(t2) {
  var n2 = e, r2 = t2[0]._private.rscratch;
  r2[n2(462)] || j(r2[n2(291)]) && j(r2.startY) && j(r2[n2(1145)]) && j(r2[n2(1e3)]) ? r2.loggedErr = false : r2.loggedErr || (r2.loggedErr = true, zt(n2(982) + t2.id() + "` has invalid endpoints and so it is impossible to draw.  Adjust your edge style (e.g. control points) accordingly or use an alternative edge type.  This is expected behaviour when the source node and the target node overlap."));
}, Ef[e(1052)] = function(t2) {
  var n2 = e, r2 = this;
  if (!(!t2 || t2.length === 0)) {
    for (var i2 = this, a2 = i2.cy.hasCompoundNodes(), o2 = new Qt(), s2 = function(e2, t3) {
      return [].concat(m(e2), [+!!t3]).join(`-`);
    }, c2 = [], l2 = [], u2 = 0; u2 < t2.length; u2++) {
      var d2 = t2[u2], f2 = d2._private, p2 = d2.pstyle(`curve-style`).value;
      if (!(d2.removed() || !d2.takesUpSpace())) {
        if (p2 === `haystack`) {
          l2.push(d2);
          continue;
        }
        var h2 = p2 === `unbundled-bezier` || ee(p2, `segments`) || p2 === `straight` || p2 === `straight-triangle` || ee(p2, `taxi`), g2 = p2 === `unbundled-bezier` || p2 === `bezier`, _2 = f2.source, v2 = f2.target, y2 = [_2.poolIndex(), v2.poolIndex()].sort(), b2 = s2(y2, h2), x2 = o2.get(b2);
        x2 ?? (x2 = { eles: [] }, c2.push({ pairId: y2, edgeIsUnbundled: h2 }), o2.set(b2, x2)), x2.eles.push(d2), h2 && (x2[n2(1049)] = true), g2 && (x2.hasBezier = true);
      }
    }
    for (var S2 = function() {
      var e2 = n2, t3 = c2[C2], l3 = t3.pairId, u3 = t3.edgeIsUnbundled, d3 = s2(l3, u3), f3 = o2[e2(1276)](d3), p3;
      if (!f3.hasUnbundled) {
        var m2 = f3.eles[0][e2(422)]().filter(function(t4) {
          return t4[e2(905)]();
        });
        Jt(f3[e2(1015)]), m2.forEach(function(e3) {
          return f3.eles.push(e3);
        }), f3.eles.sort(function(t4, n3) {
          return t4[e2(882)]() - n3.poolIndex();
        });
      }
      var h3 = f3.eles[0], g3 = h3.source(), _3 = h3[e2(1192)]();
      if (g3.poolIndex() > _3[e2(882)]()) {
        var v3 = g3;
        g3 = _3, _3 = v3;
      }
      var y3 = f3.srcPos = g3.position(), b3 = f3.tgtPos = _3[e2(225)](), x3 = f3.srcW = g3.outerWidth(), S3 = f3.srcH = g3[e2(259)](), w2 = f3[e2(702)] = _3[e2(1059)](), T2 = f3.tgtH = _3[e2(259)](), E2 = f3.srcShape = i2.nodeShapes[r2.getNodeShape(g3)], D2 = f3.tgtShape = i2.nodeShapes[r2[e2(433)](_3)], O2 = f3.srcCornerRadius = g3[e2(1373)](`corner-radius`).value === `auto` ? `auto` : g3.pstyle(`corner-radius`).pfValue, k2 = f3[e2(586)] = _3.pstyle(`corner-radius`).value === `auto` ? `auto` : _3.pstyle(`corner-radius`).pfValue, A2 = f3.tgtRs = _3._private[e2(1151)], M2 = f3.srcRs = g3._private.rscratch;
      f3.dirCounts = { north: 0, west: 0, south: 0, east: 0, northwest: 0, southwest: 0, northeast: 0, southeast: 0 };
      for (var N2 = 0; N2 < f3[e2(1015)][e2(441)]; N2++) {
        var P2 = f3.eles[N2], F2 = P2[0]._private.rscratch, I2 = P2.pstyle(`curve-style`).value, L2 = I2 === `unbundled-bezier` || ee(I2, `segments`) || ee(I2, `taxi`), R2 = !g3.same(P2[e2(1256)]());
        if (!f3[e2(457)] && g3 !== _3 && (f3[e2(1298)] || f3.hasUnbundled)) {
          f3.calculatedIntersection = true;
          var z2 = E2[e2(427)](y3.x, y3.y, x3, S3, b3.x, b3.y, 0, O2, M2), B2 = f3[e2(1198)] = z2, V2 = D2.intersectLine(b3.x, b3.y, w2, T2, y3.x, y3.y, 0, k2, A2), H2 = f3.tgtIntn = V2, U2 = f3.intersectionPts = { x1: z2[0], x2: V2[0], y1: z2[1], y2: V2[1] }, W2 = f3.posPts = { x1: y3.x, x2: b3.x, y1: y3.y, y2: b3.y }, G2 = V2[1] - z2[1], K2 = V2[0] - z2[0], q2 = Math.sqrt(K2 * K2 + G2 * G2);
          j(q2) && q2 >= Tf || (q2 = Math.sqrt(Math.max(K2 * K2, wf) + Math.max(G2 * G2, wf)));
          var J2 = f3[e2(907)] = { x: K2, y: G2 }, Y2 = f3.vectorNorm = { x: J2.x / q2, y: J2.y / q2 }, X2 = { x: -Y2.y, y: Y2.x };
          f3.nodesOverlap = !j(q2) || D2.checkPoint(z2[0], z2[1], 0, w2, T2, b3.x, b3.y, k2, A2) || E2.checkPoint(V2[0], V2[1], 0, x3, S3, y3.x, y3.y, O2, M2), f3[e2(1047)] = X2, p3 = { nodesOverlap: f3.nodesOverlap, dirCounts: f3.dirCounts, calculatedIntersection: true, hasBezier: f3.hasBezier, hasUnbundled: f3.hasUnbundled, eles: f3.eles, srcPos: b3, srcRs: A2, tgtPos: y3, tgtRs: M2, srcW: w2, srcH: T2, tgtW: x3, tgtH: S3, srcIntn: H2, tgtIntn: B2, srcShape: D2, tgtShape: E2, posPts: { x1: W2.x2, y1: W2.y2, x2: W2.x1, y2: W2.y1 }, intersectionPts: { x1: U2.x2, y1: U2.y2, x2: U2.x1, y2: U2.y1 }, vector: { x: -J2.x, y: -J2.y }, vectorNorm: { x: -Y2.x, y: -Y2.y }, vectorNormInverse: { x: -X2.x, y: -X2.y } };
        }
        var te2 = R2 ? p3 : f3;
        F2.nodesOverlap = te2.nodesOverlap, F2.srcIntn = te2.srcIntn, F2.tgtIntn = te2.tgtIntn, F2.isRound = I2.startsWith(`round`), a2 && (g3.isParent() || g3[e2(513)]() || _3.isParent() || _3.isChild()) && (g3.parents()[e2(396)](_3) || _3.parents()[e2(396)](g3) || g3.same(_3) && g3[e2(327)]()) ? r2.findCompoundLoopPoints(P2, te2, N2, L2) : g3 === _3 ? r2[e2(1025)](P2, te2, N2, L2) : I2.endsWith(`segments`) ? r2.findSegmentsPoints(P2, te2) : I2.endsWith(`taxi`) ? r2.findTaxiPoints(P2, te2) : I2 === `straight` || !L2 && f3.eles.length % 2 == 1 && N2 === Math[e2(1163)](f3.eles.length / 2) ? r2[e2(1358)](P2) : r2.findBezierPoints(P2, te2, N2, L2, R2), r2.findEndpoints(P2), r2[e2(467)](P2, te2), r2.checkForInvalidEdgeWarning(P2), r2[e2(1395)](P2), r2.storeEdgeProjections(P2), r2.calculateArrowAngles(P2), r2[e2(1277)](P2), r2.calculateLabelAngles(P2);
      }
    }, C2 = 0; C2 < c2.length; C2++) S2();
    this[n2(883)](l2);
  }
};
function Df(e2) {
  var t2 = [];
  if (e2 != null) {
    for (var n2 = 0; n2 < e2.length; n2 += 2) {
      var r2 = e2[n2], i2 = e2[n2 + 1];
      t2.push({ x: r2, y: i2 });
    }
    return t2;
  }
}
Ef.getSegmentPoints = function(t2) {
  var n2 = e, r2 = t2[0]._private.rscratch;
  if (this.recalculateRenderedStyle(t2), r2.edgeType === n2(1368)) return Df(r2.segpts);
}, Ef.getControlPoints = function(t2) {
  var n2 = e, r2 = t2[0]._private.rscratch;
  this.recalculateRenderedStyle(t2);
  var i2 = r2.edgeType;
  if (i2 === `bezier` || i2 === `multibezier` || i2 === n2(1117) || i2 === `compound`) return Df(r2.ctrlpts);
}, Ef[e(397)] = function(t2) {
  var n2 = e, r2 = t2[0][n2(820)].rscratch;
  return this[n2(1308)](t2), { x: r2.midX, y: r2[n2(672)] };
};
var Of = {};
Of[e(710)] = function(t2, n2) {
  var r2 = e, i2 = this, a2 = t2.position(), o2 = t2.outerWidth(), s2 = t2.outerHeight(), c2 = t2._private.rscratch;
  if (n2.value.length === 2) {
    var l2 = [n2.pfValue[0], n2[r2(676)][1]];
    return n2.units[0] === `%` && (l2[0] *= o2), n2.units[1] === `%` && (l2[1] *= s2), l2[0] += a2.x, l2[1] += a2.y, l2;
  } else {
    var u2 = n2.pfValue[0];
    u2 = -Math.PI / 2 + u2;
    var d2 = 2 * Math.max(o2, s2), f2 = [a2.x + Math.cos(u2) * d2, a2.y + Math.sin(u2) * d2];
    return i2.nodeShapes[this[r2(433)](t2)][r2(427)](a2.x, a2.y, o2, s2, f2[0], f2[1], 0, t2.pstyle(`corner-radius`).value === r2(1037) ? `auto` : t2[r2(1373)](`corner-radius`).pfValue, c2);
  }
}, Of[e(1094)] = function(t2) {
  var n2 = e, r2, i2, a2 = this, o2, s2 = t2.source()[0], c2 = t2.target()[0], l2 = s2.position(), u2 = c2.position(), d2 = t2[n2(1373)](`target-arrow-shape`).value, f2 = t2.pstyle(n2(641)).value, p2 = t2.pstyle(`target-distance-from-node`).pfValue, m2 = t2.pstyle(`source-distance-from-node`).pfValue, h2 = s2._private[n2(1151)], g2 = c2[n2(820)].rscratch, _2 = t2.pstyle(`curve-style`).value, v2 = t2._private.rscratch, y2 = v2.edgeType, b2 = ee(_2, `taxi`), x2 = y2 === n2(1117) || y2 === `compound`, S2 = y2 === n2(1167) || y2 === `multibezier` || x2, C2 = y2 !== `bezier`, w2 = y2 === `straight` || y2 === `segments`, T2 = y2 === `segments`, E2 = S2 || C2 || w2, D2 = x2 || b2, O2 = t2[n2(1373)](n2(569)), k2 = D2 ? `outside-to-node` : O2.value, A2 = s2[n2(1373)](n2(1344)).value === `auto` ? `auto` : s2.pstyle(`corner-radius`)[n2(676)], M2 = t2[n2(1373)](n2(342)), N2 = D2 ? `outside-to-node` : M2.value, P2 = c2.pstyle(`corner-radius`).value === `auto` ? n2(1037) : c2.pstyle(`corner-radius`)[n2(676)];
  v2[n2(548)] = O2, v2.tgtManEndpt = M2;
  var F2, I2, L2, R2, z2 = ((M2 == null || (r2 = M2.pfValue) == null ? void 0 : r2[n2(441)]) === 2 ? M2[n2(676)] : null) ?? [0, 0], B2 = ((O2 == null || (i2 = O2.pfValue) == null ? void 0 : i2.length) === 2 ? O2.pfValue : null) ?? [0, 0];
  if (S2) {
    var V2 = [v2.ctrlpts[0], v2.ctrlpts[1]];
    F2 = C2 ? [v2.ctrlpts[v2.ctrlpts.length - 2], v2.ctrlpts[v2.ctrlpts.length - 1]] : V2, I2 = V2;
  } else if (w2) {
    var H2 = T2 ? v2.segpts.slice(0, 2) : [u2.x + z2[0], u2.y + z2[1]];
    F2 = T2 ? v2.segpts.slice(v2.segpts[n2(441)] - 2) : [l2.x + B2[0], l2.y + B2[1]], I2 = H2;
  }
  if (N2 === n2(646)) o2 = [u2.x, u2.y];
  else if (M2.units) o2 = this.manualEndptToPx(c2, M2);
  else if (N2 === n2(581)) o2 = v2.tgtIntn;
  else if (N2 === `outside-to-node` || N2 === n2(1031) ? L2 = F2 : (N2 === `outside-to-line` || N2 === n2(1386)) && (L2 = [l2.x, l2.y]), o2 = a2.nodeShapes[this.getNodeShape(c2)].intersectLine(u2.x, u2.y, c2.outerWidth(), c2.outerHeight(), L2[0], L2[1], 0, P2, g2), N2 === `outside-to-node-or-label` || N2 === `outside-to-line-or-label`) {
    var U2 = c2._private.rscratch, W2 = U2.labelWidth, G2 = U2.labelHeight, K2 = U2.labelX, q2 = U2.labelY, J2 = W2 / 2, Y2 = G2 / 2, X2 = c2.pstyle(n2(299)).value;
    X2 === `top` ? q2 -= Y2 : X2 === `bottom` && (q2 += Y2);
    var te2 = c2.pstyle(`text-halign`).value;
    te2 === `left` ? K2 -= J2 : te2 === `right` && (K2 += J2);
    var ne2 = Tr(L2[0], L2[1], [K2 - J2, q2 - Y2, K2 + J2, q2 - Y2, K2 + J2, q2 + Y2, K2 - J2, q2 + Y2], u2.x, u2.y);
    if (ne2[n2(441)] > 0) {
      var re2 = l2, ie2 = Bn(re2, An(o2)), ae2 = Bn(re2, An(ne2)), oe2 = ie2;
      ae2 < ie2 && (o2 = ne2, oe2 = ae2), ne2.length > 2 && Bn(re2, { x: ne2[2], y: ne2[3] }) < oe2 && (o2 = [ne2[2], ne2[3]]);
    }
  }
  var se2 = Dr(o2, F2, a2.arrowShapes[d2][n2(878)](t2) + p2), ce2 = Dr(o2, F2, a2.arrowShapes[d2][n2(645)](t2) + p2);
  if (v2.endX = ce2[0], v2.endY = ce2[1], v2.arrowEndX = se2[0], v2.arrowEndY = se2[1], k2 === `inside-to-node`) o2 = [l2.x, l2.y];
  else if (O2.units) o2 = this.manualEndptToPx(s2, O2);
  else if (k2 === `outside-to-line`) o2 = v2.srcIntn;
  else if (k2 === n2(1215) || k2 === `outside-to-node-or-label` ? R2 = I2 : (k2 === n2(581) || k2 === `outside-to-line-or-label`) && (R2 = [u2.x, u2.y]), o2 = a2.nodeShapes[this[n2(433)](s2)].intersectLine(l2.x, l2.y, s2.outerWidth(), s2.outerHeight(), R2[0], R2[1], 0, A2, h2), k2 === `outside-to-node-or-label` || k2 === `outside-to-line-or-label`) {
    var Z2 = s2._private.rscratch, le2 = Z2.labelWidth, ue2 = Z2[n2(794)], de2 = Z2[n2(925)], fe2 = Z2.labelY, pe2 = le2 / 2, me2 = ue2 / 2, he2 = s2.pstyle(n2(299)).value;
    he2 === `top` ? fe2 -= me2 : he2 === `bottom` && (fe2 += me2);
    var ge2 = s2[n2(1373)](`text-halign`)[n2(1310)];
    ge2 === n2(474) ? de2 -= pe2 : ge2 === n2(207) && (de2 += pe2);
    var _e2 = Tr(R2[0], R2[1], [de2 - pe2, fe2 - me2, de2 + pe2, fe2 - me2, de2 + pe2, fe2 + me2, de2 - pe2, fe2 + me2], l2.x, l2.y);
    if (_e2.length > 0) {
      var ve2 = u2, ye2 = Bn(ve2, An(o2)), be2 = Bn(ve2, An(_e2)), xe2 = ye2;
      be2 < ye2 && (o2 = [_e2[0], _e2[1]], xe2 = be2), _e2.length > 2 && Bn(ve2, { x: _e2[2], y: _e2[3] }) < xe2 && (o2 = [_e2[2], _e2[3]]);
    }
  }
  var Se2 = Dr(o2, I2, a2[n2(1046)][f2].spacing(t2) + m2), Ce2 = Dr(o2, I2, a2.arrowShapes[f2].gap(t2) + m2);
  v2.startX = Ce2[0], v2.startY = Ce2[1], v2.arrowStartX = Se2[0], v2.arrowStartY = Se2[1], E2 && (!j(v2[n2(291)]) || !j(v2.startY) || !j(v2.endX) || !j(v2.endY) ? v2[n2(1033)] = true : v2.badLine = false);
}, Of.getSourceEndpoint = function(t2) {
  var n2 = e, r2 = t2[0]._private.rscratch;
  switch (this.recalculateRenderedStyle(t2), r2.edgeType) {
    case n2(1010):
      return { x: r2.haystackPts[0], y: r2.haystackPts[1] };
    default:
      return { x: r2[n2(418)], y: r2.arrowStartY };
  }
}, Of.getTargetEndpoint = function(e2) {
  var t2 = e2[0]._private.rscratch;
  switch (this.recalculateRenderedStyle(e2), t2.edgeType) {
    case `haystack`:
      return { x: t2.haystackPts[2], y: t2.haystackPts[3] };
    default:
      return { x: t2.arrowEndX, y: t2.arrowEndY };
  }
};
var kf = {};
function Af(t2, n2, r2) {
  for (var i2 = e, a2 = function(e2, t3, n3, r3) {
    return Hn(e2, t3, n3, r3);
  }, o2 = n2._private.rstyle.bezierPts, s2 = 0; s2 < t2.bezierProjPcts[i2(441)]; s2++) {
    var c2 = t2.bezierProjPcts[s2];
    o2[i2(254)]({ x: a2(r2[0], r2[2], r2[4], c2), y: a2(r2[1], r2[3], r2[5], c2) });
  }
}
kf.storeEdgeProjections = function(t2) {
  var n2 = e, r2 = t2[n2(820)], i2 = r2.rscratch, a2 = i2[n2(918)];
  if (r2[n2(631)][n2(580)] = null, r2.rstyle.linePts = null, r2[n2(631)].haystackPts = null, a2 === `multibezier` || a2 === `bezier` || a2 === n2(1117) || a2 === n2(340)) {
    r2[n2(631)][n2(580)] = [];
    for (var o2 = 0; o2 + 5 < i2[n2(451)][n2(441)]; o2 += 4) Af(this, t2, i2.allpts.slice(o2, o2 + 6));
  } else if (a2 === `segments`) for (var s2 = r2.rstyle.linePts = [], o2 = 0; o2 + 1 < i2.allpts.length; o2 += 2) s2[n2(254)]({ x: i2.allpts[o2], y: i2.allpts[o2 + 1] });
  else if (a2 === `haystack`) {
    var c2 = i2.haystackPts;
    r2.rstyle.haystackPts = [{ x: c2[0], y: c2[1] }, { x: c2[2], y: c2[3] }];
  }
  r2.rstyle.arrowWidth = this.getArrowWidth(t2.pstyle(`width`).pfValue, t2.pstyle(`arrow-scale`).value) * this.arrowShapeWidth;
}, kf[e(634)] = function(t2) {
  var n2 = e;
  this[n2(1052)](t2);
};
var jf = {};
jf.recalculateNodeLabelProjection = function(t2) {
  var n2 = e, r2 = t2[n2(1373)](`label`)[n2(1381)];
  if (!B(r2)) {
    var i2, a2, o2 = t2._private, s2 = t2.width(), c2 = t2.height(), l2 = t2.padding(), u2 = t2.position(), d2 = t2.pstyle(`text-halign`).strValue, f2 = t2.pstyle(`text-valign`).strValue, p2 = o2.rscratch, m2 = o2.rstyle;
    switch (d2) {
      case `left`:
        i2 = u2.x - s2 / 2 - l2;
        break;
      case `right`:
        i2 = u2.x + s2 / 2 + l2;
        break;
      default:
        i2 = u2.x;
    }
    switch (f2) {
      case n2(951):
        a2 = u2.y - c2 / 2 - l2;
        break;
      case `bottom`:
        a2 = u2.y + c2 / 2 + l2;
        break;
      default:
        a2 = u2.y;
    }
    p2.labelX = i2, p2.labelY = a2, m2.labelX = i2, m2.labelY = a2, this.calculateLabelAngles(t2), this[n2(394)](t2);
  }
};
var Mf = function(t2, n2) {
  var r2 = Math[e(739)](n2 / t2);
  return t2 === 0 && r2 < 0 && (r2 *= -1), r2;
}, Nf = function(e2, t2) {
  return Mf(t2.x - e2.x, t2.y - e2.y);
}, Pf = function(e2, t2, n2, r2) {
  var i2 = Gn(0, r2 - 1e-3, 1), a2 = Gn(0, r2 + 1e-3, 1);
  return Nf(Un(e2, t2, n2, i2), Un(e2, t2, n2, a2));
};
jf.recalculateEdgeLabelProjections = function(t2) {
  var n2 = e, r2, i2 = t2._private, a2 = i2.rscratch, o2 = this, s2 = { mid: t2.pstyle(n2(1220)).strValue, source: t2.pstyle(n2(289)).strValue, target: t2.pstyle(`target-label`)[n2(1381)] };
  if (s2.mid || s2.source || s2.target) {
    r2 = { x: a2[n2(1315)], y: a2.midY };
    var c2 = function(e2, t3, r3) {
      var a3 = n2;
      Zt(i2.rscratch, e2, t3, r3), Zt(i2[a3(631)], e2, t3, r3);
    };
    c2(`labelX`, null, r2.x), c2(`labelY`, null, r2.y), c2(`labelAutoAngle`, null, Mf(a2.midDispX, a2.midDispY));
    var l2 = function() {
      var e2 = n2;
      if (l2.cache) return l2.cache;
      for (var t3 = [], r3 = 0; r3 + 5 < a2.allpts.length; r3 += 4) {
        var s3 = { x: a2.allpts[r3], y: a2.allpts[r3 + 1] }, c3 = { x: a2.allpts[r3 + 2], y: a2.allpts[r3 + 3] }, u3 = { x: a2.allpts[r3 + 4], y: a2.allpts[r3 + 5] };
        t3.push({ p0: s3, p1: c3, p2: u3, startDist: 0, length: 0, segments: [] });
      }
      var d2 = i2.rstyle.bezierPts, f2 = o2.bezierProjPcts.length;
      function p2(e3, t4, n3, r4, i3) {
        var a3 = $, o3 = zn(t4, n3), s4 = e3.segments[e3[a3(1368)].length - 1], c4 = { p0: t4, p1: n3, t0: r4, t1: i3, startDist: s4 ? s4[a3(1341)] + s4[a3(441)] : 0, length: o3 };
        e3.segments.push(c4), e3.length += o3;
      }
      for (var m2 = 0; m2 < t3.length; m2++) {
        var h2 = t3[m2], g2 = t3[m2 - 1];
        g2 && (h2.startDist = g2.startDist + g2[e2(441)]), p2(h2, h2.p0, d2[m2 * f2], 0, o2.bezierProjPcts[0]);
        for (var _2 = 0; _2 < f2 - 1; _2++) p2(h2, d2[m2 * f2 + _2], d2[m2 * f2 + _2 + 1], o2.bezierProjPcts[_2], o2[e2(1202)][_2 + 1]);
        p2(h2, d2[m2 * f2 + f2 - 1], h2.p2, o2.bezierProjPcts[f2 - 1], 1);
      }
      return l2.cache = t3;
    }, u2 = function(e2) {
      var i3 = n2, o3, u3 = e2 === `source`;
      if (s2[e2]) {
        var d2 = t2.pstyle(e2 + `-text-offset`).pfValue;
        switch (a2.edgeType) {
          case `self`:
          case `compound`:
          case `bezier`:
          case `multibezier`:
            for (var f2 = l2(), p2, m2 = 0, h2 = 0, g2 = 0; g2 < f2.length; g2++) {
              for (var _2 = f2[u3 ? g2 : f2[i3(441)] - 1 - g2], v2 = 0; v2 < _2[i3(1368)].length; v2++) {
                var y2 = _2.segments[u3 ? v2 : _2.segments.length - 1 - v2], b2 = g2 === f2.length - 1 && v2 === _2.segments.length - 1;
                if (m2 = h2, h2 += y2.length, h2 >= d2 || b2) {
                  p2 = { cp: _2, segment: y2 };
                  break;
                }
              }
              if (p2) break;
            }
            var x2 = p2.cp, S2 = p2.segment, C2 = (d2 - m2) / S2.length, w2 = S2.t1 - S2.t0, T2 = u3 ? S2.t0 + w2 * C2 : S2.t1 - w2 * C2;
            T2 = Gn(0, T2, 1), r2 = Un(x2.p0, x2.p1, x2.p2, T2), o3 = Pf(x2.p0, x2.p1, x2.p2, T2);
            break;
          case `straight`:
          case `segments`:
          case `haystack`:
            for (var E2 = 0, D2, O2, k2, A2, j2 = a2.allpts.length, M2 = 0; M2 + 3 < j2 && (u3 ? (k2 = { x: a2.allpts[M2], y: a2[i3(451)][M2 + 1] }, A2 = { x: a2.allpts[M2 + 2], y: a2[i3(451)][M2 + 3] }) : (k2 = { x: a2.allpts[j2 - 2 - M2], y: a2.allpts[j2 - 1 - M2] }, A2 = { x: a2[i3(451)][j2 - 4 - M2], y: a2.allpts[j2 - 3 - M2] }), D2 = zn(k2, A2), O2 = E2, E2 += D2, !(E2 >= d2)); M2 += 2) ;
            var N2 = (d2 - O2) / D2;
            N2 = Gn(0, N2, 1), r2 = Wn(k2, A2, N2), o3 = Nf(k2, A2);
            break;
        }
        c2(i3(925), e2, r2.x), c2(`labelY`, e2, r2.y), c2(`labelAutoAngle`, e2, o3);
      }
    };
    u2(`source`), u2(`target`), this.applyLabelDimensions(t2);
  }
}, jf.applyLabelDimensions = function(t2) {
  var n2 = e;
  this.applyPrefixedLabelDimensions(t2), t2[n2(230)]() && (this.applyPrefixedLabelDimensions(t2, `source`), this.applyPrefixedLabelDimensions(t2, `target`));
}, jf.applyPrefixedLabelDimensions = function(t2, n2) {
  var r2 = e, i2 = t2._private, a2 = this.getLabelText(t2, n2), o2 = Ct(a2, t2._private[r2(758)]);
  if (Xt(i2[r2(1151)], r2(813), n2) !== o2) {
    Zt(i2.rscratch, r2(813), n2, o2);
    var s2 = this.calculateLabelDimensions(t2, a2), c2 = t2[r2(1373)](r2(1076)).pfValue, l2 = t2[r2(1373)](r2(486)).strValue, u2 = Xt(i2.rscratch, `labelWrapCachedLines`, n2) || [], d2 = l2 === `wrap` ? Math.max(u2.length, 1) : 1, f2 = s2.height / d2, p2 = f2 * c2, m2 = s2[r2(901)], h2 = s2.height + (d2 - 1) * (c2 - 1) * f2;
    Zt(i2.rstyle, r2(849), n2, m2), Zt(i2[r2(1151)], r2(849), n2, m2), Zt(i2.rstyle, `labelHeight`, n2, h2), Zt(i2.rscratch, `labelHeight`, n2, h2), Zt(i2[r2(1151)], `labelLineHeight`, n2, p2);
  }
}, jf.getLabelText = function(t2, n2) {
  var r2 = e, i2 = t2._private, a2 = n2 ? n2 + `-` : ``, o2 = t2.pstyle(a2 + r2(1220)).strValue, c2 = t2[r2(1373)](`text-transform`)[r2(1310)], l2 = function(e2, t3) {
    return t3 ? (Zt(i2.rscratch, e2, n2, t3), t3) : Xt(i2[r2(1151)], e2, n2);
  };
  if (!o2) return ``;
  c2 == `none` || (c2 == r2(886) ? o2 = o2.toUpperCase() : c2 == `lowercase` && (o2 = o2.toLowerCase()));
  var u2 = t2.pstyle(r2(486)).value;
  if (u2 === r2(354)) {
    var d2 = l2(`labelKey`);
    if (d2 != null && l2(`labelWrapKey`) === d2) return l2(`labelWrapCachedText`);
    for (var f2 = `\u200B`, p2 = o2.split(`
`), m2 = t2.pstyle(`text-max-width`).pfValue, h2 = t2[r2(1373)](`text-overflow-wrap`).value === `anywhere`, g2 = [], _2 = /[\s\u200b]+|$/g, v2 = 0; v2 < p2[r2(441)]; v2++) {
      var y2 = p2[v2], b2 = this.calculateLabelDimensions(t2, y2).width;
      if (h2 && (y2 = y2.split(``).join(f2)), b2 > m2) {
        var x2 = y2.matchAll(_2), S2 = ``, C2 = 0, w2 = s(x2), T2;
        try {
          for (w2.s(); !(T2 = w2.n()).done; ) {
            var E2 = T2.value, D2 = E2[0], O2 = y2.substring(C2, E2.index);
            C2 = E2.index + D2.length;
            var k2 = S2.length === 0 ? O2 : S2 + O2 + D2;
            this.calculateLabelDimensions(t2, k2)[r2(901)] <= m2 ? S2 += O2 + D2 : (S2 && g2.push(S2), S2 = O2 + D2);
          }
        } catch (e2) {
          w2.e(e2);
        } finally {
          w2.f();
        }
        S2.match(/^[\s\u200b]+$/) || g2.push(S2);
      } else g2.push(y2);
    }
    l2(`labelWrapCachedLines`, g2), o2 = l2(`labelWrapCachedText`, g2[r2(1100)](`
`)), l2(`labelWrapKey`, d2);
  } else if (u2 === `ellipsis`) {
    var A2 = t2.pstyle(`text-max-width`).pfValue, j2 = ``, M2 = `\u2026`, N2 = false;
    if (this.calculateLabelDimensions(t2, o2)[r2(901)] < A2) return o2;
    for (var P2 = 0; P2 < o2[r2(441)] && !(this.calculateLabelDimensions(t2, j2 + o2[P2] + M2).width > A2); P2++) j2 += o2[P2], P2 === o2.length - 1 && (N2 = true);
    return N2 || (j2 += M2), j2;
  }
  return o2;
}, jf.getLabelJustification = function(t2) {
  var n2 = e, r2 = t2.pstyle(n2(1316)).strValue, i2 = t2[n2(1373)](`text-halign`).strValue;
  if (r2 === `auto`) if (t2[n2(704)]()) switch (i2) {
    case `left`:
      return `right`;
    case n2(207):
      return `left`;
    default:
      return n2(1084);
  }
  else return `center`;
  else return r2;
}, jf.calculateLabelDimensions = function(t2, n2) {
  var r2 = e, i2 = this.cy.window().document, a2 = 0, o2 = t2.pstyle(`font-style`).strValue, s2 = t2.pstyle(r2(1264))[r2(676)], c2 = t2.pstyle(r2(551)).strValue, l2 = t2.pstyle(`font-weight`)[r2(1381)], u2 = this.labelCalcCanvas, d2 = this.labelCalcCanvasContext;
  if (!u2) {
    u2 = this.labelCalcCanvas = i2[r2(526)](`canvas`), d2 = this[r2(438)] = u2[r2(900)](`2d`);
    var f2 = u2.style;
    f2.position = `absolute`, f2.left = `-9999px`, f2.top = `-9999px`, f2.zIndex = `-1`, f2.visibility = `hidden`, f2.pointerEvents = `none`;
  }
  d2[r2(352)] = o2 + ` ` + l2 + ` ` + s2 + `px ` + c2;
  for (var p2 = 0, m2 = 0, h2 = n2.split(`
`), g2 = 0; g2 < h2.length; g2++) {
    var _2 = h2[g2], v2 = d2.measureText(_2), y2 = Math[r2(1424)](v2.width), b2 = s2;
    p2 = Math.max(y2, p2), m2 += b2;
  }
  return p2 += a2, m2 += a2, { width: p2, height: m2 };
}, jf.calculateLabelAngle = function(t2, n2) {
  var r2 = e, i2 = t2[r2(820)].rscratch, a2 = t2.isEdge(), o2 = n2 ? n2 + `-` : ``, s2 = t2.pstyle(o2 + `text-rotation`), c2 = s2[r2(1381)];
  return c2 === `none` ? 0 : a2 && c2 === r2(302) ? i2.labelAutoAngle : c2 === `autorotate` ? 0 : s2.pfValue;
}, jf.calculateLabelAngles = function(t2) {
  var n2 = e, r2 = this, i2 = t2.isEdge(), a2 = t2._private.rscratch;
  a2.labelAngle = r2[n2(1332)](t2), i2 && (a2.sourceLabelAngle = r2.calculateLabelAngle(t2, n2(1256)), a2.targetLabelAngle = r2.calculateLabelAngle(t2, `target`));
};
var Ff = {}, If = 28, Lf = false;
Ff.getNodeShape = function(t2) {
  var n2 = e, r2 = this, i2 = t2[n2(1373)](`shape`)[n2(1310)];
  if (i2 === `cutrectangle` && (t2.width() < If || t2.height() < If)) return Lf || (Lf = (zt("The `cutrectangle` node shape can not be used at small sizes so `rectangle` is used instead"), true)), `rectangle`;
  if (t2.isParent()) return i2 === `rectangle` || i2 === `roundrectangle` || i2 === `round-rectangle` || i2 === `cutrectangle` || i2 === `cut-rectangle` || i2 === `barrel` ? i2 : `rectangle`;
  if (i2 === n2(532)) {
    var a2 = t2.pstyle(`shape-polygon-points`)[n2(1310)];
    return r2.nodeShapes.makePolygon(a2)[n2(958)];
  }
  return i2;
};
var Rf = {};
Rf[e(785)] = function() {
  var t2 = e, n2 = this.cy, r2 = n2[t2(999)](), i2 = this, a2 = function(e2) {
    var n3 = t2, i3 = arguments[n3(441)] > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (r2.merge(e2), i3) for (var a3 = 0; a3 < e2.length; a3++) {
      var o3 = e2[a3]._private.rstyle;
      o3.clean = false, o3.cleanConnected = false;
    }
  };
  i2.binder(n2).on(t2(547), function(e2) {
    var t3 = e2.target;
    a2(t3);
  }).on(`style.* background.*`, function(e2) {
    var t3 = e2.target;
    a2(t3, false);
  });
  var o2 = function(e2) {
    if (e2) {
      var t3 = i2.onUpdateEleCalcsFns;
      r2.cleanStyle();
      for (var o3 = 0; o3 < r2.length; o3++) {
        var s2 = r2[o3], c2 = s2._private.rstyle;
        s2.isNode() && !c2.cleanConnected && (a2(s2.connectedEdges()), c2.cleanConnected = true);
      }
      if (t3) for (var l2 = 0; l2 < t3.length; l2++) {
        var u2 = t3[l2];
        u2(e2, r2);
      }
      i2.recalculateRenderedStyle(r2), r2 = n2.collection();
    }
  };
  i2.flushRenderedStyleQueue = function() {
    o2(true);
  }, i2.beforeRender(o2, i2.beforeRenderPriorities.eleCalcs);
}, Rf.onUpdateEleCalcs = function(t2) {
  var n2 = e;
  (this[n2(401)] = this.onUpdateEleCalcsFns || []).push(t2);
}, Rf.recalculateRenderedStyle = function(t2, n2) {
  var r2 = e, i2 = function(e2) {
    return e2._private.rstyle.cleanConnected;
  };
  if (t2[r2(441)] !== 0) {
    var a2 = [], o2 = [];
    if (!this.destroyed) {
      n2 === void 0 && (n2 = true);
      for (var s2 = 0; s2 < t2[r2(441)]; s2++) {
        var c2 = t2[s2], l2 = c2._private, u2 = l2.rstyle;
        c2.isEdge() && (!i2(c2[r2(1256)]()) || !i2(c2.target())) && (u2.clean = false), c2.isEdge() && c2.isBundledBezier() && c2.parallelEdges().some(function(e2) {
          return !e2._private.rstyle.clean && e2.isBundledBezier();
        }) && (u2.clean = false), !(n2 && u2.clean || c2.removed()) && c2.pstyle(r2(1182)).value !== `none` && (l2.group === `nodes` ? o2.push(c2) : a2.push(c2), u2.clean = true);
      }
      for (var d2 = 0; d2 < o2.length; d2++) {
        var f2 = o2[d2], p2 = f2._private.rstyle, m2 = f2.position();
        this[r2(410)](f2), p2[r2(1330)] = m2.x, p2.nodeY = m2.y, p2.nodeW = f2.pstyle(`width`).pfValue, p2.nodeH = f2[r2(1373)](`height`).pfValue;
      }
      this.recalculateEdgeProjections(a2);
      for (var h2 = 0; h2 < a2.length; h2++) {
        var g2 = a2[h2]._private, _2 = g2.rstyle, v2 = g2.rscratch;
        _2.srcX = v2.arrowStartX, _2.srcY = v2[r2(1218)], _2.tgtX = v2.arrowEndX, _2.tgtY = v2.arrowEndY, _2.midX = v2.midX, _2.midY = v2[r2(672)], _2.labelAngle = v2.labelAngle, _2.sourceLabelAngle = v2[r2(1205)], _2.targetLabelAngle = v2.targetLabelAngle;
      }
    }
  }
};
var zf = {};
zf.updateCachedGrabbedEles = function() {
  var t2 = e, n2 = this.cachedZSortedEles;
  if (n2) {
    n2.drag = [], n2.nondrag = [];
    for (var r2 = [], i2 = 0; i2 < n2.length; i2++) {
      var a2 = n2[i2], o2 = a2._private[t2(1151)];
      a2.grabbed() && !a2.isParent() ? r2.push(a2) : o2[t2(966)] ? n2.drag.push(a2) : n2.nondrag.push(a2);
    }
    for (var i2 = 0; i2 < r2.length; i2++) {
      var a2 = r2[i2];
      n2.drag[t2(254)](a2);
    }
  }
}, zf.invalidateCachedZSortedEles = function() {
  this.cachedZSortedEles = null;
}, zf.getCachedZSortedEles = function(t2) {
  var n2 = e;
  if (t2 || !this.cachedZSortedEles) {
    var r2 = this.cy.mutableElements()[n2(292)]();
    r2.sort(Zl), r2.interactive = r2.filter(function(e2) {
      return e2[n2(777)]();
    }), this.cachedZSortedEles = r2, this.updateCachedGrabbedEles();
  } else r2 = this.cachedZSortedEles;
  return r2;
};
var Bf = {};
[Zd, Qd, Ef, Of, kf, jf, Ff, Rf, zf].forEach(function(e2) {
  Z(Bf, e2);
});
var Vf = {};
Vf.getCachedImage = function(t2, n2, r2) {
  var i2 = e, a2 = this, o2 = a2.imageCache = a2.imageCache || {}, s2 = o2[t2];
  if (s2) return s2.image.complete || s2.image.addEventListener(`load`, r2), s2.image;
  s2 = o2[t2] = o2[t2] || {};
  var c2 = s2[i2(983)] = new Image();
  c2.addEventListener(`load`, r2), c2.addEventListener(`error`, function() {
    c2.error = true;
  });
  var l2 = `data:`;
  return t2.substring(0, l2.length).toLowerCase() !== l2 && (n2 = n2 === `null` ? null : n2, c2.crossOrigin = n2), c2[i2(223)] = t2, c2;
};
var Hf = function(t2, n2) {
  var r2 = e, i2 = t2[0];
  !i2 || i2[r2(820)].grabbed === n2 || (i2._private.grabbed = n2, t2.updateStyle(false));
}, Uf = function(e2) {
  Hf(e2, true);
}, Wf = function(e2) {
  Hf(e2, false);
}, Gf = {};
Gf.registerBinding = function(t2, n2, r2, i2) {
  var a2 = e, o2 = Array.prototype.slice.apply(arguments, [1]);
  if (Array.isArray(t2)) {
    for (var s2 = [], c2 = 0; c2 < t2.length; c2++) {
      var l2 = t2[c2];
      if (l2 !== void 0) {
        var u2 = this.binder(l2);
        s2[a2(254)](u2.on.apply(u2, o2));
      }
    }
    return s2;
  }
  var u2 = this.binder(t2);
  return u2.on.apply(u2, o2);
}, Gf.binder = function(t2) {
  var n2 = e, r2 = this, i2 = r2.cy.window(), a2 = t2 === i2 || t2 === i2[n2(669)] || t2 === i2.document.body || V(t2);
  if (r2.supportsPassiveEvents == null) {
    var o2 = false;
    try {
      var s2 = Object.defineProperty({}, "passive", { get: function() {
        return o2 = true, true;
      } });
      i2.addEventListener(`test`, null, s2);
    } catch {
    }
    r2.supportsPassiveEvents = o2;
  }
  var c2 = function(e2, i3, o3) {
    var s3 = n2, c3 = Array.prototype.slice.call(arguments);
    return a2 && r2.supportsPassiveEvents && (c3[2] = { capture: o3 ?? false, passive: false, once: false }), r2.bindings.push({ target: t2, args: c3 }), (t2[s3(199)] || t2.on).apply(t2, c3), this;
  };
  return { on: c2, addEventListener: c2, addListener: c2, bind: c2 };
}, Gf[e(1075)] = function(t2) {
  return t2 && t2[e(704)]() && !t2.locked() && t2.grabbable();
}, Gf.nodeIsGrabbable = function(e2) {
  return this.nodeIsDraggable(e2) && e2.interactive();
}, Gf.load = function() {
  var t2 = e, n2 = this, r2 = n2.cy[t2(505)](), i2 = function(e2) {
    return e2.selected();
  }, a2 = function(e2) {
    var n3 = t2, r3 = e2.getRootNode();
    if (r3 && r3.nodeType === 11 && r3[n3(1284)] !== void 0) return r3;
  }, o2 = function(e2, r3, i3, a3) {
    var o3 = t2;
    e2 ?? (e2 = n2.cy);
    for (var s3 = 0; s3 < r3[o3(441)]; s3++) {
      var c3 = r3[s3];
      e2.emit({ originalEvent: i3, type: c3, position: a3 });
    }
  }, s2 = function(e2) {
    return e2.shiftKey || e2.metaKey || e2.ctrlKey;
  }, c2 = function(e2, r3) {
    var i3 = t2, a3 = true;
    if (n2.cy.hasCompoundNodes() && e2 && e2.pannable()) for (var o3 = 0; r3 && o3 < r3[i3(441)]; o3++) {
      var e2 = r3[o3];
      if (e2.isNode() && e2.isParent() && !e2.pannable()) {
        a3 = false;
        break;
      }
    }
    else a3 = true;
    return a3;
  }, l2 = function(e2) {
    var n3 = t2;
    e2[0][n3(820)][n3(1151)].inDragLayer = true;
  }, u2 = function(e2) {
    var n3 = t2;
    e2[0]._private[n3(1151)].inDragLayer = false;
  }, d2 = function(e2) {
    e2[0]._private.rscratch.isGrabTarget = true;
  }, f2 = function(e2) {
    var n3 = t2;
    e2[0]._private.rscratch[n3(424)] = false;
  }, p2 = function(e2, n3) {
    var r3 = t2, i3 = n3.addToList;
    !i3.has(e2) && e2[r3(654)]() && !e2.locked() && (i3.merge(e2), Uf(e2));
  }, m2 = function(e2, n3) {
    var r3 = t2;
    if (e2.cy().hasCompoundNodes() && !(n3[r3(966)] == null && n3.addToList == null)) {
      var i3 = e2.descendants();
      n3.inDragLayer && (i3.forEach(l2), i3.connectedEdges().forEach(l2)), n3.addToList && p2(i3, n3);
    }
  }, h2 = function(e2, t3) {
    t3 || (t3 = {});
    var r3 = e2.cy().hasCompoundNodes();
    t3.inDragLayer && (e2.forEach(l2), e2.neighborhood().stdFilter(function(e3) {
      return !r3 || e3[$(230)]();
    }).forEach(l2)), t3.addToList && e2.forEach(function(e3) {
      p2(e3, t3);
    }), m2(e2, t3), v2(e2, { inDragLayer: t3.inDragLayer }), n2.updateCachedGrabbedEles();
  }, g2 = h2, _2 = function(e2) {
    var r3 = t2;
    e2 && (n2[r3(489)]()[r3(1390)](function(e3) {
      Wf(e3), u2(e3), f2(e3);
    }), n2.updateCachedGrabbedEles());
  }, v2 = function(e2, n3) {
    var r3 = t2;
    if (!(n3.inDragLayer == null && n3[r3(1003)] == null) && e2.cy().hasCompoundNodes()) {
      var i3 = e2.ancestors().orphans();
      if (!i3[r3(562)](e2)) {
        var a3 = i3[r3(309)]().spawnSelf().merge(i3).unmerge(e2).unmerge(e2.descendants()), o3 = a3.connectedEdges();
        n3.inDragLayer && (o3.forEach(l2), a3[r3(1390)](l2)), n3.addToList && a3[r3(1390)](function(e3) {
          p2(e3, n3);
        });
      }
    }
  }, y2 = function() {
    document.activeElement != null && document.activeElement.blur != null && document.activeElement.blur();
  }, b2 = typeof MutationObserver < `u`, x2 = typeof ResizeObserver < `u`;
  b2 ? (n2.removeObserver = new MutationObserver(function(e2) {
    for (var r3 = t2, i3 = 0; i3 < e2.length; i3++) {
      var a3 = e2[i3].removedNodes;
      if (a3) {
        for (var o3 = 0; o3 < a3[r3(441)]; o3++) if (a3[o3] === n2.container) {
          n2.destroy();
          break;
        }
      }
    }
  }), n2.container[t2(997)] && n2.removeObserver.observe(n2.container.parentNode, { childList: true })) : n2.registerBinding(n2.container, t2(545), function(e2) {
    n2.destroy();
  });
  var S2 = st(function() {
    n2.cy.resize();
  }, 100);
  b2 && (n2.styleObserver = new MutationObserver(S2), n2.styleObserver.observe(n2.container, { attributes: true })), n2.registerBinding(r2, `resize`, S2), x2 && (n2.resizeObserver = new ResizeObserver(S2), n2[t2(591)].observe(n2.container));
  var C2 = function(e2, t3) {
    for (; e2 != null; ) t3(e2), e2 = e2.parentNode;
  }, w2 = function() {
    n2.invalidateContainerClientCoordsCache();
  };
  C2(n2.container, function(e2) {
    var r3 = t2;
    n2.registerBinding(e2, `transitionend`, w2), n2.registerBinding(e2, `animationend`, w2), n2[r3(287)](e2, `scroll`, w2);
  }), n2.registerBinding(n2[t2(721)], `contextmenu`, function(e2) {
    e2.preventDefault();
  });
  var T2 = function() {
    return n2.selection[4] !== 0;
  }, E2 = function(e2) {
    for (var r3 = t2, i3 = n2.findContainerClientCoords(), a3 = i3[0], o3 = i3[1], s3 = i3[2], c3 = i3[3], l3 = e2.touches ? e2.touches : [e2], u3 = false, d3 = 0; d3 < l3.length; d3++) {
      var f3 = l3[d3];
      if (a3 <= f3.clientX && f3.clientX <= a3 + s3 && o3 <= f3.clientY && f3.clientY <= o3 + c3) {
        u3 = true;
        break;
      }
    }
    if (!u3) return false;
    for (var p3 = n2.container, m3 = e2[r3(1192)].parentNode, h3 = false; m3; ) {
      if (m3 === p3) {
        h3 = true;
        break;
      }
      m3 = m3[r3(997)];
    }
    return !!h3;
  };
  n2.registerBinding(n2.container, `mousedown`, function(e2) {
    var r3 = t2;
    if (E2(e2) && !(n2.hoverData.which === 1 && e2.which !== 1)) {
      e2.preventDefault(), y2(), n2.hoverData[r3(268)] = true, n2[r3(1402)].which = e2.which;
      var i3 = n2.cy, a3 = [e2.clientX, e2.clientY], s3 = n2.projectIntoViewport(a3[0], a3[1]), c3 = n2.selection, l3 = n2.findNearestElements(s3[0], s3[1], true, false), u3 = l3[0], f3 = n2.dragData.possibleDragElements;
      n2.hoverData.mdownPos = s3, n2.hoverData[r3(744)] = a3;
      var p3 = function(t3) {
        return { originalEvent: e2, type: t3, position: { x: s3[0], y: s3[1] } };
      }, m3 = function() {
        var e3 = r3;
        n2[e3(1402)].tapholdCancelled = false, clearTimeout(n2.hoverData.tapholdTimeout), n2[e3(1402)].tapholdTimeout = setTimeout(function() {
          if (!n2.hoverData.tapholdCancelled) {
            var e4 = n2.hoverData.down;
            e4 ? e4.emit(p3(`taphold`)) : i3.emit(p3(`taphold`));
          }
        }, n2.tapholdDuration);
      };
      if (e2.which == 3) {
        n2.hoverData.cxtStarted = true;
        var _3 = { originalEvent: e2, type: r3(312), position: { x: s3[0], y: s3[1] } };
        u3 ? (u3[r3(603)](), u3.emit(_3), n2.hoverData.down = u3) : i3[r3(818)](_3), n2[r3(1402)][r3(1251)] = (/* @__PURE__ */ new Date()).getTime(), n2.hoverData[r3(988)] = false;
      } else if (e2.which == 1) {
        if (u3 && u3.activate(), u3 != null && n2.nodeIsGrabbable(u3)) {
          var v3 = function(e3) {
            var t3 = r3;
            e3.emit(p3(t3(952)));
          };
          if (d2(u3), !u3.selected()) f3 = n2.dragData.possibleDragElements = i3.collection(), g2(u3, { addToList: f3 }), u3.emit(p3(`grabon`)).emit(p3(`grab`));
          else {
            f3 = n2.dragData.possibleDragElements = i3[r3(999)]();
            var b3 = i3.$(function(e3) {
              return e3.isNode() && e3.selected() && n2.nodeIsGrabbable(e3);
            });
            h2(b3, { addToList: f3 }), u3.emit(p3(`grabon`)), b3.forEach(v3);
          }
          n2[r3(431)](`eles`, true), n2[r3(431)](`drag`, true);
        }
        n2.hoverData.down = u3, n2.hoverData.downs = l3, n2.hoverData.downTime = (/* @__PURE__ */ new Date()).getTime(), o2(u3, [`mousedown`, `tapstart`, `vmousedown`], e2, { x: s3[0], y: s3[1] }), u3 == null ? (c3[4] = 1, n2.data.bgActivePosistion = { x: s3[0], y: s3[1] }, n2.redrawHint(`select`, true), n2.redraw()) : u3.pannable() && (c3[4] = 1), m3();
      }
      c3[0] = c3[2] = s3[0], c3[1] = c3[3] = s3[1];
    }
  }, false);
  var D2 = a2(n2.container);
  n2.registerBinding([r2, D2], `mousemove`, function(e2) {
    var r3 = t2;
    if (!(!n2.hoverData[r3(268)] && !E2(e2))) {
      var i3 = false, a3 = n2.cy, l3 = a3.zoom(), u3 = [e2.clientX, e2[r3(357)]], d3 = n2.projectIntoViewport(u3[0], u3[1]), f3 = n2.hoverData.mdownPos, p3 = n2.hoverData.mdownGPos, m3 = n2.selection, g3 = null;
      !n2.hoverData.draggingEles && !n2.hoverData[r3(265)] && !n2[r3(1402)].selecting && (g3 = n2[r3(1141)](d3[0], d3[1], true, false));
      var v3 = n2.hoverData.last, y3 = n2.hoverData.down, b3 = [d3[0] - m3[2], d3[1] - m3[3]], x3 = n2.dragData[r3(1071)], S3;
      if (p3) {
        var C3 = u3[0] - p3[0], w3 = C3 * C3, T3 = u3[1] - p3[1], D3 = w3 + T3 * T3;
        n2.hoverData.isOverThresholdDrag = S3 = D3 >= n2.desktopTapThreshold2;
      }
      var O3 = s2(e2);
      S3 && (n2[r3(1402)].tapholdCancelled = true);
      var k3 = function() {
        var e3 = r3, t3 = n2.hoverData.dragDelta = n2.hoverData[e3(600)] || [];
        t3.length === 0 ? (t3.push(b3[0]), t3[e3(254)](b3[1])) : (t3[0] += b3[0], t3[1] += b3[1]);
      };
      i3 = true, o2(g3, [`mousemove`, `vmousemove`, `tapdrag`], e2, { x: d3[0], y: d3[1] });
      var A3 = function(t3) {
        return { originalEvent: e2, type: t3, position: { x: d3[0], y: d3[1] } };
      }, M3 = function() {
        var e3 = r3;
        n2.data[e3(807)] = void 0, n2.hoverData.selecting || a3.emit(A3(`boxstart`)), m3[4] = 1, n2.hoverData.selecting = true, n2.redrawHint(`select`, true), n2.redraw();
      };
      if (n2.hoverData.which === 3) {
        if (S3) {
          var N3 = A3(r3(769));
          y3 ? y3.emit(N3) : a3.emit(N3), n2.hoverData.cxtDragged = true, (!n2.hoverData.cxtOver || g3 !== n2.hoverData.cxtOver) && (n2.hoverData[r3(1193)] && n2.hoverData.cxtOver.emit(A3(`cxtdragout`)), n2.hoverData[r3(1193)] = g3, g3 && g3.emit(A3(`cxtdragover`)));
        }
      } else if (n2.hoverData.dragging) {
        if (i3 = true, a3.panningEnabled() && a3.userPanningEnabled()) {
          var P3;
          if (n2.hoverData[r3(1234)]) {
            var F3 = n2.hoverData.mdownPos;
            P3 = { x: (d3[0] - F3[0]) * l3, y: (d3[1] - F3[1]) * l3 }, n2.hoverData.justStartedPan = false;
          } else P3 = { x: b3[0] * l3, y: b3[1] * l3 };
          a3[r3(1211)](P3), a3.emit(A3(`dragpan`)), n2.hoverData.dragged = true;
        }
        d3 = n2.projectIntoViewport(e2[r3(454)], e2[r3(357)]);
      } else if (m3[4] == 1 && (y3 == null || y3.pannable())) S3 && (!n2.hoverData.dragging && a3[r3(369)]() && (O3 || !a3.panningEnabled() || !a3.userPanningEnabled()) ? M3() : !n2.hoverData.selecting && a3.panningEnabled() && a3.userPanningEnabled() && c2(y3, n2.hoverData.downs) && (n2.hoverData.dragging = true, n2.hoverData.justStartedPan = true, m3[4] = 0, n2.data.bgActivePosistion = An(f3), n2.redrawHint(`select`, true), n2.redraw()), y3 && y3[r3(1065)]() && y3[r3(1279)]() && y3.unactivate());
      else {
        if (y3 && y3.pannable() && y3[r3(1279)]() && y3.unactivate(), (!y3 || !y3.grabbed()) && g3 != v3 && (v3 && o2(v3, [`mouseout`, `tapdragout`], e2, { x: d3[0], y: d3[1] }), g3 && o2(g3, [r3(919), r3(635)], e2, { x: d3[0], y: d3[1] }), n2.hoverData.last = g3), y3) if (S3) {
          if (a3.boxSelectionEnabled() && O3) y3 && y3[r3(1024)]() && (_2(x3), y3.emit(A3(`freeon`)), x3[r3(818)](A3(`free`)), n2[r3(748)].didDrag && (y3.emit(A3(r3(941))), x3.emit(A3(`dragfree`)))), M3();
          else if (y3 && y3.grabbed() && n2.nodeIsDraggable(y3)) {
            var I3 = !n2.dragData[r3(716)];
            I3 && n2.redrawHint(`eles`, true), n2.dragData.didDrag = true, n2.hoverData.draggingEles || h2(x3, { inDragLayer: true });
            var L3 = { x: 0, y: 0 };
            if (j(b3[0]) && j(b3[1]) && (L3.x += b3[0], L3.y += b3[1], I3)) {
              var R3 = n2.hoverData.dragDelta;
              R3 && j(R3[0]) && j(R3[1]) && (L3.x += R3[0], L3.y += R3[1]);
            }
            n2.hoverData.draggingEles = true, x3.silentShift(L3).emit(A3(r3(225))).emit(A3(`drag`)), n2.redrawHint(`drag`, true), n2.redraw();
          }
        } else k3();
        i3 = true;
      }
      if (m3[2] = d3[0], m3[3] = d3[1], i3) return e2.stopPropagation && e2.stopPropagation(), e2.preventDefault && e2.preventDefault(), false;
    }
  }, false);
  var O2, k2, A2;
  n2.registerBinding(r2, `mouseup`, function(e2) {
    var r3 = t2;
    if (!(n2.hoverData.which === 1 && e2.which !== 1 && n2[r3(1402)].capture) && n2.hoverData[r3(268)]) {
      n2[r3(1402)].capture = false;
      var a3 = n2.cy, c3 = n2.projectIntoViewport(e2.clientX, e2.clientY), l3 = n2[r3(770)], u3 = n2.findNearestElement(c3[0], c3[1], true, false), d3 = n2.dragData.possibleDragElements, f3 = n2.hoverData.down, p3 = s2(e2);
      n2.data[r3(807)] && (n2.redrawHint(`select`, true), n2.redraw()), n2.hoverData.tapholdCancelled = true, n2.data.bgActivePosistion = void 0, f3 && f3.unactivate();
      var m3 = function(t3) {
        return { originalEvent: e2, type: t3, position: { x: c3[0], y: c3[1] } };
      };
      if (n2.hoverData.which === 3) {
        var h3 = m3(`cxttapend`);
        if (f3 ? f3.emit(h3) : a3.emit(h3), !n2.hoverData.cxtDragged) {
          var g3 = m3(`cxttap`);
          f3 ? f3.emit(g3) : a3.emit(g3);
        }
        n2.hoverData.cxtDragged = false, n2[r3(1402)][r3(1303)] = null;
      } else if (n2.hoverData.which === 1) {
        if (o2(u3, [r3(1233), `tapend`, r3(1357)], e2, { x: c3[0], y: c3[1] }), !n2.dragData[r3(716)] && !n2.hoverData.dragged && !n2.hoverData[r3(278)] && !n2.hoverData[r3(700)] && (o2(f3, [`click`, `tap`, `vclick`], e2, { x: c3[0], y: c3[1] }), k2 = false, e2.timeStamp - A2 <= a3.multiClickDebounceTime() ? (O2 && clearTimeout(O2), k2 = true, A2 = null, o2(f3, [`dblclick`, `dbltap`, `vdblclick`], e2, { x: c3[0], y: c3[1] })) : (O2 = setTimeout(function() {
          k2 || o2(f3, [`oneclick`, `onetap`, `voneclick`], e2, { x: c3[0], y: c3[1] });
        }, a3[r3(333)]()), A2 = e2.timeStamp)), f3 == null && !n2.dragData.didDrag && !n2.hoverData[r3(278)] && !n2.hoverData.dragged && !s2(e2) && (a3.$(i2).unselect([r3(511)]), d3.length > 0 && n2.redrawHint(`eles`, true), n2.dragData[r3(1071)] = d3 = a3.collection()), u3 == f3 && !n2.dragData.didDrag && !n2.hoverData.selecting && u3 != null && u3._private.selectable && (n2.hoverData[r3(265)] || (a3.selectionType() === `additive` || p3 ? u3.selected() ? u3.unselect([`tapunselect`]) : u3[r3(709)]([`tapselect`]) : p3 || (a3.$(i2).unmerge(u3).unselect([`tapunselect`]), u3.select([`tapselect`]))), n2.redrawHint(`eles`, true)), n2.hoverData[r3(278)]) {
          var v3 = a3.collection(n2.getAllInBox(l3[0], l3[1], l3[2], l3[3]));
          n2.redrawHint(`select`, true), v3.length > 0 && n2[r3(431)](`eles`, true), a3.emit(m3(`boxend`)), a3.selectionType() === `additive` || p3 || a3.$(i2).unmerge(v3).unselect(), v3.emit(m3(`box`)).stdFilter(function(e3) {
            return e3[r3(932)]() && !e3.selected();
          }).select().emit(m3(`boxselect`)), n2.redraw();
        }
        if (n2.hoverData.dragging && (n2.hoverData.dragging = false, n2[r3(431)](`select`, true), n2.redrawHint(r3(1015), true), n2.redraw()), !l3[4]) {
          n2.redrawHint(`drag`, true), n2.redrawHint(`eles`, true);
          var y3 = f3 && f3[r3(1024)]();
          _2(d3), y3 && (f3.emit(m3(`freeon`)), d3.emit(m3(`free`)), n2[r3(748)].didDrag && (f3.emit(m3(`dragfreeon`)), d3[r3(818)](m3(`dragfree`))));
        }
      }
      l3[4] = 0, n2.hoverData.down = null, n2.hoverData.cxtStarted = false, n2.hoverData.draggingEles = false, n2.hoverData.selecting = false, n2[r3(1402)][r3(700)] = false, n2.dragData.didDrag = false, n2[r3(1402)].dragged = false, n2.hoverData.dragDelta = [], n2.hoverData.mdownPos = null, n2.hoverData[r3(744)] = null, n2.hoverData.which = null;
    }
  }, false);
  var M2 = [], N2 = 4, P2, F2 = 1e5, I2 = function(e2, t3) {
    for (var n3 = 0; n3 < e2.length; n3++) if (e2[n3] % t3 !== 0) return false;
    return true;
  }, L2 = function(e2) {
    for (var n3 = t2, r3 = Math.abs(e2[0]), i3 = 1; i3 < e2[n3(441)]; i3++) if (Math.abs(e2[i3]) !== r3) return false;
    return true;
  }, R2 = function(e2) {
    var r3 = t2, i3 = false, a3 = e2[r3(1081)];
    if (a3 ?? (e2.wheelDeltaY == null ? e2.wheelDelta != null && (a3 = e2.wheelDelta / 4) : a3 = e2.wheelDeltaY / 4), a3 !== 0) {
      if (P2 == null) if (M2.length >= N2) {
        var o3 = M2;
        if (P2 = I2(o3, 5), !P2) {
          var s3 = Math.abs(o3[0]);
          P2 = L2(o3) && s3 > 5;
        }
        if (P2) for (var c3 = 0; c3 < o3.length; c3++) F2 = Math.min(Math[r3(1296)](o3[c3]), F2);
      } else M2.push(a3), i3 = true;
      else P2 && (F2 = Math.min(Math.abs(a3), F2));
      if (!n2.scrollingPage) {
        var l3 = n2.cy, u3 = l3.zoom(), d3 = l3.pan(), f3 = n2.projectIntoViewport(e2.clientX, e2.clientY), p3 = [f3[0] * u3 + d3.x, f3[1] * u3 + d3.y];
        if (n2.hoverData.draggingEles || n2[r3(1402)].dragging || n2.hoverData.cxtStarted || T2()) {
          e2.preventDefault();
          return;
        }
        if (l3.panningEnabled() && l3.userPanningEnabled() && l3.zoomingEnabled() && l3.userZoomingEnabled()) {
          e2[r3(1109)](), n2.data[r3(838)] = true, clearTimeout(n2.data.wheelTimeout), n2.data.wheelTimeout = setTimeout(function() {
            n2.data.wheelZooming = false, n2.redrawHint(`eles`, true), n2.redraw();
          }, 150);
          var m3;
          i3 && Math.abs(a3) > 5 && (a3 = Rn(a3) * 5), m3 = a3 / -250, P2 && (m3 /= F2, m3 *= 3), m3 *= n2[r3(914)], e2.deltaMode === 1 && (m3 *= 33);
          var h3 = l3.zoom() * 10 ** m3;
          e2.type === `gesturechange` && (h3 = n2[r3(574)] * e2.scale), l3.zoom({ level: h3, renderedPosition: { x: p3[0], y: p3[1] } }), l3.emit({ type: e2.type === `gesturechange` ? `pinchzoom` : `scrollzoom`, originalEvent: e2, position: { x: f3[0], y: f3[1] } });
        }
      }
    }
  };
  n2.registerBinding(n2.container, `wheel`, R2, true), n2.registerBinding(r2, `scroll`, function(e2) {
    var r3 = t2;
    n2.scrollingPage = true, clearTimeout(n2[r3(718)]), n2[r3(718)] = setTimeout(function() {
      var e3 = r3;
      n2[e3(402)] = false;
    }, 250);
  }, true), n2.registerBinding(n2.container, `gesturestart`, function(e2) {
    var r3 = t2;
    n2.gestureStartZoom = n2.cy.zoom(), n2.hasTouchStarted || e2[r3(1109)]();
  }, true), n2[t2(287)](n2.container, `gesturechange`, function(e2) {
    n2.hasTouchStarted || R2(e2);
  }, true), n2.registerBinding(n2.container, `mouseout`, function(e2) {
    var t3 = n2.projectIntoViewport(e2.clientX, e2.clientY);
    n2.cy.emit({ originalEvent: e2, type: `mouseout`, position: { x: t3[0], y: t3[1] } });
  }, false), n2.registerBinding(n2.container, t2(919), function(e2) {
    var r3 = n2[t2(825)](e2.clientX, e2.clientY);
    n2.cy.emit({ originalEvent: e2, type: `mouseover`, position: { x: r3[0], y: r3[1] } });
  }, false);
  var z2, B2, V2, H2, U2, W2, G2, K2, q2, J2, Y2, ee2, X2, te2 = function(e2, n3, r3, i3) {
    return Math[t2(1311)]((r3 - e2) * (r3 - e2) + (i3 - n3) * (i3 - n3));
  }, ne2 = function(e2, t3, n3, r3) {
    return (n3 - e2) * (n3 - e2) + (r3 - t3) * (r3 - t3);
  }, re2;
  n2.registerBinding(n2[t2(721)], `touchstart`, re2 = function(e2) {
    var r3 = t2;
    if (n2.hasTouchStarted = true, E2(e2)) {
      y2(), n2.touchData.capture = true, n2.data.bgActivePosistion = void 0;
      var i3 = n2.cy, a3 = n2.touchData.now, s3 = n2.touchData.earlier;
      if (e2.touches[0]) {
        var c3 = n2[r3(825)](e2.touches[0].clientX, e2[r3(383)][0].clientY);
        a3[0] = c3[0], a3[1] = c3[1];
      }
      if (e2.touches[1]) {
        var c3 = n2.projectIntoViewport(e2[r3(383)][1].clientX, e2.touches[1].clientY);
        a3[2] = c3[0], a3[3] = c3[1];
      }
      if (e2.touches[2]) {
        var c3 = n2.projectIntoViewport(e2.touches[2].clientX, e2.touches[2][r3(357)]);
        a3[4] = c3[0], a3[5] = c3[1];
      }
      var l3 = function(t3) {
        return { originalEvent: e2, type: t3, position: { x: a3[0], y: a3[1] } };
      };
      if (e2.touches[1]) {
        n2.touchData.singleTouchMoved = true, _2(n2[r3(748)].touchDragEles);
        var u3 = n2.findContainerClientCoords();
        q2 = u3[0], J2 = u3[1], Y2 = u3[2], ee2 = u3[3], z2 = e2.touches[0].clientX - q2, B2 = e2.touches[0].clientY - J2, V2 = e2.touches[1].clientX - q2, H2 = e2.touches[1].clientY - J2, X2 = 0 <= z2 && z2 <= Y2 && 0 <= V2 && V2 <= Y2 && 0 <= B2 && B2 <= ee2 && 0 <= H2 && H2 <= ee2;
        var f3 = i3[r3(996)](), p3 = i3.zoom();
        U2 = te2(z2, B2, V2, H2), W2 = ne2(z2, B2, V2, H2), G2 = [(z2 + V2) / 2, (B2 + H2) / 2], K2 = [(G2[0] - f3.x) / p3, (G2[1] - f3.y) / p3];
        var m3 = 200, v3 = m3 * m3;
        if (W2 < v3 && !e2.touches[2]) {
          var b3 = n2.findNearestElement(a3[0], a3[1], true, true), x3 = n2.findNearestElement(a3[2], a3[3], true, true);
          b3 && b3[r3(704)]() ? (b3.activate().emit(l3(r3(312))), n2.touchData.start = b3) : x3 && x3.isNode() ? (x3.activate().emit(l3(`cxttapstart`)), n2[r3(922)].start = x3) : i3.emit(l3(r3(312))), n2.touchData.start && (n2.touchData.start._private.grabbed = false), n2.touchData.cxt = true, n2.touchData.cxtDragged = false, n2.data.bgActivePosistion = void 0, n2.redraw();
          return;
        }
      }
      if (e2.touches[2]) i3.boxSelectionEnabled() && e2.preventDefault();
      else if (!e2[r3(383)][1] && e2[r3(383)][0]) {
        var S3 = n2.findNearestElements(a3[0], a3[1], true, true), C3 = S3[0];
        if (C3 != null && (C3.activate(), n2.touchData.start = C3, n2.touchData.starts = S3, n2.nodeIsGrabbable(C3))) {
          var w3 = n2.dragData.touchDragEles = i3.collection(), T3 = null;
          n2[r3(431)](`eles`, true), n2.redrawHint(`drag`, true), C3.selected() ? (T3 = i3.$(function(e3) {
            return e3.selected() && n2.nodeIsGrabbable(e3);
          }), h2(T3, { addToList: w3 })) : g2(C3, { addToList: w3 }), d2(C3), C3.emit(l3(`grabon`)), T3 ? T3[r3(1390)](function(e3) {
            e3.emit(l3(`grab`));
          }) : C3.emit(l3(`grab`));
        }
        o2(C3, [`touchstart`, `tapstart`, `vmousedown`], e2, { x: a3[0], y: a3[1] }), C3 ?? (n2.data.bgActivePosistion = { x: c3[0], y: c3[1] }, n2.redrawHint(`select`, true), n2.redraw()), n2.touchData.singleTouchMoved = false, n2.touchData.singleTouchStartTime = +/* @__PURE__ */ new Date(), clearTimeout(n2[r3(922)][r3(241)]), n2.touchData.tapholdTimeout = setTimeout(function() {
          var t3 = r3;
          n2.touchData[t3(587)] === false && !n2.pinching && !n2.touchData.selecting && o2(n2.touchData.start, [`taphold`], e2, { x: a3[0], y: a3[1] });
        }, n2[r3(1029)]);
      }
      if (e2.touches[r3(441)] >= 1) {
        for (var D3 = n2.touchData[r3(612)] = [null, null, null, null, null, null], O3 = 0; O3 < a3[r3(441)]; O3++) D3[O3] = s3[O3] = a3[O3];
        var k3 = e2.touches[0];
        n2.touchData.startGPosition = [k3[r3(454)], k3.clientY];
      }
    }
  }, false);
  var ie2;
  n2.registerBinding(r2, `touchmove`, ie2 = function(e2) {
    var r3 = t2, i3 = n2.touchData.capture;
    if (!(!i3 && !E2(e2))) {
      var a3 = n2[r3(770)], s3 = n2.cy, l3 = n2[r3(922)].now, u3 = n2.touchData.earlier, d3 = s3.zoom();
      if (e2.touches[0]) {
        var f3 = n2.projectIntoViewport(e2.touches[0].clientX, e2.touches[0].clientY);
        l3[0] = f3[0], l3[1] = f3[1];
      }
      if (e2.touches[1]) {
        var f3 = n2[r3(825)](e2.touches[1][r3(454)], e2.touches[1].clientY);
        l3[2] = f3[0], l3[3] = f3[1];
      }
      if (e2.touches[2]) {
        var f3 = n2.projectIntoViewport(e2.touches[2].clientX, e2.touches[2].clientY);
        l3[4] = f3[0], l3[5] = f3[1];
      }
      var p3 = function(t3) {
        return { originalEvent: e2, type: t3, position: { x: l3[0], y: l3[1] } };
      }, m3 = n2[r3(922)].startGPosition, g3;
      if (i3 && e2.touches[0] && m3) {
        for (var v3 = [], y3 = 0; y3 < l3.length; y3++) v3[y3] = l3[y3] - u3[y3];
        var b3 = e2.touches[0].clientX - m3[0], x3 = b3 * b3, S3 = e2[r3(383)][0].clientY - m3[1];
        g3 = x3 + S3 * S3 >= n2[r3(430)];
      }
      if (i3 && n2.touchData.cxt) {
        e2.preventDefault();
        var C3 = e2[r3(383)][0].clientX - q2, w3 = e2.touches[0].clientY - J2, T3 = e2.touches[1].clientX - q2, D3 = e2.touches[1].clientY - J2, O3 = ne2(C3, w3, T3, D3), k3 = O3 / W2, A3 = 150, M3 = A3 * A3, N3 = 1.5;
        if (k3 >= N3 * N3 || O3 >= M3) {
          n2.touchData[r3(571)] = false, n2.data.bgActivePosistion = void 0, n2[r3(431)](`select`, true);
          var P3 = p3(`cxttapend`);
          n2.touchData[r3(1263)] ? (n2.touchData.start.unactivate().emit(P3), n2.touchData.start = null) : s3.emit(P3);
        }
      }
      if (i3 && n2.touchData[r3(571)]) {
        var P3 = p3(`cxtdrag`);
        n2.data.bgActivePosistion = void 0, n2[r3(431)](`select`, true), n2[r3(922)].start ? n2.touchData.start.emit(P3) : s3.emit(P3), n2.touchData.start && (n2.touchData[r3(1263)]._private.grabbed = false), n2.touchData.cxtDragged = true;
        var F3 = n2.findNearestElement(l3[0], l3[1], true, true);
        (!n2.touchData.cxtOver || F3 !== n2[r3(922)].cxtOver) && (n2.touchData.cxtOver && n2[r3(922)].cxtOver.emit(p3(`cxtdragout`)), n2.touchData.cxtOver = F3, F3 && F3.emit(p3(`cxtdragover`)));
      } else if (i3 && e2.touches[2] && s3[r3(369)]()) e2.preventDefault(), n2.data.bgActivePosistion = void 0, this.lastThreeTouch = +/* @__PURE__ */ new Date(), n2.touchData.selecting || s3.emit(p3(`boxstart`)), n2.touchData[r3(278)] = true, n2.touchData.didSelect = true, a3[4] = 1, !a3 || a3.length === 0 || a3[0] === void 0 ? (a3[0] = (l3[0] + l3[2] + l3[4]) / 3, a3[1] = (l3[1] + l3[3] + l3[5]) / 3, a3[2] = (l3[0] + l3[2] + l3[4]) / 3 + 1, a3[3] = (l3[1] + l3[3] + l3[5]) / 3 + 1) : (a3[2] = (l3[0] + l3[2] + l3[4]) / 3, a3[3] = (l3[1] + l3[3] + l3[5]) / 3), n2.redrawHint(`select`, true), n2.redraw();
      else if (i3 && e2.touches[1] && !n2.touchData.didSelect && s3.zoomingEnabled() && s3.panningEnabled() && s3.userZoomingEnabled() && s3.userPanningEnabled()) {
        e2.preventDefault(), n2.data.bgActivePosistion = void 0, n2.redrawHint(`select`, true);
        var I3 = n2.dragData.touchDragEles;
        if (I3) {
          n2.redrawHint(`drag`, true);
          for (var L3 = 0; L3 < I3.length; L3++) {
            var R3 = I3[L3][r3(820)];
            R3.grabbed = false, R3.rscratch.inDragLayer = false;
          }
        }
        var G3 = n2.touchData[r3(1263)], C3 = e2[r3(383)][0].clientX - q2, w3 = e2.touches[0].clientY - J2, T3 = e2.touches[1][r3(454)] - q2, D3 = e2.touches[1].clientY - J2, Y3 = te2(C3, w3, T3, D3), ee3 = Y3 / U2;
        if (X2) {
          var re3 = C3 - z2, ie3 = w3 - B2, ae3 = T3 - V2, oe3 = D3 - H2, se3 = (re3 + ae3) / 2, ce3 = (ie3 + oe3) / 2, Z3 = s3[r3(1242)](), le3 = Z3 * ee3, ue3 = s3[r3(996)](), de3 = K2[0] * Z3 + ue3.x, fe3 = K2[1] * Z3 + ue3.y, pe3 = { x: -le3 / Z3 * (de3 - ue3.x - se3) + de3, y: -le3 / Z3 * (fe3 - ue3.y - ce3) + fe3 };
          if (G3 && G3.active()) {
            var I3 = n2.dragData.touchDragEles;
            _2(I3), n2.redrawHint(`drag`, true), n2[r3(431)](`eles`, true), G3[r3(734)]().emit(p3(`freeon`)), I3.emit(p3(`free`)), n2.dragData.didDrag && (G3[r3(818)](p3(`dragfreeon`)), I3.emit(p3(`dragfree`)));
          }
          s3.viewport({ zoom: le3, pan: pe3, cancelOnFailedZoom: true }), s3[r3(818)](p3(`pinchzoom`)), U2 = Y3, z2 = C3, B2 = w3, V2 = T3, H2 = D3, n2.pinching = true;
        }
        if (e2.touches[0]) {
          var f3 = n2.projectIntoViewport(e2.touches[0].clientX, e2.touches[0].clientY);
          l3[0] = f3[0], l3[1] = f3[1];
        }
        if (e2[r3(383)][1]) {
          var f3 = n2.projectIntoViewport(e2[r3(383)][1].clientX, e2.touches[1].clientY);
          l3[2] = f3[0], l3[3] = f3[1];
        }
        if (e2.touches[2]) {
          var f3 = n2.projectIntoViewport(e2[r3(383)][2].clientX, e2[r3(383)][2].clientY);
          l3[4] = f3[0], l3[5] = f3[1];
        }
      } else if (e2.touches[0] && !n2.touchData.didSelect) {
        var me3 = n2[r3(922)][r3(1263)], he3 = n2.touchData.last, F3;
        if (!n2.hoverData.draggingEles && !n2[r3(518)] && (F3 = n2.findNearestElement(l3[0], l3[1], true, true)), i3 && me3 != null && e2.preventDefault(), i3 && me3 != null && n2.nodeIsDraggable(me3)) if (g3) {
          var I3 = n2.dragData.touchDragEles, ge3 = !n2.dragData[r3(716)];
          ge3 && h2(I3, { inDragLayer: true }), n2.dragData.didDrag = true;
          var _e2 = { x: 0, y: 0 };
          if (j(v3[0]) && j(v3[1]) && (_e2.x += v3[0], _e2.y += v3[1], ge3)) {
            n2.redrawHint(r3(1015), true);
            var ve2 = n2.touchData.dragDelta;
            ve2 && j(ve2[0]) && j(ve2[1]) && (_e2.x += ve2[0], _e2.y += ve2[1]);
          }
          n2[r3(1402)].draggingEles = true, I3.silentShift(_e2).emit(p3(`position`)).emit(p3(r3(663))), n2[r3(431)](`drag`, true), n2.touchData.startPosition[0] == u3[0] && n2.touchData.startPosition[1] == u3[1] && n2.redrawHint(`eles`, true), n2[r3(1217)]();
        } else {
          var ve2 = n2.touchData.dragDelta = n2.touchData[r3(600)] || [];
          ve2.length === 0 ? (ve2.push(v3[0]), ve2.push(v3[1])) : (ve2[0] += v3[0], ve2[1] += v3[1]);
        }
        if (o2(me3 || F3, [`touchmove`, `tapdrag`, r3(206)], e2, { x: l3[0], y: l3[1] }), (!me3 || !me3.grabbed()) && F3 != he3 && (he3 && he3.emit(p3(`tapdragout`)), F3 && F3.emit(p3(`tapdragover`))), n2[r3(922)].last = F3, i3) for (var L3 = 0; L3 < l3[r3(441)]; L3++) l3[L3] && n2[r3(922)].startPosition[L3] && g3 && (n2.touchData.singleTouchMoved = true);
        if (i3 && (me3 == null || me3[r3(1065)]()) && s3.panningEnabled() && s3.userPanningEnabled()) {
          c2(me3, n2[r3(922)].starts) && (e2.preventDefault(), n2.data[r3(807)] || (n2.data[r3(807)] = An(n2.touchData.startPosition)), n2[r3(518)] ? (s3.panBy({ x: v3[0] * d3, y: v3[1] * d3 }), s3.emit(p3(`dragpan`))) : g3 && (n2.swipePanning = true, s3.panBy({ x: b3 * d3, y: S3 * d3 }), s3[r3(818)](p3(`dragpan`)), me3 && (me3.unactivate(), n2.redrawHint(`select`, true), n2.touchData.start = null)));
          var f3 = n2[r3(825)](e2.touches[0].clientX, e2.touches[0].clientY);
          l3[0] = f3[0], l3[1] = f3[1];
        }
      }
      for (var y3 = 0; y3 < l3.length; y3++) u3[y3] = l3[y3];
      i3 && e2.touches.length > 0 && !n2.hoverData[r3(554)] && !n2.swipePanning && n2.data.bgActivePosistion != null && (n2.data.bgActivePosistion = void 0, n2.redrawHint(`select`, true), n2.redraw());
    }
  }, false);
  var ae2;
  n2[t2(287)](r2, `touchcancel`, ae2 = function(e2) {
    var r3 = t2, i3 = n2.touchData.start;
    n2.touchData.capture = false, i3 && i3[r3(734)]();
  });
  var oe2, se2, ce2, Z2;
  if (n2.registerBinding(r2, t2(1372), oe2 = function(e2) {
    var r3 = t2, a3 = n2.touchData.start;
    if (n2.touchData.capture) e2[r3(383)][r3(441)] === 0 && (n2.touchData.capture = false), e2.preventDefault();
    else return;
    var s3 = n2.selection;
    n2.swipePanning = false, n2.hoverData.draggingEles = false;
    var c3 = n2.cy, l3 = c3.zoom(), u3 = n2.touchData[r3(231)], d3 = n2.touchData.earlier;
    if (e2.touches[0]) {
      var f3 = n2.projectIntoViewport(e2.touches[0].clientX, e2.touches[0].clientY);
      u3[0] = f3[0], u3[1] = f3[1];
    }
    if (e2.touches[1]) {
      var f3 = n2.projectIntoViewport(e2.touches[1][r3(454)], e2.touches[1][r3(357)]);
      u3[2] = f3[0], u3[3] = f3[1];
    }
    if (e2.touches[2]) {
      var f3 = n2.projectIntoViewport(e2.touches[2].clientX, e2[r3(383)][2].clientY);
      u3[4] = f3[0], u3[5] = f3[1];
    }
    var p3 = function(t3) {
      return { originalEvent: e2, type: t3, position: { x: u3[0], y: u3[1] } };
    };
    a3 && a3.unactivate();
    var m3;
    if (n2[r3(922)][r3(571)]) {
      if (m3 = p3(`cxttapend`), a3 ? a3.emit(m3) : c3[r3(818)](m3), !n2.touchData.cxtDragged) {
        var h3 = p3(`cxttap`);
        a3 ? a3.emit(h3) : c3.emit(h3);
      }
      n2.touchData.start && (n2.touchData.start._private.grabbed = false), n2.touchData[r3(571)] = false, n2.touchData.start = null, n2.redraw();
      return;
    }
    if (!e2.touches[2] && c3[r3(369)]() && n2.touchData[r3(278)]) {
      n2.touchData[r3(278)] = false;
      var g3 = c3.collection(n2.getAllInBox(s3[0], s3[1], s3[2], s3[3]));
      s3[0] = void 0, s3[1] = void 0, s3[2] = void 0, s3[3] = void 0, s3[4] = 0, n2[r3(431)](`select`, true), c3.emit(p3(`boxend`)), g3.emit(p3(`box`)).stdFilter(function(e3) {
        return e3.selectable() && !e3.selected();
      })[r3(709)]().emit(p3(`boxselect`)), g3.nonempty() && n2.redrawHint(`eles`, true), n2[r3(1217)]();
    }
    if (a3 == null ? void 0 : a3.unactivate(), e2.touches[2]) n2.data.bgActivePosistion = void 0, n2.redrawHint(`select`, true);
    else if (!e2[r3(383)][1] && !e2.touches[0] && !e2.touches[0]) {
      n2.data.bgActivePosistion = void 0, n2.redrawHint(`select`, true);
      var v3 = n2.dragData[r3(559)];
      if (a3 != null) {
        var y3 = a3._private[r3(1024)];
        _2(v3), n2[r3(431)](`drag`, true), n2[r3(431)](`eles`, true), y3 && (a3.emit(p3(`freeon`)), v3[r3(818)](p3(`free`)), n2.dragData.didDrag && (a3[r3(818)](p3(`dragfreeon`)), v3.emit(p3(r3(811))))), o2(a3, [`touchend`, `tapend`, `vmouseup`, `tapdragout`], e2, { x: u3[0], y: u3[1] }), a3.unactivate(), n2.touchData.start = null;
      } else o2(n2.findNearestElement(u3[0], u3[1], true, true), [`touchend`, `tapend`, r3(1357), `tapdragout`], e2, { x: u3[0], y: u3[1] });
      var b3 = n2.touchData.startPosition[0] - u3[0], x3 = b3 * b3, S3 = n2.touchData.startPosition[1] - u3[1], C3 = (x3 + S3 * S3) * l3 * l3;
      n2.touchData.singleTouchMoved || (a3 || c3.$(`:selected`).unselect([`tapunselect`]), o2(a3, [`tap`, r3(323)], e2, { x: u3[0], y: u3[1] }), se2 = false, e2.timeStamp - Z2 <= c3.multiClickDebounceTime() ? (ce2 && clearTimeout(ce2), se2 = true, Z2 = null, o2(a3, [`dbltap`, `vdblclick`], e2, { x: u3[0], y: u3[1] })) : (ce2 = setTimeout(function() {
        se2 || o2(a3, [`onetap`, `voneclick`], e2, { x: u3[0], y: u3[1] });
      }, c3[r3(333)]()), Z2 = e2.timeStamp)), a3 != null && !n2.dragData[r3(716)] && a3._private[r3(932)] && C3 < n2.touchTapThreshold2 && !n2.pinching && (c3.selectionType() === `single` ? (c3.$(i2)[r3(912)](a3)[r3(543)]([`tapunselect`]), a3.select([`tapselect`])) : a3.selected() ? a3.unselect([`tapunselect`]) : a3.select([`tapselect`]), n2[r3(431)](`eles`, true)), n2.touchData[r3(587)] = true;
    }
    for (var w3 = 0; w3 < u3.length; w3++) d3[w3] = u3[w3];
    n2.dragData[r3(716)] = false, e2.touches.length === 0 && (n2[r3(922)].dragDelta = [], n2.touchData.startPosition = [null, null, null, null, null, null], n2.touchData[r3(367)] = null, n2.touchData.didSelect = false), e2.touches[r3(441)] < 2 && (e2.touches[r3(441)] === 1 && (n2[r3(922)].startGPosition = [e2.touches[0].clientX, e2[r3(383)][0].clientY]), n2.pinching = false, n2.redrawHint(`eles`, true), n2.redraw());
  }, false), typeof TouchEvent > `u`) {
    var le2 = [], ue2 = function(e2) {
      var n3 = t2;
      return { clientX: e2[n3(454)], clientY: e2.clientY, force: 1, identifier: e2.pointerId, pageX: e2.pageX, pageY: e2.pageY, radiusX: e2.width / 2, radiusY: e2.height / 2, screenX: e2[n3(808)], screenY: e2.screenY, target: e2.target };
    }, de2 = function(e2) {
      return { event: e2, touch: ue2(e2) };
    }, fe2 = function(e2) {
      le2.push(de2(e2));
    }, pe2 = function(e2) {
      for (var n3 = t2, r3 = 0; r3 < le2.length; r3++) if (le2[r3].event.pointerId === e2[n3(765)]) {
        le2.splice(r3, 1);
        return;
      }
    }, me2 = function(e2) {
      var t3 = le2.filter(function(t4) {
        return t4.event.pointerId === e2.pointerId;
      })[0];
      t3.event = e2, t3.touch = ue2(e2);
    }, he2 = function(e2) {
      e2.touches = le2.map(function(e3) {
        return e3[$(668)];
      });
    }, ge2 = function(e2) {
      var n3 = t2;
      return e2[n3(1203)] === n3(429) || e2.pointerType === 4;
    };
    n2.registerBinding(n2[t2(721)], `pointerdown`, function(e2) {
      ge2(e2) || (e2.preventDefault(), fe2(e2), he2(e2), re2(e2));
    }), n2.registerBinding(n2.container, `pointerup`, function(e2) {
      ge2(e2) || (pe2(e2), he2(e2), oe2(e2));
    }), n2.registerBinding(n2.container, `pointercancel`, function(e2) {
      ge2(e2) || (pe2(e2), he2(e2), ae2(e2));
    }), n2.registerBinding(n2.container, t2(946), function(e2) {
      ge2(e2) || (e2.preventDefault(), me2(e2), he2(e2), ie2(e2));
    });
  }
};
var Kf = {};
Kf[e(885)] = function(e2, t2) {
  return this.nodeShapes[e2] = { renderer: this, name: e2, points: t2, draw: function(e3, t3, n2, r2, i2, a2) {
    var o2 = $;
    this[o2(589)].nodeShapeImpl(`polygon`, e3, t3, n2, r2, i2, this.points);
  }, intersectLine: function(e3, t3, n2, r2, i2, a2, o2, s2) {
    var c2 = $;
    return Tr(i2, a2, this[c2(711)], e3, t3, n2 / 2, r2 / 2, o2);
  }, checkPoint: function(e3, t3, n2, r2, i2, a2, o2, s2) {
    return hr(e3, t3, this.points, a2, o2, r2, i2, [0, -1], n2);
  }, hasMiterBounds: e2 !== `rectangle`, miterBounds: function(e3, t3, n2, r2, i2, a2) {
    var o2 = $;
    return or(this[o2(711)], e3, t3, n2, r2, i2);
  } };
}, Kf.generateEllipse = function() {
  var t2 = e;
  return this.nodeShapes[t2(789)] = { renderer: this, name: `ellipse`, draw: function(e2, t3, n2, r2, i2, a2) {
    this.renderer.nodeShapeImpl(this.name, e2, t3, n2, r2, i2);
  }, intersectLine: function(e2, t3, n2, r2, i2, a2, o2, s2) {
    return yr(i2, a2, e2, t3, n2 / 2 + o2, r2 / 2 + o2);
  }, checkPoint: function(e2, t3, n2, r2, i2, a2, o2, s2) {
    return br(e2, t3, r2, i2, a2, o2, n2);
  } };
}, Kf.generateRoundPolygon = function(t2, n2) {
  var r2 = e;
  return this[r2(1022)][t2] = { renderer: this, name: t2, points: n2, getOrCreateCorners: function(e2, t3, r3, i2, a2, o2, s2) {
    if (o2[s2] !== void 0 && o2[s2 + `-cx`] === e2 && o2[s2 + `-cy`] === t3) return o2[s2];
    o2[s2] = Array(n2.length / 2), o2[s2 + `-cx`] = e2, o2[s2 + `-cy`] = t3;
    var c2 = r3 / 2, l2 = i2 / 2;
    a2 = a2 === `auto` ? Mr(r3, i2) : a2;
    for (var u2 = Array(n2.length / 2), d2 = 0; d2 < n2.length / 2; d2++) u2[d2] = { x: e2 + c2 * n2[d2 * 2], y: t3 + l2 * n2[d2 * 2 + 1] };
    var f2, p2, m2, h2, g2 = u2.length;
    for (p2 = u2[g2 - 1], f2 = 0; f2 < g2; f2++) m2 = u2[f2 % g2], h2 = u2[(f2 + 1) % g2], o2[s2][f2] = Cf(p2, m2, h2, a2), p2 = m2, m2 = h2;
    return o2[s2];
  }, draw: function(e2, t3, n3, i2, a2, o2, s2) {
    var c2 = r2;
    this.renderer[c2(665)](`round-polygon`, e2, t3, n3, i2, a2, this.points, this[c2(803)](t3, n3, i2, a2, o2, s2, `drawCorners`));
  }, intersectLine: function(e2, t3, n3, r3, i2, a2, o2, s2, c2) {
    return Er(i2, a2, this.points, e2, t3, n3, r3, o2, this.getOrCreateCorners(e2, t3, n3, r3, s2, c2, `corners`));
  }, checkPoint: function(e2, t3, n3, r3, i2, a2, o2, s2, c2) {
    return gr(e2, t3, this.points, a2, o2, r3, i2, this.getOrCreateCorners(a2, o2, r3, i2, s2, c2, `corners`));
  } };
}, Kf.generateRoundRectangle = function() {
  return this.nodeShapes[`round-rectangle`] = this.nodeShapes.roundrectangle = { renderer: this, name: `round-rectangle`, points: Or(4, 0), draw: function(e2, t2, n2, r2, i2, a2) {
    var o2 = $;
    this.renderer[o2(665)](this.name, e2, t2, n2, r2, i2, this[o2(711)], a2);
  }, intersectLine: function(e2, t2, n2, r2, i2, a2, o2, s2) {
    return sr(i2, a2, e2, t2, n2, r2, o2, s2);
  }, checkPoint: function(e2, t2, n2, r2, i2, a2, o2, s2) {
    var c2 = r2 / 2, l2 = i2 / 2;
    s2 = s2 === `auto` ? jr(r2, i2) : s2, s2 = Math.min(c2, l2, s2);
    var u2 = s2 * 2;
    return !!(hr(e2, t2, this.points, a2, o2, r2, i2 - u2, [0, -1], n2) || hr(e2, t2, this.points, a2, o2, r2 - u2, i2, [0, -1], n2) || br(e2, t2, u2, u2, a2 - c2 + s2, o2 - l2 + s2, n2) || br(e2, t2, u2, u2, a2 + c2 - s2, o2 - l2 + s2, n2) || br(e2, t2, u2, u2, a2 + c2 - s2, o2 + l2 - s2, n2) || br(e2, t2, u2, u2, a2 - c2 + s2, o2 + l2 - s2, n2));
  } };
}, Kf.generateCutRectangle = function() {
  var t2 = e;
  return this.nodeShapes[`cut-rectangle`] = this.nodeShapes.cutrectangle = { renderer: this, name: t2(262), cornerLength: Nr(), points: Or(4, 0), draw: function(e2, n2, r2, i2, a2, o2) {
    var s2 = t2;
    this.renderer[s2(665)](this.name, e2, n2, r2, i2, a2, null, o2);
  }, generateCutTrianglePts: function(e2, t3, n2, r2, i2) {
    var a2 = i2 === `auto` ? this.cornerLength : i2, o2 = t3 / 2, s2 = e2 / 2, c2 = n2 - s2, l2 = n2 + s2, u2 = r2 - o2, d2 = r2 + o2;
    return { topLeft: [c2, u2 + a2, c2 + a2, u2, c2 + a2, u2 + a2], topRight: [l2 - a2, u2, l2, u2 + a2, l2 - a2, u2 + a2], bottomRight: [l2, d2 - a2, l2 - a2, d2, l2 - a2, d2 - a2], bottomLeft: [c2 + a2, d2, c2, d2 - a2, c2 + a2, d2 - a2] };
  }, intersectLine: function(e2, n2, r2, i2, a2, o2, s2, c2) {
    var l2 = t2, u2 = this.generateCutTrianglePts(r2 + 2 * s2, i2 + 2 * s2, e2, n2, c2);
    return Tr(a2, o2, [].concat.apply([], [u2.topLeft.splice(0, 4), u2.topRight.splice(0, 4), u2.bottomRight.splice(0, 4), u2.bottomLeft[l2(1185)](0, 4)]), e2, n2);
  }, checkPoint: function(e2, n2, r2, i2, a2, o2, s2, c2) {
    var l2 = t2, u2 = c2 === l2(1037) ? this.cornerLength : c2;
    if (hr(e2, n2, this.points, o2, s2, i2, a2 - 2 * u2, [0, -1], r2) || hr(e2, n2, this.points, o2, s2, i2 - 2 * u2, a2, [0, -1], r2)) return true;
    var d2 = this.generateCutTrianglePts(i2, a2, o2, s2);
    return mr(e2, n2, d2[l2(1396)]) || mr(e2, n2, d2.topRight) || mr(e2, n2, d2.bottomRight) || mr(e2, n2, d2[l2(1248)]);
  } };
}, Kf.generateBarrel = function() {
  return this.nodeShapes.barrel = { renderer: this, name: `barrel`, points: Or(4, 0), draw: function(e2, t2, n2, r2, i2, a2) {
    this.renderer.nodeShapeImpl(this.name, e2, t2, n2, r2, i2);
  }, intersectLine: function(e2, t2, n2, r2, i2, a2, o2, s2) {
    var c2 = $, l2 = 0.15, u2 = 0.5, d2 = 0.85, f2 = this.generateBarrelBezierPts(n2 + 2 * o2, r2 + 2 * o2, e2, t2), p2 = function(e3) {
      var t3 = Un({ x: e3[0], y: e3[1] }, { x: e3[2], y: e3[3] }, { x: e3[4], y: e3[5] }, l2), n3 = Un({ x: e3[0], y: e3[1] }, { x: e3[2], y: e3[3] }, { x: e3[4], y: e3[5] }, u2), r3 = Un({ x: e3[0], y: e3[1] }, { x: e3[2], y: e3[3] }, { x: e3[4], y: e3[5] }, d2);
      return [e3[0], e3[1], t3.x, t3.y, n3.x, n3.y, r3.x, r3.y, e3[4], e3[5]];
    };
    return Tr(i2, a2, [][c2(627)](p2(f2.topLeft), p2(f2[c2(598)]), p2(f2[c2(437)]), p2(f2.bottomLeft)), e2, t2);
  }, generateBarrelBezierPts: function(e2, t2, n2, r2) {
    var i2 = $, a2 = t2 / 2, o2 = e2 / 2, s2 = n2 - o2, c2 = n2 + o2, l2 = r2 - a2, u2 = r2 + a2, d2 = Fr(e2, t2), f2 = d2.heightOffset, p2 = d2[i2(604)], m2 = d2.ctrlPtOffsetPct * e2, h2 = { topLeft: [s2, l2 + f2, s2 + m2, l2, s2 + p2, l2], topRight: [c2 - p2, l2, c2 - m2, l2, c2, l2 + f2], bottomRight: [c2, u2 - f2, c2 - m2, u2, c2 - p2, u2], bottomLeft: [s2 + p2, u2, s2 + m2, u2, s2, u2 - f2] };
    return h2.topLeft.isTop = true, h2.topRight.isTop = true, h2.bottomLeft.isBottom = true, h2.bottomRight.isBottom = true, h2;
  }, checkPoint: function(e2, t2, n2, r2, i2, a2, o2, s2) {
    var c2 = $, l2 = Fr(r2, i2), u2 = l2.heightOffset, d2 = l2.widthOffset;
    if (hr(e2, t2, this.points, a2, o2, r2, i2 - 2 * u2, [0, -1], n2) || hr(e2, t2, this.points, a2, o2, r2 - 2 * d2, i2, [0, -1], n2)) return true;
    for (var f2 = this.generateBarrelBezierPts(r2, i2, a2, o2), p2 = function(e3, t3, n3) {
      var r3 = $, i3 = n3[4], a3 = n3[2], o3 = n3[0], s3 = n3[5], c3 = n3[1];
      if (Math.min(i3, o3) <= e3 && e3 <= Math.max(i3, o3) && Math[r3(1120)](s3, c3) <= t3 && t3 <= Math.max(s3, c3)) {
        var l3 = Pr(i3, a3, o3), u3 = ur(l3[0], l3[1], l3[2], e3).filter(function(e4) {
          return 0 <= e4 && e4 <= 1;
        });
        if (u3[r3(441)] > 0) return u3[0];
      }
      return null;
    }, m2 = Object[c2(520)](f2), h2 = 0; h2 < m2.length; h2++) {
      var g2 = f2[m2[h2]], _2 = p2(e2, t2, g2);
      if (_2 != null) {
        var v2 = g2[5], y2 = g2[3], b2 = g2[1], x2 = Hn(v2, y2, b2, _2);
        if (g2.isTop && x2 <= t2 || g2[c2(644)] && t2 <= x2) return true;
      }
    }
    return false;
  } };
}, Kf.generateBottomRoundrectangle = function() {
  var t2 = e;
  return this.nodeShapes[`bottom-round-rectangle`] = this[t2(1022)].bottomroundrectangle = { renderer: this, name: `bottom-round-rectangle`, points: Or(4, 0), draw: function(e2, n2, r2, i2, a2, o2) {
    var s2 = t2;
    this[s2(589)][s2(665)](this.name, e2, n2, r2, i2, a2, this.points, o2);
  }, intersectLine: function(e2, n2, r2, i2, a2, o2, s2, c2) {
    var l2 = t2, u2 = e2 - (r2 / 2 + s2), d2 = n2 - (i2 / 2 + s2), f2 = d2, p2 = Cr(a2, o2, e2, n2, u2, d2, e2 + (r2 / 2 + s2), f2, false);
    return p2[l2(441)] > 0 ? p2 : sr(a2, o2, e2, n2, r2, i2, s2, c2);
  }, checkPoint: function(e2, t3, n2, r2, i2, a2, o2, s2) {
    s2 = s2 === `auto` ? jr(r2, i2) : s2;
    var c2 = 2 * s2;
    if (hr(e2, t3, this.points, a2, o2, r2, i2 - c2, [0, -1], n2) || hr(e2, t3, this.points, a2, o2, r2 - c2, i2, [0, -1], n2)) return true;
    var l2 = r2 / 2 + 2 * n2, u2 = i2 / 2 + 2 * n2;
    return !!(mr(e2, t3, [a2 - l2, o2 - u2, a2 - l2, o2, a2 + l2, o2, a2 + l2, o2 - u2]) || br(e2, t3, c2, c2, a2 + r2 / 2 - s2, o2 + i2 / 2 - s2, n2) || br(e2, t3, c2, c2, a2 - r2 / 2 + s2, o2 + i2 / 2 - s2, n2));
  } };
}, Kf.registerNodeShapes = function() {
  var t2 = e, n2 = this.nodeShapes = {}, r2 = this;
  this.generateEllipse(), this.generatePolygon(`triangle`, Or(3, 0)), this[t2(1091)](`round-triangle`, Or(3, 0)), this.generatePolygon(t2(832), Or(4, 0)), n2.square = n2.rectangle, this.generateRoundRectangle(), this.generateCutRectangle(), this.generateBarrel(), this.generateBottomRoundrectangle();
  var i2 = [0, 1, 1, 0, 0, -1, -1, 0];
  this[t2(885)](`diamond`, i2), this[t2(1091)](t2(1405), i2), this.generatePolygon(`pentagon`, Or(5, 0)), this.generateRoundPolygon(`round-pentagon`, Or(5, 0)), this.generatePolygon(`hexagon`, Or(6, 0)), this.generateRoundPolygon(`round-hexagon`, Or(6, 0)), this.generatePolygon(`heptagon`, Or(7, 0)), this.generateRoundPolygon(`round-heptagon`, Or(7, 0)), this.generatePolygon(`octagon`, Or(8, 0)), this.generateRoundPolygon(`round-octagon`, Or(8, 0));
  var a2 = Array(20), o2 = Ar(5, 0), s2 = Ar(5, Math.PI / 5), c2 = 0.5 * (3 - Math.sqrt(5));
  c2 *= 1.57;
  for (var l2 = 0; l2 < s2[t2(441)] / 2; l2++) s2[l2 * 2] *= c2, s2[l2 * 2 + 1] *= c2;
  for (var l2 = 0; l2 < 20 / 4; l2++) a2[l2 * 4] = o2[l2 * 2], a2[l2 * 4 + 1] = o2[l2 * 2 + 1], a2[l2 * 4 + 2] = s2[l2 * 2], a2[l2 * 4 + 3] = s2[l2 * 2 + 1];
  a2 = kr(a2), this.generatePolygon(`star`, a2), this.generatePolygon(`vee`, [-1, -1, 0, -0.333, 1, -1, 0, 1]), this.generatePolygon(`rhomboid`, [-1, -1, 0.333, -1, 1, 1, -0.333, 1]), this.generatePolygon(t2(1158), [-0.333, -1, 1, -1, 0.333, 1, -1, 1]), this[t2(1022)].concavehexagon = this.generatePolygon(`concave-hexagon`, [-1, -0.95, -0.75, 0, -1, 0.95, 1, 0.95, 0.75, 0, 1, -0.95]);
  var u2 = [-1, -1, 0.25, -1, 1, 0, 0.25, 1, -1, 1];
  this[t2(885)](`tag`, u2), this[t2(1091)](`round-tag`, u2), n2.makePolygon = function(e2) {
    var t3 = `polygon-` + e2.join(`$`), n3;
    return (n3 = this[t3]) ? n3 : r2.generatePolygon(t3, e2);
  };
};
var qf = {};
qf[e(893)] = function() {
  return this.redrawTotalTime / this.redrawCount;
}, qf.redraw = function(t2) {
  var n2 = e;
  t2 || (t2 = Gt());
  var r2 = this;
  r2.averageRedrawTime === void 0 && (r2[n2(686)] = 0), r2.lastRedrawTime === void 0 && (r2.lastRedrawTime = 0), r2.lastDrawTime === void 0 && (r2.lastDrawTime = 0), r2.requestedFrame = true, r2[n2(731)] = t2;
}, qf.beforeRender = function(e2, t2) {
  if (!this.destroyed) {
    t2 ?? Lt(`Priority is not optional for beforeRender`);
    var n2 = this.beforeRenderCallbacks;
    n2.push({ fn: e2, priority: t2 }), n2.sort(function(e3, t3) {
      return t3.priority - e3.priority;
    });
  }
};
var Jf = function(e2, t2, n2) {
  for (var r2 = e2.beforeRenderCallbacks, i2 = 0; i2 < r2.length; i2++) r2[i2].fn(t2, n2);
};
qf.startRenderLoop = function() {
  var t2 = e, n2 = this, r2 = n2.cy;
  if (!n2.renderLoopStarted) {
    n2[t2(924)] = true;
    var i2 = function(e2) {
      var a2 = t2;
      if (!n2.destroyed) {
        if (!r2.batching()) if (n2.requestedFrame && !n2.skipFrame) {
          Jf(n2, true, e2);
          var o2 = ft();
          n2.render(n2.renderOptions);
          var s2 = n2.lastDrawTime = ft();
          n2[a2(686)] === void 0 && (n2.averageRedrawTime = s2 - o2), n2.redrawCount === void 0 && (n2.redrawCount = 0), n2[a2(592)]++, n2.redrawTotalTime === void 0 && (n2.redrawTotalTime = 0);
          var c2 = s2 - o2;
          n2[a2(1112)] += c2, n2.lastRedrawTime = c2, n2.averageRedrawTime = n2.averageRedrawTime / 2 + c2 / 2, n2.requestedFrame = false;
        } else Jf(n2, false, e2);
        n2.skipFrame = false, dt(i2);
      }
    };
    dt(i2);
  }
};
var Yf = function(e2) {
  this.init(e2);
}, Xf = Yf[e(216)];
Xf.clientFunctions = [e(431), `render`, `renderTo`, `matchCanvasSize`, `nodeShapeImpl`, `arrowShapeImpl`], Xf.init = function(t2) {
  var n2 = e, r2 = this;
  r2.options = t2, r2.cy = t2.cy;
  var i2 = r2.container = t2.cy.container(), a2 = r2.cy.window();
  if (a2) {
    var o2 = a2.document, s2 = o2[n2(859)], c2 = `__________cytoscape_stylesheet`, l2 = `__________cytoscape_container`, u2 = o2[n2(1337)](c2) != null;
    if (i2.className[n2(294)](l2) < 0 && (i2.className = (i2[n2(651)] || ``) + ` ` + l2), !u2) {
      var d2 = o2.createElement(`style`);
      d2.id = c2, d2.textContent = `.` + l2 + ` { position: relative; }`, s2[n2(771)](d2, s2.children[0]);
    }
    a2.getComputedStyle(i2).getPropertyValue(`position`) === `static` && zt(`A Cytoscape container has style position:static and so can not use UI extensions properly`);
  }
  r2.selection = [void 0, void 0, void 0, void 0, 0], r2[n2(1202)] = [0.05, 0.225, 0.4, 0.5, 0.6, 0.775, 0.95], r2.hoverData = { down: null, last: null, downTime: null, triggerMode: null, dragging: false, initialPan: [null, null], capture: false }, r2.dragData = { possibleDragElements: [] }, r2.touchData = { start: null, capture: false, startPosition: [null, null, null, null, null, null], singleTouchStartTime: null, singleTouchMoved: true, now: [null, null, null, null, null, null], earlier: [null, null, null, null, null, null] }, r2.redraws = 0, r2[n2(981)] = t2.showFps, r2[n2(1017)] = t2[n2(1017)], r2.webgl = t2.webgl, r2.hideEdgesOnViewport = t2.hideEdgesOnViewport, r2.textureOnViewport = t2[n2(1108)], r2[n2(914)] = t2.wheelSensitivity, r2.motionBlurEnabled = t2.motionBlur, r2.forcedPixelRatio = j(t2.pixelRatio) ? t2.pixelRatio : null, r2.motionBlur = t2.motionBlur, r2.motionBlurOpacity = t2.motionBlurOpacity, r2.motionBlurTransparency = 1 - r2.motionBlurOpacity, r2.motionBlurPxRatio = 1, r2.mbPxRBlurry = 1, r2.minMbLowQualFrames = 4, r2.fullQualityMb = false, r2.clearedForMotionBlur = [], r2.desktopTapThreshold = t2.desktopTapThreshold, r2.desktopTapThreshold2 = t2.desktopTapThreshold * t2[n2(1009)], r2[n2(764)] = t2.touchTapThreshold, r2.touchTapThreshold2 = t2.touchTapThreshold * t2[n2(764)], r2.tapholdDuration = 500, r2.bindings = [], r2.beforeRenderCallbacks = [], r2[n2(614)] = { animations: 400, eleCalcs: 300, eleTxrDeq: 200, lyrTxrDeq: 150, lyrTxrSkip: 100 }, r2.registerNodeShapes(), r2.registerArrowShapes(), r2.registerCalculationListeners();
}, Xf.notify = function(t2, n2) {
  var r2 = e, i2 = this, a2 = i2.cy;
  if (!this.destroyed) {
    if (t2 === `init`) {
      i2.load();
      return;
    }
    if (t2 === `destroy`) {
      i2[r2(538)]();
      return;
    }
    (t2 === `add` || t2 === `remove` || t2 === `move` && a2[r2(677)]() || t2 === `load` || t2 === `zorder` || t2 === `mount`) && i2.invalidateCachedZSortedEles(), t2 === `viewport` && i2.redrawHint(r2(709), true), t2 === `gc` && i2.redrawHint(`gc`, true), (t2 === `load` || t2 === r2(979) || t2 === `mount`) && (i2[r2(1016)](), i2.matchCanvasSize(i2.container)), i2.redrawHint(`eles`, true), i2.redrawHint(`drag`, true), this.startRenderLoop(), this.redraw();
  }
}, Xf.destroy = function() {
  var t2 = e, n2 = this;
  n2.destroyed = true, n2.cy.stopAnimationLoop();
  for (var r2 = 0; r2 < n2[t2(766)].length; r2++) {
    var i2 = n2.bindings[r2], a2 = i2.target;
    (a2.off || a2.removeEventListener)[t2(226)](a2, i2[t2(847)]);
  }
  if (n2.bindings = [], n2.beforeRenderCallbacks = [], n2.onUpdateEleCalcsFns = [], n2.removeObserver && n2.removeObserver.disconnect(), n2[t2(775)] && n2.styleObserver.disconnect(), n2.resizeObserver && n2.resizeObserver.disconnect(), n2.labelCalcDiv) try {
    document.body.removeChild(n2[t2(754)]);
  } catch {
  }
}, Xf.isHeadless = function() {
  return false;
}, [Xd, Bf, Vf, Gf, Kf, qf].forEach(function(e2) {
  Z(Xf, e2);
});
var Zf = 1e3 / 60, Qf = { setupDequeueing: function(e2) {
  return function() {
    var t2 = $, n2 = this, r2 = this.renderer;
    if (!n2.dequeueingSetup) {
      n2[t2(1288)] = true;
      var i2 = st(function() {
        var e3 = t2;
        r2.redrawHint(`eles`, true), r2[e3(431)](`drag`, true), r2.redraw();
      }, e2[t2(204)]), a2 = function(a3, o3) {
        var s2 = t2, c2 = ft(), l2 = r2.averageRedrawTime, u2 = r2.lastRedrawTime, d2 = [], f2 = r2.cy.extent(), p2 = r2.getPixelRatio();
        for (a3 || r2.flushRenderedStyleQueue(); ; ) {
          var m2 = ft(), h2 = m2 - c2, g2 = m2 - o3;
          if (u2 < Zf) {
            var _2 = Zf - (a3 ? l2 : 0);
            if (g2 >= e2.deqFastCost * _2) break;
          } else if (a3) {
            if (h2 >= e2.deqCost * u2 || h2 >= e2.deqAvgCost * l2) break;
          } else if (g2 >= e2.deqNoDrawCost * Zf) break;
          var v2 = e2.deq(n2, p2, f2);
          if (v2.length > 0) for (var y2 = 0; y2 < v2.length; y2++) d2[s2(254)](v2[y2]);
          else break;
        }
        d2[s2(441)] > 0 && (e2.onDeqd(n2, d2), !a3 && e2.shouldRedraw(n2, d2, p2, f2) && i2());
      }, o2 = e2.priority || It;
      r2.beforeRender(a2, o2(n2));
    }
  };
} }, $f = (function() {
  var t2 = e;
  function n2(e2) {
    var t3 = $, r2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Pt;
    i(this, n2), this.idsByKey = new Qt(), this.keyForId = new Qt(), this.cachesByLvl = new Qt(), this.lvls = [], this.getKey = e2, this[t3(833)] = r2;
  }
  return o(n2, [{ key: t2(510), value: function(e2) {
    var n3 = t2;
    e2 ?? Lt(n3(426));
    var r2 = this.idsByKey, i2 = this.idsByKey[n3(1276)](e2);
    return i2 || (i2 = new tn(), r2.set(e2, i2)), i2;
  } }, { key: `addIdForKey`, value: function(e2, n3) {
    var r2 = t2;
    e2 != null && this[r2(510)](e2).add(n3);
  } }, { key: t2(1103), value: function(e2, t3) {
    e2 != null && this.getIdsFor(e2).delete(t3);
  } }, { key: t2(1164), value: function(e2) {
    var n3 = t2;
    return e2 == null ? 0 : this[n3(510)](e2).size;
  } }, { key: `updateKeyMappingFor`, value: function(e2) {
    var n3 = t2, r2 = e2.id(), i2 = this.keyForId[n3(1276)](r2), a2 = this.getKey(e2);
    this.deleteIdForKey(i2, r2), this.addIdForKey(a2, r2), this.keyForId[n3(1280)](r2, a2);
  } }, { key: `deleteKeyMappingFor`, value: function(e2) {
    var t3 = e2.id(), n3 = this.keyForId.get(t3);
    this.deleteIdForKey(n3, t3), this.keyForId.delete(t3);
  } }, { key: `keyHasChangedFor`, value: function(e2) {
    var t3 = e2.id();
    return this.keyForId.get(t3) !== this.getKey(e2);
  } }, { key: `isInvalid`, value: function(e2) {
    return this.keyHasChangedFor(e2) || this.doesEleInvalidateKey(e2);
  } }, { key: `getCachesAt`, value: function(e2) {
    var n3 = t2, r2 = this.cachesByLvl, i2 = this.lvls, a2 = r2[n3(1276)](e2);
    return a2 || (a2 = new Qt(), r2.set(e2, a2), i2.push(e2)), a2;
  } }, { key: t2(447), value: function(e2, t3) {
    return this.getCachesAt(t3).get(e2);
  } }, { key: `get`, value: function(e2, t3) {
    var n3 = this.getKey(e2), r2 = this.getCache(n3, t3);
    return r2 != null && this.updateKeyMappingFor(e2), r2;
  } }, { key: t2(1212), value: function(e2, n3) {
    var r2 = t2, i2 = this[r2(895)].get(e2.id());
    return this.getCache(i2, n3);
  } }, { key: `hasCache`, value: function(e2, t3) {
    return this.getCachesAt(t3).has(e2);
  } }, { key: `has`, value: function(e2, n3) {
    var r2 = t2, i2 = this.getKey(e2);
    return this[r2(208)](i2, n3);
  } }, { key: t2(516), value: function(e2, n3, r2) {
    var i2 = t2;
    r2.key = e2, this[i2(671)](n3).set(e2, r2);
  } }, { key: `set`, value: function(e2, n3, r2) {
    var i2 = t2, a2 = this.getKey(e2);
    this.setCache(a2, n3, r2), this[i2(343)](e2);
  } }, { key: `deleteCache`, value: function(e2, n3) {
    var r2 = t2;
    this[r2(671)](n3)[r2(470)](e2);
  } }, { key: `delete`, value: function(e2, n3) {
    var r2 = t2, i2 = this[r2(236)](e2);
    this[r2(1283)](i2, n3);
  } }, { key: t2(1294), value: function(e2) {
    var t3 = this;
    this.lvls.forEach(function(n3) {
      return t3[$(1283)](e2, n3);
    });
  } }, { key: `invalidate`, value: function(e2) {
    var t3 = e2.id(), n3 = this.keyForId.get(t3);
    this.deleteKeyMappingFor(e2);
    var r2 = this.doesEleInvalidateKey(e2);
    return r2 && this.invalidateKey(n3), r2 || this.getNumberOfIdsForKey(n3) === 0;
  } }]);
})(), ep = 25, tp = 50, np = -4, rp = 3, ip = 7.99, ap = 8, op = 1024, sp = 1024, cp = 1024, lp = 0.2, up = 0.8, dp = 10, fp = 0.15, pp = 0.1, mp = 0.9, hp = 0.9, gp = 100, _p = 1, vp = { dequeue: `dequeue`, downscale: `downscale`, highQuality: `highQuality` }, yp = Kt({ getKey: null, doesEleInvalidateKey: Pt, drawElement: null, getBoundingBox: null, getRotationPoint: null, getRotationOffset: null, isVisible: Nt, allowEdgeTxrCaching: true, allowParentTxrCaching: true }), bp = function(e2, t2) {
  var n2 = this;
  n2.renderer = e2, n2.onDequeues = [];
  var r2 = yp(t2);
  Z(n2, r2), n2.lookup = new $f(r2.getKey, r2.doesEleInvalidateKey), n2.setupDequeueing();
}, xp = bp[e(216)];
xp.reasons = vp, xp.getTextureQueue = function(t2) {
  var n2 = e, r2 = this;
  return r2.eleImgCaches = r2[n2(1359)] || {}, r2.eleImgCaches[t2] = r2.eleImgCaches[t2] || [];
}, xp.getRetiredTextureQueue = function(e2) {
  var t2 = this, n2 = t2.eleImgCaches.retired = t2.eleImgCaches.retired || {};
  return n2[e2] = n2[e2] || [];
}, xp.getElementQueue = function() {
  var t2 = e, n2 = this;
  return n2[t2(1018)] = n2.eleCacheQueue || new pn(function(e2, t3) {
    return t3.reqs - e2.reqs;
  });
}, xp[e(594)] = function() {
  var e2 = this;
  return e2.eleKeyToCacheQueue = e2.eleKeyToCacheQueue || {};
}, xp[e(1142)] = function(t2, n2, r2, i2, a2) {
  var o2 = e, s2 = this, c2 = this.renderer, l2 = c2.cy.zoom(), u2 = this.lookup;
  if (!n2 || n2.w === 0 || n2.h === 0 || isNaN(n2.w) || isNaN(n2.h) || !t2.visible() || t2.removed() || !s2.allowEdgeTxrCaching && t2.isEdge() || !s2.allowParentTxrCaching && t2[o2(327)]()) return null;
  if (i2 ?? (i2 = Math.ceil(Ln(l2 * r2))), i2 < np) i2 = np;
  else if (l2 >= ip || i2 > rp) return null;
  var d2 = 2 ** i2, f2 = n2.h * d2, p2 = n2.w * d2, m2 = c2.eleTextBiggerThanMin(t2, d2);
  if (!this.isVisible(t2, m2)) return null;
  var h2 = u2[o2(1276)](t2, i2);
  if (h2 && h2.invalidated && (h2.invalidated = false, h2.texture.invalidatedWidth -= h2.width), h2) return h2;
  var g2 = f2 <= ep ? ep : f2 <= tp ? tp : Math.ceil(f2 / tp) * tp;
  if (f2 > cp || p2 > sp) return null;
  var _2 = s2.getTextureQueue(g2), v2 = _2[_2[o2(441)] - 2], y2 = function() {
    return s2.recycleTexture(g2, p2) || s2.addTexture(g2, p2);
  };
  v2 || (v2 = _2[_2.length - 1]), v2 || (v2 = y2()), v2.width - v2[o2(235)] < p2 && (v2 = y2());
  for (var b2 = function(e2) {
    return e2 && e2.scaledLabelShown === m2;
  }, x2 = a2 && a2 === vp.dequeue, S2 = a2 && a2 === vp.highQuality, C2 = a2 && a2 === vp.downscale, w2, T2 = i2 + 1; T2 <= rp; T2++) {
    var E2 = u2[o2(1276)](t2, T2);
    if (E2) {
      w2 = E2;
      break;
    }
  }
  var D2 = w2 && w2.level === i2 + 1 ? w2 : null, O2 = function() {
    var e2 = o2;
    v2.context.drawImage(D2[e2(1345)].canvas, D2.x, 0, D2.width, D2[e2(1363)], v2[e2(235)], 0, p2, f2);
  };
  if (v2.context.setTransform(1, 0, 0, 1, 0, 0), v2.context.clearRect(v2.usedWidth, 0, p2, g2), b2(D2)) O2();
  else if (b2(w2)) if (S2) {
    for (var k2 = w2.level; k2 > i2; k2--) D2 = s2[o2(1142)](t2, n2, r2, k2, vp[o2(1041)]);
    O2();
  } else return s2.queueElement(t2, w2.level - 1), w2;
  else {
    var A2;
    if (!x2 && !S2 && !C2) for (var j2 = i2 - 1; j2 >= np; j2--) {
      var M2 = u2.get(t2, j2);
      if (M2) {
        A2 = M2;
        break;
      }
    }
    if (b2(A2)) return s2.queueElement(t2, i2), A2;
    v2.context[o2(434)](v2.usedWidth, 0), v2.context.scale(d2, d2), this.drawElement(v2.context, t2, n2, m2, false), v2.context.scale(1 / d2, 1 / d2), v2[o2(310)][o2(434)](-v2.usedWidth, 0);
  }
  return h2 = { x: v2.usedWidth, texture: v2, level: i2, scale: d2, width: p2, height: f2, scaledLabelShown: m2 }, v2.usedWidth += Math.ceil(p2 + ap), v2.eleCaches.push(h2), u2.set(t2, i2, h2), s2[o2(217)](v2), h2;
}, xp.invalidateElements = function(e2) {
  for (var t2 = 0; t2 < e2.length; t2++) this.invalidateElement(e2[t2]);
}, xp.invalidateElement = function(t2) {
  var n2 = e, r2 = this, i2 = r2.lookup, a2 = [];
  if (i2.isInvalid(t2)) {
    for (var o2 = np; o2 <= rp; o2++) {
      var s2 = i2.getForCachedKey(t2, o2);
      s2 && a2.push(s2);
    }
    if (i2[n2(848)](t2)) for (var c2 = 0; c2 < a2.length; c2++) {
      var l2 = a2[c2], u2 = l2.texture;
      u2.invalidatedWidth += l2[n2(901)], l2.invalidated = true, r2.checkTextureUtility(u2);
    }
    r2.removeFromQueue(t2);
  }
}, xp.checkTextureUtility = function(e2) {
  e2.invalidatedWidth >= lp * e2.width && this.retireTexture(e2);
}, xp[e(217)] = function(t2) {
  var n2 = e, r2 = this.getTextureQueue(t2[n2(1363)]);
  t2.usedWidth / t2[n2(901)] > up && t2.fullnessChecks >= dp ? qt(r2, t2) : t2.fullnessChecks++;
}, xp[e(655)] = function(t2) {
  var n2 = e, r2 = this, i2 = t2.height, a2 = r2.getTextureQueue(i2), o2 = this.lookup;
  qt(a2, t2), t2.retired = true;
  for (var s2 = t2.eleCaches, c2 = 0; c2 < s2[n2(441)]; c2++) {
    var l2 = s2[c2];
    o2.deleteCache(l2.key, l2.level);
  }
  Jt(s2), r2.getRetiredTextureQueue(i2).push(t2);
}, xp.addTexture = function(t2, n2) {
  var r2 = e, i2 = this, a2 = i2[r2(205)](t2), o2 = {};
  return a2.push(o2), o2.eleCaches = [], o2.height = t2, o2.width = Math[r2(701)](op, n2), o2[r2(235)] = 0, o2.invalidatedWidth = 0, o2[r2(869)] = 0, o2.canvas = i2.renderer.makeOffscreenCanvas(o2.width, o2.height), o2.context = o2.canvas.getContext(`2d`), o2;
}, xp.recycleTexture = function(t2, n2) {
  for (var r2 = e, i2 = this, a2 = i2.getTextureQueue(t2), o2 = i2.getRetiredTextureQueue(t2), s2 = 0; s2 < o2.length; s2++) {
    var c2 = o2[s2];
    if (c2[r2(901)] >= n2) return c2.retired = false, c2.usedWidth = 0, c2.invalidatedWidth = 0, c2.fullnessChecks = 0, Jt(c2[r2(1021)]), c2.context[r2(714)](1, 0, 0, 1, 0, 0), c2.context.clearRect(0, 0, c2.width, c2.height), qt(o2, c2), a2[r2(254)](c2), c2;
  }
}, xp.queueElement = function(t2, n2) {
  var r2 = e, i2 = this, a2 = i2.getElementQueue(), o2 = i2.getElementKeyToQueue(), s2 = this[r2(236)](t2), c2 = o2[s2];
  if (c2) c2[r2(303)] = Math.max(c2.level, n2), c2[r2(1015)][r2(1221)](t2), c2.reqs++, a2.updateItem(c2);
  else {
    var l2 = { eles: t2.spawn().merge(t2), level: n2, reqs: 1, key: s2 };
    a2.push(l2), o2[s2] = l2;
  }
}, xp.dequeue = function(t2) {
  for (var n2 = e, r2 = this, i2 = r2.getElementQueue(), a2 = r2.getElementKeyToQueue(), o2 = [], s2 = r2[n2(1136)], c2 = 0; c2 < _p && i2.size() > 0; c2++) {
    var l2 = i2.pop(), u2 = l2.key, d2 = l2.eles[0], f2 = s2[n2(208)](d2, l2[n2(303)]);
    if (a2[u2] = null, !f2) {
      o2.push(l2);
      var p2 = r2.getBoundingBox(d2);
      r2.getElement(d2, p2, t2, l2.level, vp.dequeue);
    }
  }
  return o2;
}, xp.removeFromQueue = function(t2) {
  var n2 = e, r2 = this, i2 = r2.getElementQueue(), a2 = r2.getElementKeyToQueue(), o2 = this.getKey(t2), s2 = a2[o2];
  s2 != null && (s2[n2(1015)].length === 1 ? (s2.reqs = Mt, i2.updateItem(s2), i2.pop(), a2[o2] = null) : s2.eles.unmerge(t2));
}, xp.onDequeue = function(e2) {
  this.onDequeues.push(e2);
}, xp.offDequeue = function(e2) {
  qt(this.onDequeues, e2);
}, xp.setupDequeueing = Qf.setupDequeueing({ deqRedrawThreshold: gp, deqCost: fp, deqAvgCost: pp, deqNoDrawCost: mp, deqFastCost: hp, deq: function(e2, t2, n2) {
  return e2.dequeue(t2, n2);
}, onDeqd: function(e2, t2) {
  for (var n2 = 0; n2 < e2.onDequeues.length; n2++) {
    var r2 = e2.onDequeues[n2];
    r2(t2);
  }
}, shouldRedraw: function(t2, n2, r2, i2) {
  for (var a2 = e, o2 = 0; o2 < n2.length; o2++) for (var s2 = n2[o2].eles, c2 = 0; c2 < s2.length; c2++) if (er(s2[c2][a2(277)](), i2)) return true;
  return false;
}, priority: function(t2) {
  return t2[e(589)].beforeRenderPriorities.eleTxrDeq;
} });
var Sp = 1, Cp = -4, wp = 2, Tp = 3.99, Ep = 50, Dp = 50, Op = 0.15, kp = 0.1, Ap = 0.9, jp = 0.9, Mp = 1, Np = 250, Pp = 4e3 * 4e3, Fp = 32767, Ip = true, Lp = function(e2) {
  var t2 = this, n2 = t2.renderer = e2, r2 = n2.cy;
  t2.layersByLevel = {}, t2.firstGet = true, t2.lastInvalidationTime = ft() - 2 * Np, t2.skipping = false, t2.eleTxrDeqs = r2.collection(), t2.scheduleElementRefinement = st(function() {
    t2[$(256)](t2.eleTxrDeqs), t2.eleTxrDeqs.unmerge(t2.eleTxrDeqs);
  }, Dp), n2.beforeRender(function(e3, n3) {
    n3 - t2.lastInvalidationTime <= Np ? t2.skipping = true : t2.skipping = false;
  }, n2.beforeRenderPriorities.lyrTxrSkip), t2.layersQueue = new pn(function(e3, t3) {
    return t3.reqs - e3.reqs;
  }), t2.setupDequeueing();
}, Rp = Lp.prototype, zp = 0, Bp = 2 ** 53 - 1;
Rp.makeLayer = function(e2, t2) {
  var n2 = 2 ** t2, r2 = Math.ceil(e2.w * n2), i2 = Math.ceil(e2.h * n2), a2 = this.renderer.makeOffscreenCanvas(r2, i2), o2 = { id: zp = ++zp % Bp, bb: e2, level: t2, width: r2, height: i2, canvas: a2, context: a2.getContext(`2d`), eles: [], elesQueue: [], reqs: 0 }, s2 = o2.context, c2 = -o2.bb.x1, l2 = -o2.bb.y1;
  return s2.scale(n2, n2), s2.translate(c2, l2), o2;
}, Rp.getLayers = function(t2, n2, r2) {
  var i2 = e, a2 = this, o2 = a2.renderer.cy.zoom(), s2 = a2.firstGet;
  if (a2.firstGet = false, r2 == null) {
    if (r2 = Math.ceil(Ln(o2 * n2)), r2 < Cp) r2 = Cp;
    else if (o2 >= Tp || r2 > wp) return null;
  }
  a2.validateLayersElesOrdering(r2, t2);
  var c2 = a2.layersByLevel, l2 = 2 ** r2, u2 = c2[r2] = c2[r2] || [], d2, f2 = a2.levelIsComplete(r2, t2), p2, m2 = function() {
    var e2 = function(e3) {
      if (a2.validateLayersElesOrdering(e3, t2), a2.levelIsComplete(e3, t2)) return p2 = c2[e3], true;
    }, n3 = function(t3) {
      if (!p2) for (var n4 = r2 + t3; Cp <= n4 && n4 <= wp && !e2(n4); n4 += t3) ;
    };
    n3(1), n3(-1);
    for (var i3 = u2.length - 1; i3 >= 0; i3--) {
      var o3 = u2[i3];
      o3.invalid && qt(u2, o3);
    }
  };
  if (!f2) m2();
  else return u2;
  var h2 = function() {
    var e2 = $;
    if (!d2) {
      d2 = Kn();
      for (var n3 = 0; n3 < t2[e2(441)]; n3++) Yn(d2, t2[n3].boundingBox());
    }
    return d2;
  }, g2 = function(e2) {
    var t3 = $;
    e2 || (e2 = {});
    var n3 = e2.after;
    h2();
    var i3 = Math[t3(1424)](d2.w * l2), o3 = Math.ceil(d2.h * l2);
    if (i3 > Fp || o3 > Fp || i3 * o3 > Pp) return null;
    var s3 = a2[t3(1011)](d2, r2);
    if (n3 != null) {
      var c3 = u2.indexOf(n3) + 1;
      u2.splice(c3, 0, s3);
    } else (e2.insert === void 0 || e2.insert) && u2.unshift(s3);
    return s3;
  };
  if (a2.skipping && !s2) return null;
  for (var _2 = null, v2 = t2.length / Sp, y2 = !s2, b2 = 0; b2 < t2.length; b2++) {
    var x2 = t2[b2], S2 = x2._private.rscratch, C2 = S2[i2(694)] = S2.imgLayerCaches || {}, w2 = C2[r2];
    if (w2) {
      _2 = w2;
      continue;
    }
    if ((!_2 || _2.eles.length >= v2 || !rr(_2.bb, x2.boundingBox())) && (_2 = g2({ insert: true, after: _2 }), !_2)) return null;
    p2 || y2 ? a2.queueLayer(_2, x2) : a2.drawEleInLayer(_2, x2, r2, n2), _2.eles.push(x2), C2[r2] = _2;
  }
  return p2 || (y2 ? null : u2);
}, Rp.getEleLevelForLayerLevel = function(e2, t2) {
  return e2;
}, Rp.drawEleInLayer = function(t2, n2, r2, i2) {
  var a2 = e, o2 = this, s2 = this.renderer, c2 = t2[a2(310)], l2 = n2.boundingBox();
  l2.w === 0 || l2.h === 0 || !n2.visible() || (r2 = o2[a2(1190)](r2, i2), s2.setImgSmoothing(c2, false), s2[a2(1318)](c2, n2, null, null, r2, Ip), s2.setImgSmoothing(c2, true));
}, Rp.levelIsComplete = function(e2, t2) {
  var n2 = this.layersByLevel[e2];
  if (!n2 || n2.length === 0) return false;
  for (var r2 = 0, i2 = 0; i2 < n2.length; i2++) {
    var a2 = n2[i2];
    if (a2.reqs > 0 || a2.invalid) return false;
    r2 += a2.eles.length;
  }
  return r2 === t2.length;
}, Rp.validateLayersElesOrdering = function(t2, n2) {
  var r2 = e, i2 = this[r2(1365)][t2];
  if (i2) for (var a2 = 0; a2 < i2.length; a2++) {
    for (var o2 = i2[a2], s2 = -1, c2 = 0; c2 < n2.length; c2++) if (o2.eles[0] === n2[c2]) {
      s2 = c2;
      break;
    }
    if (s2 < 0) {
      this.invalidateLayer(o2);
      continue;
    }
    for (var l2 = s2, c2 = 0; c2 < o2.eles.length; c2++) if (o2.eles[c2] !== n2[l2 + c2]) {
      this.invalidateLayer(o2);
      break;
    }
  }
}, Rp[e(331)] = function(t2, n2) {
  for (var r2 = e, i2 = this, a2 = F(t2[0]), o2 = 0; o2 < t2.length; o2++) for (var s2 = a2 ? null : t2[o2], c2 = a2 ? t2[o2] : t2[o2].ele, l2 = c2[r2(820)][r2(1151)], u2 = l2[r2(694)] = l2[r2(694)] || {}, d2 = Cp; d2 <= wp; d2++) {
    var f2 = u2[d2];
    f2 && (s2 && i2.getEleLevelForLayerLevel(f2[r2(303)]) !== s2.level || n2(f2, c2, s2));
  }
}, Rp.haveLayers = function() {
  for (var t2 = e, n2 = this, r2 = false, i2 = Cp; i2 <= wp; i2++) {
    var a2 = n2[t2(1365)][i2];
    if (a2 && a2.length > 0) {
      r2 = true;
      break;
    }
  }
  return r2;
}, Rp[e(1051)] = function(e2) {
  var t2 = this;
  e2.length !== 0 && (t2.lastInvalidationTime = ft(), !(e2.length === 0 || !t2.haveLayers()) && t2.updateElementsInLayers(e2, function(e3, n2, r2) {
    t2.invalidateLayer(e3);
  }));
}, Rp.invalidateLayer = function(t2) {
  var n2 = e;
  if (this.lastInvalidationTime = ft(), !t2.invalid) {
    var r2 = t2.level, i2 = t2[n2(1015)], a2 = this.layersByLevel[r2];
    qt(a2, t2), t2.elesQueue = [], t2.invalid = true, t2.replacement && (t2.replacement[n2(415)] = true);
    for (var o2 = 0; o2 < i2.length; o2++) {
      var s2 = i2[o2][n2(820)][n2(1151)].imgLayerCaches;
      s2 && (s2[r2] = null);
    }
  }
}, Rp.refineElementTextures = function(t2) {
  var n2 = e, r2 = this;
  r2[n2(331)](t2, function(e2, t3, i2) {
    var a2 = n2, o2 = e2.replacement;
    if (o2 || (o2 = e2.replacement = r2.makeLayer(e2.bb, e2.level), o2.replaces = e2, o2.eles = e2.eles), !o2.reqs) for (var s2 = 0; s2 < o2.eles[a2(441)]; s2++) r2[a2(784)](o2, o2.eles[s2]);
  });
}, Rp[e(1255)] = function(e2) {
  this.eleTxrDeqs.merge(e2), this.scheduleElementRefinement();
}, Rp.queueLayer = function(t2, n2) {
  var r2 = e, i2 = this.layersQueue, a2 = t2.elesQueue, o2 = a2.hasId = a2.hasId || {};
  if (!t2.replacement) {
    if (n2) {
      if (o2[n2.id()]) return;
      a2.push(n2), o2[n2.id()] = true;
    }
    t2[r2(971)] ? (t2.reqs++, i2.updateItem(t2)) : (t2.reqs = 1, i2.push(t2));
  }
}, Rp.dequeue = function(t2) {
  for (var n2 = e, r2 = this, i2 = r2[n2(650)], a2 = [], o2 = 0; o2 < Mp && i2[n2(1092)]() !== 0; ) {
    var s2 = i2[n2(209)]();
    if (s2.replacement) {
      i2[n2(229)]();
      continue;
    }
    if (s2.replaces && s2 !== s2.replaces.replacement) {
      i2[n2(229)]();
      continue;
    }
    if (s2.invalid) {
      i2.pop();
      continue;
    }
    var c2 = s2.elesQueue[n2(916)]();
    c2 && (r2.drawEleInLayer(s2, c2, s2.level, t2), o2++), a2.length === 0 && a2.push(true), s2[n2(443)][n2(441)] === 0 && (i2.pop(), s2[n2(971)] = 0, s2.replaces && r2.applyLayerReplacement(s2), r2.requestRedraw());
  }
  return a2;
}, Rp.applyLayerReplacement = function(t2) {
  var n2 = e, r2 = this, i2 = r2.layersByLevel[t2[n2(303)]], a2 = t2.replaces, o2 = i2[n2(294)](a2);
  if (!(o2 < 0 || a2.invalid)) {
    i2[o2] = t2;
    for (var s2 = 0; s2 < t2.eles.length; s2++) {
      var c2 = t2.eles[s2]._private, l2 = c2.imgLayerCaches = c2[n2(694)] || {};
      l2 && (l2[t2.level] = t2);
    }
    r2.requestRedraw();
  }
}, Rp[e(726)] = st(function() {
  var t2 = e, n2 = this.renderer;
  n2.redrawHint(`eles`, true), n2.redrawHint(t2(663), true), n2.redraw();
}, 100), Rp.setupDequeueing = Qf.setupDequeueing({ deqRedrawThreshold: Ep, deqCost: Op, deqAvgCost: kp, deqNoDrawCost: Ap, deqFastCost: jp, deq: function(t2, n2) {
  return t2[e(690)](n2);
}, onDeqd: It, shouldRedraw: Nt, priority: function(t2) {
  var n2 = e;
  return t2.renderer[n2(614)][n2(617)];
} });
var Vp = {}, Hp;
function Up(e2, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var r2 = t2[n2];
    e2.lineTo(r2.x, r2.y);
  }
}
function Wp(t2, n2, r2) {
  for (var i2 = e, a2, o2 = 0; o2 < n2.length; o2++) {
    var s2 = n2[o2];
    o2 === 0 && (a2 = s2), t2[i2(382)](s2.x, s2.y);
  }
  t2.quadraticCurveTo(r2.x, r2.y, a2.x, a2.y);
}
function Gp(t2, n2, r2) {
  var i2 = e;
  t2.beginPath && t2.beginPath();
  for (var a2 = n2, o2 = 0; o2 < a2[i2(441)]; o2++) {
    var s2 = a2[o2];
    t2.lineTo(s2.x, s2.y);
  }
  var c2 = r2, l2 = r2[0];
  t2.moveTo(l2.x, l2.y);
  for (var o2 = 1; o2 < c2.length; o2++) {
    var s2 = c2[o2];
    t2.lineTo(s2.x, s2.y);
  }
  t2.closePath && t2.closePath();
}
function Kp(t2, n2, r2, i2, a2) {
  var o2 = e;
  t2.beginPath && t2.beginPath(), t2.arc(r2, i2, a2, 0, Math.PI * 2, false);
  var s2 = n2, c2 = s2[0];
  t2.moveTo(c2.x, c2.y);
  for (var l2 = 0; l2 < s2[o2(441)]; l2++) {
    var u2 = s2[l2];
    t2[o2(382)](u2.x, u2.y);
  }
  t2.closePath && t2.closePath();
}
function qp(e2, t2, n2, r2) {
  e2.arc(t2, n2, r2, 0, Math.PI * 2, false);
}
Vp.arrowShapeImpl = function(e2) {
  return (Hp || (Hp = { polygon: Up, "triangle-backcurve": Wp, "triangle-tee": Gp, "circle-triangle": Kp, "triangle-cross": Gp, circle: qp }))[e2];
};
var Jp = {};
Jp[e(695)] = function(e2, t2, n2, r2, i2, a2) {
  var o2 = this;
  t2.isNode() ? o2.drawNode(e2, t2, n2, r2, i2, a2) : o2.drawEdge(e2, t2, n2, r2, i2, a2);
}, Jp[e(1179)] = function(t2, n2) {
  var r2 = e, i2 = this;
  n2.isNode() ? i2[r2(390)](t2, n2) : i2.drawEdgeOverlay(t2, n2);
}, Jp.drawElementUnderlay = function(t2, n2) {
  var r2 = e, i2 = this;
  n2.isNode() ? i2[r2(479)](t2, n2) : i2.drawEdgeUnderlay(t2, n2);
}, Jp.drawCachedElementPortion = function(t2, n2, r2, i2, a2, o2, s2, c2) {
  var l2 = e, u2 = this, d2 = r2[l2(601)](n2);
  if (!(d2.w === 0 || d2.h === 0)) {
    var f2 = r2.getElement(n2, d2, i2, a2, o2);
    if (f2 != null) {
      var p2 = c2(u2, n2);
      if (p2 === 0) return;
      var m2 = s2(u2, n2), h2 = d2.x1, g2 = d2.y1, _2 = d2.w, v2 = d2.h, y2, b2, x2, S2, C2;
      if (m2 !== 0) {
        var w2 = r2.getRotationPoint(n2);
        x2 = w2.x, S2 = w2.y, t2.translate(x2, S2), t2.rotate(m2), C2 = u2.getImgSmoothing(t2), C2 || u2.setImgSmoothing(t2, true);
        var T2 = r2.getRotationOffset(n2);
        y2 = T2.x, b2 = T2.y;
      } else y2 = h2, b2 = g2;
      var E2;
      p2 !== 1 && (E2 = t2[l2(221)], t2.globalAlpha = E2 * p2), t2.drawImage(f2[l2(1345)].canvas, f2.x, 0, f2[l2(901)], f2.height, y2, b2, _2, v2), p2 !== 1 && (t2.globalAlpha = E2), m2 !== 0 && (t2.rotate(-m2), t2.translate(-x2, -S2), C2 || u2.setImgSmoothing(t2, false));
    } else r2.drawElement(t2, n2);
  }
};
var Yp = function() {
  return 0;
}, Xp = function(e2, t2) {
  return e2.getTextAngle(t2, null);
}, Zp = function(t2, n2) {
  return t2[e(836)](n2, `source`);
}, Qp = function(t2, n2) {
  var r2 = e;
  return t2.getTextAngle(n2, r2(1192));
}, $p = function(e2, t2) {
  return t2.effectiveOpacity();
}, em = function(t2, n2) {
  var r2 = e;
  return n2.pstyle(`text-opacity`)[r2(676)] * n2.effectiveOpacity();
};
Jp.drawCachedElement = function(t2, n2, r2, i2, a2, o2) {
  var s2 = e, c2 = this, l2 = c2.data, u2 = l2.eleTxrCache, d2 = l2.lblTxrCache, f2 = l2[s2(963)], p2 = l2.tlbTxrCache, m2 = n2.boundingBox(), h2 = o2 === true ? u2.reasons.highQuality : null;
  if (!(m2.w === 0 || m2.h === 0 || !n2.visible()) && (!i2 || er(m2, i2))) {
    var g2 = n2.isEdge(), _2 = n2.element()[s2(820)].rscratch.badLine;
    c2.drawElementUnderlay(t2, n2), c2.drawCachedElementPortion(t2, n2, u2, r2, a2, h2, Yp, $p), (!g2 || !_2) && c2.drawCachedElementPortion(t2, n2, d2, r2, a2, h2, Xp, em), g2 && !_2 && (c2.drawCachedElementPortion(t2, n2, f2, r2, a2, h2, Zp, em), c2.drawCachedElementPortion(t2, n2, p2, r2, a2, h2, Qp, em)), c2.drawElementOverlay(t2, n2);
  }
}, Jp.drawElements = function(e2, t2) {
  for (var n2 = this, r2 = 0; r2 < t2.length; r2++) {
    var i2 = t2[r2];
    n2.drawElement(e2, i2);
  }
}, Jp.drawCachedElements = function(t2, n2, r2, i2) {
  for (var a2 = e, o2 = this, s2 = 0; s2 < n2.length; s2++) {
    var c2 = n2[s2];
    o2[a2(1318)](t2, c2, r2, i2);
  }
}, Jp.drawCachedNodes = function(t2, n2, r2, i2) {
  for (var a2 = e, o2 = this, s2 = 0; s2 < n2.length; s2++) {
    var c2 = n2[s2];
    c2[a2(704)]() && o2.drawCachedElement(t2, c2, r2, i2);
  }
}, Jp.drawLayeredElements = function(t2, n2, r2, i2) {
  var a2 = e, o2 = this, s2 = o2.data.lyrTxrCache[a2(795)](n2, r2);
  if (s2) for (var c2 = 0; c2 < s2.length; c2++) {
    var l2 = s2[c2], u2 = l2.bb;
    u2.w === 0 || u2.h === 0 || t2.drawImage(l2.canvas, u2.x1, u2.y1, u2.w, u2.h);
  }
  else o2[a2(1088)](t2, n2, r2, i2);
};
var tm = {};
tm[e(484)] = function(t2, n2, r2) {
  var i2 = e, a2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, o2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, s2 = arguments[i2(441)] > 5 && arguments[5] !== void 0 ? arguments[5] : true, c2 = this, l2 = n2._private.rscratch;
  if (!(s2 && !n2.visible()) && !(l2[i2(1033)] || l2.allpts == null || isNaN(l2[i2(451)][0]))) {
    var u2;
    r2 && (u2 = r2, t2.translate(-u2.x1, -u2.y1));
    var d2 = s2 ? n2.pstyle(`opacity`)[i2(1310)] : 1, f2 = s2 ? n2.pstyle(`line-opacity`).value : 1, p2 = n2.pstyle(`curve-style`).value, m2 = n2[i2(1373)](`line-style`)[i2(1310)], h2 = n2.pstyle(`width`).pfValue, g2 = n2.pstyle(`line-cap`).value, _2 = n2.pstyle(`line-outline-width`).value, v2 = n2.pstyle(i2(864)).value, y2 = d2 * f2, b2 = d2 * f2, x2 = function() {
      var e2 = i2, r3 = arguments[e2(441)] > 0 && arguments[0] !== void 0 ? arguments[0] : y2;
      p2 === e2(466) ? (c2.eleStrokeStyle(t2, n2, r3), c2.drawEdgeTrianglePath(n2, t2, l2.allpts)) : (t2.lineWidth = h2, t2.lineCap = g2, c2[e2(1324)](t2, n2, r3), c2.drawEdgePath(n2, t2, l2.allpts, m2), t2.lineCap = e2(412));
    }, S2 = function() {
      var e2 = i2, r3 = arguments[e2(441)] > 0 && arguments[0] !== void 0 ? arguments[0] : y2;
      if (t2.lineWidth = h2 + _2, t2.lineCap = g2, _2 > 0) c2.colorStrokeStyle(t2, v2[0], v2[1], v2[2], r3);
      else {
        t2.lineCap = `butt`;
        return;
      }
      p2 === `straight-triangle` ? c2[e2(456)](n2, t2, l2.allpts) : (c2.drawEdgePath(n2, t2, l2.allpts, m2), t2.lineCap = e2(412));
    }, C2 = function() {
      o2 && c2.drawEdgeOverlay(t2, n2);
    }, w2 = function() {
      o2 && c2.drawEdgeUnderlay(t2, n2);
    }, T2 = function() {
      var e2 = i2, r3 = arguments[e2(441)] > 0 && arguments[0] !== void 0 ? arguments[0] : b2;
      c2.drawArrowheads(t2, n2, r3);
    }, E2 = function() {
      c2.drawElementText(t2, n2, null, a2);
    };
    if (t2[i2(1350)] = `round`, n2.pstyle(`ghost`).value === `yes`) {
      var D2 = n2.pstyle(`ghost-offset-x`).pfValue, O2 = n2.pstyle(`ghost-offset-y`).pfValue, k2 = y2 * n2.pstyle(`ghost-opacity`).value;
      t2.translate(D2, O2), x2(k2), T2(k2), t2.translate(-D2, -O2);
    } else S2();
    w2(), x2(), T2(), C2(), E2(), r2 && t2.translate(u2.x1, u2.y1);
  }
};
var nm = function(t2) {
  var n2 = e;
  if (![`overlay`, `underlay`].includes(t2)) throw Error(n2(269));
  return function(e2, r2) {
    var i2 = n2;
    if (r2.visible()) {
      var a2 = r2.pstyle(t2 + `-opacity`)[i2(1310)];
      if (a2 !== 0) {
        var o2 = this, s2 = o2.usePaths(), c2 = r2[i2(820)].rscratch, l2 = 2 * r2.pstyle(t2 + `-padding`).pfValue, u2 = r2.pstyle(t2 + `-color`).value;
        e2.lineWidth = l2, c2.edgeType === `self` && !s2 ? e2.lineCap = `butt` : e2.lineCap = `round`, o2.colorStrokeStyle(e2, u2[0], u2[1], u2[2], a2), o2.drawEdgePath(r2, e2, c2.allpts, `solid`);
      }
    }
  };
};
tm.drawEdgeOverlay = nm(`overlay`), tm.drawEdgeUnderlay = nm(`underlay`), tm[e(1273)] = function(t2, n2, r2, i2) {
  var a2 = e, o2 = t2._private[a2(1151)], c2 = n2, l2, u2 = false, d2 = this.usePaths(), f2 = t2.pstyle(`line-dash-pattern`).pfValue, p2 = t2.pstyle(a2(927)).pfValue;
  if (d2) {
    var m2 = r2.join(`$`);
    o2.pathCacheKey && o2.pathCacheKey === m2 ? (l2 = n2 = o2.pathCache, u2 = true) : (l2 = n2 = new Path2D(), o2.pathCacheKey = m2, o2.pathCache = l2);
  }
  if (c2.setLineDash) switch (i2) {
    case `dotted`:
      c2.setLineDash([1, 1]);
      break;
    case `dashed`:
      c2.setLineDash(f2), c2.lineDashOffset = p2;
      break;
    case `solid`:
      c2.setLineDash([]);
      break;
  }
  if (!u2 && !o2.badLine) switch (n2.beginPath && n2.beginPath(), n2.moveTo(r2[0], r2[1]), o2.edgeType) {
    case a2(1167):
    case `self`:
    case `compound`:
    case `multibezier`:
      for (var h2 = 2; h2 + 3 < r2.length; h2 += 4) n2[a2(249)](r2[h2], r2[h2 + 1], r2[h2 + 2], r2[h2 + 3]);
      break;
    case `straight`:
    case `haystack`:
      for (var g2 = 2; g2 + 1 < r2.length; g2 += 2) n2.lineTo(r2[g2], r2[g2 + 1]);
      break;
    case `segments`:
      if (o2.isRound) {
        var _2 = s(o2[a2(417)]), v2;
        try {
          for (_2.s(); !(v2 = _2.n()).done; ) {
            var y2 = v2.value;
            Sf(n2, y2);
          }
        } catch (e2) {
          _2.e(e2);
        } finally {
          _2.f();
        }
        n2.lineTo(r2[r2.length - 2], r2[r2.length - 1]);
      } else for (var b2 = 2; b2 + 1 < r2[a2(441)]; b2 += 2) n2.lineTo(r2[b2], r2[b2 + 1]);
      break;
  }
  n2 = c2, d2 ? n2.stroke(l2) : n2[a2(555)](), n2.setLineDash && n2.setLineDash([]);
}, tm.drawEdgeTrianglePath = function(t2, n2, r2) {
  var i2 = e;
  n2[i2(903)] = n2.strokeStyle;
  for (var a2 = t2.pstyle(`width`).pfValue, o2 = 0; o2 + 1 < r2.length; o2 += 2) {
    var s2 = [r2[o2 + 2] - r2[o2], r2[o2 + 3] - r2[o2 + 1]], c2 = Math.sqrt(s2[0] * s2[0] + s2[1] * s2[1]), l2 = [s2[1] / c2, -s2[0] / c2], u2 = [l2[0] * a2 / 2, l2[1] * a2 / 2];
    n2[i2(887)](), n2.moveTo(r2[o2] - u2[0], r2[o2 + 1] - u2[1]), n2.lineTo(r2[o2] + u2[0], r2[o2 + 1] + u2[1]), n2.lineTo(r2[o2 + 2], r2[o2 + 3]), n2[i2(1274)](), n2.fill();
  }
}, tm.drawArrowheads = function(t2, n2, r2) {
  var i2 = e, a2 = n2._private.rscratch, o2 = a2.edgeType === `haystack`;
  o2 || this.drawArrowhead(t2, n2, `source`, a2.arrowStartX, a2.arrowStartY, a2.srcArrowAngle, r2), this.drawArrowhead(t2, n2, `mid-target`, a2.midX, a2.midY, a2.midtgtArrowAngle, r2), this.drawArrowhead(t2, n2, i2(680), a2.midX, a2.midY, a2.midsrcArrowAngle, r2), o2 || this.drawArrowhead(t2, n2, `target`, a2.arrowEndX, a2.arrowEndY, a2[i2(1262)], r2);
}, tm.drawArrowhead = function(t2, n2, r2, i2, a2, o2, s2) {
  var c2 = e;
  if (!(isNaN(i2) || i2 == null || isNaN(a2) || a2 == null || isNaN(o2) || o2 == null)) {
    var l2 = this, u2 = n2.pstyle(r2 + `-arrow-shape`)[c2(1310)];
    if (u2 !== `none`) {
      var d2 = n2.pstyle(r2 + `-arrow-fill`).value === `hollow` ? `both` : c2(866), f2 = n2[c2(1373)](r2 + `-arrow-fill`).value, p2 = n2.pstyle(c2(901)).pfValue, m2 = n2.pstyle(r2 + `-arrow-width`), h2 = m2.value === `match-line` ? p2 : m2.pfValue;
      m2[c2(1389)] === `%` && (h2 *= p2);
      var g2 = n2.pstyle(`opacity`).value;
      s2 === void 0 && (s2 = g2);
      var _2 = t2.globalCompositeOperation;
      (s2 !== 1 || f2 === c2(1325)) && (t2.globalCompositeOperation = `destination-out`, l2[c2(1068)](t2, 255, 255, 255, 1), l2.colorStrokeStyle(t2, 255, 255, 255, 1), l2.drawArrowShape(n2, t2, d2, p2, u2, h2, i2, a2, o2), t2.globalCompositeOperation = _2);
      var v2 = n2.pstyle(r2 + `-arrow-color`).value;
      l2.colorFillStyle(t2, v2[0], v2[1], v2[2], s2), l2[c2(1391)](t2, v2[0], v2[1], v2[2], s2), l2.drawArrowShape(n2, t2, f2, p2, u2, h2, i2, a2, o2);
    }
  }
}, tm[e(1338)] = function(t2, n2, r2, i2, a2, o2, s2, c2, l2) {
  var u2 = e, d2 = this, f2 = this.usePaths() && a2 !== `triangle-cross`, p2 = false, m2, h2 = n2, g2 = { x: s2, y: c2 }, _2 = t2.pstyle(`arrow-scale`).value, v2 = this.getArrowWidth(i2, _2), y2 = d2[u2(1046)][a2];
  if (f2) {
    var b2 = d2.arrowPathCache = d2.arrowPathCache || [], x2 = Ct(a2), S2 = b2[x2];
    S2 == null ? (m2 = n2 = new Path2D(), b2[x2] = m2) : (m2 = n2 = S2, p2 = true);
  }
  p2 || (n2.beginPath && n2.beginPath(), f2 ? y2.draw(n2, 1, 0, { x: 0, y: 0 }, 1) : y2[u2(975)](n2, v2, l2, g2, i2), n2.closePath && n2.closePath()), n2 = h2, f2 && (n2.translate(s2, c2), n2.rotate(l2), n2.scale(v2, v2)), (r2 === u2(866) || r2 === `both`) && (f2 ? n2.fill(m2) : n2.fill()), (r2 === `hollow` || r2 === `both`) && (n2.lineWidth = o2 / (f2 ? v2 : 1), n2.lineJoin = `miter`, f2 ? n2.stroke(m2) : n2.stroke()), f2 && (n2.scale(1 / v2, 1 / v2), n2.rotate(-l2), n2.translate(-s2, -c2));
};
var rm = {};
rm.safeDrawImage = function(e2, t2, n2, r2, i2, a2, o2, s2, c2, l2) {
  if (!(i2 <= 0 || a2 <= 0 || c2 <= 0 || l2 <= 0)) try {
    e2.drawImage(t2, n2, r2, i2, a2, o2, s2, c2, l2);
  } catch (e3) {
    zt(e3);
  }
}, rm[e(1302)] = function(t2, n2, r2, i2, a2) {
  var o2 = e, s2 = this, c2 = r2.position(), l2 = c2.x, u2 = c2.y, d2 = r2.cy().style(), f2 = d2.getIndexedStyle.bind(d2), p2 = f2(r2, `background-fit`, `value`, i2), m2 = f2(r2, `background-repeat`, `value`, i2), h2 = r2.width(), g2 = r2[o2(1363)](), _2 = r2.padding() * 2, v2 = h2 + (f2(r2, `background-width-relative-to`, `value`, i2) === `inner` ? 0 : _2), y2 = g2 + (f2(r2, `background-height-relative-to`, `value`, i2) === `inner` ? 0 : _2), b2 = r2._private.rscratch, x2 = f2(r2, o2(1409), `value`, i2) === `node`, S2 = f2(r2, `background-image-opacity`, `value`, i2) * a2, C2 = f2(r2, `background-image-smoothing`, `value`, i2), w2 = r2.pstyle(`corner-radius`)[o2(1310)];
  w2 !== `auto` && (w2 = r2.pstyle(`corner-radius`).pfValue);
  var T2 = n2.width || n2.cachedW, E2 = n2.height || n2[o2(842)];
  (T2 == null || E2 == null) && (document.body.appendChild(n2), T2 = n2[o2(1231)] = n2.width || n2.offsetWidth, E2 = n2.cachedH = n2.height || n2.offsetHeight, document.body.removeChild(n2));
  var D2 = T2, O2 = E2;
  if (f2(r2, `background-width`, `value`, i2) !== `auto` && (D2 = f2(r2, `background-width`, `units`, i2) === `%` ? f2(r2, `background-width`, `pfValue`, i2) * v2 : f2(r2, `background-width`, o2(676), i2)), f2(r2, o2(1135), `value`, i2) !== `auto` && (O2 = f2(r2, o2(1135), `units`, i2) === `%` ? f2(r2, `background-height`, `pfValue`, i2) * y2 : f2(r2, `background-height`, `pfValue`, i2)), !(D2 === 0 || O2 === 0)) {
    if (p2 === o2(1152)) {
      var k2 = Math.min(v2 / D2, y2 / O2);
      D2 *= k2, O2 *= k2;
    } else if (p2 === `cover`) {
      var k2 = Math.max(v2 / D2, y2 / O2);
      D2 *= k2, O2 *= k2;
    }
    var A2 = l2 - v2 / 2, j2 = f2(r2, `background-position-x`, `units`, i2), M2 = f2(r2, `background-position-x`, `pfValue`, i2);
    j2 === `%` ? A2 += (v2 - D2) * M2 : A2 += M2;
    var N2 = f2(r2, o2(381), `units`, i2), P2 = f2(r2, o2(381), `pfValue`, i2);
    N2 === `%` ? A2 += (v2 - D2) * P2 : A2 += P2;
    var F2 = u2 - y2 / 2, I2 = f2(r2, `background-position-y`, `units`, i2), L2 = f2(r2, o2(1406), `pfValue`, i2);
    I2 === `%` ? F2 += (y2 - O2) * L2 : F2 += L2;
    var R2 = f2(r2, `background-offset-y`, `units`, i2), z2 = f2(r2, `background-offset-y`, `pfValue`, i2);
    R2 === `%` ? F2 += (y2 - O2) * z2 : F2 += z2, b2.pathCache && (A2 -= l2, F2 -= u2, l2 = 0, u2 = 0);
    var B2 = t2[o2(221)];
    t2.globalAlpha = S2;
    var V2 = s2.getImgSmoothing(t2), H2 = false;
    C2 === `no` && V2 ? (s2.setImgSmoothing(t2, false), H2 = true) : C2 === `yes` && !V2 && (s2.setImgSmoothing(t2, true), H2 = true), m2 === `no-repeat` ? (x2 && (t2.save(), b2[o2(1232)] ? t2[o2(556)](b2.pathCache) : (s2.nodeShapes[s2.getNodeShape(r2)][o2(975)](t2, l2, u2, v2, y2, w2, b2), t2.clip())), s2[o2(1369)](t2, n2, 0, 0, T2, E2, A2, F2, D2, O2), x2 && t2.restore()) : (t2.fillStyle = t2.createPattern(n2, m2), s2.nodeShapes[s2.getNodeShape(r2)].draw(t2, l2, u2, v2, y2, w2, b2), t2[o2(434)](A2, F2), t2.fill(), t2.translate(-A2, -F2)), t2.globalAlpha = B2, H2 && s2.setImgSmoothing(t2, V2);
  }
};
var im = {};
im.eleTextBiggerThanMin = function(t2, n2) {
  var r2 = e;
  if (!n2) {
    var i2 = t2.cy().zoom(), a2 = this.getPixelRatio(), o2 = Math.ceil(Ln(i2 * a2));
    n2 = Math[r2(1252)](2, o2);
  }
  return !(t2.pstyle(`font-size`).pfValue * n2 < t2.pstyle(`min-zoomed-font-size`)[r2(676)]);
}, im.drawElementText = function(t2, n2, r2, i2, a2) {
  var o2 = e, s2 = arguments[o2(441)] > 5 && arguments[5] !== void 0 ? arguments[5] : true, c2 = this;
  if (i2 == null) {
    if (s2 && !c2.eleTextBiggerThanMin(n2)) return;
  } else if (i2 === false) return;
  if (n2.isNode()) {
    var l2 = n2.pstyle(`label`);
    if (!l2 || !l2.value) return;
    t2.textAlign = c2.getLabelJustification(n2), t2.textBaseline = o2(968);
  } else {
    var u2 = n2.element()._private.rscratch.badLine, d2 = n2.pstyle(o2(1220)), f2 = n2.pstyle(`source-label`), p2 = n2.pstyle(o2(257));
    if (u2 || (!d2 || !d2.value) && (!f2 || !f2.value) && (!p2 || !p2.value)) return;
    t2.textAlign = `center`, t2.textBaseline = `bottom`;
  }
  var m2 = !r2, h2;
  r2 && (h2 = r2, t2.translate(-h2.x1, -h2.y1)), a2 == null ? (c2[o2(1067)](t2, n2, null, m2, s2), n2.isEdge() && (c2.drawText(t2, n2, `source`, m2, s2), c2[o2(1067)](t2, n2, o2(1192), m2, s2))) : c2[o2(1067)](t2, n2, a2, m2, s2), r2 && t2.translate(h2.x1, h2.y1);
}, im.getFontCache = function(t2) {
  var n2 = e, r2;
  this.fontCaches = this[n2(755)] || [];
  for (var i2 = 0; i2 < this.fontCaches.length; i2++) if (r2 = this.fontCaches[i2], r2.context === t2) return r2;
  return r2 = { context: t2 }, this[n2(755)].push(r2), r2;
}, im[e(1105)] = function(t2, n2) {
  var r2 = e, i2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, a2 = n2.pstyle(`font-style`)[r2(1381)], o2 = n2.pstyle(r2(1264)).pfValue + `px`, s2 = n2.pstyle(r2(551))[r2(1381)], c2 = n2.pstyle(`font-weight`).strValue, l2 = i2 ? n2[r2(1032)]() * n2.pstyle(r2(495)).value : 1, u2 = n2.pstyle(r2(1246)).value * l2, d2 = n2.pstyle(r2(1097)).value, f2 = n2[r2(1373)](`text-outline-color`).value;
  t2.font = a2 + ` ` + c2 + ` ` + o2 + ` ` + s2, t2.lineJoin = `round`, this.colorFillStyle(t2, d2[0], d2[1], d2[2], l2), this.colorStrokeStyle(t2, f2[0], f2[1], f2[2], u2);
};
function am(t2, n2, r2, i2, a2) {
  var o2 = Math[e(1120)](i2, a2) / 2, s2 = n2 + i2 / 2, c2 = r2 + a2 / 2;
  t2.beginPath(), t2.arc(s2, c2, o2, 0, Math.PI * 2), t2.closePath();
}
function om(t2, n2, r2, i2, a2) {
  var o2 = e, s2 = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 5, c2 = Math.min(s2, i2 / 2, a2 / 2);
  t2.beginPath(), t2[o2(536)](n2 + c2, r2), t2.lineTo(n2 + i2 - c2, r2), t2[o2(249)](n2 + i2, r2, n2 + i2, r2 + c2), t2.lineTo(n2 + i2, r2 + a2 - c2), t2.quadraticCurveTo(n2 + i2, r2 + a2, n2 + i2 - c2, r2 + a2), t2.lineTo(n2 + c2, r2 + a2), t2[o2(249)](n2, r2 + a2, n2, r2 + a2 - c2), t2.lineTo(n2, r2 + c2), t2[o2(249)](n2, r2, n2 + c2, r2), t2.closePath();
}
im[e(836)] = function(t2, n2) {
  var r2 = e, i2, a2 = t2._private.rscratch, o2 = n2 ? n2 + `-` : ``, s2 = t2.pstyle(o2 + `text-rotation`);
  if (s2.strValue === `autorotate`) {
    var c2 = Xt(a2, r2(835), n2);
    i2 = t2.isEdge() ? c2 : 0;
  } else i2 = s2.strValue === `none` ? 0 : s2[r2(676)];
  return i2;
}, im.drawText = function(t2, n2, r2) {
  var i2 = e, a2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, o2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, s2 = n2._private.rscratch, c2 = o2 ? n2.effectiveOpacity() : 1;
  if (!(o2 && (c2 === 0 || n2.pstyle(`text-opacity`).value === 0))) {
    r2 === i2(436) && (r2 = null);
    var l2 = Xt(s2, `labelX`, r2), u2 = Xt(s2, i2(1023), r2), d2, f2, p2 = this.getLabelText(n2, r2);
    if (p2 != null && p2 !== `` && !isNaN(l2) && !isNaN(u2)) {
      this.setupTextStyle(t2, n2, o2);
      var m2 = r2 ? r2 + `-` : ``, h2 = Xt(s2, i2(849), r2), g2 = Xt(s2, `labelHeight`, r2), _2 = n2.pstyle(m2 + `text-margin-x`).pfValue, v2 = n2.pstyle(m2 + `text-margin-y`).pfValue, y2 = n2.isEdge(), b2 = n2.pstyle(`text-halign`).value, x2 = n2.pstyle(`text-valign`).value;
      y2 && (b2 = `center`, x2 = `center`), l2 += _2, u2 += v2;
      var S2 = a2 ? this.getTextAngle(n2, r2) : 0;
      switch (S2 !== 0 && (d2 = l2, f2 = u2, t2.translate(d2, f2), t2.rotate(S2), l2 = 0, u2 = 0), x2) {
        case `top`:
          break;
        case `center`:
          u2 += g2 / 2;
          break;
        case `bottom`:
          u2 += g2;
          break;
      }
      var C2 = n2.pstyle(`text-background-opacity`).value, w2 = n2.pstyle(`text-border-opacity`)[i2(1310)], T2 = n2.pstyle(`text-border-width`).pfValue, E2 = n2.pstyle(`text-background-padding`).pfValue, D2 = n2[i2(1373)](i2(625)).strValue, O2 = D2 === `round-rectangle` || D2 === `roundrectangle`, k2 = D2 === `circle`, A2 = 2;
      if (C2 > 0 || T2 > 0 && w2 > 0) {
        var j2 = t2.fillStyle, M2 = t2[i2(647)], N2 = t2.lineWidth, P2 = n2[i2(1373)](`text-background-color`).value, F2 = n2[i2(1373)](`text-border-color`).value, I2 = n2.pstyle(`text-border-style`).value, L2 = C2 > 0, R2 = T2 > 0 && w2 > 0, z2 = l2 - E2;
        switch (b2) {
          case `left`:
            z2 -= h2;
            break;
          case `center`:
            z2 -= h2 / 2;
            break;
        }
        var B2 = u2 - g2 - E2, V2 = h2 + 2 * E2, H2 = g2 + 2 * E2;
        if (L2 && (t2.fillStyle = `rgba(` + P2[0] + `,` + P2[1] + `,` + P2[2] + `,` + C2 * c2 + `)`), R2 && (t2[i2(647)] = `rgba(` + F2[0] + `,` + F2[1] + `,` + F2[2] + `,` + w2 * c2 + `)`, t2.lineWidth = T2, t2.setLineDash)) switch (I2) {
          case `dotted`:
            t2.setLineDash([1, 1]);
            break;
          case `dashed`:
            t2.setLineDash([4, 2]);
            break;
          case `double`:
            t2.lineWidth = T2 / 4, t2[i2(637)]([]);
            break;
          default:
            t2[i2(637)]([]);
            break;
        }
        if (O2 ? (t2.beginPath(), om(t2, z2, B2, V2, H2, A2)) : k2 ? (t2.beginPath(), am(t2, z2, B2, V2, H2)) : (t2.beginPath(), t2[i2(286)](z2, B2, V2, H2)), L2 && t2.fill(), R2 && t2.stroke(), R2 && I2 === `double`) {
          var U2 = T2 / 2;
          t2[i2(887)](), O2 ? om(t2, z2 + U2, B2 + U2, V2 - 2 * U2, H2 - 2 * U2, A2) : t2[i2(286)](z2 + U2, B2 + U2, V2 - 2 * U2, H2 - 2 * U2), t2.stroke();
        }
        t2.fillStyle = j2, t2.strokeStyle = M2, t2.lineWidth = N2, t2.setLineDash && t2.setLineDash([]);
      }
      var W2 = 2 * n2.pstyle(i2(1131)).pfValue;
      if (W2 > 0 && (t2.lineWidth = W2), n2.pstyle(`text-wrap`).value === `wrap`) {
        var G2 = Xt(s2, i2(271), r2), K2 = Xt(s2, `labelLineHeight`, r2), q2 = h2 / 2, J2 = this.getLabelJustification(n2);
        switch (J2 === `auto` || (b2 === `left` ? J2 === `left` ? l2 += -h2 : J2 === `center` && (l2 += -q2) : b2 === `center` ? J2 === `left` ? l2 += -q2 : J2 === `right` && (l2 += q2) : b2 === `right` && (J2 === `center` ? l2 += q2 : J2 === `right` && (l2 += h2))), x2) {
          case i2(951):
            u2 -= (G2.length - 1) * K2;
            break;
          case `center`:
          case `bottom`:
            u2 -= (G2.length - 1) * K2;
            break;
        }
        for (var Y2 = 0; Y2 < G2.length; Y2++) W2 > 0 && t2.strokeText(G2[Y2], l2, u2), t2.fillText(G2[Y2], l2, u2), u2 += K2;
      } else W2 > 0 && t2.strokeText(p2, l2, u2), t2.fillText(p2, l2, u2);
      S2 !== 0 && (t2.rotate(-S2), t2.translate(-d2, -f2));
    }
  }
};
var sm = {};
sm[e(498)] = function(t2, n2, r2) {
  var i2 = e, a2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, o2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, s2 = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true, c2 = this, l2, u2, d2 = n2._private, f2 = d2[i2(1151)], p2 = n2.position();
  if (!(!j(p2.x) || !j(p2.y)) && !(s2 && !n2.visible())) {
    var m2 = s2 ? n2.effectiveOpacity() : 1, h2 = c2.usePaths(), g2, _2 = false, v2 = n2.padding();
    l2 = n2[i2(901)]() + 2 * v2, u2 = n2.height() + 2 * v2;
    var y2;
    r2 && (y2 = r2, t2.translate(-y2.x1, -y2.y1));
    for (var b2 = n2.pstyle(`background-image`).value, x2 = Array(b2[i2(441)]), S2 = Array(b2.length), C2 = 0, w2 = 0; w2 < b2.length; w2++) {
      var T2 = b2[w2];
      if (x2[w2] = T2 != null && T2 !== `none`) {
        var E2 = n2.cy().style().getIndexedStyle(n2, `background-image-crossorigin`, `value`, w2);
        C2++, S2[w2] = c2.getCachedImage(T2, E2, function() {
          var e2 = i2;
          d2.backgroundTimestamp = Date[e2(231)](), n2.emitAndNotify(e2(1360));
        });
      }
    }
    var D2 = n2.pstyle(`background-blacken`).value, O2 = n2[i2(1373)](`border-width`).pfValue, k2 = n2.pstyle(i2(281))[i2(1310)] * m2, A2 = n2.pstyle(`border-color`).value, M2 = n2.pstyle(i2(733)).value, N2 = n2.pstyle(`border-join`).value, P2 = n2[i2(1373)](`border-cap`).value, F2 = n2.pstyle(`border-position`).value, I2 = n2.pstyle(i2(535)).pfValue, L2 = n2.pstyle(`border-dash-offset`).pfValue, R2 = n2.pstyle(`border-opacity`).value * m2, z2 = n2.pstyle(`outline-width`).pfValue, B2 = n2[i2(1373)](i2(689)).value, V2 = n2.pstyle(i2(1149)).value, H2 = n2.pstyle(`outline-opacity`).value * m2, U2 = n2.pstyle(`outline-offset`).value, W2 = n2.pstyle(`corner-radius`).value;
    W2 !== `auto` && (W2 = n2[i2(1373)](`corner-radius`).pfValue);
    var G2 = function() {
      var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : k2;
      c2.eleFillStyle(t2, n2, e2);
    }, K2 = function() {
      var e2 = i2, n3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : R2;
      c2[e2(1391)](t2, A2[0], A2[1], A2[2], n3);
    }, q2 = function() {
      var e2 = i2, n3 = arguments[e2(441)] > 0 && arguments[0] !== void 0 ? arguments[0] : H2;
      c2.colorStrokeStyle(t2, B2[0], B2[1], B2[2], n3);
    }, J2 = function(e2, t3, n3, r3) {
      var a3 = i2, o3 = c2[a3(1187)] = c2[a3(1187)] || [], s3 = wt(n3 === a3(532) ? n3 + `,` + r3[a3(1100)](`,`) : n3, `` + t3, `` + e2, `` + W2), l3 = o3[s3], u3, d3 = false;
      return l3 == null ? (u3 = new Path2D(), o3[s3] = f2.pathCache = u3) : (u3 = l3, d3 = true, f2.pathCache = u3), { path: u3, cacheHit: d3 };
    }, Y2 = n2.pstyle(i2(762))[i2(1381)], ee2 = n2.pstyle(`shape-polygon-points`).pfValue;
    if (h2) {
      t2[i2(434)](p2.x, p2.y);
      var X2 = J2(l2, u2, Y2, ee2);
      g2 = X2.path, _2 = X2.cacheHit;
    }
    var te2 = function() {
      var e2 = i2;
      if (!_2) {
        var r3 = p2;
        h2 && (r3 = { x: 0, y: 0 }), c2[e2(1022)][c2.getNodeShape(n2)].draw(g2 || t2, r3.x, r3.y, l2, u2, W2, f2);
      }
      h2 ? t2.fill(g2) : t2.fill();
    }, ne2 = function() {
      for (var e2 = i2, r3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : m2, a3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, o3 = d2.backgrounding, s3 = 0, l3 = 0; l3 < S2.length; l3++) {
        var u3 = n2.cy().style().getIndexedStyle(n2, e2(787), e2(1310), l3);
        if (a3 && u3 === `over` || !a3 && u3 === `inside`) {
          s3++;
          continue;
        }
        x2[l3] && S2[l3][e2(1004)] && !S2[l3].error && (s3++, c2.drawInscribedImage(t2, S2[l3], n2, l3, r3));
      }
      d2.backgrounding = s3 !== C2, o3 !== d2[e2(675)] && n2.updateStyle(false);
    }, re2 = function() {
      var e2 = i2, r3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, a3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : m2;
      c2.hasPie(n2) && (c2[e2(1014)](t2, n2, a3), r3 && (h2 || c2.nodeShapes[c2.getNodeShape(n2)].draw(t2, p2.x, p2.y, l2, u2, W2, f2)));
    }, ie2 = function() {
      var e2 = i2, r3 = arguments[e2(441)] > 0 && arguments[0] !== void 0 ? arguments[0] : false, a3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : m2;
      c2.hasStripe(n2) && (t2.save(), h2 ? t2.clip(f2.pathCache) : (c2.nodeShapes[c2.getNodeShape(n2)].draw(t2, p2.x, p2.y, l2, u2, W2, f2), t2.clip()), c2.drawStripe(t2, n2, a3), t2[e2(1162)](), r3 && (h2 || c2[e2(1022)][c2.getNodeShape(n2)].draw(t2, p2.x, p2.y, l2, u2, W2, f2)));
    }, ae2 = function() {
      var e2 = i2, n3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : m2, r3 = (D2 > 0 ? D2 : -D2) * n3, a3 = D2 > 0 ? 0 : 255;
      D2 !== 0 && (c2[e2(1068)](t2, a3, a3, a3, r3), h2 ? t2[e2(1080)](g2) : t2.fill());
    }, oe2 = function() {
      var e2 = i2;
      if (O2 > 0) {
        if (t2.lineWidth = O2, t2.lineCap = P2, t2[e2(1350)] = N2, t2.setLineDash) switch (M2) {
          case `dotted`:
            t2.setLineDash([1, 1]);
            break;
          case `dashed`:
            t2[e2(637)](I2), t2.lineDashOffset = L2;
            break;
          case `solid`:
          case `double`:
            t2.setLineDash([]);
            break;
        }
        if (F2 !== `center`) {
          if (t2.save(), t2.lineWidth *= 2, F2 === e2(850)) h2 ? t2[e2(556)](g2) : t2[e2(556)]();
          else {
            var n3 = new Path2D();
            n3.rect(-l2 / 2 - O2, -u2 / 2 - O2, l2 + 2 * O2, u2 + 2 * O2), n3.addPath(g2), t2.clip(n3, `evenodd`);
          }
          h2 ? t2[e2(555)](g2) : t2.stroke(), t2.restore();
        } else h2 ? t2.stroke(g2) : t2[e2(555)]();
        if (M2 === `double`) {
          t2.lineWidth = O2 / 3;
          var r3 = t2.globalCompositeOperation;
          t2.globalCompositeOperation = `destination-out`, h2 ? t2.stroke(g2) : t2.stroke(), t2[e2(815)] = r3;
        }
        t2.setLineDash && t2.setLineDash([]);
      }
    }, se2 = function() {
      var e2 = i2;
      if (z2 > 0) {
        if (t2.lineWidth = z2, t2.lineCap = `butt`, t2.setLineDash) switch (V2) {
          case `dotted`:
            t2[e2(637)]([1, 1]);
            break;
          case `dashed`:
            t2.setLineDash([4, 2]);
            break;
          case `solid`:
          case `double`:
            t2.setLineDash([]);
            break;
        }
        var r3 = p2;
        h2 && (r3 = { x: 0, y: 0 });
        var a3 = c2.getNodeShape(n2), o3 = O2;
        F2 === `inside` && (o3 = 0), F2 === `outside` && (o3 *= 2);
        var s3 = (l2 + o3 + (z2 + U2)) / l2, d3 = (u2 + o3 + (z2 + U2)) / u2, f3 = l2 * s3, m3 = u2 * d3, g3 = c2.nodeShapes[a3].points, _3;
        if (h2 && (_3 = J2(f3, m3, a3, g3).path), a3 === e2(789)) c2.drawEllipsePath(_3 || t2, r3.x, r3.y, f3, m3);
        else if ([`round-diamond`, `round-heptagon`, e2(806), e2(380), `round-pentagon`, `round-polygon`, `round-triangle`, `round-tag`].includes(a3)) {
          var v3 = 0, y3 = 0, b3 = 0;
          a3 === e2(1405) ? v3 = (o3 + U2 + z2) * 1.4 : a3 === `round-heptagon` ? (v3 = (o3 + U2 + z2) * 1.075, b3 = -(o3 / 2 + U2 + z2) / 35) : a3 === `round-hexagon` ? v3 = (o3 + U2 + z2) * 1.12 : a3 === `round-pentagon` ? (v3 = (o3 + U2 + z2) * 1.13, b3 = -(o3 / 2 + U2 + z2) / 15) : a3 === `round-tag` ? (v3 = (o3 + U2 + z2) * 1.12, y3 = (o3 / 2 + z2 + U2) * 0.07) : a3 === e2(856) && (v3 = (o3 + U2 + z2) * (Math.PI / 2), b3 = -(o3 + U2 / 2 + z2) / Math.PI), v3 !== 0 && (s3 = (l2 + v3) / l2, f3 = l2 * s3, [`round-hexagon`, `round-tag`].includes(a3) || (d3 = (u2 + v3) / u2, m3 = u2 * d3)), W2 = W2 === `auto` ? Mr(f3, m3) : W2;
          for (var x3 = f3 / 2, S3 = m3 / 2, C3 = W2 + (o3 + z2 + U2) / 2, w3 = Array(g3[e2(441)] / 2), T3 = Array(g3.length / 2), E3 = 0; E3 < g3.length / 2; E3++) w3[E3] = { x: r3.x + y3 + x3 * g3[E3 * 2], y: r3.y + b3 + S3 * g3[E3 * 2 + 1] };
          var D3, k3, A3, j2, M3 = w3[e2(441)];
          for (k3 = w3[M3 - 1], D3 = 0; D3 < M3; D3++) A3 = w3[D3 % M3], j2 = w3[(D3 + 1) % M3], T3[D3] = Cf(k3, A3, j2, C3), k3 = A3, A3 = j2;
          c2.drawRoundPolygonPath(_3 || t2, r3.x + y3, r3.y + b3, l2 * s3, u2 * d3, g3, T3);
        } else if ([`roundrectangle`, e2(202)][e2(1214)](a3)) W2 = W2 === `auto` ? jr(f3, m3) : W2, c2.drawRoundRectanglePath(_3 || t2, r3.x, r3.y, f3, m3, W2 + (o3 + z2 + U2) / 2);
        else if ([e2(1254), e2(262)].includes(a3)) W2 = W2 === e2(1037) ? Nr() : W2, c2.drawCutRectanglePath(_3 || t2, r3.x, r3.y, f3, m3, null, W2 + (o3 + z2 + U2) / 4);
        else if ([`bottomroundrectangle`, `bottom-round-rectangle`][e2(1214)](a3)) W2 = W2 === e2(1037) ? jr(f3, m3) : W2, c2[e2(877)](_3 || t2, r3.x, r3.y, f3, m3, W2 + (o3 + z2 + U2) / 2);
        else if (a3 === `barrel`) c2.drawBarrelPath(_3 || t2, r3.x, r3.y, f3, m3);
        else if (a3[e2(583)](`polygon`) || [`rhomboid`, `right-rhomboid`, `round-tag`, e2(234), `vee`][e2(1214)](a3)) {
          var N3 = (o3 + z2 + U2) / l2;
          g3 = _r(vr(g3, N3)), c2.drawPolygonPath(_3 || t2, r3.x, r3.y, l2, u2, g3);
        } else {
          var P3 = (o3 + z2 + U2) / l2;
          g3 = _r(vr(g3, -P3)), c2.drawPolygonPath(_3 || t2, r3.x, r3.y, l2, u2, g3);
        }
        if (h2 ? t2.stroke(_3) : t2.stroke(), V2 === e2(1035)) {
          t2.lineWidth = o3 / 3;
          var I3 = t2.globalCompositeOperation;
          t2.globalCompositeOperation = `destination-out`, h2 ? t2.stroke(_3) : t2[e2(555)](), t2[e2(815)] = I3;
        }
        t2[e2(637)] && t2[e2(637)]([]);
      }
    }, ce2 = function() {
      o2 && c2.drawNodeOverlay(t2, n2, p2, l2, u2);
    }, Z2 = function() {
      o2 && c2.drawNodeUnderlay(t2, n2, p2, l2, u2);
    }, le2 = function() {
      c2.drawElementText(t2, n2, null, a2);
    };
    if (n2.pstyle(`ghost`).value === `yes`) {
      var ue2 = n2.pstyle(`ghost-offset-x`).pfValue, de2 = n2.pstyle(`ghost-offset-y`).pfValue, fe2 = n2[i2(1373)](`ghost-opacity`)[i2(1310)], pe2 = fe2 * m2;
      t2[i2(434)](ue2, de2), q2(), se2(), G2(fe2 * k2), te2(), ne2(pe2, true), K2(fe2 * R2), oe2(), re2(D2 !== 0 || O2 !== 0), ie2(D2 !== 0 || O2 !== 0), ne2(pe2, false), ae2(pe2), t2.translate(-ue2, -de2);
    }
    h2 && t2.translate(-p2.x, -p2.y), Z2(), h2 && t2[i2(434)](p2.x, p2.y), q2(), se2(), G2(), te2(), ne2(m2, true), K2(), oe2(), re2(D2 !== 0 || O2 !== 0), ie2(D2 !== 0 || O2 !== 0), ne2(m2, false), ae2(), h2 && t2.translate(-p2.x, -p2.y), le2(), ce2(), r2 && t2.translate(y2.x1, y2.y1);
  }
};
var cm = function(e2) {
  if (![`overlay`, `underlay`].includes(e2)) throw Error(`Invalid state`);
  return function(t2, n2, r2, i2, a2) {
    var o2 = $, s2 = this;
    if (n2.visible()) {
      var c2 = n2.pstyle(e2 + `-padding`).pfValue, l2 = n2.pstyle(e2 + `-opacity`).value, u2 = n2.pstyle(e2 + o2(579)).value, d2 = n2[o2(1373)](e2 + `-shape`).value, f2 = n2.pstyle(e2 + `-corner-radius`).value;
      if (l2 > 0) {
        if (r2 || (r2 = n2.position()), i2 == null || a2 == null) {
          var p2 = n2.padding();
          i2 = n2.width() + 2 * p2, a2 = n2.height() + 2 * p2;
        }
        s2[o2(1068)](t2, u2[0], u2[1], u2[2], l2), s2.nodeShapes[d2].draw(t2, r2.x, r2.y, i2 + c2 * 2, a2 + c2 * 2, f2), t2.fill();
      }
    }
  };
};
sm[e(390)] = cm(e(827)), sm.drawNodeUnderlay = cm(`underlay`), sm[e(1265)] = function(e2) {
  return e2 = e2[0], e2._private.hasPie;
}, sm.hasStripe = function(e2) {
  return e2 = e2[0], e2._private.hasStripe;
}, sm.drawPie = function(t2, n2, r2, i2) {
  var a2 = e;
  n2 = n2[0], i2 || (i2 = n2.position());
  var o2 = n2.cy()[a2(1353)](), s2 = n2.pstyle(`pie-size`), c2 = n2.pstyle(a2(1243)), l2 = n2.pstyle(`pie-start-angle`).pfValue, u2 = i2.x, d2 = i2.y, f2 = n2.width(), p2 = n2[a2(1363)](), m2 = Math.min(f2, p2) / 2, h2, g2 = 0;
  if (this.usePaths() && (u2 = 0, d2 = 0), s2.units === `%` ? m2 *= s2.pfValue : s2.pfValue !== void 0 && (m2 = s2.pfValue / 2), c2.units === `%` ? h2 = m2 * c2[a2(676)] : c2.pfValue !== void 0 && (h2 = c2.pfValue / 2), !(h2 >= m2)) for (var _2 = 1; _2 <= o2.pieBackgroundN; _2++) {
    var v2 = n2.pstyle(a2(458) + _2 + `-background-size`).value, y2 = n2[a2(1373)](`pie-` + _2 + a2(1106)).value, b2 = n2.pstyle(a2(458) + _2 + a2(1340))[a2(1310)] * r2, x2 = v2 / 100;
    x2 + g2 > 1 && (x2 = 1 - g2);
    var S2 = 1.5 * Math.PI + 2 * Math.PI * g2;
    S2 += l2;
    var C2 = 2 * Math.PI * x2, w2 = S2 + C2;
    v2 === 0 || g2 >= 1 || g2 + x2 > 1 || (h2 === 0 ? (t2.beginPath(), t2.moveTo(u2, d2), t2[a2(1174)](u2, d2, m2, S2, w2), t2.closePath()) : (t2.beginPath(), t2.arc(u2, d2, m2, S2, w2), t2.arc(u2, d2, h2, w2, S2, true), t2.closePath()), this.colorFillStyle(t2, y2[0], y2[1], y2[2], b2), t2.fill(), g2 += x2);
  }
}, sm.drawStripe = function(t2, n2, r2, i2) {
  var a2 = e;
  n2 = n2[0], i2 || (i2 = n2.position());
  var o2 = n2.cy().style(), s2 = i2.x, c2 = i2.y, l2 = n2[a2(901)](), u2 = n2[a2(1363)](), d2 = 0, f2 = this.usePaths();
  t2.save();
  var p2 = n2.pstyle(`stripe-direction`).value, m2 = n2.pstyle(`stripe-size`);
  switch (p2) {
    case a2(490):
      break;
    case `righward`:
      t2.rotate(-Math.PI / 2);
      break;
  }
  var h2 = l2, g2 = u2;
  m2.units === `%` ? (h2 *= m2.pfValue, g2 *= m2[a2(676)]) : m2.pfValue !== void 0 && (h2 = m2.pfValue, g2 = m2[a2(676)]), f2 && (s2 = 0, c2 = 0), c2 -= h2 / 2, s2 -= g2 / 2;
  for (var _2 = 1; _2 <= o2[a2(483)]; _2++) {
    var v2 = n2.pstyle(`stripe-` + _2 + `-background-size`).value, y2 = n2.pstyle(`stripe-` + _2 + a2(1106))[a2(1310)], b2 = n2.pstyle(`stripe-` + _2 + a2(1340)).value * r2, x2 = v2 / 100;
    x2 + d2 > 1 && (x2 = 1 - d2), !(v2 === 0 || d2 >= 1 || d2 + x2 > 1) && (t2.beginPath(), t2.rect(s2, c2 + g2 * d2, h2, g2 * x2), t2.closePath(), this.colorFillStyle(t2, y2[0], y2[1], y2[2], b2), t2.fill(), d2 += x2);
  }
  t2.restore();
};
var lm = {}, um = 100;
lm.getPixelRatio = function() {
  var t2 = e, n2 = this.data.contexts[0];
  if (this.forcedPixelRatio != null) return this.forcedPixelRatio;
  var r2 = this.cy.window(), i2 = n2.backingStorePixelRatio || n2.webkitBackingStorePixelRatio || n2[t2(605)] || n2.msBackingStorePixelRatio || n2[t2(948)] || n2.backingStorePixelRatio || 1;
  return (r2.devicePixelRatio || 1) / i2;
}, lm.paintCache = function(e2) {
  for (var t2 = this.paintCaches = this.paintCaches || [], n2 = true, r2, i2 = 0; i2 < t2.length; i2++) if (r2 = t2[i2], r2.context === e2) {
    n2 = false;
    break;
  }
  return n2 && (r2 = { context: e2 }, t2.push(r2)), r2;
}, lm.createGradientStyleFor = function(t2, n2, r2, i2, a2) {
  var o2 = e, s2, c2 = this.usePaths(), l2 = r2.pstyle(n2 + `-gradient-stop-colors`)[o2(1310)], u2 = r2.pstyle(n2 + `-gradient-stop-positions`).pfValue;
  if (i2 === `radial-gradient`) if (r2.isEdge()) {
    var d2 = r2.sourceEndpoint(), f2 = r2.targetEndpoint(), p2 = r2[o2(928)](), m2 = zn(d2, p2), h2 = zn(f2, p2);
    s2 = t2.createRadialGradient(p2.x, p2.y, 0, p2.x, p2.y, Math.max(m2, h2));
  } else {
    var g2 = c2 ? { x: 0, y: 0 } : r2.position(), _2 = r2[o2(1053)](), v2 = r2.paddedHeight();
    s2 = t2.createRadialGradient(g2.x, g2.y, 0, g2.x, g2.y, Math.max(_2, v2));
  }
  else if (r2.isEdge()) {
    var y2 = r2.sourceEndpoint(), b2 = r2.targetEndpoint();
    s2 = t2.createLinearGradient(y2.x, y2.y, b2.x, b2.y);
  } else {
    var x2 = c2 ? { x: 0, y: 0 } : r2.position(), S2 = r2.paddedWidth(), C2 = r2.paddedHeight(), w2 = S2 / 2, T2 = C2 / 2;
    switch (r2.pstyle(`background-gradient-direction`).value) {
      case `to-bottom`:
        s2 = t2.createLinearGradient(x2.x, x2.y - T2, x2.x, x2.y + T2);
        break;
      case `to-top`:
        s2 = t2.createLinearGradient(x2.x, x2.y + T2, x2.x, x2.y - T2);
        break;
      case `to-left`:
        s2 = t2.createLinearGradient(x2.x + w2, x2.y, x2.x - w2, x2.y);
        break;
      case `to-right`:
        s2 = t2.createLinearGradient(x2.x - w2, x2.y, x2.x + w2, x2.y);
        break;
      case `to-bottom-right`:
      case `to-right-bottom`:
        s2 = t2.createLinearGradient(x2.x - w2, x2.y - T2, x2.x + w2, x2.y + T2);
        break;
      case `to-top-right`:
      case `to-right-top`:
        s2 = t2.createLinearGradient(x2.x - w2, x2.y + T2, x2.x + w2, x2.y - T2);
        break;
      case `to-bottom-left`:
      case `to-left-bottom`:
        s2 = t2.createLinearGradient(x2.x + w2, x2.y - T2, x2.x - w2, x2.y + T2);
        break;
      case o2(1413):
      case `to-left-top`:
        s2 = t2.createLinearGradient(x2.x + w2, x2.y + T2, x2.x - w2, x2.y - T2);
        break;
    }
  }
  if (!s2) return null;
  for (var E2 = u2.length === l2.length, D2 = l2.length, O2 = 0; O2 < D2; O2++) s2[o2(203)](E2 ? u2[O2] : O2 / (D2 - 1), o2(1143) + l2[O2][0] + `,` + l2[O2][1] + `,` + l2[O2][2] + `,` + a2 + `)`);
  return s2;
}, lm.gradientFillStyle = function(e2, t2, n2, r2) {
  var i2 = this.createGradientStyleFor(e2, `background`, t2, n2, r2);
  if (!i2) return null;
  e2.fillStyle = i2;
}, lm.colorFillStyle = function(e2, t2, n2, r2, i2) {
  e2.fillStyle = `rgba(` + t2 + `,` + n2 + `,` + r2 + `,` + i2 + `)`;
}, lm.eleFillStyle = function(e2, t2, n2) {
  var r2 = t2.pstyle(`background-fill`).value;
  if (r2 === `linear-gradient` || r2 === `radial-gradient`) this.gradientFillStyle(e2, t2, r2, n2);
  else {
    var i2 = t2.pstyle(`background-color`).value;
    this.colorFillStyle(e2, i2[0], i2[1], i2[2], n2);
  }
}, lm.gradientStrokeStyle = function(e2, t2, n2, r2) {
  var i2 = this.createGradientStyleFor(e2, `line`, t2, n2, r2);
  if (!i2) return null;
  e2.strokeStyle = i2;
}, lm.colorStrokeStyle = function(t2, n2, r2, i2, a2) {
  var o2 = e;
  t2[o2(647)] = `rgba(` + n2 + `,` + r2 + `,` + i2 + `,` + a2 + `)`;
}, lm.eleStrokeStyle = function(t2, n2, r2) {
  var i2 = e, a2 = n2.pstyle(`line-fill`).value;
  if (a2 === `linear-gradient` || a2 === `radial-gradient`) this.gradientStrokeStyle(t2, n2, a2, r2);
  else {
    var o2 = n2[i2(1373)](`line-color`).value;
    this.colorStrokeStyle(t2, o2[0], o2[1], o2[2], r2);
  }
}, lm.matchCanvasSize = function(t2) {
  var n2 = e, r2 = this, i2 = r2.data, a2 = r2.findContainerClientCoords(), o2 = a2[2], s2 = a2[3], c2 = r2.getPixelRatio(), l2 = r2.motionBlurPxRatio;
  (t2 === r2.data.bufferCanvases[r2.MOTIONBLUR_BUFFER_NODE] || t2 === r2.data.bufferCanvases[r2[n2(487)]]) && (c2 = l2);
  var u2 = o2 * c2, d2 = s2 * c2, f2;
  if (!(u2 === r2.canvasWidth && d2 === r2.canvasHeight)) {
    r2.fontCaches = null;
    var p2 = i2.canvasContainer;
    p2.style.width = o2 + `px`, p2.style.height = s2 + `px`;
    for (var m2 = 0; m2 < r2.CANVAS_LAYERS; m2++) f2 = i2.canvases[m2], f2.width = u2, f2.height = d2, f2.style.width = o2 + `px`, f2.style.height = s2 + `px`;
    for (var m2 = 0; m2 < r2.BUFFER_COUNT; m2++) f2 = i2.bufferCanvases[m2], f2[n2(901)] = u2, f2.height = d2, f2.style.width = o2 + `px`, f2[n2(1353)].height = s2 + `px`;
    r2.textureMult = 1, c2 <= 1 && (f2 = i2.bufferCanvases[r2.TEXTURE_BUFFER], r2.textureMult = 2, f2.width = u2 * r2.textureMult, f2.height = d2 * r2.textureMult), r2.canvasWidth = u2, r2.canvasHeight = d2, r2[n2(1239)] = c2;
  }
}, lm.renderTo = function(e2, t2, n2, r2) {
  this.render({ forcedContext: e2, forcedZoom: t2, forcedPan: n2, drawAllLayers: true, forcedPxRatio: r2 });
}, lm.clearCanvas = function() {
  var t2 = e, n2 = this, r2 = n2[t2(1036)];
  function i2(e2) {
    var r3 = t2;
    e2.clearRect(0, 0, n2[r3(839)], n2.canvasHeight);
  }
  i2(r2[t2(570)][n2.NODE]), i2(r2.contexts[n2.DRAG]);
}, lm[e(636)] = function(t2) {
  var n2 = e, r2 = this;
  t2 || (t2 = Gt());
  var i2 = r2.cy, a2 = t2.forcedContext, o2 = t2.drawAllLayers, s2 = t2.drawOnlyNodeLayer, c2 = t2[n2(933)], l2 = t2.forcedPan, u2 = t2.forcedPxRatio === void 0 ? this.getPixelRatio() : t2.forcedPxRatio, d2 = r2[n2(1036)], f2 = d2.canvasNeedsRedraw, p2 = r2.textureOnViewport && !a2 && (r2.pinching || r2.hoverData[n2(265)] || r2.swipePanning || r2.data.wheelZooming), m2 = t2.motionBlur === void 0 ? r2[n2(337)] : t2.motionBlur, h2 = r2[n2(313)], g2 = i2.hasCompoundNodes(), _2 = r2.hoverData.draggingEles, v2 = !!(r2.hoverData.selecting || r2.touchData.selecting);
  m2 = m2 && !a2 && r2.motionBlurEnabled && !v2;
  var y2 = m2;
  a2 || (r2.prevPxRatio !== u2 && (r2[n2(1016)](), r2.matchCanvasSize(r2.container), r2.redrawHint(`eles`, true), r2[n2(431)](`drag`, true)), r2.prevPxRatio = u2), !a2 && r2.motionBlurTimeout && clearTimeout(r2.motionBlurTimeout), m2 && (r2.mbFrames ?? (r2.mbFrames = 0), r2.mbFrames++, r2.mbFrames < 3 && (y2 = false), r2.mbFrames > r2.minMbLowQualFrames && (r2[n2(313)] = r2.mbPxRBlurry)), r2.clearingMotionBlur && (r2.motionBlurPxRatio = 1), r2.textureDrawLastFrame && !p2 && (f2[r2.NODE] = true, f2[r2.SELECT_BOX] = true);
  var b2 = i2.style(), x2 = i2[n2(1242)](), S2 = c2 === void 0 ? x2 : c2, C2 = i2.pan(), w2 = { x: C2.x, y: C2.y }, T2 = { zoom: x2, pan: { x: C2.x, y: C2.y } }, E2 = r2.prevViewport;
  !(E2 === void 0 || T2.zoom !== E2.zoom || T2.pan.x !== E2.pan.x || T2.pan.y !== E2.pan.y) && !(_2 && !g2) && (r2[n2(313)] = 1), l2 && (w2 = l2), S2 *= u2, w2.x *= u2, w2.y *= u2;
  var D2 = r2[n2(489)]();
  function O2(e2, t3, i3, a3, o3) {
    var s3 = n2, c3 = e2[s3(815)];
    e2.globalCompositeOperation = s3(737), r2[s3(1068)](e2, 255, 255, 255, r2[s3(857)]), e2.fillRect(t3, i3, a3, o3), e2.globalCompositeOperation = c3;
  }
  function k2(e2, t3) {
    var i3 = n2, s3, u3, f3, p3;
    !r2.clearingMotionBlur && (e2 === d2.bufferContexts[r2.MOTIONBLUR_BUFFER_NODE] || e2 === d2[i3(1126)][r2.MOTIONBLUR_BUFFER_DRAG]) ? (s3 = { x: C2.x * h2, y: C2.y * h2 }, u3 = x2 * h2, f3 = r2.canvasWidth * h2, p3 = r2.canvasHeight * h2) : (s3 = w2, u3 = S2, f3 = r2.canvasWidth, p3 = r2.canvasHeight), e2.setTransform(1, 0, 0, 1, 0, 0), t3 === `motionBlur` ? O2(e2, 0, 0, f3, p3) : !a2 && (t3 === void 0 || t3) && e2.clearRect(0, 0, f3, p3), o2 || (e2.translate(s3.x, s3.y), e2.scale(u3, u3)), l2 && e2[i3(434)](l2.x, l2.y), c2 && e2.scale(c2, c2);
  }
  if (p2 || (r2.textureDrawLastFrame = false), p2) {
    if (r2.textureDrawLastFrame = true, !r2.textureCache) {
      r2[n2(355)] = {}, r2.textureCache.bb = i2.mutableElements().boundingBox(), r2.textureCache.texture = r2[n2(1036)].bufferCanvases[r2.TEXTURE_BUFFER];
      var A2 = r2.data.bufferContexts[r2[n2(1309)]];
      A2.setTransform(1, 0, 0, 1, 0, 0), A2.clearRect(0, 0, r2.canvasWidth * r2.textureMult, r2.canvasHeight * r2.textureMult), r2.render({ forcedContext: A2, drawOnlyNodeLayer: true, forcedPxRatio: u2 * r2[n2(582)] });
      var T2 = r2[n2(355)][n2(560)] = { zoom: i2.zoom(), pan: i2.pan(), width: r2.canvasWidth, height: r2.canvasHeight };
      T2.mpan = { x: (0 - T2[n2(996)].x) / T2.zoom, y: (0 - T2.pan.y) / T2.zoom };
    }
    f2[r2.DRAG] = false, f2[r2.NODE] = false;
    var j2 = d2.contexts[r2.NODE], M2 = r2.textureCache.texture, T2 = r2.textureCache.viewport;
    j2.setTransform(1, 0, 0, 1, 0, 0), m2 ? O2(j2, 0, 0, T2.width, T2.height) : j2.clearRect(0, 0, T2[n2(901)], T2[n2(1363)]);
    var N2 = b2.core(`outside-texture-bg-color`).value, P2 = b2.core(`outside-texture-bg-opacity`).value;
    r2.colorFillStyle(j2, N2[0], N2[1], N2[2], P2), j2.fillRect(0, 0, T2[n2(901)], T2[n2(1363)]);
    var x2 = i2.zoom();
    k2(j2, false), j2.clearRect(T2[n2(613)].x, T2.mpan.y, T2.width / T2.zoom / u2, T2.height / T2.zoom / u2), j2[n2(328)](M2, T2.mpan.x, T2.mpan.y, T2[n2(901)] / T2.zoom / u2, T2.height / T2.zoom / u2);
  } else r2.textureOnViewport && !a2 && (r2.textureCache = null);
  var F2 = i2[n2(214)](), I2 = r2.pinching || r2.hoverData.dragging || r2[n2(518)] || r2.data.wheelZooming || r2.hoverData[n2(554)] || r2.cy[n2(416)](), L2 = r2.hideEdgesOnViewport && I2, R2 = [];
  if (R2[r2.NODE] = !f2[r2.NODE] && m2 && !r2.clearedForMotionBlur[r2.NODE] || r2.clearingMotionBlur, R2[r2.NODE] && (r2.clearedForMotionBlur[r2.NODE] = true), R2[r2.DRAG] = !f2[r2[n2(723)]] && m2 && !r2.clearedForMotionBlur[r2.DRAG] || r2.clearingMotionBlur, R2[r2.DRAG] && (r2[n2(1397)][r2.DRAG] = true), f2[r2.NODE] || o2 || s2 || R2[r2[n2(894)]]) {
    var z2 = m2 && !R2[r2.NODE] && h2 !== 1, j2 = a2 || (z2 ? r2.data.bufferContexts[r2[n2(786)]] : d2.contexts[r2.NODE]);
    k2(j2, m2 && !z2 ? n2(337) : void 0), L2 ? r2[n2(1292)](j2, D2.nondrag, u2, F2) : r2.drawLayeredElements(j2, D2.nondrag, u2, F2), r2.debug && r2.drawDebugPoints(j2, D2.nondrag), !o2 && !m2 && (f2[r2.NODE] = false);
  }
  if (!s2 && (f2[r2.DRAG] || o2 || R2[r2.DRAG])) {
    var z2 = m2 && !R2[r2.DRAG] && h2 !== 1, j2 = a2 || (z2 ? r2.data.bufferContexts[r2.MOTIONBLUR_BUFFER_DRAG] : d2.contexts[r2.DRAG]);
    k2(j2, m2 && !z2 ? n2(337) : void 0), L2 ? r2.drawCachedNodes(j2, D2.drag, u2, F2) : r2[n2(1088)](j2, D2.drag, u2, F2), r2[n2(1017)] && r2.drawDebugPoints(j2, D2.drag), !o2 && !m2 && (f2[r2.DRAG] = false);
  }
  if (this.drawSelectionRectangle(t2, k2), m2 && h2 !== 1) {
    var B2 = d2[n2(570)][r2[n2(894)]], V2 = r2.data.bufferCanvases[r2.MOTIONBLUR_BUFFER_NODE], H2 = d2.contexts[r2.DRAG], U2 = r2[n2(1036)].bufferCanvases[r2.MOTIONBLUR_BUFFER_DRAG], W2 = function(e2, t3, i3) {
      var a3 = n2;
      e2[a3(714)](1, 0, 0, 1, 0, 0), i3 || !y2 ? e2.clearRect(0, 0, r2.canvasWidth, r2.canvasHeight) : O2(e2, 0, 0, r2.canvasWidth, r2.canvasHeight);
      var o3 = h2;
      e2[a3(328)](t3, 0, 0, r2.canvasWidth * o3, r2.canvasHeight * o3, 0, 0, r2[a3(839)], r2.canvasHeight);
    };
    (f2[r2.NODE] || R2[r2.NODE]) && (W2(B2, V2, R2[r2.NODE]), f2[r2.NODE] = false), (f2[r2.DRAG] || R2[r2.DRAG]) && (W2(H2, U2, R2[r2.DRAG]), f2[r2[n2(723)]] = false);
  }
  r2[n2(990)] = T2, r2[n2(1421)] && (r2.clearingMotionBlur = false, r2.motionBlurCleared = true, r2[n2(337)] = true), m2 && (r2.motionBlurTimeout = setTimeout(function() {
    var e2 = n2;
    r2.motionBlurTimeout = null, r2.clearedForMotionBlur[r2.NODE] = false, r2.clearedForMotionBlur[r2[e2(723)]] = false, r2.motionBlur = false, r2.clearingMotionBlur = !p2, r2[e2(947)] = 0, f2[r2.NODE] = true, f2[r2.DRAG] = true, r2.redraw();
  }, um)), a2 || i2.emit(`render`);
};
var dm;
lm.drawSelectionRectangle = function(t2, n2) {
  var r2 = e, i2 = this, a2 = i2.cy, o2 = i2.data, s2 = a2.style(), c2 = t2.drawOnlyNodeLayer, l2 = t2.drawAllLayers, u2 = o2.canvasNeedsRedraw, d2 = t2.forcedContext;
  if (i2.showFps || !c2 && u2[i2[r2(359)]] && !l2) {
    var f2 = d2 || o2[r2(570)][i2.SELECT_BOX];
    if (n2(f2), i2[r2(770)][4] == 1 && (i2.hoverData.selecting || i2.touchData.selecting)) {
      var p2 = i2.cy.zoom(), m2 = s2.core(`selection-box-border-width`).value / p2;
      f2.lineWidth = m2, f2[r2(903)] = `rgba(` + s2.core(r2(270))[r2(1310)][0] + `,` + s2[r2(673)](`selection-box-color`).value[1] + `,` + s2.core(`selection-box-color`).value[2] + `,` + s2.core(r2(353)).value + `)`, f2.fillRect(i2.selection[0], i2.selection[1], i2.selection[2] - i2.selection[0], i2.selection[3] - i2.selection[1]), m2 > 0 && (f2.strokeStyle = `rgba(` + s2.core(r2(528)).value[0] + `,` + s2.core(`selection-box-border-color`).value[1] + `,` + s2.core(`selection-box-border-color`).value[2] + `,` + s2.core(`selection-box-opacity`).value + `)`, f2.strokeRect(i2.selection[0], i2[r2(770)][1], i2.selection[2] - i2.selection[0], i2[r2(770)][3] - i2.selection[1]));
    }
    if (o2[r2(807)] && !i2[r2(1402)].selecting) {
      var p2 = i2.cy.zoom(), h2 = o2.bgActivePosistion;
      f2.fillStyle = `rgba(` + s2[r2(673)](r2(921)).value[0] + `,` + s2.core(r2(921)).value[1] + `,` + s2.core(`active-bg-color`).value[2] + `,` + s2.core(r2(1043)).value + `)`, f2.beginPath(), f2[r2(1174)](h2.x, h2.y, s2.core(`active-bg-size`).pfValue / p2, 0, 2 * Math.PI), f2.fill();
    }
    var g2 = i2[r2(810)];
    if (i2.showFps && g2) {
      g2 = Math.round(g2);
      var _2 = Math.round(1e3 / g2), v2 = `1 frame = ` + g2 + ` ms = ` + _2 + ` fps`;
      f2.setTransform(1, 0, 0, 1, 0, 0), f2.fillStyle = r2(917), f2.strokeStyle = `rgba(255, 0, 0, 0.75)`, f2.font = `30px Arial`, dm || (dm = f2[r2(304)](v2).actualBoundingBoxAscent), f2[r2(913)](v2, 0, dm), f2.strokeRect(0, dm + 10, 250, 20), f2.fillRect(0, dm + 10, 250 * Math.min(_2 / 60, 1), 20);
    }
    l2 || (u2[i2.SELECT_BOX] = false);
  }
};
function fm(t2, n2, r2) {
  var i2 = e, a2 = t2.createShader(n2);
  if (t2.shaderSource(a2, r2), t2.compileShader(a2), !t2.getShaderParameter(a2, t2[i2(351)])) throw Error(t2.getShaderInfoLog(a2));
  return a2;
}
function pm(t2, n2, r2) {
  var i2 = e, a2 = fm(t2, t2[i2(212)], n2), o2 = fm(t2, t2[i2(332)], r2), s2 = t2[i2(1144)]();
  if (t2.attachShader(s2, a2), t2.attachShader(s2, o2), t2.linkProgram(s2), !t2.getProgramParameter(s2, t2.LINK_STATUS)) throw Error(`Could not initialize shaders`);
  return s2;
}
function mm(e2, t2, n2) {
  n2 === void 0 && (n2 = t2);
  var r2 = e2.makeOffscreenCanvas(t2, n2), i2 = r2.context = r2.getContext(`2d`);
  return r2.clear = function() {
    return i2.clearRect(0, 0, r2.width, r2.height);
  }, r2.clear(), r2;
}
function hm(e2) {
  var t2 = e2.pixelRatio, n2 = e2.cy.zoom(), r2 = e2.cy.pan();
  return { zoom: n2 * t2, pan: { x: r2.x * t2, y: r2.y * t2 } };
}
function gm(e2) {
  var t2 = e2.pixelRatio;
  return e2.cy.zoom() * t2;
}
function _m(e2, t2, n2, r2, i2) {
  var a2 = r2 * n2 + t2.x, o2 = i2 * n2 + t2.y;
  return o2 = Math.round(e2.canvasHeight - o2), [a2, o2];
}
function vm(t2, n2) {
  var r2 = e;
  return n2.picking ? true : t2.pstyle(`background-fill`).value !== `solid` || t2.pstyle(`background-image`).strValue !== `none` ? false : t2.pstyle(`border-width`).value === 0 || t2.pstyle(`border-opacity`).value === 0 ? true : t2.pstyle(`border-style`)[r2(1310)] === `solid`;
}
function ym(e2, t2) {
  if (e2.length !== t2.length) return false;
  for (var n2 = 0; n2 < e2.length; n2++) if (e2[n2] !== t2[n2]) return false;
  return true;
}
function bm(e2, t2, n2) {
  var r2 = e2[0] / 255, i2 = e2[1] / 255, a2 = e2[2] / 255, o2 = t2, s2 = n2 || [, , , ,];
  return s2[0] = r2 * o2, s2[1] = i2 * o2, s2[2] = a2 * o2, s2[3] = o2, s2;
}
function xm(e2, t2) {
  var n2 = t2 || [, , , ,];
  return n2[0] = (e2 >> 0 & 255) / 255, n2[1] = (e2 >> 8 & 255) / 255, n2[2] = (e2 >> 16 & 255) / 255, n2[3] = (e2 >> 24 & 255) / 255, n2;
}
function Sm(e2) {
  return e2[0] + (e2[1] << 8) + (e2[2] << 16) + (e2[3] << 24);
}
function Cm(e2, t2) {
  var n2 = e2.createTexture();
  return n2.buffer = function(t3) {
    var r2 = $;
    e2.bindTexture(e2.TEXTURE_2D, n2), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_WRAP_S, e2.CLAMP_TO_EDGE), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_WRAP_T, e2.CLAMP_TO_EDGE), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_MAG_FILTER, e2.LINEAR), e2.texParameteri(e2.TEXTURE_2D, e2[r2(790)], e2.LINEAR_MIPMAP_NEAREST), e2.pixelStorei(e2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true), e2[r2(965)](e2.TEXTURE_2D, 0, e2.RGBA, e2.RGBA, e2.UNSIGNED_BYTE, t3), e2[r2(1401)](e2[r2(953)]), e2.bindTexture(e2.TEXTURE_2D, null);
  }, n2.deleteTexture = function() {
    e2.deleteTexture(n2);
  }, n2;
}
function wm(t2, n2) {
  var r2 = e;
  switch (n2) {
    case `float`:
      return [1, t2[r2(488)], 4];
    case `vec2`:
      return [2, t2.FLOAT, 4];
    case r2(452):
      return [3, t2[r2(488)], 4];
    case `vec4`:
      return [4, t2.FLOAT, 4];
    case r2(939):
      return [1, t2.INT, 4];
    case `ivec2`:
      return [2, t2.INT, 4];
  }
}
function Tm(t2, n2, r2) {
  var i2 = e;
  switch (n2) {
    case t2[i2(488)]:
      return new Float32Array(r2);
    case t2.INT:
      return new Int32Array(r2);
  }
}
function Em(e2, t2, n2, r2, i2, a2) {
  switch (t2) {
    case e2.FLOAT:
      return new Float32Array(n2.buffer, a2 * r2, i2);
    case e2.INT:
      return new Int32Array(n2.buffer, a2 * r2, i2);
  }
}
function Dm(t2, n2, r2, i2) {
  var a2 = e, o2 = p(wm(t2, n2), 2), s2 = o2[0], c2 = o2[1], l2 = Tm(t2, c2, i2), u2 = t2.createBuffer();
  return t2.bindBuffer(t2[a2(1207)], u2), t2.bufferData(t2.ARRAY_BUFFER, l2, t2.STATIC_DRAW), c2 === t2.FLOAT ? t2.vertexAttribPointer(r2, s2, c2, false, 0, 0) : c2 === t2.INT && t2.vertexAttribIPointer(r2, s2, c2, 0, 0), t2.enableVertexAttribArray(r2), t2.bindBuffer(t2.ARRAY_BUFFER, null), u2;
}
function Om(t2, n2, r2, i2) {
  var a2 = e, o2 = p(wm(t2, r2), 3), s2 = o2[0], c2 = o2[1], l2 = o2[2], u2 = Tm(t2, c2, n2 * s2), d2 = s2 * l2, f2 = t2.createBuffer();
  t2.bindBuffer(t2[a2(1207)], f2), t2.bufferData(t2.ARRAY_BUFFER, n2 * d2, t2.DYNAMIC_DRAW), t2.enableVertexAttribArray(i2), c2 === t2[a2(488)] ? t2.vertexAttribPointer(i2, s2, c2, false, d2, 0) : c2 === t2.INT && t2.vertexAttribIPointer(i2, s2, c2, d2, 0), t2.vertexAttribDivisor(i2, 1), t2.bindBuffer(t2[a2(1207)], null);
  for (var m2 = Array(n2), h2 = 0; h2 < n2; h2++) m2[h2] = Em(t2, c2, u2, d2, s2, h2);
  return f2.dataArray = u2, f2.stride = d2, f2.size = s2, f2.getView = function(e2) {
    return m2[e2];
  }, f2[a2(858)] = function(e2, t3, n3) {
    var r3 = m2[e2];
    r3[0] = t3, r3[1] = n3;
  }, f2[a2(210)] = function(e2) {
    var n3 = a2;
    t2[n3(411)](t2[n3(1207)], f2), e2 ? t2.bufferSubData(t2.ARRAY_BUFFER, 0, u2, 0, e2 * s2) : t2.bufferSubData(t2[n3(1207)], 0, u2);
  }, f2;
}
function km(t2, n2, r2) {
  for (var i2 = e, a2 = 9, o2 = new Float32Array(n2 * a2), s2 = Array(n2), c2 = 0; c2 < n2; c2++) {
    var l2 = c2 * a2 * 4;
    s2[c2] = new Float32Array(o2[i2(298)], l2, a2);
  }
  var u2 = t2.createBuffer();
  t2.bindBuffer(t2[i2(1207)], u2), t2.bufferData(t2[i2(1207)], o2.byteLength, t2[i2(588)]);
  for (var d2 = 0; d2 < 3; d2++) {
    var f2 = r2 + d2;
    t2.enableVertexAttribArray(f2), t2.vertexAttribPointer(f2, 3, t2.FLOAT, false, 36, d2 * 12), t2[i2(1189)](f2, 1);
  }
  return t2.bindBuffer(t2[i2(1207)], null), u2.getMatrixView = function(e2) {
    return s2[e2];
  }, u2.setData = function(e2, t3) {
    s2[t3].set(e2, 0);
  }, u2.bufferSubData = function() {
    t2.bindBuffer(t2.ARRAY_BUFFER, u2), t2.bufferSubData(t2.ARRAY_BUFFER, 0, o2);
  }, u2;
}
function Am(t2) {
  var n2 = e, r2 = t2.createFramebuffer();
  t2[n2(344)](t2.FRAMEBUFFER, r2);
  var i2 = t2.createTexture();
  return t2[n2(1127)](t2[n2(953)], i2), t2.texParameteri(t2.TEXTURE_2D, t2.TEXTURE_MIN_FILTER, t2.LINEAR), t2.texParameteri(t2.TEXTURE_2D, t2.TEXTURE_WRAP_S, t2.CLAMP_TO_EDGE), t2.texParameteri(t2[n2(953)], t2.TEXTURE_WRAP_T, t2.CLAMP_TO_EDGE), t2.framebufferTexture2D(t2.FRAMEBUFFER, t2.COLOR_ATTACHMENT0, t2.TEXTURE_2D, i2, 0), t2.bindFramebuffer(t2.FRAMEBUFFER, null), r2.setFramebufferAttachmentSizes = function(e2, r3) {
    var a2 = n2;
    t2.bindTexture(t2.TEXTURE_2D, i2), t2.texImage2D(t2.TEXTURE_2D, 0, t2[a2(1206)], e2, r3, 0, t2.RGBA, t2.UNSIGNED_BYTE, null);
  }, r2;
}
var jm = typeof Float32Array < `u` ? Float32Array : Array;
Math[e(1057)] || (Math.hypot = function() {
  for (var e2 = 0, t2 = arguments.length; t2--; ) e2 += arguments[t2] * arguments[t2];
  return Math.sqrt(e2);
});
function Mm() {
  var e2 = new jm(9);
  return jm != Float32Array && (e2[1] = 0, e2[2] = 0, e2[3] = 0, e2[5] = 0, e2[6] = 0, e2[7] = 0), e2[0] = 1, e2[4] = 1, e2[8] = 1, e2;
}
function Nm(e2) {
  return e2[0] = 1, e2[1] = 0, e2[2] = 0, e2[3] = 0, e2[4] = 1, e2[5] = 0, e2[6] = 0, e2[7] = 0, e2[8] = 1, e2;
}
function Pm(e2, t2, n2) {
  var r2 = t2[0], i2 = t2[1], a2 = t2[2], o2 = t2[3], s2 = t2[4], c2 = t2[5], l2 = t2[6], u2 = t2[7], d2 = t2[8], f2 = n2[0], p2 = n2[1], m2 = n2[2], h2 = n2[3], g2 = n2[4], _2 = n2[5], v2 = n2[6], y2 = n2[7], b2 = n2[8];
  return e2[0] = f2 * r2 + p2 * o2 + m2 * l2, e2[1] = f2 * i2 + p2 * s2 + m2 * u2, e2[2] = f2 * a2 + p2 * c2 + m2 * d2, e2[3] = h2 * r2 + g2 * o2 + _2 * l2, e2[4] = h2 * i2 + g2 * s2 + _2 * u2, e2[5] = h2 * a2 + g2 * c2 + _2 * d2, e2[6] = v2 * r2 + y2 * o2 + b2 * l2, e2[7] = v2 * i2 + y2 * s2 + b2 * u2, e2[8] = v2 * a2 + y2 * c2 + b2 * d2, e2;
}
function Fm(e2, t2, n2) {
  var r2 = t2[0], i2 = t2[1], a2 = t2[2], o2 = t2[3], s2 = t2[4], c2 = t2[5], l2 = t2[6], u2 = t2[7], d2 = t2[8], f2 = n2[0], p2 = n2[1];
  return e2[0] = r2, e2[1] = i2, e2[2] = a2, e2[3] = o2, e2[4] = s2, e2[5] = c2, e2[6] = f2 * r2 + p2 * o2 + l2, e2[7] = f2 * i2 + p2 * s2 + u2, e2[8] = f2 * a2 + p2 * c2 + d2, e2;
}
function Im(e2, t2, n2) {
  var r2 = t2[0], i2 = t2[1], a2 = t2[2], o2 = t2[3], s2 = t2[4], c2 = t2[5], l2 = t2[6], u2 = t2[7], d2 = t2[8], f2 = Math.sin(n2), p2 = Math.cos(n2);
  return e2[0] = p2 * r2 + f2 * o2, e2[1] = p2 * i2 + f2 * s2, e2[2] = p2 * a2 + f2 * c2, e2[3] = p2 * o2 - f2 * r2, e2[4] = p2 * s2 - f2 * i2, e2[5] = p2 * c2 - f2 * a2, e2[6] = l2, e2[7] = u2, e2[8] = d2, e2;
}
function Lm(e2, t2, n2) {
  var r2 = n2[0], i2 = n2[1];
  return e2[0] = r2 * t2[0], e2[1] = r2 * t2[1], e2[2] = r2 * t2[2], e2[3] = i2 * t2[3], e2[4] = i2 * t2[4], e2[5] = i2 * t2[5], e2[6] = t2[6], e2[7] = t2[7], e2[8] = t2[8], e2;
}
function Rm(e2, t2, n2) {
  return e2[0] = 2 / t2, e2[1] = 0, e2[2] = 0, e2[3] = 0, e2[4] = -2 / n2, e2[5] = 0, e2[6] = -1, e2[7] = 1, e2[8] = 1, e2;
}
var zm = (function() {
  var t2 = e;
  function n2(e2, t3, r2, a2) {
    var o2 = $;
    i(this, n2), this.debugID = Math.floor(Math.random() * 1e4), this.r = e2, this[o2(276)] = t3, this.texRows = r2, this.texHeight = Math[o2(1163)](t3 / r2), this.enableWrapping = true, this.locked = false, this.texture = null, this.needsBuffer = true, this.freePointer = { x: 0, row: 0 }, this.keyToLocation = /* @__PURE__ */ new Map(), this.canvas = a2(e2, t3, t3), this.scratch = a2(e2, t3, this.texHeight, `scratch`);
  }
  return o(n2, [{ key: `lock`, value: function() {
    this.locked = true;
  } }, { key: `getKeys`, value: function() {
    return new Set(this.keyToLocation.keys());
  } }, { key: `getScale`, value: function(e2) {
    var t3 = e2.w, n3 = e2.h, r2 = this.texHeight, i2 = this.texSize, a2 = r2 / n3, o2 = t3 * a2, s2 = n3 * a2;
    return o2 > i2 && (a2 = i2 / t3, o2 = t3 * a2, s2 = n3 * a2), { scale: a2, texW: o2, texH: s2 };
  } }, { key: `draw`, value: function(e2, t3, n3) {
    var r2 = $, i2 = this;
    if (this.locked) throw Error(`can't draw, atlas is locked`);
    var a2 = this.texSize, o2 = this.texRows, s2 = this.texHeight, c2 = this.getScale(t3), l2 = c2[r2(388)], u2 = c2.texW, d2 = c2.texH, f2 = function(e3, i3) {
      var a3 = r2;
      if (n3 && i3) {
        var o3 = i3.context, c3 = e3.x, u3 = e3.row, d3 = c3, f3 = s2 * u3;
        o3.save(), o3.translate(d3, f3), o3[a3(388)](l2, l2), n3(o3, t3), o3.restore();
      }
    }, p2 = [null, null], m2 = function() {
      var e3 = r2;
      f2(i2.freePointer, i2.canvas), p2[0] = { x: i2[e3(986)].x, y: i2.freePointer.row * s2, w: u2, h: d2 }, p2[1] = { x: i2.freePointer.x + u2, y: i2.freePointer.row * s2, w: 0, h: d2 }, i2.freePointer.x += u2, i2[e3(986)].x == a2 && (i2[e3(986)].x = 0, i2[e3(986)].row++);
    }, h2 = function() {
      var e3 = r2, t4 = i2.scratch, n4 = i2.canvas;
      t4.clear(), f2({ x: 0, row: 0 }, t4);
      var o3 = a2 - i2.freePointer.x, c3 = u2 - o3, l3 = s2, m3 = i2.freePointer.x, h3 = i2.freePointer[e3(442)] * s2, g3 = o3;
      n4.context.drawImage(t4, 0, 0, g3, l3, m3, h3, g3, l3), p2[0] = { x: m3, y: h3, w: g3, h: d2 };
      var _2 = o3, v2 = (i2.freePointer[e3(442)] + 1) * s2, y2 = c3;
      n4 && n4.context.drawImage(t4, _2, 0, y2, l3, 0, v2, y2, l3), p2[1] = { x: 0, y: v2, w: y2, h: d2 }, i2.freePointer.x = c3, i2.freePointer.row++;
    }, g2 = function() {
      var e3 = r2;
      i2[e3(986)].x = 0, i2.freePointer.row++;
    };
    if (this.freePointer.x + u2 <= a2) m2();
    else if (this[r2(986)][r2(442)] >= o2 - 1) return false;
    else this.freePointer.x === a2 ? (g2(), m2()) : this.enableWrapping ? h2() : (g2(), m2());
    return this.keyToLocation.set(e2, p2), this.needsBuffer = true, p2;
  } }, { key: `getOffsets`, value: function(e2) {
    return this.keyToLocation.get(e2);
  } }, { key: `isEmpty`, value: function() {
    var e2 = $;
    return this.freePointer.x === 0 && this[e2(986)].row === 0;
  } }, { key: `canFit`, value: function(e2) {
    var t3 = $;
    if (this.locked) return false;
    var n3 = this.texSize, r2 = this.texRows, i2 = this.getScale(e2).texW;
    return this.freePointer.x + i2 > n3 ? this.freePointer[t3(442)] < r2 - 1 : true;
  } }, { key: t2(1361), value: function(e2) {
    var n3 = t2;
    this.texture || (this.texture = Cm(e2, this.debugID)), this.needsBuffer && (this.texture.buffer(this[n3(224)]), this[n3(1370)] = false, this.locked && (this.canvas = null, this.scratch = null));
  } }, { key: t2(660), value: function() {
    var e2 = t2;
    this.texture && (this.texture = (this.texture.deleteTexture(), null)), this[e2(224)] = null, this.scratch = null, this.locked = true;
  } }]);
})(), Bm = (function() {
  var t2 = e;
  function n2(e2, t3, r2, a2) {
    var o2 = $;
    i(this, n2), this.r = e2, this[o2(276)] = t3, this[o2(420)] = r2, this.createTextureCanvas = a2, this[o2(597)] = [], this.styleKeyToAtlas = /* @__PURE__ */ new Map(), this.markedKeys = /* @__PURE__ */ new Set();
  }
  return o(n2, [{ key: `getKeys`, value: function() {
    return new Set(this.styleKeyToAtlas.keys());
  } }, { key: `_createAtlas`, value: function() {
    var e2 = $, t3 = this.r, n3 = this.texSize, r2 = this[e2(420)], i2 = this.createTextureCanvas;
    return new zm(t3, n3, r2, i2);
  } }, { key: t2(1079), value: function() {
    var e2 = t2;
    if (!this[e2(1125)]) {
      var n3 = this.r, r2 = this.texSize, i2 = this.texRows, a2 = this.createTextureCanvas, o2 = Math.floor(r2 / i2);
      this.scratch = a2(n3, r2, o2, e2(1125));
    }
    return this.scratch;
  } }, { key: `draw`, value: function(e2, n3, r2) {
    var i2 = t2, a2 = this.styleKeyToAtlas.get(e2);
    return a2 || (a2 = this[i2(597)][this[i2(597)].length - 1], (!a2 || !a2.canFit(n3)) && (a2 && a2.lock(), a2 = this._createAtlas(), this.atlases.push(a2)), a2.draw(e2, n3, r2), this[i2(678)][i2(1280)](e2, a2)), a2;
  } }, { key: `getAtlas`, value: function(e2) {
    return this.styleKeyToAtlas.get(e2);
  } }, { key: `hasAtlas`, value: function(e2) {
    var n3 = t2;
    return this.styleKeyToAtlas[n3(1099)](e2);
  } }, { key: `markKeyForGC`, value: function(e2) {
    this.markedKeys.add(e2);
  } }, { key: `gc`, value: function() {
    var e2 = t2, n3 = this, r2 = this.markedKeys;
    if (r2.size === 0) {
      console.log(`nothing to garbage collect`);
      return;
    }
    var i2 = [], a2 = /* @__PURE__ */ new Map(), o2 = null, c2 = s(this[e2(597)]), l2;
    try {
      var u2 = function() {
        var t3 = e2, c3 = l2.value, u3 = c3.getKeys(), d2 = Vm(r2, u3);
        if (d2[t3(1092)] === 0) return i2.push(c3), u3[t3(1390)](function(e3) {
          return a2.set(e3, c3);
        }), 1;
        o2 || (o2 = n3._createAtlas(), i2.push(o2));
        var f2 = s(u3), m2;
        try {
          for (f2.s(); !(m2 = f2.n()).done; ) {
            var h2 = m2.value;
            if (!d2[t3(1099)](h2)) {
              var g2 = p(c3[t3(720)](h2), 2), _2 = g2[0], v2 = g2[1];
              o2.canFit({ w: _2.w + v2.w, h: _2.h }) || (o2.lock(), o2 = n3._createAtlas(), i2.push(o2)), c3[t3(224)] && (n3[t3(759)](h2, c3, o2), a2.set(h2, o2));
            }
          }
        } catch (e3) {
          f2.e(e3);
        } finally {
          f2.f();
        }
        c3.dispose();
      };
      for (c2.s(); !(l2 = c2.n()).done; ) if (u2()) continue;
    } catch (e3) {
      c2.e(e3);
    } finally {
      c2.f();
    }
    this.atlases = i2, this.styleKeyToAtlas = a2, this.markedKeys = /* @__PURE__ */ new Set();
  } }, { key: `_copyTextureToNewAtlas`, value: function(e2, n3, r2) {
    var i2 = t2, a2 = p(n3.getOffsets(e2), 2), o2 = a2[0], s2 = a2[1];
    if (s2.w === 0) r2.draw(e2, o2, function(e3) {
      e3.drawImage(n3.canvas, o2.x, o2.y, o2.w, o2.h, 0, 0, o2.w, o2.h);
    });
    else {
      var c2 = this._getScratchCanvas();
      c2[i2(1385)](), c2[i2(310)].drawImage(n3.canvas, o2.x, o2.y, o2.w, o2.h, 0, 0, o2.w, o2.h), c2.context.drawImage(n3.canvas, s2.x, s2.y, s2.w, s2.h, o2.w, 0, s2.w, s2.h);
      var l2 = o2.w + s2.w, u2 = o2.h;
      r2.draw(e2, { w: l2, h: u2 }, function(e3) {
        e3.drawImage(c2, 0, 0, l2, u2, 0, 0, l2, u2);
      });
    }
  } }, { key: `getCounts`, value: function() {
    return { keyCount: this.styleKeyToAtlas.size, atlasCount: new Set(this.styleKeyToAtlas.values()).size };
  } }]);
})();
function Vm(t2, n2) {
  var r2 = e;
  return t2[r2(1399)] ? t2[r2(1399)](n2) : new Set(m(t2)[r2(670)](function(e2) {
    return n2.has(e2);
  }));
}
var Hm = (function() {
  function e2(t2, n2) {
    var r2 = $;
    i(this, e2), this.r = t2, this.globalOptions = n2, this.atlasSize = n2.webglTexSize, this.maxAtlasesPerBatch = n2.webglTexPerBatch, this.renderTypes = /* @__PURE__ */ new Map(), this[r2(368)] = /* @__PURE__ */ new Map(), this[r2(308)] = /* @__PURE__ */ new Map();
  }
  return o(e2, [{ key: `getAtlasSize`, value: function() {
    return this.atlasSize;
  } }, { key: `addAtlasCollection`, value: function(e3, t2) {
    var n2 = $, r2 = this[n2(855)], i2 = r2[n2(699)], a2 = r2.createTextureCanvas, o2 = t2.texRows, s2 = this._cacheScratchCanvas(a2), c2 = new Bm(this.r, i2, o2, s2);
    this[n2(368)][n2(1280)](e3, c2);
  } }, { key: `addRenderType`, value: function(e3, t2) {
    var n2 = $, r2 = t2.collection;
    if (!this.collections.has(r2)) throw Error(n2(683) + r2 + `'`);
    var i2 = Z({ type: e3, atlasCollection: this.collections[n2(1276)](r2) }, t2);
    this.renderTypes.set(e3, i2);
  } }, { key: `getRenderTypeOpts`, value: function(e3) {
    return this.renderTypes.get(e3);
  } }, { key: `getAtlasCollection`, value: function(e3) {
    return this.collections.get(e3);
  } }, { key: `_cacheScratchCanvas`, value: function(e3) {
    var t2 = -1, n2 = -1, r2 = null;
    return function(i2, a2, o2, s2) {
      return s2 ? ((!r2 || a2 != t2 || o2 != n2) && (t2 = a2, n2 = o2, r2 = e3(i2, a2, o2)), r2) : e3(i2, a2, o2);
    };
  } }, { key: `_key`, value: function(e3, t2) {
    return e3 + `-` + t2;
  } }, { key: `invalidate`, value: function(e3) {
    var t2 = $, n2 = this, r2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i2 = r2[t2(540)], a2 = i2 === void 0 ? false : i2, o2 = r2.filterEle, c2 = o2 === void 0 ? function() {
      return true;
    } : o2, l2 = r2.filterType, u2 = l2 === void 0 ? function() {
      return true;
    } : l2, d2 = false, f2 = false, p2 = s(e3), m2;
    try {
      for (p2.s(); !(m2 = p2.n()).done; ) {
        var h2 = m2.value;
        if (c2(h2)) {
          var g2 = s(this.renderTypes.values()), _2;
          try {
            var v2 = function() {
              var e4 = t2, r3 = _2.value, i3 = r3.type;
              if (u2(i3)) {
                var o3 = n2.collections.get(r3.collection), s2 = r3.getKey(h2), c3 = Array[e4(341)](s2) ? s2 : [s2];
                if (a2) c3.forEach(function(e5) {
                  return o3.markKeyForGC(e5);
                }), f2 = true;
                else {
                  var l3 = r3.getID ? r3.getID(h2) : h2.id(), p3 = n2._key(i3, l3), m3 = n2.typeAndIdToKey.get(p3);
                  m3 !== void 0 && !ym(c3, m3) && (d2 = true, n2[e4(308)].delete(p3), m3.forEach(function(t3) {
                    return o3[e4(473)](t3);
                  }));
                }
              }
            };
            for (g2.s(); !(_2 = g2.n())[t2(814)]; ) v2();
          } catch (e4) {
            g2.e(e4);
          } finally {
            g2.f();
          }
        }
      }
    } catch (e4) {
      p2.e(e4);
    } finally {
      p2.f();
    }
    return f2 && (this.gc(), d2 = false), d2;
  } }, { key: `gc`, value: function() {
    var e3 = s(this.collections.values()), t2;
    try {
      for (e3.s(); !(t2 = e3.n()).done; ) t2.value.gc();
    } catch (t3) {
      e3.e(t3);
    } finally {
      e3.f();
    }
  } }, { key: `getOrCreateAtlas`, value: function(e3, t2, n2, r2) {
    var i2 = $, a2 = this[i2(1322)].get(t2), o2 = this.collections.get(a2.collection), s2 = false, c2 = o2[i2(975)](r2, n2, function(t3) {
      var r3 = i2;
      a2.drawClipped ? (t3[r3(444)](), t3.beginPath(), t3.rect(0, 0, n2.w, n2.h), t3.clip(), a2.drawElement(t3, e3, n2, true, true), t3.restore()) : a2[r3(695)](t3, e3, n2, true, true), s2 = true;
    });
    if (s2) {
      var l2 = a2.getID ? a2.getID(e3) : e3.id(), u2 = this._key(t2, l2);
      this.typeAndIdToKey.has(u2) ? this[i2(308)].get(u2).push(r2) : this[i2(308)].set(u2, [r2]);
    }
    return c2;
  } }, { key: `getAtlasInfo`, value: function(e3, t2) {
    var n2 = this, r2 = this.renderTypes.get(t2), i2 = r2.getKey(e3);
    return (Array.isArray(i2) ? i2 : [i2]).map(function(i3) {
      var a2 = $, o2 = r2.getBoundingBox(e3, i3), s2 = n2.getOrCreateAtlas(e3, t2, o2, i3), c2 = p(s2[a2(720)](i3), 2), l2 = c2[0];
      return { atlas: s2, tex: l2, tex1: l2, tex2: c2[1], bb: o2 };
    });
  } }, { key: `getDebugInfo`, value: function() {
    var e3 = [], t2 = s(this.collections), n2;
    try {
      for (t2.s(); !(n2 = t2.n()).done; ) {
        var r2 = p(n2.value, 2), i2 = r2[0], a2 = r2[1].getCounts(), o2 = a2.keyCount, c2 = a2.atlasCount;
        e3.push({ type: i2, keyCount: o2, atlasCount: c2 });
      }
    } catch (e4) {
      t2.e(e4);
    } finally {
      t2.f();
    }
    return e3;
  } }]);
})(), Um = (function() {
  var t2 = e;
  function n2(e2) {
    i(this, n2), this.globalOptions = e2, this.atlasSize = e2.webglTexSize, this.maxAtlasesPerBatch = e2.webglTexPerBatch, this.batchAtlases = [];
  }
  return o(n2, [{ key: `getMaxAtlasesPerBatch`, value: function() {
    return this.maxAtlasesPerBatch;
  } }, { key: t2(1380), value: function() {
    return this.atlasSize;
  } }, { key: `getIndexArray`, value: function() {
    return Array.from({ length: this.maxAtlasesPerBatch }, function(e2, t3) {
      return t3;
    });
  } }, { key: `startBatch`, value: function() {
    this.batchAtlases = [];
  } }, { key: `getAtlasCount`, value: function() {
    var e2 = t2;
    return this[e2(906)].length;
  } }, { key: t2(301), value: function() {
    return this.batchAtlases;
  } }, { key: `canAddToCurrentBatch`, value: function(e2) {
    return this.batchAtlases.length === this.maxAtlasesPerBatch ? this.batchAtlases.includes(e2) : true;
  } }, { key: `getAtlasIndexForBatch`, value: function(e2) {
    var n3 = t2, r2 = this.batchAtlases.indexOf(e2);
    if (r2 < 0) {
      if (this.batchAtlases[n3(441)] === this.maxAtlasesPerBatch) throw Error(`cannot add more atlases to batch`);
      this.batchAtlases.push(e2), r2 = this.batchAtlases.length - 1;
    }
    return r2;
  } }]);
})(), Wm = `
  float circleSD(vec2 p, float r) {
    return distance(vec2(0), p) - r; // signed distance
  }
`, Gm = `
  float rectangleSD(vec2 p, vec2 b) {
    vec2 d = abs(p)-b;
    return distance(vec2(0),max(d,0.0)) + min(max(d.x,d.y),0.0);
  }
`, Km = `
  float roundRectangleSD(vec2 p, vec2 b, vec4 cr) {
    cr.xy = (p.x > 0.0) ? cr.xy : cr.zw;
    cr.x  = (p.y > 0.0) ? cr.x  : cr.y;
    vec2 q = abs(p) - b + cr.x;
    return min(max(q.x, q.y), 0.0) + distance(vec2(0), max(q, 0.0)) - cr.x;
  }
`, qm = `
  float ellipseSD(vec2 p, vec2 ab) {
    p = abs( p ); // symmetry

    // find root with Newton solver
    vec2 q = ab*(p-ab);
    float w = (q.x<q.y)? 1.570796327 : 0.0;
    for( int i=0; i<5; i++ ) {
      vec2 cs = vec2(cos(w),sin(w));
      vec2 u = ab*vec2( cs.x,cs.y);
      vec2 v = ab*vec2(-cs.y,cs.x);
      w = w + dot(p-u,v)/(dot(p-u,u)+dot(v,v));
    }
    
    // compute final point and distance
    float d = length(p-ab*vec2(cos(w),sin(w)));
    
    // return signed distance
    return (dot(p/ab,p/ab)>1.0) ? d : -d;
  }
`, Jm = { SCREEN: { name: `screen`, screen: true }, PICKING: { name: `picking`, picking: true } }, Ym = { IGNORE: 1, USE_BB: 2 }, Xm = 0, Zm = 1, Qm = 2, $m = 3, eh = 4, th = 5, nh = 6, rh = 7, ih = (function() {
  var t2 = e;
  function n2(e2, t3, r2) {
    var a2 = $;
    i(this, n2), this.r = e2, this.gl = t3, this.maxInstances = r2.webglBatchSize, this.atlasSize = r2.webglTexSize, this[a2(891)] = r2[a2(891)], this[a2(1017)] = r2.webglDebug, this.batchDebugInfo = [], r2.enableWrapping = true, r2.createTextureCanvas = mm, this.atlasManager = new Hm(e2, r2), this.batchManager = new Um(r2), this.simpleShapeOptions = /* @__PURE__ */ new Map(), this.program = this._createShaderProgram(Jm.SCREEN), this.pickingProgram = this._createShaderProgram(Jm.PICKING), this[a2(1398)] = this[a2(1271)]();
  }
  return o(n2, [{ key: `addAtlasCollection`, value: function(e2, t3) {
    this.atlasManager.addAtlasCollection(e2, t3);
  } }, { key: `addTextureAtlasRenderType`, value: function(e2, t3) {
    this.atlasManager.addRenderType(e2, t3);
  } }, { key: t2(1008), value: function(e2, t3) {
    this.simpleShapeOptions.set(e2, t3);
  } }, { key: `invalidate`, value: function(e2) {
    var n3 = t2, r2 = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {})[n3(497)], i2 = this.atlasManager;
    return r2 ? i2.invalidate(e2, { filterType: function(e3) {
      return e3 === r2;
    }, forceRedraw: true }) : i2[n3(848)](e2);
  } }, { key: `gc`, value: function() {
    this.atlasManager.gc();
  } }, { key: `_createShaderProgram`, value: function(e2) {
    var n3 = t2, r2 = this.gl, i2 = n3(1181) + Xm + `) {
          float texX = aTex.x; // texture coordinates
          float texY = aTex.y;
          float texW = aTex.z;
          float texH = aTex.w;

          if(vid == 1 || vid == 2 || vid == 4) {
            texX += texW;
          }
          if(vid == 2 || vid == 4 || vid == 5) {
            texY += texH;
          }

          float d = float(uAtlasSize);
          vTexCoord = vec2(texX / d, texY / d); // tex coords must be between 0 and 1

          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);
        }
        else if(aVertType == ` + eh + ` || aVertType == ` + rh + ` 
             || aVertType == ` + th + ` || aVertType == ` + nh + n3(1225) + Zm + `) {
          vec2 source = aPointAPointB.xy;
          vec2 target = aPointAPointB.zw;

          // adjust the geometry so that the line is centered on the edge
          position.y = position.y - 0.5;

          // stretch the unit square into a long skinny rectangle
          vec2 xBasis = target - source;
          vec2 yBasis = normalize(vec2(-xBasis.y, xBasis.x));
          vec2 point = source + xBasis * position.x + yBasis * aLineWidth[0] * position.y;

          gl_Position = vec4(uPanZoomMatrix * vec3(point, 1.0), 1.0);
          vColor = aColor;
        } 
        else if(aVertType == ` + Qm + `) {
          vec2 pointA = aPointAPointB.xy;
          vec2 pointB = aPointAPointB.zw;
          vec2 pointC = aPointCPointD.xy;
          vec2 pointD = aPointCPointD.zw;

          // adjust the geometry so that the line is centered on the edge
          position.y = position.y - 0.5;

          vec2 p0, p1, p2, pos;
          if(position.x == 0.0) { // The left side of the unit square
            p0 = pointA;
            p1 = pointB;
            p2 = pointC;
            pos = position;
          } else { // The right side of the unit square, use same approach but flip the geometry upside down
            p0 = pointD;
            p1 = pointC;
            p2 = pointB;
            pos = vec2(0.0, -position.y);
          }

          vec2 p01 = p1 - p0;
          vec2 p12 = p2 - p1;
          vec2 p21 = p1 - p2;

          // Find the normal vector.
          vec2 tangent = normalize(normalize(p12) + normalize(p01));
          vec2 normal = vec2(-tangent.y, tangent.x);

          // Find the vector perpendicular to p0 -> p1.
          vec2 p01Norm = normalize(vec2(-p01.y, p01.x));

          // Determine the bend direction.
          float sigma = sign(dot(p01 + p21, normal));
          float width = aLineWidth[0];

          if(sign(pos.y) == -sigma) {
            // This is an intersecting vertex. Adjust the position so that there's no overlap.
            vec2 point = 0.5 * width * normal * -sigma / dot(normal, p01Norm);
            gl_Position = vec4(uPanZoomMatrix * vec3(p1 + point, 1.0), 1.0);
          } else {
            // This is a non-intersecting vertex. Treat it like a mitre join.
            vec2 point = 0.5 * width * normal * sigma * dot(normal, p01Norm);
            gl_Position = vec4(uPanZoomMatrix * vec3(p1 + point, 1.0), 1.0);
          }

          vColor = aColor;
        } 
        else if(aVertType == ` + $m + n3(449), a2 = this[n3(751)].getIndexArray(), o2 = pm(r2, i2, `#version 300 es
      precision highp float;

      // declare texture unit for each texture atlas in the batch
      ` + a2[n3(393)](function(e3) {
      return `uniform sampler2D uTexture` + e3 + `;`;
    }).join(`
	`) + `

      uniform vec4 uBGColor;
      uniform float uZoom;

      in vec2 vTexCoord;
      in vec4 vColor;
      in vec2 vPosition; // model coordinates

      flat in int vAtlasId;
      flat in vec4 vIndex;
      flat in int vVertType;
      flat in vec2 vTopRight;
      flat in vec2 vBotLeft;
      flat in vec4 vCornerRadius;
      flat in vec4 vBorderColor;
      flat in vec2 vBorderWidth;

      out vec4 outColor;

      ` + Wm + n3(1060) + Gm + `
      ` + Km + `
      ` + qm + n3(1351) + Xm + `) {
          // look up the texel from the texture unit
          ` + a2[n3(393)](function(e3) {
      return n3(336) + e3 + `) outColor = texture(uTexture` + e3 + `, vTexCoord);`;
    }).join(`
	else `) + `
        } 
        else if(vVertType == ` + $m + `) {
          // mimics how canvas renderer uses context.globalCompositeOperation = 'destination-out';
          outColor = blend(vColor, uBGColor);
          outColor.a = 1.0; // make opaque, masks out line under arrow
        }
        else if(vVertType == ` + eh + ` && vBorderWidth == vec2(0.0)) { // simple rectangle with no border
          outColor = vColor; // unit square is already transformed to the rectangle, nothing else needs to be done
        }
        else if(vVertType == ` + eh + ` || vVertType == ` + rh + ` 
          || vVertType == ` + th + ` || vVertType == ` + nh + `) { // use SDF

          float outerBorder = vBorderWidth[0];
          float innerBorder = vBorderWidth[1];
          float borderPadding = outerBorder * 2.0;
          float w = vTopRight.x - vBotLeft.x - borderPadding;
          float h = vTopRight.y - vBotLeft.y - borderPadding;
          vec2 b = vec2(w/2.0, h/2.0); // half width, half height
          vec2 p = vPosition - vec2(vTopRight.x - b[0] - outerBorder, vTopRight.y - b[1] - outerBorder); // translate to center

          float d; // signed distance
          if(vVertType == ` + eh + `) {
            d = rectangleSD(p, b);
          } else if(vVertType == ` + rh + ` && w == h) {
            d = circleSD(p, b.x); // faster than ellipse
          } else if(vVertType == ` + rh + n3(1070) + (e2.picking ? `if(outColor.a == 0.0) discard;
             else outColor = vIndex;` : ``) + `
      }
    `);
    o2.aPosition = r2.getAttribLocation(o2, n3(800)), o2.aIndex = r2.getAttribLocation(o2, `aIndex`), o2.aVertType = r2.getAttribLocation(o2, n3(767)), o2.aTransform = r2[n3(499)](o2, n3(1002)), o2.aAtlasId = r2.getAttribLocation(o2, `aAtlasId`), o2.aTex = r2.getAttribLocation(o2, `aTex`), o2.aPointAPointB = r2[n3(499)](o2, `aPointAPointB`), o2.aPointCPointD = r2[n3(499)](o2, `aPointCPointD`), o2[n3(622)] = r2.getAttribLocation(o2, `aLineWidth`), o2.aColor = r2.getAttribLocation(o2, `aColor`), o2.aCornerRadius = r2.getAttribLocation(o2, n3(421)), o2.aBorderColor = r2.getAttribLocation(o2, `aBorderColor`), o2.uPanZoomMatrix = r2.getUniformLocation(o2, `uPanZoomMatrix`), o2.uAtlasSize = r2.getUniformLocation(o2, `uAtlasSize`), o2.uBGColor = r2.getUniformLocation(o2, `uBGColor`), o2.uZoom = r2[n3(1132)](o2, `uZoom`), o2.uTextures = [];
    for (var s2 = 0; s2 < this.batchManager.getMaxAtlasesPerBatch(); s2++) o2.uTextures.push(r2[n3(1132)](o2, `uTexture` + s2));
    return o2;
  } }, { key: `_createVAO`, value: function() {
    var e2 = t2, n3 = [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1];
    this.vertexCount = n3[e2(441)] / 2;
    var r2 = this.maxInstances, i2 = this.gl, a2 = this.program, o2 = i2.createVertexArray();
    return i2.bindVertexArray(o2), Dm(i2, `vec2`, a2.aPosition, n3), this[e2(674)] = km(i2, r2, a2.aTransform), this.indexBuffer = Om(i2, r2, `vec4`, a2.aIndex), this[e2(964)] = Om(i2, r2, `int`, a2.aVertType), this[e2(602)] = Om(i2, r2, `int`, a2.aAtlasId), this.texBuffer = Om(i2, r2, `vec4`, a2.aTex), this.pointAPointBBuffer = Om(i2, r2, `vec4`, a2.aPointAPointB), this.pointCPointDBuffer = Om(i2, r2, `vec4`, a2[e2(1058)]), this.lineWidthBuffer = Om(i2, r2, `vec2`, a2.aLineWidth), this.colorBuffer = Om(i2, r2, `vec4`, a2.aColor), this.cornerRadiusBuffer = Om(i2, r2, `vec4`, a2[e2(421)]), this.borderColorBuffer = Om(i2, r2, `vec4`, a2[e2(658)]), i2.bindVertexArray(null), o2;
  } }, { key: `buffers`, get: function() {
    var e2 = t2, n3 = this;
    return this._buffers || (this[e2(1116)] = Object.keys(this).filter(function(t3) {
      return ee(t3, e2(219));
    }).map(function(e3) {
      return n3[e3];
    })), this._buffers;
  } }, { key: `startFrame`, value: function(e2) {
    var n3 = t2, r2 = arguments[n3(441)] > 1 && arguments[1] !== void 0 ? arguments[1] : Jm.SCREEN;
    this.panZoomMatrix = e2, this.renderTarget = r2, this.batchDebugInfo = [], this[n3(1295)] = 0, this.simpleCount = 0, this.startBatch();
  } }, { key: `startBatch`, value: function() {
    this.instanceCount = 0, this.batchManager.startBatch();
  } }, { key: `endFrame`, value: function() {
    var e2 = t2;
    this[e2(793)]();
  } }, { key: `_isVisible`, value: function(e2, n3) {
    var r2 = t2;
    return e2[r2(1404)]() ? n3 && n3[r2(867)] ? n3.isVisible(e2) : true : false;
  } }, { key: `drawTexture`, value: function(e2, n3, r2) {
    var i2 = t2, a2 = this.atlasManager, o2 = this.batchManager, c2 = a2.getRenderTypeOpts(r2);
    if (this._isVisible(e2, c2) && !(e2.isEdge() && !this[i2(1042)](e2))) {
      if (this.renderTarget[i2(823)] && c2.getTexPickingMode) {
        var l2 = c2.getTexPickingMode(e2);
        if (l2 === Ym[i2(558)]) return;
        if (l2 == Ym.USE_BB) {
          this[i2(889)](e2, n3, r2);
          return;
        }
      }
      var u2 = s(a2.getAtlasInfo(e2, r2)), d2;
      try {
        for (u2.s(); !(d2 = u2.n()).done; ) {
          var f2 = d2.value, m2 = f2.atlas, h2 = f2.tex1, g2 = f2[i2(985)];
          o2.canAddToCurrentBatch(m2) || this.endBatch();
          for (var _2 = o2.getAtlasIndexForBatch(m2), v2 = 0, y2 = [[h2, true], [g2, false]]; v2 < y2.length; v2++) {
            var b2 = p(y2[v2], 2), x2 = b2[0], S2 = b2[1];
            if (x2.w != 0) {
              var C2 = this.instanceCount;
              this[i2(964)].getView(C2)[0] = Xm, xm(n3, this.indexBuffer.getView(C2));
              var w2 = this.atlasIdBuffer.getView(C2);
              w2[0] = _2;
              var T2 = this[i2(334)][i2(626)](C2);
              T2[0] = x2.x, T2[1] = x2.y, T2[2] = x2.w, T2[3] = x2.h;
              var E2 = this[i2(674)].getMatrixView(C2);
              this.setTransformMatrix(e2, E2, c2, f2, S2), this.instanceCount++, S2 || this.wrappedCount++, this.instanceCount >= this[i2(1090)] && this.endBatch();
            }
          }
        }
      } catch (e3) {
        u2.e(e3);
      } finally {
        u2.f();
      }
    }
  } }, { key: t2(950), value: function(e2, n3, r2, i2) {
    var a2 = t2, o2 = arguments[a2(441)] > 4 && arguments[4] !== void 0 ? arguments[4] : true, s2 = 0;
    if (r2[a2(365)] && r2.shapeProps.padding && (s2 = e2.pstyle(r2.shapeProps.padding).pfValue), i2) {
      var c2 = i2.bb, l2 = i2.tex1, u2 = i2.tex2, d2 = l2.w / (l2.w + u2.w);
      o2 || (d2 = 1 - d2);
      var f2 = this._getAdjustedBB(c2, s2, o2, d2);
      this._applyTransformMatrix(n3, f2, r2, e2);
    } else {
      var p2 = r2.getBoundingBox(e2), m2 = this._getAdjustedBB(p2, s2, true, 1);
      this._applyTransformMatrix(n3, m2, r2, e2);
    }
  } }, { key: `_applyTransformMatrix`, value: function(e2, t3, n3, r2) {
    var i2, a2;
    Nm(e2);
    var o2 = n3.getRotation ? n3.getRotation(r2) : 0;
    if (o2 !== 0) {
      var s2 = n3.getRotationPoint(r2), c2 = s2.x, l2 = s2.y;
      Fm(e2, e2, [c2, l2]), Im(e2, e2, o2);
      var u2 = n3.getRotationOffset(r2);
      i2 = u2.x + (t3.xOffset || 0), a2 = u2.y + (t3.yOffset || 0);
    } else i2 = t3.x1, a2 = t3.y1;
    Fm(e2, e2, [i2, a2]), Lm(e2, e2, [t3.w, t3.h]);
  } }, { key: `_getAdjustedBB`, value: function(e2, t3, n3, r2) {
    var i2 = e2.x1, a2 = e2.y1, o2 = e2.w, s2 = e2.h, c2 = e2.yOffset;
    t3 && (i2 -= t3, a2 -= t3, o2 += 2 * t3, s2 += 2 * t3);
    var l2 = 0, u2 = o2 * r2;
    return n3 && r2 < 1 ? o2 = u2 : !n3 && r2 < 1 && (l2 = o2 - u2, i2 += l2, o2 = u2), { x1: i2, y1: a2, w: o2, h: s2, xOffset: l2, yOffset: c2 };
  } }, { key: `drawPickingRectangle`, value: function(e2, n3, r2) {
    var i2 = t2, a2 = this.atlasManager.getRenderTypeOpts(r2), o2 = this[i2(361)];
    this.vertTypeBuffer.getView(o2)[0] = eh, xm(n3, this.indexBuffer.getView(o2)), bm([0, 0, 0], 1, this.colorBuffer.getView(o2));
    var s2 = this.transformBuffer.getMatrixView(o2);
    this.setTransformMatrix(e2, s2, a2), this[i2(1321)]++, this.instanceCount++, this[i2(361)] >= this.maxInstances && this.endBatch();
  } }, { key: t2(498), value: function(e2, n3, r2) {
    var i2 = t2, a2 = this.simpleShapeOptions.get(r2);
    if (this[i2(829)](e2, a2)) {
      var o2 = a2.shapeProps, s2 = this._getVertTypeForShape(e2, o2.shape);
      if (s2 === void 0 || a2.isSimple && !a2.isSimple(e2, this.renderTarget)) {
        this.drawTexture(e2, n3, r2);
        return;
      }
      var c2 = this.instanceCount;
      if (this.vertTypeBuffer.getView(c2)[0] = s2, s2 === th || s2 === nh) {
        var l2 = a2.getBoundingBox(e2), u2 = this._getCornerRadius(e2, o2[i2(853)], l2), d2 = this.cornerRadiusBuffer.getView(c2);
        d2[0] = u2, d2[1] = u2, d2[2] = u2, d2[3] = u2, s2 === nh && (d2[0] = 0, d2[2] = 0);
      }
      xm(n3, this.indexBuffer[i2(626)](c2));
      var f2 = this.renderTarget.picking ? 1 : r2 === i2(507) ? e2.effectiveOpacity() : 1, p2 = this.renderTarget.picking ? 1 : e2.pstyle(o2.opacity).value * f2, m2 = e2[i2(1373)](o2.color).value;
      bm(m2, p2, this.colorBuffer.getView(c2));
      var h2 = this.lineWidthBuffer.getView(c2);
      if (h2[0] = 0, h2[1] = 0, o2.border) {
        var g2 = e2.pstyle(i2(519)).value;
        if (g2 > 0) {
          var _2 = e2.pstyle(i2(446)).value;
          bm(_2, f2 * e2.pstyle(i2(974)).value, this.borderColorBuffer.getView(c2));
          var v2 = e2.pstyle(`border-position`).value;
          if (v2 === `inside`) h2[0] = 0, h2[1] = -g2;
          else if (v2 === i2(1124)) h2[0] = g2, h2[1] = 0;
          else {
            var y2 = g2 / 2;
            h2[0] = y2, h2[1] = -y2;
          }
        }
      }
      var b2 = this[i2(674)].getMatrixView(c2);
      this.setTransformMatrix(e2, b2, a2), this[i2(1321)]++, this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
    }
  } }, { key: `_getVertTypeForShape`, value: function(e2, t3) {
    switch (e2.pstyle(t3).value) {
      case `rectangle`:
        return eh;
      case `ellipse`:
        return rh;
      case `roundrectangle`:
      case `round-rectangle`:
        return th;
      case `bottom-round-rectangle`:
        return nh;
      default:
        return;
    }
  } }, { key: `_getCornerRadius`, value: function(e2, n3, r2) {
    var i2 = t2, a2 = r2.w, o2 = r2.h;
    if (e2.pstyle(n3).value === i2(1037)) return jr(a2, o2);
    var s2 = e2.pstyle(n3).pfValue, c2 = a2 / 2, l2 = o2 / 2;
    return Math.min(s2, l2, c2);
  } }, { key: t2(1275), value: function(e2, n3, r2) {
    var i2 = t2;
    if (e2.visible()) {
      var a2 = e2[i2(820)].rscratch, o2, s2, c2;
      if (r2 === `source` ? (o2 = a2[i2(418)], s2 = a2[i2(1218)], c2 = a2.srcArrowAngle) : (o2 = a2.arrowEndX, s2 = a2.arrowEndY, c2 = a2.tgtArrowAngle), !(isNaN(o2) || o2 == null || isNaN(s2) || s2 == null || isNaN(c2) || c2 == null) && e2.pstyle(r2 + `-arrow-shape`).value !== `none`) {
        var l2 = e2[i2(1373)](r2 + i2(1272)).value, u2 = e2.pstyle(`opacity`)[i2(1310)] * e2.pstyle(i2(1364)).value, d2 = e2.pstyle(i2(901)).pfValue, f2 = e2.pstyle(i2(572)).value, p2 = this.r.getArrowWidth(d2, f2), m2 = this.instanceCount, h2 = this[i2(674)].getMatrixView(m2);
        Nm(h2), Fm(h2, h2, [o2, s2]), Lm(h2, h2, [p2, p2]), Im(h2, h2, c2), this.vertTypeBuffer.getView(m2)[0] = $m, xm(n3, this[i2(1285)].getView(m2)), bm(l2, u2, this.colorBuffer[i2(626)](m2)), this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
      }
    }
  } }, { key: `drawEdgeLine`, value: function(e2, n3) {
    var r2 = t2;
    if (e2.visible()) {
      var i2 = this._getEdgePoints(e2);
      if (i2) {
        var a2 = e2.pstyle(`opacity`).value, o2 = e2.pstyle(r2(1364)).value, s2 = e2.pstyle(`width`).pfValue, c2 = e2.pstyle(`line-color`).value, l2 = a2 * o2;
        if (i2.length / 2 + this.instanceCount > this[r2(1090)] && this.endBatch(), i2.length == 4) {
          var u2 = this.instanceCount;
          this.vertTypeBuffer.getView(u2)[0] = Zm, xm(n3, this.indexBuffer.getView(u2)), bm(c2, l2, this.colorBuffer.getView(u2));
          var d2 = this[r2(1267)].getView(u2);
          d2[0] = s2;
          var f2 = this.pointAPointBBuffer.getView(u2);
          f2[0] = i2[0], f2[1] = i2[1], f2[2] = i2[2], f2[3] = i2[3], this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
        } else for (var p2 = 0; p2 < i2[r2(441)] - 2; p2 += 2) {
          var m2 = this.instanceCount;
          this.vertTypeBuffer[r2(626)](m2)[0] = Qm, xm(n3, this.indexBuffer.getView(m2)), bm(c2, l2, this.colorBuffer[r2(626)](m2));
          var h2 = this.lineWidthBuffer.getView(m2);
          h2[0] = s2;
          var g2 = i2[p2 - 2], _2 = i2[p2 - 1], v2 = i2[p2], y2 = i2[p2 + 1], b2 = i2[p2 + 2], x2 = i2[p2 + 3], S2 = i2[p2 + 4], C2 = i2[p2 + 5];
          p2 == 0 && (g2 = 2 * v2 - b2 + 1e-3, _2 = 2 * y2 - x2 + 1e-3), p2 == i2.length - 4 && (S2 = 2 * b2 - v2 + 1e-3, C2 = 2 * x2 - y2 + 1e-3);
          var w2 = this[r2(1195)].getView(m2);
          w2[0] = g2, w2[1] = _2, w2[2] = v2, w2[3] = y2;
          var T2 = this.pointCPointDBuffer.getView(m2);
          T2[0] = b2, T2[1] = x2, T2[2] = S2, T2[3] = C2, this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
        }
      }
    }
  } }, { key: `_isValidEdge`, value: function(e2) {
    var n3 = t2, r2 = e2._private[n3(1151)];
    return !(r2.badLine || r2[n3(451)] == null || isNaN(r2.allpts[0]));
  } }, { key: t2(1247), value: function(e2) {
    var n3 = t2, r2 = e2._private[n3(1151)];
    if (this._isValidEdge(e2)) {
      var i2 = r2.allpts;
      if (i2.length == 4) return i2;
      var a2 = this._getNumSegments(e2);
      return this._getCurveSegmentPoints(i2, a2);
    }
  } }, { key: `_getNumSegments`, value: function(e2) {
    return Math.min(15, this.maxInstances);
  } }, { key: `_getCurveSegmentPoints`, value: function(e2, t3) {
    if (e2.length == 4) return e2;
    for (var n3 = Array((t3 + 1) * 2), r2 = 0; r2 <= t3; r2++) if (r2 == 0) n3[0] = e2[0], n3[1] = e2[1];
    else if (r2 == t3) n3[r2 * 2] = e2[e2.length - 2], n3[r2 * 2 + 1] = e2[e2.length - 1];
    else {
      var i2 = r2 / t3;
      this._setCurvePoint(e2, i2, n3, r2 * 2);
    }
    return n3;
  } }, { key: `_setCurvePoint`, value: function(e2, t3, n3, r2) {
    if (e2.length <= 2) n3[r2] = e2[0], n3[r2 + 1] = e2[1];
    else {
      for (var i2 = Array(e2.length - 2), a2 = 0; a2 < i2.length; a2 += 2) {
        var o2 = (1 - t3) * e2[a2] + t3 * e2[a2 + 2], s2 = (1 - t3) * e2[a2 + 1] + t3 * e2[a2 + 3];
        i2[a2] = o2, i2[a2 + 1] = s2;
      }
      return this._setCurvePoint(i2, t3, n3, r2);
    }
  } }, { key: t2(793), value: function() {
    var e2 = t2, n3 = this.gl, r2 = this.vao, i2 = this.vertexCount, a2 = this.instanceCount;
    if (a2 !== 0) {
      var o2 = this.renderTarget.picking ? this[e2(485)] : this.program;
      n3.useProgram(o2), n3[e2(609)](r2);
      var c2 = s(this[e2(970)]), l2;
      try {
        for (c2.s(); !(l2 = c2.n()).done; ) l2[e2(1310)].bufferSubData(a2);
      } catch (e3) {
        c2.e(e3);
      } finally {
        c2.f();
      }
      for (var u2 = this.batchManager.getAtlases(), d2 = 0; d2 < u2.length; d2++) u2[d2].bufferIfNeeded(n3);
      for (var f2 = 0; f2 < u2.length; f2++) n3.activeTexture(n3.TEXTURE0 + f2), n3.bindTexture(n3[e2(953)], u2[f2].texture), n3[e2(1245)](o2[e2(1224)][f2], f2);
      n3.uniform1f(o2.uZoom, gm(this.r)), n3.uniformMatrix3fv(o2.uPanZoomMatrix, false, this[e2(824)]), n3.uniform1i(o2.uAtlasSize, this[e2(751)].getAtlasSize());
      var p2 = bm(this.bgColor, 1);
      n3.uniform4fv(o2.uBGColor, p2), n3[e2(961)](n3.TRIANGLES, 0, i2, a2), n3[e2(609)](null), n3[e2(1127)](n3.TEXTURE_2D, null), this.debug && this.batchDebugInfo.push({ count: a2, atlasCount: u2.length }), this[e2(1291)]();
    }
  } }, { key: `getDebugInfo`, value: function() {
    var e2 = t2, n3 = this[e2(450)].getDebugInfo(), r2 = n3.reduce(function(e3, t3) {
      return e3 + t3.atlasCount;
    }, 0), i2 = this.batchDebugInfo, a2 = i2.reduce(function(e3, t3) {
      return e3 + t3.count;
    }, 0);
    return { atlasInfo: n3, totalAtlases: r2, wrappedCount: this.wrappedCount, simpleCount: this.simpleCount, batchCount: i2.length, batchInfo: i2, totalInstances: a2 };
  } }]);
})(), ah = {};
ah.initWebgl = function(t2, n2) {
  var r2 = e, i2 = this, a2 = i2.data.contexts[i2.WEBGL];
  t2.bgColor = oh(i2), t2.webglTexSize = Math.min(t2.webglTexSize, a2.getParameter(a2.MAX_TEXTURE_SIZE)), t2.webglTexRows = Math.min(t2[r2(428)], 54), t2.webglTexRowsNodes = Math.min(t2.webglTexRowsNodes, 54), t2.webglBatchSize = Math[r2(1120)](t2.webglBatchSize, 16384), t2.webglTexPerBatch = Math.min(t2.webglTexPerBatch, a2.getParameter(a2.MAX_TEXTURE_IMAGE_UNITS)), i2.webglDebug = t2.webglDebug, i2.webglDebugShowAtlases = t2[r2(468)], i2.pickingFrameBuffer = Am(a2), i2.pickingFrameBuffer.needsDraw = true, i2.drawing = new ih(i2, a2, t2);
  var o2 = function(e2) {
    return function(t3) {
      return i2[$(836)](t3, e2);
    };
  }, s2 = function(e2) {
    return function(t3) {
      var n3 = t3[$(1373)](e2);
      return n3 && n3.value;
    };
  }, c2 = function(e2) {
    return function(t3) {
      var n3 = $;
      return t3.pstyle(e2 + n3(862))[n3(1310)] > 0;
    };
  }, l2 = function(e2) {
    return e2.pstyle(`text-events`).strValue === `yes` ? Ym.USE_BB : Ym.IGNORE;
  }, u2 = function(e2) {
    var t3 = e2.position(), n3 = t3.x, r3 = t3.y, i3 = e2.outerWidth(), a3 = e2.outerHeight();
    return { w: i3, h: a3, x1: n3 - i3 / 2, y1: r3 - a3 / 2 };
  };
  i2.drawing.addAtlasCollection(`node`, { texRows: t2.webglTexRowsNodes }), i2.drawing.addAtlasCollection(r2(1220), { texRows: t2.webglTexRows }), i2.drawing.addTextureAtlasRenderType(`node-body`, { collection: `node`, getKey: n2[r2(868)], getBoundingBox: n2.getElementBox, drawElement: n2.drawElement }), i2.drawing.addSimpleShapeRenderType(r2(507), { getBoundingBox: u2, isSimple: vm, shapeProps: { shape: r2(762), color: `background-color`, opacity: `background-opacity`, radius: `corner-radius`, border: true } }), i2.drawing.addSimpleShapeRenderType(`node-overlay`, { getBoundingBox: u2, isVisible: c2(`overlay`), shapeProps: { shape: `overlay-shape`, color: `overlay-color`, opacity: r2(282), padding: `overlay-padding`, radius: `overlay-corner-radius` } }), i2.drawing.addSimpleShapeRenderType(`node-underlay`, { getBoundingBox: u2, isVisible: c2(`underlay`), shapeProps: { shape: `underlay-shape`, color: `underlay-color`, opacity: `underlay-opacity`, padding: `underlay-padding`, radius: r2(349) } }), i2[r2(1129)].addTextureAtlasRenderType(`label`, { collection: `label`, getTexPickingMode: l2, getKey: ch(n2.getLabelKey, null), getBoundingBox: lh(n2.getLabelBox, null), drawClipped: true, drawElement: n2.drawLabel, getRotation: o2(null), getRotationPoint: n2.getLabelRotationPoint, getRotationOffset: n2.getLabelRotationOffset, isVisible: s2(`label`) }), i2[r2(1129)].addTextureAtlasRenderType(`edge-source-label`, { collection: `label`, getTexPickingMode: l2, getKey: ch(n2.getSourceLabelKey, r2(1256)), getBoundingBox: lh(n2.getSourceLabelBox, `source`), drawClipped: true, drawElement: n2.drawSourceLabel, getRotation: o2(`source`), getRotationPoint: n2.getSourceLabelRotationPoint, getRotationOffset: n2.getSourceLabelRotationOffset, isVisible: s2(r2(289)) }), i2.drawing.addTextureAtlasRenderType(`edge-target-label`, { collection: `label`, getTexPickingMode: l2, getKey: ch(n2[r2(564)], r2(1192)), getBoundingBox: lh(n2.getTargetLabelBox, `target`), drawClipped: true, drawElement: n2.drawTargetLabel, getRotation: o2(`target`), getRotationPoint: n2.getTargetLabelRotationPoint, getRotationOffset: n2.getTargetLabelRotationOffset, isVisible: s2(`target-label`) });
  var d2 = st(function() {
    console.log(r2(936)), i2.data.gc = true;
  }, 1e4);
  i2.onUpdateEleCalcs(function(e2, t3) {
    var n3 = false;
    t3 && t3.length > 0 && (n3 |= i2.drawing.invalidate(t3)), n3 && d2();
  }), uh(i2);
};
function oh(t2) {
  var n2 = e, r2 = t2.cy[n2(721)]();
  return pe(r2 && r2.style && r2[n2(1353)].backgroundColor || `white`);
}
function sh(t2, n2) {
  var r2 = t2[e(820)].rscratch;
  return Xt(r2, `labelWrapCachedLines`, n2) || [];
}
var ch = function(e2, t2) {
  return function(n2) {
    var r2 = $, i2 = e2(n2), a2 = sh(n2, t2);
    return a2.length > 1 ? a2[r2(393)](function(e3, t3) {
      return i2 + `_` + t3;
    }) : i2;
  };
}, lh = function(e2, t2) {
  return function(n2, r2) {
    var i2 = $, a2 = e2(n2);
    if (typeof r2 == `string`) {
      var o2 = r2.indexOf(`_`);
      if (o2 > 0) {
        var s2 = Number(r2.substring(o2 + 1)), c2 = sh(n2, t2), l2 = a2.h / c2[i2(441)], u2 = l2 * s2, d2 = a2.y1 + u2;
        return { x1: a2.x1, w: a2.w, y1: d2, h: l2, yOffset: u2 };
      }
    }
    return a2;
  };
};
function uh(t2) {
  var n2 = e, r2 = t2.render;
  t2.render = function(e2) {
    var n3 = $;
    e2 || (e2 = {});
    var i3 = t2.cy;
    t2[n3(1410)] && (i3[n3(1242)]() > ip ? (dh(t2), r2.call(t2, e2)) : (fh(t2), xh(t2, e2, Jm.SCREEN)));
  };
  var i2 = t2.matchCanvasSize;
  t2.matchCanvasSize = function(e2) {
    var n3 = $;
    i2.call(t2, e2), t2[n3(816)].setFramebufferAttachmentSizes(t2.canvasWidth, t2.canvasHeight), t2[n3(816)].needsDraw = true;
  }, t2.findNearestElements = function(e2, n3, r3, i3) {
    return yh(t2, e2, n3);
  };
  var a2 = t2.invalidateCachedZSortedEles;
  t2.invalidateCachedZSortedEles = function() {
    var e2 = $;
    a2.call(t2), t2.pickingFrameBuffer[e2(1196)] = true;
  };
  var o2 = t2[n2(541)];
  t2[n2(541)] = function(e2, r3) {
    var i3 = n2;
    o2.call(t2, e2, r3), e2 === `viewport` || e2 === `bounds` ? t2.pickingFrameBuffer.needsDraw = true : e2 === `background` && t2[i3(1129)].invalidate(r3, { type: `node-body` });
  };
}
function dh(e2) {
  var t2 = e2.data.contexts[e2.WEBGL];
  t2.clear(t2.COLOR_BUFFER_BIT | t2.DEPTH_BUFFER_BIT);
}
function fh(t2) {
  var n2 = e, r2 = function(e2) {
    e2.save(), e2.setTransform(1, 0, 0, 1, 0, 0), e2.clearRect(0, 0, t2.canvasWidth, t2.canvasHeight), e2.restore();
  };
  r2(t2.data.contexts[t2.NODE]), r2(t2[n2(1036)][n2(570)][t2.DRAG]);
}
function ph(e2) {
  var t2 = e2.canvasWidth, n2 = e2.canvasHeight, r2 = hm(e2), i2 = r2.pan, a2 = r2.zoom, o2 = Mm();
  Fm(o2, o2, [i2.x, i2.y]), Lm(o2, o2, [a2, a2]);
  var s2 = Mm();
  Rm(s2, t2, n2);
  var c2 = Mm();
  return Pm(c2, s2, o2), c2;
}
function mh(e2, t2) {
  var n2 = e2.canvasWidth, r2 = e2.canvasHeight, i2 = hm(e2), a2 = i2.pan, o2 = i2.zoom;
  t2.setTransform(1, 0, 0, 1, 0, 0), t2.clearRect(0, 0, n2, r2), t2.translate(a2.x, a2.y), t2.scale(o2, o2);
}
function hh(e2, t2) {
  e2.drawSelectionRectangle(t2, function(t3) {
    return mh(e2, t3);
  });
}
function gh(t2) {
  var n2 = e, r2 = t2.data.contexts[t2.NODE];
  r2.save(), mh(t2, r2), r2[n2(647)] = `rgba(0, 0, 0, 0.3)`, r2.beginPath(), r2.moveTo(-1e3, 0), r2.lineTo(1e3, 0), r2.stroke(), r2[n2(887)](), r2.moveTo(0, -1e3), r2[n2(382)](0, 1e3), r2.stroke(), r2.restore();
}
function _h(t2) {
  var n2 = e, r2 = function(e2, n3, r3) {
    for (var i3 = $, a2 = e2.atlasManager.getAtlasCollection(n3), o2 = t2.data.contexts[t2[i3(894)]], s2 = a2.atlases, c2 = 0; c2 < s2.length; c2++) {
      var l2 = s2[c2].canvas;
      if (l2) {
        var u2 = l2[i3(901)], d2 = l2[i3(1363)], f2 = u2 * c2, p2 = l2.height * r3, m2 = 0.4;
        o2.save(), o2.scale(m2, m2), o2.drawImage(l2, f2, p2), o2.strokeStyle = i3(640), o2.rect(f2, p2, u2, d2), o2.stroke(), o2.restore();
      }
    }
  }, i2 = 0;
  r2(t2.drawing, n2(1290), i2++), r2(t2.drawing, n2(1220), i2++);
}
function vh(t2, n2, r2, i2, a2) {
  var o2 = e, s2, c2, l2, u2, d2 = hm(t2), f2 = d2.pan, m2 = d2.zoom, h2 = p(_m(t2, f2, m2, n2, r2), 2), g2 = h2[0], _2 = h2[1], v2 = 6;
  if (s2 = g2 - v2 / 2, c2 = _2 - v2 / 2, l2 = v2, u2 = v2, l2 === 0 || u2 === 0) return [];
  var y2 = t2.data.contexts[t2.WEBGL];
  y2.bindFramebuffer(y2[o2(1138)], t2[o2(816)]), t2.pickingFrameBuffer.needsDraw && (y2.viewport(0, 0, y2.canvas[o2(901)], y2.canvas.height), xh(t2, null, Jm[o2(200)]), t2.pickingFrameBuffer.needsDraw = false);
  var b2 = l2 * u2, x2 = new Uint8Array(b2 * 4);
  y2.readPixels(s2, c2, l2, u2, y2.RGBA, y2.UNSIGNED_BYTE, x2), y2.bindFramebuffer(y2[o2(1138)], null);
  for (var S2 = /* @__PURE__ */ new Set(), C2 = 0; C2 < b2; C2++) {
    var w2 = Sm(x2.slice(C2 * 4, C2 * 4 + 4)) - 1;
    w2 >= 0 && S2.add(w2);
  }
  return S2;
}
function yh(e2, t2, n2) {
  var r2 = vh(e2, t2, n2), i2 = e2.getCachedZSortedEles(), a2, o2, c2 = s(r2), l2;
  try {
    for (c2.s(); !(l2 = c2.n()).done; ) {
      var u2 = i2[l2.value];
      if (!a2 && u2.isNode() && (a2 = u2), !o2 && u2.isEdge() && (o2 = u2), a2 && o2) break;
    }
  } catch (e3) {
    c2.e(e3);
  } finally {
    c2.f();
  }
  return [a2, o2].filter(Boolean);
}
function bh(t2, n2, r2) {
  var i2 = e, a2 = t2.drawing;
  n2 += 1, r2[i2(704)]() ? (a2.drawNode(r2, n2, `node-underlay`), a2.drawNode(r2, n2, i2(507)), a2.drawTexture(r2, n2, `label`), a2.drawNode(r2, n2, i2(973))) : (a2[i2(826)](r2, n2), a2.drawEdgeArrow(r2, n2, i2(1256)), a2.drawEdgeArrow(r2, n2, i2(1192)), a2.drawTexture(r2, n2, `label`), a2[i2(318)](r2, n2, `edge-source-label`), a2.drawTexture(r2, n2, `edge-target-label`));
}
function xh(t2, n2, r2) {
  var i2 = e, a2;
  t2.webglDebug && (a2 = performance[i2(231)]());
  var o2 = t2.drawing, c2 = 0;
  if (r2.screen && t2.data.canvasNeedsRedraw[t2.SELECT_BOX] && hh(t2, n2), t2[i2(1036)].canvasNeedsRedraw[t2.NODE] || r2.picking) {
    var l2 = t2.data.contexts[t2.WEBGL];
    r2.screen ? (l2.clearColor(0, 0, 0, 0), l2[i2(263)](l2.BLEND), l2[i2(376)](l2.ONE, l2.ONE_MINUS_SRC_ALPHA)) : l2.disable(l2.BLEND), l2.clear(l2.COLOR_BUFFER_BIT | l2[i2(638)]), l2.viewport(0, 0, l2.canvas.width, l2.canvas.height);
    var u2 = ph(t2), d2 = t2[i2(489)]();
    if (c2 = d2.length, o2.startFrame(u2, r2), r2.screen) {
      for (var f2 = 0; f2 < d2.nondrag.length; f2++) bh(t2, f2, d2.nondrag[f2]);
      for (var p2 = 0; p2 < d2.drag.length; p2++) bh(t2, p2, d2[i2(663)][p2]);
    } else if (r2[i2(823)]) for (var m2 = 0; m2 < d2.length; m2++) bh(t2, m2, d2[m2]);
    o2.endFrame(), r2.screen && t2[i2(468)] && (gh(t2), _h(t2)), t2.data.canvasNeedsRedraw[t2.NODE] = false, t2.data.canvasNeedsRedraw[t2.DRAG] = false;
  }
  if (t2.webglDebug) {
    var h2 = performance[i2(231)](), g2 = false, _2 = Math.ceil(h2 - a2), v2 = o2.getDebugInfo(), y2 = [c2 + ` elements`, v2.totalInstances + ` instances`, v2.batchCount + ` batches`, v2.totalAtlases + ` atlases`, v2.wrappedCount + ` wrapped textures`, v2.simpleCount + ` simple shapes`].join(`, `);
    if (g2) console.log(`WebGL (` + r2.name + i2(1019) + _2 + `ms, ` + y2);
    else {
      console.log(`WebGL (` + r2[i2(958)] + `) - frame time ` + _2 + `ms`), console.log(`Totals:`), console.log(`  ` + y2), console.log(`Texture Atlases Used:`);
      var b2 = v2.atlasInfo, x2 = s(b2), S2;
      try {
        for (x2.s(); !(S2 = x2.n())[i2(814)]; ) {
          var C2 = S2.value;
          console.log(`  ` + C2.type + `: ` + C2.keyCount + i2(843) + C2.atlasCount + ` atlases`);
        }
      } catch (e2) {
        x2.e(e2);
      } finally {
        x2.f();
      }
      console.log(``);
    }
  }
  t2[i2(1036)].gc && (console.log(`Garbage Collect!`), t2.data.gc = false, o2.gc());
}
var Sh = {};
Sh.drawPolygonPath = function(t2, n2, r2, i2, a2, o2) {
  var s2 = e, c2 = i2 / 2, l2 = a2 / 2;
  t2.beginPath && t2.beginPath(), t2[s2(536)](n2 + c2 * o2[0], r2 + l2 * o2[1]);
  for (var u2 = 1; u2 < o2.length / 2; u2++) t2[s2(382)](n2 + c2 * o2[u2 * 2], r2 + l2 * o2[u2 * 2 + 1]);
  t2.closePath();
}, Sh.drawRoundPolygonPath = function(e2, t2, n2, r2, i2, a2, o2) {
  o2.forEach(function(t3) {
    return Sf(e2, t3);
  }), e2.closePath();
}, Sh.drawRoundRectanglePath = function(e2, t2, n2, r2, i2, a2) {
  var o2 = r2 / 2, s2 = i2 / 2, c2 = a2 === `auto` ? jr(r2, i2) : Math.min(a2, s2, o2);
  e2.beginPath && e2.beginPath(), e2.moveTo(t2, n2 - s2), e2.arcTo(t2 + o2, n2 - s2, t2 + o2, n2, c2), e2.arcTo(t2 + o2, n2 + s2, t2, n2 + s2, c2), e2.arcTo(t2 - o2, n2 + s2, t2 - o2, n2, c2), e2.arcTo(t2 - o2, n2 - s2, t2, n2 - s2, c2), e2.lineTo(t2, n2 - s2), e2.closePath();
}, Sh.drawBottomRoundRectanglePath = function(t2, n2, r2, i2, a2, o2) {
  var s2 = e, c2 = i2 / 2, l2 = a2 / 2, u2 = o2 === `auto` ? jr(i2, a2) : o2;
  t2.beginPath && t2.beginPath(), t2[s2(536)](n2, r2 - l2), t2.lineTo(n2 + c2, r2 - l2), t2.lineTo(n2 + c2, r2), t2.arcTo(n2 + c2, r2 + l2, n2, r2 + l2, u2), t2.arcTo(n2 - c2, r2 + l2, n2 - c2, r2, u2), t2.lineTo(n2 - c2, r2 - l2), t2.lineTo(n2, r2 - l2), t2.closePath();
}, Sh.drawCutRectanglePath = function(t2, n2, r2, i2, a2, o2, s2) {
  var c2 = e, l2 = i2 / 2, u2 = a2 / 2, d2 = s2 === `auto` ? Nr() : s2;
  t2.beginPath && t2.beginPath(), t2.moveTo(n2 - l2 + d2, r2 - u2), t2.lineTo(n2 + l2 - d2, r2 - u2), t2.lineTo(n2 + l2, r2 - u2 + d2), t2.lineTo(n2 + l2, r2 + u2 - d2), t2.lineTo(n2 + l2 - d2, r2 + u2), t2[c2(382)](n2 - l2 + d2, r2 + u2), t2.lineTo(n2 - l2, r2 + u2 - d2), t2.lineTo(n2 - l2, r2 - u2 + d2), t2.closePath();
}, Sh.drawBarrelPath = function(t2, n2, r2, i2, a2) {
  var o2 = e, s2 = i2 / 2, c2 = a2 / 2, l2 = n2 - s2, u2 = n2 + s2, d2 = r2 - c2, f2 = r2 + c2, p2 = Fr(i2, a2), m2 = p2[o2(604)], h2 = p2.heightOffset, g2 = p2.ctrlPtOffsetPct * m2;
  t2.beginPath && t2.beginPath(), t2.moveTo(l2, d2 + h2), t2.lineTo(l2, f2 - h2), t2[o2(249)](l2 + g2, f2, l2 + m2, f2), t2.lineTo(u2 - m2, f2), t2.quadraticCurveTo(u2 - g2, f2, u2, f2 - h2), t2[o2(382)](u2, d2 + h2), t2.quadraticCurveTo(u2 - g2, d2, u2 - m2, d2), t2[o2(382)](l2 + m2, d2), t2.quadraticCurveTo(l2 + g2, d2, l2, d2 + h2), t2.closePath();
};
for (var Ch = Math.sin(0), wh = Math.cos(0), Th = {}, Eh = {}, Dh = Math.PI / 40, Oh = 0 * Math.PI; Oh < 2 * Math.PI; Oh += Dh) Th[Oh] = Math.sin(Oh), Eh[Oh] = Math.cos(Oh);
Sh.drawEllipsePath = function(t2, n2, r2, i2, a2) {
  var o2 = e;
  if (t2.beginPath && t2.beginPath(), t2[o2(789)]) t2.ellipse(n2, r2, i2 / 2, a2 / 2, 0, 0, 2 * Math.PI);
  else for (var s2, c2, l2 = i2 / 2, u2 = a2 / 2, d2 = 0 * Math.PI; d2 < 2 * Math.PI; d2 += Dh) s2 = n2 - l2 * Th[d2] * Ch + l2 * Eh[d2] * wh, c2 = r2 + u2 * Eh[d2] * Ch + u2 * Th[d2] * wh, d2 === 0 ? t2.moveTo(s2, c2) : t2.lineTo(s2, c2);
  t2[o2(1274)]();
};
var kh = {};
kh.createBuffer = function(t2, n2) {
  var r2 = e, i2 = document.createElement(`canvas`);
  return i2[r2(901)] = t2, i2.height = n2, [i2, i2.getContext(`2d`)];
}, kh.bufferCanvasImage = function(t2) {
  var n2 = e, r2 = this.cy, i2 = r2.mutableElements().boundingBox(), a2 = this.findContainerClientCoords(), o2 = t2[n2(1209)] ? Math[n2(1424)](i2.w) : a2[2], s2 = t2.full ? Math.ceil(i2.h) : a2[3], c2 = j(t2.maxWidth) || j(t2.maxHeight), l2 = this.getPixelRatio(), u2 = 1;
  if (t2.scale !== void 0) o2 *= t2.scale, s2 *= t2.scale, u2 = t2.scale;
  else if (c2) {
    var d2 = 1 / 0, f2 = 1 / 0;
    j(t2[n2(920)]) && (d2 = u2 * t2.maxWidth / o2), j(t2.maxHeight) && (f2 = u2 * t2.maxHeight / s2), u2 = Math.min(d2, f2), o2 *= u2, s2 *= u2;
  }
  c2 || (o2 *= l2, s2 *= l2, u2 *= l2);
  var p2 = document.createElement(n2(224));
  p2[n2(901)] = o2, p2.height = s2, p2.style[n2(901)] = o2 + `px`, p2.style.height = s2 + `px`;
  var m2 = p2.getContext(`2d`);
  if (o2 > 0 && s2 > 0) {
    m2.clearRect(0, 0, o2, s2), m2.globalCompositeOperation = `source-over`;
    var h2 = this.getCachedZSortedEles();
    if (t2.full) m2.translate(-i2.x1 * u2, -i2.y1 * u2), m2.scale(u2, u2), this.drawElements(m2, h2), m2.scale(1 / u2, 1 / u2), m2[n2(434)](i2.x1 * u2, i2.y1 * u2);
    else {
      var g2 = r2.pan(), _2 = { x: g2.x * u2, y: g2.y * u2 };
      u2 *= r2.zoom(), m2.translate(_2.x, _2.y), m2.scale(u2, u2), this.drawElements(m2, h2), m2.scale(1 / u2, 1 / u2), m2[n2(434)](-_2.x, -_2.y);
    }
    t2.bg && (m2.globalCompositeOperation = `destination-over`, m2.fillStyle = t2.bg, m2.rect(0, 0, o2, s2), m2[n2(1080)]());
  }
  return p2;
};
function Ah(e2, t2) {
  for (var n2 = atob(e2), r2 = new ArrayBuffer(n2.length), i2 = new Uint8Array(r2), a2 = 0; a2 < n2.length; a2++) i2[a2] = n2.charCodeAt(a2);
  return new Blob([r2], { type: t2 });
}
function jh(e2) {
  var t2 = e2.indexOf(`,`);
  return e2.substr(t2 + 1);
}
function Mh(t2, n2, r2) {
  var i2 = e, a2 = function() {
    return n2.toDataURL(r2, t2.quality);
  };
  switch (t2.output) {
    case i2(1408):
      return new fa(function(e2, i3) {
        try {
          n2.toBlob(function(t3) {
            t3 == null ? i3(Error("`canvas.toBlob()` sent a null value in its callback")) : e2(t3);
          }, r2, t2.quality);
        } catch (e3) {
          i3(e3);
        }
      });
    case `blob`:
      return Ah(jh(a2()), r2);
    case `base64`:
      return jh(a2());
    default:
      return a2();
  }
}
kh[e(283)] = function(e2) {
  return Mh(e2, this.bufferCanvasImage(e2), `image/png`);
}, kh.jpg = function(t2) {
  var n2 = e;
  return Mh(t2, this[n2(1153)](t2), `image/jpeg`);
};
var Nh = {};
Nh.nodeShapeImpl = function(t2, n2, r2, i2, a2, o2, s2, c2) {
  var l2 = e;
  switch (t2) {
    case `ellipse`:
      return this.drawEllipsePath(n2, r2, i2, a2, o2);
    case l2(532):
      return this.drawPolygonPath(n2, r2, i2, a2, o2, s2);
    case `round-polygon`:
      return this.drawRoundPolygonPath(n2, r2, i2, a2, o2, s2, c2);
    case `roundrectangle`:
    case `round-rectangle`:
      return this.drawRoundRectanglePath(n2, r2, i2, a2, o2, c2);
    case `cutrectangle`:
    case `cut-rectangle`:
      return this.drawCutRectanglePath(n2, r2, i2, a2, o2, s2, c2);
    case `bottomroundrectangle`:
    case l2(1087):
      return this.drawBottomRoundRectanglePath(n2, r2, i2, a2, o2, c2);
    case `barrel`:
      return this[l2(482)](n2, r2, i2, a2, o2);
  }
};
var Ph = Ih, Fh = Ih.prototype;
Fh.CANVAS_LAYERS = 3, Fh.SELECT_BOX = 0, Fh.DRAG = 1, Fh.NODE = 2, Fh.WEBGL = 3, Fh.CANVAS_TYPES = [`2d`, `2d`, `2d`, `webgl2`], Fh.BUFFER_COUNT = 3, Fh.TEXTURE_BUFFER = 0, Fh[e(786)] = 1, Fh.MOTIONBLUR_BUFFER_DRAG = 2;
function Ih(t2) {
  var n2 = e, r2 = this, i2 = r2.cy.window()[n2(669)];
  t2.webgl && (Fh.CANVAS_LAYERS = r2.CANVAS_LAYERS = 4, console.log(`webgl rendering enabled`)), r2[n2(1036)] = { canvases: Array(Fh.CANVAS_LAYERS), contexts: Array(Fh.CANVAS_LAYERS), canvasNeedsRedraw: Array(Fh.CANVAS_LAYERS), bufferCanvases: Array(Fh.BUFFER_COUNT), bufferContexts: Array(Fh[n2(1184)]) };
  var a2 = `-webkit-tap-highlight-color`, o2 = `rgba(0,0,0,0)`;
  r2.data.canvasContainer = i2.createElement(`div`);
  var s2 = r2.data.canvasContainer.style;
  r2.data.canvasContainer.style[a2] = o2, s2.position = `relative`, s2[n2(1300)] = `0`, s2.overflow = `hidden`;
  var c2 = t2.cy.container();
  c2.appendChild(r2.data.canvasContainer), c2.style[a2] = o2;
  var l2 = { "-webkit-user-select": `none`, "-moz-user-select": `-moz-none`, "user-select": `none`, "-webkit-tap-highlight-color": `rgba(0,0,0,0)`, "outline-style": `none` };
  W() && (l2[`-ms-touch-action`] = `none`, l2[`touch-action`] = `none`);
  for (var u2 = 0; u2 < Fh.CANVAS_LAYERS; u2++) {
    var d2 = r2.data[n2(624)][u2] = i2.createElement(`canvas`), f2 = Fh.CANVAS_TYPES[u2];
    r2.data.contexts[u2] = d2.getContext(f2), r2.data.contexts[u2] || Lt(`Could not create canvas of type ` + f2), Object[n2(520)](l2).forEach(function(e2) {
      var t3 = n2;
      d2[t3(1353)][e2] = l2[e2];
    }), d2.style.position = `absolute`, d2.setAttribute(`data-id`, `layer` + u2), d2[n2(1353)].zIndex = String(Fh.CANVAS_LAYERS - u2), r2.data.canvasContainer[n2(385)](d2), r2.data.canvasNeedsRedraw[u2] = false;
  }
  r2.data.topCanvas = r2.data[n2(624)][0], r2.data.canvases[Fh[n2(894)]][n2(957)](`data-id`, `layer` + Fh.NODE + `-node`), r2.data.canvases[Fh.SELECT_BOX].setAttribute(n2(888), `layer` + Fh.SELECT_BOX + `-selectbox`), r2.data.canvases[Fh[n2(723)]].setAttribute(`data-id`, `layer` + Fh.DRAG + `-drag`), r2.data.canvases[Fh.WEBGL] && r2.data[n2(624)][Fh.WEBGL].setAttribute(`data-id`, `layer` + Fh.WEBGL + `-webgl`);
  for (var u2 = 0; u2 < Fh[n2(1045)]; u2++) r2[n2(1036)].bufferCanvases[u2] = i2.createElement(n2(224)), r2.data[n2(1126)][u2] = r2.data[n2(736)][u2].getContext(`2d`), r2.data.bufferCanvases[u2].style.position = `absolute`, r2.data.bufferCanvases[u2].setAttribute(`data-id`, n2(298) + u2), r2.data.bufferCanvases[u2][n2(1353)].zIndex = String(-u2 - 1), r2.data.bufferCanvases[u2].style.visibility = n2(863);
  r2.pathsEnabled = true;
  var p2 = Kn(), m2 = function(e2) {
    return { x: (e2.x1 + e2.x2) / 2, y: (e2.y1 + e2.y2) / 2 };
  }, h2 = function(e2) {
    return { x: -e2.w / 2, y: -e2.h / 2 };
  }, g2 = function(e2) {
    var t3 = n2, r3 = e2[0]._private;
    return r3.oldBackgroundTimestamp !== r3[t3(384)];
  }, _2 = function(e2) {
    return e2[0]._private.nodeKey;
  }, v2 = function(e2) {
    var t3 = n2;
    return e2[0]._private[t3(822)];
  }, y2 = function(e2) {
    return e2[0]._private.sourceLabelStyleKey;
  }, b2 = function(e2) {
    return e2[0]._private.targetLabelStyleKey;
  }, x2 = function(e2, t3, n3, i3, a3) {
    return r2.drawElement(e2, t3, n3, false, false, a3);
  }, S2 = function(e2, t3, n3, i3, a3) {
    return r2.drawElementText(e2, t3, n3, i3, `main`, a3);
  }, C2 = function(e2, t3, n3, i3, a3) {
    return r2.drawElementText(e2, t3, n3, i3, `source`, a3);
  }, w2 = function(e2, t3, n3, i3, a3) {
    return r2.drawElementText(e2, t3, n3, i3, `target`, a3);
  }, T2 = function(e2) {
    return e2[n2(277)](), e2[0]._private.bodyBounds;
  }, E2 = function(e2) {
    return e2.boundingBox(), e2[0]._private.labelBounds.main || p2;
  }, D2 = function(e2) {
    var t3 = n2;
    return e2.boundingBox(), e2[0][t3(820)].labelBounds.source || p2;
  }, O2 = function(e2) {
    return e2.boundingBox(), e2[0]._private.labelBounds.target || p2;
  }, k2 = function(e2, t3) {
    return t3;
  }, A2 = function(e2) {
    return m2(T2(e2));
  }, j2 = function(e2, t3, r3) {
    var i3 = n2, a3 = e2 ? e2 + `-` : ``;
    return { x: t3.x + r3.pstyle(a3 + `text-margin-x`)[i3(676)], y: t3.y + r3.pstyle(a3 + `text-margin-y`).pfValue };
  }, M2 = function(e2, t3, n3) {
    var r3 = e2[0]._private.rscratch;
    return { x: r3[t3], y: r3[n3] };
  }, N2 = function(e2) {
    var t3 = n2;
    return j2(``, M2(e2, t3(925), t3(1023)), e2);
  }, P2 = function(e2) {
    return j2(`source`, M2(e2, `sourceLabelX`, `sourceLabelY`), e2);
  }, F2 = function(e2) {
    return j2(n2(1192), M2(e2, `targetLabelX`, `targetLabelY`), e2);
  }, I2 = function(e2) {
    return h2(T2(e2));
  }, L2 = function(e2) {
    return h2(D2(e2));
  }, R2 = function(e2) {
    return h2(O2(e2));
  }, z2 = function(e2) {
    var t3 = n2, r3 = E2(e2), i3 = h2(E2(e2));
    if (e2.isNode()) {
      switch (e2.pstyle(`text-halign`)[t3(1310)]) {
        case `left`:
          i3.x = -r3.w - (r3.leftPad || 0);
          break;
        case `right`:
          i3.x = -(r3.rightPad || 0);
          break;
      }
      switch (e2.pstyle(`text-valign`).value) {
        case `top`:
          i3.y = -r3.h - (r3.topPad || 0);
          break;
        case `bottom`:
          i3.y = -(r3.botPad || 0);
          break;
      }
    }
    return i3;
  }, B2 = r2[n2(1036)].eleTxrCache = new bp(r2, { getKey: _2, doesEleInvalidateKey: g2, drawElement: x2, getBoundingBox: T2, getRotationPoint: A2, getRotationOffset: I2, allowEdgeTxrCaching: false, allowParentTxrCaching: false }), V2 = r2.data.lblTxrCache = new bp(r2, { getKey: v2, drawElement: S2, getBoundingBox: E2, getRotationPoint: N2, getRotationOffset: z2, isVisible: k2 }), H2 = r2.data.slbTxrCache = new bp(r2, { getKey: y2, drawElement: C2, getBoundingBox: D2, getRotationPoint: P2, getRotationOffset: L2, isVisible: k2 }), U2 = r2.data.tlbTxrCache = new bp(r2, { getKey: b2, drawElement: w2, getBoundingBox: O2, getRotationPoint: F2, getRotationOffset: R2, isVisible: k2 }), G2 = r2.data.lyrTxrCache = new Lp(r2);
  r2[n2(1287)](function(e2, t3) {
    var r3 = n2;
    B2.invalidateElements(t3), V2.invalidateElements(t3), H2.invalidateElements(t3), U2.invalidateElements(t3), G2.invalidateElements(t3);
    for (var i3 = 0; i3 < t3.length; i3++) {
      var a3 = t3[i3]._private;
      a3[r3(730)] = a3[r3(384)];
    }
  });
  var K2 = function(e2) {
    for (var t3 = n2, r3 = 0; r3 < e2.length; r3++) G2.enqueueElementRefinement(e2[r3][t3(529)]);
  };
  B2[n2(405)](K2), V2.onDequeue(K2), H2.onDequeue(K2), U2.onDequeue(K2), t2.webgl && r2.initWebgl(t2, { getStyleKey: _2, getLabelKey: v2, getSourceLabelKey: y2, getTargetLabelKey: b2, drawElement: x2, drawLabel: S2, drawSourceLabel: C2, drawTargetLabel: w2, getElementBox: T2, getLabelBox: E2, getSourceLabelBox: D2, getTargetLabelBox: O2, getElementRotationPoint: A2, getElementRotationOffset: I2, getLabelRotationPoint: N2, getSourceLabelRotationPoint: P2, getTargetLabelRotationPoint: F2, getLabelRotationOffset: z2, getSourceLabelRotationOffset: L2, getTargetLabelRotationOffset: R2 });
}
Fh.redrawHint = function(t2, n2) {
  var r2 = e, i2 = this;
  switch (t2) {
    case r2(1015):
      i2.data[r2(1355)][Fh.NODE] = n2;
      break;
    case `drag`:
      i2.data.canvasNeedsRedraw[Fh.DRAG] = n2;
      break;
    case `select`:
      i2.data.canvasNeedsRedraw[Fh.SELECT_BOX] = n2;
      break;
    case `gc`:
      i2.data.gc = true;
      break;
  }
};
var Lh = typeof Path2D < `u`;
Fh.path2dEnabled = function(t2) {
  var n2 = e;
  if (t2 === void 0) return this[n2(652)];
  this[n2(652)] = !!t2;
}, Fh.usePaths = function() {
  return Lh && this.pathsEnabled;
}, Fh.setImgSmoothing = function(t2, n2) {
  t2[e(1219)] == null ? (t2.webkitImageSmoothingEnabled = n2, t2.mozImageSmoothingEnabled = n2, t2.msImageSmoothingEnabled = n2) : t2.imageSmoothingEnabled = n2;
}, Fh.getImgSmoothing = function(e2) {
  return e2.imageSmoothingEnabled == null ? e2.webkitImageSmoothingEnabled || e2.mozImageSmoothingEnabled || e2.msImageSmoothingEnabled : e2.imageSmoothingEnabled;
}, Fh.makeOffscreenCanvas = function(t2, n2) {
  var r2 = e, i2;
  return (typeof OffscreenCanvas > `u` ? r2(1054) : _(OffscreenCanvas)) === `undefined` ? (i2 = this.cy.window().document.createElement(r2(224)), i2.width = t2, i2.height = n2) : i2 = new OffscreenCanvas(t2, n2), i2;
}, [Vp, Jp, tm, rm, im, sm, lm, ah, Sh, kh, Nh].forEach(function(e2) {
  Z(Fh, e2);
});
var Rh = [{ type: e(1336), extensions: Kd }, { type: `renderer`, extensions: [{ name: `null`, impl: qd }, { name: `base`, impl: Yf }, { name: `canvas`, impl: Ph }] }], zh = {}, Bh = {};
function Vh(t2, n2, r2) {
  var i2 = e, a2 = r2, o2 = function(e2) {
    zt($(233) + n2 + "` for `" + t2 + "` since `" + e2 + "` already exists in the prototype and can not be overridden");
  };
  if (t2 === `core`) {
    if (id.prototype[n2]) return o2(n2);
    id[i2(216)][n2] = r2;
  } else if (t2 === i2(999)) {
    if (vu.prototype[n2]) return o2(n2);
    vu.prototype[n2] = r2;
  } else if (t2 === i2(1336)) {
    for (var s2 = function(e2) {
      var t3 = i2;
      this[t3(712)] = e2, r2.call(this, e2), k(this._private) || (this._private = {}), this[t3(820)].cy = e2.cy, this[t3(820)].listeners = [], this.createEmitter();
    }, c2 = s2.prototype = Object.create(r2[i2(216)]), l2 = [], u2 = 0; u2 < l2.length; u2++) {
      var d2 = l2[u2];
      c2[d2] = c2[d2] || function() {
        return this;
      };
    }
    c2.start && !c2.run ? c2.run = function() {
      var e2 = i2;
      return this[e2(1263)](), this;
    } : !c2.start && c2.run && (c2.start = function() {
      var e2 = i2;
      return this[e2(1039)](), this;
    });
    var f2 = r2[i2(216)].stop;
    c2.stop = function() {
      var e2 = this.options;
      if (e2 && e2.animate) {
        var t3 = this.animations;
        if (t3) for (var n3 = 0; n3 < t3.length; n3++) t3[n3].stop();
      }
      return f2 ? f2.call(this) : this.emit(`layoutstop`), this;
    }, c2.destroy || (c2.destroy = function() {
      return this;
    }), c2.cy = function() {
      var e2 = i2;
      return this[e2(820)].cy;
    };
    var p2 = function(e2) {
      return e2[i2(820)].cy;
    }, m2 = { addEventFields: function(e2, t3) {
      t3.layout = e2, t3.cy = p2(e2), t3.target = e2;
    }, bubble: function() {
      return true;
    }, parent: function(e2) {
      return p2(e2);
    } };
    Z(c2, { createEmitter: function() {
      var e2 = i2;
      return this._private[e2(512)] = new Bl(m2, this), this;
    }, emitter: function() {
      return this._private.emitter;
    }, on: function(e2, t3) {
      return this.emitter().on(e2, t3), this;
    }, one: function(e2, t3) {
      return this.emitter().one(e2, t3), this;
    }, once: function(e2, t3) {
      return this.emitter().one(e2, t3), this;
    }, removeListener: function(e2, t3) {
      return this.emitter().removeListener(e2, t3), this;
    }, removeAllListeners: function() {
      return this.emitter().removeAllListeners(), this;
    }, emit: function(e2, t3) {
      return this.emitter().emit(e2, t3), this;
    } }), mc[i2(890)](c2), a2 = s2;
  } else if (t2 === i2(589) && n2 !== i2(1172) && n2 !== `base`) {
    var h2 = Hh(`renderer`, i2(1007)), g2 = h2.prototype, _2 = r2, v2 = r2.prototype, y2 = function() {
      h2.apply(this, arguments), _2.apply(this, arguments);
    }, b2 = y2.prototype;
    for (var x2 in g2) {
      var S2 = g2[x2];
      if (v2[x2] != null) return o2(x2);
      b2[x2] = S2;
    }
    for (var C2 in v2) b2[C2] = v2[C2];
    g2.clientFunctions.forEach(function(e2) {
      b2[e2] = b2[e2] || function() {
        Lt("Renderer does not implement `renderer." + e2 + "()` on its prototype");
      };
    }), a2 = y2;
  } else if (t2 === i2(1061) || t2 === `constructor` || t2 === `prototype`) return Lt(t2 + ` is an illegal type to be registered, possibly lead to prototype pollutions`);
  return he({ map: zh, keys: [t2, n2], value: a2 });
}
function Hh(e2, t2) {
  return ge({ map: zh, keys: [e2, t2] });
}
function Uh(e2, t2, n2, r2, i2) {
  return he({ map: Bh, keys: [e2, t2, n2, r2], value: i2 });
}
function Wh(e2, t2, n2, r2) {
  return ge({ map: Bh, keys: [e2, t2, n2, r2] });
}
var Gh = function() {
  var t2 = e;
  if (arguments.length === 2) return Hh.apply(null, arguments);
  if (arguments.length === 3) return Vh.apply(null, arguments);
  if (arguments[t2(441)] === 4) return Wh.apply(null, arguments);
  if (arguments.length === 5) return Uh[t2(226)](null, arguments);
  Lt(`Invalid extension access syntax`);
};
id.prototype.extension = Gh, Rh.forEach(function(e2) {
  e2.extensions.forEach(function(t2) {
    Vh(e2.type, t2.name, t2.impl);
  });
});
var Kh = function() {
  if (!(this instanceof Kh)) return new Kh();
  this.length = 0;
}, qh = Kh[e(216)];
qh.instanceString = function() {
  return e(750);
}, qh[e(1346)] = function(e2) {
  var t2 = this.length++;
  return this[t2] = { selector: e2, properties: [] }, this;
}, qh.css = function(t2, n2) {
  var r2 = e, i2 = this.length - 1;
  if (E(t2)) this[i2].properties.push({ name: t2, value: n2 });
  else if (k(t2)) for (var a2 = t2, o2 = Object.keys(a2), s2 = 0; s2 < o2.length; s2++) {
    var c2 = o2[s2], l2 = a2[c2];
    if (l2 != null) {
      var u2 = Qu.properties[c2] || Qu[r2(1104)][q(c2)];
      if (u2 != null) {
        var d2 = u2.name, f2 = l2;
        this[i2].properties.push({ name: d2, value: f2 });
      }
    }
  }
  return this;
}, qh.style = qh.css, qh.generateStyle = function(t2) {
  var n2 = e, r2 = new Qu(t2);
  return this[n2(1261)](r2);
}, qh.appendToStyle = function(t2) {
  for (var n2 = e, r2 = 0; r2 < this.length; r2++) {
    var i2 = this[r2], a2 = i2.selector, o2 = i2[n2(1104)];
    t2.selector(a2);
    for (var s2 = 0; s2 < o2.length; s2++) {
      var c2 = o2[s2];
      t2[n2(943)](c2.name, c2[n2(1310)]);
    }
  }
  return t2;
};
var Jh = e(218), Yh = function(t2) {
  var n2 = e;
  if (t2 === void 0 && (t2 = {}), k(t2)) return new id(t2);
  if (E(t2)) return Gh[n2(226)](Gh, arguments);
};
Yh.use = function(t2) {
  var n2 = e, r2 = Array.prototype.slice[n2(962)](arguments, 1);
  return r2.unshift(Yh), t2[n2(226)](null, r2), this;
}, Yh.warnings = function(e2) {
  return Rt(e2);
}, Yh.version = Jh, Yh.stylesheet = Yh.Stylesheet = Kh;
export {
  Yh as t
};
