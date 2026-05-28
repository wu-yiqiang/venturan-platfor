import { m as e, p as t } from "./index-D-g3WoLo.js";
(function(e2, t2) {
  for (var r2 = n, i2 = e2(); ; ) try {
    if (parseInt(r2(243)) / 1 + -parseInt(r2(232)) / 2 + -parseInt(r2(238)) / 3 * (-parseInt(r2(231)) / 4) + -parseInt(r2(237)) / 5 * (-parseInt(r2(240)) / 6) + -parseInt(r2(235)) / 7 + parseInt(r2(233)) / 8 * (-parseInt(r2(242)) / 9) + -parseInt(r2(241)) / 10 === t2) break;
    i2.push(i2.shift());
  } catch {
    i2.push(i2.shift());
  }
})(a, 317578);
function n(e2, t2) {
  return e2 -= 231, a()[e2];
}
e();
var r = (function() {
  var e2 = t(function* (e3) {
    let t2 = yield e3.getFile();
    return t2.handle = e3, t2;
  });
  return function(t2) {
    return e2.apply(this, arguments);
  };
})(), i = (function() {
  var e2 = t(function* (e3 = [{}]) {
    var t2 = n;
    Array.isArray(e3) || (e3 = [e3]);
    let i2 = [];
    e3[t2(244)]((e4, n2) => {
      var r2 = t2;
      i2[n2] = { description: e4.description || ``, accept: {} }, e4[r2(239)] ? e4.mimeTypes.map((t3) => {
        i2[n2].accept[t3] = e4.extensions || [];
      }) : i2[n2].accept[`*/*`] = e4.extensions || [];
    });
    let a2 = yield window.showOpenFilePicker({ id: e3[0].id, startIn: e3[0].startIn, types: i2, multiple: e3[0].multiple || false, excludeAcceptAllOption: e3[0][t2(234)] || false }), o = yield Promise.all(a2.map(r));
    return e3[0].multiple ? o : o[0];
  });
  return function() {
    return e2[n(236)](this, arguments);
  };
})();
function a() {
  var e2 = [`640434rVJWtV`, `4184AcyudT`, `excludeAcceptAllOption`, `1562736nZOgPo`, `apply`, `347595RAhtNV`, `191082isVIqf`, `mimeTypes`, `48xdTtPr`, `1396880MjYaVm`, `4419NuSBNk`, `382902WiJdvh`, `forEach`, `20lLDwyO`];
  return a = function() {
    return e2;
  }, a();
}
export {
  i as default
};
