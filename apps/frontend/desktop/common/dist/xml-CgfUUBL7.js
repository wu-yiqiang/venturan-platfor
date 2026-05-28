function e(e2, t2) {
  return e2 -= 442, n()[e2];
}
(function(t2, n2) {
  let r = e, i = t2();
  for (; ; ) try {
    if (-parseInt(r(448)) / 1 * (parseInt(r(455)) / 2) + parseInt(r(445)) / 3 + parseInt(r(446)) / 4 * (parseInt(r(461)) / 5) + -parseInt(r(460)) / 6 + -parseInt(r(456)) / 7 + -parseInt(r(459)) / 8 * (parseInt(r(447)) / 9) + parseInt(r(449)) / 10 * (parseInt(r(451)) / 11) === n2) break;
    i.push(i.shift());
  } catch {
    i.push(i.shift());
  }
})(n, 131687);
function t(t2) {
  let n2 = e, r = t2.regex, i = r.concat(RegExp(`[\\p{L}_]`, `u`), r.optional(RegExp(`[\\p{L}0-9_.-]*:`, `u`)), RegExp(`[\\p{L}0-9_.-]*`, `u`)), a = RegExp(n2(443), `u`), o = { className: `symbol`, begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/ }, s = { begin: /\s/, contains: [{ className: `keyword`, begin: /#?[a-z_][a-z1-9_-]+/, illegal: /\n/ }] }, c = t2.inherit(s, { begin: /\(/, end: /\)/ }), l = t2.inherit(t2.APOS_STRING_MODE, { className: n2(457) }), u = t2.inherit(t2.QUOTE_STRING_MODE, { className: `string` }), d = { endsWithParent: true, illegal: /</, relevance: 0, contains: [{ className: `attr`, begin: a, relevance: 0 }, { begin: /=\s*/, relevance: 0, contains: [{ className: `string`, endsParent: true, variants: [{ begin: /"/, end: /"/, contains: [o] }, { begin: /'/, end: /'/, contains: [o] }, { begin: /[^\s"'=<>`]+/ }] }] }] };
  return { name: `HTML, XML`, aliases: [`html`, `xhtml`, `rss`, `atom`, n2(453), `xsd`, n2(462), `plist`, n2(454), `svg`], case_insensitive: true, unicodeRegex: true, contains: [{ className: `meta`, begin: /<![a-z]/, end: />/, relevance: 10, contains: [s, u, l, c, { begin: /\[/, end: /\]/, contains: [{ className: `meta`, begin: /<![a-z]/, end: />/, contains: [s, c, u, l] }] }] }, t2[n2(458)](/<!--/, /-->/, { relevance: 10 }), { begin: /<!\[CDATA\[/, end: /\]\]>/, relevance: 10 }, o, { className: `meta`, end: /\?>/, variants: [{ begin: /<\?xml/, relevance: 10, contains: [u] }, { begin: /<\?[a-z][a-z0-9]+/ }] }, { className: `tag`, begin: /<style(?=\s|>)/, end: />/, keywords: { name: `style` }, contains: [d], starts: { end: /<\/style>/, returnEnd: true, subLanguage: [`css`, n2(450)] } }, { className: `tag`, begin: /<script(?=\s|>)/, end: />/, keywords: { name: `script` }, contains: [d], starts: { end: /<\/script>/, returnEnd: true, subLanguage: [`javascript`, `handlebars`, `xml`] } }, { className: `tag`, begin: /<>|<\/>/ }, { className: `tag`, begin: r[n2(444)](/</, r.lookahead(r.concat(i, r.either(/\/>/, />/, /\s/)))), end: /\/?>/, contains: [{ className: n2(442), begin: i, relevance: 0, starts: d }] }, { className: n2(452), begin: r.concat(/<\//, r.lookahead(r.concat(i, />/))), contains: [{ className: `name`, begin: i, relevance: 0 }, { begin: />/, relevance: 0, endsParent: true }] }] };
}
function n() {
  let e2 = [`COMMENT`, `32oUHOdC`, `1473048qfiSQK`, `127570uHqvuQ`, `xsl`, `name`, `[\\p{L}0-9._:-]+`, `concat`, `315114buhANu`, `36acQTuo`, `354033TkUsJU`, `1Bjlkhx`, `525970sAUtzV`, `xml`, `88Pbiklq`, `tag`, `xjb`, `wsf`, `250612GPeypd`, `669137vTUjsC`, `string`];
  return n = function() {
    return e2;
  }, n();
}
export {
  t as default
};
