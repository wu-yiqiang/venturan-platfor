(function(e2, n2) {
  let r = t, i = e2();
  for (; ; ) try {
    if (parseInt(r(456)) / 1 + -parseInt(r(453)) / 2 + -parseInt(r(461)) / 3 + -parseInt(r(449)) / 4 * (parseInt(r(455)) / 5) + parseInt(r(451)) / 6 * (-parseInt(r(457)) / 7) + -parseInt(r(458)) / 8 * (parseInt(r(462)) / 9) + parseInt(r(460)) / 10 === n2) break;
    i.push(i.shift());
  } catch {
    i.push(i.shift());
  }
})(e, 132393);
function e() {
  let t2 = [`27nJXxLA`, `76TOYNYS`, `number`, `66Vchodt`, `'''`, `431016UgmZnG`, `regex`, `3290fyQQNy`, `221767xWNkWo`, `35294fFFjtt`, `469824VtIjwj`, `self`, `6305650hEGufx`, `780849yyCJoE`];
  return e = function() {
    return t2;
  }, e();
}
function t(t2, n2) {
  return t2 -= 449, e()[t2];
}
function n(e2) {
  let n2 = t, r = e2[n2(454)], i = { className: n2(450), relevance: 0, variants: [{ begin: /([+-]+)?[\d]+_[\d_]+/ }, { begin: e2.NUMBER_RE }] }, a = e2.COMMENT();
  a.variants = [{ begin: /;/, end: /$/ }, { begin: /#/, end: /$/ }];
  let o = { className: `variable`, variants: [{ begin: /\$[\w\d"][\w\d_]*/ }, { begin: /\$\{(.*?)\}/ }] }, s = { className: `literal`, begin: /\bon|off|true|false|yes|no\b/ }, c = { className: `string`, contains: [e2.BACKSLASH_ESCAPE], variants: [{ begin: n2(452), end: `'''`, relevance: 10 }, { begin: `"""`, end: `"""`, relevance: 10 }, { begin: `"`, end: `"` }, { begin: `'`, end: `'` }] }, l = { begin: /\[/, end: /\]/, contains: [a, s, o, c, i, n2(459)], relevance: 0 }, u = r.either(/[A-Za-z0-9_-]+/, /"(\\"|[^"])*"/, /'[^']*'/);
  return { name: `TOML, also INI`, aliases: [`toml`], case_insensitive: true, illegal: /\S/, contains: [a, { className: `section`, begin: /\[+/, end: /\]+/ }, { begin: r.concat(u, `(\\s*\\.\\s*`, u, `)*`, r.lookahead(/\s*=\s*[^#\s]/)), className: `attr`, starts: { end: /$/, contains: [a, l, s, o, c, i] } }] };
}
export {
  n as default
};
