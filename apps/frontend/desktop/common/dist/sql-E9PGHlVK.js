function e(e2, t2) {
  return e2 -= 318, n()[e2];
}
(function(t2, n2) {
  let r = e, i = t2();
  for (; ; ) try {
    if (parseInt(r(339)) / 1 + -parseInt(r(347)) / 2 * (-parseInt(r(332)) / 3) + parseInt(r(329)) / 4 + -parseInt(r(324)) / 5 * (-parseInt(r(343)) / 6) + -parseInt(r(330)) / 7 * (parseInt(r(341)) / 8) + parseInt(r(327)) / 9 * (parseInt(r(346)) / 10) + -parseInt(r(349)) / 11 === n2) break;
    i.push(i.shift());
  } catch {
    i.push(i.shift());
  }
})(n, 432379);
function t(t2) {
  let n2 = e, r = t2.regex, i = t2.COMMENT(`--`, `$`), a = { scope: n2(337), variants: [{ begin: /'/, end: /'/, contains: [{ match: /''/ }] }] }, o = { begin: /"/, end: /"/, contains: [{ match: /""/ }] }, s = [n2(334), `false`, `unknown`], c = [`double precision`, `large object`, `with timezone`, n2(335)], l = `bigint.binary.blob.boolean.char.character.clob.date.dec.decfloat.decimal.float.int.integer.interval.nchar.nclob.national.numeric.real.row.smallint.time.timestamp.varchar.varying.varbinary`.split(`.`), u = [`add`, n2(325), `collation`, `desc`, `final`, n2(336), n2(345), n2(320)], d = n2(348).split(`.`), f = `abs.acos.array_agg.asin.atan.avg.cast.ceil.ceiling.coalesce.corr.cos.cosh.count.covar_pop.covar_samp.cume_dist.dense_rank.deref.element.exp.extract.first_value.floor.json_array.json_arrayagg.json_exists.json_object.json_objectagg.json_query.json_table.json_table_primitive.json_value.lag.last_value.lead.listagg.ln.log.log10.lower.max.min.mod.nth_value.ntile.nullif.percent_rank.percentile_cont.percentile_disc.position.position_regex.power.rank.regr_avgx.regr_avgy.regr_count.regr_intercept.regr_r2.regr_slope.regr_sxx.regr_sxy.regr_syy.row_number.sin.sinh.sqrt.stddev_pop.stddev_samp.substring.substring_regex.sum.tan.tanh.translate.translate_regex.treat.trim.trim_array.unnest.upper.value_of.var_pop.var_samp.width_bucket`[n2(319)](`.`), p = [`current_catalog`, n2(342), `current_default_transform_group`, n2(331), `current_role`, `current_schema`, `current_transform_group_for_type`, `current_user`, n2(321), `system_time`, `system_user`, `current_time`, `localtime`, n2(326), n2(333)], m = [n2(328), `insert into`, n2(340), `foreign key`, `not null`, n2(322), `add constraint`, `grouping sets`, `on overflow`, n2(338), `respect nulls`, `ignore nulls`, n2(344), `nulls last`, `depth first`, `breadth first`], h = f, g = [...d, ...u].filter((e2) => !f.includes(e2)), _ = { scope: `variable`, match: /@[a-z0-9][a-z0-9_]*/ }, v = { scope: `operator`, match: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/, relevance: 0 }, y = { match: r.concat(/\b/, r.either(...h), /\s*\(/), relevance: 0, keywords: { built_in: h } };
  function b(e2) {
    let t3 = n2;
    return r.concat(/\b/, r[t3(350)](...e2.map((e3) => e3[t3(323)](/\s+/, `\\s+`))), /\b/);
  }
  let x = { scope: `keyword`, match: b(m), relevance: 0 };
  function S(e2, { exceptions: t3, when: n3 } = {}) {
    let r2 = n3;
    return t3 || (t3 = []), e2.map((e3) => e3.match(/\|\d+$/) || t3.includes(e3) ? e3 : r2(e3) ? e3 + `|0` : e3);
  }
  return { name: `SQL`, case_insensitive: true, illegal: /[{}]|<\//, keywords: { $pattern: /\b[\w\.]+/, keyword: S(g, { when: (e2) => e2.length < 3 }), literal: s, type: l, built_in: p }, contains: [{ scope: n2(318), match: b(c) }, x, y, _, a, o, t2.C_NUMBER_MODE, t2.C_BLOCK_COMMENT_MODE, i, v] };
}
function n() {
  let e2 = `9SflzbD,create table,542588TibYUh,206710UTpfiB,current_path,18JrceWc,localtimestamp,true,without timezone,first,string,character set,453874bUUeSp,primary key,80XuPJcp,current_date,424410GgFErL,nulls first,last,7074130CsQVaz,70586tCZBSE,abs.acos.all.allocate.alter.and.any.are.array.array_agg.array_max_cardinality.as.asensitive.asin.asymmetric.at.atan.atomic.authorization.avg.begin.begin_frame.begin_partition.between.bigint.binary.blob.boolean.both.by.call.called.cardinality.cascaded.case.cast.ceil.ceiling.char.char_length.character.character_length.check.classifier.clob.close.coalesce.collate.collect.column.commit.condition.connect.constraint.contains.convert.copy.corr.corresponding.cos.cosh.count.covar_pop.covar_samp.create.cross.cube.cume_dist.current.current_catalog.current_date.current_default_transform_group.current_path.current_role.current_row.current_schema.current_time.current_timestamp.current_path.current_role.current_transform_group_for_type.current_user.cursor.cycle.date.day.deallocate.dec.decimal.decfloat.declare.default.define.delete.dense_rank.deref.describe.deterministic.disconnect.distinct.double.drop.dynamic.each.element.else.empty.end.end_frame.end_partition.end-exec.equals.escape.every.except.exec.execute.exists.exp.external.extract.false.fetch.filter.first_value.float.floor.for.foreign.frame_row.free.from.full.function.fusion.get.global.grant.group.grouping.groups.having.hold.hour.identity.in.indicator.initial.inner.inout.insensitive.insert.int.integer.intersect.intersection.interval.into.is.join.json_array.json_arrayagg.json_exists.json_object.json_objectagg.json_query.json_table.json_table_primitive.json_value.lag.language.large.last_value.lateral.lead.leading.left.like.like_regex.listagg.ln.local.localtime.localtimestamp.log.log10.lower.match.match_number.match_recognize.matches.max.member.merge.method.min.minute.mod.modifies.module.month.multiset.national.natural.nchar.nclob.new.no.none.normalize.not.nth_value.ntile.null.nullif.numeric.octet_length.occurrences_regex.of.offset.old.omit.on.one.only.open.or.order.out.outer.over.overlaps.overlay.parameter.partition.pattern.per.percent.percent_rank.percentile_cont.percentile_disc.period.portion.position.position_regex.power.precedes.precision.prepare.primary.procedure.ptf.range.rank.reads.real.recursive.ref.references.referencing.regr_avgx.regr_avgy.regr_count.regr_intercept.regr_r2.regr_slope.regr_sxx.regr_sxy.regr_syy.release.result.return.returns.revoke.right.rollback.rollup.row.row_number.rows.running.savepoint.scope.scroll.search.second.seek.select.sensitive.session_user.set.show.similar.sin.sinh.skip.smallint.some.specific.specifictype.sql.sqlexception.sqlstate.sqlwarning.sqrt.start.static.stddev_pop.stddev_samp.submultiset.subset.substring.substring_regex.succeeds.sum.symmetric.system.system_time.system_user.table.tablesample.tan.tanh.then.time.timestamp.timezone_hour.timezone_minute.to.trailing.translate.translate_regex.translation.treat.trigger.trim.trim_array.true.truncate.uescape.union.unique.unknown.unnest.update.upper.user.using.value.values.value_of.var_pop.var_samp.varbinary.varchar.varying.versioning.when.whenever.where.width_bucket.window.with.within.without.year,16371993jYVsPM,either,type,split,view,session_user,alter table,replace,50PcAVQA,asc,current_timestamp`.split(`,`);
  return n = function() {
    return e2;
  }, n();
}
export {
  t as default
};
