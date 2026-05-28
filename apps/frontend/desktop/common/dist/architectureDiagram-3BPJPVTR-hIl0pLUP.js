import { a as e, o as t } from "./chunk-DeXYQlWK.js";
import { g as n, h as r, m as i, p as a } from "./index-D-g3WoLo.js";
import { m as o } from "./src-B18GHWxx.js";
import { _ as s } from "./mermaid-parser.core-GIi7jTaD.js";
import { n as c, t as l } from "./chunk-AGHRB4JF-CBHSUHQe.js";
import { B as u, E as d, V as f, W as p, X as m, Z as h, j as g, k as _, o as v, p as y, s as b, z as x } from "./chunk-CSCIHK7Q-pN0du8p0.js";
import { h as S, z as C } from "./chunk-5ZQYHXKU-BklVe06k.js";
import { t as w } from "./chunk-WU5MYG2G-BnIisATw.js";
import { a as T, i as E, r as D, t as O } from "./chunk-O5CBEL6O-CERCp6yT.js";
import { t as k } from "./chunk-4BX2VUAB-GSW_Gx_n.js";
import { t as A } from "./cytoscape.esm-BopBxywr.js";
var j = M;
(function(e2, t2) {
  for (var n2 = M, r2 = e2(); ; ) try {
    if (-parseInt(n2(787)) / 1 * (parseInt(n2(724)) / 2) + -parseInt(n2(616)) / 3 + -parseInt(n2(777)) / 4 + parseInt(n2(755)) / 5 + -parseInt(n2(721)) / 6 + -parseInt(n2(796)) / 7 * (-parseInt(n2(635)) / 8) + -parseInt(n2(671)) / 9 * (-parseInt(n2(902)) / 10) === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(ye, 731285);
function M(e2, t2) {
  return e2 -= 437, ye()[e2];
}
var N = e((e2, t2) => {
  (function(n2, r2) {
    var i2 = M;
    typeof e2 == `object` && typeof t2 == i2(825) ? t2.exports = r2() : typeof define == `function` && define.amd ? define([], r2) : typeof e2 == `object` ? e2[i2(737)] = r2() : n2[i2(737)] = r2();
  })(e2, function() {
    return (function(e3) {
      var t3 = {};
      function n2(r2) {
        var i2 = M;
        if (t3[r2]) return t3[r2][i2(513)];
        var a2 = t3[r2] = { i: r2, l: false, exports: {} };
        return e3[r2].call(a2.exports, a2, a2.exports, n2), a2.l = true, a2.exports;
      }
      return n2.m = e3, n2.c = t3, n2.i = function(e4) {
        return e4;
      }, n2.d = function(e4, t4, r2) {
        n2.o(e4, t4) || Object.defineProperty(e4, t4, { configurable: false, enumerable: true, get: r2 });
      }, n2.n = function(e4) {
        var t4 = e4 && e4[M(795)] ? function() {
          return e4.default;
        } : function() {
          return e4;
        };
        return n2.d(t4, `a`, t4), t4;
      }, n2.o = function(e4, t4) {
        return Object.prototype.hasOwnProperty[M(878)](e4, t4);
      }, n2.p = ``, n2(n2.s = 28);
    })([function(e3, t3, n2) {
      var r2 = M;
      function i2() {
      }
      i2.QUALITY = 1, i2.DEFAULT_CREATE_BENDS_AS_NEEDED = false, i2.DEFAULT_INCREMENTAL = false, i2.DEFAULT_ANIMATION_ON_LAYOUT = true, i2.DEFAULT_ANIMATION_DURING_LAYOUT = false, i2[r2(683)] = 50, i2.DEFAULT_UNIFORM_LEAF_NODE_SIZES = false, i2.DEFAULT_GRAPH_MARGIN = 15, i2.NODE_DIMENSIONS_INCLUDE_LABELS = false, i2.SIMPLE_NODE_SIZE = 40, i2.SIMPLE_NODE_HALF_SIZE = i2[r2(608)] / 2, i2.EMPTY_COMPOUND_NODE_SIZE = 40, i2.MIN_EDGE_LENGTH = 1, i2.WORLD_BOUNDARY = 1e6, i2.INITIAL_WORLD_BOUNDARY = i2.WORLD_BOUNDARY / 1e3, i2[r2(872)] = 1200, i2.WORLD_CENTER_Y = 900, e3.exports = i2;
    }, function(e3, t3, n2) {
      var r2 = M, i2 = n2(2), a2 = n2(8), o2 = n2(9);
      function s2(e4, t4, n3) {
        var r3 = M;
        i2.call(this, n3), this.isOverlapingSourceAndTarget = false, this.vGraphObject = n3, this.bendpoints = [], this[r3(797)] = e4, this.target = t4;
      }
      for (var c2 in s2.prototype = Object.create(i2.prototype), i2) s2[c2] = i2[c2];
      s2.prototype.getSource = function() {
        return this.source;
      }, s2.prototype.getTarget = function() {
        return this.target;
      }, s2.prototype.isInterGraph = function() {
        return this.isInterGraph;
      }, s2.prototype[r2(765)] = function() {
        return this.length;
      }, s2.prototype.isOverlapingSourceAndTarget = function() {
        var e4 = r2;
        return this[e4(789)];
      }, s2.prototype.getBendpoints = function() {
        return this.bendpoints;
      }, s2.prototype.getLca = function() {
        return this.lca;
      }, s2[r2(459)].getSourceInLca = function() {
        var e4 = r2;
        return this[e4(844)];
      }, s2.prototype.getTargetInLca = function() {
        var e4 = r2;
        return this[e4(498)];
      }, s2.prototype[r2(618)] = function(e4) {
        var t4 = r2;
        if (this.source === e4) return this[t4(582)];
        if (this.target === e4) return this.source;
        throw `Node is not incident with this edge`;
      }, s2.prototype.getOtherEndInGraph = function(e4, t4) {
        for (var n3 = r2, i3 = this.getOtherEnd(e4), a3 = t4.getGraphManager().getRoot(); ; ) {
          if (i3.getOwner() == t4) return i3;
          if (i3.getOwner() == a3) break;
          i3 = i3[n3(742)]().getParent();
        }
        return null;
      }, s2.prototype.updateLength = function() {
        var e4 = r2, t4 = [, , , ,];
        this[e4(789)] = a2.getIntersection(this[e4(582)][e4(466)](), this[e4(797)].getRect(), t4), this.isOverlapingSourceAndTarget || (this.lengthX = t4[0] - t4[2], this.lengthY = t4[1] - t4[3], Math.abs(this.lengthX) < 1 && (this.lengthX = o2[e4(437)](this.lengthX)), Math.abs(this.lengthY) < 1 && (this[e4(679)] = o2.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY));
      }, s2.prototype.updateLengthSimple = function() {
        var e4 = r2;
        this.lengthX = this.target.getCenterX() - this.source.getCenterX(), this.lengthY = this.target.getCenterY() - this.source.getCenterY(), Math.abs(this.lengthX) < 1 && (this.lengthX = o2.sign(this.lengthX)), Math[e4(549)](this[e4(679)]) < 1 && (this.lengthY = o2.sign(this[e4(679)])), this[e4(568)] = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
      }, e3.exports = s2;
    }, function(e3, t3, n2) {
      function r2(e4) {
        this.vGraphObject = e4;
      }
      e3.exports = r2;
    }, function(e3, t3, n2) {
      var r2 = M, i2 = n2(2), a2 = n2(10), o2 = n2(13), s2 = n2(0), c2 = n2(16), l2 = n2(5);
      function u2(e4, t4, n3, r3) {
        var s3 = M;
        n3 == null && r3 == null && (r3 = t4), i2.call(this, r3), e4[s3(600)] != null && (e4 = e4[s3(600)]), this.estimatedSize = a2[s3(632)], this.inclusionTreeDepth = a2.MAX_VALUE, this.vGraphObject = r3, this.edges = [], this.graphManager = e4, n3 != null && t4 != null ? this.rect = new o2(t4.x, t4.y, n3[s3(719)], n3.height) : this.rect = new o2();
      }
      for (var d2 in u2.prototype = Object.create(i2[r2(459)]), i2) u2[d2] = i2[d2];
      u2.prototype.getEdges = function() {
        var e4 = r2;
        return this[e4(471)];
      }, u2.prototype.getChild = function() {
        return this.child;
      }, u2[r2(459)].getOwner = function() {
        return this.owner;
      }, u2[r2(459)].getWidth = function() {
        return this.rect.width;
      }, u2.prototype.setWidth = function(e4) {
        this.rect.width = e4;
      }, u2.prototype.getHeight = function() {
        return this.rect.height;
      }, u2.prototype[r2(686)] = function(e4) {
        var t4 = r2;
        this[t4(817)].height = e4;
      }, u2.prototype.getCenterX = function() {
        var e4 = r2;
        return this[e4(817)].x + this.rect.width / 2;
      }, u2.prototype.getCenterY = function() {
        var e4 = r2;
        return this.rect.y + this[e4(817)].height / 2;
      }, u2.prototype.getCenter = function() {
        return new l2(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
      }, u2.prototype.getLocation = function() {
        return new l2(this.rect.x, this.rect.y);
      }, u2.prototype[r2(466)] = function() {
        return this.rect;
      }, u2[r2(459)][r2(741)] = function() {
        var e4 = r2;
        return Math.sqrt(this[e4(817)].width * this.rect[e4(719)] + this.rect[e4(636)] * this[e4(817)].height);
      }, u2.prototype.getHalfTheDiagonal = function() {
        var e4 = r2;
        return Math.sqrt(this[e4(817)].height * this[e4(817)].height + this.rect.width * this.rect.width) / 2;
      }, u2[r2(459)].setRect = function(e4, t4) {
        var n3 = r2;
        this.rect.x = e4.x, this.rect.y = e4.y, this.rect.width = t4.width, this.rect[n3(636)] = t4[n3(636)];
      }, u2.prototype[r2(470)] = function(e4, t4) {
        this.rect.x = e4 - this.rect.width / 2, this.rect.y = t4 - this.rect.height / 2;
      }, u2[r2(459)].setLocation = function(e4, t4) {
        var n3 = r2;
        this[n3(817)].x = e4, this.rect.y = t4;
      }, u2.prototype.moveBy = function(e4, t4) {
        var n3 = r2;
        this.rect.x += e4, this[n3(817)].y += t4;
      }, u2.prototype[r2(591)] = function(e4) {
        var t4 = [], n3 = this;
        return n3.edges.forEach(function(r3) {
          if (r3.target == e4) {
            if (r3.source != n3) throw `Incorrect edge source!`;
            t4.push(r3);
          }
        }), t4;
      }, u2[r2(459)].getEdgesBetween = function(e4) {
        var t4 = r2, n3 = [], i3 = this;
        return i3.edges[t4(561)](function(r3) {
          var a3 = t4;
          if (!(r3.source == i3 || r3[a3(582)] == i3)) throw `Incorrect edge source and/or target`;
          (r3.target == e4 || r3.source == e4) && n3.push(r3);
        }), n3;
      }, u2.prototype[r2(743)] = function() {
        var e4 = /* @__PURE__ */ new Set(), t4 = this;
        return t4.edges.forEach(function(n3) {
          if (n3.source == t4) e4.add(n3.target);
          else {
            if (n3.target != t4) throw `Incorrect incidency!`;
            e4.add(n3.source);
          }
        }), e4;
      }, u2.prototype[r2(900)] = function() {
        var e4 = r2, t4 = /* @__PURE__ */ new Set(), n3, i3;
        if (t4[e4(887)](this), this.child != null) for (var a3 = this.child[e4(572)](), o3 = 0; o3 < a3.length; o3++) n3 = a3[o3], i3 = n3.withChildren(), i3.forEach(function(e5) {
          t4.add(e5);
        });
        return t4;
      }, u2.prototype.getNoOfChildren = function() {
        var e4 = 0, t4;
        if (this.child == null) e4 = 1;
        else for (var n3 = this.child.getNodes(), r3 = 0; r3 < n3.length; r3++) t4 = n3[r3], e4 += t4.getNoOfChildren();
        return e4 == 0 && (e4 = 1), e4;
      }, u2[r2(459)].getEstimatedSize = function() {
        if (this.estimatedSize == a2.MIN_VALUE) throw `assert failed`;
        return this.estimatedSize;
      }, u2.prototype.calcEstimatedSize = function() {
        var e4 = r2;
        return this.child == null ? this.estimatedSize = (this.rect.width + this.rect.height) / 2 : (this[e4(596)] = this.child.calcEstimatedSize(), this.rect.width = this.estimatedSize, this.rect.height = this.estimatedSize, this[e4(596)]);
      }, u2[r2(459)].scatter = function() {
        var e4 = r2, t4, n3, i3 = -s2.INITIAL_WORLD_BOUNDARY, a3 = s2.INITIAL_WORLD_BOUNDARY;
        t4 = s2.WORLD_CENTER_X + c2.nextDouble() * (a3 - i3) + i3;
        var o3 = -s2[e4(864)], l3 = s2.INITIAL_WORLD_BOUNDARY;
        n3 = s2.WORLD_CENTER_Y + c2[e4(452)]() * (l3 - o3) + o3, this.rect.x = t4, this.rect.y = n3;
      }, u2.prototype.updateBounds = function() {
        var e4 = r2;
        if (this.getChild() == null) throw `assert failed`;
        if (this[e4(497)]()[e4(572)]().length != 0) {
          var t4 = this.getChild();
          if (t4.updateBounds(true), this.rect.x = t4.getLeft(), this[e4(817)].y = t4.getTop(), this.setWidth(t4[e4(630)]() - t4.getLeft()), this.setHeight(t4[e4(798)]() - t4.getTop()), s2[e4(647)]) {
            var n3 = t4.getRight() - t4.getLeft(), i3 = t4.getBottom() - t4.getTop();
            this[e4(626)] && (this.labelPosHorizontal == `left` ? (this.rect.x -= this.labelWidth, this.setWidth(n3 + this.labelWidth)) : this.labelPosHorizontal == `center` && this.labelWidth > n3 ? (this.rect.x -= (this.labelWidth - n3) / 2, this.setWidth(this.labelWidth)) : this.labelPosHorizontal == `right` && this[e4(714)](n3 + this.labelWidth)), this.labelHeight && (this.labelPosVertical == `top` ? (this.rect.y -= this.labelHeight, this[e4(686)](i3 + this.labelHeight)) : this.labelPosVertical == e4(545) && this.labelHeight > i3 ? (this.rect.y -= (this.labelHeight - i3) / 2, this.setHeight(this.labelHeight)) : this.labelPosVertical == `bottom` && this.setHeight(i3 + this.labelHeight));
          }
        }
      }, u2.prototype[r2(818)] = function() {
        var e4 = r2;
        if (this[e4(502)] == a2.MAX_VALUE) throw `assert failed`;
        return this.inclusionTreeDepth;
      }, u2.prototype.transform = function(e4) {
        var t4 = r2, n3 = this.rect.x;
        n3 > s2.WORLD_BOUNDARY ? n3 = s2.WORLD_BOUNDARY : n3 < -s2[t4(467)] && (n3 = -s2[t4(467)]);
        var i3 = this.rect.y;
        i3 > s2.WORLD_BOUNDARY ? i3 = s2.WORLD_BOUNDARY : i3 < -s2.WORLD_BOUNDARY && (i3 = -s2.WORLD_BOUNDARY);
        var a3 = new l2(n3, i3), o3 = e4.inverseTransformPoint(a3);
        this.setLocation(o3.x, o3.y);
      }, u2.prototype.getLeft = function() {
        return this.rect.x;
      }, u2.prototype[r2(630)] = function() {
        return this.rect.x + this.rect.width;
      }, u2.prototype.getTop = function() {
        return this.rect.y;
      }, u2.prototype.getBottom = function() {
        var e4 = r2;
        return this.rect.y + this[e4(817)].height;
      }, u2.prototype.getParent = function() {
        return this.owner == null ? null : this.owner.getParent();
      }, e3[r2(513)] = u2;
    }, function(e3, t3, n2) {
      var r2 = M, i2 = n2(0);
      function a2() {
      }
      for (var o2 in i2) a2[o2] = i2[o2];
      a2.MAX_ITERATIONS = 2500, a2.DEFAULT_EDGE_LENGTH = 50, a2.DEFAULT_SPRING_STRENGTH = 0.45, a2.DEFAULT_REPULSION_STRENGTH = 4500, a2.DEFAULT_GRAVITY_STRENGTH = 0.4, a2.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1, a2.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8, a2[r2(695)] = 1.5, a2[r2(781)] = true, a2.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = true, a2.DEFAULT_COOLING_FACTOR_INCREMENTAL = 0.3, a2[r2(543)] = 0.33, a2.ADAPTATION_LOWER_NODE_LIMIT = 1e3, a2.ADAPTATION_UPPER_NODE_LIMIT = 5e3, a2.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100, a2.MAX_NODE_DISPLACEMENT = a2.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3, a2.MIN_REPULSION_DIST = a2.DEFAULT_EDGE_LENGTH / 10, a2[r2(638)] = 100, a2.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = 0.1, a2.MIN_EDGE_LENGTH = 1, a2.GRID_CALCULATION_CHECK_PERIOD = 10, e3.exports = a2;
    }, function(e3, t3, n2) {
      function r2(e4, t4) {
        e4 == null && t4 == null ? (this.x = 0, this.y = 0) : (this.x = e4, this.y = t4);
      }
      r2.prototype.getX = function() {
        return this.x;
      }, r2.prototype.getY = function() {
        return this.y;
      }, r2.prototype.setX = function(e4) {
        this.x = e4;
      }, r2.prototype.setY = function(e4) {
        this.y = e4;
      }, r2.prototype.getDifference = function(e4) {
        return new DimensionD(this.x - e4.x, this.y - e4.y);
      }, r2.prototype.getCopy = function() {
        return new r2(this.x, this.y);
      }, r2.prototype.translate = function(e4) {
        return this.x += e4.width, this.y += e4.height, this;
      }, e3.exports = r2;
    }, function(e3, t3, n2) {
      var r2 = M, i2 = n2(2), a2 = n2(10), o2 = n2(0), s2 = n2(7), c2 = n2(3), l2 = n2(1), u2 = n2(13), d2 = n2(12), f2 = n2(11);
      function p2(e4, t4, n3) {
        var r3 = M;
        i2.call(this, n3), this.estimatedSize = a2[r3(632)], this.margin = o2.DEFAULT_GRAPH_MARGIN, this.edges = [], this[r3(811)] = [], this.isConnected = false, this.parent = e4, t4 != null && t4 instanceof s2 ? this.graphManager = t4 : t4 != null && t4 instanceof Layout && (this.graphManager = t4.graphManager);
      }
      for (var m2 in p2.prototype = Object.create(i2[r2(459)]), i2) p2[m2] = i2[m2];
      p2.prototype.getNodes = function() {
        return this.nodes;
      }, p2[r2(459)][r2(693)] = function() {
        return this.edges;
      }, p2.prototype.getGraphManager = function() {
        return this.graphManager;
      }, p2.prototype.getParent = function() {
        return this.parent;
      }, p2.prototype.getLeft = function() {
        return this.left;
      }, p2[r2(459)].getRight = function() {
        return this.right;
      }, p2.prototype.getTop = function() {
        return this.top;
      }, p2.prototype[r2(798)] = function() {
        return this.bottom;
      }, p2.prototype.isConnected = function() {
        var e4 = r2;
        return this[e4(603)];
      }, p2.prototype.add = function(e4, t4, n3) {
        var i3 = r2;
        if (t4 == null && n3 == null) {
          var a3 = e4;
          if (this.graphManager == null) throw `Graph has no graph mgr!`;
          if (this[i3(572)]()[i3(813)](a3) > -1) throw i3(556);
          return a3.owner = this, this[i3(572)]()[i3(752)](a3), a3;
        } else {
          var o3 = e4;
          if (!(this.getNodes().indexOf(t4) > -1 && this.getNodes().indexOf(n3) > -1)) throw i3(898);
          if (!(t4.owner == n3.owner && t4.owner == this)) throw `Both owners must be this graph!`;
          return t4.owner == n3[i3(792)] ? (o3.source = t4, o3[i3(582)] = n3, o3.isInterGraph = false, this[i3(693)]().push(o3), t4.edges[i3(752)](o3), n3 != t4 && n3[i3(471)].push(o3), o3) : null;
        }
      }, p2.prototype[r2(623)] = function(e4) {
        var t4 = r2, n3 = e4;
        if (e4 instanceof c2) {
          if (n3 == null) throw `Node is null!`;
          if (!(n3[t4(792)] != null && n3.owner == this)) throw `Owner graph is invalid!`;
          if (this[t4(600)] == null) throw t4(539);
          for (var i3 = n3.edges.slice(), a3, o3 = i3.length, s3 = 0; s3 < o3; s3++) a3 = i3[s3], a3.isInterGraph ? this[t4(600)].remove(a3) : a3.source.owner[t4(623)](a3);
          var u3 = this.nodes.indexOf(n3);
          if (u3 == -1) throw `Node not in owner node list!`;
          this[t4(811)][t4(845)](u3, 1);
        } else if (e4 instanceof l2) {
          var a3 = e4;
          if (a3 == null) throw `Edge is null!`;
          if (!(a3[t4(797)] != null && a3.target != null)) throw `Source and/or target is null!`;
          if (!(a3.source[t4(792)] != null && a3.target[t4(792)] != null && a3.source.owner == this && a3.target.owner == this)) throw t4(823);
          var d3 = a3.source.edges.indexOf(a3), f3 = a3.target.edges.indexOf(a3);
          if (!(d3 > -1 && f3 > -1)) throw `Source and/or target doesn't know this edge!`;
          a3.source.edges[t4(845)](d3, 1), a3.target != a3.source && a3.target.edges[t4(845)](f3, 1);
          var u3 = a3.source.owner.getEdges().indexOf(a3);
          if (u3 == -1) throw t4(808);
          a3.source.owner.getEdges()[t4(845)](u3, 1);
        }
      }, p2.prototype.updateLeftTop = function() {
        for (var e4 = r2, t4 = a2[e4(722)], n3 = a2.MAX_VALUE, i3, o3, s3, c3 = this.getNodes(), l3 = c3.length, u3 = 0; u3 < l3; u3++) {
          var f3 = c3[u3];
          i3 = f3.getTop(), o3 = f3.getLeft(), t4 > i3 && (t4 = i3), n3 > o3 && (n3 = o3);
        }
        return t4 == a2[e4(722)] ? null : (s3 = c3[0].getParent().paddingLeft == null ? this[e4(605)] : c3[0].getParent().paddingLeft, this.left = n3 - s3, this.top = t4 - s3, new d2(this[e4(597)], this.top));
      }, p2.prototype.updateBounds = function(e4) {
        for (var t4 = r2, n3 = a2.MAX_VALUE, i3 = -a2.MAX_VALUE, o3 = a2[t4(722)], s3 = -a2.MAX_VALUE, c3, l3, d3, f3, p3, m3 = this.nodes, h2 = m3.length, g2 = 0; g2 < h2; g2++) {
          var _2 = m3[g2];
          e4 && _2.child != null && _2[t4(633)](), c3 = _2.getLeft(), l3 = _2.getRight(), d3 = _2[t4(784)](), f3 = _2.getBottom(), n3 > c3 && (n3 = c3), i3 < l3 && (i3 = l3), o3 > d3 && (o3 = d3), s3 < f3 && (s3 = f3);
        }
        var v2 = new u2(n3, o3, i3 - n3, s3 - o3);
        n3 == a2.MAX_VALUE && (this.left = this.parent.getLeft(), this.right = this.parent.getRight(), this.top = this.parent[t4(784)](), this.bottom = this.parent.getBottom()), p3 = m3[0].getParent()[t4(532)] == null ? this.margin : m3[0].getParent().paddingLeft, this.left = v2.x - p3, this.right = v2.x + v2.width + p3, this.top = v2.y - p3, this.bottom = v2.y + v2[t4(636)] + p3;
      }, p2.calculateBounds = function(e4) {
        for (var t4 = r2, n3 = a2.MAX_VALUE, i3 = -a2.MAX_VALUE, o3 = a2[t4(722)], s3 = -a2.MAX_VALUE, c3, l3, d3, f3, p3 = e4.length, m3 = 0; m3 < p3; m3++) {
          var h2 = e4[m3];
          c3 = h2[t4(882)](), l3 = h2.getRight(), d3 = h2[t4(784)](), f3 = h2.getBottom(), n3 > c3 && (n3 = c3), i3 < l3 && (i3 = l3), o3 > d3 && (o3 = d3), s3 < f3 && (s3 = f3);
        }
        return new u2(n3, o3, i3 - n3, s3 - o3);
      }, p2.prototype[r2(818)] = function() {
        var e4 = r2;
        return this == this.graphManager.getRoot() ? 1 : this.parent[e4(818)]();
      }, p2.prototype[r2(495)] = function() {
        var e4 = r2;
        if (this.estimatedSize == a2.MIN_VALUE) throw `assert failed`;
        return this[e4(596)];
      }, p2.prototype[r2(536)] = function() {
        for (var e4 = r2, t4 = 0, n3 = this.nodes, i3 = n3.length, a3 = 0; a3 < i3; a3++) {
          var s3 = n3[a3];
          t4 += s3.calcEstimatedSize();
        }
        return t4 == 0 ? this[e4(596)] = o2.EMPTY_COMPOUND_NODE_SIZE : this.estimatedSize = t4 / Math.sqrt(this[e4(811)].length), this.estimatedSize;
      }, p2[r2(459)].updateConnected = function() {
        var e4 = r2, t4 = this;
        if (this.nodes.length == 0) {
          this.isConnected = true;
          return;
        }
        var n3 = new f2(), i3 = /* @__PURE__ */ new Set(), a3 = this.nodes[0], o3, s3;
        for (a3.withChildren().forEach(function(e5) {
          n3[M(752)](e5), i3.add(e5);
        }); n3.length !== 0; ) {
          a3 = n3.shift(), o3 = a3.getEdges();
          for (var c3 = o3[e4(568)], l3 = 0; l3 < c3; l3++) s3 = o3[l3][e4(570)](a3, this), s3 != null && !i3.has(s3) && s3.withChildren()[e4(561)](function(t5) {
            var r3 = e4;
            n3.push(t5), i3[r3(887)](t5);
          });
        }
        if (this.isConnected = false, i3[e4(708)] >= this[e4(811)].length) {
          var u3 = 0;
          i3.forEach(function(e5) {
            e5.owner == t4 && u3++;
          }), u3 == this.nodes.length && (this.isConnected = true);
        }
      }, e3.exports = p2;
    }, function(e3, t3, n2) {
      var r2 = M, i2, a2 = n2(1);
      function o2(e4) {
        var t4 = M;
        i2 = n2(6), this[t4(486)] = e4, this[t4(580)] = [], this.edges = [];
      }
      o2.prototype[r2(687)] = function() {
        var e4 = this.layout.newGraph(), t4 = this.layout.newNode(null), n3 = this.add(e4, t4);
        return this.setRootGraph(n3), this.rootGraph;
      }, o2.prototype.add = function(e4, t4, n3, i3, a3) {
        var o3 = r2;
        if (n3 == null && i3 == null && a3 == null) {
          if (e4 == null) throw `Graph is null!`;
          if (t4 == null) throw o3(612);
          if (this.graphs.indexOf(e4) > -1) throw o3(444);
          if (this[o3(580)].push(e4), e4.parent != null) throw `Already has a parent!`;
          if (t4.child != null) throw `Already has a child!`;
          return e4.parent = t4, t4[o3(442)] = e4, e4;
        } else {
          a3 = n3, i3 = t4, n3 = e4;
          var s2 = i3.getOwner(), c2 = a3.getOwner();
          if (!(s2 != null && s2.getGraphManager() == this)) throw `Source not in this graph mgr!`;
          if (!(c2 != null && c2.getGraphManager() == this)) throw `Target not in this graph mgr!`;
          if (s2 == c2) return n3.isInterGraph = false, s2.add(n3, i3, a3);
          if (n3.isInterGraph = true, n3[o3(797)] = i3, n3.target = a3, this.edges.indexOf(n3) > -1) throw `Edge already in inter-graph edge list!`;
          if (this[o3(471)][o3(752)](n3), !(n3[o3(797)] != null && n3.target != null)) throw `Edge source and/or target is null!`;
          if (!(n3.source[o3(471)].indexOf(n3) == -1 && n3.target[o3(471)].indexOf(n3) == -1)) throw o3(889);
          return n3.source.edges.push(n3), n3[o3(582)].edges[o3(752)](n3), n3;
        }
      }, o2.prototype.remove = function(e4) {
        var t4 = r2;
        if (e4 instanceof i2) {
          var n3 = e4;
          if (n3.getGraphManager() != this) throw `Graph not in this graph mgr`;
          if (!(n3 == this[t4(519)] || n3.parent != null && n3[t4(707)][t4(600)] == this)) throw `Invalid parent node!`;
          var o3 = [];
          o3 = o3[t4(575)](n3.getEdges());
          for (var s2, c2 = o3.length, l2 = 0; l2 < c2; l2++) s2 = o3[l2], n3.remove(s2);
          var u2 = [];
          u2 = u2.concat(n3.getNodes());
          var d2;
          c2 = u2.length;
          for (var l2 = 0; l2 < c2; l2++) d2 = u2[l2], n3.remove(d2);
          n3 == this[t4(519)] && this.setRootGraph(null);
          var f2 = this.graphs.indexOf(n3);
          this.graphs[t4(845)](f2, 1), n3.parent = null;
        } else if (e4 instanceof a2) {
          if (s2 = e4, s2 == null) throw `Edge is null!`;
          if (!s2.isInterGraph) throw t4(807);
          if (!(s2[t4(797)] != null && s2.target != null)) throw t4(682);
          if (!(s2.source.edges.indexOf(s2) != -1 && s2.target.edges[t4(813)](s2) != -1)) throw `Source and/or target doesn't know this edge!`;
          var f2 = s2.source[t4(471)].indexOf(s2);
          if (s2.source.edges.splice(f2, 1), f2 = s2.target.edges.indexOf(s2), s2.target.edges.splice(f2, 1), !(s2.source.owner != null && s2.source[t4(792)].getGraphManager() != null)) throw `Edge owner graph or owner graph manager is null!`;
          if (s2.source.owner.getGraphManager().edges.indexOf(s2) == -1) throw `Not in owner graph manager's edge list!`;
          var f2 = s2.source.owner.getGraphManager().edges[t4(813)](s2);
          s2[t4(797)][t4(792)][t4(540)]().edges.splice(f2, 1);
        }
      }, o2[r2(459)].updateBounds = function() {
        this.rootGraph.updateBounds(true);
      }, o2.prototype.getGraphs = function() {
        var e4 = r2;
        return this[e4(580)];
      }, o2.prototype[r2(480)] = function() {
        var e4 = r2;
        if (this.allNodes == null) {
          for (var t4 = [], n3 = this.getGraphs(), i3 = n3.length, a3 = 0; a3 < i3; a3++) t4 = t4[e4(575)](n3[a3][e4(572)]());
          this.allNodes = t4;
        }
        return this[e4(735)];
      }, o2.prototype.resetAllNodes = function() {
        this.allNodes = null;
      }, o2.prototype.resetAllEdges = function() {
        this.allEdges = null;
      }, o2.prototype.resetAllNodesToApplyGravitation = function() {
        this.allNodesToApplyGravitation = null;
      }, o2.prototype.getAllEdges = function() {
        var e4 = r2;
        if (this.allEdges == null) {
          var t4 = [], n3 = this.getGraphs();
          n3.length;
          for (var i3 = 0; i3 < n3.length; i3++) t4 = t4.concat(n3[i3][e4(693)]());
          t4 = t4[e4(575)](this.edges), this.allEdges = t4;
        }
        return this.allEdges;
      }, o2.prototype.getAllNodesToApplyGravitation = function() {
        return this.allNodesToApplyGravitation;
      }, o2[r2(459)].setAllNodesToApplyGravitation = function(e4) {
        var t4 = r2;
        if (this.allNodesToApplyGravitation != null) throw `assert failed`;
        this[t4(506)] = e4;
      }, o2[r2(459)][r2(565)] = function() {
        return this.rootGraph;
      }, o2.prototype.setRootGraph = function(e4) {
        if (e4[r2(540)]() != this) throw `Root not in this graph mgr!`;
        this.rootGraph = e4, e4.parent ?? (e4.parent = this.layout.newNode(`Root node`));
      }, o2.prototype.getLayout = function() {
        return this.layout;
      }, o2.prototype[r2(493)] = function(e4, t4) {
        var n3 = r2;
        if (!(e4 != null && t4 != null)) throw `assert failed`;
        if (e4 == t4) return true;
        var i3 = e4[n3(742)](), a3;
        do {
          if (a3 = i3.getParent(), a3 == null) break;
          if (a3 == t4) return true;
          if (i3 = a3.getOwner(), i3 == null) break;
        } while (true);
        i3 = t4[n3(742)]();
        do {
          if (a3 = i3.getParent(), a3 == null) break;
          if (a3 == e4) return true;
          if (i3 = a3.getOwner(), i3 == null) break;
        } while (true);
        return false;
      }, o2.prototype.calcLowestCommonAncestors = function() {
        for (var e4 = r2, t4, n3, i3, a3, o3, s2 = this.getAllEdges(), c2 = s2.length, l2 = 0; l2 < c2; l2++) {
          if (t4 = s2[l2], n3 = t4[e4(797)], i3 = t4.target, t4.lca = null, t4.sourceInLca = n3, t4.targetInLca = i3, n3 == i3) {
            t4.lca = n3.getOwner();
            continue;
          }
          for (a3 = n3.getOwner(); t4.lca == null; ) {
            for (t4.targetInLca = i3, o3 = i3[e4(742)](); t4.lca == null; ) {
              if (o3 == a3) {
                t4[e4(761)] = o3;
                break;
              }
              if (o3 == this.rootGraph) break;
              if (t4.lca != null) throw `assert failed`;
              t4.targetInLca = o3[e4(585)](), o3 = t4[e4(498)].getOwner();
            }
            if (a3 == this.rootGraph) break;
            t4[e4(761)] ?? (t4[e4(844)] = a3.getParent(), a3 = t4.sourceInLca.getOwner());
          }
          if (t4.lca == null) throw `assert failed`;
        }
      }, o2.prototype.calcLowestCommonAncestor = function(e4, t4) {
        var n3 = r2;
        if (e4 == t4) return e4.getOwner();
        var i3 = e4.getOwner();
        do {
          if (i3 == null) break;
          var a3 = t4.getOwner();
          do {
            if (a3 == null) break;
            if (a3 == i3) return a3;
            a3 = a3.getParent().getOwner();
          } while (true);
          i3 = i3[n3(585)]().getOwner();
        } while (true);
        return i3;
      }, o2.prototype.calcInclusionTreeDepths = function(e4, t4) {
        e4 == null && t4 == null && (e4 = this.rootGraph, t4 = 1);
        for (var n3, r3 = e4.getNodes(), i3 = r3.length, a3 = 0; a3 < i3; a3++) n3 = r3[a3], n3.inclusionTreeDepth = t4, n3.child != null && this.calcInclusionTreeDepths(n3.child, t4 + 1);
      }, o2.prototype.includesInvalidEdge = function() {
        for (var e4, t4 = [], n3 = this.edges.length, r3 = 0; r3 < n3; r3++) e4 = this.edges[r3], this.isOneAncestorOfOther(e4.source, e4.target) && t4.push(e4);
        for (var r3 = 0; r3 < t4.length; r3++) this.remove(t4[r3]);
        return false;
      }, e3[r2(513)] = o2;
    }, function(e3, t3, n2) {
      var r2 = M, i2 = n2(12);
      function a2() {
      }
      a2.calcSeparationAmount = function(e4, t4, n3, r3) {
        var i3 = M;
        if (!e4.intersects(t4)) throw `assert failed`;
        var a3 = [, ,];
        this.decideDirectionsForOverlappingNodes(e4, t4, a3), n3[0] = Math.min(e4[i3(630)](), t4.getRight()) - Math.max(e4.x, t4.x), n3[1] = Math.min(e4.getBottom(), t4.getBottom()) - Math.max(e4.y, t4.y), e4.getX() <= t4.getX() && e4.getRight() >= t4.getRight() ? n3[0] += Math.min(t4.getX() - e4.getX(), e4.getRight() - t4.getRight()) : t4.getX() <= e4[i3(589)]() && t4.getRight() >= e4.getRight() && (n3[0] += Math.min(e4.getX() - t4.getX(), t4.getRight() - e4[i3(630)]())), e4.getY() <= t4.getY() && e4[i3(798)]() >= t4.getBottom() ? n3[1] += Math.min(t4.getY() - e4.getY(), e4.getBottom() - t4[i3(798)]()) : t4.getY() <= e4.getY() && t4.getBottom() >= e4.getBottom() && (n3[1] += Math.min(e4[i3(734)]() - t4.getY(), t4.getBottom() - e4.getBottom()));
        var o2 = Math.abs((t4.getCenterY() - e4.getCenterY()) / (t4.getCenterX() - e4.getCenterX()));
        t4.getCenterY() === e4[i3(601)]() && t4.getCenterX() === e4.getCenterX() && (o2 = 1);
        var s2 = o2 * n3[0], c2 = n3[1] / o2;
        n3[0] < c2 ? c2 = n3[0] : s2 = n3[1], n3[0] = -1 * a3[0] * (c2 / 2 + r3), n3[1] = -1 * a3[1] * (s2 / 2 + r3);
      }, a2.decideDirectionsForOverlappingNodes = function(e4, t4, n3) {
        var r3 = M;
        e4.getCenterX() < t4.getCenterX() ? n3[0] = -1 : n3[0] = 1, e4[r3(601)]() < t4.getCenterY() ? n3[1] = -1 : n3[1] = 1;
      }, a2.getIntersection2 = function(e4, t4, n3) {
        var r3 = M, i3 = e4.getCenterX(), a3 = e4.getCenterY(), o2 = t4.getCenterX(), s2 = t4[r3(601)]();
        if (e4.intersects(t4)) return n3[0] = i3, n3[1] = a3, n3[2] = o2, n3[3] = s2, true;
        var c2 = e4.getX(), l2 = e4.getY(), u2 = e4.getRight(), d2 = e4[r3(589)](), f2 = e4.getBottom(), p2 = e4.getRight(), m2 = e4.getWidthHalf(), h2 = e4[r3(614)](), g2 = t4.getX(), _2 = t4.getY(), v2 = t4.getRight(), y2 = t4.getX(), b2 = t4.getBottom(), x2 = t4.getRight(), S2 = t4.getWidthHalf(), C2 = t4[r3(614)](), w2 = false, T2 = false;
        if (i3 === o2) {
          if (a3 > s2) return n3[0] = i3, n3[1] = l2, n3[2] = o2, n3[3] = b2, false;
          if (a3 < s2) return n3[0] = i3, n3[1] = f2, n3[2] = o2, n3[3] = _2, false;
        } else if (a3 === s2) {
          if (i3 > o2) return n3[0] = c2, n3[1] = a3, n3[2] = v2, n3[3] = s2, false;
          if (i3 < o2) return n3[0] = u2, n3[1] = a3, n3[2] = g2, n3[3] = s2, false;
        } else {
          var E2 = e4.height / e4[r3(719)], D2 = t4.height / t4.width, O2 = (s2 - a3) / (o2 - i3), k2 = void 0, A2 = void 0, j2 = void 0, N2 = void 0, P2 = void 0, F2 = void 0;
          if (-E2 === O2 ? i3 > o2 ? (n3[0] = d2, n3[1] = f2, w2 = true) : (n3[0] = u2, n3[1] = l2, w2 = true) : E2 === O2 && (i3 > o2 ? (n3[0] = c2, n3[1] = l2, w2 = true) : (n3[0] = p2, n3[1] = f2, w2 = true)), -D2 === O2 ? o2 > i3 ? (n3[2] = y2, n3[3] = b2, T2 = true) : (n3[2] = v2, n3[3] = _2, T2 = true) : D2 === O2 && (o2 > i3 ? (n3[2] = g2, n3[3] = _2, T2 = true) : (n3[2] = x2, n3[3] = b2, T2 = true)), w2 && T2) return false;
          if (i3 > o2 ? a3 > s2 ? (k2 = this.getCardinalDirection(E2, O2, 4), A2 = this.getCardinalDirection(D2, O2, 2)) : (k2 = this.getCardinalDirection(-E2, O2, 3), A2 = this.getCardinalDirection(-D2, O2, 1)) : a3 > s2 ? (k2 = this.getCardinalDirection(-E2, O2, 1), A2 = this.getCardinalDirection(-D2, O2, 3)) : (k2 = this.getCardinalDirection(E2, O2, 2), A2 = this.getCardinalDirection(D2, O2, 4)), !w2) switch (k2) {
            case 1:
              N2 = l2, j2 = i3 + -h2 / O2, n3[0] = j2, n3[1] = N2;
              break;
            case 2:
              j2 = p2, N2 = a3 + m2 * O2, n3[0] = j2, n3[1] = N2;
              break;
            case 3:
              N2 = f2, j2 = i3 + h2 / O2, n3[0] = j2, n3[1] = N2;
              break;
            case 4:
              j2 = d2, N2 = a3 + -m2 * O2, n3[0] = j2, n3[1] = N2;
              break;
          }
          if (!T2) switch (A2) {
            case 1:
              F2 = _2, P2 = o2 + -C2 / O2, n3[2] = P2, n3[3] = F2;
              break;
            case 2:
              P2 = x2, F2 = s2 + S2 * O2, n3[2] = P2, n3[3] = F2;
              break;
            case 3:
              F2 = b2, P2 = o2 + C2 / O2, n3[2] = P2, n3[3] = F2;
              break;
            case 4:
              P2 = y2, F2 = s2 + -S2 * O2, n3[2] = P2, n3[3] = F2;
              break;
          }
        }
        return false;
      }, a2.getCardinalDirection = function(e4, t4, n3) {
        return e4 > t4 ? n3 : 1 + n3 % 4;
      }, a2[r2(482)] = function(e4, t4, n3, r3) {
        if (r3 == null) return this.getIntersection2(e4, t4, n3);
        var a3 = e4.x, o2 = e4.y, s2 = t4.x, c2 = t4.y, l2 = n3.x, u2 = n3.y, d2 = r3.x, f2 = r3.y, p2 = void 0, m2 = void 0, h2 = void 0, g2 = void 0, _2 = void 0, v2 = void 0, y2 = void 0, b2 = void 0, x2 = void 0;
        return h2 = c2 - o2, _2 = a3 - s2, y2 = s2 * o2 - a3 * c2, g2 = f2 - u2, v2 = l2 - d2, b2 = d2 * u2 - l2 * f2, x2 = h2 * v2 - g2 * _2, x2 === 0 ? null : (p2 = (_2 * b2 - v2 * y2) / x2, m2 = (g2 * y2 - h2 * b2) / x2, new i2(p2, m2));
      }, a2.angleOfVector = function(e4, t4, n3, i3) {
        var a3 = r2, o2 = void 0;
        return e4 === n3 ? o2 = i3 < t4 ? this[a3(569)] : this.HALF_PI : (o2 = Math.atan((i3 - t4) / (n3 - e4)), n3 < e4 ? o2 += Math.PI : i3 < t4 && (o2 += this.TWO_PI)), o2;
      }, a2[r2(550)] = function(e4, t4, n3, r3) {
        var i3 = e4.x, a3 = e4.y, o2 = t4.x, s2 = t4.y, c2 = n3.x, l2 = n3.y, u2 = r3.x, d2 = r3.y, f2 = (o2 - i3) * (d2 - l2) - (u2 - c2) * (s2 - a3);
        if (f2 === 0) return false;
        var p2 = ((d2 - l2) * (u2 - i3) + (c2 - u2) * (d2 - a3)) / f2, m2 = ((a3 - s2) * (u2 - i3) + (o2 - i3) * (d2 - a3)) / f2;
        return 0 < p2 && p2 < 1 && 0 < m2 && m2 < 1;
      }, a2.findCircleLineIntersections = function(e4, t4, n3, r3, i3, a3, o2) {
        var s2 = (n3 - e4) * (n3 - e4) + (r3 - t4) * (r3 - t4), c2 = 2 * ((e4 - i3) * (n3 - e4) + (t4 - a3) * (r3 - t4)), l2 = (e4 - i3) * (e4 - i3) + (t4 - a3) * (t4 - a3) - o2 * o2;
        if (c2 * c2 - 4 * s2 * l2 >= 0) {
          var u2 = (-c2 + Math.sqrt(c2 * c2 - 4 * s2 * l2)) / (2 * s2), d2 = (-c2 - Math.sqrt(c2 * c2 - 4 * s2 * l2)) / (2 * s2);
          return u2 >= 0 && u2 <= 1 ? [u2] : d2 >= 0 && d2 <= 1 ? [d2] : null;
        } else return null;
      }, a2.HALF_PI = 0.5 * Math.PI, a2.ONE_AND_HALF_PI = 1.5 * Math.PI, a2.TWO_PI = 2 * Math.PI, a2[r2(557)] = 3 * Math.PI, e3.exports = a2;
    }, function(e3, t3, n2) {
      var r2 = M;
      function i2() {
      }
      i2[r2(437)] = function(e4) {
        return e4 > 0 ? 1 : e4 < 0 ? -1 : 0;
      }, i2.floor = function(e4) {
        var t4 = r2;
        return e4 < 0 ? Math[t4(712)](e4) : Math[t4(484)](e4);
      }, i2.ceil = function(e4) {
        return e4 < 0 ? Math.floor(e4) : Math.ceil(e4);
      }, e3.exports = i2;
    }, function(e3, t3, n2) {
      function r2() {
      }
      r2.MAX_VALUE = 2147483647, r2.MIN_VALUE = -2147483648, e3.exports = r2;
    }, function(e3, t3, n2) {
      var r2 = /* @__PURE__ */ (function() {
        function e4(e5, t4) {
          for (var n3 = 0; n3 < t4.length; n3++) {
            var r3 = t4[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e5, r3.key, r3);
          }
        }
        return function(t4, n3, r3) {
          return n3 && e4(t4.prototype, n3), r3 && e4(t4, r3), t4;
        };
      })();
      function i2(e4, t4) {
        if (!(e4 instanceof t4)) throw TypeError(`Cannot call a class as a function`);
      }
      var a2 = function(e4) {
        return { value: e4, next: null, prev: null };
      }, o2 = function(e4, t4, n3, r3) {
        var i3 = M;
        return e4 === null ? r3[i3(611)] = t4 : e4[i3(820)] = t4, n3 === null ? r3.tail = t4 : n3.prev = t4, t4.prev = e4, t4.next = n3, r3[i3(568)]++, t4;
      }, s2 = function(e4, t4) {
        var n3 = M, r3 = e4.prev, i3 = e4.next;
        return r3 === null ? t4[n3(611)] = i3 : r3.next = i3, i3 === null ? t4[n3(727)] = r3 : i3.prev = r3, e4.prev = e4.next = null, t4.length--, e4;
      };
      e3.exports = (function() {
        var e4 = M;
        function t4(e5) {
          var n3 = M, r3 = this;
          i2(this, t4), this[n3(568)] = 0, this.head = null, this.tail = null, e5 == null ? void 0 : e5.forEach(function(e6) {
            return r3.push(e6);
          });
        }
        return r2(t4, [{ key: `size`, value: function() {
          return this.length;
        } }, { key: e4(800), value: function(e5, t5) {
          return o2(t5.prev, a2(e5), t5, this);
        } }, { key: `insertAfter`, value: function(t5, n3) {
          var r3 = e4;
          return o2(n3, a2(t5), n3[r3(820)], this);
        } }, { key: `insertNodeBefore`, value: function(e5, t5) {
          return o2(t5.prev, e5, t5, this);
        } }, { key: `insertNodeAfter`, value: function(e5, t5) {
          return o2(t5, e5, t5.next, this);
        } }, { key: `push`, value: function(e5) {
          return o2(this.tail, a2(e5), null, this);
        } }, { key: `unshift`, value: function(e5) {
          return o2(null, a2(e5), this.head, this);
        } }, { key: e4(623), value: function(e5) {
          return s2(e5, this);
        } }, { key: `pop`, value: function() {
          var t5 = e4;
          return s2(this[t5(727)], this).value;
        } }, { key: `popNode`, value: function() {
          return s2(this.tail, this);
        } }, { key: `shift`, value: function() {
          return s2(this.head, this).value;
        } }, { key: e4(649), value: function() {
          var t5 = e4;
          return s2(this[t5(611)], this);
        } }, { key: `get_object_at`, value: function(e5) {
          if (e5 <= this.length()) {
            for (var t5 = 1, n3 = this.head; t5 < e5; ) n3 = n3.next, t5++;
            return n3.value;
          }
        } }, { key: e4(681), value: function(t5, n3) {
          var r3 = e4;
          if (t5 <= this[r3(568)]()) {
            for (var i3 = 1, a3 = this.head; i3 < t5; ) a3 = a3[r3(820)], i3++;
            a3.value = n3;
          }
        } }]), t4;
      })();
    }, function(e3, t3, n2) {
      var r2 = M;
      function i2(e4, t4, n3) {
        this.x = null, this.y = null, e4 == null && t4 == null && n3 == null ? (this.x = 0, this.y = 0) : typeof e4 == `number` && typeof t4 == `number` && n3 == null ? (this.x = e4, this.y = t4) : e4.constructor.name == `Point` && t4 == null && n3 == null && (n3 = e4, this.x = n3.x, this.y = n3.y);
      }
      i2.prototype.getX = function() {
        return this.x;
      }, i2.prototype.getY = function() {
        return this.y;
      }, i2[r2(459)].getLocation = function() {
        return new i2(this.x, this.y);
      }, i2.prototype.setLocation = function(e4, t4, n3) {
        e4.constructor.name == `Point` && t4 == null && n3 == null ? (n3 = e4, this.setLocation(n3.x, n3.y)) : typeof e4 == `number` && typeof t4 == `number` && n3 == null && (parseInt(e4) == e4 && parseInt(t4) == t4 ? this.move(e4, t4) : (this.x = Math.floor(e4 + 0.5), this.y = Math.floor(t4 + 0.5)));
      }, i2.prototype.move = function(e4, t4) {
        this.x = e4, this.y = t4;
      }, i2.prototype.translate = function(e4, t4) {
        this.x += e4, this.y += t4;
      }, i2.prototype.equals = function(e4) {
        if (e4[r2(491)].name == `Point`) {
          var t4 = e4;
          return this.x == t4.x && this.y == t4.y;
        }
        return this == e4;
      }, i2.prototype.toString = function() {
        return new i2().constructor.name + `[x=` + this.x + `,y=` + this.y + `]`;
      }, e3.exports = i2;
    }, function(e3, t3, n2) {
      var r2 = M;
      function i2(e4, t4, n3, r3) {
        var i3 = M;
        this.x = 0, this.y = 0, this.width = 0, this.height = 0, e4 != null && t4 != null && n3 != null && r3 != null && (this.x = e4, this.y = t4, this[i3(719)] = n3, this.height = r3);
      }
      i2.prototype.getX = function() {
        return this.x;
      }, i2[r2(459)].setX = function(e4) {
        this.x = e4;
      }, i2[r2(459)][r2(734)] = function() {
        return this.y;
      }, i2[r2(459)][r2(474)] = function(e4) {
        this.y = e4;
      }, i2.prototype.getWidth = function() {
        return this.width;
      }, i2.prototype[r2(714)] = function(e4) {
        var t4 = r2;
        this[t4(719)] = e4;
      }, i2.prototype.getHeight = function() {
        var e4 = r2;
        return this[e4(636)];
      }, i2[r2(459)].setHeight = function(e4) {
        this.height = e4;
      }, i2.prototype.getRight = function() {
        return this.x + this.width;
      }, i2.prototype.getBottom = function() {
        return this.y + this.height;
      }, i2.prototype.intersects = function(e4) {
        var t4 = r2;
        return !(this.getRight() < e4.x || this.getBottom() < e4.y || e4.getRight() < this.x || e4[t4(798)]() < this.y);
      }, i2.prototype[r2(462)] = function() {
        var e4 = r2;
        return this.x + this[e4(719)] / 2;
      }, i2.prototype.getMinX = function() {
        return this.getX();
      }, i2.prototype.getMaxX = function() {
        return this.getX() + this.width;
      }, i2[r2(459)][r2(601)] = function() {
        return this.y + this.height / 2;
      }, i2.prototype.getMinY = function() {
        return this.getY();
      }, i2[r2(459)].getMaxY = function() {
        var e4 = r2;
        return this[e4(734)]() + this.height;
      }, i2.prototype[r2(809)] = function() {
        return this.width / 2;
      }, i2[r2(459)][r2(614)] = function() {
        return this.height / 2;
      }, e3.exports = i2;
    }, function(e3, t3, n2) {
      var r2 = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e4) {
        return typeof e4;
      } : function(e4) {
        var t4 = M;
        return e4 && typeof Symbol == `function` && e4.constructor === Symbol && e4 !== Symbol[t4(459)] ? `symbol` : typeof e4;
      };
      function i2() {
      }
      i2.lastID = 0, i2.createID = function(e4) {
        var t4 = M;
        return i2.isPrimitive(e4) ? e4 : e4.uniqueID == null ? (e4.uniqueID = i2.getString(), i2.lastID++, e4[t4(544)]) : e4.uniqueID;
      }, i2.getString = function(e4) {
        return e4 ?? (e4 = i2.lastID), `Object#` + e4;
      }, i2.isPrimitive = function(e4) {
        var t4 = e4 === void 0 ? M(791) : r2(e4);
        return e4 == null || t4 != `object` && t4 != `function`;
      }, e3.exports = i2;
    }, function(e3, t3, n2) {
      var r2 = M;
      function i2(e4) {
        var t4 = M;
        if (Array.isArray(e4)) {
          for (var n3 = 0, r3 = Array(e4.length); n3 < e4[t4(568)]; n3++) r3[n3] = e4[n3];
          return r3;
        } else return Array.from(e4);
      }
      var a2 = n2(0), o2 = n2(7), s2 = n2(3), c2 = n2(1), l2 = n2(6), u2 = n2(5), d2 = n2(17), f2 = n2(29);
      function p2(e4) {
        var t4 = M;
        f2.call(this), this.layoutQuality = a2.QUALITY, this.createBendsAsNeeded = a2.DEFAULT_CREATE_BENDS_AS_NEEDED, this[t4(828)] = a2.DEFAULT_INCREMENTAL, this[t4(738)] = a2[t4(815)], this.animationDuringLayout = a2[t4(812)], this.animationPeriod = a2.DEFAULT_ANIMATION_PERIOD, this[t4(667)] = a2[t4(699)], this.edgeToDummyNodes = /* @__PURE__ */ new Map(), this.graphManager = new o2(this), this.isLayoutFinished = false, this.isSubLayout = false, this.isRemoteUse = false, e4 != null && (this[t4(499)] = e4);
      }
      p2.RANDOM_SEED = 1, p2.prototype = Object.create(f2.prototype), p2.prototype[r2(540)] = function() {
        var e4 = r2;
        return this[e4(600)];
      }, p2.prototype.getAllNodes = function() {
        var e4 = r2;
        return this.graphManager[e4(480)]();
      }, p2.prototype[r2(903)] = function() {
        return this.graphManager.getAllEdges();
      }, p2.prototype.getAllNodesToApplyGravitation = function() {
        var e4 = r2;
        return this.graphManager[e4(783)]();
      }, p2.prototype.newGraphManager = function() {
        var e4 = new o2(this);
        return this.graphManager = e4, e4;
      }, p2.prototype.newGraph = function(e4) {
        return new l2(null, this.graphManager, e4);
      }, p2.prototype[r2(525)] = function(e4) {
        return new s2(this.graphManager, e4);
      }, p2.prototype.newEdge = function(e4) {
        return new c2(null, null, e4);
      }, p2.prototype.checkLayoutSuccess = function() {
        return this.graphManager.getRoot() == null || this.graphManager.getRoot().getNodes().length == 0 || this.graphManager.includesInvalidEdge();
      }, p2.prototype[r2(877)] = function() {
        var e4 = r2;
        this.isLayoutFinished = false, this.tilingPreLayout && this.tilingPreLayout(), this.initParameters();
        var t4 = this.checkLayoutSuccess() ? false : this.layout();
        return a2.ANIMATE === `during` ? false : (t4 && (this.isSubLayout || this[e4(607)]()), this.tilingPostLayout && this.tilingPostLayout(), this.isLayoutFinished = true, t4);
      }, p2.prototype.doPostLayout = function() {
        var e4 = r2;
        this[e4(828)] || this[e4(725)](), this.update();
      }, p2[r2(459)].update2 = function() {
        var e4 = r2;
        if (this.createBendsAsNeeded && (this.createBendpointsFromDummyNodes(), this.graphManager.resetAllEdges()), !this[e4(499)]) {
          for (var t4 = this.graphManager.getAllEdges(), n3 = 0; n3 < t4.length; n3++) t4[n3];
          for (var i3 = this.graphManager.getRoot().getNodes(), n3 = 0; n3 < i3.length; n3++) i3[n3];
          this.update(this.graphManager.getRoot());
        }
      }, p2[r2(459)].update = function(e4) {
        var t4 = r2;
        if (e4 == null) this.update2();
        else if (e4 instanceof s2) {
          var n3 = e4;
          if (n3[t4(497)]() != null) for (var i3 = n3.getChild().getNodes(), a3 = 0; a3 < i3[t4(568)]; a3++) update(i3[a3]);
          n3.vGraphObject != null && n3.vGraphObject[t4(740)](n3);
        } else if (e4 instanceof c2) {
          var o3 = e4;
          o3.vGraphObject != null && o3[t4(736)][t4(740)](o3);
        } else if (e4 instanceof l2) {
          var u3 = e4;
          u3.vGraphObject != null && u3.vGraphObject[t4(740)](u3);
        }
      }, p2[r2(459)][r2(859)] = function() {
        var e4 = r2;
        this.isSubLayout || (this.layoutQuality = a2[e4(819)], this.animationDuringLayout = a2.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = a2.DEFAULT_ANIMATION_PERIOD, this.animationOnLayout = a2.DEFAULT_ANIMATION_ON_LAYOUT, this[e4(828)] = a2.DEFAULT_INCREMENTAL, this.createBendsAsNeeded = a2.DEFAULT_CREATE_BENDS_AS_NEEDED, this[e4(667)] = a2[e4(699)]), this.animationDuringLayout && (this.animationOnLayout = false);
      }, p2.prototype.transform = function(e4) {
        var t4 = r2;
        if (e4 == null) this.transform(new u2(0, 0));
        else {
          var n3 = new d2(), i3 = this.graphManager.getRoot().updateLeftTop();
          if (i3 != null) {
            n3.setWorldOrgX(e4.x), n3.setWorldOrgY(e4.y), n3[t4(756)](i3.x), n3.setDeviceOrgY(i3.y);
            for (var a3 = this.getAllNodes(), o3, s3 = 0; s3 < a3.length; s3++) o3 = a3[s3], o3.transform(n3);
          }
        }
      }, p2.prototype.positionNodesRandomly = function(e4) {
        var t4 = r2;
        if (e4 == null) this.positionNodesRandomly(this[t4(540)]().getRoot()), this.getGraphManager().getRoot().updateBounds(true);
        else for (var n3, i3, a3 = e4.getNodes(), o3 = 0; o3 < a3[t4(568)]; o3++) n3 = a3[o3], i3 = n3.getChild(), i3 == null || i3.getNodes().length == 0 ? n3.scatter() : (this[t4(664)](i3), n3[t4(633)]());
      }, p2.prototype.getFlatForest = function() {
        for (var e4 = r2, t4 = [], n3 = true, a3 = this.graphManager[e4(565)]()[e4(572)](), o3 = true, s3 = 0; s3 < a3.length; s3++) a3[s3].getChild() != null && (o3 = false);
        if (!o3) return t4;
        var c3 = /* @__PURE__ */ new Set(), l3 = [], u3 = /* @__PURE__ */ new Map(), d3 = [];
        for (d3 = d3.concat(a3); d3.length > 0 && n3; ) {
          for (l3.push(d3[0]); l3[e4(568)] > 0 && n3; ) {
            var f3 = l3[0];
            l3[e4(845)](0, 1), c3[e4(887)](f3);
            for (var p3 = f3.getEdges(), s3 = 0; s3 < p3[e4(568)]; s3++) {
              var m2 = p3[s3].getOtherEnd(f3);
              if (u3.get(f3) != m2) if (!c3.has(m2)) l3.push(m2), u3.set(m2, f3);
              else {
                n3 = false;
                break;
              }
            }
          }
          if (!n3) t4 = [];
          else {
            var h2 = [][e4(575)](i2(c3));
            t4[e4(752)](h2);
            for (var s3 = 0; s3 < h2.length; s3++) {
              var g2 = h2[s3], _2 = d3.indexOf(g2);
              _2 > -1 && d3.splice(_2, 1);
            }
            c3 = /* @__PURE__ */ new Set(), u3 = /* @__PURE__ */ new Map();
          }
        }
        return t4;
      }, p2[r2(459)].createDummyNodesForBendpoints = function(e4) {
        for (var t4 = r2, n3 = [], i3 = e4.source, a3 = this.graphManager.calcLowestCommonAncestor(e4.source, e4[t4(582)]), o3 = 0; o3 < e4.bendpoints[t4(568)]; o3++) {
          var s3 = this[t4(525)](null);
          s3.setRect(new Point(0, 0), new Dimension(1, 1)), a3[t4(887)](s3);
          var c3 = this.newEdge(null);
          this.graphManager.add(c3, i3, s3), n3[t4(887)](s3), i3 = s3;
        }
        var c3 = this.newEdge(null);
        return this.graphManager.add(c3, i3, e4[t4(582)]), this.edgeToDummyNodes[t4(447)](e4, n3), e4[t4(628)]() ? this.graphManager.remove(e4) : a3.remove(e4), n3;
      }, p2.prototype[r2(766)] = function() {
        var e4 = r2, t4 = [];
        t4 = t4.concat(this.graphManager[e4(903)]()), t4 = [][e4(575)](i2(this.edgeToDummyNodes[e4(588)]()), t4);
        for (var n3 = 0; n3 < t4.length; n3++) {
          var a3 = t4[n3];
          if (a3.bendpoints.length > 0) {
            for (var o3 = this[e4(547)][e4(652)](a3), s3 = 0; s3 < o3[e4(568)]; s3++) {
              var c3 = o3[s3], l3 = new u2(c3.getCenterX(), c3.getCenterY()), d3 = a3.bendpoints[e4(652)](s3);
              d3.x = l3.x, d3.y = l3.y, c3.getOwner().remove(c3);
            }
            this.graphManager.add(a3, a3[e4(797)], a3.target);
          }
        }
      }, p2.transform = function(e4, t4, n3, r3) {
        if (n3 != null && r3 != null) {
          var i3 = t4;
          if (e4 <= 50) {
            var a3 = t4 / n3;
            i3 -= (t4 - a3) / 50 * (50 - e4);
          } else {
            var o3 = t4 * r3;
            i3 += (o3 - t4) / 50 * (e4 - 50);
          }
          return i3;
        } else {
          var s3, c3;
          return e4 <= 50 ? (s3 = 9 * t4 / 500, c3 = t4 / 10) : (s3 = 9 * t4 / 50, c3 = -8 * t4), s3 * e4 + c3;
        }
      }, p2.findCenterOfTree = function(e4) {
        var t4 = r2, n3 = [];
        n3 = n3.concat(e4);
        var i3 = [], a3 = /* @__PURE__ */ new Map(), o3 = false, s3 = null;
        (n3[t4(568)] == 1 || n3.length == 2) && (o3 = true, s3 = n3[0]);
        for (var c3 = 0; c3 < n3.length; c3++) {
          var l3 = n3[c3], u3 = l3.getNeighborsList().size;
          a3.set(l3, l3.getNeighborsList().size), u3 == 1 && i3.push(l3);
        }
        var d3 = [];
        for (d3 = d3.concat(i3); !o3; ) {
          var f3 = [];
          f3 = f3.concat(d3), d3 = [];
          for (var c3 = 0; c3 < n3.length; c3++) {
            var l3 = n3[c3], p3 = n3.indexOf(l3);
            p3 >= 0 && n3.splice(p3, 1), l3.getNeighborsList().forEach(function(e5) {
              if (i3.indexOf(e5) < 0) {
                var t5 = a3.get(e5) - 1;
                t5 == 1 && d3.push(e5), a3.set(e5, t5);
              }
            });
          }
          i3 = i3[t4(575)](d3), (n3.length == 1 || n3.length == 2) && (o3 = true, s3 = n3[0]);
        }
        return s3;
      }, p2.prototype[r2(529)] = function(e4) {
        this.graphManager = e4;
      }, e3[r2(513)] = p2;
    }, function(e3, t3, n2) {
      function r2() {
      }
      r2.seed = 1, r2.x = 0, r2.nextDouble = function() {
        return r2.x = Math.sin(r2.seed++) * 1e4, r2.x - Math.floor(r2.x);
      }, e3.exports = r2;
    }, function(e3, t3, n2) {
      var r2 = M, i2 = n2(5);
      function a2(e4, t4) {
        var n3 = M;
        this.lworldOrgX = 0, this.lworldOrgY = 0, this.ldeviceOrgX = 0, this[n3(720)] = 0, this[n3(893)] = 1, this.lworldExtY = 1, this.ldeviceExtX = 1, this.ldeviceExtY = 1;
      }
      a2.prototype[r2(654)] = function() {
        var e4 = r2;
        return this[e4(672)];
      }, a2.prototype.setWorldOrgX = function(e4) {
        this.lworldOrgX = e4;
      }, a2.prototype[r2(861)] = function() {
        return this.lworldOrgY;
      }, a2.prototype[r2(524)] = function(e4) {
        var t4 = r2;
        this[t4(564)] = e4;
      }, a2.prototype.getWorldExtX = function() {
        return this.lworldExtX;
      }, a2.prototype.setWorldExtX = function(e4) {
        this.lworldExtX = e4;
      }, a2[r2(459)].getWorldExtY = function() {
        return this.lworldExtY;
      }, a2.prototype.setWorldExtY = function(e4) {
        this.lworldExtY = e4;
      }, a2.prototype.getDeviceOrgX = function() {
        return this.ldeviceOrgX;
      }, a2.prototype.setDeviceOrgX = function(e4) {
        this.ldeviceOrgX = e4;
      }, a2.prototype.getDeviceOrgY = function() {
        return this.ldeviceOrgY;
      }, a2.prototype[r2(517)] = function(e4) {
        this.ldeviceOrgY = e4;
      }, a2.prototype[r2(562)] = function() {
        return this.ldeviceExtX;
      }, a2[r2(459)].setDeviceExtX = function(e4) {
        this.ldeviceExtX = e4;
      }, a2[r2(459)].getDeviceExtY = function() {
        return this.ldeviceExtY;
      }, a2.prototype.setDeviceExtY = function(e4) {
        this.ldeviceExtY = e4;
      }, a2.prototype.transformX = function(e4) {
        var t4 = r2, n3 = 0, i3 = this.lworldExtX;
        return i3 != 0 && (n3 = this.ldeviceOrgX + (e4 - this.lworldOrgX) * this[t4(794)] / i3), n3;
      }, a2.prototype.transformY = function(e4) {
        var t4 = r2, n3 = 0, i3 = this[t4(527)];
        return i3 != 0 && (n3 = this.ldeviceOrgY + (e4 - this.lworldOrgY) * this[t4(829)] / i3), n3;
      }, a2.prototype.inverseTransformX = function(e4) {
        var t4 = r2, n3 = 0, i3 = this.ldeviceExtX;
        return i3 != 0 && (n3 = this.lworldOrgX + (e4 - this.ldeviceOrgX) * this[t4(893)] / i3), n3;
      }, a2.prototype[r2(622)] = function(e4) {
        var t4 = r2, n3 = 0, i3 = this.ldeviceExtY;
        return i3 != 0 && (n3 = this[t4(564)] + (e4 - this.ldeviceOrgY) * this.lworldExtY / i3), n3;
      }, a2[r2(459)].inverseTransformPoint = function(e4) {
        return new i2(this.inverseTransformX(e4.x), this.inverseTransformY(e4.y));
      }, e3.exports = a2;
    }, function(e3, t3, n2) {
      var r2 = M;
      function i2(e4) {
        var t4 = M;
        if (Array.isArray(e4)) {
          for (var n3 = 0, r3 = Array(e4.length); n3 < e4.length; n3++) r3[n3] = e4[n3];
          return r3;
        } else return Array[t4(723)](e4);
      }
      var a2 = n2(15), o2 = n2(4), s2 = n2(0), c2 = n2(8), l2 = n2(9);
      function u2() {
        var e4 = M;
        a2.call(this), this.useSmartIdealEdgeLengthCalculation = o2.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.gravityConstant = o2.DEFAULT_GRAVITY_STRENGTH, this[e4(590)] = o2.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = o2.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = o2[e4(695)], this.displacementThresholdPerNode = 3 * o2.DEFAULT_EDGE_LENGTH / 100, this.coolingFactor = o2.DEFAULT_COOLING_FACTOR_INCREMENTAL, this[e4(853)] = o2.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.totalDisplacement = 0, this.oldTotalDisplacement = 0, this.maxIterations = o2.MAX_ITERATIONS;
      }
      for (var d2 in u2[r2(459)] = Object[r2(445)](a2.prototype), a2) u2[d2] = a2[d2];
      u2.prototype.initParameters = function() {
        var e4 = r2;
        a2.prototype[e4(859)].call(this, arguments), this.totalIterations = 0, this.notAnimatedIterations = 0, this.useFRGridVariant = o2.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION, this.grid = [];
      }, u2.prototype.calcIdealEdgeLengths = function() {
        for (var e4 = r2, t4, n3, i3, a3, c3, l3, u3, d3 = this.getGraphManager().getAllEdges(), f2 = 0; f2 < d3[e4(568)]; f2++) t4 = d3[f2], n3 = t4.idealLength, t4.isInterGraph && (a3 = t4.getSource(), c3 = t4.getTarget(), l3 = t4.getSourceInLca().getEstimatedSize(), u3 = t4.getTargetInLca().getEstimatedSize(), this.useSmartIdealEdgeLengthCalculation && (t4.idealLength += l3 + u3 - 2 * s2.SIMPLE_NODE_SIZE), i3 = t4.getLca().getInclusionTreeDepth(), t4.idealLength += n3 * o2.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (a3.getInclusionTreeDepth() + c3.getInclusionTreeDepth() - 2 * i3));
      }, u2.prototype[r2(718)] = function() {
        var e4 = r2, t4 = this.getAllNodes().length;
        this.incremental ? (t4 > o2.ADAPTATION_LOWER_NODE_LIMIT && (this.coolingFactor = Math[e4(891)](this.coolingFactor * o2.COOLING_ADAPTATION_FACTOR, this.coolingFactor - (t4 - o2[e4(595)]) / (o2.ADAPTATION_UPPER_NODE_LIMIT - o2.ADAPTATION_LOWER_NODE_LIMIT) * this[e4(639)] * (1 - o2.COOLING_ADAPTATION_FACTOR))), this.maxNodeDisplacement = o2.MAX_NODE_DISPLACEMENT_INCREMENTAL) : (t4 > o2.ADAPTATION_LOWER_NODE_LIMIT ? this.coolingFactor = Math.max(o2.COOLING_ADAPTATION_FACTOR, 1 - (t4 - o2.ADAPTATION_LOWER_NODE_LIMIT) / (o2[e4(503)] - o2.ADAPTATION_LOWER_NODE_LIMIT) * (1 - o2[e4(543)])) : this.coolingFactor = 1, this.initialCoolingFactor = this.coolingFactor, this.maxNodeDisplacement = o2.MAX_NODE_DISPLACEMENT), this.maxIterations = Math[e4(891)](this[e4(480)]().length * 5, this.maxIterations), this.displacementThresholdPerNode = 3 * o2[e4(870)] / 100, this[e4(881)] = this[e4(438)] * this.getAllNodes().length, this.repulsionRange = this.calcRepulsionRange();
      }, u2.prototype.calcSpringForces = function() {
        for (var e4 = this.getAllEdges(), t4, n3 = 0; n3 < e4.length; n3++) t4 = e4[n3], this.calcSpringForce(t4, t4.idealLength);
      }, u2.prototype.calcRepulsionForces = function() {
        var e4 = r2, t4 = arguments[e4(568)] > 0 && arguments[0] !== void 0 ? arguments[0] : true, n3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, i3, a3, s3, c3, l3 = this.getAllNodes(), u3;
        if (this.useFRGridVariant) for (this.totalIterations % o2.GRID_CALCULATION_CHECK_PERIOD == 1 && t4 && this.updateGrid(), u3 = /* @__PURE__ */ new Set(), i3 = 0; i3 < l3.length; i3++) s3 = l3[i3], this[e4(892)](s3, u3, t4, n3), u3.add(s3);
        else for (i3 = 0; i3 < l3[e4(568)]; i3++) for (s3 = l3[i3], a3 = i3 + 1; a3 < l3.length; a3++) c3 = l3[a3], s3[e4(742)]() == c3.getOwner() && this.calcRepulsionForce(s3, c3);
      }, u2[r2(459)].calcGravitationalForces = function() {
        for (var e4, t4 = this.getAllNodesToApplyGravitation(), n3 = 0; n3 < t4.length; n3++) e4 = t4[n3], this.calcGravitationalForce(e4);
      }, u2.prototype[r2(454)] = function() {
        for (var e4 = this.getAllNodes(), t4, n3 = 0; n3 < e4.length; n3++) t4 = e4[n3], t4.move();
      }, u2.prototype.calcSpringForce = function(e4, t4) {
        var n3 = r2, i3 = e4.getSource(), a3 = e4.getTarget(), o3, s3, c3, l3;
        if (this.uniformLeafNodeSizes && i3.getChild() == null && a3.getChild() == null) e4.updateLengthSimple();
        else if (e4.updateLength(), e4.isOverlapingSourceAndTarget) return;
        o3 = e4.getLength(), o3 != 0 && (s3 = e4.edgeElasticity * (o3 - t4), c3 = s3 * (e4[n3(599)] / o3), l3 = s3 * (e4.lengthY / o3), i3.springForceX += c3, i3.springForceY += l3, a3.springForceX -= c3, a3.springForceY -= l3);
      }, u2.prototype.calcRepulsionForce = function(e4, t4) {
        var n3 = r2, i3 = e4.getRect(), a3 = t4.getRect(), s3 = [, ,], u3 = [, , , ,], d3, f2, p2, m2, h2, g2, _2;
        if (i3.intersects(a3)) {
          c2.calcSeparationAmount(i3, a3, s3, o2.DEFAULT_EDGE_LENGTH / 2), g2 = 2 * s3[0], _2 = 2 * s3[1];
          var v2 = e4.noOfChildren * t4[n3(685)] / (e4[n3(685)] + t4.noOfChildren);
          e4.repulsionForceX -= v2 * g2, e4[n3(439)] -= v2 * _2, t4.repulsionForceX += v2 * g2, t4.repulsionForceY += v2 * _2;
        } else this[n3(667)] && e4.getChild() == null && t4.getChild() == null ? (d3 = a3.getCenterX() - i3.getCenterX(), f2 = a3.getCenterY() - i3[n3(601)]()) : (c2[n3(482)](i3, a3, u3), d3 = u3[2] - u3[0], f2 = u3[3] - u3[1]), Math.abs(d3) < o2.MIN_REPULSION_DIST && (d3 = l2[n3(437)](d3) * o2.MIN_REPULSION_DIST), Math.abs(f2) < o2.MIN_REPULSION_DIST && (f2 = l2.sign(f2) * o2.MIN_REPULSION_DIST), p2 = d3 * d3 + f2 * f2, m2 = Math.sqrt(p2), h2 = (e4.nodeRepulsion / 2 + t4.nodeRepulsion / 2) * e4.noOfChildren * t4.noOfChildren / p2, g2 = h2 * d3 / m2, _2 = h2 * f2 / m2, e4.repulsionForceX -= g2, e4.repulsionForceY -= _2, t4.repulsionForceX += g2, t4.repulsionForceY += _2;
      }, u2.prototype.calcGravitationalForce = function(e4) {
        var t4 = r2, n3 = e4.getOwner(), i3 = (n3[t4(630)]() + n3.getLeft()) / 2, a3 = (n3.getTop() + n3[t4(798)]()) / 2, o3 = e4.getCenterX() - i3, s3 = e4.getCenterY() - a3, c3 = Math[t4(549)](o3) + e4[t4(451)]() / 2, l3 = Math.abs(s3) + e4.getHeight() / 2, u3;
        e4.getOwner() == this.graphManager.getRoot() ? (u3 = n3[t4(495)]() * this.gravityRangeFactor, (c3 > u3 || l3 > u3) && (e4.gravitationForceX = -this.gravityConstant * o3, e4.gravitationForceY = -this.gravityConstant * s3)) : (u3 = n3.getEstimatedSize() * this.compoundGravityRangeFactor, (c3 > u3 || l3 > u3) && (e4.gravitationForceX = -this.gravityConstant * o3 * this.compoundGravityConstant, e4.gravitationForceY = -this[t4(504)] * s3 * this.compoundGravityConstant));
      }, u2.prototype.isConverged = function() {
        var e4 = r2, t4, n3 = false;
        return this.totalIterations > this.maxIterations / 3 && (n3 = Math[e4(549)](this.totalDisplacement - this[e4(886)]) < 2), t4 = this.totalDisplacement < this.totalDisplacementThreshold, this.oldTotalDisplacement = this.totalDisplacement, t4 || n3;
      }, u2.prototype.animate = function() {
        var e4 = r2;
        this.animationDuringLayout && !this.isSubLayout && (this.notAnimatedIterations == this[e4(822)] ? (this.update(), this[e4(627)] = 0) : this.notAnimatedIterations++);
      }, u2.prototype.calcNoOfChildrenForAllNodes = function() {
        for (var e4 = r2, t4, n3 = this.graphManager[e4(480)](), i3 = 0; i3 < n3[e4(568)]; i3++) t4 = n3[i3], t4.noOfChildren = t4.getNoOfChildren();
      }, u2.prototype.calcGrid = function(e4) {
        var t4 = r2, n3 = 0, i3 = 0;
        n3 = parseInt(Math.ceil((e4[t4(630)]() - e4.getLeft()) / this.repulsionRange)), i3 = parseInt(Math.ceil((e4[t4(798)]() - e4.getTop()) / this.repulsionRange));
        for (var a3 = Array(n3), o3 = 0; o3 < n3; o3++) a3[o3] = Array(i3);
        for (var o3 = 0; o3 < n3; o3++) for (var s3 = 0; s3 < i3; s3++) a3[o3][s3] = [];
        return a3;
      }, u2.prototype.addNodeToGrid = function(e4, t4, n3) {
        var i3 = r2, a3 = 0, o3 = 0, s3 = 0, c3 = 0;
        a3 = parseInt(Math.floor((e4.getRect().x - t4) / this.repulsionRange)), o3 = parseInt(Math.floor((e4.getRect().width + e4[i3(466)]().x - t4) / this.repulsionRange)), s3 = parseInt(Math.floor((e4.getRect().y - n3) / this.repulsionRange)), c3 = parseInt(Math.floor((e4.getRect()[i3(636)] + e4[i3(466)]().y - n3) / this.repulsionRange));
        for (var l3 = a3; l3 <= o3; l3++) for (var u3 = s3; u3 <= c3; u3++) this.grid[l3][u3].push(e4), e4.setGridCoordinates(a3, o3, s3, c3);
      }, u2.prototype.updateGrid = function() {
        var e4, t4, n3 = this.getAllNodes();
        for (this.grid = this.calcGrid(this.graphManager.getRoot()), e4 = 0; e4 < n3.length; e4++) t4 = n3[e4], this.addNodeToGrid(t4, this.graphManager.getRoot().getLeft(), this.graphManager.getRoot().getTop());
      }, u2.prototype.calculateRepulsionForceOfANode = function(e4, t4, n3, a3) {
        var s3 = r2;
        if (this.totalIterations % o2.GRID_CALCULATION_CHECK_PERIOD == 1 && n3 || a3) {
          var c3 = /* @__PURE__ */ new Set();
          e4[s3(472)] = [];
          for (var l3, u3 = this[s3(453)], d3 = e4.startX - 1; d3 < e4.finishX + 2; d3++) for (var f2 = e4.startY - 1; f2 < e4.finishY + 2; f2++) if (!(d3 < 0 || f2 < 0 || d3 >= u3.length || f2 >= u3[0].length)) {
            for (var p2 = 0; p2 < u3[d3][f2].length; p2++) if (l3 = u3[d3][f2][p2], !(e4.getOwner() != l3.getOwner() || e4 == l3) && !t4.has(l3) && !c3.has(l3)) {
              var m2 = Math[s3(549)](e4.getCenterX() - l3.getCenterX()) - (e4.getWidth() / 2 + l3[s3(451)]() / 2), h2 = Math.abs(e4.getCenterY() - l3.getCenterY()) - (e4.getHeight() / 2 + l3.getHeight() / 2);
              m2 <= this.repulsionRange && h2 <= this.repulsionRange && c3.add(l3);
            }
          }
          e4[s3(472)] = [][s3(575)](i2(c3));
        }
        for (d3 = 0; d3 < e4.surrounding[s3(568)]; d3++) this.calcRepulsionForce(e4, e4[s3(472)][d3]);
      }, u2.prototype.calcRepulsionRange = function() {
        return 0;
      }, e3[r2(513)] = u2;
    }, function(e3, t3, n2) {
      var r2 = n2(1), i2 = n2(4);
      function a2(e4, t4, n3) {
        r2.call(this, e4, t4, n3), this.idealLength = i2.DEFAULT_EDGE_LENGTH, this.edgeElasticity = i2.DEFAULT_SPRING_STRENGTH;
      }
      for (var o2 in a2.prototype = Object.create(r2.prototype), r2) a2[o2] = r2[o2];
      e3.exports = a2;
    }, function(e3, t3, n2) {
      var r2 = n2(3), i2 = n2(4);
      function a2(e4, t4, n3, a3) {
        var o3 = M;
        r2.call(this, e4, t4, n3, a3), this[o3(709)] = i2.DEFAULT_REPULSION_STRENGTH, this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this[o3(835)] = 0, this.gravitationForceY = 0, this.displacementX = 0, this[o3(678)] = 0, this.startX = 0, this.finishX = 0, this.startY = 0, this.finishY = 0, this[o3(472)] = [];
      }
      for (var o2 in a2.prototype = Object.create(r2.prototype), r2) a2[o2] = r2[o2];
      a2.prototype.setGridCoordinates = function(e4, t4, n3, r3) {
        this.startX = e4, this.finishX = t4, this.startY = n3, this.finishY = r3;
      }, e3.exports = a2;
    }, function(e3, t3, n2) {
      function r2(e4, t4) {
        this.width = 0, this.height = 0, e4 !== null && t4 !== null && (this.height = t4, this.width = e4);
      }
      r2.prototype.getWidth = function() {
        return this.width;
      }, r2.prototype.setWidth = function(e4) {
        this.width = e4;
      }, r2.prototype.getHeight = function() {
        return this.height;
      }, r2.prototype.setHeight = function(e4) {
        this.height = e4;
      }, e3.exports = r2;
    }, function(e3, t3, n2) {
      var r2 = M, i2 = n2(14);
      function a2() {
        this.map = {}, this.keys = [];
      }
      a2.prototype.put = function(e4, t4) {
        var n3 = M, r3 = i2.createID(e4);
        this.contains(r3) || (this[n3(515)][r3] = t4, this.keys[n3(752)](e4));
      }, a2.prototype.contains = function(e4) {
        return i2.createID(e4), this.map[e4] != null;
      }, a2[r2(459)].get = function(e4) {
        var t4 = i2.createID(e4);
        return this.map[t4];
      }, a2.prototype[r2(666)] = function() {
        return this.keys;
      }, e3.exports = a2;
    }, function(e3, t3, n2) {
      var r2 = M, i2 = n2(14);
      function a2() {
        this.set = {};
      }
      a2[r2(459)].add = function(e4) {
        var t4 = i2[r2(476)](e4);
        this.contains(t4) || (this.set[t4] = e4);
      }, a2.prototype.remove = function(e4) {
        delete this.set[i2.createID(e4)];
      }, a2.prototype[r2(475)] = function() {
        this.set = {};
      }, a2.prototype.contains = function(e4) {
        return this.set[i2.createID(e4)] == e4;
      }, a2.prototype.isEmpty = function() {
        return this.size() === 0;
      }, a2.prototype.size = function() {
        return Object.keys(this.set).length;
      }, a2.prototype.addAllTo = function(e4) {
        for (var t4 = r2, n3 = Object.keys(this.set), i3 = n3.length, a3 = 0; a3 < i3; a3++) e4.push(this[t4(447)][n3[a3]]);
      }, a2.prototype.size = function() {
        var e4 = r2;
        return Object.keys(this.set)[e4(568)];
      }, a2.prototype.addAll = function(e4) {
        for (var t4 = r2, n3 = e4.length, i3 = 0; i3 < n3; i3++) {
          var a3 = e4[i3];
          this[t4(887)](a3);
        }
      }, e3.exports = a2;
    }, function(e3, t3, n2) {
      function r2() {
      }
      r2.multMat = function(e4, t4) {
        for (var n3 = M, r3 = [], i2 = 0; i2 < e4.length; i2++) {
          r3[i2] = [];
          for (var a2 = 0; a2 < t4[0].length; a2++) {
            r3[i2][a2] = 0;
            for (var o2 = 0; o2 < e4[0][n3(568)]; o2++) r3[i2][a2] += e4[i2][o2] * t4[o2][a2];
          }
        }
        return r3;
      }, r2.transpose = function(e4) {
        for (var t4 = [], n3 = 0; n3 < e4[0].length; n3++) {
          t4[n3] = [];
          for (var r3 = 0; r3 < e4.length; r3++) t4[n3][r3] = e4[r3][n3];
        }
        return t4;
      }, r2.multCons = function(e4, t4) {
        for (var n3 = [], r3 = 0; r3 < e4.length; r3++) n3[r3] = e4[r3] * t4;
        return n3;
      }, r2.minusOp = function(e4, t4) {
        for (var n3 = [], r3 = 0; r3 < e4.length; r3++) n3[r3] = e4[r3] - t4[r3];
        return n3;
      }, r2.dotProduct = function(e4, t4) {
        for (var n3 = 0, r3 = 0; r3 < e4.length; r3++) n3 += e4[r3] * t4[r3];
        return n3;
      }, r2.mag = function(e4) {
        return Math[M(840)](this.dotProduct(e4, e4));
      }, r2.normalize = function(e4) {
        for (var t4 = [], n3 = this.mag(e4), r3 = 0; r3 < e4.length; r3++) t4[r3] = e4[r3] / n3;
        return t4;
      }, r2.multGamma = function(e4) {
        for (var t4 = M, n3 = [], r3 = 0, i2 = 0; i2 < e4[t4(568)]; i2++) r3 += e4[i2];
        r3 *= -1 / e4[t4(568)];
        for (var a2 = 0; a2 < e4[t4(568)]; a2++) n3[a2] = r3 + e4[a2];
        return n3;
      }, r2.multL = function(e4, t4, n3) {
        for (var r3 = [], i2 = [], a2 = [], o2 = 0; o2 < t4[0].length; o2++) {
          for (var s2 = 0, c2 = 0; c2 < t4.length; c2++) s2 += -0.5 * t4[c2][o2] * e4[c2];
          i2[o2] = s2;
        }
        for (var l2 = 0; l2 < n3.length; l2++) {
          for (var u2 = 0, d2 = 0; d2 < n3.length; d2++) u2 += n3[l2][d2] * i2[d2];
          a2[l2] = u2;
        }
        for (var f2 = 0; f2 < t4.length; f2++) {
          for (var p2 = 0, m2 = 0; m2 < t4[0].length; m2++) p2 += t4[f2][m2] * a2[m2];
          r3[f2] = p2;
        }
        return r3;
      }, e3.exports = r2;
    }, function(e3, t3, n2) {
      var r2 = /* @__PURE__ */ (function() {
        function e4(e5, t4) {
          for (var n3 = 0; n3 < t4.length; n3++) {
            var r3 = t4[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e5, r3.key, r3);
          }
        }
        return function(t4, n3, r3) {
          return n3 && e4(t4.prototype, n3), r3 && e4(t4, r3), t4;
        };
      })();
      function i2(e4, t4) {
        if (!(e4 instanceof t4)) throw TypeError(`Cannot call a class as a function`);
      }
      var a2 = n2(11);
      e3.exports = (function() {
        var e4 = M;
        function t4(e5, n3) {
          var r3 = M;
          i2(this, t4), (n3 !== null || n3 !== void 0) && (this.compareFunction = this._defaultCompareFunction);
          var o2 = void 0;
          o2 = e5 instanceof a2 ? e5.size() : e5.length, this[r3(775)](e5, 0, o2 - 1);
        }
        return r2(t4, [{ key: `_quicksort`, value: function(e5, t5, n3) {
          var r3 = M;
          if (t5 < n3) {
            var i3 = this[r3(651)](e5, t5, n3);
            this._quicksort(e5, t5, i3), this._quicksort(e5, i3 + 1, n3);
          }
        } }, { key: `_partition`, value: function(e5, t5, n3) {
          for (var r3 = M, i3 = this[r3(583)](e5, t5), a3 = t5, o2 = n3; ; ) {
            for (; this.compareFunction(i3, this._get(e5, o2)); ) o2--;
            for (; this.compareFunction(this[r3(583)](e5, a3), i3); ) a3++;
            if (a3 < o2) this._swap(e5, a3, o2), a3++, o2--;
            else return o2;
          }
        } }, { key: e4(583), value: function(e5, t5) {
          return e5 instanceof a2 ? e5.get_object_at(t5) : e5[t5];
        } }, { key: `_set`, value: function(e5, t5, n3) {
          e5 instanceof a2 ? e5.set_object_at(t5, n3) : e5[t5] = n3;
        } }, { key: e4(799), value: function(e5, t5, n3) {
          var r3 = this._get(e5, t5);
          this._set(e5, t5, this._get(e5, n3)), this._set(e5, n3, r3);
        } }, { key: `_defaultCompareFunction`, value: function(e5, t5) {
          return t5 > e5;
        } }]), t4;
      })();
    }, function(e3, t3, n2) {
      var r2 = M;
      function i2() {
      }
      i2[r2(750)] = function(e4) {
        var t4 = r2;
        this.U = null, this.V = null, this.s = null, this.m = 0, this.n = 0, this.m = e4[t4(568)], this.n = e4[0][t4(568)];
        var n3 = Math.min(this.m, this.n);
        this.s = (function(e5) {
          for (var t5 = []; e5-- > 0; ) t5.push(0);
          return t5;
        })(Math.min(this.m + 1, this.n)), this.U = (function(e5) {
          return (function e6(t5) {
            var n4 = M;
            if (t5.length == 0) return 0;
            for (var r3 = [], i3 = 0; i3 < t5[0]; i3++) r3[n4(752)](e6(t5[n4(533)](1)));
            return r3;
          })(e5);
        })([this.m, n3]), this.V = (function(e5) {
          return (function e6(t5) {
            if (t5.length == 0) return 0;
            for (var n4 = [], r3 = 0; r3 < t5[0]; r3++) n4.push(e6(t5.slice(1)));
            return n4;
          })(e5);
        })([this.n, this.n]);
        for (var a2 = (function(e5) {
          for (var t5 = []; e5-- > 0; ) t5.push(0);
          return t5;
        })(this.n), o2 = (function(e5) {
          for (var t5 = []; e5-- > 0; ) t5.push(0);
          return t5;
        })(this.m), s2 = true, c2 = true, l2 = Math[t4(770)](this.m - 1, this.n), u2 = Math.max(0, Math.min(this.n - 2, this.m)), d2 = 0; d2 < Math.max(l2, u2); d2++) {
          if (d2 < l2) {
            this.s[d2] = 0;
            for (var f2 = d2; f2 < this.m; f2++) this.s[d2] = i2[t4(538)](this.s[d2], e4[f2][d2]);
            if (this.s[d2] !== 0) {
              e4[d2][d2] < 0 && (this.s[d2] = -this.s[d2]);
              for (var p2 = d2; p2 < this.m; p2++) e4[p2][d2] /= this.s[d2];
              e4[d2][d2] += 1;
            }
            this.s[d2] = -this.s[d2];
          }
          for (var m2 = d2 + 1; m2 < this.n; m2++) {
            if (/* @__PURE__ */ (function(e5, t5) {
              return e5 && t5;
            })(d2 < l2, this.s[d2] !== 0)) {
              for (var h2 = 0, g2 = d2; g2 < this.m; g2++) h2 += e4[g2][d2] * e4[g2][m2];
              h2 = -h2 / e4[d2][d2];
              for (var _2 = d2; _2 < this.m; _2++) e4[_2][m2] += h2 * e4[_2][d2];
            }
            a2[m2] = e4[d2][m2];
          }
          if (/* @__PURE__ */ (function(e5, t5) {
            return e5 && t5;
          })(s2, d2 < l2)) for (var v2 = d2; v2 < this.m; v2++) this.U[v2][d2] = e4[v2][d2];
          if (d2 < u2) {
            a2[d2] = 0;
            for (var y2 = d2 + 1; y2 < this.n; y2++) a2[d2] = i2.hypot(a2[d2], a2[y2]);
            if (a2[d2] !== 0) {
              a2[d2 + 1] < 0 && (a2[d2] = -a2[d2]);
              for (var b2 = d2 + 1; b2 < this.n; b2++) a2[b2] /= a2[d2];
              a2[d2 + 1] += 1;
            }
            if (a2[d2] = -a2[d2], /* @__PURE__ */ (function(e5, t5) {
              return e5 && t5;
            })(d2 + 1 < this.m, a2[d2] !== 0)) {
              for (var x2 = d2 + 1; x2 < this.m; x2++) o2[x2] = 0;
              for (var S2 = d2 + 1; S2 < this.n; S2++) for (var C2 = d2 + 1; C2 < this.m; C2++) o2[C2] += a2[S2] * e4[C2][S2];
              for (var w2 = d2 + 1; w2 < this.n; w2++) for (var T2 = -a2[w2] / a2[d2 + 1], E2 = d2 + 1; E2 < this.m; E2++) e4[E2][w2] += T2 * o2[E2];
            }
            if (c2) for (var D2 = d2 + 1; D2 < this.n; D2++) this.V[D2][d2] = a2[D2];
          }
        }
        var O2 = Math.min(this.n, this.m + 1);
        if (l2 < this.n && (this.s[l2] = e4[l2][l2]), this.m < O2 && (this.s[O2 - 1] = 0), u2 + 1 < O2 && (a2[u2] = e4[u2][O2 - 1]), a2[O2 - 1] = 0, s2) {
          for (var k2 = l2; k2 < n3; k2++) {
            for (var A2 = 0; A2 < this.m; A2++) this.U[A2][k2] = 0;
            this.U[k2][k2] = 1;
          }
          for (var j2 = l2 - 1; j2 >= 0; j2--) if (this.s[j2] !== 0) {
            for (var N2 = j2 + 1; N2 < n3; N2++) {
              for (var P2 = 0, F2 = j2; F2 < this.m; F2++) P2 += this.U[F2][j2] * this.U[F2][N2];
              P2 = -P2 / this.U[j2][j2];
              for (var I2 = j2; I2 < this.m; I2++) this.U[I2][N2] += P2 * this.U[I2][j2];
            }
            for (var L2 = j2; L2 < this.m; L2++) this.U[L2][j2] = -this.U[L2][j2];
            this.U[j2][j2] = 1 + this.U[j2][j2];
            for (var ee2 = 0; ee2 < j2 - 1; ee2++) this.U[ee2][j2] = 0;
          } else {
            for (var te2 = 0; te2 < this.m; te2++) this.U[te2][j2] = 0;
            this.U[j2][j2] = 1;
          }
        }
        if (c2) for (var R2 = this.n - 1; R2 >= 0; R2--) {
          if (/* @__PURE__ */ (function(e5, t5) {
            return e5 && t5;
          })(R2 < u2, a2[R2] !== 0)) for (var z2 = R2 + 1; z2 < n3; z2++) {
            for (var B2 = 0, V2 = R2 + 1; V2 < this.n; V2++) B2 += this.V[V2][R2] * this.V[V2][z2];
            B2 = -B2 / this.V[R2 + 1][R2];
            for (var H2 = R2 + 1; H2 < this.n; H2++) this.V[H2][z2] += B2 * this.V[H2][R2];
          }
          for (var U2 = 0; U2 < this.n; U2++) this.V[U2][R2] = 0;
          this.V[R2][R2] = 1;
        }
        for (var W2 = O2 - 1, ne2 = 0, re2 = 2 ** -52, ie2 = 2 ** -966; O2 > 0; ) {
          var G2 = void 0, K2 = void 0;
          for (G2 = O2 - 2; G2 >= -1 && G2 !== -1; G2--) if (Math.abs(a2[G2]) <= ie2 + re2 * (Math.abs(this.s[G2]) + Math.abs(this.s[G2 + 1]))) {
            a2[G2] = 0;
            break;
          }
          if (G2 === O2 - 2) K2 = 4;
          else {
            var q2 = void 0;
            for (q2 = O2 - 1; q2 >= G2 && q2 !== G2; q2--) {
              var ae2 = (q2 === O2 ? 0 : Math.abs(a2[q2])) + (q2 === G2 + 1 ? 0 : Math[t4(549)](a2[q2 - 1]));
              if (Math.abs(this.s[q2]) <= ie2 + re2 * ae2) {
                this.s[q2] = 0;
                break;
              }
            }
            q2 === G2 ? K2 = 3 : q2 === O2 - 1 ? K2 = 1 : (K2 = 2, G2 = q2);
          }
          switch (G2++, K2) {
            case 1:
              var J2 = a2[O2 - 2];
              a2[O2 - 2] = 0;
              for (var Y2 = O2 - 2; Y2 >= G2; Y2--) {
                var X2 = i2.hypot(this.s[Y2], J2), oe2 = this.s[Y2] / X2, se2 = J2 / X2;
                if (this.s[Y2] = X2, Y2 !== G2 && (J2 = -se2 * a2[Y2 - 1], a2[Y2 - 1] = oe2 * a2[Y2 - 1]), c2) for (var ce2 = 0; ce2 < this.n; ce2++) X2 = oe2 * this.V[ce2][Y2] + se2 * this.V[ce2][O2 - 1], this.V[ce2][O2 - 1] = -se2 * this.V[ce2][Y2] + oe2 * this.V[ce2][O2 - 1], this.V[ce2][Y2] = X2;
              }
              break;
            case 2:
              var le2 = a2[G2 - 1];
              a2[G2 - 1] = 0;
              for (var Z2 = G2; Z2 < O2; Z2++) {
                var ue2 = i2.hypot(this.s[Z2], le2), de2 = this.s[Z2] / ue2, fe2 = le2 / ue2;
                if (this.s[Z2] = ue2, le2 = -fe2 * a2[Z2], a2[Z2] = de2 * a2[Z2], s2) for (var pe2 = 0; pe2 < this.m; pe2++) ue2 = de2 * this.U[pe2][Z2] + fe2 * this.U[pe2][G2 - 1], this.U[pe2][G2 - 1] = -fe2 * this.U[pe2][Z2] + de2 * this.U[pe2][G2 - 1], this.U[pe2][Z2] = ue2;
              }
              break;
            case 3:
              var me2 = Math.max(Math.max(Math.max(Math[t4(891)](Math[t4(549)](this.s[O2 - 1]), Math.abs(this.s[O2 - 2])), Math.abs(a2[O2 - 2])), Math.abs(this.s[G2])), Math[t4(549)](a2[G2])), he2 = this.s[O2 - 1] / me2, ge2 = this.s[O2 - 2] / me2, _e2 = a2[O2 - 2] / me2, ve2 = this.s[G2] / me2, ye2 = a2[G2] / me2, be2 = ((ge2 + he2) * (ge2 - he2) + _e2 * _e2) / 2, xe2 = he2 * _e2 * (he2 * _e2), Se2 = 0;
              /* @__PURE__ */ (function(e5, t5) {
                return e5 || t5;
              })(be2 !== 0, xe2 !== 0) && (Se2 = Math.sqrt(be2 * be2 + xe2), be2 < 0 && (Se2 = -Se2), Se2 = xe2 / (be2 + Se2));
              for (var Ce2 = (ve2 + he2) * (ve2 - he2) + Se2, we2 = ve2 * ye2, Q = G2; Q < O2 - 1; Q++) {
                var $ = i2.hypot(Ce2, we2), Te = Ce2 / $, Ee = we2 / $;
                if (Q !== G2 && (a2[Q - 1] = $), Ce2 = Te * this.s[Q] + Ee * a2[Q], a2[Q] = Te * a2[Q] - Ee * this.s[Q], we2 = Ee * this.s[Q + 1], this.s[Q + 1] = Te * this.s[Q + 1], c2) for (var De = 0; De < this.n; De++) $ = Te * this.V[De][Q] + Ee * this.V[De][Q + 1], this.V[De][Q + 1] = -Ee * this.V[De][Q] + Te * this.V[De][Q + 1], this.V[De][Q] = $;
                if ($ = i2.hypot(Ce2, we2), Te = Ce2 / $, Ee = we2 / $, this.s[Q] = $, Ce2 = Te * a2[Q] + Ee * this.s[Q + 1], this.s[Q + 1] = -Ee * a2[Q] + Te * this.s[Q + 1], we2 = Ee * a2[Q + 1], a2[Q + 1] = Te * a2[Q + 1], s2 && Q < this.m - 1) for (var Oe = 0; Oe < this.m; Oe++) $ = Te * this.U[Oe][Q] + Ee * this.U[Oe][Q + 1], this.U[Oe][Q + 1] = -Ee * this.U[Oe][Q] + Te * this.U[Oe][Q + 1], this.U[Oe][Q] = $;
              }
              a2[O2 - 2] = Ce2, ne2 += 1;
              break;
            case 4:
              if (this.s[G2] <= 0 && (this.s[G2] = this.s[G2] < 0 ? -this.s[G2] : 0, c2)) for (var ke = 0; ke <= W2; ke++) this.V[ke][G2] = -this.V[ke][G2];
              for (; G2 < W2 && !(this.s[G2] >= this.s[G2 + 1]); ) {
                var Ae = this.s[G2];
                if (this.s[G2] = this.s[G2 + 1], this.s[G2 + 1] = Ae, c2 && G2 < this.n - 1) for (var je = 0; je < this.n; je++) Ae = this.V[je][G2 + 1], this.V[je][G2 + 1] = this.V[je][G2], this.V[je][G2] = Ae;
                if (s2 && G2 < this.m - 1) for (var Me = 0; Me < this.m; Me++) Ae = this.U[Me][G2 + 1], this.U[Me][G2 + 1] = this.U[Me][G2], this.U[Me][G2] = Ae;
                G2++;
              }
              ne2 = 0, O2--;
              break;
          }
        }
        return { U: this.U, V: this.V, S: this.s };
      }, i2[r2(538)] = function(e4, t4) {
        var n3 = void 0;
        return Math.abs(e4) > Math.abs(t4) ? (n3 = t4 / e4, n3 = Math.abs(e4) * Math.sqrt(1 + n3 * n3)) : t4 == 0 ? n3 = 0 : (n3 = e4 / t4, n3 = Math.abs(t4) * Math.sqrt(1 + n3 * n3)), n3;
      }, e3.exports = i2;
    }, function(e3, t3, n2) {
      var r2 = /* @__PURE__ */ (function() {
        function e4(e5, t4) {
          for (var n3 = M, r3 = 0; r3 < t4[n3(568)]; r3++) {
            var i3 = t4[r3];
            i3.enumerable = i3[n3(514)] || false, i3.configurable = true, `value` in i3 && (i3.writable = true), Object.defineProperty(e5, i3[n3(473)], i3);
          }
        }
        return function(t4, n3, r3) {
          return n3 && e4(t4.prototype, n3), r3 && e4(t4, r3), t4;
        };
      })();
      function i2(e4, t4) {
        if (!(e4 instanceof t4)) throw TypeError(`Cannot call a class as a function`);
      }
      e3.exports = (function() {
        var e4 = M;
        function t4(e5, n3) {
          var r3 = M, a2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, o2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : -1, s2 = arguments[r3(568)] > 4 && arguments[4] !== void 0 ? arguments[4] : -1;
          i2(this, t4), this[r3(715)] = e5, this.sequence2 = n3, this.match_score = a2, this.mismatch_penalty = o2, this.gap_penalty = s2, this[r3(584)] = e5.length + 1, this.jMax = n3.length + 1, this[r3(453)] = Array(this.iMax);
          for (var c2 = 0; c2 < this.iMax; c2++) {
            this.grid[c2] = Array(this.jMax);
            for (var l2 = 0; l2 < this[r3(507)]; l2++) this.grid[c2][l2] = 0;
          }
          this.tracebackGrid = Array(this.iMax);
          for (var u2 = 0; u2 < this.iMax; u2++) {
            this.tracebackGrid[u2] = Array(this.jMax);
            for (var d2 = 0; d2 < this.jMax; d2++) this.tracebackGrid[u2][d2] = [null, null, null];
          }
          this.alignments = [], this.score = -1, this.computeGrids();
        }
        return r2(t4, [{ key: e4(464), value: function() {
          return this.score;
        } }, { key: e4(669), value: function() {
          return this.alignments;
        } }, { key: `computeGrids`, value: function() {
          for (var t5 = e4, n3 = 1; n3 < this[t5(507)]; n3++) this.grid[0][n3] = this.grid[0][n3 - 1] + this.gap_penalty, this.tracebackGrid[0][n3] = [false, false, true];
          for (var r3 = 1; r3 < this.iMax; r3++) this.grid[r3][0] = this.grid[r3 - 1][0] + this[t5(703)], this.tracebackGrid[r3][0] = [false, true, false];
          for (var i3 = 1; i3 < this.iMax; i3++) for (var a2 = 1; a2 < this.jMax; a2++) {
            var o2 = void 0;
            o2 = this.sequence1[i3 - 1] === this.sequence2[a2 - 1] ? this.grid[i3 - 1][a2 - 1] + this[t5(640)] : this.grid[i3 - 1][a2 - 1] + this.mismatch_penalty;
            var s2 = this.grid[i3 - 1][a2] + this.gap_penalty, c2 = this.grid[i3][a2 - 1] + this.gap_penalty, l2 = [o2, s2, c2], u2 = this.arrayAllMaxIndexes(l2);
            this.grid[i3][a2] = l2[u2[0]], this.tracebackGrid[i3][a2] = [u2.includes(0), u2[t5(573)](1), u2.includes(2)];
          }
          this.score = this.grid[this.iMax - 1][this.jMax - 1];
        } }, { key: `alignmentTraceback`, value: function() {
          var t5 = e4, n3 = [];
          for (n3.push({ pos: [this.sequence1.length, this.sequence2[t5(568)]], seq1: ``, seq2: `` }); n3[0]; ) {
            var r3 = n3[0], i3 = this[t5(873)][r3.pos[0]][r3.pos[1]];
            i3[0] && n3.push({ pos: [r3.pos[0] - 1, r3.pos[1] - 1], seq1: this[t5(715)][r3.pos[0] - 1] + r3.seq1, seq2: this.sequence2[r3[t5(832)][1] - 1] + r3.seq2 }), i3[1] && n3.push({ pos: [r3.pos[0] - 1, r3.pos[1]], seq1: this.sequence1[r3.pos[0] - 1] + r3[t5(541)], seq2: `-` + r3.seq2 }), i3[2] && n3.push({ pos: [r3.pos[0], r3.pos[1] - 1], seq1: `-` + r3.seq1, seq2: this.sequence2[r3.pos[1] - 1] + r3.seq2 }), r3.pos[0] === 0 && r3[t5(832)][1] === 0 && this.alignments.push({ sequence1: r3.seq1, sequence2: r3.seq2 }), n3.shift();
          }
          return this.alignments;
        } }, { key: `getAllIndexes`, value: function(e5, t5) {
          for (var n3 = [], r3 = -1; (r3 = e5.indexOf(t5, r3 + 1)) !== -1; ) n3.push(r3);
          return n3;
        } }, { key: `arrayAllMaxIndexes`, value: function(t5) {
          var n3 = e4;
          return this.getAllIndexes(t5, Math[n3(891)][n3(637)](null, t5));
        } }]), t4;
      })();
    }, function(e3, t3, n2) {
      var r2 = M, i2 = function() {
      };
      i2[r2(855)] = n2(18), i2.FDLayoutConstants = n2(4), i2.FDLayoutEdge = n2(19), i2.FDLayoutNode = n2(20), i2.DimensionD = n2(21), i2[r2(850)] = n2(22), i2.HashSet = n2(23), i2.IGeometry = n2(8), i2.IMath = n2(9), i2[r2(837)] = n2(10), i2.Point = n2(12), i2.PointD = n2(5), i2.RandomSeed = n2(16), i2[r2(849)] = n2(13), i2.Transform = n2(17), i2.UniqueIDGeneretor = n2(14), i2.Quicksort = n2(25), i2.LinkedList = n2(11), i2[r2(455)] = n2(2), i2.LGraph = n2(6), i2.LEdge = n2(1), i2.LGraphManager = n2(7), i2.LNode = n2(3), i2.Layout = n2(15), i2.LayoutConstants = n2(0), i2.NeedlemanWunsch = n2(27), i2.Matrix = n2(24), i2.SVD = n2(26), e3.exports = i2;
    }, function(e3, t3, n2) {
      var r2 = M;
      function i2() {
        this.listeners = [];
      }
      var a2 = i2.prototype;
      a2.addListener = function(e4, t4) {
        var n3 = M;
        this.listeners[n3(752)]({ event: e4, callback: t4 });
      }, a2[r2(500)] = function(e4, t4) {
        for (var n3 = r2, i3 = this.listeners.length; i3 >= 0; i3--) {
          var a3 = this.listeners[i3];
          a3.event === e4 && a3.callback === t4 && this[n3(552)].splice(i3, 1);
        }
      }, a2[r2(768)] = function(e4, t4) {
        for (var n3 = r2, i3 = 0; i3 < this.listeners.length; i3++) {
          var a3 = this[n3(552)][i3];
          e4 === a3.event && a3.callback(t4);
        }
      }, e3[r2(513)] = i2;
    }]);
  });
}), P = e((e2, t2) => {
  (function(n2, r2) {
    var i2 = M;
    typeof e2 == `object` && typeof t2 == i2(825) ? t2.exports = r2(N()) : typeof define == `function` && define.amd ? define([`layout-base`], r2) : typeof e2 == i2(825) ? e2.coseBase = r2(N()) : n2.coseBase = r2(n2.layoutBase);
  })(e2, function(e3) {
    return (() => {
      var t3 = { 45: (e4, t4, n3) => {
        var r3 = M, i2 = {};
        i2.layoutBase = n3(551), i2[r3(526)] = n3(806), i2[r3(593)] = n3(767), i2.CoSEGraph = n3(880), i2.CoSEGraphManager = n3(578), i2.CoSELayout = n3(765), i2.CoSENode = n3(991), i2.ConstraintHandler = n3(902), e4.exports = i2;
      }, 806: (e4, t4, n3) => {
        var r3 = n3(551).FDLayoutConstants;
        function i2() {
        }
        for (var a2 in r3) i2[a2] = r3[a2];
        i2.DEFAULT_USE_MULTI_LEVEL_SCALING = false, i2.DEFAULT_RADIAL_SEPARATION = r3.DEFAULT_EDGE_LENGTH, i2.DEFAULT_COMPONENT_SEPERATION = 60, i2.TILE = true, i2.TILING_PADDING_VERTICAL = 10, i2.TILING_PADDING_HORIZONTAL = 10, i2.TRANSFORM_ON_CONSTRAINT_HANDLING = true, i2.ENFORCE_CONSTRAINTS = true, i2.APPLY_LAYOUT = true, i2.RELAX_MOVEMENT_ON_CONSTRAINTS = true, i2.TREE_REDUCTION_ON_INCREMENTAL = true, i2.PURE_INCREMENTAL = i2.DEFAULT_INCREMENTAL, e4.exports = i2;
      }, 767: (e4, t4, n3) => {
        var r3 = n3(551).FDLayoutEdge;
        function i2(e5, t5, n4) {
          r3.call(this, e5, t5, n4);
        }
        for (var a2 in i2.prototype = Object.create(r3.prototype), r3) i2[a2] = r3[a2];
        e4.exports = i2;
      }, 880: (e4, t4, n3) => {
        var r3 = n3(551).LGraph;
        function i2(e5, t5, n4) {
          r3.call(this, e5, t5, n4);
        }
        for (var a2 in i2.prototype = Object.create(r3.prototype), r3) i2[a2] = r3[a2];
        e4.exports = i2;
      }, 578: (e4, t4, n3) => {
        var r3 = M, i2 = n3(551)[r3(602)];
        function a2(e5) {
          i2.call(this, e5);
        }
        for (var o2 in a2.prototype = Object.create(i2.prototype), i2) a2[o2] = i2[o2];
        e4.exports = a2;
      }, 765: (e4, t4, n3) => {
        var r3 = M, i2 = n3(551)[r3(855)], a2 = n3(578), o2 = n3(880), s2 = n3(991), c2 = n3(767), l2 = n3(806), u2 = n3(902), d2 = n3(551).FDLayoutConstants, f2 = n3(551).LayoutConstants, p2 = n3(551)[r3(675)], m2 = n3(551).PointD, h2 = n3(551).DimensionD, g2 = n3(551).Layout, _2 = n3(551).Integer, v2 = n3(551).IGeometry, y2 = n3(551).LGraph, b2 = n3(551).Transform, x2 = n3(551).LinkedList;
        function S2() {
          var e5 = r3;
          i2.call(this), this[e5(821)] = {}, this.constraints = {};
        }
        for (var C2 in S2.prototype = Object.create(i2.prototype), i2) S2[C2] = i2[C2];
        S2.prototype.newGraphManager = function() {
          var e5 = r3, t5 = new a2(this);
          return this[e5(600)] = t5, t5;
        }, S2.prototype.newGraph = function(e5) {
          return new o2(null, this.graphManager, e5);
        }, S2[r3(459)].newNode = function(e5) {
          return new s2(this.graphManager, e5);
        }, S2.prototype.newEdge = function(e5) {
          return new c2(null, null, e5);
        }, S2.prototype[r3(859)] = function() {
          var e5 = r3;
          i2.prototype[e5(859)].call(this, arguments), this.isSubLayout || (l2.DEFAULT_EDGE_LENGTH < 10 ? this.idealEdgeLength = 10 : this.idealEdgeLength = l2.DEFAULT_EDGE_LENGTH, this.useSmartIdealEdgeLengthCalculation = l2.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this[e5(504)] = d2.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = d2.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = d2.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = d2.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.prunedNodesAll = [], this.growTreeIterations = 0, this.afterGrowthIterations = 0, this.isTreeGrowing = false, this.isGrowthFinished = false);
        }, S2[r3(459)][r3(718)] = function() {
          var e5 = r3;
          i2.prototype.initSpringEmbedder.call(this), this[e5(624)] = 0, this.maxCoolingCycle = this.maxIterations / d2[e5(638)], this.finalTemperature = 0.04, this.coolingAdjuster = 1;
        }, S2.prototype.layout = function() {
          return f2.DEFAULT_CREATE_BENDS_AS_NEEDED && (this.createBendpoints(), this.graphManager.resetAllEdges()), this.level = 0, this.classicLayout();
        }, S2.prototype.classicLayout = function() {
          var e5 = r3;
          if (this.nodesWithGravity = this.calculateNodesToApplyGravitationTo(), this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity), this.calcNoOfChildrenForAllNodes(), this.graphManager.calcLowestCommonAncestors(), this.graphManager[e5(757)](), this.graphManager.getRoot().calcEstimatedSize(), this.calcIdealEdgeLengths(), !this.incremental) {
            var t5 = this.getFlatForest();
            if (t5.length > 0) this[e5(786)](t5);
            else {
              this.reduceTrees(), this.graphManager[e5(668)]();
              var n4 = new Set(this[e5(480)]()), i3 = this.nodesWithGravity.filter(function(t6) {
                return n4[e5(726)](t6);
              });
              this.graphManager.setAllNodesToApplyGravitation(i3), this.positionNodesRandomly();
            }
          } else if (l2.TREE_REDUCTION_ON_INCREMENTAL) {
            this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
            var n4 = new Set(this.getAllNodes()), i3 = this.nodesWithGravity.filter(function(t6) {
              return n4[e5(726)](t6);
            });
            this.graphManager.setAllNodesToApplyGravitation(i3);
          }
          return Object.keys(this[e5(826)]).length > 0 && (u2.handleConstraints(this), this.initConstraintVariables()), this.initSpringEmbedder(), l2.APPLY_LAYOUT && this.runSpringEmbedder(), true;
        }, S2.prototype.tick = function() {
          var e5 = r3;
          if (this.totalIterations++, this.totalIterations === this[e5(782)] && !this.isTreeGrowing && !this[e5(716)]) if (this.prunedNodesAll[e5(568)] > 0) this.isTreeGrowing = true;
          else return true;
          if (this.totalIterations % d2.CONVERGENCE_CHECK_PERIOD == 0 && !this[e5(490)] && !this.isGrowthFinished) {
            if (this.isConverged()) if (this.prunedNodesAll.length > 0) this.isTreeGrowing = true;
            else return true;
            this.coolingCycle++, this[e5(691)] == 0 ? this.coolingAdjuster = this.coolingCycle : this.layoutQuality == 1 && (this[e5(440)] = this.coolingCycle / 3), this.coolingFactor = Math[e5(891)](this.initialCoolingFactor - Math[e5(793)](this.coolingCycle, Math.log(100 * (this[e5(853)] - this.finalTemperature)) / Math.log(this.maxCoolingCycle)) / 100 * this.coolingAdjuster, this.finalTemperature), this[e5(822)] = Math.ceil(this.initialAnimationPeriod * Math.sqrt(this.coolingFactor));
          }
          if (this.isTreeGrowing) {
            if (this.growTreeIterations % 10 == 0) if (this.prunedNodesAll.length > 0) {
              this.graphManager.updateBounds(), this.updateGrid(), this.growTree(this.prunedNodesAll), this[e5(600)].resetAllNodesToApplyGravitation();
              var t5 = new Set(this.getAllNodes()), n4 = this.nodesWithGravity.filter(function(e6) {
                return t5.has(e6);
              });
              this.graphManager.setAllNodesToApplyGravitation(n4), this.graphManager.updateBounds(), this.updateGrid(), l2.PURE_INCREMENTAL ? this.coolingFactor = d2.DEFAULT_COOLING_FACTOR_INCREMENTAL / 2 : this.coolingFactor = d2.DEFAULT_COOLING_FACTOR_INCREMENTAL;
            } else this[e5(490)] = false, this.isGrowthFinished = true;
            this.growTreeIterations++;
          }
          if (this[e5(716)]) {
            if (this.isConverged()) return true;
            this.afterGrowthIterations % 10 == 0 && (this.graphManager[e5(633)](), this.updateGrid()), l2.PURE_INCREMENTAL ? this.coolingFactor = d2[e5(697)] / 2 * ((100 - this[e5(629)]) / 100) : this.coolingFactor = d2.DEFAULT_COOLING_FACTOR_INCREMENTAL * ((100 - this.afterGrowthIterations) / 100), this.afterGrowthIterations++;
          }
          var i3 = !this.isTreeGrowing && !this[e5(716)], a3 = this.growTreeIterations % 10 == 1 && this.isTreeGrowing || this.afterGrowthIterations % 10 == 1 && this.isGrowthFinished;
          return this.totalDisplacement = 0, this.graphManager[e5(633)](), this[e5(670)](), this.calcRepulsionForces(i3, a3), this.calcGravitationalForces(), this.moveNodes(), this[e5(563)](), false;
        }, S2.prototype.getPositionsData = function() {
          for (var e5 = r3, t5 = this.graphManager[e5(480)](), n4 = {}, i3 = 0; i3 < t5[e5(568)]; i3++) {
            var a3 = t5[i3].rect, o3 = t5[i3].id;
            n4[o3] = { id: o3, x: a3.getCenterX(), y: a3.getCenterY(), w: a3.width, h: a3.height };
          }
          return n4;
        }, S2.prototype.runSpringEmbedder = function() {
          var e5 = r3;
          this.initialAnimationPeriod = 25, this.animationPeriod = this[e5(771)];
          var t5 = false;
          if (d2.ANIMATE === `during`) this.emit(`layoutstarted`);
          else {
            for (; !t5; ) t5 = this[e5(648)]();
            this.graphManager[e5(633)]();
          }
        }, S2.prototype.moveNodes = function() {
          for (var e5 = r3, t5 = this[e5(480)](), n4, i3 = 0; i3 < t5[e5(568)]; i3++) n4 = t5[i3], n4.calculateDisplacement();
          Object.keys(this.constraints).length > 0 && this.updateDisplacements();
          for (var i3 = 0; i3 < t5[e5(568)]; i3++) n4 = t5[i3], n4.move();
        }, S2[r3(459)][r3(520)] = function() {
          var e5 = r3, t5 = this;
          this.idToNodeMap = /* @__PURE__ */ new Map(), this.fixedNodeSet = /* @__PURE__ */ new Set();
          for (var n4 = this.graphManager.getAllNodes(), i3 = 0; i3 < n4.length; i3++) {
            var a3 = n4[i3];
            this.idToNodeMap.set(a3.id, a3);
          }
          var o3 = function e6(n5) {
            for (var r4 = M, i4 = n5.getChild()[r4(572)](), a4, o4 = 0, s4 = 0; s4 < i4[r4(568)]; s4++) a4 = i4[s4], a4.getChild() == null ? t5.fixedNodeSet.has(a4.id) && (o4 += 100) : o4 += e6(a4);
            return o4;
          };
          if (this.constraints[e5(843)]) {
            this[e5(826)].fixedNodeConstraint.forEach(function(e6) {
              t5.fixedNodeSet.add(e6.nodeId);
            });
            for (var n4 = this.graphManager.getAllNodes(), a3, i3 = 0; i3 < n4[e5(568)]; i3++) if (a3 = n4[i3], a3.getChild() != null) {
              var s3 = o3(a3);
              s3 > 0 && (a3.fixedNodeWeight = s3);
            }
          }
          if (this.constraints.relativePlacementConstraint) {
            var c3 = /* @__PURE__ */ new Map(), u3 = /* @__PURE__ */ new Map();
            if (this.dummyToNodeForVerticalAlignment = /* @__PURE__ */ new Map(), this.dummyToNodeForHorizontalAlignment = /* @__PURE__ */ new Map(), this.fixedNodesOnHorizontal = /* @__PURE__ */ new Set(), this.fixedNodesOnVertical = /* @__PURE__ */ new Set(), this.fixedNodeSet.forEach(function(e6) {
              t5.fixedNodesOnHorizontal.add(e6), t5.fixedNodesOnVertical.add(e6);
            }), this.constraints.alignmentConstraint) {
              if (this[e5(826)].alignmentConstraint[e5(631)]) for (var d3 = this[e5(826)].alignmentConstraint[e5(631)], i3 = 0; i3 < d3.length; i3++) this.dummyToNodeForVerticalAlignment.set(e5(488) + i3, []), d3[i3].forEach(function(n5) {
                var r4 = e5;
                c3.set(n5, `dummy` + i3), t5.dummyToNodeForVerticalAlignment.get(`dummy` + i3).push(n5), t5[r4(854)].has(n5) && t5.fixedNodesOnHorizontal.add(`dummy` + i3);
              });
              if (this.constraints.alignmentConstraint.horizontal) for (var f3 = this.constraints.alignmentConstraint.horizontal, i3 = 0; i3 < f3.length; i3++) this[e5(816)].set(e5(488) + i3, []), f3[i3].forEach(function(n5) {
                var r4 = e5;
                u3.set(n5, `dummy` + i3), t5.dummyToNodeForHorizontalAlignment.get(r4(488) + i3)[r4(752)](n5), t5.fixedNodeSet.has(n5) && t5.fixedNodesOnVertical.add(`dummy` + i3);
              });
            }
            if (l2[e5(665)]) this.shuffle = function(t6) {
              var n5 = e5, r4, i4, a4;
              for (a4 = t6.length - 1; a4 >= 2 * t6.length / 3; a4--) r4 = Math.floor(Math[n5(537)]() * (a4 + 1)), i4 = t6[a4], t6[a4] = t6[r4], t6[r4] = i4;
              return t6;
            }, this[e5(634)] = [], this.nodesInRelativeVertical = [], this.nodeToRelativeConstraintMapHorizontal = /* @__PURE__ */ new Map(), this.nodeToRelativeConstraintMapVertical = /* @__PURE__ */ new Map(), this.nodeToTempPositionMapHorizontal = /* @__PURE__ */ new Map(), this[e5(769)] = /* @__PURE__ */ new Map(), this.constraints.relativePlacementConstraint.forEach(function(n5) {
              var r4 = e5;
              if (n5.left) {
                var i4 = c3[r4(726)](n5[r4(597)]) ? c3[r4(652)](n5.left) : n5.left, a4 = c3.has(n5.right) ? c3.get(n5.right) : n5.right;
                t5.nodesInRelativeHorizontal[r4(573)](i4) || (t5.nodesInRelativeHorizontal.push(i4), t5.nodeToRelativeConstraintMapHorizontal.set(i4, []), t5.dummyToNodeForVerticalAlignment.has(i4) ? t5[r4(479)].set(i4, t5.idToNodeMap.get(t5.dummyToNodeForVerticalAlignment[r4(652)](i4)[0]).getCenterX()) : t5.nodeToTempPositionMapHorizontal.set(i4, t5.idToNodeMap.get(i4).getCenterX())), t5.nodesInRelativeHorizontal.includes(a4) || (t5.nodesInRelativeHorizontal.push(a4), t5.nodeToRelativeConstraintMapHorizontal.set(a4, []), t5.dummyToNodeForVerticalAlignment.has(a4) ? t5[r4(479)].set(a4, t5.idToNodeMap.get(t5.dummyToNodeForVerticalAlignment.get(a4)[0]).getCenterX()) : t5.nodeToTempPositionMapHorizontal.set(a4, t5.idToNodeMap.get(a4)[r4(462)]())), t5.nodeToRelativeConstraintMapHorizontal.get(i4)[r4(752)]({ right: a4, gap: n5.gap }), t5[r4(833)].get(a4).push({ left: i4, gap: n5[r4(551)] });
              } else {
                var o4 = u3.has(n5.top) ? u3.get(n5.top) : n5.top, s4 = u3.has(n5.bottom) ? u3.get(n5.bottom) : n5.bottom;
                t5.nodesInRelativeVertical.includes(o4) || (t5.nodesInRelativeVertical.push(o4), t5.nodeToRelativeConstraintMapVertical.set(o4, []), t5.dummyToNodeForHorizontalAlignment.has(o4) ? t5.nodeToTempPositionMapVertical.set(o4, t5.idToNodeMap.get(t5.dummyToNodeForHorizontalAlignment.get(o4)[0])[r4(601)]()) : t5.nodeToTempPositionMapVertical.set(o4, t5[r4(553)][r4(652)](o4).getCenterY())), t5.nodesInRelativeVertical.includes(s4) || (t5.nodesInRelativeVertical[r4(752)](s4), t5[r4(587)].set(s4, []), t5.dummyToNodeForHorizontalAlignment.has(s4) ? t5[r4(769)][r4(447)](s4, t5.idToNodeMap.get(t5.dummyToNodeForHorizontalAlignment.get(s4)[0]).getCenterY()) : t5.nodeToTempPositionMapVertical.set(s4, t5.idToNodeMap[r4(652)](s4).getCenterY())), t5.nodeToRelativeConstraintMapVertical.get(o4).push({ bottom: s4, gap: n5.gap }), t5.nodeToRelativeConstraintMapVertical.get(s4).push({ top: o4, gap: n5.gap });
              }
            });
            else {
              var p3 = /* @__PURE__ */ new Map(), m3 = /* @__PURE__ */ new Map();
              this.constraints[e5(751)][e5(561)](function(t6) {
                var n5 = e5;
                if (t6.left) {
                  var r4 = c3.has(t6.left) ? c3.get(t6.left) : t6.left, i4 = c3.has(t6.right) ? c3.get(t6[n5(763)]) : t6.right;
                  p3.has(r4) ? p3.get(r4).push(i4) : p3[n5(447)](r4, [i4]), p3.has(i4) ? p3.get(i4).push(r4) : p3.set(i4, [r4]);
                } else {
                  var a4 = u3[n5(726)](t6[n5(753)]) ? u3.get(t6.top) : t6.top, o4 = u3.has(t6.bottom) ? u3.get(t6[n5(598)]) : t6.bottom;
                  m3.has(a4) ? m3.get(a4).push(o4) : m3.set(a4, [o4]), m3.has(o4) ? m3[n5(652)](o4).push(a4) : m3[n5(447)](o4, [a4]);
                }
              });
              var h3 = function(t6, n5) {
                var r4 = e5, i4 = [], a4 = [], o4 = new x2(), s4 = /* @__PURE__ */ new Set(), c4 = 0;
                return t6[r4(561)](function(e6, l3) {
                  var u4 = r4;
                  if (!s4.has(l3)) {
                    i4[c4] = [], a4[c4] = false;
                    var d4 = l3;
                    for (o4.push(d4), s4.add(d4), i4[c4].push(d4); o4.length != 0; ) d4 = o4.shift(), n5.has(d4) && (a4[c4] = true), t6.get(d4)[u4(561)](function(e7) {
                      var t7 = u4;
                      s4.has(e7) || (o4.push(e7), s4[t7(887)](e7), i4[c4].push(e7));
                    });
                    c4++;
                  }
                }), { components: i4, isFixed: a4 };
              }, g3 = h3(p3, t5.fixedNodesOnHorizontal);
              this[e5(754)] = g3.components, this[e5(830)] = g3.isFixed;
              var _3 = h3(m3, t5.fixedNodesOnVertical);
              this.componentsOnVertical = _3.components, this[e5(814)] = _3[e5(642)];
            }
          }
        }, S2.prototype[r3(492)] = function() {
          var e5 = r3, t5 = this;
          if (this[e5(826)][e5(843)] && this[e5(826)].fixedNodeConstraint.forEach(function(e6) {
            var n5 = t5.idToNodeMap.get(e6.nodeId);
            n5.displacementX = 0, n5.displacementY = 0;
          }), this.constraints.alignmentConstraint) {
            if (this.constraints.alignmentConstraint[e5(631)]) for (var n4 = this.constraints.alignmentConstraint[e5(631)], i3 = 0; i3 < n4.length; i3++) {
              for (var a3 = 0, o3 = 0; o3 < n4[i3].length; o3++) {
                if (this.fixedNodeSet.has(n4[i3][o3])) {
                  a3 = 0;
                  break;
                }
                a3 += this.idToNodeMap.get(n4[i3][o3]).displacementX;
              }
              for (var s3 = a3 / n4[i3].length, o3 = 0; o3 < n4[i3].length; o3++) this.idToNodeMap.get(n4[i3][o3]).displacementX = s3;
            }
            if (this[e5(826)].alignmentConstraint.horizontal) for (var c3 = this[e5(826)].alignmentConstraint.horizontal, i3 = 0; i3 < c3.length; i3++) {
              for (var u3 = 0, o3 = 0; o3 < c3[i3].length; o3++) {
                if (this.fixedNodeSet.has(c3[i3][o3])) {
                  u3 = 0;
                  break;
                }
                u3 += this.idToNodeMap.get(c3[i3][o3]).displacementY;
              }
              for (var d3 = u3 / c3[i3].length, o3 = 0; o3 < c3[i3][e5(568)]; o3++) this.idToNodeMap.get(c3[i3][o3]).displacementY = d3;
            }
          }
          if (this.constraints[e5(751)]) if (l2.RELAX_MOVEMENT_ON_CONSTRAINTS) this.totalIterations % 10 == 0 && (this.shuffle(this.nodesInRelativeHorizontal), this[e5(739)](this.nodesInRelativeVertical)), this.nodesInRelativeHorizontal.forEach(function(n5) {
            var r4 = e5;
            if (!t5[r4(659)].has(n5)) {
              var i4 = 0;
              i4 = t5.dummyToNodeForVerticalAlignment.has(n5) ? t5.idToNodeMap[r4(652)](t5.dummyToNodeForVerticalAlignment.get(n5)[0])[r4(530)] : t5.idToNodeMap.get(n5)[r4(530)], t5[r4(833)].get(n5).forEach(function(e6) {
                var a4 = r4;
                if (e6.right) {
                  var o4 = t5.nodeToTempPositionMapHorizontal[a4(652)](e6.right) - t5.nodeToTempPositionMapHorizontal[a4(652)](n5) - i4;
                  o4 < e6.gap && (i4 -= e6.gap - o4);
                } else {
                  var o4 = t5[a4(479)].get(n5) - t5.nodeToTempPositionMapHorizontal.get(e6.left) + i4;
                  o4 < e6.gap && (i4 += e6.gap - o4);
                }
              }), t5.nodeToTempPositionMapHorizontal.set(n5, t5.nodeToTempPositionMapHorizontal[r4(652)](n5) + i4), t5.dummyToNodeForVerticalAlignment.has(n5) ? t5.dummyToNodeForVerticalAlignment.get(n5).forEach(function(e6) {
                var n6 = r4;
                t5.idToNodeMap[n6(652)](e6).displacementX = i4;
              }) : t5.idToNodeMap.get(n5).displacementX = i4;
            }
          }), this.nodesInRelativeVertical.forEach(function(n5) {
            var r4 = e5;
            if (!t5.fixedNodesOnHorizontal.has(n5)) {
              var i4 = 0;
              i4 = t5.dummyToNodeForHorizontalAlignment.has(n5) ? t5.idToNodeMap.get(t5.dummyToNodeForHorizontalAlignment.get(n5)[0]).displacementY : t5.idToNodeMap[r4(652)](n5).displacementY, t5.nodeToRelativeConstraintMapVertical.get(n5).forEach(function(e6) {
                var a4 = r4;
                if (e6[a4(598)]) {
                  var o4 = t5.nodeToTempPositionMapVertical.get(e6[a4(598)]) - t5.nodeToTempPositionMapVertical.get(n5) - i4;
                  o4 < e6.gap && (i4 -= e6.gap - o4);
                } else {
                  var o4 = t5.nodeToTempPositionMapVertical.get(n5) - t5[a4(769)].get(e6.top) + i4;
                  o4 < e6.gap && (i4 += e6.gap - o4);
                }
              }), t5.nodeToTempPositionMapVertical.set(n5, t5[r4(769)].get(n5) + i4), t5[r4(816)].has(n5) ? t5[r4(816)].get(n5).forEach(function(e6) {
                var n6 = r4;
                t5[n6(553)].get(e6).displacementY = i4;
              }) : t5[r4(553)].get(n5).displacementY = i4;
            }
          });
          else {
            for (var i3 = 0; i3 < this[e5(754)].length; i3++) {
              var f3 = this.componentsOnHorizontal[i3];
              if (this[e5(830)][i3]) for (var o3 = 0; o3 < f3.length; o3++) this.dummyToNodeForVerticalAlignment.has(f3[o3]) ? this.dummyToNodeForVerticalAlignment[e5(652)](f3[o3]).forEach(function(n5) {
                var r4 = e5;
                t5.idToNodeMap[r4(652)](n5).displacementX = 0;
              }) : this.idToNodeMap[e5(652)](f3[o3]).displacementX = 0;
              else {
                for (var p3 = 0, m3 = 0, o3 = 0; o3 < f3.length; o3++) if (this.dummyToNodeForVerticalAlignment.has(f3[o3])) {
                  var h3 = this[e5(644)].get(f3[o3]);
                  p3 += h3.length * this.idToNodeMap.get(h3[0]).displacementX, m3 += h3[e5(568)];
                } else p3 += this.idToNodeMap.get(f3[o3]).displacementX, m3++;
                for (var g3 = p3 / m3, o3 = 0; o3 < f3[e5(568)]; o3++) this.dummyToNodeForVerticalAlignment.has(f3[o3]) ? this.dummyToNodeForVerticalAlignment.get(f3[o3]).forEach(function(n5) {
                  var r4 = e5;
                  t5[r4(553)].get(n5).displacementX = g3;
                }) : this.idToNodeMap.get(f3[o3]).displacementX = g3;
              }
            }
            for (var i3 = 0; i3 < this.componentsOnVertical[e5(568)]; i3++) {
              var f3 = this.componentsOnVertical[i3];
              if (this.fixedComponentsOnVertical[i3]) for (var o3 = 0; o3 < f3.length; o3++) this.dummyToNodeForHorizontalAlignment.has(f3[o3]) ? this.dummyToNodeForHorizontalAlignment.get(f3[o3]).forEach(function(n5) {
                var r4 = e5;
                t5[r4(553)].get(n5).displacementY = 0;
              }) : this.idToNodeMap[e5(652)](f3[o3]).displacementY = 0;
              else {
                for (var p3 = 0, m3 = 0, o3 = 0; o3 < f3.length; o3++) if (this.dummyToNodeForHorizontalAlignment[e5(726)](f3[o3])) {
                  var h3 = this.dummyToNodeForHorizontalAlignment.get(f3[o3]);
                  p3 += h3.length * this.idToNodeMap.get(h3[0]).displacementY, m3 += h3.length;
                } else p3 += this[e5(553)].get(f3[o3]).displacementY, m3++;
                for (var g3 = p3 / m3, o3 = 0; o3 < f3.length; o3++) this.dummyToNodeForHorizontalAlignment[e5(726)](f3[o3]) ? this[e5(816)].get(f3[o3])[e5(561)](function(e6) {
                  t5.idToNodeMap.get(e6).displacementY = g3;
                }) : this.idToNodeMap.get(f3[o3])[e5(678)] = g3;
              }
            }
          }
        }, S2.prototype.calculateNodesToApplyGravitationTo = function() {
          var e5 = r3, t5 = [], n4, i3 = this.graphManager[e5(441)](), a3 = i3.length, o3;
          for (o3 = 0; o3 < a3; o3++) n4 = i3[o3], n4.updateConnected(), n4[e5(603)] || (t5 = t5.concat(n4.getNodes()));
          return t5;
        }, S2.prototype.createBendpoints = function() {
          var e5 = [];
          e5 = e5.concat(this.graphManager.getAllEdges());
          var t5 = /* @__PURE__ */ new Set(), n4;
          for (n4 = 0; n4 < e5.length; n4++) {
            var r4 = e5[n4];
            if (!t5.has(r4)) {
              var i3 = r4.getSource(), a3 = r4.getTarget();
              if (i3 == a3) r4.getBendpoints().push(new m2()), r4.getBendpoints().push(new m2()), this.createDummyNodesForBendpoints(r4), t5.add(r4);
              else {
                var o3 = [];
                if (o3 = o3.concat(i3.getEdgeListToNode(a3)), o3 = o3.concat(a3.getEdgeListToNode(i3)), !t5.has(o3[0])) {
                  if (o3.length > 1) {
                    var s3;
                    for (s3 = 0; s3 < o3.length; s3++) {
                      var c3 = o3[s3];
                      c3.getBendpoints().push(new m2()), this.createDummyNodesForBendpoints(c3);
                    }
                  }
                  o3.forEach(function(e6) {
                    t5.add(e6);
                  });
                }
              }
            }
            if (t5.size == e5.length) break;
          }
        }, S2.prototype.positionNodesRadially = function(e5) {
          for (var t5 = r3, n4 = new p2(0, 0), i3 = Math.ceil(Math[t5(840)](e5[t5(568)])), a3 = 0, o3 = 0, s3 = 0, c3 = new m2(0, 0), u3 = 0; u3 < e5.length; u3++) {
            u3 % i3 == 0 && (s3 = 0, o3 = a3, u3 != 0 && (o3 += l2.DEFAULT_COMPONENT_SEPERATION), a3 = 0);
            var d3 = e5[u3], h3 = g2.findCenterOfTree(d3);
            n4.x = s3, n4.y = o3, c3 = S2.radialLayout(d3, h3, n4), c3.y > a3 && (a3 = Math[t5(484)](c3.y)), s3 = Math.floor(c3.x + l2.DEFAULT_COMPONENT_SEPERATION);
          }
          this.transform(new m2(f2.WORLD_CENTER_X - c3.x / 2, f2[t5(512)] - c3.y / 2));
        }, S2.radialLayout = function(e5, t5, n4) {
          var i3 = r3, a3 = Math.max(this.maxDiagonalInTree(e5), l2.DEFAULT_RADIAL_SEPARATION);
          S2.branchRadialLayout(t5, null, 0, 359, 0, a3);
          var o3 = y2.calculateBounds(e5), s3 = new b2();
          s3.setDeviceOrgX(o3.getMinX()), s3.setDeviceOrgY(o3.getMinY()), s3.setWorldOrgX(n4.x), s3.setWorldOrgY(n4.y);
          for (var c3 = 0; c3 < e5.length; c3++) e5[c3].transform(s3);
          var u3 = new m2(o3.getMaxX(), o3[i3(689)]());
          return s3.inverseTransformPoint(u3);
        }, S2.branchRadialLayout = function(e5, t5, n4, i3, a3, o3) {
          var s3 = r3, c3 = (i3 - n4 + 1) / 2;
          c3 < 0 && (c3 += 180);
          var l3 = (c3 + n4) % 360 * v2.TWO_PI / 360, u3 = a3 * Math[s3(847)](l3), d3 = a3 * Math.sin(l3);
          e5.setCenter(u3, d3);
          var f3 = [];
          f3 = f3.concat(e5.getEdges());
          var p3 = f3.length;
          t5 != null && p3--;
          for (var m3 = 0, h3 = f3[s3(568)], g3, _3 = e5.getEdgesBetween(t5); _3.length > 1; ) {
            var y3 = _3[0];
            _3.splice(0, 1);
            var b3 = f3.indexOf(y3);
            b3 >= 0 && f3.splice(b3, 1), h3--, p3--;
          }
          g3 = t5 == null ? 0 : (f3.indexOf(_3[0]) + 1) % h3;
          for (var x3 = Math[s3(549)](i3 - n4) / p3, C3 = g3; m3 != p3; C3 = ++C3 % h3) {
            var w2 = f3[C3].getOtherEnd(e5);
            if (w2 != t5) {
              var T2 = (n4 + m3 * x3) % 360, E2 = (T2 + x3) % 360;
              S2[s3(869)](w2, e5, T2, E2, a3 + o3, o3), m3++;
            }
          }
        }, S2.maxDiagonalInTree = function(e5) {
          for (var t5 = r3, n4 = _2.MIN_VALUE, i3 = 0; i3 < e5[t5(568)]; i3++) {
            var a3 = e5[i3].getDiagonal();
            a3 > n4 && (n4 = a3);
          }
          return n4;
        }, S2[r3(459)].calcRepulsionRange = function() {
          var e5 = r3;
          return 2 * (this.level + 1) * this[e5(468)];
        }, S2[r3(459)].groupZeroDegreeMembers = function() {
          var e5 = r3, t5 = this, n4 = {};
          this.memberGroups = {}, this.idToDummyNode = {};
          for (var i3 = [], a3 = this[e5(600)].getAllNodes(), o3 = 0; o3 < a3[e5(568)]; o3++) {
            var c3 = a3[o3], l3 = c3.getParent();
            this[e5(834)](c3) === 0 && (l3.id == null || !this.getToBeTiled(l3)) && i3[e5(752)](c3);
          }
          for (var o3 = 0; o3 < i3.length; o3++) {
            var c3 = i3[o3], u3 = c3.getParent().id;
            n4[u3] === void 0 && (n4[u3] = []), n4[u3] = n4[u3][e5(575)](c3);
          }
          Object.keys(n4).forEach(function(r4) {
            var i4 = e5;
            if (n4[r4].length > 1) {
              var a4 = `DummyCompound_` + r4;
              t5.memberGroups[a4] = n4[r4];
              var o4 = n4[r4][0].getParent(), c4 = new s2(t5.graphManager);
              c4.id = a4, c4.paddingLeft = o4.paddingLeft || 0, c4[i4(711)] = o4.paddingRight || 0, c4.paddingBottom = o4.paddingBottom || 0, c4.paddingTop = o4.paddingTop || 0, t5.idToDummyNode[a4] = c4;
              var l4 = t5[i4(540)]().add(t5.newGraph(), c4), u4 = o4[i4(497)]();
              u4.add(c4);
              for (var d3 = 0; d3 < n4[r4].length; d3++) {
                var f3 = n4[r4][d3];
                u4.remove(f3), l4.add(f3);
              }
            }
          });
        }, S2.prototype[r3(620)] = function() {
          var e5 = r3, t5 = {}, n4 = {};
          this.performDFSOnCompounds();
          for (var i3 = 0; i3 < this[e5(839)].length; i3++) n4[this.compoundOrder[i3].id] = this.compoundOrder[i3], t5[this.compoundOrder[i3].id] = [].concat(this.compoundOrder[i3][e5(497)]().getNodes()), this[e5(600)].remove(this.compoundOrder[i3].getChild()), this.compoundOrder[i3].child = null;
          this[e5(600)].resetAllNodes(), this[e5(733)](t5, n4);
        }, S2.prototype.clearZeroDegreeMembers = function() {
          var e5 = this, t5 = this.tiledZeroDegreePack = [];
          Object.keys(this.memberGroups).forEach(function(n4) {
            var r4 = M, i3 = e5.idToDummyNode[n4];
            if (t5[n4] = e5.tileNodes(e5.memberGroups[n4], i3.paddingLeft + i3[r4(711)]), i3.rect.width = t5[n4].width, i3.rect.height = t5[n4].height, i3.setCenter(t5[n4][r4(701)], t5[n4].centerY), i3.labelMarginLeft = 0, i3.labelMarginTop = 0, l2.NODE_DIMENSIONS_INCLUDE_LABELS) {
              var a3 = i3.rect.width, o3 = i3.rect.height;
              i3.labelWidth && (i3.labelPosHorizontal == `left` ? (i3.rect.x -= i3[r4(626)], i3[r4(714)](a3 + i3.labelWidth), i3.labelMarginLeft = i3.labelWidth) : i3.labelPosHorizontal == `center` && i3[r4(626)] > a3 ? (i3.rect.x -= (i3.labelWidth - a3) / 2, i3[r4(714)](i3.labelWidth), i3[r4(760)] = (i3.labelWidth - a3) / 2) : i3.labelPosHorizontal == `right` && i3.setWidth(a3 + i3.labelWidth)), i3.labelHeight && (i3.labelPosVertical == r4(753) ? (i3.rect.y -= i3[r4(522)], i3[r4(686)](o3 + i3.labelHeight), i3.labelMarginTop = i3.labelHeight) : i3.labelPosVertical == r4(545) && i3.labelHeight > o3 ? (i3.rect.y -= (i3.labelHeight - o3) / 2, i3[r4(686)](i3[r4(522)]), i3.labelMarginTop = (i3[r4(522)] - o3) / 2) : i3.labelPosVertical == `bottom` && i3.setHeight(o3 + i3.labelHeight));
            }
          });
        }, S2.prototype.repopulateCompounds = function() {
          for (var e5 = r3, t5 = this.compoundOrder.length - 1; t5 >= 0; t5--) {
            var n4 = this.compoundOrder[t5], i3 = n4.id, a3 = n4.paddingLeft, o3 = n4.paddingTop, s3 = n4[e5(760)], c3 = n4[e5(710)];
            this.adjustLocations(this.tiledMemberPack[i3], n4.rect.x, n4.rect.y, a3, o3, s3, c3);
          }
        }, S2[r3(459)].repopulateZeroDegreeMembers = function() {
          var e5 = r3, t5 = this, n4 = this.tiledZeroDegreePack;
          Object[e5(588)](n4).forEach(function(r4) {
            var i3 = e5, a3 = t5.idToDummyNode[r4], o3 = a3.paddingLeft, s3 = a3.paddingTop, c3 = a3.labelMarginLeft, l3 = a3.labelMarginTop;
            t5[i3(558)](n4[r4], a3.rect.x, a3.rect.y, o3, s3, c3, l3);
          });
        }, S2.prototype.getToBeTiled = function(e5) {
          var t5 = e5.id;
          if (this.toBeTiled[t5] != null) return this.toBeTiled[t5];
          var n4 = e5.getChild();
          if (n4 == null) return this.toBeTiled[t5] = false, false;
          for (var r4 = n4.getNodes(), i3 = 0; i3 < r4.length; i3++) {
            var a3 = r4[i3];
            if (this.getNodeDegree(a3) > 0) return this.toBeTiled[t5] = false, false;
            if (a3.getChild() == null) {
              this.toBeTiled[a3.id] = false;
              continue;
            }
            if (!this.getToBeTiled(a3)) return this.toBeTiled[t5] = false, false;
          }
          return this.toBeTiled[t5] = true, true;
        }, S2.prototype.getNodeDegree = function(e5) {
          e5.id;
          for (var t5 = e5.getEdges(), n4 = 0, r4 = 0; r4 < t5.length; r4++) {
            var i3 = t5[r4];
            i3.getSource().id !== i3.getTarget().id && (n4 += 1);
          }
          return n4;
        }, S2.prototype.getNodeDegreeWithChildren = function(e5) {
          var t5 = this.getNodeDegree(e5);
          if (e5.getChild() == null) return t5;
          for (var n4 = e5.getChild().getNodes(), r4 = 0; r4 < n4.length; r4++) {
            var i3 = n4[r4];
            t5 += this.getNodeDegreeWithChildren(i3);
          }
          return t5;
        }, S2.prototype.performDFSOnCompounds = function() {
          this.compoundOrder = [], this.fillCompexOrderByDFS(this.graphManager.getRoot().getNodes());
        }, S2[r3(459)].fillCompexOrderByDFS = function(e5) {
          for (var t5 = r3, n4 = 0; n4 < e5.length; n4++) {
            var i3 = e5[n4];
            i3.getChild() != null && this.fillCompexOrderByDFS(i3.getChild().getNodes()), this[t5(730)](i3) && this.compoundOrder.push(i3);
          }
        }, S2.prototype.adjustLocations = function(e5, t5, n4, i3, a3, o3, s3) {
          var c3 = r3;
          t5 += i3 + o3, n4 += a3 + s3;
          for (var l3 = t5, u3 = 0; u3 < e5.rows.length; u3++) {
            var d3 = e5.rows[u3];
            t5 = l3;
            for (var f3 = 0, p3 = 0; p3 < d3.length; p3++) {
              var m3 = d3[p3];
              m3.rect.x = t5, m3.rect.y = n4, t5 += m3.rect.width + e5.horizontalPadding, m3.rect[c3(636)] > f3 && (f3 = m3[c3(817)].height);
            }
            n4 += f3 + e5[c3(586)];
          }
        }, S2.prototype[r3(733)] = function(e5, t5) {
          var n4 = this;
          this.tiledMemberPack = [], Object.keys(e5).forEach(function(r4) {
            var i3 = M, a3 = t5[r4];
            if (n4.tiledMemberPack[r4] = n4[i3(662)](e5[r4], a3.paddingLeft + a3.paddingRight), a3.rect.width = n4.tiledMemberPack[r4].width, a3.rect.height = n4.tiledMemberPack[r4][i3(636)], a3.setCenter(n4[i3(863)][r4].centerX, n4.tiledMemberPack[r4].centerY), a3.labelMarginLeft = 0, a3.labelMarginTop = 0, l2.NODE_DIMENSIONS_INCLUDE_LABELS) {
              var o3 = a3.rect.width, s3 = a3.rect[i3(636)];
              a3[i3(626)] && (a3[i3(578)] == `left` ? (a3.rect.x -= a3.labelWidth, a3.setWidth(o3 + a3.labelWidth), a3.labelMarginLeft = a3.labelWidth) : a3.labelPosHorizontal == `center` && a3.labelWidth > o3 ? (a3.rect.x -= (a3[i3(626)] - o3) / 2, a3.setWidth(a3.labelWidth), a3.labelMarginLeft = (a3[i3(626)] - o3) / 2) : a3.labelPosHorizontal == `right` && a3.setWidth(o3 + a3.labelWidth)), a3.labelHeight && (a3.labelPosVertical == `top` ? (a3.rect.y -= a3[i3(522)], a3.setHeight(s3 + a3[i3(522)]), a3.labelMarginTop = a3.labelHeight) : a3.labelPosVertical == `center` && a3.labelHeight > s3 ? (a3[i3(817)].y -= (a3.labelHeight - s3) / 2, a3.setHeight(a3.labelHeight), a3.labelMarginTop = (a3[i3(522)] - s3) / 2) : a3.labelPosVertical == i3(598) && a3.setHeight(s3 + a3[i3(522)]));
            }
          });
        }, S2.prototype.tileNodes = function(e5, t5) {
          var n4 = r3, i3 = this.tileNodesByFavoringDim(e5, t5, true), a3 = this[n4(717)](e5, t5, false), o3 = this.getOrgRatio(i3);
          return this[n4(617)](a3) < o3 ? a3 : i3;
        }, S2[r3(459)].getOrgRatio = function(e5) {
          var t5 = e5[r3(719)] / e5.height;
          return t5 < 1 && (t5 = 1 / t5), t5;
        }, S2.prototype[r3(805)] = function(e5, t5) {
          var n4 = r3, i3 = l2.TILING_PADDING_VERTICAL, a3 = l2.TILING_PADDING_HORIZONTAL, o3 = e5.length, s3 = 0, c3 = 0, u3 = 0;
          e5[n4(561)](function(e6) {
            s3 += e6[n4(451)](), c3 += e6.getHeight(), e6.getWidth() > u3 && (u3 = e6.getWidth());
          });
          var d3 = s3 / o3, f3 = c3 / o3, p3 = (i3 - a3) ** 2 + 4 * (d3 + a3) * (f3 + i3) * o3, m3 = (a3 - i3 + Math[n4(840)](p3)) / (2 * (d3 + a3)), h3;
          t5 ? (h3 = Math.ceil(m3), h3 == m3 && h3++) : h3 = Math.floor(m3);
          var g3 = h3 * (d3 + a3) - a3;
          return u3 > g3 && (g3 = u3), g3 += a3 * 2, g3;
        }, S2.prototype[r3(717)] = function(e5, t5, n4) {
          var i3 = r3, a3 = l2.TILING_PADDING_VERTICAL, o3 = l2.TILING_PADDING_HORIZONTAL, s3 = l2.TILING_COMPARE_BY, c3 = { rows: [], rowWidth: [], rowHeight: [], width: 0, height: t5, verticalPadding: a3, horizontalPadding: o3, centerX: 0, centerY: 0 };
          s3 && (c3[i3(875)] = this.calcIdealRowWidth(e5, n4));
          var u3 = function(e6) {
            var t6 = i3;
            return e6.rect[t6(719)] * e6.rect.height;
          }, d3 = function(e6, t6) {
            return u3(t6) - u3(e6);
          };
          e5.sort(function(e6, t6) {
            var n5 = d3;
            return c3.idealRowWidth ? (n5 = s3, n5(e6.id, t6.id)) : n5(e6, t6);
          });
          for (var f3 = 0, p3 = 0, m3 = 0; m3 < e5.length; m3++) {
            var h3 = e5[m3];
            f3 += h3.getCenterX(), p3 += h3.getCenterY();
          }
          c3.centerX = f3 / e5[i3(568)], c3.centerY = p3 / e5.length;
          for (var m3 = 0; m3 < e5.length; m3++) {
            var h3 = e5[m3];
            if (c3.rows.length == 0) this.insertNodeToRow(c3, h3, 0, t5);
            else if (this.canAddHorizontal(c3, h3.rect.width, h3.rect.height)) {
              var g3 = c3[i3(706)].length - 1;
              c3.idealRowWidth || (g3 = this.getShortestRowIndex(c3)), this.insertNodeToRow(c3, h3, g3, t5);
            } else this.insertNodeToRow(c3, h3, c3.rows[i3(568)], t5);
            this[i3(901)](c3);
          }
          return c3;
        }, S2.prototype.insertNodeToRow = function(e5, t5, n4, i3) {
          var a3 = r3, o3 = i3;
          n4 == e5.rows.length && (e5.rows[a3(752)]([]), e5.rowWidth.push(o3), e5.rowHeight.push(0));
          var s3 = e5.rowWidth[n4] + t5[a3(817)][a3(719)];
          e5.rows[n4].length > 0 && (s3 += e5.horizontalPadding), e5.rowWidth[n4] = s3, e5.width < s3 && (e5.width = s3);
          var c3 = t5.rect.height;
          n4 > 0 && (c3 += e5.verticalPadding);
          var l3 = 0;
          c3 > e5.rowHeight[n4] && (l3 = e5.rowHeight[n4], e5.rowHeight[n4] = c3, l3 = e5.rowHeight[n4] - l3), e5[a3(636)] += l3, e5.rows[n4].push(t5);
        }, S2[r3(459)].getShortestRowIndex = function(e5) {
          for (var t5 = -1, n4 = Number.MAX_VALUE, r4 = 0; r4 < e5.rows.length; r4++) e5.rowWidth[r4] < n4 && (t5 = r4, n4 = e5.rowWidth[r4]);
          return t5;
        }, S2.prototype.getLongestRowIndex = function(e5) {
          for (var t5 = r3, n4 = -1, i3 = Number.MIN_VALUE, a3 = 0; a3 < e5[t5(706)].length; a3++) e5.rowWidth[a3] > i3 && (n4 = a3, i3 = e5.rowWidth[a3]);
          return n4;
        }, S2.prototype.canAddHorizontal = function(e5, t5, n4) {
          var i3 = r3;
          if (e5.idealRowWidth) {
            var a3 = e5.rows.length - 1;
            return e5.rowWidth[a3] + t5 + e5.horizontalPadding <= e5.idealRowWidth;
          }
          var o3 = this.getShortestRowIndex(e5);
          if (o3 < 0) return true;
          var s3 = e5[i3(857)][o3];
          if (s3 + e5.horizontalPadding + t5 <= e5.width) return true;
          var c3 = 0;
          e5.rowHeight[o3] < n4 && o3 > 0 && (c3 = n4 + e5.verticalPadding - e5.rowHeight[o3]);
          var l3 = e5.width - s3 >= t5 + e5.horizontalPadding ? (e5.height + c3) / (s3 + t5 + e5.horizontalPadding) : (e5.height + c3) / e5.width;
          c3 = n4 + e5[i3(586)];
          var u3 = e5.width < t5 ? (e5[i3(636)] + c3) / t5 : (e5.height + c3) / e5.width;
          return u3 < 1 && (u3 = 1 / u3), l3 < 1 && (l3 = 1 / l3), l3 < u3;
        }, S2.prototype.shiftToLastRow = function(e5) {
          var t5 = r3, n4 = this.getLongestRowIndex(e5), i3 = e5.rowWidth.length - 1, a3 = e5.rows[n4], o3 = a3[a3.length - 1], s3 = o3.width + e5.horizontalPadding;
          if (e5.width - e5[t5(857)][i3] > s3 && n4 != i3) {
            a3.splice(-1, 1), e5[t5(706)][i3].push(o3), e5.rowWidth[n4] = e5[t5(857)][n4] - s3, e5.rowWidth[i3] = e5.rowWidth[i3] + s3, e5.width = e5.rowWidth[instance[t5(469)](e5)];
            for (var c3 = Number.MIN_VALUE, l3 = 0; l3 < a3.length; l3++) a3[l3].height > c3 && (c3 = a3[l3].height);
            n4 > 0 && (c3 += e5.verticalPadding);
            var u3 = e5.rowHeight[n4] + e5.rowHeight[i3];
            e5.rowHeight[n4] = c3, e5.rowHeight[i3] < o3[t5(636)] + e5.verticalPadding && (e5.rowHeight[i3] = o3.height + e5.verticalPadding);
            var d3 = e5.rowHeight[n4] + e5.rowHeight[i3];
            e5.height += d3 - u3, this[t5(901)](e5);
          }
        }, S2.prototype.tilingPreLayout = function() {
          var e5 = r3;
          l2.TILE && (this.groupZeroDegreeMembers(), this[e5(620)](), this.clearZeroDegreeMembers());
        }, S2.prototype.tilingPostLayout = function() {
          l2[r3(684)] && (this.repopulateZeroDegreeMembers(), this.repopulateCompounds());
        }, S2.prototype.reduceTrees = function() {
          for (var e5 = r3, t5 = [], n4 = true, i3; n4; ) {
            var a3 = this.graphManager.getAllNodes(), o3 = [];
            n4 = false;
            for (var s3 = 0; s3 < a3.length; s3++) if (i3 = a3[s3], i3[e5(693)]().length == 1 && !i3[e5(693)]()[0][e5(628)] && i3.getChild() == null) {
              if (l2.PURE_INCREMENTAL) {
                var c3 = i3[e5(693)]()[0].getOtherEnd(i3), u3 = new h2(i3.getCenterX() - c3.getCenterX(), i3.getCenterY() - c3.getCenterY());
                o3.push([i3, i3.getEdges()[0], i3.getOwner(), u3]);
              } else o3.push([i3, i3.getEdges()[0], i3.getOwner()]);
              n4 = true;
            }
            if (n4 == 1) {
              for (var d3 = [], f3 = 0; f3 < o3.length; f3++) o3[f3][0][e5(693)]().length == 1 && (d3.push(o3[f3]), o3[f3][0].getOwner().remove(o3[f3][0]));
              t5.push(d3), this[e5(600)][e5(729)](), this.graphManager.resetAllEdges();
            }
          }
          this.prunedNodesAll = t5;
        }, S2.prototype.growTree = function(e5) {
          for (var t5 = r3, n4 = e5[e5.length - 1], i3, a3 = 0; a3 < n4.length; a3++) i3 = n4[a3], this.findPlaceforPrunedNode(i3), i3[2].add(i3[0]), i3[2][t5(887)](i3[1], i3[1].source, i3[1].target);
          e5.splice(e5.length - 1, 1), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
        }, S2.prototype.findPlaceforPrunedNode = function(e5) {
          var t5 = r3, n4, i3, a3 = e5[0];
          if (i3 = a3 == e5[1].source ? e5[1][t5(582)] : e5[1][t5(797)], l2.PURE_INCREMENTAL) a3.setCenter(i3.getCenterX() + e5[3].getWidth(), i3[t5(601)]() + e5[3][t5(810)]());
          else {
            var o3 = i3.startX, s3 = i3.finishX, c3 = i3.startY, u3 = i3.finishY, f3 = [0, 0, 0, 0];
            if (c3 > 0) for (var p3 = o3; p3 <= s3; p3++) f3[0] += this.grid[p3][c3 - 1].length + this.grid[p3][c3].length - 1;
            if (s3 < this.grid.length - 1) for (var p3 = c3; p3 <= u3; p3++) f3[1] += this.grid[s3 + 1][p3].length + this[t5(453)][s3][p3].length - 1;
            if (u3 < this.grid[0].length - 1) for (var p3 = o3; p3 <= s3; p3++) f3[2] += this.grid[p3][u3 + 1][t5(568)] + this.grid[p3][u3].length - 1;
            if (o3 > 0) for (var p3 = c3; p3 <= u3; p3++) f3[3] += this.grid[o3 - 1][p3].length + this.grid[o3][p3][t5(568)] - 1;
            for (var m3 = _2.MAX_VALUE, h3, g3, v3 = 0; v3 < f3.length; v3++) f3[v3] < m3 ? (m3 = f3[v3], h3 = 1, g3 = v3) : f3[v3] == m3 && h3++;
            if (h3 == 3 && m3 == 0) f3[0] == 0 && f3[1] == 0 && f3[2] == 0 ? n4 = 1 : f3[0] == 0 && f3[1] == 0 && f3[3] == 0 ? n4 = 0 : f3[0] == 0 && f3[2] == 0 && f3[3] == 0 ? n4 = 3 : f3[1] == 0 && f3[2] == 0 && f3[3] == 0 && (n4 = 2);
            else if (h3 == 2 && m3 == 0) {
              var y3 = Math.floor(Math[t5(537)]() * 2);
              n4 = f3[0] == 0 && f3[1] == 0 ? y3 == 0 ? 0 : 1 : f3[0] == 0 && f3[2] == 0 ? y3 == 0 ? 0 : 2 : f3[0] == 0 && f3[3] == 0 ? y3 == 0 ? 0 : 3 : f3[1] == 0 && f3[2] == 0 ? y3 == 0 ? 1 : 2 : f3[1] == 0 && f3[3] == 0 ? y3 == 0 ? 1 : 3 : y3 == 0 ? 2 : 3;
            } else if (h3 == 4 && m3 == 0) {
              var y3 = Math.floor(Math[t5(537)]() * 4);
              n4 = y3;
            } else n4 = g3;
            n4 == 0 ? a3.setCenter(i3.getCenterX(), i3.getCenterY() - i3.getHeight() / 2 - d2.DEFAULT_EDGE_LENGTH - a3[t5(810)]() / 2) : n4 == 1 ? a3.setCenter(i3.getCenterX() + i3.getWidth() / 2 + d2.DEFAULT_EDGE_LENGTH + a3.getWidth() / 2, i3.getCenterY()) : n4 == 2 ? a3.setCenter(i3.getCenterX(), i3.getCenterY() + i3.getHeight() / 2 + d2.DEFAULT_EDGE_LENGTH + a3[t5(810)]() / 2) : a3.setCenter(i3[t5(462)]() - i3.getWidth() / 2 - d2.DEFAULT_EDGE_LENGTH - a3.getWidth() / 2, i3.getCenterY());
          }
        }, e4.exports = S2;
      }, 991: (e4, t4, n3) => {
        var r3 = M, i2 = n3(551).FDLayoutNode, a2 = n3(551).IMath;
        function o2(e5, t5, n4, r4) {
          i2.call(this, e5, t5, n4, r4);
        }
        for (var s2 in o2.prototype = Object.create(i2.prototype), i2) o2[s2] = i2[s2];
        o2.prototype.calculateDisplacement = function() {
          var e5 = M, t5 = this.graphManager[e5(876)]();
          this[e5(497)]() != null && this[e5(458)] ? (this.displacementX += t5.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.fixedNodeWeight, this.displacementY += t5.coolingFactor * (this.springForceY + this.repulsionForceY + this[e5(621)]) / this[e5(458)]) : (this.displacementX += t5.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren, this.displacementY += t5[e5(639)] * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren), Math.abs(this[e5(530)]) > t5[e5(639)] * t5.maxNodeDisplacement && (this.displacementX = t5.coolingFactor * t5.maxNodeDisplacement * a2[e5(437)](this.displacementX)), Math.abs(this.displacementY) > t5.coolingFactor * t5.maxNodeDisplacement && (this.displacementY = t5[e5(639)] * t5.maxNodeDisplacement * a2.sign(this.displacementY)), this.child && this.child.getNodes().length > 0 && this.propogateDisplacementToChildren(this.displacementX, this.displacementY);
        }, o2.prototype[r3(748)] = function(e5, t5) {
          for (var n4 = this.getChild().getNodes(), r4, i3 = 0; i3 < n4.length; i3++) r4 = n4[i3], r4.getChild() == null ? (r4.displacementX += e5, r4.displacementY += t5) : r4.propogateDisplacementToChildren(e5, t5);
        }, o2[r3(459)][r3(772)] = function() {
          var e5 = r3, t5 = this.graphManager.getLayout();
          (this.child == null || this.child[e5(572)]()[e5(568)] == 0) && (this.moveBy(this.displacementX, this.displacementY), t5.totalDisplacement += Math.abs(this.displacementX) + Math.abs(this.displacementY)), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0;
        }, o2.prototype.setPred1 = function(e5) {
          this.pred1 = e5;
        }, o2.prototype[r3(604)] = function() {
          return pred1;
        }, o2.prototype.getPred2 = function() {
          return pred2;
        }, o2.prototype.setNext = function(e5) {
          this.next = e5;
        }, o2.prototype.getNext = function() {
          return next;
        }, o2.prototype.setProcessed = function(e5) {
          this.processed = e5;
        }, o2[r3(459)].isProcessed = function() {
          return processed;
        }, e4.exports = o2;
      }, 902: (e4, t4, n3) => {
        var r3 = M;
        function i2(e5) {
          var t5 = M;
          if (Array[t5(523)](e5)) {
            for (var n4 = 0, r4 = Array(e5[t5(568)]); n4 < e5.length; n4++) r4[n4] = e5[n4];
            return r4;
          } else return Array[t5(723)](e5);
        }
        var a2 = n3(806), o2 = n3(551).LinkedList, s2 = n3(551).Matrix, c2 = n3(551).SVD;
        function l2() {
        }
        l2.handleConstraints = function(e5) {
          var t5 = M, n4 = {};
          n4[t5(843)] = e5.constraints.fixedNodeConstraint, n4.alignmentConstraint = e5.constraints.alignmentConstraint, n4.relativePlacementConstraint = e5[t5(826)].relativePlacementConstraint;
          for (var r4 = /* @__PURE__ */ new Map(), l3 = /* @__PURE__ */ new Map(), u2 = [], d2 = [], f2 = e5[t5(480)](), p2 = 0, m2 = 0; m2 < f2.length; m2++) {
            var h2 = f2[m2];
            h2.getChild() ?? (l3.set(h2.id, p2++), u2.push(h2.getCenterX()), d2.push(h2[t5(601)]()), r4.set(h2.id, h2));
          }
          n4[t5(751)] && n4.relativePlacementConstraint.forEach(function(e6) {
            var n5 = t5;
            !e6.gap && e6[n5(551)] != 0 && (e6.left ? e6[n5(551)] = a2.DEFAULT_EDGE_LENGTH + r4.get(e6.left).getWidth() / 2 + r4.get(e6[n5(763)]).getWidth() / 2 : e6[n5(551)] = a2.DEFAULT_EDGE_LENGTH + r4[n5(652)](e6.top).getHeight() / 2 + r4[n5(652)](e6.bottom).getHeight() / 2);
          });
          var g2 = function(e6, t6) {
            return { x: e6.x - t6.x, y: e6.y - t6.y };
          }, _2 = function(e6) {
            var n5 = t5, r5 = 0, i3 = 0;
            return e6.forEach(function(e7) {
              r5 += u2[l3[M(652)](e7)], i3 += d2[l3.get(e7)];
            }), { x: r5 / e6[n5(708)], y: i3 / e6.size };
          }, v2 = function(e6, n5, r5, a3, s3) {
            var c3 = t5;
            function f3(e7, t6) {
              var n6 = M, r6 = new Set(e7), i3 = true, a4 = false, o3 = void 0;
              try {
                for (var s4 = t6[Symbol.iterator](), c4; !(i3 = (c4 = s4[n6(820)]()).done); i3 = true) {
                  var l4 = c4.value;
                  r6.add(l4);
                }
              } catch (e8) {
                a4 = true, o3 = e8;
              } finally {
                try {
                  !i3 && s4.return && s4.return();
                } finally {
                  if (a4) throw o3;
                }
              }
              return r6;
            }
            var p3 = /* @__PURE__ */ new Map();
            e6.forEach(function(e7, t6) {
              p3.set(t6, 0);
            }), e6[c3(561)](function(e7, t6) {
              e7.forEach(function(e8) {
                p3[M(447)](e8.id, p3.get(e8.id) + 1);
              });
            });
            var m3 = /* @__PURE__ */ new Map(), h3 = /* @__PURE__ */ new Map(), g3 = new o2();
            p3.forEach(function(e7, t6) {
              var i3 = c3;
              e7 == 0 ? (g3.push(t6), r5 || (n5 == `horizontal` ? m3.set(t6, l3[i3(726)](t6) ? u2[l3.get(t6)] : a3[i3(652)](t6)) : m3.set(t6, l3[i3(726)](t6) ? d2[l3.get(t6)] : a3.get(t6)))) : m3.set(t6, -1 / 0), r5 && h3.set(t6, /* @__PURE__ */ new Set([t6]));
            }), r5 && s3.forEach(function(e7) {
              var t6 = c3, i3 = [];
              if (e7.forEach(function(e8) {
                r5.has(e8) && i3.push(e8);
              }), i3[t6(568)] > 0) {
                var o3 = 0;
                i3.forEach(function(e8) {
                  var r6 = t6;
                  n5 == `horizontal` ? (m3.set(e8, l3.has(e8) ? u2[l3.get(e8)] : a3.get(e8)), o3 += m3.get(e8)) : (m3.set(e8, l3.has(e8) ? d2[l3.get(e8)] : a3[r6(652)](e8)), o3 += m3.get(e8));
                }), o3 /= i3.length, e7[t6(561)](function(e8) {
                  r5.has(e8) || m3.set(e8, o3);
                });
              } else {
                var s4 = 0;
                e7.forEach(function(e8) {
                  var r6 = t6;
                  n5 == `horizontal` ? s4 += l3[r6(726)](e8) ? u2[l3.get(e8)] : a3.get(e8) : s4 += l3.has(e8) ? d2[l3[r6(652)](e8)] : a3[r6(652)](e8);
                }), s4 /= e7.length, e7.forEach(function(e8) {
                  m3.set(e8, s4);
                });
              }
            });
            for (var _3 = function() {
              var t6 = g3.shift();
              e6.get(t6).forEach(function(e7) {
                var i3 = M;
                if (m3[i3(652)](e7.id) < m3.get(t6) + e7.gap) if (r5 && r5.has(e7.id)) {
                  var o3 = void 0;
                  if (o3 = n5 == i3(645) ? l3.has(e7.id) ? u2[l3.get(e7.id)] : a3.get(e7.id) : l3[i3(726)](e7.id) ? d2[l3.get(e7.id)] : a3.get(e7.id), m3.set(e7.id, o3), o3 < m3.get(t6) + e7.gap) {
                    var s4 = m3.get(t6) + e7.gap - o3;
                    h3[i3(652)](t6).forEach(function(e8) {
                      m3[i3(447)](e8, m3.get(e8) - s4);
                    });
                  }
                } else m3.set(e7.id, m3.get(t6) + e7[i3(551)]);
                p3.set(e7.id, p3.get(e7.id) - 1), p3.get(e7.id) == 0 && g3.push(e7.id), r5 && h3.set(e7.id, f3(h3.get(t6), h3.get(e7.id)));
              });
            }; g3.length != 0; ) _3();
            if (r5) {
              var v3 = /* @__PURE__ */ new Set();
              e6.forEach(function(e7, t6) {
                e7.length == 0 && v3.add(t6);
              });
              var y3 = [];
              h3.forEach(function(e7, t6) {
                var n6 = c3;
                if (v3.has(t6)) {
                  var a4 = false, o3 = true, s4 = false, l4 = void 0;
                  try {
                    for (var u3 = e7[Symbol.iterator](), d3; !(o3 = (d3 = u3.next()).done); o3 = true) {
                      var f4 = d3.value;
                      r5.has(f4) && (a4 = true);
                    }
                  } catch (e8) {
                    s4 = true, l4 = e8;
                  } finally {
                    try {
                      !o3 && u3.return && u3[n6(555)]();
                    } finally {
                      if (s4) throw l4;
                    }
                  }
                  if (!a4) {
                    var p4 = false, m4 = void 0;
                    y3.forEach(function(t7, r6) {
                      t7[n6(726)]([].concat(i2(e7))[0]) && (p4 = true, m4 = r6);
                    }), p4 ? e7[n6(561)](function(e8) {
                      y3[m4].add(e8);
                    }) : y3.push(new Set(e7));
                  }
                }
              }), y3.forEach(function(e7, t6) {
                var r6 = c3, i3 = 1 / 0, o3 = 1 / 0, s4 = -1 / 0, f4 = -1 / 0, p4 = true, h4 = false, g4 = void 0;
                try {
                  for (var _4 = e7[Symbol.iterator](), v4; !(p4 = (v4 = _4[r6(820)]())[r6(838)]); p4 = true) {
                    var y4 = v4.value, b3 = void 0;
                    b3 = n5 == `horizontal` ? l3.has(y4) ? u2[l3.get(y4)] : a3.get(y4) : l3.has(y4) ? d2[l3[r6(652)](y4)] : a3[r6(652)](y4);
                    var x3 = m3.get(y4);
                    b3 < i3 && (i3 = b3), b3 > s4 && (s4 = b3), x3 < o3 && (o3 = x3), x3 > f4 && (f4 = x3);
                  }
                } catch (e8) {
                  h4 = true, g4 = e8;
                } finally {
                  try {
                    !p4 && _4.return && _4[r6(555)]();
                  } finally {
                    if (h4) throw g4;
                  }
                }
                var S3 = (i3 + s4) / 2 - (o3 + f4) / 2, C3 = true, w3 = false, T3 = void 0;
                try {
                  for (var E3 = e7[Symbol.iterator](), D3; !(C3 = (D3 = E3.next()).done); C3 = true) {
                    var O3 = D3[r6(655)];
                    m3.set(O3, m3.get(O3) + S3);
                  }
                } catch (e8) {
                  w3 = true, T3 = e8;
                } finally {
                  try {
                    !C3 && E3.return && E3.return();
                  } finally {
                    if (w3) throw T3;
                  }
                }
              });
            }
            return m3;
          }, y2 = function(e6) {
            var t6 = 0, n5 = 0, r5 = 0, i3 = 0;
            if (e6.forEach(function(e7) {
              e7.left ? u2[l3.get(e7.left)] - u2[l3.get(e7.right)] >= 0 ? t6++ : n5++ : d2[l3.get(e7.top)] - d2[l3.get(e7.bottom)] >= 0 ? r5++ : i3++;
            }), t6 > n5 && r5 > i3) for (var a3 = 0; a3 < l3.size; a3++) u2[a3] = -1 * u2[a3], d2[a3] = -1 * d2[a3];
            else if (t6 > n5) for (var o3 = 0; o3 < l3.size; o3++) u2[o3] = -1 * u2[o3];
            else if (r5 > i3) for (var s3 = 0; s3 < l3.size; s3++) d2[s3] = -1 * d2[s3];
          }, b2 = function(e6) {
            var t6 = [], n5 = new o2(), r5 = /* @__PURE__ */ new Set(), i3 = 0;
            return e6.forEach(function(a3, o3) {
              var s3 = M;
              if (!r5.has(o3)) {
                t6[i3] = [];
                var c3 = o3;
                for (n5.push(c3), r5.add(c3), t6[i3].push(c3); n5.length != 0; ) c3 = n5[s3(449)](), e6.get(c3).forEach(function(e7) {
                  var a4 = s3;
                  r5.has(e7.id) || (n5.push(e7.id), r5.add(e7.id), t6[i3][a4(752)](e7.id));
                });
                i3++;
              }
            }), t6;
          }, x2 = function(e6) {
            var n5 = t5, r5 = /* @__PURE__ */ new Map();
            return e6[n5(561)](function(e7, t6) {
              r5[n5(447)](t6, []);
            }), e6.forEach(function(e7, t6) {
              var i3 = n5;
              e7[i3(561)](function(e8) {
                var n6 = i3;
                r5[n6(652)](t6).push(e8), r5.get(e8.id).push({ id: t6, gap: e8[n6(551)], direction: e8[n6(465)] });
              });
            }), r5;
          }, S2 = function(e6) {
            var t6 = /* @__PURE__ */ new Map();
            return e6.forEach(function(e7, n5) {
              t6.set(n5, []);
            }), e6.forEach(function(e7, n5) {
              e7.forEach(function(e8) {
                var r5 = M;
                t6.get(e8.id)[r5(752)]({ id: n5, gap: e8.gap, direction: e8[r5(465)] });
              });
            }), t6;
          }, C2 = [], w2 = [], T2 = false, E2 = false, D2 = /* @__PURE__ */ new Set(), O2 = /* @__PURE__ */ new Map(), k2 = /* @__PURE__ */ new Map(), A2 = [];
          if (n4.fixedNodeConstraint && n4.fixedNodeConstraint[t5(561)](function(e6) {
            D2.add(e6.nodeId);
          }), n4.relativePlacementConstraint && (n4.relativePlacementConstraint.forEach(function(e6) {
            var n5 = t5;
            e6.left ? (O2.has(e6.left) ? O2[n5(652)](e6.left).push({ id: e6.right, gap: e6.gap, direction: `horizontal` }) : O2.set(e6[n5(597)], [{ id: e6.right, gap: e6.gap, direction: `horizontal` }]), O2[n5(726)](e6.right) || O2.set(e6.right, [])) : (O2.has(e6.top) ? O2.get(e6.top)[n5(752)]({ id: e6.bottom, gap: e6[n5(551)], direction: `vertical` }) : O2.set(e6.top, [{ id: e6.bottom, gap: e6.gap, direction: `vertical` }]), O2.has(e6.bottom) || O2.set(e6.bottom, []));
          }), k2 = x2(O2), A2 = b2(k2)), a2.TRANSFORM_ON_CONSTRAINT_HANDLING) {
            if (n4.fixedNodeConstraint && n4.fixedNodeConstraint.length > 1) n4.fixedNodeConstraint.forEach(function(e6, n5) {
              var r5 = t5;
              C2[n5] = [e6.position.x, e6[r5(696)].y], w2[n5] = [u2[l3.get(e6[r5(663)])], d2[l3.get(e6.nodeId)]];
            }), T2 = true;
            else if (n4.alignmentConstraint) (function() {
              var e6 = t5, r5 = 0;
              if (n4.alignmentConstraint.vertical) {
                for (var a3 = n4.alignmentConstraint.vertical, o3 = function(e7) {
                  var t6 = /* @__PURE__ */ new Set();
                  a3[e7].forEach(function(e8) {
                    t6.add(e8);
                  });
                  var n5 = new Set([].concat(i2(t6)).filter(function(e8) {
                    return D2.has(e8);
                  })), o4 = void 0;
                  o4 = n5.size > 0 ? u2[l3.get(n5.values().next().value)] : _2(t6).x, a3[e7].forEach(function(e8) {
                    C2[r5] = [o4, d2[l3.get(e8)]], w2[r5] = [u2[l3.get(e8)], d2[l3.get(e8)]], r5++;
                  });
                }, s3 = 0; s3 < a3.length; s3++) o3(s3);
                T2 = true;
              }
              if (n4.alignmentConstraint.horizontal) {
                for (var c3 = n4[e6(688)].horizontal, f3 = function(t6) {
                  var n5 = e6, a4 = /* @__PURE__ */ new Set();
                  c3[t6].forEach(function(e7) {
                    a4.add(e7);
                  });
                  var o4 = new Set([][n5(575)](i2(a4)).filter(function(e7) {
                    return D2[n5(726)](e7);
                  })), s4 = void 0;
                  s4 = o4[n5(708)] > 0 ? u2[l3.get(o4.values().next().value)] : _2(a4).y, c3[t6][n5(561)](function(e7) {
                    var t7 = n5;
                    C2[r5] = [u2[l3.get(e7)], s4], w2[r5] = [u2[l3[t7(652)](e7)], d2[l3.get(e7)]], r5++;
                  });
                }, p3 = 0; p3 < c3.length; p3++) f3(p3);
                T2 = true;
              }
              n4[e6(751)] && (E2 = true);
            })();
            else if (n4.relativePlacementConstraint) {
              for (var j2 = 0, N2 = 0, P2 = 0; P2 < A2.length; P2++) A2[P2].length > j2 && (j2 = A2[P2].length, N2 = P2);
              if (j2 < k2.size / 2) y2(n4.relativePlacementConstraint), T2 = false, E2 = false;
              else {
                var F2 = /* @__PURE__ */ new Map(), I2 = /* @__PURE__ */ new Map(), L2 = [];
                A2[N2].forEach(function(e6) {
                  O2.get(e6).forEach(function(t6) {
                    var n5 = M;
                    t6[n5(465)] == n5(645) ? (F2.has(e6) ? F2[n5(652)](e6).push(t6) : F2.set(e6, [t6]), F2.has(t6.id) || F2.set(t6.id, []), L2.push({ left: e6, right: t6.id })) : (I2.has(e6) ? I2.get(e6).push(t6) : I2.set(e6, [t6]), I2.has(t6.id) || I2.set(t6.id, []), L2[n5(752)]({ top: e6, bottom: t6.id }));
                  });
                }), y2(L2), E2 = false;
                var ee2 = v2(F2, `horizontal`), te2 = v2(I2, `vertical`);
                A2[N2].forEach(function(e6, n5) {
                  var r5 = t5;
                  w2[n5] = [u2[l3.get(e6)], d2[l3.get(e6)]], C2[n5] = [], ee2.has(e6) ? C2[n5][0] = ee2[r5(652)](e6) : C2[n5][0] = u2[l3.get(e6)], te2.has(e6) ? C2[n5][1] = te2.get(e6) : C2[n5][1] = d2[l3.get(e6)];
                }), T2 = true;
              }
            }
            if (T2) {
              for (var R2 = void 0, z2 = s2.transpose(C2), B2 = s2[t5(698)](w2), V2 = 0; V2 < z2.length; V2++) z2[V2] = s2.multGamma(z2[V2]), B2[V2] = s2.multGamma(B2[V2]);
              var H2 = s2.multMat(z2, s2.transpose(B2)), U2 = c2[t5(750)](H2);
              R2 = s2[t5(851)](U2.V, s2.transpose(U2.U));
              for (var W2 = 0; W2 < l3.size; W2++) {
                var ne2 = [u2[W2], d2[W2]], re2 = [R2[0][0], R2[1][0]], ie2 = [R2[0][1], R2[1][1]];
                u2[W2] = s2.dotProduct(ne2, re2), d2[W2] = s2.dotProduct(ne2, ie2);
              }
              E2 && y2(n4[t5(751)]);
            }
          }
          if (a2[t5(676)]) {
            if (n4.fixedNodeConstraint && n4.fixedNodeConstraint.length > 0) {
              var G2 = { x: 0, y: 0 };
              n4.fixedNodeConstraint.forEach(function(e6, t6) {
                var n5 = { x: u2[l3.get(e6.nodeId)], y: d2[l3.get(e6.nodeId)] }, r5 = e6.position, i3 = g2(r5, n5);
                G2.x += i3.x, G2.y += i3.y;
              }), G2.x /= n4.fixedNodeConstraint.length, G2.y /= n4.fixedNodeConstraint.length, u2.forEach(function(e6, t6) {
                u2[t6] += G2.x;
              }), d2.forEach(function(e6, t6) {
                d2[t6] += G2.y;
              }), n4.fixedNodeConstraint.forEach(function(e6) {
                var n5 = t5;
                u2[l3[n5(652)](e6.nodeId)] = e6.position.x, d2[l3.get(e6[n5(663)])] = e6[n5(696)].y;
              });
            }
            if (n4.alignmentConstraint) {
              if (n4.alignmentConstraint[t5(631)]) for (var K2 = n4.alignmentConstraint[t5(631)], q2 = function(e6) {
                var n5 = t5, r5 = /* @__PURE__ */ new Set();
                K2[e6].forEach(function(e7) {
                  r5.add(e7);
                });
                var a3 = new Set([][n5(575)](i2(r5))[n5(521)](function(e7) {
                  return D2.has(e7);
                })), o3 = void 0;
                o3 = a3[n5(708)] > 0 ? u2[l3.get(a3.values().next().value)] : _2(r5).x, r5.forEach(function(e7) {
                  D2[n5(726)](e7) || (u2[l3.get(e7)] = o3);
                });
              }, ae2 = 0; ae2 < K2.length; ae2++) q2(ae2);
              if (n4.alignmentConstraint.horizontal) for (var J2 = n4[t5(688)].horizontal, Y2 = function(e6) {
                var n5 = t5, r5 = /* @__PURE__ */ new Set();
                J2[e6].forEach(function(e7) {
                  r5.add(e7);
                });
                var a3 = new Set([][n5(575)](i2(r5)).filter(function(e7) {
                  return D2.has(e7);
                })), o3 = void 0;
                o3 = a3.size > 0 ? d2[l3.get(a3.values().next().value)] : _2(r5).y, r5.forEach(function(e7) {
                  D2.has(e7) || (d2[l3.get(e7)] = o3);
                });
              }, X2 = 0; X2 < J2.length; X2++) Y2(X2);
            }
            n4.relativePlacementConstraint && (function() {
              var e6 = t5, r5 = /* @__PURE__ */ new Map(), i3 = /* @__PURE__ */ new Map(), a3 = /* @__PURE__ */ new Map(), o3 = /* @__PURE__ */ new Map(), s3 = /* @__PURE__ */ new Map(), c3 = /* @__PURE__ */ new Map(), f3 = /* @__PURE__ */ new Set(), p3 = /* @__PURE__ */ new Set();
              if (D2.forEach(function(e7) {
                f3.add(e7), p3.add(e7);
              }), n4.alignmentConstraint) {
                if (n4.alignmentConstraint.vertical) for (var m3 = n4[e6(688)].vertical, h3 = function(t6) {
                  var n5 = e6;
                  a3.set(`dummy` + t6, []), m3[t6].forEach(function(e7) {
                    r5[M(447)](e7, `dummy` + t6), a3.get(`dummy` + t6).push(e7), D2.has(e7) && f3.add(`dummy` + t6);
                  }), s3[n5(447)](`dummy` + t6, u2[l3.get(m3[t6][0])]);
                }, g3 = 0; g3 < m3.length; g3++) h3(g3);
                if (n4.alignmentConstraint.horizontal) for (var _3 = n4.alignmentConstraint.horizontal, y3 = function(t6) {
                  var n5 = e6;
                  o3[n5(447)](n5(488) + t6, []), _3[t6].forEach(function(e7) {
                    var r6 = n5;
                    i3.set(e7, `dummy` + t6), o3.get(r6(488) + t6).push(e7), D2.has(e7) && p3.add(`dummy` + t6);
                  }), c3.set(`dummy` + t6, d2[l3.get(_3[t6][0])]);
                }, C3 = 0; C3 < _3.length; C3++) y3(C3);
              }
              var w3 = /* @__PURE__ */ new Map(), T3 = /* @__PURE__ */ new Map(), E3 = function(t6) {
                var n5 = e6;
                O2.get(t6)[n5(561)](function(e7) {
                  var a4 = n5, o4 = void 0, s4 = void 0;
                  e7[a4(465)] == `horizontal` ? (o4 = r5.get(t6) ? r5.get(t6) : t6, s4 = r5.get(e7.id) ? { id: r5.get(e7.id), gap: e7.gap, direction: e7.direction } : e7, w3.has(o4) ? w3.get(o4).push(s4) : w3.set(o4, [s4]), w3.has(s4.id) || w3.set(s4.id, [])) : (o4 = i3[a4(652)](t6) ? i3.get(t6) : t6, s4 = i3.get(e7.id) ? { id: i3.get(e7.id), gap: e7[a4(551)], direction: e7.direction } : e7, T3.has(o4) ? T3.get(o4).push(s4) : T3.set(o4, [s4]), T3.has(s4.id) || T3[a4(447)](s4.id, []));
                });
              }, k3 = true, A3 = false, j3 = void 0;
              try {
                for (var N3 = O2.keys()[Symbol.iterator](), P3; !(k3 = (P3 = N3.next()).done); k3 = true) {
                  var F3 = P3.value;
                  E3(F3);
                }
              } catch (e7) {
                A3 = true, j3 = e7;
              } finally {
                try {
                  !k3 && N3.return && N3.return();
                } finally {
                  if (A3) throw j3;
                }
              }
              var I3 = x2(w3), L3 = x2(T3), ee3 = b2(I3), te3 = b2(L3), R3 = S2(w3), z3 = S2(T3), B3 = [], V3 = [];
              ee3.forEach(function(e7, t6) {
                B3[t6] = [], e7.forEach(function(e8) {
                  var n5 = M;
                  R3.get(e8).length == 0 && B3[t6][n5(752)](e8);
                });
              }), te3.forEach(function(e7, t6) {
                V3[t6] = [], e7.forEach(function(e8) {
                  var n5 = M;
                  z3.get(e8).length == 0 && V3[t6][n5(752)](e8);
                });
              });
              var H3 = v2(w3, `horizontal`, f3, s3, B3), U3 = v2(T3, `vertical`, p3, c3, V3), W3 = function(e7) {
                a3.get(e7) ? a3.get(e7).forEach(function(t6) {
                  u2[l3.get(t6)] = H3.get(e7);
                }) : u2[l3.get(e7)] = H3.get(e7);
              }, ne3 = true, re3 = false, ie3 = void 0;
              try {
                for (var G3 = H3.keys()[Symbol.iterator](), K3; !(ne3 = (K3 = G3[e6(820)]()).done); ne3 = true) {
                  var q3 = K3.value;
                  W3(q3);
                }
              } catch (e7) {
                re3 = true, ie3 = e7;
              } finally {
                try {
                  !ne3 && G3.return && G3.return();
                } finally {
                  if (re3) throw ie3;
                }
              }
              var ae3 = function(e7) {
                o3.get(e7) ? o3.get(e7).forEach(function(t6) {
                  d2[l3.get(t6)] = U3.get(e7);
                }) : d2[l3.get(e7)] = U3.get(e7);
              }, J3 = true, Y3 = false, X3 = void 0;
              try {
                for (var oe3 = U3[e6(588)]()[Symbol.iterator](), se3; !(J3 = (se3 = oe3.next()).done); J3 = true) {
                  var q3 = se3[e6(655)];
                  ae3(q3);
                }
              } catch (e7) {
                Y3 = true, X3 = e7;
              } finally {
                try {
                  !J3 && oe3.return && oe3.return();
                } finally {
                  if (Y3) throw X3;
                }
              }
            })();
          }
          for (var oe2 = 0; oe2 < f2.length; oe2++) {
            var se2 = f2[oe2];
            se2.getChild() ?? se2.setCenter(u2[l3.get(se2.id)], d2[l3.get(se2.id)]);
          }
        }, e4[r3(513)] = l2;
      }, 551: (t4) => {
        t4.exports = e3;
      } }, n2 = {};
      function r2(e4) {
        var i2 = M, a2 = n2[e4];
        if (a2 !== void 0) return a2.exports;
        var o2 = n2[e4] = { exports: {} };
        return t3[e4](o2, o2[i2(513)], r2), o2[i2(513)];
      }
      return r2(45);
    })();
  });
}), F = e((e2, t2) => {
  (function(n2, r2) {
    typeof e2 == `object` && typeof t2 == M(825) ? t2.exports = r2(P()) : typeof define == `function` && define.amd ? define([`cose-base`], r2) : typeof e2 == `object` ? e2.cytoscapeFcose = r2(P()) : n2.cytoscapeFcose = r2(n2.coseBase);
  })(e2, function(e3) {
    return (() => {
      var t3 = { 658: (e4) => {
        var t4 = M;
        e4[t4(513)] = Object.assign == null ? function(e5) {
          return [...arguments].slice(1).forEach(function(t5) {
            Object.keys(t5)[M(561)](function(n3) {
              return e5[n3] = t5[n3];
            });
          }), e5;
        } : Object.assign[t4(694)](Object);
      }, 548: (e4, t4, n3) => {
        var r3 = M, i2 = /* @__PURE__ */ (function() {
          function e5(e6, t5) {
            var n4 = M, r4 = [], i3 = true, a3 = false, o3 = void 0;
            try {
              for (var s2 = e6[Symbol.iterator](), c2; !(i3 = (c2 = s2[n4(820)]()).done) && (r4.push(c2.value), !(t5 && r4[n4(568)] === t5)); i3 = true) ;
            } catch (e7) {
              a3 = true, o3 = e7;
            } finally {
              try {
                !i3 && s2[n4(555)] && s2[n4(555)]();
              } finally {
                if (a3) throw o3;
              }
            }
            return r4;
          }
          return function(t5, n4) {
            if (Array.isArray(t5)) return t5;
            if (Symbol.iterator in Object(t5)) return e5(t5, n4);
            throw TypeError(`Invalid attempt to destructure non-iterable instance`);
          };
        })(), a2 = n3(140).layoutBase.LinkedList, o2 = {};
        o2.getTopMostNodes = function(e5) {
          for (var t5 = {}, n4 = 0; n4 < e5.length; n4++) t5[e5[n4].id()] = true;
          return e5.filter(function(e6, n5) {
            typeof e6 == `number` && (e6 = n5);
            for (var r4 = e6.parent()[0]; r4 != null; ) {
              if (t5[r4.id()]) return false;
              r4 = r4.parent()[0];
            }
            return true;
          });
        }, o2.connectComponents = function(e5, t5, n4, r4) {
          var i3 = M, o3 = new a2(), s2 = /* @__PURE__ */ new Set(), c2 = [], l2 = void 0, u2 = void 0, d2 = void 0, f2 = false, p2 = 1, m2 = [], h2 = [], g2 = function() {
            var r5 = M, i4 = e5[r5(615)]();
            h2.push(i4);
            var a3 = n4[0], g3 = e5[r5(615)]();
            g3.merge(a3).merge(a3.descendants().intersection(t5)), c2.push(a3), g3.forEach(function(e6) {
              o3.push(e6), s2.add(e6), i4.merge(e6);
            });
            for (var _2 = function() {
              var u3 = r5;
              a3 = o3.shift();
              var d3 = e5.collection();
              a3.neighborhood()[u3(811)]().forEach(function(e6) {
                t5.intersection(a3.edgesWith(e6)).length > 0 && d3.merge(e6);
              });
              for (var f3 = 0; f3 < d3[u3(568)]; f3++) {
                var p3 = d3[f3];
                l2 = n4.intersection(p3.union(p3.ancestors())), l2 != null && !s2.has(l2[0]) && l2[u3(692)](l2.descendants())[u3(561)](function(e6) {
                  var t6 = u3;
                  o3.push(e6), s2.add(e6), i4[t6(894)](e6), n4.has(e6) && c2.push(e6);
                });
              }
            }; o3.length != 0; ) _2();
            if (i4.forEach(function(e6) {
              t5[r5(446)](e6.connectedEdges()).forEach(function(e7) {
                i4.has(e7.source()) && i4.has(e7.target()) && i4.merge(e7);
              });
            }), c2.length == n4[r5(568)] && (f2 = true), !f2 || f2 && p2 > 1) {
              u2 = c2[0], d2 = u2.connectedEdges().length, c2.forEach(function(e6) {
                e6.connectedEdges().length < d2 && (d2 = e6.connectedEdges().length, u2 = e6);
              }), m2.push(u2.id());
              var v2 = e5.collection();
              v2.merge(c2[0]), c2.forEach(function(e6) {
                v2.merge(e6);
              }), c2 = [], n4 = n4[r5(773)](v2), p2++;
            }
          };
          do
            g2();
          while (!f2);
          return r4 && m2.length > 0 && r4.set(i3(488) + (r4[i3(708)] + 1), m2), h2;
        }, o2[r3(749)] = function(e5, t5, n4) {
          var a3 = r3;
          if (!n4.fixedNodeConstraint) {
            var o3 = 1 / 0, s2 = -1 / 0, c2 = 1 / 0, l2 = -1 / 0;
            if (n4.quality == `draft`) {
              var u2 = true, d2 = false, f2 = void 0;
              try {
                for (var p2 = t5[a3(858)][Symbol.iterator](), m2; !(u2 = (m2 = p2.next()).done); u2 = true) {
                  var h2 = m2.value, g2 = i2(h2, 2), _2 = g2[0], v2 = g2[1], y2 = n4.cy.getElementById(_2);
                  if (y2) {
                    var b2 = y2.boundingBox(), x2 = t5.xCoords[v2] - b2.w / 2, S2 = t5.xCoords[v2] + b2.w / 2, C2 = t5.yCoords[v2] - b2.h / 2, w2 = t5[a3(485)][v2] + b2.h / 2;
                    x2 < o3 && (o3 = x2), S2 > s2 && (s2 = S2), C2 < c2 && (c2 = C2), w2 > l2 && (l2 = w2);
                  }
                }
              } catch (e6) {
                d2 = true, f2 = e6;
              } finally {
                try {
                  !u2 && p2.return && p2.return();
                } finally {
                  if (d2) throw f2;
                }
              }
              var T2 = e5.x - (s2 + o3) / 2, E2 = e5.y - (l2 + c2) / 2;
              t5.xCoords = t5.xCoords.map(function(e6) {
                return e6 + T2;
              }), t5.yCoords = t5.yCoords.map(function(e6) {
                return e6 + E2;
              });
            } else {
              Object[a3(588)](t5).forEach(function(e6) {
                var n5 = a3, r4 = t5[e6], i3 = r4.getRect().x, u3 = r4.getRect().x + r4.getRect().width, d3 = r4.getRect().y, f3 = r4.getRect().y + r4[n5(466)]()[n5(636)];
                i3 < o3 && (o3 = i3), u3 > s2 && (s2 = u3), d3 < c2 && (c2 = d3), f3 > l2 && (l2 = f3);
              });
              var D2 = e5.x - (s2 + o3) / 2, O2 = e5.y - (l2 + c2) / 2;
              Object[a3(588)](t5)[a3(561)](function(e6) {
                var n5 = t5[e6];
                n5.setCenter(n5.getCenterX() + D2, n5.getCenterY() + O2);
              });
            }
          }
        }, o2.calcBoundingBox = function(e5, t5, n4, i3) {
          for (var a3 = r3, o3 = 9007199254740991, s2 = -9007199254740991, c2 = 9007199254740991, l2 = -9007199254740991, u2 = void 0, d2 = void 0, f2 = void 0, p2 = void 0, m2 = e5.descendants()[a3(862)](`:parent`), h2 = m2.length, g2 = 0; g2 < h2; g2++) {
            var _2 = m2[g2];
            u2 = t5[i3.get(_2.id())] - _2.width() / 2, d2 = t5[i3.get(_2.id())] + _2[a3(719)]() / 2, f2 = n4[i3.get(_2.id())] - _2.height() / 2, p2 = n4[i3.get(_2.id())] + _2.height() / 2, o3 > u2 && (o3 = u2), s2 < d2 && (s2 = d2), c2 > f2 && (c2 = f2), l2 < p2 && (l2 = p2);
          }
          var v2 = {};
          return v2.topLeftX = o3, v2.topLeftY = c2, v2[a3(719)] = s2 - o3, v2.height = l2 - c2, v2;
        }, o2.calcParentsWithoutChildren = function(e5, t5) {
          var n4 = e5.collection();
          return t5.nodes(`:parent`).forEach(function(e6) {
            var t6 = false;
            e6.children().forEach(function(e7) {
              var n5 = M;
              e7.css(`display`) != n5(546) && (t6 = true);
            }), t6 || n4.merge(e6);
          }), n4;
        }, e4[r3(513)] = o2;
      }, 816: (e4, t4, n3) => {
        var r3 = M, i2 = n3(548), a2 = n3(140).CoSELayout, o2 = n3(140).CoSENode, s2 = n3(140).layoutBase.PointD, c2 = n3(140).layoutBase.DimensionD, l2 = n3(140)[r3(737)].LayoutConstants, u2 = n3(140)[r3(737)].FDLayoutConstants, d2 = n3(140).CoSEConstants;
        e4.exports = { coseLayout: function(e5, t5) {
          var n4 = r3, f2 = e5.cy, p2 = e5.eles, m2 = p2.nodes(), h2 = p2.edges(), g2 = void 0, _2 = void 0, v2 = void 0, y2 = {};
          e5.randomize && (g2 = t5.nodeIndexes, _2 = t5.xCoords, v2 = t5.yCoords);
          var b2 = function(e6) {
            return typeof e6 == `function`;
          }, x2 = function(e6, t6) {
            return b2(e6) ? e6(t6) : e6;
          }, S2 = i2.calcParentsWithoutChildren(f2, p2), C2 = function e6(t6, n5, r4, a3) {
            for (var l3 = M, u3 = n5.length, d3 = 0; d3 < u3; d3++) {
              var f3 = n5[d3], p3 = null;
              f3.intersection(S2).length == 0 && (p3 = f3.children());
              var m3 = void 0, h3 = f3.layoutDimensions({ nodeDimensionsIncludeLabels: a3.nodeDimensionsIncludeLabels });
              if (f3.outerWidth() != null && f3.outerHeight() != null) if (a3[l3(576)]) if (!f3.isParent()) m3 = t6.add(new o2(r4.graphManager, new s2(_2[g2.get(f3.id())] - h3.w / 2, v2[g2.get(f3.id())] - h3.h / 2), new c2(parseFloat(h3.w), parseFloat(h3.h))));
              else {
                var b3 = i2.calcBoundingBox(f3, _2, v2, g2);
                m3 = f3.intersection(S2).length == 0 ? t6[l3(887)](new o2(r4.graphManager, new s2(b3.topLeftX, b3.topLeftY), new c2(b3.width, b3.height))) : t6.add(new o2(r4[l3(600)], new s2(b3[l3(460)], b3.topLeftY), new c2(parseFloat(h3.w), parseFloat(h3.h))));
              }
              else m3 = t6.add(new o2(r4.graphManager, new s2(f3.position(`x`) - h3.w / 2, f3.position(`y`) - h3.h / 2), new c2(parseFloat(h3.w), parseFloat(h3.h))));
              else m3 = t6.add(new o2(this[l3(600)]));
              if (m3.id = f3.data(`id`), m3.nodeRepulsion = x2(a3.nodeRepulsion, f3), m3.paddingLeft = parseInt(f3.css(l3(776))), m3.paddingTop = parseInt(f3.css(`padding`)), m3.paddingRight = parseInt(f3.css(l3(776))), m3.paddingBottom = parseInt(f3[l3(567)](`padding`)), a3.nodeDimensionsIncludeLabels && (m3.labelWidth = f3[l3(581)]({ includeLabels: true, includeNodes: false, includeOverlays: false }).w, m3[l3(522)] = f3[l3(581)]({ includeLabels: true, includeNodes: false, includeOverlays: false }).h, m3.labelPosVertical = f3[l3(567)](l3(477)), m3.labelPosHorizontal = f3.css(`text-halign`)), y2[f3.data(`id`)] = m3, isNaN(m3.rect.x) && (m3.rect.x = 0), isNaN(m3.rect.y) && (m3.rect.y = 0), p3 != null && p3.length > 0) {
                var C3 = void 0;
                C3 = r4.getGraphManager()[l3(887)](r4[l3(803)](), m3), e6(C3, p3, r4, a3);
              }
            }
          }, w2 = function(t6, n5, r4) {
            for (var i3 = M, a3 = 0, o3 = 0, s3 = 0; s3 < r4[i3(568)]; s3++) {
              var c3 = r4[s3], l3 = y2[c3.data(`source`)], f3 = y2[c3.data(`target`)];
              if (l3 && f3 && l3 !== f3 && l3.getEdgesBetween(f3).length == 0) {
                var p3 = n5[i3(887)](t6.newEdge(), l3, f3);
                p3.id = c3.id(), p3.idealLength = x2(e5.idealEdgeLength, c3), p3.edgeElasticity = x2(e5[i3(713)], c3), a3 += p3.idealLength, o3++;
              }
            }
            e5.idealEdgeLength != null && (o3 > 0 ? d2.DEFAULT_EDGE_LENGTH = u2[i3(870)] = a3 / o3 : b2(e5.idealEdgeLength) ? d2[i3(870)] = u2.DEFAULT_EDGE_LENGTH = 50 : d2.DEFAULT_EDGE_LENGTH = u2.DEFAULT_EDGE_LENGTH = e5[i3(468)], d2.MIN_REPULSION_DIST = u2.MIN_REPULSION_DIST = u2.DEFAULT_EDGE_LENGTH / 10, d2.DEFAULT_RADIAL_SEPARATION = u2.DEFAULT_EDGE_LENGTH);
          }, T2 = function(e6, t6) {
            var n5 = M;
            t6[n5(843)] && (e6.constraints.fixedNodeConstraint = t6.fixedNodeConstraint), t6.alignmentConstraint && (e6.constraints[n5(688)] = t6.alignmentConstraint), t6.relativePlacementConstraint && (e6.constraints.relativePlacementConstraint = t6.relativePlacementConstraint);
          };
          e5.nestingFactor != null && (d2.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = u2.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = e5.nestingFactor), e5.gravity != null && (d2.DEFAULT_GRAVITY_STRENGTH = u2.DEFAULT_GRAVITY_STRENGTH = e5.gravity), e5.numIter != null && (d2.MAX_ITERATIONS = u2.MAX_ITERATIONS = e5.numIter), e5.gravityRange != null && (d2[n4(865)] = u2.DEFAULT_GRAVITY_RANGE_FACTOR = e5.gravityRange), e5.gravityCompound != null && (d2.DEFAULT_COMPOUND_GRAVITY_STRENGTH = u2.DEFAULT_COMPOUND_GRAVITY_STRENGTH = e5.gravityCompound), e5.gravityRangeCompound != null && (d2.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = u2.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = e5.gravityRangeCompound), e5.initialEnergyOnIncremental != null && (d2[n4(697)] = u2[n4(697)] = e5.initialEnergyOnIncremental), e5.tilingCompareBy != null && (d2[n4(641)] = e5.tilingCompareBy), e5.quality == `proof` ? l2.QUALITY = 2 : l2[n4(819)] = 0, d2.NODE_DIMENSIONS_INCLUDE_LABELS = u2.NODE_DIMENSIONS_INCLUDE_LABELS = l2[n4(647)] = e5.nodeDimensionsIncludeLabels, d2.DEFAULT_INCREMENTAL = u2.DEFAULT_INCREMENTAL = l2.DEFAULT_INCREMENTAL = !e5[n4(576)], d2[n4(856)] = u2.ANIMATE = l2.ANIMATE = e5[n4(563)], d2.TILE = e5[n4(879)], d2.TILING_PADDING_VERTICAL = typeof e5.tilingPaddingVertical == n4(456) ? e5.tilingPaddingVertical[n4(878)]() : e5[n4(702)], d2[n4(554)] = typeof e5.tilingPaddingHorizontal == `function` ? e5.tilingPaddingHorizontal.call() : e5.tilingPaddingHorizontal, d2[n4(680)] = u2[n4(680)] = l2.DEFAULT_INCREMENTAL = true, d2.PURE_INCREMENTAL = !e5[n4(576)], l2.DEFAULT_UNIFORM_LEAF_NODE_SIZES = e5.uniformNodeDimensions, e5.step == `transformed` && (d2.TRANSFORM_ON_CONSTRAINT_HANDLING = true, d2[n4(676)] = false, d2.APPLY_LAYOUT = false), e5[n4(890)] == `enforced` && (d2[n4(548)] = false, d2.ENFORCE_CONSTRAINTS = true, d2.APPLY_LAYOUT = false), e5.step == `cose` && (d2[n4(548)] = false, d2[n4(676)] = false, d2.APPLY_LAYOUT = true), e5.step == `all` && (e5.randomize ? d2[n4(548)] = true : d2.TRANSFORM_ON_CONSTRAINT_HANDLING = false, d2.ENFORCE_CONSTRAINTS = true, d2.APPLY_LAYOUT = true), e5[n4(843)] || e5.alignmentConstraint || e5.relativePlacementConstraint ? d2.TREE_REDUCTION_ON_INCREMENTAL = false : d2[n4(531)] = true;
          var E2 = new a2(), D2 = E2.newGraphManager();
          return C2(D2.addRoot(), i2.getTopMostNodes(m2), E2, e5), w2(E2, D2, h2), T2(E2, e5), E2.runLayout(), y2;
        } };
      }, 212: (e4, t4, n3) => {
        var r3 = M, i2 = /* @__PURE__ */ (function() {
          function e5(e6, t5) {
            for (var n4 = M, r4 = 0; r4 < t5.length; r4++) {
              var i3 = t5[r4];
              i3.enumerable = i3[n4(514)] || false, i3.configurable = true, `value` in i3 && (i3.writable = true), Object.defineProperty(e6, i3[n4(473)], i3);
            }
          }
          return function(t5, n4, r4) {
            return n4 && e5(t5.prototype, n4), r4 && e5(t5, r4), t5;
          };
        })();
        function a2(e5, t5) {
          var n4 = M;
          if (!(e5 instanceof t5)) throw TypeError(n4(827));
        }
        var o2 = n3(658), s2 = n3(548), c2 = n3(657).spectralLayout, l2 = n3(816).coseLayout, u2 = Object.freeze({ quality: `default`, randomize: true, animate: true, animationDuration: 1e3, animationEasing: void 0, fit: true, padding: 30, nodeDimensionsIncludeLabels: false, uniformNodeDimensions: false, packComponents: true, step: r3(511), samplingType: true, sampleSize: 25, nodeSeparation: 75, piTol: 1e-7, nodeRepulsion: function(e5) {
          return 4500;
        }, idealEdgeLength: function(e5) {
          return 50;
        }, edgeElasticity: function(e5) {
          return 0.45;
        }, nestingFactor: 0.1, gravity: 0.25, numIter: 2500, tile: true, tilingCompareBy: void 0, tilingPaddingVertical: 10, tilingPaddingHorizontal: 10, gravityRangeCompound: 1.5, gravityCompound: 1, gravityRange: 3.8, initialEnergyOnIncremental: 0.3, fixedNodeConstraint: void 0, alignmentConstraint: void 0, relativePlacementConstraint: void 0, ready: function() {
        }, stop: function() {
        } });
        e4.exports = (function() {
          var e5 = r3;
          function t5(e6) {
            a2(this, t5), this.options = o2({}, u2, e6);
          }
          return i2(t5, [{ key: e5(501), value: function() {
            var t6 = e5, n4 = this, r4 = this.options, i3 = r4.cy, a3 = r4.eles, o3 = [], u3 = [], d2 = void 0, f2 = [];
            r4.fixedNodeConstraint && (!Array.isArray(r4.fixedNodeConstraint) || r4.fixedNodeConstraint.length == 0) && (r4.fixedNodeConstraint = void 0), r4.alignmentConstraint && (r4.alignmentConstraint.vertical && (!Array.isArray(r4.alignmentConstraint.vertical) || r4.alignmentConstraint.vertical.length == 0) && (r4.alignmentConstraint[t6(631)] = void 0), r4.alignmentConstraint[t6(645)] && (!Array.isArray(r4.alignmentConstraint.horizontal) || r4.alignmentConstraint.horizontal.length == 0) && (r4.alignmentConstraint.horizontal = void 0)), r4.relativePlacementConstraint && (!Array.isArray(r4.relativePlacementConstraint) || r4.relativePlacementConstraint.length == 0) && (r4.relativePlacementConstraint = void 0), (r4.fixedNodeConstraint || r4.alignmentConstraint || r4.relativePlacementConstraint) && (r4.tile = false, r4[t6(619)] = false);
            var p2 = void 0, m2 = false;
            if (i3.layoutUtilities && r4.packComponents && (p2 = i3.layoutUtilities(`get`), p2 || (p2 = i3.layoutUtilities()), m2 = true), a3.nodes()[t6(568)] > 0) if (m2) {
              var h2 = s2.getTopMostNodes(r4.eles.nodes());
              if (d2 = s2.connectComponents(i3, r4[t6(674)], h2), d2.forEach(function(e6) {
                var t7 = e6.boundingBox();
                f2.push({ x: t7.x1 + t7.w / 2, y: t7.y1 + t7.h / 2 });
              }), r4.randomize && d2.forEach(function(e6) {
                var n5 = t6;
                r4[n5(674)] = e6, o3.push(c2(r4));
              }), r4.quality == `default` || r4[t6(528)] == t6(731)) {
                var g2 = i3[t6(615)]();
                if (r4[t6(879)]) {
                  var _2 = /* @__PURE__ */ new Map(), v2 = [], y2 = [], b2 = 0, x2 = { nodeIndexes: _2, xCoords: v2, yCoords: y2 }, S2 = [];
                  if (d2[t6(561)](function(e6, n5) {
                    var r5 = t6;
                    e6[r5(471)]()[r5(568)] == 0 && (e6[r5(811)]().forEach(function(t7, n6) {
                      var i4 = r5;
                      g2.merge(e6.nodes()[n6]), t7.isParent() || (x2.nodeIndexes.set(e6.nodes()[n6].id(), b2++), x2[i4(884)][i4(752)](e6.nodes()[0].position().x), x2[i4(485)].push(e6.nodes()[0].position().y));
                    }), S2.push(n5));
                  }), g2.length > 1) {
                    var C2 = g2.boundingBox();
                    f2[t6(752)]({ x: C2.x1 + C2.w / 2, y: C2.y1 + C2.h / 2 }), d2.push(g2), o3.push(x2);
                    for (var w2 = S2[t6(568)] - 1; w2 >= 0; w2--) d2.splice(S2[w2], 1), o3.splice(S2[w2], 1), f2.splice(S2[w2], 1);
                  }
                }
                d2.forEach(function(e6, t7) {
                  r4.eles = e6, u3.push(l2(r4, o3[t7])), s2.relocateComponent(f2[t7], u3[t7], r4);
                });
              } else d2.forEach(function(e6, n5) {
                s2[t6(749)](f2[n5], o3[n5], r4);
              });
              var T2 = /* @__PURE__ */ new Set();
              if (d2.length > 1) {
                var E2 = [], D2 = a3.filter(function(e6) {
                  return e6[t6(567)](`display`) == `none`;
                });
                d2.forEach(function(e6, n5) {
                  var i4 = t6, a4 = void 0;
                  if (r4.quality == `draft` && (a4 = o3[n5].nodeIndexes), e6.nodes().not(D2).length > 0) {
                    var c3 = {};
                    c3.edges = [], c3.nodes = [];
                    var l3 = void 0;
                    e6.nodes().not(D2)[i4(561)](function(e7) {
                      var t7 = i4;
                      if (r4.quality == `draft`) if (!e7.isParent()) l3 = a4[t7(652)](e7.id()), c3[t7(811)].push({ x: o3[n5].xCoords[l3] - e7[t7(767)]().w / 2, y: o3[n5].yCoords[l3] - e7.boundingbox().h / 2, width: e7.boundingbox().w, height: e7.boundingbox().h });
                      else {
                        var d3 = s2.calcBoundingBox(e7, o3[n5].xCoords, o3[n5].yCoords, a4);
                        c3.nodes[t7(752)]({ x: d3[t7(460)], y: d3.topLeftY, width: d3.width, height: d3.height });
                      }
                      else u3[n5][e7.id()] && c3[t7(811)].push({ x: u3[n5][e7.id()].getLeft(), y: u3[n5][e7.id()][t7(784)](), width: u3[n5][e7.id()].getWidth(), height: u3[n5][e7.id()].getHeight() });
                    }), e6.edges().forEach(function(e7) {
                      var t7 = i4, l4 = e7.source(), d3 = e7[t7(582)]();
                      if (l4.css(`display`) != `none` && d3.css(t7(677)) != `none`) if (r4.quality == `draft`) {
                        var f3 = a4[t7(652)](l4.id()), p3 = a4[t7(652)](d3.id()), m3 = [], h3 = [];
                        if (l4.isParent()) {
                          var g3 = s2.calcBoundingBox(l4, o3[n5].xCoords, o3[n5].yCoords, a4);
                          m3[t7(752)](g3.topLeftX + g3.width / 2), m3.push(g3.topLeftY + g3[t7(636)] / 2);
                        } else m3.push(o3[n5].xCoords[f3]), m3.push(o3[n5].yCoords[f3]);
                        if (d3.isParent()) {
                          var _3 = s2.calcBoundingBox(d3, o3[n5].xCoords, o3[n5].yCoords, a4);
                          h3[t7(752)](_3.topLeftX + _3.width / 2), h3[t7(752)](_3[t7(728)] + _3[t7(636)] / 2);
                        } else h3.push(o3[n5][t7(884)][p3]), h3.push(o3[n5].yCoords[p3]);
                        c3.edges[t7(752)]({ startX: m3[0], startY: m3[1], endX: h3[0], endY: h3[1] });
                      } else u3[n5][l4.id()] && u3[n5][d3.id()] && c3[t7(471)].push({ startX: u3[n5][l4.id()].getCenterX(), startY: u3[n5][l4.id()].getCenterY(), endX: u3[n5][d3.id()].getCenterX(), endY: u3[n5][d3.id()].getCenterY() });
                    }), c3[i4(811)][i4(568)] > 0 && (E2.push(c3), T2.add(n5));
                  }
                });
                var O2 = p2.packComponents(E2, r4.randomize).shifts;
                if (r4.quality == `draft`) o3.forEach(function(e6, n5) {
                  var r5 = t6, i4 = e6.xCoords.map(function(e7) {
                    return e7 + O2[n5].dx;
                  }), a4 = e6.yCoords[r5(515)](function(e7) {
                    return e7 + O2[n5].dy;
                  });
                  e6.xCoords = i4, e6[r5(485)] = a4;
                });
                else {
                  var k2 = 0;
                  T2.forEach(function(e6) {
                    Object.keys(u3[e6]).forEach(function(t7) {
                      var n5 = M, r5 = u3[e6][t7];
                      r5[n5(470)](r5.getCenterX() + O2[k2].dx, r5[n5(601)]() + O2[k2].dy);
                    }), k2++;
                  });
                }
              }
            } else {
              var A2 = r4.eles[t6(581)]();
              if (f2.push({ x: A2.x1 + A2.w / 2, y: A2.y1 + A2.h / 2 }), r4.randomize) {
                var j2 = c2(r4);
                o3.push(j2);
              }
              r4.quality == `default` || r4.quality == `proof` ? (u3.push(l2(r4, o3[0])), s2.relocateComponent(f2[0], u3[0], r4)) : s2.relocateComponent(f2[0], o3[0], r4);
            }
            var N2 = function(e6, n5) {
              var i4 = t6;
              if (r4[i4(528)] == `default` || r4.quality == i4(731)) {
                typeof e6 == `number` && (e6 = n5);
                var a4 = void 0, s3 = void 0, c3 = e6.data(`id`);
                return u3.forEach(function(e7) {
                  var t7 = i4;
                  c3 in e7 && (a4 = { x: e7[c3][t7(466)]()[t7(462)](), y: e7[c3].getRect()[t7(601)]() }, s3 = e7[c3]);
                }), r4.nodeDimensionsIncludeLabels && (s3.labelWidth && (s3.labelPosHorizontal == `left` ? a4.x += s3.labelWidth / 2 : s3.labelPosHorizontal == `right` && (a4.x -= s3.labelWidth / 2)), s3.labelHeight && (s3[i4(874)] == `top` ? a4.y += s3[i4(522)] / 2 : s3.labelPosVertical == `bottom` && (a4.y -= s3.labelHeight / 2))), a4 ?? (a4 = { x: e6.position(`x`), y: e6.position(`y`) }), { x: a4.x, y: a4.y };
              } else {
                var l3 = void 0;
                return o3.forEach(function(t7) {
                  var n6 = t7.nodeIndexes.get(e6.id());
                  n6 != null && (l3 = { x: t7.xCoords[n6], y: t7.yCoords[n6] });
                }), l3 ?? (l3 = { x: e6.position(`x`), y: e6.position(`y`) }), { x: l3.x, y: l3.y };
              }
            };
            if (r4.quality == t6(673) || r4.quality == `proof` || r4.randomize) {
              var P2 = s2.calcParentsWithoutChildren(i3, a3), F2 = a3.filter(function(e6) {
                return e6.css(`display`) == `none`;
              });
              r4.eles = a3[t6(862)](F2), a3.nodes().not(`:parent`).not(F2).layoutPositions(n4, r4, N2), P2.length > 0 && P2.forEach(function(e6) {
                e6.position(N2(e6));
              });
            } else console.log(`If randomize option is set to false, then quality option must be 'default' or 'proof'.`);
          } }]), t5;
        })();
      }, 657: (e4, t4, n3) => {
        var r3 = n3(548), i2 = n3(140).layoutBase.Matrix, a2 = n3(140).layoutBase.SVD;
        e4.exports = { spectralLayout: function(e5) {
          var t5 = M, n4 = e5.cy, o2 = e5.eles, s2 = o2.nodes(), c2 = o2.nodes(`:parent`), l2 = /* @__PURE__ */ new Map(), u2 = /* @__PURE__ */ new Map(), d2 = /* @__PURE__ */ new Map(), f2 = [], p2 = [], m2 = [], h2 = [], g2 = [], _2 = [], v2 = [], y2 = [], b2 = void 0, x2 = 1e8, S2 = 1e-9, C2 = e5.piTol, w2 = e5[t5(656)], T2 = e5.nodeSeparation, E2 = void 0, D2 = function() {
            for (var e6 = t5, n5 = 0, r4 = 0, i3 = false; r4 < E2; ) {
              n5 = Math.floor(Math[e6(537)]() * b2), i3 = false;
              for (var a3 = 0; a3 < r4; a3++) if (h2[a3] == n5) {
                i3 = true;
                break;
              }
              if (!i3) h2[r4] = n5, r4++;
              else continue;
            }
          }, O2 = function(e6, t6, n5) {
            for (var r4 = [], i3 = 0, a3 = 0, o3 = 0, s3 = void 0, c3 = [], l3 = 0, d3 = 1, p3 = 0; p3 < b2; p3++) c3[p3] = x2;
            for (r4[a3] = e6, c3[e6] = 0; a3 >= i3; ) {
              o3 = r4[i3++];
              for (var m3 = f2[o3], h3 = 0; h3 < m3.length; h3++) s3 = u2.get(m3[h3]), c3[s3] == x2 && (c3[s3] = c3[o3] + 1, r4[++a3] = s3);
              _2[o3][t6] = c3[o3] * T2;
            }
            if (n5) {
              for (var v3 = 0; v3 < b2; v3++) _2[v3][t6] < g2[v3] && (g2[v3] = _2[v3][t6]);
              for (var y3 = 0; y3 < b2; y3++) g2[y3] > l3 && (l3 = g2[y3], d3 = y3);
            }
            return d3;
          }, k2 = function(e6) {
            var t6 = void 0;
            if (e6) {
              t6 = Math.floor(Math.random() * b2);
              for (var n5 = 0; n5 < b2; n5++) g2[n5] = x2;
              for (var r4 = 0; r4 < E2; r4++) h2[r4] = t6, t6 = O2(t6, r4, e6);
            } else {
              D2();
              for (var i3 = 0; i3 < E2; i3++) O2(h2[i3], i3, e6, false);
            }
            for (var a3 = 0; a3 < b2; a3++) for (var o3 = 0; o3 < E2; o3++) _2[a3][o3] *= _2[a3][o3];
            for (var s3 = 0; s3 < E2; s3++) v2[s3] = [];
            for (var c3 = 0; c3 < E2; c3++) for (var l3 = 0; l3 < E2; l3++) v2[c3][l3] = _2[h2[l3]][c3];
          }, A2 = function() {
            for (var e6 = t5, n5 = a2.svd(v2), r4 = n5.S, o3 = n5.U, s3 = n5.V, c3 = r4[0] * r4[0] * r4[0], l3 = [], u3 = 0; u3 < E2; u3++) {
              l3[u3] = [];
              for (var d3 = 0; d3 < E2; d3++) l3[u3][d3] = 0, u3 == d3 && (l3[u3][d3] = r4[u3] / (r4[u3] * r4[u3] + c3 / (r4[u3] * r4[u3])));
            }
            y2 = i2[e6(851)](i2.multMat(s3, l3), i2.transpose(o3));
          }, j2 = function() {
            for (var e6 = t5, n5 = void 0, r4 = void 0, a3 = [], o3 = [], s3 = [], c3 = [], l3 = 0; l3 < b2; l3++) a3[l3] = Math.random(), o3[l3] = Math.random();
            a3 = i2[e6(780)](a3), o3 = i2.normalize(o3);
            for (var u3 = 0, d3 = S2, f3 = S2, h3 = void 0; ; ) {
              u3++;
              for (var g3 = 0; g3 < b2; g3++) s3[g3] = a3[g3];
              if (a3 = i2.multGamma(i2.multL(i2.multGamma(s3), _2, y2)), n5 = i2[e6(758)](s3, a3), a3 = i2.normalize(a3), d3 = i2[e6(758)](s3, a3), h3 = Math[e6(549)](d3 / f3), h3 <= 1 + C2 && h3 >= 1) break;
              f3 = d3;
            }
            for (var v3 = 0; v3 < b2; v3++) s3[v3] = a3[v3];
            for (u3 = 0, f3 = S2; ; ) {
              u3++;
              for (var x3 = 0; x3 < b2; x3++) c3[x3] = o3[x3];
              if (c3 = i2.minusOp(c3, i2.multCons(s3, i2.dotProduct(s3, c3))), o3 = i2.multGamma(i2.multL(i2.multGamma(c3), _2, y2)), r4 = i2.dotProduct(c3, o3), o3 = i2[e6(780)](o3), d3 = i2[e6(758)](c3, o3), h3 = Math.abs(d3 / f3), h3 <= 1 + C2 && h3 >= 1) break;
              f3 = d3;
            }
            for (var w3 = 0; w3 < b2; w3++) c3[w3] = o3[w3];
            p2 = i2.multCons(s3, Math.sqrt(Math.abs(n5))), m2 = i2.multCons(c3, Math.sqrt(Math.abs(r4)));
          };
          r3[t5(443)](n4, o2, r3[t5(574)](s2), l2), c2.forEach(function(e6) {
            var i3 = t5;
            r3.connectComponents(n4, o2, r3.getTopMostNodes(e6[i3(650)]().intersection(o2)), l2);
          });
          for (var N2 = 0, P2 = 0; P2 < s2.length; P2++) s2[P2].isParent() || u2.set(s2[P2].id(), N2++);
          var F2 = true, I2 = false, L2 = void 0;
          try {
            for (var ee2 = l2[t5(588)]()[Symbol.iterator](), te2; !(F2 = (te2 = ee2.next())[t5(838)]); F2 = true) {
              var R2 = te2.value;
              u2.set(R2, N2++);
            }
          } catch (e6) {
            I2 = true, L2 = e6;
          } finally {
            try {
              !F2 && ee2.return && ee2.return();
            } finally {
              if (I2) throw L2;
            }
          }
          for (var z2 = 0; z2 < u2.size; z2++) f2[z2] = [];
          c2.forEach(function(e6) {
            for (var n5 = t5, r4 = e6.children().intersection(o2); r4[n5(811)](`:childless`).length == 0; ) r4 = r4[n5(811)]()[0].children().intersection(o2);
            var i3 = 0, a3 = r4.nodes(`:childless`)[0].connectedEdges().length;
            r4.nodes(`:childless`).forEach(function(e7, t6) {
              var r5 = n5;
              e7[r5(489)]().length < a3 && (a3 = e7[r5(489)]().length, i3 = t6);
            }), d2.set(e6.id(), r4.nodes(`:childless`)[i3].id());
          }), s2[t5(561)](function(e6) {
            var n5 = t5, r4 = void 0;
            r4 = e6.isParent() ? u2.get(d2.get(e6.id())) : u2.get(e6.id()), e6.neighborhood().nodes()[n5(561)](function(t6) {
              var i3 = n5;
              o2.intersection(e6.edgesWith(t6))[i3(568)] > 0 && (t6.isParent() ? f2[r4].push(d2.get(t6.id())) : f2[r4].push(t6.id()));
            });
          });
          var B2 = function(e6) {
            var r4 = t5, i3 = u2.get(e6), a3 = void 0;
            l2[r4(652)](e6).forEach(function(t6) {
              var o3 = r4;
              a3 = n4.getElementById(t6)[o3(510)]() ? d2[o3(652)](t6) : t6, f2[i3].push(a3), f2[u2[o3(652)](a3)][o3(752)](e6);
            });
          }, V2 = true, H2 = false, U2 = void 0;
          try {
            for (var W2 = l2.keys()[Symbol.iterator](), ne2; !(V2 = (ne2 = W2.next())[t5(838)]); V2 = true) {
              var re2 = ne2.value;
              B2(re2);
            }
          } catch (e6) {
            H2 = true, U2 = e6;
          } finally {
            try {
              !V2 && W2.return && W2.return();
            } finally {
              if (H2) throw U2;
            }
          }
          b2 = u2.size;
          var ie2 = void 0;
          if (b2 > 2) {
            E2 = b2 < e5.sampleSize ? b2 : e5.sampleSize;
            for (var G2 = 0; G2 < b2; G2++) _2[G2] = [];
            for (var K2 = 0; K2 < E2; K2++) y2[K2] = [];
            return e5.quality == `draft` || e5[t5(890)] == `all` ? (k2(w2), A2(), j2(), ie2 = { nodeIndexes: u2, xCoords: p2, yCoords: m2 }) : (u2.forEach(function(e6, r4) {
              var i3 = t5;
              p2.push(n4.getElementById(r4)[i3(696)](`x`)), m2.push(n4.getElementById(r4).position(`y`));
            }), ie2 = { nodeIndexes: u2, xCoords: p2, yCoords: m2 }), ie2;
          } else {
            var q2 = u2.keys(), ae2 = n4.getElementById(q2[t5(820)]().value), J2 = ae2.position(), Y2 = ae2.outerWidth();
            if (p2.push(J2.x), m2[t5(752)](J2.y), b2 == 2) {
              var X2 = n4.getElementById(q2.next().value).outerWidth();
              p2.push(J2.x + Y2 / 2 + X2 / 2 + e5.idealEdgeLength), m2.push(J2.y);
            }
            return ie2 = { nodeIndexes: u2, xCoords: p2, yCoords: m2 }, ie2;
          }
        } };
      }, 579: (e4, t4, n3) => {
        var r3 = n3(212), i2 = function(e5) {
          e5 && e5(M(486), `fcose`, r3);
        };
        typeof cytoscape < `u` && i2(cytoscape), e4.exports = i2;
      }, 140: (t4) => {
        t4.exports = e3;
      } }, n2 = {};
      function r2(e4) {
        var i2 = M, a2 = n2[e4];
        if (a2 !== void 0) return a2[i2(513)];
        var o2 = n2[e4] = { exports: {} };
        return t3[e4](o2, o2.exports, r2), o2.exports;
      }
      return r2(579);
    })();
  });
});
r(), i();
var I = t(F(), 1), L, ee = { L: j(597), R: `right`, T: j(753), B: `bottom` }, te = { L: l((e2) => e2 + `,` + e2 / 2 + ` 0,` + e2 + ` 0,0`, `L`), R: l((e2) => `0,` + e2 / 2 + ` ` + e2 + `,0 ` + e2 + `,` + e2, `R`), T: l((e2) => `0,0 ` + e2 + `,0 ` + e2 / 2 + `,` + e2, `T`), B: l((e2) => e2 / 2 + `,0 ` + e2 + `,` + e2 + ` 0,` + e2, `B`) }, R = { L: l((e2, t2) => e2 - t2 + 2, `L`), R: l((e2, t2) => e2 - 2, `R`), T: l((e2, t2) => e2 - t2 + 2, `T`), B: l((e2, t2) => e2 - 2, `B`) }, z = l(function(e2) {
  return V(e2) ? e2 === `L` ? `R` : `L` : e2 === `T` ? `B` : `T`;
}, `getOppositeArchitectureDirection`), B = l(function(e2) {
  let t2 = e2;
  return t2 === `L` || t2 === `R` || t2 === `T` || t2 === `B`;
}, `isArchitectureDirection`), V = l(function(e2) {
  let t2 = e2;
  return t2 === `L` || t2 === `R`;
}, `isArchitectureDirectionX`), H = l(function(e2) {
  let t2 = e2;
  return t2 === `T` || t2 === `B`;
}, `isArchitectureDirectionY`), U = l(function(e2, t2) {
  let n2 = V(e2) && H(t2), r2 = H(e2) && V(t2);
  return n2 || r2;
}, j(880)), W = l(function(e2) {
  let t2 = e2[0], n2 = e2[1], r2 = V(t2) && H(n2), i2 = H(t2) && V(n2);
  return r2 || i2;
}, `isArchitecturePairXY`), ne = l(function(e2) {
  return e2 !== `LL` && e2 !== `RR` && e2 !== `TT` && e2 !== `BB`;
}, j(759)), re = l(function(e2, t2) {
  let n2 = `` + e2 + t2;
  return ne(n2) ? n2 : void 0;
}, j(801)), ie = l(function([e2, t2], n2) {
  let r2 = n2[0], i2 = n2[1];
  return V(r2) ? H(i2) ? [e2 + (r2 === `L` ? -1 : 1), t2 + (i2 === `T` ? 1 : -1)] : [e2 + (r2 === `L` ? -1 : 1), t2] : V(i2) ? [e2 + (i2 === `L` ? 1 : -1), t2 + (r2 === `T` ? 1 : -1)] : [e2, t2 + (r2 === `T` ? 1 : -1)];
}, `shiftPositionByArchitectureDirectionPair`), G = l(function(e2) {
  return e2 === `LT` || e2 === `TL` ? [1, 1] : e2 === `BL` || e2 === `LB` ? [1, -1] : e2 === `BR` || e2 === `RB` ? [-1, -1] : [-1, 1];
}, `getArchitectureDirectionXYFactors`), K = l(function(e2, t2) {
  var n2 = j;
  return U(e2, t2) ? n2(836) : V(e2) ? `horizontal` : n2(631);
}, `getArchitectureDirectionAlignment`), q = l(function(e2) {
  return e2.type === `service`;
}, `isArchitectureService`), ae = l(function(e2) {
  var t2 = j;
  return e2[t2(860)] === t2(778);
}, `isArchitectureJunction`), J = l((e2) => e2[j(658)](), `edgeData`), Y = l((e2) => e2[j(658)](), `nodeData`), X = b.architecture, oe = (L = class {
  constructor() {
    var e2 = j;
    this.nodes = {}, this[e2(779)] = {}, this.edges = [], this.registeredIds = {}, this[e2(704)] = {}, this.diagramId = ``, this.setAccTitle = p, this.getAccTitle = m, this.setDiagramTitle = h, this[e2(610)] = g, this[e2(804)] = u, this.setAccDescription = _, this.clear();
  }
  [j(788)](e2) {
    this.diagramId = e2;
  }
  getDiagramId() {
    return this.diagramId;
  }
  [j(475)]() {
    var e2 = j;
    this[e2(811)] = {}, this.groups = {}, this.edges = [], this[e2(566)] = {}, this.dataStructures = void 0, this.elements = {}, this.diagramId = ``, d();
  }
  addService({ id: e2, icon: t2, in: n2, title: r2, iconText: i2 }) {
    var a2 = j;
    if (this.registeredIds[e2] !== void 0) throw Error(`The service id [` + e2 + `] is already in use by another ` + this.registeredIds[e2]);
    if (n2 !== void 0) {
      if (e2 === n2) throw Error(`The service [` + e2 + a2(461));
      if (this[a2(566)][n2] === void 0) throw Error(`The service [` + e2 + a2(824));
      if (this.registeredIds[n2] === `node`) throw Error(a2(841) + e2 + `]'s parent is not a group`);
    }
    this.registeredIds[e2] = `node`, this[a2(811)][e2] = { id: e2, type: `service`, icon: t2, iconText: i2, title: r2, edges: [], in: n2 };
  }
  getServices() {
    return Object.values(this.nodes).filter(q);
  }
  addJunction({ id: e2, in: t2 }) {
    var n2 = j;
    if (this.registeredIds[e2] !== void 0) throw Error(`The junction id [` + e2 + `] is already in use by another ` + this.registeredIds[e2]);
    if (t2 !== void 0) {
      if (e2 === t2) throw Error(`The junction [` + e2 + `] cannot be placed within itself`);
      if (this.registeredIds[t2] === void 0) throw Error(`The junction [` + e2 + `]'s parent does not exist. Please make sure the parent is created before this junction`);
      if (this.registeredIds[t2] === n2(646)) throw Error(`The junction [` + e2 + `]'s parent is not a group`);
    }
    this[n2(566)][e2] = `node`, this.nodes[e2] = { id: e2, type: n2(778), edges: [], in: t2 };
  }
  [j(508)]() {
    return Object.values(this.nodes).filter(ae);
  }
  getNodes() {
    return Object.values(this.nodes);
  }
  getNode(e2) {
    return this.nodes[e2] ?? null;
  }
  addGroup({ id: e2, icon: t2, in: n2, title: r2 }) {
    var _a, _b, _c;
    var i2 = j;
    if (((_a = this.registeredIds) == null ? void 0 : _a[e2]) !== void 0) throw Error(i2(448) + e2 + i2(450) + this.registeredIds[e2]);
    if (n2 !== void 0) {
      if (e2 === n2) throw Error(`The group [` + e2 + `] cannot be placed within itself`);
      if (((_b = this.registeredIds) == null ? void 0 : _b[n2]) === void 0) throw Error(`The group [` + e2 + `]'s parent does not exist. Please make sure the parent is created before this group`);
      if (((_c = this[i2(566)]) == null ? void 0 : _c[n2]) === `node`) throw Error(`The group [` + e2 + `]'s parent is not a group`);
    }
    this.registeredIds[e2] = `group`, this.groups[e2] = { id: e2, icon: t2, title: r2, in: n2 };
  }
  getGroups() {
    return Object.values(this.groups);
  }
  addEdge({ lhsId: e2, rhsId: t2, lhsDir: n2, rhsDir: r2, lhsInto: i2, rhsInto: a2, lhsGroup: o2, rhsGroup: s2, title: c2 }) {
    var l2 = j;
    if (!B(n2)) throw Error(`Invalid direction given for left hand side of edge ` + e2 + `--` + t2 + `. Expected (L,R,T,B) got ` + String(n2));
    if (!B(r2)) throw Error(`Invalid direction given for right hand side of edge ` + e2 + `--` + t2 + `. Expected (L,R,T,B) got ` + String(r2));
    if (this.nodes[e2] === void 0 && this.groups[e2] === void 0) throw Error(`The left-hand id [` + e2 + `] does not yet exist. Please create the service/group before declaring an edge to it.`);
    if (this.nodes[t2] === void 0 && this.groups[t2] === void 0) throw Error(`The right-hand id [` + t2 + l2(542));
    let u2 = this[l2(811)][e2].in, d2 = this.nodes[t2].in;
    if (o2 && u2 && d2 && u2 == d2) throw Error(`The left-hand id [` + e2 + `] is modified to traverse the group boundary, but the edge does not pass through two groups.`);
    if (s2 && u2 && d2 && u2 == d2) throw Error(`The right-hand id [` + t2 + `] is modified to traverse the group boundary, but the edge does not pass through two groups.`);
    let f2 = { lhsId: e2, lhsDir: n2, lhsInto: i2, lhsGroup: o2, rhsId: t2, rhsDir: r2, rhsInto: a2, rhsGroup: s2, title: c2 };
    this[l2(471)].push(f2), this[l2(811)][e2] && this.nodes[t2] && (this.nodes[e2][l2(471)].push(this.edges[this.edges[l2(568)] - 1]), this.nodes[t2][l2(471)].push(this.edges[this[l2(471)].length - 1]));
  }
  [j(693)]() {
    return this.edges;
  }
  getDataStructures() {
    var e2 = j;
    if (this.dataStructures === void 0) {
      let t2 = {}, r2 = Object.entries(this[e2(811)])[e2(842)]((n2, [r3, i3]) => (n2[r3] = i3[e2(471)].reduce((n3, i4) => {
        var _a, _b;
        var a3 = e2;
        let o3 = (_a = this.getNode(i4.lhsId)) == null ? void 0 : _a.in, s3 = (_b = this.getNode(i4[a3(643)])) == null ? void 0 : _b.in;
        if (o3 && s3 && o3 !== s3) {
          let e3 = K(i4.lhsDir, i4.rhsDir);
          e3 !== `bend` && (t2[o3] ?? (t2[o3] = {}), t2[o3][s3] = e3, t2[s3] ?? (t2[s3] = {}), t2[s3][o3] = e3);
        }
        if (i4.lhsId === r3) {
          let e3 = re(i4.lhsDir, i4[a3(848)]);
          e3 && (n3[e3] = i4.rhsId);
        } else {
          let e3 = re(i4.rhsDir, i4[a3(802)]);
          e3 && (n3[e3] = i4.lhsId);
        }
        return n3;
      }, {}), n2), {}), i2 = Object.keys(r2)[0], a2 = { [i2]: 1 }, o2 = Object.keys(r2).reduce((e3, t3) => t3 === i2 ? e3 : n(n({}, e3), {}, { [t3]: 1 }), {}), s2 = l((e3) => {
        let t3 = { [e3]: [0, 0] }, n2 = [e3];
        for (; n2.length > 0; ) {
          let e4 = n2.shift();
          if (e4) {
            a2[e4] = 1, delete o2[e4];
            let i3 = r2[e4], [s3, c3] = t3[e4];
            Object.entries(i3).forEach(([e5, r3]) => {
              a2[r3] || (t3[r3] = ie([s3, c3], e5), n2.push(r3));
            });
          }
        }
        return t3;
      }, `BFS`), c2 = [s2(i2)];
      for (; Object.keys(o2)[e2(568)] > 0; ) c2.push(s2(Object.keys(o2)[0]));
      this.dataStructures = { adjList: r2, spatialMaps: c2, groupAlignments: t2 };
    }
    return this.dataStructures;
  }
  setElementForId(e2, t2) {
    this.elements[e2] = t2;
  }
  getElementById(e2) {
    return this.elements[e2];
  }
  getConfig() {
    var e2 = j;
    return S(n(n({}, X), x()[e2(744)]));
  }
  getConfigField(e2) {
    var t2 = j;
    return this[t2(496)]()[e2];
  }
}, l(L, `ArchitectureDB`), L), se = l((e2, t2) => {
  var r2 = j;
  k(e2, t2), e2.groups.map((e3) => t2.addGroup(e3)), e2[r2(732)].map((e3) => t2.addService(n(n({}, e3), {}, { type: `service` }))), e2[r2(606)][r2(515)]((e3) => t2.addJunction(n(n({}, e3), {}, { type: r2(778) }))), e2.edges.map((e3) => t2.addEdge(e3));
}, `populateDb`), ce = { parser: { yy: void 0 }, parse: l((function() {
  var e2 = a(function* (e3) {
    var _a;
    var t2 = M;
    let n2 = yield s(`architecture`, e3);
    c[t2(899)](n2);
    let r2 = (_a = ce.parser) == null ? void 0 : _a.yy;
    if (!(r2 instanceof oe)) throw Error(`parser.parser?.yy was not a ArchitectureDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.`);
    se(n2, r2);
  });
  return function(t2) {
    return e2.apply(this, arguments);
  };
})(), `parse`) }, le = l((e2) => `
  .edge {
    stroke-width: ` + e2.archEdgeWidth + `;
    stroke: ` + e2[j(609)] + `;
    fill: none;
  }

  .arrow {
    fill: ` + e2.archEdgeArrowColor + `;
  }

  .node-bkg {
    fill: none;
    stroke: ` + e2.archGroupBorderColor + `;
    stroke-width: ` + e2.archGroupBorderWidth + j(806), `getStyles`), Z = l((e2) => `<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/>` + e2 + `</g>`, `wrapIcon`), ue = { prefix: `mermaid-architecture`, height: 80, width: 80, icons: { database: { body: Z(j(516)) }, server: { body: Z(`<rect x="17.5" y="17.5" width="45" height="45" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="32.5" x2="62.5" y2="32.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="47.5" x2="62.5" y2="47.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><g><path d="m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><path d="m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><path d="m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g>`) }, disk: { body: Z(j(625)) }, internet: { body: Z(`<circle cx="40" cy="40" r="22.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="40" y1="17.5" x2="40" y2="62.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="40" x2="62.5" y2="40" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m39.99,17.51c-15.28,11.1-15.28,33.88,0,44.98" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m40.01,17.51c15.28,11.1,15.28,33.88,0,44.98" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="19.75" y1="30.1" x2="60.25" y2="30.1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="19.75" y1="49.9" x2="60.25" y2="49.9" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>`) }, cloud: { body: Z(`<path d="m65,47.5c0,2.76-2.24,5-5,5H20c-2.76,0-5-2.24-5-5,0-1.87,1.03-3.51,2.56-4.36-.04-.21-.06-.42-.06-.64,0-2.6,2.48-4.74,5.65-4.97,1.65-4.51,6.34-7.76,11.85-7.76.86,0,1.69.08,2.5.23,2.09-1.57,4.69-2.5,7.5-2.5,6.1,0,11.19,4.38,12.28,10.17,2.14.56,3.72,2.51,3.72,4.83,0,.03,0,.07-.01.1,2.29.46,4.01,2.48,4.01,4.9Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>`) }, unknown: T, blank: { body: Z(``) } } }, de = l((function() {
  var e2 = a(function* (e3, t2, n2, r2) {
    let i2 = n2[M(478)](`padding`), o2 = n2.getConfigField(`iconSize`), s2 = o2 / 2, c2 = o2 / 6, l2 = c2 / 2;
    yield Promise.all(t2.edges().map((function() {
      var t3 = a(function* (t4) {
        var _a, _b;
        var a2 = M;
        let { source: o3, sourceDir: u2, sourceArrow: d2, sourceGroup: p2, target: m2, targetDir: h2, targetArrow: g2, targetGroup: _2, label: v2 } = J(t4), { x: y2, y: b2 } = t4[0][a2(577)](), { x: x2, y: S2 } = t4[0].midpoint(), { x: w2, y: T2 } = t4[0].targetEndpoint(), E2 = i2 + 4;
        if (p2 && (V(u2) ? y2 += u2 === `L` ? -E2 : E2 : b2 += u2 === `T` ? -E2 : E2 + 18), _2 && (V(h2) ? w2 += h2 === `L` ? -E2 : E2 : T2 += h2 === `T` ? -E2 : E2 + 18), !p2 && ((_a = n2.getNode(o3)) == null ? void 0 : _a.type) === `junction` && (V(u2) ? y2 += u2 === `L` ? s2 : -s2 : b2 += u2 === `T` ? s2 : -s2), !_2 && ((_b = n2.getNode(m2)) == null ? void 0 : _b.type) === `junction` && (V(h2) ? w2 += h2 === `L` ? s2 : -s2 : T2 += h2 === `T` ? s2 : -s2), t4[0][a2(560)].rscratch) {
          let t5 = e3.insert(`g`);
          if (t5.insert(`path`).attr(`d`, `M ` + y2 + `,` + b2 + ` L ` + x2 + `,` + S2 + ` L` + w2 + `,` + T2 + ` `)[a2(897)](`class`, `edge`).attr(`id`, r2 + `-` + C(o3, m2, { prefix: `L` })), d2) {
            let e4 = V(u2) ? R[u2](y2, c2) : y2 - l2, n3 = H(u2) ? R[u2](b2, c2) : b2 - l2;
            t5.insert(`polygon`).attr(`points`, te[u2](c2)).attr(`transform`, a2(534) + e4 + `,` + n3 + `)`).attr(`class`, `arrow`);
          }
          if (g2) {
            let e4 = V(h2) ? R[h2](w2, c2) : w2 - l2, n3 = H(h2) ? R[h2](T2, c2) : T2 - l2;
            t5.insert(a2(846)).attr(`points`, te[h2](c2)).attr(`transform`, `translate(` + e4 + `,` + n3 + `)`).attr(`class`, `arrow`);
          }
          if (v2) {
            let e4 = U(u2, h2) ? `XY` : V(u2) ? `X` : `Y`, n3 = 0;
            n3 = e4 === `X` ? Math.abs(y2 - w2) : e4 === `Y` ? Math[a2(549)](b2 - T2) / 1.5 : Math[a2(549)](y2 - w2) / 2;
            let r3 = t5.append(`g`);
            if (yield O(r3, v2, { useHtmlLabels: false, width: n3, classes: `architecture-service-label` }, f()), r3.attr(`dy`, a2(494)).attr(`alignment-baseline`, `middle`).attr(`dominant-baseline`, `middle`)[a2(897)](`text-anchor`, `middle`), e4 === `X`) r3.attr(`transform`, `translate(` + x2 + `, ` + S2 + `)`);
            else if (e4 === `Y`) r3.attr(`transform`, `translate(` + x2 + `, ` + S2 + a2(571));
            else if (e4 === `XY`) {
              let e5 = re(u2, h2);
              if (e5 && W(e5)) {
                let t6 = r3.node().getBoundingClientRect(), [n4, i3] = G(e5);
                r3[a2(897)](a2(895), `auto`).attr(`transform`, a2(774) + -1 * n4 * i3 * 45 + `)`);
                let o4 = r3.node()[a2(700)]();
                r3[a2(897)](`transform`, `
                translate(` + x2 + `, ` + (S2 - t6.height / 2) + `)
                translate(` + n4 * o4.width / 2 + `, ` + i3 * o4.height / 2 + `)
                rotate(` + -1 * n4 * i3 * 45 + `, 0, ` + t6.height / 2 + `)
              `);
              }
            }
          }
        }
      });
      return function(e4) {
        return t3[M(637)](this, arguments);
      };
    })()));
  });
  return function(t2, n2, r2, i2) {
    return e2.apply(this, arguments);
  };
})(), `drawEdges`), fe = l((function() {
  var e2 = a(function* (e3, t2, n2, r2) {
    let i2 = n2.getConfigField(`padding`) * 0.75, o2 = n2.getConfigField(`fontSize`), s2 = n2.getConfigField(`iconSize`) / 2;
    yield Promise.all(t2.nodes().map((function() {
      var t3 = a(function* (t4) {
        var a2 = M;
        let c2 = Y(t4);
        if (c2.type === `group`) {
          let { h: l2, w: u2, x1: d2, y1: p2 } = t4.boundingBox(), m2 = e3.append(`rect`);
          m2.attr(`id`, r2 + `-group-` + c2.id).attr(`x`, d2 + s2).attr(`y`, p2 + s2).attr(`width`, u2)[a2(897)](`height`, l2).attr(`class`, `node-bkg`);
          let h2 = e3.append(`g`), g2 = d2, _2 = p2;
          if (c2.icon) {
            let e4 = h2.append(`g`);
            e4.html(`<g>` + (yield E(c2.icon, { height: i2, width: i2, fallbackPrefix: ue.prefix })) + a2(762)), e4.attr(`transform`, `translate(` + (g2 + s2 + 1) + `, ` + (_2 + s2 + 1) + `)`), g2 += i2, _2 += o2 / 2 - 1 - 2;
          }
          if (c2.label) {
            let e4 = h2[a2(505)](`g`);
            yield O(e4, c2.label, { useHtmlLabels: false, width: u2, classes: `architecture-service-label` }, f()), e4.attr(`dy`, `1em`).attr(`alignment-baseline`, `middle`).attr(`dominant-baseline`, `start`).attr(a2(518), `start`), e4.attr(`transform`, `translate(` + (g2 + s2 + 4) + `, ` + (_2 + s2 + 2) + `)`);
          }
          n2.setElementForId(c2.id, m2);
        }
      });
      return function(e4) {
        return t3.apply(this, arguments);
      };
    })()));
  });
  return function(t2, n2, r2, i2) {
    return e2.apply(this, arguments);
  };
})(), `drawGroups`), pe = l((function() {
  var e2 = a(function* (e3, t2, n2, r2) {
    var i2 = M;
    let a2 = f();
    for (let o2 of n2) {
      let n3 = t2.append(`g`), s2 = e3[i2(478)](`iconSize`);
      if (o2.title) {
        let e4 = n3.append(`g`);
        yield O(e4, o2.title, { useHtmlLabels: false, width: s2 * 1.5, classes: `architecture-service-label` }, a2), e4.attr(`dy`, `1em`).attr(`alignment-baseline`, `middle`).attr(`dominant-baseline`, i2(790)).attr(`text-anchor`, `middle`), e4.attr(i2(725), `translate(` + s2 / 2 + `, ` + s2 + `)`);
      }
      let c2 = n3.append(`g`);
      if (o2.icon) c2.html(`<g>` + (yield E(o2.icon, { height: s2, width: s2, fallbackPrefix: ue.prefix })) + i2(762));
      else if (o2[i2(871)]) {
        c2[i2(867)](`<g>` + (yield E(i2(487), { height: s2, width: s2, fallbackPrefix: ue.prefix })) + `</g>`);
        let e4 = c2.append(`g`).append(i2(579)).attr(i2(719), s2).attr(`height`, s2).append(`div`).attr(`class`, `node-icon-text`).attr(i2(885), `height: ` + s2 + `px;`)[i2(505)](`div`)[i2(867)](y(o2.iconText, a2)), t3 = parseInt(window.getComputedStyle(e4.node(), null).getPropertyValue(`font-size`)[i2(463)](/\D/g, ``)) ?? 16;
        e4.attr(`style`, `-webkit-line-clamp: ` + Math.floor((s2 - 2) / t3) + `;`);
      } else c2[i2(505)](i2(764)).attr(`class`, `node-bkg`).attr(`id`, r2 + i2(883) + o2.id)[i2(897)](`d`, i2(483) + s2 + ` V5 Q0,0 5,0 H` + (s2 - 5) + ` Q` + s2 + `,0 ` + s2 + `,5 V` + s2 + ` Z`);
      n3[i2(897)](`id`, r2 + `-service-` + o2.id).attr(`class`, `architecture-service`);
      let { width: l2, height: u2 } = n3.node()[i2(594)]();
      o2.width = l2, o2.height = u2, e3.setElementForId(o2.id, n3);
    }
    return 0;
  });
  return function(t2, n2, r2, i2) {
    return e2.apply(this, arguments);
  };
})(), `drawServices`), me = l(function(e2, t2, n2, r2) {
  n2.forEach((n3) => {
    var i2 = M;
    let a2 = t2.append(`g`), o2 = e2.getConfigField(`iconSize`);
    a2.append(`g`).append(`rect`).attr(`id`, r2 + `-node-` + n3.id).attr(`fill-opacity`, `0`).attr(i2(719), o2).attr(`height`, o2), a2.attr(`class`, `architecture-junction`);
    let { width: s2, height: c2 } = a2._groups[0][0].getBBox();
    a2.width = s2, a2.height = c2, e2.setElementForId(n3.id, a2);
  });
}, `drawJunctions`);
D([{ name: ue.prefix, icons: ue }]), A.use(I.default);
function he(e2, t2, n2) {
  e2.forEach((e3) => {
    var r2 = M;
    t2.add({ group: `nodes`, data: { type: r2(509), id: e3.id, icon: e3.icon, label: e3.title, parent: e3.in, width: n2.getConfigField(r2(746)), height: n2.getConfigField(`iconSize`) }, classes: `node-service` });
  });
}
l(he, `addServices`);
function ge(e2, t2, n2) {
  e2.forEach((e3) => {
    var r2 = M;
    t2.add({ group: r2(811), data: { type: `junction`, id: e3.id, parent: e3.in, width: n2.getConfigField(`iconSize`), height: n2.getConfigField(`iconSize`) }, classes: `node-junction` });
  });
}
l(ge, `addJunctions`);
function _e(e2, t2) {
  t2.nodes().map((t3) => {
    var n2 = M;
    let r2 = Y(t3);
    r2.type !== n2(831) && (r2.x = t3.position().x, r2.y = t3.position().y, e2.getElementById(r2.id).attr(`transform`, n2(534) + (r2.x || 0) + `,` + (r2.y || 0) + `)`));
  });
}
l(_e, `positionNodes`);
function ve(e2, t2) {
  e2.forEach((e3) => {
    var n2 = M;
    t2.add({ group: `nodes`, data: { type: `group`, id: e3.id, icon: e3.icon, label: e3[n2(661)], parent: e3.in }, classes: `node-group` });
  });
}
function ye() {
  var e2 = [`getEdgeListToNode`, `posToStr`, `CoSEEdge`, `getBBox`, `ADAPTATION_LOWER_NODE_LIMIT`, `estimatedSize`, `left`, `bottom`, `lengthX`, `graphManager`, `getCenterY`, `LGraphManager`, `isConnected`, `getPred1`, `margin`, `junctions`, `doPostLayout`, `SIMPLE_NODE_SIZE`, `archEdgeColor`, `getDiagramTitle`, `head`, `Parent node is null!`, `connectedNodes`, `getHeightHalf`, `collection`, `2781633xPixnO`, `getOrgRatio`, `getOtherEnd`, `packComponents`, `clearCompounds`, `gravitationForceY`, `inverseTransformY`, `remove`, `coolingCycle`, `<rect x="20" y="15" width="40" height="50" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="24" cy="19.17" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="56" cy="19.17" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="24" cy="60.83" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="56" cy="60.83" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="33.75" rx="14" ry="14.58" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="33.75" rx="4" ry="4.17" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m37.51,42.52l-4.83,13.22c-.26.71-1.1,1.02-1.76.64l-4.18-2.42c-.66-.38-.81-1.26-.33-1.84l9.01-10.8c.88-1.05,2.56-.08,2.09,1.2Z" style="fill: #fff; stroke-width: 0px;"/>`, `labelWidth`, `notAnimatedIterations`, `isInterGraph`, `afterGrowthIterations`, `getRight`, `vertical`, `MIN_VALUE`, `updateBounds`, `nodesInRelativeHorizontal`, `16rAUcoE`, `height`, `apply`, `CONVERGENCE_CHECK_PERIOD`, `coolingFactor`, `match_score`, `TILING_COMPARE_BY`, `isFixed`, `rhsId`, `dummyToNodeForVerticalAlignment`, `horizontal`, `node`, `NODE_DIMENSIONS_INCLUDE_LABELS`, `tick`, `shiftNode`, `descendants`, `_partition`, `get`, `edge`, `getWorldOrgX`, `value`, `samplingType`, `getNode`, `data`, `fixedNodesOnHorizontal`, `include`, `title`, `tileNodes`, `nodeId`, `positionNodesRandomly`, `RELAX_MOVEMENT_ON_CONSTRAINTS`, `keySet`, `uniformLeafNodeSizes`, `resetAllNodesToApplyGravitation`, `getAlignments`, `calcSpringForces`, `18mWknXm`, `lworldOrgX`, `default`, `eles`, `Point`, `ENFORCE_CONSTRAINTS`, `display`, `displacementY`, `lengthY`, `DEFAULT_INCREMENTAL`, `set_object_at`, `Source and/or target is null!`, `DEFAULT_ANIMATION_PERIOD`, `TILE`, `noOfChildren`, `setHeight`, `addRoot`, `alignmentConstraint`, `getMaxY`, `data(width)`, `layoutQuality`, `union`, `getEdges`, `bind`, `DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR`, `position`, `DEFAULT_COOLING_FACTOR_INCREMENTAL`, `transpose`, `DEFAULT_UNIFORM_LEAF_NODE_SIZES`, `getBoundingClientRect`, `centerX`, `tilingPaddingVertical`, `gap_penalty`, `elements`, `straight`, `rows`, `parent`, `size`, `nodeRepulsion`, `labelMarginTop`, `paddingRight`, `ceil`, `edgeElasticity`, `setWidth`, `sequence1`, `isGrowthFinished`, `tileNodesByFavoringDim`, `initSpringEmbedder`, `width`, `ldeviceOrgY`, `7893120ptVnHq`, `MAX_VALUE`, `from`, `2tgHWhn`, `transform`, `has`, `tail`, `topLeftY`, `resetAllNodes`, `getToBeTiled`, `proof`, `services`, `tileCompoundMembers`, `getY`, `allNodes`, `vGraphObject`, `layoutBase`, `animationOnLayout`, `shuffle`, `update`, `getDiagonal`, `getOwner`, `getNeighborsList`, `architecture`, `data(sourceEndpoint)`, `iconSize`, `entries`, `propogateDisplacementToChildren`, `relocateComponent`, `svd`, `relativePlacementConstraint`, `push`, `top`, `componentsOnHorizontal`, `3953690oZOCQY`, `setDeviceOrgX`, `calcInclusionTreeDepths`, `dotProduct`, `isValidArchitectureDirectionPair`, `labelMarginLeft`, `lca`, `</g>`, `right`, `path`, `getLength`, `createBendpointsFromDummyNodes`, `boundingbox`, `emit`, `nodeToTempPositionMapVertical`, `min`, `initialAnimationPeriod`, `move`, `difference`, `rotate(`, `_quicksort`, `padding`, `637972cyYhmj`, `junction`, `groups`, `normalize`, `DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION`, `maxIterations`, `getAllNodesToApplyGravitation`, `getTop`, `.node-service`, `positionNodesRadially`, `784685xvmSEe`, `setDiagramId`, `isOverlapingSourceAndTarget`, `middle`, `undefined`, `owner`, `pow`, `ldeviceExtX`, `__esModule`, `5101201RoKfCP`, `source`, `getBottom`, `_swap`, `insertBefore`, `getArchitectureDirectionPair`, `lhsDir`, `newGraph`, `getAccDescription`, `calcIdealRowWidth`, `;
    stroke-dasharray: 8;
  }
  .node-icon-text {
    display: flex; 
    align-items: center;
  }
  
  .node-icon-text > div {
    color: #fff;
    margin: 1px;
    height: fit-content;
    text-align: center;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
`, `Not an inter-graph edge!`, `Not in owner's edge list!`, `getWidthHalf`, `getHeight`, `nodes`, `DEFAULT_ANIMATION_DURING_LAYOUT`, `indexOf`, `fixedComponentsOnVertical`, `DEFAULT_ANIMATION_ON_LAYOUT`, `dummyToNodeForHorizontalAlignment`, `rect`, `getInclusionTreeDepth`, `QUALITY`, `next`, `toBeTiled`, `animationPeriod`, `Source and/or target owner is invalid!`, `]'s parent does not exist. Please make sure the parent is created before this service`, `object`, `constraints`, `Cannot call a class as a function`, `incremental`, `ldeviceExtY`, `fixedComponentsOnHorizontal`, `group`, `pos`, `nodeToRelativeConstraintMapHorizontal`, `getNodeDegreeWithChildren`, `gravitationForceX`, `bend`, `Integer`, `done`, `compoundOrder`, `sqrt`, `The service [`, `reduce`, `fixedNodeConstraint`, `sourceInLca`, `splice`, `polygon`, `cos`, `rhsDir`, `RectangleD`, `HashMap`, `multMat`, `class`, `initialCoolingFactor`, `fixedNodeSet`, `FDLayout`, `ANIMATE`, `rowWidth`, `nodeIndexes`, `initParameters`, `type`, `getWorldOrgY`, `not`, `tiledMemberPack`, `INITIAL_WORLD_BOUNDARY`, `DEFAULT_GRAVITY_RANGE_FACTOR`, `endBatch`, `html`, `0 50%`, `branchRadialLayout`, `DEFAULT_EDGE_LENGTH`, `iconText`, `WORLD_CENTER_X`, `tracebackGrid`, `labelPosVertical`, `idealRowWidth`, `getLayout`, `runLayout`, `call`, `tile`, `isArchitectureDirectionXY`, `totalDisplacementThreshold`, `getLeft`, `-node-`, `xCoords`, `style`, `oldTotalDisplacement`, `add`, `values`, `Edge already in source and/or target incidency list!`, `step`, `max`, `calculateRepulsionForceOfANode`, `lworldExtX`, `merge`, `dominant-baseline`, `Ready`, `attr`, `Source or target not in graph!`, `debug`, `withChildren`, `shiftToLastRow`, `8349850CdgETD`, `getAllEdges`, `sign`, `displacementThresholdPerNode`, `repulsionForceY`, `coolingAdjuster`, `getGraphs`, `child`, `connectComponents`, `Graph already in this graph mgr!`, `create`, `intersection`, `set`, `The group id [`, `shift`, `] is already in use by another `, `getWidth`, `nextDouble`, `grid`, `moveNodes`, `LGraphObject`, `function`, `edge[label]`, `fixedNodeWeight`, `prototype`, `topLeftX`, `] cannot be placed within itself`, `getCenterX`, `replace`, `getScore`, `direction`, `getRect`, `WORLD_BOUNDARY`, `idealEdgeLength`, `getLongestRowIndex`, `setCenter`, `edges`, `surrounding`, `key`, `setY`, `clear`, `createID`, `text-valign`, `getConfigField`, `nodeToTempPositionMapHorizontal`, `getAllNodes`, `segment-weights`, `getIntersection`, `M0,`, `floor`, `yCoords`, `layout`, `blank`, `dummy`, `connectedEdges`, `isTreeGrowing`, `constructor`, `updateDisplacements`, `isOneAncestorOfOther`, `1em`, `getEstimatedSize`, `getConfig`, `getChild`, `targetInLca`, `isRemoteUse`, `removeListener`, `run`, `inclusionTreeDepth`, `ADAPTATION_UPPER_NODE_LIMIT`, `gravityConstant`, `append`, `allNodesToApplyGravitation`, `jMax`, `getJunctions`, `service`, `isParent`, `all`, `WORLD_CENTER_Y`, `exports`, `enumerable`, `map`, `<path id="b" data-name="4" d="m20,57.86c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path id="c" data-name="3" d="m20,45.95c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path id="d" data-name="2" d="m20,34.05c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse id="e" data-name="1" cx="40" cy="22.14" rx="20" ry="7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="20" y1="57.86" x2="20" y2="22.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="60" y1="57.86" x2="60" y2="22.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>`, `setDeviceOrgY`, `text-anchor`, `rootGraph`, `initConstraintVariables`, `filter`, `labelHeight`, `isArray`, `setWorldOrgY`, `newNode`, `CoSEConstants`, `lworldExtY`, `quality`, `setGraphManager`, `displacementX`, `TREE_REDUCTION_ON_INCREMENTAL`, `paddingLeft`, `slice`, `translate(`, `data(height)`, `calcEstimatedSize`, `random`, `hypot`, `Owner graph manager is invalid!`, `getGraphManager`, `seq1`, `] does not yet exist. Please create the service/group before declaring an edge to it.`, `COOLING_ADAPTATION_FACTOR`, `uniqueID`, `center`, `none`, `edgeToDummyNodes`, `TRANSFORM_ON_CONSTRAINT_HANDLING`, `abs`, `doIntersect`, `gap`, `listeners`, `idToNodeMap`, `TILING_PADDING_HORIZONTAL`, `return`, `Node already in graph!`, `THREE_PI`, `adjustLocations`, `getRelativeConstraints`, `_private`, `forEach`, `getDeviceExtX`, `animate`, `lworldOrgY`, `getRoot`, `registeredIds`, `css`, `length`, `ONE_AND_HALF_PI`, `getOtherEndInGraph`, `) rotate(-90)`, `getNodes`, `includes`, `getTopMostNodes`, `concat`, `randomize`, `sourceEndpoint`, `labelPosHorizontal`, `foreignObject`, `graphs`, `boundingBox`, `target`, `_get`, `iMax`, `getParent`, `verticalPadding`, `nodeToRelativeConstraintMapVertical`, `keys`, `getX`, `compoundGravityConstant`];
  return ye = function() {
    return e2;
  }, ye();
}
l(ve, `addGroups`);
function be(e2, t2) {
  e2.forEach((e3) => {
    var n2 = M;
    let { lhsId: r2, rhsId: i2, lhsInto: a2, lhsGroup: o2, rhsInto: s2, lhsDir: c2, rhsDir: l2, rhsGroup: u2, title: d2 } = e3, f2 = U(e3.lhsDir, e3[n2(848)]) ? `segments` : n2(705), p2 = { id: r2 + `-` + i2, label: d2, source: r2, sourceDir: c2, sourceArrow: a2, sourceGroup: o2, sourceEndpoint: c2 === `L` ? `0 50%` : c2 === `R` ? `100% 50%` : c2 === `T` ? `50% 0` : `50% 100%`, target: i2, targetDir: l2, targetArrow: s2, targetGroup: u2, targetEndpoint: l2 === `L` ? n2(868) : l2 === `R` ? `100% 50%` : l2 === `T` ? `50% 0` : `50% 100%` };
    t2.add({ group: `edges`, data: p2, classes: f2 });
  });
}
l(be, `addEdges`);
function xe(e2, t2, n2) {
  let r2 = l((e3, t3) => Object.entries(e3).reduce((e4, [r3, i3]) => {
    var _a;
    var a3 = M;
    let o2 = 0, s2 = Object.entries(i3);
    if (s2.length === 1) return e4[r3] = s2[0][1], e4;
    for (let i4 = 0; i4 < s2[a3(568)] - 1; i4++) for (let a4 = i4 + 1; a4 < s2.length; a4++) {
      let [c2, l2] = s2[i4], [u2, d2] = s2[a4];
      if (((_a = n2[c2]) == null ? void 0 : _a[u2]) === t3) e4[r3] ?? (e4[r3] = []), e4[r3] = [...e4[r3], ...l2, ...d2];
      else if (c2 === `default` || u2 === `default`) e4[r3] ?? (e4[r3] = []), e4[r3] = [...e4[r3], ...l2, ...d2];
      else {
        let t4 = r3 + `-` + o2++;
        e4[t4] = l2;
        let n3 = r3 + `-` + o2++;
        e4[n3] = d2;
      }
    }
    return e4;
  }, {}), `flattenAlignments`), [i2, a2] = t2.map((t3) => {
    var n3 = M;
    let i3 = {}, a3 = {};
    return Object.entries(t3).forEach(([t4, [n4, r3]]) => {
      var _a;
      var o2 = M, s2, c2;
      let l2 = ((_a = e2[o2(657)](t4)) == null ? void 0 : _a.in) ?? `default`;
      i3[r3] ?? (i3[r3] = {}), (s2 = i3[r3])[l2] ?? (s2[l2] = []), i3[r3][l2].push(t4), a3[n4] ?? (a3[n4] = {}), (c2 = a3[n4])[l2] ?? (c2[l2] = []), a3[n4][l2].push(t4);
    }), { horiz: Object.values(r2(i3, `horizontal`)).filter((e3) => e3.length > 1), vert: Object.values(r2(a3, `vertical`)).filter((e3) => e3[n3(568)] > 1) };
  }).reduce(([e3, t3], { horiz: n3, vert: r3 }) => [[...e3, ...n3], [...t3, ...r3]], [[], []]);
  return { horizontal: i2, vertical: a2 };
}
l(xe, `getAlignments`);
function Se(e2, t2) {
  var n2 = j;
  let r2 = [], i2 = l((e3) => e3[0] + `,` + e3[1], n2(592)), a2 = l((e3) => e3.split(`,`).map((e4) => parseInt(e4)), `strToPos`);
  return e2.forEach((e3) => {
    var o2 = n2;
    let s2 = Object.fromEntries(Object.entries(e3).map(([e4, t3]) => [i2(t3), e4])), c2 = [i2([0, 0])], l2 = {}, u2 = { L: [-1, 0], R: [1, 0], T: [0, 1], B: [0, -1] };
    for (; c2.length > 0; ) {
      let e4 = c2.shift();
      if (e4) {
        l2[e4] = 1;
        let n3 = s2[e4];
        if (n3) {
          let d2 = a2(e4);
          Object[o2(747)](u2).forEach(([e5, a3]) => {
            var u3 = o2;
            let f2 = i2([d2[0] + a3[0], d2[1] + a3[1]]), p2 = s2[f2];
            p2 && !l2[f2] && (c2.push(f2), r2.push({ [ee[e5]]: p2, [ee[z(e5)]]: n3, gap: 1.5 * t2.getConfigField(u3(746)) }));
          });
        }
      }
    }
  }), r2;
}
l(Se, j(559));
function Ce(e2, t2, n2, r2, i2, { spatialMaps: a2, groupAlignments: s2 }) {
  return new Promise((u2) => {
    var d2 = M;
    let f2 = o(`body`).append(`div`).attr(`id`, `cy`).attr(`style`, `display:none`), p2 = A({ container: document.getElementById(`cy`), style: [{ selector: d2(653), style: { "curve-style": `straight`, "source-endpoint": `data(sourceEndpoint)`, "target-endpoint": `data(targetEndpoint)` } }, { selector: d2(457), style: { label: `data(label)` } }, { selector: `edge.segments`, style: { "curve-style": `segments`, "segment-weights": `0`, "segment-distances": [0.5], "edge-distances": `endpoints`, "source-endpoint": d2(745), "target-endpoint": `data(targetEndpoint)` } }, { selector: d2(646), style: { "compound-sizing-wrt-labels": d2(660) } }, { selector: `node[label]`, style: { "text-valign": d2(598), "text-halign": d2(545), "font-size": i2[d2(478)](`fontSize`) + `px` } }, { selector: d2(785), style: { label: `data(label)`, width: `data(width)`, height: d2(535) } }, { selector: `.node-junction`, style: { width: d2(690), height: `data(height)` } }, { selector: `.node-group`, style: { padding: i2.getConfigField(`padding`) + `px` } }], layout: { name: `grid`, boundingBox: { x1: 0, x2: 100, y1: 0, y2: 100 } } });
    f2.remove(), ve(n2, p2), he(e2, p2, i2), ge(t2, p2, i2), be(r2, p2);
    let m2 = xe(i2, a2, s2), h2 = Se(a2, i2), g2 = i2.getConfigField(`iconSize`), _2 = i2[d2(478)](`idealEdgeLengthMultiplier`) * g2, v2 = 0.5 * g2, y2 = i2.getConfigField(d2(713)), b2 = p2[d2(486)]({ name: `fcose`, quality: d2(731), randomize: i2.getConfigField(`randomize`), nodeSeparation: i2.getConfigField(`nodeSeparation`), numIter: i2.getConfigField(`numIter`), styleEnabled: false, animate: false, nodeDimensionsIncludeLabels: false, idealEdgeLength(e3) {
      let [t3, n3] = e3.connectedNodes(), { parent: r3 } = Y(t3), { parent: i3 } = Y(n3);
      return r3 === i3 ? _2 : v2;
    }, edgeElasticity(e3) {
      let [t3, n3] = e3[d2(613)](), { parent: r3 } = Y(t3), { parent: i3 } = Y(n3);
      return r3 === i3 ? y2 : 1e-3;
    }, alignmentConstraint: m2, relativePlacementConstraint: h2 });
    b2.one(`layoutstop`, () => {
      var e3 = d2;
      function t3(e4, t4, n4, r3) {
        var i3 = M;
        let a3, o2, { x: s3, y: c2 } = e4, { x: l2, y: u3 } = t4;
        o2 = (r3 - c2 + (s3 - n4) * (c2 - u3) / (s3 - l2)) / Math.sqrt(1 + ((c2 - u3) / (s3 - l2)) ** 2), a3 = Math.sqrt((r3 - c2) ** 2 + (n4 - s3) ** 2 - o2 ** 2);
        let d3 = Math[i3(840)]((l2 - s3) ** 2 + (u3 - c2) ** 2);
        a3 /= d3;
        let f3 = (l2 - s3) * (r3 - c2) - (u3 - c2) * (n4 - s3);
        switch (true) {
          case f3 >= 0:
            f3 = 1;
            break;
          case f3 < 0:
            f3 = -1;
            break;
        }
        let p3 = (l2 - s3) * (n4 - s3) + (u3 - c2) * (r3 - c2);
        switch (true) {
          case p3 >= 0:
            p3 = 1;
            break;
          case p3 < 0:
            p3 = -1;
            break;
        }
        return o2 = Math.abs(o2) * f3, a3 *= p3, { distances: o2, weights: a3 };
      }
      l(t3, `getSegmentWeights`), p2.startBatch();
      for (let r3 of Object[e3(888)](p2.edges())) {
        var n3;
        if ((n3 = r3[e3(658)]) != null && n3.call(r3)) {
          let { x: n4, y: i3 } = r3.source().position(), { x: a3, y: o2 } = r3[e3(582)]().position();
          if (n4 !== a3 && i3 !== o2) {
            let n5 = r3.sourceEndpoint(), i4 = r3.targetEndpoint(), { sourceDir: a4 } = J(r3), [o3, s3] = H(a4) ? [n5.x, i4.y] : [i4.x, n5.y], { weights: c2, distances: l2 } = t3(n5, i4, o3, s3);
            r3.style(`segment-distances`, l2), r3.style(e3(481), c2);
          }
        }
      }
      p2[e3(866)](), b2.run();
    }), b2.run(), p2.ready((e3) => {
      var t3 = d2;
      c.info(t3(896), e3), u2(p2);
    });
  });
}
l(Ce, `layoutArchitecture`);
var we = { parser: ce, get db() {
  return new oe();
}, renderer: { draw: l((function() {
  var e2 = a(function* (e3, t2, n2, r2) {
    var i2 = M;
    let a2 = r2.db;
    a2.setDiagramId(t2);
    let o2 = a2.getServices(), s2 = a2.getJunctions(), c2 = a2.getGroups(), l2 = a2.getEdges(), u2 = a2.getDataStructures(), d2 = w(t2), f2 = d2.append(`g`);
    f2.attr(i2(852), `architecture-edges`);
    let p2 = d2.append(`g`);
    p2[i2(897)](`class`, `architecture-services`);
    let m2 = d2.append(`g`);
    m2.attr(`class`, `architecture-groups`), yield pe(a2, p2, o2, t2), me(a2, p2, s2, t2);
    let h2 = yield Ce(o2, s2, c2, l2, a2, u2);
    yield de(f2, h2, a2, t2), yield fe(m2, h2, a2, t2), _e(a2, h2), v(void 0, d2, a2.getConfigField(`padding`), a2[i2(478)](`useMaxWidth`));
  });
  return function(t2, n2, r2, i2) {
    return e2[M(637)](this, arguments);
  };
})(), `draw`) }, styles: le };
export {
  we as diagram
};
