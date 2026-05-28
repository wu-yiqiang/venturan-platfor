(function(e2, t2) {
  let r = n, i = e2();
  for (; ; ) try {
    if (parseInt(r(370)) / 1 + -parseInt(r(390)) / 2 * (-parseInt(r(372)) / 3) + parseInt(r(366)) / 4 * (parseInt(r(374)) / 5) + parseInt(r(377)) / 6 * (-parseInt(r(383)) / 7) + parseInt(r(386)) / 8 * (parseInt(r(391)) / 9) + parseInt(r(389)) / 10 * (parseInt(r(376)) / 11) + -parseInt(r(368)) / 12 === t2) break;
    i.push(i.shift());
  } catch {
    i.push(i.shift());
  }
})(e, 893878);
function e() {
  let t2 = `739202WQyuHr.function.117609htOvjH.elif.5fuUabH.variable.19656285cokaWs.4188ZaCLnO.join.test.COMMENT.shopt.Bash.9086luKVIb.read.bind.37568BqWouq.else.push.10JjXiGy.58pmRqMm.1017yHnYbU.3709092fQKMbw.local.39852756DoCnmY.case`.split(`.`);
  return e = function() {
    return t2;
  }, e();
}
function t(e2) {
  let t2 = n, r = e2.regex, i = {}, a = { begin: /\$\{/, end: /\}/, contains: [`self`, { begin: /:-/, contains: [i] }] };
  Object.assign(i, { className: t2(375), variants: [{ begin: r.concat(/\$[\w\d#@][\w\d_]*/, `(?![\\w\\d])(?![$])`) }, a] });
  let o = { className: `subst`, begin: /\$\(/, end: /\)/, contains: [e2.BACKSLASH_ESCAPE] }, s = e2.inherit(e2[t2(380)](), { match: [/(^|\s)/, /#.*$/], scope: { 2: `comment` } }), c = { begin: /<<-?\s*(?=\w+)/, starts: { contains: [e2.END_SAME_AS_BEGIN({ begin: /(\w+)/, end: /(\w+)/, className: `string` })] } }, l = { className: `string`, begin: /"/, end: /"/, contains: [e2.BACKSLASH_ESCAPE, i, o] };
  o.contains[t2(388)](l);
  let u = { match: /\\"/ }, d = { className: `string`, begin: /'/, end: /'/ }, f = { match: /\\'/ }, p = { begin: /\$?\(\(/, end: /\)\)/, contains: [{ begin: /\d+#[0-9a-f]+/, className: `number` }, e2.NUMBER_MODE, i] }, m = e2.SHEBANG({ binary: `(` + [`fish`, `bash`, `zsh`, `sh`, `csh`, `ksh`, `tcsh`, `dash`, `scsh`][t2(378)](`|`) + `)`, relevance: 10 }), h = { className: t2(371), begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/, returnBegin: true, contains: [e2.inherit(e2.TITLE_MODE, { begin: /\w[\w\d_]*/ })], relevance: 0 }, g = [`if`, `then`, t2(387), t2(373), `fi`, `time`, `for`, `while`, `until`, `in`, `do`, `done`, t2(369), `esac`, `coproc`, `function`, `select`], _ = [`true`, `false`], v = { match: /(\/[a-z._-]+)+/ }, y = [`break`, `cd`, `continue`, `eval`, `exec`, `exit`, `export`, `getopts`, `hash`, `pwd`, `readonly`, `return`, `shift`, t2(379), `times`, `trap`, `umask`, `unset`], b = [`alias`, t2(385), `builtin`, `caller`, `command`, `declare`, `echo`, `enable`, `help`, `let`, t2(367), `logout`, `mapfile`, `printf`, t2(384), `readarray`, `source`, `sudo`, `type`, `typeset`, `ulimit`, `unalias`], x = `autoload.bg.bindkey.bye.cap.chdir.clone.comparguments.compcall.compctl.compdescribe.compfiles.compgroups.compquote.comptags.comptry.compvalues.dirs.disable.disown.echotc.echoti.emulate.fc.fg.float.functions.getcap.getln.history.integer.jobs.kill.limit.log.noglob.popd.print.pushd.pushln.rehash.sched.setcap.setopt.stat.suspend.ttyctl.unfunction.unhash.unlimit.unsetopt.vared.wait.whence.where.which.zcompile.zformat.zftp.zle.zmodload.zparseopts.zprof.zpty.zregexparse.zsocket.zstyle.ztcp`.split(`.`), S = `chcon.chgrp.chown.chmod.cp.dd.df.dir.dircolors.ln.ls.mkdir.mkfifo.mknod.mktemp.mv.realpath.rm.rmdir.shred.sync.touch.truncate.vdir.b2sum.base32.base64.cat.cksum.comm.csplit.cut.expand.fmt.fold.head.join.md5sum.nl.numfmt.od.paste.ptx.pr.sha1sum.sha224sum.sha256sum.sha384sum.sha512sum.shuf.sort.split.sum.tac.tail.tr.tsort.unexpand.uniq.wc.arch.basename.chroot.date.dirname.du.echo.env.expr.factor.groups.hostid.id.link.logname.nice.nohup.nproc.pathchk.pinky.printenv.printf.pwd.readlink.runcon.seq.sleep.stat.stdbuf.stty.tee.test.timeout.tty.uname.unlink.uptime.users.who.whoami.yes`.split(`.`);
  return { name: t2(382), aliases: [`sh`, `zsh`], keywords: { $pattern: /\b[a-z][a-z0-9._-]+\b/, keyword: g, literal: _, built_in: [...y, ...b, `set`, t2(381), ...x, ...S] }, contains: [m, e2.SHEBANG(), h, p, s, c, v, l, u, d, f, i] };
}
function n(t2, n2) {
  return t2 -= 366, e()[t2];
}
export {
  t as default
};
