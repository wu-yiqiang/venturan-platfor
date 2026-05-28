(function(e2, n2) {
  let r = t, i = e2();
  for (; ; ) try {
    if (-parseInt(r(149)) / 1 + parseInt(r(130)) / 2 * (parseInt(r(121)) / 3) + parseInt(r(132)) / 4 + -parseInt(r(139)) / 5 * (-parseInt(r(128)) / 6) + -parseInt(r(125)) / 7 + parseInt(r(126)) / 8 * (parseInt(r(134)) / 9) + -parseInt(r(133)) / 10 === n2) break;
    i.push(i.shift());
  } catch {
    i.push(i.shift());
  }
})(n, 465363);
function e(e2) {
  let n2 = t, r = [n2(120), `byte`, `char`, `decimal`, `delegate`, n2(123), `dynamic`, `enum`, `float`, n2(148), n2(122), `nint`, `nuint`, `object`, `sbyte`, n2(140), `string`, `ulong`, n2(143), `ushort`], i = [`public`, `private`, n2(136), `static`, `internal`, `protected`, `abstract`, `async`, `extern`, `override`, `unsafe`, `virtual`, `new`, n2(127), `partial`], a = { keyword: `abstract.as.base.break.case.catch.class.const.continue.do.else.event.explicit.extern.finally.fixed.for.foreach.goto.if.implicit.in.interface.internal.is.lock.namespace.new.operator.out.override.params.private.protected.public.readonly.record.ref.return.scoped.sealed.sizeof.stackalloc.static.struct.switch.this.throw.try.typeof.unchecked.unsafe.using.virtual.void.volatile.while`.split(`.`)[n2(135)](`add.alias.and.ascending.args.async.await.by.descending.dynamic.equals.file.from.get.global.group.init.into.join.let.nameof.not.notnull.on.or.orderby.partial.record.remove.required.scoped.select.set.unmanaged.value|0.var.when.where.with.yield`[n2(145)](`.`)), built_in: r, literal: [n2(147), `false`, `null`, n2(131)] }, o = e2.inherit(e2.TITLE_MODE, { begin: n2(144) }), s = { className: n2(129), variants: [{ begin: `\\b(0b[01']+)` }, { begin: `(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)` }, { begin: `(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)` }], relevance: 0 }, c = { className: `string`, begin: /"""("*)(?!")(.|\n)*?"""\1/, relevance: 1 }, l = { className: n2(150), begin: `@"`, end: `"`, contains: [{ begin: `""` }] }, u = e2[n2(138)](l, { illegal: /\n/ }), d = { className: `subst`, begin: /\{/, end: /\}/, keywords: a }, f = e2.inherit(d, { illegal: /\n/ }), p = { className: `string`, begin: /\$"/, end: `"`, illegal: /\n/, contains: [{ begin: /\{\{/ }, { begin: /\}\}/ }, e2.BACKSLASH_ESCAPE, f] }, m = { className: `string`, begin: /\$@"/, end: `"`, contains: [{ begin: /\{\{/ }, { begin: /\}\}/ }, { begin: `""` }, d] }, h = e2.inherit(m, { illegal: /\n/, contains: [{ begin: /\{\{/ }, { begin: /\}\}/ }, { begin: `""` }, f] });
  d.contains = [m, p, l, e2.APOS_STRING_MODE, e2.QUOTE_STRING_MODE, s, e2[n2(137)]], f.contains = [h, p, u, e2[n2(141)], e2.QUOTE_STRING_MODE, s, e2.inherit(e2.C_BLOCK_COMMENT_MODE, { illegal: /\n/ })];
  let g = { variants: [c, m, p, l, e2.APOS_STRING_MODE, e2.QUOTE_STRING_MODE] }, _ = { begin: `<`, end: `>`, contains: [{ beginKeywords: `in out` }, o] }, v = e2.IDENT_RE + `(<` + e2.IDENT_RE + n2(119) + e2.IDENT_RE + `)*>)?(\\[\\])?`, y = { begin: `@` + e2.IDENT_RE, relevance: 0 };
  return { name: `C#`, aliases: [`cs`, `c#`], keywords: a, illegal: /::/, contains: [e2.COMMENT(n2(124), `$`, { returnBegin: true, contains: [{ className: `doctag`, variants: [{ begin: `///`, relevance: 0 }, { begin: `<!--|-->` }, { begin: `</?`, end: `>` }] }] }), e2.C_LINE_COMMENT_MODE, e2.C_BLOCK_COMMENT_MODE, { className: `meta`, begin: `#`, end: `$`, keywords: { keyword: `if else elif endif define undef warning error line region endregion pragma checksum` } }, g, s, { beginKeywords: `class interface`, relevance: 0, end: /[{;=]/, illegal: /[^\s:,]/, contains: [{ beginKeywords: `where class` }, o, _, e2.C_LINE_COMMENT_MODE, e2.C_BLOCK_COMMENT_MODE] }, { beginKeywords: n2(146), relevance: 0, end: /[{;=]/, illegal: /[^\s:]/, contains: [o, e2.C_LINE_COMMENT_MODE, e2.C_BLOCK_COMMENT_MODE] }, { beginKeywords: `record`, relevance: 0, end: /[{;=]/, illegal: /[^\s:]/, contains: [o, _, e2.C_LINE_COMMENT_MODE, e2.C_BLOCK_COMMENT_MODE] }, { className: `meta`, begin: `^\\s*\\[(?=[\\w])`, excludeBegin: true, end: `\\]`, excludeEnd: true, contains: [{ className: `string`, begin: /"/, end: /"/ }] }, { beginKeywords: n2(118), relevance: 0 }, { className: `function`, begin: `(` + v + `\\s+)+` + e2.IDENT_RE + `\\s*(<[^=]+>\\s*)?\\(`, returnBegin: true, end: /\s*[{;=]/, excludeEnd: true, keywords: a, contains: [{ beginKeywords: i.join(` `), relevance: 0 }, { begin: e2[n2(142)] + `\\s*(<[^=]+>\\s*)?\\(`, returnBegin: true, contains: [e2.TITLE_MODE, _], relevance: 0 }, { match: /\(\)/ }, { className: `params`, begin: /\(/, end: /\)/, excludeBegin: true, excludeEnd: true, keywords: a, relevance: 0, contains: [g, s, e2.C_BLOCK_COMMENT_MODE] }, e2.C_LINE_COMMENT_MODE, e2.C_BLOCK_COMMENT_MODE] }, y] };
}
function t(e2, t2) {
  return e2 -= 118, n()[e2];
}
function n() {
  let e2 = [`short`, `APOS_STRING_MODE`, `IDENT_RE`, `uint`, `[a-zA-Z](\\.?\\w)*`, `split`, `namespace`, `default`, `int`, `46339aQYSqT`, `string`, `new return throw await else`, `(\\s*,\\s*`, `bool`, `16314QiRTJD`, `long`, `double`, `///`, `949291dOHJWu`, `104tWnDaX`, `sealed`, `6SxhFKM`, `number`, `146RGjcpq`, `true`, `256200qHXzZV`, `9268730YwyGkj`, `447687PMTiKV`, `concat`, `protected`, `C_BLOCK_COMMENT_MODE`, `inherit`, `2332525TAWVti`];
  return n = function() {
    return e2;
  }, n();
}
export {
  e as default
};
