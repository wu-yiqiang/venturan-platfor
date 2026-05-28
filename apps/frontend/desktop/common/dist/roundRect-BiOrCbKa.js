function e(e2, n) {
  return e2 -= 388, t()[e2];
}
(function(t2, n) {
  let r = e, i = t2();
  for (; ; ) try {
    if (-parseInt(r(403)) / 1 + -parseInt(r(389)) / 2 + -parseInt(r(399)) / 3 + parseInt(r(396)) / 4 * (-parseInt(r(398)) / 5) + parseInt(r(390)) / 6 + parseInt(r(391)) / 7 * (-parseInt(r(395)) / 8) + parseInt(r(401)) / 9 === n) break;
    i.push(i.shift());
  } catch {
    i.push(i.shift());
  }
})(t, 235917), (() => {
  let t2 = e;
  var n;
  if ((n = Path2D.prototype).roundRect ?? (n.roundRect = a), globalThis[t2(388)]) {
    var r;
    (r = globalThis.CanvasRenderingContext2D.prototype).roundRect ?? (r.roundRect = a);
  }
  if (globalThis.OffscreenCanvasRenderingContext2D) {
    var i;
    (i = globalThis.OffscreenCanvasRenderingContext2D.prototype).roundRect ?? (i.roundRect = a);
  }
  function a(e2, n2, r2, i2, a2) {
    let s2 = t2;
    if (![e2, n2, r2, i2].every((e3) => Number[s2(400)](e3))) return;
    a2 = h(a2);
    let c, l, u, d;
    if (a2.length === 4) c = _(a2[0]), l = _(a2[1]), u = _(a2[2]), d = _(a2[3]);
    else if (a2[s2(397)] === 3) c = _(a2[0]), l = _(a2[1]), d = _(a2[1]), u = _(a2[2]);
    else if (a2.length === 2) c = _(a2[0]), u = _(a2[0]), l = _(a2[1]), d = _(a2[1]);
    else if (a2[s2(397)] === 1) c = _(a2[0]), l = _(a2[0]), u = _(a2[0]), d = _(a2[0]);
    else throw RangeError(o(this) + ` ` + a2[s2(397)] + ` is not a valid size for radii sequence.`);
    let f = [c, l, u, d], p = f.find(({ x: e3, y: t3 }) => e3 < 0 || t3 < 0);
    if ((p == null ? void 0 : p.x) < 0 ? p.x : p == null ? void 0 : p.y, f.some(({ x: e3, y: t3 }) => !Number.isFinite(e3) || !Number[s2(400)](t3))) return;
    if (p) throw RangeError(o(this) + ` Radius value ` + p + ` is negative.`);
    v(f), r2 < 0 && i2 < 0 ? (this.moveTo(e2 - c.x, n2), this.ellipse(e2 + r2 + l.x, n2 - l.y, l.x, l.y, 0, -Math.PI * 1.5, -Math.PI), this.ellipse(e2 + r2 + u.x, n2 + i2 + u.y, u.x, u.y, 0, -Math.PI, -Math.PI / 2), this[s2(392)](e2 - d.x, n2 + i2 + d.y, d.x, d.y, 0, -Math.PI / 2, 0), this.ellipse(e2 - c.x, n2 - c.y, c.x, c.y, 0, 0, -Math.PI / 2)) : r2 < 0 ? (this.moveTo(e2 - c.x, n2), this.ellipse(e2 + r2 + l.x, n2 + l.y, l.x, l.y, 0, -Math.PI / 2, -Math.PI, 1), this.ellipse(e2 + r2 + u.x, n2 + i2 - u.y, u.x, u.y, 0, -Math.PI, -Math.PI * 1.5, 1), this.ellipse(e2 - d.x, n2 + i2 - d.y, d.x, d.y, 0, Math.PI / 2, 0, 1), this.ellipse(e2 - c.x, n2 + c.y, c.x, c.y, 0, 0, -Math.PI / 2, 1)) : i2 < 0 ? (this.moveTo(e2 + c.x, n2), this.ellipse(e2 + r2 - l.x, n2 - l.y, l.x, l.y, 0, Math.PI / 2, 0, 1), this.ellipse(e2 + r2 - u.x, n2 + i2 + u.y, u.x, u.y, 0, 0, -Math.PI / 2, 1), this.ellipse(e2 + d.x, n2 + i2 + d.y, d.x, d.y, 0, -Math.PI / 2, -Math.PI, 1), this[s2(392)](e2 + c.x, n2 - c.y, c.x, c.y, 0, -Math.PI, -Math.PI * 1.5, 1)) : (this[s2(404)](e2 + c.x, n2), this.ellipse(e2 + r2 - l.x, n2 + l.y, l.x, l.y, 0, -Math.PI / 2, 0), this[s2(392)](e2 + r2 - u.x, n2 + i2 - u.y, u.x, u.y, 0, 0, Math.PI / 2), this.ellipse(e2 + d.x, n2 + i2 - d.y, d.x, d.y, 0, Math.PI / 2, Math.PI), this[s2(392)](e2 + c.x, n2 + c.y, c.x, c.y, 0, Math.PI, Math.PI * 1.5)), this.closePath(), this.moveTo(e2, n2);
    function m(e3) {
      let { x: t3, y: n3, z: r3, w: i3 } = e3;
      return { x: t3, y: n3, z: r3, w: i3 };
    }
    function h(e3) {
      let t3 = s2, n3 = typeof e3;
      return n3 === `undefined` || e3 === null ? [0] : n3 === `function` ? [NaN] : n3 === t3(393) ? typeof e3[Symbol.iterator] == `function` ? [...e3].map((e4) => {
        let t4 = typeof e4;
        return t4 === `undefined` || e4 === null ? 0 : t4 === `function` ? NaN : t4 === `object` ? m(e4) : g(e4);
      }) : [m(e3)] : [g(e3)];
    }
    function g(e3) {
      return +e3;
    }
    function _(e3) {
      let t3 = g(e3);
      return Number.isFinite(t3) ? { x: t3, y: t3 } : Object(e3) === e3 ? { x: g(e3.x ?? 0), y: g(e3.y ?? 0) } : { x: NaN, y: NaN };
    }
    function v(e3) {
      let t3 = s2, [n3, a3, o2, c2] = e3, l2 = [Math.abs(r2) / (n3.x + a3.x), Math.abs(i2) / (a3.y + o2.y), Math[t3(394)](r2) / (o2.x + c2.x), Math[t3(394)](i2) / (n3.y + c2.y)], u2 = Math.min(...l2);
      if (u2 <= 1) for (let t4 of e3) t4.x *= u2, t4.y *= u2;
    }
  }
  function o(e2) {
    return `Failed to execute 'roundRect' on '` + s(e2) + `':`;
  }
  function s(e2) {
    let n2 = t2;
    return Object(e2) === e2 && e2 instanceof Path2D ? `Path2D` : e2 instanceof (globalThis == null ? void 0 : globalThis[n2(388)]) ? `CanvasRenderingContext2D` : e2 instanceof (globalThis == null ? void 0 : globalThis[n2(402)]) ? `OffscreenCanvasRenderingContext2D` : (e2 == null ? void 0 : e2.constructor.name) || e2;
  }
})();
function t() {
  let e2 = [`84gooyzD`, `ellipse`, `object`, `abs`, `222984wLZPZP`, `8rWRSlZ`, `length`, `134655gCqZaj`, `907617RmxqKn`, `isFinite`, `15167763dbQnEL`, `OffscreenCanvasRenderingContext2D`, `390487XusZgH`, `moveTo`, `CanvasRenderingContext2D`, `938724MCWNYs`, `608016YUaiLc`];
  return t = function() {
    return e2;
  }, t();
}
