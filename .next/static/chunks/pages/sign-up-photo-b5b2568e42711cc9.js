(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[560],{4731:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sign-up-photo",function(){return n(7362)}])},7362:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});var r=n(4051),a=n.n(r),c=n(5893),u=n(5675),o=n(7294),s=n(782),i=n(7329),p=n(4305),l=(n(993),n(1163));function f(t,e,n,r,a,c,u){try{var o=t[c](u),s=o.value}catch(i){return void n(i)}o.done?e(s):Promise.resolve(s).then(r,a)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var c=t.apply(e,n);function u(t){f(c,r,a,u,o,"next",t)}function o(t){f(c,r,a,u,o,"throw",t)}u(void 0)}))}}function h(){var t=(0,o.useState)([]),e=t[0],n=t[1],r=(0,o.useState)(""),f=r[0],h=r[1],m=(0,o.useState)(""),v=m[0],x=m[1],g=(0,o.useState)({name:"",email:""}),w=g[0],y=g[1],b=(0,l.useRouter)(),k=(0,o.useState)("/icon/avatar-upload.svg"),j=k[0],N=k[1],_=(0,o.useCallback)(d(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.uY)();case 2:e=t.sent,n(e),h(e[0]._id);case 5:case"end":return t.stop()}}),t)}))),[p.uY]);(0,o.useEffect)((function(){_()}),[]),(0,o.useEffect)((function(){var t=localStorage.getItem("user-form");y(JSON.parse(t))}),[]);var P=function(){var t=d(a().mark((function t(){var e,n,r,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,localStorage.getItem("user-form");case 2:return e=t.sent,n=JSON.parse(e),(r=new FormData).append("image",v),r.append("email",n.email),r.append("name",n.name),r.append("password",n.password),r.append("username",n.name),r.append("phoneNumber","08190349"),r.append("role","user"),r.append("status","Y"),r.append("favorite",f),t.next=16,(0,i.a)(r);case 16:(c=t.sent).error?s.Am.error(c.message):(s.Am.success("register berhasil"),b.push("/sign-up-success"),localStorage.removeItem("user-form"));case 18:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,c.jsxs)("section",{className:"sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50",children:[(0,c.jsx)("div",{className:"container mx-auto",children:(0,c.jsx)("form",{action:"",children:(0,c.jsxs)("div",{className:"form-input d-md-block d-flex flex-column",children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:"mb-20",children:(0,c.jsxs)("div",{className:"image-upload text-center",children:[(0,c.jsx)("label",{htmlFor:"avatar",children:(0,c.jsx)(u.default,{src:j,width:"120",height:"120",className:"img-upload"})}),(0,c.jsx)("input",{id:"avatar",type:"file",name:"avatar",accept:"image/png, image/jpeg",onChange:function(t){var e=t.target.files[0];N(URL.createObjectURL(e)),x(e)}})]})}),(0,c.jsx)("h2",{className:"fw-bold text-xl text-center color-palette-1 m-0",children:w.name}),(0,c.jsx)("p",{className:"text-lg text-center color-palette-1 m-0",children:w.email}),(0,c.jsxs)("div",{className:"pt-50 pb-50",children:[(0,c.jsx)("label",{htmlFor:"category",className:"form-label text-lg fw-medium color-palette-1 mb-10",children:"Favorite Game"}),(0,c.jsx)("select",{id:"category",name:"category",value:f,className:"form-select d-block w-100 rounded-pill text-lg","aria-label":"Favorite Game",onChange:function(t){h(t.target.value)},children:e.map((function(t){return(0,c.jsx)("option",{value:t._id,selected:!0,children:t.name},t._id)}))})]})]}),(0,c.jsxs)("div",{className:"button-group d-flex flex-column mx-auto",children:[(0,c.jsx)("button",{type:"button",className:"btn btn-create fw-medium text-lg text-white rounded-pill mb-16",onClick:P,children:"Create My Account"}),(0,c.jsx)("a",{className:"btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15",href:"#",role:"button",children:"Terms & Conditions"})]})]})})}),(0,c.jsx)(s.Ix,{})]})}},7329:function(t,e,n){"use strict";n.d(e,{a:function(){return p},Z:function(){return f}});var r=n(4051),a=n.n(r),c=n(1609);function u(t,e,n,r,a,c,u){try{var o=t[c](u),s=o.value}catch(i){return void n(i)}o.done?e(s):Promise.resolve(s).then(r,a)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var c=t.apply(e,n);function o(t){u(c,r,a,o,s,"next",t)}function s(t){u(c,r,a,o,s,"throw",t)}o(void 0)}))}}var s="https://hambahedon.herokuapp.com",i="api/v1";function p(t){return l.apply(this,arguments)}function l(){return(l=o(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(s,"/").concat(i,"/auth/signup"),t.abrupt("return",(0,c.Z)({url:n,method:"POST",data:e}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return d.apply(this,arguments)}function d(){return(d=o(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(s,"/").concat(i,"/auth/signin"),t.abrupt("return",(0,c.Z)({url:n,method:"POST",data:e}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},1609:function(t,e,n){"use strict";n.d(e,{Z:function(){return p}});var r=n(4051),a=n.n(r),c=n(9669),u=n.n(c),o=n(1955);function s(t,e,n,r,a,c,u){try{var o=t[c](u),s=o.value}catch(i){return void n(i)}o.done?e(s):Promise.resolve(s).then(r,a)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var c=t.apply(e,n);function u(t){s(c,r,a,u,o,"next",t)}function o(t){s(c,r,a,u,o,"throw",t)}u(void 0)}))}}function p(t){return l.apply(this,arguments)}function l(){return(l=i(a().mark((function t(e){var n,r,c,s,i,p,l,f,d,h,m,v;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.url,r=e.method,c=e.data,s=e.token,i=e.serverToken,p={},i?p={Authorization:"Bearer ".concat(i)}:s&&(l=o.Z.get("token"))&&(f=atob(l),p={Authorization:"Bearer ".concat(f)}),t.next=5,u()({url:n,method:r,data:c,headers:p}).catch((function(t){return t.response}));case 5:if(!((null===(d=t.sent)||void 0===d?void 0:d.status)>300)){t.next=9;break}return h={error:!0,msessage:d.data.message,data:null},t.abrupt("return",h);case 9:return m=Object.keys(d.data).length,v={error:!1,msessage:"success",data:m>1?d.data:d.data.data},t.abrupt("return",v);case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},4305:function(t,e,n){"use strict";n.d(e,{c1:function(){return f},uY:function(){return h},k1:function(){return v},cO:function(){return g},tr:function(){return y},ck:function(){return k}});var r=n(4051),a=n.n(r),c=n(9669),u=n.n(c),o=n(1609);function s(t,e,n,r,a,c,u){try{var o=t[c](u),s=o.value}catch(i){return void n(i)}o.done?e(s):Promise.resolve(s).then(r,a)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var c=t.apply(e,n);function u(t){s(c,r,a,u,o,"next",t)}function o(t){s(c,r,a,u,o,"throw",t)}u(void 0)}))}}var p="https://hambahedon.herokuapp.com",l="api/v1";function f(){return d.apply(this,arguments)}function d(){return(d=i(a().mark((function t(){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"players/landingpage",t.next=3,u().get("".concat(p,"/").concat(l,"/").concat("players/landingpage"));case 3:return e=t.sent,n=e.data,t.abrupt("return",n.data);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(){return m.apply(this,arguments)}function m(){return(m=i(a().mark((function t(){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"players/category",t.next=3,u().get("".concat(p,"/").concat(l,"/").concat("players/category"));case 3:return e=t.sent,n=e.data,t.abrupt("return",n.data);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return x.apply(this,arguments)}function x(){return(x=i(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(p,"/").concat(l,"/players/checkout"),t.abrupt("return",(0,o.Z)({url:n,method:"POST",data:e,token:!0}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(){return w.apply(this,arguments)}function w(){return(w=i(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(p,"/").concat(l,"/players/dashboard"),t.abrupt("return",(0,o.Z)({url:e,method:"GET",token:!0}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return b.apply(this,arguments)}function b(){return(b=i(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="",n="all"===e?"":"?status=".concat(e),r="".concat(p,"/").concat(l,"/players/history").concat(n),t.abrupt("return",(0,o.Z)({url:r,method:"GET",token:!0}));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t){return j.apply(this,arguments)}function j(){return(j=i(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(p,"/").concat(l,"/players/profile"),t.abrupt("return",(0,o.Z)({url:n,method:"PUT",data:e,token:!0}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}},function(t){t.O(0,[873,842,774,888,179],(function(){return e=4731,t(t.s=e);var e}));var e=t.O();_N_E=e}]);