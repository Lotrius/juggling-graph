(this["webpackJsonpjuggling-graph"]=this["webpackJsonpjuggling-graph"]||[]).push([[6],{104:function(e,t,a){},414:function(e,t,a){"use strict";a.r(t);var n=a(16),r=a(17),l=a(19),s=a(18),c=a(0),i=a.n(c),o=a(407),g=a(413),u=a(412),d=a(416),m=a(409),h=a(418),b=a(2),p=a(133),v=a.n(p),y=(a(132),function(e){var t=e.averageDate,a=e.setDate;return i.a.createElement("div",null,i.a.createElement(v.a,{className:"br3 pl2 blue bg-light-gray",selected:t,onChange:function(e){return a(e)},dateFormat:"MM/yyyy",showMonthYearPicker:!0}))});y.defaultProps={averageDate:new Date,setDate:null};var f=y,x=(a(104),function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).getStyles=function(e,t){return{xAxis:{axisLabel:{padding:e,fill:"black"},axis:{padding:100,stroke:"black"},tickLabels:{fill:"black"},ticks:{stroke:"black"}},yAxis:{axisLabel:{padding:t,fill:"black"},axis:{stroke:"black"},tickLabels:{fill:"black"},ticks:{stroke:"black"}},average:{data:{stroke:"#c43a31"}}}},e.setDate=function(t){sessionStorage.setItem("avgdate",t),e.getAverageData(new Date(sessionStorage.getItem("avgdate"))).then((function(t){e.setState((function(){return{dailyAverageData:t}}))}))},e.getAverageData=function(e){var t=e.getFullYear().toString(),a=(e.getMonth()+1).toString();1===a.length&&(a="0".concat(a));var n="".concat(t,"-").concat(a);return fetch("https://obscure-river-59718.herokuapp.com/averagegraph",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({selectedMonth:n})}).then((function(e){return e.json()})).then((function(e){return e.map((function(e){return{x:parseInt(e.to_char.substring(8,10),10),y:parseFloat(e.avg)}}))}))},e.state={dailyAverageData:[]},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.changeCurrentPath,a=e.location;sessionStorage.getItem("avgdate")&&this.setDate(new Date(sessionStorage.getItem("avgdate"))),t(a.pathname)}},{key:"render",value:function(){var e=this.props,t=e.xPadding,a=e.yPadding,n=this.state.dailyAverageData,r=new Date(sessionStorage.getItem("avgdate")),l=["January","February","March","April","May","June","July","August","September","October","November","December"][r.getMonth()],s=this.getStyles(t,a);return i.a.createElement("div",{className:"mt3 flex justify-center"},i.a.createElement("div",{className:"cont flex justify-center mt2 mb3 pl3 pr3 ba bw1",style:{backgroundColor:"#ECD9BA"}},i.a.createElement("div",{className:"chart mr3",style:{width:"600px"}},i.a.createElement(o.a,{theme:g.a.material,domainPadding:{x:[50,30],y:[50,30]}},i.a.createElement(u.a,{text:"Average catches ".concat(l),x:180,y:30,textAnchor:"middle"}),i.a.createElement(d.a,{style:s.xAxis,label:"Day",fixLabelOverlap:!0}),i.a.createElement(d.a,{style:s.yAxis,dependentAxis:!0,label:"Average Catches",fixLabelOverlap:!0}),i.a.createElement(u.a,{text:"No data available",x:180,y:180,textAnchor:"middle",style:0===n.length?null:{display:"none",zIndex:"100"}}),i.a.createElement(m.a,{data:n,labels:function(e){var t=e.datum;return"".concat(t.x," average: ").concat(+t.y.toFixed(2)," catches")},labelComponent:i.a.createElement(h.a,{constrainToVisibleArea:!0}),animate:{duration:1e3,onLoad:{duration:0}}}))),i.a.createElement("div",{className:"date ml3 mt5 center",style:{width:"225px"}},i.a.createElement("h3",null,"Select date:"),i.a.createElement(f,{setDate:this.setDate,averageDate:r}))))}}]),a}(c.Component));x.defaultProps={changeCurrentPath:null,location:null,xPadding:null,yPadding:null};t.default=Object(b.g)(x)}}]);
//# sourceMappingURL=6.a39b3b09.chunk.js.map