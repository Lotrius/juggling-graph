(window["webpackJsonpjuggling-graph"]=window["webpackJsonpjuggling-graph"]||[]).push([[1],{25:function(e,t,n){e.exports=n(36)},30:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(21),i=n.n(o),g=(n(30),n(15)),c=n(16),s=n(18),l=n(17),u=n(19),d=n(11),h=n(6),m=n(5),b=n.n(m),f=n(9),p=Object(f.a)(function(){return n.e(8).then(n.bind(null,348))}),v=Object(f.a)(function(){return Promise.all([n.e(0),n.e(6),n.e(4)]).then(n.bind(null,357))}),S=Object(f.a)(function(){return Promise.all([n.e(0),n.e(9),n.e(5)]).then(n.bind(null,360))}),w=Object(f.a)(function(){return n.e(7).then(n.bind(null,351))}),E=function(e){function t(){var e,n;Object(g.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).changeLoginStatus=function(e){var t="guest"===e,a="sandbox"===e;"false"!==b.a.get("signedin")&&b.a.get("signedin")?"true"===b.a.get("signedin")&&("true"===localStorage.getItem("guest")&&localStorage.setItem("guest",!1),"true"===localStorage.getItem("sandbox")&&localStorage.setItem("sandbox",!1),sessionStorage.removeItem("avgdate"),sessionStorage.removeItem("date"),localStorage.setItem("path","/"),b.a.set("signedin",!1)):(t&&localStorage.setItem("guest",!0),a&&localStorage.setItem("sandbox",!0),b.a.set("signedin",!0)),n.forceUpdate()},n.changeCurrentPath=function(e){localStorage.setItem("path",e)},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;sessionStorage.setItem("date",new Date),sessionStorage.setItem("avgdate",new Date);var t=localStorage.getItem("path");return"false"!==b.a.get("signedin")&&b.a.get("signedin")?"true"===b.a.get("signedin")?r.a.createElement("div",{className:"container-fluid"},r.a.createElement(d.a,{basename:"/juggling-graph"},r.a.createElement(h.a,{to:t||"/"}),r.a.createElement(w,{changeLoginStatus:this.changeLoginStatus}),r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,render:function(){return r.a.createElement(v,{xPadding:30,yPadding:35,changeCurrentPath:e.changeCurrentPath})},path:"/"}),r.a.createElement(h.b,{exact:!0,render:function(){return r.a.createElement(S,{xPadding:30,yPadding:35,changeCurrentPath:e.changeCurrentPath})},path:"/average"})))):void 0:r.a.createElement(d.a,{basename:"/juggling-graph"},r.a.createElement(h.a,{to:"/signin"}),r.a.createElement(h.b,{exact:!0,render:function(){return r.a.createElement(p,{changeLoginStatus:e.changeLoginStatus})},path:"/signin"}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(35);i.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,3]]]);
//# sourceMappingURL=main.5e93039f.chunk.js.map