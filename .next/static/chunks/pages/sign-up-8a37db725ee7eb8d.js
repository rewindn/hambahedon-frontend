(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[801],{4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var o=a.apply(null,n);o&&e.push(o)}}else if("object"===l)if(n.toString===Object.prototype.toString)for(var s in n)r.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},9015:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sign-up",function(){return n(8400)}])},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(i){s=!0,a=i}finally{try{o||null==n.return||n.return()}finally{if(s)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var l,o=(l=n(7294))&&l.__esModule?l:{default:l},s=n(6273),i=n(387),u=n(7190);var c={};function f(e,t,n,r){if(e&&s.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=i.useRouter(),l=o.default.useMemo((function(){var t=a(s.resolveHref(r,e.href,!0),2),n=t[0],l=t[1];return{href:n,as:e.as?s.resolveHref(r,e.as):l||n}}),[r,e.href,e.as]),d=l.href,p=l.as,h=e.children,m=e.replace,v=e.shallow,g=e.scroll,b=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var y=(t=o.default.Children.only(h))&&"object"===typeof t&&t.ref,x=a(u.useIntersection({rootMargin:"200px"}),2),j=x[0],N=x[1],w=o.default.useCallback((function(e){j(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,j]);o.default.useEffect((function(){var e=N&&n&&s.isLocalURL(d),t="undefined"!==typeof b?b:r&&r.locale,a=c[d+"%"+p+(t?"%"+t:"")];e&&!a&&f(r,d,p,{locale:t})}),[p,d,N,b,n,r]);var E={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,l,o,i){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(n))&&(e.preventDefault(),t[a?"replace":"push"](n,r,{shallow:l,locale:i,scroll:o}))}(e,r,d,p,m,v,g,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s.isLocalURL(d)&&f(r,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var S="undefined"!==typeof b?b:r&&r.locale,_=r&&r.isLocaleDomain&&s.getDomainLocale(p,S,r&&r.locales,r&&r.domainLocales);E.href=_||s.addBasePath(s.addLocale(p,S,r&&r.defaultLocale))}return o.default.cloneElement(t,E)};t.default=d},8400:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(5893),a=n(5675),l=n(1664),o=n(4184),s=n.n(o),i=n(7294),u=n(1163);function c(){var e=(0,i.useState)(""),t=e[0],n=e[1],a=(0,i.useState)(""),o=a[0],c=a[1],f=(0,i.useState)(""),d=f[0],p=f[1],h=(0,u.useRouter)(),m={label:s()("form-label text-lg fw-medium color-palette-1 mb-10")};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{className:"text-4xl fw-bold color-palette-1 mb-10",children:"Sign Up"}),(0,r.jsx)("p",{className:"text-lg color-palette-1 m-0",children:"Daftar dan bergabung dengan kami"}),(0,r.jsxs)("div",{className:"pt-50",children:[(0,r.jsx)("label",{className:m.label,children:"Full Name"}),(0,r.jsx)("input",{type:"text",className:"form-control rounded-pill text-lg","aria-describedby":"name",placeholder:"Enter your name",value:t,onChange:function(e){n(e.target.value)}})]}),(0,r.jsxs)("div",{className:"pt-30",children:[(0,r.jsx)("label",{className:m.label,children:"Email Address"}),(0,r.jsx)("input",{type:"email",className:"form-control rounded-pill text-lg","aria-describedby":"email",placeholder:"Enter your email address",value:o,onChange:function(e){c(e.target.value)}})]}),(0,r.jsxs)("div",{className:"pt-30",children:[(0,r.jsx)("label",{className:m.label,children:"Password"}),(0,r.jsx)("input",{type:"password",className:"form-control rounded-pill text-lg","aria-describedby":"password",placeholder:"Your password",value:d,onChange:function(e){p(e.target.value)}})]}),(0,r.jsxs)("div",{className:"button-group d-flex flex-column mx-auto pt-50",children:[(0,r.jsx)(l.default,{href:"/sign-up-photo",children:(0,r.jsx)("button",{type:"button",className:"btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16",onClick:function(){var e={email:o,name:t,password:d};localStorage.setItem("user-form",JSON.stringify(e)),h.push("./sign-up-photo")},children:"Continue"})}),(0,r.jsx)(l.default,{href:"/sign-in",children:(0,r.jsx)("a",{className:"btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill",role:"button",children:"Sign In"})})]})]})}function f(){return(0,r.jsx)("section",{className:"sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47",children:(0,r.jsx)("div",{className:"container mx-auto",children:(0,r.jsxs)("form",{action:"",children:[(0,r.jsx)("div",{className:"pb-50",children:(0,r.jsx)(l.default,{href:"/",children:(0,r.jsx)("a",{className:"navbar-brand",children:(0,r.jsx)(a.default,{src:"/icon/logo.svg",width:"60",height:"60"})})})}),(0,r.jsx)(c,{})]})})})}},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[873,774,888,179],(function(){return t=9015,e(e.s=t);var t}));var t=e.O();_N_E=t}]);