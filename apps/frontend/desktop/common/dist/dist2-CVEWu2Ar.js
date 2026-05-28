import { a as e } from "./chunk-DeXYQlWK.js";
(function(e2, n2) {
  for (var r2 = t, i2 = e2(); ; ) try {
    if (parseInt(r2(241)) / 1 + -parseInt(r2(247)) / 2 * (parseInt(r2(243)) / 3) + parseInt(r2(235)) / 4 + parseInt(r2(250)) / 5 + parseInt(r2(251)) / 6 + -parseInt(r2(240)) / 7 + parseInt(r2(244)) / 8 * (parseInt(r2(239)) / 9) === n2) break;
    i2.push(i2.shift());
  } catch {
    i2.push(i2.shift());
  }
})(i, 192597);
function t(e2, t2) {
  return e2 -= 233, i()[e2];
}
var n = e((e2) => {
  var n2 = t;
  Object.defineProperty(e2, "__esModule", { value: true }), e2.BLANK_URL = e2.relativeFirstCharacters = e2[n2(237)] = e2.urlSchemeRegex = e2.ctrlCharactersRegex = e2[n2(236)] = e2[n2(234)] = e2.invalidProtocolRegex = void 0, e2.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im, e2.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g, e2.htmlCtrlEntityRegex = /&(newline|tab);/gi, e2.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim, e2[n2(245)] = /^.+(:|&colon;)/gim, e2.whitespaceEscapeCharsRegex = /(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g, e2.relativeFirstCharacters = [`.`, `/`], e2.BLANK_URL = `about:blank`;
}), r = e((e2) => {
  Object.defineProperty(e2, "__esModule", { value: true }), e2.sanitizeUrl = c;
  var r2 = n();
  function i2(e3) {
    return r2.relativeFirstCharacters.indexOf(e3[0]) > -1;
  }
  function a(e3) {
    return e3.replace(r2.ctrlCharactersRegex, ``).replace(r2.htmlEntitiesRegex, function(e4, t2) {
      return String.fromCharCode(t2);
    });
  }
  function o(e3) {
    return URL.canParse(e3);
  }
  function s(e3) {
    try {
      return decodeURIComponent(e3);
    } catch {
      return e3;
    }
  }
  function c(e3) {
    var n2 = t;
    if (!e3) return r2[n2(249)];
    var c2, l = s(e3.trim());
    do
      l = a(l).replace(r2.htmlCtrlEntityRegex, ``).replace(r2[n2(248)], ``).replace(r2.whitespaceEscapeCharsRegex, ``).trim(), l = s(l), c2 = l.match(r2[n2(248)]) || l.match(r2.htmlEntitiesRegex) || l[n2(246)](r2.htmlCtrlEntityRegex) || l.match(r2.whitespaceEscapeCharsRegex);
    while (c2 && c2[n2(238)] > 0);
    var u = l;
    if (!u) return r2.BLANK_URL;
    if (i2(u)) return u;
    var d = u.trimStart(), f = d.match(r2[n2(245)]);
    if (!f) return u;
    var p = f[0].toLowerCase().trim();
    if (r2.invalidProtocolRegex.test(p)) return r2.BLANK_URL;
    var m = d[n2(242)](/\\/g, `/`);
    if (p === `mailto:` || p.includes(`://`)) return m;
    if (p === `http:` || p === `https:`) {
      if (!o(m)) return r2.BLANK_URL;
      var h = new URL(m);
      return h.protocol = h.protocol.toLowerCase(), h.hostname = h.hostname[n2(233)](), h.toString();
    }
    return m;
  }
});
function i() {
  var e2 = [`18615nViefi`, `1256FdVrbf`, `urlSchemeRegex`, `match`, `54yWNsPY`, `ctrlCharactersRegex`, `BLANK_URL`, `1277040GwsWXA`, `272670Ukeeea`, `toLowerCase`, `htmlEntitiesRegex`, `962616BkWtFT`, `htmlCtrlEntityRegex`, `whitespaceEscapeCharsRegex`, `length`, `3303nxkNmC`, `1902271govxFb`, `32759afsgDo`, `replace`];
  return i = function() {
    return e2;
  }, i();
}
export {
  r as t
};
