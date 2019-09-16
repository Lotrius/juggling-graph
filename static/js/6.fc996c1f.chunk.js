(window["webpackJsonpjuggling-graph"]=window["webpackJsonpjuggling-graph"]||[]).push([[6],{362:function(e,t,a){"use strict";a.r(t);var n=a(49),r=a(50),i=a(52),s=a(51),o=a(53),c=a(1),l=a.n(c),u=a(357),d=a(364),p=a(359),h=a(363),m=a(367),g=a(358),f=a(361),b=a(58),y=a.n(b),v=(a(185),function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props.date;return l.a.createElement("div",null,l.a.createElement(y.a,{selected:t,onChange:function(t){return e.props.setDate(t)}}))}}]),t}(c.Component)),D=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).submitData=function(e){e.preventDefault();var t=parseInt(a.refs.input.value,10);isNaN(t)?a.refs.input.value="":(a.refs.input.value="",a.props.updateDailyData(t))},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.guest;return l.a.createElement("form",{onSubmit:this.submitData},l.a.createElement("div",{className:""},l.a.createElement("div",null,l.a.createElement("input",{className:"f6 input-reset fl black-80  pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns b--black ".concat("true"===e?"bg-moon-gray":"bg-white"),type:"text",placeholder:"Number of catches",ref:"input",disabled:"true"===e||null})),l.a.createElement("div",null,l.a.createElement("input",{className:"f6 button-reset fl pv3 tc bn bg-green hover-bg-green white w-100 w-25-m w-20-l br2-ns br--right-ns ".concat("true"===e?null:"pointer"),type:"submit",value:"Add",disabled:"true"===this.props.guest||null}))))}}]),t}(c.Component),E=a(16),j=[],w=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(i.a)(this,Object(s.a)(t).call(this))).removeNoise=function(e,t){for(var a=e.slice(1).map(function(e){return e.y}),n=a.length,r=[0],i=0,s=0;s<n;s++)s%t||0===s||(r.push(i/t),i=0),i+=a[s],s===n-1&&r.push(i/(n%t));return r},e.stringifyDate=function(e){var t=e.getFullYear().toString(),a=(e.getMonth()+1).toString(),n=e.getDate().toString();return 1===a.length&&(a="0"+a),1===n.length&&(n="0"+n),"".concat(t,"-").concat(a,"-").concat(n)},e.setDate=function(t){sessionStorage.setItem("date",t),e.getDailyData(new Date(sessionStorage.getItem("date")))},e.getDailyData=function(t){var a=t.getFullYear().toString(),n=(t.getMonth()+1).toString(),r=t.getDate().toString();1===n.length&&(n="0"+n),1===r.length&&(r="0"+r);var i="".concat(a,"-").concat(n,"-").concat(r);fetch("https://obscure-river-59718.herokuapp.com/dailygraph",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({newDate:i})}).then(function(e){return e.json()}).then(function(t){j=[{x:0,y:0}].concat(t.map(function(e,t){return{x:t+1,y:parseInt(e.catches)}})),e.setState({dailyData:j})})},e.updateDailyData=function(t){fetch("https://obscure-river-59718.herokuapp.com/dailyupdate",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({catches:t})}).then(function(e){return e.json()}).then(function(t){return e.setState({date:new Date},function(){return e.getDailyData(e.state.date)}),t}).then(function(t){j.push({x:j.length,y:t.catches}),e.setState({dailyData:j})})},e.state={dailyData:j},e}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){sessionStorage.getItem("date")&&this.setDate(new Date(sessionStorage.getItem("date"))),this.props.changeCurrentPath(this.props.location.pathname)}},{key:"render",value:function(){var e=this.props,t=e.xPadding,a=e.yPadding,n=[];j.length>1&&(n=this.removeNoise(j,5).map(function(e,t){return{x:5*t,y:e}}));var r=new Date(sessionStorage.getItem("date")),i=this.stringifyDate(r),s=1===(j=this.state.dailyData).length?0:(j.reduce(function(e,t){return e+t.y},0)/(j.length-1)).toFixed(2);return l.a.createElement("div",{className:"flex justify-center"},l.a.createElement("div",{className:"mr5",style:{width:"600px"}},l.a.createElement(u.a,{className:"mt6",theme:d.a.material,domainPadding:{x:[0,30],y:[0,30]},containerComponent:l.a.createElement(p.a,{labels:function(e){var t=e.datum;return"Attempt ".concat(t.x,": ").concat(t.y," catches")},voronoiBlacklist:["points","noise"]}),style:{parent:{maxWidth:"200%"}}},l.a.createElement(h.a,{text:"Catches ".concat(i),x:180,y:30,textAnchor:"middle"}),l.a.createElement(m.a,{style:{axisLabel:{padding:t},axis:{padding:100}},label:"Attempt"}),l.a.createElement(m.a,{style:{axisLabel:{padding:a}},dependentAxis:!0,label:"Catches"}),l.a.createElement(g.a,{data:1===j.length?[]:j,animate:{duration:1e3,onLoad:{duration:2e3}}}),l.a.createElement(g.a,{name:"noise",data:n,style:{data:{stroke:"#c43a31"}},animate:{duration:1e3,onLoad:{duration:2e3}}}),l.a.createElement(f.a,{name:"points",data:1===j.length?[]:j,animate:{duration:1e3,onLoad:{duration:2e3}}}))),l.a.createElement("div",{className:"mt5",style:{width:"300px"}},l.a.createElement("div",{className:"center"},l.a.createElement("div",{className:"mb3 overflow-auto"},l.a.createElement(D,{guest:this.props.guest,updateDailyData:this.updateDailyData})),l.a.createElement("div",null,l.a.createElement(v,{setDate:this.setDate,date:r})),l.a.createElement("div",{className:"mt3"},l.a.createElement("h3",null,"Average: ",s)))))}}]),t}(c.Component);t.default=Object(E.g)(w)}}]);
//# sourceMappingURL=6.fc996c1f.chunk.js.map