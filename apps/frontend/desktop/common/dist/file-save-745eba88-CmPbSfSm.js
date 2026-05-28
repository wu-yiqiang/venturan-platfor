import { m as e, p as t } from "./index-D-g3WoLo.js";
(function(e2, t2) {
  let n2 = r, i2 = e2();
  for (; ; ) try {
    if (-parseInt(n2(359)) / 1 + -parseInt(n2(357)) / 2 * (parseInt(n2(350)) / 3) + -parseInt(n2(365)) / 4 * (-parseInt(n2(355)) / 5) + parseInt(n2(349)) / 6 * (-parseInt(n2(348)) / 7) + parseInt(n2(356)) / 8 + -parseInt(n2(352)) / 9 * (parseInt(n2(346)) / 10) + parseInt(n2(364)) / 11 === t2) break;
    i2.push(i2.shift());
  } catch {
    i2.push(i2.shift());
  }
})(i, 662112), e();
var n = (function() {
  var e2 = t(function* (e3, t2 = [{}], n2 = null, i2 = false, a = null) {
    let o = r;
    Array.isArray(t2) || (t2 = [t2]), t2[0].fileName = t2[0].fileName || `Untitled`;
    let s = [], c = null;
    if (e3 instanceof Blob && e3.type ? c = e3.type : e3[o(351)] && e3.headers.get(o(345)) && (c = e3.headers.get(o(345))), t2.forEach((e4, t3) => {
      let n3 = o;
      s[t3] = { description: e4.description || ``, accept: {} }, e4.mimeTypes ? (t3 === 0 && c && e4[n3(353)].push(c), e4.mimeTypes.map((r2) => {
        let i3 = n3;
        s[t3].accept[r2] = e4[i3(358)] || [];
      })) : c && (s[t3][n3(360)][c] = e4.extensions || []);
    }), n2) try {
      yield n2[o(361)]();
    } catch (e4) {
      if (n2 = null, i2) throw e4;
    }
    let l = n2 || (yield window[o(363)]({ suggestedName: t2[0].fileName, id: t2[0].id, startIn: t2[0].startIn, types: s, excludeAcceptAllOption: t2[0].excludeAcceptAllOption || false }));
    !n2 && a && a();
    let u = yield l.createWritable();
    return `stream` in e3 ? (yield e3[o(354)]().pipeTo(u), l) : `body` in e3 ? (yield e3.body.pipeTo(u), l) : (yield u[o(347)](yield e3), yield u.close(), l);
  });
  return function(t2) {
    return e2[r(362)](this, arguments);
  };
})();
function r(e2, t2) {
  return e2 -= 345, i()[e2];
}
function i() {
  let e2 = [`accept`, `getFile`, `apply`, `showSaveFilePicker`, `21764336jDvYif`, `92VMYnHq`, `content-type`, `80170DGfdof`, `write`, `204995xyuNOC`, `246hDBjnu`, `1646154QVwWur`, `headers`, `1107XTxlni`, `mimeTypes`, `stream`, `90980cMtLyK`, `8852640NNkEDj`, `2YulkZD`, `extensions`, `106058SrUvOt`];
  return i = function() {
    return e2;
  }, i();
}
export {
  n as default
};
