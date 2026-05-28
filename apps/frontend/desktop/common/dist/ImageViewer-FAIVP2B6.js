import { $ as e, F as t, S as n, V as r, X as i, Z as a, _ as o, b as s, c, d as l, f as u, g as d, m as f, ot as p, q as m } from "./_virtual_mf___mfe_internal__components_center__loadShare__vue__loadShare__.mjs-DlvFZDQ7.js";
import { a as h, o as g } from "./chunk-DeXYQlWK.js";
import { m as _, t as ee } from "./index-D-g3WoLo.js";
var v = y;
function y(e2, t2) {
  return e2 -= 102, vt()[e2];
}
(function(e2, t2) {
  for (var n2 = y, r2 = e2(); ; ) try {
    if (-parseInt(n2(124)) / 1 * (parseInt(n2(210)) / 2) + -parseInt(n2(287)) / 3 + -parseInt(n2(251)) / 4 + -parseInt(n2(291)) / 5 + -parseInt(n2(245)) / 6 + parseInt(n2(298)) / 7 + parseInt(n2(213)) / 8 === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(vt, 256688);
var b = g(h((e2, t2) => {
  (function(n2, r2) {
    typeof e2 == `object` && t2 !== void 0 ? t2.exports = r2() : typeof define == `function` && define.amd ? define(r2) : (n2 = typeof globalThis < `u` ? globalThis : n2 || self, n2.Viewer = r2());
  })(e2, function() {
    var e3 = y;
    function t3(e4, t4) {
      if (!(e4 instanceof t4)) throw TypeError(`Cannot call a class as a function`);
    }
    function n2(e4, t4) {
      for (var n3 = 0; n3 < t4.length; n3++) {
        var r3 = t4[n3];
        r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e4, c2(r3.key), r3);
      }
    }
    function r2(e4, t4, r3) {
      return t4 && n2(e4.prototype, t4), r3 && n2(e4, r3), Object.defineProperty(e4, "prototype", { writable: false }), e4;
    }
    function i2(e4, t4, n3) {
      var r3 = y;
      return (t4 = c2(t4)) in e4 ? Object[r3(313)](e4, t4, { value: n3, enumerable: true, configurable: true, writable: true }) : e4[t4] = n3, e4;
    }
    function a2(e4, t4) {
      var n3 = y, r3 = Object.keys(e4);
      if (Object.getOwnPropertySymbols) {
        var i3 = Object.getOwnPropertySymbols(e4);
        t4 && (i3 = i3[n3(293)](function(t5) {
          return Object.getOwnPropertyDescriptor(e4, t5).enumerable;
        })), r3.push.apply(r3, i3);
      }
      return r3;
    }
    function o2(e4) {
      for (var t4 = y, n3 = 1; n3 < arguments.length; n3++) {
        var r3 = arguments[n3] == null ? {} : arguments[n3];
        n3 % 2 ? a2(Object(r3), true)[t4(122)](function(t5) {
          i2(e4, t5, r3[t5]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e4, Object.getOwnPropertyDescriptors(r3)) : a2(Object(r3)).forEach(function(n4) {
          Object[t4(313)](e4, n4, Object.getOwnPropertyDescriptor(r3, n4));
        });
      }
      return e4;
    }
    function s2(e4, t4) {
      if (typeof e4 != y(255) || !e4) return e4;
      var n3 = e4[Symbol.toPrimitive];
      if (n3 !== void 0) {
        var r3 = n3.call(e4, t4 || `default`);
        if (typeof r3 != `object`) return r3;
        throw TypeError(`@@toPrimitive must return a primitive value.`);
      }
      return (t4 === `string` ? String : Number)(e4);
    }
    function c2(e4) {
      var t4 = y, n3 = s2(e4, `string`);
      return typeof n3 == t4(192) ? n3 : n3 + ``;
    }
    function l2(e4) {
      "@babel/helpers - typeof";
      return l2 = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e5) {
        return typeof e5;
      } : function(e5) {
        return e5 && typeof Symbol == `function` && e5.constructor === Symbol && e5 !== Symbol.prototype ? `symbol` : typeof e5;
      }, l2(e4);
    }
    var u2 = { backdrop: true, button: true, navbar: true, title: true, toolbar: true, className: ``, container: e3(184), filter: null, fullscreen: true, inheritedAttributes: [`crossOrigin`, `decoding`, e3(207), e3(138), `referrerPolicy`, e3(125), `srcset`, `useMap`], initialCoverage: 0.9, initialViewIndex: 0, inline: false, interval: 5e3, keyboard: true, focus: true, loading: true, loop: true, minWidth: 200, minHeight: 100, movable: true, rotatable: true, scalable: true, zoomable: true, zoomOnTouch: true, zoomOnWheel: true, slideOnTouch: true, toggleOnDblclick: true, tooltip: true, transition: true, zIndex: 2015, zIndexInline: 0, zoomRatio: 0.1, minZoomRatio: 0.01, maxZoomRatio: 100, url: `src`, ready: null, show: null, shown: null, hide: null, hidden: null, view: null, viewed: null, move: null, moved: null, rotate: null, rotated: null, scale: null, scaled: null, zoom: null, zoomed: null, play: null, stop: null }, d2 = `<div class="viewer-container" tabindex="-1" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list" role="navigation"></ul></div></div><div class="viewer-tooltip" role="alert" aria-hidden="true"></div><div class="viewer-button" data-viewer-action="mix" role="button"></div><div class="viewer-player"></div></div>`, f2 = typeof window < `u` && window.document !== void 0, p2 = f2 ? window : {}, m2 = f2 && p2[e3(109)].documentElement ? `ontouchstart` in p2.document.documentElement : false, h2 = f2 ? `PointerEvent` in p2 : false, g2 = e3(301), _2 = `move`, ee2 = e3(286), v2 = e3(171), b2 = g2 + `-active`, te2 = g2 + `-close`, x2 = g2 + `-fade`, S2 = g2 + e3(264), C2 = g2 + `-fullscreen`, ne2 = g2 + e3(216), w2 = g2 + `-hide`, re2 = g2 + `-hide-md-down`, ie2 = g2 + e3(212), ae2 = g2 + `-hide-xs-down`, T2 = g2 + `-in`, oe2 = g2 + `-invisible`, E2 = g2 + `-loading`, se2 = g2 + e3(284), ce2 = g2 + `-open`, D2 = g2 + `-show`, O2 = g2 + `-transition`, k2 = `click`, A2 = `dblclick`, le2 = `dragstart`, ue2 = e3(111), de2 = `keydown`, j2 = `load`, M2 = e3(315), fe2 = m2 ? e3(203) : `mouseup`, pe2 = m2 ? `touchmove` : `mousemove`, me2 = h2 ? e3(289) : m2 ? `touchstart` : `mousedown`, he2 = h2 ? `pointermove` : pe2, ge2 = h2 ? `pointerup pointercancel` : fe2, _e2 = e3(246), N2 = `transitionend`, ve2 = `wheel`, ye2 = `ready`, be2 = `show`, xe2 = `shown`, Se2 = `hide`, Ce2 = `hidden`, we2 = `view`, P2 = `viewed`, Te2 = e3(268), Ee2 = `moved`, De2 = e3(105), Oe2 = `rotated`, ke2 = `scale`, Ae2 = `scaled`, je2 = e3(171), F2 = e3(260), Me2 = `play`, Ne2 = e3(241), Pe2 = g2 + `Action`, Fe2 = /\s\s*/, Ie2 = [`zoom-in`, e3(127), `one-to-one`, `reset`, `prev`, `play`, `next`, e3(225), `rotate-right`, e3(166), `flip-vertical`];
    function I2(t4) {
      return typeof t4 == e3(172);
    }
    var Le2 = Number.isNaN || p2[e3(234)];
    function L2(e4) {
      return typeof e4 == `number` && !Le2(e4);
    }
    function R2(e4) {
      return e4 === void 0;
    }
    function z2(t4) {
      var n3 = e3;
      return l2(t4) === n3(255) && t4 !== null;
    }
    var Re2 = Object.prototype.hasOwnProperty;
    function B2(e4) {
      if (!z2(e4)) return false;
      try {
        var t4 = e4.constructor, n3 = t4.prototype;
        return t4 && n3 && Re2.call(n3, `isPrototypeOf`);
      } catch {
        return false;
      }
    }
    function V2(e4) {
      return typeof e4 == `function`;
    }
    function H2(t4, n3) {
      var r3 = e3;
      if (t4 && V2(n3)) if (Array.isArray(t4) || L2(t4.length)) {
        var i3 = t4[r3(167)], a3;
        for (a3 = 0; a3 < i3 && n3.call(t4, t4[a3], a3, t4) !== false; a3 += 1) ;
      } else z2(t4) && Object.keys(t4).forEach(function(e4) {
        n3.call(t4, t4[e4], e4, t4);
      });
      return t4;
    }
    var U2 = Object.assign || function(e4) {
      var t4 = [...arguments].slice(1);
      return z2(e4) && t4.length > 0 && t4.forEach(function(t5) {
        var n3 = y;
        z2(t5) && Object.keys(t5)[n3(122)](function(n4) {
          e4[n4] = t5[n4];
        });
      }), e4;
    }, ze2 = /^(?:width|height|left|top|marginLeft|marginTop)$/;
    function W2(e4, t4) {
      var n3 = e4.style;
      H2(t4, function(e5, t5) {
        ze2.test(t5) && L2(e5) && (e5 += `px`), n3[t5] = e5;
      });
    }
    function Be2(t4) {
      var n3 = e3;
      return I2(t4) ? t4.replace(/&(?!amp;|quot;|#39;|lt;|gt;)/g, `&amp;`).replace(/"/g, n3(169)).replace(/'/g, n3(126)).replace(/</g, n3(272)).replace(/>/g, n3(185)) : t4;
    }
    function G2(e4, t4) {
      return !e4 || !t4 ? false : e4.classList ? e4.classList.contains(t4) : e4.className.indexOf(t4) > -1;
    }
    function K2(e4, t4) {
      if (!(!e4 || !t4)) {
        if (L2(e4.length)) {
          H2(e4, function(e5) {
            K2(e5, t4);
          });
          return;
        }
        if (e4.classList) {
          e4.classList.add(t4);
          return;
        }
        var n3 = e4.className.trim();
        n3 ? n3.indexOf(t4) < 0 && (e4.className = n3 + ` ` + t4) : e4.className = t4;
      }
    }
    function q2(t4, n3) {
      var r3 = e3;
      if (!(!t4 || !n3)) {
        if (L2(t4.length)) {
          H2(t4, function(e4) {
            q2(e4, n3);
          });
          return;
        }
        if (t4[r3(258)]) {
          t4.classList.remove(n3);
          return;
        }
        t4.className[r3(259)](n3) >= 0 && (t4.className = t4.className.replace(n3, ``));
      }
    }
    function J2(e4, t4, n3) {
      if (t4) {
        if (L2(e4.length)) {
          H2(e4, function(e5) {
            J2(e5, t4, n3);
          });
          return;
        }
        n3 ? K2(e4, t4) : q2(e4, t4);
      }
    }
    var Ve2 = /([a-z\d])([A-Z])/g;
    function He2(t4) {
      var n3 = e3;
      return t4[n3(113)](Ve2, n3(312))[n3(149)]();
    }
    function Y2(e4, t4) {
      return z2(e4[t4]) ? e4[t4] : e4.dataset ? e4.dataset[t4] : e4.getAttribute(`data-` + He2(t4));
    }
    function Ue2(t4, n3, r3) {
      var i3 = e3;
      z2(r3) ? t4[n3] = r3 : t4.dataset ? t4[i3(265)][n3] = r3 : t4.setAttribute(`data-` + He2(n3), r3);
    }
    var We2 = (function() {
      var t4 = e3, n3 = false;
      if (f2) {
        var r3 = false, i3 = function() {
        }, a3 = Object.defineProperty({}, "once", { get: function() {
          return n3 = true, r3;
        }, set: function(e4) {
          r3 = e4;
        } });
        p2.addEventListener(`test`, i3, a3), p2.removeEventListener(t4(321), i3, a3);
      }
      return n3;
    })();
    function X2(e4, t4, n3) {
      var r3 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i3 = n3;
      t4.trim().split(Fe2).forEach(function(t5) {
        var a3 = y;
        if (!We2) {
          var o3 = e4.listeners;
          o3 && o3[t5] && o3[t5][n3] && (i3 = o3[t5][n3], delete o3[t5][n3], Object[a3(229)](o3[t5]).length === 0 && delete o3[t5], Object.keys(o3).length === 0 && delete e4[a3(173)]);
        }
        e4.removeEventListener(t5, i3, r3);
      });
    }
    function Z2(t4, n3, r3) {
      var i3 = e3, a3 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o3 = r3;
      n3.trim().split(Fe2)[i3(122)](function(e4) {
        var n4 = i3;
        if (a3.once && !We2) {
          var s3 = t4.listeners, c3 = s3 === void 0 ? {} : s3;
          o3 = function() {
            var n5 = y;
            delete c3[e4][r3], t4[n5(146)](e4, o3, a3);
            var i4 = [...arguments];
            r3.apply(t4, i4);
          }, c3[e4] || (c3[e4] = {}), c3[e4][r3] && t4.removeEventListener(e4, c3[e4][r3], a3), c3[e4][r3] = o3, t4.listeners = c3;
        }
        t4[n4(117)](e4, o3, a3);
      });
    }
    function Q2(t4, n3, r3, i3) {
      var a3 = e3, s3;
      return V2(Event) && V2(CustomEvent) ? s3 = new CustomEvent(n3, o2({ bubbles: true, cancelable: true, detail: r3 }, i3)) : (s3 = document[a3(233)](`CustomEvent`), s3.initCustomEvent(n3, true, true, r3)), t4.dispatchEvent(s3);
    }
    function Ge2(t4) {
      var n3 = e3, r3 = t4.getBoundingClientRect();
      return { left: r3.left + (window.pageXOffset - document.documentElement.clientLeft), top: r3.top + (window.pageYOffset - document[n3(273)].clientTop) };
    }
    function Ke2(t4) {
      var n3 = e3, r3 = t4.rotate, i3 = t4[n3(311)], a3 = t4.scaleY, o3 = t4.translateX, s3 = t4.translateY, c3 = [];
      L2(o3) && o3 !== 0 && c3.push(n3(155) + o3 + `px)`), L2(s3) && s3 !== 0 && c3.push(`translateY(` + s3 + `px)`), L2(r3) && r3 !== 0 && c3.push(`rotate(` + r3 + n3(181)), L2(i3) && i3 !== 1 && c3.push(n3(179) + i3 + `)`), L2(a3) && a3 !== 1 && c3.push(`scaleY(` + a3 + `)`);
      var l3 = c3[n3(167)] ? c3.join(` `) : `none`;
      return { WebkitTransform: l3, msTransform: l3, transform: l3 };
    }
    function qe2(e4) {
      return I2(e4) ? decodeURIComponent(e4.replace(/^.*\//, ``).replace(/[?&#].*$/, ``)) : ``;
    }
    var Je2 = p2.navigator && /Version\/\d+(\.\d+)+?\s+Safari/i.test(p2.navigator[e3(267)]);
    function Ye2(t4, n3, r3) {
      var i3 = e3, a3 = document.createElement(`img`);
      if (t4[i3(232)] && !Je2) return r3(t4.naturalWidth, t4.naturalHeight), a3;
      var o3 = document.body || document[i3(273)];
      return a3.onload = function() {
        var e4 = i3;
        r3(a3.width, a3.height), Je2 || o3[e4(116)](a3);
      }, H2(n3[i3(176)], function(e4) {
        var n4 = t4.getAttribute(e4);
        n4 !== null && a3.setAttribute(e4, n4);
      }), a3.src = t4.src, Je2 || (a3.style.cssText = `left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;`, o3.appendChild(a3)), a3;
    }
    function Xe2(e4) {
      switch (e4) {
        case 2:
          return ae2;
        case 3:
          return ie2;
        case 4:
          return re2;
        default:
          return ``;
      }
    }
    function Ze2(e4) {
      var t4 = o2({}, e4), n3 = [];
      return H2(e4, function(e5, r3) {
        delete t4[r3], H2(t4, function(t5) {
          var r4 = y, i3 = Math.abs(e5.startX - t5.startX), a3 = Math[r4(188)](e5.startY - t5.startY), o3 = Math[r4(188)](e5.endX - t5[r4(306)]), s3 = Math.abs(e5.endY - t5.endY), c3 = Math.sqrt(i3 * i3 + a3 * a3), l3 = (Math[r4(309)](o3 * o3 + s3 * s3) - c3) / c3;
          n3.push(l3);
        });
      }), n3.sort(function(e5, t5) {
        return Math.abs(e5) < Math.abs(t5);
      }), n3[0];
    }
    function Qe2(t4, n3) {
      var r3 = e3, i3 = t4.pageX, a3 = t4.pageY, s3 = { endX: i3, endY: a3 };
      return n3 ? s3 : o2({ timeStamp: Date[r3(208)](), startX: i3, startY: a3 }, s3);
    }
    function $e2(e4) {
      var t4 = 0, n3 = 0, r3 = 0;
      return H2(e4, function(e5) {
        var i3 = y, a3 = e5.startX, o3 = e5[i3(193)];
        t4 += a3, n3 += o3, r3 += 1;
      }), t4 /= r3, n3 /= r3, { pageX: t4, pageY: n3 };
    }
    var et2 = { render: function() {
      var t4 = e3;
      this.initContainer(), this[t4(189)](), this.initList(), this[t4(147)]();
    }, initBody: function() {
      var t4 = e3, n3 = this.element.ownerDocument, r3 = n3[t4(184)] || n3.documentElement;
      this.body = r3, this.scrollbarWidth = window[t4(277)] - n3.documentElement.clientWidth, this.initialBodyPaddingRight = r3[t4(151)].paddingRight, this.initialBodyComputedPaddingRight = window.getComputedStyle(r3).paddingRight;
    }, initContainer: function() {
      var t4 = e3;
      this[t4(296)] = { width: window.innerWidth, height: window.innerHeight };
    }, initViewer: function() {
      var t4 = e3, n3 = this[t4(142)], r3 = this[t4(168)], i3;
      n3.inline && (i3 = { width: Math.max(r3.offsetWidth, n3.minWidth), height: Math[t4(307)](r3.offsetHeight, n3.minHeight) }, this.parentData = i3), (this[t4(314)] || !i3) && (i3 = this.containerData), this.viewerData = U2({}, i3);
    }, renderViewer: function() {
      var t4 = e3;
      this.options.inline && !this[t4(314)] && W2(this.viewer, this.viewerData);
    }, initList: function() {
      var t4 = e3, n3 = this, r3 = this.element, i3 = this.options, a3 = this[t4(152)], o3 = [];
      a3[t4(271)] = ``, H2(this.images, function(e4, r4) {
        var s3 = t4, c3 = e4.src, l3 = e4[s3(253)] || qe2(c3), u3 = n3.getImageURL(e4);
        if (c3 || u3) {
          var d3 = document[s3(202)](`li`), f3 = document.createElement(`img`);
          H2(i3.inheritedAttributes, function(t5) {
            var n4 = s3, r5 = e4[n4(242)](t5);
            r5 !== null && f3[n4(304)](t5, r5);
          }), i3.navbar && (f3.src = c3 || u3), f3.alt = l3, f3.setAttribute(`data-original-url`, u3 || c3), d3[s3(304)](`data-index`, r4), d3.setAttribute(`data-viewer-action`, `view`), d3.setAttribute(`role`, s3(250)), i3.keyboard && d3.setAttribute(`tabindex`, 0), d3.appendChild(f3), a3[s3(119)](d3), o3.push(d3);
        }
      }), this.items = o3, H2(o3, function(e4) {
        var t5 = e4.firstElementChild, r4, a4;
        Ue2(t5, `filled`, true), i3.loading && K2(e4, E2), Z2(t5, j2, r4 = function(r5) {
          X2(t5, M2, a4), i3.loading && q2(e4, E2), n3.loadImage(r5);
        }, { once: true }), Z2(t5, M2, a4 = function() {
          X2(t5, j2, r4), i3.loading && q2(e4, E2);
        }, { once: true });
      }), i3.transition && Z2(r3, P2, function() {
        K2(a3, O2);
      }, { once: true });
    }, renderList: function() {
      var t4 = e3, n3 = this.index, r3 = this.items[n3];
      if (r3) {
        var i3 = r3.nextElementSibling, a3 = parseInt(window.getComputedStyle(i3 || r3).marginLeft, 10), o3 = r3.offsetWidth, s3 = o3 + a3;
        W2(this.list, U2({ width: s3 * this.length - a3 }, Ke2({ translateX: (this[t4(136)].width - o3) / 2 - s3 * n3 })));
      }
    }, resetList: function() {
      var e4 = this.list;
      e4.innerHTML = ``, q2(e4, O2), W2(e4, Ke2({ translateX: 0 }));
    }, initImage: function(e4) {
      var t4 = this, n3 = this.options, r3 = this.image, i3 = this.viewerData, a3 = this.footer.offsetHeight, o3 = i3.width, s3 = Math.max(i3.height - a3, a3), c3 = this.imageData || {}, l3;
      this.imageInitializing = { abort: function() {
        var e5 = y;
        l3[e5(279)] = null;
      } }, l3 = Ye2(r3, n3, function(r4, i4) {
        var a4 = y, l4 = r4 / i4, u3 = Math.max(0, Math[a4(144)](1, n3.initialCoverage)), d3 = o3, f3 = s3;
        t4.imageInitializing = false, s3 * l4 > o3 ? f3 = o3 / l4 : d3 = s3 * l4, u3 = L2(u3) ? u3 : 0.9, d3 = Math[a4(144)](d3 * u3, r4), f3 = Math.min(f3 * u3, i4);
        var p3 = (o3 - d3) / 2, m3 = (s3 - f3) / 2, h3 = { left: p3, top: m3, x: p3, y: m3, width: d3, height: f3, oldRatio: 1, ratio: d3 / r4, aspectRatio: l4, naturalWidth: r4, naturalHeight: i4 }, g3 = U2({}, h3);
        n3.rotatable && (h3.rotate = c3.rotate || 0, g3.rotate = 0), n3.scalable && (h3[a4(311)] = c3.scaleX || 1, h3.scaleY = c3.scaleY || 1, g3[a4(311)] = 1, g3.scaleY = 1), t4.imageData = h3, t4[a4(249)] = g3, e4 && e4();
      });
    }, renderImage: function(t4) {
      var n3 = e3, r3 = this, i3 = this[n3(104)], a3 = this.imageData;
      if (W2(i3, U2({ width: a3.width, height: a3.height, marginLeft: a3.x, marginTop: a3.y }, Ke2(a3))), t4) if ((this[n3(195)] || this.moving || this.rotating || this.scaling || this.zooming) && this.options.transition && G2(i3, O2)) {
        var o3 = function() {
          r3.imageRendering = false, t4();
        };
        this[n3(310)] = { abort: function() {
          X2(i3, N2, o3);
        } }, Z2(i3, N2, o3, { once: true });
      } else t4();
    }, resetImage: function() {
      var t4 = e3, n3 = this.image;
      n3 && (this.viewing && this.viewing.abort(), n3.parentNode.removeChild(n3), this.image = null, this.title[t4(271)] = ``);
    } }, tt2 = { bind: function() {
      var t4 = e3, n3 = this[t4(142)], r3 = this.viewer, i3 = this[t4(107)], a3 = this.element.ownerDocument;
      Z2(r3, k2, this[t4(228)] = this[t4(187)].bind(this)), Z2(r3, le2, this[t4(133)] = this.dragstart.bind(this)), Z2(i3, me2, this.onPointerDown = this.pointerdown[t4(218)](this)), Z2(a3, he2, this.onPointerMove = this.pointermove.bind(this)), Z2(a3, ge2, this.onPointerUp = this.pointerup[t4(218)](this)), Z2(a3, de2, this[t4(175)] = this.keydown.bind(this)), Z2(window, _e2, this.onResize = this.resize.bind(this)), n3.zoomable && n3.zoomOnWheel && Z2(r3, ve2, this.onWheel = this.wheel.bind(this), { passive: false, capture: true }), n3.toggleOnDblclick && Z2(i3, A2, this[t4(183)] = this.dblclick[t4(218)](this));
    }, unbind: function() {
      var t4 = e3, n3 = this.options, r3 = this.viewer, i3 = this.canvas, a3 = this[t4(217)][t4(177)];
      X2(r3, k2, this.onClick), X2(r3, le2, this.onDragStart), X2(i3, me2, this.onPointerDown), X2(a3, he2, this.onPointerMove), X2(a3, ge2, this[t4(160)]), X2(a3, de2, this.onKeyDown), X2(window, _e2, this.onResize), n3.zoomable && n3.zoomOnWheel && X2(r3, ve2, this.onWheel, { passive: false, capture: true }), n3.toggleOnDblclick && X2(i3, A2, this.onDblclick);
    } }, nt2 = { click: function(t4) {
      var n3 = e3, r3 = this.options, i3 = this.imageData, a3 = t4.target, o3 = Y2(a3, Pe2);
      switch (!o3 && a3.localName === `img` && a3[n3(282)].localName === `li` && (a3 = a3.parentElement, o3 = Y2(a3, Pe2)), m2 && t4.isTrusted && a3 === this.canvas && clearTimeout(this.clickCanvasTimeout), o3) {
        case `mix`:
          this.played ? this.stop() : r3.inline ? this.fulled ? this.exit() : this[n3(316)]() : this.hide();
          break;
        case `hide`:
          this.pointerMoved || this.hide();
          break;
        case n3(220):
          this.view(Y2(a3, `index`));
          break;
        case `zoom-in`:
          this.zoom(0.1, true);
          break;
        case `zoom-out`:
          this.zoom(-0.1, true);
          break;
        case `one-to-one`:
          this.toggle();
          break;
        case n3(269):
          this.reset();
          break;
        case `prev`:
          this.prev(r3.loop);
          break;
        case `play`:
          this.play(r3[n3(294)]);
          break;
        case `next`:
          this.next(r3.loop);
          break;
        case `rotate-left`:
          this.rotate(-90);
          break;
        case `rotate-right`:
          this.rotate(90);
          break;
        case `flip-horizontal`:
          this.scaleX(-i3.scaleX || -1);
          break;
        case `flip-vertical`:
          this.scaleY(-i3.scaleY || -1);
          break;
        default:
          this.played && this[n3(241)]();
      }
    }, dblclick: function(t4) {
      var n3 = e3;
      t4[n3(118)](), this.viewed && t4.target === this.image && (m2 && t4.isTrusted && clearTimeout(this[n3(132)]), this.toggle(t4.isTrusted ? t4 : t4.detail && t4.detail.originalEvent));
    }, load: function() {
      var t4 = e3, n3 = this;
      this.timeout && (this.timeout = (clearTimeout(this.timeout), false));
      var r3 = this.element, i3 = this[t4(142)], a3 = this.image, o3 = this.index, s3 = this.viewerData;
      q2(a3, oe2), i3.loading && q2(this[t4(107)], E2), a3[t4(151)].cssText = `height:0;margin-left:` + s3.width / 2 + `px;margin-top:` + s3.height / 2 + `px;max-width:none!important;position:relative;width:0;`, this.initImage(function() {
        var e4 = t4;
        J2(a3, se2, i3[e4(322)]), J2(a3, O2, i3.transition), n3.renderImage(function() {
          var t5 = e4;
          n3.viewed = true, n3.viewing = false, V2(i3.viewed) && Z2(r3, P2, i3.viewed, { once: true }), Q2(r3, P2, { originalImage: n3[t5(156)][o3], index: o3, image: a3 }, { cancelable: false });
        });
      });
    }, loadImage: function(t4) {
      var n3 = e3, r3 = t4.target, i3 = r3.parentNode, a3 = i3.offsetWidth || 30, o3 = i3.offsetHeight || 50, s3 = !!Y2(r3, `filled`);
      Ye2(r3, this[n3(142)], function(e4, t5) {
        var n4 = e4 / t5, i4 = a3, c3 = o3;
        o3 * n4 > a3 ? s3 ? i4 = o3 * n4 : c3 = a3 / n4 : s3 ? c3 = a3 / n4 : i4 = o3 * n4, W2(r3, U2({ width: i4, height: c3 }, Ke2({ translateX: (a3 - i4) / 2, translateY: (o3 - c3) / 2 })));
      });
    }, keydown: function(t4) {
      var n3 = e3, r3 = this.options;
      if (r3.keyboard) {
        var i3 = t4.keyCode || t4.which || t4.charCode;
        switch (i3) {
          case 13:
            this.viewer.contains(t4.target) && this.click(t4);
            break;
        }
        if (this.fulled) switch (i3) {
          case 27:
            this.played ? this.stop() : r3.inline ? this.fulled && this.exit() : this.hide();
            break;
          case 32:
            this.played && this.stop();
            break;
          case 37:
            this[n3(303)] && this.playing ? this.playing[n3(288)]() : this[n3(288)](r3.loop);
            break;
          case 38:
            t4.preventDefault(), this.zoom(r3.zoomRatio, true);
            break;
          case 39:
            this.played && this.playing ? this.playing.next() : this.next(r3.loop);
            break;
          case 40:
            t4[n3(118)](), this.zoom(-r3[n3(285)], true);
            break;
          case 48:
          case 49:
            t4.ctrlKey && (t4[n3(118)](), this.toggle());
            break;
        }
      }
    }, dragstart: function(t4) {
      t4[e3(130)].localName === `img` && t4.preventDefault();
    }, pointerdown: function(t4) {
      var n3 = e3, r3 = this.options, i3 = this[n3(128)], a3 = t4.buttons, o3 = t4[n3(250)];
      if (this.pointerMoved = false, !(!this[n3(239)] || this.showing || this.viewing || this[n3(209)] || (t4.type === n3(150) || t4.type === `pointerdown` && t4.pointerType === `mouse`) && (L2(a3) && a3 !== 1 || L2(o3) && o3 !== 0 || t4.ctrlKey))) {
        t4[n3(118)](), t4[n3(206)] ? H2(t4.changedTouches, function(e4) {
          i3[e4.identifier] = Qe2(e4);
        }) : i3[t4.pointerId || 0] = Qe2(t4);
        var s3 = r3.movable ? _2 : false;
        r3.zoomOnTouch && r3.zoomable && Object.keys(i3).length > 1 ? s3 = v2 : r3[n3(297)] && (t4[n3(199)] === `touch` || t4.type === `touchstart`) && this[n3(141)]() && (s3 = ee2), r3.transition && (s3 === _2 || s3 === v2) && q2(this.image, O2), this.action = s3;
      }
    }, pointermove: function(t4) {
      var n3 = e3, r3 = this.pointers, i3 = this.action;
      !this[n3(239)] || !i3 || (t4.preventDefault(), t4.changedTouches ? H2(t4.changedTouches, function(e4) {
        U2(r3[e4.identifier] || {}, Qe2(e4, true));
      }) : U2(r3[t4[n3(226)] || 0] || {}, Qe2(t4, true)), this[n3(170)](t4));
    }, pointerup: function(t4) {
      var n3 = e3, r3 = this, i3 = this.options, a3 = this.action, o3 = this.pointers, s3;
      t4[n3(206)] ? H2(t4.changedTouches, function(e4) {
        s3 = o3[e4.identifier], delete o3[e4.identifier];
      }) : (s3 = o3[t4.pointerId || 0], delete o3[t4.pointerId || 0]), a3 && (t4.preventDefault(), i3.transition && (a3 === _2 || a3 === v2) && K2(this.image, O2), this.action = false, m2 && a3 !== v2 && s3 && Date.now() - s3.timeStamp < 500 && (clearTimeout(this.clickCanvasTimeout), clearTimeout(this[n3(132)]), i3.toggleOnDblclick && this.viewed && t4.target === this.image ? this.imageClicked ? (this.imageClicked = false, this.doubleClickImageTimeout = setTimeout(function() {
        Q2(r3.image, A2, { originalEvent: t4 });
      }, 50)) : (this.imageClicked = true, this[n3(132)] = setTimeout(function() {
        r3.imageClicked = false;
      }, 500)) : (this[n3(283)] = false, i3.backdrop && i3.backdrop !== n3(153) && t4[n3(130)] === this.canvas && (this.clickCanvasTimeout = setTimeout(function() {
        Q2(r3.canvas, k2, { originalEvent: t4 });
      }, 50)))));
    }, resize: function() {
      var t4 = e3, n3 = this;
      if (!(!this.isShown || this.hiding) && (this.fulled && (this.close(), this.initBody(), this.open()), this.initContainer(), this.initViewer(), this.renderViewer(), this[t4(235)](), this.viewed && this.initImage(function() {
        n3.renderImage();
      }), this[t4(303)])) {
        if (this.options[t4(294)] && this.fulled && !(document.fullscreenElement || document.webkitFullscreenElement || document[t4(292)] || document.msFullscreenElement)) {
          this.stop();
          return;
        }
        H2(this[t4(215)].getElementsByTagName(`img`), function(e4) {
          Z2(e4, j2, n3.loadImage.bind(n3), { once: true }), Q2(e4, j2);
        });
      }
    }, wheel: function(t4) {
      var n3 = e3, r3 = this;
      if (this[n3(239)] && (t4.preventDefault(), !this.wheeling)) {
        this[n3(157)] = true, setTimeout(function() {
          r3.wheeling = false;
        }, 50);
        var i3 = Number(this[n3(142)][n3(285)]) || 0.1, a3 = 1;
        t4.deltaY ? a3 = t4.deltaY > 0 ? 1 : -1 : t4.wheelDelta ? a3 = -t4.wheelDelta / 120 : t4.detail && (a3 = t4.detail > 0 ? 1 : -1), this.zoom(-a3 * i3, true, null, t4);
      }
    } }, rt2 = { show: function() {
      var t4 = e3, n3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, r3 = this[t4(217)], i3 = this[t4(142)];
      if (i3[t4(108)] || this.showing || this.isShown || this.showing) return this;
      if (!this[t4(190)]) return this.build(), this[t4(190)] && this[t4(165)](n3), this;
      if (V2(i3.show) && Z2(r3, be2, i3.show, { once: true }), Q2(r3, be2) === false || !this.ready) return this;
      this.hiding && this[t4(161)].abort(), this.showing = true, this.open();
      var a3 = this.viewer;
      if (q2(a3, w2), a3[t4(304)](`role`, `dialog`), a3[t4(304)](`aria-labelledby`, this.title.id), a3.setAttribute(`aria-modal`, true), a3.removeAttribute(`aria-hidden`), i3[t4(114)] && !n3) {
        var o3 = this[t4(254)][t4(218)](this);
        this.transitioning = { abort: function() {
          X2(a3, N2, o3), q2(a3, T2);
        } }, K2(a3, O2), a3.initialOffsetWidth = a3[t4(186)], Z2(a3, N2, o3, { once: true }), K2(a3, T2);
      } else K2(a3, T2), this.shown();
      return this;
    }, hide: function() {
      var t4 = e3, n3 = this, r3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, i3 = this.element, a3 = this.options;
      if (a3[t4(108)] || this.hiding || !(this.isShown || this.showing) || (V2(a3.hide) && Z2(i3, Se2, a3[t4(139)], { once: true }), Q2(i3, Se2) === false)) return this;
      this.showing && this.transitioning.abort(), this.hiding = true, this.played ? this.stop() : this[t4(195)] && this[t4(195)].abort();
      var o3 = this.viewer, s3 = this.image, c3 = function() {
        var e4 = t4;
        q2(o3, T2), n3[e4(238)]();
      };
      if (a3.transition && !r3) {
        var l3 = function(e4) {
          e4 && e4.target === o3 && (X2(o3, N2, l3), n3.hidden());
        }, u3 = function() {
          G2(o3, O2) ? (Z2(o3, N2, l3), q2(o3, T2)) : c3();
        };
        this.transitioning = { abort: function() {
          n3[t4(239)] && G2(s3, O2) ? X2(s3, N2, u3) : G2(o3, O2) && X2(o3, N2, l3);
        } }, this.viewed && G2(s3, O2) ? (Z2(s3, N2, u3, { once: true }), this[t4(106)](0, false, null, null, true)) : u3();
      } else c3();
      return this;
    }, view: function() {
      var t4 = e3, n3 = this, r3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.initialViewIndex;
      if (r3 = Number(r3) || 0, this.hiding || this.played || r3 < 0 || r3 >= this.length || this.viewed && r3 === this.index) return this;
      if (!this[t4(278)]) return this.index = r3, this[t4(165)]();
      this.viewing && this[t4(195)].abort();
      var i3 = this.element, a3 = this.options, o3 = this.title, s3 = this.canvas, c3 = this.items[r3], l3 = c3[t4(180)](`img`), u3 = Y2(l3, `originalUrl`), d3 = l3.getAttribute(`alt`), f3 = document.createElement(`img`);
      if (H2(a3.inheritedAttributes, function(e4) {
        var n4 = t4, r4 = l3.getAttribute(e4);
        r4 !== null && f3[n4(304)](e4, r4);
      }), f3.src = u3, f3[t4(253)] = d3, V2(a3.view) && Z2(i3, we2, a3.view, { once: true }), Q2(i3, we2, { originalImage: this.images[r3], index: r3, image: f3 }) === false || !this.isShown || this.hiding || this.played) return this;
      var p3 = this.items[this.index];
      p3 && (q2(p3, b2), p3.removeAttribute(`aria-selected`)), K2(c3, b2), c3.setAttribute(`aria-selected`, true), a3.focus && c3.focus(), this.image = f3, this.viewed = false, this.index = r3, this[t4(240)] = {}, K2(f3, oe2), a3.loading && K2(s3, E2), s3[t4(271)] = ``, s3.appendChild(f3), this[t4(235)](), o3[t4(271)] = ``;
      var m3 = function() {
        var e4 = n3.imageData, t5 = Array.isArray(a3.title) ? a3.title[1] : a3.title;
        o3.innerHTML = Be2(V2(t5) ? t5.call(n3, f3, e4) : d3 + ` (` + e4.naturalWidth + ` \xD7 ` + e4.naturalHeight + `)`);
      }, h3, g3;
      return Z2(i3, P2, m3, { once: true }), this.viewing = { abort: function() {
        var e4 = t4;
        X2(i3, P2, m3), f3.complete ? n3[e4(310)] ? n3[e4(310)].abort() : n3[e4(178)] && n3.imageInitializing.abort() : (f3.src = ``, X2(f3, j2, h3), n3.timeout && clearTimeout(n3[e4(300)]));
      } }, f3[t4(131)] ? this[t4(211)]() : (Z2(f3, j2, h3 = function() {
        X2(f3, M2, g3), n3.load();
      }, { once: true }), Z2(f3, M2, g3 = function() {
        var e4 = t4;
        X2(f3, j2, h3), n3.timeout && (n3.timeout = (clearTimeout(n3.timeout), false)), q2(f3, oe2), a3[e4(138)] && q2(n3.canvas, E2);
      }, { once: true }), this[t4(300)] && clearTimeout(this.timeout), this.timeout = setTimeout(function() {
        q2(f3, oe2), n3.timeout = false;
      }, 1e3)), this;
    }, prev: function() {
      var t4 = e3, n3 = arguments[t4(167)] > 0 && arguments[0] !== void 0 ? arguments[0] : false, r3 = this.index - 1;
      return r3 < 0 && (r3 = n3 ? this[t4(167)] - 1 : 0), this.view(r3), this;
    }, next: function() {
      var t4 = e3, n3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, r3 = this[t4(167)] - 1, i3 = this.index + 1;
      return i3 > r3 && (i3 = n3 ? 0 : r3), this.view(i3), this;
    }, move: function(e4) {
      var t4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e4, n3 = this.imageData;
      return this.moveTo(R2(e4) ? e4 : n3.x + Number(e4), R2(t4) ? t4 : n3.y + Number(t4)), this;
    }, moveTo: function(t4) {
      var n3 = e3, r3 = this, i3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t4, a3 = arguments[n3(167)] > 2 && arguments[2] !== void 0 ? arguments[2] : null, o3 = this.element, s3 = this.options, c3 = this.imageData;
      if (t4 = Number(t4), i3 = Number(i3), this.viewed && !this.played && s3.movable) {
        var l3 = c3.x, u3 = c3.y, d3 = false;
        if (L2(t4) ? d3 = true : t4 = l3, L2(i3) ? d3 = true : i3 = u3, d3) {
          if (V2(s3.move) && Z2(o3, Te2, s3.move, { once: true }), Q2(o3, Te2, { x: t4, y: i3, oldX: l3, oldY: u3, originalEvent: a3 }) === false) return this;
          c3.x = t4, c3.y = i3, c3.left = t4, c3.top = i3, this.moving = true, this.renderImage(function() {
            r3.moving = false, V2(s3.moved) && Z2(o3, Ee2, s3.moved, { once: true }), Q2(o3, Ee2, { x: t4, y: i3, oldX: l3, oldY: u3, originalEvent: a3 }, { cancelable: false });
          });
        }
      }
      return this;
    }, rotate: function(e4) {
      return this.rotateTo((this.imageData.rotate || 0) + Number(e4)), this;
    }, rotateTo: function(t4) {
      var n3 = e3, r3 = this, i3 = this.element, a3 = this.options, o3 = this.imageData;
      if (t4 = Number(t4), L2(t4) && this.viewed && !this.played && a3.rotatable) {
        var s3 = o3.rotate;
        if (V2(a3.rotate) && Z2(i3, De2, a3[n3(105)], { once: true }), Q2(i3, De2, { degree: t4, oldDegree: s3 }) === false) return this;
        o3.rotate = t4, this.rotating = true, this.renderImage(function() {
          r3.rotating = false, V2(a3.rotated) && Z2(i3, Oe2, a3.rotated, { once: true }), Q2(i3, Oe2, { degree: t4, oldDegree: s3 }, { cancelable: false });
        });
      }
      return this;
    }, scaleX: function(t4) {
      var n3 = e3;
      return this[n3(163)](t4, this.imageData.scaleY), this;
    }, scaleY: function(t4) {
      var n3 = e3;
      return this[n3(163)](this.imageData.scaleX, t4), this;
    }, scale: function(t4) {
      var n3 = e3, r3 = this, i3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t4, a3 = this.element, o3 = this[n3(142)], s3 = this[n3(240)];
      if (t4 = Number(t4), i3 = Number(i3), this.viewed && !this.played && o3.scalable) {
        var c3 = s3.scaleX, l3 = s3.scaleY, u3 = false;
        if (L2(t4) ? u3 = true : t4 = c3, L2(i3) ? u3 = true : i3 = l3, u3) {
          if (V2(o3[n3(163)]) && Z2(a3, ke2, o3[n3(163)], { once: true }), Q2(a3, ke2, { scaleX: t4, scaleY: i3, oldScaleX: c3, oldScaleY: l3 }) === false) return this;
          s3.scaleX = t4, s3.scaleY = i3, this.scaling = true, this.renderImage(function() {
            var e4 = n3;
            r3[e4(143)] = false, V2(o3.scaled) && Z2(a3, Ae2, o3.scaled, { once: true }), Q2(a3, Ae2, { scaleX: t4, scaleY: i3, oldScaleX: c3, oldScaleY: l3 }, { cancelable: false });
          });
        }
      }
      return this;
    }, zoom: function(t4) {
      var n3 = e3, r3 = arguments[n3(167)] > 1 && arguments[1] !== void 0 ? arguments[1] : false, i3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, a3 = arguments[n3(167)] > 3 && arguments[3] !== void 0 ? arguments[3] : null, o3 = this.imageData;
      return t4 = Number(t4), t4 = t4 < 0 ? 1 / (1 - t4) : 1 + t4, this.zoomTo(o3.width * t4 / o3.naturalWidth, r3, i3, a3), this;
    }, zoomTo: function(t4) {
      var n3 = e3, r3 = this, i3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, a3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, o3 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, s3 = arguments[n3(167)] > 4 && arguments[4] !== void 0 ? arguments[4] : false, c3 = this.element, l3 = this.options, u3 = this[n3(128)], d3 = this.imageData, f3 = d3.x, p3 = d3.y, m3 = d3.width, h3 = d3.height, g3 = d3.naturalWidth, _3 = d3[n3(121)];
      if (t4 = Math[n3(307)](0, t4), L2(t4) && this[n3(239)] && !this.played && (s3 || l3.zoomable)) {
        if (!s3) {
          var ee3 = Math[n3(307)](0.01, l3.minZoomRatio), v3 = Math.min(100, l3.maxZoomRatio);
          t4 = Math[n3(144)](Math.max(t4, ee3), v3);
        }
        if (o3) switch (o3[n3(252)]) {
          case `wheel`:
            l3[n3(285)] >= 0.055 && t4 > 0.95 && t4 < 1.05 && (t4 = 1);
            break;
          case `pointermove`:
          case n3(194):
          case `mousemove`:
            t4 > 0.99 && t4 < 1.01 && (t4 = 1);
            break;
        }
        var y2 = g3 * t4, b3 = _3 * t4, te3 = y2 - m3, x3 = b3 - h3, S3 = d3.ratio;
        if (V2(l3.zoom) && Z2(c3, je2, l3.zoom, { once: true }), Q2(c3, je2, { ratio: t4, oldRatio: S3, originalEvent: o3 }) === false) return this;
        if (this.zooming = true, o3) {
          var C3 = Ge2(this[n3(301)]), ne3 = u3 && Object.keys(u3).length > 0 ? $e2(u3) : { pageX: o3.pageX, pageY: o3.pageY };
          d3.x -= te3 * ((ne3.pageX - C3.left - f3) / m3), d3.y -= x3 * ((ne3.pageY - C3[n3(236)] - p3) / h3);
        } else B2(a3) && L2(a3.x) && L2(a3.y) ? (d3.x -= te3 * ((a3.x - f3) / m3), d3.y -= x3 * ((a3.y - p3) / h3)) : (d3.x -= te3 / 2, d3.y -= x3 / 2);
        d3.left = d3.x, d3.top = d3.y, d3.width = y2, d3.height = b3, d3.oldRatio = S3, d3.ratio = t4, this.renderImage(function() {
          var e4 = n3;
          r3.zooming = false, V2(l3.zoomed) && Z2(c3, F2, l3[e4(260)], { once: true }), Q2(c3, F2, { ratio: t4, oldRatio: S3, originalEvent: o3 }, { cancelable: false });
        }), i3 && this.tooltip();
      }
      return this;
    }, play: function() {
      var t4 = e3, n3 = this, r3 = arguments[t4(167)] > 0 && arguments[0] !== void 0 ? arguments[0] : false;
      if (!this.isShown || this.played) return this;
      var i3 = this.element, a3 = this.options;
      if (V2(a3.play) && Z2(i3, Me2, a3.play, { once: true }), Q2(i3, Me2) === false) return this;
      var o3 = this.player, s3 = this.loadImage.bind(this), c3 = [], l3 = 0, u3 = 0;
      if (this.played = true, this.onLoadWhenPlay = s3, r3 && this.requestFullscreen(r3), K2(o3, D2), H2(this.items, function(e4, n4) {
        var r4 = t4, i4 = e4.querySelector(`img`), d4 = document.createElement(`img`);
        d4[r4(200)] = Y2(i4, r4(159)), d4.alt = i4.getAttribute(`alt`), d4[r4(120)] = i4[r4(120)], l3 += 1, K2(d4, x2), J2(d4, O2, a3.transition), G2(e4, b2) && (K2(d4, T2), u3 = n4), c3.push(d4), Z2(d4, j2, s3, { once: true }), o3.appendChild(d4);
      }), L2(a3.interval) && a3.interval > 0) {
        var d3 = function() {
          clearTimeout(n3.playing.timeout), q2(c3[u3], T2), --u3, u3 = u3 >= 0 ? u3 : l3 - 1, K2(c3[u3], T2), n3.playing.timeout = setTimeout(d3, a3.interval);
        }, f3 = function() {
          var e4 = t4;
          clearTimeout(n3.playing[e4(300)]), q2(c3[u3], T2), u3 += 1, u3 = u3 < l3 ? u3 : 0, K2(c3[u3], T2), n3.playing.timeout = setTimeout(f3, a3[e4(137)]);
        };
        l3 > 1 && (this.playing = { prev: d3, next: f3, timeout: setTimeout(f3, a3.interval) });
      }
      return this;
    }, stop: function() {
      var t4 = e3, n3 = this;
      if (!this.played) return this;
      var r3 = this.element, i3 = this.options;
      if (V2(i3[t4(241)]) && Z2(r3, Ne2, i3.stop, { once: true }), Q2(r3, Ne2) === false) return this;
      var a3 = this.player;
      return clearTimeout(this.playing.timeout), this.playing = false, this[t4(303)] = false, H2(a3.getElementsByTagName(`img`), function(e4) {
        X2(e4, j2, n3.onLoadWhenPlay);
      }), q2(a3, D2), a3.innerHTML = ``, this.exitFullscreen(), this;
    }, full: function() {
      var t4 = e3, n3 = this, r3 = this[t4(142)], i3 = this.viewer, a3 = this.image, o3 = this.list;
      return !this.isShown || this.played || this.fulled || !r3.inline ? this : (this[t4(314)] = true, this.open(), K2(this.button, ne2), r3.transition && (q2(o3, O2), this.viewed && q2(a3, O2)), K2(i3, S2), i3.setAttribute(t4(248), `dialog`), i3.setAttribute(t4(214), this.title.id), i3.setAttribute(`aria-modal`, true), i3.removeAttribute(`style`), W2(i3, { zIndex: r3.zIndex }), r3.focus && this.enforceFocus(), this.initContainer(), this.viewerData = U2({}, this.containerData), this.renderList(), this.viewed && this.initImage(function() {
        n3.renderImage(function() {
          r3.transition && setTimeout(function() {
            K2(a3, O2), K2(o3, O2);
          }, 0);
        });
      }), this);
    }, exit: function() {
      var t4 = e3, n3 = this, r3 = this.options, i3 = this.viewer, a3 = this[t4(104)], o3 = this[t4(152)];
      return !this.isShown || this.played || !this.fulled || !r3.inline ? this : (this.fulled = false, this.close(), q2(this.button, ne2), r3.transition && (q2(o3, O2), this[t4(239)] && q2(a3, O2)), r3.focus && this[t4(123)](), i3.removeAttribute(`role`), i3.removeAttribute(`aria-labelledby`), i3.removeAttribute(`aria-modal`), q2(i3, S2), W2(i3, { zIndex: r3.zIndexInline }), this.viewerData = U2({}, this.parentData), this.renderViewer(), this[t4(235)](), this[t4(239)] && this[t4(256)](function() {
        n3.renderImage(function() {
          r3[y(114)] && setTimeout(function() {
            K2(a3, O2), K2(o3, O2);
          }, 0);
        });
      }), this);
    }, tooltip: function() {
      var t4 = e3, n3 = this, r3 = this.options, i3 = this.tooltipBox, a3 = this.imageData;
      return !this.viewed || this.played || !r3.tooltip ? this : (i3[t4(129)] = Math[t4(224)](a3.ratio * 100) + `%`, this.tooltipping ? clearTimeout(this.tooltipping) : r3.transition ? (this.fading && Q2(i3, N2), K2(i3, D2), K2(i3, x2), K2(i3, O2), i3[t4(221)](`aria-hidden`), i3.initialOffsetWidth = i3.offsetWidth, K2(i3, T2)) : (K2(i3, D2), i3.removeAttribute(t4(261))), this[t4(274)] = setTimeout(function() {
        var e4 = t4;
        r3.transition ? (Z2(i3, N2, function() {
          var e5 = y;
          q2(i3, D2), q2(i3, x2), q2(i3, O2), i3[e5(304)](e5(261), true), n3.fading = false;
        }, { once: true }), q2(i3, T2), n3.fading = true) : (q2(i3, D2), i3[e4(304)](`aria-hidden`, true)), n3.tooltipping = false;
      }, 1e3), this);
    }, toggle: function() {
      var t4 = e3, n3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
      return this.imageData.ratio === 1 ? this.zoomTo(this[t4(240)].oldRatio, true, null, n3) : this[t4(106)](1, true, null, n3), this;
    }, reset: function() {
      var t4 = e3;
      return this[t4(239)] && !this.played && (this.imageData = U2({}, this.initialImageData), this.renderImage()), this;
    }, update: function() {
      var t4 = e3, n3 = this, r3 = this[t4(217)], i3 = this.options, a3 = this.isImg;
      if (a3 && !r3.parentNode) return this.destroy();
      var o3 = [];
      if (H2(a3 ? [r3] : r3.querySelectorAll(`img`), function(e4) {
        V2(i3.filter) ? i3.filter.call(n3, e4) && o3.push(e4) : n3.getImageURL(e4) && o3.push(e4);
      }), !o3[t4(167)]) return this;
      if (this.images = o3, this.length = o3.length, this.ready) {
        var s3 = [];
        if (H2(this.items, function(e4, n4) {
          var r4 = t4, i4 = e4.querySelector(`img`), a4 = o3[n4];
          a4 && i4 ? (a4.src !== i4.src || a4.alt !== i4.alt) && s3[r4(237)](n4) : s3[r4(237)](n4);
        }), W2(this.list, { width: `auto` }), this[t4(308)](), this.isShown) if (this.length) {
          if (this.viewed) {
            var c3 = s3.indexOf(this[t4(222)]);
            if (c3 >= 0) this.viewed = false, this.view(Math.max(Math.min(this.index - c3, this.length - 1), 0));
            else {
              var l3 = this.items[this.index];
              K2(l3, b2), l3.setAttribute(`aria-selected`, true);
            }
          }
        } else this.image = null, this[t4(239)] = false, this[t4(222)] = 0, this[t4(240)] = {}, this.canvas.innerHTML = ``, this.title.innerHTML = ``;
      } else this.build();
      return this;
    }, destroy: function() {
      var t4 = e3, n3 = this[t4(217)], r3 = this.options;
      return n3[g2] ? (this[t4(270)] = true, this.ready ? (this.played && this.stop(), r3.inline ? (this.fulled && this.exit(), this.unbind()) : this.isShown ? (this.viewing && (this.imageRendering ? this[t4(310)].abort() : this.imageInitializing && this.imageInitializing[t4(174)]()), this.hiding && this.transitioning.abort(), this[t4(238)]()) : this[t4(243)] && (this.transitioning.abort(), this.hidden()), this.ready = false, this.viewer.parentNode.removeChild(this.viewer)) : r3.inline && (this.delaying ? this[t4(295)].abort() : this.initializing && this.initializing.abort()), r3.inline || X2(n3, k2, this[t4(148)]), n3[g2] = void 0, this) : this;
    } }, it2 = { getImageURL: function(t4) {
      var n3 = e3, r3 = this.options.url;
      return r3 = I2(r3) ? t4[n3(242)](r3) : V2(r3) ? r3.call(this, t4) : ``, r3;
    }, enforceFocus: function() {
      var e4 = this;
      this.clearEnforceFocus(), Z2(document, ue2, this.onFocusin = function(t4) {
        var n3 = y, r3 = e4.viewer, i3 = t4.target;
        if (!(i3 === document || i3 === r3 || r3.contains(i3))) {
          for (; i3; ) {
            if (i3.getAttribute(n3(115)) !== null || i3[n3(242)](n3(231)) === `true`) return;
            i3 = i3.parentElement;
          }
          r3.focus();
        }
      });
    }, clearEnforceFocus: function() {
      var t4 = e3;
      this.onFocusin && (X2(document, ue2, this.onFocusin), this[t4(280)] = null);
    }, open: function() {
      var t4 = e3, n3 = this.body;
      K2(n3, ce2), this.scrollbarWidth > 0 && (n3.style.paddingRight = this[t4(140)] + (parseFloat(this.initialBodyComputedPaddingRight) || 0) + `px`);
    }, close: function() {
      var e4 = this.body;
      q2(e4, ce2), this.scrollbarWidth > 0 && (e4.style.paddingRight = this.initialBodyPaddingRight);
    }, shown: function() {
      var t4 = e3, n3 = this.element, r3 = this.options, i3 = this.viewer;
      this.fulled = true, this.isShown = true, this.render(), this[t4(218)](), this.showing = false, r3.focus && (i3[t4(319)](), this[t4(276)]()), V2(r3.shown) && Z2(n3, xe2, r3.shown, { once: true }), Q2(n3, xe2) !== false && this.ready && this[t4(278)] && !this.hiding && this.view(this.index);
    }, hidden: function() {
      var t4 = e3, n3 = this.element, r3 = this[t4(142)], i3 = this.viewer;
      r3.fucus && this.clearEnforceFocus(), this.close(), this.unbind(), K2(i3, w2), i3.removeAttribute(t4(248)), i3.removeAttribute(`aria-labelledby`), i3.removeAttribute(t4(231)), i3.setAttribute(`aria-hidden`, true), this.resetList(), this.resetImage(), this.fulled = false, this.viewed = false, this.isShown = false, this.hiding = false, this.destroyed || (V2(r3[t4(238)]) && Z2(n3, Ce2, r3.hidden, { once: true }), Q2(n3, Ce2, null, { cancelable: false }));
    }, requestFullscreen: function(t4) {
      var n3 = e3, r3 = this.element.ownerDocument;
      if (this.fulled && !(r3.fullscreenElement || r3.webkitFullscreenElement || r3[n3(292)] || r3.msFullscreenElement)) {
        var i3 = r3.documentElement;
        i3.requestFullscreen ? B2(t4) ? i3.requestFullscreen(t4) : i3.requestFullscreen() : i3.webkitRequestFullscreen ? i3.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : i3.mozRequestFullScreen ? i3.mozRequestFullScreen() : i3.msRequestFullscreen && i3.msRequestFullscreen();
      }
    }, exitFullscreen: function() {
      var t4 = e3, n3 = this.element.ownerDocument;
      this.fulled && (n3.fullscreenElement || n3.webkitFullscreenElement || n3.mozFullScreenElement || n3.msFullscreenElement) && (n3.exitFullscreen ? n3.exitFullscreen() : n3[t4(247)] ? n3.webkitExitFullscreen() : n3.mozCancelFullScreen ? n3.mozCancelFullScreen() : n3.msExitFullscreen && n3.msExitFullscreen());
    }, change: function(t4) {
      var n3 = e3, r3 = this.options, i3 = this.pointers, a3 = i3[Object[n3(229)](i3)[0]];
      if (a3) {
        var o3 = a3.endX - a3[n3(145)], s3 = a3.endY - a3.startY;
        switch (this.action) {
          case _2:
            (o3 !== 0 || s3 !== 0) && (this.pointerMoved = true, this.move(o3, s3, t4));
            break;
          case v2:
            this.zoom(Ze2(i3), false, null, t4);
            break;
          case ee2:
            this[n3(305)] = `switched`;
            var c3 = Math.abs(o3);
            c3 > 1 && c3 > Math.abs(s3) && (this.pointers = {}, o3 > 1 ? this[n3(288)](r3.loop) : o3 < -1 && this.next(r3.loop));
            break;
        }
        H2(i3, function(e4) {
          var t5 = n3;
          e4.startX = e4.endX, e4.startY = e4[t5(191)];
        });
      }
    }, isSwitchable: function() {
      var e4 = this.imageData, t4 = this.viewerData;
      return this.length > 1 && e4.x >= 0 && e4.y >= 0 && e4.width <= t4.width && e4.height <= t4.height;
    } }, at2 = p2.Viewer, ot2 = /* @__PURE__ */ (function(e4) {
      return function() {
        return e4 += 1, e4;
      };
    })(-1), st2 = (function() {
      var n3 = e3;
      function i3(e4) {
        var n4 = y, r3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (t3(this, i3), !e4 || e4.nodeType !== 1) throw Error(n4(204));
        this[n4(217)] = e4, this[n4(142)] = U2({}, u2, B2(r3) && r3), this.action = false, this.fading = false, this.fulled = false, this.hiding = false, this.imageClicked = false, this[n4(240)] = {}, this.index = this.options.initialViewIndex, this[n4(266)] = false, this.isShown = false, this[n4(167)] = 0, this.moving = false, this.played = false, this.playing = false, this.pointers = {}, this.ready = false, this.rotating = false, this.scaling = false, this.showing = false, this.timeout = false, this.tooltipping = false, this.viewed = false, this.viewing = false, this.wheeling = false, this.zooming = false, this.pointerMoved = false, this.id = ot2(), this[n4(196)]();
      }
      return r2(i3, [{ key: n3(196), value: function() {
        var e4 = n3, t4 = this, r3 = this[e4(217)], i4 = this[e4(142)];
        if (!r3[g2]) {
          r3[g2] = this, i4.focus && !i4.keyboard && (i4[e4(319)] = false);
          var a3 = r3.localName === `img`, o3 = [];
          if (H2(a3 ? [r3] : r3.querySelectorAll(`img`), function(e5) {
            V2(i4.filter) ? i4.filter.call(t4, e5) && o3.push(e5) : t4.getImageURL(e5) && o3.push(e5);
          }), this.isImg = a3, this.length = o3.length, this.images = o3, this.initBody(), R2(document.createElement(g2).style[e4(114)]) && (i4.transition = false), i4.inline) {
            var s3 = 0, c3 = function() {
              if (s3 += 1, s3 === t4.length) {
                var e5;
                t4.initializing = false, t4.delaying = { abort: function() {
                  clearTimeout(e5);
                } }, e5 = setTimeout(function() {
                  var e6 = y;
                  t4.delaying = false, t4[e6(154)]();
                }, 0);
              }
            };
            this.initializing = { abort: function() {
              H2(o3, function(e5) {
                e5.complete || (X2(e5, j2, c3), X2(e5, M2, c3));
              });
            } }, H2(o3, function(e5) {
              if (e5.complete) c3();
              else {
                var t5, n4;
                Z2(e5, j2, t5 = function() {
                  X2(e5, M2, n4), c3();
                }, { once: true }), Z2(e5, M2, n4 = function() {
                  X2(e5, j2, t5), c3();
                }, { once: true });
              }
            });
          } else Z2(r3, k2, this.onStart = function(e5) {
            var n4 = e5.target;
            n4.localName === `img` && (!V2(i4.filter) || i4.filter.call(t4, n4)) && t4.view(t4.images.indexOf(n4));
          });
        }
      } }, { key: `build`, value: function() {
        var e4 = n3;
        if (!this.ready) {
          var t4 = this.element, r3 = this[e4(142)], i4 = t4.parentNode, a3 = document.createElement(`div`);
          a3.innerHTML = d2;
          var o3 = a3[e4(180)](`.` + g2 + `-container`), s3 = o3.querySelector(`.` + g2 + `-title`), c3 = o3.querySelector(`.` + g2 + `-toolbar`), l3 = o3.querySelector(`.` + g2 + e4(205)), u3 = o3.querySelector(`.` + g2 + e4(198)), f3 = o3.querySelector(`.` + g2 + e4(318));
          if (this.parent = i4, this.viewer = o3, this.title = s3, this.toolbar = c3, this.navbar = l3, this.button = u3, this.canvas = f3, this.footer = o3.querySelector(`.` + g2 + `-footer`), this.tooltipBox = o3.querySelector(`.` + g2 + `-tooltip`), this.player = o3[e4(180)](`.` + g2 + `-player`), this[e4(152)] = o3.querySelector(`.` + g2 + `-list`), o3.id = `` + g2 + this.id, s3.id = g2 + `Title` + this.id, K2(s3, r3.title ? Xe2(Array.isArray(r3.title) ? r3.title[0] : r3.title) : w2), K2(l3, r3.navbar ? Xe2(r3.navbar) : w2), J2(u3, w2, !r3.button), r3.keyboard && u3.setAttribute(`tabindex`, 0), r3.backdrop && (K2(o3, g2 + `-backdrop`), !r3.inline && r3.backdrop !== `static` && Ue2(f3, Pe2, `hide`)), I2(r3.className) && r3.className && r3.className.split(Fe2).forEach(function(e5) {
            K2(o3, e5);
          }), r3.toolbar) {
            var p3 = document.createElement(`ul`), m3 = B2(r3.toolbar), h3 = Ie2.slice(0, 3), _3 = Ie2.slice(7, 9), ee3 = Ie2[e4(275)](9);
            m3 || K2(c3, Xe2(r3.toolbar)), H2(m3 ? r3.toolbar : Ie2, function(t5, n4) {
              var i5 = e4, a4 = m3 && B2(t5), o4 = m3 ? He2(n4) : t5, s4 = a4 && !R2(t5.show) ? t5.show : t5;
              if (!(!s4 || !r3.zoomable && h3.indexOf(o4) !== -1 || !r3.rotatable && _3[i5(259)](o4) !== -1 || !r3[i5(302)] && ee3.indexOf(o4) !== -1)) {
                var c4 = a4 && !R2(t5.size) ? t5.size : t5, l4 = a4 && !R2(t5.click) ? t5.click : t5, u4 = document.createElement(`li`);
                r3.keyboard && u4.setAttribute(`tabindex`, 0), u4.setAttribute(`role`, `button`), K2(u4, g2 + `-` + o4), V2(l4) || Ue2(u4, Pe2, o4), L2(s4) && K2(u4, Xe2(s4)), [`small`, `large`].indexOf(c4) === -1 ? o4 === `play` && K2(u4, g2 + `-large`) : K2(u4, g2 + `-` + c4), V2(l4) && Z2(u4, k2, l4), p3.appendChild(u4);
              }
            }), c3.appendChild(p3);
          } else K2(c3, w2);
          if (!r3.rotatable) {
            var v3 = c3[e4(103)](`li[class*="rotate"]`);
            K2(v3, oe2), H2(v3, function(e5) {
              c3.appendChild(e5);
            });
          }
          if (r3[e4(108)]) K2(u3, C2), W2(o3, { zIndex: r3.zIndexInline }), window.getComputedStyle(i4)[e4(320)] === `static` && W2(i4, { position: `relative` }), i4.insertBefore(o3, t4.nextSibling);
          else {
            K2(u3, te2), K2(o3, S2), K2(o3, x2), K2(o3, w2), W2(o3, { zIndex: r3.zIndex });
            var y2 = r3[e4(317)];
            I2(y2) && (y2 = t4.ownerDocument.querySelector(y2)), y2 || (y2 = this.body), y2.appendChild(o3);
          }
          if (r3.inline && (this.render(), this.bind(), this.isShown = true), this.ready = true, V2(r3.ready) && Z2(t4, ye2, r3.ready, { once: true }), Q2(t4, ye2) === false) {
            this[e4(190)] = false;
            return;
          }
          this.ready && r3.inline && this.view(this.index);
        }
      } }], [{ key: `noConflict`, value: function() {
        return window.Viewer = at2, i3;
      } }, { key: n3(323), value: function(e4) {
        U2(u2, B2(e4) && e4);
      } }]);
    })();
    return U2(st2.prototype, et2, tt2, nt2, rt2, it2), st2;
  });
})(), 1);
_();
var te = typeof global == `object` && global && global[v(197)] === Object && global, x = typeof self == `object` && self && self.Object === Object && self, S = te || x || Function(`return this`)(), C = S.Symbol, ne = Object.prototype, w = ne.hasOwnProperty, re = ne.toString, ie = C ? C[v(299)] : void 0;
function ae(e2) {
  var t2 = w.call(e2, ie), n2 = e2[ie];
  try {
    e2[ie] = void 0;
    var r2 = true;
  } catch {
  }
  var i2 = re.call(e2);
  return r2 && (t2 ? e2[ie] = n2 : delete e2[ie]), i2;
}
var T = Object.prototype[v(102)];
function oe(e2) {
  return T.call(e2);
}
var E = `[object Null]`, se = `[object Undefined]`, ce = C ? C.toStringTag : void 0;
function D(e2) {
  return e2 == null ? e2 === void 0 ? se : E : ce && ce in Object(e2) ? ae(e2) : oe(e2);
}
function O(e2) {
  return typeof e2 == `object` && !!e2;
}
var k = Array[v(263)];
function A(e2) {
  var t2 = typeof e2;
  return e2 != null && (t2 == `object` || t2 == `function`);
}
function le(e2) {
  return e2;
}
var ue = `[object AsyncFunction]`, de = `[object Function]`, j = `[object GeneratorFunction]`, M = `[object Proxy]`;
function fe(e2) {
  if (!A(e2)) return false;
  var t2 = D(e2);
  return t2 == de || t2 == j || t2 == ue || t2 == M;
}
var pe = S[`__core-js_shared__`], me = (function() {
  var e2 = v, t2 = /[^.]+$/.exec(pe && pe.keys && pe.keys.IE_PROTO || ``);
  return t2 ? e2(158) + t2 : ``;
})();
function he(e2) {
  return !!me && me in e2;
}
var ge = Function.prototype[v(102)];
function _e(e2) {
  if (e2 != null) {
    try {
      return ge.call(e2);
    } catch {
    }
    try {
      return e2 + ``;
    } catch {
    }
  }
  return ``;
}
var N = /[\\^$.*+?()[\]{}|]/g, ve = /^\[object .+?Constructor\]$/, ye = Function.prototype, be = Object[v(244)], xe = ye.toString, Se = be.hasOwnProperty, Ce = RegExp(`^` + xe.call(Se).replace(N, `\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, `$1.*?`) + `$`);
function we(e2) {
  return !A(e2) || he(e2) ? false : (fe(e2) ? Ce : ve).test(_e(e2));
}
function P(e2, t2) {
  return e2 == null ? void 0 : e2[t2];
}
function Te(e2, t2) {
  var n2 = P(e2, t2);
  return we(n2) ? n2 : void 0;
}
function Ee(e2, t2, n2) {
  var r2 = v;
  switch (n2.length) {
    case 0:
      return e2.call(t2);
    case 1:
      return e2[r2(290)](t2, n2[0]);
    case 2:
      return e2.call(t2, n2[0], n2[1]);
    case 3:
      return e2.call(t2, n2[0], n2[1], n2[2]);
  }
  return e2.apply(t2, n2);
}
var De = 800, Oe = 16, ke = Date[v(208)];
function Ae(e2) {
  var t2 = 0, n2 = 0;
  return function() {
    var r2 = ke(), i2 = Oe - (r2 - n2);
    if (n2 = r2, i2 > 0) {
      if (++t2 >= De) return arguments[0];
    } else t2 = 0;
    return e2.apply(void 0, arguments);
  };
}
function je(e2) {
  return function() {
    return e2;
  };
}
var F = (function() {
  try {
    var e2 = Te(Object, `defineProperty`);
    return e2({}, ``, {}), e2;
  } catch {
  }
})(), Me = Ae(F ? function(e2, t2) {
  return F(e2, `toString`, { configurable: true, enumerable: false, value: je(t2), writable: true });
} : le), Ne = 9007199254740991, Pe = /^(?:0|[1-9]\d*)$/;
function Fe(e2, t2) {
  var n2 = typeof e2;
  return t2 ?? (t2 = Ne), !!t2 && (n2 == `number` || n2 != `symbol` && Pe.test(e2)) && e2 > -1 && e2 % 1 == 0 && e2 < t2;
}
function Ie(e2, t2, n2) {
  t2 == `__proto__` && F ? F(e2, t2, { configurable: true, enumerable: true, value: n2, writable: true }) : e2[t2] = n2;
}
function I(e2, t2) {
  return e2 === t2 || e2 !== e2 && t2 !== t2;
}
var Le = Object.prototype.hasOwnProperty;
function L(e2, t2, n2) {
  var r2 = e2[t2];
  (!(Le.call(e2, t2) && I(r2, n2)) || n2 === void 0 && !(t2 in e2)) && Ie(e2, t2, n2);
}
function R(e2, t2, n2, r2) {
  var i2 = !n2;
  n2 || (n2 = {});
  for (var a2 = -1, o2 = t2.length; ++a2 < o2; ) {
    var s2 = t2[a2], c2 = r2 ? r2(n2[s2], e2[s2], s2, n2, e2) : void 0;
    c2 === void 0 && (c2 = e2[s2]), i2 ? Ie(n2, s2, c2) : L(n2, s2, c2);
  }
  return n2;
}
var z = Math.max;
function Re(e2, t2, n2) {
  return t2 = z(t2 === void 0 ? e2.length - 1 : t2, 0), function() {
    for (var r2 = arguments, i2 = -1, a2 = z(r2.length - t2, 0), o2 = Array(a2); ++i2 < a2; ) o2[i2] = r2[t2 + i2];
    i2 = -1;
    for (var s2 = Array(t2 + 1); ++i2 < t2; ) s2[i2] = r2[i2];
    return s2[t2] = n2(o2), Ee(e2, this, s2);
  };
}
function B(e2, t2) {
  return Me(Re(e2, t2, le), e2 + ``);
}
var V = 9007199254740991;
function H(e2) {
  return typeof e2 == `number` && e2 > -1 && e2 % 1 == 0 && e2 <= V;
}
function U(e2) {
  return e2 != null && H(e2.length) && !fe(e2);
}
function ze(e2, t2, n2) {
  if (!A(n2)) return false;
  var r2 = typeof t2;
  return (r2 == `number` ? U(n2) && Fe(t2, n2.length) : r2 == `string` && t2 in n2) ? I(n2[t2], e2) : false;
}
function W(e2) {
  return B(function(t2, n2) {
    var r2 = -1, i2 = n2.length, a2 = i2 > 1 ? n2[i2 - 1] : void 0, o2 = i2 > 2 ? n2[2] : void 0;
    for (a2 = e2.length > 3 && typeof a2 == `function` ? (i2--, a2) : void 0, o2 && ze(n2[0], n2[1], o2) && (a2 = i2 < 3 ? void 0 : a2, i2 = 1), t2 = Object(t2); ++r2 < i2; ) {
      var s2 = n2[r2];
      s2 && e2(t2, s2, r2, a2);
    }
    return t2;
  });
}
var Be = Object.prototype;
function G(e2) {
  var t2 = e2 && e2.constructor;
  return e2 === (typeof t2 == `function` && t2.prototype || Be);
}
function K(e2, t2) {
  for (var n2 = -1, r2 = Array(e2); ++n2 < e2; ) r2[n2] = t2(n2);
  return r2;
}
var q = v(219);
function J(e2) {
  return O(e2) && D(e2) == q;
}
var Ve = Object[v(244)], He = Ve.hasOwnProperty, Y = Ve[v(230)], Ue = J(/* @__PURE__ */ (function() {
  return arguments;
})()) ? J : function(e2) {
  return O(e2) && He.call(e2, `callee`) && !Y.call(e2, `callee`);
};
function We() {
  return false;
}
var X = typeof exports == `object` && exports && !exports.nodeType && exports, Z = X && typeof module == `object` && module && !module.nodeType && module, Q = Z && Z.exports === X ? S.Buffer : void 0, Ge = (Q ? Q[v(201)] : void 0) || We, Ke = `[object Arguments]`, qe = `[object Array]`, Je = `[object Boolean]`, Ye = `[object Date]`, Xe = v(110), Ze = `[object Function]`, Qe = `[object Map]`, $e = `[object Number]`, et = v(281), tt = `[object RegExp]`, nt = `[object Set]`, rt = `[object String]`, it = `[object WeakMap]`, at = `[object ArrayBuffer]`, ot = `[object DataView]`, st = `[object Float32Array]`, ct = `[object Float64Array]`, lt = `[object Int8Array]`, ut = `[object Int16Array]`, dt = `[object Int32Array]`, ft = v(262), pt = `[object Uint8ClampedArray]`, mt = v(164), ht = `[object Uint32Array]`, $ = {};
$[st] = $[ct] = $[lt] = $[ut] = $[dt] = $[ft] = $[pt] = $[mt] = $[ht] = true, $[Ke] = $[qe] = $[at] = $[Je] = $[ot] = $[Ye] = $[Xe] = $[Ze] = $[Qe] = $[$e] = $[et] = $[tt] = $[nt] = $[rt] = $[it] = false;
function gt(e2) {
  var t2 = v;
  return O(e2) && H(e2[t2(167)]) && !!$[D(e2)];
}
function _t(e2) {
  return function(t2) {
    return e2(t2);
  };
}
function vt() {
  var e2 = `pointerId,render,onClick,keys,propertyIsEnumerable,aria-modal,naturalWidth,createEvent,isNaN,renderList,top,push,hidden,viewed,imageData,stop,getAttribute,showing,prototype,2235306zVUEiT,resize,webkitExitFullscreen,role,initialImageData,button,1565168mYyXUP,type,alt,shown,object,initImage,exports,classList,indexOf,zoomed,aria-hidden,[object Uint8Array],isArray,-fixed,dataset,isImg,userAgent,move,reset,destroyed,innerHTML,&lt;,documentElement,tooltipping,slice,enforceFocus,innerWidth,isShown,onload,onFocusin,[object Object],parentElement,imageClicked,-move,zoomRatio,switch,1076121jfGihD,prev,pointerdown,call,2213570tIkfiB,mozFullScreenElement,filter,fullscreen,delaying,containerData,slideOnTouch,1048747yeXjje,toStringTag,timeout,viewer,scalable,played,setAttribute,action,endX,max,initList,sqrt,imageRendering,scaleX,$1-$2,defineProperty,fulled,error,full,container,-canvas,focus,position,test,movable,setDefaults,toString,querySelectorAll,image,rotate,zoomTo,canvas,inline,document,[object Error],focusin,offset,replace,transition,tabindex,removeChild,addEventListener,preventDefault,appendChild,referrerPolicy,naturalHeight,forEach,clearEnforceFocus,1KgSKng,sizes,&#39;,zoom-out,pointers,textContent,target,complete,doubleClickImageTimeout,onDragStart,__scopeId,root,viewerData,interval,loading,hide,scrollbarWidth,isSwitchable,options,scaling,min,startX,removeEventListener,renderViewer,onStart,toLowerCase,mousedown,style,list,static,build,translateX(,images,wheeling,Symbol(src)_1.,originalUrl,onPointerUp,transitioning,div,scale,[object Uint16Array],show,flip-horizontal,length,parent,&quot;,change,zoom,string,listeners,abort,onKeyDown,inheritedAttributes,ownerDocument,imageInitializing,scaleX(,querySelector,deg),binding,onDblclick,body,&gt;,offsetWidth,click,abs,initViewer,ready,endY,symbol,startY,touchmove,viewing,init,Object,-button,pointerType,src,isBuffer,createElement,touchend touchcancel,The first argument is required and must be an element.,-navbar,changedTouches,isMap,now,hiding,83410ncCOny,load,-hide-sm-down,13710688BzDcYj,aria-labelledby,player,-fullscreen-exit,element,bind,[object Arguments],view,removeAttribute,index,require,round,rotate-left`.split(`,`);
  return vt = function() {
    return e2;
  }, vt();
}
var yt = typeof exports == v(255) && exports && !exports.nodeType && exports, bt = yt && typeof module == v(255) && module && !module.nodeType && module, xt = bt && bt[v(257)] === yt && te.process, St = (function() {
  var e2 = v;
  try {
    return bt && bt[e2(223)] && bt.require(`util`).types || xt && xt.binding && xt[e2(182)](`util`);
  } catch {
  }
})(), Ct = St && St.isTypedArray, wt = Ct ? _t(Ct) : gt, Tt = Object[v(244)].hasOwnProperty;
function Et(e2, t2) {
  var n2 = v, r2 = k(e2), i2 = !r2 && Ue(e2), a2 = !r2 && !i2 && Ge(e2), o2 = !r2 && !i2 && !a2 && wt(e2), s2 = r2 || i2 || a2 || o2, c2 = s2 ? K(e2.length, String) : [], l2 = c2[n2(167)];
  for (var u2 in e2) (t2 || Tt[n2(290)](e2, u2)) && !(s2 && (u2 == `length` || a2 && (u2 == n2(112) || u2 == `parent`) || o2 && (u2 == `buffer` || u2 == `byteLength` || u2 == `byteOffset`) || Fe(u2, l2))) && c2.push(u2);
  return c2;
}
function Dt(e2, t2) {
  return function(n2) {
    return e2(t2(n2));
  };
}
var Ot = Dt(Object.keys, Object), kt = Object.prototype.hasOwnProperty;
function At(e2) {
  if (!G(e2)) return Ot(e2);
  var t2 = [];
  for (var n2 in Object(e2)) kt.call(e2, n2) && n2 != `constructor` && t2.push(n2);
  return t2;
}
function jt(e2) {
  return U(e2) ? Et(e2) : At(e2);
}
var Mt = Object.prototype.hasOwnProperty;
W(function(e2, t2) {
  var n2 = v;
  if (G(t2) || U(t2)) {
    R(t2, jt(t2), e2);
    return;
  }
  for (var r2 in t2) Mt[n2(290)](t2, r2) && L(e2, r2, t2[r2]);
});
function Nt(e2) {
  var t2 = [];
  if (e2 != null) for (var n2 in Object(e2)) t2.push(n2);
  return t2;
}
var Pt = Object.prototype.hasOwnProperty;
function Ft(e2) {
  if (!A(e2)) return Nt(e2);
  var t2 = G(e2), n2 = [];
  for (var r2 in e2) r2 == `constructor` && (t2 || !Pt.call(e2, r2)) || n2.push(r2);
  return n2;
}
function It(e2) {
  return U(e2) ? Et(e2, true) : Ft(e2);
}
var Lt = Object.prototype, Rt = Lt.hasOwnProperty;
B(function(e2, t2) {
  var n2 = v;
  e2 = Object(e2);
  var r2 = -1, i2 = t2[n2(167)], a2 = i2 > 2 ? t2[2] : void 0;
  for (a2 && ze(t2[0], t2[1], a2) && (i2 = 1); ++r2 < i2; ) for (var o2 = t2[r2], s2 = It(o2), c2 = -1, l2 = s2.length; ++c2 < l2; ) {
    var u2 = s2[c2], d2 = e2[u2];
    (d2 === void 0 || I(d2, Lt[u2]) && !Rt[n2(290)](e2, u2)) && (e2[u2] = o2[u2]);
  }
  return e2;
});
var zt = p({ name: `Viewer`, props: { images: { type: Array, default: () => [] }, rebuild: { type: Boolean, default: false }, trigger: { type: Object, default: null }, options: { type: Object, default: () => null } }, emits: [`inited`], setup(e2, { emit: n2 }) {
  let r2, i2 = t();
  function a2() {
    r2 = new b.default(i2.value, e2.options), n2(`inited`, r2);
  }
  function o2() {
    r2 && r2.destroy();
  }
  function d2() {
    o2(), a2();
  }
  function f2() {
    r2 ? (r2.update(), n2(`inited`, r2)) : a2();
  }
  function p2() {
    e2.rebuild ? d2() : f2();
  }
  let m2 = { deep: true };
  return s(() => e2.images, () => {
    c(() => {
      p2();
    });
  }, m2), s(() => e2.trigger, () => {
    c(() => {
      p2();
    });
  }, m2), s(() => e2.options, () => {
    c(() => {
      d2();
    });
  }, m2), l(() => a2()), u(() => o2()), { root: i2, createViewer: a2, rebuildViewer: d2, updateViewer: f2, destroyViewer: o2 };
} }), Bt = (e2, t2) => {
  let n2 = e2.__vccOpts || e2;
  for (let [e3, r2] of t2) n2[e3] = r2;
  return n2;
}, Vt = { ref: v(135) };
function Ht(t2, n2, r2, i2, a2, s2) {
  var c2 = v;
  return f(), e(c2(162), Vt, [o(t2.$slots, `default`, { images: t2.images, options: t2.options })], 512);
}
var Ut = Bt(zt, [[v(227), Ht]]), Wt = [`src`], Gt = ee(p({ __name: `ImageViewer`, props: { image: {} }, setup(t2) {
  var o2 = v;
  let s2 = t2, c2 = i(() => s2.image ? [{ src: s2.image, index: 0 }] : []);
  return (t3, i2) => (f(), a(r(Ut), { images: c2.value, style: { height: `100%` } }, { default: n(() => [(f(true), e(m, null, d(c2.value, (t4) => (f(), e(`img`, { alt: `\u56FE\u7247`, src: t4[o2(200)], key: t4.index, class: `image` }, null, 8, Wt))), 128))]), _: 1 }, 8, [`images`]));
} }), [[v(134), `data-v-b0f61c51`]]);
export {
  Gt as default
};
