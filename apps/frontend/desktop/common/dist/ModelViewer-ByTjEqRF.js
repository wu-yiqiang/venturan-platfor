const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["GLTFLoader-VnAahfhn.js","index-D-g3WoLo.js","_plugin-vue_export-helper-BDNMzG2s.js","chunk-DeXYQlWK.js","three.module-fqN0WVmI.js","index-IvLr1-5o.css","OBJLoader-ZTlt_okF.js","STLLoader-DrzZQOlD.js","PLYLoader-23QElkT0.js","FBXLoader-DYv1oISC.js","fflate.module-DqHR0NvN.js","ColladaLoader-DnNrKbCQ.js","TDSLoader-BYsvu43u.js","3MFLoader-DRXvFMep.js","AMFLoader-Xwd59bDF.js","USDLoader-BcIYfX86.js","KMZLoader-gS1aDbbv.js","PCDLoader-CYvtGdC0.js","VRMLLoader-D3IBLzxk.js","XYZLoader-Bec_D5O_.js","VTKLoader-DxR2QLnY.js"])))=>i.map(i=>d[i]);
import { t as e } from "./preload-helper-zJ_50EbN.js";
import { $ as t, F as n, G as r, H as i, Q as a, b as o, c as s, d as ee, et as c, l as te, m as l, ot as u } from "./_virtual_mf___mfe_internal__components_center__loadShare__vue__loadShare__.mjs-DlvFZDQ7.js";
import { m as d, p as f, t as p, __tla as __tla_0 } from "./index-D-g3WoLo.js";
import { At as ne, C as m, Dt as h, Et as g, G as re, K as ie, L as _, Tt as v, V as y, Vt as ae, _t as b, at as x, c as oe, ct as se, it as ce, l as le, lt as S, n as C, nt as ue, rt as de, tt as fe, vt as pe, w, x as T, xt as E } from "./three.module-fqN0WVmI.js";
let Ce;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var D = K;
  (function(e2, t2) {
    let n2 = K, r2 = e2();
    for (; ; ) try {
      if (-parseInt(n2(304)) / 1 + parseInt(n2(301)) / 2 + -parseInt(n2(263)) / 3 * (parseInt(n2(247)) / 4) + -parseInt(n2(280)) / 5 * (parseInt(n2(270)) / 6) + parseInt(n2(243)) / 7 * (-parseInt(n2(313)) / 8) + -parseInt(n2(308)) / 9 + parseInt(n2(298)) / 10 === t2) break;
      r2.push(r2.shift());
    } catch {
      r2.push(r2.shift());
    }
  })(J, 655532), d();
  var O = {
    type: `change`
  }, k = {
    type: D(208)
  }, A = {
    type: `end`
  }, j = new h(), M = new T(), N = Math.cos(70 * m.DEG2RAD), P = new y(), F = 2 * Math.PI, I = {
    NONE: -1,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2,
    TOUCH_ROTATE: 3,
    TOUCH_PAN: 4,
    TOUCH_DOLLY_PAN: 5,
    TOUCH_DOLLY_ROTATE: 6
  }, L = 1e-6, me = class extends g {
    constructor(e2, t2 = null) {
      let n2 = D;
      super(e2, t2), this[n2(296)] = I.NONE, this.target = new y(), this.cursor = new y(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this[n2(303)] = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = false, this.dampingFactor = 0.05, this[n2(295)] = true, this.zoomSpeed = 1, this.enableRotate = true, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = true, this[n2(316)] = 1, this[n2(322)] = true, this.keyPanSpeed = 7, this.zoomToCursor = false, this[n2(317)] = false, this.autoRotateSpeed = 2, this.keys = {
        LEFT: `ArrowLeft`,
        UP: `ArrowUp`,
        RIGHT: n2(249),
        BOTTOM: `ArrowDown`
      }, this.mouseButtons = {
        LEFT: E[n2(257)],
        MIDDLE: E.DOLLY,
        RIGHT: E.PAN
      }, this.touches = {
        ONE: b[n2(257)],
        TWO: b.DOLLY_PAN
      }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._cursorStyle = `auto`, this._domElementKeyEvents = null, this._lastPosition = new y(), this[n2(291)] = new v(), this._lastTargetPosition = new y(), this._quat = new v().setFromUnitVectors(e2.up, new y(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new x(), this._sphericalDelta = new x(), this._scale = 1, this[n2(327)] = new y(), this._rotateStart = new _(), this[n2(290)] = new _(), this._rotateDelta = new _(), this[n2(250)] = new _(), this[n2(241)] = new _(), this[n2(189)] = new _(), this._dollyStart = new _(), this._dollyEnd = new _(), this._dollyDelta = new _(), this._dollyDirection = new y(), this[n2(203)] = new _(), this._performCursorZoom = false, this._pointers = [], this._pointerPositions = {}, this._controlActive = false, this._onPointerMove = z.bind(this), this._onPointerDown = R.bind(this), this._onPointerUp = B[n2(320)](this), this._onContextMenu = Y[n2(320)](this), this._onMouseWheel = U.bind(this), this._onKeyDown = W.bind(this), this._onTouchStart = G.bind(this), this._onTouchMove = q.bind(this), this[n2(264)] = V[n2(320)](this), this._onMouseMove = H.bind(this), this._interceptControlDown = X.bind(this), this[n2(225)] = he.bind(this), this[n2(302)] !== null && this[n2(216)](this[n2(302)]), this.update();
    }
    set cursorStyle(e2) {
      this._cursorStyle = e2, e2 === `grab` ? this.domElement.style.cursor = `grab` : this.domElement.style.cursor = `auto`;
    }
    get cursorStyle() {
      return this._cursorStyle;
    }
    connect(e2) {
      let t2 = D;
      super.connect(e2), this.domElement.addEventListener(`pointerdown`, this._onPointerDown), this[t2(302)][t2(274)](`pointercancel`, this._onPointerUp), this.domElement.addEventListener(`contextmenu`, this._onContextMenu), this.domElement.addEventListener(`wheel`, this._onMouseWheel, {
        passive: false
      }), this.domElement.getRootNode().addEventListener(`keydown`, this._interceptControlDown, {
        passive: true,
        capture: true
      }), this.domElement.style.touchAction = t2(232);
    }
    disconnect() {
      let e2 = D;
      this[e2(302)].removeEventListener(e2(345), this._onPointerDown), this.domElement[e2(214)].removeEventListener(`pointermove`, this._onPointerMove), this.domElement.ownerDocument[e2(335)](`pointerup`, this._onPointerUp), this.domElement.removeEventListener(`pointercancel`, this[e2(206)]), this[e2(302)].removeEventListener(e2(278), this._onMouseWheel), this[e2(302)].removeEventListener(`contextmenu`, this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener(`keydown`, this._interceptControlDown, {
        capture: true
      }), this.domElement[e2(221)][e2(236)] = ``;
    }
    [D(199)]() {
      this.disconnect();
    }
    getPolarAngle() {
      return this._spherical.phi;
    }
    [D(231)]() {
      let e2 = D;
      return this[e2(193)].theta;
    }
    getDistance() {
      return this.object.position.distanceTo(this.target);
    }
    listenToKeyEvents(e2) {
      e2[D(274)](`keydown`, this._onKeyDown), this._domElementKeyEvents = e2;
    }
    [D(337)]() {
      let e2 = D;
      this._domElementKeyEvents !== null && (this[e2(190)].removeEventListener(e2(310), this[e2(341)]), this._domElementKeyEvents = null);
    }
    [D(328)]() {
      let e2 = D;
      this.target0.copy(this.target), this.position0[e2(343)](this[e2(281)].position), this.zoom0 = this.object.zoom;
    }
    reset() {
      let e2 = D;
      this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(O), this[e2(292)](), this.state = I.NONE;
    }
    pan(e2, t2) {
      this._pan(e2, t2), this.update();
    }
    dollyIn(e2) {
      let t2 = D;
      this[t2(192)](e2), this.update();
    }
    [D(220)](e2) {
      this._dollyOut(e2), this.update();
    }
    rotateLeft(e2) {
      this._rotateLeft(e2), this.update();
    }
    rotateUp(e2) {
      this._rotateUp(e2), this.update();
    }
    update(e2 = null) {
      let t2 = D, n2 = this[t2(281)].position;
      P.copy(n2).sub(this.target), P.applyQuaternion(this._quat), this._spherical.setFromVector3(P), this[t2(317)] && this.state === I.NONE && this._rotateLeft(this._getAutoRotationAngle(e2)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta[t2(288)] * this.dampingFactor, this._spherical[t2(334)] += this._sphericalDelta[t2(334)] * this[t2(248)]) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
      let r2 = this.minAzimuthAngle, i2 = this.maxAzimuthAngle;
      isFinite(r2) && isFinite(i2) && (r2 < -Math.PI ? r2 += F : r2 > Math.PI && (r2 -= F), i2 < -Math.PI ? i2 += F : i2 > Math.PI && (i2 -= F), r2 <= i2 ? this._spherical.theta = Math.max(r2, Math[t2(333)](i2, this._spherical[t2(288)])) : this[t2(193)].theta = this._spherical.theta > (r2 + i2) / 2 ? Math.max(r2, this._spherical.theta) : Math[t2(333)](i2, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === true ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this[t2(327)]), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target[t2(184)](this.cursor);
      let a2 = false;
      if (this[t2(244)] && this[t2(342)] || this.object.isOrthographicCamera) this._spherical.radius = this[t2(198)](this._spherical.radius);
      else {
        let e3 = this._spherical.radius;
        this._spherical.radius = this[t2(198)](this._spherical[t2(252)] * this._scale), a2 = e3 != this._spherical.radius;
      }
      if (P.setFromSpherical(this[t2(193)]), P.applyQuaternion(this[t2(346)]), n2[t2(343)](this.target).add(P), this.object.lookAt(this.target), this.enableDamping === true ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta[t2(334)] *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this[t2(318)].set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
        let e3 = null;
        if (this[t2(281)].isPerspectiveCamera) {
          let n3 = P.length();
          e3 = this._clampDistance(n3 * this._scale);
          let r3 = n3 - e3;
          this.object.position.addScaledVector(this[t2(330)], r3), this.object.updateMatrixWorld(), a2 = !!r3;
        } else if (this[t2(281)].isOrthographicCamera) {
          let n3 = new y(this._mouse.x, this._mouse.y, 0);
          n3.unproject(this.object);
          let r3 = this.object.zoom;
          this.object[t2(340)] = Math.max(this[t2(200)], Math.min(this.maxZoom, this.object[t2(340)] / this._scale)), this.object.updateProjectionMatrix(), a2 = r3 !== this.object[t2(340)];
          let i3 = new y(this[t2(203)].x, this._mouse.y, 0);
          i3.unproject(this.object), this[t2(281)].position.sub(i3).add(n3), this.object.updateMatrixWorld(), e3 = P[t2(256)]();
        } else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`), this.zoomToCursor = false;
        e3 !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(e3).add(this[t2(281)].position) : (j.origin[t2(343)](this.object.position), j.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(j.direction)) < N ? this.object.lookAt(this.target) : (M.setFromNormalAndCoplanarPoint(this.object.up, this.target), j.intersectPlane(M, this.target))));
      } else if (this.object.isOrthographicCamera) {
        let e3 = this.object.zoom;
        this[t2(281)].zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this[t2(336)])), e3 !== this[t2(281)].zoom && (this.object.updateProjectionMatrix(), a2 = true);
      }
      return this._scale = 1, this._performCursorZoom = false, a2 || this._lastPosition.distanceToSquared(this[t2(281)].position) > L || 8 * (1 - this._lastQuaternion[t2(227)](this.object[t2(213)])) > L || this._lastTargetPosition.distanceToSquared(this.target) > L ? (this[t2(267)](O), this._lastPosition.copy(this.object.position), this[t2(291)].copy(this.object[t2(213)]), this[t2(230)].copy(this.target), true) : false;
    }
    _getAutoRotationAngle(e2) {
      return e2 === null ? F / 60 / 60 * this.autoRotateSpeed : F / 60 * this.autoRotateSpeed * e2;
    }
    _getZoomScale(e2) {
      let t2 = D, n2 = Math.abs(e2 * 0.01);
      return 0.95 ** (this[t2(238)] * n2);
    }
    [D(210)](e2) {
      let t2 = D;
      this._sphericalDelta[t2(288)] -= e2;
    }
    [D(258)](e2) {
      this._sphericalDelta.phi -= e2;
    }
    _panLeft(e2, t2) {
      P.setFromMatrixColumn(t2, 0), P.multiplyScalar(-e2), this._panOffset.add(P);
    }
    [D(277)](e2, t2) {
      let n2 = D;
      this.screenSpacePanning === true ? P[n2(209)](t2, 1) : (P.setFromMatrixColumn(t2, 0), P.crossVectors(this.object.up, P)), P.multiplyScalar(e2), this._panOffset.add(P);
    }
    _pan(e2, t2) {
      let n2 = D, r2 = this.domElement;
      if (this.object.isPerspectiveCamera) {
        let i2 = this.object.position;
        P.copy(i2).sub(this.target);
        let a2 = P[n2(256)]();
        a2 *= Math.tan(this.object[n2(309)] / 2 * Math.PI / 180), this._panLeft(2 * e2 * a2 / r2.clientHeight, this.object[n2(276)]), this._panUp(2 * t2 * a2 / r2.clientHeight, this.object.matrix);
      } else this.object.isOrthographicCamera ? (this._panLeft(e2 * (this.object.right - this.object.left) / this.object[n2(340)] / r2[n2(251)], this.object.matrix), this._panUp(t2 * (this[n2(281)].top - this.object.bottom) / this.object[n2(340)] / r2.clientHeight, this.object[n2(276)])) : (console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`), this.enablePan = false);
    }
    _dollyOut(e2) {
      this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= e2 : (console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`), this.enableZoom = false);
    }
    [D(192)](e2) {
      let t2 = D;
      this.object[t2(261)] || this.object.isOrthographicCamera ? this._scale *= e2 : (console.warn(t2(279)), this.enableZoom = false);
    }
    _updateZoomParameters(e2, t2) {
      let n2 = D;
      if (!this.zoomToCursor) return;
      this._performCursorZoom = true;
      let r2 = this.domElement.getBoundingClientRect(), i2 = e2 - r2.left, a2 = t2 - r2.top, o2 = r2.width, s2 = r2.height;
      this._mouse.x = i2 / o2 * 2 - 1, this[n2(203)].y = -(a2 / s2) * 2 + 1, this._dollyDirection.set(this[n2(203)].x, this._mouse.y, 1).unproject(this.object)[n2(312)](this.object[n2(338)])[n2(237)]();
    }
    [D(198)](e2) {
      return Math.max(this.minDistance, Math.min(this.maxDistance, e2));
    }
    _handleMouseDownRotate(e2) {
      this._rotateStart.set(e2.clientX, e2.clientY);
    }
    [D(234)](e2) {
      this._updateZoomParameters(e2.clientX, e2.clientX), this._dollyStart.set(e2.clientX, e2.clientY);
    }
    _handleMouseDownPan(e2) {
      let t2 = D;
      this[t2(250)].set(e2.clientX, e2.clientY);
    }
    _handleMouseMoveRotate(e2) {
      let t2 = D;
      this._rotateEnd.set(e2.clientX, e2.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
      let n2 = this.domElement;
      this._rotateLeft(F * this._rotateDelta.x / n2.clientHeight), this._rotateUp(F * this._rotateDelta.y / n2[t2(306)]), this._rotateStart[t2(343)](this._rotateEnd), this.update();
    }
    _handleMouseMoveDolly(e2) {
      let t2 = D;
      this._dollyEnd.set(e2.clientX, e2[t2(282)]), this._dollyDelta[t2(233)](this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this[t2(197)].y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart[t2(343)](this._dollyEnd), this.update();
    }
    [D(255)](e2) {
      let t2 = D;
      this[t2(241)][t2(191)](e2[t2(201)], e2.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
    }
    _handleMouseWheel(e2) {
      let t2 = D;
      this._updateZoomParameters(e2.clientX, e2[t2(282)]), e2.deltaY < 0 ? this[t2(192)](this[t2(219)](e2.deltaY)) : e2.deltaY > 0 && this[t2(204)](this._getZoomScale(e2.deltaY)), this[t2(292)]();
    }
    _handleKeyDown(e2) {
      let t2 = D, n2 = false;
      switch (e2[t2(211)]) {
        case this.keys.UP:
          e2.ctrlKey || e2.metaKey || e2.shiftKey ? this.enableRotate && this._rotateUp(F * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), n2 = true;
          break;
        case this.keys.BOTTOM:
          e2[t2(314)] || e2.metaKey || e2.shiftKey ? this.enableRotate && this._rotateUp(-F * this[t2(311)] / this.domElement.clientHeight) : this[t2(300)] && this._pan(0, -this[t2(294)]), n2 = true;
          break;
        case this.keys.LEFT:
          e2.ctrlKey || e2.metaKey || e2.shiftKey ? this[t2(266)] && this._rotateLeft(F * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), n2 = true;
          break;
        case this.keys.RIGHT:
          e2.ctrlKey || e2.metaKey || e2[t2(228)] ? this.enableRotate && this[t2(210)](-F * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), n2 = true;
          break;
      }
      n2 && (e2.preventDefault(), this[t2(292)]());
    }
    _handleTouchStartRotate(e2) {
      let t2 = D;
      if (this._pointers[t2(256)] === 1) this._rotateStart.set(e2.pageX, e2[t2(212)]);
      else {
        let n2 = this._getSecondPointerPosition(e2), r2 = 0.5 * (e2[t2(194)] + n2.x), i2 = 0.5 * (e2.pageY + n2.y);
        this._rotateStart.set(r2, i2);
      }
    }
    _handleTouchStartPan(e2) {
      let t2 = D;
      if (this._pointers.length === 1) this._panStart.set(e2.pageX, e2.pageY);
      else {
        let n2 = this[t2(260)](e2), r2 = 0.5 * (e2.pageX + n2.x), i2 = 0.5 * (e2.pageY + n2.y);
        this._panStart[t2(191)](r2, i2);
      }
    }
    _handleTouchStartDolly(e2) {
      let t2 = D, n2 = this[t2(260)](e2), r2 = e2.pageX - n2.x, i2 = e2.pageY - n2.y, a2 = Math.sqrt(r2 * r2 + i2 * i2);
      this._dollyStart.set(0, a2);
    }
    _handleTouchStartDollyPan(e2) {
      this.enableZoom && this._handleTouchStartDolly(e2), this.enablePan && this._handleTouchStartPan(e2);
    }
    [D(235)](e2) {
      let t2 = D;
      this.enableZoom && this._handleTouchStartDolly(e2), this[t2(266)] && this._handleTouchStartRotate(e2);
    }
    _handleTouchMoveRotate(e2) {
      let t2 = D;
      if (this._pointers.length == 1) this._rotateEnd[t2(191)](e2.pageX, e2.pageY);
      else {
        let t3 = this._getSecondPointerPosition(e2), n3 = 0.5 * (e2.pageX + t3.x), r2 = 0.5 * (e2.pageY + t3.y);
        this._rotateEnd.set(n3, r2);
      }
      this._rotateDelta[t2(233)](this[t2(290)], this._rotateStart).multiplyScalar(this.rotateSpeed);
      let n2 = this.domElement;
      this[t2(210)](F * this._rotateDelta.x / n2.clientHeight), this._rotateUp(F * this[t2(293)].y / n2.clientHeight), this[t2(315)].copy(this._rotateEnd);
    }
    [D(185)](e2) {
      let t2 = D;
      if (this._pointers[t2(256)] === 1) this[t2(241)].set(e2.pageX, e2.pageY);
      else {
        let n2 = this[t2(260)](e2), r2 = 0.5 * (e2.pageX + n2.x), i2 = 0.5 * (e2.pageY + n2.y);
        this._panEnd[t2(191)](r2, i2);
      }
      this._panDelta.subVectors(this[t2(241)], this[t2(250)]).multiplyScalar(this.panSpeed), this._pan(this[t2(189)].x, this._panDelta.y), this[t2(250)].copy(this._panEnd);
    }
    [D(245)](e2) {
      let t2 = D, n2 = this._getSecondPointerPosition(e2), r2 = e2.pageX - n2.x, i2 = e2.pageY - n2.y, a2 = Math.sqrt(r2 * r2 + i2 * i2);
      this._dollyEnd.set(0, a2), this._dollyDelta.set(0, (this._dollyEnd.y / this._dollyStart.y) ** +this[t2(238)]), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
      let o2 = (e2[t2(194)] + n2.x) * 0.5, s2 = (e2.pageY + n2.y) * 0.5;
      this._updateZoomParameters(o2, s2);
    }
    [D(285)](e2) {
      let t2 = D;
      this[t2(295)] && this[t2(245)](e2), this.enablePan && this._handleTouchMovePan(e2);
    }
    _handleTouchMoveDollyRotate(e2) {
      this.enableZoom && this._handleTouchMoveDolly(e2), this.enableRotate && this._handleTouchMoveRotate(e2);
    }
    _addPointer(e2) {
      this._pointers.push(e2.pointerId);
    }
    _removePointer(e2) {
      delete this._pointerPositions[e2.pointerId];
      for (let t2 = 0; t2 < this._pointers.length; t2++) if (this._pointers[t2] == e2.pointerId) {
        this._pointers.splice(t2, 1);
        return;
      }
    }
    _isTrackingPointer(e2) {
      let t2 = D;
      for (let n2 = 0; n2 < this[t2(259)].length; n2++) if (this._pointers[n2] == e2.pointerId) return true;
      return false;
    }
    _trackPointer(e2) {
      let t2 = D, n2 = this._pointerPositions[e2.pointerId];
      n2 === void 0 && (n2 = new _(), this._pointerPositions[e2.pointerId] = n2), n2.set(e2[t2(194)], e2[t2(212)]);
    }
    _getSecondPointerPosition(e2) {
      let t2 = e2.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
      return this._pointerPositions[t2];
    }
    _customWheelEvent(e2) {
      let t2 = D, n2 = e2.deltaMode, r2 = {
        clientX: e2.clientX,
        clientY: e2.clientY,
        deltaY: e2.deltaY
      };
      switch (n2) {
        case 1:
          r2[t2(262)] *= 16;
          break;
        case 2:
          r2.deltaY *= 100;
          break;
      }
      return e2.ctrlKey && !this._controlActive && (r2[t2(262)] *= 10), r2;
    }
  };
  function R(e2) {
    let t2 = D;
    this.enabled !== false && (this._pointers.length === 0 && (this.domElement.setPointerCapture(e2[t2(297)]), this.domElement.ownerDocument.addEventListener(`pointermove`, this._onPointerMove), this[t2(302)].ownerDocument[t2(274)](`pointerup`, this._onPointerUp)), !this._isTrackingPointer(e2) && (this._addPointer(e2), e2.pointerType === `touch` ? this._onTouchStart(e2) : this._onMouseDown(e2), this._cursorStyle === `grab` && (this.domElement.style.cursor = `grabbing`)));
  }
  function z(e2) {
    let t2 = D;
    this.enabled !== false && (e2[t2(272)] === `touch` ? this._onTouchMove(e2) : this[t2(319)](e2));
  }
  function B(e2) {
    let t2 = D;
    switch (this._removePointer(e2), this[t2(259)].length) {
      case 0:
        this.domElement.releasePointerCapture(e2.pointerId), this[t2(302)].ownerDocument.removeEventListener(`pointermove`, this._onPointerMove), this[t2(302)].ownerDocument.removeEventListener(`pointerup`, this._onPointerUp), this.dispatchEvent(A), this.state = I.NONE, this._cursorStyle === t2(246) && (this[t2(302)][t2(221)].cursor = `grab`);
        break;
      case 1:
        let n2 = this._pointers[0], r2 = this[t2(187)][n2];
        this[t2(287)]({
          pointerId: n2,
          pageX: r2.x,
          pageY: r2.y
        });
        break;
    }
  }
  function V(e2) {
    let t2 = D, n2;
    switch (e2.button) {
      case 0:
        n2 = this.mouseButtons[t2(299)];
        break;
      case 1:
        n2 = this.mouseButtons.MIDDLE;
        break;
      case 2:
        n2 = this[t2(254)].RIGHT;
        break;
      default:
        n2 = -1;
    }
    switch (n2) {
      case E.DOLLY:
        if (this.enableZoom === false) return;
        this._handleMouseDownDolly(e2), this.state = I.DOLLY;
        break;
      case E.ROTATE:
        if (e2.ctrlKey || e2[t2(307)] || e2[t2(228)]) {
          if (this.enablePan === false) return;
          this._handleMouseDownPan(e2), this[t2(296)] = I.PAN;
        } else {
          if (this.enableRotate === false) return;
          this._handleMouseDownRotate(e2), this[t2(296)] = I[t2(257)];
        }
        break;
      case E.PAN:
        if (e2.ctrlKey || e2.metaKey || e2.shiftKey) {
          if (this.enableRotate === false) return;
          this._handleMouseDownRotate(e2), this.state = I.ROTATE;
        } else {
          if (this.enablePan === false) return;
          this._handleMouseDownPan(e2), this[t2(296)] = I.PAN;
        }
        break;
      default:
        this.state = I.NONE;
    }
    this.state !== I.NONE && this.dispatchEvent(k);
  }
  function H(e2) {
    let t2 = D;
    switch (this[t2(296)]) {
      case I.ROTATE:
        if (this.enableRotate === false) return;
        this._handleMouseMoveRotate(e2);
        break;
      case I.DOLLY:
        if (this.enableZoom === false) return;
        this[t2(224)](e2);
        break;
      case I.PAN:
        if (this.enablePan === false) return;
        this._handleMouseMovePan(e2);
        break;
    }
  }
  function U(e2) {
    let t2 = D;
    this.enabled === false || this.enableZoom === false || this.state !== I.NONE || (e2.preventDefault(), this[t2(267)](k), this[t2(323)](this._customWheelEvent(e2)), this.dispatchEvent(A));
  }
  function W(e2) {
    this.enabled !== false && this._handleKeyDown(e2);
  }
  function G(e2) {
    let t2 = D;
    switch (this._trackPointer(e2), this._pointers.length) {
      case 1:
        switch (this.touches.ONE) {
          case b.ROTATE:
            if (this[t2(266)] === false) return;
            this._handleTouchStartRotate(e2), this.state = I.TOUCH_ROTATE;
            break;
          case b.PAN:
            if (this.enablePan === false) return;
            this._handleTouchStartPan(e2), this.state = I.TOUCH_PAN;
            break;
          default:
            this.state = I.NONE;
        }
        break;
      case 2:
        switch (this.touches.TWO) {
          case b.DOLLY_PAN:
            if (this[t2(295)] === false && this.enablePan === false) return;
            this._handleTouchStartDollyPan(e2), this.state = I.TOUCH_DOLLY_PAN;
            break;
          case b.DOLLY_ROTATE:
            if (this.enableZoom === false && this[t2(266)] === false) return;
            this[t2(235)](e2), this.state = I.TOUCH_DOLLY_ROTATE;
            break;
          default:
            this.state = I.NONE;
        }
        break;
      default:
        this.state = I[t2(195)];
    }
    this.state !== I.NONE && this.dispatchEvent(k);
  }
  function K(e2, t2) {
    return e2 -= 184, J()[e2];
  }
  function q(e2) {
    let t2 = D;
    switch (this._trackPointer(e2), this.state) {
      case I.TOUCH_ROTATE:
        if (this.enableRotate === false) return;
        this._handleTouchMoveRotate(e2), this[t2(292)]();
        break;
      case I[t2(253)]:
        if (this.enablePan === false) return;
        this[t2(185)](e2), this.update();
        break;
      case I.TOUCH_DOLLY_PAN:
        if (this[t2(295)] === false && this[t2(300)] === false) return;
        this[t2(285)](e2), this.update();
        break;
      case I.TOUCH_DOLLY_ROTATE:
        if (this.enableZoom === false && this.enableRotate === false) return;
        this._handleTouchMoveDollyRotate(e2), this[t2(292)]();
        break;
      default:
        this.state = I[t2(195)];
    }
  }
  function J() {
    let e2 = `_handleTouchMovePan,toUpperCase,_pointerPositions,lastIndexOf,_panDelta,_domElementKeyEvents,set,_dollyIn,_spherical,pageX,NONE,getCenter,_dollyDelta,_clampDistance,dispose,minZoom,clientX,isPoints,_mouse,_dollyOut,value,_onPointerUp,animations,start,setFromMatrixColumn,_rotateLeft,code,pageY,quaternion,ownerDocument,span,connect,clipAction,gltf,_getZoomScale,dollyOut,style,data,model-state,_handleMouseMoveDolly,_interceptControlUp,visible,dot,shiftKey,data-v-9d2e23df,_lastTargetPosition,getAzimuthalAngle,none,subVectors,_handleMouseDownDolly,_handleTouchStartDollyRotate,touchAction,normalize,zoomSpeed,3mf,computeBoundingSphere,_panEnd,height,98UxMgoK,zoomToCursor,_handleTouchMoveDolly,grab,4oFtQLq,dampingFactor,ArrowRight,_panStart,clientWidth,radius,TOUCH_PAN,mouseButtons,_handleMouseMovePan,length,ROTATE,_rotateUp,_pointers,_getSecondPointerPosition,isPerspectiveCamera,deltaY,2079879rrKAjY,_onMouseDown,max,enableRotate,dispatchEvent,setFromObject,button,71364YlCtGM,\u6B63\u5728\u52A0\u8F7D\u6A21\u578B,pointerType,getSize,addEventListener,key,matrix,_panUp,wheel,WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.,355ZXLwnn,object,clientY,error,apply,_handleTouchMoveDollyPan,updateProjectionMatrix,_onTouchStart,theta,obj,_rotateEnd,_lastQuaternion,update,_rotateDelta,keyPanSpeed,enableZoom,state,pointerId,49151620iBelBY,LEFT,enablePan,1062998wgrcoI,domElement,maxTargetRadius,1146808zcGkaW,div,clientHeight,metaKey,10393380VTXfrp,fov,keydown,keyRotateSpeed,sub,543848GvWiqP,ctrlKey,_rotateStart,panSpeed,autoRotate,_sphericalDelta,_onMouseMove,bind,remove,screenSpacePanning,_handleMouseWheel,fbx,material,forEach,_panOffset,saveState,model-viewer,_dollyDirection,parse,loading,min,phi,removeEventListener,_scale,stopListenToKeyEvents,position,setSize,zoom,_onKeyDown,_performCursorZoom,copy,_controlActive,pointerdown,_quatInverse,add`.split(`,`);
    return J = function() {
      return e2;
    }, J();
  }
  function Y(e2) {
    this.enabled !== false && e2.preventDefault();
  }
  function X(e2) {
    let t2 = D;
    e2.key === `Control` && (this[t2(344)] = true, this.domElement.getRootNode()[t2(274)](`keyup`, this._interceptControlUp, {
      passive: true,
      capture: true
    }));
  }
  function he(e2) {
    let t2 = D;
    e2[t2(275)] === `Control` && (this._controlActive = false, this.domElement.getRootNode()[t2(335)](`keyup`, this[t2(225)], {
      passive: true,
      capture: true
    }));
  }
  let ge, _e, ve, ye, be, xe, Se;
  ge = {
    class: D(329)
  };
  _e = {
    class: `model-toolbar`
  };
  ve = {
    class: `model-actions`
  };
  ye = {
    class: `model-meta`
  };
  be = {
    class: `model-stage`
  };
  xe = {
    key: 0,
    class: D(223)
  };
  Se = {
    key: 1,
    class: `model-state error`
  };
  Ce = p(u({
    __name: `ModelViewer`,
    props: {
      data: {},
      type: {},
      sourceUrl: {}
    },
    setup(u2) {
      let d2 = D, p2 = u2, h2 = n(null), g2 = n(`loading`), _2 = n(``), v2 = n(d2(271)), b2 = n(false), x2 = n(false), T2 = n(true), E2 = n(true), O2 = null, k2 = null, A2 = null, j2 = null, M2 = null, N2 = null, P2 = null, F2 = null, I2 = 0, L2 = 0, R2 = null, z2 = new w(), B2 = new TextDecoder(`utf-8`);
      class V2 extends Error {
      }
      let H2 = () => p2.type.toLowerCase(), U2 = () => {
        let e2 = d2;
        if (!p2.sourceUrl) return ``;
        try {
          return new URL(`.`, p2.sourceUrl).href;
        } catch {
          let t2 = p2.sourceUrl.split(/[?#]/)[0] || p2.sourceUrl, n2 = t2[e2(188)](`/`);
          return n2 >= 0 ? t2.slice(0, n2 + 1) : ``;
        }
      }, W2 = (e2) => e2 instanceof Error ? e2.message : typeof e2 == `string` ? e2 : JSON.stringify(e2), G2 = () => {
        let e2 = d2, t2 = h2.value;
        if (!t2) return false;
        if (O2 || (O2 = new ae({
          antialias: true,
          alpha: false,
          canvas: t2,
          powerPreference: `high-performance`
        }), O2.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2)), O2.outputColorSpace = `srgb`, O2.setClearColor(16317180, 1)), !k2) {
          k2 = new re(), k2.background = new ie(16317180);
          let e3 = new ue(16777215, 14147304, 2.4);
          k2.add(e3);
          let t3 = new le(16777215, 2.2);
          t3.position.set(8, 10, 8), k2.add(t3);
          let n2 = new le(16777215, 0.9);
          n2.position.set(-7, 5, -4), k2.add(n2), N2 = new ne(10, 10, 13358561, 14870768), k2.add(N2), P2 = new pe(3), k2.add(P2);
        }
        return A2 || (A2 = new fe(45, 1, 0.01, 1e5), A2.position[e2(191)](5, 4, 6)), !j2 && A2 && O2 && (j2 = new me(A2, O2.domElement), j2.enableDamping = true, j2.dampingFactor = 0.08, j2.screenSpacePanning = true, j2.autoRotateSpeed = 1.2), $(), Ke(), true;
      }, q2 = (e2) => {
        let t2 = d2;
        (Array.isArray(e2) ? e2 : [
          e2
        ])[t2(326)]((e3) => e3[t2(199)]());
      }, J2 = (e2) => {
        e2.traverse((e3) => {
          let t2 = K, n2 = e3, r2 = e3;
          n2.geometry && n2.geometry.dispose(), n2.material && q2(n2[t2(325)]), r2.material && q2(r2.material);
        });
      }, Y2 = () => {
        M2 && k2 && (k2[d2(321)](M2), J2(M2)), M2 = null, R2 = null;
      }, X2 = () => B2.decode(p2.data), he2 = (function() {
        var t2 = f(function* () {
          let t3 = K, { GLTFLoader: n2 } = yield e(() => import("./GLTFLoader-VnAahfhn.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }), __vite__mapDeps([0,1,2,3,4,5])), r2 = new n2(), i2 = U2(), a2 = H2() === t3(218) ? X2() : p2.data;
          return new Promise((e2, t4) => {
            r2.parse(a2, i2, (t5) => {
              var n3;
              (n3 = t5.animations) != null && n3.length && (R2 = new C(t5.scene), t5.animations.forEach((e3) => R2 == null ? void 0 : R2.clipAction(e3).play())), e2(t5.scene);
            }, t4);
          });
        });
        return function() {
          return t2.apply(this, arguments);
        };
      })(), Ce2 = (function() {
        var t2 = f(function* () {
          let { OBJLoader: t3 } = yield e(() => import("./OBJLoader-ZTlt_okF.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }), __vite__mapDeps([6,4,1,2,3,5]));
          return new t3().parse(X2());
        });
        return function() {
          return t2.apply(this, arguments);
        };
      })(), we = (function() {
        var t2 = f(function* () {
          let { STLLoader: t3 } = yield e(() => import("./STLLoader-DrzZQOlD.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }), __vite__mapDeps([7,4,1,2,3,5])), n2 = new t3().parse(p2.data);
          return n2.computeVertexNormals(), new S(n2, Z());
        });
        return function() {
          return t2[K(284)](this, arguments);
        };
      })(), Te = (function() {
        var t2 = f(function* () {
          let { PLYLoader: t3 } = yield e(() => import("./PLYLoader-23QElkT0.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }), __vite__mapDeps([8,4,1,2,3,5])), n2 = new t3().parse(p2.data);
          return n2.computeVertexNormals(), new S(n2, Z());
        });
        return function() {
          return t2.apply(this, arguments);
        };
      })(), Ee = (function() {
        var t2 = f(function* () {
          let t3 = K;
          var n2;
          let { FBXLoader: r2 } = yield e(() => import("./FBXLoader-DYv1oISC.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }), __vite__mapDeps([9,10,4,1,2,3,5])), i2 = new r2().parse(p2.data, U2());
          return (n2 = i2[t3(207)]) != null && n2[t3(256)] && (R2 = new C(i2), i2.animations.forEach((e2) => R2 == null ? void 0 : R2[t3(217)](e2).play())), i2;
        });
        return function() {
          return t2.apply(this, arguments);
        };
      })(), De = (function() {
        var t2 = f(function* () {
          let { ColladaLoader: t3 } = yield e(() => import("./ColladaLoader-DnNrKbCQ.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }), __vite__mapDeps([11,4,1,2,3,5]));
          return new t3().parse(X2(), U2()).scene;
        });
        return function() {
          return t2[K(284)](this, arguments);
        };
      })(), Oe = (function() {
        var t2 = f(function* () {
          let { TDSLoader: t3 } = yield e(() => import("./TDSLoader-BYsvu43u.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }), __vite__mapDeps([12,4,1,2,3,5]));
          return new t3().parse(p2.data, U2());
        });
        return function() {
          return t2.apply(this, arguments);
        };
      })(), ke = (function() {
        var t2 = f(function* () {
          let t3 = K, { ThreeMFLoader: n2 } = yield e(() => import("./3MFLoader-DRXvFMep.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }), __vite__mapDeps([13,10,4,1,2,3,5]));
          return new n2()[t3(331)](p2[t3(222)]);
        });
        return function() {
          return t2.apply(this, arguments);
        };
      })(), Ae = (function() {
        var t2 = f(function* () {
          let { AMFLoader: t3 } = yield e(() => import("./AMFLoader-Xwd59bDF.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }), __vite__mapDeps([14,10,4,1,2,3,5]));
          return new t3().parse(p2.data);
        });
        return function() {
          return t2.apply(this, arguments);
        };
      })(), je = (function() {
        var t2 = f(function* () {
          let t3 = K, { USDLoader: n2 } = yield e(() => import("./USDLoader-BcIYfX86.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }), __vite__mapDeps([15,1,2,3,10,4,5]));
          return new n2().parse(p2[t3(222)]);
        });
        return function() {
          return t2.apply(this, arguments);
        };
      })(), Me = (function() {
        var t2 = f(function* () {
          let t3 = K, { KMZLoader: n2 } = yield e(() => import("./KMZLoader-gS1aDbbv.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }), __vite__mapDeps([16,11,4,1,2,3,10,5]));
          return new n2()[t3(331)](p2.data).scene;
        });
        return function() {
          return t2[K(284)](this, arguments);
        };
      })(), Ne = (e2) => {
        let t2 = e2[d2(186)]();
        throw e2 === `ifc` ? new V2(`IFC \u662F BIM \u6A21\u578B\u683C\u5F0F\uFF0C\u6D4F\u89C8\u5668\u7AEF\u5B8C\u6574\u89E3\u6790\u901A\u5E38\u4F9D\u8D56 web-ifc \u8FD9\u7C7B WebAssembly BIM \u5185\u6838\u3002\u5F53\u524D Apache-2.0 \u524D\u7AEF\u5305\u4E0D\u9ED8\u8BA4\u6253\u5165\u8FD9\u7C7B\u91CD\u578B\u8FD0\u884C\u65F6\uFF0C\u5EFA\u8BAE\u5728\u79C1\u6709\u670D\u52A1\u7AEF\u8F6C\u6362\u4E3A GLB/GLTF \u540E\u9884\u89C8\u3002`) : e2 === `3dm` ? new V2(`3DM \u662F Rhino/OpenNURBS \u6A21\u578B\u683C\u5F0F\uFF0C\u6D4F\u89C8\u5668\u7AEF\u89E3\u6790\u9700\u8981 rhino3dm WebAssembly \u8FD0\u884C\u65F6\u3002\u5F53\u524D\u524D\u7AEF\u5305\u672A\u5185\u7F6E\u8BE5\u8FD0\u884C\u65F6\uFF0C\u5EFA\u8BAE\u5728\u79C1\u6709\u8F6C\u6362\u94FE\u8DEF\u8F93\u51FA GLB/GLTF \u540E\u9884\u89C8\u3002`) : new V2(t2 + ` \u5C5E\u4E8E CAD B-Rep / \u5DE5\u7A0B\u4EA4\u6362\u683C\u5F0F\uFF0C\u6D4F\u89C8\u5668\u7AEF\u5B8C\u6574\u89E3\u6790\u901A\u5E38\u9700\u8981 OpenCascade \u7B49 WebAssembly \u51E0\u4F55\u5185\u6838\u3002\u5F53\u524D\u524D\u7AEF\u5305\u4E0D\u9ED8\u8BA4\u6253\u5165\u8FD9\u7C7B\u91CD\u578B\u8FD0\u884C\u65F6\uFF0C\u5EFA\u8BAE\u5728\u79C1\u6709\u670D\u52A1\u7AEF\u8F6C\u6362\u4E3A GLB/GLTF \u6216\u8F7B\u91CF\u7F51\u683C\u683C\u5F0F\u540E\u9884\u89C8\u3002`);
      }, Pe = (function() {
        var t2 = f(function* () {
          let { PCDLoader: t3 } = yield e(() => import("./PCDLoader-CYvtGdC0.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }), __vite__mapDeps([17,4,1,2,3,5]));
          return new t3().parse(p2.data, p2.sourceUrl || `model.pcd`);
        });
        return function() {
          return t2.apply(this, arguments);
        };
      })(), Fe = (function() {
        var t2 = f(function* () {
          let { VRMLLoader: t3 } = yield e(() => import("./VRMLLoader-D3IBLzxk.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }), __vite__mapDeps([18,4,1,2,3,5]));
          return new t3().parse(X2(), U2());
        });
        return function() {
          return t2.apply(this, arguments);
        };
      })(), Ie = (function() {
        var t2 = f(function* () {
          let t3 = K, { XYZLoader: n2 } = yield e(() => import("./XYZLoader-Bec_D5O_.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }), __vite__mapDeps([19,4,1,2,3,5])), r2 = new n2()[t3(331)](X2());
          return r2[t3(240)](), new se(r2, Re());
        });
        return function() {
          return t2.apply(this, arguments);
        };
      })(), Le = (function() {
        var t2 = f(function* () {
          let t3 = K, { VTKLoader: n2 } = yield e(() => import("./VTKLoader-DxR2QLnY.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }), __vite__mapDeps([20,10,4,1,2,3,5])), r2 = new n2()[t3(331)](p2.data);
          return r2.computeVertexNormals(), new S(r2, Z());
        });
        return function() {
          return t2.apply(this, arguments);
        };
      })(), Z = () => new oe({
        color: 5214138,
        metalness: 0.08,
        roughness: 0.78,
        side: 2,
        wireframe: x2.value
      }), Re = () => new de({
        color: 2062988,
        size: 0.035,
        sizeAttenuation: true
      }), Q = (e2) => {
        e2.traverse((e3) => {
          let t2 = K, n2 = e3;
          n2.isMesh && !n2.material && (n2.material = Z()), n2.isMesh && n2[t2(325)] && (Array.isArray(n2.material) ? n2[t2(325)] : [
            n2.material
          ])[t2(326)]((e4) => {
            `wireframe` in e4 && (e4.wireframe = x2.value), e4.needsUpdate = true;
          });
        });
      }, ze = (e2) => {
        let t2 = 0, n2 = 0;
        return e2.traverse((e3) => {
          let r2 = K;
          e3.isMesh && (t2 += 1), e3[r2(202)] && (n2 += 1);
        }), {
          meshes: t2,
          points: n2
        };
      }, Be = (e2) => {
        let t2 = d2, { meshes: n2, points: r2 } = ze(e2), i2 = [];
        n2 && i2.push(n2 + ` \u4E2A\u7F51\u683C`), r2 && i2.push(r2 + ` \u4E2A\u70B9\u4E91`), v2.value = i2[t2(256)] ? i2.join(`\uFF0C`) : `\u6A21\u578B\u5DF2\u52A0\u8F7D`;
      }, Ve = (e2) => {
        let t2 = d2, n2 = new ce()[t2(268)](e2);
        if (n2.isEmpty()) return {
          center: new y(),
          size: new y(4, 4, 4)
        };
        let r2 = n2[t2(196)](new y()), i2 = n2[t2(273)](new y());
        return e2.position.sub(r2), {
          center: new y(),
          size: i2
        };
      }, He = () => {
        let e2 = d2;
        if (!M2 || !A2 || !j2) return;
        let t2 = new ce().setFromObject(M2), n2 = t2.getSize(new y()), r2 = t2.getCenter(new y()), i2 = Math[e2(265)](n2.x, n2.y, n2.z, 1) / (2 * Math.tan(m.degToRad(A2.fov / 2))) * 1.65;
        A2.near = Math.max(i2 / 1e3, 0.01), A2.far = Math.max(i2 * 1e3, 1e3), A2.position.copy(r2).add(new y(i2, i2 * 0.62, i2)), A2[e2(286)](), j2.target[e2(343)](r2), j2.update();
      }, Ue = (function() {
        var e2 = f(function* (e3) {
          let t2 = K;
          if (!k2) return;
          Y2(), Q(e3);
          let { size: n2 } = Ve(e3);
          M2 = e3, k2.add(e3), He(), Be(e3);
          let r2 = Math[t2(265)](n2.x, n2.y, n2.z, 1);
          N2 && N2.scale.setScalar(Math.max(r2 / 10, 1));
        });
        return function(t2) {
          return e2.apply(this, arguments);
        };
      })(), We = (function() {
        var e2 = f(function* () {
          let e3 = K, t2 = ++L2;
          if (g2.value = `loading`, _2.value = ``, v2.value = `\u6B63\u5728\u52A0\u8F7D\u6A21\u578B`, G2()) try {
            let e4 = yield Ge(H2());
            if (t2 !== L2) {
              J2(e4);
              return;
            }
            yield s(), yield Ue(e4), g2.value = `ready`;
          } catch (n2) {
            if (t2 !== L2) return;
            n2 instanceof V2 || console[e3(283)](n2), g2[e3(205)] = `error`, _2.value = W2(n2) || p2.type.toUpperCase() + ` \u6A21\u578B\u89E3\u6790\u5931\u8D25`;
          }
        });
        return function() {
          return e2.apply(this, arguments);
        };
      })(), Ge = (e2) => {
        let t2 = d2;
        switch (e2) {
          case `glb`:
          case `gltf`:
            return he2();
          case t2(289):
            return Ce2();
          case `stl`:
            return we();
          case `ply`:
            return Te();
          case t2(324):
            return Ee();
          case `dae`:
            return De();
          case `3ds`:
            return Oe();
          case t2(239):
            return ke();
          case `amf`:
            return Ae();
          case `usd`:
          case `usda`:
          case `usdc`:
          case `usdz`:
            return je();
          case `kmz`:
            return Me();
          case `step`:
          case `stp`:
          case `iges`:
          case `igs`:
          case `ifc`:
          case `3dm`:
            return Ne(e2);
          case `pcd`:
            return Pe();
          case `wrl`:
          case `vrml`:
            return Fe();
          case `xyz`:
            return Ie();
          case `vtk`:
          case `vtp`:
            return Le();
          default:
            throw Error(`\u6682\u4E0D\u652F\u6301 .` + e2 + ` \u6A21\u578B\u683C\u5F0F`);
        }
      }, Ke = () => {
        let e2 = d2, t2 = h2.value;
        if (!t2 || !O2 || !A2) return;
        let n2 = t2.getBoundingClientRect(), r2 = Math.max(1, Math.floor(n2.width)), i2 = Math.max(1, Math.floor(n2[e2(242)]));
        O2[e2(339)](r2, i2, false), A2.aspect = r2 / i2, A2.updateProjectionMatrix();
      }, qe = (e2) => {
        let t2 = d2;
        if (!O2 || !k2 || !A2 || !j2) return;
        j2.autoRotate = b2[t2(205)], j2.update(), z2[t2(292)](e2);
        let n2 = z2.getDelta();
        R2 == null ? void 0 : R2[t2(292)](n2), O2.render(k2, A2), I2 = requestAnimationFrame(qe);
      }, Je = () => {
        M2 && Q(M2);
      }, $ = () => {
        let e2 = d2;
        N2 && (N2.visible = T2.value), P2 && (P2[e2(226)] = E2[e2(205)]);
      }, Ye = () => {
        x2.value = !x2.value, Je();
      }, Xe = () => {
        T2.value = !T2.value, $();
      }, Ze = () => {
        E2.value = !E2.value, $();
      };
      return ee(() => {
        let e2 = d2;
        G2() && (z2[e2(216)](document), F2 = new ResizeObserver(Ke), h2.value && F2.observe(h2[e2(205)]), qe(), We());
      }), te(() => {
        let e2 = d2;
        L2 += 1, cancelAnimationFrame(I2), F2 == null ? void 0 : F2.disconnect(), F2 = null, Y2(), j2 == null ? void 0 : j2[e2(199)](), j2 = null, O2 == null ? void 0 : O2.dispose(), O2 = null, z2.dispose(), z2 = new w(), k2 = null, A2 = null, N2 = null, P2 = null;
      }), o(() => [
        p2.data,
        p2.type,
        p2.sourceUrl
      ], () => {
        We();
      }), (e2, n2) => (l(), t(d2(305), ge, [
        c(d2(305), _e, [
          c(`div`, ve, [
            c(d2(269), {
              type: `button`,
              onClick: He
            }, `\u9002\u914D`),
            c(`button`, {
              type: `button`,
              class: i({
                active: b2.value
              }),
              onClick: n2[0] || (n2[0] = (e3) => b2.value = !b2.value)
            }, `\u65CB\u8F6C`, 2),
            c(`button`, {
              type: `button`,
              class: i({
                active: x2.value
              }),
              onClick: Ye
            }, `\u7EBF\u6846`, 2),
            c(`button`, {
              type: `button`,
              class: i({
                active: T2.value
              }),
              onClick: Xe
            }, `\u7F51\u683C`, 2),
            c(d2(269), {
              type: d2(269),
              class: i({
                active: E2[d2(205)]
              }),
              onClick: Ze
            }, `\u5750\u6807`, 2)
          ]),
          c(`div`, ye, [
            c(`strong`, null, r(u2.type[d2(186)]()), 1),
            c(d2(215), null, r(v2.value), 1)
          ])
        ]),
        c(`div`, be, [
          c(`canvas`, {
            ref_key: `canvas`,
            ref: h2
          }, null, 512),
          g2.value === d2(332) ? (l(), t(`div`, xe, `\u6B63\u5728\u89E3\u6790 3D \u6A21\u578B...`)) : g2.value === d2(283) ? (l(), t(`div`, Se, [
            n2[1] || (n2[1] = c(`strong`, null, `\u6A21\u578B\u89E3\u6790\u5931\u8D25`, -1)),
            c(`span`, null, r(_2.value), 1)
          ])) : a(``, true)
        ])
      ]));
    }
  }), [
    [
      `__scopeId`,
      D(229)
    ]
  ]);
});
export {
  __tla,
  Ce as default
};
