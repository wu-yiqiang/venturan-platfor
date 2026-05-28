function e() {
  let t2 = `23412sNObzy,assign,end,cjs,575OTUwSJ,[A-Za-z$_][0-9A-Za-z$_]*,never,26234616ZAnLIw,number,2BSUkwi,BACKSLASH_ESCAPE,doctag,string,can not find mode to replace,lookahead,)\\b|\\.)?|(,exports,indexOf,)\\b,title.class.inherited,self,@[A-Za-z]+,enum,split,)((,\\*/,UNDERSCORE_IDENT_RE,bigint,)|\\.)?|(,SHEBANG,title.function,JavaScript,2880219rlBzVN,index,EvalError,10MenFih,ignoreMatch,meta,input,RE_STARTERS_RE,sessionStorage,inherit,push,Object.Function.Boolean.Symbol.Math.Date.Number.BigInt.String.RegExp.Array.Float32Array.Float64Array.Int8Array.Uint8Array.Uint8ClampedArray.Int16Array.Int32Array.Uint16Array.Uint32Array.BigInt64Array.BigUint64Array.Set.Map.WeakSet.WeakMap.ArrayBuffer.SharedArrayBuffer.Atomics.DataView.JSON.Promise.Generator.GeneratorFunction.AsyncFunction.Reflect.Proxy.Intl.WebAssembly,isTrulyOpeningTag,1234071awktla,eval,1565214WVFTPd,concat,\\b(,7HoegIQ,830485hzTKEI,keyword,11exzyQa,false,require,parseFloat,length,attr,))[eE][+-]?(,1025160acsmis`.split(`,`);
  return e = function() {
    return t2;
  }, e();
}
var t = f;
(function(e2, t2) {
  let n2 = f, r2 = e2();
  for (; ; ) try {
    if (-parseInt(n2(326)) / 1 + parseInt(n2(284)) / 2 * (-parseInt(n2(307)) / 3) + -parseInt(n2(336)) / 4 * (-parseInt(n2(340)) / 5) + -parseInt(n2(322)) / 6 + -parseInt(n2(325)) / 7 * (parseInt(n2(335)) / 8) + -parseInt(n2(320)) / 9 * (parseInt(n2(310)) / 10) + parseInt(n2(328)) / 11 * (parseInt(n2(343)) / 12) === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(e, 542622);
var n = t(341), r = `as.in.of.if.for.while.finally.var.new.function.do.return.void.else.break.catch.instanceof.with.throw.case.default.try.switch.continue.typeof.delete.let.yield.const.class.debugger.async.await.static.import.from.export.extends.using`[t(298)](`.`), i = [`true`, t(329), `null`, `undefined`, `NaN`, `Infinity`], a = t(318)[t(298)](`.`), o = [`Error`, t(309), `InternalError`, `RangeError`, `ReferenceError`, `SyntaxError`, `TypeError`, `URIError`], s = [`setInterval`, `setTimeout`, `clearInterval`, `clearTimeout`, t(330), `exports`, t(321), `isFinite`, `isNaN`, t(331), `parseInt`, `decodeURI`, `decodeURIComponent`, `encodeURI`, `encodeURIComponent`, `escape`, `unescape`], c = [`arguments`, `this`, `super`, `console`, `window`, `document`, `localStorage`, t(315), `module`, `global`], l = [][t(323)](s, a, o);
function u(e2) {
  let u2 = t, d2 = e2.regex, p = (e3, { after: t2 }) => {
    let n2 = f, r2 = `</` + e3[0].slice(1);
    return e3.input[n2(292)](r2, t2) !== -1;
  }, m = n, h = { begin: `<>`, end: `</>` }, g = /<[A-Za-z0-9\\._:-]+\s*\/>/, _ = { begin: /<[A-Za-z0-9\\._:-]+/, end: /\/[A-Za-z0-9\\._:-]+>|\/>/, isTrulyOpeningTag: (e3, t2) => {
    let n2 = f, r2 = e3[0][n2(332)] + e3[n2(308)], i2 = e3[n2(313)][r2];
    if (i2 === `<` || i2 === `,`) {
      t2.ignoreMatch();
      return;
    }
    i2 === `>` && (p(e3, { after: r2 }) || t2[n2(311)]());
    let a2, o2 = e3.input.substring(r2);
    if (a2 = o2.match(/^\s*=/)) {
      t2.ignoreMatch();
      return;
    }
    if ((a2 = o2.match(/^\s+extends\s+/)) && a2[n2(308)] === 0) {
      t2.ignoreMatch();
      return;
    }
  } }, v = { $pattern: n, keyword: r, literal: i, built_in: l, "variable.language": c }, y = `\\.([0-9](_?[0-9])*)`, b = { className: u2(344), variants: [{ begin: `(\\b(0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*` + u2(299) + y + u2(303) + y + u2(334) + `[0-9](_?[0-9])*)\\b` }, { begin: u2(324) + `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*)\\b((\\.([0-9](_?[0-9])*)` + u2(290) + y + u2(293) }, { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` }, { begin: `\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b` }, { begin: `\\b0[bB][0-1](_?[0-1])*n?\\b` }, { begin: `\\b0[oO][0-7](_?[0-7])*n?\\b` }, { begin: `\\b0[0-7]+n?\\b` }], relevance: 0 }, x = { className: `subst`, begin: `\\$\\{`, end: `\\}`, keywords: v, contains: [] }, S = { begin: ".?html`", end: ``, starts: { end: "`", returnEnd: false, contains: [e2.BACKSLASH_ESCAPE, x], subLanguage: `xml` } }, C = { begin: ".?css`", end: ``, starts: { end: "`", returnEnd: false, contains: [e2[u2(285)], x], subLanguage: `css` } }, w = { begin: ".?gql`", end: ``, starts: { end: "`", returnEnd: false, contains: [e2.BACKSLASH_ESCAPE, x], subLanguage: `graphql` } }, T = { className: u2(287), begin: "`", end: "`", contains: [e2.BACKSLASH_ESCAPE, x] }, E = { className: `comment`, variants: [e2.COMMENT(/\/\*\*(?!\/)/, u2(300), { relevance: 0, contains: [{ begin: `(?=@[A-Za-z]+)`, relevance: 0, contains: [{ className: u2(286), begin: u2(296) }, { className: `type`, begin: `\\{`, end: `\\}`, excludeEnd: true, excludeBegin: true, relevance: 0 }, { className: `variable`, begin: m + `(?=\\s*(-)|$)`, endsParent: true, relevance: 0 }, { begin: /(?=[^\n])\s/, relevance: 0 }] }] }), e2.C_BLOCK_COMMENT_MODE, e2.C_LINE_COMMENT_MODE] }, D = [e2.APOS_STRING_MODE, e2.QUOTE_STRING_MODE, S, C, w, T, { match: /\$\d+/ }, b];
  x.contains = D.concat({ begin: /\{/, end: /\}/, keywords: v, contains: [u2(295)][u2(323)](D) });
  let O = [].concat(E, x.contains), k = O.concat([{ begin: /(\s*)\(/, end: /\)/, keywords: v, contains: [`self`][u2(323)](O) }]), A = { className: `params`, begin: /(\s*)\(/, end: /\)/, excludeBegin: true, excludeEnd: true, keywords: v, contains: k }, j = { variants: [{ match: [/class/, /\s+/, m, /\s+/, /extends/, /\s+/, d2.concat(m, `(`, d2.concat(/\./, m), `)*`)], scope: { 1: `keyword`, 3: `title.class`, 5: `keyword`, 7: u2(294) } }, { match: [/class/, /\s+/, m], scope: { 1: `keyword`, 3: `title.class` } }] }, M = { relevance: 0, match: d2.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/), className: `title.class`, keywords: { _: [...a, ...o] } }, N = { label: `use_strict`, className: u2(312), relevance: 10, begin: /^\s*['"]use (strict|asm)['"]/ }, P = { variants: [{ match: [/function/, /\s+/, m, /(?=\s*\()/] }, { match: [/function/, /\s*(?=\()/] }], className: { 1: `keyword`, 3: `title.function` }, label: `func.def`, contains: [A], illegal: /%/ }, F = { relevance: 0, match: /\b[A-Z][A-Z_0-9]+\b/, className: `variable.constant` };
  function I(e3) {
    return d2.concat(`(?!`, e3.join(`|`), `)`);
  }
  let L = { match: d2.concat(/\b/, I([...s, `super`, `import`].map((e3) => e3 + `\\s*\\(`)), m, d2.lookahead(/\s*\(/)), className: `title.function`, relevance: 0 }, R = { begin: d2.concat(/\./, d2[u2(289)](d2[u2(323)](m, /(?![0-9A-Za-z$_(])/))), end: m, excludeBegin: true, keywords: `prototype`, className: `property`, relevance: 0 }, z = { match: [/get|set/, /\s+/, m, /(?=\()/], className: { 1: `keyword`, 3: u2(305) }, contains: [{ begin: /\(\)/ }, A] }, B = `(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|` + e2[u2(301)] + `)\\s*=>`, V = { match: [/const|var|let/, /\s+/, m, /\s*/, /=\s*/, /(async\s*)?/, d2.lookahead(B)], keywords: `async`, className: { 1: u2(327), 3: `title.function` }, contains: [A] };
  return { name: u2(306), aliases: [`js`, `jsx`, `mjs`, u2(339)], keywords: v, exports: { PARAMS_CONTAINS: k, CLASS_REFERENCE: M }, illegal: /#(?![$_A-z])/, contains: [e2[u2(304)]({ label: `shebang`, binary: `node`, relevance: 5 }), N, e2.APOS_STRING_MODE, e2.QUOTE_STRING_MODE, S, C, w, T, E, { match: /\$\d+/ }, b, M, { scope: `attr`, match: m + d2.lookahead(`:`), relevance: 0 }, V, { begin: `(` + e2[u2(314)] + `|\\b(case|return|throw)\\b)\\s*`, keywords: `return throw case`, relevance: 0, contains: [E, e2.REGEXP_MODE, { className: `function`, begin: B, returnBegin: true, end: `\\s*=>`, contains: [{ className: `params`, variants: [{ begin: e2.UNDERSCORE_IDENT_RE, relevance: 0 }, { className: null, begin: /\(\s*\)/, skip: true }, { begin: /(\s*)\(/, end: /\)/, excludeBegin: true, excludeEnd: true, keywords: v, contains: k }] }] }, { begin: /,/, relevance: 0 }, { match: /\s+/, relevance: 0 }, { variants: [{ begin: h.begin, end: h.end }, { match: g }, { begin: _.begin, "on:begin": _[u2(319)], end: _.end }], subLanguage: `xml`, contains: [{ begin: _.begin, end: _[u2(338)], skip: true, contains: [`self`] }] }] }, P, { beginKeywords: `while if switch catch for` }, { begin: `\\b(?!function)` + e2[u2(301)] + `\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{`, returnBegin: true, label: `func.def`, contains: [A, e2[u2(316)](e2.TITLE_MODE, { begin: m, className: `title.function` })] }, { match: /\.\.\./, relevance: 0 }, R, { match: `\\$` + m, relevance: 0 }, { match: [/\bconstructor(?=\s*\()/], className: { 1: `title.function` }, contains: [A] }, L, F, j, z, { match: /\$[(.]/ }] };
}
function d(e2) {
  let a2 = t, o2 = e2.regex, s2 = u(e2), d2 = n, f2 = [`any`, `void`, `number`, `boolean`, `string`, `object`, a2(342), `symbol`, a2(302), `unknown`], p = { begin: [/namespace/, /\s+/, e2.IDENT_RE], beginScope: { 1: a2(327), 3: `title.class` } }, m = { beginKeywords: `interface`, end: /\{/, excludeEnd: true, keywords: { keyword: `interface extends`, built_in: f2 }, contains: [s2[a2(291)].CLASS_REFERENCE] }, h = { className: `meta`, relevance: 10, begin: /^\s*['"]use strict['"]/ }, g = { $pattern: n, keyword: r.concat([`type`, `interface`, `public`, `private`, `protected`, `implements`, `declare`, `abstract`, `readonly`, a2(297), `override`, `satisfies`]), literal: i, built_in: l.concat(f2), "variable.language": c }, _ = { className: `meta`, begin: `@` + d2 }, v = (e3, t2, n2) => {
    let r2 = a2, i2 = e3.contains.findIndex((e4) => e4.label === t2);
    if (i2 === -1) throw Error(r2(288));
    e3.contains.splice(i2, 1, n2);
  };
  Object[a2(337)](s2.keywords, g), s2[a2(291)].PARAMS_CONTAINS.push(_);
  let y = s2.contains.find((e3) => e3.scope === a2(333)), b = Object.assign({}, y, { match: o2[a2(323)](d2, o2.lookahead(/\s*\?:/)) });
  s2[a2(291)].PARAMS_CONTAINS[a2(317)]([s2.exports.CLASS_REFERENCE, y, b]), s2.contains = s2.contains.concat([_, p, m, b]), v(s2, `shebang`, e2.SHEBANG()), v(s2, `use_strict`, h);
  let x = s2.contains.find((e3) => e3.label === `func.def`);
  return x.relevance = 0, Object.assign(s2, { name: `TypeScript`, aliases: [`ts`, `tsx`, `mts`, `cts`] }), s2;
}
function f(t2, n2) {
  return t2 -= 284, e()[t2];
}
export {
  d as default
};
