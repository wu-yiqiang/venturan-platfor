import { m as e, p as t } from "./index-D-g3WoLo.js";
(function(e2, t2) {
  for (var n2 = r, i2 = e2(); ; ) try {
    if (-parseInt(n2(300)) / 1 * (parseInt(n2(302)) / 2) + -parseInt(n2(295)) / 3 + parseInt(n2(288)) / 4 * (parseInt(n2(289)) / 5) + parseInt(n2(297)) / 6 * (parseInt(n2(294)) / 7) + -parseInt(n2(299)) / 8 + parseInt(n2(296)) / 9 + parseInt(n2(287)) / 10 === t2) break;
    i2.push(i2.shift());
  } catch {
    i2.push(i2.shift());
  }
})(i, 355885), e();
function n(e2) {
  function t2(e3) {
    var t3 = r;
    if (Object(e3) !== e3) return Promise.reject(TypeError(e3 + ` is not an object.`));
    var n2 = e3.done;
    return Promise[t3(293)](e3.value).then(function(e4) {
      return { value: e4, done: n2 };
    });
  }
  return n = function(e3) {
    this.s = e3, this.n = e3.next;
  }, n.prototype = { s: null, n: null, next: function() {
    var e3 = r;
    return t2(this.n[e3(290)](this.s, arguments));
  }, return: function(e3) {
    var n2 = this.s.return;
    return n2 === void 0 ? Promise.resolve({ value: e3, done: true }) : t2(n2.apply(this.s, arguments));
  }, throw: function(e3) {
    var n2 = r, i2 = this.s[n2(298)];
    return i2 === void 0 ? Promise[n2(301)](e3) : t2(i2.apply(this.s, arguments));
  } }, new n(e2);
}
function r(e2, t2) {
  return e2 -= 286, i()[e2];
}
function i() {
  var e2 = [`2nxybUf`, `all`, `name`, `6354720Nbqxgp`, `494432czNgaD`, `15EGYYqw`, `apply`, `push`, `done`, `resolve`, `7koCBRY`, `186588rayLMz`, `1538487HxwgRD`, `194556rsBFNm`, `return`, `4525672DjkYkt`, `225875TEMiZa`, `reject`];
  return i = function() {
    return e2;
  }, i();
}
var a = (function() {
  var e2 = r, i2 = t(function* (t2, r2, i3 = t2[e2(286)], o2) {
    var s = e2;
    let c = [], l = [];
    var u, d = false, f = false;
    try {
      for (var p, m = (function(e3) {
        var t3, r3, i4, a2 = 2;
        for (typeof Symbol < `u` && (r3 = Symbol.asyncIterator, i4 = Symbol.iterator); a2--; ) {
          if (r3 && (t3 = e3[r3]) != null) return t3.call(e3);
          if (i4 && (t3 = e3[i4]) != null) return new n(t3.call(e3));
          r3 = `@@asyncIterator`, i4 = `@@iterator`;
        }
        throw TypeError(`Object is not async iterable`);
      })(t2.values()); d = !(p = yield m.next())[s(292)]; d = false) {
        let e3 = p.value, n2 = i3 + `/` + e3.name;
        e3.kind === `file` ? l[s(291)](e3.getFile().then((r3) => (r3.directoryHandle = t2, r3.handle = e3, Object.defineProperty(r3, "webkitRelativePath", { configurable: true, enumerable: true, get: () => n2 })))) : e3.kind !== `directory` || !r2 || o2 && o2(e3) || c.push(a(e3, r2, n2, o2));
      }
    } catch (e3) {
      f = true, u = e3;
    } finally {
      try {
        d && m.return != null && (yield m.return());
      } finally {
        if (f) throw u;
      }
    }
    return [...(yield Promise[s(303)](c)).flat(), ...yield Promise.all(l)];
  });
  return function(e3, t2) {
    return i2.apply(this, arguments);
  };
})(), o = (function() {
  var e2 = t(function* (e3 = {}) {
    return e3.recursive = e3.recursive || false, a(yield window.showDirectoryPicker({ id: e3.id, startIn: e3.startIn }), e3.recursive, void 0, e3.skipDirectory);
  });
  return function() {
    return e2.apply(this, arguments);
  };
})();
export {
  o as default
};
