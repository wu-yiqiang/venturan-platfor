import { t as e } from "./chunk-AGHRB4JF-CBHSUHQe.js";
var t = j;
(function(e2, t2) {
  for (var n2 = j, r2 = e2(); ; ) try {
    if (-parseInt(n2(605)) / 1 * (-parseInt(n2(506)) / 2) + parseInt(n2(540)) / 3 + -parseInt(n2(502)) / 4 + -parseInt(n2(475)) / 5 * (-parseInt(n2(531)) / 6) + -parseInt(n2(547)) / 7 + -parseInt(n2(462)) / 8 * (-parseInt(n2(576)) / 9) + parseInt(n2(500)) / 10 === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(Z, 314093);
function n(e2) {
  return e2 == null;
}
e(n, t(569));
function r(e2) {
  return typeof e2 == `object` && !!e2;
}
e(r, `isObject`);
function i(e2) {
  return Array.isArray(e2) ? e2 : n(e2) ? [] : [e2];
}
e(i, t(587));
function a(e2, t2) {
  var n2, r2, i2, a2;
  if (t2) for (a2 = Object.keys(t2), n2 = 0, r2 = a2.length; n2 < r2; n2 += 1) i2 = a2[n2], e2[i2] = t2[i2];
  return e2;
}
e(a, `extend`);
function o(e2, t2) {
  var n2 = ``, r2;
  for (r2 = 0; r2 < t2; r2 += 1) n2 += e2;
  return n2;
}
e(o, t(463));
function s(e2) {
  return e2 === 0 && 1 / e2 == -1 / 0;
}
e(s, `isNegativeZero`);
var c = { isNothing: n, isObject: r, toArray: i, repeat: o, isNegativeZero: s, extend: a };
function l(e2, n2) {
  var r2 = t, i2 = ``, a2 = e2[r2(590)] || `(unknown reason)`;
  return e2.mark ? (e2.mark[r2(581)] && (i2 += `in "` + e2.mark.name + `" `), i2 += `(` + (e2[r2(496)].line + 1) + `:` + (e2.mark.column + 1) + `)`, !n2 && e2[r2(496)].snippet && (i2 += `

` + e2.mark.snippet), a2 + ` ` + i2) : a2;
}
e(l, t(548));
function u(e2, n2) {
  var r2 = t;
  Error[r2(546)](this), this.name = r2(520), this.reason = e2, this[r2(496)] = n2, this.message = l(this, false), Error.captureStackTrace ? Error.captureStackTrace(this, this[r2(514)]) : this.stack = Error()[r2(526)] || ``;
}
e(u, `YAMLException$1`), u.prototype = Object.create(Error[t(567)]), u.prototype.constructor = u, u.prototype.toString = e(function(e2) {
  return this.name + `: ` + l(this, e2);
}, t(562));
var d = u;
function f(e2, n2, r2, i2, a2) {
  var o2 = t, s2 = ``, c2 = ``, l2 = Math.floor(a2 / 2) - 1;
  return i2 - n2 > l2 && (s2 = ` ... `, n2 = i2 - l2 + s2[o2(574)]), r2 - i2 > l2 && (c2 = ` ...`, r2 = i2 + l2 - c2.length), { str: s2 + e2.slice(n2, r2)[o2(467)](/\t/g, `\u2192`) + c2, pos: i2 - n2 + s2.length };
}
e(f, `getLine`);
function p(e2, n2) {
  var r2 = t;
  return c[r2(463)](` `, n2 - e2[r2(574)]) + e2;
}
e(p, `padStart`);
function m(e2, n2) {
  var r2 = t;
  if (n2 = Object.create(n2 || null), !e2.buffer) return null;
  n2.maxLength || (n2.maxLength = 79), typeof n2.indent != r2(459) && (n2.indent = 1), typeof n2.linesBefore != `number` && (n2.linesBefore = 3), typeof n2.linesAfter != r2(459) && (n2.linesAfter = 2);
  for (var i2 = /\r?\n|\r|\0/g, a2 = [0], o2 = [], s2, l2 = -1; s2 = i2[r2(504)](e2.buffer); ) o2[r2(557)](s2.index), a2.push(s2.index + s2[0][r2(574)]), e2.position <= s2.index && l2 < 0 && (l2 = a2.length - 2);
  l2 < 0 && (l2 = a2.length - 1);
  var u2 = ``, d2, m2, h2 = Math.min(e2.line + n2.linesAfter, o2.length).toString().length, g2 = n2.maxLength - (n2.indent + h2 + 3);
  for (d2 = 1; d2 <= n2[r2(606)] && !(l2 - d2 < 0); d2++) m2 = f(e2.buffer, a2[l2 - d2], o2[l2 - d2], e2.position - (a2[l2] - a2[l2 - d2]), g2), u2 = c.repeat(` `, n2[r2(536)]) + p((e2.line - d2 + 1).toString(), h2) + ` | ` + m2.str + `
` + u2;
  for (m2 = f(e2.buffer, a2[l2], o2[l2], e2.position, g2), u2 += c.repeat(` `, n2.indent) + p((e2.line + 1).toString(), h2) + ` | ` + m2.str + `
`, u2 += c.repeat(`-`, n2[r2(536)] + h2 + 3 + m2.pos) + `^
`, d2 = 1; d2 <= n2[r2(484)] && !(l2 + d2 >= o2.length); d2++) m2 = f(e2.buffer, a2[l2 + d2], o2[l2 + d2], e2.position - (a2[l2] - a2[l2 + d2]), g2), u2 += c.repeat(` `, n2.indent) + p((e2.line + d2 + 1).toString(), h2) + ` | ` + m2.str + `
`;
  return u2.replace(/\n$/, ``);
}
e(m, `makeSnippet`);
var h = m, g = [`kind`, t(472), `resolve`, t(510), `instanceOf`, `predicate`, `represent`, `representName`, `defaultStyle`, `styleAliases`], _ = [`scalar`, `sequence`, `mapping`];
function v(e2) {
  var t2 = {};
  return e2 !== null && Object.keys(e2).forEach(function(n2) {
    e2[n2].forEach(function(e3) {
      t2[String(e3)] = n2;
    });
  }), t2;
}
e(v, t(528));
function y(e2, n2) {
  var r2 = t;
  if (n2 || (n2 = {}), Object.keys(n2).forEach(function(t2) {
    if (g.indexOf(t2) === -1) throw new d(`Unknown option "` + t2 + `" is met in definition of "` + e2 + `" YAML type.`);
  }), this[r2(564)] = n2, this[r2(575)] = e2, this[r2(594)] = n2.kind || null, this.resolve = n2.resolve || function() {
    return true;
  }, this.construct = n2.construct || function(e3) {
    return e3;
  }, this.instanceOf = n2[r2(537)] || null, this.predicate = n2[r2(477)] || null, this.represent = n2.represent || null, this.representName = n2[r2(538)] || null, this.defaultStyle = n2.defaultStyle || null, this.multi = n2.multi || false, this.styleAliases = v(n2.styleAliases || null), _.indexOf(this.kind) === -1) throw new d(r2(499) + this.kind + `" is specified for "` + e2 + `" YAML type.`);
}
e(y, `Type$1`);
var b = y;
function ee(e2, t2) {
  var n2 = [];
  return e2[t2].forEach(function(e3) {
    var t3 = n2.length;
    n2.forEach(function(n3, r2) {
      var i2 = j;
      n3.tag === e3.tag && n3.kind === e3[i2(594)] && n3.multi === e3[i2(472)] && (t3 = r2);
    }), n2[t3] = e3;
  }), n2;
}
e(ee, `compileList`);
function te() {
  var t2 = { scalar: {}, sequence: {}, mapping: {}, fallback: {}, multi: { scalar: [], sequence: [], mapping: [], fallback: [] } }, n2, r2;
  function i2(e2) {
    var n3 = j;
    e2.multi ? (t2.multi[e2.kind].push(e2), t2.multi[n3(603)].push(e2)) : t2[e2.kind][e2.tag] = t2[n3(603)][e2.tag] = e2;
  }
  for (e(i2, `collectType`), n2 = 0, r2 = arguments.length; n2 < r2; n2 += 1) arguments[n2].forEach(i2);
  return t2;
}
e(te, `compileMap`);
function x(e2) {
  return this.extend(e2);
}
e(x, t(599)), x.prototype.extend = e(function(e2) {
  var n2 = t, r2 = [], i2 = [];
  if (e2 instanceof b) i2.push(e2);
  else if (Array.isArray(e2)) i2 = i2.concat(e2);
  else if (e2 && (Array[n2(489)](e2.implicit) || Array.isArray(e2.explicit))) e2.implicit && (r2 = r2[n2(578)](e2.implicit)), e2.explicit && (i2 = i2[n2(578)](e2.explicit));
  else throw new d(`Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })`);
  r2.forEach(function(e3) {
    var t2 = n2;
    if (!(e3 instanceof b)) throw new d(t2(572));
    if (e3[t2(487)] && e3.loadKind !== `scalar`) throw new d(`There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.`);
    if (e3[t2(472)]) throw new d(`There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.`);
  }), i2.forEach(function(e3) {
    if (!(e3 instanceof b)) throw new d(`Specified list of YAML types (or a single Type object) contains a non-Type object.`);
  });
  var a2 = Object.create(x[n2(567)]);
  return a2.implicit = (this[n2(468)] || []).concat(r2), a2.explicit = (this.explicit || [])[n2(578)](i2), a2[n2(515)] = ee(a2, `implicit`), a2.compiledExplicit = ee(a2, `explicit`), a2[n2(565)] = te(a2.compiledImplicit, a2[n2(469)]), a2;
}, t(588));
var ne = new x({ explicit: [new b(`tag:yaml.org,2002:str`, { kind: `scalar`, construct: e(function(e2) {
  return e2 === null ? `` : e2;
}, `construct`) }), new b(`tag:yaml.org,2002:seq`, { kind: `sequence`, construct: e(function(e2) {
  return e2 === null ? [] : e2;
}, `construct`) }), new b(t(517), { kind: `mapping`, construct: e(function(e2) {
  return e2 === null ? {} : e2;
}, `construct`) })] });
function re(e2) {
  if (e2 === null) return true;
  var t2 = e2.length;
  return t2 === 1 && e2 === `~` || t2 === 4 && (e2 === `null` || e2 === `Null` || e2 === `NULL`);
}
e(re, `resolveYamlNull`);
function ie() {
  return null;
}
e(ie, `constructYamlNull`);
function ae(e2) {
  return e2 === null;
}
e(ae, `isNull`);
var oe = new b(t(559), { kind: `scalar`, resolve: re, construct: ie, predicate: ae, represent: { canonical: e(function() {
  return `~`;
}, `canonical`), lowercase: e(function() {
  return t(596);
}, `lowercase`), uppercase: e(function() {
  return t(560);
}, `uppercase`), camelcase: e(function() {
  return t(494);
}, t(480)), empty: e(function() {
  return ``;
}, t(584)) }, defaultStyle: `lowercase` });
function se(e2) {
  var n2 = t;
  if (e2 === null) return false;
  var r2 = e2[n2(574)];
  return r2 === 4 && (e2 === `true` || e2 === `True` || e2 === `TRUE`) || r2 === 5 && (e2 === `false` || e2 === n2(485) || e2 === `FALSE`);
}
e(se, `resolveYamlBoolean`);
function ce(e2) {
  return e2 === `true` || e2 === `True` || e2 === `TRUE`;
}
e(ce, `constructYamlBoolean`);
function le(e2) {
  return Object.prototype.toString.call(e2) === `[object Boolean]`;
}
e(le, t(508));
var ue = new b(`tag:yaml.org,2002:bool`, { kind: `scalar`, resolve: se, construct: ce, predicate: le, represent: { lowercase: e(function(e2) {
  return e2 ? `true` : `false`;
}, `lowercase`), uppercase: e(function(e2) {
  return e2 ? `TRUE` : `FALSE`;
}, `uppercase`), camelcase: e(function(e2) {
  return e2 ? t(595) : `False`;
}, `camelcase`) }, defaultStyle: t(483) });
function de(e2) {
  return 48 <= e2 && e2 <= 57 || 65 <= e2 && e2 <= 70 || 97 <= e2 && e2 <= 102;
}
e(de, t(471));
function fe(e2) {
  return 48 <= e2 && e2 <= 55;
}
e(fe, `isOctCode`);
function pe(e2) {
  return 48 <= e2 && e2 <= 57;
}
e(pe, `isDecCode`);
function me(e2) {
  var n2 = t;
  if (e2 === null) return false;
  var r2 = e2.length, i2 = 0, a2 = false, o2;
  if (!r2) return false;
  if (o2 = e2[i2], (o2 === `-` || o2 === `+`) && (o2 = e2[++i2]), o2 === `0`) {
    if (i2 + 1 === r2) return true;
    if (o2 = e2[++i2], o2 === `b`) {
      for (i2++; i2 < r2; i2++) if (o2 = e2[i2], o2 !== `_`) {
        if (o2 !== `0` && o2 !== `1`) return false;
        a2 = true;
      }
      return a2 && o2 !== `_`;
    }
    if (o2 === `x`) {
      for (i2++; i2 < r2; i2++) if (o2 = e2[i2], o2 !== `_`) {
        if (!de(e2[n2(600)](i2))) return false;
        a2 = true;
      }
      return a2 && o2 !== `_`;
    }
    if (o2 === `o`) {
      for (i2++; i2 < r2; i2++) if (o2 = e2[i2], o2 !== `_`) {
        if (!fe(e2.charCodeAt(i2))) return false;
        a2 = true;
      }
      return a2 && o2 !== `_`;
    }
  }
  if (o2 === `_`) return false;
  for (; i2 < r2; i2++) if (o2 = e2[i2], o2 !== `_`) {
    if (!pe(e2.charCodeAt(i2))) return false;
    a2 = true;
  }
  return !(!a2 || o2 === `_`);
}
e(me, `resolveYamlInteger`);
function he(e2) {
  var n2 = t, r2 = e2, i2 = 1, a2;
  if (r2.indexOf(`_`) !== -1 && (r2 = r2.replace(/_/g, ``)), a2 = r2[0], (a2 === `-` || a2 === `+`) && (a2 === `-` && (i2 = -1), r2 = r2.slice(1), a2 = r2[0]), r2 === `0`) return 0;
  if (a2 === `0`) {
    if (r2[1] === `b`) return i2 * parseInt(r2.slice(2), 2);
    if (r2[1] === `x`) return i2 * parseInt(r2[n2(586)](2), 16);
    if (r2[1] === `o`) return i2 * parseInt(r2.slice(2), 8);
  }
  return i2 * parseInt(r2, 10);
}
e(he, `constructYamlInteger`);
function ge(e2) {
  return Object[t(567)].toString.call(e2) === `[object Number]` && e2 % 1 == 0 && !c.isNegativeZero(e2);
}
e(ge, `isInteger`);
var _e = new b(`tag:yaml.org,2002:int`, { kind: `scalar`, resolve: me, construct: he, predicate: ge, represent: { binary: e(function(e2) {
  return e2 >= 0 ? `0b` + e2.toString(2) : `-0b` + e2.toString(2).slice(1);
}, `binary`), octal: e(function(e2) {
  var n2 = t;
  return e2 >= 0 ? `0o` + e2[n2(562)](8) : `-0o` + e2.toString(8)[n2(586)](1);
}, t(554)), decimal: e(function(e2) {
  return e2.toString(10);
}, `decimal`), hexadecimal: e(function(e2) {
  var n2 = t;
  return e2 >= 0 ? `0x` + e2.toString(16).toUpperCase() : `-0x` + e2.toString(16)[n2(473)]().slice(1);
}, `hexadecimal`) }, defaultStyle: `decimal`, styleAliases: { binary: [2, `bin`], octal: [8, `oct`], decimal: [10, t(535)], hexadecimal: [16, t(495)] } }), ve = RegExp(`^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`);
function ye(e2) {
  return !(e2 === null || !ve.test(e2) || e2[e2.length - 1] === `_`);
}
e(ye, `resolveYamlFloat`);
function be(e2) {
  var n2 = t, r2 = e2.replace(/_/g, ``).toLowerCase(), i2 = r2[0] === `-` ? -1 : 1;
  return `+-`[n2(460)](r2[0]) >= 0 && (r2 = r2.slice(1)), r2 === `.inf` ? i2 === 1 ? 1 / 0 : -1 / 0 : r2 === `.nan` ? NaN : i2 * parseFloat(r2, 10);
}
e(be, `constructYamlFloat`);
var xe = /^[-+]?[0-9]+e/;
function Se(e2, n2) {
  var r2 = t, i2;
  if (isNaN(e2)) switch (n2) {
    case `lowercase`:
      return `.nan`;
    case r2(466):
      return r2(490);
    case `camelcase`:
      return `.NaN`;
  }
  else if (e2 === 1 / 0) switch (n2) {
    case `lowercase`:
      return `.inf`;
    case `uppercase`:
      return `.INF`;
    case `camelcase`:
      return `.Inf`;
  }
  else if (e2 === -1 / 0) switch (n2) {
    case `lowercase`:
      return `-.inf`;
    case r2(466):
      return `-.INF`;
    case r2(480):
      return `-.Inf`;
  }
  else if (c[r2(542)](e2)) return `-0.0`;
  return i2 = e2.toString(10), xe.test(i2) ? i2.replace(`e`, `.e`) : i2;
}
e(Se, `representYamlFloat`);
function Ce(e2) {
  var n2 = t;
  return Object.prototype.toString.call(e2) === `[object Number]` && (e2 % 1 != 0 || c[n2(542)](e2));
}
e(Ce, `isFloat`);
var we = new b(`tag:yaml.org,2002:float`, { kind: `scalar`, resolve: ye, construct: be, predicate: Ce, represent: Se, defaultStyle: `lowercase` }), Te = ne.extend({ implicit: [oe, ue, _e, we] }), Ee = Te, De = RegExp(t(544)), Oe = RegExp(`^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$`);
function ke(e2) {
  return e2 === null ? false : De.exec(e2) !== null || Oe.exec(e2) !== null;
}
e(ke, `resolveYamlTimestamp`);
function Ae(e2) {
  var n2 = t, r2, i2, a2, o2, s2, c2, l2, u2 = 0, d2 = null, f2, p2, m2;
  if (r2 = De[n2(504)](e2), r2 === null && (r2 = Oe.exec(e2)), r2 === null) throw Error(n2(541));
  if (i2 = +r2[1], a2 = r2[2] - 1, o2 = +r2[3], !r2[4]) return new Date(Date.UTC(i2, a2, o2));
  if (s2 = +r2[4], c2 = +r2[5], l2 = +r2[6], r2[7]) {
    for (u2 = r2[7].slice(0, 3); u2.length < 3; ) u2 += `0`;
    u2 = +u2;
  }
  return r2[9] && (f2 = +r2[10], p2 = +(r2[11] || 0), d2 = (f2 * 60 + p2) * 6e4, r2[9] === `-` && (d2 = -d2)), m2 = new Date(Date.UTC(i2, a2, o2, s2, c2, l2, u2)), d2 && m2.setTime(m2.getTime() - d2), m2;
}
e(Ae, t(539));
function je(e2) {
  return e2[t(543)]();
}
e(je, t(580));
var Me = new b(t(518), { kind: t(570), resolve: ke, construct: Ae, instanceOf: Date, represent: je });
function Ne(e2) {
  return e2 === `<<` || e2 === null;
}
e(Ne, `resolveYamlMerge`);
var Pe = new b(`tag:yaml.org,2002:merge`, { kind: `scalar`, resolve: Ne }), Fe = t(529);
function Ie(e2) {
  if (e2 === null) return false;
  var t2, n2, r2 = 0, i2 = e2.length, a2 = Fe;
  for (n2 = 0; n2 < i2; n2++) if (t2 = a2.indexOf(e2.charAt(n2)), !(t2 > 64)) {
    if (t2 < 0) return false;
    r2 += 6;
  }
  return r2 % 8 == 0;
}
e(Ie, `resolveYamlBinary`);
function Le(e2) {
  var n2 = t, r2, i2, a2 = e2.replace(/[\r\n=]/g, ``), o2 = a2.length, s2 = Fe, c2 = 0, l2 = [];
  for (r2 = 0; r2 < o2; r2++) r2 % 4 == 0 && r2 && (l2.push(c2 >> 16 & 255), l2.push(c2 >> 8 & 255), l2.push(c2 & 255)), c2 = c2 << 6 | s2.indexOf(a2.charAt(r2));
  return i2 = o2 % 4 * 6, i2 === 0 ? (l2.push(c2 >> 16 & 255), l2.push(c2 >> 8 & 255), l2[n2(557)](c2 & 255)) : i2 === 18 ? (l2[n2(557)](c2 >> 10 & 255), l2.push(c2 >> 2 & 255)) : i2 === 12 && l2.push(c2 >> 4 & 255), new Uint8Array(l2);
}
e(Le, `constructYamlBinary`);
function Re(e2) {
  var t2 = ``, n2 = 0, r2, i2, a2 = e2.length, o2 = Fe;
  for (r2 = 0; r2 < a2; r2++) r2 % 3 == 0 && r2 && (t2 += o2[n2 >> 18 & 63], t2 += o2[n2 >> 12 & 63], t2 += o2[n2 >> 6 & 63], t2 += o2[n2 & 63]), n2 = (n2 << 8) + e2[r2];
  return i2 = a2 % 3, i2 === 0 ? (t2 += o2[n2 >> 18 & 63], t2 += o2[n2 >> 12 & 63], t2 += o2[n2 >> 6 & 63], t2 += o2[n2 & 63]) : i2 === 2 ? (t2 += o2[n2 >> 10 & 63], t2 += o2[n2 >> 4 & 63], t2 += o2[n2 << 2 & 63], t2 += o2[64]) : i2 === 1 && (t2 += o2[n2 >> 2 & 63], t2 += o2[n2 << 4 & 63], t2 += o2[64], t2 += o2[64]), t2;
}
e(Re, `representYamlBinary`);
function ze(e2) {
  var n2 = t;
  return Object.prototype.toString.call(e2) === n2(512);
}
e(ze, `isBinary`);
var Be = new b(`tag:yaml.org,2002:binary`, { kind: `scalar`, resolve: Ie, construct: Le, predicate: ze, represent: Re }), Ve = Object.prototype[t(478)], He = Object[t(567)].toString;
function Ue(e2) {
  var n2 = t;
  if (e2 === null) return true;
  var r2 = [], i2, a2, o2, s2, c2, l2 = e2;
  for (i2 = 0, a2 = l2.length; i2 < a2; i2 += 1) {
    if (o2 = l2[i2], c2 = false, He.call(o2) !== `[object Object]`) return false;
    for (s2 in o2) if (Ve[n2(546)](o2, s2)) if (!c2) c2 = true;
    else return false;
    if (!c2) return false;
    if (r2[n2(460)](s2) === -1) r2.push(s2);
    else return false;
  }
  return true;
}
e(Ue, `resolveYamlOmap`);
function We(e2) {
  return e2 === null ? [] : e2;
}
e(We, `constructYamlOmap`);
var Ge = new b(`tag:yaml.org,2002:omap`, { kind: `sequence`, resolve: Ue, construct: We }), Ke = Object[t(567)].toString;
function qe(e2) {
  if (e2 === null) return true;
  var t2, n2, r2, i2, a2, o2 = e2;
  for (a2 = Array(o2.length), t2 = 0, n2 = o2.length; t2 < n2; t2 += 1) {
    if (r2 = o2[t2], Ke.call(r2) !== `[object Object]` || (i2 = Object.keys(r2), i2.length !== 1)) return false;
    a2[t2] = [i2[0], r2[i2[0]]];
  }
  return true;
}
e(qe, `resolveYamlPairs`);
function Je(e2) {
  var n2 = t;
  if (e2 === null) return [];
  var r2, i2, a2, o2, s2, c2 = e2;
  for (s2 = Array(c2[n2(574)]), r2 = 0, i2 = c2.length; r2 < i2; r2 += 1) a2 = c2[r2], o2 = Object.keys(a2), s2[r2] = [o2[0], a2[o2[0]]];
  return s2;
}
e(Je, `constructYamlPairs`);
var Ye = new b(`tag:yaml.org,2002:pairs`, { kind: t(498), resolve: qe, construct: Je }), Xe = Object.prototype.hasOwnProperty;
function Ze(e2) {
  if (e2 === null) return true;
  var t2, n2 = e2;
  for (t2 in n2) if (Xe.call(n2, t2) && n2[t2] !== null) return false;
  return true;
}
e(Ze, `resolveYamlSet`);
function Qe(e2) {
  return e2 === null ? {} : e2;
}
e(Qe, t(568));
var $e = new b(`tag:yaml.org,2002:set`, { kind: t(583), resolve: Ze, construct: Qe }), et = Ee.extend({ implicit: [Me, Pe], explicit: [Be, Ge, Ye, $e] }), S = Object[t(567)].hasOwnProperty, C = 1, tt = 2, nt = 3, w = 4, rt = 1, it = 2, at = 3, ot = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, st = /[\x85\u2028\u2029]/, ct = /[,\[\]\{\}]/, lt = /^(?:!|!!|![a-z\-]+!)$/i, ut = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function dt(e2) {
  return Object.prototype.toString.call(e2);
}
e(dt, t(493));
function T(e2) {
  return e2 === 10 || e2 === 13;
}
e(T, t(505));
function E(e2) {
  return e2 === 9 || e2 === 32;
}
e(E, `is_WHITE_SPACE`);
function D(e2) {
  return e2 === 9 || e2 === 32 || e2 === 10 || e2 === 13;
}
e(D, `is_WS_OR_EOL`);
function O(e2) {
  return e2 === 44 || e2 === 91 || e2 === 93 || e2 === 123 || e2 === 125;
}
e(O, `is_FLOW_INDICATOR`);
function ft(e2) {
  var t2;
  return 48 <= e2 && e2 <= 57 ? e2 - 48 : (t2 = e2 | 32, 97 <= t2 && t2 <= 102 ? t2 - 97 + 10 : -1);
}
e(ft, `fromHexCode`);
function pt(e2) {
  return e2 === 120 ? 2 : e2 === 117 ? 4 : e2 === 85 ? 8 : 0;
}
e(pt, `escapedHexLen`);
function mt(e2) {
  return 48 <= e2 && e2 <= 57 ? e2 - 48 : -1;
}
e(mt, `fromDecimalCode`);
function ht(e2) {
  return e2 === 48 ? `\0` : e2 === 97 ? `\x07` : e2 === 98 ? `\b` : e2 === 116 || e2 === 9 ? `	` : e2 === 110 ? `
` : e2 === 118 ? `\v` : e2 === 102 ? `\f` : e2 === 114 ? `\r` : e2 === 101 ? `\x1B` : e2 === 32 ? ` ` : e2 === 34 ? `"` : e2 === 47 ? `/` : e2 === 92 ? `\\` : e2 === 78 ? `\x85` : e2 === 95 ? `\xA0` : e2 === 76 ? `\u2028` : e2 === 80 ? `\u2029` : ``;
}
e(ht, t(566));
function gt(e2) {
  return e2 <= 65535 ? String.fromCharCode(e2) : String.fromCharCode((e2 - 65536 >> 10) + 55296, (e2 - 65536 & 1023) + 56320);
}
e(gt, `charFromCodepoint`);
function _t(e2, t2, n2) {
  t2 === `__proto__` ? Object.defineProperty(e2, t2, { configurable: true, enumerable: true, writable: true, value: n2 }) : e2[t2] = n2;
}
e(_t, `setProperty`);
var vt = Array(256), yt = Array(256);
for (k = 0; k < 256; k++) vt[k] = +!!ht(k), yt[k] = ht(k);
var k;
function bt(e2, n2) {
  var r2 = t;
  this.input = e2, this.filename = n2.filename || null, this[r2(555)] = n2.schema || et, this[r2(492)] = n2.onWarning || null, this.legacy = n2[r2(551)] || false, this.json = n2.json || false, this.listener = n2.listener || null, this[r2(501)] = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e2.length, this[r2(573)] = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
e(bt, `State$1`);
function xt(e2, n2) {
  var r2 = t, i2 = { name: e2[r2(563)], buffer: e2.input.slice(0, -1), position: e2.position, line: e2.line, column: e2[r2(573)] - e2[r2(530)] };
  return i2.snippet = h(i2), new d(n2, i2);
}
e(xt, `generateError`);
function A(e2, t2) {
  throw xt(e2, t2);
}
function j(e2, t2) {
  return e2 -= 456, Z()[e2];
}
e(A, t(532));
function M(e2, t2) {
  e2.onWarning && e2.onWarning.call(null, xt(e2, t2));
}
e(M, `throwWarning`);
var St = { YAML: e(function(e2, n2, r2) {
  var i2 = t, a2, o2, s2;
  e2.version !== null && A(e2, `duplication of %YAML directive`), r2.length !== 1 && A(e2, `YAML directive accepts exactly one argument`), a2 = /^([0-9]+)\.([0-9]+)$/.exec(r2[0]), a2 === null && A(e2, `ill-formed argument of the YAML directive`), o2 = parseInt(a2[1], 10), s2 = parseInt(a2[2], 10), o2 !== 1 && A(e2, `unacceptable YAML version of the document`), e2.version = r2[0], e2.checkLineBreaks = s2 < 2, s2 !== 1 && s2 !== 2 && M(e2, i2(524));
}, `handleYamlDirective`), TAG: e(function(e2, n2, r2) {
  var i2 = t, a2, o2;
  r2.length !== 2 && A(e2, `TAG directive accepts exactly two arguments`), a2 = r2[0], o2 = r2[1], lt[i2(465)](a2) || A(e2, `ill-formed tag handle (first argument) of the TAG directive`), S.call(e2.tagMap, a2) && A(e2, `there is a previously declared suffix for "` + a2 + `" tag handle`), ut[i2(465)](o2) || A(e2, i2(558));
  try {
    o2 = decodeURIComponent(o2);
  } catch {
    A(e2, `tag prefix is malformed: ` + o2);
  }
  e2.tagMap[a2] = o2;
}, `handleTagDirective`) };
function N(e2, n2, r2, i2) {
  var a2 = t, o2, s2, c2, l2;
  if (n2 < r2) {
    if (l2 = e2.input[a2(586)](n2, r2), i2) for (o2 = 0, s2 = l2.length; o2 < s2; o2 += 1) c2 = l2.charCodeAt(o2), c2 === 9 || 32 <= c2 && c2 <= 1114111 || A(e2, a2(527));
    else ot.test(l2) && A(e2, `the stream contains non-printable characters`);
    e2[a2(516)] += l2;
  }
}
e(N, t(561));
function Ct(e2, t2, n2, r2) {
  var i2, a2, o2, s2;
  for (c.isObject(n2) || A(e2, `cannot merge mappings; the provided source object is unacceptable`), i2 = Object.keys(n2), o2 = 0, s2 = i2.length; o2 < s2; o2 += 1) a2 = i2[o2], S.call(t2, a2) || (_t(t2, a2, n2[a2]), r2[a2] = true);
}
e(Ct, `mergeMappings`);
function P(e2, n2, r2, i2, a2, o2, s2, c2, l2) {
  var u2 = t, d2, f2;
  if (Array.isArray(a2)) for (a2 = Array.prototype.slice[u2(546)](a2), d2 = 0, f2 = a2.length; d2 < f2; d2 += 1) Array.isArray(a2[d2]) && A(e2, u2(497)), typeof a2 == u2(470) && dt(a2[d2]) === `[object Object]` && (a2[d2] = u2(491));
  if (typeof a2 == u2(470) && dt(a2) === `[object Object]` && (a2 = `[object Object]`), a2 = String(a2), n2 === null && (n2 = {}), i2 === `tag:yaml.org,2002:merge`) if (Array.isArray(o2)) for (d2 = 0, f2 = o2.length; d2 < f2; d2 += 1) Ct(e2, n2, o2[d2], r2);
  else Ct(e2, n2, o2, r2);
  else !e2.json && !S.call(r2, a2) && S.call(n2, a2) && (e2.line = s2 || e2.line, e2.lineStart = c2 || e2.lineStart, e2.position = l2 || e2[u2(573)], A(e2, `duplicated mapping key`)), _t(n2, a2, o2), delete r2[a2];
  return n2;
}
e(P, t(513));
function F(e2) {
  var n2 = t, r2 = e2.input[n2(600)](e2.position);
  r2 === 10 ? e2.position++ : r2 === 13 ? (e2.position++, e2[n2(550)].charCodeAt(e2.position) === 10 && e2.position++) : A(e2, `a line break is expected`), e2.line += 1, e2.lineStart = e2.position, e2.firstTabInLine = -1;
}
e(F, `readLineBreak`);
function I(e2, n2, r2) {
  for (var i2 = t, a2 = 0, o2 = e2.input.charCodeAt(e2.position); o2 !== 0; ) {
    for (; E(o2); ) o2 === 9 && e2.firstTabInLine === -1 && (e2.firstTabInLine = e2.position), o2 = e2.input[i2(600)](++e2[i2(573)]);
    if (n2 && o2 === 35) do
      o2 = e2.input.charCodeAt(++e2.position);
    while (o2 !== 10 && o2 !== 13 && o2 !== 0);
    if (T(o2)) for (F(e2), o2 = e2.input.charCodeAt(e2.position), a2++, e2[i2(552)] = 0; o2 === 32; ) e2.lineIndent++, o2 = e2.input.charCodeAt(++e2.position);
    else break;
  }
  return r2 !== -1 && a2 !== 0 && e2.lineIndent < r2 && M(e2, `deficient indentation`), a2;
}
e(I, `skipSeparationSpace`);
function L(e2) {
  var n2 = t, r2 = e2[n2(573)], i2 = e2[n2(550)].charCodeAt(r2);
  return !!((i2 === 45 || i2 === 46) && i2 === e2[n2(550)][n2(600)](r2 + 1) && i2 === e2[n2(550)].charCodeAt(r2 + 2) && (r2 += 3, i2 = e2.input.charCodeAt(r2), i2 === 0 || D(i2)));
}
e(L, `testDocumentSeparator`);
function R(e2, n2) {
  var r2 = t;
  n2 === 1 ? e2.result += ` ` : n2 > 1 && (e2[r2(516)] += c[r2(463)](`
`, n2 - 1));
}
e(R, `writeFoldedLines`);
function wt(e2, n2, r2) {
  var i2 = t, a2, o2, s2, c2, l2, u2, d2, f2, p2 = e2.kind, m2 = e2[i2(516)], h2 = e2[i2(550)].charCodeAt(e2.position);
  if (D(h2) || O(h2) || h2 === 35 || h2 === 38 || h2 === 42 || h2 === 33 || h2 === 124 || h2 === 62 || h2 === 39 || h2 === 34 || h2 === 37 || h2 === 64 || h2 === 96 || (h2 === 63 || h2 === 45) && (o2 = e2.input[i2(600)](e2[i2(573)] + 1), D(o2) || r2 && O(o2))) return false;
  for (e2[i2(594)] = `scalar`, e2.result = ``, s2 = c2 = e2.position, l2 = false; h2 !== 0; ) {
    if (h2 === 58) {
      if (o2 = e2.input.charCodeAt(e2.position + 1), D(o2) || r2 && O(o2)) break;
    } else if (h2 === 35) {
      if (a2 = e2.input.charCodeAt(e2.position - 1), D(a2)) break;
    } else if (e2.position === e2[i2(530)] && L(e2) || r2 && O(h2)) break;
    else if (T(h2)) if (u2 = e2[i2(458)], d2 = e2.lineStart, f2 = e2.lineIndent, I(e2, false, -1), e2.lineIndent >= n2) {
      l2 = true, h2 = e2.input[i2(600)](e2.position);
      continue;
    } else {
      e2.position = c2, e2[i2(458)] = u2, e2.lineStart = d2, e2.lineIndent = f2;
      break;
    }
    l2 && (l2 = (N(e2, s2, c2, false), R(e2, e2[i2(458)] - u2), s2 = c2 = e2.position, false)), E(h2) || (c2 = e2.position + 1), h2 = e2.input.charCodeAt(++e2.position);
  }
  return N(e2, s2, c2, false), e2.result ? true : (e2.kind = p2, e2.result = m2, false);
}
e(wt, `readPlainScalar`);
function Tt(e2, n2) {
  var r2 = t, i2 = e2.input.charCodeAt(e2[r2(573)]), a2, o2;
  if (i2 !== 39) return false;
  for (e2.kind = `scalar`, e2.result = ``, e2.position++, a2 = o2 = e2[r2(573)]; (i2 = e2.input.charCodeAt(e2[r2(573)])) !== 0; ) if (i2 === 39) if (N(e2, a2, e2.position, true), i2 = e2.input[r2(600)](++e2.position), i2 === 39) a2 = e2.position, e2.position++, o2 = e2[r2(573)];
  else return true;
  else T(i2) ? (N(e2, a2, o2, true), R(e2, I(e2, false, n2)), a2 = o2 = e2.position) : e2[r2(573)] === e2.lineStart && L(e2) ? A(e2, `unexpected end of the document within a single quoted scalar`) : (e2.position++, o2 = e2.position);
  A(e2, `unexpected end of the stream within a single quoted scalar`);
}
e(Tt, `readSingleQuotedScalar`);
function Et(e2, n2) {
  var r2 = t, i2, a2, o2, s2, c2, l2 = e2.input[r2(600)](e2.position);
  if (l2 !== 34) return false;
  for (e2.kind = `scalar`, e2.result = ``, e2.position++, i2 = a2 = e2[r2(573)]; (l2 = e2.input[r2(600)](e2.position)) !== 0; ) if (l2 === 34) return N(e2, i2, e2.position, true), e2.position++, true;
  else if (l2 === 92) {
    if (N(e2, i2, e2.position, true), l2 = e2[r2(550)][r2(600)](++e2.position), T(l2)) I(e2, false, n2);
    else if (l2 < 256 && vt[l2]) e2.result += yt[l2], e2[r2(573)]++;
    else if ((c2 = pt(l2)) > 0) {
      for (o2 = c2, s2 = 0; o2 > 0; o2--) l2 = e2[r2(550)].charCodeAt(++e2.position), (c2 = ft(l2)) >= 0 ? s2 = (s2 << 4) + c2 : A(e2, `expected hexadecimal character`);
      e2[r2(516)] += gt(s2), e2.position++;
    } else A(e2, `unknown escape sequence`);
    i2 = a2 = e2.position;
  } else T(l2) ? (N(e2, i2, a2, true), R(e2, I(e2, false, n2)), i2 = a2 = e2[r2(573)]) : e2.position === e2.lineStart && L(e2) ? A(e2, `unexpected end of the document within a double quoted scalar`) : (e2[r2(573)]++, a2 = e2[r2(573)]);
  A(e2, `unexpected end of the stream within a double quoted scalar`);
}
e(Et, `readDoubleQuotedScalar`);
function Dt(e2, n2) {
  var r2 = t, i2 = true, a2, o2, s2, c2 = e2.tag, l2, u2 = e2.anchor, d2, f2, p2, m2, h2, g2 = /* @__PURE__ */ Object.create(null), _2, v2, y2, b2 = e2.input.charCodeAt(e2[r2(573)]);
  if (b2 === 91) f2 = 93, h2 = false, l2 = [];
  else if (b2 === 123) f2 = 125, h2 = true, l2 = {};
  else return false;
  for (e2[r2(556)] !== null && (e2.anchorMap[e2.anchor] = l2), b2 = e2.input.charCodeAt(++e2.position); b2 !== 0; ) {
    if (I(e2, true, n2), b2 = e2.input.charCodeAt(e2[r2(573)]), b2 === f2) return e2.position++, e2.tag = c2, e2.anchor = u2, e2[r2(594)] = h2 ? r2(583) : `sequence`, e2[r2(516)] = l2, true;
    i2 ? b2 === 44 && A(e2, `expected the node content, but found ','`) : A(e2, `missed comma between flow collection entries`), v2 = _2 = y2 = null, p2 = m2 = false, b2 === 63 && (d2 = e2[r2(550)].charCodeAt(e2[r2(573)] + 1), D(d2) && (p2 = m2 = true, e2.position++, I(e2, true, n2))), a2 = e2.line, o2 = e2.lineStart, s2 = e2.position, z(e2, n2, C, false, true), v2 = e2[r2(575)], _2 = e2.result, I(e2, true, n2), b2 = e2[r2(550)].charCodeAt(e2.position), (m2 || e2.line === a2) && b2 === 58 && (p2 = true, b2 = e2[r2(550)].charCodeAt(++e2[r2(573)]), I(e2, true, n2), z(e2, n2, C, false, true), y2 = e2.result), h2 ? P(e2, l2, g2, v2, _2, y2, a2, o2, s2) : p2 ? l2[r2(557)](P(e2, null, g2, v2, _2, y2, a2, o2, s2)) : l2.push(_2), I(e2, true, n2), b2 = e2[r2(550)].charCodeAt(e2.position), b2 === 44 ? (i2 = true, b2 = e2[r2(550)].charCodeAt(++e2.position)) : i2 = false;
  }
  A(e2, r2(482));
}
e(Dt, `readFlowCollection`);
function Ot(e2, n2) {
  var r2 = t, i2, a2, o2 = rt, s2 = false, l2 = false, u2 = n2, d2 = 0, f2 = false, p2, m2 = e2.input.charCodeAt(e2.position);
  if (m2 === 124) a2 = false;
  else if (m2 === 62) a2 = true;
  else return false;
  for (e2.kind = `scalar`, e2.result = ``; m2 !== 0; ) if (m2 = e2.input.charCodeAt(++e2.position), m2 === 43 || m2 === 45) rt === o2 ? o2 = m2 === 43 ? at : it : A(e2, `repeat of a chomping mode identifier`);
  else if ((p2 = mt(m2)) >= 0) p2 === 0 ? A(e2, `bad explicit indentation width of a block scalar; it cannot be less than one`) : l2 ? A(e2, r2(476)) : (u2 = n2 + p2 - 1, l2 = true);
  else break;
  if (E(m2)) {
    do
      m2 = e2.input.charCodeAt(++e2.position);
    while (E(m2));
    if (m2 === 35) do
      m2 = e2[r2(550)][r2(600)](++e2.position);
    while (!T(m2) && m2 !== 0);
  }
  for (; m2 !== 0; ) {
    for (F(e2), e2.lineIndent = 0, m2 = e2.input.charCodeAt(e2.position); (!l2 || e2[r2(552)] < u2) && m2 === 32; ) e2.lineIndent++, m2 = e2.input.charCodeAt(++e2.position);
    if (!l2 && e2.lineIndent > u2 && (u2 = e2.lineIndent), T(m2)) {
      d2++;
      continue;
    }
    if (e2.lineIndent < u2) {
      o2 === at ? e2.result += c.repeat(`
`, s2 ? 1 + d2 : d2) : o2 === rt && s2 && (e2.result += `
`);
      break;
    }
    for (a2 ? E(m2) ? (f2 = true, e2.result += c[r2(463)](`
`, s2 ? 1 + d2 : d2)) : f2 ? (f2 = false, e2.result += c[r2(463)](`
`, d2 + 1)) : d2 === 0 ? s2 && (e2[r2(516)] += ` `) : e2.result += c.repeat(`
`, d2) : e2[r2(516)] += c.repeat(`
`, s2 ? 1 + d2 : d2), s2 = true, l2 = true, d2 = 0, i2 = e2[r2(573)]; !T(m2) && m2 !== 0; ) m2 = e2.input[r2(600)](++e2.position);
    N(e2, i2, e2.position, false);
  }
  return true;
}
e(Ot, t(604));
function kt(e2, n2) {
  var r2 = t, i2, a2 = e2.tag, o2 = e2.anchor, s2 = [], c2, l2 = false, u2;
  if (e2[r2(488)] !== -1) return false;
  for (e2.anchor !== null && (e2.anchorMap[e2.anchor] = s2), u2 = e2.input.charCodeAt(e2.position); u2 !== 0 && (e2.firstTabInLine !== -1 && (e2.position = e2[r2(488)], A(e2, r2(511))), !(u2 !== 45 || (c2 = e2.input.charCodeAt(e2.position + 1), !D(c2)))); ) {
    if (l2 = true, e2.position++, I(e2, true, -1) && e2.lineIndent <= n2) {
      s2.push(null), u2 = e2.input.charCodeAt(e2[r2(573)]);
      continue;
    }
    if (i2 = e2.line, z(e2, n2, nt, false, true), s2.push(e2[r2(516)]), I(e2, true, -1), u2 = e2[r2(550)].charCodeAt(e2.position), (e2.line === i2 || e2.lineIndent > n2) && u2 !== 0) A(e2, `bad indentation of a sequence entry`);
    else if (e2[r2(552)] < n2) break;
  }
  return l2 ? (e2.tag = a2, e2[r2(556)] = o2, e2.kind = `sequence`, e2[r2(516)] = s2, true) : false;
}
e(kt, `readBlockSequence`);
function At(e2, n2, r2) {
  var i2 = t, a2, o2, s2, c2, l2, u2, d2 = e2[i2(575)], f2 = e2.anchor, p2 = {}, m2 = Object[i2(456)](null), h2 = null, g2 = null, _2 = null, v2 = false, y2 = false, b2;
  if (e2.firstTabInLine !== -1) return false;
  for (e2.anchor !== null && (e2.anchorMap[e2.anchor] = p2), b2 = e2.input.charCodeAt(e2.position); b2 !== 0; ) {
    if (!v2 && e2.firstTabInLine !== -1 && (e2.position = e2[i2(488)], A(e2, `tab characters must not be used in indentation`)), a2 = e2[i2(550)].charCodeAt(e2.position + 1), s2 = e2.line, (b2 === 63 || b2 === 58) && D(a2)) b2 === 63 ? (v2 && (P(e2, p2, m2, h2, g2, null, c2, l2, u2), h2 = g2 = _2 = null), y2 = true, v2 = true, o2 = true) : v2 ? (v2 = false, o2 = true) : A(e2, i2(589)), e2.position += 1, b2 = a2;
    else {
      if (c2 = e2.line, l2 = e2.lineStart, u2 = e2.position, !z(e2, r2, tt, false, true)) break;
      if (e2.line === s2) {
        for (b2 = e2.input.charCodeAt(e2[i2(573)]); E(b2); ) b2 = e2.input.charCodeAt(++e2.position);
        if (b2 === 58) b2 = e2.input.charCodeAt(++e2.position), D(b2) || A(e2, `a whitespace character is expected after the key-value separator within a block mapping`), v2 && (P(e2, p2, m2, h2, g2, null, c2, l2, u2), h2 = g2 = _2 = null), y2 = true, v2 = false, o2 = false, h2 = e2.tag, g2 = e2.result;
        else if (y2) A(e2, `can not read an implicit mapping pair; a colon is missed`);
        else return e2.tag = d2, e2[i2(556)] = f2, true;
      } else if (y2) A(e2, `can not read a block mapping entry; a multiline key may not be an implicit key`);
      else return e2.tag = d2, e2.anchor = f2, true;
    }
    if ((e2.line === s2 || e2.lineIndent > n2) && (v2 && (c2 = e2.line, l2 = e2.lineStart, u2 = e2.position), z(e2, n2, w, true, o2) && (v2 ? g2 = e2.result : _2 = e2.result), v2 || (P(e2, p2, m2, h2, g2, _2, c2, l2, u2), h2 = g2 = _2 = null), I(e2, true, -1), b2 = e2.input.charCodeAt(e2[i2(573)])), (e2[i2(458)] === s2 || e2[i2(552)] > n2) && b2 !== 0) A(e2, `bad indentation of a mapping entry`);
    else if (e2.lineIndent < n2) break;
  }
  return v2 && P(e2, p2, m2, h2, g2, null, c2, l2, u2), y2 && (e2.tag = d2, e2.anchor = f2, e2.kind = i2(583), e2.result = p2), y2;
}
e(At, `readBlockMapping`);
function jt(e2) {
  var n2 = t, r2, i2 = false, a2 = false, o2, s2, c2 = e2.input[n2(600)](e2.position);
  if (c2 !== 33) return false;
  if (e2.tag !== null && A(e2, `duplication of a tag property`), c2 = e2.input.charCodeAt(++e2.position), c2 === 60 ? (i2 = true, c2 = e2.input.charCodeAt(++e2[n2(573)])) : c2 === 33 ? (a2 = true, o2 = `!!`, c2 = e2.input.charCodeAt(++e2.position)) : o2 = `!`, r2 = e2.position, i2) {
    do
      c2 = e2.input[n2(600)](++e2.position);
    while (c2 !== 0 && c2 !== 62);
    e2.position < e2.length ? (s2 = e2.input.slice(r2, e2.position), c2 = e2.input.charCodeAt(++e2.position)) : A(e2, `unexpected end of the stream within a verbatim tag`);
  } else {
    for (; c2 !== 0 && !D(c2); ) c2 === 33 && (a2 ? A(e2, n2(545)) : (o2 = e2.input.slice(r2 - 1, e2.position + 1), lt.test(o2) || A(e2, `named tag handle cannot contain such characters`), a2 = true, r2 = e2.position + 1)), c2 = e2[n2(550)].charCodeAt(++e2.position);
    s2 = e2.input.slice(r2, e2.position), ct[n2(465)](s2) && A(e2, n2(585));
  }
  s2 && !ut.test(s2) && A(e2, `tag name cannot contain such characters: ` + s2);
  try {
    s2 = decodeURIComponent(s2);
  } catch {
    A(e2, `tag name is malformed: ` + s2);
  }
  return i2 ? e2[n2(575)] = s2 : S.call(e2.tagMap, o2) ? e2.tag = e2.tagMap[o2] + s2 : o2 === `!` ? e2[n2(575)] = `!` + s2 : o2 === `!!` ? e2.tag = n2(461) + s2 : A(e2, `undeclared tag handle "` + o2 + `"`), true;
}
e(jt, `readTagProperty`);
function Mt(e2) {
  var n2 = t, r2, i2 = e2.input[n2(600)](e2.position);
  if (i2 !== 38) return false;
  for (e2[n2(556)] !== null && A(e2, `duplication of an anchor property`), i2 = e2.input.charCodeAt(++e2.position), r2 = e2[n2(573)]; i2 !== 0 && !D(i2) && !O(i2); ) i2 = e2.input[n2(600)](++e2.position);
  return e2.position === r2 && A(e2, `name of an anchor node must contain at least one character`), e2.anchor = e2.input.slice(r2, e2.position), true;
}
e(Mt, `readAnchorProperty`);
function Nt(e2) {
  var n2 = t, r2, i2, a2 = e2.input[n2(600)](e2[n2(573)]);
  if (a2 !== 42) return false;
  for (a2 = e2[n2(550)].charCodeAt(++e2[n2(573)]), r2 = e2.position; a2 !== 0 && !D(a2) && !O(a2); ) a2 = e2.input.charCodeAt(++e2.position);
  return e2.position === r2 && A(e2, `name of an alias node must contain at least one character`), i2 = e2.input.slice(r2, e2.position), S.call(e2.anchorMap, i2) || A(e2, `unidentified alias "` + i2 + `"`), e2.result = e2.anchorMap[i2], I(e2, true, -1), true;
}
e(Nt, `readAlias`);
function z(e2, n2, r2, i2, a2) {
  var o2 = t, s2, c2, l2, u2 = 1, d2 = false, f2 = false, p2, m2, h2, g2, _2, v2;
  if (e2.listener !== null && e2.listener(`open`, e2), e2.tag = null, e2.anchor = null, e2.kind = null, e2.result = null, s2 = c2 = l2 = w === r2 || nt === r2, i2 && I(e2, true, -1) && (d2 = true, e2.lineIndent > n2 ? u2 = 1 : e2[o2(552)] === n2 ? u2 = 0 : e2.lineIndent < n2 && (u2 = -1)), u2 === 1) for (; jt(e2) || Mt(e2); ) I(e2, true, -1) ? (d2 = true, l2 = s2, e2.lineIndent > n2 ? u2 = 1 : e2.lineIndent === n2 ? u2 = 0 : e2[o2(552)] < n2 && (u2 = -1)) : l2 = false;
  if (l2 && (l2 = d2 || a2), (u2 === 1 || w === r2) && (_2 = C === r2 || tt === r2 ? n2 : n2 + 1, v2 = e2.position - e2.lineStart, u2 === 1 ? l2 && (kt(e2, v2) || At(e2, v2, _2)) || Dt(e2, _2) ? f2 = true : (c2 && Ot(e2, _2) || Tt(e2, _2) || Et(e2, _2) ? f2 = true : Nt(e2) ? (f2 = true, (e2[o2(575)] !== null || e2.anchor !== null) && A(e2, `alias node should not have any properties`)) : wt(e2, _2, C === r2) && (f2 = true, e2.tag === null && (e2.tag = `?`)), e2.anchor !== null && (e2.anchorMap[e2.anchor] = e2.result)) : u2 === 0 && (f2 = l2 && kt(e2, v2))), e2.tag === null) e2.anchor !== null && (e2.anchorMap[e2[o2(556)]] = e2[o2(516)]);
  else if (e2[o2(575)] === `?`) {
    for (e2.result !== null && e2.kind !== `scalar` && A(e2, `unacceptable node kind for !<?> tag; it should be "scalar", not "` + e2.kind + `"`), p2 = 0, m2 = e2.implicitTypes.length; p2 < m2; p2 += 1) if (g2 = e2.implicitTypes[p2], g2[o2(507)](e2.result)) {
      e2.result = g2.construct(e2.result), e2.tag = g2[o2(575)], e2.anchor !== null && (e2.anchorMap[e2.anchor] = e2.result);
      break;
    }
  } else if (e2.tag !== `!`) {
    if (S.call(e2.typeMap[e2.kind || o2(603)], e2.tag)) g2 = e2.typeMap[e2.kind || o2(603)][e2.tag];
    else for (g2 = null, h2 = e2.typeMap.multi[e2.kind || `fallback`], p2 = 0, m2 = h2.length; p2 < m2; p2 += 1) if (e2.tag.slice(0, h2[p2].tag.length) === h2[p2].tag) {
      g2 = h2[p2];
      break;
    }
    g2 || A(e2, o2(582) + e2.tag + `>`), e2.result !== null && g2.kind !== e2.kind && A(e2, `unacceptable node kind for !<` + e2.tag + o2(519) + g2.kind + `", not "` + e2.kind + `"`), g2.resolve(e2[o2(516)], e2.tag) ? (e2.result = g2.construct(e2.result, e2.tag), e2.anchor !== null && (e2.anchorMap[e2[o2(556)]] = e2.result)) : A(e2, `cannot resolve a node with !<` + e2.tag + `> explicit tag`);
  }
  return e2[o2(591)] !== null && e2.listener(`close`, e2), e2.tag !== null || e2.anchor !== null || f2;
}
e(z, `composeNode`);
function Pt(e2) {
  var n2 = t, r2 = e2.position, i2, a2, o2, s2 = false, c2;
  for (e2.version = null, e2.checkLineBreaks = e2.legacy, e2[n2(579)] = /* @__PURE__ */ Object.create(null), e2.anchorMap = /* @__PURE__ */ Object.create(null); (c2 = e2.input[n2(600)](e2.position)) !== 0 && (I(e2, true, -1), c2 = e2.input[n2(600)](e2.position), !(e2.lineIndent > 0 || c2 !== 37)); ) {
    for (s2 = true, c2 = e2[n2(550)].charCodeAt(++e2.position), i2 = e2.position; c2 !== 0 && !D(c2); ) c2 = e2.input.charCodeAt(++e2.position);
    for (a2 = e2.input[n2(586)](i2, e2.position), o2 = [], a2.length < 1 && A(e2, `directive name must not be less than one character in length`); c2 !== 0; ) {
      for (; E(c2); ) c2 = e2.input.charCodeAt(++e2[n2(573)]);
      if (c2 === 35) {
        do
          c2 = e2.input.charCodeAt(++e2[n2(573)]);
        while (c2 !== 0 && !T(c2));
        break;
      }
      if (T(c2)) break;
      for (i2 = e2.position; c2 !== 0 && !D(c2); ) c2 = e2.input.charCodeAt(++e2.position);
      o2.push(e2.input.slice(i2, e2.position));
    }
    c2 !== 0 && F(e2), S.call(St, a2) ? St[a2](e2, a2, o2) : M(e2, `unknown document directive "` + a2 + `"`);
  }
  if (I(e2, true, -1), e2.lineIndent === 0 && e2[n2(550)][n2(600)](e2.position) === 45 && e2.input.charCodeAt(e2.position + 1) === 45 && e2.input[n2(600)](e2[n2(573)] + 2) === 45 ? (e2[n2(573)] += 3, I(e2, true, -1)) : s2 && A(e2, `directives end mark is expected`), z(e2, e2.lineIndent - 1, w, false, true), I(e2, true, -1), e2.checkLineBreaks && st.test(e2.input[n2(586)](r2, e2.position)) && M(e2, `non-ASCII line breaks are interpreted as content`), e2.documents.push(e2[n2(516)]), e2[n2(573)] === e2.lineStart && L(e2)) {
    e2.input.charCodeAt(e2.position) === 46 && (e2[n2(573)] += 3, I(e2, true, -1));
    return;
  }
  if (e2.position < e2.length - 1) A(e2, `end of the stream or a document separator is expected`);
  else return;
}
e(Pt, t(601));
function Ft(e2, n2) {
  var r2 = t;
  e2 = String(e2), n2 || (n2 = {}), e2[r2(574)] !== 0 && (e2.charCodeAt(e2.length - 1) !== 10 && e2.charCodeAt(e2.length - 1) !== 13 && (e2 += `
`), e2.charCodeAt(0) === 65279 && (e2 = e2.slice(1)));
  var i2 = new bt(e2, n2), a2 = e2[r2(460)](`\0`);
  for (a2 !== -1 && (i2.position = a2, A(i2, r2(523))), i2.input += `\0`; i2.input.charCodeAt(i2[r2(573)]) === 32; ) i2.lineIndent += 1, i2.position += 1;
  for (; i2.position < i2.length - 1; ) Pt(i2);
  return i2.documents;
}
e(Ft, t(533));
function It(e2, t2, n2) {
  typeof t2 == `object` && t2 && n2 === void 0 && (n2 = t2, t2 = null);
  var r2 = Ft(e2, n2);
  if (typeof t2 != `function`) return r2;
  for (var i2 = 0, a2 = r2.length; i2 < a2; i2 += 1) t2(r2[i2]);
}
e(It, `loadAll$1`);
function Lt(e2, n2) {
  var r2 = t, i2 = Ft(e2, n2);
  if (i2.length !== 0) {
    if (i2[r2(574)] === 1) return i2[0];
    throw new d(`expected a single document in the stream, but found more`);
  }
}
e(Lt, `load$1`);
var Rt = { loadAll: It, load: Lt }, zt = Object.prototype.toString, Bt = Object[t(567)][t(478)], Vt = 65279, Ht = 9, B = 10, Ut = 13, Wt = 32, Gt = 33, Kt = 34, qt = 35, Jt = 37, Yt = 38, Xt = 39, Zt = 42, Qt = 44, $t = 45, V = 58, en = 61, tn = 62, nn = 63, rn = 64, an = 91, on = 93, sn = 96, cn = 123, ln = 124, un = 125, H = {};
H[0] = `\\0`, H[7] = `\\a`, H[8] = `\\b`, H[9] = `\\t`, H[10] = `\\n`, H[11] = `\\v`, H[12] = `\\f`, H[13] = `\\r`, H[27] = `\\e`, H[34] = `\\"`, H[92] = `\\\\`, H[133] = `\\N`, H[160] = `\\_`, H[8232] = `\\L`, H[8233] = `\\P`;
var dn = [`y`, `Y`, t(481), t(597), `YES`, `on`, `On`, `ON`, `n`, `N`, `no`, `No`, `NO`, `off`, `Off`, `OFF`], fn = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function pn(e2, n2) {
  var r2 = t, i2, a2, o2, s2, c2, l2, u2;
  if (n2 === null) return {};
  for (i2 = {}, a2 = Object.keys(n2), o2 = 0, s2 = a2.length; o2 < s2; o2 += 1) c2 = a2[o2], l2 = String(n2[c2]), c2.slice(0, 2) === `!!` && (c2 = `tag:yaml.org,2002:` + c2[r2(586)](2)), u2 = e2.compiledTypeMap[r2(603)][c2], u2 && Bt.call(u2.styleAliases, l2) && (l2 = u2.styleAliases[l2]), i2[c2] = l2;
  return i2;
}
e(pn, t(592));
function mn(e2) {
  var t2 = e2.toString(16).toUpperCase(), n2, r2;
  if (e2 <= 255) n2 = `x`, r2 = 2;
  else if (e2 <= 65535) n2 = `u`, r2 = 4;
  else if (e2 <= 4294967295) n2 = `U`, r2 = 8;
  else throw new d(`code point within a string may not be greater than 0xFFFFFFFF`);
  return `\\` + n2 + c.repeat(`0`, r2 - t2.length) + t2;
}
e(mn, `encodeHex`);
var hn = 1, U = 2;
function gn(e2) {
  var n2 = t;
  this[n2(555)] = e2.schema || et, this.indent = Math.max(1, e2.indent || 2), this.noArrayIndent = e2.noArrayIndent || false, this.skipInvalid = e2.skipInvalid || false, this.flowLevel = c[n2(569)](e2.flowLevel) ? -1 : e2[n2(474)], this.styleMap = pn(this[n2(555)], e2.styles || null), this.sortKeys = e2.sortKeys || false, this.lineWidth = e2[n2(553)] || 80, this.noRefs = e2.noRefs || false, this.noCompatMode = e2.noCompatMode || false, this[n2(457)] = e2.condenseFlow || false, this.quotingType = e2.quotingType === `"` ? U : hn, this.forceQuotes = e2.forceQuotes || false, this.replacer = typeof e2.replacer == `function` ? e2.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = ``, this[n2(503)] = [], this.usedDuplicates = null;
}
e(gn, `State`);
function _n(e2, t2) {
  for (var n2 = c.repeat(` `, t2), r2 = 0, i2 = -1, a2 = ``, o2, s2 = e2.length; r2 < s2; ) i2 = e2.indexOf(`
`, r2), i2 === -1 ? (o2 = e2.slice(r2), r2 = s2) : (o2 = e2.slice(r2, i2 + 1), r2 = i2 + 1), o2.length && o2 !== `
` && (a2 += n2), a2 += o2;
  return a2;
}
e(_n, `indentString`);
function W(e2, t2) {
  return `
` + c.repeat(` `, e2.indent * t2);
}
e(W, `generateNextLine`);
function vn(e2, n2) {
  var r2 = t, i2, a2, o2;
  for (i2 = 0, a2 = e2.implicitTypes[r2(574)]; i2 < a2; i2 += 1) if (o2 = e2.implicitTypes[i2], o2[r2(507)](n2)) return true;
  return false;
}
e(vn, `testImplicitResolving`);
function G(e2) {
  return e2 === Wt || e2 === Ht;
}
e(G, `isWhitespace`);
function K(e2) {
  return 32 <= e2 && e2 <= 126 || 161 <= e2 && e2 <= 55295 && e2 !== 8232 && e2 !== 8233 || 57344 <= e2 && e2 <= 65533 && e2 !== Vt || 65536 <= e2 && e2 <= 1114111;
}
e(K, `isPrintable`);
function yn(e2) {
  return K(e2) && e2 !== Vt && e2 !== Ut && e2 !== B;
}
e(yn, `isNsCharOrWhitespace`);
function bn(e2, t2, n2) {
  var r2 = yn(e2), i2 = r2 && !G(e2);
  return (n2 ? r2 : r2 && e2 !== Qt && e2 !== an && e2 !== on && e2 !== cn && e2 !== un) && e2 !== qt && !(t2 === V && !i2) || yn(t2) && !G(t2) && e2 === qt || t2 === V && i2;
}
e(bn, `isPlainSafe`);
function xn(e2) {
  return K(e2) && e2 !== Vt && !G(e2) && e2 !== $t && e2 !== nn && e2 !== V && e2 !== Qt && e2 !== an && e2 !== on && e2 !== cn && e2 !== un && e2 !== qt && e2 !== Yt && e2 !== Zt && e2 !== Gt && e2 !== ln && e2 !== en && e2 !== tn && e2 !== Xt && e2 !== Kt && e2 !== Jt && e2 !== rn && e2 !== sn;
}
e(xn, `isPlainSafeFirst`);
function Sn(e2) {
  return !G(e2) && e2 !== V;
}
e(Sn, `isPlainSafeLast`);
function q(e2, t2) {
  var n2 = e2.charCodeAt(t2), r2;
  return n2 >= 55296 && n2 <= 56319 && t2 + 1 < e2.length && (r2 = e2.charCodeAt(t2 + 1), r2 >= 56320 && r2 <= 57343) ? (n2 - 55296) * 1024 + r2 - 56320 + 65536 : n2;
}
e(q, `codePointAt`);
function Cn(e2) {
  return /^\n* /.test(e2);
}
e(Cn, `needIndentIndicator`);
var wn = 1, Tn = 2, En = 3, Dn = 4, J = 5;
function On(e2, n2, r2, i2, a2, o2, s2, c2) {
  var l2 = t, u2, d2 = 0, f2 = null, p2 = false, m2 = false, h2 = i2 !== -1, g2 = -1, _2 = xn(q(e2, 0)) && Sn(q(e2, e2.length - 1));
  if (n2 || s2) for (u2 = 0; u2 < e2[l2(574)]; d2 >= 65536 ? u2 += 2 : u2++) {
    if (d2 = q(e2, u2), !K(d2)) return J;
    _2 && (_2 = bn(d2, f2, c2)), f2 = d2;
  }
  else {
    for (u2 = 0; u2 < e2[l2(574)]; d2 >= 65536 ? u2 += 2 : u2++) {
      if (d2 = q(e2, u2), d2 === B) p2 = true, h2 && (m2 || (m2 = u2 - g2 - 1 > i2 && e2[g2 + 1] !== ` `), g2 = u2);
      else if (!K(d2)) return J;
      _2 && (_2 = bn(d2, f2, c2)), f2 = d2;
    }
    m2 || (m2 = h2 && u2 - g2 - 1 > i2 && e2[g2 + 1] !== ` `);
  }
  return !p2 && !m2 ? _2 && !s2 && !a2(e2) ? wn : o2 === U ? J : Tn : r2 > 9 && Cn(e2) ? J : s2 ? o2 === U ? J : Tn : m2 ? Dn : En;
}
e(On, `chooseScalarStyle`);
function kn(t2, n2, r2, i2, a2) {
  t2.dump = (function() {
    var o2 = j;
    if (n2.length === 0) return t2.quotingType === U ? `""` : `''`;
    if (!t2.noCompatMode && (dn[o2(460)](n2) !== -1 || fn.test(n2))) return t2.quotingType === U ? `"` + n2 + `"` : `'` + n2 + `'`;
    var s2 = t2.indent * Math.max(1, r2), c2 = t2.lineWidth === -1 ? -1 : Math[o2(593)](Math.min(t2.lineWidth, 40), t2.lineWidth - s2), l2 = i2 || t2[o2(474)] > -1 && r2 >= t2.flowLevel;
    function u2(e2) {
      return vn(t2, e2);
    }
    switch (e(u2, `testAmbiguity`), On(n2, l2, t2[o2(536)], c2, u2, t2.quotingType, t2[o2(479)] && !i2, a2)) {
      case wn:
        return n2;
      case Tn:
        return `'` + n2.replace(/'/g, `''`) + `'`;
      case En:
        return `|` + An(n2, t2.indent) + Y(_n(n2, s2));
      case Dn:
        return `>` + An(n2, t2.indent) + Y(_n(jn(n2, c2), s2));
      case J:
        return `"` + Nn(n2) + `"`;
      default:
        throw new d(`impossible error: invalid scalar style`);
    }
  })();
}
e(kn, `writeScalar`);
function An(e2, t2) {
  var n2 = Cn(e2) ? String(t2) : ``, r2 = e2[e2.length - 1] === `
`;
  return n2 + (r2 && (e2[e2.length - 2] === `
` || e2 === `
`) ? `+` : r2 ? `` : `-`) + `
`;
}
e(An, `blockHeader`);
function Y(e2) {
  return e2[e2.length - 1] === `
` ? e2.slice(0, -1) : e2;
}
e(Y, t(598));
function jn(e2, n2) {
  for (var r2 = t, i2 = /(\n+)([^\n]*)/g, a2 = (function() {
    var t2 = j, r3 = e2.indexOf(`
`);
    return r3 = r3 === -1 ? e2.length : r3, i2.lastIndex = r3, Mn(e2[t2(586)](0, r3), n2);
  })(), o2 = e2[0] === `
` || e2[0] === ` `, s2, c2; c2 = i2[r2(504)](e2); ) {
    var l2 = c2[1], u2 = c2[2];
    s2 = u2[0] === ` `, a2 += l2 + (!o2 && !s2 && u2 !== `` ? `
` : ``) + Mn(u2, n2), o2 = s2;
  }
  return a2;
}
e(jn, `foldString`);
function Mn(e2, n2) {
  var r2 = t;
  if (e2 === `` || e2[0] === ` `) return e2;
  for (var i2 = / [^ ]/g, a2, o2 = 0, s2, c2 = 0, l2 = 0, u2 = ``; a2 = i2.exec(e2); ) l2 = a2.index, l2 - o2 > n2 && (s2 = c2 > o2 ? c2 : l2, u2 += `
` + e2[r2(586)](o2, s2), o2 = s2 + 1), c2 = l2;
  return u2 += `
`, e2.length - o2 > n2 && c2 > o2 ? u2 += e2[r2(586)](o2, c2) + `
` + e2.slice(c2 + 1) : u2 += e2.slice(o2), u2.slice(1);
}
e(Mn, `foldLine`);
function Nn(e2) {
  for (var t2 = ``, n2 = 0, r2, i2 = 0; i2 < e2.length; n2 >= 65536 ? i2 += 2 : i2++) n2 = q(e2, i2), r2 = H[n2], !r2 && K(n2) ? (t2 += e2[i2], n2 >= 65536 && (t2 += e2[i2 + 1])) : t2 += r2 || mn(n2);
  return t2;
}
e(Nn, `escapeString`);
function Pn(e2, t2, n2) {
  var r2 = ``, i2 = e2.tag, a2, o2, s2;
  for (a2 = 0, o2 = n2.length; a2 < o2; a2 += 1) s2 = n2[a2], e2.replacer && (s2 = e2.replacer.call(n2, String(a2), s2)), (Q(e2, t2, s2, false, false) || s2 === void 0 && Q(e2, t2, null, false, false)) && (r2 !== `` && (r2 += `,` + (e2.condenseFlow ? `` : ` `)), r2 += e2.dump);
  e2.tag = i2, e2.dump = `[` + r2 + `]`;
}
e(Pn, `writeFlowSequence`);
function Fn(e2, n2, r2, i2) {
  var a2 = t, o2 = ``, s2 = e2[a2(575)], c2, l2, u2;
  for (c2 = 0, l2 = r2.length; c2 < l2; c2 += 1) u2 = r2[c2], e2[a2(509)] && (u2 = e2.replacer.call(r2, String(c2), u2)), (Q(e2, n2 + 1, u2, true, true, false, true) || u2 === void 0 && Q(e2, n2 + 1, null, true, true, false, true)) && ((!i2 || o2 !== ``) && (o2 += W(e2, n2)), e2.dump && B === e2.dump.charCodeAt(0) ? o2 += `-` : o2 += `- `, o2 += e2.dump);
  e2.tag = s2, e2.dump = o2 || `[]`;
}
e(Fn, `writeBlockSequence`);
function In(e2, n2, r2) {
  var i2 = t, a2 = ``, o2 = e2[i2(575)], s2 = Object.keys(r2), c2, l2, u2, d2, f2;
  for (c2 = 0, l2 = s2.length; c2 < l2; c2 += 1) f2 = ``, a2 !== `` && (f2 += `, `), e2.condenseFlow && (f2 += `"`), u2 = s2[c2], d2 = r2[u2], e2.replacer && (d2 = e2[i2(509)][i2(546)](r2, u2, d2)), Q(e2, n2, u2, false, false) && (e2.dump[i2(574)] > 1024 && (f2 += `? `), f2 += e2.dump + (e2.condenseFlow ? `"` : ``) + `:` + (e2.condenseFlow ? `` : ` `), Q(e2, n2, d2, false, false) && (f2 += e2[i2(577)], a2 += f2));
  e2.tag = o2, e2.dump = `{` + a2 + `}`;
}
e(In, `writeFlowMapping`);
function Ln(e2, n2, r2, i2) {
  var a2 = t, o2 = ``, s2 = e2.tag, c2 = Object.keys(r2), l2, u2, f2, p2, m2, h2;
  if (e2.sortKeys === true) c2.sort();
  else if (typeof e2.sortKeys == `function`) c2[a2(534)](e2.sortKeys);
  else if (e2[a2(549)]) throw new d(`sortKeys must be a boolean or a function`);
  for (l2 = 0, u2 = c2.length; l2 < u2; l2 += 1) h2 = ``, (!i2 || o2 !== ``) && (h2 += W(e2, n2)), f2 = c2[l2], p2 = r2[f2], e2.replacer && (p2 = e2.replacer.call(r2, f2, p2)), Q(e2, n2 + 1, f2, true, true, true) && (m2 = e2.tag !== null && e2.tag !== `?` || e2.dump && e2.dump.length > 1024, m2 && (e2[a2(577)] && B === e2.dump.charCodeAt(0) ? h2 += `?` : h2 += `? `), h2 += e2.dump, m2 && (h2 += W(e2, n2)), Q(e2, n2 + 1, p2, true, m2) && (e2.dump && B === e2[a2(577)].charCodeAt(0) ? h2 += `:` : h2 += `: `, h2 += e2.dump, o2 += h2));
  e2[a2(575)] = s2, e2.dump = o2 || `{}`;
}
e(Ln, `writeBlockMapping`);
function X(e2, n2, r2) {
  var i2 = t, a2, o2 = r2 ? e2.explicitTypes : e2.implicitTypes, s2, c2, l2, u2;
  for (s2 = 0, c2 = o2.length; s2 < c2; s2 += 1) if (l2 = o2[s2], (l2.instanceOf || l2[i2(477)]) && (!l2.instanceOf || typeof n2 == i2(470) && n2 instanceof l2.instanceOf) && (!l2.predicate || l2.predicate(n2))) {
    if (r2 ? l2[i2(472)] && l2.representName ? e2.tag = l2.representName(n2) : e2.tag = l2[i2(575)] : e2.tag = `?`, l2.represent) {
      if (u2 = e2[i2(486)][l2.tag] || l2.defaultStyle, zt.call(l2.represent) === `[object Function]`) a2 = l2.represent(n2, u2);
      else if (Bt.call(l2.represent, u2)) a2 = l2.represent[u2](n2, u2);
      else throw new d(`!<` + l2.tag + i2(521) + u2 + `" style`);
      e2.dump = a2;
    }
    return true;
  }
  return false;
}
function Z() {
  var e2 = [`kind`, `True`, `null`, `Yes`, `dropEndingNewline`, `Schema$1`, `charCodeAt`, `readDocument`, `Function yaml.`, `fallback`, `readBlockScalar`, `38YtkCzR`, `linesBefore`, `create`, `condenseFlow`, `line`, `number`, `indexOf`, `tag:yaml.org,2002:`, `56DPpYTP`, `repeat`, `keys`, `test`, `uppercase`, `replace`, `implicit`, `compiledExplicit`, `object`, `isHexCode`, `multi`, `toUpperCase`, `flowLevel`, `786345axFrNE`, `repeat of an indentation width identifier`, `predicate`, `hasOwnProperty`, `forceQuotes`, `camelcase`, `yes`, `unexpected end of the stream within a flow collection`, `lowercase`, `linesAfter`, `False`, `styleMap`, `loadKind`, `firstTabInLine`, `isArray`, `.NAN`, `[object Object]`, `onWarning`, `_class`, `Null`, `hex`, `mark`, `nested arrays are not supported inside keys`, `sequence`, `Unknown kind "`, `1389110FBYpdM`, `implicitTypes`, `2075628WrruTZ`, `duplicates`, `exec`, `is_EOL`, `2770SYLsLH`, `resolve`, `isBoolean`, `replacer`, `construct`, `tab characters must not be used in indentation`, `[object Uint8Array]`, `storeMappingPair`, `constructor`, `compiledImplicit`, `result`, `tag:yaml.org,2002:map`, `tag:yaml.org,2002:timestamp`, `> tag; it should be "`, `YAMLException`, `> tag resolver accepts not "`, `&ref_`, `null byte is not allowed in input`, `unsupported YAML version of the document`, `*ref_`, `stack`, `expected valid JSON character`, `compileStyleAliases`, `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`, `lineStart`, `6ooRFps`, `throwError`, `loadDocuments`, `sort`, `dec`, `indent`, `instanceOf`, `representName`, `constructYamlTimestamp`, `1317555MYXeUD`, `Date resolve error`, `isNegativeZero`, `toISOString`, `^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$`, `tag suffix cannot contain exclamation marks`, `call`, `141988XSAbsU`, `formatError`, `sortKeys`, `input`, `legacy`, `lineIndent`, `lineWidth`, `octal`, `schema`, `anchor`, `push`, `ill-formed tag prefix (second argument) of the TAG directive`, `tag:yaml.org,2002:null`, `NULL`, `captureSegment`, `toString`, `filename`, `options`, `compiledTypeMap`, `simpleEscapeSequence`, `prototype`, `constructYamlSet`, `isNothing`, `scalar`, `skipInvalid`, `Specified list of YAML types (or a single Type object) contains a non-Type object.`, `position`, `length`, `tag`, `83943IaFOAV`, `dump`, `concat`, `tagMap`, `representYamlTimestamp`, `name`, `unknown tag !<`, `mapping`, `empty`, `tag suffix cannot contain flow indicator characters`, `slice`, `toArray`, `extend`, `incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line`, `reason`, `listener`, `compileStyleMap`, `max`];
  return Z = function() {
    return e2;
  }, Z();
}
e(X, `detectType`);
function Q(e2, n2, r2, i2, a2, o2, s2) {
  var c2 = t;
  e2.tag = null, e2[c2(577)] = r2, X(e2, r2, false) || X(e2, r2, true);
  var l2 = zt.call(e2.dump), u2 = i2, f2;
  i2 && (i2 = e2[c2(474)] < 0 || e2.flowLevel > n2);
  var p2 = l2 === `[object Object]` || l2 === `[object Array]`, m2, h2;
  if (p2 && (m2 = e2[c2(503)].indexOf(r2), h2 = m2 !== -1), (e2.tag !== null && e2.tag !== `?` || h2 || e2[c2(536)] !== 2 && n2 > 0) && (a2 = false), h2 && e2.usedDuplicates[m2]) e2.dump = c2(525) + m2;
  else {
    if (p2 && h2 && !e2.usedDuplicates[m2] && (e2.usedDuplicates[m2] = true), l2 === `[object Object]`) i2 && Object[c2(464)](e2.dump)[c2(574)] !== 0 ? (Ln(e2, n2, e2.dump, a2), h2 && (e2.dump = `&ref_` + m2 + e2.dump)) : (In(e2, n2, e2.dump), h2 && (e2.dump = c2(522) + m2 + ` ` + e2[c2(577)]));
    else if (l2 === `[object Array]`) i2 && e2.dump[c2(574)] !== 0 ? (e2.noArrayIndent && !s2 && n2 > 0 ? Fn(e2, n2 - 1, e2[c2(577)], a2) : Fn(e2, n2, e2.dump, a2), h2 && (e2.dump = c2(522) + m2 + e2.dump)) : (Pn(e2, n2, e2[c2(577)]), h2 && (e2.dump = `&ref_` + m2 + ` ` + e2[c2(577)]));
    else if (l2 === `[object String]`) e2.tag !== `?` && kn(e2, e2.dump, n2, o2, u2);
    else if (l2 === `[object Undefined]`) return false;
    else {
      if (e2[c2(571)]) return false;
      throw new d(`unacceptable kind of an object to dump ` + l2);
    }
    e2.tag !== null && e2.tag !== `?` && (f2 = encodeURI(e2.tag[0] === `!` ? e2.tag.slice(1) : e2.tag)[c2(467)](/!/g, `%21`), f2 = e2.tag[0] === `!` ? `!` + f2 : f2.slice(0, 18) === `tag:yaml.org,2002:` ? `!!` + f2.slice(18) : `!<` + f2 + `>`, e2.dump = f2 + ` ` + e2[c2(577)]);
  }
  return true;
}
e(Q, `writeNode`);
function Rn(e2, t2) {
  var n2 = [], r2 = [], i2, a2;
  for ($(e2, n2, r2), i2 = 0, a2 = r2.length; i2 < a2; i2 += 1) t2.duplicates.push(n2[r2[i2]]);
  t2.usedDuplicates = Array(a2);
}
e(Rn, `getDuplicateReferences`);
function $(e2, n2, r2) {
  var i2 = t, a2, o2, s2;
  if (typeof e2 == `object` && e2) if (o2 = n2.indexOf(e2), o2 !== -1) r2[i2(460)](o2) === -1 && r2.push(o2);
  else if (n2.push(e2), Array.isArray(e2)) for (o2 = 0, s2 = e2[i2(574)]; o2 < s2; o2 += 1) $(e2[o2], n2, r2);
  else for (a2 = Object.keys(e2), o2 = 0, s2 = a2.length; o2 < s2; o2 += 1) $(e2[a2[o2]], n2, r2);
}
e($, `inspectNode`);
function zn(e2, t2) {
  t2 || (t2 = {});
  var n2 = new gn(t2);
  n2.noRefs || Rn(e2, n2);
  var r2 = e2;
  return n2.replacer && (r2 = n2.replacer.call({ "": r2 }, ``, r2)), Q(n2, 0, r2, true, true) ? n2.dump + `
` : ``;
}
e(zn, `dump$1`);
var Bn = { dump: zn };
function Vn(e2, t2) {
  return function() {
    throw Error(j(602) + e2 + ` is removed in js-yaml 4. Use yaml.` + t2 + ` instead, which is now safe by default.`);
  };
}
e(Vn, `renamed`);
var Hn = Te, Un = Rt.load;
Rt.loadAll, Bn.dump;
export {
  Hn as n,
  Un as t
};
