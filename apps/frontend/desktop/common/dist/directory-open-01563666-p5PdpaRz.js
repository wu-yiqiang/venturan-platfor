import { m as e, p as t } from "./index-D-g3WoLo.js";
(function(e2, t2) {
  let r2 = n, i2 = e2();
  for (; ; ) try {
    if (-parseInt(r2(414)) / 1 + parseInt(r2(413)) / 2 + -parseInt(r2(408)) / 3 + parseInt(r2(399)) / 4 * (-parseInt(r2(404)) / 5) + parseInt(r2(409)) / 6 * (parseInt(r2(411)) / 7) + parseInt(r2(406)) / 8 + -parseInt(r2(402)) / 9 * (-parseInt(r2(410)) / 10) === t2) break;
    i2.push(i2.shift());
  } catch {
    i2.push(i2.shift());
  }
})(r, 330385);
function n(e2, t2) {
  return e2 -= 398, r()[e2];
}
function r() {
  let e2 = [`18680PqyeuQ`, `every`, `281824WNKqsG`, `click`, `123369oRoTkb`, `1399668PYLKsb`, `570LKcHjk`, `14irjSHP`, `webkitdirectory`, `319374dZbVgt`, `256830xNVOoi`, `change`, `apply`, `436IGDHjp`, `split`, `addEventListener`, `59067fKTImX`, `webkitRelativePath`];
  return r = function() {
    return e2;
  }, r();
}
e();
var i = (function() {
  var e2 = t(function* (e3 = [{}]) {
    return Array.isArray(e3) || (e3 = [e3]), e3[0].recursive = e3[0].recursive || false, new Promise((t2, r2) => {
      let i2 = n, a = document.createElement(`input`);
      a.type = `file`, a[i2(412)] = true;
      let o = (e4) => {
        typeof s == `function` && s(), t2(e4);
      }, s = e3[0].legacySetup && e3[0].legacySetup(o, () => s(r2), a);
      a[i2(401)](i2(415), () => {
        let t3 = i2, n2 = Array.from(a.files);
        e3[0].recursive ? e3[0].recursive && e3[0].skipDirectory && (n2 = n2.filter((n3) => n3.webkitRelativePath[t3(400)](`/`)[t3(405)]((t4) => !e3[0].skipDirectory({ name: t4, kind: `directory` })))) : n2 = n2.filter((e4) => e4[t3(403)].split(`/`).length === 2), o(n2);
      }), a[i2(407)]();
    });
  });
  return function() {
    return e2[n(398)](this, arguments);
  };
})();
export {
  i as default
};
