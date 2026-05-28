var e = s;
(function(e2, t2) {
  for (var n2 = s, r2 = e2(); ; ) try {
    if (parseInt(n2(389)) / 1 + parseInt(n2(401)) / 2 + parseInt(n2(407)) / 3 * (parseInt(n2(413)) / 4) + parseInt(n2(392)) / 5 + -parseInt(n2(390)) / 6 * (parseInt(n2(409)) / 7) + parseInt(n2(403)) / 8 * (parseInt(n2(395)) / 9) + parseInt(n2(393)) / 10 * (-parseInt(n2(394)) / 11) === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(c, 356484);
var t = `[0-9](_*[0-9])*`, n = `\\.(` + t + `)`, r = e(412), i = { className: `number`, variants: [{ begin: `(\\b(` + t + `)((` + n + `)|\\.)?|(` + n + e(406) + t + `)[fFdD]?\\b` }, { begin: `\\b(` + t + `)((` + n + e(405) }, { begin: `(` + n + `)[fFdD]?\\b` }, { begin: `\\b(` + t + `)[fFdD]\\b` }, { begin: e(399) + r + `)\\.?|(` + r + `)?\\.(` + r + `))[pP][+-]?(` + t + `)[fFdD]?\\b` }, { begin: `\\b(0|[1-9](_*[0-9])*)[lL]?\\b` }, { begin: `\\b0[xX](` + r + `)[lL]?\\b` }, { begin: `\\b0(_*[0-7])*[lL]?\\b` }, { begin: `\\b0[bB][01](_*[01])*[lL]?\\b` }], relevance: 0 };
function a(e2, t2, n2) {
  return n2 === -1 ? `` : e2.replace(t2, (r2) => a(e2, t2, n2 - 1));
}
function o(t2) {
  var n2 = e;
  let r2 = t2.regex, o2 = `[\xC0-\u02B8a-zA-Z_$][\xC0-\u02B8a-zA-Z_$0-9]*`, s2 = o2 + a(`(?:<[\xC0-\u02B8a-zA-Z_$][\xC0-\u02B8a-zA-Z_$0-9]*~~~(?:\\s*,\\s*[\xC0-\u02B8a-zA-Z_$][\xC0-\u02B8a-zA-Z_$0-9]*~~~)*>)?`, /~~~/g, 2), c2 = { keyword: `synchronized.abstract.private.var.static.if.const .for.while.strictfp.finally.protected.import.native.final.void.enum.else.break.transient.catch.instanceof.volatile.case.assert.package.default.public.try.switch.continue.throws.protected.public.private.module.requires.exports.do.sealed.yield.permits.goto.when`.split(`.`), literal: [`false`, n2(396), `null`], type: [`char`, `boolean`, n2(408), `float`, `int`, `byte`, `short`, `double`], built_in: [`super`, `this`] }, l = { className: `meta`, begin: `@[\xC0-\u02B8a-zA-Z_$][\xC0-\u02B8a-zA-Z_$0-9]*`, contains: [{ begin: /\(/, end: /\)/, contains: [n2(404)] }] }, u = { className: `params`, begin: /\(/, end: /\)/, keywords: c2, relevance: 0, contains: [t2[n2(402)]], endsParent: true };
  return { name: `Java`, aliases: [`jsp`], keywords: c2, illegal: /<\/|#/, contains: [t2.COMMENT(`/\\*\\*`, `\\*/`, { relevance: 0, contains: [{ begin: /\w+@/, relevance: 0 }, { className: `doctag`, begin: `@[A-Za-z]+` }] }), { begin: /import java\.[a-z]+\./, keywords: n2(411), relevance: 2 }, t2.C_LINE_COMMENT_MODE, t2.C_BLOCK_COMMENT_MODE, { begin: /"""/, end: /"""/, className: n2(398), contains: [t2.BACKSLASH_ESCAPE] }, t2.APOS_STRING_MODE, t2.QUOTE_STRING_MODE, { match: [/\b(?:class|interface|enum|extends|implements|new)/, /\s+/, o2], className: { 1: `keyword`, 3: `title.class` } }, { match: /non-sealed/, scope: `keyword` }, { begin: [r2.concat(/(?!else)/, o2), /\s+/, o2, /\s+/, /=(?!=)/], className: { 1: `type`, 3: `variable`, 5: n2(410) } }, { begin: [/record/, /\s+/, o2], className: { 1: `keyword`, 3: `title.class` }, contains: [u, t2.C_LINE_COMMENT_MODE, t2.C_BLOCK_COMMENT_MODE] }, { beginKeywords: `new throw return else`, relevance: 0 }, { begin: [`(?:` + s2 + `\\s+)`, t2[n2(400)], /\s*(?=\()/], className: { 2: `title.function` }, keywords: c2, contains: [{ className: `params`, begin: /\(/, end: /\)/, keywords: c2, relevance: 0, contains: [l, t2[n2(391)], t2.QUOTE_STRING_MODE, i, t2.C_BLOCK_COMMENT_MODE] }, t2[n2(397)], t2.C_BLOCK_COMMENT_MODE] }, i, l] };
}
function s(e2, t2) {
  return e2 -= 389, c()[e2];
}
function c() {
  var e2 = [`))[eE][+-]?(`, `1321167AfiTbO`, `long`, `156107Szbncf`, `operator`, `import`, `[0-9a-fA-F](_*[0-9a-fA-F])*`, `4DSYiWs`, `65255lZFaZD`, `168jeQWsu`, `APOS_STRING_MODE`, `3024555eLmDJF`, `340auxPnO`, `241769zlNwcA`, `144IuEUwv`, `true`, `C_LINE_COMMENT_MODE`, `string`, `\\b0[xX]((`, `UNDERSCORE_IDENT_RE`, `1194710WpxCTU`, `C_BLOCK_COMMENT_MODE`, `10144eQrCGn`, `self`, `)[fFdD]?\\b|\\.([fFdD]\\b)?)`];
  return c = function() {
    return e2;
  }, c();
}
export {
  o as default
};
