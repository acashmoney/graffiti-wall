(this["webpackJsonpjwt-boilerplate"]=this["webpackJsonpjwt-boilerplate"]||[]).push([[0],{230:function(e,t,n){},231:function(e,t,n){},240:function(e,t,n){},241:function(e,t,n){},244:function(e,t,n){},351:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(46),c=n.n(a),s=(n(229),n(230),n(21)),o=n(14),i=(n(231),n(19)),u=n.n(i),l=n(36),j=n(75),d=n(89),p=n(4);function h(e){return Object(p.jsx)("span",{className:"error",children:e.error})}var b=n(377),O=n(378),f=n(208),x=n(374),g=n(380),m=n(376);function v(){var e=localStorage.getItem("token");e&&(JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3&&(localStorage.removeItem("token"),e=null));return e}var w={setToken:function(e){e?localStorage.setItem("token",e):localStorage.removeItem("token")},getToken:v,removeToken:function(){localStorage.removeItem("token")},getUserFromToken:function(){var e=v();return e?JSON.parse(atob(e.split(".")[1])).user:null}},k="/api/users/";var y={signup:function(e){return fetch(k+"signup",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json();throw new Error("Email already taken!")})).then((function(e){var t=e.token;return w.setToken(t)}))},logout:function(){w.removeToken()},login:function(e){return fetch(k+"login",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json();throw new Error("Bad Credentials!")})).then((function(e){var t=e.token;return w.setToken(t)}))},getUser:function(){return w.getUserFromToken()}};function S(e){var t=Object(r.useState)(""),n=Object(s.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(""),v=Object(s.a)(i,2),w=(v[0],v[1],Object(r.useState)({username:"",email:"",password:"",passwordConf:""})),k=Object(s.a)(w,2),S=k[0],C=k[1],T=Object(o.g)();function F(e){C(Object(d.a)(Object(d.a)({},S),{},Object(j.a)({},e.target.name,e.target.value)))}function I(){return(I=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,y.signup(S);case 4:e.handleSignUpOrLogin(),T.push("/"),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0.message),c(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(b.a,{textAlign:"center",style:{height:"100vh"},verticalAlign:"middle",children:Object(p.jsxs)(b.a.Column,{style:{maxWidth:450},children:[Object(p.jsxs)(O.a,{as:"h2",textAlign:"center",children:[Object(p.jsx)(f.a,{src:"https://image.flaticon.com/icons/png/512/3790/3790152.png"})," Sign Up"]}),Object(p.jsxs)(x.a,{autoComplete:"off",onSubmit:function(e){return I.apply(this,arguments)},children:[Object(p.jsxs)(g.a,{stacked:!0,children:[Object(p.jsx)(x.a.Input,{name:"username",placeholder:"username",value:S.username,onChange:F,required:!0}),Object(p.jsx)(x.a.Input,{type:"email",name:"email",placeholder:"email",value:S.email,onChange:F,required:!0}),Object(p.jsx)(x.a.Input,{name:"password",type:"password",placeholder:"password",value:S.password,onChange:F,required:!0}),Object(p.jsx)(x.a.Input,{name:"passwordConf",type:"password",placeholder:"Confirm Password",value:S.passwordConf,onChange:F,required:!0}),Object(p.jsx)(m.a,{type:"submit",className:"btn",children:"Signup"})]}),a?Object(p.jsx)(h,{error:a}):null]})]})})})}n(240);var C=n(25),T=n(375);function F(e){var t=Object(r.useState)(""),n=Object(s.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)({username:"",password:""}),v=Object(s.a)(i,2),w=v[0],k=v[1],S=Object(o.g)();function F(e){k(Object(d.a)(Object(d.a)({},w),{},Object(j.a)({},e.target.name,e.target.value)))}function I(){return(I=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,y.login(w);case 4:e.handleSignUpOrLogin(),S.push("/"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),c(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(b.a,{textAlign:"center",style:{height:"100vh"},verticalAlign:"middle",children:Object(p.jsxs)(b.a.Column,{style:{maxWidth:450},children:[Object(p.jsxs)(O.a,{as:"h2",textAlign:"center",children:[Object(p.jsx)(f.a,{src:"https://image.flaticon.com/icons/png/512/3790/3790152.png"})," Log In"]}),Object(p.jsx)(x.a,{autoComplete:"off",onSubmit:function(e){return I.apply(this,arguments)},children:Object(p.jsxs)(g.a,{stacked:!0,children:[Object(p.jsx)(x.a.Input,{name:"username",placeholder:"username",value:w.username,onChange:F,required:!0}),Object(p.jsx)(x.a.Input,{name:"password",type:"password",placeholder:"password",value:w.password,onChange:F,required:!0}),Object(p.jsx)(m.a,{color:"teal",fluid:!0,size:"large",type:"submit",className:"btn",children:"Login"})]})}),Object(p.jsxs)(T.a,{children:["New to us? ",Object(p.jsx)(C.b,{to:"/signup",children:"Sign Up"})]}),a?Object(p.jsx)(h,{error:a}):null]})})})}n(241);var I=n(99),N="/api/art/";function U(e){return console.log(e),fetch("/api/art/save",{method:"POST",body:e,headers:{"Content-type":"application/json",Authorization:"Bearer "+w.getToken()}}).then((function(e){return console.log("res here ----\x3e",e),e.json()}))}function A(){return fetch(N,{headers:{Authorization:"Bearer "+w.getToken()}}).then((function(e){return e.json()}))}n(171);function L(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],c=0;function o(){return(o=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A();case 3:t=e.sent,c=t.artPieces.length,a(t.artPieces),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0,"No art pieces uploaded");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function i(){return(i=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=0;case 1:if(!(t<c)){e.next=6;break}return e.abrupt("return",Object(p.jsx)(I.a,{disabled:!0,hideGrid:!0,loadTimeOffset:0,saveData:n[t].compressedFile}));case 3:t++,e.next=1;break;case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){o.apply(this,arguments)}()}),[]),Object(r.useEffect)((function(){!function(){i.apply(this,arguments)}()}),[]),Object(p.jsx)("div",{id:"gallery",children:Object(p.jsx)(b.a,{columns:3,padded:!0,children:n.slice(0).reverse().map((function(e,t){return Object(p.jsx)(b.a.Column,{children:Object(p.jsx)(I.a,{disabled:!0,hideGrid:!0,loadTimeOffset:0,saveData:e.compressedFile})})}))})})}function D(e){e.user;var t=e.handleLogout;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(O.a,{children:Object(p.jsx)(C.b,{to:"/",children:Object(p.jsx)("h1",{id:"site-title",children:"Graffiti Wall"})})}),Object(p.jsxs)(O.a,{as:"h2",children:[Object(p.jsx)(C.b,{className:"site-action",to:"/create",children:"Make your Mark"}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(p.jsx)(C.b,{className:"site-action",to:"",onClick:t,children:"PTFO"})]})]})}function P(e){e.user,e.handleLogout;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(D,{}),Object(p.jsx)("div",{id:"gallery",children:Object(p.jsx)(L,{})})]})}n(244);var q=n(207),E=n(373);function J(e){var t=Object(r.useState)("#666666"),n=Object(s.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(),j=Object(s.a)(i,2),d=(j[0],j[1],Object(r.useState)(6)),h=Object(s.a)(d,2),O=h[0],f=h[1],x=Object(r.useState)("art"),g=Object(s.a)(x,2),v=(g[0],g[1],Object(r.useRef)()),w=Object(o.g)();function k(){return(k=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(t.hex);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(l.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(n);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.current.getSaveData();case 2:return t=e.sent,e.next=5,U(t);case 5:n=e.sent,console.log(n.compressedFile),w.push("/");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(b.a,{divided:"horizontally",columns:2,children:[Object(p.jsx)(b.a.Column,{children:Object(p.jsx)(I.a,{ref:v,brushColor:a,brushRadius:O,lazyRadius:1})}),Object(p.jsxs)(b.a.Column,{children:[Object(p.jsx)(q.a,{color:a,onChange:function(e){return k.apply(this,arguments)}}),Object(p.jsx)(E.a,{defaultValue:O,min:1,max:100,onChange:function(e,t){return y.apply(this,arguments)},valueLabelDisplay:"on"}),Object(p.jsx)(m.a,{onClick:S,children:"Add to Wall"})]})]})})}var W=n(372);function z(e){e.user,e.handleLogout;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(D,{}),Object(p.jsx)(W.a,{children:Object(p.jsx)(J,{})})]})}var B=function(){var e=Object(r.useState)(y.getUser()),t=Object(s.a)(e,2),n=(t[0],t[1]);function a(){n(y.getUser())}return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(o.d,{children:[Object(p.jsx)(o.b,{exact:!0,path:"/login",children:Object(p.jsx)(F,{handleSignUpOrLogin:a})}),Object(p.jsx)(o.b,{exact:!0,path:"/signup",children:Object(p.jsx)(S,{handleSignUpOrLogin:a})}),y.getUser()?Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(o.d,{children:[Object(p.jsx)(o.b,{exact:!0,path:"/",children:Object(p.jsx)(P,{})}),Object(p.jsx)(o.b,{exact:!0,path:"/create",children:Object(p.jsx)(z,{})})]})}):Object(p.jsx)(o.a,{to:"/login"})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(p.jsx)(C.a,{children:Object(p.jsx)(B,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[351,1,2]]]);
//# sourceMappingURL=main.f67ef0e7.chunk.js.map