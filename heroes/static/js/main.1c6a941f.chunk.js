(this.webpackJsonphero_admin_panel=this.webpackJsonphero_admin_panel||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(4),s=n.n(a),o=n(3),i=n(2),l=n(23),u=n(17),b=n.n(u),d=n(18),j=function(){return{request:Object(r.useCallback)(function(){var e=Object(d.a)(b.a.mark((function e(t){var n,r,c,a,s,o=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:"GET",r=o.length>2&&void 0!==o[2]?o[2]:null,c=o.length>3&&void 0!==o[3]?o[3]:{"Content-Type":"application/json"},e.prev=3,e.next=6,fetch(t,{method:n,body:r,headers:c});case 6:if((a=e.sent).ok){e.next=9;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(a.status));case 9:return e.next=11,a.json();case 11:return s=e.sent,e.abrupt("return",s);case 15:throw e.prev=15,e.t0=e.catch(3),e.t0;case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}(),[])}},h=n(40),O=n(42),f=n(19),m=function(){return{type:"HEROES_FETCHING"}},p=function(e){return{type:"HEROES_FETCHED",payload:e}},E=function(){return{type:"HEROES_FETCHING_ERROR"}},g=function(){return{type:"FILTERS_FETCHING"}},x=function(e){return{type:"FILTERS_FETCHED",payload:e}},v=function(){return{type:"FILTERS_FETCHING_ERROR"}},N=n(1),_=function(e){var t,n=e.name,r=e.description,c=e.element,a=e.onDelete;switch(c){case"fire":t="bg-danger bg-gradient";break;case"water":t="bg-primary bg-gradient";break;case"wind":t="bg-success bg-gradient";break;case"earth":t="bg-warning bg-gradient";break;default:t="bg-secondary bg-gradient"}return Object(N.jsxs)("li",{className:"card flex-row mb-4 shadow-lg text-white ".concat(t),children:[Object(N.jsx)("img",{src:"https://www.stpaulsteinbach.org/wp-content/uploads/2014/09/unkown-hero.jpg",className:"img-fluid w-25 d-inline",alt:"unkown hero",style:{objectFit:"cover"}}),Object(N.jsxs)("div",{className:"card-body",children:[Object(N.jsx)("h3",{className:"card-title",children:n}),Object(N.jsx)("p",{className:"card-text",children:r})]}),Object(N.jsx)("span",{onClick:a,className:"position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light",children:Object(N.jsx)("button",{type:"button",className:"btn-close btn-close","aria-label":"Close"})})]})},y=function(){return Object(N.jsx)("div",{className:"spinner-border mx-auto mt-5",role:"status",children:Object(N.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},R=(n(34),function(){var e=Object(f.a)((function(e){return e.filters.activeFilter}),(function(e){return e.heroes.heroes}),(function(e,t){return"all"===e?t:t.filter((function(t){return t.element===e}))})),t=Object(o.c)(e),n=Object(o.c)((function(e){return e.heroes.heroesLoadingStatus})),c=Object(o.b)(),a=j().request;Object(r.useEffect)((function(){c(function(e){return function(t){t(m()),e("http://localhost:3001/heroes").then((function(e){return t(p(e))})).catch((function(){return t(E())}))}}(a))}),[c,a]);var s=Object(r.useCallback)((function(e){a("http://localhost:3001/heroes/".concat(e),"DELETE").then((function(e){return console.log(e,"Deleted")})).then((function(){return c(function(e){return{type:"HERO_DELETED",payload:e}}(e))})).catch((function(e){return console.log(e)}))}),[c,a]);if("loading"===n)return Object(N.jsx)(y,{});if("error"===n)return Object(N.jsx)("h5",{className:"text-center mt-5",children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"});var u,b=0===(u=t).lenght?Object(N.jsx)(h.a,{timeout:0,classNames:"hero",children:Object(N.jsx)("h5",{className:"text-center mt-5",children:"\u0413\u0435\u0440\u043e\u0435\u0432 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442"})}):u.map((function(e){var t=e.id,n=Object(l.a)(e,["id"]);return Object(N.jsx)(h.a,{timeout:500,classNames:"hero",children:Object(N.jsx)(_,Object(i.a)(Object(i.a)({},n),{},{onDelete:function(){return s(t)}}))},t)}));return Object(N.jsx)(O.a,{component:"ul",children:b})}),S=n(13),T=n(41),w=function(){var e=Object(r.useState)(""),t=Object(S.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(S.a)(a,2),i=s[0],l=s[1],u=Object(r.useState)(""),b=Object(S.a)(u,2),d=b[0],h=b[1],O=Object(o.c)((function(e){return e.filters})),f=O.filters,m=O.filtersLoadingStatus,p=Object(o.b)(),E=j().request;return Object(N.jsxs)("form",{className:"border p-4 shadow-lg rounded",onSubmit:function(e){e.preventDefault();var t,r={id:Object(T.a)(),name:n,description:i,element:d};E("http://localhost:3001/heroes","POST",JSON.stringify(r)).then((function(e){return console.log(e,"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u0430")})).then(p((t=r,{type:"HERO_CREATED",payload:t}))).catch((function(e){return console.log(e)})),c(""),l(""),h("")},children:[Object(N.jsxs)("div",{className:"mb-3",children:[Object(N.jsx)("label",{htmlFor:"name",className:"form-label fs-4",children:"\u0418\u043c\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u0433\u0435\u0440\u043e\u044f"}),Object(N.jsx)("input",{required:!0,type:"text",name:"name",className:"form-control",id:"name",placeholder:"\u041a\u0430\u043a \u043c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442?",value:n,onChange:function(e){return c(e.target.value)}})]}),Object(N.jsxs)("div",{className:"mb-3",children:[Object(N.jsx)("label",{htmlFor:"text",className:"form-label fs-4",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(N.jsx)("textarea",{required:!0,name:"text",className:"form-control",id:"text",placeholder:"\u0427\u0442\u043e \u044f \u0443\u043c\u0435\u044e?",style:{height:"130px"},value:i,onChange:function(e){return l(e.target.value)}})]}),Object(N.jsxs)("div",{className:"mb-3",children:[Object(N.jsx)("label",{htmlFor:"element",className:"form-label",children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0433\u0435\u0440\u043e\u044f"}),Object(N.jsxs)("select",{required:!0,className:"form-select",id:"element",value:d,onChange:function(e){return h(e.target.value)},children:[Object(N.jsx)("option",{value:"",children:"\u042f \u0432\u043b\u0430\u0434\u0435\u044e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u043c..."}),function(e,t){return"loading"===t?Object(N.jsx)("option",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432"}):"error"===t?Object(N.jsx)("option",{children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}):e&&e.length>0?e.map((function(e){var t=e.name,n=e.label;return"all"===t?null:Object(N.jsx)("option",{value:t,children:n},t)})):null}(f,m)]})]}),Object(N.jsx)("button",{type:"submit",className:"btn btn-primary",children:"C\u043e\u0437\u0434\u0430\u0442\u044c"})]})},C=n(20),F=n.n(C),L=function(){var e=Object(o.c)((function(e){return e.filters})),t=e.filters,n=e.filtersLoadingStatus,c=e.activeFilter,a=Object(o.b)(),s=j().request;if(Object(r.useEffect)((function(){a(function(e){return function(t){t(g()),e("http://localhost:3001/filters").then((function(e){return t(x(e))})).catch((function(){return t(v())}))}}(s))}),[a,s]),"loading"===n)return Object(N.jsx)(y,{});if("error"===n)return Object(N.jsx)("h5",{className:"text-center mt-5",children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"});var i,l=0===(i=t).lenght?Object(N.jsx)("h5",{className:"text-center mt-5",children:"\u0424\u0438\u043b\u044c\u0442\u0440\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b"}):i.map((function(e){var t=e.name,n=e.className,r=e.label,s=F()("btn",n,{active:t===c});return Object(N.jsx)("button",{id:t,className:s,onClick:function(){return a({type:"ACTIVE_FILTER_CHANGED",payload:t})},children:r},t)}));return Object(N.jsx)("div",{className:"card shadow-lg mt-4",children:Object(N.jsxs)("div",{className:"card-body",children:[Object(N.jsx)("p",{className:"card-text",children:"\u041e\u0442\u0444\u0438\u043b\u044c\u0442\u0440\u0443\u0439\u0442\u0435 \u0433\u0435\u0440\u043e\u0435\u0432 \u043f\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c"}),Object(N.jsx)("div",{className:"btn-group",children:l})]})})},H=(n(35),function(){return Object(N.jsx)("main",{className:"app",children:Object(N.jsxs)("div",{className:"content",children:[Object(N.jsx)(R,{}),Object(N.jsxs)("div",{className:"content_interactive",children:[Object(N.jsx)(w,{}),Object(N.jsx)(L,{})]})]})})}),D=n(9),I=n(21),k=n(22),G={heroes:[],heroesLoadingStatus:"idle"},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HEROES_FETCHING":return Object(i.a)(Object(i.a)({},e),{},{heroesLoadingStatus:"loading"});case"HEROES_FETCHED":return Object(i.a)(Object(i.a)({},e),{},{heroes:t.payload,heroesLoadingStatus:"idle"});case"HEROES_FETCHING_ERRROR":return Object(i.a)(Object(i.a)({},e),{},{heroesLoadingStatus:"error"});case"HERO_CREATED":return Object(i.a)(Object(i.a)({},e),{},{heroes:[].concat(Object(k.a)(e.heroes),[t.payload])});case"HERO_DELETED":return Object(i.a)(Object(i.a)({},e),{},{heroes:e.heroes.filter((function(e){return e.id!==t.payload}))});default:return e}},A={filters:[],filtersLoadingStatus:"idle",activeFilter:"all"},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILTERS_FETCHING":return Object(i.a)(Object(i.a)({},e),{},{filtersLoadingStatus:"loading"});case"FILTERS_FETCHED":return Object(i.a)(Object(i.a)({},e),{},{filters:t.payload,filtersLoadingStatus:"idle"});case"FILTERS_FETCHING_ERROR":return Object(i.a)(Object(i.a)({},e),{},{filtersLoadingStatus:"error"});case"ACTIVE_FILTER_CHANGED":return Object(i.a)(Object(i.a)({},e),{},{activeFilter:t.payload});default:return e}},X=Object(D.d)(Object(D.b)({heroes:q,filters:V}),Object(D.c)(Object(D.a)(I.a,(function(){return function(e){return function(t){return e("string"===typeof t?{type:t}:t)}}})),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));n(36);s.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(o.a,{store:X,children:Object(N.jsx)(H,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.1c6a941f.chunk.js.map