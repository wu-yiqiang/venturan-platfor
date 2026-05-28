import { a as e, o as t } from "./chunk-DeXYQlWK.js";
import { g as n, h as r, m as i, p as a } from "./index-D-g3WoLo.js";
import { m as o } from "./src-B18GHWxx.js";
import { n as s, t as c } from "./chunk-AGHRB4JF-CBHSUHQe.js";
import { t as l } from "./cytoscape.esm-BopBxywr.js";
var u = g;
(function(e2, t2) {
  for (var n2 = g, r2 = e2(); ; ) try {
    if (parseInt(n2(315)) / 1 + parseInt(n2(271)) / 2 + parseInt(n2(388)) / 3 + -parseInt(n2(554)) / 4 + parseInt(n2(377)) / 5 + -parseInt(n2(475)) / 6 * (parseInt(n2(344)) / 7) + parseInt(n2(437)) / 8 === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(S, 793486);
var d = e((e2, t2) => {
  (function(n2, r2) {
    var i2 = g;
    typeof e2 == i2(302) && typeof t2 == i2(302) ? t2[i2(288)] = r2() : typeof define == `function` && define.amd ? define([], r2) : typeof e2 == `object` ? e2[i2(314)] = r2() : n2[i2(314)] = r2();
  })(e2, function() {
    return (function(e3) {
      var t3 = {};
      function n2(r2) {
        if (t3[r2]) return t3[r2].exports;
        var i2 = t3[r2] = { i: r2, l: false, exports: {} };
        return e3[r2].call(i2.exports, i2, i2.exports, n2), i2.l = true, i2.exports;
      }
      return n2.m = e3, n2.c = t3, n2.i = function(e4) {
        return e4;
      }, n2.d = function(e4, t4, r2) {
        n2.o(e4, t4) || Object.defineProperty(e4, t4, { configurable: false, enumerable: true, get: r2 });
      }, n2.n = function(e4) {
        var t4 = e4 && e4.__esModule ? function() {
          return e4.default;
        } : function() {
          return e4;
        };
        return n2.d(t4, `a`, t4), t4;
      }, n2.o = function(e4, t4) {
        var n3 = g;
        return Object.prototype[n3(347)][n3(400)](e4, t4);
      }, n2.p = ``, n2(n2.s = 26);
    })([function(e3, t3, n2) {
      var r2 = g;
      function i2() {
      }
      i2[r2(356)] = 1, i2.DEFAULT_CREATE_BENDS_AS_NEEDED = false, i2[r2(524)] = false, i2.DEFAULT_ANIMATION_ON_LAYOUT = true, i2.DEFAULT_ANIMATION_DURING_LAYOUT = false, i2.DEFAULT_ANIMATION_PERIOD = 50, i2.DEFAULT_UNIFORM_LEAF_NODE_SIZES = false, i2.DEFAULT_GRAPH_MARGIN = 15, i2.NODE_DIMENSIONS_INCLUDE_LABELS = false, i2.SIMPLE_NODE_SIZE = 40, i2.SIMPLE_NODE_HALF_SIZE = i2.SIMPLE_NODE_SIZE / 2, i2.EMPTY_COMPOUND_NODE_SIZE = 40, i2.MIN_EDGE_LENGTH = 1, i2.WORLD_BOUNDARY = 1e6, i2[r2(231)] = i2.WORLD_BOUNDARY / 1e3, i2.WORLD_CENTER_X = 1200, i2.WORLD_CENTER_Y = 900, e3[r2(288)] = i2;
    }, function(e3, t3, n2) {
      var r2 = g, i2 = n2(2), a2 = n2(8), o2 = n2(9);
      function s2(e4, t4, n3) {
        var r3 = g;
        i2[r3(400)](this, n3), this[r3(431)] = false, this.vGraphObject = n3, this.bendpoints = [], this.source = e4, this[r3(348)] = t4;
      }
      for (var c2 in s2.prototype = Object.create(i2[r2(280)]), i2) s2[c2] = i2[c2];
      s2[r2(280)].getSource = function() {
        return this.source;
      }, s2[r2(280)].getTarget = function() {
        return this.target;
      }, s2.prototype[r2(263)] = function() {
        var e4 = r2;
        return this[e4(263)];
      }, s2[r2(280)].getLength = function() {
        return this.length;
      }, s2.prototype[r2(431)] = function() {
        return this.isOverlapingSourceAndTarget;
      }, s2.prototype.getBendpoints = function() {
        var e4 = r2;
        return this[e4(522)];
      }, s2.prototype.getLca = function() {
        var e4 = r2;
        return this[e4(555)];
      }, s2.prototype.getSourceInLca = function() {
        var e4 = r2;
        return this[e4(304)];
      }, s2.prototype.getTargetInLca = function() {
        return this.targetInLca;
      }, s2.prototype.getOtherEnd = function(e4) {
        if (this.source === e4) return this.target;
        if (this.target === e4) return this.source;
        throw `Node is not incident with this edge`;
      }, s2.prototype.getOtherEndInGraph = function(e4, t4) {
        for (var n3 = r2, i3 = this.getOtherEnd(e4), a3 = t4.getGraphManager()[n3(360)](); ; ) {
          if (i3.getOwner() == t4) return i3;
          if (i3[n3(557)]() == a3) break;
          i3 = i3.getOwner().getParent();
        }
        return null;
      }, s2.prototype.updateLength = function() {
        var e4 = r2, t4 = [, , , ,];
        this.isOverlapingSourceAndTarget = a2.getIntersection(this.target[e4(481)](), this.source.getRect(), t4), this.isOverlapingSourceAndTarget || (this.lengthX = t4[0] - t4[2], this.lengthY = t4[1] - t4[3], Math[e4(321)](this.lengthX) < 1 && (this[e4(477)] = o2.sign(this.lengthX)), Math.abs(this[e4(228)]) < 1 && (this.lengthY = o2.sign(this.lengthY)), this.length = Math.sqrt(this[e4(477)] * this.lengthX + this.lengthY * this.lengthY));
      }, s2.prototype.updateLengthSimple = function() {
        var e4 = r2;
        this.lengthX = this.target.getCenterX() - this.source[e4(501)](), this.lengthY = this.target.getCenterY() - this.source[e4(319)](), Math[e4(321)](this.lengthX) < 1 && (this[e4(477)] = o2.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = o2.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
      }, e3.exports = s2;
    }, function(e3, t3, n2) {
      function r2(e4) {
        this.vGraphObject = e4;
      }
      e3.exports = r2;
    }, function(e3, t3, n2) {
      var r2 = g, i2 = n2(2), a2 = n2(10), o2 = n2(13), s2 = n2(0), c2 = n2(16), l2 = n2(4);
      function u2(e4, t4, n3, r3) {
        var s3 = g;
        n3 == null && r3 == null && (r3 = t4), i2.call(this, r3), e4[s3(532)] != null && (e4 = e4.graphManager), this.estimatedSize = a2.MIN_VALUE, this.inclusionTreeDepth = a2.MAX_VALUE, this.vGraphObject = r3, this.edges = [], this.graphManager = e4, n3 != null && t4 != null ? this.rect = new o2(t4.x, t4.y, n3[s3(361)], n3[s3(465)]) : this.rect = new o2();
      }
      for (var d2 in u2.prototype = Object.create(i2.prototype), i2) u2[d2] = i2[d2];
      u2.prototype.getEdges = function() {
        var e4 = g;
        return this[e4(358)];
      }, u2[r2(280)].getChild = function() {
        var e4 = r2;
        return this[e4(301)];
      }, u2.prototype[r2(557)] = function() {
        return this.owner;
      }, u2.prototype[r2(261)] = function() {
        return this.rect.width;
      }, u2.prototype.setWidth = function(e4) {
        this.rect.width = e4;
      }, u2.prototype.getHeight = function() {
        var e4 = r2;
        return this.rect[e4(465)];
      }, u2.prototype.setHeight = function(e4) {
        this.rect.height = e4;
      }, u2.prototype[r2(501)] = function() {
        var e4 = r2;
        return this.rect.x + this.rect[e4(361)] / 2;
      }, u2.prototype.getCenterY = function() {
        return this.rect.y + this.rect.height / 2;
      }, u2.prototype.getCenter = function() {
        return new l2(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
      }, u2[r2(280)].getLocation = function() {
        var e4 = r2;
        return new l2(this[e4(371)].x, this.rect.y);
      }, u2.prototype.getRect = function() {
        return this.rect;
      }, u2.prototype.getDiagonal = function() {
        var e4 = r2;
        return Math.sqrt(this.rect.width * this.rect.width + this.rect[e4(465)] * this[e4(371)].height);
      }, u2.prototype.getHalfTheDiagonal = function() {
        var e4 = r2;
        return Math[e4(250)](this.rect.height * this[e4(371)].height + this.rect.width * this.rect.width) / 2;
      }, u2[r2(280)].setRect = function(e4, t4) {
        var n3 = r2;
        this.rect.x = e4.x, this.rect.y = e4.y, this.rect[n3(361)] = t4[n3(361)], this.rect.height = t4.height;
      }, u2[r2(280)].setCenter = function(e4, t4) {
        var n3 = r2;
        this.rect.x = e4 - this.rect[n3(361)] / 2, this.rect.y = t4 - this.rect.height / 2;
      }, u2.prototype.setLocation = function(e4, t4) {
        var n3 = r2;
        this.rect.x = e4, this[n3(371)].y = t4;
      }, u2.prototype.moveBy = function(e4, t4) {
        this.rect.x += e4, this.rect.y += t4;
      }, u2[r2(280)].getEdgeListToNode = function(e4) {
        var t4 = [], n3 = this;
        return n3.edges.forEach(function(r3) {
          if (r3.target == e4) {
            if (r3.source != n3) throw `Incorrect edge source!`;
            t4.push(r3);
          }
        }), t4;
      }, u2.prototype.getEdgesBetween = function(e4) {
        var t4 = r2, n3 = [], i3 = this;
        return i3[t4(358)].forEach(function(t5) {
          if (!(t5.source == i3 || t5.target == i3)) throw `Incorrect edge source and/or target`;
          (t5.target == e4 || t5.source == e4) && n3.push(t5);
        }), n3;
      }, u2[r2(280)].getNeighborsList = function() {
        var e4 = r2, t4 = /* @__PURE__ */ new Set(), n3 = this;
        return n3.edges[e4(538)](function(r3) {
          var i3 = e4;
          if (r3.source == n3) t4.add(r3.target);
          else {
            if (r3.target != n3) throw `Incorrect incidency!`;
            t4.add(r3[i3(546)]);
          }
        }), t4;
      }, u2.prototype.withChildren = function() {
        var e4 = r2, t4 = /* @__PURE__ */ new Set(), n3, i3;
        if (t4[e4(324)](this), this.child != null) for (var a3 = this.child.getNodes(), o3 = 0; o3 < a3.length; o3++) n3 = a3[o3], i3 = n3[e4(493)](), i3.forEach(function(e5) {
          t4.add(e5);
        });
        return t4;
      }, u2.prototype.getNoOfChildren = function() {
        var e4 = r2, t4 = 0, n3;
        if (this.child == null) t4 = 1;
        else for (var i3 = this[e4(301)][e4(487)](), a3 = 0; a3 < i3.length; a3++) n3 = i3[a3], t4 += n3.getNoOfChildren();
        return t4 == 0 && (t4 = 1), t4;
      }, u2[r2(280)].getEstimatedSize = function() {
        if (this.estimatedSize == a2.MIN_VALUE) throw `assert failed`;
        return this.estimatedSize;
      }, u2.prototype.calcEstimatedSize = function() {
        var e4 = r2;
        return this[e4(301)] == null ? this[e4(362)] = (this[e4(371)].width + this.rect.height) / 2 : (this.estimatedSize = this[e4(301)].calcEstimatedSize(), this[e4(371)].width = this.estimatedSize, this.rect[e4(465)] = this.estimatedSize, this.estimatedSize);
      }, u2[r2(280)].scatter = function() {
        var e4 = r2, t4, n3, i3 = -s2[e4(231)], a3 = s2.INITIAL_WORLD_BOUNDARY;
        t4 = s2.WORLD_CENTER_X + c2[e4(473)]() * (a3 - i3) + i3;
        var o3 = -s2[e4(231)], l3 = s2.INITIAL_WORLD_BOUNDARY;
        n3 = s2.WORLD_CENTER_Y + c2.nextDouble() * (l3 - o3) + o3, this.rect.x = t4, this[e4(371)].y = n3;
      }, u2.prototype.updateBounds = function() {
        var e4 = r2;
        if (this.getChild() == null) throw `assert failed`;
        if (this.getChild().getNodes().length != 0) {
          var t4 = this.getChild();
          if (t4.updateBounds(true), this[e4(371)].x = t4.getLeft(), this.rect.y = t4.getTop(), this.setWidth(t4.getRight() - t4.getLeft()), this.setHeight(t4[e4(232)]() - t4.getTop()), s2.NODE_DIMENSIONS_INCLUDE_LABELS) {
            var n3 = t4.getRight() - t4.getLeft(), i3 = t4.getBottom() - t4.getTop();
            this.labelWidth > n3 && (this[e4(371)].x -= (this.labelWidth - n3) / 2, this[e4(245)](this.labelWidth)), this.labelHeight > i3 && (this[e4(393)] == `center` ? this.rect.y -= (this[e4(254)] - i3) / 2 : this.labelPos == `top` && (this.rect.y -= this.labelHeight - i3), this.setHeight(this.labelHeight));
          }
        }
      }, u2.prototype.getInclusionTreeDepth = function() {
        var e4 = r2;
        if (this[e4(234)] == a2[e4(471)]) throw `assert failed`;
        return this.inclusionTreeDepth;
      }, u2.prototype.transform = function(e4) {
        var t4 = this.rect.x;
        t4 > s2.WORLD_BOUNDARY ? t4 = s2.WORLD_BOUNDARY : t4 < -s2.WORLD_BOUNDARY && (t4 = -s2.WORLD_BOUNDARY);
        var n3 = this.rect.y;
        n3 > s2.WORLD_BOUNDARY ? n3 = s2.WORLD_BOUNDARY : n3 < -s2.WORLD_BOUNDARY && (n3 = -s2.WORLD_BOUNDARY);
        var r3 = new l2(t4, n3), i3 = e4.inverseTransformPoint(r3);
        this.setLocation(i3.x, i3.y);
      }, u2[r2(280)][r2(432)] = function() {
        return this.rect.x;
      }, u2.prototype.getRight = function() {
        var e4 = r2;
        return this[e4(371)].x + this.rect.width;
      }, u2[r2(280)].getTop = function() {
        var e4 = r2;
        return this[e4(371)].y;
      }, u2.prototype.getBottom = function() {
        var e4 = r2;
        return this[e4(371)].y + this.rect[e4(465)];
      }, u2[r2(280)][r2(376)] = function() {
        return this.owner == null ? null : this.owner.getParent();
      }, e3[r2(288)] = u2;
    }, function(e3, t3, n2) {
      var r2 = g;
      function i2(e4, t4) {
        e4 == null && t4 == null ? (this.x = 0, this.y = 0) : (this.x = e4, this.y = t4);
      }
      i2.prototype.getX = function() {
        return this.x;
      }, i2.prototype.getY = function() {
        return this.y;
      }, i2.prototype.setX = function(e4) {
        this.x = e4;
      }, i2[r2(280)].setY = function(e4) {
        this.y = e4;
      }, i2.prototype.getDifference = function(e4) {
        return new DimensionD(this.x - e4.x, this.y - e4.y);
      }, i2.prototype.getCopy = function() {
        return new i2(this.x, this.y);
      }, i2.prototype[r2(249)] = function(e4) {
        return this.x += e4.width, this.y += e4.height, this;
      }, e3[r2(288)] = i2;
    }, function(e3, t3, n2) {
      var r2 = g, i2 = n2(2), a2 = n2(10), o2 = n2(0), s2 = n2(6), c2 = n2(3), l2 = n2(1), u2 = n2(13), d2 = n2(12), f2 = n2(11);
      function p2(e4, t4, n3) {
        i2.call(this, n3), this.estimatedSize = a2.MIN_VALUE, this.margin = o2.DEFAULT_GRAPH_MARGIN, this.edges = [], this.nodes = [], this.isConnected = false, this.parent = e4, t4 != null && t4 instanceof s2 ? this.graphManager = t4 : t4 != null && t4 instanceof Layout && (this.graphManager = t4.graphManager);
      }
      for (var m2 in p2[r2(280)] = Object.create(i2.prototype), i2) p2[m2] = i2[m2];
      p2.prototype.getNodes = function() {
        return this.nodes;
      }, p2.prototype.getEdges = function() {
        return this.edges;
      }, p2.prototype.getGraphManager = function() {
        var e4 = r2;
        return this[e4(532)];
      }, p2.prototype[r2(376)] = function() {
        return this.parent;
      }, p2.prototype[r2(432)] = function() {
        var e4 = r2;
        return this[e4(429)];
      }, p2.prototype.getRight = function() {
        return this.right;
      }, p2.prototype.getTop = function() {
        return this.top;
      }, p2.prototype[r2(232)] = function() {
        var e4 = r2;
        return this[e4(244)];
      }, p2.prototype[r2(390)] = function() {
        return this.isConnected;
      }, p2.prototype.add = function(e4, t4, n3) {
        var i3 = r2;
        if (t4 == null && n3 == null) {
          var a3 = e4;
          if (this[i3(532)] == null) throw `Graph has no graph mgr!`;
          if (this.getNodes().indexOf(a3) > -1) throw `Node already in graph!`;
          return a3.owner = this, this[i3(487)]().push(a3), a3;
        } else {
          var o3 = e4;
          if (!(this.getNodes().indexOf(t4) > -1 && this.getNodes().indexOf(n3) > -1)) throw `Source or target not in graph!`;
          if (!(t4[i3(370)] == n3[i3(370)] && t4.owner == this)) throw `Both owners must be this graph!`;
          return t4[i3(370)] == n3.owner ? (o3.source = t4, o3.target = n3, o3[i3(263)] = false, this[i3(316)]().push(o3), t4.edges.push(o3), n3 != t4 && n3.edges[i3(490)](o3), o3) : null;
        }
      }, p2.prototype.remove = function(e4) {
        var t4 = r2, n3 = e4;
        if (e4 instanceof c2) {
          if (n3 == null) throw `Node is null!`;
          if (!(n3[t4(370)] != null && n3.owner == this)) throw `Owner graph is invalid!`;
          if (this.graphManager == null) throw t4(460);
          for (var i3 = n3.edges[t4(469)](), a3, o3 = i3.length, s3 = 0; s3 < o3; s3++) a3 = i3[s3], a3.isInterGraph ? this.graphManager.remove(a3) : a3.source[t4(370)].remove(a3);
          var u3 = this.nodes.indexOf(n3);
          if (u3 == -1) throw `Node not in owner node list!`;
          this.nodes.splice(u3, 1);
        } else if (e4 instanceof l2) {
          var a3 = e4;
          if (a3 == null) throw `Edge is null!`;
          if (!(a3.source != null && a3.target != null)) throw `Source and/or target is null!`;
          if (!(a3.source.owner != null && a3[t4(348)].owner != null && a3.source.owner == this && a3.target.owner == this)) throw `Source and/or target owner is invalid!`;
          var d3 = a3.source.edges.indexOf(a3), f3 = a3.target[t4(358)][t4(243)](a3);
          if (!(d3 > -1 && f3 > -1)) throw `Source and/or target doesn't know this edge!`;
          a3[t4(546)].edges.splice(d3, 1), a3.target != a3.source && a3.target.edges.splice(f3, 1);
          var u3 = a3.source[t4(370)].getEdges().indexOf(a3);
          if (u3 == -1) throw t4(442);
          a3.source.owner[t4(316)]().splice(u3, 1);
        }
      }, p2.prototype[r2(313)] = function() {
        for (var e4 = r2, t4 = a2.MAX_VALUE, n3 = a2.MAX_VALUE, i3, o3, s3, c3 = this[e4(487)](), l3 = c3.length, u3 = 0; u3 < l3; u3++) {
          var f3 = c3[u3];
          i3 = f3.getTop(), o3 = f3.getLeft(), t4 > i3 && (t4 = i3), n3 > o3 && (n3 = o3);
        }
        return t4 == a2[e4(471)] ? null : (s3 = c3[0].getParent().paddingLeft == null ? this.margin : c3[0].getParent().paddingLeft, this[e4(429)] = n3 - s3, this.top = t4 - s3, new d2(this.left, this.top));
      }, p2.prototype.updateBounds = function(e4) {
        for (var t4 = r2, n3 = a2.MAX_VALUE, i3 = -a2.MAX_VALUE, o3 = a2.MAX_VALUE, s3 = -a2.MAX_VALUE, c3, l3, d3, f3, p3, m3 = this.nodes, h2 = m3.length, g2 = 0; g2 < h2; g2++) {
          var _2 = m3[g2];
          e4 && _2.child != null && _2.updateBounds(), c3 = _2.getLeft(), l3 = _2[t4(233)](), d3 = _2.getTop(), f3 = _2[t4(232)](), n3 > c3 && (n3 = c3), i3 < l3 && (i3 = l3), o3 > d3 && (o3 = d3), s3 < f3 && (s3 = f3);
        }
        var v2 = new u2(n3, o3, i3 - n3, s3 - o3);
        n3 == a2.MAX_VALUE && (this[t4(429)] = this[t4(535)].getLeft(), this.right = this.parent[t4(233)](), this[t4(298)] = this[t4(535)].getTop(), this.bottom = this.parent.getBottom()), p3 = m3[0].getParent().paddingLeft == null ? this.margin : m3[0].getParent().paddingLeft, this.left = v2.x - p3, this.right = v2.x + v2.width + p3, this[t4(298)] = v2.y - p3, this[t4(244)] = v2.y + v2.height + p3;
      }, p2[r2(255)] = function(e4) {
        for (var t4 = r2, n3 = a2.MAX_VALUE, i3 = -a2.MAX_VALUE, o3 = a2.MAX_VALUE, s3 = -a2.MAX_VALUE, c3, l3, d3, f3, p3 = e4[t4(458)], m3 = 0; m3 < p3; m3++) {
          var h2 = e4[m3];
          c3 = h2[t4(432)](), l3 = h2[t4(233)](), d3 = h2[t4(443)](), f3 = h2.getBottom(), n3 > c3 && (n3 = c3), i3 < l3 && (i3 = l3), o3 > d3 && (o3 = d3), s3 < f3 && (s3 = f3);
        }
        return new u2(n3, o3, i3 - n3, s3 - o3);
      }, p2[r2(280)].getInclusionTreeDepth = function() {
        return this == this.graphManager.getRoot() ? 1 : this.parent.getInclusionTreeDepth();
      }, p2[r2(280)].getEstimatedSize = function() {
        var e4 = r2;
        if (this.estimatedSize == a2.MIN_VALUE) throw e4(372);
        return this.estimatedSize;
      }, p2.prototype.calcEstimatedSize = function() {
        for (var e4 = r2, t4 = 0, n3 = this.nodes, i3 = n3.length, a3 = 0; a3 < i3; a3++) {
          var s3 = n3[a3];
          t4 += s3.calcEstimatedSize();
        }
        return t4 == 0 ? this[e4(362)] = o2.EMPTY_COMPOUND_NODE_SIZE : this.estimatedSize = t4 / Math[e4(250)](this.nodes.length), this.estimatedSize;
      }, p2.prototype.updateConnected = function() {
        var e4 = r2, t4 = this;
        if (this.nodes.length == 0) {
          this.isConnected = true;
          return;
        }
        var n3 = new f2(), i3 = /* @__PURE__ */ new Set(), a3 = this.nodes[0], o3, s3;
        for (a3.withChildren()[e4(538)](function(e5) {
          n3.push(e5), i3.add(e5);
        }); n3.length !== 0; ) {
          a3 = n3.shift(), o3 = a3.getEdges();
          for (var c3 = o3.length, l3 = 0; l3 < c3; l3++) s3 = o3[l3].getOtherEndInGraph(a3, this), s3 != null && !i3.has(s3) && s3.withChildren()[e4(538)](function(t5) {
            n3[e4(490)](t5), i3.add(t5);
          });
        }
        if (this.isConnected = false, i3[e4(278)] >= this.nodes.length) {
          var u3 = 0;
          i3.forEach(function(e5) {
            e5.owner == t4 && u3++;
          }), u3 == this.nodes.length && (this[e4(390)] = true);
        }
      }, e3.exports = p2;
    }, function(e3, t3, n2) {
      var r2 = g, i2, a2 = n2(1);
      function o2(e4) {
        i2 = n2(5), this.layout = e4, this.graphs = [], this.edges = [];
      }
      o2.prototype.addRoot = function() {
        var e4 = g, t4 = this.layout[e4(558)](), n3 = this.layout.newNode(null), r3 = this.add(t4, n3);
        return this.setRootGraph(r3), this.rootGraph;
      }, o2[r2(280)].add = function(e4, t4, n3, i3, a3) {
        var o3 = r2;
        if (n3 == null && i3 == null && a3 == null) {
          if (e4 == null) throw `Graph is null!`;
          if (t4 == null) throw `Parent node is null!`;
          if (this.graphs.indexOf(e4) > -1) throw o3(331);
          if (this.graphs.push(e4), e4.parent != null) throw `Already has a parent!`;
          if (t4.child != null) throw `Already has a child!`;
          return e4.parent = t4, t4[o3(301)] = e4, e4;
        } else {
          a3 = n3, i3 = t4, n3 = e4;
          var s2 = i3[o3(557)](), c2 = a3.getOwner();
          if (!(s2 != null && s2.getGraphManager() == this)) throw `Source not in this graph mgr!`;
          if (!(c2 != null && c2.getGraphManager() == this)) throw `Target not in this graph mgr!`;
          if (s2 == c2) return n3.isInterGraph = false, s2.add(n3, i3, a3);
          if (n3.isInterGraph = true, n3.source = i3, n3[o3(348)] = a3, this.edges.indexOf(n3) > -1) throw `Edge already in inter-graph edge list!`;
          if (this.edges.push(n3), !(n3.source != null && n3.target != null)) throw o3(247);
          if (!(n3.source.edges.indexOf(n3) == -1 && n3.target.edges.indexOf(n3) == -1)) throw `Edge already in source and/or target incidency list!`;
          return n3.source.edges.push(n3), n3.target.edges.push(n3), n3;
        }
      }, o2.prototype.remove = function(e4) {
        var t4 = r2;
        if (e4 instanceof i2) {
          var n3 = e4;
          if (n3.getGraphManager() != this) throw `Graph not in this graph mgr`;
          if (!(n3 == this.rootGraph || n3.parent != null && n3.parent.graphManager == this)) throw `Invalid parent node!`;
          var o3 = [];
          o3 = o3.concat(n3[t4(316)]());
          for (var s2, c2 = o3.length, l2 = 0; l2 < c2; l2++) s2 = o3[l2], n3.remove(s2);
          var u2 = [];
          u2 = u2.concat(n3[t4(487)]());
          var d2;
          c2 = u2[t4(458)];
          for (var l2 = 0; l2 < c2; l2++) d2 = u2[l2], n3.remove(d2);
          n3 == this.rootGraph && this[t4(386)](null);
          var f2 = this.graphs.indexOf(n3);
          this.graphs[t4(307)](f2, 1), n3.parent = null;
        } else if (e4 instanceof a2) {
          if (s2 = e4, s2 == null) throw `Edge is null!`;
          if (!s2.isInterGraph) throw `Not an inter-graph edge!`;
          if (!(s2.source != null && s2.target != null)) throw `Source and/or target is null!`;
          if (!(s2.source.edges[t4(243)](s2) != -1 && s2.target.edges[t4(243)](s2) != -1)) throw `Source and/or target doesn't know this edge!`;
          var f2 = s2.source.edges.indexOf(s2);
          if (s2.source.edges.splice(f2, 1), f2 = s2.target[t4(358)].indexOf(s2), s2[t4(348)].edges.splice(f2, 1), !(s2.source.owner != null && s2[t4(546)].owner.getGraphManager() != null)) throw `Edge owner graph or owner graph manager is null!`;
          if (s2.source.owner.getGraphManager().edges.indexOf(s2) == -1) throw `Not in owner graph manager's edge list!`;
          var f2 = s2.source.owner[t4(394)]()[t4(358)].indexOf(s2);
          s2.source.owner.getGraphManager()[t4(358)].splice(f2, 1);
        }
      }, o2[r2(280)].updateBounds = function() {
        this.rootGraph.updateBounds(true);
      }, o2[r2(280)].getGraphs = function() {
        return this.graphs;
      }, o2.prototype.getAllNodes = function() {
        var e4 = r2;
        if (this[e4(521)] == null) {
          for (var t4 = [], n3 = this[e4(438)](), i3 = n3.length, a3 = 0; a3 < i3; a3++) t4 = t4.concat(n3[a3].getNodes());
          this.allNodes = t4;
        }
        return this.allNodes;
      }, o2.prototype.resetAllNodes = function() {
        this.allNodes = null;
      }, o2.prototype[r2(463)] = function() {
        this.allEdges = null;
      }, o2.prototype.resetAllNodesToApplyGravitation = function() {
        this.allNodesToApplyGravitation = null;
      }, o2.prototype[r2(374)] = function() {
        var e4 = r2;
        if (this[e4(260)] == null) {
          var t4 = [], n3 = this.getGraphs();
          n3.length;
          for (var i3 = 0; i3 < n3.length; i3++) t4 = t4[e4(476)](n3[i3].getEdges());
          t4 = t4.concat(this.edges), this.allEdges = t4;
        }
        return this.allEdges;
      }, o2.prototype[r2(222)] = function() {
        return this.allNodesToApplyGravitation;
      }, o2.prototype.setAllNodesToApplyGravitation = function(e4) {
        if (this.allNodesToApplyGravitation != null) throw `assert failed`;
        this.allNodesToApplyGravitation = e4;
      }, o2.prototype.getRoot = function() {
        return this.rootGraph;
      }, o2[r2(280)].setRootGraph = function(e4) {
        var t4 = r2;
        if (e4.getGraphManager() != this) throw `Root not in this graph mgr!`;
        this.rootGraph = e4, e4.parent ?? (e4.parent = this[t4(441)].newNode(`Root node`));
      }, o2.prototype.getLayout = function() {
        return this.layout;
      }, o2[r2(280)].isOneAncestorOfOther = function(e4, t4) {
        var n3 = r2;
        if (!(e4 != null && t4 != null)) throw `assert failed`;
        if (e4 == t4) return true;
        var i3 = e4[n3(557)](), a3;
        do {
          if (a3 = i3.getParent(), a3 == null) break;
          if (a3 == t4) return true;
          if (i3 = a3.getOwner(), i3 == null) break;
        } while (true);
        i3 = t4[n3(557)]();
        do {
          if (a3 = i3.getParent(), a3 == null) break;
          if (a3 == e4) return true;
          if (i3 = a3.getOwner(), i3 == null) break;
        } while (true);
        return false;
      }, o2.prototype[r2(283)] = function() {
        for (var e4 = r2, t4, n3, i3, a3, o3, s2 = this.getAllEdges(), c2 = s2.length, l2 = 0; l2 < c2; l2++) {
          if (t4 = s2[l2], n3 = t4.source, i3 = t4.target, t4.lca = null, t4.sourceInLca = n3, t4.targetInLca = i3, n3 == i3) {
            t4.lca = n3.getOwner();
            continue;
          }
          for (a3 = n3.getOwner(); t4.lca == null; ) {
            for (t4.targetInLca = i3, o3 = i3.getOwner(); t4.lca == null; ) {
              if (o3 == a3) {
                t4.lca = o3;
                break;
              }
              if (o3 == this.rootGraph) break;
              if (t4.lca != null) throw `assert failed`;
              t4.targetInLca = o3.getParent(), o3 = t4.targetInLca.getOwner();
            }
            if (a3 == this[e4(539)]) break;
            t4.lca ?? (t4.sourceInLca = a3.getParent(), a3 = t4.sourceInLca.getOwner());
          }
          if (t4.lca == null) throw `assert failed`;
        }
      }, o2[r2(280)].calcLowestCommonAncestor = function(e4, t4) {
        if (e4 == t4) return e4.getOwner();
        var n3 = e4.getOwner();
        do {
          if (n3 == null) break;
          var r3 = t4.getOwner();
          do {
            if (r3 == null) break;
            if (r3 == n3) return r3;
            r3 = r3.getParent().getOwner();
          } while (true);
          n3 = n3.getParent().getOwner();
        } while (true);
        return n3;
      }, o2.prototype.calcInclusionTreeDepths = function(e4, t4) {
        var n3 = r2;
        e4 == null && t4 == null && (e4 = this.rootGraph, t4 = 1);
        for (var i3, a3 = e4.getNodes(), o3 = a3[n3(458)], s2 = 0; s2 < o3; s2++) i3 = a3[s2], i3.inclusionTreeDepth = t4, i3[n3(301)] != null && this[n3(412)](i3[n3(301)], t4 + 1);
      }, o2.prototype.includesInvalidEdge = function() {
        for (var e4 = r2, t4, n3 = this[e4(358)].length, i3 = 0; i3 < n3; i3++) if (t4 = this[e4(358)][i3], this[e4(282)](t4.source, t4.target)) return true;
        return false;
      }, e3.exports = o2;
    }, function(e3, t3, n2) {
      var r2 = g, i2 = n2(0);
      function a2() {
      }
      for (var o2 in i2) a2[o2] = i2[o2];
      a2.MAX_ITERATIONS = 2500, a2.DEFAULT_EDGE_LENGTH = 50, a2.DEFAULT_SPRING_STRENGTH = 0.45, a2.DEFAULT_REPULSION_STRENGTH = 4500, a2.DEFAULT_GRAVITY_STRENGTH = 0.4, a2.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1, a2.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8, a2.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5, a2.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = true, a2.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = true, a2.DEFAULT_COOLING_FACTOR_INCREMENTAL = 0.3, a2[r2(513)] = 0.33, a2[r2(258)] = 1e3, a2.ADAPTATION_UPPER_NODE_LIMIT = 5e3, a2.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100, a2.MAX_NODE_DISPLACEMENT = a2.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3, a2.MIN_REPULSION_DIST = a2[r2(269)] / 10, a2[r2(330)] = 100, a2.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = 0.1, a2.MIN_EDGE_LENGTH = 1, a2.GRID_CALCULATION_CHECK_PERIOD = 10, e3.exports = a2;
    }, function(e3, t3, n2) {
      var r2 = g, i2 = n2(12);
      function a2() {
      }
      a2.calcSeparationAmount = function(e4, t4, n3, r3) {
        var i3 = g;
        if (!e4.intersects(t4)) throw `assert failed`;
        var a3 = [, ,];
        this[i3(435)](e4, t4, a3), n3[0] = Math.min(e4.getRight(), t4.getRight()) - Math.max(e4.x, t4.x), n3[1] = Math.min(e4[i3(232)](), t4.getBottom()) - Math.max(e4.y, t4.y), e4.getX() <= t4[i3(499)]() && e4.getRight() >= t4.getRight() ? n3[0] += Math[i3(502)](t4.getX() - e4.getX(), e4.getRight() - t4.getRight()) : t4.getX() <= e4.getX() && t4.getRight() >= e4.getRight() && (n3[0] += Math.min(e4.getX() - t4.getX(), t4.getRight() - e4.getRight())), e4.getY() <= t4.getY() && e4[i3(232)]() >= t4.getBottom() ? n3[1] += Math.min(t4.getY() - e4.getY(), e4.getBottom() - t4.getBottom()) : t4.getY() <= e4[i3(495)]() && t4.getBottom() >= e4.getBottom() && (n3[1] += Math.min(e4[i3(495)]() - t4.getY(), t4.getBottom() - e4[i3(232)]()));
        var o2 = Math.abs((t4.getCenterY() - e4.getCenterY()) / (t4.getCenterX() - e4[i3(501)]()));
        t4.getCenterY() === e4.getCenterY() && t4[i3(501)]() === e4[i3(501)]() && (o2 = 1);
        var s2 = o2 * n3[0], c2 = n3[1] / o2;
        n3[0] < c2 ? c2 = n3[0] : s2 = n3[1], n3[0] = -1 * a3[0] * (c2 / 2 + r3), n3[1] = -1 * a3[1] * (s2 / 2 + r3);
      }, a2.decideDirectionsForOverlappingNodes = function(e4, t4, n3) {
        var r3 = g;
        e4.getCenterX() < t4.getCenterX() ? n3[0] = -1 : n3[0] = 1, e4[r3(319)]() < t4.getCenterY() ? n3[1] = -1 : n3[1] = 1;
      }, a2.getIntersection2 = function(e4, t4, n3) {
        var r3 = g, i3 = e4.getCenterX(), a3 = e4.getCenterY(), o2 = t4.getCenterX(), s2 = t4.getCenterY();
        if (e4.intersects(t4)) return n3[0] = i3, n3[1] = a3, n3[2] = o2, n3[3] = s2, true;
        var c2 = e4[r3(499)](), l2 = e4.getY(), u2 = e4.getRight(), d2 = e4.getX(), f2 = e4.getBottom(), p2 = e4.getRight(), m2 = e4.getWidthHalf(), h2 = e4[r3(451)](), _2 = t4.getX(), v2 = t4.getY(), y2 = t4[r3(233)](), b2 = t4.getX(), x2 = t4.getBottom(), S2 = t4.getRight(), C2 = t4.getWidthHalf(), w2 = t4.getHeightHalf(), T = false, E = false;
        if (i3 === o2) {
          if (a3 > s2) return n3[0] = i3, n3[1] = l2, n3[2] = o2, n3[3] = x2, false;
          if (a3 < s2) return n3[0] = i3, n3[1] = f2, n3[2] = o2, n3[3] = v2, false;
        } else if (a3 === s2) {
          if (i3 > o2) return n3[0] = c2, n3[1] = a3, n3[2] = y2, n3[3] = s2, false;
          if (i3 < o2) return n3[0] = u2, n3[1] = a3, n3[2] = _2, n3[3] = s2, false;
        } else {
          var D = e4.height / e4.width, O = t4[r3(465)] / t4.width, k = (s2 - a3) / (o2 - i3), A = void 0, j = void 0, M = void 0, N = void 0, P = void 0, F = void 0;
          if (-D === k ? i3 > o2 ? (n3[0] = d2, n3[1] = f2, T = true) : (n3[0] = u2, n3[1] = l2, T = true) : D === k && (i3 > o2 ? (n3[0] = c2, n3[1] = l2, T = true) : (n3[0] = p2, n3[1] = f2, T = true)), -O === k ? o2 > i3 ? (n3[2] = b2, n3[3] = x2, E = true) : (n3[2] = y2, n3[3] = v2, E = true) : O === k && (o2 > i3 ? (n3[2] = _2, n3[3] = v2, E = true) : (n3[2] = S2, n3[3] = x2, E = true)), T && E) return false;
          if (i3 > o2 ? a3 > s2 ? (A = this.getCardinalDirection(D, k, 4), j = this.getCardinalDirection(O, k, 2)) : (A = this.getCardinalDirection(-D, k, 3), j = this.getCardinalDirection(-O, k, 1)) : a3 > s2 ? (A = this.getCardinalDirection(-D, k, 1), j = this.getCardinalDirection(-O, k, 3)) : (A = this.getCardinalDirection(D, k, 2), j = this.getCardinalDirection(O, k, 4)), !T) switch (A) {
            case 1:
              N = l2, M = i3 + -h2 / k, n3[0] = M, n3[1] = N;
              break;
            case 2:
              M = p2, N = a3 + m2 * k, n3[0] = M, n3[1] = N;
              break;
            case 3:
              N = f2, M = i3 + h2 / k, n3[0] = M, n3[1] = N;
              break;
            case 4:
              M = d2, N = a3 + -m2 * k, n3[0] = M, n3[1] = N;
              break;
          }
          if (!E) switch (j) {
            case 1:
              F = v2, P = o2 + -w2 / k, n3[2] = P, n3[3] = F;
              break;
            case 2:
              P = S2, F = s2 + C2 * k, n3[2] = P, n3[3] = F;
              break;
            case 3:
              F = x2, P = o2 + w2 / k, n3[2] = P, n3[3] = F;
              break;
            case 4:
              P = b2, F = s2 + -C2 * k, n3[2] = P, n3[3] = F;
              break;
          }
        }
        return false;
      }, a2.getCardinalDirection = function(e4, t4, n3) {
        return e4 > t4 ? n3 : 1 + n3 % 4;
      }, a2[r2(223)] = function(e4, t4, n3, r3) {
        if (r3 == null) return this.getIntersection2(e4, t4, n3);
        var a3 = e4.x, o2 = e4.y, s2 = t4.x, c2 = t4.y, l2 = n3.x, u2 = n3.y, d2 = r3.x, f2 = r3.y, p2 = void 0, m2 = void 0, h2 = void 0, g2 = void 0, _2 = void 0, v2 = void 0, y2 = void 0, b2 = void 0, x2 = void 0;
        return h2 = c2 - o2, _2 = a3 - s2, y2 = s2 * o2 - a3 * c2, g2 = f2 - u2, v2 = l2 - d2, b2 = d2 * u2 - l2 * f2, x2 = h2 * v2 - g2 * _2, x2 === 0 ? null : (p2 = (_2 * b2 - v2 * y2) / x2, m2 = (g2 * y2 - h2 * b2) / x2, new i2(p2, m2));
      }, a2[r2(466)] = function(e4, t4, n3, i3) {
        var a3 = r2, o2 = void 0;
        return e4 === n3 ? o2 = i3 < t4 ? this.ONE_AND_HALF_PI : this[a3(420)] : (o2 = Math.atan((i3 - t4) / (n3 - e4)), n3 < e4 ? o2 += Math.PI : i3 < t4 && (o2 += this.TWO_PI)), o2;
      }, a2.doIntersect = function(e4, t4, n3, r3) {
        var i3 = e4.x, a3 = e4.y, o2 = t4.x, s2 = t4.y, c2 = n3.x, l2 = n3.y, u2 = r3.x, d2 = r3.y, f2 = (o2 - i3) * (d2 - l2) - (u2 - c2) * (s2 - a3);
        if (f2 === 0) return false;
        var p2 = ((d2 - l2) * (u2 - i3) + (c2 - u2) * (d2 - a3)) / f2, m2 = ((a3 - s2) * (u2 - i3) + (o2 - i3) * (d2 - a3)) / f2;
        return 0 < p2 && p2 < 1 && 0 < m2 && m2 < 1;
      }, a2[r2(420)] = 0.5 * Math.PI, a2.ONE_AND_HALF_PI = 1.5 * Math.PI, a2.TWO_PI = 2 * Math.PI, a2.THREE_PI = 3 * Math.PI, e3.exports = a2;
    }, function(e3, t3, n2) {
      var r2 = g;
      function i2() {
      }
      i2.sign = function(e4) {
        return e4 > 0 ? 1 : e4 < 0 ? -1 : 0;
      }, i2.floor = function(e4) {
        return e4 < 0 ? Math.ceil(e4) : Math.floor(e4);
      }, i2[r2(516)] = function(e4) {
        return e4 < 0 ? Math.floor(e4) : Math.ceil(e4);
      }, e3.exports = i2;
    }, function(e3, t3, n2) {
      var r2 = g;
      function i2() {
      }
      i2.MAX_VALUE = 2147483647, i2.MIN_VALUE = -2147483648, e3[r2(288)] = i2;
    }, function(e3, t3, n2) {
      var r2 = /* @__PURE__ */ (function() {
        function e4(e5, t4) {
          for (var n3 = g, r3 = 0; r3 < t4.length; r3++) {
            var i3 = t4[r3];
            i3[n3(236)] = i3[n3(236)] || false, i3.configurable = true, `value` in i3 && (i3.writable = true), Object.defineProperty(e5, i3[n3(351)], i3);
          }
        }
        return function(t4, n3, r3) {
          return n3 && e4(t4[g(280)], n3), r3 && e4(t4, r3), t4;
        };
      })();
      function i2(e4, t4) {
        if (!(e4 instanceof t4)) throw TypeError(`Cannot call a class as a function`);
      }
      var a2 = function(e4) {
        return { value: e4, next: null, prev: null };
      }, o2 = function(e4, t4, n3, r3) {
        return e4 === null ? r3.head = t4 : e4.next = t4, n3 === null ? r3.tail = t4 : n3.prev = t4, t4.prev = e4, t4.next = n3, r3.length++, t4;
      }, s2 = function(e4, t4) {
        var n3 = e4.prev, r3 = e4.next;
        return n3 === null ? t4.head = r3 : n3.next = r3, r3 === null ? t4.tail = n3 : r3.prev = n3, e4.prev = e4.next = null, t4.length--, e4;
      };
      e3.exports = (function() {
        var e4 = g;
        function t4(e5) {
          var n3 = this;
          i2(this, t4), this.length = 0, this.head = null, this.tail = null, e5 == null ? void 0 : e5.forEach(function(e6) {
            return n3.push(e6);
          });
        }
        return r2(t4, [{ key: `size`, value: function() {
          return this.length;
        } }, { key: `insertBefore`, value: function(e5, t5) {
          return o2(t5.prev, a2(e5), t5, this);
        } }, { key: e4(270), value: function(t5, n3) {
          var r3 = e4;
          return o2(n3, a2(t5), n3[r3(241)], this);
        } }, { key: `insertNodeBefore`, value: function(e5, t5) {
          return o2(t5.prev, e5, t5, this);
        } }, { key: `insertNodeAfter`, value: function(e5, t5) {
          return o2(t5, e5, t5.next, this);
        } }, { key: `push`, value: function(e5) {
          return o2(this.tail, a2(e5), null, this);
        } }, { key: `unshift`, value: function(e5) {
          return o2(null, a2(e5), this.head, this);
        } }, { key: `remove`, value: function(e5) {
          return s2(e5, this);
        } }, { key: `pop`, value: function() {
          return s2(this.tail, this).value;
        } }, { key: `popNode`, value: function() {
          return s2(this.tail, this);
        } }, { key: `shift`, value: function() {
          var t5 = e4;
          return s2(this.head, this)[t5(365)];
        } }, { key: `shiftNode`, value: function() {
          return s2(this.head, this);
        } }, { key: `get_object_at`, value: function(t5) {
          var n3 = e4;
          if (t5 <= this.length()) {
            for (var r3 = 1, i3 = this[n3(379)]; r3 < t5; ) i3 = i3.next, r3++;
            return i3.value;
          }
        } }, { key: `set_object_at`, value: function(t5, n3) {
          var r3 = e4;
          if (t5 <= this[r3(458)]()) {
            for (var i3 = 1, a3 = this.head; i3 < t5; ) a3 = a3.next, i3++;
            a3[r3(365)] = n3;
          }
        } }]), t4;
      })();
    }, function(e3, t3, n2) {
      var r2 = g;
      function i2(e4, t4, n3) {
        this.x = null, this.y = null, e4 == null && t4 == null && n3 == null ? (this.x = 0, this.y = 0) : typeof e4 == `number` && typeof t4 == `number` && n3 == null ? (this.x = e4, this.y = t4) : e4.constructor.name == `Point` && t4 == null && n3 == null && (n3 = e4, this.x = n3.x, this.y = n3.y);
      }
      i2.prototype[r2(499)] = function() {
        return this.x;
      }, i2.prototype.getY = function() {
        return this.y;
      }, i2.prototype[r2(305)] = function() {
        return new i2(this.x, this.y);
      }, i2.prototype[r2(340)] = function(e4, t4, n3) {
        var i3 = r2;
        e4.constructor[i3(285)] == `Point` && t4 == null && n3 == null ? (n3 = e4, this[i3(340)](n3.x, n3.y)) : typeof e4 == `number` && typeof t4 == `number` && n3 == null && (parseInt(e4) == e4 && parseInt(t4) == t4 ? this.move(e4, t4) : (this.x = Math.floor(e4 + 0.5), this.y = Math.floor(t4 + 0.5)));
      }, i2[r2(280)][r2(530)] = function(e4, t4) {
        this.x = e4, this.y = t4;
      }, i2.prototype.translate = function(e4, t4) {
        this.x += e4, this.y += t4;
      }, i2.prototype[r2(430)] = function(e4) {
        if (e4.constructor.name == `Point`) {
          var t4 = e4;
          return this.x == t4.x && this.y == t4.y;
        }
        return this == e4;
      }, i2.prototype.toString = function() {
        return new i2().constructor.name + `[x=` + this.x + `,y=` + this.y + `]`;
      }, e3.exports = i2;
    }, function(e3, t3, n2) {
      var r2 = g;
      function i2(e4, t4, n3, r3) {
        var i3 = g;
        this.x = 0, this.y = 0, this.width = 0, this[i3(465)] = 0, e4 != null && t4 != null && n3 != null && r3 != null && (this.x = e4, this.y = t4, this.width = n3, this.height = r3);
      }
      i2.prototype.getX = function() {
        return this.x;
      }, i2.prototype.setX = function(e4) {
        this.x = e4;
      }, i2.prototype.getY = function() {
        return this.y;
      }, i2.prototype.setY = function(e4) {
        this.y = e4;
      }, i2[r2(280)].getWidth = function() {
        return this.width;
      }, i2.prototype.setWidth = function(e4) {
        var t4 = r2;
        this[t4(361)] = e4;
      }, i2[r2(280)].getHeight = function() {
        return this.height;
      }, i2[r2(280)][r2(419)] = function(e4) {
        this.height = e4;
      }, i2.prototype.getRight = function() {
        var e4 = r2;
        return this.x + this[e4(361)];
      }, i2.prototype[r2(232)] = function() {
        return this.y + this.height;
      }, i2.prototype.intersects = function(e4) {
        var t4 = r2;
        return !(this[t4(233)]() < e4.x || this.getBottom() < e4.y || e4.getRight() < this.x || e4.getBottom() < this.y);
      }, i2.prototype[r2(501)] = function() {
        return this.x + this.width / 2;
      }, i2.prototype.getMinX = function() {
        var e4 = r2;
        return this[e4(499)]();
      }, i2.prototype.getMaxX = function() {
        return this.getX() + this.width;
      }, i2.prototype.getCenterY = function() {
        return this.y + this.height / 2;
      }, i2[r2(280)].getMinY = function() {
        return this.getY();
      }, i2.prototype.getMaxY = function() {
        return this.getY() + this.height;
      }, i2[r2(280)].getWidthHalf = function() {
        var e4 = r2;
        return this[e4(361)] / 2;
      }, i2.prototype[r2(451)] = function() {
        return this.height / 2;
      }, e3.exports = i2;
    }, function(e3, t3, n2) {
      var r2 = g, i2 = typeof Symbol == r2(312) && typeof Symbol.iterator == r2(341) ? function(e4) {
        return typeof e4;
      } : function(e4) {
        var t4 = r2;
        return e4 && typeof Symbol == `function` && e4.constructor === Symbol && e4 !== Symbol[t4(280)] ? `symbol` : typeof e4;
      };
      function a2() {
      }
      a2.lastID = 0, a2.createID = function(e4) {
        var t4 = r2;
        return a2.isPrimitive(e4) ? e4 : e4.uniqueID == null ? (e4.uniqueID = a2.getString(), a2[t4(328)]++, e4[t4(480)]) : e4[t4(480)];
      }, a2[r2(383)] = function(e4) {
        return e4 ?? (e4 = a2.lastID), `Object#` + e4;
      }, a2.isPrimitive = function(e4) {
        var t4 = r2, n3 = e4 === void 0 ? t4(543) : i2(e4);
        return e4 == null || n3 != t4(302) && n3 != t4(312);
      }, e3.exports = a2;
    }, function(e3, t3, n2) {
      var r2 = g;
      function i2(e4) {
        var t4 = g;
        if (Array.isArray(e4)) {
          for (var n3 = 0, r3 = Array(e4[t4(458)]); n3 < e4.length; n3++) r3[n3] = e4[n3];
          return r3;
        } else return Array.from(e4);
      }
      var a2 = n2(0), o2 = n2(6), s2 = n2(3), c2 = n2(1), l2 = n2(5), u2 = n2(4), d2 = n2(17), f2 = n2(27);
      function p2(e4) {
        var t4 = g;
        f2[t4(400)](this), this[t4(317)] = a2.QUALITY, this.createBendsAsNeeded = a2.DEFAULT_CREATE_BENDS_AS_NEEDED, this.incremental = a2[t4(524)], this[t4(300)] = a2.DEFAULT_ANIMATION_ON_LAYOUT, this[t4(352)] = a2.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = a2.DEFAULT_ANIMATION_PERIOD, this.uniformLeafNodeSizes = a2.DEFAULT_UNIFORM_LEAF_NODE_SIZES, this.edgeToDummyNodes = /* @__PURE__ */ new Map(), this.graphManager = new o2(this), this[t4(402)] = false, this.isSubLayout = false, this[t4(306)] = false, e4 != null && (this.isRemoteUse = e4);
      }
      p2.RANDOM_SEED = 1, p2.prototype = Object[r2(226)](f2[r2(280)]), p2.prototype.getGraphManager = function() {
        return this.graphManager;
      }, p2.prototype.getAllNodes = function() {
        var e4 = r2;
        return this.graphManager[e4(248)]();
      }, p2.prototype.getAllEdges = function() {
        var e4 = r2;
        return this.graphManager[e4(374)]();
      }, p2.prototype.getAllNodesToApplyGravitation = function() {
        var e4 = r2;
        return this[e4(532)].getAllNodesToApplyGravitation();
      }, p2.prototype.newGraphManager = function() {
        var e4 = new o2(this);
        return this.graphManager = e4, e4;
      }, p2[r2(280)].newGraph = function(e4) {
        return new l2(null, this.graphManager, e4);
      }, p2.prototype[r2(385)] = function(e4) {
        var t4 = r2;
        return new s2(this[t4(532)], e4);
      }, p2.prototype.newEdge = function(e4) {
        return new c2(null, null, e4);
      }, p2.prototype[r2(544)] = function() {
        var e4 = r2;
        return this.graphManager.getRoot() == null || this.graphManager[e4(360)]().getNodes().length == 0 || this[e4(532)].includesInvalidEdge();
      }, p2[r2(280)].runLayout = function() {
        var e4 = r2;
        this.isLayoutFinished = false, this.tilingPreLayout && this.tilingPreLayout(), this.initParameters();
        var t4 = this[e4(544)]() ? false : this.layout();
        return a2.ANIMATE === `during` ? false : (t4 && (this.isSubLayout || this.doPostLayout()), this.tilingPostLayout && this.tilingPostLayout(), this.isLayoutFinished = true, t4);
      }, p2[r2(280)].doPostLayout = function() {
        var e4 = r2;
        this.incremental || this[e4(454)](), this.update();
      }, p2.prototype.update2 = function() {
        var e4 = r2;
        if (this.createBendsAsNeeded && (this.createBendpointsFromDummyNodes(), this.graphManager[e4(463)]()), !this[e4(306)]) {
          for (var t4 = this.graphManager.getAllEdges(), n3 = 0; n3 < t4.length; n3++) t4[n3];
          for (var i3 = this.graphManager.getRoot()[e4(487)](), n3 = 0; n3 < i3.length; n3++) i3[n3];
          this.update(this.graphManager.getRoot());
        }
      }, p2.prototype.update = function(e4) {
        var t4 = r2;
        if (e4 == null) this.update2();
        else if (e4 instanceof s2) {
          var n3 = e4;
          if (n3.getChild() != null) for (var i3 = n3.getChild().getNodes(), a3 = 0; a3 < i3[t4(458)]; a3++) update(i3[a3]);
          n3[t4(479)] != null && n3[t4(479)].update(n3);
        } else if (e4 instanceof c2) {
          var o3 = e4;
          o3[t4(479)] != null && o3.vGraphObject.update(o3);
        } else if (e4 instanceof l2) {
          var u3 = e4;
          u3[t4(479)] != null && u3.vGraphObject.update(u3);
        }
      }, p2[r2(280)].initParameters = function() {
        var e4 = r2;
        this.isSubLayout || (this.layoutQuality = a2[e4(356)], this.animationDuringLayout = a2.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = a2[e4(542)], this.animationOnLayout = a2[e4(359)], this.incremental = a2.DEFAULT_INCREMENTAL, this.createBendsAsNeeded = a2.DEFAULT_CREATE_BENDS_AS_NEEDED, this.uniformLeafNodeSizes = a2.DEFAULT_UNIFORM_LEAF_NODE_SIZES), this.animationDuringLayout && (this.animationOnLayout = false);
      }, p2[r2(280)][r2(454)] = function(e4) {
        var t4 = r2;
        if (e4 == null) this.transform(new u2(0, 0));
        else {
          var n3 = new d2(), i3 = this[t4(532)].getRoot().updateLeftTop();
          if (i3 != null) {
            n3[t4(505)](e4.x), n3[t4(339)](e4.y), n3.setDeviceOrgX(i3.x), n3.setDeviceOrgY(i3.y);
            for (var a3 = this.getAllNodes(), o3, s3 = 0; s3 < a3.length; s3++) o3 = a3[s3], o3.transform(n3);
          }
        }
      }, p2[r2(280)].positionNodesRandomly = function(e4) {
        var t4 = r2;
        if (e4 == null) this.positionNodesRandomly(this.getGraphManager()[t4(360)]()), this.getGraphManager().getRoot().updateBounds(true);
        else for (var n3, i3, a3 = e4[t4(487)](), o3 = 0; o3 < a3[t4(458)]; o3++) n3 = a3[o3], i3 = n3.getChild(), i3 == null || i3[t4(487)]().length == 0 ? n3[t4(453)]() : (this[t4(295)](i3), n3.updateBounds());
      }, p2[r2(280)].getFlatForest = function() {
        for (var e4 = r2, t4 = [], n3 = true, a3 = this[e4(532)][e4(360)]().getNodes(), o3 = true, s3 = 0; s3 < a3.length; s3++) a3[s3].getChild() != null && (o3 = false);
        if (!o3) return t4;
        var c3 = /* @__PURE__ */ new Set(), l3 = [], u3 = /* @__PURE__ */ new Map(), d3 = [];
        for (d3 = d3.concat(a3); d3.length > 0 && n3; ) {
          for (l3.push(d3[0]); l3.length > 0 && n3; ) {
            var f3 = l3[0];
            l3[e4(307)](0, 1), c3.add(f3);
            for (var p3 = f3.getEdges(), s3 = 0; s3 < p3.length; s3++) {
              var m2 = p3[s3].getOtherEnd(f3);
              if (u3.get(f3) != m2) if (!c3.has(m2)) l3[e4(490)](m2), u3.set(m2, f3);
              else {
                n3 = false;
                break;
              }
            }
          }
          if (!n3) t4 = [];
          else {
            var h2 = [].concat(i2(c3));
            t4.push(h2);
            for (var s3 = 0; s3 < h2.length; s3++) {
              var g2 = h2[s3], _2 = d3.indexOf(g2);
              _2 > -1 && d3.splice(_2, 1);
            }
            c3 = /* @__PURE__ */ new Set(), u3 = /* @__PURE__ */ new Map();
          }
        }
        return t4;
      }, p2.prototype.createDummyNodesForBendpoints = function(e4) {
        for (var t4 = r2, n3 = [], i3 = e4.source, a3 = this.graphManager[t4(457)](e4.source, e4.target), o3 = 0; o3 < e4.bendpoints[t4(458)]; o3++) {
          var s3 = this.newNode(null);
          s3[t4(474)](new Point(0, 0), new Dimension(1, 1)), a3[t4(324)](s3);
          var c3 = this.newEdge(null);
          this.graphManager.add(c3, i3, s3), n3.add(s3), i3 = s3;
        }
        var c3 = this.newEdge(null);
        return this.graphManager.add(c3, i3, e4.target), this.edgeToDummyNodes.set(e4, n3), e4.isInterGraph() ? this[t4(532)].remove(e4) : a3.remove(e4), n3;
      }, p2[r2(280)].createBendpointsFromDummyNodes = function() {
        var e4 = r2, t4 = [];
        t4 = t4.concat(this.graphManager.getAllEdges()), t4 = [][e4(476)](i2(this[e4(311)].keys()), t4);
        for (var n3 = 0; n3 < t4.length; n3++) {
          var a3 = t4[n3];
          if (a3.bendpoints.length > 0) {
            for (var o3 = this.edgeToDummyNodes.get(a3), s3 = 0; s3 < o3[e4(458)]; s3++) {
              var c3 = o3[s3], l3 = new u2(c3[e4(501)](), c3.getCenterY()), d3 = a3.bendpoints.get(s3);
              d3.x = l3.x, d3.y = l3.y, c3.getOwner().remove(c3);
            }
            this.graphManager.add(a3, a3[e4(546)], a3.target);
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
      }, p2[r2(462)] = function(e4) {
        var t4 = r2, n3 = [];
        n3 = n3[t4(476)](e4);
        var i3 = [], a3 = /* @__PURE__ */ new Map(), o3 = false, s3 = null;
        (n3.length == 1 || n3.length == 2) && (o3 = true, s3 = n3[0]);
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
            p3 >= 0 && n3.splice(p3, 1), l3.getNeighborsList()[t4(538)](function(e5) {
              var n4 = t4;
              if (i3.indexOf(e5) < 0) {
                var r3 = a3[n4(262)](e5) - 1;
                r3 == 1 && d3[n4(490)](e5), a3.set(e5, r3);
              }
            });
          }
          i3 = i3.concat(d3), (n3.length == 1 || n3.length == 2) && (o3 = true, s3 = n3[0]);
        }
        return s3;
      }, p2.prototype[r2(272)] = function(e4) {
        this.graphManager = e4;
      }, e3[r2(288)] = p2;
    }, function(e3, t3, n2) {
      function r2() {
      }
      r2.seed = 1, r2.x = 0, r2.nextDouble = function() {
        var e4 = g;
        return r2.x = Math.sin(r2.seed++) * 1e4, r2.x - Math[e4(266)](r2.x);
      }, e3.exports = r2;
    }, function(e3, t3, n2) {
      var r2 = g, i2 = n2(4);
      function a2(e4, t4) {
        var n3 = g;
        this.lworldOrgX = 0, this.lworldOrgY = 0, this[n3(500)] = 0, this[n3(405)] = 0, this[n3(445)] = 1, this.lworldExtY = 1, this.ldeviceExtX = 1, this[n3(354)] = 1;
      }
      a2.prototype[r2(407)] = function() {
        return this.lworldOrgX;
      }, a2[r2(280)][r2(505)] = function(e4) {
        this.lworldOrgX = e4;
      }, a2[r2(280)].getWorldOrgY = function() {
        return this.lworldOrgY;
      }, a2.prototype.setWorldOrgY = function(e4) {
        this.lworldOrgY = e4;
      }, a2.prototype.getWorldExtX = function() {
        var e4 = r2;
        return this[e4(445)];
      }, a2.prototype.setWorldExtX = function(e4) {
        this.lworldExtX = e4;
      }, a2[r2(280)].getWorldExtY = function() {
        return this.lworldExtY;
      }, a2.prototype.setWorldExtY = function(e4) {
        this.lworldExtY = e4;
      }, a2.prototype[r2(399)] = function() {
        return this.ldeviceOrgX;
      }, a2[r2(280)].setDeviceOrgX = function(e4) {
        this.ldeviceOrgX = e4;
      }, a2[r2(280)].getDeviceOrgY = function() {
        var e4 = r2;
        return this[e4(405)];
      }, a2.prototype.setDeviceOrgY = function(e4) {
        this.ldeviceOrgY = e4;
      }, a2.prototype.getDeviceExtX = function() {
        return this.ldeviceExtX;
      }, a2[r2(280)].setDeviceExtX = function(e4) {
        var t4 = r2;
        this[t4(549)] = e4;
      }, a2.prototype.getDeviceExtY = function() {
        return this.ldeviceExtY;
      }, a2.prototype[r2(237)] = function(e4) {
        this.ldeviceExtY = e4;
      }, a2.prototype.transformX = function(e4) {
        var t4 = 0, n3 = this.lworldExtX;
        return n3 != 0 && (t4 = this.ldeviceOrgX + (e4 - this.lworldOrgX) * this.ldeviceExtX / n3), t4;
      }, a2[r2(280)][r2(455)] = function(e4) {
        var t4 = 0, n3 = this.lworldExtY;
        return n3 != 0 && (t4 = this.ldeviceOrgY + (e4 - this.lworldOrgY) * this.ldeviceExtY / n3), t4;
      }, a2.prototype.inverseTransformX = function(e4) {
        var t4 = r2, n3 = 0, i3 = this[t4(549)];
        return i3 != 0 && (n3 = this.lworldOrgX + (e4 - this[t4(500)]) * this.lworldExtX / i3), n3;
      }, a2.prototype[r2(444)] = function(e4) {
        var t4 = 0, n3 = this.ldeviceExtY;
        return n3 != 0 && (t4 = this.lworldOrgY + (e4 - this.ldeviceOrgY) * this.lworldExtY / n3), t4;
      }, a2.prototype[r2(274)] = function(e4) {
        return new i2(this.inverseTransformX(e4.x), this.inverseTransformY(e4.y));
      }, e3[r2(288)] = a2;
    }, function(e3, t3, n2) {
      var r2 = g;
      function i2(e4) {
        var t4 = g;
        if (Array.isArray(e4)) {
          for (var n3 = 0, r3 = Array(e4[t4(458)]); n3 < e4.length; n3++) r3[n3] = e4[n3];
          return r3;
        } else return Array[t4(355)](e4);
      }
      var a2 = n2(15), o2 = n2(7), s2 = n2(0), c2 = n2(8), l2 = n2(9);
      function u2() {
        var e4 = g;
        a2.call(this), this.useSmartIdealEdgeLengthCalculation = o2.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.idealEdgeLength = o2.DEFAULT_EDGE_LENGTH, this.springConstant = o2[e4(329)], this.repulsionConstant = o2.DEFAULT_REPULSION_STRENGTH, this.gravityConstant = o2.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = o2.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = o2.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = o2.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.displacementThresholdPerNode = 3 * o2.DEFAULT_EDGE_LENGTH / 100, this.coolingFactor = o2.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.initialCoolingFactor = o2.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.totalDisplacement = 0, this.oldTotalDisplacement = 0, this.maxIterations = o2[e4(290)];
      }
      for (var d2 in u2.prototype = Object.create(a2.prototype), a2) u2[d2] = a2[d2];
      u2.prototype.initParameters = function() {
        a2[g(280)].initParameters.call(this, arguments), this.totalIterations = 0, this.notAnimatedIterations = 0, this.useFRGridVariant = o2.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION, this.grid = [];
      }, u2.prototype[r2(410)] = function() {
        for (var e4 = r2, t4, n3, i3, a3, c3, l3, u3 = this.getGraphManager().getAllEdges(), d3 = 0; d3 < u3.length; d3++) t4 = u3[d3], t4.idealLength = this[e4(526)], t4.isInterGraph && (i3 = t4.getSource(), a3 = t4[e4(363)](), c3 = t4[e4(507)]().getEstimatedSize(), l3 = t4.getTargetInLca().getEstimatedSize(), this.useSmartIdealEdgeLengthCalculation && (t4[e4(482)] += c3 + l3 - 2 * s2[e4(338)]), n3 = t4[e4(447)]()[e4(461)](), t4[e4(482)] += o2[e4(269)] * o2.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (i3.getInclusionTreeDepth() + a3.getInclusionTreeDepth() - 2 * n3));
      }, u2.prototype.initSpringEmbedder = function() {
        var e4 = r2, t4 = this.getAllNodes()[e4(458)];
        this.incremental ? (t4 > o2.ADAPTATION_LOWER_NODE_LIMIT && (this.coolingFactor = Math.max(this.coolingFactor * o2.COOLING_ADAPTATION_FACTOR, this.coolingFactor - (t4 - o2.ADAPTATION_LOWER_NODE_LIMIT) / (o2.ADAPTATION_UPPER_NODE_LIMIT - o2.ADAPTATION_LOWER_NODE_LIMIT) * this[e4(292)] * (1 - o2[e4(513)]))), this.maxNodeDisplacement = o2[e4(536)]) : (t4 > o2.ADAPTATION_LOWER_NODE_LIMIT ? this.coolingFactor = Math.max(o2[e4(513)], 1 - (t4 - o2[e4(258)]) / (o2.ADAPTATION_UPPER_NODE_LIMIT - o2.ADAPTATION_LOWER_NODE_LIMIT) * (1 - o2.COOLING_ADAPTATION_FACTOR)) : this.coolingFactor = 1, this.initialCoolingFactor = this[e4(292)], this[e4(416)] = o2[e4(275)]), this[e4(368)] = Math[e4(335)](this.getAllNodes().length * 5, this.maxIterations), this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length, this.repulsionRange = this.calcRepulsionRange();
      }, u2.prototype.calcSpringForces = function() {
        for (var e4 = r2, t4 = this[e4(374)](), n3, i3 = 0; i3 < t4.length; i3++) n3 = t4[i3], this.calcSpringForce(n3, n3.idealLength);
      }, u2.prototype.calcRepulsionForces = function() {
        var e4 = r2, t4 = arguments[e4(458)] > 0 && arguments[0] !== void 0 ? arguments[0] : true, n3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, i3, a3, s3, c3, l3 = this.getAllNodes(), u3;
        if (this.useFRGridVariant) for (this.totalIterations % o2.GRID_CALCULATION_CHECK_PERIOD == 1 && t4 && this.updateGrid(), u3 = /* @__PURE__ */ new Set(), i3 = 0; i3 < l3[e4(458)]; i3++) s3 = l3[i3], this[e4(380)](s3, u3, t4, n3), u3[e4(324)](s3);
        else for (i3 = 0; i3 < l3.length; i3++) for (s3 = l3[i3], a3 = i3 + 1; a3 < l3.length; a3++) c3 = l3[a3], s3.getOwner() == c3.getOwner() && this.calcRepulsionForce(s3, c3);
      }, u2[r2(280)].calcGravitationalForces = function() {
        for (var e4, t4 = this.getAllNodesToApplyGravitation(), n3 = 0; n3 < t4.length; n3++) e4 = t4[n3], this.calcGravitationalForce(e4);
      }, u2.prototype[r2(387)] = function() {
        for (var e4 = r2, t4 = this.getAllNodes(), n3, i3 = 0; i3 < t4.length; i3++) n3 = t4[i3], n3[e4(530)]();
      }, u2.prototype[r2(279)] = function(e4, t4) {
        var n3 = r2, i3 = e4.getSource(), a3 = e4.getTarget(), o3, s3, c3, l3;
        if (this.uniformLeafNodeSizes && i3[n3(548)]() == null && a3.getChild() == null) e4.updateLengthSimple();
        else if (e4.updateLength(), e4[n3(431)]) return;
        o3 = e4.getLength(), o3 != 0 && (s3 = this.springConstant * (o3 - t4), c3 = s3 * (e4[n3(477)] / o3), l3 = s3 * (e4.lengthY / o3), i3.springForceX += c3, i3.springForceY += l3, a3.springForceX -= c3, a3.springForceY -= l3);
      }, u2.prototype.calcRepulsionForce = function(e4, t4) {
        var n3 = r2, i3 = e4.getRect(), a3 = t4.getRect(), s3 = [, ,], u3 = [, , , ,], d3, f2, p2, m2, h2, g2, _2;
        if (i3.intersects(a3)) {
          c2[n3(251)](i3, a3, s3, o2.DEFAULT_EDGE_LENGTH / 2), g2 = 2 * s3[0], _2 = 2 * s3[1];
          var v2 = e4.noOfChildren * t4[n3(364)] / (e4.noOfChildren + t4.noOfChildren);
          e4.repulsionForceX -= v2 * g2, e4.repulsionForceY -= v2 * _2, t4.repulsionForceX += v2 * g2, t4.repulsionForceY += v2 * _2;
        } else this.uniformLeafNodeSizes && e4.getChild() == null && t4[n3(548)]() == null ? (d3 = a3.getCenterX() - i3.getCenterX(), f2 = a3.getCenterY() - i3.getCenterY()) : (c2.getIntersection(i3, a3, u3), d3 = u3[2] - u3[0], f2 = u3[3] - u3[1]), Math.abs(d3) < o2.MIN_REPULSION_DIST && (d3 = l2.sign(d3) * o2[n3(297)]), Math[n3(321)](f2) < o2.MIN_REPULSION_DIST && (f2 = l2.sign(f2) * o2.MIN_REPULSION_DIST), p2 = d3 * d3 + f2 * f2, m2 = Math[n3(250)](p2), h2 = this[n3(345)] * e4.noOfChildren * t4.noOfChildren / p2, g2 = h2 * d3 / m2, _2 = h2 * f2 / m2, e4[n3(484)] -= g2, e4.repulsionForceY -= _2, t4.repulsionForceX += g2, t4.repulsionForceY += _2;
      }, u2[r2(280)].calcGravitationalForce = function(e4) {
        var t4 = r2, n3 = e4.getOwner(), i3 = (n3[t4(233)]() + n3[t4(432)]()) / 2, a3 = (n3.getTop() + n3[t4(232)]()) / 2, o3 = e4.getCenterX() - i3, s3 = e4.getCenterY() - a3, c3 = Math.abs(o3) + e4.getWidth() / 2, l3 = Math.abs(s3) + e4.getHeight() / 2, u3;
        e4.getOwner() == this.graphManager.getRoot() ? (u3 = n3.getEstimatedSize() * this.gravityRangeFactor, (c3 > u3 || l3 > u3) && (e4[t4(520)] = -this.gravityConstant * o3, e4.gravitationForceY = -this.gravityConstant * s3)) : (u3 = n3.getEstimatedSize() * this.compoundGravityRangeFactor, (c3 > u3 || l3 > u3) && (e4.gravitationForceX = -this.gravityConstant * o3 * this.compoundGravityConstant, e4.gravitationForceY = -this.gravityConstant * s3 * this.compoundGravityConstant));
      }, u2.prototype.isConverged = function() {
        var e4 = r2, t4, n3 = false;
        return this[e4(436)] > this.maxIterations / 3 && (n3 = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2), t4 = this.totalDisplacement < this.totalDisplacementThreshold, this.oldTotalDisplacement = this.totalDisplacement, t4 || n3;
      }, u2.prototype.animate = function() {
        var e4 = r2;
        this.animationDuringLayout && !this.isSubLayout && (this[e4(534)] == this[e4(518)] ? (this[e4(375)](), this[e4(534)] = 0) : this.notAnimatedIterations++);
      }, u2.prototype.calcNoOfChildrenForAllNodes = function() {
        for (var e4 = r2, t4, n3 = this.graphManager[e4(248)](), i3 = 0; i3 < n3[e4(458)]; i3++) t4 = n3[i3], t4.noOfChildren = t4[e4(325)]();
      }, u2.prototype.calcGrid = function(e4) {
        var t4 = r2, n3 = 0, i3 = 0;
        n3 = parseInt(Math.ceil((e4[t4(233)]() - e4.getLeft()) / this.repulsionRange)), i3 = parseInt(Math.ceil((e4.getBottom() - e4.getTop()) / this[t4(253)]));
        for (var a3 = Array(n3), o3 = 0; o3 < n3; o3++) a3[o3] = Array(i3);
        for (var o3 = 0; o3 < n3; o3++) for (var s3 = 0; s3 < i3; s3++) a3[o3][s3] = [];
        return a3;
      }, u2[r2(280)].addNodeToGrid = function(e4, t4, n3) {
        var i3 = r2, a3 = 0, o3 = 0, s3 = 0, c3 = 0;
        a3 = parseInt(Math[i3(266)]((e4.getRect().x - t4) / this.repulsionRange)), o3 = parseInt(Math.floor((e4.getRect().width + e4.getRect().x - t4) / this.repulsionRange)), s3 = parseInt(Math.floor((e4.getRect().y - n3) / this.repulsionRange)), c3 = parseInt(Math.floor((e4.getRect().height + e4.getRect().y - n3) / this.repulsionRange));
        for (var l3 = a3; l3 <= o3; l3++) for (var u3 = s3; u3 <= c3; u3++) this.grid[l3][u3].push(e4), e4.setGridCoordinates(a3, o3, s3, c3);
      }, u2.prototype.updateGrid = function() {
        var e4 = r2, t4, n3, i3 = this.getAllNodes();
        for (this.grid = this.calcGrid(this.graphManager.getRoot()), t4 = 0; t4 < i3.length; t4++) n3 = i3[t4], this.addNodeToGrid(n3, this.graphManager.getRoot().getLeft(), this.graphManager[e4(360)]().getTop());
      }, u2.prototype.calculateRepulsionForceOfANode = function(e4, t4, n3, a3) {
        var s3 = r2;
        if (this.totalIterations % o2.GRID_CALCULATION_CHECK_PERIOD == 1 && n3 || a3) {
          var c3 = /* @__PURE__ */ new Set();
          e4.surrounding = [];
          for (var l3, u3 = this.grid, d3 = e4[s3(489)] - 1; d3 < e4[s3(497)] + 2; d3++) for (var f2 = e4[s3(294)] - 1; f2 < e4.finishY + 2; f2++) if (!(d3 < 0 || f2 < 0 || d3 >= u3.length || f2 >= u3[0].length)) {
            for (var p2 = 0; p2 < u3[d3][f2].length; p2++) if (l3 = u3[d3][f2][p2], !(e4[s3(557)]() != l3.getOwner() || e4 == l3) && !t4.has(l3) && !c3.has(l3)) {
              var m2 = Math.abs(e4.getCenterX() - l3.getCenterX()) - (e4.getWidth() / 2 + l3[s3(261)]() / 2), h2 = Math.abs(e4.getCenterY() - l3.getCenterY()) - (e4.getHeight() / 2 + l3[s3(547)]() / 2);
              m2 <= this.repulsionRange && h2 <= this.repulsionRange && c3.add(l3);
            }
          }
          e4.surrounding = [].concat(i2(c3));
        }
        for (d3 = 0; d3 < e4.surrounding.length; d3++) this[s3(287)](e4, e4.surrounding[d3]);
      }, u2.prototype.calcRepulsionRange = function() {
        return 0;
      }, e3.exports = u2;
    }, function(e3, t3, n2) {
      var r2 = n2(1), i2 = n2(7);
      function a2(e4, t4, n3) {
        r2.call(this, e4, t4, n3), this.idealLength = i2.DEFAULT_EDGE_LENGTH;
      }
      for (var o2 in a2.prototype = Object.create(r2.prototype), r2) a2[o2] = r2[o2];
      e3.exports = a2;
    }, function(e3, t3, n2) {
      var r2 = g, i2 = n2(3);
      function a2(e4, t4, n3, r3) {
        var a3 = g;
        i2.call(this, e4, t4, n3, r3), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this[a3(551)] = 0, this[a3(422)] = 0, this.displacementY = 0, this.startX = 0, this.finishX = 0, this.startY = 0, this[a3(523)] = 0, this.surrounding = [];
      }
      for (var o2 in a2.prototype = Object.create(i2.prototype), i2) a2[o2] = i2[o2];
      a2.prototype[r2(273)] = function(e4, t4, n3, r3) {
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
      var r2 = g, i2 = n2(14);
      function a2() {
        this.map = {}, this.keys = [];
      }
      a2.prototype.put = function(e4, t4) {
        var n3 = i2.createID(e4);
        this.contains(n3) || (this.map[n3] = t4, this.keys.push(e4));
      }, a2.prototype[r2(409)] = function(e4) {
        return i2.createID(e4), this.map[e4] != null;
      }, a2.prototype.get = function(e4) {
        var t4 = i2.createID(e4);
        return this.map[t4];
      }, a2.prototype.keySet = function() {
        return this.keys;
      }, e3[r2(288)] = a2;
    }, function(e3, t3, n2) {
      var r2 = g, i2 = n2(14);
      function a2() {
        this.set = {};
      }
      a2[r2(280)][r2(324)] = function(e4) {
        var t4 = r2, n3 = i2.createID(e4);
        this[t4(409)](n3) || (this.set[n3] = e4);
      }, a2.prototype[r2(391)] = function(e4) {
        delete this.set[i2.createID(e4)];
      }, a2.prototype.clear = function() {
        var e4 = r2;
        this[e4(332)] = {};
      }, a2.prototype.contains = function(e4) {
        return this.set[i2.createID(e4)] == e4;
      }, a2.prototype.isEmpty = function() {
        return this.size() === 0;
      }, a2.prototype.size = function() {
        var e4 = r2;
        return Object.keys(this[e4(332)]).length;
      }, a2.prototype.addAllTo = function(e4) {
        for (var t4 = r2, n3 = Object.keys(this[t4(332)]), i3 = n3.length, a3 = 0; a3 < i3; a3++) e4.push(this.set[n3[a3]]);
      }, a2.prototype[r2(278)] = function() {
        var e4 = r2;
        return Object.keys(this[e4(332)]).length;
      }, a2.prototype.addAll = function(e4) {
        for (var t4 = e4.length, n3 = 0; n3 < t4; n3++) {
          var r3 = e4[n3];
          this.add(r3);
        }
      }, e3.exports = a2;
    }, function(e3, t3, n2) {
      var r2 = /* @__PURE__ */ (function() {
        function e4(e5, t4) {
          for (var n3 = g, r3 = 0; r3 < t4.length; r3++) {
            var i3 = t4[r3];
            i3.enumerable = i3[n3(236)] || false, i3.configurable = true, `value` in i3 && (i3[n3(550)] = true), Object.defineProperty(e5, i3.key, i3);
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
        var e4 = g;
        function t4(e5, n3) {
          var r3 = g;
          i2(this, t4), (n3 !== null || n3 !== void 0) && (this.compareFunction = this._defaultCompareFunction);
          var o2 = void 0;
          o2 = e5 instanceof a2 ? e5[r3(278)]() : e5.length, this._quicksort(e5, 0, o2 - 1);
        }
        return r2(t4, [{ key: `_quicksort`, value: function(e5, t5, n3) {
          if (t5 < n3) {
            var r3 = this._partition(e5, t5, n3);
            this._quicksort(e5, t5, r3), this._quicksort(e5, r3 + 1, n3);
          }
        } }, { key: `_partition`, value: function(e5, t5, n3) {
          for (var r3 = g, i3 = this._get(e5, t5), a3 = t5, o2 = n3; ; ) {
            for (; this.compareFunction(i3, this[r3(418)](e5, o2)); ) o2--;
            for (; this.compareFunction(this._get(e5, a3), i3); ) a3++;
            if (a3 < o2) this[r3(426)](e5, a3, o2), a3++, o2--;
            else return o2;
          }
        } }, { key: `_get`, value: function(e5, t5) {
          return e5 instanceof a2 ? e5.get_object_at(t5) : e5[t5];
        } }, { key: `_set`, value: function(e5, t5, n3) {
          e5 instanceof a2 ? e5.set_object_at(t5, n3) : e5[t5] = n3;
        } }, { key: e4(426), value: function(e5, t5, n3) {
          var r3 = this._get(e5, t5);
          this._set(e5, t5, this._get(e5, n3)), this._set(e5, n3, r3);
        } }, { key: `_defaultCompareFunction`, value: function(e5, t5) {
          return t5 > e5;
        } }]), t4;
      })();
    }, function(e3, t3, n2) {
      var r2 = /* @__PURE__ */ (function() {
        function e4(e5, t4) {
          for (var n3 = g, r3 = 0; r3 < t4.length; r3++) {
            var i3 = t4[r3];
            i3[n3(236)] = i3.enumerable || false, i3[n3(320)] = true, `value` in i3 && (i3[n3(550)] = true), Object.defineProperty(e5, i3.key, i3);
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
        var e4 = g;
        function t4(e5, n3) {
          var r3 = g, a2 = arguments[r3(458)] > 2 && arguments[2] !== void 0 ? arguments[2] : 1, o2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : -1, s2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : -1;
          i2(this, t4), this.sequence1 = e5, this.sequence2 = n3, this.match_score = a2, this.mismatch_penalty = o2, this.gap_penalty = s2, this.iMax = e5[r3(458)] + 1, this[r3(467)] = n3.length + 1, this[r3(515)] = Array(this[r3(373)]);
          for (var c2 = 0; c2 < this.iMax; c2++) {
            this[r3(515)][c2] = Array(this.jMax);
            for (var l2 = 0; l2 < this.jMax; l2++) this.grid[c2][l2] = 0;
          }
          this.tracebackGrid = Array(this[r3(373)]);
          for (var u2 = 0; u2 < this[r3(373)]; u2++) {
            this.tracebackGrid[u2] = Array(this.jMax);
            for (var d2 = 0; d2 < this.jMax; d2++) this.tracebackGrid[u2][d2] = [null, null, null];
          }
          this.alignments = [], this.score = -1, this[r3(514)]();
        }
        return r2(t4, [{ key: `getScore`, value: function() {
          return this.score;
        } }, { key: `getAlignments`, value: function() {
          return this.alignments;
        } }, { key: `computeGrids`, value: function() {
          for (var e5 = g, t5 = 1; t5 < this.jMax; t5++) this.grid[0][t5] = this.grid[0][t5 - 1] + this.gap_penalty, this.tracebackGrid[0][t5] = [false, false, true];
          for (var n3 = 1; n3 < this.iMax; n3++) this.grid[n3][0] = this.grid[n3 - 1][0] + this.gap_penalty, this.tracebackGrid[n3][0] = [false, true, false];
          for (var r3 = 1; r3 < this.iMax; r3++) for (var i3 = 1; i3 < this[e5(467)]; i3++) {
            var a2 = void 0;
            a2 = this.sequence1[r3 - 1] === this.sequence2[i3 - 1] ? this[e5(515)][r3 - 1][i3 - 1] + this[e5(239)] : this[e5(515)][r3 - 1][i3 - 1] + this.mismatch_penalty;
            var o2 = this.grid[r3 - 1][i3] + this.gap_penalty, s2 = this.grid[r3][i3 - 1] + this.gap_penalty, c2 = [a2, o2, s2], l2 = this.arrayAllMaxIndexes(c2);
            this[e5(515)][r3][i3] = c2[l2[0]], this.tracebackGrid[r3][i3] = [l2.includes(0), l2.includes(1), l2.includes(2)];
          }
          this.score = this.grid[this.iMax - 1][this.jMax - 1];
        } }, { key: e4(498), value: function() {
          var t5 = e4, n3 = [];
          for (n3.push({ pos: [this[t5(337)].length, this[t5(433)].length], seq1: ``, seq2: `` }); n3[0]; ) {
            var r3 = n3[0], i3 = this.tracebackGrid[r3.pos[0]][r3.pos[1]];
            i3[0] && n3.push({ pos: [r3.pos[0] - 1, r3.pos[1] - 1], seq1: this.sequence1[r3.pos[0] - 1] + r3.seq1, seq2: this.sequence2[r3[t5(318)][1] - 1] + r3[t5(446)] }), i3[1] && n3.push({ pos: [r3.pos[0] - 1, r3.pos[1]], seq1: this.sequence1[r3[t5(318)][0] - 1] + r3.seq1, seq2: `-` + r3.seq2 }), i3[2] && n3[t5(490)]({ pos: [r3.pos[0], r3.pos[1] - 1], seq1: `-` + r3.seq1, seq2: this.sequence2[r3.pos[1] - 1] + r3[t5(446)] }), r3.pos[0] === 0 && r3.pos[1] === 0 && this.alignments[t5(490)]({ sequence1: r3.seq1, sequence2: r3.seq2 }), n3.shift();
          }
          return this.alignments;
        } }, { key: `getAllIndexes`, value: function(e5, t5) {
          for (var n3 = [], r3 = -1; (r3 = e5.indexOf(t5, r3 + 1)) !== -1; ) n3.push(r3);
          return n3;
        } }, { key: `arrayAllMaxIndexes`, value: function(t5) {
          var n3 = e4;
          return this[n3(508)](t5, Math.max.apply(null, t5));
        } }]), t4;
      })();
    }, function(e3, t3, n2) {
      var r2 = g, i2 = function() {
      };
      i2.FDLayout = n2(18), i2[r2(486)] = n2(7), i2.FDLayoutEdge = n2(19), i2.FDLayoutNode = n2(20), i2.DimensionD = n2(21), i2.HashMap = n2(22), i2.HashSet = n2(23), i2.IGeometry = n2(8), i2.IMath = n2(9), i2[r2(425)] = n2(10), i2.Point = n2(12), i2.PointD = n2(4), i2.RandomSeed = n2(16), i2.RectangleD = n2(13), i2.Transform = n2(17), i2.UniqueIDGeneretor = n2(14), i2[r2(512)] = n2(24), i2.LinkedList = n2(11), i2.LGraphObject = n2(2), i2.LGraph = n2(5), i2[r2(413)] = n2(1), i2[r2(417)] = n2(6), i2.LNode = n2(3), i2.Layout = n2(15), i2.LayoutConstants = n2(0), i2.NeedlemanWunsch = n2(25), e3.exports = i2;
    }, function(e3, t3, n2) {
      var r2 = g;
      function i2() {
        this.listeners = [];
      }
      var a2 = i2.prototype;
      a2[r2(510)] = function(e4, t4) {
        this.listeners.push({ event: e4, callback: t4 });
      }, a2.removeListener = function(e4, t4) {
        for (var n3 = r2, i3 = this.listeners.length; i3 >= 0; i3--) {
          var a3 = this.listeners[i3];
          a3.event === e4 && a3.callback === t4 && this.listeners[n3(307)](i3, 1);
        }
      }, a2.emit = function(e4, t4) {
        for (var n3 = 0; n3 < this.listeners.length; n3++) {
          var r3 = this.listeners[n3];
          e4 === r3.event && r3.callback(t4);
        }
      }, e3.exports = i2;
    }]);
  });
}), f = e((e2, t2) => {
  (function(n2, r2) {
    var i2 = g;
    typeof e2 == `object` && typeof t2 == `object` ? t2.exports = r2(d()) : typeof define == `function` && define.amd ? define([`layout-base`], r2) : typeof e2 == `object` ? e2.coseBase = r2(d()) : n2.coseBase = r2(n2[i2(314)]);
  })(e2, function(e3) {
    return (function(e4) {
      var t3 = {};
      function n2(r2) {
        if (t3[r2]) return t3[r2].exports;
        var i2 = t3[r2] = { i: r2, l: false, exports: {} };
        return e4[r2].call(i2.exports, i2, i2.exports, n2), i2.l = true, i2.exports;
      }
      return n2.m = e4, n2.c = t3, n2.i = function(e5) {
        return e5;
      }, n2.d = function(e5, t4, r2) {
        n2.o(e5, t4) || Object.defineProperty(e5, t4, { configurable: false, enumerable: true, get: r2 });
      }, n2.n = function(e5) {
        var t4 = e5 && e5[g(268)] ? function() {
          return e5.default;
        } : function() {
          return e5;
        };
        return n2.d(t4, `a`, t4), t4;
      }, n2.o = function(e5, t4) {
        return Object.prototype.hasOwnProperty.call(e5, t4);
      }, n2.p = ``, n2(n2.s = 7);
    })([function(t3, n2) {
      t3.exports = e3;
    }, function(e4, t3, n2) {
      var r2 = g, i2 = n2(0)[r2(486)];
      function a2() {
      }
      for (var o2 in i2) a2[o2] = i2[o2];
      a2[r2(408)] = false, a2.DEFAULT_RADIAL_SEPARATION = i2.DEFAULT_EDGE_LENGTH, a2.DEFAULT_COMPONENT_SEPERATION = 60, a2.TILE = true, a2.TILING_PADDING_VERTICAL = 10, a2[r2(369)] = 10, a2.TREE_REDUCTION_ON_INCREMENTAL = false, e4.exports = a2;
    }, function(e4, t3, n2) {
      var r2 = g, i2 = n2(0).FDLayoutEdge;
      function a2(e5, t4, n3) {
        i2[g(400)](this, e5, t4, n3);
      }
      for (var o2 in a2.prototype = Object[r2(226)](i2.prototype), i2) a2[o2] = i2[o2];
      e4.exports = a2;
    }, function(e4, t3, n2) {
      var r2 = g, i2 = n2(0).LGraph;
      function a2(e5, t4, n3) {
        i2[g(400)](this, e5, t4, n3);
      }
      for (var o2 in a2[r2(280)] = Object.create(i2.prototype), i2) a2[o2] = i2[o2];
      e4.exports = a2;
    }, function(e4, t3, n2) {
      var r2 = g, i2 = n2(0)[r2(417)];
      function a2(e5) {
        i2[r2(400)](this, e5);
      }
      for (var o2 in a2.prototype = Object.create(i2.prototype), i2) a2[o2] = i2[o2];
      e4.exports = a2;
    }, function(e4, t3, n2) {
      var r2 = g, i2 = n2(0).FDLayoutNode, a2 = n2(0).IMath;
      function o2(e5, t4, n3, r3) {
        i2.call(this, e5, t4, n3, r3);
      }
      for (var s2 in o2.prototype = Object[r2(226)](i2.prototype), i2) o2[s2] = i2[s2];
      o2.prototype.move = function() {
        var e5 = r2, t4 = this.graphManager.getLayout();
        this.displacementX = t4[e5(292)] * (this[e5(553)] + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren, this.displacementY = t4[e5(292)] * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren, Math.abs(this.displacementX) > t4.coolingFactor * t4.maxNodeDisplacement && (this.displacementX = t4[e5(292)] * t4.maxNodeDisplacement * a2[e5(265)](this.displacementX)), Math.abs(this.displacementY) > t4.coolingFactor * t4.maxNodeDisplacement && (this.displacementY = t4.coolingFactor * t4.maxNodeDisplacement * a2.sign(this[e5(478)])), this.child == null || this.child[e5(487)]().length == 0 ? this.moveBy(this[e5(422)], this[e5(478)]) : this.propogateDisplacementToChildren(this[e5(422)], this[e5(478)]), t4.totalDisplacement += Math.abs(this[e5(422)]) + Math[e5(321)](this.displacementY), this.springForceX = 0, this[e5(353)] = 0, this.repulsionForceX = 0, this[e5(423)] = 0, this.gravitationForceX = 0, this[e5(551)] = 0, this.displacementX = 0, this.displacementY = 0;
      }, o2.prototype.propogateDisplacementToChildren = function(e5, t4) {
        for (var n3 = r2, i3 = this.getChild().getNodes(), a3, o3 = 0; o3 < i3.length; o3++) a3 = i3[o3], a3.getChild() == null ? (a3.moveBy(e5, t4), a3.displacementX += e5, a3[n3(478)] += t4) : a3.propogateDisplacementToChildren(e5, t4);
      }, o2.prototype.setPred1 = function(e5) {
        this.pred1 = e5;
      }, o2.prototype.getPred1 = function() {
        return pred1;
      }, o2.prototype.getPred2 = function() {
        return pred2;
      }, o2.prototype[r2(525)] = function(e5) {
        this.next = e5;
      }, o2.prototype.getNext = function() {
        return next;
      }, o2.prototype.setProcessed = function(e5) {
        this.processed = e5;
      }, o2[r2(280)][r2(448)] = function() {
        return processed;
      }, e4[r2(288)] = o2;
    }, function(e4, t3, n2) {
      var r2 = g, i2 = n2(0)[r2(556)], a2 = n2(4), o2 = n2(3), s2 = n2(5), c2 = n2(2), l2 = n2(1), u2 = n2(0)[r2(486)], d2 = n2(0)[r2(404)], f2 = n2(0).Point, p2 = n2(0)[r2(392)], m2 = n2(0).Layout, h2 = n2(0).Integer, _2 = n2(0).IGeometry, v2 = n2(0)[r2(382)], y2 = n2(0)[r2(230)];
      function b2() {
        i2.call(this), this.toBeTiled = {};
      }
      for (var x2 in b2.prototype = Object.create(i2.prototype), i2) b2[x2] = i2[x2];
      b2.prototype.newGraphManager = function() {
        var e5 = new a2(this);
        return this.graphManager = e5, e5;
      }, b2[r2(280)].newGraph = function(e5) {
        var t4 = r2;
        return new o2(null, this[t4(532)], e5);
      }, b2.prototype.newNode = function(e5) {
        return new s2(this.graphManager, e5);
      }, b2.prototype[r2(401)] = function(e5) {
        return new c2(null, null, e5);
      }, b2.prototype.initParameters = function() {
        var e5 = r2;
        i2[e5(280)].initParameters.call(this, arguments), this.isSubLayout || (l2.DEFAULT_EDGE_LENGTH < 10 ? this[e5(526)] = 10 : this.idealEdgeLength = l2.DEFAULT_EDGE_LENGTH, this[e5(334)] = l2.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.springConstant = u2.DEFAULT_SPRING_STRENGTH, this.repulsionConstant = u2.DEFAULT_REPULSION_STRENGTH, this.gravityConstant = u2.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = u2.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = u2.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = u2[e5(346)], this.prunedNodesAll = [], this.growTreeIterations = 0, this[e5(485)] = 0, this[e5(264)] = false, this.isGrowthFinished = false, this[e5(259)] = 0, this.maxCoolingCycle = this.maxIterations / u2.CONVERGENCE_CHECK_PERIOD, this.finalTemperature = u2[e5(330)] / this.maxIterations, this.coolingAdjuster = 1);
      }, b2[r2(280)].layout = function() {
        var e5 = r2;
        return d2.DEFAULT_CREATE_BENDS_AS_NEEDED && (this.createBendpoints(), this.graphManager.resetAllEdges()), this[e5(357)] = 0, this.classicLayout();
      }, b2.prototype.classicLayout = function() {
        var e5 = r2;
        if (this[e5(235)] = this.calculateNodesToApplyGravitationTo(), this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity), this.calcNoOfChildrenForAllNodes(), this.graphManager.calcLowestCommonAncestors(), this.graphManager.calcInclusionTreeDepths(), this.graphManager.getRoot().calcEstimatedSize(), this[e5(410)](), !this.incremental) {
          var t4 = this.getFlatForest();
          if (t4[e5(458)] > 0) this[e5(367)](t4);
          else {
            this.reduceTrees(), this.graphManager[e5(252)]();
            var n3 = new Set(this[e5(248)]()), i3 = this[e5(235)].filter(function(e6) {
              return n3.has(e6);
            });
            this.graphManager.setAllNodesToApplyGravitation(i3), this.positionNodesRandomly();
          }
        } else if (l2.TREE_REDUCTION_ON_INCREMENTAL) {
          this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
          var n3 = new Set(this[e5(248)]()), i3 = this.nodesWithGravity[e5(472)](function(e6) {
            return n3.has(e6);
          });
          this.graphManager.setAllNodesToApplyGravitation(i3);
        }
        return this.initSpringEmbedder(), this[e5(291)](), true;
      }, b2[r2(280)].tick = function() {
        var e5 = r2;
        if (this.totalIterations++, this.totalIterations === this[e5(368)] && !this.isTreeGrowing && !this.isGrowthFinished) if (this.prunedNodesAll.length > 0) this.isTreeGrowing = true;
        else return true;
        if (this.totalIterations % u2.CONVERGENCE_CHECK_PERIOD == 0 && !this.isTreeGrowing && !this.isGrowthFinished) {
          if (this.isConverged()) if (this.prunedNodesAll.length > 0) this.isTreeGrowing = true;
          else return true;
          this.coolingCycle++, this.layoutQuality == 0 ? this[e5(240)] = this.coolingCycle : this.layoutQuality == 1 && (this.coolingAdjuster = this.coolingCycle / 3), this.coolingFactor = Math.max(this.initialCoolingFactor - this.coolingCycle ** +(Math.log(100 * (this.initialCoolingFactor - this[e5(229)])) / Math.log(this.maxCoolingCycle)) / 100 * this.coolingAdjuster, this.finalTemperature), this.animationPeriod = Math.ceil(this[e5(496)] * Math.sqrt(this.coolingFactor));
        }
        if (this.isTreeGrowing) {
          if (this.growTreeIterations % 10 == 0) if (this.prunedNodesAll.length > 0) {
            this.graphManager.updateBounds(), this[e5(310)](), this.growTree(this.prunedNodesAll), this[e5(532)].resetAllNodesToApplyGravitation();
            var t4 = new Set(this.getAllNodes()), n3 = this[e5(235)].filter(function(e6) {
              return t4.has(e6);
            });
            this.graphManager.setAllNodesToApplyGravitation(n3), this.graphManager.updateBounds(), this.updateGrid(), this.coolingFactor = u2.DEFAULT_COOLING_FACTOR_INCREMENTAL;
          } else this.isTreeGrowing = false, this.isGrowthFinished = true;
          this.growTreeIterations++;
        }
        if (this.isGrowthFinished) {
          if (this.isConverged()) return true;
          this[e5(485)] % 10 == 0 && (this[e5(532)].updateBounds(), this.updateGrid()), this.coolingFactor = u2[e5(528)] * ((100 - this.afterGrowthIterations) / 100), this.afterGrowthIterations++;
        }
        var i3 = !this.isTreeGrowing && !this[e5(276)], a3 = this.growTreeIterations % 10 == 1 && this.isTreeGrowing || this.afterGrowthIterations % 10 == 1 && this.isGrowthFinished;
        return this[e5(519)] = 0, this.graphManager[e5(459)](), this.calcSpringForces(), this.calcRepulsionForces(i3, a3), this.calcGravitationalForces(), this.moveNodes(), this.animate(), false;
      }, b2.prototype[r2(411)] = function() {
        for (var e5 = r2, t4 = this[e5(532)].getAllNodes(), n3 = {}, i3 = 0; i3 < t4.length; i3++) {
          var a3 = t4[i3].rect, o3 = t4[i3].id;
          n3[o3] = { id: o3, x: a3.getCenterX(), y: a3[e5(319)](), w: a3.width, h: a3.height };
        }
        return n3;
      }, b2.prototype.runSpringEmbedder = function() {
        var e5 = r2;
        this.initialAnimationPeriod = 25, this.animationPeriod = this.initialAnimationPeriod;
        var t4 = false;
        if (u2[e5(286)] === `during`) this.emit(`layoutstarted`);
        else {
          for (; !t4; ) t4 = this[e5(343)]();
          this.graphManager.updateBounds();
        }
      }, b2.prototype.calculateNodesToApplyGravitationTo = function() {
        var e5 = r2, t4 = [], n3, i3 = this.graphManager.getGraphs(), a3 = i3.length, o3;
        for (o3 = 0; o3 < a3; o3++) n3 = i3[o3], n3.updateConnected(), n3[e5(390)] || (t4 = t4[e5(476)](n3.getNodes()));
        return t4;
      }, b2.prototype.createBendpoints = function() {
        var e5 = r2, t4 = [];
        t4 = t4.concat(this.graphManager.getAllEdges());
        var n3 = /* @__PURE__ */ new Set(), i3;
        for (i3 = 0; i3 < t4.length; i3++) {
          var a3 = t4[i3];
          if (!n3.has(a3)) {
            var o3 = a3.getSource(), s3 = a3.getTarget();
            if (o3 == s3) a3[e5(326)]().push(new p2()), a3.getBendpoints().push(new p2()), this.createDummyNodesForBendpoints(a3), n3.add(a3);
            else {
              var c3 = [];
              if (c3 = c3.concat(o3.getEdgeListToNode(s3)), c3 = c3.concat(s3.getEdgeListToNode(o3)), !n3.has(c3[0])) {
                if (c3.length > 1) {
                  var l3;
                  for (l3 = 0; l3 < c3.length; l3++) {
                    var u3 = c3[l3];
                    u3[e5(326)]().push(new p2()), this.createDummyNodesForBendpoints(u3);
                  }
                }
                c3.forEach(function(e6) {
                  n3.add(e6);
                });
              }
            }
          }
          if (n3.size == t4.length) break;
        }
      }, b2.prototype.positionNodesRadially = function(e5) {
        for (var t4 = r2, n3 = new f2(0, 0), i3 = Math.ceil(Math.sqrt(e5[t4(458)])), a3 = 0, o3 = 0, s3 = 0, c3 = new p2(0, 0), u3 = 0; u3 < e5.length; u3++) {
          u3 % i3 == 0 && (s3 = 0, o3 = a3, u3 != 0 && (o3 += l2[t4(541)]), a3 = 0);
          var h3 = e5[u3], g2 = m2.findCenterOfTree(h3);
          n3.x = s3, n3.y = o3, c3 = b2.radialLayout(h3, g2, n3), c3.y > a3 && (a3 = Math.floor(c3.y)), s3 = Math.floor(c3.x + l2.DEFAULT_COMPONENT_SEPERATION);
        }
        this.transform(new p2(d2.WORLD_CENTER_X - c3.x / 2, d2.WORLD_CENTER_Y - c3.y / 2));
      }, b2.radialLayout = function(e5, t4, n3) {
        var i3 = r2, a3 = Math.max(this.maxDiagonalInTree(e5), l2.DEFAULT_RADIAL_SEPARATION);
        b2.branchRadialLayout(t4, null, 0, 359, 0, a3);
        var o3 = v2.calculateBounds(e5), s3 = new y2();
        s3.setDeviceOrgX(o3.getMinX()), s3.setDeviceOrgY(o3.getMinY()), s3.setWorldOrgX(n3.x), s3.setWorldOrgY(n3.y);
        for (var c3 = 0; c3 < e5.length; c3++) e5[c3].transform(s3);
        var u3 = new p2(o3.getMaxX(), o3[i3(533)]());
        return s3.inverseTransformPoint(u3);
      }, b2.branchRadialLayout = function(e5, t4, n3, i3, a3, o3) {
        var s3 = r2, c3 = (i3 - n3 + 1) / 2;
        c3 < 0 && (c3 += 180);
        var l3 = (c3 + n3) % 360 * _2[s3(309)] / 360, u3 = a3 * Math.cos(l3), d3 = a3 * Math.sin(l3);
        e5.setCenter(u3, d3);
        var f3 = [];
        f3 = f3.concat(e5[s3(316)]());
        var p3 = f3.length;
        t4 != null && p3--;
        for (var m3 = 0, h3 = f3[s3(458)], g2, v3 = e5.getEdgesBetween(t4); v3.length > 1; ) {
          var y3 = v3[0];
          v3.splice(0, 1);
          var x3 = f3.indexOf(y3);
          x3 >= 0 && f3.splice(x3, 1), h3--, p3--;
        }
        g2 = t4 == null ? 0 : (f3[s3(243)](v3[0]) + 1) % h3;
        for (var S2 = Math.abs(i3 - n3) / p3, C2 = g2; m3 != p3; C2 = ++C2 % h3) {
          var w2 = f3[C2].getOtherEnd(e5);
          if (w2 != t4) {
            var T = (n3 + m3 * S2) % 360, E = (T + S2) % 360;
            b2.branchRadialLayout(w2, e5, T, E, a3 + o3, o3), m3++;
          }
        }
      }, b2.maxDiagonalInTree = function(e5) {
        for (var t4 = h2.MIN_VALUE, n3 = 0; n3 < e5.length; n3++) {
          var r3 = e5[n3].getDiagonal();
          r3 > t4 && (t4 = r3);
        }
        return t4;
      }, b2[r2(280)].calcRepulsionRange = function() {
        return 2 * (this.level + 1) * this.idealEdgeLength;
      }, b2.prototype.groupZeroDegreeMembers = function() {
        var e5 = r2, t4 = this, n3 = {};
        this[e5(529)] = {}, this.idToDummyNode = {};
        for (var i3 = [], a3 = this.graphManager.getAllNodes(), o3 = 0; o3 < a3.length; o3++) {
          var c3 = a3[o3], l3 = c3.getParent();
          this.getNodeDegreeWithChildren(c3) === 0 && (l3.id == null || !this.getToBeTiled(l3)) && i3.push(c3);
        }
        for (var o3 = 0; o3 < i3.length; o3++) {
          var c3 = i3[o3], u3 = c3.getParent().id;
          n3[u3] === void 0 && (n3[u3] = []), n3[u3] = n3[u3][e5(476)](c3);
        }
        Object.keys(n3).forEach(function(r3) {
          var i4 = e5;
          if (n3[r3].length > 1) {
            var a4 = `DummyCompound_` + r3;
            t4.memberGroups[a4] = n3[r3];
            var o4 = n3[r3][0].getParent(), c4 = new s2(t4.graphManager);
            c4.id = a4, c4.paddingLeft = o4.paddingLeft || 0, c4.paddingRight = o4.paddingRight || 0, c4[i4(277)] = o4.paddingBottom || 0, c4.paddingTop = o4.paddingTop || 0, t4.idToDummyNode[a4] = c4;
            var l4 = t4.getGraphManager().add(t4[i4(558)](), c4), u4 = o4[i4(548)]();
            u4.add(c4);
            for (var d3 = 0; d3 < n3[r3].length; d3++) {
              var f3 = n3[r3][d3];
              u4.remove(f3), l4.add(f3);
            }
          }
        });
      }, b2.prototype.clearCompounds = function() {
        var e5 = r2, t4 = {}, n3 = {};
        this.performDFSOnCompounds();
        for (var i3 = 0; i3 < this.compoundOrder.length; i3++) n3[this.compoundOrder[i3].id] = this.compoundOrder[i3], t4[this.compoundOrder[i3].id] = [].concat(this.compoundOrder[i3][e5(548)]().getNodes()), this.graphManager[e5(391)](this[e5(406)][i3].getChild()), this[e5(406)][i3][e5(301)] = null;
        this[e5(532)].resetAllNodes(), this.tileCompoundMembers(t4, n3);
      }, b2.prototype[r2(517)] = function() {
        var e5 = r2, t4 = this, n3 = this[e5(449)] = [];
        Object.keys(this.memberGroups).forEach(function(r3) {
          var i3 = e5, a3 = t4.idToDummyNode[r3];
          n3[r3] = t4.tileNodes(t4.memberGroups[r3], a3.paddingLeft + a3.paddingRight), a3.rect[i3(361)] = n3[r3].width, a3[i3(371)][i3(465)] = n3[r3][i3(465)];
        });
      }, b2[r2(280)].repopulateCompounds = function() {
        for (var e5 = r2, t4 = this.compoundOrder.length - 1; t4 >= 0; t4--) {
          var n3 = this[e5(406)][t4], i3 = n3.id, a3 = n3[e5(257)], o3 = n3.paddingTop;
          this.adjustLocations(this[e5(333)][i3], n3[e5(371)].x, n3[e5(371)].y, a3, o3);
        }
      }, b2[r2(280)].repopulateZeroDegreeMembers = function() {
        var e5 = this, t4 = this.tiledZeroDegreePack;
        Object.keys(t4).forEach(function(n3) {
          var r3 = g, i3 = e5.idToDummyNode[n3], a3 = i3.paddingLeft, o3 = i3.paddingTop;
          e5[r3(511)](t4[n3], i3.rect.x, i3.rect.y, a3, o3);
        });
      }, b2.prototype.getToBeTiled = function(e5) {
        var t4 = r2, n3 = e5.id;
        if (this.toBeTiled[n3] != null) return this.toBeTiled[n3];
        var i3 = e5.getChild();
        if (i3 == null) return this.toBeTiled[n3] = false, false;
        for (var a3 = i3.getNodes(), o3 = 0; o3 < a3.length; o3++) {
          var s3 = a3[o3];
          if (this.getNodeDegree(s3) > 0) return this.toBeTiled[n3] = false, false;
          if (s3.getChild() == null) {
            this[t4(491)][s3.id] = false;
            continue;
          }
          if (!this.getToBeTiled(s3)) return this.toBeTiled[n3] = false, false;
        }
        return this.toBeTiled[n3] = true, true;
      }, b2.prototype.getNodeDegree = function(e5) {
        e5.id;
        for (var t4 = e5.getEdges(), n3 = 0, r3 = 0; r3 < t4.length; r3++) {
          var i3 = t4[r3];
          i3.getSource().id !== i3.getTarget().id && (n3 += 1);
        }
        return n3;
      }, b2.prototype.getNodeDegreeWithChildren = function(e5) {
        var t4 = this.getNodeDegree(e5);
        if (e5.getChild() == null) return t4;
        for (var n3 = e5.getChild().getNodes(), r3 = 0; r3 < n3.length; r3++) {
          var i3 = n3[r3];
          t4 += this.getNodeDegreeWithChildren(i3);
        }
        return t4;
      }, b2.prototype.performDFSOnCompounds = function() {
        this.compoundOrder = [], this.fillCompexOrderByDFS(this.graphManager.getRoot().getNodes());
      }, b2.prototype.fillCompexOrderByDFS = function(e5) {
        for (var t4 = r2, n3 = 0; n3 < e5.length; n3++) {
          var i3 = e5[n3];
          i3.getChild() != null && this.fillCompexOrderByDFS(i3.getChild().getNodes()), this.getToBeTiled(i3) && this[t4(406)].push(i3);
        }
      }, b2.prototype.adjustLocations = function(e5, t4, n3, i3, a3) {
        var o3 = r2;
        t4 += i3, n3 += a3;
        for (var s3 = t4, c3 = 0; c3 < e5.rows.length; c3++) {
          var l3 = e5[o3(342)][c3];
          t4 = s3;
          for (var u3 = 0, d3 = 0; d3 < l3.length; d3++) {
            var f3 = l3[d3];
            f3.rect.x = t4, f3.rect.y = n3, t4 += f3.rect.width + e5[o3(545)], f3.rect.height > u3 && (u3 = f3.rect[o3(465)]);
          }
          n3 += u3 + e5.verticalPadding;
        }
      }, b2.prototype.tileCompoundMembers = function(e5, t4) {
        var n3 = this;
        this.tiledMemberPack = [], Object.keys(e5).forEach(function(r3) {
          var i3 = g, a3 = t4[r3];
          n3.tiledMemberPack[r3] = n3.tileNodes(e5[r3], a3.paddingLeft + a3.paddingRight), a3.rect.width = n3.tiledMemberPack[r3].width, a3[i3(371)].height = n3.tiledMemberPack[r3][i3(465)];
        });
      }, b2.prototype.tileNodes = function(e5, t4) {
        var n3 = r2, i3 = { rows: [], rowWidth: [], rowHeight: [], width: 0, height: t4, verticalPadding: l2.TILING_PADDING_VERTICAL, horizontalPadding: l2.TILING_PADDING_HORIZONTAL };
        e5.sort(function(e6, t5) {
          var n4 = g;
          return e6.rect[n4(361)] * e6[n4(371)].height > t5.rect[n4(361)] * t5.rect.height ? -1 : +(e6.rect[n4(361)] * e6.rect[n4(465)] < t5.rect.width * t5.rect.height);
        });
        for (var a3 = 0; a3 < e5.length; a3++) {
          var o3 = e5[a3];
          i3.rows.length == 0 ? this.insertNodeToRow(i3, o3, 0, t4) : this.canAddHorizontal(i3, o3.rect.width, o3.rect.height) ? this.insertNodeToRow(i3, o3, this.getShortestRowIndex(i3), t4) : this.insertNodeToRow(i3, o3, i3.rows.length, t4), this[n3(395)](i3);
        }
        return i3;
      }, b2.prototype.insertNodeToRow = function(e5, t4, n3, i3) {
        var a3 = r2, o3 = i3;
        n3 == e5.rows.length && (e5.rows[a3(490)]([]), e5.rowWidth.push(o3), e5[a3(456)].push(0));
        var s3 = e5[a3(509)][n3] + t4.rect.width;
        e5.rows[n3].length > 0 && (s3 += e5.horizontalPadding), e5.rowWidth[n3] = s3, e5.width < s3 && (e5[a3(361)] = s3);
        var c3 = t4[a3(371)].height;
        n3 > 0 && (c3 += e5[a3(289)]);
        var l3 = 0;
        c3 > e5.rowHeight[n3] && (l3 = e5[a3(456)][n3], e5.rowHeight[n3] = c3, l3 = e5.rowHeight[n3] - l3), e5.height += l3, e5.rows[n3].push(t4);
      }, b2.prototype.getShortestRowIndex = function(e5) {
        for (var t4 = r2, n3 = -1, i3 = Number.MAX_VALUE, a3 = 0; a3 < e5[t4(342)].length; a3++) e5.rowWidth[a3] < i3 && (n3 = a3, i3 = e5.rowWidth[a3]);
        return n3;
      }, b2.prototype.getLongestRowIndex = function(e5) {
        for (var t4 = r2, n3 = -1, i3 = Number.MIN_VALUE, a3 = 0; a3 < e5.rows[t4(458)]; a3++) e5[t4(509)][a3] > i3 && (n3 = a3, i3 = e5.rowWidth[a3]);
        return n3;
      }, b2.prototype.canAddHorizontal = function(e5, t4, n3) {
        var i3 = r2, a3 = this.getShortestRowIndex(e5);
        if (a3 < 0) return true;
        var o3 = e5.rowWidth[a3];
        if (o3 + e5[i3(545)] + t4 <= e5.width) return true;
        var s3 = 0;
        e5[i3(456)][a3] < n3 && a3 > 0 && (s3 = n3 + e5.verticalPadding - e5.rowHeight[a3]);
        var c3 = e5.width - o3 >= t4 + e5.horizontalPadding ? (e5.height + s3) / (o3 + t4 + e5.horizontalPadding) : (e5.height + s3) / e5.width;
        s3 = n3 + e5.verticalPadding;
        var l3 = e5.width < t4 ? (e5.height + s3) / t4 : (e5[i3(465)] + s3) / e5.width;
        return l3 < 1 && (l3 = 1 / l3), c3 < 1 && (c3 = 1 / c3), c3 < l3;
      }, b2.prototype.shiftToLastRow = function(e5) {
        var t4 = r2, n3 = this.getLongestRowIndex(e5), i3 = e5.rowWidth[t4(458)] - 1, a3 = e5.rows[n3], o3 = a3[a3.length - 1], s3 = o3.width + e5.horizontalPadding;
        if (e5.width - e5.rowWidth[i3] > s3 && n3 != i3) {
          a3.splice(-1, 1), e5.rows[i3].push(o3), e5.rowWidth[n3] = e5.rowWidth[n3] - s3, e5.rowWidth[i3] = e5.rowWidth[i3] + s3, e5.width = e5.rowWidth[instance[t4(531)](e5)];
          for (var c3 = Number[t4(427)], l3 = 0; l3 < a3.length; l3++) a3[l3].height > c3 && (c3 = a3[l3].height);
          n3 > 0 && (c3 += e5.verticalPadding);
          var u3 = e5.rowHeight[n3] + e5[t4(456)][i3];
          e5.rowHeight[n3] = c3, e5.rowHeight[i3] < o3.height + e5[t4(289)] && (e5.rowHeight[i3] = o3.height + e5.verticalPadding);
          var d3 = e5[t4(456)][n3] + e5.rowHeight[i3];
          e5[t4(465)] += d3 - u3, this.shiftToLastRow(e5);
        }
      }, b2.prototype.tilingPreLayout = function() {
        l2.TILE && (this.groupZeroDegreeMembers(), this.clearCompounds(), this.clearZeroDegreeMembers());
      }, b2.prototype.tilingPostLayout = function() {
        l2.TILE && (this.repopulateZeroDegreeMembers(), this.repopulateCompounds());
      }, b2.prototype.reduceTrees = function() {
        for (var e5 = r2, t4 = [], n3 = true, i3; n3; ) {
          var a3 = this.graphManager.getAllNodes(), o3 = [];
          n3 = false;
          for (var s3 = 0; s3 < a3[e5(458)]; s3++) i3 = a3[s3], i3.getEdges()[e5(458)] == 1 && !i3.getEdges()[0].isInterGraph && i3.getChild() == null && (o3.push([i3, i3.getEdges()[0], i3.getOwner()]), n3 = true);
          if (n3 == 1) {
            for (var c3 = [], l3 = 0; l3 < o3.length; l3++) o3[l3][0][e5(316)]().length == 1 && (c3.push(o3[l3]), o3[l3][0].getOwner().remove(o3[l3][0]));
            t4.push(c3), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
          }
        }
        this.prunedNodesAll = t4;
      }, b2.prototype.growTree = function(e5) {
        for (var t4 = r2, n3 = e5[e5[t4(458)] - 1], i3, a3 = 0; a3 < n3[t4(458)]; a3++) i3 = n3[a3], this.findPlaceforPrunedNode(i3), i3[2].add(i3[0]), i3[2].add(i3[1], i3[1].source, i3[1].target);
        e5.splice(e5[t4(458)] - 1, 1), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
      }, b2[r2(280)].findPlaceforPrunedNode = function(e5) {
        var t4 = r2, n3, i3, a3 = e5[0];
        i3 = a3 == e5[1].source ? e5[1].target : e5[1][t4(546)];
        var o3 = i3[t4(489)], s3 = i3.finishX, c3 = i3.startY, l3 = i3[t4(523)], d3 = [0, 0, 0, 0];
        if (c3 > 0) for (var f3 = o3; f3 <= s3; f3++) d3[0] += this.grid[f3][c3 - 1].length + this[t4(515)][f3][c3].length - 1;
        if (s3 < this.grid.length - 1) for (var f3 = c3; f3 <= l3; f3++) d3[1] += this[t4(515)][s3 + 1][f3][t4(458)] + this.grid[s3][f3].length - 1;
        if (l3 < this.grid[0].length - 1) for (var f3 = o3; f3 <= s3; f3++) d3[2] += this.grid[f3][l3 + 1].length + this.grid[f3][l3].length - 1;
        if (o3 > 0) for (var f3 = c3; f3 <= l3; f3++) d3[3] += this.grid[o3 - 1][f3][t4(458)] + this[t4(515)][o3][f3].length - 1;
        for (var p3 = h2.MAX_VALUE, m3, g2, _3 = 0; _3 < d3.length; _3++) d3[_3] < p3 ? (p3 = d3[_3], m3 = 1, g2 = _3) : d3[_3] == p3 && m3++;
        if (m3 == 3 && p3 == 0) d3[0] == 0 && d3[1] == 0 && d3[2] == 0 ? n3 = 1 : d3[0] == 0 && d3[1] == 0 && d3[3] == 0 ? n3 = 0 : d3[0] == 0 && d3[2] == 0 && d3[3] == 0 ? n3 = 3 : d3[1] == 0 && d3[2] == 0 && d3[3] == 0 && (n3 = 2);
        else if (m3 == 2 && p3 == 0) {
          var v3 = Math.floor(Math.random() * 2);
          n3 = d3[0] == 0 && d3[1] == 0 ? v3 == 0 ? 0 : 1 : d3[0] == 0 && d3[2] == 0 ? v3 == 0 ? 0 : 2 : d3[0] == 0 && d3[3] == 0 ? v3 == 0 ? 0 : 3 : d3[1] == 0 && d3[2] == 0 ? v3 == 0 ? 1 : 2 : d3[1] == 0 && d3[3] == 0 ? v3 == 0 ? 1 : 3 : v3 == 0 ? 2 : 3;
        } else if (m3 == 4 && p3 == 0) {
          var v3 = Math[t4(266)](Math.random() * 4);
          n3 = v3;
        } else n3 = g2;
        n3 == 0 ? a3.setCenter(i3.getCenterX(), i3.getCenterY() - i3[t4(547)]() / 2 - u2.DEFAULT_EDGE_LENGTH - a3.getHeight() / 2) : n3 == 1 ? a3.setCenter(i3[t4(501)]() + i3[t4(261)]() / 2 + u2.DEFAULT_EDGE_LENGTH + a3.getWidth() / 2, i3.getCenterY()) : n3 == 2 ? a3[t4(468)](i3.getCenterX(), i3.getCenterY() + i3[t4(547)]() / 2 + u2[t4(269)] + a3.getHeight() / 2) : a3.setCenter(i3.getCenterX() - i3.getWidth() / 2 - u2.DEFAULT_EDGE_LENGTH - a3[t4(261)]() / 2, i3.getCenterY());
      }, e4.exports = b2;
    }, function(e4, t3, n2) {
      var r2 = g, i2 = {};
      i2[r2(314)] = n2(0), i2.CoSEConstants = n2(1), i2.CoSEEdge = n2(2), i2.CoSEGraph = n2(3), i2.CoSEGraphManager = n2(4), i2.CoSELayout = n2(6), i2.CoSENode = n2(5), e4.exports = i2;
    }]);
  });
}), p = t(e((e2, t2) => {
  (function(n2, r2) {
    var i2 = g;
    typeof e2 == `object` && typeof t2 == `object` ? t2.exports = r2(f()) : typeof define == `function` && define.amd ? define([i2(440)], r2) : typeof e2 == `object` ? e2.cytoscapeCoseBilkent = r2(f()) : n2.cytoscapeCoseBilkent = r2(n2.coseBase);
  })(e2, function(e3) {
    return (function(e4) {
      var t3 = {};
      function n2(r2) {
        if (t3[r2]) return t3[r2].exports;
        var i2 = t3[r2] = { i: r2, l: false, exports: {} };
        return e4[r2].call(i2.exports, i2, i2.exports, n2), i2.l = true, i2.exports;
      }
      return n2.m = e4, n2.c = t3, n2.i = function(e5) {
        return e5;
      }, n2.d = function(e5, t4, r2) {
        n2.o(e5, t4) || Object.defineProperty(e5, t4, { configurable: false, enumerable: true, get: r2 });
      }, n2.n = function(e5) {
        var t4 = e5 && e5.__esModule ? function() {
          return e5.default;
        } : function() {
          return e5;
        };
        return n2.d(t4, `a`, t4), t4;
      }, n2.o = function(e5, t4) {
        var n3 = g;
        return Object[n3(280)].hasOwnProperty[n3(400)](e5, t4);
      }, n2.p = ``, n2(n2.s = 1);
    })([function(t3, n2) {
      var r2 = g;
      t3[r2(288)] = e3;
    }, function(e4, t3, n2) {
      var r2 = g, i2 = n2(0).layoutBase.LayoutConstants, a2 = n2(0).layoutBase[r2(486)], o2 = n2(0)[r2(492)], s2 = n2(0).CoSELayout, c2 = n2(0).CoSENode, l2 = n2(0).layoutBase[r2(392)], u2 = n2(0)[r2(314)].DimensionD, d2 = { ready: function() {
      }, stop: function() {
      }, quality: r2(527), nodeDimensionsIncludeLabels: false, refresh: 30, fit: true, padding: 10, randomize: true, nodeRepulsion: 4500, idealEdgeLength: 50, edgeElasticity: 0.45, nestingFactor: 0.1, gravity: 0.25, numIter: 2500, tile: true, animate: `end`, animationDuration: 500, tilingPaddingVertical: 10, tilingPaddingHorizontal: 10, gravityRangeCompound: 1.5, gravityCompound: 1, gravityRange: 3.8, initialEnergyOnIncremental: 0.5 };
      function f2(e5, t4) {
        var n3 = {};
        for (var r3 in e5) n3[r3] = e5[r3];
        for (var r3 in t4) n3[r3] = t4[r3];
        return n3;
      }
      function p2(e5) {
        this.options = f2(d2, e5), m2(this.options);
      }
      var m2 = function(e5) {
        var t4 = r2;
        e5.nodeRepulsion != null && (o2.DEFAULT_REPULSION_STRENGTH = a2.DEFAULT_REPULSION_STRENGTH = e5.nodeRepulsion), e5.idealEdgeLength != null && (o2[t4(269)] = a2.DEFAULT_EDGE_LENGTH = e5.idealEdgeLength), e5.edgeElasticity != null && (o2.DEFAULT_SPRING_STRENGTH = a2[t4(329)] = e5[t4(504)]), e5.nestingFactor != null && (o2.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = a2.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = e5[t4(503)]), e5.gravity != null && (o2.DEFAULT_GRAVITY_STRENGTH = a2.DEFAULT_GRAVITY_STRENGTH = e5.gravity), e5[t4(483)] != null && (o2.MAX_ITERATIONS = a2.MAX_ITERATIONS = e5.numIter), e5.gravityRange != null && (o2.DEFAULT_GRAVITY_RANGE_FACTOR = a2.DEFAULT_GRAVITY_RANGE_FACTOR = e5.gravityRange), e5.gravityCompound != null && (o2.DEFAULT_COMPOUND_GRAVITY_STRENGTH = a2.DEFAULT_COMPOUND_GRAVITY_STRENGTH = e5.gravityCompound), e5.gravityRangeCompound != null && (o2[t4(346)] = a2.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = e5[t4(246)]), e5.initialEnergyOnIncremental != null && (o2[t4(528)] = a2.DEFAULT_COOLING_FACTOR_INCREMENTAL = e5[t4(452)]), e5.quality == `draft` ? i2.QUALITY = 0 : e5.quality == `proof` ? i2.QUALITY = 2 : i2.QUALITY = 1, o2.NODE_DIMENSIONS_INCLUDE_LABELS = a2[t4(238)] = i2.NODE_DIMENSIONS_INCLUDE_LABELS = e5.nodeDimensionsIncludeLabels, o2[t4(524)] = a2.DEFAULT_INCREMENTAL = i2.DEFAULT_INCREMENTAL = !e5.randomize, o2[t4(286)] = a2.ANIMATE = i2.ANIMATE = e5.animate, o2.TILE = e5.tile, o2[t4(428)] = typeof e5.tilingPaddingVertical == `function` ? e5[t4(336)].call() : e5.tilingPaddingVertical, o2[t4(369)] = typeof e5[t4(293)] == `function` ? e5.tilingPaddingHorizontal.call() : e5.tilingPaddingHorizontal;
      };
      p2.prototype.run = function() {
        var e5 = r2, t4, n3, i3 = this.options;
        this.idToLNode = {};
        var a3 = this.layout = new s2(), o3 = this;
        o3.stopped = false, this.cy = this.options.cy, this.cy.trigger({ type: `layoutstart`, layout: this });
        var c3 = a3.newGraphManager();
        this.gm = c3;
        var l3 = this.options.eles.nodes(), u3 = this.options.eles.edges();
        this.root = c3.addRoot(), this[e5(506)](this.root, this.getTopMostNodes(l3), a3);
        for (var d3 = 0; d3 < u3.length; d3++) {
          var f3 = u3[d3], p3 = this.idToLNode[f3.data(`source`)], m3 = this.idToLNode[f3.data(`target`)];
          if (p3 !== m3 && p3[e5(227)](m3)[e5(458)] == 0) {
            var h3 = c3.add(a3.newEdge(), p3, m3);
            h3.id = f3.id();
          }
        }
        var _2 = function(e6, t5) {
          typeof e6 == `number` && (e6 = t5);
          var n4 = e6.data(`id`), r3 = o3.idToLNode[n4];
          return { x: r3.getRect().getCenterX(), y: r3.getRect().getCenterY() };
        }, v2 = function r3() {
          for (var s3 = e5, c4 = function() {
            var e6 = g;
            i3.fit && i3.cy.fit(i3.eles, i3.padding), t4 || (t4 = true, o3.cy.one(`layoutready`, i3[e6(415)]), o3.cy.trigger({ type: e6(225), layout: o3 }));
          }, l4 = o3.options[s3(488)], u4, d4 = 0; d4 < l4 && !u4; d4++) u4 = o3[s3(434)] || o3.layout.tick();
          if (u4) {
            a3.checkLayoutSuccess() && !a3.isSubLayout && a3.doPostLayout(), a3.tilingPostLayout && a3[s3(284)](), a3[s3(402)] = true, o3.options.eles.nodes().positions(_2), c4(), o3.cy.one(`layoutstop`, o3.options.stop), o3.cy.trigger({ type: `layoutstop`, layout: o3 }), n3 && cancelAnimationFrame(n3), t4 = false;
            return;
          }
          var f4 = o3[s3(441)].getPositionsData();
          i3.eles.nodes().positions(function(e6, t5) {
            var n4 = s3;
            if (typeof e6 == n4(378) && (e6 = t5), !e6.isParent()) {
              for (var r4 = e6.id(), i4 = f4[r4], a4 = e6; i4 == null && (i4 = f4[a4.data(`parent`)] || f4[`DummyCompound_` + a4.data(n4(535))], f4[r4] = i4, a4 = a4.parent()[0], a4 != null); ) ;
              return i4 == null ? { x: e6[n4(398)](`x`), y: e6.position(`y`) } : { x: i4.x, y: i4.y };
            }
          }), c4(), n3 = requestAnimationFrame(r3);
        };
        return a3.addListener(`layoutstarted`, function() {
          var t5 = e5;
          o3[t5(267)][t5(470)] === `during` && (n3 = requestAnimationFrame(v2));
        }), a3[e5(381)](), this.options.animate !== `during` && (o3.options[e5(439)].nodes().not(`:parent`).layoutPositions(o3, o3.options, _2), t4 = false), this;
      }, p2[r2(280)].getTopMostNodes = function(e5) {
        for (var t4 = r2, n3 = {}, i3 = 0; i3 < e5.length; i3++) n3[e5[i3].id()] = true;
        return e5[t4(472)](function(e6, r3) {
          var i4 = t4;
          typeof e6 == i4(378) && (e6 = r3);
          for (var a3 = e6.parent()[0]; a3 != null; ) {
            if (n3[a3.id()]) return false;
            a3 = a3[i4(535)]()[0];
          }
          return true;
        });
      }, p2.prototype.processChildrenList = function(e5, t4, n3) {
        for (var i3 = r2, a3 = t4.length, o3 = 0; o3 < a3; o3++) {
          var s3 = t4[o3], d3 = s3[i3(224)](), f3, p3 = s3[i3(403)]({ nodeDimensionsIncludeLabels: this[i3(267)][i3(396)] });
          if (f3 = s3.outerWidth() != null && s3.outerHeight() != null ? e5.add(new c2(n3.graphManager, new l2(s3.position(`x`) - p3.w / 2, s3.position(`y`) - p3.h / 2), new u2(parseFloat(p3.w), parseFloat(p3.h)))) : e5.add(new c2(this[i3(532)])), f3.id = s3.data(`id`), f3.paddingLeft = parseInt(s3.css(i3(296))), f3.paddingTop = parseInt(s3.css(`padding`)), f3.paddingRight = parseInt(s3.css(`padding`)), f3.paddingBottom = parseInt(s3[i3(299)](`padding`)), this.options.nodeDimensionsIncludeLabels && s3.isParent()) {
            var m3 = s3.boundingBox({ includeLabels: true, includeNodes: false }).w, h3 = s3[i3(424)]({ includeLabels: true, includeNodes: false }).h, g2 = s3.css(`text-halign`);
            f3.labelWidth = m3, f3.labelHeight = h3, f3.labelPos = g2;
          }
          if (this.idToLNode[s3[i3(464)](`id`)] = f3, isNaN(f3.rect.x) && (f3.rect.x = 0), isNaN(f3.rect.y) && (f3[i3(371)].y = 0), d3 != null && d3.length > 0) {
            var _2 = n3.getGraphManager().add(n3.newGraph(), f3);
            this.processChildrenList(_2, d3, n3);
          }
        }
      }, p2.prototype.stop = function() {
        return this.stopped = true, this;
      };
      var h2 = function(e5) {
        e5(`layout`, `cose-bilkent`, p2);
      };
      typeof cytoscape < `u` && h2(cytoscape), e4[r2(288)] = h2;
    }]);
  });
})(), 1);
i(), r(), l[u(281)](p.default);
function m(e2, t2) {
  e2.forEach((e3) => {
    var n2 = g;
    let r2 = { id: e3.id, labelText: e3.label, height: e3.height, width: e3[n2(361)], padding: e3.padding ?? 0 };
    Object.keys(e3).forEach((t3) => {
      [`id`, `label`, `height`, `width`, `padding`, `x`, `y`].includes(t3) || (r2[t3] = e3[t3]);
    }), t2.add({ group: `nodes`, data: r2, position: { x: e3.x ?? 0, y: e3.y ?? 0 } });
  });
}
c(m, `addNodes`);
function h(e2, t2) {
  e2.forEach((e3) => {
    let n2 = { id: e3.id, source: e3.start, target: e3.end };
    Object.keys(e3).forEach((t3) => {
      var r2 = g;
      [`id`, r2(537), r2(323)].includes(t3) || (n2[t3] = e3[t3]);
    }), t2.add({ group: `edges`, data: n2 });
  });
}
function g(e2, t2) {
  return e2 -= 222, S()[e2];
}
c(h, u(327));
function _(e2) {
  return new Promise((t2) => {
    var n2 = g;
    let r2 = o(`body`).append(`div`).attr(`id`, `cy`).attr(`style`, `display:none`), i2 = l({ container: document.getElementById(`cy`), style: [{ selector: `edge`, style: { "curve-style": `bezier` } }] });
    r2.remove(), m(e2.nodes, i2), h(e2[n2(358)], i2), i2.nodes().forEach(function(e3) {
      e3.layoutDimensions = () => {
        let t3 = e3.data();
        return { w: t3.width, h: t3.height };
      };
    }), i2.layout({ name: `cose-bilkent`, quality: `proof`, styleEnabled: false, animate: false })[n2(540)](), i2.ready((e3) => {
      s.info(`Cytoscape ready`, e3), t2(i2);
    });
  });
}
c(_, u(349));
function v(e2) {
  return e2.nodes().map((e3) => {
    var t2 = g;
    let n2 = e3.data(), r2 = e3.position(), i2 = { id: n2.id, x: r2.x, y: r2.y };
    return Object.keys(n2)[t2(538)]((e4) => {
      e4 !== `id` && (i2[e4] = n2[e4]);
    }), i2;
  });
}
c(v, `extractPositionedNodes`);
function y(e2) {
  return e2.edges().map((e3) => {
    var t2 = g;
    let n2 = e3.data(), r2 = e3._private.rscratch, i2 = { id: n2.id, source: n2[t2(546)], target: n2.target, startX: r2.startX, startY: r2.startY, midX: r2[t2(350)], midY: r2.midY, endX: r2.endX, endY: r2.endY };
    return Object.keys(n2).forEach((e4) => {
      [`id`, `source`, t2(348)].includes(e4) || (i2[e4] = n2[e4]);
    }), i2;
  });
}
c(y, `extractPositionedEdges`);
function b(e2, t2) {
  return x.apply(this, arguments);
}
function x() {
  var e2 = u;
  return x = a(function* (e3, t2) {
    var n2 = g;
    s.debug(n2(303));
    try {
      C(e3);
      let t3 = yield _(e3), n3 = v(t3), r2 = y(t3);
      return s.debug(`Layout completed: ` + n3.length + ` nodes, ` + r2.length + ` edges`), { nodes: n3, edges: r2 };
    } catch (e4) {
      throw s.error(`Error in cose-bilkent layout algorithm:`, e4), e4;
    }
  }), x[e2(552)](this, arguments);
}
function S() {
  var e2 = `calcIdealEdgeLengths.getPositionsData.calcInclusionTreeDepths.LEdge.points.ready.maxNodeDisplacement.LGraphManager._get.setHeight.HALF_PI.class.displacementX.repulsionForceY.boundingBox.Integer._swap.MIN_VALUE.TILING_PADDING_VERTICAL.left.equals.isOverlapingSourceAndTarget.getLeft.sequence2.stopped.decideDirectionsForOverlappingNodes.totalIterations.12373560BxFwfA.getGraphs.eles.cose-base.layout.Not in owner's edge list!.getTop.inverseTransformY.lworldExtX.seq2.getLca.isProcessed.tiledZeroDegreePack.endY.getHeightHalf.initialEnergyOnIncremental.scatter.transform.transformY.rowHeight.calcLowestCommonAncestor.length.updateBounds.Owner graph manager is invalid!.getInclusionTreeDepth.findCenterOfTree.resetAllEdges.data.height.angleOfVector.jMax.setCenter.slice.animate.MAX_VALUE.filter.nextDouble.setRect.8835474qTrEKq.concat.lengthX.displacementY.vGraphObject.uniqueID.getRect.idealLength.numIter.repulsionForceX.afterGrowthIterations.FDLayoutConstants.getNodes.refresh.startX.push.toBeTiled.CoSEConstants.withChildren.insert.getY.initialAnimationPeriod.finishX.alignmentTraceback.getX.ldeviceOrgX.getCenterX.min.nestingFactor.edgeElasticity.setWorldOrgX.processChildrenList.getSourceInLca.getAllIndexes.rowWidth.addListener.adjustLocations.Quicksort.COOLING_ADAPTATION_FACTOR.computeGrids.grid.ceil.clearZeroDegreeMembers.animationPeriod.totalDisplacement.gravitationForceX.allNodes.bendpoints.finishY.DEFAULT_INCREMENTAL.setNext.idealEdgeLength.default.DEFAULT_COOLING_FACTOR_INCREMENTAL.memberGroups.move.getLongestRowIndex.graphManager.getMaxY.notAnimatedIterations.parent.MAX_NODE_DISPLACEMENT_INCREMENTAL.start.forEach.rootGraph.run.DEFAULT_COMPONENT_SEPERATION.DEFAULT_ANIMATION_PERIOD.undefined.checkLayoutSuccess.horizontalPadding.source.getHeight.getChild.ldeviceExtX.writable.gravitationForceY.apply.springForceX.5572648kFJpAb.lca.FDLayout.getOwner.newGraph.getAllNodesToApplyGravitation.getIntersection.children.layoutready.create.getEdgesBetween.lengthY.finalTemperature.Transform.INITIAL_WORLD_BOUNDARY.getBottom.getRight.inclusionTreeDepth.nodesWithGravity.enumerable.setDeviceExtY.NODE_DIMENSIONS_INCLUDE_LABELS.match_score.coolingAdjuster.next.map.indexOf.bottom.setWidth.gravityRangeCompound.Edge source and/or target is null!.getAllNodes.translate.sqrt.calcSeparationAmount.resetAllNodesToApplyGravitation.repulsionRange.labelHeight.calculateBounds.attr.paddingLeft.ADAPTATION_LOWER_NODE_LIMIT.coolingCycle.allEdges.getWidth.get.isInterGraph.isTreeGrowing.sign.floor.options.__esModule.DEFAULT_EDGE_LENGTH.insertAfter.40658XOKVKf.setGraphManager.setGridCoordinates.inverseTransformPoint.MAX_NODE_DISPLACEMENT.isGrowthFinished.paddingBottom.size.calcSpringForce.prototype.use.isOneAncestorOfOther.calcLowestCommonAncestors.tilingPostLayout.name.ANIMATE.calcRepulsionForce.exports.verticalPadding.MAX_ITERATIONS.runSpringEmbedder.coolingFactor.tilingPaddingHorizontal.startY.positionNodesRandomly.padding.MIN_REPULSION_DIST.top.css.animationOnLayout.child.object.Starting cose-bilkent layout algorithm.sourceInLca.getLocation.isRemoteUse.splice.Configuration is required in layout data.TWO_PI.updateGrid.edgeToDummyNodes.function.updateLeftTop.layoutBase.188822pEzJUa.getEdges.layoutQuality.pos.getCenterY.configurable.abs.subgraphs.end.add.getNoOfChildren.getBendpoints.addEdges.lastID.DEFAULT_SPRING_STRENGTH.CONVERGENCE_CHECK_PERIOD.Graph already in this graph mgr!.set.tiledMemberPack.useSmartIdealEdgeLengthCalculation.max.tilingPaddingVertical.sequence1.SIMPLE_NODE_SIZE.setWorldOrgY.setLocation.symbol.rows.tick.7alzjeu.repulsionConstant.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR.hasOwnProperty.target.createCytoscapeInstance.midX.key.animationDuringLayout.springForceY.ldeviceExtY.from.QUALITY.level.edges.DEFAULT_ANIMATION_ON_LAYOUT.getRoot.width.estimatedSize.getTarget.noOfChildren.value.nodes.positionNodesRadially.maxIterations.TILING_PADDING_HORIZONTAL.owner.rect.assert failed.iMax.getAllEdges.update.getParent.3189895UJltZO.number.head.calculateRepulsionForceOfANode.runLayout.LGraph.getString.validateLayoutData.newNode.setRootGraph.moveNodes.3796206zHBodZ.type.isConnected.remove.PointD.labelPos.getGraphManager.shiftToLastRow.nodeDimensionsIncludeLabels.config.position.getDeviceOrgX.call.newEdge.isLayoutFinished.layoutDimensions.LayoutConstants.ldeviceOrgY.compoundOrder.getWorldOrgX.DEFAULT_USE_MULTI_LEVEL_SCALING.contains`.split(`.`);
  return S = function() {
    return e2;
  }, S();
}
c(b, `executeCoseBilkentLayout`);
function C(e2) {
  var t2 = u;
  if (!e2) throw Error(`Layout data is required`);
  if (!e2[t2(397)]) throw Error(t2(308));
  if (!e2.rootNode) throw Error(`Root node is required`);
  if (!e2[t2(366)] || !Array.isArray(e2.nodes)) throw Error(`No nodes found in layout data`);
  if (!Array.isArray(e2[t2(358)])) throw Error(`Edges array is required in layout data`);
  return true;
}
c(C, u(384));
var w = c((function() {
  var e2 = a(function* (e3, t2, { insertCluster: r2, insertEdge: i2, insertEdgeLabel: o2, insertMarkers: s2, insertNode: c2, log: l2, positionEdgeLabel: u2 }, { algorithm: d2 }) {
    var f2 = g;
    let p2 = {}, m2 = {}, h2 = t2.select(`g`);
    s2(h2, e3.markers, e3[f2(389)], e3.diagramId);
    let _2 = h2.insert(`g`).attr(`class`, f2(322)), v2 = h2.insert(`g`)[f2(256)](`class`, `edgePaths`), y2 = h2[f2(494)](`g`).attr(f2(421), `edgeLabels`), x2 = h2.insert(`g`).attr(f2(421), f2(366));
    l2.debug(`Inserting nodes into DOM for dimension calculation`), yield Promise.all(e3.nodes[f2(242)]((function() {
      var t3 = a(function* (t4) {
        if (t4.isGroup) {
          let e4 = n({}, t4);
          m2[t4.id] = e4, p2[t4.id] = e4, yield r2(_2, t4);
        } else {
          let r3 = n({}, t4);
          p2[t4.id] = r3;
          let i3 = yield c2(x2, t4, { config: e3.config, dir: e3.direction || `TB` }), a2 = i3.node().getBBox();
          r3.width = a2.width, r3.height = a2.height, r3.domId = i3, l2.debug(`Node ` + t4.id + ` dimensions: ` + a2.width + `x` + a2.height);
        }
      });
      return function(e4) {
        return t3.apply(this, arguments);
      };
    })())), l2.debug(`Running cose-bilkent layout algorithm`);
    let S2 = yield b(n(n({}, e3), {}, { nodes: e3.nodes.map((e4) => {
      let t3 = p2[e4.id];
      return n(n({}, e4), {}, { width: t3.width, height: t3.height });
    }) }), e3.config);
    l2.debug(`Positioning nodes based on layout results`), S2.nodes.forEach((e4) => {
      let t3 = p2[e4.id];
      t3 != null && t3.domId && (t3.domId.attr(`transform`, `translate(` + e4.x + `, ` + e4.y + `)`), t3.x = e4.x, t3.y = e4.y, l2.debug(`Positioned node ` + t3.id + ` at center (` + e4.x + `, ` + e4.y + `)`));
    }), S2.edges.forEach((t3) => {
      var n2 = f2;
      let r3 = e3.edges.find((e4) => e4.id === t3.id);
      r3 && (r3[n2(414)] = [{ x: t3.startX, y: t3.startY }, { x: t3.midX, y: t3.midY }, { x: t3.endX, y: t3[n2(450)] }]);
    }), l2.debug(`Inserting and positioning edges`), yield Promise.all(e3.edges.map((function() {
      var t3 = a(function* (t4) {
        var r3 = g;
        yield o2(y2, t4);
        let a2 = p2[t4[r3(537)] ?? ``], s3 = p2[t4.end ?? ``];
        if (a2 && s3) {
          let o3 = S2.edges.find((e4) => e4.id === t4.id);
          if (o3) {
            l2.debug(`APA01 positionedEdge`, o3);
            let c3 = n({}, t4);
            u2(c3, i2(v2, c3, m2, e3[r3(389)], a2, s3, e3.diagramId));
          } else {
            let r4 = n(n({}, t4), {}, { points: [{ x: a2.x || 0, y: a2.y || 0 }, { x: s3.x || 0, y: s3.y || 0 }] });
            u2(r4, i2(v2, r4, m2, e3.type, a2, s3, e3.diagramId));
          }
        }
      });
      return function(e4) {
        return t3.apply(this, arguments);
      };
    })())), l2.debug(`Cose-bilkent rendering completed`);
  });
  return function(t2, n2, r2, i2) {
    return e2.apply(this, arguments);
  };
})(), `render`);
export {
  w as render
};
