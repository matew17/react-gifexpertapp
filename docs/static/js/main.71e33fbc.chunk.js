(this["webpackJsonpgit-expert-app"]=this["webpackJsonpgit-expert-app"]||[]).push([[0],{18:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(8),c=n.n(r),i=n(2),u=n(10),o=n(0);function s(t){var e=t.setCategory,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],s=r[1];return Object(o.jsx)("form",{onSubmit:function(t){t.preventDefault(),c.trim().length>2&&(e((function(t){return[c].concat(Object(u.a)(t))})),s(""))},children:Object(o.jsx)("input",{type:"text",value:c,onChange:function(t){var e;s(null===t||void 0===t||null===(e=t.target)||void 0===e?void 0:e.value)}})})}var d=n(11),l=n(6),j=n.n(l),b=n(9),p=function(){var t=Object(b.a)(j.a.mark((function t(e){var n,a,r,c,i;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=mUm0Qr5WKThOgPL9eEi21FMAbwoni8K6"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return r=t.sent,c=r.data,i=c.map((function(t){var e,n;return{id:null===t||void 0===t?void 0:t.id,title:(null===t||void 0===t?void 0:t.title)||"No hay titulo",url:null===t||void 0===t||null===(e=t.images)||void 0===e||null===(n=e.downsized_medium)||void 0===n?void 0:n.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();n(7);var v=function(t){var e=t.url,n=t.title;return Object(o.jsxs)("div",{className:"card animate__animated animate__bounce",children:[Object(o.jsx)("img",{src:e,alt:n}),Object(o.jsx)("p",{children:n})]})};var m=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){p(t).then((function(t){c({data:t,loading:!1})}))}),[t]),r}(e),r=n.data,c=n.loading;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{children:e}),c&&Object(o.jsx)("p",{className:"animate__animated animate__flash",children:"Cargando"}),Object(o.jsx)("div",{className:"card-grid",children:r&&r.map((function(t){return Object(o.jsx)(v,Object(d.a)({},t),t.id)}))})]})};var f=function(){var t=Object(a.useState)(["Kimetsu no yaiba"]),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:"GifExpertApp"}),Object(o.jsx)(s,{setCategory:r}),Object(o.jsx)("hr",{}),Object(o.jsx)("ul",{children:n.map((function(t){return Object(o.jsx)(m,{category:t},t)}))})]})};c.a.render(Object(o.jsx)(f,{}),document.getElementById("root"))},7:function(t,e,n){}},[[18,1,2]]]);
//# sourceMappingURL=main.71e33fbc.chunk.js.map