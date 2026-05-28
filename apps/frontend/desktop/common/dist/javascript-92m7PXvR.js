var e = t;
function t(e2, t2) {
  return e2 -= 451, d()[e2];
}
(function(e2, n2) {
  let r2 = t, i2 = e2();
  for (; ; ) try {
    if (parseInt(r2(475)) / 1 + parseInt(r2(465)) / 2 + -parseInt(r2(459)) / 3 + -parseInt(r2(461)) / 4 * (parseInt(r2(482)) / 5) + parseInt(r2(451)) / 6 * (parseInt(r2(464)) / 7) + -parseInt(r2(462)) / 8 + parseInt(r2(471)) / 9 * (parseInt(r2(456)) / 10) === n2) break;
    i2.push(i2.shift());
  } catch {
    i2.push(i2.shift());
  }
})(d, 186608);
var n = `[A-Za-z$_][0-9A-Za-z$_]*`, r = `as.in.of.if.for.while.finally.var.new.function.do.return.void.else.break.catch.instanceof.with.throw.case.default.try.switch.continue.typeof.delete.let.yield.const.class.debugger.async.await.static.import.from.export.extends.using`.split(`.`), i = [`true`, e(460), `null`, `undefined`, `NaN`, `Infinity`], a = `Object.Function.Boolean.Symbol.Math.Date.Number.BigInt.String.RegExp.Array.Float32Array.Float64Array.Int8Array.Uint8Array.Uint8ClampedArray.Int16Array.Int32Array.Uint16Array.Uint32Array.BigInt64Array.BigUint64Array.Set.Map.WeakSet.WeakMap.ArrayBuffer.SharedArrayBuffer.Atomics.DataView.JSON.Promise.Generator.GeneratorFunction.AsyncFunction.Reflect.Proxy.Intl.WebAssembly`.split(`.`), o = [e(476), `EvalError`, `InternalError`, e(478), `ReferenceError`, `SyntaxError`, `TypeError`, `URIError`], s = [`setInterval`, `setTimeout`, `clearInterval`, e(472), e(470), `exports`, `eval`, `isFinite`, `isNaN`, `parseFloat`, `parseInt`, `decodeURI`, `decodeURIComponent`, `encodeURI`, `encodeURIComponent`, `escape`, `unescape`], c = [`arguments`, `this`, `super`, `console`, `window`, `document`, `localStorage`, `sessionStorage`, e(488), `global`], l = [].concat(s, a, o);
function u(u2) {
  let d2 = e, f = u2.regex, p = (e2, { after: t2 }) => {
    let n2 = `</` + e2[0].slice(1);
    return e2.input.indexOf(n2, t2) !== -1;
  }, m = n, h = { begin: `<>`, end: `</>` }, g = /<[A-Za-z0-9\\._:-]+\s*\/>/, _ = { begin: /<[A-Za-z0-9\\._:-]+/, end: /\/[A-Za-z0-9\\._:-]+>|\/>/, isTrulyOpeningTag: (e2, n2) => {
    let r2 = t, i2 = e2[0].length + e2.index, a2 = e2.input[i2];
    if (a2 === `<` || a2 === `,`) {
      n2[r2(489)]();
      return;
    }
    a2 === `>` && (p(e2, { after: i2 }) || n2.ignoreMatch());
    let o2, s2 = e2.input[r2(455)](i2);
    if (o2 = s2[r2(481)](/^\s*=/)) {
      n2[r2(489)]();
      return;
    }
    if ((o2 = s2.match(/^\s+extends\s+/)) && o2.index === 0) {
      n2[r2(489)]();
      return;
    }
  } }, v = { $pattern: n, keyword: r, literal: i, built_in: l, "variable.language": c }, y = d2(474), b = { className: `number`, variants: [{ begin: `(\\b(` + y + `)((\\.([0-9](_?[0-9])*))|\\.)?|(\\.([0-9](_?[0-9])*)` + d2(486) + `[0-9](_?[0-9])*)\\b` }, { begin: `\\b(` + y + `)\\b((\\.([0-9](_?[0-9])*))\\b|\\.)?|(\\.([0-9](_?[0-9])*))\\b` }, { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` }, { begin: d2(454) }, { begin: `\\b0[bB][0-1](_?[0-1])*n?\\b` }, { begin: `\\b0[oO][0-7](_?[0-7])*n?\\b` }, { begin: `\\b0[0-7]+n?\\b` }], relevance: 0 }, x = { className: `subst`, begin: d2(485), end: `\\}`, keywords: v, contains: [] }, S = { begin: d2(468), end: ``, starts: { end: "`", returnEnd: false, contains: [u2[d2(467)], x], subLanguage: `xml` } }, C = { begin: ".?css`", end: ``, starts: { end: "`", returnEnd: false, contains: [u2.BACKSLASH_ESCAPE, x], subLanguage: `css` } }, w = { begin: ".?gql`", end: ``, starts: { end: "`", returnEnd: false, contains: [u2.BACKSLASH_ESCAPE, x], subLanguage: `graphql` } }, T = { className: `string`, begin: "`", end: "`", contains: [u2.BACKSLASH_ESCAPE, x] }, E = { className: `comment`, variants: [u2.COMMENT(/\/\*\*(?!\/)/, `\\*/`, { relevance: 0, contains: [{ begin: d2(479), relevance: 0, contains: [{ className: `doctag`, begin: `@[A-Za-z]+` }, { className: `type`, begin: `\\{`, end: `\\}`, excludeEnd: true, excludeBegin: true, relevance: 0 }, { className: d2(463), begin: m + `(?=\\s*(-)|$)`, endsParent: true, relevance: 0 }, { begin: /(?=[^\n])\s/, relevance: 0 }] }] }), u2.C_BLOCK_COMMENT_MODE, u2.C_LINE_COMMENT_MODE] }, D = [u2.APOS_STRING_MODE, u2.QUOTE_STRING_MODE, S, C, w, T, { match: /\$\d+/ }, b];
  x.contains = D.concat({ begin: /\{/, end: /\}/, keywords: v, contains: [`self`].concat(D) });
  let O = [].concat(E, x.contains), k = O.concat([{ begin: /(\s*)\(/, end: /\)/, keywords: v, contains: [`self`].concat(O) }]), A = { className: `params`, begin: /(\s*)\(/, end: /\)/, excludeBegin: true, excludeEnd: true, keywords: v, contains: k }, j = { variants: [{ match: [/class/, /\s+/, m, /\s+/, /extends/, /\s+/, f.concat(m, `(`, f.concat(/\./, m), `)*`)], scope: { 1: `keyword`, 3: `title.class`, 5: `keyword`, 7: `title.class.inherited` } }, { match: [/class/, /\s+/, m], scope: { 1: `keyword`, 3: d2(477) } }] }, M = { relevance: 0, match: f.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/), className: d2(477), keywords: { _: [...a, ...o] } }, N = { label: `use_strict`, className: `meta`, relevance: 10, begin: /^\s*['"]use (strict|asm)['"]/ }, P = { variants: [{ match: [/function/, /\s+/, m, /(?=\s*\()/] }, { match: [/function/, /\s*(?=\()/] }], className: { 1: `keyword`, 3: d2(466) }, label: `func.def`, contains: [A], illegal: /%/ }, F = { relevance: 0, match: /\b[A-Z][A-Z_0-9]+\b/, className: d2(480) };
  function I(e2) {
    let t2 = d2;
    return f.concat(`(?!`, e2[t2(458)](`|`), `)`);
  }
  let L = { match: f.concat(/\b/, I([...s, `super`, `import`].map((e2) => e2 + `\\s*\\(`)), m, f.lookahead(/\s*\(/)), className: `title.function`, relevance: 0 }, R = { begin: f[d2(453)](/\./, f.lookahead(f.concat(m, /(?![0-9A-Za-z$_(])/))), end: m, excludeBegin: true, keywords: `prototype`, className: `property`, relevance: 0 }, z = { match: [/get|set/, /\s+/, m, /(?=\()/], className: { 1: `keyword`, 3: `title.function` }, contains: [{ begin: /\(\)/ }, A] }, B = `(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|` + u2.UNDERSCORE_IDENT_RE + `)\\s*=>`, V = { match: [/const|var|let/, /\s+/, m, /\s*/, /=\s*/, /(async\s*)?/, f.lookahead(B)], keywords: `async`, className: { 1: `keyword`, 3: `title.function` }, contains: [A] };
  return { name: `JavaScript`, aliases: [`js`, `jsx`, `mjs`, d2(469)], keywords: v, exports: { PARAMS_CONTAINS: k, CLASS_REFERENCE: M }, illegal: /#(?![$_A-z])/, contains: [u2[d2(473)]({ label: `shebang`, binary: d2(457), relevance: 5 }), N, u2.APOS_STRING_MODE, u2.QUOTE_STRING_MODE, S, C, w, T, E, { match: /\$\d+/ }, b, M, { scope: `attr`, match: m + f.lookahead(`:`), relevance: 0 }, V, { begin: `(` + u2.RE_STARTERS_RE + `|\\b(case|return|throw)\\b)\\s*`, keywords: d2(487), relevance: 0, contains: [E, u2.REGEXP_MODE, { className: `function`, begin: B, returnBegin: true, end: d2(483), contains: [{ className: `params`, variants: [{ begin: u2.UNDERSCORE_IDENT_RE, relevance: 0 }, { className: null, begin: /\(\s*\)/, skip: true }, { begin: /(\s*)\(/, end: /\)/, excludeBegin: true, excludeEnd: true, keywords: v, contains: k }] }] }, { begin: /,/, relevance: 0 }, { match: /\s+/, relevance: 0 }, { variants: [{ begin: h.begin, end: h.end }, { match: g }, { begin: _.begin, "on:begin": _.isTrulyOpeningTag, end: _.end }], subLanguage: `xml`, contains: [{ begin: _.begin, end: _[d2(484)], skip: true, contains: [`self`] }] }] }, P, { beginKeywords: d2(452) }, { begin: `\\b(?!function)` + u2.UNDERSCORE_IDENT_RE + d2(490), returnBegin: true, label: `func.def`, contains: [A, u2.inherit(u2.TITLE_MODE, { begin: m, className: d2(466) })] }, { match: /\.\.\./, relevance: 0 }, R, { match: `\\$` + m, relevance: 0 }, { match: [/\bconstructor(?=\s*\()/], className: { 1: `title.function` }, contains: [A] }, L, F, j, z, { match: /\$[(.]/ }] };
}
function d() {
  let e2 = "substring,890YMvaIt,node,join,132363UfcmKc,false,84KCsROB,1745488EuJhmI,variable,2149CQStXh,43000dEtwWz,title.function,BACKSLASH_ESCAPE,.?html`,cjs,require,7569KlLjxm,clearTimeout,SHEBANG,0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*,232114LRGNCu,Error,title.class,RangeError,(?=@[A-Za-z]+),variable.constant,match,58085RTctXh,\\s*=>,end,\\$\\{,))[eE][+-]?(,return throw case,module,ignoreMatch,\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{,7122dzPyHb,while if switch catch for,concat,\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b".split(`,`);
  return d = function() {
    return e2;
  }, d();
}
export {
  u as default
};
