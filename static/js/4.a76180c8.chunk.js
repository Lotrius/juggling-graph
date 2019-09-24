(window["webpackJsonpjuggling-graph"]=window["webpackJsonpjuggling-graph"]||[]).push([[4],{227:function(e,t,a){},357:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a(16),i=a(18),l=a(17),s=a(19),c=a(0),o=a.n(c),u=a(353),d=a(359),m=a(358),p=a(362),h=a(354),g=a(356),b=a(364),f=a(119),y=a.n(f),v=(a(134),function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props.date;return o.a.createElement("div",null,o.a.createElement(y.a,{className:"br3 pl2 blue bg-light-gray",selected:t,onChange:function(t){return e.props.setDate(t)}}))}}]),t}(c.Component)),D=(a(227),function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).submitData=function(e){e.preventDefault();var t=parseInt(a.refs.input.value,10);isNaN(t)?a.refs.input.value="":(a.refs.input.value="",a.props.updateDailyData(t))},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=localStorage.getItem("guest");return o.a.createElement("form",{onSubmit:this.submitData},o.a.createElement("div",{className:""},o.a.createElement("div",null,o.a.createElement("input",{className:"f6 mb2 input-reset fl black-80 pa3 lh-solid w-100 w-75-m w-80-l br3 b--black ".concat("true"===e?"bg-moon-gray":"bg-white"),style:{outline:"none"},type:"number",placeholder:"Number of catches ".concat("true"===e?"(disabled as guest)":""),ref:"input",disabled:"true"===e||null})),o.a.createElement("div",null,o.a.createElement("input",{className:"f6 button-reset pv3 tc bn bg-green hover-bg-green white w-50 w-25-m w-20-l br3 ".concat("true"===e?null:"pointer"),style:{outline:"none"},type:"submit",value:"Add",disabled:"true"===e||null}))))}}]),t}(c.Component)),x=a(6),E=(a(92),[]),k=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(i.a)(this,Object(l.a)(t).call(this))).getStyles=function(e,t){return{xAxis:{axisLabel:{padding:e,fill:"black"},axis:{padding:100,stroke:"black"},tickLabels:{fill:"black"},ticks:{stroke:"black"}},yAxis:{axisLabel:{padding:t,fill:"black"},axis:{stroke:"black"},tickLabels:{fill:"black"},ticks:{stroke:"black"}},average:{data:{stroke:"#c43a31"}}}},e.removeNoise=function(e,t){for(var a=e.slice(1).map(function(e){return e.y}),n=a.length,r=[0],i=0,l=0;l<n;l++)l%t||0===l||(r.push(i/t),i=0),i+=a[l],n%t||l!==n-1?l===n-1&&r.push(i/(n%t)):r.push(i/t);return r},e.stringifyDate=function(e){var t=e.getFullYear().toString(),a=(e.getMonth()+1).toString(),n=e.getDate().toString();return 1===a.length&&(a="0"+a),1===n.length&&(n="0"+n),"".concat(t,"-").concat(a,"-").concat(n)},e.setDate=function(t){sessionStorage.setItem("date",t),e.getDailyData(new Date(sessionStorage.getItem("date")))},e.getDailyData=function(t){var a=t.getFullYear().toString(),n=(t.getMonth()+1).toString(),r=t.getDate().toString();1===n.length&&(n="0"+n),1===r.length&&(r="0"+r);var i="".concat(a,"-").concat(n,"-").concat(r);fetch("https://obscure-river-59718.herokuapp.com/dailygraph",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({newDate:i})}).then(function(e){return e.json()}).then(function(t){E=[{x:0,y:0}].concat(t.map(function(e,t){return{x:t+1,y:parseInt(e.catches)}})),e.setState({dailyData:E})})},e.updateDailyData=function(t){if("true"===localStorage.getItem("sandbox"))return E.push({x:E.length,y:t}),void e.setState({dailyData:E});fetch("https://obscure-river-59718.herokuapp.com/dailyupdate",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({catches:t})}).then(function(e){return e.json()}).then(function(t){return e.setState({date:new Date},function(){return e.getDailyData(e.state.date)}),t}).then(function(t){sessionStorage.setItem("date",new Date),E.push({x:E.length,y:t.catches}),e.setState({dailyData:E})})},e.state={dailyData:E},e}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){sessionStorage.getItem("date")&&this.setDate(new Date(sessionStorage.getItem("date"))),this.props.changeCurrentPath(this.props.location.pathname)}},{key:"render",value:function(){var e=this.props,t=e.xPadding,a=e.yPadding,n=[];E.length>1&&(n=this.removeNoise(E,5).map(function(e,t){return{x:5*t,y:e}}));var r=new Date(sessionStorage.getItem("date")),i=this.stringifyDate(r),l=1===(E=this.state.dailyData).length,s=l?0:(E.reduce(function(e,t){return e+t.y},0)/(E.length-1)).toFixed(2),c=this.getStyles(t,a);return o.a.createElement("div",{className:"mt3 flex justify-center"},o.a.createElement("div",{className:"cont flex justify-center mt2 mb3 pl3 pr3 ba br3 bw1",style:{backgroundColor:"#ECD9BA"}},o.a.createElement("div",{className:"chart mr3 bw1",style:{width:"600px"}},o.a.createElement(u.a,{className:"mt6",theme:d.a.material,domainPadding:{x:[0,30],y:[0,30]}},o.a.createElement(m.a,{text:"Catches ".concat(i),x:180,y:30,textAnchor:"middle"}),o.a.createElement(p.a,{style:c.xAxis,label:"Attempt",fixLabelOverlap:!0}),o.a.createElement(p.a,{style:c.yAxis,dependentAxis:!0,label:"Catches",fixLabelOverlap:!0}),o.a.createElement(m.a,{text:"No data available",x:180,y:180,textAnchor:"middle",style:l?null:{display:"none",zIndex:"100"}}),o.a.createElement(h.a,{data:l?[]:E,animate:{duration:1e3,onLoad:{duration:2e3}}}),o.a.createElement(h.a,{name:"noise",data:n,style:c.average,animate:{duration:1e3,onLoad:{duration:2e3}}}),o.a.createElement(g.a,{name:"points",data:l?[]:E,labels:function(e){var t=e.datum;return"Attempt ".concat(t.x,": ").concat(t.y," catches")},labelComponent:o.a.createElement(b.a,{constrainToVisibleArea:!0}),animate:{duration:1e3,onLoad:{duration:2e3}}}))),o.a.createElement("div",{className:"ml3 mt5",style:{width:"300px"}},o.a.createElement("div",{className:"center"},o.a.createElement("div",{className:"overflow-auto"},o.a.createElement(D,{updateDailyData:this.updateDailyData})),o.a.createElement("div",{className:"mt4"},o.a.createElement("h3",null,"Average: ",s)),o.a.createElement("div",{className:"date mt4"},o.a.createElement("h3",null,"Select date:"),o.a.createElement(v,{setDate:this.setDate,date:r}))))))}}]),t}(c.Component);t.default=Object(x.g)(k)},92:function(e,t,a){}}]);
//# sourceMappingURL=4.a76180c8.chunk.js.map