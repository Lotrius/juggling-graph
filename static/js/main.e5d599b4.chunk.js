(window["webpackJsonpjuggling-graph"]=window["webpackJsonpjuggling-graph"]||[]).push([[1],{25:function(e,t,n){e.exports=n(36)},30:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(21),i=n.n(o),g=(n(30),n(15)),c=n(16),s=n(18),u=n(17),l=n(19),h=n(11),d=n(6),m=n(5),f=n.n(m),p=n(9),b=Object(p.a)(function(){return n.e(8).then(n.bind(null,353))}),v=Object(p.a)(function(){return Promise.all([n.e(0),n.e(6),n.e(5)]).then(n.bind(null,363))}),S=Object(p.a)(function(){return Promise.all([n.e(0),n.e(9),n.e(4)]).then(n.bind(null,366))}),w=Object(p.a)(function(){return n.e(7).then(n.bind(null,356))}),E=function(e){function t(){var e,n;Object(g.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).changeLoginStatus=function(e){"false"!==f.a.get("signedin")&&f.a.get("signedin")?"true"===f.a.get("signedin")&&("true"===localStorage.getItem("guest")&&localStorage.setItem("guest",!1),sessionStorage.removeItem("avgdate"),sessionStorage.removeItem("date"),localStorage.setItem("path","/"),f.a.set("signedin",!1)):(e&&localStorage.setItem("guest",!0),f.a.set("signedin",!0)),n.forceUpdate()},n.changeCurrentPath=function(e){localStorage.setItem("path",e)},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){sessionStorage.setItem("date",new Date),sessionStorage.setItem("avgdate",new Date)}},{key:"render",value:function(){var e=this,t=localStorage.getItem("path"),n=localStorage.getItem("guest");return"false"!==f.a.get("signedin")&&f.a.get("signedin")?"true"===f.a.get("signedin")?r.a.createElement(h.a,{basename:"/juggling-graph"},r.a.createElement(d.a,{to:t||"/"}),r.a.createElement(w,{changeLoginStatus:this.changeLoginStatus}),r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,render:function(){return r.a.createElement(v,{xPadding:30,yPadding:40,guest:n,changeCurrentPath:e.changeCurrentPath})},path:"/"}),r.a.createElement(d.b,{exact:!0,render:function(){return r.a.createElement(S,{xPadding:30,yPadding:40,guest:n,changeCurrentPath:e.changeCurrentPath})},path:"/average"}))):void 0:r.a.createElement(h.a,{basename:"/juggling-graph"},r.a.createElement(d.a,{to:"/signin"}),r.a.createElement(d.b,{exact:!0,render:function(){return r.a.createElement(b,{changeLoginStatus:e.changeLoginStatus})},path:"/signin"}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(35);i.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,3]]]);
//# sourceMappingURL=main.e5d599b4.chunk.js.map