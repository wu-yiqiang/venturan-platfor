function e() {
  let t2 = [`u16`, `Result`, `5685876XteOjC`, `72526bZiqjT`, `41aVCyaB`, `668drjEVK`, `23865259jlIAOt`, `1536LVKAXi`, `IDENT_RE`, `i128`, `Box`, `2695470kfQvyk`, `f64`, `false`, `isize`, `1325amOKDF`, `32669OhXZhz`, `22317ggLxEs`, `\\b0b([01_]+)`, `/\\*`, `1400mBnZLc`, `concat`, `string`];
  return e = function() {
    return t2;
  }, e();
}
(function(e2, n2) {
  let r = t, i = e2();
  for (; ; ) try {
    if (parseInt(r(490)) / 1 * (parseInt(r(489)) / 2) + parseInt(r(503)) / 3 * (-parseInt(r(491)) / 4) + -parseInt(r(501)) / 5 * (-parseInt(r(493)) / 6) + -parseInt(r(502)) / 7 * (parseInt(r(506)) / 8) + -parseInt(r(488)) / 9 + -parseInt(r(497)) / 10 + parseInt(r(492)) / 11 === n2) break;
    i.push(i.shift());
  } catch {
    i.push(i.shift());
  }
})(e, 763843);
function t(t2, n2) {
  return t2 -= 486, e()[t2];
}
function n(e2) {
  let n2 = t, r = e2.regex, i = /(r#)?/, a = r.concat(i, e2.UNDERSCORE_IDENT_RE), o = r.concat(i, e2[n2(494)]), s = { className: `title.function.invoke`, relevance: 0, begin: r[n2(507)](/\b/, /(?!let|for|while|if|else|match\b)/, o, r.lookahead(/\s*\(/)) }, c = `abstract.as.async.await.become.box.break.const.continue.crate.do.dyn.else.enum.extern.false.final.fn.for.if.impl.in.let.loop.macro.match.mod.move.mut.override.priv.pub.ref.return.self.Self.static.struct.super.trait.true.try.type.typeof.union.unsafe.unsized.use.virtual.where.while.yield`.split(`.`), l = [`true`, n2(499), `Some`, `None`, `Ok`, `Err`], u = `drop .Copy.Send.Sized.Sync.Drop.Fn.FnMut.FnOnce.ToOwned.Clone.Debug.PartialEq.PartialOrd.Eq.Ord.AsRef.AsMut.Into.From.Default.Iterator.Extend.IntoIterator.DoubleEndedIterator.ExactSizeIterator.SliceConcatExt.ToString.assert!.assert_eq!.bitflags!.bytes!.cfg!.col!.concat!.concat_idents!.debug_assert!.debug_assert_eq!.env!.eprintln!.panic!.file!.format!.format_args!.include_bytes!.include_str!.line!.local_data_key!.module_path!.option_env!.print!.println!.select!.stringify!.try!.unimplemented!.unreachable!.vec!.write!.writeln!.macro_rules!.assert_ne!.debug_assert_ne!`.split(`.`), d = [`i8`, `i16`, `i32`, `i64`, n2(495), n2(500), `u8`, n2(486), `u32`, `u64`, `u128`, `usize`, `f32`, n2(498), `str`, `char`, `bool`, n2(496), `Option`, n2(487), `String`, `Vec`];
  return { name: `Rust`, aliases: [`rs`], keywords: { $pattern: e2[n2(494)] + `!?`, type: d, keyword: c, literal: l, built_in: u }, illegal: `</`, contains: [e2.C_LINE_COMMENT_MODE, e2.COMMENT(n2(505), `\\*/`, { contains: [`self`] }), e2.inherit(e2.QUOTE_STRING_MODE, { begin: /b?"/, illegal: null }), { className: `symbol`, begin: /'[a-zA-Z_][a-zA-Z0-9_]*(?!')/ }, { scope: n2(508), variants: [{ begin: /b?r(#*)"(.|\n)*?"\1(?!#)/ }, { begin: /b?'/, end: /'/, contains: [{ scope: `char.escape`, match: /\\('|\w|x\w{2}|u\w{4}|U\w{8})/ }] }] }, { className: `number`, variants: [{ begin: n2(504) + `([ui](8|16|32|64|128|size)|f(32|64))?` }, { begin: `\\b0o([0-7_]+)([ui](8|16|32|64|128|size)|f(32|64))?` }, { begin: `\\b0x([A-Fa-f0-9_]+)([ui](8|16|32|64|128|size)|f(32|64))?` }, { begin: `\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)([ui](8|16|32|64|128|size)|f(32|64))?` }], relevance: 0 }, { begin: [/fn/, /\s+/, a], className: { 1: `keyword`, 3: `title.function` } }, { className: `meta`, begin: `#!?\\[`, end: `\\]`, contains: [{ className: `string`, begin: /"/, end: /"/, contains: [e2.BACKSLASH_ESCAPE] }] }, { begin: [/let/, /\s+/, /(?:mut\s+)?/, a], className: { 1: `keyword`, 3: `keyword`, 4: `variable` } }, { begin: [/for/, /\s+/, a, /\s+/, /in/], className: { 1: `keyword`, 3: `variable`, 5: `keyword` } }, { begin: [/type/, /\s+/, a], className: { 1: `keyword`, 3: `title.class` } }, { begin: [/(?:trait|enum|struct|union|impl|for)/, /\s+/, a], className: { 1: `keyword`, 3: `title.class` } }, { begin: e2[n2(494)] + `::`, keywords: { keyword: `Self`, built_in: u, type: d } }, { className: `punctuation`, begin: `->` }, s] };
}
export {
  n as default
};
