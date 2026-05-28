(function(e2, n2) {
  let r = t, i = e2();
  for (; ; ) try {
    if (parseInt(r(187)) / 1 * (-parseInt(r(185)) / 2) + -parseInt(r(178)) / 3 + parseInt(r(169)) / 4 + parseInt(r(181)) / 5 * (parseInt(r(182)) / 6) + -parseInt(r(173)) / 7 + -parseInt(r(170)) / 8 * (-parseInt(r(176)) / 9) + -parseInt(r(175)) / 10 === n2) break;
    i.push(i.shift());
  } catch {
    i.push(i.shift());
  }
})(n, 385654);
function e(e2) {
  let n2 = t, r = e2.regex, i = RegExp(`[\\p{XID_Start}_]\\p{XID_Continue}*`, `u`), a = `and.as.assert.async.await.break.case.class.continue.def.del.elif.else.except.finally.for.from.global.if.import.in.is.lambda.match.nonlocal|10.not.or.pass.raise.return.try.while.with.yield`.split(`.`), o = { $pattern: /[A-Za-z]\w+|__\w+__/, keyword: a, built_in: `__import__.abs.all.any.ascii.bin.bool.breakpoint.bytearray.bytes.callable.chr.classmethod.compile.complex.delattr.dict.dir.divmod.enumerate.eval.exec.filter.float.format.frozenset.getattr.globals.hasattr.hash.help.hex.id.input.int.isinstance.issubclass.iter.len.list.locals.map.max.memoryview.min.next.object.oct.open.ord.pow.print.property.range.repr.reversed.round.set.setattr.slice.sorted.staticmethod.str.sum.super.tuple.type.vars.zip`.split(`.`), literal: [`__debug__`, `Ellipsis`, `False`, `None`, n2(172), `True`], type: [`Any`, `Callable`, `Coroutine`, `Dict`, `List`, `Literal`, n2(174), `Optional`, n2(171), `Set`, `Tuple`, `Type`, n2(180)] }, s = { className: `meta`, begin: /^(>>>|\.\.\.) / }, c = { className: `subst`, begin: /\{/, end: /\}/, keywords: o, illegal: /#/ }, l = { begin: /\{\{/, relevance: 0 }, u = { className: `string`, contains: [e2.BACKSLASH_ESCAPE], variants: [{ begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/, end: /'''/, contains: [e2.BACKSLASH_ESCAPE, s], relevance: 10 }, { begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/, end: /"""/, contains: [e2.BACKSLASH_ESCAPE, s], relevance: 10 }, { begin: /([fF][rR]|[rR][fF]|[fF])'''/, end: /'''/, contains: [e2.BACKSLASH_ESCAPE, s, l, c] }, { begin: /([fF][rR]|[rR][fF]|[fF])"""/, end: /"""/, contains: [e2.BACKSLASH_ESCAPE, s, l, c] }, { begin: /([uU]|[rR])'/, end: /'/, relevance: 10 }, { begin: /([uU]|[rR])"/, end: /"/, relevance: 10 }, { begin: /([bB]|[bB][rR]|[rR][bB])'/, end: /'/ }, { begin: /([bB]|[bB][rR]|[rR][bB])"/, end: /"/ }, { begin: /([fF][rR]|[rR][fF]|[fF])'/, end: /'/, contains: [e2.BACKSLASH_ESCAPE, l, c] }, { begin: /([fF][rR]|[rR][fF]|[fF])"/, end: /"/, contains: [e2.BACKSLASH_ESCAPE, l, c] }, e2.APOS_STRING_MODE, e2.QUOTE_STRING_MODE] }, d = `\\b|` + a[n2(179)](`|`), f = { className: `number`, relevance: 0, variants: [{ begin: `(\\b([0-9](_?[0-9])*)|((\\b([0-9](_?[0-9])*))?\\.([0-9](_?[0-9])*)|\\b([0-9](_?[0-9])*)\\.))[eE][+-]?([0-9](_?[0-9])*)[jJ]?(?=` + d + `)` }, { begin: `((\\b([0-9](_?[0-9])*))?\\.([0-9](_?[0-9])*)|\\b([0-9](_?[0-9])*)\\.)[jJ]?` }, { begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=` + d + `)` }, { begin: `\\b0[bB](_?[01])+[lL]?(?=` + d + `)` }, { begin: `\\b0[oO](_?[0-7])+[lL]?(?=` + d + `)` }, { begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=` + d + `)` }, { begin: `\\b([0-9](_?[0-9])*)[jJ](?=` + d + `)` }] }, p = { className: `comment`, begin: r.lookahead(/# type:/), end: /$/, keywords: o, contains: [{ begin: /# type:/ }, { begin: /#/, end: /\b\B/, endsWithParent: true }] }, m = { className: `params`, variants: [{ className: ``, begin: /\(\s*\)/, skip: true }, { begin: /\(/, end: /\)/, excludeBegin: true, excludeEnd: true, keywords: o, contains: [`self`, s, f, u, e2.HASH_COMMENT_MODE] }] };
  return c.contains = [u, f, s], { name: n2(184), aliases: [`py`, `gyp`, n2(183)], unicodeRegex: true, keywords: o, illegal: /(<\/|\?)|=>/, contains: [s, f, { scope: `variable.language`, match: /\bself\b/ }, { beginKeywords: `if`, relevance: 0 }, { match: /\bor\b/, scope: n2(186) }, u, p, e2.HASH_COMMENT_MODE, { match: [/\bdef/, /\s+/, i], scope: { 1: `keyword`, 3: `title.function` }, contains: [m] }, { variants: [{ match: [/\bclass/, /\s+/, i, /\s*/, /\(\s*/, i, /\s*\)/] }, { match: [/\bclass/, /\s+/, i] }], scope: { 1: `keyword`, 3: `title.class`, 6: `title.class.inherited` } }, { className: n2(177), begin: /^[\t ]*@/, end: /(?=#)|$/, contains: [f, m, u] }] };
}
function t(e2, t2) {
  return e2 -= 169, n()[e2];
}
function n() {
  let e2 = [`Union`, `804070xPGtSV`, `18stvlkC`, `ipython`, `Python`, `46wlSaXZ`, `keyword`, `4151FOpiOp`, `2174580YlVTER`, `3872kQMnnE`, `Sequence`, `NotImplemented`, `192808xcidoz`, `Generic`, `8941800PuDgFj`, `11142rJBCmM`, `meta`, `667284WtjYZt`, `join`];
  return n = function() {
    return e2;
  }, n();
}
export {
  e as default
};
