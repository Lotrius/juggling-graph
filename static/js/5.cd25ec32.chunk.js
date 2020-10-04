(this["webpackJsonpjuggling-graph"]=this["webpackJsonpjuggling-graph"]||[]).push([[5],{104:function(e,t,a){},274:function(e,t,a){},411:function(e,t,a){"use strict";a.r(t);var n=a(16),l=a(17),r=a(19),o=a(18),i=a(0),s=a.n(i),c=a(407),u=a(413),d=a(412),m=a(416),p=a(408),g=a(410),h=a(418),b=a(2),f=a(208),y=(a(209),a(133)),v=a.n(y),D=(a(132),function(e){var t=e.date,a=e.setDate;return s.a.createElement("div",null,s.a.createElement(v.a,{className:"br3 pl2 blue bg-light-gray",selected:t,onChange:function(e){return a(e)}}))});D.defaultProps={date:new Date,setDate:null};var x=D,k=(a(274),a(8)),E=a.n(k),S=JSON.parse(localStorage.getItem("guest")),w=JSON.parse(localStorage.getItem("sandbox")),N=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).submitData=function(t){var a=e.props.updateDailyData;t.preventDefault();var n=parseInt(t.target[0].value,10);t.target.reset(),a(n)},e.undoData=function(t){var a=e.props.deletePopup;t.preventDefault(),a()},e.state={loginState:""},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){S?this.setState({loginState:"(disabled as guest)"}):w&&this.setState({loginState:"(sandbox)"}),this.forceUpdate()}},{key:"render",value:function(){var e=this.state.loginState;return s.a.createElement("div",null,s.a.createElement("form",{onSubmit:this.submitData},s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("input",{className:"f6 mb2 input-reset fl black-80 pa3 lh-solid w-100 w-75-m w-80-l br3 b--black ".concat(S?"bg-moon-gray":"bg-white"),style:{outline:"none"},type:"number",placeholder:"Number of catches ".concat(e),disabled:S||null})),s.a.createElement("div",null,s.a.createElement("input",{className:"f6 button-reset pv3 tc bn bg-green hover-bg-dark-green white w-50 w-25-m w-20-l br3 ".concat(S?null:"pointer"),style:{outline:"none"},type:"submit",value:"Add",disabled:S||null})))),s.a.createElement("form",{onSubmit:this.undoData},s.a.createElement("div",{className:"mt3"},s.a.createElement("input",{className:"f6 button-reset pv3 tc bn bg-red hover-bg-dark-red white w-50 w-25-m w-20-l br3 ".concat(S?null:"pointer"),onKeyPress:function(e){e.preventDefault()},style:{outline:"none"},type:"submit",value:"Undo",disabled:S||null}))))}}]),a}(i.Component);N.defaultProps={updateDailyData:null,deletePopup:E.a.func};var j=N,A=(a(104),function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).deletePopup=function(){1===e.state.dailyData.length?Object(f.confirmAlert)({title:"??????????????",message:"there's nothing to delete why are you here",buttons:[{label:"im sorry",onClick:function(){}},{label:"bye",onClick:function(){}}]}):Object(f.confirmAlert)({title:"Delete last data point",message:"Are you you want to delete the last point?",buttons:[{label:"Yes",onClick:function(){return e.removeLastDataPoint()}},{label:"No",onClick:function(){}}]})},e.getStyles=function(e,t){return{xAxis:{axisLabel:{padding:e,fill:"black"},axis:{padding:100,stroke:"black"},tickLabels:{fill:"black"},ticks:{stroke:"black"}},yAxis:{axisLabel:{padding:t,fill:"black"},axis:{stroke:"black"},tickLabels:{fill:"black"},ticks:{stroke:"black"}},average:{data:{stroke:"#c43a31"}}}},e.removeNoise=function(e,t){for(var a=e.slice(1).map((function(e){return e.y})),n=a.length,l=[0],r=0,o=0;o<n;o+=1)o%t||0===o||(l.push(r/t),r=0),r+=a[o],n%t||o!==n-1?o===n-1&&l.push(r/(n%t)):l.push(r/t);return l},e.stringifyDate=function(e){var t=e.getFullYear().toString(),a=(e.getMonth()+1).toString(),n=e.getDate().toString();return 1===a.length&&(a="0".concat(a)),1===n.length&&(n="0".concat(n)),"".concat(t,"-").concat(a,"-").concat(n)},e.setDate=function(t){sessionStorage.setItem("date",t),e.getDailyData(new Date(sessionStorage.getItem("date")))},e.getDailyData=function(t){var a=e.stringifyDate(t);return fetch("https://obscure-river-59718.herokuapp.com/dailygraph",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({newDate:a})}).then((function(e){return e.json()})).then((function(t){e.setState((function(){return{dailyData:[{x:0,y:0}].concat(t.map((function(e,t){return{x:t+1,y:parseInt(e.catches,10)}})))}}))}))},e.updateDailyData=function(t){var a=e.state.dailyData;t===t&&("true"!==localStorage.getItem("sandbox")?fetch("https://obscure-river-59718.herokuapp.com/dailyupdate",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({catches:t})}).then((function(e){return e.json()})).then((function(t){return e.getDailyData(new Date(sessionStorage.getItem("date"))),t})).then((function(){sessionStorage.setItem("date",new Date),e.setState((function(e){return a.push({x:e.length,y:t}),{dailyData:a}}))})):e.setState((function(e){return a.push({x:e.dailyData.length,y:t}),{dailyData:a}})))},e.createAverageLine=function(t,a){return e.removeNoise(t,a).map((function(e,t){return{x:5*t,y:e}}))},e.calculateAverage=function(e){return(e.reduce((function(e,t){return e+t.y}),0)/(e.length-1)).toFixed(2)},e.removeLastDataPoint=function(){var t=e.state.dailyData;1!==t.length&&("true"!==localStorage.getItem("sandbox")?fetch("https://obscure-river-59718.herokuapp.com/delete",{method:"delete",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(){e.setState((function(){return t.pop(),{dailyData:t}}))})):e.setState((function(){return t.pop(),{dailyData:t}})))},e.state={dailyData:[{x:0,y:0}]},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.changeCurrentPath,a=e.location;sessionStorage.getItem("date")&&this.setDate(new Date(sessionStorage.getItem("date"))),t(a.pathname)}},{key:"render",value:function(){var e=this.props,t=e.xPadding,a=e.yPadding,n=this.state.dailyData,l=[];n.length>1&&(l=this.createAverageLine(n,5));var r=new Date(sessionStorage.getItem("date")),o=this.stringifyDate(r),i=1===n.length,b=i?0:this.calculateAverage(n),f=this.getStyles(t,a);return s.a.createElement("div",{className:"mt3 flex justify-center"},s.a.createElement("div",{className:"cont flex justify-center mt2 mb3 pl3 pr3 ba br3 bw1",style:{backgroundColor:"#ECD9BA"}},s.a.createElement("div",{className:"chart mr3 bw1",style:{width:"600px"}},s.a.createElement(c.a,{className:"mt6",theme:u.a.material,domainPadding:{x:[0,30],y:[0,30]}},s.a.createElement(d.a,{text:"Catches ".concat(o),x:180,y:30,textAnchor:"middle"}),s.a.createElement(m.a,{style:f.xAxis,label:"Attempt",fixLabelOverlap:!0}),s.a.createElement(m.a,{style:f.yAxis,dependentAxis:!0,label:"Catches",fixLabelOverlap:!0}),s.a.createElement(d.a,{text:"No data available",x:180,y:180,textAnchor:"middle",style:i?null:{display:"none",zIndex:"100"}}),s.a.createElement(p.a,{data:i?[]:n,animate:{duration:1e3,onLoad:{duration:2e3}}}),s.a.createElement(p.a,{name:"noise",data:l,style:f.average,animate:{duration:1e3,onLoad:{duration:2e3}}}),s.a.createElement(g.a,{name:"points",data:i?[]:n,labels:function(e){var t=e.datum;return"Attempt ".concat(t.x,": ").concat(t.y," catches")},labelComponent:s.a.createElement(h.a,{constrainToVisibleArea:!0}),animate:{duration:1e3,onLoad:{duration:2e3}}}))),s.a.createElement("div",{className:"ml3 mt5",style:{width:"300px"}},s.a.createElement("div",{className:"center"},s.a.createElement("div",{className:"overflow-auto"},s.a.createElement(j,{updateDailyData:this.updateDailyData,deletePopup:this.deletePopup})),s.a.createElement("div",{className:"mt4"},s.a.createElement("h3",null,"Average: ".concat(b))),s.a.createElement("div",{className:"date mt4"},s.a.createElement("h3",null,"Select date:"),s.a.createElement(x,{setDate:this.setDate,date:r}))))))}}]),a}(i.Component));A.defaultProps={changeCurrentPath:null,location:null,xPadding:null,yPadding:null};t.default=Object(b.g)(A)}}]);
//# sourceMappingURL=5.cd25ec32.chunk.js.map