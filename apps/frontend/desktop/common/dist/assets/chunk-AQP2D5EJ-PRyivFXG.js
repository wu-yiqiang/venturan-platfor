import{n as rx,r as ax}from"./index-Cb2DL3_Q.js";import{a as f,b as E,m as W,_ as nx,u as ox,s as lx,o as cx,l as dx,c as hx,g as ux,i as px,N as fx,W as Z,r as yx}from"./dist3-BUpURWcQ.js";import{n as Sx}from"./chunk-55IACEB6-BUn0YM7t.js";import{r as gx}from"./chunk-2J33WTMH-0fC6rXJS.js";const h=t0;(function(x,t){const i=t0,r=x();for(;;)try{if(parseInt(i(251))/1*(-parseInt(i(335))/2)+parseInt(i(349))/3+-parseInt(i(281))/4+parseInt(i(288))/5+-parseInt(i(302))/6*(-parseInt(i(321))/7)+-parseInt(i(250))/8+-parseInt(i(228))/9===t)break;r.push(r.shift())}catch{r.push(r.shift())}})(_0,321581);ax();var S0,L0=function(){const x=t0;var t=f(function(k,a,n,o){const T=t0;for(n=n||{},o=k[T(394)];o--;n[k[o]]=a);return n},"o"),i=[1,2],r=[1,3],s=[1,4],l=[2,4],u=[1,9],m=[1,11],p=[1,16],c=[1,17],b=[1,18],v=[1,19],L=[1,33],A=[1,20],N=[1,21],C=[1,22],M=[1,23],O=[1,24],y=[1,26],I=[1,27],F=[1,28],B=[1,29],U=[1,30],$=[1,31],G=[1,32],a0=[1,35],n0=[1,36],o0=[1,37],l0=[1,38],q=[1,34],g=[1,4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],c0=[1,4,5,14,15,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,39,40,41,45,48,51,52,53,54,57],w0=[4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],k0={trace:f(function(){},"trace"),yy:{},symbols_:{error:2,start:3,SPACE:4,NL:5,SD:6,document:7,line:8,statement:9,classDefStatement:10,styleStatement:11,cssClassStatement:12,idStatement:13,DESCR:14,"-->":15,HIDE_EMPTY:16,scale:17,WIDTH:18,COMPOSIT_STATE:19,STRUCT_START:20,STRUCT_STOP:21,STATE_DESCR:22,AS:23,ID:24,FORK:25,JOIN:26,CHOICE:27,CONCURRENT:28,note:29,notePosition:30,NOTE_TEXT:31,direction:32,acc_title:33,acc_title_value:34,acc_descr:35,acc_descr_value:36,acc_descr_multiline_value:37,CLICK:38,STRING:39,HREF:40,classDef:41,CLASSDEF_ID:42,CLASSDEF_STYLEOPTS:43,DEFAULT:44,style:45,STYLE_IDS:46,STYLEDEF_STYLEOPTS:47,class:48,CLASSENTITY_IDS:49,STYLECLASS:50,direction_tb:51,direction_bt:52,direction_rl:53,direction_lr:54,eol:55,";":56,EDGE_STATE:57,STYLE_SEPARATOR:58,left_of:59,right_of:60,$accept:0,$end:1},terminals_:{2:"error",4:"SPACE",5:"NL",6:"SD",14:x(245),15:"-->",16:"HIDE_EMPTY",17:"scale",18:"WIDTH",19:"COMPOSIT_STATE",20:x(311),21:"STRUCT_STOP",22:"STATE_DESCR",23:"AS",24:"ID",25:"FORK",26:"JOIN",27:"CHOICE",28:"CONCURRENT",29:x(303),31:"NOTE_TEXT",33:"acc_title",34:"acc_title_value",35:"acc_descr",36:"acc_descr_value",37:"acc_descr_multiline_value",38:"CLICK",39:"STRING",40:"HREF",41:"classDef",42:"CLASSDEF_ID",43:x(266),44:"DEFAULT",45:"style",46:"STYLE_IDS",47:x(256),48:"class",49:"CLASSENTITY_IDS",50:"STYLECLASS",51:x(317),52:"direction_bt",53:"direction_rl",54:"direction_lr",56:";",57:"EDGE_STATE",58:"STYLE_SEPARATOR",59:"left_of",60:"right_of"},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[8,1],[8,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,3],[9,4],[9,1],[9,2],[9,1],[9,4],[9,3],[9,6],[9,1],[9,1],[9,1],[9,1],[9,4],[9,4],[9,1],[9,2],[9,2],[9,1],[9,5],[9,5],[10,3],[10,3],[11,3],[12,3],[32,1],[32,1],[32,1],[32,1],[55,1],[55,1],[13,1],[13,1],[13,3],[13,3],[30,1],[30,1]],performAction:f(function(k,a,n,o,T,e,S){const _=x;var d=e.length-1;switch(T){case 3:return o.setRootDoc(e[d]),e[d];case 4:this.$=[];break;case 5:e[d]!="nl"&&(e[d-1].push(e[d]),this.$=e[d-1]);break;case 6:case 7:this.$=e[d];break;case 8:this.$="nl";break;case 12:this.$=e[d];break;case 13:let u0=e[d-1];u0.description=o.trimColon(e[d]),this.$=u0;break;case 14:this.$={stmt:_(229),state1:e[d-2],state2:e[d]};break;case 15:let p0=o.trimColon(e[d]);this.$={stmt:"relation",state1:e[d-3],state2:e[d-1],description:p0};break;case 19:this.$={stmt:"state",id:e[d-3],type:"default",description:"",doc:e[d-1]};break;case 20:var z=e[d],Q=e[d-2][_(297)]();if(e[d].match(":")){var h0=e[d].split(":");z=h0[0],Q=[Q,h0[1]]}this.$={stmt:"state",id:z,type:"default",description:Q};break;case 21:this.$={stmt:"state",id:e[d-3],type:"default",description:e[d-5],doc:e[d-1]};break;case 22:this.$={stmt:"state",id:e[d],type:"fork"};break;case 23:this.$={stmt:"state",id:e[d],type:"join"};break;case 24:this.$={stmt:"state",id:e[d],type:_(255)};break;case 25:this.$={stmt:_(247),id:o.getDividerId(),type:"divider"};break;case 26:this.$={stmt:"state",id:e[d-1].trim(),note:{position:e[d-2].trim(),text:e[d].trim()}};break;case 29:this.$=e[d].trim(),o.setAccTitle(this.$);break;case 30:case 31:this.$=e[d].trim(),o.setAccDescription(this.$);break;case 32:this.$={stmt:"click",id:e[d-3],url:e[d-2],tooltip:e[d-1]};break;case 33:this.$={stmt:"click",id:e[d-3],url:e[d-1],tooltip:""};break;case 34:case 35:this.$={stmt:"classDef",id:e[d-1].trim(),classes:e[d].trim()};break;case 36:this.$={stmt:"style",id:e[d-1].trim(),styleClass:e[d][_(297)]()};break;case 37:this.$={stmt:"applyClass",id:e[d-1][_(297)](),styleClass:e[d][_(297)]()};break;case 38:o.setDirection("TB"),this.$={stmt:"dir",value:"TB"};break;case 39:o.setDirection("BT"),this.$={stmt:"dir",value:"BT"};break;case 40:o.setDirection("RL"),this.$={stmt:"dir",value:"RL"};break;case 41:o[_(378)]("LR"),this.$={stmt:"dir",value:"LR"};break;case 44:case 45:this.$={stmt:"state",id:e[d][_(297)](),type:"default",description:""};break;case 46:this.$={stmt:"state",id:e[d-2].trim(),classes:[e[d].trim()],type:"default",description:""};break;case 47:this.$={stmt:"state",id:e[d-2].trim(),classes:[e[d][_(297)]()],type:"default",description:""};break}},x(369)),table:[{3:1,4:i,5:r,6:s},{1:[3]},{3:5,4:i,5:r,6:s},{3:6,4:i,5:r,6:s},t([1,4,5,16,17,19,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],l,{7:7}),{1:[2,1]},{1:[2,2]},{1:[2,3],4:u,5:m,8:8,9:10,10:12,11:13,12:14,13:15,16:p,17:c,19:b,22:v,24:L,25:A,26:N,27:C,28:M,29:O,32:25,33:y,35:I,37:F,38:B,41:U,45:$,48:G,51:a0,52:n0,53:o0,54:l0,57:q},t(g,[2,5]),{9:39,10:12,11:13,12:14,13:15,16:p,17:c,19:b,22:v,24:L,25:A,26:N,27:C,28:M,29:O,32:25,33:y,35:I,37:F,38:B,41:U,45:$,48:G,51:a0,52:n0,53:o0,54:l0,57:q},t(g,[2,7]),t(g,[2,8]),t(g,[2,9]),t(g,[2,10]),t(g,[2,11]),t(g,[2,12],{14:[1,40],15:[1,41]}),t(g,[2,16]),{18:[1,42]},t(g,[2,18],{20:[1,43]}),{23:[1,44]},t(g,[2,22]),t(g,[2,23]),t(g,[2,24]),t(g,[2,25]),{30:45,31:[1,46],59:[1,47],60:[1,48]},t(g,[2,28]),{34:[1,49]},{36:[1,50]},t(g,[2,31]),{13:51,24:L,57:q},{42:[1,52],44:[1,53]},{46:[1,54]},{49:[1,55]},t(c0,[2,44],{58:[1,56]}),t(c0,[2,45],{58:[1,57]}),t(g,[2,38]),t(g,[2,39]),t(g,[2,40]),t(g,[2,41]),t(g,[2,6]),t(g,[2,13]),{13:58,24:L,57:q},t(g,[2,17]),t(w0,l,{7:59}),{24:[1,60]},{24:[1,61]},{23:[1,62]},{24:[2,48]},{24:[2,49]},t(g,[2,29]),t(g,[2,30]),{39:[1,63],40:[1,64]},{43:[1,65]},{43:[1,66]},{47:[1,67]},{50:[1,68]},{24:[1,69]},{24:[1,70]},t(g,[2,14],{14:[1,71]}),{4:u,5:m,8:8,9:10,10:12,11:13,12:14,13:15,16:p,17:c,19:b,21:[1,72],22:v,24:L,25:A,26:N,27:C,28:M,29:O,32:25,33:y,35:I,37:F,38:B,41:U,45:$,48:G,51:a0,52:n0,53:o0,54:l0,57:q},t(g,[2,20],{20:[1,73]}),{31:[1,74]},{24:[1,75]},{39:[1,76]},{39:[1,77]},t(g,[2,34]),t(g,[2,35]),t(g,[2,36]),t(g,[2,37]),t(c0,[2,46]),t(c0,[2,47]),t(g,[2,15]),t(g,[2,19]),t(w0,l,{7:78}),t(g,[2,26]),t(g,[2,27]),{5:[1,79]},{5:[1,80]},{4:u,5:m,8:8,9:10,10:12,11:13,12:14,13:15,16:p,17:c,19:b,21:[1,81],22:v,24:L,25:A,26:N,27:C,28:M,29:O,32:25,33:y,35:I,37:F,38:B,41:U,45:$,48:G,51:a0,52:n0,53:o0,54:l0,57:q},t(g,[2,32]),t(g,[2,33]),t(g,[2,21])],defaultActions:{5:[2,1],6:[2,2],47:[2,48],48:[2,49]},parseError:f(function(k,a){const n=x;if(a.recoverable)this[n(333)](k);else{var o=Error(k);throw o.hash=a,o}},"parseError"),parse:f(function(k){const a=x;var n=this,o=[0],T=[],e=[null],S=[],_=this.table,d="",z=0,Q=0,h0=0,u0=2,p0=1,ex=S[a(239)].call(arguments,1),D=Object[a(362)](this.lexer),H={yy:{}};for(var T0 in this.yy)Object[a(275)].hasOwnProperty.call(this.yy,T0)&&(H.yy[T0]=this.yy[T0]);D.setInput(k,H.yy),H.yy.lexer=D,H.yy.parser=this,D[a(358)]===void 0&&(D.yylloc={});var E0=D.yylloc;S.push(E0);var sx=D.options&&D.options.ranges;typeof H.yy.parseError=="function"?this.parseError=H.yy.parseError:this[a(337)]=Object.getPrototypeOf(this).parseError;function ix(P){o.length-=2*P,e.length-=P,S.length-=P}f(ix,"popStack");function N0(){var P=T.pop()||D.lex()||p0;return typeof P!="number"&&(P instanceof Array&&(T=P,P=T.pop()),P=n.symbols_[P]||P),P}f(N0,"lex");for(var R,D0,J,Y,v0,V={},f0,K,R0,y0;;){if(J=o[o.length-1],this.defaultActions[J]?Y=this.defaultActions[J]:(R==null&&(R=N0()),Y=_[J]&&_[J][R]),Y===void 0||!Y.length||!Y[0]){var B0="";for(f0 in y0=[],_[J])this.terminals_[f0]&&f0>u0&&y0[a(237)]("'"+this.terminals_[f0]+"'");B0=D.showPosition?a(252)+(z+1)+`:
`+D[a(316)]()+`
Expecting `+y0.join(", ")+", got '"+(this.terminals_[R]||R)+"'":"Parse error on line "+(z+1)+": Unexpected "+(R==p0?"end of input":"'"+(this[a(236)][R]||R)+"'"),this.parseError(B0,{text:D.match,token:this.terminals_[R]||R,line:D.yylineno,loc:E0,expected:y0})}if(Y[0]instanceof Array&&Y.length>1)throw Error("Parse Error: multiple actions possible at state: "+J+", token: "+R);switch(Y[0]){case 1:o[a(237)](R),e[a(237)](D[a(230)]),S.push(D[a(358)]),o.push(Y[1]),R=null,D0?(R=D0,D0=null):(Q=D.yyleng,d=D[a(230)],z=D.yylineno,E0=D.yylloc,h0>0);break;case 2:if(K=this[a(276)][Y[1]][1],V.$=e[e[a(394)]-K],V._$={first_line:S[S.length-(K||1)].first_line,last_line:S[S.length-1].last_line,first_column:S[S.length-(K||1)].first_column,last_column:S[S.length-1].last_column},sx&&(V._$.range=[S[S.length-(K||1)].range[0],S[S.length-1].range[1]]),v0=this.performAction.apply(V,[d,Q,z,H.yy,Y[1],e,S].concat(ex)),v0!==void 0)return v0;K&&(o=o[a(239)](0,-1*K*2),e=e[a(239)](0,-1*K),S=S.slice(0,-1*K)),o.push(this.productions_[Y[1]][0]),e.push(V.$),S.push(V._$),R0=_[o[o.length-2]][o[o.length-1]],o.push(R0);break;case 3:return!0}}return!0},"parse")};k0[x(347)]=function(){const k=x;return{EOF:1,parseError:f(function(a,n){if(this.yy.parser)this.yy.parser.parseError(a,n);else throw Error(a)},k(337)),setInput:f(function(a,n){const o=k;return this.yy=n||this.yy||{},this._input=a,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this[o(241)]=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:f(function(){const a=k;var n=this._input[0];return this.yytext+=n,this.yyleng++,this.offset++,this.match+=n,this[a(241)]+=n,n[a(320)](/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc[a(289)]++):this.yylloc.last_column++,this.options[a(352)]&&this.yylloc.range[1]++,this._input=this[a(227)].slice(1),n},k(244)),unput:f(function(a){const n=k;var o=a.length,T=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this[n(230)]=this.yytext.substr(0,this.yytext.length-o),this.offset-=o;var e=this.match[n(336)](/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),T.length-1&&(this.yylineno-=T[n(394)]-1);var S=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this[n(358)][n(233)],last_column:T?(T.length===e[n(394)]?this.yylloc.first_column:0)+e[e.length-T[n(394)]].length-T[0].length:this.yylloc.first_column-o},this.options[n(352)]&&(this[n(358)].range=[S[0],S[0]+this.yyleng-o]),this[n(294)]=this.yytext.length,this},"unput"),more:f(function(){return this._more=!0,this},k(365)),reject:f(function(){const a=k;if(this.options.backtrack_lexer)this[a(238)]=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this[a(359)]});return this},"reject"),less:f(function(a){this.unput(this.match.slice(a))},"less"),pastInput:f(function(){const a=k;var n=this.matched.substr(0,this[a(241)].length-this.match.length);return(n.length>20?"...":"")+n.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:f(function(){const a=k;var n=this[a(320)];return n.length<20&&(n+=this._input[a(375)](0,20-n.length)),(n.substr(0,20)+(n.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:f(function(){var a=this.pastInput(),n=Array(a.length+1).join("-");return a+this.upcomingInput()+`
`+n+"^"},"showPosition"),test_match:f(function(a,n){const o=k;var T,e,S;if(this[o(232)].backtrack_lexer&&(S={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this[o(289)],first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this[o(393)],matched:this.matched,yyleng:this.yyleng,offset:this[o(340)],_more:this[o(357)],_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this[o(269)]},this.options.ranges&&(S.yylloc.range=this[o(358)].range.slice(0))),e=a[0].match(/(?:\r\n?|\n).*/g),e&&(this.yylineno+=e.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:e?e[e.length-1].length-e[e[o(394)]-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+a[0][o(394)]},this.yytext+=a[0],this[o(320)]+=a[0],this.matches=a,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc[o(240)]=[this.offset,this.offset+=this[o(294)]]),this[o(357)]=!1,this[o(238)]=!1,this._input=this._input.slice(a[0].length),this[o(241)]+=a[0],T=this.performAction.call(this,this.yy,this,n,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),T)return T;if(this._backtrack){for(var _ in S)this[_]=S[_];return!1}return!1},"test_match"),next:f(function(){const a=k;if(this.done)return this.EOF;this._input||(this[a(269)]=!0);var n,o,T,e;this._more||(this.yytext="",this.match="");for(var S=this._currentRules(),_=0;_<S.length;_++)if(T=this._input.match(this[a(354)][S[_]]),T&&(!o||T[0].length>o[0].length)){if(o=T,e=_,this.options[a(308)]){if(n=this.test_match(T,S[_]),n!==!1)return n;if(this[a(238)]){o=!1;continue}else return!1}else if(!this.options.flex)break}return o?(n=this.test_match(o,S[e]),n===!1?!1:n):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:f(function(){return this.next()||this.lex()},"lex"),begin:f(function(a){this.conditionStack.push(a)},"begin"),popState:f(function(){const a=k;return this.conditionStack.length-1>0?this.conditionStack[a(226)]():this[a(246)][0]},"popState"),_currentRules:f(function(){const a=k;return this.conditionStack.length&&this[a(246)][this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack[a(394)]-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:f(function(a){const n=k;return a=this[n(246)][n(394)]-1-Math.abs(a||0),a>=0?this.conditionStack[a]:n(323)},"topState"),pushState:f(function(a){this.begin(a)},k(243)),stateStackSize:f(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:f(function(a,n,o,T){const e=k;function S(){let _=n.yytext.indexOf("%%");if(_===0)return!1;if(_>0){let d=n.yytext.slice(0,_),z=n.yytext.slice(_);z&&a.lexer.unput(z),n.yytext=d}return!0}switch(f(S,"processId"),o){case 0:return 38;case 1:return 40;case 2:return 39;case 3:return 44;case 4:return 51;case 5:return 52;case 6:return 53;case 7:return 54;case 8:return 5;case 9:break;case 10:break;case 11:break;case 12:break;case 13:return this.pushState("SCALE"),17;case 14:return 18;case 15:this.popState();break;case 16:return this.begin("acc_title"),33;case 17:return this.popState(),"acc_title_value";case 18:return this.begin("acc_descr"),35;case 19:return this.popState(),"acc_descr_value";case 20:this.begin("acc_descr_multiline");break;case 21:this.popState();break;case 22:return"acc_descr_multiline_value";case 23:return this[e(243)]("CLASSDEF"),41;case 24:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";case 25:return this.popState(),this.pushState(e(391)),42;case 26:return this.popState(),43;case 27:return this.pushState("CLASS"),48;case 28:return this.popState(),this[e(243)]("CLASS_STYLE"),49;case 29:return this.popState(),50;case 30:return this.pushState(e(286)),45;case 31:return this.popState(),this.pushState("STYLEDEF_STYLES"),46;case 32:return this.popState(),47;case 33:return this.pushState(e(368)),17;case 34:return 18;case 35:this.popState();break;case 36:this.pushState(e(341));break;case 37:return this.popState(),n.yytext=n[e(230)].slice(0,-8).trim(),25;case 38:return this[e(260)](),n.yytext=n.yytext.slice(0,-8).trim(),26;case 39:return this.popState(),n.yytext=n.yytext[e(239)](0,-10).trim(),27;case 40:return this.popState(),n.yytext=n[e(230)].slice(0,-8).trim(),25;case 41:return this.popState(),n.yytext=n.yytext.slice(0,-8)[e(297)](),26;case 42:return this.popState(),n.yytext=n.yytext.slice(0,-10).trim(),27;case 43:return 51;case 44:return 52;case 45:return 53;case 46:return 54;case 47:this.pushState("STATE_STRING");break;case 48:return this.pushState("STATE_ID"),"AS";case 49:return S()?(this.popState(),"ID"):void 0;case 50:this.popState();break;case 51:return"STATE_DESCR";case 52:return 19;case 53:this.popState();break;case 54:return this.popState(),this.pushState(e(379)),20;case 55:return this.popState(),21;case 56:break;case 57:return this[e(330)](e(338)),29;case 58:return this.popState(),this.pushState(e(383)),59;case 59:return this.popState(),this[e(243)]("NOTE_ID"),60;case 60:this.popState(),this.pushState("FLOATING_NOTE");break;case 61:return this.popState(),this.pushState("FLOATING_NOTE_ID"),"AS";case 62:break;case 63:return e(370);case 64:return S()?(this.popState(),"ID"):void 0;case 65:return S()?(this[e(260)](),this.pushState("NOTE_TEXT"),24):void 0;case 66:return this[e(260)](),n.yytext=n.yytext.substr(2).trim(),31;case 67:return this.popState(),n.yytext=n[e(230)][e(239)](0,-8).trim(),31;case 68:return 6;case 69:return 6;case 70:return 16;case 71:return 57;case 72:return S()?24:void 0;case 73:return n.yytext=n.yytext.trim(),14;case 74:return 15;case 75:return 28;case 76:return 58;case 77:return 5;case 78:return"INVALID"}},"anonymous"),rules:[/^(?:click\b)/i,/^(?:href\b)/i,/^(?:"[^"]*")/i,/^(?:default\b)/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:[\n]+)/i,/^(?:[\s]+)/i,/^(?:((?!\n)\s)+)/i,/^(?:#[^\n]*)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:classDef\s+)/i,/^(?:DEFAULT\s+)/i,/^(?:\w+\s+)/i,/^(?:[^\n]*)/i,/^(?:class\s+)/i,/^(?:(\w+)+((,\s*\w+)*))/i,/^(?:[^\n]*)/i,/^(?:style\s+)/i,/^(?:[\w,]+\s+)/i,/^(?:[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:state\s+)/i,/^(?:.*<<fork>>)/i,/^(?:.*<<join>>)/i,/^(?:.*<<choice>>)/i,/^(?:.*\[\[fork\]\])/i,/^(?:.*\[\[join\]\])/i,/^(?:.*\[\[choice\]\])/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:["])/i,/^(?:\s*as\s+)/i,/^(?:[^\n\{]*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n\s\{]+)/i,/^(?:\n)/i,/^(?:\{)/i,/^(?:\})/i,/^(?:[\n])/i,/^(?:note\s+)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:")/i,/^(?:\s*as\s*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n]*)/i,/^(?:\s*[^:\n\s\-]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:[\s\S]*?\n\s*end note\b)/i,/^(?:stateDiagram\s+)/i,/^(?:stateDiagram-v2\s+)/i,/^(?:hide empty description\b)/i,/^(?:\[\*\])/i,/^(?:[^:\n\s\-\{]+)/i,/^(?:\s*:(?:[^:\n;]|:[^:\n;])+)/i,/^(?:-->)/i,/^(?:--)/i,/^(?::::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{LINE:{rules:[10,11,12],inclusive:!1},struct:{rules:[10,11,12,23,27,30,36,43,44,45,46,55,56,57,71,72,73,74,75,76],inclusive:!1},FLOATING_NOTE_ID:{rules:[64],inclusive:!1},FLOATING_NOTE:{rules:[61,62,63],inclusive:!1},NOTE_TEXT:{rules:[66,67],inclusive:!1},NOTE_ID:{rules:[65],inclusive:!1},NOTE:{rules:[58,59,60],inclusive:!1},STYLEDEF_STYLEOPTS:{rules:[],inclusive:!1},STYLEDEF_STYLES:{rules:[32],inclusive:!1},STYLE_IDS:{rules:[],inclusive:!1},STYLE:{rules:[31],inclusive:!1},CLASS_STYLE:{rules:[29],inclusive:!1},CLASS:{rules:[28],inclusive:!1},CLASSDEFID:{rules:[26],inclusive:!1},CLASSDEF:{rules:[24,25],inclusive:!1},acc_descr_multiline:{rules:[21,22],inclusive:!1},acc_descr:{rules:[19],inclusive:!1},acc_title:{rules:[17],inclusive:!1},SCALE:{rules:[14,15,34,35],inclusive:!1},ALIAS:{rules:[],inclusive:!1},STATE_ID:{rules:[49],inclusive:!1},STATE_STRING:{rules:[50,51],inclusive:!1},FORK_STATE:{rules:[],inclusive:!1},STATE:{rules:[10,11,12,37,38,39,40,41,42,47,48,52,53,54],inclusive:!1},ID:{rules:[10,11,12],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,11,12,13,16,18,20,23,27,30,33,36,54,57,68,69,70,71,72,73,74,76,77,78],inclusive:!0}}}}();function d0(){this.yy={}}return f(d0,"Parser"),d0[x(275)]=k0,k0.Parser=d0,new d0}();function t0(x,t){return x=x-226,_0()[x]}L0.parser=L0;function _0(){const x=["statediagram","stateBorder","start","documents","createElementNS","prototype","productions_","⚠️ Node has no parent, cannot wrap:","text","REF0:","doc","430412FOGMFi","addState","edgeLabelBackground","START_TYPE","getClassesFromDbInfo","STYLE","url(#drop-shadow)","2827315pYRdCb","last_line","parent","isArray","getAccDescription","get","yyleng","useMaxWidth",`;
  stroke-width: `,"trim","neo","FILL_KEYWORD","stateBkg",`;
  stroke: `,"7164lLnOSL","note","getDiagramTitle","look","statediagramTitleText","textColor","backtrack_lexer","getData",`;
  fill: none;
}

.stateGroup .composit {
  fill: `,"STRUCT_START","mainBkg","root","clone",`px;
  filter: `,"showPosition","direction_tb","draw",`px;
}
[id$="-barbEnd"] {
  fill: `,"match","1477fUUYLp","titleTopMargin","INITIAL","handleStyleDef","BG_FILL","info","cssClasses","parentId","lineColor","begin","unshift","startEndCount","trace","states","211018WdwFKH","split","parseError","NOTE","styles","offset","STATE","nodes","transition","trimColon","-state","isGroup","lexer","url","1026516QnnXhp","edge","description","ranges","links","rules","specialStateColor","#efefef","_more","yylloc","yylineno","startIdIfNeeded","endIdIfNeeded","create",`;
  }
g.stateGroup text {
  fill: `,"group","more","classes","none","SCALE","anonymous","NOTE_TEXT","START_NODE","noteTextColor","value",`;

  text {
    fill: `,"substr","sanitizeText","clear","setDirection","struct","position","label","assign","NOTE_ID","❌ Error injecting clickable links:","replace","relations","markers","Setting state styles","styleClass","-cluster-alt","CLASSDEFID","addStyleClass","matches","length","warn",`;
}
.label div .edgeLabel {
  color: `,"shape","stateEnd","pop","_input","2741346ObDONM","relation","yytext","setTextStyle","options","first_column","addLink","stateDomId","terminals_","push","_backtrack","slice","range","matched","dividerCnt","pushState","input","DESCR","conditionStack","state","startTypeIfNeeded","currentDocument","1718184wXGlAA","2RkYjAs","Parse error on line ",`;;
  stroke-width: `,"type","choice","STYLEDEF_STYLEOPTS","getDirectionStatement","tooltip","stmt","popState","dir","setAttribute","parse","appendChild","forEach","CLASSDEF_STYLEOPTS","setRootDoc","noteBkgColor","done"];return _0=function(){return x},_0()}var Wx=L0,mx="TB",z0="TB",$0=h(261),x0="state",j=h(313),A0="relation",bx="classDef",_x="style",kx="applyClass",i0="default",U0="divider",K0="fill:none",X0="fill: #333",H0="c",J0="markdown",Z0="normal",C0="rect",I0="rectWithTitle",Tx="stateStart",Ex=h(398),F0="divider",Y0="roundedWithTitle",Dx="note",vx="noteGroup",r0=h(270),Cx=r0+h(345),q0=h(343),Ix="note",Lx=q0+" note-edge",Ax=r0+"-"+Ix,Ox=r0+"-cluster",wx=r0+h(390),Q0=h(290),V0=h(303),Nx="state",O0="----",Rx=""+O0+V0,P0=""+O0+Q0,j0=f((x,t=z0)=>{const i=h;if(!x.doc)return t;let r=t;for(let s of x.doc)s.stmt==="dir"&&(r=s[i(373)]);return r},"getDir"),Mx={getClasses:f(function(x,t){return t.db.getClasses()},"getClasses"),draw:f(function(){var x=rx(function*(t,i,r,s){const l=t0;var u,m;E[l(326)](l(279)),E.info("Drawing state diagram (v2)",i);let{securityLevel:p,state:c,layout:b}=W();s.db.extract(s.db.getRootDocV2());let v=s.db[l(309)](),L=Sx(i,p);v[l(254)]=s.type,v.layoutAlgorithm=b,v.nodeSpacing=(c==null?void 0:c.nodeSpacing)||50,v.rankSpacing=(c==null?void 0:c.rankSpacing)||50,W()[l(305)]==="neo"?v.markers=["barbNeo"]:v[l(387)]=["barb"],v.diagramId=i,yield nx(v,L);try{(typeof s.db.getLinks=="function"?s.db.getLinks():new Map).forEach((A,N)=>{const C=l;var M;let O=typeof N=="string"?N:typeof(N==null?void 0:N.id)=="string"?N.id:"";if(!O){E.warn("⚠️ Invalid or missing stateId from key:",JSON.stringify(N));return}let y=(M=L.node())==null?void 0:M.querySelectorAll("g"),I;if(y==null||y.forEach($=>{var G;((G=$.textContent)==null?void 0:G.trim())===O&&(I=$)}),!I){E[C(395)]("⚠️ Could not find node matching text:",O);return}let F=I.parentNode;if(!F){E.warn(C(277),O);return}let B=document[C(274)]("http://www.w3.org/2000/svg","a"),U=A.url.replace(/^"+|"+$/g,"");if(B.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",U),B[C(262)]("target","_blank"),A[C(258)]){let $=A.tooltip[C(385)](/^"+|"+$/g,"");B[C(262)]("title",$)}F.replaceChild(B,I),B[C(264)](I),E.info("🔗 Wrapped node in <a> tag for:",O,A[C(348)])})}catch(A){E.error(l(384),A)}ox.insertTitle(L,l(306),(u=c==null?void 0:c[l(322)])==null?25:u,s.db.getDiagramTitle()),gx(L,8,r0,(m=c==null?void 0:c[l(295)])==null?!0:m)});return function(t,i,r,s){return x.apply(this,arguments)}}(),h(318)),getDir:j0},m0=new Map,X=0;function b0(x="",t=0,i="",r=O0){return Nx+"-"+x+(i!==null&&i.length>0?""+r+i:"")+"-"+t}f(b0,h(235));var Bx=f((x,t,i,r,s,l,u,m)=>{E.trace("items",t),t.forEach(p=>{const c=t0;switch(p.stmt){case x0:s0(x,p,i,r,s,l,u,m);break;case i0:s0(x,p,i,r,s,l,u,m);break;case A0:{var b;s0(x,p.state1,i,r,s,l,u,m),s0(x,p.state2,i,r,s,l,u,m);let v=u===c(298),L={id:c(350)+X,start:p.state1.id,end:p.state2.id,arrowhead:"normal",arrowTypeEnd:v?"arrow_barb_neo":"arrow_barb",style:K0,labelStyle:"",label:Z.sanitizeText((b=p.description)==null?"":b,W()),arrowheadStyle:X0,labelpos:H0,labelType:J0,thickness:Z0,classes:q0,look:u};s.push(L),X++}break}})},"setupDoc"),G0=f((x,t=z0)=>{const i=h;let r=t;if(x.doc)for(let s of x.doc)s[i(259)]==="dir"&&(r=s.value);return r},"getDir");function e0(x,t,i){const r=h;if(!t.id||t.id==="</join></fork>"||t.id==="</choice>")return;t.cssClasses&&(Array.isArray(t.cssCompiledStyles)||(t.cssCompiledStyles=[]),t[r(327)].split(" ").forEach(l=>{let u=i.get(l);if(u){var m;t.cssCompiledStyles=[...(m=t.cssCompiledStyles)==null?[]:m,...u.styles]}}));let s=x.find(l=>l.id===t.id);s?Object[r(382)](s,t):x.push(t)}f(e0,"insertOrUpdateNode");function xx(x){const t=h;var i,r;return(i=x==null||(r=x[t(366)])==null?void 0:r.join(" "))==null?"":i}f(xx,h(285));function tx(x){var t;return(t=x==null?void 0:x.styles)==null?[]:t}f(tx,"getStylesFromDbInfo");var s0=f((x,t,i,r,s,l,u,m)=>{const p=h;let c=t.id,b=i.get(c),v=xx(b),L=tx(b),A=W();if(E.info("dataFetcher parsedItem",t,b,L),c!=="root"){var N;let O=C0;t.start===!0?O=Tx:t[p(272)]===!1&&(O=Ex),t.type!==i0&&(O=t[p(254)]),m0.get(c)||m0.set(c,{id:c,shape:O,description:Z.sanitizeText(c,A),cssClasses:v+" "+Cx,cssStyles:L});let y=m0.get(c);if(t.description){if(Array.isArray(y.description))y.shape=I0,y.description[p(237)](t.description);else{var C;(C=y.description)!=null&&C.length&&y.description.length>0?(y[p(397)]=I0,y.description===c?y.description=[t.description]:y.description=[y.description,t[p(351)]]):(y.shape=C0,y.description=t.description)}y.description=Z.sanitizeTextOrArray(y.description,A)}((N=y[p(351)])==null?void 0:N.length)===1&&y.shape===I0&&(y.type===p(364)?y.shape=Y0:y.shape=C0),!y.type&&t.doc&&(E[p(326)]("Setting cluster for XCX",c,G0(t)),y.type=p(364),y.isGroup=!0,y.dir=G0(t),y[p(397)]=t.type===U0?F0:Y0,y.cssClasses=y[p(327)]+" "+Ox+" "+(l?wx:""));let I={labelStyle:"",shape:y.shape,label:y[p(351)],cssClasses:y.cssClasses,cssCompiledStyles:[],cssStyles:y.cssStyles,id:c,dir:y.dir,domId:b0(c,X),type:y.type,isGroup:y[p(254)]==="group",padding:8,rx:10,ry:10,look:u,labelType:"markdown"};if(I.shape===F0&&(I.label=""),x&&x.id!==p(313)&&(E.trace("Setting node ",c," to be child of its parent ",x.id),I.parentId=x.id),I.centerLabel=!0,t.note){var M;let F={labelStyle:"",shape:Dx,label:t[p(303)][p(278)],labelType:"markdown",cssClasses:Ax,cssStyles:[],cssCompiledStyles:[],id:c+Rx+"-"+X,domId:b0(c,X,V0),type:y.type,isGroup:y[p(254)]==="group",padding:(M=A.flowchart)==null?void 0:M.padding,look:u,position:t.note[p(380)]},B=c+P0,U={labelStyle:"",shape:vx,label:t.note[p(278)],cssClasses:y.cssClasses,cssStyles:[],id:c+P0,domId:b0(c,X,Q0),type:"group",isGroup:!0,padding:16,look:u,position:t.note.position};X++,U.id=B,F[p(328)]=B,e0(r,U,m),e0(r,F,m),e0(r,I,m);let $=c,G=F.id;t.note.position==="left of"&&($=F.id,G=c),s.push({id:$+"-"+G,start:$,end:G,arrowhead:p(367),arrowTypeEnd:"",style:K0,labelStyle:"",classes:Lx,arrowheadStyle:X0,labelpos:H0,labelType:J0,thickness:Z0,look:u})}else e0(r,I,m)}t[p(280)]&&(E.trace("Adding nodes children "),Bx(t,t[p(280)],i,r,s,!l,u,m))},"dataFetcher"),$x=f(()=>{m0.clear(),X=0},"reset"),w={START_NODE:"[*]",START_TYPE:"start",END_NODE:"[*]",END_TYPE:"end",COLOR_KEYWORD:"color",FILL_KEYWORD:"fill",BG_FILL:"bgFill",STYLECLASS_SEP:","},W0=f(()=>new Map,"newClassesList"),M0=f(()=>({relations:[],states:new Map,documents:{}}),"newDoc"),g0=f(x=>JSON[h(263)](JSON.stringify(x)),h(314)),zx=(S0=class{constructor(x){const t=h;this.version=x,this.nodes=[],this.edges=[],this.rootDoc=[],this[t(366)]=W0(),this.documents={root:M0()},this.currentDocument=this.documents[t(313)],this.startEndCount=0,this.dividerCnt=0,this[t(353)]=new Map,this.getAccTitle=lx,this.setAccTitle=cx,this[t(292)]=dx,this.setAccDescription=hx,this.setDiagramTitle=ux,this[t(304)]=px,this.clear(),this[t(267)]=this[t(267)].bind(this),this.getDividerId=this.getDividerId.bind(this),this[t(378)]=this[t(378)].bind(this),this.trimColon=this[t(344)].bind(this)}extract(x){const t=h;this.clear(!0);for(let s of Array.isArray(x)?x:x.doc)switch(s.stmt){case x0:this[t(282)](s.id.trim(),s[t(254)],s.doc,s.description,s[t(303)]);break;case A0:this.addRelation(s.state1,s.state2,s.description);break;case bx:this.addStyleClass(s.id.trim(),s.classes);break;case _x:this[t(324)](s);break;case kx:this.setCssClass(s.id.trim(),s[t(389)]);break;case"click":this.addLink(s.id,s.url,s.tooltip);break}let i=this.getStates(),r=W();$x(),s0(void 0,this.getRootDocV2(),i,this.nodes,this.edges,!0,r.look,this[t(366)]);for(let s of this[t(342)])if(Array.isArray(s.label)){if(s.description=s[t(381)].slice(1),s[t(346)]&&s.description.length>0)throw Error("Group nodes can only have label. Remove the additional description for node ["+s.id+"]");s.label=s.label[0]}}handleStyleDef(x){let t=x.id.trim().split(","),i=x.styleClass.split(",");for(let r of t){let s=this.getState(r);if(!s){let l=r.trim();this.addState(l),s=this.getState(l)}s&&(s.styles=i.map(l=>{var u;return(u=l.replace(/;/g,""))==null?void 0:u.trim()}))}}setRootDoc(x){E[h(326)]("Setting root doc",x),this.rootDoc=x,this.version===1?this.extract(x):this.extract(this.getRootDocV2())}docTranslator(x,t,i){const r=h;if(t.stmt===A0){this.docTranslator(x,t.state1,!0),this.docTranslator(x,t.state2,!1);return}if(t.stmt===x0&&(t.id===w.START_NODE?(t.id=x.id+(i?"_start":"_end"),t.start=i):t.id=t.id[r(297)]()),t.stmt!==j&&t.stmt!==x0||!t.doc)return;let s=[],l=[];for(let u of t.doc)if(u.type===U0){let m=g0(u);m.doc=g0(l),s.push(m),l=[]}else l.push(u);if(s.length>0&&l.length>0){let u={stmt:x0,id:fx(),type:"divider",doc:g0(l)};s.push(g0(u)),t.doc=s}t.doc.forEach(u=>this.docTranslator(t,u,!0))}getRootDocV2(){return this.docTranslator({id:j,stmt:j},{id:j,stmt:j,doc:this.rootDoc},!0),{id:j,doc:this.rootDoc}}addState(x,t=i0,i=void 0,r=void 0,s=void 0,l=void 0,u=void 0,m=void 0){const p=h;let c=x==null?void 0:x.trim();if(!this.currentDocument.states.has(c))E.info("Adding state ",c,r),this.currentDocument.states.set(c,{stmt:x0,id:c,descriptions:[],type:t,doc:i,note:s,classes:[],styles:[],textStyles:[]});else{let b=this.currentDocument[p(334)][p(293)](c);if(!b)throw Error("State not found: "+c);b.doc||(b.doc=i),b[p(254)]||(b.type=t)}if(r&&(E.info("Setting state description",c,r),(Array[p(291)](r)?r:[r]).forEach(b=>this.addDescription(c,b.trim()))),s){let b=this.currentDocument.states.get(c);if(!b)throw Error("State not found: "+c);b.note=s,b.note.text=Z[p(376)](b.note.text,W())}l&&(E.info("Setting state classes",c,l),(Array[p(291)](l)?l:[l]).forEach(b=>this.setCssClass(c,b.trim()))),u&&(E.info("Setting state styles",c,u),(Array.isArray(u)?u:[u])[p(265)](b=>this.setStyle(c,b.trim()))),m&&(E.info(p(388),c,u),(Array.isArray(m)?m:[m]).forEach(b=>this.setTextStyle(c,b.trim())))}[h(377)](x){const t=h;this.nodes=[],this.edges=[],this.documents={root:M0()},this.currentDocument=this[t(273)].root,this.startEndCount=0,this.classes=W0(),x||(this.links=new Map,yx())}getState(x){return this.currentDocument.states.get(x)}getStates(){return this[h(249)].states}logDocuments(){E.info("Documents = ",this.documents)}getRelations(){return this.currentDocument.relations}[h(234)](x,t,i){const r=h;this[r(353)].set(x,{url:t,tooltip:i}),E[r(395)]("Adding link",x,t,i)}getLinks(){return this.links}[h(360)](x=""){const t=h;return x===w[t(371)]?(this[t(332)]++,""+w.START_TYPE+this.startEndCount):x}[h(248)](x="",t=i0){const i=h;return x===w[i(371)]?w[i(284)]:t}[h(361)](x=""){const t=h;return x===w.END_NODE?(this.startEndCount++,""+w.END_TYPE+this[t(332)]):x}endTypeIfNeeded(x="",t=i0){return x===w.END_NODE?w.END_TYPE:t}addRelationObjs(x,t,i=""){const r=h;let s=this.startIdIfNeeded(x.id.trim()),l=this.startTypeIfNeeded(x.id[r(297)](),x.type),u=this.startIdIfNeeded(t.id.trim()),m=this.startTypeIfNeeded(t.id[r(297)](),t.type);this.addState(s,l,x.doc,x[r(351)],x[r(303)],x.classes,x.styles,x.textStyles),this.addState(u,m,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles),this.currentDocument[r(386)][r(237)]({id1:s,id2:u,relationTitle:Z[r(376)](i,W())})}addRelation(x,t,i){const r=h;if(typeof x=="object"&&typeof t=="object")this.addRelationObjs(x,t,i);else if(typeof x=="string"&&typeof t=="string"){let s=this.startIdIfNeeded(x.trim()),l=this.startTypeIfNeeded(x),u=this.endIdIfNeeded(t[r(297)]()),m=this.endTypeIfNeeded(t);this.addState(s,l),this[r(282)](u,m),this[r(249)].relations[r(237)]({id1:s,id2:u,relationTitle:i?Z[r(376)](i,W()):void 0})}}addDescription(x,t){const i=h;var r;let s=this[i(249)][i(334)][i(293)](x),l=t.startsWith(":")?t.replace(":","").trim():t;s==null||(r=s.descriptions)==null||r.push(Z.sanitizeText(l,W()))}cleanupLabel(x){return x.startsWith(":")?x.slice(2).trim():x.trim()}getDividerId(){const x=h;return this.dividerCnt++,"divider-id-"+this[x(242)]}[h(392)](x,t=""){const i=h;this[i(366)].has(x)||this.classes.set(x,{id:x,styles:[],textStyles:[]});let r=this[i(366)].get(x);t&&r&&t.split(w.STYLECLASS_SEP).forEach(s=>{const l=i;let u=s[l(385)](/([^;]*);/,"$1").trim();if(RegExp(w.COLOR_KEYWORD).exec(s)){let m=u.replace(w[l(299)],w[l(325)]).replace(w.COLOR_KEYWORD,w.FILL_KEYWORD);r.textStyles.push(m)}r[l(339)].push(u)})}getClasses(){return this[h(366)]}setCssClass(x,t){x.split(",").forEach(i=>{var r;let s=this.getState(i);if(!s){let l=i.trim();this.addState(l),s=this.getState(l)}s==null||(r=s.classes)==null||r.push(t)})}setStyle(x,t){var i;(i=this.getState(x))==null||(i=i.styles)==null||i.push(t)}[h(231)](x,t){const i=h;var r;(r=this.getState(x))==null||(r=r.textStyles)==null||r[i(237)](t)}[h(257)](){return this.rootDoc.find(x=>x.stmt===$0)}getDirection(){const x=h;var t,i;return(t=(i=this[x(257)]())==null?void 0:i.value)==null?mx:t}setDirection(x){const t=h;let i=this.getDirectionStatement();i?i.value=x:this.rootDoc[t(331)]({stmt:$0,value:x})}trimColon(x){const t=h;return x.startsWith(":")?x[t(239)](1).trim():x.trim()}getData(){let x=W();return{nodes:this.nodes,edges:this.edges,other:{},config:x,direction:j0(this.getRootDocV2())}}getConfig(){const x=h;return W()[x(247)]}},f(S0,"StateDB"),S0.relationType={AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3},S0),Ux=f(x=>{const t=h;var i;return`
defs [id$="-barbEnd"] {
    fill: `+x.transitionColor+`;
    stroke: `+x.transitionColor+t(363)+x.nodeBorder+`;
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: `+x[t(307)]+`;
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: `+x.stateLabelColor+`;
}

g.stateGroup rect {
  fill: `+x[t(312)]+`;
  stroke: `+x.nodeBorder+`;
}

g.stateGroup line {
  stroke: `+x[t(329)]+`;
  stroke-width: `+(x.strokeWidth||1)+`;
}

.transition {
  stroke: `+x.transitionColor+t(296)+(x.strokeWidth||1)+t(310)+x.background+`;
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: `+x.noteBorderColor+`;
  fill: `+x.noteBkgColor+t(374)+x[t(372)]+`;
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: `+x.mainBkg+`;
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: `+x.labelBackgroundColor+`;
  opacity: 0.5;
}
.edgeLabel {
  background-color: `+x.edgeLabelBackground+`;
  p {
    background-color: `+x[t(283)]+`;
  }
  rect {
    opacity: 0.5;
    background-color: `+x.edgeLabelBackground+`;
    fill: `+x.edgeLabelBackground+`;
  }
  text-align: center;
}
.edgeLabel .label text {
  fill: `+(x.transitionLabelColor||x.tertiaryTextColor)+t(396)+(x.transitionLabelColor||x.tertiaryTextColor)+`;
}

.stateLabel text {
  fill: `+x.stateLabelColor+`;
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: `+x.specialStateColor+`;
  stroke: `+x[t(355)]+`;
}

.node .fork-join {
  fill: `+x.specialStateColor+`;
  stroke: `+x.specialStateColor+`;
}

.node circle.state-end {
  fill: `+x.innerEndBackground+t(301)+x.background+`;
  stroke-width: 1.5
}
.end-state-inner {
  fill: `+(x.compositeBackground||x.background)+`;
  // stroke: `+x.background+`;
  stroke-width: 1.5
}

.node rect {
  fill: `+(x[t(300)]||x.mainBkg)+`;
  stroke: `+(x[t(271)]||x.nodeBorder)+`;
  stroke-width: `+(x.strokeWidth||1)+`px;
}
.node polygon {
  fill: `+x.mainBkg+`;
  stroke: `+(x.stateBorder||x.nodeBorder)+t(253)+(x.strokeWidth||1)+t(319)+x[t(329)]+`;
}

.statediagram-cluster rect {
  fill: `+x.compositeTitleBackground+`;
  stroke: `+(x.stateBorder||x.nodeBorder)+`;
  stroke-width: `+(x.strokeWidth||1)+`px;
}

.cluster-label, .nodeLabel {
  color: `+x.stateLabelColor+`;
  // line-height: 1;
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: `+(x.stateBorder||x.nodeBorder)+`;
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: `+(x.compositeBackground||x.background)+`;
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: `+(x.altBackground?x.altBackground:t(356))+`;
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: `+(x.altBackground?x.altBackground:t(356))+`;
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: `+x[t(268)]+`;
  stroke: `+x.noteBorderColor+`;
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: `+x.noteBkgColor+`;
  stroke: `+x.noteBorderColor+`;
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: `+x.noteTextColor+`;
}

.statediagram-note .nodeLabel {
  color: `+x.noteTextColor+`;
}
.statediagram .edgeLabel {
  color: red; // `+x.noteTextColor+`;
}

[id$="-dependencyStart"], [id$="-dependencyEnd"] {
  fill: `+x.lineColor+`;
  stroke: `+x.lineColor+`;
  stroke-width: `+(x.strokeWidth||1)+`;
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: `+x.textColor+`;
}

[data-look="neo"].statediagram-cluster rect {
  fill: `+x.mainBkg+`;
  stroke: `+(x.useGradient?"url("+x.svgId+"-gradient)":x[t(271)]||x.nodeBorder)+`;
  stroke-width: `+((i=x.strokeWidth)==null?1:i)+`;
}
[data-look="neo"].statediagram-cluster rect.outer {
  rx: `+x.radius+`px;
  ry: `+x.radius+t(315)+(x.dropShadow?x.dropShadow.replace(t(287),"url("+x.svgId+"-drop-shadow)"):"none")+`
}
`},"getStyles");export{Ux as S,Wx as b,Mx as m,zx as x};
