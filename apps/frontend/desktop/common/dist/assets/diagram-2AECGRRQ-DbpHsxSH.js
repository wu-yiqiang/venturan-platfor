import{i as L,n as z,a as B,r as E}from"./index-Cb2DL3_Q.js";import{a as c,c as W,l as q,i as G,g as D,s as P,o as R,H,r as J,Q as k,C as I,E as V,b as K,O as Q,q as $}from"./dist3-BUpURWcQ.js";import{m as Z}from"./mermaid-parser.core-CGptufIP.js";import{t as _}from"./chunk-4BX2VUAB-By8WaQFk.js";const p=y;(function(e,x){const a=y,t=e();for(;;)try{if(parseInt(a(318))/1+-parseInt(a(340))/2+-parseInt(a(358))/3+parseInt(a(343))/4*(parseInt(a(350))/5)+-parseInt(a(336))/6+parseInt(a(349))/7+-parseInt(a(353))/8*(-parseInt(a(351))/9)===x)break;t.push(t.shift())}catch{t.push(t.shift())}})(M,861874);function y(e,x){return e=e-314,M()[e]}B(),E();var f={showLegend:!0,ticks:5,max:null,min:0,graticule:"circle"},T={axes:[],curves:[],options:f},g=structuredClone(T),N=V.radar,U=c(()=>k(L(L({},N),I().radar)),p(328)),A=c(()=>g[p(347)],"getAxes"),X=c(()=>g.curves,"getCurves"),Y=c(()=>g[p(354)],"getOptions"),aa=c(e=>{g.axes=e.map(x=>{const a=y;var t;return{name:x[a(345)],label:(t=x[a(320)])==null?x.name:t}})},"setAxes"),xa=c(e=>{const x=p;g.curves=e[x(322)](a=>{var t;return{name:a.name,label:(t=a.label)==null?a.name:t,entries:ta(a.entries)}})},"setCurves"),ta=c(e=>{if(e[0].axis==null)return e.map(a=>a.value);let x=A();if(x.length===0)throw Error("Axes must be populated before curves for reference entries");return x.map(a=>{let t=e.find(r=>{const s=y;var n;return((n=r[s(357)])==null?void 0:n.$refText)===a.name});if(t===void 0)throw Error("Missing entry for axis "+a.label);return t.value})},"computeCurveEntries"),C={getAxes:A,getCurves:X,getOptions:Y,setAxes:aa,setCurves:xa,setOptions:c(e=>{const x=p;var a,t,r,s,n,i,o,l,u,h;let d=e.reduce((m,v)=>(m[v.name]=v,m),{});g.options={showLegend:(a=(t=d.showLegend)==null?void 0:t.value)==null?f.showLegend:a,ticks:(r=(s=d.ticks)==null?void 0:s.value)==null?f[x(341)]:r,max:(n=(i=d[x(342)])==null?void 0:i[x(321)])==null?f[x(342)]:n,min:(o=(l=d.min)==null?void 0:l.value)==null?f[x(338)]:o,graticule:(u=(h=d.graticule)==null?void 0:h.value)==null?f[x(325)]:u}},"setOptions"),getConfig:U,clear:c(()=>{J(),g=structuredClone(T)},"clear"),setAccTitle:R,getAccTitle:P,setDiagramTitle:D,getDiagramTitle:G,getAccDescription:q,setAccDescription:W},ea=c(e=>{const x=p;_(e,C);let{axes:a,curves:t,options:r}=e;C.setAxes(a),C.setCurves(t),C[x(331)](r)},"populate"),ra={parse:c(function(){var e=z(function*(x){let a=yield Z("radar",x);K.debug(a),ea(a)});return function(x){return e[y(346)](this,arguments)}}(),"parse")},na=c((e,x,a,t)=>{const r=p;var s;let n=t.db,i=n.getAxes(),o=n.getCurves(),l=n[r(319)](),u=n.getConfig(),h=n.getDiagramTitle(),d=sa(H(x),u),m=(s=l.max)==null?Math[r(342)](...o.map(w=>Math.max(...w.entries))):s,v=l.min,b=Math[r(338)](u.width,u.height)/2;ia(d,i,b,l.ticks,l.graticule),la(d,i,b,u),O(d,i,o,v,m,l.graticule,u),j(d,o,l.showLegend,u),d[r(317)]("text").attr("class","radarTitle").text(h).attr("x",0).attr("y",-u[r(365)]/2-u.marginTop)},"draw"),sa=c((e,x)=>{const a=p;var t;let r=x.width+x[a(315)]+x.marginRight,s=x[a(365)]+x.marginTop+x.marginBottom,n={x:x.marginLeft+x.width/2,y:x[a(363)]+x.height/2};return $(e,s,r,(t=x.useMaxWidth)==null?!0:t),e[a(355)](a(329),"0 0 "+r+" "+s),e.append("g").attr("transform","translate("+n.x+", "+n.y+")")},"drawFrame"),ia=c((e,x,a,t,r)=>{const s=p;if(r==="circle")for(let n=0;n<t;n++){let i=a*(n+1)/t;e.append("circle").attr("r",i).attr("class","radarGraticule")}else if(r==="polygon"){let n=x.length;for(let i=0;i<t;i++){let o=a*(i+1)/t,l=x.map((u,h)=>{let d=2*h*Math.PI/n-Math.PI/2;return o*Math.cos(d)+","+o*Math.sin(d)})[s(339)](" ");e.append("polygon").attr("points",l).attr("class","radarGraticule")}}},"drawGraticule"),la=c((e,x,a,t)=>{const r=p;let s=x.length;for(let n=0;n<s;n++){let i=x[n][r(320)],o=2*n*Math.PI/s-Math.PI/2;e.append("line").attr("x1",0).attr("y1",0).attr("x2",a*t.axisScaleFactor*Math.cos(o))[r(355)]("y2",a*t.axisScaleFactor*Math.sin(o)).attr("class",r(362)),e.append("text")[r(327)](i).attr("x",a*t.axisLabelFactor*Math.cos(o)).attr("y",a*t[r(316)]*Math.sin(o))[r(355)]("class",r(334))}},"drawAxes");function M(){const e=["733704wSzfWQ","getOptions","label","value","map","class","axisColor","graticule","curveStrokeWidth","text","getConfig","viewBox","closedRoundCurve","setOptions",`;
	}
	.radarGraticule {
		fill: `,"buildRadarStyleOptions","radarAxisLabel","width","130308YcaAIW",`;
		fill-opacity: `,"min","join","2544712TdMGcT","ticks","max","688HBCLJC","radarLegendText","name","apply","axes","legendFontSize","10898090veelhJ","5555zXktGK","15381mBrFVZ","polygon","5752qQWWFv","options","attr","radarCurve-","axis","4663467hBKCcT","curveOpacity",`;
			stroke-width: `,`;
		stroke-width: `,"radarAxisLine","marginTop",`;
			fill-opacity: `,"height",`;
			stroke: `,"marginLeft","axisLabelFactor","append"];return M=function(){return e},M()}function O(e,x,a,t,r,s,n){let i=x.length,o=Math.min(n.width,n.height)/2;a.forEach((l,u)=>{const h=y;if(l.entries.length!==i)return;let d=l.entries[h(322)]((m,v)=>{let b=2*Math.PI*v/i-Math.PI/2,w=S(m,t,r,o);return{x:w*Math.cos(b),y:w*Math.sin(b)}});s==="circle"?e.append("path").attr("d",F(d,n.curveTension)).attr("class",h(356)+u):s===h(352)&&e[h(317)]("polygon").attr("points",d.map(m=>m.x+","+m.y).join(" ")).attr("class","radarCurve-"+u)})}c(O,"drawCurves");function S(e,x,a,t){return t*(Math.min(Math.max(e,x),a)-x)/(a-x)}c(S,"relativeRadius");function F(e,x){let a=e.length,t="M"+e[0].x+","+e[0].y;for(let r=0;r<a;r++){let s=e[(r-1+a)%a],n=e[r],i=e[(r+1)%a],o=e[(r+2)%a],l={x:n.x+(i.x-s.x)*x,y:n.y+(i.y-s.y)*x},u={x:i.x-(o.x-n.x)*x,y:i.y-(o.y-n.y)*x};t+=" C"+l.x+","+l.y+" "+u.x+","+u.y+" "+i.x+","+i.y}return t+" Z"}c(F,p(330));function j(e,x,a,t){const r=p;if(!a)return;let s=(t[r(335)]/2+t.marginRight)*3/4,n=-(t[r(365)]/2+t.marginTop)*3/4;x.forEach((i,o)=>{const l=r;let u=e.append("g").attr("transform","translate("+s+", "+(n+o*20)+")");u.append("rect").attr("width",12).attr("height",12).attr("class","radarLegendBox-"+o),u[l(317)]("text")[l(355)]("x",16).attr("y",0).attr(l(323),l(344))[l(327)](i.label)})}c(j,"drawLegend");var oa={draw:na},ca=c((e,x)=>{const a=p;let t="";for(let r=0;r<e.THEME_COLOR_LIMIT;r++){let s=e["cScale"+r];t+=`
		.radarCurve-`+r+` {
			color: `+s+`;
			fill: `+s+a(364)+x[a(359)]+`;
			stroke: `+s+a(360)+x[a(326)]+`;
		}
		.radarLegendBox-`+r+` {
			fill: `+s+`;
			fill-opacity: `+x[a(359)]+a(314)+s+`;
		}
		`}return t},"genIndexStyles"),ua=c(e=>{let x=k(Q(),I().themeVariables);return{themeVariables:x,radarOptions:k(x.radar,e)}},p(333)),ga={parser:ra,db:C,renderer:oa,styles:c(({radar:e}={})=>{const x=p;let{themeVariables:a,radarOptions:t}=ua(e);return`
	.radarTitle {
		font-size: `+a.fontSize+`;
		color: `+a.titleColor+`;
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: `+t[x(324)]+x(361)+t.axisStrokeWidth+`;
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: `+t.axisLabelFontSize+`px;
		color: `+t.axisColor+x(332)+t.graticuleColor+x(337)+t.graticuleOpacity+`;
		stroke: `+t.graticuleColor+`;
		stroke-width: `+t.graticuleStrokeWidth+`;
	}
	.radarLegendText {
		text-anchor: start;
		font-size: `+t[x(348)]+`px;
		dominant-baseline: hanging;
	}
	`+ca(a,t)+`
	`},"styles")};export{ga as diagram};
