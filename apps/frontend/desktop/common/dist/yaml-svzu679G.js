function e(e2, t2) {
  return e2 -= 268, n()[e2];
}
(function(t2, n2) {
  let r = e, i = t2();
  for (; ; ) try {
    if (-parseInt(r(282)) / 1 * (parseInt(r(277)) / 2) + -parseInt(r(270)) / 3 + parseInt(r(278)) / 4 + parseInt(r(275)) / 5 * (parseInt(r(274)) / 6) + -parseInt(r(281)) / 7 + -parseInt(r(271)) / 8 * (-parseInt(r(276)) / 9) + parseInt(r(279)) / 10 * (parseInt(r(272)) / 11) === n2) break;
    i.push(i.shift());
  } catch {
    i.push(i.shift());
  }
})(n, 128164);
function t(t2) {
  let n2 = e, r = `true false yes no null`, i = { className: `attr`, variants: [{ begin: /[\w*@][\w*@ :()\./-]*:(?=[ \t]|$)/ }, { begin: /"[\w*@][\w*@ :()\./-]*":(?=[ \t]|$)/ }, { begin: /'[\w*@][\w*@ :()\./-]*':(?=[ \t]|$)/ }] }, a = { className: `template-variable`, variants: [{ begin: /\{\{/, end: /\}\}/ }, { begin: /%\{/, end: /\}/ }] }, o = { className: `string`, relevance: 0, begin: /'/, end: /'/, contains: [{ match: /''/, scope: `char.escape`, relevance: 0 }] }, s = { className: `string`, relevance: 0, variants: [{ begin: /"/, end: /"/ }, { begin: /\S+/ }], contains: [t2.BACKSLASH_ESCAPE, a] }, c = t2.inherit(s, { variants: [{ begin: /'/, end: /'/, contains: [{ begin: /''/, relevance: 0 }] }, { begin: /"/, end: /"/ }, { begin: /[^\s,{}[\]]+/ }] }), l = { className: `number`, begin: `\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b` }, u = { end: `,`, endsWithParent: true, excludeEnd: true, keywords: r, relevance: 0 }, d = { begin: /\{/, end: /\}/, contains: [u], illegal: `\\n`, relevance: 0 }, f = { begin: `\\[`, end: `\\]`, contains: [u], illegal: `\\n`, relevance: 0 }, p = [i, { className: `meta`, begin: `^---\\s*$`, relevance: 10 }, { className: `string`, begin: `[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*` }, { begin: `<%[%=-]?`, end: `[%-]?%>`, subLanguage: n2(273), excludeBegin: true, excludeEnd: true, relevance: 0 }, { className: `type`, begin: n2(283) + `[\\w#;/?:@&=+$,.~*'()[\\]]+` }, { className: n2(268), begin: `!<[\\w#;/?:@&=+$,.~*'()[\\]]+>` }, { className: `type`, begin: `![\\w#;/?:@&=+$,.~*'()[\\]]+` }, { className: n2(268), begin: `!![\\w#;/?:@&=+$,.~*'()[\\]]+` }, { className: `meta`, begin: `&` + t2.UNDERSCORE_IDENT_RE + `$` }, { className: `meta`, begin: `\\*` + t2.UNDERSCORE_IDENT_RE + `$` }, { className: `bullet`, begin: `-(?=[ ]|$)`, relevance: 0 }, t2[n2(269)], { beginKeywords: r, keywords: { literal: r } }, l, { className: `number`, begin: t2.C_NUMBER_RE + `\\b`, relevance: 0 }, d, f, o, s], m = [...p];
  return m.pop(), m.push(c), u[n2(280)] = m, { name: `YAML`, case_insensitive: true, aliases: [`yml`], contains: p };
}
function n() {
  let e2 = [`type`, `HASH_COMMENT_MODE`, `521319XqGwjS`, `208hdiTWd`, `2673hxlkIU`, `ruby`, `702neIOGA`, `910Zpaeqr`, `61713GnyceC`, `36182Vanacf`, `419784nGvcXa`, `7670UamzmQ`, `contains`, `942851xNMQwA`, `3AcCbyA`, `!\\w+!`];
  return n = function() {
    return e2;
  }, n();
}
export {
  t as default
};
