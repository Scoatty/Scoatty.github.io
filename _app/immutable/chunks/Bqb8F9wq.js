import{S as I,F as J,G as Q,H as R,I as W,t as P,U as b,J as o,K as D,k as q,L as X,M as k,N as p,b as ee,h as F,o as re,E as ae,O as te,P as ne,s as ie,Q as M,R as U,d as j,V as G,f as fe,W as se,X as ue,a as C,Y as le,Z as _e,_ as de,$ as ve,a0 as ce,a1 as be,a2 as ge,l as he,a3 as ye,a4 as oe,a5 as Pe,a6 as H,a7 as Re,w as K,a8 as Ee,a9 as Ie,aa as we}from"./BnX05_ru.js";function O(e,f=null,v){if(typeof e!="object"||e===null||I in e)return e;const d=k(e);if(d!==J&&d!==Q)return e;var n=new Map,u=p(e),g=R(0);u&&n.set("length",R(e.length));var y;return new Proxy(e,{defineProperty(s,r,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&X();var i=n.get(r);return i===void 0?(i=R(a.value),n.set(r,i)):o(i,O(a.value,y)),!0},deleteProperty(s,r){var a=n.get(r);if(a===void 0)r in s&&n.set(r,R(b));else{if(u&&typeof r=="string"){var i=n.get("length"),t=Number(r);Number.isInteger(t)&&t<i.v&&o(i,t)}o(a,b),Z(g)}return!0},get(s,r,a){var c;if(r===I)return e;var i=n.get(r),t=r in s;if(i===void 0&&(!t||(c=D(s,r))!=null&&c.writable)&&(i=R(O(t?s[r]:b,y)),n.set(r,i)),i!==void 0){var l=P(i);return l===b?void 0:l}return Reflect.get(s,r,a)},getOwnPropertyDescriptor(s,r){var a=Reflect.getOwnPropertyDescriptor(s,r);if(a&&"value"in a){var i=n.get(r);i&&(a.value=P(i))}else if(a===void 0){var t=n.get(r),l=t==null?void 0:t.v;if(t!==void 0&&l!==b)return{enumerable:!0,configurable:!0,value:l,writable:!0}}return a},has(s,r){var l;if(r===I)return!0;var a=n.get(r),i=a!==void 0&&a.v!==b||Reflect.has(s,r);if(a!==void 0||q!==null&&(!i||(l=D(s,r))!=null&&l.writable)){a===void 0&&(a=R(i?O(s[r],y):b),n.set(r,a));var t=P(a);if(t===b)return!1}return i},set(s,r,a,i){var w;var t=n.get(r),l=r in s;if(u&&r==="length")for(var c=a;c<t.v;c+=1){var E=n.get(c+"");E!==void 0?o(E,b):c in s&&(E=R(b),n.set(c+"",E))}t===void 0?(!l||(w=D(s,r))!=null&&w.writable)&&(t=R(void 0),o(t,O(a,y)),n.set(r,t)):(l=t.v!==b,o(t,O(a,y)));var h=Reflect.getOwnPropertyDescriptor(s,r);if(h!=null&&h.set&&h.set.call(i,a),!l){if(u&&typeof r=="string"){var T=n.get("length"),A=Number(r);Number.isInteger(A)&&A>=T.v&&o(T,A+1)}Z(g)}return!0},ownKeys(s){P(g);var r=Reflect.ownKeys(s).filter(t=>{var l=n.get(t);return l===void 0||l.v!==b});for(var[a,i]of n)i.v!==b&&!(a in s)&&r.push(a);return r},setPrototypeOf(){W()}})}function Z(e,f=1){o(e,e.v+f)}function $(e){return e!==null&&typeof e=="object"&&I in e?e[I]:e}function Te(e,f){return Object.is($(e),$(f))}function Ae(e,f,v=!1){F&&re();var d=e,n=null,u=null,g=b,y=v?ae:0,s=!1;const r=(i,t=!0)=>{s=!0,a(t,i)},a=(i,t)=>{if(g===(g=i))return;let l=!1;if(F){const c=d.data===te;!!g===c&&(d=ne(),ie(d),M(!1),l=!0)}g?(n?U(n):t&&(n=j(()=>t(d))),u&&G(u,()=>{u=null})):(u?U(u):t&&(u=j(()=>t(d))),n&&G(n,()=>{n=null})),l&&M(!0)};ee(()=>{s=!1,f(r),s||a(null,null)},y),F&&(d=fe)}function V(e,f){return e===f||(e==null?void 0:e[I])===f}function Ne(e={},f,v,d){return se(()=>{var n,u;return ue(()=>{n=u,u=[],C(()=>{e!==v(...u)&&(f(e,...u),n&&V(v(...n),e)&&f(null,...n))})}),()=>{le(()=>{u&&V(v(...u),e)&&f(null,...u)})}}),e}let m=!1;function Se(e){var f=m;try{return m=!1,[e(),m]}finally{m=f}}function z(e){for(var f=q,v=q;f!==null&&!(f.f&(oe|Pe));)f=f.parent;try{return H(f),e()}finally{H(v)}}function me(e,f,v,d){var B;var n=(v&Re)!==0,u=!he||(v&ye)!==0,g=(v&be)!==0,y=(v&Ie)!==0,s=!1,r;g?[r,s]=Se(()=>e[f]):r=e[f];var a=I in e||ge in e,i=g&&(((B=D(e,f))==null?void 0:B.set)??(a&&f in e&&(_=>e[f]=_)))||void 0,t=d,l=!0,c=!1,E=()=>(c=!0,l&&(l=!1,y?t=C(d):t=d),t);r===void 0&&d!==void 0&&(i&&u&&_e(),r=E(),i&&i(r));var h;if(u)h=()=>{var _=e[f];return _===void 0?E():(l=!0,c=!1,_)};else{var T=z(()=>(n?K:we)(()=>e[f]));T.f|=de,h=()=>{var _=P(T);return _!==void 0&&(t=void 0),_===void 0?t:_}}if(!(v&ve))return h;if(i){var A=e.$$legacy;return function(_,S){return arguments.length>0?((!u||!S||A||s)&&i(S?h():_),_):h()}}var w=!1,Y=!1,L=Ee(r),N=z(()=>K(()=>{var _=h(),S=P(L);return w?(w=!1,Y=!0,S):(Y=!1,L.v=_)}));return n||(N.equals=ce),function(_,S){if(arguments.length>0){const x=S?P(N):u&&g?O(_):_;return N.equals(x)||(w=!0,o(L,x),c&&t!==void 0&&(t=x),C(()=>P(N))),_}return P(N)}}export{O as a,Ne as b,Te as c,Ae as i,me as p};
