(window["webpackJsonpjuggling-graph"]=window["webpackJsonpjuggling-graph"]||[]).push([[6],{355:function(e,t,n){"use strict";t.a={continuousTransitions:function(){return{onLoad:{duration:2e3},onExit:{duration:500},onEnter:{duration:500}}},continuousPolarTransitions:function(){return{onLoad:{duration:2e3,before:function(){return{_y:0,_y1:0,_y0:0}},after:function(e){return{_y:e._y,_y1:e._y1,_y0:e._y0}}},onExit:{duration:500,before:function(e,t,n){var a=function(e){return(0===t?n[t+1]:n[t-1])[e]};return{_x:a("_x"),_y:a("_y"),_y0:a("_y0")}}},onEnter:{duration:500,before:function(e,t,n){var a=function(e){return(0===t?n[t+1]:n[t-1])[e]};return{_x:a("_x"),_y:a("_y"),_y0:a("_y0")}},after:function(e){return{_x:e._x,_y:e._y,_y1:e._y1,_y0:e._y0}}}}},discreteTransitions:function(){return{onLoad:{duration:2e3,before:function(){return{opacity:0}},after:function(e){return e}},onExit:{duration:600,before:function(){return{opacity:0}}},onEnter:{duration:600,before:function(){return{opacity:0}},after:function(e){return e}}}}}},359:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),l=n(68),c=n.n(l),u=n(39),p=n.n(u),s=n(181),f=n(44),b=n(174),d=n(118),y=n(344),m=function(e,t){var n=f.a.modifyProps(e,t,"line"),a=e=p()({},n,function(e){var t=s.a.getData(e);t.length<2&&(t=[]);var n={x:f.a.getRange(e,"x"),y:f.a.getRange(e,"y")},a={x:b.a.getDomain(e,"x"),y:b.a.getDomain(e,"y")},r={x:d.a.getBaseScale(e,"x").domain(a.x).range(e.horizontal?n.y:n.x),y:d.a.getBaseScale(e,"y").domain(a.y).range(e.horizontal?n.x:n.y)},o=e.polar?e.origin||f.a.getPolarOrigin(e):void 0,i=e.theme&&e.theme.line&&e.theme.line.style?e.theme.line.style:{};return{domain:a,data:t,scale:r,style:f.a.getStyles(e.style,i),origin:o}}(n)),r=a.data,o=a.domain,i=a.events,l=a.groupComponent,u=a.height,m=a.horizontal,g=a.interpolation,h=a.origin,v=a.padding,O=a.polar,P=a.scale,w=a.sharedEvents,j=a.standalone,x=a.style,C=a.theme,_=a.width,E=a.labels,M=a.name,z={parent:{style:x.parent,scale:P,data:r,height:u,width:_,name:M,domain:o,standalone:j,polar:O,origin:h,padding:v,horizontal:m},all:{data:{horizontal:m,polar:O,origin:h,scale:P,data:r,interpolation:g,groupComponent:l,theme:C,style:x.data}}};return r.reduce((function(t,n,a){var r=y.a.getText(e,n,a);(void 0!==r&&null!==r||E&&(i||w))&&(t[c()(n.eventKey)?a:n.eventKey]={labels:y.a.getProps(e,a)});return t}),z)},g=n(179),h=n(116),v=n(178);function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){P(e,t,n[t])}))}return e}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function(e){var t=void 0!==e._y1?e._y1:e._y;return null!==t&&void 0!==t&&null!==e._y0},j=function(e){return function(t){return e.x(void 0!==t._x1?t._x1:t._x)}},x=function(e){return function(t){return e.y(void 0!==t._y1?t._y1:t._y)}},C=function(e){var t;return"curve".concat((t=e)&&t[0].toUpperCase()+t.slice(1))},_=function(e){var t=e.polar,n=e.scale,a=e.horizontal,r=!t,o=void 0===e.openCurve?r:e.openCurve,i="function"===typeof e.interpolation&&e.interpolation,l="string"===typeof e.interpolation&&(o?C(e.interpolation):"".concat(C(e.interpolation),"Closed"));return t?g.lineRadial().defined(w).curve(i||g[l]).angle(function(e){return function(t){return-1*e.x(void 0!==t._x1?t._x1:t._x)+Math.PI/2}}(n)).radius(x(n)):g.line().defined(w).curve(i||g[l]).x(a?x(n):j(n)).y(a?j(n):x(n))},E=function(e){var t=e.polar,n=e.origin,a=_(e),r=t&&n?"translate(".concat(n.x,", ").concat(n.y,")"):void 0;return i.a.cloneElement(e.pathComponent,O({},e.events,{d:a(e.data),style:f.a.evaluateStyle(p()({fill:"none",stroke:"black"},e.style),e),transform:e.transform||r,className:e.className,role:e.role,shapeRendering:e.shapeRendering,clipPath:e.clipPath}))};E.propTypes=O({},h.a.primitiveProps,{interpolation:r.a.oneOfType([r.a.string,r.a.func]),openCurve:r.a.bool,origin:r.a.object,pathComponent:r.a.element,polar:r.a.bool}),E.defaultProps={pathComponent:i.a.createElement(v.a,null),role:"presentation",shapeRendering:"auto"};var M=E,z=n(355),T=n(67),S=n(366),k=n(363),D=n(117),I=n.n(D),N=n(45),R=n.n(N),A=n(41),B=n.n(A),q=function(e){return i.a.createElement("defs",null,i.a.createElement("clipPath",{id:e.clipId},e.children))};q.propTypes={children:r.a.oneOfType([r.a.arrayOf(r.a.node),r.a.node]),clipId:r.a.oneOfType([r.a.number,r.a.string])};var L=q;function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var W=function(e){var t=e.desc,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["desc"]);return t?i.a.createElement("circle",V({vectorEffect:"non-scaling-stroke"},n),i.a.createElement("desc",null,t)):i.a.createElement("circle",V({vectorEffect:"non-scaling-stroke"},n))};function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var X=function(e){var t=e.desc,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["desc"]);return t?i.a.createElement("rect",U({vectorEffect:"non-scaling-stroke"},n),i.a.createElement("desc",null,t)):i.a.createElement("rect",U({vectorEffect:"non-scaling-stroke"},n))};function Y(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function H(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function K(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var G=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=K(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).clipId=R()(e)&&void 0!==e.clipId?e.clipId:I()("victory-clip-"),n}var n,a,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n=t,(a=[{key:"calculateAttributes",value:function(e){var t=e.polar,n=e.origin,a=e.clipWidth,r=void 0===a?0:a,o=e.clipHeight,i=void 0===o?0:o,l=e.translateX,c=void 0===l?0:l,u=e.translateY,p=void 0===u?0:u,s=f.a.getPadding({padding:e.clipPadding}),b=e.radius||f.a.getRadius(e);return{x:(t?n.x:c)-s.left,y:(t?n.y:p)-s.top,width:Math.max((t?b:r)+s.left+s.right,0),height:Math.max((t?b:i)+s.top+s.bottom,0)}}},{key:"renderClippedGroup",value:function(e,t){var n=e.style,a=e.events,r=e.transform,o=e.children,l=e.className,c=e.groupComponent,u=this.renderClipComponent(e,t),s=p()({className:l,style:n,transform:r,key:"clipped-group-".concat(t),clipPath:"url(#".concat(t,")")},a);return i.a.cloneElement(c,s,[u].concat(Y(i.a.Children.toArray(o))))}},{key:"renderGroup",value:function(e){var t=e.style,n=e.events,a=e.transform,r=e.children,o=e.className,l=e.groupComponent;return i.a.cloneElement(l,p()({className:o,style:t,transform:a},n),r)}},{key:"renderClipComponent",value:function(e,t){var n,a=e.polar,r=e.origin,o=e.clipWidth,l=void 0===o?0:o,c=e.clipHeight,u=void 0===c?0:c,s=e.translateX,b=void 0===s?0:s,d=e.translateY,y=void 0===d?0:d,m=e.circleComponent,g=e.rectComponent,h=e.clipPathComponent,v=f.a.getPadding({padding:e.clipPadding}),O=v.top,P=v.bottom,w=v.left,j=v.right;if(a){var x=e.radius||f.a.getRadius(e),C={r:Math.max(x+w+j,x+O+P,0),cx:r.x-w,cy:r.y-O};n=i.a.cloneElement(m,C)}else{var _={x:b-w,y:y-O,width:Math.max(l+w+j,0),height:Math.max(u+O+P,0)};n=i.a.cloneElement(g,_)}return i.a.cloneElement(h,p()({key:"clip-path-".concat(t)},e,{clipId:t}),n)}},{key:"getClipValue",value:function(e,t){var n={x:e.clipWidth,y:e.clipHeight};if(void 0!==n[t])return n[t];var a=f.a.getRange(e,t);return a&&Math.abs(a[0]-a[1])||void 0}},{key:"getTranslateValue",value:function(e,t){var n={x:e.translateX,y:e.translateY};if(void 0!==n[t])return n[t];var a=f.a.getRange(e,t);return a?Math.min.apply(Math,Y(a)):void 0}},{key:"render",value:function(){var e=this.getClipValue(this.props,"y"),t=this.getClipValue(this.props,"x");if(void 0===t||void 0===e)return this.renderGroup(this.props);var n=this.getTranslateValue(this.props,"x"),a=this.getTranslateValue(this.props,"y"),r=B()({},this.props,{clipHeight:e,clipWidth:t,translateX:n,translateY:a});return this.renderClippedGroup(r,this.clipId)}}])&&H(n.prototype,a),r&&H(n,r),t}(i.a.Component);Object.defineProperty(G,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"VictoryClipContainer"}),Object.defineProperty(G,"role",{configurable:!0,enumerable:!0,writable:!0,value:"container"}),Object.defineProperty(G,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{children:r.a.oneOfType([r.a.arrayOf(r.a.node),r.a.node]),circleComponent:r.a.element,className:r.a.string,clipHeight:T.a.nonNegative,clipId:r.a.oneOfType([r.a.number,r.a.string]),clipPadding:r.a.shape({top:r.a.number,bottom:r.a.number,left:r.a.number,right:r.a.number}),clipPathComponent:r.a.element,clipWidth:T.a.nonNegative,events:r.a.object,groupComponent:r.a.element,origin:r.a.shape({x:T.a.nonNegative,y:T.a.nonNegative}),polar:r.a.bool,radius:T.a.nonNegative,style:r.a.object,transform:r.a.string,translateX:r.a.number,translateY:r.a.number}}),Object.defineProperty(G,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{circleComponent:i.a.createElement(W,null),rectComponent:i.a.createElement(X,null),clipPathComponent:i.a.createElement(L,null),groupComponent:i.a.createElement("g",null)}});var J=n(364),F=n(357);function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function $(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var ee={width:450,height:300,padding:50,interpolation:"linear"},te=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),$(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n=t,(a=[{key:"shouldAnimate",value:function(){return!!this.props.animate}},{key:"render",value:function(){var e=t.animationWhitelist,n=t.role,a=f.a.modifyProps(this.props,ee,n);if(this.shouldAnimate())return this.animateComponent(a,e);var r=this.renderContinuousData(a);return a.standalone?this.renderContainer(a.containerComponent,r):r}}])&&Z(n.prototype,a),r&&Z(n,r),t}(i.a.Component);Object.defineProperty(te,"animationWhitelist",{configurable:!0,enumerable:!0,writable:!0,value:["data","domain","height","padding","samples","style","width"]}),Object.defineProperty(te,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"VictoryLine"}),Object.defineProperty(te,"role",{configurable:!0,enumerable:!0,writable:!0,value:"line"}),Object.defineProperty(te,"defaultTransitions",{configurable:!0,enumerable:!0,writable:!0,value:z.a.continuousTransitions()}),Object.defineProperty(te,"defaultPolarTransitions",{configurable:!0,enumerable:!0,writable:!0,value:z.a.continuousPolarTransitions()}),Object.defineProperty(te,"continuous",{configurable:!0,enumerable:!0,writable:!0,value:!0}),Object.defineProperty(te,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){Q(e,t,n[t])}))}return e}({},h.a.baseProps,h.a.dataProps,{interpolation:r.a.oneOfType([r.a.oneOf(["basis","bundle","cardinal","catmullRom","linear","monotoneX","monotoneY","natural","step","stepAfter","stepBefore"]),r.a.func]),label:T.a.deprecated(r.a.string,"Use `labels` instead for individual data labels")})}),Object.defineProperty(te,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{containerComponent:i.a.createElement(S.a,null),dataComponent:i.a.createElement(M,null),labelComponent:i.a.createElement(k.a,{renderInPortal:!0}),groupComponent:i.a.createElement(G,null),samples:50,sortKey:"x",sortOrder:"ascending",standalone:!0,theme:J.a.grayscale}}),Object.defineProperty(te,"getDomain",{configurable:!0,enumerable:!0,writable:!0,value:b.a.getDomain}),Object.defineProperty(te,"getData",{configurable:!0,enumerable:!0,writable:!0,value:s.a.getData}),Object.defineProperty(te,"getBaseProps",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return m(e,ee)}}),Object.defineProperty(te,"expectedComponents",{configurable:!0,enumerable:!0,writable:!0,value:["dataComponent","labelComponent","groupComponent","containerComponent"]});t.a=Object(F.a)(te,{components:[{name:"parent",index:"parent"},{name:"data",index:"all"},{name:"labels"}]})},361:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),l=n(44),c=n(355),u=n(116),p=n(67),s=n(366),f=n(111),b=n.n(f),d={circle:function(e,t,n){return"M ".concat(e,", ").concat(t,"\n      m ").concat(-n,", 0\n      a ").concat(n,", ").concat(n," 0 1,0 ").concat(2*n,",0\n      a ").concat(n,", ").concat(n," 0 1,0 ").concat(2*-n,",0")},square:function(e,t,n){var a=.87*n,r=e-a,o=t+a,i=e+a-r;return"M ".concat(r,", ").concat(o,"\n      h").concat(i,"\n      v-").concat(i,"\n      h-").concat(i,"\n      z")},diamond:function(e,t,n){var a=.87*n,r=Math.sqrt(a*a*2);return"M ".concat(e,", ").concat(t+r,"\n      l ").concat(r,", -").concat(r,"\n      l -").concat(r,", -").concat(r,"\n      l -").concat(r,", ").concat(r,"\n      l ").concat(r,", ").concat(r,"\n      z")},triangleDown:function(e,t,n){var a=e+n,r=t-n,o=t+n/2*Math.sqrt(3);return"M ".concat(e-n,", ").concat(r,"\n      L ").concat(a,", ").concat(r,"\n      L ").concat(e,", ").concat(o,"\n      z")},triangleUp:function(e,t,n){var a=e+n,r=t-n/2*Math.sqrt(3),o=t+n;return"M ".concat(e-n,", ").concat(o,"\n      L ").concat(a,", ").concat(o,"\n      L ").concat(e,", ").concat(r,"\n      z")},plus:function(e,t,n){var a=1.1*n,r=a/1.5;return"\n      M ".concat(e-r/2,", ").concat(t+a,"\n      v-").concat(r,"\n      h-").concat(r,"\n      v-").concat(r,"\n      h").concat(r,"\n      v-").concat(r,"\n      h").concat(r,"\n      v").concat(r,"\n      h").concat(r,"\n      v").concat(r,"\n      h-").concat(r,"\n      v").concat(r,"\n      z")},minus:function(e,t,n){var a=1.1*n,r=a-.3*a,o=e-a,i=t+r/2,l=e+a-o;return"M ".concat(o,", ").concat(i,"\n      h").concat(l,"\n      v-").concat(r,"\n      h-").concat(l,"\n      z")},star:function(e,t,n){var a=1.35*n,r=Math.PI/5,o=b()(10).map((function(n){var o=n%2===0?a:a/2;return"".concat(o*Math.sin(r*(n+1))+e,",\n        ").concat(o*Math.cos(r*(n+1))+t)}));return"M ".concat(o.join("L")," z")}},y=n(178);function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){g(e,t,n[t])}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){var t=e.x,n=e.y,a=l.a.evaluateProp(e.size,e);if(e.getPath)return e.getPath(t,n,a);var r={circle:d.circle,square:d.square,diamond:d.diamond,triangleDown:d.triangleDown,triangleUp:d.triangleUp,plus:d.plus,minus:d.minus,star:d.star},o=l.a.evaluateProp(e.symbol,e);return("function"===typeof r[o]?r[o]:r.circle)(t,n,a)},v=function(e){return i.a.cloneElement(e.pathComponent,m({},e.events,{d:h(e),style:l.a.evaluateStyle(e.style,e),desc:l.a.evaluateProp(e.desc,e),tabIndex:l.a.evaluateProp(e.tabIndex,e),role:e.role,shapeRendering:e.shapeRendering,className:e.className,transform:e.transform,clipPath:e.clipPath}))};v.propTypes=m({},u.a.primitiveProps,{datum:r.a.object,getPath:r.a.func,pathComponent:r.a.element,size:r.a.oneOfType([r.a.number,r.a.func]),symbol:r.a.oneOfType([r.a.oneOf(["circle","diamond","plus","minus","square","star","triangleDown","triangleUp"]),r.a.func]),x:r.a.number,y:r.a.number}),v.defaultProps={pathComponent:i.a.createElement(y.a,null),role:"presentation",shapeRendering:"auto"};var O=v,P=n(363),w=n(364),j=n(174),x=n(181),C=n(357),_=n(68),E=n.n(_),M=n(76),z=n.n(M),T=n(39),S=n.n(T),k=n(118),D=n(344);function I(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var N=function(e,t){return t.bubbleProperty?"circle":e.symbol||t.symbol},R=function(e,t){var n=t.size,a=t.z;return e.size?"function"===typeof e.size?e.size:Math.max(e.size,1):"function"===typeof t.size?n:e[a]?function(e,t){var n=t.data,a=t.z,r=t.maxBubbleSize,o=t.minBubbleSize,i=n.map((function(e){return e[a]})),c=Math.min.apply(Math,I(i)),u=Math.max.apply(Math,I(i)),p=r||function(){var e=Math.min.apply(Math,I(z()(l.a.getPadding(t))));return Math.max(e,5)}(),s=o||.1*p;if(u===c)return Math.max(s,1);var f=Math.PI*Math.pow(p,2),b=Math.PI*Math.pow(s,2),d=(e[a]-c)/(u-c)*f,y=Math.max(d,b),m=Math.sqrt(y/Math.PI);return Math.max(m,1)}(e,t):Math.max(n||0,1)},A=function(e,t){var n=l.a.modifyProps(e,t,"scatter"),a=e=S()({},n,function(e){var t=e.theme&&e.theme.scatter&&e.theme.scatter.style?e.theme.scatter.style:{},n=l.a.getStyles(e.style,t),a=x.a.getData(e),r={x:l.a.getRange(e,"x"),y:l.a.getRange(e,"y")},o={x:j.a.getDomain(e,"x"),y:j.a.getDomain(e,"y")};return{domain:o,data:a,scale:{x:k.a.getBaseScale(e,"x").domain(o.x).range(e.horizontal?r.y:r.x),y:k.a.getBaseScale(e,"y").domain(o.y).range(e.horizontal?r.x:r.y)},style:n,origin:e.polar?e.origin||l.a.getPolarOrigin(e):void 0,z:e.bubbleProperty||"z"}}(n)),r=a.data,o=a.domain,i=a.events,c=a.height,u=a.origin,p=a.padding,s=a.polar,f=a.scale,b=a.name,d=a.sharedEvents,y=a.standalone,m=a.style,g=a.theme,h=a.width,v=a.labels,O=a.horizontal,P={parent:{style:m.parent,scale:f,domain:o,data:r,height:c,width:h,standalone:y,theme:g,origin:u,polar:s,padding:p,name:b,horizontal:O}};return r.reduce((function(t,n,a){var o=E()(n.eventKey)?a:n.eventKey,c=l.a.scalePoint(e,n),p={x:c.x,y:c.y,datum:n,data:r,index:a,scale:f,polar:s,origin:u,horizontal:O,size:R(n,e),symbol:N(n,e),style:m.data};t[o]={data:p};var b=D.a.getText(e,n,a);return(void 0!==b&&null!==b||v&&(i||d))&&(t[o].labels=D.a.getProps(e,a)),t}),P)};function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function L(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var V={width:450,height:300,padding:50,size:3,symbol:"circle"},W=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),L(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n=t,(a=[{key:"shouldAnimate",value:function(){return!!this.props.animate}},{key:"render",value:function(){var e=t.animationWhitelist,n=t.role,a=l.a.modifyProps(this.props,V,n);if(this.shouldAnimate())return this.animateComponent(a,e);var r=this.renderData(a);return a.standalone?this.renderContainer(a.containerComponent,r):r}}])&&q(n.prototype,a),r&&q(n,r),t}(i.a.Component);Object.defineProperty(W,"animationWhitelist",{configurable:!0,enumerable:!0,writable:!0,value:["data","domain","height","maxBubbleSize","padding","samples","size","style","width"]}),Object.defineProperty(W,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"VictoryScatter"}),Object.defineProperty(W,"role",{configurable:!0,enumerable:!0,writable:!0,value:"scatter"}),Object.defineProperty(W,"defaultTransitions",{configurable:!0,enumerable:!0,writable:!0,value:c.a.discreteTransitions()}),Object.defineProperty(W,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){B(e,t,n[t])}))}return e}({},u.a.baseProps,u.a.dataProps,{bubbleProperty:r.a.string,maxBubbleSize:p.a.nonNegative,minBubbleSize:p.a.nonNegative,size:r.a.oneOfType([p.a.nonNegative,r.a.func]),symbol:r.a.oneOfType([r.a.oneOf(["circle","diamond","plus","minus","square","star","triangleDown","triangleUp"]),r.a.func])})}),Object.defineProperty(W,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{containerComponent:i.a.createElement(s.a,null),dataComponent:i.a.createElement(O,null),labelComponent:i.a.createElement(P.a,null),groupComponent:i.a.createElement("g",null),samples:50,sortOrder:"ascending",standalone:!0,theme:w.a.grayscale}}),Object.defineProperty(W,"getDomain",{configurable:!0,enumerable:!0,writable:!0,value:j.a.getDomain}),Object.defineProperty(W,"getData",{configurable:!0,enumerable:!0,writable:!0,value:x.a.getData}),Object.defineProperty(W,"getBaseProps",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return A(e,V)}}),Object.defineProperty(W,"expectedComponents",{configurable:!0,enumerable:!0,writable:!0,value:["dataComponent","labelComponent","groupComponent","containerComponent"]});t.a=Object(C.a)(W)}}]);
//# sourceMappingURL=6.541e0d77.chunk.js.map