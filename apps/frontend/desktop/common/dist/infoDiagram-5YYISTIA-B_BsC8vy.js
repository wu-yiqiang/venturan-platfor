import { m as e, p as t } from "./index-D-g3WoLo.js";
import { _ as n } from "./mermaid-parser.core-GIi7jTaD.js";
import { n as r, t as i } from "./chunk-AGHRB4JF-CBHSUHQe.js";
import { q as a } from "./chunk-CSCIHK7Q-pN0du8p0.js";
import { t as o } from "./chunk-WU5MYG2G-BnIisATw.js";
var s = l;
(function(e2, t2) {
  for (var n2 = l, r2 = e2(); ; ) try {
    if (parseInt(n2(408)) / 1 + -parseInt(n2(411)) / 2 * (parseInt(n2(406)) / 3) + -parseInt(n2(413)) / 4 * (parseInt(n2(414)) / 5) + parseInt(n2(405)) / 6 * (parseInt(n2(407)) / 7) + -parseInt(n2(409)) / 8 + -parseInt(n2(415)) / 9 + parseInt(n2(412)) / 10 * (parseInt(n2(417)) / 11) === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(c, 366798);
function c() {
  var e2 = [`draw`, `146708nwSlud`, `3630CfbLoP`, `2496588HeYlxx`, `5LXCeai`, `1838970pBRIeL`, `attr`, `33869LhEClv`, `text`, `2262GGHPOG`, `24jsqEPs`, `12383uPuHuR`, `700819LMymGU`, `5626416FkYnnP`];
  return c = function() {
    return e2;
  }, c();
}
function l(e2, t2) {
  return e2 -= 405, c()[e2];
}
e();
var u = { parse: i((function() {
  var e2 = t(function* (e3) {
    let t2 = yield n(`info`, e3);
    r.debug(t2);
  });
  return function(t2) {
    return e2.apply(this, arguments);
  };
})(), `parse`) }, d = { version: `11.15.0` }, f = { parser: u, db: { getVersion: i(() => d.version, `getVersion`) }, renderer: { draw: i((e2, t2, n2) => {
  var i2 = l;
  r.debug(`rendering info diagram
` + e2);
  let s2 = o(t2);
  a(s2, 100, 400, true), s2.append(`g`).append(`text`).attr(`x`, 100)[i2(416)](`y`, 40).attr(`class`, `version`)[i2(416)](`font-size`, 32).style(`text-anchor`, `middle`)[i2(418)](`v` + n2);
}, s(410)) } };
export {
  f as diagram
};
