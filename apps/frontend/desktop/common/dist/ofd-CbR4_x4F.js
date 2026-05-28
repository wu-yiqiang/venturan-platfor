import { a as e, o as t } from "./chunk-DeXYQlWK.js";
import { m as n, p as r } from "./index-D-g3WoLo.js";
import { t as i } from "./jszip.min-DwLxZD9E.js";
var a = X;
(function(e2, t2) {
  let n2 = X, r2 = e2();
  for (; ; ) try {
    if (-parseInt(n2(496)) / 1 * (parseInt(n2(502)) / 2) + parseInt(n2(514)) / 3 * (-parseInt(n2(556)) / 4) + parseInt(n2(574)) / 5 + -parseInt(n2(476)) / 6 * (-parseInt(n2(389)) / 7) + parseInt(n2(589)) / 8 + parseInt(n2(569)) / 9 * (parseInt(n2(483)) / 10) + parseInt(n2(366)) / 11 === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(se, 112351);
var o = (e2) => {
  let t2 = e2.split(` `), n2 = [], r2 = 0;
  for (; r2 < t2.length; ) {
    if (t2[r2] === `M` || t2[r2] === `S`) {
      let e3 = { type: `M`, x: parseFloat(t2[r2 + 1]), y: parseFloat(t2[r2 + 2]) };
      r2 += 3, n2.push(e3);
    }
    if (t2[r2] === `L`) {
      let e3 = { type: `L`, x: parseFloat(t2[r2 + 1]), y: parseFloat(t2[r2 + 2]) };
      r2 += 3, n2.push(e3);
    } else if (t2[r2] === `C`) n2.push({ type: `C`, x: 0, y: 0 }), r2++;
    else if (t2[r2] === `B`) {
      let e3 = { type: `B`, x1: parseFloat(t2[r2 + 1]), y1: parseFloat(t2[r2 + 2]), x2: parseFloat(t2[r2 + 3]), y2: parseFloat(t2[r2 + 4]), x3: parseFloat(t2[r2 + 5]), y3: parseFloat(t2[r2 + 6]) };
      r2 += 7, n2.push(e3);
    } else r2++;
  }
  return n2;
}, s = function(e2) {
  let t2 = [];
  for (let n2 = 0; n2 < e2.length; n2++) {
    let r2 = e2[n2];
    if (r2.type === `M` || r2.type === `L` || r2.type === `C`) {
      let e3 = 0, n3 = 0;
      e3 = r2.x, n3 = r2.y, r2.x = m(e3), r2.y = m(n3), t2.push(r2);
    } else if (r2.type === `B`) {
      let e3 = r2.x1, n3 = r2.y1, i2 = r2.x2, a2 = r2.y2, o2 = r2.x3, s2 = r2.y3, c2 = { type: `B`, x1: m(e3), y1: m(n3), x2: m(i2), y2: m(a2), x3: m(o2), y3: m(s2) };
      t2.push(c2);
    }
  }
  return t2;
}, c = function(e2, t2) {
  return e2 * t2 / 25.4;
}, l = 10, u = l, d = function(e2) {
  l = e2 > 5 ? 5 : e2;
}, f = function(e2) {
  u = e2 > 1 ? e2 : 1, u = u > l ? l : u;
}, p = function() {
  return u;
}, m = function(e2) {
  return c(e2, u * 25.4);
}, h = function(e2) {
  let t2 = X;
  if (e2.indexOf(`g`) === -1) {
    let t3 = [];
    for (let n2 of e2.split(` `)) t3.push(parseFloat(n2));
    return t3;
  } else {
    let n2 = e2.split(` `), r2 = false, i2 = false, a2 = 0, o2 = [];
    for (let e3 of n2) if (e3 === `g`) r2 = true;
    else {
      if (!e3 || e3[t2(473)]()[t2(344)] == 0) continue;
      if (r2) a2 = parseInt(e3), i2 = true, r2 = false;
      else if (i2) {
        for (let t3 = 0; t3 < a2; t3++) o2.push(parseFloat(e3));
        i2 = false;
      } else o2.push(parseFloat(e3));
    }
    return o2;
  }
}, g = function(e2) {
  let t2 = X, n2 = 0, r2 = 0, i2 = [];
  if (!e2) return i2;
  for (let a2 of e2) {
    if (!a2) continue;
    n2 = parseFloat(a2[`@_X`]), r2 = parseFloat(a2[`@_Y`]), isNaN(n2) && (n2 = 0), isNaN(r2) && (r2 = 0);
    let e3 = [], o2 = [];
    a2[t2(503)] && a2[`@_DeltaX`].length > 0 && (e3 = h(a2[`@_DeltaX`])), a2[`@_DeltaY`] && a2[`@_DeltaY`].length > 0 && (o2 = h(a2[`@_DeltaY`]));
    let s2 = a2[`#text`];
    if (s2) {
      s2 += ``, s2 = x(s2), s2 = s2.replace(/&#x20;/g, ` `);
      for (let a3 = 0; a3 < s2.length; a3++) {
        a3 > 0 && e3.length > 0 && (n2 += e3[a3 - 1]), a3 > 0 && o2.length > 0 && (r2 += o2[a3 - 1]);
        let c2 = s2[t2(479)](a3, a3 + 1), l2 = i2[t2(527)]((e4) => e4.y == m(r2));
        if (l2 && l2.length) l2[0].text += c2;
        else {
          let e4 = { x: m(n2), y: m(r2), text: c2 };
          i2[t2(571)](e4);
        }
      }
    }
  }
  return i2;
}, _ = function(e2) {
  return e2 && e2.indexOf(`/`) === 0 && (e2 = e2.replace(`/`, ``)), e2;
}, v = function(e2) {
  return !e2 && typeof e2 != `string` ? `` : e2.substring(e2.lastIndexOf(`.`) + 1);
}, y = /&\w+;|&#(\d+);/g, b = { "&lt;": `<`, "&gt;": `>`, "&amp;": `&`, "&nbsp;": ` `, "&quot;": `"`, "&copy;": ``, "&apos;": `'` }, x = function(e2) {
  let t2 = X;
  return e2 ?? (e2 = this[t2(474)]()), typeof e2 == `string` ? e2.replace(y, function(e3, n2) {
    let r2 = t2;
    var i2 = b[e3];
    return i2 ?? (i2 = isNaN(n2) ? e3 : String[r2(404)](n2 == 160 ? 32 : n2)), i2;
  }) : e2;
}, S = { \u6977\u4F53: a(425), kaiti: `\u6977\u4F53, KaiTi, Kai, simkai`, Kai: a(393), simsun: `SimSun, simsun, Songti SC`, \u5B8B\u4F53: `SimSun, simsun, Songti SC`, \u9ED1\u4F53: a(490), \u4EFF\u5B8B: `FangSong, STFangsong, simfang`, \u5C0F\u6807\u5B8B\u4F53: `sSun`, \u65B9\u6B63\u5C0F\u6807\u5B8B_gbk: `sSun`, \u4EFF\u5B8B_gb2312: `FangSong, STFangsong, simfang`, \u6977\u4F53_gb2312: `\u6977\u4F53, KaiTi, Kai, simkai`, couriernew: `Courier New`, "courier new": `Courier New` }, C = function(e2) {
  let t2 = a;
  S[e2.toLowerCase()] && (e2 = S[e2.toLowerCase()]);
  for (let n2 of Object[t2(423)](S)) if (e2[t2(398)]().indexOf(n2.toLowerCase()) != -1) return S[n2];
  return e2;
}, w = function(e2) {
  let t2 = a;
  if (e2) {
    let n2 = e2[t2(587)](` `);
    return { x: parseFloat(n2[0]), y: parseFloat(n2[1]), w: parseFloat(n2[2]), h: parseFloat(n2[3]) };
  } else return null;
}, T = function(e2) {
  return e2.split(` `);
}, E = function(e2) {
  let t2 = a;
  if (e2) {
    if (e2[t2(576)](`#`) !== -1) return e2 = e2.replace(/#/g, ``), e2 = e2.replace(/ /g, ``), e2 = `#` + e2.toString(), e2;
    let n2 = e2.split(` `);
    return t2(452) + n2[0] + `, ` + n2[1] + `, ` + n2[2] + `)`;
  } else return t2(427);
}, D = function(e2) {
  return { x: m(e2.x), y: m(e2.y), w: m(e2.w), h: m(e2.h) };
}, O = function(e2, t2, n2) {
  let r2 = a, i2 = n2[Object.keys(n2)[0]].json[`ofd:Area`], o2;
  if (i2) {
    let e3 = i2[`ofd:PhysicalBox`];
    if (e3) o2 = e3;
    else {
      let e4 = i2[r2(537)];
      if (e4) o2 = e4;
      else {
        let e5 = i2[`ofd:ContentBox`];
        e5 && (o2 = e5);
      }
    }
  } else {
    let e3 = t2[r2(532)][r2(369)], n3 = e3[`ofd:PhysicalBox`];
    if (n3) o2 = n3;
    else {
      let t3 = e3[`ofd:ApplicationBox`];
      if (t3) o2 = t3;
      else {
        let t4 = e3[`ofd:ContentBox`];
        t4 && (o2 = t4);
      }
    }
  }
  let s2 = o2.split(` `), c2 = ((e2 - 10) / parseFloat(s2[2])).toFixed(1);
  return d(c2), f(c2), o2 = w(o2), o2 = D(o2), o2;
}, k = function(e2, t2) {
  let n2 = a, r2 = t2[Object.keys(t2)[0]].json[`ofd:Area`], i2;
  if (r2) {
    let e3 = r2[`ofd:PhysicalBox`];
    if (e3) i2 = e3;
    else {
      let e4 = r2[n2(537)];
      if (e4) i2 = e4;
      else {
        let e5 = r2[n2(531)];
        e5 && (i2 = e5);
      }
    }
  } else {
    let t3 = e2[`ofd:CommonData`][`ofd:PageArea`], n3 = t3[`ofd:PhysicalBox`];
    if (n3) i2 = n3;
    else {
      let e3 = t3[`ofd:ApplicationBox`];
      if (e3) i2 = e3;
      else {
        let e4 = t3[`ofd:ContentBox`];
        e4 && (i2 = e4);
      }
    }
  }
  return i2 = w(i2), i2 = D(i2), i2;
}, A = function(e2, t2, n2, r2, i2, o2) {
  let s2 = a, c2 = [], l2 = e2[t2[s2(467)]].json[`ofd:Content`][`ofd:Layer`];
  c2 = c2.concat(l2);
  for (let e3 of c2) e3 && P(n2, r2, i2, o2, e3, false);
}, j = function(e2, t2, n2, r2, i2, o2) {
  let s2 = a;
  var c2;
  let l2 = Object.keys(t2)[0], u2 = t2[l2][s2(464)][`ofd:Template`];
  Array.isArray(u2) ? u2[s2(578)]((t3) => {
    t3 && A(n2, t3, e2, r2, i2, o2);
  }) : u2 && A(n2, u2, e2, r2, i2, o2);
  let d2 = (c2 = t2[l2]) == null || (c2 = c2[s2(464)]) == null || (c2 = c2[`ofd:Content`]) == null ? void 0 : c2[`ofd:Layer`], f2 = [];
  f2 = f2[s2(594)](d2);
  for (let t3 of f2) t3 && P(e2, r2, i2, o2, t3, false);
  if (t2[l2][s2(414)]) {
    for (let n3 of t2[l2].stamp) if (n3[s2(507)] === `ofd`) N(e2, n3.obj.pages, n3.obj.tpls, true, n3[s2(414)].stampAnnot, n3[s2(381)].fontResObj, n3.obj[s2(510)], n3.obj.multiMediaResObj, n3[s2(414)].sealObj.SES_Signature, n3.stamp.signedInfo);
    else if (n3.type === s2(545)) {
      let t3 = D(n3[s2(381)].boundary), r3 = Array.isArray(n3.stamp.stampAnnot) ? n3.stamp.stampAnnot[0].pfIndex : n3.stamp.stampAnnot.pfIndex, i3 = L(e2.style[s2(349)], e2.style.height, n3.obj.img, t3, n3.obj.clip, true, n3.stamp.sealObj.SES_Signature, n3.stamp[s2(494)], r3);
      e2.appendChild(i3);
    }
  }
  if (t2[l2].annotation) for (let n3 of t2[l2][s2(547)]) M(e2, n3, r2, i2, o2);
}, M = function(e2, t2, n2, r2, i2) {
  var _a;
  let o2 = a, s2 = document.createElement(`div`);
  s2.setAttribute(`style`, `overflow: hidden;z-index:` + t2.pfIndex + `;position:relative;`);
  let c2 = (_a = t2.appearance) == null ? void 0 : _a[o2(403)];
  if (c2) {
    let e3 = D(w(c2));
    s2.setAttribute(`style`, o2(410) + t2.pfIndex + `;position:absolute; left: ` + e3.x + `px; top: ` + e3.y + `px; width: ` + e3.w + `px; height: ` + e3.h + `px`);
  }
  let l2 = t2.appearance;
  P(s2, n2, r2, i2, l2, false), e2.appendChild(s2);
}, N = function(e2, t2, n2, r2, i2, o2, s2, c2, l2, u2) {
  let d2 = a;
  for (let a2 of t2) {
    let t3 = Object.keys(a2)[0], f2 = { x: 0, y: 0, w: 0, h: 0 };
    r2 && i2 && (f2 = i2.boundary);
    let p2 = D(f2), m2 = document.createElement(d2(362));
    m2.setAttribute(d2(347), `seal_img_div`), m2.setAttribute(d2(551), `cursor: pointer; position:relative; left: ` + p2.x + d2(536) + p2.y + `px; width: ` + p2.w + `px; height: ` + p2.h + `px`), m2.setAttribute(`data-ses-signature`, `` + JSON.stringify(l2)), m2.setAttribute(d2(498), `` + JSON.stringify(u2));
    let h2 = a2[t3].json[d2(435)];
    if (h2) {
      let e3 = n2[h2[d2(467)]][d2(464)][`ofd:Content`][`ofd:Layer`], t4 = [];
      t4 = t4.concat(e3);
      for (let e4 of t4) e4 && P(m2, o2, s2, c2, e4, r2);
    }
    let g2 = a2[t3].json[`ofd:Content`][`ofd:Layer`], _2 = [];
    _2 = _2.concat(g2);
    for (let e3 of _2) e3 && P(m2, o2, s2, c2, e3, r2);
    e2.appendChild(m2);
  }
}, P = function(e2, t2, n2, r2, i2, o2) {
  let s2 = a, c2 = null, l2 = null, u2 = m(0.353), d2 = i2 == null ? void 0 : i2[`@_DrawParam`];
  d2 && Object.keys(n2)[s2(344)] > 0 && n2[d2] && (n2[d2][s2(515)] && (d2 = n2[d2].relative, n2[d2].FillColor && (c2 = E(n2[d2].FillColor)), n2[d2].StrokeColor && (l2 = E(n2[d2].StrokeColor)), n2[d2].LineWidth && (u2 = m(n2[d2][s2(420)]))), n2[d2].FillColor && (c2 = E(n2[d2].FillColor)), n2[d2].StrokeColor && (l2 = E(n2[d2].StrokeColor)), n2[d2].LineWidth && (u2 = m(n2[d2][s2(420)])));
  let f2 = i2 == null ? void 0 : i2[`ofd:ImageObject`], p2 = [];
  p2 = p2.concat(f2);
  for (let t3 of p2) if (t3) {
    let n3 = F(e2.style.width, e2[s2(551)].height, r2, t3);
    e2.appendChild(n3);
  }
  let h2 = i2 == null ? void 0 : i2[`ofd:PathObject`], g2 = [];
  g2 = g2.concat(h2);
  for (let t3 of g2) if (t3) {
    let r3 = z(n2, t3, c2, l2, u2, o2);
    e2.appendChild(r3);
  }
  let _2 = i2 == null ? void 0 : i2[`ofd:TextObject`], v2 = [];
  v2 = v2.concat(_2);
  for (let n3 of v2) if (n3) {
    let r3 = R(t2, n3, c2, l2);
    e2[s2(407)](r3);
  }
}, F = function(e2, t2, n2, r2) {
  let i2 = a, o2 = w(r2[`@_Boundary`]);
  o2 = D(o2);
  let s2 = r2[`@_ResourceID`];
  if (n2[s2].format === `gbig2`) {
    let e3 = n2[s2].img, t3 = n2[s2].width, i3 = n2[s2].height;
    return I(e3, t3, i3, o2, r2.pfIndex);
  } else return L(e2, t2, n2[s2][i2(453)], o2, false, false, null, null, r2[i2(355)]);
}, I = function(e2, t2, n2, r2, i2) {
  let o2 = a, s2 = new Uint8ClampedArray(4 * t2 * n2);
  for (var c2 = 0; c2 < e2.length; c2++) s2[4 * c2] = e2[c2], s2[4 * c2 + 1] = e2[c2], s2[4 * c2 + 2] = e2[c2], s2[4 * c2 + 3] = 255;
  let l2 = new ImageData(s2, t2, n2), u2 = document.createElement(`canvas`);
  return u2.width = t2, u2.height = n2, u2.getContext(`2d`).putImageData(l2, 0, 0), u2.setAttribute(o2(551), `left: ` + r2.x + `px; top: ` + r2.y + `px; width: ` + r2.w + `px; height: ` + r2.h + `px;z-index: ` + i2), u2[o2(551)].position = `absolute`, u2;
}, L = function(e2, t2, n2, r2, i2, o2, s2, c2, l2) {
  let u2 = a, d2 = document[u2(469)](`div`);
  o2 && (d2.setAttribute(`name`, `seal_img_div`), d2.setAttribute(`data-ses-signature`, `` + JSON.stringify(s2)), d2.setAttribute(`data-signed-info`, `` + JSON[u2(516)](c2)));
  let f2 = document[u2(469)](u2(453));
  f2.src = n2, f2[u2(517)](`width`, `100%`), f2[u2(517)](`height`, u2(463)), d2.appendChild(f2);
  let p2 = parseFloat(e2.replace(`px`, ``)), m2 = parseFloat(t2[u2(495)](`px`, ``)), h2 = r2.w > p2 ? p2 : r2.w, g2 = r2.h > m2 ? m2 : r2.h, _2 = ``;
  return i2 && (i2 = D(i2), _2 = `clip: rect(` + i2.y + `px, ` + (i2.w + i2.x) + `px, ` + (i2.h + i2.y) + `px, ` + i2.x + u2(373)), d2.setAttribute(u2(551), `cursor: pointer; overflow: hidden; position: absolute; left: ` + (_2 ? r2.x : r2.x < 0 ? 0 : r2.x) + `px; top: ` + (_2 ? r2.y : r2.y < 0 ? 0 : r2.y) + `px; width: ` + h2 + `px; height: ` + g2 + `px; ` + _2 + `;z-index: ` + l2), d2;
}, R = function(e2, t2, n2, r2) {
  let i2 = a, o2 = 1, s2 = w(t2[`@_Boundary`]);
  s2 = D(s2);
  let c2 = t2[`@_CTM`], l2 = t2[`@_HScale`], u2 = t2[`@_Font`], d2 = t2[`@_Weight`], f2 = m(parseFloat(t2[`@_Size`])), p2 = [];
  p2 = p2.concat(t2[`ofd:TextCode`]);
  let h2 = g(p2), _2 = document.createElementNS(`http://www.w3.org/2000/svg`, `svg`);
  _2.setAttribute(`version`, `1.1`);
  let v2 = t2[i2(442)];
  if (v2) {
    n2 = E(v2[i2(564)]);
    let e3 = v2[`@_Alpha`];
    e3 && (o2 = e3 > 1 ? e3 / 255 : e3);
  }
  for (let t3 of h2) if (t3 && !isNaN(t3.x)) {
    let a2 = document.createElementNS(`http://www.w3.org/2000/svg`, `text`);
    if (a2[i2(517)](`x`, t3.x), a2.setAttribute(`y`, t3.y), a2.innerHTML = t3.text, c2) {
      let e3 = T(c2);
      a2.setAttribute(`transform`, `matrix(` + e3[0] + ` ` + e3[1] + ` ` + e3[2] + ` ` + e3[3] + ` ` + m(e3[4]) + ` ` + m(e3[5]) + `)`);
    }
    l2 && a2[i2(517)](`transform`, `matrix(` + l2 + `, 0, 0, 1, ` + (1 - l2) * t3.x + `, 0)`), a2[i2(517)](`fill`, r2), a2.setAttribute(i2(528), n2), a2.setAttribute(`fill-opacity`, o2), a2.setAttribute(`style`, `font-weight: ` + d2 + `;font-size:` + f2 + `px;font-family: ` + C(e2[u2]) + `;`), _2.appendChild(a2);
  }
  let y2 = s2.w, b2 = s2.h, x2 = s2.x, S2 = s2.y;
  return _2.setAttribute(`style`, `overflow:visible;position:absolute;width:` + y2 + `px;height:` + b2 + `px;left:` + x2 + i2(368) + S2 + i2(500) + t2.pfIndex), _2;
}, z = function(e2, t2, n2, r2, i2, c2) {
  let l2 = a, u2 = w(t2[`@_Boundary`]);
  u2 = D(u2);
  let d2 = t2[`@_LineWidth`], f2 = t2[`ofd:AbbreviatedData`], p2 = s(o(f2)), h2 = t2[`@_CTM`], g2 = document.createElementNS(`http://www.w3.org/2000/svg`, l2(489));
  g2[l2(517)](`version`, `1.1`);
  let _2 = document.createElementNS(`http://www.w3.org/2000/svg`, `path`);
  d2 && (i2 = m(d2));
  let v2 = t2[`@_DrawParam`];
  if (v2 && (d2 = e2[v2].LineWidth, d2 && (i2 = m(d2))), h2) {
    let e3 = T(h2);
    _2.setAttribute(`transform`, `matrix(` + e3[0] + ` ` + e3[1] + ` ` + e3[2] + ` ` + e3[3] + ` ` + m(e3[4]) + ` ` + m(e3[5]) + `)`);
  }
  let y2 = ``, b2 = t2[`ofd:StrokeColor`];
  b2 && (r2 = E(b2[`@_Value`]));
  let x2 = `fill: none;`, S2 = t2[`ofd:FillColor`];
  S2 && (n2 = E(S2[`@_Value`])), i2 > 0 && !r2 && (r2 = n2, r2 || (r2 = `rgb(0, 0, 0)`)), y2 = `stroke:` + r2 + `;stroke-width:` + i2 + l2(429), t2[`@_Stroke`] == `false` && (y2 = ``), t2[`@_Fill`] != `false` && (x2 = `fill:` + (c2 ? `none` : n2 || `none`) + `;`), _2.setAttribute(`style`, y2 + `;` + x2);
  let C2 = ``;
  for (let e3 of p2) e3[l2(507)] === `M` ? C2 += `M` + e3.x + ` ` + e3.y + ` ` : e3.type === `L` ? C2 += `L` + e3.x + ` ` + e3.y + ` ` : e3.type === `B` ? C2 += `C` + e3.x1 + ` ` + e3.y1 + ` ` + e3.x2 + ` ` + e3.y2 + ` ` + e3.x3 + ` ` + e3.y3 + ` ` : e3[l2(507)] === `C` && (C2 += `Z`);
  _2.setAttribute(`d`, C2), g2.appendChild(_2);
  let O2 = c2 ? u2.w : Math.ceil(u2.w), k2 = c2 ? u2.h : Math.ceil(u2.h), A2 = u2.x, j2 = u2.y;
  return g2.setAttribute(`style`, `overflow:visible;position:absolute;width:` + O2 + `px;height:` + k2 + l2(471) + A2 + l2(368) + j2 + `px;z-index:` + t2.pfIndex), g2;
};
n(), Array.prototype.pipeline = (function() {
  var e2 = r(function* (e3) {
    if (this === null || this === void 0) throw TypeError(`Array.prototype.pipeline called on null or undefined`);
    if (typeof e3 != `function`) throw TypeError(e3 + ` is not a function`);
    var t2, n2, r2 = this.length >>> 0;
    for (t2 = 0; r2 > t2; ++t2) n2 = yield e3(n2, this[t2], t2, this);
    return n2;
  });
  return function(t2) {
    return e2.apply(this, arguments);
  };
})();
var B = function(...e2) {
  return e2.pipeline((e3, t2) => t2.call(this, e3));
}, V = e((e2) => {
  let t2 = a;
  var n2 = `:A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD`;
  n2 + ``;
  var r2 = `[` + n2 + `][:A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*`, i2 = RegExp(`^` + r2 + `$`);
  e2.isExist = function(e3) {
    return e3 !== void 0;
  }, e2.isEmptyObject = function(e3) {
    return Object.keys(e3).length === 0;
  }, e2.merge = function(e3, t3, n3) {
    let r3 = X;
    if (t3) {
      let i3 = Object.keys(t3), a2 = i3[r3(344)];
      for (let o2 = 0; o2 < a2; o2++) n3 === r3(596) ? e3[i3[o2]] = [t3[i3[o2]]] : e3[i3[o2]] = t3[i3[o2]];
    }
  }, e2.getValue = function(t3) {
    return e2.isExist(t3) ? t3 : ``;
  }, e2.buildOptions = function(e3, t3, n3) {
    var r3 = {};
    if (!e3) return t3;
    for (let i3 = 0; i3 < n3.length; i3++) e3[n3[i3]] === void 0 ? r3[n3[i3]] = t3[n3[i3]] : r3[n3[i3]] = e3[n3[i3]];
    return r3;
  }, e2[t2(449)] = function(e3) {
    return i2.exec(e3) != null;
  }, e2.getAllMatches = function(e3, t3) {
    let n3 = [], r3 = t3.exec(e3);
    for (; r3; ) {
      let i3 = [], a2 = r3.length;
      for (let e4 = 0; e4 < a2; e4++) i3.push(r3[e4]);
      n3.push(i3), r3 = t3.exec(e3);
    }
    return n3;
  }, e2.nameRegexp = r2;
}), H = e((e2) => {
  var t2 = V(), n2 = function(e3, r2) {
    let i2 = X, a2 = {};
    if ((!e3[i2(482)] || t2.isEmptyObject(e3.child)) && (!e3[i2(371)] || t2.isEmptyObject(e3.attrsMap))) return t2.isExist(e3[i2(575)]) ? e3[i2(575)] : ``;
    t2[i2(361)](e3.val) && (typeof e3.val == `string` && (e3.val === `` || e3.val === r2.cdataPositionChar) || (r2.arrayMode === i2(596) ? a2[r2[i2(565)]] = [e3.val] : a2[r2.textNodeName] = e3.val)), t2[i2(386)](a2, e3[i2(371)], r2.arrayMode);
    let o2 = Object.keys(e3.child);
    for (let t3 = 0; t3 < o2.length; t3++) {
      var s2 = o2[t3];
      if (e3.child[s2] && e3[i2(482)][s2][i2(344)] > 1) for (var c2 in a2[s2] = [], e3[i2(482)][s2]) global.xmlParseFlag = global.xmlParseFlag + 1, a2[s2].push(n2(e3.child[s2][c2], r2));
      else if (r2.arrayMode === true) {
        global[i2(432)] = global.xmlParseFlag + 1;
        let t4 = n2(e3.child[s2][0], r2);
        typeof t4 == `object` ? a2[s2] = [t4] : a2[s2] = t4;
      } else r2.arrayMode === `strict` ? (global.xmlParseFlag = global.xmlParseFlag + 1, a2[s2] = [n2(e3.child[s2][0], r2)]) : (global[i2(432)] = global[i2(432)] + 1, a2[s2] = n2(e3.child[s2][0], r2));
    }
    return a2;
  };
  e2.convertToJson = n2;
}), U = e((e2, t2) => {
  t2.exports = function(e3, t3, n2) {
    let r2 = X;
    this[r2(360)] = e3, this.parent = t3, this.child = {}, this.attrsMap = {}, this.val = n2, this.addChild = function(e4) {
      let t4 = r2;
      Array.isArray(this[t4(482)][e4.tagname]) ? this.child[e4.tagname][t4(571)](e4) : this.child[e4.tagname] = [e4];
    };
  };
}), W = e((e2) => {
  let t2 = a;
  var n2 = V(), r2 = V().buildOptions, i2 = U();
  `<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)`.replace(/NAME/g, n2.nameRegexp), !Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt), !Number[t2(543)] && window.parseFloat && (Number[t2(543)] = window.parseFloat);
  var o2 = { attributeNamePrefix: `@_`, attrNodeName: false, textNodeName: `#text`, ignoreAttributes: true, ignoreNameSpace: false, allowBooleanAttributes: false, parseNodeValue: true, parseAttributeValue: false, arrayMode: false, trimValues: true, cdataTagName: false, cdataPositionChar: `\\c`, tagValueProcessor: function(e3, t3) {
    return e3;
  }, attrValueProcessor: function(e3, t3) {
    return e3;
  }, stopNodes: [] };
  e2.defaultOptions = o2;
  var s2 = [t2(581), `attrNodeName`, `textNodeName`, `ignoreAttributes`, t2(439), t2(374), t2(387), t2(424), `arrayMode`, t2(538), `cdataTagName`, `cdataPositionChar`, `tagValueProcessor`, `attrValueProcessor`, `parseTrueNumberOnly`, `stopNodes`];
  e2.props = s2;
  function c2(e3, n3, r3) {
    let i3 = t2;
    return n3 && (n3 = (r3.trimValues && (n3 = n3.trim()), n3 = r3.tagValueProcessor(n3, e3), u2(n3, r3[i3(387)], r3.parseTrueNumberOnly))), n3;
  }
  function l2(e3, n3) {
    let r3 = t2;
    if (n3.ignoreNameSpace) {
      let t3 = e3.split(`:`), n4 = e3[r3(557)](0) === `/` ? `/` : ``;
      if (t3[0] === `xmlns`) return ``;
      t3.length === 2 && (e3 = n4 + t3[1]);
    }
    return e3;
  }
  function u2(e3, r3, i3) {
    let a2 = t2;
    if (r3 && typeof e3 == `string`) {
      let t3;
      return e3[a2(473)]() === `` || isNaN(e3) ? t3 = e3 === `true` ? true : e3 === `false` ? false : e3 : (e3.indexOf(`0x`) === -1 ? e3.indexOf(`.`) === -1 ? t3 = Number[a2(567)](e3, 10) : (t3 = Number.parseFloat(e3), e3 = e3[a2(495)](/\.?0+$/, ``)) : t3 = Number[a2(567)](e3, 16), i3 && (t3 = String(t3) === e3 ? t3 : e3)), t3;
    } else if (n2.isExist(e3)) return e3;
    else return ``;
  }
  var d2 = RegExp(`([^\\s=]+)\\s*(=\\s*(['"])(.*?)\\3)?`, `g`);
  function f2(e3, r3) {
    let i3 = t2;
    if (!r3.ignoreAttributes && typeof e3 == `string`) {
      e3 = e3.replace(/\r?\n/g, ` `);
      let t3 = n2.getAllMatches(e3, d2), a2 = t3[i3(344)], o3 = {};
      for (let e4 = 0; e4 < a2; e4++) {
        let n3 = l2(t3[e4][1], r3);
        n3.length && (t3[e4][4] === void 0 ? r3.allowBooleanAttributes && (o3[r3.attributeNamePrefix + n3] = true) : (r3.trimValues && (t3[e4][4] = t3[e4][4].trim()), t3[e4][4] = r3.attrValueProcessor(t3[e4][4], n3), o3[r3.attributeNamePrefix + n3] = u2(t3[e4][4], r3[i3(424)], r3[i3(477)])));
      }
      if (!Object.keys(o3).length) return;
      if (r3.attrNodeName) {
        let e4 = {};
        return e4[r3.attrNodeName] = o3, e4;
      }
      return o3;
    }
  }
  var p2 = function(e3, a2) {
    let l3 = t2;
    e3 = e3.replace(/\r\n?/g, `
`), a2 = r2(a2, o2, s2);
    let u3 = new i2(l3(481)), d3 = u3, p3 = ``;
    for (let t3 = 0; t3 < e3.length; t3++) if (e3[t3] === `<`) if (e3[t3 + 1] === `/`) {
      let r3 = h2(e3, `>`, t3, `Closing Tag is not closed.`), i3 = e3.substring(t3 + 2, r3).trim();
      if (a2.ignoreNameSpace) {
        let e4 = i3.indexOf(`:`);
        e4 !== -1 && (i3 = i3.substr(e4 + 1));
      }
      d3 && (d3.val ? d3.val = n2[l3(405)](d3.val) + `` + c2(i3, p3, a2) : d3.val = c2(i3, p3, a2)), a2.stopNodes.length && a2.stopNodes.includes(d3[l3(360)]) && (d3.child = [], d3.attrsMap ?? (d3[l3(371)] = {}), d3[l3(575)] = e3.substr(d3.startIndex + 1, t3 - d3.startIndex - 1)), d3 = d3.parent, p3 = ``, t3 = r3;
    } else if (e3[t3 + 1] === `?`) t3 = h2(e3, `?>`, t3, l3(392));
    else if (e3[l3(468)](t3 + 1, 3) === `!--`) t3 = h2(e3, `-->`, t3, l3(523));
    else if (e3[l3(468)](t3 + 1, 2) === `!D`) {
      let n3 = h2(e3, `>`, t3, `DOCTYPE is not closed.`);
      t3 = e3.substring(t3, n3)[l3(576)](`[`) >= 0 ? e3.indexOf(`]>`, t3) + 1 : n3;
    } else if (e3.substr(t3 + 1, 2) === `![`) {
      let r3 = h2(e3, l3(379), t3, `CDATA is not closed.`) - 2, o3 = e3.substring(t3 + 9, r3);
      if (p3 && (p3 = (d3.val = n2.getValue(d3.val) + `` + c2(d3.tagname, p3, a2), ``)), a2.cdataTagName) {
        let e4 = new i2(a2.cdataTagName, d3, o3);
        d3.addChild(e4), d3.val = n2.getValue(d3.val) + a2.cdataPositionChar, o3 && (e4.val = o3);
      } else d3.val = (d3.val || ``) + (o3 || ``);
      t3 = r3 + 2;
    } else {
      let r3 = m2(e3, t3 + 1), o3 = r3.data, s3 = r3[l3(592)], u4 = o3.indexOf(` `), h3 = o3;
      if (u4 !== -1 && (h3 = o3.substr(0, u4).replace(/\s\s*$/, ``), o3 = o3[l3(468)](u4 + 1)), a2.ignoreNameSpace) {
        let e4 = h3.indexOf(`:`);
        e4 !== -1 && (h3 = h3[l3(468)](e4 + 1));
      }
      if (d3 && p3 && d3.tagname !== `!xml` && (d3[l3(575)] = n2[l3(405)](d3[l3(575)]) + `` + c2(d3.tagname, p3, a2)), o3.length > 0 && o3.lastIndexOf(`/`) === o3.length - 1) {
        h3[h3.length - 1] === `/` ? (h3 = h3.substr(0, h3.length - 1), o3 = h3) : o3 = o3[l3(468)](0, o3.length - 1);
        let e4 = new i2(h3, d3, ``);
        h3 !== o3 && (e4.attrsMap = f2(o3, a2)), d3.addChild(e4);
      } else {
        let e4 = new i2(h3, d3);
        a2.stopNodes.length && a2.stopNodes.includes(e4.tagname) && (e4.startIndex = s3), h3 !== o3 && (e4[l3(371)] = f2(o3, a2)), d3.addChild(e4), d3 = e4;
      }
      p3 = ``, t3 = s3;
    }
    else p3 += e3[t3];
    return u3;
  };
  function m2(e3, t3) {
    let n3, r3 = ``;
    for (let i3 = t3; i3 < e3.length; i3++) {
      let t4 = e3[i3];
      if (n3) t4 === n3 && (n3 = ``);
      else if (t4 === `"` || t4 === `'`) n3 = t4;
      else if (t4 === `>`) return { data: r3, index: i3 };
      else t4 === `	` && (t4 = ` `);
      r3 += t4;
    }
  }
  function h2(e3, t3, n3, r3) {
    let i3 = e3.indexOf(t3, n3);
    if (i3 === -1) throw Error(r3);
    return i3 + t3.length - 1;
  }
  e2.getTraversalObj = p2;
}), G = e((e2) => {
  let t2 = a;
  var n2 = V(), r2 = { allowBooleanAttributes: false }, i2 = [t2(374)];
  e2.validate = function(e3, a2) {
    let c3 = t2;
    a2 = n2[c3(348)](a2, r2, i2);
    let l3 = [], d3 = false, p3 = false;
    e3[0] === `\uFEFF` && (e3 = e3.substr(1));
    for (let t3 = 0; t3 < e3.length; t3++) if (e3[t3] === `<`) if (t3++, e3[t3] === `?`) {
      if (t3 = o2(e3, ++t3), t3.err) return t3;
    } else if (e3[t3] === `!`) {
      t3 = s2(e3, t3);
      continue;
    } else {
      let n3 = false;
      e3[t3] === `/` && (n3 = true, t3++);
      let r3 = ``;
      for (; t3 < e3.length && e3[t3] !== `>` && e3[t3] !== ` ` && e3[t3] !== `	` && e3[t3] !== `
` && e3[t3] !== `\r`; t3++) r3 += e3[t3];
      if (r3 = r3.trim(), r3[r3.length - 1] === `/` && (r3 = r3[c3(479)](0, r3.length - 1), t3--), !_2(r3)) {
        let n4;
        return n4 = r3.trim().length === 0 ? `There is an unnecessary space between tag name and backward slash '</ ..'.` : `Tag '` + r3 + c3(409), h2(`InvalidTag`, n4, v2(e3, t3));
      }
      let i3 = u2(e3, t3);
      if (i3 === false) return h2(`InvalidAttr`, `Attributes for '` + r3 + c3(480), v2(e3, t3));
      let o3 = i3[c3(353)];
      if (t3 = i3[c3(592)], o3[o3.length - 1] === `/`) {
        o3 = o3[c3(479)](0, o3.length - 1);
        let n4 = f2(o3, a2);
        if (n4 === true) d3 = true;
        else return h2(n4.err.code, n4.err.msg, v2(e3, t3 - o3.length + n4.err.line));
      } else if (n3) {
        if (!i3.tagClosed) return h2(`InvalidTag`, `Closing tag '` + r3 + `' doesn't have proper closing.`, v2(e3, t3));
        if (o3[c3(473)]().length > 0) return h2(`InvalidTag`, `Closing tag '` + r3 + `' can't have attributes or invalid starting.`, v2(e3, t3));
        {
          let n4 = l3.pop();
          if (r3 !== n4) return h2(`InvalidTag`, c3(440) + n4 + `' is expected inplace of '` + r3 + `'.`, v2(e3, t3));
          l3.length == 0 && (p3 = true);
        }
      } else {
        let n4 = f2(o3, a2);
        if (n4 !== true) return h2(n4[c3(413)].code, n4.err.msg, v2(e3, t3 - o3.length + n4[c3(413)].line));
        if (p3 === true) return h2(c3(428), `Multiple possible root nodes found.`, v2(e3, t3));
        l3.push(r3), d3 = true;
      }
      for (t3++; t3 < e3.length; t3++) if (e3[t3] === `<`) if (e3[t3 + 1] === `!`) {
        t3++, t3 = s2(e3, t3);
        continue;
      } else break;
      else if (e3[t3] === `&`) {
        let n4 = m2(e3, t3);
        if (n4 == -1) return h2(c3(394), c3(401), v2(e3, t3));
        t3 = n4;
      }
      e3[t3] === `<` && t3--;
    }
    else {
      if (e3[t3] === ` ` || e3[t3] === `	` || e3[t3] === `
` || e3[t3] === `\r`) continue;
      return h2(`InvalidChar`, `char '` + e3[t3] + c3(343), v2(e3, t3));
    }
    return d3 ? l3.length > 0 ? h2(`InvalidXml`, `Invalid '` + JSON[c3(516)](l3, null, 4).replace(/\r?\n/g, ``) + `' found.`, 1) : true : h2(c3(428), c3(534), 1);
  };
  function o2(e3, n3) {
    let r3 = t2;
    for (var i3 = n3; n3 < e3.length; n3++) if (e3[n3] == `?` || e3[n3] == ` `) {
      var a2 = e3.substr(i3, n3 - i3);
      if (n3 > 5 && a2 === `xml`) return h2(r3(428), `XML declaration allowed only at the start of the document.`, v2(e3, n3));
      if (e3[n3] == `?` && e3[n3 + 1] == `>`) {
        n3++;
        break;
      } else continue;
    }
    return n3;
  }
  function s2(e3, t3) {
    if (e3.length > t3 + 5 && e3[t3 + 1] === `-` && e3[t3 + 2] === `-`) {
      for (t3 += 3; t3 < e3.length; t3++) if (e3[t3] === `-` && e3[t3 + 1] === `-` && e3[t3 + 2] === `>`) {
        t3 += 2;
        break;
      }
    } else if (e3.length > t3 + 8 && e3[t3 + 1] === `D` && e3[t3 + 2] === `O` && e3[t3 + 3] === `C` && e3[t3 + 4] === `T` && e3[t3 + 5] === `Y` && e3[t3 + 6] === `P` && e3[t3 + 7] === `E`) {
      let n3 = 1;
      for (t3 += 8; t3 < e3.length; t3++) if (e3[t3] === `<`) n3++;
      else if (e3[t3] === `>` && (n3--, n3 === 0)) break;
    } else if (e3.length > t3 + 9 && e3[t3 + 1] === `[` && e3[t3 + 2] === `C` && e3[t3 + 3] === `D` && e3[t3 + 4] === `A` && e3[t3 + 5] === `T` && e3[t3 + 6] === `A` && e3[t3 + 7] === `[`) {
      for (t3 += 8; t3 < e3.length; t3++) if (e3[t3] === `]` && e3[t3 + 1] === `]` && e3[t3 + 2] === `>`) {
        t3 += 2;
        break;
      }
    }
    return t3;
  }
  var c2 = `"`, l2 = `'`;
  function u2(e3, t3) {
    let n3 = ``, r3 = ``, i3 = false;
    for (; t3 < e3.length; t3++) {
      if (e3[t3] === c2 || e3[t3] === l2) if (r3 === ``) r3 = e3[t3];
      else if (r3 !== e3[t3]) continue;
      else r3 = ``;
      else if (e3[t3] === `>` && r3 === ``) {
        i3 = true;
        break;
      }
      n3 += e3[t3];
    }
    return r3 === `` ? { value: n3, index: t3, tagClosed: i3 } : false;
  }
  var d2 = RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, `g`);
  function f2(e3, r3) {
    let i3 = t2, a2 = n2.getAllMatches(e3, d2), o3 = {};
    for (let t3 = 0; t3 < a2.length; t3++) {
      if (a2[t3][1].length === 0) return h2(`InvalidAttr`, i3(443) + a2[t3][2] + `' has no space in starting.`, y2(e3, a2[t3][0]));
      if (a2[t3][3] === void 0 && !r3.allowBooleanAttributes) return h2(`InvalidAttr`, `boolean attribute '` + a2[t3][2] + `' is not allowed.`, y2(e3, a2[t3][0]));
      let n3 = a2[t3][2];
      if (!g2(n3)) return h2(`InvalidAttr`, `Attribute '` + n3 + `' is an invalid name.`, y2(e3, a2[t3][0]));
      if (!o3.hasOwnProperty(n3)) o3[n3] = 1;
      else return h2(i3(365), `Attribute '` + n3 + `' is repeated.`, y2(e3, a2[t3][0]));
    }
    return true;
  }
  function p2(e3, t3) {
    let n3 = /\d/;
    for (e3[t3] === `x` && (t3++, n3 = /[\da-fA-F]/); t3 < e3.length; t3++) {
      if (e3[t3] === `;`) return t3;
      if (!e3[t3].match(n3)) break;
    }
    return -1;
  }
  function m2(e3, n3) {
    let r3 = t2;
    if (n3++, e3[n3] === `;`) return -1;
    if (e3[n3] === `#`) return n3++, p2(e3, n3);
    let i3 = 0;
    for (; n3 < e3.length; n3++, i3++) if (!(e3[n3][r3(367)](/\w/) && i3 < 20)) {
      if (e3[n3] === `;`) break;
      return -1;
    }
    return n3;
  }
  function h2(e3, t3, n3) {
    return { err: { code: e3, msg: t3, line: n3 } };
  }
  function g2(e3) {
    return n2.isName(e3);
  }
  function _2(e3) {
    return n2[t2(449)](e3);
  }
  function v2(e3, n3) {
    let r3 = t2;
    return e3.substring(0, n3)[r3(587)](/\r?\n/).length;
  }
  function y2(e3, t3) {
    return e3.indexOf(t3) + t3.length;
  }
}), K = e((e2) => {
  let t2 = a;
  var n2 = function(e3) {
    return String[X(404)](e3);
  }, r2 = { nilChar: n2(176), missingChar: n2(201), nilPremitive: n2(175), missingPremitive: n2(200), emptyChar: n2(178), emptyValue: n2(177), boundryChar: n2(179), objStart: n2(198), arrStart: n2(204), arrayEnd: n2(185) }, i2 = [r2.nilChar, r2[t2(377)], r2.missingChar, r2.missingPremitive, r2.boundryChar, r2.emptyChar, r2[t2(540)], r2.arrayEnd, r2.objStart, r2.arrStart], o2 = function(e3, n3, i3) {
    let a2 = t2;
    if (typeof n3 == `string`) return e3 && e3[0] && e3[0].val !== void 0 ? s2(e3[0].val, n3) : s2(e3, n3);
    {
      let t3 = u2(e3);
      if (t3 === true) {
        let t4 = ``;
        if (Array.isArray(n3)) {
          t4 += r2.arrStart;
          let l3 = n3[0], u3 = e3.length;
          if (typeof l3 == `string`) for (let n4 = 0; n4 < u3; n4++) {
            let r3 = s2(e3[n4].val, l3);
            t4 = c2(t4, r3);
          }
          else for (let n4 = 0; n4 < u3; n4++) {
            let r3 = o2(e3[n4], l3, i3);
            t4 = c2(t4, r3);
          }
          t4 += r2[a2(472)];
        } else {
          t4 += r2.objStart;
          let s3 = Object[a2(423)](n3);
          Array.isArray(e3) && (e3 = e3[0]);
          for (let r3 in s3) {
            let l3 = s3[r3], u3;
            u3 = !i3[a2(488)] && e3.attrsMap && e3.attrsMap[l3] ? o2(e3.attrsMap[l3], n3[l3], i3) : l3 === i3.textNodeName ? o2(e3[a2(575)], n3[l3], i3) : o2(e3.child[l3], n3[l3], i3), t4 = c2(t4, u3);
          }
        }
        return t4;
      } else return t3;
    }
  }, s2 = function(e3) {
    switch (e3) {
      case void 0:
        return r2.missingPremitive;
      case null:
        return r2.nilPremitive;
      case ``:
        return r2.emptyValue;
      default:
        return e3;
    }
  }, c2 = function(e3, t3) {
    return !l2(t3[0]) && !l2(e3[e3.length - 1]) && (e3 += r2.boundryChar), e3 + t3;
  }, l2 = function(e3) {
    return i2.indexOf(e3) !== -1;
  };
  function u2(e3) {
    let n3 = t2;
    return e3 === void 0 ? r2.missingChar : e3 === null ? r2.nilChar : e3[n3(482)] && Object[n3(423)](e3.child).length === 0 && (!e3.attrsMap || Object.keys(e3[n3(371)])[n3(344)] === 0) ? r2.emptyChar : true;
  }
  var d2 = W(), f2 = V().buildOptions;
  e2.convert2nimn = function(e3, n3, r3) {
    let i3 = t2;
    return r3 = f2(r3, d2.defaultOptions, d2[i3(400)]), o2(e3, n3, r3);
  };
}), q = e((e2) => {
  let t2 = a;
  var n2 = V(), r2 = V().buildOptions, i2 = W(), o2 = function(e3, t3) {
    let n3 = X;
    return t3 = r2(t3, i2[n3(383)], i2[n3(400)]), t3.indentBy = t3.indentBy || ``, s2(e3, t3, 0);
  }, s2 = function(e3, t3, r3) {
    let i3 = X, a2 = `{`, o3 = Object.keys(e3.child);
    for (let n3 = 0; n3 < o3.length; n3++) {
      var l2 = o3[n3];
      if (e3.child[l2] && e3.child[l2].length > 1) {
        for (var u2 in a2 += `"` + l2 + i3(436), e3[i3(482)][l2]) a2 += s2(e3[i3(482)][l2][u2], t3) + ` , `;
        a2 = a2.substr(0, a2.length - 1) + ` ] `;
      } else a2 += `"` + l2 + `" : ` + s2(e3[i3(482)][l2][0], t3) + ` ,`;
    }
    return n2[i3(386)](a2, e3.attrsMap), n2.isEmptyObject(a2) ? n2.isExist(e3.val) ? e3.val : `` : (n2.isExist(e3.val) && (typeof e3.val == `string` && (e3[i3(575)] === `` || e3[i3(575)] === t3.cdataPositionChar) || (a2 += `"` + t3.textNodeName + `" : ` + c2(e3.val))), a2[a2[i3(344)] - 1] === `,` && (a2 = a2.substr(0, a2.length - 2)), a2 + `}`);
  };
  function c2(e3) {
    return e3 === true || e3 === false || !isNaN(e3) ? e3 : `"` + e3 + `"`;
  }
  e2[t2(484)] = o2;
}), J = e((e2, t2) => {
  let n2 = a;
  var r2 = V()[n2(348)], i2 = { attributeNamePrefix: `@_`, attrNodeName: false, textNodeName: `#text`, ignoreAttributes: true, cdataTagName: false, cdataPositionChar: `\\c`, format: false, indentBy: `  `, supressEmptyNode: false, tagValueProcessor: function(e3) {
    return e3;
  }, attrValueProcessor: function(e3) {
    return e3;
  } }, o2 = [`attributeNamePrefix`, n2(580), n2(565), `ignoreAttributes`, n2(451), `cdataPositionChar`, `format`, n2(450), `supressEmptyNode`, `tagValueProcessor`, `attrValueProcessor`];
  function s2(e3) {
    let t3 = n2;
    this.options = r2(e3, i2, o2), this[t3(577)].ignoreAttributes || this.options[t3(580)] ? this.isAttribute = function() {
      return false;
    } : (this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = h2), this.options.cdataTagName ? this.isCDATA = g2 : this.isCDATA = function() {
      return false;
    }, this.replaceCDATAstr = c2, this[t3(518)] = l2, this.options.format ? (this.indentate = m2, this.tagEndChar = `>
`, this.newLine = `
`) : (this.indentate = function() {
      return ``;
    }, this.tagEndChar = `>`, this.newLine = ``), this.options.supressEmptyNode ? (this.buildTextNode = p2, this.buildObjNode = d2) : (this.buildTextNode = f2, this.buildObjNode = u2), this.buildTextValNode = f2, this.buildObjectNode = u2;
  }
  s2.prototype.parse = function(e3) {
    let t3 = n2;
    return this[t3(382)](e3, 0).val;
  }, s2.prototype.j2x = function(e3, t3) {
    let r3 = n2, i3 = ``, a2 = ``, o3 = Object.keys(e3), s3 = o3.length;
    for (let n3 = 0; n3 < s3; n3++) {
      let s4 = o3[n3];
      if (e3[s4] !== void 0) if (e3[s4] === null) a2 += this.indentate(t3) + `<` + s4 + `/` + this.tagEndChar;
      else if (e3[s4] instanceof Date) a2 += this.buildTextNode(e3[s4], s4, ``, t3);
      else if (typeof e3[s4] != `object`) {
        let n4 = this.isAttribute(s4);
        n4 ? i3 += ` ` + n4 + `="` + this[r3(577)].attrValueProcessor(`` + e3[s4]) + `"` : this.isCDATA(s4) ? e3[this.options.textNodeName] ? a2 += this.replaceCDATAstr(e3[this.options.textNodeName], e3[s4]) : a2 += this[r3(513)](``, e3[s4]) : s4 === this.options.textNodeName ? e3[this.options.cdataTagName] || (a2 += this.options.tagValueProcessor(`` + e3[s4])) : a2 += this.buildTextNode(e3[s4], s4, ``, t3);
      } else if (Array[r3(544)](e3[s4])) if (this.isCDATA(s4)) a2 += this[r3(499)](t3), e3[this.options[r3(565)]] ? a2 += this.replaceCDATAarr(e3[this.options.textNodeName], e3[s4]) : a2 += this[r3(518)](``, e3[s4]);
      else {
        let n4 = e3[s4].length;
        for (let i4 = 0; i4 < n4; i4++) {
          let n5 = e3[s4][i4];
          if (n5 !== void 0) if (n5 === null) a2 += this[r3(499)](t3) + `<` + s4 + `/` + this[r3(591)];
          else if (typeof n5 == `object`) {
            let e4 = this.j2x(n5, t3 + 1);
            a2 += this.buildObjNode(e4[r3(575)], s4, e4.attrStr, t3);
          } else a2 += this.buildTextNode(n5, s4, ``, t3);
        }
      }
      else if (this.options.attrNodeName && s4 === this[r3(577)].attrNodeName) {
        let t4 = Object.keys(e3[s4]), n4 = t4.length;
        for (let r4 = 0; r4 < n4; r4++) i3 += ` ` + t4[r4] + `="` + this.options.attrValueProcessor(`` + e3[s4][t4[r4]]) + `"`;
      } else {
        let n4 = this.j2x(e3[s4], t3 + 1);
        a2 += this[r3(533)](n4.val, s4, n4[r3(430)], t3);
      }
    }
    return { attrStr: i3, val: a2 };
  };
  function c2(e3, t3) {
    let r3 = n2;
    return e3 = this[r3(577)].tagValueProcessor(`` + e3), this.options.cdataPositionChar === `` || e3 === `` ? e3 + `<![CDATA[` + t3 + `]]` + this.tagEndChar : e3.replace(this.options[r3(412)], `<![CDATA[` + t3 + `]]` + this[r3(591)]);
  }
  function l2(e3, t3) {
    let r3 = n2;
    if (e3 = this.options.tagValueProcessor(`` + e3), this.options[r3(412)] === `` || e3 === ``) return e3 + `<![CDATA[` + t3.join(`]]><![CDATA[`) + `]]` + this.tagEndChar;
    for (let n3 in t3) e3 = e3.replace(this[r3(577)][r3(412)], `<![CDATA[` + t3[n3] + `]]>`);
    return e3 + this.newLine;
  }
  function u2(e3, t3, r3, i3) {
    let a2 = n2;
    return r3 && !e3.includes(`<`) ? this.indentate(i3) + `<` + t3 + r3 + `>` + e3 + `</` + t3 + this.tagEndChar : this.indentate(i3) + `<` + t3 + r3 + this[a2(591)] + e3 + this.indentate(i3) + `</` + t3 + this.tagEndChar;
  }
  function d2(e3, t3, r3, i3) {
    let a2 = n2;
    return e3 === `` ? this.indentate(i3) + `<` + t3 + r3 + `/` + this[a2(591)] : this.buildObjectNode(e3, t3, r3, i3);
  }
  function f2(e3, t3, r3, i3) {
    let a2 = n2;
    return this.indentate(i3) + `<` + t3 + r3 + `>` + this.options.tagValueProcessor(e3) + `</` + t3 + this[a2(591)];
  }
  function p2(e3, t3, r3, i3) {
    let a2 = n2;
    return e3 === `` ? this.indentate(i3) + `<` + t3 + r3 + `/` + this.tagEndChar : this[a2(345)](e3, t3, r3, i3);
  }
  function m2(e3) {
    let t3 = n2;
    return this[t3(577)].indentBy.repeat(e3);
  }
  function h2(e3) {
    let t3 = n2;
    return e3.startsWith(this.options[t3(581)]) ? e3[t3(468)](this[t3(399)]) : false;
  }
  function g2(e3) {
    return e3 === this.options.cdataTagName;
  }
  t2.exports = s2;
}), ee = e((e2) => {
  let t2 = a;
  var n2 = H(), r2 = W(), i2 = W(), o2 = V().buildOptions, s2 = G();
  e2.parse = function(e3, t3, a2) {
    let c2 = X;
    if (a2) {
      a2 === true && (a2 = {});
      let t4 = s2[c2(486)](e3, a2);
      if (t4 !== true) throw Error(t4.err.msg);
    }
    t3 = o2(t3, i2.defaultOptions, i2.props);
    let l2 = r2.getTraversalObj(e3, t3);
    return n2.convertToJson(l2, t3);
  }, e2.convertTonimn = K().convert2nimn, e2[t2(431)] = r2.getTraversalObj, e2[t2(511)] = n2.convertToJson, e2.convertToJsonString = q().convertToJsonString, e2.validate = s2.validate, e2.j2xParser = J(), e2.parseToNimn = function(t3, n3, r3) {
    return e2.convertTonimn(e2.getTraversalObj(t3, r3), n3, r3);
  };
}), te = t(i(), 1), ne = t(ee(), 1);
globalThis._pdfjsCompatibilityChecked || (globalThis._pdfjsCompatibilityChecked = true);
var re = { ERRORS: 0, WARNINGS: 1, INFOS: 5 }, ie = re.WARNINGS;
function Y(e2) {
  ie >= re.INFOS && console.log(`Info: ` + e2);
}
function X(e2, t2) {
  return e2 -= 343, se()[e2];
}
function ae(e2) {
  throw Error(e2);
}
function oe(e2, t2, n2) {
  return Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: false }), n2;
}
function se() {
  let e2 = [`split`, `@_ID`, `1209672KyPhLI`, `dataEnd`, `tagEndChar`, `index`, `no previous value in symbol ID table`, `concat`, `buildTree`, `strict`, `' is not expected.`, `length`, `buildTextValNode`, `EndOfFile`, `name`, `buildOptions`, `width`, `randomAccess`, `prototype`, `call`, `value`, `subarray`, `pfIndex`, `decodeNode`, `huffmanFS`, `defaultPixelValue`, `data:`, `tagname`, `isExist`, `div`, `refinement`, `huffmanDS`, `InvalidAttr`, `793177hQmbur`, `match`, `px;top:`, `ofd:PageArea`, `outputBits`, `attrsMap`, `_addPixels`, `px)`, `allowBooleanAttributes`, `inputBits`, `IARDY`, `nilPremitive`, `huffman`, `]]>`, `ofd:Font`, `obj`, `j2x`, `defaultOptions`, `nlps`, `symbols`, `merge`, `parseNodeValue`, `loadAsync`, `7Bhzrbl`, `_getTwoDimCode`, `data`, `Pi Tag is not closed.`, `\u6977\u4F53, KaiTi, Kai`, `InvalidChar`, `sealObj`, `IARDX`, `readBits`, `toLowerCase`, `attrPrefixLen`, `props`, `char '&' is not expected.`, `children`, `@_Boundary`, `fromCharCode`, `getValue`, `IntermediateGenericRegion`, `appendChild`, `IARI`, `' is an invalid name.`, `overflow: hidden;z-index:`, `encoding`, `cdataPositionChar`, `err`, `stamp`, `@_Relative`, `ofd:StrokeColor`, `headerEnd`, `tableBitmapSize`, `number`, `LineWidth`, `huffmanRefinementDH`, `ImmediateHalftoneRegion`, `keys`, `parseAttributeValue`, `\u6977\u4F53, KaiTi, Kai, simkai`, `readBit`, `rgb(0, 0, 0)`, `InvalidXml`, `px;`, `attrStr`, `getTraversalObj`, `xmlParseFlag`, `ofd:Appearance`, `_eatBits`, `ofd:Template`, `" : [ `, `pages`, `numberOfPages`, `ignoreNameSpace`, `Closing tag '`, `@_PageRef`, `ofd:FillColor`, `Attribute '`, `enableSkip`, `onImmediateTextRegion`, `min`, `end`, `prefixLength`, `isName`, `indentBy`, `cdataTagName`, `rgb(`, `img`, `gridVectorX`, `black`, `segment end was not found`, `stampAnnot`, `ofd:DrawParam`, `byteAlign`, `pageAssociation`, `decoder`, `clow`, `100%`, `json`, `@_FamilyName`, `eoblock`, `@_TemplateID`, `substr`, `createElement`, `numberOfSymbolInstances`, `px;left:`, `arrayEnd`, `trim`, `toString`, `contextCache`, `205518deafEj`, `parseTrueNumberOnly`, `global`, `substring`, `' have open quote.`, `!xml`, `child`, `52810cpcbZT`, `convertToJsonString`, `combinationOperatorOverride`, `validate`, `apply`, `ignoreAttributes`, `svg`, `SimHei, STHeiti, simhei`, `symbol refinement with Huffman is not supported`, `refinementTemplate`, `chigh`, `signedInfo`, `replace`, `1214qMlAeb`, `_getBlackCode`, `data-signed-info`, `indentate`, `px;z-index:`, `pageRef`, `88kNUBtV`, `@_DeltaX`, `height`, `patternHeight`, `mmr`, `type`, `nextLine2D`, `EndOfLine`, `drawParamResObj`, `convertToJson`, `IADT`, `replaceCDATAstr`, `93AANPSH`, `relative`, `stringify`, `setAttribute`, `replaceCDATAarr`, `operator `, `referredTo`, `inputBuf`, `numberOfNewSymbols`, `Comment is not closed.`, `@_Visible`, `isLeaf`, `gbig2`, `filter`, `fill`, `referenceCorner`, `transposed`, `ofd:ContentBox`, `ofd:CommonData`, `buildObjNode`, `Start tag expected.`, `row`, `px; top: `, `ofd:ApplicationBox`, `trimValues`, `customTables`, `emptyValue`, `gridHeight`, `document`, `parseFloat`, `isArray`, `png`, `refLine`, `annotation`, `columns`, `rowsDone`, `lower`, `style`, `start`, `_lookBits`, `info`, `codingPos`, `23372hxTWYd`, `charAt`, `IntermediateTextRegion`, `source`, `patterns`, `IADH`, `shift`, `combinationOperator`, `@_Value`, `textNodeName`, `template`, `parseInt`, `decode`, `99IyCdzl`, `fail`, `push`, `header`, `prefixCode`, `156200QfkaXy`, `val`, `indexOf`, `options`, `forEach`, `then`, `attrNodeName`, `attributeNamePrefix`, `position`, `lossless`, `IAID`, `files`, `ofd:Annot`];
  return se = function() {
    return e2;
  }, se();
}
var ce = (function() {
  function e2(t2) {
    let n2 = X;
    this.constructor === e2 && ae(`Cannot initialize BaseException.`), this.message = t2, this.name = this.constructor[n2(347)];
  }
  return e2.prototype = Error(), e2.constructor = e2, e2;
})();
/* @__PURE__ */ (function() {
  let e2 = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`;
  return function(t2, n2, r2 = false) {
    let i2 = X;
    if (!r2 && URL.createObjectURL) {
      let e3 = new Blob([t2], { type: n2 });
      return URL.createObjectURL(e3);
    }
    let a2 = i2(359) + n2 + `;base64,`;
    for (let n3 = 0, r3 = t2.length; n3 < r3; n3 += 3) {
      let i3 = t2[n3] & 255, o2 = t2[n3 + 1] & 255, s2 = t2[n3 + 2] & 255, c2 = i3 >> 2, l2 = (i3 & 3) << 4 | o2 >> 4, u2 = n3 + 1 < r3 ? (o2 & 15) << 2 | s2 >> 6 : 64, d2 = n3 + 2 < r3 ? s2 & 63 : 64;
      a2 += e2[c2] + e2[l2] + e2[u2] + e2[d2];
    }
    return a2;
  };
})();
function le(e2) {
  return e2 <= 0 ? 0 : Math.ceil(Math.log2(e2));
}
function Z(e2, t2) {
  return e2[t2] << 24 >> 24;
}
function ue(e2, t2) {
  return e2[t2] << 8 | e2[t2 + 1];
}
function Q(e2, t2) {
  return (e2[t2] << 24 | e2[t2 + 1] << 16 | e2[t2 + 2] << 8 | e2[t2 + 3]) >>> 0;
}
var de = [{ qe: 22017, nmps: 1, nlps: 1, switchFlag: 1 }, { qe: 13313, nmps: 2, nlps: 6, switchFlag: 0 }, { qe: 6145, nmps: 3, nlps: 9, switchFlag: 0 }, { qe: 2753, nmps: 4, nlps: 12, switchFlag: 0 }, { qe: 1313, nmps: 5, nlps: 29, switchFlag: 0 }, { qe: 545, nmps: 38, nlps: 33, switchFlag: 0 }, { qe: 22017, nmps: 7, nlps: 6, switchFlag: 1 }, { qe: 21505, nmps: 8, nlps: 14, switchFlag: 0 }, { qe: 18433, nmps: 9, nlps: 14, switchFlag: 0 }, { qe: 14337, nmps: 10, nlps: 14, switchFlag: 0 }, { qe: 12289, nmps: 11, nlps: 17, switchFlag: 0 }, { qe: 9217, nmps: 12, nlps: 18, switchFlag: 0 }, { qe: 7169, nmps: 13, nlps: 20, switchFlag: 0 }, { qe: 5633, nmps: 29, nlps: 21, switchFlag: 0 }, { qe: 22017, nmps: 15, nlps: 14, switchFlag: 1 }, { qe: 21505, nmps: 16, nlps: 14, switchFlag: 0 }, { qe: 20737, nmps: 17, nlps: 15, switchFlag: 0 }, { qe: 18433, nmps: 18, nlps: 16, switchFlag: 0 }, { qe: 14337, nmps: 19, nlps: 17, switchFlag: 0 }, { qe: 13313, nmps: 20, nlps: 18, switchFlag: 0 }, { qe: 12289, nmps: 21, nlps: 19, switchFlag: 0 }, { qe: 10241, nmps: 22, nlps: 19, switchFlag: 0 }, { qe: 9217, nmps: 23, nlps: 20, switchFlag: 0 }, { qe: 8705, nmps: 24, nlps: 21, switchFlag: 0 }, { qe: 7169, nmps: 25, nlps: 22, switchFlag: 0 }, { qe: 6145, nmps: 26, nlps: 23, switchFlag: 0 }, { qe: 5633, nmps: 27, nlps: 24, switchFlag: 0 }, { qe: 5121, nmps: 28, nlps: 25, switchFlag: 0 }, { qe: 4609, nmps: 29, nlps: 26, switchFlag: 0 }, { qe: 4353, nmps: 30, nlps: 27, switchFlag: 0 }, { qe: 2753, nmps: 31, nlps: 28, switchFlag: 0 }, { qe: 2497, nmps: 32, nlps: 29, switchFlag: 0 }, { qe: 2209, nmps: 33, nlps: 30, switchFlag: 0 }, { qe: 1313, nmps: 34, nlps: 31, switchFlag: 0 }, { qe: 1089, nmps: 35, nlps: 32, switchFlag: 0 }, { qe: 673, nmps: 36, nlps: 33, switchFlag: 0 }, { qe: 545, nmps: 37, nlps: 34, switchFlag: 0 }, { qe: 321, nmps: 38, nlps: 35, switchFlag: 0 }, { qe: 273, nmps: 39, nlps: 36, switchFlag: 0 }, { qe: 133, nmps: 40, nlps: 37, switchFlag: 0 }, { qe: 73, nmps: 41, nlps: 38, switchFlag: 0 }, { qe: 37, nmps: 42, nlps: 39, switchFlag: 0 }, { qe: 21, nmps: 43, nlps: 40, switchFlag: 0 }, { qe: 9, nmps: 44, nlps: 41, switchFlag: 0 }, { qe: 5, nmps: 45, nlps: 42, switchFlag: 0 }, { qe: 1, nmps: 45, nlps: 43, switchFlag: 0 }, { qe: 22017, nmps: 46, nlps: 46, switchFlag: 0 }], fe = class {
  constructor(e2, t2, n2) {
    let r2 = a;
    this.data = e2, this.bp = t2, this.dataEnd = n2, this.chigh = e2[t2], this.clow = 0, this.byteIn(), this.chigh = this[r2(493)] << 7 & 65535 | this.clow >> 9 & 127, this.clow = this.clow << 7 & 65535, this.ct -= 7, this.a = 32768;
  }
  byteIn() {
    let e2 = a, t2 = this[e2(391)], n2 = this.bp;
    t2[n2] === 255 ? t2[n2 + 1] > 143 ? (this.clow += 65280, this.ct = 8) : (n2++, this.clow += t2[n2] << 9, this.ct = 7, this.bp = n2) : (n2++, this.clow += n2 < this[e2(590)] ? t2[n2] << 8 : 65280, this.ct = 8, this.bp = n2), this.clow > 65535 && (this.chigh += this.clow >> 16, this.clow &= 65535);
  }
  readBit(e2, t2) {
    let n2 = a, r2 = e2[t2] >> 1, i2 = e2[t2] & 1, o2 = de[r2], s2 = o2.qe, c2, l2 = this.a - s2;
    if (this.chigh < s2) l2 < s2 ? (l2 = s2, c2 = i2, r2 = o2.nmps) : (l2 = s2, c2 = 1 ^ i2, o2.switchFlag === 1 && (i2 = c2), r2 = o2.nlps);
    else {
      if (this[n2(493)] -= s2, l2 & 32768) return this.a = l2, i2;
      l2 < s2 ? (c2 = 1 ^ i2, o2.switchFlag === 1 && (i2 = c2), r2 = o2[n2(384)]) : (c2 = i2, r2 = o2.nmps);
    }
    do
      this.ct === 0 && this.byteIn(), l2 <<= 1, this.chigh = this[n2(493)] << 1 & 65535 | this.clow >> 15 & 1, this[n2(462)] = this[n2(462)] << 1 & 65535, this.ct--;
    while (!(l2 & 32768));
    return this.a = l2, e2[t2] = r2 << 1 | i2, c2;
  }
}, pe = (function() {
  let e2 = a, t2 = [[-1, -1], [-1, -1], [7, 8], [7, 7], [6, 6], [6, 6], [6, 5], [6, 5], [4, 0], [4, 0], [4, 0], [4, 0], [4, 0], [4, 0], [4, 0], [4, 0], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [3, 3], [3, 3], [3, 3], [3, 3], [3, 3], [3, 3], [3, 3], [3, 3], [3, 3], [3, 3], [3, 3], [3, 3], [3, 3], [3, 3], [3, 3], [3, 3], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2]], n2 = [[-1, -1], [12, -2], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [11, 1792], [11, 1792], [12, 1984], [12, 2048], [12, 2112], [12, 2176], [12, 2240], [12, 2304], [11, 1856], [11, 1856], [11, 1920], [11, 1920], [12, 2368], [12, 2432], [12, 2496], [12, 2560]], r2 = [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [8, 29], [8, 29], [8, 30], [8, 30], [8, 45], [8, 45], [8, 46], [8, 46], [7, 22], [7, 22], [7, 22], [7, 22], [7, 23], [7, 23], [7, 23], [7, 23], [8, 47], [8, 47], [8, 48], [8, 48], [6, 13], [6, 13], [6, 13], [6, 13], [6, 13], [6, 13], [6, 13], [6, 13], [7, 20], [7, 20], [7, 20], [7, 20], [8, 33], [8, 33], [8, 34], [8, 34], [8, 35], [8, 35], [8, 36], [8, 36], [8, 37], [8, 37], [8, 38], [8, 38], [7, 19], [7, 19], [7, 19], [7, 19], [8, 31], [8, 31], [8, 32], [8, 32], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 12], [6, 12], [6, 12], [6, 12], [6, 12], [6, 12], [6, 12], [6, 12], [8, 53], [8, 53], [8, 54], [8, 54], [7, 26], [7, 26], [7, 26], [7, 26], [8, 39], [8, 39], [8, 40], [8, 40], [8, 41], [8, 41], [8, 42], [8, 42], [8, 43], [8, 43], [8, 44], [8, 44], [7, 21], [7, 21], [7, 21], [7, 21], [7, 28], [7, 28], [7, 28], [7, 28], [8, 61], [8, 61], [8, 62], [8, 62], [8, 63], [8, 63], [8, 0], [8, 0], [8, 320], [8, 320], [8, 384], [8, 384], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [7, 27], [7, 27], [7, 27], [7, 27], [8, 59], [8, 59], [8, 60], [8, 60], [9, 1472], [9, 1536], [9, 1600], [9, 1728], [7, 18], [7, 18], [7, 18], [7, 18], [7, 24], [7, 24], [7, 24], [7, 24], [8, 49], [8, 49], [8, 50], [8, 50], [8, 51], [8, 51], [8, 52], [8, 52], [7, 25], [7, 25], [7, 25], [7, 25], [8, 55], [8, 55], [8, 56], [8, 56], [8, 57], [8, 57], [8, 58], [8, 58], [6, 192], [6, 192], [6, 192], [6, 192], [6, 192], [6, 192], [6, 192], [6, 192], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [8, 448], [8, 448], [8, 512], [8, 512], [9, 704], [9, 768], [8, 640], [8, 640], [8, 576], [8, 576], [9, 832], [9, 896], [9, 960], [9, 1024], [9, 1088], [9, 1152], [9, 1216], [9, 1280], [9, 1344], [9, 1408], [7, 256], [7, 256], [7, 256], [7, 256], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [6, 16], [6, 16], [6, 16], [6, 16], [6, 16], [6, 16], [6, 16], [6, 16], [6, 17], [6, 17], [6, 17], [6, 17], [6, 17], [6, 17], [6, 17], [6, 17], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [6, 14], [6, 14], [6, 14], [6, 14], [6, 14], [6, 14], [6, 14], [6, 14], [6, 15], [6, 15], [6, 15], [6, 15], [6, 15], [6, 15], [6, 15], [6, 15], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7]], i2 = [[-1, -1], [-1, -1], [12, -2], [12, -2], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [11, 1792], [11, 1792], [11, 1792], [11, 1792], [12, 1984], [12, 1984], [12, 2048], [12, 2048], [12, 2112], [12, 2112], [12, 2176], [12, 2176], [12, 2240], [12, 2240], [12, 2304], [12, 2304], [11, 1856], [11, 1856], [11, 1856], [11, 1856], [11, 1920], [11, 1920], [11, 1920], [11, 1920], [12, 2368], [12, 2368], [12, 2432], [12, 2432], [12, 2496], [12, 2496], [12, 2560], [12, 2560], [10, 18], [10, 18], [10, 18], [10, 18], [10, 18], [10, 18], [10, 18], [10, 18], [12, 52], [12, 52], [13, 640], [13, 704], [13, 768], [13, 832], [12, 55], [12, 55], [12, 56], [12, 56], [13, 1280], [13, 1344], [13, 1408], [13, 1472], [12, 59], [12, 59], [12, 60], [12, 60], [13, 1536], [13, 1600], [11, 24], [11, 24], [11, 24], [11, 24], [11, 25], [11, 25], [11, 25], [11, 25], [13, 1664], [13, 1728], [12, 320], [12, 320], [12, 384], [12, 384], [12, 448], [12, 448], [13, 512], [13, 576], [12, 53], [12, 53], [12, 54], [12, 54], [13, 896], [13, 960], [13, 1024], [13, 1088], [13, 1152], [13, 1216], [10, 64], [10, 64], [10, 64], [10, 64], [10, 64], [10, 64], [10, 64], [10, 64]], o2 = [[8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [11, 23], [11, 23], [12, 50], [12, 51], [12, 44], [12, 45], [12, 46], [12, 47], [12, 57], [12, 58], [12, 61], [12, 256], [10, 16], [10, 16], [10, 16], [10, 16], [10, 17], [10, 17], [10, 17], [10, 17], [12, 48], [12, 49], [12, 62], [12, 63], [12, 30], [12, 31], [12, 32], [12, 33], [12, 40], [12, 41], [11, 22], [11, 22], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [9, 15], [9, 15], [9, 15], [9, 15], [9, 15], [9, 15], [9, 15], [9, 15], [12, 128], [12, 192], [12, 26], [12, 27], [12, 28], [12, 29], [11, 19], [11, 19], [11, 20], [11, 20], [12, 34], [12, 35], [12, 36], [12, 37], [12, 38], [12, 39], [11, 21], [11, 21], [12, 42], [12, 43], [10, 0], [10, 0], [10, 0], [10, 0], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12]], s2 = [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [6, 9], [6, 8], [5, 7], [5, 7], [4, 6], [4, 6], [4, 6], [4, 6], [4, 5], [4, 5], [4, 5], [4, 5], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2]];
  function c2(e3, t3 = {}) {
    let n3 = X;
    if (!e3 || typeof e3.next != `function`) throw Error(`CCITTFaxDecoder - invalid "source" parameter.`);
    this.source = e3, this.eof = false, this.encoding = t3.K || 0, this.eoline = t3[n3(509)] || false, this.byteAlign = t3.EncodedByteAlign || false, this.columns = t3.Columns || 1728, this.rows = t3.Rows || 0;
    let r3 = t3.EndOfBlock;
    r3 ?? (r3 = true), this.eoblock = r3, this[n3(455)] = t3.BlackIs1 || false, this.codingLine = new Uint32Array(this.columns + 1), this.refLine = new Uint32Array(this.columns + 2), this.codingLine[0] = this[n3(548)], this.codingPos = 0, this[n3(535)] = 0, this.nextLine2D = this.encoding < 0, this.inputBits = 0, this.inputBuf = 0, this[n3(370)] = 0, this.rowsDone = false;
    let i3;
    for (; (i3 = this[n3(553)](12)) === 0; ) this._eatBits(1);
    i3 === 1 && this._eatBits(12), this[n3(411)] > 0 && (this[n3(508)] = !this._lookBits(1), this._eatBits(1));
  }
  return c2[e2(351)] = { readNextChar() {
    let t3 = e2;
    if (this.eof) return -1;
    let n3 = this[t3(546)], r3 = this.codingLine, i3 = this.columns, a2, o3, s3, c3;
    if (this.outputBits === 0) {
      if (this.rowsDone && (this.eof = true), this.eof) return -1;
      this.err = false;
      let e3, s4, l3;
      if (this[t3(508)]) {
        for (c3 = 0; r3[c3] < i3; ++c3) n3[c3] = r3[c3];
        for (n3[c3++] = i3, n3[c3] = i3, r3[0] = 0, this.codingPos = 0, a2 = 0, o3 = 0; r3[this.codingPos] < i3; ) switch (e3 = this[t3(390)](), e3) {
          case 0:
            this._addPixels(n3[a2 + 1], o3), n3[a2 + 1] < i3 && (a2 += 2);
            break;
          case 1:
            if (e3 = s4 = 0, o3) {
              do
                e3 += l3 = this[t3(497)]();
              while (l3 >= 64);
              do
                s4 += l3 = this._getWhiteCode();
              while (l3 >= 64);
            } else {
              do
                e3 += l3 = this._getWhiteCode();
              while (l3 >= 64);
              do
                s4 += l3 = this._getBlackCode();
              while (l3 >= 64);
            }
            for (this[t3(372)](r3[this[t3(555)]] + e3, o3), r3[this.codingPos] < i3 && this[t3(372)](r3[this.codingPos] + s4, o3 ^ 1); n3[a2] <= r3[this.codingPos] && n3[a2] < i3; ) a2 += 2;
            break;
          case 7:
            if (this._addPixels(n3[a2] + 3, o3), o3 ^= 1, r3[this.codingPos] < i3) for (++a2; n3[a2] <= r3[this.codingPos] && n3[a2] < i3; ) a2 += 2;
            break;
          case 5:
            if (this._addPixels(n3[a2] + 2, o3), o3 ^= 1, r3[this[t3(555)]] < i3) for (++a2; n3[a2] <= r3[this.codingPos] && n3[a2] < i3; ) a2 += 2;
            break;
          case 3:
            if (this[t3(372)](n3[a2] + 1, o3), o3 ^= 1, r3[this.codingPos] < i3) for (++a2; n3[a2] <= r3[this.codingPos] && n3[a2] < i3; ) a2 += 2;
            break;
          case 2:
            if (this._addPixels(n3[a2], o3), o3 ^= 1, r3[this.codingPos] < i3) for (++a2; n3[a2] <= r3[this.codingPos] && n3[a2] < i3; ) a2 += 2;
            break;
          case 8:
            if (this._addPixelsNeg(n3[a2] - 3, o3), o3 ^= 1, r3[this.codingPos] < i3) for (a2 > 0 ? --a2 : ++a2; n3[a2] <= r3[this.codingPos] && n3[a2] < i3; ) a2 += 2;
            break;
          case 6:
            if (this._addPixelsNeg(n3[a2] - 2, o3), o3 ^= 1, r3[this.codingPos] < i3) for (a2 > 0 ? --a2 : ++a2; n3[a2] <= r3[this.codingPos] && n3[a2] < i3; ) a2 += 2;
            break;
          case 4:
            if (this._addPixelsNeg(n3[a2] - 1, o3), o3 ^= 1, r3[this[t3(555)]] < i3) for (a2 > 0 ? --a2 : ++a2; n3[a2] <= r3[this.codingPos] && n3[a2] < i3; ) a2 += 2;
            break;
          case -1:
            this._addPixels(i3, 0), this.eof = true;
            break;
          default:
            Y(`bad 2d code`), this._addPixels(i3, 0), this.err = true;
        }
      } else for (r3[0] = 0, this.codingPos = 0, o3 = 0; r3[this.codingPos] < i3; ) {
        if (e3 = 0, o3) do
          e3 += l3 = this._getBlackCode();
        while (l3 >= 64);
        else do
          e3 += l3 = this._getWhiteCode();
        while (l3 >= 64);
        this._addPixels(r3[this.codingPos] + e3, o3), o3 ^= 1;
      }
      let u2 = false;
      if (this.byteAlign && (this[t3(375)] &= -8), !this[t3(466)] && this[t3(535)] === this.rows - 1) this.rowsDone = true;
      else {
        if (e3 = this._lookBits(12), this.eoline) for (; e3 !== -1 && e3 !== 1; ) this._eatBits(1), e3 = this[t3(553)](12);
        else for (; e3 === 0; ) this[t3(434)](1), e3 = this._lookBits(12);
        e3 === 1 ? (this[t3(434)](12), u2 = true) : e3 === -1 && (this.eof = true);
      }
      if (!this.eof && this[t3(411)] > 0 && !this[t3(549)] && (this.nextLine2D = !this._lookBits(1), this[t3(434)](1)), this.eoblock && u2 && this.byteAlign) {
        if (e3 = this._lookBits(12), e3 === 1) {
          if (this._eatBits(12), this[t3(411)] > 0 && (this._lookBits(1), this._eatBits(1)), this.encoding >= 0) for (c3 = 0; c3 < 4; ++c3) e3 = this[t3(553)](12), e3 !== 1 && Y(`bad rtc code: ` + e3), this[t3(434)](12), this[t3(411)] > 0 && (this[t3(553)](1), this._eatBits(1));
          this.eof = true;
        }
      } else if (this.err && this.eoline) {
        for (; ; ) {
          if (e3 = this._lookBits(13), e3 === -1) return this.eof = true, -1;
          if (e3 >> 1 == 1) break;
          this._eatBits(1);
        }
        this._eatBits(12), this.encoding > 0 && (this._eatBits(1), this.nextLine2D = !(e3 & 1));
      }
      r3[0] > 0 ? this.outputBits = r3[this.codingPos = 0] : this.outputBits = r3[this.codingPos = 1], this.row++;
    }
    let l2;
    if (this.outputBits >= 8) l2 = this.codingPos & 1 ? 0 : 255, this.outputBits -= 8, this.outputBits === 0 && r3[this[t3(555)]] < i3 && (this.codingPos++, this.outputBits = r3[this[t3(555)]] - r3[this.codingPos - 1]);
    else {
      s3 = 8, l2 = 0;
      do
        this[t3(370)] > s3 ? (l2 <<= s3, this.codingPos & 1 || (l2 |= 255 >> 8 - s3), this.outputBits -= s3, s3 = 0) : (l2 <<= this.outputBits, this[t3(555)] & 1 || (l2 |= 255 >> 8 - this.outputBits), s3 -= this.outputBits, this.outputBits = 0, r3[this[t3(555)]] < i3 ? (this[t3(555)]++, this.outputBits = r3[this[t3(555)]] - r3[this.codingPos - 1]) : s3 > 0 && (l2 <<= s3, s3 = 0));
      while (s3);
    }
    return this.black && (l2 ^= 255), l2;
  }, _addPixels(t3, n3) {
    let r3 = e2, i3 = this.codingLine, a2 = this.codingPos;
    t3 > i3[a2] && (t3 > this[r3(548)] && (Y(`row is wrong length`), this.err = true, t3 = this.columns), a2 & 1 ^ n3 && ++a2, i3[a2] = t3), this.codingPos = a2;
  }, _addPixelsNeg(t3, n3) {
    let r3 = e2, i3 = this.codingLine, a2 = this.codingPos;
    if (t3 > i3[a2]) t3 > this.columns && (Y(`row is wrong length`), this[r3(413)] = true, t3 = this.columns), a2 & 1 ^ n3 && ++a2, i3[a2] = t3;
    else if (t3 < i3[a2]) {
      for (t3 < 0 && (Y(`invalid code`), this[r3(413)] = true, t3 = 0); a2 > 0 && t3 < i3[a2 - 1]; ) --a2;
      i3[a2] = t3;
    }
    this.codingPos = a2;
  }, _findTableCode(t3, n3, r3, i3) {
    let a2 = e2, o3 = i3 || 0;
    for (let e3 = t3; e3 <= n3; ++e3) {
      let t4 = this._lookBits(e3);
      if (t4 === -1) return [true, 1, false];
      if (e3 < n3 && (t4 <<= n3 - e3), !o3 || t4 >= o3) {
        let n4 = r3[t4 - o3];
        if (n4[0] === e3) return this[a2(434)](e3), [true, n4[1], true];
      }
    }
    return [false, 0, false];
  }, _getTwoDimCode() {
    let n3 = e2, r3 = 0, i3;
    if (this[n3(466)]) {
      if (r3 = this._lookBits(7), i3 = t2[r3], i3 && i3[0] > 0) return this._eatBits(i3[0]), i3[1];
    } else {
      let e3 = this._findTableCode(1, 7, t2);
      if (e3[0] && e3[2]) return e3[1];
    }
    return Y(`Bad two dim code`), -1;
  }, _getWhiteCode() {
    let t3 = e2, i3 = 0, a2;
    if (this.eoblock) {
      if (i3 = this._lookBits(12), i3 === -1) return 1;
      if (a2 = i3 >> 5 ? r2[i3 >> 3] : n2[i3], a2[0] > 0) return this[t3(434)](a2[0]), a2[1];
    } else {
      let e3 = this._findTableCode(1, 9, r2);
      if (e3[0] || (e3 = this._findTableCode(11, 12, n2), e3[0])) return e3[1];
    }
    return Y(`bad white code`), this._eatBits(1), 1;
  }, _getBlackCode() {
    let e3, t3;
    if (this.eoblock) {
      if (e3 = this._lookBits(13), e3 === -1) return 1;
      if (t3 = e3 >> 7 ? !(e3 >> 9) && e3 >> 7 ? o2[(e3 >> 1) - 64] : s2[e3 >> 7] : i2[e3], t3[0] > 0) return this._eatBits(t3[0]), t3[1];
    } else {
      let e4 = this._findTableCode(2, 6, s2);
      if (e4[0] || (e4 = this._findTableCode(7, 12, o2, 64), e4[0]) || (e4 = this._findTableCode(10, 13, i2), e4[0])) return e4[1];
    }
    return Y(`bad black code`), this._eatBits(1), 1;
  }, _lookBits(t3) {
    let n3 = e2, r3;
    for (; this.inputBits < t3; ) {
      if ((r3 = this[n3(559)].next()) === -1) return this[n3(375)] === 0 ? -1 : this.inputBuf << t3 - this.inputBits & 65535 >> 16 - t3;
      this[n3(521)] = this.inputBuf << 8 | r3, this.inputBits += 8;
    }
    return this.inputBuf >> this[n3(375)] - t3 & 65535 >> 16 - t3;
  }, _eatBits(t3) {
    let n3 = e2;
    (this[n3(375)] -= t3) < 0 && (this.inputBits = 0);
  } }, c2;
})(), $ = class extends ce {
  constructor(e2) {
    super(`JBIG2 error: ` + e2);
  }
}, me = (function() {
  let e2 = a;
  function t2() {
  }
  t2.prototype = { getContexts(e3) {
    return e3 in this ? this[e3] : this[e3] = new Int8Array(65536);
  } };
  function n2(e3, t3, n3) {
    this.data = e3, this.start = t3, this.end = n3;
  }
  n2.prototype = { get decoder() {
    var e3 = new fe(this.data, this.start, this.end);
    return oe(this, `decoder`, e3);
  }, get contextCache() {
    var e3 = new t2();
    return oe(this, `contextCache`, e3);
  } };
  function r2(e3, t3, n3) {
    var r3 = e3.getContexts(t3), i3 = 1;
    function a2(e4) {
      for (var t4 = 0, a3 = 0; a3 < e4; a3++) {
        var o4 = n3.readBit(r3, i3);
        i3 = i3 < 256 ? i3 << 1 | o4 : (i3 << 1 | o4) & 511 | 256, t4 = t4 << 1 | o4;
      }
      return t4 >>> 0;
    }
    var o3 = a2(1), s3 = a2(1) ? a2(1) ? a2(1) ? a2(1) ? a2(1) ? a2(32) + 4436 : a2(12) + 340 : a2(8) + 84 : a2(6) + 20 : a2(4) + 4 : a2(2);
    return o3 === 0 ? s3 : s3 > 0 ? -s3 : null;
  }
  function i2(e3, t3, n3) {
    let r3 = X;
    for (var i3 = e3.getContexts(r3(584)), a2 = 1, o3 = 0; o3 < n3; o3++) {
      var s3 = t3.readBit(i3, a2);
      a2 = a2 << 1 | s3;
    }
    return n3 < 31 ? a2 & (1 << n3) - 1 : a2 & 2147483647;
  }
  var o2 = [`SymbolDictionary`, null, null, null, e2(558), null, `ImmediateTextRegion`, `ImmediateLosslessTextRegion`, null, null, null, null, null, null, null, null, `PatternDictionary`, null, null, null, `IntermediateHalftoneRegion`, null, e2(422), `ImmediateLosslessHalftoneRegion`, null, null, null, null, null, null, null, null, null, null, null, null, e2(406), null, `ImmediateGenericRegion`, `ImmediateLosslessGenericRegion`, `IntermediateGenericRefinementRegion`, null, `ImmediateGenericRefinementRegion`, `ImmediateLosslessGenericRefinementRegion`, null, null, null, null, `PageInformation`, `EndOfPage`, `EndOfStripe`, e2(346), `Profiles`, `Tables`, null, null, null, null, null, null, null, null, `Extension`], s2 = [[{ x: -1, y: -2 }, { x: 0, y: -2 }, { x: 1, y: -2 }, { x: -2, y: -1 }, { x: -1, y: -1 }, { x: 0, y: -1 }, { x: 1, y: -1 }, { x: 2, y: -1 }, { x: -4, y: 0 }, { x: -3, y: 0 }, { x: -2, y: 0 }, { x: -1, y: 0 }], [{ x: -1, y: -2 }, { x: 0, y: -2 }, { x: 1, y: -2 }, { x: 2, y: -2 }, { x: -2, y: -1 }, { x: -1, y: -1 }, { x: 0, y: -1 }, { x: 1, y: -1 }, { x: 2, y: -1 }, { x: -3, y: 0 }, { x: -2, y: 0 }, { x: -1, y: 0 }], [{ x: -1, y: -2 }, { x: 0, y: -2 }, { x: 1, y: -2 }, { x: -2, y: -1 }, { x: -1, y: -1 }, { x: 0, y: -1 }, { x: 1, y: -1 }, { x: -2, y: 0 }, { x: -1, y: 0 }], [{ x: -3, y: -1 }, { x: -2, y: -1 }, { x: -1, y: -1 }, { x: 0, y: -1 }, { x: 1, y: -1 }, { x: -4, y: 0 }, { x: -3, y: 0 }, { x: -2, y: 0 }, { x: -1, y: 0 }]], c2 = [{ coding: [{ x: 0, y: -1 }, { x: 1, y: -1 }, { x: -1, y: 0 }], reference: [{ x: 0, y: -1 }, { x: 1, y: -1 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: 1 }, { x: 1, y: 1 }] }, { coding: [{ x: -1, y: -1 }, { x: 0, y: -1 }, { x: 1, y: -1 }, { x: -1, y: 0 }], reference: [{ x: 0, y: -1 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }] }], l2 = [39717, 1941, 229, 405], u2 = [32, 8];
  function d2(e3, t3, n3) {
    var r3 = n3.decoder, i3 = n3.contextCache.getContexts(`GB`), a2, o3, s3, c3, l3, u3, d3, f3 = [], p3 = 31735;
    for (o3 = 0; o3 < t3; o3++) for (l3 = f3[o3] = new Uint8Array(e3), u3 = o3 < 1 ? l3 : f3[o3 - 1], d3 = o3 < 2 ? l3 : f3[o3 - 2], a2 = d3[0] << 13 | d3[1] << 12 | d3[2] << 11 | u3[0] << 7 | u3[1] << 6 | u3[2] << 5 | u3[3] << 4, s3 = 0; s3 < e3; s3++) l3[s3] = c3 = r3.readBit(i3, a2), a2 = (a2 & p3) << 1 | (s3 + 3 < e3 ? d3[s3 + 3] << 11 : 0) | (s3 + 4 < e3 ? u3[s3 + 4] << 4 : 0) | c3;
    return f3;
  }
  function f2(t3, n3, r3, i3, a2, o3, c3, u3) {
    let f3 = e2;
    if (t3) return R2(new N2(u3.data, u3[f3(552)], u3.end), n3, r3, false);
    if (i3 === 0 && !o3 && !a2 && c3.length === 4 && c3[0].x === 3 && c3[0].y === -1 && c3[1].x === -3 && c3[1].y === -1 && c3[2].x === 2 && c3[2].y === -2 && c3[3].x === -2 && c3[3].y === -2) return d2(n3, r3, u3);
    var p3 = !!o3, m3 = s2[i3].concat(c3);
    m3.sort(function(e3, t4) {
      return e3.y - t4.y || e3.x - t4.x;
    });
    var h3 = m3.length, g3 = new Int8Array(h3), _3 = new Int8Array(h3), v3 = [], y3 = 0, b3 = 0, x3 = 0, S3 = 0, C3, w3;
    for (w3 = 0; w3 < h3; w3++) g3[w3] = m3[w3].x, _3[w3] = m3[w3].y, b3 = Math.min(b3, m3[w3].x), x3 = Math.max(x3, m3[w3].x), S3 = Math[f3(446)](S3, m3[w3].y), w3 < h3 - 1 && m3[w3].y === m3[w3 + 1].y && m3[w3].x === m3[w3 + 1].x - 1 ? y3 |= 1 << h3 - 1 - w3 : v3.push(w3);
    var T3 = v3.length, E3 = new Int8Array(T3), D3 = new Int8Array(T3), O3 = new Uint16Array(T3);
    for (C3 = 0; C3 < T3; C3++) w3 = v3[C3], E3[C3] = m3[w3].x, D3[C3] = m3[w3].y, O3[C3] = 1 << h3 - 1 - w3;
    for (var k3 = -b3, A3 = -S3, j3 = n3 - x3, M3 = l2[i3], P3 = new Uint8Array(n3), F3 = [], I3 = u3.decoder, L3 = u3.contextCache.getContexts(`GB`), z3 = 0, B2, V2, H2, U2 = 0, W2, G2, K2 = 0; K2 < r3; K2++) {
      if (a2) {
        var q2 = I3.readBit(L3, M3);
        if (z3 ^= q2, z3) {
          F3.push(P3);
          continue;
        }
      }
      for (P3 = new Uint8Array(P3), F3.push(P3), B2 = 0; B2 < n3; B2++) {
        if (p3 && o3[K2][B2]) {
          P3[B2] = 0;
          continue;
        }
        if (B2 >= k3 && B2 < j3 && K2 >= A3) for (U2 = U2 << 1 & y3, w3 = 0; w3 < T3; w3++) V2 = K2 + D3[w3], H2 = B2 + E3[w3], W2 = F3[V2][H2], W2 && (W2 = O3[w3], U2 |= W2);
        else for (U2 = 0, G2 = h3 - 1, w3 = 0; w3 < h3; w3++, G2--) H2 = B2 + g3[w3], H2 >= 0 && H2 < n3 && (V2 = K2 + _3[w3], V2 >= 0 && (W2 = F3[V2][H2], W2 && (U2 |= W2 << G2)));
        var J2 = I3[f3(426)](L3, U2);
        P3[B2] = J2;
      }
    }
    return F3;
  }
  function p2(t3, n3, r3, i3, a2, o3, s3, l3, d3) {
    let f3 = e2;
    var p3 = c2[r3].coding;
    r3 === 0 && (p3 = p3.concat([l3[0]]));
    var m3 = p3.length, h3 = new Int32Array(m3), g3 = new Int32Array(m3), _3;
    for (_3 = 0; _3 < m3; _3++) h3[_3] = p3[_3].x, g3[_3] = p3[_3].y;
    var v3 = c2[r3].reference;
    r3 === 0 && (v3 = v3.concat([l3[1]]));
    var y3 = v3[f3(344)], b3 = new Int32Array(y3), x3 = new Int32Array(y3);
    for (_3 = 0; _3 < y3; _3++) b3[_3] = v3[_3].x, x3[_3] = v3[_3].y;
    for (var S3 = i3[0].length, C3 = i3.length, w3 = u2[r3], T3 = [], E3 = d3.decoder, D3 = d3.contextCache.getContexts(`GR`), O3 = 0, k3 = 0; k3 < n3; k3++) {
      if (s3) {
        var A3 = E3.readBit(D3, w3);
        if (O3 ^= A3, O3) throw new $(`prediction is not supported`);
      }
      var j3 = new Uint8Array(t3);
      T3.push(j3);
      for (var M3 = 0; M3 < t3; M3++) {
        var N3, P3, F3 = 0;
        for (_3 = 0; _3 < m3; _3++) N3 = k3 + g3[_3], P3 = M3 + h3[_3], N3 < 0 || P3 < 0 || P3 >= t3 ? F3 <<= 1 : F3 = F3 << 1 | T3[N3][P3];
        for (_3 = 0; _3 < y3; _3++) N3 = k3 + x3[_3] - o3, P3 = M3 + b3[_3] - a2, N3 < 0 || N3 >= C3 || P3 < 0 || P3 >= S3 ? F3 <<= 1 : F3 = F3 << 1 | i3[N3][P3];
        j3[M3] = E3[f3(426)](D3, F3);
      }
    }
    return T3;
  }
  function m2(t3, n3, a2, o3, s3, c3, l3, u3, d3, m3, g3, _3) {
    let v3 = e2;
    if (t3 && n3) throw new $(v3(491));
    var y3 = [], b3 = 0, x3 = le(a2[v3(344)] + o3), S3 = g3[v3(461)], C3 = g3[v3(475)];
    let w3, T3;
    for (t3 && (w3 = M2(1), T3 = [], x3 = Math.max(x3, 1)); y3.length < o3; ) {
      var E3 = t3 ? c3.tableDeltaHeight.decode(_3) : r2(C3, v3(561), S3);
      b3 += E3;
      let e3 = 0, o4 = 0, s4 = t3 ? T3.length : 0;
      for (; ; ) {
        var D3 = t3 ? c3.tableDeltaWidth.decode(_3) : r2(C3, `IADW`, S3);
        if (D3 === null) break;
        e3 += D3, o4 += e3;
        var O3;
        if (n3) {
          var k3 = r2(C3, `IAAI`, S3);
          if (k3 > 1) O3 = h2(t3, n3, e3, b3, 0, k3, 1, a2.concat(y3), x3, 0, 0, 1, 0, c3, d3, m3, g3, 0, _3);
          else {
            var A3 = i2(C3, S3, x3), j3 = r2(C3, v3(396), S3), N3 = r2(C3, `IARDY`, S3), P3 = A3 < a2.length ? a2[A3] : y3[A3 - a2[v3(344)]];
            O3 = p2(e3, b3, d3, P3, j3, N3, false, m3, g3);
          }
          y3.push(O3);
        } else t3 ? T3.push(e3) : (O3 = f2(false, e3, b3, l3, false, null, u3, g3), y3.push(O3));
      }
      if (t3 && !n3) {
        let e4 = c3[v3(418)].decode(_3);
        _3[v3(459)]();
        let t4;
        if (e4 === 0) t4 = L2(_3, o4, b3);
        else {
          let n5 = _3.end, r3 = _3.position + e4;
          _3.end = r3, t4 = R2(_3, o4, b3, false), _3.end = n5, _3.position = r3;
        }
        let n4 = T3[v3(344)];
        if (s4 === n4 - 1) y3.push(t4);
        else {
          let e5, r3, i3 = 0, a3, o5, c4;
          for (e5 = s4; e5 < n4; e5++) {
            for (o5 = T3[e5], a3 = i3 + o5, c4 = [], r3 = 0; r3 < b3; r3++) c4.push(t4[r3][v3(354)](i3, a3));
            y3[v3(571)](c4), i3 = a3;
          }
        }
      }
    }
    for (var F3 = [], I3 = [], z3 = false, B2 = a2.length + o3; I3.length < B2; ) {
      for (var V2 = t3 ? w3.decode(_3) : r2(C3, `IAEX`, S3); V2--; ) I3.push(z3);
      z3 = !z3;
    }
    for (var H2 = 0, U2 = a2.length; H2 < U2; H2++) I3[H2] && F3.push(a2[H2]);
    for (var W2 = 0; W2 < o3; H2++, W2++) I3[H2] && F3[v3(571)](y3[W2]);
    return F3;
  }
  function h2(t3, n3, a2, o3, s3, c3, l3, u3, d3, f3, m3, h3, g3, _3, v3, y3, b3, x3, S3) {
    let C3 = e2;
    if (t3 && n3) throw new $(`refinement with Huffman is not supported`);
    var w3 = [], T3, E3;
    for (T3 = 0; T3 < o3; T3++) {
      if (E3 = new Uint8Array(a2), s3) for (var D3 = 0; D3 < a2; D3++) E3[D3] = s3;
      w3.push(E3);
    }
    var O3 = b3.decoder, k3 = b3.contextCache, A3 = t3 ? -_3.tableDeltaT[C3(568)](S3) : -r2(k3, `IADT`, O3), j3 = 0;
    for (T3 = 0; T3 < c3; ) {
      var M3 = t3 ? _3.tableDeltaT.decode(S3) : r2(k3, C3(512), O3);
      A3 += M3;
      var N3 = t3 ? _3.tableFirstS.decode(S3) : r2(k3, `IAFS`, O3);
      j3 += N3;
      var P3 = j3;
      do {
        let e3 = 0;
        l3 > 1 && (e3 = t3 ? S3[C3(397)](x3) : r2(k3, `IAIT`, O3));
        var F3 = l3 * A3 + e3, I3 = t3 ? _3.symbolIDTable.decode(S3) : i2(k3, O3, d3), L3 = n3 && (t3 ? S3[C3(426)]() : r2(k3, C3(408), O3)), R3 = u3[I3], z3 = R3[0].length, B2 = R3.length;
        if (L3) {
          var V2 = r2(k3, `IARDW`, O3), H2 = r2(k3, `IARDH`, O3), U2 = r2(k3, `IARDX`, O3), W2 = r2(k3, C3(376), O3);
          z3 += V2, B2 += H2, R3 = p2(z3, B2, v3, R3, (V2 >> 1) + U2, (H2 >> 1) + W2, false, y3, b3);
        }
        var G2 = F3 - (h3 & 1 ? 0 : B2 - 1), K2 = P3 - (h3 & 2 ? z3 - 1 : 0), q2, J2, ee2;
        if (f3) {
          for (q2 = 0; q2 < B2; q2++) if (E3 = w3[K2 + q2], E3) {
            ee2 = R3[q2];
            var te2 = Math[C3(446)](a2 - G2, z3);
            switch (g3) {
              case 0:
                for (J2 = 0; J2 < te2; J2++) E3[G2 + J2] |= ee2[J2];
                break;
              case 2:
                for (J2 = 0; J2 < te2; J2++) E3[G2 + J2] ^= ee2[J2];
                break;
              default:
                throw new $(`operator ` + g3 + ` is not supported`);
            }
          }
          P3 += B2 - 1;
        } else {
          for (J2 = 0; J2 < B2; J2++) if (E3 = w3[G2 + J2], E3) switch (ee2 = R3[J2], g3) {
            case 0:
              for (q2 = 0; q2 < z3; q2++) E3[K2 + q2] |= ee2[q2];
              break;
            case 2:
              for (q2 = 0; q2 < z3; q2++) E3[K2 + q2] ^= ee2[q2];
              break;
            default:
              throw new $(`operator ` + g3 + ` is not supported`);
          }
          P3 += z3 - 1;
        }
        T3++;
        var ne2 = t3 ? _3.tableDeltaS[C3(568)](S3) : r2(k3, `IADS`, O3);
        if (ne2 === null) break;
        P3 += ne2 + m3;
      } while (true);
    }
    return w3;
  }
  function g2(t3, n3, r3, i3, a2, o3) {
    let s3 = e2, c3 = [];
    t3 || (c3[s3(571)]({ x: -n3, y: 0 }), a2 === 0 && (c3.push({ x: -3, y: -1 }), c3.push({ x: 2, y: -2 }), c3.push({ x: -2, y: -2 })));
    let l3 = f2(t3, (i3 + 1) * n3, r3, a2, false, null, c3, o3), u3 = [];
    for (let e3 = 0; e3 <= i3; e3++) {
      let t4 = [], i4 = n3 * e3, a3 = i4 + n3;
      for (let e4 = 0; e4 < r3; e4++) t4.push(l3[e4].subarray(i4, a3));
      u3.push(t4);
    }
    return u3;
  }
  function _2(t3, n3, r3, i3, a2, o3, s3, c3, l3, u3, d3, p3, m3, h3, g3) {
    let _3 = e2;
    if (s3) throw new $(`skip is not supported`);
    if (c3 !== 0) throw new $(_3(519) + c3 + ` is not supported in halftone region`);
    let v3 = [], y3, b3, x3;
    for (y3 = 0; y3 < a2; y3++) {
      if (x3 = new Uint8Array(i3), o3) for (b3 = 0; b3 < i3; b3++) x3[b3] = o3;
      v3[_3(571)](x3);
    }
    let S3 = n3.length, C3 = n3[0], w3 = C3[0].length, T3 = C3.length, E3 = le(S3), D3 = [];
    t3 || (D3[_3(571)]({ x: r3 <= 1 ? 3 : 2, y: -1 }), r3 === 0 && (D3.push({ x: -3, y: -1 }), D3.push({ x: 2, y: -2 }), D3.push({ x: -2, y: -2 })));
    let O3 = [], k3, A3;
    for (t3 && (k3 = new N2(g3.data, g3[_3(552)], g3.end)), y3 = E3 - 1; y3 >= 0; y3--) A3 = t3 ? R2(k3, l3, u3, true) : f2(false, l3, u3, r3, false, null, D3, g3), O3[y3] = A3;
    let j3, M3, P3, F3, I3, L3, z3, B2, V2;
    for (j3 = 0; j3 < u3; j3++) for (M3 = 0; M3 < l3; M3++) {
      for (P3 = 0, F3 = 0, b3 = E3 - 1; b3 >= 0; b3--) P3 = O3[b3][j3][M3] ^ P3, F3 |= P3 << b3;
      if (I3 = n3[F3], L3 = d3 + j3 * h3 + M3 * m3 >> 8, z3 = p3 + j3 * m3 - M3 * h3 >> 8, L3 >= 0 && L3 + w3 <= i3 && z3 >= 0 && z3 + T3 <= a2) for (y3 = 0; y3 < T3; y3++) for (V2 = v3[z3 + y3], B2 = I3[y3], b3 = 0; b3 < w3; b3++) V2[L3 + b3] |= B2[b3];
      else {
        let e3, t4;
        for (y3 = 0; y3 < T3; y3++) if (t4 = z3 + y3, !(t4 < 0 || t4 >= a2)) for (V2 = v3[t4], B2 = I3[y3], b3 = 0; b3 < w3; b3++) e3 = L3 + b3, e3 >= 0 && e3 < i3 && (V2[e3] |= B2[b3]);
      }
    }
    return v3;
  }
  function v2(t3, n3) {
    let r3 = e2;
    var i3 = {};
    i3.number = Q(t3, n3);
    var a2 = t3[n3 + 4], s3 = a2 & 63;
    if (!o2[s3]) throw new $(`invalid segment type: ` + s3);
    i3.type = s3, i3.typeName = o2[s3], i3.deferredNonRetain = !!(a2 & 128);
    var c3 = !!(a2 & 64), l3 = t3[n3 + 5], u3 = l3 >> 5 & 7, d3 = [l3 & 31], f3 = n3 + 6;
    if (l3 === 7) {
      u3 = Q(t3, f3 - 1) & 536870911, f3 += 3;
      var p3 = u3 + 7 >> 3;
      for (d3[0] = t3[f3++]; --p3 > 0; ) d3.push(t3[f3++]);
    } else if (l3 === 5 || l3 === 6) throw new $(`invalid referred-to flags`);
    i3.retainBits = d3;
    let m3 = 4;
    i3.number <= 256 ? m3 = 1 : i3.number <= 65536 && (m3 = 2);
    var h3 = [], g3, _3;
    for (g3 = 0; g3 < u3; g3++) {
      let e3;
      e3 = m3 === 1 ? t3[f3] : m3 === 2 ? ue(t3, f3) : Q(t3, f3), h3.push(e3), f3 += m3;
    }
    if (i3.referredTo = h3, c3 ? (i3.pageAssociation = Q(t3, f3), f3 += 4) : i3[r3(460)] = t3[f3++], i3.length = Q(t3, f3), f3 += 4, i3[r3(344)] === 4294967295) if (s3 === 38) {
      var v3 = b2(t3, f3), y3 = !!(t3[f3 + x2] & 1), S3 = 6, C3 = new Uint8Array(S3);
      for (y3 || (C3[0] = 255, C3[1] = 172), C3[2] = v3.height >>> 24 & 255, C3[3] = v3[r3(504)] >> 16 & 255, C3[4] = v3[r3(504)] >> 8 & 255, C3[5] = v3.height & 255, g3 = f3, _3 = t3.length; g3 < _3; g3++) {
        for (var w3 = 0; w3 < S3 && C3[w3] === t3[g3 + w3]; ) w3++;
        if (w3 === S3) {
          i3.length = g3 + S3;
          break;
        }
      }
      if (i3.length === 4294967295) throw new $(r3(456));
    } else throw new $(`invalid unknown segment length`);
    return i3[r3(417)] = f3, i3;
  }
  function y2(t3, n3, r3, i3) {
    let a2 = e2;
    for (var o3 = [], s3 = r3; s3 < i3; ) {
      var c3 = v2(n3, s3);
      s3 = c3.headerEnd;
      var l3 = { header: c3, data: n3 };
      if (t3[a2(350)] || (l3.start = s3, s3 += c3[a2(344)], l3.end = s3), o3[a2(571)](l3), c3.type === 51) break;
    }
    if (t3.randomAccess) for (var u3 = 0, d3 = o3[a2(344)]; u3 < d3; u3++) o3[u3][a2(552)] = s3, s3 += o3[u3].header.length, o3[u3][a2(447)] = s3;
    return o3;
  }
  function b2(e3, t3) {
    return { width: Q(e3, t3), height: Q(e3, t3 + 4), x: Q(e3, t3 + 8), y: Q(e3, t3 + 12), combinationOperator: e3[t3 + 16] & 7 };
  }
  var x2 = 17;
  function S2(t3, n3) {
    let r3 = e2;
    var i3 = t3[r3(572)], a2 = t3.data, o3 = t3.start, s3 = t3[r3(447)], c3, l3, u3, d3;
    switch (i3.type) {
      case 0:
        var f3 = {}, p3 = ue(a2, o3);
        if (f3.huffman = !!(p3 & 1), f3.refinement = !!(p3 & 2), f3.huffmanDHSelector = p3 >> 2 & 3, f3.huffmanDWSelector = p3 >> 4 & 3, f3.bitmapSizeSelector = p3 >> 6 & 1, f3.aggregationInstancesSelector = p3 >> 7 & 1, f3.bitmapCodingContextUsed = !!(p3 & 256), f3.bitmapCodingContextRetained = !!(p3 & 512), f3.template = p3 >> 10 & 3, f3[r3(492)] = p3 >> 12 & 1, o3 += 2, !f3.huffman) {
          for (d3 = f3.template === 0 ? 4 : 1, l3 = [], u3 = 0; u3 < d3; u3++) l3.push({ x: Z(a2, o3), y: Z(a2, o3 + 1) }), o3 += 2;
          f3.at = l3;
        }
        if (f3.refinement && !f3.refinementTemplate) {
          for (l3 = [], u3 = 0; u3 < 2; u3++) l3.push({ x: Z(a2, o3), y: Z(a2, o3 + 1) }), o3 += 2;
          f3.refinementAt = l3;
        }
        f3.numberOfExportedSymbols = Q(a2, o3), o3 += 4, f3[r3(522)] = Q(a2, o3), o3 += 4, c3 = [f3, i3.number, i3.referredTo, a2, o3, s3];
        break;
      case 6:
      case 7:
        var m3 = {};
        m3[r3(554)] = b2(a2, o3), o3 += x2;
        var h3 = ue(a2, o3);
        if (o3 += 2, m3[r3(378)] = !!(h3 & 1), m3.refinement = !!(h3 & 2), m3.logStripSize = h3 >> 2 & 3, m3.stripSize = 1 << m3.logStripSize, m3[r3(529)] = h3 >> 4 & 3, m3.transposed = !!(h3 & 64), m3.combinationOperator = h3 >> 7 & 3, m3.defaultPixelValue = h3 >> 9 & 1, m3.dsOffset = h3 << 17 >> 27, m3[r3(492)] = h3 >> 15 & 1, m3.huffman) {
          var g3 = ue(a2, o3);
          o3 += 2, m3[r3(357)] = g3 & 3, m3.huffmanDS = g3 >> 2 & 3, m3.huffmanDT = g3 >> 4 & 3, m3.huffmanRefinementDW = g3 >> 6 & 3, m3[r3(421)] = g3 >> 8 & 3, m3.huffmanRefinementDX = g3 >> 10 & 3, m3.huffmanRefinementDY = g3 >> 12 & 3, m3.huffmanRefinementSizeSelector = !!(g3 & 16384);
        }
        if (m3.refinement && !m3[r3(492)]) {
          for (l3 = [], u3 = 0; u3 < 2; u3++) l3.push({ x: Z(a2, o3), y: Z(a2, o3 + 1) }), o3 += 2;
          m3.refinementAt = l3;
        }
        m3[r3(470)] = Q(a2, o3), o3 += 4, c3 = [m3, i3[r3(520)], a2, o3, s3];
        break;
      case 16:
        let e3 = {}, t4 = a2[o3++];
        e3[r3(506)] = !!(t4 & 1), e3.template = t4 >> 1 & 3, e3.patternWidth = a2[o3++], e3.patternHeight = a2[o3++], e3.maxPatternIndex = Q(a2, o3), o3 += 4, c3 = [e3, i3.number, a2, o3, s3];
        break;
      case 22:
      case 23:
        let n4 = {};
        n4.info = b2(a2, o3), o3 += x2;
        let C4 = a2[o3++];
        n4.mmr = !!(C4 & 1), n4.template = C4 >> 1 & 3, n4.enableSkip = !!(C4 & 8), n4[r3(563)] = C4 >> 4 & 7, n4[r3(358)] = C4 >> 7 & 1, n4.gridWidth = Q(a2, o3), o3 += 4, n4[r3(541)] = Q(a2, o3), o3 += 4, n4.gridOffsetX = Q(a2, o3) & 4294967295, o3 += 4, n4.gridOffsetY = Q(a2, o3) & 4294967295, o3 += 4, n4[r3(454)] = ue(a2, o3), o3 += 2, n4.gridVectorY = ue(a2, o3), o3 += 2, c3 = [n4, i3[r3(520)], a2, o3, s3];
        break;
      case 38:
      case 39:
        var _3 = {};
        _3.info = b2(a2, o3), o3 += x2;
        var v3 = a2[o3++];
        if (_3[r3(506)] = !!(v3 & 1), _3[r3(566)] = v3 >> 1 & 3, _3.prediction = !!(v3 & 8), !_3.mmr) {
          for (d3 = _3.template === 0 ? 4 : 1, l3 = [], u3 = 0; u3 < d3; u3++) l3.push({ x: Z(a2, o3), y: Z(a2, o3 + 1) }), o3 += 2;
          _3.at = l3;
        }
        c3 = [_3, a2, o3, s3];
        break;
      case 48:
        var y3 = { width: Q(a2, o3), height: Q(a2, o3 + 4), resolutionX: Q(a2, o3 + 8), resolutionY: Q(a2, o3 + 12) };
        y3.height === 4294967295 && delete y3.height;
        var S3 = a2[o3 + 16];
        ue(a2, o3 + 17), y3[r3(583)] = !!(S3 & 1), y3.refinement = !!(S3 & 2), y3.defaultPixelValue = S3 >> 2 & 1, y3.combinationOperator = S3 >> 3 & 3, y3.requiresBuffer = !!(S3 & 32), y3.combinationOperatorOverride = !!(S3 & 64), c3 = [y3];
        break;
      case 49:
        break;
      case 50:
        break;
      case 51:
        break;
      case 53:
        c3 = [i3[r3(419)], a2, o3, s3];
        break;
      case 62:
        break;
      default:
        throw new $(`segment type ` + i3.typeName + `(` + i3.type + `) is not implemented`);
    }
    var C3 = `on` + i3.typeName;
    C3 in n3 && n3[C3].apply(n3, c3);
  }
  function C2(e3, t3) {
    for (var n3 = 0, r3 = e3.length; n3 < r3; n3++) S2(e3[n3], t3);
  }
  function w2(t3) {
    let n3 = e2;
    for (var r3 = new E2(), i3 = 0, a2 = t3.length; i3 < a2; i3++) {
      var o3 = t3[i3];
      C2(y2({}, o3[n3(391)], o3[n3(552)], o3.end), r3);
    }
    return r3.buffer;
  }
  function T2(t3) {
    let n3 = e2, r3 = t3.length, i3 = 0;
    if (t3[i3] !== 151 || t3[i3 + 1] !== 74 || t3[i3 + 2] !== 66 || t3[i3 + 3] !== 50 || t3[i3 + 4] !== 13 || t3[i3 + 5] !== 10 || t3[i3 + 6] !== 26 || t3[i3 + 7] !== 10) throw new $(`parseJbig2 - invalid header.`);
    let a2 = /* @__PURE__ */ Object.create(null);
    i3 += 8;
    let o3 = t3[i3++];
    a2[n3(350)] = !(o3 & 1), o3 & 2 || (a2[n3(438)] = Q(t3, i3), i3 += 4);
    let s3 = y2(a2, t3, i3, r3), c3 = new E2();
    C2(s3, c3);
    let { width: l3, height: u3 } = c3.currentPageInfo, d3 = c3.buffer, f3 = new Uint8ClampedArray(l3 * u3), p3 = 0, m3 = 0;
    for (let e3 = 0; e3 < u3; e3++) {
      let e4 = 0, t4;
      for (let n4 = 0; n4 < l3; n4++) e4 || (e4 = 128, t4 = d3[m3++]), f3[p3++] = t4 & e4 ? 0 : 255, e4 >>= 1;
    }
    return { imgData: f3, width: l3, height: u3 };
  }
  function E2() {
  }
  E2.prototype = { onPageInformation: function(t3) {
    let n3 = e2;
    this.currentPageInfo = t3;
    var r3 = t3.width + 7 >> 3, i3 = new Uint8ClampedArray(r3 * t3[n3(504)]);
    if (t3.defaultPixelValue) for (var a2 = 0, o3 = i3.length; a2 < o3; a2++) i3[a2] = 255;
    this.buffer = i3;
  }, drawBitmap: function(t3, n3) {
    let r3 = e2;
    var i3 = this.currentPageInfo, a2 = t3.width, o3 = t3.height, s3 = i3.width + 7 >> 3, c3 = i3[r3(485)] ? t3.combinationOperator : i3.combinationOperator, l3 = this.buffer, u3 = 128 >> (t3.x & 7), d3 = t3.y * s3 + (t3.x >> 3), f3, p3, m3, h3;
    switch (c3) {
      case 0:
        for (f3 = 0; f3 < o3; f3++) {
          for (m3 = u3, h3 = d3, p3 = 0; p3 < a2; p3++) n3[f3][p3] && (l3[h3] |= m3), m3 >>= 1, m3 || (m3 = 128, h3++);
          d3 += s3;
        }
        break;
      case 2:
        for (f3 = 0; f3 < o3; f3++) {
          for (m3 = u3, h3 = d3, p3 = 0; p3 < a2; p3++) n3[f3][p3] && (l3[h3] ^= m3), m3 >>= 1, m3 || (m3 = 128, h3++);
          d3 += s3;
        }
        break;
      default:
        throw new $(`operator ` + c3 + ` is not supported`);
    }
  }, onImmediateGenericRegion: function(e3, t3, r3, i3) {
    var a2 = e3.info, o3 = new n2(t3, r3, i3), s3 = f2(e3.mmr, a2.width, a2.height, e3.template, e3.prediction, null, e3.at, o3);
    this.drawBitmap(a2, s3);
  }, onImmediateLosslessGenericRegion: function() {
    this.onImmediateGenericRegion.apply(this, arguments);
  }, onSymbolDictionary: function(t3, r3, i3, a2, o3, s3) {
    let c3 = e2, l3, u3;
    t3.huffman && (l3 = I2(t3, i3, this.customTables), u3 = new N2(a2, o3, s3));
    var d3 = this.symbols;
    d3 || (this[c3(385)] = d3 = {});
    for (var f3 = [], p3 = 0, h3 = i3[c3(344)]; p3 < h3; p3++) {
      let e3 = d3[i3[p3]];
      e3 && (f3 = f3.concat(e3));
    }
    var g3 = new n2(a2, o3, s3);
    d3[r3] = m2(t3.huffman, t3[c3(363)], f3, t3.numberOfNewSymbols, t3.numberOfExportedSymbols, l3, t3.template, t3.at, t3.refinementTemplate, t3.refinementAt, g3, u3);
  }, onImmediateTextRegion: function(t3, r3, i3, a2, o3) {
    let s3 = e2;
    var c3 = t3.info;
    let l3, u3;
    for (var d3 = this.symbols, f3 = [], p3 = 0, m3 = r3[s3(344)]; p3 < m3; p3++) {
      let e3 = d3[r3[p3]];
      e3 && (f3 = f3.concat(e3));
    }
    var g3 = le(f3.length);
    t3.huffman && (u3 = new N2(i3, a2, o3), l3 = F2(t3, r3, this.customTables, f3.length, u3));
    var _3 = new n2(i3, a2, o3), v3 = h2(t3.huffman, t3.refinement, c3[s3(349)], c3.height, t3.defaultPixelValue, t3.numberOfSymbolInstances, t3.stripSize, f3, g3, t3[s3(530)], t3.dsOffset, t3.referenceCorner, t3.combinationOperator, l3, t3.refinementTemplate, t3.refinementAt, _3, t3.logStripSize, u3);
    this.drawBitmap(c3, v3);
  }, onImmediateLosslessTextRegion: function() {
    let t3 = e2;
    this[t3(445)].apply(this, arguments);
  }, onPatternDictionary(t3, r3, i3, a2, o3) {
    let s3 = e2, c3 = this.patterns;
    c3 || (this[s3(560)] = c3 = {});
    let l3 = new n2(i3, a2, o3);
    c3[r3] = g2(t3.mmr, t3.patternWidth, t3[s3(505)], t3.maxPatternIndex, t3.template, l3);
  }, onImmediateHalftoneRegion(t3, r3, i3, a2, o3) {
    let s3 = e2, c3 = this.patterns[r3[0]], l3 = t3[s3(554)], u3 = new n2(i3, a2, o3), d3 = _2(t3[s3(506)], c3, t3.template, l3.width, l3.height, t3.defaultPixelValue, t3[s3(444)], t3.combinationOperator, t3.gridWidth, t3.gridHeight, t3.gridOffsetX, t3.gridOffsetY, t3.gridVectorX, t3.gridVectorY, u3);
    this.drawBitmap(l3, d3);
  }, onImmediateLosslessHalftoneRegion() {
    let t3 = e2;
    this.onImmediateHalftoneRegion[t3(487)](this, arguments);
  }, onTables(t3, n3, r3, i3) {
    let a2 = e2, o3 = this[a2(539)];
    o3 || (this.customTables = o3 = {}), o3[t3] = A2(n3, r3, i3);
  } };
  function D2(e3) {
    e3.length === 2 ? (this.isOOB = true, this.rangeLow = 0, this.prefixLength = e3[0], this.rangeLength = 0, this.prefixCode = e3[1], this.isLowerRange = false) : (this.isOOB = false, this.rangeLow = e3[0], this.prefixLength = e3[1], this.rangeLength = e3[2], this.prefixCode = e3[3], this.isLowerRange = e3[4] === `lower`);
  }
  function O2(t3) {
    let n3 = e2;
    this[n3(402)] = [], t3 ? (this[n3(525)] = true, this.rangeLength = t3.rangeLength, this.rangeLow = t3.rangeLow, this.isLowerRange = t3.isLowerRange, this.isOOB = t3.isOOB) : this.isLeaf = false;
  }
  O2.prototype = { buildTree(t3, n3) {
    let r3 = t3[e2(573)] >> n3 & 1;
    if (n3 <= 0) this.children[r3] = new O2(t3);
    else {
      let e3 = this.children[r3];
      e3 || (this.children[r3] = e3 = new O2(null)), e3.buildTree(t3, n3 - 1);
    }
  }, decodeNode(t3) {
    let n3 = e2;
    if (this[n3(525)]) {
      if (this.isOOB) return null;
      let e3 = t3.readBits(this.rangeLength);
      return this.rangeLow + (this.isLowerRange ? -e3 : e3);
    }
    let r3 = this.children[t3[n3(426)]()];
    if (!r3) throw new $(`invalid Huffman data`);
    return r3.decodeNode(t3);
  } };
  function k2(t3, n3) {
    let r3 = e2;
    n3 || this.assignPrefixCodes(t3), this.rootNode = new O2(null);
    for (let e3 = 0, n4 = t3.length; e3 < n4; e3++) {
      let n5 = t3[e3];
      n5[r3(448)] > 0 && this.rootNode[r3(595)](n5, n5.prefixLength - 1);
    }
  }
  k2.prototype = { decode(t3) {
    let n3 = e2;
    return this.rootNode[n3(356)](t3);
  }, assignPrefixCodes(t3) {
    let n3 = t3[e2(344)], r3 = 0;
    for (let e3 = 0; e3 < n3; e3++) r3 = Math.max(r3, t3[e3].prefixLength);
    let i3 = new Uint32Array(r3 + 1);
    for (let e3 = 0; e3 < n3; e3++) i3[t3[e3].prefixLength]++;
    let a2 = 1, o3 = 0, s3, c3, l3;
    for (i3[0] = 0; a2 <= r3; ) {
      for (o3 = o3 + i3[a2 - 1] << 1, s3 = o3, c3 = 0; c3 < n3; ) l3 = t3[c3], l3.prefixLength === a2 && (l3.prefixCode = s3, s3++), c3++;
      a2++;
    }
  } };
  function A2(t3, n3, r3) {
    let i3 = e2, a2 = t3[n3], o3 = Q(t3, n3 + 1) & 4294967295, s3 = Q(t3, n3 + 5) & 4294967295, c3 = new N2(t3, n3 + 9, r3), l3 = (a2 >> 1 & 7) + 1, u3 = (a2 >> 4 & 7) + 1, d3 = [], f3, p3, m3 = o3;
    do
      f3 = c3.readBits(l3), p3 = c3.readBits(u3), d3.push(new D2([m3, f3, p3, 0])), m3 += 1 << p3;
    while (m3 < s3);
    return f3 = c3[i3(397)](l3), d3.push(new D2([o3 - 1, f3, 32, 0, `lower`])), f3 = c3[i3(397)](l3), d3[i3(571)](new D2([s3, f3, 32, 0])), a2 & 1 && (f3 = c3.readBits(l3), d3.push(new D2([f3, 0]))), new k2(d3, false);
  }
  let j2 = {};
  function M2(t3) {
    let n3 = e2, r3 = j2[t3];
    if (r3) return r3;
    let i3;
    switch (t3) {
      case 1:
        i3 = [[0, 1, 4, 0], [16, 2, 8, 2], [272, 3, 16, 6], [65808, 3, 32, 7]];
        break;
      case 2:
        i3 = [[0, 1, 0, 0], [1, 2, 0, 2], [2, 3, 0, 6], [3, 4, 3, 14], [11, 5, 6, 30], [75, 6, 32, 62], [6, 63]];
        break;
      case 3:
        i3 = [[-256, 8, 8, 254], [0, 1, 0, 0], [1, 2, 0, 2], [2, 3, 0, 6], [3, 4, 3, 14], [11, 5, 6, 30], [-257, 8, 32, 255, `lower`], [75, 7, 32, 126], [6, 62]];
        break;
      case 4:
        i3 = [[1, 1, 0, 0], [2, 2, 0, 2], [3, 3, 0, 6], [4, 4, 3, 14], [12, 5, 6, 30], [76, 5, 32, 31]];
        break;
      case 5:
        i3 = [[-255, 7, 8, 126], [1, 1, 0, 0], [2, 2, 0, 2], [3, 3, 0, 6], [4, 4, 3, 14], [12, 5, 6, 30], [-256, 7, 32, 127, `lower`], [76, 6, 32, 62]];
        break;
      case 6:
        i3 = [[-2048, 5, 10, 28], [-1024, 4, 9, 8], [-512, 4, 8, 9], [-256, 4, 7, 10], [-128, 5, 6, 29], [-64, 5, 5, 30], [-32, 4, 5, 11], [0, 2, 7, 0], [128, 3, 7, 2], [256, 3, 8, 3], [512, 4, 9, 12], [1024, 4, 10, 13], [-2049, 6, 32, 62, `lower`], [2048, 6, 32, 63]];
        break;
      case 7:
        i3 = [[-1024, 4, 9, 8], [-512, 3, 8, 0], [-256, 4, 7, 9], [-128, 5, 6, 26], [-64, 5, 5, 27], [-32, 4, 5, 10], [0, 4, 5, 11], [32, 5, 5, 28], [64, 5, 6, 29], [128, 4, 7, 12], [256, 3, 8, 1], [512, 3, 9, 2], [1024, 3, 10, 3], [-1025, 5, 32, 30, `lower`], [2048, 5, 32, 31]];
        break;
      case 8:
        i3 = [[-15, 8, 3, 252], [-7, 9, 1, 508], [-5, 8, 1, 253], [-3, 9, 0, 509], [-2, 7, 0, 124], [-1, 4, 0, 10], [0, 2, 1, 0], [2, 5, 0, 26], [3, 6, 0, 58], [4, 3, 4, 4], [20, 6, 1, 59], [22, 4, 4, 11], [38, 4, 5, 12], [70, 5, 6, 27], [134, 5, 7, 28], [262, 6, 7, 60], [390, 7, 8, 125], [646, 6, 10, 61], [-16, 9, 32, 510, n3(550)], [1670, 9, 32, 511], [2, 1]];
        break;
      case 9:
        i3 = [[-31, 8, 4, 252], [-15, 9, 2, 508], [-11, 8, 2, 253], [-7, 9, 1, 509], [-5, 7, 1, 124], [-3, 4, 1, 10], [-1, 3, 1, 2], [1, 3, 1, 3], [3, 5, 1, 26], [5, 6, 1, 58], [7, 3, 5, 4], [39, 6, 2, 59], [43, 4, 5, 11], [75, 4, 6, 12], [139, 5, 7, 27], [267, 5, 8, 28], [523, 6, 8, 60], [779, 7, 9, 125], [1291, 6, 11, 61], [-32, 9, 32, 510, `lower`], [3339, 9, 32, 511], [2, 0]];
        break;
      case 10:
        i3 = [[-21, 7, 4, 122], [-5, 8, 0, 252], [-4, 7, 0, 123], [-3, 5, 0, 24], [-2, 2, 2, 0], [2, 5, 0, 25], [3, 6, 0, 54], [4, 7, 0, 124], [5, 8, 0, 253], [6, 2, 6, 1], [70, 5, 5, 26], [102, 6, 5, 55], [134, 6, 6, 56], [198, 6, 7, 57], [326, 6, 8, 58], [582, 6, 9, 59], [1094, 6, 10, 60], [2118, 7, 11, 125], [-22, 8, 32, 254, `lower`], [4166, 8, 32, 255], [2, 2]];
        break;
      case 11:
        i3 = [[1, 1, 0, 0], [2, 2, 1, 2], [4, 4, 0, 12], [5, 4, 1, 13], [7, 5, 1, 28], [9, 5, 2, 29], [13, 6, 2, 60], [17, 7, 2, 122], [21, 7, 3, 123], [29, 7, 4, 124], [45, 7, 5, 125], [77, 7, 6, 126], [141, 7, 32, 127]];
        break;
      case 12:
        i3 = [[1, 1, 0, 0], [2, 2, 0, 2], [3, 3, 1, 6], [5, 5, 0, 28], [6, 5, 1, 29], [8, 6, 1, 60], [10, 7, 0, 122], [11, 7, 1, 123], [13, 7, 2, 124], [17, 7, 3, 125], [25, 7, 4, 126], [41, 8, 5, 254], [73, 8, 32, 255]];
        break;
      case 13:
        i3 = [[1, 1, 0, 0], [2, 3, 0, 4], [3, 4, 0, 12], [4, 5, 0, 28], [5, 4, 1, 13], [7, 3, 3, 5], [15, 6, 1, 58], [17, 6, 2, 59], [21, 6, 3, 60], [29, 6, 4, 61], [45, 6, 5, 62], [77, 7, 6, 126], [141, 7, 32, 127]];
        break;
      case 14:
        i3 = [[-2, 3, 0, 4], [-1, 3, 0, 5], [0, 1, 0, 0], [1, 3, 0, 6], [2, 3, 0, 7]];
        break;
      case 15:
        i3 = [[-24, 7, 4, 124], [-8, 6, 2, 60], [-4, 5, 1, 28], [-2, 4, 0, 12], [-1, 3, 0, 4], [0, 1, 0, 0], [1, 3, 0, 5], [2, 4, 0, 13], [3, 5, 1, 29], [5, 6, 2, 61], [9, 7, 4, 125], [-25, 7, 32, 126, `lower`], [25, 7, 32, 127]];
        break;
      default:
        throw new $(`standard table B.` + t3 + ` does not exist`);
    }
    for (let e3 = 0, t4 = i3.length; e3 < t4; e3++) i3[e3] = new D2(i3[e3]);
    return r3 = new k2(i3, true), j2[t3] = r3, r3;
  }
  function N2(t3, n3, r3) {
    let i3 = e2;
    this.data = t3, this[i3(552)] = n3, this[i3(447)] = r3, this[i3(582)] = n3, this.shift = -1, this.currentByte = 0;
  }
  N2.prototype = { readBit() {
    let t3 = e2;
    if (this.shift < 0) {
      if (this.position >= this.end) throw new $(`end of data while reading bit`);
      this.currentByte = this.data[this.position++], this[t3(562)] = 7;
    }
    let n3 = this.currentByte >> this.shift & 1;
    return this.shift--, n3;
  }, readBits(e3) {
    let t3 = 0, n3;
    for (n3 = e3 - 1; n3 >= 0; n3--) t3 |= this.readBit() << n3;
    return t3;
  }, byteAlign() {
    let t3 = e2;
    this[t3(562)] = -1;
  }, next() {
    return this.position >= this.end ? -1 : this.data[this.position++];
  } };
  function P2(e3, t3, n3) {
    let r3 = 0;
    for (let i3 = 0, a2 = t3.length; i3 < a2; i3++) {
      let a3 = n3[t3[i3]];
      if (a3) {
        if (e3 === r3) return a3;
        r3++;
      }
    }
    throw new $(`can't find custom Huffman table`);
  }
  function F2(t3, n3, r3, i3, a2) {
    let o3 = e2, s3 = [];
    for (let e3 = 0; e3 <= 34; e3++) {
      let t4 = a2[o3(397)](4);
      s3.push(new D2([e3, t4, 0, 0]));
    }
    let c3 = new k2(s3, false);
    s3[o3(344)] = 0;
    for (let e3 = 0; e3 < i3; ) {
      let t4 = c3.decode(a2);
      if (t4 >= 32) {
        let n4, r4, i4;
        switch (t4) {
          case 32:
            if (e3 === 0) throw new $(o3(593));
            r4 = a2.readBits(2) + 3, n4 = s3[e3 - 1].prefixLength;
            break;
          case 33:
            r4 = a2.readBits(3) + 3, n4 = 0;
            break;
          case 34:
            r4 = a2.readBits(7) + 11, n4 = 0;
            break;
          default:
            throw new $(`invalid code length in symbol ID table`);
        }
        for (i4 = 0; i4 < r4; i4++) s3.push(new D2([e3, n4, 0, 0])), e3++;
      } else s3.push(new D2([e3, t4, 0, 0])), e3++;
    }
    a2.byteAlign();
    let l3 = new k2(s3, false), u3 = 0, d3, f3, p3;
    switch (t3[o3(357)]) {
      case 0:
      case 1:
        d3 = M2(t3.huffmanFS + 6);
        break;
      case 3:
        d3 = P2(u3, n3, r3), u3++;
        break;
      default:
        throw new $(`invalid Huffman FS selector`);
    }
    switch (t3[o3(364)]) {
      case 0:
      case 1:
      case 2:
        f3 = M2(t3.huffmanDS + 8);
        break;
      case 3:
        f3 = P2(u3, n3, r3), u3++;
        break;
      default:
        throw new $(`invalid Huffman DS selector`);
    }
    switch (t3.huffmanDT) {
      case 0:
      case 1:
      case 2:
        p3 = M2(t3.huffmanDT + 11);
        break;
      case 3:
        p3 = P2(u3, n3, r3), u3++;
        break;
      default:
        throw new $(`invalid Huffman DT selector`);
    }
    if (t3.refinement) throw new $(`refinement with Huffman is not supported`);
    return { symbolIDTable: l3, tableFirstS: d3, tableDeltaS: f3, tableDeltaT: p3 };
  }
  function I2(e3, t3, n3) {
    let r3 = 0, i3, a2;
    switch (e3.huffmanDHSelector) {
      case 0:
      case 1:
        i3 = M2(e3.huffmanDHSelector + 4);
        break;
      case 3:
        i3 = P2(r3, t3, n3), r3++;
        break;
      default:
        throw new $(`invalid Huffman DH selector`);
    }
    switch (e3.huffmanDWSelector) {
      case 0:
      case 1:
        a2 = M2(e3.huffmanDWSelector + 2);
        break;
      case 3:
        a2 = P2(r3, t3, n3), r3++;
        break;
      default:
        throw new $(`invalid Huffman DW selector`);
    }
    let o3, s3;
    return e3.bitmapSizeSelector ? (o3 = P2(r3, t3, n3), r3++) : o3 = M2(1), s3 = e3.aggregationInstancesSelector ? P2(r3, t3, n3) : M2(1), { tableDeltaHeight: i3, tableDeltaWidth: a2, tableBitmapSize: o3, tableAggregateInstances: s3 };
  }
  function L2(t3, n3, r3) {
    let i3 = e2, a2 = [];
    for (let e3 = 0; e3 < r3; e3++) {
      let e4 = new Uint8Array(n3);
      a2[i3(571)](e4);
      for (let r4 = 0; r4 < n3; r4++) e4[r4] = t3.readBit();
      t3.byteAlign();
    }
    return a2;
  }
  function R2(e3, t3, n3, r3) {
    let i3 = new pe(e3, { K: -1, Columns: t3, Rows: n3, BlackIs1: true, EndOfBlock: r3 }), a2 = [], o3, s3 = false;
    for (let e4 = 0; e4 < n3; e4++) {
      let e5 = new Uint8Array(t3);
      a2.push(e5);
      let n4 = -1;
      for (let r4 = 0; r4 < t3; r4++) n4 < 0 && (o3 = i3.readNextChar(), o3 === -1 && (o3 = 0, s3 = true), n4 = 7), e5[r4] = o3 >> n4 & 1, n4--;
    }
    if (r3 && !s3) for (let e4 = 0; e4 < 5 && i3.readNextChar() !== -1; e4++) ;
    return a2;
  }
  function z2() {
  }
  return z2.prototype = { parseChunks(e3) {
    return w2(e3);
  }, parse(e3) {
    let { imgData: t3, width: n3, height: r3 } = T2(e3);
    return this.width = n3, this.height = r3, t3;
  } }, z2;
})();
n();
var he = () => {
  globalThis[a(478)] || (globalThis.global = globalThis), globalThis.xmlParseFlag = 0;
}, ge = function(e2) {
  return new Promise((t2, n2) => {
    let r2 = X;
    te.default[r2(388)](e2).then(function(e3) {
      t2(e3);
    }, function(e3) {
      n2(e3);
    });
  });
}, _e = (function() {
  var e2 = r(function* (e3) {
    let t2 = (yield Me(e3, `OFD.xml`)).json[`ofd:OFD`][`ofd:DocBody`], n2 = [];
    return n2 = n2.concat(t2), [e3, n2];
  });
  return function(t2) {
    return e2.apply(this, arguments);
  };
})(), ve = (function() {
  var e2 = r(function* ([e3, t2]) {
    let n2 = [];
    for (let r2 of t2) if (r2) {
      let t3 = yield ye(e3, r2);
      t3 = yield be(t3), t3 = yield Se(t3), t3 = yield Ce(t3), t3 = yield we(t3), t3 = yield Te(t3), n2.push(t3);
    }
    return n2;
  });
  return function(t2) {
    return e2.apply(this, arguments);
  };
})(), ye = (function() {
  var e2 = r(function* (e3, t2) {
    let n2 = X, r2 = t2[`ofd:DocRoot`];
    r2 = _(r2);
    let i2 = r2.split(`/`)[0], a2 = t2[`ofd:Signatures`], o2 = yield Ae(e3, a2, i2), s2 = {};
    for (let e4 of o2) if (e4.sealObj && Object.keys(e4.sealObj).length > 0) {
      if (e4.sealObj.type === `ofd`) {
        let t3 = yield je(e4);
        for (let r3 of t3) e4.stampAnnot.boundary = w(e4.stampAnnot[`@_Boundary`]), e4.stampAnnot[n2(501)] = e4.stampAnnot[`@_PageRef`], s2[e4.stampAnnot[n2(441)]] || (s2[e4.stampAnnot[`@_PageRef`]] = []), s2[e4.stampAnnot[`@_PageRef`]].push({ type: `ofd`, obj: r3, stamp: e4 });
      } else if (e4[n2(395)].type === `png`) {
        let t3 = `data:image/png;base64,` + btoa(String.fromCharCode[n2(487)](null, e4.sealObj.ofdArray)), r3 = [];
        r3 = r3[n2(594)](e4[n2(457)]);
        for (let i3 of r3) if (i3) {
          let r4 = { img: t3, pageId: i3[`@_PageRef`], boundary: w(i3[n2(403)]), clip: w(i3[`@_Clip`]) };
          s2[i3[`@_PageRef`]] || (s2[i3[`@_PageRef`]] = []), s2[i3[`@_PageRef`]].push({ type: `png`, obj: r4, stamp: e4 });
        }
      }
    }
    return [e3, i2, r2, s2];
  });
  return function(t2, n2) {
    return e2.apply(this, arguments);
  };
})(), be = (function() {
  var e2 = r(function* ([e3, t2, n2, r2]) {
    let i2 = X, a2 = (yield Me(e3, n2))[i2(464)][`ofd:Document`], o2 = a2[`ofd:Annotations`], s2 = [], c2;
    return o2 && (o2.indexOf(`/`) !== -1 && (c2 = o2[i2(479)](0, o2.indexOf(`/`))), o2[i2(576)](t2) === -1 && (o2 = t2 + `/` + o2), e3.files[o2] && (o2 = yield Me(e3, o2), s2 = s2.concat(o2[i2(464)][`ofd:Annotations`][`ofd:Page`]))), [e3, t2, a2, r2, yield xe(c2, s2, t2, e3)];
  });
  return function(t2) {
    return e2.apply(this, arguments);
  };
})(), xe = (function() {
  var e2 = r(function* (e3, t2, n2, r2) {
    let i2 = X, a2 = {};
    for (let o2 of t2) {
      if (!o2) continue;
      let t3 = o2[`@_PageID`], s2 = o2[`ofd:FileLoc`];
      if (s2 = _(s2), e3 && s2.indexOf(e3) === -1 && (s2 = e3 + `/` + s2), s2.indexOf(n2) === -1 && (s2 = n2 + `/` + s2), r2.files[s2]) {
        let e4 = yield Me(r2, s2), n3 = [];
        n3 = n3.concat(e4.json[`ofd:PageAnnot`][i2(586)]), a2[t3] || (a2[t3] = []);
        for (let e5 of n3) {
          if (!e5) continue;
          let n4 = e5[`@_Type`], r3 = e5[i2(524)] ? e5[`@_Visible`] : true, o3 = { type: n4, appearance: e5[i2(433)], visible: r3 };
          a2[t3].push(o3);
        }
      }
    }
    return a2;
  });
  return function(t2, n2, r2, i2) {
    return e2.apply(this, arguments);
  };
})(), Se = (function() {
  var e2 = r(function* ([e3, t2, n2, r2, i2]) {
    let a2 = X, o2 = n2[`ofd:CommonData`][`ofd:DocumentRes`], s2 = {}, c2 = {}, l2 = {};
    if (o2 && (o2.indexOf(t2) == -1 && (o2 = t2 + `/` + o2), e3[a2(585)][o2])) {
      let n3 = (yield Me(e3, o2)).json[`ofd:Res`];
      s2 = yield Ee(n3), c2 = yield De(n3), l2 = yield Oe(e3, n3, t2);
    }
    return [e3, t2, n2, r2, i2, s2, c2, l2];
  });
  return function(t2) {
    return e2[X(487)](this, arguments);
  };
})(), Ce = (function() {
  var e2 = r(function* ([e3, t2, n2, r2, i2, a2, o2, s2]) {
    let c2 = X, l2 = n2[c2(532)][`ofd:PublicRes`];
    if (l2 && (l2[c2(576)](t2) == -1 && (l2 = t2 + `/` + l2), e3[c2(585)][l2])) {
      let n3 = (yield Me(e3, l2)).json[`ofd:Res`], r3 = yield Ee(n3);
      a2 = Object.assign(a2, r3);
      let i3 = yield De(n3);
      o2 = Object.assign(o2, i3);
      let c3 = yield Oe(e3, n3, t2);
      s2 = Object.assign(s2, c3);
    }
    return [e3, t2, n2, r2, i2, a2, o2, s2];
  });
  return function(t2) {
    return e2.apply(this, arguments);
  };
})(), we = (function() {
  var e2 = r(function* ([e3, t2, n2, r2, i2, a2, o2, s2]) {
    let c2 = n2[X(532)][`ofd:TemplatePage`], l2 = [];
    l2 = l2.concat(c2);
    let u2 = {};
    for (let n3 of l2) if (n3) {
      let r3 = yield ke(e3, n3, t2);
      u2[Object.keys(r3)[0]] = r3[Object.keys(r3)[0]];
    }
    return [e3, t2, n2, r2, i2, u2, a2, o2, s2];
  });
  return function(t2) {
    return e2.apply(this, arguments);
  };
})(), Te = (function() {
  var e2 = r(function* ([e3, t2, n2, r2, i2, a2, o2, s2, c2]) {
    let l2 = n2[`ofd:Pages`][`ofd:Page`], u2 = [];
    u2 = u2.concat(l2);
    let d2 = [];
    for (let n3 of u2) if (n3) {
      let a3 = yield ke(e3, n3, t2), o3 = Object.keys(a3)[0], s3 = r2[o3];
      s3 && (a3[o3].stamp = s3);
      let c3 = i2[o3];
      c3 && (a3[o3].annotation = c3), d2.push(a3);
    }
    return { doc: t2, document: n2, pages: d2, tpls: a2, stampAnnot: r2, fontResObj: o2, drawParamResObj: s2, multiMediaResObj: c2 };
  });
  return function(t2) {
    return e2.apply(this, arguments);
  };
})(), Ee = (function() {
  var e2 = r(function* (e3) {
    let t2 = X, n2 = e3[`ofd:Fonts`], r2 = {};
    if (n2) {
      let e4 = [];
      e4 = e4.concat(n2[t2(380)]);
      for (let n3 of e4) n3 && (n3[t2(465)] ? r2[n3[t2(588)]] = n3[`@_FamilyName`] : r2[n3[`@_ID`]] = n3[`@_FontName`]);
    }
    return r2;
  });
  return function(t2) {
    return e2.apply(this, arguments);
  };
})(), De = (function() {
  var e2 = r(function* (e3) {
    let t2 = X, n2 = e3[`ofd:DrawParams`], r2 = {};
    if (n2) {
      let e4 = [];
      e4 = e4[t2(594)](n2[t2(458)]);
      for (let n3 of e4) n3 && (r2[n3[`@_ID`]] = { LineWidth: n3[`@_LineWidth`], FillColor: n3[`ofd:FillColor`] ? n3[t2(442)][`@_Value`] : ``, StrokeColor: n3[`ofd:StrokeColor`] ? n3[t2(416)][t2(564)] : ``, relative: n3[t2(415)] });
    }
    return r2;
  });
  return function(t2) {
    return e2.apply(this, arguments);
  };
})(), Oe = (function() {
  var e2 = r(function* (e3, t2, n2) {
    let r2 = X, i2 = t2[`ofd:MultiMedias`], a2 = {};
    if (i2) {
      let o2 = [];
      o2 = o2.concat(i2[`ofd:MultiMedia`]);
      for (let i3 of o2) if (i3) {
        let o3 = i3[`ofd:MediaFile`];
        if (t2[`@_BaseLoc`] && o3.indexOf(t2[`@_BaseLoc`]) === -1 && (o3 = t2[`@_BaseLoc`] + `/` + o3), o3.indexOf(n2) === -1 && (o3 = n2 + `/` + o3), i3[`@_Type`].toLowerCase() === `image`) {
          let t3 = i3[`@_Format`], n3 = v(o3);
          if (t3 && (t3.toLowerCase() === r2(526) || t3.toLowerCase() === `jb2`) || n3 && (n3.toLowerCase() === `jb2` || n3.toLowerCase() === `gbig2`)) {
            let t4 = yield Ne(e3, o3);
            a2[i3[r2(588)]] = t4;
          } else {
            let t4 = yield Pe(e3, o3);
            a2[i3[`@_ID`]] = { img: t4, format: `png` };
          }
        } else a2[i3[`@_ID`]] = o3;
      }
    }
    return a2;
  });
  return function(t2, n2, r2) {
    return e2.apply(this, arguments);
  };
})(), ke = (function() {
  var e2 = r(function* (e3, t2, n2) {
    let r2 = t2[`@_BaseLoc`];
    r2.indexOf(n2) == -1 && (r2 = n2 + `/` + r2);
    let i2 = yield Me(e3, r2), a2 = {};
    return a2[t2[`@_ID`]] = { json: i2.json[`ofd:Page`], xml: i2.xml }, a2;
  });
  return function(t2, n2, r2) {
    return e2.apply(this, arguments);
  };
})(), Ae = (function() {
  var e2 = r(function* (e3, t2, n2) {
    return [];
  });
  return function(t2, n2, r2) {
    return e2.apply(this, arguments);
  };
})(), je = function() {
  return Promise.resolve([]);
}, Me = (function() {
  var e2 = r(function* (e3, t2) {
    return new Promise((n2, r2) => {
      e3.files[t2].async(`string`).then(function(e4) {
        he(), n2({ xml: e4, json: ne.parse(e4, { attributeNamePrefix: `@_`, ignoreAttributes: false, parseNodeValue: false, trimValues: false }) });
      }, function(e4) {
        r2(e4);
      });
    });
  });
  return function(t2, n2) {
    return e2.apply(this, arguments);
  };
})(), Ne = (function() {
  var e2 = r(function* (e3, t2) {
    return new Promise((n2, r2) => {
      e3.files[t2].async(`uint8array`).then(function(e4) {
        let t3 = X, r3 = new me();
        n2({ img: r3.parse(e4), width: r3.width, height: r3[t3(504)], format: `gbig2` });
      }, function(e4) {
        r2(e4);
      });
    });
  });
  return function(t2, n2) {
    return e2.apply(this, arguments);
  };
})(), Pe = (function() {
  var e2 = r(function* (e3, t2) {
    return new Promise((n2, r2) => {
      e3.files[t2].async(`base64`).then(function(e4) {
        n2(`data:image/png;base64,` + e4);
      }, function(e4) {
        r2(e4);
      });
    });
  });
  return function(t2, n2) {
    return e2.apply(this, arguments);
  };
})();
n();
var Fe = function(e2) {
  let t2 = a;
  if (e2.ofd instanceof File || e2.ofd instanceof Blob || e2.ofd instanceof ArrayBuffer) Ie(e2);
  else {
    var n2;
    (n2 = e2[t2(570)]) == null || n2.call(e2, Error(`OFD \u9884\u89C8\u53EA\u63A5\u6536 File\u3001Blob \u6216 ArrayBuffer \u6570\u636E`));
  }
}, Ie = function(e2) {
  let t2 = a;
  B[t2(352)](this, r(function* () {
    return yield ge(e2.ofd);
  }), _e, ve)[t2(579)]((t3) => {
    e2.success && e2.success(t3);
  }).catch((n2) => {
    let r2 = t2;
    console.log(n2), e2.fail && e2[r2(570)](n2);
  });
}, Le = function(e2, t2) {
  let n2 = a, r2 = [];
  if (!t2) return r2;
  for (let i2 of t2.pages) {
    let a2 = O(e2, t2[n2(542)], i2), o2 = Object.keys(i2)[0], s2 = document.createElement(`div`);
    s2.id = o2, s2.setAttribute(`style`, `margin-bottom: 20px;position: relative;width:` + a2.w + `px;height:` + a2.h + `px;background: white;`), j(s2, i2, t2.tpls, t2.fontResObj, t2.drawParamResObj, t2.multiMediaResObj), r2.push(s2);
  }
  return r2;
}, Re = function(e2) {
  let t2 = a, n2 = [];
  if (!e2) return n2;
  for (let r2 of e2[t2(437)]) {
    let i2 = k(e2.document, r2), a2 = Object.keys(r2)[0], o2 = document.createElement(`div`);
    o2.id = a2, o2.setAttribute(`style`, `margin-bottom: 20px;position: relative;width:` + i2.w + `px;height:` + i2.h + `px;background: white;`), j(o2, r2, e2.tpls, e2.fontResObj, e2.drawParamResObj, e2.multiMediaResObj), n2[t2(571)](o2);
  }
  return n2;
}, ze = function(e2) {
  return e2 == null ? void 0 : e2.arr, false;
}, Be = function(e2) {
  f(e2);
}, Ve = function() {
  return p();
};
export {
  O as calPageBox,
  k as calPageBoxScale,
  ze as digestCheck,
  Ve as getPageScale,
  Fe as parseOfdDocument,
  Le as renderOfd,
  Re as renderOfdByScale,
  j as renderPage,
  Be as setPageScale
};
