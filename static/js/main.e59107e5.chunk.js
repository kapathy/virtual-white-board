(this["webpackJsonpvirtual-white-board"]=this["webpackJsonpvirtual-white-board"]||[]).push([[0],{27:function(e,t,a){e.exports=a.p+"static/media/user.adb77b20.svg"},28:function(e,t,a){e.exports=a.p+"static/media/settings.5735b15d.svg"},32:function(e,t,a){e.exports=a(55)},37:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(24),o=a.n(r),s=(a(37),a(29)),u=a(2),i=a(3),l=a(9),m=a.n(l),p=a(14),d=a(25),f=a(26),h=a(15),b=a.n(h),v=(a(41),a(43),{apiKey:"AIzaSyAGD3by0y8wzxSwcM5HeoJcy-WBWy3W6co",authDomain:"virtual-white-board.firebaseapp.com",databaseURL:"https://virtual-white-board.firebaseio.com",projectId:"virtual-white-board",storageBucket:"virtual-white-board.appspot.com",messagingSenderId:"562326485518",appId:"1:562326485518:web:e4a87a852c7897c9d79a5f",measurementId:"G-CWBQGTRF8M"}),E=new(function(){function e(){Object(d.a)(this,e),b.a.initializeApp(v),this.auth=b.a.auth(),this.db=b.a.firestore()}return Object(f.a)(e,[{key:"signin",value:function(e,t){return this.auth.signInWithEmailAndPassword(e,t)}},{key:"signup",value:function(){var e=Object(p.a)(m.a.mark((function e(t,a,n,c,r){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.auth.createUserWithEmailAndPassword(c,r);case 2:return e.abrupt("return",this.auth.currentUser.updateProfile({displayName:n}));case 3:case"end":return e.stop()}}),e,this)})));return function(t,a,n,c,r){return e.apply(this,arguments)}}()},{key:"signout",value:function(){return this.auth.signOut()}},{key:"getUser",value:function(){return this.auth.currentUser()}},{key:"authChange",value:function(e){return this.auth.onAuthStateChanged(e)}},{key:"addPost",value:function(e,t,a,n){this.db.collection("posts").add({date:e,value:t,user:a,color:n})}}]),e}()),g=c.a.createContext(),N=function(e){var t=e.children,a=Object(n.useState)(null),r=Object(i.a)(a,2),o=r[0],s=r[1];return Object(n.useEffect)((function(){E.authChange(s)}),[]),c.a.createElement(g.Provider,{value:{currentUser:o}},t)},y=a(20),O=a(31);a(44),a(45),a(46);function j(e){var t=e.id,a=e.text,n=e.handleDeletePost,r=e.username,o=e.date,s=e.color;return c.a.createElement("div",{className:"post",style:{backgroundColor:s}},c.a.createElement("p",{className:"message"},a),c.a.createElement("button",{className:"delete",onClick:function(){return n(t)}}," x "),c.a.createElement("div",{className:"postInfo"},c.a.createElement("p",{className:"username"}," @",r),c.a.createElement("p",{className:"date"},o)))}function C(e){var t=e.posts,a=e.handleDeletePost;return c.a.createElement("div",{className:"board"},t.map((function(e,t){return c.a.createElement(j,{key:e.id,id:t,text:e.value,handleDeletePost:a,username:e.user,date:e.date,color:e.color})})))}a(47);var w=a(27),S=a.n(w);function x(e){var t=e.props,a=e.username,r=Object(n.useState)(!1),o=Object(i.a)(r,2),s=o[0],u=o[1];return c.a.createElement("div",null,c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"user",onClick:function(){u(!s)}},a),c.a.createElement("img",{className:"usericon",src:S.a,alt:"User Icon"})),c.a.createElement("div",{className:"signoutContainer"},s?c.a.createElement("button",{className:"signout",onClick:function(){E.signout().then(t.history.push("/")).catch((function(e){alert(e)}))}},"Sign Out"):c.a.createElement("div",null)),c.a.createElement("h1",{className:"name"},"Virtual Whiteboard"))}a(48);var k=a(28),I=a.n(k);var P=function(e){var t=Object(n.useState)("#a3b2a5"),a=Object(i.a)(t,2),r=a[0],o=a[1],s=function(t){o(t),e.setPostColor(t)};return c.a.createElement("div",{className:"dropdown"},c.a.createElement("button",{className:"dropbtn",style:{backgroundColor:r}},c.a.createElement("img",{className:"settingsIcon",src:I.a,alt:"Settings Icon",style:{color:r}})),c.a.createElement("div",{className:"dropdown-content"},c.a.createElement("div",{onClick:function(){s("#c3ccd6")}}),c.a.createElement("div",{onClick:function(){s("#a3b2a5")}}),c.a.createElement("div",{onClick:function(){s("#d9c8d5")}})))};var A=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)(""),u=Object(i.a)(s,2),l=u[0],m=u[1],p=Object(n.useContext)(g).currentUser,d=Object(n.useState)("#a3b2a5"),f=Object(i.a)(d,2),h=f[0],b=f[1];Object(n.useEffect)((function(){E.db.collection("posts").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(O.a)({id:e.id},e.data())}));o(t)}))}),[]);var v=function(e){e.preventDefault(),l&&(!function(e){var t=(new Date).toLocaleString();E.addPost(t,e,p.displayName,h);var a=[].concat(Object(y.a)(r),[{text:e}]);o(a)}(l),m(""))};if(null!==p){var N=p.displayName;return c.a.createElement("div",{className:"App"},c.a.createElement(x,{props:e,username:N}),c.a.createElement("div",{className:"inputContainer"},c.a.createElement("form",{onSubmit:v},c.a.createElement("input",{maxLength:"280",type:"text",className:"input",placeholder:"write your message here...",value:l,onChange:function(e){return m(e.target.value)}}))),c.a.createElement("div",{className:"inputContainer marginFix"},c.a.createElement(P,{setPostColor:function(e){b(e),console.log(e)}}),c.a.createElement("button",{className:"postButton",onClick:v},"post")),c.a.createElement(C,{posts:r,handleDeletePost:function(e){var t=r[e].id;console.log(t),E.db.collection("posts").doc(t).delete().then((function(){console.log("Document successfully deleted!")})).catch((function(e){console.error("Error removing document: ",e)}));var a=Object(y.a)(r);a.splice(e,1),o(a)},username:N,color:h}))}return c.a.createElement("div",{id:"showMe"},"Sign In to use the whiteboard!")},D=(a(49),function(e){var t=e.text,a=Object(n.useState)({content:"",start:0}),r=Object(i.a)(a,2),o=r[0],s=o.content,u=o.start,l=r[1];return Object(n.useEffect)((function(){if(u!==t.length)var e=setTimeout((function(){l({content:s+t[u],start:u+1}),clearTimeout(e)}),100)}),[s]),c.a.createElement("span",{className:"typewriter"},s,c.a.createElement("span",{className:"cursor"},"|"))});var U=function(e){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"homeOptions"},c.a.createElement("h1",{className:"title"},"Virtual Whiteboard"),c.a.createElement("button",{className:"signButton",onClick:function(){e.history.push("./signin")}},"Sing In"),c.a.createElement("button",{className:"signButton",onClick:function(){e.history.push("./signup")}},"Sing Up"),c.a.createElement(D,{text:"A quick and fun way to communicate with your team!"})))};var W=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)(""),u=Object(i.a)(s,2),l=u[0],m=u[1];return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Virtual Whiteboard"),c.a.createElement("form",{className:"signinForm",onSubmit:function(t){t.preventDefault(),E.signin(r,l).then(e.history.push("/whiteboard")).catch((function(e){return alert(e)}))}},c.a.createElement("input",{type:"text",className:"input sign",placeholder:"E-mail",onChange:function(e){return o(e.target.value)},autoComplete:"off"}),c.a.createElement("input",{type:"password",className:"input sign",placeholder:"password",onChange:function(e){return m(e.target.value)},autoComplete:"off"}),c.a.createElement("div",{className:"container"},c.a.createElement("button",{className:"button continue"},"Continue"))))};a(50);var B=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)(""),u=Object(i.a)(s,2),l=u[0],d=u[1],f=Object(n.useState)(""),h=Object(i.a)(f,2),b=h[0],v=h[1],g=Object(n.useState)(""),N=Object(i.a)(g,2),y=N[0],O=N[1],j=Object(n.useState)(""),C=Object(i.a)(j,2),w=C[0],S=C[1];function x(){return(x=Object(p.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{E.signup(r,l,b,y,w),e.history.push("./whiteboard")}catch(a){alert(a.message)}case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Virtual Whiteboard"),c.a.createElement("form",{className:"signupForm",onSubmit:function(e){e.preventDefault(),function(){x.apply(this,arguments)}()}},c.a.createElement("input",{type:"text",className:"input sign",placeholder:"First Name",onChange:function(e){return o(e.target.value)},autoComplete:"off"}),c.a.createElement("input",{type:"text",className:"input sign",placeholder:"Last Name",onChange:function(e){return d(e.target.value)},autoComplete:"off"}),c.a.createElement("input",{type:"text",className:"input sign",placeholder:"Username",onChange:function(e){return v(e.target.value)},autoComplete:"off"}),c.a.createElement("input",{type:"text",className:"input sign",placeholder:"E-mail",onChange:function(e){return O(e.target.value)},autoComplete:"off"}),c.a.createElement("input",{type:"password",className:"input sign",placeholder:"password",onChange:function(e){return S(e.target.value)},autoComplete:"off"}),c.a.createElement("div",{className:"container"},c.a.createElement("button",{className:"button continue"},"Continue"))))};var F=function(){return c.a.createElement(N,null,c.a.createElement(s.a,null,c.a.createElement(u.a,{exact:!0,path:"/",component:U}),c.a.createElement(u.a,{exact:!0,path:"/whiteboard",component:A}),c.a.createElement(u.a,{exact:!0,path:"/signin",component:W}),c.a.createElement(u.a,{exact:!0,path:"/signup",component:B})))};o.a.render(c.a.createElement(F,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.e59107e5.chunk.js.map