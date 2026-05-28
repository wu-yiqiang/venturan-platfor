import { H as e, K as t, Ot as n, U as r, t as i, yt as a } from "./three.module-fqN0WVmI.js";
var o = s;
(function(e2, t2) {
  let n2 = s, r2 = e2();
  for (; ; ) try {
    if (-parseInt(n2(397)) / 1 + parseInt(n2(394)) / 2 + -parseInt(n2(408)) / 3 + parseInt(n2(407)) / 4 * (parseInt(n2(402)) / 5) + parseInt(n2(401)) / 6 + parseInt(n2(404)) / 7 * (-parseInt(n2(403)) / 8) + parseInt(n2(399)) / 9 * (parseInt(n2(405)) / 10) === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(c, 128213);
function s(e2, t2) {
  return e2 -= 394, c()[e2];
}
function c() {
  let e2 = [`910506NjUWqz`, `38655eyFcKr`, `6760elZESZ`, `231IpBGve`, `1258420vOYcxN`, `setRGB`, `4liOsfP`, `138342bsvbtf`, `44580pTWHrB`, `push`, `load`, `105402lXUfqe`, `path`, `9QuWPTF`, `manager`];
  return c = function() {
    return e2;
  }, c();
}
var l = class extends i {
  [o(396)](e2, t2, n2, r2) {
    let i2 = o, s2 = this, c2 = new a(this[i2(400)]);
    c2.setPath(this[i2(398)]), c2.setRequestHeader(this.requestHeader), c2.setWithCredentials(this.withCredentials), c2.load(e2, function(n3) {
      try {
        t2(s2.parse(n3));
      } catch (t3) {
        r2 ? r2(t3) : console.error(t3), s2.manager.itemError(e2);
      }
    }, n2, r2);
  }
  parse(i2) {
    let a2 = o, s2 = i2.split(`
`), c2 = [], l2 = [], u = new t();
    for (let e2 of s2) {
      if (e2 = e2.trim(), e2.charAt(0) === `#`) continue;
      let t2 = e2.split(/\s+/);
      if (t2.length === 3 && (c2.push(parseFloat(t2[0])), c2.push(parseFloat(t2[1])), c2.push(parseFloat(t2[2]))), t2.length === 6) {
        c2.push(parseFloat(t2[0])), c2[a2(395)](parseFloat(t2[1])), c2[a2(395)](parseFloat(t2[2]));
        let e3 = parseFloat(t2[3]) / 255, r2 = parseFloat(t2[4]) / 255, i3 = parseFloat(t2[5]) / 255;
        u[a2(406)](e3, r2, i3, n), l2[a2(395)](u.r, u.g, u.b);
      }
    }
    let d = new e();
    return d.setAttribute(`position`, new r(c2, 3)), l2.length > 0 && d.setAttribute(`color`, new r(l2, 3)), d;
  }
};
export {
  l as XYZLoader
};
