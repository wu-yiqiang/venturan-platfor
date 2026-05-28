import { m as e, p as t } from "./index-D-g3WoLo.js";
import { t as n } from "./chunk-AGHRB4JF-CBHSUHQe.js";
import { V as r, s as i } from "./chunk-CSCIHK7Q-pN0du8p0.js";
import { S as a } from "./chunk-5ZQYHXKU-BklVe06k.js";
var o = s;
(function(e2, t2) {
  let n2 = s, r2 = e2();
  for (; ; ) try {
    if (parseInt(n2(223)) / 1 + -parseInt(n2(236)) / 2 * (-parseInt(n2(239)) / 3) + parseInt(n2(225)) / 4 + parseInt(n2(221)) / 5 * (-parseInt(n2(230)) / 6) + parseInt(n2(226)) / 7 * (-parseInt(n2(229)) / 8) + -parseInt(n2(220)) / 9 + parseInt(n2(231)) / 10 * (parseInt(n2(238)) / 11) === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(c, 575816);
function s(e2, t2) {
  return e2 -= 219, c()[e2];
}
function c() {
  let e2 = [`configureLabelImages`, `subGraphTitleMargin`, `164026LtyGps`, `minWidth`, `292622Bccbmd`, `3ddobFr`, `bottom`, `1145583hqXXDQ`, `55885lAHrJX`, `complete`, `560456uXwZQZ`, `style`, `2568580doAhnK`, `2874837SIyBiD`, `fontSize`, `error`, `16frDENG`, `114hRqvnj`, `170rjmKID`, `100%`, `maxWidth`];
  return c = function() {
    return e2;
  }, c();
}
e();
var l = n(({ flowchart: e2 }) => {
  let t2 = s;
  var n2, r2;
  let i2 = (e2 == null || (n2 = e2.subGraphTitleMargin) == null ? void 0 : n2.top) ?? 0, a2 = (e2 == null || (r2 = e2[t2(235)]) == null ? void 0 : r2[t2(219)]) ?? 0;
  return { subGraphTitleTopMargin: i2, subGraphTitleBottomMargin: a2, subGraphTitleTotalMargin: i2 + a2 };
}, `getSubGraphTitleMargins`);
function u(e2, t2) {
  return d.apply(this, arguments);
}
function d() {
  return d = t(function* (e2, t2) {
    let o2 = e2.getElementsByTagName(`img`);
    if (!o2 || o2.length === 0) return;
    let c2 = t2.replace(/<img[^>]*>/g, ``).trim() === ``;
    yield Promise.all([...o2].map((e3) => new Promise((t3) => {
      let o3 = s;
      function l2() {
        let n2 = s;
        if (e3.style.display = `flex`, e3[n2(224)].flexDirection = `column`, c2) {
          let [t4 = i.fontSize] = a(r()[n2(227)] ? r().fontSize : window.getComputedStyle(document.body).fontSize), o4 = t4 * 5 + `px`;
          e3.style[n2(237)] = o4, e3.style[n2(233)] = o4;
        } else e3.style.width = n2(232);
        t3(e3);
      }
      n(l2, `setupImage`), setTimeout(() => {
        e3[s(222)] && l2();
      }), e3.addEventListener(o3(228), l2), e3.addEventListener(`load`, l2);
    })));
  }), d.apply(this, arguments);
}
n(u, o(234));
export {
  u as n,
  l as t
};
