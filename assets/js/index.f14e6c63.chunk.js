(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1:function(e,r,t){},12:function(e,r,t){"use strict";var n=t(1);t.n(n).a},13:function(e,r,t){"use strict";t.r(r);var n=t(0),a=t.n(n),u=t(2),o=t(4),c={data:function(){return{query:"",routes:[]}}},i=(t(12),t(5)),s=Object(i.a)(c,function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"app"}},[t("header",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"},{name:"smart-routes",rawName:"v-smart-routes",value:e.routes,expression:"routes"}],attrs:{placeholder:"search or run something...",type:"text"},domProps:{value:e.query},on:{input:function(r){r.target.composing||(e.query=r.target.value)}}}),e._v(" "),e._m(0)]),e._v(" "),t("nav",[e.routes.length?t("ul",e._l(e.routes,function(r){return t("li",{key:r.name+Math.random(),domProps:{innerHTML:e._s(r.title)},on:{click:r.handler}})})):t("div",[e._v("\n      ...\n    ")])]),e._v(" "),t("main",[t("router-view")],1)])},[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("p",[e._v("You can write "),t("b",[e._v("about")]),e._v(", "),t("b",[e._v("search: {query}")]),e._v(", "),t("b",[e._v("user {username}")]),e._v(", "),t("b",[e._v("user {id}")]),e._v(", "),t("b",[e._v("user {username} {id}")]),e._v(" or "),t("b",[e._v("a mail address and the subject")]),e._v(", also "),t("b",[e._v("sw {query}")]),e._v(" will search characters from SWAPI.")])}],!1,null,null,null);s.options.__file="example/App.vue";var m=s.exports;function l(e){return function(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function h(e,r,t,n,a,u,o){try{var c=e[u](o),i=c.value}catch(s){return void t(s)}c.done?r(i):Promise.resolve(i).then(n,a)}function p(e){return function(){var r=this,t=arguments;return new Promise(function(n,a){var u=e.apply(r,t);function o(e){h(u,n,a,o,c,"next",e)}function c(e){h(u,n,a,o,c,"throw",e)}o(void 0)})}}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){v(e,r,t[r])})}return e}function v(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(Array.isArray(e))return e.reduce(function(e,t){var n=t.name,a=t.path,u=t.smart,o=t.children,c=void 0===o?[]:o;return e.push({name:n,path:a,smart:u,children:c,level:r}),c.length&&(e=e.concat(d(c,r+1))),e},[])}function b(e,r){var t=e.match(/(:[0-9a-z_\-]+)/gi);if(!t)return{query:r};var n=t.map(function(e){return e.slice(1).trim()}),a={query:{},params:{}};return Object.keys(r).forEach(function(e){a[n.includes(e)?"params":"query"][e]=r[e]}),a}function w(e,r,t,n,a){return f({},e,{title:r.replace(/\*([^*]+)\*/g,"<mark>$1</mark>"),handler:function(){return t.handler(e,n,a)}})}function y(e,r){return g.apply(this,arguments)}function g(){return(g=p(a.a.mark(function e(r,t){var n,u,o,c,i,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return u=t.$router.options.routes,o=d(u),c=o.filter(function(e){return e.smart}).map(function(e){return{name:e.name,path:e.path,smart:e.smart}}),i=c.map(function(){var e=p(a.a.mark(function e(n){var u,o,c,i,s,m;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(u=n.name,o=n.path,(c=n.smart).matcher){e.next=3;break}throw new Error("Smart routes must have matchers!");case 3:return i=function(e){return t.$router.push(e)},c.handler||(c.handler=i),s=("function"===typeof c.matcher.search?c.matcher.search(t):c.matcher.search).map(function(e){return r.toString().match(e)}).filter(Boolean),e.next=8,Promise.all(s.map(function(){var e=p(a.a.mark(function e(r){var n,s,m,l;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:if(n=r.groups?r.groups:r,s=f({name:u,path:o},b(o,r.groups)),"function"!==typeof c.matcher.routes){e.next=9;break}return e.next=7,c.matcher.routes(n,t);case 7:return m=e.sent,e.abrupt("return",m.map(function(e){return w(e,e.title,c,i,t)}));case 9:return l=c.matcher.title(n,t),e.abrupt("return",w(s,l,c,i,t));case 11:case"end":return e.stop()}},e,this)}));return function(r){return e.apply(this,arguments)}}()));case 8:return m=e.sent,e.abrupt("return",[].concat.apply([],m).filter(Boolean));case 10:case"end":return e.stop()}},e,this)}));return function(r){return e.apply(this,arguments)}}()),e.next=6,Promise.all(i);case 6:return s=e.sent,e.abrupt("return",(n=[]).concat.apply(n,l(s)));case 8:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var _={install:function(e){e.directive("smart-routes",{bind:function(e,r,t){var n=t.data.directives.filter(function(e){return"model"===e.name});if(!n.length)throw new Error("An input with v-smart-routes directive must have v-model.");t.context.$watch(n[0].expression,function(){var e=p(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t,this);case 2:this[r.expression]=e.sent;case 3:case"end":return e.stop()}},e,this)}));return function(r){return e.apply(this,arguments)}}())}})}};function x(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function j(e,r,t,n,a,u,o){try{var c=e[u](o),i=c.value}catch(s){return void t(s)}c.done?r(i):Promise.resolve(i).then(n,a)}u.a.use(o.a),u.a.use(_);var O=new o.a({mode:"hash",routes:[{name:"searchSw",path:"/search-sw",component:function(){return t.e(0).then(t.bind(null,18))},smart:{matcher:{search:[/sw\s(?<query>.*)/],routes:function(){var e,r=(e=a.a.mark(function e(r){var t,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!((t=r.query).length<3)){e.next=3;break}return e.abrupt("return",[]);case 3:return e.next=5,fetch("https://swapi.co/api/people/?search=".concat(encodeURIComponent(t))).then(function(e){return e.json()});case 5:return n=e.sent,e.abrupt("return",n.results.map(function(e){return{name:"character",title:"Go to character *".concat(e.name,"*"),params:{id:+e.url.match(/\/(\d+)\//,"$1")[1]}}}));case 7:case"end":return e.stop()}},e,this)}),function(){var r=this,t=arguments;return new Promise(function(n,a){var u=e.apply(r,t);function o(e){j(u,n,a,o,c,"next",e)}function c(e){j(u,n,a,o,c,"throw",e)}o(void 0)})});return function(e){return r.apply(this,arguments)}}()}}},{name:"character",path:"/character/:id",component:function(){return t.e(4).then(t.bind(null,19))}},{name:"users",path:"/users",component:function(){return t.e(0).then(t.bind(null,18))},smart:{matcher:{search:[/user/],title:function(){return"Go to users"}}},children:[{name:"newUser",path:"new",component:function(){return t.e(0).then(t.bind(null,18))},smart:{matcher:{search:[/user/,/new\suser(\s+(?<name>.*))?/],title:function(e){var r=e.name;return r?"Create user with name *".concat(r,"*"):"Create new user"}}}},{name:"goToUser",path:"/user/:id",component:function(){return t.e(0).then(t.bind(null,18))}},{name:"viewUser",path:"view/:username",component:function(){return t.e(0).then(t.bind(null,18))},smart:{matcher:{search:[/user\s*(?<id>\d+)/,/user\s*(?<username>[^\d\s]*)(\s(?<id>\d+))?/],title:function(e){var r=e.username,t=e.id;return!r&&t?"View user with ID *".concat(t,"*"):r&&t?"View user with username *".concat(r,"* and ID *").concat(t,"*"):r?"View user with username *".concat(r,"*"):"View all users"}},handler:function(e,r){e.params.username||!e.query.id?e.params.username||e.query.id?r(e):r({name:"users"}):r(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){x(e,r,t[r])})}return e}({},e,{name:"goToUser"}))}}}]},{name:"home",path:"/",component:function(){return t.e(0).then(t.bind(null,18))},smart:{matcher:{search:[/home/],title:function(){return"Go to homepage"}}}},{name:"about",path:"/about",component:function(){return t.e(0).then(t.bind(null,18))},smart:{matcher:{search:[/about/],title:function(){return"About us"}}}},{name:"search",path:"/search",component:function(){return t.e(0).then(t.bind(null,18))},smart:{matcher:{search:[/^(search|q)\:?\s+(?<query>.+)/i],title:function(e){var r=e.query;return"Search about *".concat(r,"*")}}}},{name:"sendMail",path:"/mail",component:function(){return t.e(0).then(t.bind(null,18))},smart:{matcher:{search:[/(?<email>[a-zA-Z0-9.!#$%&\u2019*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*)/i,/(?<email>[a-zA-Z0-9.!#$%&\u2019*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*)\s+(?<subject>\w+)/i],title:function(e){var r=e.email,t=e.subject;return t?"Send email to *".concat(r,"* with subject *").concat(t,"*"):"Send email to *".concat(r,"*")}}}}]});new u.a({el:"#app",router:O,render:function(e){return e(m)}})},6:function(e,r,t){e.exports=t(13)}},[[6,3,1]]]);