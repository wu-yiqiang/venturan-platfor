import{n as $,r as G}from"./index-Cb2DL3_Q.js";import{a as l,l as J,c as Q,s as U,o as X,i as Y,g as K,b as C,m as _,Q as xx,H as ex,Z as tx,q as ax,r as ix,E as rx}from"./dist3-BUpURWcQ.js";import{s as lx}from"./ordinal-DV3N7k0M.js";import"./src-CxY9Di3P.js";import{x as q}from"./arc-B1oxyqPq.js";import{a as sx}from"./pie-KeUVDzm9.js";import{m as nx}from"./mermaid-parser.core-CGptufIP.js";import{t as ox}from"./chunk-4BX2VUAB-By8WaQFk.js";const c=T;(function(x,a){const i=T,s=x();for(;;)try{if(parseInt(i(314))/1+-parseInt(i(322))/2+parseInt(i(316))/3*(-parseInt(i(339))/4)+-parseInt(i(312))/5+parseInt(i(313))/6*(parseInt(i(337))/7)+parseInt(i(338))/8+parseInt(i(342))/9*(-parseInt(i(325))/10)===a)break;s.push(s.shift())}catch{s.push(s.shift())}})(h,636860);function h(){const x=[`rendering pie chart
`,"selectAll","sort","max","813740HLCFAa","pie9","entries","10920VUjGym",`;
    font-family: `,"min","append","pie12",", with value: ","getDiagramTitle","data","style","stroke","width","translate(225,225)","21cFYgok","1734384ZBfZgs","1236tAHLpP","parse","attr","459RlqDfi",'" has invalid value: ',"text","pieStrokeWidth","height","pie","populateDb","2711240FxmcvC","1999590WsTpOo","1209319TNoNpX","map","7614nPhBtd","pie4"];return h=function(){return x},h()}function T(x,a){return x=x-306,h()[x]}G();var cx=rx.pie,D={sections:new Map,showData:!1},m=D.sections,v=D.showData,px=structuredClone(cx),E={getConfig:l(()=>structuredClone(px),"getConfig"),clear:l(()=>{m=new Map,v=D.showData,ix()},"clear"),setDiagramTitle:K,getDiagramTitle:Y,setAccTitle:X,getAccTitle:U,setAccDescription:Q,getAccDescription:J,addSection:l(({label:x,value:a})=>{const i=T;if(a<0)throw Error('"'+x+i(306)+a+". Negative values are not allowed in pie charts. All slice values must be >= 0.");m.has(x)||(m.set(x,a),C.debug("added new section: "+x+i(330)+a))},"addSection"),getSections:l(()=>m,"getSections"),setShowData:l(x=>{v=x},"setShowData"),getShowData:l(()=>v,"getShowData")},dx=l((x,a)=>{ox(x,a),a.setShowData(x.showData),x.sections.map(a.addSection)},c(311)),ux={parse:l(function(){var x=$(function*(a){let i=yield nx("pie",a);C.debug(i),dx(i,E)});return function(a){return x.apply(this,arguments)}}(),c(340))},fx=l(x=>`
  .pieCircle{
    stroke: `+x.pieStrokeColor+`;
    stroke-width : `+x[c(308)]+`;
    opacity : `+x.pieOpacity+`;
  }
  .pieOuterCircle{
    stroke: `+x.pieOuterStrokeColor+`;
    stroke-width: `+x.pieOuterStrokeWidth+`;
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: `+x.pieTitleTextSize+`;
    fill: `+x.pieTitleTextColor+c(326)+x.fontFamily+`;
  }
  .slice {
    font-family: `+x.fontFamily+`;
    fill: `+x.pieSectionTextColor+`;
    font-size:`+x.pieSectionTextSize+`;
    // fill: white;
  }
  .legend text {
    fill: `+x.pieLegendTextColor+`;
    font-family: `+x.fontFamily+`;
    font-size: `+x.pieLegendTextSize+`;
  }
`,"getStyles"),mx=l(x=>{const a=c;let i=[...x.values()].reduce((e,n)=>e+n,0),s=[...x[a(324)]()][a(315)](([e,n])=>({label:e,value:n})).filter(e=>e.value/i*100>=1);return sx().value(e=>e.value)[a(320)](null)(s)},"createPieArcs"),Tx={parser:ux,db:E,renderer:{draw:l((x,a,i,s)=>{const e=c;var n,k;C.debug(e(318)+x);let d=s.db,A=_(),I=xx(d.getConfig(),A[e(310)]),g=ex(a),o=g.append("g");o.attr("transform",e(336));let{themeVariables:r}=A,[b]=tx(r.pieOuterStrokeWidth);b!=null||(b=2);let z=I.textPosition,W=q().innerRadius(0).outerRadius(185),L=q().innerRadius(185*z).outerRadius(185*z);o.append("circle").attr("cx",0).attr("cy",0).attr("r",185+b/2)[e(341)]("class","pieOuterCircle");let u=d.getSections(),P=mx(u),j=[r.pie1,r.pie2,r.pie3,r[e(317)],r.pie5,r.pie6,r.pie7,r.pie8,r[e(323)],r.pie10,r.pie11,r[e(329)]],w=0;u.forEach(t=>{w+=t});let F=P.filter(t=>(t.data.value/w*100).toFixed(0)!=="0"),S=lx(j).domain([...u.keys()]);o[e(319)]("mySlices")[e(332)](F).enter().append("path").attr("d",W).attr("fill",t=>S(t.data.label)).attr("class","pieCircle"),o.selectAll("mySlices").data(F).enter().append(e(307)).text(t=>(t.data.value/w*100).toFixed(0)+"%")[e(341)]("transform",t=>"translate("+L.centroid(t)+")").style("text-anchor","middle").attr("class","slice");let H=o[e(328)]("text").text(d[e(331)]()).attr("x",0).attr("y",-400/2)[e(341)]("class","pieTitleText"),O=[...u.entries()].map(([t,p])=>({label:t,value:p})),y=o.selectAll(".legend").data(O).enter()[e(328)]("g").attr("class","legend").attr("transform",(t,p)=>{let f=22*O.length/2;return"translate(216,"+(p*22-f)+")"});y[e(328)]("rect").attr("width",18)[e(341)](e(309),18).style("fill",t=>S(t.label))[e(333)](e(334),t=>S(t.label)),y[e(328)]("text").attr("x",22).attr("y",14).text(t=>d.getShowData()?t.label+" ["+t.value+"]":t.label);let N=512+Math[e(321)](...y.selectAll("text").nodes()[e(315)](t=>{const p=e;var f;return(f=t==null?void 0:t.getBoundingClientRect()[p(335)])==null?0:f})),B=(n=(k=H.node())==null?void 0:k.getBoundingClientRect().width)==null?0:n,Z=450/2-B/2,V=450/2+B/2,M=Math[e(327)](0,Z),R=Math.max(N,V)-M;g.attr("viewBox",M+" 0 "+R+" 450"),ax(g,450,R,I.useMaxWidth)},"draw")},styles:fx};export{Tx as diagram};
