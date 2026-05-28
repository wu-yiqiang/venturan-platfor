(function(e2, t2) {
  let r = n, i = e2();
  for (; ; ) try {
    if (parseInt(r(191)) / 1 * (parseInt(r(197)) / 2) + parseInt(r(188)) / 3 * (parseInt(r(189)) / 4) + parseInt(r(195)) / 5 + parseInt(r(190)) / 6 + -parseInt(r(193)) / 7 + -parseInt(r(196)) / 8 + -parseInt(r(194)) / 9 === t2) break;
    i.push(i.shift());
  } catch {
    i.push(i.shift());
  }
})(e, 131440);
function e() {
  let t2 = [`patch`, `967148EWiuWb`, `182547VwrDkF`, `124115HWAiBa`, `1708184MfCAZX`, `722xEprVc`, `210987txVqUF`, `8RuLwxF`, `844938ULwtIq`, `546ycfmbi`];
  return e = function() {
    return t2;
  }, e();
}
function t(e2) {
  let t2 = n, r = e2.regex;
  return { name: `Diff`, aliases: [t2(192)], contains: [{ className: `meta`, relevance: 10, match: r.either(/^@@ +-\d+,\d+ +\+\d+,\d+ +@@/, /^\*\*\* +\d+,\d+ +\*\*\*\*$/, /^--- +\d+,\d+ +----$/) }, { className: `comment`, variants: [{ begin: r.either(/Index: /, /^index/, /={3,}/, /^-{3}/, /^\*{3} /, /^\+{3}/, /^diff --git/), end: /$/ }, { match: /^\*{15}$/ }] }, { className: `addition`, begin: /^\+/, end: /$/ }, { className: `deletion`, begin: /^-/, end: /$/ }, { className: `addition`, begin: /^!/, end: /$/ }] };
}
function n(t2, n2) {
  return t2 -= 188, e()[t2];
}
export {
  t as default
};
