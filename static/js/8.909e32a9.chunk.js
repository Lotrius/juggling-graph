(window["webpackJsonpjuggling-graph"]=window["webpackJsonpjuggling-graph"]||[]).push([[8],{352:function(e,a,t){"use strict";t.r(a);var n=t(49),s=t(50),r=t(52),l=t(51),i=t(53),c=t(1),o=t.n(c),m=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(r.a)(this,Object(l.a)(a).call(this,e))).onEmailChange=function(e){t.setState({signInEmail:e.target.value})},t.onPasswordChange=function(e){t.setState({signInPassword:e.target.value})},t.onSubmitSignIn=function(e,a){e.preventDefault(),fetch("https://obscure-river-59718.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t.state.signInEmail,password:t.state.signInPassword})}).then(function(e){return e.json()}).then(function(e){"success"===e&&t.props.changeLoginStatus(a)})},t.state={signInEmail:"",signInPassword:""},t}return Object(i.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a={backgroundColor:"#41A0BF"};return o.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},o.a.createElement("main",{className:"pa4 black-80"},o.a.createElement("div",{className:"measure"},o.a.createElement("form",null,o.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},o.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),o.a.createElement("div",{className:"mt3"},o.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),o.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-light-gray hover-bg-moon-gray hover-black w-100",type:"email",name:"email-address",id:"email-address"})),o.a.createElement("div",{className:"mv3"},o.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),o.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-light-gray hover-bg-moon-gray hover-black w-100",type:"password",name:"password",id:"password"})),o.a.createElement("label",{className:"pa0 ma0 lh-copy f6 pointer"},o.a.createElement("input",{type:"checkbox"})," Remember me")),o.a.createElement("div",null,o.a.createElement("input",{onClick:function(a){return e.onSubmitSignIn(a,!1)},className:"b ph3 pv2 input-reset ba b--black grow pointer f4 dib br3",style:a,type:"submit",value:"Sign in"})))),o.a.createElement("h1",{className:"mt4 tc"},"- OR -"),o.a.createElement("div",{className:"flex justify-center"},o.a.createElement("input",{onClick:function(){return e.props.changeLoginStatus(!0)},className:"b mt3 ph3 pv2 input-reset ba b--black grow pointer f3 br3",type:"submit",style:a,value:"Enter as guest"})),o.a.createElement("div",{className:"flex flex-column mt3"},o.a.createElement("p",{className:""},"Signing in as a guest means you can see my progress but will be unable to add any data."),o.a.createElement("p",{className:""},"Registration is currently not an option. It may also never be an option."))))}}]),a}(o.a.Component);a.default=m}}]);
//# sourceMappingURL=8.909e32a9.chunk.js.map