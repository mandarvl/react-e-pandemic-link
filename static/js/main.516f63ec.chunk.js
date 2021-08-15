(this["webpackJsonpreact-e-pandemic-link"]=this["webpackJsonpreact-e-pandemic-link"]||[]).push([[0],{28:function(e,t,s){"use strict";s.d(t,"a",(function(){return c}));var n=s(3),i=s(4),c=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";Object(n.a)(this,e),this.id=void 0,this.firstName=void 0,this.lastName=void 0,this.pdpPath=void 0,this.email=void 0,this.mdp=void 0,this.id=t,this.firstName=s,this.lastName=i,this.pdpPath=c,this.email=r,this.mdp=a}return Object(i.a)(e,[{key:"GetFullName",value:function(){return this.firstName+" "+this.lastName}}]),e}()},46:function(e,t,s){"use strict";s.r(t);var n=s(29),i=s.n(n),c=s(37),r=s(3),a=s(4),o=s(6),l=s(5),u=s(8),d=s(1),h=s(0),j=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(r.a)(this,s);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={errorMessage:null},e.loading=!1,e.performLogin=function(){var t=Object(c.a)(i.a.mark((function t(s){var n,c,r,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s.preventDefault(),!e.loading){t.next=3;break}return t.abrupt("return");case 3:if(e.loading=!0,n=s.target,c=n[0],r=n[1],void 0===(a=e.context.users.find((function(e){return e.email===c.value&&e.mdp===r.value})))){t.next=13;break}return t.next=11,e.context.login(a,!0);case 11:t.next=14;break;case 13:e.context.setErrorMessage("L'adresse email ou le mot de passe est incorrect.");case 14:e.loading=!1,r.value="",e.context.setLoadAuthComp(null);case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(a.a)(s,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("form",{onSubmit:function(t){e.performLogin(t)},children:[Object(h.jsx)("h5",{children:"Se connecter"}),Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("input",{type:"email",name:"email",required:!0,placeholder:"Votre email",defaultValue:this.context.users[0].email,className:"input100"}),Object(h.jsx)("span",{className:"focus-input100-1"}),Object(h.jsx)("span",{className:"focus-input100-2"})]}),Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("input",{type:"password",name:"password",required:!0,placeholder:"Votre mot de passe",defaultValue:this.context.users[0].mdp,className:"input100"}),Object(h.jsx)("span",{className:"focus-input100-1"}),Object(h.jsx)("span",{className:"focus-input100-2"})]}),Object(h.jsxs)("div",{className:"form-control two-separation",children:[Object(h.jsxs)("p",{className:"small",children:["Vous n'avez pas encore de compte? ",Object(h.jsx)("a",{href:"/",onClick:function(t){t.preventDefault(),e.props.toggle()},children:Object(h.jsx)("b",{children:"S'inscrire"})})]}),Object(h.jsx)("input",{type:"submit",name:"login",className:"btn-rounded",value:"Se connecter"})]})]})}}]),s}(d.Component);j.contextType=u.a,t.default=j},47:function(e,t,s){"use strict";s.r(t);var n=s(29),i=s.n(n),c=s(37),r=s(3),a=s(4),o=s(6),l=s(5),u=s(1),d=s(28),h=s(8),j=s(0),p=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(r.a)(this,s);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={errorMessage:null},e.loading=!1,e.performSignup=function(){var t=Object(c.a)(i.a.mark((function t(s){var n,c,r,a,o,l,u;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s.preventDefault(),!e.loading){t.next=3;break}return t.abrupt("return");case 3:if(e.loading=!0,n=s.target,c=n[0],r=n[1],a=n[2],o=n[3],l=e.context.users,void 0!==l.find((function(e){return e.email===a.value}))){t.next=20;break}return u=new d.a(e.context.getLastId(l),c.value,r.value,"assets/images/pdp/9.jpg",a.value,o.value),t.next=15,e.context.addUser(u);case 15:return t.next=17,e.context.login(u,!1);case 17:e.context.setSuccessMessage("F\xe9licitation! Vous fa\xeetes partie de la communaut\xe9 de E-Pandemic-Link maintenant."),t.next=21;break;case 20:e.context.setErrorMessage("Cette adresse email est d\xe9j\xe0 utilis\xe9e.");case 21:e.loading=!1,o.value="",e.context.setLoadAuthComp(null);case 24:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(a.a)(s,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("form",{onSubmit:function(t){return e.performSignup(t)},children:[Object(j.jsx)("h5",{children:"S'inscrire"}),null!=this.state.errorMessage?Object(j.jsx)("p",{style:{color:"red",fontSize:"14px"},children:this.state.errorMessage}):null,Object(j.jsxs)("div",{className:"form-control",children:[Object(j.jsx)("input",{type:"text",name:"prenom",required:!0,placeholder:"Votre pr\xe9nom",className:"input100"}),Object(j.jsx)("span",{className:"focus-input100-1"}),Object(j.jsx)("span",{className:"focus-input100-2"})]}),Object(j.jsxs)("div",{className:"form-control",children:[Object(j.jsx)("input",{type:"text",name:"nom",required:!0,placeholder:"Votre nom",className:"input100"}),Object(j.jsx)("span",{className:"focus-input100-1"}),Object(j.jsx)("span",{className:"focus-input100-2"})]}),Object(j.jsxs)("div",{className:"form-control",children:[Object(j.jsx)("input",{type:"email",name:"email",required:!0,placeholder:"Votre email",className:"input100"}),Object(j.jsx)("span",{className:"focus-input100-1"}),Object(j.jsx)("span",{className:"focus-input100-2"})]}),Object(j.jsxs)("div",{className:"form-control",children:[Object(j.jsx)("input",{type:"password",name:"password",required:!0,placeholder:"Votre mot de passe",className:"input100"}),Object(j.jsx)("span",{className:"focus-input100-1"}),Object(j.jsx)("span",{className:"focus-input100-2"})]}),Object(j.jsxs)("div",{className:"form-control two-separation",children:[Object(j.jsxs)("p",{className:"small",children:["Vous avez d\xe9j\xe0 un compte? ",Object(j.jsx)("a",{href:"/",onClick:function(t){t.preventDefault(),e.props.toggle()},children:Object(j.jsx)("b",{children:"Se connecter"})})]}),Object(j.jsx)("input",{type:"submit",name:"signin",className:"btn-rounded",value:"Cr\xe9er mon compte"})]})]})}}]),s}(u.Component);p.contextType=h.a,t.default=p},61:function(e,t,s){},62:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},72:function(e,t,s){},73:function(e,t,s){},74:function(e,t,s){},76:function(e,t,s){},77:function(e,t,s){},78:function(e,t,s){},79:function(e,t,s){},8:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));var n=s(1),i=s.n(n).a.createContext({users:[],posts:[],groups:[],showNewPostModal:!1,newPostStatusHandler:function(e){},postModifHandler:function(e,t){},loggedUser:null,login:function(e,t){},logout:function(){}})},80:function(e,t,s){},81:function(e,t,s){},82:function(e,t,s){},83:function(e,t,s){},84:function(e,t,s){"use strict";s.r(t);var n=s(1),i=s.n(n),c=s(18),r=s.n(c),a=(s(61),s(62),s(3)),o=s(4),l=s(6),u=s(5),d=(s(63),s(64),s(65),s(0));var h=function(e){var t="site-logo";return e.size.length>0&&(t=t.concat(" "+e.size)),e.invert&&(t=t.concat(" invert")),Object(d.jsxs)("span",{className:t,children:[Object(d.jsx)("span",{className:"highlight",children:"E"}),"-Pandemic Link"]})},j=s(8),p=s(23),m=s(10),b=s(26),x=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(a.a)(this,s);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).inputRef=void 0,e}return Object(o.a)(s,[{key:"search",value:function(e){e.preventDefault(),this.props.history.push("/search/"+this.inputRef.value)}},{key:"showLogin",value:function(){}},{key:"render",value:function(){var e=this;return Object(d.jsx)("header",{children:Object(d.jsxs)("div",{className:"wrapper",id:"header-content",children:[Object(d.jsx)(p.b,{exact:!0,to:"/",children:Object(d.jsx)(h,{invert:!1,size:"normal"})}),Object(d.jsxs)("form",{className:"header-search",onSubmit:function(t){return e.search(t)},children:[Object(d.jsx)("input",{type:"text",ref:function(t){return e.inputRef=t},className:"text",placeholder:"Rechercher..."}),Object(d.jsx)("button",{type:"submit",className:"btn-icon",children:Object(d.jsx)(b,{name:"search"})})]}),Object(d.jsx)("nav",{id:"primary-menu",children:this.context.isLogged()?Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(p.b,{exact:!0,to:"/",activeClassName:"active",children:"Actualit\xe9s"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"/logout",onClick:function(t){t.preventDefault(),e.context.logout(),e.props.history.push("/")},children:"Se d\xe9connecter"})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{title:"Poser une question",className:"btn-rounded",onClick:function(){return e.context.newPostStatusHandler(!0)},children:Object(d.jsxs)("div",{children:[Object(d.jsx)(b,{name:"edit fa-fw"}),Object(d.jsx)("span",{children:"Poser une question"})]})})})]}):Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("button",{title:"Se connecter",className:"btn-rounded",onClick:function(){return e.context.setLoadAuthComp("login")},children:Object(d.jsxs)("div",{children:[Object(d.jsx)(b,{name:"sign-in fa-fw"}),Object(d.jsx)("span",{children:"Se connecter"})]})})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{title:"Cr\xe9er un compte",className:"btn-rounded",onClick:function(){return e.context.setLoadAuthComp("signUp")},children:Object(d.jsxs)("div",{children:[Object(d.jsx)(b,{name:"user-plus fa-fw"}),Object(d.jsx)("span",{children:"Cr\xe9er un compte"})]})})})]})})]})})}}]),s}(n.Component);x.contextType=j.a;var v=Object(m.f)(x),f=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,u=arguments.length>8&&void 0!==arguments[8]?arguments[8]:0;Object(a.a)(this,e),this.id=void 0,this.imagePath=void 0,this.authorId=void 0,this.date=void 0,this.title=void 0,this.description=void 0,this.groupId=void 0,this.likes=void 0,this.dislikes=void 0,this.id=t,this.imagePath=s,this.authorId=n,this.date=i,this.title=c,this.description=r,this.groupId=o,this.likes=l,this.dislikes=u},O=(s(72),s(26)),g=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(a.a)(this,s);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).groupSelect=void 0,e.titleInput=void 0,e.descInput=void 0,e}return Object(o.a)(s,[{key:"createPost",value:function(){var e=this.context.getLastId(this.context.posts),t=new f(e,"",this.context.loggedUser.id,"A l'instant",this.titleInput.value,this.descInput.value,Number(this.groupSelect.value),0,0);this.context.addPost(t),this.context.newPostStatusHandler(!1),this.context.setSuccessMessage("Votre question a \xe9t\xe9 publi\xe9e."),this.groupSelect.value=this.groupSelect.querySelector("option:first-child").value,this.titleInput.value="",this.descInput.value=""}},{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{hidden:!this.context.showNewPostModal,className:"modal",children:Object(d.jsxs)("div",{className:"modal-content animation-zoom-in container",children:[Object(d.jsxs)("div",{className:"modal-header",children:[Object(d.jsx)("h5",{className:"text-center modal-title",children:"Poser une question"}),Object(d.jsx)(O,{className:"close red-hover",name:"times",onClick:function(){e.context.newPostStatusHandler(!1)}})]}),Object(d.jsx)("div",{className:"modal-body small-margin-y",children:Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.createPost()},children:[Object(d.jsxs)("div",{className:"user-header disabled",children:[Object(d.jsx)("div",{className:"pdp-container",children:Object(d.jsx)("img",{src:"/react-e-pandemic-link/"+this.context.loggedUser.pdpPath,alt:"Pdp"})}),Object(d.jsxs)("div",{className:"side-info inline-flex",children:[Object(d.jsx)("span",{className:"name",children:this.context.loggedUser.GetFullName()}),Object(d.jsx)(O,{name:"caret-right"}),Object(d.jsx)("div",{className:"custom-select",children:Object(d.jsx)("select",{name:"group",required:!0,ref:function(t){return e.groupSelect=t},children:this.context.groups.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.name},e.id)}))})})]})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("input",{type:"text",required:!0,name:"titre",ref:function(t){return e.titleInput=t},className:"input100",placeholder:"Quelle est votre question ?"}),Object(d.jsx)("span",{className:"focus-input100-1"}),Object(d.jsx)("span",{className:"focus-input100-2"})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("textarea",{className:"input100",name:"description",ref:function(t){return e.descInput=t},placeholder:"Donner plus de d\xe9tails concernant votre question..."}),Object(d.jsx)("span",{className:"focus-input100-1"}),Object(d.jsx)("span",{className:"focus-input100-2"})]}),Object(d.jsxs)("div",{className:"form-control text-right",children:[Object(d.jsx)("button",{className:"btn-transparent",type:"reset",onClick:function(){e.context.newPostStatusHandler(!1)},children:"Annuler"}),Object(d.jsx)("input",{type:"submit",className:"btn-rounded",value:"Publier maintenant"})]})]})})]})})}}]),s}(n.Component);g.contextType=j.a;var N=g,y=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";Object(a.a)(this,e),this.id=void 0,this.name=void 0,this.description=void 0,this.imagePath=void 0,this.id=t,this.name=s,this.description=n,this.imagePath=i},k=s(28),C=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;Object(a.a)(this,e),this.id=void 0,this.content=void 0,this.date=void 0,this.authorId=void 0,this.postId=void 0,this.id=t,this.content=s,this.date=n,this.authorId=i,this.postId=c},w=function e(){Object(a.a)(this,e)};w.users=[new k.a(1,"Octavia","Blake","assets/images/pdp/1.jpg","octaviablake@gmail.com","motdepasse"),new k.a(2,"Clarke","Gryffin","assets/images/pdp/2.jpg","clarke@gmail.com","wanheda"),new k.a(3,"Bellamy","Blake","assets/images/pdp/3.jpg","bellamy@gmail.com","trikru1234")],w.posts=[new f(1,"assets/images/1.jpg",1,"5h","Comment se transmet le coronavirus ?","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",1,5,1),new f(2,"assets/images/3.jpg",2,"12h","O\xf9 dois-je me rendre pour me faire vacciner ?","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",2,8,1),new f(3,"assets/images/4.jpg",1,"5h","Que faire face aux premiers signes ?","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",1,5,4)],w.groups=[new y(1,"Sant\xe9 et bien-\xeatre","Lorem ipsum dolor sit amet, consectetur adipiscing elit","assets/images/post/1.jpg"),new y(2,"Recherches sur les vaccins","Lorem ipsum dolor sit amet, consectetur adipiscing elit","assets/images/post/2.jpg"),new y(3,"Nouvelles sur le Coronavirus","Lorem ipsum dolor sit amet, consectetur adipiscing elit","assets/images/post/3.jpg")],w.comments=[new C(1,"Lorem ipsum dolor sit amet, consectetur adipiscing elit","30m",1,1),new C(2,"Lorem ipsum dolor sit amet, consectetur adipiscing elit","1h",2,2),new C(3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit","20m",2,1),new C(4,"Lorem ipsum dolor sit amet, consectetur adipiscing elit","2h",3,3),new C(5,"Lorem ipsum dolor sit amet, consectetur adipiscing elit","30m",1,3),new C(6,"Lorem ipsum dolor sit amet, consectetur adipiscing elit","25m",1,2),new C(7,"Lorem ipsum dolor sit amet, consectetur adipiscing elit","55m",3,1),new C(8,"Lorem ipsum dolor sit amet, consectetur adipiscing elit","55m",3,2)];s(73);var P=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"error-container",children:[Object(d.jsx)("h1",{className:"error-name",children:"Erreur 404"}),Object(d.jsx)("p",{children:"La page que vous essayer d'atteindre est introuvable."})]})}}]),s}(n.Component);P.contextType=j.a;var S=P,L=i.a.createRef();function I(){var e=L.current;e&&e.showLoader()}function M(){var e=L.current;e&&e.hideLoader()}var A=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(a.a)(this,s);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={isLoading:!0},e}return Object(o.a)(s,[{key:"showLoader",value:function(){console.log("show"),this.setState({isLoading:!0})}},{key:"hideLoader",value:function(){console.log("hide"),this.setState({isLoading:!1})}},{key:"render",value:function(){return Object(d.jsx)("div",{className:"loader",hidden:!this.state.isLoading})}}]),s}(i.a.Component),D=(s(74),s(46)),q=s(47),U=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(a.a)(this,s),(n=t.call(this,e)).state={loginSelected:!0},I(),n}return Object(o.a)(s,[{key:"toggleActionHandler",value:function(){this.setState({loginSelected:!this.state.loginSelected})}},{key:"componentDidMount",value:function(){var e;null===(e=document.querySelector("header"))||void 0===e||e.classList.add("hidden"),M()}},{key:"componentWillUnmount",value:function(){var e;null===(e=document.querySelector("header"))||void 0===e||e.classList.remove("hidden")}},{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{className:"full-bg",children:Object(d.jsxs)("div",{className:"auth-container",children:[Object(d.jsx)("div",{className:"illustration"}),Object(d.jsxs)("div",{className:"form-container",children:[Object(d.jsxs)("div",{className:"auth-header",children:[Object(d.jsxs)("p",{children:[Object(d.jsx)(h,{invert:!0,size:"large"})," ",Object(d.jsx)("br",{})," Par RAVALISON Manda Jerisoa IMTICIA5"]}),Object(d.jsx)("p",{className:"description",children:"Bienvenue sur E-Pandemic Link, un lieu pour rester connect\xe9 et \xeatre en bonne sant\xe9 durant cette pand\xe9mie."})]}),this.state.loginSelected?Object(d.jsx)(D.default,{toggle:function(){return e.toggleActionHandler()}}):Object(d.jsx)(q.default,{toggle:function(){return e.toggleActionHandler()}})]})]})})}}]),s}(n.Component),V=(s(76),s(77),s(78),function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=this.context.getUserById(this.props.currentComment.authorId);return Object(d.jsxs)("div",{className:"comment",children:[Object(d.jsxs)("div",{className:"user-header",children:[Object(d.jsx)("div",{className:"pdp-container small",children:Object(d.jsx)("img",{className:"object-fit-cover",src:"/react-e-pandemic-link/"+e.pdpPath,alt:"Pdp"})}),Object(d.jsxs)("div",{className:"side-info",children:[Object(d.jsx)("p",{className:"name",children:e.GetFullName()}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{className:"group-name",children:this.props.post.authorId===this.props.currentComment.authorId?"Auteur":"Membre"}),Object(d.jsx)("span",{className:"date",children:this.props.currentComment.date})]})]})]}),Object(d.jsx)("p",{children:this.props.currentComment.content})]})}}]),s}(n.Component));V.contextType=j.a;var z=V,T=(s(79),function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{ref:function(t){return e.props.setContainer(t)},className:this.props.show?"comments":"comments closed",children:Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)("h5",{children:"R\xe9ponses"}),Object(d.jsxs)("div",{className:"viewport",children:[this.props.comments.map((function(t){return Object(d.jsx)(z,{post:e.props.post,currentComment:t},t.id)})),0===this.props.comments.length?Object(d.jsx)("p",{className:"small-margin-y",children:Object(d.jsx)("i",{children:"Aucune r\xe9ponse pour l'instant."})}):Object(d.jsx)("br",{}),this.context.isLogged()?Object(d.jsxs)("form",{id:"form-"+this.props.post.id,onSubmit:this.createComment.bind(this),children:[Object(d.jsx)("p",{children:"Aidez cette personne en r\xe9pondant \xe0 sa question"}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("textarea",{className:"input100",name:"answer",required:!0,placeholder:"Entrer votre r\xe9ponse..."}),Object(d.jsx)("span",{className:"focus-input100-1"}),Object(d.jsx)("span",{className:"focus-input100-2"})]}),Object(d.jsx)("div",{className:"form-control",children:Object(d.jsx)("input",{type:"submit",value:"Envoyer"})})]}):Object(d.jsxs)("p",{children:["Vous devez vous ",Object(d.jsx)("a",{href:"/",onClick:function(t){t.preventDefault(),e.context.setLoadAuthComp("login")},children:Object(d.jsx)("span",{className:"highlight",children:"connecter"})})," ou ",Object(d.jsx)("a",{href:"/",onClick:function(t){t.preventDefault(),e.context.setLoadAuthComp("signUp")},children:Object(d.jsx)("span",{className:"highlight",children:"cr\xe9er un compte"})})," pour donner une r\xe9ponse"]})]})]})})}},{key:"createComment",value:function(e){e.preventDefault(),console.log(e);var t=e.target[0],s=new C(this.context.getLastId(this.context.comments),t.value,"1m",this.context.loggedUser.id,this.props.post.id);this.context.addComment(s),t.value=""}}]),s}(n.Component));T.contextType=j.a;var B=T,H=s(26),E=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(a.a)(this,s);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).isLiked=!1,e.isDisliked=!1,e.state={isCommentsClosed:!e.props.maximize},e.commentsContainer=void 0,e.setCommentsContainer=function(t){e.commentsContainer=t},e}return Object(o.a)(s,[{key:"performLike",value:function(){this.isLiked=!this.isLiked,this.isLiked?(this.props.currentPost.likes++,this.isDisliked&&(this.props.currentPost.dislikes--,this.isDisliked=!1)):this.props.currentPost.likes--,this.context.postModifHandler(this.props.currentPost.id,this.props.currentPost)}},{key:"performDislike",value:function(){this.isDisliked=!this.isDisliked,this.isDisliked?(this.props.currentPost.dislikes++,this.isLiked&&(this.props.currentPost.likes--,this.isLiked=!1)):this.props.currentPost.dislikes--,this.context.postModifHandler(this.props.currentPost.id,this.props.currentPost)}},{key:"toggleComments",value:function(e){if(!this.props.fromView){e.preventDefault();var t=e.target;"a"!==t.nodeName.toLowerCase()&&(t=t.parentNode),t.classList.toggle("active"),this.setState({isCommentsClosed:!this.state.isCommentsClosed})}}},{key:"componentDidUpdate",value:function(){if(void 0!==this.commentsContainer&&!this.props.fromView){var e=this.commentsContainer,t=e.querySelector(".content");e.querySelector(".viewport").setAttribute("style","max-height: 500px"),e.style.height=t.clientHeight+20+"px"}}},{key:"render",value:function(){var e=this,t=this.context.getUserById(this.props.currentPost.authorId),s=this.context.getCommentsByPostId(this.props.currentPost.id),n=this.props.currentPost.description;return this.state.isCommentsClosed&&n.length>100&&(n=n.substring(0,100).trimEnd().concat("...")),Object(d.jsxs)("div",{className:"post",children:[Object(d.jsxs)("div",{className:"user-header",children:[Object(d.jsx)("div",{className:"pdp-container",children:Object(d.jsx)("img",{className:"object-fit-cover",src:"/react-e-pandemic-link/"+t.pdpPath,alt:"Pdp"})}),Object(d.jsxs)("div",{className:"side-info",children:[Object(d.jsx)("p",{className:"name",children:t.GetFullName()}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{className:"group-name",children:this.context.getGroupById(this.props.currentPost.groupId).name}),Object(d.jsx)("span",{className:"date",children:this.props.currentPost.date})]})]})]}),Object(d.jsxs)("div",{className:"post-content",children:[Object(d.jsx)("h5",{className:"post-title",children:Object(d.jsx)(p.b,{to:"/post/"+this.props.currentPost.id,children:this.props.currentPost.title})}),Object(d.jsx)("p",{children:n})]}),Object(d.jsx)("div",{className:"post-footer",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsxs)("a",{onClick:function(t){t.preventDefault(),e.performLike()},href:"#",className:this.isLiked?"active":"",children:[Object(d.jsx)(H,{name:"thumbs-o-up"})," ",Object(d.jsx)("span",{className:"value",children:this.props.currentPost.likes})]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("a",{onClick:function(t){t.preventDefault(),e.performDislike()},href:"#",className:this.isDisliked?"active":"",children:[Object(d.jsx)(H,{name:"thumbs-o-down"})," ",Object(d.jsx)("span",{className:"value",children:this.props.currentPost.dislikes})]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("a",{onClick:function(t){return e.toggleComments(t)},href:"#form-"+this.props.currentPost.id,children:[Object(d.jsx)(H,{name:"comment-o"})," ",Object(d.jsx)("span",{className:"value",children:s.length})]})})]})}),Object(d.jsx)(B,{setContainer:function(t){return e.setCommentsContainer(t)},comments:s,post:this.props.currentPost,show:!this.state.isCommentsClosed})]})}}]),s}(n.Component);E.contextType=j.a;var G=E,F=(s(80),function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(d.jsxs)("a",{href:"/",className:"group-item",children:[Object(d.jsx)("div",{className:"small-img-container",children:Object(d.jsx)("img",{className:"object-fit-cover",src:"/react-e-pandemic-link/"+this.props.currentGroup.imagePath,alt:"Groupe"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:"name",children:this.props.currentGroup.name}),this.props.showDescription?Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"}):null]})]})}}]),s}(n.Component)),R=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"right-side",children:[Object(d.jsx)("h5",{className:"panel-title",children:"Sugg\xe9r\xe9es pour vous"}),this.context.groups.map((function(e){return Object(d.jsx)(F,{currentGroup:e,showDescription:!0},e.id)}))]})}}]),s}(n.Component);R.contextType=j.a;var J=R,Q=s(26),K=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(a.a)(this,s),n=t.call(this,e),I(),n}return Object(o.a)(s,[{key:"componentDidMount",value:function(){setTimeout((function(){return M()}),1e3)}},{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{className:"feed",children:Object(d.jsxs)("div",{className:"wrapper flex-container",children:[Object(d.jsx)("div",{className:"col-25 flex-item sticky",children:Object(d.jsxs)("div",{className:"panel transparent group-sidebar",children:[Object(d.jsx)("h5",{className:"panel-title",children:"Vos groupes"}),Object(d.jsxs)("a",{href:"/",className:"group-item btn-semi-transparent",children:[Object(d.jsx)("div",{className:"small-img-container",children:Object(d.jsx)(Q,{name:"plus"})}),Object(d.jsx)("div",{children:Object(d.jsx)("span",{children:"Cr\xe9er une groupe"})})]}),this.context.groups.map((function(e){return Object(d.jsx)(F,{currentGroup:e,showDescription:!1},e.id)})),Object(d.jsxs)("a",{href:"/",className:"group-item",children:[Object(d.jsx)("div",{className:"small-img-container",children:Object(d.jsx)(Q,{name:"group"})}),Object(d.jsx)("div",{children:Object(d.jsx)("span",{children:"Voir plus de groupes"})})]})]})}),Object(d.jsx)("div",{className:"flex-item",children:Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"panel",children:[Object(d.jsxs)("div",{className:"user-header disabled",children:[Object(d.jsx)("div",{className:"pdp-container small",children:Object(d.jsx)("img",{src:"/react-e-pandemic-link/"+this.context.loggedUser.pdpPath,alt:"Pdp"})}),Object(d.jsx)("span",{className:"side-info name",children:this.context.loggedUser.GetFullName()})]}),Object(d.jsx)("h4",{className:"grey editable",onClick:function(){e.context.newPostStatusHandler(!0)},children:"Quelle est votre question?"})]}),this.context.posts.slice(0).reverse().map((function(e){return Object(d.jsx)("div",{className:"panel",children:Object(d.jsx)(G,{fromView:!1,currentPost:e,maximize:!1})},e.id)}))]})}),Object(d.jsx)("div",{className:"col-25 flex-item",children:Object(d.jsx)("div",{className:"panel",children:Object(d.jsx)(J,{})})})]})})}}]),s}(n.Component);K.contextType=j.a;var W=K,X=(s(81),function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=Object(d.jsx)(U,{});return document.getElementsByTagName("html")[0].classList.remove("auth"),this.context.isLogged()&&(e=Object(d.jsx)(W,{})),Object(d.jsx)("div",{className:"Home",children:e})}}]),s}(n.Component));X.contextType=j.a;var Y=X,Z=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(a.a)(this,s);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={selectedPost:new f},e}return Object(o.a)(s,[{key:"loadSelectedPost",value:function(){var e=Number(this.props.match.params.id);this.setState({selectedPost:this.context.getPostById(e)})}},{key:"componentDidMount",value:function(){this.loadSelectedPost()}},{key:"componentDidUpdate",value:function(e){e.location!==this.props.location&&this.loadSelectedPost()}},{key:"render",value:function(){var e=this;return 0===this.state.selectedPost.id||void 0===this.state.selectedPost?Object(d.jsx)("div",{}):Object(d.jsx)("div",{className:"bg-white",children:Object(d.jsxs)("div",{className:"full-padding wrapper flex-container",children:[Object(d.jsx)("div",{className:"flex-item",children:Object(d.jsx)(G,{maximize:!0,fromView:!0,currentPost:this.state.selectedPost})}),Object(d.jsx)("div",{className:"col-25 flex-item",children:Object(d.jsxs)("div",{className:"right-side sticky",children:[Object(d.jsx)("h5",{className:"panel-title",children:"Questions similaires"}),this.context.posts.filter((function(t){return t.id!==e.state.selectedPost.id})).map((function(e){return Object(d.jsx)("div",{children:Object(d.jsx)(p.b,{to:"/post/"+e.id,children:e.title})},e.id)}))]})})]})})}}]),s}(n.Component);Z.contextType=j.a;var $=Z,_=(s(82),function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(a.a)(this,s);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={keyword:null},e}return Object(o.a)(s,[{key:"loadSearchKeyword",value:function(){this.setState({keyword:this.props.match.params.keyword.toString()})}},{key:"componentDidUpdate",value:function(e){e.location!==this.props.location&&this.loadSearchKeyword()}},{key:"componentDidMount",value:function(){this.loadSearchKeyword()}},{key:"render",value:function(){var e=this,t=this.context.posts.filter((function(t){return t.title.toLowerCase().includes(e.state.keyword)}));return Object(d.jsx)("div",{className:"bg-white",id:"search",children:Object(d.jsxs)("div",{className:"wrapper flex-container",children:[Object(d.jsx)("div",{className:"flex-item flex-grow",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{className:"text-lead",children:"R\xe9sultat de votre recherche"}),t.length>0?t.map((function(e){return Object(d.jsx)("div",{className:"list-result",children:Object(d.jsx)(G,{fromView:!1,currentPost:e,maximize:!1})},e.id)})):Object(d.jsx)("p",{children:"Aucune question ne correspond \xe0 votre recherche"})]})}),Object(d.jsx)("div",{className:"flex-item col-25",children:Object(d.jsx)(J,{})})]})})}}]),s}(n.Component));_.contextType=j.a;var ee=_,te=(s(83),s(26)),se=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(d.jsx)("footer",{children:Object(d.jsxs)("p",{children:[Object(d.jsx)(te,{name:"copyright"})," E-Pandemic Link | Ravalison Manda Jerisoa IMTICIA5"]})})}}]),s}(n.Component),ne=s(106),ie=s(107),ce=s(26),re=i.a.lazy((function(){return Promise.resolve().then(s.bind(null,46))})),ae=i.a.lazy((function(){return Promise.resolve().then(s.bind(null,47))})),oe=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(a.a)(this,s),(n=t.call(this,e)).state={posts:w.posts,comments:w.comments,users:w.users,groups:w.groups,addPost:function(e){var t=n.state.posts.slice(0);t.push(e),n.setState({posts:t})},addComment:function(e){var t=n.state.comments.slice(0);t.push(e),n.setState({comments:t})},addUser:function(e){var t=n.state.users.slice(0);t.push(e),n.setState({users:t})},getUserById:function(e){return this.users.find((function(t){return t.id===e}))},getGroupById:function(e){return this.groups.find((function(t){return t.id===e}))},getPostById:function(e){return this.posts.find((function(t){return t.id===e}))},getPostsByUserId:function(e){return this.posts.filter((function(t){return t.authorId===e}))},getCommentsByPostId:function(e){return this.comments.filter((function(t){return t.postId===e}))},getLastId:function(e){return e[e.length-1].id+1},postModifHandler:function(e,t){var s=n.state.posts,i=s.findIndex((function(t){return t.id===e}));s[i]=t,n.setState({posts:s})},newPostStatusHandler:function(e){n.setState({showNewPostModal:e})},showNewPostModal:!1,loadAuthComp:null,setLoadAuthComp:function(e){n.setState({loadAuthComp:e})},loggedUser:null,isLogged:function(){return null!==n.state.loggedUser},login:function(e,t){n.setState({loggedUser:e},(function(){t&&n.state.setSuccessMessage("Bienvenu(e) "+e.GetFullName())}))},logout:function(){n.setState({loggedUser:null})},errorMessage:null,setErrorMessage:function(e){n.setState({errorMessage:e})},successMessage:null,setSuccessMessage:function(e){n.setState({successMessage:e})}},I(),n}return Object(o.a)(s,[{key:"componentDidMount",value:function(){M()}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)(j.a.Provider,{value:this.state,children:[Object(d.jsx)(p.a,{children:Object(d.jsxs)("div",{id:"content",children:[Object(d.jsx)(v,{}),Object(d.jsxs)(m.c,{children:[Object(d.jsx)(m.a,{path:"/",exact:!0,children:Object(d.jsx)(Y,{})}),Object(d.jsx)(m.a,{path:"/login",children:Object(d.jsx)(Y,{})}),Object(d.jsx)(m.a,{path:"/post/:id",component:$}),Object(d.jsx)(m.a,{path:"/search/:keyword",component:ee}),Object(d.jsx)(m.a,{component:S})]})]})}),this.state.showNewPostModal?Object(d.jsx)(N,{}):null,null!==this.state.loadAuthComp?Object(d.jsx)("div",{className:"modal",children:Object(d.jsxs)("div",{className:"modal-content animation-zoom-in container",children:[Object(d.jsxs)("div",{className:"modal-header",children:[Object(d.jsx)("h5",{className:"text-center modal-title",children:"Authentification"}),Object(d.jsx)(ce,{className:"close red-hover",name:"times",onClick:function(){e.state.setLoadAuthComp(null)}})]}),Object(d.jsx)("div",{className:"modal-body small-margin-y",children:Object(d.jsx)(n.Suspense,{fallback:Object(d.jsx)("div",{children:"Chargement..."}),children:"login"===this.state.loadAuthComp?Object(d.jsx)(re,{toggle:function(){return e.state.setLoadAuthComp("signUp")}}):Object(d.jsx)(ae,{toggle:function(){return e.state.setLoadAuthComp("login")}})})})]})}):null]}),Object(d.jsx)(se,{})]}),Object(d.jsx)(A,{ref:L}),null!=this.state.successMessage?Object(d.jsx)(ie.a,{open:!0,autoHideDuration:6e3,anchorOrigin:{vertical:"bottom",horizontal:"left"},onClose:function(){return e.state.setSuccessMessage(null)},children:Object(d.jsx)(ne.a,{variant:"filled",severity:"success",children:this.state.successMessage})}):null,null!=this.state.errorMessage?Object(d.jsx)(ie.a,{open:!0,autoHideDuration:6e3,anchorOrigin:{vertical:"bottom",horizontal:"left"},onClose:function(){return e.state.setErrorMessage(null)},children:Object(d.jsx)(ne.a,{variant:"filled",severity:"error",children:this.state.errorMessage})}):null]})}}]),s}(n.Component),le=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,109)).then((function(t){var s=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),n(e),i(e),c(e),r(e)}))};r.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(oe,{})}),document.getElementById("root")),le()}},[[84,1,2]]]);
//# sourceMappingURL=main.516f63ec.chunk.js.map