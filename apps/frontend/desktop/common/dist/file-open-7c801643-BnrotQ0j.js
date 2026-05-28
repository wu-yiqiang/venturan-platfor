import { m as e, p as t } from "./index-D-g3WoLo.js";
(function(e2, t2) {
  let r2 = n, i2 = e2();
  for (; ; ) try {
    if (-parseInt(r2(405)) / 1 * (-parseInt(r2(413)) / 2) + parseInt(r2(415)) / 3 * (-parseInt(r2(409)) / 4) + -parseInt(r2(410)) / 5 * (-parseInt(r2(414)) / 6) + parseInt(r2(408)) / 7 * (-parseInt(r2(411)) / 8) + -parseInt(r2(407)) / 9 * (parseInt(r2(402)) / 10) + -parseInt(r2(406)) / 11 + -parseInt(r2(404)) / 12 * (-parseInt(r2(403)) / 13) === t2) break;
    i2.push(i2.shift());
  } catch {
    i2.push(i2.shift());
  }
})(i, 366422);
function n(e2, t2) {
  return e2 -= 402, i()[e2];
}
e();
var r = (function() {
  var e2 = t(function* (e3 = [{}]) {
    return Array.isArray(e3) || (e3 = [e3]), new Promise((t2, r2) => {
      let i2 = document.createElement(`input`);
      i2.type = `file`;
      let a = [...e3.map((e4) => e4.mimeTypes || []), ...e3.map((e4) => e4.extensions || [])].join();
      i2.multiple = e3[0].multiple || false, i2.accept = a || ``;
      let o = (e4) => {
        typeof s == `function` && s(), t2(e4);
      }, s = e3[0].legacySetup && e3[0].legacySetup(o, () => s(r2), i2);
      i2.addEventListener(`change`, () => {
        let e4 = n;
        o(i2.multiple ? Array.from(i2[e4(412)]) : i2.files[0]);
      }), i2.click();
    });
  });
  return function() {
    return e2.apply(this, arguments);
  };
})();
function i() {
  let e2 = [`32JoPxfK`, `475pNBxbf`, `3723080iDVstM`, `files`, `3368WZlIrc`, `2148DokokT`, `56157fMJRSi`, `6318860weOrNV`, `6198647YUSHFM`, `36xVDayO`, `383WCfsTS`, `5455934LJnbqE`, `9vHkAHS`, `7phejVA`];
  return i = function() {
    return e2;
  }, i();
}
export {
  r as default
};
