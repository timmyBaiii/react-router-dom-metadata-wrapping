/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";var e={218:(e,t)=>{var r=Symbol.for("react.element"),n=(Symbol.for("react.portal"),Symbol.for("react.fragment")),o=(Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider")),a=Symbol.for("react.context"),l=(Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.iterator,{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),i=Object.assign,u={};function s(e,t,r){this.props=e,this.context=t,this.refs=u,this.updater=r||l}function c(){}function d(e,t,r){this.props=e,this.context=t,this.refs=u,this.updater=r||l}s.prototype.isReactComponent={},s.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},s.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},c.prototype=s.prototype;var p=d.prototype=new c;p.constructor=d,i(p,s.prototype),p.isPureReactComponent=!0;Array.isArray;var h=Object.prototype.hasOwnProperty,f={current:null},m={key:!0,ref:!0,__self:!0,__source:!0};var v={current:null};t.Component=s,t.Fragment=n,t.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},t.createElement=function(e,t,n){var o,a={},l=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(l=""+t.key),t)h.call(t,o)&&!m.hasOwnProperty(o)&&(a[o]=t[o]);var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){for(var s=Array(u),c=0;c<u;c++)s[c]=arguments[c+2];a.children=s}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===a[o]&&(a[o]=u[o]);return{$$typeof:r,type:e,key:l,ref:i,props:a,_owner:f.current}},t.useContext=function(e){return v.current.useContext(e)}},526:(e,t,r)=>{e.exports=r(218)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{r.r(n),r.d(n,{default:()=>V});var e,t,o,a=r(526);function l(e,t){if(!1===e||null==e)throw new Error(t)}function i(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(e){}}}function u(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function s(e,t,r){void 0===r&&(r="/");let n=function(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&"/"!==n?null:e.slice(r)||"/"}(("string"==typeof t?u(t):t).pathname||"/",r);if(null==n)return null;let o=c(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every(((e,r)=>e===t[r]))?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let a=null;for(let e=0;null==a&&e<o.length;++e)a=x(o[e],w(n));return a}function c(e,t,r,n){void 0===t&&(t=[]),void 0===r&&(r=[]),void 0===n&&(n="");let o=(e,o,a)=>{let i={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};i.relativePath.startsWith("/")&&(l(i.relativePath.startsWith(n),'Absolute route path "'+i.relativePath+'" nested under path "'+n+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(n.length));let u=C([n,i.relativePath]),s=r.concat(i);e.children&&e.children.length>0&&(l(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+u+'".'),c(e.children,t,s,u)),(null!=e.path||e.index)&&t.push({path:u,score:b(u,e.index),routesMeta:s})};return e.forEach(((e,t)=>{var r;if(""!==e.path&&null!=(r=e.path)&&r.includes("?"))for(let r of d(e.path))o(e,t,r);else o(e,t)})),t}function d(e){let t=e.split("/");if(0===t.length)return[];let[r,...n]=t,o=r.endsWith("?"),a=r.replace(/\?$/,"");if(0===n.length)return o?[a,""]:[a];let l=d(n.join("/")),i=[];return i.push(...l.map((e=>""===e?a:[a,e].join("/")))),o&&i.push(...l),i.map((t=>e.startsWith("/")&&""===t?"/":t))}(t=e||(e={})).Pop="POP",t.Push="PUSH",t.Replace="REPLACE",function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(o||(o={})),new Set(["lazy","caseSensitive","path","id","index","children"]);const p=/^:\w+$/,h=3,f=2,m=1,v=10,g=-2,y=e=>"*"===e;function b(e,t){let r=e.split("/"),n=r.length;return r.some(y)&&(n+=g),t&&(n+=f),r.filter((e=>!y(e))).reduce(((e,t)=>e+(p.test(t)?h:""===t?m:v)),n)}function x(e,t){let{routesMeta:r}=e,n={},o="/",a=[];for(let e=0;e<r.length;++e){let l=r[e],i=e===r.length-1,u="/"===o?t:t.slice(o.length)||"/",s=S({path:l.relativePath,caseSensitive:l.caseSensitive,end:i},u);if(!s)return null;Object.assign(n,s.params);let c=l.route;a.push({params:n,pathname:C([o,s.pathname]),pathnameBase:P(C([o,s.pathnameBase])),route:c}),"/"!==s.pathnameBase&&(o=C([o,s.pathnameBase]))}return a}function S(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=function(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!0),i("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,((e,t)=>(n.push(t),"/([^\\/]+)")));return e.endsWith("*")?(n.push("*"),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let a=o[0],l=a.replace(/(.)\/+$/,"$1"),u=o.slice(1);return{params:n.reduce(((e,t,r)=>{if("*"===t){let e=u[r]||"";l=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(r){return i(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+r+")."),e}}(u[r]||"",t),e}),{}),pathname:a,pathnameBase:l,pattern:e}}function w(e){try{return decodeURI(e)}catch(t){return i(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}const C=e=>e.join("/").replace(/\/\/+/g,"/"),P=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");Error;const E=["post","put","patch","delete"],R=(new Set(E),["get",...E]);function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},U.apply(this,arguments)}new Set(R),new Set([301,302,303,307,308]),new Set([307,308]),"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement,Symbol("deferred");const $=a.createContext(null),O=a.createContext(null),j=a.createContext(null),B=a.createContext(null),_=a.createContext({outlet:null,matches:[]}),L=a.createContext(null);function k(){return null!=a.useContext(B)}function M(){return k()||l(!1),a.useContext(B).location}function A(t,r){return function(t,r,n){k()||l(!1);let{navigator:o}=a.useContext(j),{matches:i}=a.useContext(_),c=i[i.length-1],d=c?c.params:{},p=(c&&c.pathname,c?c.pathnameBase:"/");c&&c.route;let h,f=M();if(r){var m;let e="string"==typeof r?u(r):r;"/"===p||(null==(m=e.pathname)?void 0:m.startsWith(p))||l(!1),h=e}else h=f;let v=h.pathname||"/",g=s(t,{pathname:"/"===p?v:v.slice(p.length)||"/"}),y=function(e,t,r){var n;if(void 0===t&&(t=[]),void 0===r&&(r=null),null==e){var o;if(null==(o=r)||!o.errors)return null;e=r.matches}let i=e,u=null==(n=r)?void 0:n.errors;if(null!=u){let e=i.findIndex((e=>e.route.id&&(null==u?void 0:u[e.route.id])));e>=0||l(!1),i=i.slice(0,Math.min(i.length,e+1))}return i.reduceRight(((e,n,o)=>{let l=n.route.id?null==u?void 0:u[n.route.id]:null,s=null;r&&(s=n.route.errorElement||T);let c=t.concat(i.slice(0,o+1)),d=()=>{let t;return t=l?s:n.route.element?n.route.element:e,a.createElement(D,{match:n,routeContext:{outlet:e,matches:c},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||0===o)?a.createElement(W,{location:r.location,revalidation:r.revalidation,component:s,error:l,children:d(),routeContext:{outlet:null,matches:c}}):d()}),null)}(g&&g.map((e=>Object.assign({},e,{params:Object.assign({},d,e.params),pathname:C([p,o.encodeLocation?o.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?p:C([p,o.encodeLocation?o.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),i,n);return r&&y?a.createElement(B.Provider,{value:{location:U({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:e.Pop}},y):y}(t,r)}function I(){let e=function(){var e;let t=a.useContext(L),r=function(e){let t=a.useContext(O);return t||l(!1),t}(F.UseRouteError),n=function(e){let t=function(e){let t=a.useContext(_);return t||l(!1),t}(),r=t.matches[t.matches.length-1];return r.route.id||l(!1),r.route.id}(F.UseRouteError);return t||(null==(e=r.errors)?void 0:e[n])}(),t=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return a.createElement(a.Fragment,null,a.createElement("h2",null,"Unexpected Application Error!"),a.createElement("h3",{style:{fontStyle:"italic"}},t),r?a.createElement("pre",{style:n},r):null,null)}const T=a.createElement(I,null);class W extends a.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?a.createElement(_.Provider,{value:this.props.routeContext},a.createElement(L.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function D(e){let{routeContext:t,match:r,children:n}=e,o=a.useContext($);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),a.createElement(_.Provider,{value:t},n)}var N,F,q;!function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"}(N||(N={})),function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"}(F||(F={})),function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"}(q||(q={})),new Promise((()=>{})),a.Component;const V=function(e){var t=e.routes,r=(e.onRouteBefore,A(t));return M(),r}})(),exports.default=n.default,Object.defineProperty(exports,"__esModule",{value:!0})})();