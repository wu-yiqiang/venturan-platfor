import { m as e, p as t } from "./index-D-g3WoLo.js";
function n(e2, t2) {
  return e2 -= 189, i()[e2];
}
(function(e2, t2) {
  for (var r2 = n, i2 = e2(); ; ) try {
    if (-parseInt(r2(195)) / 1 + -parseInt(r2(192)) / 2 * (parseInt(r2(196)) / 3) + -parseInt(r2(207)) / 4 * (parseInt(r2(198)) / 5) + parseInt(r2(199)) / 6 * (parseInt(r2(189)) / 7) + -parseInt(r2(190)) / 8 * (-parseInt(r2(191)) / 9) + -parseInt(r2(203)) / 10 + parseInt(r2(205)) / 11 * (parseInt(r2(197)) / 12) === t2) break;
    i2.push(i2.shift());
  } catch {
    i2.push(i2.shift());
  }
})(i, 544355), e();
var r = (function() {
  var e2 = t(function* (e3, r2 = {}) {
    var i2 = n;
    Array.isArray(r2) && (r2 = r2[0]);
    let a = document.createElement(`a`), o = e3;
    `body` in e3 && (o = yield (function() {
      var e4 = t(function* (e5, r3) {
        let i3 = e5.getReader(), a2 = new ReadableStream({ start: (e6) => (function() {
          var r4 = t(function* () {
            var t2 = n;
            return i3.read()[t2(193)](({ done: n2, value: r5 }) => {
              var i4 = t2;
              if (!n2) return e6[i4(204)](r5), a3();
              e6.close();
            });
          });
          function a3() {
            return r4.apply(this, arguments);
          }
          return a3;
        })()() }), o2 = yield new Response(a2).blob();
        return i3.releaseLock(), new Blob([o2], { type: r3 });
      });
      return function(t2, n2) {
        return e4.apply(this, arguments);
      };
    })()(e3.body, e3.headers[i2(200)](`content-type`))), a[i2(194)] = r2.fileName || `Untitled`, a[i2(202)] = URL.createObjectURL(yield o);
    let s = () => {
      typeof c == i2(208) && c();
    }, c = r2[i2(206)] && r2.legacySetup(s, () => c(reject), a);
    return a.addEventListener(`click`, () => {
      setTimeout(() => URL.revokeObjectURL(a.href), 3e4), s();
    }), a[i2(201)](), null;
  });
  return function(t2) {
    return e2.apply(this, arguments);
  };
})();
function i() {
  var e2 = [`enqueue`, `418mGfcYh`, `legacySetup`, `1533700BvXcjK`, `function`, `7xnAXHt`, `24RfxpJh`, `1509291QYqamC`, `18806lWkoKv`, `then`, `download`, `473890WwfgeB`, `177TvuSKJ`, `510132pMVZqi`, `5oiEqMP`, `3330018OfEGVQ`, `get`, `click`, `href`, `7170710ZMbAcX`];
  return i = function() {
    return e2;
  }, i();
}
export {
  r as default
};
