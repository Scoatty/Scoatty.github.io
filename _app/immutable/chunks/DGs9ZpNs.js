var Je=e=>{throw TypeError(e)};var Ct=(e,t,n)=>t.has(e)||Je("Cannot "+n);var A=(e,t,n)=>(Ct(e,t,"read from private field"),n?n.call(e):t.get(e)),x=(e,t,n)=>t.has(e)?Je("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n);import{n as Ie,ay as Ot,aq as C,t as O,J as N,ar as Nt}from"./BnX05_ru.js";import{a as jt,b as P}from"./CkIhmiUl.js";import{o as Xe}from"./CNdYjVYS.js";const B=[];function Ne(e,t=Ie){let n=null;const r=new Set;function a(o){if(Ot(e,o)&&(e=o,n)){const c=!B.length;for(const l of r)l[1](),B.push(l,e);if(c){for(let l=0;l<B.length;l+=2)B[l][0](B[l+1]);B.length=0}}}function s(o){a(o(e))}function i(o,c=Ie){const l=[o,c];return r.add(l),r.size===1&&(n=t(a,s)||Ie),o(e),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:s,subscribe:i}}new URL("sveltekit-internal://");function $t(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function Dt(e){return e.split("%25").map(decodeURI).join("%25")}function Ft(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function Ue({href:e}){return e.split("#")[0]}function Vt(e,t,n,r=!1){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return l=>(n(l),i[o](l));t();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];r&&s.push("hash");for(const i of s)Object.defineProperty(a,i,{get(){return t(),e[i]},enumerable:!0,configurable:!0});return a}function Bt(...e){let t=5381;for(const n of e)if(typeof n=="string"){let r=n.length;for(;r;)t=t*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)t=t*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}function qt(e){const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer}const Gt=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:(t==null?void 0:t.method)||"GET")!=="GET"&&Y.delete(je(e)),Gt(e,t));const Y=new Map;function Mt(e,t){const n=je(e,t),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&Y.set(n,{body:a,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=qt(a)),Promise.resolve(new Response(a,s))}return window.fetch(e,t)}function Ht(e,t,n){if(Y.size>0){const r=je(e,n),a=Y.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);Y.delete(r)}}return window.fetch(t,n)}function je(e,t){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t!=null&&t.headers||t!=null&&t.body){const a=[];t.headers&&a.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&a.push(t.body),r+=`[data-hash="${Bt(...a)}"]`}return r}const Kt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Wt(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${zt(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return t.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return t.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return Le(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return Le(String.fromCharCode(...c.slice(2).split("-").map(d=>parseInt(d,16))));const u=Kt.exec(c),[,p,y,f,m]=u;return t.push({name:f,matcher:m,optional:!!p,rest:!!y,chained:y?l===1&&i[0]==="":!1}),y?"(.*?)":p?"([^/]*)?":"([^/]+?)"}return Le(c)}).join("")}).join("")}/?$`),params:t}}function Yt(e){return!/^\([^)]+\)$/.test(e)}function zt(e){return e.slice(1).split("/").filter(Yt)}function Jt(e,t,n){const r={},a=e.slice(1),s=a.filter(o=>o!==void 0);let i=0;for(let o=0;o<t.length;o+=1){const c=t[o];let l=a[o-i];if(c.chained&&c.rest&&i&&(l=a.slice(o-i,o+1).filter(u=>u).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const u=t[o+1],p=a[o+1];u&&!u.rest&&u.optional&&p&&c.chained&&(i=0),!u&&!p&&Object.keys(r).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function Le(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Xt({nodes:e,server_loads:t,dictionary:n,matchers:r}){const a=new Set(t);return Object.entries(n).map(([o,[c,l,u]])=>{const{pattern:p,params:y}=Wt(o),f={id:o,exec:m=>{const d=p.exec(m);if(d)return Jt(d,y,r)},errors:[1,...u||[]].map(m=>e[m]),layouts:[0,...l||[]].map(i),leaf:s(c)};return f.errors.length=f.layouts.length=Math.max(f.errors.length,f.layouts.length),f});function s(o){const c=o<0;return c&&(o=~o),[c,e[o]]}function i(o){return o===void 0?o:[a.has(o),e[o]]}}function ft(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function Ze(e,t,n=JSON.stringify){const r=n(t);try{sessionStorage[e]=r}catch{}}const Zt="1741417401222",ut="sveltekit:snapshot",ht="sveltekit:scroll",dt="sveltekit:states",Qt="sveltekit:pageurl",G="sveltekit:history",X="sveltekit:navigation",he={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},ue=location.origin;function pt(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function $e(){return{x:pageXOffset,y:pageYOffset}}function q(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const Qe={...he,"":he.hover};function gt(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function mt(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=gt(e)}}function Pe(e,t,n){let r;try{if(r=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI),n&&r.hash.match(/^#[^/]/)){const o=location.hash.split("#")[1]||"/";r.hash=`#${o}${r.hash}`}}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,s=!r||!!a||ve(r,t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(r==null?void 0:r.origin)===ue&&e.hasAttribute("download");return{url:r,external:s,target:a,download:i}}function de(e){let t=null,n=null,r=null,a=null,s=null,i=null,o=e;for(;o&&o!==document.documentElement;)r===null&&(r=q(o,"preload-code")),a===null&&(a=q(o,"preload-data")),t===null&&(t=q(o,"keepfocus")),n===null&&(n=q(o,"noscroll")),s===null&&(s=q(o,"reload")),i===null&&(i=q(o,"replacestate")),o=gt(o);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Qe[r??"off"],preload_data:Qe[a??"off"],keepfocus:c(t),noscroll:c(n),reload:c(s),replace_state:c(i)}}function et(e){const t=Ne(e);let n=!0;function r(){n=!0,t.update(i=>i)}function a(i){n=!1,t.set(i)}function s(i){let o;return t.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:r,set:a,subscribe:s}}const yt={v:()=>{}};function en(){const{set:e,subscribe:t}=Ne(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${jt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Zt;return i&&(e(!0),yt.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:t,check:r}}function ve(e,t,n){return e.origin!==ue||!e.pathname.startsWith(t)?!0:n?!(e.pathname===t+"/"||e.pathname===t+"/index.html"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===t):!1}function tt(e){const t=nn(e),n=new ArrayBuffer(t.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,t.charCodeAt(a));return n}const tn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function nn(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",n=0,r=0;for(let a=0;a<e.length;a++)n<<=6,n|=tn.indexOf(e[a]),r+=6,r===24&&(t+=String.fromCharCode((n&16711680)>>16),t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,t+=String.fromCharCode(n)):r===18&&(n>>=2,t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255)),t}const rn=-1,an=-2,on=-3,sn=-4,cn=-5,ln=-6;function fn(e,t){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function a(s,i=!1){if(s===rn)return;if(s===on)return NaN;if(s===sn)return 1/0;if(s===cn)return-1/0;if(s===ln)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const o=n[s];if(!o||typeof o!="object")r[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],l=t==null?void 0:t[c];if(l)return r[s]=l(a(o[1]));switch(c){case"Date":r[s]=new Date(o[1]);break;case"Set":const u=new Set;r[s]=u;for(let f=1;f<o.length;f+=1)u.add(a(o[f]));break;case"Map":const p=new Map;r[s]=p;for(let f=1;f<o.length;f+=2)p.set(a(o[f]),a(o[f+1]));break;case"RegExp":r[s]=new RegExp(o[1],o[2]);break;case"Object":r[s]=Object(o[1]);break;case"BigInt":r[s]=BigInt(o[1]);break;case"null":const y=Object.create(null);r[s]=y;for(let f=1;f<o.length;f+=2)y[o[f]]=a(o[f+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const f=globalThis[c],m=o[1],d=tt(m),h=new f(d);r[s]=h;break}case"ArrayBuffer":{const f=o[1],m=tt(f);r[s]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);r[s]=c;for(let l=0;l<o.length;l+=1){const u=o[l];u!==an&&(c[l]=a(u))}}else{const c={};r[s]=c;for(const l in o){const u=o[l];c[l]=a(u)}}return r[s]}return a(0)}const wt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...wt];const un=new Set([...wt]);[...un];function hn(e){return e.filter(t=>t!=null)}class Ae{constructor(t,n){this.status=t,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class De{constructor(t,n){this.status=t,this.location=n}}class Fe extends Error{constructor(t,n,r){super(r),this.status=t,this.text=n}}const dn="x-sveltekit-invalidated",pn="x-sveltekit-trailing-slash";function pe(e){return e instanceof Ae||e instanceof Fe?e.status:500}function gn(e){return e instanceof Fe?e.text:"Internal Error"}let U,Z,Te;const mn=Xe.toString().includes("$$")||/function \w+\(\) \{\}/.test(Xe.toString());var te,ne,re,ae,oe,se,ie,ce,it,le,ct,fe,lt;mn?(U={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},Z={current:null},Te={current:!1}):(U=new(it=class{constructor(){x(this,te,C({}));x(this,ne,C(null));x(this,re,C(null));x(this,ae,C({}));x(this,oe,C({id:null}));x(this,se,C({}));x(this,ie,C(-1));x(this,ce,C(new URL("https://example.com")))}get data(){return O(A(this,te))}set data(t){N(A(this,te),t)}get form(){return O(A(this,ne))}set form(t){N(A(this,ne),t)}get error(){return O(A(this,re))}set error(t){N(A(this,re),t)}get params(){return O(A(this,ae))}set params(t){N(A(this,ae),t)}get route(){return O(A(this,oe))}set route(t){N(A(this,oe),t)}get state(){return O(A(this,se))}set state(t){N(A(this,se),t)}get status(){return O(A(this,ie))}set status(t){N(A(this,ie),t)}get url(){return O(A(this,ce))}set url(t){N(A(this,ce),t)}},te=new WeakMap,ne=new WeakMap,re=new WeakMap,ae=new WeakMap,oe=new WeakMap,se=new WeakMap,ie=new WeakMap,ce=new WeakMap,it),Z=new(ct=class{constructor(){x(this,le,C(null))}get current(){return O(A(this,le))}set current(t){N(A(this,le),t)}},le=new WeakMap,ct),Te=new(lt=class{constructor(){x(this,fe,C(!1))}get current(){return O(A(this,fe))}set current(t){N(A(this,fe),t)}},fe=new WeakMap,lt),yt.v=()=>Te.current=!0);function yn(e){Object.assign(U,e)}const wn="/__data.json",_n=".html__data.json";function bn(e){return e.endsWith(".html")?e.replace(/\.html$/,_n):e.replace(/\/$/,"")+wn}const vn=new Set(["icon","shortcut icon","apple-touch-icon"]),V=ft(ht)??{},Q=ft(ut)??{},$={url:et({}),page:et({}),navigating:Ne(null),updated:en()};function Ve(e){V[e]=$e()}function An(e,t){let n=e+1;for(;V[n];)delete V[n],n+=1;for(n=t+1;Q[n];)delete Q[n],n+=1}function H(e){return location.href=e.href,new Promise(()=>{})}async function _t(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(P||"/");e&&await e.update()}}function nt(){}let Be,Ce,ge,j,Oe,S;const me=[],ye=[];let L=null;const bt=new Set,Sn=new Set,z=new Set;let b={branch:[],error:null,url:null},qe=!1,we=!1,rt=!0,ee=!1,K=!1,vt=!1,Ge=!1,At,R,T,F;const J=new Set;async function Gn(e,t,n){var a,s,i,o;document.URL!==location.href&&(location.href=location.href),S=e,await((s=(a=e.hooks).init)==null?void 0:s.call(a)),Be=Xt(e),j=document.documentElement,Oe=t,Ce=e.nodes[0],ge=e.nodes[1],Ce(),ge(),R=(i=history.state)==null?void 0:i[G],T=(o=history.state)==null?void 0:o[X],R||(R=T=Date.now(),history.replaceState({...history.state,[G]:R,[X]:T},""));const r=V[R];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await On(Oe,n):xn(S.hash?Pt(new URL(location.href)):location.href,{replaceState:!0}),Cn()}function En(){me.length=0,Ge=!1}function St(e){ye.some(t=>t==null?void 0:t.snapshot)&&(Q[e]=ye.map(t=>{var n;return(n=t==null?void 0:t.snapshot)==null?void 0:n.capture()}))}function Et(e){var t;(t=Q[e])==null||t.forEach((n,r)=>{var a,s;(s=(a=ye[r])==null?void 0:a.snapshot)==null||s.restore(n)})}function at(){Ve(R),Ze(ht,V),St(T),Ze(ut,Q)}async function Me(e,t,n,r){return W({type:"goto",url:pt(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:r,accept:()=>{t.invalidateAll&&(Ge=!0),t.invalidate&&t.invalidate.forEach(Pn)}})}async function kn(e){if(e.id!==(L==null?void 0:L.id)){const t={};J.add(t),L={id:e.id,token:t,promise:Rt({...e,preload:t}).then(n=>(J.delete(t),n.type==="loaded"&&n.state.error&&(L=null),n))}}return L.promise}async function xe(e){var n;const t=(n=await Ee(e,!1))==null?void 0:n.route;t&&await Promise.all([...t.layouts,t.leaf].map(r=>r==null?void 0:r[1]()))}function kt(e,t,n){var s;b=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(U,e.props.page),At=new S.root({target:t,props:{...e.props,stores:$,components:ye},hydrate:n,sync:!1}),Et(T);const a={from:null,to:{params:b.params,route:{id:((s=b.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};z.forEach(i=>i(a)),we=!0}function _e({url:e,params:t,branch:n,status:r,error:a,route:s,form:i}){let o="never";if(P&&(e.pathname===P||e.pathname===P+"/"))o="always";else for(const f of n)(f==null?void 0:f.slash)!==void 0&&(o=f.slash);e.pathname=$t(e.pathname,o),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:a,route:s},props:{constructors:hn(n).map(f=>f.node.component),page:We(U)}};i!==void 0&&(c.props.form=i);let l={},u=!U,p=0;for(let f=0;f<Math.max(n.length,b.branch.length);f+=1){const m=n[f],d=b.branch[f];(m==null?void 0:m.data)!==(d==null?void 0:d.data)&&(u=!0),m&&(l={...l,...m.data},u&&(c.props[`data_${p}`]=l),p+=1)}return(!b.url||e.href!==b.url.href||b.error!==a||i!==void 0&&i!==U.form||u)&&(c.props.page={error:a,params:t,route:{id:(s==null?void 0:s.id)??null},state:{},status:r,url:new URL(e),form:i??null,data:u?l:U.data}),c}async function He({loader:e,parent:t,url:n,params:r,route:a,server_data_node:s}){var u,p,y;let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if((u=l.universal)!=null&&u.load){let f=function(...d){for(const h of d){const{href:w}=new URL(h,n);c.dependencies.add(w)}};const m={route:new Proxy(a,{get:(d,h)=>(o&&(c.route=!0),d[h])}),params:new Proxy(r,{get:(d,h)=>(o&&c.params.add(h),d[h])}),data:(s==null?void 0:s.data)??null,url:Vt(n,()=>{o&&(c.url=!0)},d=>{o&&c.search_params.add(d)},S.hash),async fetch(d,h){let w;d instanceof Request?(w=d.url,h={body:d.method==="GET"||d.method==="HEAD"?void 0:await d.blob(),cache:d.cache,credentials:d.credentials,headers:[...d.headers].length?d.headers:void 0,integrity:d.integrity,keepalive:d.keepalive,method:d.method,mode:d.mode,redirect:d.redirect,referrer:d.referrer,referrerPolicy:d.referrerPolicy,signal:d.signal,...h}):w=d;const E=new URL(w,n);return o&&f(E.href),E.origin===n.origin&&(w=E.href.slice(n.origin.length)),we?Ht(w,E.href,h):Mt(w,h)},setHeaders:()=>{},depends:f,parent(){return o&&(c.parent=!0),t()},untrack(d){o=!1;try{return d()}finally{o=!0}}};i=await l.universal.load.call(null,m)??null}return{node:l,loader:e,server:s,universal:(p=l.universal)!=null&&p.load?{type:"data",data:i,uses:c}:null,data:i??(s==null?void 0:s.data)??null,slash:((y=l.universal)==null?void 0:y.trailingSlash)??(s==null?void 0:s.slash)}}function ot(e,t,n,r,a,s){if(Ge)return!0;if(!a)return!1;if(a.parent&&e||a.route&&t||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(s[i]!==b.params[i])return!0;for(const i of a.dependencies)if(me.some(o=>o(new URL(i))))return!0;return!1}function Ke(e,t){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?t??null:null}function Rn(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const r of n){const a=e.searchParams.getAll(r),s=t.searchParams.getAll(r);a.every(i=>s.includes(i))&&s.every(i=>a.includes(i))&&n.delete(r)}return n}function st({error:e,url:t,route:n,params:r}){return{type:"loaded",state:{error:e,url:t,route:n,params:r,branch:[]},props:{page:We(U),constructors:[]}}}async function Rt({id:e,invalidating:t,url:n,params:r,route:a,preload:s}){if((L==null?void 0:L.id)===e)return J.delete(L.token),L.promise;const{errors:i,layouts:o,leaf:c}=a,l=[...o,c];i.forEach(g=>g==null?void 0:g().catch(()=>{})),l.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let u=null;const p=b.url?e!==be(b.url):!1,y=b.route?a.id!==b.route.id:!1,f=Rn(b.url,n);let m=!1;const d=l.map((g,_)=>{var D;const v=b.branch[_],k=!!(g!=null&&g[0])&&((v==null?void 0:v.loader)!==g[1]||ot(m,y,p,f,(D=v.server)==null?void 0:D.uses,r));return k&&(m=!0),k});if(d.some(Boolean)){try{u=await Lt(n,d)}catch(g){const _=await M(g,{url:n,params:r,route:{id:e}});return J.has(s)?st({error:_,url:n,params:r,route:a}):Se({status:pe(g),error:_,url:n,route:a})}if(u.type==="redirect")return u}const h=u==null?void 0:u.nodes;let w=!1;const E=l.map(async(g,_)=>{var ke;if(!g)return;const v=b.branch[_],k=h==null?void 0:h[_];if((!k||k.type==="skip")&&g[1]===(v==null?void 0:v.loader)&&!ot(w,y,p,f,(ke=v.universal)==null?void 0:ke.uses,r))return v;if(w=!0,(k==null?void 0:k.type)==="error")throw k;return He({loader:g[1],url:n,params:r,route:a,parent:async()=>{var ze;const Ye={};for(let Re=0;Re<_;Re+=1)Object.assign(Ye,(ze=await E[Re])==null?void 0:ze.data);return Ye},server_data_node:Ke(k===void 0&&g[0]?{type:"skip"}:k??null,g[0]?v==null?void 0:v.server:void 0)})});for(const g of E)g.catch(()=>{});const I=[];for(let g=0;g<l.length;g+=1)if(l[g])try{I.push(await E[g])}catch(_){if(_ instanceof De)return{type:"redirect",location:_.location};if(J.has(s))return st({error:await M(_,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let v=pe(_),k;if(h!=null&&h.includes(_))v=_.status??v,k=_.error;else if(_ instanceof Ae)k=_.body;else{if(await $.updated.check())return await _t(),await H(n);k=await M(_,{params:r,url:n,route:{id:a.id}})}const D=await In(g,I,i);return D?_e({url:n,params:r,branch:I.slice(0,D.idx).concat(D.node),status:v,error:k,route:a}):await Ut(n,{id:a.id},k,v)}else I.push(void 0);return _e({url:n,params:r,branch:I,status:200,error:null,route:a,form:t?void 0:null})}async function In(e,t,n){for(;e--;)if(n[e]){let r=e;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function Se({status:e,error:t,url:n,route:r}){const a={};let s=null;if(S.server_loads[0]===0)try{const o=await Lt(n,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(n.origin!==ue||n.pathname!==location.pathname||qe)&&await H(n)}try{const o=await He({loader:Ce,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Ke(s)}),c={node:await ge(),loader:ge,universal:null,server:null,data:null};return _e({url:n,params:a,branch:[o,c],status:e,error:t,route:null})}catch(o){if(o instanceof De)return Me(new URL(o.location,location.href),{},0);throw o}}function Un(e){let t;try{if(t=S.hooks.reroute({url:new URL(e)})??e,typeof t=="string"){const n=new URL(e);S.hash?n.hash=t:n.pathname=t,t=n}}catch{return}return t}async function Ee(e,t){if(e&&!ve(e,P,S.hash)){const n=Un(e);if(!n)return;const r=Ln(n);for(const a of Be){const s=a.exec(r);if(s)return{id:be(e),invalidating:t,route:a,params:Ft(s),url:e}}}}function Ln(e){return Dt(S.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(P.length))||"/"}function be(e){return(S.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function It({url:e,type:t,intent:n,delta:r}){let a=!1;const s=xt(b,n,e,t);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{a=!0,s.reject(new Error("navigation cancelled"))}};return ee||bt.forEach(o=>o(i)),a?null:s}async function W({type:e,url:t,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:l=nt,block:u=nt}){const p=F;F=c;const y=await Ee(t,!1),f=It({url:t,type:e,delta:n==null?void 0:n.delta,intent:y});if(!f){u(),F===c&&(F=p);return}const m=R,d=T;l(),ee=!0,we&&$.navigating.set(Z.current=f.navigation);let h=y&&await Rt(y);if(!h){if(ve(t,P,S.hash))return await H(t);h=await Ut(t,{id:null},await M(new Fe(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(y==null?void 0:y.url)||t,F!==c)return f.reject(new Error("navigation aborted")),!1;if(h.type==="redirect")if(o>=20)h=await Se({status:500,error:await M(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return Me(new URL(h.location,t).href,{},o+1,c),!1;else h.props.page.status>=400&&await $.updated.check()&&(await _t(),await H(t));if(En(),Ve(m),St(d),h.props.page.url.pathname!==t.pathname&&(t.pathname=h.props.page.url.pathname),i=n?n.state:i,!n){const g=s?0:1,_={[G]:R+=g,[X]:T+=g,[dt]:i};(s?history.replaceState:history.pushState).call(history,_,"",t),s||An(R,T)}if(L=null,h.props.page.state=i,we){b=h.state,h.props.page&&(h.props.page.url=t);const g=(await Promise.all(Array.from(Sn,_=>_(f.navigation)))).filter(_=>typeof _=="function");if(g.length>0){let _=function(){g.forEach(v=>{z.delete(v)})};g.push(_),g.forEach(v=>{z.add(v)})}At.$set(h.props),yn(h.props.page),vt=!0}else kt(h,Oe,!1);const{activeElement:w}=document;await Nt();const E=n?n.scroll:a?$e():null;if(rt){const g=t.hash&&document.getElementById(decodeURIComponent(S.hash?t.hash.split("#")[2]??"":t.hash.slice(1)));E?scrollTo(E.x,E.y):g?g.scrollIntoView():scrollTo(0,0)}const I=document.activeElement!==w&&document.activeElement!==document.body;!r&&!I&&Nn(),rt=!0,h.props.page&&Object.assign(U,h.props.page),ee=!1,e==="popstate"&&Et(T),f.fulfil(void 0),z.forEach(g=>g(f.navigation)),$.navigating.set(Z.current=null)}async function Ut(e,t,n,r){return e.origin===ue&&e.pathname===location.pathname&&!qe?await Se({status:r,error:n,url:e,route:t}):await H(e)}function Tn(){let e,t;j.addEventListener("mousemove",i=>{const o=i.target;clearTimeout(e),e=setTimeout(()=>{a(o,2)},20)});function n(i){i.defaultPrevented||a(i.composedPath()[0],1)}j.addEventListener("mousedown",n),j.addEventListener("touchstart",n,{passive:!0});const r=new IntersectionObserver(i=>{for(const o of i)o.isIntersecting&&(xe(new URL(o.target.href)),r.unobserve(o.target))},{threshold:0});async function a(i,o){const c=mt(i,j);if(!c||c===t)return;t=c;const{url:l,external:u,download:p}=Pe(c,P,S.hash);if(u||p)return;const y=de(c),f=l&&be(b.url)===be(l);if(!y.reload&&!f)if(o<=y.preload_data){const m=await Ee(l,!1);m&&kn(m)}else o<=y.preload_code&&xe(l)}function s(){r.disconnect();for(const i of j.querySelectorAll("a")){const{url:o,external:c,download:l}=Pe(i,P,S.hash);if(c||l)continue;const u=de(i);u.reload||(u.preload_code===he.viewport&&r.observe(i),u.preload_code===he.eager&&xe(o))}}z.add(s),s()}function M(e,t){if(e instanceof Ae)return e.body;const n=pe(e),r=gn(e);return S.hooks.handleError({error:e,event:t,status:n,message:r})??{message:r}}function xn(e,t={}){return e=new URL(pt(e)),e.origin!==ue?Promise.reject(new Error("goto: invalid URL")):Me(e,t,0)}function Pn(e){if(typeof e=="function")me.push(e);else{const{href:t}=new URL(e,location.href);me.push(n=>n.href===t)}}function Cn(){var t;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(at(),!ee){const a=xt(b,void 0,null,"leave"),s={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};bt.forEach(i=>i(s))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&at()}),(t=navigator.connection)!=null&&t.saveData||Tn(),j.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=mt(n.composedPath()[0],j);if(!r)return;const{url:a,external:s,target:i,download:o}=Pe(r,P,S.hash);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=de(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||o)return;const[u,p]=(S.hash?a.hash.replace(/^#/,""):a.href).split("#"),y=u===Ue(location);if(s||c.reload&&(!y||!p)){It({url:a,type:"link"})?ee=!0:n.preventDefault();return}if(p!==void 0&&y){const[,f]=b.url.href.split("#");if(f===p){if(n.preventDefault(),p===""||p==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const m=r.ownerDocument.getElementById(decodeURIComponent(p));m&&(m.scrollIntoView(),m.focus())}return}if(K=!0,Ve(R),e(a),!c.replace_state)return;K=!1}n.preventDefault(),await new Promise(f=>{requestAnimationFrame(()=>{setTimeout(f,0)}),setTimeout(f,100)}),W({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),j.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const o=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(ve(o,P,!1))return;const c=n.target,l=de(c);if(l.reload)return;n.preventDefault(),n.stopPropagation();const u=new FormData(c),p=a==null?void 0:a.getAttribute("name");p&&u.append(p,(a==null?void 0:a.getAttribute("value"))??""),o.search=new URLSearchParams(u).toString(),W({type:"form",url:o,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??o.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[G]){const a=n.state[G];if(F={},a===R)return;const s=V[a],i=n.state[dt]??{},o=new URL(n.state[Qt]??location.href),c=n.state[X],l=b.url?Ue(location)===Ue(b.url):!1;if(c===T&&(vt||l)){i!==U.state&&(U.state=i),e(o),V[R]=$e(),s&&scrollTo(s.x,s.y),R=a;return}const p=a-R;await W({type:"popstate",url:o,popped:{state:i,scroll:s,delta:p},accept:()=>{R=a,T=c},block:()=>{history.go(-p)},nav_token:F})}else if(!K){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{K?(K=!1,history.replaceState({...history.state,[G]:++R,[X]:T},"",location.href)):S.hash&&b.url.hash===location.hash&&W({type:"goto",url:Pt(b.url)})});for(const n of document.querySelectorAll("link"))vn.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&$.navigating.set(Z.current=null)});function e(n){b.url=U.url=n,$.page.set(We(U)),$.page.notify()}}async function On(e,{status:t=200,error:n,node_ids:r,params:a,route:s,server_route:i,data:o,form:c}){qe=!0;const l=new URL(location.href);let u;({params:a={},route:s={id:null}}=await Ee(l,!1)||{}),u=Be.find(({id:f})=>f===s.id);let p,y=!0;try{const f=r.map(async(d,h)=>{const w=o[h];return w!=null&&w.uses&&(w.uses=Tt(w.uses)),He({loader:S.nodes[d],url:l,params:a,route:s,parent:async()=>{const E={};for(let I=0;I<h;I+=1)Object.assign(E,(await f[I]).data);return E},server_data_node:Ke(w)})}),m=await Promise.all(f);if(u){const d=u.layouts;for(let h=0;h<d.length;h++)d[h]||m.splice(h,0,void 0)}p=_e({url:l,params:a,branch:m,status:t,error:n,form:c,route:u??null})}catch(f){if(f instanceof De){await H(new URL(f.location,location.href));return}p=await Se({status:pe(f),error:await M(f,{url:l,params:a,route:s}),url:l,route:s}),e.textContent="",y=!1}p.props.page&&(p.props.page.state={}),kt(p,e,y)}async function Lt(e,t){var s;const n=new URL(e);n.pathname=bn(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(pn,"1"),n.searchParams.append(dn,t.map(i=>i?"1":"0").join(""));const r=window.fetch,a=await r(n.href,{});if(!a.ok){let i;throw(s=a.headers.get("content-type"))!=null&&s.includes("application/json")?i=await a.json():a.status===404?i="Not Found":a.status===500&&(i="Internal Error"),new Ae(a.status,i)}return new Promise(async i=>{var y;const o=new Map,c=a.body.getReader(),l=new TextDecoder;function u(f){return fn(f,{...S.decoders,Promise:m=>new Promise((d,h)=>{o.set(m,{fulfil:d,reject:h})})})}let p="";for(;;){const{done:f,value:m}=await c.read();if(f&&!p)break;for(p+=!m&&p?`
`:l.decode(m,{stream:!0});;){const d=p.indexOf(`
`);if(d===-1)break;const h=JSON.parse(p.slice(0,d));if(p=p.slice(d+1),h.type==="redirect")return i(h);if(h.type==="data")(y=h.nodes)==null||y.forEach(w=>{(w==null?void 0:w.type)==="data"&&(w.uses=Tt(w.uses),w.data=u(w.data))}),i(h);else if(h.type==="chunk"){const{id:w,data:E,error:I}=h,g=o.get(w);o.delete(w),I?g.reject(u(I)):g.fulfil(u(E))}}}})}function Tt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function Nn(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let s=0;s<r.rangeCount;s+=1)a.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===a.length){for(let s=0;s<r.rangeCount;s+=1){const i=a[s],o=r.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}r.removeAllRanges()}})}}}function xt(e,t,n,r){var c,l;let a,s;const i=new Promise((u,p)=>{a=u,s=p});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:n&&{params:(t==null?void 0:t.params)??null,route:{id:((l=t==null?void 0:t.route)==null?void 0:l.id)??null},url:n},willUnload:!t,type:r,complete:i},fulfil:a,reject:s}}function We(e){return{data:e.data,error:e.error,form:e.form,params:e.params,route:e.route,state:e.state,status:e.status,url:e.url}}function Pt(e){const t=new URL(e);return t.hash=decodeURIComponent(e.hash),t}export{Gn as a,U as p,$ as s};
