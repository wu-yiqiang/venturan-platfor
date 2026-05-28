(function(t2, n2) {
  let r = e, i = t2();
  for (; ; ) try {
    if (-parseInt(r(507)) / 1 + -parseInt(r(500)) / 2 + -parseInt(r(497)) / 3 * (-parseInt(r(503)) / 4) + -parseInt(r(504)) / 5 * (parseInt(r(509)) / 6) + parseInt(r(498)) / 7 + parseInt(r(510)) / 8 * (-parseInt(r(508)) / 9) + parseInt(r(502)) / 10 * (parseInt(r(505)) / 11) === n2) break;
    i.push(i.shift());
  } catch {
    i.push(i.shift());
  }
})(n, 712986);
function e(e2, t2) {
  return e2 -= 497, n()[e2];
}
function t(t2) {
  let n2 = e, r = { keyword: [`break`, `case`, `chan`, `const`, `continue`, n2(501), `defer`, n2(512), `fallthrough`, `for`, n2(516), `go`, `goto`, `if`, `import`, `interface`, `map`, `package`, `range`, `return`, `select`, `struct`, `switch`, `type`, `var`], type: [`bool`, `byte`, `complex64`, `complex128`, `error`, `float32`, n2(514), `int8`, n2(506), `int32`, `int64`, `string`, n2(515), `uint16`, `uint32`, `uint64`, `int`, `uint`, `uintptr`, `rune`], literal: [n2(511), `false`, `iota`, `nil`], built_in: [`append`, `cap`, `close`, `complex`, `copy`, `imag`, `len`, `make`, `new`, `panic`, `print`, `println`, `real`, `recover`, `delete`] };
  return { name: `Go`, aliases: [`golang`], keywords: r, illegal: `</`, contains: [t2.C_LINE_COMMENT_MODE, t2[n2(513)], { className: `string`, variants: [t2[n2(499)], t2.APOS_STRING_MODE, { begin: "`", end: "`" }] }, { className: `number`, variants: [{ match: /-?\b0[xX]\.[a-fA-F0-9](_?[a-fA-F0-9])*[pP][+-]?\d(_?\d)*i?/, relevance: 0 }, { match: /-?\b0[xX](_?[a-fA-F0-9])+((\.([a-fA-F0-9](_?[a-fA-F0-9])*)?)?[pP][+-]?\d(_?\d)*)?i?/, relevance: 0 }, { match: /-?\b0[oO](_?[0-7])*i?/, relevance: 0 }, { match: /-?\.\d(_?\d)*([eE][+-]?\d(_?\d)*)?i?/, relevance: 0 }, { match: /-?\b\d(_?\d)*(\.(\d(_?\d)*)?)?([eE][+-]?\d(_?\d)*)?i?/, relevance: 0 }] }, { begin: /:=/ }, { className: `function`, beginKeywords: `func`, end: `\\s*(\\{|$)`, excludeEnd: true, contains: [t2.TITLE_MODE, { className: `params`, begin: /\(/, end: /\)/, endsParent: true, keywords: r, illegal: /["']/ }] }] };
}
function n() {
  let e2 = [`11soiGPY`, `int16`, `998352ZZcXEa`, `12394548lJuQTQ`, `498uPcGRH`, `8dwTOEI`, `true`, `else`, `C_BLOCK_COMMENT_MODE`, `float64`, `uint8`, `func`, `836559ViPgQl`, `8973083EtPyBi`, `QUOTE_STRING_MODE`, `3134vnimze`, `default`, `16686290gdkxuT`, `4veVolL`, `8390fvuZQa`];
  return n = function() {
    return e2;
  }, n();
}
export {
  t as default
};
