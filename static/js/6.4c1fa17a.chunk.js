(this["webpackJsonpjuggling-graph"]=this["webpackJsonpjuggling-graph"]||[]).push([[6],{402:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a(16),l=a(18),s=a(17),c=a(19),i=a(0),o=a.n(i),g=a(395),u=a(401),d=a(400),m=a(404),h=a(397),b=a(406),p=a(6),v=a(129),y=a.n(v),f=(a(128),function(e){var t=e.averageDate,a=e.setDate;return o.a.createElement("div",null,o.a.createElement(y.a,{className:"br3 pl2 blue bg-light-gray",selected:t,onChange:function(e){return a(e)},dateFormat:"MM/yyyy",showMonthYearPicker:!0}))});f.defaultProps={averageDate:new Date,setDate:null};var x=f,k=(a(99),function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(l.a)(this,Object(s.a)(t).call(this))).getStyles=function(e,t){return{xAxis:{axisLabel:{padding:e,fill:"black"},axis:{padding:100,stroke:"black"},tickLabels:{fill:"black"},ticks:{stroke:"black"}},yAxis:{axisLabel:{padding:t,fill:"black"},axis:{stroke:"black"},tickLabels:{fill:"black"},ticks:{stroke:"black"}},average:{data:{stroke:"#c43a31"}}}},e.setDate=function(t){sessionStorage.setItem("avgdate",t),e.getAverageData(new Date(sessionStorage.getItem("avgdate")))},e.getAverageData=function(t){var a=t.getFullYear().toString(),n=(t.getMonth()+1).toString();1===n.length&&(n="0".concat(n));var r="".concat(a,"-").concat(n);fetch("https://obscure-river-59718.herokuapp.com/averagegraph",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({selectedMonth:r})}).then((function(e){return e.json()})).then((function(t){e.setState((function(e,a){return{dailyAverageData:t.map((function(e){return{x:parseInt(e.to_char.substring(8,10),10),y:parseFloat(e.avg)}}))}}))}))},e.state={dailyAverageData:[]},e}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.changeCurrentPath,a=e.location;sessionStorage.getItem("avgdate")&&this.setDate(new Date(sessionStorage.getItem("avgdate"))),t(a.pathname)}},{key:"render",value:function(){var e=this.props,t=e.xPadding,a=e.yPadding,n=this.state.dailyAverageData,r=new Date(sessionStorage.getItem("avgdate")),l=["January","February","March","April","May","June","July","August","September","October","November","December"][r.getMonth()],s=this.getStyles(t,a);return o.a.createElement("div",{className:"mt3 flex justify-center"},o.a.createElement("div",{className:"cont flex justify-center mt2 mb3 pl3 pr3 ba bw1",style:{backgroundColor:"#ECD9BA"}},o.a.createElement("div",{className:"chart mr3",style:{width:"600px"}},o.a.createElement(g.a,{theme:u.a.material,domainPadding:{x:[50,30],y:[50,30]}},o.a.createElement(d.a,{text:"Average catches ".concat(l),x:180,y:30,textAnchor:"middle"}),o.a.createElement(m.a,{style:s.xAxis,label:"Day",fixLabelOverlap:!0}),o.a.createElement(m.a,{style:s.yAxis,dependentAxis:!0,label:"Average Catches",fixLabelOverlap:!0}),o.a.createElement(d.a,{text:"No data available",x:180,y:180,textAnchor:"middle",style:0===n.length?null:{display:"none",zIndex:"100"}}),o.a.createElement(h.a,{data:n,labels:function(e){var t=e.datum;return"".concat(t.x," average: ").concat(+t.y.toFixed(2)," catches")},labelComponent:o.a.createElement(b.a,{constrainToVisibleArea:!0}),animate:{duration:1e3,onLoad:{duration:0}}}))),o.a.createElement("div",{className:"date ml3 mt5 center",style:{width:"225px"}},o.a.createElement("h3",null,"Select date:"),o.a.createElement(x,{setDate:this.setDate,averageDate:r}))))}}]),t}(i.Component));k.defaultProps={changeCurrentPath:null,location:null,xPadding:null,yPadding:null};t.default=Object(p.g)(k)},99:function(e,t,a){}}]);
//# sourceMappingURL=6.4c1fa17a.chunk.js.map