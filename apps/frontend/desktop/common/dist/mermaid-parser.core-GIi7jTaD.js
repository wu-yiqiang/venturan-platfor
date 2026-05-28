import { t as e } from "./preload-helper-zJ_50EbN.js";
import { _ as t, g as n, h as r, m as i, p as a, v as o, __tla as __tla_0 } from "./index-D-g3WoLo.js";
let Uz, vB, Lz, mz, kz, eB, $z, pz, pB, Az, qz, Nz, Wz, Rz, lB, DL, Ez, Pz, Jz, uB, Tz, mB;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var s = X;
  (function(e2, t2) {
    let n2 = X, r2 = e2();
    for (; ; ) try {
      if (-parseInt(n2(1393)) / 1 + -parseInt(n2(785)) / 2 * (-parseInt(n2(1021)) / 3) + parseInt(n2(1603)) / 4 + -parseInt(n2(357)) / 5 * (-parseInt(n2(339)) / 6) + -parseInt(n2(1038)) / 7 * (-parseInt(n2(1208)) / 8) + -parseInt(n2(869)) / 9 + -parseInt(n2(1787)) / 10 * (parseInt(n2(1145)) / 11) === t2) break;
      r2.push(r2.shift());
    } catch {
      r2.push(r2.shift());
    }
  })(Ts, 311767), i(), r(), t();
  var c, l, u, d, f, p, m, h, g, _, v, y, b, x, ee, S, C, w, te, T, E, ne, D, O, re, ie, ae, oe, se, ce, le, ue, de, k, A, fe, j, pe, me, he, ge, _e, ve, ye, be, xe, Se, Ce, we, Te, Ee, De, Oe, ke, Ae, je, Me, Ne, Pe, Fe, Ie, Le, Re, ze, Be, Ve, He, Ue, We, Ge, Ke, qe, Je, Ye, Xe, Ze, Qe, $e, et, tt, nt, rt, it, at, ot, st, ct, lt, ut, dt, ft, pt, mt, ht, gt, _t, vt, yt, bt, xt, St, Ct, wt, Tt, Et, Dt, Ot, kt, At, jt, Mt, Nt, Pt, Ft, It, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn = Object.create, an = Object[s(1700)], on = Object.getOwnPropertyDescriptor, sn = Object.getOwnPropertyNames, cn = Object.getPrototypeOf, ln = Object.prototype[s(577)], M = (e2, t2) => an(e2, `name`, {
    value: t2,
    configurable: true
  }), un = (e2, t2) => function() {
    return e2 && (t2 = (0, e2[sn(e2)[0]])(e2 = 0)), t2;
  }, N = (e2, t2) => function() {
    let n2 = s;
    return t2 || (0, e2[sn(e2)[0]])((t2 = {
      exports: {}
    }).exports, t2), t2[n2(427)];
  }, dn = (e2, t2) => {
    for (var n2 in t2) an(e2, n2, {
      get: t2[n2],
      enumerable: true
    });
  }, fn = (e2, t2, n2, r2) => {
    let i2 = s;
    if (t2 && typeof t2 == i2(716) || typeof t2 == `function`) for (let a2 of sn(t2)) !ln.call(e2, a2) && a2 !== n2 && an(e2, a2, {
      get: () => t2[a2],
      enumerable: !(r2 = on(t2, a2)) || r2[i2(1020)]
    });
    return e2;
  }, pn = (e2, t2, n2) => (fn(e2, t2, `default`), n2 && fn(n2, t2, `default`)), mn = (e2, t2, n2) => (n2 = e2 == null ? {} : rn(cn(e2)), fn(t2 || !e2 || !e2.__esModule ? an(n2, s(778), {
    value: e2,
    enumerable: true
  }) : n2, e2)), hn = (e2) => fn(an({}, `__esModule`, {
    value: true
  }), e2), gn = {};
  dn(gn, {
    AnnotatedTextEdit: () => Ln,
    ChangeAnnotation: () => Fn,
    ChangeAnnotationIdentifier: () => In,
    CodeAction: () => br,
    CodeActionContext: () => yr,
    CodeActionKind: () => _r,
    CodeActionTriggerKind: () => vr,
    CodeDescription: () => jn,
    CodeLens: () => xr,
    Color: () => Cn,
    ColorInformation: () => wn,
    ColorPresentation: () => Tn,
    Command: () => Nn,
    CompletionItem: () => ir,
    CompletionItemKind: () => Qn,
    CompletionItemLabelDetails: () => rr,
    CompletionItemTag: () => er,
    CompletionList: () => ar,
    CreateFile: () => zn,
    DeleteFile: () => Vn,
    Diagnostic: () => Mn,
    DiagnosticRelatedInformation: () => On,
    DiagnosticSeverity: () => kn,
    DiagnosticTag: () => An,
    DocumentHighlight: () => dr,
    DocumentHighlightKind: () => ur,
    DocumentLink: () => Cr,
    DocumentSymbol: () => gr,
    DocumentUri: () => _n,
    EOL: () => Hr,
    FoldingRange: () => Dn,
    FoldingRangeKind: () => En,
    FormattingOptions: () => Sr,
    Hover: () => sr,
    InlayHint: () => Pr,
    InlayHintKind: () => Mr,
    InlayHintLabelPart: () => Nr,
    InlineCompletionContext: () => Br,
    InlineCompletionItem: () => Ir,
    InlineCompletionList: () => Lr,
    InlineCompletionTriggerKind: () => Rr,
    InlineValueContext: () => jr,
    InlineValueEvaluatableExpression: () => Ar,
    InlineValueText: () => Or,
    InlineValueVariableLookup: () => kr,
    InsertReplaceEdit: () => tr,
    InsertTextFormat: () => $n,
    InsertTextMode: () => nr,
    Location: () => xn,
    LocationLink: () => Sn,
    MarkedString: () => or,
    MarkupContent: () => Zn,
    MarkupKind: () => Xn,
    OptionalVersionedTextDocumentIdentifier: () => Jn,
    ParameterInformation: () => cr,
    Position: () => P,
    Range: () => F,
    RenameFile: () => Bn,
    SelectedCompletionInfo: () => zr,
    SelectionRange: () => wr,
    SemanticTokenModifiers: () => Er,
    SemanticTokenTypes: () => Tr,
    SemanticTokens: () => Dr,
    SignatureInformation: () => lr,
    StringValue: () => Fr,
    SymbolInformation: () => mr,
    SymbolKind: () => fr,
    SymbolTag: () => pr,
    TextDocument: () => Ur,
    TextDocumentEdit: () => Rn,
    TextDocumentIdentifier: () => Kn,
    TextDocumentItem: () => Yn,
    TextEdit: () => Pn,
    URI: () => vn,
    VersionedTextDocumentIdentifier: () => qn,
    WorkspaceChange: () => Gn,
    WorkspaceEdit: () => Hn,
    WorkspaceFolder: () => Vr,
    WorkspaceSymbol: () => hr,
    integer: () => yn,
    uinteger: () => bn
  });
  var _n, vn, yn, bn, P, F, xn, Sn, Cn, wn, Tn, En, Dn, On, kn, An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, Bn, Vn, Hn, Un, Wn, Gn, Kn, qn, Jn, Yn, Xn, Zn, Qn, $n, er, tr, nr, rr, ir, ar, or, sr, cr, lr, ur, dr, fr, pr, mr, hr, gr, _r, vr, yr, br, xr, Sr, Cr, wr, Tr, Er, Dr, Or, kr, Ar, jr, Mr, Nr, Pr, Fr, Ir, Lr, Rr, zr, Br, Vr, Hr, Ur, Wr, I, Gr = un({
    "../../node_modules/.pnpm/vscode-languageserver-types@3.17.5/node_modules/vscode-languageserver-types/lib/esm/main.js"() {
      let e2 = s;
      var t2, n2, r2, i2;
      (function(e3) {
        function t3(e4) {
          return typeof e4 == X(1730);
        }
        M(t3, `is`), e3.is = t3;
      })(_n || (_n = {})), (function(e3) {
        function t3(e4) {
          return typeof e4 == `string`;
        }
        M(t3, `is`), e3.is = t3;
      })(vn || (vn = {})), (function(e3) {
        e3.MIN_VALUE = -2147483648, e3.MAX_VALUE = 2147483647;
        function t3(t4) {
          return typeof t4 == `number` && e3.MIN_VALUE <= t4 && t4 <= e3.MAX_VALUE;
        }
        M(t3, `is`), e3.is = t3;
      })(yn || (yn = {})), (function(e3) {
        e3.MIN_VALUE = 0, e3.MAX_VALUE = 2147483647;
        function t3(t4) {
          return typeof t4 == `number` && e3.MIN_VALUE <= t4 && t4 <= e3.MAX_VALUE;
        }
        M(t3, `is`), e3.is = t3;
      })(bn || (bn = {})), (function(e3) {
        function t3(e4, t4) {
          let n4 = X;
          return e4 === Number.MAX_VALUE && (e4 = bn.MAX_VALUE), t4 === Number[n4(466)] && (t4 = bn.MAX_VALUE), {
            line: e4,
            character: t4
          };
        }
        M(t3, `create`), e3.create = t3;
        function n3(e4) {
          let t4 = e4;
          return I.objectLiteral(t4) && I.uinteger(t4.line) && I.uinteger(t4.character);
        }
        M(n3, `is`), e3.is = n3;
      })(P || (P = {})), (function(e3) {
        let t3 = X;
        function n3(e4, t4, n4, r4) {
          let i3 = X;
          if (I.uinteger(e4) && I.uinteger(t4) && I.uinteger(n4) && I.uinteger(r4)) return {
            start: P.create(e4, t4),
            end: P.create(n4, r4)
          };
          if (P.is(e4) && P.is(t4)) return {
            start: e4,
            end: t4
          };
          throw Error(i3(391) + e4 + `, ` + t4 + `, ` + n4 + `, ` + r4 + `]`);
        }
        M(n3, `create`), e3[t3(1589)] = n3;
        function r3(e4) {
          let t4 = e4;
          return I.objectLiteral(t4) && P.is(t4.start) && P.is(t4.end);
        }
        M(r3, `is`), e3.is = r3;
      })(F || (F = {})), (function(e3) {
        function t3(e4, t4) {
          return {
            uri: e4,
            range: t4
          };
        }
        M(t3, `create`), e3.create = t3;
        function n3(e4) {
          let t4 = X, n4 = e4;
          return I.objectLiteral(n4) && F.is(n4.range) && (I.string(n4[t4(649)]) || I.undefined(n4[t4(649)]));
        }
        M(n3, `is`), e3.is = n3;
      })(xn || (xn = {})), (function(e3) {
        function t3(e4, t4, n4, r3) {
          return {
            targetUri: e4,
            targetRange: t4,
            targetSelectionRange: n4,
            originSelectionRange: r3
          };
        }
        M(t3, `create`), e3.create = t3;
        function n3(e4) {
          let t4 = X, n4 = e4;
          return I.objectLiteral(n4) && F.is(n4.targetRange) && I[t4(1730)](n4.targetUri) && F.is(n4[t4(670)]) && (F.is(n4.originSelectionRange) || I.undefined(n4.originSelectionRange));
        }
        M(n3, `is`), e3.is = n3;
      })(Sn || (Sn = {})), (function(e3) {
        function t3(e4, t4, n4, r3) {
          return {
            red: e4,
            green: t4,
            blue: n4,
            alpha: r3
          };
        }
        M(t3, `create`), e3.create = t3;
        function n3(e4) {
          let t4 = X, n4 = e4;
          return I.objectLiteral(n4) && I.numberRange(n4.red, 0, 1) && I.numberRange(n4.green, 0, 1) && I[t4(1233)](n4[t4(360)], 0, 1) && I.numberRange(n4[t4(1499)], 0, 1);
        }
        M(n3, `is`), e3.is = n3;
      })(Cn || (Cn = {})), (function(e3) {
        function t3(e4, t4) {
          return {
            range: e4,
            color: t4
          };
        }
        M(t3, `create`), e3.create = t3;
        function n3(e4) {
          let t4 = e4;
          return I.objectLiteral(t4) && F.is(t4.range) && Cn.is(t4.color);
        }
        M(n3, `is`), e3.is = n3;
      })(wn || (wn = {})), (function(e3) {
        function t3(e4, t4, n4) {
          return {
            label: e4,
            textEdit: t4,
            additionalTextEdits: n4
          };
        }
        M(t3, `create`), e3.create = t3;
        function n3(e4) {
          let t4 = X, n4 = e4;
          return I.objectLiteral(n4) && I.string(n4[t4(1365)]) && (I[t4(1642)](n4[t4(286)]) || Pn.is(n4)) && (I.undefined(n4.additionalTextEdits) || I[t4(371)](n4.additionalTextEdits, Pn.is));
        }
        M(n3, `is`), e3.is = n3;
      })(Tn || (Tn = {})), (function(e3) {
        e3.Comment = `comment`, e3.Imports = `imports`, e3.Region = `region`;
      })(En || (En = {})), (function(e3) {
        let t3 = X;
        function n3(e4, t4, n4, r4, i3, a2) {
          let o2 = X, s2 = {
            startLine: e4,
            endLine: t4
          };
          return I.defined(n4) && (s2.startCharacter = n4), I.defined(r4) && (s2.endCharacter = r4), I.defined(i3) && (s2[o2(1079)] = i3), I.defined(a2) && (s2.collapsedText = a2), s2;
        }
        M(n3, `create`), e3[t3(1589)] = n3;
        function r3(e4) {
          let n4 = t3, r4 = e4;
          return I.objectLiteral(r4) && I[n4(1213)](r4[n4(880)]) && I[n4(1213)](r4.startLine) && (I.undefined(r4.startCharacter) || I[n4(1213)](r4.startCharacter)) && (I.undefined(r4.endCharacter) || I.uinteger(r4.endCharacter)) && (I.undefined(r4[n4(1079)]) || I.string(r4.kind));
        }
        M(r3, `is`), e3.is = r3;
      })(Dn || (Dn = {})), (function(e3) {
        let t3 = X;
        function n3(e4, t4) {
          return {
            location: e4,
            message: t4
          };
        }
        M(n3, `create`), e3[t3(1589)] = n3;
        function r3(e4) {
          let t4 = e4;
          return I.defined(t4) && xn.is(t4.location) && I.string(t4.message);
        }
        M(r3, `is`), e3.is = r3;
      })(On || (On = {})), (function(e3) {
        let t3 = X;
        e3.Error = 1, e3.Warning = 2, e3[t3(279)] = 3, e3.Hint = 4;
      })(kn || (kn = {})), (function(e3) {
        e3.Unnecessary = 1, e3.Deprecated = 2;
      })(An || (An = {})), (function(e3) {
        function t3(e4) {
          let t4 = e4;
          return I.objectLiteral(t4) && I.string(t4.href);
        }
        M(t3, `is`), e3.is = t3;
      })(jn || (jn = {})), (function(e3) {
        function t3(e4, t4, n4, r3, i3, a2) {
          let o2 = {
            range: e4,
            message: t4
          };
          return I.defined(n4) && (o2.severity = n4), I.defined(r3) && (o2.code = r3), I.defined(i3) && (o2.source = i3), I.defined(a2) && (o2.relatedInformation = a2), o2;
        }
        M(t3, `create`), e3.create = t3;
        function n3(e4) {
          var _a2;
          let t4 = X, n4 = e4;
          return I[t4(301)](n4) && F.is(n4.range) && I.string(n4.message) && (I.number(n4.severity) || I.undefined(n4.severity)) && (I.integer(n4.code) || I.string(n4.code) || I[t4(1642)](n4.code)) && (I.undefined(n4.codeDescription) || I.string((_a2 = n4.codeDescription) == null ? void 0 : _a2.href)) && (I.string(n4.source) || I.undefined(n4.source)) && (I.undefined(n4.relatedInformation) || I.typedArray(n4.relatedInformation, On.is));
        }
        M(n3, `is`), e3.is = n3;
      })(Mn || (Mn = {})), (function(e3) {
        function t3(e4, t4, ...n4) {
          let r3 = X, i3 = {
            title: e4,
            command: t4
          };
          return I.defined(n4) && n4.length > 0 && (i3[r3(1613)] = n4), i3;
        }
        M(t3, `create`), e3.create = t3;
        function n3(e4) {
          let t4 = X, n4 = e4;
          return I[t4(301)](n4) && I.string(n4.title) && I.string(n4.command);
        }
        M(n3, `is`), e3.is = n3;
      })(Nn || (Nn = {})), (function(e3) {
        let t3 = X;
        function n3(e4, t4) {
          return {
            range: e4,
            newText: t4
          };
        }
        M(n3, `replace`), e3.replace = n3;
        function r3(e4, t4) {
          return {
            range: {
              start: e4,
              end: e4
            },
            newText: t4
          };
        }
        M(r3, `insert`), e3[t3(1805)] = r3;
        function i3(e4) {
          return {
            range: e4,
            newText: ``
          };
        }
        M(i3, `del`), e3[t3(589)] = i3;
        function a2(e4) {
          let n4 = t3, r4 = e4;
          return I[n4(1735)](r4) && I.string(r4.newText) && F.is(r4[n4(287)]);
        }
        M(a2, `is`), e3.is = a2;
      })(Pn || (Pn = {})), (function(e3) {
        let t3 = X;
        function n3(e4, t4, n4) {
          let r4 = X, i3 = {
            label: e4
          };
          return t4 !== void 0 && (i3.needsConfirmation = t4), n4 !== void 0 && (i3[r4(475)] = n4), i3;
        }
        M(n3, t3(1589)), e3.create = n3;
        function r3(e4) {
          let n4 = t3, r4 = e4;
          return I.objectLiteral(r4) && I.string(r4.label) && (I.boolean(r4.needsConfirmation) || r4[n4(1748)] === void 0) && (I[n4(1730)](r4.description) || r4.description === void 0);
        }
        M(r3, `is`), e3.is = r3;
      })(Fn || (Fn = {})), (function(e3) {
        function t3(e4) {
          let t4 = e4;
          return I.string(t4);
        }
        M(t3, `is`), e3.is = t3;
      })(In || (In = {})), (function(e3) {
        let t3 = X;
        function n3(e4, t4, n4) {
          return {
            range: e4,
            newText: t4,
            annotationId: n4
          };
        }
        M(n3, t3(909)), e3[t3(909)] = n3;
        function r3(e4, t4, n4) {
          return {
            range: {
              start: e4,
              end: e4
            },
            newText: t4,
            annotationId: n4
          };
        }
        M(r3, `insert`), e3.insert = r3;
        function i3(e4, t4) {
          return {
            range: e4,
            newText: ``,
            annotationId: t4
          };
        }
        M(i3, `del`), e3.del = i3;
        function a2(e4) {
          let n4 = t3, r4 = e4;
          return Pn.is(r4) && (Fn.is(r4.annotationId) || In.is(r4[n4(1441)]));
        }
        M(a2, `is`), e3.is = a2;
      })(Ln || (Ln = {})), (function(e3) {
        function t3(e4, t4) {
          return {
            textDocument: e4,
            edits: t4
          };
        }
        M(t3, `create`), e3.create = t3;
        function n3(e4) {
          let t4 = X, n4 = e4;
          return I.defined(n4) && Jn.is(n4.textDocument) && Array[t4(1426)](n4.edits);
        }
        M(n3, `is`), e3.is = n3;
      })(Rn || (Rn = {})), (function(e3) {
        let t3 = X;
        function n3(e4, t4, n4) {
          let r4 = {
            kind: X(1589),
            uri: e4
          };
          return t4 !== void 0 && (t4.overwrite !== void 0 || t4.ignoreIfExists !== void 0) && (r4.options = t4), n4 !== void 0 && (r4.annotationId = n4), r4;
        }
        M(n3, t3(1589)), e3.create = n3;
        function r3(e4) {
          let n4 = t3, r4 = e4;
          return r4 && r4[n4(1079)] === `create` && I[n4(1730)](r4.uri) && (r4.options === void 0 || (r4.options.overwrite === void 0 || I.boolean(r4[n4(1379)].overwrite)) && (r4.options[n4(1286)] === void 0 || I.boolean(r4.options[n4(1286)]))) && (r4.annotationId === void 0 || In.is(r4.annotationId));
        }
        M(r3, `is`), e3.is = r3;
      })(zn || (zn = {})), (function(e3) {
        function t3(e4, t4, n4, r3) {
          let i3 = {
            kind: `rename`,
            oldUri: e4,
            newUri: t4
          };
          return n4 !== void 0 && (n4.overwrite !== void 0 || n4.ignoreIfExists !== void 0) && (i3.options = n4), r3 !== void 0 && (i3.annotationId = r3), i3;
        }
        M(t3, `create`), e3.create = t3;
        function n3(e4) {
          let t4 = X, n4 = e4;
          return n4 && n4.kind === `rename` && I.string(n4.oldUri) && I.string(n4.newUri) && (n4[t4(1379)] === void 0 || (n4.options.overwrite === void 0 || I.boolean(n4.options.overwrite)) && (n4[t4(1379)].ignoreIfExists === void 0 || I.boolean(n4.options[t4(1286)]))) && (n4.annotationId === void 0 || In.is(n4.annotationId));
        }
        M(n3, `is`), e3.is = n3;
      })(Bn || (Bn = {})), (function(e3) {
        function t3(e4, t4, n4) {
          let r3 = {
            kind: `delete`,
            uri: e4
          };
          return t4 !== void 0 && (t4.recursive !== void 0 || t4.ignoreIfNotExists !== void 0) && (r3.options = t4), n4 !== void 0 && (r3.annotationId = n4), r3;
        }
        M(t3, `create`), e3.create = t3;
        function n3(e4) {
          let t4 = X, n4 = e4;
          return n4 && n4.kind === `delete` && I.string(n4.uri) && (n4[t4(1379)] === void 0 || (n4.options.recursive === void 0 || I.boolean(n4.options.recursive)) && (n4.options[t4(1599)] === void 0 || I.boolean(n4[t4(1379)][t4(1599)]))) && (n4.annotationId === void 0 || In.is(n4.annotationId));
        }
        M(n3, `is`), e3.is = n3;
      })(Vn || (Vn = {})), (function(e3) {
        function t3(e4) {
          let t4 = X, n3 = e4;
          return n3 && (n3.changes !== void 0 || n3.documentChanges !== void 0) && (n3.documentChanges === void 0 || n3.documentChanges[t4(1389)]((e5) => I.string(e5.kind) ? zn.is(e5) || Bn.is(e5) || Vn.is(e5) : Rn.is(e5)));
        }
        M(t3, `is`), e3.is = t3;
      })(Hn || (Hn = {})), Un = (t2 = class {
        constructor(e3, t3) {
          this.edits = e3, this.changeAnnotations = t3;
        }
        insert(e3, t3, n3) {
          let r3 = X, i3, a2;
          if (n3 === void 0 ? i3 = Pn[r3(1805)](e3, t3) : In.is(n3) ? (a2 = n3, i3 = Ln.insert(e3, t3, n3)) : (this.assertChangeAnnotations(this.changeAnnotations), a2 = this.changeAnnotations.manage(n3), i3 = Ln.insert(e3, t3, a2)), this.edits.push(i3), a2 !== void 0) return a2;
        }
        [e2(909)](t3, n3, r3) {
          let i3 = e2, a2, o2;
          if (r3 === void 0 ? a2 = Pn.replace(t3, n3) : In.is(r3) ? (o2 = r3, a2 = Ln.replace(t3, n3, r3)) : (this.assertChangeAnnotations(this.changeAnnotations), o2 = this.changeAnnotations.manage(r3), a2 = Ln.replace(t3, n3, o2)), this.edits[i3(1168)](a2), o2 !== void 0) return o2;
        }
        delete(t3, n3) {
          let r3 = e2, i3, a2;
          if (n3 === void 0 ? i3 = Pn.del(t3) : In.is(n3) ? (a2 = n3, i3 = Ln[r3(589)](t3, n3)) : (this.assertChangeAnnotations(this.changeAnnotations), a2 = this.changeAnnotations.manage(n3), i3 = Ln[r3(589)](t3, a2)), this.edits.push(i3), a2 !== void 0) return a2;
        }
        add(e3) {
          this.edits.push(e3);
        }
        all() {
          return this.edits;
        }
        clear() {
          this.edits.splice(0, this.edits.length);
        }
        [e2(1478)](e3) {
          if (e3 === void 0) throw Error(`Text edit change is not configured to manage change annotations.`);
        }
      }, M(t2, `TextEditChangeImpl`), t2), Wn = (n2 = class {
        constructor(t3) {
          let n3 = e2;
          this[n3(1319)] = t3 === void 0 ? Object[n3(1589)](null) : t3, this._counter = 0, this._size = 0;
        }
        all() {
          return this._annotations;
        }
        get size() {
          return this._size;
        }
        manage(e3, t3) {
          let n3;
          if (In.is(e3) ? n3 = e3 : (n3 = this.nextId(), t3 = e3), this._annotations[n3] !== void 0) throw Error(`Id ` + n3 + ` is already in use.`);
          if (t3 === void 0) throw Error(`No annotation provided for id ` + n3);
          return this._annotations[n3] = t3, this._size++, n3;
        }
        [e2(952)]() {
          return this._counter++, this._counter.toString();
        }
      }, M(n2, e2(1191)), n2), Gn = (r2 = class {
        constructor(t3) {
          let n3 = e2;
          this._textEditChanges = Object[n3(1589)](null), t3 === void 0 ? this._workspaceEdit = {} : (this._workspaceEdit = t3, t3.documentChanges ? (this._changeAnnotations = new Wn(t3[n3(1606)]), t3.changeAnnotations = this._changeAnnotations.all(), t3.documentChanges.forEach((e3) => {
            if (Rn.is(e3)) {
              let t4 = new Un(e3.edits, this._changeAnnotations);
              this._textEditChanges[e3.textDocument.uri] = t4;
            }
          })) : t3.changes && Object.keys(t3.changes).forEach((e3) => {
            let n4 = new Un(t3.changes[e3]);
            this._textEditChanges[e3] = n4;
          }));
        }
        get edit() {
          let t3 = e2;
          return this.initDocumentChanges(), this._changeAnnotations !== void 0 && (this[t3(1559)].size === 0 ? this._workspaceEdit.changeAnnotations = void 0 : this[t3(378)].changeAnnotations = this._changeAnnotations.all()), this._workspaceEdit;
        }
        getTextEditChange(t3) {
          let n3 = e2;
          if (Jn.is(t3)) {
            if (this.initDocumentChanges(), this._workspaceEdit[n3(1783)] === void 0) throw Error(`Workspace edit is not configured for document changes.`);
            let e3 = {
              uri: t3.uri,
              version: t3[n3(369)]
            }, r3 = this[n3(694)][e3.uri];
            if (!r3) {
              let t4 = [], i3 = {
                textDocument: e3,
                edits: t4
              };
              this._workspaceEdit[n3(1783)].push(i3), r3 = new Un(t4, this._changeAnnotations), this._textEditChanges[e3.uri] = r3;
            }
            return r3;
          } else {
            if (this.initChanges(), this._workspaceEdit.changes === void 0) throw Error(`Workspace edit is not configured for normal text edit changes.`);
            let e3 = this._textEditChanges[t3];
            if (!e3) {
              let r3 = [];
              this[n3(378)][n3(756)][t3] = r3, e3 = new Un(r3), this._textEditChanges[t3] = e3;
            }
            return e3;
          }
        }
        [e2(1717)]() {
          let t3 = e2;
          this[t3(378)].documentChanges === void 0 && this._workspaceEdit.changes === void 0 && (this._changeAnnotations = new Wn(), this[t3(378)][t3(1783)] = [], this._workspaceEdit[t3(1606)] = this._changeAnnotations.all());
        }
        initChanges() {
          let t3 = e2;
          this[t3(378)].documentChanges === void 0 && this._workspaceEdit.changes === void 0 && (this._workspaceEdit.changes = /* @__PURE__ */ Object.create(null));
        }
        createFile(t3, n3, r3) {
          let i3 = e2;
          if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw Error(`Workspace edit is not configured for document changes.`);
          let a2;
          Fn.is(n3) || In.is(n3) ? a2 = n3 : r3 = n3;
          let o2, s2;
          if (a2 === void 0 ? o2 = zn.create(t3, r3) : (s2 = In.is(a2) ? a2 : this._changeAnnotations.manage(a2), o2 = zn.create(t3, r3, s2)), this._workspaceEdit[i3(1783)].push(o2), s2 !== void 0) return s2;
        }
        renameFile(t3, n3, r3, i3) {
          let a2 = e2;
          if (this[a2(1717)](), this._workspaceEdit.documentChanges === void 0) throw Error(`Workspace edit is not configured for document changes.`);
          let o2;
          Fn.is(r3) || In.is(r3) ? o2 = r3 : i3 = r3;
          let s2, c2;
          if (o2 === void 0 ? s2 = Bn.create(t3, n3, i3) : (c2 = In.is(o2) ? o2 : this._changeAnnotations[a2(1681)](o2), s2 = Bn.create(t3, n3, i3, c2)), this._workspaceEdit.documentChanges.push(s2), c2 !== void 0) return c2;
        }
        deleteFile(t3, n3, r3) {
          let i3 = e2;
          if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw Error(`Workspace edit is not configured for document changes.`);
          let a2;
          Fn.is(n3) || In.is(n3) ? a2 = n3 : r3 = n3;
          let o2, s2;
          if (a2 === void 0 ? o2 = Vn.create(t3, r3) : (s2 = In.is(a2) ? a2 : this[i3(1559)].manage(a2), o2 = Vn.create(t3, r3, s2)), this._workspaceEdit.documentChanges[i3(1168)](o2), s2 !== void 0) return s2;
        }
      }, M(r2, `WorkspaceChange`), r2), (function(e3) {
        function t3(e4) {
          return {
            uri: e4
          };
        }
        M(t3, `create`), e3.create = t3;
        function n3(e4) {
          let t4 = X, n4 = e4;
          return I.defined(n4) && I[t4(1730)](n4.uri);
        }
        M(n3, `is`), e3.is = n3;
      })(Kn || (Kn = {})), (function(e3) {
        function t3(e4, t4) {
          return {
            uri: e4,
            version: t4
          };
        }
        M(t3, `create`), e3.create = t3;
        function n3(e4) {
          let t4 = X, n4 = e4;
          return I.defined(n4) && I.string(n4.uri) && I.integer(n4[t4(369)]);
        }
        M(n3, `is`), e3.is = n3;
      })(qn || (qn = {})), (function(e3) {
        function t3(e4, t4) {
          return {
            uri: e4,
            version: t4
          };
        }
        M(t3, `create`), e3.create = t3;
        function n3(e4) {
          let t4 = X, n4 = e4;
          return I.defined(n4) && I.string(n4.uri) && (n4[t4(369)] === null || I.integer(n4.version));
        }
        M(n3, `is`), e3.is = n3;
      })(Jn || (Jn = {})), (function(e3) {
        function t3(e4, t4, n4, r3) {
          return {
            uri: e4,
            languageId: t4,
            version: n4,
            text: r3
          };
        }
        M(t3, `create`), e3.create = t3;
        function n3(e4) {
          let t4 = X, n4 = e4;
          return I.defined(n4) && I.string(n4.uri) && I.string(n4.languageId) && I[t4(963)](n4.version) && I.string(n4[t4(324)]);
        }
        M(n3, `is`), e3.is = n3;
      })(Yn || (Yn = {})), (function(t3) {
        let n3 = e2;
        t3[n3(406)] = `plaintext`, t3[n3(1374)] = `markdown`;
        function r3(e3) {
          let n4 = e3;
          return n4 === t3.PlainText || n4 === t3.Markdown;
        }
        M(r3, `is`), t3.is = r3;
      })(Xn || (Xn = {})), (function(e3) {
        function t3(e4) {
          let t4 = e4;
          return I.objectLiteral(e4) && Xn.is(t4.kind) && I.string(t4.value);
        }
        M(t3, `is`), e3.is = t3;
      })(Zn || (Zn = {})), (function(t3) {
        let n3 = e2;
        t3.Text = 1, t3.Method = 2, t3.Function = 3, t3.Constructor = 4, t3.Field = 5, t3[n3(1695)] = 6, t3.Class = 7, t3.Interface = 8, t3[n3(470)] = 9, t3.Property = 10, t3[n3(449)] = 11, t3[n3(1113)] = 12, t3.Enum = 13, t3.Keyword = 14, t3.Snippet = 15, t3.Color = 16, t3.File = 17, t3[n3(430)] = 18, t3.Folder = 19, t3.EnumMember = 20, t3.Constant = 21, t3.Struct = 22, t3.Event = 23, t3.Operator = 24, t3.TypeParameter = 25;
      })(Qn || (Qn = {})), (function(t3) {
        let n3 = e2;
        t3.PlainText = 1, t3[n3(1483)] = 2;
      })($n || ($n = {})), (function(e3) {
        e3.Deprecated = 1;
      })(er || (er = {})), (function(e3) {
        function t3(e4, t4, n4) {
          return {
            newText: e4,
            insert: t4,
            replace: n4
          };
        }
        M(t3, `create`), e3.create = t3;
        function n3(e4) {
          let t4 = X, n4 = e4;
          return n4 && I.string(n4.newText) && F.is(n4[t4(1805)]) && F.is(n4.replace);
        }
        M(n3, `is`), e3.is = n3;
      })(tr || (tr = {})), (function(e3) {
        e3.asIs = 1, e3.adjustIndentation = 2;
      })(nr || (nr = {})), (function(e3) {
        function t3(e4) {
          let t4 = e4;
          return t4 && (I.string(t4.detail) || t4.detail === void 0) && (I.string(t4.description) || t4.description === void 0);
        }
        M(t3, `is`), e3.is = t3;
      })(rr || (rr = {})), (function(e3) {
        function t3(e4) {
          return {
            label: e4
          };
        }
        M(t3, `create`), e3.create = t3;
      })(ir || (ir = {})), (function(e3) {
        function t3(e4, t4) {
          return {
            items: e4 || [],
            isIncomplete: !!t4
          };
        }
        M(t3, `create`), e3.create = t3;
      })(ar || (ar = {})), (function(e3) {
        function t3(e4) {
          return e4.replace(/[\\`*_{}[\]()#+\-.!]/g, `\\$&`);
        }
        M(t3, `fromPlainText`), e3.fromPlainText = t3;
        function n3(e4) {
          let t4 = X, n4 = e4;
          return I.string(n4) || I.objectLiteral(n4) && I.string(n4.language) && I[t4(1730)](n4.value);
        }
        M(n3, `is`), e3.is = n3;
      })(or || (or = {})), (function(e3) {
        function t3(e4) {
          let t4 = X, n3 = e4;
          return !!n3 && I.objectLiteral(n3) && (Zn.is(n3.contents) || or.is(n3.contents) || I.typedArray(n3.contents, or.is)) && (e4.range === void 0 || F.is(e4[t4(287)]));
        }
        M(t3, `is`), e3.is = t3;
      })(sr || (sr = {})), (function(e3) {
        function t3(e4, t4) {
          return t4 ? {
            label: e4,
            documentation: t4
          } : {
            label: e4
          };
        }
        M(t3, `create`), e3.create = t3;
      })(cr || (cr = {})), (function(e3) {
        function t3(e4, t4, ...n3) {
          let r3 = {
            label: e4
          };
          return I.defined(t4) && (r3.documentation = t4), I.defined(n3) ? r3.parameters = n3 : r3.parameters = [], r3;
        }
        M(t3, `create`), e3.create = t3;
      })(lr || (lr = {})), (function(t3) {
        let n3 = e2;
        t3.Text = 1, t3.Read = 2, t3[n3(691)] = 3;
      })(ur || (ur = {})), (function(t3) {
        let n3 = e2;
        function r3(e3, t4) {
          let n4 = X, r4 = {
            range: e3
          };
          return I.number(t4) && (r4[n4(1079)] = t4), r4;
        }
        M(r3, n3(1589)), t3.create = r3;
      })(dr || (dr = {})), (function(t3) {
        let n3 = e2;
        t3.File = 1, t3.Module = 2, t3[n3(1091)] = 3, t3.Package = 4, t3[n3(345)] = 5, t3.Method = 6, t3[n3(754)] = 7, t3.Field = 8, t3.Constructor = 9, t3.Enum = 10, t3.Interface = 11, t3[n3(1612)] = 12, t3.Variable = 13, t3.Constant = 14, t3.String = 15, t3.Number = 16, t3.Boolean = 17, t3.Array = 18, t3.Object = 19, t3[n3(431)] = 20, t3.Null = 21, t3.EnumMember = 22, t3.Struct = 23, t3.Event = 24, t3.Operator = 25, t3[n3(683)] = 26;
      })(fr || (fr = {})), (function(e3) {
        e3.Deprecated = 1;
      })(pr || (pr = {})), (function(e3) {
        function t3(e4, t4, n3, r3, i3) {
          let a2 = X, o2 = {
            name: e4,
            kind: t4,
            location: {
              uri: r3,
              range: n3
            }
          };
          return i3 && (o2[a2(1180)] = i3), o2;
        }
        M(t3, `create`), e3.create = t3;
      })(mr || (mr = {})), (function(t3) {
        let n3 = e2;
        function r3(e3, t4, n4, r4) {
          return r4 === void 0 ? {
            name: e3,
            kind: t4,
            location: {
              uri: n4
            }
          } : {
            name: e3,
            kind: t4,
            location: {
              uri: n4,
              range: r4
            }
          };
        }
        M(r3, n3(1589)), t3.create = r3;
      })(hr || (hr = {})), (function(t3) {
        let n3 = e2;
        function r3(e3, t4, n4, r4, i4, a2) {
          let o2 = {
            name: e3,
            detail: t4,
            kind: n4,
            range: r4,
            selectionRange: i4
          };
          return a2 !== void 0 && (o2.children = a2), o2;
        }
        M(r3, n3(1589)), t3.create = r3;
        function i3(e3) {
          let t4 = n3, r4 = e3;
          return r4 && I.string(r4[t4(747)]) && I.number(r4.kind) && F.is(r4[t4(287)]) && F.is(r4.selectionRange) && (r4.detail === void 0 || I[t4(1730)](r4.detail)) && (r4[t4(1540)] === void 0 || I.boolean(r4.deprecated)) && (r4.children === void 0 || Array.isArray(r4.children)) && (r4.tags === void 0 || Array.isArray(r4[t4(656)]));
        }
        M(i3, `is`), t3.is = i3;
      })(gr || (gr = {})), (function(t3) {
        let n3 = e2;
        t3.Empty = ``, t3.QuickFix = `quickfix`, t3.Refactor = `refactor`, t3.RefactorExtract = n3(1357), t3.RefactorInline = `refactor.inline`, t3[n3(855)] = `refactor.rewrite`, t3.Source = `source`, t3[n3(472)] = n3(968), t3.SourceFixAll = `source.fixAll`;
      })(_r || (_r = {})), (function(e3) {
        e3.Invoked = 1, e3.Automatic = 2;
      })(vr || (vr = {})), (function(e3) {
        function t3(e4, t4, n4) {
          let r3 = {
            diagnostics: e4
          };
          return t4 != null && (r3.only = t4), n4 != null && (r3.triggerKind = n4), r3;
        }
        M(t3, `create`), e3.create = t3;
        function n3(e4) {
          let t4 = X, n4 = e4;
          return I.defined(n4) && I[t4(371)](n4.diagnostics, Mn.is) && (n4.only === void 0 || I.typedArray(n4.only, I.string)) && (n4.triggerKind === void 0 || n4.triggerKind === vr.Invoked || n4.triggerKind === vr.Automatic);
        }
        M(n3, `is`), e3.is = n3;
      })(yr || (yr = {})), (function(e3) {
        function t3(e4, t4, n4) {
          let r3 = {
            title: e4
          }, i3 = true;
          return typeof t4 == `string` ? (i3 = false, r3.kind = t4) : Nn.is(t4) ? r3.command = t4 : r3.edit = t4, i3 && n4 !== void 0 && (r3.kind = n4), r3;
        }
        M(t3, `create`), e3.create = t3;
        function n3(e4) {
          let t4 = X, n4 = e4;
          return n4 && I[t4(1730)](n4.title) && (n4.diagnostics === void 0 || I.typedArray(n4.diagnostics, Mn.is)) && (n4.kind === void 0 || I.string(n4.kind)) && (n4.edit !== void 0 || n4.command !== void 0) && (n4.command === void 0 || Nn.is(n4.command)) && (n4.isPreferred === void 0 || I.boolean(n4.isPreferred)) && (n4.edit === void 0 || Hn.is(n4.edit));
        }
        M(n3, `is`), e3.is = n3;
      })(br || (br = {})), (function(e3) {
        function t3(e4, t4) {
          let n4 = X, r3 = {
            range: e4
          };
          return I[n4(301)](t4) && (r3[n4(1791)] = t4), r3;
        }
        M(t3, `create`), e3.create = t3;
        function n3(e4) {
          let t4 = X, n4 = e4;
          return I.defined(n4) && F.is(n4.range) && (I.undefined(n4[t4(327)]) || Nn.is(n4.command));
        }
        M(n3, `is`), e3.is = n3;
      })(xr || (xr = {})), (function(t3) {
        let n3 = e2;
        function r3(e3, t4) {
          return {
            tabSize: e3,
            insertSpaces: t4
          };
        }
        M(r3, `create`), t3[n3(1589)] = r3;
        function i3(e3) {
          let t4 = n3, r4 = e3;
          return I[t4(301)](r4) && I.uinteger(r4.tabSize) && I.boolean(r4.insertSpaces);
        }
        M(i3, `is`), t3.is = i3;
      })(Sr || (Sr = {})), (function(e3) {
        function t3(e4, t4, n4) {
          return {
            range: e4,
            target: t4,
            data: n4
          };
        }
        M(t3, `create`), e3.create = t3;
        function n3(e4) {
          let t4 = X, n4 = e4;
          return I.defined(n4) && F.is(n4.range) && (I.undefined(n4.target) || I.string(n4[t4(356)]));
        }
        M(n3, `is`), e3.is = n3;
      })(Cr || (Cr = {})), (function(e3) {
        function t3(e4, t4) {
          return {
            range: e4,
            parent: t4
          };
        }
        M(t3, `create`), e3.create = t3;
        function n3(t4) {
          let n4 = t4;
          return I.objectLiteral(n4) && F.is(n4.range) && (n4.parent === void 0 || e3.is(n4.parent));
        }
        M(n3, `is`), e3.is = n3;
      })(wr || (wr = {})), (function(t3) {
        let n3 = e2;
        t3.namespace = `namespace`, t3.type = `type`, t3.class = n3(433), t3.enum = `enum`, t3.interface = `interface`, t3.struct = `struct`, t3.typeParameter = `typeParameter`, t3.parameter = `parameter`, t3.variable = `variable`, t3.property = `property`, t3.enumMember = n3(1172), t3.event = `event`, t3.function = `function`, t3.method = `method`, t3.macro = n3(1267), t3.keyword = `keyword`, t3.modifier = `modifier`, t3.comment = `comment`, t3.string = `string`, t3[n3(1539)] = `number`, t3.regexp = n3(1060), t3.operator = `operator`, t3.decorator = n3(522);
      })(Tr || (Tr = {})), (function(t3) {
        let n3 = e2;
        t3[n3(1666)] = `declaration`, t3.definition = `definition`, t3.readonly = `readonly`, t3.static = `static`, t3.deprecated = `deprecated`, t3.abstract = `abstract`, t3.async = `async`, t3.modification = `modification`, t3.documentation = `documentation`, t3.defaultLibrary = `defaultLibrary`;
      })(Er || (Er = {})), (function(e3) {
        function t3(e4) {
          let t4 = e4;
          return I.objectLiteral(t4) && (t4.resultId === void 0 || typeof t4.resultId == `string`) && Array.isArray(t4.data) && (t4.data.length === 0 || typeof t4.data[0] == `number`);
        }
        M(t3, `is`), e3.is = t3;
      })(Dr || (Dr = {})), (function(t3) {
        let n3 = e2;
        function r3(e3, t4) {
          return {
            range: e3,
            text: t4
          };
        }
        M(r3, `create`), t3[n3(1589)] = r3;
        function i3(e3) {
          let t4 = e3;
          return t4 != null && F.is(t4.range) && I.string(t4.text);
        }
        M(i3, `is`), t3.is = i3;
      })(Or || (Or = {})), (function(t3) {
        let n3 = e2;
        function r3(e3, t4, n4) {
          return {
            range: e3,
            variableName: t4,
            caseSensitiveLookup: n4
          };
        }
        M(r3, `create`), t3[n3(1589)] = r3;
        function i3(e3) {
          let t4 = n3, r4 = e3;
          return r4 != null && F.is(r4.range) && I.boolean(r4.caseSensitiveLookup) && (I[t4(1730)](r4.variableName) || r4[t4(579)] === void 0);
        }
        M(i3, `is`), t3.is = i3;
      })(kr || (kr = {})), (function(e3) {
        function t3(e4, t4) {
          return {
            range: e4,
            expression: t4
          };
        }
        M(t3, `create`), e3.create = t3;
        function n3(e4) {
          let t4 = e4;
          return t4 != null && F.is(t4.range) && (I.string(t4.expression) || t4.expression === void 0);
        }
        M(n3, `is`), e3.is = n3;
      })(Ar || (Ar = {})), (function(t3) {
        let n3 = e2;
        function r3(e3, t4) {
          return {
            frameId: e3,
            stoppedLocation: t4
          };
        }
        M(r3, `create`), t3[n3(1589)] = r3;
        function i3(e3) {
          let t4 = e3;
          return I.defined(t4) && F.is(e3.stoppedLocation);
        }
        M(i3, `is`), t3.is = i3;
      })(jr || (jr = {})), (function(t3) {
        let n3 = e2;
        t3.Type = 1, t3[n3(1122)] = 2;
        function r3(e3) {
          return e3 === 1 || e3 === 2;
        }
        M(r3, `is`), t3.is = r3;
      })(Mr || (Mr = {})), (function(t3) {
        let n3 = e2;
        function r3(e3) {
          return {
            value: e3
          };
        }
        M(r3, n3(1589)), t3.create = r3;
        function i3(e3) {
          let t4 = n3, r4 = e3;
          return I.objectLiteral(r4) && (r4.tooltip === void 0 || I.string(r4.tooltip) || Zn.is(r4.tooltip)) && (r4.location === void 0 || xn.is(r4[t4(351)])) && (r4[t4(327)] === void 0 || Nn.is(r4.command));
        }
        M(i3, `is`), t3.is = i3;
      })(Nr || (Nr = {})), (function(e3) {
        function t3(e4, t4, n4) {
          let r3 = {
            position: e4,
            label: t4
          };
          return n4 !== void 0 && (r3.kind = n4), r3;
        }
        M(t3, `create`), e3.create = t3;
        function n3(e4) {
          let t4 = X, n4 = e4;
          return I.objectLiteral(n4) && P.is(n4.position) && (I.string(n4.label) || I[t4(371)](n4.label, Nr.is)) && (n4.kind === void 0 || Mr.is(n4.kind)) && n4[t4(762)] === void 0 || I.typedArray(n4.textEdits, Pn.is) && (n4.tooltip === void 0 || I.string(n4.tooltip) || Zn.is(n4.tooltip)) && (n4.paddingLeft === void 0 || I.boolean(n4.paddingLeft)) && (n4.paddingRight === void 0 || I.boolean(n4.paddingRight));
        }
        M(n3, `is`), e3.is = n3;
      })(Pr || (Pr = {})), (function(t3) {
        let n3 = e2;
        function r3(e3) {
          return {
            kind: `snippet`,
            value: e3
          };
        }
        M(r3, `createSnippet`), t3[n3(1425)] = r3;
      })(Fr || (Fr = {})), (function(e3) {
        function t3(e4, t4, n3, r3) {
          return {
            insertText: e4,
            filterText: t4,
            range: n3,
            command: r3
          };
        }
        M(t3, `create`), e3.create = t3;
      })(Ir || (Ir = {})), (function(t3) {
        let n3 = e2;
        function r3(e3) {
          return {
            items: e3
          };
        }
        M(r3, `create`), t3[n3(1589)] = r3;
      })(Lr || (Lr = {})), (function(e3) {
        e3.Invoked = 0, e3.Automatic = 1;
      })(Rr || (Rr = {})), (function(e3) {
        function t3(e4, t4) {
          return {
            range: e4,
            text: t4
          };
        }
        M(t3, `create`), e3.create = t3;
      })(zr || (zr = {})), (function(e3) {
        function t3(e4, t4) {
          return {
            triggerKind: e4,
            selectedCompletionInfo: t4
          };
        }
        M(t3, `create`), e3.create = t3;
      })(Br || (Br = {})), (function(e3) {
        function t3(e4) {
          let t4 = e4;
          return I.objectLiteral(t4) && vn.is(t4.uri) && I.string(t4.name);
        }
        M(t3, `is`), e3.is = t3;
      })(Vr || (Vr = {})), Hr = [
        `
`,
        `\r
`,
        `\r`
      ], (function(e3) {
        function t3(e4, t4, n4, r4) {
          return new Wr(e4, t4, n4, r4);
        }
        M(t3, `create`), e3.create = t3;
        function n3(e4) {
          let t4 = X, n4 = e4;
          return !!(I[t4(301)](n4) && I[t4(1730)](n4.uri) && (I.undefined(n4.languageId) || I.string(n4.languageId)) && I.uinteger(n4.lineCount) && I.func(n4.getText) && I.func(n4.positionAt) && I.func(n4.offsetAt));
        }
        M(n3, `is`), e3.is = n3;
        function r3(e4, t4) {
          let n4 = X, r4 = e4.getText(), a2 = i3(t4, (e5, t5) => {
            let n5 = X, r5 = e5.range[n5(1433)][n5(1250)] - t5.range.start.line;
            return r5 === 0 ? e5.range.start.character - t5[n5(287)].start.character : r5;
          }), o2 = r4.length;
          for (let t5 = a2.length - 1; t5 >= 0; t5--) {
            let i4 = a2[t5], s2 = e4.offsetAt(i4.range.start), c2 = e4.offsetAt(i4.range[n4(1488)]);
            if (c2 <= o2) r4 = r4[n4(777)](0, s2) + i4.newText + r4.substring(c2, r4.length);
            else throw Error(`Overlapping edit`);
            o2 = s2;
          }
          return r4;
        }
        M(r3, `applyEdits`), e3.applyEdits = r3;
        function i3(e4, t4) {
          if (e4[X(1663)] <= 1) return e4;
          let n4 = e4.length / 2 | 0, r4 = e4.slice(0, n4), a2 = e4.slice(n4);
          i3(r4, t4), i3(a2, t4);
          let o2 = 0, s2 = 0, c2 = 0;
          for (; o2 < r4.length && s2 < a2.length; ) t4(r4[o2], a2[s2]) <= 0 ? e4[c2++] = r4[o2++] : e4[c2++] = a2[s2++];
          for (; o2 < r4.length; ) e4[c2++] = r4[o2++];
          for (; s2 < a2.length; ) e4[c2++] = a2[s2++];
          return e4;
        }
        M(i3, `mergeSort`);
      })(Ur || (Ur = {})), Wr = (i2 = class {
        constructor(e3, t3, n3, r3) {
          this._uri = e3, this._languageId = t3, this._version = n3, this._content = r3, this._lineOffsets = void 0;
        }
        get uri() {
          return this._uri;
        }
        get [e2(679)]() {
          return this._languageId;
        }
        get version() {
          return this._version;
        }
        getText(t3) {
          let n3 = e2;
          if (t3) {
            let e3 = this[n3(1211)](t3.start), r3 = this.offsetAt(t3.end);
            return this[n3(864)][n3(777)](e3, r3);
          }
          return this[n3(864)];
        }
        update(t3, n3) {
          let r3 = e2;
          this[r3(864)] = t3.text, this._version = n3, this._lineOffsets = void 0;
        }
        getLineOffsets() {
          let t3 = e2;
          if (this._lineOffsets === void 0) {
            let e3 = [], n3 = this._content, r3 = true;
            for (let i3 = 0; i3 < n3.length; i3++) {
              r3 && (r3 = (e3.push(i3), false));
              let a2 = n3[t3(1308)](i3);
              r3 = a2 === `\r` || a2 === `
`, a2 === `\r` && i3 + 1 < n3.length && n3.charAt(i3 + 1) === `
` && i3++;
            }
            r3 && n3[t3(1663)] > 0 && e3.push(n3.length), this._lineOffsets = e3;
          }
          return this._lineOffsets;
        }
        positionAt(t3) {
          let n3 = e2;
          t3 = Math.max(Math.min(t3, this[n3(864)].length), 0);
          let r3 = this[n3(1261)](), i3 = 0, a2 = r3.length;
          if (a2 === 0) return P[n3(1589)](0, t3);
          for (; i3 < a2; ) {
            let e3 = Math[n3(1073)]((i3 + a2) / 2);
            r3[e3] > t3 ? a2 = e3 : i3 = e3 + 1;
          }
          let o2 = i3 - 1;
          return P[n3(1589)](o2, t3 - r3[o2]);
        }
        [e2(1211)](t3) {
          let n3 = e2, r3 = this.getLineOffsets();
          if (t3[n3(1250)] >= r3.length) return this._content.length;
          if (t3.line < 0) return 0;
          let i3 = r3[t3.line], a2 = t3[n3(1250)] + 1 < r3.length ? r3[t3.line + 1] : this._content.length;
          return Math.max(Math.min(i3 + t3[n3(556)], a2), i3);
        }
        get lineCount() {
          let t3 = e2;
          return this.getLineOffsets()[t3(1663)];
        }
      }, M(i2, `FullTextDocument`), i2), (function(t3) {
        let n3 = e2, r3 = Object.prototype.toString;
        function i3(e3) {
          return e3 !== void 0;
        }
        M(i3, `defined`), t3.defined = i3;
        function a2(e3) {
          return e3 === void 0;
        }
        M(a2, n3(1642)), t3.undefined = a2;
        function o2(e3) {
          return e3 === true || e3 === false;
        }
        M(o2, `boolean`), t3.boolean = o2;
        function s2(e3) {
          return r3.call(e3) === `[object String]`;
        }
        M(s2, n3(1730)), t3.string = s2;
        function c2(e3) {
          let t4 = n3;
          return r3.call(e3) === t4(1086);
        }
        M(c2, n3(1539)), t3.number = c2;
        function l2(e3, t4, n4) {
          return r3.call(e3) === `[object Number]` && t4 <= e3 && e3 <= n4;
        }
        M(l2, `numberRange`), t3.numberRange = l2;
        function u2(e3) {
          let t4 = n3;
          return r3.call(e3) === t4(1086) && -2147483648 <= e3 && e3 <= 2147483647;
        }
        M(u2, `integer`), t3.integer = u2;
        function d2(e3) {
          return r3.call(e3) === `[object Number]` && 0 <= e3 && e3 <= 2147483647;
        }
        M(d2, `uinteger`), t3[n3(1213)] = d2;
        function f2(e3) {
          return r3[n3(1066)](e3) === `[object Function]`;
        }
        M(f2, `func`), t3.func = f2;
        function p2(e3) {
          return typeof e3 == `object` && !!e3;
        }
        M(p2, n3(1735)), t3.objectLiteral = p2;
        function m2(e3, t4) {
          let r4 = n3;
          return Array[r4(1426)](e3) && e3[r4(1389)](t4);
        }
        M(m2, `typedArray`), t3.typedArray = m2;
      })(I || (I = {}));
    }
  }), Kr = N({
    "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/ral.js"(e2) {
      Object.defineProperty(e2, "__esModule", {
        value: true
      });
      var t2;
      function n2() {
        if (t2 === void 0) throw Error(`No runtime abstraction layer installed`);
        return t2;
      }
      M(n2, `RAL`), (function(e3) {
        function n3(e4) {
          if (e4 === void 0) throw Error(`No runtime abstraction layer provided`);
          t2 = e4;
        }
        M(n3, `install`), e3.install = n3;
      })(n2 || (n2 = {})), e2.default = n2;
    }
  }), qr = N({
    "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/is.js"(e2) {
      let t2 = s;
      Object[t2(1700)](e2, t2(342), {
        value: true
      }), e2.stringArray = e2.array = e2[t2(1110)] = e2.error = e2.number = e2.string = e2.boolean = void 0;
      function n2(e3) {
        return e3 === true || e3 === false;
      }
      M(n2, `boolean`), e2.boolean = n2;
      function r2(e3) {
        return typeof e3 == `string` || e3 instanceof String;
      }
      M(r2, `string`), e2[t2(1730)] = r2;
      function i2(e3) {
        return typeof e3 == `number` || e3 instanceof Number;
      }
      M(i2, `number`), e2.number = i2;
      function a2(e3) {
        return e3 instanceof Error;
      }
      M(a2, `error`), e2[t2(1527)] = a2;
      function o2(e3) {
        return typeof e3 == `function`;
      }
      M(o2, `func`), e2.func = o2;
      function c2(e3) {
        return Array.isArray(e3);
      }
      M(c2, `array`), e2.array = c2;
      function l2(e3) {
        return c2(e3) && e3.every((e4) => r2(e4));
      }
      M(l2, `stringArray`), e2[t2(328)] = l2;
    }
  }), Jr = N({
    "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/events.js"(e2) {
      let t2 = s;
      var n2, r2;
      Object[t2(1700)](e2, `__esModule`, {
        value: true
      }), e2[t2(1075)] = e2.Event = void 0;
      var i2 = Kr(), a2;
      (function(e3) {
        let t3 = {
          dispose() {
          }
        };
        e3.None = function() {
          return t3;
        };
      })(a2 || (e2[t2(1739)] = a2 = {}));
      var o2 = (n2 = class {
        add(e3, n3 = null, r3) {
          let i3 = t2;
          this._callbacks || (this._callbacks = [], this._contexts = []), this._callbacks.push(e3), this._contexts.push(n3), Array[i3(1426)](r3) && r3[i3(1168)]({
            dispose: M(() => this.remove(e3, n3), `dispose`)
          });
        }
        remove(e3, n3 = null) {
          let r3 = t2;
          if (!this._callbacks) return;
          let i3 = false;
          for (let t3 = 0, a3 = this._callbacks.length; t3 < a3; t3++) if (this._callbacks[t3] === e3) if (this[r3(708)][t3] === n3) {
            this[r3(1625)].splice(t3, 1), this._contexts[r3(939)](t3, 1);
            return;
          } else i3 = true;
          if (i3) throw Error(`When adding a listener with a context, you should remove it with the same context`);
        }
        [t2(917)](...e3) {
          if (!this._callbacks) return [];
          let t3 = [], n3 = this._callbacks.slice(0), r3 = this._contexts.slice(0);
          for (let a3 = 0, o3 = n3.length; a3 < o3; a3++) try {
            t3.push(n3[a3].apply(r3[a3], e3));
          } catch (e4) {
            (0, i2.default)().console.error(e4);
          }
          return t3;
        }
        isEmpty() {
          let e3 = t2;
          return !this._callbacks || this[e3(1625)][e3(1663)] === 0;
        }
        dispose() {
          this._callbacks = void 0, this._contexts = void 0;
        }
      }, M(n2, t2(749)), n2), c2 = (r2 = class e3 {
        constructor(e4) {
          this._options = e4;
        }
        get event() {
          let n3 = t2;
          return this._event || (this._event = (t3, n4, r3) => {
            let i3 = X;
            this._callbacks || (this._callbacks = new o2()), this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty() && this._options.onFirstListenerAdd(this), this._callbacks.add(t3, n4);
            let a3 = {
              dispose: M(() => {
                let r4 = X;
                this[r4(1625)] && (this._callbacks[r4(1751)](t3, n4), a3.dispose = e3._noop, this._options && this._options[r4(1427)] && this._callbacks.isEmpty() && this._options.onLastListenerRemove(this));
              }, `dispose`)
            };
            return Array.isArray(r3) && r3[i3(1168)](a3), a3;
          }), this[n3(340)];
        }
        fire(e4) {
          let n3 = t2;
          this[n3(1625)] && this._callbacks[n3(917)].call(this._callbacks, e4);
        }
        dispose() {
          this._callbacks && (this._callbacks = (this._callbacks.dispose(), void 0));
        }
      }, M(r2, t2(1075)), r2);
      e2.Emitter = c2, c2._noop = function() {
      };
    }
  }), Yr = N({
    "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/cancellation.js"(e2) {
      let t2 = s;
      var n2, r2;
      Object.defineProperty(e2, "__esModule", {
        value: true
      }), e2.CancellationTokenSource = e2.CancellationToken = void 0;
      var i2 = Kr(), a2 = qr(), o2 = Jr(), c2;
      (function(e3) {
        let t3 = X;
        e3.None = Object.freeze({
          isCancellationRequested: false,
          onCancellationRequested: o2.Event.None
        }), e3[t3(820)] = Object.freeze({
          isCancellationRequested: true,
          onCancellationRequested: o2.Event.None
        });
        function n3(t4) {
          let n4 = t4;
          return n4 && (n4 === e3.None || n4 === e3.Cancelled || a2.boolean(n4.isCancellationRequested) && !!n4.onCancellationRequested);
        }
        M(n3, `is`), e3.is = n3;
      })(c2 || (e2.CancellationToken = c2 = {}));
      var l2 = Object.freeze(function(e3, t3) {
        let n3 = X, r3 = (0, i2.default)().timer.setTimeout(e3[n3(1704)](t3), 0);
        return {
          dispose() {
            r3.dispose();
          }
        };
      }), u2 = (n2 = class {
        constructor() {
          this._isCancelled = false;
        }
        cancel() {
          let e3 = X;
          this._isCancelled || (this._isCancelled = true, this._emitter && (this._emitter.fire(void 0), this[e3(1475)]()));
        }
        get isCancellationRequested() {
          return this._isCancelled;
        }
        get [t2(1278)]() {
          let e3 = t2;
          return this._isCancelled ? l2 : (this[e3(1733)] || (this._emitter = new o2.Emitter()), this._emitter.event);
        }
        dispose() {
          this._emitter && (this._emitter = (this._emitter.dispose(), void 0));
        }
      }, M(n2, `MutableToken`), n2);
      e2.CancellationTokenSource = (r2 = class {
        get [t2(1408)]() {
          return this._token || (this._token = new u2()), this._token;
        }
        cancel() {
          let e3 = t2;
          this[e3(1156)] ? this._token[e3(1174)]() : this[e3(1156)] = c2.Cancelled;
        }
        dispose() {
          this._token ? this._token instanceof u2 && this._token.dispose() : this._token = c2.None;
        }
      }, M(r2, `CancellationTokenSource`), r2);
    }
  }), Xr = N({
    "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/messages.js"(e2) {
      let t2 = s;
      var n2, r2, i2, a2, o2, c2, l2, u2, d2, f2, p2, m2, h2, g2, _2, v2, y2, b2, x2, ee2, S2, C2, w2, te2, T2;
      Object.defineProperty(e2, "__esModule", {
        value: true
      }), e2.Message = e2[t2(1708)] = e2.NotificationType8 = e2[t2(1732)] = e2.NotificationType6 = e2.NotificationType5 = e2.NotificationType4 = e2.NotificationType3 = e2.NotificationType2 = e2.NotificationType1 = e2.NotificationType0 = e2.NotificationType = e2.RequestType9 = e2.RequestType8 = e2.RequestType7 = e2.RequestType6 = e2[t2(1244)] = e2.RequestType4 = e2.RequestType3 = e2.RequestType2 = e2.RequestType1 = e2.RequestType = e2.RequestType0 = e2.AbstractMessageSignature = e2[t2(615)] = e2[t2(976)] = e2.ErrorCodes = void 0;
      var E2 = qr(), ne2;
      (function(e3) {
        e3.ParseError = -32700, e3.InvalidRequest = -32600, e3.MethodNotFound = -32601, e3.InvalidParams = -32602, e3.InternalError = -32603, e3.jsonrpcReservedErrorRangeStart = -32099, e3.serverErrorStart = -32099, e3.MessageWriteError = -32099, e3.MessageReadError = -32098, e3.PendingResponseRejected = -32097, e3.ConnectionInactive = -32096, e3.ServerNotInitialized = -32002, e3.UnknownErrorCode = -32001, e3.jsonrpcReservedErrorRangeEnd = -32e3, e3.serverErrorEnd = -32e3;
      })(ne2 || (e2[t2(580)] = ne2 = {})), e2.ResponseError = (n2 = class e3 extends Error {
        constructor(t3, n3, r3) {
          super(n3), this.code = E2.number(t3) ? t3 : ne2.UnknownErrorCode, this.data = r3, Object.setPrototypeOf(this, e3.prototype);
        }
        toJson() {
          let e4 = t2, n3 = {
            code: this.code,
            message: this.message
          };
          return this.data !== void 0 && (n3.data = this[e4(1791)]), n3;
        }
      }, M(n2, `ResponseError`), n2);
      var D2 = (r2 = class e3 {
        constructor(e4) {
          this.kind = e4;
        }
        static is(n3) {
          let r3 = t2;
          return n3 === e3.auto || n3 === e3[r3(1002)] || n3 === e3.byPosition;
        }
        toString() {
          return this.kind;
        }
      }, M(r2, `ParameterStructures`), r2);
      e2.ParameterStructures = D2, D2.auto = new D2(`auto`), D2.byPosition = new D2(`byPosition`), D2.byName = new D2(`byName`);
      var O2 = (i2 = class {
        constructor(e3, t3) {
          this.method = e3, this.numberOfParams = t3;
        }
        get [t2(414)]() {
          return D2.auto;
        }
      }, M(i2, `AbstractMessageSignature`), i2);
      e2.AbstractMessageSignature = O2, e2.RequestType0 = (a2 = class extends O2 {
        constructor(e3) {
          super(e3, 0);
        }
      }, M(a2, `RequestType0`), a2), e2[t2(660)] = (o2 = class extends O2 {
        constructor(e3, n3 = D2[t2(1494)]) {
          let r3 = t2;
          super(e3, 1), this[r3(1087)] = n3;
        }
        get [t2(414)]() {
          return this._parameterStructures;
        }
      }, M(o2, `RequestType`), o2), e2.RequestType1 = (c2 = class extends O2 {
        constructor(e3, n3 = D2[t2(1494)]) {
          let r3 = t2;
          super(e3, 1), this[r3(1087)] = n3;
        }
        get parameterStructures() {
          return this._parameterStructures;
        }
      }, M(c2, `RequestType1`), c2), e2.RequestType2 = (l2 = class extends O2 {
        constructor(e3) {
          super(e3, 2);
        }
      }, M(l2, `RequestType2`), l2), e2.RequestType3 = (u2 = class extends O2 {
        constructor(e3) {
          super(e3, 3);
        }
      }, M(u2, t2(1348)), u2), e2.RequestType4 = (d2 = class extends O2 {
        constructor(e3) {
          super(e3, 4);
        }
      }, M(d2, `RequestType4`), d2), e2[t2(1244)] = (f2 = class extends O2 {
        constructor(e3) {
          super(e3, 5);
        }
      }, M(f2, `RequestType5`), f2), e2.RequestType6 = (p2 = class extends O2 {
        constructor(e3) {
          super(e3, 6);
        }
      }, M(p2, `RequestType6`), p2), e2.RequestType7 = (m2 = class extends O2 {
        constructor(e3) {
          super(e3, 7);
        }
      }, M(m2, `RequestType7`), m2), e2[t2(994)] = (h2 = class extends O2 {
        constructor(e3) {
          super(e3, 8);
        }
      }, M(h2, `RequestType8`), h2), e2.RequestType9 = (g2 = class extends O2 {
        constructor(e3) {
          super(e3, 9);
        }
      }, M(g2, `RequestType9`), g2), e2.NotificationType = (_2 = class extends O2 {
        constructor(e3, t3 = D2.auto) {
          super(e3, 1), this._parameterStructures = t3;
        }
        get parameterStructures() {
          return this._parameterStructures;
        }
      }, M(_2, t2(1385)), _2), e2.NotificationType0 = (v2 = class extends O2 {
        constructor(e3) {
          super(e3, 0);
        }
      }, M(v2, `NotificationType0`), v2), e2.NotificationType1 = (y2 = class extends O2 {
        constructor(e3, t3 = D2.auto) {
          super(e3, 1), this._parameterStructures = t3;
        }
        get [t2(414)]() {
          return this._parameterStructures;
        }
      }, M(y2, `NotificationType1`), y2), e2.NotificationType2 = (b2 = class extends O2 {
        constructor(e3) {
          super(e3, 2);
        }
      }, M(b2, `NotificationType2`), b2), e2.NotificationType3 = (x2 = class extends O2 {
        constructor(e3) {
          super(e3, 3);
        }
      }, M(x2, `NotificationType3`), x2), e2.NotificationType4 = (ee2 = class extends O2 {
        constructor(e3) {
          super(e3, 4);
        }
      }, M(ee2, `NotificationType4`), ee2), e2.NotificationType5 = (S2 = class extends O2 {
        constructor(e3) {
          super(e3, 5);
        }
      }, M(S2, `NotificationType5`), S2), e2.NotificationType6 = (C2 = class extends O2 {
        constructor(e3) {
          super(e3, 6);
        }
      }, M(C2, `NotificationType6`), C2), e2.NotificationType7 = (w2 = class extends O2 {
        constructor(e3) {
          super(e3, 7);
        }
      }, M(w2, `NotificationType7`), w2), e2.NotificationType8 = (te2 = class extends O2 {
        constructor(e3) {
          super(e3, 8);
        }
      }, M(te2, `NotificationType8`), te2), e2.NotificationType9 = (T2 = class extends O2 {
        constructor(e3) {
          super(e3, 9);
        }
      }, M(T2, `NotificationType9`), T2);
      var re2;
      (function(e3) {
        function t3(e4) {
          let t4 = e4;
          return t4 && E2.string(t4.method) && (E2.string(t4.id) || E2.number(t4.id));
        }
        M(t3, `isRequest`), e3.isRequest = t3;
        function n3(e4) {
          let t4 = e4;
          return t4 && E2.string(t4.method) && e4.id === void 0;
        }
        M(n3, `isNotification`), e3.isNotification = n3;
        function r3(e4) {
          let t4 = e4;
          return t4 && (t4.result !== void 0 || !!t4.error) && (E2.string(t4.id) || E2.number(t4.id) || t4.id === null);
        }
        M(r3, `isResponse`), e3.isResponse = r3;
      })(re2 || (e2.Message = re2 = {}));
    }
  }), Zr = N({
    "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/linkedMap.js"(e2) {
      let t2 = s;
      var n2, r2;
      let i2;
      var a2;
      Object.defineProperty(e2, "__esModule", {
        value: true
      }), e2.LRUCache = e2[t2(403)] = e2[t2(1566)] = void 0;
      var o2;
      (function(e3) {
        let n3 = t2;
        e3[n3(1459)] = 0, e3.First = 1, e3.AsOld = e3.First, e3.Last = 2, e3.AsNew = e3.Last;
      })(o2 || (e2[t2(1566)] = o2 = {}));
      var c2 = (i2 = (a2 = Symbol.toStringTag, Symbol.iterator), n2 = class {
        constructor() {
          let e3 = t2;
          this[a2] = `LinkedMap`, this._map = /* @__PURE__ */ new Map(), this._head = void 0, this._tail = void 0, this[e3(1738)] = 0, this._state = 0;
        }
        clear() {
          let e3 = t2;
          this._map.clear(), this._head = void 0, this._tail = void 0, this[e3(1738)] = 0, this._state++;
        }
        isEmpty() {
          return !this._head && !this._tail;
        }
        get size() {
          return this._size;
        }
        get first() {
          var _a2;
          let e3 = t2;
          return (_a2 = this._head) == null ? void 0 : _a2[e3(1371)];
        }
        get last() {
          var _a2;
          return (_a2 = this._tail) == null ? void 0 : _a2.value;
        }
        has(e3) {
          return this._map.has(e3);
        }
        get(e3, n3 = o2.None) {
          let r3 = t2, i3 = this._map[r3(1419)](e3);
          if (i3) return n3 !== o2[r3(1459)] && this.touch(i3, n3), i3[r3(1371)];
        }
        set(e3, n3, r3 = o2.None) {
          let i3 = t2, a3 = this._map[i3(1419)](e3);
          if (a3) a3.value = n3, r3 !== o2.None && this.touch(a3, r3);
          else {
            switch (a3 = {
              key: e3,
              value: n3,
              next: void 0,
              previous: void 0
            }, r3) {
              case o2.None:
                this[i3(1160)](a3);
                break;
              case o2.First:
                this.addItemFirst(a3);
                break;
              case o2[i3(530)]:
                this.addItemLast(a3);
                break;
              default:
                this.addItemLast(a3);
                break;
            }
            this._map.set(e3, a3), this._size++;
          }
          return this;
        }
        delete(e3) {
          return !!this.remove(e3);
        }
        remove(e3) {
          let t3 = this._map.get(e3);
          if (t3) return this._map.delete(e3), this.removeItem(t3), this._size--, t3.value;
        }
        shift() {
          let e3 = t2;
          if (!this._head && !this._tail) return;
          if (!this[e3(710)] || !this._tail) throw Error(`Invalid list`);
          let n3 = this._head;
          return this._map.delete(n3.key), this.removeItem(n3), this._size--, n3.value;
        }
        forEach(e3, n3) {
          let r3 = t2, i3 = this[r3(906)], a3 = this._head;
          for (; a3; ) {
            if (n3 ? e3.bind(n3)(a3.value, a3.key, this) : e3(a3.value, a3[r3(783)], this), this._state !== i3) throw Error(`LinkedMap got modified during iteration.`);
            a3 = a3.next;
          }
        }
        keys() {
          let e3 = t2, n3 = this[e3(906)], r3 = this._head, i3 = {
            [Symbol.iterator]: () => i3,
            next: M(() => {
              let t3 = e3;
              if (this[t3(906)] !== n3) throw Error(`LinkedMap got modified during iteration.`);
              if (r3) {
                let e4 = {
                  value: r3.key,
                  done: false
                };
                return r3 = r3.next, e4;
              } else return {
                value: void 0,
                done: true
              };
            }, e3(1781))
          };
          return i3;
        }
        values() {
          let e3 = this._state, t3 = this._head, n3 = {
            [Symbol.iterator]: () => n3,
            next: M(() => {
              let n4 = X;
              if (this._state !== e3) throw Error(n4(1135));
              if (t3) {
                let e4 = {
                  value: t3.value,
                  done: false
                };
                return t3 = t3.next, e4;
              } else return {
                value: void 0,
                done: true
              };
            }, `next`)
          };
          return n3;
        }
        entries() {
          let e3 = t2, n3 = this._state, r3 = this._head, i3 = {
            [Symbol[e3(443)]]: () => i3,
            next: M(() => {
              let t3 = e3;
              if (this._state !== n3) throw Error(`LinkedMap got modified during iteration.`);
              if (r3) {
                let e4 = {
                  value: [
                    r3.key,
                    r3[t3(1371)]
                  ],
                  done: false
                };
                return r3 = r3[t3(1781)], e4;
              } else return {
                value: void 0,
                done: true
              };
            }, e3(1781))
          };
          return i3;
        }
        [i2]() {
          return this.entries();
        }
        [t2(1701)](e3) {
          let n3 = t2;
          if (e3 >= this[n3(693)]) return;
          if (e3 === 0) {
            this.clear();
            return;
          }
          let r3 = this[n3(710)], i3 = this.size;
          for (; r3 && i3 > e3; ) this._map.delete(r3.key), r3 = r3.next, i3--;
          this._head = r3, this[n3(1738)] = i3, r3 && (r3.previous = void 0), this._state++;
        }
        addItemFirst(e3) {
          let n3 = t2;
          if (!this._head && !this._tail) this._tail = e3;
          else if (this._head) e3.next = this._head, this._head.previous = e3;
          else throw Error(`Invalid list`);
          this._head = e3, this[n3(906)]++;
        }
        [t2(1160)](e3) {
          let n3 = t2;
          if (!this._head && !this[n3(1052)]) this._head = e3;
          else if (this[n3(1052)]) e3.previous = this._tail, this._tail.next = e3;
          else throw Error(`Invalid list`);
          this._tail = e3, this._state++;
        }
        removeItem(e3) {
          let n3 = t2;
          if (e3 === this._head && e3 === this[n3(1052)]) this._head = void 0, this[n3(1052)] = void 0;
          else if (e3 === this._head) {
            if (!e3.next) throw Error(`Invalid list`);
            e3.next.previous = void 0, this[n3(710)] = e3.next;
          } else if (e3 === this._tail) {
            if (!e3.previous) throw Error(`Invalid list`);
            e3.previous.next = void 0, this._tail = e3.previous;
          } else {
            let t3 = e3[n3(1781)], r3 = e3.previous;
            if (!t3 || !r3) throw Error(`Invalid list`);
            t3.previous = r3, r3.next = t3;
          }
          e3.next = void 0, e3.previous = void 0, this._state++;
        }
        touch(e3, n3) {
          let r3 = t2;
          if (!this._head || !this._tail) throw Error(r3(1155));
          if (!(n3 !== o2.First && n3 !== o2[r3(530)])) {
            if (n3 === o2[r3(598)]) {
              if (e3 === this[r3(710)]) return;
              let t3 = e3.next, n4 = e3.previous;
              e3 === this._tail ? (n4.next = void 0, this._tail = n4) : (t3[r3(455)] = n4, n4[r3(1781)] = t3), e3.previous = void 0, e3.next = this._head, this._head.previous = e3, this._head = e3, this[r3(906)]++;
            } else if (n3 === o2.Last) {
              if (e3 === this._tail) return;
              let t3 = e3.next, n4 = e3.previous;
              e3 === this._head ? (t3.previous = void 0, this._head = t3) : (t3.previous = n4, n4.next = t3), e3.next = void 0, e3.previous = this._tail, this._tail.next = e3, this._tail = e3, this._state++;
            }
          }
        }
        toJSON() {
          let e3 = [];
          return this.forEach((t3, n3) => {
            e3[X(1168)]([
              n3,
              t3
            ]);
          }), e3;
        }
        fromJSON(e3) {
          let n3 = t2;
          this.clear();
          for (let [t3, r3] of e3) this[n3(389)](t3, r3);
        }
      }, M(n2, `LinkedMap`), n2);
      e2[t2(403)] = c2, e2.LRUCache = (r2 = class extends c2 {
        constructor(e3, t3 = 1) {
          super(), this._limit = e3, this._ratio = Math.min(Math.max(0, t3), 1);
        }
        get limit() {
          let e3 = t2;
          return this[e3(929)];
        }
        set limit(e3) {
          let n3 = t2;
          this[n3(929)] = e3, this[n3(1465)]();
        }
        get ratio() {
          return this._ratio;
        }
        set ratio(e3) {
          let n3 = t2;
          this[n3(1175)] = Math[n3(1674)](Math[n3(513)](0, e3), 1), this.checkTrim();
        }
        get(e3, n3 = o2[t2(1523)]) {
          return super.get(e3, n3);
        }
        peek(e3) {
          return super.get(e3, o2.None);
        }
        set(e3, n3) {
          return super[t2(389)](e3, n3, o2.Last), this.checkTrim(), this;
        }
        checkTrim() {
          let e3 = t2;
          this[e3(693)] > this._limit && this.trimOld(Math.round(this._limit * this._ratio));
        }
      }, M(r2, `LRUCache`), r2);
    }
  }), Qr = N({
    "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/disposable.js"(e2) {
      Object[s(1700)](e2, `__esModule`, {
        value: true
      }), e2.Disposable = void 0;
      var t2;
      (function(e3) {
        function t3(e4) {
          return {
            dispose: e4
          };
        }
        M(t3, `create`), e3.create = t3;
      })(t2 || (e2.Disposable = t2 = {}));
    }
  }), $r = N({
    "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/sharedArrayCancellation.js"(e2) {
      let t2 = s;
      var n2, r2, i2, o2;
      Object.defineProperty(e2, t2(342), {
        value: true
      }), e2.SharedArrayReceiverStrategy = e2[t2(267)] = void 0;
      var c2 = Yr(), l2;
      (function(e3) {
        e3.Continue = 0, e3.Cancelled = 1;
      })(l2 || (l2 = {})), e2.SharedArraySenderStrategy = (n2 = class {
        constructor() {
          this.buffers = /* @__PURE__ */ new Map();
        }
        enableCancellation(e3) {
          let n3 = t2;
          if (e3.id === null) return;
          let r3 = new SharedArrayBuffer(4), i3 = new Int32Array(r3, 0, 1);
          i3[0] = l2.Continue, this[n3(1119)].set(e3.id, r3), e3.$cancellationData = r3;
        }
        [t2(309)](e3, t3) {
          var n3 = this;
          return a(function* () {
            let e4 = n3[X(1119)].get(t3);
            if (e4 === void 0) return;
            let r3 = new Int32Array(e4, 0, 1);
            Atomics.store(r3, 0, l2.Cancelled);
          })();
        }
        cleanup(e3) {
          this.buffers.delete(e3);
        }
        dispose() {
          this.buffers.clear();
        }
      }, M(n2, `SharedArraySenderStrategy`), n2);
      var u2 = (r2 = class {
        constructor(e3) {
          this.data = new Int32Array(e3, 0, 1);
        }
        get isCancellationRequested() {
          return Atomics.load(this.data, 0) === l2.Cancelled;
        }
        get onCancellationRequested() {
          throw Error(`Cancellation over SharedArrayBuffer doesn't support cancellation events`);
        }
      }, M(r2, `SharedArrayBufferCancellationToken`), r2), d2 = (i2 = class {
        constructor(e3) {
          this.token = new u2(e3);
        }
        [t2(1174)]() {
        }
        dispose() {
        }
      }, M(i2, `SharedArrayBufferCancellationTokenSource`), i2);
      e2.SharedArrayReceiverStrategy = (o2 = class {
        constructor() {
          this.kind = `request`;
        }
        createCancellationTokenSource(e3) {
          let t3 = e3.$cancellationData;
          return t3 === void 0 ? new c2.CancellationTokenSource() : new d2(t3);
        }
      }, M(o2, `SharedArrayReceiverStrategy`), o2);
    }
  }), ei = N({
    "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/semaphore.js"(e2) {
      let t2 = s;
      var n2;
      Object[t2(1700)](e2, `__esModule`, {
        value: true
      }), e2[t2(501)] = void 0;
      var r2 = Kr();
      e2.Semaphore = (n2 = class {
        constructor(e3 = 1) {
          let n3 = t2;
          if (e3 <= 0) throw Error(`Capacity must be greater than 0`);
          this[n3(800)] = e3, this._active = 0, this[n3(1602)] = [];
        }
        lock(e3) {
          return new Promise((t3, n3) => {
            let r3 = X;
            this[r3(1602)][r3(1168)]({
              thunk: e3,
              resolve: t3,
              reject: n3
            }), this.runNext();
          });
        }
        get active() {
          let e3 = t2;
          return this[e3(1243)];
        }
        [t2(1232)]() {
          let e3 = t2;
          this._waiting.length === 0 || this[e3(1243)] === this._capacity || (0, r2.default)().timer.setImmediate(() => this.doRunNext());
        }
        doRunNext() {
          let e3 = t2;
          if (this._waiting.length === 0 || this[e3(1243)] === this[e3(800)]) return;
          let n3 = this._waiting.shift();
          if (this[e3(1243)]++, this._active > this._capacity) throw Error(`To many thunks active`);
          try {
            let e4 = n3.thunk();
            e4 instanceof Promise ? e4.then((e5) => {
              this._active--, n3.resolve(e5), this.runNext();
            }, (e5) => {
              this._active--, n3.reject(e5), this.runNext();
            }) : (this._active--, n3.resolve(e4), this.runNext());
          } catch (e4) {
            this._active--, n3.reject(e4), this.runNext();
          }
        }
      }, M(n2, `Semaphore`), n2);
    }
  }), ti = N({
    "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/messageReader.js"(e2) {
      let t2 = s;
      var n2, r2;
      Object.defineProperty(e2, "__esModule", {
        value: true
      }), e2.ReadableStreamMessageReader = e2[t2(654)] = e2[t2(551)] = void 0;
      var i2 = Kr(), o2 = qr(), c2 = Jr(), l2 = ei(), u2;
      (function(e3) {
        function t3(e4) {
          let t4 = X, n3 = e4;
          return n3 && o2[t4(1110)](n3.listen) && o2.func(n3.dispose) && o2.func(n3.onError) && o2.func(n3.onClose) && o2.func(n3.onPartialMessage);
        }
        M(t3, `is`), e3.is = t3;
      })(u2 || (e2.MessageReader = u2 = {}));
      var d2 = (n2 = class {
        constructor() {
          let e3 = t2;
          this.errorEmitter = new c2.Emitter(), this.closeEmitter = new c2.Emitter(), this[e3(745)] = new c2.Emitter();
        }
        dispose() {
          this.errorEmitter.dispose(), this.closeEmitter.dispose();
        }
        get onError() {
          let e3 = t2;
          return this[e3(390)].event;
        }
        fireError(e3) {
          this.errorEmitter.fire(this.asError(e3));
        }
        get onClose() {
          return this.closeEmitter.event;
        }
        fireClose() {
          let e3 = t2;
          this.closeEmitter[e3(916)](void 0);
        }
        get onPartialMessage() {
          let e3 = t2;
          return this[e3(745)].event;
        }
        firePartialMessage(e3) {
          this.partialMessageEmitter.fire(e3);
        }
        asError(e3) {
          return e3 instanceof Error ? e3 : Error(`Reader received error. Reason: ` + (o2.string(e3.message) ? e3.message : `unknown`));
        }
      }, M(n2, t2(654)), n2);
      e2.AbstractMessageReader = d2;
      var f2;
      (function(e3) {
        let n3 = t2;
        function r3(e4) {
          let t3 = X, n4, r4, a2 = /* @__PURE__ */ new Map(), o3, s2 = /* @__PURE__ */ new Map();
          if (e4 === void 0 || typeof e4 == `string`) n4 = e4 ?? `utf-8`;
          else {
            if (n4 = e4.charset ?? `utf-8`, e4.contentDecoder !== void 0 && (r4 = e4.contentDecoder, a2.set(r4.name, r4)), e4.contentDecoders !== void 0) for (let n5 of e4.contentDecoders) a2[t3(389)](n5.name, n5);
            if (e4.contentTypeDecoder !== void 0 && (o3 = e4.contentTypeDecoder, s2.set(o3.name, o3)), e4[t3(451)] !== void 0) for (let t4 of e4.contentTypeDecoders) s2.set(t4.name, t4);
          }
          return o3 === void 0 && (o3 = (0, i2.default)()[t3(595)][t3(971)], s2.set(o3[t3(747)], o3)), {
            charset: n4,
            contentDecoder: r4,
            contentDecoders: a2,
            contentTypeDecoder: o3,
            contentTypeDecoders: s2
          };
        }
        M(r3, n3(385)), e3[n3(385)] = r3;
      })(f2 || (f2 = {})), e2[t2(1482)] = (r2 = class extends d2 {
        constructor(e3, n3) {
          let r3 = t2;
          super(), this.readable = e3, this.options = f2.fromOptions(n3), this.buffer = (0, i2.default)()[r3(1480)].create(this.options.charset), this[r3(1753)] = 1e4, this.nextMessageLength = -1, this.messageToken = 0, this.readSemaphore = new l2.Semaphore(1);
        }
        set partialMessageTimeout(e3) {
          let n3 = t2;
          this[n3(1753)] = e3;
        }
        get partialMessageTimeout() {
          return this._partialMessageTimeout;
        }
        [t2(534)](e3) {
          let n3 = t2;
          this.nextMessageLength = -1, this.messageToken = 0, this.partialMessageTimer = void 0, this.callback = e3;
          let r3 = this[n3(1530)].onData((e4) => {
            this.onData(e4);
          });
          return this.readable.onError((e4) => this.fireError(e4)), this.readable.onClose(() => this.fireClose()), r3;
        }
        onData(e3) {
          let n3 = t2;
          var r3 = this;
          try {
            for (this.buffer.append(e3); ; ) {
              if (this.nextMessageLength === -1) {
                let e5 = this.buffer.tryReadHeaders(true);
                if (!e5) return;
                let t3 = e5.get(`content-length`);
                if (!t3) {
                  this.fireError(Error(`Header must provide a Content-Length property.
` + JSON.stringify(Object.fromEntries(e5))));
                  return;
                }
                let n4 = parseInt(t3);
                if (isNaN(n4)) {
                  this.fireError(Error(`Content-Length value must be a number. Got ` + t3));
                  return;
                }
                this.nextMessageLength = n4;
              }
              let e4 = this.buffer[n3(1053)](this.nextMessageLength);
              if (e4 === void 0) {
                this.setPartialMessageTimer();
                return;
              }
              this.clearPartialMessageTimer(), this.nextMessageLength = -1, this.readSemaphore[n3(678)](a(function* () {
                let t3 = n3, i3 = r3.options.contentDecoder === void 0 ? e4 : yield r3.options.contentDecoder[t3(641)](e4), a2 = yield r3.options.contentTypeDecoder.decode(i3, r3.options);
                r3[t3(1136)](a2);
              })).catch((e5) => {
                let t3 = n3;
                this[t3(1600)](e5);
              });
            }
          } catch (e4) {
            this.fireError(e4);
          }
        }
        clearPartialMessageTimer() {
          let e3 = t2;
          this.partialMessageTimer && (this.partialMessageTimer.dispose(), this[e3(844)] = void 0);
        }
        setPartialMessageTimer() {
          let e3 = t2;
          this.clearPartialMessageTimer(), !(this._partialMessageTimeout <= 0) && (this.partialMessageTimer = (0, i2[e3(778)])().timer.setTimeout((t3, n3) => {
            let r3 = e3;
            this[r3(844)] = void 0, t3 === this.messageToken && (this[r3(1548)]({
              messageToken: t3,
              waitingTime: n3
            }), this.setPartialMessageTimer());
          }, this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout));
        }
      }, M(r2, `ReadableStreamMessageReader`), r2);
    }
  }), ni = N({
    "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/messageWriter.js"(e2) {
      let t2 = s;
      var n2, r2;
      Object[t2(1700)](e2, `__esModule`, {
        value: true
      }), e2.WriteableStreamMessageWriter = e2.AbstractMessageWriter = e2[t2(482)] = void 0;
      var i2 = Kr(), o2 = qr(), c2 = ei(), l2 = Jr(), u2 = `Content-Length: `, d2 = `\r
`, f2;
      (function(e3) {
        function t3(e4) {
          let t4 = X, n3 = e4;
          return n3 && o2.func(n3[t4(1475)]) && o2[t4(1110)](n3.onClose) && o2[t4(1110)](n3.onError) && o2.func(n3.write);
        }
        M(t3, `is`), e3.is = t3;
      })(f2 || (e2.MessageWriter = f2 = {}));
      var p2 = (n2 = class {
        constructor() {
          let e3 = t2;
          this.errorEmitter = new l2.Emitter(), this[e3(980)] = new l2.Emitter();
        }
        [t2(1475)]() {
          let e3 = t2;
          this.errorEmitter.dispose(), this.closeEmitter[e3(1475)]();
        }
        get onError() {
          let e3 = t2;
          return this.errorEmitter[e3(634)];
        }
        [t2(1600)](e3, n3, r3) {
          let i3 = t2;
          this[i3(390)].fire([
            this.asError(e3),
            n3,
            r3
          ]);
        }
        get onClose() {
          return this.closeEmitter.event;
        }
        fireClose() {
          this.closeEmitter.fire(void 0);
        }
        asError(e3) {
          return e3 instanceof Error ? e3 : Error(`Writer received error. Reason: ` + (o2.string(e3.message) ? e3.message : `unknown`));
        }
      }, M(n2, `AbstractMessageWriter`), n2);
      e2.AbstractMessageWriter = p2;
      var m2;
      (function(e3) {
        function t3(e4) {
          return e4 === void 0 || typeof e4 == `string` ? {
            charset: e4 ?? `utf-8`,
            contentTypeEncoder: (0, i2.default)().applicationJson.encoder
          } : {
            charset: e4.charset ?? `utf-8`,
            contentEncoder: e4.contentEncoder,
            contentTypeEncoder: e4.contentTypeEncoder ?? (0, i2.default)().applicationJson.encoder
          };
        }
        M(t3, `fromOptions`), e3.fromOptions = t3;
      })(m2 || (m2 = {})), e2.WriteableStreamMessageWriter = (r2 = class extends p2 {
        constructor(e3, n3) {
          let r3 = t2;
          super(), this.writable = e3, this.options = m2.fromOptions(n3), this[r3(921)] = 0, this[r3(1577)] = new c2.Semaphore(1), this.writable.onError((e4) => this.fireError(e4)), this.writable[r3(841)](() => this[r3(837)]());
        }
        write(e3) {
          var t3 = this;
          return a(function* () {
            return t3.writeSemaphore.lock(a(function* () {
              let n3 = X;
              return t3.options.contentTypeEncoder.encode(e3, t3.options)[n3(1048)]((e4) => t3.options.contentEncoder === void 0 ? e4 : t3.options.contentEncoder.encode(e4)).then((r3) => {
                let i3 = n3, a2 = [];
                return a2.push(u2, r3[i3(977)][i3(752)](), d2), a2.push(d2), t3.doWrite(e3, a2, r3);
              }, (e4) => {
                throw t3.fireError(e4), e4;
              });
            }));
          })();
        }
        doWrite(e3, t3, n3) {
          var r3 = this;
          return a(function* () {
            let i3 = X;
            try {
              return yield r3.writable.write(t3.join(``), `ascii`), r3[i3(400)].write(n3);
            } catch (t4) {
              return r3[i3(630)](t4, e3), Promise.reject(t4);
            }
          })();
        }
        handleError(e3, n3) {
          let r3 = t2;
          this.errorCount++, this[r3(1600)](e3, n3, this.errorCount);
        }
        end() {
          let e3 = t2;
          this[e3(400)].end();
        }
      }, M(r2, `WriteableStreamMessageWriter`), r2);
    }
  }), ri = N({
    "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/messageBuffer.js"(e2) {
      let t2 = s;
      var n2;
      Object.defineProperty(e2, t2(342), {
        value: true
      }), e2.AbstractMessageBuffer = void 0;
      var r2 = 13, i2 = 10, a2 = `\r
`;
      e2[t2(1793)] = (n2 = class {
        constructor(e3 = `utf-8`) {
          let n3 = t2;
          this[n3(1196)] = e3, this[n3(1090)] = [], this[n3(259)] = 0;
        }
        get encoding() {
          return this._encoding;
        }
        [t2(933)](e3) {
          let t3 = typeof e3 == `string` ? this.fromString(e3, this._encoding) : e3;
          this._chunks.push(t3), this._totalLength += t3.byteLength;
        }
        tryReadHeaders(e3 = false) {
          let n3 = t2;
          if (this[n3(1090)].length === 0) return;
          let o2 = 0, s2 = 0, c2 = 0, l2 = 0;
          b3: for (; s2 < this._chunks[n3(1663)]; ) {
            let e4 = this._chunks[s2];
            c2 = 0;
            b4: for (; c2 < e4.length; ) {
              switch (e4[c2]) {
                case r2:
                  switch (o2) {
                    case 0:
                      o2 = 1;
                      break;
                    case 2:
                      o2 = 3;
                      break;
                    default:
                      o2 = 0;
                  }
                  break;
                case i2:
                  switch (o2) {
                    case 1:
                      o2 = 2;
                      break;
                    case 3:
                      o2 = 4, c2++;
                      break b3;
                    default:
                      o2 = 0;
                  }
                  break;
                default:
                  o2 = 0;
              }
              c2++;
            }
            l2 += e4.byteLength, s2++;
          }
          if (o2 !== 4) return;
          let u2 = this._read(l2 + c2), d2 = /* @__PURE__ */ new Map(), f2 = this.toString(u2, `ascii`).split(a2);
          if (f2.length < 2) return d2;
          for (let t3 = 0; t3 < f2.length - 2; t3++) {
            let r3 = f2[t3], i3 = r3.indexOf(`:`);
            if (i3 === -1) throw Error(`Message header must separate key and value using ':'
` + r3);
            let a3 = r3.substr(0, i3), o3 = r3[n3(764)](i3 + 1).trim();
            d2[n3(389)](e3 ? a3.toLowerCase() : a3, o3);
          }
          return d2;
        }
        tryReadBody(e3) {
          if (!(this._totalLength < e3)) return this._read(e3);
        }
        get numberOfBytes() {
          return this._totalLength;
        }
        [t2(1414)](e3) {
          let n3 = t2;
          if (e3 === 0) return this.emptyBuffer();
          if (e3 > this[n3(259)]) throw Error(`Cannot read so many bytes!`);
          if (this._chunks[0].byteLength === e3) {
            let t3 = this._chunks[0];
            return this._chunks.shift(), this._totalLength -= e3, this.asNative(t3);
          }
          if (this._chunks[0][n3(977)] > e3) {
            let t3 = this._chunks[0], n4 = this.asNative(t3, e3);
            return this._chunks[0] = t3.slice(e3), this._totalLength -= e3, n4;
          }
          let r3 = this.allocNative(e3), i3 = 0;
          for (; e3 > 0; ) {
            let t3 = this._chunks[0];
            if (t3.byteLength > e3) {
              let a3 = t3[n3(1656)](0, e3);
              r3.set(a3, i3), i3 += e3, this._chunks[0] = t3.slice(e3), this._totalLength -= e3, e3 -= e3;
            } else r3.set(t3, i3), i3 += t3.byteLength, this._chunks[n3(1689)](), this._totalLength -= t3.byteLength, e3 -= t3.byteLength;
          }
          return r3;
        }
      }, M(n2, `AbstractMessageBuffer`), n2);
    }
  }), ii = N({
    "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/connection.js"(e2) {
      let t2 = s;
      var n2, r2;
      Object.defineProperty(e2, "__esModule", {
        value: true
      }), e2.createMessageConnection = e2.ConnectionOptions = e2.MessageStrategy = e2.CancellationStrategy = e2[t2(1030)] = e2[t2(318)] = e2.RequestCancellationReceiverStrategy = e2.IdCancellationReceiverStrategy = e2.ConnectionStrategy = e2.ConnectionError = e2.ConnectionErrors = e2.LogTraceNotification = e2.SetTraceNotification = e2.TraceFormat = e2.TraceValues = e2.Trace = e2.NullLogger = e2.ProgressType = e2.ProgressToken = void 0;
      var i2 = Kr(), o2 = qr(), c2 = Xr(), l2 = Zr(), u2 = Jr(), d2 = Yr(), f2;
      (function(e3) {
        e3.type = new c2.NotificationType(`$/cancelRequest`);
      })(f2 || (f2 = {}));
      var p2;
      (function(e3) {
        function t3(e4) {
          return typeof e4 == `string` || typeof e4 == `number`;
        }
        M(t3, `is`), e3.is = t3;
      })(p2 || (e2.ProgressToken = p2 = {}));
      var m2;
      (function(e3) {
        let n3 = t2;
        e3.type = new c2.NotificationType(n3(1043));
      })(m2 || (m2 = {})), e2[t2(1586)] = (n2 = class {
        constructor() {
        }
      }, M(n2, `ProgressType`), n2);
      var h2;
      (function(e3) {
        function t3(e4) {
          return o2.func(e4);
        }
        M(t3, `is`), e3.is = t3;
      })(h2 || (h2 = {})), e2.NullLogger = Object.freeze({
        error: M(() => {
        }, t2(1527)),
        warn: M(() => {
        }, `warn`),
        info: M(() => {
        }, `info`),
        log: M(() => {
        }, `log`)
      });
      var g2;
      (function(e3) {
        let n3 = t2;
        e3[e3[n3(684)] = 0] = `Off`, e3[e3.Messages = 1] = `Messages`, e3[e3.Compact = 2] = n3(535), e3[e3.Verbose = 3] = `Verbose`;
      })(g2 || (e2.Trace = g2 = {}));
      var _2;
      (function(e3) {
        e3.Off = `off`, e3.Messages = `messages`, e3.Compact = `compact`, e3.Verbose = `verbose`;
      })(_2 || (e2.TraceValues = _2 = {})), (function(e3) {
        function t3(t4) {
          if (!o2.string(t4)) return e3.Off;
          switch (t4 = t4.toLowerCase(), t4) {
            case `off`:
              return e3.Off;
            case `messages`:
              return e3.Messages;
            case `compact`:
              return e3.Compact;
            case `verbose`:
              return e3.Verbose;
            default:
              return e3.Off;
          }
        }
        M(t3, `fromString`), e3.fromString = t3;
        function n3(t4) {
          let n4 = X;
          switch (t4) {
            case e3[n4(684)]:
              return `off`;
            case e3.Messages:
              return `messages`;
            case e3.Compact:
              return n4(600);
            case e3[n4(975)]:
              return `verbose`;
            default:
              return `off`;
          }
        }
        M(n3, `toString`), e3.toString = n3;
      })(g2 || (e2.Trace = g2 = {}));
      var v2;
      (function(e3) {
        let n3 = t2;
        e3.Text = `text`, e3[n3(627)] = n3(1677);
      })(v2 || (e2.TraceFormat = v2 = {})), (function(e3) {
        function t3(t4) {
          let n3 = X;
          return o2.string(t4) ? (t4 = t4.toLowerCase(), t4 === `json` ? e3[n3(627)] : e3.Text) : e3.Text;
        }
        M(t3, `fromString`), e3.fromString = t3;
      })(v2 || (e2.TraceFormat = v2 = {}));
      var y2;
      (function(e3) {
        e3.type = new c2.NotificationType(`$/setTrace`);
      })(y2 || (e2.SetTraceNotification = y2 = {}));
      var b2;
      (function(e3) {
        e3.type = new c2.NotificationType(`$/logTrace`);
      })(b2 || (e2.LogTraceNotification = b2 = {}));
      var x2;
      (function(e3) {
        let n3 = t2;
        e3[e3.Closed = 1] = `Closed`, e3[e3.Disposed = 2] = `Disposed`, e3[e3.AlreadyListening = 3] = n3(978);
      })(x2 || (e2.ConnectionErrors = x2 = {}));
      var ee2 = (r2 = class e3 extends Error {
        constructor(n3, r3) {
          let i3 = t2;
          super(r3), this.code = n3, Object.setPrototypeOf(this, e3[i3(950)]);
        }
      }, M(r2, t2(956)), r2);
      e2.ConnectionError = ee2;
      var S2;
      (function(e3) {
        function t3(e4) {
          let t4 = e4;
          return t4 && o2.func(t4.cancelUndispatched);
        }
        M(t3, `is`), e3.is = t3;
      })(S2 || (e2.ConnectionStrategy = S2 = {}));
      var C2;
      (function(e3) {
        function t3(e4) {
          let t4 = X, n3 = e4;
          return n3 && (n3.kind === void 0 || n3.kind === `id`) && o2[t4(1110)](n3.createCancellationTokenSource) && (n3.dispose === void 0 || o2.func(n3.dispose));
        }
        M(t3, `is`), e3.is = t3;
      })(C2 || (e2[t2(1520)] = C2 = {}));
      var w2;
      (function(e3) {
        function t3(e4) {
          let t4 = X, n3 = e4;
          return n3 && n3[t4(1079)] === `request` && o2.func(n3.createCancellationTokenSource) && (n3.dispose === void 0 || o2.func(n3[t4(1475)]));
        }
        M(t3, `is`), e3.is = t3;
      })(w2 || (e2.RequestCancellationReceiverStrategy = w2 = {}));
      var te2;
      (function(e3) {
        let n3 = t2;
        e3[n3(569)] = Object.freeze({
          createCancellationTokenSource(e4) {
            return new d2.CancellationTokenSource();
          }
        });
        function r3(e4) {
          return C2.is(e4) || w2.is(e4);
        }
        M(r3, `is`), e3.is = r3;
      })(te2 || (e2.CancellationReceiverStrategy = te2 = {}));
      var T2;
      (function(e3) {
        e3.Message = Object.freeze({
          sendCancellation(e4, t4) {
            return e4.sendNotification(f2.type, {
              id: t4
            });
          },
          cleanup(e4) {
          }
        });
        function t3(e4) {
          let t4 = X, n3 = e4;
          return n3 && o2.func(n3.sendCancellation) && o2.func(n3[t4(757)]);
        }
        M(t3, `is`), e3.is = t3;
      })(T2 || (e2.CancellationSenderStrategy = T2 = {}));
      var E2;
      (function(e3) {
        let n3 = t2;
        e3.Message = Object[n3(440)]({
          receiver: te2[n3(569)],
          sender: T2.Message
        });
        function r3(e4) {
          let t3 = e4;
          return t3 && te2.is(t3.receiver) && T2.is(t3.sender);
        }
        M(r3, `is`), e3.is = r3;
      })(E2 || (e2.CancellationStrategy = E2 = {}));
      var ne2;
      (function(e3) {
        function t3(e4) {
          let t4 = e4;
          return t4 && o2.func(t4.handleMessage);
        }
        M(t3, `is`), e3.is = t3;
      })(ne2 || (e2.MessageStrategy = ne2 = {}));
      var D2;
      (function(e3) {
        function t3(e4) {
          let t4 = X, n3 = e4;
          return n3 && (E2.is(n3.cancellationStrategy) || S2.is(n3[t4(1056)]) || ne2.is(n3.messageStrategy));
        }
        M(t3, `is`), e3.is = t3;
      })(D2 || (e2.ConnectionOptions = D2 = {}));
      var O2;
      (function(e3) {
        let n3 = t2;
        e3[e3.New = 1] = `New`, e3[e3[n3(1588)] = 2] = `Listening`, e3[e3.Closed = 3] = n3(1792), e3[e3.Disposed = 4] = `Disposed`;
      })(O2 || (O2 = {}));
      function re2(n3, r3, s2, _3) {
        let S3 = t2, w3 = s2 === void 0 ? e2.NullLogger : s2, te3 = 0, T3 = 0, D3 = 0, re3, ie2 = /* @__PURE__ */ new Map(), ae2, oe2 = /* @__PURE__ */ new Map(), se2 = /* @__PURE__ */ new Map(), ce2, le2 = new l2.LinkedMap(), ue2 = /* @__PURE__ */ new Map(), de2 = /* @__PURE__ */ new Set(), k2 = /* @__PURE__ */ new Map(), A2 = g2.Off, fe2 = v2.Text, j2, pe2 = O2[S3(1562)], me2 = new u2.Emitter(), he2 = new u2[S3(1075)](), ge2 = new u2[S3(1075)](), _e2 = new u2[S3(1075)](), ve2 = new u2.Emitter(), ye2 = _3 && _3.cancellationStrategy ? _3.cancellationStrategy : E2.Message;
        function be2(e3) {
          let t3 = S3;
          if (e3 === null) throw Error(`Can't send requests with id null since the response can't be correlated.`);
          return t3(1398) + e3[t3(752)]();
        }
        M(be2, `createRequestQueueKey`);
        function xe2(e3) {
          return e3 === null ? `res-unknown-` + (++D3).toString() : `res-` + e3.toString();
        }
        M(xe2, `createResponseQueueKey`);
        function Se2() {
          return `not-` + (++T3).toString();
        }
        M(Se2, `createNotificationQueueKey`);
        function Ce2(e3, t3) {
          let n4 = S3;
          c2.Message.isRequest(t3) ? e3[n4(389)](be2(t3.id), t3) : c2.Message[n4(1442)](t3) ? e3.set(xe2(t3.id), t3) : e3.set(Se2(), t3);
        }
        M(Ce2, `addMessageToQueue`);
        function we2(e3) {
        }
        M(we2, `cancelUndispatched`);
        function Te2() {
          return pe2 === O2.Listening;
        }
        M(Te2, `isListening`);
        function Ee2() {
          return pe2 === O2.Closed;
        }
        M(Ee2, `isClosed`);
        function De2() {
          return pe2 === O2.Disposed;
        }
        M(De2, `isDisposed`);
        function Oe2() {
          let e3 = S3;
          (pe2 === O2[e3(1562)] || pe2 === O2[e3(1588)]) && (pe2 = O2.Closed, he2.fire(void 0));
        }
        M(Oe2, `closeHandler`);
        function ke2(e3) {
          me2.fire([
            e3,
            void 0,
            void 0
          ]);
        }
        M(ke2, `readErrorHandler`);
        function Ae2(e3) {
          me2.fire(e3);
        }
        M(Ae2, S3(564)), n3.onClose(Oe2), n3[S3(1378)](ke2), r3.onClose(Oe2), r3[S3(1378)](Ae2);
        function je2() {
          ce2 || le2.size === 0 || (ce2 = (0, i2.default)().timer.setImmediate(() => {
            ce2 = void 0, Ne2();
          }));
        }
        M(je2, `triggerMessageQueue`);
        function Me2(e3) {
          let t3 = S3;
          c2.Message[t3(1638)](e3) ? Fe2(e3) : c2.Message.isNotification(e3) ? Le2(e3) : c2.Message.isResponse(e3) ? Ie2(e3) : Re2(e3);
        }
        M(Me2, `handleMessage`);
        function Ne2() {
          let e3 = S3;
          if (le2[e3(693)] === 0) return;
          let t3 = le2.shift();
          try {
            let n4 = _3 == null ? void 0 : _3.messageStrategy;
            ne2.is(n4) ? n4[e3(332)](t3, Me2) : Me2(t3);
          } finally {
            je2();
          }
        }
        M(Ne2, S3(1355));
        let Pe2 = M((e3) => {
          let t3 = S3;
          try {
            if (c2[t3(569)][t3(313)](e3) && e3.method === f2.type.method) {
              let n4 = e3.params.id, i3 = be2(n4), a2 = le2.get(i3);
              if (c2.Message.isRequest(a2)) {
                let o4 = _3 == null ? void 0 : _3.connectionStrategy, s3 = o4 && o4.cancelUndispatched ? o4.cancelUndispatched(a2, we2) : void 0;
                if (s3 && (s3[t3(1527)] !== void 0 || s3.result !== void 0)) {
                  le2.delete(i3), k2.delete(n4), s3.id = a2.id, He2(s3, e3.method, Date.now()), r3.write(s3)[t3(718)](() => w3.error(`Sending response for canceled message failed.`));
                  return;
                }
              }
              let o3 = k2.get(n4);
              if (o3 !== void 0) {
                o3.cancel(), We2(e3);
                return;
              } else de2[t3(974)](n4);
            }
            Ce2(le2, e3);
          } finally {
            je2();
          }
        }, `callback`);
        function Fe2(e3) {
          let t3 = S3;
          if (De2()) return;
          function n4(t4, n5, i4) {
            let a3 = X, o3 = {
              jsonrpc: `2.0`,
              id: e3.id
            };
            t4 instanceof c2.ResponseError ? o3.error = t4.toJson() : o3.result = t4 === void 0 ? null : t4, He2(o3, n5, i4), r3.write(o3).catch(() => w3[a3(1527)](`Sending response failed.`));
          }
          M(n4, `reply`);
          function i3(t4, n5, i4) {
            let a3 = X, o3 = {
              jsonrpc: `2.0`,
              id: e3.id,
              error: t4.toJson()
            };
            He2(o3, n5, i4), r3[a3(662)](o3).catch(() => w3.error(`Sending response failed.`));
          }
          M(i3, t3(712));
          function a2(n5, i4, a3) {
            let o3 = t3;
            n5 === void 0 && (n5 = null);
            let s4 = {
              jsonrpc: o3(1169),
              id: e3.id,
              result: n5
            };
            He2(s4, i4, a3), r3.write(s4).catch(() => w3.error(`Sending response failed.`));
          }
          M(a2, `replySuccess`), Ue2(e3);
          let s3 = ie2[t3(1419)](e3.method), l3, u3;
          s3 && (l3 = s3.type, u3 = s3[t3(557)]);
          let d3 = Date.now();
          if (u3 || re3) {
            let r4 = e3.id ?? String(Date.now()), s4 = C2.is(ye2.receiver) ? ye2.receiver.createCancellationTokenSource(r4) : ye2.receiver.createCancellationTokenSource(e3);
            e3.id !== null && de2.has(e3.id) && s4[t3(1174)](), e3.id !== null && k2.set(r4, s4);
            try {
              let f3;
              if (u3) if (e3.params === void 0) {
                if (l3 !== void 0 && l3.numberOfParams !== 0) {
                  i3(new c2[t3(976)](c2.ErrorCodes.InvalidParams, `Request ` + e3.method + ` defines ` + l3[t3(1392)] + t3(1282)), e3[t3(1424)], d3);
                  return;
                }
                f3 = u3(s4.token);
              } else if (Array.isArray(e3.params)) {
                if (l3 !== void 0 && l3[t3(414)] === c2[t3(615)].byName) {
                  i3(new c2.ResponseError(c2.ErrorCodes[t3(1721)], `Request ` + e3.method + ` defines parameters by name but received parameters by position`), e3.method, d3);
                  return;
                }
                f3 = u3(...e3.params, s4.token);
              } else {
                if (l3 !== void 0 && l3.parameterStructures === c2.ParameterStructures.byPosition) {
                  i3(new c2.ResponseError(c2.ErrorCodes.InvalidParams, `Request ` + e3[t3(1424)] + ` defines parameters by position but received parameters by name`), e3[t3(1424)], d3);
                  return;
                }
                f3 = u3(e3.params, s4.token);
              }
              else re3 && (f3 = re3(e3.method, e3[t3(904)], s4.token));
              let p3 = f3;
              f3 ? p3.then ? p3.then((t4) => {
                k2.delete(r4), n4(t4, e3.method, d3);
              }, (n5) => {
                let a3 = t3;
                k2.delete(r4), n5 instanceof c2[a3(976)] ? i3(n5, e3.method, d3) : n5 && o2.string(n5.message) ? i3(new c2.ResponseError(c2[a3(580)].InternalError, `Request ` + e3.method + ` failed with message: ` + n5.message), e3[a3(1424)], d3) : i3(new c2.ResponseError(c2[a3(580)].InternalError, a3(1505) + e3[a3(1424)] + ` failed unexpectedly without providing any details.`), e3[a3(1424)], d3);
              }) : (k2.delete(r4), n4(f3, e3.method, d3)) : (k2.delete(r4), a2(f3, e3.method, d3));
            } catch (a3) {
              k2.delete(r4), a3 instanceof c2.ResponseError ? n4(a3, e3.method, d3) : a3 && o2[t3(1730)](a3[t3(1417)]) ? i3(new c2.ResponseError(c2.ErrorCodes[t3(681)], `Request ` + e3[t3(1424)] + t3(1504) + a3.message), e3.method, d3) : i3(new c2.ResponseError(c2.ErrorCodes.InternalError, `Request ` + e3[t3(1424)] + ` failed unexpectedly without providing any details.`), e3.method, d3);
            }
          } else i3(new c2.ResponseError(c2.ErrorCodes[t3(1461)], t3(1660) + e3.method), e3.method, d3);
        }
        M(Fe2, `handleRequest`);
        function Ie2(e3) {
          let t3 = S3;
          if (!De2()) if (e3.id === null) e3.error ? w3.error(`Received response message without id: Error is: 
` + JSON.stringify(e3.error, void 0, 4)) : w3.error(`Received response message without id. No further error information provided.`);
          else {
            let n4 = e3.id, r4 = ue2[t3(1419)](n4);
            if (Ge2(e3, r4), r4 !== void 0) {
              ue2.delete(n4);
              try {
                if (e3[t3(1527)]) {
                  let n5 = e3.error;
                  r4.reject(new c2.ResponseError(n5.code, n5[t3(1417)], n5.data));
                } else if (e3[t3(1025)] !== void 0) r4.resolve(e3.result);
                else throw Error(`Should never happen.`);
              } catch (e4) {
                e4.message ? w3[t3(1527)](t3(682) + r4.method + `' failed with message: ` + e4.message) : w3[t3(1527)](`Response handler '` + r4.method + `' failed unexpectedly.`);
              }
            }
          }
        }
        M(Ie2, `handleResponse`);
        function Le2(e3) {
          let t3 = S3;
          if (De2()) return;
          let n4, r4;
          if (e3.method === f2[t3(1487)][t3(1424)]) {
            let n5 = e3.params.id;
            de2[t3(565)](n5), We2(e3);
            return;
          } else {
            let i3 = oe2.get(e3[t3(1424)]);
            i3 && (r4 = i3.handler, n4 = i3.type);
          }
          if (r4 || ae2) try {
            if (We2(e3), r4) if (e3.params === void 0) n4 !== void 0 && n4[t3(1392)] !== 0 && n4.parameterStructures !== c2.ParameterStructures.byName && w3.error(`Notification ` + e3.method + t3(585) + n4.numberOfParams + ` params but received none.`), r4();
            else if (Array.isArray(e3.params)) {
              let i3 = e3.params;
              e3.method === m2[t3(1487)].method && i3.length === 2 && p2.is(i3[0]) ? r4({
                token: i3[0],
                value: i3[1]
              }) : (n4 !== void 0 && (n4[t3(414)] === c2[t3(615)].byName && w3.error(`Notification ` + e3.method + ` defines parameters by name but received parameters by position`), n4.numberOfParams !== e3[t3(904)].length && w3.error(`Notification ` + e3.method + ` defines ` + n4.numberOfParams + ` params but received ` + i3.length + ` arguments`)), r4(...i3));
            } else n4 !== void 0 && n4[t3(414)] === c2[t3(615)][t3(586)] && w3.error(`Notification ` + e3[t3(1424)] + ` defines parameters by position but received parameters by name`), r4(e3.params);
            else ae2 && ae2(e3.method, e3[t3(904)]);
          } catch (n5) {
            n5.message ? w3.error(`Notification handler '` + e3.method + `' failed with message: ` + n5.message) : w3.error(t3(790) + e3.method + `' failed unexpectedly.`);
          }
          else ge2.fire(e3);
        }
        M(Le2, `handleNotification`);
        function Re2(e3) {
          let t3 = S3;
          if (!e3) {
            w3.error(`Received empty message.`);
            return;
          }
          w3.error(`Received message which is neither a response nor a notification message:
` + JSON[t3(770)](e3, null, 4));
          let n4 = e3;
          if (o2.string(n4.id) || o2.number(n4.id)) {
            let e4 = n4.id, t4 = ue2.get(e4);
            t4 && t4.reject(Error(`The received response has neither a result nor an error property.`));
          }
        }
        M(Re2, `handleInvalidMessage`);
        function ze2(e3) {
          if (e3 != null) switch (A2) {
            case g2.Verbose:
              return JSON.stringify(e3, null, 4);
            case g2.Compact:
              return JSON.stringify(e3);
            default:
              return;
          }
        }
        M(ze2, `stringifyTrace`);
        function Be2(e3) {
          let t3 = S3;
          if (!(A2 === g2.Off || !j2)) if (fe2 === v2.Text) {
            let t4;
            (A2 === g2.Verbose || A2 === g2.Compact) && e3.params && (t4 = `Params: ` + ze2(e3.params) + `

`), j2.log(`Sending request '` + e3.method + ` - (` + e3.id + `)'.`, t4);
          } else Ke2(t3(1481), e3);
        }
        M(Be2, `traceSendingRequest`);
        function Ve2(e3) {
          if (!(A2 === g2[S3(684)] || !j2)) if (fe2 === v2.Text) {
            let t3;
            (A2 === g2.Verbose || A2 === g2.Compact) && (t3 = e3.params ? `Params: ` + ze2(e3.params) + `

` : `No parameters provided.

`), j2.log(`Sending notification '` + e3.method + `'.`, t3);
          } else Ke2(`send-notification`, e3);
        }
        M(Ve2, `traceSendingNotification`);
        function He2(e3, t3, n4) {
          let r4 = S3;
          if (!(A2 === g2.Off || !j2)) if (fe2 === v2.Text) {
            let i3;
            (A2 === g2.Verbose || A2 === g2.Compact) && (e3.error && e3.error[r4(1791)] ? i3 = `Error data: ` + ze2(e3[r4(1527)].data) + `

` : e3.result ? i3 = r4(1323) + ze2(e3.result) + `

` : e3.error === void 0 && (i3 = `No result returned.

`)), j2[r4(413)](`Sending response '` + t3 + ` - (` + e3.id + r4(1437) + (Date.now() - n4) + `ms`, i3);
          } else Ke2(`send-response`, e3);
        }
        M(He2, `traceSendingResponse`);
        function Ue2(e3) {
          let t3 = S3;
          if (!(A2 === g2.Off || !j2)) if (fe2 === v2.Text) {
            let n4;
            (A2 === g2.Verbose || A2 === g2[t3(535)]) && e3.params && (n4 = `Params: ` + ze2(e3.params) + `

`), j2.log(`Received request '` + e3.method + ` - (` + e3.id + t3(1349), n4);
          } else Ke2(`receive-request`, e3);
        }
        M(Ue2, S3(293));
        function We2(e3) {
          let t3 = S3;
          if (!(A2 === g2.Off || !j2 || e3.method === b2.type.method)) if (fe2 === v2[t3(874)]) {
            let n4;
            (A2 === g2[t3(975)] || A2 === g2.Compact) && (n4 = e3.params ? `Params: ` + ze2(e3.params) + `

` : `No parameters provided.

`), j2.log(`Received notification '` + e3[t3(1424)] + `'.`, n4);
          } else Ke2(`receive-notification`, e3);
        }
        M(We2, `traceReceivedNotification`);
        function Ge2(e3, t3) {
          let n4 = S3;
          if (!(A2 === g2.Off || !j2)) if (fe2 === v2.Text) {
            let r4;
            if ((A2 === g2.Verbose || A2 === g2.Compact) && (e3.error && e3.error.data ? r4 = n4(1353) + ze2(e3.error.data) + `

` : e3.result ? r4 = `Result: ` + ze2(e3.result) + `

` : e3.error === void 0 && (r4 = `No result returned.

`)), t3) {
              let i3 = e3.error ? ` Request failed: ` + e3[n4(1527)][n4(1417)] + ` (` + e3.error[n4(1118)] + `).` : ``;
              j2.log(`Received response '` + t3.method + ` - (` + e3.id + `)' in ` + (Date.now() - t3[n4(1330)]) + `ms.` + i3, r4);
            } else j2.log(`Received response ` + e3.id + n4(1670), r4);
          } else Ke2(`receive-response`, e3);
        }
        M(Ge2, `traceReceivedResponse`);
        function Ke2(e3, t3) {
          let n4 = S3;
          if (!j2 || A2 === g2[n4(684)]) return;
          let r4 = {
            isLSPMessage: true,
            type: e3,
            message: t3,
            timestamp: Date.now()
          };
          j2[n4(413)](r4);
        }
        M(Ke2, `logLSPMessage`);
        function qe2() {
          let e3 = S3;
          if (Ee2()) throw new ee2(x2[e3(1792)], `Connection is closed.`);
          if (De2()) throw new ee2(x2[e3(925)], `Connection is disposed.`);
        }
        M(qe2, `throwIfClosedOrDisposed`);
        function Je2() {
          let e3 = S3;
          if (Te2()) throw new ee2(x2[e3(978)], `Connection is already listening`);
        }
        M(Je2, S3(536));
        function Ye2() {
          if (!Te2()) throw Error(`Call listen() first.`);
        }
        M(Ye2, `throwIfNotListening`);
        function Xe2(e3) {
          return e3 === void 0 ? null : e3;
        }
        M(Xe2, `undefinedToNull`);
        function Ze2(e3) {
          if (e3 !== null) return e3;
        }
        M(Ze2, `nullToUndefined`);
        function Qe2(e3) {
          return e3 != null && !Array.isArray(e3) && typeof e3 == `object`;
        }
        M(Qe2, S3(353));
        function $e2(e3, t3) {
          let n4 = S3;
          switch (e3) {
            case c2[n4(615)].auto:
              return Qe2(t3) ? Ze2(t3) : [
                Xe2(t3)
              ];
            case c2.ParameterStructures.byName:
              if (!Qe2(t3)) throw Error(`Received parameters by name but param is not an object literal.`);
              return Ze2(t3);
            case c2[n4(615)][n4(586)]:
              return [
                Xe2(t3)
              ];
            default:
              throw Error(`Unknown parameter structure ` + e3.toString());
          }
        }
        M($e2, `computeSingleParam`);
        function et2(e3, t3) {
          let n4 = S3, r4, i3 = e3.numberOfParams;
          switch (i3) {
            case 0:
              r4 = void 0;
              break;
            case 1:
              r4 = $e2(e3.parameterStructures, t3[0]);
              break;
            default:
              r4 = [];
              for (let e4 = 0; e4 < t3.length && e4 < i3; e4++) r4.push(Xe2(t3[e4]));
              if (t3.length < i3) for (let e4 = t3[n4(1663)]; e4 < i3; e4++) r4[n4(1168)](null);
              break;
          }
          return r4;
        }
        M(et2, `computeMessageParams`);
        let tt2 = {
          sendNotification: M((e3, ...t3) => {
            let n4 = S3;
            qe2();
            let i3, a2;
            if (o2.string(e3)) {
              i3 = e3;
              let r4 = t3[0], o3 = 0, s4 = c2.ParameterStructures.auto;
              c2.ParameterStructures.is(r4) && (o3 = 1, s4 = r4);
              let l3 = t3.length, u3 = l3 - o3;
              switch (u3) {
                case 0:
                  a2 = void 0;
                  break;
                case 1:
                  a2 = $e2(s4, t3[o3]);
                  break;
                default:
                  if (s4 === c2.ParameterStructures.byName) throw Error(`Received ` + u3 + n4(609));
                  a2 = t3.slice(o3, l3).map((e4) => Xe2(e4));
                  break;
              }
            } else {
              let n5 = t3;
              i3 = e3.method, a2 = et2(e3, n5);
            }
            let s3 = {
              jsonrpc: n4(1169),
              method: i3,
              params: a2
            };
            return Ve2(s3), r3.write(s3)[n4(718)]((e4) => {
              throw w3.error(`Sending notification failed.`), e4;
            });
          }, S3(265)),
          onNotification: M((e3, t3) => {
            let n4 = S3;
            qe2();
            let r4;
            return o2.func(e3) ? ae2 = e3 : t3 && (o2.string(e3) ? (r4 = e3, oe2.set(e3, {
              type: void 0,
              handler: t3
            })) : (r4 = e3[n4(1424)], oe2.set(e3.method, {
              type: e3,
              handler: t3
            }))), {
              dispose: M(() => {
                r4 === void 0 ? ae2 = void 0 : oe2.delete(r4);
              }, `dispose`)
            };
          }, `onNotification`),
          onProgress: M((e3, t3, n4) => {
            let r4 = S3;
            if (se2.has(t3)) throw Error(`Progress handler for token ` + t3 + ` already registered`);
            return se2.set(t3, n4), {
              dispose: M(() => {
                se2[X(565)](t3);
              }, r4(1475))
            };
          }, S3(902)),
          sendProgress: M((e3, t3, n4) => tt2.sendNotification(m2.type, {
            token: t3,
            value: n4
          }), S3(1580)),
          onUnhandledProgress: _e2.event,
          sendRequest: M((e3, ...t3) => {
            let n4 = S3;
            qe2(), Ye2();
            let i3, s3, l3;
            if (o2[n4(1730)](e3)) {
              i3 = e3;
              let r4 = t3[0], a2 = t3[t3.length - 1], o3 = 0, u4 = c2.ParameterStructures.auto;
              c2[n4(615)].is(r4) && (o3 = 1, u4 = r4);
              let f4 = t3.length;
              d2.CancellationToken.is(a2) && (--f4, l3 = a2);
              let p4 = f4 - o3;
              switch (p4) {
                case 0:
                  s3 = void 0;
                  break;
                case 1:
                  s3 = $e2(u4, t3[o3]);
                  break;
                default:
                  if (u4 === c2.ParameterStructures.byName) throw Error(n4(619) + p4 + ` parameters for 'by Name' request parameter structure.`);
                  s3 = t3.slice(o3, f4).map((e4) => Xe2(e4));
                  break;
              }
            } else {
              let n5 = t3;
              i3 = e3.method, s3 = et2(e3, n5);
              let r4 = e3.numberOfParams;
              l3 = d2.CancellationToken.is(n5[r4]) ? n5[r4] : void 0;
            }
            let u3 = te3++, f3;
            l3 && (f3 = l3.onCancellationRequested(() => {
              let e4 = n4, t4 = ye2.sender[e4(309)](tt2, u3);
              return t4 === void 0 ? (w3.log(`Received no promise from cancellation strategy when cancelling id ` + u3), Promise[e4(514)]()) : t4[e4(718)](() => {
                let t5 = e4;
                w3.log(t5(773) + u3 + ` failed`);
              });
            }));
            let p3 = {
              jsonrpc: `2.0`,
              id: u3,
              method: i3,
              params: s3
            };
            return Be2(p3), typeof ye2.sender.enableCancellation == `function` && ye2.sender.enableCancellation(p3), new Promise((function() {
              var e4 = a(function* (e5, t4) {
                let n5 = X, a2 = M((t5) => {
                  e5(t5), ye2.sender.cleanup(u3), f3 == null ? void 0 : f3.dispose();
                }, `resolveWithCleanup`), o3 = M((e6) => {
                  let n6 = X;
                  t4(e6), ye2.sender.cleanup(u3), f3 == null ? void 0 : f3[n6(1475)]();
                }, `rejectWithCleanup`), s4 = {
                  method: i3,
                  timerStart: Date[n5(1125)](),
                  resolve: a2,
                  reject: o3
                };
                try {
                  yield r3.write(p3), ue2.set(u3, s4);
                } catch (e6) {
                  throw w3.error(`Sending request failed.`), s4.reject(new c2[n5(976)](c2.ErrorCodes.MessageWriteError, e6.message ? e6[n5(1417)] : `Unknown reason`)), e6;
                }
              });
              return function(t4, n5) {
                return e4.apply(this, arguments);
              };
            })());
          }, `sendRequest`),
          onRequest: M((e3, t3) => {
            let n4 = S3;
            qe2();
            let r4 = null;
            return h2.is(e3) ? (r4 = void 0, re3 = e3) : o2.string(e3) ? (r4 = null, t3 !== void 0 && (r4 = e3, ie2.set(e3, {
              handler: t3,
              type: void 0
            }))) : t3 !== void 0 && (r4 = e3.method, ie2.set(e3[n4(1424)], {
              type: e3,
              handler: t3
            })), {
              dispose: M(() => {
                r4 !== null && (r4 === void 0 ? re3 = void 0 : ie2.delete(r4));
              }, `dispose`)
            };
          }, `onRequest`),
          hasPendingResponse: M(() => ue2.size > 0, `hasPendingResponse`),
          trace: M((function() {
            var e3 = a(function* (e4, t3, n4) {
              let r4 = X, i3 = false, a2 = v2.Text;
              n4 !== void 0 && (o2.boolean(n4) ? i3 = n4 : (i3 = n4.sendNotification || false, a2 = n4.traceFormat || v2.Text)), A2 = e4, fe2 = a2, j2 = A2 === g2.Off ? void 0 : t3, i3 && !Ee2() && !De2() && (yield tt2.sendNotification(y2.type, {
                value: g2[r4(752)](e4)
              }));
            });
            return function(t3, n4, r4) {
              return e3[X(1120)](this, arguments);
            };
          })(), `trace`),
          onError: me2.event,
          onClose: he2.event,
          onUnhandledNotification: ge2[S3(634)],
          onDispose: ve2.event,
          end: M(() => {
            r3.end();
          }, `end`),
          dispose: M(() => {
            let e3 = S3;
            if (De2()) return;
            pe2 = O2[e3(925)], ve2.fire(void 0);
            let t3 = new c2[e3(976)](c2[e3(580)].PendingResponseRejected, `Pending response rejected since connection got disposed`);
            for (let e4 of ue2.values()) e4.reject(t3);
            ue2 = /* @__PURE__ */ new Map(), k2 = /* @__PURE__ */ new Map(), de2 = /* @__PURE__ */ new Set(), le2 = new l2.LinkedMap(), o2[e3(1110)](r3.dispose) && r3.dispose(), o2.func(n3.dispose) && n3[e3(1475)]();
          }, S3(1475)),
          listen: M(() => {
            qe2(), Je2(), pe2 = O2.Listening, n3.listen(Pe2);
          }, `listen`),
          inspect: M(() => {
            (0, i2.default)().console.log(`inspect`);
          }, S3(1006))
        };
        return tt2.onNotification(b2.type, (e3) => {
          let t3 = S3;
          if (A2 === g2.Off || !j2) return;
          let n4 = A2 === g2[t3(975)] || A2 === g2[t3(535)];
          j2[t3(413)](e3.message, n4 ? e3.verbose : void 0);
        }), tt2.onNotification(m2.type, (e3) => {
          let t3 = se2[S3(1419)](e3.token);
          t3 ? t3(e3.value) : _e2.fire(e3);
        }), tt2;
      }
      M(re2, t2(538)), e2.createMessageConnection = re2;
    }
  }), ai = N({
    "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/api.js"(e2) {
      let t2 = s;
      Object.defineProperty(e2, t2(342), {
        value: true
      }), e2.ProgressType = e2.ProgressToken = e2.createMessageConnection = e2.NullLogger = e2.ConnectionOptions = e2.ConnectionStrategy = e2.AbstractMessageBuffer = e2.WriteableStreamMessageWriter = e2[t2(958)] = e2.MessageWriter = e2.ReadableStreamMessageReader = e2.AbstractMessageReader = e2.MessageReader = e2.SharedArrayReceiverStrategy = e2[t2(267)] = e2.CancellationToken = e2.CancellationTokenSource = e2[t2(1075)] = e2[t2(1739)] = e2.Disposable = e2.LRUCache = e2[t2(1566)] = e2.LinkedMap = e2.ParameterStructures = e2.NotificationType9 = e2.NotificationType8 = e2[t2(1732)] = e2.NotificationType6 = e2.NotificationType5 = e2.NotificationType4 = e2.NotificationType3 = e2.NotificationType2 = e2.NotificationType1 = e2.NotificationType0 = e2.NotificationType = e2.ErrorCodes = e2.ResponseError = e2[t2(960)] = e2.RequestType8 = e2.RequestType7 = e2.RequestType6 = e2.RequestType5 = e2.RequestType4 = e2.RequestType3 = e2.RequestType2 = e2.RequestType1 = e2.RequestType0 = e2.RequestType = e2.Message = e2.RAL = void 0, e2.MessageStrategy = e2.CancellationStrategy = e2.CancellationSenderStrategy = e2.CancellationReceiverStrategy = e2.ConnectionError = e2.ConnectionErrors = e2.LogTraceNotification = e2.SetTraceNotification = e2.TraceFormat = e2.TraceValues = e2.Trace = void 0;
      var n2 = Xr();
      Object.defineProperty(e2, "Message", {
        enumerable: true,
        get: M(function() {
          return n2.Message;
        }, t2(1419))
      }), Object[t2(1700)](e2, `RequestType`, {
        enumerable: true,
        get: M(function() {
          return n2[t2(660)];
        }, t2(1419))
      }), Object.defineProperty(e2, t2(763), {
        enumerable: true,
        get: M(function() {
          return n2.RequestType0;
        }, `get`)
      }), Object[t2(1700)](e2, `RequestType1`, {
        enumerable: true,
        get: M(function() {
          return n2.RequestType1;
        }, `get`)
      }), Object[t2(1700)](e2, `RequestType2`, {
        enumerable: true,
        get: M(function() {
          return n2.RequestType2;
        }, `get`)
      }), Object.defineProperty(e2, "RequestType3", {
        enumerable: true,
        get: M(function() {
          return n2.RequestType3;
        }, `get`)
      }), Object.defineProperty(e2, "RequestType4", {
        enumerable: true,
        get: M(function() {
          return n2.RequestType4;
        }, `get`)
      }), Object[t2(1700)](e2, `RequestType5`, {
        enumerable: true,
        get: M(function() {
          return n2.RequestType5;
        }, `get`)
      }), Object.defineProperty(e2, "RequestType6", {
        enumerable: true,
        get: M(function() {
          return n2.RequestType6;
        }, `get`)
      }), Object.defineProperty(e2, t2(840), {
        enumerable: true,
        get: M(function() {
          return n2.RequestType7;
        }, `get`)
      }), Object.defineProperty(e2, t2(994), {
        enumerable: true,
        get: M(function() {
          return n2.RequestType8;
        }, `get`)
      }), Object.defineProperty(e2, "RequestType9", {
        enumerable: true,
        get: M(function() {
          return n2[t2(960)];
        }, `get`)
      }), Object.defineProperty(e2, "ResponseError", {
        enumerable: true,
        get: M(function() {
          return n2.ResponseError;
        }, t2(1419))
      }), Object.defineProperty(e2, "ErrorCodes", {
        enumerable: true,
        get: M(function() {
          return n2.ErrorCodes;
        }, `get`)
      }), Object.defineProperty(e2, "NotificationType", {
        enumerable: true,
        get: M(function() {
          return n2.NotificationType;
        }, t2(1419))
      }), Object.defineProperty(e2, "NotificationType0", {
        enumerable: true,
        get: M(function() {
          return n2.NotificationType0;
        }, t2(1419))
      }), Object.defineProperty(e2, "NotificationType1", {
        enumerable: true,
        get: M(function() {
          return n2.NotificationType1;
        }, t2(1419))
      }), Object.defineProperty(e2, "NotificationType2", {
        enumerable: true,
        get: M(function() {
          return n2.NotificationType2;
        }, `get`)
      }), Object.defineProperty(e2, t2(1039), {
        enumerable: true,
        get: M(function() {
          return n2.NotificationType3;
        }, `get`)
      }), Object[t2(1700)](e2, `NotificationType4`, {
        enumerable: true,
        get: M(function() {
          return n2.NotificationType4;
        }, `get`)
      }), Object.defineProperty(e2, "NotificationType5", {
        enumerable: true,
        get: M(function() {
          return n2.NotificationType5;
        }, t2(1419))
      }), Object.defineProperty(e2, "NotificationType6", {
        enumerable: true,
        get: M(function() {
          return n2.NotificationType6;
        }, t2(1419))
      }), Object.defineProperty(e2, "NotificationType7", {
        enumerable: true,
        get: M(function() {
          return n2.NotificationType7;
        }, `get`)
      }), Object.defineProperty(e2, "NotificationType8", {
        enumerable: true,
        get: M(function() {
          return n2.NotificationType8;
        }, `get`)
      }), Object.defineProperty(e2, "NotificationType9", {
        enumerable: true,
        get: M(function() {
          return n2.NotificationType9;
        }, `get`)
      }), Object.defineProperty(e2, "ParameterStructures", {
        enumerable: true,
        get: M(function() {
          return n2[t2(615)];
        }, t2(1419))
      });
      var r2 = Zr();
      Object.defineProperty(e2, "LinkedMap", {
        enumerable: true,
        get: M(function() {
          return r2.LinkedMap;
        }, t2(1419))
      }), Object.defineProperty(e2, t2(1342), {
        enumerable: true,
        get: M(function() {
          return r2.LRUCache;
        }, `get`)
      }), Object.defineProperty(e2, "Touch", {
        enumerable: true,
        get: M(function() {
          return r2.Touch;
        }, `get`)
      });
      var i2 = Qr();
      Object.defineProperty(e2, "Disposable", {
        enumerable: true,
        get: M(function() {
          return i2.Disposable;
        }, t2(1419))
      });
      var a2 = Jr();
      Object.defineProperty(e2, "Event", {
        enumerable: true,
        get: M(function() {
          return a2.Event;
        }, `get`)
      }), Object.defineProperty(e2, "Emitter", {
        enumerable: true,
        get: M(function() {
          return a2.Emitter;
        }, `get`)
      });
      var o2 = Yr();
      Object[t2(1700)](e2, `CancellationTokenSource`, {
        enumerable: true,
        get: M(function() {
          return o2.CancellationTokenSource;
        }, `get`)
      }), Object.defineProperty(e2, "CancellationToken", {
        enumerable: true,
        get: M(function() {
          return o2.CancellationToken;
        }, t2(1419))
      });
      var c2 = $r();
      Object[t2(1700)](e2, `SharedArraySenderStrategy`, {
        enumerable: true,
        get: M(function() {
          return c2.SharedArraySenderStrategy;
        }, `get`)
      }), Object[t2(1700)](e2, `SharedArrayReceiverStrategy`, {
        enumerable: true,
        get: M(function() {
          return c2.SharedArrayReceiverStrategy;
        }, `get`)
      });
      var l2 = ti();
      Object.defineProperty(e2, "MessageReader", {
        enumerable: true,
        get: M(function() {
          return l2.MessageReader;
        }, `get`)
      }), Object[t2(1700)](e2, `AbstractMessageReader`, {
        enumerable: true,
        get: M(function() {
          return l2[t2(654)];
        }, `get`)
      }), Object.defineProperty(e2, "ReadableStreamMessageReader", {
        enumerable: true,
        get: M(function() {
          return l2.ReadableStreamMessageReader;
        }, `get`)
      });
      var u2 = ni();
      Object.defineProperty(e2, "MessageWriter", {
        enumerable: true,
        get: M(function() {
          return u2[t2(482)];
        }, t2(1419))
      }), Object.defineProperty(e2, "AbstractMessageWriter", {
        enumerable: true,
        get: M(function() {
          return u2.AbstractMessageWriter;
        }, `get`)
      }), Object.defineProperty(e2, t2(1228), {
        enumerable: true,
        get: M(function() {
          return u2.WriteableStreamMessageWriter;
        }, `get`)
      });
      var d2 = ri();
      Object.defineProperty(e2, "AbstractMessageBuffer", {
        enumerable: true,
        get: M(function() {
          return d2.AbstractMessageBuffer;
        }, `get`)
      });
      var f2 = ii();
      Object.defineProperty(e2, t2(1672), {
        enumerable: true,
        get: M(function() {
          return f2[t2(1672)];
        }, `get`)
      }), Object.defineProperty(e2, "ConnectionOptions", {
        enumerable: true,
        get: M(function() {
          return f2.ConnectionOptions;
        }, t2(1419))
      }), Object.defineProperty(e2, "NullLogger", {
        enumerable: true,
        get: M(function() {
          return f2.NullLogger;
        }, `get`)
      }), Object[t2(1700)](e2, `createMessageConnection`, {
        enumerable: true,
        get: M(function() {
          return f2.createMessageConnection;
        }, `get`)
      }), Object[t2(1700)](e2, `ProgressToken`, {
        enumerable: true,
        get: M(function() {
          return f2[t2(924)];
        }, t2(1419))
      }), Object.defineProperty(e2, t2(1586), {
        enumerable: true,
        get: M(function() {
          return f2.ProgressType;
        }, `get`)
      }), Object.defineProperty(e2, "Trace", {
        enumerable: true,
        get: M(function() {
          return f2.Trace;
        }, `get`)
      }), Object[t2(1700)](e2, `TraceValues`, {
        enumerable: true,
        get: M(function() {
          return f2[t2(937)];
        }, t2(1419))
      }), Object.defineProperty(e2, "TraceFormat", {
        enumerable: true,
        get: M(function() {
          return f2.TraceFormat;
        }, `get`)
      }), Object.defineProperty(e2, "SetTraceNotification", {
        enumerable: true,
        get: M(function() {
          return f2.SetTraceNotification;
        }, t2(1419))
      }), Object.defineProperty(e2, "LogTraceNotification", {
        enumerable: true,
        get: M(function() {
          return f2[t2(510)];
        }, `get`)
      }), Object.defineProperty(e2, "ConnectionErrors", {
        enumerable: true,
        get: M(function() {
          return f2[t2(1760)];
        }, t2(1419))
      }), Object[t2(1700)](e2, t2(956), {
        enumerable: true,
        get: M(function() {
          return f2.ConnectionError;
        }, `get`)
      }), Object.defineProperty(e2, t2(318), {
        enumerable: true,
        get: M(function() {
          return f2.CancellationReceiverStrategy;
        }, `get`)
      }), Object.defineProperty(e2, "CancellationSenderStrategy", {
        enumerable: true,
        get: M(function() {
          return f2.CancellationSenderStrategy;
        }, `get`)
      }), Object.defineProperty(e2, "CancellationStrategy", {
        enumerable: true,
        get: M(function() {
          return f2.CancellationStrategy;
        }, `get`)
      }), Object.defineProperty(e2, t2(1552), {
        enumerable: true,
        get: M(function() {
          return f2.MessageStrategy;
        }, `get`)
      }), e2.RAL = Kr().default;
    }
  }), oi = N({
    "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/browser/ril.js"(e2) {
      let t2 = s;
      var n2, r2, i2;
      Object.defineProperty(e2, "__esModule", {
        value: true
      });
      var a2 = ai(), o2 = (n2 = class e3 extends a2.AbstractMessageBuffer {
        constructor(e4 = t2(1492)) {
          let n3 = t2;
          super(e4), this[n3(1057)] = new TextDecoder(`ascii`);
        }
        emptyBuffer() {
          return e3.emptyBuffer;
        }
        fromString(e4, t3) {
          return new TextEncoder().encode(e4);
        }
        toString(e4, t3) {
          return t3 === `ascii` ? this.asciiDecoder.decode(e4) : new TextDecoder(t3).decode(e4);
        }
        asNative(e4, t3) {
          return t3 === void 0 ? e4 : e4.slice(0, t3);
        }
        allocNative(e4) {
          return new Uint8Array(e4);
        }
      }, M(n2, `MessageBuffer`), n2);
      o2.emptyBuffer = new Uint8Array();
      var c2 = (r2 = class {
        constructor(e3) {
          let n3 = t2;
          this[n3(889)] = e3, this[n3(1255)] = new a2.Emitter(), this[n3(953)] = (e4) => {
            let t3 = n3;
            e4[t3(1791)].arrayBuffer().then((e5) => {
              this._onData.fire(new Uint8Array(e5));
            }, () => {
              (0, a2[t3(1415)])().console.error(`Converting blob to array buffer failed.`);
            });
          }, this.socket.addEventListener(`message`, this._messageListener);
        }
        onClose(e3) {
          let n3 = t2;
          return this[n3(889)].addEventListener(`close`, e3), a2.Disposable.create(() => this[n3(889)].removeEventListener(n3(1763), e3));
        }
        [t2(1378)](e3) {
          return this.socket.addEventListener(`error`, e3), a2.Disposable.create(() => this.socket.removeEventListener(`error`, e3));
        }
        onEnd(e3) {
          let n3 = t2;
          return this.socket.addEventListener(`end`, e3), a2[n3(1756)].create(() => this.socket.removeEventListener(`end`, e3));
        }
        onData(e3) {
          return this._onData.event(e3);
        }
      }, M(r2, `ReadableStreamWrapper`), r2), l2 = (i2 = class {
        constructor(e3) {
          this.socket = e3;
        }
        onClose(e3) {
          return this.socket.addEventListener(`close`, e3), a2.Disposable.create(() => this.socket.removeEventListener(`close`, e3));
        }
        onError(e3) {
          let n3 = t2;
          return this.socket[n3(1333)](`error`, e3), a2[n3(1756)][n3(1589)](() => this.socket.removeEventListener(`error`, e3));
        }
        onEnd(e3) {
          let n3 = t2;
          return this.socket[n3(1333)](`end`, e3), a2.Disposable[n3(1589)](() => this.socket[n3(1283)](`end`, e3));
        }
        [t2(662)](e3, t3) {
          if (typeof e3 == `string`) {
            if (t3 !== void 0 && t3 !== `utf-8`) throw Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ` + t3);
            this.socket.send(e3);
          } else this.socket.send(e3);
          return Promise.resolve();
        }
        [t2(1488)]() {
          this.socket.close();
        }
      }, M(i2, `WritableStreamWrapper`), i2), u2 = new TextEncoder(), d2 = Object.freeze({
        messageBuffer: Object[t2(440)]({
          create: M((e3) => new o2(e3), `create`)
        }),
        applicationJson: Object.freeze({
          encoder: Object.freeze({
            name: t2(1152),
            encode: M((e3, n3) => {
              let r3 = t2;
              if (n3.charset !== r3(1492)) throw Error(r3(1050) + n3[r3(780)]);
              return Promise.resolve(u2.encode(JSON.stringify(e3, void 0, 0)));
            }, `encode`)
          }),
          decoder: Object.freeze({
            name: `application/json`,
            decode: M((e3, n3) => {
              let r3 = t2;
              if (!(e3 instanceof Uint8Array)) throw Error(r3(1051));
              return Promise.resolve(JSON.parse(new TextDecoder(n3.charset)[r3(641)](e3)));
            }, `decode`)
          })
        }),
        stream: Object.freeze({
          asReadableStream: M((e3) => new c2(e3), `asReadableStream`),
          asWritableStream: M((e3) => new l2(e3), `asWritableStream`)
        }),
        console,
        timer: Object[t2(440)]({
          setTimeout(e3, t3, ...n3) {
            let r3 = setTimeout(e3, t3, ...n3);
            return {
              dispose: M(() => clearTimeout(r3), `dispose`)
            };
          },
          setImmediate(e3, ...t3) {
            let n3 = setTimeout(e3, 0, ...t3);
            return {
              dispose: M(() => clearTimeout(n3), `dispose`)
            };
          },
          setInterval(e3, t3, ...n3) {
            let r3 = setInterval(e3, t3, ...n3);
            return {
              dispose: M(() => clearInterval(r3), `dispose`)
            };
          }
        })
      });
      function f2() {
        return d2;
      }
      M(f2, `RIL`), (function(e3) {
        let n3 = t2;
        function r3() {
          a2.RAL.install(d2);
        }
        M(r3, n3(1148)), e3.install = r3;
      })(f2 || (f2 = {})), e2.default = f2;
    }
  }), si = N({
    "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/browser/main.js"(e2) {
      let t2 = s;
      var n2, r2, i2 = e2 && e2[t2(446)] || (Object.create ? function(e3, n3, r3, i3) {
        let a3 = t2;
        i3 === void 0 && (i3 = r3);
        var o3 = Object.getOwnPropertyDescriptor(n3, r3);
        (!o3 || (`get` in o3 ? !n3.__esModule : o3.writable || o3[a3(1012)])) && (o3 = {
          enumerable: true,
          get: M(function() {
            return n3[r3];
          }, `get`)
        }), Object.defineProperty(e3, i3, o3);
      } : function(e3, t3, n3, r3) {
        r3 === void 0 && (r3 = n3), e3[r3] = t3[n3];
      }), a2 = e2 && e2.__exportStar || function(e3, t3) {
        for (var n3 in e3) n3 !== `default` && !Object.prototype.hasOwnProperty.call(t3, n3) && i2(t3, e3, n3);
      };
      Object.defineProperty(e2, t2(342), {
        value: true
      }), e2.createMessageConnection = e2.BrowserMessageWriter = e2.BrowserMessageReader = void 0, oi().default.install();
      var o2 = ai();
      a2(ai(), e2), e2.BrowserMessageReader = (n2 = class extends o2.AbstractMessageReader {
        constructor(e3) {
          super(), this._onData = new o2.Emitter(), this._messageListener = (e4) => {
            let t3 = X;
            this._onData[t3(916)](e4.data);
          }, e3.addEventListener(`error`, (e4) => this.fireError(e4)), e3.onmessage = this._messageListener;
        }
        listen(e3) {
          return this._onData.event(e3);
        }
      }, M(n2, `BrowserMessageReader`), n2), e2[t2(555)] = (r2 = class extends o2.AbstractMessageWriter {
        constructor(e3) {
          let n3 = t2;
          super(), this[n3(447)] = e3, this[n3(921)] = 0, e3.addEventListener(`error`, (e4) => this.fireError(e4));
        }
        write(e3) {
          let n3 = t2;
          try {
            return this.port[n3(256)](e3), Promise.resolve();
          } catch (t3) {
            return this.handleError(t3, e3), Promise.reject(t3);
          }
        }
        handleError(e3, n3) {
          let r3 = t2;
          this.errorCount++, this[r3(1600)](e3, n3, this.errorCount);
        }
        [t2(1488)]() {
        }
      }, M(r2, `BrowserMessageWriter`), r2);
      function c2(e3, t3, n3, r3) {
        return n3 === void 0 && (n3 = o2.NullLogger), o2.ConnectionStrategy.is(r3) && (r3 = {
          connectionStrategy: r3
        }), (0, o2.createMessageConnection)(e3, t3, n3, r3);
      }
      M(c2, `createMessageConnection`), e2[t2(538)] = c2;
    }
  }), ci = N({
    "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/browser.js"(e2, t2) {
      t2.exports = si();
    }
  }), L = N({
    "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/messages.js"(e2) {
      let t2 = s;
      var n2, r2, i2, a2, o2;
      Object[t2(1700)](e2, `__esModule`, {
        value: true
      }), e2.ProtocolNotificationType = e2.ProtocolNotificationType0 = e2.ProtocolRequestType = e2.ProtocolRequestType0 = e2.RegistrationType = e2.MessageDirection = void 0;
      var c2 = si(), l2;
      (function(e3) {
        let n3 = t2;
        e3.clientToServer = `clientToServer`, e3.serverToClient = n3(1112), e3[n3(699)] = `both`;
      })(l2 || (e2.MessageDirection = l2 = {})), e2.RegistrationType = (n2 = class {
        constructor(e3) {
          this.method = e3;
        }
      }, M(n2, `RegistrationType`), n2), e2.ProtocolRequestType0 = (r2 = class extends c2.RequestType0 {
        constructor(e3) {
          super(e3);
        }
      }, M(r2, `ProtocolRequestType0`), r2), e2.ProtocolRequestType = (i2 = class extends c2.RequestType {
        constructor(e3) {
          let n3 = t2;
          super(e3, c2.ParameterStructures[n3(1002)]);
        }
      }, M(i2, `ProtocolRequestType`), i2), e2.ProtocolNotificationType0 = (a2 = class extends c2.NotificationType0 {
        constructor(e3) {
          super(e3);
        }
      }, M(a2, `ProtocolNotificationType0`), a2), e2.ProtocolNotificationType = (o2 = class extends c2.NotificationType {
        constructor(e3) {
          super(e3, c2.ParameterStructures.byName);
        }
      }, M(o2, `ProtocolNotificationType`), o2);
    }
  }), li = N({
    "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/utils/is.js"(e2) {
      let t2 = s;
      Object[t2(1700)](e2, `__esModule`, {
        value: true
      }), e2.objectLiteral = e2[t2(371)] = e2.stringArray = e2.array = e2.func = e2[t2(1527)] = e2.number = e2.string = e2.boolean = void 0;
      function n2(e3) {
        return e3 === true || e3 === false;
      }
      M(n2, `boolean`), e2.boolean = n2;
      function r2(e3) {
        return typeof e3 == `string` || e3 instanceof String;
      }
      M(r2, t2(1730)), e2.string = r2;
      function i2(e3) {
        return typeof e3 == `number` || e3 instanceof Number;
      }
      M(i2, `number`), e2.number = i2;
      function a2(e3) {
        return e3 instanceof Error;
      }
      M(a2, t2(1527)), e2.error = a2;
      function o2(e3) {
        return typeof e3 == `function`;
      }
      M(o2, `func`), e2[t2(1110)] = o2;
      function c2(e3) {
        return Array.isArray(e3);
      }
      M(c2, `array`), e2.array = c2;
      function l2(e3) {
        let n3 = t2;
        return c2(e3) && e3[n3(1389)]((e4) => r2(e4));
      }
      M(l2, `stringArray`), e2.stringArray = l2;
      function u2(e3, n3) {
        let r3 = t2;
        return Array.isArray(e3) && e3[r3(1389)](n3);
      }
      M(u2, t2(371)), e2.typedArray = u2;
      function d2(e3) {
        return typeof e3 == `object` && !!e3;
      }
      M(d2, `objectLiteral`), e2.objectLiteral = d2;
    }
  }), ui = N({
    "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.implementation.js"(e2) {
      Object.defineProperty(e2, "__esModule", {
        value: true
      }), e2.ImplementationRequest = void 0;
      var t2 = L(), n2;
      (function(e3) {
        e3.method = `textDocument/implementation`, e3.messageDirection = t2.MessageDirection.clientToServer, e3.type = new t2.ProtocolRequestType(e3.method);
      })(n2 || (e2.ImplementationRequest = n2 = {}));
    }
  }), di = N({
    "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.typeDefinition.js"(e2) {
      let t2 = s;
      Object[t2(1700)](e2, `__esModule`, {
        value: true
      }), e2.TypeDefinitionRequest = void 0;
      var n2 = L(), r2;
      (function(e3) {
        e3.method = `textDocument/typeDefinition`, e3.messageDirection = n2.MessageDirection.clientToServer, e3.type = new n2.ProtocolRequestType(e3.method);
      })(r2 || (e2[t2(709)] = r2 = {}));
    }
  }), fi = N({
    "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.workspaceFolder.js"(e2) {
      let t2 = s;
      Object.defineProperty(e2, t2(342), {
        value: true
      }), e2.DidChangeWorkspaceFoldersNotification = e2.WorkspaceFoldersRequest = void 0;
      var n2 = L(), r2;
      (function(e3) {
        let r3 = t2;
        e3.method = `workspace/workspaceFolders`, e3.messageDirection = n2.MessageDirection.serverToClient, e3.type = new n2.ProtocolRequestType0(e3[r3(1424)]);
      })(r2 || (e2.WorkspaceFoldersRequest = r2 = {}));
      var i2;
      (function(e3) {
        e3.method = `workspace/didChangeWorkspaceFolders`, e3.messageDirection = n2.MessageDirection.clientToServer, e3.type = new n2.ProtocolNotificationType(e3.method);
      })(i2 || (e2.DidChangeWorkspaceFoldersNotification = i2 = {}));
    }
  }), pi = N({
    "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.configuration.js"(e2) {
      let t2 = s;
      Object.defineProperty(e2, "__esModule", {
        value: true
      }), e2[t2(547)] = void 0;
      var n2 = L(), r2;
      (function(e3) {
        let r3 = t2;
        e3[r3(1424)] = `workspace/configuration`, e3.messageDirection = n2.MessageDirection[r3(1112)], e3.type = new n2.ProtocolRequestType(e3[r3(1424)]);
      })(r2 || (e2.ConfigurationRequest = r2 = {}));
    }
  }), mi = N({
    "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.colorProvider.js"(e2) {
      Object.defineProperty(e2, "__esModule", {
        value: true
      }), e2.ColorPresentationRequest = e2.DocumentColorRequest = void 0;
      var t2 = L(), n2;
      (function(e3) {
        e3.method = `textDocument/documentColor`, e3.messageDirection = t2.MessageDirection.clientToServer, e3.type = new t2.ProtocolRequestType(e3.method);
      })(n2 || (e2.DocumentColorRequest = n2 = {}));
      var r2;
      (function(e3) {
        let n3 = X;
        e3.method = `textDocument/colorPresentation`, e3.messageDirection = t2.MessageDirection.clientToServer, e3.type = new t2[n3(1320)](e3.method);
      })(r2 || (e2.ColorPresentationRequest = r2 = {}));
    }
  }), hi = N({
    "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.foldingRange.js"(e2) {
      let t2 = s;
      Object[t2(1700)](e2, t2(342), {
        value: true
      }), e2.FoldingRangeRefreshRequest = e2[t2(412)] = void 0;
      var n2 = L(), r2;
      (function(e3) {
        let r3 = t2;
        e3.method = r3(1304), e3.messageDirection = n2[r3(404)].clientToServer, e3[r3(1487)] = new n2.ProtocolRequestType(e3.method);
      })(r2 || (e2.FoldingRangeRequest = r2 = {}));
      var i2;
      (function(e3) {
        let r3 = t2;
        e3.method = `workspace/foldingRange/refresh`, e3.messageDirection = n2.MessageDirection[r3(1112)], e3.type = new n2.ProtocolRequestType0(e3.method);
      })(i2 || (e2.FoldingRangeRefreshRequest = i2 = {}));
    }
  }), gi = N({
    "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.declaration.js"(e2) {
      let t2 = s;
      Object.defineProperty(e2, "__esModule", {
        value: true
      }), e2[t2(1549)] = void 0;
      var n2 = L(), r2;
      (function(e3) {
        let r3 = t2;
        e3.method = `textDocument/declaration`, e3.messageDirection = n2[r3(404)].clientToServer, e3.type = new n2[r3(1320)](e3.method);
      })(r2 || (e2.DeclarationRequest = r2 = {}));
    }
  }), _i = N({
    "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.selectionRange.js"(e2) {
      Object.defineProperty(e2, "__esModule", {
        value: true
      }), e2.SelectionRangeRequest = void 0;
      var t2 = L(), n2;
      (function(e3) {
        e3.method = X(822), e3.messageDirection = t2.MessageDirection.clientToServer, e3.type = new t2.ProtocolRequestType(e3.method);
      })(n2 || (e2.SelectionRangeRequest = n2 = {}));
    }
  }), vi = N({
    "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.progress.js"(e2) {
      let t2 = s;
      Object[t2(1700)](e2, `__esModule`, {
        value: true
      }), e2.WorkDoneProgressCancelNotification = e2[t2(1372)] = e2.WorkDoneProgress = void 0;
      var n2 = si(), r2 = L(), i2;
      (function(e3) {
        e3.type = new n2.ProgressType();
        function t3(t4) {
          return t4 === e3.type;
        }
        M(t3, `is`), e3.is = t3;
      })(i2 || (e2.WorkDoneProgress = i2 = {}));
      var a2;
      (function(e3) {
        let n3 = t2;
        e3.method = `window/workDoneProgress/create`, e3[n3(338)] = r2.MessageDirection.serverToClient, e3.type = new r2.ProtocolRequestType(e3[n3(1424)]);
      })(a2 || (e2[t2(1372)] = a2 = {}));
      var o2;
      (function(e3) {
        let n3 = t2;
        e3.method = `window/workDoneProgress/cancel`, e3[n3(338)] = r2.MessageDirection[n3(469)], e3.type = new r2[n3(554)](e3.method);
      })(o2 || (e2.WorkDoneProgressCancelNotification = o2 = {}));
    }
  }), yi = N({
    "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.callHierarchy.js"(e2) {
      Object.defineProperty(e2, "__esModule", {
        value: true
      }), e2.CallHierarchyOutgoingCallsRequest = e2.CallHierarchyIncomingCallsRequest = e2.CallHierarchyPrepareRequest = void 0;
      var t2 = L(), n2;
      (function(e3) {
        let n3 = X;
        e3[n3(1424)] = n3(1144), e3.messageDirection = t2.MessageDirection[n3(469)], e3.type = new t2.ProtocolRequestType(e3[n3(1424)]);
      })(n2 || (e2.CallHierarchyPrepareRequest = n2 = {}));
      var r2;
      (function(e3) {
        let n3 = X;
        e3[n3(1424)] = `callHierarchy/incomingCalls`, e3.messageDirection = t2.MessageDirection.clientToServer, e3.type = new t2.ProtocolRequestType(e3.method);
      })(r2 || (e2.CallHierarchyIncomingCallsRequest = r2 = {}));
      var i2;
      (function(e3) {
        e3.method = `callHierarchy/outgoingCalls`, e3.messageDirection = t2.MessageDirection.clientToServer, e3.type = new t2.ProtocolRequestType(e3.method);
      })(i2 || (e2.CallHierarchyOutgoingCallsRequest = i2 = {}));
    }
  }), bi = N({
    "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.semanticTokens.js"(e2) {
      let t2 = s;
      Object[t2(1700)](e2, `__esModule`, {
        value: true
      }), e2.SemanticTokensRefreshRequest = e2.SemanticTokensRangeRequest = e2.SemanticTokensDeltaRequest = e2.SemanticTokensRequest = e2.SemanticTokensRegistrationType = e2.TokenFormat = void 0;
      var n2 = L(), r2;
      (function(e3) {
        e3.Relative = t2(335);
      })(r2 || (e2.TokenFormat = r2 = {}));
      var i2;
      (function(e3) {
        let r3 = t2;
        e3.method = `textDocument/semanticTokens`, e3[r3(1487)] = new n2.RegistrationType(e3[r3(1424)]);
      })(i2 || (e2[t2(1076)] = i2 = {}));
      var a2;
      (function(e3) {
        let r3 = t2;
        e3.method = `textDocument/semanticTokens/full`, e3[r3(338)] = n2.MessageDirection[r3(469)], e3[r3(1487)] = new n2.ProtocolRequestType(e3.method), e3.registrationMethod = i2[r3(1424)];
      })(a2 || (e2.SemanticTokensRequest = a2 = {}));
      var o2;
      (function(e3) {
        let r3 = t2;
        e3.method = r3(1226), e3.messageDirection = n2[r3(404)].clientToServer, e3.type = new n2.ProtocolRequestType(e3.method), e3.registrationMethod = i2.method;
      })(o2 || (e2.SemanticTokensDeltaRequest = o2 = {}));
      var c2;
      (function(e3) {
        let r3 = t2;
        e3[r3(1424)] = `textDocument/semanticTokens/range`, e3.messageDirection = n2.MessageDirection.clientToServer, e3[r3(1487)] = new n2.ProtocolRequestType(e3.method), e3[r3(1610)] = i2.method;
      })(c2 || (e2.SemanticTokensRangeRequest = c2 = {}));
      var l2;
      (function(e3) {
        let r3 = t2;
        e3.method = `workspace/semanticTokens/refresh`, e3[r3(338)] = n2[r3(404)].serverToClient, e3.type = new n2.ProtocolRequestType0(e3[r3(1424)]);
      })(l2 || (e2[t2(1445)] = l2 = {}));
    }
  }), xi = N({
    "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.showDocument.js"(e2) {
      let t2 = s;
      Object[t2(1700)](e2, `__esModule`, {
        value: true
      }), e2.ShowDocumentRequest = void 0;
      var n2 = L(), r2;
      (function(e3) {
        let r3 = t2;
        e3.method = `window/showDocument`, e3.messageDirection = n2[r3(404)].serverToClient, e3.type = new n2.ProtocolRequestType(e3.method);
      })(r2 || (e2.ShowDocumentRequest = r2 = {}));
    }
  }), Si = N({
    "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.linkedEditingRange.js"(e2) {
      Object.defineProperty(e2, "__esModule", {
        value: true
      }), e2.LinkedEditingRangeRequest = void 0;
      var t2 = L(), n2;
      (function(e3) {
        let n3 = X;
        e3[n3(1424)] = `textDocument/linkedEditingRange`, e3.messageDirection = t2[n3(404)][n3(469)], e3.type = new t2.ProtocolRequestType(e3[n3(1424)]);
      })(n2 || (e2.LinkedEditingRangeRequest = n2 = {}));
    }
  }), Ci = N({
    "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.fileOperations.js"(e2) {
      let t2 = s;
      Object.defineProperty(e2, "__esModule", {
        value: true
      }), e2.WillDeleteFilesRequest = e2.DidDeleteFilesNotification = e2.DidRenameFilesNotification = e2.WillRenameFilesRequest = e2.DidCreateFilesNotification = e2.WillCreateFilesRequest = e2.FileOperationPatternKind = void 0;
      var n2 = L(), r2;
      (function(e3) {
        let t3 = X;
        e3.file = `file`, e3.folder = t3(1179);
      })(r2 || (e2.FileOperationPatternKind = r2 = {}));
      var i2;
      (function(e3) {
        let t3 = X;
        e3.method = t3(1007), e3.messageDirection = n2.MessageDirection.clientToServer, e3[t3(1487)] = new n2.ProtocolRequestType(e3.method);
      })(i2 || (e2.WillCreateFilesRequest = i2 = {}));
      var a2;
      (function(e3) {
        let t3 = X;
        e3.method = t3(903), e3.messageDirection = n2[t3(404)].clientToServer, e3.type = new n2.ProtocolNotificationType(e3.method);
      })(a2 || (e2[t2(502)] = a2 = {}));
      var o2;
      (function(e3) {
        let r3 = t2;
        e3.method = `workspace/willRenameFiles`, e3.messageDirection = n2.MessageDirection.clientToServer, e3[r3(1487)] = new n2.ProtocolRequestType(e3[r3(1424)]);
      })(o2 || (e2.WillRenameFilesRequest = o2 = {}));
      var c2;
      (function(e3) {
        let r3 = t2;
        e3.method = `workspace/didRenameFiles`, e3[r3(338)] = n2.MessageDirection.clientToServer, e3.type = new n2.ProtocolNotificationType(e3.method);
      })(c2 || (e2[t2(348)] = c2 = {}));
      var l2;
      (function(e3) {
        let r3 = t2;
        e3.method = `workspace/didDeleteFiles`, e3.messageDirection = n2.MessageDirection.clientToServer, e3.type = new n2.ProtocolNotificationType(e3[r3(1424)]);
      })(l2 || (e2.DidDeleteFilesNotification = l2 = {}));
      var u2;
      (function(e3) {
        let r3 = t2;
        e3[r3(1424)] = `workspace/willDeleteFiles`, e3[r3(338)] = n2.MessageDirection.clientToServer, e3.type = new n2[r3(1320)](e3.method);
      })(u2 || (e2.WillDeleteFilesRequest = u2 = {}));
    }
  }), wi = N({
    "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.moniker.js"(e2) {
      let t2 = s;
      Object[t2(1700)](e2, `__esModule`, {
        value: true
      }), e2[t2(1686)] = e2.MonikerKind = e2[t2(471)] = void 0;
      var n2 = L(), r2;
      (function(e3) {
        let n3 = t2;
        e3.document = n3(1662), e3[n3(1627)] = `project`, e3[n3(465)] = `group`, e3.scheme = `scheme`, e3.global = `global`;
      })(r2 || (e2[t2(471)] = r2 = {}));
      var i2;
      (function(e3) {
        let n3 = t2;
        e3.$import = n3(562), e3.$export = n3(1460), e3.local = `local`;
      })(i2 || (e2.MonikerKind = i2 = {}));
      var a2;
      (function(e3) {
        let r3 = t2;
        e3.method = `textDocument/moniker`, e3.messageDirection = n2.MessageDirection.clientToServer, e3.type = new n2[r3(1320)](e3.method);
      })(a2 || (e2.MonikerRequest = a2 = {}));
    }
  }), Ti = N({
    "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.typeHierarchy.js"(e2) {
      let t2 = s;
      Object.defineProperty(e2, "__esModule", {
        value: true
      }), e2.TypeHierarchySubtypesRequest = e2.TypeHierarchySupertypesRequest = e2.TypeHierarchyPrepareRequest = void 0;
      var n2 = L(), r2;
      (function(e3) {
        let t3 = X;
        e3.method = `textDocument/prepareTypeHierarchy`, e3.messageDirection = n2.MessageDirection[t3(469)], e3.type = new n2.ProtocolRequestType(e3[t3(1424)]);
      })(r2 || (e2.TypeHierarchyPrepareRequest = r2 = {}));
      var i2;
      (function(e3) {
        let t3 = X;
        e3.method = `typeHierarchy/supertypes`, e3.messageDirection = n2.MessageDirection[t3(469)], e3.type = new n2.ProtocolRequestType(e3[t3(1424)]);
      })(i2 || (e2.TypeHierarchySupertypesRequest = i2 = {}));
      var a2;
      (function(e3) {
        let t3 = X;
        e3.method = `typeHierarchy/subtypes`, e3.messageDirection = n2.MessageDirection.clientToServer, e3.type = new n2.ProtocolRequestType(e3[t3(1424)]);
      })(a2 || (e2[t2(401)] = a2 = {}));
    }
  }), Ei = N({
    "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineValue.js"(e2) {
      let t2 = s;
      Object[t2(1700)](e2, `__esModule`, {
        value: true
      }), e2.InlineValueRefreshRequest = e2.InlineValueRequest = void 0;
      var n2 = L(), r2;
      (function(e3) {
        e3.method = `textDocument/inlineValue`, e3.messageDirection = n2.MessageDirection.clientToServer, e3.type = new n2.ProtocolRequestType(e3.method);
      })(r2 || (e2.InlineValueRequest = r2 = {}));
      var i2;
      (function(e3) {
        let r3 = t2;
        e3.method = r3(1511), e3.messageDirection = n2.MessageDirection.serverToClient, e3[r3(1487)] = new n2.ProtocolRequestType0(e3.method);
      })(i2 || (e2[t2(486)] = i2 = {}));
    }
  }), Di = N({
    "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlayHint.js"(e2) {
      let t2 = s;
      Object[t2(1700)](e2, `__esModule`, {
        value: true
      }), e2.InlayHintRefreshRequest = e2.InlayHintResolveRequest = e2.InlayHintRequest = void 0;
      var n2 = L(), r2;
      (function(e3) {
        let r3 = t2;
        e3.method = r3(1491), e3.messageDirection = n2.MessageDirection.clientToServer, e3.type = new n2.ProtocolRequestType(e3[r3(1424)]);
      })(r2 || (e2[t2(1551)] = r2 = {}));
      var i2;
      (function(e3) {
        let r3 = t2;
        e3[r3(1424)] = `inlayHint/resolve`, e3[r3(338)] = n2[r3(404)].clientToServer, e3.type = new n2[r3(1320)](e3[r3(1424)]);
      })(i2 || (e2.InlayHintResolveRequest = i2 = {}));
      var a2;
      (function(e3) {
        let r3 = t2;
        e3.method = `workspace/inlayHint/refresh`, e3.messageDirection = n2[r3(404)].serverToClient, e3.type = new n2.ProtocolRequestType0(e3.method);
      })(a2 || (e2.InlayHintRefreshRequest = a2 = {}));
    }
  }), Oi = N({
    "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.diagnostic.js"(e2) {
      let t2 = s;
      Object.defineProperty(e2, "__esModule", {
        value: true
      }), e2.DiagnosticRefreshRequest = e2.WorkspaceDiagnosticRequest = e2.DocumentDiagnosticRequest = e2.DocumentDiagnosticReportKind = e2[t2(277)] = void 0;
      var n2 = si(), r2 = li(), i2 = L(), a2;
      (function(e3) {
        function t3(e4) {
          let t4 = e4;
          return t4 && r2.boolean(t4.retriggerRequest);
        }
        M(t3, `is`), e3.is = t3;
      })(a2 || (e2.DiagnosticServerCancellationData = a2 = {}));
      var o2;
      (function(e3) {
        e3.Full = `full`, e3.Unchanged = `unchanged`;
      })(o2 || (e2.DocumentDiagnosticReportKind = o2 = {}));
      var c2;
      (function(e3) {
        let r3 = t2;
        e3.method = `textDocument/diagnostic`, e3[r3(338)] = i2[r3(404)].clientToServer, e3.type = new i2.ProtocolRequestType(e3.method), e3.partialResult = new n2.ProgressType();
      })(c2 || (e2.DocumentDiagnosticRequest = c2 = {}));
      var l2;
      (function(e3) {
        let r3 = t2;
        e3[r3(1424)] = `workspace/diagnostic`, e3.messageDirection = i2.MessageDirection.clientToServer, e3.type = new i2.ProtocolRequestType(e3[r3(1424)]), e3.partialResult = new n2.ProgressType();
      })(l2 || (e2.WorkspaceDiagnosticRequest = l2 = {}));
      var u2;
      (function(e3) {
        let n3 = t2;
        e3.method = `workspace/diagnostic/refresh`, e3.messageDirection = i2.MessageDirection[n3(1112)], e3.type = new i2.ProtocolRequestType0(e3.method);
      })(u2 || (e2.DiagnosticRefreshRequest = u2 = {}));
    }
  }), ki = N({
    "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.notebook.js"(e2) {
      let t2 = s;
      Object.defineProperty(e2, "__esModule", {
        value: true
      }), e2.DidCloseNotebookDocumentNotification = e2.DidSaveNotebookDocumentNotification = e2[t2(383)] = e2.NotebookCellArrayChange = e2.DidOpenNotebookDocumentNotification = e2.NotebookDocumentSyncRegistrationType = e2.NotebookDocument = e2.NotebookCell = e2[t2(812)] = e2.NotebookCellKind = void 0;
      var n2 = (Gr(), hn(gn)), r2 = li(), i2 = L(), a2;
      (function(e3) {
        e3.Markup = 1, e3.Code = 2;
        function t3(e4) {
          return e4 === 1 || e4 === 2;
        }
        M(t3, `is`), e3.is = t3;
      })(a2 || (e2.NotebookCellKind = a2 = {}));
      var o2;
      (function(e3) {
        function t3(e4, t4) {
          let n3 = {
            executionOrder: e4
          };
          return (t4 === true || t4 === false) && (n3.success = t4), n3;
        }
        M(t3, `create`), e3.create = t3;
        function i3(e4) {
          let t4 = X, i4 = e4;
          return r2.objectLiteral(i4) && n2.uinteger.is(i4.executionOrder) && (i4.success === void 0 || r2.boolean(i4[t4(423)]));
        }
        M(i3, `is`), e3.is = i3;
        function a3(e4, t4) {
          let n3 = X;
          return e4 === t4 ? true : e4 == null || t4 == null ? false : e4.executionOrder === t4.executionOrder && e4.success === t4[n3(423)];
        }
        M(a3, `equals`), e3.equals = a3;
      })(o2 || (e2[t2(812)] = o2 = {}));
      var c2;
      (function(e3) {
        let i3 = t2;
        function s2(e4, t3) {
          return {
            kind: e4,
            document: t3
          };
        }
        M(s2, i3(1589)), e3.create = s2;
        function c3(e4) {
          let t3 = i3, o3 = e4;
          return r2.objectLiteral(o3) && a2.is(o3.kind) && n2.DocumentUri.is(o3.document) && (o3.metadata === void 0 || r2.objectLiteral(o3[t3(1099)]));
        }
        M(c3, `is`), e3.is = c3;
        function l3(e4, t3) {
          let n3 = i3, r3 = /* @__PURE__ */ new Set();
          return e4.document !== t3[n3(1662)] && r3[n3(974)](`document`), e4.kind !== t3.kind && r3[n3(974)](`kind`), e4.executionSummary !== t3.executionSummary && r3.add(`executionSummary`), (e4.metadata !== void 0 || t3.metadata !== void 0) && !u3(e4[n3(1099)], t3.metadata) && r3.add(`metadata`), (e4[n3(1368)] !== void 0 || t3.executionSummary !== void 0) && !o2[n3(1108)](e4.executionSummary, t3.executionSummary) && r3.add(`executionSummary`), r3;
        }
        M(l3, `diff`), e3.diff = l3;
        function u3(e4, t3) {
          let n3 = i3;
          if (e4 === t3) return true;
          if (e4 == null || t3 == null || typeof e4 != typeof t3 || typeof e4 != `object`) return false;
          let a3 = Array.isArray(e4), o3 = Array.isArray(t3);
          if (a3 !== o3) return false;
          if (a3 && o3) {
            if (e4.length !== t3.length) return false;
            for (let n4 = 0; n4 < e4.length; n4++) if (!u3(e4[n4], t3[n4])) return false;
          }
          if (r2.objectLiteral(e4) && r2.objectLiteral(t3)) {
            let r3 = Object.keys(e4), i4 = Object.keys(t3);
            if (r3.length !== i4[n3(1663)] || (r3[n3(659)](), i4.sort(), !u3(r3, i4))) return false;
            for (let n4 = 0; n4 < r3.length; n4++) {
              let i5 = r3[n4];
              if (!u3(e4[i5], t3[i5])) return false;
            }
          }
          return true;
        }
        M(u3, `equalsMetadata`);
      })(c2 || (e2[t2(576)] = c2 = {}));
      var l2;
      (function(e3) {
        function t3(e4, t4, n3, r3) {
          return {
            uri: e4,
            notebookType: t4,
            version: n3,
            cells: r3
          };
        }
        M(t3, `create`), e3.create = t3;
        function i3(e4) {
          let t4 = X, i4 = e4;
          return r2[t4(1735)](i4) && r2.string(i4.uri) && n2[t4(963)].is(i4.version) && r2.typedArray(i4[t4(813)], c2.is);
        }
        M(i3, `is`), e3.is = i3;
      })(l2 || (e2.NotebookDocument = l2 = {}));
      var u2;
      (function(e3) {
        let n3 = t2;
        e3.method = `notebookDocument/sync`, e3[n3(338)] = i2[n3(404)].clientToServer, e3.type = new i2.RegistrationType(e3.method);
      })(u2 || (e2.NotebookDocumentSyncRegistrationType = u2 = {}));
      var d2;
      (function(e3) {
        let n3 = t2;
        e3[n3(1424)] = `notebookDocument/didOpen`, e3[n3(338)] = i2[n3(404)].clientToServer, e3.type = new i2.ProtocolNotificationType(e3[n3(1424)]), e3.registrationMethod = u2.method;
      })(d2 || (e2[t2(1150)] = d2 = {}));
      var f2;
      (function(e3) {
        let i3 = t2;
        function a3(e4) {
          let t3 = X, i4 = e4;
          return r2.objectLiteral(i4) && n2[t3(1213)].is(i4.start) && n2.uinteger.is(i4.deleteCount) && (i4[t3(813)] === void 0 || r2[t3(371)](i4[t3(813)], c2.is));
        }
        M(a3, `is`), e3.is = a3;
        function o3(e4, t3, n3) {
          let r3 = {
            start: e4,
            deleteCount: t3
          };
          return n3 !== void 0 && (r3.cells = n3), r3;
        }
        M(o3, i3(1589)), e3.create = o3;
      })(f2 || (e2.NotebookCellArrayChange = f2 = {}));
      var p2;
      (function(e3) {
        let n3 = t2;
        e3.method = n3(1094), e3.messageDirection = i2.MessageDirection[n3(469)], e3.type = new i2.ProtocolNotificationType(e3[n3(1424)]), e3.registrationMethod = u2.method;
      })(p2 || (e2[t2(383)] = p2 = {}));
      var m2;
      (function(e3) {
        let n3 = t2;
        e3.method = `notebookDocument/didSave`, e3[n3(338)] = i2[n3(404)].clientToServer, e3.type = new i2.ProtocolNotificationType(e3.method), e3.registrationMethod = u2.method;
      })(m2 || (e2.DidSaveNotebookDocumentNotification = m2 = {}));
      var h2;
      (function(e3) {
        let n3 = t2;
        e3.method = `notebookDocument/didClose`, e3[n3(338)] = i2[n3(404)].clientToServer, e3.type = new i2.ProtocolNotificationType(e3.method), e3.registrationMethod = u2.method;
      })(h2 || (e2.DidCloseNotebookDocumentNotification = h2 = {}));
    }
  }), Ai = N({
    "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineCompletion.js"(e2) {
      let t2 = s;
      Object.defineProperty(e2, "__esModule", {
        value: true
      }), e2[t2(476)] = void 0;
      var n2 = L(), r2;
      (function(e3) {
        let r3 = t2;
        e3.method = `textDocument/inlineCompletion`, e3[r3(338)] = n2.MessageDirection.clientToServer, e3.type = new n2.ProtocolRequestType(e3[r3(1424)]);
      })(r2 || (e2.InlineCompletionRequest = r2 = {}));
    }
  }), ji = N({
    "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.js"(e2) {
      let t2 = s;
      Object[t2(1700)](e2, t2(342), {
        value: true
      }), e2[t2(379)] = e2.CodeActionResolveRequest = e2[t2(781)] = e2.DocumentSymbolRequest = e2[t2(673)] = e2.ReferencesRequest = e2[t2(1059)] = e2[t2(1710)] = e2.SignatureHelpTriggerKind = e2.HoverRequest = e2.CompletionResolveRequest = e2.CompletionRequest = e2.CompletionTriggerKind = e2.PublishDiagnosticsNotification = e2[t2(527)] = e2.RelativePattern = e2.FileChangeType = e2.DidChangeWatchedFilesNotification = e2[t2(1215)] = e2.WillSaveTextDocumentNotification = e2.TextDocumentSaveReason = e2.DidSaveTextDocumentNotification = e2.DidCloseTextDocumentNotification = e2.DidChangeTextDocumentNotification = e2.TextDocumentContentChangeEvent = e2.DidOpenTextDocumentNotification = e2.TextDocumentSyncKind = e2[t2(523)] = e2.LogMessageNotification = e2[t2(1058)] = e2[t2(1524)] = e2.MessageType = e2.DidChangeConfigurationNotification = e2.ExitNotification = e2.ShutdownRequest = e2.InitializedNotification = e2.InitializeErrorCodes = e2.InitializeRequest = e2.WorkDoneProgressOptions = e2.TextDocumentRegistrationOptions = e2[t2(799)] = e2.PositionEncodingKind = e2.FailureHandlingKind = e2.ResourceOperationKind = e2.UnregistrationRequest = e2.RegistrationRequest = e2.DocumentSelector = e2.NotebookCellTextDocumentFilter = e2.NotebookDocumentFilter = e2.TextDocumentFilter = void 0, e2[t2(1686)] = e2.MonikerKind = e2.UniquenessLevel = e2.WillDeleteFilesRequest = e2.DidDeleteFilesNotification = e2.WillRenameFilesRequest = e2.DidRenameFilesNotification = e2.WillCreateFilesRequest = e2[t2(502)] = e2[t2(1737)] = e2.LinkedEditingRangeRequest = e2.ShowDocumentRequest = e2.SemanticTokensRegistrationType = e2.SemanticTokensRefreshRequest = e2.SemanticTokensRangeRequest = e2.SemanticTokensDeltaRequest = e2.SemanticTokensRequest = e2.TokenFormat = e2.CallHierarchyPrepareRequest = e2.CallHierarchyOutgoingCallsRequest = e2.CallHierarchyIncomingCallsRequest = e2.WorkDoneProgressCancelNotification = e2.WorkDoneProgressCreateRequest = e2.WorkDoneProgress = e2.SelectionRangeRequest = e2[t2(1549)] = e2.FoldingRangeRefreshRequest = e2[t2(412)] = e2.ColorPresentationRequest = e2.DocumentColorRequest = e2[t2(547)] = e2.DidChangeWorkspaceFoldersNotification = e2.WorkspaceFoldersRequest = e2[t2(709)] = e2.ImplementationRequest = e2[t2(305)] = e2.ExecuteCommandRequest = e2.PrepareRenameRequest = e2.RenameRequest = e2.PrepareSupportDefaultBehavior = e2.DocumentOnTypeFormattingRequest = e2.DocumentRangesFormattingRequest = e2.DocumentRangeFormattingRequest = e2.DocumentFormattingRequest = e2[t2(458)] = e2.DocumentLinkRequest = e2[t2(1651)] = e2.CodeLensResolveRequest = e2.CodeLensRequest = e2.WorkspaceSymbolResolveRequest = void 0, e2.InlineCompletionRequest = e2.DidCloseNotebookDocumentNotification = e2.DidSaveNotebookDocumentNotification = e2.DidChangeNotebookDocumentNotification = e2.NotebookCellArrayChange = e2.DidOpenNotebookDocumentNotification = e2.NotebookDocumentSyncRegistrationType = e2.NotebookDocument = e2.NotebookCell = e2[t2(812)] = e2[t2(931)] = e2.DiagnosticRefreshRequest = e2.WorkspaceDiagnosticRequest = e2.DocumentDiagnosticRequest = e2.DocumentDiagnosticReportKind = e2.DiagnosticServerCancellationData = e2.InlayHintRefreshRequest = e2.InlayHintResolveRequest = e2[t2(1551)] = e2.InlineValueRefreshRequest = e2.InlineValueRequest = e2[t2(1598)] = e2[t2(401)] = e2.TypeHierarchyPrepareRequest = void 0;
      var n2 = L(), r2 = (Gr(), hn(gn)), i2 = li(), a2 = ui();
      Object.defineProperty(e2, t2(1430), {
        enumerable: true,
        get: M(function() {
          return a2.ImplementationRequest;
        }, t2(1419))
      });
      var o2 = di();
      Object.defineProperty(e2, "TypeDefinitionRequest", {
        enumerable: true,
        get: M(function() {
          return o2.TypeDefinitionRequest;
        }, `get`)
      });
      var c2 = fi();
      Object.defineProperty(e2, "WorkspaceFoldersRequest", {
        enumerable: true,
        get: M(function() {
          return c2.WorkspaceFoldersRequest;
        }, t2(1419))
      }), Object.defineProperty(e2, t2(731), {
        enumerable: true,
        get: M(function() {
          return c2.DidChangeWorkspaceFoldersNotification;
        }, `get`)
      });
      var l2 = pi();
      Object[t2(1700)](e2, t2(547), {
        enumerable: true,
        get: M(function() {
          return l2.ConfigurationRequest;
        }, `get`)
      });
      var u2 = mi();
      Object[t2(1700)](e2, `DocumentColorRequest`, {
        enumerable: true,
        get: M(function() {
          return u2.DocumentColorRequest;
        }, t2(1419))
      }), Object.defineProperty(e2, "ColorPresentationRequest", {
        enumerable: true,
        get: M(function() {
          return u2.ColorPresentationRequest;
        }, t2(1419))
      });
      var d2 = hi();
      Object.defineProperty(e2, "FoldingRangeRequest", {
        enumerable: true,
        get: M(function() {
          return d2[t2(412)];
        }, `get`)
      }), Object[t2(1700)](e2, t2(1486), {
        enumerable: true,
        get: M(function() {
          return d2.FoldingRangeRefreshRequest;
        }, `get`)
      });
      var f2 = gi();
      Object.defineProperty(e2, t2(1549), {
        enumerable: true,
        get: M(function() {
          return f2.DeclarationRequest;
        }, `get`)
      });
      var p2 = _i();
      Object[t2(1700)](e2, `SelectionRangeRequest`, {
        enumerable: true,
        get: M(function() {
          return p2.SelectionRangeRequest;
        }, t2(1419))
      });
      var m2 = vi();
      Object.defineProperty(e2, "WorkDoneProgress", {
        enumerable: true,
        get: M(function() {
          return m2.WorkDoneProgress;
        }, `get`)
      }), Object[t2(1700)](e2, `WorkDoneProgressCreateRequest`, {
        enumerable: true,
        get: M(function() {
          return m2.WorkDoneProgressCreateRequest;
        }, `get`)
      }), Object.defineProperty(e2, "WorkDoneProgressCancelNotification", {
        enumerable: true,
        get: M(function() {
          return m2.WorkDoneProgressCancelNotification;
        }, `get`)
      });
      var h2 = yi();
      Object.defineProperty(e2, "CallHierarchyIncomingCallsRequest", {
        enumerable: true,
        get: M(function() {
          return h2.CallHierarchyIncomingCallsRequest;
        }, `get`)
      }), Object.defineProperty(e2, "CallHierarchyOutgoingCallsRequest", {
        enumerable: true,
        get: M(function() {
          return h2.CallHierarchyOutgoingCallsRequest;
        }, `get`)
      }), Object[t2(1700)](e2, `CallHierarchyPrepareRequest`, {
        enumerable: true,
        get: M(function() {
          return h2.CallHierarchyPrepareRequest;
        }, `get`)
      });
      var g2 = bi();
      Object.defineProperty(e2, "TokenFormat", {
        enumerable: true,
        get: M(function() {
          return g2.TokenFormat;
        }, `get`)
      }), Object.defineProperty(e2, "SemanticTokensRequest", {
        enumerable: true,
        get: M(function() {
          return g2.SemanticTokensRequest;
        }, t2(1419))
      }), Object.defineProperty(e2, "SemanticTokensDeltaRequest", {
        enumerable: true,
        get: M(function() {
          return g2.SemanticTokensDeltaRequest;
        }, t2(1419))
      }), Object.defineProperty(e2, t2(1074), {
        enumerable: true,
        get: M(function() {
          return g2.SemanticTokensRangeRequest;
        }, t2(1419))
      }), Object.defineProperty(e2, "SemanticTokensRefreshRequest", {
        enumerable: true,
        get: M(function() {
          return g2.SemanticTokensRefreshRequest;
        }, `get`)
      }), Object[t2(1700)](e2, t2(1076), {
        enumerable: true,
        get: M(function() {
          return g2.SemanticTokensRegistrationType;
        }, `get`)
      });
      var _2 = xi();
      Object.defineProperty(e2, "ShowDocumentRequest", {
        enumerable: true,
        get: M(function() {
          return _2.ShowDocumentRequest;
        }, `get`)
      });
      var v2 = Si();
      Object[t2(1700)](e2, `LinkedEditingRangeRequest`, {
        enumerable: true,
        get: M(function() {
          return v2[t2(761)];
        }, `get`)
      });
      var y2 = Ci();
      Object.defineProperty(e2, "FileOperationPatternKind", {
        enumerable: true,
        get: M(function() {
          return y2.FileOperationPatternKind;
        }, `get`)
      }), Object[t2(1700)](e2, `DidCreateFilesNotification`, {
        enumerable: true,
        get: M(function() {
          return y2.DidCreateFilesNotification;
        }, `get`)
      }), Object.defineProperty(e2, t2(1452), {
        enumerable: true,
        get: M(function() {
          return y2.WillCreateFilesRequest;
        }, `get`)
      }), Object.defineProperty(e2, "DidRenameFilesNotification", {
        enumerable: true,
        get: M(function() {
          return y2.DidRenameFilesNotification;
        }, `get`)
      }), Object.defineProperty(e2, t2(1766), {
        enumerable: true,
        get: M(function() {
          return y2.WillRenameFilesRequest;
        }, `get`)
      }), Object.defineProperty(e2, t2(1193), {
        enumerable: true,
        get: M(function() {
          return y2.DidDeleteFilesNotification;
        }, `get`)
      }), Object.defineProperty(e2, t2(1158), {
        enumerable: true,
        get: M(function() {
          return y2[t2(1158)];
        }, `get`)
      });
      var b2 = wi();
      Object.defineProperty(e2, "UniquenessLevel", {
        enumerable: true,
        get: M(function() {
          return b2[t2(471)];
        }, `get`)
      }), Object[t2(1700)](e2, `MonikerKind`, {
        enumerable: true,
        get: M(function() {
          return b2.MonikerKind;
        }, `get`)
      }), Object.defineProperty(e2, "MonikerRequest", {
        enumerable: true,
        get: M(function() {
          return b2.MonikerRequest;
        }, `get`)
      });
      var x2 = Ti();
      Object[t2(1700)](e2, `TypeHierarchyPrepareRequest`, {
        enumerable: true,
        get: M(function() {
          return x2.TypeHierarchyPrepareRequest;
        }, `get`)
      }), Object.defineProperty(e2, "TypeHierarchySubtypesRequest", {
        enumerable: true,
        get: M(function() {
          return x2.TypeHierarchySubtypesRequest;
        }, `get`)
      }), Object[t2(1700)](e2, `TypeHierarchySupertypesRequest`, {
        enumerable: true,
        get: M(function() {
          return x2.TypeHierarchySupertypesRequest;
        }, `get`)
      });
      var ee2 = Ei();
      Object[t2(1700)](e2, `InlineValueRequest`, {
        enumerable: true,
        get: M(function() {
          return ee2[t2(1068)];
        }, `get`)
      }), Object.defineProperty(e2, "InlineValueRefreshRequest", {
        enumerable: true,
        get: M(function() {
          return ee2.InlineValueRefreshRequest;
        }, `get`)
      });
      var S2 = Di();
      Object.defineProperty(e2, "InlayHintRequest", {
        enumerable: true,
        get: M(function() {
          return S2.InlayHintRequest;
        }, `get`)
      }), Object.defineProperty(e2, "InlayHintResolveRequest", {
        enumerable: true,
        get: M(function() {
          return S2.InlayHintResolveRequest;
        }, `get`)
      }), Object.defineProperty(e2, t2(394), {
        enumerable: true,
        get: M(function() {
          return S2[t2(394)];
        }, `get`)
      });
      var C2 = Oi();
      Object.defineProperty(e2, t2(277), {
        enumerable: true,
        get: M(function() {
          return C2.DiagnosticServerCancellationData;
        }, `get`)
      }), Object[t2(1700)](e2, `DocumentDiagnosticReportKind`, {
        enumerable: true,
        get: M(function() {
          return C2.DocumentDiagnosticReportKind;
        }, t2(1419))
      }), Object.defineProperty(e2, "DocumentDiagnosticRequest", {
        enumerable: true,
        get: M(function() {
          return C2.DocumentDiagnosticRequest;
        }, `get`)
      }), Object.defineProperty(e2, "WorkspaceDiagnosticRequest", {
        enumerable: true,
        get: M(function() {
          return C2.WorkspaceDiagnosticRequest;
        }, `get`)
      }), Object.defineProperty(e2, "DiagnosticRefreshRequest", {
        enumerable: true,
        get: M(function() {
          return C2.DiagnosticRefreshRequest;
        }, `get`)
      });
      var w2 = ki();
      Object.defineProperty(e2, "NotebookCellKind", {
        enumerable: true,
        get: M(function() {
          return w2.NotebookCellKind;
        }, `get`)
      }), Object[t2(1700)](e2, t2(812), {
        enumerable: true,
        get: M(function() {
          return w2.ExecutionSummary;
        }, `get`)
      }), Object.defineProperty(e2, "NotebookCell", {
        enumerable: true,
        get: M(function() {
          return w2.NotebookCell;
        }, `get`)
      }), Object.defineProperty(e2, t2(575), {
        enumerable: true,
        get: M(function() {
          return w2[t2(575)];
        }, `get`)
      }), Object.defineProperty(e2, "NotebookDocumentSyncRegistrationType", {
        enumerable: true,
        get: M(function() {
          return w2.NotebookDocumentSyncRegistrationType;
        }, `get`)
      }), Object.defineProperty(e2, "DidOpenNotebookDocumentNotification", {
        enumerable: true,
        get: M(function() {
          return w2.DidOpenNotebookDocumentNotification;
        }, t2(1419))
      }), Object.defineProperty(e2, "NotebookCellArrayChange", {
        enumerable: true,
        get: M(function() {
          return w2.NotebookCellArrayChange;
        }, `get`)
      }), Object.defineProperty(e2, t2(383), {
        enumerable: true,
        get: M(function() {
          return w2[t2(383)];
        }, `get`)
      }), Object[t2(1700)](e2, t2(1317), {
        enumerable: true,
        get: M(function() {
          return w2[t2(1317)];
        }, `get`)
      }), Object.defineProperty(e2, "DidCloseNotebookDocumentNotification", {
        enumerable: true,
        get: M(function() {
          return w2.DidCloseNotebookDocumentNotification;
        }, t2(1419))
      });
      var te2 = Ai();
      Object.defineProperty(e2, "InlineCompletionRequest", {
        enumerable: true,
        get: M(function() {
          return te2.InlineCompletionRequest;
        }, `get`)
      });
      var T2;
      (function(e3) {
        function t3(e4) {
          let t4 = e4;
          return i2.string(t4) || i2.string(t4.language) || i2.string(t4.scheme) || i2.string(t4.pattern);
        }
        M(t3, `is`), e3.is = t3;
      })(T2 || (e2.TextDocumentFilter = T2 = {}));
      var E2;
      (function(e3) {
        function t3(e4) {
          let t4 = X, n3 = e4;
          return i2.objectLiteral(n3) && (i2[t4(1730)](n3.notebookType) || i2.string(n3.scheme) || i2.string(n3[t4(1692)]));
        }
        M(t3, `is`), e3.is = t3;
      })(E2 || (e2.NotebookDocumentFilter = E2 = {}));
      var ne2;
      (function(e3) {
        function t3(e4) {
          let t4 = e4;
          return i2.objectLiteral(t4) && (i2.string(t4.notebook) || E2.is(t4.notebook)) && (t4.language === void 0 || i2.string(t4.language));
        }
        M(t3, `is`), e3.is = t3;
      })(ne2 || (e2.NotebookCellTextDocumentFilter = ne2 = {}));
      var D2;
      (function(e3) {
        function t3(e4) {
          if (!Array.isArray(e4)) return false;
          for (let t4 of e4) if (!i2.string(t4) && !T2.is(t4) && !ne2.is(t4)) return false;
          return true;
        }
        M(t3, `is`), e3.is = t3;
      })(D2 || (e2[t2(947)] = D2 = {}));
      var O2;
      (function(e3) {
        let r3 = t2;
        e3[r3(1424)] = `client/registerCapability`, e3.messageDirection = n2[r3(404)].serverToClient, e3.type = new n2.ProtocolRequestType(e3[r3(1424)]);
      })(O2 || (e2.RegistrationRequest = O2 = {}));
      var re2;
      (function(e3) {
        let r3 = t2;
        e3[r3(1424)] = `client/unregisterCapability`, e3.messageDirection = n2.MessageDirection.serverToClient, e3.type = new n2.ProtocolRequestType(e3.method);
      })(re2 || (e2.UnregistrationRequest = re2 = {}));
      var ie2;
      (function(e3) {
        let n3 = t2;
        e3.Create = `create`, e3.Rename = `rename`, e3[n3(1167)] = `delete`;
      })(ie2 || (e2.ResourceOperationKind = ie2 = {}));
      var ae2;
      (function(e3) {
        e3.Abort = `abort`, e3.Transactional = `transactional`, e3.TextOnlyTransactional = `textOnlyTransactional`, e3.Undo = `undo`;
      })(ae2 || (e2[t2(1800)] = ae2 = {}));
      var oe2;
      (function(e3) {
        let n3 = t2;
        e3[n3(1391)] = `utf-8`, e3[n3(1239)] = `utf-16`, e3.UTF32 = `utf-32`;
      })(oe2 || (e2.PositionEncodingKind = oe2 = {}));
      var se2;
      (function(e3) {
        let n3 = t2;
        function r3(e4) {
          let t3 = e4;
          return t3 && i2.string(t3.id) && t3.id.length > 0;
        }
        M(r3, n3(1687)), e3.hasId = r3;
      })(se2 || (e2.StaticRegistrationOptions = se2 = {}));
      var ce2;
      (function(e3) {
        function t3(e4) {
          let t4 = X, n3 = e4;
          return n3 && (n3.documentSelector === null || D2.is(n3[t4(1798)]));
        }
        M(t3, `is`), e3.is = t3;
      })(ce2 || (e2.TextDocumentRegistrationOptions = ce2 = {}));
      var le2;
      (function(e3) {
        let n3 = t2;
        function r3(e4) {
          let t3 = e4;
          return i2.objectLiteral(t3) && (t3.workDoneProgress === void 0 || i2.boolean(t3.workDoneProgress));
        }
        M(r3, `is`), e3.is = r3;
        function a3(e4) {
          let t3 = X, n4 = e4;
          return n4 && i2.boolean(n4[t3(1257)]);
        }
        M(a3, n3(1395)), e3.hasWorkDoneProgress = a3;
      })(le2 || (e2.WorkDoneProgressOptions = le2 = {}));
      var ue2;
      (function(e3) {
        e3.method = `initialize`, e3.messageDirection = n2.MessageDirection.clientToServer, e3.type = new n2.ProtocolRequestType(e3.method);
      })(ue2 || (e2.InitializeRequest = ue2 = {}));
      var de2;
      (function(e3) {
        e3.unknownProtocolVersion = 1;
      })(de2 || (e2.InitializeErrorCodes = de2 = {}));
      var k2;
      (function(e3) {
        let r3 = t2;
        e3.method = r3(961), e3[r3(338)] = n2.MessageDirection[r3(469)], e3.type = new n2.ProtocolNotificationType(e3[r3(1424)]);
      })(k2 || (e2.InitializedNotification = k2 = {}));
      var A2;
      (function(e3) {
        let r3 = t2;
        e3.method = `shutdown`, e3.messageDirection = n2.MessageDirection.clientToServer, e3.type = new n2.ProtocolRequestType0(e3[r3(1424)]);
      })(A2 || (e2.ShutdownRequest = A2 = {}));
      var fe2;
      (function(e3) {
        let r3 = t2;
        e3[r3(1424)] = r3(850), e3.messageDirection = n2.MessageDirection[r3(469)], e3.type = new n2[r3(685)](e3[r3(1424)]);
      })(fe2 || (e2.ExitNotification = fe2 = {}));
      var j2;
      (function(e3) {
        e3.method = `workspace/didChangeConfiguration`, e3.messageDirection = n2.MessageDirection.clientToServer, e3.type = new n2.ProtocolNotificationType(e3.method);
      })(j2 || (e2.DidChangeConfigurationNotification = j2 = {}));
      var pe2;
      (function(e3) {
        let n3 = t2;
        e3.Error = 1, e3[n3(772)] = 2, e3[n3(827)] = 3, e3[n3(429)] = 4, e3.Debug = 5;
      })(pe2 || (e2.MessageType = pe2 = {}));
      var me2;
      (function(e3) {
        e3.method = `window/showMessage`, e3.messageDirection = n2.MessageDirection.serverToClient, e3.type = new n2.ProtocolNotificationType(e3.method);
      })(me2 || (e2.ShowMessageNotification = me2 = {}));
      var he2;
      (function(e3) {
        let r3 = t2;
        e3[r3(1424)] = `window/showMessageRequest`, e3.messageDirection = n2.MessageDirection[r3(1112)], e3.type = new n2[r3(1320)](e3[r3(1424)]);
      })(he2 || (e2.ShowMessageRequest = he2 = {}));
      var ge2;
      (function(e3) {
        let r3 = t2;
        e3.method = `window/logMessage`, e3[r3(338)] = n2.MessageDirection.serverToClient, e3.type = new n2.ProtocolNotificationType(e3.method);
      })(ge2 || (e2[t2(1324)] = ge2 = {}));
      var _e2;
      (function(e3) {
        let r3 = t2;
        e3.method = `telemetry/event`, e3.messageDirection = n2.MessageDirection[r3(1112)], e3.type = new n2.ProtocolNotificationType(e3.method);
      })(_e2 || (e2.TelemetryEventNotification = _e2 = {}));
      var ve2;
      (function(e3) {
        e3.None = 0, e3.Full = 1, e3.Incremental = 2;
      })(ve2 || (e2.TextDocumentSyncKind = ve2 = {}));
      var ye2;
      (function(e3) {
        e3.method = `textDocument/didOpen`, e3.messageDirection = n2.MessageDirection.clientToServer, e3.type = new n2.ProtocolNotificationType(e3.method);
      })(ye2 || (e2.DidOpenTextDocumentNotification = ye2 = {}));
      var be2;
      (function(e3) {
        let n3 = t2;
        function r3(e4) {
          let t3 = X, n4 = e4;
          return n4 != null && typeof n4.text == `string` && n4.range !== void 0 && (n4[t3(370)] === void 0 || typeof n4[t3(370)] == `number`);
        }
        M(r3, n3(899)), e3.isIncremental = r3;
        function i3(e4) {
          let t3 = n3, r4 = e4;
          return r4 != null && typeof r4[t3(324)] == `string` && r4[t3(287)] === void 0 && r4.rangeLength === void 0;
        }
        M(i3, `isFull`), e3.isFull = i3;
      })(be2 || (e2.TextDocumentContentChangeEvent = be2 = {}));
      var xe2;
      (function(e3) {
        let r3 = t2;
        e3.method = `textDocument/didChange`, e3[r3(338)] = n2.MessageDirection[r3(469)], e3.type = new n2.ProtocolNotificationType(e3.method);
      })(xe2 || (e2.DidChangeTextDocumentNotification = xe2 = {}));
      var Se2;
      (function(e3) {
        let r3 = t2;
        e3.method = `textDocument/didClose`, e3.messageDirection = n2.MessageDirection.clientToServer, e3.type = new n2.ProtocolNotificationType(e3[r3(1424)]);
      })(Se2 || (e2[t2(1609)] = Se2 = {}));
      var Ce2;
      (function(e3) {
        let r3 = t2;
        e3[r3(1424)] = r3(1570), e3[r3(338)] = n2.MessageDirection.clientToServer, e3.type = new n2.ProtocolNotificationType(e3.method);
      })(Ce2 || (e2[t2(1240)] = Ce2 = {}));
      var we2;
      (function(e3) {
        e3.Manual = 1, e3.AfterDelay = 2, e3.FocusOut = 3;
      })(we2 || (e2[t2(405)] = we2 = {}));
      var Te2;
      (function(e3) {
        let r3 = t2;
        e3.method = `textDocument/willSave`, e3.messageDirection = n2.MessageDirection[r3(469)], e3[r3(1487)] = new n2.ProtocolNotificationType(e3.method);
      })(Te2 || (e2.WillSaveTextDocumentNotification = Te2 = {}));
      var Ee2;
      (function(e3) {
        e3.method = t2(1219), e3.messageDirection = n2.MessageDirection.clientToServer, e3.type = new n2.ProtocolRequestType(e3.method);
      })(Ee2 || (e2.WillSaveTextDocumentWaitUntilRequest = Ee2 = {}));
      var De2;
      (function(e3) {
        let r3 = t2;
        e3.method = `workspace/didChangeWatchedFiles`, e3[r3(338)] = n2[r3(404)].clientToServer, e3.type = new n2.ProtocolNotificationType(e3.method);
      })(De2 || (e2[t2(1518)] = De2 = {}));
      var Oe2;
      (function(e3) {
        e3.Created = 1, e3.Changed = 2, e3.Deleted = 3;
      })(Oe2 || (e2.FileChangeType = Oe2 = {}));
      var ke2;
      (function(e3) {
        function t3(e4) {
          let t4 = e4;
          return i2.objectLiteral(t4) && (r2.URI.is(t4.baseUri) || r2.WorkspaceFolder.is(t4.baseUri)) && i2.string(t4.pattern);
        }
        M(t3, `is`), e3.is = t3;
      })(ke2 || (e2.RelativePattern = ke2 = {}));
      var Ae2;
      (function(e3) {
        e3.Create = 1, e3.Change = 2, e3.Delete = 4;
      })(Ae2 || (e2[t2(527)] = Ae2 = {}));
      var je2;
      (function(e3) {
        let r3 = t2;
        e3[r3(1424)] = `textDocument/publishDiagnostics`, e3[r3(338)] = n2[r3(404)][r3(1112)], e3.type = new n2.ProtocolNotificationType(e3.method);
      })(je2 || (e2.PublishDiagnosticsNotification = je2 = {}));
      var Me2;
      (function(e3) {
        let n3 = t2;
        e3.Invoked = 1, e3[n3(1474)] = 2, e3.TriggerForIncompleteCompletions = 3;
      })(Me2 || (e2[t2(1009)] = Me2 = {}));
      var Ne2;
      (function(e3) {
        let r3 = t2;
        e3.method = `textDocument/completion`, e3.messageDirection = n2.MessageDirection[r3(469)], e3.type = new n2.ProtocolRequestType(e3.method);
      })(Ne2 || (e2.CompletionRequest = Ne2 = {}));
      var Pe2;
      (function(e3) {
        let r3 = t2;
        e3.method = `completionItem/resolve`, e3.messageDirection = n2.MessageDirection[r3(469)], e3.type = new n2.ProtocolRequestType(e3.method);
      })(Pe2 || (e2.CompletionResolveRequest = Pe2 = {}));
      var Fe2;
      (function(e3) {
        let r3 = t2;
        e3.method = r3(506), e3.messageDirection = n2.MessageDirection.clientToServer, e3.type = new n2[r3(1320)](e3.method);
      })(Fe2 || (e2.HoverRequest = Fe2 = {}));
      var Ie2;
      (function(e3) {
        e3.Invoked = 1, e3.TriggerCharacter = 2, e3.ContentChange = 3;
      })(Ie2 || (e2.SignatureHelpTriggerKind = Ie2 = {}));
      var Le2;
      (function(e3) {
        let r3 = t2;
        e3.method = r3(516), e3[r3(338)] = n2[r3(404)].clientToServer, e3.type = new n2[r3(1320)](e3.method);
      })(Le2 || (e2.SignatureHelpRequest = Le2 = {}));
      var Re2;
      (function(e3) {
        let r3 = t2;
        e3[r3(1424)] = `textDocument/definition`, e3[r3(338)] = n2.MessageDirection[r3(469)], e3.type = new n2.ProtocolRequestType(e3.method);
      })(Re2 || (e2.DefinitionRequest = Re2 = {}));
      var ze2;
      (function(e3) {
        let r3 = t2;
        e3.method = `textDocument/references`, e3[r3(338)] = n2.MessageDirection.clientToServer, e3.type = new n2.ProtocolRequestType(e3.method);
      })(ze2 || (e2.ReferencesRequest = ze2 = {}));
      var Be2;
      (function(e3) {
        let r3 = t2;
        e3[r3(1424)] = `textDocument/documentHighlight`, e3.messageDirection = n2.MessageDirection.clientToServer, e3.type = new n2.ProtocolRequestType(e3.method);
      })(Be2 || (e2.DocumentHighlightRequest = Be2 = {}));
      var Ve2;
      (function(e3) {
        e3.method = `textDocument/documentSymbol`, e3.messageDirection = n2.MessageDirection.clientToServer, e3.type = new n2.ProtocolRequestType(e3.method);
      })(Ve2 || (e2.DocumentSymbolRequest = Ve2 = {}));
      var He2;
      (function(e3) {
        e3.method = `textDocument/codeAction`, e3.messageDirection = n2.MessageDirection.clientToServer, e3.type = new n2.ProtocolRequestType(e3.method);
      })(He2 || (e2.CodeActionRequest = He2 = {}));
      var Ue2;
      (function(e3) {
        let r3 = t2;
        e3.method = r3(1652), e3[r3(338)] = n2.MessageDirection.clientToServer, e3.type = new n2.ProtocolRequestType(e3.method);
      })(Ue2 || (e2.CodeActionResolveRequest = Ue2 = {}));
      var We2;
      (function(e3) {
        let r3 = t2;
        e3[r3(1424)] = `workspace/symbol`, e3.messageDirection = n2.MessageDirection.clientToServer, e3.type = new n2.ProtocolRequestType(e3.method);
      })(We2 || (e2.WorkspaceSymbolRequest = We2 = {}));
      var Ge2;
      (function(e3) {
        let r3 = t2;
        e3[r3(1424)] = r3(1719), e3.messageDirection = n2.MessageDirection.clientToServer, e3[r3(1487)] = new n2.ProtocolRequestType(e3.method);
      })(Ge2 || (e2.WorkspaceSymbolResolveRequest = Ge2 = {}));
      var Ke2;
      (function(e3) {
        e3.method = `textDocument/codeLens`, e3.messageDirection = n2.MessageDirection.clientToServer, e3.type = new n2.ProtocolRequestType(e3.method);
      })(Ke2 || (e2.CodeLensRequest = Ke2 = {}));
      var qe2;
      (function(e3) {
        let r3 = t2;
        e3.method = `codeLens/resolve`, e3.messageDirection = n2.MessageDirection.clientToServer, e3[r3(1487)] = new n2.ProtocolRequestType(e3[r3(1424)]);
      })(qe2 || (e2.CodeLensResolveRequest = qe2 = {}));
      var Je2;
      (function(e3) {
        let r3 = t2;
        e3.method = r3(1140), e3.messageDirection = n2.MessageDirection.serverToClient, e3.type = new n2.ProtocolRequestType0(e3[r3(1424)]);
      })(Je2 || (e2.CodeLensRefreshRequest = Je2 = {}));
      var Ye2;
      (function(e3) {
        let r3 = t2;
        e3.method = `textDocument/documentLink`, e3[r3(338)] = n2.MessageDirection.clientToServer, e3.type = new n2.ProtocolRequestType(e3.method);
      })(Ye2 || (e2.DocumentLinkRequest = Ye2 = {}));
      var Xe2;
      (function(e3) {
        e3.method = `documentLink/resolve`, e3.messageDirection = n2.MessageDirection.clientToServer, e3.type = new n2.ProtocolRequestType(e3.method);
      })(Xe2 || (e2.DocumentLinkResolveRequest = Xe2 = {}));
      var Ze2;
      (function(e3) {
        let r3 = t2;
        e3.method = `textDocument/formatting`, e3[r3(338)] = n2.MessageDirection.clientToServer, e3.type = new n2.ProtocolRequestType(e3[r3(1424)]);
      })(Ze2 || (e2.DocumentFormattingRequest = Ze2 = {}));
      var Qe2;
      (function(e3) {
        let r3 = t2;
        e3.method = `textDocument/rangeFormatting`, e3.messageDirection = n2[r3(404)][r3(469)], e3.type = new n2.ProtocolRequestType(e3.method);
      })(Qe2 || (e2.DocumentRangeFormattingRequest = Qe2 = {}));
      var $e2;
      (function(e3) {
        let r3 = t2;
        e3.method = `textDocument/rangesFormatting`, e3[r3(338)] = n2.MessageDirection.clientToServer, e3.type = new n2[r3(1320)](e3[r3(1424)]);
      })($e2 || (e2.DocumentRangesFormattingRequest = $e2 = {}));
      var et2;
      (function(e3) {
        e3.method = `textDocument/onTypeFormatting`, e3.messageDirection = n2.MessageDirection.clientToServer, e3.type = new n2.ProtocolRequestType(e3.method);
      })(et2 || (e2.DocumentOnTypeFormattingRequest = et2 = {}));
      var tt2;
      (function(e3) {
        e3.Identifier = 1;
      })(tt2 || (e2.PrepareSupportDefaultBehavior = tt2 = {}));
      var nt2;
      (function(e3) {
        let r3 = t2;
        e3[r3(1424)] = r3(1714), e3.messageDirection = n2.MessageDirection.clientToServer, e3[r3(1487)] = new n2[r3(1320)](e3[r3(1424)]);
      })(nt2 || (e2.RenameRequest = nt2 = {}));
      var rt2;
      (function(e3) {
        e3.method = `textDocument/prepareRename`, e3.messageDirection = n2.MessageDirection.clientToServer, e3.type = new n2.ProtocolRequestType(e3.method);
      })(rt2 || (e2.PrepareRenameRequest = rt2 = {}));
      var it2;
      (function(e3) {
        let r3 = t2;
        e3.method = `workspace/executeCommand`, e3.messageDirection = n2.MessageDirection[r3(469)], e3.type = new n2.ProtocolRequestType(e3.method);
      })(it2 || (e2.ExecuteCommandRequest = it2 = {}));
      var at2;
      (function(e3) {
        let r3 = t2;
        e3.method = r3(719), e3[r3(338)] = n2[r3(404)].serverToClient, e3.type = new n2.ProtocolRequestType(r3(719));
      })(at2 || (e2.ApplyWorkspaceEditRequest = at2 = {}));
    }
  }), Mi = N({
    "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/connection.js"(e2) {
      let t2 = s;
      Object[t2(1700)](e2, `__esModule`, {
        value: true
      }), e2[t2(901)] = void 0;
      var n2 = si();
      function r2(e3, t3, r3, i2) {
        return n2.ConnectionStrategy.is(i2) && (i2 = {
          connectionStrategy: i2
        }), (0, n2.createMessageConnection)(e3, t3, r3, i2);
      }
      M(r2, `createProtocolConnection`), e2.createProtocolConnection = r2;
    }
  }), Ni = N({
    "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/api.js"(e2) {
      let t2 = s;
      var n2 = e2 && e2.__createBinding || (Object.create ? function(e3, t3, n3, r3) {
        let i3 = X;
        r3 === void 0 && (r3 = n3);
        var a3 = Object.getOwnPropertyDescriptor(t3, n3);
        (!a3 || (`get` in a3 ? !t3.__esModule : a3[i3(400)] || a3.configurable)) && (a3 = {
          enumerable: true,
          get: M(function() {
            return t3[n3];
          }, i3(1419))
        }), Object[i3(1700)](e3, r3, a3);
      } : function(e3, t3, n3, r3) {
        r3 === void 0 && (r3 = n3), e3[r3] = t3[n3];
      }), r2 = e2 && e2.__exportStar || function(e3, t3) {
        for (var r3 in e3) r3 !== `default` && !Object.prototype.hasOwnProperty.call(t3, r3) && n2(t3, e3, r3);
      };
      Object.defineProperty(e2, t2(342), {
        value: true
      }), e2.LSPErrorCodes = e2.createProtocolConnection = void 0, r2(si(), e2), r2((Gr(), hn(gn)), e2), r2(L(), e2), r2(ji(), e2);
      var i2 = Mi();
      Object.defineProperty(e2, "createProtocolConnection", {
        enumerable: true,
        get: M(function() {
          return i2.createProtocolConnection;
        }, `get`)
      });
      var a2;
      (function(e3) {
        let n3 = t2;
        e3.lspReservedErrorRangeStart = -32899, e3.RequestFailed = -32803, e3.ServerCancelled = -32802, e3.ContentModified = -32801, e3.RequestCancelled = -32800, e3[n3(1508)] = -32800;
      })(a2 || (e2.LSPErrorCodes = a2 = {}));
    }
  }), Pi = N({
    "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/browser/main.js"(e2) {
      let t2 = s;
      var n2 = e2 && e2[t2(446)] || (Object.create ? function(e3, n3, r3, i3) {
        let a3 = t2;
        i3 === void 0 && (i3 = r3);
        var o2 = Object[a3(1054)](n3, r3);
        (!o2 || (a3(1419) in o2 ? !n3.__esModule : o2[a3(400)] || o2[a3(1012)])) && (o2 = {
          enumerable: true,
          get: M(function() {
            return n3[r3];
          }, a3(1419))
        }), Object.defineProperty(e3, i3, o2);
      } : function(e3, t3, n3, r3) {
        r3 === void 0 && (r3 = n3), e3[r3] = t3[n3];
      }), r2 = e2 && e2.__exportStar || function(e3, r3) {
        let i3 = t2;
        for (var a3 in e3) a3 !== `default` && !Object[i3(950)][i3(577)].call(r3, a3) && n2(r3, e3, a3);
      };
      Object.defineProperty(e2, "__esModule", {
        value: true
      }), e2.createProtocolConnection = void 0;
      var i2 = ci();
      r2(ci(), e2), r2(Ni(), e2);
      function a2(e3, t3, n3, r3) {
        return (0, i2.createMessageConnection)(e3, t3, n3, r3);
      }
      M(a2, `createProtocolConnection`), e2.createProtocolConnection = a2;
    }
  }), Fi = {};
  dn(Fi, {
    AbstractAstReflection: () => Hi,
    AbstractCstNode: () => IN,
    AbstractLangiumParser: () => GN,
    AbstractParserErrorMessageProvider: () => qN,
    AbstractThreadedAsyncParser: () => gI,
    AstUtils: () => $i,
    BiMap: () => $P,
    Cancellation: () => Z,
    CompositeCstNodeImpl: () => RN,
    ContextCache: () => sF,
    CstNodeBuilder: () => FN,
    CstUtils: () => Ii,
    DEFAULT_TOKENIZE_OPTIONS: () => FF,
    DONE_RESULT: () => Xi,
    DatatypeSymbol: () => VN,
    DefaultAstNodeDescriptionProvider: () => wF,
    DefaultAstNodeLocator: () => EF,
    DefaultAsyncParser: () => hI,
    DefaultCommentProvider: () => mI,
    DefaultConfigurationProvider: () => OF,
    DefaultDocumentBuilder: () => jF,
    DefaultDocumentValidator: () => yF,
    DefaultHydrator: () => yI,
    DefaultIndexManager: () => MF,
    DefaultJsonSerializer: () => pF,
    DefaultLangiumDocumentFactory: () => GP,
    DefaultLangiumDocuments: () => KP,
    DefaultLangiumProfiler: () => BI,
    DefaultLexer: () => IF,
    DefaultLexerErrorMessageProvider: () => PF,
    DefaultLinker: () => JP,
    DefaultNameProvider: () => XP,
    DefaultReferenceDescriptionProvider: () => TF,
    DefaultReferences: () => ZP,
    DefaultScopeComputation: () => eF,
    DefaultScopeProvider: () => uF,
    DefaultServiceRegistry: () => mF,
    DefaultTokenBuilder: () => bP,
    DefaultValueConverter: () => xP,
    DefaultWorkspaceLock: () => vI,
    DefaultWorkspaceManager: () => NF,
    Deferred: () => MP,
    Disposable: () => AF,
    DisposableCache: () => aF,
    DocumentCache: () => cF,
    DocumentState: () => Q,
    DocumentValidator: () => CF,
    EMPTY_SCOPE: () => iF,
    EMPTY_STREAM: () => Yi,
    EmptyFileSystem: () => FI,
    EmptyFileSystemProvider: () => PI,
    ErrorWithLocation: () => Is,
    GrammarAST: () => ma,
    GrammarUtils: () => Fs,
    IndentationAwareLexer: () => MI,
    IndentationAwareTokenBuilder: () => jI,
    JSDocDocumentationProvider: () => pI,
    LangiumCompletionParser: () => YN,
    LangiumParser: () => KN,
    LangiumParserErrorMessageProvider: () => JN,
    LeafCstNodeImpl: () => LN,
    LexingMode: () => AI,
    MapScope: () => nF,
    Module: () => SI,
    MultiMap: () => QP,
    MultiMapScope: () => rF,
    OperationCancelled: () => OP,
    ParserWorker: () => _I,
    ProfilingTask: () => VI,
    Reduction: () => Qi,
    RefResolving: () => qP,
    RegExpUtils: () => zs,
    RootCstNodeImpl: () => BN,
    SimpleCache: () => oF,
    StreamImpl: () => Ki,
    StreamScope: () => tF,
    TextDocument: () => PP,
    TreeStreamImpl: () => Zi,
    URI: () => VP,
    UriTrie: () => WP,
    UriUtils: () => UP,
    VALIDATE_EACH_NODE: () => vF,
    ValidationCategory: () => gF,
    ValidationRegistry: () => _F,
    ValueConverter: () => SP,
    WorkspaceCache: () => lF,
    assertCondition: () => Rs,
    assertUnreachable: () => Ls,
    createCompletionParser: () => _P,
    createDefaultCoreModule: () => bI,
    createDefaultSharedCoreModule: () => xI,
    createGrammarConfig: () => Jc,
    createLangiumParser: () => vP,
    createParser: () => $N,
    delayNextTick: () => CP,
    diagnosticData: () => hF,
    eagerLoad: () => wI,
    getDiagnosticRange: () => bF,
    indentationBuilderDefaultOptions: () => kI,
    inject: () => $,
    interruptAndCheck: () => AP,
    isAstNode: () => Li,
    isAstNodeDescription: () => Bi,
    isAstNodeWithComment: () => dF,
    isCompositeCstNode: () => Ui,
    isIMultiModeLexerDefinition: () => RF,
    isJSDoc: () => VF,
    isLeafCstNode: () => Wi,
    isLinkingError: () => Vi,
    isMultiReference: () => zi,
    isNamed: () => YP,
    isOperationCancelled: () => kP,
    isReference: () => Ri,
    isRootCstNode: () => Gi,
    isTokenTypeArray: () => LF,
    isTokenTypeDictionary: () => zF,
    loadGrammarFromJson: () => zI,
    parseJSDoc: () => BF,
    prepareLangiumParser: () => yP,
    setInterruptionPeriod: () => DP,
    startCancelableOperation: () => EP,
    stream: () => R,
    toDiagnosticData: () => SF,
    toDiagnosticSeverity: () => xF
  });
  var Ii = {};
  dn(Ii, {
    DefaultNameRegexp: () => xs,
    RangeComparison: () => vs,
    compareRange: () => ys,
    findCommentNode: () => Cs,
    findDeclarationNodeAtOffset: () => Ss,
    findLeafNodeAtOffset: () => Es,
    findLeafNodeBeforeOffset: () => Ds,
    flattenCst: () => ms,
    getDatatypeNode: () => fs,
    getInteriorNodes: () => Ms,
    getNextNode: () => As,
    getPreviousNode: () => ks,
    getStartlineNode: () => js,
    inRange: () => bs,
    isChildNode: () => hs,
    isCommentNode: () => ws,
    streamCst: () => ps,
    toDocumentSegment: () => _s,
    tokenToRange: () => gs
  });
  function Li(e2) {
    return typeof e2 == `object` && !!e2 && typeof e2.$type == `string`;
  }
  M(Li, `isAstNode`);
  function Ri(e2) {
    return typeof e2 == `object` && !!e2 && typeof e2.$refText == `string` && `ref` in e2;
  }
  M(Ri, `isReference`);
  function zi(e2) {
    return typeof e2 == `object` && !!e2 && typeof e2.$refText == `string` && `items` in e2;
  }
  M(zi, `isMultiReference`);
  function Bi(e2) {
    return typeof e2 == `object` && !!e2 && typeof e2.name == `string` && typeof e2.type == `string` && typeof e2.path == `string`;
  }
  M(Bi, `isAstNodeDescription`);
  function Vi(e2) {
    return typeof e2 == `object` && !!e2 && typeof e2.info == `object` && typeof e2.message == `string`;
  }
  M(Vi, s(578));
  var Hi = (c = class {
    constructor() {
      this.subtypes = {}, this.allSubtypes = {};
    }
    getAllTypes() {
      return Object.keys(this.types);
    }
    getReferenceType(e2) {
      var _a2;
      let t2 = s, n2 = this.types[e2.container.$type];
      if (!n2) throw Error(`Type ` + (e2[t2(1673)].$type || `undefined`) + ` not found.`);
      let r2 = (_a2 = n2[t2(1411)][e2[t2(257)]]) == null ? void 0 : _a2.referenceType;
      if (!r2) throw Error(`Property ` + (e2.property || `undefined`) + ` of type ` + e2.container.$type + ` is not a reference.`);
      return r2;
    }
    getTypeMetaData(e2) {
      return this.types[e2] || {
        name: e2,
        properties: {},
        superTypes: []
      };
    }
    isInstance(e2, t2) {
      let n2 = s;
      return Li(e2) && this.isSubtype(e2[n2(798)], t2);
    }
    isSubtype(e2, t2) {
      if (e2 === t2) return true;
      let n2 = this.subtypes[e2];
      n2 || (n2 = this.subtypes[e2] = {});
      let r2 = n2[t2];
      if (r2 !== void 0) return r2;
      {
        let r3 = this.types[e2], i2 = r3 ? r3.superTypes.some((e3) => this.isSubtype(e3, t2)) : false;
        return n2[t2] = i2, i2;
      }
    }
    getAllSubTypes(e2) {
      let t2 = this.allSubtypes[e2];
      if (t2) return t2;
      {
        let t3 = this.getAllTypes(), n2 = [];
        for (let r2 of t3) this.isSubtype(r2, e2) && n2.push(r2);
        return this.allSubtypes[e2] = n2, n2;
      }
    }
  }, M(c, `AbstractAstReflection`), c);
  function Ui(e2) {
    let t2 = s;
    return typeof e2 == `object` && !!e2 && Array.isArray(e2[t2(835)]);
  }
  M(Ui, s(571));
  function Wi(e2) {
    let t2 = s;
    return typeof e2 == `object` && !!e2 && typeof e2.tokenType == t2(716);
  }
  M(Wi, s(1171));
  function Gi(e2) {
    return Ui(e2) && typeof e2.fullText == `string`;
  }
  M(Gi, `isRootCstNode`);
  var Ki = (tn = Symbol.iterator, l = class e2 {
    constructor(e3, t2) {
      this.startFn = e3, this.nextFn = t2;
    }
    iterator() {
      let e3 = s, t2 = {
        state: this[e3(1407)](),
        next: M(() => this.nextFn(t2.state), `next`),
        [Symbol.iterator]: () => t2
      };
      return t2;
    }
    [tn]() {
      return this.iterator();
    }
    [s(1084)]() {
      return !!this.iterator().next().done;
    }
    count() {
      let e3 = this.iterator(), t2 = 0, n2 = e3.next();
      for (; !n2.done; ) t2++, n2 = e3.next();
      return t2;
    }
    toArray() {
      let e3 = s, t2 = [], n2 = this[e3(443)](), r2;
      do
        r2 = n2.next(), r2.value !== void 0 && t2.push(r2.value);
      while (!r2[e3(1464)]);
      return t2;
    }
    toSet() {
      return new Set(this);
    }
    toMap(e3, t2) {
      let n2 = this.map((n3) => [
        e3 ? e3(n3) : n3,
        t2 ? t2(n3) : n3
      ]);
      return new Map(n2);
    }
    [s(752)]() {
      return this.join();
    }
    concat(t2) {
      let n2 = s;
      return new e2(() => ({
        first: this.startFn(),
        firstDone: false,
        iterator: t2[Symbol[n2(443)]]()
      }), (e3) => {
        let t3 = n2, r2;
        if (!e3.firstDone) {
          do
            if (r2 = this[t3(1247)](e3[t3(639)]), !r2.done) return r2;
          while (!r2.done);
          e3.firstDone = true;
        }
        do
          if (r2 = e3.iterator.next(), !r2[t3(1464)]) return r2;
        while (!r2[t3(1464)]);
        return Xi;
      });
    }
    join(e3 = `,`) {
      let t2 = s, n2 = this.iterator(), r2 = ``, i2, a2 = false;
      do
        i2 = n2[t2(1781)](), i2.done || (a2 && (r2 += e3), r2 += qi(i2.value)), a2 = true;
      while (!i2.done);
      return r2;
    }
    indexOf(e3, t2 = 0) {
      let n2 = this.iterator(), r2 = 0, i2 = n2.next();
      for (; !i2.done; ) {
        if (r2 >= t2 && i2.value === e3) return r2;
        i2 = n2.next(), r2++;
      }
      return -1;
    }
    every(e3) {
      let t2 = s, n2 = this.iterator(), r2 = n2[t2(1781)]();
      for (; !r2.done; ) {
        if (!e3(r2.value)) return false;
        r2 = n2.next();
      }
      return true;
    }
    some(e3) {
      let t2 = this.iterator(), n2 = t2.next();
      for (; !n2.done; ) {
        if (e3(n2.value)) return true;
        n2 = t2.next();
      }
      return false;
    }
    forEach(e3) {
      let t2 = s, n2 = this[t2(443)](), r2 = 0, i2 = n2[t2(1781)]();
      for (; !i2.done; ) e3(i2.value, r2), i2 = n2.next(), r2++;
    }
    map(t2) {
      return new e2(this.startFn, (e3) => {
        let n2 = X, { done: r2, value: i2 } = this[n2(1247)](e3);
        return r2 ? Xi : {
          done: false,
          value: t2(i2)
        };
      });
    }
    filter(t2) {
      let n2 = s;
      return new e2(this[n2(1407)], (e3) => {
        let r2 = n2, i2;
        do
          if (i2 = this.nextFn(e3), !i2[r2(1464)] && t2(i2.value)) return i2;
        while (!i2.done);
        return Xi;
      });
    }
    nonNullable() {
      return this.filter((e3) => e3 != null);
    }
    reduce(e3, t2) {
      let n2 = s, r2 = this[n2(443)](), i2 = t2, a2 = r2[n2(1781)]();
      for (; !a2.done; ) i2 = i2 === void 0 ? a2.value : e3(i2, a2.value), a2 = r2.next();
      return i2;
    }
    [s(624)](e3, t2) {
      let n2 = s;
      return this[n2(1556)](this.iterator(), e3, t2);
    }
    recursiveReduce(e3, t2, n2) {
      let r2 = s, i2 = e3[r2(1781)]();
      if (i2[r2(1464)]) return n2;
      let a2 = this.recursiveReduce(e3, t2, n2);
      return a2 === void 0 ? i2.value : t2(a2, i2.value);
    }
    find(e3) {
      let t2 = s, n2 = this.iterator(), r2 = n2.next();
      for (; !r2[t2(1464)]; ) {
        if (e3(r2.value)) return r2.value;
        r2 = n2.next();
      }
    }
    [s(1032)](e3) {
      let t2 = this.iterator(), n2 = 0, r2 = t2.next();
      for (; !r2.done; ) {
        if (e3(r2.value)) return n2;
        r2 = t2.next(), n2++;
      }
      return -1;
    }
    includes(e3) {
      let t2 = this.iterator(), n2 = t2.next();
      for (; !n2.done; ) {
        if (n2.value === e3) return true;
        n2 = t2.next();
      }
      return false;
    }
    flatMap(t2) {
      return new e2(() => ({
        this: this.startFn()
      }), (e3) => {
        let n2 = X;
        do {
          if (e3[n2(443)]) {
            let t3 = e3[n2(443)].next();
            if (t3.done) e3[n2(443)] = void 0;
            else return t3;
          }
          let { done: r2, value: i2 } = this.nextFn(e3.this);
          if (!r2) {
            let n3 = t2(i2);
            if (Ji(n3)) e3.iterator = n3[Symbol.iterator]();
            else return {
              done: false,
              value: n3
            };
          }
        } while (e3.iterator);
        return Xi;
      });
    }
    [s(1350)](t2) {
      if (t2 === void 0 && (t2 = 1), t2 <= 0) return this;
      let n2 = t2 > 1 ? this.flat(t2 - 1) : this;
      return new e2(() => ({
        this: n2.startFn()
      }), (e3) => {
        let t3 = X;
        do {
          if (e3.iterator) {
            let n3 = e3[t3(443)].next();
            if (n3.done) e3.iterator = void 0;
            else return n3;
          }
          let { done: r2, value: i2 } = n2.nextFn(e3.this);
          if (!r2) if (Ji(i2)) e3.iterator = i2[Symbol.iterator]();
          else return {
            done: false,
            value: i2
          };
        } while (e3.iterator);
        return Xi;
      });
    }
    head() {
      let e3 = s, t2 = this[e3(443)]().next();
      if (!t2.done) return t2.value;
    }
    tail(t2 = 1) {
      return new e2(() => {
        let e3 = this.startFn();
        for (let n2 = 0; n2 < t2; n2++) if (this.nextFn(e3).done) return e3;
        return e3;
      }, this.nextFn);
    }
    limit(t2) {
      return new e2(() => ({
        size: 0,
        state: this.startFn()
      }), (e3) => (e3.size++, e3.size > t2 ? Xi : this.nextFn(e3.state)));
    }
    distinct(t2) {
      return new e2(() => ({
        set: /* @__PURE__ */ new Set(),
        internalState: this.startFn()
      }), (e3) => {
        let n2;
        do
          if (n2 = this.nextFn(e3.internalState), !n2.done) {
            let r2 = t2 ? t2(n2.value) : n2.value;
            if (!e3.set.has(r2)) return e3.set.add(r2), n2;
          }
        while (!n2.done);
        return Xi;
      });
    }
    exclude(e3, t2) {
      let n2 = /* @__PURE__ */ new Set();
      for (let r2 of e3) {
        let e4 = t2 ? t2(r2) : r2;
        n2.add(e4);
      }
      return this.filter((e4) => {
        let r2 = t2 ? t2(e4) : e4;
        return !n2.has(r2);
      });
    }
  }, M(l, `StreamImpl`), l);
  function qi(e2) {
    let t2 = s;
    return typeof e2 == t2(1730) ? e2 : e2 === void 0 ? t2(1642) : typeof e2[t2(752)] == `function` ? e2.toString() : Object.prototype.toString.call(e2);
  }
  M(qi, `toString`);
  function Ji(e2) {
    return !!e2 && typeof e2[Symbol[s(443)]] == `function`;
  }
  M(Ji, s(831));
  var Yi = new Ki(() => void 0, () => Xi), Xi = Object.freeze({
    done: true,
    value: void 0
  });
  function R(...e2) {
    let t2 = s;
    if (e2.length === 1) {
      let n2 = e2[0];
      if (n2 instanceof Ki) return n2;
      if (Ji(n2)) return new Ki(() => n2[Symbol.iterator](), (e3) => e3[t2(1781)]());
      if (typeof n2.length == `number`) return new Ki(() => ({
        index: 0
      }), (e3) => e3.index < n2.length ? {
        done: false,
        value: n2[e3.index++]
      } : Xi);
    }
    return e2.length > 1 ? new Ki(() => ({
      collIndex: 0,
      arrIndex: 0
    }), (n2) => {
      let r2 = t2;
      do {
        if (n2.iterator) {
          let e3 = n2.iterator.next();
          if (!e3.done) return e3;
          n2[r2(443)] = void 0;
        }
        if (n2.array) {
          if (n2.arrIndex < n2.array.length) return {
            done: false,
            value: n2.array[n2.arrIndex++]
          };
          n2.array = void 0, n2.arrIndex = 0;
        }
        if (n2[r2(920)] < e2[r2(1663)]) {
          let t3 = e2[n2.collIndex++];
          Ji(t3) ? n2.iterator = t3[Symbol.iterator]() : t3 && typeof t3.length == r2(1539) && (n2.array = t3);
        }
      } while (n2.iterator || n2.array || n2.collIndex < e2[r2(1663)]);
      return Xi;
    }) : Yi;
  }
  M(R, s(918));
  var Zi = (u = class extends Ki {
    constructor(e2, t2, n2) {
      let r2 = s;
      super(() => ({
        iterators: n2 != null && n2.includeRoot ? [
          [
            e2
          ][Symbol[r2(443)]]()
        ] : [
          t2(e2)[Symbol.iterator]()
        ],
        pruned: false
      }), (e3) => {
        let n3 = r2;
        for (e3.pruned && (e3.iterators.pop(), e3[n3(441)] = false); e3.iterators.length > 0; ) {
          let r3 = e3.iterators[e3.iterators[n3(1663)] - 1].next();
          if (r3.done) e3.iterators.pop();
          else return e3.iterators.push(t2(r3[n3(1371)])[Symbol.iterator]()), r3;
        }
        return Xi;
      });
    }
    iterator() {
      let e2 = s, t2 = {
        state: this.startFn(),
        next: M(() => this.nextFn(t2.state), `next`),
        prune: M(() => {
          let e3 = X;
          t2[e3(491)].pruned = true;
        }, e2(1163)),
        [Symbol.iterator]: () => t2
      };
      return t2;
    }
  }, M(u, `TreeStreamImpl`), u), Qi;
  (function(e2) {
    let t2 = s;
    function n2(e3) {
      return e3[X(1154)]((e4, t3) => e4 + t3, 0);
    }
    M(n2, `sum`), e2.sum = n2;
    function r2(e3) {
      return e3.reduce((e4, t3) => e4 * t3, 0);
    }
    M(r2, `product`), e2[t2(1095)] = r2;
    function i2(e3) {
      return e3.reduce((e4, t3) => Math.min(e4, t3));
    }
    M(i2, t2(1674)), e2.min = i2;
    function a2(e3) {
      let n3 = t2;
      return e3.reduce((e4, t3) => Math[n3(513)](e4, t3));
    }
    M(a2, `max`), e2.max = a2;
  })(Qi || (Qi = {}));
  var $i = {};
  dn($i, {
    assignMandatoryProperties: () => da,
    copyAstNode: () => pa,
    findRootNode: () => ia,
    getContainerOfType: () => ta,
    getDocument: () => ra,
    getReferenceNodes: () => aa,
    hasContainerOfType: () => na,
    linkContentToContainer: () => ea,
    streamAllContents: () => sa,
    streamAst: () => ca,
    streamContents: () => oa,
    streamReferences: () => ua
  });
  function ea(e2, t2 = {}) {
    let n2 = s;
    for (let [r2, i2] of Object.entries(e2)) r2.startsWith(`$`) || (Array.isArray(i2) ? i2.forEach((n3, i3) => {
      Li(n3) && (n3.$container = e2, n3.$containerProperty = r2, n3.$containerIndex = i3, t2.deep && ea(n3, t2));
    }) : Li(i2) && (i2.$container = e2, i2[n2(1041)] = r2, t2.deep && ea(i2, t2)));
  }
  M(ea, s(686));
  function ta(e2, t2) {
    let n2 = e2;
    for (; n2; ) {
      if (t2(n2)) return n2;
      n2 = n2.$container;
    }
  }
  M(ta, s(1497));
  function na(e2, t2) {
    let n2 = e2;
    for (; n2; ) {
      if (t2(n2)) return true;
      n2 = n2.$container;
    }
    return false;
  }
  M(na, `hasContainerOfType`);
  function ra(e2) {
    let t2 = ia(e2).$document;
    if (!t2) throw Error(`AST node has no document.`);
    return t2;
  }
  M(ra, `getDocument`);
  function ia(e2) {
    for (; e2.$container; ) e2 = e2.$container;
    return e2;
  }
  M(ia, `findRootNode`);
  function aa(e2) {
    return Ri(e2) ? e2.ref ? [
      e2.ref
    ] : [] : zi(e2) ? e2.items.map((e3) => e3.ref) : [];
  }
  M(aa, `getReferenceNodes`);
  function oa(e2, t2) {
    if (!e2) throw Error(`Node must be an AstNode.`);
    let n2 = t2 == null ? void 0 : t2.range;
    return new Ki(() => ({
      keys: Object.keys(e2),
      keyIndex: 0,
      arrayIndex: 0
    }), (t3) => {
      let r2 = X;
      for (; t3.keyIndex < t3.keys.length; ) {
        let i2 = t3.keys[t3[r2(444)]];
        if (!i2.startsWith(`$`)) {
          let a2 = e2[i2];
          if (Li(a2)) {
            if (t3[r2(444)]++, la(a2, n2)) return {
              done: false,
              value: a2
            };
          } else if (Array.isArray(a2)) {
            for (; t3.arrayIndex < a2[r2(1663)]; ) {
              let e3 = a2[t3.arrayIndex++];
              if (Li(e3) && la(e3, n2)) return {
                done: false,
                value: e3
              };
            }
            t3.arrayIndex = 0;
          }
        }
        t3.keyIndex++;
      }
      return Xi;
    });
  }
  M(oa, `streamContents`);
  function sa(e2, t2) {
    if (!e2) throw Error(`Root node must be an AstNode.`);
    return new Zi(e2, (e3) => oa(e3, t2));
  }
  M(sa, `streamAllContents`);
  function ca(e2, t2) {
    if (!e2) throw Error(`Root node must be an AstNode.`);
    return t2 != null && t2.range && !la(e2, t2.range) ? new Zi(e2, () => []) : new Zi(e2, (e3) => oa(e3, t2), {
      includeRoot: true
    });
  }
  M(ca, `streamAst`);
  function la(e2, t2) {
    var _a2;
    let n2 = s;
    if (!t2) return true;
    let r2 = (_a2 = e2[n2(1115)]) == null ? void 0 : _a2[n2(287)];
    return r2 ? bs(r2, t2) : false;
  }
  M(la, `isAstNodeInRange`);
  function ua(e2) {
    return new Ki(() => ({
      keys: Object.keys(e2),
      keyIndex: 0,
      arrayIndex: 0
    }), (t2) => {
      let n2 = X;
      for (; t2.keyIndex < t2[n2(626)].length; ) {
        let n3 = t2.keys[t2.keyIndex];
        if (!n3.startsWith(`$`)) {
          let r2 = e2[n3];
          if (Ri(r2) || zi(r2)) return t2.keyIndex++, {
            done: false,
            value: {
              reference: r2,
              container: e2,
              property: n3
            }
          };
          if (Array.isArray(r2)) {
            for (; t2.arrayIndex < r2.length; ) {
              let i2 = t2.arrayIndex++, a2 = r2[i2];
              if (Ri(a2) || zi(r2)) return {
                done: false,
                value: {
                  reference: a2,
                  container: e2,
                  property: n3,
                  index: i2
                }
              };
            }
            t2.arrayIndex = 0;
          }
        }
        t2.keyIndex++;
      }
      return Xi;
    });
  }
  M(ua, `streamReferences`);
  function da(e2, t2) {
    let n2 = s, r2 = e2[n2(839)](t2[n2(798)]), i2 = t2;
    for (let e3 of Object.values(r2.properties)) e3[n2(811)] !== void 0 && i2[e3.name] === void 0 && (i2[e3.name] = fa(e3.defaultValue));
  }
  M(da, s(1614));
  function fa(e2) {
    return Array[s(1426)](e2) ? [
      ...e2.map(fa)
    ] : e2;
  }
  M(fa, `copyDefaultValue`);
  function pa(e2, t2, n2) {
    let r2 = s, i2 = {
      $type: e2.$type
    };
    n2 && (n2.set(e2, i2), n2[r2(389)](i2, e2));
    for (let [r3, a2] of Object.entries(e2)) if (!r3.startsWith(`$`)) if (Li(a2)) i2[r3] = pa(a2, t2, n2);
    else if (Ri(a2)) i2[r3] = t2(i2, r3, a2.$refNode, a2.$refText, a2);
    else if (Array.isArray(a2)) {
      let e3 = [];
      for (let o2 of a2) Li(o2) ? e3.push(pa(o2, t2, n2)) : Ri(o2) ? e3.push(t2(i2, r3, o2.$refNode, o2.$refText, o2)) : e3.push(o2);
      i2[r3] = e3;
    } else i2[r3] = a2;
    return ea(i2, {
      deep: true
    }), i2;
  }
  M(pa, `copyAstNode`);
  var ma = {};
  dn(ma, {
    AbstractElement: () => ga,
    AbstractParserRule: () => va,
    AbstractRule: () => ba,
    AbstractType: () => Sa,
    Action: () => wa,
    Alternatives: () => Ea,
    ArrayLiteral: () => Oa,
    ArrayType: () => Aa,
    Assignment: () => Ma,
    BooleanLiteral: () => Pa,
    CharacterRange: () => Ia,
    Condition: () => Ra,
    Conjunction: () => Ba,
    CrossReference: () => Ha,
    Disjunction: () => Wa,
    EndOfFile: () => Ka,
    Grammar: () => Ja,
    GrammarImport: () => Xa,
    Group: () => Qa,
    InferredType: () => eo,
    InfixRule: () => no,
    InfixRuleOperatorList: () => io,
    InfixRuleOperators: () => oo,
    Interface: () => co,
    Keyword: () => uo,
    LangiumGrammarAstReflection: () => ds,
    LangiumGrammarTerminals: () => ha,
    NamedArgument: () => po,
    NegatedToken: () => ho,
    Negation: () => _o,
    NumberLiteral: () => yo,
    Parameter: () => xo,
    ParameterReference: () => Co,
    ParserRule: () => To,
    ReferenceType: () => Do,
    RegexToken: () => ko,
    ReturnType: () => jo,
    RuleCall: () => No,
    SimpleType: () => Fo,
    StringLiteral: () => Lo,
    TerminalAlternatives: () => zo,
    TerminalElement: () => Vo,
    TerminalGroup: () => Uo,
    TerminalRule: () => Go,
    TerminalRuleCall: () => qo,
    Type: () => Yo,
    TypeAttribute: () => Zo,
    TypeDefinition: () => $o,
    UnionType: () => ts,
    UnorderedGroup: () => rs,
    UntilToken: () => as,
    ValueLiteral: () => ss,
    Wildcard: () => ls,
    isAbstractElement: () => _a,
    isAbstractParserRule: () => ya,
    isAbstractRule: () => xa,
    isAbstractType: () => Ca,
    isAction: () => Ta,
    isAlternatives: () => Da,
    isArrayLiteral: () => ka,
    isArrayType: () => ja,
    isAssignment: () => Na,
    isBooleanLiteral: () => Fa,
    isCharacterRange: () => La,
    isCondition: () => za,
    isConjunction: () => Va,
    isCrossReference: () => Ua,
    isDisjunction: () => Ga,
    isEndOfFile: () => qa,
    isGrammar: () => Ya,
    isGrammarImport: () => Za,
    isGroup: () => $a,
    isInferredType: () => to,
    isInfixRule: () => ro,
    isInfixRuleOperatorList: () => ao,
    isInfixRuleOperators: () => so,
    isInterface: () => lo,
    isKeyword: () => fo,
    isNamedArgument: () => mo,
    isNegatedToken: () => go,
    isNegation: () => vo,
    isNumberLiteral: () => bo,
    isParameter: () => So,
    isParameterReference: () => wo,
    isParserRule: () => Eo,
    isReferenceType: () => Oo,
    isRegexToken: () => Ao,
    isReturnType: () => Mo,
    isRuleCall: () => Po,
    isSimpleType: () => Io,
    isStringLiteral: () => Ro,
    isTerminalAlternatives: () => Bo,
    isTerminalElement: () => Ho,
    isTerminalGroup: () => Wo,
    isTerminalRule: () => Ko,
    isTerminalRuleCall: () => Jo,
    isType: () => Xo,
    isTypeAttribute: () => Qo,
    isTypeDefinition: () => es,
    isUnionType: () => ns,
    isUnorderedGroup: () => is,
    isUntilToken: () => os,
    isValueLiteral: () => cs,
    isWildcard: () => us,
    reflection: () => z
  });
  var ha = {
    ID: /\^?[_a-zA-Z][\w_]*/,
    STRING: /"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/,
    NUMBER: /NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity)/,
    RegexLiteral: /\/(?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+\/[a-z]*/,
    WS: /\s+/,
    ML_COMMENT: /\/\*[\s\S]*?\*\//,
    SL_COMMENT: /\/\/[^\n\r]*/
  }, ga = {
    $type: `AbstractElement`,
    cardinality: `cardinality`
  };
  function _a(e2) {
    return z.isInstance(e2, ga.$type);
  }
  M(_a, `isAbstractElement`);
  var va = {
    $type: `AbstractParserRule`
  };
  function ya(e2) {
    return z.isInstance(e2, va.$type);
  }
  M(ya, `isAbstractParserRule`);
  var ba = {
    $type: `AbstractRule`
  };
  function xa(e2) {
    return z.isInstance(e2, ba.$type);
  }
  M(xa, `isAbstractRule`);
  var Sa = {
    $type: s(1635)
  };
  function Ca(e2) {
    return z.isInstance(e2, Sa.$type);
  }
  M(Ca, `isAbstractType`);
  var wa = {
    $type: `Action`,
    cardinality: `cardinality`,
    feature: `feature`,
    inferredType: s(1346),
    operator: `operator`,
    type: `type`
  };
  function Ta(e2) {
    return z.isInstance(e2, wa.$type);
  }
  M(Ta, `isAction`);
  var Ea = {
    $type: `Alternatives`,
    cardinality: `cardinality`,
    elements: `elements`
  };
  function Da(e2) {
    return z[s(1383)](e2, Ea.$type);
  }
  M(Da, `isAlternatives`);
  var Oa = {
    $type: `ArrayLiteral`,
    elements: s(1297)
  };
  function ka(e2) {
    return z.isInstance(e2, Oa.$type);
  }
  M(ka, `isArrayLiteral`);
  var Aa = {
    $type: `ArrayType`,
    elementType: `elementType`
  };
  function ja(e2) {
    return z.isInstance(e2, Aa.$type);
  }
  M(ja, `isArrayType`);
  var Ma = {
    $type: `Assignment`,
    cardinality: `cardinality`,
    feature: s(729),
    operator: s(1373),
    predicate: `predicate`,
    terminal: `terminal`
  };
  function Na(e2) {
    return z.isInstance(e2, Ma.$type);
  }
  M(Na, `isAssignment`);
  var Pa = {
    $type: `BooleanLiteral`,
    true: `true`
  };
  function Fa(e2) {
    return z.isInstance(e2, Pa.$type);
  }
  M(Fa, `isBooleanLiteral`);
  var Ia = {
    $type: `CharacterRange`,
    cardinality: `cardinality`,
    left: `left`,
    lookahead: `lookahead`,
    parenthesized: `parenthesized`,
    right: `right`
  };
  function La(e2) {
    return z.isInstance(e2, Ia.$type);
  }
  M(La, `isCharacterRange`);
  var Ra = {
    $type: `Condition`
  };
  function za(e2) {
    let t2 = s;
    return z.isInstance(e2, Ra[t2(798)]);
  }
  M(za, `isCondition`);
  var Ba = {
    $type: `Conjunction`,
    left: `left`,
    right: s(1134)
  };
  function Va(e2) {
    let t2 = s;
    return z.isInstance(e2, Ba[t2(798)]);
  }
  M(Va, `isConjunction`);
  var Ha = {
    $type: `CrossReference`,
    cardinality: `cardinality`,
    deprecatedSyntax: `deprecatedSyntax`,
    isMulti: `isMulti`,
    terminal: `terminal`,
    type: `type`
  };
  function Ua(e2) {
    return z.isInstance(e2, Ha.$type);
  }
  M(Ua, `isCrossReference`);
  var Wa = {
    $type: s(643),
    left: s(347),
    right: s(1134)
  };
  function Ga(e2) {
    return z[s(1383)](e2, Wa.$type);
  }
  M(Ga, `isDisjunction`);
  var Ka = {
    $type: `EndOfFile`,
    cardinality: `cardinality`
  };
  function qa(e2) {
    return z.isInstance(e2, Ka.$type);
  }
  M(qa, `isEndOfFile`);
  var Ja = {
    $type: `Grammar`,
    imports: `imports`,
    interfaces: `interfaces`,
    isDeclared: `isDeclared`,
    name: `name`,
    rules: `rules`,
    types: `types`
  };
  function Ya(e2) {
    return z.isInstance(e2, Ja.$type);
  }
  M(Ya, `isGrammar`);
  var Xa = {
    $type: `GrammarImport`,
    path: `path`
  };
  function Za(e2) {
    let t2 = s;
    return z.isInstance(e2, Xa[t2(798)]);
  }
  M(Za, `isGrammarImport`);
  var Qa = {
    $type: `Group`,
    cardinality: `cardinality`,
    elements: `elements`,
    guardCondition: s(807),
    predicate: `predicate`
  };
  function $a(e2) {
    return z.isInstance(e2, Qa.$type);
  }
  M($a, `isGroup`);
  var eo = {
    $type: `InferredType`,
    name: `name`
  };
  function to(e2) {
    return z.isInstance(e2, eo.$type);
  }
  M(to, `isInferredType`);
  var no = {
    $type: `InfixRule`,
    call: s(1066),
    dataType: `dataType`,
    inferredType: `inferredType`,
    name: `name`,
    operators: `operators`,
    parameters: `parameters`,
    returnType: `returnType`
  };
  function ro(e2) {
    return z[s(1383)](e2, no.$type);
  }
  M(ro, `isInfixRule`);
  var io = {
    $type: `InfixRuleOperatorList`,
    associativity: `associativity`,
    operators: `operators`
  };
  function ao(e2) {
    return z.isInstance(e2, io.$type);
  }
  M(ao, s(1754));
  var oo = {
    $type: `InfixRuleOperators`,
    precedences: `precedences`
  };
  function so(e2) {
    return z.isInstance(e2, oo.$type);
  }
  M(so, `isInfixRuleOperators`);
  var co = {
    $type: `Interface`,
    attributes: `attributes`,
    name: s(747),
    superTypes: `superTypes`
  };
  function lo(e2) {
    return z.isInstance(e2, co.$type);
  }
  M(lo, `isInterface`);
  var uo = {
    $type: `Keyword`,
    cardinality: `cardinality`,
    predicate: `predicate`,
    value: `value`
  };
  function fo(e2) {
    return z.isInstance(e2, uo.$type);
  }
  M(fo, s(986));
  var po = {
    $type: `NamedArgument`,
    calledByName: `calledByName`,
    parameter: `parameter`,
    value: `value`
  };
  function mo(e2) {
    return z.isInstance(e2, po.$type);
  }
  M(mo, `isNamedArgument`);
  var ho = {
    $type: `NegatedToken`,
    cardinality: `cardinality`,
    lookahead: `lookahead`,
    parenthesized: `parenthesized`,
    terminal: s(834)
  };
  function go(e2) {
    return z.isInstance(e2, ho.$type);
  }
  M(go, `isNegatedToken`);
  var _o = {
    $type: `Negation`,
    value: `value`
  };
  function vo(e2) {
    return z[s(1383)](e2, _o.$type);
  }
  M(vo, `isNegation`);
  var yo = {
    $type: `NumberLiteral`,
    value: `value`
  };
  function bo(e2) {
    let t2 = s;
    return z[t2(1383)](e2, yo[t2(798)]);
  }
  M(bo, `isNumberLiteral`);
  var xo = {
    $type: `Parameter`,
    name: `name`
  };
  function So(e2) {
    return z.isInstance(e2, xo.$type);
  }
  M(So, `isParameter`);
  var Co = {
    $type: s(949),
    parameter: `parameter`
  };
  function wo(e2) {
    return z.isInstance(e2, Co.$type);
  }
  M(wo, s(457));
  var To = {
    $type: `ParserRule`,
    dataType: `dataType`,
    definition: `definition`,
    entry: s(616),
    fragment: s(550),
    inferredType: `inferredType`,
    name: s(747),
    parameters: `parameters`,
    returnType: `returnType`
  };
  function Eo(e2) {
    return z.isInstance(e2, To.$type);
  }
  M(Eo, `isParserRule`);
  var Do = {
    $type: `ReferenceType`,
    isMulti: `isMulti`,
    referenceType: `referenceType`
  };
  function Oo(e2) {
    return z.isInstance(e2, Do.$type);
  }
  M(Oo, `isReferenceType`);
  var ko = {
    $type: `RegexToken`,
    cardinality: `cardinality`,
    lookahead: s(1292),
    parenthesized: `parenthesized`,
    regex: `regex`
  };
  function Ao(e2) {
    return z.isInstance(e2, ko.$type);
  }
  M(Ao, s(856));
  var jo = {
    $type: s(1089),
    name: `name`
  };
  function Mo(e2) {
    return z.isInstance(e2, jo.$type);
  }
  M(Mo, `isReturnType`);
  var No = {
    $type: `RuleCall`,
    arguments: `arguments`,
    cardinality: `cardinality`,
    predicate: s(826),
    rule: s(497)
  };
  function Po(e2) {
    return z.isInstance(e2, No.$type);
  }
  M(Po, s(1080));
  var Fo = {
    $type: `SimpleType`,
    primitiveType: `primitiveType`,
    stringType: `stringType`,
    typeRef: `typeRef`
  };
  function Io(e2) {
    let t2 = s;
    return z.isInstance(e2, Fo[t2(798)]);
  }
  M(Io, `isSimpleType`);
  var Lo = {
    $type: `StringLiteral`,
    value: s(1371)
  };
  function Ro(e2) {
    let t2 = s;
    return z.isInstance(e2, Lo[t2(798)]);
  }
  M(Ro, `isStringLiteral`);
  var zo = {
    $type: `TerminalAlternatives`,
    cardinality: `cardinality`,
    elements: `elements`,
    lookahead: `lookahead`,
    parenthesized: s(432)
  };
  function Bo(e2) {
    return z.isInstance(e2, zo.$type);
  }
  M(Bo, `isTerminalAlternatives`);
  var Vo = {
    $type: `TerminalElement`,
    cardinality: `cardinality`,
    lookahead: s(1292),
    parenthesized: `parenthesized`
  };
  function Ho(e2) {
    return z.isInstance(e2, Vo.$type);
  }
  M(Ho, `isTerminalElement`);
  var Uo = {
    $type: `TerminalGroup`,
    cardinality: `cardinality`,
    elements: `elements`,
    lookahead: s(1292),
    parenthesized: s(432)
  };
  function Wo(e2) {
    return z.isInstance(e2, Uo.$type);
  }
  M(Wo, `isTerminalGroup`);
  var Go = {
    $type: `TerminalRule`,
    definition: `definition`,
    fragment: `fragment`,
    hidden: `hidden`,
    name: `name`,
    type: `type`
  };
  function Ko(e2) {
    return z.isInstance(e2, Go.$type);
  }
  M(Ko, `isTerminalRule`);
  var qo = {
    $type: `TerminalRuleCall`,
    cardinality: `cardinality`,
    lookahead: s(1292),
    parenthesized: `parenthesized`,
    rule: `rule`
  };
  function Jo(e2) {
    return z.isInstance(e2, qo.$type);
  }
  M(Jo, `isTerminalRuleCall`);
  var Yo = {
    $type: s(915),
    name: s(747),
    type: `type`
  };
  function Xo(e2) {
    return z.isInstance(e2, Yo.$type);
  }
  M(Xo, s(377));
  var Zo = {
    $type: `TypeAttribute`,
    defaultValue: `defaultValue`,
    isOptional: `isOptional`,
    name: s(747),
    type: `type`
  };
  function Qo(e2) {
    return z.isInstance(e2, Zo.$type);
  }
  M(Qo, `isTypeAttribute`);
  var $o = {
    $type: `TypeDefinition`
  };
  function es(e2) {
    return z[s(1383)](e2, $o.$type);
  }
  M(es, `isTypeDefinition`);
  var ts = {
    $type: `UnionType`,
    types: `types`
  };
  function ns(e2) {
    return z.isInstance(e2, ts.$type);
  }
  M(ns, s(1274));
  var rs = {
    $type: s(1272),
    cardinality: s(1329),
    elements: `elements`
  };
  function is(e2) {
    return z.isInstance(e2, rs.$type);
  }
  M(is, s(1347));
  var as = {
    $type: `UntilToken`,
    cardinality: `cardinality`,
    lookahead: `lookahead`,
    parenthesized: `parenthesized`,
    terminal: s(834)
  };
  function os(e2) {
    return z.isInstance(e2, as.$type);
  }
  M(os, `isUntilToken`);
  var ss = {
    $type: s(439)
  };
  function cs(e2) {
    return z.isInstance(e2, ss.$type);
  }
  M(cs, `isValueLiteral`);
  var ls = {
    $type: `Wildcard`,
    cardinality: s(1329),
    lookahead: `lookahead`,
    parenthesized: s(432)
  };
  function us(e2) {
    return z.isInstance(e2, ls.$type);
  }
  M(us, `isWildcard`);
  var ds = (d = class extends Hi {
    constructor() {
      let e2 = s;
      super(...arguments), this.types = {
        AbstractElement: {
          name: ga[e2(798)],
          properties: {
            cardinality: {
              name: ga.cardinality
            }
          },
          superTypes: []
        },
        AbstractParserRule: {
          name: va.$type,
          properties: {},
          superTypes: [
            ba[e2(798)],
            Sa.$type
          ]
        },
        AbstractRule: {
          name: ba.$type,
          properties: {},
          superTypes: []
        },
        AbstractType: {
          name: Sa.$type,
          properties: {},
          superTypes: []
        },
        Action: {
          name: wa.$type,
          properties: {
            cardinality: {
              name: wa[e2(1329)]
            },
            feature: {
              name: wa.feature
            },
            inferredType: {
              name: wa[e2(1346)]
            },
            operator: {
              name: wa[e2(1373)]
            },
            type: {
              name: wa[e2(1487)],
              referenceType: Sa[e2(798)]
            }
          },
          superTypes: [
            ga.$type
          ]
        },
        Alternatives: {
          name: Ea.$type,
          properties: {
            cardinality: {
              name: Ea.cardinality
            },
            elements: {
              name: Ea.elements,
              defaultValue: []
            }
          },
          superTypes: [
            ga.$type
          ]
        },
        ArrayLiteral: {
          name: Oa.$type,
          properties: {
            elements: {
              name: Oa[e2(1297)],
              defaultValue: []
            }
          },
          superTypes: [
            ss.$type
          ]
        },
        ArrayType: {
          name: Aa.$type,
          properties: {
            elementType: {
              name: Aa.elementType
            }
          },
          superTypes: [
            $o.$type
          ]
        },
        Assignment: {
          name: Ma[e2(798)],
          properties: {
            cardinality: {
              name: Ma.cardinality
            },
            feature: {
              name: Ma.feature
            },
            operator: {
              name: Ma.operator
            },
            predicate: {
              name: Ma.predicate
            },
            terminal: {
              name: Ma.terminal
            }
          },
          superTypes: [
            ga.$type
          ]
        },
        BooleanLiteral: {
          name: Pa.$type,
          properties: {
            true: {
              name: Pa[e2(1162)],
              defaultValue: false
            }
          },
          superTypes: [
            Ra.$type,
            ss.$type
          ]
        },
        CharacterRange: {
          name: Ia.$type,
          properties: {
            cardinality: {
              name: Ia[e2(1329)]
            },
            left: {
              name: Ia[e2(347)]
            },
            lookahead: {
              name: Ia.lookahead
            },
            parenthesized: {
              name: Ia.parenthesized,
              defaultValue: false
            },
            right: {
              name: Ia.right
            }
          },
          superTypes: [
            Vo.$type
          ]
        },
        Condition: {
          name: Ra.$type,
          properties: {},
          superTypes: []
        },
        Conjunction: {
          name: Ba.$type,
          properties: {
            left: {
              name: Ba.left
            },
            right: {
              name: Ba[e2(1134)]
            }
          },
          superTypes: [
            Ra.$type
          ]
        },
        CrossReference: {
          name: Ha.$type,
          properties: {
            cardinality: {
              name: Ha.cardinality
            },
            deprecatedSyntax: {
              name: Ha.deprecatedSyntax,
              defaultValue: false
            },
            isMulti: {
              name: Ha.isMulti,
              defaultValue: false
            },
            terminal: {
              name: Ha.terminal
            },
            type: {
              name: Ha.type,
              referenceType: Sa.$type
            }
          },
          superTypes: [
            ga.$type
          ]
        },
        Disjunction: {
          name: Wa.$type,
          properties: {
            left: {
              name: Wa.left
            },
            right: {
              name: Wa.right
            }
          },
          superTypes: [
            Ra.$type
          ]
        },
        EndOfFile: {
          name: Ka.$type,
          properties: {
            cardinality: {
              name: Ka.cardinality
            }
          },
          superTypes: [
            ga[e2(798)]
          ]
        },
        Grammar: {
          name: Ja.$type,
          properties: {
            imports: {
              name: Ja[e2(793)],
              defaultValue: []
            },
            interfaces: {
              name: Ja[e2(264)],
              defaultValue: []
            },
            isDeclared: {
              name: Ja.isDeclared,
              defaultValue: false
            },
            name: {
              name: Ja.name
            },
            rules: {
              name: Ja.rules,
              defaultValue: []
            },
            types: {
              name: Ja.types,
              defaultValue: []
            }
          },
          superTypes: []
        },
        GrammarImport: {
          name: Xa[e2(798)],
          properties: {
            path: {
              name: Xa.path
            }
          },
          superTypes: []
        },
        Group: {
          name: Qa.$type,
          properties: {
            cardinality: {
              name: Qa.cardinality
            },
            elements: {
              name: Qa.elements,
              defaultValue: []
            },
            guardCondition: {
              name: Qa.guardCondition
            },
            predicate: {
              name: Qa.predicate
            }
          },
          superTypes: [
            ga[e2(798)]
          ]
        },
        InferredType: {
          name: eo.$type,
          properties: {
            name: {
              name: eo[e2(747)]
            }
          },
          superTypes: [
            Sa.$type
          ]
        },
        InfixRule: {
          name: no.$type,
          properties: {
            call: {
              name: no.call
            },
            dataType: {
              name: no[e2(1024)]
            },
            inferredType: {
              name: no[e2(1346)]
            },
            name: {
              name: no.name
            },
            operators: {
              name: no.operators
            },
            parameters: {
              name: no.parameters,
              defaultValue: []
            },
            returnType: {
              name: no[e2(421)],
              referenceType: Sa.$type
            }
          },
          superTypes: [
            va.$type
          ]
        },
        InfixRuleOperatorList: {
          name: io.$type,
          properties: {
            associativity: {
              name: io.associativity
            },
            operators: {
              name: io.operators,
              defaultValue: []
            }
          },
          superTypes: []
        },
        InfixRuleOperators: {
          name: oo[e2(798)],
          properties: {
            precedences: {
              name: oo.precedences,
              defaultValue: []
            }
          },
          superTypes: []
        },
        Interface: {
          name: co.$type,
          properties: {
            attributes: {
              name: co[e2(1446)],
              defaultValue: []
            },
            name: {
              name: co.name
            },
            superTypes: {
              name: co.superTypes,
              defaultValue: [],
              referenceType: Sa.$type
            }
          },
          superTypes: [
            Sa.$type
          ]
        },
        Keyword: {
          name: uo.$type,
          properties: {
            cardinality: {
              name: uo[e2(1329)]
            },
            predicate: {
              name: uo.predicate
            },
            value: {
              name: uo.value
            }
          },
          superTypes: [
            ga.$type
          ]
        },
        NamedArgument: {
          name: po.$type,
          properties: {
            calledByName: {
              name: po.calledByName,
              defaultValue: false
            },
            parameter: {
              name: po[e2(1615)],
              referenceType: xo.$type
            },
            value: {
              name: po.value
            }
          },
          superTypes: []
        },
        NegatedToken: {
          name: ho.$type,
          properties: {
            cardinality: {
              name: ho.cardinality
            },
            lookahead: {
              name: ho.lookahead
            },
            parenthesized: {
              name: ho.parenthesized,
              defaultValue: false
            },
            terminal: {
              name: ho[e2(834)]
            }
          },
          superTypes: [
            Vo[e2(798)]
          ]
        },
        Negation: {
          name: _o.$type,
          properties: {
            value: {
              name: _o.value
            }
          },
          superTypes: [
            Ra[e2(798)]
          ]
        },
        NumberLiteral: {
          name: yo.$type,
          properties: {
            value: {
              name: yo.value
            }
          },
          superTypes: [
            ss.$type
          ]
        },
        Parameter: {
          name: xo.$type,
          properties: {
            name: {
              name: xo[e2(747)]
            }
          },
          superTypes: []
        },
        ParameterReference: {
          name: Co.$type,
          properties: {
            parameter: {
              name: Co.parameter,
              referenceType: xo[e2(798)]
            }
          },
          superTypes: [
            Ra.$type
          ]
        },
        ParserRule: {
          name: To.$type,
          properties: {
            dataType: {
              name: To[e2(1024)]
            },
            definition: {
              name: To.definition
            },
            entry: {
              name: To.entry,
              defaultValue: false
            },
            fragment: {
              name: To.fragment,
              defaultValue: false
            },
            inferredType: {
              name: To[e2(1346)]
            },
            name: {
              name: To.name
            },
            parameters: {
              name: To.parameters,
              defaultValue: []
            },
            returnType: {
              name: To.returnType,
              referenceType: Sa.$type
            }
          },
          superTypes: [
            va.$type
          ]
        },
        ReferenceType: {
          name: Do.$type,
          properties: {
            isMulti: {
              name: Do[e2(700)],
              defaultValue: false
            },
            referenceType: {
              name: Do.referenceType
            }
          },
          superTypes: [
            $o[e2(798)]
          ]
        },
        RegexToken: {
          name: ko[e2(798)],
          properties: {
            cardinality: {
              name: ko.cardinality
            },
            lookahead: {
              name: ko.lookahead
            },
            parenthesized: {
              name: ko[e2(432)],
              defaultValue: false
            },
            regex: {
              name: ko[e2(410)]
            }
          },
          superTypes: [
            Vo[e2(798)]
          ]
        },
        ReturnType: {
          name: jo.$type,
          properties: {
            name: {
              name: jo.name
            }
          },
          superTypes: []
        },
        RuleCall: {
          name: No.$type,
          properties: {
            arguments: {
              name: No[e2(1613)],
              defaultValue: []
            },
            cardinality: {
              name: No[e2(1329)]
            },
            predicate: {
              name: No.predicate
            },
            rule: {
              name: No.rule,
              referenceType: ba.$type
            }
          },
          superTypes: [
            ga[e2(798)]
          ]
        },
        SimpleType: {
          name: Fo.$type,
          properties: {
            primitiveType: {
              name: Fo.primitiveType
            },
            stringType: {
              name: Fo.stringType
            },
            typeRef: {
              name: Fo.typeRef,
              referenceType: Sa.$type
            }
          },
          superTypes: [
            $o.$type
          ]
        },
        StringLiteral: {
          name: Lo.$type,
          properties: {
            value: {
              name: Lo[e2(1371)]
            }
          },
          superTypes: [
            ss[e2(798)]
          ]
        },
        TerminalAlternatives: {
          name: zo.$type,
          properties: {
            cardinality: {
              name: zo.cardinality
            },
            elements: {
              name: zo.elements,
              defaultValue: []
            },
            lookahead: {
              name: zo.lookahead
            },
            parenthesized: {
              name: zo.parenthesized,
              defaultValue: false
            }
          },
          superTypes: [
            Vo.$type
          ]
        },
        TerminalElement: {
          name: Vo.$type,
          properties: {
            cardinality: {
              name: Vo.cardinality
            },
            lookahead: {
              name: Vo.lookahead
            },
            parenthesized: {
              name: Vo.parenthesized,
              defaultValue: false
            }
          },
          superTypes: [
            ga.$type
          ]
        },
        TerminalGroup: {
          name: Uo[e2(798)],
          properties: {
            cardinality: {
              name: Uo.cardinality
            },
            elements: {
              name: Uo.elements,
              defaultValue: []
            },
            lookahead: {
              name: Uo.lookahead
            },
            parenthesized: {
              name: Uo.parenthesized,
              defaultValue: false
            }
          },
          superTypes: [
            Vo.$type
          ]
        },
        TerminalRule: {
          name: Go.$type,
          properties: {
            definition: {
              name: Go.definition
            },
            fragment: {
              name: Go[e2(550)],
              defaultValue: false
            },
            hidden: {
              name: Go.hidden,
              defaultValue: false
            },
            name: {
              name: Go.name
            },
            type: {
              name: Go.type
            }
          },
          superTypes: [
            ba[e2(798)]
          ]
        },
        TerminalRuleCall: {
          name: qo[e2(798)],
          properties: {
            cardinality: {
              name: qo.cardinality
            },
            lookahead: {
              name: qo.lookahead
            },
            parenthesized: {
              name: qo.parenthesized,
              defaultValue: false
            },
            rule: {
              name: qo.rule,
              referenceType: Go.$type
            }
          },
          superTypes: [
            Vo.$type
          ]
        },
        Type: {
          name: Yo[e2(798)],
          properties: {
            name: {
              name: Yo.name
            },
            type: {
              name: Yo.type
            }
          },
          superTypes: [
            Sa.$type
          ]
        },
        TypeAttribute: {
          name: Zo.$type,
          properties: {
            defaultValue: {
              name: Zo.defaultValue
            },
            isOptional: {
              name: Zo.isOptional,
              defaultValue: false
            },
            name: {
              name: Zo[e2(747)]
            },
            type: {
              name: Zo.type
            }
          },
          superTypes: []
        },
        TypeDefinition: {
          name: $o.$type,
          properties: {},
          superTypes: []
        },
        UnionType: {
          name: ts.$type,
          properties: {
            types: {
              name: ts[e2(726)],
              defaultValue: []
            }
          },
          superTypes: [
            $o[e2(798)]
          ]
        },
        UnorderedGroup: {
          name: rs.$type,
          properties: {
            cardinality: {
              name: rs.cardinality
            },
            elements: {
              name: rs.elements,
              defaultValue: []
            }
          },
          superTypes: [
            ga.$type
          ]
        },
        UntilToken: {
          name: as[e2(798)],
          properties: {
            cardinality: {
              name: as[e2(1329)]
            },
            lookahead: {
              name: as.lookahead
            },
            parenthesized: {
              name: as.parenthesized,
              defaultValue: false
            },
            terminal: {
              name: as.terminal
            }
          },
          superTypes: [
            Vo.$type
          ]
        },
        ValueLiteral: {
          name: ss.$type,
          properties: {},
          superTypes: []
        },
        Wildcard: {
          name: ls[e2(798)],
          properties: {
            cardinality: {
              name: ls.cardinality
            },
            lookahead: {
              name: ls[e2(1292)]
            },
            parenthesized: {
              name: ls.parenthesized,
              defaultValue: false
            }
          },
          superTypes: [
            Vo.$type
          ]
        }
      };
    }
  }, M(d, `LangiumGrammarAstReflection`), d), z = new ds();
  function fs(e2) {
    let t2 = s, n2 = e2, r2 = false;
    for (; n2; ) {
      let e3 = ta(n2.grammarSource, Eo);
      if (e3 && e3.dataType) n2 = n2[t2(1673)], r2 = true;
      else if (r2) return n2;
      else return;
    }
  }
  M(fs, `getDatatypeNode`);
  function ps(e2) {
    let t2 = s;
    return new Zi(e2, (e3) => Ui(e3) ? e3[t2(835)] : [], {
      includeRoot: true
    });
  }
  M(ps, `streamCst`);
  function ms(e2) {
    return ps(e2).filter(Wi);
  }
  M(ms, `flattenCst`);
  function hs(e2, t2) {
    for (; e2.container; ) if (e2 = e2.container, e2 === t2) return true;
    return false;
  }
  M(hs, s(1224));
  function gs(e2) {
    return {
      start: {
        character: e2.startColumn - 1,
        line: e2.startLine - 1
      },
      end: {
        character: e2.endColumn,
        line: e2.endLine - 1
      }
    };
  }
  M(gs, `tokenToRange`);
  function _s(e2) {
    if (!e2) return;
    let { offset: t2, end: n2, range: r2 } = e2;
    return {
      range: r2,
      offset: t2,
      end: n2,
      length: n2 - t2
    };
  }
  M(_s, `toDocumentSegment`);
  var vs;
  (function(e2) {
    let t2 = s;
    e2[e2.Before = 0] = `Before`, e2[e2.After = 1] = `After`, e2[e2[t2(1797)] = 2] = `OverlapFront`, e2[e2.OverlapBack = 3] = `OverlapBack`, e2[e2.Inside = 4] = `Inside`, e2[e2.Outside = 5] = `Outside`;
  })(vs || (vs = {}));
  function ys(e2, t2) {
    let n2 = s;
    if (e2[n2(1488)][n2(1250)] < t2.start.line || e2.end.line === t2.start.line && e2.end.character <= t2.start.character) return vs[n2(1412)];
    if (e2[n2(1433)][n2(1250)] > t2.end.line || e2.start.line === t2.end.line && e2.start.character >= t2.end.character) return vs.After;
    let r2 = e2.start.line > t2.start.line || e2.start[n2(1250)] === t2.start.line && e2[n2(1433)].character >= t2.start.character, i2 = e2.end.line < t2.end[n2(1250)] || e2.end.line === t2[n2(1488)].line && e2[n2(1488)].character <= t2.end.character;
    return r2 && i2 ? vs[n2(1428)] : r2 ? vs.OverlapBack : i2 ? vs.OverlapFront : vs.Outside;
  }
  M(ys, `compareRange`);
  function bs(e2, t2) {
    return ys(e2, t2) > vs.After;
  }
  M(bs, `inRange`);
  var xs = RegExp(`^[\\w\\p{L}]$`, `u`);
  function Ss(e2, t2, n2 = xs) {
    let r2 = s;
    if (e2) {
      if (t2 > 0) {
        let i2 = t2 - e2[r2(797)], a2 = e2[r2(324)].charAt(i2);
        n2.test(a2) || t2--;
      }
      return Es(e2, t2);
    }
  }
  M(Ss, s(1654));
  function Cs(e2, t2) {
    let n2 = s;
    if (e2) {
      let r2 = ks(e2, true);
      if (r2 && ws(r2, t2)) return r2;
      if (Gi(e2)) {
        let r3 = e2[n2(835)].findIndex((e3) => !e3.hidden);
        for (let n3 = r3 - 1; n3 >= 0; n3--) {
          let r4 = e2.content[n3];
          if (ws(r4, t2)) return r4;
        }
      }
    }
  }
  M(Cs, `findCommentNode`);
  function ws(e2, t2) {
    return Wi(e2) && t2.includes(e2.tokenType.name);
  }
  M(ws, `isCommentNode`);
  function Ts() {
    let e2 = [
      `Markdown`,
      `atLeastOneSepFirstInternalRecord`,
      `warn`,
      `notifyDocumentPhase`,
      `onError`,
      `options`,
      `buildLineBreakIssueMessage`,
      `UNSUPPORTED_FLAGS_FOUND`,
      `INVALID_RULE_OVERRIDE`,
      `isInstance`,
      `blocks`,
      `NotificationType`,
      `entriesBefore`,
      `terminalGroupToRegex`,
      `targetRef`,
      `every`,
      `baseIsArguments`,
      `UTF8`,
      `numberOfParams`,
      `153713DOCfTY`,
      `addToken`,
      `hasWorkDoneProgress`,
      `identityEscapeAtom`,
      `_merge`,
      `req-`,
      `<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.`,
      `PUSH_MODE`,
      `operators`,
      `[object Boolean]`,
      `indentationTokenBuilder`,
      `saveState`,
      `GastRefResolverVisitor`,
      `constructor`,
      `startFn`,
      `token`,
      `flushLexingReport`,
      `buildUnexpectedCharactersMessage`,
      `properties`,
      `Before`,
      `createTextDocumentGetter`,
      `_read`,
      `RAL`,
      `SUBRULE7`,
      `message`,
      `nextProductionOccurrence`,
      `get`,
      `rules`,
      `trimmedEndIndex`,
      `LONGER_ALT`,
      `def`,
      `method`,
      `createSnippet`,
      `isArray`,
      `onLastListenerRemove`,
      `Inside`,
      `DefaultLexer`,
      `ImplementationRequest`,
      `EmDataEntity`,
      `lexing-info`,
      `start`,
      `startWalking`,
      `visitEndAnchor`,
      `parseAsync`,
      `)'. Processing request took `,
      `INDENTATION`,
      `__data__`,
      `stackGet`,
      `annotationId`,
      `isResponse`,
      `[object Map]`,
      `hydrateReference`,
      `SemanticTokensRefreshRequest`,
      `attributes`,
      `indexManager`,
      `RegExpParser`,
      `link`,
      `recordProd`,
      `assignmentMap`,
      `WillCreateFilesRequest`,
      `TreeView`,
      `IGNORE_INDENTATION`,
      `isUniquePrefixHash`,
      `replacer`,
      `onDocumentPhase`,
      `subrule`,
      `None`,
      `export`,
      `MethodNotFound`,
      `TreemapValidator`,
      `evolution`,
      `done`,
      `checkTrim`,
      `throwIfDisposed`,
      `getATNConfigKey`,
      `An error occurred while resolving reference to '`,
      `isIMultiModeLexerDefinition`,
      `MultiMap`,
      `setInitialNodeLocation`,
      `nodeType`,
      `toPort`,
      `TriggerCharacter`,
      `dispose`,
      `|$)`,
      `MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE`,
      `assertChangeAnnotations`,
      `getCrossReferenceTerminal`,
      `messageBuffer`,
      `send-request`,
      `ReadableStreamMessageReader`,
      `Snippet`,
      `nameProvider`,
      `visitCharacter`,
      `FoldingRangeRefreshRequest`,
      `type`,
      `end`,
      `memoizeCapped`,
      `TreeViewGrammarGrammar`,
      `textDocument/inlayHint`,
      `utf-8`,
      `Statement`,
      `auto`,
      `resyncFollows`,
      `emptyGroups`,
      `getContainerOfType`,
      `arrayIncludes`,
      `alpha`,
      `parseHexDigits`,
      `astNodeLocator`,
      `joinPath`,
      `[object Symbol]`,
      ` failed with message: `,
      `Request `,
      `sourceFrames`,
      `tokenTypes`,
      `lspReservedErrorRangeEnd`,
      `from`,
      `report`,
      `workspace/inlineValue/refresh`,
      `MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST`,
      `originalGrammarAction`,
      `buildEarlyExitMessage`,
      `setLaFuncCache`,
      `uniq`,
      `getNative`,
      `DidChangeWatchedFilesNotification`,
      `manyInternal`,
      `IdCancellationReceiverStrategy`,
      `ignoreCase`,
      `dotAll`,
      `AsNew`,
      `ShowMessageNotification`,
      `Symbol`,
      `AstReflection`,
      `error`,
      `Alternation`,
      `traceInitIndent`,
      `readable`,
      `task`,
      `> within Rule <`,
      `defineRule`,
      `>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`,
      `nonTerminalName`,
      `loadGrammarFromJson`,
      `errorMessageProvider`,
      `<-has been used in all of the following Token Types: `,
      `number`,
      `deprecated`,
      `separator`,
      `diagnosticData`,
      `$nodeDescription`,
      ` is used by multiple languages. It is now assigned to '`,
      `capabilities`,
      ` (symbol '`,
      `createMinimalGrammarServices`,
      `firePartialMessage`,
      `DeclarationRequest`,
      `[\\s\\S]`,
      `InlayHintRequest`,
      `MessageStrategy`,
      `Section`,
      `Parse error on line `,
      `validateAstBefore`,
      `recursiveReduce`,
      `langiumDocumentFactory`,
      `repetition`,
      `_changeAnnotations`,
      `isBuffer`,
      `GAstVisitor`,
      `New`,
      `LangiumDocumentFactory`,
      `[object Object]`,
      `endRegexpStack`,
      `Touch`,
      `hasPredicates`,
      `index`,
      `getExtraProductionArgument`,
      `textDocument/didSave`,
      `%28`,
      `visitLookahead`,
      `ServerCancelled`,
      `scheme`,
      `GitGraphGrammarGrammar`,
      `[object Promise]`,
      `writeSemaphore`,
      `controlLetterEscapeAtom`,
      `ComputedScopes`,
      `sendProgress`,
      `baseIsMap`,
      `runCancelable`,
      `lhsDir`,
      `descr`,
      `getTags`,
      `ProgressType`,
      `positionTracking`,
      `Listening`,
      `create`,
      `prepareBuild`,
      `getBaseCstVisitorConstructor`,
      ` \u2014 `,
      `characterClassEscape`,
      `IndexManager`,
      `complement`,
      `accDescr`,
      `IndexedReferences`,
      `TypeHierarchySupertypesRequest`,
      `ignoreIfNotExists`,
      `fireError`,
      `diagnostics`,
      `_waiting`,
      `1391492daXUcv`,
      `occurrence`,
      `isEpsilon`,
      `changeAnnotations`,
      `found`,
      `RequestFailed`,
      `DidCloseTextDocumentNotification`,
      `registrationMethod`,
      `endColumn`,
      `Function`,
      `arguments`,
      `assignMandatoryProperties`,
      `parameter`,
      `givenStatements`,
      `initErrorHandler`,
      `startsWith`,
      `query`,
      `CONSUME6`,
      `The file extension `,
      `targetProdType`,
      `CST_STACK`,
      `raiseEarlyExitException`,
      `_callbacks`,
      `mapCacheHas`,
      `project`,
      ` times) in the top level rule: ->`,
      `categoryMatches`,
      `langiumDocuments`,
      `documentBuildWaiters`,
      `showData`,
      `tryInRuleRecovery`,
      `createBaseSemanticVisitorConstructor`,
      `AbstractType`,
      `allConfigsInRuleStopStates`,
      `wrapConsume`,
      `isRequest`,
      `astNodes`,
      `SEP`,
      `baseIsEqual`,
      `undefined`,
      `terminationDelay`,
      `IE_PROTO`,
      `EventModelingGrammar`,
      `shortRuleNameToFullName`,
      `path`,
      `<-which does not exist`,
      `topLevelRuleRecord`,
      `Ambiguous empty alternative: <`,
      `CodeLensRefreshRequest`,
      `codeAction/resolve`,
      `_linkingError`,
      `findDeclarationNodeAtOffset`,
      `join`,
      `slice`,
      `tokenBuilder`,
      `references`,
      `_errors`,
      `Unhandled method `,
      `ScopeComputation`,
      `document`,
      `length`,
      `dehydrateAstNode`,
      `canBeOptimized`,
      `declaration`,
      `<-- <`,
      `", path: "`,
      `lookAheadFuncsCache`,
      ` without active response promise.`,
      `isTreemap`,
      `ConnectionStrategy`,
      `container`,
      `min`,
      `buildReference`,
      `fromString`,
      `json`,
      `toMarkdown`,
      `possibleTokTypes`,
      `attemptInRepetitionRecovery`,
      `manage`,
      `ACTION_RECORD`,
      `[object DataView]`,
      `Grammar Recording`,
      `.mermaid`,
      `MonikerRequest`,
      `hasId`,
      `memoize`,
      `shift`,
      `/..`,
      `visitSet`,
      `pattern`,
      `isRangeDash`,
      `anchors`,
      `Variable`,
      `createToken`,
      `_offset`,
      `endOffset`,
      `getRule`,
      `defineProperty`,
      `trimOld`,
      `authority`,
      `definedRulesNames`,
      `bind`,
      `indentationStack`,
      `info`,
      `chopInput`,
      `NotificationType9`,
      `WorkspaceCache`,
      `SignatureHelpRequest`,
      `setNodeLocationFull`,
      `noteEntities`,
      `Set`,
      `textDocument/rename`,
      `NO_NON_EMPTY_LOOKAHEAD`,
      `<-as it is not defined in any of the super grammars `,
      `initDocumentChanges`,
      `hydrateCstNode`,
      `workspaceSymbol/resolve`,
      `findReferences`,
      `InvalidParams`,
      `__lodash_hash_undefined__`,
      `ComputeLookaheadFunctions`,
      `getNode`,
      `isDisposed`,
      `visitNonTerminal`,
      `GitGraphTokenBuilder`,
      `wrapSubrule`,
      `frames`,
      `string`,
      `baseFindIndex`,
      `NotificationType7`,
      `_emitter`,
      `ParserErrorMessageProvider`,
      `objectLiteral`,
      `traceInitPerf`,
      `FileOperationPatternKind`,
      `_size`,
      `Event`,
      `root`,
      `areTokenCategoriesNotUsed`,
      `isPrototype`,
      `profilers`,
      `collectExportedSymbols`,
      `runConverter`,
      `createGrammarConfig`,
      `memoized`,
      `needsConfirmation`,
      `stop`,
      `grammarName`,
      `remove`,
      `baseCstVisitorConstructor`,
      `_partialMessageTimeout`,
      `isInfixRuleOperatorList`,
      `RestWalker`,
      `Disposable`,
      `validationRegistry`,
      `concat`,
      `isValidToken`,
      `ConnectionErrors`,
      `lexer`,
      `canRecoverWithSingleTokenInsertion`,
      `close`,
      `alts`,
      `getAstNodePath`,
      `WillRenameFilesRequest`,
      `walkAtLeastOne`,
      `_nodeDescription`,
      `isStrictComparable`,
      `getMatchData`,
      `<- at offset: `,
      `applyEdits`,
      `checkPrefixAlternativesAmbiguities`,
      `finalize`,
      `Token Type: ->`,
      `buildNoViableAltMessage`,
      `baseAssignIn`,
      `validateRegExpPattern`,
      `positiveInteger`,
      `remainingDedents`,
      `next`,
      `inline`,
      `documentChanges`,
      `CancellationToken`,
      `CONSUME2`,
      `/**`,
      `2276020kLmois`,
      `entries`,
      `resetStackSize`,
      `sticky`,
      `data`,
      `Closed`,
      `AbstractMessageBuffer`,
      `cstPostRuleOnlyOffset`,
      `globalScopeCache`,
      `exists`,
      `OverlapFront`,
      `documentSelector`,
      `initRecoverable`,
      `FailureHandlingKind`,
      `register`,
      `isOperationCancelled`,
      `repetitionMandatoryWithSeparator`,
      `element`,
      `insert`,
      `createAsync`,
      `postMessage`,
      `property`,
      `createLangiumDocument`,
      `_totalLength`,
      `readQueue`,
      `possiblePathsFrom`,
      `currentDocument`,
      `getReferenceType`,
      `interfaces`,
      `sendNotification`,
      `NoViableAltException`,
      `SharedArraySenderStrategy`,
      `notes`,
      `isShortPattern`,
      `Lexer Config handling`,
      `createInfoServices`,
      `> Rule,
<`,
      `cleanUpDeleted`,
      `isTerm`,
      `popDiagnostics`,
      `scopeProvider`,
      `DiagnosticServerCancellationData`,
      `fileExtensions`,
      `Information`,
      `
                  appears more than once (`,
      `waitUntil`,
      `Linked`,
      `convertInt`,
      `cstPostTerminal`,
      `assertion`,
      `textEdit`,
      `range`,
      `getToken`,
      `ref`,
      `LanguageMetaData`,
      `Expecting `,
      `ValidationRegistry`,
      `traceReceivedRequest`,
      `nodeLocationTracking`,
      `computeNewColumn`,
      `extname`,
      `baseIsTypedArray`,
      `distinct`,
      `isDataTypeRule`,
      `DocumentBuilder`,
      `defined`,
      `A Lexer cannot be initialized using an undefined Token Type. Mode:<`,
      `acquireParserWorker`,
      `validateSomeNonEmptyLookaheadPath`,
      `ApplyWorkspaceEditRequest`,
      `current`,
      `DEFINE_RULE`,
      `dataReference`,
      `sendCancellation`,
      `decisionMap`,
      `map`,
      `equalByTag`,
      `isNotification`,
      `reject`,
      `updateListeners`,
      `dehydrateCstNode`,
      `BACKTRACK`,
      `CancellationReceiverStrategy`,
      `LinkingError`,
      `stopSubTask`,
      `hasConflictingAltSet`,
      `filter`,
      `find`,
      `text`,
      `atom`,
      ` can only receive input from a `,
      `command`,
      `stringArray`,
      `modelEntities`,
      `non exhaustive match`,
      `util`,
      `handleMessage`,
      `$refNode`,
      `categories`,
      `relative`,
      `[object Date]`,
      `initCharCodeToOptimizedIndexMap`,
      `messageDirection`,
      `6VKlEyj`,
      `_event`,
      `visitDisjunction`,
      `__esModule`,
      `wrapPreparationException`,
      `selfAnalysisDone`,
      `Class`,
      `buildRules`,
      `left`,
      `DidRenameFilesNotification`,
      `visit`,
      `RepetitionMandatory`,
      `location`,
      `dir`,
      `isNamedParam`,
      `optionInternalRecord`,
      `> at index: <`,
      `target`,
      `2601750WjXvug`,
      `propertyIsEnumerable`,
      `fromUri`,
      `blue`,
      `getBuildOptions`,
      `alternation`,
      `lexerErrors`,
      `BACKTRACK_RECORD`,
      `createDehyrationContext`,
      `getSelfNodes`,
      `canModeBeOptimized`,
      `ruleInvocationStateUpdate`,
      `version`,
      `rangeLength`,
      `typedArray`,
      `getDocument`,
      `PATTERN`,
      `cache`,
      `visitAlternative`,
      `KNOWN_RECORDER_ERROR`,
      `isType`,
      `_workspaceEdit`,
      `WorkspaceSymbolRequest`,
      `recoveryValueFunc`,
      `AT_LEAST_ONE6`,
      `NONE_LAST_EMPTY_ALT`,
      `DidChangeNotebookDocumentNotification`,
      `converter`,
      `fromOptions`,
      `function`,
      `ALT`,
      `Pie`,
      `set`,
      `errorEmitter`,
      `Range#create called with invalid arguments[`,
      `Architecture`,
      `chevrotainLexer`,
      `InlayHintRefreshRequest`,
      `modelEntityType`,
      `forEach`,
      `%3A`,
      `valid`,
      `Errors Detected in CST Visitor <`,
      `writable`,
      `TypeHierarchySubtypesRequest`,
      `height`,
      `LinkedMap`,
      `MessageDirection`,
      `TextDocumentSaveReason`,
      `PlainText`,
      `hashClear`,
      `	Unable to optimize: < `,
      `visitRepetitionMandatory`,
      `regex`,
      `_fsPath`,
      `FoldingRangeRequest`,
      `log`,
      `parameterStructures`,
      `assignValue`,
      `buildFullFollowKeyStack`,
      `ready`,
      `fullText`,
      `CUSTOM_LINE_BREAK`,
      `lastNonHiddenNode`,
      `returnType`,
      `collectValues`,
      `success`,
      `writeQueue`,
      `getRuleType`,
      `toNumber`,
      `exports`,
      `assign`,
      `Log`,
      `Reference`,
      `Key`,
      `parenthesized`,
      `class`,
      `buildDuplicateRuleNameError`,
      `tokenType`,
      `CONSUME1`,
      `peekChar`,
      `baseValues`,
      `ValueLiteral`,
      `freeze`,
      `pruned`,
      `{"$type":"Grammar","isDeclared":true,"name":"PacketGrammar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Packet","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"packet"},{"$type":"Keyword","value":"packet-beta"}]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]},{"$type":"Assignment","feature":"blocks","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}],"cardinality":"*"}]},"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"PacketBlock","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"start","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"end","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}],"cardinality":"?"}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"+"},{"$type":"Assignment","feature":"bits","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]}]},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}],"cardinality":"+"},"entry":false,"parameters":[]},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@8"},"parenthesized":false},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@9"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/","parenthesized":false},"fragment":false}],"interfaces":[],"types":[]}`,
      `iterator`,
      `keyIndex`,
      `getNameNode`,
      `__createBinding`,
      `port`,
      `> argument is invalid expecting a Parser method reference but got: <`,
      `Unit`,
      `ProfilingTask`,
      `contentTypeDecoders`,
      `nextTerminalOccurrence`,
      `Lexer`,
      `node`,
      `previous`,
      `baseUnary`,
      `isParameterReference`,
      `DocumentLinkResolveRequest`,
      `normalizeOption`,
      `getName`,
      `importLexerState`,
      `toLowerCase`,
      `serializeGrammar`,
      `isArrayOperator`,
      `group`,
      `MAX_VALUE`,
      `accept`,
      `dynamicTokensEnabled`,
      `clientToServer`,
      `Module`,
      `UniquenessLevel`,
      `SourceOrganizeImports`,
      `lineTerminatorsPattern`,
      `NextTerminalAfterManySepWalker`,
      `description`,
      `InlineCompletionRequest`,
      "Expecting end of file but found `",
      `computeLookaheadFunc`,
      `normalizeOptions`,
      `recoveryEnabled`,
      `ignoreAmbiguities`,
      `MessageWriter`,
      `baseMatches`,
      `idx`,
      `startTime`,
      `InlineValueRefreshRequest`,
      `isBackTrackingStack`,
      `reference`,
      `cstNodes`,
      `isInsertedInRecovery`,
      `state`,
      `__wrapped__`,
      `This Object indicates the Parser is during Recording Phase`,
      `.mmd`,
      `updateTokenEndLineColumnLocation`,
      `../`,
      `rule`,
      `addRecord`,
      `Lookahead`,
      `[object Undefined]`,
      `Semaphore`,
      `DidCreateFilesNotification`,
      `defaultMode`,
      `. Current indentation stack: `,
      `getText`,
      `textDocument/hover`,
      `indexOf`,
      `elementStack`,
      `lhsId`,
      `LogTraceNotification`,
      `documentBuilder`,
      `_resolve`,
      `max`,
      `resolve`,
      `pickBy`,
      `textDocument/signatureHelp`,
      `_items`,
      `ValueConverter`,
      `convertString`,
      `DEDENT`,
      `quantifier`,
      `decorator`,
      `TelemetryEventNotification`,
      `AT_LEAST_ONE9`,
      `enqueue`,
      `wardley`,
      `WatchKind`,
      `buildState`,
      `space`,
      `Last`,
      `setInitialNodeLocationOnlyOffsetRecovery`,
      `dedentTokenType`,
      `integerIncludingZero`,
      `listen`,
      `Compact`,
      `throwIfListening`,
      `symbol`,
      `createMessageConnection`,
      `positionAt`,
      `addOptimizedIdxToResult`,
      `update`,
      `convertDate`,
      `updateReferences`,
      `TRACE_INIT`,
      `shared`,
      `constructInfix`,
      `ConfigurationRequest`,
      `flatMap`,
      `assignWithoutOverride`,
      `fragment`,
      `MessageReader`,
      `previousToken`,
      `buildUnableToPopLexerModeMessage`,
      `ProtocolNotificationType`,
      `BrowserMessageWriter`,
      `character`,
      `handler`,
      `NonTerminal`,
      `alt`,
      `targetOccurrence`,
      `IndexedContent`,
      `import`,
      `clear`,
      `writeErrorHandler`,
      `delete`,
      `getCandidates`,
      `removeNode`,
      `DEF`,
      `Message`,
      `accelerators`,
      `isCompositeCstNode`,
      `negX`,
      `bigint`,
      `[object Int32Array]`,
      `NotebookDocument`,
      `NotebookCell`,
      `hasOwnProperty`,
      `isLinkingError`,
      `variableName`,
      `ErrorCodes`,
      `[object Float64Array]`,
      `assertCondition`,
      `dirname`,
      `linkLabel`,
      ` defines `,
      `byPosition`,
      `createScope`,
      `split`,
      `del`,
      `EOF`,
      `buildKeyword`,
      `all`,
      `cmd`,
      `mapCacheDelete`,
      `applicationJson`,
      `_astNode`,
      `documentationLinkRenderer`,
      `First`,
      `Token "`,
      `compact`,
      `drop`,
      `isAbsolute`,
      `workspaceManager`,
      `deferred`,
      `characterClass`,
      `Buffer`,
      `hydrate`,
      `updateLastIndex`,
      ` parameters for 'by Name' notification parameter structure.`,
      `SUBRULE`,
      `pie`,
      `toArray`,
      `isArrayLike`,
      `[object Array]`,
      `ParameterStructures`,
      `entry`,
      `validationChecks`,
      `rootNode`,
      `Received `,
      `inlines`,
      `image`,
      ` > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`,
      `baseIteratee`,
      `reduceRight`,
      `startColumn`,
      `keys`,
      `JSON`,
      `orInternal`,
      `children`,
      `handleError`,
      `mapCacheSet`,
      `buildCrossReference`,
      `[object Set]`,
      `event`,
      `lastIndexOf`,
      `ext`,
      `readFile`,
      `lexing-warning`,
      `first`,
      `Could not resolve URI: `,
      `decode`,
      `[object GeneratorFunction]`,
      `Disjunction`,
      `getHumanReadableRuleStack`,
      `ms and ended at `,
      `topProd`,
      `Complement Sets are not supported for first char optimization`,
      `LINE_BREAKS`,
      `uri`,
      `LangiumParser`,
      `wrap`,
      `DefaultLinker`,
      `listCacheClear`,
      `AbstractMessageReader`,
      `annotations`,
      `tags`,
      `\\s*`,
      `objectToString`,
      `sort`,
      `RequestType`,
      `referenceIndex`,
      `write`,
      `matchWithExec`,
      `visitRepetitionMandatoryWithSeparator`,
      `built-in`,
      `className`,
      `stateNumber`,
      `lhsGroup`,
      `Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`,
      `targetSelectionRange`,
      `OPTION3`,
      `SEPARATOR`,
      `DocumentHighlightRequest`,
      `hidden`,
      `GROUP`,
      `unexpected character: ->`,
      `baseCstVisitorWithDefaultsConstructor`,
      `lock`,
      `languageId`,
      `transitions`,
      `InternalError`,
      `Response handler '`,
      `TypeParameter`,
      `Off`,
      `ProtocolNotificationType0`,
      `linkContentToContainer`,
      `reset`,
      `astNode`,
      `: <`,
      `manySepFirstInternal`,
      `Write`,
      `NotAllInputParsedException`,
      `size`,
      `_textEditChanges`,
      `usesLookAheadOrBehind`,
      `grammarSource`,
      `isKeyable`,
      `AbstractProduction`,
      `both`,
      `isMulti`,
      `byteOffset`,
      `nextPossibleTokensAfter`,
      `TOO_MANY_ALTS`,
      `findNodesForPropertyInternal`,
      `getFollowSetFromFollowKey`,
      `currIdx`,
      `EmFrame`,
      `_contexts`,
      `TypeDefinitionRequest`,
      `_head`,
      `walkProdRef`,
      `replyError`,
      `walk`,
      `has`,
      `isAtom`,
      `object`,
      `SUBRULE2`,
      `catch`,
      `workspace/applyEdit`,
      `convertBigint`,
      `visitLookbehind`,
      `getGAstProductions`,
      `position`,
      `RadarGrammarGrammar`,
      `The service registry contains no services for the extension '`,
      `types`,
      `memory:/`,
      `hasTextDocument`,
      `feature`,
      `modes`,
      `DidChangeWorkspaceFoldersNotification`,
      `loc`,
      `OR6`,
      `TokenBuilder`,
      `convertBoolean`,
      `fsPath`,
      `getRootFolder`,
      `LexingError`,
      `documentation`,
      `Cache`,
      `symbolIndex`,
      `validating`,
      `RULE_OCCURRENCE_STACK`,
      `WardleyValueConverter`,
      `partialMessageEmitter`,
      `Service`,
      `name`,
      `checkIsTarget`,
      `CallbackList`,
      `isAtEndOfPath`,
      `buildTokens`,
      `toString`,
      `toKey`,
      `Property`,
      `safeMode`,
      `changes`,
      `cleanup`,
      `%20`,
      `--> <`,
      `before`,
      `LinkedEditingRangeRequest`,
      `textEdits`,
      `RequestType0`,
      `substr`,
      `setNodeLocationFromToken`,
      `createOffsetOnlyToken`,
      `terminalType`,
      `baseIsMatch`,
      `head`,
      `stringify`,
      `Internal Error - Should never get here!`,
      `Warning`,
      `Sending cancellation messages for id `,
      `fileSystemProvider`,
      `input`,
      `construct`,
      `substring`,
      `default`,
      `serviceRegistry`,
      `charset`,
      `CodeActionRequest`,
      `Flags`,
      `key`,
      `Grammar`,
      `4nyYOMp`,
      `MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY`,
      `Map`,
      `readDirectory`,
      `secondName`,
      `Notification handler '`,
      `canPerformInRuleRecovery`,
      `mainRule`,
      `imports`,
      `base`,
      ` >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues`,
      `settings`,
      `offset`,
      `$type`,
      `StaticRegistrationOptions`,
      `_capacity`,
      `negate`,
      `handleModes`,
      `checksAfter`,
      `production`,
      `REPETITION_WITH_SEPARATOR`,
      `sourceUri`,
      `guardCondition`,
      `ERR_MSG`,
      `Validated`,
      `lastIndex`,
      `defaultValue`,
      `ExecutionSummary`,
      `cells`,
      `(?!`,
      `indent`,
      `Changed`,
      `baseGet`,
      `getMapData`,
      `toDiagnostic`,
      `Cancelled`,
      `boolean`,
      `textDocument/selectionRange`,
      `nulCharacterAtom`,
      `activeCategories`,
      `$refText`,
      `predicate`,
      `Info`,
      `strictIndexOf`,
      `canTokenTypeBeInsertedInRecovery`,
      `build`,
      `isIterable`,
      `tokVectorLength`,
      `OPTION`,
      `terminal`,
      `content`,
      `pcr`,
      `fireClose`,
      `This node has no associated AST element`,
      `getTypeMetaData`,
      `RequestType7`,
      `onClose`,
      `dataEntities`,
      `hasIn`,
      `partialMessageTimer`,
      `Unable to use "first char" lexer optimizations:
`,
      `References`,
      `DefaultDocumentBuilder`,
      `mapCacheClear`,
      `targetCharCodes`,
      `exit`,
      `styleText`,
      `descriptions`,
      `documentUri`,
      `getCurrRuleFullName`,
      `RefactorRewrite`,
      `isRegexToken`,
      `initializeWorkspace`,
      `recordingProdStack`,
      `RULE_STACK`,
      `runCustomConverter`,
      `isString`,
      `$containerIndex`,
      `_ref`,
      `_content`,
      `isBranch`,
      `binding`,
      `some`,
      `localSymbols`,
      `5561082yRonHh`,
      `isObject`,
      `exec`,
      `includes`,
      `tokenize`,
      `Text`,
      `visitChildren`,
      `initRecognizerEngine`,
      `Rule`,
      `EndAnchor`,
      `findEndOfInputAnchor`,
      `startLine`,
      `AT_LEAST_ONE`,
      `column`,
      `uniqueAlt`,
      `setNodeLocationOnlyOffset`,
      `raiseNoAltException`,
      `records`,
      `typeRef`,
      `issue`,
      `socket`,
      `GATE`,
      `Task "`,
      `isAssertion`,
      `getInteriorNodes`,
      `AT_LEAST_ONE_SEP1`,
      `shouldInRepetitionRecoveryBeTried`,
      `referencedRule`,
      `separatorLookAheadFunc`,
      `getTag`,
      `isIncremental`,
      `lastElementStack`,
      `createProtocolConnection`,
      `onProgress`,
      `workspace/didCreateFiles`,
      `params`,
      `consumeInternalError`,
      `_state`,
      `MANY1`,
      `parser`,
      `replace`,
      `accTitle`,
      `workspace`,
      `partialCstResult`,
      `[object Null]`,
      `item`,
      `Type`,
      `fire`,
      `invoke`,
      `stream`,
      `requiresCustomPattern`,
      `collIndex`,
      `errorCount`,
      `nextProductionName`,
      `IDENTIFY_TERMINATOR`,
      `ProgressToken`,
      `Disposed`,
      `tokens`,
      `lexerResult`,
      `optionInternalLogic`,
      `_limit`,
      `resetLexerState`,
      `NotebookCellKind`,
      `getAllElements`,
      `append`,
      `MANY_SEP8`,
      `full`,
      `profiler`,
      `TraceValues`,
      `-----------------------
`,
      `splice`,
      `caseInsensitive`,
      `workerPool`,
      `addTokenUsingPush`,
      `A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`,
      `tokensMap`,
      `buildMismatchTokenMessage`,
      `overArg`,
      `DocumentSelector`,
      `LABEL`,
      `ParameterReference`,
      `prototype`,
      `endLine`,
      `nextId`,
      `_messageListener`,
      `Errors detected in definition of Lexer:
`,
      `getPathSegment`,
      `ConnectionError`,
      `definition`,
      `AbstractMessageWriter`,
      `atLeastOneSepFirstInternal`,
      `RequestType9`,
      `initialized`,
      `baseIsEqualDeep`,
      `integer`,
      `inject`,
      `statements`,
      `sourcePath`,
      `nodeBuilder`,
      `source.organizeImports`,
      `This cst node was not parsed by a rule.`,
      `> inside <`,
      `decoder`,
      `ServiceRegistry`,
      `validate`,
      `add`,
      `Verbose`,
      `ResponseError`,
      `byteLength`,
      `AlreadyListening`,
      `allProductions`,
      `closeEmitter`,
      `Character`,
      `subruleIdx`,
      `lineTerminatorCharacters`,
      `MAX_LOOKAHEAD`,
      `configs`,
      `isKeyword`,
      `ruleStack`,
      `{"$type":"Grammar","isDeclared":true,"name":"InfoGrammar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Info","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"info"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"},{"$type":"Group","elements":[{"$type":"Keyword","value":"showInfo"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"?"}]},"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"+"},"entry":false,"parameters":[]},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@7"},"parenthesized":false},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@8"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/","parenthesized":false},"fragment":false}],"interfaces":[],"types":[]}`,
      `cstFinallyStateUpdate`,
      `getRuleStack`,
      `buildAlternativesLookAheadFunc`,
      `getServices`,
      `toUpperCase`,
      `RequestType8`,
      `dslMethods`,
      `RULE`,
      `The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`,
      `normalize`,
      `visitAlternation`,
      `handlePayloadWithCustom`,
      `lines`,
      `byName`,
      `<CONSUME`,
      `Size`,
      `Lookbehind`,
      `inspect`,
      `workspace/willCreateFiles`,
      `valueOf`,
      `CompletionTriggerKind`,
      `>which does not exist
`,
      `followState`,
      `configurable`,
      `configuration`,
      `REPETITION_MANDATORY`,
      `traceInitMaxIdent`,
      `getSource`,
      `Terminals`,
      `stack`,
      `toMarkdownDefault`,
      `enumerable`,
      `119832cpnJjF`,
      `trackEndLines`,
      `processLinkingErrors`,
      `dataType`,
      `result`,
      `UNREACHABLE_PATTERN`,
      `wrapper`,
      `startOffset`,
      `
but found: '`,
      `CancellationSenderStrategy`,
      `cstPostRule`,
      `findIndex`,
      `> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`,
      `format`,
      `tokenizeInternal`,
      `START_CHARS_HINT`,
      `alternative`,
      `195391UZDqvr`,
      `NotificationType3`,
      `buffer`,
      `$containerProperty`,
      `CATEGORIES`,
      `$/progress`,
      `grammar`,
      `rmo`,
      `handlePayload`,
      `EMPTY_ALT`,
      `then`,
      `shortRuleNameToFull`,
      `In a Browser environments only utf-8 text encoding is supported. But got encoding: `,
      `In a Browser environments only Uint8Arrays are supported.`,
      `_tail`,
      `tryReadBody`,
      `getOwnPropertyDescriptor`,
      `Could not find document for URI: `,
      `connectionStrategy`,
      `asciiDecoder`,
      `ShowMessageRequest`,
      `DefinitionRequest`,
      `regexp`,
      `createDescriptions`,
      `documentTrie`,
      `validateSources`,
      `DefaultDocumentValidator`,
      `No result from parser`,
      `call`,
      `getLexerPosition`,
      `InlineValueRequest`,
      `endRegex`,
      `callee`,
      `toFixed`,
      `getLastExplicitRuleShortName`,
      `floor`,
      `SemanticTokensRangeRequest`,
      `Emitter`,
      `SemanticTokensRegistrationType`,
      `uniqBy`,
      `Parsing failed: `,
      `kind`,
      `isRuleCall`,
      `validation`,
      `patternIdxToConfig`,
      `PUSH_MODE_DOES_NOT_EXIST`,
      `isEmpty`,
      `allCategories`,
      `[object Number]`,
      `_parameterStructures`,
      `validateEmptyOrAlternatives`,
      `ReturnType`,
      `_chunks`,
      `Namespace`,
      `atn`,
      `isFull`,
      `notebookDocument/didChange`,
      `product`,
      `linking`,
      `Repetition`,
      `isInfo`,
      `metadata`,
      `getTime`,
      `order`,
      `subruleInternal`,
      `EOI_ANCHOR_FOUND`,
      `[object Arguments]`,
      `begin`,
      `getKeyForAutomaticLookahead`,
      `RefResolving`,
      `equals`,
      `invokeRuleWithTryCst`,
      `func`,
      `createTokenInstance`,
      `serverToClient`,
      `Value`,
      `buildKeywordTokens`,
      `$cstNode`,
      `ensureOptimizations`,
      `delayNextTick`,
      `code`,
      `buffers`,
      `apply`,
      `title`,
      `Parameter`,
      `loopback`,
      `charCodeToPatternIdxToConfig`,
      `now`,
      `performSelfAnalysis`,
      `wrapOr`,
      `duration`,
      `charCodeAt`,
      `consumeChar`,
      `RepetitionMandatoryWithSeparator`,
      `AbstractTransition`,
      `isActive`,
      `right`,
      `LinkedMap got modified during iteration.`,
      `callback`,
      ` at `,
      `DefaultIndexManager`,
      `flatten`,
      `workspace/codeLens/refresh`,
      `maxLookahead`,
      `tokenTypeIdx`,
      `atLeastOneInternal`,
      `textDocument/prepareCallHierarchy`,
      `11YnUqIs`,
      `gastProductionsCache`,
      `baseReduce`,
      `install`,
      `AbstractNextPossibleTokensWalker`,
      `DidOpenNotebookDocumentNotification`,
      `buildCompositeNode`,
      `application/json`,
      `match`,
      `reduce`,
      `Invalid list`,
      `_token`,
      `queue`,
      `WillDeleteFilesRequest`,
      `binarySearch`,
      `addItemLast`,
      `fileNameMap`,
      `true`,
      `prune`,
      `addDocument`,
      `parseResult`,
      `$container`,
      `Delete`,
      `push`,
      `2.0`,
      `ruleNames`,
      `isLeafCstNode`,
      `enumMember`,
      `indexSeparator`,
      `cancel`,
      `_ratio`,
      `handlePayloadNoCustom`,
      `identifier`,
      `" was not started.`,
      `folder`,
      `containerName`,
      `setInitialNodeLocationFullRegular`,
      `setNodeLocationFromNode`,
      `convert`,
      `trim`,
      "The service registry is empty. Use `register` to register the services of a language.",
      `addEntry`,
      `SAVE_ERROR`,
      `classSelector`,
      `concatOuterScope`,
      `fast`,
      `ChangeAnnotations`,
      `toDispose`,
      `DidDeleteFilesNotification`,
      `RepetitionWithSeparator`,
      `lexerDefinitionErrors`,
      `_encoding`,
      `warning`,
      `SimpleCache`,
      `equalObjects`,
      `multiline`,
      `setParent`,
      `_tokenType`,
      `<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->`,
      `textDocuments`,
      `values`,
      `lexing-hint`,
      `getElements`,
      `104sDCbqf`,
      `Deleting Recording methods`,
      `validateVisitor`,
      `offsetAt`,
      `removeContent`,
      `uinteger`,
      `Task `,
      `WillSaveTextDocumentWaitUntilRequest`,
      `popChar`,
      `baseHasIn`,
      `NO_LINE_BREAKS_FLAGS`,
      `textDocument/willSaveWaitUntil`,
      `toFastProperties`,
      `isParent`,
      `doLink`,
      `DefaultWorkspaceLock`,
      `isChildNode`,
      `alternations`,
      `textDocument/semanticTokens/full/delta`,
      `restoreState`,
      `WriteableStreamMessageWriter`,
      `Expected a function`,
      `CompositeCstNodeImpl`,
      `links`,
      `runNext`,
      `numberRange`,
      `initialize`,
      `[object Uint8ClampedArray]`,
      `_text`,
      `alternatives`,
      `resolveGrammar`,
      `UTF16`,
      `DidSaveTextDocumentNotification`,
      `NegativeLookahead`,
      `[object Function]`,
      `_active`,
      `RequestType5`,
      `entityIdentifier`,
      `[object ArrayBuffer]`,
      `nextFn`,
      `consume`,
      `_lineOffsets`,
      `line`,
      `Radar`,
      `contains`,
      `getLaFuncFromCache`,
      `IndentationAwareLexer requires an accompanying IndentationAwareTokenBuilder`,
      `_onData`,
      `Parsed`,
      `workDoneProgress`,
      `fileExtensionMap`,
      `isMasked`,
      `longerAlt`,
      `getLineOffsets`,
      `isUri`,
      `parent`,
      `treeView`,
      `visitRepetition`,
      `definitionErrors`,
      `macro`,
      `getStartlineNode`,
      `getLineNumber`,
      `(?:)`,
      `deleteDocuments`,
      `UnorderedGroup`,
      `buildKeywordPattern`,
      `isUnionType`,
      `isRecording`,
      `test`,
      `findInvalidPatterns`,
      `onCancellationRequested`,
      `baseRest`,
      `POP_MODE`,
      `Could not resolve reference to type: `,
      ` params but received none.`,
      `removeEventListener`,
      `findNameAssignmentInternal`,
      `LA_RECORD`,
      `ignoreIfExists`,
      `dehydrateReference`,
      `The 'built-in' category is reserved for lexer, parser, and linker errors.`,
      `treemap`,
      `captureStackTrace`,
      `visibility`,
      `lookahead`,
      `knownCategories`,
      `recoveredNode`,
      `edges`,
      `removeState`,
      `elements`,
      `config`,
      `AT_LEAST_ONE_SEP3`,
      `saveRecogState`,
      `[object WeakMap]`,
      `fromCharCode`,
      `isOptionalCardinality`,
      `textDocument/foldingRange`,
      `EmNoteEntity`,
      `setToArray`,
      `PieGrammarGrammar`,
      `charAt`,
      `resetToState`,
      `baseFilter`,
      `lookaheadStrategy`,
      `buildGroup`,
      `cwd`,
      `(?:`,
      `pop`,
      `performNextOperation`,
      `DidSaveNotebookDocumentNotification`,
      `onReadyEmitter`,
      `_annotations`,
      `ProtocolRequestType`,
      `> argument is invalid expecting a TokenType reference but got: <`,
      `AT_LEAST_ONE2`,
      `Result: `,
      `LogMessageNotification`,
      `findAllReferences`,
      `checkSourceFrameTypes`,
      `errors`,
      `Invalid production type encountered`,
      `cardinality`,
      `timerStart`,
      `MismatchedTokenException`,
      `getWellformedRange`,
      `addEventListener`,
      `copyObject`,
      `Invalid `,
      `reflection`,
      `orgText`,
      `getLookaheadPathsForOr`,
      `, column `,
      `StreamScope`,
      `No file system is available.`,
      `LRUCache`,
      `parse`,
      `DUPLICATE_PATTERNS_FOUND`,
      `loadAstNode`,
      `inferredType`,
      `isUnorderedGroup`,
      `RequestType3`,
      `)'.`,
      `flat`,
      `ALTERNATION`,
      `buildLookaheadForAlternation`,
      `Error data: `,
      `action`,
      `processMessageQueue`,
      `stopAfterParsingErrors`,
      `refactor.extract`,
      `getLinkedNode`,
      `outerScope`,
      `terminateWorker`,
      `$document`,
      `documentationTagRenderer`,
      `topLevelRule`,
      `LangiumDocuments`,
      `label`,
      `tag`,
      `[object Float32Array]`,
      `executionSummary`,
      `nonNullable`,
      `visitNegativeLookbehind`,
      `value`,
      `WorkDoneProgressCreateRequest`,
      `operator`
    ];
    return Ts = function() {
      return e2;
    }, Ts();
  }
  function Es(e2, t2) {
    if (Wi(e2)) return e2;
    if (Ui(e2)) {
      let n2 = Os(e2, t2, false);
      if (n2) return Es(n2, t2);
    }
  }
  M(Es, `findLeafNodeAtOffset`);
  function Ds(e2, t2) {
    if (Wi(e2)) return e2;
    if (Ui(e2)) {
      let n2 = Os(e2, t2, true);
      if (n2) return Ds(n2, t2);
    }
  }
  M(Ds, `findLeafNodeBeforeOffset`);
  function Os(e2, t2, n2) {
    let r2 = s, i2 = 0, a2 = e2[r2(835)].length - 1, o2;
    for (; i2 <= a2; ) {
      let s2 = Math[r2(1073)]((i2 + a2) / 2), c2 = e2.content[s2];
      if (c2[r2(797)] <= t2 && c2.end > t2) return c2;
      c2.end <= t2 ? (o2 = n2 ? c2 : void 0, i2 = s2 + 1) : a2 = s2 - 1;
    }
    return o2;
  }
  M(Os, s(1159));
  function ks(e2, t2 = true) {
    let n2 = s;
    for (; e2[n2(1673)]; ) {
      let r2 = e2.container, i2 = r2[n2(835)][n2(507)](e2);
      for (; i2 > 0; ) {
        i2--;
        let e3 = r2.content[i2];
        if (t2 || !e3.hidden) return e3;
      }
      e2 = r2;
    }
  }
  M(ks, `getPreviousNode`);
  function As(e2, t2 = true) {
    let n2 = s;
    for (; e2.container; ) {
      let r2 = e2.container, i2 = r2.content.indexOf(e2), a2 = r2.content.length - 1;
      for (; i2 < a2; ) {
        i2++;
        let e3 = r2.content[i2];
        if (t2 || !e3[n2(674)]) return e3;
      }
      e2 = r2;
    }
  }
  M(As, `getNextNode`);
  function js(e2) {
    let t2 = s;
    if (e2[t2(287)].start.character === 0) return e2;
    let n2 = e2.range[t2(1433)].line, r2 = e2, i2;
    for (; e2.container; ) {
      let a2 = e2.container, o2 = i2 ?? a2.content[t2(507)](e2);
      if (o2 === 0 ? (e2 = a2, i2 = void 0) : (i2 = o2 - 1, e2 = a2[t2(835)][i2]), e2.range[t2(1433)][t2(1250)] !== n2) break;
      r2 = e2;
    }
    return r2;
  }
  M(js, s(1268));
  function Ms(e2, t2) {
    let n2 = s, r2 = Ns(e2, t2);
    return r2 ? r2.parent[n2(835)][n2(1656)](r2.a + 1, r2.b) : [];
  }
  M(Ms, s(893));
  function Ns(e2, t2) {
    let n2 = s, r2 = Ps(e2), i2 = Ps(t2), a2;
    for (let e3 = 0; e3 < r2.length && e3 < i2.length; e3++) {
      let t3 = r2[e3], o2 = i2[e3];
      if (t3.parent === o2.parent) a2 = {
        parent: t3[n2(1263)],
        a: t3.index,
        b: o2.index
      };
      else break;
    }
    return a2;
  }
  M(Ns, `getCommonParent`);
  function Ps(e2) {
    let t2 = [];
    for (; e2.container; ) {
      let n2 = e2.container, r2 = n2.content.indexOf(e2);
      t2.push({
        parent: n2,
        index: r2
      }), e2 = n2;
    }
    return t2.reverse();
  }
  M(Ps, `getParentChain`);
  var Fs = {};
  dn(Fs, {
    findAssignment: () => Sc,
    findNameAssignment: () => Cc,
    findNodeForKeyword: () => bc,
    findNodeForProperty: () => _c,
    findNodesForKeyword: () => yc,
    findNodesForKeywordInternal: () => xc,
    findNodesForProperty: () => gc,
    getActionAtElement: () => Tc,
    getActionType: () => Fc,
    getAllReachableRules: () => dc,
    getAllRulesUsedForCrossReferences: () => pc,
    getCrossReferenceTerminal: () => mc,
    getEntryRule: () => lc,
    getExplicitRuleType: () => Nc,
    getHiddenRules: () => uc,
    getRuleType: () => Lc,
    getRuleTypeName: () => Ic,
    getTypeName: () => Pc,
    isArrayCardinality: () => Dc,
    isArrayOperator: () => Oc,
    isCommentTerminal: () => hc,
    isDataType: () => jc,
    isDataTypeRule: () => kc,
    isOptionalCardinality: () => Ec,
    terminalRegex: () => Rc
  });
  var Is = (f = class extends Error {
    constructor(e2, t2) {
      let n2 = s;
      super(e2 ? t2 + n2(1137) + e2.range.start[n2(1250)] + `:` + e2.range.start.character : t2);
    }
  }, M(f, `ErrorWithLocation`), f);
  function Ls(e2, t2 = `Error: Got unexpected value.`) {
    throw Error(t2);
  }
  M(Ls, `assertUnreachable`);
  function Rs(e2, t2 = `Error: Condition is violated.`) {
    if (!e2) throw Error(t2);
  }
  M(Rs, s(582));
  var zs = {};
  dn(zs, {
    NEWLINE_REGEXP: () => $s,
    escapeRegExp: () => oc,
    getTerminalParts: () => nc,
    isMultilineComment: () => rc,
    isWhitespace: () => ac,
    partialMatches: () => sc,
    partialRegExp: () => cc,
    whitespaceCharacters: () => ic
  });
  function B(e2) {
    return e2.charCodeAt(0);
  }
  M(B, `cc`);
  function Bs(e2, t2) {
    Array.isArray(e2) ? e2.forEach(function(e3) {
      t2[X(1168)](e3);
    }) : t2.push(e2);
  }
  M(Bs, `insertToSet`);
  function Vs(e2, t2) {
    if (e2[t2] === true) throw `duplicate flag ` + t2;
    e2[t2], e2[t2] = true;
  }
  M(Vs, `addFlag`);
  function Hs(e2) {
    if (e2 === void 0) throw Error(`Internal Error - Should never get here!`);
    return true;
  }
  M(Hs, `ASSERT_EXISTS`);
  function Us() {
    throw Error(s(771));
  }
  M(Us, `ASSERT_NEVER_REACH_HERE`);
  function Ws(e2) {
    return e2.type === `Character`;
  }
  M(Ws, `isCharacter`);
  var Gs = [];
  for (let e2 = B(`0`); e2 <= B(`9`); e2++) Gs[s(1168)](e2);
  var Ks = [
    B(`_`)
  ].concat(Gs);
  for (let e2 = B(`a`); e2 <= B(`z`); e2++) Ks.push(e2);
  for (let e2 = B(`A`); e2 <= B(`Z`); e2++) Ks.push(e2);
  var qs = [
    B(` `),
    B(`\f`),
    B(`
`),
    B(`\r`),
    B(`	`),
    B(`\v`),
    B(`	`),
    B(`\xA0`),
    B(`\u1680`),
    B(`\u2000`),
    B(`\u2001`),
    B(`\u2002`),
    B(`\u2003`),
    B(`\u2004`),
    B(`\u2005`),
    B(`\u2006`),
    B(`\u2007`),
    B(`\u2008`),
    B(`\u2009`),
    B(`\u200A`),
    B(`\u2028`),
    B(`\u2029`),
    B(`\u202F`),
    B(`\u205F`),
    B(`\u3000`),
    B(`\uFEFF`)
  ], Js = /[0-9a-fA-F]/, Ys = /[0-9]/, Xs = /[1-9]/, Zs = (p = class {
    constructor() {
      let e2 = s;
      this.idx = 0, this[e2(775)] = ``, this.groupIdx = 0;
    }
    [s(1404)]() {
      return {
        idx: this.idx,
        input: this.input,
        groupIdx: this.groupIdx
      };
    }
    [s(1227)](e2) {
      this.idx = e2.idx, this.input = e2.input, this.groupIdx = e2.groupIdx;
    }
    pattern(e2) {
      let t2 = s;
      this.idx = 0, this.input = e2, this.groupIdx = 0, this.consumeChar(`/`);
      let n2 = this.disjunction();
      this.consumeChar(`/`);
      let r2 = {
        type: `Flags`,
        loc: {
          begin: this.idx,
          end: e2.length
        },
        global: false,
        ignoreCase: false,
        multiLine: false,
        unicode: false,
        sticky: false
      };
      for (; this.isRegExpFlag(); ) switch (this.popChar()) {
        case `g`:
          Vs(r2, `global`);
          break;
        case `i`:
          Vs(r2, `ignoreCase`);
          break;
        case `m`:
          Vs(r2, `multiLine`);
          break;
        case `u`:
          Vs(r2, `unicode`);
          break;
        case `y`:
          Vs(r2, t2(1790));
          break;
      }
      if (this.idx !== this.input.length) throw Error(`Redundant input: ` + this[t2(775)].substring(this.idx));
      return {
        type: `Pattern`,
        flags: r2,
        value: n2,
        loc: this.loc(0)
      };
    }
    disjunction() {
      let e2 = s, t2 = [], n2 = this.idx;
      for (t2.push(this.alternative()); this.peekChar() === `|`; ) this.consumeChar(`|`), t2[e2(1168)](this.alternative());
      return {
        type: `Disjunction`,
        value: t2,
        loc: this.loc(n2)
      };
    }
    [s(1037)]() {
      let e2 = s, t2 = [], n2 = this.idx;
      for (; this[e2(274)](); ) t2.push(this.term());
      return {
        type: `Alternative`,
        value: t2,
        loc: this[e2(732)](n2)
      };
    }
    term() {
      return this.isAssertion() ? this.assertion() : this.atom();
    }
    [s(285)]() {
      let e2 = s, t2 = this.idx;
      switch (this.popChar()) {
        case `^`:
          return {
            type: `StartAnchor`,
            loc: this.loc(t2)
          };
        case `$`:
          return {
            type: e2(878),
            loc: this[e2(732)](t2)
          };
        case `\\`:
          switch (this[e2(1216)]()) {
            case `b`:
              return {
                type: `WordBoundary`,
                loc: this.loc(t2)
              };
            case `B`:
              return {
                type: `NonWordBoundary`,
                loc: this.loc(t2)
              };
          }
          throw Error(`Invalid Assertion Escape`);
        case `(`:
          this.consumeChar(`?`);
          let n2;
          switch (this.popChar()) {
            case `=`:
              n2 = e2(499);
              break;
            case `!`:
              n2 = e2(1241);
              break;
            case `<`:
              switch (this.popChar()) {
                case `=`:
                  n2 = e2(1005);
                  break;
                case `!`:
                  n2 = `NegativeLookbehind`;
              }
              break;
          }
          Hs(n2);
          let r2 = this.disjunction();
          return this.consumeChar(`)`), {
            type: n2,
            value: r2,
            loc: this.loc(t2)
          };
      }
      return Us();
    }
    quantifier(e2 = false) {
      let t2 = s, n2, r2 = this.idx;
      switch (this.popChar()) {
        case `*`:
          n2 = {
            atLeast: 0,
            atMost: 1 / 0
          };
          break;
        case `+`:
          n2 = {
            atLeast: 1,
            atMost: 1 / 0
          };
          break;
        case `?`:
          n2 = {
            atLeast: 0,
            atMost: 1
          };
          break;
        case `{`:
          let r3 = this.integerIncludingZero();
          switch (this[t2(1216)]()) {
            case `}`:
              n2 = {
                atLeast: r3,
                atMost: r3
              };
              break;
            case `,`:
              let e3;
              this.isDigit() ? (e3 = this.integerIncludingZero(), n2 = {
                atLeast: r3,
                atMost: e3
              }) : n2 = {
                atLeast: r3,
                atMost: 1 / 0
              }, this.consumeChar(`}`);
              break;
          }
          if (e2 === true && n2 === void 0) return;
          Hs(n2);
          break;
      }
      if (!(e2 === true && n2 === void 0) && Hs(n2)) return this.peekChar(0) === `?` ? (this.consumeChar(`?`), n2.greedy = false) : n2.greedy = true, n2[t2(1487)] = `Quantifier`, n2[t2(732)] = this.loc(r2), n2;
    }
    [s(325)]() {
      let e2 = s, t2, n2 = this.idx;
      switch (this.peekChar()) {
        case `.`:
          t2 = this.dotAll();
          break;
        case `\\`:
          t2 = this.atomEscape();
          break;
        case `[`:
          t2 = this.characterClass();
          break;
        case `(`:
          t2 = this[e2(465)]();
          break;
      }
      return t2 === void 0 && this.isPatternCharacter() && (t2 = this.patternCharacter()), Hs(t2) ? (t2.loc = this.loc(n2), this.isQuantifier() && (t2[e2(521)] = this.quantifier()), t2) : Us();
    }
    [s(1522)]() {
      return this.consumeChar(`.`), {
        type: `Set`,
        complement: true,
        value: [
          B(`
`),
          B(`\r`),
          B(`\u2028`),
          B(`\u2029`)
        ]
      };
    }
    atomEscape() {
      let e2 = s;
      switch (this.consumeChar(`\\`), this.peekChar()) {
        case `1`:
        case `2`:
        case `3`:
        case `4`:
        case `5`:
        case `6`:
        case `7`:
        case `8`:
        case `9`:
          return this.decimalEscapeAtom();
        case `d`:
        case `D`:
        case `s`:
        case `S`:
        case `w`:
        case `W`:
          return this[e2(1593)]();
        case `f`:
        case `n`:
        case `r`:
        case `t`:
        case `v`:
          return this.controlEscapeAtom();
        case `c`:
          return this[e2(1578)]();
        case `0`:
          return this.nulCharacterAtom();
        case `x`:
          return this.hexEscapeSequenceAtom();
        case `u`:
          return this.regExpUnicodeEscapeSequenceAtom();
        default:
          return this[e2(1396)]();
      }
    }
    decimalEscapeAtom() {
      return {
        type: `GroupBackReference`,
        value: this.positiveInteger()
      };
    }
    characterClassEscape() {
      let e2 = s, t2, n2 = false;
      switch (this.popChar()) {
        case `d`:
          t2 = Gs;
          break;
        case `D`:
          t2 = Gs, n2 = true;
          break;
        case `s`:
          t2 = qs;
          break;
        case `S`:
          t2 = qs, n2 = true;
          break;
        case `w`:
          t2 = Ks;
          break;
        case `W`:
          t2 = Ks, n2 = true;
          break;
      }
      return Hs(t2) ? {
        type: e2(1713),
        value: t2,
        complement: n2
      } : Us();
    }
    controlEscapeAtom() {
      let e2 = s, t2;
      switch (this.popChar()) {
        case `f`:
          t2 = B(`\f`);
          break;
        case `n`:
          t2 = B(`
`);
          break;
        case `r`:
          t2 = B(`\r`);
          break;
        case `t`:
          t2 = B(`	`);
          break;
        case `v`:
          t2 = B(`\v`);
          break;
      }
      return Hs(t2) ? {
        type: e2(981),
        value: t2
      } : Us();
    }
    controlLetterEscapeAtom() {
      let e2 = s;
      this.consumeChar(`c`);
      let t2 = this[e2(1216)]();
      if (/[a-zA-Z]/[e2(1276)](t2) === false) throw Error(e2(1335));
      return {
        type: `Character`,
        value: t2[e2(993)]().charCodeAt(0) - 64
      };
    }
    nulCharacterAtom() {
      return this.consumeChar(`0`), {
        type: `Character`,
        value: B(`\0`)
      };
    }
    hexEscapeSequenceAtom() {
      let e2 = s;
      return this[e2(1130)](`x`), this[e2(1500)](2);
    }
    regExpUnicodeEscapeSequenceAtom() {
      return this.consumeChar(`u`), this.parseHexDigits(4);
    }
    [s(1396)]() {
      return {
        type: `Character`,
        value: B(this.popChar())
      };
    }
    classPatternCharacterAtom() {
      let e2 = s;
      switch (this.peekChar()) {
        case `
`:
        case `\r`:
        case `\u2028`:
        case `\u2029`:
        case `\\`:
        case `]`:
          throw Error(`TBD`);
        default:
          return {
            type: e2(981),
            value: B(this.popChar())
          };
      }
    }
    [s(605)]() {
      let e2 = s, t2 = [], n2 = false;
      for (this.consumeChar(`[`), this.peekChar(0) === `^` && (this.consumeChar(`^`), n2 = true); this.isClassAtom(); ) {
        let n3 = this.classAtom();
        if (n3.type, Ws(n3) && this.isRangeDash()) {
          this.consumeChar(`-`);
          let r2 = this.classAtom();
          if (r2[e2(1487)], Ws(r2)) {
            if (r2.value < n3.value) throw Error(`Range out of order in character class`);
            t2.push({
              from: n3.value,
              to: r2.value
            });
          } else Bs(n3.value, t2), t2.push(B(`-`)), Bs(r2.value, t2);
        } else Bs(n3.value, t2);
      }
      return this.consumeChar(`]`), {
        type: e2(1713),
        complement: n2,
        value: t2
      };
    }
    classAtom() {
      switch (this.peekChar()) {
        case `]`:
        case `
`:
        case `\r`:
        case `\u2028`:
        case `\u2029`:
          throw Error(`TBD`);
        case `\\`:
          return this.classEscape();
        default:
          return this.classPatternCharacterAtom();
      }
    }
    classEscape() {
      let e2 = s;
      switch (this.consumeChar(`\\`), this.peekChar()) {
        case `b`:
          return this.consumeChar(`b`), {
            type: `Character`,
            value: B(`\b`)
          };
        case `d`:
        case `D`:
        case `s`:
        case `S`:
        case `w`:
        case `W`:
          return this.characterClassEscape();
        case `f`:
        case `n`:
        case `r`:
        case `t`:
        case `v`:
          return this.controlEscapeAtom();
        case `c`:
          return this[e2(1578)]();
        case `0`:
          return this[e2(823)]();
        case `x`:
          return this.hexEscapeSequenceAtom();
        case `u`:
          return this.regExpUnicodeEscapeSequenceAtom();
        default:
          return this.identityEscapeAtom();
      }
    }
    group() {
      let e2 = s, t2 = true;
      switch (this[e2(1130)](`(`), this.peekChar(0)) {
        case `?`:
          this.consumeChar(`?`), this.consumeChar(`:`), t2 = false;
          break;
        default:
          this.groupIdx++;
          break;
      }
      let n2 = this.disjunction();
      this.consumeChar(`)`);
      let r2 = {
        type: `Group`,
        capturing: t2,
        value: n2
      };
      return t2 && (r2.idx = this.groupIdx), r2;
    }
    [s(1779)]() {
      let e2 = s, t2 = this.popChar();
      if (Xs[e2(1276)](t2) === false) throw Error(`Expecting a positive integer`);
      for (; Ys.test(this.peekChar(0)); ) t2 += this[e2(1216)]();
      return parseInt(t2, 10);
    }
    [s(533)]() {
      let e2 = s, t2 = this.popChar();
      if (Ys.test(t2) === false) throw Error(`Expecting an integer`);
      for (; Ys[e2(1276)](this.peekChar(0)); ) t2 += this.popChar();
      return parseInt(t2, 10);
    }
    patternCharacter() {
      let e2 = this.popChar();
      switch (e2) {
        case `
`:
        case `\r`:
        case `\u2028`:
        case `\u2029`:
        case `^`:
        case `$`:
        case `\\`:
        case `.`:
        case `*`:
        case `+`:
        case `?`:
        case `(`:
        case `)`:
        case `[`:
        case `|`:
          throw Error(`TBD`);
        default:
          return {
            type: `Character`,
            value: B(e2)
          };
      }
    }
    isRegExpFlag() {
      switch (this.peekChar(0)) {
        case `g`:
        case `i`:
        case `m`:
        case `u`:
        case `y`:
          return true;
        default:
          return false;
      }
    }
    [s(1693)]() {
      return this.peekChar() === `-` && this.isClassAtom(1);
    }
    isDigit() {
      return Ys.test(this.peekChar(0));
    }
    isClassAtom(e2 = 0) {
      switch (this.peekChar(e2)) {
        case `]`:
        case `
`:
        case `\r`:
        case `\u2028`:
        case `\u2029`:
          return false;
        default:
          return true;
      }
    }
    isTerm() {
      let e2 = s;
      return this[e2(715)]() || this[e2(892)]();
    }
    isAtom() {
      if (this.isPatternCharacter()) return true;
      switch (this.peekChar(0)) {
        case `.`:
        case `\\`:
        case `[`:
        case `(`:
          return true;
        default:
          return false;
      }
    }
    isAssertion() {
      let e2 = s;
      switch (this.peekChar(0)) {
        case `^`:
        case `$`:
          return true;
        case `\\`:
          switch (this.peekChar(1)) {
            case `b`:
            case `B`:
              return true;
            default:
              return false;
          }
        case `(`:
          return this.peekChar(1) === `?` && (this.peekChar(2) === `=` || this.peekChar(2) === `!` || this[e2(437)](2) === `<` && (this.peekChar(3) === `=` || this.peekChar(3) === `!`));
        default:
          return false;
      }
    }
    isQuantifier() {
      let e2 = s, t2 = this.saveState();
      try {
        return this[e2(521)](true) !== void 0;
      } catch {
        return false;
      } finally {
        this.restoreState(t2);
      }
    }
    isPatternCharacter() {
      let e2 = s;
      switch (this[e2(437)]()) {
        case `^`:
        case `$`:
        case `\\`:
        case `.`:
        case `*`:
        case `+`:
        case `?`:
        case `(`:
        case `)`:
        case `[`:
        case `|`:
        case `/`:
        case `
`:
        case `\r`:
        case `\u2028`:
        case `\u2029`:
          return false;
        default:
          return true;
      }
    }
    parseHexDigits(e2) {
      let t2 = ``;
      for (let n2 = 0; n2 < e2; n2++) {
        let e3 = this.popChar();
        if (Js.test(e3) === false) throw Error(`Expecting a HexDecimal digits`);
        t2 += e3;
      }
      return {
        type: `Character`,
        value: parseInt(t2, 16)
      };
    }
    peekChar(e2 = 0) {
      let t2 = s;
      return this.input[this[t2(484)] + e2];
    }
    popChar() {
      let e2 = s, t2 = this[e2(437)](0);
      return this[e2(1130)](void 0), t2;
    }
    consumeChar(e2) {
      let t2 = s;
      if (e2 !== void 0 && this.input[this[t2(484)]] !== e2) throw Error(`Expected: '` + e2 + `' but found: '` + this.input[this.idx] + `' at offset: ` + this[t2(484)]);
      if (this.idx >= this.input.length) throw Error(`Unexpected end of input`);
      this.idx++;
    }
    loc(e2) {
      let t2 = s;
      return {
        begin: e2,
        end: this[t2(484)]
      };
    }
  }, M(p, s(1448)), p), Qs = (m = class {
    visitChildren(e2) {
      let t2 = s;
      for (let n2 in e2) {
        let r2 = e2[n2];
        e2[t2(577)](n2) && (r2.type === void 0 ? Array[t2(1426)](r2) && r2.forEach((e3) => {
          this.visit(e3);
        }, this) : this.visit(r2));
      }
    }
    [s(349)](e2) {
      let t2 = s;
      switch (e2.type) {
        case `Pattern`:
          this.visitPattern(e2);
          break;
        case t2(782):
          this.visitFlags(e2);
          break;
        case `Disjunction`:
          this[t2(341)](e2);
          break;
        case `Alternative`:
          this[t2(375)](e2);
          break;
        case `StartAnchor`:
          this.visitStartAnchor(e2);
          break;
        case `EndAnchor`:
          this[t2(1435)](e2);
          break;
        case `WordBoundary`:
          this.visitWordBoundary(e2);
          break;
        case `NonWordBoundary`:
          this.visitNonWordBoundary(e2);
          break;
        case `Lookahead`:
          this[t2(1572)](e2);
          break;
        case `NegativeLookahead`:
          this.visitNegativeLookahead(e2);
          break;
        case t2(1005):
          this[t2(721)](e2);
          break;
        case `NegativeLookbehind`:
          this.visitNegativeLookbehind(e2);
          break;
        case `Character`:
          this.visitCharacter(e2);
          break;
        case `Set`:
          this.visitSet(e2);
          break;
        case `Group`:
          this.visitGroup(e2);
          break;
        case `GroupBackReference`:
          this.visitGroupBackReference(e2);
          break;
        case `Quantifier`:
          this.visitQuantifier(e2);
          break;
      }
      this[t2(875)](e2);
    }
    visitPattern(e2) {
    }
    visitFlags(e2) {
    }
    visitDisjunction(e2) {
    }
    visitAlternative(e2) {
    }
    visitStartAnchor(e2) {
    }
    visitEndAnchor(e2) {
    }
    visitWordBoundary(e2) {
    }
    visitNonWordBoundary(e2) {
    }
    visitLookahead(e2) {
    }
    visitNegativeLookahead(e2) {
    }
    [s(721)](e2) {
    }
    [s(1370)](e2) {
    }
    [s(1485)](e2) {
    }
    visitSet(e2) {
    }
    visitGroup(e2) {
    }
    visitGroupBackReference(e2) {
    }
    visitQuantifier(e2) {
    }
  }, M(m, `BaseRegExpVisitor`), m), $s = /\r?\n/gm, ec = new Zs(), tc = new (h = class extends Qs {
    constructor() {
      super(...arguments), this.isStarting = true, this.endRegexpStack = [], this.multiline = false;
    }
    get [s(1069)]() {
      let e2 = s;
      return this.endRegexpStack[e2(1655)](``);
    }
    [s(687)](e2) {
      this.multiline = false, this.regex = e2, this.startRegexp = ``, this.isStarting = true, this.endRegexpStack = [];
    }
    visitGroup(e2) {
      let t2 = s;
      e2.quantifier && (this.isStarting = false, this[t2(1565)] = []);
    }
    visitCharacter(e2) {
      let t2 = s, n2 = String.fromCharCode(e2.value);
      if (!this[t2(1200)] && n2 === `
` && (this.multiline = true), e2[t2(521)]) this.isStarting = false, this.endRegexpStack = [];
      else {
        let e3 = oc(n2);
        this.endRegexpStack[t2(1168)](e3), this.isStarting && (this.startRegexp += e3);
      }
    }
    [s(1691)](e2) {
      let t2 = s;
      if (!this.multiline) {
        let n2 = this.regex.substring(e2[t2(732)].begin, e2.loc.end), r2 = new RegExp(n2);
        this.multiline = !!`
`.match(r2);
      }
      if (e2[t2(521)]) this.isStarting = false, this.endRegexpStack = [];
      else {
        let n2 = this[t2(410)].substring(e2.loc[t2(1105)], e2.loc.end);
        this.endRegexpStack.push(n2), this.isStarting && (this.startRegexp += n2);
      }
    }
    visitChildren(e2) {
      let t2 = s;
      e2.type === `Group` && e2.quantifier || super[t2(875)](e2);
    }
  }, M(h, `TerminalRegExpVisitor`), h)();
  function nc(e2) {
    let t2 = s;
    try {
      typeof e2 != t2(1730) && (e2 = e2.source), e2 = `/` + e2 + `/`;
      let n2 = ec.pattern(e2), r2 = [];
      for (let i2 of n2[t2(1371)].value) tc.reset(e2), tc.visit(i2), r2.push({
        start: tc.startRegexp,
        end: tc.endRegex
      });
      return r2;
    } catch {
      return [];
    }
  }
  M(nc, `getTerminalParts`);
  function rc(e2) {
    let t2 = s;
    try {
      return typeof e2 == t2(1730) && (e2 = new RegExp(e2)), e2 = e2.toString(), tc.reset(e2), tc.visit(ec.pattern(e2)), tc.multiline;
    } catch {
      return false;
    }
  }
  M(rc, `isMultilineComment`);
  var ic = `\f
\r	\v \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`[s(588)](``);
  function ac(e2) {
    let t2 = typeof e2 == `string` ? new RegExp(e2) : e2;
    return ic.some((e3) => t2.test(e3));
  }
  M(ac, `isWhitespace`);
  function oc(e2) {
    return e2.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
  }
  M(oc, `escapeRegExp`);
  function sc(e2, t2) {
    let n2 = cc(e2), r2 = t2.match(n2);
    return !!r2 && r2[0].length > 0;
  }
  M(sc, `partialMatches`);
  function cc(e2) {
    typeof e2 == `string` && (e2 = new RegExp(e2));
    let t2 = e2, n2 = e2.source, r2 = 0;
    function i2() {
      let e3 = X, a2 = ``, o2;
      function s2(e4) {
        a2 += n2.substr(r2, e4), r2 += e4;
      }
      M(s2, `appendRaw`);
      function c2(e4) {
        let t3 = X;
        a2 += `(?:` + n2.substr(r2, e4) + t3(1476), r2 += e4;
      }
      for (M(c2, `appendOptional`); r2 < n2[e3(1663)]; ) switch (n2[r2]) {
        case `\\`:
          switch (n2[r2 + 1]) {
            case `c`:
              c2(3);
              break;
            case `x`:
              c2(4);
              break;
            case `u`:
              t2.unicode ? n2[r2 + 2] === `{` ? c2(n2.indexOf(`}`, r2) - r2 + 1) : c2(6) : c2(2);
              break;
            case `p`:
            case `P`:
              t2.unicode ? c2(n2.indexOf(`}`, r2) - r2 + 1) : c2(2);
              break;
            case `k`:
              c2(n2[e3(507)](`>`, r2) - r2 + 1);
              break;
            default:
              c2(2);
              break;
          }
          break;
        case `[`:
          o2 = /\[(?:\\.|.)*?\]/g, o2.lastIndex = r2, o2 = o2.exec(n2) || [], c2(o2[0].length);
          break;
        case `|`:
        case `^`:
        case `$`:
        case `*`:
        case `+`:
        case `?`:
          s2(1);
          break;
        case `{`:
          o2 = /\{\d+,?\d*\}/g, o2.lastIndex = r2, o2 = o2[e3(871)](n2), o2 ? s2(o2[0][e3(1663)]) : c2(1);
          break;
        case `(`:
          if (n2[r2 + 1] === `?`) switch (n2[r2 + 2]) {
            case `:`:
              a2 += e3(1314), r2 += 3, a2 += i2() + `|$)`;
              break;
            case `=`:
              a2 += `(?=`, r2 += 3, a2 += i2() + `)`;
              break;
            case `!`:
              o2 = r2, r2 += 3, i2(), a2 += n2[e3(764)](o2, r2 - o2);
              break;
            case `<`:
              switch (n2[r2 + 3]) {
                case `=`:
                case `!`:
                  o2 = r2, r2 += 4, i2(), a2 += n2.substr(o2, r2 - o2);
                  break;
                default:
                  s2(n2.indexOf(`>`, r2) - r2 + 1), a2 += i2() + e3(1476);
                  break;
              }
              break;
          }
          else s2(1), a2 += i2() + `|$)`;
          break;
        case `)`:
          return ++r2, a2;
        default:
          c2(1);
          break;
      }
      return a2;
    }
    return M(i2, `process`), new RegExp(i2(), e2.flags);
  }
  M(cc, `partialRegExp`);
  function lc(e2) {
    return e2.rules.find((e3) => Eo(e3) && e3.entry);
  }
  M(lc, `getEntryRule`);
  function uc(e2) {
    let t2 = s;
    return e2.rules.filter((e3) => Ko(e3) && e3[t2(674)]);
  }
  M(uc, `getHiddenRules`);
  function dc(e2, t2) {
    let n2 = s, r2 = /* @__PURE__ */ new Set(), i2 = lc(e2);
    if (!i2) return new Set(e2.rules);
    let a2 = [
      i2
    ].concat(uc(e2));
    for (let e3 of a2) fc(e3, r2, t2);
    let o2 = /* @__PURE__ */ new Set();
    for (let t3 of e2.rules) (r2.has(t3.name) || Ko(t3) && t3.hidden) && o2[n2(974)](t3);
    return o2;
  }
  M(dc, `getAllReachableRules`);
  function fc(e2, t2, n2) {
    t2.add(e2.name), sa(e2).forEach((e3) => {
      let r2 = X;
      if (Po(e3) || n2 && Jo(e3)) {
        let i2 = e3[r2(497)][r2(289)];
        i2 && !t2.has(i2.name) && fc(i2, t2, n2);
      }
    });
  }
  M(fc, `ruleDfs`);
  function pc(e2) {
    let t2 = /* @__PURE__ */ new Set();
    return sa(e2).forEach((e3) => {
      let n2 = X;
      Ua(e3) && (Eo(e3.type.ref) && t2.add(e3.type[n2(289)]), to(e3[n2(1487)].ref) && Eo(e3.type.ref.$container) && t2[n2(974)](e3.type.ref.$container));
    }), t2;
  }
  M(pc, `getAllRulesUsedForCrossReferences`);
  function mc(e2) {
    var _a2;
    if (e2.terminal) return e2.terminal;
    if (e2.type.ref) return (_a2 = Cc(e2.type.ref)) == null ? void 0 : _a2.terminal;
  }
  M(mc, s(1479));
  function hc(e2) {
    return e2[s(674)] && !ac(Rc(e2));
  }
  M(hc, `isCommentTerminal`);
  function gc(e2, t2) {
    return !e2 || !t2 ? [] : vc(e2, t2, e2.astNode, true);
  }
  M(gc, `findNodesForProperty`);
  function _c(e2, t2, n2) {
    let r2 = s;
    if (!e2 || !t2) return;
    let i2 = vc(e2, t2, e2[r2(688)], true);
    if (i2.length !== 0) return n2 = n2 === void 0 ? 0 : Math.max(0, Math.min(n2, i2.length - 1)), i2[n2];
  }
  M(_c, `findNodeForProperty`);
  function vc(e2, t2, n2, r2) {
    let i2 = s;
    if (!r2) {
      let n3 = ta(e2.grammarSource, Na);
      if (n3 && n3[i2(729)] === t2) return [
        e2
      ];
    }
    return Ui(e2) && e2.astNode === n2 ? e2.content.flatMap((e3) => vc(e3, t2, n2, false)) : [];
  }
  M(vc, s(704));
  function yc(e2, t2) {
    return e2 ? xc(e2, t2, e2 == null ? void 0 : e2.astNode) : [];
  }
  M(yc, `findNodesForKeyword`);
  function bc(e2, t2, n2) {
    let r2 = s;
    if (!e2) return;
    let i2 = xc(e2, t2, e2 == null ? void 0 : e2.astNode);
    if (i2[r2(1663)] !== 0) return n2 = n2 === void 0 ? 0 : Math.max(0, Math.min(n2, i2.length - 1)), i2[n2];
  }
  M(bc, `findNodeForKeyword`);
  function xc(e2, t2, n2) {
    let r2 = s;
    if (e2.astNode !== n2) return [];
    if (fo(e2.grammarSource) && e2.grammarSource.value === t2) return [
      e2
    ];
    let i2 = ps(e2).iterator(), a2, o2 = [];
    do
      if (a2 = i2.next(), !a2.done) {
        let e3 = a2.value;
        e3.astNode === n2 ? fo(e3.grammarSource) && e3.grammarSource[r2(1371)] === t2 && o2[r2(1168)](e3) : i2[r2(1163)]();
      }
    while (!a2.done);
    return o2;
  }
  M(xc, `findNodesForKeywordInternal`);
  function Sc(e2) {
    var _a2;
    let t2 = s, n2 = e2.astNode;
    for (; n2 === ((_a2 = e2[t2(1673)]) == null ? void 0 : _a2.astNode); ) {
      let t3 = ta(e2.grammarSource, Na);
      if (t3) return t3;
      e2 = e2.container;
    }
  }
  M(Sc, `findAssignment`);
  function Cc(e2) {
    let t2 = s, n2 = e2;
    return to(n2) && (Ta(n2[t2(1166)]) ? n2 = n2.$container.$container : ya(n2.$container) ? n2 = n2.$container : Ls(n2.$container)), wc(e2, n2, /* @__PURE__ */ new Map());
  }
  M(Cc, `findNameAssignment`);
  function wc(e2, t2, n2) {
    let r2 = s;
    function i2(t3, r3) {
      let i3;
      return ta(t3, Na) || (i3 = wc(r3, r3, n2)), n2.set(e2, i3), i3;
    }
    if (M(i2, `go`), n2[r2(714)](e2)) return n2.get(e2);
    n2[r2(389)](e2, void 0);
    for (let o2 of sa(t2)) {
      var a2;
      if (Na(o2) && o2[r2(729)].toLowerCase() === `name`) return n2.set(e2, o2), o2;
      if (Po(o2) && Eo(o2.rule[r2(289)])) return i2(o2, o2.rule[r2(289)]);
      if (Io(o2) && (a2 = o2.typeRef) != null && a2.ref) return i2(o2, o2[r2(887)].ref);
    }
  }
  M(wc, s(1284));
  function Tc(e2) {
    let t2 = e2.$container;
    if ($a(t2)) {
      let n2 = t2.elements, r2 = n2.indexOf(e2);
      for (let e3 = r2 - 1; e3 >= 0; e3--) {
        let t3 = n2[e3];
        if (Ta(t3)) return t3;
        {
          let t4 = sa(n2[e3]).find(Ta);
          if (t4) return t4;
        }
      }
    }
    if (_a(t2)) return Tc(t2);
  }
  M(Tc, `getActionAtElement`);
  function Ec(e2, t2) {
    return e2 === `?` || e2 === `*` || $a(t2) && !!t2.guardCondition;
  }
  M(Ec, s(1303));
  function Dc(e2) {
    return e2 === `*` || e2 === `+`;
  }
  M(Dc, `isArrayCardinality`);
  function Oc(e2) {
    return e2 === `+=`;
  }
  M(Oc, s(464));
  function kc(e2) {
    return Ac(e2, /* @__PURE__ */ new Set());
  }
  M(kc, s(299));
  function Ac(e2, t2) {
    let n2 = s;
    if (t2.has(e2)) return true;
    t2[n2(974)](e2);
    for (let r2 of sa(e2)) if (Po(r2)) {
      if (!r2.rule.ref || Eo(r2.rule[n2(289)]) && !Ac(r2.rule.ref, t2) || ro(r2.rule.ref)) return false;
    } else if (Na(r2)) return false;
    else if (Ta(r2)) return false;
    return !!e2.definition;
  }
  M(Ac, `isDataTypeRuleInternal`);
  function jc(e2) {
    return Mc(e2[s(1487)], /* @__PURE__ */ new Set());
  }
  M(jc, `isDataType`);
  function Mc(e2, t2) {
    let n2 = s;
    if (t2.has(e2)) return true;
    if (t2.add(e2), ja(e2) || Oo(e2)) return false;
    if (ns(e2)) return e2.types[n2(1389)]((e3) => Mc(e3, t2));
    if (Io(e2)) {
      if (e2.primitiveType !== void 0 || e2.stringType !== void 0) return true;
      if (e2.typeRef !== void 0) {
        let r2 = e2[n2(887)].ref;
        return Xo(r2) ? Mc(r2.type, t2) : false;
      } else return false;
    } else return false;
  }
  M(Mc, `isDataTypeInternal`);
  function Nc(e2) {
    let t2 = s;
    if (!Ko(e2)) {
      if (e2[t2(1346)]) return e2[t2(1346)].name;
      if (e2.dataType) return e2.dataType;
      if (e2[t2(421)]) {
        let t3 = e2.returnType.ref;
        if (t3) return t3.name;
      }
    }
  }
  M(Nc, `getExplicitRuleType`);
  function Pc(e2) {
    if (ya(e2)) {
      var t2;
      return Eo(e2) && kc(e2) || (t2 = Nc(e2)) == null ? e2.name : t2;
    } else if (lo(e2) || Xo(e2) || Mo(e2)) return e2.name;
    else if (Ta(e2)) {
      let t3 = Fc(e2);
      if (t3) return t3;
    } else if (to(e2)) return e2.name;
    throw Error(`Cannot get name of Unknown Type`);
  }
  M(Pc, `getTypeName`);
  function Fc(e2) {
    let t2 = s;
    var n2;
    if (e2.inferredType) return e2.inferredType[t2(747)];
    if ((n2 = e2.type) != null && n2.ref) return Pc(e2[t2(1487)].ref);
  }
  M(Fc, `getActionType`);
  function Ic(e2) {
    var _a2;
    let t2 = s;
    if (Ko(e2)) return ((_a2 = e2.type) == null ? void 0 : _a2.name) ?? `string`;
    var n2;
    return Eo(e2) && kc(e2) || (n2 = Nc(e2)) == null ? e2[t2(747)] : n2;
  }
  M(Ic, `getRuleTypeName`);
  function Lc(e2) {
    var _a2;
    return Ko(e2) ? ((_a2 = e2.type) == null ? void 0 : _a2.name) ?? `string` : Nc(e2) ?? e2.name;
  }
  M(Lc, s(425));
  function Rc(e2) {
    let t2 = s, n2 = {
      s: false,
      i: false,
      u: false
    }, r2 = Bc(e2.definition, n2), i2 = Object.entries(n2)[t2(322)](([, e3]) => e3).map(([e3]) => e3)[t2(1655)](``);
    return new RegExp(r2, i2);
  }
  M(Rc, `terminalRegex`);
  var zc = s(1550);
  function Bc(e2, t2) {
    let n2 = s;
    if (Bo(e2)) return Vc(e2);
    if (Wo(e2)) return Hc(e2);
    if (La(e2)) return Gc(e2);
    if (Jo(e2)) {
      let t3 = e2.rule.ref;
      if (!t3) throw Error(`Missing rule reference.`);
      return qc(Bc(t3[n2(957)]), {
        cardinality: e2.cardinality,
        lookahead: e2.lookahead,
        parenthesized: e2[n2(432)]
      });
    } else if (go(e2)) return Wc(e2);
    else if (os(e2)) return Uc(e2);
    else if (Ao(e2)) {
      let r3 = e2.regex.lastIndexOf(`/`), i2 = e2.regex.substring(1, r3), a2 = e2[n2(410)][n2(777)](r3 + 1);
      return t2 && (t2.i = a2[n2(872)](`i`), t2.s = a2.includes(`s`), t2.u = a2[n2(872)](`u`)), qc(i2, {
        cardinality: e2[n2(1329)],
        lookahead: e2[n2(1292)],
        parenthesized: e2.parenthesized,
        wrap: false
      });
    } else if (us(e2)) return qc(zc, {
      cardinality: e2[n2(1329)],
      lookahead: e2.lookahead,
      parenthesized: e2.parenthesized
    });
    else {
      var r2;
      throw Error(`Invalid terminal element: ` + (e2 == null ? void 0 : e2.$type) + `, ` + (e2 == null || (r2 = e2[n2(1115)]) == null ? void 0 : r2.text));
    }
  }
  M(Bc, `abstractElementToRegex`);
  function Vc(e2) {
    let t2 = s;
    return qc(e2.elements.map((e3) => Bc(e3)).join(`|`), {
      cardinality: e2.cardinality,
      lookahead: e2.lookahead,
      parenthesized: e2[t2(432)],
      wrap: false
    });
  }
  M(Vc, `terminalAlternativesToRegex`);
  function Hc(e2) {
    let t2 = s;
    return qc(e2.elements.map((e3) => Bc(e3)).join(``), {
      cardinality: e2[t2(1329)],
      lookahead: e2.lookahead,
      parenthesized: e2.parenthesized,
      wrap: false
    });
  }
  M(Hc, s(1387));
  function Uc(e2) {
    let t2 = s;
    return qc(zc + `*?` + Bc(e2[t2(834)]), {
      cardinality: e2[t2(1329)],
      lookahead: e2.lookahead,
      parenthesized: e2.parenthesized
    });
  }
  M(Uc, `untilTokenToRegex`);
  function Wc(e2) {
    let t2 = s;
    return qc(t2(814) + Bc(e2.terminal) + `)` + zc + `*?`, {
      cardinality: e2.cardinality,
      lookahead: e2.lookahead,
      parenthesized: e2[t2(432)]
    });
  }
  M(Wc, `negateTokenToRegex`);
  function Gc(e2) {
    return e2.right ? qc(`[` + Kc(e2.left) + `-` + Kc(e2.right) + `]`, {
      cardinality: e2.cardinality,
      lookahead: e2.lookahead,
      parenthesized: e2.parenthesized,
      wrap: false
    }) : qc(Kc(e2.left), {
      cardinality: e2.cardinality,
      lookahead: e2.lookahead,
      parenthesized: e2.parenthesized,
      wrap: false
    });
  }
  M(Gc, `characterRangeToRegex`);
  function Kc(e2) {
    return oc(e2.value);
  }
  M(Kc, `keywordToRegex`);
  function qc(e2, t2) {
    let n2 = s;
    return (t2.parenthesized || t2.lookahead || t2.wrap !== false) && (e2 = `(` + (t2[n2(1292)] ?? (t2.parenthesized ? `` : `?:`)) + e2 + `)`), t2[n2(1329)] ? `` + e2 + t2.cardinality : e2;
  }
  M(qc, `withCardinality`);
  function Jc(e2) {
    let t2 = [], n2 = e2.Grammar;
    for (let e3 of n2.rules) Ko(e3) && hc(e3) && rc(Rc(e3)) && t2.push(e3.name);
    return {
      multilineCommentRules: t2,
      nameRegexp: xs
    };
  }
  M(Jc, s(1746));
  var Yc = typeof global == `object` && global && global.Object === Object && global, Xc = typeof self == `object` && self && self.Object === Object && self, Zc = Yc || Xc || Function(`return this`)(), Qc = Zc[s(1525)], $c = Object.prototype, el = $c.hasOwnProperty, tl = $c[s(752)], nl = Qc ? Qc.toStringTag : void 0;
  function rl(e2) {
    var t2 = el[s(1066)](e2, nl), n2 = e2[nl];
    try {
      e2[nl] = void 0;
      var r2 = true;
    } catch {
    }
    var i2 = tl.call(e2);
    return r2 && (t2 ? e2[nl] = n2 : delete e2[nl]), i2;
  }
  M(rl, `getRawTag`);
  var il = rl, al = Object.prototype.toString;
  function ol(e2) {
    return al[s(1066)](e2);
  }
  M(ol, s(658));
  var sl = ol, cl = `[object Null]`, ll = s(500), ul = Qc ? Qc.toStringTag : void 0;
  function dl(e2) {
    return e2 == null ? e2 === void 0 ? ll : cl : ul && ul in Object(e2) ? il(e2) : sl(e2);
  }
  M(dl, `baseGetTag`);
  var fl = dl;
  function pl(e2) {
    return typeof e2 == `object` && !!e2;
  }
  M(pl, `isObjectLike`);
  var ml = pl, hl = s(1503);
  function gl(e2) {
    return typeof e2 == `symbol` || ml(e2) && fl(e2) == hl;
  }
  M(gl, `isSymbol`);
  var _l = gl;
  function vl(e2, t2) {
    for (var n2 = -1, r2 = e2 == null ? 0 : e2.length, i2 = Array(r2); ++n2 < r2; ) i2[n2] = t2(e2[n2], n2, e2);
    return i2;
  }
  M(vl, `arrayMap`);
  var yl = vl, V = Array[s(1426)], bl = 1 / 0, xl = Qc ? Qc[s(950)] : void 0, Sl = xl ? xl.toString : void 0;
  function Cl(e2) {
    if (typeof e2 == `string`) return e2;
    if (V(e2)) return yl(e2, Cl) + ``;
    if (_l(e2)) return Sl ? Sl.call(e2) : ``;
    var t2 = e2 + ``;
    return t2 == `0` && 1 / e2 == -bl ? `-0` : t2;
  }
  M(Cl, `baseToString`);
  var wl = Cl, Tl = /\s/;
  function El(e2) {
    for (var t2 = e2.length; t2-- && Tl.test(e2.charAt(t2)); ) ;
    return t2;
  }
  M(El, s(1421));
  var Dl = El, Ol = /^\s+/;
  function kl(e2) {
    return e2 && e2.slice(0, Dl(e2) + 1).replace(Ol, ``);
  }
  M(kl, `baseTrim`);
  var Al = kl;
  function jl(e2) {
    let t2 = s;
    var n2 = typeof e2;
    return e2 != null && (n2 == t2(716) || n2 == `function`);
  }
  M(jl, s(870));
  var Ml = jl, Nl = NaN, Pl = /^[-+]0x[0-9a-f]+$/i, Fl = /^0b[01]+$/i, Il = /^0o[0-7]+$/i, Ll = parseInt;
  function Rl(e2) {
    let t2 = s;
    if (typeof e2 == `number`) return e2;
    if (_l(e2)) return Nl;
    if (Ml(e2)) {
      var n2 = typeof e2[t2(1008)] == `function` ? e2.valueOf() : e2;
      e2 = Ml(n2) ? n2 + `` : n2;
    }
    if (typeof e2 != `string`) return e2 === 0 ? e2 : +e2;
    e2 = Al(e2);
    var r2 = Fl.test(e2);
    return r2 || Il[t2(1276)](e2) ? Ll(e2.slice(2), r2 ? 2 : 8) : Pl.test(e2) ? Nl : +e2;
  }
  M(Rl, s(426));
  var zl = Rl, Bl = 1 / 0, Vl = 17976931348623157e292;
  function Hl(e2) {
    return e2 ? (e2 = zl(e2), e2 === Bl || e2 === -Bl ? (e2 < 0 ? -1 : 1) * Vl : e2 === e2 ? e2 : 0) : e2 === 0 ? e2 : 0;
  }
  M(Hl, `toFinite`);
  var Ul = Hl;
  function Wl(e2) {
    var t2 = Ul(e2), n2 = t2 % 1;
    return t2 === t2 ? n2 ? t2 - n2 : t2 : 0;
  }
  M(Wl, `toInteger`);
  var Gl = Wl;
  function Kl(e2) {
    return e2;
  }
  M(Kl, `identity`);
  var ql = Kl, Jl = `[object AsyncFunction]`, Yl = `[object Function]`, Xl = s(642), Zl = `[object Proxy]`;
  function Ql(e2) {
    if (!Ml(e2)) return false;
    var t2 = fl(e2);
    return t2 == Yl || t2 == Xl || t2 == Jl || t2 == Zl;
  }
  M(Ql, `isFunction`);
  var $l = Ql, eu = Zc[`__core-js_shared__`], tu = (function() {
    let e2 = s;
    var t2 = /[^.]+$/[e2(871)](eu && eu.keys && eu.keys[e2(1644)] || ``);
    return t2 ? `Symbol(src)_1.` + t2 : ``;
  })();
  function nu(e2) {
    return !!tu && tu in e2;
  }
  M(nu, s(1259));
  var ru = nu, iu = Function.prototype[s(752)];
  function au(e2) {
    if (e2 != null) {
      try {
        return iu.call(e2);
      } catch {
      }
      try {
        return e2 + ``;
      } catch {
      }
    }
    return ``;
  }
  M(au, `toSource`);
  var ou = au, su = /[\\^$.*+?()[\]{}|]/g, cu = /^\[object .+?Constructor\]$/, lu = Function.prototype, uu = Object.prototype, du = lu[s(752)], fu = uu.hasOwnProperty, pu = RegExp(`^` + du[s(1066)](fu).replace(su, `\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, `$1.*?`) + `$`);
  function mu(e2) {
    return !Ml(e2) || ru(e2) ? false : ($l(e2) ? pu : cu).test(ou(e2));
  }
  M(mu, `baseIsNative`);
  var hu = mu;
  function gu(e2, t2) {
    return e2 == null ? void 0 : e2[t2];
  }
  M(gu, `getValue`);
  var _u = gu;
  function vu(e2, t2) {
    var n2 = _u(e2, t2);
    return hu(n2) ? n2 : void 0;
  }
  M(vu, s(1517));
  var yu = vu, bu = yu(Zc, `WeakMap`), xu = Object.create, Su = (function() {
    function e2() {
    }
    return M(e2, `object`), function(t2) {
      let n2 = X;
      if (!Ml(t2)) return {};
      if (xu) return xu(t2);
      e2[n2(950)] = t2;
      var r2 = new e2();
      return e2.prototype = void 0, r2;
    };
  })();
  function Cu(e2, t2, n2) {
    let r2 = s;
    switch (n2.length) {
      case 0:
        return e2[r2(1066)](t2);
      case 1:
        return e2.call(t2, n2[0]);
      case 2:
        return e2.call(t2, n2[0], n2[1]);
      case 3:
        return e2.call(t2, n2[0], n2[1], n2[2]);
    }
    return e2.apply(t2, n2);
  }
  M(Cu, `apply`);
  var wu = Cu;
  function Tu() {
  }
  M(Tu, `noop`);
  var Eu = Tu;
  function Du(e2, t2) {
    var n2 = -1, r2 = e2.length;
    for (t2 || (t2 = Array(r2)); ++n2 < r2; ) t2[n2] = e2[n2];
    return t2;
  }
  M(Du, `copyArray`);
  var Ou = Du, ku = 800, Au = 16, ju = Date.now;
  function Mu(e2) {
    var t2 = 0, n2 = 0;
    return function() {
      var r2 = ju(), i2 = Au - (r2 - n2);
      if (n2 = r2, i2 > 0) {
        if (++t2 >= ku) return arguments[0];
      } else t2 = 0;
      return e2.apply(void 0, arguments);
    };
  }
  M(Mu, `shortOut`);
  var Nu = Mu;
  function Pu(e2) {
    return function() {
      return e2;
    };
  }
  M(Pu, `constant`);
  var Fu = Pu, Iu = (function() {
    try {
      var e2 = yu(Object, `defineProperty`);
      return e2({}, ``, {}), e2;
    } catch {
    }
  })(), Lu = Nu(Iu ? function(e2, t2) {
    return Iu(e2, `toString`, {
      configurable: true,
      enumerable: false,
      value: Fu(t2),
      writable: true
    });
  } : ql);
  function Ru(e2, t2) {
    for (var n2 = -1, r2 = e2 == null ? 0 : e2.length; ++n2 < r2 && t2(e2[n2], n2, e2) !== false; ) ;
    return e2;
  }
  M(Ru, `arrayEach`);
  var zu = Ru;
  function Bu(e2, t2, n2, r2) {
    for (var i2 = e2[s(1663)], a2 = n2 + (r2 ? 1 : -1); r2 ? a2-- : ++a2 < i2; ) if (t2(e2[a2], a2, e2)) return a2;
    return -1;
  }
  M(Bu, `baseFindIndex`);
  var Vu = Bu;
  function Hu(e2) {
    return e2 !== e2;
  }
  M(Hu, `baseIsNaN`);
  var Uu = Hu;
  function Wu(e2, t2, n2) {
    let r2 = s;
    for (var i2 = n2 - 1, a2 = e2[r2(1663)]; ++i2 < a2; ) if (e2[i2] === t2) return i2;
    return -1;
  }
  M(Wu, `strictIndexOf`);
  var Gu = Wu;
  function Ku(e2, t2, n2) {
    return t2 === t2 ? Gu(e2, t2, n2) : Vu(e2, Uu, n2);
  }
  M(Ku, `baseIndexOf`);
  var qu = Ku;
  function Ju(e2, t2) {
    return !!(e2 != null && e2.length) && qu(e2, t2, 0) > -1;
  }
  M(Ju, s(1498));
  var Yu = Ju, Xu = 9007199254740991, Zu = /^(?:0|[1-9]\d*)$/;
  function Qu(e2, t2) {
    var n2 = typeof e2;
    return t2 ?? (t2 = Xu), !!t2 && (n2 == `number` || n2 != `symbol` && Zu.test(e2)) && e2 > -1 && e2 % 1 == 0 && e2 < t2;
  }
  M(Qu, `isIndex`);
  var $u = Qu;
  function ed(e2, t2, n2) {
    t2 == `__proto__` && Iu ? Iu(e2, t2, {
      configurable: true,
      enumerable: true,
      value: n2,
      writable: true
    }) : e2[t2] = n2;
  }
  M(ed, `baseAssignValue`);
  var td = ed;
  function nd(e2, t2) {
    return e2 === t2 || e2 !== e2 && t2 !== t2;
  }
  M(nd, `eq`);
  var rd = nd, id = Object[s(950)].hasOwnProperty;
  function ad(e2, t2, n2) {
    var r2 = e2[t2];
    (!(id.call(e2, t2) && rd(r2, n2)) || n2 === void 0 && !(t2 in e2)) && td(e2, t2, n2);
  }
  M(ad, s(415));
  var od = ad;
  function sd(e2, t2, n2, r2) {
    var i2 = !n2;
    n2 || (n2 = {});
    for (var a2 = -1, o2 = t2.length; ++a2 < o2; ) {
      var s2 = t2[a2], c2 = r2 ? r2(n2[s2], e2[s2], s2, n2, e2) : void 0;
      c2 === void 0 && (c2 = e2[s2]), i2 ? td(n2, s2, c2) : od(n2, s2, c2);
    }
    return n2;
  }
  M(sd, s(1334));
  var cd = sd, ld = Math.max;
  function ud(e2, t2, n2) {
    return t2 = ld(t2 === void 0 ? e2.length - 1 : t2, 0), function() {
      for (var r2 = arguments, i2 = -1, a2 = ld(r2.length - t2, 0), o2 = Array(a2); ++i2 < a2; ) o2[i2] = r2[t2 + i2];
      i2 = -1;
      for (var s2 = Array(t2 + 1); ++i2 < t2; ) s2[i2] = r2[i2];
      return s2[t2] = n2(o2), wu(e2, this, s2);
    };
  }
  M(ud, `overRest`);
  var dd = ud;
  function fd(e2, t2) {
    return Lu(dd(e2, t2, ql), e2 + ``);
  }
  M(fd, s(1279));
  var pd = fd, md = 9007199254740991;
  function hd(e2) {
    return typeof e2 == `number` && e2 > -1 && e2 % 1 == 0 && e2 <= md;
  }
  M(hd, `isLength`);
  var gd = hd;
  function _d(e2) {
    return e2 != null && gd(e2.length) && !$l(e2);
  }
  M(_d, `isArrayLike`);
  var vd = _d;
  function yd(e2, t2, n2) {
    if (!Ml(n2)) return false;
    var r2 = typeof t2;
    return (r2 == `number` ? vd(n2) && $u(t2, n2.length) : r2 == `string` && t2 in n2) ? rd(n2[t2], e2) : false;
  }
  M(yd, `isIterateeCall`);
  var bd = yd;
  function xd(e2) {
    return pd(function(t2, n2) {
      var r2 = -1, i2 = n2.length, a2 = i2 > 1 ? n2[i2 - 1] : void 0, o2 = i2 > 2 ? n2[2] : void 0;
      for (a2 = e2.length > 3 && typeof a2 == `function` ? (i2--, a2) : void 0, o2 && bd(n2[0], n2[1], o2) && (a2 = i2 < 3 ? void 0 : a2, i2 = 1), t2 = Object(t2); ++r2 < i2; ) {
        var s2 = n2[r2];
        s2 && e2(t2, s2, r2, a2);
      }
      return t2;
    });
  }
  M(xd, `createAssigner`);
  var Sd = xd, Cd = Object.prototype;
  function wd(e2) {
    var t2 = e2 && e2.constructor;
    return e2 === (typeof t2 == `function` && t2.prototype || Cd);
  }
  M(wd, s(1742));
  var Td = wd;
  function Ed(e2, t2) {
    for (var n2 = -1, r2 = Array(e2); ++n2 < e2; ) r2[n2] = t2(n2);
    return r2;
  }
  M(Ed, `baseTimes`);
  var Dd = Ed, Od = `[object Arguments]`;
  function kd(e2) {
    return ml(e2) && fl(e2) == Od;
  }
  M(kd, `baseIsArguments`);
  var Ad = kd, jd = Object.prototype, Md = jd[s(577)], Nd = jd.propertyIsEnumerable, Pd = Ad(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? Ad : function(e2) {
    return ml(e2) && Md.call(e2, `callee`) && !Nd.call(e2, `callee`);
  };
  function Fd() {
    return false;
  }
  M(Fd, `stubFalse`);
  var Id = Fd, Ld = typeof exports == `object` && exports && !exports.nodeType && exports, Rd = Ld && typeof module == `object` && module && !module.nodeType && module, zd = Rd && Rd.exports === Ld ? Zc.Buffer : void 0, Bd = (zd ? zd.isBuffer : void 0) || Id, Vd = `[object Arguments]`, Hd = `[object Array]`, Ud = `[object Boolean]`, Wd = `[object Date]`, Gd = `[object Error]`, Kd = `[object Function]`, qd = s(1443), Jd = `[object Number]`, Yd = `[object Object]`, Xd = `[object RegExp]`, Zd = `[object Set]`, Qd = `[object String]`, $d = `[object WeakMap]`, ef = s(1246), tf = s(1683), nf = s(1367), rf = `[object Float64Array]`, af = `[object Int8Array]`, of = `[object Int16Array]`, sf = `[object Int32Array]`, cf = `[object Uint8Array]`, lf = `[object Uint8ClampedArray]`, uf = `[object Uint16Array]`, df = `[object Uint32Array]`, H = {};
  H[nf] = H[rf] = H[af] = H[of] = H[sf] = H[cf] = H[lf] = H[uf] = H[df] = true, H[Vd] = H[Hd] = H[ef] = H[Ud] = H[tf] = H[Wd] = H[Gd] = H[Kd] = H[qd] = H[Jd] = H[Yd] = H[Xd] = H[Zd] = H[Qd] = H[$d] = false;
  function ff(e2) {
    return ml(e2) && gd(e2.length) && !!H[fl(e2)];
  }
  M(ff, `baseIsTypedArray`);
  var pf = ff;
  function mf(e2) {
    return function(t2) {
      return e2(t2);
    };
  }
  M(mf, s(456));
  var hf = mf, gf = typeof exports == s(716) && exports && !exports[s(1472)] && exports, _f = gf && typeof module == `object` && module && !module.nodeType && module, vf = _f && _f.exports === gf && Yc.process, yf = (function() {
    let e2 = s;
    try {
      return _f && _f.require && _f.require(`util`)[e2(726)] || vf && vf.binding && vf.binding(`util`);
    } catch {
    }
  })(), bf = yf && yf.isTypedArray, xf = bf ? hf(bf) : pf, Sf = Object[s(950)].hasOwnProperty;
  function Cf(e2, t2) {
    let n2 = s;
    var r2 = V(e2), i2 = !r2 && Pd(e2), a2 = !r2 && !i2 && Bd(e2), o2 = !r2 && !i2 && !a2 && xf(e2), c2 = r2 || i2 || a2 || o2, l2 = c2 ? Dd(e2.length, String) : [], u2 = l2.length;
    for (var d2 in e2) (t2 || Sf.call(e2, d2)) && !(c2 && (d2 == `length` || a2 && (d2 == n2(797) || d2 == `parent`) || o2 && (d2 == n2(1040) || d2 == `byteLength` || d2 == n2(701)) || $u(d2, u2))) && l2.push(d2);
    return l2;
  }
  M(Cf, `arrayLikeKeys`);
  var wf = Cf;
  function Tf(e2, t2) {
    return function(n2) {
      return e2(t2(n2));
    };
  }
  M(Tf, `overArg`);
  var Ef = Tf, Df = Ef(Object[s(626)], Object), Of = Object.prototype.hasOwnProperty;
  function kf(e2) {
    if (!Td(e2)) return Df(e2);
    var t2 = [];
    for (var n2 in Object(e2)) Of.call(e2, n2) && n2 != `constructor` && t2.push(n2);
    return t2;
  }
  M(kf, `baseKeys`);
  var Af = kf;
  function jf(e2) {
    return vd(e2) ? wf(e2) : Af(e2);
  }
  M(jf, `keys`);
  var Mf = jf, Nf = Object.prototype[s(577)], Pf = Sd(function(e2, t2) {
    if (Td(t2) || vd(t2)) {
      cd(t2, Mf(t2), e2);
      return;
    }
    for (var n2 in t2) Nf.call(t2, n2) && od(e2, n2, t2[n2]);
  });
  function Ff(e2) {
    var t2 = [];
    if (e2 != null) for (var n2 in Object(e2)) t2.push(n2);
    return t2;
  }
  M(Ff, `nativeKeysIn`);
  var If = Ff, Lf = Object.prototype.hasOwnProperty;
  function Rf(e2) {
    let t2 = s;
    if (!Ml(e2)) return If(e2);
    var n2 = Td(e2), r2 = [];
    for (var i2 in e2) i2 == `constructor` && (n2 || !Lf[t2(1066)](e2, i2)) || r2.push(i2);
    return r2;
  }
  M(Rf, `baseKeysIn`);
  var zf = Rf;
  function Bf(e2) {
    return vd(e2) ? wf(e2, true) : zf(e2);
  }
  M(Bf, `keysIn`);
  var Vf = Bf, Hf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Uf = /^\w*$/;
  function Wf(e2, t2) {
    if (V(e2)) return false;
    var n2 = typeof e2;
    return n2 == `number` || n2 == `symbol` || n2 == `boolean` || e2 == null || _l(e2) ? true : Uf.test(e2) || !Hf.test(e2) || t2 != null && e2 in Object(t2);
  }
  M(Wf, `isKey`);
  var Gf = Wf, Kf = yu(Object, `create`);
  function qf() {
    this.__data__ = Kf ? Kf(null) : {}, this.size = 0;
  }
  M(qf, s(407));
  var Jf = qf;
  function Yf(e2) {
    let t2 = s;
    var n2 = this.has(e2) && delete this[t2(1439)][e2];
    return this.size -= +!!n2, n2;
  }
  M(Yf, `hashDelete`);
  var Xf = Yf, Zf = `__lodash_hash_undefined__`, Qf = Object.prototype.hasOwnProperty;
  function $f(e2) {
    let t2 = s;
    var n2 = this[t2(1439)];
    if (Kf) {
      var r2 = n2[e2];
      return r2 === Zf ? void 0 : r2;
    }
    return Qf.call(n2, e2) ? n2[e2] : void 0;
  }
  M($f, `hashGet`);
  var ep = $f, tp = Object[s(950)].hasOwnProperty;
  function np(e2) {
    let t2 = s;
    var n2 = this.__data__;
    return Kf ? n2[e2] !== void 0 : tp[t2(1066)](n2, e2);
  }
  M(np, `hashHas`);
  var rp = np, ip = `__lodash_hash_undefined__`;
  function ap(e2, t2) {
    let n2 = s;
    var r2 = this.__data__;
    return this[n2(693)] += +!this.has(e2), r2[e2] = Kf && t2 === void 0 ? ip : t2, this;
  }
  M(ap, `hashSet`);
  var op = ap;
  function sp(e2) {
    let t2 = s;
    var n2 = -1, r2 = e2 == null ? 0 : e2.length;
    for (this[t2(563)](); ++n2 < r2; ) {
      var i2 = e2[n2];
      this.set(i2[0], i2[1]);
    }
  }
  M(sp, `Hash`), sp.prototype.clear = Jf, sp.prototype.delete = Xf, sp.prototype.get = ep, sp.prototype.has = rp, sp[s(950)][s(389)] = op;
  var cp = sp;
  function lp() {
    this.__data__ = [], this.size = 0;
  }
  M(lp, s(653));
  var up = lp;
  function dp(e2, t2) {
    for (var n2 = e2.length; n2--; ) if (rd(e2[n2][0], t2)) return n2;
    return -1;
  }
  M(dp, `assocIndexOf`);
  var fp = dp, pp = Array.prototype.splice;
  function mp(e2) {
    var t2 = this.__data__, n2 = fp(t2, e2);
    return n2 < 0 ? false : (n2 == t2.length - 1 ? t2.pop() : pp.call(t2, n2, 1), --this.size, true);
  }
  M(mp, `listCacheDelete`);
  var hp = mp;
  function gp(e2) {
    var t2 = this.__data__, n2 = fp(t2, e2);
    return n2 < 0 ? void 0 : t2[n2][1];
  }
  M(gp, `listCacheGet`);
  var _p = gp;
  function vp(e2) {
    let t2 = s;
    return fp(this[t2(1439)], e2) > -1;
  }
  M(vp, `listCacheHas`);
  var yp = vp;
  function bp(e2, t2) {
    let n2 = s;
    var r2 = this.__data__, i2 = fp(r2, e2);
    return i2 < 0 ? (++this[n2(693)], r2.push([
      e2,
      t2
    ])) : r2[i2][1] = t2, this;
  }
  M(bp, `listCacheSet`);
  var xp = bp;
  function Sp(e2) {
    let t2 = s;
    var n2 = -1, r2 = e2 == null ? 0 : e2.length;
    for (this.clear(); ++n2 < r2; ) {
      var i2 = e2[n2];
      this[t2(389)](i2[0], i2[1]);
    }
  }
  M(Sp, `ListCache`), Sp[s(950)].clear = up, Sp.prototype.delete = hp, Sp.prototype.get = _p, Sp.prototype.has = yp, Sp.prototype.set = xp;
  var Cp = Sp, wp = yu(Zc, s(787));
  function Tp() {
    let e2 = s;
    this.size = 0, this[e2(1439)] = {
      hash: new cp(),
      map: new (wp || Cp)(),
      string: new cp()
    };
  }
  M(Tp, `mapCacheClear`);
  var Ep = Tp;
  function Dp(e2) {
    let t2 = s;
    var n2 = typeof e2;
    return n2 == t2(1730) || n2 == `number` || n2 == `symbol` || n2 == `boolean` ? e2 !== `__proto__` : e2 === null;
  }
  M(Dp, s(697));
  var Op = Dp;
  function kp(e2, t2) {
    let n2 = s;
    var r2 = e2.__data__;
    return Op(t2) ? r2[typeof t2 == `string` ? n2(1730) : `hash`] : r2[n2(311)];
  }
  M(kp, s(818));
  var Ap = kp;
  function jp(e2) {
    let t2 = s;
    var n2 = Ap(this, e2).delete(e2);
    return this[t2(693)] -= +!!n2, n2;
  }
  M(jp, `mapCacheDelete`);
  var Mp = jp;
  function Np(e2) {
    return Ap(this, e2).get(e2);
  }
  M(Np, `mapCacheGet`);
  var Pp = Np;
  function Fp(e2) {
    let t2 = s;
    return Ap(this, e2)[t2(714)](e2);
  }
  M(Fp, s(1626));
  var Ip = Fp;
  function Lp(e2, t2) {
    let n2 = s;
    var r2 = Ap(this, e2), i2 = r2[n2(693)];
    return r2[n2(389)](e2, t2), this.size += r2[n2(693)] == i2 ? 0 : 1, this;
  }
  M(Lp, `mapCacheSet`);
  var Rp = Lp;
  function zp(e2) {
    let t2 = s;
    var n2 = -1, r2 = e2 == null ? 0 : e2.length;
    for (this[t2(563)](); ++n2 < r2; ) {
      var i2 = e2[n2];
      this.set(i2[0], i2[1]);
    }
  }
  M(zp, `MapCache`), zp.prototype.clear = Ep, zp.prototype.delete = Mp, zp.prototype.get = Pp, zp.prototype.has = Ip, zp.prototype.set = Rp;
  var Bp = zp, Vp = s(1229);
  function Hp(e2, t2) {
    let n2 = s;
    if (typeof e2 != `function` || t2 != null && typeof t2 != `function`) throw TypeError(Vp);
    var r2 = M(function() {
      let n3 = X;
      var i2 = arguments, a2 = t2 ? t2[n3(1120)](this, i2) : i2[0], o2 = r2.cache;
      if (o2[n3(714)](a2)) return o2.get(a2);
      var s2 = e2[n3(1120)](this, i2);
      return r2.cache = o2.set(a2, s2) || o2, s2;
    }, `memoized`);
    return r2[n2(374)] = new (Hp[n2(740)] || Bp)(), r2;
  }
  M(Hp, `memoize`), Hp[s(740)] = Bp;
  var Up = Hp, Wp = 500;
  function Gp(e2) {
    var t2 = Up(e2, function(e3) {
      return n2.size === Wp && n2.clear(), e3;
    }), n2 = t2.cache;
    return t2;
  }
  M(Gp, s(1489));
  var Kp = Gp, qp = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Jp = /\\(\\)?/g, Yp = Kp(function(e2) {
    let t2 = s;
    var n2 = [];
    return e2[t2(1129)](0) === 46 && n2.push(``), e2.replace(qp, function(e3, r2, i2, a2) {
      let o2 = t2;
      n2.push(i2 ? a2[o2(909)](Jp, `$1`) : r2 || e3);
    }), n2;
  });
  function Xp(e2) {
    return e2 == null ? `` : wl(e2);
  }
  M(Xp, `toString`);
  var Zp = Xp;
  function Qp(e2, t2) {
    return V(e2) ? e2 : Gf(e2, t2) ? [
      e2
    ] : Yp(Zp(e2));
  }
  M(Qp, `castPath`);
  var $p = Qp, em = 1 / 0;
  function tm(e2) {
    if (typeof e2 == `string` || _l(e2)) return e2;
    var t2 = e2 + ``;
    return t2 == `0` && 1 / e2 == -em ? `-0` : t2;
  }
  M(tm, s(753));
  var nm = tm;
  function rm(e2, t2) {
    t2 = $p(t2, e2);
    for (var n2 = 0, r2 = t2.length; e2 != null && n2 < r2; ) e2 = e2[nm(t2[n2++])];
    return n2 && n2 == r2 ? e2 : void 0;
  }
  M(rm, `baseGet`);
  var im = rm;
  function am(e2, t2, n2) {
    var r2 = e2 == null ? void 0 : im(e2, t2);
    return r2 === void 0 ? n2 : r2;
  }
  M(am, `get`);
  var om = am;
  function sm(e2, t2) {
    for (var n2 = -1, r2 = t2.length, i2 = e2.length; ++n2 < r2; ) e2[i2 + n2] = t2[n2];
    return e2;
  }
  M(sm, `arrayPush`);
  var cm = sm, lm = Qc ? Qc.isConcatSpreadable : void 0;
  function um(e2) {
    return V(e2) || Pd(e2) || !!(lm && e2 && e2[lm]);
  }
  M(um, `isFlattenable`);
  var dm = um;
  function fm(e2, t2, n2, r2, i2) {
    var a2 = -1, o2 = e2.length;
    for (n2 || (n2 = dm), i2 || (i2 = []); ++a2 < o2; ) {
      var s2 = e2[a2];
      t2 > 0 && n2(s2) ? t2 > 1 ? fm(s2, t2 - 1, n2, r2, i2) : cm(i2, s2) : r2 || (i2[i2.length] = s2);
    }
    return i2;
  }
  M(fm, `baseFlatten`);
  var pm = fm;
  function mm(e2) {
    return e2 != null && e2.length ? pm(e2, 1) : [];
  }
  M(mm, s(1139));
  var hm = mm, gm = Ef(Object.getPrototypeOf, Object);
  function _m(e2, t2, n2) {
    var r2 = -1, i2 = e2.length;
    t2 < 0 && (t2 = -t2 > i2 ? 0 : i2 + t2), n2 = n2 > i2 ? i2 : n2, n2 < 0 && (n2 += i2), i2 = t2 > n2 ? 0 : n2 - t2 >>> 0, t2 >>>= 0;
    for (var a2 = Array(i2); ++r2 < i2; ) a2[r2] = e2[r2 + t2];
    return a2;
  }
  M(_m, `baseSlice`);
  var vm = _m;
  function ym(e2, t2, n2, r2) {
    var i2 = -1, a2 = e2 == null ? 0 : e2.length;
    for (r2 && a2 && (n2 = e2[++i2]); ++i2 < a2; ) n2 = t2(n2, e2[i2], i2, e2);
    return n2;
  }
  M(ym, `arrayReduce`);
  var bm = ym;
  function xm() {
    this.__data__ = new Cp(), this.size = 0;
  }
  M(xm, `stackClear`);
  var Sm = xm;
  function Cm(e2) {
    let t2 = s;
    var n2 = this[t2(1439)], r2 = n2.delete(e2);
    return this[t2(693)] = n2.size, r2;
  }
  M(Cm, `stackDelete`);
  var wm = Cm;
  function Tm(e2) {
    return this.__data__.get(e2);
  }
  M(Tm, s(1440));
  var Em = Tm;
  function Dm(e2) {
    return this.__data__.has(e2);
  }
  M(Dm, `stackHas`);
  var Om = Dm, km = 200;
  function Am(e2, t2) {
    let n2 = s;
    var r2 = this.__data__;
    if (r2 instanceof Cp) {
      var i2 = r2.__data__;
      if (!wp || i2[n2(1663)] < km - 1) return i2.push([
        e2,
        t2
      ]), this.size = ++r2.size, this;
      r2 = this.__data__ = new Bp(i2);
    }
    return r2.set(e2, t2), this[n2(693)] = r2.size, this;
  }
  M(Am, `stackSet`);
  var jm = Am;
  function Mm(e2) {
    let t2 = s;
    var n2 = this.__data__ = new Cp(e2);
    this.size = n2[t2(693)];
  }
  M(Mm, `Stack`), Mm[s(950)].clear = Sm, Mm[s(950)].delete = wm, Mm.prototype.get = Em, Mm.prototype.has = Om, Mm.prototype[s(389)] = jm;
  var Nm = Mm;
  function Pm(e2, t2) {
    return e2 && cd(t2, Mf(t2), e2);
  }
  M(Pm, `baseAssign`);
  var Fm = Pm;
  function Im(e2, t2) {
    return e2 && cd(t2, Vf(t2), e2);
  }
  M(Im, s(1777));
  var Lm = Im, Rm = typeof exports == `object` && exports && !exports.nodeType && exports, zm = Rm && typeof module == `object` && module && !module.nodeType && module, Bm = zm && zm.exports === Rm ? Zc[s(606)] : void 0, Vm = Bm ? Bm.allocUnsafe : void 0;
  function Hm(e2, t2) {
    let n2 = s;
    if (t2) return e2.slice();
    var r2 = e2[n2(1663)], i2 = Vm ? Vm(r2) : new e2.constructor(r2);
    return e2.copy(i2), i2;
  }
  M(Hm, `cloneBuffer`);
  var Um = Hm;
  function Wm(e2, t2) {
    for (var n2 = -1, r2 = e2 == null ? 0 : e2.length, i2 = 0, a2 = []; ++n2 < r2; ) {
      var o2 = e2[n2];
      t2(o2, n2, e2) && (a2[i2++] = o2);
    }
    return a2;
  }
  M(Wm, `arrayFilter`);
  var Gm = Wm;
  function Km() {
    return [];
  }
  M(Km, `stubArray`);
  var qm = Km, Jm = Object.prototype.propertyIsEnumerable, Ym = Object.getOwnPropertySymbols, Xm = Ym ? function(e2) {
    return e2 == null ? [] : (e2 = Object(e2), Gm(Ym(e2), function(t2) {
      return Jm[X(1066)](e2, t2);
    }));
  } : qm;
  function Zm(e2, t2) {
    return cd(e2, Xm(e2), t2);
  }
  M(Zm, `copySymbols`);
  var Qm = Zm, $m = Object.getOwnPropertySymbols ? function(e2) {
    for (var t2 = []; e2; ) cm(t2, Xm(e2)), e2 = gm(e2);
    return t2;
  } : qm;
  function eh(e2, t2) {
    return cd(e2, $m(e2), t2);
  }
  M(eh, `copySymbolsIn`);
  var th = eh;
  function nh(e2, t2, n2) {
    var r2 = t2(e2);
    return V(e2) ? r2 : cm(r2, n2(e2));
  }
  M(nh, `baseGetAllKeys`);
  var rh = nh;
  function ih(e2) {
    return rh(e2, Mf, Xm);
  }
  M(ih, `getAllKeys`);
  var ah = ih;
  function oh(e2) {
    return rh(e2, Vf, $m);
  }
  M(oh, `getAllKeysIn`);
  var sh = oh, ch = yu(Zc, `DataView`), lh = yu(Zc, `Promise`), uh = yu(Zc, `Set`), dh = `[object Map]`, fh = `[object Object]`, ph = `[object Promise]`, mh = `[object Set]`, hh = s(1301), gh = `[object DataView]`, _h = ou(ch), vh = ou(wp), yh = ou(lh), bh = ou(uh), xh = ou(bu), Sh = fl;
  (ch && Sh(new ch(new ArrayBuffer(1))) != gh || wp && Sh(new wp()) != dh || lh && Sh(lh.resolve()) != ph || uh && Sh(new uh()) != mh || bu && Sh(new bu()) != hh) && (Sh = M(function(e2) {
    var t2 = fl(e2), n2 = t2 == fh ? e2.constructor : void 0, r2 = n2 ? ou(n2) : ``;
    if (r2) switch (r2) {
      case _h:
        return gh;
      case vh:
        return dh;
      case yh:
        return ph;
      case bh:
        return mh;
      case xh:
        return hh;
    }
    return t2;
  }, `getTag`));
  var Ch = Sh, wh = Object[s(950)].hasOwnProperty;
  function Th(e2) {
    let t2 = s;
    var n2 = e2.length, r2 = new e2.constructor(n2);
    return n2 && typeof e2[0] == `string` && wh.call(e2, `index`) && (r2.index = e2.index, r2.input = e2[t2(775)]), r2;
  }
  M(Th, `initCloneArray`);
  var Eh = Th, Dh = Zc.Uint8Array;
  function Oh(e2) {
    var t2 = new e2.constructor(e2.byteLength);
    return new Dh(t2).set(new Dh(e2)), t2;
  }
  M(Oh, `cloneArrayBuffer`);
  var kh = Oh;
  function Ah(e2, t2) {
    let n2 = s;
    var r2 = t2 ? kh(e2.buffer) : e2.buffer;
    return new e2.constructor(r2, e2.byteOffset, e2[n2(977)]);
  }
  M(Ah, `cloneDataView`);
  var jh = Ah, Mh = /\w*$/;
  function Nh(e2) {
    var t2 = new e2.constructor(e2.source, Mh.exec(e2));
    return t2.lastIndex = e2.lastIndex, t2;
  }
  M(Nh, `cloneRegExp`);
  var Ph = Nh, Fh = Qc ? Qc.prototype : void 0, Ih = Fh ? Fh.valueOf : void 0;
  function Lh(e2) {
    return Ih ? Object(Ih.call(e2)) : {};
  }
  M(Lh, `cloneSymbol`);
  var Rh = Lh;
  function zh(e2, t2) {
    let n2 = s;
    var r2 = t2 ? kh(e2.buffer) : e2.buffer;
    return new e2[n2(1406)](r2, e2.byteOffset, e2.length);
  }
  M(zh, `cloneTypedArray`);
  var Bh = zh, Vh = `[object Boolean]`, Hh = `[object Date]`, Uh = `[object Map]`, Wh = s(1086), Gh = `[object RegExp]`, Kh = `[object Set]`, qh = `[object String]`, Jh = `[object Symbol]`, Yh = `[object ArrayBuffer]`, Xh = `[object DataView]`, Zh = s(1367), Qh = s(581), $h = `[object Int8Array]`, eg = `[object Int16Array]`, tg = s(574), ng = `[object Uint8Array]`, rg = `[object Uint8ClampedArray]`, ig = `[object Uint16Array]`, ag = `[object Uint32Array]`;
  function og(e2, t2, n2) {
    var r2 = e2.constructor;
    switch (t2) {
      case Yh:
        return kh(e2);
      case Vh:
      case Hh:
        return new r2(+e2);
      case Xh:
        return jh(e2, n2);
      case Zh:
      case Qh:
      case $h:
      case eg:
      case tg:
      case ng:
      case rg:
      case ig:
      case ag:
        return Bh(e2, n2);
      case Uh:
        return new r2();
      case Wh:
      case qh:
        return new r2(e2);
      case Gh:
        return Ph(e2);
      case Kh:
        return new r2();
      case Jh:
        return Rh(e2);
    }
  }
  M(og, `initCloneByTag`);
  var sg = og;
  function cg(e2) {
    return typeof e2.constructor == `function` && !Td(e2) ? Su(gm(e2)) : {};
  }
  M(cg, `initCloneObject`);
  var lg = cg, ug = `[object Map]`;
  function dg(e2) {
    return ml(e2) && Ch(e2) == ug;
  }
  M(dg, s(1581));
  var fg = dg, pg = yf && yf.isMap, mg = pg ? hf(pg) : fg, hg = `[object Set]`;
  function gg(e2) {
    return ml(e2) && Ch(e2) == hg;
  }
  M(gg, `baseIsSet`);
  var _g = gg, vg = yf && yf.isSet, yg = vg ? hf(vg) : _g, bg = 1, xg = 2, Sg = 4, Cg = `[object Arguments]`, wg = `[object Array]`, Tg = `[object Boolean]`, Eg = `[object Date]`, Dg = `[object Error]`, Og = s(1242), kg = `[object GeneratorFunction]`, Ag = `[object Map]`, jg = s(1086), Mg = `[object Object]`, Ng = `[object RegExp]`, Pg = `[object Set]`, Fg = `[object String]`, Ig = `[object Symbol]`, Lg = `[object WeakMap]`, Rg = s(1246), zg = s(1683), Bg = `[object Float32Array]`, Vg = `[object Float64Array]`, Hg = `[object Int8Array]`, Ug = `[object Int16Array]`, Wg = `[object Int32Array]`, Gg = `[object Uint8Array]`, Kg = s(1235), qg = `[object Uint16Array]`, Jg = `[object Uint32Array]`, U = {};
  U[Cg] = U[wg] = U[Rg] = U[zg] = U[Tg] = U[Eg] = U[Bg] = U[Vg] = U[Hg] = U[Ug] = U[Wg] = U[Ag] = U[jg] = U[Mg] = U[Ng] = U[Pg] = U[Fg] = U[Ig] = U[Gg] = U[Kg] = U[qg] = U[Jg] = true, U[Dg] = U[Og] = U[Lg] = false;
  function Yg(e2, t2, n2, r2, i2, a2) {
    let o2 = s;
    var c2, l2 = t2 & bg, u2 = t2 & xg, d2 = t2 & Sg;
    if (n2 && (c2 = i2 ? n2(e2, r2, i2, a2) : n2(e2)), c2 !== void 0) return c2;
    if (!Ml(e2)) return e2;
    var f2 = V(e2);
    if (f2) {
      if (c2 = Eh(e2), !l2) return Ou(e2, c2);
    } else {
      var p2 = Ch(e2), m2 = p2 == Og || p2 == kg;
      if (Bd(e2)) return Um(e2, l2);
      if (p2 == Mg || p2 == Cg || m2 && !i2) {
        if (c2 = u2 || m2 ? {} : lg(e2), !l2) return u2 ? th(e2, Lm(c2, e2)) : Qm(e2, Fm(c2, e2));
      } else {
        if (!U[p2]) return i2 ? e2 : {};
        c2 = sg(e2, p2, l2);
      }
    }
    a2 || (a2 = new Nm());
    var h2 = a2.get(e2);
    if (h2) return h2;
    a2[o2(389)](e2, c2), yg(e2) ? e2[o2(396)](function(r3) {
      c2.add(Yg(r3, t2, n2, r3, e2, a2));
    }) : mg(e2) && e2.forEach(function(r3, i3) {
      c2.set(i3, Yg(r3, t2, n2, i3, e2, a2));
    });
    var g2 = f2 ? void 0 : (d2 ? u2 ? sh : ah : u2 ? Vf : Mf)(e2);
    return zu(g2 || e2, function(r3, i3) {
      g2 && (i3 = r3, r3 = e2[i3]), od(c2, i3, Yg(r3, t2, n2, i3, e2, a2));
    }), c2;
  }
  M(Yg, `baseClone`);
  var Xg = Yg, Zg = 4;
  function Qg(e2) {
    return Xg(e2, Zg);
  }
  M(Qg, `clone`);
  var $g = Qg;
  function e_(e2) {
    for (var t2 = -1, n2 = e2 == null ? 0 : e2.length, r2 = 0, i2 = []; ++t2 < n2; ) {
      var a2 = e2[t2];
      a2 && (i2[r2++] = a2);
    }
    return i2;
  }
  M(e_, `compact`);
  var t_ = e_, n_ = s(1722);
  function r_(e2) {
    return this.__data__.set(e2, n_), this;
  }
  M(r_, `setCacheAdd`);
  var i_ = r_;
  function a_(e2) {
    let t2 = s;
    return this[t2(1439)].has(e2);
  }
  M(a_, `setCacheHas`);
  var o_ = a_;
  function s_(e2) {
    let t2 = s;
    var n2 = -1, r2 = e2 == null ? 0 : e2[t2(1663)];
    for (this[t2(1439)] = new Bp(); ++n2 < r2; ) this.add(e2[n2]);
  }
  M(s_, `SetCache`), s_.prototype[s(974)] = s_.prototype.push = i_, s_.prototype[s(714)] = o_;
  var c_ = s_;
  function l_(e2, t2) {
    for (var n2 = -1, r2 = e2 == null ? 0 : e2.length; ++n2 < r2; ) if (t2(e2[n2], n2, e2)) return true;
    return false;
  }
  M(l_, `arraySome`);
  var u_ = l_;
  function d_(e2, t2) {
    return e2.has(t2);
  }
  M(d_, `cacheHas`);
  var f_ = d_, p_ = 1, m_ = 2;
  function h_(e2, t2, n2, r2, i2, a2) {
    let o2 = s;
    var c2 = n2 & p_, l2 = e2[o2(1663)], u2 = t2.length;
    if (l2 != u2 && !(c2 && u2 > l2)) return false;
    var d2 = a2[o2(1419)](e2), f2 = a2[o2(1419)](t2);
    if (d2 && f2) return d2 == t2 && f2 == e2;
    var p2 = -1, m2 = true, h2 = n2 & m_ ? new c_() : void 0;
    for (a2.set(e2, t2), a2.set(t2, e2); ++p2 < l2; ) {
      var g2 = e2[p2], _2 = t2[p2];
      if (r2) var v2 = c2 ? r2(_2, g2, p2, t2, e2, a2) : r2(g2, _2, p2, e2, t2, a2);
      if (v2 !== void 0) {
        if (v2) continue;
        m2 = false;
        break;
      }
      if (h2) {
        if (!u_(t2, function(e3, t3) {
          let s2 = o2;
          if (!f_(h2, t3) && (g2 === e3 || i2(g2, e3, n2, r2, a2))) return h2[s2(1168)](t3);
        })) {
          m2 = false;
          break;
        }
      } else if (!(g2 === _2 || i2(g2, _2, n2, r2, a2))) {
        m2 = false;
        break;
      }
    }
    return a2.delete(e2), a2.delete(t2), m2;
  }
  M(h_, `equalArrays`);
  var g_ = h_;
  function __(e2) {
    var t2 = -1, n2 = Array(e2.size);
    return e2.forEach(function(e3, r2) {
      n2[++t2] = [
        r2,
        e3
      ];
    }), n2;
  }
  M(__, `mapToArray`);
  var v_ = __;
  function y_(e2) {
    var t2 = -1, n2 = Array(e2.size);
    return e2.forEach(function(e3) {
      n2[++t2] = e3;
    }), n2;
  }
  M(y_, s(1306));
  var b_ = y_, x_ = 1, S_ = 2, C_ = s(1402), w_ = `[object Date]`, T_ = `[object Error]`, E_ = `[object Map]`, D_ = s(1086), O_ = `[object RegExp]`, k_ = `[object Set]`, A_ = `[object String]`, j_ = `[object Symbol]`, M_ = `[object ArrayBuffer]`, N_ = s(1683), P_ = Qc ? Qc.prototype : void 0, F_ = P_ ? P_.valueOf : void 0;
  function I_(e2, t2, n2, r2, i2, a2, o2) {
    let c2 = s;
    switch (n2) {
      case N_:
        if (e2.byteLength != t2.byteLength || e2.byteOffset != t2[c2(701)]) return false;
        e2 = e2.buffer, t2 = t2.buffer;
      case M_:
        return !(e2.byteLength != t2.byteLength || !a2(new Dh(e2), new Dh(t2)));
      case C_:
      case w_:
      case D_:
        return rd(+e2, +t2);
      case T_:
        return e2.name == t2.name && e2.message == t2.message;
      case O_:
      case A_:
        return e2 == t2 + ``;
      case E_:
        var l2 = v_;
      case k_:
        var u2 = r2 & x_;
        if (l2 || (l2 = b_), e2.size != t2.size && !u2) return false;
        var d2 = o2.get(e2);
        if (d2) return d2 == t2;
        r2 |= S_, o2.set(e2, t2);
        var f2 = g_(l2(e2), l2(t2), r2, i2, a2, o2);
        return o2.delete(e2), f2;
      case j_:
        if (F_) return F_.call(e2) == F_.call(t2);
    }
    return false;
  }
  M(I_, `equalByTag`);
  var L_ = I_, R_ = 1, z_ = Object.prototype.hasOwnProperty;
  function B_(e2, t2, n2, r2, i2, a2) {
    let o2 = s;
    var c2 = n2 & R_, l2 = ah(e2), u2 = l2.length;
    if (u2 != ah(t2).length && !c2) return false;
    for (var d2 = u2; d2--; ) {
      var f2 = l2[d2];
      if (!(c2 ? f2 in t2 : z_.call(t2, f2))) return false;
    }
    var p2 = a2[o2(1419)](e2), m2 = a2.get(t2);
    if (p2 && m2) return p2 == t2 && m2 == e2;
    var h2 = true;
    a2.set(e2, t2), a2.set(t2, e2);
    for (var g2 = c2; ++d2 < u2; ) {
      f2 = l2[d2];
      var _2 = e2[f2], v2 = t2[f2];
      if (r2) var y2 = c2 ? r2(v2, _2, f2, t2, e2, a2) : r2(_2, v2, f2, e2, t2, a2);
      if (!(y2 === void 0 ? _2 === v2 || i2(_2, v2, n2, r2, a2) : y2)) {
        h2 = false;
        break;
      }
      g2 || (g2 = f2 == `constructor`);
    }
    if (h2 && !g2) {
      var b2 = e2.constructor, x2 = t2.constructor;
      b2 != x2 && `constructor` in e2 && `constructor` in t2 && !(typeof b2 == `function` && b2 instanceof b2 && typeof x2 == `function` && x2 instanceof x2) && (h2 = false);
    }
    return a2.delete(e2), a2.delete(t2), h2;
  }
  M(B_, `equalObjects`);
  var V_ = B_, H_ = 1, U_ = `[object Arguments]`, W_ = `[object Array]`, G_ = s(1564), K_ = Object.prototype.hasOwnProperty;
  function q_(e2, t2, n2, r2, i2, a2) {
    let o2 = s;
    var c2 = V(e2), l2 = V(t2), u2 = c2 ? W_ : Ch(e2), d2 = l2 ? W_ : Ch(t2);
    u2 = u2 == U_ ? G_ : u2, d2 = d2 == U_ ? G_ : d2;
    var f2 = u2 == G_, p2 = d2 == G_, m2 = u2 == d2;
    if (m2 && Bd(e2)) {
      if (!Bd(t2)) return false;
      c2 = true, f2 = false;
    }
    if (m2 && !f2) return a2 || (a2 = new Nm()), c2 || xf(e2) ? g_(e2, t2, n2, r2, i2, a2) : L_(e2, t2, u2, n2, r2, i2, a2);
    if (!(n2 & H_)) {
      var h2 = f2 && K_.call(e2, `__wrapped__`), g2 = p2 && K_.call(t2, o2(492));
      if (h2 || g2) {
        var _2 = h2 ? e2.value() : e2, v2 = g2 ? t2.value() : t2;
        return a2 || (a2 = new Nm()), i2(_2, v2, n2, r2, a2);
      }
    }
    return m2 ? (a2 || (a2 = new Nm()), V_(e2, t2, n2, r2, i2, a2)) : false;
  }
  M(q_, s(962));
  var J_ = q_;
  function Y_(e2, t2, n2, r2, i2) {
    return e2 === t2 ? true : e2 == null || t2 == null || !ml(e2) && !ml(t2) ? e2 !== e2 && t2 !== t2 : J_(e2, t2, n2, r2, Y_, i2);
  }
  M(Y_, s(1641));
  var X_ = Y_, Z_ = 1, Q_ = 2;
  function $_(e2, t2, n2, r2) {
    var i2 = n2[s(1663)], a2 = i2, o2 = !r2;
    if (e2 == null) return !a2;
    for (e2 = Object(e2); i2--; ) {
      var c2 = n2[i2];
      if (o2 && c2[2] ? c2[1] !== e2[c2[0]] : !(c2[0] in e2)) return false;
    }
    for (; ++i2 < a2; ) {
      c2 = n2[i2];
      var l2 = c2[0], u2 = e2[l2], d2 = c2[1];
      if (o2 && c2[2]) {
        if (u2 === void 0 && !(l2 in e2)) return false;
      } else {
        var f2 = new Nm();
        if (r2) var p2 = r2(u2, d2, l2, e2, t2, f2);
        if (!(p2 === void 0 ? X_(d2, u2, Z_ | Q_, r2, f2) : p2)) return false;
      }
    }
    return true;
  }
  M($_, s(768));
  var ev = $_;
  function tv(e2) {
    return e2 === e2 && !Ml(e2);
  }
  M(tv, `isStrictComparable`);
  var nv = tv;
  function rv(e2) {
    for (var t2 = Mf(e2), n2 = t2.length; n2--; ) {
      var r2 = t2[n2], i2 = e2[r2];
      t2[n2] = [
        r2,
        i2,
        nv(i2)
      ];
    }
    return t2;
  }
  M(rv, `getMatchData`);
  var iv = rv;
  function av(e2, t2) {
    return function(n2) {
      return n2 == null ? false : n2[e2] === t2 && (t2 !== void 0 || e2 in Object(n2));
    };
  }
  M(av, `matchesStrictComparable`);
  var ov = av;
  function sv(e2) {
    var t2 = iv(e2);
    return t2.length == 1 && t2[0][2] ? ov(t2[0][0], t2[0][1]) : function(n2) {
      return n2 === e2 || ev(n2, e2, t2);
    };
  }
  M(sv, s(483));
  var cv = sv;
  function lv(e2, t2) {
    return e2 != null && t2 in Object(e2);
  }
  M(lv, s(1217));
  var uv = lv;
  function dv(e2, t2, n2) {
    t2 = $p(t2, e2);
    for (var r2 = -1, i2 = t2.length, a2 = false; ++r2 < i2; ) {
      var o2 = nm(t2[r2]);
      if (!(a2 = e2 != null && n2(e2, o2))) break;
      e2 = e2[o2];
    }
    return a2 || ++r2 != i2 ? a2 : (i2 = e2 == null ? 0 : e2.length, !!i2 && gd(i2) && $u(o2, i2) && (V(e2) || Pd(e2)));
  }
  M(dv, `hasPath`);
  var fv = dv;
  function pv(e2, t2) {
    return e2 != null && fv(e2, t2, uv);
  }
  M(pv, s(843));
  var mv = pv, hv = 1, gv = 2;
  function _v(e2, t2) {
    return Gf(e2) && nv(t2) ? ov(nm(e2), t2) : function(n2) {
      var r2 = om(n2, e2);
      return r2 === void 0 && r2 === t2 ? mv(n2, e2) : X_(t2, r2, hv | gv);
    };
  }
  M(_v, `baseMatchesProperty`);
  var vv = _v;
  function yv(e2) {
    return function(t2) {
      return t2 == null ? void 0 : t2[e2];
    };
  }
  M(yv, `baseProperty`);
  var bv = yv;
  function xv(e2) {
    return function(t2) {
      return im(t2, e2);
    };
  }
  M(xv, `basePropertyDeep`);
  var Sv = xv;
  function Cv(e2) {
    return Gf(e2) ? bv(nm(e2)) : Sv(e2);
  }
  M(Cv, `property`);
  var wv = Cv;
  function Tv(e2) {
    return typeof e2 == s(386) ? e2 : e2 == null ? ql : typeof e2 == `object` ? V(e2) ? vv(e2[0], e2[1]) : cv(e2) : wv(e2);
  }
  M(Tv, s(623));
  var Ev = Tv;
  function Dv(e2, t2, n2, r2) {
    let i2 = s;
    for (var a2 = -1, o2 = e2 == null ? 0 : e2[i2(1663)]; ++a2 < o2; ) {
      var c2 = e2[a2];
      t2(r2, c2, n2(c2), e2);
    }
    return r2;
  }
  M(Dv, `arrayAggregator`);
  var Ov = Dv;
  function kv(e2) {
    return function(t2, n2, r2) {
      let i2 = X;
      for (var a2 = -1, o2 = Object(t2), s2 = r2(t2), c2 = s2[i2(1663)]; c2--; ) {
        var l2 = s2[e2 ? c2 : ++a2];
        if (n2(o2[l2], l2, o2) === false) break;
      }
      return t2;
    };
  }
  M(kv, `createBaseFor`);
  var Av = kv();
  function jv(e2, t2) {
    return e2 && Av(e2, t2, Mf);
  }
  M(jv, `baseForOwn`);
  var Mv = jv;
  function Nv(e2, t2) {
    return function(n2, r2) {
      if (n2 == null) return n2;
      if (!vd(n2)) return e2(n2, r2);
      for (var i2 = n2.length, a2 = t2 ? i2 : -1, o2 = Object(n2); (t2 ? a2-- : ++a2 < i2) && r2(o2[a2], a2, o2) !== false; ) ;
      return n2;
    };
  }
  M(Nv, `createBaseEach`);
  var Pv = Nv(Mv);
  function Fv(e2, t2, n2, r2) {
    return Pv(e2, function(e3, i2, a2) {
      t2(r2, e3, n2(e3), a2);
    }), r2;
  }
  M(Fv, `baseAggregator`);
  var Iv = Fv;
  function Lv(e2, t2) {
    return function(n2, r2) {
      var i2 = V(n2) ? Ov : Iv, a2 = t2 ? t2() : {};
      return i2(n2, e2, Ev(r2, 2), a2);
    };
  }
  M(Lv, `createAggregator`);
  var Rv = Lv, zv = Object.prototype, Bv = zv.hasOwnProperty, Vv = pd(function(e2, t2) {
    let n2 = s;
    e2 = Object(e2);
    var r2 = -1, i2 = t2.length, a2 = i2 > 2 ? t2[2] : void 0;
    for (a2 && bd(t2[0], t2[1], a2) && (i2 = 1); ++r2 < i2; ) for (var o2 = t2[r2], c2 = Vf(o2), l2 = -1, u2 = c2[n2(1663)]; ++l2 < u2; ) {
      var d2 = c2[l2], f2 = e2[d2];
      (f2 === void 0 || rd(f2, zv[d2]) && !Bv.call(e2, d2)) && (e2[d2] = o2[d2]);
    }
    return e2;
  });
  function Hv(e2) {
    return ml(e2) && vd(e2);
  }
  M(Hv, `isArrayLikeObject`);
  var Uv = Hv;
  function Wv(e2, t2, n2) {
    for (var r2 = -1, i2 = e2 == null ? 0 : e2.length; ++r2 < i2; ) if (n2(t2, e2[r2])) return true;
    return false;
  }
  M(Wv, `arrayIncludesWith`);
  var Gv = Wv, Kv = 200;
  function qv(e2, t2, n2, r2) {
    let i2 = s;
    var a2 = -1, o2 = Yu, c2 = true, l2 = e2[i2(1663)], u2 = [], d2 = t2.length;
    if (!l2) return u2;
    n2 && (t2 = yl(t2, hf(n2))), r2 ? (o2 = Gv, c2 = false) : t2.length >= Kv && (o2 = f_, c2 = false, t2 = new c_(t2));
    aX: for (; ++a2 < l2; ) {
      var f2 = e2[a2], p2 = n2 == null ? f2 : n2(f2);
      if (f2 = r2 || f2 !== 0 ? f2 : 0, c2 && p2 === p2) {
        for (var m2 = d2; m2--; ) if (t2[m2] === p2) continue aX;
        u2.push(f2);
      } else o2(t2, p2, r2) || u2[i2(1168)](f2);
    }
    return u2;
  }
  M(qv, `baseDifference`);
  var Jv = qv, Yv = pd(function(e2, t2) {
    return Uv(e2) ? Jv(e2, pm(t2, 1, Uv, true)) : [];
  });
  function Xv(e2) {
    var t2 = e2 == null ? 0 : e2.length;
    return t2 ? e2[t2 - 1] : void 0;
  }
  M(Xv, `last`);
  var Zv = Xv;
  function Qv(e2, t2, n2) {
    var r2 = e2 == null ? 0 : e2.length;
    return r2 ? (t2 = n2 || t2 === void 0 ? 1 : Gl(t2), vm(e2, t2 < 0 ? 0 : t2, r2)) : [];
  }
  M(Qv, s(601));
  var $v = Qv;
  function ey(e2, t2, n2) {
    var r2 = e2 == null ? 0 : e2.length;
    return r2 ? (t2 = n2 || t2 === void 0 ? 1 : Gl(t2), t2 = r2 - t2, vm(e2, 0, t2 < 0 ? 0 : t2)) : [];
  }
  M(ey, `dropRight`);
  var ty = ey;
  function ny(e2) {
    return typeof e2 == `function` ? e2 : ql;
  }
  M(ny, `castFunction`);
  var ry = ny;
  function iy(e2, t2) {
    return (V(e2) ? zu : Pv)(e2, ry(t2));
  }
  M(iy, `forEach`);
  var W = iy;
  function ay(e2, t2) {
    for (var n2 = -1, r2 = e2 == null ? 0 : e2.length; ++n2 < r2; ) if (!t2(e2[n2], n2, e2)) return false;
    return true;
  }
  M(ay, `arrayEvery`);
  var oy = ay;
  function sy(e2, t2) {
    var n2 = true;
    return Pv(e2, function(e3, r2, i2) {
      return n2 = !!t2(e3, r2, i2), n2;
    }), n2;
  }
  M(sy, `baseEvery`);
  var cy = sy;
  function ly(e2, t2, n2) {
    var r2 = V(e2) ? oy : cy;
    return n2 && bd(e2, t2, n2) && (t2 = void 0), r2(e2, Ev(t2, 3));
  }
  M(ly, `every`);
  var uy = ly;
  function dy(e2, t2) {
    var n2 = [];
    return Pv(e2, function(e3, r2, i2) {
      t2(e3, r2, i2) && n2.push(e3);
    }), n2;
  }
  M(dy, `baseFilter`);
  var fy = dy;
  function py(e2, t2) {
    return (V(e2) ? Gm : fy)(e2, Ev(t2, 3));
  }
  M(py, `filter`);
  var my = py;
  function hy(e2) {
    return function(t2, n2, r2) {
      var i2 = Object(t2);
      if (!vd(t2)) {
        var a2 = Ev(n2, 3);
        t2 = Mf(t2), n2 = M(function(e3) {
          return a2(i2[e3], e3, i2);
        }, `predicate`);
      }
      var o2 = e2(t2, n2, r2);
      return o2 > -1 ? i2[a2 ? t2[o2] : o2] : void 0;
    };
  }
  M(hy, `createFind`);
  var gy = hy, _y = Math[s(513)];
  function vy(e2, t2, n2) {
    var r2 = e2 == null ? 0 : e2[s(1663)];
    if (!r2) return -1;
    var i2 = n2 == null ? 0 : Gl(n2);
    return i2 < 0 && (i2 = _y(r2 + i2, 0)), Vu(e2, Ev(t2, 3), i2);
  }
  M(vy, `findIndex`);
  var yy = gy(vy);
  function by(e2) {
    return e2 && e2.length ? e2[0] : void 0;
  }
  M(by, `head`);
  var xy = by;
  function Sy(e2, t2) {
    var n2 = -1, r2 = vd(e2) ? Array(e2.length) : [];
    return Pv(e2, function(e3, i2, a2) {
      r2[++n2] = t2(e3, i2, a2);
    }), r2;
  }
  M(Sy, `baseMap`);
  var Cy = Sy;
  function wy(e2, t2) {
    return (V(e2) ? yl : Cy)(e2, Ev(t2, 3));
  }
  M(wy, s(311));
  var G = wy;
  function Ty(e2, t2) {
    return pm(G(e2, t2), 1);
  }
  M(Ty, `flatMap`);
  var Ey = Ty, Dy = Object.prototype.hasOwnProperty, Oy = Rv(function(e2, t2, n2) {
    let r2 = s;
    Dy[r2(1066)](e2, n2) ? e2[n2][r2(1168)](t2) : td(e2, n2, [
      t2
    ]);
  }), ky = Object.prototype[s(577)];
  function Ay(e2, t2) {
    return e2 != null && ky.call(e2, t2);
  }
  M(Ay, `baseHas`);
  var jy = Ay;
  function My(e2, t2) {
    return e2 != null && fv(e2, t2, jy);
  }
  M(My, `has`);
  var K = My, Ny = `[object String]`;
  function Py(e2) {
    return typeof e2 == `string` || !V(e2) && ml(e2) && fl(e2) == Ny;
  }
  M(Py, s(861));
  var Fy = Py;
  function Iy(e2, t2) {
    return yl(t2, function(t3) {
      return e2[t3];
    });
  }
  M(Iy, s(438));
  var Ly = Iy;
  function Ry(e2) {
    return e2 == null ? [] : Ly(e2, Mf(e2));
  }
  M(Ry, `values`);
  var zy = Ry, By = Math.max;
  function Vy(e2, t2, n2, r2) {
    e2 = vd(e2) ? e2 : zy(e2), n2 = n2 && !r2 ? Gl(n2) : 0;
    var i2 = e2.length;
    return n2 < 0 && (n2 = By(i2 + n2, 0)), Fy(e2) ? n2 <= i2 && e2.indexOf(t2, n2) > -1 : !!i2 && qu(e2, t2, n2) > -1;
  }
  M(Vy, `includes`);
  var Hy = Vy, Uy = Math[s(513)];
  function Wy(e2, t2, n2) {
    var r2 = e2 == null ? 0 : e2[s(1663)];
    if (!r2) return -1;
    var i2 = n2 == null ? 0 : Gl(n2);
    return i2 < 0 && (i2 = Uy(r2 + i2, 0)), qu(e2, t2, i2);
  }
  M(Wy, `indexOf`);
  var Gy = Wy, Ky = `[object Map]`, qy = s(633), Jy = Object.prototype.hasOwnProperty;
  function Yy(e2) {
    if (e2 == null) return true;
    if (vd(e2) && (V(e2) || typeof e2 == `string` || typeof e2.splice == `function` || Bd(e2) || xf(e2) || Pd(e2))) return !e2.length;
    var t2 = Ch(e2);
    if (t2 == Ky || t2 == qy) return !e2.size;
    if (Td(e2)) return !Af(e2).length;
    for (var n2 in e2) if (Jy.call(e2, n2)) return false;
    return true;
  }
  M(Yy, `isEmpty`);
  var q = Yy, Xy = `[object RegExp]`;
  function Zy(e2) {
    return ml(e2) && fl(e2) == Xy;
  }
  M(Zy, `baseIsRegExp`);
  var Qy = Zy, $y = yf && yf.isRegExp, eb = $y ? hf($y) : Qy;
  function tb(e2) {
    return e2 === void 0;
  }
  M(tb, `isUndefined`);
  var nb = tb, rb = `Expected a function`;
  function ib(e2) {
    if (typeof e2 != `function`) throw TypeError(rb);
    return function() {
      let t2 = X;
      var n2 = arguments;
      switch (n2.length) {
        case 0:
          return !e2.call(this);
        case 1:
          return !e2.call(this, n2[0]);
        case 2:
          return !e2[t2(1066)](this, n2[0], n2[1]);
        case 3:
          return !e2[t2(1066)](this, n2[0], n2[1], n2[2]);
      }
      return !e2.apply(this, n2);
    };
  }
  M(ib, s(801));
  var ab = ib;
  function ob(e2, t2, n2, r2) {
    if (!Ml(e2)) return e2;
    t2 = $p(t2, e2);
    for (var i2 = -1, a2 = t2.length, o2 = a2 - 1, s2 = e2; s2 != null && ++i2 < a2; ) {
      var c2 = nm(t2[i2]), l2 = n2;
      if (c2 === `__proto__` || c2 === `constructor` || c2 === `prototype`) return e2;
      if (i2 != o2) {
        var u2 = s2[c2];
        l2 = r2 ? r2(u2, c2, s2) : void 0, l2 === void 0 && (l2 = Ml(u2) ? u2 : $u(t2[i2 + 1]) ? [] : {});
      }
      od(s2, c2, l2), s2 = s2[c2];
    }
    return e2;
  }
  M(ob, `baseSet`);
  var sb = ob;
  function cb(e2, t2, n2) {
    for (var r2 = -1, i2 = t2.length, a2 = {}; ++r2 < i2; ) {
      var o2 = t2[r2], s2 = im(e2, o2);
      n2(s2, o2) && sb(a2, $p(o2, e2), s2);
    }
    return a2;
  }
  M(cb, `basePickBy`);
  var lb = cb;
  function ub(e2, t2) {
    if (e2 == null) return {};
    var n2 = yl(sh(e2), function(e3) {
      return [
        e3
      ];
    });
    return t2 = Ev(t2), lb(e2, n2, function(e3, n3) {
      return t2(e3, n3[0]);
    });
  }
  M(ub, s(515));
  var db = ub;
  function fb(e2, t2, n2, r2, i2) {
    return i2(e2, function(e3, i3, a2) {
      n2 = r2 ? (r2 = false, e3) : t2(n2, e3, i3, a2);
    }), n2;
  }
  M(fb, s(1147));
  var pb = fb;
  function mb(e2, t2, n2) {
    var r2 = V(e2) ? bm : pb, i2 = arguments.length < 3;
    return r2(e2, Ev(t2, 4), n2, i2, Pv);
  }
  M(mb, `reduce`);
  var hb = mb;
  function gb(e2, t2) {
    return (V(e2) ? Gm : fy)(e2, ab(Ev(t2, 3)));
  }
  M(gb, s(314));
  var _b = gb;
  function vb(e2, t2) {
    var n2;
    return Pv(e2, function(e3, r2, i2) {
      return n2 = t2(e3, r2, i2), !n2;
    }), !!n2;
  }
  M(vb, `baseSome`);
  var yb = vb;
  function bb(e2, t2, n2) {
    var r2 = V(e2) ? u_ : yb;
    return n2 && bd(e2, t2, n2) && (t2 = void 0), r2(e2, Ev(t2, 3));
  }
  M(bb, `some`);
  var xb = bb, Sb = uh && 1 / b_(new uh([
    ,
    -0
  ]))[1] == 1 / 0 ? function(e2) {
    return new uh(e2);
  } : Eu, Cb = 200;
  function wb(e2, t2, n2) {
    let r2 = s;
    var i2 = -1, a2 = Yu, o2 = e2.length, c2 = true, l2 = [], u2 = l2;
    if (n2) c2 = false, a2 = Gv;
    else if (o2 >= Cb) {
      var d2 = t2 ? null : Sb(e2);
      if (d2) return b_(d2);
      c2 = false, a2 = f_, u2 = new c_();
    } else u2 = t2 ? [] : l2;
    aX: for (; ++i2 < o2; ) {
      var f2 = e2[i2], p2 = t2 ? t2(f2) : f2;
      if (f2 = n2 || f2 !== 0 ? f2 : 0, c2 && p2 === p2) {
        for (var m2 = u2.length; m2--; ) if (u2[m2] === p2) continue aX;
        t2 && u2[r2(1168)](p2), l2.push(f2);
      } else a2(u2, p2, n2) || (u2 !== l2 && u2.push(p2), l2.push(f2));
    }
    return l2;
  }
  M(wb, `baseUniq`);
  var Tb = wb;
  function Eb(e2) {
    return e2 && e2[s(1663)] ? Tb(e2) : [];
  }
  M(Eb, s(1516));
  var Db = Eb;
  function Ob(e2) {
    console && console[s(1527)] && console.error(`Error: ` + e2);
  }
  M(Ob, `PRINT_ERROR`);
  function kb(e2) {
    console && console.warn && console.warn(`Warning: ` + e2);
  }
  M(kb, `PRINT_WARNING`);
  function Ab(e2) {
    let t2 = s, n2 = (/* @__PURE__ */ new Date()).getTime(), r2 = e2();
    return {
      time: (/* @__PURE__ */ new Date())[t2(1100)]() - n2,
      value: r2
    };
  }
  M(Ab, `timer`);
  function jb(e2) {
    function t2() {
    }
    M(t2, `FakeConstructor`), t2.prototype = e2;
    let n2 = new t2();
    function r2() {
      return typeof n2.bar;
    }
    return M(r2, `fakeAccess`), r2(), r2(), e2;
  }
  M(jb, `toFastProperties`);
  function Mb(e2) {
    let t2 = s;
    return Nb(e2) ? e2[t2(948)] : e2.name;
  }
  M(Mb, `tokenLabel`);
  function Nb(e2) {
    let t2 = s;
    return Fy(e2.LABEL) && e2[t2(948)] !== ``;
  }
  M(Nb, `hasTokenLabel`);
  var Pb = (g = class {
    get definition() {
      return this._definition;
    }
    set definition(e2) {
      this._definition = e2;
    }
    constructor(e2) {
      this._definition = e2;
    }
    accept(e2) {
      e2[s(349)](this), W(this.definition, (t2) => {
        t2.accept(e2);
      });
    }
  }, M(g, s(698)), g), Fb = (_ = class extends Pb {
    constructor(e2) {
      super([]), this.idx = 1, Pf(this, db(e2, (e3) => e3 !== void 0));
    }
    set definition(e2) {
    }
    get definition() {
      let e2 = s;
      return this[e2(896)] === void 0 ? [] : this.referencedRule.definition;
    }
    accept(e2) {
      e2.visit(this);
    }
  }, M(_, s(558)), _), Ib = (v = class extends Pb {
    constructor(e2) {
      let t2 = s;
      super(e2.definition), this[t2(1337)] = ``, Pf(this, db(e2, (e3) => e3 !== void 0));
    }
  }, M(v, `Rule`), v), Lb = (y = class extends Pb {
    constructor(e2) {
      super(e2.definition), this.ignoreAmbiguities = false, Pf(this, db(e2, (e3) => e3 !== void 0));
    }
  }, M(y, `Alternative`), y), Rb = (b = class extends Pb {
    constructor(e2) {
      super(e2.definition), this.idx = 1, Pf(this, db(e2, (e3) => e3 !== void 0));
    }
  }, M(b, `Option`), b), zb = (x = class extends Pb {
    constructor(e2) {
      super(e2.definition), this.idx = 1, Pf(this, db(e2, (e3) => e3 !== void 0));
    }
  }, M(x, `RepetitionMandatory`), x), Bb = (ee = class extends Pb {
    constructor(e2) {
      super(e2[s(957)]), this.idx = 1, Pf(this, db(e2, (e3) => e3 !== void 0));
    }
  }, M(ee, `RepetitionMandatoryWithSeparator`), ee), Vb = (S = class extends Pb {
    constructor(e2) {
      super(e2.definition), this.idx = 1, Pf(this, db(e2, (e3) => e3 !== void 0));
    }
  }, M(S, `Repetition`), S), Hb = (C = class extends Pb {
    constructor(e2) {
      super(e2.definition), this.idx = 1, Pf(this, db(e2, (e3) => e3 !== void 0));
    }
  }, M(C, `RepetitionWithSeparator`), C), Ub = (w = class extends Pb {
    get [s(957)]() {
      return this._definition;
    }
    set definition(e2) {
      this._definition = e2;
    }
    constructor(e2) {
      let t2 = s;
      super(e2.definition), this[t2(484)] = 1, this.ignoreAmbiguities = false, this.hasPredicates = false, Pf(this, db(e2, (e3) => e3 !== void 0));
    }
  }, M(w, s(1528)), w), J = (te = class {
    constructor(e2) {
      this.idx = 1, Pf(this, db(e2, (e3) => e3 !== void 0));
    }
    accept(e2) {
      e2[s(349)](this);
    }
  }, M(te, `Terminal`), te);
  function Wb(e2) {
    return G(e2, Gb);
  }
  M(Wb, s(463));
  function Gb(e2) {
    let t2 = s;
    function n2(e3) {
      return G(e3, Gb);
    }
    if (M(n2, `convertDefinition`), e2 instanceof Fb) {
      let n3 = {
        type: `NonTerminal`,
        name: e2[t2(1535)],
        idx: e2.idx
      };
      return Fy(e2.label) && (n3.label = e2.label), n3;
    } else if (e2 instanceof Lb) return {
      type: `Alternative`,
      definition: n2(e2[t2(957)])
    };
    else if (e2 instanceof Rb) return {
      type: `Option`,
      idx: e2.idx,
      definition: n2(e2.definition)
    };
    else if (e2 instanceof zb) return {
      type: t2(350),
      idx: e2.idx,
      definition: n2(e2.definition)
    };
    else if (e2 instanceof Bb) return {
      type: t2(1131),
      idx: e2[t2(484)],
      separator: Gb(new J({
        terminalType: e2[t2(1541)]
      })),
      definition: n2(e2.definition)
    };
    else if (e2 instanceof Hb) return {
      type: `RepetitionWithSeparator`,
      idx: e2.idx,
      separator: Gb(new J({
        terminalType: e2.separator
      })),
      definition: n2(e2.definition)
    };
    else if (e2 instanceof Vb) return {
      type: t2(1097),
      idx: e2.idx,
      definition: n2(e2.definition)
    };
    else if (e2 instanceof Ub) return {
      type: `Alternation`,
      idx: e2.idx,
      definition: n2(e2.definition)
    };
    else if (e2 instanceof J) {
      let n3 = {
        type: `Terminal`,
        name: e2[t2(767)].name,
        label: Mb(e2.terminalType),
        idx: e2.idx
      };
      Fy(e2[t2(1365)]) && (n3.terminalLabel = e2.label);
      let r2 = e2[t2(767)].PATTERN;
      return e2.terminalType.PATTERN && (n3.pattern = eb(r2) ? r2.source : r2), n3;
    } else if (e2 instanceof Ib) return {
      type: t2(877),
      name: e2.name,
      orgText: e2.orgText,
      definition: n2(e2.definition)
    };
    else throw Error(`non exhaustive match`);
  }
  M(Gb, `serializeProduction`);
  var Kb = (T = class {
    visit(e2) {
      let t2 = s, n2 = e2;
      switch (n2[t2(1406)]) {
        case Fb:
          return this.visitNonTerminal(n2);
        case Lb:
          return this.visitAlternative(n2);
        case Rb:
          return this.visitOption(n2);
        case zb:
          return this.visitRepetitionMandatory(n2);
        case Bb:
          return this[t2(664)](n2);
        case Hb:
          return this.visitRepetitionWithSeparator(n2);
        case Vb:
          return this[t2(1265)](n2);
        case Ub:
          return this.visitAlternation(n2);
        case J:
          return this.visitTerminal(n2);
        case Ib:
          return this.visitRule(n2);
        default:
          throw Error(`non exhaustive match`);
      }
    }
    [s(1726)](e2) {
    }
    visitAlternative(e2) {
    }
    visitOption(e2) {
    }
    [s(1265)](e2) {
    }
    visitRepetitionMandatory(e2) {
    }
    visitRepetitionMandatoryWithSeparator(e2) {
    }
    visitRepetitionWithSeparator(e2) {
    }
    visitAlternation(e2) {
    }
    visitTerminal(e2) {
    }
    visitRule(e2) {
    }
  }, M(T, s(1561)), T);
  function qb(e2) {
    return e2 instanceof Lb || e2 instanceof Rb || e2 instanceof Vb || e2 instanceof zb || e2 instanceof Bb || e2 instanceof Hb || e2 instanceof J || e2 instanceof Ib;
  }
  M(qb, `isSequenceProd`);
  function Jb(e2, t2 = []) {
    return e2 instanceof Rb || e2 instanceof Vb || e2 instanceof Hb ? true : e2 instanceof Ub ? xb(e2.definition, (e3) => Jb(e3, t2)) : e2 instanceof Fb && Hy(t2, e2) ? false : e2 instanceof Pb ? (e2 instanceof Fb && t2.push(e2), uy(e2.definition, (e3) => Jb(e3, t2))) : false;
  }
  M(Jb, `isOptionalProd`);
  function Yb(e2) {
    return e2 instanceof Ub;
  }
  M(Yb, `isBranchingProd`);
  function Xb(e2) {
    let t2 = s;
    if (e2 instanceof Fb) return t2(610);
    if (e2 instanceof Rb) return `OPTION`;
    if (e2 instanceof Ub) return `OR`;
    if (e2 instanceof zb) return `AT_LEAST_ONE`;
    if (e2 instanceof Bb) return `AT_LEAST_ONE_SEP`;
    if (e2 instanceof Hb) return `MANY_SEP`;
    if (e2 instanceof Vb) return `MANY`;
    if (e2 instanceof J) return `CONSUME`;
    throw Error(`non exhaustive match`);
  }
  M(Xb, `getProductionDslName`);
  var Zb = (E = class {
    walk(e2, t2 = []) {
      W(e2.definition, (n2, r2) => {
        let i2 = X, a2 = $v(e2.definition, r2 + 1);
        if (n2 instanceof Fb) this[i2(711)](n2, a2, t2);
        else if (n2 instanceof J) this.walkTerminal(n2, a2, t2);
        else if (n2 instanceof Lb) this.walkFlat(n2, a2, t2);
        else if (n2 instanceof Rb) this.walkOption(n2, a2, t2);
        else if (n2 instanceof zb) this.walkAtLeastOne(n2, a2, t2);
        else if (n2 instanceof Bb) this.walkAtLeastOneSep(n2, a2, t2);
        else if (n2 instanceof Hb) this.walkManySep(n2, a2, t2);
        else if (n2 instanceof Vb) this.walkMany(n2, a2, t2);
        else if (n2 instanceof Ub) this.walkOr(n2, a2, t2);
        else throw Error(`non exhaustive match`);
      });
    }
    walkTerminal(e2, t2, n2) {
    }
    walkProdRef(e2, t2, n2) {
    }
    walkFlat(e2, t2, n2) {
      let r2 = t2.concat(n2);
      this.walk(e2, r2);
    }
    walkOption(e2, t2, n2) {
      let r2 = t2[s(1758)](n2);
      this.walk(e2, r2);
    }
    walkAtLeastOne(e2, t2, n2) {
      let r2 = s, i2 = [
        new Rb({
          definition: e2[r2(957)]
        })
      ][r2(1758)](t2, n2);
      this.walk(e2, i2);
    }
    walkAtLeastOneSep(e2, t2, n2) {
      let r2 = Qb(e2, t2, n2);
      this.walk(e2, r2);
    }
    walkMany(e2, t2, n2) {
      let r2 = s, i2 = [
        new Rb({
          definition: e2.definition
        })
      ][r2(1758)](t2, n2);
      this.walk(e2, i2);
    }
    walkManySep(e2, t2, n2) {
      let r2 = Qb(e2, t2, n2);
      this.walk(e2, r2);
    }
    walkOr(e2, t2, n2) {
      let r2 = s, i2 = t2.concat(n2);
      W(e2[r2(957)], (e3) => {
        let t3 = new Lb({
          definition: [
            e3
          ]
        });
        this.walk(t3, i2);
      });
    }
  }, M(E, s(1755)), E);
  function Qb(e2, t2, n2) {
    let r2 = s;
    return [
      new Rb({
        definition: [
          new J({
            terminalType: e2[r2(1541)]
          })
        ][r2(1758)](e2.definition)
      })
    ].concat(t2, n2);
  }
  M(Qb, `restForRepetitionWithSeparator`);
  function $b(e2) {
    if (e2 instanceof Fb) return $b(e2.referencedRule);
    if (e2 instanceof J) return nx(e2);
    if (qb(e2)) return ex(e2);
    if (Yb(e2)) return tx(e2);
    throw Error(`non exhaustive match`);
  }
  M($b, `first`);
  function ex(e2) {
    let t2 = s, n2 = [], r2 = e2[t2(957)], i2 = 0, a2 = r2.length > i2, o2, c2 = true;
    for (; a2 && c2; ) o2 = r2[i2], c2 = Jb(o2), n2 = n2[t2(1758)]($b(o2)), i2 += 1, a2 = r2[t2(1663)] > i2;
    return Db(n2);
  }
  M(ex, `firstForSequence`);
  function tx(e2) {
    return Db(hm(G(e2.definition, (e3) => $b(e3))));
  }
  M(tx, `firstForBranching`);
  function nx(e2) {
    return [
      e2.terminalType
    ];
  }
  M(nx, `firstForTerminal`);
  var rx = `_~IN~_`, ix = (ne = class extends Zb {
    constructor(e2) {
      super(), this.topProd = e2, this.follows = {};
    }
    startWalking() {
      return this.walk(this.topProd), this.follows;
    }
    walkTerminal(e2, t2, n2) {
    }
    walkProdRef(e2, t2, n2) {
      let r2 = s, i2 = ox(e2[r2(896)], e2[r2(484)]) + this.topProd.name, a2 = $b(new Lb({
        definition: t2[r2(1758)](n2)
      }));
      this.follows[i2] = a2;
    }
  }, M(ne, `ResyncFollowsWalker`), ne);
  function ax(e2) {
    let t2 = {};
    return W(e2, (e3) => {
      let n2 = X;
      Pf(t2, new ix(e3)[n2(1434)]());
    }), t2;
  }
  M(ax, `computeAllProdsFollows`);
  function ox(e2, t2) {
    return e2[s(747)] + t2 + rx;
  }
  M(ox, `buildBetweenProdsFollowPrefix`);
  var sx = {}, cx = new Zs();
  function lx(e2) {
    let t2 = s, n2 = e2.toString();
    if (sx.hasOwnProperty(n2)) return sx[n2];
    {
      let e3 = cx[t2(1692)](n2);
      return sx[n2] = e3, e3;
    }
  }
  M(lx, `getRegExpAst`);
  function ux() {
    sx = {};
  }
  M(ux, `clearRegExpParserCache`);
  var dx = s(647), fx = s(845);
  function px(e2, t2 = false) {
    let n2 = s;
    try {
      let t3 = lx(e2);
      return mx(t3.value, {}, t3.flags.ignoreCase);
    } catch (r2) {
      if (r2[n2(1417)] === dx) t2 && kb(fx + n2(408) + e2.toString() + ` >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);
      else {
        let r3 = ``;
        t2 && (r3 = `
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`), Ob(fx + `
	Failed parsing: < ` + e2.toString() + n2(795) + r3);
      }
    }
    return [];
  }
  M(px, `getOptimizedStartCodesIndices`);
  function mx(e2, t2, n2) {
    let r2 = s;
    switch (e2.type) {
      case `Disjunction`:
        for (let i3 = 0; i3 < e2.value.length; i3++) mx(e2[r2(1371)][i3], t2, n2);
        break;
      case `Alternative`:
        let i2 = e2[r2(1371)];
        for (let e3 = 0; e3 < i2.length; e3++) {
          let a2 = i2[e3];
          switch (a2.type) {
            case r2(878):
            case `GroupBackReference`:
            case `Lookahead`:
            case `NegativeLookahead`:
            case r2(1005):
            case `NegativeLookbehind`:
            case `StartAnchor`:
            case `WordBoundary`:
            case `NonWordBoundary`:
              continue;
          }
          let o2 = a2;
          switch (o2.type) {
            case `Character`:
              hx(o2.value, t2, n2);
              break;
            case `Set`:
              if (o2[r2(1595)] === true) throw Error(dx);
              W(o2[r2(1371)], (e4) => {
                if (typeof e4 == r2(1539)) hx(e4, t2, n2);
                else {
                  let r3 = e4;
                  if (n2 === true) for (let e5 = r3.from; e5 <= r3.to; e5++) hx(e5, t2, n2);
                  else {
                    for (let e5 = r3.from; e5 <= r3.to && e5 < tS; e5++) hx(e5, t2, n2);
                    if (r3.to >= tS) {
                      let e5 = r3.from >= tS ? r3.from : tS, n3 = r3.to, i3 = rS(e5), a3 = rS(n3);
                      for (let e6 = i3; e6 <= a3; e6++) t2[e6] = e6;
                    }
                  }
                }
              });
              break;
            case `Group`:
              mx(o2[r2(1371)], t2, n2);
              break;
            default:
              throw Error(`Non Exhaustive Match`);
          }
          let s2 = o2.quantifier !== void 0 && o2.quantifier.atLeast === 0;
          if (o2.type === `Group` && vx(o2) === false || o2.type !== `Group` && s2 === false) break;
        }
        break;
      default:
        throw Error(`non exhaustive match!`);
    }
    return zy(t2);
  }
  M(mx, `firstCharOptimizedIndices`);
  function hx(e2, t2, n2) {
    let r2 = rS(e2);
    t2[r2] = r2, n2 === true && gx(e2, t2);
  }
  M(hx, s(540));
  function gx(e2, t2) {
    let n2 = String.fromCharCode(e2), r2 = n2.toUpperCase();
    if (r2 !== n2) {
      let e3 = rS(r2.charCodeAt(0));
      t2[e3] = e3;
    } else {
      let e3 = n2.toLowerCase();
      if (e3 !== n2) {
        let n3 = rS(e3.charCodeAt(0));
        t2[n3] = n3;
      }
    }
  }
  M(gx, `handleIgnoreCase`);
  function _x(e2, t2) {
    return yy(e2.value, (e3) => {
      let n2 = X;
      if (typeof e3 == `number`) return Hy(t2, e3);
      {
        let r2 = e3;
        return yy(t2, (e4) => r2[n2(1509)] <= e4 && e4 <= r2.to) !== void 0;
      }
    });
  }
  M(_x, `findCode`);
  function vx(e2) {
    let t2 = s, n2 = e2[t2(521)];
    return n2 && n2.atLeast === 0 ? true : e2[t2(1371)] ? V(e2.value) ? uy(e2.value, vx) : vx(e2[t2(1371)]) : false;
  }
  M(vx, `isWholeOptional`);
  var yx = (D = class extends Qs {
    constructor(e2) {
      let t2 = s;
      super(), this[t2(849)] = e2, this.found = false;
    }
    visitChildren(e2) {
      let t2 = s;
      if (this.found !== true) {
        switch (e2.type) {
          case `Lookahead`:
            this.visitLookahead(e2);
            return;
          case `NegativeLookahead`:
            this.visitNegativeLookahead(e2);
            return;
          case `Lookbehind`:
            this[t2(721)](e2);
            return;
          case `NegativeLookbehind`:
            this.visitNegativeLookbehind(e2);
            return;
        }
        super.visitChildren(e2);
      }
    }
    visitCharacter(e2) {
      Hy(this.targetCharCodes, e2.value) && (this.found = true);
    }
    visitSet(e2) {
      let t2 = s;
      e2[t2(1595)] ? _x(e2, this[t2(849)]) === void 0 && (this.found = true) : _x(e2, this.targetCharCodes) !== void 0 && (this[t2(1607)] = true);
    }
  }, M(D, `CharCodeFinder`), D);
  function bx(e2, t2) {
    let n2 = s;
    if (t2 instanceof RegExp) {
      let r2 = lx(t2), i2 = new yx(e2);
      return i2[n2(349)](r2), i2.found;
    } else return yy(t2, (t3) => Hy(e2, t3.charCodeAt(0))) !== void 0;
  }
  M(bx, `canMatchCharCode`);
  var xx = `PATTERN`, Sx = s(503), Cx = `modes`, wx = typeof RegExp(s(1270)).sticky == s(821);
  function Tx(e2, t2) {
    t2 = Vv(t2, {
      useSticky: wx,
      debug: false,
      safeMode: false,
      positionTracking: `full`,
      lineTerminatorCharacters: [
        `\r`,
        `
`
      ],
      tracer: M((e3, t3) => t3(), `tracer`)
    });
    let n2 = t2.tracer;
    n2(`initCharCodeToOptimizedIndexMap`, () => {
      iS();
    });
    let r2;
    n2(`Reject Lexer.NA`, () => {
      r2 = _b(e2, (e3) => e3[xx] === CS.NA);
    });
    let i2 = false, a2;
    n2(`Transform Patterns`, () => {
      i2 = false, a2 = G(r2, (e3) => {
        let n3 = X, r3 = e3[xx];
        if (eb(r3)) {
          let e4 = r3.source;
          return e4[n3(1663)] === 1 && e4 !== `^` && e4 !== `$` && e4 !== `.` && !r3[n3(1521)] ? e4 : e4.length === 2 && e4[0] === `\\` && !Hy([
            `d`,
            `D`,
            `s`,
            `S`,
            `t`,
            `r`,
            `n`,
            `t`,
            `0`,
            `c`,
            `b`,
            `B`,
            `f`,
            `v`,
            `w`,
            `W`
          ], e4[1]) ? e4[1] : t2.useSticky ? Wx(r3) : Ux(r3);
        } else if ($l(r3)) return i2 = true, {
          exec: r3
        };
        else if (typeof r3 == n3(716)) return i2 = true, r3;
        else if (typeof r3 == `string`) {
          if (r3[n3(1663)] === 1) return r3;
          {
            let e4 = r3.replace(/[\\^$.*+?()[\]{}|]/g, `\\$&`), n4 = new RegExp(e4);
            return t2.useSticky ? Wx(n4) : Ux(n4);
          }
        } else throw Error(`non exhaustive match`);
      });
    });
    let o2, s2, c2, l2, u2;
    n2(`misc mapping`, () => {
      let e3 = X;
      o2 = G(r2, (t3) => t3[e3(1142)]), s2 = G(r2, (t3) => {
        let n3 = t3[e3(675)];
        if (n3 !== CS.SKIPPED) {
          if (Fy(n3)) return n3;
          if (nb(n3)) return false;
          throw Error(`non exhaustive match`);
        }
      }), c2 = G(r2, (e4) => {
        let t3 = e4.LONGER_ALT;
        if (t3) return V(t3) ? G(t3, (e5) => Gy(r2, e5)) : [
          Gy(r2, t3)
        ];
      }), l2 = G(r2, (t3) => t3[e3(1400)]), u2 = G(r2, (t3) => K(t3, e3(1280)));
    });
    let d2;
    n2(`Line Terminator Handling`, () => {
      let e3 = X, n3 = $x(t2[e3(983)]);
      d2 = G(r2, (e4) => false), t2.positionTracking !== `onlyOffset` && (d2 = G(r2, (t3) => K(t3, e3(648)) ? !!t3.LINE_BREAKS : Zx(t3, n3) === false && bx(n3, t3[e3(373)])));
    });
    let f2, p2, m2, h2;
    n2(`Misc Mapping #2`, () => {
      f2 = G(r2, Jx), p2 = G(a2, Yx), m2 = hb(r2, (e3, t3) => {
        let n3 = t3.GROUP;
        return Fy(n3) && n3 !== CS.SKIPPED && (e3[n3] = []), e3;
      }, {}), h2 = G(a2, (e3, t3) => ({
        pattern: a2[t3],
        longerAlt: c2[t3],
        canLineTerminator: d2[t3],
        isCustom: f2[t3],
        short: p2[t3],
        group: s2[t3],
        push: l2[t3],
        pop: u2[t3],
        tokenTypeIdx: o2[t3],
        tokenType: r2[t3]
      }));
    });
    let g2 = true, _2 = [];
    return t2.safeMode || n2(`First Char Optimization`, () => {
      _2 = hb(r2, (e3, n3, r3) => {
        let i3 = X;
        if (typeof n3.PATTERN == `string`) eS(e3, rS(n3.PATTERN[i3(1129)](0)), h2[r3]);
        else if (V(n3[i3(1036)])) {
          let t3;
          W(n3.START_CHARS_HINT, (n4) => {
            let i4 = rS(typeof n4 == `string` ? n4.charCodeAt(0) : n4);
            t3 !== i4 && (t3 = i4, eS(e3, i4, h2[r3]));
          });
        } else if (eb(n3[i3(373)])) if (n3.PATTERN.unicode) g2 = false, t2[i3(1116)] && Ob(fx + `	Unable to analyze < ` + n3.PATTERN[i3(752)]() + i3(622));
        else {
          let i4 = px(n3.PATTERN, t2.ensureOptimizations);
          q(i4) && (g2 = false), W(i4, (t3) => {
            eS(e3, t3, h2[r3]);
          });
        }
        else t2.ensureOptimizations && Ob(fx + `	TokenType: <` + n3.name + i3(1033)), g2 = false;
        return e3;
      }, []);
    }), {
      emptyGroups: m2,
      patternIdxToConfig: h2,
      charCodeToPatternIdxToConfig: _2,
      hasCustom: i2,
      canBeOptimized: g2
    };
  }
  M(Tx, `analyzeTokenTypes`);
  function Ex(e2, t2) {
    let n2 = s, r2 = [], i2 = Ox(e2);
    r2 = r2.concat(i2.errors);
    let a2 = kx(i2[n2(398)]), o2 = a2.valid;
    return r2 = r2.concat(a2.errors), r2 = r2[n2(1758)](Dx(o2)), r2 = r2.concat(Lx(o2)), r2 = r2.concat(Rx(o2, t2)), r2 = r2.concat(zx(o2)), r2;
  }
  M(Ex, `validatePatterns`);
  function Dx(e2) {
    let t2 = [], n2 = my(e2, (e3) => eb(e3[xx]));
    return t2 = t2.concat(jx(n2)), t2 = t2.concat(Px(n2)), t2 = t2.concat(Fx(n2)), t2 = t2.concat(Ix(n2)), t2 = t2.concat(Mx(n2)), t2;
  }
  M(Dx, s(1778));
  function Ox(e2) {
    let t2 = s, n2 = my(e2, (e3) => !K(e3, xx));
    return {
      errors: G(n2, (e3) => ({
        message: t2(1775) + e3.name + `<- missing static 'PATTERN' property`,
        type: xS.MISSING_PATTERN,
        tokenTypes: [
          e3
        ]
      })),
      valid: Yv(e2, n2)
    };
  }
  M(Ox, `findMissingPatterns`);
  function kx(e2) {
    let t2 = s, n2 = my(e2, (e3) => {
      let t3 = e3[xx];
      return !eb(t3) && !$l(t3) && !K(t3, `exec`) && !Fy(t3);
    });
    return {
      errors: G(n2, (e3) => ({
        message: t2(1775) + e3.name + t2(1399),
        type: xS.INVALID_PATTERN,
        tokenTypes: [
          e3
        ]
      })),
      valid: Yv(e2, n2)
    };
  }
  M(kx, s(1277));
  var Ax = /[^\\][$]/;
  function jx(e2) {
    let t2 = s;
    var n2;
    class r2 extends Qs {
      constructor() {
        let e3 = X;
        super(...arguments), this[e3(1607)] = false;
      }
      [t2(1435)](e3) {
        let n3 = t2;
        this[n3(1607)] = true;
      }
    }
    return n2 = r2, M(n2, `EndAnchorFinder`), G(my(e2, (e3) => {
      let t3 = e3.PATTERN;
      try {
        let e4 = lx(t3), n3 = new r2();
        return n3.visit(e4), n3.found;
      } catch {
        return Ax.test(t3.source);
      }
    }), (e3) => ({
      message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + e3.name + `<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
      type: xS.EOI_ANCHOR_FOUND,
      tokenTypes: [
        e3
      ]
    }));
  }
  M(jx, s(879));
  function Mx(e2) {
    return G(my(e2, (e3) => e3.PATTERN.test(``)), (e3) => ({
      message: `Token Type: ->` + e3.name + `<- static 'PATTERN' must not match an empty string`,
      type: xS.EMPTY_MATCH_PATTERN,
      tokenTypes: [
        e3
      ]
    }));
  }
  M(Mx, `findEmptyMatchRegExps`);
  var Nx = /[^\\[][\^]|^\^/;
  function Px(e2) {
    var t2;
    class n2 extends Qs {
      constructor() {
        super(...arguments), this.found = false;
      }
      visitStartAnchor(e3) {
        this.found = true;
      }
    }
    return t2 = n2, M(t2, `StartAnchorFinder`), G(my(e2, (e3) => {
      let t3 = X, r2 = e3[t3(373)];
      try {
        let e4 = lx(r2), t4 = new n2();
        return t4.visit(e4), t4.found;
      } catch {
        return Nx[t3(1276)](r2.source);
      }
    }), (e3) => ({
      message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + e3.name + `<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
      type: xS.SOI_ANCHOR_FOUND,
      tokenTypes: [
        e3
      ]
    }));
  }
  M(Px, `findStartOfInputAnchor`);
  function Fx(e2) {
    let t2 = s;
    return G(my(e2, (e3) => {
      let t3 = e3[xx];
      return t3 instanceof RegExp && (t3.multiline || t3.global);
    }), (e3) => ({
      message: `Token Type: ->` + e3.name + `<- static 'PATTERN' may NOT contain global('g') or multiline('m')`,
      type: xS[t2(1381)],
      tokenTypes: [
        e3
      ]
    }));
  }
  M(Fx, `findUnsupportedFlags`);
  function Ix(e2) {
    let t2 = s, n2 = [], r2 = G(e2, (r3) => hb(e2, (e3, i2) => r3.PATTERN.source === i2.PATTERN.source && !Hy(n2, i2) && i2.PATTERN !== CS.NA ? (n2.push(i2), e3[t2(1168)](i2), e3) : e3, []));
    return r2 = t_(r2), G(my(r2, (e3) => e3.length > 1), (e3) => {
      let n3 = t2, r3 = G(e3, (e4) => e4.name);
      return {
        message: `The same RegExp pattern ->` + xy(e3).PATTERN + n3(1538) + r3.join(`, `) + ` <-`,
        type: xS[n3(1344)],
        tokenTypes: e3
      };
    });
  }
  M(Ix, `findDuplicatePatterns`);
  function Lx(e2) {
    let t2 = s;
    return G(my(e2, (e3) => {
      if (!K(e3, `GROUP`)) return false;
      let t3 = e3.GROUP;
      return t3 !== CS.SKIPPED && t3 !== CS.NA && !Fy(t3);
    }), (e3) => ({
      message: t2(1775) + e3.name + `<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String`,
      type: xS.INVALID_GROUP_TYPE_FOUND,
      tokenTypes: [
        e3
      ]
    }));
  }
  M(Lx, `findInvalidGroupType`);
  function Rx(e2, t2) {
    let n2 = s;
    return G(my(e2, (e3) => e3.PUSH_MODE !== void 0 && !Hy(t2, e3[n2(1400)])), (e3) => ({
      message: `Token Type: ->` + e3.name + n2(1203) + e3.PUSH_MODE + n2(1648),
      type: xS.PUSH_MODE_DOES_NOT_EXIST,
      tokenTypes: [
        e3
      ]
    }));
  }
  M(Rx, `findModesThatDoNotExist`);
  function zx(e2) {
    let t2 = [], n2 = hb(e2, (e3, t3, n3) => {
      let r2 = X, i2 = t3.PATTERN;
      return i2 === CS.NA || (Fy(i2) ? e3[r2(1168)]({
        str: i2,
        idx: n3,
        tokenType: t3
      }) : eb(i2) && Vx(i2) && e3.push({
        str: i2.source,
        idx: n3,
        tokenType: t3
      })), e3;
    }, []);
    return W(e2, (e3, r2) => {
      W(n2, ({ str: n3, idx: i2, tokenType: a2 }) => {
        let o2 = X;
        if (r2 < i2 && Bx(n3, e3.PATTERN)) {
          let n4 = `Token: ->` + a2[o2(747)] + `<- can never be matched.
Because it appears AFTER the Token Type ->` + e3.name + `<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;
          t2[o2(1168)]({
            message: n4,
            type: xS.UNREACHABLE_PATTERN,
            tokenTypes: [
              e3,
              a2
            ]
          });
        }
      });
    }), t2;
  }
  M(zx, `findUnreachablePatterns`);
  function Bx(e2, t2) {
    let n2 = s;
    if (eb(t2)) {
      if (Hx(t2)) return false;
      let r2 = t2[n2(871)](e2);
      return r2 !== null && r2.index === 0;
    } else if ($l(t2)) return t2(e2, 0, [], {});
    else if (K(t2, `exec`)) return t2.exec(e2, 0, [], {});
    else if (typeof t2 == `string`) return t2 === e2;
    else throw Error(`non exhaustive match`);
  }
  M(Bx, `tryToMatchStrToPattern`);
  function Vx(e2) {
    return yy([
      `.`,
      `\\`,
      `[`,
      `]`,
      `|`,
      `^`,
      `$`,
      `(`,
      `)`,
      `?`,
      `*`,
      `+`,
      `{`
    ], (t2) => e2.source.indexOf(t2) !== -1) === void 0;
  }
  M(Vx, `noMetaChar`);
  function Hx(e2) {
    return /(\(\?=)|(\(\?!)|(\(\?<=)|(\(\?<!)/.test(e2.source);
  }
  M(Hx, s(695));
  function Ux(e2) {
    let t2 = e2[s(1521)] ? `i` : ``;
    return RegExp(`^(?:` + e2.source + `)`, t2);
  }
  M(Ux, `addStartOfInput`);
  function Wx(e2) {
    let t2 = e2.ignoreCase ? `iy` : `y`;
    return RegExp(`` + e2.source, t2);
  }
  M(Wx, `addStickyFlag`);
  function Gx(e2, t2, n2) {
    let r2 = s, i2 = [];
    return K(e2, Sx) || i2[r2(1168)]({
      message: `A MultiMode Lexer cannot be initialized without a <` + Sx + `> property in its definition
`,
      type: xS.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE
    }), K(e2, Cx) || i2.push({
      message: `A MultiMode Lexer cannot be initialized without a <` + Cx + `> property in its definition
`,
      type: xS[r2(786)]
    }), K(e2, Cx) && K(e2, Sx) && !K(e2.modes, e2[r2(503)]) && i2.push({
      message: `A MultiMode Lexer cannot be initialized with a ` + Sx + r2(689) + e2.defaultMode + r2(1010),
      type: xS[r2(1512)]
    }), K(e2, Cx) && W(e2[r2(730)], (e3, t3) => {
      W(e3, (n3, r3) => {
        let a2 = X;
        nb(n3) ? i2.push({
          message: a2(302) + t3 + a2(355) + r3 + `>
`,
          type: xS.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED
        }) : K(n3, a2(1422)) && W(V(n3.LONGER_ALT) ? n3[a2(1422)] : [
          n3.LONGER_ALT
        ], (r4) => {
          let o2 = a2;
          !nb(r4) && !Hy(e3, r4) && i2.push({
            message: `A MultiMode Lexer cannot be initialized with a longer_alt <` + r4.name + `> on token <` + n3.name + `> outside of mode <` + t3 + `>
`,
            type: xS[o2(1477)]
          });
        });
      });
    }), i2;
  }
  M(Gx, `performRuntimeChecks`);
  function Kx(e2, t2, n2) {
    let r2 = s, i2 = [], a2 = false, o2 = _b(t_(hm(zy(e2.modes))), (e3) => e3[xx] === CS.NA), c2 = $x(n2);
    return t2 && W(o2, (e3) => {
      let t3 = X, n3 = Zx(e3, c2);
      if (n3 !== false) {
        let t4 = {
          message: Qx(e3, n3),
          type: n3.issue,
          tokenType: e3
        };
        i2.push(t4);
      } else K(e3, t3(648)) ? e3.LINE_BREAKS === true && (a2 = true) : bx(c2, e3.PATTERN) && (a2 = true);
    }), t2 && !a2 && i2[r2(1168)]({
      message: `Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,
      type: xS.NO_LINE_BREAKS_FLAGS
    }), i2;
  }
  M(Kx, `performWarningRuntimeChecks`);
  function qx(e2) {
    let t2 = {};
    return W(Mf(e2), (n2) => {
      let r2 = e2[n2];
      if (V(r2)) t2[n2] = [];
      else throw Error(`non exhaustive match`);
    }), t2;
  }
  M(qx, `cloneEmptyGroups`);
  function Jx(e2) {
    let t2 = s, n2 = e2.PATTERN;
    if (eb(n2)) return false;
    if ($l(n2) || K(n2, `exec`)) return true;
    if (Fy(n2)) return false;
    throw Error(t2(330));
  }
  M(Jx, `isCustomPattern`);
  function Yx(e2) {
    return Fy(e2) && e2.length === 1 ? e2.charCodeAt(0) : false;
  }
  M(Yx, s(269));
  var Xx = {
    test: M(function(e2) {
      let t2 = s, n2 = e2.length;
      for (let r2 = this.lastIndex; r2 < n2; r2++) {
        let n3 = e2[t2(1129)](r2);
        if (n3 === 10) return this[t2(810)] = r2 + 1, true;
        if (n3 === 13) return e2[t2(1129)](r2 + 1) === 10 ? this.lastIndex = r2 + 2 : this.lastIndex = r2 + 1, true;
      }
      return false;
    }, s(1276)),
    lastIndex: 0
  };
  function Zx(e2, t2) {
    let n2 = s;
    if (K(e2, `LINE_BREAKS`)) return false;
    if (eb(e2.PATTERN)) {
      try {
        bx(t2, e2[n2(373)]);
      } catch (e3) {
        return {
          issue: xS.IDENTIFY_TERMINATOR,
          errMsg: e3[n2(1417)]
        };
      }
      return false;
    } else if (Fy(e2[n2(373)])) return false;
    else if (Jx(e2)) return {
      issue: xS.CUSTOM_LINE_BREAK
    };
    else throw Error(`non exhaustive match`);
  }
  M(Zx, `checkLineBreaksIssues`);
  function Qx(e2, t2) {
    let n2 = s;
    if (t2.issue === xS[n2(923)]) return `Warning: unable to identify line terminator usage in pattern.
	The problem is in the <` + e2.name + `> Token Type
	 Root cause: ` + t2.errMsg + `.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;
    if (t2[n2(888)] === xS.CUSTOM_LINE_BREAK) return `Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <` + e2.name + `> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;
    throw Error(`non exhaustive match`);
  }
  M(Qx, s(1380));
  function $x(e2) {
    return G(e2, (e3) => Fy(e3) ? e3.charCodeAt(0) : e3);
  }
  M($x, `getCharCodes`);
  function eS(e2, t2, n2) {
    e2[t2] === void 0 ? e2[t2] = [
      n2
    ] : e2[t2].push(n2);
  }
  M(eS, `addToMapOfArrays`);
  var tS = 256, nS = [];
  function rS(e2) {
    return e2 < tS ? e2 : nS[e2];
  }
  M(rS, `charCodeToOptimizedIndex`);
  function iS() {
    if (q(nS)) {
      nS = Array(65536);
      for (let e2 = 0; e2 < 65536; e2++) nS[e2] = e2 > 255 ? 255 + ~~(e2 / 255) : e2;
    }
  }
  M(iS, s(337));
  function aS(e2, t2) {
    let n2 = s, r2 = e2.tokenTypeIdx;
    return r2 === t2.tokenTypeIdx ? true : t2[n2(1221)] === true && t2.categoryMatchesMap[r2] === true;
  }
  M(aS, `tokenStructuredMatcher`);
  function oS(e2, t2) {
    let n2 = s;
    return e2[n2(1142)] === t2[n2(1142)];
  }
  M(oS, `tokenStructuredMatcherNoCategories`);
  var sS = 1, cS = {};
  function lS(e2) {
    let t2 = uS(e2);
    dS(t2), pS(t2), fS(t2), W(t2, (e3) => {
      let t3 = X;
      e3[t3(1221)] = e3.categoryMatches.length > 0;
    });
  }
  M(lS, `augmentTokenTypes`);
  function uS(e2) {
    let t2 = s, n2 = $g(e2), r2 = e2, i2 = true;
    for (; i2; ) {
      r2 = t_(hm(G(r2, (e4) => e4[t2(1042)])));
      let e3 = Yv(r2, n2);
      n2 = n2.concat(e3), q(e3) ? i2 = false : r2 = e3;
    }
    return n2;
  }
  M(uS, `expandCategories`);
  function dS(e2) {
    W(e2, (e3) => {
      let t2 = X;
      hS(e3) || (cS[sS] = e3, e3[t2(1142)] = sS++), gS(e3) && !V(e3.CATEGORIES) && (e3.CATEGORIES = [
        e3.CATEGORIES
      ]), gS(e3) || (e3.CATEGORIES = []), _S(e3) || (e3.categoryMatches = []), vS(e3) || (e3.categoryMatchesMap = {});
    });
  }
  M(dS, `assignTokenDefaultProps`);
  function fS(e2) {
    W(e2, (e3) => {
      e3.categoryMatches = [], W(e3.categoryMatchesMap, (t2, n2) => {
        e3[X(1629)].push(cS[n2].tokenTypeIdx);
      });
    });
  }
  M(fS, `assignCategoriesTokensProp`);
  function pS(e2) {
    W(e2, (e3) => {
      mS([], e3);
    });
  }
  M(pS, `assignCategoriesMapProp`);
  function mS(e2, t2) {
    W(e2, (e3) => {
      t2.categoryMatchesMap[e3.tokenTypeIdx] = true;
    }), W(t2.CATEGORIES, (n2) => {
      let r2 = e2.concat(t2);
      Hy(r2, n2) || mS(r2, n2);
    });
  }
  M(mS, `singleAssignCategoriesToksMap`);
  function hS(e2) {
    return K(e2, s(1142));
  }
  M(hS, `hasShortKeyProperty`);
  function gS(e2) {
    return K(e2, `CATEGORIES`);
  }
  M(gS, `hasCategoriesProperty`);
  function _S(e2) {
    return K(e2, s(1629));
  }
  M(_S, `hasExtendingTokensTypesProperty`);
  function vS(e2) {
    return K(e2, `categoryMatchesMap`);
  }
  M(vS, `hasExtendingTokensTypesMapProperty`);
  function yS(e2) {
    return K(e2, `tokenTypeIdx`);
  }
  M(yS, `isTokenType`);
  var bS = {
    buildUnableToPopLexerModeMessage(e2) {
      return `Unable to pop Lexer Mode after encountering Token ->` + e2.image + `<- The Mode Stack is empty`;
    },
    buildUnexpectedCharactersMessage(e2, t2, n2, r2, i2, a2) {
      let o2 = s;
      return o2(676) + e2.charAt(t2) + o2(1771) + t2 + `, skipped ` + n2 + ` characters.`;
    }
  }, xS;
  (function(e2) {
    let t2 = s;
    e2[e2.MISSING_PATTERN = 0] = `MISSING_PATTERN`, e2[e2.INVALID_PATTERN = 1] = `INVALID_PATTERN`, e2[e2[t2(1103)] = 2] = `EOI_ANCHOR_FOUND`, e2[e2.UNSUPPORTED_FLAGS_FOUND = 3] = `UNSUPPORTED_FLAGS_FOUND`, e2[e2.DUPLICATE_PATTERNS_FOUND = 4] = `DUPLICATE_PATTERNS_FOUND`, e2[e2.INVALID_GROUP_TYPE_FOUND = 5] = `INVALID_GROUP_TYPE_FOUND`, e2[e2.PUSH_MODE_DOES_NOT_EXIST = 6] = t2(1083), e2[e2.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE = 7] = `MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE`, e2[e2.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY = 8] = `MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY`, e2[e2.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST = 9] = `MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST`, e2[e2.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED = 10] = `LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED`, e2[e2.SOI_ANCHOR_FOUND = 11] = `SOI_ANCHOR_FOUND`, e2[e2.EMPTY_MATCH_PATTERN = 12] = `EMPTY_MATCH_PATTERN`, e2[e2.NO_LINE_BREAKS_FLAGS = 13] = t2(1218), e2[e2.UNREACHABLE_PATTERN = 14] = t2(1026), e2[e2.IDENTIFY_TERMINATOR = 15] = `IDENTIFY_TERMINATOR`, e2[e2.CUSTOM_LINE_BREAK = 16] = t2(419), e2[e2.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE = 17] = t2(1477);
  })(xS || (xS = {}));
  var SS = {
    deferDefinitionErrorsHandling: false,
    positionTracking: s(935),
    lineTerminatorsPattern: /\n|\r\n?/g,
    lineTerminatorCharacters: [
      `
`,
      `\r`
    ],
    ensureOptimizations: false,
    safeMode: false,
    errorMessageProvider: bS,
    traceInitPerf: false,
    skipValidations: false,
    recoveryEnabled: true
  };
  Object.freeze(SS);
  var CS = (O = class {
    constructor(e2, t2 = SS) {
      let n2 = s;
      if (this.lexerDefinition = e2, this.lexerDefinitionErrors = [], this.lexerDefinitionWarning = [], this[n2(1082)] = {}, this.charCodeToPatternIdxToConfig = {}, this.modes = [], this.emptyGroups = {}, this.trackStartLines = true, this.trackEndLines = true, this.hasCustom = false, this.canModeBeOptimized = {}, this.TRACE_INIT = (e3, t3) => {
        let r3 = n2;
        if (this.traceInitPerf === true) {
          this.traceInitIndent++;
          let n3 = Array(this.traceInitIndent + 1).join(`	`);
          this.traceInitIndent < this.traceInitMaxIdent && console.log(n3 + r3(759) + e3 + `>`);
          let { time: i2, value: a2 } = Ab(t3), o2 = i2 > 10 ? console[r3(1376)] : console.log;
          return this.traceInitIndent < this.traceInitMaxIdent && o2(n3 + r3(1667) + e3 + `> time: ` + i2 + `ms`), this.traceInitIndent--, a2;
        } else return t3();
      }, typeof t2 == `boolean`) throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);
      this.config = Pf({}, SS, t2);
      let r2 = this[n2(1298)].traceInitPerf;
      r2 === true ? (this[n2(1015)] = 1 / 0, this.traceInitPerf = true) : typeof r2 == `number` && (this.traceInitMaxIdent = r2, this.traceInitPerf = true), this.traceInitIndent = -1, this.TRACE_INIT(`Lexer Constructor`, () => {
        let r3 = n2, i2, a2 = true;
        this.TRACE_INIT(r3(270), () => {
          let n3 = r3;
          if (this.config[n3(473)] === SS[n3(473)]) this.config.lineTerminatorsPattern = Xx;
          else if (this.config.lineTerminatorCharacters === SS.lineTerminatorCharacters) throw Error(n3(669));
          if (t2.safeMode && t2[n3(1116)]) throw Error(`"safeMode" and "ensureOptimizations" flags are mutually exclusive.`);
          this.trackStartLines = /full|onlyStart/i[n3(1276)](this.config.positionTracking), this[n3(1022)] = /full/i.test(this[n3(1298)][n3(1587)]), V(e2) ? i2 = {
            modes: {
              defaultMode: $g(e2)
            },
            defaultMode: Sx
          } : (a2 = false, i2 = $g(e2));
        }), this.config.skipValidations === false && (this.TRACE_INIT(`performRuntimeChecks`, () => {
          this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(Gx(i2, this.trackStartLines, this.config.lineTerminatorCharacters));
        }), this.TRACE_INIT(`performWarningRuntimeChecks`, () => {
          this.lexerDefinitionWarning = this.lexerDefinitionWarning.concat(Kx(i2, this.trackStartLines, this.config.lineTerminatorCharacters));
        })), i2[r3(730)] = i2[r3(730)] ? i2[r3(730)] : {}, W(i2[r3(730)], (e3, t3) => {
          let n3 = r3;
          i2[n3(730)][t3] = _b(e3, (e4) => nb(e4));
        });
        let o2 = Mf(i2.modes);
        if (W(i2.modes, (e3, n3) => {
          let i3 = r3;
          this[i3(544)](`Mode: <` + n3 + `> processing`, () => {
            let r4 = i3;
            if (this.modes.push(n3), this[r4(1298)].skipValidations === false && this.TRACE_INIT(`validatePatterns`, () => {
              this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(Ex(e3, o2));
            }), q(this[r4(1195)])) {
              lS(e3);
              let i4;
              this.TRACE_INIT(`analyzeTokenTypes`, () => {
                let n4 = r4;
                i4 = Tx(e3, {
                  lineTerminatorCharacters: this[n4(1298)].lineTerminatorCharacters,
                  positionTracking: t2[n4(1587)],
                  ensureOptimizations: t2.ensureOptimizations,
                  safeMode: t2.safeMode,
                  tracer: this.TRACE_INIT
                });
              }), this.patternIdxToConfig[n3] = i4.patternIdxToConfig, this[r4(1124)][n3] = i4.charCodeToPatternIdxToConfig, this[r4(1496)] = Pf({}, this[r4(1496)], i4.emptyGroups), this.hasCustom = i4.hasCustom || this.hasCustom, this[r4(367)][n3] = i4[r4(1665)];
            }
          });
        }), this.defaultMode = i2.defaultMode, !q(this.lexerDefinitionErrors) && !this.config.deferDefinitionErrorsHandling) {
          let e3 = G(this.lexerDefinitionErrors, (e4) => e4.message).join(`-----------------------
`);
          throw Error(r3(954) + e3);
        }
        W(this.lexerDefinitionWarning, (e3) => {
          kb(e3[r3(1417)]);
        }), this.TRACE_INIT(`Choosing sub-methods implementations`, () => {
          let e3 = r3;
          if (wx ? (this.chopInput = ql, this.match = this.matchWithTest) : (this[e3(608)] = Eu, this.match = this.matchWithExec), a2 && (this[e3(802)] = Eu), this.trackStartLines === false && (this[e3(295)] = ql), this[e3(1022)] === false && (this[e3(495)] = Eu), /full/i.test(this.config.positionTracking)) this[e3(1111)] = this.createFullToken;
          else if (/onlyStart/i.test(this.config.positionTracking)) this.createTokenInstance = this.createStartOnlyToken;
          else if (/onlyOffset/i.test(this.config.positionTracking)) this[e3(1111)] = this[e3(766)];
          else throw Error(`Invalid <positionTracking> config option: "` + this.config.positionTracking + `"`);
          this.hasCustom ? (this.addToken = this.addTokenUsingPush, this[e3(1046)] = this.handlePayloadWithCustom) : (this[e3(1394)] = this.addTokenUsingMemberAccess, this.handlePayload = this.handlePayloadNoCustom);
        }), this.TRACE_INIT(`Failed Optimization Warnings`, () => {
          let e3 = r3, n3 = hb(this.canModeBeOptimized, (t3, n4, r4) => (n4 === false && t3[e3(1168)](r4), t3), []);
          if (t2.ensureOptimizations && !q(n3)) throw Error(`Lexer Modes: < ` + n3.join(`, `) + ` > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`);
        }), this.TRACE_INIT(`clearRegExpParserCache`, () => {
          ux();
        }), this.TRACE_INIT(r3(1220), () => {
          jb(this);
        });
      });
    }
    tokenize(e2, t2 = this[s(503)]) {
      let n2 = s;
      if (!q(this.lexerDefinitionErrors)) {
        let e3 = G(this.lexerDefinitionErrors, (e4) => e4.message).join(n2(938));
        throw Error(`Unable to Tokenize because Errors detected in definition of Lexer:
` + e3);
      }
      return this.tokenizeInternal(e2, t2);
    }
    [s(1035)](e2, t2) {
      let n2 = s, r2, i2, a2, o2, c2, l2, u2, d2, f2, p2, m2, h2, g2, _2, v2, y2 = e2, b2 = y2.length, x2 = 0, ee2 = 0, S2 = this.hasCustom ? 0 : Math.floor(e2.length / 10), C2 = Array(S2), w2 = [], te2 = this.trackStartLines ? 1 : void 0, T2 = this.trackStartLines ? 1 : void 0, E2 = qx(this.emptyGroups), ne2 = this.trackStartLines, D2 = this.config.lineTerminatorsPattern, O2 = 0, re2 = [], ie2 = [], ae2 = [], oe2 = [];
      Object.freeze(oe2);
      let se2;
      function ce2() {
        return re2;
      }
      M(ce2, `getPossiblePatternsSlow`);
      function le2(e3) {
        let t3 = rS(e3), n3 = ie2[t3];
        return n3 === void 0 ? oe2 : n3;
      }
      M(le2, `getPossiblePatternsOptimized`);
      let ue2 = M((e3) => {
        let t3 = X;
        if (ae2.length === 1 && e3.tokenType[t3(1400)] === void 0) {
          let n3 = this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(e3);
          w2.push({
            offset: e3.startOffset,
            line: e3.startLine,
            column: e3.startColumn,
            length: e3.image[t3(1663)],
            message: n3
          });
        } else {
          ae2.pop();
          let e4 = Zv(ae2);
          re2 = this.patternIdxToConfig[e4], ie2 = this.charCodeToPatternIdxToConfig[e4], O2 = re2.length;
          let t4 = this.canModeBeOptimized[e4] && this.config.safeMode === false;
          se2 = ie2 && t4 ? le2 : ce2;
        }
      }, `pop_mode`);
      function de2(e3) {
        let t3 = X;
        ae2.push(e3), ie2 = this[t3(1124)][e3], re2 = this[t3(1082)][e3], O2 = re2.length, O2 = re2.length;
        let n3 = this[t3(367)][e3] && this.config[t3(755)] === false;
        se2 = ie2 && n3 ? le2 : ce2;
      }
      M(de2, `push_mode`), de2.call(this, t2);
      let k2, A2 = this[n2(1298)].recoveryEnabled;
      for (; x2 < b2; ) {
        l2 = null;
        let t3 = y2.charCodeAt(x2), s2 = se2(t3), S3 = s2.length;
        for (r2 = 0; r2 < S3; r2++) {
          k2 = s2[r2];
          let i3 = k2.pattern;
          u2 = null;
          let f3 = k2.short;
          if (f3 === false ? k2.isCustom === true ? (v2 = i3.exec(y2, x2, C2, E2), v2 === null ? l2 = null : (l2 = v2[0], v2.payload !== void 0 && (u2 = v2.payload))) : (this.updateLastIndex(i3, x2), l2 = this.match(i3, e2, x2)) : t3 === f3 && (l2 = i3), l2 !== null) {
            if (c2 = k2[n2(1260)], c2 !== void 0) {
              let t4 = c2[n2(1663)];
              for (a2 = 0; a2 < t4; a2++) {
                let t5 = re2[c2[a2]], r3 = t5[n2(1692)];
                if (d2 = null, t5.isCustom === true ? (v2 = r3.exec(y2, x2, C2, E2), v2 === null ? o2 = null : (o2 = v2[0], v2.payload !== void 0 && (d2 = v2.payload))) : (this.updateLastIndex(r3, x2), o2 = this.match(r3, e2, x2)), o2 && o2.length > l2.length) {
                  l2 = o2, u2 = d2, k2 = t5;
                  break;
                }
              }
            }
            break;
          }
        }
        if (l2 !== null) {
          if (f2 = l2.length, p2 = k2.group, p2 !== void 0 && (m2 = k2.tokenTypeIdx, h2 = this[n2(1111)](l2, x2, m2, k2.tokenType, te2, T2, f2), this.handlePayload(h2, u2), p2 === false ? ee2 = this.addToken(C2, ee2, h2) : E2[p2].push(h2)), e2 = this.chopInput(e2, f2), x2 += f2, T2 = this.computeNewColumn(T2, f2), ne2 === true && k2.canLineTerminator === true) {
            let e3 = 0, t4, n3;
            D2.lastIndex = 0;
            do
              t4 = D2.test(l2), t4 === true && (n3 = D2.lastIndex - 1, e3++);
            while (t4 === true);
            e3 !== 0 && (te2 += e3, T2 = f2 - n3, this.updateTokenEndLineColumnLocation(h2, p2, n3, e3, te2, T2, f2));
          }
          this[n2(802)](k2, ue2, de2, h2);
        } else {
          let t4 = x2, r3 = te2, a3 = T2, o3 = A2 === false;
          for (; o3 === false && x2 < b2; ) for (e2 = this.chopInput(e2, 1), x2++, i2 = 0; i2 < O2; i2++) {
            let t5 = re2[i2], r4 = t5.pattern, a4 = t5.short;
            if (a4 === false ? t5.isCustom === true ? o3 = r4.exec(y2, x2, C2, E2) !== null : (this[n2(608)](r4, x2), o3 = r4.exec(e2) !== null) : y2.charCodeAt(x2) === a4 && (o3 = true), o3 === true) break;
          }
          if (g2 = x2 - t4, T2 = this.computeNewColumn(T2, g2), _2 = this.config.errorMessageProvider.buildUnexpectedCharactersMessage(y2, t4, g2, r3, a3, Zv(ae2)), w2[n2(1168)]({
            offset: t4,
            line: r3,
            column: a3,
            length: g2,
            message: _2
          }), A2 === false) break;
        }
      }
      return this.hasCustom || (C2.length = ee2), {
        tokens: C2,
        groups: E2,
        errors: w2
      };
    }
    handleModes(e2, t2, n2, r2) {
      let i2 = s;
      if (e2.pop === true) {
        let a2 = e2.push;
        t2(r2), a2 !== void 0 && n2[i2(1066)](this, a2);
      } else e2.push !== void 0 && n2[i2(1066)](this, e2.push);
    }
    [s(1707)](e2, t2) {
      return e2[s(777)](t2);
    }
    updateLastIndex(e2, t2) {
      e2.lastIndex = t2;
    }
    updateTokenEndLineColumnLocation(e2, t2, n2, r2, i2, a2, o2) {
      let s2, c2;
      t2 !== void 0 && (s2 = n2 === o2 - 1, c2 = s2 ? -1 : 0, r2 === 1 && s2 === true || (e2.endLine = i2 + c2, e2.endColumn = a2 - 1 + -c2));
    }
    [s(295)](e2, t2) {
      return e2 + t2;
    }
    createOffsetOnlyToken(e2, t2, n2, r2) {
      return {
        image: e2,
        startOffset: t2,
        tokenTypeIdx: n2,
        tokenType: r2
      };
    }
    createStartOnlyToken(e2, t2, n2, r2, i2, a2) {
      return {
        image: e2,
        startOffset: t2,
        startLine: i2,
        startColumn: a2,
        tokenTypeIdx: n2,
        tokenType: r2
      };
    }
    createFullToken(e2, t2, n2, r2, i2, a2, o2) {
      return {
        image: e2,
        startOffset: t2,
        endOffset: t2 + o2 - 1,
        startLine: i2,
        endLine: i2,
        startColumn: a2,
        endColumn: a2 + o2 - 1,
        tokenTypeIdx: n2,
        tokenType: r2
      };
    }
    [s(942)](e2, t2, n2) {
      return e2.push(n2), t2;
    }
    addTokenUsingMemberAccess(e2, t2, n2) {
      return e2[t2] = n2, t2++, t2;
    }
    [s(1176)](e2, t2) {
    }
    [s(1e3)](e2, t2) {
      t2 !== null && (e2.payload = t2);
    }
    matchWithTest(e2, t2, n2) {
      let r2 = s;
      return e2.test(t2) === true ? t2[r2(777)](n2, e2.lastIndex) : null;
    }
    [s(663)](e2, t2) {
      let n2 = e2.exec(t2);
      return n2 === null ? null : n2[0];
    }
  }, M(O, `Lexer`), O);
  CS.SKIPPED = `This marks a skipped Token pattern, this means each token identified by it will be consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.`, CS.NA = /NOT_APPLICABLE/;
  function wS(e2) {
    let t2 = s;
    return TS(e2) ? e2.LABEL : e2[t2(747)];
  }
  M(wS, `tokenLabel`);
  function TS(e2) {
    let t2 = s;
    return Fy(e2.LABEL) && e2[t2(948)] !== ``;
  }
  M(TS, `hasTokenLabel`);
  var ES = `parent`, DS = `categories`, OS = `label`, kS = `group`, AS = `push_mode`, jS = `pop_mode`, MS = `longer_alt`, NS = `line_breaks`, PS = `start_chars_hint`;
  function FS(e2) {
    return IS(e2);
  }
  M(FS, s(1696));
  function IS(e2) {
    let t2 = s, n2 = e2.pattern, r2 = {};
    if (r2.name = e2.name, nb(n2) || (r2.PATTERN = n2), K(e2, ES)) throw t2(997);
    return K(e2, DS) && (r2.CATEGORIES = e2[DS]), lS([
      r2
    ]), K(e2, OS) && (r2[t2(948)] = e2[OS]), K(e2, kS) && (r2.GROUP = e2[kS]), K(e2, jS) && (r2.POP_MODE = e2[jS]), K(e2, AS) && (r2.PUSH_MODE = e2[AS]), K(e2, MS) && (r2.LONGER_ALT = e2[MS]), K(e2, NS) && (r2.LINE_BREAKS = e2[NS]), K(e2, PS) && (r2.START_CHARS_HINT = e2[PS]), r2;
  }
  M(IS, `createTokenInternal`);
  var LS = FS({
    name: s(590),
    pattern: CS.NA
  });
  lS([
    LS
  ]);
  function RS(e2, t2, n2, r2, i2, a2, o2, s2) {
    return {
      image: t2,
      startOffset: n2,
      endOffset: r2,
      startLine: i2,
      endLine: a2,
      startColumn: o2,
      endColumn: s2,
      tokenTypeIdx: e2.tokenTypeIdx,
      tokenType: e2
    };
  }
  M(RS, `createTokenInstance`);
  function zS(e2, t2) {
    return aS(e2, t2);
  }
  M(zS, `tokenMatcher`);
  var BS = {
    buildMismatchTokenMessage({ expected: e2, actual: t2, previous: n2, ruleName: r2 }) {
      return `Expecting ` + (TS(e2) ? `--> ` + wS(e2) + ` <--` : `token of type --> ` + e2.name + ` <--`) + ` but found --> '` + t2.image + `' <--`;
    },
    buildNotAllInputParsedMessage({ firstRedundant: e2, ruleName: t2 }) {
      return `Redundant input, expecting EOF but found: ` + e2.image;
    },
    buildNoViableAltMessage({ expectedPathsPerAlt: e2, actual: t2, previous: n2, customUserDescription: r2, ruleName: i2 }) {
      let a2 = s, o2 = a2(1029) + xy(t2).image + `'`;
      return r2 ? `Expecting: ` + r2 + o2 : `Expecting: one of these possible Token sequences:
` + G(G(hb(e2, (e3, t3) => e3.concat(t3), []), (e3) => `[` + G(e3, (e4) => wS(e4))[a2(1655)](`, `) + `]`), (e3, t3) => `  ` + (t3 + 1) + `. ` + e3).join(`
`) + o2;
    },
    buildEarlyExitMessage({ expectedIterationPaths: e2, actual: t2, customUserDescription: n2, ruleName: r2 }) {
      let i2 = s, a2 = `
but found: '` + xy(t2).image + `'`;
      return n2 ? `Expecting: ` + n2 + a2 : `Expecting: expecting at least one iteration which starts with one of these possible Token sequences::
  <` + G(e2, (e3) => `[` + G(e3, (e4) => wS(e4)).join(`,`) + `]`)[i2(1655)](` ,`) + `>` + a2;
    }
  };
  Object[s(440)](BS);
  var VS = {
    buildRuleNotFoundError(e2, t2) {
      return `Invalid grammar, reference to a rule which is not defined: ->` + t2.nonTerminalName + `<-
inside top level rule: ->` + e2.name + `<-`;
    }
  }, HS = {
    buildDuplicateFoundError(e2, t2) {
      let n2 = s;
      function r2(e3) {
        return e3 instanceof J ? e3.terminalType.name : e3 instanceof Fb ? e3.nonTerminalName : ``;
      }
      M(r2, n2(1569));
      let i2 = e2.name, a2 = xy(t2), o2 = a2.idx, c2 = Xb(a2), l2 = r2(a2), u2 = `->` + c2 + (o2 > 0 ? o2 : ``) + `<- ` + (l2 ? `with argument: ->` + l2 + `<-` : ``) + n2(280) + t2.length + n2(1628) + i2 + `<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;
      return u2 = u2.replace(/[ \t]+/g, ` `), u2 = u2.replace(/\s\s+/g, `
`), u2;
    },
    buildNamespaceConflictError(e2) {
      let t2 = s;
      return `Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <` + e2.name + t2(1534);
    },
    buildAlternationPrefixAmbiguityError(e2) {
      let t2 = s, n2 = G(e2.prefixPath, (e3) => wS(e3))[t2(1655)](`, `), r2 = e2.alternation.idx === 0 ? `` : e2[t2(362)].idx;
      return `Ambiguous alternatives: <` + e2.ambiguityIndices[t2(1655)](` ,`) + `> due to common lookahead prefix
in <OR` + r2 + `> inside <` + e2.topLevelRule.name + t2(272) + n2 + `> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;
    },
    buildAlternationAmbiguityError(e2) {
      let t2 = s, n2 = G(e2.prefixPath, (e3) => wS(e3))[t2(1655)](`, `), r2 = e2.alternation.idx === 0 ? `` : e2.alternation.idx, i2 = `Ambiguous Alternatives Detected: <` + e2.ambiguityIndices.join(` ,`) + `> in <OR` + r2 + t2(970) + e2.topLevelRule.name + t2(272) + n2 + `> may appears as a prefix path in all these alternatives.
`;
      return i2 += `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`, i2;
    },
    buildEmptyRepetitionError(e2) {
      let t2 = s, n2 = Xb(e2[t2(1558)]);
      return e2.repetition.idx !== 0 && (n2 += e2.repetition[t2(484)]), `The repetition <` + n2 + t2(1532) + e2.topLevelRule.name + `> can never consume any tokens.
This could lead to an infinite loop.`;
    },
    buildTokenNameError(e2) {
      return s(1540);
    },
    buildEmptyAlternationError(e2) {
      let t2 = s;
      return t2(1650) + (e2.emptyChoiceIdx + 1) + `> in <OR` + e2.alternation[t2(484)] + `> inside <` + e2.topLevelRule.name + `> Rule.
Only the last alternative may be an empty alternative.`;
    },
    buildTooManyAlternativesError(e2) {
      let t2 = s;
      return `An Alternation cannot have more than 256 alternatives:
<OR` + e2.alternation.idx + `> inside <` + e2.topLevelRule.name + `> Rule.
 has ` + (e2[t2(362)].definition[t2(1663)] + 1) + ` alternatives.`;
    },
    buildLeftRecursionError(e2) {
      let t2 = s, n2 = e2.topLevelRule[t2(747)];
      return `Left Recursion found in grammar.
rule: <` + n2 + `> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ` + (n2 + ` --> ` + G(e2.leftRecursionPath, (e3) => e3.name).concat([
        n2
      ])[t2(1655)](` --> `)) + `
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`;
    },
    buildInvalidRuleNameError(e2) {
      return `deprecated`;
    },
    buildDuplicateRuleNameError(e2) {
      let t2 = s, n2;
      return n2 = e2.topLevelRule instanceof Ib ? e2[t2(1363)][t2(747)] : e2.topLevelRule, `Duplicate definition, rule: ->` + n2 + `<- is already defined in the grammar: ->` + e2[t2(1750)] + `<-`;
    }
  };
  function US(e2, t2) {
    let n2 = new WS(e2, t2);
    return n2.resolveRefs(), n2.errors;
  }
  M(US, `resolveGrammar`);
  var WS = (re = class extends Kb {
    constructor(e2, t2) {
      let n2 = s;
      super(), this.nameToTopRule = e2, this.errMsgProvider = t2, this[n2(1327)] = [];
    }
    resolveRefs() {
      W(zy(this.nameToTopRule), (e2) => {
        this.currTopLevel = e2, e2.accept(this);
      });
    }
    visitNonTerminal(e2) {
      let t2 = s, n2 = this.nameToTopRule[e2[t2(1535)]];
      if (n2) e2.referencedRule = n2;
      else {
        let n3 = this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, e2);
        this[t2(1327)].push({
          message: n3,
          type: Xw.UNRESOLVED_SUBRULE_REF,
          ruleName: this.currTopLevel.name,
          unresolvedRefName: e2[t2(1535)]
        });
      }
    }
  }, M(re, s(1405)), re), GS = (ie = class extends Zb {
    constructor(e2, t2) {
      let n2 = s;
      super(), this.topProd = e2, this.path = t2, this[n2(1679)] = [], this.nextProductionName = ``, this.nextProductionOccurrence = 0, this.found = false, this[n2(750)] = false;
    }
    [s(1434)]() {
      let e2 = s;
      if (this.found = false, this.path[e2(987)][0] !== this.topProd.name) throw Error(`The path does not start with the walker's top Rule!`);
      return this.ruleStack = $g(this.path.ruleStack).reverse(), this.occurrenceStack = $g(this.path.occurrenceStack).reverse(), this.ruleStack.pop(), this.occurrenceStack.pop(), this.updateExpectedNext(), this.walk(this.topProd), this.possibleTokTypes;
    }
    walk(e2, t2 = []) {
      let n2 = s;
      this.found || super[n2(713)](e2, t2);
    }
    walkProdRef(e2, t2, n2) {
      let r2 = s;
      if (e2[r2(896)][r2(747)] === this.nextProductionName && e2.idx === this.nextProductionOccurrence) {
        let i2 = t2[r2(1758)](n2);
        this.updateExpectedNext(), this[r2(713)](e2.referencedRule, i2);
      }
    }
    updateExpectedNext() {
      let e2 = s;
      q(this.ruleStack) ? (this[e2(922)] = ``, this[e2(1418)] = 0, this.isAtEndOfPath = true) : (this[e2(922)] = this.ruleStack[e2(1315)](), this.nextProductionOccurrence = this.occurrenceStack.pop());
    }
  }, M(ie, s(1149)), ie), KS = (ae = class extends GS {
    constructor(e2, t2) {
      let n2 = s;
      super(e2, t2), this[n2(1647)] = t2, this.nextTerminalName = ``, this[n2(452)] = 0, this.nextTerminalName = this.path.lastTok[n2(747)], this[n2(452)] = this.path.lastTokOccurrence;
    }
    walkTerminal(e2, t2, n2) {
      let r2 = s;
      if (this.isAtEndOfPath && e2.terminalType.name === this.nextTerminalName && e2.idx === this.nextTerminalOccurrence && !this.found) {
        let e3 = new Lb({
          definition: t2[r2(1758)](n2)
        });
        this.possibleTokTypes = $b(e3), this.found = true;
      }
    }
  }, M(ae, `NextAfterTokenWalker`), ae), qS = (oe = class extends Zb {
    constructor(e2, t2) {
      super(), this.topRule = e2, this.occurrence = t2, this.result = {
        token: void 0,
        occurrence: void 0,
        isEndOfRule: void 0
      };
    }
    startWalking() {
      let e2 = s;
      return this[e2(713)](this.topRule), this[e2(1025)];
    }
  }, M(oe, `AbstractNextTerminalAfterProductionWalker`), oe), JS = (se = class extends qS {
    walkMany(e2, t2, n2) {
      let r2 = s;
      if (e2.idx === this.occurrence) {
        let e3 = xy(t2.concat(n2));
        this.result.isEndOfRule = e3 === void 0, e3 instanceof J && (this.result.token = e3[r2(767)], this.result[r2(1604)] = e3.idx);
      } else super.walkMany(e2, t2, n2);
    }
  }, M(se, `NextTerminalAfterManyWalker`), se), YS = (ce = class extends qS {
    walkManySep(e2, t2, n2) {
      let r2 = s;
      if (e2.idx === this.occurrence) {
        let e3 = xy(t2[r2(1758)](n2));
        this[r2(1025)].isEndOfRule = e3 === void 0, e3 instanceof J && (this.result.token = e3.terminalType, this.result.occurrence = e3.idx);
      } else super.walkManySep(e2, t2, n2);
    }
  }, M(ce, s(474)), ce), XS = (le = class extends qS {
    walkAtLeastOne(e2, t2, n2) {
      let r2 = s;
      if (e2.idx === this.occurrence) {
        let e3 = xy(t2.concat(n2));
        this.result.isEndOfRule = e3 === void 0, e3 instanceof J && (this[r2(1025)].token = e3.terminalType, this.result.occurrence = e3.idx);
      } else super.walkAtLeastOne(e2, t2, n2);
    }
  }, M(le, `NextTerminalAfterAtLeastOneWalker`), le), ZS = (ue = class extends qS {
    walkAtLeastOneSep(e2, t2, n2) {
      let r2 = s;
      if (e2.idx === this.occurrence) {
        let e3 = xy(t2.concat(n2));
        this.result.isEndOfRule = e3 === void 0, e3 instanceof J && (this.result.token = e3.terminalType, this.result[r2(1604)] = e3.idx);
      } else super.walkAtLeastOneSep(e2, t2, n2);
    }
  }, M(ue, `NextTerminalAfterAtLeastOneSepWalker`), ue);
  function QS(e2, t2, n2 = []) {
    let r2 = s;
    n2 = $g(n2);
    let i2 = [], a2 = 0;
    function o2(t3) {
      return t3.concat($v(e2, a2 + 1));
    }
    M(o2, `remainingPathWith`);
    function c2(e3) {
      let r3 = QS(o2(e3), t2, n2);
      return i2.concat(r3);
    }
    for (M(c2, `getAlternativesForProd`); n2.length < t2 && a2 < e2.length; ) {
      let t3 = e2[a2];
      if (t3 instanceof Lb || t3 instanceof Fb) return c2(t3.definition);
      if (t3 instanceof Rb) i2 = c2(t3.definition);
      else if (t3 instanceof zb) return c2(t3.definition.concat([
        new Vb({
          definition: t3[r2(957)]
        })
      ]));
      else if (t3 instanceof Bb) return c2([
        new Lb({
          definition: t3.definition
        }),
        new Vb({
          definition: [
            new J({
              terminalType: t3.separator
            })
          ].concat(t3.definition)
        })
      ]);
      else if (t3 instanceof Hb) i2 = c2(t3[r2(957)][r2(1758)]([
        new Vb({
          definition: [
            new J({
              terminalType: t3.separator
            })
          ][r2(1758)](t3.definition)
        })
      ]));
      else if (t3 instanceof Vb) i2 = c2(t3.definition.concat([
        new Vb({
          definition: t3[r2(957)]
        })
      ]));
      else if (t3 instanceof Ub) return W(t3.definition, (e3) => {
        q(e3.definition) === false && (i2 = c2(e3.definition));
      }), i2;
      else if (t3 instanceof J) n2.push(t3[r2(767)]);
      else throw Error(`non exhaustive match`);
      a2++;
    }
    return i2.push({
      partialPath: n2,
      suffixDef: $v(e2, a2)
    }), i2;
  }
  M(QS, s(261));
  function $S(e2, t2, n2, r2) {
    let i2 = s, a2 = `EXIT_NONE_TERMINAL`, o2 = [
      a2
    ], c2 = `EXIT_ALTERNATIVE`, l2 = false, u2 = t2[i2(1663)], d2 = u2 - r2 - 1, f2 = [], p2 = [];
    for (p2.push({
      idx: -1,
      def: e2,
      ruleStack: [],
      occurrenceStack: []
    }); !q(p2); ) {
      let e3 = p2.pop();
      if (e3 === c2) {
        l2 && Zv(p2).idx <= d2 && p2.pop();
        continue;
      }
      let r3 = e3[i2(1423)], s2 = e3[i2(484)], m2 = e3.ruleStack, h2 = e3.occurrenceStack;
      if (q(r3)) continue;
      let g2 = r3[0];
      if (g2 === a2) {
        let e4 = {
          idx: s2,
          def: $v(r3),
          ruleStack: ty(m2),
          occurrenceStack: ty(h2)
        };
        p2.push(e4);
      } else if (g2 instanceof J) if (s2 < u2 - 1) {
        let e4 = s2 + 1, a3 = t2[e4];
        if (n2(a3, g2[i2(767)])) {
          let t3 = {
            idx: e4,
            def: $v(r3),
            ruleStack: m2,
            occurrenceStack: h2
          };
          p2.push(t3);
        }
      } else if (s2 === u2 - 1) f2.push({
        nextTokenType: g2.terminalType,
        nextTokenOccurrence: g2[i2(484)],
        ruleStack: m2,
        occurrenceStack: h2
      }), l2 = true;
      else throw Error(`non exhaustive match`);
      else if (g2 instanceof Fb) {
        let e4 = $g(m2);
        e4.push(g2.nonTerminalName);
        let t3 = $g(h2);
        t3[i2(1168)](g2.idx);
        let n3 = {
          idx: s2,
          def: g2.definition.concat(o2, $v(r3)),
          ruleStack: e4,
          occurrenceStack: t3
        };
        p2.push(n3);
      } else if (g2 instanceof Rb) {
        let e4 = {
          idx: s2,
          def: $v(r3),
          ruleStack: m2,
          occurrenceStack: h2
        };
        p2.push(e4), p2[i2(1168)](c2);
        let t3 = {
          idx: s2,
          def: g2.definition.concat($v(r3)),
          ruleStack: m2,
          occurrenceStack: h2
        };
        p2.push(t3);
      } else if (g2 instanceof zb) {
        let e4 = new Vb({
          definition: g2.definition,
          idx: g2.idx
        }), t3 = {
          idx: s2,
          def: g2.definition.concat([
            e4
          ], $v(r3)),
          ruleStack: m2,
          occurrenceStack: h2
        };
        p2.push(t3);
      } else if (g2 instanceof Bb) {
        let e4 = new Vb({
          definition: [
            new J({
              terminalType: g2.separator
            })
          ].concat(g2[i2(957)]),
          idx: g2[i2(484)]
        }), t3 = {
          idx: s2,
          def: g2.definition.concat([
            e4
          ], $v(r3)),
          ruleStack: m2,
          occurrenceStack: h2
        };
        p2.push(t3);
      } else if (g2 instanceof Hb) {
        let e4 = {
          idx: s2,
          def: $v(r3),
          ruleStack: m2,
          occurrenceStack: h2
        };
        p2.push(e4), p2.push(c2);
        let t3 = new Vb({
          definition: [
            new J({
              terminalType: g2.separator
            })
          ].concat(g2.definition),
          idx: g2.idx
        }), n3 = {
          idx: s2,
          def: g2.definition.concat([
            t3
          ], $v(r3)),
          ruleStack: m2,
          occurrenceStack: h2
        };
        p2[i2(1168)](n3);
      } else if (g2 instanceof Vb) {
        let e4 = {
          idx: s2,
          def: $v(r3),
          ruleStack: m2,
          occurrenceStack: h2
        };
        p2.push(e4), p2.push(c2);
        let t3 = new Vb({
          definition: g2[i2(957)],
          idx: g2.idx
        }), n3 = {
          idx: s2,
          def: g2.definition.concat([
            t3
          ], $v(r3)),
          ruleStack: m2,
          occurrenceStack: h2
        };
        p2.push(n3);
      } else if (g2 instanceof Ub) for (let e4 = g2.definition.length - 1; e4 >= 0; e4--) {
        let t3 = {
          idx: s2,
          def: g2.definition[e4].definition.concat($v(r3)),
          ruleStack: m2,
          occurrenceStack: h2
        };
        p2.push(t3), p2.push(c2);
      }
      else if (g2 instanceof Lb) p2.push({
        idx: s2,
        def: g2.definition[i2(1758)]($v(r3)),
        ruleStack: m2,
        occurrenceStack: h2
      });
      else if (g2 instanceof Ib) p2.push(eC(g2, s2, m2, h2));
      else throw Error(`non exhaustive match`);
    }
    return f2;
  }
  M($S, s(702));
  function eC(e2, t2, n2, r2) {
    let i2 = $g(n2);
    i2.push(e2.name);
    let a2 = $g(r2);
    return a2.push(1), {
      idx: t2,
      def: e2.definition,
      ruleStack: i2,
      occurrenceStack: a2
    };
  }
  M(eC, `expandTopLevelRule`);
  var tC;
  (function(e2) {
    let t2 = s;
    e2[e2.OPTION = 0] = t2(833), e2[e2.REPETITION = 1] = `REPETITION`, e2[e2.REPETITION_MANDATORY = 2] = `REPETITION_MANDATORY`, e2[e2.REPETITION_MANDATORY_WITH_SEPARATOR = 3] = `REPETITION_MANDATORY_WITH_SEPARATOR`, e2[e2.REPETITION_WITH_SEPARATOR = 4] = `REPETITION_WITH_SEPARATOR`, e2[e2.ALTERNATION = 5] = `ALTERNATION`;
  })(tC || (tC = {}));
  function nC(e2) {
    let t2 = s;
    if (e2 instanceof Rb || e2 === `Option`) return tC.OPTION;
    if (e2 instanceof Vb || e2 === `Repetition`) return tC.REPETITION;
    if (e2 instanceof zb || e2 === `RepetitionMandatory`) return tC.REPETITION_MANDATORY;
    if (e2 instanceof Bb || e2 === t2(1131)) return tC.REPETITION_MANDATORY_WITH_SEPARATOR;
    if (e2 instanceof Hb || e2 === `RepetitionWithSeparator`) return tC.REPETITION_WITH_SEPARATOR;
    if (e2 instanceof Ub || e2 === `Alternation`) return tC[t2(1351)];
    throw Error(`non exhaustive match`);
  }
  M(nC, `getProdType`);
  function rC(e2) {
    let { occurrence: t2, rule: n2, prodType: r2, maxLookahead: i2 } = e2, a2 = nC(r2);
    return a2 === tC.ALTERNATION ? mC(t2, n2, i2) : hC(t2, n2, a2, i2);
  }
  M(rC, `getLookaheadPaths`);
  function iC(e2, t2, n2, r2, i2, a2) {
    let o2 = mC(e2, t2, n2);
    return a2(o2, r2, vC(o2) ? oS : aS, i2);
  }
  M(iC, `buildLookaheadFuncForOr`);
  function aC(e2, t2, n2, r2, i2, a2) {
    let o2 = hC(e2, t2, i2, n2), s2 = vC(o2) ? oS : aS;
    return a2(o2[0], s2, r2);
  }
  M(aC, `buildLookaheadFuncForOptionalProd`);
  function oC(e2, t2, n2, r2) {
    let i2 = s, a2 = e2.length, o2 = uy(e2, (e3) => uy(e3, (e4) => e4[i2(1663)] === 1));
    if (t2) return function(t3) {
      let r3 = i2, o3 = G(t3, (e3) => e3[r3(890)]);
      for (let t4 = 0; t4 < a2; t4++) {
        let r4 = e2[t4], i3 = r4.length, a3 = o3[t4];
        if (!(a3 !== void 0 && a3.call(this) === false)) b0: for (let e3 = 0; e3 < i3; e3++) {
          let i4 = r4[e3], a4 = i4.length;
          for (let e4 = 0; e4 < a4; e4++) if (n2(this.LA(e4 + 1), i4[e4]) === false) continue b0;
          return t4;
        }
      }
    };
    if (o2 && !r2) {
      let t3 = hb(G(e2, (e3) => hm(e3)), (e3, t4, n3) => (W(t4, (t5) => {
        K(e3, t5.tokenTypeIdx) || (e3[t5.tokenTypeIdx] = n3), W(t5.categoryMatches, (t6) => {
          K(e3, t6) || (e3[t6] = n3);
        });
      }), e3), {});
      return function() {
        let e3 = i2;
        return t3[this.LA(1)[e3(1142)]];
      };
    } else return function() {
      for (let t3 = 0; t3 < a2; t3++) {
        let r3 = e2[t3], i3 = r3.length;
        aY: for (let e3 = 0; e3 < i3; e3++) {
          let i4 = r3[e3], a3 = i4.length;
          for (let e4 = 0; e4 < a3; e4++) if (n2(this.LA(e4 + 1), i4[e4]) === false) continue aY;
          return t3;
        }
      }
    };
  }
  M(oC, s(991));
  function sC(e2, t2, n2) {
    let r2 = s, i2 = uy(e2, (e3) => e3.length === 1), a2 = e2.length;
    if (i2 && !n2) {
      let t3 = hm(e2);
      if (t3[r2(1663)] === 1 && q(t3[0].categoryMatches)) {
        let e3 = t3[0][r2(1142)];
        return function() {
          return this.LA(1).tokenTypeIdx === e3;
        };
      } else {
        let e3 = hb(t3, (e4, t4, n3) => (e4[t4.tokenTypeIdx] = true, W(t4.categoryMatches, (t5) => {
          e4[t5] = true;
        }), e4), []);
        return function() {
          return e3[this.LA(1).tokenTypeIdx] === true;
        };
      }
    } else return function() {
      aW: for (let n3 = 0; n3 < a2; n3++) {
        let r3 = e2[n3], i3 = r3.length;
        for (let e3 = 0; e3 < i3; e3++) if (t2(this.LA(e3 + 1), r3[e3]) === false) continue aW;
        return true;
      }
      return false;
    };
  }
  M(sC, `buildSingleAlternativeLookaheadFunction`);
  var cC = (de = class extends Zb {
    constructor(e2, t2, n2) {
      let r2 = s;
      super(), this.topProd = e2, this.targetOccurrence = t2, this[r2(1622)] = n2;
    }
    startWalking() {
      let e2 = s;
      return this.walk(this[e2(646)]), this.restDef;
    }
    [s(748)](e2, t2, n2, r2) {
      return e2.idx === this.targetOccurrence && this.targetProdType === t2 ? (this.restDef = n2.concat(r2), true) : false;
    }
    walkOption(e2, t2, n2) {
      this.checkIsTarget(e2, tC.OPTION, t2, n2) || super.walkOption(e2, t2, n2);
    }
    [s(1767)](e2, t2, n2) {
      this.checkIsTarget(e2, tC.REPETITION_MANDATORY, t2, n2) || super.walkOption(e2, t2, n2);
    }
    walkAtLeastOneSep(e2, t2, n2) {
      this.checkIsTarget(e2, tC.REPETITION_MANDATORY_WITH_SEPARATOR, t2, n2) || super.walkOption(e2, t2, n2);
    }
    walkMany(e2, t2, n2) {
      this.checkIsTarget(e2, tC.REPETITION, t2, n2) || super.walkOption(e2, t2, n2);
    }
    walkManySep(e2, t2, n2) {
      let r2 = s;
      this.checkIsTarget(e2, tC[r2(805)], t2, n2) || super.walkOption(e2, t2, n2);
    }
  }, M(de, `RestDefinitionFinderWalker`), de), lC = (k = class extends Kb {
    constructor(e2, t2, n2) {
      let r2 = s;
      super(), this[r2(560)] = e2, this[r2(1622)] = t2, this.targetRef = n2, this.result = [];
    }
    checkIsTarget(e2, t2) {
      let n2 = s;
      e2[n2(484)] === this.targetOccurrence && this.targetProdType === t2 && (this[n2(1388)] === void 0 || e2 === this.targetRef) && (this.result = e2.definition);
    }
    visitOption(e2) {
      this.checkIsTarget(e2, tC.OPTION);
    }
    visitRepetition(e2) {
      let t2 = s;
      this[t2(748)](e2, tC.REPETITION);
    }
    [s(409)](e2) {
      let t2 = s;
      this[t2(748)](e2, tC.REPETITION_MANDATORY);
    }
    [s(664)](e2) {
      this.checkIsTarget(e2, tC.REPETITION_MANDATORY_WITH_SEPARATOR);
    }
    visitRepetitionWithSeparator(e2) {
      let t2 = s;
      this[t2(748)](e2, tC[t2(805)]);
    }
    visitAlternation(e2) {
      let t2 = s;
      this.checkIsTarget(e2, tC[t2(1351)]);
    }
  }, M(k, `InsideDefinitionFinderVisitor`), k);
  function uC(e2) {
    let t2 = Array(e2);
    for (let n2 = 0; n2 < e2; n2++) t2[n2] = [];
    return t2;
  }
  M(uC, `initializeArrayOfArrays`);
  function dC(e2) {
    let t2 = s, n2 = [
      ``
    ];
    for (let r2 = 0; r2 < e2.length; r2++) {
      let i2 = e2[r2], a2 = [];
      for (let e3 = 0; e3 < n2[t2(1663)]; e3++) {
        let r3 = n2[e3];
        a2[t2(1168)](r3 + `_` + i2.tokenTypeIdx);
        for (let e4 = 0; e4 < i2.categoryMatches.length; e4++) {
          let n3 = `_` + i2[t2(1629)][e4];
          a2.push(r3 + n3);
        }
      }
      n2 = a2;
    }
    return n2;
  }
  M(dC, `pathToHashKeys`);
  function fC(e2, t2, n2) {
    for (let r2 = 0; r2 < e2.length; r2++) {
      if (r2 === n2) continue;
      let i2 = e2[r2];
      for (let e3 = 0; e3 < t2.length; e3++) if (i2[t2[e3]] === true) return false;
    }
    return true;
  }
  M(fC, s(1455));
  function pC(e2, t2) {
    let n2 = s, r2 = G(e2, (e3) => QS([
      e3
    ], 1)), i2 = uC(r2.length), a2 = G(r2, (e3) => {
      let t3 = {};
      return W(e3, (e4) => {
        W(dC(e4.partialPath), (e5) => {
          t3[e5] = true;
        });
      }), t3;
    }), o2 = r2;
    for (let e3 = 1; e3 <= t2; e3++) {
      let r3 = o2;
      o2 = uC(r3.length);
      for (let s2 = 0; s2 < r3[n2(1663)]; s2++) {
        let n3 = r3[s2];
        for (let r4 = 0; r4 < n3.length; r4++) {
          let c2 = n3[r4].partialPath, l2 = n3[r4].suffixDef, u2 = dC(c2);
          if (fC(a2, u2, s2) || q(l2) || c2.length === t2) {
            let e4 = i2[s2];
            if (gC(e4, c2) === false) {
              e4.push(c2);
              for (let e5 = 0; e5 < u2.length; e5++) {
                let t3 = u2[e5];
                a2[s2][t3] = true;
              }
            }
          } else {
            let t3 = QS(l2, e3 + 1, c2);
            o2[s2] = o2[s2].concat(t3), W(t3, (e4) => {
              W(dC(e4.partialPath), (e5) => {
                a2[s2][e5] = true;
              });
            });
          }
        }
      }
    }
    return i2;
  }
  M(pC, `lookAheadSequenceFromAlternatives`);
  function mC(e2, t2, n2, r2) {
    let i2 = s, a2 = new lC(e2, tC.ALTERNATION, r2);
    return t2.accept(a2), pC(a2[i2(1025)], n2);
  }
  M(mC, s(1338));
  function hC(e2, t2, n2, r2) {
    let i2 = s, a2 = new lC(e2, n2);
    t2[i2(467)](a2);
    let o2 = a2.result, c2 = new cC(t2, e2, n2).startWalking();
    return pC([
      new Lb({
        definition: o2
      }),
      new Lb({
        definition: c2
      })
    ], r2);
  }
  M(hC, `getLookaheadPathsForOptionalProd`);
  function gC(e2, t2) {
    aJ: for (let n2 = 0; n2 < e2.length; n2++) {
      let r2 = e2[n2];
      if (r2.length === t2.length) {
        for (let e3 = 0; e3 < r2.length; e3++) {
          let n3 = t2[e3], i2 = r2[e3];
          if (!(n3 === i2 || i2.categoryMatchesMap[n3.tokenTypeIdx] !== void 0)) continue aJ;
        }
        return true;
      }
    }
    return false;
  }
  M(gC, `containsPath`);
  function _C(e2, t2) {
    return e2.length < t2.length && uy(e2, (e3, n2) => {
      let r2 = t2[n2];
      return e3 === r2 || r2.categoryMatchesMap[e3.tokenTypeIdx];
    });
  }
  M(_C, `isStrictPrefixOfPath`);
  function vC(e2) {
    let t2 = s;
    return uy(e2, (e3) => uy(e3, (e4) => uy(e4, (e5) => q(e5[t2(1629)]))));
  }
  M(vC, s(1741));
  function yC(e2) {
    let t2 = s;
    return G(e2[t2(1311)].validate({
      rules: e2.rules,
      tokenTypes: e2[t2(1507)],
      grammarName: e2.grammarName
    }), (e3) => Object.assign({
      type: Xw.CUSTOM_LOOKAHEAD_VALIDATION
    }, e3));
  }
  M(yC, `validateLookahead`);
  function bC(e2, t2, n2, r2) {
    let i2 = Ey(e2, (e3) => xC(e3, n2)), a2 = LC(e2, t2, n2), o2 = Ey(e2, (e3) => NC(e3, n2)), s2 = Ey(e2, (t3) => TC(t3, e2, r2, n2));
    return i2.concat(a2, o2, s2);
  }
  M(bC, `validateGrammar`);
  function xC(e2, t2) {
    let n2 = s, r2 = new wC();
    e2.accept(r2);
    let i2 = r2[n2(979)];
    return G(zy(db(Oy(i2, SC), (e3) => e3.length > 1)), (r3) => {
      let i3 = n2, a2 = xy(r3), o2 = t2.buildDuplicateFoundError(e2, r3), s2 = Xb(a2), c2 = {
        message: o2,
        type: Xw.DUPLICATE_PRODUCTIONS,
        ruleName: e2.name,
        dslName: s2,
        occurrence: a2.idx
      }, l2 = CC(a2);
      return l2 && (c2[i3(1615)] = l2), c2;
    });
  }
  M(xC, `validateDuplicateProductions`);
  function SC(e2) {
    return Xb(e2) + `_#_` + e2.idx + `_#_` + CC(e2);
  }
  M(SC, `identifyProductionForDuplicates`);
  function CC(e2) {
    let t2 = s;
    return e2 instanceof J ? e2[t2(767)][t2(747)] : e2 instanceof Fb ? e2[t2(1535)] : ``;
  }
  M(CC, `getExtraProductionArgument`);
  var wC = (A = class extends Kb {
    constructor() {
      super(...arguments), this.allProductions = [];
    }
    visitNonTerminal(e2) {
      this.allProductions.push(e2);
    }
    visitOption(e2) {
      let t2 = s;
      this[t2(979)].push(e2);
    }
    visitRepetitionWithSeparator(e2) {
      this.allProductions.push(e2);
    }
    visitRepetitionMandatory(e2) {
      this.allProductions.push(e2);
    }
    [s(664)](e2) {
      this.allProductions.push(e2);
    }
    visitRepetition(e2) {
      this.allProductions.push(e2);
    }
    [s(999)](e2) {
      this.allProductions.push(e2);
    }
    visitTerminal(e2) {
      this.allProductions.push(e2);
    }
  }, M(A, `OccurrenceValidationCollector`), A);
  function TC(e2, t2, n2, r2) {
    let i2 = s, a2 = [];
    if (hb(t2, (t3, n3) => n3.name === e2[i2(747)] ? t3 + 1 : t3, 0) > 1) {
      let t3 = r2[i2(434)]({
        topLevelRule: e2,
        grammarName: n2
      });
      a2.push({
        message: t3,
        type: Xw.DUPLICATE_RULE_NAME,
        ruleName: e2.name
      });
    }
    return a2;
  }
  M(TC, `validateRuleDoesNotAlreadyExist`);
  function EC(e2, t2, n2) {
    let r2 = s, i2 = [], a2;
    return Hy(t2, e2) || (a2 = `Invalid rule override, rule: ->` + e2 + `<- cannot be overridden in the grammar: ->` + n2 + r2(1716), i2[r2(1168)]({
      message: a2,
      type: Xw[r2(1382)],
      ruleName: e2
    })), i2;
  }
  M(EC, `validateRuleIsOverridden`);
  function DC(e2, t2, n2, r2 = []) {
    let i2 = [], a2 = OC(t2.definition);
    if (q(a2)) return [];
    {
      let t3 = e2.name;
      Hy(a2, e2) && i2.push({
        message: n2.buildLeftRecursionError({
          topLevelRule: e2,
          leftRecursionPath: r2
        }),
        type: Xw.LEFT_RECURSION,
        ruleName: t3
      });
      let o2 = Ey(Yv(a2, r2.concat([
        e2
      ])), (t4) => {
        let i3 = X, a3 = $g(r2);
        return a3[i3(1168)](t4), DC(e2, t4, n2, a3);
      });
      return i2.concat(o2);
    }
  }
  M(DC, `validateNoLeftRecursion`);
  function OC(e2) {
    let t2 = [];
    if (q(e2)) return t2;
    let n2 = xy(e2);
    if (n2 instanceof Fb) t2.push(n2.referencedRule);
    else if (n2 instanceof Lb || n2 instanceof Rb || n2 instanceof zb || n2 instanceof Bb || n2 instanceof Hb || n2 instanceof Vb) t2 = t2.concat(OC(n2.definition));
    else if (n2 instanceof Ub) t2 = hm(G(n2.definition, (e3) => OC(e3.definition)));
    else if (!(n2 instanceof J)) throw Error(`non exhaustive match`);
    let r2 = Jb(n2), i2 = e2.length > 1;
    if (r2 && i2) {
      let n3 = $v(e2);
      return t2.concat(OC(n3));
    } else return t2;
  }
  M(OC, `getFirstNoneTerminal`);
  var kC = (fe = class extends Kb {
    constructor() {
      super(...arguments), this.alternations = [];
    }
    visitAlternation(e2) {
      this.alternations.push(e2);
    }
  }, M(fe, `OrCollector`), fe);
  function AC(e2, t2) {
    let n2 = s, r2 = new kC();
    e2[n2(467)](r2);
    let i2 = r2[n2(1225)];
    return Ey(i2, (n3) => Ey(ty(n3.definition), (r3, i3) => q($S([
      r3
    ], [], aS, 1)) ? [
      {
        message: t2.buildEmptyAlternationError({
          topLevelRule: e2,
          alternation: n3,
          emptyChoiceIdx: i3
        }),
        type: Xw.NONE_LAST_EMPTY_ALT,
        ruleName: e2.name,
        occurrence: n3.idx,
        alternative: i3 + 1
      }
    ] : []));
  }
  M(AC, `validateEmptyOrAlternative`);
  function jC(e2, t2, n2) {
    let r2 = s, i2 = new kC();
    e2[r2(467)](i2);
    let a2 = i2.alternations;
    return a2 = _b(a2, (e3) => e3.ignoreAmbiguities === true), Ey(a2, (i3) => {
      let a3 = r2, o2 = i3.idx, s2 = mC(o2, e2, i3.maxLookahead || t2, i3), c2 = FC(s2, i3, e2, n2), l2 = IC(s2, i3, e2, n2);
      return c2[a3(1758)](l2);
    });
  }
  M(jC, `validateAmbiguousAlternationAlternatives`);
  var MC = (j = class extends Kb {
    constructor() {
      super(...arguments), this.allProductions = [];
    }
    visitRepetitionWithSeparator(e2) {
      this.allProductions.push(e2);
    }
    visitRepetitionMandatory(e2) {
      let t2 = s;
      this[t2(979)][t2(1168)](e2);
    }
    visitRepetitionMandatoryWithSeparator(e2) {
      this.allProductions.push(e2);
    }
    [s(1265)](e2) {
      this.allProductions.push(e2);
    }
  }, M(j, `RepetitionCollector`), j);
  function NC(e2, t2) {
    let n2 = s, r2 = new kC();
    e2.accept(r2);
    let i2 = r2.alternations;
    return Ey(i2, (r3) => r3.definition.length > 255 ? [
      {
        message: t2.buildTooManyAlternativesError({
          topLevelRule: e2,
          alternation: r3
        }),
        type: Xw[n2(703)],
        ruleName: e2[n2(747)],
        occurrence: r3[n2(484)]
      }
    ] : []);
  }
  M(NC, `validateTooManyAlts`);
  function PC(e2, t2, n2) {
    let r2 = [];
    return W(e2, (e3) => {
      let i2 = X, a2 = new MC();
      e3[i2(467)](a2);
      let o2 = a2.allProductions;
      W(o2, (a3) => {
        let o3 = i2, s2 = nC(a3), c2 = a3.maxLookahead || t2, l2 = a3.idx, u2 = hC(l2, e3, s2, c2)[0];
        if (q(hm(u2))) {
          let t3 = n2.buildEmptyRepetitionError({
            topLevelRule: e3,
            repetition: a3
          });
          r2[o3(1168)]({
            message: t3,
            type: Xw.NO_NON_EMPTY_LOOKAHEAD,
            ruleName: e3[o3(747)]
          });
        }
      });
    }), r2;
  }
  M(PC, `validateSomeNonEmptyLookaheadPath`);
  function FC(e2, t2, n2, r2) {
    let i2 = s, a2 = [];
    return G(hb(e2, (n3, r3, o2) => (t2.definition[o2][i2(481)] === true || W(r3, (r4) => {
      let i3 = [
        o2
      ];
      W(e2, (e3, n4) => {
        let a3 = X;
        o2 !== n4 && gC(e3, r4) && t2.definition[n4][a3(481)] !== true && i3.push(n4);
      }), i3.length > 1 && !gC(a2, r4) && (a2.push(r4), n3.push({
        alts: i3,
        path: r4
      }));
    }), n3), []), (e3) => {
      let a3 = i2, o2 = G(e3.alts, (e4) => e4 + 1);
      return {
        message: r2.buildAlternationAmbiguityError({
          topLevelRule: n2,
          alternation: t2,
          ambiguityIndices: o2,
          prefixPath: e3.path
        }),
        type: Xw.AMBIGUOUS_ALTS,
        ruleName: n2[a3(747)],
        occurrence: t2.idx,
        alternatives: e3[a3(1764)]
      };
    });
  }
  M(FC, `checkAlternativesAmbiguities`);
  function IC(e2, t2, n2, r2) {
    let i2 = hb(e2, (e3, t3, n3) => {
      let r3 = G(t3, (e4) => ({
        idx: n3,
        path: e4
      }));
      return e3.concat(r3);
    }, []);
    return t_(Ey(i2, (e3) => {
      let a2 = X;
      if (t2.definition[e3.idx].ignoreAmbiguities === true) return [];
      let o2 = e3.idx, s2 = e3.path;
      return G(my(i2, (e4) => t2.definition[e4[a2(484)]].ignoreAmbiguities !== true && e4.idx < o2 && _C(e4.path, s2)), (e4) => {
        let i3 = [
          e4.idx + 1,
          o2 + 1
        ], a3 = t2.idx === 0 ? `` : t2.idx;
        return {
          message: r2.buildAlternationPrefixAmbiguityError({
            topLevelRule: n2,
            alternation: t2,
            ambiguityIndices: i3,
            prefixPath: e4.path
          }),
          type: Xw.AMBIGUOUS_PREFIX_ALTS,
          ruleName: n2.name,
          occurrence: a3,
          alternatives: i3
        };
      });
    }));
  }
  M(IC, s(1773));
  function LC(e2, t2, n2) {
    let r2 = [], i2 = G(t2, (e3) => e3.name);
    return W(e2, (e3) => {
      let t3 = e3.name;
      if (Hy(i2, t3)) {
        let i3 = n2.buildNamespaceConflictError(e3);
        r2.push({
          message: i3,
          type: Xw.CONFLICT_TOKENS_RULES_NAMESPACE,
          ruleName: t3
        });
      }
    }), r2;
  }
  M(LC, `checkTerminalAndNoneTerminalsNameSpace`);
  function RC(e2) {
    let t2 = Vv(e2, {
      errMsgProvider: VS
    }), n2 = {};
    return W(e2.rules, (e3) => {
      n2[e3.name] = e3;
    }), US(n2, t2.errMsgProvider);
  }
  M(RC, s(1238));
  function zC(e2) {
    return e2 = Vv(e2, {
      errMsgProvider: HS
    }), bC(e2.rules, e2.tokenTypes, e2.errMsgProvider, e2.grammarName);
  }
  M(zC, `validateGrammar`);
  var BC = s(1331), VC = s(266), HC = `EarlyExitException`, UC = `NotAllInputParsedException`, WC = [
    BC,
    VC,
    HC,
    UC
  ];
  Object.freeze(WC);
  function GC(e2) {
    return Hy(WC, e2.name);
  }
  M(GC, `isRecognitionException`);
  var KC = (pe = class extends Error {
    constructor(e2, t2) {
      let n2 = s;
      super(e2), this.token = t2, this.resyncedTokens = [], Object.setPrototypeOf(this, new.target.prototype), Error.captureStackTrace && Error[n2(1290)](this, this[n2(1406)]);
    }
  }, M(pe, `RecognitionException`), pe), qC = (me = class extends KC {
    constructor(e2, t2, n2) {
      super(e2, t2), this.previousToken = n2, this.name = BC;
    }
  }, M(me, `MismatchedTokenException`), me), JC = (he = class extends KC {
    constructor(e2, t2, n2) {
      super(e2, t2), this.previousToken = n2, this.name = VC;
    }
  }, M(he, s(266)), he), YC = (ge = class extends KC {
    constructor(e2, t2) {
      super(e2, t2), this.name = UC;
    }
  }, M(ge, s(692)), ge), XC = (_e = class extends KC {
    constructor(e2, t2, n2) {
      let r2 = s;
      super(e2, t2), this[r2(552)] = n2, this.name = HC;
    }
  }, M(_e, `EarlyExitException`), _e), ZC = {}, QC = `InRuleRecoveryException`, $C = (ve = class extends Error {
    constructor(e2) {
      super(e2), this.name = QC;
    }
  }, M(ve, `InRuleRecoveryException`), ve), ew = (ye = class {
    initRecoverable(e2) {
      let t2 = s;
      this.firstAfterRepMap = {}, this.resyncFollows = {}, this[t2(480)] = K(e2, `recoveryEnabled`) ? e2[t2(480)] : Jw[t2(480)], this.recoveryEnabled && (this.attemptInRepetitionRecovery = tw);
    }
    getTokenToInsert(e2) {
      let t2 = s, n2 = RS(e2, ``, NaN, NaN, NaN, NaN, NaN, NaN);
      return n2[t2(490)] = true, n2;
    }
    canTokenTypeBeInsertedInRecovery(e2) {
      return true;
    }
    canTokenTypeBeDeletedInRecovery(e2) {
      return true;
    }
    tryInRepetitionRecovery(e2, t2, n2, r2) {
      let i2 = this.findReSyncTokenType(), a2 = this.exportLexerState(), o2 = [], s2 = false, c2 = this.LA(1), l2 = this.LA(1), u2 = M(() => {
        let e3 = this.LA(0), t3 = new qC(this.errorMessageProvider.buildMismatchTokenMessage({
          expected: r2,
          actual: c2,
          previous: e3,
          ruleName: this.getCurrRuleFullName()
        }), c2, this.LA(0));
        t3.resyncedTokens = ty(o2), this.SAVE_ERROR(t3);
      }, `generateErrorMessage`);
      for (; !s2; ) if (this.tokenMatcher(l2, r2)) {
        u2();
        return;
      } else if (n2.call(this)) {
        u2(), e2.apply(this, t2);
        return;
      } else this.tokenMatcher(l2, i2) ? s2 = true : (l2 = this.SKIP_TOKEN(), this.addToResyncTokens(l2, o2));
      this.importLexerState(a2);
    }
    shouldInRepetitionRecoveryBeTried(e2, t2, n2) {
      let r2 = s;
      return !(n2 === false || this.tokenMatcher(this.LA(1), e2) || this.isBackTracking() || this[r2(791)](e2, this.getFollowsForInRuleRecovery(e2, t2)));
    }
    getFollowsForInRuleRecovery(e2, t2) {
      let n2 = this.getCurrentGrammarPath(e2, t2);
      return this.getNextPossibleTokenTypes(n2);
    }
    [s(1633)](e2, t2) {
      if (this.canRecoverWithSingleTokenInsertion(e2, t2)) return this.getTokenToInsert(e2);
      if (this.canRecoverWithSingleTokenDeletion(e2)) {
        let e3 = this.SKIP_TOKEN();
        return this.consumeToken(), e3;
      }
      throw new $C(`sad sad panda`);
    }
    canPerformInRuleRecovery(e2, t2) {
      return this.canRecoverWithSingleTokenInsertion(e2, t2) || this.canRecoverWithSingleTokenDeletion(e2);
    }
    [s(1762)](e2, t2) {
      let n2 = s;
      if (!this[n2(829)](e2) || q(t2)) return false;
      let r2 = this.LA(1);
      return yy(t2, (e3) => this.tokenMatcher(r2, e3)) !== void 0;
    }
    canRecoverWithSingleTokenDeletion(e2) {
      return this.canTokenTypeBeDeletedInRecovery(e2) ? this.tokenMatcher(this.LA(2), e2) : false;
    }
    isInCurrentRuleReSyncSet(e2) {
      let t2 = s, n2 = this.getCurrFollowKey();
      return Hy(this[t2(705)](n2), e2);
    }
    findReSyncTokenType() {
      let e2 = this.flattenFollowSet(), t2 = this.LA(1), n2 = 2;
      for (; ; ) {
        let r2 = yy(e2, (e3) => zS(t2, e3));
        if (r2 !== void 0) return r2;
        t2 = this.LA(n2), n2++;
      }
    }
    getCurrFollowKey() {
      let e2 = s;
      if (this[e2(859)].length === 1) return ZC;
      let t2 = this[e2(1072)](), n2 = this.getLastExplicitRuleOccurrenceIndex(), r2 = this.getPreviousExplicitRuleShortName();
      return {
        ruleName: this.shortRuleNameToFullName(t2),
        idxInCallingRule: n2,
        inRule: this.shortRuleNameToFullName(r2)
      };
    }
    buildFullFollowKeyStack() {
      let e2 = s, t2 = this.RULE_STACK, n2 = this.RULE_OCCURRENCE_STACK;
      return G(t2, (r2, i2) => i2 === 0 ? ZC : {
        ruleName: this.shortRuleNameToFullName(r2),
        idxInCallingRule: n2[i2],
        inRule: this[e2(1646)](t2[i2 - 1])
      });
    }
    flattenFollowSet() {
      let e2 = s;
      return hm(G(this[e2(416)](), (e3) => this.getFollowSetFromFollowKey(e3)));
    }
    [s(705)](e2) {
      if (e2 === ZC) return [
        LS
      ];
      let t2 = e2.ruleName + e2.idxInCallingRule + rx + e2.inRule;
      return this.resyncFollows[t2];
    }
    addToResyncTokens(e2, t2) {
      return this.tokenMatcher(e2, LS) || t2.push(e2), t2;
    }
    reSyncTo(e2) {
      let t2 = [], n2 = this.LA(1);
      for (; this.tokenMatcher(n2, e2) === false; ) n2 = this.SKIP_TOKEN(), this.addToResyncTokens(n2, t2);
      return ty(t2);
    }
    attemptInRepetitionRecovery(e2, t2, n2, r2, i2, a2, o2) {
    }
    getCurrentGrammarPath(e2, t2) {
      let n2 = s;
      return {
        ruleStack: this[n2(644)](),
        occurrenceStack: $g(this.RULE_OCCURRENCE_STACK),
        lastTok: e2,
        lastTokOccurrence: t2
      };
    }
    [s(644)]() {
      return G(this.RULE_STACK, (e2) => this.shortRuleNameToFullName(e2));
    }
  }, M(ye, `Recoverable`), ye);
  function tw(e2, t2, n2, r2, i2, a2, o2) {
    let c2 = s, l2 = this.getKeyForAutomaticLookahead(r2, i2), u2 = this.firstAfterRepMap[l2];
    if (u2 === void 0) {
      let e3 = this.getCurrRuleFullName(), t3 = this.getGAstProductions()[e3];
      u2 = new a2(t3, i2).startWalking(), this.firstAfterRepMap[l2] = u2;
    }
    let d2 = u2.token, f2 = u2.occurrence, p2 = u2.isEndOfRule;
    this.RULE_STACK[c2(1663)] === 1 && p2 && d2 === void 0 && (d2 = LS, f2 = 1), !(d2 === void 0 || f2 === void 0) && this[c2(895)](d2, f2, o2) && this.tryInRepetitionRecovery(e2, t2, n2, d2);
  }
  M(tw, s(1680));
  var nw = 4, rw = 8, iw = 8, aw = 1 << rw, ow = 2 << rw, sw = 3 << rw, cw = 4 << rw, lw = 5 << rw, uw = 6 << rw;
  function dw(e2, t2, n2) {
    return n2 | t2 | e2;
  }
  M(dw, `getKeyForAutomaticLookahead`), 32 - iw;
  var fw = (be = class {
    constructor(e2) {
      this.maxLookahead = (e2 == null ? void 0 : e2.maxLookahead) ?? Jw.maxLookahead;
    }
    [s(973)](e2) {
      let t2 = s, n2 = this.validateNoLeftRecursion(e2[t2(1420)]);
      if (q(n2)) {
        let r2 = this[t2(1088)](e2.rules), i2 = this.validateAmbiguousAlternationAlternatives(e2[t2(1420)], this[t2(1141)]), a2 = this.validateSomeNonEmptyLookaheadPath(e2.rules, this.maxLookahead);
        return [
          ...n2,
          ...r2,
          ...i2,
          ...a2
        ];
      }
      return n2;
    }
    validateNoLeftRecursion(e2) {
      return Ey(e2, (e3) => DC(e3, e3, HS));
    }
    validateEmptyOrAlternatives(e2) {
      return Ey(e2, (e3) => AC(e3, HS));
    }
    validateAmbiguousAlternationAlternatives(e2, t2) {
      return Ey(e2, (e3) => jC(e3, t2, HS));
    }
    [s(304)](e2, t2) {
      return PC(e2, t2, HS);
    }
    [s(1352)](e2) {
      return iC(e2.prodOccurrence, e2.rule, e2.maxLookahead, e2.hasPredicates, e2.dynamicTokensEnabled, oC);
    }
    buildLookaheadForOptional(e2) {
      let t2 = s;
      return aC(e2.prodOccurrence, e2.rule, e2[t2(1141)], e2.dynamicTokensEnabled, nC(e2.prodType), sC);
    }
  }, M(be, `LLkLookaheadStrategy`), be), pw = (xe = class {
    initLooksAhead(e2) {
      let t2 = s;
      this.dynamicTokensEnabled = K(e2, `dynamicTokensEnabled`) ? e2.dynamicTokensEnabled : Jw[t2(468)], this.maxLookahead = K(e2, t2(1141)) ? e2.maxLookahead : Jw.maxLookahead, this.lookaheadStrategy = K(e2, `lookaheadStrategy`) ? e2.lookaheadStrategy : new fw({
        maxLookahead: this.maxLookahead
      }), this.lookAheadFuncsCache = /* @__PURE__ */ new Map();
    }
    preComputeLookaheadFunctions(e2) {
      W(e2, (e3) => {
        this.TRACE_INIT(e3.name + ` Rule Lookahead`, () => {
          let { alternation: t2, repetition: n2, option: r2, repetitionMandatory: i2, repetitionMandatoryWithSeparator: a2, repetitionWithSeparator: o2 } = hw(e3);
          W(t2, (t3) => {
            let n3 = t3.idx === 0 ? `` : t3.idx;
            this.TRACE_INIT(`` + Xb(t3) + n3, () => {
              let n4 = X, r3 = this.lookaheadStrategy.buildLookaheadForAlternation({
                prodOccurrence: t3.idx,
                rule: e3,
                maxLookahead: t3.maxLookahead || this.maxLookahead,
                hasPredicates: t3[n4(1567)],
                dynamicTokensEnabled: this.dynamicTokensEnabled
              }), i3 = dw(this.fullRuleNameToShort[e3.name], aw, t3.idx);
              this.setLaFuncCache(i3, r3);
            });
          }), W(n2, (t3) => {
            this.computeLookaheadFunc(e3, t3.idx, sw, `Repetition`, t3.maxLookahead, Xb(t3));
          }), W(r2, (t3) => {
            let n3 = X;
            this.computeLookaheadFunc(e3, t3.idx, ow, `Option`, t3[n3(1141)], Xb(t3));
          }), W(i2, (t3) => {
            let n3 = X;
            this[n3(478)](e3, t3.idx, cw, `RepetitionMandatory`, t3.maxLookahead, Xb(t3));
          }), W(a2, (t3) => {
            let n3 = X;
            this.computeLookaheadFunc(e3, t3.idx, uw, `RepetitionMandatoryWithSeparator`, t3[n3(1141)], Xb(t3));
          }), W(o2, (t3) => {
            this.computeLookaheadFunc(e3, t3.idx, lw, `RepetitionWithSeparator`, t3.maxLookahead, Xb(t3));
          });
        });
      });
    }
    computeLookaheadFunc(e2, t2, n2, r2, i2, a2) {
      this.TRACE_INIT(`` + a2 + (t2 === 0 ? `` : t2), () => {
        let a3 = X, o2 = this.lookaheadStrategy.buildLookaheadForOptional({
          prodOccurrence: t2,
          rule: e2,
          maxLookahead: i2 || this.maxLookahead,
          dynamicTokensEnabled: this.dynamicTokensEnabled,
          prodType: r2
        }), s2 = dw(this.fullRuleNameToShort[e2[a3(747)]], n2, t2);
        this.setLaFuncCache(s2, o2);
      });
    }
    getKeyForAutomaticLookahead(e2, t2) {
      let n2 = s;
      return dw(this[n2(1072)](), e2, t2);
    }
    getLaFuncFromCache(e2) {
      let t2 = s;
      return this.lookAheadFuncsCache[t2(1419)](e2);
    }
    [s(1515)](e2, t2) {
      let n2 = s;
      this[n2(1669)].set(e2, t2);
    }
  }, M(xe, `LooksAhead`), xe), mw = new (Se = class extends Kb {
    constructor() {
      super(...arguments), this.dslMethods = {
        option: [],
        alternation: [],
        repetition: [],
        repetitionWithSeparator: [],
        repetitionMandatory: [],
        repetitionMandatoryWithSeparator: []
      };
    }
    reset() {
      this.dslMethods = {
        option: [],
        alternation: [],
        repetition: [],
        repetitionWithSeparator: [],
        repetitionMandatory: [],
        repetitionMandatoryWithSeparator: []
      };
    }
    visitOption(e2) {
      let t2 = s;
      this.dslMethods.option[t2(1168)](e2);
    }
    visitRepetitionWithSeparator(e2) {
      let t2 = s;
      this[t2(995)].repetitionWithSeparator.push(e2);
    }
    visitRepetitionMandatory(e2) {
      this.dslMethods.repetitionMandatory.push(e2);
    }
    [s(664)](e2) {
      let t2 = s;
      this[t2(995)][t2(1803)].push(e2);
    }
    visitRepetition(e2) {
      let t2 = s;
      this[t2(995)].repetition[t2(1168)](e2);
    }
    visitAlternation(e2) {
      this.dslMethods.alternation.push(e2);
    }
  }, M(Se, `DslMethodsCollectorVisitor`), Se)();
  function hw(e2) {
    mw[s(687)](), e2.accept(mw);
    let t2 = mw.dslMethods;
    return mw.reset(), t2;
  }
  M(hw, `collectMethods`);
  function gw(e2, t2) {
    isNaN(e2.startOffset) === true ? (e2.startOffset = t2.startOffset, e2.endOffset = t2.endOffset) : e2.endOffset < t2.endOffset && (e2.endOffset = t2.endOffset);
  }
  M(gw, s(884));
  function _w(e2, t2) {
    let n2 = s;
    isNaN(e2.startOffset) === true ? (e2.startOffset = t2.startOffset, e2.startColumn = t2[n2(625)], e2[n2(880)] = t2.startLine, e2[n2(1698)] = t2[n2(1698)], e2.endColumn = t2.endColumn, e2.endLine = t2[n2(951)]) : e2.endOffset < t2[n2(1698)] && (e2.endOffset = t2.endOffset, e2.endColumn = t2.endColumn, e2.endLine = t2.endLine);
  }
  M(_w, s(1711));
  function vw(e2, t2, n2) {
    e2[s(629)][n2] === void 0 ? e2.children[n2] = [
      t2
    ] : e2.children[n2].push(t2);
  }
  M(vw, `addTerminalToCst`);
  function yw(e2, t2, n2) {
    e2.children[t2] === void 0 ? e2.children[t2] = [
      n2
    ] : e2.children[t2].push(n2);
  }
  M(yw, `addNoneTerminalToCst`);
  var bw = `name`;
  function xw(e2, t2) {
    Object.defineProperty(e2, bw, {
      enumerable: false,
      configurable: true,
      writable: false,
      value: t2
    });
  }
  M(xw, `defineNameProp`);
  function Sw(e2, t2) {
    let n2 = s, r2 = Mf(e2), i2 = r2.length;
    for (let a2 = 0; a2 < i2; a2++) {
      let i3 = e2[r2[a2]], o2 = i3.length;
      for (let e3 = 0; e3 < o2; e3++) {
        let r3 = i3[e3];
        r3[n2(1142)] === void 0 && this[r3[n2(747)]](r3.children, t2);
      }
    }
  }
  M(Sw, `defaultVisit`);
  function Cw(e2, t2) {
    let n2 = s, r2 = M(function() {
    }, `derivedConstructor`);
    return xw(r2, e2 + `BaseSemantics`), r2.prototype = {
      visit: M(function(e3, t3) {
        let n3 = X;
        if (V(e3) && (e3 = e3[0]), !nb(e3)) return this[e3[n3(747)]](e3.children, t3);
      }, `visit`),
      validateVisitor: M(function() {
        let e3 = X, n3 = Ew(this, t2);
        if (!q(n3)) {
          let t3 = G(n3, (e4) => e4.msg);
          throw Error(e3(399) + this.constructor.name + `>:
	` + t3.join(`

`).replace(/\n/g, `
	`));
        }
      }, n2(1210))
    }, r2.prototype.constructor = r2, r2._RULE_NAMES = t2, r2;
  }
  M(Cw, s(1634));
  function ww(e2, t2, n2) {
    let r2 = s, i2 = M(function() {
    }, `derivedConstructor`);
    xw(i2, e2 + `BaseSemanticsWithDefaults`);
    let a2 = Object.create(n2[r2(950)]);
    return W(t2, (e3) => {
      a2[e3] = Sw;
    }), i2.prototype = a2, i2.prototype.constructor = i2, i2;
  }
  M(ww, `createBaseVisitorConstructorWithDefaults`);
  var Tw;
  (function(e2) {
    e2[e2.REDUNDANT_METHOD = 0] = `REDUNDANT_METHOD`, e2[e2.MISSING_METHOD = 1] = `MISSING_METHOD`;
  })(Tw || (Tw = {}));
  function Ew(e2, t2) {
    return Dw(e2, t2);
  }
  M(Ew, s(1210));
  function Dw(e2, t2) {
    return t_(G(my(t2, (t3) => $l(e2[t3]) === false), (t3) => ({
      msg: `Missing visitor method: <` + t3 + `> on ` + e2.constructor.name + ` CST Visitor.`,
      type: Tw.MISSING_METHOD,
      methodName: t3
    })));
  }
  M(Dw, `validateMissingCstMethods`);
  var Ow = (Ce = class {
    initTreeBuilder(e2) {
      let t2 = s;
      if (this.CST_STACK = [], this.outputCst = e2.outputCst, this.nodeLocationTracking = K(e2, `nodeLocationTracking`) ? e2.nodeLocationTracking : Jw[t2(294)], !this.outputCst) this.cstInvocationStateUpdate = Eu, this.cstFinallyStateUpdate = Eu, this.cstPostTerminal = Eu, this.cstPostNonTerminal = Eu, this.cstPostRule = Eu;
      else if (/full/i.test(this.nodeLocationTracking)) this.recoveryEnabled ? (this.setNodeLocationFromToken = _w, this.setNodeLocationFromNode = _w, this.cstPostRule = Eu, this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery) : (this.setNodeLocationFromToken = Eu, this.setNodeLocationFromNode = Eu, this.cstPostRule = this.cstPostRuleFull, this[t2(1471)] = this.setInitialNodeLocationFullRegular);
      else if (/onlyOffset/i.test(this.nodeLocationTracking)) this.recoveryEnabled ? (this[t2(765)] = gw, this.setNodeLocationFromNode = gw, this.cstPostRule = Eu, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery) : (this.setNodeLocationFromToken = Eu, this[t2(1182)] = Eu, this.cstPostRule = this[t2(1794)], this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular);
      else if (/none/i.test(this.nodeLocationTracking)) this.setNodeLocationFromToken = Eu, this.setNodeLocationFromNode = Eu, this[t2(1031)] = Eu, this.setInitialNodeLocation = Eu;
      else throw Error(`Invalid <nodeLocationTracking> config option: "` + e2[t2(294)] + `"`);
    }
    [s(531)](e2) {
      e2.location = {
        startOffset: NaN,
        endOffset: NaN
      };
    }
    setInitialNodeLocationOnlyOffsetRegular(e2) {
      e2.location = {
        startOffset: this.LA(1).startOffset,
        endOffset: NaN
      };
    }
    setInitialNodeLocationFullRecovery(e2) {
      let t2 = s;
      e2[t2(351)] = {
        startOffset: NaN,
        startLine: NaN,
        startColumn: NaN,
        endOffset: NaN,
        endLine: NaN,
        endColumn: NaN
      };
    }
    [s(1181)](e2) {
      let t2 = s, n2 = this.LA(1);
      e2.location = {
        startOffset: n2[t2(1028)],
        startLine: n2.startLine,
        startColumn: n2.startColumn,
        endOffset: NaN,
        endLine: NaN,
        endColumn: NaN
      };
    }
    cstInvocationStateUpdate(e2) {
      let t2 = {
        name: e2,
        children: /* @__PURE__ */ Object.create(null)
      };
      this.setInitialNodeLocation(t2), this.CST_STACK.push(t2);
    }
    cstFinallyStateUpdate() {
      let e2 = s;
      this[e2(1623)].pop();
    }
    cstPostRuleFull(e2) {
      let t2 = s, n2 = this.LA(0), r2 = e2.location;
      r2.startOffset <= n2[t2(1028)] ? (r2[t2(1698)] = n2.endOffset, r2.endLine = n2.endLine, r2[t2(1611)] = n2[t2(1611)]) : (r2[t2(1028)] = NaN, r2.startLine = NaN, r2.startColumn = NaN);
    }
    cstPostRuleOnlyOffset(e2) {
      let t2 = s, n2 = this.LA(0), r2 = e2[t2(351)];
      r2.startOffset <= n2.startOffset ? r2[t2(1698)] = n2.endOffset : r2.startOffset = NaN;
    }
    cstPostTerminal(e2, t2) {
      let n2 = s, r2 = this[n2(1623)][this.CST_STACK.length - 1];
      vw(r2, t2, e2), this.setNodeLocationFromToken(r2.location, t2);
    }
    cstPostNonTerminal(e2, t2) {
      let n2 = this.CST_STACK[this.CST_STACK.length - 1];
      yw(n2, t2, e2), this.setNodeLocationFromNode(n2.location, e2.location);
    }
    [s(1591)]() {
      let e2 = s;
      if (nb(this.baseCstVisitorConstructor)) {
        let t2 = Cw(this.className, Mf(this.gastProductionsCache));
        return this[e2(1752)] = t2, t2;
      }
      return this[e2(1752)];
    }
    getBaseCstVisitorConstructorWithDefaults() {
      let e2 = s;
      if (nb(this.baseCstVisitorWithDefaultsConstructor)) {
        let e3 = ww(this.className, Mf(this.gastProductionsCache), this.getBaseCstVisitorConstructor());
        return this.baseCstVisitorWithDefaultsConstructor = e3, e3;
      }
      return this[e2(677)];
    }
    [s(1072)]() {
      let e2 = this.RULE_STACK;
      return e2[e2.length - 1];
    }
    getPreviousExplicitRuleShortName() {
      let e2 = s, t2 = this[e2(859)];
      return t2[t2.length - 2];
    }
    getLastExplicitRuleOccurrenceIndex() {
      let e2 = this.RULE_OCCURRENCE_STACK;
      return e2[e2.length - 1];
    }
  }, M(Ce, `TreeBuilder`), Ce), kw = (we = class {
    initLexerAdapter() {
      this.tokVector = [], this.tokVectorLength = 0, this.currIdx = -1;
    }
    set [s(775)](e2) {
      if (this.selfAnalysisDone !== true) throw Error(`Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.`);
      this.reset(), this.tokVector = e2, this.tokVectorLength = e2.length;
    }
    get input() {
      return this.tokVector;
    }
    SKIP_TOKEN() {
      return this.currIdx <= this.tokVector.length - 2 ? (this.consumeToken(), this.LA(1)) : qw;
    }
    LA(e2) {
      let t2 = s, n2 = this.currIdx + e2;
      return n2 < 0 || this[t2(832)] <= n2 ? qw : this.tokVector[n2];
    }
    consumeToken() {
      this.currIdx++;
    }
    exportLexerState() {
      return this.currIdx;
    }
    [s(461)](e2) {
      let t2 = s;
      this[t2(706)] = e2;
    }
    resetLexerState() {
      this.currIdx = -1;
    }
    moveToTerminatedState() {
      this.currIdx = this.tokVector.length - 1;
    }
    [s(1067)]() {
      return this.exportLexerState();
    }
  }, M(we, `LexerAdapter`), we), Aw = (Te = class {
    ACTION(e2) {
      return e2[s(1066)](this);
    }
    consume(e2, t2, n2) {
      return this.consumeInternal(t2, e2, n2);
    }
    subrule(e2, t2, n2) {
      return this.subruleInternal(t2, e2, n2);
    }
    option(e2, t2) {
      return this.optionInternal(t2, e2);
    }
    or(e2, t2) {
      return this.orInternal(t2, e2);
    }
    many(e2, t2) {
      return this.manyInternal(e2, t2);
    }
    atLeastOne(e2, t2) {
      return this.atLeastOneInternal(e2, t2);
    }
    CONSUME(e2, t2) {
      return this.consumeInternal(e2, 0, t2);
    }
    [s(436)](e2, t2) {
      return this.consumeInternal(e2, 1, t2);
    }
    [s(1785)](e2, t2) {
      return this.consumeInternal(e2, 2, t2);
    }
    CONSUME3(e2, t2) {
      return this.consumeInternal(e2, 3, t2);
    }
    CONSUME4(e2, t2) {
      return this.consumeInternal(e2, 4, t2);
    }
    CONSUME5(e2, t2) {
      return this.consumeInternal(e2, 5, t2);
    }
    [s(1620)](e2, t2) {
      return this.consumeInternal(e2, 6, t2);
    }
    CONSUME7(e2, t2) {
      return this.consumeInternal(e2, 7, t2);
    }
    CONSUME8(e2, t2) {
      return this.consumeInternal(e2, 8, t2);
    }
    CONSUME9(e2, t2) {
      return this.consumeInternal(e2, 9, t2);
    }
    SUBRULE(e2, t2) {
      return this.subruleInternal(e2, 0, t2);
    }
    SUBRULE1(e2, t2) {
      let n2 = s;
      return this[n2(1102)](e2, 1, t2);
    }
    [s(717)](e2, t2) {
      let n2 = s;
      return this[n2(1102)](e2, 2, t2);
    }
    SUBRULE3(e2, t2) {
      return this.subruleInternal(e2, 3, t2);
    }
    SUBRULE4(e2, t2) {
      return this.subruleInternal(e2, 4, t2);
    }
    SUBRULE5(e2, t2) {
      return this.subruleInternal(e2, 5, t2);
    }
    SUBRULE6(e2, t2) {
      return this.subruleInternal(e2, 6, t2);
    }
    [s(1416)](e2, t2) {
      return this.subruleInternal(e2, 7, t2);
    }
    SUBRULE8(e2, t2) {
      return this.subruleInternal(e2, 8, t2);
    }
    SUBRULE9(e2, t2) {
      return this.subruleInternal(e2, 9, t2);
    }
    OPTION(e2) {
      return this.optionInternal(e2, 0);
    }
    OPTION1(e2) {
      return this.optionInternal(e2, 1);
    }
    OPTION2(e2) {
      return this.optionInternal(e2, 2);
    }
    [s(671)](e2) {
      return this.optionInternal(e2, 3);
    }
    OPTION4(e2) {
      return this.optionInternal(e2, 4);
    }
    OPTION5(e2) {
      return this.optionInternal(e2, 5);
    }
    OPTION6(e2) {
      return this.optionInternal(e2, 6);
    }
    OPTION7(e2) {
      return this.optionInternal(e2, 7);
    }
    OPTION8(e2) {
      return this.optionInternal(e2, 8);
    }
    OPTION9(e2) {
      return this.optionInternal(e2, 9);
    }
    OR(e2) {
      return this.orInternal(e2, 0);
    }
    OR1(e2) {
      let t2 = s;
      return this[t2(628)](e2, 1);
    }
    OR2(e2) {
      return this.orInternal(e2, 2);
    }
    OR3(e2) {
      return this.orInternal(e2, 3);
    }
    OR4(e2) {
      return this.orInternal(e2, 4);
    }
    OR5(e2) {
      return this.orInternal(e2, 5);
    }
    [s(733)](e2) {
      return this.orInternal(e2, 6);
    }
    OR7(e2) {
      let t2 = s;
      return this[t2(628)](e2, 7);
    }
    OR8(e2) {
      return this.orInternal(e2, 8);
    }
    OR9(e2) {
      return this.orInternal(e2, 9);
    }
    MANY(e2) {
      let t2 = s;
      this[t2(1519)](0, e2);
    }
    [s(907)](e2) {
      this.manyInternal(1, e2);
    }
    MANY2(e2) {
      this.manyInternal(2, e2);
    }
    MANY3(e2) {
      this.manyInternal(3, e2);
    }
    MANY4(e2) {
      this.manyInternal(4, e2);
    }
    MANY5(e2) {
      this.manyInternal(5, e2);
    }
    MANY6(e2) {
      this.manyInternal(6, e2);
    }
    MANY7(e2) {
      let t2 = s;
      this[t2(1519)](7, e2);
    }
    MANY8(e2) {
      this.manyInternal(8, e2);
    }
    MANY9(e2) {
      this.manyInternal(9, e2);
    }
    MANY_SEP(e2) {
      this.manySepFirstInternal(0, e2);
    }
    MANY_SEP1(e2) {
      this.manySepFirstInternal(1, e2);
    }
    MANY_SEP2(e2) {
      this.manySepFirstInternal(2, e2);
    }
    MANY_SEP3(e2) {
      let t2 = s;
      this[t2(690)](3, e2);
    }
    MANY_SEP4(e2) {
      this.manySepFirstInternal(4, e2);
    }
    MANY_SEP5(e2) {
      this.manySepFirstInternal(5, e2);
    }
    MANY_SEP6(e2) {
      this.manySepFirstInternal(6, e2);
    }
    MANY_SEP7(e2) {
      this.manySepFirstInternal(7, e2);
    }
    [s(934)](e2) {
      this.manySepFirstInternal(8, e2);
    }
    MANY_SEP9(e2) {
      this.manySepFirstInternal(9, e2);
    }
    [s(881)](e2) {
      this.atLeastOneInternal(0, e2);
    }
    AT_LEAST_ONE1(e2) {
      return this.atLeastOneInternal(1, e2);
    }
    [s(1322)](e2) {
      this.atLeastOneInternal(2, e2);
    }
    AT_LEAST_ONE3(e2) {
      this.atLeastOneInternal(3, e2);
    }
    AT_LEAST_ONE4(e2) {
      this.atLeastOneInternal(4, e2);
    }
    AT_LEAST_ONE5(e2) {
      this.atLeastOneInternal(5, e2);
    }
    [s(381)](e2) {
      this.atLeastOneInternal(6, e2);
    }
    AT_LEAST_ONE7(e2) {
      this.atLeastOneInternal(7, e2);
    }
    AT_LEAST_ONE8(e2) {
      this.atLeastOneInternal(8, e2);
    }
    [s(524)](e2) {
      let t2 = s;
      this[t2(1143)](9, e2);
    }
    AT_LEAST_ONE_SEP(e2) {
      let t2 = s;
      this[t2(959)](0, e2);
    }
    [s(894)](e2) {
      this.atLeastOneSepFirstInternal(1, e2);
    }
    AT_LEAST_ONE_SEP2(e2) {
      this.atLeastOneSepFirstInternal(2, e2);
    }
    [s(1299)](e2) {
      let t2 = s;
      this[t2(959)](3, e2);
    }
    AT_LEAST_ONE_SEP4(e2) {
      this.atLeastOneSepFirstInternal(4, e2);
    }
    AT_LEAST_ONE_SEP5(e2) {
      this.atLeastOneSepFirstInternal(5, e2);
    }
    AT_LEAST_ONE_SEP6(e2) {
      let t2 = s;
      this[t2(959)](6, e2);
    }
    AT_LEAST_ONE_SEP7(e2) {
      this.atLeastOneSepFirstInternal(7, e2);
    }
    AT_LEAST_ONE_SEP8(e2) {
      this.atLeastOneSepFirstInternal(8, e2);
    }
    AT_LEAST_ONE_SEP9(e2) {
      let t2 = s;
      this[t2(959)](9, e2);
    }
    RULE(e2, t2, n2 = Yw) {
      let r2 = s;
      if (Hy(this[r2(1703)], e2)) {
        let t3 = {
          message: HS.buildDuplicateRuleNameError({
            topLevelRule: e2,
            grammarName: this.className
          }),
          type: Xw.DUPLICATE_RULE_NAME,
          ruleName: e2
        };
        this.definitionErrors.push(t3);
      }
      this.definedRulesNames[r2(1168)](e2);
      let i2 = this.defineRule(e2, t2, n2);
      return this[e2] = i2, i2;
    }
    OVERRIDE_RULE(e2, t2, n2 = Yw) {
      let r2 = s, i2 = EC(e2, this[r2(1703)], this[r2(666)]);
      this.definitionErrors = this.definitionErrors.concat(i2);
      let a2 = this[r2(1533)](e2, t2, n2);
      return this[e2] = a2, a2;
    }
    [s(317)](e2, t2) {
      return function() {
        let n2 = X;
        this.isBackTrackingStack[n2(1168)](1);
        let r2 = this[n2(1300)]();
        try {
          return e2.apply(this, t2), true;
        } catch (e3) {
          if (GC(e3)) return false;
          throw e3;
        } finally {
          this.reloadRecogState(r2), this[n2(487)].pop();
        }
      };
    }
    getGAstProductions() {
      return this.gastProductionsCache;
    }
    getSerializedGastProductions() {
      return Wb(zy(this.gastProductionsCache));
    }
  }, M(Te, `RecognizerApi`), Te), jw = (Ee = class {
    [s(876)](e2, t2) {
      let n2 = s;
      if (this.className = this.constructor.name, this[n2(1049)] = {}, this.fullRuleNameToShort = {}, this.ruleShortNameIdx = 256, this.tokenMatcher = oS, this.subruleIdx = 0, this[n2(1703)] = [], this.tokensMap = {}, this.isBackTrackingStack = [], this[n2(859)] = [], this.RULE_OCCURRENCE_STACK = [], this.gastProductionsCache = {}, K(t2, `serializedGrammar`)) throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);
      if (V(e2)) {
        if (q(e2)) throw Error(n2(943));
        if (typeof e2[0].startOffset == `number`) throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`);
      }
      if (V(e2)) this.tokensMap = hb(e2, (e3, t3) => (e3[t3[n2(747)]] = t3, e3), {});
      else if (K(e2, `modes`) && uy(hm(zy(e2.modes)), yS)) {
        let t3 = Db(hm(zy(e2.modes)));
        this[n2(944)] = hb(t3, (e3, t4) => (e3[t4.name] = t4, e3), {});
      } else if (Ml(e2)) this[n2(944)] = $g(e2);
      else throw Error(`<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition`);
      this.tokensMap[n2(590)] = LS;
      let r2 = uy(K(e2, `modes`) ? hm(zy(e2[n2(730)])) : zy(e2), (e3) => q(e3.categoryMatches));
      this.tokenMatcher = r2 ? oS : aS, lS(zy(this.tokensMap));
    }
    defineRule(e2, t2, n2) {
      let r2 = s;
      if (this[r2(344)]) throw Error(`Grammar rule <` + e2 + `> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);
      let i2 = K(n2, `resyncEnabled`) ? n2.resyncEnabled : Yw.resyncEnabled, a2 = K(n2, r2(380)) ? n2.recoveryValueFunc : Yw.recoveryValueFunc, o2 = this.ruleShortNameIdx << nw + rw;
      this.ruleShortNameIdx++, this.shortRuleNameToFull[o2] = e2, this.fullRuleNameToShort[e2] = o2;
      let c2;
      return c2 = this.outputCst === true ? M(function(...n3) {
        let s2 = r2;
        try {
          this.ruleInvocationStateUpdate(o2, e2, this[s2(982)]), t2[s2(1120)](this, n3);
          let r3 = this.CST_STACK[this.CST_STACK.length - 1];
          return this.cstPostRule(r3), r3;
        } catch (e3) {
          return this.invokeRuleCatch(e3, i2, a2);
        } finally {
          this.ruleFinallyStateUpdate();
        }
      }, `invokeRuleWithTry`) : M(function(...n3) {
        let s2 = r2;
        try {
          return this.ruleInvocationStateUpdate(o2, e2, this[s2(982)]), t2.apply(this, n3);
        } catch (e3) {
          return this.invokeRuleCatch(e3, i2, a2);
        } finally {
          this.ruleFinallyStateUpdate();
        }
      }, r2(1109)), Object[r2(428)](c2, {
        ruleName: e2,
        originalGrammarAction: t2
      });
    }
    invokeRuleCatch(e2, t2, n2) {
      let r2 = s, i2 = this[r2(859)].length === 1, a2 = t2 && !this.isBackTracking() && this.recoveryEnabled;
      if (GC(e2)) {
        let t3 = e2;
        if (a2) {
          let i3 = this.findReSyncTokenType();
          if (this.isInCurrentRuleReSyncSet(i3)) if (t3.resyncedTokens = this.reSyncTo(i3), this.outputCst) {
            let e3 = this.CST_STACK[this.CST_STACK.length - 1];
            return e3.recoveredNode = true, e3;
          } else return n2(e2);
          else {
            if (this.outputCst) {
              let e3 = this.CST_STACK[this[r2(1623)].length - 1];
              e3[r2(1294)] = true, t3[r2(912)] = e3;
            }
            throw t3;
          }
        } else if (i2) return this.moveToTerminatedState(), n2(e2);
        else throw t3;
      } else throw e2;
    }
    optionInternal(e2, t2) {
      let n2 = this.getKeyForAutomaticLookahead(ow, t2);
      return this.optionInternalLogic(e2, t2, n2);
    }
    [s(928)](e2, t2, n2) {
      let r2 = s, i2 = this.getLaFuncFromCache(n2), a2;
      if (typeof e2 != `function`) {
        a2 = e2.DEF;
        let t3 = e2.GATE;
        if (t3 !== void 0) {
          let e3 = i2;
          i2 = M(() => t3.call(this) && e3.call(this), `lookAheadFunc`);
        }
      } else a2 = e2;
      if (i2[r2(1066)](this) === true) return a2.call(this);
    }
    [s(1143)](e2, t2) {
      let n2 = this.getKeyForAutomaticLookahead(cw, e2);
      return this.atLeastOneInternalLogic(e2, t2, n2);
    }
    atLeastOneInternalLogic(e2, t2, n2) {
      let r2 = s, i2 = this.getLaFuncFromCache(n2), a2;
      if (typeof t2 != `function`) {
        a2 = t2.DEF;
        let e3 = t2[r2(890)];
        if (e3 !== void 0) {
          let t3 = i2;
          i2 = M(() => e3.call(this) && t3.call(this), `lookAheadFunc`);
        }
      } else a2 = t2;
      if (i2[r2(1066)](this) === true) {
        let e3 = this.doSingleRepetition(a2);
        for (; i2.call(this) === true && e3 === true; ) e3 = this.doSingleRepetition(a2);
      } else throw this[r2(1624)](e2, tC[r2(1014)], t2[r2(808)]);
      this.attemptInRepetitionRecovery(this.atLeastOneInternal, [
        e2,
        t2
      ], i2, cw, e2, XS);
    }
    atLeastOneSepFirstInternal(e2, t2) {
      let n2 = s, r2 = this[n2(1106)](uw, e2);
      this.atLeastOneSepFirstInternalLogic(e2, t2, r2);
    }
    atLeastOneSepFirstInternalLogic(e2, t2, n2) {
      let r2 = s, i2 = t2.DEF, a2 = t2.SEP;
      if (this[r2(1253)](n2).call(this) === true) {
        i2[r2(1066)](this);
        let t3 = M(() => this.tokenMatcher(this.LA(1), a2), r2(897));
        for (; this.tokenMatcher(this.LA(1), a2) === true; ) this.CONSUME(a2), i2.call(this);
        this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
          e2,
          a2,
          t3,
          i2,
          ZS
        ], t3, uw, e2, ZS);
      } else throw this.raiseEarlyExitException(e2, tC.REPETITION_MANDATORY_WITH_SEPARATOR, t2.ERR_MSG);
    }
    manyInternal(e2, t2) {
      let n2 = this.getKeyForAutomaticLookahead(sw, e2);
      return this.manyInternalLogic(e2, t2, n2);
    }
    manyInternalLogic(e2, t2, n2) {
      let r2 = s, i2 = this.getLaFuncFromCache(n2), a2;
      if (typeof t2 != r2(386)) {
        a2 = t2.DEF;
        let e3 = t2.GATE;
        if (e3 !== void 0) {
          let t3 = i2;
          i2 = M(() => e3.call(this) && t3.call(this), `lookaheadFunction`);
        }
      } else a2 = t2;
      let o2 = true;
      for (; i2.call(this) === true && o2 === true; ) o2 = this.doSingleRepetition(a2);
      this.attemptInRepetitionRecovery(this.manyInternal, [
        e2,
        t2
      ], i2, sw, e2, JS, o2);
    }
    manySepFirstInternal(e2, t2) {
      let n2 = s, r2 = this[n2(1106)](lw, e2);
      this.manySepFirstInternalLogic(e2, t2, r2);
    }
    manySepFirstInternalLogic(e2, t2, n2) {
      let r2 = s, i2 = t2.DEF, a2 = t2[r2(1640)];
      if (this[r2(1253)](n2).call(this) === true) {
        i2.call(this);
        let t3 = M(() => this.tokenMatcher(this.LA(1), a2), `separatorLookAheadFunc`);
        for (; this.tokenMatcher(this.LA(1), a2) === true; ) this.CONSUME(a2), i2.call(this);
        this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
          e2,
          a2,
          t3,
          i2,
          YS
        ], t3, lw, e2, YS);
      }
    }
    repetitionSepSecondInternal(e2, t2, n2, r2, i2) {
      for (; n2(); ) this.CONSUME(t2), r2.call(this);
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
        e2,
        t2,
        n2,
        r2,
        i2
      ], n2, uw, e2, i2);
    }
    doSingleRepetition(e2) {
      let t2 = s, n2 = this.getLexerPosition();
      return e2.call(this), this[t2(1067)]() > n2;
    }
    orInternal(e2, t2) {
      let n2 = s, r2 = this.getKeyForAutomaticLookahead(aw, t2), i2 = V(e2) ? e2 : e2.DEF, a2 = this.getLaFuncFromCache(r2).call(this, i2);
      if (a2 !== void 0) return i2[a2].ALT.call(this);
      this[n2(885)](t2, e2.ERR_MSG);
    }
    ruleFinallyStateUpdate() {
      let e2 = s;
      if (this[e2(859)].pop(), this[e2(743)].pop(), this[e2(989)](), this.RULE_STACK.length === 0 && this.isAtEndOfInput() === false) {
        let e3 = this.LA(1), t2 = this.errorMessageProvider.buildNotAllInputParsedMessage({
          firstRedundant: e3,
          ruleName: this.getCurrRuleFullName()
        });
        this.SAVE_ERROR(new YC(t2, e3));
      }
    }
    subruleInternal(e2, t2, n2) {
      let r2;
      try {
        let i2 = n2 === void 0 ? void 0 : n2.ARGS;
        return this.subruleIdx = t2, r2 = e2.apply(this, i2), this.cstPostNonTerminal(r2, n2 !== void 0 && n2.LABEL !== void 0 ? n2.LABEL : e2.ruleName), r2;
      } catch (t3) {
        throw this.subruleInternalError(t3, n2, e2.ruleName);
      }
    }
    subruleInternalError(e2, t2, n2) {
      throw GC(e2) && e2.partialCstResult !== void 0 && (this.cstPostNonTerminal(e2.partialCstResult, t2 !== void 0 && t2.LABEL !== void 0 ? t2.LABEL : n2), delete e2.partialCstResult), e2;
    }
    consumeInternal(e2, t2, n2) {
      let r2 = s, i2;
      try {
        let t3 = this.LA(1);
        this.tokenMatcher(t3, e2) === true ? (this.consumeToken(), i2 = t3) : this[r2(905)](e2, t3, n2);
      } catch (n3) {
        i2 = this.consumeInternalRecovery(e2, t2, n3);
      }
      return this[r2(284)](n2 !== void 0 && n2[r2(948)] !== void 0 ? n2.LABEL : e2.name, i2), i2;
    }
    [s(905)](e2, t2, n2) {
      let r2 = s, i2, a2 = this.LA(0);
      throw i2 = n2 !== void 0 && n2.ERR_MSG ? n2.ERR_MSG : this.errorMessageProvider.buildMismatchTokenMessage({
        expected: e2,
        actual: t2,
        previous: a2,
        ruleName: this[r2(854)]()
      }), this.SAVE_ERROR(new qC(i2, t2, a2));
    }
    consumeInternalRecovery(e2, t2, n2) {
      let r2 = s;
      if (this.recoveryEnabled && n2[r2(747)] === `MismatchedTokenException` && !this.isBackTracking()) {
        let r3 = this.getFollowsForInRuleRecovery(e2, t2);
        try {
          return this.tryInRuleRecovery(e2, r3);
        } catch (e3) {
          throw e3.name === QC ? n2 : e3;
        }
      } else throw n2;
    }
    saveRecogState() {
      let e2 = s, t2 = this[e2(1327)], n2 = $g(this.RULE_STACK);
      return {
        errors: t2,
        lexerState: this.exportLexerState(),
        RULE_STACK: n2,
        CST_STACK: this[e2(1623)]
      };
    }
    reloadRecogState(e2) {
      this.errors = e2.errors, this.importLexerState(e2.lexerState), this.RULE_STACK = e2.RULE_STACK;
    }
    [s(368)](e2, t2, n2) {
      let r2 = s;
      this.RULE_OCCURRENCE_STACK.push(n2), this.RULE_STACK[r2(1168)](e2), this.cstInvocationStateUpdate(t2);
    }
    isBackTracking() {
      return this.isBackTrackingStack.length !== 0;
    }
    getCurrRuleFullName() {
      let e2 = this.getLastExplicitRuleShortName();
      return this.shortRuleNameToFull[e2];
    }
    shortRuleNameToFullName(e2) {
      return this.shortRuleNameToFull[e2];
    }
    isAtEndOfInput() {
      return this.tokenMatcher(this.LA(1), LS);
    }
    reset() {
      let e2 = s;
      this[e2(930)](), this.subruleIdx = 0, this[e2(487)] = [], this.errors = [], this[e2(859)] = [], this.CST_STACK = [], this.RULE_OCCURRENCE_STACK = [];
    }
  }, M(Ee, `RecognizerEngine`), Ee), Mw = (De = class {
    [s(1617)](e2) {
      let t2 = s;
      this._errors = [], this.errorMessageProvider = K(e2, `errorMessageProvider`) ? e2[t2(1537)] : Jw.errorMessageProvider;
    }
    [s(1187)](e2) {
      let t2 = s;
      if (GC(e2)) return e2.context = {
        ruleStack: this.getHumanReadableRuleStack(),
        ruleOccurrenceStack: $g(this[t2(743)])
      }, this._errors.push(e2), e2;
      throw Error(`Trying to save an Error which is not a RecognitionException`);
    }
    get [s(1327)]() {
      return $g(this._errors);
    }
    set errors(e2) {
      let t2 = s;
      this[t2(1659)] = e2;
    }
    raiseEarlyExitException(e2, t2, n2) {
      let r2 = s, i2 = this[r2(854)](), a2 = this.getGAstProductions()[i2], o2 = hC(e2, a2, t2, this.maxLookahead)[0], c2 = [];
      for (let e3 = 1; e3 <= this.maxLookahead; e3++) c2[r2(1168)](this.LA(e3));
      let l2 = this.errorMessageProvider.buildEarlyExitMessage({
        expectedIterationPaths: o2,
        actual: c2,
        previous: this.LA(0),
        customUserDescription: n2,
        ruleName: i2
      });
      throw this.SAVE_ERROR(new XC(l2, this.LA(1), this.LA(0)));
    }
    raiseNoAltException(e2, t2) {
      let n2 = s, r2 = this[n2(854)](), i2 = this[n2(722)]()[r2], a2 = mC(e2, i2, this.maxLookahead), o2 = [];
      for (let e3 = 1; e3 <= this.maxLookahead; e3++) o2.push(this.LA(e3));
      let c2 = this.LA(0), l2 = this.errorMessageProvider[n2(1776)]({
        expectedPathsPerAlt: a2,
        actual: o2,
        previous: c2,
        customUserDescription: t2,
        ruleName: this.getCurrRuleFullName()
      });
      throw this.SAVE_ERROR(new JC(l2, this.LA(1), c2));
    }
  }, M(De, `ErrorHandler`), De), Nw = (Oe = class {
    initContentAssist() {
    }
    computeContentAssist(e2, t2) {
      let n2 = s, r2 = this[n2(1146)][e2];
      if (nb(r2)) throw Error(`Rule ->` + e2 + `<- does not exist in this grammar.`);
      return $S([
        r2
      ], t2, this.tokenMatcher, this.maxLookahead);
    }
    getNextPossibleTokenTypes(e2) {
      let t2 = xy(e2.ruleStack), n2 = this.getGAstProductions()[t2];
      return new KS(n2, e2).startWalking();
    }
  }, M(Oe, `ContentAssist`), Oe), Pw = {
    description: s(493)
  };
  Object.freeze(Pw);
  var Fw = true, Iw = 2 ** rw - 1, Lw = FS({
    name: `RECORDING_PHASE_TOKEN`,
    pattern: CS.NA
  });
  lS([
    Lw
  ]);
  var Rw = RS(Lw, `This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`, -1, -1, -1, -1, -1, -1);
  Object.freeze(Rw);
  var zw = {
    name: `This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,
    children: {}
  }, Bw = (ke = class {
    initGastRecorder(e2) {
      this.recordingProdStack = [], this.RECORDING_PHASE = false;
    }
    enableRecording() {
      this.RECORDING_PHASE = true, this.TRACE_INIT(`Enable Recording`, () => {
        let e2 = X;
        for (let t2 = 0; t2 < 10; t2++) {
          let n2 = t2 > 0 ? t2 : ``;
          this[`CONSUME` + n2] = function(e3, n3) {
            return this.consumeInternalRecord(e3, t2, n3);
          }, this[`SUBRULE` + n2] = function(e3, n3) {
            return this.subruleInternalRecord(e3, t2, n3);
          }, this[`OPTION` + n2] = function(e3) {
            let n3 = X;
            return this[n3(354)](e3, t2);
          }, this[`OR` + n2] = function(e3) {
            return this.orInternalRecord(e3, t2);
          }, this[`MANY` + n2] = function(e3) {
            this.manyInternalRecord(t2, e3);
          }, this[`MANY_SEP` + n2] = function(e3) {
            this.manySepFirstInternalRecord(t2, e3);
          }, this[e2(881) + n2] = function(e3) {
            this.atLeastOneInternalRecord(t2, e3);
          }, this[`AT_LEAST_ONE_SEP` + n2] = function(n3) {
            let r2 = e2;
            this[r2(1375)](t2, n3);
          };
        }
        this.consume = function(e3, t2, n2) {
          return this.consumeInternalRecord(t2, e3, n2);
        }, this[e2(1458)] = function(e3, t2, n2) {
          return this.subruleInternalRecord(t2, e3, n2);
        }, this.option = function(e3, t2) {
          return this.optionInternalRecord(t2, e3);
        }, this.or = function(e3, t2) {
          return this.orInternalRecord(t2, e3);
        }, this.many = function(e3, t2) {
          this.manyInternalRecord(e3, t2);
        }, this.atLeastOne = function(e3, t2) {
          this.atLeastOneInternalRecord(e3, t2);
        }, this.ACTION = this[e2(1682)], this[e2(317)] = this.BACKTRACK_RECORD, this.LA = this[e2(1285)];
      });
    }
    disableRecording() {
      let e2 = s;
      this.RECORDING_PHASE = false, this.TRACE_INIT(e2(1209), () => {
        let t2 = e2, n2 = this;
        for (let e3 = 0; e3 < 10; e3++) {
          let t3 = e3 > 0 ? e3 : ``;
          delete n2[`CONSUME` + t3], delete n2[`SUBRULE` + t3], delete n2[`OPTION` + t3], delete n2[`OR` + t3], delete n2[`MANY` + t3], delete n2[`MANY_SEP` + t3], delete n2[`AT_LEAST_ONE` + t3], delete n2[`AT_LEAST_ONE_SEP` + t3];
        }
        delete n2[t2(1248)], delete n2.subrule, delete n2.option, delete n2.or, delete n2.many, delete n2.atLeastOne, delete n2.ACTION, delete n2.BACKTRACK, delete n2.LA;
      });
    }
    ACTION_RECORD(e2) {
    }
    [s(364)](e2, t2) {
      return () => true;
    }
    LA_RECORD(e2) {
      return qw;
    }
    [s(1649)](e2, t2) {
      let n2 = s;
      try {
        let r2 = new Ib({
          definition: [],
          name: e2
        });
        return r2.name = e2, this.recordingProdStack[n2(1168)](r2), t2.call(this), this.recordingProdStack.pop(), r2;
      } catch (e3) {
        if (e3.KNOWN_RECORDER_ERROR !== true) try {
          e3.message += `
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`;
        } catch {
          throw e3;
        }
        throw e3;
      }
    }
    optionInternalRecord(e2, t2) {
      return Vw[s(1066)](this, Rb, e2, t2);
    }
    atLeastOneInternalRecord(e2, t2) {
      Vw.call(this, zb, t2, e2);
    }
    atLeastOneSepFirstInternalRecord(e2, t2) {
      Vw.call(this, Bb, t2, e2, Fw);
    }
    manyInternalRecord(e2, t2) {
      Vw.call(this, Vb, t2, e2);
    }
    manySepFirstInternalRecord(e2, t2) {
      Vw.call(this, Hb, t2, e2, Fw);
    }
    orInternalRecord(e2, t2) {
      return Hw.call(this, e2, t2);
    }
    subruleInternalRecord(e2, t2, n2) {
      let r2 = s;
      if (Ww(t2), !e2 || K(e2, `ruleName`) === false) {
        let n3 = Error(`<SUBRULE` + Uw(t2) + r2(448) + JSON.stringify(e2) + `>
 inside top level rule: <` + this[r2(858)][0].name + `>`);
        throw n3.KNOWN_RECORDER_ERROR = true, n3;
      }
      let i2 = Zv(this.recordingProdStack), a2 = e2.ruleName, o2 = new Fb({
        idx: t2,
        nonTerminalName: a2,
        label: n2 == null ? void 0 : n2.LABEL,
        referencedRule: void 0
      });
      return i2.definition.push(o2), this.outputCst ? zw : Pw;
    }
    consumeInternalRecord(e2, t2, n2) {
      let r2 = s;
      if (Ww(t2), !hS(e2)) {
        let n3 = Error(r2(1003) + Uw(t2) + r2(1321) + JSON[r2(770)](e2) + `>
 inside top level rule: <` + this[r2(858)][0].name + `>`);
        throw n3[r2(376)] = true, n3;
      }
      let i2 = Zv(this.recordingProdStack), a2 = new J({
        idx: t2,
        terminalType: e2,
        label: n2 == null ? void 0 : n2.LABEL
      });
      return i2.definition[r2(1168)](a2), Rw;
    }
  }, M(ke, `GastRecorder`), ke);
  function Vw(e2, t2, n2, r2 = false) {
    let i2 = s;
    Ww(n2);
    let a2 = Zv(this.recordingProdStack), o2 = $l(t2) ? t2 : t2.DEF, c2 = new e2({
      definition: [],
      idx: n2
    });
    return r2 && (c2.separator = t2.SEP), K(t2, `MAX_LOOKAHEAD`) && (c2.maxLookahead = t2[i2(984)]), this.recordingProdStack.push(c2), o2.call(this), a2.definition.push(c2), this.recordingProdStack.pop(), Pw;
  }
  M(Vw, s(1450));
  function Hw(e2, t2) {
    let n2 = s;
    Ww(t2);
    let r2 = Zv(this[n2(858)]), i2 = V(e2) === false, a2 = i2 === false ? e2 : e2.DEF, o2 = new Ub({
      definition: [],
      idx: t2,
      ignoreAmbiguities: i2 && e2.IGNORE_AMBIGUITIES === true
    });
    return K(e2, n2(984)) && (o2.maxLookahead = e2.MAX_LOOKAHEAD), o2.hasPredicates = xb(a2, (e3) => $l(e3.GATE)), r2.definition.push(o2), W(a2, (e3) => {
      let t3 = n2, r3 = new Lb({
        definition: []
      });
      o2.definition.push(r3), K(e3, `IGNORE_AMBIGUITIES`) ? r3.ignoreAmbiguities = e3.IGNORE_AMBIGUITIES : K(e3, `GATE`) && (r3[t3(481)] = true), this.recordingProdStack[t3(1168)](r3), e3.ALT.call(this), this.recordingProdStack.pop();
    }), Pw;
  }
  M(Hw, `recordOrProd`);
  function Uw(e2) {
    return e2 === 0 ? `` : `` + e2;
  }
  M(Uw, `getIdxSuffix`);
  function Ww(e2) {
    if (e2 < 0 || e2 > Iw) {
      let t2 = Error(`Invalid DSL Method idx value: <` + e2 + `>
	Idx value must be a none negative value smaller than ` + (Iw + 1));
      throw t2.KNOWN_RECORDER_ERROR = true, t2;
    }
  }
  M(Ww, `assertMethodIdxIsValid`);
  var Gw = (Ae = class {
    initPerformanceTracer(e2) {
      let t2 = s;
      if (K(e2, t2(1736))) {
        let n2 = e2.traceInitPerf, r2 = typeof n2 == `number`;
        this[t2(1015)] = r2 ? n2 : 1 / 0, this.traceInitPerf = r2 ? n2 > 0 : n2;
      } else this[t2(1015)] = 0, this[t2(1736)] = Jw.traceInitPerf;
      this[t2(1529)] = -1;
    }
    TRACE_INIT(e2, t2) {
      let n2 = s;
      if (this.traceInitPerf === true) {
        this.traceInitIndent++;
        let r2 = Array(this.traceInitIndent + 1).join(`	`);
        this[n2(1529)] < this.traceInitMaxIdent && console.log(r2 + n2(759) + e2 + `>`);
        let { time: i2, value: a2 } = Ab(t2), o2 = i2 > 10 ? console.warn : console.log;
        return this.traceInitIndent < this.traceInitMaxIdent && o2(r2 + `<-- <` + e2 + `> time: ` + i2 + `ms`), this.traceInitIndent--, a2;
      } else return t2();
    }
  }, M(Ae, `PerformanceTracer`), Ae);
  function Kw(e2, t2) {
    t2.forEach((t3) => {
      let n2 = t3.prototype;
      Object.getOwnPropertyNames(n2).forEach((r2) => {
        let i2 = X;
        if (r2 === `constructor`) return;
        let a2 = Object.getOwnPropertyDescriptor(n2, r2);
        a2 && (a2.get || a2.set) ? Object[i2(1700)](e2.prototype, r2, a2) : e2.prototype[r2] = t3[i2(950)][r2];
      });
    });
  }
  M(Kw, `applyMixins`);
  var qw = RS(LS, ``, NaN, NaN, NaN, NaN, NaN, NaN);
  Object.freeze(qw);
  var Jw = Object.freeze({
    recoveryEnabled: false,
    maxLookahead: 3,
    dynamicTokensEnabled: false,
    outputCst: true,
    errorMessageProvider: BS,
    nodeLocationTracking: `none`,
    traceInitPerf: false,
    skipValidations: false
  }), Yw = Object.freeze({
    recoveryValueFunc: M(() => void 0, `recoveryValueFunc`),
    resyncEnabled: true
  }), Xw;
  (function(e2) {
    let t2 = s;
    e2[e2.INVALID_RULE_NAME = 0] = `INVALID_RULE_NAME`, e2[e2.DUPLICATE_RULE_NAME = 1] = `DUPLICATE_RULE_NAME`, e2[e2.INVALID_RULE_OVERRIDE = 2] = `INVALID_RULE_OVERRIDE`, e2[e2.DUPLICATE_PRODUCTIONS = 3] = `DUPLICATE_PRODUCTIONS`, e2[e2.UNRESOLVED_SUBRULE_REF = 4] = `UNRESOLVED_SUBRULE_REF`, e2[e2.LEFT_RECURSION = 5] = `LEFT_RECURSION`, e2[e2.NONE_LAST_EMPTY_ALT = 6] = t2(382), e2[e2.AMBIGUOUS_ALTS = 7] = `AMBIGUOUS_ALTS`, e2[e2.CONFLICT_TOKENS_RULES_NAMESPACE = 8] = `CONFLICT_TOKENS_RULES_NAMESPACE`, e2[e2.INVALID_TOKEN_NAME = 9] = `INVALID_TOKEN_NAME`, e2[e2[t2(1715)] = 10] = t2(1715), e2[e2.AMBIGUOUS_PREFIX_ALTS = 11] = `AMBIGUOUS_PREFIX_ALTS`, e2[e2.TOO_MANY_ALTS = 12] = `TOO_MANY_ALTS`, e2[e2.CUSTOM_LOOKAHEAD_VALIDATION = 13] = `CUSTOM_LOOKAHEAD_VALIDATION`;
  })(Xw || (Xw = {}));
  function Zw(e2 = void 0) {
    return function() {
      return e2;
    };
  }
  M(Zw, s(1047));
  var Qw = (je = class e2 {
    static performSelfAnalysis(e3) {
      throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.");
    }
    performSelfAnalysis() {
      let t2 = s;
      this.TRACE_INIT(t2(1126), () => {
        let n2 = t2, r2;
        this.selfAnalysisDone = true;
        let i2 = this.className;
        this.TRACE_INIT(`toFastProps`, () => {
          jb(this);
        }), this.TRACE_INIT(n2(1684), () => {
          let e3 = n2;
          try {
            this.enableRecording(), W(this[e3(1703)], (t3) => {
              let n3 = e3, r3 = this[t3][n3(1513)], i3;
              this[n3(544)](t3 + ` Rule`, () => {
                let e4 = n3;
                i3 = this[e4(1649)](t3, r3);
              }), this[n3(1146)][t3] = i3;
            });
          } finally {
            this.disableRecording();
          }
        });
        let a2 = [];
        if (this[n2(544)](`Grammar Resolving`, () => {
          a2 = RC({
            rules: zy(this.gastProductionsCache)
          }), this.definitionErrors = this.definitionErrors.concat(a2);
        }), this[n2(544)](`Grammar Validations`, () => {
          let e3 = n2;
          if (q(a2) && this.skipValidations === false) {
            let t3 = zC({
              rules: zy(this[e3(1146)]),
              tokenTypes: zy(this.tokensMap),
              errMsgProvider: HS,
              grammarName: i2
            }), n3 = yC({
              lookaheadStrategy: this.lookaheadStrategy,
              rules: zy(this.gastProductionsCache),
              tokenTypes: zy(this.tokensMap),
              grammarName: i2
            });
            this.definitionErrors = this.definitionErrors.concat(t3, n3);
          }
        }), q(this.definitionErrors) && (this.recoveryEnabled && this[n2(544)](`computeAllProdsFollows`, () => {
          let e3 = n2, t3 = ax(zy(this.gastProductionsCache));
          this[e3(1495)] = t3;
        }), this.TRACE_INIT(n2(1723), () => {
          var e3, t3;
          (t3 = (e3 = this.lookaheadStrategy).initialize) == null || t3.call(e3, {
            rules: zy(this.gastProductionsCache)
          }), this.preComputeLookaheadFunctions(zy(this.gastProductionsCache));
        })), !e2.DEFER_DEFINITION_ERRORS_HANDLING && !q(this.definitionErrors)) throw r2 = G(this.definitionErrors, (e3) => e3.message), Error(`Parser Definition Errors detected:
 ` + r2.join(`
-------------------------------
`));
      });
    }
    constructor(e3, t2) {
      let n2 = s;
      this[n2(1266)] = [], this.selfAnalysisDone = false;
      let r2 = this;
      if (r2[n2(1617)](t2), r2.initLexerAdapter(), r2.initLooksAhead(t2), r2.initRecognizerEngine(e3, t2), r2[n2(1799)](t2), r2.initTreeBuilder(t2), r2.initContentAssist(), r2.initGastRecorder(t2), r2.initPerformanceTracer(t2), K(t2, `ignoredIssues`)) throw Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);
      this.skipValidations = K(t2, `skipValidations`) ? t2.skipValidations : Jw.skipValidations;
    }
  }, M(je, `Parser`), je);
  Qw.DEFER_DEFINITION_ERRORS_HANDLING = false, Kw(Qw, [
    ew,
    pw,
    Ow,
    kw,
    jw,
    Aw,
    Mw,
    Nw,
    Bw,
    Gw
  ]);
  var $w = (Me = class extends Qw {
    constructor(e2, t2 = Jw) {
      let n2 = $g(t2);
      n2.outputCst = false, super(e2, n2);
    }
  }, M(Me, `EmbeddedActionsParser`), Me);
  function eT(e2, t2) {
    for (var n2 = -1, r2 = e2 == null ? 0 : e2.length, i2 = Array(r2); ++n2 < r2; ) i2[n2] = t2(e2[n2], n2, e2);
    return i2;
  }
  M(eT, `arrayMap`);
  var tT = eT;
  function nT() {
    this.__data__ = [], this.size = 0;
  }
  M(nT, `listCacheClear`);
  var rT = nT;
  function iT(e2, t2) {
    return e2 === t2 || e2 !== e2 && t2 !== t2;
  }
  M(iT, `eq`);
  var aT = iT;
  function oT(e2, t2) {
    for (var n2 = e2.length; n2--; ) if (aT(e2[n2][0], t2)) return n2;
    return -1;
  }
  M(oT, `assocIndexOf`);
  var sT = oT, cT = Array[s(950)].splice;
  function lT(e2) {
    var t2 = this.__data__, n2 = sT(t2, e2);
    return n2 < 0 ? false : (n2 == t2.length - 1 ? t2.pop() : cT.call(t2, n2, 1), --this.size, true);
  }
  M(lT, `listCacheDelete`);
  var uT = lT;
  function dT(e2) {
    var t2 = this.__data__, n2 = sT(t2, e2);
    return n2 < 0 ? void 0 : t2[n2][1];
  }
  M(dT, `listCacheGet`);
  var fT = dT;
  function pT(e2) {
    return sT(this.__data__, e2) > -1;
  }
  M(pT, `listCacheHas`);
  var mT = pT;
  function hT(e2, t2) {
    let n2 = s;
    var r2 = this.__data__, i2 = sT(r2, e2);
    return i2 < 0 ? (++this[n2(693)], r2.push([
      e2,
      t2
    ])) : r2[i2][1] = t2, this;
  }
  M(hT, `listCacheSet`);
  var gT = hT;
  function _T(e2) {
    let t2 = s;
    var n2 = -1, r2 = e2 == null ? 0 : e2[t2(1663)];
    for (this.clear(); ++n2 < r2; ) {
      var i2 = e2[n2];
      this.set(i2[0], i2[1]);
    }
  }
  M(_T, `ListCache`), _T.prototype.clear = rT, _T.prototype.delete = uT, _T.prototype.get = fT, _T[s(950)].has = mT, _T.prototype.set = gT;
  var vT = _T;
  function yT() {
    this.__data__ = new vT(), this.size = 0;
  }
  M(yT, `stackClear`);
  var bT = yT;
  function xT(e2) {
    var t2 = this.__data__, n2 = t2.delete(e2);
    return this.size = t2.size, n2;
  }
  M(xT, `stackDelete`);
  var ST = xT;
  function CT(e2) {
    return this.__data__.get(e2);
  }
  M(CT, s(1440));
  var wT = CT;
  function TT(e2) {
    return this.__data__.has(e2);
  }
  M(TT, `stackHas`);
  var ET = TT, DT = typeof global == `object` && global && global.Object === Object && global, OT = typeof self == s(716) && self && self.Object === Object && self, kT = DT || OT || Function(`return this`)(), AT = kT[s(1525)], jT = Object.prototype, MT = jT[s(577)], NT = jT[s(752)], PT = AT ? AT.toStringTag : void 0;
  function FT(e2) {
    var t2 = MT[s(1066)](e2, PT), n2 = e2[PT];
    try {
      e2[PT] = void 0;
      var r2 = true;
    } catch {
    }
    var i2 = NT.call(e2);
    return r2 && (t2 ? e2[PT] = n2 : delete e2[PT]), i2;
  }
  M(FT, `getRawTag`);
  var IT = FT, LT = Object.prototype.toString;
  function RT(e2) {
    return LT.call(e2);
  }
  M(RT, `objectToString`);
  var zT = RT, BT = s(913), VT = s(500), HT = AT ? AT.toStringTag : void 0;
  function UT(e2) {
    return e2 == null ? e2 === void 0 ? VT : BT : HT && HT in Object(e2) ? IT(e2) : zT(e2);
  }
  M(UT, `baseGetTag`);
  var WT = UT;
  function GT(e2) {
    let t2 = s;
    var n2 = typeof e2;
    return e2 != null && (n2 == t2(716) || n2 == t2(386));
  }
  M(GT, `isObject`);
  var KT = GT, qT = `[object AsyncFunction]`, JT = s(1242), YT = `[object GeneratorFunction]`, XT = `[object Proxy]`;
  function ZT(e2) {
    if (!KT(e2)) return false;
    var t2 = WT(e2);
    return t2 == JT || t2 == YT || t2 == qT || t2 == XT;
  }
  M(ZT, `isFunction`);
  var QT = ZT, $T = kT[`__core-js_shared__`], eE = (function() {
    var e2 = /[^.]+$/.exec($T && $T.keys && $T.keys.IE_PROTO || ``);
    return e2 ? `Symbol(src)_1.` + e2 : ``;
  })();
  function tE(e2) {
    return !!eE && eE in e2;
  }
  M(tE, `isMasked`);
  var nE = tE, rE = Function.prototype.toString;
  function iE(e2) {
    if (e2 != null) {
      try {
        return rE.call(e2);
      } catch {
      }
      try {
        return e2 + ``;
      } catch {
      }
    }
    return ``;
  }
  M(iE, `toSource`);
  var aE = iE, oE = /[\\^$.*+?()[\]{}|]/g, sE = /^\[object .+?Constructor\]$/, cE = Function.prototype, lE = Object.prototype, uE = cE[s(752)], dE = lE.hasOwnProperty, fE = RegExp(`^` + uE.call(dE)[s(909)](oE, `\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, `$1.*?`) + `$`);
  function pE(e2) {
    let t2 = s;
    return !KT(e2) || nE(e2) ? false : (QT(e2) ? fE : sE)[t2(1276)](aE(e2));
  }
  M(pE, `baseIsNative`);
  var mE = pE;
  function hE(e2, t2) {
    return e2 == null ? void 0 : e2[t2];
  }
  M(hE, `getValue`);
  var gE = hE;
  function _E(e2, t2) {
    var n2 = gE(e2, t2);
    return mE(n2) ? n2 : void 0;
  }
  M(_E, `getNative`);
  var vE = _E, yE = vE(kT, `Map`), bE = vE(Object, `create`);
  function xE() {
    this.__data__ = bE ? bE(null) : {}, this.size = 0;
  }
  M(xE, `hashClear`);
  var SE = xE;
  function CE(e2) {
    let t2 = s;
    var n2 = this.has(e2) && delete this.__data__[e2];
    return this[t2(693)] -= +!!n2, n2;
  }
  M(CE, `hashDelete`);
  var wE = CE, TE = `__lodash_hash_undefined__`, EE = Object.prototype[s(577)];
  function DE(e2) {
    let t2 = s;
    var n2 = this.__data__;
    if (bE) {
      var r2 = n2[e2];
      return r2 === TE ? void 0 : r2;
    }
    return EE[t2(1066)](n2, e2) ? n2[e2] : void 0;
  }
  M(DE, `hashGet`);
  var OE = DE, kE = Object.prototype[s(577)];
  function AE(e2) {
    let t2 = s;
    var n2 = this[t2(1439)];
    return bE ? n2[e2] !== void 0 : kE.call(n2, e2);
  }
  M(AE, `hashHas`);
  var jE = AE, ME = s(1722);
  function NE(e2, t2) {
    var n2 = this.__data__;
    return this.size += +!this.has(e2), n2[e2] = bE && t2 === void 0 ? ME : t2, this;
  }
  M(NE, `hashSet`);
  var PE = NE;
  function FE(e2) {
    var t2 = -1, n2 = e2 == null ? 0 : e2.length;
    for (this.clear(); ++t2 < n2; ) {
      var r2 = e2[t2];
      this.set(r2[0], r2[1]);
    }
  }
  M(FE, `Hash`), FE.prototype.clear = SE, FE[s(950)][s(565)] = wE, FE.prototype[s(1419)] = OE, FE.prototype[s(714)] = jE, FE.prototype.set = PE;
  var IE = FE;
  function LE() {
    this.size = 0, this.__data__ = {
      hash: new IE(),
      map: new (yE || vT)(),
      string: new IE()
    };
  }
  M(LE, s(848));
  var RE = LE;
  function zE(e2) {
    let t2 = s;
    var n2 = typeof e2;
    return n2 == `string` || n2 == `number` || n2 == t2(537) || n2 == t2(821) ? e2 !== `__proto__` : e2 === null;
  }
  M(zE, `isKeyable`);
  var BE = zE;
  function VE(e2, t2) {
    let n2 = s;
    var r2 = e2.__data__;
    return BE(t2) ? r2[typeof t2 == `string` ? n2(1730) : `hash`] : r2.map;
  }
  M(VE, `getMapData`);
  var HE = VE;
  function UE(e2) {
    let t2 = s;
    var n2 = HE(this, e2)[t2(565)](e2);
    return this.size -= +!!n2, n2;
  }
  M(UE, s(594));
  var WE = UE;
  function GE(e2) {
    let t2 = s;
    return HE(this, e2)[t2(1419)](e2);
  }
  M(GE, `mapCacheGet`);
  var KE = GE;
  function qE(e2) {
    let t2 = s;
    return HE(this, e2)[t2(714)](e2);
  }
  M(qE, `mapCacheHas`);
  var JE = qE;
  function YE(e2, t2) {
    var n2 = HE(this, e2), r2 = n2.size;
    return n2.set(e2, t2), this.size += n2.size == r2 ? 0 : 1, this;
  }
  M(YE, s(631));
  var XE = YE;
  function ZE(e2) {
    var t2 = -1, n2 = e2 == null ? 0 : e2.length;
    for (this.clear(); ++t2 < n2; ) {
      var r2 = e2[t2];
      this.set(r2[0], r2[1]);
    }
  }
  M(ZE, `MapCache`), ZE.prototype.clear = RE, ZE.prototype.delete = WE, ZE[s(950)].get = KE, ZE.prototype.has = JE, ZE.prototype.set = XE;
  var QE = ZE, $E = 200;
  function eD(e2, t2) {
    let n2 = s;
    var r2 = this.__data__;
    if (r2 instanceof vT) {
      var i2 = r2.__data__;
      if (!yE || i2.length < $E - 1) return i2.push([
        e2,
        t2
      ]), this.size = ++r2.size, this;
      r2 = this[n2(1439)] = new QE(i2);
    }
    return r2.set(e2, t2), this.size = r2[n2(693)], this;
  }
  M(eD, `stackSet`);
  var tD = eD;
  function nD(e2) {
    var t2 = this.__data__ = new vT(e2);
    this.size = t2.size;
  }
  M(nD, `Stack`), nD.prototype.clear = bT, nD.prototype.delete = ST, nD.prototype.get = wT, nD.prototype.has = ET, nD.prototype.set = tD;
  var rD = nD, iD = `__lodash_hash_undefined__`;
  function aD(e2) {
    return this.__data__.set(e2, iD), this;
  }
  M(aD, `setCacheAdd`);
  var oD = aD;
  function sD(e2) {
    let t2 = s;
    return this.__data__[t2(714)](e2);
  }
  M(sD, `setCacheHas`);
  var cD = sD;
  function lD(e2) {
    let t2 = s;
    var n2 = -1, r2 = e2 == null ? 0 : e2.length;
    for (this.__data__ = new QE(); ++n2 < r2; ) this[t2(974)](e2[n2]);
  }
  M(lD, `SetCache`), lD.prototype.add = lD.prototype[s(1168)] = oD, lD.prototype.has = cD;
  var uD = lD;
  function dD(e2, t2) {
    for (var n2 = -1, r2 = e2 == null ? 0 : e2.length; ++n2 < r2; ) if (t2(e2[n2], n2, e2)) return true;
    return false;
  }
  M(dD, `arraySome`);
  var fD = dD;
  function pD(e2, t2) {
    return e2.has(t2);
  }
  M(pD, `cacheHas`);
  var mD = pD, hD = 1, gD = 2;
  function _D(e2, t2, n2, r2, i2, a2) {
    let o2 = s;
    var c2 = n2 & hD, l2 = e2[o2(1663)], u2 = t2.length;
    if (l2 != u2 && !(c2 && u2 > l2)) return false;
    var d2 = a2[o2(1419)](e2), f2 = a2.get(t2);
    if (d2 && f2) return d2 == t2 && f2 == e2;
    var p2 = -1, m2 = true, h2 = n2 & gD ? new uD() : void 0;
    for (a2.set(e2, t2), a2.set(t2, e2); ++p2 < l2; ) {
      var g2 = e2[p2], _2 = t2[p2];
      if (r2) var v2 = c2 ? r2(_2, g2, p2, t2, e2, a2) : r2(g2, _2, p2, e2, t2, a2);
      if (v2 !== void 0) {
        if (v2) continue;
        m2 = false;
        break;
      }
      if (h2) {
        if (!fD(t2, function(e3, t3) {
          if (!mD(h2, t3) && (g2 === e3 || i2(g2, e3, n2, r2, a2))) return h2.push(t3);
        })) {
          m2 = false;
          break;
        }
      } else if (!(g2 === _2 || i2(g2, _2, n2, r2, a2))) {
        m2 = false;
        break;
      }
    }
    return a2.delete(e2), a2.delete(t2), m2;
  }
  M(_D, `equalArrays`);
  var vD = _D, yD = kT.Uint8Array;
  function bD(e2) {
    var t2 = -1, n2 = Array(e2.size);
    return e2.forEach(function(e3, r2) {
      n2[++t2] = [
        r2,
        e3
      ];
    }), n2;
  }
  M(bD, `mapToArray`);
  var xD = bD;
  function SD(e2) {
    let t2 = s;
    var n2 = -1, r2 = Array(e2[t2(693)]);
    return e2.forEach(function(e3) {
      r2[++n2] = e3;
    }), r2;
  }
  M(SD, `setToArray`);
  var CD = SD, wD = 1, TD = 2, ED = `[object Boolean]`, DD = s(336), OD = `[object Error]`, kD = `[object Map]`, AD = `[object Number]`, jD = `[object RegExp]`, MD = s(633), ND = `[object String]`, PD = `[object Symbol]`, FD = `[object ArrayBuffer]`, ID = `[object DataView]`, LD = AT ? AT.prototype : void 0, RD = LD ? LD.valueOf : void 0;
  function zD(e2, t2, n2, r2, i2, a2, o2) {
    let c2 = s;
    switch (n2) {
      case ID:
        if (e2.byteLength != t2.byteLength || e2[c2(701)] != t2.byteOffset) return false;
        e2 = e2.buffer, t2 = t2.buffer;
      case FD:
        return !(e2.byteLength != t2.byteLength || !a2(new yD(e2), new yD(t2)));
      case ED:
      case DD:
      case AD:
        return aT(+e2, +t2);
      case OD:
        return e2[c2(747)] == t2[c2(747)] && e2[c2(1417)] == t2.message;
      case jD:
      case ND:
        return e2 == t2 + ``;
      case kD:
        var l2 = xD;
      case MD:
        var u2 = r2 & wD;
        if (l2 || (l2 = CD), e2[c2(693)] != t2.size && !u2) return false;
        var d2 = o2.get(e2);
        if (d2) return d2 == t2;
        r2 |= TD, o2.set(e2, t2);
        var f2 = vD(l2(e2), l2(t2), r2, i2, a2, o2);
        return o2.delete(e2), f2;
      case PD:
        if (RD) return RD.call(e2) == RD.call(t2);
    }
    return false;
  }
  M(zD, s(312));
  var BD = zD;
  function VD(e2, t2) {
    let n2 = s;
    for (var r2 = -1, i2 = t2[n2(1663)], a2 = e2.length; ++r2 < i2; ) e2[a2 + r2] = t2[r2];
    return e2;
  }
  M(VD, `arrayPush`);
  var HD = VD, UD = Array[s(1426)];
  function WD(e2, t2, n2) {
    var r2 = t2(e2);
    return UD(e2) ? r2 : HD(r2, n2(e2));
  }
  M(WD, `baseGetAllKeys`);
  var GD = WD;
  function KD(e2, t2) {
    for (var n2 = -1, r2 = e2 == null ? 0 : e2.length, i2 = 0, a2 = []; ++n2 < r2; ) {
      var o2 = e2[n2];
      t2(o2, n2, e2) && (a2[i2++] = o2);
    }
    return a2;
  }
  M(KD, `arrayFilter`);
  var qD = KD;
  function JD() {
    return [];
  }
  M(JD, `stubArray`);
  var YD = JD, XD = Object.prototype[s(358)], ZD = Object.getOwnPropertySymbols, QD = ZD ? function(e2) {
    return e2 == null ? [] : (e2 = Object(e2), qD(ZD(e2), function(t2) {
      return XD[X(1066)](e2, t2);
    }));
  } : YD;
  function $D(e2, t2) {
    for (var n2 = -1, r2 = Array(e2); ++n2 < e2; ) r2[n2] = t2(n2);
    return r2;
  }
  M($D, `baseTimes`);
  var eO = $D;
  function tO(e2) {
    return typeof e2 == `object` && !!e2;
  }
  M(tO, `isObjectLike`);
  var nO = tO, rO = s(1104);
  function iO(e2) {
    return nO(e2) && WT(e2) == rO;
  }
  M(iO, s(1390));
  var aO = iO, oO = Object[s(950)], sO = oO.hasOwnProperty, cO = oO.propertyIsEnumerable, lO = aO(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? aO : function(e2) {
    let t2 = s;
    return nO(e2) && sO.call(e2, `callee`) && !cO.call(e2, t2(1070));
  };
  function uO() {
    return false;
  }
  M(uO, `stubFalse`);
  var dO = uO, fO = typeof exports == `object` && exports && !exports[s(1472)] && exports, pO = fO && typeof module == `object` && module && !module.nodeType && module, mO = pO && pO.exports === fO ? kT.Buffer : void 0, hO = (mO ? mO[s(1560)] : void 0) || dO, gO = 9007199254740991, _O = /^(?:0|[1-9]\d*)$/;
  function vO(e2, t2) {
    var n2 = typeof e2;
    return t2 ?? (t2 = gO), !!t2 && (n2 == `number` || n2 != `symbol` && _O.test(e2)) && e2 > -1 && e2 % 1 == 0 && e2 < t2;
  }
  M(vO, `isIndex`);
  var yO = vO, bO = 9007199254740991;
  function xO(e2) {
    return typeof e2 == `number` && e2 > -1 && e2 % 1 == 0 && e2 <= bO;
  }
  M(xO, `isLength`);
  var SO = xO, CO = `[object Arguments]`, wO = s(614), TO = s(1402), EO = `[object Date]`, DO = `[object Error]`, OO = `[object Function]`, kO = `[object Map]`, AO = `[object Number]`, jO = `[object Object]`, MO = `[object RegExp]`, NO = `[object Set]`, PO = `[object String]`, FO = `[object WeakMap]`, IO = `[object ArrayBuffer]`, LO = `[object DataView]`, RO = `[object Float32Array]`, zO = s(581), BO = `[object Int8Array]`, VO = `[object Int16Array]`, HO = `[object Int32Array]`, UO = `[object Uint8Array]`, WO = `[object Uint8ClampedArray]`, GO = `[object Uint16Array]`, KO = `[object Uint32Array]`, Y = {};
  Y[RO] = Y[zO] = Y[BO] = Y[VO] = Y[HO] = Y[UO] = Y[WO] = Y[GO] = Y[KO] = true, Y[CO] = Y[wO] = Y[IO] = Y[TO] = Y[LO] = Y[EO] = Y[DO] = Y[OO] = Y[kO] = Y[AO] = Y[jO] = Y[MO] = Y[NO] = Y[PO] = Y[FO] = false;
  function qO(e2) {
    let t2 = s;
    return nO(e2) && SO(e2[t2(1663)]) && !!Y[WT(e2)];
  }
  M(qO, s(297));
  var JO = qO;
  function YO(e2) {
    return function(t2) {
      return e2(t2);
    };
  }
  M(YO, `baseUnary`);
  var XO = YO, ZO = typeof exports == `object` && exports && !exports[s(1472)] && exports, QO = ZO && typeof module == `object` && module && !module.nodeType && module, $O = QO && QO.exports === ZO && DT.process, ek = (function() {
    let e2 = s;
    try {
      return QO && QO.require && QO.require(`util`).types || $O && $O[e2(866)] && $O.binding(e2(331));
    } catch {
    }
  })(), tk = ek && ek.isTypedArray, nk = tk ? XO(tk) : JO, rk = Object.prototype.hasOwnProperty;
  function ik(e2, t2) {
    let n2 = s;
    var r2 = UD(e2), i2 = !r2 && lO(e2), a2 = !r2 && !i2 && hO(e2), o2 = !r2 && !i2 && !a2 && nk(e2), c2 = r2 || i2 || a2 || o2, l2 = c2 ? eO(e2[n2(1663)], String) : [], u2 = l2.length;
    for (var d2 in e2) (t2 || rk[n2(1066)](e2, d2)) && !(c2 && (d2 == `length` || a2 && (d2 == `offset` || d2 == `parent`) || o2 && (d2 == `buffer` || d2 == `byteLength` || d2 == `byteOffset`) || yO(d2, u2))) && l2.push(d2);
    return l2;
  }
  M(ik, `arrayLikeKeys`);
  var ak = ik, ok = Object[s(950)];
  function sk(e2) {
    var t2 = e2 && e2.constructor;
    return e2 === (typeof t2 == `function` && t2.prototype || ok);
  }
  M(sk, `isPrototype`);
  var ck = sk;
  function lk(e2, t2) {
    return function(n2) {
      return e2(t2(n2));
    };
  }
  M(lk, s(946));
  var uk = lk(Object.keys, Object), dk = Object.prototype.hasOwnProperty;
  function fk(e2) {
    let t2 = s;
    if (!ck(e2)) return uk(e2);
    var n2 = [];
    for (var r2 in Object(e2)) dk[t2(1066)](e2, r2) && r2 != t2(1406) && n2.push(r2);
    return n2;
  }
  M(fk, `baseKeys`);
  var pk = fk;
  function mk(e2) {
    return e2 != null && SO(e2[s(1663)]) && !QT(e2);
  }
  M(mk, s(613));
  var hk = mk;
  function gk(e2) {
    return hk(e2) ? ak(e2) : pk(e2);
  }
  M(gk, `keys`);
  var _k = gk;
  function vk(e2) {
    return GD(e2, _k, QD);
  }
  M(vk, `getAllKeys`);
  var yk = vk, bk = 1, xk = Object.prototype.hasOwnProperty;
  function Sk(e2, t2, n2, r2, i2, a2) {
    let o2 = s;
    var c2 = n2 & bk, l2 = yk(e2), u2 = l2.length;
    if (u2 != yk(t2)[o2(1663)] && !c2) return false;
    for (var d2 = u2; d2--; ) {
      var f2 = l2[d2];
      if (!(c2 ? f2 in t2 : xk.call(t2, f2))) return false;
    }
    var p2 = a2.get(e2), m2 = a2.get(t2);
    if (p2 && m2) return p2 == t2 && m2 == e2;
    var h2 = true;
    a2.set(e2, t2), a2.set(t2, e2);
    for (var g2 = c2; ++d2 < u2; ) {
      f2 = l2[d2];
      var _2 = e2[f2], v2 = t2[f2];
      if (r2) var y2 = c2 ? r2(v2, _2, f2, t2, e2, a2) : r2(_2, v2, f2, e2, t2, a2);
      if (!(y2 === void 0 ? _2 === v2 || i2(_2, v2, n2, r2, a2) : y2)) {
        h2 = false;
        break;
      }
      g2 || (g2 = f2 == `constructor`);
    }
    if (h2 && !g2) {
      var b2 = e2.constructor, x2 = t2.constructor;
      b2 != x2 && `constructor` in e2 && `constructor` in t2 && !(typeof b2 == `function` && b2 instanceof b2 && typeof x2 == `function` && x2 instanceof x2) && (h2 = false);
    }
    return a2.delete(e2), a2[o2(565)](t2), h2;
  }
  M(Sk, s(1199));
  var Ck = Sk, wk = vE(kT, `DataView`), Tk = vE(kT, `Promise`), Ek = vE(kT, `Set`), Dk = vE(kT, `WeakMap`), Ok = `[object Map]`, kk = `[object Object]`, Ak = s(1576), jk = s(633), Mk = `[object WeakMap]`, Nk = `[object DataView]`, Pk = aE(wk), Fk = aE(yE), Ik = aE(Tk), Lk = aE(Ek), Rk = aE(Dk), zk = WT;
  (wk && zk(new wk(new ArrayBuffer(1))) != Nk || yE && zk(new yE()) != Ok || Tk && zk(Tk.resolve()) != Ak || Ek && zk(new Ek()) != jk || Dk && zk(new Dk()) != Mk) && (zk = M(function(e2) {
    var t2 = WT(e2), n2 = t2 == kk ? e2.constructor : void 0, r2 = n2 ? aE(n2) : ``;
    if (r2) switch (r2) {
      case Pk:
        return Nk;
      case Fk:
        return Ok;
      case Ik:
        return Ak;
      case Lk:
        return jk;
      case Rk:
        return Mk;
    }
    return t2;
  }, `getTag`));
  var Bk = zk, Vk = 1, Hk = s(1104), Uk = `[object Array]`, Wk = `[object Object]`, Gk = Object[s(950)].hasOwnProperty;
  function Kk(e2, t2, n2, r2, i2, a2) {
    var o2 = UD(e2), s2 = UD(t2), c2 = o2 ? Uk : Bk(e2), l2 = s2 ? Uk : Bk(t2);
    c2 = c2 == Hk ? Wk : c2, l2 = l2 == Hk ? Wk : l2;
    var u2 = c2 == Wk, d2 = l2 == Wk, f2 = c2 == l2;
    if (f2 && hO(e2)) {
      if (!hO(t2)) return false;
      o2 = true, u2 = false;
    }
    if (f2 && !u2) return a2 || (a2 = new rD()), o2 || nk(e2) ? vD(e2, t2, n2, r2, i2, a2) : BD(e2, t2, c2, n2, r2, i2, a2);
    if (!(n2 & Vk)) {
      var p2 = u2 && Gk.call(e2, `__wrapped__`), m2 = d2 && Gk.call(t2, `__wrapped__`);
      if (p2 || m2) {
        var h2 = p2 ? e2.value() : e2, g2 = m2 ? t2.value() : t2;
        return a2 || (a2 = new rD()), i2(h2, g2, n2, r2, a2);
      }
    }
    return f2 ? (a2 || (a2 = new rD()), Ck(e2, t2, n2, r2, i2, a2)) : false;
  }
  M(Kk, `baseIsEqualDeep`);
  var qk = Kk;
  function Jk(e2, t2, n2, r2, i2) {
    return e2 === t2 ? true : e2 == null || t2 == null || !nO(e2) && !nO(t2) ? e2 !== e2 && t2 !== t2 : qk(e2, t2, n2, r2, Jk, i2);
  }
  M(Jk, s(1641));
  var Yk = Jk, Xk = 1, Zk = 2;
  function Qk(e2, t2, n2, r2) {
    var i2 = n2.length, a2 = i2, o2 = !r2;
    if (e2 == null) return !a2;
    for (e2 = Object(e2); i2--; ) {
      var s2 = n2[i2];
      if (o2 && s2[2] ? s2[1] !== e2[s2[0]] : !(s2[0] in e2)) return false;
    }
    for (; ++i2 < a2; ) {
      s2 = n2[i2];
      var c2 = s2[0], l2 = e2[c2], u2 = s2[1];
      if (o2 && s2[2]) {
        if (l2 === void 0 && !(c2 in e2)) return false;
      } else {
        var d2 = new rD();
        if (r2) var f2 = r2(l2, u2, c2, e2, t2, d2);
        if (!(f2 === void 0 ? Yk(u2, l2, Xk | Zk, r2, d2) : f2)) return false;
      }
    }
    return true;
  }
  M(Qk, `baseIsMatch`);
  var $k = Qk;
  function eA(e2) {
    return e2 === e2 && !KT(e2);
  }
  M(eA, s(1769));
  var tA = eA;
  function nA(e2) {
    for (var t2 = _k(e2), n2 = t2.length; n2--; ) {
      var r2 = t2[n2], i2 = e2[r2];
      t2[n2] = [
        r2,
        i2,
        tA(i2)
      ];
    }
    return t2;
  }
  M(nA, s(1770));
  var rA = nA;
  function iA(e2, t2) {
    return function(n2) {
      return n2 == null ? false : n2[e2] === t2 && (t2 !== void 0 || e2 in Object(n2));
    };
  }
  M(iA, `matchesStrictComparable`);
  var aA = iA;
  function oA(e2) {
    var t2 = rA(e2);
    return t2.length == 1 && t2[0][2] ? aA(t2[0][0], t2[0][1]) : function(n2) {
      return n2 === e2 || $k(n2, e2, t2);
    };
  }
  M(oA, `baseMatches`);
  var sA = oA, cA = `[object Symbol]`;
  function lA(e2) {
    return typeof e2 == `symbol` || nO(e2) && WT(e2) == cA;
  }
  M(lA, `isSymbol`);
  var uA = lA, dA = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, fA = /^\w*$/;
  function pA(e2, t2) {
    let n2 = s;
    if (UD(e2)) return false;
    var r2 = typeof e2;
    return r2 == n2(1539) || r2 == n2(537) || r2 == `boolean` || e2 == null || uA(e2) ? true : fA.test(e2) || !dA.test(e2) || t2 != null && e2 in Object(t2);
  }
  M(pA, `isKey`);
  var mA = pA, hA = `Expected a function`;
  function gA(e2, t2) {
    let n2 = s;
    if (typeof e2 != `function` || t2 != null && typeof t2 != `function`) throw TypeError(hA);
    var r2 = M(function() {
      var n3 = arguments, i2 = t2 ? t2.apply(this, n3) : n3[0], a2 = r2.cache;
      if (a2.has(i2)) return a2.get(i2);
      var o2 = e2.apply(this, n3);
      return r2.cache = a2.set(i2, o2) || a2, o2;
    }, n2(1747));
    return r2.cache = new (gA.Cache || QE)(), r2;
  }
  M(gA, s(1688)), gA.Cache = QE;
  var _A = gA, vA = 500;
  function yA(e2) {
    var t2 = _A(e2, function(e3) {
      return n2[X(693)] === vA && n2.clear(), e3;
    }), n2 = t2.cache;
    return t2;
  }
  M(yA, `memoizeCapped`);
  var bA = yA, xA = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, SA = /\\(\\)?/g, CA = bA(function(e2) {
    let t2 = s;
    var n2 = [];
    return e2.charCodeAt(0) === 46 && n2.push(``), e2[t2(909)](xA, function(e3, t3, r2, i2) {
      n2.push(r2 ? i2.replace(SA, `$1`) : t3 || e3);
    }), n2;
  }), wA = 1 / 0, TA = AT ? AT.prototype : void 0, EA = TA ? TA.toString : void 0;
  function DA(e2) {
    if (typeof e2 == `string`) return e2;
    if (UD(e2)) return tT(e2, DA) + ``;
    if (uA(e2)) return EA ? EA.call(e2) : ``;
    var t2 = e2 + ``;
    return t2 == `0` && 1 / e2 == -wA ? `-0` : t2;
  }
  M(DA, `baseToString`);
  var OA = DA;
  function kA(e2) {
    return e2 == null ? `` : OA(e2);
  }
  M(kA, `toString`);
  var AA = kA;
  function jA(e2, t2) {
    return UD(e2) ? e2 : mA(e2, t2) ? [
      e2
    ] : CA(AA(e2));
  }
  M(jA, `castPath`);
  var MA = jA, NA = 1 / 0;
  function PA(e2) {
    if (typeof e2 == `string` || uA(e2)) return e2;
    var t2 = e2 + ``;
    return t2 == `0` && 1 / e2 == -NA ? `-0` : t2;
  }
  M(PA, s(753));
  var FA = PA;
  function IA(e2, t2) {
    t2 = MA(t2, e2);
    for (var n2 = 0, r2 = t2.length; e2 != null && n2 < r2; ) e2 = e2[FA(t2[n2++])];
    return n2 && n2 == r2 ? e2 : void 0;
  }
  M(IA, s(817));
  var LA = IA;
  function RA(e2, t2, n2) {
    var r2 = e2 == null ? void 0 : LA(e2, t2);
    return r2 === void 0 ? n2 : r2;
  }
  M(RA, s(1419));
  var zA = RA;
  function BA(e2, t2) {
    return e2 != null && t2 in Object(e2);
  }
  M(BA, s(1217));
  var VA = BA;
  function HA(e2, t2, n2) {
    let r2 = s;
    t2 = MA(t2, e2);
    for (var i2 = -1, a2 = t2.length, o2 = false; ++i2 < a2; ) {
      var c2 = FA(t2[i2]);
      if (!(o2 = e2 != null && n2(e2, c2))) break;
      e2 = e2[c2];
    }
    return o2 || ++i2 != a2 ? o2 : (a2 = e2 == null ? 0 : e2[r2(1663)], !!a2 && SO(a2) && yO(c2, a2) && (UD(e2) || lO(e2)));
  }
  M(HA, `hasPath`);
  var UA = HA;
  function WA(e2, t2) {
    return e2 != null && UA(e2, t2, VA);
  }
  M(WA, `hasIn`);
  var GA = WA, KA = 1, qA = 2;
  function JA(e2, t2) {
    return mA(e2) && tA(t2) ? aA(FA(e2), t2) : function(n2) {
      var r2 = zA(n2, e2);
      return r2 === void 0 && r2 === t2 ? GA(n2, e2) : Yk(t2, r2, KA | qA);
    };
  }
  M(JA, `baseMatchesProperty`);
  var YA = JA;
  function XA(e2) {
    return e2;
  }
  M(XA, `identity`);
  var ZA = XA;
  function QA(e2) {
    return function(t2) {
      return t2 == null ? void 0 : t2[e2];
    };
  }
  M(QA, `baseProperty`);
  var $A = QA;
  function ej(e2) {
    return function(t2) {
      return LA(t2, e2);
    };
  }
  M(ej, `basePropertyDeep`);
  var tj = ej;
  function nj(e2) {
    return mA(e2) ? $A(FA(e2)) : tj(e2);
  }
  M(nj, `property`);
  var rj = nj;
  function ij(e2) {
    return typeof e2 == `function` ? e2 : e2 == null ? ZA : typeof e2 == `object` ? UD(e2) ? YA(e2[0], e2[1]) : sA(e2) : rj(e2);
  }
  M(ij, `baseIteratee`);
  var aj = ij;
  function oj(e2) {
    return function(t2, n2, r2) {
      for (var i2 = -1, a2 = Object(t2), o2 = r2(t2), s2 = o2.length; s2--; ) {
        var c2 = o2[e2 ? s2 : ++i2];
        if (n2(a2[c2], c2, a2) === false) break;
      }
      return t2;
    };
  }
  M(oj, `createBaseFor`);
  var sj = oj();
  function cj(e2, t2) {
    return e2 && sj(e2, t2, _k);
  }
  M(cj, `baseForOwn`);
  var lj = cj;
  function uj(e2, t2) {
    return function(n2, r2) {
      if (n2 == null) return n2;
      if (!hk(n2)) return e2(n2, r2);
      for (var i2 = n2.length, a2 = t2 ? i2 : -1, o2 = Object(n2); (t2 ? a2-- : ++a2 < i2) && r2(o2[a2], a2, o2) !== false; ) ;
      return n2;
    };
  }
  M(uj, `createBaseEach`);
  var dj = uj(lj);
  function fj(e2, t2) {
    var n2 = -1, r2 = hk(e2) ? Array(e2.length) : [];
    return dj(e2, function(e3, i2, a2) {
      r2[++n2] = t2(e3, i2, a2);
    }), r2;
  }
  M(fj, `baseMap`);
  var pj = fj;
  function mj(e2, t2) {
    return (UD(e2) ? tT : pj)(e2, aj(t2, 3));
  }
  M(mj, `map`);
  var hj = mj;
  function gj(e2, t2) {
    var n2 = [];
    return dj(e2, function(e3, r2, i2) {
      t2(e3, r2, i2) && n2.push(e3);
    }), n2;
  }
  M(gj, s(1310));
  var _j = gj;
  function vj(e2, t2) {
    return (UD(e2) ? qD : _j)(e2, aj(t2, 3));
  }
  M(vj, s(322));
  var yj = vj;
  function bj(e2, t2, n2) {
    return e2.name + `_` + t2 + `_` + n2;
  }
  M(bj, `buildATNKey`);
  var xj = 1, Sj = 2, Cj = 4, wj = 5, Tj = 7, Ej = 8, Dj = 9, Oj = 10, kj = 11, Aj = 12, jj = (Ne = class {
    constructor(e2) {
      this.target = e2;
    }
    isEpsilon() {
      return false;
    }
  }, M(Ne, s(1132)), Ne), Mj = (Pe = class extends jj {
    constructor(e2, t2) {
      let n2 = s;
      super(e2), this[n2(435)] = t2;
    }
  }, M(Pe, `AtomTransition`), Pe), Nj = (Fe = class extends jj {
    constructor(e2) {
      super(e2);
    }
    isEpsilon() {
      return true;
    }
  }, M(Fe, `EpsilonTransition`), Fe), Pj = (Ie = class extends jj {
    constructor(e2, t2, n2) {
      let r2 = s;
      super(e2), this[r2(497)] = t2, this.followState = n2;
    }
    [s(1605)]() {
      return true;
    }
  }, M(Ie, `RuleTransition`), Ie);
  function Fj(e2) {
    let t2 = {
      decisionMap: {},
      decisionStates: [],
      ruleToStartState: /* @__PURE__ */ new Map(),
      ruleToStopState: /* @__PURE__ */ new Map(),
      states: []
    };
    Ij(t2, e2);
    let n2 = e2.length;
    for (let r2 = 0; r2 < n2; r2++) {
      let n3 = e2[r2], i2 = Wj(t2, n3, n3);
      i2 !== void 0 && eM(t2, n3, i2);
    }
    return t2;
  }
  M(Fj, `createATN`);
  function Ij(e2, t2) {
    let n2 = t2.length;
    for (let r2 = 0; r2 < n2; r2++) {
      let n3 = t2[r2], i2 = nM(e2, n3, void 0, {
        type: Sj
      }), a2 = nM(e2, n3, void 0, {
        type: Tj
      });
      i2.stop = a2, e2.ruleToStartState.set(n3, i2), e2.ruleToStopState.set(n3, a2);
    }
  }
  M(Ij, `createRuleStartAndStopATNStates`);
  function Lj(e2, t2, n2) {
    return n2 instanceof J ? Qj(e2, t2, n2.terminalType, n2) : n2 instanceof Fb ? $j(e2, t2, n2) : n2 instanceof Ub ? Hj(e2, t2, n2) : n2 instanceof Rb ? Uj(e2, t2, n2) : n2 instanceof Vb ? Rj(e2, t2, n2) : n2 instanceof Hb ? zj(e2, t2, n2) : n2 instanceof zb ? Bj(e2, t2, n2) : n2 instanceof Bb ? Vj(e2, t2, n2) : Wj(e2, t2, n2);
  }
  M(Lj, s(325));
  function Rj(e2, t2, n2) {
    let r2 = nM(e2, t2, n2, {
      type: wj
    });
    return Jj(e2, r2), Kj(e2, t2, n2, Yj(e2, t2, r2, n2, Wj(e2, t2, n2)));
  }
  M(Rj, s(1558));
  function zj(e2, t2, n2) {
    let r2 = nM(e2, t2, n2, {
      type: wj
    });
    return Jj(e2, r2), Kj(e2, t2, n2, Yj(e2, t2, r2, n2, Wj(e2, t2, n2)), Qj(e2, t2, n2.separator, n2));
  }
  M(zj, `repetitionSep`);
  function Bj(e2, t2, n2) {
    let r2 = nM(e2, t2, n2, {
      type: Cj
    });
    return Jj(e2, r2), Gj(e2, t2, n2, Yj(e2, t2, r2, n2, Wj(e2, t2, n2)));
  }
  M(Bj, `repetitionMandatory`);
  function Vj(e2, t2, n2) {
    let r2 = s, i2 = nM(e2, t2, n2, {
      type: Cj
    });
    return Jj(e2, i2), Gj(e2, t2, n2, Yj(e2, t2, i2, n2, Wj(e2, t2, n2)), Qj(e2, t2, n2[r2(1541)], n2));
  }
  M(Vj, `repetitionMandatorySep`);
  function Hj(e2, t2, n2) {
    let r2 = s, i2 = nM(e2, t2, n2, {
      type: xj
    });
    return Jj(e2, i2), Yj(e2, t2, i2, n2, ...hj(n2[r2(957)], (n3) => Lj(e2, t2, n3)));
  }
  M(Hj, `alternation`);
  function Uj(e2, t2, n2) {
    let r2 = nM(e2, t2, n2, {
      type: xj
    });
    return Jj(e2, r2), qj(e2, t2, n2, Yj(e2, t2, r2, n2, Wj(e2, t2, n2)));
  }
  M(Uj, `option`);
  function Wj(e2, t2, n2) {
    let r2 = s, i2 = yj(hj(n2.definition, (n3) => Lj(e2, t2, n3)), (e3) => e3 !== void 0);
    return i2.length === 1 ? i2[0] : i2[r2(1663)] === 0 ? void 0 : Zj(e2, i2);
  }
  M(Wj, `block`);
  function Gj(e2, t2, n2, r2, i2) {
    let a2 = s, o2 = r2.left, c2 = r2.right, l2 = nM(e2, t2, n2, {
      type: kj
    });
    Jj(e2, l2);
    let u2 = nM(e2, t2, n2, {
      type: Aj
    });
    return o2.loopback = l2, u2.loopback = l2, e2.decisionMap[bj(t2, i2 ? `RepetitionMandatoryWithSeparator` : a2(350), n2.idx)] = l2, tM(c2, l2), i2 === void 0 ? (tM(l2, o2), tM(l2, u2)) : (tM(l2, u2), tM(l2, i2[a2(347)]), tM(i2.right, o2)), {
      left: o2,
      right: u2
    };
  }
  M(Gj, `plus`);
  function Kj(e2, t2, n2, r2, i2) {
    let a2 = s, o2 = r2.left, c2 = r2.right, l2 = nM(e2, t2, n2, {
      type: Oj
    });
    Jj(e2, l2);
    let u2 = nM(e2, t2, n2, {
      type: Aj
    }), d2 = nM(e2, t2, n2, {
      type: Dj
    });
    return l2.loopback = d2, u2[a2(1123)] = d2, tM(l2, o2), tM(l2, u2), tM(c2, d2), i2 === void 0 ? tM(d2, l2) : (tM(d2, u2), tM(d2, i2.left), tM(i2[a2(1134)], o2)), e2.decisionMap[bj(t2, i2 ? `RepetitionWithSeparator` : `Repetition`, n2.idx)] = l2, {
      left: l2,
      right: u2
    };
  }
  M(Kj, `star`);
  function qj(e2, t2, n2, r2) {
    let i2 = r2.left, a2 = r2.right;
    return tM(i2, a2), e2.decisionMap[bj(t2, `Option`, n2.idx)] = i2, r2;
  }
  M(qj, `optional`);
  function Jj(e2, t2) {
    return e2.decisionStates.push(t2), t2.decision = e2.decisionStates.length - 1, t2.decision;
  }
  M(Jj, `defineDecisionState`);
  function Yj(e2, t2, n2, r2, ...i2) {
    let a2 = s, o2 = nM(e2, t2, r2, {
      type: Ej,
      start: n2
    });
    n2[a2(1488)] = o2;
    for (let e3 of i2) e3 === void 0 ? tM(n2, o2) : (tM(n2, e3[a2(347)]), tM(e3[a2(1134)], o2));
    let c2 = {
      left: n2,
      right: o2
    };
    return e2[a2(310)][bj(t2, Xj(r2), r2.idx)] = n2, c2;
  }
  M(Yj, `makeAlts`);
  function Xj(e2) {
    let t2 = s;
    if (e2 instanceof Ub) return `Alternation`;
    if (e2 instanceof Rb) return `Option`;
    if (e2 instanceof Vb) return `Repetition`;
    if (e2 instanceof Hb) return t2(1194);
    if (e2 instanceof zb) return `RepetitionMandatory`;
    if (e2 instanceof Bb) return `RepetitionMandatoryWithSeparator`;
    throw Error(t2(1328));
  }
  M(Xj, `getProdType`);
  function Zj(e2, t2) {
    let n2 = s, r2 = t2.length;
    for (let i3 = 0; i3 < r2 - 1; i3++) {
      let r3 = t2[i3], a3;
      r3.left.transitions.length === 1 && (a3 = r3.left.transitions[0]);
      let o2 = a3 instanceof Pj, s2 = a3, c2 = t2[i3 + 1].left;
      r3[n2(347)].type === xj && r3.right.type === xj && a3 !== void 0 && (o2 && s2.followState === r3.right || a3.target === r3.right) ? (o2 ? s2[n2(1011)] = c2 : a3.target = c2, iM(e2, r3[n2(1134)])) : tM(r3.right, c2);
    }
    let i2 = t2[0], a2 = t2[r2 - 1];
    return {
      left: i2[n2(347)],
      right: a2.right
    };
  }
  M(Zj, `makeBlock`);
  function Qj(e2, t2, n2, r2) {
    let i2 = nM(e2, t2, r2, {
      type: xj
    }), a2 = nM(e2, t2, r2, {
      type: xj
    });
    return rM(i2, new Mj(a2, n2)), {
      left: i2,
      right: a2
    };
  }
  M(Qj, `tokenRef`);
  function $j(e2, t2, n2) {
    let r2 = n2.referencedRule, i2 = e2.ruleToStartState.get(r2), a2 = nM(e2, t2, n2, {
      type: xj
    }), o2 = nM(e2, t2, n2, {
      type: xj
    });
    return rM(a2, new Pj(i2, r2, o2)), {
      left: a2,
      right: o2
    };
  }
  M($j, `ruleRef`);
  function eM(e2, t2, n2) {
    let r2 = e2.ruleToStartState.get(t2);
    tM(r2, n2.left);
    let i2 = e2.ruleToStopState.get(t2);
    return tM(n2.right, i2), {
      left: r2,
      right: i2
    };
  }
  M(eM, `buildRuleHandle`);
  function tM(e2, t2) {
    rM(e2, new Nj(t2));
  }
  M(tM, `epsilon`);
  function nM(e2, t2, n2, r2) {
    let i2 = s, a2 = Object.assign({
      atn: e2,
      production: n2,
      epsilonOnlyTransitions: false,
      rule: t2,
      transitions: [],
      nextTokenWithinRule: [],
      stateNumber: e2.states[i2(1663)]
    }, r2);
    return e2.states.push(a2), a2;
  }
  M(nM, `newState`);
  function rM(e2, t2) {
    e2.transitions.length === 0 && (e2.epsilonOnlyTransitions = t2.isEpsilon()), e2.transitions.push(t2);
  }
  M(rM, `addTransition`);
  function iM(e2, t2) {
    let n2 = s;
    e2.states.splice(e2.states[n2(507)](t2), 1);
  }
  M(iM, s(1296));
  var aM = {}, oM = (Le = class {
    constructor() {
      this.map = {}, this.configs = [];
    }
    get size() {
      return this.configs.length;
    }
    [s(1774)]() {
      this.map = {};
    }
    add(e2) {
      let t2 = s, n2 = sM(e2);
      n2 in this[t2(311)] || (this.map[n2] = this.configs.length, this[t2(985)].push(e2));
    }
    get elements() {
      let e2 = s;
      return this[e2(985)];
    }
    get alts() {
      return hj(this.configs, (e2) => e2.alt);
    }
    get [s(783)]() {
      let e2 = ``;
      for (let t2 in this.map) e2 += t2 + `:`;
      return e2;
    }
  }, M(Le, `ATNConfigSet`), Le);
  function sM(e2, t2 = true) {
    let n2 = s;
    return (t2 ? `a` + e2.alt : ``) + `s` + e2[n2(491)][n2(667)] + `:` + e2[n2(1018)].map((e3) => e3.stateNumber.toString())[n2(1655)](`_`);
  }
  M(sM, s(1467));
  function cM(e2, t2, n2) {
    for (var r2 = -1, i2 = e2.length; ++r2 < i2; ) {
      var a2 = e2[r2], o2 = t2(a2);
      if (o2 != null && (s2 === void 0 ? o2 === o2 && !uA(o2) : n2(o2, s2))) var s2 = o2, c2 = a2;
    }
    return c2;
  }
  M(cM, `baseExtremum`);
  var lM = cM;
  function uM(e2, t2) {
    return e2 < t2;
  }
  M(uM, `baseLt`);
  var dM = uM;
  function fM(e2) {
    return e2 && e2.length ? lM(e2, ZA, dM) : void 0;
  }
  M(fM, `min`);
  var pM = fM, mM = AT ? AT.isConcatSpreadable : void 0;
  function hM(e2) {
    return UD(e2) || lO(e2) || !!(mM && e2 && e2[mM]);
  }
  M(hM, `isFlattenable`);
  var gM = hM;
  function _M(e2, t2, n2, r2, i2) {
    var a2 = -1, o2 = e2.length;
    for (n2 || (n2 = gM), i2 || (i2 = []); ++a2 < o2; ) {
      var s2 = e2[a2];
      t2 > 0 && n2(s2) ? t2 > 1 ? _M(s2, t2 - 1, n2, r2, i2) : HD(i2, s2) : r2 || (i2[i2.length] = s2);
    }
    return i2;
  }
  M(_M, `baseFlatten`);
  var vM = _M;
  function yM(e2, t2) {
    return vM(hj(e2, t2), 1);
  }
  M(yM, `flatMap`);
  var bM = yM;
  function xM(e2, t2, n2, r2) {
    for (var i2 = e2.length, a2 = n2 + (r2 ? 1 : -1); r2 ? a2-- : ++a2 < i2; ) if (t2(e2[a2], a2, e2)) return a2;
    return -1;
  }
  M(xM, s(1731));
  var SM = xM;
  function CM(e2) {
    return e2 !== e2;
  }
  M(CM, `baseIsNaN`);
  var wM = CM;
  function TM(e2, t2, n2) {
    for (var r2 = n2 - 1, i2 = e2.length; ++r2 < i2; ) if (e2[r2] === t2) return r2;
    return -1;
  }
  M(TM, s(828));
  var EM = TM;
  function DM(e2, t2, n2) {
    return t2 === t2 ? EM(e2, t2, n2) : SM(e2, wM, n2);
  }
  M(DM, `baseIndexOf`);
  var OM = DM;
  function kM(e2, t2) {
    return !!(e2 != null && e2.length) && OM(e2, t2, 0) > -1;
  }
  M(kM, `arrayIncludes`);
  var AM = kM;
  function X(e2, t2) {
    return e2 -= 256, Ts()[e2];
  }
  function jM(e2, t2, n2) {
    let r2 = s;
    for (var i2 = -1, a2 = e2 == null ? 0 : e2[r2(1663)]; ++i2 < a2; ) if (n2(t2, e2[i2])) return true;
    return false;
  }
  M(jM, `arrayIncludesWith`);
  var MM = jM;
  function NM() {
  }
  M(NM, `noop`);
  var PM = NM, FM = Ek && 1 / CD(new Ek([
    ,
    -0
  ]))[1] == 1 / 0 ? function(e2) {
    return new Ek(e2);
  } : PM, IM = 200;
  function LM(e2, t2, n2) {
    let r2 = s;
    var i2 = -1, a2 = AM, o2 = e2.length, c2 = true, l2 = [], u2 = l2;
    if (n2) c2 = false, a2 = MM;
    else if (o2 >= IM) {
      var d2 = t2 ? null : FM(e2);
      if (d2) return CD(d2);
      c2 = false, a2 = mD, u2 = new uD();
    } else u2 = t2 ? [] : l2;
    aX: for (; ++i2 < o2; ) {
      var f2 = e2[i2], p2 = t2 ? t2(f2) : f2;
      if (f2 = n2 || f2 !== 0 ? f2 : 0, c2 && p2 === p2) {
        for (var m2 = u2.length; m2--; ) if (u2[m2] === p2) continue aX;
        t2 && u2.push(p2), l2.push(f2);
      } else a2(u2, p2, n2) || (u2 !== l2 && u2[r2(1168)](p2), l2.push(f2));
    }
    return l2;
  }
  M(LM, `baseUniq`);
  var RM = LM;
  function zM(e2, t2) {
    return e2 && e2[s(1663)] ? RM(e2, aj(t2, 2)) : [];
  }
  M(zM, s(1077));
  var BM = zM;
  function VM(e2) {
    return e2 != null && e2.length ? vM(e2, 1) : [];
  }
  M(VM, `flatten`);
  var HM = VM;
  function UM(e2, t2) {
    for (var n2 = -1, r2 = e2 == null ? 0 : e2.length; ++n2 < r2 && t2(e2[n2], n2, e2) !== false; ) ;
    return e2;
  }
  M(UM, `arrayEach`);
  var WM = UM;
  function GM(e2) {
    return typeof e2 == `function` ? e2 : ZA;
  }
  M(GM, `castFunction`);
  var KM = GM;
  function qM(e2, t2) {
    return (UD(e2) ? WM : dj)(e2, KM(t2));
  }
  M(qM, `forEach`);
  var JM = qM, YM = `[object Map]`, XM = `[object Set]`, ZM = Object.prototype[s(577)];
  function QM(e2) {
    let t2 = s;
    if (e2 == null) return true;
    if (hk(e2) && (UD(e2) || typeof e2 == `string` || typeof e2.splice == `function` || hO(e2) || nk(e2) || lO(e2))) return !e2[t2(1663)];
    var n2 = Bk(e2);
    if (n2 == YM || n2 == XM) return !e2[t2(693)];
    if (ck(e2)) return !pk(e2).length;
    for (var r2 in e2) if (ZM[t2(1066)](e2, r2)) return false;
    return true;
  }
  M(QM, `isEmpty`);
  var $M = QM;
  function eN(e2, t2, n2, r2) {
    var i2 = -1, a2 = e2 == null ? 0 : e2.length;
    for (r2 && a2 && (n2 = e2[++i2]); ++i2 < a2; ) n2 = t2(n2, e2[i2], i2, e2);
    return n2;
  }
  M(eN, `arrayReduce`);
  var tN = eN;
  function nN(e2, t2, n2, r2, i2) {
    return i2(e2, function(e3, i3, a2) {
      n2 = r2 ? (r2 = false, e3) : t2(n2, e3, i3, a2);
    }), n2;
  }
  M(nN, s(1147));
  var rN = nN;
  function iN(e2, t2, n2) {
    var r2 = UD(e2) ? tN : rN, i2 = arguments.length < 3;
    return r2(e2, aj(t2, 4), n2, i2, dj);
  }
  M(iN, `reduce`);
  var aN = iN;
  function oN(e2, t2) {
    let n2 = {};
    return (r2) => {
      let i2 = r2[X(752)](), a2 = n2[i2];
      return a2 === void 0 ? (a2 = {
        atnStartState: e2,
        decision: t2,
        states: {}
      }, n2[i2] = a2, a2) : a2;
    };
  }
  M(oN, `createDFACache`);
  var sN = (Re = class {
    constructor() {
      this.predicates = [];
    }
    is(e2) {
      return e2 >= this.predicates.length || this.predicates[e2];
    }
    set(e2, t2) {
      this.predicates[e2] = t2;
    }
    toString() {
      let e2 = s, t2 = ``, n2 = this.predicates[e2(1663)];
      for (let e3 = 0; e3 < n2; e3++) t2 += this.predicates[e3] === true ? `1` : `0`;
      return t2;
    }
  }, M(Re, `PredicateSet`), Re), cN = new sN(), lN = (ze = class extends fw {
    constructor(e2) {
      let t2 = s;
      super(), this.logging = (e2 == null ? void 0 : e2.logging) ?? ((e3) => console[t2(413)](e3));
    }
    initialize(e2) {
      let t2 = s;
      this.atn = Fj(e2.rules), this.dfas = dN(this[t2(1092)]);
    }
    validateAmbiguousAlternationAlternatives() {
      return [];
    }
    validateEmptyOrAlternatives() {
      return [];
    }
    buildLookaheadForAlternation(e2) {
      let t2 = s, { prodOccurrence: n2, rule: r2, hasPredicates: i2, dynamicTokensEnabled: a2 } = e2, o2 = this.dfas, c2 = this.logging, l2 = bj(r2, `Alternation`, n2), u2 = this.atn[t2(310)][l2].decision, d2 = hj(rC({
        maxLookahead: 1,
        occurrence: n2,
        prodType: `Alternation`,
        rule: r2
      }), (e3) => hj(e3, (e4) => e4[0]));
      if (uN(d2, false) && !a2) {
        let e3 = aN(d2, (e4, n3, r3) => (JM(n3, (n4) => {
          let i3 = t2;
          n4 && (e4[n4[i3(1142)]] = r3, JM(n4.categoryMatches, (t3) => {
            e4[t3] = r3;
          }));
        }), e4), {});
        return i2 ? function(n3) {
          var _a2;
          let r3 = t2, i3 = e3[this.LA(1).tokenTypeIdx];
          if (n3 !== void 0 && i3 !== void 0) {
            let e4 = (_a2 = n3[i3]) == null ? void 0 : _a2.GATE;
            if (e4 !== void 0 && e4[r3(1066)](this) === false) return;
          }
          return i3;
        } : function() {
          return e3[this.LA(1).tokenTypeIdx];
        };
      } else if (i2) return function(e3) {
        let n3 = t2, r3 = new sN(), i3 = e3 === void 0 ? 0 : e3.length;
        for (let t3 = 0; t3 < i3; t3++) {
          let i4 = e3 == null ? void 0 : e3[t3].GATE;
          r3[n3(389)](t3, i4 === void 0 || i4.call(this));
        }
        let a3 = fN.call(this, o2, u2, r3, c2);
        return typeof a3 == `number` ? a3 : void 0;
      };
      else return function() {
        let e3 = fN[t2(1066)](this, o2, u2, cN, c2);
        return typeof e3 == `number` ? e3 : void 0;
      };
    }
    buildLookaheadForOptional(e2) {
      let { prodOccurrence: t2, rule: n2, prodType: r2, dynamicTokensEnabled: i2 } = e2, a2 = this.dfas, o2 = this.logging, s2 = bj(n2, r2, t2), c2 = this.atn.decisionMap[s2].decision, l2 = hj(rC({
        maxLookahead: 1,
        occurrence: t2,
        prodType: r2,
        rule: n2
      }), (e3) => hj(e3, (e4) => e4[0]));
      if (uN(l2) && l2[0][0] && !i2) {
        let e3 = l2[0], t3 = HM(e3);
        if (t3.length === 1 && $M(t3[0].categoryMatches)) {
          let e4 = t3[0].tokenTypeIdx;
          return function() {
            return this.LA(1).tokenTypeIdx === e4;
          };
        } else {
          let e4 = aN(t3, (e5, t4) => (t4 !== void 0 && (e5[t4.tokenTypeIdx] = true, JM(t4.categoryMatches, (t5) => {
            e5[t5] = true;
          })), e5), {});
          return function() {
            return e4[this.LA(1).tokenTypeIdx] === true;
          };
        }
      }
      return function() {
        let e3 = fN.call(this, a2, c2, cN, o2);
        return typeof e3 == `object` ? false : e3 === 0;
      };
    }
  }, M(ze, `LLStarLookaheadStrategy`), ze);
  function uN(e2, t2 = true) {
    let n2 = s, r2 = /* @__PURE__ */ new Set();
    for (let i2 of e2) {
      let e3 = /* @__PURE__ */ new Set();
      for (let a2 of i2) {
        if (a2 === void 0) {
          if (t2) break;
          return false;
        }
        let i3 = [
          a2[n2(1142)]
        ].concat(a2.categoryMatches);
        for (let t3 of i3) if (r2.has(t3)) {
          if (!e3.has(t3)) return false;
        } else r2.add(t3), e3.add(t3);
      }
    }
    return true;
  }
  M(uN, `isLL1Sequence`);
  function dN(e2) {
    let t2 = s, n2 = e2.decisionStates[t2(1663)], r2 = Array(n2);
    for (let t3 = 0; t3 < n2; t3++) r2[t3] = oN(e2.decisionStates[t3], t3);
    return r2;
  }
  M(dN, `initATNSimulator`);
  function fN(e2, t2, n2, r2) {
    let i2 = e2[t2](n2), a2 = i2.start;
    return a2 === void 0 && (a2 = TN(i2, CN(EN(i2.atnStartState))), i2.start = a2), pN.apply(this, [
      i2,
      a2,
      n2,
      r2
    ]);
  }
  M(fN, `adaptivePredict`);
  function pN(e2, t2, n2, r2) {
    let i2 = t2, a2 = 1, o2 = [], s2 = this.LA(a2++);
    for (; ; ) {
      let t3 = yN(i2, s2);
      if (t3 === void 0 && (t3 = mN.apply(this, [
        e2,
        i2,
        s2,
        a2,
        n2,
        r2
      ])), t3 === aM) return vN(o2, i2, s2);
      if (t3.isAcceptState === true) return t3.prediction;
      i2 = t3, o2.push(s2), s2 = this.LA(a2++);
    }
  }
  M(pN, `performLookahead`);
  function mN(e2, t2, n2, r2, i2, a2) {
    let o2 = s, c2 = bN(t2.configs, n2, i2);
    if (c2.size === 0) return wN(e2, t2, n2, aM), aM;
    let l2 = CN(c2), u2 = SN(c2, i2);
    if (u2 !== void 0) l2.isAcceptState = true, l2.prediction = u2, l2.configs.uniqueAlt = u2;
    else if (jN(c2)) {
      let t3 = pM(c2.alts);
      l2.isAcceptState = true, l2.prediction = t3, l2.configs[o2(883)] = t3, hN[o2(1120)](this, [
        e2,
        r2,
        c2.alts,
        a2
      ]);
    }
    return l2 = wN(e2, t2, n2, l2), l2;
  }
  M(mN, `computeLookaheadTarget`);
  function hN(e2, t2, n2, r2) {
    let i2 = s, a2 = [];
    for (let e3 = 1; e3 <= t2; e3++) a2.push(this.LA(e3).tokenType);
    let o2 = e2.atnStartState, c2 = o2.rule, l2 = o2[i2(804)];
    r2(gN({
      topLevelRule: c2,
      ambiguityIndices: n2,
      production: l2,
      prefixPath: a2
    }));
  }
  M(hN, `reportLookaheadAmbiguity`);
  function gN(e2) {
    let t2 = s, n2 = hj(e2.prefixPath, (e3) => wS(e3))[t2(1655)](`, `), r2 = e2.production[t2(484)] === 0 ? `` : e2.production.idx, i2 = `Ambiguous Alternatives Detected: <` + e2.ambiguityIndices.join(`, `) + `> in <` + _N(e2.production) + r2 + `> inside <` + e2.topLevelRule.name + `> Rule,
<` + n2 + `> may appears as a prefix path in all these alternatives.
`;
    return i2 += `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`, i2;
  }
  M(gN, `buildAmbiguityError`);
  function _N(e2) {
    if (e2 instanceof Fb) return `SUBRULE`;
    if (e2 instanceof Rb) return `OPTION`;
    if (e2 instanceof Ub) return `OR`;
    if (e2 instanceof zb) return `AT_LEAST_ONE`;
    if (e2 instanceof Bb) return `AT_LEAST_ONE_SEP`;
    if (e2 instanceof Hb) return `MANY_SEP`;
    if (e2 instanceof Vb) return `MANY`;
    if (e2 instanceof J) return `CONSUME`;
    throw Error(`non exhaustive match`);
  }
  M(_N, `getProductionDslName`);
  function vN(e2, t2, n2) {
    let r2 = s;
    return {
      actualToken: n2,
      possibleTokenTypes: BM(bM(t2.configs[r2(1297)], (e3) => e3.state.transitions)[r2(322)]((e3) => e3 instanceof Mj).map((e3) => e3.tokenType), (e3) => e3.tokenTypeIdx),
      tokenPath: e2
    };
  }
  M(vN, `buildAdaptivePredictError`);
  function yN(e2, t2) {
    return e2[s(1295)][t2.tokenTypeIdx];
  }
  M(yN, `getExistingTargetState`);
  function bN(e2, t2, n2) {
    let r2 = s, i2 = new oM(), a2 = [];
    for (let o3 of e2.elements) {
      if (n2.is(o3.alt) === false) continue;
      if (o3.state.type === Tj) {
        a2.push(o3);
        continue;
      }
      let e3 = o3.state.transitions.length;
      for (let n3 = 0; n3 < e3; n3++) {
        let e4 = o3.state.transitions[n3], a3 = xN(e4, t2);
        a3 !== void 0 && i2.add({
          state: a3,
          alt: o3[r2(559)],
          stack: o3[r2(1018)]
        });
      }
    }
    let o2;
    if (a2.length === 0 && i2.size === 1 && (o2 = i2), o2 === void 0) {
      o2 = new oM();
      for (let e3 of i2.elements) DN(e3, o2);
    }
    if (a2.length > 0 && !kN(o2)) for (let e3 of a2) o2[r2(974)](e3);
    return o2;
  }
  M(bN, `computeReachSet`);
  function xN(e2, t2) {
    if (e2 instanceof Mj && zS(t2, e2.tokenType)) return e2.target;
  }
  M(xN, `getReachableTarget`);
  function SN(e2, t2) {
    let n2 = s, r2;
    for (let i2 of e2.elements) if (t2.is(i2.alt) === true) {
      if (r2 === void 0) r2 = i2[n2(559)];
      else if (r2 !== i2.alt) return;
    }
    return r2;
  }
  M(SN, `getUniqueAlt`);
  function CN(e2) {
    return {
      configs: e2,
      edges: {},
      isAcceptState: false,
      prediction: -1
    };
  }
  M(CN, `newDFAState`);
  function wN(e2, t2, n2, r2) {
    return r2 = TN(e2, r2), t2.edges[n2.tokenTypeIdx] = r2, r2;
  }
  M(wN, `addDFAEdge`);
  function TN(e2, t2) {
    if (t2 === aM) return t2;
    let n2 = t2.configs.key, r2 = e2.states[n2];
    return r2 === void 0 ? (t2.configs.finalize(), e2.states[n2] = t2, t2) : r2;
  }
  M(TN, `addDFAState`);
  function EN(e2) {
    let t2 = new oM(), n2 = e2.transitions.length;
    for (let r2 = 0; r2 < n2; r2++) DN({
      state: e2.transitions[r2].target,
      alt: r2,
      stack: []
    }, t2);
    return t2;
  }
  M(EN, `computeStartState`);
  function DN(e2, t2) {
    let n2 = s, r2 = e2.state;
    if (r2[n2(1487)] === Tj) {
      if (e2.stack.length > 0) {
        let r3 = [
          ...e2.stack
        ];
        DN({
          state: r3[n2(1315)](),
          alt: e2.alt,
          stack: r3
        }, t2);
      } else t2.add(e2);
      return;
    }
    r2.epsilonOnlyTransitions || t2.add(e2);
    let i2 = r2[n2(680)].length;
    for (let a2 = 0; a2 < i2; a2++) {
      let i3 = r2[n2(680)][a2], o2 = ON(e2, i3);
      o2 !== void 0 && DN(o2, t2);
    }
  }
  M(DN, `closure`);
  function ON(e2, t2) {
    if (t2 instanceof Nj) return {
      state: t2.target,
      alt: e2.alt,
      stack: e2.stack
    };
    if (t2 instanceof Pj) {
      let n2 = [
        ...e2.stack,
        t2.followState
      ];
      return {
        state: t2.target,
        alt: e2.alt,
        stack: n2
      };
    }
  }
  M(ON, `getEpsilonTarget`);
  function kN(e2) {
    for (let t2 of e2.elements) if (t2.state.type === Tj) return true;
    return false;
  }
  M(kN, `hasConfigInRuleStopState`);
  function AN(e2) {
    for (let t2 of e2.elements) if (t2.state.type !== Tj) return false;
    return true;
  }
  M(AN, s(1636));
  function jN(e2) {
    if (AN(e2)) return true;
    let t2 = MN(e2.elements);
    return NN(t2) && !PN(t2);
  }
  M(jN, `hasConflictTerminatingPrediction`);
  function MN(e2) {
    let t2 = /* @__PURE__ */ new Map();
    for (let n2 of e2) {
      let e3 = sM(n2, false), r2 = t2.get(e3);
      r2 === void 0 && (r2 = {}, t2.set(e3, r2)), r2[n2.alt] = true;
    }
    return t2;
  }
  M(MN, `getConflictingAltSets`);
  function NN(e2) {
    let t2 = s;
    for (let n2 of Array[t2(1509)](e2.values())) if (Object.keys(n2).length > 1) return true;
    return false;
  }
  M(NN, s(321));
  function PN(e2) {
    let t2 = s;
    for (let n2 of Array.from(e2.values())) if (Object.keys(n2)[t2(1663)] === 1) return true;
    return false;
  }
  M(PN, `hasStateAssociatedWithOneAlt`), Gr();
  var FN = (Be = class {
    constructor() {
      this.nodeStack = [];
    }
    get [s(306)]() {
      let e2 = s;
      return this.nodeStack[this.nodeStack[e2(1663)] - 1] ?? this.rootNode;
    }
    buildRootNode(e2) {
      return this.rootNode = new BN(e2), this.rootNode.root = this.rootNode, this.nodeStack = [
        this.rootNode
      ], this.rootNode;
    }
    [s(1151)](e2) {
      let t2 = new RN();
      return t2.grammarSource = e2, t2.root = this.rootNode, this.current.content.push(t2), this.nodeStack.push(t2), t2;
    }
    buildLeafNode(e2, t2) {
      let n2 = s, r2 = new LN(e2.startOffset, e2.image.length, gs(e2), e2.tokenType, !t2);
      return r2.grammarSource = t2, r2.root = this.rootNode, this.current.content[n2(1168)](r2), r2;
    }
    [s(567)](e2) {
      let t2 = e2[s(1673)];
      if (t2) {
        let n2 = t2.content.indexOf(e2);
        n2 >= 0 && t2.content.splice(n2, 1);
      }
    }
    addHiddenNodes(e2) {
      let t2 = s, n2 = [];
      for (let r3 of e2) {
        let e3 = new LN(r3.startOffset, r3[t2(621)].length, gs(r3), r3[t2(435)], true);
        e3[t2(1740)] = this[t2(618)], n2.push(e3);
      }
      let r2 = this.current, i2 = false;
      if (r2.content.length > 0) {
        r2[t2(835)].push(...n2);
        return;
      }
      for (; r2.container; ) {
        let e3 = r2.container.content.indexOf(r2);
        if (e3 > 0) {
          r2[t2(1673)].content.splice(e3, 0, ...n2), i2 = true;
          break;
        }
        r2 = r2.container;
      }
      i2 || this.rootNode.content.unshift(...n2);
    }
    construct(e2) {
      let t2 = this.current;
      typeof e2.$type == `string` && !e2.$infix && (this.current.astNode = e2), e2.$cstNode = t2;
      let n2 = this.nodeStack.pop();
      (n2 == null ? void 0 : n2.content.length) === 0 && this.removeNode(n2);
    }
  }, M(Be, `CstNodeBuilder`), Be), IN = (Ve = class {
    get hidden() {
      return false;
    }
    get astNode() {
      var _a2, _b2;
      let e2 = s, t2 = typeof ((_a2 = this[e2(596)]) == null ? void 0 : _a2.$type) == `string` ? this[e2(596)] : (_b2 = this.container) == null ? void 0 : _b2.astNode;
      if (!t2) throw Error(e2(838));
      return t2;
    }
    set astNode(e2) {
      let t2 = s;
      this[t2(596)] = e2;
    }
    get text() {
      return this.root.fullText.substring(this.offset, this.end);
    }
  }, M(Ve, `AbstractCstNode`), Ve), LN = (He = class extends IN {
    get offset() {
      let e2 = s;
      return this[e2(1697)];
    }
    get [s(1663)]() {
      return this._length;
    }
    get end() {
      return this._offset + this._length;
    }
    get hidden() {
      return this._hidden;
    }
    get [s(435)]() {
      let e2 = s;
      return this[e2(1202)];
    }
    get range() {
      return this._range;
    }
    constructor(e2, t2, n2, r2, i2 = false) {
      super(), this._hidden = i2, this._offset = e2, this._tokenType = r2, this._length = t2, this._range = n2;
    }
  }, M(He, `LeafCstNodeImpl`), He), RN = (Ue = class extends IN {
    constructor() {
      super(...arguments), this.content = new zN(this);
    }
    get offset() {
      var _a2;
      return ((_a2 = this.firstNonHiddenNode) == null ? void 0 : _a2.offset) ?? 0;
    }
    get length() {
      let e2 = s;
      return this.end - this[e2(797)];
    }
    get end() {
      var _a2;
      return ((_a2 = this.lastNonHiddenNode) == null ? void 0 : _a2.end) ?? 0;
    }
    get range() {
      let e2 = s, t2 = this.firstNonHiddenNode, n2 = this[e2(420)];
      if (t2 && n2) {
        if (this._rangeCache === void 0) {
          let { range: r2 } = t2, { range: i2 } = n2;
          this._rangeCache = {
            start: r2.start,
            end: i2.end.line < r2.start.line ? r2.start : i2[e2(1488)]
          };
        }
        return this._rangeCache;
      } else return {
        start: P.create(0, 0),
        end: P[e2(1589)](0, 0)
      };
    }
    get firstNonHiddenNode() {
      for (let e2 of this.content) if (!e2.hidden) return e2;
      return this.content[0];
    }
    get lastNonHiddenNode() {
      let e2 = s;
      for (let t2 = this.content[e2(1663)] - 1; t2 >= 0; t2--) {
        let n2 = this.content[t2];
        if (!n2[e2(674)]) return n2;
      }
      return this.content[this[e2(835)].length - 1];
    }
  }, M(Ue, s(1230)), Ue), zN = (We = class e2 extends Array {
    constructor(t2) {
      super(), this.parent = t2, Object.setPrototypeOf(this, e2.prototype);
    }
    push(...e3) {
      return this.addParents(e3), super.push(...e3);
    }
    unshift(...e3) {
      return this.addParents(e3), super.unshift(...e3);
    }
    splice(e3, t2, ...n2) {
      return this.addParents(n2), super.splice(e3, t2, ...n2);
    }
    addParents(e3) {
      let t2 = s;
      for (let n2 of e3) n2[t2(1673)] = this.parent;
    }
  }, M(We, `CstNodeContainer`), We), BN = (Ge = class extends RN {
    get text() {
      let e2 = s;
      return this[e2(1236)].substring(this[e2(797)], this.end);
    }
    get [s(418)]() {
      return this._text;
    }
    constructor(e2) {
      super(), this._text = ``, this._text = e2 ?? ``;
    }
  }, M(Ge, `RootCstNodeImpl`), Ge), VN = /* @__PURE__ */ Symbol(`Datatype`);
  function HN(e2) {
    return e2[s(798)] === VN;
  }
  M(HN, `isDataTypeNode`);
  var UN = `\u200B`, WN = M((e2) => e2.endsWith(UN) ? e2 : e2 + UN, `withRuleSuffix`), GN = (Ke = class {
    constructor(e2) {
      let t2 = s;
      var r2;
      this._unorderedGroups = /* @__PURE__ */ new Map(), this.allRules = /* @__PURE__ */ new Map(), this.lexer = e2.parser.Lexer;
      let i2 = this.lexer.definition, a2 = e2.LanguageMetaData.mode === `production`;
      (r2 = e2.shared.profilers.LangiumProfiler) != null && r2.isActive(`parsing`) ? this[t2(1027)] = new QN(i2, n(n({}, e2.parser.ParserConfig), {}, {
        skipValidations: a2,
        errorMessageProvider: e2.parser[t2(1734)]
      }), e2.shared.profilers.LangiumProfiler.createTask(`parsing`, e2.LanguageMetaData[t2(679)])) : this.wrapper = new ZN(i2, n(n({}, e2.parser.ParserConfig), {}, {
        skipValidations: a2,
        errorMessageProvider: e2.parser.ParserErrorMessageProvider
      }));
    }
    alternatives(e2, t2) {
      let n2 = s;
      this.wrapper[n2(1127)](e2, t2);
    }
    optional(e2, t2) {
      this.wrapper.wrapOption(e2, t2);
    }
    many(e2, t2) {
      let n2 = s;
      this[n2(1027)].wrapMany(e2, t2);
    }
    atLeastOne(e2, t2) {
      this.wrapper.wrapAtLeastOne(e2, t2);
    }
    [s(1699)](e2) {
      return this.allRules.get(e2);
    }
    [s(1275)]() {
      return this.wrapper.IS_RECORDING;
    }
    get unorderedGroups() {
      return this._unorderedGroups;
    }
    [s(990)]() {
      let e2 = s;
      return this[e2(1027)].RULE_STACK;
    }
    [s(1774)]() {
      this.wrapper.wrapSelfAnalysis();
    }
  }, M(Ke, `AbstractLangiumParser`), Ke), KN = (qe = class extends GN {
    get current() {
      return this.stack[this.stack.length - 1];
    }
    constructor(e2) {
      let t2 = s;
      super(e2), this.nodeBuilder = new FN(), this.stack = [], this.assignmentMap = /* @__PURE__ */ new Map(), this.operatorPrecedence = /* @__PURE__ */ new Map(), this.linker = e2[t2(1658)].Linker, this.converter = e2.parser.ValueConverter, this.astReflection = e2.shared[t2(1526)];
    }
    [s(497)](e2, t2) {
      let n2 = s, r2 = this.computeRuleType(e2), i2;
      ro(e2) && (i2 = e2.name, this.registerPrecedenceMap(e2));
      let a2 = this.wrapper.DEFINE_RULE(WN(e2.name), this.startImplementation(r2, i2, t2)[n2(1704)](this));
      return this.allRules.set(e2.name, a2), Eo(e2) && e2.entry && (this.mainRule = a2), a2;
    }
    registerPrecedenceMap(e2) {
      let t2 = s, n2 = e2.name, r2 = /* @__PURE__ */ new Map();
      for (let n3 = 0; n3 < e2.operators.precedences.length; n3++) {
        let i2 = e2.operators.precedences[n3];
        for (let e3 of i2.operators) r2[t2(389)](e3.value, {
          precedence: n3,
          rightAssoc: i2.associativity === t2(1134)
        });
      }
      this.operatorPrecedence.set(n2, r2);
    }
    computeRuleType(e2) {
      return ro(e2) ? Pc(e2) : e2.fragment ? void 0 : kc(e2) ? VN : Pc(e2);
    }
    parse(e2, t2 = {}) {
      let n2 = s;
      this[n2(967)].buildRootNode(e2);
      let r2 = this.lexerResult = this[n2(1761)].tokenize(e2);
      this.wrapper.input = r2.tokens;
      let i2 = t2[n2(497)] ? this.allRules.get(t2.rule) : this.mainRule;
      if (!i2) throw Error(t2.rule ? `No rule found with name '` + t2.rule + `'` : `No main rule available.`);
      let a2 = this.doParse(i2);
      return this.nodeBuilder.addHiddenNodes(r2.hidden), this.unorderedGroups.clear(), this.lexerResult = void 0, ea(a2, {
        deep: true
      }), {
        value: a2,
        lexerErrors: r2.errors,
        lexerReport: r2.report,
        parserErrors: this[n2(1027)].errors
      };
    }
    doParse(e2) {
      let t2 = s, n2 = this.wrapper.rule(e2);
      if (this.stack.length > 0 && (n2 = this.construct()), n2 === void 0) throw Error(t2(1065));
      if (this.stack.length > 0) throw Error(`Parser stack is not empty after parsing`);
      return n2;
    }
    startImplementation(e2, t2, n2) {
      return (r2) => {
        let i2 = !this.isRecording() && e2 !== void 0;
        if (i2) {
          let n3 = {
            $type: e2
          };
          this.stack.push(n3), e2 === VN ? n3.value = `` : t2 !== void 0 && (n3.$infixName = t2);
        }
        return n2(r2), i2 ? this.construct() : void 0;
      };
    }
    extractHiddenTokens(e2) {
      let t2 = s, n2 = this[t2(927)].hidden;
      if (!n2.length) return [];
      let r2 = e2.startOffset;
      for (let e3 = 0; e3 < n2.length; e3++) if (n2[e3].startOffset > r2) return n2.splice(0, e3);
      return n2.splice(0, n2.length);
    }
    [s(1248)](e2, t2, n2) {
      let r2 = s, i2 = this.wrapper.wrapConsume(e2, t2);
      if (!this.isRecording() && this[r2(1759)](i2)) {
        let e3 = this.extractHiddenTokens(i2);
        this.nodeBuilder.addHiddenNodes(e3);
        let t3 = this.nodeBuilder.buildLeafNode(i2, n2), { assignment: r3, crossRef: a2 } = this.getAssignment(n2), o2 = this.current;
        if (r3) {
          let e4 = fo(n2) ? i2.image : this.converter.convert(i2.image, t3);
          this.assign(r3.operator, r3.feature, e4, t3, a2);
        } else if (HN(o2)) {
          let e4 = i2.image;
          fo(n2) || (e4 = this.converter.convert(e4, t3).toString()), o2.value += e4;
        }
      }
    }
    isValidToken(e2) {
      let t2 = s;
      return !e2[t2(490)] && !isNaN(e2[t2(1028)]) && typeof e2[t2(1698)] == `number` && !isNaN(e2.endOffset);
    }
    subrule(e2, t2, n2, r2, i2) {
      let a2 = s, o2;
      !this.isRecording() && !n2 && (o2 = this[a2(967)].buildCompositeNode(r2));
      let c2;
      try {
        c2 = this[a2(1027)][a2(1728)](e2, t2, i2);
      } finally {
        this.isRecording() || (c2 === void 0 && !n2 && (c2 = this.construct()), c2 !== void 0 && o2 && o2.length > 0 && this.performSubruleAssignment(c2, r2, o2));
      }
    }
    performSubruleAssignment(e2, t2, n2) {
      let r2 = s, { assignment: i2, crossRef: a2 } = this.getAssignment(t2);
      if (i2) this.assign(i2.operator, i2[r2(729)], e2, n2, a2);
      else if (!i2) {
        let t3 = this.current;
        if (HN(t3)) t3[r2(1371)] += e2.toString();
        else if (typeof e2 == `object` && e2) {
          let n3 = this.assignWithoutOverride(e2, t3);
          this.stack.pop(), this.stack.push(n3);
        }
      }
    }
    action(e2, t2) {
      let n2 = s;
      if (!this.isRecording()) {
        let r2 = this[n2(306)];
        if (t2[n2(729)] && t2.operator) {
          r2 = this[n2(776)](), this[n2(967)][n2(567)](r2.$cstNode), this.nodeBuilder[n2(1151)](t2).content.push(r2.$cstNode);
          let i2 = {
            $type: e2
          };
          this.stack.push(i2), this.assign(t2.operator, t2[n2(729)], r2, r2.$cstNode);
        } else r2.$type = e2;
      }
    }
    construct() {
      let e2 = s;
      if (this.isRecording()) return;
      let t2 = this.stack.pop();
      return this.nodeBuilder.construct(t2), `$infixName` in t2 ? this.constructInfix(t2, this.operatorPrecedence.get(t2.$infixName)) : HN(t2) ? this[e2(384)][e2(1183)](t2.value, t2[e2(1115)]) : (da(this.astReflection, t2), t2);
    }
    constructInfix(e2, t2) {
      let n2 = s, r2 = e2.parts;
      if (!Array.isArray(r2) || r2.length === 0) return;
      let i2 = e2.operators;
      if (!Array.isArray(i2) || r2.length < 2) return r2[0];
      let a2 = 0, o2 = -1;
      for (let e3 = 0; e3 < i2.length; e3++) {
        let n3 = i2[e3], r3 = t2.get(n3) ?? {
          precedence: 1 / 0,
          rightAssoc: false
        };
        r3.precedence > o2 ? (o2 = r3.precedence, a2 = e3) : r3.precedence === o2 && (r3.rightAssoc || (a2 = e3));
      }
      let c2 = i2.slice(0, a2), l2 = i2[n2(1656)](a2 + 1), u2 = r2.slice(0, a2 + 1), d2 = r2.slice(a2 + 1), f2 = {
        $infixName: e2.$infixName,
        $type: e2.$type,
        $cstNode: e2.$cstNode,
        parts: u2,
        operators: c2
      }, p2 = {
        $infixName: e2.$infixName,
        $type: e2.$type,
        $cstNode: e2.$cstNode,
        parts: d2,
        operators: l2
      }, m2 = this[n2(546)](f2, t2), h2 = this.constructInfix(p2, t2);
      return {
        $type: e2[n2(798)],
        $cstNode: e2.$cstNode,
        left: m2,
        operator: i2[a2],
        right: h2
      };
    }
    getAssignment(e2) {
      let t2 = s;
      if (!this[t2(1451)][t2(714)](e2)) {
        let n2 = ta(e2, Na);
        this.assignmentMap.set(e2, {
          assignment: n2,
          crossRef: n2 && Ua(n2[t2(834)]) ? n2.terminal.isMulti ? `multi` : `single` : void 0
        });
      }
      return this.assignmentMap.get(e2);
    }
    assign(e2, t2, n2, r2, i2) {
      let a2 = s, o2 = this[a2(306)], c2;
      switch (c2 = i2 === `single` && typeof n2 == `string` ? this.linker[a2(1675)](o2, t2, r2, n2) : i2 === `multi` && typeof n2 == `string` ? this.linker.buildMultiReference(o2, t2, r2, n2) : n2, e2) {
        case `=`:
          o2[t2] = c2;
          break;
        case `?=`:
          o2[t2] = true;
          break;
        case `+=`:
          Array.isArray(o2[t2]) || (o2[t2] = []), o2[t2].push(c2);
      }
    }
    [s(549)](e2, t2) {
      let n2 = s;
      for (let [r3, i2] of Object.entries(t2)) {
        let t3 = e2[r3];
        t3 === void 0 ? e2[r3] = i2 : Array[n2(1426)](t3) && Array.isArray(i2) && (i2.push(...t3), e2[r3] = i2);
      }
      let r2 = e2.$cstNode;
      return r2 && (r2[n2(688)] = void 0, e2.$cstNode = void 0), e2;
    }
    get definitionErrors() {
      return this.wrapper.definitionErrors;
    }
  }, M(qe, `LangiumParser`), qe), qN = (Je = class {
    [s(945)](e2) {
      return BS.buildMismatchTokenMessage(e2);
    }
    buildNotAllInputParsedMessage(e2) {
      return BS.buildNotAllInputParsedMessage(e2);
    }
    buildNoViableAltMessage(e2) {
      return BS.buildNoViableAltMessage(e2);
    }
    [s(1514)](e2) {
      return BS[s(1514)](e2);
    }
  }, M(Je, `AbstractParserErrorMessageProvider`), Je), JN = (Ye = class extends qN {
    [s(945)]({ expected: e2, actual: t2 }) {
      let n2 = s;
      return n2(291) + (e2[n2(948)] ? "`" + e2.LABEL + "`" : e2.name.endsWith(`:KW`) ? `keyword '` + e2.name.substring(0, e2.name.length - 3) + `'` : `token of type '` + e2.name + `'`) + " but found `" + t2.image + "`.";
    }
    buildNotAllInputParsedMessage({ firstRedundant: e2 }) {
      return s(477) + e2.image + "`.";
    }
  }, M(Ye, `LangiumParserErrorMessageProvider`), Ye), YN = (Xe = class extends GN {
    constructor() {
      let e2 = s;
      super(...arguments), this[e2(926)] = [], this.elementStack = [], this.lastElementStack = [], this.nextTokenIndex = 0, this.stackSize = 0;
    }
    action() {
    }
    construct() {
    }
    [s(1343)](e2) {
      let t2 = s;
      this.resetState();
      let n2 = this.lexer.tokenize(e2, {
        mode: `partial`
      });
      return this.tokens = n2.tokens, this.wrapper.input = [
        ...this.tokens
      ], this.mainRule.call(this.wrapper, {}), this.unorderedGroups.clear(), {
        tokens: this.tokens,
        elementStack: [
          ...this[t2(900)]
        ],
        tokenIndex: this.nextTokenIndex
      };
    }
    rule(e2, t2) {
      let n2 = s, r2 = this.wrapper.DEFINE_RULE(WN(e2.name), this.startImplementation(t2)[n2(1704)](this));
      return this.allRules.set(e2.name, r2), e2.entry && (this[n2(792)] = r2), r2;
    }
    resetState() {
      this.elementStack = [], this.lastElementStack = [], this.nextTokenIndex = 0, this.stackSize = 0;
    }
    startImplementation(e2) {
      return (t2) => {
        let n2 = this.keepStackSize();
        try {
          e2(t2);
        } finally {
          this.resetStackSize(n2);
        }
      };
    }
    removeUnexpectedElements() {
      let e2 = s;
      this.elementStack[e2(939)](this.stackSize);
    }
    keepStackSize() {
      let e2 = s, t2 = this[e2(508)].length;
      return this.stackSize = t2, t2;
    }
    [s(1789)](e2) {
      this.removeUnexpectedElements(), this.stackSize = e2;
    }
    consume(e2, t2, n2) {
      let r2 = s;
      this.wrapper[r2(1637)](e2, t2), this.isRecording() || (this.lastElementStack = [
        ...this.elementStack,
        n2
      ], this.nextTokenIndex = this.currIdx + 1);
    }
    subrule(e2, t2, n2, r2, i2) {
      let a2 = s;
      this[a2(760)](r2), this[a2(1027)][a2(1728)](e2, t2, i2), this.after(r2);
    }
    [s(760)](e2) {
      let t2 = s;
      this[t2(1275)]() || this.elementStack[t2(1168)](e2);
    }
    after(e2) {
      let t2 = s;
      if (!this[t2(1275)]()) {
        let n2 = this[t2(508)].lastIndexOf(e2);
        n2 >= 0 && this.elementStack.splice(n2);
      }
    }
    get currIdx() {
      let e2 = s;
      return this.wrapper[e2(706)];
    }
  }, M(Xe, `LangiumCompletionParser`), Xe), XN = {
    recoveryEnabled: true,
    nodeLocationTracking: `full`,
    skipValidations: true,
    errorMessageProvider: new JN()
  }, ZN = (Ze = class extends $w {
    constructor(e2, t2) {
      let r2 = t2 && `maxLookahead` in t2;
      super(e2, n(n({}, XN), {}, {
        lookaheadStrategy: r2 ? new fw({
          maxLookahead: t2.maxLookahead
        }) : new lN({
          logging: t2.skipValidations ? () => {
          } : void 0
        })
      }, t2));
    }
    get IS_RECORDING() {
      return this.RECORDING_PHASE;
    }
    [s(307)](e2, t2, n2) {
      let r2 = s;
      return this[r2(996)](e2, t2, n2);
    }
    wrapSelfAnalysis() {
      let e2 = s;
      this[e2(1126)]();
    }
    [s(1637)](e2, t2) {
      return this.consume(e2, t2, void 0);
    }
    wrapSubrule(e2, t2, n2) {
      return this.subrule(e2, t2, {
        ARGS: [
          n2
        ]
      });
    }
    wrapOr(e2, t2) {
      this.or(e2, t2);
    }
    wrapOption(e2, t2) {
      this.option(e2, t2);
    }
    wrapMany(e2, t2) {
      this.many(e2, t2);
    }
    wrapAtLeastOne(e2, t2) {
      this.atLeastOne(e2, t2);
    }
    rule(e2) {
      return e2.call(this, {});
    }
  }, M(Ze, `ChevrotainWrapper`), Ze), QN = (Qe = class extends ZN {
    constructor(e2, t2, n2) {
      let r2 = s;
      super(e2, t2), this[r2(1531)] = n2;
    }
    rule(e2) {
      let t2 = s;
      this.task[t2(1433)](), this.task.startSubTask(this.ruleName(e2));
      try {
        return super.rule(e2);
      } finally {
        this.task.stopSubTask(this.ruleName(e2)), this.task.stop();
      }
    }
    ruleName(e2) {
      return e2.ruleName;
    }
    subrule(e2, t2, n2) {
      this.task.startSubTask(this.ruleName(t2));
      try {
        return super.subrule(e2, t2, n2);
      } finally {
        this.task.stopSubTask(this.ruleName(t2));
      }
    }
  }, M(Qe, `ProfilerWrapper`), Qe);
  function $N(e2, t2, n2) {
    return eP({
      parser: t2,
      tokens: n2,
      ruleNames: /* @__PURE__ */ new Map()
    }, e2), t2;
  }
  M($N, `createParser`);
  function eP(e2, t2) {
    let r2 = dc(t2, false), i2 = R(t2.rules).filter(Eo).filter((e3) => r2.has(e3));
    for (let t3 of i2) {
      let r3 = n(n({}, e2), {}, {
        consume: 1,
        optional: 1,
        subrule: 1,
        many: 1,
        or: 1
      });
      e2.parser.rule(t3, nP(r3, t3.definition));
    }
    let a2 = R(t2.rules).filter(ro).filter((e3) => r2.has(e3));
    for (let t3 of a2) e2.parser.rule(t3, tP(e2, t3));
  }
  M(eP, s(346));
  function tP(e2, t2) {
    let r2 = s, i2 = t2.call.rule[r2(289)];
    if (!i2) throw Error(`Could not resolve reference to infix operator rule: ` + t2.call.rule.$refText);
    if (Ko(i2)) throw Error(`Cannot use terminal rule in infix expression`);
    let a2 = t2.operators.precedences.flatMap((e3) => e3[r2(1401)]), o2 = {
      $type: `Group`,
      elements: []
    }, c2 = {
      $container: o2,
      $type: `Assignment`,
      feature: `parts`,
      operator: `+=`,
      terminal: t2.call
    }, l2 = {
      $container: o2,
      $type: `Group`,
      elements: [],
      cardinality: `*`
    };
    o2.elements.push(c2, l2);
    let u2 = {
      $container: l2,
      $type: `Assignment`,
      feature: `operators`,
      operator: `+=`,
      terminal: {
        $type: `Alternatives`,
        elements: a2
      }
    }, d2 = n(n({}, c2), {}, {
      $container: l2
    });
    l2.elements.push(u2, d2);
    let f2 = a2.map((t3) => e2.tokens[t3[r2(1371)]]).map((t3, n2) => ({
      ALT: M(() => e2.parser.consume(n2, t3, u2), `ALT`)
    })), p2;
    return (t3) => {
      let n2 = r2;
      p2 ?? (p2 = mP(e2, i2)), e2.parser.subrule(0, p2, false, c2, t3), e2[n2(908)].many(0, {
        DEF: M(() => {
          let r3 = n2;
          e2[r3(908)].alternatives(0, f2), e2[r3(908)].subrule(1, p2, false, d2, t3);
        }, `DEF`)
      });
    };
  }
  M(tP, `buildInfixRule`);
  function nP(e2, t2, n2 = false) {
    let r2 = s, i2;
    if (fo(t2)) i2 = fP(e2, t2);
    else if (Ta(t2)) i2 = rP(e2, t2);
    else if (Na(t2)) i2 = nP(e2, t2[r2(834)]);
    else if (Ua(t2)) i2 = dP(e2, t2);
    else if (Po(t2)) i2 = iP(e2, t2);
    else if (Da(t2)) i2 = sP(e2, t2);
    else if (is(t2)) i2 = cP(e2, t2);
    else if ($a(t2)) i2 = lP(e2, t2);
    else if (qa(t2)) {
      let n3 = e2.consume++;
      i2 = M(() => e2.parser.consume(n3, LS, t2), `method`);
    } else throw new Is(t2.$cstNode, `Unexpected element type: ` + t2.$type);
    return pP(e2, n2 ? void 0 : uP(t2), i2, t2.cardinality);
  }
  M(nP, `buildElement`);
  function rP(e2, t2) {
    let n2 = s, r2 = Pc(t2);
    return () => e2.parser[n2(1354)](r2, t2);
  }
  M(rP, `buildAction`);
  function iP(e2, t2) {
    let n2 = s, r2 = t2.rule.ref;
    if (ya(r2)) {
      let n3 = e2.subrule++, i2 = Eo(r2) && r2.fragment, a2 = t2.arguments.length > 0 ? aP(r2, t2.arguments) : () => ({}), o2;
      return (s2) => {
        let c2 = X;
        o2 ?? (o2 = mP(e2, r2)), e2.parser[c2(1458)](n3, o2, i2, t2, a2(s2));
      };
    } else if (Ko(r2)) {
      let i2 = e2[n2(1248)]++, a2 = gP(e2, r2.name);
      return () => e2.parser.consume(i2, a2, t2);
    } else if (r2) Ls(r2);
    else throw new Is(t2.$cstNode, `Undefined rule: ` + t2.rule.$refText);
  }
  M(iP, `buildRuleCall`);
  function aP(e2, t2) {
    let n2 = s;
    if (t2[n2(867)]((e3) => e3.calledByName)) {
      let e3 = t2.map((e4) => {
        var t3;
        return {
          parameterName: (t3 = e4.parameter) == null || (t3 = t3.ref) == null ? void 0 : t3.name,
          predicate: oP(e4.value)
        };
      });
      return (t3) => {
        let n3 = {};
        for (let { parameterName: r2, predicate: i2 } of e3) r2 && (n3[r2] = i2(t3));
        return n3;
      };
    } else {
      let r2 = t2.map((e3) => oP(e3[n2(1371)]));
      return (t3) => {
        let n3 = {};
        for (let i2 = 0; i2 < r2.length; i2++) if (i2 < e2.parameters.length) {
          let a2 = e2.parameters[i2].name, o2 = r2[i2];
          n3[a2] = o2(t3);
        }
        return n3;
      };
    }
  }
  M(aP, `buildRuleCallPredicate`);
  function oP(e2) {
    let t2 = s;
    if (Ga(e2)) {
      let n2 = oP(e2[t2(347)]), r2 = oP(e2.right);
      return (e3) => n2(e3) || r2(e3);
    } else if (Va(e2)) {
      let n2 = oP(e2[t2(347)]), r2 = oP(e2.right);
      return (e3) => n2(e3) && r2(e3);
    } else if (vo(e2)) {
      let t3 = oP(e2.value);
      return (e3) => !t3(e3);
    } else if (wo(e2)) {
      let n2 = e2[t2(1615)].ref[t2(747)];
      return (e3) => e3 !== void 0 && e3[n2] === true;
    } else if (Fa(e2)) {
      let t3 = !!e2.true;
      return () => t3;
    }
    Ls(e2);
  }
  M(oP, `buildPredicate`);
  function sP(e2, t2) {
    let n2 = s;
    if (t2[n2(1297)].length === 1) return nP(e2, t2.elements[0]);
    {
      let r2 = [];
      for (let i3 of t2[n2(1297)]) {
        let t3 = {
          ALT: nP(e2, i3, true)
        }, n3 = uP(i3);
        n3 && (t3.GATE = oP(n3)), r2.push(t3);
      }
      let i2 = e2.or++;
      return (t3) => e2.parser.alternatives(i2, r2.map((e3) => {
        let r3 = n2, i3 = {
          ALT: M(() => e3[r3(387)](t3), `ALT`)
        }, a2 = e3.GATE;
        return a2 && (i3.GATE = () => a2(t3)), i3;
      }));
    }
  }
  M(sP, `buildAlternatives`);
  function cP(e2, t2) {
    let n2 = s;
    if (t2.elements.length === 1) return nP(e2, t2.elements[0]);
    let r2 = [];
    for (let n3 of t2.elements) {
      let t3 = {
        ALT: nP(e2, n3, true)
      }, i3 = uP(n3);
      i3 && (t3.GATE = oP(i3)), r2.push(t3);
    }
    let i2 = e2.or++, a2 = M((e3, t3) => `uGroup_` + e3 + `_` + t3.getRuleStack().join(`-`), `idFunc`), o2 = M((t3) => e2.parser[n2(1237)](i2, r2[n2(311)]((r3, o3) => {
      let s2 = n2, c3 = {
        ALT: M(() => true, `ALT`)
      }, l2 = e2[s2(908)];
      c3.ALT = () => {
        let e3 = s2;
        if (r3.ALT(t3), !l2.isRecording()) {
          let t4 = a2(i2, l2);
          l2.unorderedGroups.get(t4) || l2.unorderedGroups.set(t4, []);
          let n3 = l2.unorderedGroups[e3(1419)](t4);
          (n3 == null ? void 0 : n3[o3]) === void 0 && (n3[o3] = true);
        }
      };
      let u2 = r3[s2(890)];
      return u2 ? c3.GATE = () => u2(t3) : c3[s2(890)] = () => {
        let e3 = l2.unorderedGroups.get(a2(i2, l2));
        return !(e3 != null && e3[o3]);
      }, c3;
    })), `alternatives`), c2 = pP(e2, uP(t2), o2, `*`);
    return (t3) => {
      let r3 = n2;
      c2(t3), e2.parser.isRecording() || e2.parser.unorderedGroups[r3(565)](a2(i2, e2.parser));
    };
  }
  M(cP, `buildUnorderedGroup`);
  function lP(e2, t2) {
    let n2 = t2[s(1297)].map((t3) => nP(e2, t3));
    return (e3) => n2.forEach((t3) => t3(e3));
  }
  M(lP, s(1312));
  function uP(e2) {
    if ($a(e2)) return e2.guardCondition;
  }
  M(uP, `getGuardCondition`);
  function dP(e2, t2, n2 = t2.terminal) {
    var _a2;
    let r2 = s;
    if (!n2) {
      if (!t2.type[r2(289)]) throw Error(r2(1281) + t2.type.$refText);
      let n3 = (_a2 = Cc(t2.type.ref)) == null ? void 0 : _a2.terminal;
      if (!n3) throw Error(`Could not find name assignment for type: ` + Pc(t2.type.ref));
      return dP(e2, t2, n3);
    } else if (Po(n2) && Eo(n2.rule[r2(289)])) {
      let i2 = n2.rule[r2(289)], a2 = e2.subrule++, o2;
      return (n3) => {
        let s2 = r2;
        o2 ?? (o2 = mP(e2, i2)), e2[s2(908)].subrule(a2, o2, false, t2, n3);
      };
    } else if (Po(n2) && Ko(n2.rule.ref)) {
      let i2 = e2.consume++, a2 = gP(e2, n2.rule.ref.name);
      return () => e2.parser[r2(1248)](i2, a2, t2);
    } else if (fo(n2)) {
      let i2 = e2.consume++, a2 = gP(e2, n2.value);
      return () => e2[r2(908)].consume(i2, a2, t2);
    } else throw Error(`Could not build cross reference parser`);
  }
  M(dP, s(632));
  function fP(e2, t2) {
    let n2 = s, r2 = e2[n2(1248)]++, i2 = e2[n2(926)][t2.value];
    if (!i2) throw Error(`Could not find token for keyword: ` + t2.value);
    return () => e2.parser[n2(1248)](r2, i2, t2);
  }
  M(fP, s(591));
  function pP(e2, t2, n2, r2) {
    let i2 = s, a2 = t2 && oP(t2);
    if (!r2) if (a2) {
      let t3 = e2.or++;
      return (r3) => e2.parser[i2(1237)](t3, [
        {
          ALT: M(() => n2(r3), `ALT`),
          GATE: M(() => a2(r3), `GATE`)
        },
        {
          ALT: Zw(),
          GATE: M(() => !a2(r3), `GATE`)
        }
      ]);
    } else return n2;
    if (r2 === `*`) {
      let t3 = e2.many++;
      return (r3) => e2.parser.many(t3, {
        DEF: M(() => n2(r3), i2(568)),
        GATE: a2 ? () => a2(r3) : void 0
      });
    } else if (r2 === `+`) {
      let t3 = e2.many++;
      if (a2) {
        let r3 = e2.or++;
        return (i3) => e2.parser.alternatives(r3, [
          {
            ALT: M(() => e2.parser.atLeastOne(t3, {
              DEF: M(() => n2(i3), `DEF`)
            }), `ALT`),
            GATE: M(() => a2(i3), `GATE`)
          },
          {
            ALT: Zw(),
            GATE: M(() => !a2(i3), `GATE`)
          }
        ]);
      } else return (r3) => e2.parser.atLeastOne(t3, {
        DEF: M(() => n2(r3), `DEF`)
      });
    } else if (r2 === `?`) {
      let t3 = e2.optional++;
      return (r3) => e2[i2(908)].optional(t3, {
        DEF: M(() => n2(r3), `DEF`),
        GATE: a2 ? () => a2(r3) : void 0
      });
    } else Ls(r2);
  }
  M(pP, s(651));
  function mP(e2, t2) {
    let n2 = hP(e2, t2), r2 = e2.parser.getRule(n2);
    if (!r2) throw Error(`Rule "` + n2 + `" not found."`);
    return r2;
  }
  M(mP, `getRule`);
  function hP(e2, t2) {
    let n2 = s;
    if (ya(t2)) return t2[n2(747)];
    if (e2.ruleNames.has(t2)) return e2[n2(1170)].get(t2);
    {
      let n3 = t2, r2 = n3.$container, i2 = t2.$type;
      for (; !Eo(r2); ) ($a(r2) || Da(r2) || is(r2)) && (i2 = r2.elements.indexOf(n3).toString() + `:` + i2), n3 = r2, r2 = r2.$container;
      return i2 = r2.name + `:` + i2, e2.ruleNames.set(t2, i2), i2;
    }
  }
  M(hP, `getRuleName`);
  function gP(e2, t2) {
    let n2 = s, r2 = e2[n2(926)][t2];
    if (!r2) throw Error(n2(599) + t2 + `" not found."`);
    return r2;
  }
  M(gP, s(288));
  function _P(e2) {
    let t2 = s, n2 = e2.Grammar, r2 = e2[t2(908)].Lexer, i2 = new YN(e2);
    return $N(n2, i2, r2[t2(957)]), i2.finalize(), i2;
  }
  M(_P, `createCompletionParser`);
  function vP(e2) {
    let t2 = yP(e2);
    return t2.finalize(), t2;
  }
  M(vP, `createLangiumParser`);
  function yP(e2) {
    let t2 = e2.Grammar, n2 = e2.parser.Lexer;
    return $N(t2, new KN(e2), n2.definition);
  }
  M(yP, `prepareLangiumParser`);
  var bP = ($e = class {
    constructor() {
      this.diagnostics = [];
    }
    buildTokens(e2, t2) {
      let n2 = s, r2 = R(dc(e2, false)), i2 = this.buildTerminalTokens(r2), a2 = this[n2(1114)](r2, i2, t2);
      return a2.push(...i2), a2;
    }
    flushLexingReport(e2) {
      let t2 = s;
      return {
        diagnostics: this[t2(275)]()
      };
    }
    popDiagnostics() {
      let e2 = s, t2 = [
        ...this[e2(1601)]
      ];
      return this.diagnostics = [], t2;
    }
    buildTerminalTokens(e2) {
      let t2 = s;
      return e2.filter(Ko)[t2(322)]((e3) => !e3[t2(550)]).map((e3) => this.buildTerminalToken(e3))[t2(612)]();
    }
    buildTerminalToken(e2) {
      let t2 = s, n2 = Rc(e2), r2 = this.requiresCustomPattern(n2) ? this.regexPatternFunction(n2) : n2, i2 = {
        name: e2.name,
        PATTERN: r2
      };
      return typeof r2 == t2(386) && (i2.LINE_BREAKS = true), e2[t2(674)] && (i2[t2(675)] = ac(n2) ? CS.SKIPPED : t2(674)), i2;
    }
    [s(919)](e2) {
      let t2 = s;
      return !!(e2.flags[t2(872)](`u`) || e2.flags.includes(`s`));
    }
    regexPatternFunction(e2) {
      let t2 = s, n2 = new RegExp(e2, e2.flags + `y`);
      return (e3, r2) => (n2.lastIndex = r2, n2[t2(871)](e3));
    }
    buildKeywordTokens(e2, t2, n2) {
      let r2 = s;
      return e2.filter(ya).flatMap((e3) => sa(e3).filter(fo)).distinct((e3) => e3[r2(1371)]).toArray().sort((e3, t3) => t3.value.length - e3[r2(1371)][r2(1663)])[r2(311)]((e3) => this.buildKeywordToken(e3, t2, !!(n2 != null && n2.caseInsensitive)));
    }
    buildKeywordToken(e2, t2, n2) {
      let r2 = this.buildKeywordPattern(e2, n2), i2 = {
        name: e2.value,
        PATTERN: r2,
        LONGER_ALT: this.findLongerAlt(e2, t2)
      };
      return typeof r2 == `function` && (i2.LINE_BREAKS = true), i2;
    }
    [s(1273)](e2, t2) {
      return t2 ? new RegExp(oc(e2.value), `i`) : e2.value;
    }
    findLongerAlt(e2, t2) {
      return t2.reduce((t3, n2) => {
        let r2 = n2 == null ? void 0 : n2.PATTERN;
        return r2 != null && r2.source && sc(`^` + r2.source + `$`, e2.value) && t3.push(n2), t3;
      }, []);
    }
  }, M($e, `DefaultTokenBuilder`), $e), xP = (et = class {
    convert(e2, t2) {
      let n2 = s, r2 = t2[n2(696)];
      if (Ua(r2) && (r2 = mc(r2)), Po(r2)) {
        let i2 = r2[n2(497)].ref;
        if (!i2) throw Error(n2(969));
        return this.runConverter(i2, e2, t2);
      }
      return e2;
    }
    [s(1745)](e2, t2, n2) {
      var _a2;
      let r2 = s;
      switch (e2[r2(747)].toUpperCase()) {
        case `INT`:
          return SP.convertInt(t2);
        case `STRING`:
          return SP.convertString(t2);
        case `ID`:
          return SP.convertID(t2);
      }
      switch ((_a2 = Lc(e2)) == null ? void 0 : _a2.toLowerCase()) {
        case `number`:
          return SP.convertNumber(t2);
        case `boolean`:
          return SP.convertBoolean(t2);
        case r2(573):
          return SP.convertBigint(t2);
        case `date`:
          return SP.convertDate(t2);
        default:
          return t2;
      }
    }
  }, M(et, `DefaultValueConverter`), et), SP;
  (function(e2) {
    let t2 = s;
    function n2(e3) {
      let t3 = ``;
      for (let n3 = 1; n3 < e3.length - 1; n3++) {
        let i3 = e3.charAt(n3);
        if (i3 === `\\`) {
          let i4 = e3.charAt(++n3);
          t3 += r2(i4);
        } else t3 += i3;
      }
      return t3;
    }
    M(n2, t2(519)), e2.convertString = n2;
    function r2(e3) {
      switch (e3) {
        case `b`:
          return `\b`;
        case `f`:
          return `\f`;
        case `n`:
          return `
`;
        case `r`:
          return `\r`;
        case `t`:
          return `	`;
        case `v`:
          return `\v`;
        case `0`:
          return `\0`;
        default:
          return e3;
      }
    }
    M(r2, `convertEscapeCharacter`);
    function i2(e3) {
      return e3.charAt(0) === `^` ? e3.substring(1) : e3;
    }
    M(i2, `convertID`), e2.convertID = i2;
    function a2(e3) {
      return parseInt(e3);
    }
    M(a2, `convertInt`), e2[t2(283)] = a2;
    function o2(e3) {
      return BigInt(e3);
    }
    M(o2, t2(720)), e2.convertBigint = o2;
    function c2(e3) {
      return new Date(e3);
    }
    M(c2, t2(542)), e2.convertDate = c2;
    function l2(e3) {
      return Number(e3);
    }
    M(l2, `convertNumber`), e2.convertNumber = l2;
    function u2(e3) {
      return e3.toLowerCase() === `true`;
    }
    M(u2, t2(735)), e2.convertBoolean = u2;
  })(SP || (SP = {}));
  var Z = {};
  pn(Z, mn(Yr(), 1));
  function CP() {
    return new Promise((e2) => {
      typeof setImmediate > `u` ? setTimeout(e2, 0) : setImmediate(e2);
    });
  }
  M(CP, s(1117));
  var wP = 0, TP = 10;
  function EP() {
    return wP = performance.now(), new Z.CancellationTokenSource();
  }
  M(EP, `startCancelableOperation`);
  function DP(e2) {
    TP = e2;
  }
  M(DP, `setInterruptionPeriod`);
  var OP = /* @__PURE__ */ Symbol(`OperationCancelled`);
  function kP(e2) {
    return e2 === OP;
  }
  M(kP, s(1802));
  function AP(e2) {
    return jP.apply(this, arguments);
  }
  function jP() {
    let e2 = s;
    return jP = a(function* (e3) {
      if (e3 === Z.CancellationToken.None) return;
      let t2 = performance.now();
      if (t2 - wP >= TP && (wP = t2, yield CP(), wP = performance.now()), e3.isCancellationRequested) throw OP;
    }), jP[e2(1120)](this, arguments);
  }
  M(AP, `interruptAndCheck`);
  var MP = (tt = class {
    constructor() {
      this.promise = new Promise((e2, t2) => {
        let n2 = X;
        this[n2(514)] = (t3) => (e2(t3), this), this.reject = (e3) => (t2(e3), this);
      });
    }
  }, M(tt, `Deferred`), tt), NP = (nt = class e2 {
    constructor(e3, t2, n2, r2) {
      let i2 = s;
      this._uri = e3, this._languageId = t2, this._version = n2, this[i2(864)] = r2, this._lineOffsets = void 0;
    }
    get [s(649)]() {
      return this._uri;
    }
    get languageId() {
      return this._languageId;
    }
    get version() {
      return this._version;
    }
    getText(e3) {
      let t2 = s;
      if (e3) {
        let n2 = this.offsetAt(e3.start), r2 = this.offsetAt(e3[t2(1488)]);
        return this._content.substring(n2, r2);
      }
      return this._content;
    }
    update(t2, n2) {
      let r2 = s;
      for (let n3 of t2) if (e2.isIncremental(n3)) {
        let e3 = RP(n3.range), t3 = this.offsetAt(e3.start), i2 = this.offsetAt(e3.end);
        this._content = this._content.substring(0, t3) + n3.text + this._content.substring(i2, this._content.length);
        let a2 = Math[r2(513)](e3.start[r2(1250)], 0), o2 = Math.max(e3.end.line, 0), s2 = this[r2(1249)], c2 = IP(n3.text, false, t3);
        if (o2 - a2 === c2.length) for (let e4 = 0, t4 = c2.length; e4 < t4; e4++) s2[e4 + a2 + 1] = c2[e4];
        else c2.length < 1e4 ? s2.splice(a2 + 1, o2 - a2, ...c2) : this._lineOffsets = s2 = s2[r2(1656)](0, a2 + 1).concat(c2, s2.slice(o2 + 1));
        let l2 = n3[r2(324)].length - (i2 - t3);
        if (l2 !== 0) for (let e4 = a2 + 1 + c2.length, t4 = s2.length; e4 < t4; e4++) s2[e4] = s2[e4] + l2;
      } else if (e2[r2(1093)](n3)) this._content = n3.text, this._lineOffsets = void 0;
      else throw Error(`Unknown change event received`);
      this._version = n2;
    }
    [s(1261)]() {
      let e3 = s;
      return this._lineOffsets === void 0 && (this._lineOffsets = IP(this[e3(864)], true)), this._lineOffsets;
    }
    [s(539)](e3) {
      let t2 = s;
      e3 = Math.max(Math.min(e3, this._content.length), 0);
      let n2 = this.getLineOffsets(), r2 = 0, i2 = n2[t2(1663)];
      if (i2 === 0) return {
        line: 0,
        character: e3
      };
      for (; r2 < i2; ) {
        let t3 = Math.floor((r2 + i2) / 2);
        n2[t3] > e3 ? i2 = t3 : r2 = t3 + 1;
      }
      let a2 = r2 - 1;
      return e3 = this.ensureBeforeEOL(e3, n2[a2]), {
        line: a2,
        character: e3 - n2[a2]
      };
    }
    offsetAt(e3) {
      let t2 = s, n2 = this.getLineOffsets();
      if (e3.line >= n2.length) return this._content.length;
      if (e3.line < 0) return 0;
      let r2 = n2[e3.line];
      if (e3.character <= 0) return r2;
      let i2 = e3[t2(1250)] + 1 < n2.length ? n2[e3.line + 1] : this[t2(864)].length, a2 = Math.min(r2 + e3.character, i2);
      return this.ensureBeforeEOL(a2, r2);
    }
    ensureBeforeEOL(e3, t2) {
      for (; e3 > t2 && LP(this._content.charCodeAt(e3 - 1)); ) e3--;
      return e3;
    }
    get lineCount() {
      let e3 = s;
      return this.getLineOffsets()[e3(1663)];
    }
    static [s(899)](e3) {
      let t2 = s, n2 = e3;
      return n2 != null && typeof n2.text == `string` && n2.range !== void 0 && (n2[t2(370)] === void 0 || typeof n2.rangeLength == `number`);
    }
    static isFull(e3) {
      let t2 = s, n2 = e3;
      return n2 != null && typeof n2.text == `string` && n2.range === void 0 && n2[t2(370)] === void 0;
    }
  }, M(nt, `FullTextDocument`), nt), PP;
  (function(e2) {
    let t2 = s;
    function n2(e3, t3, n3, r3) {
      return new NP(e3, t3, n3, r3);
    }
    M(n2, `create`), e2.create = n2;
    function r2(e3, t3, n3) {
      if (e3 instanceof NP) return e3.update(t3, n3), e3;
      throw Error(`TextDocument.update: document must be created by TextDocument.create`);
    }
    M(r2, `update`), e2.update = r2;
    function i2(e3, t3) {
      let n3 = X, r3 = e3.getText(), i3 = FP(t3.map(zP), (e4, t4) => {
        let n4 = X, r4 = e4.range[n4(1433)].line - t4[n4(287)].start.line;
        return r4 === 0 ? e4.range.start.character - t4.range.start.character : r4;
      }), a2 = 0, o2 = [];
      for (let t4 of i3) {
        let i4 = e3.offsetAt(t4.range.start);
        if (i4 < a2) throw Error(`Overlapping edit`);
        i4 > a2 && o2[n3(1168)](r3.substring(a2, i4)), t4.newText.length && o2.push(t4.newText), a2 = e3.offsetAt(t4.range.end);
      }
      return o2.push(r3[n3(764)](a2)), o2.join(``);
    }
    M(i2, t2(1772)), e2.applyEdits = i2;
  })(PP || (PP = {}));
  function FP(e2, t2) {
    let n2 = s;
    if (e2.length <= 1) return e2;
    let r2 = e2[n2(1663)] / 2 | 0, i2 = e2.slice(0, r2), a2 = e2.slice(r2);
    FP(i2, t2), FP(a2, t2);
    let o2 = 0, c2 = 0, l2 = 0;
    for (; o2 < i2[n2(1663)] && c2 < a2.length; ) t2(i2[o2], a2[c2]) <= 0 ? e2[l2++] = i2[o2++] : e2[l2++] = a2[c2++];
    for (; o2 < i2[n2(1663)]; ) e2[l2++] = i2[o2++];
    for (; c2 < a2[n2(1663)]; ) e2[l2++] = a2[c2++];
    return e2;
  }
  M(FP, `mergeSort`);
  function IP(e2, t2, n2 = 0) {
    let r2 = s, i2 = t2 ? [
      n2
    ] : [];
    for (let t3 = 0; t3 < e2.length; t3++) {
      let a2 = e2[r2(1129)](t3);
      LP(a2) && (a2 === 13 && t3 + 1 < e2.length && e2.charCodeAt(t3 + 1) === 10 && t3++, i2.push(n2 + t3 + 1));
    }
    return i2;
  }
  M(IP, `computeLineOffsets`);
  function LP(e2) {
    return e2 === 13 || e2 === 10;
  }
  M(LP, `isEOL`);
  function RP(e2) {
    let t2 = s, n2 = e2[t2(1433)], r2 = e2[t2(1488)];
    return n2.line > r2[t2(1250)] || n2.line === r2.line && n2.character > r2.character ? {
      start: r2,
      end: n2
    } : e2;
  }
  M(RP, s(1332));
  function zP(e2) {
    let t2 = RP(e2.range);
    return t2 === e2.range ? e2 : {
      newText: e2.newText,
      range: t2
    };
  }
  M(zP, `getWellformedEdit`);
  var BP;
  (() => {
    let e2 = s;
    var t2, n2, r2 = {
      975: (e3) => {
        let t3 = X;
        function n3(e4) {
          if (typeof e4 != `string`) throw TypeError(`Path must be a string. Received ` + JSON.stringify(e4));
        }
        M(n3, `e`);
        function r3(e4, t4) {
          let n4 = X;
          for (var r4, i4 = ``, a3 = 0, o2 = -1, s2 = 0, c3 = 0; c3 <= e4.length; ++c3) {
            if (c3 < e4.length) r4 = e4.charCodeAt(c3);
            else {
              if (r4 === 47) break;
              r4 = 47;
            }
            if (r4 === 47) {
              if (!(o2 === c3 - 1 || s2 === 1)) if (o2 !== c3 - 1 && s2 === 2) {
                if (i4[n4(1663)] < 2 || a3 !== 2 || i4.charCodeAt(i4.length - 1) !== 46 || i4.charCodeAt(i4.length - 2) !== 46) {
                  if (i4[n4(1663)] > 2) {
                    var l3 = i4.lastIndexOf(`/`);
                    if (l3 !== i4.length - 1) {
                      l3 === -1 ? (i4 = ``, a3 = 0) : a3 = (i4 = i4.slice(0, l3))[n4(1663)] - 1 - i4[n4(635)](`/`), o2 = c3, s2 = 0;
                      continue;
                    }
                  } else if (i4.length === 2 || i4.length === 1) {
                    i4 = ``, a3 = 0, o2 = c3, s2 = 0;
                    continue;
                  }
                }
                t4 && (i4.length > 0 ? i4 += `/..` : i4 = `..`, a3 = 2);
              } else i4.length > 0 ? i4 += `/` + e4.slice(o2 + 1, c3) : i4 = e4.slice(o2 + 1, c3), a3 = c3 - o2 - 1;
              o2 = c3, s2 = 0;
            } else r4 === 46 && s2 !== -1 ? ++s2 : s2 = -1;
          }
          return i4;
        }
        M(r3, `r`);
        var i3 = {
          resolve: M(function() {
            let e4 = X;
            for (var t4, i4 = ``, a3 = false, o2 = arguments.length - 1; o2 >= -1 && !a3; o2--) {
              var s2;
              o2 >= 0 ? s2 = arguments[o2] : (t4 === void 0 && (t4 = process[e4(1313)]()), s2 = t4), n3(s2), s2.length !== 0 && (i4 = s2 + `/` + i4, a3 = s2.charCodeAt(0) === 47);
            }
            return i4 = r3(i4, !a3), a3 ? i4.length > 0 ? `/` + i4 : `/` : i4.length > 0 ? i4 : `.`;
          }, `resolve`),
          normalize: M(function(e4) {
            if (n3(e4), e4.length === 0) return `.`;
            var t4 = e4.charCodeAt(0) === 47, i4 = e4.charCodeAt(e4.length - 1) === 47;
            return (e4 = r3(e4, !t4)).length !== 0 || t4 || (e4 = `.`), e4.length > 0 && i4 && (e4 += `/`), t4 ? `/` + e4 : e4;
          }, `normalize`),
          isAbsolute: M(function(e4) {
            return n3(e4), e4.length > 0 && e4.charCodeAt(0) === 47;
          }, t3(602)),
          join: M(function() {
            let e4 = t3;
            if (arguments[e4(1663)] === 0) return `.`;
            for (var r4, a3 = 0; a3 < arguments.length; ++a3) {
              var o2 = arguments[a3];
              n3(o2), o2.length > 0 && (r4 === void 0 ? r4 = o2 : r4 += `/` + o2);
            }
            return r4 === void 0 ? `.` : i3.normalize(r4);
          }, `join`),
          relative: M(function(e4, r4) {
            let a3 = t3;
            if (n3(e4), n3(r4), e4 === r4 || (e4 = i3[a3(514)](e4)) === (r4 = i3.resolve(r4))) return ``;
            for (var o2 = 1; o2 < e4.length && e4.charCodeAt(o2) === 47; ++o2) ;
            for (var s2 = e4.length, c3 = s2 - o2, l3 = 1; l3 < r4[a3(1663)] && r4[a3(1129)](l3) === 47; ++l3) ;
            for (var u3 = r4.length - l3, d3 = c3 < u3 ? c3 : u3, f3 = -1, p3 = 0; p3 <= d3; ++p3) {
              if (p3 === d3) {
                if (u3 > d3) {
                  if (r4.charCodeAt(l3 + p3) === 47) return r4[a3(1656)](l3 + p3 + 1);
                  if (p3 === 0) return r4.slice(l3 + p3);
                } else c3 > d3 && (e4[a3(1129)](o2 + p3) === 47 ? f3 = p3 : p3 === 0 && (f3 = 0));
                break;
              }
              var m3 = e4[a3(1129)](o2 + p3);
              if (m3 !== r4.charCodeAt(l3 + p3)) break;
              m3 === 47 && (f3 = p3);
            }
            var h3 = ``;
            for (p3 = o2 + f3 + 1; p3 <= s2; ++p3) p3 !== s2 && e4.charCodeAt(p3) !== 47 || (h3.length === 0 ? h3 += `..` : h3 += a3(1690));
            return h3.length > 0 ? h3 + r4[a3(1656)](l3 + f3) : (l3 += f3, r4.charCodeAt(l3) === 47 && ++l3, r4[a3(1656)](l3));
          }, `relative`),
          _makeLong: M(function(e4) {
            return e4;
          }, `_makeLong`),
          dirname: M(function(e4) {
            if (n3(e4), e4.length === 0) return `.`;
            for (var t4 = e4.charCodeAt(0), r4 = t4 === 47, i4 = -1, a3 = true, o2 = e4.length - 1; o2 >= 1; --o2) if ((t4 = e4.charCodeAt(o2)) === 47) {
              if (!a3) {
                i4 = o2;
                break;
              }
            } else a3 = false;
            return i4 === -1 ? r4 ? `/` : `.` : r4 && i4 === 1 ? `//` : e4.slice(0, i4);
          }, `dirname`),
          basename: M(function(e4, r4) {
            let i4 = t3;
            if (r4 !== void 0 && typeof r4 != i4(1730)) throw TypeError(`"ext" argument must be a string`);
            n3(e4);
            var a3, o2 = 0, s2 = -1, c3 = true;
            if (r4 !== void 0 && r4.length > 0 && r4.length <= e4[i4(1663)]) {
              if (r4.length === e4.length && r4 === e4) return ``;
              var l3 = r4[i4(1663)] - 1, u3 = -1;
              for (a3 = e4.length - 1; a3 >= 0; --a3) {
                var d3 = e4.charCodeAt(a3);
                if (d3 === 47) {
                  if (!c3) {
                    o2 = a3 + 1;
                    break;
                  }
                } else u3 === -1 && (c3 = false, u3 = a3 + 1), l3 >= 0 && (d3 === r4.charCodeAt(l3) ? --l3 == -1 && (s2 = a3) : (l3 = -1, s2 = u3));
              }
              return o2 === s2 ? s2 = u3 : s2 === -1 && (s2 = e4[i4(1663)]), e4.slice(o2, s2);
            }
            for (a3 = e4.length - 1; a3 >= 0; --a3) if (e4.charCodeAt(a3) === 47) {
              if (!c3) {
                o2 = a3 + 1;
                break;
              }
            } else s2 === -1 && (c3 = false, s2 = a3 + 1);
            return s2 === -1 ? `` : e4.slice(o2, s2);
          }, `basename`),
          extname: M(function(e4) {
            let r4 = t3;
            n3(e4);
            for (var i4 = -1, a3 = 0, o2 = -1, s2 = true, c3 = 0, l3 = e4.length - 1; l3 >= 0; --l3) {
              var u3 = e4.charCodeAt(l3);
              if (u3 !== 47) o2 === -1 && (s2 = false, o2 = l3 + 1), u3 === 46 ? i4 === -1 ? i4 = l3 : c3 !== 1 && (c3 = 1) : i4 !== -1 && (c3 = -1);
              else if (!s2) {
                a3 = l3 + 1;
                break;
              }
            }
            return i4 === -1 || o2 === -1 || c3 === 0 || c3 === 1 && i4 === o2 - 1 && i4 === a3 + 1 ? `` : e4[r4(1656)](i4, o2);
          }, `extname`),
          format: M(function(e4) {
            if (typeof e4 != `object` || !e4) throw TypeError(`The "pathObject" argument must be of type Object. Received type ` + typeof e4);
            return (function(e5, t4) {
              let n4 = X;
              var r4 = t4.dir || t4[n4(1740)], i4 = t4[n4(794)] || (t4.name || ``) + (t4[n4(636)] || ``);
              return r4 ? r4 === t4.root ? r4 + i4 : r4 + `/` + i4 : i4;
            })(0, e4);
          }, t3(1034)),
          parse: M(function(e4) {
            let r4 = t3;
            n3(e4);
            var i4 = {
              root: ``,
              dir: ``,
              base: ``,
              ext: ``,
              name: ``
            };
            if (e4.length === 0) return i4;
            var a3, o2 = e4[r4(1129)](0), s2 = o2 === 47;
            s2 ? (i4.root = `/`, a3 = 1) : a3 = 0;
            for (var c3 = -1, l3 = 0, u3 = -1, d3 = true, f3 = e4.length - 1, p3 = 0; f3 >= a3; --f3) if ((o2 = e4.charCodeAt(f3)) !== 47) u3 === -1 && (d3 = false, u3 = f3 + 1), o2 === 46 ? c3 === -1 ? c3 = f3 : p3 !== 1 && (p3 = 1) : c3 !== -1 && (p3 = -1);
            else if (!d3) {
              l3 = f3 + 1;
              break;
            }
            return c3 === -1 || u3 === -1 || p3 === 0 || p3 === 1 && c3 === u3 - 1 && c3 === l3 + 1 ? u3 !== -1 && (i4[r4(794)] = i4[r4(747)] = l3 === 0 && s2 ? e4.slice(1, u3) : e4[r4(1656)](l3, u3)) : (l3 === 0 && s2 ? (i4.name = e4.slice(1, c3), i4[r4(794)] = e4[r4(1656)](1, u3)) : (i4.name = e4.slice(l3, c3), i4.base = e4[r4(1656)](l3, u3)), i4.ext = e4[r4(1656)](c3, u3)), l3 > 0 ? i4[r4(352)] = e4.slice(0, l3 - 1) : s2 && (i4.dir = `/`), i4;
          }, `parse`),
          sep: `/`,
          delimiter: `:`,
          win32: null,
          posix: null
        };
        i3.posix = i3, e3.exports = i3;
      }
    }, i2 = {};
    function a2(e3) {
      let t3 = X;
      var n3 = i2[e3];
      if (n3 !== void 0) return n3[t3(427)];
      var o2 = i2[e3] = {
        exports: {}
      };
      return r2[e3](o2, o2.exports, a2), o2[t3(427)];
    }
    M(a2, `r`), a2.d = (e3, t3) => {
      for (var n3 in t3) a2.o(t3, n3) && !a2.o(e3, n3) && Object.defineProperty(e3, n3, {
        enumerable: true,
        get: t3[n3]
      });
    }, a2.o = (t3, n3) => Object.prototype.hasOwnProperty[e2(1066)](t3, n3), a2.r = (e3) => {
      typeof Symbol < `u` && Symbol.toStringTag && Object.defineProperty(e3, Symbol.toStringTag, {
        value: `Module`
      }), Object.defineProperty(e3, "__esModule", {
        value: true
      });
    };
    var c2 = {};
    let l2;
    a2.r(c2), a2.d(c2, {
      URI: M(() => h2, `URI`),
      Utils: M(() => E2, `Utils`)
    }), typeof process == `object` ? l2 = process.platform === `win32` : typeof navigator == `object` && (l2 = navigator.userAgent.indexOf(`Windows`) >= 0);
    let u2 = /^\w[\w\d+.-]*$/, d2 = /^\//, f2 = /^\/\//;
    function p2(t3, n3) {
      let r3 = e2;
      if (!t3.scheme && n3) throw Error(`[UriError]: Scheme is missing: {scheme: "", authority: "` + t3[r3(1702)] + r3(1668) + t3.path + `", query: "` + t3[r3(1619)] + `", fragment: "` + t3.fragment + `"}`);
      if (t3.scheme && !u2.test(t3.scheme)) throw Error(`[UriError]: Scheme contains illegal characters.`);
      if (t3.path) {
        if (t3.authority) {
          if (!d2.test(t3[r3(1647)])) throw Error(`[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character`);
        } else if (f2.test(t3.path)) throw Error(`[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")`);
      }
    }
    M(p2, `a`);
    let m2 = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
    class h2 {
      static [e2(1262)](t3) {
        let n3 = e2;
        return t3 instanceof h2 || !!t3 && typeof t3.authority == `string` && typeof t3.fragment == `string` && typeof t3[n3(1647)] == `string` && typeof t3.query == n3(1730) && typeof t3[n3(1574)] == `string` && typeof t3.fsPath == `string` && typeof t3.with == n3(386) && typeof t3.toString == n3(386);
      }
      constructor(t3, n3, r3, i3, a3, s2 = false) {
        let c3 = e2;
        o(this, `scheme`, void 0), o(this, c3(1702), void 0), o(this, `path`, void 0), o(this, c3(1619), void 0), o(this, c3(550), void 0), typeof t3 == `object` ? (this.scheme = t3[c3(1574)] || ``, this.authority = t3.authority || ``, this.path = t3[c3(1647)] || ``, this.query = t3.query || ``, this.fragment = t3.fragment || ``) : (this.scheme = /* @__PURE__ */ (function(e3, t4) {
          return e3 || t4 ? e3 : `file`;
        })(t3, s2), this[c3(1702)] = n3 || ``, this.path = (function(e3, t4) {
          switch (e3) {
            case `https`:
            case `http`:
            case `file`:
              t4 ? t4[0] !== `/` && (t4 = `/` + t4) : t4 = `/`;
          }
          return t4;
        })(this.scheme, r3 || ``), this.query = i3 || ``, this.fragment = a3 || ``, p2(this, s2));
      }
      get fsPath() {
        return x2(this, false);
      }
      with(t3) {
        let n3 = e2;
        if (!t3) return this;
        let { scheme: r3, authority: i3, path: a3, query: o2, fragment: s2 } = t3;
        return r3 === void 0 ? r3 = this[n3(1574)] : r3 === null && (r3 = ``), i3 === void 0 ? i3 = this.authority : i3 === null && (i3 = ``), a3 === void 0 ? a3 = this.path : a3 === null && (a3 = ``), o2 === void 0 ? o2 = this.query : o2 === null && (o2 = ``), s2 === void 0 ? s2 = this.fragment : s2 === null && (s2 = ``), r3 === this.scheme && i3 === this.authority && a3 === this.path && o2 === this[n3(1619)] && s2 === this.fragment ? this : new _2(r3, i3, a3, o2, s2);
      }
      static [e2(1343)](e3, t3 = false) {
        let n3 = m2.exec(e3);
        return n3 ? new _2(n3[2] || ``, w2(n3[4] || ``), w2(n3[5] || ``), w2(n3[7] || ``), w2(n3[9] || ``), t3) : new _2(``, ``, ``, ``, ``);
      }
      static file(t3) {
        let n3 = e2, r3 = ``;
        if (l2 && (t3 = t3[n3(909)](/\\/g, `/`)), t3[0] === `/` && t3[1] === `/`) {
          let e3 = t3.indexOf(`/`, 2);
          e3 === -1 ? (r3 = t3[n3(777)](2), t3 = `/`) : (r3 = t3.substring(2, e3), t3 = t3.substring(e3) || `/`);
        }
        return new _2(`file`, r3, t3, ``, ``);
      }
      static from(e3) {
        let t3 = new _2(e3.scheme, e3.authority, e3.path, e3.query, e3.fragment);
        return p2(t3, true), t3;
      }
      toString(e3 = false) {
        return ee2(this, e3);
      }
      toJSON() {
        return this;
      }
      static revive(e3) {
        if (e3) {
          if (e3 instanceof h2) return e3;
          {
            let t3 = new _2(e3);
            return t3._formatted = e3.external, t3._fsPath = e3._sep === g2 ? e3.fsPath : null, t3;
          }
        }
        return e3;
      }
    }
    t2 = h2, M(t2, `l`);
    let g2 = l2 ? 1 : void 0;
    class _2 extends h2 {
      constructor(...e3) {
        super(...e3), o(this, `_formatted`, null), o(this, `_fsPath`, null);
      }
      get fsPath() {
        let t3 = e2;
        return this._fsPath || (this[t3(411)] = x2(this, false)), this._fsPath;
      }
      toString(e3 = false) {
        return e3 ? ee2(this, true) : (this._formatted || (this._formatted = ee2(this, false)), this._formatted);
      }
      toJSON() {
        let t3 = e2, n3 = {
          $mid: 1
        };
        return this._fsPath && (n3[t3(736)] = this._fsPath, n3._sep = g2), this._formatted && (n3.external = this._formatted), this.path && (n3[t3(1647)] = this.path), this[t3(1574)] && (n3[t3(1574)] = this.scheme), this.authority && (n3[t3(1702)] = this[t3(1702)]), this.query && (n3.query = this.query), this.fragment && (n3.fragment = this[t3(550)]), n3;
      }
    }
    n2 = _2, M(n2, `d`);
    let v2 = {
      58: e2(397),
      47: `%2F`,
      63: `%3F`,
      35: `%23`,
      91: `%5B`,
      93: `%5D`,
      64: `%40`,
      33: `%21`,
      36: `%24`,
      38: `%26`,
      39: `%27`,
      40: e2(1571),
      41: `%29`,
      42: `%2A`,
      43: `%2B`,
      44: `%2C`,
      59: `%3B`,
      61: `%3D`,
      32: e2(758)
    };
    function y2(e3, t3, n3) {
      let r3, i3 = -1;
      for (let a3 = 0; a3 < e3.length; a3++) {
        let o2 = e3.charCodeAt(a3);
        if (o2 >= 97 && o2 <= 122 || o2 >= 65 && o2 <= 90 || o2 >= 48 && o2 <= 57 || o2 === 45 || o2 === 46 || o2 === 95 || o2 === 126 || t3 && o2 === 47 || n3 && o2 === 91 || n3 && o2 === 93 || n3 && o2 === 58) i3 !== -1 && (r3 += encodeURIComponent(e3.substring(i3, a3)), i3 = -1), r3 !== void 0 && (r3 += e3.charAt(a3));
        else {
          r3 === void 0 && (r3 = e3.substr(0, a3));
          let t4 = v2[o2];
          t4 === void 0 ? i3 === -1 && (i3 = a3) : (i3 !== -1 && (r3 += encodeURIComponent(e3.substring(i3, a3)), i3 = -1), r3 += t4);
        }
      }
      return i3 !== -1 && (r3 += encodeURIComponent(e3.substring(i3))), r3 === void 0 ? e3 : r3;
    }
    M(y2, `m`);
    function b2(e3) {
      let t3;
      for (let n3 = 0; n3 < e3.length; n3++) {
        let r3 = e3.charCodeAt(n3);
        r3 === 35 || r3 === 63 ? (t3 === void 0 && (t3 = e3.substr(0, n3)), t3 += v2[r3]) : t3 !== void 0 && (t3 += e3[n3]);
      }
      return t3 === void 0 ? e3 : t3;
    }
    M(b2, `y`);
    function x2(t3, n3) {
      let r3 = e2, i3;
      return i3 = t3.authority && t3.path.length > 1 && t3[r3(1574)] === `file` ? `//` + t3.authority + t3[r3(1647)] : t3.path.charCodeAt(0) === 47 && (t3.path.charCodeAt(1) >= 65 && t3[r3(1647)].charCodeAt(1) <= 90 || t3[r3(1647)].charCodeAt(1) >= 97 && t3.path.charCodeAt(1) <= 122) && t3.path.charCodeAt(2) === 58 ? n3 ? t3.path.substr(1) : t3[r3(1647)][1][r3(462)]() + t3.path.substr(2) : t3.path, l2 && (i3 = i3.replace(/\//g, `\\`)), i3;
    }
    M(x2, `v`);
    function ee2(t3, n3) {
      let r3 = e2, i3 = n3 ? b2 : y2, a3 = ``, { scheme: o2, authority: s2, path: c3, query: l3, fragment: u3 } = t3;
      if (o2 && (a3 += o2, a3 += `:`), (s2 || o2 === `file`) && (a3 += `/`, a3 += `/`), s2) {
        let e3 = s2.indexOf(`@`);
        if (e3 !== -1) {
          let t4 = s2.substr(0, e3);
          s2 = s2.substr(e3 + 1), e3 = t4.lastIndexOf(`:`), e3 === -1 ? a3 += i3(t4, false, false) : (a3 += i3(t4.substr(0, e3), false, false), a3 += `:`, a3 += i3(t4.substr(e3 + 1), false, true)), a3 += `@`;
        }
        s2 = s2.toLowerCase(), e3 = s2.lastIndexOf(`:`), e3 === -1 ? a3 += i3(s2, false, true) : (a3 += i3(s2.substr(0, e3), false, true), a3 += s2.substr(e3));
      }
      if (c3) {
        if (c3.length >= 3 && c3.charCodeAt(0) === 47 && c3.charCodeAt(2) === 58) {
          let e3 = c3.charCodeAt(1);
          e3 >= 65 && e3 <= 90 && (c3 = `/` + String.fromCharCode(e3 + 32) + `:` + c3[r3(764)](3));
        } else if (c3.length >= 2 && c3.charCodeAt(1) === 58) {
          let e3 = c3[r3(1129)](0);
          e3 >= 65 && e3 <= 90 && (c3 = String[r3(1302)](e3 + 32) + `:` + c3.substr(2));
        }
        a3 += i3(c3, true, false);
      }
      return l3 && (a3 += `?`, a3 += i3(l3, false, false)), u3 && (a3 += `#`, a3 += n3 ? u3 : y2(u3, false, false)), a3;
    }
    M(ee2, `b`);
    function S2(e3) {
      try {
        return decodeURIComponent(e3);
      } catch {
        return e3.length > 3 ? e3.substr(0, 3) + S2(e3.substr(3)) : e3;
      }
    }
    M(S2, `C`);
    let C2 = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
    function w2(e3) {
      return e3.match(C2) ? e3.replace(C2, (e4) => S2(e4)) : e3;
    }
    M(w2, `w`);
    var te2 = a2(975);
    let T2 = te2.posix || te2;
    var E2;
    (function(t3) {
      let n3 = e2;
      t3[n3(1502)] = function(e3, ...t4) {
        return e3.with({
          path: T2.join(e3.path, ...t4)
        });
      }, t3.resolvePath = function(e3, ...t4) {
        let r3 = e3[n3(1647)], i3 = false;
        r3[0] !== `/` && (r3 = `/` + r3, i3 = true);
        let a3 = T2.resolve(r3, ...t4);
        return i3 && a3[0] === `/` && !e3.authority && (a3 = a3.substring(1)), e3.with({
          path: a3
        });
      }, t3.dirname = function(e3) {
        if (e3[n3(1647)].length === 0 || e3.path === `/`) return e3;
        let t4 = T2.dirname(e3.path);
        return t4.length === 1 && t4.charCodeAt(0) === 46 && (t4 = ``), e3.with({
          path: t4
        });
      }, t3.basename = function(e3) {
        let t4 = n3;
        return T2.basename(e3[t4(1647)]);
      }, t3.extname = function(e3) {
        return T2.extname(e3.path);
      };
    })(E2 || (E2 = {})), BP = c2;
  })();
  var { URI: VP, Utils: HP } = BP, UP;
  (function(e2) {
    let t2 = s;
    e2.basename = HP.basename, e2.dirname = HP[t2(583)], e2.extname = HP[t2(296)], e2.joinPath = HP.joinPath, e2.resolvePath = HP.resolvePath;
    let n2 = typeof process == t2(716) && (process == null ? void 0 : process.platform) === `win32`;
    function r2(e3, t3) {
      return (e3 == null ? void 0 : e3.toString()) === (t3 == null ? void 0 : t3.toString());
    }
    M(r2, `equals`), e2.equals = r2;
    function i2(e3, r3) {
      let i3 = t2, a3 = typeof e3 == `string` ? VP.parse(e3).path : e3.path, o3 = typeof r3 == `string` ? VP.parse(r3).path : r3.path, s2 = a3.split(`/`).filter((e4) => e4[i3(1663)] > 0), c2 = o3[i3(588)](`/`).filter((e4) => e4[i3(1663)] > 0);
      if (n2) {
        let e4 = /^[A-Z]:$/;
        if (s2[0] && e4[i3(1276)](s2[0]) && (s2[0] = s2[0].toLowerCase()), c2[0] && e4.test(c2[0]) && (c2[0] = c2[0].toLowerCase()), s2[0] !== c2[0]) return o3.substring(1);
      }
      let l2 = 0;
      for (; l2 < s2.length && s2[l2] === c2[l2]; l2++) ;
      return i3(496).repeat(s2.length - l2) + c2.slice(l2).join(`/`);
    }
    M(i2, `relative`), e2.relative = i2;
    function a2(e3) {
      let n3 = t2;
      return VP.parse(e3[n3(752)]()).toString();
    }
    M(a2, `normalize`), e2[t2(998)] = a2;
    function o2(e3, n3) {
      let r3 = t2, i3 = typeof e3 == r3(1730) ? e3 : e3[r3(1647)], a3 = typeof n3 == r3(1730) ? n3 : n3.path;
      return a3.charAt(a3[r3(1663)] - 1) === `/` && (a3 = a3.slice(0, -1)), i3.charAt(i3.length - 1) === `/` && (i3 = i3.slice(0, -1)), a3 === i3 ? true : a3.length < i3.length || a3.charAt(i3.length) !== `/` ? false : a3.startsWith(i3);
    }
    M(o2, `contains`), e2[t2(1252)] = o2;
  })(UP || (UP = {}));
  var WP = (rt = class {
    constructor() {
      this.root = {
        name: ``,
        children: /* @__PURE__ */ new Map()
      };
    }
    normalizeUri(e2) {
      return UP.normalize(e2);
    }
    clear() {
      let e2 = s;
      this.root[e2(629)].clear();
    }
    insert(e2, t2) {
      let n2 = s, r2 = this.getNode(this.normalizeUri(e2), true);
      r2[n2(1804)] = t2;
    }
    [s(565)](e2) {
      let t2 = s, n2 = this.getNode(this.normalizeUri(e2), false);
      n2 != null && n2[t2(1263)] && n2.parent.children.delete(n2.name);
    }
    [s(714)](e2) {
      var _a2;
      return ((_a2 = this.getNode(this.normalizeUri(e2), false)) == null ? void 0 : _a2.element) !== void 0;
    }
    hasNode(e2) {
      let t2 = s;
      return this[t2(1724)](this.normalizeUri(e2), false) !== void 0;
    }
    find(e2) {
      var _a2;
      let t2 = s;
      return (_a2 = this.getNode(this.normalizeUri(e2), false)) == null ? void 0 : _a2[t2(1804)];
    }
    findNode(e2) {
      let t2 = s, n2 = this.normalizeUri(e2), r2 = this.getNode(n2, false);
      if (r2) return {
        name: r2[t2(747)],
        uri: UP.joinPath(VP.parse(n2), r2[t2(747)]).toString(),
        element: r2.element
      };
    }
    findChildren(e2) {
      let t2 = s, n2 = this.normalizeUri(e2), r2 = this[t2(1724)](n2, false);
      return r2 ? Array.from(r2.children.values()).map((e3) => ({
        name: e3.name,
        uri: UP.joinPath(VP[t2(1343)](n2), e3.name).toString(),
        element: e3.element
      })) : [];
    }
    all() {
      return this.collectValues(this.root);
    }
    findAll(e2) {
      let t2 = s, n2 = this.getNode(UP[t2(998)](e2), false);
      return n2 ? this.collectValues(n2) : [];
    }
    getNode(e2, t2) {
      let n2 = e2.split(`/`);
      e2.charAt(e2.length - 1) === `/` && n2.pop();
      let r2 = this.root;
      for (let e3 of n2) {
        let n3 = r2.children.get(e3);
        if (!n3) if (t2) n3 = {
          name: e3,
          children: /* @__PURE__ */ new Map(),
          parent: r2
        }, r2.children.set(e3, n3);
        else return;
        r2 = n3;
      }
      return r2;
    }
    [s(422)](e2) {
      let t2 = s, n2 = [];
      e2.element && n2[t2(1168)](e2.element);
      for (let t3 of e2.children.values()) n2.push(...this.collectValues(t3));
      return n2;
    }
  }, M(rt, `UriTrie`), rt), Q;
  (function(e2) {
    let t2 = s;
    e2[e2.Changed = 0] = `Changed`, e2[e2.Parsed = 1] = `Parsed`, e2[e2[t2(561)] = 2] = `IndexedContent`, e2[e2.ComputedScopes = 3] = `ComputedScopes`, e2[e2[t2(282)] = 4] = `Linked`, e2[e2.IndexedReferences = 5] = t2(1597), e2[e2.Validated = 6] = t2(809);
  })(Q || (Q = {}));
  var GP = (it = class {
    constructor(e2) {
      let t2 = s;
      this.serviceRegistry = e2[t2(972)], this.textDocuments = e2.workspace.TextDocuments, this.fileSystemProvider = e2.workspace.FileSystemProvider;
    }
    [s(359)](e2) {
      let t2 = s;
      var n2 = this;
      return a(function* (e3, r2 = Z[t2(1784)][t2(1459)]) {
        let i2 = t2, a2 = yield n2.fileSystemProvider.readFile(e3);
        return n2[i2(1806)](e3, a2, r2);
      }).apply(this, arguments);
    }
    fromTextDocument(e2, t2, n2) {
      let r2 = s;
      return t2 ?? (t2 = VP.parse(e2.uri)), Z.CancellationToken.is(n2) ? this.createAsync(t2, e2, n2) : this[r2(1589)](t2, e2, n2);
    }
    [s(1676)](e2, t2, n2) {
      return Z.CancellationToken.is(n2) ? this.createAsync(t2, e2, n2) : this.create(t2, e2, n2);
    }
    fromModel(e2, t2) {
      return this.create(t2, {
        $model: e2
      });
    }
    create(e2, t2, n2) {
      let r2 = s;
      if (typeof t2 == r2(1730)) {
        let i2 = this[r2(1343)](e2, t2, n2);
        return this.createLangiumDocument(i2, e2, void 0, t2);
      } else if (`$model` in t2) {
        let n3 = {
          value: t2.$model,
          parserErrors: [],
          lexerErrors: []
        };
        return this.createLangiumDocument(n3, e2);
      } else {
        let i2 = this[r2(1343)](e2, t2.getText(), n2);
        return this.createLangiumDocument(i2, e2, t2);
      }
    }
    createAsync(e2, t2, n2) {
      var r2 = this;
      return a(function* () {
        let i2 = X;
        if (typeof t2 == `string`) {
          let a2 = yield r2[i2(1436)](e2, t2, n2);
          return r2[i2(258)](a2, e2, void 0, t2);
        } else {
          let a2 = yield r2.parseAsync(e2, t2[i2(505)](), n2);
          return r2.createLangiumDocument(a2, e2, t2);
        }
      })();
    }
    createLangiumDocument(e2, t2, n2, r2) {
      let i2 = s, a2;
      if (n2) a2 = {
        parseResult: e2,
        uri: t2,
        state: Q.Parsed,
        references: [],
        textDocument: n2
      };
      else {
        let n3 = this.createTextDocumentGetter(t2, r2);
        a2 = {
          parseResult: e2,
          uri: t2,
          state: Q[i2(1256)],
          references: [],
          get textDocument() {
            return n3();
          }
        };
      }
      return e2[i2(1371)].$document = a2, a2;
    }
    update(e2, t2) {
      var n2 = this;
      return a(function* () {
        var _a2, _b2;
        let r2 = X, i2 = (_a2 = e2.parseResult[r2(1371)].$cstNode) == null ? void 0 : _a2.root.fullText, a2 = (_b2 = n2.textDocuments) == null ? void 0 : _b2.get(e2.uri.toString()), o2 = a2 ? a2.getText() : yield n2.fileSystemProvider.readFile(e2[r2(649)]);
        if (a2) Object.defineProperty(e2, "textDocument", {
          value: a2
        });
        else {
          let t3 = n2.createTextDocumentGetter(e2.uri, o2);
          Object.defineProperty(e2, "textDocument", {
            get: t3
          });
        }
        return i2 !== o2 && (e2.parseResult = yield n2.parseAsync(e2[r2(649)], o2, t2), e2.parseResult.value.$document = e2), e2.state = Q.Parsed, e2;
      })();
    }
    parse(e2, t2, n2) {
      let r2 = s;
      return this.serviceRegistry.getServices(e2)[r2(908)].LangiumParser[r2(1343)](t2, n2);
    }
    parseAsync(e2, t2, n2) {
      let r2 = s;
      return this.serviceRegistry[r2(992)](e2).parser.AsyncParser.parse(t2, n2);
    }
    [s(1413)](e2, t2) {
      let n2 = this.serviceRegistry, r2;
      return () => {
        let i2 = X;
        return r2 ?? (r2 = PP.create(e2.toString(), n2.getServices(e2).LanguageMetaData[i2(679)], 0, t2 ?? ``));
      };
    }
  }, M(it, `DefaultLangiumDocumentFactory`), it), KP = (at = class {
    constructor(e2) {
      let t2 = s;
      this.documentTrie = new WP(), this.services = e2, this.langiumDocumentFactory = e2.workspace.LangiumDocumentFactory, this[t2(511)] = () => e2.workspace.DocumentBuilder;
    }
    get all() {
      return R(this.documentTrie.all());
    }
    addDocument(e2) {
      let t2 = s, n2 = e2.uri.toString();
      if (this.documentTrie.has(n2)) throw Error(`A document with the URI '` + n2 + `' is already present.`);
      this.documentTrie[t2(1805)](n2, e2);
    }
    [s(372)](e2) {
      let t2 = s, n2 = e2.toString();
      return this.documentTrie[t2(323)](n2);
    }
    getDocuments(e2) {
      let t2 = e2.toString();
      return this.documentTrie.findAll(t2);
    }
    getOrCreateDocument(e2, t2) {
      var n2 = this;
      return a(function* () {
        let r2 = n2.getDocument(e2);
        return r2 || (r2 = yield n2.langiumDocumentFactory.fromUri(e2, t2), n2.addDocument(r2), r2);
      })();
    }
    createDocument(e2, t2, n2) {
      let r2 = s;
      if (n2) return this.langiumDocumentFactory.fromString(t2, e2, n2)[r2(1048)]((e3) => (this.addDocument(e3), e3));
      {
        let n3 = this.langiumDocumentFactory.fromString(t2, e2);
        return this[r2(1164)](n3), n3;
      }
    }
    hasDocument(e2) {
      let t2 = s;
      return this.documentTrie[t2(714)](e2.toString());
    }
    invalidateDocument(e2) {
      let t2 = e2.toString(), n2 = this.documentTrie.find(t2);
      return n2 && this.documentBuilder().resetToState(n2, Q.Changed), n2;
    }
    deleteDocument(e2) {
      let t2 = s, n2 = e2[t2(752)](), r2 = this.documentTrie[t2(323)](n2);
      return r2 && (r2.state = Q.Changed, this[t2(1062)].delete(n2)), r2;
    }
    [s(1271)](e2) {
      let t2 = e2.toString(), n2 = this.documentTrie.findAll(t2);
      for (let e3 of n2) e3.state = Q.Changed;
      return this.documentTrie.delete(t2), n2;
    }
  }, M(at, `DefaultLangiumDocuments`), at), qP = Symbol(s(1107)), JP = (ot = class {
    constructor(e2) {
      let t2 = s;
      this.reflection = e2.shared.AstReflection, this[t2(1630)] = () => e2.shared.workspace.LangiumDocuments, this.scopeProvider = e2.references.ScopeProvider, this.astNodeLocator = e2[t2(911)].AstNodeLocator, this.profiler = e2[t2(545)][t2(1743)].LangiumProfiler, this.languageId = e2.LanguageMetaData.languageId;
    }
    [s(1449)](e2) {
      var t2 = this;
      return a(function* (e3, n2 = Z.CancellationToken.None) {
        let r2 = X;
        var i2;
        if ((i2 = t2[r2(936)]) != null && i2.isActive(`linking`)) {
          let i3 = t2.profiler.createTask(r2(1096), t2.languageId);
          i3.start();
          try {
            for (let a2 of ca(e3.parseResult[r2(1371)])) yield AP(n2), ua(a2).forEach((n3) => {
              let o2 = r2, s2 = a2.$type + `:` + n3.property;
              i3.startSubTask(s2);
              try {
                t2[o2(1222)](n3, e3);
              } finally {
                i3.stopSubTask(s2);
              }
            });
          } finally {
            i3[r2(1749)]();
          }
        } else for (let i3 of ca(e3.parseResult.value)) yield AP(n2), ua(i3)[r2(396)]((n3) => t2[r2(1222)](n3, e3));
      }).apply(this, arguments);
    }
    doLink(e2, t2) {
      let n2 = s, r2 = e2.reference;
      if (`_ref` in r2 && r2._ref === void 0) {
        r2._ref = qP;
        try {
          let t3 = this.getCandidate(e2);
          Vi(t3) ? r2._ref = t3 : (r2[n2(1768)] = t3, r2._ref = this.loadAstNode(t3) ?? this.createLinkingError(e2, t3));
        } catch (t3) {
          console.error(`An error occurred while resolving reference to '` + r2[n2(825)] + `':`, t3);
          let i2 = t3.message ?? String(t3);
          r2._ref = {
            info: e2,
            message: `An error occurred while resolving reference to '` + r2.$refText + `': ` + i2
          };
        }
        t2.references.push(r2);
      } else if (`_items` in r2 && r2[n2(517)] === void 0) {
        r2[n2(517)] = qP;
        try {
          let t3 = this.getCandidates(e2), i2 = [];
          if (Vi(t3)) r2._linkingError = t3;
          else for (let e3 of t3) {
            let t4 = this[n2(1345)](e3);
            t4 && i2.push({
              ref: t4,
              $nodeDescription: e3
            });
          }
          r2._items = i2;
        } catch (t3) {
          r2._linkingError = {
            info: e2,
            message: n2(1468) + r2[n2(825)] + `': ` + t3
          }, r2._items = [];
        }
        t2.references.push(r2);
      }
    }
    unlink(e2) {
      let t2 = s;
      for (let n2 of e2.references) `_ref` in n2 ? (n2._ref = void 0, delete n2._nodeDescription) : `_items` in n2 && (n2._items = void 0, delete n2[t2(1653)]);
      e2.references = [];
    }
    getCandidate(e2) {
      let t2 = s;
      return this[t2(276)].getScope(e2).getElement(e2.reference.$refText) ?? this.createLinkingError(e2);
    }
    [s(566)](e2) {
      let t2 = s, n2 = this.scopeProvider.getScope(e2).getElements(e2.reference[t2(825)]).distinct((e3) => e3.documentUri + `#` + e3.path).toArray();
      return n2.length > 0 ? n2 : this.createLinkingError(e2);
    }
    [s(1675)](e2, t2, n2, r2) {
      let i2 = this, a2 = {
        $refNode: n2,
        $refText: r2,
        _ref: void 0,
        get ref() {
          let n3 = X;
          if (Li(this[n3(863)])) return this._ref;
          if (Bi(this[n3(1768)])) {
            let n4 = i2.loadAstNode(this._nodeDescription);
            this._ref = n4 ?? i2.createLinkingError({
              reference: a2,
              container: e2,
              property: t2
            }, this._nodeDescription);
          } else if (this._ref === void 0) {
            this._ref = qP;
            let r3 = ia(e2)[n3(1361)], o2 = i2[n3(1358)]({
              reference: a2,
              container: e2,
              property: t2
            });
            if (o2.error && r3 && r3.state < Q.ComputedScopes) {
              this._ref = void 0;
              return;
            }
            this._ref = o2.node ?? o2[n3(1527)], this[n3(1768)] = o2[n3(1584)], r3 == null ? void 0 : r3[n3(1658)].push(this);
          } else this._ref === qP && i2.throwCyclicReferenceError(e2, t2, r2);
          return Li(this[n3(863)]) ? this[n3(863)] : void 0;
        },
        get $nodeDescription() {
          return this._nodeDescription;
        },
        get error() {
          let e3 = X;
          return Vi(this[e3(863)]) ? this._ref : void 0;
        }
      };
      return a2;
    }
    buildMultiReference(e2, t2, n2, r2) {
      let i2 = this, a2 = {
        $refNode: n2,
        $refText: r2,
        _items: void 0,
        get items() {
          let n3 = X;
          if (Array.isArray(this._items)) return this[n3(517)];
          if (this._items === void 0) {
            this._items = qP;
            let r3 = ia(e2).$document, o2 = i2[n3(566)]({
              reference: a2,
              container: e2,
              property: t2
            }), s2 = [];
            if (Vi(o2)) this._linkingError = o2;
            else for (let e3 of o2) {
              let t3 = i2.loadAstNode(e3);
              t3 && s2.push({
                ref: t3,
                $nodeDescription: e3
              });
            }
            this[n3(517)] = s2, r3 == null ? void 0 : r3.references.push(this);
          } else this[n3(517)] === qP && i2.throwCyclicReferenceError(e2, t2, r2);
          return Array.isArray(this._items) ? this._items : [];
        },
        get error() {
          let n3 = X;
          if (this._linkingError) return this[n3(1653)];
          if (!(this.items[n3(1663)] > 0)) return this[n3(1653)] = i2.createLinkingError({
            reference: a2,
            container: e2,
            property: t2
          });
        }
      };
      return a2;
    }
    throwCyclicReferenceError(e2, t2, n2) {
      let r2 = s;
      throw Error(`Cyclic reference resolution detected: ` + this.astNodeLocator.getAstNodePath(e2) + `/` + t2 + r2(1546) + n2 + `')`);
    }
    getLinkedNode(e2) {
      let t2 = s;
      try {
        let t3 = this.getCandidate(e2);
        if (Vi(t3)) return {
          error: t3
        };
        let n2 = this.loadAstNode(t3);
        return n2 ? {
          node: n2,
          descr: t3
        } : {
          descr: t3,
          error: this.createLinkingError(e2, t3)
        };
      } catch (n2) {
        console.error(`An error occurred while resolving reference to '` + e2.reference.$refText + `':`, n2);
        let r2 = n2.message ?? String(n2);
        return {
          error: {
            info: e2,
            message: t2(1468) + e2.reference.$refText + `': ` + r2
          }
        };
      }
    }
    [s(1345)](e2) {
      let t2 = s;
      if (e2.node) return e2.node;
      let n2 = this.langiumDocuments().getDocument(e2.documentUri);
      if (n2) return this[t2(1501)].getAstNode(n2.parseResult[t2(1371)], e2.path);
    }
    createLinkingError(e2, t2) {
      let n2 = s, r2 = ia(e2.container)[n2(1361)];
      return r2 && r2.state < Q.ComputedScopes && console.warn(`Attempted reference resolution before document reached ComputedScopes state (` + r2.uri + `).`), {
        info: e2,
        message: `Could not resolve reference to ` + this[n2(1336)].getReferenceType(e2) + ` named '` + e2.reference.$refText + `'.`,
        targetDescription: t2
      };
    }
  }, M(ot, s(652)), ot);
  function YP(e2) {
    return typeof e2.name == `string`;
  }
  M(YP, `isNamed`);
  var XP = (st = class {
    getName(e2) {
      if (YP(e2)) return e2.name;
    }
    [s(445)](e2) {
      let t2 = s;
      return _c(e2.$cstNode, t2(747));
    }
  }, M(st, `DefaultNameProvider`), st), ZP = (ct = class {
    constructor(e2) {
      let t2 = s;
      this.nameProvider = e2.references.NameProvider, this.index = e2.shared[t2(911)].IndexManager, this.nodeLocator = e2.workspace.AstNodeLocator, this.documents = e2.shared.workspace.LangiumDocuments, this.hasMultiReference = ca(e2.Grammar)[t2(867)]((e3) => Ua(e3) && e3.isMulti);
    }
    findDeclarations(e2) {
      let t2 = s;
      if (e2) {
        let n2 = Sc(e2), r2 = e2[t2(688)];
        if (n2 && r2) {
          let i2 = r2[n2[t2(729)]];
          if (Ri(i2) || zi(i2)) return aa(i2);
          if (Array.isArray(i2)) {
            for (let n3 of i2) if ((Ri(n3) || zi(n3)) && n3.$refNode && n3[t2(333)][t2(797)] <= e2.offset && n3.$refNode.end >= e2.end) return aa(n3);
          }
        }
        if (r2) {
          let n3 = this.nameProvider.getNameNode(r2);
          if (n3 && (n3 === e2 || hs(e2, n3))) return this[t2(366)](r2);
        }
      }
      return [];
    }
    [s(366)](e2) {
      let t2 = s;
      if (this.hasMultiReference) {
        let n2 = this.index.findAllReferences(e2, this.nodeLocator.getAstNodePath(e2)), r2 = this.getNodeFromReferenceDescription(n2[t2(769)]());
        if (r2) {
          for (let n3 of ua(r2)) if (zi(n3.reference) && n3.reference.items.some((t3) => t3.ref === e2)) return n3[t2(488)].items.map((e3) => e3[t2(289)]);
        }
        return [
          e2
        ];
      } else return [
        e2
      ];
    }
    getNodeFromReferenceDescription(e2) {
      let t2 = s;
      if (!e2) return;
      let n2 = this.documents.getDocument(e2[t2(806)]);
      if (n2) return this.nodeLocator.getAstNode(n2.parseResult.value, e2[t2(966)]);
    }
    findDeclarationNodes(e2) {
      let t2 = this.findDeclarations(e2), n2 = [];
      for (let e3 of t2) {
        let t3 = this.nameProvider.getNameNode(e3) ?? e3.$cstNode;
        t3 && n2.push(t3);
      }
      return n2;
    }
    [s(1720)](e2, t2) {
      let n2 = s, r2 = [];
      t2.includeDeclaration && r2.push(...this.getSelfReferences(e2));
      let i2 = this.index[n2(1325)](e2, this.nodeLocator.getAstNodePath(e2));
      return t2.documentUri && (i2 = i2.filter((e3) => UP.equals(e3[n2(806)], t2.documentUri))), r2.push(...i2), R(r2);
    }
    getSelfReferences(e2) {
      let t2 = s, n2 = this[t2(366)](e2), r2 = [];
      for (let e3 of n2) {
        let n3 = this.nameProvider.getNameNode(e3);
        if (n3) {
          let i2 = ra(e3), a2 = this.nodeLocator.getAstNodePath(e3);
          r2.push({
            sourceUri: i2[t2(649)],
            sourcePath: a2,
            targetUri: i2.uri,
            targetPath: a2,
            segment: _s(n3),
            local: true
          });
        }
      }
      return r2;
    }
  }, M(ct, `DefaultReferences`), ct), QP = (nn = Symbol.iterator, lt = class {
    constructor(e2) {
      if (this.map = /* @__PURE__ */ new Map(), e2) for (let [t2, n2] of e2) this.add(t2, n2);
    }
    get size() {
      let e2 = s;
      return Qi.sum(R(this.map.values()).map((t2) => t2[e2(1663)]));
    }
    clear() {
      let e2 = s;
      this.map[e2(563)]();
    }
    delete(e2, t2) {
      let n2 = s;
      if (t2 === void 0) return this.map.delete(e2);
      {
        let r2 = this.map.get(e2);
        if (r2) {
          let i2 = r2.indexOf(t2);
          if (i2 >= 0) return r2.length === 1 ? this[n2(311)].delete(e2) : r2.splice(i2, 1), true;
        }
        return false;
      }
    }
    get(e2) {
      return this.map.get(e2) ?? [];
    }
    getStream(e2) {
      let t2 = this.map.get(e2);
      return t2 ? R(t2) : Yi;
    }
    has(e2, t2) {
      let n2 = s;
      if (t2 === void 0) return this.map[n2(714)](e2);
      {
        let n3 = this.map.get(e2);
        return n3 ? n3.indexOf(t2) >= 0 : false;
      }
    }
    add(e2, t2) {
      let n2 = s;
      return this[n2(311)].has(e2) ? this.map[n2(1419)](e2).push(t2) : this.map.set(e2, [
        t2
      ]), this;
    }
    addAll(e2, t2) {
      let n2 = s;
      return this.map.has(e2) ? this.map[n2(1419)](e2).push(...t2) : this.map.set(e2, Array.from(t2)), this;
    }
    forEach(e2) {
      this.map.forEach((t2, n2) => t2.forEach((t3) => e2(t3, n2, this)));
    }
    [nn]() {
      return this.entries().iterator();
    }
    [s(1788)]() {
      let e2 = s;
      return R(this.map.entries())[e2(548)](([e3, t2]) => t2.map((t3) => [
        e3,
        t3
      ]));
    }
    keys() {
      let e2 = s;
      return R(this[e2(311)].keys());
    }
    values() {
      return R(this.map.values()).flat();
    }
    entriesGroupedByKey() {
      let e2 = s;
      return R(this[e2(311)].entries());
    }
  }, M(lt, s(1470)), lt), $P = (ut = class {
    get size() {
      return this.map.size;
    }
    constructor(e2) {
      if (this.map = /* @__PURE__ */ new Map(), this.inverse = /* @__PURE__ */ new Map(), e2) for (let [t2, n2] of e2) this.set(t2, n2);
    }
    clear() {
      this.map.clear(), this.inverse.clear();
    }
    set(e2, t2) {
      let n2 = s;
      return this[n2(311)][n2(389)](e2, t2), this.inverse.set(t2, e2), this;
    }
    get(e2) {
      return this.map.get(e2);
    }
    getKey(e2) {
      let t2 = s;
      return this.inverse[t2(1419)](e2);
    }
    delete(e2) {
      let t2 = this.map.get(e2);
      return t2 === void 0 ? false : (this.map.delete(e2), this.inverse.delete(t2), true);
    }
  }, M(ut, `BiMap`), ut), eF = (dt = class {
    constructor(e2) {
      let t2 = s;
      this.nameProvider = e2[t2(1658)].NameProvider, this[t2(852)] = e2.workspace.AstNodeDescriptionProvider;
    }
    [s(1744)](e2) {
      let t2 = s;
      var n2 = this;
      return a(function* (e3, r2 = Z.CancellationToken[t2(1459)]) {
        let i2 = t2;
        return n2.collectExportedSymbolsForNode(e3[i2(1165)].value, e3, void 0, r2);
      }).apply(this, arguments);
    }
    collectExportedSymbolsForNode(e2, t2) {
      var n2 = this;
      return a(function* (e3, t3, r2 = oa, i2 = Z.CancellationToken.None) {
        let a2 = [];
        n2.addExportedSymbol(e3, a2, t3);
        for (let o2 of r2(e3)) yield AP(i2), n2.addExportedSymbol(o2, a2, t3);
        return a2;
      }).apply(this, arguments);
    }
    addExportedSymbol(e2, t2, n2) {
      let r2 = s, i2 = this.nameProvider[r2(460)](e2);
      i2 && t2.push(this.descriptions.createDescription(e2, i2, n2));
    }
    collectLocalSymbols(e2) {
      let t2 = s;
      var n2 = this;
      return a(function* (e3, r2 = Z[t2(1784)][t2(1459)]) {
        let i2 = t2, a2 = e3[i2(1165)][i2(1371)], o2 = new QP();
        for (let t3 of sa(a2)) yield AP(r2), n2.addLocalSymbol(t3, e3, o2);
        return o2;
      }).apply(this, arguments);
    }
    addLocalSymbol(e2, t2, n2) {
      let r2 = e2.$container;
      if (r2) {
        let i2 = this.nameProvider.getName(e2);
        i2 && n2.add(r2, this.descriptions.createDescription(e2, i2, t2));
      }
    }
  }, M(dt, `DefaultScopeComputation`), dt), tF = (ft = class {
    constructor(e2, t2, n2) {
      this.elements = e2, this.outerScope = t2, this.caseInsensitive = (n2 == null ? void 0 : n2.caseInsensitive) ?? false, this.concatOuterScope = (n2 == null ? void 0 : n2.concatOuterScope) ?? true;
    }
    getAllElements() {
      let e2 = s;
      return this.outerScope ? this.elements.concat(this.outerScope[e2(932)]()) : this[e2(1297)];
    }
    getElement(e2) {
      let t2 = s, n2 = this[t2(940)] ? e2.toLowerCase() : e2, r2 = this.caseInsensitive ? this[t2(1297)].find((e3) => e3.name.toLowerCase() === n2) : this[t2(1297)].find((t3) => t3.name === e2);
      if (r2) return r2;
      if (this.outerScope) return this.outerScope.getElement(e2);
    }
    getElements(e2) {
      let t2 = s, n2 = this.caseInsensitive ? e2.toLowerCase() : e2, r2 = this.caseInsensitive ? this.elements.filter((e3) => e3.name[t2(462)]() === n2) : this.elements.filter((t3) => t3.name === e2);
      return (this.concatOuterScope || r2.isEmpty()) && this.outerScope ? r2.concat(this.outerScope.getElements(e2)) : r2;
    }
  }, M(ft, s(1340)), ft), nF = (pt = class {
    constructor(e2, t2, n2) {
      let r2 = s;
      this.elements = /* @__PURE__ */ new Map(), this[r2(940)] = (n2 == null ? void 0 : n2.caseInsensitive) ?? false, this.concatOuterScope = (n2 == null ? void 0 : n2.concatOuterScope) ?? true;
      for (let t3 of e2) {
        let e3 = this[r2(940)] ? t3.name[r2(462)]() : t3[r2(747)];
        this[r2(1297)].set(e3, t3);
      }
      this.outerScope = t2;
    }
    getElement(e2) {
      let t2 = s, n2 = this.caseInsensitive ? e2.toLowerCase() : e2, r2 = this.elements[t2(1419)](n2);
      if (r2) return r2;
      if (this[t2(1359)]) return this[t2(1359)].getElement(e2);
    }
    getElements(e2) {
      let t2 = s, n2 = this.caseInsensitive ? e2.toLowerCase() : e2, r2 = this[t2(1297)].get(n2), i2 = r2 ? [
        r2
      ] : [];
      return (this.concatOuterScope || i2.length > 0) && this.outerScope ? R(i2).concat(this[t2(1359)].getElements(e2)) : R(i2);
    }
    getAllElements() {
      let e2 = R(this.elements.values());
      return this.outerScope && (e2 = e2.concat(this.outerScope.getAllElements())), e2;
    }
  }, M(pt, `MapScope`), pt), rF = (mt = class {
    constructor(e2, t2, n2) {
      let r2 = s;
      this.elements = new QP(), this.caseInsensitive = (n2 == null ? void 0 : n2.caseInsensitive) ?? false, this[r2(1189)] = (n2 == null ? void 0 : n2.concatOuterScope) ?? true;
      for (let t3 of e2) {
        let e3 = this[r2(940)] ? t3.name.toLowerCase() : t3.name;
        this.elements.add(e3, t3);
      }
      this.outerScope = t2;
    }
    getElement(e2) {
      let t2 = s, n2 = this.caseInsensitive ? e2.toLowerCase() : e2, r2 = this.elements[t2(1419)](n2)[0];
      if (r2) return r2;
      if (this.outerScope) return this.outerScope.getElement(e2);
    }
    [s(1207)](e2) {
      let t2 = s, n2 = this[t2(940)] ? e2[t2(462)]() : e2, r2 = this.elements.get(n2);
      return (this[t2(1189)] || r2.length === 0) && this.outerScope ? R(r2).concat(this.outerScope.getElements(e2)) : R(r2);
    }
    getAllElements() {
      let e2 = s, t2 = R(this.elements.values());
      return this.outerScope && (t2 = t2[e2(1758)](this.outerScope.getAllElements())), t2;
    }
  }, M(mt, `MultiMapScope`), mt), iF = {
    getElement() {
    },
    getElements() {
      return Yi;
    },
    getAllElements() {
      return Yi;
    }
  }, aF = (ht = class {
    constructor() {
      this.toDispose = [], this.isDisposed = false;
    }
    onDispose(e2) {
      this.toDispose.push(e2);
    }
    dispose() {
      this.throwIfDisposed(), this.clear(), this.isDisposed = true, this.toDispose.forEach((e2) => e2.dispose());
    }
    throwIfDisposed() {
      let e2 = s;
      if (this[e2(1725)]) throw Error(`This cache has already been disposed`);
    }
  }, M(ht, `DisposableCache`), ht), oF = (gt = class extends aF {
    constructor() {
      super(...arguments), this.cache = /* @__PURE__ */ new Map();
    }
    has(e2) {
      let t2 = s;
      return this[t2(1466)](), this.cache.has(e2);
    }
    set(e2, t2) {
      this.throwIfDisposed(), this.cache.set(e2, t2);
    }
    get(e2, t2) {
      let n2 = s;
      if (this.throwIfDisposed(), this.cache.has(e2)) return this.cache.get(e2);
      if (t2) {
        let r2 = t2();
        return this.cache[n2(389)](e2, r2), r2;
      } else return;
    }
    delete(e2) {
      let t2 = s;
      return this.throwIfDisposed(), this.cache[t2(565)](e2);
    }
    clear() {
      let e2 = s;
      this.throwIfDisposed(), this[e2(374)].clear();
    }
  }, M(gt, s(1198)), gt), sF = (_t = class extends aF {
    constructor(e2) {
      super(), this.cache = /* @__PURE__ */ new Map(), this.converter = e2 ?? ((e3) => e3);
    }
    has(e2, t2) {
      return this.throwIfDisposed(), this.cacheForContext(e2).has(t2);
    }
    set(e2, t2, n2) {
      this.throwIfDisposed(), this.cacheForContext(e2).set(t2, n2);
    }
    get(e2, t2, n2) {
      this.throwIfDisposed();
      let r2 = this.cacheForContext(e2);
      if (r2.has(t2)) return r2.get(t2);
      if (n2) {
        let e3 = n2();
        return r2.set(t2, e3), e3;
      } else return;
    }
    [s(565)](e2, t2) {
      let n2 = s;
      return this[n2(1466)](), this.cacheForContext(e2).delete(t2);
    }
    clear(e2) {
      let t2 = s;
      if (this.throwIfDisposed(), e2) {
        let t3 = this.converter(e2);
        this.cache.delete(t3);
      } else this[t2(374)].clear();
    }
    cacheForContext(e2) {
      let t2 = this.converter(e2), n2 = this.cache.get(t2);
      return n2 || (n2 = /* @__PURE__ */ new Map(), this.cache.set(t2, n2)), n2;
    }
  }, M(_t, `ContextCache`), _t), cF = (vt = class extends sF {
    constructor(e2, t2) {
      let n2 = s;
      super((e3) => e3[n2(752)]()), t2 ? (this.toDispose.push(e2.workspace[n2(300)].onDocumentPhase(t2, (e3) => {
        let t3 = n2;
        this.clear(e3.uri[t3(752)]());
      })), this.toDispose.push(e2.workspace.DocumentBuilder.onUpdate((e3, t3) => {
        for (let e4 of t3) this.clear(e4);
      }))) : this[n2(1192)][n2(1168)](e2.workspace[n2(300)].onUpdate((e3, t3) => {
        let n3 = e3.concat(t3);
        for (let e4 of n3) this.clear(e4);
      }));
    }
  }, M(vt, `DocumentCache`), vt), lF = (yt = class extends oF {
    constructor(e2, t2) {
      let n2 = s;
      super(), t2 ? (this.toDispose[n2(1168)](e2.workspace.DocumentBuilder.onBuildPhase(t2, () => {
        let e3 = n2;
        this[e3(563)]();
      })), this.toDispose[n2(1168)](e2.workspace[n2(300)].onUpdate((e3, t3) => {
        t3.length > 0 && this.clear();
      }))) : this[n2(1192)].push(e2.workspace.DocumentBuilder.onUpdate(() => {
        this.clear();
      }));
    }
  }, M(yt, s(1709)), yt), uF = (bt = class {
    constructor(e2) {
      let t2 = s;
      this.reflection = e2.shared.AstReflection, this.nameProvider = e2.references.NameProvider, this.descriptions = e2[t2(911)].AstNodeDescriptionProvider, this[t2(1447)] = e2.shared.workspace[t2(1594)], this[t2(1795)] = new lF(e2.shared);
    }
    getScope(e2) {
      let t2 = s, n2 = [], r2 = this.reflection[t2(263)](e2), i2 = ra(e2.container)[t2(868)];
      if (i2) {
        let a3 = e2.container;
        do
          i2.has(a3) && n2.push(i2.getStream(a3).filter((e3) => this.reflection.isSubtype(e3[t2(1487)], r2))), a3 = a3.$container;
        while (a3);
      }
      let a2 = this.getGlobalScope(r2, e2);
      for (let e3 = n2.length - 1; e3 >= 0; e3--) a2 = this[t2(587)](n2[e3], a2);
      return a2;
    }
    [s(587)](e2, t2, n2) {
      return new tF(R(e2), t2, n2);
    }
    createScopeForNodes(e2, t2, n2) {
      let r2 = s;
      return new tF(R(e2)[r2(311)]((e3) => {
        let t3 = this.nameProvider.getName(e3);
        if (t3) return this.descriptions.createDescription(e3, t3);
      })[r2(1369)](), t2, n2);
    }
    getGlobalScope(e2, t2) {
      let n2 = s;
      return this[n2(1795)].get(e2, () => new rF(this.indexManager.allElements(e2)));
    }
  }, M(bt, `DefaultScopeProvider`), bt);
  function dF(e2) {
    return typeof e2.$comment == `string`;
  }
  M(dF, `isAstNodeWithComment`);
  function fF(e2) {
    return typeof e2 == `object` && !!e2 && (`$ref` in e2 || `$error` in e2);
  }
  M(fF, `isIntermediateReference`);
  var pF = (xt = class {
    constructor(e2) {
      let t2 = s;
      this.ignoreProperties = /* @__PURE__ */ new Set([
        `$container`,
        `$containerProperty`,
        `$containerIndex`,
        `$document`,
        `$cstNode`
      ]), this[t2(1630)] = e2.shared[t2(911)].LangiumDocuments, this.astNodeLocator = e2.workspace.AstNodeLocator, this.nameProvider = e2.references.NameProvider, this.commentProvider = e2[t2(739)].CommentProvider;
    }
    serialize(e2, t2) {
      let n2 = s, r2 = t2 ?? {}, i2 = t2 == null ? void 0 : t2.replacer, a2 = M((e3, t3) => this[n2(1456)](e3, t3, r2), `defaultReplacer`), o2 = i2 ? (e3, t3) => i2(e3, t3, a2) : a2;
      try {
        return this.currentDocument = ra(e2), JSON.stringify(e2, o2, t2 == null ? void 0 : t2[n2(529)]);
      } finally {
        this.currentDocument = void 0;
      }
    }
    deserialize(e2, t2) {
      let n2 = s, r2 = t2 ?? {}, i2 = JSON[n2(1343)](e2);
      return this.linkNode(i2, i2, r2), i2;
    }
    replacer(e2, t2, { refText: r2, sourceText: i2, textRegions: a2, comments: o2, uriConverter: c2 }) {
      var _a2, _b2, _c2;
      let l2 = s;
      if (!this.ignoreProperties.has(e2)) if (Ri(t2)) {
        let e3 = t2.ref, n2 = r2 ? t2[l2(825)] : void 0;
        if (e3) {
          let t3 = ra(e3), r3 = ``;
          this[l2(262)] && this.currentDocument !== t3 && (r3 = c2 ? c2(t3.uri, e3) : t3.uri.toString());
          let i3 = this.astNodeLocator.getAstNodePath(e3);
          return {
            $ref: r3 + `#` + i3,
            $refText: n2
          };
        } else return {
          $error: ((_a2 = t2[l2(1527)]) == null ? void 0 : _a2[l2(1417)]) ?? `Could not resolve reference`,
          $refText: n2
        };
      } else if (zi(t2)) {
        let e3 = r2 ? t2.$refText : void 0, n2 = [];
        for (let e4 of t2.items) {
          let t3 = e4.ref, r3 = ra(e4.ref), i3 = ``;
          this[l2(262)] && this.currentDocument !== r3 && (i3 = c2 ? c2(r3.uri, t3) : r3.uri.toString());
          let a3 = this.astNodeLocator.getAstNodePath(t3);
          n2.push(i3 + `#` + a3);
        }
        return {
          $refs: n2,
          $refText: e3
        };
      } else if (Li(t2)) {
        let r3;
        if (a2 && (r3 = this.addAstNodeRegionWithAssignmentsTo(n({}, t2)), (!e2 || t2.$document) && r3 != null && r3.$textRegion) && (r3.$textRegion.documentURI = (_b2 = this.currentDocument) == null ? void 0 : _b2.uri.toString()), i2 && !e2 && (r3 ?? (r3 = n({}, t2)), r3.$sourceText = (_c2 = t2[l2(1115)]) == null ? void 0 : _c2.text), o2) {
          r3 ?? (r3 = n({}, t2));
          let e3 = this.commentProvider.getComment(t2);
          e3 && (r3.$comment = e3.replace(/\r/g, ``));
        }
        return r3 ?? t2;
      } else return t2;
    }
    addAstNodeRegionWithAssignmentsTo(e2) {
      let t2 = s, n2 = M((e3) => ({
        offset: e3.offset,
        end: e3.end,
        length: e3.length,
        range: e3.range
      }), `createDocumentSegment`);
      if (e2.$cstNode) {
        let r2 = e2.$textRegion = n2(e2.$cstNode), i2 = r2.assignments = {};
        return Object.keys(e2).filter((e3) => !e3[t2(1618)](`$`))[t2(396)]((t3) => {
          let r3 = gc(e2.$cstNode, t3).map(n2);
          r3.length !== 0 && (i2[t3] = r3);
        }), e2;
      }
    }
    linkNode(e2, t2, n2, r2, i2, a2) {
      let o2 = s;
      for (let [r3, i3] of Object.entries(e2)) if (Array.isArray(i3)) for (let a3 = 0; a3 < i3[o2(1663)]; a3++) {
        let o3 = i3[a3];
        fF(o3) ? i3[a3] = this.reviveReference(e2, r3, t2, o3, n2) : Li(o3) && this.linkNode(o3, t2, n2, e2, r3, a3);
      }
      else fF(i3) ? e2[r3] = this.reviveReference(e2, r3, t2, i3, n2) : Li(i3) && this.linkNode(i3, t2, n2, e2, r3);
      let c2 = e2;
      c2[o2(1166)] = r2, c2.$containerProperty = i2, c2.$containerIndex = a2;
    }
    reviveReference(e2, t2, n2, r2, i2) {
      let a2 = s, o2 = r2.$refText, c2 = r2.$error, l2;
      if (r2.$ref) {
        let e3 = this.getRefNode(n2, r2.$ref, i2.uriConverter);
        if (Li(e3)) return o2 || (o2 = this[a2(1484)].getName(e3)), {
          $refText: o2 ?? ``,
          ref: e3
        };
        c2 = e3;
      } else if (r2.$refs) {
        let e3 = [];
        for (let t3 of r2.$refs) {
          let r3 = this.getRefNode(n2, t3, i2.uriConverter);
          Li(r3) && e3.push({
            ref: r3
          });
        }
        if (e3.length === 0) l2 = {
          $refText: o2 ?? ``,
          items: e3
        }, c2 ?? (c2 = `Could not resolve multi-reference`);
        else return {
          $refText: o2 ?? ``,
          items: e3
        };
      }
      if (c2) return l2 ?? (l2 = {
        $refText: o2 ?? ``,
        ref: void 0
      }), l2.error = {
        info: {
          container: e2,
          property: t2,
          reference: l2
        },
        message: c2
      }, l2;
    }
    getRefNode(e2, t2, n2) {
      let r2 = s;
      try {
        let i2 = t2.indexOf(`#`);
        if (i2 === 0) return this.astNodeLocator.getAstNode(e2, t2.substring(1)) || `Could not resolve path: ` + t2;
        if (i2 < 0) {
          let e3 = n2 ? n2(t2) : VP.parse(t2), i3 = this.langiumDocuments.getDocument(e3);
          return i3 ? i3.parseResult[r2(1371)] : r2(1055) + t2;
        }
        let a2 = n2 ? n2(t2[r2(777)](0, i2)) : VP.parse(t2.substring(0, i2)), o2 = this.langiumDocuments.getDocument(a2);
        return o2 ? i2 === t2.length - 1 ? o2.parseResult.value : this.astNodeLocator.getAstNode(o2.parseResult.value, t2.substring(i2 + 1)) || r2(640) + t2 : `Could not find document for URI: ` + t2;
      } catch (e3) {
        return String(e3);
      }
    }
  }, M(xt, `DefaultJsonSerializer`), xt), mF = (St = class {
    get map() {
      return this.fileExtensionMap;
    }
    constructor(e2) {
      let t2 = s;
      this.languageIdMap = /* @__PURE__ */ new Map(), this.fileExtensionMap = /* @__PURE__ */ new Map(), this.fileNameMap = /* @__PURE__ */ new Map(), this[t2(1204)] = e2 == null ? void 0 : e2.workspace.TextDocuments;
    }
    register(e2) {
      let t2 = s, n2 = e2.LanguageMetaData;
      for (let r2 of n2[t2(278)]) this.fileExtensionMap.has(r2) && console.warn(t2(1621) + r2 + t2(1544) + n2.languageId + `'.`), this[t2(1258)].set(r2, e2);
      if (n2.fileNames) for (let r2 of n2.fileNames) this.fileNameMap.has(r2) && console.warn(`The file name ` + r2 + t2(1544) + n2.languageId + `'.`), this.fileNameMap.set(r2, e2);
      this.languageIdMap[t2(389)](n2.languageId, e2);
    }
    getServices(e2) {
      let t2 = s;
      var n2;
      if (this.languageIdMap.size === 0) throw Error(t2(1185));
      let r2 = (n2 = this.textDocuments) == null || (n2 = n2.get(e2)) == null ? void 0 : n2.languageId;
      if (r2 !== void 0) {
        let e3 = this.languageIdMap.get(r2);
        if (e3) return e3;
      }
      let i2 = UP.extname(e2), a2 = UP.basename(e2), o2 = this[t2(1161)].get(a2) ?? this.fileExtensionMap.get(i2);
      if (!o2) throw Error(r2 ? t2(725) + i2 + `' for language '` + r2 + `'.` : `The service registry contains no services for the extension '` + i2 + `'.`);
      return o2;
    }
    hasServices(e2) {
      try {
        return this.getServices(e2), true;
      } catch {
        return false;
      }
    }
    get all() {
      return Array.from(this.languageIdMap.values());
    }
  }, M(St, `DefaultServiceRegistry`), St);
  function hF(e2) {
    return {
      code: e2
    };
  }
  M(hF, s(1542));
  var gF;
  (function(e2) {
    e2.defaults = [
      s(1190),
      `slow`,
      `built-in`
    ], e2.all = e2.defaults;
  })(gF || (gF = {}));
  var _F = (Ct = class {
    constructor(e2) {
      let t2 = s;
      this[t2(1788)] = new QP(), this.knownCategories = new Set(gF.defaults), this[t2(1386)] = [], this.entriesAfter = [], this.reflection = e2.shared.AstReflection;
    }
    register(e2, t2 = this, n2 = `fast`) {
      let r2 = s;
      if (n2 === r2(665)) throw Error(r2(1288));
      this[r2(1293)].add(n2);
      for (let [i2, a2] of Object[r2(1788)](e2)) {
        let e3 = a2;
        if (Array.isArray(e3)) for (let r3 of e3) {
          let e4 = {
            check: this.wrapValidationException(r3, t2),
            category: n2
          };
          this.addEntry(i2, e4);
        }
        else if (typeof e3 == `function`) {
          let a3 = {
            check: this.wrapValidationException(e3, t2),
            category: n2
          };
          this[r2(1186)](i2, a3);
        } else Ls(e3);
      }
    }
    wrapValidationException(e2, t2) {
      var n2 = this;
      return (function() {
        var r2 = a(function* (r3, i2, a2) {
          yield n2.handleException(() => e2.call(t2, r3, i2, a2), `An error occurred during validation`, i2, r3);
        });
        return function(e3, t3, n3) {
          return r2.apply(this, arguments);
        };
      })();
    }
    handleException(e2, t2, n2, r2) {
      return a(function* () {
        try {
          yield e2();
        } catch (e3) {
          if (kP(e3)) throw e3;
          console.error(t2 + `:`, e3), e3 instanceof Error && e3.stack && console.error(e3.stack), n2(`error`, t2 + `: ` + (e3 instanceof Error ? e3.message : String(e3)), {
            node: r2
          });
        }
      })();
    }
    addEntry(e2, t2) {
      if (e2 === `AstNode`) {
        this.entries.add(`AstNode`, t2);
        return;
      }
      for (let n2 of this.reflection.getAllSubTypes(e2)) this.entries.add(n2, t2);
    }
    getChecks(e2, t2) {
      let n2 = R(this.entries.get(e2)).concat(this.entries.get(`AstNode`));
      return t2 && (n2 = n2.filter((e3) => t2.includes(e3.category))), n2.map((e3) => e3.check);
    }
    registerBeforeDocument(e2, t2 = this) {
      let n2 = s;
      this[n2(1386)].push(this.wrapPreparationException(e2, `An error occurred during set-up of the validation`, t2));
    }
    registerAfterDocument(e2, t2 = this) {
      let n2 = s;
      this.entriesAfter[n2(1168)](this[n2(343)](e2, `An error occurred during tear-down of the validation`, t2));
    }
    wrapPreparationException(e2, t2, n2) {
      var r2 = this;
      return (function() {
        var i2 = a(function* (i3, a2, o2, s2) {
          yield r2.handleException(() => e2.call(n2, i3, a2, o2, s2), t2, a2, i3);
        });
        return function(e3, t3, n3, r3) {
          return i2[X(1120)](this, arguments);
        };
      })();
    }
    get checksBefore() {
      return this.entriesBefore;
    }
    get [s(803)]() {
      return this.entriesAfter;
    }
    getAllValidationCategories(e2) {
      return this.knownCategories;
    }
  }, M(Ct, s(292)), Ct), vF = Object[s(440)]({
    validateNode: true,
    validateChildren: true
  }), yF = (wt = class {
    constructor(e2) {
      let t2 = s;
      this.validationRegistry = e2[t2(1081)].ValidationRegistry, this.metadata = e2.LanguageMetaData, this.profiler = e2[t2(545)].profilers.LangiumProfiler, this[t2(679)] = e2.LanguageMetaData.languageId;
    }
    validateDocument(e2) {
      let t2 = s;
      var n2 = this;
      return a(function* (e3, r2 = {}, i2 = Z[t2(1784)][t2(1459)]) {
        let a2 = t2, o2 = e3.parseResult, s2 = [];
        if (yield AP(i2), (!r2.categories || r2.categories.includes(`built-in`)) && (n2.processLexingErrors(o2, s2, r2), r2.stopAfterLexingErrors && s2.some((e4) => {
          var _a2;
          let t3 = X;
          return ((_a2 = e4.data) == null ? void 0 : _a2[t3(1118)]) === CF.LexingError;
        }) || (n2.processParsingErrors(o2, s2, r2), r2[a2(1356)] && s2.some((e4) => {
          var _a2;
          return ((_a2 = e4.data) == null ? void 0 : _a2.code) === CF.ParsingError;
        })) || (n2.processLinkingErrors(e3, s2, r2), r2.stopAfterLinkingErrors && s2[a2(867)]((e4) => {
          var _a2;
          let t3 = a2;
          return ((_a2 = e4.data) == null ? void 0 : _a2[t3(1118)]) === CF.LinkingError;
        })))) return s2;
        try {
          s2.push(...yield n2.validateAst(o2[a2(1371)], r2, i2));
        } catch (e4) {
          if (kP(e4)) throw e4;
          console.error(`An error occurred during validation:`, e4);
        }
        return yield AP(i2), s2;
      }).apply(this, arguments);
    }
    processLexingErrors(e2, t2, n2) {
      var _a2;
      let r2 = s, i2 = [
        ...e2[r2(363)],
        ...((_a2 = e2.lexerReport) == null ? void 0 : _a2.diagnostics) ?? []
      ];
      for (let e3 of i2) {
        let n3 = e3.severity ?? `error`, i3 = {
          severity: xF(n3),
          range: {
            start: {
              line: e3.line - 1,
              character: e3[r2(882)] - 1
            },
            end: {
              line: e3.line - 1,
              character: e3.column + e3.length - 1
            }
          },
          message: e3.message,
          data: SF(n3),
          source: this.getSource()
        };
        t2.push(i3);
      }
    }
    processParsingErrors(e2, t2, n2) {
      let r2 = s;
      for (let n3 of e2.parserErrors) {
        let e3;
        if (isNaN(n3.token.startOffset)) {
          if (`previousToken` in n3) {
            let t3 = n3.previousToken;
            if (isNaN(t3.startOffset)) {
              let t4 = {
                line: 0,
                character: 0
              };
              e3 = {
                start: t4,
                end: t4
              };
            } else {
              let n4 = {
                line: t3.endLine - 1,
                character: t3.endColumn
              };
              e3 = {
                start: n4,
                end: n4
              };
            }
          }
        } else e3 = gs(n3[r2(1408)]);
        if (e3) {
          let i2 = {
            severity: xF(`error`),
            range: e3,
            message: n3[r2(1417)],
            data: hF(CF.ParsingError),
            source: this.getSource()
          };
          t2.push(i2);
        }
      }
    }
    [s(1023)](e2, t2, n2) {
      var _a2;
      let r2 = s;
      for (let n3 of e2.references) {
        let e3 = n3.error;
        if (e3) {
          let i2 = {
            node: e3.info.container,
            range: (_a2 = n3[r2(333)]) == null ? void 0 : _a2.range,
            property: e3[r2(1706)][r2(257)],
            index: e3.info[r2(1568)],
            data: {
              code: CF[r2(319)],
              containerType: e3.info.container.$type,
              property: e3.info.property,
              refText: e3.info[r2(488)].$refText
            }
          };
          t2.push(this.toDiagnostic(`error`, e3.message, i2));
        }
      }
    }
    validateAst(e2, t2) {
      var n2 = this;
      return a(function* (e3, t3, r2 = Z.CancellationToken.None) {
        let i2 = [], a2 = M((e4, t4, r3) => {
          let a3 = X;
          i2.push(n2[a3(819)](e4, t4, r3));
        }, `acceptor`);
        return yield n2.validateAstBefore(e3, t3, a2, r2), yield n2.validateAstNodes(e3, t3, a2, r2), yield n2.validateAstAfter(e3, t3, a2, r2), i2;
      }).apply(this, arguments);
    }
    [s(1555)](e2, t2, n2) {
      var r2 = this;
      return a(function* (e3, t3, n3, i2 = Z.CancellationToken.None) {
        let a2 = r2[X(1757)].checksBefore;
        for (let r3 of a2) yield AP(i2), yield r3(e3, n3, t3.categories ?? [], i2);
      }).apply(this, arguments);
    }
    validateAstNodes(e2, t2, n2) {
      var r2 = this;
      return a(function* (e3, t3, n3, i2 = Z.CancellationToken.None) {
        let a2 = X;
        var o2;
        if ((o2 = r2.profiler) != null && o2.isActive(`validating`)) {
          let o3 = r2.profiler.createTask(`validating`, r2.languageId);
          o3.start();
          try {
            let s2 = ca(e3).iterator();
            for (let e4 of s2) {
              o3.startSubTask(e4.$type);
              let c2 = r2.validateSingleNodeOptions(e4, t3);
              if (c2.validateNode) try {
                let a3 = r2.validationRegistry.getChecks(e4.$type, t3.categories);
                for (let t4 of a3) yield t4(e4, n3, i2);
              } finally {
                o3.stopSubTask(e4[a2(798)]);
              }
              c2.validateChildren || s2.prune();
            }
          } finally {
            o3.stop();
          }
        } else {
          let a3 = ca(e3).iterator();
          for (let e4 of a3) {
            yield AP(i2);
            let o3 = r2.validateSingleNodeOptions(e4, t3);
            if (o3.validateNode) {
              let a4 = r2.validationRegistry.getChecks(e4.$type, t3.categories);
              for (let t4 of a4) yield t4(e4, n3, i2);
            }
            o3.validateChildren || a3.prune();
          }
        }
      }).apply(this, arguments);
    }
    validateSingleNodeOptions(e2, t2) {
      return vF;
    }
    validateAstAfter(e2, t2, n2) {
      let r2 = s;
      var i2 = this;
      return a(function* (e3, t3, n3, r3 = Z.CancellationToken.None) {
        let a2 = X, o2 = i2.validationRegistry.checksAfter;
        for (let i3 of o2) yield AP(r3), yield i3(e3, n3, t3[a2(334)] ?? [], r3);
      })[r2(1120)](this, arguments);
    }
    toDiagnostic(e2, t2, n2) {
      return {
        message: t2,
        range: bF(n2),
        severity: xF(e2),
        code: n2.code,
        codeDescription: n2.codeDescription,
        tags: n2.tags,
        relatedInformation: n2.relatedInformation,
        data: n2.data,
        source: this.getSource()
      };
    }
    [s(1016)]() {
      return this.metadata.languageId;
    }
  }, M(wt, s(1064)), wt);
  function bF(e2) {
    let t2 = s;
    if (e2.range) return e2.range;
    let n2;
    return typeof e2.property == `string` ? n2 = _c(e2.node.$cstNode, e2.property, e2[t2(1568)]) : typeof e2.keyword == t2(1730) && (n2 = bc(e2[t2(454)].$cstNode, e2.keyword, e2.index)), n2 ?? (n2 = e2[t2(454)].$cstNode), n2 ? n2.range : {
      start: {
        line: 0,
        character: 0
      },
      end: {
        line: 0,
        character: 0
      }
    };
  }
  M(bF, `getDiagnosticRange`);
  function xF(e2) {
    switch (e2) {
      case `error`:
        return 1;
      case `warning`:
        return 2;
      case `info`:
        return 3;
      case `hint`:
        return 4;
      default:
        throw Error(`Invalid diagnostic severity: ` + e2);
    }
  }
  M(xF, `toDiagnosticSeverity`);
  function SF(e2) {
    let t2 = s;
    switch (e2) {
      case `error`:
        return hF(CF.LexingError);
      case t2(1197):
        return hF(CF.LexingWarning);
      case t2(1706):
        return hF(CF.LexingInfo);
      case `hint`:
        return hF(CF.LexingHint);
      default:
        throw Error(`Invalid diagnostic severity: ` + e2);
    }
  }
  M(SF, `toDiagnosticData`);
  var CF;
  (function(e2) {
    let t2 = s;
    e2[t2(738)] = `lexing-error`, e2.LexingWarning = t2(638), e2.LexingInfo = t2(1432), e2.LexingHint = t2(1206), e2.ParsingError = `parsing-error`, e2.LinkingError = `linking-error`;
  })(CF || (CF = {}));
  var wF = (Tt = class {
    constructor(e2) {
      let t2 = s;
      this[t2(1501)] = e2.workspace.AstNodeLocator, this[t2(1484)] = e2.references.NameProvider;
    }
    createDescription(e2, t2, n2) {
      let r2 = n2 ?? ra(e2);
      t2 ?? (t2 = this.nameProvider.getName(e2));
      let i2 = this.astNodeLocator.getAstNodePath(e2);
      if (!t2) throw Error(`Node at path ` + i2 + ` has no name.`);
      let a2, o2 = M(() => a2 ?? (a2 = _s(this.nameProvider.getNameNode(e2) ?? e2.$cstNode)), `nameSegmentGetter`);
      return {
        node: e2,
        name: t2,
        get nameSegment() {
          return o2();
        },
        selectionSegment: _s(e2.$cstNode),
        type: e2.$type,
        documentUri: r2.uri,
        path: i2
      };
    }
  }, M(Tt, `DefaultAstNodeDescriptionProvider`), Tt), TF = (Et = class {
    constructor(e2) {
      this.nodeLocator = e2.workspace.AstNodeLocator;
    }
    createDescriptions(e2) {
      let t2 = s;
      var n2 = this;
      return a(function* (e3, r2 = Z[t2(1784)].None) {
        let i2 = t2, a2 = [], o2 = e3[i2(1165)].value;
        for (let e4 of ca(o2)) yield AP(r2), ua(e4).forEach((e5) => {
          e5.reference.error || a2.push(...n2.createInfoDescriptions(e5));
        });
        return a2;
      }).apply(this, arguments);
    }
    createInfoDescriptions(e2) {
      let t2 = s, n2 = e2.reference;
      if (n2.error || !n2[t2(333)]) return [];
      let r2 = [];
      Ri(n2) && n2.$nodeDescription ? r2 = [
        n2[t2(1543)]
      ] : zi(n2) && (r2 = n2.items.map((e3) => e3.$nodeDescription)[t2(322)]((e3) => e3 !== void 0));
      let i2 = ra(e2[t2(1673)]).uri, a2 = this.nodeLocator.getAstNodePath(e2.container), o2 = [], c2 = _s(n2[t2(333)]);
      for (let e3 of r2) o2.push({
        sourceUri: i2,
        sourcePath: a2,
        targetUri: e3.documentUri,
        targetPath: e3.path,
        segment: c2,
        local: UP.equals(e3[t2(853)], i2)
      });
      return o2;
    }
  }, M(Et, `DefaultReferenceDescriptionProvider`), Et), EF = (Dt = class {
    constructor() {
      this.segmentSeparator = `/`, this.indexSeparator = `@`;
    }
    [s(1765)](e2) {
      let t2 = s;
      if (e2.$container) {
        let n2 = this[t2(1765)](e2.$container), r2 = this[t2(955)](e2);
        return n2 + this.segmentSeparator + r2;
      }
      return ``;
    }
    [s(955)]({ $containerProperty: e2, $containerIndex: t2 }) {
      if (!e2) throw Error(`Missing '$containerProperty' in AST node.`);
      return t2 === void 0 ? e2 : e2 + this.indexSeparator + t2;
    }
    getAstNode(e2, t2) {
      return t2.split(this.segmentSeparator).reduce((e3, t3) => {
        var _a2;
        let n2 = X;
        if (!e3 || t3.length === 0) return e3;
        let r2 = t3.indexOf(this[n2(1173)]);
        if (r2 > 0) {
          let n3 = t3.substring(0, r2), i2 = parseInt(t3.substring(r2 + 1));
          return (_a2 = e3[n3]) == null ? void 0 : _a2[i2];
        }
        return e3[t3];
      }, e2);
    }
  }, M(Dt, `DefaultAstNodeLocator`), Dt), DF = {};
  pn(DF, mn(Jr(), 1));
  var OF = (Ot = class {
    constructor(e2) {
      let t2 = s;
      this._ready = new MP(), this.onConfigurationSectionUpdateEmitter = new DF.Emitter(), this.settings = {}, this.workspaceConfig = false, this.serviceRegistry = e2[t2(972)];
    }
    get [s(417)]() {
      return this._ready.promise;
    }
    [s(1234)](e2) {
      var _a2;
      let t2 = s;
      this.workspaceConfig = ((_a2 = e2[t2(1545)][t2(911)]) == null ? void 0 : _a2[t2(1013)]) ?? false;
    }
    initialized(e2) {
      var t2 = this;
      return a(function* () {
        let n2 = X;
        if (t2.workspaceConfig) {
          if (e2.register) {
            let r2 = t2[n2(779)].all;
            e2.register({
              section: r2.map((e3) => t2.toSectionName(e3.LanguageMetaData.languageId))
            });
          }
          if (e2.fetchConfiguration) {
            let r2 = t2.serviceRegistry.all[n2(311)]((e3) => ({
              section: t2.toSectionName(e3[n2(290)].languageId)
            })), i2 = yield e2.fetchConfiguration(r2);
            r2.forEach((e3, n3) => {
              t2.updateSectionConfiguration(e3.section, i2[n3]);
            });
          }
        }
        t2._ready[n2(514)]();
      })();
    }
    updateConfiguration(e2) {
      let t2 = s;
      typeof e2.settings != `object` || e2[t2(796)] === null || Object.entries(e2.settings).forEach(([e3, t3]) => {
        this.updateSectionConfiguration(e3, t3), this.onConfigurationSectionUpdateEmitter.fire({
          section: e3,
          configuration: t3
        });
      });
    }
    updateSectionConfiguration(e2, t2) {
      this.settings[e2] = t2;
    }
    getConfiguration(e2, t2) {
      var n2 = this;
      return a(function* () {
        yield n2.ready;
        let r2 = n2.toSectionName(e2);
        if (n2.settings[r2]) return n2.settings[r2][t2];
      })();
    }
    toSectionName(e2) {
      return `` + e2;
    }
    get onConfigurationSectionUpdate() {
      return this.onConfigurationSectionUpdateEmitter.event;
    }
  }, M(Ot, `DefaultConfigurationProvider`), Ot), kF = mn(Pi(), 1), AF;
  (function(e2) {
    function t2(e3) {
      return {
        dispose: M(a(function* () {
          return yield e3();
        }), `dispose`)
      };
    }
    M(t2, `create`), e2.create = t2;
  })(AF || (AF = {}));
  var jF = (kt = class {
    constructor(e2) {
      let t2 = s;
      this.updateBuildOptions = {
        validation: {
          categories: [
            `built-in`,
            `fast`
          ]
        }
      }, this.updateListeners = [], this.buildPhaseListeners = new QP(), this.documentPhaseListeners = new QP(), this.buildState = /* @__PURE__ */ new Map(), this[t2(1631)] = /* @__PURE__ */ new Map(), this.currentState = Q.Changed, this.langiumDocuments = e2.workspace.LangiumDocuments, this.langiumDocumentFactory = e2.workspace.LangiumDocumentFactory, this[t2(1204)] = e2.workspace.TextDocuments, this.indexManager = e2.workspace[t2(1594)], this.fileSystemProvider = e2.workspace.FileSystemProvider, this.workspaceManager = () => e2.workspace.WorkspaceManager, this.serviceRegistry = e2.ServiceRegistry;
    }
    build(e2) {
      let t2 = s;
      var n2 = this;
      return a(function* (e3, r2 = {}, i2 = Z[t2(1784)].None) {
        var _a2;
        let a2 = t2;
        for (let t3 of e3) {
          let e4 = t3.uri.toString();
          if (t3.state === Q.Validated) {
            if (typeof r2.validation == `boolean` && r2.validation) n2[a2(1309)](t3, Q.IndexedReferences);
            else if (typeof r2.validation == `object`) {
              let i3 = n2.findMissingValidationCategories(t3, r2);
              i3.length > 0 && (n2.buildState[a2(389)](e4, {
                completed: false,
                options: {
                  validation: {
                    categories: i3
                  }
                },
                result: (_a2 = n2.buildState.get(e4)) == null ? void 0 : _a2.result
              }), t3.state = Q.IndexedReferences);
            }
          } else n2.buildState.delete(e4);
        }
        n2.currentState = Q.Changed, yield n2.emitUpdate(e3.map((e4) => e4.uri), []), yield n2.buildDocuments(e3, r2, i2);
      }).apply(this, arguments);
    }
    update(e2, t2) {
      let n2 = s;
      var r2 = this;
      return a(function* (e3, t3, i2 = Z[n2(1784)].None) {
        let a2 = n2;
        r2.currentState = Q.Changed;
        let o2 = [];
        for (let e4 of t3) {
          let t4 = r2.langiumDocuments.deleteDocuments(e4);
          for (let e5 of t4) o2.push(e5.uri), r2[a2(273)](e5);
        }
        let s2 = (yield Promise.all(e3.map((e4) => r2.findChangedUris(e4)))).flat();
        for (let e4 of s2) {
          let t4 = r2.langiumDocuments[a2(372)](e4);
          t4 === void 0 && (t4 = r2.langiumDocumentFactory.fromModel({
            $type: `INVALID`
          }, e4), t4.state = Q.Changed, r2[a2(1630)].addDocument(t4)), r2.resetToState(t4, Q.Changed);
        }
        let c2 = R(s2).concat(o2)[a2(311)]((e4) => e4.toString()).toSet();
        r2[a2(1630)][a2(592)].filter((e4) => !c2.has(e4.uri.toString()) && r2.shouldRelink(e4, c2)).forEach((e4) => r2.resetToState(e4, Q[a2(1579)])), yield r2.emitUpdate(s2, o2), yield AP(i2);
        let l2 = r2.sortDocuments(r2[a2(1630)][a2(592)][a2(322)]((e4) => {
          var t4;
          return e4.state < Q.Validated || !((t4 = r2.buildState.get(e4.uri.toString())) != null && t4.completed) || r2.resultsAreIncomplete(e4, r2.updateBuildOptions);
        }).toArray());
        yield r2.buildDocuments(l2, r2.updateBuildOptions, i2);
      }).apply(this, arguments);
    }
    resultsAreIncomplete(e2, t2) {
      return this.findMissingValidationCategories(e2, t2).length >= 1;
    }
    findMissingValidationCategories(e2, t2) {
      let n2 = s;
      var r2, i2;
      let a2 = this[n2(528)][n2(1419)](e2[n2(649)][n2(752)]()), o2 = this.serviceRegistry.getServices(e2[n2(649)]).validation.ValidationRegistry.getAllValidationCategories(e2), c2 = !(a2 == null || (r2 = a2.result) == null) && r2.validationChecks ? new Set(a2 == null || (i2 = a2[n2(1025)]) == null ? void 0 : i2.validationChecks) : a2 != null && a2.completed ? o2 : /* @__PURE__ */ new Set();
      return R(t2 === void 0 || t2.validation === true ? o2 : typeof t2.validation == `object` ? t2.validation.categories ?? o2 : []).filter((e3) => !c2.has(e3)).toArray();
    }
    findChangedUris(e2) {
      var t2 = this;
      return a(function* () {
        let n2 = X;
        var r2;
        if (t2[n2(1630)].getDocument(e2) ?? ((r2 = t2.textDocuments) != null && r2.get(e2))) return [
          e2
        ];
        try {
          let r3 = yield t2.fileSystemProvider.stat(e2);
          if (r3.isDirectory) return yield t2.workspaceManager().searchFolder(e2);
          if (t2[n2(603)]().shouldIncludeEntry(r3)) return [
            e2
          ];
        } catch {
        }
        return [];
      })();
    }
    emitUpdate(e2, t2) {
      var n2 = this;
      return a(function* () {
        let r2 = X;
        yield Promise.all(n2[r2(315)][r2(311)]((n3) => n3(e2, t2)));
      })();
    }
    sortDocuments(e2) {
      let t2 = 0, n2 = e2.length - 1;
      for (; t2 < n2; ) {
        for (; t2 < e2.length && this.hasTextDocument(e2[t2]); ) t2++;
        for (; n2 >= 0 && !this.hasTextDocument(e2[n2]); ) n2--;
        t2 < n2 && ([e2[t2], e2[n2]] = [
          e2[n2],
          e2[t2]
        ]);
      }
      return e2;
    }
    [s(728)](e2) {
      var t2;
      return !!((t2 = this.textDocuments) != null && t2.get(e2.uri));
    }
    shouldRelink(e2, t2) {
      return e2.references.some((e3) => e3.error !== void 0) ? true : this.indexManager.isAffected(e2, t2);
    }
    onUpdate(e2) {
      let t2 = s;
      return this.updateListeners.push(e2), AF[t2(1589)](() => {
        let t3 = this.updateListeners.indexOf(e2);
        t3 >= 0 && this.updateListeners.splice(t3, 1);
      });
    }
    resetToState(e2, t2) {
      let n2 = s;
      switch (t2) {
        case Q[n2(816)]:
        case Q.Parsed:
          this[n2(1447)][n2(1212)](e2.uri);
        case Q.IndexedContent:
          e2.localSymbols = void 0;
        case Q[n2(1579)]:
          this.serviceRegistry[n2(992)](e2.uri).references.Linker.unlink(e2);
        case Q.Linked:
          this.indexManager.removeReferences(e2.uri);
        case Q.IndexedReferences:
          e2[n2(1601)] = void 0, this[n2(528)].delete(e2.uri.toString());
        case Q[n2(809)]:
      }
      e2[n2(491)] > t2 && (e2.state = t2);
    }
    cleanUpDeleted(e2) {
      let t2 = s;
      this.buildState[t2(565)](e2.uri[t2(752)]()), this.indexManager.remove(e2.uri), e2[t2(491)] = Q.Changed;
    }
    buildDocuments(e2, t2, n2) {
      var r2 = this;
      return a(function* () {
        let i2 = X;
        r2.prepareBuild(e2, t2), yield r2.runCancelable(e2, Q.Parsed, n2, (e3) => r2[i2(1557)][i2(541)](e3, n2)), yield r2.runCancelable(e2, Q.IndexedContent, n2, (e3) => r2.indexManager.updateContent(e3, n2)), yield r2[i2(1582)](e2, Q.ComputedScopes, n2, (function() {
          var e3 = a(function* (e4) {
            e4.localSymbols = yield r2.serviceRegistry.getServices(e4.uri).references.ScopeComputation.collectLocalSymbols(e4, n2);
          });
          return function(t3) {
            return e3[X(1120)](this, arguments);
          };
        })());
        let o2 = e2.filter((e3) => r2.shouldLink(e3));
        yield r2.runCancelable(o2, Q[i2(282)], n2, (e3) => r2[i2(779)][i2(992)](e3.uri).references.Linker.link(e3, n2)), yield r2.runCancelable(o2, Q.IndexedReferences, n2, (e3) => r2.indexManager[i2(543)](e3, n2));
        let s2 = e2.filter((e3) => r2.shouldValidate(e3) ? true : (r2.markAsCompleted(e3), false));
        yield r2.runCancelable(s2, Q[i2(809)], n2, (function() {
          var e3 = a(function* (e4) {
            yield r2.validate(e4, n2), r2.markAsCompleted(e4);
          });
          return function(t3) {
            return e3[X(1120)](this, arguments);
          };
        })());
      })();
    }
    markAsCompleted(e2) {
      let t2 = this.buildState.get(e2.uri.toString());
      t2 && (t2.completed = true);
    }
    [s(1590)](e2, t2) {
      for (let n2 of e2) {
        let e3 = n2.uri.toString(), r2 = this.buildState.get(e3);
        (!r2 || r2.completed) && this.buildState.set(e3, {
          completed: false,
          options: t2,
          result: r2 == null ? void 0 : r2.result
        });
      }
    }
    runCancelable(e2, t2, n2, r2) {
      var i2 = this;
      return a(function* () {
        let a2 = X;
        for (let o3 of e2) o3[a2(491)] < t2 && (yield AP(n2), yield r2(o3), o3.state = t2, yield i2[a2(1377)](o3, t2, n2));
        let o2 = e2.filter((e3) => e3.state === t2);
        yield i2.notifyBuildPhase(o2, t2, n2), i2.currentState = t2;
      })();
    }
    onBuildPhase(e2, t2) {
      return this.buildPhaseListeners.add(e2, t2), AF.create(() => {
        let n2 = X;
        this.buildPhaseListeners[n2(565)](e2, t2);
      });
    }
    onDocumentPhase(e2, t2) {
      return this.documentPhaseListeners.add(e2, t2), AF.create(() => {
        this.documentPhaseListeners.delete(e2, t2);
      });
    }
    [s(281)](e2, t2, n2) {
      let r2 = s, i2;
      return t2 && `path` in t2 ? i2 = t2 : n2 = t2, n2 ?? (n2 = Z.CancellationToken[r2(1459)]), i2 ? this.awaitDocumentState(e2, i2, n2) : this.awaitBuilderState(e2, n2);
    }
    awaitDocumentState(e2, t2, n2) {
      let r2 = s, i2 = this.langiumDocuments.getDocument(t2);
      return i2 ? i2[r2(491)] >= e2 ? Promise.resolve(t2) : n2.isCancellationRequested ? Promise.reject(OP) : this.currentState >= e2 && e2 > i2.state ? Promise[r2(314)](new kF.ResponseError(kF.LSPErrorCodes[r2(1608)], `Document state of ` + t2.toString() + ` is ` + Q[i2.state] + `, requiring ` + Q[e2] + `, but workspace state is already ` + Q[this.currentState] + `. Returning undefined.`)) : new Promise((i3, a2) => {
        let o2 = r2, s2 = this[o2(1457)](e2, (e3) => {
          UP.equals(e3.uri, t2) && (s2.dispose(), c2.dispose(), i3(e3.uri));
        }), c2 = n2.onCancellationRequested(() => {
          s2.dispose(), c2.dispose(), a2(OP);
        });
      }) : Promise.reject(new kF.ResponseError(kF.LSPErrorCodes[r2(1573)], `No document found for URI: ` + t2[r2(752)]()));
    }
    awaitBuilderState(e2, t2) {
      return this.currentState >= e2 ? Promise.resolve() : t2.isCancellationRequested ? Promise.reject(OP) : new Promise((n2, r2) => {
        let i2 = this.onBuildPhase(e2, () => {
          i2.dispose(), a2.dispose(), n2();
        }), a2 = t2.onCancellationRequested(() => {
          i2.dispose(), a2.dispose(), r2(OP);
        });
      });
    }
    notifyDocumentPhase(e2, t2, n2) {
      var r2 = this;
      return a(function* () {
        let i2 = r2.documentPhaseListeners.get(t2).slice();
        for (let t3 of i2) try {
          yield AP(n2), yield t3(e2, n2);
        } catch (e3) {
          if (!kP(e3)) throw e3;
        }
      })();
    }
    notifyBuildPhase(e2, t2, n2) {
      var r2 = this;
      return a(function* () {
        if (e2[X(1663)] === 0) return;
        let i2 = r2.buildPhaseListeners.get(t2).slice();
        for (let t3 of i2) yield AP(n2), yield t3(e2, n2);
      })();
    }
    shouldLink(e2) {
      return this.getBuildOptions(e2).eagerLinking ?? true;
    }
    shouldValidate(e2) {
      return !!this.getBuildOptions(e2).validation;
    }
    validate(e2, t2) {
      var r2 = this;
      return a(function* () {
        let i2 = X, a2 = r2.serviceRegistry.getServices(e2.uri).validation.DocumentValidator, o2 = r2[i2(361)](e2), s2 = typeof o2.validation == `object` ? n({}, o2[i2(1081)]) : {};
        s2.categories = r2.findMissingValidationCategories(e2, o2);
        let c2 = yield a2.validateDocument(e2, s2, t2);
        e2.diagnostics ? e2.diagnostics.push(...c2) : e2.diagnostics = c2;
        let l2 = r2.buildState.get(e2.uri[i2(752)]());
        l2 && (l2.result ?? (l2.result = {}), l2.result.validationChecks ? l2.result[i2(617)] = R(l2.result.validationChecks).concat(s2.categories).distinct().toArray() : l2.result.validationChecks = [
          ...s2[i2(334)]
        ]);
      })();
    }
    [s(361)](e2) {
      var _a2;
      let t2 = s;
      return ((_a2 = this.buildState.get(e2.uri[t2(752)]())) == null ? void 0 : _a2.options) ?? {};
    }
  }, M(kt, s(847)), kt), MF = (At = class {
    constructor(e2) {
      let t2 = s;
      this[t2(741)] = /* @__PURE__ */ new Map(), this.symbolByTypeIndex = new sF(), this.referenceIndex = /* @__PURE__ */ new Map(), this.documents = e2.workspace[t2(1364)], this.serviceRegistry = e2.ServiceRegistry, this.astReflection = e2.AstReflection;
    }
    [s(1325)](e2, t2) {
      let n2 = s, r2 = ra(e2)[n2(649)], i2 = [];
      return this.referenceIndex.forEach((e3) => {
        e3.forEach((e4) => {
          UP.equals(e4.targetUri, r2) && e4.targetPath === t2 && i2.push(e4);
        });
      }), R(i2);
    }
    allElements(e2, t2) {
      let n2 = s, r2 = R(this[n2(741)].keys());
      return t2 && (r2 = r2.filter((e3) => !t2 || t2.has(e3))), r2.map((t3) => this.getFileDescriptions(t3, e2)).flat();
    }
    getFileDescriptions(e2, t2) {
      return t2 ? this.symbolByTypeIndex.get(e2, t2, () => (this.symbolIndex.get(e2) ?? []).filter((e3) => this.astReflection.isSubtype(e3.type, t2))) : this.symbolIndex.get(e2) ?? [];
    }
    remove(e2) {
      this.removeContent(e2), this.removeReferences(e2);
    }
    removeContent(e2) {
      let t2 = s, n2 = e2.toString();
      this.symbolIndex.delete(n2), this.symbolByTypeIndex[t2(563)](n2);
    }
    removeReferences(e2) {
      let t2 = e2.toString();
      this.referenceIndex.delete(t2);
    }
    updateContent(e2) {
      let t2 = s;
      var n2 = this;
      return a(function* (e3, r2 = Z[t2(1784)].None) {
        let i2 = t2, a2 = yield n2.serviceRegistry.getServices(e3.uri).references.ScopeComputation.collectExportedSymbols(e3, r2), o2 = e3.uri.toString();
        n2[i2(741)].set(o2, a2), n2.symbolByTypeIndex[i2(563)](o2);
      }).apply(this, arguments);
    }
    updateReferences(e2) {
      let t2 = s;
      var n2 = this;
      return a(function* (e3, r2 = Z[t2(1784)].None) {
        let i2 = t2, a2 = yield n2.serviceRegistry[i2(992)](e3.uri).workspace.ReferenceDescriptionProvider[i2(1061)](e3, r2);
        n2.referenceIndex.set(e3.uri[i2(752)](), a2);
      })[t2(1120)](this, arguments);
    }
    isAffected(e2, t2) {
      let n2 = s, r2 = this[n2(661)].get(e2.uri[n2(752)]());
      return r2 ? r2[n2(867)]((e3) => !e3.local && t2.has(e3.targetUri.toString())) : false;
    }
  }, M(At, s(1138)), At), NF = (jt = class {
    constructor(e2) {
      let t2 = s;
      this.initialBuildOptions = {}, this._ready = new MP(), this.serviceRegistry = e2.ServiceRegistry, this[t2(1630)] = e2[t2(911)].LangiumDocuments, this.documentBuilder = e2.workspace.DocumentBuilder, this[t2(774)] = e2[t2(911)].FileSystemProvider, this.mutex = e2.workspace.WorkspaceLock;
    }
    get ready() {
      return this._ready.promise;
    }
    get workspaceFolders() {
      return this.folders;
    }
    initialize(e2) {
      this.folders = e2.workspaceFolders ?? void 0;
    }
    [s(961)](e2) {
      return this.mutex.write((e3) => this.initializeWorkspace(this.folders ?? [], e3));
    }
    [s(857)](e2) {
      let t2 = s;
      var n2 = this;
      return a(function* (e3, t3 = Z.CancellationToken.None) {
        let r2 = X, i2 = yield n2.performStartup(e3);
        yield AP(t3), yield n2.documentBuilder[r2(830)](i2, n2.initialBuildOptions, t3);
      })[t2(1120)](this, arguments);
    }
    performStartup(e2) {
      var t2 = this;
      return a(function* () {
        let n2 = X, r2 = [], i2 = M((e3) => {
          r2.push(e3), t2.langiumDocuments.hasDocument(e3.uri) || t2.langiumDocuments.addDocument(e3);
        }, `collector`);
        yield t2.loadAdditionalDocuments(e2, i2);
        let o2 = [];
        yield Promise.all(e2.map((e3) => t2[n2(737)](e3)).map((function() {
          var e3 = a(function* (e4) {
            return t2.traverseFolder(e4, o2);
          });
          return function(t3) {
            return e3.apply(this, arguments);
          };
        })()));
        let s2 = R(o2)[n2(298)]((e3) => e3.toString()).filter((e3) => !t2.langiumDocuments.hasDocument(e3));
        return yield t2.loadWorkspaceDocuments(s2, i2), t2._ready.resolve(), r2;
      })();
    }
    loadWorkspaceDocuments(e2, t2) {
      var n2 = this;
      return a(function* () {
        yield Promise.all(e2.map((function() {
          var e3 = a(function* (e4) {
            t2(yield n2.langiumDocuments.getOrCreateDocument(e4));
          });
          return function(t3) {
            return e3.apply(this, arguments);
          };
        })()));
      })();
    }
    loadAdditionalDocuments(e2, t2) {
      return Promise[s(514)]();
    }
    [s(737)](e2) {
      return VP[s(1343)](e2.uri);
    }
    traverseFolder(e2, t2) {
      var n2 = this;
      return a(function* () {
        let r2 = X;
        try {
          let i2 = yield n2.fileSystemProvider[r2(788)](e2);
          yield Promise[r2(592)](i2.map((function() {
            var e3 = a(function* (e4) {
              n2.shouldIncludeEntry(e4) && (e4.isDirectory ? yield n2.traverseFolder(e4.uri, t2) : e4.isFile && t2.push(e4.uri));
            });
            return function(t3) {
              return e3.apply(this, arguments);
            };
          })()));
        } catch (t3) {
          console[r2(1527)](`Failure to read directory content of ` + e2.toString(true), t3);
        }
      })();
    }
    searchFolder(e2) {
      var t2 = this;
      return a(function* () {
        let n2 = [];
        return yield t2.traverseFolder(e2, n2), n2;
      })();
    }
    shouldIncludeEntry(e2) {
      let t2 = s, n2 = UP.basename(e2.uri);
      return n2[t2(1618)](`.`) ? false : e2.isDirectory ? n2 !== `node_modules` && n2 !== `out` : e2.isFile ? this.serviceRegistry.hasServices(e2.uri) : false;
    }
  }, M(jt, `DefaultWorkspaceManager`), jt), PF = (Mt = class {
    [s(1410)](e2, t2, n2, r2, i2) {
      return bS.buildUnexpectedCharactersMessage(e2, t2, n2, r2, i2);
    }
    buildUnableToPopLexerModeMessage(e2) {
      return bS[s(553)](e2);
    }
  }, M(Mt, `DefaultLexerErrorMessageProvider`), Mt), FF = {
    mode: `full`
  }, IF = (Nt = class {
    constructor(e2) {
      let t2 = s;
      this[t2(1537)] = e2.parser.LexerErrorMessageProvider, this[t2(1657)] = e2.parser.TokenBuilder;
      let n2 = this.tokenBuilder.buildTokens(e2.Grammar, {
        caseInsensitive: e2.LanguageMetaData[t2(940)]
      });
      this.tokenTypes = this.toTokenTypeDictionary(n2);
      let r2 = zF(n2) ? Object[t2(1205)](n2) : n2, i2 = e2.LanguageMetaData.mode === `production`;
      this.chevrotainLexer = new CS(r2, {
        positionTracking: `full`,
        skipValidations: i2,
        errorMessageProvider: this[t2(1537)]
      });
    }
    get definition() {
      return this.tokenTypes;
    }
    tokenize(e2, t2 = FF) {
      var _a2;
      let n2 = s;
      var r2;
      let i2 = this[n2(393)].tokenize(e2);
      return {
        tokens: i2[n2(926)],
        errors: i2.errors,
        hidden: i2.groups.hidden ?? [],
        report: (_a2 = (r2 = this.tokenBuilder).flushLexingReport) == null ? void 0 : _a2[n2(1066)](r2, e2)
      };
    }
    toTokenTypeDictionary(e2) {
      if (zF(e2)) return e2;
      let t2 = RF(e2) ? Object.values(e2.modes).flat() : e2, n2 = {};
      return t2.forEach((e3) => n2[e3.name] = e3), n2;
    }
  }, M(Nt, s(1429)), Nt);
  function LF(e2) {
    return Array.isArray(e2) && (e2.length === 0 || `name` in e2[0]);
  }
  M(LF, `isTokenTypeArray`);
  function RF(e2) {
    return e2 && `modes` in e2 && `defaultMode` in e2;
  }
  M(RF, s(1469));
  function zF(e2) {
    return !LF(e2) && !RF(e2);
  }
  M(zF, `isTokenTypeDictionary`), Gr();
  function BF(e2, t2, n2) {
    let r2 = s, i2, a2;
    typeof e2 == r2(1730) ? (a2 = t2, i2 = n2) : (a2 = e2.range[r2(1433)], i2 = t2), a2 || (a2 = P.create(0, 0));
    let o2 = HF(e2), c2 = iI(i2);
    return ZF({
      index: 0,
      tokens: GF({
        lines: o2,
        position: a2,
        options: c2
      }),
      position: a2
    });
  }
  M(BF, `parseJSDoc`);
  function VF(e2, t2) {
    let n2 = iI(t2), r2 = HF(e2);
    if (r2.length === 0) return false;
    let i2 = r2[0], a2 = r2[r2.length - 1], o2 = n2.start, s2 = n2.end;
    return !!(o2 != null && o2.exec(i2)) && !!(s2 != null && s2.exec(a2));
  }
  M(VF, `isJSDoc`);
  function HF(e2) {
    let t2 = s, n2 = ``;
    return n2 = typeof e2 == `string` ? e2 : e2[t2(324)], n2.split($s);
  }
  M(HF, `getLines`);
  var UF = RegExp(`\\s*(@([\\p{L}][\\p{L}\\p{N}]*)?)`, `uy`), WF = RegExp(`\\{(@[\\p{L}][\\p{L}\\p{N}]*)(\\s*)([^\\r\\n}]+)?\\}`, `gu`);
  function GF(e2) {
    var _a2, _b2, _c2;
    let t2 = s, n2 = [], r2 = e2.position.line, i2 = e2.position.character;
    for (let a2 = 0; a2 < e2[t2(1001)].length; a2++) {
      let o2 = a2 === 0, s2 = a2 === e2.lines.length - 1, c2 = e2[t2(1001)][a2], l2 = 0;
      if (o2 && e2.options.start) {
        let n3 = (_a2 = e2.options.start) == null ? void 0 : _a2[t2(871)](c2);
        n3 && (l2 = n3.index + n3[0].length);
      } else {
        let n3 = (_b2 = e2.options[t2(1250)]) == null ? void 0 : _b2.exec(c2);
        n3 && (l2 = n3.index + n3[0][t2(1663)]);
      }
      if (s2) {
        let n3 = (_c2 = e2.options.end) == null ? void 0 : _c2.exec(c2);
        n3 && (c2 = c2[t2(777)](0, n3[t2(1568)]));
      }
      if (c2 = c2[t2(777)](0, XF(c2)), YF(c2, l2) >= c2[t2(1663)]) {
        if (n2.length > 0) {
          let e3 = P.create(r2, i2);
          n2[t2(1168)]({
            type: `break`,
            content: ``,
            range: F.create(e3, e3)
          });
        }
      } else {
        UF.lastIndex = l2;
        let e3 = UF.exec(c2);
        if (e3) {
          let a3 = e3[0], o3 = e3[1], s3 = P.create(r2, i2 + l2), u2 = P.create(r2, i2 + l2 + a3[t2(1663)]);
          n2[t2(1168)]({
            type: t2(1366),
            content: o3,
            range: F.create(s3, u2)
          }), l2 += a3[t2(1663)], l2 = YF(c2, l2);
        }
        if (l2 < c2.length) {
          let e4 = c2.substring(l2), t3 = Array.from(e4.matchAll(WF));
          n2.push(...KF(t3, e4, r2, i2 + l2));
        }
      }
      r2++, i2 = 0;
    }
    return n2.length > 0 && n2[n2[t2(1663)] - 1].type === `break` ? n2.slice(0, -1) : n2;
  }
  M(GF, `tokenize`);
  function KF(e2, t2, n2, r2) {
    let i2 = s, a2 = [];
    if (e2.length === 0) {
      let e3 = P.create(n2, r2), o2 = P.create(n2, r2 + t2.length);
      a2.push({
        type: i2(324),
        content: t2,
        range: F.create(e3, o2)
      });
    } else {
      let o2 = 0;
      for (let s3 of e2) {
        let e3 = s3.index, c2 = t2.substring(o2, e3);
        c2[i2(1663)] > 0 && a2.push({
          type: `text`,
          content: t2[i2(777)](o2, e3),
          range: F.create(P[i2(1589)](n2, o2 + r2), P[i2(1589)](n2, e3 + r2))
        });
        let l2 = c2.length + 1, u2 = s3[1];
        if (a2[i2(1168)]({
          type: `inline-tag`,
          content: u2,
          range: F.create(P[i2(1589)](n2, o2 + l2 + r2), P.create(n2, o2 + l2 + u2[i2(1663)] + r2))
        }), l2 += u2.length, s3.length === 4) {
          l2 += s3[2].length;
          let e4 = s3[3];
          a2[i2(1168)]({
            type: `text`,
            content: e4,
            range: F.create(P.create(n2, o2 + l2 + r2), P.create(n2, o2 + l2 + e4.length + r2))
          });
        } else a2.push({
          type: `text`,
          content: ``,
          range: F.create(P.create(n2, o2 + l2 + r2), P.create(n2, o2 + l2 + r2))
        });
        o2 = e3 + s3[0][i2(1663)];
      }
      let s2 = t2.substring(o2);
      s2.length > 0 && a2.push({
        type: `text`,
        content: s2,
        range: F[i2(1589)](P.create(n2, o2 + r2), P.create(n2, o2 + r2 + s2[i2(1663)]))
      });
    }
    return a2;
  }
  M(KF, `buildInlineTokens`);
  var qF = /\S/, JF = /\s*$/;
  function YF(e2, t2) {
    let n2 = s, r2 = e2.substring(t2)[n2(1153)](qF);
    return r2 ? t2 + r2.index : e2[n2(1663)];
  }
  M(YF, `skipWhitespace`);
  function XF(e2) {
    let t2 = e2.match(JF);
    if (t2 && typeof t2.index == `number`) return t2.index;
  }
  M(XF, `lastCharacter`);
  function ZF(e2) {
    var _a2, _b2;
    let t2 = s, n2 = P.create(e2[t2(723)].line, e2.position.character);
    if (e2.tokens.length === 0) return new oI([], F.create(n2, n2));
    let r2 = [];
    for (; e2.index < e2.tokens.length; ) {
      let t3 = QF(e2, r2[r2.length - 1]);
      t3 && r2.push(t3);
    }
    let i2 = ((_a2 = r2[0]) == null ? void 0 : _a2.range.start) ?? n2, a2 = ((_b2 = r2[r2[t2(1663)] - 1]) == null ? void 0 : _b2.range.end) ?? n2;
    return new oI(r2, F.create(i2, a2));
  }
  M(ZF, `parseJSDocComment`);
  function QF(e2, t2) {
    let n2 = e2.tokens[e2.index];
    if (n2.type === `tag`) return nI(e2, false);
    if (n2.type === `text` || n2.type === `inline-tag`) return eI(e2);
    $F(n2, t2), e2.index++;
  }
  M(QF, `parseJSDocElement`);
  function $F(e2, t2) {
    let n2 = s;
    if (t2) {
      let r2 = new dI(``, e2.range);
      n2(620) in t2 ? t2.inlines.push(r2) : t2[n2(835)].inlines[n2(1168)](r2);
    }
  }
  M($F, `appendEmptyLine`);
  function eI(e2) {
    let t2 = s, n2 = e2.tokens[e2.index], r2 = n2, i2 = n2, a2 = [];
    for (; n2 && n2.type !== `break` && n2.type !== t2(1366); ) a2[t2(1168)](tI(e2)), i2 = n2, n2 = e2.tokens[e2.index];
    return new uI(a2, F.create(r2.range.start, i2[t2(287)].end));
  }
  M(eI, `parseJSDocText`);
  function tI(e2) {
    let t2 = s;
    return e2.tokens[e2.index][t2(1487)] === `inline-tag` ? nI(e2, true) : rI(e2);
  }
  M(tI, `parseJSDocInline`);
  function nI(e2, t2) {
    var _a2;
    let n2 = s, r2 = e2.tokens[e2.index++], i2 = r2[n2(835)].substring(1);
    if (((_a2 = e2.tokens[e2.index]) == null ? void 0 : _a2.type) === `text`) if (t2) {
      let n3 = rI(e2);
      return new sI(i2, new uI([
        n3
      ], n3.range), t2, F.create(r2.range.start, n3.range.end));
    } else {
      let n3 = eI(e2);
      return new sI(i2, n3, t2, F.create(r2.range.start, n3.range.end));
    }
    else {
      let e3 = r2[n2(287)];
      return new sI(i2, new uI([], e3), t2, e3);
    }
  }
  M(nI, `parseJSDocTag`);
  function rI(e2) {
    let t2 = s, n2 = e2.tokens[e2.index++];
    return new dI(n2.content, n2[t2(287)]);
  }
  M(rI, `parseJSDocLine`);
  function iI(e2) {
    let t2 = s;
    if (!e2) return iI({
      start: t2(1786),
      end: `*/`,
      line: `*`
    });
    let { start: n2, end: r2, line: i2 } = e2;
    return {
      start: aI(n2, true),
      end: aI(r2, false),
      line: aI(i2, true)
    };
  }
  M(iI, s(479));
  function aI(e2, t2) {
    let n2 = s;
    if (typeof e2 == `string` || typeof e2 == `object`) {
      let r2 = typeof e2 == n2(1730) ? oc(e2) : e2.source;
      return RegExp(t2 ? `^\\s*` + r2 : n2(657) + r2 + `\\s*$`);
    } else return e2;
  }
  M(aI, s(459));
  var oI = (Pt = class {
    constructor(e2, t2) {
      this.elements = e2, this.range = t2;
    }
    [s(898)](e2) {
      return this.getAllTags().find((t2) => t2.name === e2);
    }
    [s(1585)](e2) {
      return this.getAllTags().filter((t2) => t2.name === e2);
    }
    getAllTags() {
      return this.elements.filter((e2) => `name` in e2);
    }
    toString() {
      let e2 = ``;
      for (let t2 of this.elements) if (e2.length === 0) e2 = t2.toString();
      else {
        let n2 = t2.toString();
        e2 += fI(e2) + n2;
      }
      return e2.trim();
    }
    toMarkdown(e2) {
      let t2 = s, n2 = ``;
      for (let r2 of this[t2(1297)]) if (n2[t2(1663)] === 0) n2 = r2.toMarkdown(e2);
      else {
        let t3 = r2.toMarkdown(e2);
        n2 += fI(n2) + t3;
      }
      return n2[t2(1184)]();
    }
  }, M(Pt, `JSDocCommentImpl`), Pt), sI = (Ft = class {
    constructor(e2, t2, n2, r2) {
      this.name = e2, this.content = t2, this.inline = n2, this.range = r2;
    }
    toString() {
      let e2 = s, t2 = `@` + this[e2(747)], n2 = this.content.toString();
      return this.content.inlines.length === 1 ? t2 = t2 + ` ` + n2 : this.content.inlines.length > 1 && (t2 = t2 + `
` + n2), this.inline ? `{` + t2 + `}` : t2;
    }
    toMarkdown(e2) {
      var t2;
      return (e2 == null || (t2 = e2.renderTag) == null ? void 0 : t2.call(e2, this)) ?? this.toMarkdownDefault(e2);
    }
    [s(1019)](e2) {
      let t2 = s, n2 = this[t2(835)].toMarkdown(e2);
      if (this[t2(1782)]) {
        let t3 = cI(this.name, n2, e2 ?? {});
        if (typeof t3 == `string`) return t3;
      }
      let r2 = ``;
      (e2 == null ? void 0 : e2.tag) === `italic` || (e2 == null ? void 0 : e2.tag) === void 0 ? r2 = `*` : (e2 == null ? void 0 : e2[t2(1366)]) === `bold` ? r2 = `**` : (e2 == null ? void 0 : e2.tag) === `bold-italic` && (r2 = `***`);
      let i2 = r2 + `@` + this.name + r2;
      return this.content.inlines.length === 1 ? i2 = i2 + t2(1592) + n2 : this.content.inlines.length > 1 && (i2 = i2 + `
` + n2), this.inline ? `{` + i2 + `}` : i2;
    }
  }, M(Ft, `JSDocTagImpl`), Ft);
  function cI(e2, t2, n2) {
    var _a2;
    let r2 = s;
    if (e2 === `linkplain` || e2 === `linkcode` || e2 === r2(1449)) {
      let i2 = t2[r2(507)](` `), a2 = t2;
      if (i2 > 0) {
        let e3 = YF(t2, i2);
        a2 = t2.substring(e3), t2 = t2.substring(0, i2);
      }
      return (e2 === `linkcode` || e2 === `link` && n2[r2(1449)] === `code`) && (a2 = "`" + a2 + "`"), ((_a2 = n2.renderLink) == null ? void 0 : _a2.call(n2, t2, a2)) ?? lI(t2, a2);
    }
  }
  M(cI, `renderInlineTag`);
  function lI(e2, t2) {
    try {
      return VP.parse(e2, true), `[` + t2 + `](` + e2 + `)`;
    } catch {
      return e2;
    }
  }
  M(lI, `renderLinkDefault`);
  var uI = (It = class {
    constructor(e2, t2) {
      this.inlines = e2, this.range = t2;
    }
    toString() {
      let e2 = s, t2 = ``;
      for (let n2 = 0; n2 < this.inlines.length; n2++) {
        let r2 = this.inlines[n2], i2 = this.inlines[n2 + 1];
        t2 += r2.toString(), i2 && i2.range.start[e2(1250)] > r2[e2(287)].start.line && (t2 += `
`);
      }
      return t2;
    }
    toMarkdown(e2) {
      let t2 = s, n2 = ``;
      for (let r2 = 0; r2 < this.inlines.length; r2++) {
        let i2 = this.inlines[r2], a2 = this.inlines[r2 + 1];
        n2 += i2[t2(1678)](e2), a2 && a2.range.start.line > i2.range[t2(1433)].line && (n2 += `
`);
      }
      return n2;
    }
  }, M(It, `JSDocTextImpl`), It), dI = (Lt = class {
    constructor(e2, t2) {
      let n2 = s;
      this[n2(324)] = e2, this.range = t2;
    }
    toString() {
      return this.text;
    }
    [s(1678)]() {
      return this.text;
    }
  }, M(Lt, `JSDocLineImpl`), Lt);
  function fI(e2) {
    return e2.endsWith(`
`) ? `
` : `

`;
  }
  M(fI, `fillNewlines`);
  var pI = (Rt = class {
    constructor(e2) {
      let t2 = s;
      this.indexManager = e2[t2(545)].workspace.IndexManager, this.commentProvider = e2.documentation.CommentProvider;
    }
    getDocumentation(e2) {
      let t2 = s, n2 = this.commentProvider.getComment(e2);
      if (n2 && VF(n2)) return BF(n2).toMarkdown({
        renderLink: M((n3, r2) => this[t2(597)](e2, n3, r2), `renderLink`),
        renderTag: M((n3) => this[t2(1362)](e2, n3), `renderTag`)
      });
    }
    documentationLinkRenderer(e2, t2, n2) {
      let r2 = s, i2 = this.findNameInLocalSymbols(e2, t2) ?? this.findNameInGlobalScope(e2, t2);
      if (i2 && i2.nameSegment) {
        let e3 = i2.nameSegment.range.start.line + 1, t3 = i2.nameSegment.range.start.character + 1;
        return `[` + n2 + `](` + i2[r2(853)].with({
          fragment: `L` + e3 + `,` + t3
        }).toString() + `)`;
      } else return;
    }
    documentationTagRenderer(e2, t2) {
    }
    findNameInLocalSymbols(e2, t2) {
      let n2 = s, r2 = ra(e2).localSymbols;
      if (!r2) return;
      let i2 = e2;
      do {
        let e3 = r2.getStream(i2)[n2(323)]((e4) => e4.name === t2);
        if (e3) return e3;
        i2 = i2.$container;
      } while (i2);
    }
    findNameInGlobalScope(e2, t2) {
      let n2 = s;
      return this.indexManager.allElements()[n2(323)]((e3) => e3.name === t2);
    }
  }, M(Rt, `JSDocDocumentationProvider`), Rt), mI = (zt = class {
    constructor(e2) {
      let t2 = s;
      this.grammarConfig = () => e2[t2(908)].GrammarConfig;
    }
    getComment(e2) {
      var _a2;
      return dF(e2) ? e2.$comment : (_a2 = Cs(e2.$cstNode, this.grammarConfig().multilineCommentRules)) == null ? void 0 : _a2.text;
    }
  }, M(zt, `DefaultCommentProvider`), zt), hI = (Bt = class {
    constructor(e2) {
      let t2 = s;
      this.syncParser = e2[t2(908)].LangiumParser;
    }
    [s(1343)](e2, t2) {
      let n2 = s;
      return Promise[n2(514)](this.syncParser[n2(1343)](e2));
    }
  }, M(Bt, `DefaultAsyncParser`), Bt), gI = (Vt = class {
    constructor(e2) {
      let t2 = s;
      this.threadCount = 8, this[t2(1643)] = 200, this[t2(941)] = [], this.queue = [], this.hydrator = e2.serializer.Hydrator;
    }
    initializeWorkers() {
      for (; this.workerPool.length < this.threadCount; ) {
        let e2 = this.createWorker();
        e2.onReady(() => {
          let t2 = X;
          if (this.queue[t2(1663)] > 0) {
            let n2 = this.queue[t2(1689)]();
            n2 && (e2.lock(), n2.resolve(e2));
          }
        }), this.workerPool.push(e2);
      }
    }
    parse(e2, t2) {
      var n2 = this;
      return a(function* () {
        let r2 = yield n2.acquireParserWorker(t2), i2 = new MP(), a2, o2 = t2.onCancellationRequested(() => {
          a2 = setTimeout(() => {
            n2[X(1360)](r2);
          }, n2.terminationDelay);
        });
        return r2.parse(e2).then((e3) => {
          let t3 = n2.hydrator.hydrate(e3);
          i2.resolve(t3);
        }).catch((e3) => {
          i2.reject(e3);
        }).finally(() => {
          o2.dispose(), clearTimeout(a2);
        }), i2.promise;
      })();
    }
    terminateWorker(e2) {
      let t2 = s;
      e2.terminate();
      let n2 = this.workerPool.indexOf(e2);
      n2 >= 0 && this[t2(941)].splice(n2, 1);
    }
    [s(303)](e2) {
      var t2 = this;
      return a(function* () {
        let n2 = X;
        t2.initializeWorkers();
        for (let e3 of t2.workerPool) if (e3.ready) return e3.lock(), e3;
        let r2 = new MP();
        return e2[n2(1278)](() => {
          let e3 = n2, i2 = t2[e3(1157)][e3(507)](r2);
          i2 >= 0 && t2.queue.splice(i2, 1), r2[e3(314)](OP);
        }), t2.queue.push(r2), r2.promise;
      })();
    }
  }, M(Vt, `AbstractThreadedAsyncParser`), Vt), _I = (Ht = class {
    get ready() {
      return this._ready;
    }
    get onReady() {
      let e2 = s;
      return this[e2(1318)][e2(634)];
    }
    constructor(e2, t2, n2, r2) {
      let i2 = s;
      this.onReadyEmitter = new DF[i2(1075)](), this.deferred = new MP(), this._ready = true, this._parsing = false, this.sendMessage = e2, this._terminate = r2, t2((e3) => {
        let t3 = e3;
        this.deferred.resolve(t3), this.unlock();
      }), n2((e3) => {
        let t3 = i2;
        this[t3(604)].reject(e3), this.unlock();
      });
    }
    terminate() {
      let e2 = s;
      this.deferred[e2(314)](OP), this._terminate();
    }
    lock() {
      this._ready = false;
    }
    unlock() {
      let e2 = s;
      this._parsing = false, this._ready = true, this.onReadyEmitter[e2(916)]();
    }
    parse(e2) {
      let t2 = s;
      if (this._parsing) throw Error(`Parser worker is busy`);
      return this._parsing = true, this[t2(604)] = new MP(), this.sendMessage(e2), this.deferred.promise;
    }
  }, M(Ht, `ParserWorker`), Ht), vI = (Ut = class {
    constructor() {
      let e2 = s;
      this.previousTokenSource = new Z.CancellationTokenSource(), this[e2(424)] = [], this.readQueue = [], this.done = true;
    }
    [s(662)](e2) {
      let t2 = s;
      this.cancelWrite();
      let n2 = EP();
      return this.previousTokenSource = n2, this[t2(525)](this.writeQueue, e2, n2[t2(1408)]);
    }
    read(e2) {
      return this.enqueue(this.readQueue, e2);
    }
    enqueue(e2, t2, n2 = Z.CancellationToken[s(1459)]) {
      let r2 = new MP(), i2 = {
        action: t2,
        deferred: r2,
        cancellationToken: n2
      };
      return e2.push(i2), this.performNextOperation(), r2.promise;
    }
    [s(1316)]() {
      var e2 = this;
      return a(function* () {
        let t2 = X;
        if (!e2.done) return;
        let n2 = [];
        if (e2.writeQueue.length > 0) n2.push(e2.writeQueue.shift());
        else if (e2[t2(260)][t2(1663)] > 0) n2.push(...e2.readQueue.splice(0, e2.readQueue.length));
        else return;
        e2[t2(1464)] = false, yield Promise[t2(592)](n2.map((function() {
          var e3 = a(function* ({ action: e4, deferred: t3, cancellationToken: n3 }) {
            let r2 = X;
            try {
              let i2 = yield Promise[r2(514)]().then(() => e4(n3));
              t3.resolve(i2);
            } catch (e5) {
              kP(e5) ? t3.resolve(void 0) : t3.reject(e5);
            }
          });
          return function(t3) {
            return e3.apply(this, arguments);
          };
        })())), e2.done = true, e2.performNextOperation();
      })();
    }
    cancelWrite() {
      this.previousTokenSource.cancel();
    }
  }, M(Ut, s(1223)), Ut), yI = (Wt = class {
    constructor(e2) {
      this.grammarElementIdMap = new $P(), this.tokenTypeIdMap = new $P(), this.grammar = e2.Grammar, this.lexer = e2.parser.Lexer, this.linker = e2.references.Linker;
    }
    dehydrate(e2) {
      let t2 = s;
      return {
        lexerErrors: e2.lexerErrors,
        lexerReport: e2.lexerReport ? this.dehydrateLexerReport(e2.lexerReport) : void 0,
        parserErrors: e2.parserErrors.map((e3) => n(n({}, e3), {}, {
          message: e3.message
        })),
        value: this[t2(1664)](e2.value, this.createDehyrationContext(e2[t2(1371)]))
      };
    }
    dehydrateLexerReport(e2) {
      return e2;
    }
    [s(365)](e2) {
      let t2 = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Map();
      for (let n3 of ca(e2)) t2.set(n3, {});
      if (e2.$cstNode) for (let t3 of ps(e2.$cstNode)) n2.set(t3, {});
      return {
        astNodes: t2,
        cstNodes: n2
      };
    }
    [s(1664)](e2, t2) {
      let n2 = s, r2 = t2.astNodes[n2(1419)](e2);
      r2.$type = e2.$type, r2.$containerIndex = e2.$containerIndex, r2.$containerProperty = e2.$containerProperty, e2.$cstNode !== void 0 && (r2.$cstNode = this.dehydrateCstNode(e2.$cstNode, t2));
      for (let [i2, a2] of Object.entries(e2)) if (!i2.startsWith(`$`)) if (Array.isArray(a2)) {
        let e3 = [];
        r2[i2] = e3;
        for (let r3 of a2) Li(r3) ? e3.push(this[n2(1664)](r3, t2)) : Ri(r3) ? e3.push(this[n2(1287)](r3, t2)) : e3.push(r3);
      } else Li(a2) ? r2[i2] = this[n2(1664)](a2, t2) : Ri(a2) ? r2[i2] = this.dehydrateReference(a2, t2) : a2 !== void 0 && (r2[i2] = a2);
      return r2;
    }
    dehydrateReference(e2, t2) {
      let n2 = s, r2 = {};
      return r2.$refText = e2.$refText, e2.$refNode && (r2.$refNode = t2.cstNodes.get(e2[n2(333)])), r2;
    }
    dehydrateCstNode(e2, t2) {
      let n2 = s, r2 = t2.cstNodes[n2(1419)](e2);
      return Gi(e2) ? r2.fullText = e2[n2(418)] : r2.grammarSource = this.getGrammarElementId(e2[n2(696)]), r2[n2(674)] = e2.hidden, r2[n2(688)] = t2.astNodes.get(e2.astNode), Ui(e2) ? r2.content = e2[n2(835)].map((e3) => this[n2(316)](e3, t2)) : Wi(e2) && (r2.tokenType = e2.tokenType.name, r2.offset = e2.offset, r2.length = e2.length, r2.startLine = e2.range.start.line, r2.startColumn = e2.range.start[n2(556)], r2.endLine = e2[n2(287)].end.line, r2.endColumn = e2.range.end.character), r2;
    }
    [s(607)](e2) {
      let t2 = e2[s(1371)], n2 = this.createHydrationContext(t2);
      return `$cstNode` in t2 && this.hydrateCstNode(t2.$cstNode, n2), {
        lexerErrors: e2.lexerErrors,
        lexerReport: e2.lexerReport,
        parserErrors: e2.parserErrors,
        value: this.hydrateAstNode(t2, n2)
      };
    }
    createHydrationContext(e2) {
      let t2 = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Map();
      for (let n3 of ca(e2)) t2.set(n3, {});
      let r2;
      if (e2.$cstNode) for (let t3 of ps(e2.$cstNode)) {
        let e3;
        `fullText` in t3 ? (e3 = new BN(t3.fullText), r2 = e3) : `content` in t3 ? e3 = new RN() : `tokenType` in t3 && (e3 = this.hydrateCstLeafNode(t3)), e3 && (n2.set(t3, e3), e3.root = r2);
      }
      return {
        astNodes: t2,
        cstNodes: n2
      };
    }
    hydrateAstNode(e2, t2) {
      let n2 = s, r2 = t2.astNodes[n2(1419)](e2);
      r2.$type = e2[n2(798)], r2.$containerIndex = e2[n2(862)], r2.$containerProperty = e2.$containerProperty, e2[n2(1115)] && (r2[n2(1115)] = t2.cstNodes[n2(1419)](e2.$cstNode));
      for (let [i2, a2] of Object.entries(e2)) if (!i2.startsWith(`$`)) if (Array.isArray(a2)) {
        let e3 = [];
        r2[i2] = e3;
        for (let n3 of a2) Li(n3) ? e3.push(this.setParent(this.hydrateAstNode(n3, t2), r2)) : Ri(n3) ? e3.push(this.hydrateReference(n3, r2, i2, t2)) : e3.push(n3);
      } else Li(a2) ? r2[i2] = this[n2(1201)](this.hydrateAstNode(a2, t2), r2) : Ri(a2) ? r2[i2] = this.hydrateReference(a2, r2, i2, t2) : a2 !== void 0 && (r2[i2] = a2);
      return r2;
    }
    setParent(e2, t2) {
      return e2.$container = t2, e2;
    }
    [s(1444)](e2, t2, n2, r2) {
      let i2 = s;
      return this.linker.buildReference(t2, n2, r2.cstNodes.get(e2.$refNode), e2[i2(825)]);
    }
    [s(1718)](e2, t2, n2 = 0) {
      let r2 = s, i2 = t2[r2(489)].get(e2);
      if (typeof e2.grammarSource == `number` && (i2[r2(696)] = this.getGrammarElement(e2.grammarSource)), i2.astNode = t2[r2(1639)][r2(1419)](e2.astNode), Ui(i2)) for (let a2 of e2[r2(835)]) {
        let e3 = this[r2(1718)](a2, t2, n2++);
        i2[r2(835)].push(e3);
      }
      return i2;
    }
    hydrateCstLeafNode(e2) {
      let t2 = this.getTokenType(e2.tokenType), n2 = e2.offset, r2 = e2.length, i2 = e2.startLine, a2 = e2.startColumn, o2 = e2.endLine, s2 = e2.endColumn, c2 = e2.hidden;
      return new LN(n2, r2, {
        start: {
          line: i2,
          character: a2
        },
        end: {
          line: o2,
          character: s2
        }
      }, t2, c2);
    }
    getTokenType(e2) {
      return this.lexer.definition[e2];
    }
    getGrammarElementId(e2) {
      if (e2) return this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(), this.grammarElementIdMap.get(e2);
    }
    getGrammarElement(e2) {
      return this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(), this.grammarElementIdMap.getKey(e2);
    }
    createGrammarElementIdMap() {
      let e2 = 0;
      for (let t2 of ca(this.grammar)) _a(t2) && this.grammarElementIdMap.set(t2, e2++);
    }
  }, M(Wt, `DefaultHydrator`), Wt);
  function bI(e2) {
    let t2 = s;
    return {
      documentation: {
        CommentProvider: M((e3) => new mI(e3), `CommentProvider`),
        DocumentationProvider: M((e3) => new pI(e3), `DocumentationProvider`)
      },
      parser: {
        AsyncParser: M((e3) => new hI(e3), `AsyncParser`),
        GrammarConfig: M((e3) => Jc(e3), `GrammarConfig`),
        LangiumParser: M((e3) => vP(e3), `LangiumParser`),
        CompletionParser: M((e3) => _P(e3), `CompletionParser`),
        ValueConverter: M(() => new xP(), `ValueConverter`),
        TokenBuilder: M(() => new bP(), `TokenBuilder`),
        Lexer: M((e3) => new IF(e3), t2(453)),
        ParserErrorMessageProvider: M(() => new JN(), t2(1734)),
        LexerErrorMessageProvider: M(() => new PF(), `LexerErrorMessageProvider`)
      },
      workspace: {
        AstNodeLocator: M(() => new EF(), `AstNodeLocator`),
        AstNodeDescriptionProvider: M((e3) => new wF(e3), `AstNodeDescriptionProvider`),
        ReferenceDescriptionProvider: M((e3) => new TF(e3), `ReferenceDescriptionProvider`)
      },
      references: {
        Linker: M((e3) => new JP(e3), `Linker`),
        NameProvider: M(() => new XP(), `NameProvider`),
        ScopeProvider: M((e3) => new uF(e3), `ScopeProvider`),
        ScopeComputation: M((e3) => new eF(e3), t2(1661)),
        References: M((e3) => new ZP(e3), t2(846))
      },
      serializer: {
        Hydrator: M((e3) => new yI(e3), `Hydrator`),
        JsonSerializer: M((e3) => new pF(e3), `JsonSerializer`)
      },
      validation: {
        DocumentValidator: M((e3) => new yF(e3), `DocumentValidator`),
        ValidationRegistry: M((e3) => new _F(e3), `ValidationRegistry`)
      },
      shared: M(() => e2.shared, `shared`)
    };
  }
  M(bI, `createDefaultCoreModule`);
  function xI(e2) {
    let t2 = s;
    return {
      ServiceRegistry: M((e3) => new mF(e3), `ServiceRegistry`),
      workspace: {
        LangiumDocuments: M((e3) => new KP(e3), t2(1364)),
        LangiumDocumentFactory: M((e3) => new GP(e3), `LangiumDocumentFactory`),
        DocumentBuilder: M((e3) => new jF(e3), `DocumentBuilder`),
        IndexManager: M((e3) => new MF(e3), t2(1594)),
        WorkspaceManager: M((e3) => new NF(e3), `WorkspaceManager`),
        FileSystemProvider: M((n2) => e2[t2(774)](n2), `FileSystemProvider`),
        WorkspaceLock: M(() => new vI(), `WorkspaceLock`),
        ConfigurationProvider: M((e3) => new OF(e3), `ConfigurationProvider`)
      },
      profilers: {}
    };
  }
  M(xI, `createDefaultSharedCoreModule`);
  var SI;
  (function(e2) {
    e2.merge = (e3, t2) => OI(OI({}, e3), t2);
  })(SI || (SI = {}));
  function $(e2, t2, n2, r2, i2, a2, o2, s2, c2) {
    return TI([
      e2,
      t2,
      n2,
      r2,
      i2,
      a2,
      o2,
      s2,
      c2
    ].reduce(OI, {}));
  }
  M($, s(964));
  var CI = /* @__PURE__ */ Symbol(`isProxy`);
  function wI(e2) {
    if (e2 && e2[CI]) for (let t2 of Object.values(e2)) wI(t2);
    return e2;
  }
  M(wI, `eagerLoad`);
  function TI(e2, t2) {
    let n2 = new Proxy({}, {
      deleteProperty: M(() => false, `deleteProperty`),
      set: M(() => {
        throw Error(`Cannot set property on injected service container`);
      }, `set`),
      get: M((r2, i2) => i2 === CI ? true : DI(r2, i2, e2, t2 || n2), `get`),
      getOwnPropertyDescriptor: M((r2, i2) => (DI(r2, i2, e2, t2 || n2), Object.getOwnPropertyDescriptor(r2, i2)), `getOwnPropertyDescriptor`),
      has: M((t3, n3) => n3 in e2, `has`),
      ownKeys: M(() => [
        ...Object.getOwnPropertyNames(e2)
      ], `ownKeys`)
    });
    return n2;
  }
  M(TI, `_inject`);
  var EI = /* @__PURE__ */ Symbol();
  function DI(e2, t2, n2, r2) {
    let i2 = s;
    if (t2 in e2) {
      if (e2[t2] instanceof Error) throw Error(`Construction failure. Please make sure that your dependencies are constructable. Cause: ` + e2[t2]);
      if (e2[t2] === EI) throw Error(`Cycle detected. Please make "` + String(t2) + `" lazy. Visit https://langium.org/docs/reference/configuration-services/#resolving-cyclic-dependencies`);
      return e2[t2];
    } else if (t2 in n2) {
      let a2 = n2[t2];
      e2[t2] = EI;
      try {
        e2[t2] = typeof a2 == i2(386) ? a2(r2) : TI(a2, r2);
      } catch (n3) {
        throw e2[t2] = n3 instanceof Error ? n3 : void 0, n3;
      }
      return e2[t2];
    } else return;
  }
  M(DI, s(512));
  function OI(e2, t2) {
    let n2 = s;
    if (t2) {
      for (let [r2, i2] of Object[n2(1788)](t2)) if (i2 != null) if (typeof i2 == n2(716)) {
        let t3 = e2[r2];
        typeof t3 == `object` && t3 ? e2[r2] = OI(t3, i2) : e2[r2] = OI({}, i2);
      } else e2[r2] = i2;
    }
    return e2;
  }
  M(OI, s(1397));
  var kI = {
    indentTokenName: `INDENT`,
    dedentTokenName: s(520),
    whitespaceTokenName: `WS`,
    ignoreIndentationDelimiters: []
  }, AI;
  (function(e2) {
    e2.REGULAR = `indentation-sensitive`, e2.IGNORE_INDENTATION = `ignore-indentation`;
  })(AI || (AI = {}));
  var jI = (Gt = class extends bP {
    constructor(e2 = kI) {
      let t2 = s;
      super(), this[t2(1705)] = [
        0
      ], this.whitespaceRegExp = /[ \t]+/y, this.options = n(n({}, kI), e2), this.indentTokenType = FS({
        name: this.options.indentTokenName,
        pattern: this.indentMatcher.bind(this),
        line_breaks: false
      }), this[t2(532)] = FS({
        name: this.options.dedentTokenName,
        pattern: this.dedentMatcher.bind(this),
        line_breaks: false
      });
    }
    [s(751)](e2, t2) {
      let n2 = s, r2 = super.buildTokens(e2, t2);
      if (!LF(r2)) throw Error(`Invalid tokens built by default builder`);
      let { indentTokenName: i2, dedentTokenName: a2, whitespaceTokenName: o2, ignoreIndentationDelimiters: c2 } = this.options, l2, u2, d2, f2 = [];
      for (let e3 of r2) {
        for (let [t3, r3] of c2) e3.name === t3 ? e3.PUSH_MODE = AI[n2(1454)] : e3.name === r3 && (e3.POP_MODE = true);
        e3[n2(747)] === a2 ? l2 = e3 : e3[n2(747)] === i2 ? u2 = e3 : e3.name === o2 ? d2 = e3 : f2.push(e3);
      }
      if (!l2 || !u2 || !d2) throw Error(`Some indentation/whitespace tokens not found!`);
      return c2.length > 0 ? {
        modes: {
          [AI.REGULAR]: [
            l2,
            u2,
            ...f2,
            d2
          ],
          [AI.IGNORE_INDENTATION]: [
            ...f2,
            d2
          ]
        },
        defaultMode: AI.REGULAR
      } : [
        l2,
        u2,
        d2,
        ...f2
      ];
    }
    flushLexingReport(e2) {
      return n(n({}, super[s(1409)](e2)), {}, {
        remainingDedents: this.flushRemainingDedents(e2)
      });
    }
    isStartOfLine(e2, t2) {
      return t2 === 0 || `\r
`.includes(e2[t2 - 1]);
    }
    matchWhitespace(e2, t2, n2, r2) {
      this.whitespaceRegExp.lastIndex = t2;
      let i2 = this.whitespaceRegExp.exec(e2);
      return {
        currIndentLevel: (i2 == null ? void 0 : i2[0].length) ?? 0,
        prevIndentLevel: this.indentationStack.at(-1),
        match: i2
      };
    }
    createIndentationTokenInstance(e2, t2, n2, r2) {
      let i2 = s, a2 = this[i2(1269)](t2, r2);
      return RS(e2, n2, r2, r2 + n2.length, a2, a2, 1, n2.length);
    }
    getLineNumber(e2, t2) {
      return e2.substring(0, t2).split(/\r\n|\r|\n/).length;
    }
    indentMatcher(e2, t2, n2, r2) {
      let i2 = s;
      if (!this.isStartOfLine(e2, t2)) return null;
      let { currIndentLevel: a2, prevIndentLevel: o2, match: c2 } = this.matchWhitespace(e2, t2, n2, r2);
      return a2 <= o2 ? null : (this[i2(1705)].push(a2), c2);
    }
    dedentMatcher(e2, t2, n2, r2) {
      var _a2;
      let i2 = s;
      if (!this.isStartOfLine(e2, t2)) return null;
      let { currIndentLevel: a2, prevIndentLevel: o2, match: c2 } = this.matchWhitespace(e2, t2, n2, r2);
      if (a2 >= o2) return null;
      let l2 = this.indentationStack.lastIndexOf(a2);
      if (l2 === -1) {
        var u2;
        return this.diagnostics[i2(1168)]({
          severity: `error`,
          message: `Invalid dedent level ` + a2 + ` at offset: ` + t2 + i2(504) + this.indentationStack,
          offset: t2,
          length: (c2 == null || (u2 = c2[0]) == null ? void 0 : u2.length) ?? 0,
          line: this.getLineNumber(e2, t2),
          column: 1
        }), null;
      }
      let d2 = this.indentationStack.length - l2 - 1, f2 = ((_a2 = e2.substring(0, t2).match(/[\r\n]+$/)) == null ? void 0 : _a2[0].length) ?? 1;
      for (let r3 = 0; r3 < d2; r3++) {
        let r4 = this.createIndentationTokenInstance(this.dedentTokenType, e2, ``, t2 - (f2 - 1));
        n2.push(r4), this.indentationStack.pop();
      }
      return null;
    }
    buildTerminalToken(e2) {
      let t2 = super.buildTerminalToken(e2), { indentTokenName: n2, dedentTokenName: r2, whitespaceTokenName: i2 } = this.options;
      return t2.name === n2 ? this.indentTokenType : t2.name === r2 ? this.dedentTokenType : t2.name === i2 ? FS({
        name: i2,
        pattern: this.whitespaceRegExp,
        group: CS.SKIPPED
      }) : t2;
    }
    flushRemainingDedents(e2) {
      let t2 = s, n2 = [];
      for (; this.indentationStack.length > 1; ) n2.push(this.createIndentationTokenInstance(this[t2(532)], e2, ``, e2.length)), this.indentationStack.pop();
      return this.indentationStack = [
        0
      ], n2;
    }
  }, M(Gt, `IndentationAwareTokenBuilder`), Gt), MI = (Kt = class extends IF {
    constructor(e2) {
      let t2 = s;
      if (super(e2), e2.parser.TokenBuilder instanceof jI) this[t2(1403)] = e2[t2(908)].TokenBuilder;
      else throw Error(t2(1254));
    }
    [s(873)](e2, t2 = FF) {
      let n2 = s, r2 = super.tokenize(e2), i2 = r2[n2(1510)];
      (t2 == null ? void 0 : t2.mode) === `full` && r2[n2(926)][n2(1168)](...i2.remainingDedents), i2[n2(1780)] = [];
      let { indentTokenType: a2, dedentTokenType: o2 } = this.indentationTokenBuilder, c2 = a2.tokenTypeIdx, l2 = o2.tokenTypeIdx, u2 = [], d2 = r2.tokens[n2(1663)] - 1;
      for (let e3 = 0; e3 < d2; e3++) {
        let t3 = r2.tokens[e3], n3 = r2.tokens[e3 + 1];
        if (t3.tokenTypeIdx === c2 && n3.tokenTypeIdx === l2) {
          e3++;
          continue;
        }
        u2.push(t3);
      }
      return d2 >= 0 && u2.push(r2.tokens[d2]), r2.tokens = u2, r2;
    }
  }, M(Kt, `IndentationAwareLexer`), Kt), NI = {};
  dn(NI, {
    AstUtils: () => $i,
    BiMap: () => $P,
    Cancellation: () => Z,
    ContextCache: () => sF,
    CstUtils: () => Ii,
    DONE_RESULT: () => Xi,
    Deferred: () => MP,
    Disposable: () => AF,
    DisposableCache: () => aF,
    DocumentCache: () => cF,
    EMPTY_STREAM: () => Yi,
    ErrorWithLocation: () => Is,
    GrammarUtils: () => Fs,
    MultiMap: () => QP,
    OperationCancelled: () => OP,
    Reduction: () => Qi,
    RegExpUtils: () => zs,
    SimpleCache: () => oF,
    StreamImpl: () => Ki,
    TreeStreamImpl: () => Zi,
    URI: () => VP,
    UriTrie: () => WP,
    UriUtils: () => UP,
    WorkspaceCache: () => lF,
    assertCondition: () => Rs,
    assertUnreachable: () => Ls,
    delayNextTick: () => CP,
    interruptAndCheck: () => AP,
    isOperationCancelled: () => kP,
    loadGrammarFromJson: () => zI,
    setInterruptionPeriod: () => DP,
    startCancelableOperation: () => EP,
    stream: () => R
  }), pn(NI, DF);
  var PI = (qt = class {
    stat(e2) {
      throw Error(`No file system is available.`);
    }
    statSync(e2) {
      throw Error(s(1341));
    }
    [s(1796)]() {
      return a(function* () {
        return false;
      })();
    }
    existsSync() {
      return false;
    }
    readBinary() {
      throw Error(`No file system is available.`);
    }
    readBinarySync() {
      throw Error(`No file system is available.`);
    }
    [s(637)]() {
      throw Error(`No file system is available.`);
    }
    readFileSync() {
      throw Error(s(1341));
    }
    readDirectory() {
      return a(function* () {
        return [];
      })();
    }
    readDirectorySync() {
      return [];
    }
  }, M(qt, `EmptyFileSystemProvider`), qt), FI = {
    fileSystemProvider: M(() => new PI(), `fileSystemProvider`)
  }, II = {
    Grammar: M(() => void 0, `Grammar`),
    LanguageMetaData: M(() => ({
      caseInsensitive: false,
      fileExtensions: [
        `.langium`
      ],
      languageId: `langium`
    }), `LanguageMetaData`)
  }, LI = {
    AstReflection: M(() => new ds(), `AstReflection`)
  };
  function RI() {
    let e2 = $(xI(FI), LI), t2 = $(bI({
      shared: e2
    }), II);
    return e2.ServiceRegistry.register(t2), t2;
  }
  M(RI, s(1547));
  function zI(e2) {
    let t2 = s, n2 = RI(), r2 = n2.serializer.JsonSerializer.deserialize(e2);
    return n2[t2(545)].workspace[t2(1563)].fromModel(r2, VP.parse(t2(727) + (r2.name ?? t2(1044)) + `.langium`)), r2;
  }
  M(zI, s(1536)), pn(Fi, NI);
  var BI = (Jt = class {
    constructor(e2) {
      let t2 = s;
      this.activeCategories = /* @__PURE__ */ new Set(), this.allCategories = /* @__PURE__ */ new Set([
        t2(742),
        `parsing`,
        `linking`
      ]), this.activeCategories = e2 ?? new Set(this[t2(1085)]), this[t2(886)] = new QP();
    }
    isActive(e2) {
      return this.activeCategories.has(e2);
    }
    start(...e2) {
      let t2 = s;
      e2 ? e2.forEach((e3) => this.activeCategories.add(e3)) : this[t2(824)] = new Set(this.allCategories);
    }
    stop(...e2) {
      let t2 = s;
      e2 ? e2.forEach((e3) => this[t2(824)].delete(e3)) : this.activeCategories[t2(563)]();
    }
    createTask(e2, t2) {
      let n2 = s;
      if (!this[n2(1133)](e2)) throw Error(`Category "` + e2 + `" is not active.`);
      return console.log(`Creating profiling task for '` + e2 + `.` + t2 + `'.`), new VI((t3) => this.records.add(e2, this.dumpRecord(e2, t3)), t2);
    }
    dumpRecord(e2, t2) {
      let n2 = s;
      console.info(n2(1214) + e2 + `.` + t2.identifier + ` executed in ` + t2.duration[n2(1071)](2) + n2(645) + t2.date.toISOString());
      let r2 = [];
      for (let e3 of t2.entries.keys()) {
        let i3 = t2.entries.get(e3), a3 = i3.reduce((e4, t3) => e4 + t3);
        r2[n2(1168)]({
          name: t2.identifier + `.` + e3,
          count: i3.length,
          duration: a3
        });
      }
      let i2 = t2.duration - r2.map((e3) => e3.duration).reduce((e3, t3) => e3 + t3, 0);
      r2.push({
        name: t2[n2(1177)],
        count: 1,
        duration: i2
      }), r2.sort((e3, t3) => t3.duration - e3.duration);
      function a2(e3) {
        return Math.round(100 * e3) / 100;
      }
      return M(a2, `Round`), console.table(r2.map((e3) => ({
        Element: e3.name,
        Count: e3.count,
        "Self %": a2(100 * e3.duration / t2.duration),
        "Time (ms)": a2(e3[n2(1128)])
      }))), t2;
    }
    getRecords(...e2) {
      let t2 = s;
      return e2.length === 0 ? this.records.values() : this.records.entries().filter((t3) => e2.some((e3) => e3 === t3[0]))[t2(548)]((e3) => e3[1]);
    }
  }, M(Jt, `DefaultLangiumProfiler`), Jt), VI = (Yt = class {
    constructor(e2, t2) {
      let n2 = s;
      this[n2(1018)] = [], this.entries = new QP(), this.addRecord = e2, this.identifier = t2;
    }
    start() {
      if (this.startTime !== void 0) throw Error(`Task "` + this.identifier + `" is already started.`);
      this.startTime = performance.now();
    }
    stop() {
      let e2 = s;
      if (this[e2(485)] === void 0) throw Error(`Task "` + this[e2(1177)] + `" was not started.`);
      if (this[e2(1018)].length !== 0) throw Error(`Task "` + this.identifier + `" cannot be stopped before sub-task(s): ` + this.stack.map((e3) => e3.id).join(`, `) + `.`);
      let t2 = {
        identifier: this.identifier,
        date: /* @__PURE__ */ new Date(),
        duration: performance.now() - this[e2(485)],
        entries: this.entries
      };
      this[e2(498)](t2), this.startTime = void 0, this.entries.clear();
    }
    startSubTask(e2) {
      this.stack.push({
        id: e2,
        start: performance.now(),
        content: 0
      });
    }
    [s(320)](e2) {
      let t2 = s, n2 = this.stack.pop();
      if (!n2) throw Error(t2(891) + this.identifier + `.` + e2 + t2(1178));
      if (n2.id !== e2) throw Error(`Sub-Task "` + n2.id + `" is not already stopped.`);
      let r2 = performance.now() - n2.start;
      this.stack.at(-1) !== void 0 && (this.stack[this[t2(1018)].length - 1].content += r2);
      let i2 = r2 - n2.content;
      this[t2(1788)][t2(974)](e2, i2);
    }
  }, M(Yt, s(450)), Yt), HI;
  ((e2) => {
    e2.Terminals = {
      ARROW_DIRECTION: /L|R|T|B/,
      ARROW_GROUP: /\{group\}/,
      ARROW_INTO: /<|>/,
      ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
      ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
      TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
      STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
      ID: /[\w]([-\w]*\w)?/,
      NEWLINE: /\r?\n/,
      WHITESPACE: /[\t ]+/,
      YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
      DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
      SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/,
      ARCH_ICON: /\([\w-:]+\)/,
      ARCH_TITLE: /\[(?:"([^"\\]|\\.)*"|'([^'\\]|\\.)*'|[\w ]+)\]/
    };
  })(HI || (HI = {}));
  var UI;
  ((e2) => {
    e2.Terminals = {
      EM_ID: /[_a-zA-Z][\w_]*/,
      EM_FID: /\d{1,3}/,
      EM_DATA_INLINE: /\{(.*)\}|"(.*)"|'(.*)'/,
      EM_DATA_BLOCK: /\{[\t ]*\r?\n(?:[\S\s]*?\r?\n)?\}(?:\r?\n|(?!\S))/,
      EM_ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
      EM_ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
      EM_TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
      EM_WS: /\s+/,
      EM_YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
      EM_DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
      EM_SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/,
      EM_ML_COMMENT: /\/\*[\s\S]*?\*\//,
      EM_SL_COMMENT: /\/\/[^\n\r]*/
    };
  })(UI || (UI = {}));
  var WI;
  ((e2) => {
    e2.Terminals = {
      ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
      ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
      TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
      INT: /0|[1-9][0-9]*(?!\.)/,
      STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
      NEWLINE: /\r?\n/,
      WHITESPACE: /[\t ]+/,
      YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
      DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
      SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/,
      REFERENCE: /\w([-\./\w]*[-\w])?/
    };
  })(WI || (WI = {}));
  var GI;
  ((e2) => {
    e2.Terminals = {
      ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
      ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
      TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
      NEWLINE: /\r?\n/,
      WHITESPACE: /[\t ]+/,
      YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
      DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
      SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/
    };
  })(GI || (GI = {}));
  var KI;
  ((e2) => {
    e2.Terminals = {
      ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
      ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
      TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
      INT: /0|[1-9][0-9]*(?!\.)/,
      STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
      NEWLINE: /\r?\n/,
      WHITESPACE: /[\t ]+/,
      YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
      DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
      SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/
    };
  })(KI || (KI = {}));
  var qI;
  ((e2) => {
    e2.Terminals = {
      NUMBER_PIE: /(?:-?[0-9]+\.[0-9]+(?!\.))|(?:-?(0|[1-9][0-9]*)(?!\.))/,
      ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
      ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
      TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
      STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
      NEWLINE: /\r?\n/,
      WHITESPACE: /[\t ]+/,
      YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
      DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
      SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/
    };
  })(qI || (qI = {}));
  var JI;
  ((e2) => {
    e2.Terminals = {
      GRATICULE: /circle|polygon/,
      BOOLEAN: /true|false/,
      ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
      ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
      TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
      NUMBER: /(?:[0-9]+\.[0-9]+(?!\.))|(?:0|[1-9][0-9]*(?!\.))/,
      STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
      ID: /[\w]([-\w]*\w)?/,
      NEWLINE: /\r?\n/,
      WHITESPACE: /[\t ]+/,
      YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
      DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
      SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/
    };
  })(JI || (JI = {}));
  var YI;
  ((e2) => {
    e2.Terminals = {
      ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
      ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
      TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
      TREEMAP_KEYWORD: /treemap-beta|treemap/,
      CLASS_DEF: /classDef\s+([a-zA-Z_][a-zA-Z0-9_]+)(?:\s+([^;\r\n]*))?(?:;)?/,
      STYLE_SEPARATOR: /:::/,
      SEPARATOR: /:/,
      COMMA: /,/,
      INDENTATION: /[ \t]{1,}/,
      WS: /[ \t]+/,
      ML_COMMENT: /\%\%[^\n]*/,
      NL: /\r?\n/,
      ID2: /[a-zA-Z_][a-zA-Z0-9_]*/,
      NUMBER2: /[0-9_\.\,]+/,
      STRING2: /"[^"]*"|'[^']*'/
    };
  })(YI || (YI = {}));
  var XI;
  ((e2) => {
    let t2 = s;
    e2[t2(1017)] = {
      ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
      ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
      TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
      INDENTATION: /[ \t]{1,}/,
      WS: /[ \t]+/,
      ML_COMMENT: /\%\%[^\n]*/,
      NL: /\r?\n/,
      STRING2: /"[^"]*"|'[^']*'/
    };
  })(XI || (XI = {}));
  var ZI;
  ((e2) => {
    e2.Terminals = {
      WARDLEY_NUMBER: /[0-9]+\.[0-9]+/,
      ARROW: /->/,
      LINK_PORT: /\+<>|\+>|\+</,
      LINK_ARROW: /-->|-\.->|>|\+'[^']*'<>|\+'[^']*'<|\+'[^']*'>/,
      LINK_LABEL: /;[^\n\r]+/,
      STRATEGY: /build|buy|outsource|market/,
      KW_WARDLEY: /wardley-beta/,
      KW_SIZE: /size/,
      KW_EVOLUTION: /evolution/,
      KW_ANCHOR: /anchor/,
      KW_COMPONENT: /component/,
      KW_LABEL: /label/,
      KW_INERTIA: /inertia/,
      KW_EVOLVE: /evolve/,
      KW_PIPELINE: /pipeline/,
      KW_NOTE: /note/,
      KW_ANNOTATIONS: /annotations/,
      KW_ANNOTATION: /annotation/,
      KW_ACCELERATOR: /accelerator/,
      KW_DEACCELERATOR: /deaccelerator/,
      NAME_WITH_SPACES: /(?!title\s|accTitle|accDescr)[A-Za-z](?:[A-Za-z0-9_()&]|-(?!>))*(?:[ \t]+[A-Za-z(](?:[A-Za-z0-9_()&]|-(?!>))*)*/,
      WS: /[ \t]+/,
      ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
      ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
      TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
      INT: /0|[1-9][0-9]*(?!\.)/,
      STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
      ID: /[\w]([-\w]*\w)?/,
      NEWLINE: /\r?\n/,
      WHITESPACE: /[\t ]+/,
      YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
      DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
      SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/
    };
  })(ZI || (ZI = {})), n(n(n(n(n(n(n(n(n(n({}, HI[s(1017)]), UI.Terminals), WI.Terminals), GI.Terminals), KI.Terminals), qI.Terminals), JI[s(1017)]), XI.Terminals), YI.Terminals), ZI[s(1017)]);
  var QI = {
    $type: `Accelerator`,
    name: `name`,
    x: `x`,
    y: `y`
  }, $I = {
    $type: `Anchor`,
    evolution: `evolution`,
    name: s(747),
    visibility: s(1291)
  }, eL = {
    $type: `Annotation`,
    number: `number`,
    text: `text`,
    x: `x`,
    y: `y`
  }, tL = {
    $type: `Annotations`,
    x: `x`,
    y: `y`
  }, nL = {
    $type: s(392),
    accDescr: s(1596),
    accTitle: `accTitle`,
    edges: `edges`,
    groups: `groups`,
    junctions: `junctions`,
    services: `services`,
    title: `title`
  };
  function rL(e2) {
    let t2 = s;
    return _R.isInstance(e2, nL[t2(798)]);
  }
  M(rL, `isArchitecture`);
  var iL = {
    $type: `Axis`,
    label: `label`,
    name: `name`
  }, aL = {
    $type: `Branch`,
    name: `name`,
    order: `order`
  };
  function oL(e2) {
    return _R.isInstance(e2, aL.$type);
  }
  M(oL, s(865));
  var sL = {
    $type: `Checkout`,
    branch: `branch`
  }, cL = {
    $type: `CherryPicking`,
    id: `id`,
    parent: `parent`,
    tags: `tags`
  }, lL = {
    $type: `ClassDefStatement`,
    className: s(666),
    styleText: s(851)
  }, uL = {
    $type: `Commit`,
    id: `id`,
    message: `message`,
    tags: `tags`,
    type: `type`
  };
  function dL(e2) {
    return _R.isInstance(e2, uL.$type);
  }
  M(dL, `isCommit`);
  var fL = {
    $type: `Common`,
    accDescr: s(1596),
    accTitle: `accTitle`,
    title: s(1121)
  }, pL = {
    $type: `Component`,
    decorator: `decorator`,
    evolution: s(1463),
    inertia: `inertia`,
    label: s(1365),
    name: `name`,
    visibility: `visibility`
  }, mL = {
    $type: `Curve`,
    entries: `entries`,
    label: `label`,
    name: `name`
  }, hL = {
    $type: `Deaccelerator`,
    name: `name`,
    x: `x`,
    y: `y`
  }, gL = {
    $type: `Decorator`,
    strategy: `strategy`
  }, _L = {
    $type: `Direction`,
    accDescr: s(1596),
    accTitle: `accTitle`,
    dir: s(352),
    statements: s(965),
    title: `title`
  }, vL = {
    $type: `Edge`,
    lhsDir: `lhsDir`,
    lhsGroup: `lhsGroup`,
    lhsId: s(509),
    lhsInto: `lhsInto`,
    rhsDir: `rhsDir`,
    rhsGroup: `rhsGroup`,
    rhsId: `rhsId`,
    rhsInto: `rhsInto`,
    title: `title`
  }, yL = {
    $type: s(1431),
    dataBlockValue: `dataBlockValue`,
    dataType: `dataType`,
    name: s(747)
  }, bL = {
    $type: s(707)
  }, xL = {
    $type: `EmGwt`,
    givenStatements: s(1616),
    sourceFrame: `sourceFrame`,
    thenStatements: `thenStatements`,
    whenStatements: `whenStatements`
  }, SL = {
    $type: `EmGwtStatement`,
    entityIdentifier: `entityIdentifier`
  }, CL = {
    $type: `EmModelEntity`,
    name: `name`
  };
  function wL(e2) {
    let t2 = s;
    return e2 === t2(1045) || e2 === `readmodel` || e2 === `ui` || e2 === t2(593) || e2 === `command` || e2 === `evt` || e2 === `event` || e2 === t2(836) || e2 === `processor`;
  }
  M(wL, `isEmModelEntityType`);
  var TL = {
    $type: s(1305),
    dataBlockValue: `dataBlockValue`,
    dataType: `dataType`,
    sourceFrame: `sourceFrame`
  }, EL = {
    $type: `EmResetFrame`,
    dataInlineValue: `dataInlineValue`,
    dataReference: `dataReference`,
    dataType: s(1024),
    entityIdentifier: `entityIdentifier`,
    modelEntityType: s(395),
    name: `name`,
    sourceFrames: s(1506)
  };
  DL = function(e2) {
    return _R.isInstance(e2, EL.$type);
  };
  M(DL, `isEmResetFrame`);
  var OL = {
    $type: `EmTimeFrame`,
    dataInlineValue: `dataInlineValue`,
    dataReference: s(308),
    dataType: s(1024),
    entityIdentifier: s(1245),
    modelEntityType: `modelEntityType`,
    name: s(747),
    sourceFrames: `sourceFrames`
  }, kL = {
    $type: `Entry`,
    axis: `axis`,
    value: `value`
  }, AL = {
    $type: `EventModel`,
    accDescr: `accDescr`,
    accTitle: s(910),
    dataEntities: s(842),
    frames: `frames`,
    gwtEntities: `gwtEntities`,
    modelEntities: `modelEntities`,
    noteEntities: s(1712),
    title: s(1121)
  }, jL = {
    $type: `Evolution`,
    stages: `stages`
  }, ML = {
    $type: `EvolutionStage`,
    boundary: `boundary`,
    name: `name`,
    secondName: s(789)
  }, NL = {
    $type: `Evolve`,
    component: `component`,
    target: `target`
  }, PL = {
    $type: `GitGraph`,
    accDescr: s(1596),
    accTitle: `accTitle`,
    statements: `statements`,
    title: `title`
  };
  function FL(e2) {
    return _R.isInstance(e2, PL.$type);
  }
  M(FL, `isGitGraph`);
  var IL = {
    $type: `Group`,
    icon: `icon`,
    id: `id`,
    in: `in`,
    title: `title`
  }, LL = {
    $type: `Info`,
    accDescr: `accDescr`,
    accTitle: `accTitle`,
    title: `title`
  };
  function RL(e2) {
    return _R.isInstance(e2, LL.$type);
  }
  M(RL, s(1098));
  var zL = {
    $type: `Item`,
    classSelector: `classSelector`,
    name: `name`
  }, BL = {
    $type: `Junction`,
    id: `id`,
    in: `in`
  }, VL = {
    $type: `Label`,
    negX: `negX`,
    negY: `negY`,
    offsetX: `offsetX`,
    offsetY: `offsetY`
  }, HL = {
    $type: `Leaf`,
    classSelector: `classSelector`,
    name: s(747),
    value: s(1371)
  }, UL = {
    $type: `Link`,
    arrow: `arrow`,
    from: `from`,
    fromPort: `fromPort`,
    linkLabel: `linkLabel`,
    to: `to`,
    toPort: s(1473)
  }, WL = {
    $type: `Merge`,
    branch: `branch`,
    id: `id`,
    tags: `tags`,
    type: `type`
  };
  function GL(e2) {
    let t2 = s;
    return _R.isInstance(e2, WL[t2(798)]);
  }
  M(GL, `isMerge`);
  var KL = {
    $type: `Note`,
    evolution: s(1463),
    text: `text`,
    visibility: s(1291)
  }, qL = {
    $type: `Option`,
    name: `name`,
    value: `value`
  }, JL = {
    $type: `Packet`,
    accDescr: `accDescr`,
    accTitle: `accTitle`,
    blocks: s(1384),
    title: `title`
  };
  function YL(e2) {
    return _R.isInstance(e2, JL.$type);
  }
  M(YL, `isPacket`);
  var XL = {
    $type: `PacketBlock`,
    bits: `bits`,
    end: `end`,
    label: `label`,
    start: `start`
  };
  function ZL(e2) {
    return _R.isInstance(e2, XL.$type);
  }
  M(ZL, `isPacketBlock`);
  var QL = {
    $type: s(388),
    accDescr: `accDescr`,
    accTitle: `accTitle`,
    sections: `sections`,
    showData: `showData`,
    title: `title`
  };
  function $L(e2) {
    return _R.isInstance(e2, QL.$type);
  }
  M($L, `isPie`);
  var eR = {
    $type: `PieSection`,
    label: `label`,
    value: `value`
  };
  function tR(e2) {
    return _R.isInstance(e2, eR.$type);
  }
  M(tR, `isPieSection`);
  var nR = {
    $type: `Pipeline`,
    components: `components`,
    parent: `parent`
  }, rR = {
    $type: `PipelineComponent`,
    evolution: s(1463),
    label: `label`,
    name: `name`
  }, iR = {
    $type: `Radar`,
    accDescr: `accDescr`,
    accTitle: `accTitle`,
    axes: `axes`,
    curves: `curves`,
    options: s(1379),
    title: `title`
  }, aR = {
    $type: s(1553),
    classSelector: `classSelector`,
    name: s(747)
  }, oR = {
    $type: s(746),
    icon: `icon`,
    iconText: `iconText`,
    id: `id`,
    in: `in`,
    title: `title`
  }, sR = {
    $type: s(1004),
    height: s(402),
    width: `width`
  }, cR = {
    $type: s(1493)
  }, lR = {
    $type: `Treemap`,
    accDescr: `accDescr`,
    accTitle: `accTitle`,
    title: `title`,
    TreemapRows: `TreemapRows`
  };
  function uR(e2) {
    return _R.isInstance(e2, lR.$type);
  }
  M(uR, s(1671));
  var dR = {
    $type: `TreemapRow`,
    indent: `indent`,
    item: `item`
  }, fR = {
    $type: `TreeNode`,
    indent: `indent`,
    name: `name`
  }, pR = {
    $type: `TreeView`,
    accDescr: `accDescr`,
    accTitle: `accTitle`,
    nodes: `nodes`,
    title: `title`
  }, mR = {
    $type: `Wardley`,
    accDescr: s(1596),
    accelerators: s(570),
    accTitle: `accTitle`,
    anchors: `anchors`,
    annotation: `annotation`,
    annotations: s(655),
    components: `components`,
    deaccelerators: `deaccelerators`,
    evolution: s(1463),
    evolves: `evolves`,
    links: s(1231),
    notes: s(268),
    pipelines: `pipelines`,
    size: `size`,
    title: s(1121)
  };
  function hR(e2) {
    return _R.isInstance(e2, mR.$type);
  }
  M(hR, `isWardley`);
  var gR = (Xt = class extends Hi {
    constructor() {
      let e2 = s;
      super(...arguments), this.types = {
        Accelerator: {
          name: QI.$type,
          properties: {
            name: {
              name: QI.name
            },
            x: {
              name: QI.x
            },
            y: {
              name: QI.y
            }
          },
          superTypes: []
        },
        Anchor: {
          name: $I.$type,
          properties: {
            evolution: {
              name: $I[e2(1463)]
            },
            name: {
              name: $I.name
            },
            visibility: {
              name: $I.visibility
            }
          },
          superTypes: []
        },
        Annotation: {
          name: eL.$type,
          properties: {
            number: {
              name: eL.number
            },
            text: {
              name: eL.text
            },
            x: {
              name: eL.x
            },
            y: {
              name: eL.y
            }
          },
          superTypes: []
        },
        Annotations: {
          name: tL.$type,
          properties: {
            x: {
              name: tL.x
            },
            y: {
              name: tL.y
            }
          },
          superTypes: []
        },
        Architecture: {
          name: nL[e2(798)],
          properties: {
            accDescr: {
              name: nL.accDescr
            },
            accTitle: {
              name: nL[e2(910)]
            },
            edges: {
              name: nL.edges,
              defaultValue: []
            },
            groups: {
              name: nL.groups,
              defaultValue: []
            },
            junctions: {
              name: nL.junctions,
              defaultValue: []
            },
            services: {
              name: nL.services,
              defaultValue: []
            },
            title: {
              name: nL.title
            }
          },
          superTypes: []
        },
        Axis: {
          name: iL.$type,
          properties: {
            label: {
              name: iL.label
            },
            name: {
              name: iL[e2(747)]
            }
          },
          superTypes: []
        },
        Branch: {
          name: aL[e2(798)],
          properties: {
            name: {
              name: aL[e2(747)]
            },
            order: {
              name: aL[e2(1101)]
            }
          },
          superTypes: [
            cR[e2(798)]
          ]
        },
        Checkout: {
          name: sL.$type,
          properties: {
            branch: {
              name: sL.branch
            }
          },
          superTypes: [
            cR.$type
          ]
        },
        CherryPicking: {
          name: cL.$type,
          properties: {
            id: {
              name: cL.id
            },
            parent: {
              name: cL.parent
            },
            tags: {
              name: cL.tags,
              defaultValue: []
            }
          },
          superTypes: [
            cR.$type
          ]
        },
        ClassDefStatement: {
          name: lL.$type,
          properties: {
            className: {
              name: lL.className
            },
            styleText: {
              name: lL.styleText
            }
          },
          superTypes: []
        },
        Commit: {
          name: uL.$type,
          properties: {
            id: {
              name: uL.id
            },
            message: {
              name: uL.message
            },
            tags: {
              name: uL[e2(656)],
              defaultValue: []
            },
            type: {
              name: uL.type
            }
          },
          superTypes: [
            cR[e2(798)]
          ]
        },
        Common: {
          name: fL.$type,
          properties: {
            accDescr: {
              name: fL.accDescr
            },
            accTitle: {
              name: fL.accTitle
            },
            title: {
              name: fL.title
            }
          },
          superTypes: []
        },
        Component: {
          name: pL.$type,
          properties: {
            decorator: {
              name: pL.decorator
            },
            evolution: {
              name: pL.evolution
            },
            inertia: {
              name: pL.inertia,
              defaultValue: false
            },
            label: {
              name: pL[e2(1365)]
            },
            name: {
              name: pL.name
            },
            visibility: {
              name: pL[e2(1291)]
            }
          },
          superTypes: []
        },
        Curve: {
          name: mL.$type,
          properties: {
            entries: {
              name: mL[e2(1788)],
              defaultValue: []
            },
            label: {
              name: mL.label
            },
            name: {
              name: mL[e2(747)]
            }
          },
          superTypes: []
        },
        Deaccelerator: {
          name: hL[e2(798)],
          properties: {
            name: {
              name: hL.name
            },
            x: {
              name: hL.x
            },
            y: {
              name: hL.y
            }
          },
          superTypes: []
        },
        Decorator: {
          name: gL.$type,
          properties: {
            strategy: {
              name: gL.strategy
            }
          },
          superTypes: []
        },
        Direction: {
          name: _L.$type,
          properties: {
            accDescr: {
              name: _L.accDescr
            },
            accTitle: {
              name: _L.accTitle
            },
            dir: {
              name: _L.dir
            },
            statements: {
              name: _L[e2(965)],
              defaultValue: []
            },
            title: {
              name: _L.title
            }
          },
          superTypes: [
            PL.$type
          ]
        },
        Edge: {
          name: vL.$type,
          properties: {
            lhsDir: {
              name: vL[e2(1583)]
            },
            lhsGroup: {
              name: vL[e2(668)],
              defaultValue: false
            },
            lhsId: {
              name: vL.lhsId
            },
            lhsInto: {
              name: vL.lhsInto,
              defaultValue: false
            },
            rhsDir: {
              name: vL.rhsDir
            },
            rhsGroup: {
              name: vL.rhsGroup,
              defaultValue: false
            },
            rhsId: {
              name: vL.rhsId
            },
            rhsInto: {
              name: vL.rhsInto,
              defaultValue: false
            },
            title: {
              name: vL[e2(1121)]
            }
          },
          superTypes: []
        },
        EmDataEntity: {
          name: yL[e2(798)],
          properties: {
            dataBlockValue: {
              name: yL.dataBlockValue
            },
            dataType: {
              name: yL.dataType
            },
            name: {
              name: yL.name
            }
          },
          superTypes: []
        },
        EmFrame: {
          name: bL[e2(798)],
          properties: {},
          superTypes: []
        },
        EmGwt: {
          name: xL.$type,
          properties: {
            givenStatements: {
              name: xL.givenStatements,
              defaultValue: []
            },
            sourceFrame: {
              name: xL.sourceFrame,
              referenceType: bL.$type
            },
            thenStatements: {
              name: xL.thenStatements,
              defaultValue: []
            },
            whenStatements: {
              name: xL.whenStatements,
              defaultValue: []
            }
          },
          superTypes: []
        },
        EmGwtStatement: {
          name: SL.$type,
          properties: {
            entityIdentifier: {
              name: SL.entityIdentifier,
              referenceType: CL.$type
            }
          },
          superTypes: []
        },
        EmModelEntity: {
          name: CL.$type,
          properties: {
            name: {
              name: CL.name
            }
          },
          superTypes: []
        },
        EmNoteEntity: {
          name: TL.$type,
          properties: {
            dataBlockValue: {
              name: TL.dataBlockValue
            },
            dataType: {
              name: TL.dataType
            },
            sourceFrame: {
              name: TL.sourceFrame,
              referenceType: bL[e2(798)]
            }
          },
          superTypes: []
        },
        EmResetFrame: {
          name: EL.$type,
          properties: {
            dataInlineValue: {
              name: EL.dataInlineValue
            },
            dataReference: {
              name: EL.dataReference,
              referenceType: yL.$type
            },
            dataType: {
              name: EL.dataType
            },
            entityIdentifier: {
              name: EL.entityIdentifier
            },
            modelEntityType: {
              name: EL.modelEntityType
            },
            name: {
              name: EL.name
            },
            sourceFrames: {
              name: EL.sourceFrames,
              defaultValue: [],
              referenceType: bL.$type
            }
          },
          superTypes: [
            bL.$type
          ]
        },
        EmTimeFrame: {
          name: OL.$type,
          properties: {
            dataInlineValue: {
              name: OL.dataInlineValue
            },
            dataReference: {
              name: OL.dataReference,
              referenceType: yL.$type
            },
            dataType: {
              name: OL.dataType
            },
            entityIdentifier: {
              name: OL[e2(1245)]
            },
            modelEntityType: {
              name: OL.modelEntityType
            },
            name: {
              name: OL.name
            },
            sourceFrames: {
              name: OL.sourceFrames,
              defaultValue: [],
              referenceType: bL.$type
            }
          },
          superTypes: [
            bL.$type
          ]
        },
        Entry: {
          name: kL[e2(798)],
          properties: {
            axis: {
              name: kL.axis,
              referenceType: iL.$type
            },
            value: {
              name: kL.value
            }
          },
          superTypes: []
        },
        EventModel: {
          name: AL[e2(798)],
          properties: {
            accDescr: {
              name: AL.accDescr
            },
            accTitle: {
              name: AL.accTitle
            },
            dataEntities: {
              name: AL.dataEntities,
              defaultValue: []
            },
            frames: {
              name: AL[e2(1729)],
              defaultValue: []
            },
            gwtEntities: {
              name: AL.gwtEntities,
              defaultValue: []
            },
            modelEntities: {
              name: AL[e2(329)],
              defaultValue: []
            },
            noteEntities: {
              name: AL.noteEntities,
              defaultValue: []
            },
            title: {
              name: AL.title
            }
          },
          superTypes: []
        },
        Evolution: {
          name: jL.$type,
          properties: {
            stages: {
              name: jL.stages,
              defaultValue: []
            }
          },
          superTypes: []
        },
        EvolutionStage: {
          name: ML.$type,
          properties: {
            boundary: {
              name: ML.boundary
            },
            name: {
              name: ML.name
            },
            secondName: {
              name: ML.secondName
            }
          },
          superTypes: []
        },
        Evolve: {
          name: NL.$type,
          properties: {
            component: {
              name: NL.component
            },
            target: {
              name: NL.target
            }
          },
          superTypes: []
        },
        GitGraph: {
          name: PL.$type,
          properties: {
            accDescr: {
              name: PL.accDescr
            },
            accTitle: {
              name: PL.accTitle
            },
            statements: {
              name: PL.statements,
              defaultValue: []
            },
            title: {
              name: PL.title
            }
          },
          superTypes: []
        },
        Group: {
          name: IL.$type,
          properties: {
            icon: {
              name: IL.icon
            },
            id: {
              name: IL.id
            },
            in: {
              name: IL.in
            },
            title: {
              name: IL[e2(1121)]
            }
          },
          superTypes: []
        },
        Info: {
          name: LL.$type,
          properties: {
            accDescr: {
              name: LL.accDescr
            },
            accTitle: {
              name: LL.accTitle
            },
            title: {
              name: LL[e2(1121)]
            }
          },
          superTypes: []
        },
        Item: {
          name: zL.$type,
          properties: {
            classSelector: {
              name: zL.classSelector
            },
            name: {
              name: zL[e2(747)]
            }
          },
          superTypes: []
        },
        Junction: {
          name: BL[e2(798)],
          properties: {
            id: {
              name: BL.id
            },
            in: {
              name: BL.in
            }
          },
          superTypes: []
        },
        Label: {
          name: VL.$type,
          properties: {
            negX: {
              name: VL[e2(572)],
              defaultValue: false
            },
            negY: {
              name: VL.negY,
              defaultValue: false
            },
            offsetX: {
              name: VL.offsetX
            },
            offsetY: {
              name: VL.offsetY
            }
          },
          superTypes: []
        },
        Leaf: {
          name: HL.$type,
          properties: {
            classSelector: {
              name: HL[e2(1188)]
            },
            name: {
              name: HL.name
            },
            value: {
              name: HL.value
            }
          },
          superTypes: [
            zL.$type
          ]
        },
        Link: {
          name: UL.$type,
          properties: {
            arrow: {
              name: UL.arrow
            },
            from: {
              name: UL[e2(1509)]
            },
            fromPort: {
              name: UL.fromPort
            },
            linkLabel: {
              name: UL[e2(584)]
            },
            to: {
              name: UL.to
            },
            toPort: {
              name: UL.toPort
            }
          },
          superTypes: []
        },
        Merge: {
          name: WL.$type,
          properties: {
            branch: {
              name: WL.branch
            },
            id: {
              name: WL.id
            },
            tags: {
              name: WL.tags,
              defaultValue: []
            },
            type: {
              name: WL.type
            }
          },
          superTypes: [
            cR.$type
          ]
        },
        Note: {
          name: KL[e2(798)],
          properties: {
            evolution: {
              name: KL.evolution
            },
            text: {
              name: KL[e2(324)]
            },
            visibility: {
              name: KL.visibility
            }
          },
          superTypes: []
        },
        Option: {
          name: qL.$type,
          properties: {
            name: {
              name: qL.name
            },
            value: {
              name: qL.value,
              defaultValue: false
            }
          },
          superTypes: []
        },
        Packet: {
          name: JL.$type,
          properties: {
            accDescr: {
              name: JL.accDescr
            },
            accTitle: {
              name: JL[e2(910)]
            },
            blocks: {
              name: JL[e2(1384)],
              defaultValue: []
            },
            title: {
              name: JL.title
            }
          },
          superTypes: []
        },
        PacketBlock: {
          name: XL.$type,
          properties: {
            bits: {
              name: XL.bits
            },
            end: {
              name: XL.end
            },
            label: {
              name: XL.label
            },
            start: {
              name: XL.start
            }
          },
          superTypes: []
        },
        Pie: {
          name: QL.$type,
          properties: {
            accDescr: {
              name: QL.accDescr
            },
            accTitle: {
              name: QL.accTitle
            },
            sections: {
              name: QL.sections,
              defaultValue: []
            },
            showData: {
              name: QL[e2(1632)],
              defaultValue: false
            },
            title: {
              name: QL.title
            }
          },
          superTypes: []
        },
        PieSection: {
          name: eR.$type,
          properties: {
            label: {
              name: eR.label
            },
            value: {
              name: eR.value
            }
          },
          superTypes: []
        },
        Pipeline: {
          name: nR[e2(798)],
          properties: {
            components: {
              name: nR.components,
              defaultValue: []
            },
            parent: {
              name: nR.parent
            }
          },
          superTypes: []
        },
        PipelineComponent: {
          name: rR[e2(798)],
          properties: {
            evolution: {
              name: rR.evolution
            },
            label: {
              name: rR.label
            },
            name: {
              name: rR[e2(747)]
            }
          },
          superTypes: []
        },
        Radar: {
          name: iR.$type,
          properties: {
            accDescr: {
              name: iR.accDescr
            },
            accTitle: {
              name: iR.accTitle
            },
            axes: {
              name: iR.axes,
              defaultValue: []
            },
            curves: {
              name: iR.curves,
              defaultValue: []
            },
            options: {
              name: iR.options,
              defaultValue: []
            },
            title: {
              name: iR.title
            }
          },
          superTypes: []
        },
        Section: {
          name: aR[e2(798)],
          properties: {
            classSelector: {
              name: aR.classSelector
            },
            name: {
              name: aR.name
            }
          },
          superTypes: [
            zL[e2(798)]
          ]
        },
        Service: {
          name: oR.$type,
          properties: {
            icon: {
              name: oR.icon
            },
            iconText: {
              name: oR.iconText
            },
            id: {
              name: oR.id
            },
            in: {
              name: oR.in
            },
            title: {
              name: oR.title
            }
          },
          superTypes: []
        },
        Size: {
          name: sR.$type,
          properties: {
            height: {
              name: sR.height
            },
            width: {
              name: sR.width
            }
          },
          superTypes: []
        },
        Statement: {
          name: cR.$type,
          properties: {},
          superTypes: []
        },
        TreeNode: {
          name: fR.$type,
          properties: {
            indent: {
              name: fR.indent
            },
            name: {
              name: fR.name
            }
          },
          superTypes: []
        },
        TreeView: {
          name: pR.$type,
          properties: {
            accDescr: {
              name: pR.accDescr
            },
            accTitle: {
              name: pR[e2(910)]
            },
            nodes: {
              name: pR.nodes,
              defaultValue: []
            },
            title: {
              name: pR[e2(1121)]
            }
          },
          superTypes: []
        },
        Treemap: {
          name: lR[e2(798)],
          properties: {
            accDescr: {
              name: lR[e2(1596)]
            },
            accTitle: {
              name: lR.accTitle
            },
            title: {
              name: lR.title
            },
            TreemapRows: {
              name: lR.TreemapRows,
              defaultValue: []
            }
          },
          superTypes: []
        },
        TreemapRow: {
          name: dR.$type,
          properties: {
            indent: {
              name: dR[e2(815)]
            },
            item: {
              name: dR.item
            }
          },
          superTypes: []
        },
        Wardley: {
          name: mR.$type,
          properties: {
            accDescr: {
              name: mR.accDescr
            },
            accelerators: {
              name: mR.accelerators,
              defaultValue: []
            },
            accTitle: {
              name: mR.accTitle
            },
            anchors: {
              name: mR[e2(1694)],
              defaultValue: []
            },
            annotation: {
              name: mR.annotation,
              defaultValue: []
            },
            annotations: {
              name: mR.annotations,
              defaultValue: []
            },
            components: {
              name: mR.components,
              defaultValue: []
            },
            deaccelerators: {
              name: mR.deaccelerators,
              defaultValue: []
            },
            evolution: {
              name: mR.evolution
            },
            evolves: {
              name: mR.evolves,
              defaultValue: []
            },
            links: {
              name: mR[e2(1231)],
              defaultValue: []
            },
            notes: {
              name: mR.notes,
              defaultValue: []
            },
            pipelines: {
              name: mR.pipelines,
              defaultValue: []
            },
            size: {
              name: mR.size
            },
            title: {
              name: mR.title
            }
          },
          superTypes: []
        }
      };
    }
  }, M(Xt, `MermaidAstReflection`), Xt), _R = new gR(), vR, yR = M(() => vR ?? (vR = zI(`{"$type":"Grammar","isDeclared":true,"name":"ArchitectureGrammar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Architecture","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"architecture-beta"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"*"}]},"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"groups","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"services","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"junctions","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Assignment","feature":"edges","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]},"entry":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"LeftPort","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"lhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]},"entry":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"RightPort","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"rhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Keyword","value":":"}]},"entry":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"Arrow","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]},{"$type":"Assignment","feature":"lhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"--"},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]}},{"$type":"Keyword","value":"-"}]}]},{"$type":"Assignment","feature":"rhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}]},"entry":false,"parameters":[]},{"$type":"ParserRule","name":"Group","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"group"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Service","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"service"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"iconText","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]}}],"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Junction","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"junction"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Edge","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"lhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"lhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Assignment","feature":"rhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"rhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"TerminalRule","name":"ARROW_DIRECTION","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"L"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"R"},"parenthesized":false}],"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"T"},"parenthesized":false}],"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"B"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_GROUP","definition":{"$type":"RegexToken","regex":"/\\\\{group\\\\}/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_INTO","definition":{"$type":"RegexToken","regex":"/<|>/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"ParserRule","name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}],"cardinality":"+"},"entry":false,"parameters":[]},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@18"},"parenthesized":false},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@19"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","name":"ARCH_ICON","definition":{"$type":"RegexToken","regex":"/\\\\([\\\\w-:]+\\\\)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_TITLE","definition":{"$type":"RegexToken","regex":"/\\\\[(?:\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'|[\\\\w ]+)\\\\]/","parenthesized":false},"fragment":false,"hidden":false}],"interfaces":[],"types":[]}`)), `ArchitectureGrammarGrammar`), bR, xR = M(() => bR ?? (bR = zI('{"$type":"Grammar","isDeclared":true,"name":"EventModeling","interfaces":[{"$type":"Interface","name":"Common","attributes":[{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"rules":[{"$type":"ParserRule","entry":true,"name":"EventModel","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"eventmodeling"},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"modelEntities","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Assignment","feature":"frames","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}},{"$type":"Assignment","feature":"dataEntities","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"Assignment","feature":"noteEntities","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"Assignment","feature":"gwtEntities","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}}],"cardinality":"*"}]},"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EmModelEntityType","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"rmo"},{"$type":"Keyword","value":"readmodel"},{"$type":"Keyword","value":"ui"},{"$type":"Keyword","value":"cmd"},{"$type":"Keyword","value":"command"},{"$type":"Keyword","value":"evt"},{"$type":"Keyword","value":"event"},{"$type":"Keyword","value":"pcr"},{"$type":"Keyword","value":"processor"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EmDataType","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"json"},{"$type":"Keyword","value":"jsobj"},{"$type":"Keyword","value":"figma"},{"$type":"Keyword","value":"salt"},{"$type":"Keyword","value":"uri"},{"$type":"Keyword","value":"md"},{"$type":"Keyword","value":"html"},{"$type":"Keyword","value":"text"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"EmDataInline","definition":{"$type":"Group","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"`"},{"$type":"Assignment","feature":"dataType","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Keyword","value":"`"}],"cardinality":"?"},{"$type":"Assignment","feature":"dataInlineValue","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}}]},"entry":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"EmDataBlock","definition":{"$type":"Group","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"`"},{"$type":"Assignment","feature":"dataType","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Keyword","value":"`"}],"cardinality":"?"},{"$type":"Assignment","feature":"dataBlockValue","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}}]},"entry":false,"parameters":[]},{"$type":"ParserRule","name":"QualifiedName","dataType":"string","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Keyword","value":"."},{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}],"cardinality":"*"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EmTimeFrame","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"tf"},{"$type":"Keyword","value":"timeframe"}]},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}},{"$type":"Assignment","feature":"modelEntityType","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"Assignment","feature":"entityIdentifier","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"->>"},{"$type":"Assignment","feature":"sourceFrames","operator":"+=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@8"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]},"deprecatedSyntax":false,"isMulti":false}}],"cardinality":"*"},{"$type":"Group","elements":[{"$type":"Keyword","value":"[["},{"$type":"Assignment","feature":"dataReference","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@10"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]},"deprecatedSyntax":false,"isMulti":false}},{"$type":"Keyword","value":"]]"}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[],"cardinality":"?"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EmResetFrame","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"rf"},{"$type":"Keyword","value":"resetframe"}]},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}},{"$type":"Assignment","feature":"modelEntityType","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"Assignment","feature":"entityIdentifier","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"->>"},{"$type":"Assignment","feature":"sourceFrames","operator":"+=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@8"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]},"deprecatedSyntax":false,"isMulti":false}}],"cardinality":"*"},{"$type":"Group","elements":[{"$type":"Keyword","value":"[["},{"$type":"Assignment","feature":"dataReference","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@10"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]},"deprecatedSyntax":false,"isMulti":false}},{"$type":"Keyword","value":"]]"}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[],"cardinality":"?"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EmFrame","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EmModelEntity","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"entity"},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EmDataEntity","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"data"},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EmNoteEntity","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"note"},{"$type":"Assignment","feature":"sourceFrame","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@8"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]},"deprecatedSyntax":false,"isMulti":false}},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EmGwt","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"gwt"},{"$type":"Assignment","feature":"sourceFrame","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@8"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]},"deprecatedSyntax":false,"isMulti":false}},{"$type":"Keyword","value":"given"},{"$type":"Assignment","feature":"givenStatements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},"cardinality":"+"},{"$type":"Group","elements":[{"$type":"Keyword","value":"when"},{"$type":"Assignment","feature":"whenStatements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},"cardinality":"+"}],"cardinality":"?"},{"$type":"Keyword","value":"then"},{"$type":"Assignment","feature":"thenStatements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},"cardinality":"+"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EmGwtStatement","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]},{"$type":"Assignment","feature":"entityIdentifier","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@9"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]},"deprecatedSyntax":false,"isMulti":false}}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EM_EID","dataType":"string","definition":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EM_FI","dataType":"string","definition":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]},"entry":false,"fragment":false,"parameters":[]},{"$type":"TerminalRule","name":"EM_ID","definition":{"$type":"RegexToken","regex":"/[_a-zA-Z][\\\\w_]*/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"EM_FID","definition":{"$type":"RegexToken","regex":"/\\\\d{1,3}/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"EM_DATA_INLINE","definition":{"$type":"RegexToken","regex":"/\\\\{(.*)\\\\}|\\"(.*)\\"|\'(.*)\'/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"EM_DATA_BLOCK","definition":{"$type":"RegexToken","regex":"/\\\\{[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?\\\\}(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"EM_ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"EM_ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"EM_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"EM_WS","definition":{"$type":"RegexToken","regex":"/\\\\s+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"EM_YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"EM_DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"EM_SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"EM_ML_COMMENT","definition":{"$type":"RegexToken","regex":"/\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\//","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"EM_SL_COMMENT","definition":{"$type":"RegexToken","regex":"/\\\\/\\\\/[^\\\\n\\\\r]*/","parenthesized":false},"fragment":false}],"imports":[],"types":[]}')), s(1645)), SR, CR = M(() => SR ?? (SR = zI(`{"$type":"Grammar","isDeclared":true,"name":"GitGraphGrammar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"GitGraph","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Keyword","value":":"}]},{"$type":"Keyword","value":"gitGraph:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]},{"$type":"Keyword","value":":"}]}]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},{"$type":"Assignment","feature":"statements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}}],"cardinality":"*"}]},"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Direction","definition":{"$type":"Assignment","feature":"dir","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"LR"},{"$type":"Keyword","value":"TB"},{"$type":"Keyword","value":"BT"}]}},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Commit","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"commit"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"msg:","cardinality":"?"},{"$type":"Assignment","feature":"message","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Branch","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"branch"},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"order:"},{"$type":"Assignment","feature":"order","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Merge","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"merge"},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Checkout","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"checkout"},{"$type":"Keyword","value":"switch"}]},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"CherryPicking","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"cherry-pick"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"parent:"},{"$type":"Assignment","feature":"parent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}],"cardinality":"+"},"entry":false,"parameters":[]},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@14"},"parenthesized":false},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@15"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","name":"REFERENCE","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\\\w([-\\\\./\\\\w]*[-\\\\w])?/","parenthesized":false},"fragment":false,"hidden":false}],"interfaces":[],"types":[]}`)), s(1575)), wR, TR = M(() => wR ?? (wR = zI(s(988))), `InfoGrammarGrammar`), ER, DR = M(() => ER ?? (ER = zI(s(442))), `PacketGrammarGrammar`), OR, kR = M(() => OR ?? (OR = zI(`{"$type":"Grammar","isDeclared":true,"name":"PieGrammar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Pie","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"pie"},{"$type":"Assignment","feature":"showData","operator":"?=","terminal":{"$type":"Keyword","value":"showData"},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"Assignment","feature":"sections","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}],"cardinality":"*"}]},"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"PieSection","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"TerminalRule","name":"FLOAT_PIE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/-?[0-9]+\\\\.[0-9]+(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT_PIE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/-?(0|[1-9][0-9]*)(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER_PIE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@2"},"parenthesized":false},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@3"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"ParserRule","name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}],"cardinality":"+"},"entry":false,"parameters":[]},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@11"},"parenthesized":false},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@12"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/","parenthesized":false},"fragment":false}],"interfaces":[],"types":[]}`)), s(1307)), AR, jR = M(() => AR ?? (AR = zI(`{"$type":"Grammar","isDeclared":true,"name":"RadarGrammar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Radar","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"radar-beta"},{"$type":"Keyword","value":"radar-beta:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"radar-beta"},{"$type":"Keyword","value":":"}]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Keyword","value":"axis"},{"$type":"Assignment","feature":"axes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"axes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"curve"},{"$type":"Assignment","feature":"curves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"curves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"options","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"options","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}],"cardinality":"*"}]},"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"Label","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}},{"$type":"Keyword","value":"]"}]},"entry":false,"parameters":[]},{"$type":"ParserRule","name":"Axis","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"?"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Curve","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"?"},{"$type":"Keyword","value":"{"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Keyword","value":"}"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"Entries","definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"}]}]},"entry":false,"parameters":[]},{"$type":"ParserRule","name":"DetailedEntry","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"axis","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@2"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},"deprecatedSyntax":false,"isMulti":false}},{"$type":"Keyword","value":":","cardinality":"?"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"NumberEntry","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Option","definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"showLegend"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"ticks"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"max"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"min"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"graticule"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"TerminalRule","name":"GRATICULE","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"circle"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"polygon"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"ParserRule","name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}],"cardinality":"+"},"entry":false,"parameters":[]},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@15"},"parenthesized":false},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@16"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/","parenthesized":false},"fragment":false}],"interfaces":[{"$type":"Interface","name":"Entry","attributes":[{"$type":"TypeAttribute","name":"axis","isOptional":true,"type":{"$type":"ReferenceType","referenceType":{"$type":"SimpleType","typeRef":{"$ref":"#/rules@2"}},"isMulti":false}},{"$type":"TypeAttribute","name":"value","type":{"$type":"SimpleType","primitiveType":"number"},"isOptional":false}],"superTypes":[]}],"types":[]}`)), s(724)), MR, NR = M(() => MR ?? (MR = zI(`{"$type":"Grammar","isDeclared":true,"name":"TreemapGrammar","rules":[{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}}],"cardinality":"+"},"entry":false,"parameters":[]},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"ParserRule","entry":true,"name":"Treemap","returnType":{"$ref":"#/interfaces@4"},"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@0"},"arguments":[]},{"$type":"Assignment","feature":"TreemapRows","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}}],"cardinality":"*"}]},"fragment":false,"parameters":[]},{"$type":"TerminalRule","name":"TREEMAP_KEYWORD","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"treemap-beta"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"treemap"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"CLASS_DEF","definition":{"$type":"RegexToken","regex":"/classDef\\\\s+([a-zA-Z_][a-zA-Z0-9_]+)(?:\\\\s+([^;\\\\r\\\\n]*))?(?:;)?/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STYLE_SEPARATOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":":::"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"SEPARATOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":":"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"COMMA","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":","},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INDENTATION","definition":{"$type":"RegexToken","regex":"/[ \\\\t]{1,}/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WS","definition":{"$type":"RegexToken","regex":"/[ \\\\t]+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"ML_COMMENT","definition":{"$type":"RegexToken","regex":"/\\\\%\\\\%[^\\\\n]*/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"NL","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/","parenthesized":false},"fragment":false},{"$type":"ParserRule","name":"TreemapRow","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"indent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"item","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"ClassDef","dataType":"string","definition":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Item","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Section","returnType":{"$ref":"#/interfaces@1"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]},{"$type":"Assignment","feature":"classSelector","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}],"cardinality":"?"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Leaf","returnType":{"$ref":"#/interfaces@2"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[],"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[],"cardinality":"?"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]},{"$type":"Assignment","feature":"classSelector","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}],"cardinality":"?"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"TerminalRule","name":"ID2","definition":{"$type":"RegexToken","regex":"/[a-zA-Z_][a-zA-Z0-9_]*/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER2","definition":{"$type":"RegexToken","regex":"/[0-9_\\\\.\\\\,]+/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"ParserRule","name":"MyNumber","dataType":"number","definition":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]},"entry":false,"fragment":false,"parameters":[]},{"$type":"TerminalRule","name":"STRING2","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]*\\"|'[^']*'/","parenthesized":false},"fragment":false,"hidden":false}],"interfaces":[{"$type":"Interface","name":"Item","attributes":[{"$type":"TypeAttribute","name":"name","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false},{"$type":"TypeAttribute","name":"classSelector","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]},{"$type":"Interface","name":"Section","superTypes":[{"$ref":"#/interfaces@0"}],"attributes":[]},{"$type":"Interface","name":"Leaf","superTypes":[{"$ref":"#/interfaces@0"}],"attributes":[{"$type":"TypeAttribute","name":"value","type":{"$type":"SimpleType","primitiveType":"number"},"isOptional":false}]},{"$type":"Interface","name":"ClassDefStatement","attributes":[{"$type":"TypeAttribute","name":"className","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false},{"$type":"TypeAttribute","name":"styleText","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false}],"superTypes":[]},{"$type":"Interface","name":"Treemap","attributes":[{"$type":"TypeAttribute","name":"TreemapRows","type":{"$type":"ArrayType","elementType":{"$type":"SimpleType","typeRef":{"$ref":"#/rules@15"}}},"isOptional":false},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"imports":[],"types":[],"$comment":"/**\\n * Treemap grammar for Langium\\n * Converted from mindmap grammar\\n *\\n * The ML_COMMENT and NL hidden terminals handle whitespace, comments, and newlines\\n * before the treemap keyword, allowing for empty lines and comments before the\\n * treemap declaration.\\n */"}`)), `TreemapGrammarGrammar`), PR, FR = M(() => PR ?? (PR = zI(`{"$type":"Grammar","isDeclared":true,"name":"TreeViewGrammar","rules":[{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"ParserRule","entry":true,"name":"TreeView","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"treeView-beta"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[],"cardinality":"?"},{"$type":"Assignment","feature":"nodes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},"cardinality":"*"}]},"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@0"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}}],"cardinality":"+"},"entry":false,"parameters":[]},{"$type":"TerminalRule","name":"INDENTATION","definition":{"$type":"RegexToken","regex":"/[ \\\\t]{1,}/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WS","definition":{"$type":"RegexToken","regex":"/[ \\\\t]+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"ML_COMMENT","definition":{"$type":"RegexToken","regex":"/\\\\%\\\\%[^\\\\n]*/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"NL","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/","parenthesized":false},"fragment":false},{"$type":"ParserRule","name":"TreeNode","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"indent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"TerminalRule","name":"STRING2","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]*\\"|'[^']*'/","parenthesized":false},"fragment":false,"hidden":false}],"interfaces":[{"$type":"Interface","name":"TreeView","attributes":[{"$type":"TypeAttribute","name":"nodes","type":{"$type":"ArrayType","elementType":{"$type":"SimpleType","typeRef":{"$ref":"#/rules@9"}}},"isOptional":false},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"imports":[],"types":[],"$comment":"/**\\n * TreeView grammar for Langium\\n * Converted from treemap grammar\\n *\\n * The ML_COMMENT and NL hidden terminals handle whitespace, comments, and newlines\\n * before the treemap keyword, allowing for empty lines and comments before the\\n * treeView declaration.\\n */"}`)), s(1490)), IR, LR = M(() => IR ?? (IR = zI(`{"$type":"Grammar","isDeclared":true,"name":"WardleyGrammar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Wardley","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@52"},"arguments":[],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@25"},"arguments":[]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@52"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@42"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"*"}]},"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"size","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Assignment","feature":"evolution","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Assignment","feature":"anchors","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"components","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"links","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Assignment","feature":"evolves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"Assignment","feature":"pipelines","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"Assignment","feature":"notes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}},{"$type":"Assignment","feature":"annotations","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}},{"$type":"Assignment","feature":"annotation","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}},{"$type":"Assignment","feature":"accelerators","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}},{"$type":"Assignment","feature":"deaccelerators","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}}]},"entry":false,"parameters":[]},{"$type":"ParserRule","name":"Size","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@26"},"arguments":[]},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"width","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@48"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"height","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@48"},"arguments":[]}},{"$type":"Keyword","value":"]"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Evolution","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@27"},"arguments":[]},{"$type":"Assignment","feature":"stages","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]},{"$type":"Assignment","feature":"stages","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}}],"cardinality":"+"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EvolutionStage","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"@"},{"$type":"Assignment","feature":"boundary","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}}],"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"/"},{"$type":"Assignment","feature":"secondName","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}}],"cardinality":"?"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Anchor","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"visibility","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"evolution","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":"]"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Component","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"visibility","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"evolution","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":"]"},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"decorator","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"inertia","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@31"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"("},{"$type":"Assignment","feature":"inertia","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@31"},"arguments":[]}},{"$type":"Keyword","value":")"}]}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Label","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@30"},"arguments":[]},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"negX","operator":"?=","terminal":{"$type":"Keyword","value":"-"},"cardinality":"?"},{"$type":"Assignment","feature":"offsetX","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@48"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"negY","operator":"?=","terminal":{"$type":"Keyword","value":"-"},"cardinality":"?"},{"$type":"Assignment","feature":"offsetY","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@48"},"arguments":[]}},{"$type":"Keyword","value":"]"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Decorator","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"("},{"$type":"Assignment","feature":"strategy","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]}},{"$type":"Keyword","value":")"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Link","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"from","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Assignment","feature":"fromPort","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"arrow","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}]},"cardinality":"?"},{"$type":"Assignment","feature":"to","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Assignment","feature":"toPort","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"linkLabel","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Evolve","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@32"},"arguments":[]},{"$type":"Assignment","feature":"component","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Assignment","feature":"target","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Pipeline","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@33"},"arguments":[]},{"$type":"Assignment","feature":"parent","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Keyword","value":"{"},{"$type":"RuleCall","rule":{"$ref":"#/rules@52"},"arguments":[],"cardinality":"+"},{"$type":"Assignment","feature":"components","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]},"cardinality":"+"},{"$type":"Keyword","value":"}"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"PipelineComponent","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"evolution","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":"]"},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Note","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@34"},"arguments":[]},{"$type":"Assignment","feature":"text","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]}},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"visibility","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"evolution","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":"]"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Annotations","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@35"},"arguments":[]},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"x","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"y","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"Keyword","value":"]"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Annotation","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@36"},"arguments":[]},{"$type":"Assignment","feature":"number","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@48"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"x","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"y","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"Keyword","value":"]"},{"$type":"Assignment","feature":"text","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"CoordinateValue","dataType":"number","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@48"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Accelerator","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@37"},"arguments":[]},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"x","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"y","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":"]"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Deaccelerator","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@38"},"arguments":[]},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"x","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"y","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":"]"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"TerminalRule","name":"WARDLEY_NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"->"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"LINK_PORT","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"+<>"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"+>"},"parenthesized":false}],"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"+<"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"LINK_ARROW","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"-->"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"-.->"},"parenthesized":false}],"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":">"},"parenthesized":false}],"parenthesized":false},{"$type":"RegexToken","regex":"/\\\\+'[^']*'<>/","parenthesized":false}],"parenthesized":false},{"$type":"RegexToken","regex":"/\\\\+'[^']*'</","parenthesized":false}],"parenthesized":false},{"$type":"RegexToken","regex":"/\\\\+'[^']*'>/","parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"LINK_LABEL","definition":{"$type":"RegexToken","regex":"/;[^\\\\n\\\\r]+/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRATEGY","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"build"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"buy"},"parenthesized":false}],"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"outsource"},"parenthesized":false}],"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"market"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_WARDLEY","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"wardley-beta"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_SIZE","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"size"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_EVOLUTION","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"evolution"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_ANCHOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"anchor"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_COMPONENT","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"component"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_LABEL","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"label"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_INERTIA","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"inertia"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_EVOLVE","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"evolve"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_PIPELINE","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"pipeline"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_NOTE","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"note"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_ANNOTATIONS","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"annotations"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_ANNOTATION","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"annotation"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_ACCELERATOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"accelerator"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_DEACCELERATOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"deaccelerator"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NAME_WITH_SPACES","definition":{"$type":"RegexToken","regex":"/(?!title\\\\s|accTitle|accDescr)[A-Za-z](?:[A-Za-z0-9_()&]|-(?!>))*(?:[ \\\\t]+[A-Za-z(](?:[A-Za-z0-9_()&]|-(?!>))*)*/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WS","definition":{"$type":"RegexToken","regex":"/[ \\\\t]+/","parenthesized":false},"fragment":false},{"$type":"ParserRule","name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@52"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@44"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@45"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@46"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}],"cardinality":"+"},"entry":false,"parameters":[]},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@47"},"parenthesized":false},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@48"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/","parenthesized":false},"fragment":false}],"interfaces":[],"types":[]}`)), `WardleyGrammarGrammar`), RR = {
    languageId: `architecture`,
    fileExtensions: [
      s(494),
      `.mermaid`
    ],
    caseInsensitive: false,
    mode: `production`
  }, zR = {
    languageId: `eventmodeling`,
    fileExtensions: [
      s(494),
      `.mermaid`
    ],
    caseInsensitive: false,
    mode: `production`
  }, BR = {
    languageId: `gitGraph`,
    fileExtensions: [
      `.mmd`,
      `.mermaid`
    ],
    caseInsensitive: false,
    mode: s(804)
  }, VR = {
    languageId: `info`,
    fileExtensions: [
      `.mmd`,
      `.mermaid`
    ],
    caseInsensitive: false,
    mode: `production`
  }, HR = {
    languageId: `packet`,
    fileExtensions: [
      s(494),
      s(1685)
    ],
    caseInsensitive: false,
    mode: `production`
  }, UR = {
    languageId: `pie`,
    fileExtensions: [
      s(494),
      `.mermaid`
    ],
    caseInsensitive: false,
    mode: `production`
  }, WR = {
    languageId: `radar`,
    fileExtensions: [
      `.mmd`,
      `.mermaid`
    ],
    caseInsensitive: false,
    mode: `production`
  }, GR = {
    languageId: `treemap`,
    fileExtensions: [
      `.mmd`,
      `.mermaid`
    ],
    caseInsensitive: false,
    mode: `production`
  }, KR = {
    languageId: s(1264),
    fileExtensions: [
      `.mmd`,
      `.mermaid`
    ],
    caseInsensitive: false,
    mode: s(804)
  }, qR = {
    languageId: `wardley`,
    fileExtensions: [
      `.mmd`,
      `.mermaid`
    ],
    caseInsensitive: false,
    mode: `production`
  }, JR = {
    AstReflection: M(() => new gR(), `AstReflection`)
  }, YR = {
    Grammar: M(() => yR(), `Grammar`),
    LanguageMetaData: M(() => RR, s(290)),
    parser: {}
  }, XR = {
    Grammar: M(() => xR(), `Grammar`),
    LanguageMetaData: M(() => zR, `LanguageMetaData`),
    parser: {}
  }, ZR = {
    Grammar: M(() => CR(), `Grammar`),
    LanguageMetaData: M(() => BR, s(290)),
    parser: {}
  }, QR = {
    Grammar: M(() => TR(), `Grammar`),
    LanguageMetaData: M(() => VR, `LanguageMetaData`),
    parser: {}
  }, $R = {
    Grammar: M(() => DR(), s(784)),
    LanguageMetaData: M(() => HR, `LanguageMetaData`),
    parser: {}
  }, ez = {
    Grammar: M(() => kR(), `Grammar`),
    LanguageMetaData: M(() => UR, s(290)),
    parser: {}
  }, tz = {
    Grammar: M(() => jR(), `Grammar`),
    LanguageMetaData: M(() => WR, s(290)),
    parser: {}
  }, nz = {
    Grammar: M(() => NR(), `Grammar`),
    LanguageMetaData: M(() => GR, `LanguageMetaData`),
    parser: {}
  }, rz = {
    Grammar: M(() => FR(), `Grammar`),
    LanguageMetaData: M(() => KR, s(290)),
    parser: {}
  }, iz = {
    Grammar: M(() => LR(), `Grammar`),
    LanguageMetaData: M(() => qR, `LanguageMetaData`),
    parser: {}
  }, az = {
    ACC_DESCR: /accDescr(?:[\t ]*:([^\n\r]*)|\s*{([^}]*)})/,
    ACC_TITLE: /accTitle[\t ]*:([^\n\r]*)/,
    TITLE: /title([\t ][^\n\r]*|)/
  }, oz = (Zt = class extends xP {
    runConverter(e2, t2, n2) {
      let r2 = this.runCommonConverter(e2, t2, n2);
      return r2 === void 0 && (r2 = this.runCustomConverter(e2, t2, n2)), r2 === void 0 ? super.runConverter(e2, t2, n2) : r2;
    }
    runCommonConverter(e2, t2, n2) {
      let r2 = s, i2 = az[e2.name];
      if (i2 === void 0) return;
      let a2 = i2.exec(t2);
      if (a2 !== null) {
        if (a2[1] !== void 0) return a2[1].trim().replace(/[\t ]{2,}/gm, ` `);
        if (a2[2] !== void 0) return a2[2][r2(909)](/^\s*/gm, ``).replace(/\s+$/gm, ``).replace(/[\t ]{2,}/gm, ` `).replace(/[\n\r]{2,}/gm, `
`);
      }
    }
  }, M(Zt, `AbstractMermaidValueConverter`), Zt), sz = (Qt = class extends oz {
    runCustomConverter(e2, t2, n2) {
    }
  }, M(Qt, `CommonValueConverter`), Qt), cz = ($t = class extends bP {
    constructor(e2) {
      super(), this.keywords = new Set(e2);
    }
    buildKeywordTokens(e2, t2, n2) {
      let r2 = super.buildKeywordTokens(e2, t2, n2);
      return r2.forEach((e3) => {
        this.keywords.has(e3.name) && e3.PATTERN !== void 0 && (e3.PATTERN = RegExp(e3.PATTERN.toString() + `(?:(?=%%)|(?!\\S))`));
      }), r2;
    }
  }, M($t, `AbstractMermaidTokenBuilder`), $t);
  en = class extends cz {
  }, M(en, `CommonTokenBuilder`);
  let lz, uz, dz, fz;
  dz = (lz = class extends cz {
    constructor() {
      super([
        `architecture`
      ]);
    }
  }, M(lz, `ArchitectureTokenBuilder`), lz);
  fz = (uz = class extends oz {
    runCustomConverter(e2, t2, n2) {
      let r2 = s;
      if (e2.name === `ARCH_ICON`) return t2.replace(/[()]/g, ``).trim();
      if (e2.name === `ARCH_TEXT_ICON`) return t2.replace(/["()]/g, ``);
      if (e2.name === `ARCH_TITLE`) {
        let e3 = t2[r2(909)](/^\[|]$/g, ``).trim();
        return (e3.startsWith(`"`) && e3.endsWith(`"`) || e3.startsWith(`'`) && e3.endsWith(`'`)) && (e3 = e3.slice(1, -1), e3 = e3[r2(909)](/\\"/g, `"`).replace(/\\'/g, `'`)), e3.trim();
      }
    }
  }, M(uz, `ArchitectureValueConverter`), uz);
  pz = {
    parser: {
      TokenBuilder: M(() => new dz(), `TokenBuilder`),
      ValueConverter: M(() => new fz(), `ValueConverter`)
    }
  };
  mz = function(e2 = FI) {
    let t2 = s, n2 = $(xI(e2), JR), r2 = $(bI({
      shared: n2
    }), YR, pz);
    return n2[t2(972)][t2(1801)](r2), {
      shared: n2,
      Architecture: r2
    };
  };
  M(mz, `createArchitectureServices`);
  var hz, gz, _z = (hz = class extends cz {
    constructor() {
      super([
        `eventmodeling`
      ]);
    }
  }, M(hz, `EventModelingTokenBuilder`), hz), vz = /* @__PURE__ */ new Set([
    s(593),
    `command`
  ]), yz = /* @__PURE__ */ new Set([
    `evt`,
    `event`
  ]), bz = /* @__PURE__ */ new Set([
    `rmo`,
    `readmodel`
  ]), xz = /* @__PURE__ */ new Set([
    `pcr`,
    `processor`
  ]), Sz = /* @__PURE__ */ new Set([
    `ui`
  ]);
  function Cz(e2) {
    let t2 = s, n2 = e2.validation.EventModelingValidator, r2 = e2.validation[t2(292)];
    if (r2) {
      let e3 = {
        EmTimeFrame: n2[t2(1326)].bind(n2),
        EmResetFrame: n2.checkSourceFrameTypes[t2(1704)](n2)
      };
      r2.register(e3, n2);
    }
  }
  M(Cz, `registerValidationChecks`);
  let wz;
  wz = (gz = class {
    [s(1326)](e2, t2) {
      let n2 = s;
      e2.sourceFrames.length !== 0 && (vz.has(e2[n2(395)]) ? this.validateSources(e2, /* @__PURE__ */ new Set([
        ...Sz,
        ...xz
      ]), `command`, `ui or processor`, t2) : yz.has(e2.modelEntityType) ? this.validateSources(e2, vz, n2(634), `command`, t2) : bz.has(e2[n2(395)]) ? this.validateSources(e2, yz, `read model`, `event`, t2) : xz.has(e2.modelEntityType) ? this.validateSources(e2, bz, `processor`, `read model`, t2) : Sz.has(e2.modelEntityType) && this[n2(1063)](e2, bz, `ui`, `read model`, t2));
    }
    validateSources(e2, t2, n2, r2, i2) {
      let a2 = s;
      for (let o2 of e2[a2(1506)]) {
        let s2 = o2.ref;
        s2 !== void 0 && !t2.has(s2.modelEntityType) && i2(`error`, `A ` + n2 + a2(326) + r2 + `, not from '` + s2.modelEntityType + `'.`, {
          node: e2,
          property: a2(1506)
        });
      }
    }
  }, M(gz, `EventModelingValidator`), gz);
  Tz = {
    parser: {
      TokenBuilder: M(() => new _z(), `TokenBuilder`),
      ValueConverter: M(() => new sz(), `ValueConverter`)
    },
    validation: {
      EventModelingValidator: M(() => new wz(), `EventModelingValidator`)
    }
  };
  Ez = function(e2 = FI) {
    let t2 = $(xI(e2), JR), n2 = $(bI({
      shared: t2
    }), XR, Tz);
    return t2.ServiceRegistry.register(n2), Cz(n2), {
      shared: t2,
      EventModel: n2
    };
  };
  M(Ez, `createEventModelingServices`);
  let Dz, Oz;
  Oz = (Dz = class extends cz {
    constructor() {
      super([
        `gitGraph`
      ]);
    }
  }, M(Dz, s(1727)), Dz);
  kz = {
    parser: {
      TokenBuilder: M(() => new Oz(), `TokenBuilder`),
      ValueConverter: M(() => new sz(), `ValueConverter`)
    }
  };
  Az = function(e2 = FI) {
    let t2 = $(xI(e2), JR), n2 = $(bI({
      shared: t2
    }), ZR, kz);
    return t2.ServiceRegistry.register(n2), {
      shared: t2,
      GitGraph: n2
    };
  };
  M(Az, `createGitGraphServices`);
  let jz, Mz;
  Mz = (jz = class extends cz {
    constructor() {
      super([
        `info`,
        `showInfo`
      ]);
    }
  }, M(jz, `InfoTokenBuilder`), jz);
  Nz = {
    parser: {
      TokenBuilder: M(() => new Mz(), `TokenBuilder`),
      ValueConverter: M(() => new sz(), s(518))
    }
  };
  Pz = function(e2 = FI) {
    let t2 = s, n2 = $(xI(e2), JR), r2 = $(bI({
      shared: n2
    }), QR, Nz);
    return n2[t2(972)].register(r2), {
      shared: n2,
      Info: r2
    };
  };
  M(Pz, s(271));
  let Fz, Iz;
  Iz = (Fz = class extends cz {
    constructor() {
      super([
        `packet`
      ]);
    }
  }, M(Fz, `PacketTokenBuilder`), Fz);
  Lz = {
    parser: {
      TokenBuilder: M(() => new Iz(), `TokenBuilder`),
      ValueConverter: M(() => new sz(), `ValueConverter`)
    }
  };
  Rz = function(e2 = FI) {
    let t2 = $(xI(e2), JR), n2 = $(bI({
      shared: t2
    }), $R, Lz);
    return t2.ServiceRegistry.register(n2), {
      shared: t2,
      Packet: n2
    };
  };
  M(Rz, `createPacketServices`);
  let zz, Bz, Vz, Hz;
  Vz = (zz = class extends cz {
    constructor() {
      super([
        `pie`,
        `showData`
      ]);
    }
  }, M(zz, `PieTokenBuilder`), zz);
  Hz = (Bz = class extends oz {
    runCustomConverter(e2, t2, n2) {
      let r2 = s;
      if (e2.name === `PIE_SECTION_LABEL`) return t2[r2(909)](/"/g, ``).trim();
    }
  }, M(Bz, `PieValueConverter`), Bz);
  Uz = {
    parser: {
      TokenBuilder: M(() => new Vz(), `TokenBuilder`),
      ValueConverter: M(() => new Hz(), `ValueConverter`)
    }
  };
  Wz = function(e2 = FI) {
    let t2 = $(xI(e2), JR), n2 = $(bI({
      shared: t2
    }), ez, Uz);
    return t2.ServiceRegistry.register(n2), {
      shared: t2,
      Pie: n2
    };
  };
  M(Wz, `createPieServices`);
  let Gz, Kz;
  Kz = (Gz = class extends cz {
    constructor() {
      super([
        `radar-beta`
      ]);
    }
  }, M(Gz, `RadarTokenBuilder`), Gz);
  qz = {
    parser: {
      TokenBuilder: M(() => new Kz(), `TokenBuilder`),
      ValueConverter: M(() => new sz(), `ValueConverter`)
    }
  };
  Jz = function(e2 = FI) {
    let t2 = s, n2 = $(xI(e2), JR), r2 = $(bI({
      shared: n2
    }), tz, qz);
    return n2.ServiceRegistry[t2(1801)](r2), {
      shared: n2,
      Radar: r2
    };
  };
  M(Jz, `createRadarServices`);
  let Yz, Xz, Zz, Qz;
  Zz = (Yz = class extends oz {
    [s(860)](e2, t2, n2) {
      let r2 = s;
      if (e2.name === r2(1438)) return (t2 == null ? void 0 : t2.length) || 0;
      if (e2[r2(747)] === `STRING2`) return t2.substring(1, t2[r2(1663)] - 1);
    }
  }, M(Yz, `TreeViewValueConverter`), Yz);
  Qz = (Xz = class extends cz {
    constructor() {
      super([
        `treeView-beta`
      ]);
    }
  }, M(Xz, `TreeViewTokenBuilder`), Xz);
  $z = {
    parser: {
      TokenBuilder: M(() => new Qz(), s(734)),
      ValueConverter: M(() => new Zz(), `ValueConverter`)
    }
  };
  eB = function(e2 = FI) {
    let t2 = s, n2 = $(xI(e2), JR), r2 = $(bI({
      shared: n2
    }), rz, $z);
    return n2[t2(972)][t2(1801)](r2), {
      shared: n2,
      TreeView: r2
    };
  };
  M(eB, `createTreeViewServices`);
  var tB, nB, rB, iB = (tB = class extends cz {
    constructor() {
      super([
        `treemap`
      ]);
    }
  }, M(tB, `TreemapTokenBuilder`), tB), aB = /classDef\s+([A-Z_a-z]\w+)(?:\s+([^\n\r;]*))?;?/, oB = (nB = class extends oz {
    runCustomConverter(e2, t2, n2) {
      let r2 = s;
      if (e2.name === `NUMBER2`) return parseFloat(t2.replace(/,/g, ``));
      if (e2.name === r2(672) || e2[r2(747)] === `STRING2`) return t2.substring(1, t2.length - 1);
      if (e2.name === `INDENTATION`) return t2.length;
      if (e2.name === `ClassDef`) {
        if (typeof t2 != r2(1730)) return t2;
        let e3 = aB.exec(t2);
        if (e3) return {
          $type: `ClassDefStatement`,
          className: e3[1],
          styleText: e3[2] || void 0
        };
      }
    }
  }, M(nB, `TreemapValueConverter`), nB);
  function sB(e2) {
    let t2 = s, n2 = e2.validation[t2(1462)], r2 = e2.validation.ValidationRegistry;
    if (r2) {
      let e3 = {
        Treemap: n2.checkSingleRoot.bind(n2)
      };
      r2.register(e3, n2);
    }
  }
  M(sB, `registerValidationChecks`);
  let cB;
  cB = (rB = class {
    checkSingleRoot(e2, t2) {
      let n2 = s, r2;
      for (let i2 of e2.TreemapRows) i2[n2(914)] && (r2 === void 0 && i2.indent === void 0 ? r2 = 0 : (i2.indent === void 0 || r2 !== void 0 && r2 >= parseInt(i2.indent, 10)) && t2(`error`, `Multiple root nodes are not allowed in a treemap.`, {
        node: i2,
        property: `item`
      }));
    }
  }, M(rB, s(1462)), rB);
  lB = {
    parser: {
      TokenBuilder: M(() => new iB(), `TokenBuilder`),
      ValueConverter: M(() => new oB(), s(518))
    },
    validation: {
      TreemapValidator: M(() => new cB(), `TreemapValidator`)
    }
  };
  uB = function(e2 = FI) {
    let t2 = $(xI(e2), JR), n2 = $(bI({
      shared: t2
    }), nz, lB);
    return t2.ServiceRegistry.register(n2), sB(n2), {
      shared: t2,
      Treemap: n2
    };
  };
  M(uB, `createTreemapServices`);
  let dB, fB;
  fB = (dB = class extends oz {
    [s(860)](e2, t2, n2) {
      let r2 = s;
      switch (e2.name[r2(993)]()) {
        case `LINK_LABEL`:
          return t2.substring(1).trim();
        default:
          return;
      }
    }
  }, M(dB, s(744)), dB);
  pB = {
    parser: {
      ValueConverter: M(() => new fB(), `ValueConverter`)
    }
  };
  mB = function(e2 = FI) {
    let t2 = $(xI(e2), JR), n2 = $(bI({
      shared: t2
    }), iz, pB);
    return t2.ServiceRegistry.register(n2), {
      shared: t2,
      Wardley: n2
    };
  };
  M(mB, `createWardleyServices`), i();
  var hB, gB = {}, _B = {
    info: M(a(function* () {
      let { createInfoServices: t2 } = yield e(() => import("./info-J43DQDTF-D795M18R.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }), []);
      gB.info = t2().Info.parser.LangiumParser;
    }), s(1706)),
    packet: M(a(function* () {
      let { createPacketServices: t2 } = yield e(() => import("./packet-YPE3B663-BnajCSWB.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }), []);
      gB.packet = t2().Packet.parser.LangiumParser;
    }), `packet`),
    pie: M(a(function* () {
      let { createPieServices: t2 } = yield e(() => import("./pie-LRSECV5Y-CT1kx--P.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }), []);
      gB.pie = t2().Pie.parser.LangiumParser;
    }), s(611)),
    treeView: M(a(function* () {
      let t2 = s, { createTreeViewServices: n2 } = yield e(() => import("./treeView-BLDUP644-B4PmMp8t.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }), []);
      gB.treeView = n2()[t2(1453)].parser.LangiumParser;
    }), `treeView`),
    architecture: M(a(function* () {
      let { createArchitectureServices: t2 } = yield e(() => import("./architecture-7EHR7CIX-DadOblM9.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }), []);
      gB.architecture = t2().Architecture.parser.LangiumParser;
    }), `architecture`),
    gitGraph: M(a(function* () {
      let { createGitGraphServices: t2 } = yield e(() => import("./gitGraph-WXDBUCRP-DpZQX7t7.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }), []);
      gB.gitGraph = t2().GitGraph.parser.LangiumParser;
    }), `gitGraph`),
    eventmodeling: M(a(function* () {
      let t2 = s, { createEventModelingServices: n2 } = yield e(() => import("./eventmodeling-FCH6USID-BTCSgLP7.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }), []);
      gB.eventmodeling = n2().EventModel[t2(908)][t2(650)];
    }), `eventmodeling`),
    radar: M(a(function* () {
      let t2 = s, { createRadarServices: n2 } = yield e(() => import("./radar-GUYGQ44K-5Apo0G9j.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }), []);
      gB.radar = n2()[t2(1251)].parser.LangiumParser;
    }), `radar`),
    treemap: M(a(function* () {
      let { createTreemapServices: t2 } = yield e(() => import("./treemap-LRROVOQU-exesO4_A.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }), []);
      gB.treemap = t2().Treemap.parser.LangiumParser;
    }), s(1289)),
    wardley: M(a(function* () {
      let t2 = s, { createWardleyServices: n2 } = yield e(() => import("./wardley-L42UT6IY-CS2yMBVG.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }), []);
      gB[t2(526)] = n2().Wardley.parser.LangiumParser;
    }), s(526))
  };
  vB = function(e2, t2) {
    return yB[s(1120)](this, arguments);
  };
  function yB() {
    return yB = a(function* (e2, t2) {
      let n2 = _B[e2];
      if (!n2) throw Error(`Unknown diagram type: ` + e2);
      gB[e2] || (yield n2());
      let r2 = gB[e2].parse(t2);
      if (r2.lexerErrors.length > 0 || r2.parserErrors.length > 0) throw new bB(r2);
      return r2.value;
    }), yB.apply(this, arguments);
  }
  M(vB, `parse`);
  var bB = (hB = class extends Error {
    constructor(e2) {
      let t2 = s, n2 = e2.lexerErrors.map((e3) => `Lexer error on line ` + (e3.line !== void 0 && !isNaN(e3.line) ? e3.line : `?`) + t2(1339) + (e3.column !== void 0 && !isNaN(e3.column) ? e3[t2(882)] : `?`) + `: ` + e3.message).join(`
`), r2 = e2.parserErrors.map((e3) => t2(1554) + (e3[t2(1408)].startLine !== void 0 && !isNaN(e3.token.startLine) ? e3[t2(1408)][t2(880)] : `?`) + `, column ` + (e3.token.startColumn !== void 0 && !isNaN(e3.token.startColumn) ? e3[t2(1408)].startColumn : `?`) + `: ` + e3.message).join(`
`);
      super(t2(1078) + n2 + ` ` + r2), this.result = e2;
    }
  }, M(hB, `MermaidParseError`), hB);
});
export {
  Uz as S,
  vB as _,
  __tla,
  Lz as a,
  mz as b,
  kz as c,
  eB as d,
  $z as f,
  pz as g,
  pB as h,
  Az as i,
  qz as l,
  Nz as m,
  Wz as n,
  Rz as o,
  lB as p,
  DL as r,
  Ez as s,
  Pz as t,
  Jz as u,
  uB as v,
  Tz as x,
  mB as y
};
