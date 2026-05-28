import { g as e, h as t, m as n, p as r } from "./index-D-g3WoLo.js";
var i = T;
(function(e2, t3) {
  let n2 = T, r2 = e2();
  for (; ; ) try {
    if (parseInt(n2(416)) / 1 * (parseInt(n2(315)) / 2) + -parseInt(n2(329)) / 3 * (-parseInt(n2(334)) / 4) + parseInt(n2(411)) / 5 * (parseInt(n2(346)) / 6) + -parseInt(n2(331)) / 7 * (parseInt(n2(351)) / 8) + -parseInt(n2(328)) / 9 * (-parseInt(n2(425)) / 10) + parseInt(n2(343)) / 11 + parseInt(n2(406)) / 12 * (-parseInt(n2(373)) / 13) === t3) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(h, 970015), n();
var a = new TextEncoder(), o = i(342), s = new Uint8Array(256);
for (let e2 = 0; e2 < 64; e2++) s[o[i(349)](e2)] = e2;
function c(e2) {
  let t3 = i, n2 = Math.ceil(e2[t3(368)] / 4) * 3, r2 = e2.length, a2 = 0;
  e2.length % 4 == 3 ? n2-- : e2[t3(368)] % 4 == 2 ? n2 -= 2 : e2[e2.length - 1] === `=` && (n2--, e2[e2.length - 2] === `=` && n2--);
  let o2 = new ArrayBuffer(n2), c2 = new Uint8Array(o2);
  for (let n3 = 0; n3 < r2; n3 += 4) {
    let r3 = s[e2[t3(349)](n3)], i2 = s[e2.charCodeAt(n3 + 1)], o3 = s[e2.charCodeAt(n3 + 2)], l2 = s[e2.charCodeAt(n3 + 3)];
    c2[a2++] = r3 << 2 | i2 >> 4, c2[a2++] = (i2 & 15) << 4 | o3 >> 2, c2[a2++] = (o3 & 3) << 6 | l2 & 63;
  }
  return o2;
}
function l(e2) {
  e2 || (e2 = `utf8`);
  let t3;
  try {
    t3 = new TextDecoder(e2);
  } catch {
    t3 = new TextDecoder(`windows-1252`);
  }
  return t3;
}
function u(e2) {
  return d.apply(this, arguments);
}
function d() {
  return d = r(function* (e2) {
    let t3 = T;
    if (`arrayBuffer` in e2) return yield e2[t3(322)]();
    let n2 = new FileReader();
    return new Promise((r2, i2) => {
      let a2 = t3;
      n2[a2(415)] = function(e3) {
        r2(e3.target.result);
      }, n2.onerror = function(e3) {
        i2(n2.error);
      }, n2[a2(347)](e2);
    });
  }), d.apply(this, arguments);
}
function f(e2) {
  return e2 >= 48 && e2 <= 57 || e2 >= 97 && e2 <= 102 || e2 >= 65 && e2 <= 70 ? String.fromCharCode(e2) : false;
}
function p(e2, t3, n2) {
  let r2 = i, o2 = e2.indexOf(`*`);
  o2 >= 0 && (e2 = e2.substr(0, o2)), t3 = t3.toUpperCase();
  let s2;
  if (t3 === `Q`) {
    n2 = n2.replace(/=\s+([0-9a-fA-F])/g, `=$1`)[r2(350)](/[_\s]/g, ` `);
    let e3 = a[r2(372)](n2), t4 = [];
    for (let n3 = 0, r3 = e3.length; n3 < r3; n3++) {
      let i3 = e3[n3];
      if (n3 <= r3 - 2 && i3 === 61) {
        let r4 = f(e3[n3 + 1]), i4 = f(e3[n3 + 2]);
        if (r4 && i4) {
          let e4 = parseInt(r4 + i4, 16);
          t4.push(e4), n3 += 2;
          continue;
        }
      }
      t4.push(i3);
    }
    s2 = new ArrayBuffer(t4.length);
    let i2 = new DataView(s2);
    for (let e4 = 0, n3 = t4.length; e4 < n3; e4++) i2.setUint8(e4, t4[e4]);
  } else s2 = t3 === `B` ? c(n2.replace(/[^a-zA-Z0-9\+\/=]+/g, ``)) : a.encode(n2);
  return l(e2).decode(s2);
}
function m(e2) {
  let t3 = i, n2 = true;
  for (; ; ) {
    let r2 = (e2 || ``)[t3(389)]().replace(/(=\?([^?]+)\?[Bb]\?([^?]*)\?=)\s*(?==\?([^?]+)\?[Bb]\?[^?]*\?=)/g, (e3, t4, r3, i2, a2) => n2 && r3 === a2 && i2.length % 4 == 0 && !/=$/.test(i2) ? t4 + `__\0JOIN\0__` : e3).replace(/(=\?([^?]+)\?[Qq]\?[^?]*\?=)\s*(?==\?([^?]+)\?[Qq]\?[^?]*\?=)/g, (e3, t4, r3, i2) => n2 && r3 === i2 ? t4 + `__\0JOIN\0__` : e3).replace(/(\?=)?__\x00JOIN\x00__(=\?([^?]+)\?[QqBb]\?)?/g, ``).replace(/(=\?[^?]+\?[QqBb]\?[^?]*\?=)\s+(?==\?[^?]+\?[QqBb]\?[^?]*\?=)/g, `$1`).replace(/=\?([\w_\-*]+)\?([QqBb])\?([^?]*)\?=/g, (e3, t4, n3, r3) => p(t4, n3, r3));
    if (n2 && r2[t3(408)](`\uFFFD`) >= 0) n2 = false;
    else return r2;
  }
}
function h() {
  let e2 = `Maximum header size of .split.decodeQPBytes.depth.toString.checkChar.date.maxNestingDepth.endsWith.childNodes.push.<div class="postal-email-header-key">Date</div><div class="postal-email-header-value postal-email-header-date" data-date=".text.<br />.flatten.currentNode.finalizeChildNodes.in-reply-to.name.escaped.map.3144wCvmGq.substr.indexOf.processNodeTree.boundaries.5zSkrvA. levels exceeded.header.toUpperCase.onload.23VrlgQd.key.numeric.
-- .join.subMessage.node.isInlineTextNode.read.5846420gHkHxE.textContent.content.84006MrKDQX.body.base64.plain.headerLines.contentType.slice.arrayBuffer.reply-to.html.tokenize.operatorExpecting.buf.27iipJTe.2913EeNBnQ.address.41167ZYKqeG.params.contentDescription.6832YrVSZP.stripComments.index.attachmentEncoding.comment.type.includes.feed.ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/.8345722pVStsV.
-------------
.readLine.5517444ezdNqb.readAsArrayBuffer.forEach.charCodeAt.replace.752IjkpOE.delsp.match.value.test.remainder.operator.reduce.decodeChunks.finalize.boundary.</div>.concat.options.application/octet-stream.Can not reuse parser, create a new PostalMime object.charAt.length.parsed.from.trim.encode.224965LyORYG.decodeFlowedText.resolveStream.group.set.reverse." class="postal-email-address">.decoder.contentId.subject.noBreak.format`.split(`.`);
  return h = function() {
    return e2;
  }, h();
}
function g(e2, t3) {
  let n2 = i;
  t3 || (t3 = `utf-8`);
  let r2 = [];
  for (let t4 = 0; t4 < e2.length; t4++) {
    let i2 = e2[n2(367)](t4);
    if (i2 === `%` && /^[a-f0-9]{2}/i[n2(355)](e2.substr(t4 + 1, 2))) {
      let n3 = e2.substr(t4 + 1, 2);
      t4 += 2, r2.push(parseInt(n3, 16));
    } else if (i2.charCodeAt(0) > 126) {
      i2 = a.encode(i2);
      for (let e3 = 0; e3 < i2[n2(368)]; e3++) r2.push(i2[e3]);
    } else r2.push(i2.charCodeAt(0));
  }
  let o2 = new ArrayBuffer(r2.length), s2 = new DataView(o2);
  for (let e3 = 0, t4 = r2.length; e3 < t4; e3++) s2.setUint8(e3, r2[e3]);
  return l(t3).decode(o2);
}
function _(e2) {
  let t3 = i, n2 = /* @__PURE__ */ new Map();
  Object.keys(e2.params).forEach((t4) => {
    let r2 = T, i2 = t4[r2(353)](/\*((\d+)\*?)?$/);
    if (!i2) return;
    let a2 = t4[r2(407)](0, i2.index).toLowerCase(), o2 = Number(i2[2]) || 0, s2;
    n2.has(a2) ? s2 = n2.get(a2) : (s2 = { charset: false, values: [] }, n2[r2(377)](a2, s2));
    let c2 = e2.params[t4];
    o2 === 0 && i2[0].charAt(i2[0][r2(368)] - 1) === `*` && (i2 = c2.match(/^([^']*)'[^']*'(.*)$/)) && (s2.charset = i2[1] || `utf-8`, c2 = i2[2]), s2.values.push({ nr: o2, value: c2 }), delete e2.params[t4];
  }), n2[t3(348)]((n3, r2) => {
    let i2 = t3;
    e2.params[r2] = g(n3.values.sort((e3, t4) => e3.nr - t4.nr)[i2(405)]((e3) => e3.value).join(``), n3.charset);
  });
}
var v = class {
  constructor() {
    this.chunks = [];
  }
  update(e2) {
    let t3 = i;
    this.chunks[t3(395)](e2), this.chunks.push(`
`);
  }
  finalize() {
    let e2 = i;
    return u(new Blob(this.chunks, { type: e2(365) }));
  }
}, y = class {
  constructor(e2) {
    let t3 = i;
    e2 || (e2 = {}), this.decoder = e2[t3(380)] || new TextDecoder(), this.maxChunkSize = 100 * 1024, this.chunks = [], this.remainder = ``;
  }
  update(e2) {
    let t3 = i, n2 = this.decoder.decode(e2);
    if (n2 = n2.replace(/[^a-zA-Z0-9+\/]+/g, ``), this[t3(356)] += n2, this.remainder.length >= this.maxChunkSize) {
      let e3 = Math.floor(this.remainder.length / 4) * 4, n3;
      e3 === this.remainder.length ? (n3 = this.remainder, this.remainder = ``) : (n3 = this.remainder.substr(0, e3), this.remainder = this.remainder.substr(e3)), n3[t3(368)] && this.chunks.push(c(n3));
    }
  }
  finalize() {
    let e2 = i;
    return this.remainder && !/^=+$/.test(this.remainder) && this.chunks.push(c(this[e2(356)])), u(new Blob(this.chunks, { type: `application/octet-stream` }));
  }
}, b = /^=[a-f0-9]{2}$/i, x = /(?==[a-f0-9]{2})/i, S = /=\r?\n/g, C = /=[a-fA-F0-9]?$/, w = class {
  constructor(e2) {
    e2 || (e2 = {}), this.decoder = e2.decoder || new TextDecoder(), this.maxChunkSize = 100 * 1024, this.remainder = ``, this.chunks = [];
  }
  decodeQPBytes(e2) {
    let t3 = i, n2 = new ArrayBuffer(e2.length), r2 = new DataView(n2);
    for (let n3 = 0, i2 = e2[t3(368)]; n3 < i2; n3++) r2.setUint8(n3, parseInt(e2[n3], 16));
    return n2;
  }
  [i(359)](e2) {
    let t3 = i;
    e2 = e2.replace(S, ``);
    let n2 = e2[t3(386)](x), r2 = [];
    for (let e3 of n2) {
      if (e3.charAt(0) !== `=`) {
        r2[t3(368)] && (this.chunks.push(this.decodeQPBytes(r2)), r2 = []), this.chunks.push(e3);
        continue;
      }
      if (e3.length === 3) {
        b.test(e3) ? r2.push(e3.substr(1)) : (r2.length && (this.chunks.push(this[t3(387)](r2)), r2 = []), this.chunks.push(e3));
        continue;
      }
      if (e3.length > 3) {
        let n3 = e3.substr(0, 3);
        b[t3(355)](n3) ? (r2.push(e3.substr(1, 2)), this.chunks.push(this.decodeQPBytes(r2)), r2 = [], e3 = e3.substr(3), this.chunks.push(e3)) : (r2[t3(368)] && (this.chunks.push(this.decodeQPBytes(r2)), r2 = []), this.chunks[t3(395)](e3));
      }
    }
    r2.length && this.chunks.push(this.decodeQPBytes(r2));
  }
  update(e2) {
    let t3 = i, n2 = this.decoder.decode(e2) + `
`;
    if (n2 = this.remainder + n2, n2.length < this.maxChunkSize) {
      this.remainder = n2;
      return;
    }
    this[t3(356)] = ``;
    let r2 = n2[t3(353)](C);
    if (r2) {
      if (r2.index === 0) {
        this.remainder = n2;
        return;
      }
      this.remainder = n2[t3(407)](r2[t3(336)]), n2 = n2.substr(0, r2[t3(336)]);
    }
    this.decodeChunks(n2);
  }
  finalize() {
    let e2 = i;
    return this[e2(356)].length && (this.decodeChunks(this.remainder), this.remainder = ``), u(new Blob(this.chunks, { type: e2(365) }));
  }
};
function T(e2, t3) {
  return e2 -= 315, h()[e2];
}
n();
var E = l(), D = class {
  constructor(e2) {
    let t3 = i;
    if (this[t3(364)] = e2 || {}, this.postalMime = this.options.postalMime, this.root = !!this.options.parentNode, this[t3(394)] = [], this.options.parentNode) {
      if (this.parentNode = this.options.parentNode, this.depth = this.parentNode.depth + 1, this.depth > this.options.maxNestingDepth) throw Error(`Maximum MIME nesting depth of ` + this[t3(364)][t3(392)] + t3(412));
      this.options.parentNode[t3(394)].push(this);
    } else this[t3(388)] = 0;
    this.state = `header`, this[t3(319)] = [], this.headerSize = 0;
    let n2 = (this.options.parentMultipartType || null) === `digest` ? `message/rfc822` : `text/plain`;
    this.contentType = { value: n2, default: true }, this.contentTransferEncoding = { value: `8bit` }, this.contentDisposition = { value: `` }, this.headers = [], this.contentDecoder = false;
  }
  setupContentDecoder(e2) {
    let t3 = i;
    /base64/i.test(e2) ? this.contentDecoder = new y() : /quoted-printable/i.test(e2) ? this.contentDecoder = new w({ decoder: l(this[t3(320)].parsed.params.charset) }) : this.contentDecoder = new v();
  }
  finalize() {
    var e2 = this;
    return r(function* () {
      let t3 = T;
      if (e2.state === `finished`) return;
      e2.state === t3(413) && e2.processHeaders();
      let n2 = e2.postalMime.boundaries;
      for (let r2 = n2[t3(368)] - 1; r2 >= 0; r2--) if (n2[r2].node === e2) {
        n2.splice(r2, 1);
        break;
      }
      yield e2.finalizeChildNodes(), e2.content = e2.contentDecoder ? yield e2.contentDecoder[t3(360)]() : null, e2.state = `finished`;
    })();
  }
  [i(401)]() {
    var e2 = this;
    return r(function* () {
      let t3 = T;
      for (let n2 of e2.childNodes) yield n2[t3(360)]();
    })();
  }
  stripComments(e2) {
    let t3 = ``, n2 = 0, r2 = false, i2 = false;
    for (let a2 = 0; a2 < e2.length; a2++) {
      let o2 = e2.charAt(a2);
      if (r2) {
        n2 === 0 && (t3 += o2), r2 = false;
        continue;
      }
      if (o2 === `\\`) {
        r2 = true, n2 === 0 && (t3 += o2);
        continue;
      }
      if (o2 === `"` && n2 === 0) {
        i2 = !i2, t3 += o2;
        continue;
      }
      if (!i2) {
        if (o2 === `(`) {
          n2++;
          continue;
        }
        if (o2 === `)` && n2 > 0) {
          n2--;
          continue;
        }
      }
      n2 === 0 && (t3 += o2);
    }
    return t3;
  }
  parseStructuredHeader(e2) {
    let t3 = i;
    e2 = this[t3(335)](e2);
    let n2 = { value: false, params: {} }, r2 = false, a2 = ``, o2 = `value`, s2 = false, c2 = false, l2;
    for (let i2 = 0, u2 = e2.length; i2 < u2; i2++) switch (l2 = e2.charAt(i2), o2) {
      case t3(417):
        if (l2 === `=`) {
          r2 = a2.trim().toLowerCase(), o2 = `value`, a2 = ``;
          break;
        }
        a2 += l2;
        break;
      case `value`:
        if (c2) a2 += l2;
        else if (l2 === `\\`) {
          c2 = true;
          continue;
        } else s2 && l2 === s2 ? s2 = false : !s2 && l2 === `"` ? s2 = l2 : !s2 && l2 === `;` ? (r2 === false ? n2[t3(354)] = a2[t3(371)]() : n2[t3(332)][r2] = a2[t3(371)](), o2 = `key`, a2 = ``) : a2 += l2;
        c2 = false;
        break;
    }
    return a2 = a2.trim(), o2 === `value` ? r2 === false ? n2[t3(354)] = a2 : n2.params[r2] = a2 : a2 && (n2[t3(332)][a2.toLowerCase()] = ``), n2.value && (n2.value = n2.value.toLowerCase()), _(n2), n2;
  }
  [i(374)](e2, t3) {
    let n2 = i;
    return e2.split(/\r?\n/).reduce((e3, r2) => e3.endsWith(` `) && e3 !== `-- ` && !e3[n2(393)](n2(419)) ? t3 ? e3.slice(0, -1) + r2 : e3 + r2 : e3 + `
` + r2).replace(/^ /gm, ``);
  }
  getTextContent() {
    let e2 = i;
    if (!this.content) return ``;
    let t3 = l(this[e2(320)].parsed.params.charset).decode(this.content);
    return /^flowed$/i.test(this.contentType[e2(369)].params.format) && (t3 = this.decodeFlowedText(t3, /^yes$/i[e2(355)](this.contentType[e2(369)].params[e2(352)]))), t3;
  }
  processHeaders() {
    let e2 = i;
    for (let t3 = this.headerLines.length - 1; t3 >= 0; t3--) {
      let n2 = this[e2(319)][t3];
      t3 && /^\s/.test(n2) && (this.headerLines[t3 - 1] += `
` + n2, this.headerLines.splice(t3, 1));
    }
    this.rawHeaderLines = [];
    for (let t3 = this.headerLines.length - 1; t3 >= 0; t3--) {
      let n2 = this[e2(319)][t3], r2 = n2.indexOf(`:`), i2 = r2 < 0 ? n2.trim() : n2[e2(407)](0, r2).trim();
      this.rawHeaderLines.push({ key: i2.toLowerCase(), line: n2 });
      let a2 = n2[e2(350)](/\s+/g, ` `);
      r2 = a2[e2(408)](`:`);
      let o2 = r2 < 0 ? a2.trim() : a2.substr(0, r2).trim(), s2 = r2 < 0 ? `` : a2.substr(r2 + 1).trim();
      switch (this.headers.push({ key: o2.toLowerCase(), originalKey: o2, value: s2 }), o2.toLowerCase()) {
        case `content-type`:
          this[e2(320)].default && (this.contentType = { value: s2, parsed: {} });
          break;
        case `content-transfer-encoding`:
          this.contentTransferEncoding = { value: s2, parsed: {} };
          break;
        case `content-disposition`:
          this.contentDisposition = { value: s2, parsed: {} };
          break;
        case `content-id`:
          this.contentId = s2;
          break;
        case `content-description`:
          this.contentDescription = s2;
          break;
      }
    }
    this.contentType.parsed = this.parseStructuredHeader(this.contentType[e2(354)]), this[e2(320)].multipart = /^multipart\//i.test(this.contentType.parsed.value) ? this.contentType[e2(369)][e2(354)].substr(this.contentType.parsed.value.indexOf(`/`) + 1) : false, this.contentType.multipart && this.contentType[e2(369)].params.boundary && this.postalMime.boundaries.push({ value: a.encode(this.contentType[e2(369)].params[e2(361)]), node: this }), this.contentDisposition.parsed = this.parseStructuredHeader(this.contentDisposition.value), this.contentTransferEncoding.encoding = this.contentTransferEncoding.value.toLowerCase()[e2(386)](/[^\w-]/).shift(), this.setupContentDecoder(this.contentTransferEncoding.encoding);
  }
  [i(341)](e2) {
    let t3 = i;
    switch (this.state) {
      case `header`:
        if (!e2.length) return this.state = `body`, this.processHeaders();
        if (this.headerSize += e2.length, this.headerSize > this.options.maxHeadersSize) throw Error(t3(385) + this.options.maxHeadersSize + ` bytes exceeded`);
        this[t3(319)].push(E.decode(e2));
        break;
      case t3(316):
        this.contentDecoder.update(e2);
    }
  }
}, O = { "&AElig": `\xC6`, "&AElig;": `\xC6`, "&AMP": `&`, "&AMP;": `&`, "&Aacute": `\xC1`, "&Aacute;": `\xC1`, "&Abreve;": `\u0102`, "&Acirc": `\xC2`, "&Acirc;": `\xC2`, "&Acy;": `\u0410`, "&Afr;": `\u{1D504}`, "&Agrave": `\xC0`, "&Agrave;": `\xC0`, "&Alpha;": `\u0391`, "&Amacr;": `\u0100`, "&And;": `\u2A53`, "&Aogon;": `\u0104`, "&Aopf;": `\u{1D538}`, "&ApplyFunction;": `\u2061`, "&Aring": `\xC5`, "&Aring;": `\xC5`, "&Ascr;": `\u{1D49C}`, "&Assign;": `\u2254`, "&Atilde": `\xC3`, "&Atilde;": `\xC3`, "&Auml": `\xC4`, "&Auml;": `\xC4`, "&Backslash;": `\u2216`, "&Barv;": `\u2AE7`, "&Barwed;": `\u2306`, "&Bcy;": `\u0411`, "&Because;": `\u2235`, "&Bernoullis;": `\u212C`, "&Beta;": `\u0392`, "&Bfr;": `\u{1D505}`, "&Bopf;": `\u{1D539}`, "&Breve;": `\u02D8`, "&Bscr;": `\u212C`, "&Bumpeq;": `\u224E`, "&CHcy;": `\u0427`, "&COPY": `\xA9`, "&COPY;": `\xA9`, "&Cacute;": `\u0106`, "&Cap;": `\u22D2`, "&CapitalDifferentialD;": `\u2145`, "&Cayleys;": `\u212D`, "&Ccaron;": `\u010C`, "&Ccedil": `\xC7`, "&Ccedil;": `\xC7`, "&Ccirc;": `\u0108`, "&Cconint;": `\u2230`, "&Cdot;": `\u010A`, "&Cedilla;": `\xB8`, "&CenterDot;": `\xB7`, "&Cfr;": `\u212D`, "&Chi;": `\u03A7`, "&CircleDot;": `\u2299`, "&CircleMinus;": `\u2296`, "&CirclePlus;": `\u2295`, "&CircleTimes;": `\u2297`, "&ClockwiseContourIntegral;": `\u2232`, "&CloseCurlyDoubleQuote;": `\u201D`, "&CloseCurlyQuote;": `\u2019`, "&Colon;": `\u2237`, "&Colone;": `\u2A74`, "&Congruent;": `\u2261`, "&Conint;": `\u222F`, "&ContourIntegral;": `\u222E`, "&Copf;": `\u2102`, "&Coproduct;": `\u2210`, "&CounterClockwiseContourIntegral;": `\u2233`, "&Cross;": `\u2A2F`, "&Cscr;": `\u{1D49E}`, "&Cup;": `\u22D3`, "&CupCap;": `\u224D`, "&DD;": `\u2145`, "&DDotrahd;": `\u2911`, "&DJcy;": `\u0402`, "&DScy;": `\u0405`, "&DZcy;": `\u040F`, "&Dagger;": `\u2021`, "&Darr;": `\u21A1`, "&Dashv;": `\u2AE4`, "&Dcaron;": `\u010E`, "&Dcy;": `\u0414`, "&Del;": `\u2207`, "&Delta;": `\u0394`, "&Dfr;": `\u{1D507}`, "&DiacriticalAcute;": `\xB4`, "&DiacriticalDot;": `\u02D9`, "&DiacriticalDoubleAcute;": `\u02DD`, "&DiacriticalGrave;": "`", "&DiacriticalTilde;": `\u02DC`, "&Diamond;": `\u22C4`, "&DifferentialD;": `\u2146`, "&Dopf;": `\u{1D53B}`, "&Dot;": `\xA8`, "&DotDot;": `\u20DC`, "&DotEqual;": `\u2250`, "&DoubleContourIntegral;": `\u222F`, "&DoubleDot;": `\xA8`, "&DoubleDownArrow;": `\u21D3`, "&DoubleLeftArrow;": `\u21D0`, "&DoubleLeftRightArrow;": `\u21D4`, "&DoubleLeftTee;": `\u2AE4`, "&DoubleLongLeftArrow;": `\u27F8`, "&DoubleLongLeftRightArrow;": `\u27FA`, "&DoubleLongRightArrow;": `\u27F9`, "&DoubleRightArrow;": `\u21D2`, "&DoubleRightTee;": `\u22A8`, "&DoubleUpArrow;": `\u21D1`, "&DoubleUpDownArrow;": `\u21D5`, "&DoubleVerticalBar;": `\u2225`, "&DownArrow;": `\u2193`, "&DownArrowBar;": `\u2913`, "&DownArrowUpArrow;": `\u21F5`, "&DownBreve;": `\u0311`, "&DownLeftRightVector;": `\u2950`, "&DownLeftTeeVector;": `\u295E`, "&DownLeftVector;": `\u21BD`, "&DownLeftVectorBar;": `\u2956`, "&DownRightTeeVector;": `\u295F`, "&DownRightVector;": `\u21C1`, "&DownRightVectorBar;": `\u2957`, "&DownTee;": `\u22A4`, "&DownTeeArrow;": `\u21A7`, "&Downarrow;": `\u21D3`, "&Dscr;": `\u{1D49F}`, "&Dstrok;": `\u0110`, "&ENG;": `\u014A`, "&ETH": `\xD0`, "&ETH;": `\xD0`, "&Eacute": `\xC9`, "&Eacute;": `\xC9`, "&Ecaron;": `\u011A`, "&Ecirc": `\xCA`, "&Ecirc;": `\xCA`, "&Ecy;": `\u042D`, "&Edot;": `\u0116`, "&Efr;": `\u{1D508}`, "&Egrave": `\xC8`, "&Egrave;": `\xC8`, "&Element;": `\u2208`, "&Emacr;": `\u0112`, "&EmptySmallSquare;": `\u25FB`, "&EmptyVerySmallSquare;": `\u25AB`, "&Eogon;": `\u0118`, "&Eopf;": `\u{1D53C}`, "&Epsilon;": `\u0395`, "&Equal;": `\u2A75`, "&EqualTilde;": `\u2242`, "&Equilibrium;": `\u21CC`, "&Escr;": `\u2130`, "&Esim;": `\u2A73`, "&Eta;": `\u0397`, "&Euml": `\xCB`, "&Euml;": `\xCB`, "&Exists;": `\u2203`, "&ExponentialE;": `\u2147`, "&Fcy;": `\u0424`, "&Ffr;": `\u{1D509}`, "&FilledSmallSquare;": `\u25FC`, "&FilledVerySmallSquare;": `\u25AA`, "&Fopf;": `\u{1D53D}`, "&ForAll;": `\u2200`, "&Fouriertrf;": `\u2131`, "&Fscr;": `\u2131`, "&GJcy;": `\u0403`, "&GT": `>`, "&GT;": `>`, "&Gamma;": `\u0393`, "&Gammad;": `\u03DC`, "&Gbreve;": `\u011E`, "&Gcedil;": `\u0122`, "&Gcirc;": `\u011C`, "&Gcy;": `\u0413`, "&Gdot;": `\u0120`, "&Gfr;": `\u{1D50A}`, "&Gg;": `\u22D9`, "&Gopf;": `\u{1D53E}`, "&GreaterEqual;": `\u2265`, "&GreaterEqualLess;": `\u22DB`, "&GreaterFullEqual;": `\u2267`, "&GreaterGreater;": `\u2AA2`, "&GreaterLess;": `\u2277`, "&GreaterSlantEqual;": `\u2A7E`, "&GreaterTilde;": `\u2273`, "&Gscr;": `\u{1D4A2}`, "&Gt;": `\u226B`, "&HARDcy;": `\u042A`, "&Hacek;": `\u02C7`, "&Hat;": `^`, "&Hcirc;": `\u0124`, "&Hfr;": `\u210C`, "&HilbertSpace;": `\u210B`, "&Hopf;": `\u210D`, "&HorizontalLine;": `\u2500`, "&Hscr;": `\u210B`, "&Hstrok;": `\u0126`, "&HumpDownHump;": `\u224E`, "&HumpEqual;": `\u224F`, "&IEcy;": `\u0415`, "&IJlig;": `\u0132`, "&IOcy;": `\u0401`, "&Iacute": `\xCD`, "&Iacute;": `\xCD`, "&Icirc": `\xCE`, "&Icirc;": `\xCE`, "&Icy;": `\u0418`, "&Idot;": `\u0130`, "&Ifr;": `\u2111`, "&Igrave": `\xCC`, "&Igrave;": `\xCC`, "&Im;": `\u2111`, "&Imacr;": `\u012A`, "&ImaginaryI;": `\u2148`, "&Implies;": `\u21D2`, "&Int;": `\u222C`, "&Integral;": `\u222B`, "&Intersection;": `\u22C2`, "&InvisibleComma;": `\u2063`, "&InvisibleTimes;": `\u2062`, "&Iogon;": `\u012E`, "&Iopf;": `\u{1D540}`, "&Iota;": `\u0399`, "&Iscr;": `\u2110`, "&Itilde;": `\u0128`, "&Iukcy;": `\u0406`, "&Iuml": `\xCF`, "&Iuml;": `\xCF`, "&Jcirc;": `\u0134`, "&Jcy;": `\u0419`, "&Jfr;": `\u{1D50D}`, "&Jopf;": `\u{1D541}`, "&Jscr;": `\u{1D4A5}`, "&Jsercy;": `\u0408`, "&Jukcy;": `\u0404`, "&KHcy;": `\u0425`, "&KJcy;": `\u040C`, "&Kappa;": `\u039A`, "&Kcedil;": `\u0136`, "&Kcy;": `\u041A`, "&Kfr;": `\u{1D50E}`, "&Kopf;": `\u{1D542}`, "&Kscr;": `\u{1D4A6}`, "&LJcy;": `\u0409`, "&LT": `<`, "&LT;": `<`, "&Lacute;": `\u0139`, "&Lambda;": `\u039B`, "&Lang;": `\u27EA`, "&Laplacetrf;": `\u2112`, "&Larr;": `\u219E`, "&Lcaron;": `\u013D`, "&Lcedil;": `\u013B`, "&Lcy;": `\u041B`, "&LeftAngleBracket;": `\u27E8`, "&LeftArrow;": `\u2190`, "&LeftArrowBar;": `\u21E4`, "&LeftArrowRightArrow;": `\u21C6`, "&LeftCeiling;": `\u2308`, "&LeftDoubleBracket;": `\u27E6`, "&LeftDownTeeVector;": `\u2961`, "&LeftDownVector;": `\u21C3`, "&LeftDownVectorBar;": `\u2959`, "&LeftFloor;": `\u230A`, "&LeftRightArrow;": `\u2194`, "&LeftRightVector;": `\u294E`, "&LeftTee;": `\u22A3`, "&LeftTeeArrow;": `\u21A4`, "&LeftTeeVector;": `\u295A`, "&LeftTriangle;": `\u22B2`, "&LeftTriangleBar;": `\u29CF`, "&LeftTriangleEqual;": `\u22B4`, "&LeftUpDownVector;": `\u2951`, "&LeftUpTeeVector;": `\u2960`, "&LeftUpVector;": `\u21BF`, "&LeftUpVectorBar;": `\u2958`, "&LeftVector;": `\u21BC`, "&LeftVectorBar;": `\u2952`, "&Leftarrow;": `\u21D0`, "&Leftrightarrow;": `\u21D4`, "&LessEqualGreater;": `\u22DA`, "&LessFullEqual;": `\u2266`, "&LessGreater;": `\u2276`, "&LessLess;": `\u2AA1`, "&LessSlantEqual;": `\u2A7D`, "&LessTilde;": `\u2272`, "&Lfr;": `\u{1D50F}`, "&Ll;": `\u22D8`, "&Lleftarrow;": `\u21DA`, "&Lmidot;": `\u013F`, "&LongLeftArrow;": `\u27F5`, "&LongLeftRightArrow;": `\u27F7`, "&LongRightArrow;": `\u27F6`, "&Longleftarrow;": `\u27F8`, "&Longleftrightarrow;": `\u27FA`, "&Longrightarrow;": `\u27F9`, "&Lopf;": `\u{1D543}`, "&LowerLeftArrow;": `\u2199`, "&LowerRightArrow;": `\u2198`, "&Lscr;": `\u2112`, "&Lsh;": `\u21B0`, "&Lstrok;": `\u0141`, "&Lt;": `\u226A`, "&Map;": `\u2905`, "&Mcy;": `\u041C`, "&MediumSpace;": `\u205F`, "&Mellintrf;": `\u2133`, "&Mfr;": `\u{1D510}`, "&MinusPlus;": `\u2213`, "&Mopf;": `\u{1D544}`, "&Mscr;": `\u2133`, "&Mu;": `\u039C`, "&NJcy;": `\u040A`, "&Nacute;": `\u0143`, "&Ncaron;": `\u0147`, "&Ncedil;": `\u0145`, "&Ncy;": `\u041D`, "&NegativeMediumSpace;": `\u200B`, "&NegativeThickSpace;": `\u200B`, "&NegativeThinSpace;": `\u200B`, "&NegativeVeryThinSpace;": `\u200B`, "&NestedGreaterGreater;": `\u226B`, "&NestedLessLess;": `\u226A`, "&NewLine;": `
`, "&Nfr;": `\u{1D511}`, "&NoBreak;": `\u2060`, "&NonBreakingSpace;": `\xA0`, "&Nopf;": `\u2115`, "&Not;": `\u2AEC`, "&NotCongruent;": `\u2262`, "&NotCupCap;": `\u226D`, "&NotDoubleVerticalBar;": `\u2226`, "&NotElement;": `\u2209`, "&NotEqual;": `\u2260`, "&NotEqualTilde;": `\u2242\u0338`, "&NotExists;": `\u2204`, "&NotGreater;": `\u226F`, "&NotGreaterEqual;": `\u2271`, "&NotGreaterFullEqual;": `\u2267\u0338`, "&NotGreaterGreater;": `\u226B\u0338`, "&NotGreaterLess;": `\u2279`, "&NotGreaterSlantEqual;": `\u2A7E\u0338`, "&NotGreaterTilde;": `\u2275`, "&NotHumpDownHump;": `\u224E\u0338`, "&NotHumpEqual;": `\u224F\u0338`, "&NotLeftTriangle;": `\u22EA`, "&NotLeftTriangleBar;": `\u29CF\u0338`, "&NotLeftTriangleEqual;": `\u22EC`, "&NotLess;": `\u226E`, "&NotLessEqual;": `\u2270`, "&NotLessGreater;": `\u2278`, "&NotLessLess;": `\u226A\u0338`, "&NotLessSlantEqual;": `\u2A7D\u0338`, "&NotLessTilde;": `\u2274`, "&NotNestedGreaterGreater;": `\u2AA2\u0338`, "&NotNestedLessLess;": `\u2AA1\u0338`, "&NotPrecedes;": `\u2280`, "&NotPrecedesEqual;": `\u2AAF\u0338`, "&NotPrecedesSlantEqual;": `\u22E0`, "&NotReverseElement;": `\u220C`, "&NotRightTriangle;": `\u22EB`, "&NotRightTriangleBar;": `\u29D0\u0338`, "&NotRightTriangleEqual;": `\u22ED`, "&NotSquareSubset;": `\u228F\u0338`, "&NotSquareSubsetEqual;": `\u22E2`, "&NotSquareSuperset;": `\u2290\u0338`, "&NotSquareSupersetEqual;": `\u22E3`, "&NotSubset;": `\u2282\u20D2`, "&NotSubsetEqual;": `\u2288`, "&NotSucceeds;": `\u2281`, "&NotSucceedsEqual;": `\u2AB0\u0338`, "&NotSucceedsSlantEqual;": `\u22E1`, "&NotSucceedsTilde;": `\u227F\u0338`, "&NotSuperset;": `\u2283\u20D2`, "&NotSupersetEqual;": `\u2289`, "&NotTilde;": `\u2241`, "&NotTildeEqual;": `\u2244`, "&NotTildeFullEqual;": `\u2247`, "&NotTildeTilde;": `\u2249`, "&NotVerticalBar;": `\u2224`, "&Nscr;": `\u{1D4A9}`, "&Ntilde": `\xD1`, "&Ntilde;": `\xD1`, "&Nu;": `\u039D`, "&OElig;": `\u0152`, "&Oacute": `\xD3`, "&Oacute;": `\xD3`, "&Ocirc": `\xD4`, "&Ocirc;": `\xD4`, "&Ocy;": `\u041E`, "&Odblac;": `\u0150`, "&Ofr;": `\u{1D512}`, "&Ograve": `\xD2`, "&Ograve;": `\xD2`, "&Omacr;": `\u014C`, "&Omega;": `\u03A9`, "&Omicron;": `\u039F`, "&Oopf;": `\u{1D546}`, "&OpenCurlyDoubleQuote;": `\u201C`, "&OpenCurlyQuote;": `\u2018`, "&Or;": `\u2A54`, "&Oscr;": `\u{1D4AA}`, "&Oslash": `\xD8`, "&Oslash;": `\xD8`, "&Otilde": `\xD5`, "&Otilde;": `\xD5`, "&Otimes;": `\u2A37`, "&Ouml": `\xD6`, "&Ouml;": `\xD6`, "&OverBar;": `\u203E`, "&OverBrace;": `\u23DE`, "&OverBracket;": `\u23B4`, "&OverParenthesis;": `\u23DC`, "&PartialD;": `\u2202`, "&Pcy;": `\u041F`, "&Pfr;": `\u{1D513}`, "&Phi;": `\u03A6`, "&Pi;": `\u03A0`, "&PlusMinus;": `\xB1`, "&Poincareplane;": `\u210C`, "&Popf;": `\u2119`, "&Pr;": `\u2ABB`, "&Precedes;": `\u227A`, "&PrecedesEqual;": `\u2AAF`, "&PrecedesSlantEqual;": `\u227C`, "&PrecedesTilde;": `\u227E`, "&Prime;": `\u2033`, "&Product;": `\u220F`, "&Proportion;": `\u2237`, "&Proportional;": `\u221D`, "&Pscr;": `\u{1D4AB}`, "&Psi;": `\u03A8`, "&QUOT": `"`, "&QUOT;": `"`, "&Qfr;": `\u{1D514}`, "&Qopf;": `\u211A`, "&Qscr;": `\u{1D4AC}`, "&RBarr;": `\u2910`, "&REG": `\xAE`, "&REG;": `\xAE`, "&Racute;": `\u0154`, "&Rang;": `\u27EB`, "&Rarr;": `\u21A0`, "&Rarrtl;": `\u2916`, "&Rcaron;": `\u0158`, "&Rcedil;": `\u0156`, "&Rcy;": `\u0420`, "&Re;": `\u211C`, "&ReverseElement;": `\u220B`, "&ReverseEquilibrium;": `\u21CB`, "&ReverseUpEquilibrium;": `\u296F`, "&Rfr;": `\u211C`, "&Rho;": `\u03A1`, "&RightAngleBracket;": `\u27E9`, "&RightArrow;": `\u2192`, "&RightArrowBar;": `\u21E5`, "&RightArrowLeftArrow;": `\u21C4`, "&RightCeiling;": `\u2309`, "&RightDoubleBracket;": `\u27E7`, "&RightDownTeeVector;": `\u295D`, "&RightDownVector;": `\u21C2`, "&RightDownVectorBar;": `\u2955`, "&RightFloor;": `\u230B`, "&RightTee;": `\u22A2`, "&RightTeeArrow;": `\u21A6`, "&RightTeeVector;": `\u295B`, "&RightTriangle;": `\u22B3`, "&RightTriangleBar;": `\u29D0`, "&RightTriangleEqual;": `\u22B5`, "&RightUpDownVector;": `\u294F`, "&RightUpTeeVector;": `\u295C`, "&RightUpVector;": `\u21BE`, "&RightUpVectorBar;": `\u2954`, "&RightVector;": `\u21C0`, "&RightVectorBar;": `\u2953`, "&Rightarrow;": `\u21D2`, "&Ropf;": `\u211D`, "&RoundImplies;": `\u2970`, "&Rrightarrow;": `\u21DB`, "&Rscr;": `\u211B`, "&Rsh;": `\u21B1`, "&RuleDelayed;": `\u29F4`, "&SHCHcy;": `\u0429`, "&SHcy;": `\u0428`, "&SOFTcy;": `\u042C`, "&Sacute;": `\u015A`, "&Sc;": `\u2ABC`, "&Scaron;": `\u0160`, "&Scedil;": `\u015E`, "&Scirc;": `\u015C`, "&Scy;": `\u0421`, "&Sfr;": `\u{1D516}`, "&ShortDownArrow;": `\u2193`, "&ShortLeftArrow;": `\u2190`, "&ShortRightArrow;": `\u2192`, "&ShortUpArrow;": `\u2191`, "&Sigma;": `\u03A3`, "&SmallCircle;": `\u2218`, "&Sopf;": `\u{1D54A}`, "&Sqrt;": `\u221A`, "&Square;": `\u25A1`, "&SquareIntersection;": `\u2293`, "&SquareSubset;": `\u228F`, "&SquareSubsetEqual;": `\u2291`, "&SquareSuperset;": `\u2290`, "&SquareSupersetEqual;": `\u2292`, "&SquareUnion;": `\u2294`, "&Sscr;": `\u{1D4AE}`, "&Star;": `\u22C6`, "&Sub;": `\u22D0`, "&Subset;": `\u22D0`, "&SubsetEqual;": `\u2286`, "&Succeeds;": `\u227B`, "&SucceedsEqual;": `\u2AB0`, "&SucceedsSlantEqual;": `\u227D`, "&SucceedsTilde;": `\u227F`, "&SuchThat;": `\u220B`, "&Sum;": `\u2211`, "&Sup;": `\u22D1`, "&Superset;": `\u2283`, "&SupersetEqual;": `\u2287`, "&Supset;": `\u22D1`, "&THORN": `\xDE`, "&THORN;": `\xDE`, "&TRADE;": `\u2122`, "&TSHcy;": `\u040B`, "&TScy;": `\u0426`, "&Tab;": `	`, "&Tau;": `\u03A4`, "&Tcaron;": `\u0164`, "&Tcedil;": `\u0162`, "&Tcy;": `\u0422`, "&Tfr;": `\u{1D517}`, "&Therefore;": `\u2234`, "&Theta;": `\u0398`, "&ThickSpace;": `\u205F\u200A`, "&ThinSpace;": `\u2009`, "&Tilde;": `\u223C`, "&TildeEqual;": `\u2243`, "&TildeFullEqual;": `\u2245`, "&TildeTilde;": `\u2248`, "&Topf;": `\u{1D54B}`, "&TripleDot;": `\u20DB`, "&Tscr;": `\u{1D4AF}`, "&Tstrok;": `\u0166`, "&Uacute": `\xDA`, "&Uacute;": `\xDA`, "&Uarr;": `\u219F`, "&Uarrocir;": `\u2949`, "&Ubrcy;": `\u040E`, "&Ubreve;": `\u016C`, "&Ucirc": `\xDB`, "&Ucirc;": `\xDB`, "&Ucy;": `\u0423`, "&Udblac;": `\u0170`, "&Ufr;": `\u{1D518}`, "&Ugrave": `\xD9`, "&Ugrave;": `\xD9`, "&Umacr;": `\u016A`, "&UnderBar;": `_`, "&UnderBrace;": `\u23DF`, "&UnderBracket;": `\u23B5`, "&UnderParenthesis;": `\u23DD`, "&Union;": `\u22C3`, "&UnionPlus;": `\u228E`, "&Uogon;": `\u0172`, "&Uopf;": `\u{1D54C}`, "&UpArrow;": `\u2191`, "&UpArrowBar;": `\u2912`, "&UpArrowDownArrow;": `\u21C5`, "&UpDownArrow;": `\u2195`, "&UpEquilibrium;": `\u296E`, "&UpTee;": `\u22A5`, "&UpTeeArrow;": `\u21A5`, "&Uparrow;": `\u21D1`, "&Updownarrow;": `\u21D5`, "&UpperLeftArrow;": `\u2196`, "&UpperRightArrow;": `\u2197`, "&Upsi;": `\u03D2`, "&Upsilon;": `\u03A5`, "&Uring;": `\u016E`, "&Uscr;": `\u{1D4B0}`, "&Utilde;": `\u0168`, "&Uuml": `\xDC`, "&Uuml;": `\xDC`, "&VDash;": `\u22AB`, "&Vbar;": `\u2AEB`, "&Vcy;": `\u0412`, "&Vdash;": `\u22A9`, "&Vdashl;": `\u2AE6`, "&Vee;": `\u22C1`, "&Verbar;": `\u2016`, "&Vert;": `\u2016`, "&VerticalBar;": `\u2223`, "&VerticalLine;": `|`, "&VerticalSeparator;": `\u2758`, "&VerticalTilde;": `\u2240`, "&VeryThinSpace;": `\u200A`, "&Vfr;": `\u{1D519}`, "&Vopf;": `\u{1D54D}`, "&Vscr;": `\u{1D4B1}`, "&Vvdash;": `\u22AA`, "&Wcirc;": `\u0174`, "&Wedge;": `\u22C0`, "&Wfr;": `\u{1D51A}`, "&Wopf;": `\u{1D54E}`, "&Wscr;": `\u{1D4B2}`, "&Xfr;": `\u{1D51B}`, "&Xi;": `\u039E`, "&Xopf;": `\u{1D54F}`, "&Xscr;": `\u{1D4B3}`, "&YAcy;": `\u042F`, "&YIcy;": `\u0407`, "&YUcy;": `\u042E`, "&Yacute": `\xDD`, "&Yacute;": `\xDD`, "&Ycirc;": `\u0176`, "&Ycy;": `\u042B`, "&Yfr;": `\u{1D51C}`, "&Yopf;": `\u{1D550}`, "&Yscr;": `\u{1D4B4}`, "&Yuml;": `\u0178`, "&ZHcy;": `\u0416`, "&Zacute;": `\u0179`, "&Zcaron;": `\u017D`, "&Zcy;": `\u0417`, "&Zdot;": `\u017B`, "&ZeroWidthSpace;": `\u200B`, "&Zeta;": `\u0396`, "&Zfr;": `\u2128`, "&Zopf;": `\u2124`, "&Zscr;": `\u{1D4B5}`, "&aacute": `\xE1`, "&aacute;": `\xE1`, "&abreve;": `\u0103`, "&ac;": `\u223E`, "&acE;": `\u223E\u0333`, "&acd;": `\u223F`, "&acirc": `\xE2`, "&acirc;": `\xE2`, "&acute": `\xB4`, "&acute;": `\xB4`, "&acy;": `\u0430`, "&aelig": `\xE6`, "&aelig;": `\xE6`, "&af;": `\u2061`, "&afr;": `\u{1D51E}`, "&agrave": `\xE0`, "&agrave;": `\xE0`, "&alefsym;": `\u2135`, "&aleph;": `\u2135`, "&alpha;": `\u03B1`, "&amacr;": `\u0101`, "&amalg;": `\u2A3F`, "&amp": `&`, "&amp;": `&`, "&and;": `\u2227`, "&andand;": `\u2A55`, "&andd;": `\u2A5C`, "&andslope;": `\u2A58`, "&andv;": `\u2A5A`, "&ang;": `\u2220`, "&ange;": `\u29A4`, "&angle;": `\u2220`, "&angmsd;": `\u2221`, "&angmsdaa;": `\u29A8`, "&angmsdab;": `\u29A9`, "&angmsdac;": `\u29AA`, "&angmsdad;": `\u29AB`, "&angmsdae;": `\u29AC`, "&angmsdaf;": `\u29AD`, "&angmsdag;": `\u29AE`, "&angmsdah;": `\u29AF`, "&angrt;": `\u221F`, "&angrtvb;": `\u22BE`, "&angrtvbd;": `\u299D`, "&angsph;": `\u2222`, "&angst;": `\xC5`, "&angzarr;": `\u237C`, "&aogon;": `\u0105`, "&aopf;": `\u{1D552}`, "&ap;": `\u2248`, "&apE;": `\u2A70`, "&apacir;": `\u2A6F`, "&ape;": `\u224A`, "&apid;": `\u224B`, "&apos;": `'`, "&approx;": `\u2248`, "&approxeq;": `\u224A`, "&aring": `\xE5`, "&aring;": `\xE5`, "&ascr;": `\u{1D4B6}`, "&ast;": `*`, "&asymp;": `\u2248`, "&asympeq;": `\u224D`, "&atilde": `\xE3`, "&atilde;": `\xE3`, "&auml": `\xE4`, "&auml;": `\xE4`, "&awconint;": `\u2233`, "&awint;": `\u2A11`, "&bNot;": `\u2AED`, "&backcong;": `\u224C`, "&backepsilon;": `\u03F6`, "&backprime;": `\u2035`, "&backsim;": `\u223D`, "&backsimeq;": `\u22CD`, "&barvee;": `\u22BD`, "&barwed;": `\u2305`, "&barwedge;": `\u2305`, "&bbrk;": `\u23B5`, "&bbrktbrk;": `\u23B6`, "&bcong;": `\u224C`, "&bcy;": `\u0431`, "&bdquo;": `\u201E`, "&becaus;": `\u2235`, "&because;": `\u2235`, "&bemptyv;": `\u29B0`, "&bepsi;": `\u03F6`, "&bernou;": `\u212C`, "&beta;": `\u03B2`, "&beth;": `\u2136`, "&between;": `\u226C`, "&bfr;": `\u{1D51F}`, "&bigcap;": `\u22C2`, "&bigcirc;": `\u25EF`, "&bigcup;": `\u22C3`, "&bigodot;": `\u2A00`, "&bigoplus;": `\u2A01`, "&bigotimes;": `\u2A02`, "&bigsqcup;": `\u2A06`, "&bigstar;": `\u2605`, "&bigtriangledown;": `\u25BD`, "&bigtriangleup;": `\u25B3`, "&biguplus;": `\u2A04`, "&bigvee;": `\u22C1`, "&bigwedge;": `\u22C0`, "&bkarow;": `\u290D`, "&blacklozenge;": `\u29EB`, "&blacksquare;": `\u25AA`, "&blacktriangle;": `\u25B4`, "&blacktriangledown;": `\u25BE`, "&blacktriangleleft;": `\u25C2`, "&blacktriangleright;": `\u25B8`, "&blank;": `\u2423`, "&blk12;": `\u2592`, "&blk14;": `\u2591`, "&blk34;": `\u2593`, "&block;": `\u2588`, "&bne;": `=\u20E5`, "&bnequiv;": `\u2261\u20E5`, "&bnot;": `\u2310`, "&bopf;": `\u{1D553}`, "&bot;": `\u22A5`, "&bottom;": `\u22A5`, "&bowtie;": `\u22C8`, "&boxDL;": `\u2557`, "&boxDR;": `\u2554`, "&boxDl;": `\u2556`, "&boxDr;": `\u2553`, "&boxH;": `\u2550`, "&boxHD;": `\u2566`, "&boxHU;": `\u2569`, "&boxHd;": `\u2564`, "&boxHu;": `\u2567`, "&boxUL;": `\u255D`, "&boxUR;": `\u255A`, "&boxUl;": `\u255C`, "&boxUr;": `\u2559`, "&boxV;": `\u2551`, "&boxVH;": `\u256C`, "&boxVL;": `\u2563`, "&boxVR;": `\u2560`, "&boxVh;": `\u256B`, "&boxVl;": `\u2562`, "&boxVr;": `\u255F`, "&boxbox;": `\u29C9`, "&boxdL;": `\u2555`, "&boxdR;": `\u2552`, "&boxdl;": `\u2510`, "&boxdr;": `\u250C`, "&boxh;": `\u2500`, "&boxhD;": `\u2565`, "&boxhU;": `\u2568`, "&boxhd;": `\u252C`, "&boxhu;": `\u2534`, "&boxminus;": `\u229F`, "&boxplus;": `\u229E`, "&boxtimes;": `\u22A0`, "&boxuL;": `\u255B`, "&boxuR;": `\u2558`, "&boxul;": `\u2518`, "&boxur;": `\u2514`, "&boxv;": `\u2502`, "&boxvH;": `\u256A`, "&boxvL;": `\u2561`, "&boxvR;": `\u255E`, "&boxvh;": `\u253C`, "&boxvl;": `\u2524`, "&boxvr;": `\u251C`, "&bprime;": `\u2035`, "&breve;": `\u02D8`, "&brvbar": `\xA6`, "&brvbar;": `\xA6`, "&bscr;": `\u{1D4B7}`, "&bsemi;": `\u204F`, "&bsim;": `\u223D`, "&bsime;": `\u22CD`, "&bsol;": `\\`, "&bsolb;": `\u29C5`, "&bsolhsub;": `\u27C8`, "&bull;": `\u2022`, "&bullet;": `\u2022`, "&bump;": `\u224E`, "&bumpE;": `\u2AAE`, "&bumpe;": `\u224F`, "&bumpeq;": `\u224F`, "&cacute;": `\u0107`, "&cap;": `\u2229`, "&capand;": `\u2A44`, "&capbrcup;": `\u2A49`, "&capcap;": `\u2A4B`, "&capcup;": `\u2A47`, "&capdot;": `\u2A40`, "&caps;": `\u2229\uFE00`, "&caret;": `\u2041`, "&caron;": `\u02C7`, "&ccaps;": `\u2A4D`, "&ccaron;": `\u010D`, "&ccedil": `\xE7`, "&ccedil;": `\xE7`, "&ccirc;": `\u0109`, "&ccups;": `\u2A4C`, "&ccupssm;": `\u2A50`, "&cdot;": `\u010B`, "&cedil": `\xB8`, "&cedil;": `\xB8`, "&cemptyv;": `\u29B2`, "&cent": `\xA2`, "&cent;": `\xA2`, "&centerdot;": `\xB7`, "&cfr;": `\u{1D520}`, "&chcy;": `\u0447`, "&check;": `\u2713`, "&checkmark;": `\u2713`, "&chi;": `\u03C7`, "&cir;": `\u25CB`, "&cirE;": `\u29C3`, "&circ;": `\u02C6`, "&circeq;": `\u2257`, "&circlearrowleft;": `\u21BA`, "&circlearrowright;": `\u21BB`, "&circledR;": `\xAE`, "&circledS;": `\u24C8`, "&circledast;": `\u229B`, "&circledcirc;": `\u229A`, "&circleddash;": `\u229D`, "&cire;": `\u2257`, "&cirfnint;": `\u2A10`, "&cirmid;": `\u2AEF`, "&cirscir;": `\u29C2`, "&clubs;": `\u2663`, "&clubsuit;": `\u2663`, "&colon;": `:`, "&colone;": `\u2254`, "&coloneq;": `\u2254`, "&comma;": `,`, "&commat;": `@`, "&comp;": `\u2201`, "&compfn;": `\u2218`, "&complement;": `\u2201`, "&complexes;": `\u2102`, "&cong;": `\u2245`, "&congdot;": `\u2A6D`, "&conint;": `\u222E`, "&copf;": `\u{1D554}`, "&coprod;": `\u2210`, "&copy": `\xA9`, "&copy;": `\xA9`, "&copysr;": `\u2117`, "&crarr;": `\u21B5`, "&cross;": `\u2717`, "&cscr;": `\u{1D4B8}`, "&csub;": `\u2ACF`, "&csube;": `\u2AD1`, "&csup;": `\u2AD0`, "&csupe;": `\u2AD2`, "&ctdot;": `\u22EF`, "&cudarrl;": `\u2938`, "&cudarrr;": `\u2935`, "&cuepr;": `\u22DE`, "&cuesc;": `\u22DF`, "&cularr;": `\u21B6`, "&cularrp;": `\u293D`, "&cup;": `\u222A`, "&cupbrcap;": `\u2A48`, "&cupcap;": `\u2A46`, "&cupcup;": `\u2A4A`, "&cupdot;": `\u228D`, "&cupor;": `\u2A45`, "&cups;": `\u222A\uFE00`, "&curarr;": `\u21B7`, "&curarrm;": `\u293C`, "&curlyeqprec;": `\u22DE`, "&curlyeqsucc;": `\u22DF`, "&curlyvee;": `\u22CE`, "&curlywedge;": `\u22CF`, "&curren": `\xA4`, "&curren;": `\xA4`, "&curvearrowleft;": `\u21B6`, "&curvearrowright;": `\u21B7`, "&cuvee;": `\u22CE`, "&cuwed;": `\u22CF`, "&cwconint;": `\u2232`, "&cwint;": `\u2231`, "&cylcty;": `\u232D`, "&dArr;": `\u21D3`, "&dHar;": `\u2965`, "&dagger;": `\u2020`, "&daleth;": `\u2138`, "&darr;": `\u2193`, "&dash;": `\u2010`, "&dashv;": `\u22A3`, "&dbkarow;": `\u290F`, "&dblac;": `\u02DD`, "&dcaron;": `\u010F`, "&dcy;": `\u0434`, "&dd;": `\u2146`, "&ddagger;": `\u2021`, "&ddarr;": `\u21CA`, "&ddotseq;": `\u2A77`, "&deg": `\xB0`, "&deg;": `\xB0`, "&delta;": `\u03B4`, "&demptyv;": `\u29B1`, "&dfisht;": `\u297F`, "&dfr;": `\u{1D521}`, "&dharl;": `\u21C3`, "&dharr;": `\u21C2`, "&diam;": `\u22C4`, "&diamond;": `\u22C4`, "&diamondsuit;": `\u2666`, "&diams;": `\u2666`, "&die;": `\xA8`, "&digamma;": `\u03DD`, "&disin;": `\u22F2`, "&div;": `\xF7`, "&divide": `\xF7`, "&divide;": `\xF7`, "&divideontimes;": `\u22C7`, "&divonx;": `\u22C7`, "&djcy;": `\u0452`, "&dlcorn;": `\u231E`, "&dlcrop;": `\u230D`, "&dollar;": `$`, "&dopf;": `\u{1D555}`, "&dot;": `\u02D9`, "&doteq;": `\u2250`, "&doteqdot;": `\u2251`, "&dotminus;": `\u2238`, "&dotplus;": `\u2214`, "&dotsquare;": `\u22A1`, "&doublebarwedge;": `\u2306`, "&downarrow;": `\u2193`, "&downdownarrows;": `\u21CA`, "&downharpoonleft;": `\u21C3`, "&downharpoonright;": `\u21C2`, "&drbkarow;": `\u2910`, "&drcorn;": `\u231F`, "&drcrop;": `\u230C`, "&dscr;": `\u{1D4B9}`, "&dscy;": `\u0455`, "&dsol;": `\u29F6`, "&dstrok;": `\u0111`, "&dtdot;": `\u22F1`, "&dtri;": `\u25BF`, "&dtrif;": `\u25BE`, "&duarr;": `\u21F5`, "&duhar;": `\u296F`, "&dwangle;": `\u29A6`, "&dzcy;": `\u045F`, "&dzigrarr;": `\u27FF`, "&eDDot;": `\u2A77`, "&eDot;": `\u2251`, "&eacute": `\xE9`, "&eacute;": `\xE9`, "&easter;": `\u2A6E`, "&ecaron;": `\u011B`, "&ecir;": `\u2256`, "&ecirc": `\xEA`, "&ecirc;": `\xEA`, "&ecolon;": `\u2255`, "&ecy;": `\u044D`, "&edot;": `\u0117`, "&ee;": `\u2147`, "&efDot;": `\u2252`, "&efr;": `\u{1D522}`, "&eg;": `\u2A9A`, "&egrave": `\xE8`, "&egrave;": `\xE8`, "&egs;": `\u2A96`, "&egsdot;": `\u2A98`, "&el;": `\u2A99`, "&elinters;": `\u23E7`, "&ell;": `\u2113`, "&els;": `\u2A95`, "&elsdot;": `\u2A97`, "&emacr;": `\u0113`, "&empty;": `\u2205`, "&emptyset;": `\u2205`, "&emptyv;": `\u2205`, "&emsp13;": `\u2004`, "&emsp14;": `\u2005`, "&emsp;": `\u2003`, "&eng;": `\u014B`, "&ensp;": `\u2002`, "&eogon;": `\u0119`, "&eopf;": `\u{1D556}`, "&epar;": `\u22D5`, "&eparsl;": `\u29E3`, "&eplus;": `\u2A71`, "&epsi;": `\u03B5`, "&epsilon;": `\u03B5`, "&epsiv;": `\u03F5`, "&eqcirc;": `\u2256`, "&eqcolon;": `\u2255`, "&eqsim;": `\u2242`, "&eqslantgtr;": `\u2A96`, "&eqslantless;": `\u2A95`, "&equals;": `=`, "&equest;": `\u225F`, "&equiv;": `\u2261`, "&equivDD;": `\u2A78`, "&eqvparsl;": `\u29E5`, "&erDot;": `\u2253`, "&erarr;": `\u2971`, "&escr;": `\u212F`, "&esdot;": `\u2250`, "&esim;": `\u2242`, "&eta;": `\u03B7`, "&eth": `\xF0`, "&eth;": `\xF0`, "&euml": `\xEB`, "&euml;": `\xEB`, "&euro;": `\u20AC`, "&excl;": `!`, "&exist;": `\u2203`, "&expectation;": `\u2130`, "&exponentiale;": `\u2147`, "&fallingdotseq;": `\u2252`, "&fcy;": `\u0444`, "&female;": `\u2640`, "&ffilig;": `\uFB03`, "&fflig;": `\uFB00`, "&ffllig;": `\uFB04`, "&ffr;": `\u{1D523}`, "&filig;": `\uFB01`, "&fjlig;": `fj`, "&flat;": `\u266D`, "&fllig;": `\uFB02`, "&fltns;": `\u25B1`, "&fnof;": `\u0192`, "&fopf;": `\u{1D557}`, "&forall;": `\u2200`, "&fork;": `\u22D4`, "&forkv;": `\u2AD9`, "&fpartint;": `\u2A0D`, "&frac12": `\xBD`, "&frac12;": `\xBD`, "&frac13;": `\u2153`, "&frac14": `\xBC`, "&frac14;": `\xBC`, "&frac15;": `\u2155`, "&frac16;": `\u2159`, "&frac18;": `\u215B`, "&frac23;": `\u2154`, "&frac25;": `\u2156`, "&frac34": `\xBE`, "&frac34;": `\xBE`, "&frac35;": `\u2157`, "&frac38;": `\u215C`, "&frac45;": `\u2158`, "&frac56;": `\u215A`, "&frac58;": `\u215D`, "&frac78;": `\u215E`, "&frasl;": `\u2044`, "&frown;": `\u2322`, "&fscr;": `\u{1D4BB}`, "&gE;": `\u2267`, "&gEl;": `\u2A8C`, "&gacute;": `\u01F5`, "&gamma;": `\u03B3`, "&gammad;": `\u03DD`, "&gap;": `\u2A86`, "&gbreve;": `\u011F`, "&gcirc;": `\u011D`, "&gcy;": `\u0433`, "&gdot;": `\u0121`, "&ge;": `\u2265`, "&gel;": `\u22DB`, "&geq;": `\u2265`, "&geqq;": `\u2267`, "&geqslant;": `\u2A7E`, "&ges;": `\u2A7E`, "&gescc;": `\u2AA9`, "&gesdot;": `\u2A80`, "&gesdoto;": `\u2A82`, "&gesdotol;": `\u2A84`, "&gesl;": `\u22DB\uFE00`, "&gesles;": `\u2A94`, "&gfr;": `\u{1D524}`, "&gg;": `\u226B`, "&ggg;": `\u22D9`, "&gimel;": `\u2137`, "&gjcy;": `\u0453`, "&gl;": `\u2277`, "&glE;": `\u2A92`, "&gla;": `\u2AA5`, "&glj;": `\u2AA4`, "&gnE;": `\u2269`, "&gnap;": `\u2A8A`, "&gnapprox;": `\u2A8A`, "&gne;": `\u2A88`, "&gneq;": `\u2A88`, "&gneqq;": `\u2269`, "&gnsim;": `\u22E7`, "&gopf;": `\u{1D558}`, "&grave;": "`", "&gscr;": `\u210A`, "&gsim;": `\u2273`, "&gsime;": `\u2A8E`, "&gsiml;": `\u2A90`, "&gt": `>`, "&gt;": `>`, "&gtcc;": `\u2AA7`, "&gtcir;": `\u2A7A`, "&gtdot;": `\u22D7`, "&gtlPar;": `\u2995`, "&gtquest;": `\u2A7C`, "&gtrapprox;": `\u2A86`, "&gtrarr;": `\u2978`, "&gtrdot;": `\u22D7`, "&gtreqless;": `\u22DB`, "&gtreqqless;": `\u2A8C`, "&gtrless;": `\u2277`, "&gtrsim;": `\u2273`, "&gvertneqq;": `\u2269\uFE00`, "&gvnE;": `\u2269\uFE00`, "&hArr;": `\u21D4`, "&hairsp;": `\u200A`, "&half;": `\xBD`, "&hamilt;": `\u210B`, "&hardcy;": `\u044A`, "&harr;": `\u2194`, "&harrcir;": `\u2948`, "&harrw;": `\u21AD`, "&hbar;": `\u210F`, "&hcirc;": `\u0125`, "&hearts;": `\u2665`, "&heartsuit;": `\u2665`, "&hellip;": `\u2026`, "&hercon;": `\u22B9`, "&hfr;": `\u{1D525}`, "&hksearow;": `\u2925`, "&hkswarow;": `\u2926`, "&hoarr;": `\u21FF`, "&homtht;": `\u223B`, "&hookleftarrow;": `\u21A9`, "&hookrightarrow;": `\u21AA`, "&hopf;": `\u{1D559}`, "&horbar;": `\u2015`, "&hscr;": `\u{1D4BD}`, "&hslash;": `\u210F`, "&hstrok;": `\u0127`, "&hybull;": `\u2043`, "&hyphen;": `\u2010`, "&iacute": `\xED`, "&iacute;": `\xED`, "&ic;": `\u2063`, "&icirc": `\xEE`, "&icirc;": `\xEE`, "&icy;": `\u0438`, "&iecy;": `\u0435`, "&iexcl": `\xA1`, "&iexcl;": `\xA1`, "&iff;": `\u21D4`, "&ifr;": `\u{1D526}`, "&igrave": `\xEC`, "&igrave;": `\xEC`, "&ii;": `\u2148`, "&iiiint;": `\u2A0C`, "&iiint;": `\u222D`, "&iinfin;": `\u29DC`, "&iiota;": `\u2129`, "&ijlig;": `\u0133`, "&imacr;": `\u012B`, "&image;": `\u2111`, "&imagline;": `\u2110`, "&imagpart;": `\u2111`, "&imath;": `\u0131`, "&imof;": `\u22B7`, "&imped;": `\u01B5`, "&in;": `\u2208`, "&incare;": `\u2105`, "&infin;": `\u221E`, "&infintie;": `\u29DD`, "&inodot;": `\u0131`, "&int;": `\u222B`, "&intcal;": `\u22BA`, "&integers;": `\u2124`, "&intercal;": `\u22BA`, "&intlarhk;": `\u2A17`, "&intprod;": `\u2A3C`, "&iocy;": `\u0451`, "&iogon;": `\u012F`, "&iopf;": `\u{1D55A}`, "&iota;": `\u03B9`, "&iprod;": `\u2A3C`, "&iquest": `\xBF`, "&iquest;": `\xBF`, "&iscr;": `\u{1D4BE}`, "&isin;": `\u2208`, "&isinE;": `\u22F9`, "&isindot;": `\u22F5`, "&isins;": `\u22F4`, "&isinsv;": `\u22F3`, "&isinv;": `\u2208`, "&it;": `\u2062`, "&itilde;": `\u0129`, "&iukcy;": `\u0456`, "&iuml": `\xEF`, "&iuml;": `\xEF`, "&jcirc;": `\u0135`, "&jcy;": `\u0439`, "&jfr;": `\u{1D527}`, "&jmath;": `\u0237`, "&jopf;": `\u{1D55B}`, "&jscr;": `\u{1D4BF}`, "&jsercy;": `\u0458`, "&jukcy;": `\u0454`, "&kappa;": `\u03BA`, "&kappav;": `\u03F0`, "&kcedil;": `\u0137`, "&kcy;": `\u043A`, "&kfr;": `\u{1D528}`, "&kgreen;": `\u0138`, "&khcy;": `\u0445`, "&kjcy;": `\u045C`, "&kopf;": `\u{1D55C}`, "&kscr;": `\u{1D4C0}`, "&lAarr;": `\u21DA`, "&lArr;": `\u21D0`, "&lAtail;": `\u291B`, "&lBarr;": `\u290E`, "&lE;": `\u2266`, "&lEg;": `\u2A8B`, "&lHar;": `\u2962`, "&lacute;": `\u013A`, "&laemptyv;": `\u29B4`, "&lagran;": `\u2112`, "&lambda;": `\u03BB`, "&lang;": `\u27E8`, "&langd;": `\u2991`, "&langle;": `\u27E8`, "&lap;": `\u2A85`, "&laquo": `\xAB`, "&laquo;": `\xAB`, "&larr;": `\u2190`, "&larrb;": `\u21E4`, "&larrbfs;": `\u291F`, "&larrfs;": `\u291D`, "&larrhk;": `\u21A9`, "&larrlp;": `\u21AB`, "&larrpl;": `\u2939`, "&larrsim;": `\u2973`, "&larrtl;": `\u21A2`, "&lat;": `\u2AAB`, "&latail;": `\u2919`, "&late;": `\u2AAD`, "&lates;": `\u2AAD\uFE00`, "&lbarr;": `\u290C`, "&lbbrk;": `\u2772`, "&lbrace;": `{`, "&lbrack;": `[`, "&lbrke;": `\u298B`, "&lbrksld;": `\u298F`, "&lbrkslu;": `\u298D`, "&lcaron;": `\u013E`, "&lcedil;": `\u013C`, "&lceil;": `\u2308`, "&lcub;": `{`, "&lcy;": `\u043B`, "&ldca;": `\u2936`, "&ldquo;": `\u201C`, "&ldquor;": `\u201E`, "&ldrdhar;": `\u2967`, "&ldrushar;": `\u294B`, "&ldsh;": `\u21B2`, "&le;": `\u2264`, "&leftarrow;": `\u2190`, "&leftarrowtail;": `\u21A2`, "&leftharpoondown;": `\u21BD`, "&leftharpoonup;": `\u21BC`, "&leftleftarrows;": `\u21C7`, "&leftrightarrow;": `\u2194`, "&leftrightarrows;": `\u21C6`, "&leftrightharpoons;": `\u21CB`, "&leftrightsquigarrow;": `\u21AD`, "&leftthreetimes;": `\u22CB`, "&leg;": `\u22DA`, "&leq;": `\u2264`, "&leqq;": `\u2266`, "&leqslant;": `\u2A7D`, "&les;": `\u2A7D`, "&lescc;": `\u2AA8`, "&lesdot;": `\u2A7F`, "&lesdoto;": `\u2A81`, "&lesdotor;": `\u2A83`, "&lesg;": `\u22DA\uFE00`, "&lesges;": `\u2A93`, "&lessapprox;": `\u2A85`, "&lessdot;": `\u22D6`, "&lesseqgtr;": `\u22DA`, "&lesseqqgtr;": `\u2A8B`, "&lessgtr;": `\u2276`, "&lesssim;": `\u2272`, "&lfisht;": `\u297C`, "&lfloor;": `\u230A`, "&lfr;": `\u{1D529}`, "&lg;": `\u2276`, "&lgE;": `\u2A91`, "&lhard;": `\u21BD`, "&lharu;": `\u21BC`, "&lharul;": `\u296A`, "&lhblk;": `\u2584`, "&ljcy;": `\u0459`, "&ll;": `\u226A`, "&llarr;": `\u21C7`, "&llcorner;": `\u231E`, "&llhard;": `\u296B`, "&lltri;": `\u25FA`, "&lmidot;": `\u0140`, "&lmoust;": `\u23B0`, "&lmoustache;": `\u23B0`, "&lnE;": `\u2268`, "&lnap;": `\u2A89`, "&lnapprox;": `\u2A89`, "&lne;": `\u2A87`, "&lneq;": `\u2A87`, "&lneqq;": `\u2268`, "&lnsim;": `\u22E6`, "&loang;": `\u27EC`, "&loarr;": `\u21FD`, "&lobrk;": `\u27E6`, "&longleftarrow;": `\u27F5`, "&longleftrightarrow;": `\u27F7`, "&longmapsto;": `\u27FC`, "&longrightarrow;": `\u27F6`, "&looparrowleft;": `\u21AB`, "&looparrowright;": `\u21AC`, "&lopar;": `\u2985`, "&lopf;": `\u{1D55D}`, "&loplus;": `\u2A2D`, "&lotimes;": `\u2A34`, "&lowast;": `\u2217`, "&lowbar;": `_`, "&loz;": `\u25CA`, "&lozenge;": `\u25CA`, "&lozf;": `\u29EB`, "&lpar;": `(`, "&lparlt;": `\u2993`, "&lrarr;": `\u21C6`, "&lrcorner;": `\u231F`, "&lrhar;": `\u21CB`, "&lrhard;": `\u296D`, "&lrm;": `\u200E`, "&lrtri;": `\u22BF`, "&lsaquo;": `\u2039`, "&lscr;": `\u{1D4C1}`, "&lsh;": `\u21B0`, "&lsim;": `\u2272`, "&lsime;": `\u2A8D`, "&lsimg;": `\u2A8F`, "&lsqb;": `[`, "&lsquo;": `\u2018`, "&lsquor;": `\u201A`, "&lstrok;": `\u0142`, "&lt": `<`, "&lt;": `<`, "&ltcc;": `\u2AA6`, "&ltcir;": `\u2A79`, "&ltdot;": `\u22D6`, "&lthree;": `\u22CB`, "&ltimes;": `\u22C9`, "&ltlarr;": `\u2976`, "&ltquest;": `\u2A7B`, "&ltrPar;": `\u2996`, "&ltri;": `\u25C3`, "&ltrie;": `\u22B4`, "&ltrif;": `\u25C2`, "&lurdshar;": `\u294A`, "&luruhar;": `\u2966`, "&lvertneqq;": `\u2268\uFE00`, "&lvnE;": `\u2268\uFE00`, "&mDDot;": `\u223A`, "&macr": `\xAF`, "&macr;": `\xAF`, "&male;": `\u2642`, "&malt;": `\u2720`, "&maltese;": `\u2720`, "&map;": `\u21A6`, "&mapsto;": `\u21A6`, "&mapstodown;": `\u21A7`, "&mapstoleft;": `\u21A4`, "&mapstoup;": `\u21A5`, "&marker;": `\u25AE`, "&mcomma;": `\u2A29`, "&mcy;": `\u043C`, "&mdash;": `\u2014`, "&measuredangle;": `\u2221`, "&mfr;": `\u{1D52A}`, "&mho;": `\u2127`, "&micro": `\xB5`, "&micro;": `\xB5`, "&mid;": `\u2223`, "&midast;": `*`, "&midcir;": `\u2AF0`, "&middot": `\xB7`, "&middot;": `\xB7`, "&minus;": `\u2212`, "&minusb;": `\u229F`, "&minusd;": `\u2238`, "&minusdu;": `\u2A2A`, "&mlcp;": `\u2ADB`, "&mldr;": `\u2026`, "&mnplus;": `\u2213`, "&models;": `\u22A7`, "&mopf;": `\u{1D55E}`, "&mp;": `\u2213`, "&mscr;": `\u{1D4C2}`, "&mstpos;": `\u223E`, "&mu;": `\u03BC`, "&multimap;": `\u22B8`, "&mumap;": `\u22B8`, "&nGg;": `\u22D9\u0338`, "&nGt;": `\u226B\u20D2`, "&nGtv;": `\u226B\u0338`, "&nLeftarrow;": `\u21CD`, "&nLeftrightarrow;": `\u21CE`, "&nLl;": `\u22D8\u0338`, "&nLt;": `\u226A\u20D2`, "&nLtv;": `\u226A\u0338`, "&nRightarrow;": `\u21CF`, "&nVDash;": `\u22AF`, "&nVdash;": `\u22AE`, "&nabla;": `\u2207`, "&nacute;": `\u0144`, "&nang;": `\u2220\u20D2`, "&nap;": `\u2249`, "&napE;": `\u2A70\u0338`, "&napid;": `\u224B\u0338`, "&napos;": `\u0149`, "&napprox;": `\u2249`, "&natur;": `\u266E`, "&natural;": `\u266E`, "&naturals;": `\u2115`, "&nbsp": `\xA0`, "&nbsp;": `\xA0`, "&nbump;": `\u224E\u0338`, "&nbumpe;": `\u224F\u0338`, "&ncap;": `\u2A43`, "&ncaron;": `\u0148`, "&ncedil;": `\u0146`, "&ncong;": `\u2247`, "&ncongdot;": `\u2A6D\u0338`, "&ncup;": `\u2A42`, "&ncy;": `\u043D`, "&ndash;": `\u2013`, "&ne;": `\u2260`, "&neArr;": `\u21D7`, "&nearhk;": `\u2924`, "&nearr;": `\u2197`, "&nearrow;": `\u2197`, "&nedot;": `\u2250\u0338`, "&nequiv;": `\u2262`, "&nesear;": `\u2928`, "&nesim;": `\u2242\u0338`, "&nexist;": `\u2204`, "&nexists;": `\u2204`, "&nfr;": `\u{1D52B}`, "&ngE;": `\u2267\u0338`, "&nge;": `\u2271`, "&ngeq;": `\u2271`, "&ngeqq;": `\u2267\u0338`, "&ngeqslant;": `\u2A7E\u0338`, "&nges;": `\u2A7E\u0338`, "&ngsim;": `\u2275`, "&ngt;": `\u226F`, "&ngtr;": `\u226F`, "&nhArr;": `\u21CE`, "&nharr;": `\u21AE`, "&nhpar;": `\u2AF2`, "&ni;": `\u220B`, "&nis;": `\u22FC`, "&nisd;": `\u22FA`, "&niv;": `\u220B`, "&njcy;": `\u045A`, "&nlArr;": `\u21CD`, "&nlE;": `\u2266\u0338`, "&nlarr;": `\u219A`, "&nldr;": `\u2025`, "&nle;": `\u2270`, "&nleftarrow;": `\u219A`, "&nleftrightarrow;": `\u21AE`, "&nleq;": `\u2270`, "&nleqq;": `\u2266\u0338`, "&nleqslant;": `\u2A7D\u0338`, "&nles;": `\u2A7D\u0338`, "&nless;": `\u226E`, "&nlsim;": `\u2274`, "&nlt;": `\u226E`, "&nltri;": `\u22EA`, "&nltrie;": `\u22EC`, "&nmid;": `\u2224`, "&nopf;": `\u{1D55F}`, "&not": `\xAC`, "&not;": `\xAC`, "&notin;": `\u2209`, "&notinE;": `\u22F9\u0338`, "&notindot;": `\u22F5\u0338`, "&notinva;": `\u2209`, "&notinvb;": `\u22F7`, "&notinvc;": `\u22F6`, "&notni;": `\u220C`, "&notniva;": `\u220C`, "&notnivb;": `\u22FE`, "&notnivc;": `\u22FD`, "&npar;": `\u2226`, "&nparallel;": `\u2226`, "&nparsl;": `\u2AFD\u20E5`, "&npart;": `\u2202\u0338`, "&npolint;": `\u2A14`, "&npr;": `\u2280`, "&nprcue;": `\u22E0`, "&npre;": `\u2AAF\u0338`, "&nprec;": `\u2280`, "&npreceq;": `\u2AAF\u0338`, "&nrArr;": `\u21CF`, "&nrarr;": `\u219B`, "&nrarrc;": `\u2933\u0338`, "&nrarrw;": `\u219D\u0338`, "&nrightarrow;": `\u219B`, "&nrtri;": `\u22EB`, "&nrtrie;": `\u22ED`, "&nsc;": `\u2281`, "&nsccue;": `\u22E1`, "&nsce;": `\u2AB0\u0338`, "&nscr;": `\u{1D4C3}`, "&nshortmid;": `\u2224`, "&nshortparallel;": `\u2226`, "&nsim;": `\u2241`, "&nsime;": `\u2244`, "&nsimeq;": `\u2244`, "&nsmid;": `\u2224`, "&nspar;": `\u2226`, "&nsqsube;": `\u22E2`, "&nsqsupe;": `\u22E3`, "&nsub;": `\u2284`, "&nsubE;": `\u2AC5\u0338`, "&nsube;": `\u2288`, "&nsubset;": `\u2282\u20D2`, "&nsubseteq;": `\u2288`, "&nsubseteqq;": `\u2AC5\u0338`, "&nsucc;": `\u2281`, "&nsucceq;": `\u2AB0\u0338`, "&nsup;": `\u2285`, "&nsupE;": `\u2AC6\u0338`, "&nsupe;": `\u2289`, "&nsupset;": `\u2283\u20D2`, "&nsupseteq;": `\u2289`, "&nsupseteqq;": `\u2AC6\u0338`, "&ntgl;": `\u2279`, "&ntilde": `\xF1`, "&ntilde;": `\xF1`, "&ntlg;": `\u2278`, "&ntriangleleft;": `\u22EA`, "&ntrianglelefteq;": `\u22EC`, "&ntriangleright;": `\u22EB`, "&ntrianglerighteq;": `\u22ED`, "&nu;": `\u03BD`, "&num;": `#`, "&numero;": `\u2116`, "&numsp;": `\u2007`, "&nvDash;": `\u22AD`, "&nvHarr;": `\u2904`, "&nvap;": `\u224D\u20D2`, "&nvdash;": `\u22AC`, "&nvge;": `\u2265\u20D2`, "&nvgt;": `>\u20D2`, "&nvinfin;": `\u29DE`, "&nvlArr;": `\u2902`, "&nvle;": `\u2264\u20D2`, "&nvlt;": `<\u20D2`, "&nvltrie;": `\u22B4\u20D2`, "&nvrArr;": `\u2903`, "&nvrtrie;": `\u22B5\u20D2`, "&nvsim;": `\u223C\u20D2`, "&nwArr;": `\u21D6`, "&nwarhk;": `\u2923`, "&nwarr;": `\u2196`, "&nwarrow;": `\u2196`, "&nwnear;": `\u2927`, "&oS;": `\u24C8`, "&oacute": `\xF3`, "&oacute;": `\xF3`, "&oast;": `\u229B`, "&ocir;": `\u229A`, "&ocirc": `\xF4`, "&ocirc;": `\xF4`, "&ocy;": `\u043E`, "&odash;": `\u229D`, "&odblac;": `\u0151`, "&odiv;": `\u2A38`, "&odot;": `\u2299`, "&odsold;": `\u29BC`, "&oelig;": `\u0153`, "&ofcir;": `\u29BF`, "&ofr;": `\u{1D52C}`, "&ogon;": `\u02DB`, "&ograve": `\xF2`, "&ograve;": `\xF2`, "&ogt;": `\u29C1`, "&ohbar;": `\u29B5`, "&ohm;": `\u03A9`, "&oint;": `\u222E`, "&olarr;": `\u21BA`, "&olcir;": `\u29BE`, "&olcross;": `\u29BB`, "&oline;": `\u203E`, "&olt;": `\u29C0`, "&omacr;": `\u014D`, "&omega;": `\u03C9`, "&omicron;": `\u03BF`, "&omid;": `\u29B6`, "&ominus;": `\u2296`, "&oopf;": `\u{1D560}`, "&opar;": `\u29B7`, "&operp;": `\u29B9`, "&oplus;": `\u2295`, "&or;": `\u2228`, "&orarr;": `\u21BB`, "&ord;": `\u2A5D`, "&order;": `\u2134`, "&orderof;": `\u2134`, "&ordf": `\xAA`, "&ordf;": `\xAA`, "&ordm": `\xBA`, "&ordm;": `\xBA`, "&origof;": `\u22B6`, "&oror;": `\u2A56`, "&orslope;": `\u2A57`, "&orv;": `\u2A5B`, "&oscr;": `\u2134`, "&oslash": `\xF8`, "&oslash;": `\xF8`, "&osol;": `\u2298`, "&otilde": `\xF5`, "&otilde;": `\xF5`, "&otimes;": `\u2297`, "&otimesas;": `\u2A36`, "&ouml": `\xF6`, "&ouml;": `\xF6`, "&ovbar;": `\u233D`, "&par;": `\u2225`, "&para": `\xB6`, "&para;": `\xB6`, "&parallel;": `\u2225`, "&parsim;": `\u2AF3`, "&parsl;": `\u2AFD`, "&part;": `\u2202`, "&pcy;": `\u043F`, "&percnt;": `%`, "&period;": `.`, "&permil;": `\u2030`, "&perp;": `\u22A5`, "&pertenk;": `\u2031`, "&pfr;": `\u{1D52D}`, "&phi;": `\u03C6`, "&phiv;": `\u03D5`, "&phmmat;": `\u2133`, "&phone;": `\u260E`, "&pi;": `\u03C0`, "&pitchfork;": `\u22D4`, "&piv;": `\u03D6`, "&planck;": `\u210F`, "&planckh;": `\u210E`, "&plankv;": `\u210F`, "&plus;": `+`, "&plusacir;": `\u2A23`, "&plusb;": `\u229E`, "&pluscir;": `\u2A22`, "&plusdo;": `\u2214`, "&plusdu;": `\u2A25`, "&pluse;": `\u2A72`, "&plusmn": `\xB1`, "&plusmn;": `\xB1`, "&plussim;": `\u2A26`, "&plustwo;": `\u2A27`, "&pm;": `\xB1`, "&pointint;": `\u2A15`, "&popf;": `\u{1D561}`, "&pound": `\xA3`, "&pound;": `\xA3`, "&pr;": `\u227A`, "&prE;": `\u2AB3`, "&prap;": `\u2AB7`, "&prcue;": `\u227C`, "&pre;": `\u2AAF`, "&prec;": `\u227A`, "&precapprox;": `\u2AB7`, "&preccurlyeq;": `\u227C`, "&preceq;": `\u2AAF`, "&precnapprox;": `\u2AB9`, "&precneqq;": `\u2AB5`, "&precnsim;": `\u22E8`, "&precsim;": `\u227E`, "&prime;": `\u2032`, "&primes;": `\u2119`, "&prnE;": `\u2AB5`, "&prnap;": `\u2AB9`, "&prnsim;": `\u22E8`, "&prod;": `\u220F`, "&profalar;": `\u232E`, "&profline;": `\u2312`, "&profsurf;": `\u2313`, "&prop;": `\u221D`, "&propto;": `\u221D`, "&prsim;": `\u227E`, "&prurel;": `\u22B0`, "&pscr;": `\u{1D4C5}`, "&psi;": `\u03C8`, "&puncsp;": `\u2008`, "&qfr;": `\u{1D52E}`, "&qint;": `\u2A0C`, "&qopf;": `\u{1D562}`, "&qprime;": `\u2057`, "&qscr;": `\u{1D4C6}`, "&quaternions;": `\u210D`, "&quatint;": `\u2A16`, "&quest;": `?`, "&questeq;": `\u225F`, "&quot": `"`, "&quot;": `"`, "&rAarr;": `\u21DB`, "&rArr;": `\u21D2`, "&rAtail;": `\u291C`, "&rBarr;": `\u290F`, "&rHar;": `\u2964`, "&race;": `\u223D\u0331`, "&racute;": `\u0155`, "&radic;": `\u221A`, "&raemptyv;": `\u29B3`, "&rang;": `\u27E9`, "&rangd;": `\u2992`, "&range;": `\u29A5`, "&rangle;": `\u27E9`, "&raquo": `\xBB`, "&raquo;": `\xBB`, "&rarr;": `\u2192`, "&rarrap;": `\u2975`, "&rarrb;": `\u21E5`, "&rarrbfs;": `\u2920`, "&rarrc;": `\u2933`, "&rarrfs;": `\u291E`, "&rarrhk;": `\u21AA`, "&rarrlp;": `\u21AC`, "&rarrpl;": `\u2945`, "&rarrsim;": `\u2974`, "&rarrtl;": `\u21A3`, "&rarrw;": `\u219D`, "&ratail;": `\u291A`, "&ratio;": `\u2236`, "&rationals;": `\u211A`, "&rbarr;": `\u290D`, "&rbbrk;": `\u2773`, "&rbrace;": `}`, "&rbrack;": `]`, "&rbrke;": `\u298C`, "&rbrksld;": `\u298E`, "&rbrkslu;": `\u2990`, "&rcaron;": `\u0159`, "&rcedil;": `\u0157`, "&rceil;": `\u2309`, "&rcub;": `}`, "&rcy;": `\u0440`, "&rdca;": `\u2937`, "&rdldhar;": `\u2969`, "&rdquo;": `\u201D`, "&rdquor;": `\u201D`, "&rdsh;": `\u21B3`, "&real;": `\u211C`, "&realine;": `\u211B`, "&realpart;": `\u211C`, "&reals;": `\u211D`, "&rect;": `\u25AD`, "&reg": `\xAE`, "&reg;": `\xAE`, "&rfisht;": `\u297D`, "&rfloor;": `\u230B`, "&rfr;": `\u{1D52F}`, "&rhard;": `\u21C1`, "&rharu;": `\u21C0`, "&rharul;": `\u296C`, "&rho;": `\u03C1`, "&rhov;": `\u03F1`, "&rightarrow;": `\u2192`, "&rightarrowtail;": `\u21A3`, "&rightharpoondown;": `\u21C1`, "&rightharpoonup;": `\u21C0`, "&rightleftarrows;": `\u21C4`, "&rightleftharpoons;": `\u21CC`, "&rightrightarrows;": `\u21C9`, "&rightsquigarrow;": `\u219D`, "&rightthreetimes;": `\u22CC`, "&ring;": `\u02DA`, "&risingdotseq;": `\u2253`, "&rlarr;": `\u21C4`, "&rlhar;": `\u21CC`, "&rlm;": `\u200F`, "&rmoust;": `\u23B1`, "&rmoustache;": `\u23B1`, "&rnmid;": `\u2AEE`, "&roang;": `\u27ED`, "&roarr;": `\u21FE`, "&robrk;": `\u27E7`, "&ropar;": `\u2986`, "&ropf;": `\u{1D563}`, "&roplus;": `\u2A2E`, "&rotimes;": `\u2A35`, "&rpar;": `)`, "&rpargt;": `\u2994`, "&rppolint;": `\u2A12`, "&rrarr;": `\u21C9`, "&rsaquo;": `\u203A`, "&rscr;": `\u{1D4C7}`, "&rsh;": `\u21B1`, "&rsqb;": `]`, "&rsquo;": `\u2019`, "&rsquor;": `\u2019`, "&rthree;": `\u22CC`, "&rtimes;": `\u22CA`, "&rtri;": `\u25B9`, "&rtrie;": `\u22B5`, "&rtrif;": `\u25B8`, "&rtriltri;": `\u29CE`, "&ruluhar;": `\u2968`, "&rx;": `\u211E`, "&sacute;": `\u015B`, "&sbquo;": `\u201A`, "&sc;": `\u227B`, "&scE;": `\u2AB4`, "&scap;": `\u2AB8`, "&scaron;": `\u0161`, "&sccue;": `\u227D`, "&sce;": `\u2AB0`, "&scedil;": `\u015F`, "&scirc;": `\u015D`, "&scnE;": `\u2AB6`, "&scnap;": `\u2ABA`, "&scnsim;": `\u22E9`, "&scpolint;": `\u2A13`, "&scsim;": `\u227F`, "&scy;": `\u0441`, "&sdot;": `\u22C5`, "&sdotb;": `\u22A1`, "&sdote;": `\u2A66`, "&seArr;": `\u21D8`, "&searhk;": `\u2925`, "&searr;": `\u2198`, "&searrow;": `\u2198`, "&sect": `\xA7`, "&sect;": `\xA7`, "&semi;": `;`, "&seswar;": `\u2929`, "&setminus;": `\u2216`, "&setmn;": `\u2216`, "&sext;": `\u2736`, "&sfr;": `\u{1D530}`, "&sfrown;": `\u2322`, "&sharp;": `\u266F`, "&shchcy;": `\u0449`, "&shcy;": `\u0448`, "&shortmid;": `\u2223`, "&shortparallel;": `\u2225`, "&shy": `\xAD`, "&shy;": `\xAD`, "&sigma;": `\u03C3`, "&sigmaf;": `\u03C2`, "&sigmav;": `\u03C2`, "&sim;": `\u223C`, "&simdot;": `\u2A6A`, "&sime;": `\u2243`, "&simeq;": `\u2243`, "&simg;": `\u2A9E`, "&simgE;": `\u2AA0`, "&siml;": `\u2A9D`, "&simlE;": `\u2A9F`, "&simne;": `\u2246`, "&simplus;": `\u2A24`, "&simrarr;": `\u2972`, "&slarr;": `\u2190`, "&smallsetminus;": `\u2216`, "&smashp;": `\u2A33`, "&smeparsl;": `\u29E4`, "&smid;": `\u2223`, "&smile;": `\u2323`, "&smt;": `\u2AAA`, "&smte;": `\u2AAC`, "&smtes;": `\u2AAC\uFE00`, "&softcy;": `\u044C`, "&sol;": `/`, "&solb;": `\u29C4`, "&solbar;": `\u233F`, "&sopf;": `\u{1D564}`, "&spades;": `\u2660`, "&spadesuit;": `\u2660`, "&spar;": `\u2225`, "&sqcap;": `\u2293`, "&sqcaps;": `\u2293\uFE00`, "&sqcup;": `\u2294`, "&sqcups;": `\u2294\uFE00`, "&sqsub;": `\u228F`, "&sqsube;": `\u2291`, "&sqsubset;": `\u228F`, "&sqsubseteq;": `\u2291`, "&sqsup;": `\u2290`, "&sqsupe;": `\u2292`, "&sqsupset;": `\u2290`, "&sqsupseteq;": `\u2292`, "&squ;": `\u25A1`, "&square;": `\u25A1`, "&squarf;": `\u25AA`, "&squf;": `\u25AA`, "&srarr;": `\u2192`, "&sscr;": `\u{1D4C8}`, "&ssetmn;": `\u2216`, "&ssmile;": `\u2323`, "&sstarf;": `\u22C6`, "&star;": `\u2606`, "&starf;": `\u2605`, "&straightepsilon;": `\u03F5`, "&straightphi;": `\u03D5`, "&strns;": `\xAF`, "&sub;": `\u2282`, "&subE;": `\u2AC5`, "&subdot;": `\u2ABD`, "&sube;": `\u2286`, "&subedot;": `\u2AC3`, "&submult;": `\u2AC1`, "&subnE;": `\u2ACB`, "&subne;": `\u228A`, "&subplus;": `\u2ABF`, "&subrarr;": `\u2979`, "&subset;": `\u2282`, "&subseteq;": `\u2286`, "&subseteqq;": `\u2AC5`, "&subsetneq;": `\u228A`, "&subsetneqq;": `\u2ACB`, "&subsim;": `\u2AC7`, "&subsub;": `\u2AD5`, "&subsup;": `\u2AD3`, "&succ;": `\u227B`, "&succapprox;": `\u2AB8`, "&succcurlyeq;": `\u227D`, "&succeq;": `\u2AB0`, "&succnapprox;": `\u2ABA`, "&succneqq;": `\u2AB6`, "&succnsim;": `\u22E9`, "&succsim;": `\u227F`, "&sum;": `\u2211`, "&sung;": `\u266A`, "&sup1": `\xB9`, "&sup1;": `\xB9`, "&sup2": `\xB2`, "&sup2;": `\xB2`, "&sup3": `\xB3`, "&sup3;": `\xB3`, "&sup;": `\u2283`, "&supE;": `\u2AC6`, "&supdot;": `\u2ABE`, "&supdsub;": `\u2AD8`, "&supe;": `\u2287`, "&supedot;": `\u2AC4`, "&suphsol;": `\u27C9`, "&suphsub;": `\u2AD7`, "&suplarr;": `\u297B`, "&supmult;": `\u2AC2`, "&supnE;": `\u2ACC`, "&supne;": `\u228B`, "&supplus;": `\u2AC0`, "&supset;": `\u2283`, "&supseteq;": `\u2287`, "&supseteqq;": `\u2AC6`, "&supsetneq;": `\u228B`, "&supsetneqq;": `\u2ACC`, "&supsim;": `\u2AC8`, "&supsub;": `\u2AD4`, "&supsup;": `\u2AD6`, "&swArr;": `\u21D9`, "&swarhk;": `\u2926`, "&swarr;": `\u2199`, "&swarrow;": `\u2199`, "&swnwar;": `\u292A`, "&szlig": `\xDF`, "&szlig;": `\xDF`, "&target;": `\u2316`, "&tau;": `\u03C4`, "&tbrk;": `\u23B4`, "&tcaron;": `\u0165`, "&tcedil;": `\u0163`, "&tcy;": `\u0442`, "&tdot;": `\u20DB`, "&telrec;": `\u2315`, "&tfr;": `\u{1D531}`, "&there4;": `\u2234`, "&therefore;": `\u2234`, "&theta;": `\u03B8`, "&thetasym;": `\u03D1`, "&thetav;": `\u03D1`, "&thickapprox;": `\u2248`, "&thicksim;": `\u223C`, "&thinsp;": `\u2009`, "&thkap;": `\u2248`, "&thksim;": `\u223C`, "&thorn": `\xFE`, "&thorn;": `\xFE`, "&tilde;": `\u02DC`, "&times": `\xD7`, "&times;": `\xD7`, "&timesb;": `\u22A0`, "&timesbar;": `\u2A31`, "&timesd;": `\u2A30`, "&tint;": `\u222D`, "&toea;": `\u2928`, "&top;": `\u22A4`, "&topbot;": `\u2336`, "&topcir;": `\u2AF1`, "&topf;": `\u{1D565}`, "&topfork;": `\u2ADA`, "&tosa;": `\u2929`, "&tprime;": `\u2034`, "&trade;": `\u2122`, "&triangle;": `\u25B5`, "&triangledown;": `\u25BF`, "&triangleleft;": `\u25C3`, "&trianglelefteq;": `\u22B4`, "&triangleq;": `\u225C`, "&triangleright;": `\u25B9`, "&trianglerighteq;": `\u22B5`, "&tridot;": `\u25EC`, "&trie;": `\u225C`, "&triminus;": `\u2A3A`, "&triplus;": `\u2A39`, "&trisb;": `\u29CD`, "&tritime;": `\u2A3B`, "&trpezium;": `\u23E2`, "&tscr;": `\u{1D4C9}`, "&tscy;": `\u0446`, "&tshcy;": `\u045B`, "&tstrok;": `\u0167`, "&twixt;": `\u226C`, "&twoheadleftarrow;": `\u219E`, "&twoheadrightarrow;": `\u21A0`, "&uArr;": `\u21D1`, "&uHar;": `\u2963`, "&uacute": `\xFA`, "&uacute;": `\xFA`, "&uarr;": `\u2191`, "&ubrcy;": `\u045E`, "&ubreve;": `\u016D`, "&ucirc": `\xFB`, "&ucirc;": `\xFB`, "&ucy;": `\u0443`, "&udarr;": `\u21C5`, "&udblac;": `\u0171`, "&udhar;": `\u296E`, "&ufisht;": `\u297E`, "&ufr;": `\u{1D532}`, "&ugrave": `\xF9`, "&ugrave;": `\xF9`, "&uharl;": `\u21BF`, "&uharr;": `\u21BE`, "&uhblk;": `\u2580`, "&ulcorn;": `\u231C`, "&ulcorner;": `\u231C`, "&ulcrop;": `\u230F`, "&ultri;": `\u25F8`, "&umacr;": `\u016B`, "&uml": `\xA8`, "&uml;": `\xA8`, "&uogon;": `\u0173`, "&uopf;": `\u{1D566}`, "&uparrow;": `\u2191`, "&updownarrow;": `\u2195`, "&upharpoonleft;": `\u21BF`, "&upharpoonright;": `\u21BE`, "&uplus;": `\u228E`, "&upsi;": `\u03C5`, "&upsih;": `\u03D2`, "&upsilon;": `\u03C5`, "&upuparrows;": `\u21C8`, "&urcorn;": `\u231D`, "&urcorner;": `\u231D`, "&urcrop;": `\u230E`, "&uring;": `\u016F`, "&urtri;": `\u25F9`, "&uscr;": `\u{1D4CA}`, "&utdot;": `\u22F0`, "&utilde;": `\u0169`, "&utri;": `\u25B5`, "&utrif;": `\u25B4`, "&uuarr;": `\u21C8`, "&uuml": `\xFC`, "&uuml;": `\xFC`, "&uwangle;": `\u29A7`, "&vArr;": `\u21D5`, "&vBar;": `\u2AE8`, "&vBarv;": `\u2AE9`, "&vDash;": `\u22A8`, "&vangrt;": `\u299C`, "&varepsilon;": `\u03F5`, "&varkappa;": `\u03F0`, "&varnothing;": `\u2205`, "&varphi;": `\u03D5`, "&varpi;": `\u03D6`, "&varpropto;": `\u221D`, "&varr;": `\u2195`, "&varrho;": `\u03F1`, "&varsigma;": `\u03C2`, "&varsubsetneq;": `\u228A\uFE00`, "&varsubsetneqq;": `\u2ACB\uFE00`, "&varsupsetneq;": `\u228B\uFE00`, "&varsupsetneqq;": `\u2ACC\uFE00`, "&vartheta;": `\u03D1`, "&vartriangleleft;": `\u22B2`, "&vartriangleright;": `\u22B3`, "&vcy;": `\u0432`, "&vdash;": `\u22A2`, "&vee;": `\u2228`, "&veebar;": `\u22BB`, "&veeeq;": `\u225A`, "&vellip;": `\u22EE`, "&verbar;": `|`, "&vert;": `|`, "&vfr;": `\u{1D533}`, "&vltri;": `\u22B2`, "&vnsub;": `\u2282\u20D2`, "&vnsup;": `\u2283\u20D2`, "&vopf;": `\u{1D567}`, "&vprop;": `\u221D`, "&vrtri;": `\u22B3`, "&vscr;": `\u{1D4CB}`, "&vsubnE;": `\u2ACB\uFE00`, "&vsubne;": `\u228A\uFE00`, "&vsupnE;": `\u2ACC\uFE00`, "&vsupne;": `\u228B\uFE00`, "&vzigzag;": `\u299A`, "&wcirc;": `\u0175`, "&wedbar;": `\u2A5F`, "&wedge;": `\u2227`, "&wedgeq;": `\u2259`, "&weierp;": `\u2118`, "&wfr;": `\u{1D534}`, "&wopf;": `\u{1D568}`, "&wp;": `\u2118`, "&wr;": `\u2240`, "&wreath;": `\u2240`, "&wscr;": `\u{1D4CC}`, "&xcap;": `\u22C2`, "&xcirc;": `\u25EF`, "&xcup;": `\u22C3`, "&xdtri;": `\u25BD`, "&xfr;": `\u{1D535}`, "&xhArr;": `\u27FA`, "&xharr;": `\u27F7`, "&xi;": `\u03BE`, "&xlArr;": `\u27F8`, "&xlarr;": `\u27F5`, "&xmap;": `\u27FC`, "&xnis;": `\u22FB`, "&xodot;": `\u2A00`, "&xopf;": `\u{1D569}`, "&xoplus;": `\u2A01`, "&xotime;": `\u2A02`, "&xrArr;": `\u27F9`, "&xrarr;": `\u27F6`, "&xscr;": `\u{1D4CD}`, "&xsqcup;": `\u2A06`, "&xuplus;": `\u2A04`, "&xutri;": `\u25B3`, "&xvee;": `\u22C1`, "&xwedge;": `\u22C0`, "&yacute": `\xFD`, "&yacute;": `\xFD`, "&yacy;": `\u044F`, "&ycirc;": `\u0177`, "&ycy;": `\u044B`, "&yen": `\xA5`, "&yen;": `\xA5`, "&yfr;": `\u{1D536}`, "&yicy;": `\u0457`, "&yopf;": `\u{1D56A}`, "&yscr;": `\u{1D4CE}`, "&yucy;": `\u044E`, "&yuml": `\xFF`, "&yuml;": `\xFF`, "&zacute;": `\u017A`, "&zcaron;": `\u017E`, "&zcy;": `\u0437`, "&zdot;": `\u017C`, "&zeetrf;": `\u2128`, "&zeta;": `\u03B6`, "&zfr;": `\u{1D537}`, "&zhcy;": `\u0436`, "&zigrarr;": `\u21DD`, "&zopf;": `\u{1D56B}`, "&zscr;": `\u{1D4CF}`, "&zwj;": `\u200D`, "&zwnj;": `\u200C` };
function k(e2) {
  return e2.replace(/&(#\d+|#x[a-f0-9]+|[a-z]+\d*);?/gi, (e3, t3) => {
    if (typeof O[e3] == `string`) return O[e3];
    if (t3.charAt(0) !== `#` || e3.charAt(e3.length - 1) !== `;`) return e3;
    let n2;
    n2 = t3.charAt(1) === `x` ? parseInt(t3.substr(2), 16) : parseInt(t3.substr(1), 10);
    let r2 = ``;
    return n2 >= 55296 && n2 <= 57343 || n2 > 1114111 ? `\uFFFD` : (n2 > 65535 && (n2 -= 65536, r2 += String.fromCharCode(n2 >>> 10 & 1023 | 55296), n2 = 56320 | n2 & 1023), r2 += String.fromCharCode(n2), r2);
  });
}
function A(e2) {
  return e2.trim().replace(/[<>"'?&]/g, (e3) => {
    let t3 = e3.charCodeAt(0).toString(16);
    return t3.length < 2 && (t3 = `0` + t3), `&#x` + t3.toUpperCase() + `;`;
  });
}
function j(e2) {
  let t3 = i;
  return `<div>` + A(e2).replace(/\n/g, t3(398)) + t3(362);
}
function M(e2) {
  let t3 = i;
  return e2 = e2[t3(350)](/\r?\n/g, ``).replace(/<\!\-\-.*?\-\->/gi, ` `).replace(/<br\b[^>]*>/gi, `
`)[t3(350)](/<\/?(p|div|table|tr|td|th)\b[^>]*>/gi, `

`).replace(/<script\b[^>]*>.*?<\/script\b[^>]*>/gi, ` `)[t3(350)](/^.*<body\b[^>]*>/i, ``).replace(/^.*<\/head\b[^>]*>/i, ``).replace(/^.*<\!doctype\b[^>]*>/i, ``)[t3(350)](/<\/body\b[^>]*>.*$/i, ``)[t3(350)](/<\/html\b[^>]*>.*$/i, ``).replace(/<a\b[^>]*href\s*=\s*["']?([^\s"']+)[^>]*>/gi, ` ($1) `).replace(/<\/?(span|em|i|strong|b|u|a)\b[^>]*>/gi, ``)[t3(350)](/<li\b[^>]*>[\n\u0001\s]*/gi, `* `).replace(/<hr\b[^>]*>/g, t3(344)).replace(/<[^>]*>/g, ` `)[t3(350)](/\u0001/g, `
`)[t3(350)](/[ \t]+/g, ` `).replace(/^\s+$/gm, ``).replace(/\n\n+/g, `

`).replace(/^\n+/, `
`).replace(/\n+$/, `
`), e2 = k(e2), e2;
}
function N(e2) {
  let t3 = i;
  return [][t3(363)](e2.name || [], e2.name ? `<` + e2.address + `>` : e2.address)[t3(420)](` `);
}
function P(e2) {
  let t3 = i, n2 = [], r2 = (e3, t4) => {
    let i2 = T;
    if (t4 && n2.push(`, `), e3.group) {
      let t5 = e3[i2(403)] + `:`;
      n2.push(t5), e3.group.forEach(r2), n2.push(`;`);
    } else n2.push(N(e3));
  };
  return e2.forEach(r2), n2[t3(420)](``);
}
function F(e2) {
  let t3 = i;
  return `<a href="mailto:` + A(e2.address) + t3(379) + A(e2.name || `<` + e2.address + `>`) + `</a>`;
}
function I(e2) {
  let t3 = [], n2 = (e3, r2) => {
    let i2 = T;
    if (r2 && t3.push(`<span class="postal-email-address-separator">, </span>`), e3.group) {
      let r3 = `<span class="postal-email-address-group">` + A(e3.name) + `:</span>`;
      t3.push(r3), e3[i2(376)][i2(348)](n2), t3.push(`<span class="postal-email-address-group">;</span>`);
    } else t3.push(F(e3));
  };
  return e2.forEach(n2), t3.join(` `);
}
function L(e2, t3, n2) {
  let r2 = i;
  e2 = (e2 || ``).toString(), t3 || (t3 = 76);
  let a2 = 0, o2 = e2.length, s2 = ``, c2, l2;
  for (; a2 < o2; ) {
    if (c2 = e2.substr(a2, t3), c2.length < t3) {
      s2 += c2;
      break;
    }
    if (l2 = c2.match(/^[^\n\r]*(\r?\n|\r)/)) {
      c2 = l2[0], s2 += c2, a2 += c2.length;
      continue;
    } else (l2 = c2.match(/(\s+)[^\s]*$/)) && l2[0][r2(368)] - (n2 ? (l2[1] || ``).length : 0) < c2[r2(368)] ? c2 = c2[r2(407)](0, c2.length - (l2[0].length - (n2 ? (l2[1] || ``).length : 0))) : (l2 = e2.substr(a2 + c2.length).match(/^[^\s]+(\s*)/)) && (c2 += l2[0].substr(0, l2[0].length - (n2 ? 0 : (l2[1] || ``).length)));
    s2 += c2, a2 += c2.length, a2 < o2 && (s2 += `\r
`);
  }
  return s2;
}
function R(e2) {
  let t3 = i, n2 = [];
  if (e2.from && n2.push({ key: `From`, val: N(e2[t3(370)]) }), e2.subject && n2.push({ key: `Subject`, val: e2.subject }), e2.date) {
    let r3 = typeof Intl > `u` ? e2.date : new Intl.DateTimeFormat(`default`, { year: `numeric`, month: `numeric`, day: `numeric`, hour: `numeric`, minute: t3(418), second: `numeric`, hour12: false }).format(new Date(e2.date));
    n2.push({ key: `Date`, val: r3 });
  }
  e2.to && e2.to[t3(368)] && n2.push({ key: `To`, val: P(e2.to) }), e2.cc && e2.cc.length && n2.push({ key: `Cc`, val: P(e2.cc) }), e2.bcc && e2.bcc.length && n2.push({ key: `Bcc`, val: P(e2.bcc) });
  let r2 = n2.map((e3) => e3.key.length).reduce((e3, t4) => t4 > e3 ? t4 : e3, 0);
  n2 = n2.flatMap((e3) => {
    let t4 = r2 - e3.key.length, n3 = e3.key + `: ` + ` `.repeat(t4), i2 = ` `.repeat(e3.key.length + 1) + ` ` + ` `.repeat(t4);
    return L(e3.val, 80, true).split(/\r?\n/).map((e4) => e4.trim()).map((e4, t5) => `` + (t5 ? i2 : n3) + e4);
  });
  let a2 = n2.map((e3) => e3.length)[t3(358)]((e3, t4) => t4 > e3 ? t4 : e3, 0), o2 = `-`.repeat(a2);
  return `
` + o2 + `
` + n2[t3(420)](`
`) + `
` + o2 + `
`;
}
function z(e2) {
  let t3 = i, n2 = [];
  if (e2.from && n2.push(`<div class="postal-email-header-key">From</div><div class="postal-email-header-value">` + F(e2[t3(370)]) + `</div>`), e2.subject && n2.push(`<div class="postal-email-header-key">Subject</div><div class="postal-email-header-value postal-email-header-subject">` + A(e2.subject) + `</div>`), e2.date) {
    let r2 = typeof Intl > `u` ? e2.date : new Intl.DateTimeFormat(`default`, { year: `numeric`, month: `numeric`, day: `numeric`, hour: t3(418), minute: `numeric`, second: `numeric`, hour12: false })[t3(384)](new Date(e2[t3(391)]));
    n2.push(t3(396) + A(e2.date) + `">` + A(r2) + t3(362));
  }
  return e2.to && e2.to.length && n2.push(`<div class="postal-email-header-key">To</div><div class="postal-email-header-value">` + I(e2.to) + `</div>`), e2.cc && e2.cc[t3(368)] && n2.push(`<div class="postal-email-header-key">Cc</div><div class="postal-email-header-value">` + I(e2.cc) + `</div>`), e2.bcc && e2.bcc.length && n2[t3(395)](`<div class="postal-email-header-key">Bcc</div><div class="postal-email-header-value">` + I(e2.bcc) + t3(362)), `<div class="postal-email-header">` + (n2.length ? `<div class="postal-email-header-row">` : ``) + n2[t3(420)](`</div>
<div class="postal-email-header-row">`) + (n2.length ? `</div>` : ``) + `</div>`;
}
function B(e2, t3) {
  let n2 = i, r2 = false, a2 = `text`, o2, s2 = [], c2 = { address: [], comment: [], group: [], text: [], textWasQuoted: [] }, l2, u2, d2 = false;
  for (l2 = 0, u2 = e2.length; l2 < u2; l2++) {
    let t4 = e2[l2], i2 = l2 ? e2[l2 - 1] : null;
    if (t4.type === `operator`) switch (t4.value) {
      case `<`:
        a2 = n2(330), d2 = false;
        break;
      case `(`:
        a2 = `comment`, d2 = false;
        break;
      case `:`:
        a2 = `group`, r2 = true, d2 = false;
        break;
      case `"`:
        d2 = !d2, a2 = `text`;
        break;
      default:
        a2 = n2(397), d2 = false;
        break;
    }
    else t4.value && (a2 === n2(330) && (t4.value = t4.value[n2(350)](/^[^<]*<\s*/, ``)), i2 && i2[n2(383)] && c2[a2].length ? (c2[a2][c2[a2].length - 1] += t4[n2(354)], a2 === n2(397) && d2 && (c2.textWasQuoted[c2.textWasQuoted[n2(368)] - 1] = true)) : (c2[a2].push(t4.value), a2 === `text` && c2.textWasQuoted[n2(395)](d2)));
  }
  if (!c2.text.length && c2.comment.length && (c2[n2(397)] = c2.comment, c2.comment = []), r2) {
    c2.text = c2.text.join(` `);
    let e3 = [];
    c2.group.length && U(c2[n2(376)].join(`,`), { _depth: t3 + 1 }).forEach((t4) => {
      let r3 = n2;
      t4.group ? e3 = e3[r3(363)](t4.group) : e3[r3(395)](t4);
    }), s2.push({ name: m(c2[n2(397)] || o2 && o2.name), group: e3 });
  } else {
    if (!c2[n2(330)][n2(368)] && c2.text[n2(368)]) {
      for (l2 = c2.text.length - 1; l2 >= 0; l2--) if (!c2.textWasQuoted[l2] && c2.text[l2].match(/^[^@\s]+@[^@\s]+$/)) {
        c2.address = c2.text.splice(l2, 1), c2.textWasQuoted.splice(l2, 1);
        break;
      }
      let e3 = function(e4) {
        let t4 = n2;
        return c2.address.length ? e4 : (c2[t4(330)] = [e4[t4(371)]()], ` `);
      };
      if (!c2.address.length) for (l2 = c2.text.length - 1; l2 >= 0 && !(!c2.textWasQuoted[l2] && (c2[n2(397)][l2] = c2[n2(397)][l2][n2(350)](/\s*\b[^@\s]+@[^\s]+\b\s*/, e3).trim(), c2[n2(330)].length)); l2--) ;
    }
    if (!c2.text.length && c2.comment.length && (c2.text = c2[n2(338)], c2.comment = []), c2.address.length > 1 && (c2.text = c2.text.concat(c2.address.splice(1))), c2.text = c2.text.join(` `), c2.address = c2.address[n2(420)](` `), !c2.address && /^=\?[^=]+?=$/.test(c2[n2(397)].trim())) {
      let e3 = m(c2.text);
      if (/<[^<>]+@[^<>]+>/.test(e3)) {
        let t4 = U(e3);
        if (t4 && t4.length) return t4;
      }
      return [{ address: ``, name: e3 }];
    }
    o2 = { address: c2.address || c2.text || ``, name: m(c2[n2(397)] || c2.address || ``) }, o2.address === o2.name && ((o2.address || ``).match(/@/) ? o2.name = `` : o2.address = ``), s2.push(o2);
  }
  return s2;
}
var V = class {
  constructor(e2) {
    let t3 = i;
    this.str = (e2 || ``)[t3(389)](), this.operatorCurrent = ``, this.operatorExpecting = ``, this.node = null, this.escaped = false, this.list = [], this.operators = { '"': `"`, "(": `)`, "<": `>`, ",": ``, ":": `;`, ";": `` };
  }
  tokenize() {
    let e2 = i, t3 = [];
    for (let t4 = 0, n2 = this.str.length; t4 < n2; t4++) {
      let r2 = this.str.charAt(t4), i2 = t4 < n2 - 1 ? this.str.charAt(t4 + 1) : null;
      this[e2(390)](r2, i2);
    }
    return this.list.forEach((n2) => {
      n2.value = (n2[e2(354)] || ``).toString().trim(), n2.value && t3.push(n2);
    }), t3;
  }
  [i(390)](e2, t3) {
    let n2 = i;
    if (!this[n2(404)]) {
      if (e2 === this.operatorExpecting) {
        this.node = { type: n2(357), value: e2 }, t3 && ![` `, `	`, `\r`, `
`, `,`, `;`].includes(t3) && (this.node.noBreak = true), this.list.push(this.node), this.node = null, this.operatorExpecting = ``, this.escaped = false;
        return;
      } else if (!this[n2(326)] && e2 in this.operators) {
        this.node = { type: n2(357), value: e2 }, this.list.push(this.node), this.node = null, this.operatorExpecting = this.operators[e2], this.escaped = false;
        return;
      } else if (this[n2(326)] === `"` && e2 === `\\`) {
        this[n2(404)] = true;
        return;
      }
    }
    this.node || (this.node = { type: `text`, value: `` }, this.list.push(this.node)), e2 === `
` && (e2 = ` `), (e2.charCodeAt(0) >= 33 || [` `, `	`].includes(e2)) && (this.node.value += e2), this.escaped = false;
  }
}, H = 50;
function U(e2, t3) {
  let n2 = i;
  t3 || (t3 = {});
  let r2 = t3._depth || 0;
  if (r2 > H) return [];
  let a2 = new V(e2)[n2(325)](), o2 = [], s2 = [], c2 = [];
  if (a2.forEach((e3) => {
    let t4 = n2;
    e3[t4(339)] === `operator` && (e3[t4(354)] === `,` || e3.value === `;`) ? (s2.length && o2.push(s2), s2 = []) : s2.push(e3);
  }), s2[n2(368)] && o2.push(s2), o2.forEach((e3) => {
    let t4 = n2;
    e3 = B(e3, r2), e3[t4(368)] && (c2 = c2.concat(e3));
  }), t3[n2(399)]) {
    let e3 = [], t4 = (n3) => {
      n3.forEach((n4) => {
        let r3 = T;
        if (n4.group) return t4(n4[r3(376)]);
        e3.push(n4);
      });
    };
    return t4(c2), e3;
  }
  return c2;
}
function W(e2) {
  for (var t3 = ``, n2 = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`, r2 = new Uint8Array(e2), i2 = r2.byteLength, a2 = i2 % 3, o2 = i2 - a2, s2, c2, l2, u2, d2, f2 = 0; f2 < o2; f2 += 3) d2 = r2[f2] << 16 | r2[f2 + 1] << 8 | r2[f2 + 2], s2 = (d2 & 16515072) >> 18, c2 = (d2 & 258048) >> 12, l2 = (d2 & 4032) >> 6, u2 = d2 & 63, t3 += n2[s2] + n2[c2] + n2[l2] + n2[u2];
  return a2 == 1 ? (d2 = r2[o2], s2 = (d2 & 252) >> 2, c2 = (d2 & 3) << 4, t3 += n2[s2] + n2[c2] + `==`) : a2 == 2 && (d2 = r2[o2] << 8 | r2[o2 + 1], s2 = (d2 & 64512) >> 10, c2 = (d2 & 1008) >> 4, l2 = (d2 & 15) << 2, t3 += n2[s2] + n2[c2] + n2[l2] + `=`), t3;
}
t(), n();
var G = 256, K = 2 * 1024 * 1024;
function q(e2) {
  return e2.replace(/-(.)/g, (e3, t3) => t3.toUpperCase());
}
var J = class t2 {
  static parse(e2, n2) {
    return new t2(n2).parse(e2);
  }
  constructor(t3) {
    let n2 = i;
    this.options = t3 || {}, this.mimeOptions = { maxNestingDepth: this.options.maxNestingDepth || G, maxHeadersSize: this.options.maxHeadersSize || K }, this.root = this[n2(400)] = new D(e({ postalMime: this }, this.mimeOptions)), this.boundaries = [], this.textContent = {}, this.attachments = [], this[n2(337)] = (this.options.attachmentEncoding || ``).toString().replace(/[-_\s]/g, ``).trim().toLowerCase() || `arraybuffer`, this.started = false;
  }
  finalize() {
    var e2 = this;
    return r(function* () {
      yield e2.root.finalize();
    })();
  }
  processLine(t3, n2) {
    var i2 = this;
    return r(function* () {
      let r2 = T, a2 = i2[r2(410)];
      if (a2[r2(368)] && t3.length > 2 && t3[0] === 45 && t3[1] === 45) for (let o2 = a2.length - 1; o2 >= 0; o2--) {
        let s2 = a2[o2];
        if (t3.length < s2[r2(354)].length + 2) continue;
        let c2 = true;
        for (let e2 = 0; e2 < s2.value.length; e2++) if (t3[e2 + 2] !== s2[r2(354)][e2]) {
          c2 = false;
          break;
        }
        if (!c2) continue;
        let l2 = s2.value.length + 2, u2 = false;
        t3[r2(368)] >= s2.value.length + 4 && t3[s2.value.length + 2] === 45 && t3[s2[r2(354)].length + 3] === 45 && (u2 = true, l2 = s2.value.length + 4);
        let d2 = true;
        for (let e2 = l2; e2 < t3.length; e2++) if (t3[e2] !== 32 && t3[e2] !== 9) {
          d2 = false;
          break;
        }
        if (d2) return u2 ? (yield s2.node.finalize(), i2.currentNode = s2.node.parentNode || i2.root) : (yield s2.node.finalizeChildNodes(), i2.currentNode = new D(e({ postalMime: i2, parentNode: s2.node, parentMultipartType: s2[r2(422)].contentType.multipart }, i2.mimeOptions))), n2 ? i2.finalize() : void 0;
      }
      if (i2.currentNode.feed(t3), n2) return i2.finalize();
    })();
  }
  readLine() {
    let e2 = i, t3 = this.readPos, n2 = this.readPos;
    for (; this.readPos < this.av.length; ) {
      let r2 = this.av[this.readPos++];
      if (r2 !== 13 && r2 !== 10 && (n2 = this.readPos), r2 === 10) return { bytes: new Uint8Array(this.buf, t3, n2 - t3), done: this.readPos >= this.av[e2(368)] };
    }
    return { bytes: new Uint8Array(this[e2(327)], t3, n2 - t3), done: this.readPos >= this.av.length };
  }
  processNodeTree() {
    var e2 = this;
    return r(function* () {
      let n2 = {}, i2 = /* @__PURE__ */ new Set(), o2 = e2.textMap = /* @__PURE__ */ new Map(), s2 = e2.forceRfc822Attachments(), c2 = (function() {
        var n3 = r(function* (n4, r2, l2) {
          let u2 = T;
          if (r2 || (r2 = false), l2 || (l2 = false), n4[u2(320)].multipart) n4.contentType.multipart === `alternative` ? r2 = n4 : n4.contentType.multipart === `related` && (l2 = n4);
          else if (e2.isInlineMessageRfc822(n4) && !s2) {
            let r3 = new t2();
            n4.subMessage = yield r3.parse(n4.content), o2.has(n4) || o2[u2(377)](n4, {});
            let a2 = o2.get(n4);
            (n4.subMessage.text || !n4.subMessage.html) && (a2[u2(318)] = a2.plain || [], a2.plain.push({ type: `subMessage`, value: n4.subMessage }), i2.add(`plain`)), n4.subMessage.html && (a2[u2(324)] = a2.html || [], a2.html.push({ type: `subMessage`, value: n4[u2(421)] }), i2.add(`html`)), r3.textMap && r3.textMap.forEach((e3, t3) => {
              o2[u2(377)](t3, e3);
            });
            for (let t3 of n4.subMessage.attachments || []) e2.attachments.push(t3);
          } else if (e2[u2(423)](n4)) {
            let e3 = n4[u2(320)][u2(369)].value[u2(407)](n4.contentType.parsed.value.indexOf(`/`) + 1), t3 = r2 || n4;
            o2.has(t3) || o2.set(t3, {});
            let a2 = o2.get(t3);
            a2[e3] = a2[e3] || [], a2[e3].push({ type: `text`, value: n4.getTextContent() }), i2.add(e3);
          } else if (n4[u2(427)]) {
            var d2, f2;
            let t3 = ((d2 = n4.contentDisposition) == null || (d2 = d2.parsed) == null || (d2 = d2.params) == null ? void 0 : d2.filename) || n4.contentType.parsed.params.name || null, r3 = { filename: t3 ? m(t3) : null, mimeType: n4.contentType.parsed.value, disposition: ((f2 = n4.contentDisposition) == null || (f2 = f2.parsed) == null ? void 0 : f2.value) || null };
            switch (l2 && n4.contentId && (r3.related = true), n4[u2(333)] && (r3.description = n4.contentDescription), n4[u2(381)] && (r3.contentId = n4.contentId), n4.contentType.parsed.value) {
              case `text/calendar`:
              case `application/ics`: {
                n4[u2(320)][u2(369)][u2(332)].method && (r3.method = n4[u2(320)].parsed[u2(332)].method.toString()[u2(414)]().trim());
                let e3 = n4.getTextContent().replace(/\r?\n/g, `
`).replace(/\n*$/, `
`);
                r3[u2(427)] = a.encode(e3);
                break;
              }
              default:
                r3.content = n4.content;
            }
            e2.attachments[u2(395)](r3);
          }
          for (let e3 of n4.childNodes) yield c2(e3, r2, l2);
        });
        return function(e3, t3, r2) {
          return n3.apply(this, arguments);
        };
      })();
      yield c2(e2.root, false, false), o2.forEach((e3) => {
        i2.forEach((t3) => {
          let r2 = T;
          if (n2[t3] || (n2[t3] = []), e3[t3]) e3[t3].forEach((e4) => {
            let r3 = T;
            switch (e4.type) {
              case `text`:
                n2[t3].push(e4.value);
                break;
              case `subMessage`:
                switch (t3) {
                  case `html`:
                    n2[t3].push(z(e4.value));
                    break;
                  case r3(318):
                    n2[t3].push(R(e4.value));
                    break;
                }
                break;
            }
          });
          else {
            let i3;
            switch (t3) {
              case `html`:
                i3 = `plain`;
                break;
              case `plain`:
                i3 = `html`;
                break;
            }
            (e3[i3] || [])[r2(348)]((e4) => {
              switch (e4.type) {
                case `text`:
                  switch (t3) {
                    case `html`:
                      n2[t3].push(j(e4.value));
                      break;
                    case `plain`:
                      n2[t3].push(M(e4.value));
                      break;
                  }
                  break;
                case `subMessage`:
                  switch (t3) {
                    case `html`:
                      n2[t3].push(z(e4.value));
                      break;
                    case `plain`:
                      n2[t3].push(R(e4.value));
                      break;
                  }
                  break;
              }
            });
          }
        });
      }), Object.keys(n2).forEach((e3) => {
        n2[e3] = n2[e3].join(`
`);
      }), e2.textContent = n2;
    })();
  }
  isInlineTextNode(e2) {
    var _a;
    let t3 = i;
    var n2;
    if (((n2 = e2.contentDisposition) == null || (n2 = n2.parsed) == null ? void 0 : n2[t3(354)]) === `attachment`) return false;
    switch ((_a = e2.contentType.parsed) == null ? void 0 : _a.value) {
      case `text/html`:
      case `text/plain`:
        return true;
      default:
        return false;
    }
  }
  isInlineMessageRfc822(e2) {
    var _a;
    let t3 = i;
    var n2;
    return ((_a = e2.contentType[t3(369)]) == null ? void 0 : _a.value) === `message/rfc822` ? (((n2 = e2.contentDisposition) == null || (n2 = n2.parsed) == null ? void 0 : n2.value) || (this.options.rfc822Attachments ? `attachment` : `inline`)) === `inline` : false;
  }
  forceRfc822Attachments() {
    if (this.options.forceRfc822Attachments) return true;
    let e2 = false, t3 = (n2) => {
      let r2 = T;
      n2[r2(320)].multipart || n2.contentType.parsed && [`message/delivery-status`, `message/feedback-report`][r2(340)](n2[r2(320)].parsed.value) && (e2 = true);
      for (let e3 of n2.childNodes) t3(e3);
    };
    return t3(this.root), e2;
  }
  [i(375)](e2) {
    return r(function* () {
      let t3 = T, n2 = 0, r2 = [], i2 = e2.getReader();
      for (; ; ) {
        let { done: e3, value: a3 } = yield i2[t3(424)]();
        if (e3) break;
        r2.push(a3), n2 += a3.length;
      }
      let a2 = new Uint8Array(n2), o2 = 0;
      for (let e3 of r2) a2.set(e3, o2), o2 += e3.length;
      return a2;
    })();
  }
  parse(e2) {
    var t3 = this;
    return r(function* () {
      let n2 = T;
      var r2, i2;
      if (t3.started) throw Error(n2(366));
      for (t3.started = true, e2 && typeof e2.getReader == `function` && (e2 = yield t3.resolveStream(e2)), e2 || (e2 = new ArrayBuffer(0)), typeof e2 == `string` && (e2 = a.encode(e2)), (e2 instanceof Blob || Object.prototype[n2(389)].call(e2) === `[object Blob]`) && (e2 = yield u(e2)), e2.buffer instanceof ArrayBuffer && (e2 = new Uint8Array(e2).buffer), t3[n2(327)] = e2, t3.av = new Uint8Array(e2), t3.readPos = 0; t3.readPos < t3.av.length; ) {
        let e3 = t3[n2(345)]();
        yield t3.processLine(e3.bytes, e3.done);
      }
      yield t3[n2(409)]();
      let o2 = { headers: t3.root.headers[n2(405)]((e3) => ({ key: e3.key, originalKey: e3.originalKey, value: e3.value })).reverse() };
      for (let e3 of [`from`, `sender`]) {
        let r3 = t3.root.headers.find((t4) => t4[n2(417)] === e3);
        if (r3 && r3.value) {
          let t4 = U(r3.value);
          t4 && t4.length && (o2[e3] = t4[0]);
        }
      }
      for (let e3 of [`delivered-to`, `return-path`]) {
        let r3 = t3.root.headers.find((t4) => t4.key === e3);
        if (r3 && r3.value) {
          let t4 = U(r3[n2(354)]);
          if (t4 && t4[n2(368)] && t4[0][n2(330)]) {
            let n3 = q(e3);
            o2[n3] = t4[0].address;
          }
        }
      }
      for (let e3 of [`to`, `cc`, `bcc`, n2(323)]) {
        let r3 = t3.root.headers.filter((t4) => t4.key === e3), i3 = [];
        if (r3.filter((e4) => e4 && e4.value)[n2(405)]((e4) => U(e4[n2(354)])).forEach((e4) => i3 = i3[n2(363)](e4 || [])), i3 && i3.length) {
          let t4 = q(e3);
          o2[t4] = i3;
        }
      }
      for (let e3 of [n2(382), `message-id`, n2(402), `references`]) {
        let r3 = t3.root.headers.find((t4) => t4.key === e3);
        if (r3 && r3.value) {
          let t4 = q(e3);
          o2[t4] = m(r3[n2(354)]);
        }
      }
      let s2 = t3.root.headers.find((e3) => e3.key === `date`);
      if (s2) {
        let e3 = new Date(s2.value);
        e3 = e3.toString() === `Invalid Date` ? s2.value : e3.toISOString(), o2.date = e3;
      }
      switch ((r2 = t3[n2(426)]) != null && r2[n2(324)] && (o2.html = t3.textContent.html), (i2 = t3[n2(426)]) != null && i2.plain && (o2.text = t3[n2(426)].plain), o2.attachments = t3.attachments, o2.headerLines = (t3.root.rawHeaderLines || [])[n2(321)]()[n2(378)](), t3.attachmentEncoding) {
        case `arraybuffer`:
          break;
        case `base64`:
          for (let e4 of o2.attachments || []) e4 != null && e4.content && (e4.content = W(e4.content), e4.encoding = n2(317));
          break;
        case `utf8`:
          let e3 = new TextDecoder(`utf8`);
          for (let t4 of o2.attachments || []) t4 != null && t4.content && (t4[n2(427)] = e3.decode(t4.content), t4.encoding = `utf8`);
          break;
        default:
          throw Error(`Unknown attachment encoding`);
      }
      return o2;
    })();
  }
};
export {
  U as addressParser,
  m as decodeWords,
  J as default
};
