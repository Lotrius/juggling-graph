(window["webpackJsonpjuggling-graph"]=window["webpackJsonpjuggling-graph"]||[]).push([[0],{136:function(e,a,t){e.exports=t(248)},141:function(e,a,t){},248:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),i=t(123),l=t.n(i),c=(t(141),t(29)),o=t(30),u=t(34),s=t(31),d=t(35),m=t(257),p=t(261),b=t(258),h=t(263),y=t(255),g=t(259),v=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(u.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(r)))).submitData=function(e){e.preventDefault();var a=parseInt(t.refs.input.value,10);isNaN(a)?t.refs.input.value="":(t.refs.input.value="",t.props.updateDailyData(a))},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.submitData},r.a.createElement("div",{className:"cf"},r.a.createElement("div",null,r.a.createElement("input",{className:"f6 f5-l input-reset fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns b--black",type:"text",placeholder:"Number of catches",ref:"input"})),r.a.createElement("div",null,r.a.createElement("input",{className:"f6 f5-l button-reset fl pv3 tc bn bg-green hover-bg-green white pointer w-100 w-25-m w-20-l br2-ns br--right-ns",type:"submit",value:"Add"}))))}}]),a}(n.Component),f=function(e){function a(){return Object(c.a)(this,a),Object(u.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.dailyData,t=e.updateDailyData,n=e.xPadding,i=e.yPadding,l=a.map(function(e){return e.x});return l.push(a.length),r.a.createElement("div",{className:"mw6 center"},r.a.createElement(m.a,{theme:p.a.material,containerComponent:r.a.createElement(b.a,{labels:function(e){var a=e.datum;return"Attempt ".concat(a.x,": ").concat(a.y," catches")},voronoiBlacklist:["points"]})},r.a.createElement(h.a,{style:{axisLabel:{padding:n},axis:{padding:100}},label:"Attempt Number",tickValues:l}),r.a.createElement(h.a,{crossAxis:!1,style:{axisLabel:{padding:i}},dependentAxis:!0,label:"Catches"}),r.a.createElement(y.a,{data:a,animate:{duration:1e3,onLoad:{duration:0}}}),r.a.createElement(g.a,{name:"points",data:a,animate:{duration:1e3,onLoad:{duration:0}}})),r.a.createElement("br",null),r.a.createElement(v,{updateDailyData:t}))}}]),a}(n.Component),x=function(e){function a(){return Object(c.a)(this,a),Object(u.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.dailyAverageData,t=e.xPadding,n=e.yPadding;return r.a.createElement("div",{className:"mw6 center"},r.a.createElement(m.a,{theme:p.a.material,containerComponent:r.a.createElement(b.a,{labels:function(e){var a=e.datum;return"Day ".concat(a.x," average: ").concat(a.y," catches")},voronoiBlacklist:["points"]})},r.a.createElement(h.a,{style:{axisLabel:{padding:t},axis:{padding:100}},label:"Day",fixLabelOverlap:!0}),r.a.createElement(h.a,{style:{axisLabel:{padding:n}},dependentAxis:!0,label:"Average Number Catches",fixLabelOverlap:!0}),r.a.createElement(y.a,{data:a,animate:{duration:1e3,onLoad:{duration:0}}}),r.a.createElement(g.a,{name:"points",data:a,animate:{duration:1e3,onLoad:{duration:0}}})))}}]),a}(n.Component),D=[{x:0,y:0},{x:1,y:1},{x:2,y:3},{x:3,y:5}],E=[{x:0,y:0}],w=function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(u.a)(this,Object(s.a)(a).call(this))).updateDailyData=function(a){D.push({x:D.length,y:a}),e.setState({dailyData:D}),e.updateAverageData(D)},e.updateAverageData=function(a){var t=D.map(function(e){return e.y}).reduce(function(e,a){return e+a},0)/(D.length-1);E.push({x:E.length,y:t}),e.setState({dailyAverageData:E})},e.state={dailyData:D,dailyAverageData:E},e}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,{dailyData:D,updateDailyData:this.updateDailyData,xPadding:30,yPadding:40}),r.a.createElement(x,{dailyAverageData:E,xPadding:30,yPadding:40}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(247);l.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[136,1,2]]]);
//# sourceMappingURL=main.490dca45.chunk.js.map