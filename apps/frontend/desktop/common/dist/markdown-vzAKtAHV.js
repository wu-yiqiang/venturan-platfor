function e() {
  let t2 = [`symbol`, `2180878HAYYGA`, `102910TPpRoW`, `contains`, `16XDIvWZ`, `concat`, `^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)`, `172254SJcRPQ`, `1592958CprAsk`, `push`, `147136uJwmvS`, `93730bzfvUG`, `quote`, `5SXPOBD`, `7200963TgiDCE`];
  return e = function() {
    return t2;
  }, e();
}
(function(e2, t2) {
  let r = n, i = e2();
  for (; ; ) try {
    if (parseInt(r(119)) / 1 + parseInt(r(128)) / 2 + -parseInt(r(124)) / 3 * (parseInt(r(121)) / 4) + -parseInt(r(130)) / 5 * (parseInt(r(125)) / 6) + -parseInt(r(133)) / 7 + parseInt(r(127)) / 8 + parseInt(r(131)) / 9 === t2) break;
    i.push(i.shift());
  } catch {
    i.push(i.shift());
  }
})(e, 161555);
function t(e2) {
  let t2 = n, r = e2.regex, i = { begin: /<\/?[A-Za-z_]/, end: `>`, subLanguage: `xml`, relevance: 0 }, a = { begin: `^[-\\*]{3,}`, end: `$` }, o = { className: `code`, variants: [{ begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*" }, { begin: `(~{3,})[^~](.|\\n)*?\\1~*[ ]*` }, { begin: "```", end: "```+[ ]*$" }, { begin: `~~~`, end: `~~~+[ ]*$` }, { begin: "`.+?`" }, { begin: `(?=^( {4}|\\t))`, contains: [{ begin: `^( {4}|\\t)`, end: `(\\n)$` }], relevance: 0 }] }, s = { className: `bullet`, begin: t2(123), end: `\\s+`, excludeEnd: true }, c = { begin: /^\[[^\n]+\]:/, returnBegin: true, contains: [{ className: `symbol`, begin: /\[/, end: /\]/, excludeBegin: true, excludeEnd: true }, { className: `link`, begin: /:\s*/, end: /$/, excludeBegin: true }] }, l = { variants: [{ begin: /\[.+?\]\[.*?\]/, relevance: 0 }, { begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/, relevance: 2 }, { begin: r[t2(122)](/\[.+?\]\(/, /[A-Za-z][A-Za-z0-9+.-]*/, /:\/\/.*?\)/), relevance: 2 }, { begin: /\[.+?\]\([./?&#].*?\)/, relevance: 1 }, { begin: /\[.*?\]\(.*?\)/, relevance: 0 }], returnBegin: true, contains: [{ match: /\[(?=\])/ }, { className: `string`, relevance: 0, begin: `\\[`, end: `\\]`, excludeBegin: true, returnEnd: true }, { className: `link`, relevance: 0, begin: `\\]\\(`, end: `\\)`, excludeBegin: true, excludeEnd: true }, { className: t2(132), relevance: 0, begin: `\\]\\[`, end: `\\]`, excludeBegin: true, excludeEnd: true }] }, u = { className: `strong`, contains: [], variants: [{ begin: /_{2}(?!\s)/, end: /_{2}/ }, { begin: /\*{2}(?!\s)/, end: /\*{2}/ }] }, d = { className: `emphasis`, contains: [], variants: [{ begin: /\*(?![*\s])/, end: /\*/ }, { begin: /_(?![_\s])/, end: /_/, relevance: 0 }] }, f = e2.inherit(u, { contains: [] }), p = e2.inherit(d, { contains: [] });
  u[t2(120)].push(p), d.contains[t2(126)](f);
  let m = [i, l];
  return [u, d, f, p].forEach((e3) => {
    let n2 = t2;
    e3[n2(120)] = e3.contains.concat(m);
  }), m = m.concat(u, d), { name: `Markdown`, aliases: [`md`, `mkdown`, `mkd`], contains: [{ className: `section`, variants: [{ begin: `^#{1,6}`, end: `$`, contains: m }, { begin: `(?=^.+?\\n[=-]{2,}$)`, contains: [{ begin: `^[=-]*$` }, { begin: `^`, end: `\\n`, contains: m }] }] }, i, s, u, d, { className: t2(129), begin: `^>\\s+`, contains: m, end: `$` }, o, a, l, c, { scope: `literal`, match: /&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/ }] };
}
function n(t2, n2) {
  return t2 -= 119, e()[t2];
}
export {
  t as default
};
