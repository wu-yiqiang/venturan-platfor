import { $ as e, F as t, G as n, H as r, Q as i, X as a, c as o, d as s, et as c, g as l, l as u, m as d, ot as f, q as p } from "./_virtual_mf___mfe_internal__components_center__loadShare__vue__loadShare__.mjs-DlvFZDQ7.js";
import { _ as m, m as h, p as g, t as _, v } from "./index-D-g3WoLo.js";
var y = q;
(function(e2, t2) {
  let n2 = q, r2 = e2();
  for (; ; ) try {
    if (parseInt(n2(457)) / 1 + parseInt(n2(428)) / 2 * (-parseInt(n2(498)) / 3) + -parseInt(n2(465)) / 4 + -parseInt(n2(551)) / 5 + parseInt(n2(521)) / 6 + -parseInt(n2(568)) / 7 + parseInt(n2(401)) / 8 * (parseInt(n2(422)) / 9) === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(b, 386312);
function b() {
  let e2 = `chunkSize.75466ABBfiy.strstart.remaining.ins_h.button.match_length.comment.dyn_dtree.2715916mSgJiB.MIXED_IMAGE.status.avail_in.reduce.chapters.MONTH.ndist.window.pending_buf_size.bl_count.lenbits.options.mixed.view.havedict.level.pending.extra_len.sym_next.max_chain_length.onData.umd-text.next_out.bi_valid.pending_buf.hcrc.next_in.dictionary.data_type.PUBLISHER.bi_buf.string.381MGzHdq.value.too many length or distance symbols.wrap.name.output.flags.extra_base.getUint32.image/webp.call.total_in.opt_len.readUint16.heap_max.CATEGORY.nlen.fromCharCode.hold.PAGE_OFFSETS.DAY.sym_end.elems.999522YyVdud.bytes.stage.need dictionary.strategy.avail_out.have.utf-16le.flattenChunks.onEnd.result.err.join.gzindex.ensure.title.good_length.done.distcode.cover.window_size.lencode.must be non-object.umd-actions.year.length.\u7AE0\u8282 .wbits. / .d_desc.1248880gsBSEj.w_bits.offset.insufficient memory.good_match.match_start.check.map.head.sym_buf.pako inflate (from Nodeca project).prev_length.bl_tree.dyn_ltree.slice.last_flush.w_size.2104221nHEkYk.assign.deflateInit2.article.buffer.max_lazy_match.max.div.subarray.push.block_start.readUint8.heap.COVER.time.4666448QgOUVP.matches.hash_size.wsize.bits.total_out.match_available.msg.has_stree.sane.strm.byteLength.distbits.adler.function.gzhead.heap_len.whave.min.category.hash_bits.27ddmUzQ.wnext.prototype.prev.stream error.strong.5926ksmtRX.gzip.lookahead.charCodeAt.invalid bit length repeat.ready.invalid distance too far back.was.replace.state.filter.[object ArrayBuffer].back.work.mode.windowBits.input._dict_set.umd-toolbar.lens.depth.CHAPTER_OFFSETS.extra.set.string2buf.insert.total.dmax`.split(`.`);
  return b = function() {
    return e2;
  }, b();
}
h();
var x = 4, S = 0, C = 1, w = 2;
function T(e2) {
  let t2 = e2.length;
  for (; --t2 >= 0; ) e2[t2] = 0;
}
var E = 0, D = 1, O = 2, k = 3, ee = 258, te = 29, A = 256, ne = A + 1 + te, j = 30, re = 19, ie = 2 * ne + 1, ae = 15, oe = 16, se = 7, ce = 256, le = 16, ue = 17, de = 18, fe = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]), pe = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]), me = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]), he = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), ge = 512, M = Array((ne + 2) * 2);
T(M);
var _e = Array(j * 2);
T(_e);
var ve = Array(ge);
T(ve);
var ye = Array(ee - k + 1);
T(ye);
var be = Array(te);
T(be);
var xe = Array(j);
T(xe);
function Se(e2, t2, n2, r2, i2) {
  let a2 = q;
  this.static_tree = e2, this.extra_bits = t2, this.extra_base = n2, this[a2(520)] = r2, this.max_length = i2, this[a2(409)] = e2 && e2.length;
}
var Ce, we, Te;
function Ee(e2, t2) {
  this.dyn_tree = e2, this.max_code = 0, this.stat_desc = t2;
}
var De = (e2) => e2 < 256 ? ve[e2] : ve[256 + (e2 >>> 7)], Oe = (e2, t2) => {
  e2.pending_buf[e2.pending++] = t2 & 255, e2.pending_buf[e2.pending++] = t2 >>> 8 & 255;
}, N = (e2, t2, n2) => {
  let r2 = q;
  e2.bi_valid > oe - n2 ? (e2.bi_buf |= t2 << e2[r2(489)] & 65535, Oe(e2, e2.bi_buf), e2.bi_buf = t2 >> oe - e2[r2(489)], e2.bi_valid += n2 - oe) : (e2[r2(496)] |= t2 << e2.bi_valid & 65535, e2.bi_valid += n2);
}, P = (e2, t2, n2) => {
  N(e2, n2[t2 * 2], n2[t2 * 2 + 1]);
}, ke = (e2, t2) => {
  let n2 = 0;
  do
    n2 |= e2 & 1, e2 >>>= 1, n2 <<= 1;
  while (--t2 > 0);
  return n2 >>> 1;
}, Ae = (e2) => {
  let t2 = q;
  e2[t2(489)] === 16 ? (Oe(e2, e2.bi_buf), e2.bi_buf = 0, e2.bi_valid = 0) : e2.bi_valid >= 8 && (e2.pending_buf[e2.pending++] = e2.bi_buf & 255, e2[t2(496)] >>= 8, e2.bi_valid -= 8);
}, je = (e2, t2) => {
  let n2 = q, r2 = t2.dyn_tree, i2 = t2.max_code, a2 = t2.stat_desc.static_tree, o2 = t2.stat_desc[n2(409)], s2 = t2.stat_desc.extra_bits, c2 = t2.stat_desc[n2(505)], l2 = t2.stat_desc.max_length, u2, d2, f2, p2, m2, h2, g2 = 0;
  for (p2 = 0; p2 <= ae; p2++) e2.bl_count[p2] = 0;
  for (r2[e2.heap[e2.heap_max] * 2 + 1] = 0, u2 = e2[n2(512)] + 1; u2 < ie; u2++) d2 = e2.heap[u2], p2 = r2[r2[d2 * 2 + 1] * 2 + 1] + 1, p2 > l2 && (p2 = l2, g2++), r2[d2 * 2 + 1] = p2, !(d2 > i2) && (e2.bl_count[p2]++, m2 = 0, d2 >= c2 && (m2 = s2[d2 - c2]), h2 = r2[d2 * 2], e2.opt_len += h2 * (p2 + m2), o2 && (e2.static_len += h2 * (a2[d2 * 2 + 1] + m2)));
  if (g2 !== 0) {
    do {
      for (p2 = l2 - 1; e2.bl_count[p2] === 0; ) p2--;
      e2[n2(475)][p2]--, e2.bl_count[p2 + 1] += 2, e2[n2(475)][l2]--, g2 -= 2;
    } while (g2 > 0);
    for (p2 = l2; p2 !== 0; p2--) for (d2 = e2.bl_count[p2]; d2 !== 0; ) f2 = e2.heap[--u2], !(f2 > i2) && (r2[f2 * 2 + 1] !== p2 && (e2.opt_len += (p2 - r2[f2 * 2 + 1]) * r2[f2 * 2], r2[f2 * 2 + 1] = p2), d2--);
  }
}, Me = (e2, t2, n2) => {
  let r2 = Array(ae + 1), i2 = 0, a2, o2;
  for (a2 = 1; a2 <= ae; a2++) i2 = i2 + n2[a2 - 1] << 1, r2[a2] = i2;
  for (o2 = 0; o2 <= t2; o2++) {
    let t3 = e2[o2 * 2 + 1];
    t3 !== 0 && (e2[o2 * 2] = ke(r2[t3]++, t3));
  }
}, Ne = () => {
  let e2, t2, n2, r2, i2, a2 = Array(ae + 1);
  for (n2 = 0, r2 = 0; r2 < te - 1; r2++) for (be[r2] = n2, e2 = 0; e2 < 1 << fe[r2]; e2++) ye[n2++] = r2;
  for (ye[n2 - 1] = r2, i2 = 0, r2 = 0; r2 < 16; r2++) for (xe[r2] = i2, e2 = 0; e2 < 1 << pe[r2]; e2++) ve[i2++] = r2;
  for (i2 >>= 7; r2 < j; r2++) for (xe[r2] = i2 << 7, e2 = 0; e2 < 1 << pe[r2] - 7; e2++) ve[256 + i2++] = r2;
  for (t2 = 0; t2 <= ae; t2++) a2[t2] = 0;
  for (e2 = 0; e2 <= 143; ) M[e2 * 2 + 1] = 8, e2++, a2[8]++;
  for (; e2 <= 255; ) M[e2 * 2 + 1] = 9, e2++, a2[9]++;
  for (; e2 <= 279; ) M[e2 * 2 + 1] = 7, e2++, a2[7]++;
  for (; e2 <= 287; ) M[e2 * 2 + 1] = 8, e2++, a2[8]++;
  for (Me(M, ne + 1, a2), e2 = 0; e2 < j; e2++) _e[e2 * 2 + 1] = 5, _e[e2 * 2] = ke(e2, 5);
  Ce = new Se(M, fe, A + 1, ne, ae), we = new Se(_e, pe, 0, j, ae), Te = new Se([], me, 0, re, se);
}, Pe = (e2) => {
  let t2 = q, n2;
  for (n2 = 0; n2 < ne; n2++) e2.dyn_ltree[n2 * 2] = 0;
  for (n2 = 0; n2 < j; n2++) e2.dyn_dtree[n2 * 2] = 0;
  for (n2 = 0; n2 < re; n2++) e2.bl_tree[n2 * 2] = 0;
  e2.dyn_ltree[ce * 2] = 1, e2.opt_len = e2.static_len = 0, e2[t2(484)] = e2.matches = 0;
}, Fe = (e2) => {
  e2.bi_valid > 8 ? Oe(e2, e2.bi_buf) : e2.bi_valid > 0 && (e2.pending_buf[e2.pending++] = e2.bi_buf), e2.bi_buf = 0, e2.bi_valid = 0;
}, Ie = (e2, t2, n2, r2) => {
  let i2 = t2 * 2, a2 = n2 * 2;
  return e2[i2] < e2[a2] || e2[i2] === e2[a2] && r2[t2] <= r2[n2];
}, Le = (e2, t2, n2) => {
  let r2 = q, i2 = e2.heap[n2], a2 = n2 << 1;
  for (; a2 <= e2.heap_len && (a2 < e2.heap_len && Ie(t2, e2.heap[a2 + 1], e2[r2(398)][a2], e2.depth) && a2++, !Ie(t2, i2, e2.heap[a2], e2.depth)); ) e2.heap[n2] = e2.heap[a2], n2 = a2, a2 <<= 1;
  e2.heap[n2] = i2;
}, Re = (e2, t2, n2) => {
  let r2 = q, i2, a2, o2 = 0, s2, c2;
  if (e2.sym_next !== 0) do
    i2 = e2.pending_buf[e2[r2(560)] + o2++] & 255, i2 += (e2.pending_buf[e2.sym_buf + o2++] & 255) << 8, a2 = e2[r2(490)][e2.sym_buf + o2++], i2 === 0 ? P(e2, a2, t2) : (s2 = ye[a2], P(e2, s2 + A + 1, t2), c2 = fe[s2], c2 !== 0 && (a2 -= be[s2], N(e2, a2, c2)), i2--, s2 = De(i2), P(e2, s2, n2), c2 = pe[s2], c2 !== 0 && (i2 -= xe[s2], N(e2, i2, c2)));
  while (o2 < e2.sym_next);
  P(e2, ce, t2);
}, ze = (e2, t2) => {
  let n2 = q, r2 = t2.dyn_tree, i2 = t2.stat_desc.static_tree, a2 = t2.stat_desc.has_stree, o2 = t2.stat_desc.elems, s2, c2, l2 = -1, u2;
  for (e2[n2(417)] = 0, e2.heap_max = ie, s2 = 0; s2 < o2; s2++) r2[s2 * 2] === 0 ? r2[s2 * 2 + 1] = 0 : (e2.heap[++e2[n2(417)]] = l2 = s2, e2.depth[s2] = 0);
  for (; e2.heap_len < 2; ) u2 = e2.heap[++e2.heap_len] = l2 < 2 ? ++l2 : 0, r2[u2 * 2] = 1, e2.depth[u2] = 0, e2.opt_len--, a2 && (e2.static_len -= i2[u2 * 2 + 1]);
  for (t2.max_code = l2, s2 = e2.heap_len >> 1; s2 >= 1; s2--) Le(e2, r2, s2);
  u2 = o2;
  do
    s2 = e2.heap[1], e2.heap[1] = e2.heap[e2[n2(417)]--], Le(e2, r2, 1), c2 = e2[n2(398)][1], e2.heap[--e2.heap_max] = s2, e2.heap[--e2.heap_max] = c2, r2[u2 * 2] = r2[s2 * 2] + r2[c2 * 2], e2.depth[u2] = (e2.depth[s2] >= e2.depth[c2] ? e2.depth[s2] : e2.depth[c2]) + 1, r2[s2 * 2 + 1] = r2[c2 * 2 + 1] = u2, e2.heap[1] = u2++, Le(e2, r2, 1);
  while (e2.heap_len >= 2);
  e2[n2(398)][--e2[n2(512)]] = e2.heap[1], je(e2, t2), Me(r2, l2, e2[n2(475)]);
}, Be = (e2, t2, n2) => {
  let r2 = q, i2, a2 = -1, o2, s2 = t2[1], c2 = 0, l2 = 7, u2 = 4;
  for (s2 === 0 && (l2 = 138, u2 = 3), t2[(n2 + 1) * 2 + 1] = 65535, i2 = 0; i2 <= n2; i2++) o2 = s2, s2 = t2[(i2 + 1) * 2 + 1], !(++c2 < l2 && o2 === s2) && (c2 < u2 ? e2[r2(563)][o2 * 2] += c2 : o2 === 0 ? c2 <= 10 ? e2.bl_tree[ue * 2]++ : e2.bl_tree[de * 2]++ : (o2 !== a2 && e2.bl_tree[o2 * 2]++, e2.bl_tree[le * 2]++), c2 = 0, a2 = o2, s2 === 0 ? (l2 = 138, u2 = 3) : o2 === s2 ? (l2 = 6, u2 = 3) : (l2 = 7, u2 = 4));
}, Ve = (e2, t2, n2) => {
  let r2, i2 = -1, a2, o2 = t2[1], s2 = 0, c2 = 7, l2 = 4;
  for (o2 === 0 && (c2 = 138, l2 = 3), r2 = 0; r2 <= n2; r2++) if (a2 = o2, o2 = t2[(r2 + 1) * 2 + 1], !(++s2 < c2 && a2 === o2)) {
    if (s2 < l2) do
      P(e2, a2, e2.bl_tree);
    while (--s2 !== 0);
    else a2 === 0 ? s2 <= 10 ? (P(e2, ue, e2.bl_tree), N(e2, s2 - 3, 3)) : (P(e2, de, e2.bl_tree), N(e2, s2 - 11, 7)) : (a2 !== i2 && (P(e2, a2, e2.bl_tree), s2--), P(e2, le, e2.bl_tree), N(e2, s2 - 3, 2));
    s2 = 0, i2 = a2, o2 === 0 ? (c2 = 138, l2 = 3) : a2 === o2 ? (c2 = 6, l2 = 3) : (c2 = 7, l2 = 4);
  }
}, He = (e2) => {
  let t2;
  for (Be(e2, e2.dyn_ltree, e2.l_desc.max_code), Be(e2, e2.dyn_dtree, e2.d_desc.max_code), ze(e2, e2.bl_desc), t2 = re - 1; t2 >= 3 && e2.bl_tree[he[t2] * 2 + 1] === 0; t2--) ;
  return e2.opt_len += 3 * (t2 + 1) + 5 + 5 + 4, t2;
}, Ue = (e2, t2, n2, r2) => {
  let i2 = q, a2;
  for (N(e2, t2 - 257, 5), N(e2, n2 - 1, 5), N(e2, r2 - 4, 4), a2 = 0; a2 < r2; a2++) N(e2, e2.bl_tree[he[a2] * 2 + 1], 3);
  Ve(e2, e2.dyn_ltree, t2 - 1), Ve(e2, e2[i2(464)], n2 - 1);
}, We = (e2) => {
  let t2 = q, n2 = 4093624447, r2;
  for (r2 = 0; r2 <= 31; r2++, n2 >>>= 1) if (n2 & 1 && e2.dyn_ltree[r2 * 2] !== 0) return S;
  if (e2[t2(564)][18] !== 0 || e2.dyn_ltree[20] !== 0 || e2.dyn_ltree[26] !== 0) return C;
  for (r2 = 32; r2 < A; r2++) if (e2[t2(564)][r2 * 2] !== 0) return C;
  return S;
}, Ge = false, Ke = (e2) => {
  let t2 = q;
  Ge || (Ge = (Ne(), true)), e2.l_desc = new Ee(e2.dyn_ltree, Ce), e2.d_desc = new Ee(e2[t2(464)], we), e2.bl_desc = new Ee(e2.bl_tree, Te), e2.bi_buf = 0, e2.bi_valid = 0, Pe(e2);
}, qe = (e2, t2, n2, r2) => {
  let i2 = q;
  N(e2, (E << 1) + +!!r2, 3), Fe(e2), Oe(e2, n2), Oe(e2, ~n2), n2 && e2.pending_buf[i2(451)](e2.window[i2(576)](t2, t2 + n2), e2.pending), e2.pending += n2;
}, Je = { _tr_init: Ke, _tr_stored_block: qe, _tr_flush_block: (e2, t2, n2, r2) => {
  let i2 = q, a2, o2, s2 = 0;
  e2.level > 0 ? (e2.strm[i2(494)] === w && (e2[i2(411)][i2(494)] = We(e2)), ze(e2, e2.l_desc), ze(e2, e2.d_desc), s2 = He(e2), a2 = e2.opt_len + 3 + 7 >>> 3, o2 = e2.static_len + 3 + 7 >>> 3, o2 <= a2 && (a2 = o2)) : a2 = o2 = n2 + 5, n2 + 4 <= a2 && t2 !== -1 ? qe(e2, t2, n2, r2) : e2[i2(525)] === x || o2 === a2 ? (N(e2, (D << 1) + +!!r2, 3), Re(e2, M, _e)) : (N(e2, (O << 1) + +!!r2, 3), Ue(e2, e2.l_desc.max_code + 1, e2[i2(550)].max_code + 1, s2 + 1), Re(e2, e2[i2(564)], e2.dyn_dtree)), Pe(e2), r2 && Fe(e2);
}, _tr_tally: (e2, t2, n2) => (e2[y(490)][e2.sym_buf + e2.sym_next++] = t2, e2.pending_buf[e2.sym_buf + e2.sym_next++] = t2 >> 8, e2.pending_buf[e2.sym_buf + e2.sym_next++] = n2, t2 === 0 ? e2.dyn_ltree[n2 * 2]++ : (e2.matches++, t2--, e2.dyn_ltree[(ye[n2] + A + 1) * 2]++, e2.dyn_dtree[De(t2) * 2]++), e2.sym_next === e2[y(519)]), _tr_align: (e2) => {
  N(e2, D << 1, 3), P(e2, ce, M), Ae(e2);
} }, Ye = (e2, t2, n2, r2) => {
  let i2 = e2 & 65535 | 0, a2 = e2 >>> 16 & 65535 | 0, o2 = 0;
  for (; n2 !== 0; ) {
    o2 = n2 > 2e3 ? 2e3 : n2, n2 -= o2;
    do
      i2 = i2 + t2[r2++] | 0, a2 = a2 + i2 | 0;
    while (--o2);
    i2 %= 65521, a2 %= 65521;
  }
  return i2 | a2 << 16 | 0;
}, Xe = new Uint32Array((() => {
  let e2, t2 = [];
  for (var n2 = 0; n2 < 256; n2++) {
    e2 = n2;
    for (var r2 = 0; r2 < 8; r2++) e2 = e2 & 1 ? 3988292384 ^ e2 >>> 1 : e2 >>> 1;
    t2[n2] = e2;
  }
  return t2;
})()), F = (e2, t2, n2, r2) => {
  let i2 = Xe, a2 = r2 + n2;
  e2 ^= -1;
  for (let n3 = r2; n3 < a2; n3++) e2 = e2 >>> 8 ^ i2[(e2 ^ t2[n3]) & 255];
  return e2 ^ -1;
}, Ze = { 2: y(524), 1: `stream end`, 0: ``, "-1": `file error`, "-2": y(426), "-3": `data error`, "-4": y(554), "-5": `buffer error`, "-6": `incompatible version` }, Qe = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_MEM_ERROR: -4, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 }, { _tr_init: $e, _tr_stored_block: et, _tr_flush_block: tt, _tr_tally: I, _tr_align: nt } = Je, { Z_NO_FLUSH: rt, Z_PARTIAL_FLUSH: it, Z_FULL_FLUSH: at, Z_FINISH: L, Z_BLOCK: ot, Z_OK: R, Z_STREAM_END: st, Z_STREAM_ERROR: z, Z_DATA_ERROR: ct, Z_BUF_ERROR: lt, Z_DEFAULT_COMPRESSION: ut, Z_FILTERED: dt, Z_HUFFMAN_ONLY: ft, Z_RLE: pt, Z_FIXED: mt, Z_DEFAULT_STRATEGY: ht, Z_UNKNOWN: gt, Z_DEFLATED: _t } = Qe, vt = 9, yt = 15, bt = 8, xt = 286, St = 30, Ct = 19, wt = 2 * xt + 1, Tt = 15, B = 3, Et = 258, V = Et + B + 1, Dt = 32, Ot = 42, kt = 57, At = 69, jt = 73, Mt = 91, Nt = 103, Pt = 113, Ft = 666, H = 1, It = 2, Lt = 3, Rt = 4, zt = 3, Bt = (e2, t2) => (e2.msg = Ze[t2], t2), Vt = (e2) => e2 * 2 - (e2 > 4 ? 9 : 0), Ht = (e2) => {
  let t2 = e2.length;
  for (; --t2 >= 0; ) e2[t2] = 0;
}, Ut = (e2) => {
  let t2 = y, n2, r2, i2, a2 = e2.w_size;
  n2 = e2.hash_size, i2 = n2;
  do
    r2 = e2[t2(559)][--i2], e2.head[i2] = r2 >= a2 ? r2 - a2 : 0;
  while (--n2);
  n2 = a2, i2 = n2;
  do
    r2 = e2.prev[--i2], e2.prev[i2] = r2 >= a2 ? r2 - a2 : 0;
  while (--n2);
}, Wt = (e2, t2, n2) => (t2 << e2.hash_shift ^ n2) & e2.hash_mask, U = (e2) => {
  let t2 = y, n2 = e2.state, r2 = n2.pending;
  r2 > e2.avail_out && (r2 = e2.avail_out), r2 !== 0 && (e2.output.set(n2.pending_buf.subarray(n2.pending_out, n2.pending_out + r2), e2[t2(488)]), e2.next_out += r2, n2.pending_out += r2, e2.total_out += r2, e2.avail_out -= r2, n2.pending -= r2, n2.pending === 0 && (n2.pending_out = 0));
}, W = (e2, t2) => {
  let n2 = y;
  tt(e2, e2.block_start >= 0 ? e2.block_start : -1, e2.strstart - e2.block_start, t2), e2.block_start = e2.strstart, U(e2[n2(411)]);
}, G = (e2, t2) => {
  e2.pending_buf[e2.pending++] = t2;
}, Gt = (e2, t2) => {
  e2.pending_buf[e2.pending++] = t2 >>> 8 & 255, e2.pending_buf[e2.pending++] = t2 & 255;
}, Kt = (e2, t2, n2, r2) => {
  let i2 = y, a2 = e2.avail_in;
  return a2 > r2 && (a2 = r2), a2 === 0 ? 0 : (e2.avail_in -= a2, t2.set(e2.input.subarray(e2.next_in, e2[i2(492)] + a2), n2), e2.state.wrap === 1 ? e2.adler = Ye(e2.adler, t2, a2, n2) : e2.state.wrap === 2 && (e2.adler = F(e2.adler, t2, a2, n2)), e2.next_in += a2, e2[i2(509)] += a2, a2);
}, qt = (e2, t2) => {
  let n2 = y, r2 = e2.max_chain_length, i2 = e2.strstart, a2, o2, s2 = e2.prev_length, c2 = e2.nice_match, l2 = e2.strstart > e2.w_size - V ? e2.strstart - (e2[n2(567)] - V) : 0, u2 = e2.window, d2 = e2.w_mask, f2 = e2.prev, p2 = e2.strstart + Et, m2 = u2[i2 + s2 - 1], h2 = u2[i2 + s2];
  e2.prev_length >= e2[n2(555)] && (r2 >>= 2), c2 > e2[n2(430)] && (c2 = e2[n2(430)]);
  do {
    if (a2 = t2, u2[a2 + s2] !== h2 || u2[a2 + s2 - 1] !== m2 || u2[a2] !== u2[i2] || u2[++a2] !== u2[i2 + 1]) continue;
    i2 += 2, a2++;
    do
      ;
    while (u2[++i2] === u2[++a2] && u2[++i2] === u2[++a2] && u2[++i2] === u2[++a2] && u2[++i2] === u2[++a2] && u2[++i2] === u2[++a2] && u2[++i2] === u2[++a2] && u2[++i2] === u2[++a2] && u2[++i2] === u2[++a2] && i2 < p2);
    if (o2 = Et - (p2 - i2), i2 = p2 - Et, o2 > s2) {
      if (e2.match_start = t2, s2 = o2, o2 >= c2) break;
      m2 = u2[i2 + s2 - 1], h2 = u2[i2 + s2];
    }
  } while ((t2 = f2[t2 & d2]) > l2 && --r2 !== 0);
  return s2 <= e2.lookahead ? s2 : e2.lookahead;
}, Jt = (e2) => {
  let t2 = y, n2 = e2.w_size, r2, i2, a2;
  do {
    if (i2 = e2.window_size - e2.lookahead - e2[t2(458)], e2.strstart >= n2 + (n2 - V) && (e2.window.set(e2[t2(473)].subarray(n2, n2 + n2 - i2), 0), e2.match_start -= n2, e2[t2(458)] -= n2, e2.block_start -= n2, e2.insert > e2.strstart && (e2.insert = e2.strstart), Ut(e2), i2 += n2), e2.strm.avail_in === 0) break;
    if (r2 = Kt(e2[t2(411)], e2[t2(473)], e2.strstart + e2.lookahead, i2), e2[t2(430)] += r2, e2[t2(430)] + e2.insert >= B) for (a2 = e2.strstart - e2.insert, e2.ins_h = e2.window[a2], e2.ins_h = Wt(e2, e2.ins_h, e2.window[a2 + 1]); e2.insert && (e2[t2(460)] = Wt(e2, e2[t2(460)], e2.window[a2 + B - 1]), e2[t2(425)][a2 & e2.w_mask] = e2.head[e2.ins_h], e2[t2(559)][e2.ins_h] = a2, a2++, e2[t2(453)]--, !(e2.lookahead + e2.insert < B)); ) ;
  } while (e2[t2(430)] < V && e2.strm.avail_in !== 0);
}, Yt = (e2, t2) => {
  let n2 = y, r2 = e2.pending_buf_size - 5 > e2.w_size ? e2.w_size : e2[n2(474)] - 5, i2, a2, o2, s2 = 0, c2 = e2.strm.avail_in;
  do {
    if (i2 = 65535, o2 = e2.bi_valid + 42 >> 3, e2[n2(411)].avail_out < o2 || (o2 = e2[n2(411)][n2(526)] - o2, a2 = e2.strstart - e2.block_start, i2 > a2 + e2.strm.avail_in && (i2 = a2 + e2.strm.avail_in), i2 > o2 && (i2 = o2), i2 < r2 && (i2 === 0 && t2 !== L || t2 === rt || i2 !== a2 + e2.strm.avail_in))) break;
    s2 = +(t2 === L && i2 === a2 + e2.strm.avail_in), et(e2, 0, 0, s2), e2.pending_buf[e2.pending - 4] = i2, e2.pending_buf[e2.pending - 3] = i2 >> 8, e2.pending_buf[e2.pending - 2] = ~i2, e2[n2(490)][e2.pending - 1] = ~i2 >> 8, U(e2.strm), a2 && (a2 > i2 && (a2 = i2), e2.strm.output.set(e2.window.subarray(e2.block_start, e2.block_start + a2), e2.strm.next_out), e2.strm.next_out += a2, e2.strm.avail_out -= a2, e2.strm.total_out += a2, e2.block_start += a2, i2 -= a2), i2 && (Kt(e2.strm, e2.strm[n2(503)], e2.strm.next_out, i2), e2.strm.next_out += i2, e2.strm.avail_out -= i2, e2[n2(411)].total_out += i2);
  } while (s2 === 0);
  return c2 -= e2.strm.avail_in, c2 && (c2 >= e2[n2(567)] ? (e2.matches = 2, e2[n2(473)].set(e2.strm.input[n2(576)](e2.strm[n2(492)] - e2.w_size, e2.strm[n2(492)]), 0), e2.strstart = e2.w_size, e2.insert = e2.strstart) : (e2.window_size - e2.strstart <= c2 && (e2[n2(458)] -= e2.w_size, e2.window.set(e2.window[n2(576)](e2.w_size, e2.w_size + e2.strstart), 0), e2.matches < 2 && e2.matches++, e2.insert > e2.strstart && (e2.insert = e2[n2(458)])), e2[n2(473)].set(e2.strm[n2(444)].subarray(e2.strm.next_in - c2, e2.strm.next_in), e2.strstart), e2.strstart += c2, e2.insert += c2 > e2.w_size - e2.insert ? e2.w_size - e2.insert : c2), e2.block_start = e2.strstart), e2.high_water < e2.strstart && (e2.high_water = e2[n2(458)]), s2 ? Rt : t2 !== rt && t2 !== L && e2.strm.avail_in === 0 && e2[n2(458)] === e2.block_start ? It : (o2 = e2.window_size - e2[n2(458)], e2.strm.avail_in > o2 && e2.block_start >= e2.w_size && (e2[n2(578)] -= e2.w_size, e2.strstart -= e2.w_size, e2.window.set(e2.window.subarray(e2.w_size, e2.w_size + e2.strstart), 0), e2.matches < 2 && e2.matches++, o2 += e2.w_size, e2[n2(453)] > e2.strstart && (e2[n2(453)] = e2.strstart)), o2 > e2[n2(411)].avail_in && (o2 = e2.strm.avail_in), o2 && (Kt(e2[n2(411)], e2.window, e2.strstart, o2), e2.strstart += o2, e2.insert += o2 > e2.w_size - e2.insert ? e2.w_size - e2.insert : o2), e2.high_water < e2.strstart && (e2.high_water = e2[n2(458)]), o2 = e2.bi_valid + 42 >> 3, o2 = e2.pending_buf_size - o2 > 65535 ? 65535 : e2[n2(474)] - o2, r2 = o2 > e2.w_size ? e2.w_size : o2, a2 = e2.strstart - e2.block_start, (a2 >= r2 || (a2 || t2 === L) && t2 !== rt && e2[n2(411)].avail_in === 0 && a2 <= o2) && (i2 = a2 > o2 ? o2 : a2, s2 = +(t2 === L && e2.strm.avail_in === 0 && i2 === a2), et(e2, e2.block_start, i2, s2), e2.block_start += i2, U(e2.strm)), s2 ? Lt : H);
}, Xt = (e2, t2) => {
  let n2 = y, r2, i2;
  for (; ; ) {
    if (e2.lookahead < V) {
      if (Jt(e2), e2.lookahead < V && t2 === rt) return H;
      if (e2.lookahead === 0) break;
    }
    if (r2 = 0, e2.lookahead >= B && (e2[n2(460)] = Wt(e2, e2.ins_h, e2.window[e2[n2(458)] + B - 1]), r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2[n2(460)]], e2.head[e2.ins_h] = e2.strstart), r2 !== 0 && e2.strstart - r2 <= e2[n2(567)] - V && (e2.match_length = qt(e2, r2)), e2.match_length >= B) if (i2 = I(e2, e2.strstart - e2[n2(556)], e2.match_length - B), e2.lookahead -= e2.match_length, e2.match_length <= e2[n2(573)] && e2[n2(430)] >= B) {
      e2.match_length--;
      do
        e2[n2(458)]++, e2.ins_h = Wt(e2, e2.ins_h, e2.window[e2.strstart + B - 1]), r2 = e2[n2(425)][e2.strstart & e2.w_mask] = e2[n2(559)][e2[n2(460)]], e2.head[e2.ins_h] = e2.strstart;
      while (--e2.match_length !== 0);
      e2.strstart++;
    } else e2[n2(458)] += e2[n2(462)], e2.match_length = 0, e2.ins_h = e2[n2(473)][e2.strstart], e2[n2(460)] = Wt(e2, e2.ins_h, e2.window[e2[n2(458)] + 1]);
    else i2 = I(e2, 0, e2.window[e2.strstart]), e2[n2(430)]--, e2.strstart++;
    if (i2 && (W(e2, false), e2.strm.avail_out === 0)) return H;
  }
  return e2.insert = e2[n2(458)] < B - 1 ? e2.strstart : B - 1, t2 === L ? (W(e2, true), e2.strm[n2(526)] === 0 ? Lt : Rt) : e2.sym_next && (W(e2, false), e2.strm.avail_out === 0) ? H : It;
}, Zt = (e2, t2) => {
  let n2 = y, r2, i2, a2;
  for (; ; ) {
    if (e2[n2(430)] < V) {
      if (Jt(e2), e2.lookahead < V && t2 === rt) return H;
      if (e2.lookahead === 0) break;
    }
    if (r2 = 0, e2.lookahead >= B && (e2.ins_h = Wt(e2, e2[n2(460)], e2.window[e2.strstart + B - 1]), r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2[n2(458)]), e2.prev_length = e2.match_length, e2.prev_match = e2.match_start, e2.match_length = B - 1, r2 !== 0 && e2.prev_length < e2[n2(573)] && e2.strstart - r2 <= e2.w_size - V && (e2.match_length = qt(e2, r2), e2.match_length <= 5 && (e2.strategy === dt || e2[n2(462)] === B && e2[n2(458)] - e2.match_start > 4096) && (e2.match_length = B - 1)), e2[n2(562)] >= B && e2.match_length <= e2.prev_length) {
      a2 = e2[n2(458)] + e2.lookahead - B, i2 = I(e2, e2.strstart - 1 - e2.prev_match, e2.prev_length - B), e2.lookahead -= e2.prev_length - 1, e2.prev_length -= 2;
      do
        ++e2.strstart <= a2 && (e2.ins_h = Wt(e2, e2.ins_h, e2.window[e2.strstart + B - 1]), r2 = e2[n2(425)][e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2[n2(458)]);
      while (--e2.prev_length !== 0);
      if (e2[n2(407)] = 0, e2.match_length = B - 1, e2.strstart++, i2 && (W(e2, false), e2[n2(411)].avail_out === 0)) return H;
    } else if (e2.match_available) {
      if (i2 = I(e2, 0, e2.window[e2.strstart - 1]), i2 && W(e2, false), e2.strstart++, e2.lookahead--, e2[n2(411)].avail_out === 0) return H;
    } else e2.match_available = 1, e2.strstart++, e2.lookahead--;
  }
  return e2[n2(407)] && (i2 = I(e2, 0, e2.window[e2.strstart - 1]), e2.match_available = 0), e2.insert = e2[n2(458)] < B - 1 ? e2.strstart : B - 1, t2 === L ? (W(e2, true), e2[n2(411)].avail_out === 0 ? Lt : Rt) : e2.sym_next && (W(e2, false), e2.strm.avail_out === 0) ? H : It;
}, Qt = (e2, t2) => {
  let n2 = y, r2, i2, a2, o2, s2 = e2.window;
  for (; ; ) {
    if (e2.lookahead <= Et) {
      if (Jt(e2), e2.lookahead <= Et && t2 === rt) return H;
      if (e2.lookahead === 0) break;
    }
    if (e2.match_length = 0, e2.lookahead >= B && e2.strstart > 0 && (a2 = e2.strstart - 1, i2 = s2[a2], i2 === s2[++a2] && i2 === s2[++a2] && i2 === s2[++a2])) {
      o2 = e2.strstart + Et;
      do
        ;
      while (i2 === s2[++a2] && i2 === s2[++a2] && i2 === s2[++a2] && i2 === s2[++a2] && i2 === s2[++a2] && i2 === s2[++a2] && i2 === s2[++a2] && i2 === s2[++a2] && a2 < o2);
      e2.match_length = Et - (o2 - a2), e2.match_length > e2.lookahead && (e2.match_length = e2.lookahead);
    }
    if (e2.match_length >= B ? (r2 = I(e2, 1, e2.match_length - B), e2[n2(430)] -= e2.match_length, e2.strstart += e2.match_length, e2.match_length = 0) : (r2 = I(e2, 0, e2.window[e2.strstart]), e2.lookahead--, e2.strstart++), r2 && (W(e2, false), e2.strm.avail_out === 0)) return H;
  }
  return e2.insert = 0, t2 === L ? (W(e2, true), e2.strm.avail_out === 0 ? Lt : Rt) : e2.sym_next && (W(e2, false), e2.strm.avail_out === 0) ? H : It;
}, $t = (e2, t2) => {
  let n2 = y, r2;
  for (; ; ) {
    if (e2.lookahead === 0 && (Jt(e2), e2.lookahead === 0)) {
      if (t2 === rt) return H;
      break;
    }
    if (e2[n2(462)] = 0, r2 = I(e2, 0, e2[n2(473)][e2.strstart]), e2.lookahead--, e2.strstart++, r2 && (W(e2, false), e2.strm.avail_out === 0)) return H;
  }
  return e2.insert = 0, t2 === L ? (W(e2, true), e2.strm.avail_out === 0 ? Lt : Rt) : e2.sym_next && (W(e2, false), e2.strm.avail_out === 0) ? H : It;
};
function K(e2, t2, n2, r2, i2) {
  let a2 = y;
  this[a2(537)] = e2, this.max_lazy = t2, this.nice_length = n2, this.max_chain = r2, this.func = i2;
}
var en = [new K(0, 0, 0, 0, Yt), new K(4, 4, 8, 4, Xt), new K(4, 5, 16, 8, Xt), new K(4, 6, 32, 32, Xt), new K(4, 4, 16, 16, Zt), new K(8, 16, 32, 32, Zt), new K(8, 16, 128, 128, Zt), new K(8, 32, 128, 256, Zt), new K(32, 128, 258, 1024, Zt), new K(32, 258, 258, 4096, Zt)], tn = (e2) => {
  let t2 = y;
  e2.window_size = 2 * e2.w_size, Ht(e2[t2(559)]), e2.max_lazy_match = en[e2.level].max_lazy, e2.good_match = en[e2.level].good_length, e2.nice_match = en[e2.level].nice_length, e2.max_chain_length = en[e2.level].max_chain, e2.strstart = 0, e2[t2(578)] = 0, e2.lookahead = 0, e2[t2(453)] = 0, e2.match_length = e2.prev_length = B - 1, e2.match_available = 0, e2.ins_h = 0;
};
function nn() {
  let e2 = y;
  this.strm = null, this[e2(467)] = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = _t, this[e2(566)] = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this[e2(541)] = 0, this.prev = null, this.head = null, this[e2(460)] = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this[e2(462)] = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this[e2(485)] = 0, this.max_lazy_match = 0, this[e2(481)] = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this[e2(564)] = new Uint16Array(wt * 2), this.dyn_dtree = new Uint16Array((2 * St + 1) * 2), this[e2(563)] = new Uint16Array((2 * Ct + 1) * 2), Ht(this.dyn_ltree), Ht(this.dyn_dtree), Ht(this.bl_tree), this.l_desc = null, this[e2(550)] = null, this.bl_desc = null, this.bl_count = new Uint16Array(Tt + 1), this.heap = new Uint16Array(2 * xt + 1), Ht(this[e2(398)]), this.heap_len = 0, this.heap_max = 0, this[e2(448)] = new Uint16Array(2 * xt + 1), Ht(this[e2(448)]), this.sym_buf = 0, this.lit_bufsize = 0, this.sym_next = 0, this.sym_end = 0, this[e2(510)] = 0, this.static_len = 0, this[e2(402)] = 0, this.insert = 0, this[e2(496)] = 0, this[e2(489)] = 0;
}
var rn = (e2) => {
  let t2 = y;
  if (!e2) return 1;
  let n2 = e2.state;
  return +(!n2 || n2.strm !== e2 || n2[t2(467)] !== Ot && n2.status !== kt && n2.status !== At && n2.status !== jt && n2.status !== Mt && n2.status !== Nt && n2[t2(467)] !== Pt && n2.status !== Ft);
}, an = (e2) => {
  let t2 = y;
  if (rn(e2)) return Bt(e2, z);
  e2.total_in = e2.total_out = 0, e2.data_type = gt;
  let n2 = e2.state;
  return n2.pending = 0, n2.pending_out = 0, n2[t2(501)] < 0 && (n2.wrap = -n2.wrap), n2.status = n2.wrap === 2 ? kt : n2.wrap ? Ot : Pt, e2.adler = n2.wrap === 2 ? 0 : 1, n2.last_flush = -2, $e(n2), R;
}, on = (e2) => {
  let t2 = y, n2 = an(e2);
  return n2 === R && tn(e2[t2(437)]), n2;
}, sn = (e2, t2) => rn(e2) || e2.state.wrap !== 2 ? z : (e2.state.gzhead = t2, R), cn = (e2, t2, n2, r2, i2, a2) => {
  let o2 = y;
  if (!e2) return z;
  let s2 = 1;
  if (t2 === ut && (t2 = 6), r2 < 0 ? (s2 = 0, r2 = -r2) : r2 > 15 && (s2 = 2, r2 -= 16), i2 < 1 || i2 > vt || n2 !== _t || r2 < 8 || r2 > 15 || t2 < 0 || t2 > 9 || a2 < 0 || a2 > mt || r2 === 8 && s2 !== 1) return Bt(e2, z);
  r2 === 8 && (r2 = 9);
  let c2 = new nn();
  return e2.state = c2, c2.strm = e2, c2.status = Ot, c2.wrap = s2, c2.gzhead = null, c2.w_bits = r2, c2.w_size = 1 << c2.w_bits, c2.w_mask = c2.w_size - 1, c2[o2(421)] = i2 + 7, c2.hash_size = 1 << c2.hash_bits, c2.hash_mask = c2.hash_size - 1, c2.hash_shift = ~~((c2.hash_bits + B - 1) / B), c2.window = new Uint8Array(c2.w_size * 2), c2[o2(559)] = new Uint16Array(c2[o2(403)]), c2.prev = new Uint16Array(c2.w_size), c2.lit_bufsize = 1 << i2 + 6, c2.pending_buf_size = c2.lit_bufsize * 4, c2.pending_buf = new Uint8Array(c2[o2(474)]), c2[o2(560)] = c2.lit_bufsize, c2.sym_end = (c2.lit_bufsize - 1) * 3, c2.level = t2, c2[o2(525)] = a2, c2.method = n2, on(e2);
}, ln = { deflateInit: (e2, t2) => cn(e2, t2, _t, yt, bt, ht), deflateInit2: cn, deflateReset: on, deflateResetKeep: an, deflateSetHeader: sn, deflate: (e2, t2) => {
  let n2 = y;
  if (rn(e2) || t2 > ot || t2 < 0) return e2 ? Bt(e2, z) : z;
  let r2 = e2.state;
  if (!e2.output || e2.avail_in !== 0 && !e2.input || r2[n2(467)] === Ft && t2 !== L) return Bt(e2, e2.avail_out === 0 ? lt : z);
  let i2 = r2[n2(566)];
  if (r2.last_flush = t2, r2.pending !== 0) {
    if (U(e2), e2.avail_out === 0) return r2.last_flush = -1, R;
  } else if (e2[n2(468)] === 0 && Vt(t2) <= Vt(i2) && t2 !== L) return Bt(e2, lt);
  if (r2[n2(467)] === Ft && e2.avail_in !== 0) return Bt(e2, lt);
  if (r2.status === Ot && r2.wrap === 0 && (r2.status = Pt), r2.status === Ot) {
    let t3 = _t + (r2[n2(552)] - 8 << 4) << 8, i3 = -1;
    if (i3 = r2.strategy >= ft || r2[n2(481)] < 2 ? 0 : r2.level < 6 ? 1 : r2.level === 6 ? 2 : 3, t3 |= i3 << 6, r2.strstart !== 0 && (t3 |= Dt), t3 += 31 - t3 % 31, Gt(r2, t3), r2.strstart !== 0 && (Gt(r2, e2.adler >>> 16), Gt(r2, e2.adler & 65535)), e2.adler = 1, r2.status = Pt, U(e2), r2.pending !== 0) return r2.last_flush = -1, R;
  }
  if (r2.status === kt) {
    if (e2.adler = 0, G(r2, 31), G(r2, 139), G(r2, 8), r2.gzhead) G(r2, +!!r2.gzhead.text + (r2.gzhead.hcrc ? 2 : 0) + (r2.gzhead.extra ? 4 : 0) + (r2.gzhead[n2(502)] ? 8 : 0) + (r2.gzhead.comment ? 16 : 0)), G(r2, r2[n2(416)].time & 255), G(r2, r2.gzhead[n2(400)] >> 8 & 255), G(r2, r2.gzhead.time >> 16 & 255), G(r2, r2[n2(416)].time >> 24 & 255), G(r2, r2[n2(481)] === 9 ? 2 : r2[n2(525)] >= ft || r2.level < 2 ? 4 : 0), G(r2, r2.gzhead.os & 255), r2.gzhead.extra && r2.gzhead.extra.length && (G(r2, r2.gzhead.extra.length & 255), G(r2, r2.gzhead[n2(450)].length >> 8 & 255)), r2.gzhead.hcrc && (e2.adler = F(e2.adler, r2.pending_buf, r2.pending, 0)), r2[n2(534)] = 0, r2.status = At;
    else if (G(r2, 0), G(r2, 0), G(r2, 0), G(r2, 0), G(r2, 0), G(r2, r2.level === 9 ? 2 : r2[n2(525)] >= ft || r2.level < 2 ? 4 : 0), G(r2, zt), r2[n2(467)] = Pt, U(e2), r2.pending !== 0) return r2.last_flush = -1, R;
  }
  if (r2.status === At) {
    if (r2[n2(416)].extra) {
      let t3 = r2.pending, i3 = (r2.gzhead.extra.length & 65535) - r2.gzindex;
      for (; r2[n2(482)] + i3 > r2.pending_buf_size; ) {
        let a3 = r2[n2(474)] - r2.pending;
        if (r2.pending_buf.set(r2[n2(416)].extra.subarray(r2.gzindex, r2.gzindex + a3), r2.pending), r2.pending = r2.pending_buf_size, r2.gzhead.hcrc && r2.pending > t3 && (e2.adler = F(e2.adler, r2.pending_buf, r2.pending - t3, t3)), r2.gzindex += a3, U(e2), r2.pending !== 0) return r2.last_flush = -1, R;
        t3 = 0, i3 -= a3;
      }
      let a2 = new Uint8Array(r2.gzhead.extra);
      r2.pending_buf[n2(451)](a2.subarray(r2.gzindex, r2.gzindex + i3), r2.pending), r2.pending += i3, r2.gzhead[n2(491)] && r2.pending > t3 && (e2.adler = F(e2.adler, r2.pending_buf, r2[n2(482)] - t3, t3)), r2.gzindex = 0;
    }
    r2.status = jt;
  }
  if (r2.status === jt) {
    if (r2[n2(416)][n2(502)]) {
      let t3 = r2[n2(482)], i3;
      do {
        if (r2.pending === r2.pending_buf_size) {
          if (r2[n2(416)][n2(491)] && r2.pending > t3 && (e2.adler = F(e2.adler, r2.pending_buf, r2.pending - t3, t3)), U(e2), r2.pending !== 0) return r2.last_flush = -1, R;
          t3 = 0;
        }
        i3 = r2.gzindex < r2.gzhead.name[n2(546)] ? r2.gzhead.name.charCodeAt(r2.gzindex++) & 255 : 0, G(r2, i3);
      } while (i3 !== 0);
      r2.gzhead.hcrc && r2.pending > t3 && (e2.adler = F(e2.adler, r2.pending_buf, r2[n2(482)] - t3, t3)), r2.gzindex = 0;
    }
    r2.status = Mt;
  }
  if (r2.status === Mt) {
    if (r2.gzhead.comment) {
      let t3 = r2[n2(482)], i3;
      do {
        if (r2.pending === r2[n2(474)]) {
          if (r2[n2(416)].hcrc && r2.pending > t3 && (e2.adler = F(e2.adler, r2.pending_buf, r2[n2(482)] - t3, t3)), U(e2), r2.pending !== 0) return r2.last_flush = -1, R;
          t3 = 0;
        }
        i3 = r2.gzindex < r2.gzhead[n2(463)][n2(546)] ? r2.gzhead.comment[n2(431)](r2.gzindex++) & 255 : 0, G(r2, i3);
      } while (i3 !== 0);
      r2[n2(416)].hcrc && r2.pending > t3 && (e2.adler = F(e2.adler, r2.pending_buf, r2.pending - t3, t3));
    }
    r2.status = Nt;
  }
  if (r2.status === Nt) {
    if (r2.gzhead[n2(491)]) {
      if (r2.pending + 2 > r2.pending_buf_size && (U(e2), r2.pending !== 0)) return r2.last_flush = -1, R;
      G(r2, e2.adler & 255), G(r2, e2.adler >> 8 & 255), e2.adler = 0;
    }
    if (r2.status = Pt, U(e2), r2.pending !== 0) return r2.last_flush = -1, R;
  }
  if (e2[n2(468)] !== 0 || r2.lookahead !== 0 || t2 !== rt && r2.status !== Ft) {
    let i3 = r2.level === 0 ? Yt(r2, t2) : r2[n2(525)] === ft ? $t(r2, t2) : r2.strategy === pt ? Qt(r2, t2) : en[r2.level].func(r2, t2);
    if ((i3 === Lt || i3 === Rt) && (r2[n2(467)] = Ft), i3 === H || i3 === Lt) return e2.avail_out === 0 && (r2[n2(566)] = -1), R;
    if (i3 === It && (t2 === it ? nt(r2) : t2 !== ot && (et(r2, 0, 0, false), t2 === at && (Ht(r2.head), r2.lookahead === 0 && (r2.strstart = 0, r2.block_start = 0, r2.insert = 0))), U(e2), e2.avail_out === 0)) return r2.last_flush = -1, R;
  }
  return t2 === L ? r2[n2(501)] <= 0 ? st : (r2[n2(501)] === 2 ? (G(r2, e2[n2(414)] & 255), G(r2, e2.adler >> 8 & 255), G(r2, e2.adler >> 16 & 255), G(r2, e2[n2(414)] >> 24 & 255), G(r2, e2.total_in & 255), G(r2, e2.total_in >> 8 & 255), G(r2, e2.total_in >> 16 & 255), G(r2, e2[n2(509)] >> 24 & 255)) : (Gt(r2, e2.adler >>> 16), Gt(r2, e2.adler & 65535)), U(e2), r2[n2(501)] > 0 && (r2[n2(501)] = -r2.wrap), r2.pending === 0 ? st : R) : R;
}, deflateEnd: (e2) => {
  if (rn(e2)) return z;
  let t2 = e2.state.status;
  return e2.state = null, t2 === Pt ? Bt(e2, ct) : R;
}, deflateSetDictionary: (e2, t2) => {
  let n2 = y, r2 = t2.length;
  if (rn(e2)) return z;
  let i2 = e2.state, a2 = i2.wrap;
  if (a2 === 2 || a2 === 1 && i2.status !== Ot || i2[n2(430)]) return z;
  if (a2 === 1 && (e2.adler = Ye(e2.adler, t2, r2, 0)), i2.wrap = 0, r2 >= i2.w_size) {
    a2 === 0 && (Ht(i2.head), i2.strstart = 0, i2[n2(578)] = 0, i2.insert = 0);
    let e3 = new Uint8Array(i2.w_size);
    e3.set(t2.subarray(r2 - i2.w_size, r2), 0), t2 = e3, r2 = i2.w_size;
  }
  let o2 = e2.avail_in, s2 = e2.next_in, c2 = e2.input;
  for (e2.avail_in = r2, e2[n2(492)] = 0, e2.input = t2, Jt(i2); i2.lookahead >= B; ) {
    let e3 = i2.strstart, t3 = i2.lookahead - (B - 1);
    do
      i2.ins_h = Wt(i2, i2.ins_h, i2.window[e3 + B - 1]), i2[n2(425)][e3 & i2.w_mask] = i2.head[i2.ins_h], i2.head[i2.ins_h] = e3, e3++;
    while (--t3);
    i2.strstart = e3, i2.lookahead = B - 1, Jt(i2);
  }
  return i2[n2(458)] += i2.lookahead, i2.block_start = i2.strstart, i2.insert = i2.lookahead, i2.lookahead = 0, i2.match_length = i2.prev_length = B - 1, i2.match_available = 0, e2.next_in = s2, e2.input = c2, e2.avail_in = o2, i2[n2(501)] = a2, R;
}, deflateInfo: `pako deflate (from Nodeca project)` }, un = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), dn = { assign: function(e2) {
  let t2 = y, n2 = Array.prototype[t2(565)].call(arguments, 1);
  for (; n2.length; ) {
    let r2 = n2.shift();
    if (r2) {
      if (typeof r2 != `object`) throw TypeError(r2 + t2(543));
      for (let t3 in r2) un(r2, t3) && (e2[t3] = r2[t3]);
    }
  }
  return e2;
}, flattenChunks: (e2) => {
  let t2 = y, n2 = 0;
  for (let r3 = 0, i2 = e2.length; r3 < i2; r3++) n2 += e2[r3][t2(546)];
  let r2 = new Uint8Array(n2);
  for (let n3 = 0, i2 = 0, a2 = e2.length; n3 < a2; n3++) {
    let a3 = e2[n3];
    r2.set(a3, i2), i2 += a3[t2(546)];
  }
  return r2;
} }, fn = true;
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch {
  fn = false;
}
function q(e2, t2) {
  return e2 -= 397, b()[e2];
}
var pn = new Uint8Array(256);
for (let e2 = 0; e2 < 256; e2++) pn[e2] = e2 >= 252 ? 6 : e2 >= 248 ? 5 : e2 >= 240 ? 4 : e2 >= 224 ? 3 : e2 >= 192 ? 2 : 1;
pn[254] = pn[254] = 1;
var mn = (e2) => {
  if (typeof TextEncoder == `function` && TextEncoder[y(424)].encode) return new TextEncoder().encode(e2);
  let t2, n2, r2, i2, a2, o2 = e2.length, s2 = 0;
  for (i2 = 0; i2 < o2; i2++) n2 = e2.charCodeAt(i2), (n2 & 64512) == 55296 && i2 + 1 < o2 && (r2 = e2.charCodeAt(i2 + 1), (r2 & 64512) == 56320 && (n2 = 65536 + (n2 - 55296 << 10) + (r2 - 56320), i2++)), s2 += n2 < 128 ? 1 : n2 < 2048 ? 2 : n2 < 65536 ? 3 : 4;
  for (t2 = new Uint8Array(s2), a2 = 0, i2 = 0; a2 < s2; i2++) n2 = e2.charCodeAt(i2), (n2 & 64512) == 55296 && i2 + 1 < o2 && (r2 = e2.charCodeAt(i2 + 1), (r2 & 64512) == 56320 && (n2 = 65536 + (n2 - 55296 << 10) + (r2 - 56320), i2++)), n2 < 128 ? t2[a2++] = n2 : n2 < 2048 ? (t2[a2++] = 192 | n2 >>> 6, t2[a2++] = 128 | n2 & 63) : n2 < 65536 ? (t2[a2++] = 224 | n2 >>> 12, t2[a2++] = 128 | n2 >>> 6 & 63, t2[a2++] = 128 | n2 & 63) : (t2[a2++] = 240 | n2 >>> 18, t2[a2++] = 128 | n2 >>> 12 & 63, t2[a2++] = 128 | n2 >>> 6 & 63, t2[a2++] = 128 | n2 & 63);
  return t2;
}, hn = (e2, t2) => {
  let n2 = y;
  if (t2 < 65534 && e2.subarray && fn) return String.fromCharCode.apply(null, e2.length === t2 ? e2 : e2.subarray(0, t2));
  let r2 = ``;
  for (let i2 = 0; i2 < t2; i2++) r2 += String[n2(515)](e2[i2]);
  return r2;
}, gn = { string2buf: mn, buf2string: (e2, t2) => {
  let n2 = y, r2 = t2 || e2.length;
  if (typeof TextDecoder == n2(415) && TextDecoder.prototype.decode) return new TextDecoder().decode(e2.subarray(0, t2));
  let i2, a2, o2 = Array(r2 * 2);
  for (a2 = 0, i2 = 0; i2 < r2; ) {
    let t3 = e2[i2++];
    if (t3 < 128) {
      o2[a2++] = t3;
      continue;
    }
    let n3 = pn[t3];
    if (n3 > 4) {
      o2[a2++] = 65533, i2 += n3 - 1;
      continue;
    }
    for (t3 &= n3 === 2 ? 31 : n3 === 3 ? 15 : 7; n3 > 1 && i2 < r2; ) t3 = t3 << 6 | e2[i2++] & 63, n3--;
    if (n3 > 1) {
      o2[a2++] = 65533;
      continue;
    }
    t3 < 65536 ? o2[a2++] = t3 : (t3 -= 65536, o2[a2++] = 55296 | t3 >> 10 & 1023, o2[a2++] = 56320 | t3 & 1023);
  }
  return hn(o2, a2);
}, utf8border: (e2, t2) => {
  t2 || (t2 = e2.length), t2 > e2.length && (t2 = e2.length);
  let n2 = t2 - 1;
  for (; n2 >= 0 && (e2[n2] & 192) == 128; ) n2--;
  return n2 < 0 || n2 === 0 ? t2 : n2 + pn[e2[n2]] > t2 ? n2 : t2;
} };
function _n() {
  let e2 = y;
  this.input = null, this.next_in = 0, this[e2(468)] = 0, this[e2(509)] = 0, this.output = null, this.next_out = 0, this[e2(526)] = 0, this.total_out = 0, this[e2(408)] = ``, this.state = null, this.data_type = 2, this.adler = 0;
}
var vn = _n, yn = Object.prototype.toString, { Z_NO_FLUSH: bn, Z_SYNC_FLUSH: xn, Z_FULL_FLUSH: Sn, Z_FINISH: Cn, Z_OK: wn, Z_STREAM_END: Tn, Z_DEFAULT_COMPRESSION: En, Z_DEFAULT_STRATEGY: Dn, Z_DEFLATED: On } = Qe;
function kn(e2) {
  let t2 = y;
  this.options = dn[t2(569)]({ level: En, method: On, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: Dn }, e2 || {});
  let n2 = this[t2(477)];
  n2.raw && n2[t2(443)] > 0 ? n2.windowBits = -n2.windowBits : n2[t2(429)] && n2.windowBits > 0 && n2[t2(443)] < 16 && (n2[t2(443)] += 16), this.err = 0, this[t2(408)] = ``, this.ended = false, this.chunks = [], this.strm = new vn(), this.strm.avail_out = 0;
  let r2 = ln[t2(570)](this.strm, n2.level, n2.method, n2.windowBits, n2.memLevel, n2[t2(525)]);
  if (r2 !== wn) throw Error(Ze[r2]);
  if (n2.header && ln.deflateSetHeader(this[t2(411)], n2.header), n2.dictionary) {
    let e3;
    if (e3 = typeof n2.dictionary == t2(497) ? gn.string2buf(n2.dictionary) : yn.call(n2.dictionary) === `[object ArrayBuffer]` ? new Uint8Array(n2.dictionary) : n2.dictionary, r2 = ln.deflateSetDictionary(this.strm, e3), r2 !== wn) throw Error(Ze[r2]);
    this[t2(445)] = true;
  }
}
kn.prototype.push = function(e2, t2) {
  let n2 = y, r2 = this[n2(411)], i2 = this.options[n2(456)], a2, o2;
  if (this.ended) return false;
  for (o2 = t2 === ~~t2 ? t2 : t2 === true ? Cn : bn, typeof e2 == `string` ? r2.input = gn[n2(452)](e2) : yn.call(e2) === `[object ArrayBuffer]` ? r2[n2(444)] = new Uint8Array(e2) : r2[n2(444)] = e2, r2.next_in = 0, r2.avail_in = r2.input.length; ; ) {
    if (r2[n2(526)] === 0 && (r2.output = new Uint8Array(i2), r2.next_out = 0, r2.avail_out = i2), (o2 === xn || o2 === Sn) && r2.avail_out <= 6) {
      this.onData(r2.output.subarray(0, r2.next_out)), r2.avail_out = 0;
      continue;
    }
    if (a2 = ln.deflate(r2, o2), a2 === Tn) return r2.next_out > 0 && this.onData(r2.output.subarray(0, r2[n2(488)])), a2 = ln.deflateEnd(this.strm), this[n2(530)](a2), this.ended = true, a2 === wn;
    if (r2.avail_out === 0) {
      this.onData(r2.output);
      continue;
    }
    if (o2 > 0 && r2.next_out > 0) {
      this.onData(r2.output.subarray(0, r2.next_out)), r2.avail_out = 0;
      continue;
    }
    if (r2.avail_in === 0) break;
  }
  return true;
}, kn.prototype[y(486)] = function(e2) {
  this.chunks.push(e2);
}, kn.prototype.onEnd = function(e2) {
  let t2 = y;
  e2 === wn && (this.result = dn[t2(529)](this.chunks)), this.chunks = [], this.err = e2, this.msg = this.strm[t2(408)];
};
function An(e2, t2) {
  let n2 = y, r2 = new kn(t2);
  if (r2[n2(577)](e2, true), r2.err) throw r2.msg || Ze[r2.err];
  return r2.result;
}
function jn(e2, t2) {
  return t2 || (t2 = {}), t2.raw = true, An(e2, t2);
}
function Mn(e2, t2) {
  return t2 || (t2 = {}), t2.gzip = true, An(e2, t2);
}
var Nn = { Deflate: kn, deflate: An, deflateRaw: jn, gzip: Mn, constants: Qe }, Pn = 16209, Fn = 16191, In = function(e2, t2) {
  let n2 = y, r2, i2, a2, o2, s2, c2, l2, u2, d2, f2, p2, m2, h2, g2, _2, v2, b2, x2, S2, C2, w2, T2, E2, D2, O2 = e2[n2(437)];
  r2 = e2.next_in, E2 = e2.input, i2 = r2 + (e2.avail_in - 5), a2 = e2.next_out, D2 = e2[n2(503)], o2 = a2 - (t2 - e2.avail_out), s2 = a2 + (e2[n2(526)] - 257), c2 = O2.dmax, l2 = O2[n2(404)], u2 = O2.whave, d2 = O2.wnext, f2 = O2.window, p2 = O2.hold, m2 = O2.bits, h2 = O2.lencode, g2 = O2.distcode, _2 = (1 << O2.lenbits) - 1, v2 = (1 << O2.distbits) - 1;
  aR: do {
    m2 < 15 && (p2 += E2[r2++] << m2, m2 += 8, p2 += E2[r2++] << m2, m2 += 8), b2 = h2[p2 & _2];
    aS: for (; ; ) {
      if (x2 = b2 >>> 24, p2 >>>= x2, m2 -= x2, x2 = b2 >>> 16 & 255, x2 === 0) D2[a2++] = b2 & 65535;
      else if (x2 & 16) {
        S2 = b2 & 65535, x2 &= 15, x2 && (m2 < x2 && (p2 += E2[r2++] << m2, m2 += 8), S2 += p2 & (1 << x2) - 1, p2 >>>= x2, m2 -= x2), m2 < 15 && (p2 += E2[r2++] << m2, m2 += 8, p2 += E2[r2++] << m2, m2 += 8), b2 = g2[p2 & v2];
        aT: for (; ; ) {
          if (x2 = b2 >>> 24, p2 >>>= x2, m2 -= x2, x2 = b2 >>> 16 & 255, x2 & 16) {
            if (C2 = b2 & 65535, x2 &= 15, m2 < x2 && (p2 += E2[r2++] << m2, m2 += 8, m2 < x2 && (p2 += E2[r2++] << m2, m2 += 8)), C2 += p2 & (1 << x2) - 1, C2 > c2) {
              e2.msg = `invalid distance too far back`, O2.mode = Pn;
              break aR;
            }
            if (p2 >>>= x2, m2 -= x2, x2 = a2 - o2, C2 > x2) {
              if (x2 = C2 - x2, x2 > u2 && O2[n2(410)]) {
                e2.msg = `invalid distance too far back`, O2.mode = Pn;
                break aR;
              }
              if (w2 = 0, T2 = f2, d2 === 0) {
                if (w2 += l2 - x2, x2 < S2) {
                  S2 -= x2;
                  do
                    D2[a2++] = f2[w2++];
                  while (--x2);
                  w2 = a2 - C2, T2 = D2;
                }
              } else if (d2 < x2) {
                if (w2 += l2 + d2 - x2, x2 -= d2, x2 < S2) {
                  S2 -= x2;
                  do
                    D2[a2++] = f2[w2++];
                  while (--x2);
                  if (w2 = 0, d2 < S2) {
                    x2 = d2, S2 -= x2;
                    do
                      D2[a2++] = f2[w2++];
                    while (--x2);
                    w2 = a2 - C2, T2 = D2;
                  }
                }
              } else if (w2 += d2 - x2, x2 < S2) {
                S2 -= x2;
                do
                  D2[a2++] = f2[w2++];
                while (--x2);
                w2 = a2 - C2, T2 = D2;
              }
              for (; S2 > 2; ) D2[a2++] = T2[w2++], D2[a2++] = T2[w2++], D2[a2++] = T2[w2++], S2 -= 3;
              S2 && (D2[a2++] = T2[w2++], S2 > 1 && (D2[a2++] = T2[w2++]));
            } else {
              w2 = a2 - C2;
              do
                D2[a2++] = D2[w2++], D2[a2++] = D2[w2++], D2[a2++] = D2[w2++], S2 -= 3;
              while (S2 > 2);
              S2 && (D2[a2++] = D2[w2++], S2 > 1 && (D2[a2++] = D2[w2++]));
            }
          } else if (x2 & 64) {
            e2.msg = `invalid distance code`, O2.mode = Pn;
            break aR;
          } else {
            b2 = g2[(b2 & 65535) + (p2 & (1 << x2) - 1)];
            continue aT;
          }
          break;
        }
      } else if (!(x2 & 64)) {
        b2 = h2[(b2 & 65535) + (p2 & (1 << x2) - 1)];
        continue aS;
      } else if (x2 & 32) {
        O2.mode = Fn;
        break aR;
      } else {
        e2.msg = `invalid literal/length code`, O2.mode = Pn;
        break aR;
      }
      break;
    }
  } while (r2 < i2 && a2 < s2);
  S2 = m2 >> 3, r2 -= S2, m2 -= S2 << 3, p2 &= (1 << m2) - 1, e2.next_in = r2, e2.next_out = a2, e2[n2(468)] = r2 < i2 ? 5 + (i2 - r2) : 5 - (r2 - i2), e2[n2(526)] = a2 < s2 ? 257 + (s2 - a2) : 257 - (a2 - s2), O2.hold = p2, O2.bits = m2;
}, Ln = 15, Rn = 852, zn = 592, Bn = 0, Vn = 1, Hn = 2, Un = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]), Wn = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]), Gn = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]), Kn = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]), qn = (e2, t2, n2, r2, i2, a2, o2, s2) => {
  let c2 = s2[y(405)], l2 = 0, u2 = 0, d2 = 0, f2 = 0, p2 = 0, m2 = 0, h2 = 0, g2 = 0, _2 = 0, v2 = 0, b2, x2, S2, C2, w2, T2 = null, E2, D2 = new Uint16Array(Ln + 1), O2 = new Uint16Array(Ln + 1), k2 = null, ee2, te2, A2;
  for (l2 = 0; l2 <= Ln; l2++) D2[l2] = 0;
  for (u2 = 0; u2 < r2; u2++) D2[t2[n2 + u2]]++;
  for (p2 = c2, f2 = Ln; f2 >= 1 && D2[f2] === 0; f2--) ;
  if (p2 > f2 && (p2 = f2), f2 === 0) return i2[a2++] = 20971520, i2[a2++] = 20971520, s2.bits = 1, 0;
  for (d2 = 1; d2 < f2 && D2[d2] === 0; d2++) ;
  for (p2 < d2 && (p2 = d2), g2 = 1, l2 = 1; l2 <= Ln; l2++) if (g2 <<= 1, g2 -= D2[l2], g2 < 0) return -1;
  if (g2 > 0 && (e2 === Bn || f2 !== 1)) return -1;
  for (O2[1] = 0, l2 = 1; l2 < Ln; l2++) O2[l2 + 1] = O2[l2] + D2[l2];
  for (u2 = 0; u2 < r2; u2++) t2[n2 + u2] !== 0 && (o2[O2[t2[n2 + u2]]++] = u2);
  if (e2 === Bn ? (T2 = k2 = o2, E2 = 20) : e2 === Vn ? (T2 = Un, k2 = Wn, E2 = 257) : (T2 = Gn, k2 = Kn, E2 = 0), v2 = 0, u2 = 0, l2 = d2, w2 = a2, m2 = p2, h2 = 0, S2 = -1, _2 = 1 << p2, C2 = _2 - 1, e2 === Vn && _2 > Rn || e2 === Hn && _2 > zn) return 1;
  for (; ; ) {
    ee2 = l2 - h2, o2[u2] + 1 < E2 ? (te2 = 0, A2 = o2[u2]) : o2[u2] >= E2 ? (te2 = k2[o2[u2] - E2], A2 = T2[o2[u2] - E2]) : (te2 = 96, A2 = 0), b2 = 1 << l2 - h2, x2 = 1 << m2, d2 = x2;
    do
      x2 -= b2, i2[w2 + (v2 >> h2) + x2] = ee2 << 24 | te2 << 16 | A2 | 0;
    while (x2 !== 0);
    for (b2 = 1 << l2 - 1; v2 & b2; ) b2 >>= 1;
    if (b2 === 0 ? v2 = 0 : (v2 &= b2 - 1, v2 += b2), u2++, --D2[l2] === 0) {
      if (l2 === f2) break;
      l2 = t2[n2 + o2[u2]];
    }
    if (l2 > p2 && (v2 & C2) !== S2) {
      for (h2 === 0 && (h2 = p2), w2 += d2, m2 = l2 - h2, g2 = 1 << m2; m2 + h2 < f2 && (g2 -= D2[m2 + h2], !(g2 <= 0)); ) m2++, g2 <<= 1;
      if (_2 += 1 << m2, e2 === Vn && _2 > Rn || e2 === Hn && _2 > zn) return 1;
      S2 = v2 & C2, i2[S2] = p2 << 24 | m2 << 16 | w2 - a2 | 0;
    }
  }
  return v2 !== 0 && (i2[w2 + v2] = l2 - h2 << 24 | 4194304), s2.bits = p2, 0;
}, Jn = 0, Yn = 1, Xn = 2, { Z_FINISH: Zn, Z_BLOCK: Qn, Z_TREES: $n, Z_OK: er, Z_STREAM_END: tr, Z_NEED_DICT: nr, Z_STREAM_ERROR: J, Z_DATA_ERROR: rr, Z_MEM_ERROR: ir, Z_BUF_ERROR: ar, Z_DEFLATED: or } = Qe, sr = 16180, cr = 16181, lr = 16182, ur = 16183, dr = 16184, fr = 16185, pr = 16186, mr = 16187, hr = 16188, gr = 16189, _r = 16190, Y = 16191, vr = 16192, yr = 16193, br = 16194, xr = 16195, Sr = 16196, Cr = 16197, wr = 16198, Tr = 16199, Er = 16200, Dr = 16201, Or = 16202, kr = 16203, Ar = 16204, jr = 16205, Mr = 16206, Nr = 16207, Pr = 16208, X = 16209, Fr = 16210, Ir = 16211, Lr = 852, Rr = 592, zr = 15, Br = (e2) => (e2 >>> 24 & 255) + (e2 >>> 8 & 65280) + ((e2 & 65280) << 8) + ((e2 & 255) << 24);
function Vr() {
  let e2 = y;
  this.strm = null, this.mode = 0, this.last = false, this[e2(501)] = 0, this.havedict = false, this.flags = 0, this[e2(455)] = 0, this.check = 0, this.total = 0, this[e2(559)] = null, this[e2(548)] = 0, this.wsize = 0, this[e2(418)] = 0, this.wnext = 0, this[e2(473)] = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this[e2(539)] = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this[e2(447)] = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this[e2(435)] = 0;
}
var Hr = (e2) => {
  if (!e2) return 1;
  let t2 = e2.state;
  return +(!t2 || t2.strm !== e2 || t2.mode < sr || t2.mode > Ir);
}, Ur = (e2) => {
  let t2 = y;
  if (Hr(e2)) return J;
  let n2 = e2.state;
  return e2.total_in = e2[t2(406)] = n2[t2(454)] = 0, e2.msg = ``, n2.wrap && (e2.adler = n2[t2(501)] & 1), n2.mode = sr, n2.last = 0, n2.havedict = 0, n2.flags = -1, n2[t2(455)] = 32768, n2[t2(559)] = null, n2.hold = 0, n2[t2(405)] = 0, n2.lencode = n2.lendyn = new Int32Array(Lr), n2[t2(539)] = n2.distdyn = new Int32Array(Rr), n2.sane = 1, n2.back = -1, er;
}, Wr = (e2) => {
  let t2 = y;
  if (Hr(e2)) return J;
  let n2 = e2.state;
  return n2[t2(404)] = 0, n2.whave = 0, n2.wnext = 0, Ur(e2);
}, Gr = (e2, t2) => {
  let n2 = y, r2;
  if (Hr(e2)) return J;
  let i2 = e2.state;
  return t2 < 0 ? (r2 = 0, t2 = -t2) : (r2 = (t2 >> 4) + 5, t2 < 48 && (t2 &= 15)), t2 && (t2 < 8 || t2 > 15) ? J : (i2.window !== null && i2.wbits !== t2 && (i2.window = null), i2[n2(501)] = r2, i2[n2(548)] = t2, Wr(e2));
}, Kr = (e2, t2) => {
  if (!e2) return J;
  let n2 = new Vr();
  e2.state = n2, n2.strm = e2, n2.window = null, n2.mode = sr;
  let r2 = Gr(e2, t2);
  return r2 !== er && (e2.state = null), r2;
}, qr = (e2) => Kr(e2, zr), Jr = true, Yr, Xr, Zr = (e2) => {
  let t2 = y;
  if (Jr) {
    Yr = new Int32Array(512), Xr = new Int32Array(32);
    let n2 = 0;
    for (; n2 < 144; ) e2.lens[n2++] = 8;
    for (; n2 < 256; ) e2.lens[n2++] = 9;
    for (; n2 < 280; ) e2[t2(447)][n2++] = 7;
    for (; n2 < 288; ) e2[t2(447)][n2++] = 8;
    for (qn(Yn, e2.lens, 0, 288, Yr, 0, e2[t2(441)], { bits: 9 }), n2 = 0; n2 < 32; ) e2.lens[n2++] = 5;
    qn(Xn, e2.lens, 0, 32, Xr, 0, e2.work, { bits: 5 }), Jr = false;
  }
  e2.lencode = Yr, e2.lenbits = 9, e2.distcode = Xr, e2.distbits = 5;
}, Qr = (e2, t2, n2, r2) => {
  let i2 = y, a2, o2 = e2[i2(437)];
  return o2.window === null && (o2.wsize = 1 << o2.wbits, o2.wnext = 0, o2[i2(418)] = 0, o2.window = new Uint8Array(o2.wsize)), r2 >= o2.wsize ? (o2.window.set(t2.subarray(n2 - o2.wsize, n2), 0), o2.wnext = 0, o2[i2(418)] = o2[i2(404)]) : (a2 = o2[i2(404)] - o2.wnext, a2 > r2 && (a2 = r2), o2.window.set(t2.subarray(n2 - r2, n2 - r2 + a2), o2.wnext), r2 -= a2, r2 ? (o2[i2(473)].set(t2.subarray(n2 - r2, n2), 0), o2.wnext = r2, o2.whave = o2[i2(404)]) : (o2.wnext += a2, o2.wnext === o2[i2(404)] && (o2[i2(423)] = 0), o2.whave < o2.wsize && (o2.whave += a2))), 0;
}, Z = { inflateReset: Wr, inflateReset2: Gr, inflateResetKeep: Ur, inflateInit: qr, inflateInit2: Kr, inflate: (e2, t2) => {
  let n2 = y, r2, i2, a2, o2, s2, c2, l2, u2, d2, f2, p2, m2, h2, g2, _2 = 0, v2, b2, x2, S2, C2, w2, T2, E2, D2 = new Uint8Array(4), O2, k2, ee2 = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  if (Hr(e2) || !e2.output || !e2.input && e2.avail_in !== 0) return J;
  r2 = e2.state, r2.mode === Y && (r2[n2(442)] = vr), s2 = e2[n2(488)], a2 = e2.output, l2 = e2.avail_out, o2 = e2.next_in, i2 = e2[n2(444)], c2 = e2[n2(468)], u2 = r2.hold, d2 = r2.bits, f2 = c2, p2 = l2, E2 = er;
  aT: for (; ; ) switch (r2[n2(442)]) {
    case sr:
      if (r2.wrap === 0) {
        r2.mode = vr;
        break;
      }
      for (; d2 < 16; ) {
        if (c2 === 0) break aT;
        c2--, u2 += i2[o2++] << d2, d2 += 8;
      }
      if (r2.wrap & 2 && u2 === 35615) {
        r2[n2(548)] === 0 && (r2.wbits = 15), r2[n2(557)] = 0, D2[0] = u2 & 255, D2[1] = u2 >>> 8 & 255, r2.check = F(r2.check, D2, 2, 0), u2 = 0, d2 = 0, r2.mode = cr;
        break;
      }
      if (r2.head && (r2[n2(559)].done = false), !(r2.wrap & 1) || (((u2 & 255) << 8) + (u2 >> 8)) % 31) {
        e2.msg = `incorrect header check`, r2[n2(442)] = X;
        break;
      }
      if ((u2 & 15) !== or) {
        e2.msg = `unknown compression method`, r2.mode = X;
        break;
      }
      if (u2 >>>= 4, d2 -= 4, T2 = (u2 & 15) + 8, r2.wbits === 0 && (r2[n2(548)] = T2), T2 > 15 || T2 > r2.wbits) {
        e2.msg = `invalid window size`, r2.mode = X;
        break;
      }
      r2.dmax = 1 << r2[n2(548)], r2.flags = 0, e2.adler = r2.check = 1, r2.mode = u2 & 512 ? gr : Y, u2 = 0, d2 = 0;
      break;
    case cr:
      for (; d2 < 16; ) {
        if (c2 === 0) break aT;
        c2--, u2 += i2[o2++] << d2, d2 += 8;
      }
      if (r2[n2(504)] = u2, (r2.flags & 255) !== or) {
        e2[n2(408)] = `unknown compression method`, r2.mode = X;
        break;
      }
      if (r2.flags & 57344) {
        e2.msg = `unknown header flags set`, r2.mode = X;
        break;
      }
      r2[n2(559)] && (r2.head.text = u2 >> 8 & 1), r2.flags & 512 && r2.wrap & 4 && (D2[0] = u2 & 255, D2[1] = u2 >>> 8 & 255, r2.check = F(r2.check, D2, 2, 0)), u2 = 0, d2 = 0, r2.mode = lr;
    case lr:
      for (; d2 < 32; ) {
        if (c2 === 0) break aT;
        c2--, u2 += i2[o2++] << d2, d2 += 8;
      }
      r2.head && (r2[n2(559)].time = u2), r2.flags & 512 && r2.wrap & 4 && (D2[0] = u2 & 255, D2[1] = u2 >>> 8 & 255, D2[2] = u2 >>> 16 & 255, D2[3] = u2 >>> 24 & 255, r2[n2(557)] = F(r2[n2(557)], D2, 4, 0)), u2 = 0, d2 = 0, r2.mode = ur;
    case ur:
      for (; d2 < 16; ) {
        if (c2 === 0) break aT;
        c2--, u2 += i2[o2++] << d2, d2 += 8;
      }
      r2.head && (r2[n2(559)].xflags = u2 & 255, r2.head.os = u2 >> 8), r2.flags & 512 && r2.wrap & 4 && (D2[0] = u2 & 255, D2[1] = u2 >>> 8 & 255, r2[n2(557)] = F(r2.check, D2, 2, 0)), u2 = 0, d2 = 0, r2.mode = dr;
    case dr:
      if (r2.flags & 1024) {
        for (; d2 < 16; ) {
          if (c2 === 0) break aT;
          c2--, u2 += i2[o2++] << d2, d2 += 8;
        }
        r2[n2(546)] = u2, r2[n2(559)] && (r2.head.extra_len = u2), r2[n2(504)] & 512 && r2[n2(501)] & 4 && (D2[0] = u2 & 255, D2[1] = u2 >>> 8 & 255, r2.check = F(r2.check, D2, 2, 0)), u2 = 0, d2 = 0;
      } else r2.head && (r2.head.extra = null);
      r2[n2(442)] = fr;
    case fr:
      if (r2[n2(504)] & 1024 && (m2 = r2.length, m2 > c2 && (m2 = c2), m2 && (r2.head && (T2 = r2.head.extra_len - r2.length, r2.head.extra || (r2.head.extra = new Uint8Array(r2.head.extra_len)), r2.head.extra[n2(451)](i2.subarray(o2, o2 + m2), T2)), r2[n2(504)] & 512 && r2.wrap & 4 && (r2.check = F(r2.check, i2, m2, o2)), c2 -= m2, o2 += m2, r2.length -= m2), r2.length)) break aT;
      r2.length = 0, r2.mode = pr;
    case pr:
      if (r2.flags & 2048) {
        if (c2 === 0) break aT;
        m2 = 0;
        do
          T2 = i2[o2 + m2++], r2.head && T2 && r2.length < 65536 && (r2.head.name += String.fromCharCode(T2));
        while (T2 && m2 < c2);
        if (r2.flags & 512 && r2.wrap & 4 && (r2.check = F(r2.check, i2, m2, o2)), c2 -= m2, o2 += m2, T2) break aT;
      } else r2[n2(559)] && (r2.head.name = null);
      r2.length = 0, r2.mode = mr;
    case mr:
      if (r2.flags & 4096) {
        if (c2 === 0) break aT;
        m2 = 0;
        do
          T2 = i2[o2 + m2++], r2[n2(559)] && T2 && r2.length < 65536 && (r2.head.comment += String[n2(515)](T2));
        while (T2 && m2 < c2);
        if (r2.flags & 512 && r2.wrap & 4 && (r2[n2(557)] = F(r2[n2(557)], i2, m2, o2)), c2 -= m2, o2 += m2, T2) break aT;
      } else r2.head && (r2.head.comment = null);
      r2.mode = hr;
    case hr:
      if (r2.flags & 512) {
        for (; d2 < 16; ) {
          if (c2 === 0) break aT;
          c2--, u2 += i2[o2++] << d2, d2 += 8;
        }
        if (r2.wrap & 4 && u2 !== (r2.check & 65535)) {
          e2[n2(408)] = `header crc mismatch`, r2.mode = X;
          break;
        }
        u2 = 0, d2 = 0;
      }
      r2.head && (r2.head.hcrc = r2.flags >> 9 & 1, r2.head[n2(538)] = true), e2.adler = r2[n2(557)] = 0, r2.mode = Y;
      break;
    case gr:
      for (; d2 < 32; ) {
        if (c2 === 0) break aT;
        c2--, u2 += i2[o2++] << d2, d2 += 8;
      }
      e2.adler = r2.check = Br(u2), u2 = 0, d2 = 0, r2.mode = _r;
    case _r:
      if (r2.havedict === 0) return e2[n2(488)] = s2, e2.avail_out = l2, e2.next_in = o2, e2[n2(468)] = c2, r2.hold = u2, r2[n2(405)] = d2, nr;
      e2.adler = r2.check = 1, r2[n2(442)] = Y;
    case Y:
      if (t2 === Qn || t2 === $n) break aT;
    case vr:
      if (r2.last) {
        u2 >>>= d2 & 7, d2 -= d2 & 7, r2.mode = Mr;
        break;
      }
      for (; d2 < 3; ) {
        if (c2 === 0) break aT;
        c2--, u2 += i2[o2++] << d2, d2 += 8;
      }
      switch (r2.last = u2 & 1, u2 >>>= 1, --d2, u2 & 3) {
        case 0:
          r2.mode = yr;
          break;
        case 1:
          if (Zr(r2), r2.mode = Tr, t2 === $n) {
            u2 >>>= 2, d2 -= 2;
            break aT;
          }
          break;
        case 2:
          r2.mode = Sr;
          break;
        case 3:
          e2.msg = `invalid block type`, r2.mode = X;
      }
      u2 >>>= 2, d2 -= 2;
      break;
    case yr:
      for (u2 >>>= d2 & 7, d2 -= d2 & 7; d2 < 32; ) {
        if (c2 === 0) break aT;
        c2--, u2 += i2[o2++] << d2, d2 += 8;
      }
      if ((u2 & 65535) != (u2 >>> 16 ^ 65535)) {
        e2.msg = `invalid stored block lengths`, r2[n2(442)] = X;
        break;
      }
      if (r2[n2(546)] = u2 & 65535, u2 = 0, d2 = 0, r2.mode = br, t2 === $n) break aT;
    case br:
      r2.mode = xr;
    case xr:
      if (m2 = r2.length, m2) {
        if (m2 > c2 && (m2 = c2), m2 > l2 && (m2 = l2), m2 === 0) break aT;
        a2[n2(451)](i2[n2(576)](o2, o2 + m2), s2), c2 -= m2, o2 += m2, l2 -= m2, s2 += m2, r2.length -= m2;
        break;
      }
      r2[n2(442)] = Y;
      break;
    case Sr:
      for (; d2 < 14; ) {
        if (c2 === 0) break aT;
        c2--, u2 += i2[o2++] << d2, d2 += 8;
      }
      if (r2[n2(514)] = (u2 & 31) + 257, u2 >>>= 5, d2 -= 5, r2.ndist = (u2 & 31) + 1, u2 >>>= 5, d2 -= 5, r2.ncode = (u2 & 15) + 4, u2 >>>= 4, d2 -= 4, r2.nlen > 286 || r2[n2(472)] > 30) {
        e2.msg = n2(500), r2.mode = X;
        break;
      }
      r2.have = 0, r2.mode = Cr;
    case Cr:
      for (; r2.have < r2.ncode; ) {
        for (; d2 < 3; ) {
          if (c2 === 0) break aT;
          c2--, u2 += i2[o2++] << d2, d2 += 8;
        }
        r2.lens[ee2[r2.have++]] = u2 & 7, u2 >>>= 3, d2 -= 3;
      }
      for (; r2.have < 19; ) r2.lens[ee2[r2.have++]] = 0;
      if (r2.lencode = r2.lendyn, r2.lenbits = 7, O2 = { bits: r2.lenbits }, E2 = qn(Jn, r2.lens, 0, 19, r2.lencode, 0, r2.work, O2), r2.lenbits = O2.bits, E2) {
        e2.msg = `invalid code lengths set`, r2.mode = X;
        break;
      }
      r2.have = 0, r2.mode = wr;
    case wr:
      for (; r2[n2(527)] < r2.nlen + r2.ndist; ) {
        for (; _2 = r2.lencode[u2 & (1 << r2[n2(476)]) - 1], v2 = _2 >>> 24, b2 = _2 >>> 16 & 255, x2 = _2 & 65535, !(v2 <= d2); ) {
          if (c2 === 0) break aT;
          c2--, u2 += i2[o2++] << d2, d2 += 8;
        }
        if (x2 < 16) u2 >>>= v2, d2 -= v2, r2.lens[r2[n2(527)]++] = x2;
        else {
          if (x2 === 16) {
            for (k2 = v2 + 2; d2 < k2; ) {
              if (c2 === 0) break aT;
              c2--, u2 += i2[o2++] << d2, d2 += 8;
            }
            if (u2 >>>= v2, d2 -= v2, r2[n2(527)] === 0) {
              e2[n2(408)] = n2(432), r2.mode = X;
              break;
            }
            T2 = r2.lens[r2.have - 1], m2 = 3 + (u2 & 3), u2 >>>= 2, d2 -= 2;
          } else if (x2 === 17) {
            for (k2 = v2 + 3; d2 < k2; ) {
              if (c2 === 0) break aT;
              c2--, u2 += i2[o2++] << d2, d2 += 8;
            }
            u2 >>>= v2, d2 -= v2, T2 = 0, m2 = 3 + (u2 & 7), u2 >>>= 3, d2 -= 3;
          } else {
            for (k2 = v2 + 7; d2 < k2; ) {
              if (c2 === 0) break aT;
              c2--, u2 += i2[o2++] << d2, d2 += 8;
            }
            u2 >>>= v2, d2 -= v2, T2 = 0, m2 = 11 + (u2 & 127), u2 >>>= 7, d2 -= 7;
          }
          if (r2.have + m2 > r2[n2(514)] + r2[n2(472)]) {
            e2.msg = `invalid bit length repeat`, r2[n2(442)] = X;
            break;
          }
          for (; m2--; ) r2.lens[r2.have++] = T2;
        }
      }
      if (r2[n2(442)] === X) break;
      if (r2.lens[256] === 0) {
        e2.msg = `invalid code -- missing end-of-block`, r2.mode = X;
        break;
      }
      if (r2.lenbits = 9, O2 = { bits: r2.lenbits }, E2 = qn(Yn, r2[n2(447)], 0, r2.nlen, r2.lencode, 0, r2.work, O2), r2[n2(476)] = O2.bits, E2) {
        e2[n2(408)] = `invalid literal/lengths set`, r2.mode = X;
        break;
      }
      if (r2[n2(413)] = 6, r2.distcode = r2.distdyn, O2 = { bits: r2.distbits }, E2 = qn(Xn, r2[n2(447)], r2.nlen, r2.ndist, r2.distcode, 0, r2[n2(441)], O2), r2.distbits = O2.bits, E2) {
        e2.msg = `invalid distances set`, r2.mode = X;
        break;
      }
      if (r2.mode = Tr, t2 === $n) break aT;
    case Tr:
      r2.mode = Er;
    case Er:
      if (c2 >= 6 && l2 >= 258) {
        e2.next_out = s2, e2[n2(526)] = l2, e2.next_in = o2, e2.avail_in = c2, r2[n2(516)] = u2, r2.bits = d2, In(e2, p2), s2 = e2.next_out, a2 = e2.output, l2 = e2.avail_out, o2 = e2.next_in, i2 = e2.input, c2 = e2[n2(468)], u2 = r2.hold, d2 = r2.bits, r2.mode === Y && (r2.back = -1);
        break;
      }
      for (r2[n2(440)] = 0; _2 = r2.lencode[u2 & (1 << r2.lenbits) - 1], v2 = _2 >>> 24, b2 = _2 >>> 16 & 255, x2 = _2 & 65535, !(v2 <= d2); ) {
        if (c2 === 0) break aT;
        c2--, u2 += i2[o2++] << d2, d2 += 8;
      }
      if (b2 && !(b2 & 240)) {
        for (S2 = v2, C2 = b2, w2 = x2; _2 = r2[n2(542)][w2 + ((u2 & (1 << S2 + C2) - 1) >> S2)], v2 = _2 >>> 24, b2 = _2 >>> 16 & 255, x2 = _2 & 65535, !(S2 + v2 <= d2); ) {
          if (c2 === 0) break aT;
          c2--, u2 += i2[o2++] << d2, d2 += 8;
        }
        u2 >>>= S2, d2 -= S2, r2.back += S2;
      }
      if (u2 >>>= v2, d2 -= v2, r2.back += v2, r2[n2(546)] = x2, b2 === 0) {
        r2[n2(442)] = jr;
        break;
      }
      if (b2 & 32) {
        r2.back = -1, r2.mode = Y;
        break;
      }
      if (b2 & 64) {
        e2.msg = `invalid literal/length code`, r2.mode = X;
        break;
      }
      r2[n2(450)] = b2 & 15, r2.mode = Dr;
    case Dr:
      if (r2.extra) {
        for (k2 = r2.extra; d2 < k2; ) {
          if (c2 === 0) break aT;
          c2--, u2 += i2[o2++] << d2, d2 += 8;
        }
        r2.length += u2 & (1 << r2.extra) - 1, u2 >>>= r2[n2(450)], d2 -= r2.extra, r2.back += r2.extra;
      }
      r2.was = r2[n2(546)], r2.mode = Or;
    case Or:
      for (; _2 = r2[n2(539)][u2 & (1 << r2.distbits) - 1], v2 = _2 >>> 24, b2 = _2 >>> 16 & 255, x2 = _2 & 65535, !(v2 <= d2); ) {
        if (c2 === 0) break aT;
        c2--, u2 += i2[o2++] << d2, d2 += 8;
      }
      if (!(b2 & 240)) {
        for (S2 = v2, C2 = b2, w2 = x2; _2 = r2.distcode[w2 + ((u2 & (1 << S2 + C2) - 1) >> S2)], v2 = _2 >>> 24, b2 = _2 >>> 16 & 255, x2 = _2 & 65535, !(S2 + v2 <= d2); ) {
          if (c2 === 0) break aT;
          c2--, u2 += i2[o2++] << d2, d2 += 8;
        }
        u2 >>>= S2, d2 -= S2, r2[n2(440)] += S2;
      }
      if (u2 >>>= v2, d2 -= v2, r2.back += v2, b2 & 64) {
        e2.msg = `invalid distance code`, r2.mode = X;
        break;
      }
      r2[n2(553)] = x2, r2[n2(450)] = b2 & 15, r2.mode = kr;
    case kr:
      if (r2.extra) {
        for (k2 = r2.extra; d2 < k2; ) {
          if (c2 === 0) break aT;
          c2--, u2 += i2[o2++] << d2, d2 += 8;
        }
        r2.offset += u2 & (1 << r2.extra) - 1, u2 >>>= r2.extra, d2 -= r2.extra, r2.back += r2.extra;
      }
      if (r2[n2(553)] > r2.dmax) {
        e2.msg = `invalid distance too far back`, r2[n2(442)] = X;
        break;
      }
      r2.mode = Ar;
    case Ar:
      if (l2 === 0) break aT;
      if (m2 = p2 - l2, r2[n2(553)] > m2) {
        if (m2 = r2.offset - m2, m2 > r2[n2(418)] && r2.sane) {
          e2[n2(408)] = n2(434), r2.mode = X;
          break;
        }
        m2 > r2[n2(423)] ? (m2 -= r2[n2(423)], h2 = r2.wsize - m2) : h2 = r2.wnext - m2, m2 > r2.length && (m2 = r2.length), g2 = r2.window;
      } else g2 = a2, h2 = s2 - r2.offset, m2 = r2[n2(546)];
      m2 > l2 && (m2 = l2), l2 -= m2, r2.length -= m2;
      do
        a2[s2++] = g2[h2++];
      while (--m2);
      r2.length === 0 && (r2.mode = Er);
      break;
    case jr:
      if (l2 === 0) break aT;
      a2[s2++] = r2.length, l2--, r2.mode = Er;
      break;
    case Mr:
      if (r2.wrap) {
        for (; d2 < 32; ) {
          if (c2 === 0) break aT;
          c2--, u2 |= i2[o2++] << d2, d2 += 8;
        }
        if (p2 -= l2, e2.total_out += p2, r2.total += p2, r2.wrap & 4 && p2 && (e2.adler = r2.check = r2.flags ? F(r2.check, a2, p2, s2 - p2) : Ye(r2.check, a2, p2, s2 - p2)), p2 = l2, r2.wrap & 4 && (r2.flags ? u2 : Br(u2)) !== r2.check) {
          e2.msg = `incorrect data check`, r2.mode = X;
          break;
        }
        u2 = 0, d2 = 0;
      }
      r2.mode = Nr;
    case Nr:
      if (r2.wrap && r2.flags) {
        for (; d2 < 32; ) {
          if (c2 === 0) break aT;
          c2--, u2 += i2[o2++] << d2, d2 += 8;
        }
        if (r2[n2(501)] & 4 && u2 !== (r2.total & 4294967295)) {
          e2.msg = `incorrect length check`, r2[n2(442)] = X;
          break;
        }
        u2 = 0, d2 = 0;
      }
      r2.mode = Pr;
    case Pr:
      E2 = tr;
      break aT;
    case X:
      E2 = rr;
      break aT;
    case Fr:
      return ir;
    case Ir:
    default:
      return J;
  }
  return e2.next_out = s2, e2.avail_out = l2, e2.next_in = o2, e2.avail_in = c2, r2.hold = u2, r2.bits = d2, (r2.wsize || p2 !== e2.avail_out && r2.mode < X && (r2.mode < Mr || t2 !== Zn)) && Qr(e2, e2.output, e2[n2(488)], p2 - e2.avail_out), f2 -= e2.avail_in, p2 -= e2.avail_out, e2.total_in += f2, e2[n2(406)] += p2, r2.total += p2, r2[n2(501)] & 4 && p2 && (e2[n2(414)] = r2[n2(557)] = r2.flags ? F(r2.check, a2, p2, e2.next_out - p2) : Ye(r2.check, a2, p2, e2.next_out - p2)), e2.data_type = r2.bits + (r2.last ? 64 : 0) + (r2.mode === Y ? 128 : 0) + (r2.mode === Tr || r2.mode === br ? 256 : 0), (f2 === 0 && p2 === 0 || t2 === Zn) && E2 === er && (E2 = ar), E2;
}, inflateEnd: (e2) => {
  if (Hr(e2)) return J;
  let t2 = e2.state;
  return t2.window && (t2.window = null), e2.state = null, er;
}, inflateGetHeader: (e2, t2) => {
  let n2 = y;
  if (Hr(e2)) return J;
  let r2 = e2.state;
  return r2.wrap & 2 ? (r2[n2(559)] = t2, t2.done = false, er) : J;
}, inflateSetDictionary: (e2, t2) => {
  let n2 = y, r2 = t2.length, i2, a2, o2;
  return Hr(e2) || (i2 = e2[n2(437)], i2.wrap !== 0 && i2.mode !== _r) ? J : i2.mode === _r && (a2 = 1, a2 = Ye(a2, t2, r2, 0), a2 !== i2.check) ? rr : (o2 = Qr(e2, t2, r2, r2), o2 ? (i2.mode = Fr, ir) : (i2[n2(480)] = 1, er));
}, inflateInfo: y(561) };
function $r() {
  let e2 = y;
  this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this[e2(483)] = 0, this.name = ``, this.comment = ``, this[e2(491)] = 0, this.done = false;
}
var ei = $r, ti = Object.prototype.toString, { Z_NO_FLUSH: ni, Z_FINISH: ri, Z_OK: ii, Z_STREAM_END: ai, Z_NEED_DICT: oi, Z_STREAM_ERROR: si, Z_DATA_ERROR: ci, Z_MEM_ERROR: li } = Qe;
function ui(e2) {
  let t2 = y;
  this.options = dn.assign({ chunkSize: 1024 * 64, windowBits: 15, to: `` }, e2 || {});
  let n2 = this.options;
  n2.raw && n2.windowBits >= 0 && n2.windowBits < 16 && (n2.windowBits = -n2.windowBits, n2[t2(443)] === 0 && (n2.windowBits = -15)), n2.windowBits >= 0 && n2[t2(443)] < 16 && !(e2 && e2.windowBits) && (n2[t2(443)] += 32), n2.windowBits > 15 && n2.windowBits < 48 && (n2.windowBits & 15 || (n2.windowBits |= 15)), this.err = 0, this.msg = ``, this.ended = false, this.chunks = [], this[t2(411)] = new vn(), this.strm.avail_out = 0;
  let r2 = Z.inflateInit2(this.strm, n2.windowBits);
  if (r2 !== ii || (this.header = new ei(), Z.inflateGetHeader(this.strm, this.header), n2.dictionary && (typeof n2.dictionary == `string` ? n2.dictionary = gn.string2buf(n2[t2(493)]) : ti[t2(508)](n2[t2(493)]) === t2(439) && (n2[t2(493)] = new Uint8Array(n2.dictionary)), n2.raw && (r2 = Z.inflateSetDictionary(this.strm, n2[t2(493)]), r2 !== ii)))) throw Error(Ze[r2]);
}
ui.prototype.push = function(e2, t2) {
  let n2 = y, r2 = this.strm, i2 = this.options.chunkSize, a2 = this[n2(477)].dictionary, o2, s2, c2;
  if (this.ended) return false;
  for (s2 = t2 === ~~t2 ? t2 : t2 === true ? ri : ni, ti[n2(508)](e2) === `[object ArrayBuffer]` ? r2.input = new Uint8Array(e2) : r2.input = e2, r2.next_in = 0, r2[n2(468)] = r2.input.length; ; ) {
    for (r2.avail_out === 0 && (r2.output = new Uint8Array(i2), r2.next_out = 0, r2.avail_out = i2), o2 = Z.inflate(r2, s2), o2 === oi && a2 && (o2 = Z.inflateSetDictionary(r2, a2), o2 === ii ? o2 = Z.inflate(r2, s2) : o2 === ci && (o2 = oi)); r2[n2(468)] > 0 && o2 === ai && r2.state.wrap > 0 && e2[r2.next_in] !== 0; ) Z.inflateReset(r2), o2 = Z.inflate(r2, s2);
    switch (o2) {
      case si:
      case ci:
      case oi:
      case li:
        return this[n2(530)](o2), this.ended = true, false;
    }
    if (c2 = r2.avail_out, r2.next_out && (r2.avail_out === 0 || o2 === ai)) if (this.options.to === `string`) {
      let e3 = gn.utf8border(r2.output, r2.next_out), t3 = r2[n2(488)] - e3, a3 = gn.buf2string(r2.output, e3);
      r2.next_out = t3, r2.avail_out = i2 - t3, t3 && r2.output.set(r2.output.subarray(e3, e3 + t3), 0), this.onData(a3);
    } else this.onData(r2.output[n2(546)] === r2.next_out ? r2.output : r2.output.subarray(0, r2.next_out));
    if (!(o2 === ii && c2 === 0)) {
      if (o2 === ai) return o2 = Z.inflateEnd(this.strm), this.onEnd(o2), this.ended = true, true;
      if (r2.avail_in === 0) break;
    }
  }
  return true;
}, ui.prototype[y(486)] = function(e2) {
  this.chunks.push(e2);
}, ui.prototype.onEnd = function(e2) {
  let t2 = y;
  e2 === ii && (this.options.to === `string` ? this[t2(531)] = this.chunks.join(``) : this.result = dn.flattenChunks(this.chunks)), this.chunks = [], this.err = e2, this.msg = this.strm.msg;
};
function di(e2, t2) {
  let n2 = y, r2 = new ui(t2);
  if (r2.push(e2), r2.err) throw r2[n2(408)] || Ze[r2[n2(532)]];
  return r2.result;
}
function fi(e2, t2) {
  return t2 || (t2 = {}), t2.raw = true, di(e2, t2);
}
var pi = { Inflate: ui, inflate: di, inflateRaw: fi, ungzip: di, constants: Qe }, { Deflate: mi, deflate: hi, deflateRaw: gi, gzip: _i } = Nn, { Inflate: vi, inflate: yi, inflateRaw: bi, ungzip: xi } = pi, Si = yi, Ci = bi;
m();
var wi = 3734674313, Ti = 35, Ei = 36, Di = 5, Oi = new TextDecoder(y(528)), Q = { VERSION: 1, TITLE: 2, AUTHOR: 3, YEAR: 4, MONTH: 5, DAY: 6, CATEGORY: 7, PUBLISHER: 8, VENDOR: 9, CID: 10, CONTENT_LENGTH: 11, IMAGE: 14, MIXED_IMAGE: 15, TEXT_SEGMENT_INDEX: 129, COVER: 130, CHAPTER_OFFSETS: 131, CHAPTER_TITLES: 132, PAGE_OFFSETS: 135, SPLASH: 241 }, ki = class {
  constructor(e2) {
    let t2 = y;
    v(this, `view`, void 0), v(this, `bytes`, void 0), v(this, `offset`, 0), this[t2(522)] = new Uint8Array(e2), this.view = new DataView(e2);
  }
  get remaining() {
    return this.bytes.length - this.offset;
  }
  peek() {
    let e2 = y;
    return this.remaining > 0 ? this.bytes[this[e2(553)]] : void 0;
  }
  readUint8() {
    this.ensure(1);
    let e2 = this.view.getUint8(this.offset);
    return this.offset += 1, e2;
  }
  [y(511)]() {
    let e2 = y;
    this.ensure(2);
    let t2 = this[e2(479)].getUint16(this.offset, true);
    return this[e2(553)] += 2, t2;
  }
  readUint32() {
    let e2 = y;
    this[e2(535)](4);
    let t2 = this.view[e2(506)](this.offset, true);
    return this.offset += 4, t2;
  }
  readBytes(e2) {
    let t2 = Math.max(0, Math.min(e2, this.remaining)), n2 = this.offset;
    return this.offset += t2, this.bytes.slice(n2, n2 + t2);
  }
  ensure(e2) {
    let t2 = y;
    if (this[t2(459)] < e2) throw Error(`UMD \u6587\u4EF6\u7ED3\u6784\u4E0D\u5B8C\u6574\uFF0C\u8BFB\u53D6\u65F6\u9047\u5230\u610F\u5916\u7ED3\u5C3E`);
  }
}, Ai = (e2, t2 = 0) => e2.length < t2 + 4 ? 0 : new DataView(e2[y(572)], e2.byteOffset + t2, 4).getUint32(0, true), ji = (e2) => e2.length ? Oi.decode(e2) : ``, $ = (e2) => ji(e2).replace(/\u0000+$/g, ``).trim(), Mi = (e2) => e2.replace(/\u0000+$/g, ``).replace(/\u2029/g, `
`)[y(436)](/\r\n?/g, `
`), Ni = (e2, t2 = 0) => {
  let n2 = y, r2 = e2[n2(469)]((e3, t3) => e3 + t3.length, 0), i2 = t2 > 0 ? Math.min(t2, r2) : r2, a2 = new Uint8Array(i2), o2 = 0;
  for (let t3 of e2) {
    if (o2 >= i2) break;
    let e3 = t3[n2(576)](0, Math[n2(419)](t3.length, i2 - o2));
    a2.set(e3, o2), o2 += e3.length;
  }
  return a2;
}, Pi = (e2) => {
  try {
    return Si(e2);
  } catch {
    return Ci(e2);
  }
}, Fi = (e2) => {
  let t2 = y, n2 = [], r2 = 0;
  for (; r2 < e2.length; ) {
    let i2 = e2[r2];
    if (r2 += 1, !i2 || r2 + i2 > e2.length) break;
    n2[t2(577)]($(e2.subarray(r2, r2 + i2))), r2 += i2;
  }
  return n2;
}, Ii = (e2) => {
  let t2 = [], n2 = new DataView(e2.buffer, e2.byteOffset, e2.byteLength);
  for (let r2 = 0; r2 + 4 <= e2.length; r2 += 4) t2.push(n2.getUint32(r2, true));
  return t2;
}, Li = (e2) => e2.length >= 8 && e2[0] === 137 && e2[1] === 80 && e2[2] === 78 && e2[3] === 71 ? { extension: `png`, mimeType: `image/png` } : e2.length >= 3 && e2[0] === 255 && e2[1] === 216 && e2[2] === 255 ? { extension: `jpg`, mimeType: `image/jpeg` } : e2.length >= 6 && e2[0] === 71 && e2[1] === 73 && e2[2] === 70 ? { extension: `gif`, mimeType: `image/gif` } : e2.length >= 2 && e2[0] === 66 && e2[1] === 77 ? { extension: `bmp`, mimeType: `image/bmp` } : e2.length >= 12 && e2[0] === 82 && e2[1] === 73 && e2[2] === 70 && e2[3] === 70 && e2[8] === 87 && e2[9] === 69 && e2[10] === 66 && e2[11] === 80 ? { extension: `webp`, mimeType: y(507) } : { extension: `bin`, mimeType: `application/octet-stream` }, Ri = (e2, t2, n2) => {
  let { extension: r2, mimeType: i2 } = Li(e2);
  return { bytes: e2, extension: r2, id: t2 + `-` + n2 + `-` + e2.length, mimeType: i2 };
}, zi = (e2) => e2 === 1 ? `text` : e2 === 2 ? `comic` : e2 === 3 ? y(478) : `unknown`, Bi = ({ day: e2, month: t2, year: n2 }) => [n2, t2, e2].filter(Boolean).join(`-`), Vi = (e2, t2, n2) => {
  let r2 = y;
  if (!e2.length) return [];
  let i2 = (t2.length ? t2 : [0]).map((t3) => Math[r2(574)](0, Math.min(t3, e2.length)))[r2(438)]((e3, t3, n3) => t3 === 0 || e3 > n3[t3 - 1]);
  return i2.map((t3, a2) => {
    let o2 = r2, s2 = a2 + 1 < i2[o2(546)] ? i2[a2 + 1] : e2[o2(546)], c2 = t3 - t3 % 2, l2 = s2 - s2 % 2;
    return { content: Mi(ji(e2[o2(576)](c2, l2))), end: l2, id: `chapter-` + a2 + `-` + c2, images: [], start: c2, title: n2[a2] || `\u7AE0\u8282 ` + (a2 + 1) };
  });
}, Hi = (e2, t2, n2) => {
  let r2 = y;
  if (!e2[r2(546)]) return [];
  let i2 = (t2.length ? t2 : [0])[r2(558)]((t3) => Math.max(0, Math.min(t3, e2.length)))[r2(438)]((e3, t3, n3) => t3 === 0 || e3 > n3[t3 - 1]);
  return i2.map((t3, r3) => {
    let a2 = r3 + 1 < i2.length ? i2[r3 + 1] : e2.length;
    return { content: ``, end: a2, id: `image-chapter-` + r3 + `-` + t3, images: e2.slice(t3, a2), start: t3, title: n2[r3] || `\u56FE\u96C6 ` + (r3 + 1) };
  });
}, Ui = (e2) => e2.map((e3, t2) => ({ content: ``, end: t2, id: `empty-chapter-` + t2, images: [], start: t2, title: e3 || y(547) + (t2 + 1) })), Wi = (e2) => {
  let t2 = y, n2 = new ki(e2), r2 = { author: ``, category: ``, day: ``, month: ``, publishedAt: ``, publisher: ``, title: ``, vendor: ``, year: `` }, i2 = /* @__PURE__ */ new Map(), a2 = [], o2 = [], s2 = [], c2 = 0, l2 = [], u2 = [], d2 = 0, f2, p2 = 0;
  if (n2.readUint32() !== wi) throw Error(`\u4E0D\u662F\u6709\u6548\u7684 UMD \u7535\u5B50\u4E66\u6587\u4EF6`);
  for (; n2.remaining > 0 && n2.peek() === Ti; ) {
    n2.readUint8();
    let e3 = n2.readUint16(), a3 = n2.readUint8(), m3 = Math.max(0, n2.readUint8() - Di), h3 = n2.readBytes(m3), g2 = e3 === Q.CID || e3 === Q.SPLASH ? c2 : e3;
    switch (e3) {
      case Q.VERSION:
        p2 = h3[0] || a3;
        break;
      case Q.TITLE:
        r2[t2(536)] = $(h3);
        break;
      case Q.AUTHOR:
        r2.author = $(h3);
        break;
      case Q.YEAR:
        r2[t2(545)] = $(h3);
        break;
      case Q[t2(471)]:
        r2.month = $(h3);
        break;
      case Q[t2(518)]:
        r2.day = $(h3);
        break;
      case Q[t2(513)]:
        r2[t2(420)] = $(h3);
        break;
      case Q[t2(495)]:
        r2.publisher = $(h3);
        break;
      case Q.VENDOR:
        r2.vendor = $(h3);
        break;
      case Q.CONTENT_LENGTH:
        d2 = Ai(h3);
        break;
      case Q.TEXT_SEGMENT_INDEX:
      case Q[t2(449)]:
      case Q.CHAPTER_TITLES:
      case Q[t2(517)]:
        i2.set(e3, Ai(h3));
        break;
      case Q[t2(399)]:
        i2.set(e3, Ai(h3, 1));
        break;
      case Q.IMAGE:
      case Q[t2(466)]:
        p2 || (p2 = e3 === Q.MIXED_IMAGE ? 3 : 2);
        break;
      default:
        break;
    }
    for (c2 = g2 || c2; n2.peek() === Ei; ) {
      n2[t2(397)]();
      let e4 = n2.readUint32(), r3 = Math[t2(574)](0, n2.readUint32() - 9), a4 = n2.readBytes(r3);
      switch (g2) {
        case Q.COVER:
          f2 = Ri(a4, `cover`, e4);
          break;
        case Q.CHAPTER_OFFSETS:
          l2 = Ii(a4);
          break;
        case Q.CHAPTER_TITLES:
          e4 === i2.get(Q.CHAPTER_TITLES) ? u2 = Fi(a4) : o2.push(a4);
          break;
        case Q.IMAGE:
        case Q.MIXED_IMAGE:
          s2.push(Ri(a4, `image`, s2.length));
          break;
        default:
          break;
      }
    }
  }
  let m2 = Ni(o2.map((e3) => {
    try {
      return Pi(e3);
    } catch (e4) {
      return a2.push(e4 instanceof Error ? e4.message : String(e4)), new Uint8Array();
    }
  }), d2);
  d2 > m2.length && o2[t2(546)] && a2[t2(577)](`UMD \u6B63\u6587\u957F\u5EA6\u5C0F\u4E8E\u58F0\u660E\u957F\u5EA6\uFF0C\u6587\u4EF6\u53EF\u80FD\u4E0D\u5B8C\u6574`);
  let h2 = Vi(m2, l2, u2);
  return h2.length ? s2.length && p2 !== 1 && (h2 = Hi(s2, l2, u2)) : h2 = Hi(s2, l2, u2), !h2[t2(546)] && u2.length && (h2 = Ui(u2)), r2.publishedAt = Bi(r2), { author: r2.author, category: r2.category, chapters: h2, contentLength: d2 || m2[t2(546)], cover: f2, kind: zi(p2), publishedAt: r2.publishedAt, publisher: r2.publisher, rawType: p2, title: r2.title || `UMD \u7535\u5B50\u4E66`, vendor: r2.vendor, warnings: a2 };
}, Gi = { class: y(446) }, Ki = { class: `umd-title` }, qi = { class: y(544) }, Ji = [`disabled`], Yi = { class: `umd-progress` }, Xi = [`disabled`], Zi = { class: `umd-body` }, Qi = { key: 0, class: `umd-toc` }, $i = { class: `umd-toc-head` }, ea = { class: `umd-toc-list` }, ta = [`onClick`], na = { class: `umd-stage-wrap` }, ra = { key: 0, class: `umd-book-head` }, ia = [`src`, `alt`], aa = { key: 0 }, oa = { key: 1 }, sa = { key: 1, class: `umd-chapter` }, ca = { key: 0, class: `umd-image-list` }, la = [`src`, `alt`], ua = [`textContent`], da = { key: 2, class: `umd-empty` }, fa = { key: 2, class: `umd-warning` }, pa = { key: 0, class: `umd-state` }, ma = { key: 1, class: `umd-state error` }, ha = _(f({ __name: `UmdViewer`, props: { data: {} }, setup(f2) {
  let m2 = y, h2 = f2, _2 = t(`loading`), v2 = t(``), b2 = t(true), x2 = t(null), S2 = t(0), C2 = t(null), w2 = /* @__PURE__ */ new Map(), T2 = a(() => {
    var _a;
    let e2 = q;
    return (_a = x2.value) == null ? void 0 : _a[e2(470)][S2.value];
  }), E2 = a(() => x2.value ? [x2[m2(499)].author, x2.value.category, x2.value.publishedAt][m2(438)](Boolean).join(m2(549)) : ``), D2 = a(() => {
    var _a;
    let e2 = m2, t2 = ((_a = x2.value) == null ? void 0 : _a.chapters[e2(546)]) || 0;
    return t2 ? S2.value + 1 + `/` + t2 : `0/0`;
  }), O2 = a(() => S2.value <= 0), k2 = a(() => {
    var _a;
    let e2 = m2, t2 = ((_a = x2.value) == null ? void 0 : _a.chapters.length) || 0;
    return t2 === 0 || S2[e2(499)] >= t2 - 1;
  }), ee2 = a(() => {
    var _a;
    return ((_a = x2.value) == null ? void 0 : _a.warnings.filter(Boolean).join(`\uFF1B`)) || ``;
  }), te2 = (e2) => {
    let t2 = m2, n2 = new Uint8Array(e2.bytes[t2(412)]);
    return n2[t2(451)](e2.bytes), n2.buffer;
  }, A2 = (e2) => {
    if (!e2) return ``;
    let t2 = w2.get(e2.id);
    if (t2) return t2;
    let n2 = URL.createObjectURL(new Blob([te2(e2)], { type: e2.mimeType }));
    return w2.set(e2.id, n2), n2;
  }, ne2 = a(() => {
    var _a;
    let e2 = m2;
    return A2((_a = x2.value) == null ? void 0 : _a[e2(540)]);
  }), j2 = a(() => {
    var _a;
    return ((_a = T2.value) == null ? void 0 : _a.images.map((e2) => ({ image: e2, url: A2(e2) }))) || [];
  }), re2 = () => {
    w2.forEach((e2) => URL.revokeObjectURL(e2)), w2.clear();
  }, ie2 = (function() {
    var e2 = g(function* () {
      var e3;
      yield o(), (e3 = C2.value) == null || e3.scrollTo({ top: 0 });
    });
    return function() {
      return e2.apply(this, arguments);
    };
  })(), ae2 = (function() {
    var e2 = g(function* (e3) {
      S2.value = e3, b2.value = false, yield ie2();
    });
    return function(t2) {
      return e2.apply(this, arguments);
    };
  })(), oe2 = (function() {
    var e2 = g(function* () {
      O2.value || (--S2.value, yield ie2());
    });
    return function() {
      return e2.apply(this, arguments);
    };
  })(), se2 = (function() {
    var e2 = g(function* () {
      k2.value || (S2.value += 1, yield ie2());
    });
    return function() {
      return e2.apply(this, arguments);
    };
  })();
  return s((function() {
    var e2 = g(function* () {
      let e3 = q;
      _2.value = `loading`, v2[e3(499)] = ``, re2();
      try {
        yield o(), x2.value = Wi(h2.data.slice(0)), S2.value = 0, _2.value = e3(433);
      } catch (e4) {
        console.error(e4), v2.value = e4 instanceof Error ? e4.message : String(e4), _2.value = `error`;
      }
    });
    return function() {
      return e2.apply(this, arguments);
    };
  })()), u(() => {
    re2();
  }), (t2, a2) => {
    var _a, _b, _c, _d;
    let o2 = m2;
    return d(), e(`div`, { class: r([`umd-viewer`, { "umd-viewer--toc-hidden": !b2.value }]) }, [c(`div`, Gi, [c(`button`, { type: `button`, class: r([`umd-icon-button`, { active: b2.value }]), title: `\u76EE\u5F55`, onClick: a2[0] || (a2[0] = (e2) => b2.value = !b2.value) }, [...a2[1] || (a2[1] = [c(`span`, null, null, -1)])], 2), c(o2(575), Ki, [c(o2(427), null, n(((_a = x2.value) == null ? void 0 : _a.title) || `UMD \u7535\u5B50\u4E66`), 1), c(`span`, null, n(E2[o2(499)] || ((_b = T2.value) == null ? void 0 : _b.title) || `\u9605\u8BFB\u4E2D`), 1)]), c(`div`, qi, [c(`button`, { type: o2(461), class: `umd-button`, disabled: _2.value !== `ready` || O2[o2(499)], onClick: oe2 }, ` \u4E0A\u4E00\u7AE0 `, 8, Ji), c(`span`, Yi, n(D2[o2(499)]), 1), c(`button`, { type: `button`, class: `umd-button`, disabled: _2.value !== `ready` || k2.value, onClick: se2 }, ` \u4E0B\u4E00\u7AE0 `, 8, Xi)])]), c(`div`, Zi, [b2.value ? (d(), e(`aside`, Qi, [c(`div`, $i, [a2[2] || (a2[2] = c(`strong`, null, `\u76EE\u5F55`, -1)), c(`span`, null, n(((_c = x2[o2(499)]) == null ? void 0 : _c.chapters.length) || 0) + ` \u9879`, 1)]), c(`div`, ea, [(d(true), e(p, null, l((_d = x2.value) == null ? void 0 : _d.chapters, (t3, i2) => (d(), e(`button`, { key: t3.id, type: `button`, class: r([`umd-toc-item`, { active: i2 === S2[o2(499)] }]), onClick: (e2) => ae2(i2) }, n(t3.title), 11, ta))), 128))])])) : i(``, true), c(`main`, na, [c(o2(571), { ref_key: o2(523), ref: C2, class: `umd-stage` }, [x2.value && (ne2.value || E2[o2(499)]) ? (d(), e(`header`, ra, [ne2.value ? (d(), e(`img`, { key: 0, src: ne2.value, alt: x2[o2(499)][o2(536)] }, null, 8, ia)) : i(``, true), c(`div`, null, [c(`h1`, null, n(x2.value.title), 1), E2.value ? (d(), e(`p`, aa, n(E2[o2(499)]), 1)) : i(``, true), x2.value.publisher || x2[o2(499)].vendor ? (d(), e(`p`, oa, n([x2.value.publisher, x2.value.vendor].filter(Boolean)[o2(533)](` / `)), 1)) : i(``, true)])])) : i(``, true), T2[o2(499)] ? (d(), e(`section`, sa, [c(`h2`, null, n(T2[o2(499)].title), 1), j2.value.length ? (d(), e(`div`, ca, [(d(true), e(p, null, l(j2.value, (t3) => (d(), e(`figure`, { key: t3.image.id }, [c(`img`, { src: t3.url, alt: T2.value.title }, null, 8, la)]))), 128))])) : i(``, true), T2[o2(499)].content ? (d(), e(`div`, { key: 1, class: o2(487), textContent: n(T2.value.content) }, null, 8, ua)) : j2.value.length ? i(``, true) : (d(), e(o2(575), da, `\u672A\u89E3\u6790\u5230\u6B63\u6587\u5185\u5BB9`))])) : i(``, true), ee2.value ? (d(), e(`div`, fa, n(ee2[o2(499)]), 1)) : i(``, true)], 512), _2.value === `loading` ? (d(), e(`div`, pa, `\u6B63\u5728\u89E3\u6790 UMD...`)) : _2[o2(499)] === `error` ? (d(), e(o2(575), ma, n(v2.value), 1)) : i(``, true)])])], 2);
  };
} }), [[`__scopeId`, `data-v-79b242a1`]]);
export {
  ha as default
};
