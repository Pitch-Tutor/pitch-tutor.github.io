(()=>{"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t){return 0===Object.keys(t).length}function c(t,n,s,o){return t[1]&&o?e(s.ctx.slice(),t[1](o(n))):s.ctx}function a(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function u(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function f(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function m(t){return document.createTextNode(t)}function y(){return m(" ")}function g(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function v(t){return function(e){return e.preventDefault(),t.call(this,e)}}function C(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)null==e[s]?t.removeAttribute(s):"style"===s?t.style.cssText=e[s]:"__value"===s?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:C(t,s,e[s])}function w(t){return""===t?null:+t}function b(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function $(t,e){t.value=null==e?"":e}let k;function H(t){k=t}function z(){if(!k)throw new Error("Function called outside component initialization");return k}function _(t){z().$$.on_mount.push(t)}function V(t,e){z().$$.context.set(t,e)}new Set,new Set;const R=[],E=[],L=[],T=[],M=Promise.resolve();let P=!1;function O(t){L.push(t)}let I=!1;const D=new Set;function S(){if(!I){I=!0;do{for(let t=0;t<R.length;t+=1){const e=R[t];H(e),j(e.$$)}for(H(null),R.length=0;E.length;)E.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];D.has(e)||(D.add(e),e())}L.length=0}while(R.length);for(;T.length;)T.pop()();P=!1,I=!1,D.clear()}}function j(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const q=new Set;let Z,A;function F(){Z={r:0,c:[],p:Z}}function B(){Z.r||o(Z.c),Z=Z.p}function N(t,e){t&&t.i&&(q.delete(t),t.i(e))}function U(t,e,n,s){if(t&&t.o){if(q.has(t))return;q.add(t),Z.c.push((()=>{q.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function Q(t){t&&t.c()}function K(t,e,s){const{fragment:i,on_mount:l,on_destroy:c,after_update:a}=t.$$;i&&i.m(e,s),O((()=>{const e=l.map(n).filter(r);c?c.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(O)}function G(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function W(e,n,r,i,l,c,a=[-1]){const u=k;H(e);const h=n.props||{},p=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:l,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:a,skip_bound:!1};let f=!1;if(p.ctx=r?r(e,h,((t,n,...s)=>{const o=s.length?s[0]:n;return p.ctx&&l(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),f&&function(t,e){-1===t.$$.dirty[0]&&(R.push(t),P||(P=!0,M.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],p.update(),f=!0,o(p.before_update),p.fragment=!!i&&i(p.ctx),n.target){if(n.hydrate){const t=(m=n.target,Array.from(m.childNodes));p.fragment&&p.fragment.l(t),t.forEach(d)}else p.fragment&&p.fragment.c();n.intro&&N(e.$$.fragment),K(e,n.target,n.anchor),S()}var m;H(u)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(A=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){G(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!l(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class J{$destroy(){G(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!l(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const X=()=>Math.random().toString(36).substr(2,9);class Y{constructor(t){this.value=t,this._subscribersQueue={}}get getValue(){return this.value}subscribe(t){const e=X();return this._subscribersQueue[e]=t,t(this.getValue),()=>{delete this._subscribersQueue[e]}}setValue(t){this.value=t;for(const t in this._subscribersQueue)(0,this._subscribersQueue[t])(this.value)}}function tt(t){try{return decodeURIComponent(t)}catch(e){console.warn(`[Easyroute] Could not decode query string: ${t}`)}return t}const et=(t,e="nestingDepth")=>Math.max(...t.map((t=>t[e])));class nt{static getQueryParams(t){return function(t){const e={};return"string"!=typeof t?e:(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach((t=>{const n=t.replace(/\+/g," ").split("="),s=tt(n.shift()),o=n.length>0?tt(n.join("=")):null;void 0===e[s]?e[s]=o:Array.isArray(e[s])?null!==o&&e[s].push(o):null!==o&&(e[s]=[e[s],o])})),e):e}(t)}static getPathParams(t,e){let n=t.regexpPath.exec(e);if(!n)return{};n=n.slice(1,n.length);const s={};for(let e=0;e<n.length;e++){const o=n[e],r=t.pathKeys[e];s[String(r)]=o}return s}static createRouteObject(t,e){var n;const s=(t=t.filter(Boolean)).find((e=>e.nestingDepth===et(t))),[o,r]=e.split("?");return s?{params:nt.getPathParams(s,o),query:nt.getQueryParams(r),name:s.name,fullPath:e,meta:null!==(n=s.meta)&&void 0!==n?n:{}}:{params:{},query:{},fullPath:""}}}class st{constructor(t){this.history=[],this.currentHistoryPosition=0,this.appendHistory(t)}appendHistory(t){Array.isArray(t)?(this.history.push(...t),this.currentHistoryPosition+=t.length):(this.history.push(t),this.currentHistoryPosition++)}back(){return this.go(-1)}go(t){var e,n;const s=this.currentHistoryPosition+t,o=this.history[s];return o?(this.currentHistoryPosition=s,null!==(e=null==o?void 0:o.fullPath)&&void 0!==e?e:""):null!==(n=this.history[0].fullPath)&&void 0!==n?n:""}}const ot=(t,e)=>Boolean(e)?t.replace(e,""):t,rt=t=>t.replace(/\/$/,"");function it(){this.parseRoute(ot(`${rt(window.location.pathname)}/${window.location.search}`,this.base),!0),window.addEventListener("popstate",(t=>{t.state?this.parseRoute(ot(t.state.url,this.base),!1):this.parseRoute("/",!1)}))}function lt(){this.parseRoute(ot(window.location.hash,this.base)||"/"),window.addEventListener("hashchange",(()=>{this.ignoreEvents?this.ignoreEvents=!1:this.parseRoute(ot(window.location.hash,this.base))}))}async function ct(t){if(!/(\.then)/i.test(t.toString()))return t;try{return(await t()).default}catch(e){return console.warn(`[Easyroute] caught an error while trying to download async component: "${e.message}"`),t}}const at=t=>t.replace(/^\//,""),ut=t=>at(rt(t));function ht(t,e=null,n=0,s="/"){return t.reduce(((t,o)=>{var r;const i=o.component&&{component:o.component}||o.components&&{components:o.components},l=ut(s)+"/"+ut(o.path),{pattern:c,keys:a}=function(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,s,o,r,i=[],l="",c=t.split("/");for(c[0]||c.shift();o=c.shift();)"*"===(n=o[0])?(i.push("wild"),l+="/(.*)"):":"===n?(s=o.indexOf("?",1),r=o.indexOf(".",1),i.push(o.substring(1,~s?s:~r?r:o.length)),l+=~s&&!~r?"(?:/([^/]+?))?":"/([^/]+?)",~r&&(l+=(~s?"?":"")+"\\"+o.substring(r))):l+="/"+o;return{keys:i,pattern:new RegExp("^"+l+"/?$","i")}}(l),u={...o,...i,parentId:e,nestingDepth:n,path:l,id:X(),regexpPath:c,pathKeys:a};return Array.isArray(o.children)&&(t=t.concat(ht(null!==(r=u.children)&&void 0!==r?r:[],u.id,n+1,u.path))),t.concat(u)}),[])}const dt=!("undefined"!=typeof window&&void 0!==window.document),pt=class{constructor(t){if(this.settings=t,this.routes=[],this.ignoreEvents=!1,this.silentControl=null,this.currentUrl="",this.beforeEach=null,this.afterEach=null,this.currentMatched=new Y([]),this.currentRouteData=new Y({params:{},query:{},name:"",fullPath:""}),t.mode||(this.settings.mode="hash",console.warn('[Easyroute] Router mode is not defined: fallback to "hash"')),this.routes=ht(t.routes),!dt&&setTimeout((()=>{this.setParser()}),0),dt&&"history"!==this.mode)throw new Error('[Easyroute] SSR only works with "history" router mode')}setParser(){switch(this.mode){case"silent":this.parseRoute(`${window.location.pathname}${window.location.search}`);break;case"history":it.apply(this);break;case"hash":default:lt.apply(this)}}getTo(t){return t.find((e=>e.nestingDepth===et(t)))}getFrom(){var t;const e=this.currentMatched.getValue;return e&&null!==(t=e.find((t=>t.nestingDepth===et(e))))&&void 0!==t?t:null}changeUrl(t,e=!0){this.currentUrl=t,"hash"===this.mode&&(window.location.hash=t),"history"===this.mode&&e&&!dt&&window.history.pushState({url:t},t,t)}async runAllIndividualHooks(t,e,n){for await(const s of t)if(!await this.executeBeforeHook(e,n,s.beforeEnter))return!1;return!0}async parseRoute(t,e=!0){t=t.replace(/^#/,"");const n=function(t,e){const n=[],s=[],o=[];return t.forEach((s=>{s.regexpPath.test(e)&&n.push(...function(t,e){var n;if(!e)return[];const s=[e];let o=e.parentId;do{const e=t.find((t=>t.id===o));e&&s.push(e),o=null!==(n=null==e?void 0:e.parentId)&&void 0!==n?n:null}while(o);return s}(t,s))})),n.filter((t=>!s.includes(t.id)&&!o.includes(t.nestingDepth)&&(s.push(t.id),o.push(t.nestingDepth),!0)))}(this.routes,t.split("?")[0]);if(!n)return;const s=this.getTo(n),o=this.getFrom(),r=nt.createRouteObject([s],t),i=o?nt.createRouteObject([o],this.currentUrl):null;"silent"!==this.mode||this.silentControl||(this.silentControl=new st(r)),this.silentControl&&e&&this.silentControl.appendHistory(r);const l=await this.executeBeforeHook(r,i,this.beforeEach),c=await this.runAllIndividualHooks(n,r,i);l&&c&&(this.changeUrl(function(t,e,n=!1){return n&&t.split("?")[0].length>1&&(t=(t=>t.replace(/(\/\?)/,"?"))(rt(t))),!e||t.includes(e)?t:`/${rt(e)}/${at(t)}`}(t,this.base,this.settings.omitTrailingSlash),e),this.currentRouteData.setValue(r),this.currentMatched.setValue(await async function(t){const e=t.map((async t=>{if(t.component&&(t.component=await ct(t.component)),t.components)for await(const e of Object.entries(t.components)){const[n,s]=e;t.components[n]=await ct(s)}return t}));return await Promise.all(e)}(n)),this.afterHook(r,i))}async executeBeforeHook(t,e,n){return new Promise((async s=>{n?await n(t,e,(t=>{null!=t?(!1===t&&s(!1),"string"==typeof t&&(this.parseRoute(t),s(!1))):s(!0)})):s(!0)}))}afterHook(t,e){this.afterEach&&this.afterEach(t,e)}async push(t){this.ignoreEvents=!0,await this.parseRoute(t)}go(t){"silent"!==this.mode?window.history.go(t):this.parseRoute(this.silentControl.go(t),!1)}back(){this.go(-1)}get mode(){return this.settings.mode}get base(){return this.settings.base?ut(this.settings.base)+"/":""}get currentRoute(){return this.currentRouteData.getValue}};function ft(t){let e=t;if(-1!==e.indexOf("ms")){if(-1!==e.indexOf(",")){let t=e.split(",");t.sort((function(t,e){return Number(e.trim().replace("ms",""))-Number(t.trim().replace("ms",""))})),e=t[0]}e=e.replace("ms",""),e=Number(e)}else if(-1!==e.indexOf("s")){if(-1!==e.indexOf(",")){let t=e.split(",");t.sort((function(t,e){return Number(e.trim().replace("s",""))-Number(t.trim().replace("s",""))})),e=t[0]}0===e.indexOf(".")&&(e="0"+e),e=e.replace("s",""),e=1e3*Number(e)}return e}function mt(t){return new Promise((e=>{setTimeout((()=>{e()}),t)}))}function yt(t){let e,n,s;var o=t[0];function r(t){return{props:{currentRoute:t[1],router:t[5],outlet:t[3]}}}return o&&(e=new o(r(t))),{c(){e&&Q(e.$$.fragment),n=m("")},m(t,o){e&&K(e,t,o),h(t,n,o),s=!0},p(t,s){const i={};if(2&s&&(i.currentRoute=t[1]),8&s&&(i.outlet=t[3]),o!==(o=t[0])){if(e){F();const t=e;U(t.$$.fragment,1,0,(()=>{G(t,1)})),B()}o?(e=new o(r(t)),Q(e.$$.fragment),N(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else o&&e.$set(i)},i(t){s||(e&&N(e.$$.fragment,t),s=!0)},o(t){e&&U(e.$$.fragment,t),s=!1},d(t){t&&d(n),e&&G(e,t)}}}function gt(t){let n,s,o,r=t[4]&&yt(t),i=[{class:s="easyroute-outlet"+(t[7]?` ${t[7]}`:"")+(t[2]?` ${t[2]}`:"")},t[6]],l={};for(let t=0;t<i.length;t+=1)l=e(l,i[t]);return{c(){n=p("div"),r&&r.c(),x(n,l)},m(e,s){h(e,n,s),r&&r.m(n,null),t[11](n),o=!0},p(t,[e]){t[4]?r?(r.p(t,e),16&e&&N(r,1)):(r=yt(t),r.c(),N(r,1),r.m(n,null)):r&&(F(),U(r,1,1,(()=>{r=null})),B()),x(n,l=function(t,e){const n={},s={},o={$$scope:1};let r=t.length;for(;r--;){const i=t[r],l=e[r];if(l){for(const t in i)t in l||(s[t]=1);for(const t in l)o[t]||(n[t]=l[t],o[t]=1);t[r]=l}else for(const t in i)o[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}(i,[(!o||4&e&&s!==(s="easyroute-outlet"+(t[7]?` ${t[7]}`:"")+(t[2]?` ${t[2]}`:"")))&&{class:s},t[6]]))},i(t){o||(N(r),o=!0)},o(t){U(r),o=!1},d(e){e&&d(n),r&&r.d(),t[11](null)}}}function vt(t,n,s){let{transition:o=null}=n,{forceRemount:r=!1}=n,{name:i="default"}=n;const l=!("undefined"!=typeof window&&void 0!==window.document),c=("easyrouteContext",z().$$.context.get("easyrouteContext"));const u=c&&c.depth+1||0,h=c?c.router:null,d=Object.assign({},n),p=d.class,f=l?null:o?function(t){let e=0,n=0;for(let s=0;s<document.styleSheets.length;s++){let o=document.styleSheets[s].rules;for(let s=0;s<o.length;s++)o[s].selectorText&&(-1!==o[s].selectorText.indexOf(`.${t}-enter-active`)&&(e=ft(o[s].style.transitionDuration)),-1!==o[s].selectorText.indexOf(`.${t}-leave-active`)&&(n=ft(o[s].style.transitionDuration)))}return{enteringDuration:e,leavingDuration:n}}(o):null;let m,y=null,g={},v="",C=null,x=null,w=l;if(!h)throw new Error("[Easyroute] RouterOutlet: no router instance found. Did you forget to wrap your root component with <EasyrouteProvider>?");async function b(t,e){(C!==e||r)&&(f?(s(2,v=`${o}-leave-active ${o}-leave-to`),await mt(f.leavingDuration+10),s(2,v+=` ${o}-leave`),await mt(5),s(2,v=`${o}-enter`),s(2,v=`${o}-enter-active`),s(0,y=t),s(2,v+=` ${o}-enter-to`),await mt(f.enteringDuration+10),s(2,v="")):s(0,y=t),C=e)}async function $(t){const e=t.find((t=>t.nestingDepth===u));if(e){let t;t="default"===i?e.component||e.components.default:e.components?e.components[i]:null,b(t,e.id),await mt(f?f.leavingDuration:0),s(1,g={...h.currentRoute,WARNING:'Accessing the current route object via the "currentRoute" property is deprecated and will be removed in the next MINOR version. Use the "useCurrentRoute" hook instead (https://easyroute.lyoha.info/page/current-route-info)'}),s(4,w=!0)}else b(null,`${Date.now()}-nonexistent-route`)}var k;return V("easyrouteContext",{depth:u,router:h}),delete d.to,delete d.$$slots,delete d.$$scope,delete d.router,delete d.transition,delete d.forceRemount,delete d.class,k=()=>{m&&m()},z().$$.on_destroy.push(k),l&&($(h.currentMatched.getValue),g=h.currentRoute),_((()=>{l||(m=h.currentMatched.subscribe((t=>{$(t)})))})),t.$$set=t=>{s(21,n=e(e({},n),a(t))),"transition"in t&&s(8,o=t.transition),"forceRemount"in t&&s(9,r=t.forceRemount),"name"in t&&s(10,i=t.name)},n=a(n),[y,g,v,x,w,h,d,p,o,r,i,function(t){E[t?"unshift":"push"]((()=>{x=t,s(3,x)}))}]}const Ct=class extends J{constructor(t){super(),W(this,t,vt,gt,i,{transition:8,forceRemount:9,name:10})}};function xt(t){let e;const n=t[2].default,s=function(t,e,n,s){if(t){const s=c(t,e,n,null);return t[0](s)}}(n,t,t[1]);return{c(){s&&s.c()},m(t,n){s&&s.m(t,n),e=!0},p(t,[e]){s&&s.p&&2&e&&function(t,e,n,s,o,r,i){const l=function(t,e,n,s){if(t[2]&&s){const o=t[2](s(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|o[s];return t}return e.dirty|o}return e.dirty}(e,s,o,null);if(l){const o=c(e,n,s,null);t.p(o,l)}}(s,n,t,t[1],e)},i(t){e||(N(s,t),e=!0)},o(t){U(s,t),e=!1},d(t){s&&s.d(t)}}}function wt(t,e,n){let{$$slots:s={},$$scope:o}=e,{router:r=null}=e;if(!(r&&r instanceof pt))throw new Error("[Easyroute] EasyrouteProvider: no router instance passed into EasyrouteProvider");return V("easyrouteContext",{depth:-1,router:r}),t.$$set=t=>{"router"in t&&n(0,r=t.router),"$$scope"in t&&n(1,o=t.$$scope)},[r,o,s]}const bt=class extends J{constructor(t){super(),W(this,t,wt,xt,i,{router:0})}},$t=pt;function kt(e){let n,s,o,r,i,l,c,a;return{c(){n=p("h1"),n.textContent="PITCH TUTOR",s=y(),o=p("p"),o.textContent="Репетируй и прокачивай свои презентационные навыки",r=y(),i=p("p"),l=p("button"),l.textContent="Начать тренировку",C(n,"class","svelte-b1qy9j"),C(o,"class","svelte-b1qy9j"),C(l,"class","btn svelte-b1qy9j"),C(i,"class","go svelte-b1qy9j")},m(t,d){h(t,n,d),h(t,s,d),h(t,o,d),h(t,r,d),h(t,i,d),u(i,l),c||(a=g(l,"click",e[0]),c=!0)},p:t,i:t,o:t,d(t){t&&d(n),t&&d(s),t&&d(o),t&&d(r),t&&d(i),c=!1,a()}}}function Ht(t){return[function(){Mt.push("/train-pick")}]}function zt(t){let e,n;return{c(){e=p("div"),n=m(t[1]),C(e,"class","startTimeCount svelte-1rias0y")},m(t,s){h(t,e,s),u(e,n)},p(t,e){2&e&&b(n,t[1])},d(t){t&&d(e)}}}function _t(e){let n,s,o,r,i,l,c,a,f,g,v,x,w,$,k=Math.floor(e[2]/60).toString().padStart(2,"0")+"",H=(e[2]%60).toString().padStart(2,"0")+"",z=e[1]&&zt(e);return{c(){n=p("style"),n.textContent="html {\n      background-color: #000;\n    }",s=y(),o=p("h1"),o.textContent="PITCH TUTOR",r=y(),i=p("div"),z&&z.c(),l=y(),c=p("video"),c.innerHTML='<source src="/videos/zoom_1.mp4" type="video/mp4"/>',f=y(),g=p("div"),v=p("div"),x=m(k),w=m(":"),$=m(H),C(o,"class","svelte-1rias0y"),C(c,"width","1280"),C(c,"height","720"),C(c,"class","media svelte-1rias0y"),c.muted=a=!0,C(c,"preload","auto"),C(c,"disablepictureinpicture","true"),C(i,"class","video svelte-1rias0y"),C(v,"class","controlsRight svelte-1rias0y"),C(g,"class","controls svelte-1rias0y")},m(t,a){u(document.head,n),h(t,s,a),h(t,o,a),h(t,r,a),h(t,i,a),z&&z.m(i,null),u(i,l),u(i,c),e[3](c),h(t,f,a),h(t,g,a),u(g,v),u(v,x),u(v,w),u(v,$)},p(t,[e]){t[1]?z?z.p(t,e):(z=zt(t),z.c(),z.m(i,l)):z&&(z.d(1),z=null),4&e&&k!==(k=Math.floor(t[2]/60).toString().padStart(2,"0")+"")&&b(x,k),4&e&&H!==(H=(t[2]%60).toString().padStart(2,"0")+"")&&b($,H)},i:t,o:t,d(t){d(n),t&&d(s),t&&d(o),t&&d(r),t&&d(i),z&&z.d(),e[3](null),t&&d(f),t&&d(g)}}}function Vt(t,e,n){let s,o=5,r=240;function i(){n(1,o--,o),o?setTimeout(i,1e3):(s.play(),l())}function l(){n(2,r--,r),r&&setTimeout(l,1e3)}return _((()=>{i()})),[s,o,r,function(t){E[t?"unshift":"push"]((()=>{s=t,n(0,s)}))}]}function Rt(e){let n,s,r,i,l,c,a,f,x,b,k,H,z,_,V,R,E,L,T,M,P,O,I,D,S,j;return{c(){n=p("h1"),n.textContent="PITCH TUTOR",s=y(),r=p("h2"),r.textContent="Настройте режим вашей тренировки",i=y(),l=p("p"),l.textContent="Описание того зачем ставить счетчик и какой лучше установить. Что-то про особенности питчинга и важности времени.",c=y(),a=p("form"),f=p("div"),x=p("label"),x.innerHTML='<input type="checkbox" name="counter" value="1"/> \n      <div class="optionsLabel svelte-1kl89tz">Показывать<br/>счетчик</div>',b=y(),k=p("label"),H=p("input"),z=y(),_=p("div"),_.textContent="4 минуты",V=y(),R=p("label"),E=p("input"),L=y(),T=p("div"),T.textContent="Свое время",M=y(),P=p("div"),O=p("button"),I=m("Начать тренировку"),C(n,"class","svelte-1kl89tz"),C(r,"class","svelte-1kl89tz"),C(l,"class","description svelte-1kl89tz"),C(x,"class","optionsItem svelte-1kl89tz"),C(H,"type","checkbox"),C(H,"name","defaultTime"),C(_,"class","optionsLabel svelte-1kl89tz"),C(k,"class","optionsItem svelte-1kl89tz"),C(E,"type","number"),E.disabled=e[0],C(T,"class","optionsLabel svelte-1kl89tz"),C(R,"class","optionsItem svelte-1kl89tz"),C(f,"class","options svelte-1kl89tz"),C(O,"type","submit"),C(O,"class","btn"),O.disabled=D=!e[2],C(P,"class","start svelte-1kl89tz")},m(t,o){h(t,n,o),h(t,s,o),h(t,r,o),h(t,i,o),h(t,l,o),h(t,c,o),h(t,a,o),u(a,f),u(f,x),u(f,b),u(f,k),u(k,H),H.checked=e[0],u(k,z),u(k,_),u(f,V),u(f,R),u(R,E),$(E,e[1]),u(R,L),u(R,T),u(a,M),u(a,P),u(P,O),u(O,I),S||(j=[g(H,"change",e[5]),g(E,"input",e[6]),g(a,"submit",v(e[3]))],S=!0)},p(t,[e]){1&e&&(H.checked=t[0]),1&e&&(E.disabled=t[0]),2&e&&w(E.value)!==t[1]&&$(E,t[1]),4&e&&D!==(D=!t[2])&&(O.disabled=D)},i:t,o:t,d(t){t&&d(n),t&&d(s),t&&d(r),t&&d(i),t&&d(l),t&&d(c),t&&d(a),S=!1,o(j)}}}function Et(t,e,n){let s,o,{currentRoute:r}=e,i=!1;return t.$$set=t=>{"currentRoute"in t&&n(4,r=t.currentRoute)},t.$$.update=()=>{3&t.$$.dirty&&n(2,i=s||o>0)},[s,o,i,function(){const t=s?4:o;Mt.push(`/pitch?mode=${r.query.mode}&time=${t}${this.counter.checked?"&useCounter=1":""}`)},r,function(){s=this.checked,n(0,s)},function(){o=w(this.value),n(1,o)}]}function Lt(e){let n,s,r,i,l,c,a,x,w,b,$,k,H,z,_,V,R,E,L,T,M,P,O,I,D,S,j,q,Z,A,F,B,N,U,Q,K,G,W,J,X,Y,tt,et,nt,st,ot,rt,it,lt,ct,at,ut,ht,dt,pt,ft,mt,yt,gt,vt,Ct,xt,wt,bt,$t,kt;return{c(){n=p("h1"),n.textContent="PITCH TUTOR",s=y(),r=p("h2"),r.textContent="Выберите режим тренировки",i=y(),l=p("form"),c=p("div"),a=p("label"),x=f("svg"),w=f("rect"),b=f("circle"),$=f("circle"),k=f("rect"),H=f("path"),z=f("rect"),_=f("rect"),V=y(),R=p("span"),E=p("input"),L=m(" Один на один"),T=y(),M=p("label"),P=f("svg"),O=f("rect"),I=f("circle"),D=f("circle"),S=f("rect"),j=f("path"),q=f("rect"),Z=f("rect"),A=f("rect"),F=f("rect"),B=f("rect"),N=f("rect"),U=f("rect"),Q=y(),K=p("span"),G=p("input"),W=m(" Все на одного"),J=y(),X=p("label"),Y=f("svg"),tt=f("rect"),et=f("rect"),nt=f("rect"),st=f("rect"),ot=f("rect"),rt=f("rect"),it=f("rect"),lt=f("rect"),ct=f("circle"),at=f("circle"),ut=f("rect"),ht=f("path"),dt=f("rect"),pt=f("path"),ft=y(),mt=p("span"),yt=p("input"),gt=m("\n        Демонстрация экрана"),vt=y(),Ct=p("div"),xt=p("button"),wt=m("Установить время"),C(n,"class","svelte-1rz8yp6"),C(r,"class","svelte-1rz8yp6"),C(w,"width","333"),C(w,"height","185.462"),C(w,"fill","black"),C(b,"cx","116.897"),C(b,"cy","157.597"),C(b,"r","2.42812"),C(b,"fill","#C4C4C4"),C($,"cx","116.897"),C($,"cy","157.597"),C($,"r","1.69687"),C($,"fill","#FF0000"),C($,"stroke","black"),C(k,"x","46.25"),C(k,"y","154.938"),C(k,"width","6.24375"),C(k,"height","4.625"),C(k,"rx","2.3125"),C(k,"fill","#23D959"),C(H,"d","M49.6099 155.74C49.4146 155.545 49.0981 155.545 48.9028 155.74L45.7208 158.922C45.5256 159.117 45.5256 159.434 45.7208 159.629C45.9161 159.825 46.2327 159.825 46.4279 159.629L49.2563 156.801L52.0848 159.629C52.28 159.825 52.5966 159.825 52.7919 159.629C52.9871 159.434 52.9871 159.117 52.7919 158.922L49.6099 155.74ZM49.7563 158.406L49.7563 156.094L48.7563 156.094L48.7563 158.406L49.7563 158.406Z"),C(H,"fill","black"),C(z,"x","266.863"),C(z,"y","154.706"),C(z,"width","19.8875"),C(z,"height","6.475"),C(z,"rx","3.2375"),C(z,"fill","#FF0000"),C(_,"x","46.25"),C(_,"y","20.1187"),C(_,"width","240.5"),C(_,"height","128.575"),C(_,"fill","#C4C4C4"),C(x,"class","preview svelte-1rz8yp6"),C(x,"width","333"),C(x,"viewBox","0 0 333 186"),C(x,"fill","none"),C(x,"xmlns","http://www.w3.org/2000/svg"),C(E,"type","radio"),C(E,"name","mode"),E.__value="one",E.value=E.__value,C(E,"class","svelte-1rz8yp6"),e[3][0].push(E),C(R,"class","modeTitle svelte-1rz8yp6"),C(a,"class","modesItem svelte-1rz8yp6"),C(O,"width","333"),C(O,"height","185.462"),C(O,"fill","black"),C(I,"cx","116.897"),C(I,"cy","157.597"),C(I,"r","2.42812"),C(I,"fill","#C4C4C4"),C(D,"cx","116.897"),C(D,"cy","157.597"),C(D,"r","1.69687"),C(D,"fill","#FF0000"),C(D,"stroke","black"),C(S,"x","46.25"),C(S,"y","154.938"),C(S,"width","6.24375"),C(S,"height","4.625"),C(S,"rx","2.3125"),C(S,"fill","#23D959"),C(j,"d","M49.6099 155.74C49.4146 155.545 49.0981 155.545 48.9028 155.74L45.7208 158.922C45.5256 159.117 45.5256 159.434 45.7208 159.629C45.9161 159.825 46.2327 159.825 46.4279 159.629L49.2563 156.801L52.0848 159.629C52.28 159.825 52.5966 159.825 52.7919 159.629C52.9871 159.434 52.9871 159.117 52.7919 158.922L49.6099 155.74ZM49.7563 158.406L49.7563 156.094L48.7563 156.094L48.7563 158.406L49.7563 158.406Z"),C(j,"fill","black"),C(q,"x","266.863"),C(q,"y","154.706"),C(q,"width","19.8875"),C(q,"height","6.475"),C(q,"rx","3.2375"),C(q,"fill","#FF0000"),C(Z,"x","46.25"),C(Z,"y","32.375"),C(Z,"width","80.0125"),C(Z,"height","58.0438"),C(Z,"fill","#C4C4C4"),C(A,"x","46.25"),C(A,"y","90.6499"),C(A,"width","80.0125"),C(A,"height","58.0438"),C(A,"fill","#C4C4C4"),C(F,"x","126.494"),C(F,"y","32.375"),C(F,"width","80.0125"),C(F,"height","58.0438"),C(F,"fill","#C4C4C4"),C(B,"x","126.494"),C(B,"y","90.6499"),C(B,"width","80.0125"),C(B,"height","58.0438"),C(B,"fill","#C4C4C4"),C(N,"x","206.737"),C(N,"y","32.375"),C(N,"width","80.0125"),C(N,"height","58.0438"),C(N,"fill","#C4C4C4"),C(U,"x","206.737"),C(U,"y","90.6499"),C(U,"width","80.0125"),C(U,"height","58.0438"),C(U,"fill","#C4C4C4"),C(P,"class","preview svelte-1rz8yp6"),C(P,"width","333"),C(P,"viewBox","0 0 333 186"),C(P,"fill","none"),C(P,"xmlns","http://www.w3.org/2000/svg"),C(G,"type","radio"),C(G,"name","mode"),G.__value="all",G.value=G.__value,C(G,"class","svelte-1rz8yp6"),e[3][0].push(G),C(K,"class","modeTitle svelte-1rz8yp6"),C(M,"class","modesItem svelte-1rz8yp6"),C(tt,"width","333"),C(tt,"height","185.462"),C(tt,"fill","black"),C(et,"x","46.25"),C(et,"y","41.625"),C(et,"width","240.5"),C(et,"height","128.575"),C(et,"fill","#C4C4C4"),C(nt,"x","46.75"),C(nt,"y","8.82495"),C(nt,"width","39.0062"),C(nt,"height","28.1375"),C(nt,"fill","#C4C4C4"),C(nt,"stroke","black"),C(st,"x","86.7559"),C(st,"y","8.82495"),C(st,"width","39.2375"),C(st,"height","28.1375"),C(st,"fill","#C4C4C4"),C(st,"stroke","black"),C(ot,"x","126.994"),C(ot,"y","8.82495"),C(ot,"width","39.0062"),C(ot,"height","28.1375"),C(ot,"fill","#C4C4C4"),C(ot,"stroke","black"),C(rt,"x","167"),C(rt,"y","8.82495"),C(rt,"width","39.0062"),C(rt,"height","28.1375"),C(rt,"fill","#C4C4C4"),C(rt,"stroke","black"),C(it,"x","207.006"),C(it,"y","8.82495"),C(it,"width","39.2375"),C(it,"height","28.1375"),C(it,"fill","#C4C4C4"),C(it,"stroke","black"),C(lt,"x","247.244"),C(lt,"y","8.82495"),C(lt,"width","39.0062"),C(lt,"height","28.1375"),C(lt,"fill","#C4C4C4"),C(lt,"stroke","black"),C(ct,"cx","116.897"),C(ct,"cy","176.097"),C(ct,"r","2.42812"),C(ct,"fill","#C4C4C4"),C(at,"cx","116.897"),C(at,"cy","176.097"),C(at,"r","1.69687"),C(at,"fill","#FF0000"),C(at,"stroke","black"),C(ut,"x","46.25"),C(ut,"y","173.438"),C(ut,"width","6.24375"),C(ut,"height","4.625"),C(ut,"rx","2.3125"),C(ut,"fill","#23D959"),C(ht,"d","M49.6094 174.24C49.4142 174.045 49.0976 174.045 48.9023 174.24L45.7203 177.422C45.5251 177.617 45.5251 177.934 45.7203 178.129C45.9156 178.325 46.2322 178.325 46.4274 178.129L49.2559 175.301L52.0843 178.129C52.2795 178.325 52.5961 178.325 52.7914 178.129C52.9867 177.934 52.9867 177.617 52.7914 177.422L49.6094 174.24ZM49.7559 176.906L49.7559 174.594L48.7559 174.594L48.7559 176.906L49.7559 176.906Z"),C(ht,"fill","black"),C(dt,"x","266.862"),C(dt,"y","173.206"),C(dt,"width","19.8875"),C(dt,"height","6.475"),C(dt,"rx","3.2375"),C(dt,"fill","#FF0000"),C(pt,"d","M122.259 110H120.562V98.5918H114.252V110H112.564V97.2031H122.259V110ZM133.113 105.351C133.113 106.798 132.782 107.964 132.12 108.849C131.458 109.733 130.562 110.176 129.431 110.176C128.276 110.176 127.368 109.81 126.706 109.077V113.656H125.08V100.49H126.565L126.645 101.545C127.307 100.725 128.227 100.314 129.404 100.314C130.547 100.314 131.449 100.745 132.111 101.606C132.779 102.468 133.113 103.666 133.113 105.201V105.351ZM131.487 105.166C131.487 104.094 131.259 103.247 130.802 102.626C130.345 102.005 129.718 101.694 128.921 101.694C127.937 101.694 127.198 102.131 126.706 103.004V107.548C127.192 108.415 127.937 108.849 128.938 108.849C129.718 108.849 130.336 108.541 130.793 107.926C131.256 107.305 131.487 106.385 131.487 105.166ZM139.134 110.176C137.845 110.176 136.796 109.754 135.987 108.91C135.179 108.061 134.774 106.927 134.774 105.509V105.21C134.774 104.267 134.953 103.426 135.311 102.688C135.674 101.943 136.178 101.363 136.822 100.947C137.473 100.525 138.176 100.314 138.932 100.314C140.168 100.314 141.129 100.722 141.814 101.536C142.5 102.351 142.843 103.517 142.843 105.034V105.711H136.4C136.424 106.648 136.696 107.407 137.218 107.987C137.745 108.562 138.413 108.849 139.222 108.849C139.796 108.849 140.282 108.731 140.681 108.497C141.079 108.263 141.428 107.952 141.727 107.565L142.72 108.339C141.923 109.563 140.728 110.176 139.134 110.176ZM138.932 101.65C138.275 101.65 137.725 101.891 137.279 102.371C136.834 102.846 136.559 103.514 136.453 104.375H141.217V104.252C141.17 103.426 140.947 102.787 140.549 102.336C140.15 101.879 139.611 101.65 138.932 101.65ZM149.962 103.092C149.962 102.646 149.792 102.295 149.452 102.037C149.112 101.773 148.646 101.642 148.055 101.642C147.48 101.642 147 101.791 146.613 102.09C146.232 102.389 146.042 102.74 146.042 103.145H144.425C144.425 102.318 144.771 101.642 145.462 101.114C146.153 100.587 147.018 100.323 148.055 100.323C149.168 100.323 150.035 100.563 150.656 101.044C151.277 101.519 151.588 102.198 151.588 103.083C151.588 103.511 151.459 103.903 151.201 104.261C150.943 104.618 150.577 104.902 150.103 105.113C151.21 105.488 151.764 106.227 151.764 107.328C151.764 108.201 151.427 108.893 150.753 109.402C150.079 109.912 149.18 110.167 148.055 110.167C146.959 110.167 146.054 109.9 145.339 109.367C144.63 108.828 144.275 108.102 144.275 107.188H145.893C145.893 107.65 146.098 108.049 146.508 108.383C146.924 108.711 147.439 108.875 148.055 108.875C148.676 108.875 149.177 108.731 149.558 108.444C149.938 108.157 150.129 107.785 150.129 107.328C150.129 106.795 149.968 106.414 149.646 106.186C149.329 105.951 148.834 105.834 148.16 105.834H146.534V104.463H148.301C149.408 104.434 149.962 103.977 149.962 103.092ZM157.819 110.176C156.53 110.176 155.481 109.754 154.673 108.91C153.864 108.061 153.46 106.927 153.46 105.509V105.21C153.46 104.267 153.639 103.426 153.996 102.688C154.359 101.943 154.863 101.363 155.508 100.947C156.158 100.525 156.861 100.314 157.617 100.314C158.854 100.314 159.814 100.722 160.5 101.536C161.186 102.351 161.528 103.517 161.528 105.034V105.711H155.086C155.109 106.648 155.382 107.407 155.903 107.987C156.431 108.562 157.099 108.849 157.907 108.849C158.481 108.849 158.968 108.731 159.366 108.497C159.765 108.263 160.113 107.952 160.412 107.565L161.405 108.339C160.608 109.563 159.413 110.176 157.819 110.176ZM157.617 101.65C156.961 101.65 156.41 101.891 155.965 102.371C155.52 102.846 155.244 103.514 155.139 104.375H159.902V104.252C159.855 103.426 159.633 102.787 159.234 102.336C158.836 101.879 158.297 101.65 157.617 101.65ZM171.188 110H169.562V105.939H165.193V110H163.559V100.49H165.193V104.612H169.562V100.49H171.188V110ZM180.873 101.809H177.683V110H176.057V101.809H172.928V100.49H180.873V101.809ZM188.186 110C188.092 109.812 188.016 109.479 187.957 108.998C187.201 109.783 186.299 110.176 185.25 110.176C184.312 110.176 183.542 109.912 182.938 109.385C182.341 108.852 182.042 108.178 182.042 107.363C182.042 106.373 182.417 105.605 183.167 105.061C183.923 104.51 184.983 104.234 186.349 104.234H187.931V103.487C187.931 102.919 187.761 102.468 187.421 102.134C187.081 101.794 186.58 101.624 185.918 101.624C185.338 101.624 184.852 101.771 184.459 102.063C184.066 102.356 183.87 102.711 183.87 103.127H182.235C182.235 102.652 182.402 102.195 182.736 101.756C183.076 101.311 183.533 100.959 184.107 100.701C184.688 100.443 185.323 100.314 186.015 100.314C187.11 100.314 187.969 100.59 188.59 101.141C189.211 101.686 189.533 102.438 189.557 103.399V107.776C189.557 108.649 189.668 109.344 189.891 109.859V110H188.186ZM185.487 108.761C185.997 108.761 186.48 108.629 186.938 108.365C187.395 108.102 187.726 107.759 187.931 107.337V105.386H186.656C184.664 105.386 183.668 105.969 183.668 107.135C183.668 107.645 183.838 108.043 184.178 108.33C184.518 108.617 184.954 108.761 185.487 108.761ZM192.246 100.49H193.881V108.673H198.258V100.49H199.884V108.673H201.018L200.859 112.821H199.4V110H192.246V100.49ZM208.928 100.49H210.554V110H208.928V103.065L204.542 110H202.916V100.49H204.542V107.434L208.928 100.49ZM220.433 100.49V110H218.798V106.3H216.346L214.104 110H212.347L214.737 106.054C214.128 105.831 213.659 105.488 213.331 105.025C213.009 104.557 212.848 104.012 212.848 103.391C212.848 102.523 213.173 101.826 213.823 101.299C214.474 100.766 215.344 100.496 216.434 100.49H220.433ZM214.482 103.408C214.482 103.871 214.641 104.246 214.957 104.533C215.273 104.814 215.692 104.958 216.214 104.964H218.798V101.809H216.46C215.856 101.809 215.376 101.958 215.019 102.257C214.661 102.55 214.482 102.934 214.482 103.408Z"),C(pt,"fill","black"),C(Y,"class","preview svelte-1rz8yp6"),C(Y,"width","333"),C(Y,"viewBox","0 0 333 186"),C(Y,"fill","none"),C(Y,"xmlns","http://www.w3.org/2000/svg"),C(yt,"type","radio"),C(yt,"name","mode"),yt.__value="demo",yt.value=yt.__value,C(yt,"class","svelte-1rz8yp6"),e[3][0].push(yt),C(mt,"class","modeTitle svelte-1rz8yp6"),C(X,"class","modesItem svelte-1rz8yp6"),C(c,"class","modes svelte-1rz8yp6"),C(xt,"type","submit"),C(xt,"class","btn"),xt.disabled=bt=!e[0],C(Ct,"class","time svelte-1rz8yp6")},m(t,o){h(t,n,o),h(t,s,o),h(t,r,o),h(t,i,o),h(t,l,o),u(l,c),u(c,a),u(a,x),u(x,w),u(x,b),u(x,$),u(x,k),u(x,H),u(x,z),u(x,_),u(a,V),u(a,R),u(R,E),E.checked=E.__value===e[0],u(R,L),u(c,T),u(c,M),u(M,P),u(P,O),u(P,I),u(P,D),u(P,S),u(P,j),u(P,q),u(P,Z),u(P,A),u(P,F),u(P,B),u(P,N),u(P,U),u(M,Q),u(M,K),u(K,G),G.checked=G.__value===e[0],u(K,W),u(c,J),u(c,X),u(X,Y),u(Y,tt),u(Y,et),u(Y,nt),u(Y,st),u(Y,ot),u(Y,rt),u(Y,it),u(Y,lt),u(Y,ct),u(Y,at),u(Y,ut),u(Y,ht),u(Y,dt),u(Y,pt),u(X,ft),u(X,mt),u(mt,yt),yt.checked=yt.__value===e[0],u(mt,gt),u(l,vt),u(l,Ct),u(Ct,xt),u(xt,wt),$t||(kt=[g(E,"change",e[2]),g(G,"change",e[4]),g(yt,"change",e[5]),g(l,"submit",v(e[1]))],$t=!0)},p(t,[e]){1&e&&(E.checked=E.__value===t[0]),1&e&&(G.checked=G.__value===t[0]),1&e&&(yt.checked=yt.__value===t[0]),1&e&&bt!==(bt=!t[0])&&(xt.disabled=bt)},i:t,o:t,d(t){t&&d(n),t&&d(s),t&&d(r),t&&d(i),t&&d(l),e[3][0].splice(e[3][0].indexOf(E),1),e[3][0].splice(e[3][0].indexOf(G),1),e[3][0].splice(e[3][0].indexOf(yt),1),$t=!1,o(kt)}}}function Tt(t,e,n){let s;return[s,function(){Mt.push(`/set-time?mode=${s}`)},function(){s=this.__value,n(0,s)},[[]],function(){s=this.__value,n(0,s)},function(){s=this.__value,n(0,s)}]}const Mt=new $t({mode:"hash",routes:[{path:"/",component:class extends J{constructor(t){var e;super(),document.getElementById("svelte-b1qy9j-style")||((e=p("style")).id="svelte-b1qy9j-style",e.textContent="h1.svelte-b1qy9j{font-size:64px;font-weight:900;text-align:center;color:#4487ec}p.svelte-b1qy9j{font-size:24px;text-align:center;margin-top:60px}.go.svelte-b1qy9j{text-align:center}button.svelte-b1qy9j{background:#4487ec;box-shadow:0px 0px 12px 1px rgba(0, 0, 0, 0.2);border-radius:40px;color:#fff;border:0;font-size:24px;padding:18px 32px}",u(document.head,e)),W(this,t,Ht,kt,i,{})}},name:"Homepage"},{path:"/train-pick",component:class extends J{constructor(t){var e;super(),document.getElementById("svelte-1rz8yp6-style")||((e=p("style")).id="svelte-1rz8yp6-style",e.textContent="h1.svelte-1rz8yp6.svelte-1rz8yp6{font-size:24px;font-weight:900}h2.svelte-1rz8yp6.svelte-1rz8yp6{color:#4487ec;text-align:center}.modes.svelte-1rz8yp6.svelte-1rz8yp6{display:flex;flex-flow:row nowrap}.modesItem.svelte-1rz8yp6.svelte-1rz8yp6{flex-grow:1;flex-basis:0;border:10px solid transparent;vertical-align:top}.modeTitle.svelte-1rz8yp6.svelte-1rz8yp6{font-size:120%;display:inline-block;padding-top:12px}.modesItem.svelte-1rz8yp6 input.svelte-1rz8yp6{vertical-align:top;margin-top:4px}.preview.svelte-1rz8yp6.svelte-1rz8yp6{max-width:100%}.time.svelte-1rz8yp6.svelte-1rz8yp6{text-align:center;margin-top:40px}",u(document.head,e)),W(this,t,Tt,Lt,i,{})}},name:"TrainPick"},{path:"/set-time",component:class extends J{constructor(t){var e;super(),document.getElementById("svelte-1kl89tz-style")||((e=p("style")).id="svelte-1kl89tz-style",e.textContent="h1.svelte-1kl89tz{font-size:24px;font-weight:900}h2.svelte-1kl89tz{color:#4487ec;text-align:center}.description.svelte-1kl89tz{font-size:120%;max-width:600px;margin:30px auto}.options.svelte-1kl89tz{display:flex;flex-flow:row nowrap}.optionsItem.svelte-1kl89tz{flex-grow:1;flex-basis:0;border:10px solid transparent;vertical-align:top;text-align:center}.optionsLabel.svelte-1kl89tz{margin-top:10px}.start.svelte-1kl89tz{text-align:center;margin-top:40px}",u(document.head,e)),W(this,t,Et,Rt,i,{currentRoute:4})}},name:"SetTime"},{path:"/pitch",component:class extends J{constructor(t){var e;super(),document.getElementById("svelte-1rias0y-style")||((e=p("style")).id="svelte-1rias0y-style",e.textContent="h1.svelte-1rias0y{font-size:24px;font-weight:900;color:#fff}.video.svelte-1rias0y{background-color:#c4c4c4;position:relative}.media.svelte-1rias0y{max-width:100%;height:auto}.startTimeCount.svelte-1rias0y{display:flex;font-size:300%;font-weight:900;flex-direction:column;justify-content:center;color:#fff;position:absolute;text-align:center;height:100%;width:100%}.controls.svelte-1rias0y{padding-top:10px}.controlsRight.svelte-1rias0y{text-align:right;color:#fff}",u(document.head,e)),W(this,t,Vt,_t,i,{})}},name:"Pitch"}]});function Pt(t){let e,n,s;return n=new Ct({}),{c(){e=p("main"),Q(n.$$.fragment),C(e,"class","svelte-qs8n8")},m(t,o){h(t,e,o),K(n,e,null),s=!0},i(t){s||(N(n.$$.fragment,t),s=!0)},o(t){U(n.$$.fragment,t),s=!1},d(t){t&&d(e),G(n)}}}function Ot(t){let e,n;return e=new bt({props:{router:Mt,$$slots:{default:[Pt]},$$scope:{ctx:t}}}),{c(){Q(e.$$.fragment)},m(t,s){K(e,t,s),n=!0},p(t,[n]){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(N(e.$$.fragment,t),n=!0)},o(t){U(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}const It=new class extends J{constructor(t){var e;super(),document.getElementById("svelte-qs8n8-style")||((e=p("style")).id="svelte-qs8n8-style",e.textContent="main.svelte-qs8n8{padding:0 40px;max-width:800px;margin:0 auto}",u(document.head,e)),W(this,t,null,Ot,i,{})}}({target:document.body,props:{}});window.app=It})();