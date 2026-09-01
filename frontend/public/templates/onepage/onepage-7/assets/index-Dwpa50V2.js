(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Ky(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ad={exports:{}},Po={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg;function Qy(){if(Hg)return Po;Hg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Po.Fragment=e,Po.jsx=i,Po.jsxs=i,Po}var Gg;function Jy(){return Gg||(Gg=1,ad.exports=Qy()),ad.exports}var A=Jy(),sd={exports:{}},rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function $y(){if(Vg)return rt;Vg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function b(z){return z===null||typeof z!="object"?null:(z=g&&z[g]||z["@@iterator"],typeof z=="function"?z:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,S={};function _(z,j,be){this.props=z,this.context=j,this.refs=S,this.updater=be||T}_.prototype.isReactComponent={},_.prototype.setState=function(z,j){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,j,"setState")},_.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function U(){}U.prototype=_.prototype;function I(z,j,be){this.props=z,this.context=j,this.refs=S,this.updater=be||T}var C=I.prototype=new U;C.constructor=I,N(C,_.prototype),C.isPureReactComponent=!0;var F=Array.isArray;function D(){}var O={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function P(z,j,be){var Ae=be.ref;return{$$typeof:o,type:z,key:j,ref:Ae!==void 0?Ae:null,props:be}}function k(z,j){return P(z.type,j,z.props)}function V(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function Q(z){var j={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(be){return j[be]})}var he=/\/+/g;function _e(z,j){return typeof z=="object"&&z!==null&&z.key!=null?Q(""+z.key):j.toString(36)}function J(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(D,D):(z.status="pending",z.then(function(j){z.status==="pending"&&(z.status="fulfilled",z.value=j)},function(j){z.status==="pending"&&(z.status="rejected",z.reason=j)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function B(z,j,be,Ae,Le){var se=typeof z;(se==="undefined"||se==="boolean")&&(z=null);var ye=!1;if(z===null)ye=!0;else switch(se){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(z.$$typeof){case o:case e:ye=!0;break;case y:return ye=z._init,B(ye(z._payload),j,be,Ae,Le)}}if(ye)return Le=Le(z),ye=Ae===""?"."+_e(z,0):Ae,F(Le)?(be="",ye!=null&&(be=ye.replace(he,"$&/")+"/"),B(Le,j,be,"",function(tt){return tt})):Le!=null&&(V(Le)&&(Le=k(Le,be+(Le.key==null||z&&z.key===Le.key?"":(""+Le.key).replace(he,"$&/")+"/")+ye)),j.push(Le)),1;ye=0;var Se=Ae===""?".":Ae+":";if(F(z))for(var Be=0;Be<z.length;Be++)Ae=z[Be],se=Se+_e(Ae,Be),ye+=B(Ae,j,be,se,Le);else if(Be=b(z),typeof Be=="function")for(z=Be.call(z),Be=0;!(Ae=z.next()).done;)Ae=Ae.value,se=Se+_e(Ae,Be++),ye+=B(Ae,j,be,se,Le);else if(se==="object"){if(typeof z.then=="function")return B(J(z),j,be,Ae,Le);throw j=String(z),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return ye}function G(z,j,be){if(z==null)return z;var Ae=[],Le=0;return B(z,Ae,"","",function(se){return j.call(be,se,Le++)}),Ae}function ee(z){if(z._status===-1){var j=z._result;j=j(),j.then(function(be){(z._status===0||z._status===-1)&&(z._status=1,z._result=be)},function(be){(z._status===0||z._status===-1)&&(z._status=2,z._result=be)}),z._status===-1&&(z._status=0,z._result=j)}if(z._status===1)return z._result.default;throw z._result}var me=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},Ee={map:G,forEach:function(z,j,be){G(z,function(){j.apply(this,arguments)},be)},count:function(z){var j=0;return G(z,function(){j++}),j},toArray:function(z){return G(z,function(j){return j})||[]},only:function(z){if(!V(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return rt.Activity=v,rt.Children=Ee,rt.Component=_,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=I,rt.StrictMode=s,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,rt.__COMPILER_RUNTIME={__proto__:null,c:function(z){return O.H.useMemoCache(z)}},rt.cache=function(z){return function(){return z.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(z,j,be){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Ae=N({},z.props),Le=z.key;if(j!=null)for(se in j.key!==void 0&&(Le=""+j.key),j)!E.call(j,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&j.ref===void 0||(Ae[se]=j[se]);var se=arguments.length-2;if(se===1)Ae.children=be;else if(1<se){for(var ye=Array(se),Se=0;Se<se;Se++)ye[Se]=arguments[Se+2];Ae.children=ye}return P(z.type,Le,Ae)},rt.createContext=function(z){return z={$$typeof:d,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},rt.createElement=function(z,j,be){var Ae,Le={},se=null;if(j!=null)for(Ae in j.key!==void 0&&(se=""+j.key),j)E.call(j,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(Le[Ae]=j[Ae]);var ye=arguments.length-2;if(ye===1)Le.children=be;else if(1<ye){for(var Se=Array(ye),Be=0;Be<ye;Be++)Se[Be]=arguments[Be+2];Le.children=Se}if(z&&z.defaultProps)for(Ae in ye=z.defaultProps,ye)Le[Ae]===void 0&&(Le[Ae]=ye[Ae]);return P(z,se,Le)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(z){return{$$typeof:p,render:z}},rt.isValidElement=V,rt.lazy=function(z){return{$$typeof:y,_payload:{_status:-1,_result:z},_init:ee}},rt.memo=function(z,j){return{$$typeof:h,type:z,compare:j===void 0?null:j}},rt.startTransition=function(z){var j=O.T,be={};O.T=be;try{var Ae=z(),Le=O.S;Le!==null&&Le(be,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(D,me)}catch(se){me(se)}finally{j!==null&&be.types!==null&&(j.types=be.types),O.T=j}},rt.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},rt.use=function(z){return O.H.use(z)},rt.useActionState=function(z,j,be){return O.H.useActionState(z,j,be)},rt.useCallback=function(z,j){return O.H.useCallback(z,j)},rt.useContext=function(z){return O.H.useContext(z)},rt.useDebugValue=function(){},rt.useDeferredValue=function(z,j){return O.H.useDeferredValue(z,j)},rt.useEffect=function(z,j){return O.H.useEffect(z,j)},rt.useEffectEvent=function(z){return O.H.useEffectEvent(z)},rt.useId=function(){return O.H.useId()},rt.useImperativeHandle=function(z,j,be){return O.H.useImperativeHandle(z,j,be)},rt.useInsertionEffect=function(z,j){return O.H.useInsertionEffect(z,j)},rt.useLayoutEffect=function(z,j){return O.H.useLayoutEffect(z,j)},rt.useMemo=function(z,j){return O.H.useMemo(z,j)},rt.useOptimistic=function(z,j){return O.H.useOptimistic(z,j)},rt.useReducer=function(z,j,be){return O.H.useReducer(z,j,be)},rt.useRef=function(z){return O.H.useRef(z)},rt.useState=function(z){return O.H.useState(z)},rt.useSyncExternalStore=function(z,j,be){return O.H.useSyncExternalStore(z,j,be)},rt.useTransition=function(){return O.H.useTransition()},rt.version="19.2.8",rt}var kg;function Bh(){return kg||(kg=1,sd.exports=$y()),sd.exports}var ct=Bh();const t_=Ky(ct);var rd={exports:{}},zo={},od={exports:{}},ld={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function eS(){return Xg||(Xg=1,(function(o){function e(B,G){var ee=B.length;B.push(G);e:for(;0<ee;){var me=ee-1>>>1,Ee=B[me];if(0<l(Ee,G))B[me]=G,B[ee]=Ee,ee=me;else break e}}function i(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var G=B[0],ee=B.pop();if(ee!==G){B[0]=ee;e:for(var me=0,Ee=B.length,z=Ee>>>1;me<z;){var j=2*(me+1)-1,be=B[j],Ae=j+1,Le=B[Ae];if(0>l(be,ee))Ae<Ee&&0>l(Le,be)?(B[me]=Le,B[Ae]=ee,me=Ae):(B[me]=be,B[j]=ee,me=j);else if(Ae<Ee&&0>l(Le,ee))B[me]=Le,B[Ae]=ee,me=Ae;else break e}}return G}function l(B,G){var ee=B.sortIndex-G.sortIndex;return ee!==0?ee:B.id-G.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();o.unstable_now=function(){return d.now()-p}}var m=[],h=[],y=1,v=null,g=3,b=!1,T=!1,N=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function C(B){for(var G=i(h);G!==null;){if(G.callback===null)s(h);else if(G.startTime<=B)s(h),G.sortIndex=G.expirationTime,e(m,G);else break;G=i(h)}}function F(B){if(N=!1,C(B),!T)if(i(m)!==null)T=!0,D||(D=!0,Q());else{var G=i(h);G!==null&&J(F,G.startTime-B)}}var D=!1,O=-1,E=5,P=-1;function k(){return S?!0:!(o.unstable_now()-P<E)}function V(){if(S=!1,D){var B=o.unstable_now();P=B;var G=!0;try{e:{T=!1,N&&(N=!1,U(O),O=-1),b=!0;var ee=g;try{t:{for(C(B),v=i(m);v!==null&&!(v.expirationTime>B&&k());){var me=v.callback;if(typeof me=="function"){v.callback=null,g=v.priorityLevel;var Ee=me(v.expirationTime<=B);if(B=o.unstable_now(),typeof Ee=="function"){v.callback=Ee,C(B),G=!0;break t}v===i(m)&&s(m),C(B)}else s(m);v=i(m)}if(v!==null)G=!0;else{var z=i(h);z!==null&&J(F,z.startTime-B),G=!1}}break e}finally{v=null,g=ee,b=!1}G=void 0}}finally{G?Q():D=!1}}}var Q;if(typeof I=="function")Q=function(){I(V)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,_e=he.port2;he.port1.onmessage=V,Q=function(){_e.postMessage(null)}}else Q=function(){_(V,0)};function J(B,G){O=_(function(){B(o.unstable_now())},G)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(B){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var ee=g;g=G;try{return B()}finally{g=ee}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ee=g;g=B;try{return G()}finally{g=ee}},o.unstable_scheduleCallback=function(B,G,ee){var me=o.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?me+ee:me):ee=me,B){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=ee+Ee,B={id:y++,callback:G,priorityLevel:B,startTime:ee,expirationTime:Ee,sortIndex:-1},ee>me?(B.sortIndex=ee,e(h,B),i(m)===null&&B===i(h)&&(N?(U(O),O=-1):N=!0,J(F,ee-me))):(B.sortIndex=Ee,e(m,B),T||b||(T=!0,D||(D=!0,Q()))),B},o.unstable_shouldYield=k,o.unstable_wrapCallback=function(B){var G=g;return function(){var ee=g;g=G;try{return B.apply(this,arguments)}finally{g=ee}}}})(ld)),ld}var Wg;function tS(){return Wg||(Wg=1,od.exports=eS()),od.exports}var cd={exports:{}},On={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function nS(){if(qg)return On;qg=1;var o=Bh();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)h+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:h,implementation:y}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,On.createPortal=function(m,h){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,y)},On.flushSync=function(m){var h=d.T,y=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=h,s.p=y,s.d.f()}},On.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},On.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},On.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var y=h.as,v=p(y,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,b=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;y==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:b}):y==="script"&&s.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:b,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},On.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var y=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},On.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var y=h.as,v=p(y,h.crossOrigin);s.d.L(m,y,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},On.preloadModule=function(m,h){if(typeof m=="string")if(h){var y=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},On.requestFormReset=function(m){s.d.r(m)},On.unstable_batchedUpdates=function(m,h){return m(h)},On.useFormState=function(m,h,y){return d.H.useFormState(m,h,y)},On.useFormStatus=function(){return d.H.useHostTransitionStatus()},On.version="19.2.8",On}var Yg;function iS(){if(Yg)return cd.exports;Yg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),cd.exports=nS(),cd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function aS(){if(jg)return zo;jg=1;var o=tS(),e=Bh(),i=iS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var x=!1,w=u.child;w;){if(w===a){x=!0,a=u,r=f;break}if(w===r){x=!0,r=u,a=f;break}w=w.sibling}if(!x){for(w=f.child;w;){if(w===a){x=!0,a=f,r=u;break}if(w===r){x=!0,r=f,a=u;break}w=w.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function y(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=y(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),I=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),P=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var he=Symbol.for("react.client.reference");function _e(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===he?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case F:return"Suspense";case D:return"SuspenseList";case P:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case I:return t.displayName||"Context";case U:return(t._context.displayName||"Context")+".Consumer";case C:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return n=t.displayName||null,n!==null?n:_e(t.type)||"Memo";case E:n=t._payload,t=t._init;try{return _e(t(n))}catch{}}return null}var J=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},me=[],Ee=-1;function z(t){return{current:t}}function j(t){0>Ee||(t.current=me[Ee],me[Ee]=null,Ee--)}function be(t,n){Ee++,me[Ee]=t.current,t.current=n}var Ae=z(null),Le=z(null),se=z(null),ye=z(null);function Se(t,n){switch(be(se,n),be(Le,t),be(Ae,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?cg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=cg(n),t=ug(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}j(Ae),be(Ae,t)}function Be(){j(Ae),j(Le),j(se)}function tt(t){t.memoizedState!==null&&be(ye,t);var n=Ae.current,a=ug(n,t.type);n!==a&&(be(Le,t),be(Ae,a))}function je(t){Le.current===t&&(j(Ae),j(Le)),ye.current===t&&(j(ye),No._currentValue=ee)}var Lt,dt;function _t(t){if(Lt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Lt=n&&n[1]||"",dt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Lt+t+dt}var vt=!1;function gt(t,n){if(!t||vt)return"";vt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var ve=function(){throw Error()};if(Object.defineProperty(ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ve,[])}catch(ce){var le=ce}Reflect.construct(t,[],ve)}else{try{ve.call()}catch(ce){le=ce}t.call(ve.prototype)}}else{try{throw Error()}catch(ce){le=ce}(ve=t())&&typeof ve.catch=="function"&&ve.catch(function(){})}}catch(ce){if(ce&&le&&typeof ce.stack=="string")return[ce.stack,le.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),x=f[0],w=f[1];if(x&&w){var H=x.split(`
`),ne=w.split(`
`);for(u=r=0;r<H.length&&!H[r].includes("DetermineComponentFrameRoot");)r++;for(;u<ne.length&&!ne[u].includes("DetermineComponentFrameRoot");)u++;if(r===H.length||u===ne.length)for(r=H.length-1,u=ne.length-1;1<=r&&0<=u&&H[r]!==ne[u];)u--;for(;1<=r&&0<=u;r--,u--)if(H[r]!==ne[u]){if(r!==1||u!==1)do if(r--,u--,0>u||H[r]!==ne[u]){var pe=`
`+H[r].replace(" at new "," at ");return t.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",t.displayName)),pe}while(1<=r&&0<=u);break}}}finally{vt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?_t(a):""}function jt(t,n){switch(t.tag){case 26:case 27:case 5:return _t(t.type);case 16:return _t("Lazy");case 13:return t.child!==n&&n!==null?_t("Suspense Fallback"):_t("Suspense");case 19:return _t("SuspenseList");case 0:case 15:return gt(t.type,!1);case 11:return gt(t.type.render,!1);case 1:return gt(t.type,!0);case 31:return _t("Activity");default:return""}}function Zt(t){try{var n="",a=null;do n+=jt(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Kt=Object.prototype.hasOwnProperty,$t=o.unstable_scheduleCallback,Pt=o.unstable_cancelCallback,lt=o.unstable_shouldYield,X=o.unstable_requestPaint,et=o.unstable_now,at=o.unstable_getCurrentPriorityLevel,L=o.unstable_ImmediatePriority,M=o.unstable_UserBlockingPriority,Z=o.unstable_NormalPriority,re=o.unstable_LowPriority,fe=o.unstable_IdlePriority,Te=o.log,Ce=o.unstable_setDisableYieldValue,ue=null,de=null;function Re(t){if(typeof Te=="function"&&Ce(t),de&&typeof de.setStrictMode=="function")try{de.setStrictMode(ue,t)}catch{}}var ze=Math.clz32?Math.clz32:Ke,Oe=Math.log,Ne=Math.LN2;function Ke(t){return t>>>=0,t===0?32:31-(Oe(t)/Ne|0)|0}var Qe=256,st=262144,q=4194304;function we(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ge(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var u=0,f=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var w=r&134217727;return w!==0?(r=w&~f,r!==0?u=we(r):(x&=w,x!==0?u=we(x):a||(a=w&~t,a!==0&&(u=we(a))))):(w=r&~f,w!==0?u=we(w):x!==0?u=we(x):a||(a=r&~t,a!==0&&(u=we(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function De(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Fe(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Me(){var t=q;return q<<=1,(q&62914560)===0&&(q=4194304),t}function qe(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ve(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function en(t,n,a,r,u,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var w=t.entanglements,H=t.expirationTimes,ne=t.hiddenUpdates;for(a=x&~a;0<a;){var pe=31-ze(a),ve=1<<pe;w[pe]=0,H[pe]=-1;var le=ne[pe];if(le!==null)for(ne[pe]=null,pe=0;pe<le.length;pe++){var ce=le[pe];ce!==null&&(ce.lane&=-536870913)}a&=~ve}r!==0&&zt(t,r,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function zt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-ze(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Qn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-ze(a),u=1<<r;u&n|t[r]&n&&(t[r]|=n),a&=~u}}function Jn(t,n){var a=n&-n;return a=(a&42)!==0?1:Xr(a),(a&(t.suspendedLanes|n))!==0?0:a}function Xr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Wr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function qr(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:Lg(t.type))}function Vs(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var Oi=Math.random().toString(36).slice(2),fn="__reactFiber$"+Oi,An="__reactProps$"+Oi,Gn="__reactContainer$"+Oi,ls="__reactEvents$"+Oi,$o="__reactListeners$"+Oi,el="__reactHandles$"+Oi,cs="__reactResources$"+Oi,Ta="__reactMarker$"+Oi;function Aa(t){delete t[fn],delete t[An],delete t[ls],delete t[$o],delete t[el]}function Zi(t){var n=t[fn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Gn]||a[fn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=xg(t);t!==null;){if(a=t[fn])return a;t=xg(t)}return n}t=a,a=t.parentNode}return null}function Ki(t){if(t=t[fn]||t[Gn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function us(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ra(t){var n=t[cs];return n||(n=t[cs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function dn(t){t[Ta]=!0}var tl=new Set,R={};function Y(t,n){oe(t,n),oe(t+"Capture",n)}function oe(t,n){for(R[t]=n,t=0;t<n.length;t++)tl.add(n[t])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},Pe={};function Ge(t){return Kt.call(Pe,t)?!0:Kt.call(ae,t)?!1:ie.test(t)?Pe[t]=!0:(ae[t]=!0,!1)}function Ue(t,n,a){if(Ge(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Xe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function ke(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function Je(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ut(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ze(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ct(t){if(!t._valueTracker){var n=ut(t)?"checked":"value";t._valueTracker=Ze(t,n,""+t[n])}}function tn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=ut(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function qt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var It=/[\n"\\]/g;function Ft(t){return t.replace(It,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function He(t,n,a,r,u,f,x,w){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Je(n)):t.value!==""+Je(n)&&(t.value=""+Je(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?yt(t,x,Je(n)):a!=null?yt(t,x,Je(a)):r!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+Je(w):t.removeAttribute("name")}function Ln(t,n,a,r,u,f,x,w){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ct(t);return}a=a!=null?""+Je(a):"",n=n!=null?""+Je(n):a,w||n===t.value||(t.value=n),t.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=w?t.checked:!!r,t.defaultChecked=!!r,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),Ct(t)}function yt(t,n,a){n==="number"&&qt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function vn(t,n,a,r){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&r&&(t[a].defaultSelected=!0)}else{for(a=""+Je(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,r&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function $n(t,n,a){if(n!=null&&(n=""+Je(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Je(a):""}function Ei(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(J(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=Je(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Ct(t)}function ei(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Bt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nn(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||Bt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ti(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&nn(t,u,r)}else for(var f in n)n.hasOwnProperty(f)&&nn(t,f,n[f])}function Ot(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fs(t){return wa.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Qi(){}var eu=null;function tu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ks=null,Xs=null;function lp(t){var n=Ki(t);if(n&&(t=n.stateNode)){var a=t[An]||null;e:switch(t=n.stateNode,n.type){case"input":if(He(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ft(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var u=r[An]||null;if(!u)throw Error(s(90));He(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&tn(r)}break e;case"textarea":$n(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&vn(t,!!a.multiple,n,!1)}}}var nu=!1;function cp(t,n,a){if(nu)return t(n,a);nu=!0;try{var r=t(n);return r}finally{if(nu=!1,(ks!==null||Xs!==null)&&(Vl(),ks&&(n=ks,t=Xs,Xs=ks=null,lp(n),t)))for(n=0;n<t.length;n++)lp(t[n])}}function Yr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[An]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),iu=!1;if(Ji)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){iu=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{iu=!1}var Ca=null,au=null,nl=null;function up(){if(nl)return nl;var t,n=au,a=n.length,r,u="value"in Ca?Ca.value:Ca.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var x=a-t;for(r=1;r<=x&&n[a-r]===u[f-r];r++);return nl=u.slice(t,1<r?1-r:void 0)}function il(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function al(){return!0}function fp(){return!1}function Vn(t){function n(a,r,u,f,x){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(a=t[w],this[w]=a?a(f):f[w]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?al:fp,this.isPropagationStopped=fp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),n}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sl=Vn(ds),Zr=v({},ds,{view:0,detail:0}),j_=Vn(Zr),su,ru,Kr,rl=v({},Zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Kr&&(Kr&&t.type==="mousemove"?(su=t.screenX-Kr.screenX,ru=t.screenY-Kr.screenY):ru=su=0,Kr=t),su)},movementY:function(t){return"movementY"in t?t.movementY:ru}}),dp=Vn(rl),Z_=v({},rl,{dataTransfer:0}),K_=Vn(Z_),Q_=v({},Zr,{relatedTarget:0}),ou=Vn(Q_),J_=v({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),$_=Vn(J_),ev=v({},ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tv=Vn(ev),nv=v({},ds,{data:0}),hp=Vn(nv),iv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},av={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=sv[t])?!!n[t]:!1}function lu(){return rv}var ov=v({},Zr,{key:function(t){if(t.key){var n=iv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?av[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lu,charCode:function(t){return t.type==="keypress"?il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lv=Vn(ov),cv=v({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pp=Vn(cv),uv=v({},Zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lu}),fv=Vn(uv),dv=v({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),hv=Vn(dv),pv=v({},rl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mv=Vn(pv),gv=v({},ds,{newState:0,oldState:0}),xv=Vn(gv),_v=[9,13,27,32],cu=Ji&&"CompositionEvent"in window,Qr=null;Ji&&"documentMode"in document&&(Qr=document.documentMode);var vv=Ji&&"TextEvent"in window&&!Qr,mp=Ji&&(!cu||Qr&&8<Qr&&11>=Qr),gp=" ",xp=!1;function _p(t,n){switch(t){case"keyup":return _v.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ws=!1;function yv(t,n){switch(t){case"compositionend":return vp(n);case"keypress":return n.which!==32?null:(xp=!0,gp);case"textInput":return t=n.data,t===gp&&xp?null:t;default:return null}}function Sv(t,n){if(Ws)return t==="compositionend"||!cu&&_p(t,n)?(t=up(),nl=au=Ca=null,Ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return mp&&n.locale!=="ko"?null:n.data;default:return null}}var Mv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Mv[t.type]:n==="textarea"}function Sp(t,n,a,r){ks?Xs?Xs.push(r):Xs=[r]:ks=r,n=Zl(n,"onChange"),0<n.length&&(a=new sl("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Jr=null,$r=null;function bv(t){ig(t,0)}function ol(t){var n=us(t);if(tn(n))return t}function Mp(t,n){if(t==="change")return n}var bp=!1;if(Ji){var uu;if(Ji){var fu="oninput"in document;if(!fu){var Ep=document.createElement("div");Ep.setAttribute("oninput","return;"),fu=typeof Ep.oninput=="function"}uu=fu}else uu=!1;bp=uu&&(!document.documentMode||9<document.documentMode)}function Tp(){Jr&&(Jr.detachEvent("onpropertychange",Ap),$r=Jr=null)}function Ap(t){if(t.propertyName==="value"&&ol($r)){var n=[];Sp(n,$r,t,tu(t)),cp(bv,n)}}function Ev(t,n,a){t==="focusin"?(Tp(),Jr=n,$r=a,Jr.attachEvent("onpropertychange",Ap)):t==="focusout"&&Tp()}function Tv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ol($r)}function Av(t,n){if(t==="click")return ol(n)}function Rv(t,n){if(t==="input"||t==="change")return ol(n)}function wv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ti=typeof Object.is=="function"?Object.is:wv;function eo(t,n){if(ti(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Kt.call(n,u)||!ti(t[u],n[u]))return!1}return!0}function Rp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wp(t,n){var a=Rp(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Rp(a)}}function Cp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Cp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Dp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=qt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=qt(t.document)}return n}function du(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Cv=Ji&&"documentMode"in document&&11>=document.documentMode,qs=null,hu=null,to=null,pu=!1;function Np(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pu||qs==null||qs!==qt(r)||(r=qs,"selectionStart"in r&&du(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),to&&eo(to,r)||(to=r,r=Zl(hu,"onSelect"),0<r.length&&(n=new sl("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=qs)))}function hs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ys={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionrun:hs("Transition","TransitionRun"),transitionstart:hs("Transition","TransitionStart"),transitioncancel:hs("Transition","TransitionCancel"),transitionend:hs("Transition","TransitionEnd")},mu={},Up={};Ji&&(Up=document.createElement("div").style,"AnimationEvent"in window||(delete Ys.animationend.animation,delete Ys.animationiteration.animation,delete Ys.animationstart.animation),"TransitionEvent"in window||delete Ys.transitionend.transition);function ps(t){if(mu[t])return mu[t];if(!Ys[t])return t;var n=Ys[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Up)return mu[t]=n[a];return t}var Lp=ps("animationend"),Op=ps("animationiteration"),Pp=ps("animationstart"),Dv=ps("transitionrun"),Nv=ps("transitionstart"),Uv=ps("transitioncancel"),zp=ps("transitionend"),Ip=new Map,gu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gu.push("scrollEnd");function Ai(t,n){Ip.set(t,n),Y(n,[t])}var ll=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},hi=[],js=0,xu=0;function cl(){for(var t=js,n=xu=js=0;n<t;){var a=hi[n];hi[n++]=null;var r=hi[n];hi[n++]=null;var u=hi[n];hi[n++]=null;var f=hi[n];if(hi[n++]=null,r!==null&&u!==null){var x=r.pending;x===null?u.next=u:(u.next=x.next,x.next=u),r.pending=u}f!==0&&Fp(a,u,f)}}function ul(t,n,a,r){hi[js++]=t,hi[js++]=n,hi[js++]=a,hi[js++]=r,xu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function _u(t,n,a,r){return ul(t,n,a,r),fl(t)}function ms(t,n){return ul(t,null,null,n),fl(t)}function Fp(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-ze(a),t=f.hiddenUpdates,r=t[u],r===null?t[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function fl(t){if(50<Eo)throw Eo=0,wf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Zs={};function Lv(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(t,n,a,r){return new Lv(t,n,a,r)}function vu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $i(t,n){var a=t.alternate;return a===null?(a=ni(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Bp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function dl(t,n,a,r,u,f){var x=0;if(r=t,typeof t=="function")vu(t)&&(x=1);else if(typeof t=="string")x=Fy(t,a,Ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case P:return t=ni(31,a,n,u),t.elementType=P,t.lanes=f,t;case N:return gs(a.children,u,f,n);case S:x=8,u|=24;break;case _:return t=ni(12,a,n,u|2),t.elementType=_,t.lanes=f,t;case F:return t=ni(13,a,n,u),t.elementType=F,t.lanes=f,t;case D:return t=ni(19,a,n,u),t.elementType=D,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I:x=10;break e;case U:x=9;break e;case C:x=11;break e;case O:x=14;break e;case E:x=16,r=null;break e}x=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=ni(x,a,n,u),n.elementType=t,n.type=r,n.lanes=f,n}function gs(t,n,a,r){return t=ni(7,t,r,n),t.lanes=a,t}function yu(t,n,a){return t=ni(6,t,null,n),t.lanes=a,t}function Hp(t){var n=ni(18,null,null,0);return n.stateNode=t,n}function Su(t,n,a){return n=ni(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Gp=new WeakMap;function pi(t,n){if(typeof t=="object"&&t!==null){var a=Gp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Zt(n)},Gp.set(t,n),n)}return{value:t,source:n,stack:Zt(n)}}var Ks=[],Qs=0,hl=null,no=0,mi=[],gi=0,Da=null,zi=1,Ii="";function ea(t,n){Ks[Qs++]=no,Ks[Qs++]=hl,hl=t,no=n}function Vp(t,n,a){mi[gi++]=zi,mi[gi++]=Ii,mi[gi++]=Da,Da=t;var r=zi;t=Ii;var u=32-ze(r)-1;r&=~(1<<u),a+=1;var f=32-ze(n)+u;if(30<f){var x=u-u%5;f=(r&(1<<x)-1).toString(32),r>>=x,u-=x,zi=1<<32-ze(n)+u|a<<u|r,Ii=f+t}else zi=1<<f|a<<u|r,Ii=t}function Mu(t){t.return!==null&&(ea(t,1),Vp(t,1,0))}function bu(t){for(;t===hl;)hl=Ks[--Qs],Ks[Qs]=null,no=Ks[--Qs],Ks[Qs]=null;for(;t===Da;)Da=mi[--gi],mi[gi]=null,Ii=mi[--gi],mi[gi]=null,zi=mi[--gi],mi[gi]=null}function kp(t,n){mi[gi++]=zi,mi[gi++]=Ii,mi[gi++]=Da,zi=n.id,Ii=n.overflow,Da=t}var Rn=null,Qt=null,At=!1,Na=null,xi=!1,Eu=Error(s(519));function Ua(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw io(pi(n,t)),Eu}function Xp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[fn]=t,n[An]=r,a){case"dialog":Mt("cancel",n),Mt("close",n);break;case"iframe":case"object":case"embed":Mt("load",n);break;case"video":case"audio":for(a=0;a<Ao.length;a++)Mt(Ao[a],n);break;case"source":Mt("error",n);break;case"img":case"image":case"link":Mt("error",n),Mt("load",n);break;case"details":Mt("toggle",n);break;case"input":Mt("invalid",n),Ln(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Mt("invalid",n);break;case"textarea":Mt("invalid",n),Ei(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||og(n.textContent,a)?(r.popover!=null&&(Mt("beforetoggle",n),Mt("toggle",n)),r.onScroll!=null&&Mt("scroll",n),r.onScrollEnd!=null&&Mt("scrollend",n),r.onClick!=null&&(n.onclick=Qi),n=!0):n=!1,n||Ua(t,!0)}function Wp(t){for(Rn=t.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:Rn=Rn.return}}function Js(t){if(t!==Rn)return!1;if(!At)return Wp(t),At=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||kf(t.type,t.memoizedProps)),a=!a),a&&Qt&&Ua(t),Wp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Qt=gg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Qt=gg(t)}else n===27?(n=Qt,qa(t.type)?(t=jf,jf=null,Qt=t):Qt=n):Qt=Rn?vi(t.stateNode.nextSibling):null;return!0}function xs(){Qt=Rn=null,At=!1}function Tu(){var t=Na;return t!==null&&(qn===null?qn=t:qn.push.apply(qn,t),Na=null),t}function io(t){Na===null?Na=[t]:Na.push(t)}var Au=z(null),_s=null,ta=null;function La(t,n,a){be(Au,n._currentValue),n._currentValue=a}function na(t){t._currentValue=Au.current,j(Au)}function Ru(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function wu(t,n,a,r){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var x=u.child;f=f.firstContext;e:for(;f!==null;){var w=f;f=u;for(var H=0;H<n.length;H++)if(w.context===n[H]){f.lanes|=a,w=f.alternate,w!==null&&(w.lanes|=a),Ru(f.return,a,t),r||(x=null);break e}f=w.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),Ru(x,a,t),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===t){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function $s(t,n,a,r){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var w=u.type;ti(u.pendingProps.value,x.value)||(t!==null?t.push(w):t=[w])}}else if(u===ye.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(No):t=[No])}u=u.return}t!==null&&wu(n,t,a,r),n.flags|=262144}function pl(t){for(t=t.firstContext;t!==null;){if(!ti(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function vs(t){_s=t,ta=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return qp(_s,t)}function ml(t,n){return _s===null&&vs(t),qp(t,n)}function qp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ta===null){if(t===null)throw Error(s(308));ta=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ta=ta.next=n;return a}var Ov=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Pv=o.unstable_scheduleCallback,zv=o.unstable_NormalPriority,hn={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cu(){return{controller:new Ov,data:new Map,refCount:0}}function ao(t){t.refCount--,t.refCount===0&&Pv(zv,function(){t.controller.abort()})}var so=null,Du=0,er=0,tr=null;function Iv(t,n){if(so===null){var a=so=[];Du=0,er=Of(),tr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Du++,n.then(Yp,Yp),n}function Yp(){if(--Du===0&&so!==null){tr!==null&&(tr.status="fulfilled");var t=so;so=null,er=0,tr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Fv(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var jp=B.S;B.S=function(t,n){N0=et(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Iv(t,n),jp!==null&&jp(t,n)};var ys=z(null);function Nu(){var t=ys.current;return t!==null?t:Yt.pooledCache}function gl(t,n){n===null?be(ys,ys.current):be(ys,n.pool)}function Zp(){var t=Nu();return t===null?null:{parent:hn._currentValue,pool:t}}var nr=Error(s(460)),Uu=Error(s(474)),xl=Error(s(542)),_l={then:function(){}};function Kp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Qp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Qi,Qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,$p(t),t;default:if(typeof n.status=="string")n.then(Qi,Qi);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,$p(t),t}throw Ms=n,nr}}function Ss(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ms=a,nr):a}}var Ms=null;function Jp(){if(Ms===null)throw Error(s(459));var t=Ms;return Ms=null,t}function $p(t){if(t===nr||t===xl)throw Error(s(483))}var ir=null,ro=0;function vl(t){var n=ro;return ro+=1,ir===null&&(ir=[]),Qp(ir,t,n)}function oo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function yl(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function em(t){function n(K,W){if(t){var te=K.deletions;te===null?(K.deletions=[W],K.flags|=16):te.push(W)}}function a(K,W){if(!t)return null;for(;W!==null;)n(K,W),W=W.sibling;return null}function r(K){for(var W=new Map;K!==null;)K.key!==null?W.set(K.key,K):W.set(K.index,K),K=K.sibling;return W}function u(K,W){return K=$i(K,W),K.index=0,K.sibling=null,K}function f(K,W,te){return K.index=te,t?(te=K.alternate,te!==null?(te=te.index,te<W?(K.flags|=67108866,W):te):(K.flags|=67108866,W)):(K.flags|=1048576,W)}function x(K){return t&&K.alternate===null&&(K.flags|=67108866),K}function w(K,W,te,xe){return W===null||W.tag!==6?(W=yu(te,K.mode,xe),W.return=K,W):(W=u(W,te),W.return=K,W)}function H(K,W,te,xe){var $e=te.type;return $e===N?pe(K,W,te.props.children,xe,te.key):W!==null&&(W.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===E&&Ss($e)===W.type)?(W=u(W,te.props),oo(W,te),W.return=K,W):(W=dl(te.type,te.key,te.props,null,K.mode,xe),oo(W,te),W.return=K,W)}function ne(K,W,te,xe){return W===null||W.tag!==4||W.stateNode.containerInfo!==te.containerInfo||W.stateNode.implementation!==te.implementation?(W=Su(te,K.mode,xe),W.return=K,W):(W=u(W,te.children||[]),W.return=K,W)}function pe(K,W,te,xe,$e){return W===null||W.tag!==7?(W=gs(te,K.mode,xe,$e),W.return=K,W):(W=u(W,te),W.return=K,W)}function ve(K,W,te){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=yu(""+W,K.mode,te),W.return=K,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case b:return te=dl(W.type,W.key,W.props,null,K.mode,te),oo(te,W),te.return=K,te;case T:return W=Su(W,K.mode,te),W.return=K,W;case E:return W=Ss(W),ve(K,W,te)}if(J(W)||Q(W))return W=gs(W,K.mode,te,null),W.return=K,W;if(typeof W.then=="function")return ve(K,vl(W),te);if(W.$$typeof===I)return ve(K,ml(K,W),te);yl(K,W)}return null}function le(K,W,te,xe){var $e=W!==null?W.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return $e!==null?null:w(K,W,""+te,xe);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case b:return te.key===$e?H(K,W,te,xe):null;case T:return te.key===$e?ne(K,W,te,xe):null;case E:return te=Ss(te),le(K,W,te,xe)}if(J(te)||Q(te))return $e!==null?null:pe(K,W,te,xe,null);if(typeof te.then=="function")return le(K,W,vl(te),xe);if(te.$$typeof===I)return le(K,W,ml(K,te),xe);yl(K,te)}return null}function ce(K,W,te,xe,$e){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return K=K.get(te)||null,w(W,K,""+xe,$e);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case b:return K=K.get(xe.key===null?te:xe.key)||null,H(W,K,xe,$e);case T:return K=K.get(xe.key===null?te:xe.key)||null,ne(W,K,xe,$e);case E:return xe=Ss(xe),ce(K,W,te,xe,$e)}if(J(xe)||Q(xe))return K=K.get(te)||null,pe(W,K,xe,$e,null);if(typeof xe.then=="function")return ce(K,W,te,vl(xe),$e);if(xe.$$typeof===I)return ce(K,W,te,ml(W,xe),$e);yl(W,xe)}return null}function We(K,W,te,xe){for(var $e=null,Dt=null,Ye=W,ht=W=0,Et=null;Ye!==null&&ht<te.length;ht++){Ye.index>ht?(Et=Ye,Ye=null):Et=Ye.sibling;var Nt=le(K,Ye,te[ht],xe);if(Nt===null){Ye===null&&(Ye=Et);break}t&&Ye&&Nt.alternate===null&&n(K,Ye),W=f(Nt,W,ht),Dt===null?$e=Nt:Dt.sibling=Nt,Dt=Nt,Ye=Et}if(ht===te.length)return a(K,Ye),At&&ea(K,ht),$e;if(Ye===null){for(;ht<te.length;ht++)Ye=ve(K,te[ht],xe),Ye!==null&&(W=f(Ye,W,ht),Dt===null?$e=Ye:Dt.sibling=Ye,Dt=Ye);return At&&ea(K,ht),$e}for(Ye=r(Ye);ht<te.length;ht++)Et=ce(Ye,K,ht,te[ht],xe),Et!==null&&(t&&Et.alternate!==null&&Ye.delete(Et.key===null?ht:Et.key),W=f(Et,W,ht),Dt===null?$e=Et:Dt.sibling=Et,Dt=Et);return t&&Ye.forEach(function(Qa){return n(K,Qa)}),At&&ea(K,ht),$e}function nt(K,W,te,xe){if(te==null)throw Error(s(151));for(var $e=null,Dt=null,Ye=W,ht=W=0,Et=null,Nt=te.next();Ye!==null&&!Nt.done;ht++,Nt=te.next()){Ye.index>ht?(Et=Ye,Ye=null):Et=Ye.sibling;var Qa=le(K,Ye,Nt.value,xe);if(Qa===null){Ye===null&&(Ye=Et);break}t&&Ye&&Qa.alternate===null&&n(K,Ye),W=f(Qa,W,ht),Dt===null?$e=Qa:Dt.sibling=Qa,Dt=Qa,Ye=Et}if(Nt.done)return a(K,Ye),At&&ea(K,ht),$e;if(Ye===null){for(;!Nt.done;ht++,Nt=te.next())Nt=ve(K,Nt.value,xe),Nt!==null&&(W=f(Nt,W,ht),Dt===null?$e=Nt:Dt.sibling=Nt,Dt=Nt);return At&&ea(K,ht),$e}for(Ye=r(Ye);!Nt.done;ht++,Nt=te.next())Nt=ce(Ye,K,ht,Nt.value,xe),Nt!==null&&(t&&Nt.alternate!==null&&Ye.delete(Nt.key===null?ht:Nt.key),W=f(Nt,W,ht),Dt===null?$e=Nt:Dt.sibling=Nt,Dt=Nt);return t&&Ye.forEach(function(Zy){return n(K,Zy)}),At&&ea(K,ht),$e}function Wt(K,W,te,xe){if(typeof te=="object"&&te!==null&&te.type===N&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case b:e:{for(var $e=te.key;W!==null;){if(W.key===$e){if($e=te.type,$e===N){if(W.tag===7){a(K,W.sibling),xe=u(W,te.props.children),xe.return=K,K=xe;break e}}else if(W.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===E&&Ss($e)===W.type){a(K,W.sibling),xe=u(W,te.props),oo(xe,te),xe.return=K,K=xe;break e}a(K,W);break}else n(K,W);W=W.sibling}te.type===N?(xe=gs(te.props.children,K.mode,xe,te.key),xe.return=K,K=xe):(xe=dl(te.type,te.key,te.props,null,K.mode,xe),oo(xe,te),xe.return=K,K=xe)}return x(K);case T:e:{for($e=te.key;W!==null;){if(W.key===$e)if(W.tag===4&&W.stateNode.containerInfo===te.containerInfo&&W.stateNode.implementation===te.implementation){a(K,W.sibling),xe=u(W,te.children||[]),xe.return=K,K=xe;break e}else{a(K,W);break}else n(K,W);W=W.sibling}xe=Su(te,K.mode,xe),xe.return=K,K=xe}return x(K);case E:return te=Ss(te),Wt(K,W,te,xe)}if(J(te))return We(K,W,te,xe);if(Q(te)){if($e=Q(te),typeof $e!="function")throw Error(s(150));return te=$e.call(te),nt(K,W,te,xe)}if(typeof te.then=="function")return Wt(K,W,vl(te),xe);if(te.$$typeof===I)return Wt(K,W,ml(K,te),xe);yl(K,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,W!==null&&W.tag===6?(a(K,W.sibling),xe=u(W,te),xe.return=K,K=xe):(a(K,W),xe=yu(te,K.mode,xe),xe.return=K,K=xe),x(K)):a(K,W)}return function(K,W,te,xe){try{ro=0;var $e=Wt(K,W,te,xe);return ir=null,$e}catch(Ye){if(Ye===nr||Ye===xl)throw Ye;var Dt=ni(29,Ye,null,K.mode);return Dt.lanes=xe,Dt.return=K,Dt}finally{}}}var bs=em(!0),tm=em(!1),Oa=!1;function Lu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ou(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Pa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function za(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Ut&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=fl(t),Fp(t,null,a),n}return ul(t,r,n,a),fl(t)}function lo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Qn(t,a)}}function Pu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var zu=!1;function co(){if(zu){var t=tr;if(t!==null)throw t}}function uo(t,n,a,r){zu=!1;var u=t.updateQueue;Oa=!1;var f=u.firstBaseUpdate,x=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var H=w,ne=H.next;H.next=null,x===null?f=ne:x.next=ne,x=H;var pe=t.alternate;pe!==null&&(pe=pe.updateQueue,w=pe.lastBaseUpdate,w!==x&&(w===null?pe.firstBaseUpdate=ne:w.next=ne,pe.lastBaseUpdate=H))}if(f!==null){var ve=u.baseState;x=0,pe=ne=H=null,w=f;do{var le=w.lane&-536870913,ce=le!==w.lane;if(ce?(bt&le)===le:(r&le)===le){le!==0&&le===er&&(zu=!0),pe!==null&&(pe=pe.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var We=t,nt=w;le=n;var Wt=a;switch(nt.tag){case 1:if(We=nt.payload,typeof We=="function"){ve=We.call(Wt,ve,le);break e}ve=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=nt.payload,le=typeof We=="function"?We.call(Wt,ve,le):We,le==null)break e;ve=v({},ve,le);break e;case 2:Oa=!0}}le=w.callback,le!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=u.callbacks,ce===null?u.callbacks=[le]:ce.push(le))}else ce={lane:le,tag:w.tag,payload:w.payload,callback:w.callback,next:null},pe===null?(ne=pe=ce,H=ve):pe=pe.next=ce,x|=le;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;ce=w,w=ce.next,ce.next=null,u.lastBaseUpdate=ce,u.shared.pending=null}}while(!0);pe===null&&(H=ve),u.baseState=H,u.firstBaseUpdate=ne,u.lastBaseUpdate=pe,f===null&&(u.shared.lanes=0),Ga|=x,t.lanes=x,t.memoizedState=ve}}function nm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function im(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)nm(a[t],n)}var ar=z(null),Sl=z(0);function am(t,n){t=fa,be(Sl,t),be(ar,n),fa=t|n.baseLanes}function Iu(){be(Sl,fa),be(ar,ar.current)}function Fu(){fa=Sl.current,j(ar),j(Sl)}var ii=z(null),_i=null;function Ia(t){var n=t.alternate;be(cn,cn.current&1),be(ii,t),_i===null&&(n===null||ar.current!==null||n.memoizedState!==null)&&(_i=t)}function Bu(t){be(cn,cn.current),be(ii,t),_i===null&&(_i=t)}function sm(t){t.tag===22?(be(cn,cn.current),be(ii,t),_i===null&&(_i=t)):Fa()}function Fa(){be(cn,cn.current),be(ii,ii.current)}function ai(t){j(ii),_i===t&&(_i=null),j(cn)}var cn=z(0);function Ml(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||qf(a)||Yf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ia=0,ft=null,kt=null,pn=null,bl=!1,sr=!1,Es=!1,El=0,fo=0,rr=null,Bv=0;function on(){throw Error(s(321))}function Hu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ti(t[a],n[a]))return!1;return!0}function Gu(t,n,a,r,u,f){return ia=f,ft=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?Vm:nf,Es=!1,f=a(r,u),Es=!1,sr&&(f=om(n,a,r,u)),rm(t),f}function rm(t){B.H=mo;var n=kt!==null&&kt.next!==null;if(ia=0,pn=kt=ft=null,bl=!1,fo=0,rr=null,n)throw Error(s(300));t===null||mn||(t=t.dependencies,t!==null&&pl(t)&&(mn=!0))}function om(t,n,a,r){ft=t;var u=0;do{if(sr&&(rr=null),fo=0,sr=!1,25<=u)throw Error(s(301));if(u+=1,pn=kt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=km,f=n(a,r)}while(sr);return f}function Hv(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?ho(n):n,t=t.useState()[0],(kt!==null?kt.memoizedState:null)!==t&&(ft.flags|=1024),n}function Vu(){var t=El!==0;return El=0,t}function ku(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Xu(t){if(bl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}bl=!1}ia=0,pn=kt=ft=null,sr=!1,fo=El=0,rr=null}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?ft.memoizedState=pn=t:pn=pn.next=t,pn}function un(){if(kt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var n=pn===null?ft.memoizedState:pn.next;if(n!==null)pn=n,kt=t;else{if(t===null)throw ft.alternate===null?Error(s(467)):Error(s(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},pn===null?ft.memoizedState=pn=t:pn=pn.next=t}return pn}function Tl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ho(t){var n=fo;return fo+=1,rr===null&&(rr=[]),t=Qp(rr,t,n),n=ft,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?Vm:nf),t}function Al(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ho(t);if(t.$$typeof===I)return wn(t)}throw Error(s(438,String(t)))}function Wu(t){var n=null,a=ft.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ft.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Tl(),ft.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=k;return n.index++,a}function aa(t,n){return typeof n=="function"?n(t):n}function Rl(t){var n=un();return qu(n,kt,t)}function qu(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=t.baseQueue,f=r.pending;if(f!==null){if(u!==null){var x=u.next;u.next=f.next,f.next=x}n.baseQueue=u=f,r.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var w=x=null,H=null,ne=n,pe=!1;do{var ve=ne.lane&-536870913;if(ve!==ne.lane?(bt&ve)===ve:(ia&ve)===ve){var le=ne.revertLane;if(le===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),ve===er&&(pe=!0);else if((ia&le)===le){ne=ne.next,le===er&&(pe=!0);continue}else ve={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},H===null?(w=H=ve,x=f):H=H.next=ve,ft.lanes|=le,Ga|=le;ve=ne.action,Es&&a(f,ve),f=ne.hasEagerState?ne.eagerState:a(f,ve)}else le={lane:ve,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},H===null?(w=H=le,x=f):H=H.next=le,ft.lanes|=ve,Ga|=ve;ne=ne.next}while(ne!==null&&ne!==n);if(H===null?x=f:H.next=w,!ti(f,t.memoizedState)&&(mn=!0,pe&&(a=tr,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=H,r.lastRenderedState=f}return u===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Yu(t){var n=un(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do f=t(f,x.action),x=x.next;while(x!==u);ti(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function lm(t,n,a){var r=ft,u=un(),f=At;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!ti((kt||u).memoizedState,a);if(x&&(u.memoizedState=a,mn=!0),u=u.queue,Ku(fm.bind(null,r,u,t),[t]),u.getSnapshot!==n||x||pn!==null&&pn.memoizedState.tag&1){if(r.flags|=2048,or(9,{destroy:void 0},um.bind(null,r,u,a,n),null),Yt===null)throw Error(s(349));f||(ia&127)!==0||cm(r,n,a)}return a}function cm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ft.updateQueue,n===null?(n=Tl(),ft.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function um(t,n,a,r){n.value=a,n.getSnapshot=r,dm(n)&&hm(t)}function fm(t,n,a){return a(function(){dm(n)&&hm(t)})}function dm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ti(t,a)}catch{return!0}}function hm(t){var n=ms(t,2);n!==null&&Yn(n,t,2)}function ju(t){var n=Fn();if(typeof t=="function"){var a=t;if(t=a(),Es){Re(!0);try{a()}finally{Re(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:t},n}function pm(t,n,a,r){return t.baseState=a,qu(t,kt,typeof r=="function"?r:aa)}function Gv(t,n,a,r,u){if(Dl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};B.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,mm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function mm(t,n){var a=n.action,r=n.payload,u=t.state;if(n.isTransition){var f=B.T,x={};B.T=x;try{var w=a(u,r),H=B.S;H!==null&&H(x,w),gm(t,n,w)}catch(ne){Zu(t,n,ne)}finally{f!==null&&x.types!==null&&(f.types=x.types),B.T=f}}else try{f=a(u,r),gm(t,n,f)}catch(ne){Zu(t,n,ne)}}function gm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){xm(t,n,r)},function(r){return Zu(t,n,r)}):xm(t,n,a)}function xm(t,n,a){n.status="fulfilled",n.value=a,_m(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,mm(t,a)))}function Zu(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,_m(n),n=n.next;while(n!==r)}t.action=null}function _m(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function vm(t,n){return n}function ym(t,n){if(At){var a=Yt.formState;if(a!==null){e:{var r=ft;if(At){if(Qt){t:{for(var u=Qt,f=xi;u.nodeType!==8;){if(!f){u=null;break t}if(u=vi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Qt=vi(u.nextSibling),r=u.data==="F!";break e}}Ua(r)}r=!1}r&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vm,lastRenderedState:n},a.queue=r,a=Bm.bind(null,ft,r),r.dispatch=a,r=ju(!1),f=tf.bind(null,ft,!1,r.queue),r=Fn(),u={state:n,dispatch:null,action:t,pending:null},r.queue=u,a=Gv.bind(null,ft,u,f,a),u.dispatch=a,r.memoizedState=t,[n,a,!1]}function Sm(t){var n=un();return Mm(n,kt,t)}function Mm(t,n,a){if(n=qu(t,n,vm)[0],t=Rl(aa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=ho(n)}catch(x){throw x===nr?xl:x}else r=n;n=un();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ft.flags|=2048,or(9,{destroy:void 0},Vv.bind(null,u,a),null)),[r,f,t]}function Vv(t,n){t.action=n}function bm(t){var n=un(),a=kt;if(a!==null)return Mm(n,a,t);un(),n=n.memoizedState,a=un();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function or(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=ft.updateQueue,n===null&&(n=Tl(),ft.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function Em(){return un().memoizedState}function wl(t,n,a,r){var u=Fn();ft.flags|=t,u.memoizedState=or(1|n,{destroy:void 0},a,r===void 0?null:r)}function Cl(t,n,a,r){var u=un();r=r===void 0?null:r;var f=u.memoizedState.inst;kt!==null&&r!==null&&Hu(r,kt.memoizedState.deps)?u.memoizedState=or(n,f,a,r):(ft.flags|=t,u.memoizedState=or(1|n,f,a,r))}function Tm(t,n){wl(8390656,8,t,n)}function Ku(t,n){Cl(2048,8,t,n)}function kv(t){ft.flags|=4;var n=ft.updateQueue;if(n===null)n=Tl(),ft.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Am(t){var n=un().memoizedState;return kv({ref:n,nextImpl:t}),function(){if((Ut&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Rm(t,n){return Cl(4,2,t,n)}function wm(t,n){return Cl(4,4,t,n)}function Cm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Dm(t,n,a){a=a!=null?a.concat([t]):null,Cl(4,4,Cm.bind(null,n,t),a)}function Qu(){}function Nm(t,n){var a=un();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Hu(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function Um(t,n){var a=un();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Hu(n,r[1]))return r[0];if(r=t(),Es){Re(!0);try{t()}finally{Re(!1)}}return a.memoizedState=[r,n],r}function Ju(t,n,a){return a===void 0||(ia&1073741824)!==0&&(bt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=L0(),ft.lanes|=t,Ga|=t,a)}function Lm(t,n,a,r){return ti(a,n)?a:ar.current!==null?(t=Ju(t,a,r),ti(t,n)||(mn=!0),t):(ia&42)===0||(ia&1073741824)!==0&&(bt&261930)===0?(mn=!0,t.memoizedState=a):(t=L0(),ft.lanes|=t,Ga|=t,n)}function Om(t,n,a,r,u){var f=G.p;G.p=f!==0&&8>f?f:8;var x=B.T,w={};B.T=w,tf(t,!1,n,a);try{var H=u(),ne=B.S;if(ne!==null&&ne(w,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var pe=Fv(H,r);po(t,n,pe,oi(t))}else po(t,n,r,oi(t))}catch(ve){po(t,n,{then:function(){},status:"rejected",reason:ve},oi())}finally{G.p=f,x!==null&&w.types!==null&&(x.types=w.types),B.T=x}}function Xv(){}function $u(t,n,a,r){if(t.tag!==5)throw Error(s(476));var u=Pm(t).queue;Om(t,u,n,ee,a===null?Xv:function(){return zm(t),a(r)})}function Pm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:ee},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function zm(t){var n=Pm(t);n.next===null&&(n=t.alternate.memoizedState),po(t,n.next.queue,{},oi())}function ef(){return wn(No)}function Im(){return un().memoizedState}function Fm(){return un().memoizedState}function Wv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=oi();t=Pa(a);var r=za(n,t,a);r!==null&&(Yn(r,n,a),lo(r,n,a)),n={cache:Cu()},t.payload=n;return}n=n.return}}function qv(t,n,a){var r=oi();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Dl(t)?Hm(n,a):(a=_u(t,n,a,r),a!==null&&(Yn(a,t,r),Gm(a,n,r)))}function Bm(t,n,a){var r=oi();po(t,n,a,r)}function po(t,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dl(t))Hm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,w=f(x,a);if(u.hasEagerState=!0,u.eagerState=w,ti(w,x))return ul(t,n,u,0),Yt===null&&cl(),!1}catch{}finally{}if(a=_u(t,n,u,r),a!==null)return Yn(a,t,r),Gm(a,n,r),!0}return!1}function tf(t,n,a,r){if(r={lane:2,revertLane:Of(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Dl(t)){if(n)throw Error(s(479))}else n=_u(t,a,r,2),n!==null&&Yn(n,t,2)}function Dl(t){var n=t.alternate;return t===ft||n!==null&&n===ft}function Hm(t,n){sr=bl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Gm(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Qn(t,a)}}var mo={readContext:wn,use:Al,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on};mo.useEffectEvent=on;var Vm={readContext:wn,use:Al,useCallback:function(t,n){return Fn().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:Tm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,wl(4194308,4,Cm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return wl(4194308,4,t,n)},useInsertionEffect:function(t,n){wl(4,2,t,n)},useMemo:function(t,n){var a=Fn();n=n===void 0?null:n;var r=t();if(Es){Re(!0);try{t()}finally{Re(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Fn();if(a!==void 0){var u=a(n);if(Es){Re(!0);try{a(n)}finally{Re(!1)}}}else u=n;return r.memoizedState=r.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},r.queue=t,t=t.dispatch=qv.bind(null,ft,t),[r.memoizedState,t]},useRef:function(t){var n=Fn();return t={current:t},n.memoizedState=t},useState:function(t){t=ju(t);var n=t.queue,a=Bm.bind(null,ft,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Qu,useDeferredValue:function(t,n){var a=Fn();return Ju(a,t,n)},useTransition:function(){var t=ju(!1);return t=Om.bind(null,ft,t.queue,!0,!1),Fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=ft,u=Fn();if(At){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Yt===null)throw Error(s(349));(bt&127)!==0||cm(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Tm(fm.bind(null,r,f,t),[t]),r.flags|=2048,or(9,{destroy:void 0},um.bind(null,r,f,a,n),null),a},useId:function(){var t=Fn(),n=Yt.identifierPrefix;if(At){var a=Ii,r=zi;a=(r&~(1<<32-ze(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=El++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Bv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:ef,useFormState:ym,useActionState:ym,useOptimistic:function(t){var n=Fn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=tf.bind(null,ft,!0,a),a.dispatch=n,[t,n]},useMemoCache:Wu,useCacheRefresh:function(){return Fn().memoizedState=Wv.bind(null,ft)},useEffectEvent:function(t){var n=Fn(),a={impl:t};return n.memoizedState=a,function(){if((Ut&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},nf={readContext:wn,use:Al,useCallback:Nm,useContext:wn,useEffect:Ku,useImperativeHandle:Dm,useInsertionEffect:Rm,useLayoutEffect:wm,useMemo:Um,useReducer:Rl,useRef:Em,useState:function(){return Rl(aa)},useDebugValue:Qu,useDeferredValue:function(t,n){var a=un();return Lm(a,kt.memoizedState,t,n)},useTransition:function(){var t=Rl(aa)[0],n=un().memoizedState;return[typeof t=="boolean"?t:ho(t),n]},useSyncExternalStore:lm,useId:Im,useHostTransitionStatus:ef,useFormState:Sm,useActionState:Sm,useOptimistic:function(t,n){var a=un();return pm(a,kt,t,n)},useMemoCache:Wu,useCacheRefresh:Fm};nf.useEffectEvent=Am;var km={readContext:wn,use:Al,useCallback:Nm,useContext:wn,useEffect:Ku,useImperativeHandle:Dm,useInsertionEffect:Rm,useLayoutEffect:wm,useMemo:Um,useReducer:Yu,useRef:Em,useState:function(){return Yu(aa)},useDebugValue:Qu,useDeferredValue:function(t,n){var a=un();return kt===null?Ju(a,t,n):Lm(a,kt.memoizedState,t,n)},useTransition:function(){var t=Yu(aa)[0],n=un().memoizedState;return[typeof t=="boolean"?t:ho(t),n]},useSyncExternalStore:lm,useId:Im,useHostTransitionStatus:ef,useFormState:bm,useActionState:bm,useOptimistic:function(t,n){var a=un();return kt!==null?pm(a,kt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Wu,useCacheRefresh:Fm};km.useEffectEvent=Am;function af(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var sf={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=oi(),u=Pa(r);u.payload=n,a!=null&&(u.callback=a),n=za(t,u,r),n!==null&&(Yn(n,t,r),lo(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=oi(),u=Pa(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=za(t,u,r),n!==null&&(Yn(n,t,r),lo(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=oi(),r=Pa(a);r.tag=2,n!=null&&(r.callback=n),n=za(t,r,a),n!==null&&(Yn(n,t,a),lo(n,t,a))}};function Xm(t,n,a,r,u,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,x):n.prototype&&n.prototype.isPureReactComponent?!eo(a,r)||!eo(u,f):!0}function Wm(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&sf.enqueueReplaceState(n,n.state,null)}function Ts(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function qm(t){ll(t)}function Ym(t){console.error(t)}function jm(t){ll(t)}function Nl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Zm(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function rf(t,n,a){return a=Pa(a),a.tag=3,a.payload={element:null},a.callback=function(){Nl(t,n)},a}function Km(t){return t=Pa(t),t.tag=3,t}function Qm(t,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;t.payload=function(){return u(f)},t.callback=function(){Zm(n,a,r)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){Zm(n,a,r),typeof u!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var w=r.stack;this.componentDidCatch(r.value,{componentStack:w!==null?w:""})})}function Yv(t,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&$s(n,a,u,!0),a=ii.current,a!==null){switch(a.tag){case 31:case 13:return _i===null?kl():a.alternate===null&&ln===0&&(ln=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===_l?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Nf(t,r,u)),!1;case 22:return a.flags|=65536,r===_l?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Nf(t,r,u)),!1}throw Error(s(435,a.tag))}return Nf(t,r,u),kl(),!1}if(At)return n=ii.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==Eu&&(t=Error(s(422),{cause:r}),io(pi(t,a)))):(r!==Eu&&(n=Error(s(423),{cause:r}),io(pi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,r=pi(r,a),u=rf(t.stateNode,r,u),Pu(t,u),ln!==4&&(ln=2)),!1;var f=Error(s(520),{cause:r});if(f=pi(f,a),bo===null?bo=[f]:bo.push(f),ln!==4&&(ln=2),n===null)return!0;r=pi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=rf(a.stateNode,r,t),Pu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Va===null||!Va.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Km(u),Qm(u,t,a,r),Pu(a,u),!1}a=a.return}while(a!==null);return!1}var of=Error(s(461)),mn=!1;function Cn(t,n,a,r){n.child=t===null?tm(n,null,a,r):bs(n,t.child,a,r)}function Jm(t,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var x={};for(var w in r)w!=="ref"&&(x[w]=r[w])}else x=r;return vs(n),r=Gu(t,n,a,x,f,u),w=Vu(),t!==null&&!mn?(ku(t,n,u),sa(t,n,u)):(At&&w&&Mu(n),n.flags|=1,Cn(t,n,r,u),n.child)}function $m(t,n,a,r,u){if(t===null){var f=a.type;return typeof f=="function"&&!vu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,e0(t,n,f,r,u)):(t=dl(a.type,null,r,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!mf(t,u)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:eo,a(x,r)&&t.ref===n.ref)return sa(t,n,u)}return n.flags|=1,t=$i(f,r),t.ref=n.ref,t.return=n,n.child=t}function e0(t,n,a,r,u){if(t!==null){var f=t.memoizedProps;if(eo(f,r)&&t.ref===n.ref)if(mn=!1,n.pendingProps=r=f,mf(t,u))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,sa(t,n,u)}return lf(t,n,a,r,u)}function t0(t,n,a,r){var u=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return n0(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&gl(n,f!==null?f.cachePool:null),f!==null?am(n,f):Iu(),sm(n);else return r=n.lanes=536870912,n0(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(gl(n,f.cachePool),am(n,f),Fa(),n.memoizedState=null):(t!==null&&gl(n,null),Iu(),Fa());return Cn(t,n,u,a),n.child}function go(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function n0(t,n,a,r,u){var f=Nu();return f=f===null?null:{parent:hn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&gl(n,null),Iu(),sm(n),t!==null&&$s(t,n,r,!0),n.childLanes=u,null}function Ul(t,n){return n=Ol({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function i0(t,n,a){return bs(n,t.child,null,a),t=Ul(n,n.pendingProps),t.flags|=2,ai(n),n.memoizedState=null,t}function jv(t,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(At){if(r.mode==="hidden")return t=Ul(n,r),n.lanes=536870912,go(null,t);if(Bu(n),(t=Qt)?(t=mg(t,xi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:zi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=Hp(t),a.return=n,n.child=a,Rn=n,Qt=null)):t=null,t===null)throw Ua(n);return n.lanes=536870912,null}return Ul(n,r)}var f=t.memoizedState;if(f!==null){var x=f.dehydrated;if(Bu(n),u)if(n.flags&256)n.flags&=-257,n=i0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(mn||$s(t,n,a,!1),u=(a&t.childLanes)!==0,mn||u){if(r=Yt,r!==null&&(x=Jn(r,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,ms(t,x),Yn(r,t,x),of;kl(),n=i0(t,n,a)}else t=f.treeContext,Qt=vi(x.nextSibling),Rn=n,At=!0,Na=null,xi=!1,t!==null&&kp(n,t),n=Ul(n,r),n.flags|=4096;return n}return t=$i(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ll(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function lf(t,n,a,r,u){return vs(n),a=Gu(t,n,a,r,void 0,u),r=Vu(),t!==null&&!mn?(ku(t,n,u),sa(t,n,u)):(At&&r&&Mu(n),n.flags|=1,Cn(t,n,a,u),n.child)}function a0(t,n,a,r,u,f){return vs(n),n.updateQueue=null,a=om(n,r,a,u),rm(t),r=Vu(),t!==null&&!mn?(ku(t,n,f),sa(t,n,f)):(At&&r&&Mu(n),n.flags|=1,Cn(t,n,a,f),n.child)}function s0(t,n,a,r,u){if(vs(n),n.stateNode===null){var f=Zs,x=a.contextType;typeof x=="object"&&x!==null&&(f=wn(x)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=sf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Lu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?wn(x):Zs,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(af(n,a,x,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&sf.enqueueReplaceState(f,f.state,null),uo(n,r,f,u),co(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var w=n.memoizedProps,H=Ts(a,w);f.props=H;var ne=f.context,pe=a.contextType;x=Zs,typeof pe=="object"&&pe!==null&&(x=wn(pe));var ve=a.getDerivedStateFromProps;pe=typeof ve=="function"||typeof f.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,pe||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(w||ne!==x)&&Wm(n,f,r,x),Oa=!1;var le=n.memoizedState;f.state=le,uo(n,r,f,u),co(),ne=n.memoizedState,w||le!==ne||Oa?(typeof ve=="function"&&(af(n,a,ve,r),ne=n.memoizedState),(H=Oa||Xm(n,a,H,r,le,ne,x))?(pe||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=ne),f.props=r,f.state=ne,f.context=x,r=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Ou(t,n),x=n.memoizedProps,pe=Ts(a,x),f.props=pe,ve=n.pendingProps,le=f.context,ne=a.contextType,H=Zs,typeof ne=="object"&&ne!==null&&(H=wn(ne)),w=a.getDerivedStateFromProps,(ne=typeof w=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==ve||le!==H)&&Wm(n,f,r,H),Oa=!1,le=n.memoizedState,f.state=le,uo(n,r,f,u),co();var ce=n.memoizedState;x!==ve||le!==ce||Oa||t!==null&&t.dependencies!==null&&pl(t.dependencies)?(typeof w=="function"&&(af(n,a,w,r),ce=n.memoizedState),(pe=Oa||Xm(n,a,pe,r,le,ce,H)||t!==null&&t.dependencies!==null&&pl(t.dependencies))?(ne||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ce,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ce,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ce),f.props=r,f.state=ce,f.context=H,r=pe):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Ll(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=bs(n,t.child,null,u),n.child=bs(n,null,a,u)):Cn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=sa(t,n,u),t}function r0(t,n,a,r){return xs(),n.flags|=256,Cn(t,n,a,r),n.child}var cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function uf(t){return{baseLanes:t,cachePool:Zp()}}function ff(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ri),t}function o0(t,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(At){if(u?Ia(n):Fa(),(t=Qt)?(t=mg(t,xi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:zi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=Hp(t),a.return=n,n.child=a,Rn=n,Qt=null)):t=null,t===null)throw Ua(n);return Yf(t)?n.lanes=32:n.lanes=536870912,null}var w=r.children;return r=r.fallback,u?(Fa(),u=n.mode,w=Ol({mode:"hidden",children:w},u),r=gs(r,u,a,null),w.return=n,r.return=n,w.sibling=r,n.child=w,r=n.child,r.memoizedState=uf(a),r.childLanes=ff(t,x,a),n.memoizedState=cf,go(null,r)):(Ia(n),df(n,w))}var H=t.memoizedState;if(H!==null&&(w=H.dehydrated,w!==null)){if(f)n.flags&256?(Ia(n),n.flags&=-257,n=hf(t,n,a)):n.memoizedState!==null?(Fa(),n.child=t.child,n.flags|=128,n=null):(Fa(),w=r.fallback,u=n.mode,r=Ol({mode:"visible",children:r.children},u),w=gs(w,u,a,null),w.flags|=2,r.return=n,w.return=n,r.sibling=w,n.child=r,bs(n,t.child,null,a),r=n.child,r.memoizedState=uf(a),r.childLanes=ff(t,x,a),n.memoizedState=cf,n=go(null,r));else if(Ia(n),Yf(w)){if(x=w.nextSibling&&w.nextSibling.dataset,x)var ne=x.dgst;x=ne,r=Error(s(419)),r.stack="",r.digest=x,io({value:r,source:null,stack:null}),n=hf(t,n,a)}else if(mn||$s(t,n,a,!1),x=(a&t.childLanes)!==0,mn||x){if(x=Yt,x!==null&&(r=Jn(x,a),r!==0&&r!==H.retryLane))throw H.retryLane=r,ms(t,r),Yn(x,t,r),of;qf(w)||kl(),n=hf(t,n,a)}else qf(w)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,Qt=vi(w.nextSibling),Rn=n,At=!0,Na=null,xi=!1,t!==null&&kp(n,t),n=df(n,r.children),n.flags|=4096);return n}return u?(Fa(),w=r.fallback,u=n.mode,H=t.child,ne=H.sibling,r=$i(H,{mode:"hidden",children:r.children}),r.subtreeFlags=H.subtreeFlags&65011712,ne!==null?w=$i(ne,w):(w=gs(w,u,a,null),w.flags|=2),w.return=n,r.return=n,r.sibling=w,n.child=r,go(null,r),r=n.child,w=t.child.memoizedState,w===null?w=uf(a):(u=w.cachePool,u!==null?(H=hn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=Zp(),w={baseLanes:w.baseLanes|a,cachePool:u}),r.memoizedState=w,r.childLanes=ff(t,x,a),n.memoizedState=cf,go(t.child,r)):(Ia(n),a=t.child,t=a.sibling,a=$i(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function df(t,n){return n=Ol({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ol(t,n){return t=ni(22,t,null,n),t.lanes=0,t}function hf(t,n,a){return bs(n,t.child,null,a),t=df(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function l0(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Ru(t.return,n,a)}function pf(t,n,a,r,u,f){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=r,x.tail=a,x.tailMode=u,x.treeForkCount=f)}function c0(t,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var x=cn.current,w=(x&2)!==0;if(w?(x=x&1|2,n.flags|=128):x&=1,be(cn,x),Cn(t,n,r,a),r=At?no:0,!w&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&l0(t,a,n);else if(t.tag===19)l0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Ml(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),pf(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ml(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}pf(n,!0,a,null,f,r);break;case"together":pf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function sa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ga|=n.lanes,(a&n.childLanes)===0)if(t!==null){if($s(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=$i(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=$i(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function mf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&pl(t)))}function Zv(t,n,a){switch(n.tag){case 3:Se(n,n.stateNode.containerInfo),La(n,hn,t.memoizedState.cache),xs();break;case 27:case 5:tt(n);break;case 4:Se(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Bu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Ia(n),n.flags|=128,null):(a&n.child.childLanes)!==0?o0(t,n,a):(Ia(n),t=sa(t,n,a),t!==null?t.sibling:null);Ia(n);break;case 19:var u=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||($s(t,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return c0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),be(cn,cn.current),r)break;return null;case 22:return n.lanes=0,t0(t,n,a,n.pendingProps);case 24:La(n,hn,t.memoizedState.cache)}return sa(t,n,a)}function u0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!mf(t,a)&&(n.flags&128)===0)return mn=!1,Zv(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,At&&(n.flags&1048576)!==0&&Vp(n,no,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(t=Ss(n.elementType),n.type=t,typeof t=="function")vu(t)?(r=Ts(t,r),n.tag=1,n=s0(null,n,t,r,a)):(n.tag=0,n=lf(null,n,t,r,a));else{if(t!=null){var u=t.$$typeof;if(u===C){n.tag=11,n=Jm(null,n,t,r,a);break e}else if(u===O){n.tag=14,n=$m(null,n,t,r,a);break e}}throw n=_e(t)||t,Error(s(306,n,""))}}return n;case 0:return lf(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=Ts(r,n.pendingProps),s0(t,n,r,u,a);case 3:e:{if(Se(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Ou(t,n),uo(n,r,null,a);var x=n.memoizedState;if(r=x.cache,La(n,hn,r),r!==f.cache&&wu(n,[hn],a,!0),co(),r=x.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=r0(t,n,r,a);break e}else if(r!==u){u=pi(Error(s(424)),n),io(u),n=r0(t,n,r,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Qt=vi(t.firstChild),Rn=n,At=!0,Na=null,xi=!0,a=tm(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(xs(),r===u){n=sa(t,n,a);break e}Cn(t,n,r,a)}n=n.child}return n;case 26:return Ll(t,n),t===null?(a=Sg(n.type,null,n.pendingProps,null))?n.memoizedState=a:At||(a=n.type,t=n.pendingProps,r=Kl(se.current).createElement(a),r[fn]=n,r[An]=t,Dn(r,a,t),dn(r),n.stateNode=r):n.memoizedState=Sg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return tt(n),t===null&&At&&(r=n.stateNode=_g(n.type,n.pendingProps,se.current),Rn=n,xi=!0,u=Qt,qa(n.type)?(jf=u,Qt=vi(r.firstChild)):Qt=u),Cn(t,n,n.pendingProps.children,a),Ll(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&At&&((u=r=Qt)&&(r=Ty(r,n.type,n.pendingProps,xi),r!==null?(n.stateNode=r,Rn=n,Qt=vi(r.firstChild),xi=!1,u=!0):u=!1),u||Ua(n)),tt(n),u=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,r=f.children,kf(u,f)?r=null:x!==null&&kf(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=Gu(t,n,Hv,null,null,a),No._currentValue=u),Ll(t,n),Cn(t,n,r,a),n.child;case 6:return t===null&&At&&((t=a=Qt)&&(a=Ay(a,n.pendingProps,xi),a!==null?(n.stateNode=a,Rn=n,Qt=null,t=!0):t=!1),t||Ua(n)),null;case 13:return o0(t,n,a);case 4:return Se(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=bs(n,null,r,a):Cn(t,n,r,a),n.child;case 11:return Jm(t,n,n.type,n.pendingProps,a);case 7:return Cn(t,n,n.pendingProps,a),n.child;case 8:return Cn(t,n,n.pendingProps.children,a),n.child;case 12:return Cn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,La(n,n.type,r.value),Cn(t,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,vs(n),u=wn(u),r=r(u),n.flags|=1,Cn(t,n,r,a),n.child;case 14:return $m(t,n,n.type,n.pendingProps,a);case 15:return e0(t,n,n.type,n.pendingProps,a);case 19:return c0(t,n,a);case 31:return jv(t,n,a);case 22:return t0(t,n,a,n.pendingProps);case 24:return vs(n),r=wn(hn),t===null?(u=Nu(),u===null&&(u=Yt,f=Cu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Lu(n),La(n,hn,u)):((t.lanes&a)!==0&&(Ou(t,n),uo(n,null,null,a),co()),u=t.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),La(n,hn,r)):(r=f.cache,La(n,hn,r),r!==u.cache&&wu(n,[hn],a,!0))),Cn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ra(t){t.flags|=4}function gf(t,n,a,r,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(I0())t.flags|=8192;else throw Ms=_l,Uu}else t.flags&=-16777217}function f0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ag(n))if(I0())t.flags|=8192;else throw Ms=_l,Uu}function Pl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Me():536870912,t.lanes|=n,fr|=n)}function xo(t,n){if(!At)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Jt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function Kv(t,n,a){var r=n.pendingProps;switch(bu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(n),null;case 1:return Jt(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),na(hn),Be(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Js(n)?ra(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Tu())),Jt(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(ra(n),f!==null?(Jt(n),f0(n,f)):(Jt(n),gf(n,u,null,r,a))):f?f!==t.memoizedState?(ra(n),Jt(n),f0(n,f)):(Jt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ra(n),Jt(n),gf(n,u,t,r,a)),null;case 27:if(je(n),a=se.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ra(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Jt(n),null}t=Ae.current,Js(n)?Xp(n):(t=_g(u,r,a),n.stateNode=t,ra(n))}return Jt(n),null;case 5:if(je(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ra(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Jt(n),null}if(f=Ae.current,Js(n))Xp(n);else{var x=Kl(se.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?x.createElement("select",{is:r.is}):x.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?x.createElement(u,{is:r.is}):x.createElement(u)}}f[fn]=n,f[An]=r;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;e:switch(Dn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ra(n)}}return Jt(n),gf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ra(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=se.current,Js(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}t[fn]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||og(t.nodeValue,a)),t||Ua(n,!0)}else t=Kl(t).createTextNode(r),t[fn]=n,n.stateNode=t}return Jt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Js(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[fn]=n}else xs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),t=!1}else a=Tu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ai(n),n):(ai(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Jt(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Js(n),r!==null&&r.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[fn]=n}else xs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),u=!1}else u=Tu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ai(n),n):(ai(n),null)}return ai(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Pl(n,n.updateQueue),Jt(n),null);case 4:return Be(),t===null&&Ff(n.stateNode.containerInfo),Jt(n),null;case 10:return na(n.type),Jt(n),null;case 19:if(j(cn),r=n.memoizedState,r===null)return Jt(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)xo(r,!1);else{if(ln!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Ml(t),f!==null){for(n.flags|=128,xo(r,!1),t=f.updateQueue,n.updateQueue=t,Pl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Bp(a,t),a=a.sibling;return be(cn,cn.current&1|2),At&&ea(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&et()>Hl&&(n.flags|=128,u=!0,xo(r,!1),n.lanes=4194304)}else{if(!u)if(t=Ml(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Pl(n,t),xo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!At)return Jt(n),null}else 2*et()-r.renderingStartTime>Hl&&a!==536870912&&(n.flags|=128,u=!0,xo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=et(),t.sibling=null,a=cn.current,be(cn,u?a&1|2:a&1),At&&ea(n,r.treeForkCount),t):(Jt(n),null);case 22:case 23:return ai(n),Fu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Jt(n),n.subtreeFlags&6&&(n.flags|=8192)):Jt(n),a=n.updateQueue,a!==null&&Pl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&j(ys),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),na(hn),Jt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Qv(t,n){switch(bu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return na(hn),Be(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return je(n),null;case 31:if(n.memoizedState!==null){if(ai(n),n.alternate===null)throw Error(s(340));xs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ai(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));xs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return j(cn),null;case 4:return Be(),null;case 10:return na(n.type),null;case 22:case 23:return ai(n),Fu(),t!==null&&j(ys),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return na(hn),null;case 25:return null;default:return null}}function d0(t,n){switch(bu(n),n.tag){case 3:na(hn),Be();break;case 26:case 27:case 5:je(n);break;case 4:Be();break;case 31:n.memoizedState!==null&&ai(n);break;case 13:ai(n);break;case 19:j(cn);break;case 10:na(n.type);break;case 22:case 23:ai(n),Fu(),t!==null&&j(ys);break;case 24:na(hn)}}function _o(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&t)===t){r=void 0;var f=a.create,x=a.inst;r=f(),x.destroy=r}a=a.next}while(a!==u)}}catch(w){Gt(n,n.return,w)}}function Ba(t,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&t)===t){var x=r.inst,w=x.destroy;if(w!==void 0){x.destroy=void 0,u=n;var H=a,ne=w;try{ne()}catch(pe){Gt(u,H,pe)}}}r=r.next}while(r!==f)}}catch(pe){Gt(n,n.return,pe)}}function h0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{im(n,a)}catch(r){Gt(t,t.return,r)}}}function p0(t,n,a){a.props=Ts(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Gt(t,n,r)}}function vo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(u){Gt(t,n,u)}}function Fi(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Gt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Gt(t,n,u)}else a.current=null}function m0(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Gt(t,t.return,u)}}function xf(t,n,a){try{var r=t.stateNode;vy(r,t.type,a,n),r[An]=n}catch(u){Gt(t,t.return,u)}}function g0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&qa(t.type)||t.tag===4}function _f(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||g0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vf(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Qi));else if(r!==4&&(r===27&&qa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(vf(t,n,a),t=t.sibling;t!==null;)vf(t,n,a),t=t.sibling}function zl(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&qa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(zl(t,n,a),t=t.sibling;t!==null;)zl(t,n,a),t=t.sibling}function x0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,r,a),n[fn]=t,n[An]=a}catch(f){Gt(t,t.return,f)}}var oa=!1,gn=!1,yf=!1,_0=typeof WeakSet=="function"?WeakSet:Set,bn=null;function Jv(t,n){if(t=t.containerInfo,Gf=ic,t=Dp(t),du(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var x=0,w=-1,H=-1,ne=0,pe=0,ve=t,le=null;t:for(;;){for(var ce;ve!==a||u!==0&&ve.nodeType!==3||(w=x+u),ve!==f||r!==0&&ve.nodeType!==3||(H=x+r),ve.nodeType===3&&(x+=ve.nodeValue.length),(ce=ve.firstChild)!==null;)le=ve,ve=ce;for(;;){if(ve===t)break t;if(le===a&&++ne===u&&(w=x),le===f&&++pe===r&&(H=x),(ce=ve.nextSibling)!==null)break;ve=le,le=ve.parentNode}ve=ce}a=w===-1||H===-1?null:{start:w,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vf={focusedElem:t,selectionRange:a},ic=!1,bn=n;bn!==null;)if(n=bn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,bn=t;else for(;bn!==null;){switch(n=bn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var We=Ts(a.type,u);t=r.getSnapshotBeforeUpdate(We,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(nt){Gt(a,a.return,nt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Wf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Wf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,bn=t;break}bn=n.return}}function v0(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ca(t,a),r&4&&_o(5,a);break;case 1:if(ca(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){Gt(a,a.return,x)}else{var u=Ts(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Gt(a,a.return,x)}}r&64&&h0(a),r&512&&vo(a,a.return);break;case 3:if(ca(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{im(t,n)}catch(x){Gt(a,a.return,x)}}break;case 27:n===null&&r&4&&x0(a);case 26:case 5:ca(t,a),n===null&&r&4&&m0(a),r&512&&vo(a,a.return);break;case 12:ca(t,a);break;case 31:ca(t,a),r&4&&M0(t,a);break;case 13:ca(t,a),r&4&&b0(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=oy.bind(null,a),Ry(t,a))));break;case 22:if(r=a.memoizedState!==null||oa,!r){n=n!==null&&n.memoizedState!==null||gn,u=oa;var f=gn;oa=r,(gn=n)&&!f?ua(t,a,(a.subtreeFlags&8772)!==0):ca(t,a),oa=u,gn=f}break;case 30:break;default:ca(t,a)}}function y0(t){var n=t.alternate;n!==null&&(t.alternate=null,y0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Aa(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var an=null,kn=!1;function la(t,n,a){for(a=a.child;a!==null;)S0(t,n,a),a=a.sibling}function S0(t,n,a){if(de&&typeof de.onCommitFiberUnmount=="function")try{de.onCommitFiberUnmount(ue,a)}catch{}switch(a.tag){case 26:gn||Fi(a,n),la(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gn||Fi(a,n);var r=an,u=kn;qa(a.type)&&(an=a.stateNode,kn=!1),la(t,n,a),wo(a.stateNode),an=r,kn=u;break;case 5:gn||Fi(a,n);case 6:if(r=an,u=kn,an=null,la(t,n,a),an=r,kn=u,an!==null)if(kn)try{(an.nodeType===9?an.body:an.nodeName==="HTML"?an.ownerDocument.body:an).removeChild(a.stateNode)}catch(f){Gt(a,n,f)}else try{an.removeChild(a.stateNode)}catch(f){Gt(a,n,f)}break;case 18:an!==null&&(kn?(t=an,hg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),vr(t)):hg(an,a.stateNode));break;case 4:r=an,u=kn,an=a.stateNode.containerInfo,kn=!0,la(t,n,a),an=r,kn=u;break;case 0:case 11:case 14:case 15:Ba(2,a,n),gn||Ba(4,a,n),la(t,n,a);break;case 1:gn||(Fi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&p0(a,n,r)),la(t,n,a);break;case 21:la(t,n,a);break;case 22:gn=(r=gn)||a.memoizedState!==null,la(t,n,a),gn=r;break;default:la(t,n,a)}}function M0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{vr(t)}catch(a){Gt(n,n.return,a)}}}function b0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{vr(t)}catch(a){Gt(n,n.return,a)}}function $v(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new _0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new _0),n;default:throw Error(s(435,t.tag))}}function Il(t,n){var a=$v(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=ly.bind(null,t,r);r.then(u,u)}})}function Xn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=t,x=n,w=x;e:for(;w!==null;){switch(w.tag){case 27:if(qa(w.type)){an=w.stateNode,kn=!1;break e}break;case 5:an=w.stateNode,kn=!1;break e;case 3:case 4:an=w.stateNode.containerInfo,kn=!0;break e}w=w.return}if(an===null)throw Error(s(160));S0(f,x,u),an=null,kn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)E0(n,t),n=n.sibling}var Ri=null;function E0(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Xn(n,t),Wn(t),r&4&&(Ba(3,t,t.return),_o(3,t),Ba(5,t,t.return));break;case 1:Xn(n,t),Wn(t),r&512&&(gn||a===null||Fi(a,a.return)),r&64&&oa&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=Ri;if(Xn(n,t),Wn(t),r&512&&(gn||a===null||Fi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){e:{r=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ta]||f[fn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),Dn(f,r,a),f[fn]=t,dn(f),r=f;break e;case"link":var x=Eg("link","href",u).get(r+(a.href||""));if(x){for(var w=0;w<x.length;w++)if(f=x[w],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(w,1);break t}}f=u.createElement(r),Dn(f,r,a),u.head.appendChild(f);break;case"meta":if(x=Eg("meta","content",u).get(r+(a.content||""))){for(w=0;w<x.length;w++)if(f=x[w],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(w,1);break t}}f=u.createElement(r),Dn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[fn]=t,dn(f),r=f}t.stateNode=r}else Tg(u,t.type,t.stateNode);else t.stateNode=bg(u,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?Tg(u,t.type,t.stateNode):bg(u,r,t.memoizedProps)):r===null&&t.stateNode!==null&&xf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,t),Wn(t),r&512&&(gn||a===null||Fi(a,a.return)),a!==null&&r&4&&xf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,t),Wn(t),r&512&&(gn||a===null||Fi(a,a.return)),t.flags&32){u=t.stateNode;try{ei(u,"")}catch(We){Gt(t,t.return,We)}}r&4&&t.stateNode!=null&&(u=t.memoizedProps,xf(t,u,a!==null?a.memoizedProps:u)),r&1024&&(yf=!0);break;case 6:if(Xn(n,t),Wn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(We){Gt(t,t.return,We)}}break;case 3:if($l=null,u=Ri,Ri=Ql(n.containerInfo),Xn(n,t),Ri=u,Wn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{vr(n.containerInfo)}catch(We){Gt(t,t.return,We)}yf&&(yf=!1,T0(t));break;case 4:r=Ri,Ri=Ql(t.stateNode.containerInfo),Xn(n,t),Wn(t),Ri=r;break;case 12:Xn(n,t),Wn(t);break;case 31:Xn(n,t),Wn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Il(t,r)));break;case 13:Xn(n,t),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Bl=et()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Il(t,r)));break;case 22:u=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,ne=oa,pe=gn;if(oa=ne||u,gn=pe||H,Xn(n,t),gn=pe,oa=ne,Wn(t),r&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||oa||gn||As(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{w=H.stateNode;var ve=H.memoizedProps.style,le=ve!=null&&ve.hasOwnProperty("display")?ve.display:null;w.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(We){Gt(H,H.return,We)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(We){Gt(H,H.return,We)}}}else if(n.tag===18){if(a===null){H=n;try{var ce=H.stateNode;u?pg(ce,!0):pg(H.stateNode,!1)}catch(We){Gt(H,H.return,We)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Il(t,a))));break;case 19:Xn(n,t),Wn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Il(t,r)));break;case 30:break;case 21:break;default:Xn(n,t),Wn(t)}}function Wn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(g0(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=_f(t);zl(t,f,u);break;case 5:var x=a.stateNode;a.flags&32&&(ei(x,""),a.flags&=-33);var w=_f(t);zl(t,w,x);break;case 3:case 4:var H=a.stateNode.containerInfo,ne=_f(t);vf(t,ne,H);break;default:throw Error(s(161))}}catch(pe){Gt(t,t.return,pe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function T0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;T0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ca(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)v0(t,n.alternate,n),n=n.sibling}function As(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ba(4,n,n.return),As(n);break;case 1:Fi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&p0(n,n.return,a),As(n);break;case 27:wo(n.stateNode);case 26:case 5:Fi(n,n.return),As(n);break;case 22:n.memoizedState===null&&As(n);break;case 30:As(n);break;default:As(n)}t=t.sibling}}function ua(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:ua(u,f,a),_o(4,f);break;case 1:if(ua(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ne){Gt(r,r.return,ne)}if(r=f,u=r.updateQueue,u!==null){var w=r.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)nm(H[u],w)}catch(ne){Gt(r,r.return,ne)}}a&&x&64&&h0(f),vo(f,f.return);break;case 27:x0(f);case 26:case 5:ua(u,f,a),a&&r===null&&x&4&&m0(f),vo(f,f.return);break;case 12:ua(u,f,a);break;case 31:ua(u,f,a),a&&x&4&&M0(u,f);break;case 13:ua(u,f,a),a&&x&4&&b0(u,f);break;case 22:f.memoizedState===null&&ua(u,f,a),vo(f,f.return);break;case 30:break;default:ua(u,f,a)}n=n.sibling}}function Sf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ao(a))}function Mf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ao(t))}function wi(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)A0(t,n,a,r),n=n.sibling}function A0(t,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:wi(t,n,a,r),u&2048&&_o(9,n);break;case 1:wi(t,n,a,r);break;case 3:wi(t,n,a,r),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ao(t)));break;case 12:if(u&2048){wi(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,w=f.onPostCommit;typeof w=="function"&&w(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Gt(n,n.return,H)}}else wi(t,n,a,r);break;case 31:wi(t,n,a,r);break;case 13:wi(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?wi(t,n,a,r):yo(t,n):f._visibility&2?wi(t,n,a,r):(f._visibility|=2,lr(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Sf(x,n);break;case 24:wi(t,n,a,r),u&2048&&Mf(n.alternate,n);break;default:wi(t,n,a,r)}}function lr(t,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,x=n,w=a,H=r,ne=x.flags;switch(x.tag){case 0:case 11:case 15:lr(f,x,w,H,u),_o(8,x);break;case 23:break;case 22:var pe=x.stateNode;x.memoizedState!==null?pe._visibility&2?lr(f,x,w,H,u):yo(f,x):(pe._visibility|=2,lr(f,x,w,H,u)),u&&ne&2048&&Sf(x.alternate,x);break;case 24:lr(f,x,w,H,u),u&&ne&2048&&Mf(x.alternate,x);break;default:lr(f,x,w,H,u)}n=n.sibling}}function yo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,u=r.flags;switch(r.tag){case 22:yo(a,r),u&2048&&Sf(r.alternate,r);break;case 24:yo(a,r),u&2048&&Mf(r.alternate,r);break;default:yo(a,r)}n=n.sibling}}var So=8192;function cr(t,n,a){if(t.subtreeFlags&So)for(t=t.child;t!==null;)R0(t,n,a),t=t.sibling}function R0(t,n,a){switch(t.tag){case 26:cr(t,n,a),t.flags&So&&t.memoizedState!==null&&By(a,Ri,t.memoizedState,t.memoizedProps);break;case 5:cr(t,n,a);break;case 3:case 4:var r=Ri;Ri=Ql(t.stateNode.containerInfo),cr(t,n,a),Ri=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=So,So=16777216,cr(t,n,a),So=r):cr(t,n,a));break;default:cr(t,n,a)}}function w0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Mo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,D0(r,t)}w0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)C0(t),t=t.sibling}function C0(t){switch(t.tag){case 0:case 11:case 15:Mo(t),t.flags&2048&&Ba(9,t,t.return);break;case 3:Mo(t);break;case 12:Mo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Fl(t)):Mo(t);break;default:Mo(t)}}function Fl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,D0(r,t)}w0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ba(8,n,n.return),Fl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Fl(n));break;default:Fl(n)}t=t.sibling}}function D0(t,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:Ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ao(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,bn=r;else e:for(a=t;bn!==null;){r=bn;var u=r.sibling,f=r.return;if(y0(r),r===a){bn=null;break e}if(u!==null){u.return=f,bn=u;break e}bn=f}}}var ey={getCacheForType:function(t){var n=wn(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return wn(hn).controller.signal}},ty=typeof WeakMap=="function"?WeakMap:Map,Ut=0,Yt=null,St=null,bt=0,Ht=0,si=null,Ha=!1,ur=!1,bf=!1,fa=0,ln=0,Ga=0,Rs=0,Ef=0,ri=0,fr=0,bo=null,qn=null,Tf=!1,Bl=0,N0=0,Hl=1/0,Gl=null,Va=null,yn=0,ka=null,dr=null,da=0,Af=0,Rf=null,U0=null,Eo=0,wf=null;function oi(){return(Ut&2)!==0&&bt!==0?bt&-bt:B.T!==null?Of():qr()}function L0(){if(ri===0)if((bt&536870912)===0||At){var t=st;st<<=1,(st&3932160)===0&&(st=262144),ri=t}else ri=536870912;return t=ii.current,t!==null&&(t.flags|=32),ri}function Yn(t,n,a){(t===Yt&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)&&(hr(t,0),Xa(t,bt,ri,!1)),Ve(t,a),((Ut&2)===0||t!==Yt)&&(t===Yt&&((Ut&2)===0&&(Rs|=a),ln===4&&Xa(t,bt,ri,!1)),Bi(t))}function O0(t,n,a){if((Ut&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||De(t,n),u=r?ay(t,n):Df(t,n,!0),f=r;do{if(u===0){ur&&!r&&Xa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!ny(a)){u=Df(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var w=t;u=bo;var H=w.current.memoizedState.isDehydrated;if(H&&(hr(w,x).flags|=256),x=Df(w,x,!1),x!==2){if(bf&&!H){w.errorRecoveryDisabledLanes|=f,Rs|=f,u=4;break e}f=qn,qn=u,f!==null&&(qn===null?qn=f:qn.push.apply(qn,f))}u=x}if(f=!1,u!==2)continue}}if(u===1){hr(t,0),Xa(t,n,0,!0);break}e:{switch(r=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Xa(r,n,ri,!Ha);break e;case 2:qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Bl+300-et(),10<u)){if(Xa(r,n,ri,!Ha),ge(r,0,!0)!==0)break e;da=n,r.timeoutHandle=fg(P0.bind(null,r,a,qn,Gl,Tf,n,ri,Rs,fr,Ha,f,"Throttled",-0,0),u);break e}P0(r,a,qn,Gl,Tf,n,ri,Rs,fr,Ha,f,null,-0,0)}}break}while(!0);Bi(t)}function P0(t,n,a,r,u,f,x,w,H,ne,pe,ve,le,ce){if(t.timeoutHandle=-1,ve=n.subtreeFlags,ve&8192||(ve&16785408)===16785408){ve={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qi},R0(n,f,ve);var We=(f&62914560)===f?Bl-et():(f&4194048)===f?N0-et():0;if(We=Hy(ve,We),We!==null){da=f,t.cancelPendingCommit=We(k0.bind(null,t,n,f,a,r,u,x,w,H,pe,ve,null,le,ce)),Xa(t,f,x,!ne);return}}k0(t,n,f,a,r,u,x,w,H)}function ny(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!ti(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xa(t,n,a,r){n&=~Ef,n&=~Rs,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var u=n;0<u;){var f=31-ze(u),x=1<<f;r[f]=-1,u&=~x}a!==0&&zt(t,a,n)}function Vl(){return(Ut&6)===0?(To(0),!1):!0}function Cf(){if(St!==null){if(Ht===0)var t=St.return;else t=St,ta=_s=null,Xu(t),ir=null,ro=0,t=St;for(;t!==null;)d0(t.alternate,t),t=t.return;St=null}}function hr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,My(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),da=0,Cf(),Yt=t,St=a=$i(t.current,null),bt=n,Ht=0,si=null,Ha=!1,ur=De(t,n),bf=!1,fr=ri=Ef=Rs=Ga=ln=0,qn=bo=null,Tf=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var u=31-ze(r),f=1<<u;n|=t[u],r&=~f}return fa=n,cl(),a}function z0(t,n){ft=null,B.H=mo,n===nr||n===xl?(n=Jp(),Ht=3):n===Uu?(n=Jp(),Ht=4):Ht=n===of?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,si=n,St===null&&(ln=1,Nl(t,pi(n,t.current)))}function I0(){var t=ii.current;return t===null?!0:(bt&4194048)===bt?_i===null:(bt&62914560)===bt||(bt&536870912)!==0?t===_i:!1}function F0(){var t=B.H;return B.H=mo,t===null?mo:t}function B0(){var t=B.A;return B.A=ey,t}function kl(){ln=4,Ha||(bt&4194048)!==bt&&ii.current!==null||(ur=!0),(Ga&134217727)===0&&(Rs&134217727)===0||Yt===null||Xa(Yt,bt,ri,!1)}function Df(t,n,a){var r=Ut;Ut|=2;var u=F0(),f=B0();(Yt!==t||bt!==n)&&(Gl=null,hr(t,n)),n=!1;var x=ln;e:do try{if(Ht!==0&&St!==null){var w=St,H=si;switch(Ht){case 8:Cf(),x=6;break e;case 3:case 2:case 9:case 6:ii.current===null&&(n=!0);var ne=Ht;if(Ht=0,si=null,pr(t,w,H,ne),a&&ur){x=0;break e}break;default:ne=Ht,Ht=0,si=null,pr(t,w,H,ne)}}iy(),x=ln;break}catch(pe){z0(t,pe)}while(!0);return n&&t.shellSuspendCounter++,ta=_s=null,Ut=r,B.H=u,B.A=f,St===null&&(Yt=null,bt=0,cl()),x}function iy(){for(;St!==null;)H0(St)}function ay(t,n){var a=Ut;Ut|=2;var r=F0(),u=B0();Yt!==t||bt!==n?(Gl=null,Hl=et()+500,hr(t,n)):ur=De(t,n);e:do try{if(Ht!==0&&St!==null){n=St;var f=si;t:switch(Ht){case 1:Ht=0,si=null,pr(t,n,f,1);break;case 2:case 9:if(Kp(f)){Ht=0,si=null,G0(n);break}n=function(){Ht!==2&&Ht!==9||Yt!==t||(Ht=7),Bi(t)},f.then(n,n);break e;case 3:Ht=7;break e;case 4:Ht=5;break e;case 7:Kp(f)?(Ht=0,si=null,G0(n)):(Ht=0,si=null,pr(t,n,f,7));break;case 5:var x=null;switch(St.tag){case 26:x=St.memoizedState;case 5:case 27:var w=St;if(x?Ag(x):w.stateNode.complete){Ht=0,si=null;var H=w.sibling;if(H!==null)St=H;else{var ne=w.return;ne!==null?(St=ne,Xl(ne)):St=null}break t}}Ht=0,si=null,pr(t,n,f,5);break;case 6:Ht=0,si=null,pr(t,n,f,6);break;case 8:Cf(),ln=6;break e;default:throw Error(s(462))}}sy();break}catch(pe){z0(t,pe)}while(!0);return ta=_s=null,B.H=r,B.A=u,Ut=a,St!==null?0:(Yt=null,bt=0,cl(),ln)}function sy(){for(;St!==null&&!lt();)H0(St)}function H0(t){var n=u0(t.alternate,t,fa);t.memoizedProps=t.pendingProps,n===null?Xl(t):St=n}function G0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=a0(a,n,n.pendingProps,n.type,void 0,bt);break;case 11:n=a0(a,n,n.pendingProps,n.type.render,n.ref,bt);break;case 5:Xu(n);default:d0(a,n),n=St=Bp(n,fa),n=u0(a,n,fa)}t.memoizedProps=t.pendingProps,n===null?Xl(t):St=n}function pr(t,n,a,r){ta=_s=null,Xu(n),ir=null,ro=0;var u=n.return;try{if(Yv(t,u,n,a,bt)){ln=1,Nl(t,pi(a,t.current)),St=null;return}}catch(f){if(u!==null)throw St=u,f;ln=1,Nl(t,pi(a,t.current)),St=null;return}n.flags&32768?(At||r===1?t=!0:ur||(bt&536870912)!==0?t=!1:(Ha=t=!0,(r===2||r===9||r===3||r===6)&&(r=ii.current,r!==null&&r.tag===13&&(r.flags|=16384))),V0(n,t)):Xl(n)}function Xl(t){var n=t;do{if((n.flags&32768)!==0){V0(n,Ha);return}t=n.return;var a=Kv(n.alternate,n,fa);if(a!==null){St=a;return}if(n=n.sibling,n!==null){St=n;return}St=n=t}while(n!==null);ln===0&&(ln=5)}function V0(t,n){do{var a=Qv(t.alternate,t);if(a!==null){a.flags&=32767,St=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){St=t;return}St=t=a}while(t!==null);ln=6,St=null}function k0(t,n,a,r,u,f,x,w,H){t.cancelPendingCommit=null;do Wl();while(yn!==0);if((Ut&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=xu,en(t,a,f,x,w,H),t===Yt&&(St=Yt=null,bt=0),dr=n,ka=t,da=a,Af=f,Rf=u,U0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,cy(Z,function(){return j0(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=B.T,B.T=null,u=G.p,G.p=2,x=Ut,Ut|=4;try{Jv(t,n,a)}finally{Ut=x,G.p=u,B.T=r}}yn=1,X0(),W0(),q0()}}function X0(){if(yn===1){yn=0;var t=ka,n=dr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var r=G.p;G.p=2;var u=Ut;Ut|=4;try{E0(n,t);var f=Vf,x=Dp(t.containerInfo),w=f.focusedElem,H=f.selectionRange;if(x!==w&&w&&w.ownerDocument&&Cp(w.ownerDocument.documentElement,w)){if(H!==null&&du(w)){var ne=H.start,pe=H.end;if(pe===void 0&&(pe=ne),"selectionStart"in w)w.selectionStart=ne,w.selectionEnd=Math.min(pe,w.value.length);else{var ve=w.ownerDocument||document,le=ve&&ve.defaultView||window;if(le.getSelection){var ce=le.getSelection(),We=w.textContent.length,nt=Math.min(H.start,We),Wt=H.end===void 0?nt:Math.min(H.end,We);!ce.extend&&nt>Wt&&(x=Wt,Wt=nt,nt=x);var K=wp(w,nt),W=wp(w,Wt);if(K&&W&&(ce.rangeCount!==1||ce.anchorNode!==K.node||ce.anchorOffset!==K.offset||ce.focusNode!==W.node||ce.focusOffset!==W.offset)){var te=ve.createRange();te.setStart(K.node,K.offset),ce.removeAllRanges(),nt>Wt?(ce.addRange(te),ce.extend(W.node,W.offset)):(te.setEnd(W.node,W.offset),ce.addRange(te))}}}}for(ve=[],ce=w;ce=ce.parentNode;)ce.nodeType===1&&ve.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<ve.length;w++){var xe=ve[w];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}ic=!!Gf,Vf=Gf=null}finally{Ut=u,G.p=r,B.T=a}}t.current=n,yn=2}}function W0(){if(yn===2){yn=0;var t=ka,n=dr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var r=G.p;G.p=2;var u=Ut;Ut|=4;try{v0(t,n.alternate,n)}finally{Ut=u,G.p=r,B.T=a}}yn=3}}function q0(){if(yn===4||yn===3){yn=0,X();var t=ka,n=dr,a=da,r=U0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?yn=5:(yn=0,dr=ka=null,Y0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Va=null),Wr(a),n=n.stateNode,de&&typeof de.onCommitFiberRoot=="function")try{de.onCommitFiberRoot(ue,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=B.T,u=G.p,G.p=2,B.T=null;try{for(var f=t.onRecoverableError,x=0;x<r.length;x++){var w=r[x];f(w.value,{componentStack:w.stack})}}finally{B.T=n,G.p=u}}(da&3)!==0&&Wl(),Bi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===wf?Eo++:(Eo=0,wf=t):Eo=0,To(0)}}function Y0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,ao(n)))}function Wl(){return X0(),W0(),q0(),j0()}function j0(){if(yn!==5)return!1;var t=ka,n=Af;Af=0;var a=Wr(da),r=B.T,u=G.p;try{G.p=32>a?32:a,B.T=null,a=Rf,Rf=null;var f=ka,x=da;if(yn=0,dr=ka=null,da=0,(Ut&6)!==0)throw Error(s(331));var w=Ut;if(Ut|=4,C0(f.current),A0(f,f.current,x,a),Ut=w,To(0,!1),de&&typeof de.onPostCommitFiberRoot=="function")try{de.onPostCommitFiberRoot(ue,f)}catch{}return!0}finally{G.p=u,B.T=r,Y0(t,n)}}function Z0(t,n,a){n=pi(a,n),n=rf(t.stateNode,n,2),t=za(t,n,2),t!==null&&(Ve(t,2),Bi(t))}function Gt(t,n,a){if(t.tag===3)Z0(t,t,a);else for(;n!==null;){if(n.tag===3){Z0(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Va===null||!Va.has(r))){t=pi(a,t),a=Km(2),r=za(n,a,2),r!==null&&(Qm(a,r,n,t),Ve(r,2),Bi(r));break}}n=n.return}}function Nf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new ty;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(bf=!0,u.add(a),t=ry.bind(null,t,n,a),n.then(t,t))}function ry(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Yt===t&&(bt&a)===a&&(ln===4||ln===3&&(bt&62914560)===bt&&300>et()-Bl?(Ut&2)===0&&hr(t,0):Ef|=a,fr===bt&&(fr=0)),Bi(t)}function K0(t,n){n===0&&(n=Me()),t=ms(t,n),t!==null&&(Ve(t,n),Bi(t))}function oy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),K0(t,a)}function ly(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),K0(t,a)}function cy(t,n){return $t(t,n)}var ql=null,mr=null,Uf=!1,Yl=!1,Lf=!1,Wa=0;function Bi(t){t!==mr&&t.next===null&&(mr===null?ql=mr=t:mr=mr.next=t),Yl=!0,Uf||(Uf=!0,fy())}function To(t,n){if(!Lf&&Yl){Lf=!0;do for(var a=!1,r=ql;r!==null;){if(t!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var x=r.suspendedLanes,w=r.pingedLanes;f=(1<<31-ze(42|t)+1)-1,f&=u&~(x&~w),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,eg(r,f))}else f=bt,f=ge(r,r===Yt?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||De(r,f)||(a=!0,eg(r,f));r=r.next}while(a);Lf=!1}}function uy(){Q0()}function Q0(){Yl=Uf=!1;var t=0;Wa!==0&&Sy()&&(t=Wa);for(var n=et(),a=null,r=ql;r!==null;){var u=r.next,f=J0(r,n);f===0?(r.next=null,a===null?ql=u:a.next=u,u===null&&(mr=a)):(a=r,(t!==0||(f&3)!==0)&&(Yl=!0)),r=u}yn!==0&&yn!==5||To(t),Wa!==0&&(Wa=0)}function J0(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-ze(f),w=1<<x,H=u[x];H===-1?((w&a)===0||(w&r)!==0)&&(u[x]=Fe(w,n)):H<=n&&(t.expiredLanes|=w),f&=~w}if(n=Yt,a=bt,a=ge(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Pt(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||De(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&Pt(r),Wr(a)){case 2:case 8:a=M;break;case 32:a=Z;break;case 268435456:a=fe;break;default:a=Z}return r=$0.bind(null,t),a=$t(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&Pt(r),t.callbackPriority=2,t.callbackNode=null,2}function $0(t,n){if(yn!==0&&yn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Wl()&&t.callbackNode!==a)return null;var r=bt;return r=ge(t,t===Yt?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(O0(t,r,n),J0(t,et()),t.callbackNode!=null&&t.callbackNode===a?$0.bind(null,t):null)}function eg(t,n){if(Wl())return null;O0(t,n,!0)}function fy(){by(function(){(Ut&6)!==0?$t(L,uy):Q0()})}function Of(){if(Wa===0){var t=er;t===0&&(t=Qe,Qe<<=1,(Qe&261888)===0&&(Qe=256)),Wa=t}return Wa}function tg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:fs(""+t)}function ng(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function dy(t,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=tg((u[An]||null).action),x=r.submitter;x&&(n=(n=x[An]||null)?tg(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var w=new sl("action","action",null,r,u);t.push({event:w,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Wa!==0){var H=x?ng(u,x):new FormData(u);$u(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(w.preventDefault(),H=x?ng(u,x):new FormData(u),$u(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var Pf=0;Pf<gu.length;Pf++){var zf=gu[Pf],hy=zf.toLowerCase(),py=zf[0].toUpperCase()+zf.slice(1);Ai(hy,"on"+py)}Ai(Lp,"onAnimationEnd"),Ai(Op,"onAnimationIteration"),Ai(Pp,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(Dv,"onTransitionRun"),Ai(Nv,"onTransitionStart"),Ai(Uv,"onTransitionCancel"),Ai(zp,"onTransitionEnd"),oe("onMouseEnter",["mouseout","mouseover"]),oe("onMouseLeave",["mouseout","mouseover"]),oe("onPointerEnter",["pointerout","pointerover"]),oe("onPointerLeave",["pointerout","pointerover"]),Y("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Y("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Y("onBeforeInput",["compositionend","keypress","textInput","paste"]),Y("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),my=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ao));function ig(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],u=r.event;r=r.listeners;e:{var f=void 0;if(n)for(var x=r.length-1;0<=x;x--){var w=r[x],H=w.instance,ne=w.currentTarget;if(w=w.listener,H!==f&&u.isPropagationStopped())break e;f=w,u.currentTarget=ne;try{f(u)}catch(pe){ll(pe)}u.currentTarget=null,f=H}else for(x=0;x<r.length;x++){if(w=r[x],H=w.instance,ne=w.currentTarget,w=w.listener,H!==f&&u.isPropagationStopped())break e;f=w,u.currentTarget=ne;try{f(u)}catch(pe){ll(pe)}u.currentTarget=null,f=H}}}}function Mt(t,n){var a=n[ls];a===void 0&&(a=n[ls]=new Set);var r=t+"__bubble";a.has(r)||(ag(n,t,2,!1),a.add(r))}function If(t,n,a){var r=0;n&&(r|=4),ag(a,t,r,n)}var jl="_reactListening"+Math.random().toString(36).slice(2);function Ff(t){if(!t[jl]){t[jl]=!0,tl.forEach(function(a){a!=="selectionchange"&&(my.has(a)||If(a,!1,t),If(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[jl]||(n[jl]=!0,If("selectionchange",!1,n))}}function ag(t,n,a,r){switch(Lg(n)){case 2:var u=ky;break;case 8:u=Xy;break;default:u=$f}a=u.bind(null,n,a,t),u=void 0,!iu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Bf(t,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var x=r.tag;if(x===3||x===4){var w=r.stateNode.containerInfo;if(w===u)break;if(x===4)for(x=r.return;x!==null;){var H=x.tag;if((H===3||H===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;w!==null;){if(x=Zi(w),x===null)return;if(H=x.tag,H===5||H===6||H===26||H===27){r=f=x;continue e}w=w.parentNode}}r=r.return}cp(function(){var ne=f,pe=tu(a),ve=[];e:{var le=Ip.get(t);if(le!==void 0){var ce=sl,We=t;switch(t){case"keypress":if(il(a)===0)break e;case"keydown":case"keyup":ce=lv;break;case"focusin":We="focus",ce=ou;break;case"focusout":We="blur",ce=ou;break;case"beforeblur":case"afterblur":ce=ou;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=K_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=fv;break;case Lp:case Op:case Pp:ce=$_;break;case zp:ce=hv;break;case"scroll":case"scrollend":ce=j_;break;case"wheel":ce=mv;break;case"copy":case"cut":case"paste":ce=tv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=pp;break;case"toggle":case"beforetoggle":ce=xv}var nt=(n&4)!==0,Wt=!nt&&(t==="scroll"||t==="scrollend"),K=nt?le!==null?le+"Capture":null:le;nt=[];for(var W=ne,te;W!==null;){var xe=W;if(te=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||te===null||K===null||(xe=Yr(W,K),xe!=null&&nt.push(Ro(W,xe,te))),Wt)break;W=W.return}0<nt.length&&(le=new ce(le,We,null,a,pe),ve.push({event:le,listeners:nt}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",le&&a!==eu&&(We=a.relatedTarget||a.fromElement)&&(Zi(We)||We[Gn]))break e;if((ce||le)&&(le=pe.window===pe?pe:(le=pe.ownerDocument)?le.defaultView||le.parentWindow:window,ce?(We=a.relatedTarget||a.toElement,ce=ne,We=We?Zi(We):null,We!==null&&(Wt=c(We),nt=We.tag,We!==Wt||nt!==5&&nt!==27&&nt!==6)&&(We=null)):(ce=null,We=ne),ce!==We)){if(nt=dp,xe="onMouseLeave",K="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(nt=pp,xe="onPointerLeave",K="onPointerEnter",W="pointer"),Wt=ce==null?le:us(ce),te=We==null?le:us(We),le=new nt(xe,W+"leave",ce,a,pe),le.target=Wt,le.relatedTarget=te,xe=null,Zi(pe)===ne&&(nt=new nt(K,W+"enter",We,a,pe),nt.target=te,nt.relatedTarget=Wt,xe=nt),Wt=xe,ce&&We)t:{for(nt=gy,K=ce,W=We,te=0,xe=K;xe;xe=nt(xe))te++;xe=0;for(var $e=W;$e;$e=nt($e))xe++;for(;0<te-xe;)K=nt(K),te--;for(;0<xe-te;)W=nt(W),xe--;for(;te--;){if(K===W||W!==null&&K===W.alternate){nt=K;break t}K=nt(K),W=nt(W)}nt=null}else nt=null;ce!==null&&sg(ve,le,ce,nt,!1),We!==null&&Wt!==null&&sg(ve,Wt,We,nt,!0)}}e:{if(le=ne?us(ne):window,ce=le.nodeName&&le.nodeName.toLowerCase(),ce==="select"||ce==="input"&&le.type==="file")var Dt=Mp;else if(yp(le))if(bp)Dt=Rv;else{Dt=Tv;var Ye=Ev}else ce=le.nodeName,!ce||ce.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?ne&&Ot(ne.elementType)&&(Dt=Mp):Dt=Av;if(Dt&&(Dt=Dt(t,ne))){Sp(ve,Dt,a,pe);break e}Ye&&Ye(t,le,ne),t==="focusout"&&ne&&le.type==="number"&&ne.memoizedProps.value!=null&&yt(le,"number",le.value)}switch(Ye=ne?us(ne):window,t){case"focusin":(yp(Ye)||Ye.contentEditable==="true")&&(qs=Ye,hu=ne,to=null);break;case"focusout":to=hu=qs=null;break;case"mousedown":pu=!0;break;case"contextmenu":case"mouseup":case"dragend":pu=!1,Np(ve,a,pe);break;case"selectionchange":if(Cv)break;case"keydown":case"keyup":Np(ve,a,pe)}var ht;if(cu)e:{switch(t){case"compositionstart":var Et="onCompositionStart";break e;case"compositionend":Et="onCompositionEnd";break e;case"compositionupdate":Et="onCompositionUpdate";break e}Et=void 0}else Ws?_p(t,a)&&(Et="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Et="onCompositionStart");Et&&(mp&&a.locale!=="ko"&&(Ws||Et!=="onCompositionStart"?Et==="onCompositionEnd"&&Ws&&(ht=up()):(Ca=pe,au="value"in Ca?Ca.value:Ca.textContent,Ws=!0)),Ye=Zl(ne,Et),0<Ye.length&&(Et=new hp(Et,t,null,a,pe),ve.push({event:Et,listeners:Ye}),ht?Et.data=ht:(ht=vp(a),ht!==null&&(Et.data=ht)))),(ht=vv?yv(t,a):Sv(t,a))&&(Et=Zl(ne,"onBeforeInput"),0<Et.length&&(Ye=new hp("onBeforeInput","beforeinput",null,a,pe),ve.push({event:Ye,listeners:Et}),Ye.data=ht)),dy(ve,t,ne,a,pe)}ig(ve,n)})}function Ro(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Zl(t,n){for(var a=n+"Capture",r=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Yr(t,a),u!=null&&r.unshift(Ro(t,u,f)),u=Yr(t,n),u!=null&&r.push(Ro(t,u,f))),t.tag===3)return r;t=t.return}return[]}function gy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function sg(t,n,a,r,u){for(var f=n._reactName,x=[];a!==null&&a!==r;){var w=a,H=w.alternate,ne=w.stateNode;if(w=w.tag,H!==null&&H===r)break;w!==5&&w!==26&&w!==27||ne===null||(H=ne,u?(ne=Yr(a,f),ne!=null&&x.unshift(Ro(a,ne,H))):u||(ne=Yr(a,f),ne!=null&&x.push(Ro(a,ne,H)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var xy=/\r\n?/g,_y=/\u0000|\uFFFD/g;function rg(t){return(typeof t=="string"?t:""+t).replace(xy,`
`).replace(_y,"")}function og(t,n){return n=rg(n),rg(t)===n}function Xt(t,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||ei(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&ei(t,""+r);break;case"className":Xe(t,"class",r);break;case"tabIndex":Xe(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Xe(t,a,r);break;case"style":Ti(t,r,f);break;case"data":if(n!=="object"){Xe(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=fs(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xt(t,n,"name",u.name,u,null),Xt(t,n,"formEncType",u.formEncType,u,null),Xt(t,n,"formMethod",u.formMethod,u,null),Xt(t,n,"formTarget",u.formTarget,u,null)):(Xt(t,n,"encType",u.encType,u,null),Xt(t,n,"method",u.method,u,null),Xt(t,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=fs(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Qi);break;case"onScroll":r!=null&&Mt("scroll",t);break;case"onScrollEnd":r!=null&&Mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=fs(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":Mt("beforetoggle",t),Mt("toggle",t),Ue(t,"popover",r);break;case"xlinkActuate":ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ke(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ke(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ke(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ke(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Ue(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Pi.get(a)||a,Ue(t,a,r))}}function Hf(t,n,a,r,u,f){switch(a){case"style":Ti(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?ei(t,r):(typeof r=="number"||typeof r=="bigint")&&ei(t,""+r);break;case"onScroll":r!=null&&Mt("scroll",t);break;case"onScrollEnd":r!=null&&Mt("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!R.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[An]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,u);break e}a in t?t[a]=r:r===!0?t.setAttribute(a,""):Ue(t,a,r)}}}function Dn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Mt("error",t),Mt("load",t);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xt(t,n,f,x,a,null)}}u&&Xt(t,n,"srcSet",a.srcSet,a,null),r&&Xt(t,n,"src",a.src,a,null);return;case"input":Mt("invalid",t);var w=f=x=u=null,H=null,ne=null;for(r in a)if(a.hasOwnProperty(r)){var pe=a[r];if(pe!=null)switch(r){case"name":u=pe;break;case"type":x=pe;break;case"checked":H=pe;break;case"defaultChecked":ne=pe;break;case"value":f=pe;break;case"defaultValue":w=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(s(137,n));break;default:Xt(t,n,r,pe,a,null)}}Ln(t,f,w,H,ne,x,u,!1);return;case"select":Mt("invalid",t),r=x=f=null;for(u in a)if(a.hasOwnProperty(u)&&(w=a[u],w!=null))switch(u){case"value":f=w;break;case"defaultValue":x=w;break;case"multiple":r=w;default:Xt(t,n,u,w,a,null)}n=f,a=x,t.multiple=!!r,n!=null?vn(t,!!r,n,!1):a!=null&&vn(t,!!r,a,!0);return;case"textarea":Mt("invalid",t),f=u=r=null;for(x in a)if(a.hasOwnProperty(x)&&(w=a[x],w!=null))switch(x){case"value":r=w;break;case"defaultValue":u=w;break;case"children":f=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:Xt(t,n,x,w,a,null)}Ei(t,r,u,f);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(r=a[H],r!=null))switch(H){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Xt(t,n,H,r,a,null)}return;case"dialog":Mt("beforetoggle",t),Mt("toggle",t),Mt("cancel",t),Mt("close",t);break;case"iframe":case"object":Mt("load",t);break;case"video":case"audio":for(r=0;r<Ao.length;r++)Mt(Ao[r],t);break;case"image":Mt("error",t),Mt("load",t);break;case"details":Mt("toggle",t);break;case"embed":case"source":case"link":Mt("error",t),Mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in a)if(a.hasOwnProperty(ne)&&(r=a[ne],r!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xt(t,n,ne,r,a,null)}return;default:if(Ot(n)){for(pe in a)a.hasOwnProperty(pe)&&(r=a[pe],r!==void 0&&Hf(t,n,pe,r,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(r=a[w],r!=null&&Xt(t,n,w,r,a,null))}function vy(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,x=null,w=null,H=null,ne=null,pe=null;for(ce in a){var ve=a[ce];if(a.hasOwnProperty(ce)&&ve!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":H=ve;default:r.hasOwnProperty(ce)||Xt(t,n,ce,null,r,ve)}}for(var le in r){var ce=r[le];if(ve=a[le],r.hasOwnProperty(le)&&(ce!=null||ve!=null))switch(le){case"type":f=ce;break;case"name":u=ce;break;case"checked":ne=ce;break;case"defaultChecked":pe=ce;break;case"value":x=ce;break;case"defaultValue":w=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(s(137,n));break;default:ce!==ve&&Xt(t,n,le,ce,r,ve)}}He(t,x,w,H,ne,pe,f,u);return;case"select":ce=x=w=le=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":ce=H;default:r.hasOwnProperty(f)||Xt(t,n,f,null,r,H)}for(u in r)if(f=r[u],H=a[u],r.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":le=f;break;case"defaultValue":w=f;break;case"multiple":x=f;default:f!==H&&Xt(t,n,u,f,r,H)}n=w,a=x,r=ce,le!=null?vn(t,!!a,le,!1):!!r!=!!a&&(n!=null?vn(t,!!a,n,!0):vn(t,!!a,a?[]:"",!1));return;case"textarea":ce=le=null;for(w in a)if(u=a[w],a.hasOwnProperty(w)&&u!=null&&!r.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Xt(t,n,w,null,r,u)}for(x in r)if(u=r[x],f=a[x],r.hasOwnProperty(x)&&(u!=null||f!=null))switch(x){case"value":le=u;break;case"defaultValue":ce=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Xt(t,n,x,u,r,f)}$n(t,le,ce);return;case"option":for(var We in a)if(le=a[We],a.hasOwnProperty(We)&&le!=null&&!r.hasOwnProperty(We))switch(We){case"selected":t.selected=!1;break;default:Xt(t,n,We,null,r,le)}for(H in r)if(le=r[H],ce=a[H],r.hasOwnProperty(H)&&le!==ce&&(le!=null||ce!=null))switch(H){case"selected":t.selected=le&&typeof le!="function"&&typeof le!="symbol";break;default:Xt(t,n,H,le,r,ce)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var nt in a)le=a[nt],a.hasOwnProperty(nt)&&le!=null&&!r.hasOwnProperty(nt)&&Xt(t,n,nt,null,r,le);for(ne in r)if(le=r[ne],ce=a[ne],r.hasOwnProperty(ne)&&le!==ce&&(le!=null||ce!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(s(137,n));break;default:Xt(t,n,ne,le,r,ce)}return;default:if(Ot(n)){for(var Wt in a)le=a[Wt],a.hasOwnProperty(Wt)&&le!==void 0&&!r.hasOwnProperty(Wt)&&Hf(t,n,Wt,void 0,r,le);for(pe in r)le=r[pe],ce=a[pe],!r.hasOwnProperty(pe)||le===ce||le===void 0&&ce===void 0||Hf(t,n,pe,le,r,ce);return}}for(var K in a)le=a[K],a.hasOwnProperty(K)&&le!=null&&!r.hasOwnProperty(K)&&Xt(t,n,K,null,r,le);for(ve in r)le=r[ve],ce=a[ve],!r.hasOwnProperty(ve)||le===ce||le==null&&ce==null||Xt(t,n,ve,le,r,ce)}function lg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function yy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,x=u.initiatorType,w=u.duration;if(f&&w&&lg(x)){for(x=0,w=u.responseEnd,r+=1;r<a.length;r++){var H=a[r],ne=H.startTime;if(ne>w)break;var pe=H.transferSize,ve=H.initiatorType;pe&&lg(ve)&&(H=H.responseEnd,x+=pe*(H<w?1:(w-ne)/(H-ne)))}if(--r,n+=8*(f+x)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Gf=null,Vf=null;function Kl(t){return t.nodeType===9?t:t.ownerDocument}function cg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ug(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function kf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Xf=null;function Sy(){var t=window.event;return t&&t.type==="popstate"?t===Xf?!1:(Xf=t,!0):(Xf=null,!1)}var fg=typeof setTimeout=="function"?setTimeout:void 0,My=typeof clearTimeout=="function"?clearTimeout:void 0,dg=typeof Promise=="function"?Promise:void 0,by=typeof queueMicrotask=="function"?queueMicrotask:typeof dg<"u"?function(t){return dg.resolve(null).then(t).catch(Ey)}:fg;function Ey(t){setTimeout(function(){throw t})}function qa(t){return t==="head"}function hg(t,n){var a=n,r=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(u),vr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")wo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,wo(a);for(var f=a.firstChild;f;){var x=f.nextSibling,w=f.nodeName;f[Ta]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&wo(t.ownerDocument.body);a=u}while(a);vr(n)}function pg(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Wf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Wf(a),Aa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Ty(t,n,a,r){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Ta])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=vi(t.nextSibling),t===null)break}return null}function Ay(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=vi(t.nextSibling),t===null))return null;return t}function mg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=vi(t.nextSibling),t===null))return null;return t}function qf(t){return t.data==="$?"||t.data==="$~"}function Yf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Ry(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function vi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var jf=null;function gg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return vi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function xg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function _g(t,n,a){switch(n=Kl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function wo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Aa(t)}var yi=new Map,vg=new Set;function Ql(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ha=G.d;G.d={f:wy,r:Cy,D:Dy,C:Ny,L:Uy,m:Ly,X:Py,S:Oy,M:zy};function wy(){var t=ha.f(),n=Vl();return t||n}function Cy(t){var n=Ki(t);n!==null&&n.tag===5&&n.type==="form"?zm(n):ha.r(t)}var gr=typeof document>"u"?null:document;function yg(t,n,a){var r=gr;if(r&&typeof n=="string"&&n){var u=Ft(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),vg.has(u)||(vg.add(u),t={rel:t,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Dn(n,"link",t),dn(n),r.head.appendChild(n)))}}function Dy(t){ha.D(t),yg("dns-prefetch",t,null)}function Ny(t,n){ha.C(t,n),yg("preconnect",t,n)}function Uy(t,n,a){ha.L(t,n,a);var r=gr;if(r&&t&&n){var u='link[rel="preload"][as="'+Ft(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ft(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ft(a.imageSizes)+'"]')):u+='[href="'+Ft(t)+'"]';var f=u;switch(n){case"style":f=xr(t);break;case"script":f=_r(t)}yi.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),yi.set(f,t),r.querySelector(u)!==null||n==="style"&&r.querySelector(Co(f))||n==="script"&&r.querySelector(Do(f))||(n=r.createElement("link"),Dn(n,"link",t),dn(n),r.head.appendChild(n)))}}function Ly(t,n){ha.m(t,n);var a=gr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ft(r)+'"][href="'+Ft(t)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=_r(t)}if(!yi.has(f)&&(t=v({rel:"modulepreload",href:t},n),yi.set(f,t),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Do(f)))return}r=a.createElement("link"),Dn(r,"link",t),dn(r),a.head.appendChild(r)}}}function Oy(t,n,a){ha.S(t,n,a);var r=gr;if(r&&t){var u=Ra(r).hoistableStyles,f=xr(t);n=n||"default";var x=u.get(f);if(!x){var w={loading:0,preload:null};if(x=r.querySelector(Co(f)))w.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=yi.get(f))&&Zf(t,a);var H=x=r.createElement("link");dn(H),Dn(H,"link",t),H._p=new Promise(function(ne,pe){H.onload=ne,H.onerror=pe}),H.addEventListener("load",function(){w.loading|=1}),H.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Jl(x,n,r)}x={type:"stylesheet",instance:x,count:1,state:w},u.set(f,x)}}}function Py(t,n){ha.X(t,n);var a=gr;if(a&&t){var r=Ra(a).hoistableScripts,u=_r(t),f=r.get(u);f||(f=a.querySelector(Do(u)),f||(t=v({src:t,async:!0},n),(n=yi.get(u))&&Kf(t,n),f=a.createElement("script"),dn(f),Dn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function zy(t,n){ha.M(t,n);var a=gr;if(a&&t){var r=Ra(a).hoistableScripts,u=_r(t),f=r.get(u);f||(f=a.querySelector(Do(u)),f||(t=v({src:t,async:!0,type:"module"},n),(n=yi.get(u))&&Kf(t,n),f=a.createElement("script"),dn(f),Dn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function Sg(t,n,a,r){var u=(u=se.current)?Ql(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=xr(a.href),a=Ra(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=xr(a.href);var f=Ra(u).hoistableStyles,x=f.get(t);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=u.querySelector(Co(t)))&&!f._p&&(x.instance=f,x.state.loading=5),yi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yi.set(t,a),f||Iy(u,t,a,x.state))),n&&r===null)throw Error(s(528,""));return x}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=_r(a),a=Ra(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function xr(t){return'href="'+Ft(t)+'"'}function Co(t){return'link[rel="stylesheet"]['+t+"]"}function Mg(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function Iy(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Dn(n,"link",a),dn(n),t.head.appendChild(n))}function _r(t){return'[src="'+Ft(t)+'"]'}function Do(t){return"script[async]"+t}function bg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+Ft(a.href)+'"]');if(r)return n.instance=r,dn(r),r;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),dn(r),Dn(r,"style",u),Jl(r,a.precedence,t),n.instance=r;case"stylesheet":u=xr(a.href);var f=t.querySelector(Co(u));if(f)return n.state.loading|=4,n.instance=f,dn(f),f;r=Mg(a),(u=yi.get(u))&&Zf(r,u),f=(t.ownerDocument||t).createElement("link"),dn(f);var x=f;return x._p=new Promise(function(w,H){x.onload=w,x.onerror=H}),Dn(f,"link",r),n.state.loading|=4,Jl(f,a.precedence,t),n.instance=f;case"script":return f=_r(a.src),(u=t.querySelector(Do(f)))?(n.instance=u,dn(u),u):(r=a,(u=yi.get(f))&&(r=v({},a),Kf(r,u)),t=t.ownerDocument||t,u=t.createElement("script"),dn(u),Dn(u,"link",r),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Jl(r,a.precedence,t));return n.instance}function Jl(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,x=0;x<r.length;x++){var w=r[x];if(w.dataset.precedence===n)f=w;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Zf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Kf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var $l=null;function Eg(t,n,a){if($l===null){var r=new Map,u=$l=new Map;u.set(a,r)}else u=$l,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Ta]||f[fn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var w=r.get(x);w?w.push(f):r.set(x,[f])}}return r}function Tg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Fy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ag(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function By(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=xr(r.href),f=n.querySelector(Co(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=ec.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,dn(f);return}f=n.ownerDocument||n,r=Mg(r),(u=yi.get(u))&&Zf(r,u),f=f.createElement("link"),dn(f);var x=f;x._p=new Promise(function(w,H){x.onload=w,x.onerror=H}),Dn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ec.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Qf=0;function Hy(t,n){return t.stylesheets&&t.count===0&&nc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&nc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Qf===0&&(Qf=62500*yy());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&nc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Qf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function ec(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)nc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var tc=null;function nc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,tc=new Map,n.forEach(Gy,t),tc=null,ec.call(t))}function Gy(t,n){if(!(n.state.loading&4)){var a=tc.get(t);if(a)var r=a.get(null);else{a=new Map,tc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var x=u[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),r=x)}r&&a.set(null,r)}u=n.instance,x=u.getAttribute("data-precedence"),f=a.get(x)||r,f===r&&a.set(null,u),a.set(x,u),this.count++,r=ec.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var No={$$typeof:I,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function Vy(t,n,a,r,u,f,x,w,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qe(0),this.hiddenUpdates=qe(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function Rg(t,n,a,r,u,f,x,w,H,ne,pe,ve){return t=new Vy(t,n,a,x,H,ne,pe,ve,w),n=1,f===!0&&(n|=24),f=ni(3,null,null,n),t.current=f,f.stateNode=t,n=Cu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Lu(f),t}function wg(t){return t?(t=Zs,t):Zs}function Cg(t,n,a,r,u,f){u=wg(u),r.context===null?r.context=u:r.pendingContext=u,r=Pa(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=za(t,r,n),a!==null&&(Yn(a,t,n),lo(a,t,n))}function Dg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Jf(t,n){Dg(t,n),(t=t.alternate)&&Dg(t,n)}function Ng(t){if(t.tag===13||t.tag===31){var n=ms(t,67108864);n!==null&&Yn(n,t,67108864),Jf(t,67108864)}}function Ug(t){if(t.tag===13||t.tag===31){var n=oi();n=Xr(n);var a=ms(t,n);a!==null&&Yn(a,t,n),Jf(t,n)}}var ic=!0;function ky(t,n,a,r){var u=B.T;B.T=null;var f=G.p;try{G.p=2,$f(t,n,a,r)}finally{G.p=f,B.T=u}}function Xy(t,n,a,r){var u=B.T;B.T=null;var f=G.p;try{G.p=8,$f(t,n,a,r)}finally{G.p=f,B.T=u}}function $f(t,n,a,r){if(ic){var u=ed(r);if(u===null)Bf(t,n,r,ac,a),Og(t,r);else if(qy(u,t,n,a,r))r.stopPropagation();else if(Og(t,r),n&4&&-1<Wy.indexOf(t)){for(;u!==null;){var f=Ki(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=we(f.pendingLanes);if(x!==0){var w=f;for(w.pendingLanes|=2,w.entangledLanes|=2;x;){var H=1<<31-ze(x);w.entanglements[1]|=H,x&=~H}Bi(f),(Ut&6)===0&&(Hl=et()+500,To(0))}}break;case 31:case 13:w=ms(f,2),w!==null&&Yn(w,f,2),Vl(),Jf(f,2)}if(f=ed(r),f===null&&Bf(t,n,r,ac,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else Bf(t,n,r,null,a)}}function ed(t){return t=tu(t),td(t)}var ac=null;function td(t){if(ac=null,t=Zi(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ac=t,null}function Lg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(at()){case L:return 2;case M:return 8;case Z:case re:return 32;case fe:return 268435456;default:return 32}default:return 32}}var nd=!1,Ya=null,ja=null,Za=null,Uo=new Map,Lo=new Map,Ka=[],Wy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Og(t,n){switch(t){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":ja=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":Uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(n.pointerId)}}function Oo(t,n,a,r,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ki(n),n!==null&&Ng(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function qy(t,n,a,r,u){switch(n){case"focusin":return Ya=Oo(Ya,t,n,a,r,u),!0;case"dragenter":return ja=Oo(ja,t,n,a,r,u),!0;case"mouseover":return Za=Oo(Za,t,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return Uo.set(f,Oo(Uo.get(f)||null,t,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Lo.set(f,Oo(Lo.get(f)||null,t,n,a,r,u)),!0}return!1}function Pg(t){var n=Zi(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Vs(t.priority,function(){Ug(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Vs(t.priority,function(){Ug(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ed(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);eu=r,a.target.dispatchEvent(r),eu=null}else return n=Ki(a),n!==null&&Ng(n),t.blockedOn=a,!1;n.shift()}return!0}function zg(t,n,a){sc(t)&&a.delete(n)}function Yy(){nd=!1,Ya!==null&&sc(Ya)&&(Ya=null),ja!==null&&sc(ja)&&(ja=null),Za!==null&&sc(Za)&&(Za=null),Uo.forEach(zg),Lo.forEach(zg)}function rc(t,n){t.blockedOn===n&&(t.blockedOn=null,nd||(nd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Yy)))}var oc=null;function Ig(t){oc!==t&&(oc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){oc===t&&(oc=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],u=t[n+2];if(typeof r!="function"){if(td(r||a)===null)continue;break}var f=Ki(a);f!==null&&(t.splice(n,3),n-=3,$u(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function vr(t){function n(H){return rc(H,t)}Ya!==null&&rc(Ya,t),ja!==null&&rc(ja,t),Za!==null&&rc(Za,t),Uo.forEach(n),Lo.forEach(n);for(var a=0;a<Ka.length;a++){var r=Ka[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Ka.length&&(a=Ka[0],a.blockedOn===null);)Pg(a),a.blockedOn===null&&Ka.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],x=u[An]||null;if(typeof f=="function")x||Ig(a);else if(x){var w=null;if(f&&f.hasAttribute("formAction")){if(u=f,x=f[An]||null)w=x.formAction;else if(td(u)!==null)continue}else w=x.action;typeof w=="function"?a[r+1]=w:(a.splice(r,3),r-=3),Ig(a)}}}function Fg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function id(t){this._internalRoot=t}lc.prototype.render=id.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=oi();Cg(a,r,t,n,null,null)},lc.prototype.unmount=id.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Cg(t.current,2,null,t,null,null),Vl(),n[Gn]=null}};function lc(t){this._internalRoot=t}lc.prototype.unstable_scheduleHydration=function(t){if(t){var n=qr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ka.length&&n!==0&&n<Ka[a].priority;a++);Ka.splice(a,0,t),a===0&&Pg(t)}};var Bg=e.version;if(Bg!=="19.2.8")throw Error(s(527,Bg,"19.2.8"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=h(n),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var jy={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{ue=cc.inject(jy),de=cc}catch{}}return zo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",u=qm,f=Ym,x=jm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Rg(t,1,!1,null,null,a,r,null,u,f,x,Fg),t[Gn]=n.current,Ff(t),new id(n)},zo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,u="",f=qm,x=Ym,w=jm,H=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=Rg(t,1,!0,n,a??null,r,u,H,f,x,w,Fg),n.context=wg(null),a=n.current,r=oi(),r=Xr(r),u=Pa(r),u.callback=null,za(a,u,r),a=r,n.current.lanes=a,Ve(n,a),Bi(n),t[Gn]=n.current,Ff(t),new lc(n)},zo.version="19.2.8",zo}var Zg;function sS(){if(Zg)return rd.exports;Zg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),rd.exports=aS(),rd.exports}var rS=sS();/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),lS=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase()),Kg=o=>{const e=lS(o);return e.charAt(0).toUpperCase()+e.slice(1)},n_=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim(),cS=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var uS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=ct.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:d,...p},m)=>ct.createElement("svg",{ref:m,...uS,width:e,height:e,stroke:o,strokeWidth:s?Number(i)*24/Number(e):i,className:n_("lucide",l),...!c&&!cS(p)&&{"aria-hidden":"true"},...p},[...d.map(([h,y])=>ct.createElement(h,y)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=(o,e)=>{const i=ct.forwardRef(({className:s,...l},c)=>ct.createElement(fS,{ref:c,iconNode:e,className:n_(`lucide-${oS(Kg(o))}`,`lucide-${o}`,s),...l}));return i.displayName=Kg(o),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],hS=_n("arrow-right",dS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],mS=_n("book-open",pS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],zs=_n("check",gS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Xd=_n("circle-check",xS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],vS=_n("columns-2",_S);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],jc=_n("copy",yS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],i_=_n("cpu",SS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],bS=_n("download",MS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],TS=_n("eye",ES);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],a_=_n("file-text",AS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],wS=_n("globe",RS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],DS=_n("layers",CS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Qg=_n("radio",NS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],LS=_n("rotate-ccw",US);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],PS=_n("search",OS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],s_=_n("sliders-vertical",zS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],r_=_n("sparkles",IS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],o_=_n("volume-2",FS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],l_=_n("volume-x",BS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],c_=_n("zap",HS),ws={title:"Fonix One-Page 3D Experience — Product Requirements Document (PRD)",version:"1.0.0-PROD",author:"Design Systems & WebGL Architecture Team",targetStudio:"AI Studio Engineering & Creative Collective",status:"Approved for Build",targetDate:"Q3 2026",tagline:"Sonic Spatial Intelligence & Next-Generation Acoustic Architecture"},GS=[{id:"executive-summary",title:"1. Executive Summary & Project Brief",badge:"Strategic Overview",audience:"all",summary:"High-level overview of the Fonix one-page 3D immersive web experience, brand positioning, and the primary creative imperative.",content:[{heading:"1.1 Product Mission & Brand Concept",paragraphs:["Fonix is pioneering the next paradigm in acoustic intelligence, spatial sound synthesis, and real-time audio visualization. The goal of this one-page digital experience is not merely to display a static 3D model, but to transform the browser window into a living acoustic-kinetic environment.","The website must convey precision engineering fused with ethereal auditory aesthetics. Visitors should immediately perceive Fonix as a category-defining brand operating at the intersection of high-fidelity acoustics, computational geometry, and visceral physical computing."],bulletPoints:[{title:"Core Aesthetic Benchmark",desc:"A museum-grade digital kinetic sculpture where 3D geometry responds organically to audio harmonics, user scrolling, and micro-cursor interactions."},{title:"Primary Conversion Goal",desc:"Guide users through an intuitive visual journey that establishes technological authority and drives developer / enterprise early-access inquiries."},{title:"Non-Derivative Mandate",desc:"Avoid generic WebGL tropes (floating purple spheres, repetitive card grids, canned camera pans). Every 3D movement must embody Fonix's acoustic physics."}]}]},{id:"visual-direction",title:"2. Visual Direction & 3D Aesthetics",badge:"Visual & 3D Art",audience:"3d-artists",summary:"Exact specifications for material shaders, optical qualities, lighting setups, color systems, typography pairings, and spatial asset definitions.",content:[{heading:"2.1 Material Qualities: The Dual-State Translucent Core",paragraphs:["The visual language of Fonix relies on a juxtaposition of two fundamental material states: 'Acoustic Glass' (an ultra-high purity, refractive, frosted optical medium) and 'Liquid Mercury Lattice' (a mirror-polished, non-Newtonian fluid metal core).","Unlike generic translucent plastic or standard glassmorphism, the Fonix material incorporates real-time chromatic dispersion (Abbe number approximation), dynamic internal caustics, and subtle fresnel rim luminescence that flares subtly during high harmonic activity."],specs:[{label:"Refractive Index (IOR)",value:"1.48 - 1.54",note:"Simulating heavy optical flint glass with edge chromatic separation"},{label:"Surface Roughness",value:"0.08 - 0.18",note:"Subtly frosted micro-facet roughness preserving specular clarity"},{label:"Transmission & Depth",value:"0.92 transmission, 1.25 depth",note:"Allows internal liquid chrome matrix to be refracted from within"},{label:"Specular Dispersion",value:"3-channel RGB offset (2.4nm)",note:"Prismatic color fringing on grazing angles without blur"}],callout:{type:"highlight",text:"Design Principle: 3D materials must feel cold to the touch, heavy with optical density, yet fluidly alive in response to acoustic vibrations."}},{heading:"2.2 Lighting Architecture & Color Palette",paragraphs:["The scene is illuminated using a three-point architectural lighting rig paired with an ambient HDR environment map tuned to deep celestial indigo and warm titanium amber.","High-contrast directional key lights slice across the geometric facets, casting sharp caustic glints that sweep as the user scrolls, while a subtle cool fill light preserves typography legibility across all viewport breakpoints."],bulletPoints:[{title:"Void Obsidian (#0B0D11)",desc:"Primary canvas background; deep, neutral near-black that absorbs glare and creates infinite negative depth."},{title:"Prismatic Luminescence (#5EEAD4 & #818CF8)",desc:"Refractive highlights that bloom on crests of kinetic soundwaves."},{title:"Liquid Platinum (#E2E8F0)",desc:"Specular gleams and internal core geometry reflecting high-frequency highlights."},{title:"Warm Titanium Accent (#F59E0B)",desc:"Reserved strictly for acoustic activation nodes, real-time metrics, and conversion triggers."}]},{heading:"2.3 Hero 3D Asset: The 'Resonating Acoustic Monolith'",paragraphs:["The centerpiece of the landing experience is the 'Fonix Kinetic Core' — an interconnected geometric sculpture composed of an outer icosahedral frosted crystal cage housing a continuously deforming liquid soundwave sphere.","When idle, it breathes with low-frequency rotational inertia. As the user moves the cursor or activates sound modes, the inner sphere pulses with harmonic sinusoidal displacement, sending ripples through the outer refractive crystalline shell."]},{heading:"2.4 Secondary 3D Elements & Atmospheric Particles",paragraphs:["Secondary 3D assets are positioned along the scroll narrative to anchor specific product pillars without cluttering the viewport.","These include: (1) Orbital Gyroscopic Wave Rings on the Feature matrix, (2) Refractive Glass Acoustic Nodes in the Architecture section, and (3) A particulate field of 2,400 floating sonic photons that react to mouse turbulence."]}]},{id:"motion-interaction",title:"3. Motion & Interaction Philosophy",badge:"Choreography & UX",audience:"designers",summary:"Detailed movement signatures, spring physics, scroll choreography, and tactile interaction models that differentiate Fonix from standard web animations.",content:[{heading:"3.1 Movement Philosophy: Viscoelastic Mechanical Fluidity",paragraphs:["Fonix motion rejects generic linear tweens and snappy bouncy springs. Instead, all movement adheres to a 'Viscoelastic Fluidity' model: actions have physical mass, high initial resistance, frictionless velocity, and soft asymptotic settling.","Motion communicates acoustic resonance — every interactive element behaves as if connected by invisible acoustic springs with dampening ratios calibrated to 432Hz harmonic frequencies."],bulletPoints:[{title:"Hero Entry Signature",desc:"Rather than a slide-up fade, the 3D Core implodes from a dispersed cloud of sonic light points, crystallizing into the solid refractive monolith over 1.4s with high-inertia camera zoom."},{title:"Continuous Spatial Thread",desc:"The 3D canvas is NOT destroyed or reloaded across sections. It acts as a continuous background viewport that rotates, scales, and morphs its geometry in sync with the user's scroll progress."},{title:"Magnetic Parallax Field",desc:"Cursor movement applies a dual-layered torque: the outer crystal rotates with a 0.05 lag factor, while the internal liquid core shifts oppositely with a 0.08 lag factor, creating tangible volumetric depth."}]},{heading:"3.2 Scroll-Triggered Morphing Choreography",paragraphs:["As the visitor scrolls down the single-page experience, the central 3D scene undergoes five distinct mathematical transformations:"],specs:[{label:"0% - 20% (Hero)",value:"Monolith State",note:"Intact crystalline cage with slow gyroscopic rotation and mouse tilt tracking"},{label:"20% - 45% (Architecture)",value:"Exploded Core",note:"Outer facets separate outward along normals, revealing the inner multi-layered sound engine"},{label:"45% - 70% (Harmonics)",value:"Waveform Ribbon",note:"Geometry collapses into an elongated dynamic sinusoidal ribbon undulating in 3D space"},{label:"70% - 85% (Interactive Lab)",value:"Orbital Matrix",note:"Transforms into an interactive particle cluster responding to real-time frequency knobs"},{label:"85% - 100% (CTA)",value:"Quantum Singularity",note:"High-density luminescent sphere drawing in ambient energy, focusing viewer gaze onto the CTA"}]}]},{id:"page-structure",title:"4. Page Structure & Section-by-Section Blueprint",badge:"Information Architecture",audience:"all",summary:"Comprehensive layout flow mapping copy, UI components, and the precise synchronized 3D behaviors across all 7 narrative stages.",content:[{heading:"4.1 Narrative Progression",paragraphs:["The one-page layout is organized as an escalating technical demonstration, transitioning from visceral visual impact to technical architecture, interactive proof, and enterprise partnership initiation."],bulletPoints:[{title:"Section 1: Hero — The Sonic Monolith",desc:"Full viewport frame with oversized display typography ('Redefining the Spatial Audio Continuum'), brand badge, live audio-reactive 3D hero asset, primary CTA ('Explore Sound Engine'), and scroll indicator."},{title:"Section 2: The Core Architecture — 3D Exploded Engine",desc:"Split layout where scrolling explodes the 3D monolith to expose 3 distinct architectural layers: Neural Acoustic Mesh, Zero-Latency DSP Pipeline, and Ultra-Low Dispersion Spatial Renderer."},{title:"Section 3: Kinetic Waveform Dynamics — Procedural Harmonics",desc:"Horizontal-fluid feature cards highlighting micro-second synchronization, binaural beamforming, and lossless parametric reconstruction, backed by real-time waveform displacement in WebGL."},{title:"Section 4: Spatial Performance Metrics & Benchmarks",desc:"High-contrast technical telemetry displaying verified performance benchmarks: 0.8ms DSP latency, 64-channel spatial resolution, 99.98% phase coherence, and 48kHz / 24-bit floating point precision."},{title:"Section 5: The Interactive Resonance Laboratory",desc:"An in-situ interactive playground allowing users to manipulate 3D shader parameters (roughness, dispersion, wave amplitude, frequency modulation) in real time with immediate WebGL feedback."},{title:"Section 6: Developer & Enterprise Integration Ecosystem",desc:"Clean SDK integration snippet, cross-platform engine support (WebAudio, C++ SDK, Unity, Unreal Engine 5), and architectural compatibility matrix."},{title:"Section 7: Final Conversion — The Quantum Singularity CTA",desc:"High-impact closing canvas where the 3D entity condenses into a glowing focal point, inviting early-access deployment and SDK license requests with instant form validation."}]}]},{id:"technical-performance",title:"5. Technical Architecture & Performance Budgets",badge:"Engineering & WebGL",audience:"developers",summary:"Rigorous technical specifications, shader optimization guidelines, frame rate targets, asset budgets, and mobile degradation strategies.",content:[{heading:"5.1 WebGL & Three.js Rendering Pipeline",paragraphs:["The 3D runtime is built upon Three.js (r160+) utilizing custom GLSL vertex and fragment shaders for procedural surface displacement and glass transmission, avoiding heavy unoptimized textures."],specs:[{label:"Target Frame Rate",value:"Solid 60 FPS (120 FPS on ProMotion displays)",note:"GPU frame budget capped at <11ms per tick"},{label:"Total Initial 3D Payload",value:"< 240 KB (Gzipped)",note:"100% procedural geometry and mathematical noise, no heavy GLTF files required"},{label:"Draw Call Budget",value:"< 14 draw calls per frame",note:"Leverages InstancedMesh for particles and combined geometry buffers"},{label:"Pixel Ratio Capping",value:"Math.min(window.devicePixelRatio, 2)",note:"Prevents GPU fill-rate exhaustion on ultra-dense 3x mobile screens"}]},{heading:"5.2 Responsive Strategy & Mobile Fallbacks",paragraphs:["On mobile viewports (<768px), the WebGL scene automatically switches to a low-overhead mobile profile:","1. Shader transmission passes are replaced with single-pass pseudo-refraction.","2. Particle counts scale dynamically from 2,400 to 600.","3. Touch gyro and swipe gestures substitute for mouse parallax tracking.","4. Battery/low-power mode auto-throttles the rendering loop to 30 FPS when idle."],callout:{type:"note",text:"Accessibility Mandate: Must respect 'prefers-reduced-motion' media query by disabling continuous auto-spin and smoothing transitions to gentle opacity crossfades."}}]},{id:"differentiation",title:"6. Differentiation Analysis vs. Generic 3D Sites",badge:"Competitive Edge",audience:"all",summary:"Detailed breakdown of the exact mechanical and visual differentiators separating Fonix from typical OnePageLove templates.",content:[{heading:"6.1 Elimination of Generic 3D Tropes",paragraphs:["Most 3D websites featured on design aggregators suffer from repetitive execution: generic purple-cyan gradients, detached floating spline bubbles, or heavy static 3D models that do not correlate with product functionality."],bulletPoints:[{title:"Functional Meaning vs. Cosmetic Decoration",desc:"In Fonix, every wave ripple directly maps to a simulated acoustic frequency. The 3D model is a functional representation of spatial sound processing, not a disconnected 3D mascot."},{title:"Physical-Optical Realism vs. Synthetic Pastel Plasticky Shaders",desc:"Instead of matte clay or candy-colored plastic shaders, Fonix leverages deep monochromatic obsidian glass, real optical dispersion, and liquid metal physics for a mature, ultra-luxury aesthetic."},{title:"Continuous Dynamic Spatial State vs. Section-Stitched Stills",desc:"The 3D scene maintains state continuity across the entire scroll length. The camera moves through a single coherent mathematical coordinate space rather than jumping between separate canvases."},{title:"Instant Zero-Wait Load vs. 20MB GLTF Loading Screens",desc:"By generating all geometry procedurally with custom mathematical vertex deformations, the entire 3D site loads instantly with 0-second asset downloading delays."}]}]}],Wd=`# Product Requirements Document (PRD)
## Project: Fonix One-Page 3D Experience
**Version:** 1.0.0-PROD  
**Target:** AI Studio Engineering & Design Teams  
**Status:** Approved for Build  

---

### 1. Executive Summary & Brand Concept
Fonix is a next-generation acoustic intelligence and spatial sound synthesis platform. This one-page digital experience transforms the browser window into a living acoustic-kinetic environment, communicating technical authority and visceral physical computing.

### 2. Visual Direction & 3D Aesthetics
- **Material Quality:** Dual-State Translucent Core combining 'Acoustic Glass' (IOR 1.48-1.54, optical flint glass with edge chromatic dispersion) and 'Liquid Mercury Lattice' (mirror-polished fluid metal core).
- **Lighting Rig:** Three-point architectural lighting + celestial ambient HDR. High-contrast directional key lights with dynamic caustic glints.
- **Color Palette:**
  - Void Obsidian (\`#0B0D11\`) — Primary canvas
  - Prismatic Luminescence (\`#5EEAD4\` & \`#818CF8\`) — Wave crest highlights
  - Liquid Platinum (\`#E2E8F0\`) — Core geometry highlights
  - Warm Titanium Accent (\`#F59E0B\`) — Acoustic nodes & primary conversion
- **Hero 3D Asset:** 'Resonating Acoustic Monolith' — icosahedral frosted crystal cage housing a continuously deforming harmonic liquid soundwave sphere.
- **Secondary 3D Elements:** Orbital gyroscopic wave rings, refractive glass acoustic nodes, and 2,400 particulate sonic photons.

### 3. Motion & Interaction Model
- **Movement Philosophy:** Viscoelastic mechanical fluidity with mass, inertia, and 432Hz harmonic dampening.
- **Scroll Choreography:**
  - 0% - 20%: Intact Monolith with mouse tilt
  - 20% - 45%: Exploded Core exposing 3 internal engine layers
  - 45% - 70%: Waveform Ribbon undulating in 3D
  - 70% - 85%: Orbital Interactive Matrix
  - 85% - 100%: Quantum Singularity focusing into CTA
- **Parallax:** Dual-layer torque with opposing lag factors (0.05 outer cage, 0.08 inner core).

### 4. Page Structure
1. **Hero:** Sonic Monolith, display headline, live 3D canvas, CTA trigger.
2. **Core Architecture:** 3-layer exploded 3D engine view with technical breakdown.
3. **Kinetic Waveforms:** Procedural harmonics with interactive frequency ribbon.
4. **Telemetry & Benchmarks:** 0.8ms latency, 64-channel spatial resolution, 99.98% phase coherence.
5. **Interactive Resonance Lab:** Real-time shader parameter sliders (roughness, IOR, dispersion, wave freq).
6. **Integration Ecosystem:** SDK code snippet and cross-platform compatibility matrix.
7. **Quantum Singularity CTA:** High-density focal point with early-access form.

### 5. Technical & Performance Specifications
- **Stack:** Three.js (r160+), Custom GLSL Shaders, Tailwind CSS, Framer Motion.
- **Performance Budget:** 60 FPS locked (<11ms GPU frame time), <240KB gzipped 3D payload.
- **Optimization:** Procedural mathematical geometry (no heavy GLTF files), InstancedMesh particles, pixelRatio capped at 2.0.
- **Mobile Strategy:** Single-pass pseudo-refraction, 600 particles, touch gyro, 30 FPS power-save mode.

### 6. Differentiation Notes
- Eliminates generic purple-cyan plastic spheres in favor of physical flint glass, caustic dispersion, and liquid metal.
- Replaces disconnected 3D decoration with real-time acoustic physics mapping.
- Guarantees instant sub-second cold start through zero-asset procedural geometry.
`,VS=({viewMode:o,onViewModeChange:e,isAudioPlaying:i,onToggleAudio:s})=>{const[l,c]=t_.useState(!1),d=()=>{navigator.clipboard.writeText(Wd),c(!0),setTimeout(()=>c(!1),2e3)};return A.jsxs("div",{className:"fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-1.5 bg-[#050505]/85 backdrop-blur-3xl border border-white/20 rounded-full shadow-[0_0_50px_rgba(45,212,191,0.12)]",children:[A.jsxs("div",{className:"flex items-center gap-1 bg-black/60 p-1 rounded-full border border-white/10",children:[A.jsxs("button",{onClick:()=>e("website"),id:"mode-website-btn",className:`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${o==="website"?"bg-teal-400 text-black shadow-[0_0_20px_rgba(45,212,191,0.4)]":"text-zinc-400 hover:text-white"}`,children:[A.jsx(wS,{className:"w-3.5 h-3.5"}),A.jsx("span",{className:"hidden sm:inline",children:"3D Website"})]}),A.jsxs("button",{onClick:()=>e("prd"),id:"mode-prd-btn",className:`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${o==="prd"?"bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]":"text-zinc-400 hover:text-white"}`,children:[A.jsx(a_,{className:"w-3.5 h-3.5"}),A.jsx("span",{className:"hidden sm:inline",children:"PRD Spec"})]}),A.jsxs("button",{onClick:()=>e("split"),id:"mode-split-btn",className:`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${o==="split"?"bg-amber-400 text-black shadow-[0_0_20px_rgba(251,191,36,0.35)]":"text-zinc-400 hover:text-white"}`,children:[A.jsx(vS,{className:"w-3.5 h-3.5"}),A.jsx("span",{className:"hidden md:inline",children:"Split / Inspector"})]})]}),A.jsx("div",{className:"h-4 w-px bg-white/20 mx-1 hidden sm:block"}),A.jsx("button",{onClick:s,id:"header-audio-toggle",title:"Toggle 432Hz Acoustic Drone",className:`p-2 rounded-full transition-all ${i?"bg-teal-500/20 text-teal-300 border border-teal-400/40 shadow-[0_0_15px_rgba(45,212,191,0.25)]":"text-zinc-400 hover:text-white hover:bg-white/10"}`,children:i?A.jsx(o_,{className:"w-4 h-4 text-teal-400"}):A.jsx(l_,{className:"w-4 h-4"})}),A.jsxs("button",{onClick:d,id:"header-quick-copy-prd",title:"Copy PRD Markdown",className:"flex items-center gap-1.5 px-3.5 py-1.5 bg-white/10 hover:bg-white/15 text-zinc-200 hover:text-white rounded-full text-xs font-medium border border-white/15 transition-all shadow-sm",children:[l?A.jsx(zs,{className:"w-3.5 h-3.5 text-teal-400"}):A.jsx(jc,{className:"w-3.5 h-3.5"}),A.jsx("span",{className:"hidden lg:inline",children:l?"Copied!":"Copy PRD"})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hh="185",kS=0,Jg=1,XS=2,Oc=1,WS=2,Xo=3,rs=0,Zn=1,va=2,Sa=0,Or=1,qd=2,$g=3,ex=4,qS=5,Os=100,YS=101,jS=102,ZS=103,KS=104,QS=200,JS=201,$S=202,eM=203,Yd=204,jd=205,tM=206,nM=207,iM=208,aM=209,sM=210,rM=211,oM=212,lM=213,cM=214,Zd=0,Kd=1,Qd=2,Ir=3,Jd=4,$d=5,eh=6,th=7,u_=0,uM=1,fM=2,Wi=0,f_=1,d_=2,h_=3,Gh=4,p_=5,m_=6,g_=7,x_=300,Bs=301,Fr=302,ud=303,fd=304,Zc=306,nh=1e3,ya=1001,ih=1002,Nn=1003,dM=1004,uc=1005,In=1006,dd=1007,Is=1008,fi=1009,__=1010,v_=1011,Yo=1012,Vh=1013,Yi=1014,ki=1015,ba=1016,kh=1017,Xh=1018,jo=1020,y_=35902,S_=35899,M_=1021,b_=1022,Li=1023,Ea=1026,Fs=1027,E_=1028,Wh=1029,Hs=1030,qh=1031,Yh=1033,Pc=33776,zc=33777,Ic=33778,Fc=33779,ah=35840,sh=35841,rh=35842,oh=35843,lh=36196,ch=37492,uh=37496,fh=37488,dh=37489,Gc=37490,hh=37491,ph=37808,mh=37809,gh=37810,xh=37811,_h=37812,vh=37813,yh=37814,Sh=37815,Mh=37816,bh=37817,Eh=37818,Th=37819,Ah=37820,Rh=37821,wh=36492,Ch=36494,Dh=36495,Nh=36283,Uh=36284,Vc=36285,Lh=36286,hM=3200,Oh=0,pM=1,as="",Mi="srgb",kc="srgb-linear",Xc="linear",Vt="srgb",yr=7680,tx=519,mM=512,gM=513,xM=514,jh=515,_M=516,vM=517,Zh=518,yM=519,nx=35044,ix="300 es",Xi=2e3,Zo=2001;function SM(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Wc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function MM(){const o=Wc("canvas");return o.style.display="block",o}const ax={};function sx(...o){const e="THREE."+o.shift();console.log(e,...o)}function T_(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function it(...o){o=T_(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function wt(...o){o=T_(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function Pr(...o){const e=o.join(" ");e in ax||(ax[e]=!0,it(...o))}function bM(o,e,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const EM={[Zd]:Kd,[Qd]:eh,[Jd]:th,[Ir]:$d,[Kd]:Zd,[eh]:Qd,[th]:Jd,[$d]:Ir};class Gs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hd=Math.PI/180,Ph=180/Math.PI;function Ko(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[o&255]+Pn[o>>8&255]+Pn[o>>16&255]+Pn[o>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function Tt(o,e,i){return Math.max(e,Math.min(i,o))}function TM(o,e){return(o%e+e)%e}function pd(o,e,i){return(1-i)*o+i*e}function Io(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function jn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ip=class ip{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Tt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*l+e.x,this.y=c*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ip.prototype.isVector2=!0;let xt=ip;class Gr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,d,p){let m=s[l+0],h=s[l+1],y=s[l+2],v=s[l+3],g=c[d+0],b=c[d+1],T=c[d+2],N=c[d+3];if(v!==N||m!==g||h!==b||y!==T){let S=m*g+h*b+y*T+v*N;S<0&&(g=-g,b=-b,T=-T,N=-N,S=-S);let _=1-p;if(S<.9995){const U=Math.acos(S),I=Math.sin(U);_=Math.sin(_*U)/I,p=Math.sin(p*U)/I,m=m*_+g*p,h=h*_+b*p,y=y*_+T*p,v=v*_+N*p}else{m=m*_+g*p,h=h*_+b*p,y=y*_+T*p,v=v*_+N*p;const U=1/Math.sqrt(m*m+h*h+y*y+v*v);m*=U,h*=U,y*=U,v*=U}}e[i]=m,e[i+1]=h,e[i+2]=y,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,l,c,d){const p=s[l],m=s[l+1],h=s[l+2],y=s[l+3],v=c[d],g=c[d+1],b=c[d+2],T=c[d+3];return e[i]=p*T+y*v+m*b-h*g,e[i+1]=m*T+y*g+h*v-p*b,e[i+2]=h*T+y*b+p*g-m*v,e[i+3]=y*T-p*v-m*g-h*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,d=e._order,p=Math.cos,m=Math.sin,h=p(s/2),y=p(l/2),v=p(c/2),g=m(s/2),b=m(l/2),T=m(c/2);switch(d){case"XYZ":this._x=g*y*v+h*b*T,this._y=h*b*v-g*y*T,this._z=h*y*T+g*b*v,this._w=h*y*v-g*b*T;break;case"YXZ":this._x=g*y*v+h*b*T,this._y=h*b*v-g*y*T,this._z=h*y*T-g*b*v,this._w=h*y*v+g*b*T;break;case"ZXY":this._x=g*y*v-h*b*T,this._y=h*b*v+g*y*T,this._z=h*y*T+g*b*v,this._w=h*y*v-g*b*T;break;case"ZYX":this._x=g*y*v-h*b*T,this._y=h*b*v+g*y*T,this._z=h*y*T-g*b*v,this._w=h*y*v+g*b*T;break;case"YZX":this._x=g*y*v+h*b*T,this._y=h*b*v+g*y*T,this._z=h*y*T-g*b*v,this._w=h*y*v-g*b*T;break;case"XZY":this._x=g*y*v-h*b*T,this._y=h*b*v-g*y*T,this._z=h*y*T+g*b*v,this._w=h*y*v+g*b*T;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],y=i[6],v=i[10],g=s+p+v;if(g>0){const b=.5/Math.sqrt(g+1);this._w=.25/b,this._x=(y-m)*b,this._y=(c-h)*b,this._z=(d-l)*b}else if(s>p&&s>v){const b=2*Math.sqrt(1+s-p-v);this._w=(y-m)/b,this._x=.25*b,this._y=(l+d)/b,this._z=(c+h)/b}else if(p>v){const b=2*Math.sqrt(1+p-s-v);this._w=(c-h)/b,this._x=(l+d)/b,this._y=.25*b,this._z=(m+y)/b}else{const b=2*Math.sqrt(1+v-s-p);this._w=(d-l)/b,this._x=(c+h)/b,this._y=(m+y)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,d=e._w,p=i._x,m=i._y,h=i._z,y=i._w;return this._x=s*y+d*p+l*h-c*m,this._y=l*y+d*m+c*p-s*h,this._z=c*y+d*h+s*m-l*p,this._w=d*y-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,d=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),y=Math.sin(h);m=Math.sin(m*h)/y,i=Math.sin(i*h)/y,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ap=class ap{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(rx.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(rx.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,d=e.y,p=e.z,m=e.w,h=2*(d*l-p*s),y=2*(p*i-c*l),v=2*(c*s-d*i);return this.x=i+m*h+d*v-p*y,this.y=s+m*y+p*h-c*v,this.z=l+m*v+c*y-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this.z=Tt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this.z=Tt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-s*m,this.z=s*p-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return md.copy(this).projectOnVector(e),this.sub(md)}reflect(e){return this.sub(md.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Tt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ap.prototype.isVector3=!0;let $=ap;const md=new $,rx=new Gr,sp=class sp{constructor(e,i,s,l,c,d,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,p,m,h)}set(e,i,s,l,c,d,p,m,h){const y=this.elements;return y[0]=e,y[1]=l,y[2]=p,y[3]=i,y[4]=c,y[5]=m,y[6]=s,y[7]=d,y[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],p=s[3],m=s[6],h=s[1],y=s[4],v=s[7],g=s[2],b=s[5],T=s[8],N=l[0],S=l[3],_=l[6],U=l[1],I=l[4],C=l[7],F=l[2],D=l[5],O=l[8];return c[0]=d*N+p*U+m*F,c[3]=d*S+p*I+m*D,c[6]=d*_+p*C+m*O,c[1]=h*N+y*U+v*F,c[4]=h*S+y*I+v*D,c[7]=h*_+y*C+v*O,c[2]=g*N+b*U+T*F,c[5]=g*S+b*I+T*D,c[8]=g*_+b*C+T*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],y=e[8];return i*d*y-i*p*h-s*c*y+s*p*m+l*c*h-l*d*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],y=e[8],v=y*d-p*h,g=p*m-y*c,b=h*c-d*m,T=i*v+s*g+l*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/T;return e[0]=v*N,e[1]=(l*h-y*s)*N,e[2]=(p*s-l*d)*N,e[3]=g*N,e[4]=(y*i-l*m)*N,e[5]=(l*c-p*i)*N,e[6]=b*N,e[7]=(s*m-h*i)*N,e[8]=(d*i-s*c)*N,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*d+h*p)+d+e,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(e,i){return Pr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(gd.makeScale(e,i)),this}rotate(e){return Pr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(gd.makeRotation(-e)),this}translate(e,i){return Pr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(gd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};sp.prototype.isMatrix3=!0;let ot=sp;const gd=new ot,ox=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lx=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function AM(){const o={enabled:!0,workingColorSpace:kc,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Vt&&(l.r=Ma(l.r),l.g=Ma(l.g),l.b=Ma(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Vt&&(l.r=zr(l.r),l.g=zr(l.g),l.b=zr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===as?Xc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Pr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Pr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[kc]:{primaries:e,whitePoint:s,transfer:Xc,toXYZ:ox,fromXYZ:lx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:e,whitePoint:s,transfer:Vt,toXYZ:ox,fromXYZ:lx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),o}const Rt=AM();function Ma(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function zr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Sr;class RM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Sr===void 0&&(Sr=Wc("canvas")),Sr.width=e.width,Sr.height=e.height;const l=Sr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Sr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Wc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Ma(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ma(i[s]/255)*255):i[s]=Ma(i[s]);return{data:i,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wM=0;class Kh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=Ko(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(xd(l[d].image)):c.push(xd(l[d]))}else c=xd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function xd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?RM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let CM=0;const _d=new $;class Hn extends Gs{constructor(e=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,s=ya,l=ya,c=In,d=Is,p=Li,m=fi,h=Hn.DEFAULT_ANISOTROPY,y=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=Ko(),this.name="",this.source=new Kh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=y,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(_d).x}get height(){return this.source.getSize(_d).y}get depth(){return this.source.getSize(_d).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){it(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){it(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==x_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nh:e.x=e.x-Math.floor(e.x);break;case ya:e.x=e.x<0?0:1;break;case ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nh:e.y=e.y-Math.floor(e.y);break;case ya:e.y=e.y<0?0:1;break;case ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=x_;Hn.DEFAULT_ANISOTROPY=1;const rp=class rp{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,h=m[0],y=m[4],v=m[8],g=m[1],b=m[5],T=m[9],N=m[2],S=m[6],_=m[10];if(Math.abs(y-g)<.01&&Math.abs(v-N)<.01&&Math.abs(T-S)<.01){if(Math.abs(y+g)<.1&&Math.abs(v+N)<.1&&Math.abs(T+S)<.1&&Math.abs(h+b+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const I=(h+1)/2,C=(b+1)/2,F=(_+1)/2,D=(y+g)/4,O=(v+N)/4,E=(T+S)/4;return I>C&&I>F?I<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(I),l=D/s,c=O/s):C>F?C<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),s=D/l,c=E/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=O/c,l=E/c),this.set(s,l,c,i),this}let U=Math.sqrt((S-T)*(S-T)+(v-N)*(v-N)+(g-y)*(g-y));return Math.abs(U)<.001&&(U=1),this.x=(S-T)/U,this.y=(v-N)/U,this.z=(g-y)/U,this.w=Math.acos((h+b+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this.z=Tt(this.z,e.z,i.z),this.w=Tt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this.z=Tt(this.z,e,i),this.w=Tt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};rp.prototype.isVector4=!0;let sn=rp;class DM extends Gs{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new sn(0,0,e,i),this.scissorTest=!1,this.viewport=new sn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Hn(l),d=s.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Kh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends DM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class A_ extends Hn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class NM extends Hn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yc=class Yc{constructor(e,i,s,l,c,d,p,m,h,y,v,g,b,T,N,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,p,m,h,y,v,g,b,T,N,S)}set(e,i,s,l,c,d,p,m,h,y,v,g,b,T,N,S){const _=this.elements;return _[0]=e,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=d,_[9]=p,_[13]=m,_[2]=h,_[6]=y,_[10]=v,_[14]=g,_[3]=b,_[7]=T,_[11]=N,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yc().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Mr.setFromMatrixColumn(e,0).length(),c=1/Mr.setFromMatrixColumn(e,1).length(),d=1/Mr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,d=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),y=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const g=d*y,b=d*v,T=p*y,N=p*v;i[0]=m*y,i[4]=-m*v,i[8]=h,i[1]=b+T*h,i[5]=g-N*h,i[9]=-p*m,i[2]=N-g*h,i[6]=T+b*h,i[10]=d*m}else if(e.order==="YXZ"){const g=m*y,b=m*v,T=h*y,N=h*v;i[0]=g+N*p,i[4]=T*p-b,i[8]=d*h,i[1]=d*v,i[5]=d*y,i[9]=-p,i[2]=b*p-T,i[6]=N+g*p,i[10]=d*m}else if(e.order==="ZXY"){const g=m*y,b=m*v,T=h*y,N=h*v;i[0]=g-N*p,i[4]=-d*v,i[8]=T+b*p,i[1]=b+T*p,i[5]=d*y,i[9]=N-g*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(e.order==="ZYX"){const g=d*y,b=d*v,T=p*y,N=p*v;i[0]=m*y,i[4]=T*h-b,i[8]=g*h+N,i[1]=m*v,i[5]=N*h+g,i[9]=b*h-T,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(e.order==="YZX"){const g=d*m,b=d*h,T=p*m,N=p*h;i[0]=m*y,i[4]=N-g*v,i[8]=T*v+b,i[1]=v,i[5]=d*y,i[9]=-p*y,i[2]=-h*y,i[6]=b*v+T,i[10]=g-N*v}else if(e.order==="XZY"){const g=d*m,b=d*h,T=p*m,N=p*h;i[0]=m*y,i[4]=-v,i[8]=h*y,i[1]=g*v+N,i[5]=d*y,i[9]=b*v-T,i[2]=T*v-b,i[6]=p*y,i[10]=N*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(UM,e,LM)}lookAt(e,i,s){const l=this.elements;return li.subVectors(e,i),li.lengthSq()===0&&(li.z=1),li.normalize(),Ja.crossVectors(s,li),Ja.lengthSq()===0&&(Math.abs(s.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),Ja.crossVectors(s,li)),Ja.normalize(),fc.crossVectors(li,Ja),l[0]=Ja.x,l[4]=fc.x,l[8]=li.x,l[1]=Ja.y,l[5]=fc.y,l[9]=li.y,l[2]=Ja.z,l[6]=fc.z,l[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],p=s[4],m=s[8],h=s[12],y=s[1],v=s[5],g=s[9],b=s[13],T=s[2],N=s[6],S=s[10],_=s[14],U=s[3],I=s[7],C=s[11],F=s[15],D=l[0],O=l[4],E=l[8],P=l[12],k=l[1],V=l[5],Q=l[9],he=l[13],_e=l[2],J=l[6],B=l[10],G=l[14],ee=l[3],me=l[7],Ee=l[11],z=l[15];return c[0]=d*D+p*k+m*_e+h*ee,c[4]=d*O+p*V+m*J+h*me,c[8]=d*E+p*Q+m*B+h*Ee,c[12]=d*P+p*he+m*G+h*z,c[1]=y*D+v*k+g*_e+b*ee,c[5]=y*O+v*V+g*J+b*me,c[9]=y*E+v*Q+g*B+b*Ee,c[13]=y*P+v*he+g*G+b*z,c[2]=T*D+N*k+S*_e+_*ee,c[6]=T*O+N*V+S*J+_*me,c[10]=T*E+N*Q+S*B+_*Ee,c[14]=T*P+N*he+S*G+_*z,c[3]=U*D+I*k+C*_e+F*ee,c[7]=U*O+I*V+C*J+F*me,c[11]=U*E+I*Q+C*B+F*Ee,c[15]=U*P+I*he+C*G+F*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],d=e[1],p=e[5],m=e[9],h=e[13],y=e[2],v=e[6],g=e[10],b=e[14],T=e[3],N=e[7],S=e[11],_=e[15],U=m*b-h*g,I=p*b-h*v,C=p*g-m*v,F=d*b-h*y,D=d*g-m*y,O=d*v-p*y;return i*(N*U-S*I+_*C)-s*(T*U-S*F+_*D)+l*(T*I-N*F+_*O)-c*(T*C-N*D+S*O)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[1],d=e[5],p=e[9],m=e[2],h=e[6],y=e[10];return i*(d*y-p*h)-s*(c*y-p*m)+l*(c*h-d*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],y=e[8],v=e[9],g=e[10],b=e[11],T=e[12],N=e[13],S=e[14],_=e[15],U=i*p-s*d,I=i*m-l*d,C=i*h-c*d,F=s*m-l*p,D=s*h-c*p,O=l*h-c*m,E=y*N-v*T,P=y*S-g*T,k=y*_-b*T,V=v*S-g*N,Q=v*_-b*N,he=g*_-b*S,_e=U*he-I*Q+C*V+F*k-D*P+O*E;if(_e===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/_e;return e[0]=(p*he-m*Q+h*V)*J,e[1]=(l*Q-s*he-c*V)*J,e[2]=(N*O-S*D+_*F)*J,e[3]=(g*D-v*O-b*F)*J,e[4]=(m*k-d*he-h*P)*J,e[5]=(i*he-l*k+c*P)*J,e[6]=(S*C-T*O-_*I)*J,e[7]=(y*O-g*C+b*I)*J,e[8]=(d*Q-p*k+h*E)*J,e[9]=(s*k-i*Q-c*E)*J,e[10]=(T*D-N*C+_*U)*J,e[11]=(v*C-y*D-b*U)*J,e[12]=(p*P-d*V-m*E)*J,e[13]=(i*V-s*P+l*E)*J,e[14]=(N*I-T*F-S*U)*J,e[15]=(y*F-v*I+g*U)*J,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=e.x,p=e.y,m=e.z,h=c*d,y=c*p;return this.set(h*d+s,h*p-l*m,h*m+l*p,0,h*p+l*m,y*p+s,y*m-l*d,0,h*m-l*p,y*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,d){return this.set(1,s,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,y=d+d,v=p+p,g=c*h,b=c*y,T=c*v,N=d*y,S=d*v,_=p*v,U=m*h,I=m*y,C=m*v,F=s.x,D=s.y,O=s.z;return l[0]=(1-(N+_))*F,l[1]=(b+C)*F,l[2]=(T-I)*F,l[3]=0,l[4]=(b-C)*D,l[5]=(1-(g+_))*D,l[6]=(S+U)*D,l[7]=0,l[8]=(T+I)*O,l[9]=(S-U)*O,l[10]=(1-(g+N))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let d=Mr.set(l[0],l[1],l[2]).length();const p=Mr.set(l[4],l[5],l[6]).length(),m=Mr.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Ci.copy(this);const h=1/d,y=1/p,v=1/m;return Ci.elements[0]*=h,Ci.elements[1]*=h,Ci.elements[2]*=h,Ci.elements[4]*=y,Ci.elements[5]*=y,Ci.elements[6]*=y,Ci.elements[8]*=v,Ci.elements[9]*=v,Ci.elements[10]*=v,i.setFromRotationMatrix(Ci),s.x=d,s.y=p,s.z=m,this}makePerspective(e,i,s,l,c,d,p=Xi,m=!1){const h=this.elements,y=2*c/(i-e),v=2*c/(s-l),g=(i+e)/(i-e),b=(s+l)/(s-l);let T,N;if(m)T=c/(d-c),N=d*c/(d-c);else if(p===Xi)T=-(d+c)/(d-c),N=-2*d*c/(d-c);else if(p===Zo)T=-d/(d-c),N=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=y,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=v,h[9]=b,h[13]=0,h[2]=0,h[6]=0,h[10]=T,h[14]=N,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,s,l,c,d,p=Xi,m=!1){const h=this.elements,y=2/(i-e),v=2/(s-l),g=-(i+e)/(i-e),b=-(s+l)/(s-l);let T,N;if(m)T=1/(d-c),N=d/(d-c);else if(p===Xi)T=-2/(d-c),N=-(d+c)/(d-c);else if(p===Zo)T=-1/(d-c),N=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=y,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=v,h[9]=0,h[13]=b,h[2]=0,h[6]=0,h[10]=T,h[14]=N,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};Yc.prototype.isMatrix4=!0;let rn=Yc;const Mr=new $,Ci=new rn,UM=new $(0,0,0),LM=new $(1,1,1),Ja=new $,fc=new $,li=new $,cx=new rn,ux=new Gr;class os{constructor(e=0,i=0,s=0,l=os.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],y=l[9],v=l[2],g=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(Tt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-y,b),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(p,b),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,b),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Tt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,b),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(Tt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-y,h),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(p,b));break;case"XZY":this._z=Math.asin(-Tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-y,b),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return cx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cx,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return ux.setFromEuler(this),this.setFromQuaternion(ux,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}os.DEFAULT_ORDER="XYZ";class R_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let OM=0;const fx=new $,br=new Gr,pa=new rn,dc=new $,Fo=new $,PM=new $,zM=new Gr,dx=new $(1,0,0),hx=new $(0,1,0),px=new $(0,0,1),mx={type:"added"},IM={type:"removed"},Er={type:"childadded",child:null},vd={type:"childremoved",child:null};class Un extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=Ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const e=new $,i=new os,s=new Gr,l=new $(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new rn},normalMatrix:{value:new ot}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new R_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return br.setFromAxisAngle(e,i),this.quaternion.multiply(br),this}rotateOnWorldAxis(e,i){return br.setFromAxisAngle(e,i),this.quaternion.premultiply(br),this}rotateX(e){return this.rotateOnAxis(dx,e)}rotateY(e){return this.rotateOnAxis(hx,e)}rotateZ(e){return this.rotateOnAxis(px,e)}translateOnAxis(e,i){return fx.copy(e).applyQuaternion(this.quaternion),this.position.add(fx.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(dx,e)}translateY(e){return this.translateOnAxis(hx,e)}translateZ(e){return this.translateOnAxis(px,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?dc.copy(e):dc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pa.lookAt(Fo,dc,this.up):pa.lookAt(dc,Fo,this.up),this.quaternion.setFromRotationMatrix(pa),l&&(pa.extractRotation(l.matrixWorld),br.setFromRotationMatrix(pa),this.quaternion.premultiply(br.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mx),Er.child=e,this.dispatchEvent(Er),Er.child=null):wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(IM),vd.child=e,this.dispatchEvent(vd),vd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pa.multiply(e.parent.matrixWorld)),e.applyMatrix4(pa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mx),Er.child=e,this.dispatchEvent(Er),Er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,e,PM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,zM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let d=0,p=c.length;d<p;d++)c[d].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,y=m.length;h<y;h++){const v=m[h];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=d(e.geometries),m=d(e.materials),h=d(e.textures),y=d(e.images),v=d(e.shapes),g=d(e.skeletons),b=d(e.animations),T=d(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),y.length>0&&(s.images=y),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),b.length>0&&(s.animations=b),T.length>0&&(s.nodes=T)}return s.object=l,s;function d(p){const m=[];for(const h in p){const y=p[h];delete y.metadata,m.push(y)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Un.DEFAULT_UP=new $(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Wo extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FM={type:"move"};class yd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const N of e.hand.values()){const S=i.getJointPose(N,s),_=this._getHandJoint(h,N);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const y=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],g=y.position.distanceTo(v.position),b=.02,T=.005;h.inputState.pinching&&g>b+T?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=b-T&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(FM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Wo;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const w_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$a={h:0,s:0,l:0},hc={h:0,s:0,l:0};function Sd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class mt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Rt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Rt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Rt.workingColorSpace){if(e=TM(e,1),i=Tt(i,0,1),s=Tt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Sd(d,c,e+1/3),this.g=Sd(d,c,e),this.b=Sd(d,c,e-1/3)}return Rt.colorSpaceToWorking(this,l),this}setStyle(e,i=Mi){function s(c){c!==void 0&&parseFloat(c)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:it("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Mi){const s=w_[e.toLowerCase()];return s!==void 0?this.setHex(s,i):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}copyLinearToSRGB(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mi){return Rt.workingToColorSpace(zn.copy(this),e),Math.round(Tt(zn.r*255,0,255))*65536+Math.round(Tt(zn.g*255,0,255))*256+Math.round(Tt(zn.b*255,0,255))}getHexString(e=Mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Rt.workingColorSpace){Rt.workingToColorSpace(zn.copy(this),i);const s=zn.r,l=zn.g,c=zn.b,d=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const y=(p+d)/2;if(p===d)m=0,h=0;else{const v=d-p;switch(h=y<=.5?v/(d+p):v/(2-d-p),d){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return e.h=m,e.s=h,e.l=y,e}getRGB(e,i=Rt.workingColorSpace){return Rt.workingToColorSpace(zn.copy(this),i),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=Mi){Rt.workingToColorSpace(zn.copy(this),e);const i=zn.r,s=zn.g,l=zn.b;return e!==Mi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL($a),this.setHSL($a.h+e,$a.s+i,$a.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL($a),e.getHSL(hc);const s=pd($a.h,hc.h,i),l=pd($a.s,hc.s,i),c=pd($a.l,hc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new mt;mt.NAMES=w_;class BM extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new os,this.environmentIntensity=1,this.environmentRotation=new os,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Di=new $,ma=new $,Md=new $,ga=new $,Tr=new $,Ar=new $,gx=new $,bd=new $,Ed=new $,Td=new $,Ad=new sn,Rd=new sn,wd=new sn;class Ui{constructor(e=new $,i=new $,s=new $){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Di.subVectors(e,i),l.cross(Di);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Di.subVectors(l,i),ma.subVectors(s,i),Md.subVectors(e,i);const d=Di.dot(Di),p=Di.dot(ma),m=Di.dot(Md),h=ma.dot(ma),y=ma.dot(Md),v=d*h-p*p;if(v===0)return c.set(0,0,0),null;const g=1/v,b=(h*m-p*y)*g,T=(d*y-p*m)*g;return c.set(1-b-T,T,b)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ga)===null?!1:ga.x>=0&&ga.y>=0&&ga.x+ga.y<=1}static getInterpolation(e,i,s,l,c,d,p,m){return this.getBarycoord(e,i,s,l,ga)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ga.x),m.addScaledVector(d,ga.y),m.addScaledVector(p,ga.z),m)}static getInterpolatedAttribute(e,i,s,l,c,d){return Ad.setScalar(0),Rd.setScalar(0),wd.setScalar(0),Ad.fromBufferAttribute(e,i),Rd.fromBufferAttribute(e,s),wd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Ad,c.x),d.addScaledVector(Rd,c.y),d.addScaledVector(wd,c.z),d}static isFrontFacing(e,i,s,l){return Di.subVectors(s,i),ma.subVectors(e,i),Di.cross(ma).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),ma.subVectors(this.a,this.b),Di.cross(ma).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ui.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Ui.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let d,p;Tr.subVectors(l,s),Ar.subVectors(c,s),bd.subVectors(e,s);const m=Tr.dot(bd),h=Ar.dot(bd);if(m<=0&&h<=0)return i.copy(s);Ed.subVectors(e,l);const y=Tr.dot(Ed),v=Ar.dot(Ed);if(y>=0&&v<=y)return i.copy(l);const g=m*v-y*h;if(g<=0&&m>=0&&y<=0)return d=m/(m-y),i.copy(s).addScaledVector(Tr,d);Td.subVectors(e,c);const b=Tr.dot(Td),T=Ar.dot(Td);if(T>=0&&b<=T)return i.copy(c);const N=b*h-m*T;if(N<=0&&h>=0&&T<=0)return p=h/(h-T),i.copy(s).addScaledVector(Ar,p);const S=y*T-b*v;if(S<=0&&v-y>=0&&b-T>=0)return gx.subVectors(c,l),p=(v-y)/(v-y+(b-T)),i.copy(l).addScaledVector(gx,p);const _=1/(S+N+g);return d=N*_,p=g*_,i.copy(s).addScaledVector(Tr,d).addScaledVector(Ar,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Qo{constructor(e=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ni.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ni.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ni.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,Ni):Ni.fromBufferAttribute(c,d),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),pc.copy(s.boundingBox)),pc.applyMatrix4(e.matrixWorld),this.union(pc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),mc.subVectors(this.max,Bo),Rr.subVectors(e.a,Bo),wr.subVectors(e.b,Bo),Cr.subVectors(e.c,Bo),es.subVectors(wr,Rr),ts.subVectors(Cr,wr),Cs.subVectors(Rr,Cr);let i=[0,-es.z,es.y,0,-ts.z,ts.y,0,-Cs.z,Cs.y,es.z,0,-es.x,ts.z,0,-ts.x,Cs.z,0,-Cs.x,-es.y,es.x,0,-ts.y,ts.x,0,-Cs.y,Cs.x,0];return!Cd(i,Rr,wr,Cr,mc)||(i=[1,0,0,0,1,0,0,0,1],!Cd(i,Rr,wr,Cr,mc))?!1:(gc.crossVectors(es,ts),i=[gc.x,gc.y,gc.z],Cd(i,Rr,wr,Cr,mc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xa=[new $,new $,new $,new $,new $,new $,new $,new $],Ni=new $,pc=new Qo,Rr=new $,wr=new $,Cr=new $,es=new $,ts=new $,Cs=new $,Bo=new $,mc=new $,gc=new $,Ds=new $;function Cd(o,e,i,s,l){for(let c=0,d=o.length-3;c<=d;c+=3){Ds.fromArray(o,c);const p=l.x*Math.abs(Ds.x)+l.y*Math.abs(Ds.y)+l.z*Math.abs(Ds.z),m=e.dot(Ds),h=i.dot(Ds),y=s.dot(Ds);if(Math.max(-Math.max(m,h,y),Math.min(m,h,y))>p)return!1}return!0}const xn=new $,xc=new xt;let HM=0;class bi extends Gs{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:HM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=nx,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)xc.fromBufferAttribute(this,i),xc.applyMatrix3(e),this.setXY(i,xc.x,xc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix3(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix4(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.applyNormalMatrix(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.transformDirection(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Io(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=jn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Io(i,this.array)),i}setX(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Io(i,this.array)),i}setY(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Io(i,this.array)),i}setZ(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Io(i,this.array)),i}setW(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array),c=jn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nx&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class C_ extends bi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class D_ extends bi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Tn extends bi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const GM=new Qo,Ho=new $,Dd=new $;class Kc{constructor(e=new $,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):GM.setFromPoints(e).getCenter(s);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);const i=Ho.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Ho,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(Dd)),this.expandByPoint(Ho.copy(e.center).sub(Dd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let VM=0;const Si=new rn,Nd=new Un,Dr=new $,ci=new Qo,Go=new Qo,En=new $;class Kn extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=Ko(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(SM(e)?D_:C_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ot().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,i,s){return Si.makeTranslation(e,i,s),this.applyMatrix4(Si),this}scale(e,i,s){return Si.makeScale(e,i,s),this.applyMatrix4(Si),this}lookAt(e){return Nd.lookAt(e),Nd.updateMatrix(),this.applyMatrix4(Nd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Tn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ci.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const s=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];Go.setFromBufferAttribute(p),this.morphTargetsRelative?(En.addVectors(ci.min,Go.min),ci.expandByPoint(En),En.addVectors(ci.max,Go.max),ci.expandByPoint(En)):(ci.expandByPoint(Go.min),ci.expandByPoint(Go.max))}ci.getCenter(s);let l=0;for(let c=0,d=e.count;c<d;c++)En.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(En));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,y=p.count;h<y;h++)En.fromBufferAttribute(p,h),m&&(Dr.fromBufferAttribute(e,h),En.add(Dr)),l=Math.max(l,s.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new bi(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const p=[],m=[];for(let E=0;E<s.count;E++)p[E]=new $,m[E]=new $;const h=new $,y=new $,v=new $,g=new xt,b=new xt,T=new xt,N=new $,S=new $;function _(E,P,k){h.fromBufferAttribute(s,E),y.fromBufferAttribute(s,P),v.fromBufferAttribute(s,k),g.fromBufferAttribute(c,E),b.fromBufferAttribute(c,P),T.fromBufferAttribute(c,k),y.sub(h),v.sub(h),b.sub(g),T.sub(g);const V=1/(b.x*T.y-T.x*b.y);isFinite(V)&&(N.copy(y).multiplyScalar(T.y).addScaledVector(v,-b.y).multiplyScalar(V),S.copy(v).multiplyScalar(b.x).addScaledVector(y,-T.x).multiplyScalar(V),p[E].add(N),p[P].add(N),p[k].add(N),m[E].add(S),m[P].add(S),m[k].add(S))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let E=0,P=U.length;E<P;++E){const k=U[E],V=k.start,Q=k.count;for(let he=V,_e=V+Q;he<_e;he+=3)_(e.getX(he+0),e.getX(he+1),e.getX(he+2))}const I=new $,C=new $,F=new $,D=new $;function O(E){F.fromBufferAttribute(l,E),D.copy(F);const P=p[E];I.copy(P),I.sub(F.multiplyScalar(F.dot(P))).normalize(),C.crossVectors(D,P);const V=C.dot(m[E])<0?-1:1;d.setXYZW(E,I.x,I.y,I.z,V)}for(let E=0,P=U.length;E<P;++E){const k=U[E],V=k.start,Q=k.count;for(let he=V,_e=V+Q;he<_e;he+=3)O(e.getX(he+0)),O(e.getX(he+1)),O(e.getX(he+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new bi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,b=s.count;g<b;g++)s.setXYZ(g,0,0,0);const l=new $,c=new $,d=new $,p=new $,m=new $,h=new $,y=new $,v=new $;if(e)for(let g=0,b=e.count;g<b;g+=3){const T=e.getX(g+0),N=e.getX(g+1),S=e.getX(g+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,N),d.fromBufferAttribute(i,S),y.subVectors(d,c),v.subVectors(l,c),y.cross(v),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,N),h.fromBufferAttribute(s,S),p.add(y),m.add(y),h.add(y),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(N,m.x,m.y,m.z),s.setXYZ(S,h.x,h.y,h.z)}else for(let g=0,b=i.count;g<b;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),y.subVectors(d,c),v.subVectors(l,c),y.cross(v),s.setXYZ(g+0,y.x,y.y,y.z),s.setXYZ(g+1,y.x,y.y,y.z),s.setXYZ(g+2,y.x,y.y,y.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)En.fromBufferAttribute(e,i),En.normalize(),e.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function e(p,m){const h=p.array,y=p.itemSize,v=p.normalized,g=new h.constructor(m.length*y);let b=0,T=0;for(let N=0,S=m.length;N<S;N++){p.isInterleavedBufferAttribute?b=m[N]*p.data.stride+p.offset:b=m[N]*y;for(let _=0;_<y;_++)g[T++]=h[b++]}return new bi(g,y,v)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Kn,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let y=0,v=h.length;y<v;y++){const g=h[y],b=e(g,s);m.push(b)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],y=[];for(let v=0,g=h.length;v<g;v++){const b=h[v];y.push(b.toJSON(e.data))}y.length>0&&(l[m]=y,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const h in l){const y=l[h];this.setAttribute(h,y.clone(i))}const c=e.morphAttributes;for(const h in c){const y=[],v=c[h];for(let g=0,b=v.length;g<b;g++)y.push(v[g].clone(i));this.morphAttributes[h]=y}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,y=d.length;h<y;h++){const v=d[h];this.addGroup(v.start,v.count,v.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let kM=0;class Vr extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=Ko(),this.name="",this.type="Material",this.blending=Or,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yd,this.blendDst=jd,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yr,this.stencilZFail=yr,this.stencilZPass=yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){it(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){it(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Or&&(s.blending=this.blending),this.side!==rs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Yd&&(s.blendSrc=this.blendSrc),this.blendDst!==jd&&(s.blendDst=this.blendDst),this.blendEquation!==Os&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ir&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tx&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==yr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==yr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new mt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new xt().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const _a=new $,Ud=new $,_c=new $,ns=new $,Ld=new $,vc=new $,Od=new $;class N_{constructor(e=new $,i=new $(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_a)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=_a.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(_a.copy(this.origin).addScaledVector(this.direction,i),_a.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Ud.copy(e).add(i).multiplyScalar(.5),_c.copy(i).sub(e).normalize(),ns.copy(this.origin).sub(Ud);const c=e.distanceTo(i)*.5,d=-this.direction.dot(_c),p=ns.dot(this.direction),m=-ns.dot(_c),h=ns.lengthSq(),y=Math.abs(1-d*d);let v,g,b,T;if(y>0)if(v=d*m-p,g=d*p-m,T=c*y,v>=0)if(g>=-T)if(g<=T){const N=1/y;v*=N,g*=N,b=v*(v+d*g+2*p)+g*(d*v+g+2*m)+h}else g=c,v=Math.max(0,-(d*g+p)),b=-v*v+g*(g+2*m)+h;else g=-c,v=Math.max(0,-(d*g+p)),b=-v*v+g*(g+2*m)+h;else g<=-T?(v=Math.max(0,-(-d*c+p)),g=v>0?-c:Math.min(Math.max(-c,-m),c),b=-v*v+g*(g+2*m)+h):g<=T?(v=0,g=Math.min(Math.max(-c,-m),c),b=g*(g+2*m)+h):(v=Math.max(0,-(d*c+p)),g=v>0?c:Math.min(Math.max(-c,-m),c),b=-v*v+g*(g+2*m)+h);else g=d>0?-c:c,v=Math.max(0,-(d*g+p)),b=-v*v+g*(g+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Ud).addScaledVector(_c,g),b}intersectSphere(e,i){_a.subVectors(e.center,this.origin);const s=_a.dot(this.direction),l=_a.dot(_a)-s*s,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=s-d,m=s+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,d,p,m;const h=1/this.direction.x,y=1/this.direction.y,v=1/this.direction.z,g=this.origin;return h>=0?(s=(e.min.x-g.x)*h,l=(e.max.x-g.x)*h):(s=(e.max.x-g.x)*h,l=(e.min.x-g.x)*h),y>=0?(c=(e.min.y-g.y)*y,d=(e.max.y-g.y)*y):(c=(e.max.y-g.y)*y,d=(e.min.y-g.y)*y),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),v>=0?(p=(e.min.z-g.z)*v,m=(e.max.z-g.z)*v):(p=(e.max.z-g.z)*v,m=(e.min.z-g.z)*v),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,_a)!==null}intersectTriangle(e,i,s,l,c){Ld.subVectors(i,e),vc.subVectors(s,e),Od.crossVectors(Ld,vc);let d=this.direction.dot(Od),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;ns.subVectors(this.origin,e);const m=p*this.direction.dot(vc.crossVectors(ns,vc));if(m<0)return null;const h=p*this.direction.dot(Ld.cross(ns));if(h<0||m+h>d)return null;const y=-p*ns.dot(Od);return y<0?null:this.at(y/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class U_ extends Vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new os,this.combine=u_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xx=new rn,Ns=new N_,yc=new Kc,_x=new $,Sc=new $,Mc=new $,bc=new $,Pd=new $,Ec=new $,vx=new $,Tc=new $;class di extends Un{constructor(e=new Kn,i=new U_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Ec.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const y=p[m],v=c[m];y!==0&&(Pd.fromBufferAttribute(v,e),d?Ec.addScaledVector(Pd,y):Ec.addScaledVector(Pd.sub(i),y))}i.add(Ec)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),yc.copy(s.boundingSphere),yc.applyMatrix4(c),Ns.copy(e.ray).recast(e.near),!(yc.containsPoint(Ns.origin)===!1&&(Ns.intersectSphere(yc,_x)===null||Ns.origin.distanceToSquared(_x)>(e.far-e.near)**2))&&(xx.copy(c).invert(),Ns.copy(e.ray).applyMatrix4(xx),!(s.boundingBox!==null&&Ns.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Ns)))}_computeIntersections(e,i,s){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,y=c.attributes.uv1,v=c.attributes.normal,g=c.groups,b=c.drawRange;if(p!==null)if(Array.isArray(d))for(let T=0,N=g.length;T<N;T++){const S=g[T],_=d[S.materialIndex],U=Math.max(S.start,b.start),I=Math.min(p.count,Math.min(S.start+S.count,b.start+b.count));for(let C=U,F=I;C<F;C+=3){const D=p.getX(C),O=p.getX(C+1),E=p.getX(C+2);l=Ac(this,_,e,s,h,y,v,D,O,E),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,b.start),N=Math.min(p.count,b.start+b.count);for(let S=T,_=N;S<_;S+=3){const U=p.getX(S),I=p.getX(S+1),C=p.getX(S+2);l=Ac(this,d,e,s,h,y,v,U,I,C),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,N=g.length;T<N;T++){const S=g[T],_=d[S.materialIndex],U=Math.max(S.start,b.start),I=Math.min(m.count,Math.min(S.start+S.count,b.start+b.count));for(let C=U,F=I;C<F;C+=3){const D=C,O=C+1,E=C+2;l=Ac(this,_,e,s,h,y,v,D,O,E),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,b.start),N=Math.min(m.count,b.start+b.count);for(let S=T,_=N;S<_;S+=3){const U=S,I=S+1,C=S+2;l=Ac(this,d,e,s,h,y,v,U,I,C),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function XM(o,e,i,s,l,c,d,p){let m;if(e.side===Zn?m=s.intersectTriangle(d,c,l,!0,p):m=s.intersectTriangle(l,c,d,e.side===rs,p),m===null)return null;Tc.copy(p),Tc.applyMatrix4(o.matrixWorld);const h=i.ray.origin.distanceTo(Tc);return h<i.near||h>i.far?null:{distance:h,point:Tc.clone(),object:o}}function Ac(o,e,i,s,l,c,d,p,m,h){o.getVertexPosition(p,Sc),o.getVertexPosition(m,Mc),o.getVertexPosition(h,bc);const y=XM(o,e,i,s,Sc,Mc,bc,vx);if(y){const v=new $;Ui.getBarycoord(vx,Sc,Mc,bc,v),l&&(y.uv=Ui.getInterpolatedAttribute(l,p,m,h,v,new xt)),c&&(y.uv1=Ui.getInterpolatedAttribute(c,p,m,h,v,new xt)),d&&(y.normal=Ui.getInterpolatedAttribute(d,p,m,h,v,new $),y.normal.dot(s.direction)>0&&y.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new $,materialIndex:0};Ui.getNormal(Sc,Mc,bc,g.normal),y.face=g,y.barycoord=v}return y}class WM extends Hn{constructor(e=null,i=1,s=1,l,c,d,p,m,h=Nn,y=Nn,v,g){super(null,d,p,m,h,y,l,c,v,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zd=new $,qM=new $,YM=new ot;class Ls{constructor(e=new $(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=zd.subVectors(s,i).cross(qM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(zd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||YM.getNormalMatrix(e),l=this.coplanarPoint(zd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Us=new Kc,jM=new xt(.5,.5),Rc=new $;class Qh{constructor(e=new Ls,i=new Ls,s=new Ls,l=new Ls,c=new Ls,d=new Ls){this.planes=[e,i,s,l,c,d]}set(e,i,s,l,c,d){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Xi,s=!1){const l=this.planes,c=e.elements,d=c[0],p=c[1],m=c[2],h=c[3],y=c[4],v=c[5],g=c[6],b=c[7],T=c[8],N=c[9],S=c[10],_=c[11],U=c[12],I=c[13],C=c[14],F=c[15];if(l[0].setComponents(h-d,b-y,_-T,F-U).normalize(),l[1].setComponents(h+d,b+y,_+T,F+U).normalize(),l[2].setComponents(h+p,b+v,_+N,F+I).normalize(),l[3].setComponents(h-p,b-v,_-N,F-I).normalize(),s)l[4].setComponents(m,g,S,C).normalize(),l[5].setComponents(h-m,b-g,_-S,F-C).normalize();else if(l[4].setComponents(h-m,b-g,_-S,F-C).normalize(),i===Xi)l[5].setComponents(h+m,b+g,_+S,F+C).normalize();else if(i===Zo)l[5].setComponents(m,g,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Us.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(e){Us.center.set(0,0,0);const i=jM.distanceTo(e.center);return Us.radius=.7071067811865476+i,Us.applyMatrix4(e.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Rc.x=l.normal.x>0?e.max.x:e.min.x,Rc.y=l.normal.y>0?e.max.y:e.min.y,Rc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Rc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class L_ extends Vr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const yx=new rn,zh=new N_,wc=new Kc,Cc=new $;class ZM extends Un{constructor(e=new Kn,i=new L_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),wc.copy(s.boundingSphere),wc.applyMatrix4(l),wc.radius+=c,e.ray.intersectsSphere(wc)===!1)return;yx.copy(l).invert(),zh.copy(e.ray).applyMatrix4(yx);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=s.index,v=s.attributes.position;if(h!==null){const g=Math.max(0,d.start),b=Math.min(h.count,d.start+d.count);for(let T=g,N=b;T<N;T++){const S=h.getX(T);Cc.fromBufferAttribute(v,S),Sx(Cc,S,m,l,e,i,this)}}else{const g=Math.max(0,d.start),b=Math.min(v.count,d.start+d.count);for(let T=g,N=b;T<N;T++)Cc.fromBufferAttribute(v,T),Sx(Cc,T,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Sx(o,e,i,s,l,c,d){const p=zh.distanceSqToPoint(o);if(p<i){const m=new $;zh.closestPointToPoint(o,m),m.applyMatrix4(s);const h=l.ray.origin.distanceTo(m);if(h<l.near||h>l.far)return;c.push({distance:h,distanceToRay:Math.sqrt(p),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class O_ extends Hn{constructor(e=[],i=Bs,s,l,c,d,p,m,h,y){super(e,i,s,l,c,d,p,m,h,y),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Br extends Hn{constructor(e,i,s=Yi,l,c,d,p=Nn,m=Nn,h,y=Ea,v=1){if(y!==Ea&&y!==Fs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:v};super(g,l,c,d,p,m,y,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class KM extends Br{constructor(e,i=Yi,s=Bs,l,c,d=Nn,p=Nn,m,h=Ea){const y={width:e,height:e,depth:1},v=[y,y,y,y,y,y];super(e,e,i,s,l,c,d,p,m,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class P_ extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Jo extends Kn{constructor(e=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],y=[],v=[];let g=0,b=0;T("z","y","x",-1,-1,s,i,e,d,c,0),T("z","y","x",1,-1,s,i,-e,d,c,1),T("x","z","y",1,1,e,s,i,l,d,2),T("x","z","y",1,-1,e,s,-i,l,d,3),T("x","y","z",1,-1,e,i,s,l,c,4),T("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Tn(h,3)),this.setAttribute("normal",new Tn(y,3)),this.setAttribute("uv",new Tn(v,2));function T(N,S,_,U,I,C,F,D,O,E,P){const k=C/O,V=F/E,Q=C/2,he=F/2,_e=D/2,J=O+1,B=E+1;let G=0,ee=0;const me=new $;for(let Ee=0;Ee<B;Ee++){const z=Ee*V-he;for(let j=0;j<J;j++){const be=j*k-Q;me[N]=be*U,me[S]=z*I,me[_]=_e,h.push(me.x,me.y,me.z),me[N]=0,me[S]=0,me[_]=D>0?1:-1,y.push(me.x,me.y,me.z),v.push(j/O),v.push(1-Ee/E),G+=1}}for(let Ee=0;Ee<E;Ee++)for(let z=0;z<O;z++){const j=g+z+J*Ee,be=g+z+J*(Ee+1),Ae=g+(z+1)+J*(Ee+1),Le=g+(z+1)+J*Ee;m.push(j,be,Le),m.push(be,Ae,Le),ee+=6}p.addGroup(b,ee,P),b+=ee,g+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Jh extends Kn{constructor(e=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:l};const c=[],d=[];p(l),h(s),y(),this.setAttribute("position",new Tn(c,3)),this.setAttribute("normal",new Tn(c.slice(),3)),this.setAttribute("uv",new Tn(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function p(U){const I=new $,C=new $,F=new $;for(let D=0;D<i.length;D+=3)b(i[D+0],I),b(i[D+1],C),b(i[D+2],F),m(I,C,F,U)}function m(U,I,C,F){const D=F+1,O=[];for(let E=0;E<=D;E++){O[E]=[];const P=U.clone().lerp(C,E/D),k=I.clone().lerp(C,E/D),V=D-E;for(let Q=0;Q<=V;Q++)Q===0&&E===D?O[E][Q]=P:O[E][Q]=P.clone().lerp(k,Q/V)}for(let E=0;E<D;E++)for(let P=0;P<2*(D-E)-1;P++){const k=Math.floor(P/2);P%2===0?(g(O[E][k+1]),g(O[E+1][k]),g(O[E][k])):(g(O[E][k+1]),g(O[E+1][k+1]),g(O[E+1][k]))}}function h(U){const I=new $;for(let C=0;C<c.length;C+=3)I.x=c[C+0],I.y=c[C+1],I.z=c[C+2],I.normalize().multiplyScalar(U),c[C+0]=I.x,c[C+1]=I.y,c[C+2]=I.z}function y(){const U=new $;for(let I=0;I<c.length;I+=3){U.x=c[I+0],U.y=c[I+1],U.z=c[I+2];const C=S(U)/2/Math.PI+.5,F=_(U)/Math.PI+.5;d.push(C,1-F)}T(),v()}function v(){for(let U=0;U<d.length;U+=6){const I=d[U+0],C=d[U+2],F=d[U+4],D=Math.max(I,C,F),O=Math.min(I,C,F);D>.9&&O<.1&&(I<.2&&(d[U+0]+=1),C<.2&&(d[U+2]+=1),F<.2&&(d[U+4]+=1))}}function g(U){c.push(U.x,U.y,U.z)}function b(U,I){const C=U*3;I.x=e[C+0],I.y=e[C+1],I.z=e[C+2]}function T(){const U=new $,I=new $,C=new $,F=new $,D=new xt,O=new xt,E=new xt;for(let P=0,k=0;P<c.length;P+=9,k+=6){U.set(c[P+0],c[P+1],c[P+2]),I.set(c[P+3],c[P+4],c[P+5]),C.set(c[P+6],c[P+7],c[P+8]),D.set(d[k+0],d[k+1]),O.set(d[k+2],d[k+3]),E.set(d[k+4],d[k+5]),F.copy(U).add(I).add(C).divideScalar(3);const V=S(F);N(D,k+0,U,V),N(O,k+2,I,V),N(E,k+4,C,V)}}function N(U,I,C,F){F<0&&U.x===1&&(d[I]=U.x-1),C.x===0&&C.z===0&&(d[I]=F/2/Math.PI+.5)}function S(U){return Math.atan2(U.z,-U.x)}function _(U){return Math.atan2(-U.y,Math.sqrt(U.x*U.x+U.z*U.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jh(e.vertices,e.indices,e.radius,e.detail)}}class $h extends Jh{constructor(e=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new $h(e.radius,e.detail)}}class Qc extends Kn{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,d=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,y=m+1,v=e/p,g=i/m,b=[],T=[],N=[],S=[];for(let _=0;_<y;_++){const U=_*g-d;for(let I=0;I<h;I++){const C=I*v-c;T.push(C,-U,0),N.push(0,0,1),S.push(I/p),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let U=0;U<p;U++){const I=U+h*_,C=U+h*(_+1),F=U+1+h*(_+1),D=U+1+h*_;b.push(I,C,D),b.push(C,F,D)}this.setIndex(b),this.setAttribute("position",new Tn(T,3)),this.setAttribute("normal",new Tn(N,3)),this.setAttribute("uv",new Tn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qc(e.width,e.height,e.widthSegments,e.heightSegments)}}class ep extends Kn{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,d=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:d,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(d+p,Math.PI);let h=0;const y=[],v=new $,g=new $,b=[],T=[],N=[],S=[];for(let _=0;_<=s;_++){const U=[],I=_/s,C=d+I*p,F=e*Math.cos(C),D=Math.sqrt(e*e-F*F);let O=0;_===0&&d===0?O=.5/i:_===s&&m===Math.PI&&(O=-.5/i);for(let E=0;E<=i;E++){const P=E/i,k=l+P*c;v.x=-D*Math.cos(k),v.y=F,v.z=D*Math.sin(k),T.push(v.x,v.y,v.z),g.copy(v).normalize(),N.push(g.x,g.y,g.z),S.push(P+O,1-I),U.push(h++)}y.push(U)}for(let _=0;_<s;_++)for(let U=0;U<i;U++){const I=y[_][U+1],C=y[_][U],F=y[_+1][U],D=y[_+1][U+1];(_!==0||d>0)&&b.push(I,C,D),(_!==s-1||m<Math.PI)&&b.push(C,F,D)}this.setIndex(b),this.setAttribute("position",new Tn(T,3)),this.setAttribute("normal",new Tn(N,3)),this.setAttribute("uv",new Tn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ep(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class qc extends Kn{constructor(e=1,i=.4,s=12,l=48,c=Math.PI*2,d=0,p=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:c,thetaStart:d,thetaLength:p},s=Math.floor(s),l=Math.floor(l);const m=[],h=[],y=[],v=[],g=new $,b=new $,T=new $;for(let N=0;N<=s;N++){const S=d+N/s*p;for(let _=0;_<=l;_++){const U=_/l*c;b.x=(e+i*Math.cos(S))*Math.cos(U),b.y=(e+i*Math.cos(S))*Math.sin(U),b.z=i*Math.sin(S),h.push(b.x,b.y,b.z),g.x=e*Math.cos(U),g.y=e*Math.sin(U),T.subVectors(b,g).normalize(),y.push(T.x,T.y,T.z),v.push(_/l),v.push(N/s)}}for(let N=1;N<=s;N++)for(let S=1;S<=l;S++){const _=(l+1)*N+S-1,U=(l+1)*(N-1)+S-1,I=(l+1)*(N-1)+S,C=(l+1)*N+S;m.push(_,U,C),m.push(U,I,C)}this.setIndex(m),this.setAttribute("position",new Tn(h,3)),this.setAttribute("normal",new Tn(y,3)),this.setAttribute("uv",new Tn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Hr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];if(Mx(l))l.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(Mx(l[0])){const c=[];for(let d=0,p=l.length;d<p;d++)c[d]=l[d].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function Bn(o){const e={};for(let i=0;i<o.length;i++){const s=Hr(o[i]);for(const l in s)e[l]=s[l]}return e}function Mx(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function QM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function z_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const JM={clone:Hr,merge:Bn};var $M=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends Vr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$M,this.fragmentShader=eb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hr(e.uniforms),this.uniformsGroups=QM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new mt().setHex(l.value);break;case"v2":this.uniforms[s].value=new xt().fromArray(l.value);break;case"v3":this.uniforms[s].value=new $().fromArray(l.value);break;case"v4":this.uniforms[s].value=new sn().fromArray(l.value);break;case"m3":this.uniforms[s].value=new ot().fromArray(l.value);break;case"m4":this.uniforms[s].value=new rn().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class tb extends ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Bc extends Vr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oh,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new os,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nb extends Bc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new mt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new mt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new mt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ib extends Vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ab extends Vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class tp extends Un{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Id=new rn,bx=new $,Ex=new $;class I_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qh,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;bx.setFromMatrixPosition(e.matrixWorld),i.position.copy(bx),Ex.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Ex),i.updateMatrixWorld(),Id.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Id,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Zo||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Id)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Dc=new $,Nc=new Gr,Hi=new $;class F_ extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Dc,Nc,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dc,Nc,Hi.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(Dc,Nc,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dc,Nc,Hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const is=new $,Tx=new xt,Ax=new xt;class ui extends F_{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Ph*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ph*2*Math.atan(Math.tan(hd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,i){return this.getViewBounds(e,Tx,Ax),i.subVectors(Ax,Tx)}setViewOffset(e,i,s,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(hd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/h,l*=d.width/m,s*=d.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class sb extends I_{constructor(){super(new ui(90,1,.5,500)),this.isPointLightShadow=!0}}class rb extends tp{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new sb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class np extends F_{constructor(e=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,d=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=y*this.view.offsetY,m=p-y*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ob extends I_{constructor(){super(new np(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rx extends tp{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new ob}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class lb extends tp{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Nr=-90,Ur=1;class cb extends Un{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ui(Nr,Ur,e,i);l.layers=this.layers,this.add(l);const c=new ui(Nr,Ur,e,i);c.layers=this.layers,this.add(c);const d=new ui(Nr,Ur,e,i);d.layers=this.layers,this.add(d);const p=new ui(Nr,Ur,e,i);p.layers=this.layers,this.add(p);const m=new ui(Nr,Ur,e,i);m.layers=this.layers,this.add(m);const h=new ui(Nr,Ur,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(e===Xi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Zo)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,y]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const N=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),s.texture.generateMipmaps=N,e.setRenderTarget(s,5,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,y),e.setRenderTarget(v,g,b),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class ub extends ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class fb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,it("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const op=class op{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};op.prototype.isMatrix2=!0;let wx=op;function Cx(o,e,i,s){const l=db(s);switch(i){case M_:return o*e;case E_:return o*e/l.components*l.byteLength;case Wh:return o*e/l.components*l.byteLength;case Hs:return o*e*2/l.components*l.byteLength;case qh:return o*e*2/l.components*l.byteLength;case b_:return o*e*3/l.components*l.byteLength;case Li:return o*e*4/l.components*l.byteLength;case Yh:return o*e*4/l.components*l.byteLength;case Pc:case zc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ic:case Fc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case sh:case oh:return Math.max(o,16)*Math.max(e,8)/4;case ah:case rh:return Math.max(o,8)*Math.max(e,8)/2;case lh:case ch:case fh:case dh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case uh:case Gc:case hh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ph:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case mh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case gh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case xh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case _h:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case vh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case yh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Sh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Mh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case bh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Eh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Th:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Ah:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Rh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case wh:case Ch:case Dh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Nh:case Uh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Vc:case Lh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function db(o){switch(o){case fi:case __:return{byteLength:1,components:1};case Yo:case v_:case ba:return{byteLength:2,components:1};case kh:case Xh:return{byteLength:2,components:4};case Yi:case Vh:case ki:return{byteLength:4,components:1};case y_:case S_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hh}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function B_(){let o=null,e=!1,i=null,s=null;function l(c,d){i(c,d),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function hb(o){const e=new WeakMap;function i(p,m){const h=p.array,y=p.usage,v=h.byteLength,g=o.createBuffer();o.bindBuffer(m,g),o.bufferData(m,h,y),p.onUploadCallback();let b;if(h instanceof Float32Array)b=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)b=o.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?b=o.HALF_FLOAT:b=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)b=o.SHORT;else if(h instanceof Uint32Array)b=o.UNSIGNED_INT;else if(h instanceof Int32Array)b=o.INT;else if(h instanceof Int8Array)b=o.BYTE;else if(h instanceof Uint8Array)b=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)b=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:b,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:v}}function s(p,m,h){const y=m.array,v=m.updateRanges;if(o.bindBuffer(h,p),v.length===0)o.bufferSubData(h,0,y);else{v.sort((b,T)=>b.start-T.start);let g=0;for(let b=1;b<v.length;b++){const T=v[g],N=v[b];N.start<=T.start+T.count+1?T.count=Math.max(T.count,N.start+N.count-T.start):(++g,v[g]=N)}v.length=g+1;for(let b=0,T=v.length;b<T;b++){const N=v[b];o.bufferSubData(h,N.start*y.BYTES_PER_ELEMENT,y,N.start,N.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(o.deleteBuffer(m.buffer),e.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const y=e.get(p);(!y||y.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var pb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_b=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,bb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Eb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ab=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Rb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Db=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ub=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ob=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Pb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ib=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Fb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Hb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Yb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$b=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,e1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,t1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,n1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,a1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,s1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,r1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,o1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,d1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,h1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,p1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,m1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,x1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,S1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,E1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,A1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,w1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,N1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,L1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,O1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,I1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,F1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,B1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,V1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,k1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,X1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,W1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,q1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Y1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,K1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Q1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,J1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,eE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,aE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,SE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ME=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,EE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,CE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,LE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,PE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,BE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,YE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:pb,alphahash_pars_fragment:mb,alphamap_fragment:gb,alphamap_pars_fragment:xb,alphatest_fragment:_b,alphatest_pars_fragment:vb,aomap_fragment:yb,aomap_pars_fragment:Sb,batching_pars_vertex:Mb,batching_vertex:bb,begin_vertex:Eb,beginnormal_vertex:Tb,bsdfs:Ab,iridescence_fragment:Rb,bumpmap_pars_fragment:wb,clipping_planes_fragment:Cb,clipping_planes_pars_fragment:Db,clipping_planes_pars_vertex:Nb,clipping_planes_vertex:Ub,color_fragment:Lb,color_pars_fragment:Ob,color_pars_vertex:Pb,color_vertex:zb,common:Ib,cube_uv_reflection_fragment:Fb,defaultnormal_vertex:Bb,displacementmap_pars_vertex:Hb,displacementmap_vertex:Gb,emissivemap_fragment:Vb,emissivemap_pars_fragment:kb,colorspace_fragment:Xb,colorspace_pars_fragment:Wb,envmap_fragment:qb,envmap_common_pars_fragment:Yb,envmap_pars_fragment:jb,envmap_pars_vertex:Zb,envmap_physical_pars_fragment:r1,envmap_vertex:Kb,fog_vertex:Qb,fog_pars_vertex:Jb,fog_fragment:$b,fog_pars_fragment:e1,gradientmap_pars_fragment:t1,lightmap_pars_fragment:n1,lights_lambert_fragment:i1,lights_lambert_pars_fragment:a1,lights_pars_begin:s1,lights_toon_fragment:o1,lights_toon_pars_fragment:l1,lights_phong_fragment:c1,lights_phong_pars_fragment:u1,lights_physical_fragment:f1,lights_physical_pars_fragment:d1,lights_fragment_begin:h1,lights_fragment_maps:p1,lights_fragment_end:m1,lightprobes_pars_fragment:g1,logdepthbuf_fragment:x1,logdepthbuf_pars_fragment:_1,logdepthbuf_pars_vertex:v1,logdepthbuf_vertex:y1,map_fragment:S1,map_pars_fragment:M1,map_particle_fragment:b1,map_particle_pars_fragment:E1,metalnessmap_fragment:T1,metalnessmap_pars_fragment:A1,morphinstance_vertex:R1,morphcolor_vertex:w1,morphnormal_vertex:C1,morphtarget_pars_vertex:D1,morphtarget_vertex:N1,normal_fragment_begin:U1,normal_fragment_maps:L1,normal_pars_fragment:O1,normal_pars_vertex:P1,normal_vertex:z1,normalmap_pars_fragment:I1,clearcoat_normal_fragment_begin:F1,clearcoat_normal_fragment_maps:B1,clearcoat_pars_fragment:H1,iridescence_pars_fragment:G1,opaque_fragment:V1,packing:k1,premultiplied_alpha_fragment:X1,project_vertex:W1,dithering_fragment:q1,dithering_pars_fragment:Y1,roughnessmap_fragment:j1,roughnessmap_pars_fragment:Z1,shadowmap_pars_fragment:K1,shadowmap_pars_vertex:Q1,shadowmap_vertex:J1,shadowmask_pars_fragment:$1,skinbase_vertex:eE,skinning_pars_vertex:tE,skinning_vertex:nE,skinnormal_vertex:iE,specularmap_fragment:aE,specularmap_pars_fragment:sE,tonemapping_fragment:rE,tonemapping_pars_fragment:oE,transmission_fragment:lE,transmission_pars_fragment:cE,uv_pars_fragment:uE,uv_pars_vertex:fE,uv_vertex:dE,worldpos_vertex:hE,background_vert:pE,background_frag:mE,backgroundCube_vert:gE,backgroundCube_frag:xE,cube_vert:_E,cube_frag:vE,depth_vert:yE,depth_frag:SE,distance_vert:ME,distance_frag:bE,equirect_vert:EE,equirect_frag:TE,linedashed_vert:AE,linedashed_frag:RE,meshbasic_vert:wE,meshbasic_frag:CE,meshlambert_vert:DE,meshlambert_frag:NE,meshmatcap_vert:UE,meshmatcap_frag:LE,meshnormal_vert:OE,meshnormal_frag:PE,meshphong_vert:zE,meshphong_frag:IE,meshphysical_vert:FE,meshphysical_frag:BE,meshtoon_vert:HE,meshtoon_frag:GE,points_vert:VE,points_frag:kE,shadow_vert:XE,shadow_frag:WE,sprite_vert:qE,sprite_frag:YE},Ie={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Vi={basic:{uniforms:Bn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Bn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new mt(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Bn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Bn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Bn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new mt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Bn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Bn([Ie.points,Ie.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Bn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Bn([Ie.common,Ie.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Bn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Bn([Ie.sprite,Ie.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Bn([Ie.common,Ie.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Bn([Ie.lights,Ie.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Vi.physical={uniforms:Bn([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Uc={r:0,b:0,g:0},jE=new rn,H_=new ot;H_.set(-1,0,0,0,1,0,0,0,1);function ZE(o,e,i,s,l,c){const d=new mt(0);let p=l===!0?0:1,m,h,y=null,v=0,g=null;function b(U){let I=U.isScene===!0?U.background:null;if(I&&I.isTexture){const C=U.backgroundBlurriness>0;I=e.get(I,C)}return I}function T(U){let I=!1;const C=b(U);C===null?S(d,p):C&&C.isColor&&(S(C,1),I=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||I)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function N(U,I){const C=b(I);C&&(C.isCubeTexture||C.mapping===Zc)?(h===void 0&&(h=new di(new Jo(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:Hr(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,D,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=C,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jE.makeRotationFromEuler(I.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(H_),h.material.toneMapped=Rt.getTransfer(C.colorSpace)!==Vt,(y!==C||v!==C.version||g!==o.toneMapping)&&(h.material.needsUpdate=!0,y=C,v=C.version,g=o.toneMapping),h.layers.enableAll(),U.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new di(new Qc(2,2),new ji({name:"BackgroundMaterial",uniforms:Hr(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,m.material.toneMapped=Rt.getTransfer(C.colorSpace)!==Vt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(y!==C||v!==C.version||g!==o.toneMapping)&&(m.material.needsUpdate=!0,y=C,v=C.version,g=o.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function S(U,I){U.getRGB(Uc,z_(o)),i.buffers.color.setClear(Uc.r,Uc.g,Uc.b,I,c)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,I=1){d.set(U),p=I,S(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,S(d,p)},render:T,addToRenderList:N,dispose:_}}function KE(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,d=!1;function p(V,Q,he,_e,J){let B=!1;const G=v(V,_e,he,Q);c!==G&&(c=G,h(c.object)),B=b(V,_e,he,J),B&&T(V,_e,he,J),J!==null&&e.update(J,o.ELEMENT_ARRAY_BUFFER),(B||d)&&(d=!1,C(V,Q,he,_e),J!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function m(){return o.createVertexArray()}function h(V){return o.bindVertexArray(V)}function y(V){return o.deleteVertexArray(V)}function v(V,Q,he,_e){const J=_e.wireframe===!0;let B=s[Q.id];B===void 0&&(B={},s[Q.id]=B);const G=V.isInstancedMesh===!0?V.id:0;let ee=B[G];ee===void 0&&(ee={},B[G]=ee);let me=ee[he.id];me===void 0&&(me={},ee[he.id]=me);let Ee=me[J];return Ee===void 0&&(Ee=g(m()),me[J]=Ee),Ee}function g(V){const Q=[],he=[],_e=[];for(let J=0;J<i;J++)Q[J]=0,he[J]=0,_e[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:he,attributeDivisors:_e,object:V,attributes:{},index:null}}function b(V,Q,he,_e){const J=c.attributes,B=Q.attributes;let G=0;const ee=he.getAttributes();for(const me in ee)if(ee[me].location>=0){const z=J[me];let j=B[me];if(j===void 0&&(me==="instanceMatrix"&&V.instanceMatrix&&(j=V.instanceMatrix),me==="instanceColor"&&V.instanceColor&&(j=V.instanceColor)),z===void 0||z.attribute!==j||j&&z.data!==j.data)return!0;G++}return c.attributesNum!==G||c.index!==_e}function T(V,Q,he,_e){const J={},B=Q.attributes;let G=0;const ee=he.getAttributes();for(const me in ee)if(ee[me].location>=0){let z=B[me];z===void 0&&(me==="instanceMatrix"&&V.instanceMatrix&&(z=V.instanceMatrix),me==="instanceColor"&&V.instanceColor&&(z=V.instanceColor));const j={};j.attribute=z,z&&z.data&&(j.data=z.data),J[me]=j,G++}c.attributes=J,c.attributesNum=G,c.index=_e}function N(){const V=c.newAttributes;for(let Q=0,he=V.length;Q<he;Q++)V[Q]=0}function S(V){_(V,0)}function _(V,Q){const he=c.newAttributes,_e=c.enabledAttributes,J=c.attributeDivisors;he[V]=1,_e[V]===0&&(o.enableVertexAttribArray(V),_e[V]=1),J[V]!==Q&&(o.vertexAttribDivisor(V,Q),J[V]=Q)}function U(){const V=c.newAttributes,Q=c.enabledAttributes;for(let he=0,_e=Q.length;he<_e;he++)Q[he]!==V[he]&&(o.disableVertexAttribArray(he),Q[he]=0)}function I(V,Q,he,_e,J,B,G){G===!0?o.vertexAttribIPointer(V,Q,he,J,B):o.vertexAttribPointer(V,Q,he,_e,J,B)}function C(V,Q,he,_e){N();const J=_e.attributes,B=he.getAttributes(),G=Q.defaultAttributeValues;for(const ee in B){const me=B[ee];if(me.location>=0){let Ee=J[ee];if(Ee===void 0&&(ee==="instanceMatrix"&&V.instanceMatrix&&(Ee=V.instanceMatrix),ee==="instanceColor"&&V.instanceColor&&(Ee=V.instanceColor)),Ee!==void 0){const z=Ee.normalized,j=Ee.itemSize,be=e.get(Ee);if(be===void 0)continue;const Ae=be.buffer,Le=be.type,se=be.bytesPerElement,ye=Le===o.INT||Le===o.UNSIGNED_INT||Ee.gpuType===Vh;if(Ee.isInterleavedBufferAttribute){const Se=Ee.data,Be=Se.stride,tt=Ee.offset;if(Se.isInstancedInterleavedBuffer){for(let je=0;je<me.locationSize;je++)_(me.location+je,Se.meshPerAttribute);V.isInstancedMesh!==!0&&_e._maxInstanceCount===void 0&&(_e._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let je=0;je<me.locationSize;je++)S(me.location+je);o.bindBuffer(o.ARRAY_BUFFER,Ae);for(let je=0;je<me.locationSize;je++)I(me.location+je,j/me.locationSize,Le,z,Be*se,(tt+j/me.locationSize*je)*se,ye)}else{if(Ee.isInstancedBufferAttribute){for(let Se=0;Se<me.locationSize;Se++)_(me.location+Se,Ee.meshPerAttribute);V.isInstancedMesh!==!0&&_e._maxInstanceCount===void 0&&(_e._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Se=0;Se<me.locationSize;Se++)S(me.location+Se);o.bindBuffer(o.ARRAY_BUFFER,Ae);for(let Se=0;Se<me.locationSize;Se++)I(me.location+Se,j/me.locationSize,Le,z,j*se,j/me.locationSize*Se*se,ye)}}else if(G!==void 0){const z=G[ee];if(z!==void 0)switch(z.length){case 2:o.vertexAttrib2fv(me.location,z);break;case 3:o.vertexAttrib3fv(me.location,z);break;case 4:o.vertexAttrib4fv(me.location,z);break;default:o.vertexAttrib1fv(me.location,z)}}}}U()}function F(){P();for(const V in s){const Q=s[V];for(const he in Q){const _e=Q[he];for(const J in _e){const B=_e[J];for(const G in B)y(B[G].object),delete B[G];delete _e[J]}}delete s[V]}}function D(V){if(s[V.id]===void 0)return;const Q=s[V.id];for(const he in Q){const _e=Q[he];for(const J in _e){const B=_e[J];for(const G in B)y(B[G].object),delete B[G];delete _e[J]}}delete s[V.id]}function O(V){for(const Q in s){const he=s[Q];for(const _e in he){const J=he[_e];if(J[V.id]===void 0)continue;const B=J[V.id];for(const G in B)y(B[G].object),delete B[G];delete J[V.id]}}}function E(V){for(const Q in s){const he=s[Q],_e=V.isInstancedMesh===!0?V.id:0,J=he[_e];if(J!==void 0){for(const B in J){const G=J[B];for(const ee in G)y(G[ee].object),delete G[ee];delete J[B]}delete he[_e],Object.keys(he).length===0&&delete s[Q]}}}function P(){k(),d=!0,c!==l&&(c=l,h(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:P,resetDefaultState:k,dispose:F,releaseStatesOfGeometry:D,releaseStatesOfObject:E,releaseStatesOfProgram:O,initAttributes:N,enableAttribute:S,disableUnusedAttributes:U}}function QE(o,e,i){let s;function l(m){s=m}function c(m,h){o.drawArrays(s,m,h),i.update(h,s,1)}function d(m,h,y){y!==0&&(o.drawArraysInstanced(s,m,h,y),i.update(h,s,y))}function p(m,h,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,h,0,y);let g=0;for(let b=0;b<y;b++)g+=h[b];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p}function JE(o,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(O){return!(O!==Li&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(O){const E=O===ba&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==fi&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==ki&&!E)}function m(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const y=m(h);y!==h&&(it("WebGLRenderer:",h,"not supported, using",y,"instead."),h=y);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const b=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),U=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),I=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=o.getParameter(o.MAX_SAMPLES),D=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:b,maxVertexTextures:T,maxTextureSize:N,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:U,maxVaryings:I,maxFragmentUniforms:C,maxSamples:F,samples:D}}function $E(o){const e=this;let i=null,s=0,l=!1,c=!1;const d=new Ls,p=new ot,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const b=v.length!==0||g||s!==0||l;return l=g,s=v.length,b},this.beginShadows=function(){c=!0,y(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=y(v,g,0)},this.setState=function(v,g,b){const T=v.clippingPlanes,N=v.clipIntersection,S=v.clipShadows,_=o.get(v);if(!l||T===null||T.length===0||c&&!S)c?y(null):h();else{const U=c?0:s,I=U*4;let C=_.clippingState||null;m.value=C,C=y(T,g,I,b);for(let F=0;F!==I;++F)C[F]=i[F];_.clippingState=C,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=U}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function y(v,g,b,T){const N=v!==null?v.length:0;let S=null;if(N!==0){if(S=m.value,T!==!0||S===null){const _=b+N*4,U=g.matrixWorldInverse;p.getNormalMatrix(U),(S===null||S.length<_)&&(S=new Float32Array(_));for(let I=0,C=b;I!==N;++I,C+=4)d.copy(v[I]).applyMatrix4(U,p),d.normal.toArray(S,C),S[C+3]=d.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=N,e.numIntersection=0,S}}const ss=4,Dx=[.125,.215,.35,.446,.526,.582],Ps=20,eT=256,Vo=new np,Nx=new mt;let Fd=null,Bd=0,Hd=0,Gd=!1;const tT=new $;class Ux{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:d=256,position:p=tT}=c;Fd=this._renderer.getRenderTarget(),Bd=this._renderer.getActiveCubeFace(),Hd=this._renderer.getActiveMipmapLevel(),Gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Px(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ox(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Fd,Bd,Hd),this._renderer.xr.enabled=Gd,e.scissorTest=!1,Lr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Bs||e.mapping===Fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fd=this._renderer.getRenderTarget(),Bd=this._renderer.getActiveCubeFace(),Hd=this._renderer.getActiveMipmapLevel(),Gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:In,minFilter:In,generateMipmaps:!1,type:ba,format:Li,colorSpace:kc,depthBuffer:!1},l=Lx(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lx(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=nT(c)),this._blurMaterial=aT(c,e,i),this._ggxMaterial=iT(c,e,i)}return l}_compileMaterial(e){const i=new di(new Kn,e);this._renderer.compile(i,Vo)}_sceneToCubeUV(e,i,s,l,c){const m=new ui(90,1,i,s),h=[1,-1,1,1,1,1],y=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,b=v.toneMapping;v.getClearColor(Nx),v.toneMapping=Wi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new di(new Jo,new U_({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const N=this._backgroundBox,S=N.material;let _=!1;const U=e.background;U?U.isColor&&(S.color.copy(U),e.background=null,_=!0):(S.color.copy(Nx),_=!0);for(let I=0;I<6;I++){const C=I%3;C===0?(m.up.set(0,h[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+y[I],c.y,c.z)):C===1?(m.up.set(0,0,h[I]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+y[I],c.z)):(m.up.set(0,h[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+y[I]));const F=this._cubeSize;Lr(l,C*F,I>2?F:0,F,F),v.setRenderTarget(l),_&&v.render(N,m),v.render(e,m)}v.toneMapping=b,v.autoClear=g,e.background=U}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Bs||e.mapping===Fr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Px()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ox());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Lr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,Vo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[s];p.material=d;const m=d.uniforms,h=s/(this._lodMeshes.length-1),y=i/(this._lodMeshes.length-1),v=Math.sqrt(h*h-y*y),g=0+h*1.25,b=v*g,{_lodMax:T}=this,N=this._sizeLods[s],S=3*N*(s>T-ss?s-T+ss:0),_=4*(this._cubeSize-N);m.envMap.value=e.texture,m.roughness.value=b,m.mipInt.value=T-i,Lr(c,S,_,3*N,2*N),l.setRenderTarget(c),l.render(p,Vo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,Lr(e,S,_,3*N,2*N),l.setRenderTarget(e),l.render(p,Vo)}_blur(e,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",c),this._halfBlur(d,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&wt("blur direction must be either latitudinal or longitudinal!");const y=3,v=this._lodMeshes[l];v.material=h;const g=h.uniforms,b=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*Ps-1),N=c/T,S=isFinite(c)?1+Math.floor(y*N):Ps;S>Ps&&it(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ps}`);const _=[];let U=0;for(let O=0;O<Ps;++O){const E=O/N,P=Math.exp(-E*E/2);_.push(P),O===0?U+=P:O<S&&(U+=2*P)}for(let O=0;O<_.length;O++)_[O]=_[O]/U;g.envMap.value=e.texture,g.samples.value=S,g.weights.value=_,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:I}=this;g.dTheta.value=T,g.mipInt.value=I-s;const C=this._sizeLods[l],F=3*C*(l>I-ss?l-I+ss:0),D=4*(this._cubeSize-C);Lr(i,F,D,3*C,2*C),m.setRenderTarget(i),m.render(v,Vo)}}function nT(o){const e=[],i=[],s=[];let l=o;const c=o-ss+1+Dx.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);e.push(p);let m=1/p;d>o-ss?m=Dx[d-o+ss-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),y=-h,v=1+h,g=[y,y,v,y,v,v,y,y,v,v,y,v],b=6,T=6,N=3,S=2,_=1,U=new Float32Array(N*T*b),I=new Float32Array(S*T*b),C=new Float32Array(_*T*b);for(let D=0;D<b;D++){const O=D%3*2/3-1,E=D>2?0:-1,P=[O,E,0,O+2/3,E,0,O+2/3,E+1,0,O,E,0,O+2/3,E+1,0,O,E+1,0];U.set(P,N*T*D),I.set(g,S*T*D);const k=[D,D,D,D,D,D];C.set(k,_*T*D)}const F=new Kn;F.setAttribute("position",new bi(U,N)),F.setAttribute("uv",new bi(I,S)),F.setAttribute("faceIndex",new bi(C,_)),s.push(new di(F,null)),l>ss&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function Lx(o,e,i){const s=new qi(o,e,i);return s.texture.mapping=Zc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Lr(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function iT(o,e,i){return new ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:eT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function aT(o,e,i){const s=new Float32Array(Ps),l=new $(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function Ox(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function Px(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function Jc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class G_ extends qi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new O_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Jo(5,5,5),c=new ji({name:"CubemapFromEquirect",uniforms:Hr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Zn,blending:Sa});c.uniforms.tEquirect.value=i;const d=new di(l,c),p=i.minFilter;return i.minFilter===Is&&(i.minFilter=In),new cb(1,10,this).update(e,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(c)}}function sT(o){let e=new WeakMap,i=new WeakMap,s=null;function l(g,b=!1){return g==null?null:b?d(g):c(g)}function c(g){if(g&&g.isTexture){const b=g.mapping;if(b===ud||b===fd)if(e.has(g)){const T=e.get(g).texture;return p(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const N=new G_(T.height);return N.fromEquirectangularTexture(o,g),e.set(g,N),g.addEventListener("dispose",h),p(N.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const b=g.mapping,T=b===ud||b===fd,N=b===Bs||b===Fr;if(T||N){let S=i.get(g);const _=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==_)return s===null&&(s=new Ux(o)),S=T?s.fromEquirectangular(g,S):s.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),S.texture;if(S!==void 0)return S.texture;{const U=g.image;return T&&U&&U.height>0||N&&U&&m(U)?(s===null&&(s=new Ux(o)),S=T?s.fromEquirectangular(g):s.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),g.addEventListener("dispose",y),S.texture):null}}}return g}function p(g,b){return b===ud?g.mapping=Bs:b===fd&&(g.mapping=Fr),g}function m(g){let b=0;const T=6;for(let N=0;N<T;N++)g[N]!==void 0&&b++;return b===T}function h(g){const b=g.target;b.removeEventListener("dispose",h);const T=e.get(b);T!==void 0&&(e.delete(b),T.dispose())}function y(g){const b=g.target;b.removeEventListener("dispose",y);const T=i.get(b);T!==void 0&&(i.delete(b),T.dispose())}function v(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function rT(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=o.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Pr("WebGLRenderer: "+s+" extension not supported."),l}}}function oT(o,e,i,s){const l={},c=new WeakMap;function d(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",d),delete l[g.id];const b=c.get(g);b&&(e.remove(b),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(v,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const b in g)e.update(g[b],o.ARRAY_BUFFER)}function h(v){const g=[],b=v.index,T=v.attributes.position;let N=0;if(T===void 0)return;if(b!==null){const U=b.array;N=b.version;for(let I=0,C=U.length;I<C;I+=3){const F=U[I+0],D=U[I+1],O=U[I+2];g.push(F,D,D,O,O,F)}}else{const U=T.array;N=T.version;for(let I=0,C=U.length/3-1;I<C;I+=3){const F=I+0,D=I+1,O=I+2;g.push(F,D,D,O,O,F)}}const S=new(T.count>=65535?D_:C_)(g,1);S.version=N;const _=c.get(v);_&&e.remove(_),c.set(v,S)}function y(v){const g=c.get(v);if(g){const b=v.index;b!==null&&g.version<b.version&&h(v)}else h(v);return c.get(v)}return{get:p,update:m,getWireframeAttribute:y}}function lT(o,e,i){let s;function l(v){s=v}let c,d;function p(v){c=v.type,d=v.bytesPerElement}function m(v,g){o.drawElements(s,g,c,v*d),i.update(g,s,1)}function h(v,g,b){b!==0&&(o.drawElementsInstanced(s,g,c,v*d,b),i.update(g,s,b))}function y(v,g,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,v,0,b);let N=0;for(let S=0;S<b;S++)N+=g[S];i.update(N,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=y}function cT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,p){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=p*(c/3);break;case o.LINES:i.lines+=p*(c/2);break;case o.LINE_STRIP:i.lines+=p*(c-1);break;case o.LINE_LOOP:i.lines+=p*c;break;case o.POINTS:i.points+=p*c;break;default:wt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function uT(o,e,i){const s=new WeakMap,l=new sn;function c(d,p,m){const h=d.morphTargetInfluences,y=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,v=y!==void 0?y.length:0;let g=s.get(p);if(g===void 0||g.count!==v){let k=function(){E.dispose(),s.delete(p),p.removeEventListener("dispose",k)};var b=k;g!==void 0&&g.texture.dispose();const T=p.morphAttributes.position!==void 0,N=p.morphAttributes.normal!==void 0,S=p.morphAttributes.color!==void 0,_=p.morphAttributes.position||[],U=p.morphAttributes.normal||[],I=p.morphAttributes.color||[];let C=0;T===!0&&(C=1),N===!0&&(C=2),S===!0&&(C=3);let F=p.attributes.position.count*C,D=1;F>e.maxTextureSize&&(D=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const O=new Float32Array(F*D*4*v),E=new A_(O,F,D,v);E.type=ki,E.needsUpdate=!0;const P=C*4;for(let V=0;V<v;V++){const Q=_[V],he=U[V],_e=I[V],J=F*D*4*V;for(let B=0;B<Q.count;B++){const G=B*P;T===!0&&(l.fromBufferAttribute(Q,B),O[J+G+0]=l.x,O[J+G+1]=l.y,O[J+G+2]=l.z,O[J+G+3]=0),N===!0&&(l.fromBufferAttribute(he,B),O[J+G+4]=l.x,O[J+G+5]=l.y,O[J+G+6]=l.z,O[J+G+7]=0),S===!0&&(l.fromBufferAttribute(_e,B),O[J+G+8]=l.x,O[J+G+9]=l.y,O[J+G+10]=l.z,O[J+G+11]=_e.itemSize===4?l.w:1)}}g={count:v,texture:E,size:new xt(F,D)},s.set(p,g),p.addEventListener("dispose",k)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let T=0;for(let S=0;S<h.length;S++)T+=h[S];const N=p.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",N),m.getUniforms().setValue(o,"morphTargetInfluences",h)}m.getUniforms().setValue(o,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:c}}function fT(o,e,i,s,l){let c=new WeakMap;function d(h){const y=l.render.frame,v=h.geometry,g=e.get(h,v);if(c.get(g)!==y&&(e.update(g),c.set(g,y)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==y&&(i.update(h.instanceMatrix,o.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,o.ARRAY_BUFFER),c.set(h,y))),h.isSkinnedMesh){const b=h.skeleton;c.get(b)!==y&&(b.update(),c.set(b,y))}return g}function p(){c=new WeakMap}function m(h){const y=h.target;y.removeEventListener("dispose",m),s.releaseStatesOfObject(y),i.remove(y.instanceMatrix),y.instanceColor!==null&&i.remove(y.instanceColor)}return{update:d,dispose:p}}const dT={[f_]:"LINEAR_TONE_MAPPING",[d_]:"REINHARD_TONE_MAPPING",[h_]:"CINEON_TONE_MAPPING",[Gh]:"ACES_FILMIC_TONE_MAPPING",[m_]:"AGX_TONE_MAPPING",[g_]:"NEUTRAL_TONE_MAPPING",[p_]:"CUSTOM_TONE_MAPPING"};function hT(o,e,i,s,l,c){const d=new qi(e,i,{type:o,depthBuffer:l,stencilBuffer:c,samples:s?4:0,depthTexture:l?new Br(e,i):void 0}),p=new qi(e,i,{type:ba,depthBuffer:!1,stencilBuffer:!1}),m=new Kn;m.setAttribute("position",new Tn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Tn([0,2,0,0,2,0],2));const h=new tb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),y=new di(m,h),v=new np(-1,1,1,-1,0,1);let g=null,b=null,T=!1,N,S=null,_=[],U=!1;this.setSize=function(I,C){d.setSize(I,C),p.setSize(I,C);for(let F=0;F<_.length;F++){const D=_[F];D.setSize&&D.setSize(I,C)}},this.setEffects=function(I){_=I,U=_.length>0&&_[0].isRenderPass===!0;const C=d.width,F=d.height;for(let D=0;D<_.length;D++){const O=_[D];O.setSize&&O.setSize(C,F)}},this.begin=function(I,C){if(T||I.toneMapping===Wi&&_.length===0)return!1;if(S=C,C!==null){const F=C.width,D=C.height;(d.width!==F||d.height!==D)&&this.setSize(F,D)}return U===!1&&I.setRenderTarget(d),N=I.toneMapping,I.toneMapping=Wi,!0},this.hasRenderPass=function(){return U},this.end=function(I,C){I.toneMapping=N,T=!0;let F=d,D=p;for(let O=0;O<_.length;O++){const E=_[O];if(E.enabled!==!1&&(E.render(I,D,F,C),E.needsSwap!==!1)){const P=F;F=D,D=P}}if(g!==I.outputColorSpace||b!==I.toneMapping){g=I.outputColorSpace,b=I.toneMapping,h.defines={},Rt.getTransfer(g)===Vt&&(h.defines.SRGB_TRANSFER="");const O=dT[b];O&&(h.defines[O]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=F.texture,I.setRenderTarget(S),I.render(y,v),S=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){d.depthTexture&&d.depthTexture.dispose(),d.dispose(),p.dispose(),m.dispose(),h.dispose()}}const V_=new Hn,Ih=new Br(1,1),k_=new A_,X_=new NM,W_=new O_,zx=[],Ix=[],Fx=new Float32Array(16),Bx=new Float32Array(9),Hx=new Float32Array(4);function kr(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let c=zx[l];if(c===void 0&&(c=new Float32Array(l),zx[l]=c),e!==0){s.toArray(c,0);for(let d=1,p=0;d!==e;++d)p+=i,o[d].toArray(c,p)}return c}function Sn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function Mn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function $c(o,e){let i=Ix[e];i===void 0&&(i=new Int32Array(e),Ix[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function pT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function mT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2fv(this.addr,e),Mn(i,e)}}function gT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Sn(i,e))return;o.uniform3fv(this.addr,e),Mn(i,e)}}function xT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4fv(this.addr,e),Mn(i,e)}}function _T(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,s))return;Hx.set(s),o.uniformMatrix2fv(this.addr,!1,Hx),Mn(i,s)}}function vT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,s))return;Bx.set(s),o.uniformMatrix3fv(this.addr,!1,Bx),Mn(i,s)}}function yT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,s))return;Fx.set(s),o.uniformMatrix4fv(this.addr,!1,Fx),Mn(i,s)}}function ST(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function MT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2iv(this.addr,e),Mn(i,e)}}function bT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;o.uniform3iv(this.addr,e),Mn(i,e)}}function ET(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4iv(this.addr,e),Mn(i,e)}}function TT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function AT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2uiv(this.addr,e),Mn(i,e)}}function RT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;o.uniform3uiv(this.addr,e),Mn(i,e)}}function wT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4uiv(this.addr,e),Mn(i,e)}}function CT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Ih.compareFunction=i.isReversedDepthBuffer()?Zh:jh,c=Ih):c=V_,i.setTexture2D(e||c,l)}function DT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||X_,l)}function NT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||W_,l)}function UT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||k_,l)}function LT(o){switch(o){case 5126:return pT;case 35664:return mT;case 35665:return gT;case 35666:return xT;case 35674:return _T;case 35675:return vT;case 35676:return yT;case 5124:case 35670:return ST;case 35667:case 35671:return MT;case 35668:case 35672:return bT;case 35669:case 35673:return ET;case 5125:return TT;case 36294:return AT;case 36295:return RT;case 36296:return wT;case 35678:case 36198:case 36298:case 36306:case 35682:return CT;case 35679:case 36299:case 36307:return DT;case 35680:case 36300:case 36308:case 36293:return NT;case 36289:case 36303:case 36311:case 36292:return UT}}function OT(o,e){o.uniform1fv(this.addr,e)}function PT(o,e){const i=kr(e,this.size,2);o.uniform2fv(this.addr,i)}function zT(o,e){const i=kr(e,this.size,3);o.uniform3fv(this.addr,i)}function IT(o,e){const i=kr(e,this.size,4);o.uniform4fv(this.addr,i)}function FT(o,e){const i=kr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function BT(o,e){const i=kr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function HT(o,e){const i=kr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function GT(o,e){o.uniform1iv(this.addr,e)}function VT(o,e){o.uniform2iv(this.addr,e)}function kT(o,e){o.uniform3iv(this.addr,e)}function XT(o,e){o.uniform4iv(this.addr,e)}function WT(o,e){o.uniform1uiv(this.addr,e)}function qT(o,e){o.uniform2uiv(this.addr,e)}function YT(o,e){o.uniform3uiv(this.addr,e)}function jT(o,e){o.uniform4uiv(this.addr,e)}function ZT(o,e,i){const s=this.cache,l=e.length,c=$c(i,l);Sn(s,c)||(o.uniform1iv(this.addr,c),Mn(s,c));let d;this.type===o.SAMPLER_2D_SHADOW?d=Ih:d=V_;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||d,c[p])}function KT(o,e,i){const s=this.cache,l=e.length,c=$c(i,l);Sn(s,c)||(o.uniform1iv(this.addr,c),Mn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||X_,c[d])}function QT(o,e,i){const s=this.cache,l=e.length,c=$c(i,l);Sn(s,c)||(o.uniform1iv(this.addr,c),Mn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||W_,c[d])}function JT(o,e,i){const s=this.cache,l=e.length,c=$c(i,l);Sn(s,c)||(o.uniform1iv(this.addr,c),Mn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||k_,c[d])}function $T(o){switch(o){case 5126:return OT;case 35664:return PT;case 35665:return zT;case 35666:return IT;case 35674:return FT;case 35675:return BT;case 35676:return HT;case 5124:case 35670:return GT;case 35667:case 35671:return VT;case 35668:case 35672:return kT;case 35669:case 35673:return XT;case 5125:return WT;case 36294:return qT;case 36295:return YT;case 36296:return jT;case 35678:case 36198:case 36298:case 36306:case 35682:return ZT;case 35679:case 36299:case 36307:return KT;case 35680:case 36300:case 36308:case 36293:return QT;case 36289:case 36303:case 36311:case 36292:return JT}}class eA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=LT(i.type)}}class tA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=$T(i.type)}}class nA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const Vd=/(\w+)(\])?(\[|\.)?/g;function Gx(o,e){o.seq.push(e),o.map[e.id]=e}function iA(o,e,i){const s=o.name,l=s.length;for(Vd.lastIndex=0;;){const c=Vd.exec(s),d=Vd.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){Gx(i,h===void 0?new eA(p,o,e):new tA(p,o,e));break}else{let v=i.map[p];v===void 0&&(v=new nA(p),Gx(i,v)),i=v}}}class Hc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const p=e.getActiveUniform(i,d),m=e.getUniformLocation(i,p.name);iA(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function Vx(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const aA=37297;let sA=0;function rA(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const p=d+1;s.push(`${p===e?">":" "} ${p}: ${i[d]}`)}return s.join(`
`)}const kx=new ot;function oA(o){Rt._getMatrix(kx,Rt.workingColorSpace,o);const e=`mat3( ${kx.elements.map(i=>i.toFixed(4))} )`;switch(Rt.getTransfer(o)){case Xc:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Xx(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+rA(o.getShaderSource(e),p)}else return c}function lA(o,e){const i=oA(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const cA={[f_]:"Linear",[d_]:"Reinhard",[h_]:"Cineon",[Gh]:"ACESFilmic",[m_]:"AgX",[g_]:"Neutral",[p_]:"Custom"};function uA(o,e){const i=cA[e];return i===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Lc=new $;function fA(){Rt.getLuminanceCoefficients(Lc);const o=Lc.x.toFixed(4),e=Lc.y.toFixed(4),i=Lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function hA(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function pA(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(e,l),d=c.name;let p=1;c.type===o.FLOAT_MAT2&&(p=2),c.type===o.FLOAT_MAT3&&(p=3),c.type===o.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:o.getAttribLocation(e,d),locationSize:p}}return i}function qo(o){return o!==""}function Wx(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qx(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fh(o){return o.replace(mA,xA)}const gA=new Map;function xA(o,e){let i=pt[e];if(i===void 0){const s=gA.get(e);if(s!==void 0)i=pt[s],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Fh(i)}const _A=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yx(o){return o.replace(_A,vA)}function vA(o,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function jx(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const yA={[Oc]:"SHADOWMAP_TYPE_PCF",[Xo]:"SHADOWMAP_TYPE_VSM"};function SA(o){return yA[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const MA={[Bs]:"ENVMAP_TYPE_CUBE",[Fr]:"ENVMAP_TYPE_CUBE",[Zc]:"ENVMAP_TYPE_CUBE_UV"};function bA(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":MA[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const EA={[Fr]:"ENVMAP_MODE_REFRACTION"};function TA(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":EA[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const AA={[u_]:"ENVMAP_BLENDING_MULTIPLY",[uM]:"ENVMAP_BLENDING_MIX",[fM]:"ENVMAP_BLENDING_ADD"};function RA(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":AA[o.combine]||"ENVMAP_BLENDING_NONE"}function wA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function CA(o,e,i,s){const l=o.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=SA(i),h=bA(i),y=TA(i),v=RA(i),g=wA(i),b=dA(i),T=hA(c),N=l.createProgram();let S,_,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(qo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(qo).join(`
`),_.length>0&&(_+=`
`)):(S=[jx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+y:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),_=[jx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+y:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Wi?"#define TONE_MAPPING":"",i.toneMapping!==Wi?pt.tonemapping_pars_fragment:"",i.toneMapping!==Wi?uA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,lA("linearToOutputTexel",i.outputColorSpace),fA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(qo).join(`
`)),d=Fh(d),d=Wx(d,i),d=qx(d,i),p=Fh(p),p=Wx(p,i),p=qx(p,i),d=Yx(d),p=Yx(p),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,S=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===ix?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===ix?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const I=U+S+d,C=U+_+p,F=Vx(l,l.VERTEX_SHADER,I),D=Vx(l,l.FRAGMENT_SHADER,C);l.attachShader(N,F),l.attachShader(N,D),i.index0AttributeName!==void 0?l.bindAttribLocation(N,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(N,0,"position"),l.linkProgram(N);function O(V){if(o.debug.checkShaderErrors){const Q=l.getProgramInfoLog(N)||"",he=l.getShaderInfoLog(F)||"",_e=l.getShaderInfoLog(D)||"",J=Q.trim(),B=he.trim(),G=_e.trim();let ee=!0,me=!0;if(l.getProgramParameter(N,l.LINK_STATUS)===!1)if(ee=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,N,F,D);else{const Ee=Xx(l,F,"vertex"),z=Xx(l,D,"fragment");wt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(N,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+J+`
`+Ee+`
`+z)}else J!==""?it("WebGLProgram: Program Info Log:",J):(B===""||G==="")&&(me=!1);me&&(V.diagnostics={runnable:ee,programLog:J,vertexShader:{log:B,prefix:S},fragmentShader:{log:G,prefix:_}})}l.deleteShader(F),l.deleteShader(D),E=new Hc(l,N),P=pA(l,N)}let E;this.getUniforms=function(){return E===void 0&&O(this),E};let P;this.getAttributes=function(){return P===void 0&&O(this),P};let k=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=l.getProgramParameter(N,aA)),k},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(N),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=sA++,this.cacheKey=e,this.usedTimes=1,this.program=N,this.vertexShader=F,this.fragmentShader=D,this}let DA=0;class NA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new UA(e),i.set(e,s)),s}}class UA{constructor(e){this.id=DA++,this.code=e,this.usedTimes=0}}function LA(o){return o===Hs||o===Gc||o===Vc}function OA(o,e,i,s,l,c){const d=new R_,p=new NA,m=new Set,h=[],y=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(E){return m.add(E),E===0?"uv":`uv${E}`}function N(E,P,k,V,Q,he){const _e=V.fog,J=Q.geometry,B=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?V.environment:null,G=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,ee=e.get(E.envMap||B,G),me=ee&&ee.mapping===Zc?ee.image.height:null,Ee=b[E.type];E.precision!==null&&(g=s.getMaxPrecision(E.precision),g!==E.precision&&it("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const z=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,j=z!==void 0?z.length:0;let be=0;J.morphAttributes.position!==void 0&&(be=1),J.morphAttributes.normal!==void 0&&(be=2),J.morphAttributes.color!==void 0&&(be=3);let Ae,Le,se,ye;if(Ee){const Ve=Vi[Ee];Ae=Ve.vertexShader,Le=Ve.fragmentShader}else{Ae=E.vertexShader,Le=E.fragmentShader;const Ve=p.getVertexShaderStage(E),en=p.getFragmentShaderStage(E);p.update(E,Ve,en),se=Ve.id,ye=en.id}const Se=o.getRenderTarget(),Be=o.state.buffers.depth.getReversed(),tt=Q.isInstancedMesh===!0,je=Q.isBatchedMesh===!0,Lt=!!E.map,dt=!!E.matcap,_t=!!ee,vt=!!E.aoMap,gt=!!E.lightMap,jt=!!E.bumpMap&&E.wireframe===!1,Zt=!!E.normalMap,Kt=!!E.displacementMap,$t=!!E.emissiveMap,Pt=!!E.metalnessMap,lt=!!E.roughnessMap,X=E.anisotropy>0,et=E.clearcoat>0,at=E.dispersion>0,L=E.iridescence>0,M=E.sheen>0,Z=E.transmission>0,re=X&&!!E.anisotropyMap,fe=et&&!!E.clearcoatMap,Te=et&&!!E.clearcoatNormalMap,Ce=et&&!!E.clearcoatRoughnessMap,ue=L&&!!E.iridescenceMap,de=L&&!!E.iridescenceThicknessMap,Re=M&&!!E.sheenColorMap,ze=M&&!!E.sheenRoughnessMap,Oe=!!E.specularMap,Ne=!!E.specularColorMap,Ke=!!E.specularIntensityMap,Qe=Z&&!!E.transmissionMap,st=Z&&!!E.thicknessMap,q=!!E.gradientMap,we=!!E.alphaMap,ge=E.alphaTest>0,De=!!E.alphaHash,Fe=!!E.extensions;let Me=Wi;E.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(Me=o.toneMapping);const qe={shaderID:Ee,shaderType:E.type,shaderName:E.name,vertexShader:Ae,fragmentShader:Le,defines:E.defines,customVertexShaderID:se,customFragmentShaderID:ye,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:je,batchingColor:je&&Q._colorsTexture!==null,instancing:tt,instancingColor:tt&&Q.instanceColor!==null,instancingMorph:tt&&Q.morphTexture!==null,outputColorSpace:Se===null?o.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Lt,matcap:dt,envMap:_t,envMapMode:_t&&ee.mapping,envMapCubeUVHeight:me,aoMap:vt,lightMap:gt,bumpMap:jt,normalMap:Zt,displacementMap:Kt,emissiveMap:$t,normalMapObjectSpace:Zt&&E.normalMapType===pM,normalMapTangentSpace:Zt&&E.normalMapType===Oh,packedNormalMap:Zt&&E.normalMapType===Oh&&LA(E.normalMap.format),metalnessMap:Pt,roughnessMap:lt,anisotropy:X,anisotropyMap:re,clearcoat:et,clearcoatMap:fe,clearcoatNormalMap:Te,clearcoatRoughnessMap:Ce,dispersion:at,iridescence:L,iridescenceMap:ue,iridescenceThicknessMap:de,sheen:M,sheenColorMap:Re,sheenRoughnessMap:ze,specularMap:Oe,specularColorMap:Ne,specularIntensityMap:Ke,transmission:Z,transmissionMap:Qe,thicknessMap:st,gradientMap:q,opaque:E.transparent===!1&&E.blending===Or&&E.alphaToCoverage===!1,alphaMap:we,alphaTest:ge,alphaHash:De,combine:E.combine,mapUv:Lt&&T(E.map.channel),aoMapUv:vt&&T(E.aoMap.channel),lightMapUv:gt&&T(E.lightMap.channel),bumpMapUv:jt&&T(E.bumpMap.channel),normalMapUv:Zt&&T(E.normalMap.channel),displacementMapUv:Kt&&T(E.displacementMap.channel),emissiveMapUv:$t&&T(E.emissiveMap.channel),metalnessMapUv:Pt&&T(E.metalnessMap.channel),roughnessMapUv:lt&&T(E.roughnessMap.channel),anisotropyMapUv:re&&T(E.anisotropyMap.channel),clearcoatMapUv:fe&&T(E.clearcoatMap.channel),clearcoatNormalMapUv:Te&&T(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&T(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&T(E.iridescenceMap.channel),iridescenceThicknessMapUv:de&&T(E.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&T(E.sheenColorMap.channel),sheenRoughnessMapUv:ze&&T(E.sheenRoughnessMap.channel),specularMapUv:Oe&&T(E.specularMap.channel),specularColorMapUv:Ne&&T(E.specularColorMap.channel),specularIntensityMapUv:Ke&&T(E.specularIntensityMap.channel),transmissionMapUv:Qe&&T(E.transmissionMap.channel),thicknessMapUv:st&&T(E.thicknessMap.channel),alphaMapUv:we&&T(E.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Zt||X),vertexNormals:!!J.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!J.attributes.uv&&(Lt||we),fog:!!_e,useFog:E.fog===!0,fogExp2:!!_e&&_e.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||J.attributes.normal===void 0&&Zt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Be,skinning:Q.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:be,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:he.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:Me,decodeVideoTexture:Lt&&E.map.isVideoTexture===!0&&Rt.getTransfer(E.map.colorSpace)===Vt,decodeVideoTextureEmissive:$t&&E.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(E.emissiveMap.colorSpace)===Vt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===va,flipSided:E.side===Zn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Fe&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&E.extensions.multiDraw===!0||je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return qe.vertexUv1s=m.has(1),qe.vertexUv2s=m.has(2),qe.vertexUv3s=m.has(3),m.clear(),qe}function S(E){const P=[];if(E.shaderID?P.push(E.shaderID):(P.push(E.customVertexShaderID),P.push(E.customFragmentShaderID)),E.defines!==void 0)for(const k in E.defines)P.push(k),P.push(E.defines[k]);return E.isRawShaderMaterial===!1&&(_(P,E),U(P,E),P.push(o.outputColorSpace)),P.push(E.customProgramCacheKey),P.join()}function _(E,P){E.push(P.precision),E.push(P.outputColorSpace),E.push(P.envMapMode),E.push(P.envMapCubeUVHeight),E.push(P.mapUv),E.push(P.alphaMapUv),E.push(P.lightMapUv),E.push(P.aoMapUv),E.push(P.bumpMapUv),E.push(P.normalMapUv),E.push(P.displacementMapUv),E.push(P.emissiveMapUv),E.push(P.metalnessMapUv),E.push(P.roughnessMapUv),E.push(P.anisotropyMapUv),E.push(P.clearcoatMapUv),E.push(P.clearcoatNormalMapUv),E.push(P.clearcoatRoughnessMapUv),E.push(P.iridescenceMapUv),E.push(P.iridescenceThicknessMapUv),E.push(P.sheenColorMapUv),E.push(P.sheenRoughnessMapUv),E.push(P.specularMapUv),E.push(P.specularColorMapUv),E.push(P.specularIntensityMapUv),E.push(P.transmissionMapUv),E.push(P.thicknessMapUv),E.push(P.combine),E.push(P.fogExp2),E.push(P.sizeAttenuation),E.push(P.morphTargetsCount),E.push(P.morphAttributeCount),E.push(P.numDirLights),E.push(P.numPointLights),E.push(P.numSpotLights),E.push(P.numSpotLightMaps),E.push(P.numHemiLights),E.push(P.numRectAreaLights),E.push(P.numDirLightShadows),E.push(P.numPointLightShadows),E.push(P.numSpotLightShadows),E.push(P.numSpotLightShadowsWithMaps),E.push(P.numLightProbes),E.push(P.shadowMapType),E.push(P.toneMapping),E.push(P.numClippingPlanes),E.push(P.numClipIntersection),E.push(P.depthPacking)}function U(E,P){d.disableAll(),P.instancing&&d.enable(0),P.instancingColor&&d.enable(1),P.instancingMorph&&d.enable(2),P.matcap&&d.enable(3),P.envMap&&d.enable(4),P.normalMapObjectSpace&&d.enable(5),P.normalMapTangentSpace&&d.enable(6),P.clearcoat&&d.enable(7),P.iridescence&&d.enable(8),P.alphaTest&&d.enable(9),P.vertexColors&&d.enable(10),P.vertexAlphas&&d.enable(11),P.vertexUv1s&&d.enable(12),P.vertexUv2s&&d.enable(13),P.vertexUv3s&&d.enable(14),P.vertexTangents&&d.enable(15),P.anisotropy&&d.enable(16),P.alphaHash&&d.enable(17),P.batching&&d.enable(18),P.dispersion&&d.enable(19),P.batchingColor&&d.enable(20),P.gradientMap&&d.enable(21),P.packedNormalMap&&d.enable(22),P.vertexNormals&&d.enable(23),E.push(d.mask),d.disableAll(),P.fog&&d.enable(0),P.useFog&&d.enable(1),P.flatShading&&d.enable(2),P.logarithmicDepthBuffer&&d.enable(3),P.reversedDepthBuffer&&d.enable(4),P.skinning&&d.enable(5),P.morphTargets&&d.enable(6),P.morphNormals&&d.enable(7),P.morphColors&&d.enable(8),P.premultipliedAlpha&&d.enable(9),P.shadowMapEnabled&&d.enable(10),P.doubleSided&&d.enable(11),P.flipSided&&d.enable(12),P.useDepthPacking&&d.enable(13),P.dithering&&d.enable(14),P.transmission&&d.enable(15),P.sheen&&d.enable(16),P.opaque&&d.enable(17),P.pointsUvs&&d.enable(18),P.decodeVideoTexture&&d.enable(19),P.decodeVideoTextureEmissive&&d.enable(20),P.alphaToCoverage&&d.enable(21),P.numLightProbeGrids>0&&d.enable(22),P.hasPositionAttribute&&d.enable(23),E.push(d.mask)}function I(E){const P=b[E.type];let k;if(P){const V=Vi[P];k=JM.clone(V.uniforms)}else k=E.uniforms;return k}function C(E,P){let k=y.get(P);return k!==void 0?++k.usedTimes:(k=new CA(o,P,E,l),h.push(k),y.set(P,k)),k}function F(E){if(--E.usedTimes===0){const P=h.indexOf(E);h[P]=h[h.length-1],h.pop(),y.delete(E.cacheKey),E.destroy()}}function D(E){p.remove(E)}function O(){p.dispose()}return{getParameters:N,getProgramCacheKey:S,getUniforms:I,acquireProgram:C,releaseProgram:F,releaseShaderCache:D,programs:h,dispose:O}}function PA(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let p=o.get(d);return p===void 0&&(p={},o.set(d,p)),p}function s(d){o.delete(d)}function l(d,p,m){o.get(d)[p]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function zA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function Zx(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Kx(){const o=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function d(g){let b=0;return g.isInstancedMesh&&(b+=2),g.isSkinnedMesh&&(b+=1),b}function p(g,b,T,N,S,_){let U=o[e];return U===void 0?(U={id:g.id,object:g,geometry:b,material:T,materialVariant:d(g),groupOrder:N,renderOrder:g.renderOrder,z:S,group:_},o[e]=U):(U.id=g.id,U.object=g,U.geometry=b,U.material=T,U.materialVariant=d(g),U.groupOrder=N,U.renderOrder=g.renderOrder,U.z=S,U.group=_),e++,U}function m(g,b,T,N,S,_){const U=p(g,b,T,N,S,_);T.transmission>0?s.push(U):T.transparent===!0?l.push(U):i.push(U)}function h(g,b,T,N,S,_){const U=p(g,b,T,N,S,_);T.transmission>0?s.unshift(U):T.transparent===!0?l.unshift(U):i.unshift(U)}function y(g,b,T){i.length>1&&i.sort(g||zA),s.length>1&&s.sort(b||Zx),l.length>1&&l.sort(b||Zx),T&&(i.reverse(),s.reverse(),l.reverse())}function v(){for(let g=e,b=o.length;g<b;g++){const T=o[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:v,sort:y}}function IA(){let o=new WeakMap;function e(s,l){const c=o.get(s);let d;return c===void 0?(d=new Kx,o.set(s,[d])):l>=c.length?(d=new Kx,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function FA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new $,color:new mt};break;case"SpotLight":i={position:new $,direction:new $,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new mt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":i={color:new mt,position:new $,halfWidth:new $,halfHeight:new $};break}return o[e.id]=i,i}}}function BA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let HA=0;function GA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function VA(o){const e=new FA,i=BA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new $);const l=new $,c=new rn,d=new rn;function p(h){let y=0,v=0,g=0;for(let P=0;P<9;P++)s.probe[P].set(0,0,0);let b=0,T=0,N=0,S=0,_=0,U=0,I=0,C=0,F=0,D=0,O=0;h.sort(GA);for(let P=0,k=h.length;P<k;P++){const V=h[P],Q=V.color,he=V.intensity,_e=V.distance;let J=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Hs?J=V.shadow.map.texture:J=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)y+=Q.r*he,v+=Q.g*he,g+=Q.b*he;else if(V.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(V.sh.coefficients[B],he);O++}else if(V.isDirectionalLight){const B=e.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const G=V.shadow,ee=i.get(V);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,s.directionalShadow[b]=ee,s.directionalShadowMap[b]=J,s.directionalShadowMatrix[b]=V.shadow.matrix,U++}s.directional[b]=B,b++}else if(V.isSpotLight){const B=e.get(V);B.position.setFromMatrixPosition(V.matrixWorld),B.color.copy(Q).multiplyScalar(he),B.distance=_e,B.coneCos=Math.cos(V.angle),B.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),B.decay=V.decay,s.spot[N]=B;const G=V.shadow;if(V.map&&(s.spotLightMap[F]=V.map,F++,G.updateMatrices(V),V.castShadow&&D++),s.spotLightMatrix[N]=G.matrix,V.castShadow){const ee=i.get(V);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,s.spotShadow[N]=ee,s.spotShadowMap[N]=J,C++}N++}else if(V.isRectAreaLight){const B=e.get(V);B.color.copy(Q).multiplyScalar(he),B.halfWidth.set(V.width*.5,0,0),B.halfHeight.set(0,V.height*.5,0),s.rectArea[S]=B,S++}else if(V.isPointLight){const B=e.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),B.distance=V.distance,B.decay=V.decay,V.castShadow){const G=V.shadow,ee=i.get(V);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,ee.shadowCameraNear=G.camera.near,ee.shadowCameraFar=G.camera.far,s.pointShadow[T]=ee,s.pointShadowMap[T]=J,s.pointShadowMatrix[T]=V.shadow.matrix,I++}s.point[T]=B,T++}else if(V.isHemisphereLight){const B=e.get(V);B.skyColor.copy(V.color).multiplyScalar(he),B.groundColor.copy(V.groundColor).multiplyScalar(he),s.hemi[_]=B,_++}}S>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_FLOAT_1,s.rectAreaLTC2=Ie.LTC_FLOAT_2):(s.rectAreaLTC1=Ie.LTC_HALF_1,s.rectAreaLTC2=Ie.LTC_HALF_2)),s.ambient[0]=y,s.ambient[1]=v,s.ambient[2]=g;const E=s.hash;(E.directionalLength!==b||E.pointLength!==T||E.spotLength!==N||E.rectAreaLength!==S||E.hemiLength!==_||E.numDirectionalShadows!==U||E.numPointShadows!==I||E.numSpotShadows!==C||E.numSpotMaps!==F||E.numLightProbes!==O)&&(s.directional.length=b,s.spot.length=N,s.rectArea.length=S,s.point.length=T,s.hemi.length=_,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=U,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=C+F-D,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=O,E.directionalLength=b,E.pointLength=T,E.spotLength=N,E.rectAreaLength=S,E.hemiLength=_,E.numDirectionalShadows=U,E.numPointShadows=I,E.numSpotShadows=C,E.numSpotMaps=F,E.numLightProbes=O,s.version=HA++)}function m(h,y){let v=0,g=0,b=0,T=0,N=0;const S=y.matrixWorldInverse;for(let _=0,U=h.length;_<U;_++){const I=h[_];if(I.isDirectionalLight){const C=s.directional[v];C.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(S),v++}else if(I.isSpotLight){const C=s.spot[b];C.position.setFromMatrixPosition(I.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(S),b++}else if(I.isRectAreaLight){const C=s.rectArea[T];C.position.setFromMatrixPosition(I.matrixWorld),C.position.applyMatrix4(S),d.identity(),c.copy(I.matrixWorld),c.premultiply(S),d.extractRotation(c),C.halfWidth.set(I.width*.5,0,0),C.halfHeight.set(0,I.height*.5,0),C.halfWidth.applyMatrix4(d),C.halfHeight.applyMatrix4(d),T++}else if(I.isPointLight){const C=s.point[g];C.position.setFromMatrixPosition(I.matrixWorld),C.position.applyMatrix4(S),g++}else if(I.isHemisphereLight){const C=s.hemi[N];C.direction.setFromMatrixPosition(I.matrixWorld),C.direction.transformDirection(S),N++}}}return{setup:p,setupView:m,state:s}}function Qx(o){const e=new VA(o),i=[],s=[],l=[];function c(g){v.camera=g,i.length=0,s.length=0,l.length=0}function d(g){i.push(g)}function p(g){s.push(g)}function m(g){l.push(g)}function h(){e.setup(i)}function y(g){e.setupView(i,g)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:h,setupLightsView:y,pushLight:d,pushShadow:p,pushLightProbeGrid:m}}function kA(o){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let p;return d===void 0?(p=new Qx(o),e.set(l,[p])):c>=d.length?(p=new Qx(o),d.push(p)):p=d[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const XA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,qA=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],YA=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Jx=new rn,ko=new $,kd=new $;function jA(o,e,i){let s=new Qh;const l=new xt,c=new xt,d=new sn,p=new ib,m=new ab,h={},y=i.maxTextureSize,v={[rs]:Zn,[Zn]:rs,[va]:va},g=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:XA,fragmentShader:WA}),b=g.clone();b.defines.HORIZONTAL_PASS=1;const T=new Kn;T.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new di(T,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oc;let _=this.type;this.render=function(D,O,E){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||D.length===0)return;this.type===WS&&(it("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Oc);const P=o.getRenderTarget(),k=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),Q=o.state;Q.setBlending(Sa),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const he=_!==this.type;he&&O.traverse(function(_e){_e.material&&(Array.isArray(_e.material)?_e.material.forEach(J=>J.needsUpdate=!0):_e.material.needsUpdate=!0)});for(let _e=0,J=D.length;_e<J;_e++){const B=D[_e],G=B.shadow;if(G===void 0){it("WebGLShadowMap:",B,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const ee=G.getFrameExtents();l.multiply(ee),c.copy(G.mapSize),(l.x>y||l.y>y)&&(l.x>y&&(c.x=Math.floor(y/ee.x),l.x=c.x*ee.x,G.mapSize.x=c.x),l.y>y&&(c.y=Math.floor(y/ee.y),l.y=c.y*ee.y,G.mapSize.y=c.y));const me=o.state.buffers.depth.getReversed();if(G.camera._reversedDepth=me,G.map===null||he===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Xo){if(B.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new qi(l.x,l.y,{format:Hs,type:ba,minFilter:In,magFilter:In,generateMipmaps:!1}),G.map.texture.name=B.name+".shadowMap",G.map.depthTexture=new Br(l.x,l.y,ki),G.map.depthTexture.name=B.name+".shadowMapDepth",G.map.depthTexture.format=Ea,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Nn,G.map.depthTexture.magFilter=Nn}else B.isPointLight?(G.map=new G_(l.x),G.map.depthTexture=new KM(l.x,Yi)):(G.map=new qi(l.x,l.y),G.map.depthTexture=new Br(l.x,l.y,Yi)),G.map.depthTexture.name=B.name+".shadowMap",G.map.depthTexture.format=Ea,this.type===Oc?(G.map.depthTexture.compareFunction=me?Zh:jh,G.map.depthTexture.minFilter=In,G.map.depthTexture.magFilter=In):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Nn,G.map.depthTexture.magFilter=Nn);G.camera.updateProjectionMatrix()}const Ee=G.map.isWebGLCubeRenderTarget?6:1;for(let z=0;z<Ee;z++){if(G.map.isWebGLCubeRenderTarget)o.setRenderTarget(G.map,z),o.clear();else{z===0&&(o.setRenderTarget(G.map),o.clear());const j=G.getViewport(z);d.set(c.x*j.x,c.y*j.y,c.x*j.z,c.y*j.w),Q.viewport(d)}if(B.isPointLight){const j=G.camera,be=G.matrix,Ae=B.distance||j.far;Ae!==j.far&&(j.far=Ae,j.updateProjectionMatrix()),ko.setFromMatrixPosition(B.matrixWorld),j.position.copy(ko),kd.copy(j.position),kd.add(qA[z]),j.up.copy(YA[z]),j.lookAt(kd),j.updateMatrixWorld(),be.makeTranslation(-ko.x,-ko.y,-ko.z),Jx.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Jx,j.coordinateSystem,j.reversedDepth)}else G.updateMatrices(B);s=G.getFrustum(),C(O,E,G.camera,B,this.type)}G.isPointLightShadow!==!0&&this.type===Xo&&U(G,E),G.needsUpdate=!1}_=this.type,S.needsUpdate=!1,o.setRenderTarget(P,k,V)};function U(D,O){const E=e.update(N);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,b.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,b.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new qi(l.x,l.y,{format:Hs,type:ba})),g.uniforms.shadow_pass.value=D.map.depthTexture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,o.setRenderTarget(D.mapPass),o.clear(),o.renderBufferDirect(O,null,E,g,N,null),b.uniforms.shadow_pass.value=D.mapPass.texture,b.uniforms.resolution.value=D.mapSize,b.uniforms.radius.value=D.radius,o.setRenderTarget(D.map),o.clear(),o.renderBufferDirect(O,null,E,b,N,null)}function I(D,O,E,P){let k=null;const V=E.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(V!==void 0)k=V;else if(k=E.isPointLight===!0?m:p,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Q=k.uuid,he=O.uuid;let _e=h[Q];_e===void 0&&(_e={},h[Q]=_e);let J=_e[he];J===void 0&&(J=k.clone(),_e[he]=J,O.addEventListener("dispose",F)),k=J}if(k.visible=O.visible,k.wireframe=O.wireframe,P===Xo?k.side=O.shadowSide!==null?O.shadowSide:O.side:k.side=O.shadowSide!==null?O.shadowSide:v[O.side],k.alphaMap=O.alphaMap,k.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,k.map=O.map,k.clipShadows=O.clipShadows,k.clippingPlanes=O.clippingPlanes,k.clipIntersection=O.clipIntersection,k.displacementMap=O.displacementMap,k.displacementScale=O.displacementScale,k.displacementBias=O.displacementBias,k.wireframeLinewidth=O.wireframeLinewidth,k.linewidth=O.linewidth,E.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const Q=o.properties.get(k);Q.light=E}return k}function C(D,O,E,P,k){if(D.visible===!1)return;if(D.layers.test(O.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&k===Xo)&&(!D.frustumCulled||s.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,D.matrixWorld);const he=e.update(D),_e=D.material;if(Array.isArray(_e)){const J=he.groups;for(let B=0,G=J.length;B<G;B++){const ee=J[B],me=_e[ee.materialIndex];if(me&&me.visible){const Ee=I(D,me,P,k);D.onBeforeShadow(o,D,O,E,he,Ee,ee),o.renderBufferDirect(E,null,he,Ee,D,ee),D.onAfterShadow(o,D,O,E,he,Ee,ee)}}}else if(_e.visible){const J=I(D,_e,P,k);D.onBeforeShadow(o,D,O,E,he,J,null),o.renderBufferDirect(E,null,he,J,D,null),D.onAfterShadow(o,D,O,E,he,J,null)}}const Q=D.children;for(let he=0,_e=Q.length;he<_e;he++)C(Q[he],O,E,P,k)}function F(D){D.target.removeEventListener("dispose",F);for(const E in h){const P=h[E],k=D.target.uuid;k in P&&(P[k].dispose(),delete P[k])}}}function ZA(o,e){function i(){let q=!1;const we=new sn;let ge=null;const De=new sn(0,0,0,0);return{setMask:function(Fe){ge!==Fe&&!q&&(o.colorMask(Fe,Fe,Fe,Fe),ge=Fe)},setLocked:function(Fe){q=Fe},setClear:function(Fe,Me,qe,Ve,en){en===!0&&(Fe*=Ve,Me*=Ve,qe*=Ve),we.set(Fe,Me,qe,Ve),De.equals(we)===!1&&(o.clearColor(Fe,Me,qe,Ve),De.copy(we))},reset:function(){q=!1,ge=null,De.set(-1,0,0,0)}}}function s(){let q=!1,we=!1,ge=null,De=null,Fe=null;return{setReversed:function(Me){if(we!==Me){const qe=e.get("EXT_clip_control");Me?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),we=Me;const Ve=Fe;Fe=null,this.setClear(Ve)}},getReversed:function(){return we},setTest:function(Me){Me?Se(o.DEPTH_TEST):Be(o.DEPTH_TEST)},setMask:function(Me){ge!==Me&&!q&&(o.depthMask(Me),ge=Me)},setFunc:function(Me){if(we&&(Me=EM[Me]),De!==Me){switch(Me){case Zd:o.depthFunc(o.NEVER);break;case Kd:o.depthFunc(o.ALWAYS);break;case Qd:o.depthFunc(o.LESS);break;case Ir:o.depthFunc(o.LEQUAL);break;case Jd:o.depthFunc(o.EQUAL);break;case $d:o.depthFunc(o.GEQUAL);break;case eh:o.depthFunc(o.GREATER);break;case th:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}De=Me}},setLocked:function(Me){q=Me},setClear:function(Me){Fe!==Me&&(Fe=Me,we&&(Me=1-Me),o.clearDepth(Me))},reset:function(){q=!1,ge=null,De=null,Fe=null,we=!1}}}function l(){let q=!1,we=null,ge=null,De=null,Fe=null,Me=null,qe=null,Ve=null,en=null;return{setTest:function(zt){q||(zt?Se(o.STENCIL_TEST):Be(o.STENCIL_TEST))},setMask:function(zt){we!==zt&&!q&&(o.stencilMask(zt),we=zt)},setFunc:function(zt,Qn,Jn){(ge!==zt||De!==Qn||Fe!==Jn)&&(o.stencilFunc(zt,Qn,Jn),ge=zt,De=Qn,Fe=Jn)},setOp:function(zt,Qn,Jn){(Me!==zt||qe!==Qn||Ve!==Jn)&&(o.stencilOp(zt,Qn,Jn),Me=zt,qe=Qn,Ve=Jn)},setLocked:function(zt){q=zt},setClear:function(zt){en!==zt&&(o.clearStencil(zt),en=zt)},reset:function(){q=!1,we=null,ge=null,De=null,Fe=null,Me=null,qe=null,Ve=null,en=null}}}const c=new i,d=new s,p=new l,m=new WeakMap,h=new WeakMap;let y={},v={},g={},b=new WeakMap,T=[],N=null,S=!1,_=null,U=null,I=null,C=null,F=null,D=null,O=null,E=new mt(0,0,0),P=0,k=!1,V=null,Q=null,he=null,_e=null,J=null;const B=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,ee=0;const me=o.getParameter(o.VERSION);me.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(me)[1]),G=ee>=1):me.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),G=ee>=2);let Ee=null,z={};const j=o.getParameter(o.SCISSOR_BOX),be=o.getParameter(o.VIEWPORT),Ae=new sn().fromArray(j),Le=new sn().fromArray(be);function se(q,we,ge,De){const Fe=new Uint8Array(4),Me=o.createTexture();o.bindTexture(q,Me),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let qe=0;qe<ge;qe++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(we,0,o.RGBA,1,1,De,0,o.RGBA,o.UNSIGNED_BYTE,Fe):o.texImage2D(we+qe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Fe);return Me}const ye={};ye[o.TEXTURE_2D]=se(o.TEXTURE_2D,o.TEXTURE_2D,1),ye[o.TEXTURE_CUBE_MAP]=se(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[o.TEXTURE_2D_ARRAY]=se(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ye[o.TEXTURE_3D]=se(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),Se(o.DEPTH_TEST),d.setFunc(Ir),jt(!1),Zt(Jg),Se(o.CULL_FACE),vt(Sa);function Se(q){y[q]!==!0&&(o.enable(q),y[q]=!0)}function Be(q){y[q]!==!1&&(o.disable(q),y[q]=!1)}function tt(q,we){return g[q]!==we?(o.bindFramebuffer(q,we),g[q]=we,q===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=we),q===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=we),!0):!1}function je(q,we){let ge=T,De=!1;if(q){ge=b.get(we),ge===void 0&&(ge=[],b.set(we,ge));const Fe=q.textures;if(ge.length!==Fe.length||ge[0]!==o.COLOR_ATTACHMENT0){for(let Me=0,qe=Fe.length;Me<qe;Me++)ge[Me]=o.COLOR_ATTACHMENT0+Me;ge.length=Fe.length,De=!0}}else ge[0]!==o.BACK&&(ge[0]=o.BACK,De=!0);De&&o.drawBuffers(ge)}function Lt(q){return N!==q?(o.useProgram(q),N=q,!0):!1}const dt={[Os]:o.FUNC_ADD,[YS]:o.FUNC_SUBTRACT,[jS]:o.FUNC_REVERSE_SUBTRACT};dt[ZS]=o.MIN,dt[KS]=o.MAX;const _t={[QS]:o.ZERO,[JS]:o.ONE,[$S]:o.SRC_COLOR,[Yd]:o.SRC_ALPHA,[sM]:o.SRC_ALPHA_SATURATE,[iM]:o.DST_COLOR,[tM]:o.DST_ALPHA,[eM]:o.ONE_MINUS_SRC_COLOR,[jd]:o.ONE_MINUS_SRC_ALPHA,[aM]:o.ONE_MINUS_DST_COLOR,[nM]:o.ONE_MINUS_DST_ALPHA,[rM]:o.CONSTANT_COLOR,[oM]:o.ONE_MINUS_CONSTANT_COLOR,[lM]:o.CONSTANT_ALPHA,[cM]:o.ONE_MINUS_CONSTANT_ALPHA};function vt(q,we,ge,De,Fe,Me,qe,Ve,en,zt){if(q===Sa){S===!0&&(Be(o.BLEND),S=!1);return}if(S===!1&&(Se(o.BLEND),S=!0),q!==qS){if(q!==_||zt!==k){if((U!==Os||F!==Os)&&(o.blendEquation(o.FUNC_ADD),U=Os,F=Os),zt)switch(q){case Or:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case qd:o.blendFunc(o.ONE,o.ONE);break;case $g:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case ex:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:wt("WebGLState: Invalid blending: ",q);break}else switch(q){case Or:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case qd:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case $g:wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ex:wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:wt("WebGLState: Invalid blending: ",q);break}I=null,C=null,D=null,O=null,E.set(0,0,0),P=0,_=q,k=zt}return}Fe=Fe||we,Me=Me||ge,qe=qe||De,(we!==U||Fe!==F)&&(o.blendEquationSeparate(dt[we],dt[Fe]),U=we,F=Fe),(ge!==I||De!==C||Me!==D||qe!==O)&&(o.blendFuncSeparate(_t[ge],_t[De],_t[Me],_t[qe]),I=ge,C=De,D=Me,O=qe),(Ve.equals(E)===!1||en!==P)&&(o.blendColor(Ve.r,Ve.g,Ve.b,en),E.copy(Ve),P=en),_=q,k=!1}function gt(q,we){q.side===va?Be(o.CULL_FACE):Se(o.CULL_FACE);let ge=q.side===Zn;we&&(ge=!ge),jt(ge),q.blending===Or&&q.transparent===!1?vt(Sa):vt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),d.setFunc(q.depthFunc),d.setTest(q.depthTest),d.setMask(q.depthWrite),c.setMask(q.colorWrite);const De=q.stencilWrite;p.setTest(De),De&&(p.setMask(q.stencilWriteMask),p.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),p.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),$t(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?Se(o.SAMPLE_ALPHA_TO_COVERAGE):Be(o.SAMPLE_ALPHA_TO_COVERAGE)}function jt(q){V!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),V=q)}function Zt(q){q!==kS?(Se(o.CULL_FACE),q!==Q&&(q===Jg?o.cullFace(o.BACK):q===XS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Be(o.CULL_FACE),Q=q}function Kt(q){q!==he&&(G&&o.lineWidth(q),he=q)}function $t(q,we,ge){q?(Se(o.POLYGON_OFFSET_FILL),(_e!==we||J!==ge)&&(_e=we,J=ge,d.getReversed()&&(we=-we),o.polygonOffset(we,ge))):Be(o.POLYGON_OFFSET_FILL)}function Pt(q){q?Se(o.SCISSOR_TEST):Be(o.SCISSOR_TEST)}function lt(q){q===void 0&&(q=o.TEXTURE0+B-1),Ee!==q&&(o.activeTexture(q),Ee=q)}function X(q,we,ge){ge===void 0&&(Ee===null?ge=o.TEXTURE0+B-1:ge=Ee);let De=z[ge];De===void 0&&(De={type:void 0,texture:void 0},z[ge]=De),(De.type!==q||De.texture!==we)&&(Ee!==ge&&(o.activeTexture(ge),Ee=ge),o.bindTexture(q,we||ye[q]),De.type=q,De.texture=we)}function et(){const q=z[Ee];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function at(){try{o.compressedTexImage2D(...arguments)}catch(q){wt("WebGLState:",q)}}function L(){try{o.compressedTexImage3D(...arguments)}catch(q){wt("WebGLState:",q)}}function M(){try{o.texSubImage2D(...arguments)}catch(q){wt("WebGLState:",q)}}function Z(){try{o.texSubImage3D(...arguments)}catch(q){wt("WebGLState:",q)}}function re(){try{o.compressedTexSubImage2D(...arguments)}catch(q){wt("WebGLState:",q)}}function fe(){try{o.compressedTexSubImage3D(...arguments)}catch(q){wt("WebGLState:",q)}}function Te(){try{o.texStorage2D(...arguments)}catch(q){wt("WebGLState:",q)}}function Ce(){try{o.texStorage3D(...arguments)}catch(q){wt("WebGLState:",q)}}function ue(){try{o.texImage2D(...arguments)}catch(q){wt("WebGLState:",q)}}function de(){try{o.texImage3D(...arguments)}catch(q){wt("WebGLState:",q)}}function Re(q){return v[q]!==void 0?v[q]:o.getParameter(q)}function ze(q,we){v[q]!==we&&(o.pixelStorei(q,we),v[q]=we)}function Oe(q){Ae.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),Ae.copy(q))}function Ne(q){Le.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),Le.copy(q))}function Ke(q,we){let ge=h.get(we);ge===void 0&&(ge=new WeakMap,h.set(we,ge));let De=ge.get(q);De===void 0&&(De=o.getUniformBlockIndex(we,q.name),ge.set(q,De))}function Qe(q,we){const De=h.get(we).get(q);m.get(we)!==De&&(o.uniformBlockBinding(we,De,q.__bindingPointIndex),m.set(we,De))}function st(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),y={},v={},Ee=null,z={},g={},b=new WeakMap,T=[],N=null,S=!1,_=null,U=null,I=null,C=null,F=null,D=null,O=null,E=new mt(0,0,0),P=0,k=!1,V=null,Q=null,he=null,_e=null,J=null,Ae.set(0,0,o.canvas.width,o.canvas.height),Le.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:Se,disable:Be,bindFramebuffer:tt,drawBuffers:je,useProgram:Lt,setBlending:vt,setMaterial:gt,setFlipSided:jt,setCullFace:Zt,setLineWidth:Kt,setPolygonOffset:$t,setScissorTest:Pt,activeTexture:lt,bindTexture:X,unbindTexture:et,compressedTexImage2D:at,compressedTexImage3D:L,texImage2D:ue,texImage3D:de,pixelStorei:ze,getParameter:Re,updateUBOMapping:Ke,uniformBlockBinding:Qe,texStorage2D:Te,texStorage3D:Ce,texSubImage2D:M,texSubImage3D:Z,compressedTexSubImage2D:re,compressedTexSubImage3D:fe,scissor:Oe,viewport:Ne,reset:st}}function KA(o,e,i,s,l,c,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new xt,y=new WeakMap,v=new Set;let g;const b=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(L,M){return T?new OffscreenCanvas(L,M):Wc("canvas")}function S(L,M,Z){let re=1;const fe=at(L);if((fe.width>Z||fe.height>Z)&&(re=Z/Math.max(fe.width,fe.height)),re<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Te=Math.floor(re*fe.width),Ce=Math.floor(re*fe.height);g===void 0&&(g=N(Te,Ce));const ue=M?N(Te,Ce):g;return ue.width=Te,ue.height=Ce,ue.getContext("2d").drawImage(L,0,0,Te,Ce),it("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+Te+"x"+Ce+")."),ue}else return"data"in L&&it("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),L;return L}function _(L){return L.generateMipmaps}function U(L){o.generateMipmap(L)}function I(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(L,M,Z,re,fe,Te=!1){if(L!==null){if(o[L]!==void 0)return o[L];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Ce;re&&(Ce=e.get("EXT_texture_norm16"),Ce||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=M;if(M===o.RED&&(Z===o.FLOAT&&(ue=o.R32F),Z===o.HALF_FLOAT&&(ue=o.R16F),Z===o.UNSIGNED_BYTE&&(ue=o.R8),Z===o.UNSIGNED_SHORT&&Ce&&(ue=Ce.R16_EXT),Z===o.SHORT&&Ce&&(ue=Ce.R16_SNORM_EXT)),M===o.RED_INTEGER&&(Z===o.UNSIGNED_BYTE&&(ue=o.R8UI),Z===o.UNSIGNED_SHORT&&(ue=o.R16UI),Z===o.UNSIGNED_INT&&(ue=o.R32UI),Z===o.BYTE&&(ue=o.R8I),Z===o.SHORT&&(ue=o.R16I),Z===o.INT&&(ue=o.R32I)),M===o.RG&&(Z===o.FLOAT&&(ue=o.RG32F),Z===o.HALF_FLOAT&&(ue=o.RG16F),Z===o.UNSIGNED_BYTE&&(ue=o.RG8),Z===o.UNSIGNED_SHORT&&Ce&&(ue=Ce.RG16_EXT),Z===o.SHORT&&Ce&&(ue=Ce.RG16_SNORM_EXT)),M===o.RG_INTEGER&&(Z===o.UNSIGNED_BYTE&&(ue=o.RG8UI),Z===o.UNSIGNED_SHORT&&(ue=o.RG16UI),Z===o.UNSIGNED_INT&&(ue=o.RG32UI),Z===o.BYTE&&(ue=o.RG8I),Z===o.SHORT&&(ue=o.RG16I),Z===o.INT&&(ue=o.RG32I)),M===o.RGB_INTEGER&&(Z===o.UNSIGNED_BYTE&&(ue=o.RGB8UI),Z===o.UNSIGNED_SHORT&&(ue=o.RGB16UI),Z===o.UNSIGNED_INT&&(ue=o.RGB32UI),Z===o.BYTE&&(ue=o.RGB8I),Z===o.SHORT&&(ue=o.RGB16I),Z===o.INT&&(ue=o.RGB32I)),M===o.RGBA_INTEGER&&(Z===o.UNSIGNED_BYTE&&(ue=o.RGBA8UI),Z===o.UNSIGNED_SHORT&&(ue=o.RGBA16UI),Z===o.UNSIGNED_INT&&(ue=o.RGBA32UI),Z===o.BYTE&&(ue=o.RGBA8I),Z===o.SHORT&&(ue=o.RGBA16I),Z===o.INT&&(ue=o.RGBA32I)),M===o.RGB&&(Z===o.UNSIGNED_SHORT&&Ce&&(ue=Ce.RGB16_EXT),Z===o.SHORT&&Ce&&(ue=Ce.RGB16_SNORM_EXT),Z===o.UNSIGNED_INT_5_9_9_9_REV&&(ue=o.RGB9_E5),Z===o.UNSIGNED_INT_10F_11F_11F_REV&&(ue=o.R11F_G11F_B10F)),M===o.RGBA){const de=Te?Xc:Rt.getTransfer(fe);Z===o.FLOAT&&(ue=o.RGBA32F),Z===o.HALF_FLOAT&&(ue=o.RGBA16F),Z===o.UNSIGNED_BYTE&&(ue=de===Vt?o.SRGB8_ALPHA8:o.RGBA8),Z===o.UNSIGNED_SHORT&&Ce&&(ue=Ce.RGBA16_EXT),Z===o.SHORT&&Ce&&(ue=Ce.RGBA16_SNORM_EXT),Z===o.UNSIGNED_SHORT_4_4_4_4&&(ue=o.RGBA4),Z===o.UNSIGNED_SHORT_5_5_5_1&&(ue=o.RGB5_A1)}return(ue===o.R16F||ue===o.R32F||ue===o.RG16F||ue===o.RG32F||ue===o.RGBA16F||ue===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function F(L,M){let Z;return L?M===null||M===Yi||M===jo?Z=o.DEPTH24_STENCIL8:M===ki?Z=o.DEPTH32F_STENCIL8:M===Yo&&(Z=o.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Yi||M===jo?Z=o.DEPTH_COMPONENT24:M===ki?Z=o.DEPTH_COMPONENT32F:M===Yo&&(Z=o.DEPTH_COMPONENT16),Z}function D(L,M){return _(L)===!0||L.isFramebufferTexture&&L.minFilter!==Nn&&L.minFilter!==In?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function O(L){const M=L.target;M.removeEventListener("dispose",O),P(M),M.isVideoTexture&&y.delete(M),M.isHTMLTexture&&v.delete(M)}function E(L){const M=L.target;M.removeEventListener("dispose",E),V(M)}function P(L){const M=s.get(L);if(M.__webglInit===void 0)return;const Z=L.source,re=b.get(Z);if(re){const fe=re[M.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&k(L),Object.keys(re).length===0&&b.delete(Z)}s.remove(L)}function k(L){const M=s.get(L);o.deleteTexture(M.__webglTexture);const Z=L.source,re=b.get(Z);delete re[M.__cacheKey],d.memory.textures--}function V(L){const M=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(M.__webglFramebuffer[re]))for(let fe=0;fe<M.__webglFramebuffer[re].length;fe++)o.deleteFramebuffer(M.__webglFramebuffer[re][fe]);else o.deleteFramebuffer(M.__webglFramebuffer[re]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[re])}else{if(Array.isArray(M.__webglFramebuffer))for(let re=0;re<M.__webglFramebuffer.length;re++)o.deleteFramebuffer(M.__webglFramebuffer[re]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let re=0;re<M.__webglColorRenderbuffer.length;re++)M.__webglColorRenderbuffer[re]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[re]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Z=L.textures;for(let re=0,fe=Z.length;re<fe;re++){const Te=s.get(Z[re]);Te.__webglTexture&&(o.deleteTexture(Te.__webglTexture),d.memory.textures--),s.remove(Z[re])}s.remove(L)}let Q=0;function he(){Q=0}function _e(){return Q}function J(L){Q=L}function B(){const L=Q;return L>=l.maxTextures&&it("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),Q+=1,L}function G(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function ee(L,M){const Z=s.get(L);if(L.isVideoTexture&&X(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Z.__version!==L.version){const re=L.image;if(re===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{Be(Z,L,M);return}}else L.isExternalTexture&&(Z.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,Z.__webglTexture,o.TEXTURE0+M)}function me(L,M){const Z=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){Be(Z,L,M);return}else L.isExternalTexture&&(Z.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,Z.__webglTexture,o.TEXTURE0+M)}function Ee(L,M){const Z=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){Be(Z,L,M);return}i.bindTexture(o.TEXTURE_3D,Z.__webglTexture,o.TEXTURE0+M)}function z(L,M){const Z=s.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&Z.__version!==L.version){tt(Z,L,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,Z.__webglTexture,o.TEXTURE0+M)}const j={[nh]:o.REPEAT,[ya]:o.CLAMP_TO_EDGE,[ih]:o.MIRRORED_REPEAT},be={[Nn]:o.NEAREST,[dM]:o.NEAREST_MIPMAP_NEAREST,[uc]:o.NEAREST_MIPMAP_LINEAR,[In]:o.LINEAR,[dd]:o.LINEAR_MIPMAP_NEAREST,[Is]:o.LINEAR_MIPMAP_LINEAR},Ae={[mM]:o.NEVER,[yM]:o.ALWAYS,[gM]:o.LESS,[jh]:o.LEQUAL,[xM]:o.EQUAL,[Zh]:o.GEQUAL,[_M]:o.GREATER,[vM]:o.NOTEQUAL};function Le(L,M){if(M.type===ki&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===In||M.magFilter===dd||M.magFilter===uc||M.magFilter===Is||M.minFilter===In||M.minFilter===dd||M.minFilter===uc||M.minFilter===Is)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,j[M.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,j[M.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,j[M.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,be[M.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,be[M.minFilter]),M.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,Ae[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Nn||M.minFilter!==uc&&M.minFilter!==Is||M.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function se(L,M){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",O));const re=M.source;let fe=b.get(re);fe===void 0&&(fe={},b.set(re,fe));const Te=G(M);if(Te!==L.__cacheKey){fe[Te]===void 0&&(fe[Te]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,Z=!0),fe[Te].usedTimes++;const Ce=fe[L.__cacheKey];Ce!==void 0&&(fe[L.__cacheKey].usedTimes--,Ce.usedTimes===0&&k(M)),L.__cacheKey=Te,L.__webglTexture=fe[Te].texture}return Z}function ye(L,M,Z){return Math.floor(Math.floor(L/Z)/M)}function Se(L,M,Z,re){const Te=L.updateRanges;if(Te.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,Z,re,M.data);else{Te.sort((ze,Oe)=>ze.start-Oe.start);let Ce=0;for(let ze=1;ze<Te.length;ze++){const Oe=Te[Ce],Ne=Te[ze],Ke=Oe.start+Oe.count,Qe=ye(Ne.start,M.width,4),st=ye(Oe.start,M.width,4);Ne.start<=Ke+1&&Qe===st&&ye(Ne.start+Ne.count-1,M.width,4)===Qe?Oe.count=Math.max(Oe.count,Ne.start+Ne.count-Oe.start):(++Ce,Te[Ce]=Ne)}Te.length=Ce+1;const ue=i.getParameter(o.UNPACK_ROW_LENGTH),de=i.getParameter(o.UNPACK_SKIP_PIXELS),Re=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let ze=0,Oe=Te.length;ze<Oe;ze++){const Ne=Te[ze],Ke=Math.floor(Ne.start/4),Qe=Math.ceil(Ne.count/4),st=Ke%M.width,q=Math.floor(Ke/M.width),we=Qe,ge=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,st),i.pixelStorei(o.UNPACK_SKIP_ROWS,q),i.texSubImage2D(o.TEXTURE_2D,0,st,q,we,ge,Z,re,M.data)}L.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,ue),i.pixelStorei(o.UNPACK_SKIP_PIXELS,de),i.pixelStorei(o.UNPACK_SKIP_ROWS,Re)}}function Be(L,M,Z){let re=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=o.TEXTURE_3D);const fe=se(L,M),Te=M.source;i.bindTexture(re,L.__webglTexture,o.TEXTURE0+Z);const Ce=s.get(Te);if(Te.version!==Ce.__version||fe===!0){if(i.activeTexture(o.TEXTURE0+Z),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ge=Rt.getPrimaries(Rt.workingColorSpace),De=M.colorSpace===as?null:Rt.getPrimaries(M.colorSpace),Fe=M.colorSpace===as||ge===De?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}i.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment);let de=S(M.image,!1,l.maxTextureSize);de=et(M,de);const Re=c.convert(M.format,M.colorSpace),ze=c.convert(M.type);let Oe=C(M.internalFormat,Re,ze,M.normalized,M.colorSpace,M.isVideoTexture);Le(re,M);let Ne;const Ke=M.mipmaps,Qe=M.isVideoTexture!==!0,st=Ce.__version===void 0||fe===!0,q=Te.dataReady,we=D(M,de);if(M.isDepthTexture)Oe=F(M.format===Fs,M.type),st&&(Qe?i.texStorage2D(o.TEXTURE_2D,1,Oe,de.width,de.height):i.texImage2D(o.TEXTURE_2D,0,Oe,de.width,de.height,0,Re,ze,null));else if(M.isDataTexture)if(Ke.length>0){Qe&&st&&i.texStorage2D(o.TEXTURE_2D,we,Oe,Ke[0].width,Ke[0].height);for(let ge=0,De=Ke.length;ge<De;ge++)Ne=Ke[ge],Qe?q&&i.texSubImage2D(o.TEXTURE_2D,ge,0,0,Ne.width,Ne.height,Re,ze,Ne.data):i.texImage2D(o.TEXTURE_2D,ge,Oe,Ne.width,Ne.height,0,Re,ze,Ne.data);M.generateMipmaps=!1}else Qe?(st&&i.texStorage2D(o.TEXTURE_2D,we,Oe,de.width,de.height),q&&Se(M,de,Re,ze)):i.texImage2D(o.TEXTURE_2D,0,Oe,de.width,de.height,0,Re,ze,de.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Qe&&st&&i.texStorage3D(o.TEXTURE_2D_ARRAY,we,Oe,Ke[0].width,Ke[0].height,de.depth);for(let ge=0,De=Ke.length;ge<De;ge++)if(Ne=Ke[ge],M.format!==Li)if(Re!==null)if(Qe){if(q)if(M.layerUpdates.size>0){const Fe=Cx(Ne.width,Ne.height,M.format,M.type);for(const Me of M.layerUpdates){const qe=Ne.data.subarray(Me*Fe/Ne.data.BYTES_PER_ELEMENT,(Me+1)*Fe/Ne.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ge,0,0,Me,Ne.width,Ne.height,1,Re,qe)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ge,0,0,0,Ne.width,Ne.height,de.depth,Re,Ne.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ge,Oe,Ne.width,Ne.height,de.depth,0,Ne.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?q&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ge,0,0,0,Ne.width,Ne.height,de.depth,Re,ze,Ne.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ge,Oe,Ne.width,Ne.height,de.depth,0,Re,ze,Ne.data)}else{Qe&&st&&i.texStorage2D(o.TEXTURE_2D,we,Oe,Ke[0].width,Ke[0].height);for(let ge=0,De=Ke.length;ge<De;ge++)Ne=Ke[ge],M.format!==Li?Re!==null?Qe?q&&i.compressedTexSubImage2D(o.TEXTURE_2D,ge,0,0,Ne.width,Ne.height,Re,Ne.data):i.compressedTexImage2D(o.TEXTURE_2D,ge,Oe,Ne.width,Ne.height,0,Ne.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?q&&i.texSubImage2D(o.TEXTURE_2D,ge,0,0,Ne.width,Ne.height,Re,ze,Ne.data):i.texImage2D(o.TEXTURE_2D,ge,Oe,Ne.width,Ne.height,0,Re,ze,Ne.data)}else if(M.isDataArrayTexture)if(Qe){if(st&&i.texStorage3D(o.TEXTURE_2D_ARRAY,we,Oe,de.width,de.height,de.depth),q)if(M.layerUpdates.size>0){const ge=Cx(de.width,de.height,M.format,M.type);for(const De of M.layerUpdates){const Fe=de.data.subarray(De*ge/de.data.BYTES_PER_ELEMENT,(De+1)*ge/de.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,De,de.width,de.height,1,Re,ze,Fe)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Re,ze,de.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Oe,de.width,de.height,de.depth,0,Re,ze,de.data);else if(M.isData3DTexture)Qe?(st&&i.texStorage3D(o.TEXTURE_3D,we,Oe,de.width,de.height,de.depth),q&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Re,ze,de.data)):i.texImage3D(o.TEXTURE_3D,0,Oe,de.width,de.height,de.depth,0,Re,ze,de.data);else if(M.isFramebufferTexture){if(st)if(Qe)i.texStorage2D(o.TEXTURE_2D,we,Oe,de.width,de.height);else{let ge=de.width,De=de.height;for(let Fe=0;Fe<we;Fe++)i.texImage2D(o.TEXTURE_2D,Fe,Oe,ge,De,0,Re,ze,null),ge>>=1,De>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in o){const ge=o.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),de.parentNode!==ge){ge.appendChild(de),v.add(M),ge.onpaint=De=>{const Fe=De.changedElements;for(const Me of v)Fe.includes(Me.image)&&(Me.needsUpdate=!0)},ge.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,de);else{const Fe=o.RGBA,Me=o.RGBA,qe=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Fe,Me,qe,de)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Ke.length>0){if(Qe&&st){const ge=at(Ke[0]);i.texStorage2D(o.TEXTURE_2D,we,Oe,ge.width,ge.height)}for(let ge=0,De=Ke.length;ge<De;ge++)Ne=Ke[ge],Qe?q&&i.texSubImage2D(o.TEXTURE_2D,ge,0,0,Re,ze,Ne):i.texImage2D(o.TEXTURE_2D,ge,Oe,Re,ze,Ne);M.generateMipmaps=!1}else if(Qe){if(st){const ge=at(de);i.texStorage2D(o.TEXTURE_2D,we,Oe,ge.width,ge.height)}q&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Re,ze,de)}else i.texImage2D(o.TEXTURE_2D,0,Oe,Re,ze,de);_(M)&&U(re),Ce.__version=Te.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function tt(L,M,Z){if(M.image.length!==6)return;const re=se(L,M),fe=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+Z);const Te=s.get(fe);if(fe.version!==Te.__version||re===!0){i.activeTexture(o.TEXTURE0+Z);const Ce=Rt.getPrimaries(Rt.workingColorSpace),ue=M.colorSpace===as?null:Rt.getPrimaries(M.colorSpace),de=M.colorSpace===as||Ce===ue?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Re=M.isCompressedTexture||M.image[0].isCompressedTexture,ze=M.image[0]&&M.image[0].isDataTexture,Oe=[];for(let Me=0;Me<6;Me++)!Re&&!ze?Oe[Me]=S(M.image[Me],!0,l.maxCubemapSize):Oe[Me]=ze?M.image[Me].image:M.image[Me],Oe[Me]=et(M,Oe[Me]);const Ne=Oe[0],Ke=c.convert(M.format,M.colorSpace),Qe=c.convert(M.type),st=C(M.internalFormat,Ke,Qe,M.normalized,M.colorSpace),q=M.isVideoTexture!==!0,we=Te.__version===void 0||re===!0,ge=fe.dataReady;let De=D(M,Ne);Le(o.TEXTURE_CUBE_MAP,M);let Fe;if(Re){q&&we&&i.texStorage2D(o.TEXTURE_CUBE_MAP,De,st,Ne.width,Ne.height);for(let Me=0;Me<6;Me++){Fe=Oe[Me].mipmaps;for(let qe=0;qe<Fe.length;qe++){const Ve=Fe[qe];M.format!==Li?Ke!==null?q?ge&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe,0,0,Ve.width,Ve.height,Ke,Ve.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe,st,Ve.width,Ve.height,0,Ve.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?ge&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe,0,0,Ve.width,Ve.height,Ke,Qe,Ve.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe,st,Ve.width,Ve.height,0,Ke,Qe,Ve.data)}}}else{if(Fe=M.mipmaps,q&&we){Fe.length>0&&De++;const Me=at(Oe[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,De,st,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(ze){q?ge&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Oe[Me].width,Oe[Me].height,Ke,Qe,Oe[Me].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,st,Oe[Me].width,Oe[Me].height,0,Ke,Qe,Oe[Me].data);for(let qe=0;qe<Fe.length;qe++){const en=Fe[qe].image[Me].image;q?ge&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe+1,0,0,en.width,en.height,Ke,Qe,en.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe+1,st,en.width,en.height,0,Ke,Qe,en.data)}}else{q?ge&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ke,Qe,Oe[Me]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,st,Ke,Qe,Oe[Me]);for(let qe=0;qe<Fe.length;qe++){const Ve=Fe[qe];q?ge&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe+1,0,0,Ke,Qe,Ve.image[Me]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe+1,st,Ke,Qe,Ve.image[Me])}}}_(M)&&U(o.TEXTURE_CUBE_MAP),Te.__version=fe.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function je(L,M,Z,re,fe,Te){const Ce=c.convert(Z.format,Z.colorSpace),ue=c.convert(Z.type),de=C(Z.internalFormat,Ce,ue,Z.normalized,Z.colorSpace),Re=s.get(M),ze=s.get(Z);if(ze.__renderTarget=M,!Re.__hasExternalTextures){const Oe=Math.max(1,M.width>>Te),Ne=Math.max(1,M.height>>Te);fe===o.TEXTURE_3D||fe===o.TEXTURE_2D_ARRAY?i.texImage3D(fe,Te,de,Oe,Ne,M.depth,0,Ce,ue,null):i.texImage2D(fe,Te,de,Oe,Ne,0,Ce,ue,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),lt(M)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,re,fe,ze.__webglTexture,0,Pt(M)):(fe===o.TEXTURE_2D||fe>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,re,fe,ze.__webglTexture,Te),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Lt(L,M,Z){if(o.bindRenderbuffer(o.RENDERBUFFER,L),M.depthBuffer){const re=M.depthTexture,fe=re&&re.isDepthTexture?re.type:null,Te=F(M.stencilBuffer,fe),Ce=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;lt(M)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Pt(M),Te,M.width,M.height):Z?o.renderbufferStorageMultisample(o.RENDERBUFFER,Pt(M),Te,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,Te,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ce,o.RENDERBUFFER,L)}else{const re=M.textures;for(let fe=0;fe<re.length;fe++){const Te=re[fe],Ce=c.convert(Te.format,Te.colorSpace),ue=c.convert(Te.type),de=C(Te.internalFormat,Ce,ue,Te.normalized,Te.colorSpace);lt(M)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Pt(M),de,M.width,M.height):Z?o.renderbufferStorageMultisample(o.RENDERBUFFER,Pt(M),de,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,de,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function dt(L,M,Z){const re=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const fe=s.get(M.depthTexture);if(fe.__renderTarget=M,(!fe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),re){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,M.depthTexture.addEventListener("dispose",O)),fe.__webglTexture===void 0){fe.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,fe.__webglTexture),Le(o.TEXTURE_CUBE_MAP,M.depthTexture);const Re=c.convert(M.depthTexture.format),ze=c.convert(M.depthTexture.type);let Oe;M.depthTexture.format===Ea?Oe=o.DEPTH_COMPONENT24:M.depthTexture.format===Fs&&(Oe=o.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Oe,M.width,M.height,0,Re,ze,null)}}else ee(M.depthTexture,0);const Te=fe.__webglTexture,Ce=Pt(M),ue=re?o.TEXTURE_CUBE_MAP_POSITIVE_X+Z:o.TEXTURE_2D,de=M.depthTexture.format===Fs?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ea)lt(M)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,de,ue,Te,0,Ce):o.framebufferTexture2D(o.FRAMEBUFFER,de,ue,Te,0);else if(M.depthTexture.format===Fs)lt(M)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,de,ue,Te,0,Ce):o.framebufferTexture2D(o.FRAMEBUFFER,de,ue,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _t(L){const M=s.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){const re=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),re){const fe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,re.removeEventListener("dispose",fe)};re.addEventListener("dispose",fe),M.__depthDisposeCallback=fe}M.__boundDepthTexture=re}if(L.depthTexture&&!M.__autoAllocateDepthBuffer)if(Z)for(let re=0;re<6;re++)dt(M.__webglFramebuffer[re],L,re);else{const re=L.texture.mipmaps;re&&re.length>0?dt(M.__webglFramebuffer[0],L,0):dt(M.__webglFramebuffer,L,0)}else if(Z){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]===void 0)M.__webglDepthbuffer[re]=o.createRenderbuffer(),Lt(M.__webglDepthbuffer[re],L,!1);else{const fe=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Te=M.__webglDepthbuffer[re];o.bindRenderbuffer(o.RENDERBUFFER,Te),o.framebufferRenderbuffer(o.FRAMEBUFFER,fe,o.RENDERBUFFER,Te)}}else{const re=L.texture.mipmaps;if(re&&re.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),Lt(M.__webglDepthbuffer,L,!1);else{const fe=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Te=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Te),o.framebufferRenderbuffer(o.FRAMEBUFFER,fe,o.RENDERBUFFER,Te)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function vt(L,M,Z){const re=s.get(L);M!==void 0&&je(re.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Z!==void 0&&_t(L)}function gt(L){const M=L.texture,Z=s.get(L),re=s.get(M);L.addEventListener("dispose",E);const fe=L.textures,Te=L.isWebGLCubeRenderTarget===!0,Ce=fe.length>1;if(Ce||(re.__webglTexture===void 0&&(re.__webglTexture=o.createTexture()),re.__version=M.version,d.memory.textures++),Te){Z.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0){Z.__webglFramebuffer[ue]=[];for(let de=0;de<M.mipmaps.length;de++)Z.__webglFramebuffer[ue][de]=o.createFramebuffer()}else Z.__webglFramebuffer[ue]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)Z.__webglFramebuffer[ue]=o.createFramebuffer()}else Z.__webglFramebuffer=o.createFramebuffer();if(Ce)for(let ue=0,de=fe.length;ue<de;ue++){const Re=s.get(fe[ue]);Re.__webglTexture===void 0&&(Re.__webglTexture=o.createTexture(),d.memory.textures++)}if(L.samples>0&&lt(L)===!1){Z.__webglMultisampledFramebuffer=o.createFramebuffer(),Z.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ue=0;ue<fe.length;ue++){const de=fe[ue];Z.__webglColorRenderbuffer[ue]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Z.__webglColorRenderbuffer[ue]);const Re=c.convert(de.format,de.colorSpace),ze=c.convert(de.type),Oe=C(de.internalFormat,Re,ze,de.normalized,de.colorSpace,L.isXRRenderTarget===!0),Ne=Pt(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ne,Oe,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ue,o.RENDERBUFFER,Z.__webglColorRenderbuffer[ue])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=o.createRenderbuffer(),Lt(Z.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Te){i.bindTexture(o.TEXTURE_CUBE_MAP,re.__webglTexture),Le(o.TEXTURE_CUBE_MAP,M);for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0)for(let de=0;de<M.mipmaps.length;de++)je(Z.__webglFramebuffer[ue][de],L,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ue,de);else je(Z.__webglFramebuffer[ue],L,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);_(M)&&U(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ce){for(let ue=0,de=fe.length;ue<de;ue++){const Re=fe[ue],ze=s.get(Re);let Oe=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Oe=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Oe,ze.__webglTexture),Le(Oe,Re),je(Z.__webglFramebuffer,L,Re,o.COLOR_ATTACHMENT0+ue,Oe,0),_(Re)&&U(Oe)}i.unbindTexture()}else{let ue=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ue=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ue,re.__webglTexture),Le(ue,M),M.mipmaps&&M.mipmaps.length>0)for(let de=0;de<M.mipmaps.length;de++)je(Z.__webglFramebuffer[de],L,M,o.COLOR_ATTACHMENT0,ue,de);else je(Z.__webglFramebuffer,L,M,o.COLOR_ATTACHMENT0,ue,0);_(M)&&U(ue),i.unbindTexture()}L.depthBuffer&&_t(L)}function jt(L){const M=L.textures;for(let Z=0,re=M.length;Z<re;Z++){const fe=M[Z];if(_(fe)){const Te=I(L),Ce=s.get(fe).__webglTexture;i.bindTexture(Te,Ce),U(Te),i.unbindTexture()}}}const Zt=[],Kt=[];function $t(L){if(L.samples>0){if(lt(L)===!1){const M=L.textures,Z=L.width,re=L.height;let fe=o.COLOR_BUFFER_BIT;const Te=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ce=s.get(L),ue=M.length>1;if(ue)for(let Re=0;Re<M.length;Re++)i.bindFramebuffer(o.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Re,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ce.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Re,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const de=L.texture.mipmaps;de&&de.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Re=0;Re<M.length;Re++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(fe|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(fe|=o.STENCIL_BUFFER_BIT)),ue){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ce.__webglColorRenderbuffer[Re]);const ze=s.get(M[Re]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ze,0)}o.blitFramebuffer(0,0,Z,re,0,0,Z,re,fe,o.NEAREST),m===!0&&(Zt.length=0,Kt.length=0,Zt.push(o.COLOR_ATTACHMENT0+Re),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Zt.push(Te),Kt.push(Te),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Kt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Zt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ue)for(let Re=0;Re<M.length;Re++){i.bindFramebuffer(o.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Re,o.RENDERBUFFER,Ce.__webglColorRenderbuffer[Re]);const ze=s.get(M[Re]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ce.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Re,o.TEXTURE_2D,ze,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const M=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function Pt(L){return Math.min(l.maxSamples,L.samples)}function lt(L){const M=s.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function X(L){const M=d.render.frame;y.get(L)!==M&&(y.set(L,M),L.update())}function et(L,M){const Z=L.colorSpace,re=L.format,fe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Z!==kc&&Z!==as&&(Rt.getTransfer(Z)===Vt?(re!==Li||fe!==fi)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):wt("WebGLTextures: Unsupported texture color space:",Z)),M}function at(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=he,this.getTextureUnits=_e,this.setTextureUnits=J,this.setTexture2D=ee,this.setTexture2DArray=me,this.setTexture3D=Ee,this.setTextureCube=z,this.rebindTextures=vt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=je,this.useMultisampledRTT=lt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function QA(o,e){function i(s,l=as){let c;const d=Rt.getTransfer(l);if(s===fi)return o.UNSIGNED_BYTE;if(s===kh)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Xh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===y_)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===S_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===__)return o.BYTE;if(s===v_)return o.SHORT;if(s===Yo)return o.UNSIGNED_SHORT;if(s===Vh)return o.INT;if(s===Yi)return o.UNSIGNED_INT;if(s===ki)return o.FLOAT;if(s===ba)return o.HALF_FLOAT;if(s===M_)return o.ALPHA;if(s===b_)return o.RGB;if(s===Li)return o.RGBA;if(s===Ea)return o.DEPTH_COMPONENT;if(s===Fs)return o.DEPTH_STENCIL;if(s===E_)return o.RED;if(s===Wh)return o.RED_INTEGER;if(s===Hs)return o.RG;if(s===qh)return o.RG_INTEGER;if(s===Yh)return o.RGBA_INTEGER;if(s===Pc||s===zc||s===Ic||s===Fc)if(d===Vt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Pc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ic)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Pc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===zc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ic)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Fc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ah||s===sh||s===rh||s===oh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===ah)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===sh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===rh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===oh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===lh||s===ch||s===uh||s===fh||s===dh||s===Gc||s===hh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===lh||s===ch)return d===Vt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===uh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===fh)return c.COMPRESSED_R11_EAC;if(s===dh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Gc)return c.COMPRESSED_RG11_EAC;if(s===hh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===ph||s===mh||s===gh||s===xh||s===_h||s===vh||s===yh||s===Sh||s===Mh||s===bh||s===Eh||s===Th||s===Ah||s===Rh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===ph)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===mh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===gh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===xh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===_h)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===vh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===yh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Sh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Mh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===bh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Eh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Th)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ah)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Rh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===wh||s===Ch||s===Dh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===wh)return d===Vt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ch)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Dh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Nh||s===Uh||s===Vc||s===Lh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Nh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Uh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Vc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Lh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===jo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const JA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$A=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class e2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new P_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ji({vertexShader:JA,fragmentShader:$A,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new di(new Qc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class t2 extends Gs{constructor(e,i){super();const s=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,y=null,v=null,g=null,b=null,T=null;const N=typeof XRWebGLBinding<"u",S=new e2,_={},U=i.getContextAttributes();let I=null,C=null;const F=[],D=[],O=new xt;let E=null;const P=new ui;P.viewport=new sn;const k=new ui;k.viewport=new sn;const V=[P,k],Q=new ub;let he=null,_e=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let ye=F[se];return ye===void 0&&(ye=new yd,F[se]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(se){let ye=F[se];return ye===void 0&&(ye=new yd,F[se]=ye),ye.getGripSpace()},this.getHand=function(se){let ye=F[se];return ye===void 0&&(ye=new yd,F[se]=ye),ye.getHandSpace()};function J(se){const ye=D.indexOf(se.inputSource);if(ye===-1)return;const Se=F[ye];Se!==void 0&&(Se.update(se.inputSource,se.frame,h||d),Se.dispatchEvent({type:se.type,data:se.inputSource}))}function B(){l.removeEventListener("select",J),l.removeEventListener("selectstart",J),l.removeEventListener("selectend",J),l.removeEventListener("squeeze",J),l.removeEventListener("squeezestart",J),l.removeEventListener("squeezeend",J),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",G);for(let se=0;se<F.length;se++){const ye=D[se];ye!==null&&(D[se]=null,F[se].disconnect(ye))}he=null,_e=null,S.reset();for(const se in _)delete _[se];e.setRenderTarget(I),b=null,g=null,v=null,l=null,C=null,Le.stop(),s.isPresenting=!1,e.setPixelRatio(E),e.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){c=se,s.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){p=se,s.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(se){h=se},this.getBaseLayer=function(){return g!==null?g:b},this.getBinding=function(){return v===null&&N&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(se){if(l=se,l!==null){if(I=e.getRenderTarget(),l.addEventListener("select",J),l.addEventListener("selectstart",J),l.addEventListener("selectend",J),l.addEventListener("squeeze",J),l.addEventListener("squeezestart",J),l.addEventListener("squeezeend",J),l.addEventListener("end",B),l.addEventListener("inputsourceschange",G),U.xrCompatible!==!0&&await i.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(O),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Be=null,tt=null;U.depth&&(tt=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Se=U.stencil?Fs:Ea,Be=U.stencil?jo:Yi);const je={colorFormat:i.RGBA8,depthFormat:tt,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(je),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),C=new qi(g.textureWidth,g.textureHeight,{format:Li,type:fi,depthTexture:new Br(g.textureWidth,g.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Se={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(l,i,Se),l.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),C=new qi(b.framebufferWidth,b.framebufferHeight,{format:Li,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),Le.setContext(l),Le.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function G(se){for(let ye=0;ye<se.removed.length;ye++){const Se=se.removed[ye],Be=D.indexOf(Se);Be>=0&&(D[Be]=null,F[Be].disconnect(Se))}for(let ye=0;ye<se.added.length;ye++){const Se=se.added[ye];let Be=D.indexOf(Se);if(Be===-1){for(let je=0;je<F.length;je++)if(je>=D.length){D.push(Se),Be=je;break}else if(D[je]===null){D[je]=Se,Be=je;break}if(Be===-1)break}const tt=F[Be];tt&&tt.connect(Se)}}const ee=new $,me=new $;function Ee(se,ye,Se){ee.setFromMatrixPosition(ye.matrixWorld),me.setFromMatrixPosition(Se.matrixWorld);const Be=ee.distanceTo(me),tt=ye.projectionMatrix.elements,je=Se.projectionMatrix.elements,Lt=tt[14]/(tt[10]-1),dt=tt[14]/(tt[10]+1),_t=(tt[9]+1)/tt[5],vt=(tt[9]-1)/tt[5],gt=(tt[8]-1)/tt[0],jt=(je[8]+1)/je[0],Zt=Lt*gt,Kt=Lt*jt,$t=Be/(-gt+jt),Pt=$t*-gt;if(ye.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Pt),se.translateZ($t),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),tt[10]===-1)se.projectionMatrix.copy(ye.projectionMatrix),se.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const lt=Lt+$t,X=dt+$t,et=Zt-Pt,at=Kt+(Be-Pt),L=_t*dt/X*lt,M=vt*dt/X*lt;se.projectionMatrix.makePerspective(et,at,L,M,lt,X),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function z(se,ye){ye===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(ye.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(l===null)return;let ye=se.near,Se=se.far;S.texture!==null&&(S.depthNear>0&&(ye=S.depthNear),S.depthFar>0&&(Se=S.depthFar)),Q.near=k.near=P.near=ye,Q.far=k.far=P.far=Se,(he!==Q.near||_e!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),he=Q.near,_e=Q.far),Q.layers.mask=se.layers.mask|6,P.layers.mask=Q.layers.mask&-5,k.layers.mask=Q.layers.mask&-3;const Be=se.parent,tt=Q.cameras;z(Q,Be);for(let je=0;je<tt.length;je++)z(tt[je],Be);tt.length===2?Ee(Q,P,k):Q.projectionMatrix.copy(P.projectionMatrix),j(se,Q,Be)};function j(se,ye,Se){Se===null?se.matrix.copy(ye.matrixWorld):(se.matrix.copy(Se.matrixWorld),se.matrix.invert(),se.matrix.multiply(ye.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(ye.projectionMatrix),se.projectionMatrixInverse.copy(ye.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Ph*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(g===null&&b===null))return m},this.setFoveation=function(se){m=se,g!==null&&(g.fixedFoveation=se),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=se)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Q)},this.getCameraTexture=function(se){return _[se]};let be=null;function Ae(se,ye){if(y=ye.getViewerPose(h||d),T=ye,y!==null){const Se=y.views;b!==null&&(e.setRenderTargetFramebuffer(C,b.framebuffer),e.setRenderTarget(C));let Be=!1;Se.length!==Q.cameras.length&&(Q.cameras.length=0,Be=!0);for(let dt=0;dt<Se.length;dt++){const _t=Se[dt];let vt=null;if(b!==null)vt=b.getViewport(_t);else{const jt=v.getViewSubImage(g,_t);vt=jt.viewport,dt===0&&(e.setRenderTargetTextures(C,jt.colorTexture,jt.depthStencilTexture),e.setRenderTarget(C))}let gt=V[dt];gt===void 0&&(gt=new ui,gt.layers.enable(dt),gt.viewport=new sn,V[dt]=gt),gt.matrix.fromArray(_t.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(_t.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(vt.x,vt.y,vt.width,vt.height),dt===0&&(Q.matrix.copy(gt.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Be===!0&&Q.cameras.push(gt)}const tt=l.enabledFeatures;if(tt&&tt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&N){v=s.getBinding();const dt=v.getDepthInformation(Se[0]);dt&&dt.isValid&&dt.texture&&S.init(dt,l.renderState)}if(tt&&tt.includes("camera-access")&&N){e.state.unbindTexture(),v=s.getBinding();for(let dt=0;dt<Se.length;dt++){const _t=Se[dt].camera;if(_t){let vt=_[_t];vt||(vt=new P_,_[_t]=vt);const gt=v.getCameraImage(_t);vt.sourceTexture=gt}}}}for(let Se=0;Se<F.length;Se++){const Be=D[Se],tt=F[Se];Be!==null&&tt!==void 0&&tt.update(Be,ye,h||d)}be&&be(se,ye),ye.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ye}),T=null}const Le=new B_;Le.setAnimationLoop(Ae),this.setAnimationLoop=function(se){be=se},this.dispose=function(){}}}const n2=new rn,q_=new ot;q_.set(-1,0,0,0,1,0,0,0,1);function i2(o,e){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function s(S,_){_.color.getRGB(S.fogColor.value,z_(o)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,U,I,C){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?c(S,_):_.isMeshLambertMaterial?(c(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(c(S,_),v(S,_)):_.isMeshPhongMaterial?(c(S,_),y(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(c(S,_),g(S,_),_.isMeshPhysicalMaterial&&b(S,_,C)):_.isMeshMatcapMaterial?(c(S,_),T(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),N(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(d(S,_),_.isLineDashedMaterial&&p(S,_)):_.isPointsMaterial?m(S,_,U,I):_.isSpriteMaterial?h(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Zn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Zn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const U=e.get(_),I=U.envMap,C=U.envMapRotation;I&&(S.envMap.value=I,S.envMapRotation.value.setFromMatrix4(n2.makeRotationFromEuler(C)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(q_),S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function d(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function p(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,U,I){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*U,S.scale.value=I*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function h(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function y(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function v(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function g(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function b(S,_,U){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Zn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=U.texture,S.transmissionSamplerSize.value.set(U.width,U.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,_){_.matcap&&(S.matcap.value=_.matcap)}function N(S,_){const U=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(U.matrixWorld),S.nearDistance.value=U.shadow.camera.near,S.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function a2(o,e,i,s){let l={},c={},d=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,F){const D=F.program;s.uniformBlockBinding(C,D)}function h(C,F){let D=l[C.id];D===void 0&&(S(C),D=y(C),l[C.id]=D,C.addEventListener("dispose",U));const O=F.program;s.updateUBOMapping(C,O);const E=e.render.frame;c[C.id]!==E&&(g(C),c[C.id]=E)}function y(C){const F=v();C.__bindingPointIndex=F;const D=o.createBuffer(),O=C.__size,E=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,O,E),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,F,D),D}function v(){for(let C=0;C<p;C++)if(d.indexOf(C)===-1)return d.push(C),C;return wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const F=l[C.id],D=C.uniforms,O=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,F);for(let E=0,P=D.length;E<P;E++){const k=D[E];if(Array.isArray(k))for(let V=0,Q=k.length;V<Q;V++)b(k[V],E,V,O);else b(k,E,0,O)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function b(C,F,D,O){if(N(C,F,D,O)===!0){const E=C.__offset,P=C.value;if(Array.isArray(P)){let k=0;for(let V=0;V<P.length;V++){const Q=P[V],he=_(Q);T(Q,C.__data,k),typeof Q!="number"&&typeof Q!="boolean"&&!Q.isMatrix3&&!ArrayBuffer.isView(Q)&&(k+=he.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(P,C.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,E,C.__data)}}function T(C,F,D){typeof C=="number"||typeof C=="boolean"?F[0]=C:C.isMatrix3?(F[0]=C.elements[0],F[1]=C.elements[1],F[2]=C.elements[2],F[3]=0,F[4]=C.elements[3],F[5]=C.elements[4],F[6]=C.elements[5],F[7]=0,F[8]=C.elements[6],F[9]=C.elements[7],F[10]=C.elements[8],F[11]=0):ArrayBuffer.isView(C)?F.set(new C.constructor(C.buffer,C.byteOffset,F.length)):C.toArray(F,D)}function N(C,F,D,O){const E=C.value,P=F+"_"+D;if(O[P]===void 0)return typeof E=="number"||typeof E=="boolean"?O[P]=E:ArrayBuffer.isView(E)?O[P]=E.slice():O[P]=E.clone(),!0;{const k=O[P];if(typeof E=="number"||typeof E=="boolean"){if(k!==E)return O[P]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(k.equals(E)===!1)return k.copy(E),!0}}return!1}function S(C){const F=C.uniforms;let D=0;const O=16;for(let P=0,k=F.length;P<k;P++){const V=Array.isArray(F[P])?F[P]:[F[P]];for(let Q=0,he=V.length;Q<he;Q++){const _e=V[Q],J=Array.isArray(_e.value)?_e.value:[_e.value];for(let B=0,G=J.length;B<G;B++){const ee=J[B],me=_(ee),Ee=D%O,z=Ee%me.boundary,j=Ee+z;D+=z,j!==0&&O-j<me.storage&&(D+=O-j),_e.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),_e.__offset=D,D+=me.storage}}}const E=D%O;return E>0&&(D+=O-E),C.__size=D,C.__cache={},this}function _(C){const F={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(F.boundary=4,F.storage=4):C.isVector2?(F.boundary=8,F.storage=8):C.isVector3||C.isColor?(F.boundary=16,F.storage=12):C.isVector4?(F.boundary=16,F.storage=16):C.isMatrix3?(F.boundary=48,F.storage=48):C.isMatrix4?(F.boundary=64,F.storage=64):C.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(F.boundary=16,F.storage=C.byteLength):it("WebGLRenderer: Unsupported uniform value type.",C),F}function U(C){const F=C.target;F.removeEventListener("dispose",U);const D=d.indexOf(F.__bindingPointIndex);d.splice(D,1),o.deleteBuffer(l[F.id]),delete l[F.id],delete c[F.id]}function I(){for(const C in l)o.deleteBuffer(l[C]);d=[],l={},c={}}return{bind:m,update:h,dispose:I}}const s2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gi=null;function r2(){return Gi===null&&(Gi=new WM(s2,16,16,Hs,ba),Gi.name="DFG_LUT",Gi.minFilter=In,Gi.magFilter=In,Gi.wrapS=ya,Gi.wrapT=ya,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}class o2{constructor(e={}){const{canvas:i=MM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:b=fi}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=d;const N=b,S=new Set([Yh,qh,Wh]),_=new Set([fi,Yi,Yo,jo,kh,Xh]),U=new Uint32Array(4),I=new Int32Array(4),C=new $;let F=null,D=null;const O=[],E=[];let P=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let V=!1,Q=null,he=null,_e=null,J=null;this._outputColorSpace=Mi;let B=0,G=0,ee=null,me=-1,Ee=null;const z=new sn,j=new sn;let be=null;const Ae=new mt(0);let Le=0,se=i.width,ye=i.height,Se=1,Be=null,tt=null;const je=new sn(0,0,se,ye),Lt=new sn(0,0,se,ye);let dt=!1;const _t=new Qh;let vt=!1,gt=!1;const jt=new rn,Zt=new $,Kt=new sn,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pt=!1;function lt(){return ee===null?Se:1}let X=s;function et(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:y,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Hh}`),i.addEventListener("webglcontextlost",en,!1),i.addEventListener("webglcontextrestored",zt,!1),i.addEventListener("webglcontextcreationerror",Qn,!1),X===null){const Y="webgl2";if(X=et(Y,R),X===null)throw et(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw wt("WebGLRenderer: "+R.message),R}let at,L,M,Z,re,fe,Te,Ce,ue,de,Re,ze,Oe,Ne,Ke,Qe,st,q,we,ge,De,Fe,Me;function qe(){at=new rT(X),at.init(),De=new QA(X,at),L=new JE(X,at,e,De),M=new ZA(X,at),L.reversedDepthBuffer&&g&&M.buffers.depth.setReversed(!0),he=X.createFramebuffer(),_e=X.createFramebuffer(),J=X.createFramebuffer(),Z=new cT(X),re=new PA,fe=new KA(X,at,M,re,L,De,Z),Te=new sT(k),Ce=new hb(X),Fe=new KE(X,Ce),ue=new oT(X,Ce,Z,Fe),de=new fT(X,ue,Ce,Fe,Z),q=new uT(X,L,fe),Ke=new $E(re),Re=new OA(k,Te,at,L,Fe,Ke),ze=new i2(k,re),Oe=new IA,Ne=new kA(at),st=new ZE(k,Te,M,de,T,m),Qe=new jA(k,de,L),Me=new a2(X,Z,L,M),we=new QE(X,at,Z),ge=new lT(X,at,Z),Z.programs=Re.programs,k.capabilities=L,k.extensions=at,k.properties=re,k.renderLists=Oe,k.shadowMap=Qe,k.state=M,k.info=Z}qe(),N!==fi&&(P=new hT(N,i.width,i.height,p,l,c));const Ve=new t2(k,X);this.xr=Ve,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const R=at.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=at.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(R){R!==void 0&&(Se=R,this.setSize(se,ye,!1))},this.getSize=function(R){return R.set(se,ye)},this.setSize=function(R,Y,oe=!0){if(Ve.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}se=R,ye=Y,i.width=Math.floor(R*Se),i.height=Math.floor(Y*Se),oe===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),P!==null&&P.setSize(i.width,i.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(se*Se,ye*Se).floor()},this.setDrawingBufferSize=function(R,Y,oe){se=R,ye=Y,Se=oe,i.width=Math.floor(R*oe),i.height=Math.floor(Y*oe),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(N===fi){wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){it("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(z)},this.getViewport=function(R){return R.copy(je)},this.setViewport=function(R,Y,oe,ie){R.isVector4?je.set(R.x,R.y,R.z,R.w):je.set(R,Y,oe,ie),M.viewport(z.copy(je).multiplyScalar(Se).round())},this.getScissor=function(R){return R.copy(Lt)},this.setScissor=function(R,Y,oe,ie){R.isVector4?Lt.set(R.x,R.y,R.z,R.w):Lt.set(R,Y,oe,ie),M.scissor(j.copy(Lt).multiplyScalar(Se).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(R){M.setScissorTest(dt=R)},this.setOpaqueSort=function(R){Be=R},this.setTransparentSort=function(R){tt=R},this.getClearColor=function(R){return R.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,oe=!0){let ie=0;if(R){let ae=!1;if(ee!==null){const Pe=ee.texture.format;ae=S.has(Pe)}if(ae){const Pe=ee.texture.type,Ge=_.has(Pe),Ue=st.getClearColor(),Xe=st.getClearAlpha(),ke=Ue.r,Je=Ue.g,ut=Ue.b;Ge?(U[0]=ke,U[1]=Je,U[2]=ut,U[3]=Xe,X.clearBufferuiv(X.COLOR,0,U)):(I[0]=ke,I[1]=Je,I[2]=ut,I[3]=Xe,X.clearBufferiv(X.COLOR,0,I))}else ie|=X.COLOR_BUFFER_BIT}Y&&(ie|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ie|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&X.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),Q=R},this.dispose=function(){i.removeEventListener("webglcontextlost",en,!1),i.removeEventListener("webglcontextrestored",zt,!1),i.removeEventListener("webglcontextcreationerror",Qn,!1),st.dispose(),Oe.dispose(),Ne.dispose(),re.dispose(),Te.dispose(),de.dispose(),Fe.dispose(),Me.dispose(),Re.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",fn),Ve.removeEventListener("sessionend",An),Gn.stop()};function en(R){R.preventDefault(),sx("WebGLRenderer: Context Lost."),V=!0}function zt(){sx("WebGLRenderer: Context Restored."),V=!1;const R=Z.autoReset,Y=Qe.enabled,oe=Qe.autoUpdate,ie=Qe.needsUpdate,ae=Qe.type;qe(),Z.autoReset=R,Qe.enabled=Y,Qe.autoUpdate=oe,Qe.needsUpdate=ie,Qe.type=ae}function Qn(R){wt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Jn(R){const Y=R.target;Y.removeEventListener("dispose",Jn),Xr(Y)}function Xr(R){Wr(R),re.remove(R)}function Wr(R){const Y=re.get(R).programs;Y!==void 0&&(Y.forEach(function(oe){Re.releaseProgram(oe)}),R.isShaderMaterial&&Re.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,oe,ie,ae,Pe){Y===null&&(Y=$t);const Ge=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,Ue=Ra(R,Y,oe,ie,ae);M.setMaterial(ie,Ge);let Xe=oe.index,ke=1;if(ie.wireframe===!0){if(Xe=ue.getWireframeAttribute(oe),Xe===void 0)return;ke=2}const Je=oe.drawRange,ut=oe.attributes.position;let Ze=Je.start*ke,Ct=(Je.start+Je.count)*ke;Pe!==null&&(Ze=Math.max(Ze,Pe.start*ke),Ct=Math.min(Ct,(Pe.start+Pe.count)*ke)),Xe!==null?(Ze=Math.max(Ze,0),Ct=Math.min(Ct,Xe.count)):ut!=null&&(Ze=Math.max(Ze,0),Ct=Math.min(Ct,ut.count));const tn=Ct-Ze;if(tn<0||tn===1/0)return;Fe.setup(ae,ie,Ue,oe,Xe);let qt,It=we;if(Xe!==null&&(qt=Ce.get(Xe),It=ge,It.setIndex(qt)),ae.isMesh)ie.wireframe===!0?(M.setLineWidth(ie.wireframeLinewidth*lt()),It.setMode(X.LINES)):It.setMode(X.TRIANGLES);else if(ae.isLine){let Ft=ie.linewidth;Ft===void 0&&(Ft=1),M.setLineWidth(Ft*lt()),ae.isLineSegments?It.setMode(X.LINES):ae.isLineLoop?It.setMode(X.LINE_LOOP):It.setMode(X.LINE_STRIP)}else ae.isPoints?It.setMode(X.POINTS):ae.isSprite&&It.setMode(X.TRIANGLES);if(ae.isBatchedMesh)if(at.get("WEBGL_multi_draw"))It.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const Ft=ae._multiDrawStarts,He=ae._multiDrawCounts,Ln=ae._multiDrawCount,yt=Xe?Ce.get(Xe).bytesPerElement:1,vn=re.get(ie).currentProgram.getUniforms();for(let $n=0;$n<Ln;$n++)vn.setValue(X,"_gl_DrawID",$n),It.render(Ft[$n]/yt,He[$n])}else if(ae.isInstancedMesh)It.renderInstances(Ze,tn,ae.count);else if(oe.isInstancedBufferGeometry){const Ft=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,He=Math.min(oe.instanceCount,Ft);It.renderInstances(Ze,tn,He)}else It.render(Ze,tn)};function qr(R,Y,oe){R.transparent===!0&&R.side===va&&R.forceSinglePass===!1?(R.side=Zn,R.needsUpdate=!0,Aa(R,Y,oe),R.side=rs,R.needsUpdate=!0,Aa(R,Y,oe),R.side=va):Aa(R,Y,oe)}this.compile=function(R,Y,oe=null){oe===null&&(oe=R),D=Ne.get(oe),D.init(Y),E.push(D),oe.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Y.layers)&&(D.pushLight(ae),ae.castShadow&&D.pushShadow(ae))}),R!==oe&&R.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Y.layers)&&(D.pushLight(ae),ae.castShadow&&D.pushShadow(ae))}),D.setupLights();const ie=new Set;return R.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const Pe=ae.material;if(Pe)if(Array.isArray(Pe))for(let Ge=0;Ge<Pe.length;Ge++){const Ue=Pe[Ge];qr(Ue,oe,ae),ie.add(Ue)}else qr(Pe,oe,ae),ie.add(Pe)}),D=E.pop(),ie},this.compileAsync=function(R,Y,oe=null){const ie=this.compile(R,Y,oe);return new Promise(ae=>{function Pe(){if(ie.forEach(function(Ge){re.get(Ge).currentProgram.isReady()&&ie.delete(Ge)}),ie.size===0){ae(R);return}setTimeout(Pe,10)}at.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Vs=null;function Oi(R){Vs&&Vs(R)}function fn(){Gn.stop()}function An(){Gn.start()}const Gn=new B_;Gn.setAnimationLoop(Oi),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(R){Vs=R,Ve.setAnimationLoop(R),R===null?Gn.stop():Gn.start()},Ve.addEventListener("sessionstart",fn),Ve.addEventListener("sessionend",An),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;Q!==null&&Q.renderStart(R,Y);const oe=Ve.enabled===!0&&Ve.isPresenting===!0,ie=P!==null&&(ee===null||oe)&&P.begin(k,ee);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(Y),Y=Ve.getCamera()),R.isScene===!0&&R.onBeforeRender(k,R,Y,ee),D=Ne.get(R,E.length),D.init(Y),D.state.textureUnits=fe.getTextureUnits(),E.push(D),jt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),_t.setFromProjectionMatrix(jt,Xi,Y.reversedDepth),gt=this.localClippingEnabled,vt=Ke.init(this.clippingPlanes,gt),F=Oe.get(R,O.length),F.init(),O.push(F),Ve.enabled===!0&&Ve.isPresenting===!0){const Ge=k.xr.getDepthSensingMesh();Ge!==null&&ls(Ge,Y,-1/0,k.sortObjects)}ls(R,Y,0,k.sortObjects),F.finish(),k.sortObjects===!0&&F.sort(Be,tt,Y.reversedDepth),Pt=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,Pt&&st.addToRenderList(F,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),vt===!0&&Ke.beginShadows();const ae=D.state.shadowsArray;if(Qe.render(ae,R,Y),vt===!0&&Ke.endShadows(),(ie&&P.hasRenderPass())===!1){const Ge=F.opaque,Ue=F.transmissive;if(D.setupLights(),Y.isArrayCamera){const Xe=Y.cameras;if(Ue.length>0)for(let ke=0,Je=Xe.length;ke<Je;ke++){const ut=Xe[ke];el(Ge,Ue,R,ut)}Pt&&st.render(R);for(let ke=0,Je=Xe.length;ke<Je;ke++){const ut=Xe[ke];$o(F,R,ut,ut.viewport)}}else Ue.length>0&&el(Ge,Ue,R,Y),Pt&&st.render(R),$o(F,R,Y)}ee!==null&&G===0&&(fe.updateMultisampleRenderTarget(ee),fe.updateRenderTargetMipmap(ee)),ie&&P.end(k),R.isScene===!0&&R.onAfterRender(k,R,Y),Fe.resetDefaultState(),me=-1,Ee=null,E.pop(),E.length>0?(D=E[E.length-1],fe.setTextureUnits(D.state.textureUnits),vt===!0&&Ke.setGlobalState(k.clippingPlanes,D.state.camera)):D=null,O.pop(),O.length>0?F=O[O.length-1]:F=null,Q!==null&&Q.renderEnd()};function ls(R,Y,oe,ie){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)oe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLightProbeGrid)D.pushLightProbeGrid(R);else if(R.isLight)D.pushLight(R),R.castShadow&&D.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||_t.intersectsSprite(R)){ie&&Kt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(jt);const Ge=de.update(R),Ue=R.material;Ue.visible&&F.push(R,Ge,Ue,oe,Kt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||_t.intersectsObject(R))){const Ge=de.update(R),Ue=R.material;if(ie&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Kt.copy(R.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),Kt.copy(Ge.boundingSphere.center)),Kt.applyMatrix4(R.matrixWorld).applyMatrix4(jt)),Array.isArray(Ue)){const Xe=Ge.groups;for(let ke=0,Je=Xe.length;ke<Je;ke++){const ut=Xe[ke],Ze=Ue[ut.materialIndex];Ze&&Ze.visible&&F.push(R,Ge,Ze,oe,Kt.z,ut)}}else Ue.visible&&F.push(R,Ge,Ue,oe,Kt.z,null)}}const Pe=R.children;for(let Ge=0,Ue=Pe.length;Ge<Ue;Ge++)ls(Pe[Ge],Y,oe,ie)}function $o(R,Y,oe,ie){const{opaque:ae,transmissive:Pe,transparent:Ge}=R;D.setupLightsView(oe),vt===!0&&Ke.setGlobalState(k.clippingPlanes,oe),ie&&M.viewport(z.copy(ie)),ae.length>0&&cs(ae,Y,oe),Pe.length>0&&cs(Pe,Y,oe),Ge.length>0&&cs(Ge,Y,oe),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function el(R,Y,oe,ie){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[ie.id]===void 0){const Ze=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[ie.id]=new qi(1,1,{generateMipmaps:!0,type:Ze?ba:fi,minFilter:Is,samples:Math.max(4,L.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Pe=D.state.transmissionRenderTarget[ie.id],Ge=ie.viewport||z;Pe.setSize(Ge.z*k.transmissionResolutionScale,Ge.w*k.transmissionResolutionScale);const Ue=k.getRenderTarget(),Xe=k.getActiveCubeFace(),ke=k.getActiveMipmapLevel();k.setRenderTarget(Pe),k.getClearColor(Ae),Le=k.getClearAlpha(),Le<1&&k.setClearColor(16777215,.5),k.clear(),Pt&&st.render(oe);const Je=k.toneMapping;k.toneMapping=Wi;const ut=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),D.setupLightsView(ie),vt===!0&&Ke.setGlobalState(k.clippingPlanes,ie),cs(R,oe,ie),fe.updateMultisampleRenderTarget(Pe),fe.updateRenderTargetMipmap(Pe),at.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Ct=0,tn=Y.length;Ct<tn;Ct++){const qt=Y[Ct],{object:It,geometry:Ft,material:He,group:Ln}=qt;if(He.side===va&&It.layers.test(ie.layers)){const yt=He.side;He.side=Zn,He.needsUpdate=!0,Ta(It,oe,ie,Ft,He,Ln),He.side=yt,He.needsUpdate=!0,Ze=!0}}Ze===!0&&(fe.updateMultisampleRenderTarget(Pe),fe.updateRenderTargetMipmap(Pe))}k.setRenderTarget(Ue,Xe,ke),k.setClearColor(Ae,Le),ut!==void 0&&(ie.viewport=ut),k.toneMapping=Je}function cs(R,Y,oe){const ie=Y.isScene===!0?Y.overrideMaterial:null;for(let ae=0,Pe=R.length;ae<Pe;ae++){const Ge=R[ae],{object:Ue,geometry:Xe,group:ke}=Ge;let Je=Ge.material;Je.allowOverride===!0&&ie!==null&&(Je=ie),Ue.layers.test(oe.layers)&&Ta(Ue,Y,oe,Xe,Je,ke)}}function Ta(R,Y,oe,ie,ae,Pe){R.onBeforeRender(k,Y,oe,ie,ae,Pe),R.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ae.onBeforeRender(k,Y,oe,ie,R,Pe),ae.transparent===!0&&ae.side===va&&ae.forceSinglePass===!1?(ae.side=Zn,ae.needsUpdate=!0,k.renderBufferDirect(oe,Y,ie,ae,R,Pe),ae.side=rs,ae.needsUpdate=!0,k.renderBufferDirect(oe,Y,ie,ae,R,Pe),ae.side=va):k.renderBufferDirect(oe,Y,ie,ae,R,Pe),R.onAfterRender(k,Y,oe,ie,ae,Pe)}function Aa(R,Y,oe){Y.isScene!==!0&&(Y=$t);const ie=re.get(R),ae=D.state.lights,Pe=D.state.shadowsArray,Ge=ae.state.version,Ue=Re.getParameters(R,ae.state,Pe,Y,oe,D.state.lightProbeGridArray),Xe=Re.getProgramCacheKey(Ue);let ke=ie.programs;ie.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Y.environment:null,ie.fog=Y.fog;const Je=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ie.envMap=Te.get(R.envMap||ie.environment,Je),ie.envMapRotation=ie.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,ke===void 0&&(R.addEventListener("dispose",Jn),ke=new Map,ie.programs=ke);let ut=ke.get(Xe);if(ut!==void 0){if(ie.currentProgram===ut&&ie.lightsStateVersion===Ge)return Ki(R,Ue),ut}else Ue.uniforms=Re.getUniforms(R),Q!==null&&R.isNodeMaterial&&Q.build(R,oe,Ue),R.onBeforeCompile(Ue,k),ut=Re.acquireProgram(Ue,Xe),ke.set(Xe,ut),ie.uniforms=Ue.uniforms;const Ze=ie.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ze.clippingPlanes=Ke.uniform),Ki(R,Ue),ie.needsLights=tl(R),ie.lightsStateVersion=Ge,ie.needsLights&&(Ze.ambientLightColor.value=ae.state.ambient,Ze.lightProbe.value=ae.state.probe,Ze.directionalLights.value=ae.state.directional,Ze.directionalLightShadows.value=ae.state.directionalShadow,Ze.spotLights.value=ae.state.spot,Ze.spotLightShadows.value=ae.state.spotShadow,Ze.rectAreaLights.value=ae.state.rectArea,Ze.ltc_1.value=ae.state.rectAreaLTC1,Ze.ltc_2.value=ae.state.rectAreaLTC2,Ze.pointLights.value=ae.state.point,Ze.pointLightShadows.value=ae.state.pointShadow,Ze.hemisphereLights.value=ae.state.hemi,Ze.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Ze.spotLightMatrix.value=ae.state.spotLightMatrix,Ze.spotLightMap.value=ae.state.spotLightMap,Ze.pointShadowMatrix.value=ae.state.pointShadowMatrix),ie.lightProbeGrid=D.state.lightProbeGridArray.length>0,ie.currentProgram=ut,ie.uniformsList=null,ut}function Zi(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Hc.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Ki(R,Y){const oe=re.get(R);oe.outputColorSpace=Y.outputColorSpace,oe.batching=Y.batching,oe.batchingColor=Y.batchingColor,oe.instancing=Y.instancing,oe.instancingColor=Y.instancingColor,oe.instancingMorph=Y.instancingMorph,oe.skinning=Y.skinning,oe.morphTargets=Y.morphTargets,oe.morphNormals=Y.morphNormals,oe.morphColors=Y.morphColors,oe.morphTargetsCount=Y.morphTargetsCount,oe.numClippingPlanes=Y.numClippingPlanes,oe.numIntersection=Y.numClipIntersection,oe.vertexAlphas=Y.vertexAlphas,oe.vertexTangents=Y.vertexTangents,oe.toneMapping=Y.toneMapping}function us(R,Y){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;C.setFromMatrixPosition(Y.matrixWorld);for(let oe=0,ie=R.length;oe<ie;oe++){const ae=R[oe];if(ae.texture!==null&&ae.boundingBox.containsPoint(C))return ae}return null}function Ra(R,Y,oe,ie,ae){Y.isScene!==!0&&(Y=$t),fe.resetTextureUnits();const Pe=Y.fog,Ge=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?Y.environment:null,Ue=ee===null?k.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Rt.workingColorSpace,Xe=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,ke=Te.get(ie.envMap||Ge,Xe),Je=ie.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ut=!!oe.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ze=!!oe.morphAttributes.position,Ct=!!oe.morphAttributes.normal,tn=!!oe.morphAttributes.color;let qt=Wi;ie.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(qt=k.toneMapping);const It=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Ft=It!==void 0?It.length:0,He=re.get(ie),Ln=D.state.lights;if(vt===!0&&(gt===!0||R!==Ee)){const Ot=R===Ee&&ie.id===me;Ke.setState(ie,R,Ot)}let yt=!1;ie.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Ln.state.version||He.outputColorSpace!==Ue||ae.isBatchedMesh&&He.batching===!1||!ae.isBatchedMesh&&He.batching===!0||ae.isBatchedMesh&&He.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&He.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&He.instancing===!1||!ae.isInstancedMesh&&He.instancing===!0||ae.isSkinnedMesh&&He.skinning===!1||!ae.isSkinnedMesh&&He.skinning===!0||ae.isInstancedMesh&&He.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&He.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&He.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&He.instancingMorph===!1&&ae.morphTexture!==null||He.envMap!==ke||ie.fog===!0&&He.fog!==Pe||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Ke.numPlanes||He.numIntersection!==Ke.numIntersection)||He.vertexAlphas!==Je||He.vertexTangents!==ut||He.morphTargets!==Ze||He.morphNormals!==Ct||He.morphColors!==tn||He.toneMapping!==qt||He.morphTargetsCount!==Ft||!!He.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(yt=!0):(yt=!0,He.__version=ie.version);let vn=He.currentProgram;yt===!0&&(vn=Aa(ie,Y,ae),Q&&ie.isNodeMaterial&&Q.onUpdateProgram(ie,vn,He));let $n=!1,Ei=!1,ei=!1;const Bt=vn.getUniforms(),nn=He.uniforms;if(M.useProgram(vn.program)&&($n=!0,Ei=!0,ei=!0),ie.id!==me&&(me=ie.id,Ei=!0),He.needsLights){const Ot=us(D.state.lightProbeGridArray,ae);He.lightProbeGrid!==Ot&&(He.lightProbeGrid=Ot,Ei=!0)}if($n||Ee!==R){M.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Bt.setValue(X,"projectionMatrix",R.projectionMatrix),Bt.setValue(X,"viewMatrix",R.matrixWorldInverse);const Pi=Bt.map.cameraPosition;Pi!==void 0&&Pi.setValue(X,Zt.setFromMatrixPosition(R.matrixWorld)),L.logarithmicDepthBuffer&&Bt.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Bt.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),Ee!==R&&(Ee=R,Ei=!0,ei=!0)}if(He.needsLights&&(Ln.state.directionalShadowMap.length>0&&Bt.setValue(X,"directionalShadowMap",Ln.state.directionalShadowMap,fe),Ln.state.spotShadowMap.length>0&&Bt.setValue(X,"spotShadowMap",Ln.state.spotShadowMap,fe),Ln.state.pointShadowMap.length>0&&Bt.setValue(X,"pointShadowMap",Ln.state.pointShadowMap,fe)),ae.isSkinnedMesh){Bt.setOptional(X,ae,"bindMatrix"),Bt.setOptional(X,ae,"bindMatrixInverse");const Ot=ae.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),Bt.setValue(X,"boneTexture",Ot.boneTexture,fe))}ae.isBatchedMesh&&(Bt.setOptional(X,ae,"batchingTexture"),Bt.setValue(X,"batchingTexture",ae._matricesTexture,fe),Bt.setOptional(X,ae,"batchingIdTexture"),Bt.setValue(X,"batchingIdTexture",ae._indirectTexture,fe),Bt.setOptional(X,ae,"batchingColorTexture"),ae._colorsTexture!==null&&Bt.setValue(X,"batchingColorTexture",ae._colorsTexture,fe));const Ti=oe.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&q.update(ae,oe,vn),(Ei||He.receiveShadow!==ae.receiveShadow)&&(He.receiveShadow=ae.receiveShadow,Bt.setValue(X,"receiveShadow",ae.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&Y.environment!==null&&(nn.envMapIntensity.value=Y.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=r2()),Ei){if(Bt.setValue(X,"toneMappingExposure",k.toneMappingExposure),He.needsLights&&dn(nn,ei),Pe&&ie.fog===!0&&ze.refreshFogUniforms(nn,Pe),ze.refreshMaterialUniforms(nn,ie,Se,ye,D.state.transmissionRenderTarget[R.id]),He.needsLights&&He.lightProbeGrid){const Ot=He.lightProbeGrid;nn.probesSH.value=Ot.texture,nn.probesMin.value.copy(Ot.boundingBox.min),nn.probesMax.value.copy(Ot.boundingBox.max),nn.probesResolution.value.copy(Ot.resolution)}Hc.upload(X,Zi(He),nn,fe)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Hc.upload(X,Zi(He),nn,fe),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Bt.setValue(X,"center",ae.center),Bt.setValue(X,"modelViewMatrix",ae.modelViewMatrix),Bt.setValue(X,"normalMatrix",ae.normalMatrix),Bt.setValue(X,"modelMatrix",ae.matrixWorld),ie.uniformsGroups!==void 0){const Ot=ie.uniformsGroups;for(let Pi=0,wa=Ot.length;Pi<wa;Pi++){const fs=Ot[Pi];Me.update(fs,vn),Me.bind(fs,vn)}}return vn}function dn(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function tl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(R,Y,oe){const ie=re.get(R);ie.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),re.get(R.texture).__webglTexture=Y,re.get(R.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:oe,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const oe=re.get(R);oe.__webglFramebuffer=Y,oe.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(R,Y=0,oe=0){ee=R,B=Y,G=oe;let ie=null,ae=!1,Pe=!1;if(R){const Ue=re.get(R);if(Ue.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(X.FRAMEBUFFER,Ue.__webglFramebuffer),z.copy(R.viewport),j.copy(R.scissor),be=R.scissorTest,M.viewport(z),M.scissor(j),M.setScissorTest(be),me=-1;return}else if(Ue.__webglFramebuffer===void 0)fe.setupRenderTarget(R);else if(Ue.__hasExternalTextures)fe.rebindTextures(R,re.get(R.texture).__webglTexture,re.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Je=R.depthTexture;if(Ue.__boundDepthTexture!==Je){if(Je!==null&&re.has(Je)&&(R.width!==Je.image.width||R.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(R)}}const Xe=R.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Pe=!0);const ke=re.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ke[Y])?ie=ke[Y][oe]:ie=ke[Y],ae=!0):R.samples>0&&fe.useMultisampledRTT(R)===!1?ie=re.get(R).__webglMultisampledFramebuffer:Array.isArray(ke)?ie=ke[oe]:ie=ke,z.copy(R.viewport),j.copy(R.scissor),be=R.scissorTest}else z.copy(je).multiplyScalar(Se).floor(),j.copy(Lt).multiplyScalar(Se).floor(),be=dt;if(oe!==0&&(ie=he),M.bindFramebuffer(X.FRAMEBUFFER,ie)&&M.drawBuffers(R,ie),M.viewport(z),M.scissor(j),M.setScissorTest(be),ae){const Ue=re.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ue.__webglTexture,oe)}else if(Pe){const Ue=Y;for(let Xe=0;Xe<R.textures.length;Xe++){const ke=re.get(R.textures[Xe]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Xe,ke.__webglTexture,oe,Ue)}}else if(R!==null&&oe!==0){const Ue=re.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ue.__webglTexture,oe)}me=-1},this.readRenderTargetPixels=function(R,Y,oe,ie,ae,Pe,Ge,Ue=0){if(!(R&&R.isWebGLRenderTarget)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=re.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ge!==void 0&&(Xe=Xe[Ge]),Xe){M.bindFramebuffer(X.FRAMEBUFFER,Xe);try{const ke=R.textures[Ue],Je=ke.format,ut=ke.type;if(R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ue),!L.textureFormatReadable(Je)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!L.textureTypeReadable(ut)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-ie&&oe>=0&&oe<=R.height-ae&&X.readPixels(Y,oe,ie,ae,De.convert(Je),De.convert(ut),Pe)}finally{const ke=ee!==null?re.get(ee).__webglFramebuffer:null;M.bindFramebuffer(X.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(R,Y,oe,ie,ae,Pe,Ge,Ue=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=re.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ge!==void 0&&(Xe=Xe[Ge]),Xe)if(Y>=0&&Y<=R.width-ie&&oe>=0&&oe<=R.height-ae){M.bindFramebuffer(X.FRAMEBUFFER,Xe);const ke=R.textures[Ue],Je=ke.format,ut=ke.type;if(R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ue),!L.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!L.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Ze),X.bufferData(X.PIXEL_PACK_BUFFER,Pe.byteLength,X.STREAM_READ),X.readPixels(Y,oe,ie,ae,De.convert(Je),De.convert(ut),0);const Ct=ee!==null?re.get(ee).__webglFramebuffer:null;M.bindFramebuffer(X.FRAMEBUFFER,Ct);const tn=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await bM(X,tn,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Ze),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Pe),X.deleteBuffer(Ze),X.deleteSync(tn),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,oe=0){const ie=Math.pow(2,-oe),ae=Math.floor(R.image.width*ie),Pe=Math.floor(R.image.height*ie),Ge=Y!==null?Y.x:0,Ue=Y!==null?Y.y:0;fe.setTexture2D(R,0),X.copyTexSubImage2D(X.TEXTURE_2D,oe,0,0,Ge,Ue,ae,Pe),M.unbindTexture()},this.copyTextureToTexture=function(R,Y,oe=null,ie=null,ae=0,Pe=0){let Ge,Ue,Xe,ke,Je,ut,Ze,Ct,tn;const qt=R.isCompressedTexture?R.mipmaps[Pe]:R.image;if(oe!==null)Ge=oe.max.x-oe.min.x,Ue=oe.max.y-oe.min.y,Xe=oe.isBox3?oe.max.z-oe.min.z:1,ke=oe.min.x,Je=oe.min.y,ut=oe.isBox3?oe.min.z:0;else{const nn=Math.pow(2,-ae);Ge=Math.floor(qt.width*nn),Ue=Math.floor(qt.height*nn),R.isDataArrayTexture?Xe=qt.depth:R.isData3DTexture?Xe=Math.floor(qt.depth*nn):Xe=1,ke=0,Je=0,ut=0}ie!==null?(Ze=ie.x,Ct=ie.y,tn=ie.z):(Ze=0,Ct=0,tn=0);const It=De.convert(Y.format),Ft=De.convert(Y.type);let He;Y.isData3DTexture?(fe.setTexture3D(Y,0),He=X.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(fe.setTexture2DArray(Y,0),He=X.TEXTURE_2D_ARRAY):(fe.setTexture2D(Y,0),He=X.TEXTURE_2D),M.activeTexture(X.TEXTURE0),M.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Y.flipY),M.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),M.pixelStorei(X.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ln=M.getParameter(X.UNPACK_ROW_LENGTH),yt=M.getParameter(X.UNPACK_IMAGE_HEIGHT),vn=M.getParameter(X.UNPACK_SKIP_PIXELS),$n=M.getParameter(X.UNPACK_SKIP_ROWS),Ei=M.getParameter(X.UNPACK_SKIP_IMAGES);M.pixelStorei(X.UNPACK_ROW_LENGTH,qt.width),M.pixelStorei(X.UNPACK_IMAGE_HEIGHT,qt.height),M.pixelStorei(X.UNPACK_SKIP_PIXELS,ke),M.pixelStorei(X.UNPACK_SKIP_ROWS,Je),M.pixelStorei(X.UNPACK_SKIP_IMAGES,ut);const ei=R.isDataArrayTexture||R.isData3DTexture,Bt=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const nn=re.get(R),Ti=re.get(Y),Ot=re.get(nn.__renderTarget),Pi=re.get(Ti.__renderTarget);M.bindFramebuffer(X.READ_FRAMEBUFFER,Ot.__webglFramebuffer),M.bindFramebuffer(X.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let wa=0;wa<Xe;wa++)ei&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,re.get(R).__webglTexture,ae,ut+wa),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,re.get(Y).__webglTexture,Pe,tn+wa)),X.blitFramebuffer(ke,Je,Ge,Ue,Ze,Ct,Ge,Ue,X.DEPTH_BUFFER_BIT,X.NEAREST);M.bindFramebuffer(X.READ_FRAMEBUFFER,null),M.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(ae!==0||R.isRenderTargetTexture||re.has(R)){const nn=re.get(R),Ti=re.get(Y);M.bindFramebuffer(X.READ_FRAMEBUFFER,_e),M.bindFramebuffer(X.DRAW_FRAMEBUFFER,J);for(let Ot=0;Ot<Xe;Ot++)ei?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,nn.__webglTexture,ae,ut+Ot):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,nn.__webglTexture,ae),Bt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ti.__webglTexture,Pe,tn+Ot):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ti.__webglTexture,Pe),ae!==0?X.blitFramebuffer(ke,Je,Ge,Ue,Ze,Ct,Ge,Ue,X.COLOR_BUFFER_BIT,X.NEAREST):Bt?X.copyTexSubImage3D(He,Pe,Ze,Ct,tn+Ot,ke,Je,Ge,Ue):X.copyTexSubImage2D(He,Pe,Ze,Ct,ke,Je,Ge,Ue);M.bindFramebuffer(X.READ_FRAMEBUFFER,null),M.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Bt?R.isDataTexture||R.isData3DTexture?X.texSubImage3D(He,Pe,Ze,Ct,tn,Ge,Ue,Xe,It,Ft,qt.data):Y.isCompressedArrayTexture?X.compressedTexSubImage3D(He,Pe,Ze,Ct,tn,Ge,Ue,Xe,It,qt.data):X.texSubImage3D(He,Pe,Ze,Ct,tn,Ge,Ue,Xe,It,Ft,qt):R.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Pe,Ze,Ct,Ge,Ue,It,Ft,qt.data):R.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Pe,Ze,Ct,qt.width,qt.height,It,qt.data):X.texSubImage2D(X.TEXTURE_2D,Pe,Ze,Ct,Ge,Ue,It,Ft,qt);M.pixelStorei(X.UNPACK_ROW_LENGTH,Ln),M.pixelStorei(X.UNPACK_IMAGE_HEIGHT,yt),M.pixelStorei(X.UNPACK_SKIP_PIXELS,vn),M.pixelStorei(X.UNPACK_SKIP_ROWS,$n),M.pixelStorei(X.UNPACK_SKIP_IMAGES,Ei),Pe===0&&Y.generateMipmaps&&X.generateMipmap(He),M.unbindTexture()},this.initRenderTarget=function(R){re.get(R).__webglFramebuffer===void 0&&fe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?fe.setTextureCube(R,0):R.isData3DTexture?fe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?fe.setTexture2DArray(R,0):fe.setTexture2D(R,0),M.unbindTexture()},this.resetState=function(){B=0,G=0,ee=null,M.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Rt._getUnpackColorSpace()}}const l2=({scrollProgress:o=0,materialConfig:e,interactive:i=!0,activeSection:s="hero",onFpsUpdate:l})=>{const c=ct.useRef(null),d=ct.useRef(null),p=ct.useRef(null),m=ct.useRef(null),h=ct.useRef(null),y=ct.useRef(null),v=ct.useRef(null),g=ct.useRef(null),b=ct.useRef(null),T=ct.useRef(null),N=ct.useRef(null),S=ct.useRef(null),_=ct.useRef({x:0,y:0,targetX:0,targetY:0,isDown:!1,lastX:0,lastY:0}),U=ct.useRef(null),I=ct.useRef(new fb),C=ct.useRef({frames:0,prevTime:performance.now()}),F=ct.useRef(null);return ct.useEffect(()=>{const D=c.current;if(!D)return;const O=new BM;p.current=O;const E=D.clientWidth||window.innerWidth,P=D.clientHeight||window.innerHeight,k=new ui(45,E/P,.1,100);k.position.set(0,0,7.5),m.current=k;const V=new o2({antialias:!0,alpha:!0,powerPreference:"high-performance"});for(V.setSize(E,P),V.setPixelRatio(Math.min(window.devicePixelRatio,2)),V.toneMapping=Gh,V.toneMappingExposure=1.2,d.current=V;D.firstChild;)D.removeChild(D.firstChild);D.appendChild(V.domElement);const Q=new lb(659229,2.5);O.add(Q);const he=new Rx(6220500,3.5);he.position.set(5,5,4),O.add(he),N.current=he;const _e=new Rx(8490232,2.8);_e.position.set(-5,-3,-2),O.add(_e);const J=new rb(16096779,4,15);J.position.set(0,0,2),O.add(J),S.current=J;const B=new Wo;O.add(B),h.current=B;const G=new $h(2.1,1),ee=new nb({color:16777215,roughness:(e==null?void 0:e.roughness)??.12,metalness:(e==null?void 0:e.metalness)??.1,transmission:(e==null?void 0:e.transmission)??.92,ior:(e==null?void 0:e.ior)??1.52,thickness:(e==null?void 0:e.thickness)??1.4,transparent:!0,opacity:.85,wireframe:(e==null?void 0:e.wireframe)??!1,clearcoat:1,clearcoatRoughness:.1}),me=new di(G,ee);B.add(me),y.current=me;const Ee=new ep(1.25,48,48);F.current=new Float32Array(Ee.attributes.position.array);const z=new Bc({color:1976635,metalness:.95,roughness:.15,wireframe:!1}),j=new di(Ee,z);B.add(j),v.current=j;const be=new qc(2.6,.025,16,100),Ae=new Bc({color:6220500,emissive:1357990,emissiveIntensity:.6,metalness:.8,roughness:.2}),Le=new di(be,Ae);Le.rotation.x=Math.PI/3,B.add(Le),g.current=Le;const se=new qc(2.9,.02,16,100),ye=new Bc({color:8490232,emissive:6514417,emissiveIntensity:.5,metalness:.8,roughness:.2}),Se=new di(se,ye);Se.rotation.y=Math.PI/4,B.add(Se),b.current=Se;const Be=1800,tt=new Kn,je=new Float32Array(Be*3),Lt=new Float32Array(Be*3),dt=new mt(6220500),_t=new mt(8490232),vt=new mt(16096779);for(let lt=0;lt<Be;lt++){const X=3.2+Math.random()*5,et=Math.random()*Math.PI*2,at=Math.acos(Math.random()*2-1);je[lt*3]=X*Math.sin(at)*Math.cos(et),je[lt*3+1]=X*Math.sin(at)*Math.sin(et),je[lt*3+2]=X*Math.cos(at);const L=lt%3===0?dt:lt%3===1?_t:vt;Lt[lt*3]=L.r,Lt[lt*3+1]=L.g,Lt[lt*3+2]=L.b}tt.setAttribute("position",new bi(je,3)),tt.setAttribute("color",new bi(Lt,3));const gt=new L_({size:.035,vertexColors:!0,transparent:!0,opacity:.65,blending:qd}),jt=new ZM(tt,gt);O.add(jt),T.current=jt;const Zt=lt=>{const X=D.getBoundingClientRect(),et=(lt.clientX-X.left)/X.width*2-1,at=-((lt.clientY-X.top)/X.height*2-1);_.current.targetX=et*.8,_.current.targetY=at*.8},Kt=lt=>{if(lt.touches.length>0){const X=lt.touches[0],et=D.getBoundingClientRect(),at=(X.clientX-et.left)/et.width*2-1,L=-((X.clientY-et.top)/et.height*2-1);_.current.targetX=at*.6,_.current.targetY=L*.6}};window.addEventListener("mousemove",Zt,{passive:!0}),window.addEventListener("touchmove",Kt,{passive:!0});const $t=new ResizeObserver(lt=>{for(const X of lt){const{width:et,height:at}=X.contentRect;if(et===0||at===0)return;k.aspect=et/at,k.updateProjectionMatrix(),V.setSize(et,at)}});$t.observe(D);const Pt=()=>{U.current=requestAnimationFrame(Pt);const lt=I.current.getElapsedTime(),X=(e==null?void 0:e.speed)??1,et=lt*X;if(_.current.x+=(_.current.targetX-_.current.x)*.05,_.current.y+=(_.current.targetY-_.current.y)*.05,h.current&&(h.current.rotation.y=et*.2+_.current.x*.7,h.current.rotation.x=Math.sin(et*.15)*.15-_.current.y*.5,h.current.position.x=_.current.x*.4,h.current.position.y=_.current.y*.3),g.current&&(g.current.rotation.z=et*.4,g.current.rotation.x=Math.PI/3+Math.sin(et*.3)*.2),b.current&&(b.current.rotation.y=et*-.3,b.current.rotation.z=Math.PI/4+Math.cos(et*.25)*.2),v.current&&F.current){const L=v.current.geometry,M=L.attributes.position,Z=F.current,re=(e==null?void 0:e.distortion)??.28,fe=(e==null?void 0:e.audioReactivity)??1;for(let Te=0;Te<M.count;Te++){const Ce=Z[Te*3],ue=Z[Te*3+1],de=Z[Te*3+2],ze=1+Math.sin(Ce*2.8+et*2.5)*Math.cos(ue*2.5+et*2)*Math.sin(de*2.2+et*1.8)*re*fe;M.setXYZ(Te,Ce*ze,ue*ze,de*ze)}M.needsUpdate=!0,L.computeVertexNormals()}T.current&&(T.current.rotation.y=et*.06,T.current.rotation.x=Math.sin(et*.04)*.1),C.current.frames++;const at=performance.now();if(at>=C.current.prevTime+1e3){const L=Math.round(C.current.frames*1e3/(at-C.current.prevTime));l==null||l(L),C.current.frames=0,C.current.prevTime=at}V.render(O,k)};return Pt(),()=>{U.current&&cancelAnimationFrame(U.current),$t.disconnect(),window.removeEventListener("mousemove",Zt),window.removeEventListener("touchmove",Kt),V.dispose()}},[]),ct.useEffect(()=>{if(!y.current)return;const D=y.current.material;e&&(D.roughness=e.roughness,D.metalness=e.metalness,D.transmission=e.transmission,D.ior=e.ior,D.thickness=e.thickness,D.wireframe=e.wireframe,e.colorScheme==="luminescence"?(D.color.setHex(6220500),N.current&&N.current.color.setHex(6220500)):e.colorScheme==="nebula"?(D.color.setHex(8490232),N.current&&N.current.color.setHex(11032055)):e.colorScheme==="solar"?(D.color.setHex(16096779),N.current&&N.current.color.setHex(16498468)):(D.color.setHex(16777215),N.current&&N.current.color.setHex(6220500)))},[e]),ct.useEffect(()=>{if(!h.current||!y.current)return;const D=Math.max(0,Math.min(1,o));if(D<.25)y.current.scale.setScalar(1+D*.3),h.current.position.z=0-D*1.5;else if(D<.55){const O=1+(D-.25)*1.2;y.current.scale.setScalar(O),h.current.position.z=-.5-(D-.25)*2}else if(D<.8)y.current.scale.setScalar(1.4),h.current.position.z=-1;else{const O=Math.max(.6,1.4-(D-.8)*2.5);y.current.scale.setScalar(O),h.current.position.z=.5+(D-.8)*3}},[o]),A.jsx("div",{ref:c,id:"fonix-webgl-canvas-container",className:"absolute inset-0 w-full h-full pointer-events-auto",style:{overflow:"hidden"}})},c2=({config:o,onChange:e,fps:i})=>{const[s,l]=t_.useState(!1),c=()=>{e({roughness:.12,metalness:.1,transmission:.92,ior:1.52,thickness:1.4,chromaticAberration:.04,distortion:.28,wireframe:!1,colorScheme:"obsidian",speed:1,audioReactivity:1})},d=()=>{const p=`// Fonix Acoustic Core — Three.js Material Spec (PRD-Compliant)
const outerCageMaterial = new THREE.MeshPhysicalMaterial({
  color: ${o.colorScheme==="luminescence"?"0x5eead4":o.colorScheme==="nebula"?"0x818cf8":o.colorScheme==="solar"?"0xf59e0b":"0xffffff"},
  roughness: ${o.roughness},
  metalness: ${o.metalness},
  transmission: ${o.transmission},
  ior: ${o.ior},
  thickness: ${o.thickness},
  transparent: true,
  opacity: 0.88,
  wireframe: ${o.wireframe},
  clearcoat: 1.0,
  clearcoatRoughness: 0.1,
});

// Vertex Shader Wave Deformation
// Amplitude: ${o.distortion} | Temporal Speed: ${o.speed}x`;navigator.clipboard.writeText(p),l(!0),setTimeout(()=>l(!1),2e3)};return A.jsxs("div",{id:"material-sandbox-panel",className:"bg-[#050505]/85 backdrop-blur-3xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(45,212,191,0.12)] text-zinc-200",children:[A.jsxs("div",{className:"flex items-center justify-between pb-5 border-b border-white/10",children:[A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsx("div",{className:"p-2.5 bg-teal-500/10 border border-teal-400/30 rounded-xl text-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.2)]",children:A.jsx(s_,{className:"w-5 h-5"})}),A.jsxs("div",{children:[A.jsx("h3",{className:"font-semibold text-white text-base tracking-tight",children:"3D Shader & Physics Sandbox"}),A.jsx("p",{className:"text-xs text-zinc-400 font-mono tracking-wide",children:"Live PRD Material Calibration & WebGL Telemetry"})]})]}),A.jsxs("div",{className:"flex items-center gap-2",children:[A.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-1 bg-black/60 rounded-full border border-white/15 text-xs font-mono",children:[A.jsx("span",{className:"w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-pulse"}),A.jsxs("span",{className:"text-zinc-300",children:[i||60," FPS"]})]}),A.jsx("button",{onClick:c,title:"Reset to PRD Spec",className:"p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors border border-transparent hover:border-white/10",children:A.jsx(LS,{className:"w-4 h-4"})})]})]}),A.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mt-6",children:[A.jsxs("div",{className:"space-y-2 p-3.5 bg-white/[0.02] border border-white/5 rounded-2xl",children:[A.jsxs("div",{className:"flex justify-between text-xs",children:[A.jsx("span",{className:"text-zinc-300 font-medium tracking-wide",children:"Optical Transmission"}),A.jsx("span",{className:"font-mono text-teal-400 font-semibold",children:o.transmission.toFixed(2)})]}),A.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:o.transmission,onChange:p=>e({...o,transmission:parseFloat(p.target.value)}),className:"w-full h-1.5 bg-black/60 rounded-lg appearance-none cursor-pointer accent-teal-400"}),A.jsx("span",{className:"text-[11px] font-mono text-zinc-500 block",children:"PRD Spec: 0.92 (Flint Glass)"})]}),A.jsxs("div",{className:"space-y-2 p-3.5 bg-white/[0.02] border border-white/5 rounded-2xl",children:[A.jsxs("div",{className:"flex justify-between text-xs",children:[A.jsx("span",{className:"text-zinc-300 font-medium tracking-wide",children:"Refraction Index (IOR)"}),A.jsx("span",{className:"font-mono text-teal-400 font-semibold",children:o.ior.toFixed(2)})]}),A.jsx("input",{type:"range",min:"1.0",max:"2.4",step:"0.01",value:o.ior,onChange:p=>e({...o,ior:parseFloat(p.target.value)}),className:"w-full h-1.5 bg-black/60 rounded-lg appearance-none cursor-pointer accent-teal-400"}),A.jsx("span",{className:"text-[11px] font-mono text-zinc-500 block",children:"PRD Spec: 1.48 - 1.54"})]}),A.jsxs("div",{className:"space-y-2 p-3.5 bg-white/[0.02] border border-white/5 rounded-2xl",children:[A.jsxs("div",{className:"flex justify-between text-xs",children:[A.jsx("span",{className:"text-zinc-300 font-medium tracking-wide",children:"Surface Roughness"}),A.jsx("span",{className:"font-mono text-teal-400 font-semibold",children:o.roughness.toFixed(2)})]}),A.jsx("input",{type:"range",min:"0",max:"0.8",step:"0.01",value:o.roughness,onChange:p=>e({...o,roughness:parseFloat(p.target.value)}),className:"w-full h-1.5 bg-black/60 rounded-lg appearance-none cursor-pointer accent-teal-400"}),A.jsx("span",{className:"text-[11px] font-mono text-zinc-500 block",children:"PRD Spec: 0.08 - 0.18"})]}),A.jsxs("div",{className:"space-y-2 p-3.5 bg-white/[0.02] border border-white/5 rounded-2xl",children:[A.jsxs("div",{className:"flex justify-between text-xs",children:[A.jsx("span",{className:"text-zinc-300 font-medium tracking-wide",children:"Acoustic Wave Amplitude"}),A.jsx("span",{className:"font-mono text-teal-400 font-semibold",children:o.distortion.toFixed(2)})]}),A.jsx("input",{type:"range",min:"0.05",max:"0.8",step:"0.01",value:o.distortion,onChange:p=>e({...o,distortion:parseFloat(p.target.value)}),className:"w-full h-1.5 bg-black/60 rounded-lg appearance-none cursor-pointer accent-teal-400"}),A.jsx("span",{className:"text-[11px] font-mono text-zinc-500 block",children:"PRD Spec: 0.28 (Harmonic Fluidity)"})]}),A.jsxs("div",{className:"space-y-2 p-3.5 bg-white/[0.02] border border-white/5 rounded-2xl",children:[A.jsxs("div",{className:"flex justify-between text-xs",children:[A.jsx("span",{className:"text-zinc-300 font-medium tracking-wide",children:"Kinetic Velocity Speed"}),A.jsxs("span",{className:"font-mono text-teal-400 font-semibold",children:[o.speed.toFixed(2),"x"]})]}),A.jsx("input",{type:"range",min:"0.2",max:"3.0",step:"0.1",value:o.speed,onChange:p=>e({...o,speed:parseFloat(p.target.value)}),className:"w-full h-1.5 bg-black/60 rounded-lg appearance-none cursor-pointer accent-teal-400"}),A.jsx("span",{className:"text-[11px] font-mono text-zinc-500 block",children:"PRD Spec: 1.0x (432Hz baseline)"})]}),A.jsxs("div",{className:"space-y-2 p-3.5 bg-white/[0.02] border border-white/5 rounded-2xl",children:[A.jsxs("div",{className:"flex justify-between text-xs",children:[A.jsx("span",{className:"text-zinc-300 font-medium tracking-wide",children:"Volumetric Depth (Thickness)"}),A.jsx("span",{className:"font-mono text-teal-400 font-semibold",children:o.thickness.toFixed(1)})]}),A.jsx("input",{type:"range",min:"0.2",max:"3.0",step:"0.1",value:o.thickness,onChange:p=>e({...o,thickness:parseFloat(p.target.value)}),className:"w-full h-1.5 bg-black/60 rounded-lg appearance-none cursor-pointer accent-teal-400"}),A.jsx("span",{className:"text-[11px] font-mono text-zinc-500 block",children:"PRD Spec: 1.40"})]})]}),A.jsxs("div",{className:"mt-7 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4",children:[A.jsxs("div",{className:"flex items-center gap-2",children:[A.jsx("span",{className:"text-xs text-zinc-400 font-mono tracking-wider mr-1",children:"Lighting Spectrum:"}),["obsidian","luminescence","nebula","solar"].map(p=>A.jsx("button",{onClick:()=>e({...o,colorScheme:p}),className:`px-3 py-1.5 text-xs rounded-xl font-medium capitalize tracking-wide transition-all ${o.colorScheme===p?"bg-teal-500/20 border border-teal-400 text-teal-300 shadow-[0_0_15px_rgba(45,212,191,0.25)]":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 border border-white/10"}`,children:p},p))]}),A.jsxs("div",{className:"flex items-center gap-4",children:[A.jsxs("label",{className:"flex items-center gap-2 text-xs text-zinc-300 cursor-pointer select-none font-mono",children:[A.jsx("input",{type:"checkbox",checked:o.wireframe,onChange:p=>e({...o,wireframe:p.target.checked}),className:"rounded border-white/20 bg-black text-teal-400 focus:ring-0"}),A.jsx("span",{children:"Wireframe Mesh"})]}),A.jsxs("button",{onClick:d,id:"copy-threejs-spec-button",className:"flex items-center gap-1.5 px-4 py-2 bg-white/10 hover:bg-white/15 border border-white/15 text-zinc-100 hover:text-white rounded-xl text-xs font-semibold tracking-wide transition-all shadow-sm",children:[s?A.jsx(zs,{className:"w-3.5 h-3.5 text-teal-400"}):A.jsx(jc,{className:"w-3.5 h-3.5"}),A.jsx("span",{children:s?"Copied Three.js Spec":"Export Three.js Shader"})]})]})]})]})};class u2{constructor(){this.ctx=null,this.oscillators=[],this.gainNode=null,this.analyser=null,this.isPlaying=!1}init(){if(this.ctx)return;const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.gainNode=this.ctx.createGain(),this.gainNode.gain.setValueAtTime(.08,this.ctx.currentTime),this.gainNode.connect(this.ctx.destination),this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=64,this.gainNode.connect(this.analyser)}start(){if(this.init(),!this.ctx||this.isPlaying)return;this.ctx.state==="suspended"&&this.ctx.resume();const e=[108,216,432,648];this.oscillators=e.map((i,s)=>{const l=this.ctx.createOscillator();l.type=s===0?"sine":s===1?"triangle":"sine",l.frequency.setValueAtTime(i,this.ctx.currentTime);const c=this.ctx.createGain();return c.gain.setValueAtTime(.04/(s+1),this.ctx.currentTime),l.connect(c),c.connect(this.gainNode),l.start(),l}),this.isPlaying=!0}stop(){this.isPlaying&&(this.oscillators.forEach(e=>{try{e.stop(),e.disconnect()}catch{}}),this.oscillators=[],this.isPlaying=!1)}toggle(){return this.isPlaying?(this.stop(),!1):(this.start(),!0)}getFrequencyEnergy(){if(!this.analyser||!this.isPlaying)return 1;const e=new Uint8Array(this.analyser.frequencyBinCount);this.analyser.getByteFrequencyData(e);let i=0;for(let l=0;l<e.length;l++)i+=e[l];return 1+i/e.length/255*1.5}getIsPlaying(){return this.isPlaying}}const Y_=new u2,$x=({onOpenPRD:o,materialConfig:e,onMaterialChange:i})=>{const[s,l]=ct.useState(!1),[c,d]=ct.useState(0),[p,m]=ct.useState(0),[h,y]=ct.useState(60),[v,g]=ct.useState("ts"),[b,T]=ct.useState(!1),[N,S]=ct.useState(!1),[_,U]=ct.useState("");ct.useEffect(()=>{const D=()=>{const O=document.documentElement.scrollHeight-window.innerHeight;if(O>0){const E=window.scrollY/O;d(E)}};return window.addEventListener("scroll",D,{passive:!0}),()=>window.removeEventListener("scroll",D)},[]);const I=()=>{const D=Y_.toggle();l(D),i({...e,audioReactivity:D?2.2:1,speed:D?1.4:1})},C=()=>{const D={ts:`import { FonixSpatialEngine } from '@fonix/spatial-core';

// Initialize 64-channel 432Hz acoustic pipeline
const engine = new FonixSpatialEngine({
  sampleRate: 48000,
  latencyMode: 'ultra-low', // 0.8ms
  dispersionRefraction: 1.52,
  spatialResolution: 64,
});

await engine.bindAudioContext(audioCtx);
engine.synthesizeKineticResonance();`,cpp:`#include <fonix/spatial_dsp.hpp>

fonix::SpatialPipeline pipeline(48000, 64);
pipeline.set_viscoelastic_damping(0.05f);
pipeline.process_multichannel_stream(input_buffer, output_buffer);`,unreal:`// Unreal Engine 5 Fonix Spatial Node
UFonixSpatialSubsystem* FonixAudio = GEngine->GetEngineSubsystem<UFonixSpatialSubsystem>();
FonixAudio->EnableHarmonicDiffraction(EChromaticModel::FlintGlass);`};navigator.clipboard.writeText(D[v]),T(!0),setTimeout(()=>T(!1),2e3)},F=D=>{D.preventDefault(),_.includes("@")&&S(!0)};return A.jsxs("div",{id:"fonix-live-website-root",className:"relative min-h-screen bg-[#050505] text-[#f0f0f0] selection:bg-teal-500/30 selection:text-teal-200",children:[A.jsxs("div",{className:"fixed inset-0 pointer-events-none z-0 overflow-hidden",children:[A.jsx(l2,{scrollProgress:c,materialConfig:e,onFpsUpdate:y}),A.jsx("div",{className:"absolute -top-40 -left-40 w-96 h-96 bg-teal-900/20 rounded-full blur-[120px] pointer-events-none"}),A.jsx("div",{className:"absolute top-1/3 -right-40 w-96 h-96 bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"}),A.jsx("div",{className:"absolute -bottom-40 left-1/3 w-96 h-96 bg-teal-950/25 rounded-full blur-[140px] pointer-events-none"}),A.jsx("div",{className:"absolute inset-0 bg-radial-gradient from-transparent via-[#050505]/30 to-[#050505]/85 pointer-events-none"})]}),A.jsx("header",{className:"sticky top-0 z-40 backdrop-blur-3xl bg-[#050505]/75 border-b border-white/10",children:A.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",children:[A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsx("div",{className:"w-8 h-8 rounded-xl bg-gradient-to-br from-teal-400 via-teal-500 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(45,212,191,0.3)]",children:A.jsx(Qg,{className:"w-4 h-4 text-black font-bold"})}),A.jsxs("span",{className:"font-extrabold text-lg tracking-wider text-white uppercase",children:["fonix",A.jsx("span",{className:"text-teal-400",children:"."})]}),A.jsx("span",{className:"hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/15 text-[10px] font-mono tracking-widest uppercase text-teal-300",children:"Acoustic 3D Engine"})]}),A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsxs("button",{onClick:I,id:"audio-drone-toggle-btn",className:`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${s?"bg-teal-500/20 border border-teal-400 text-teal-300 shadow-[0_0_20px_rgba(45,212,191,0.3)] animate-pulse":"bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-zinc-300"}`,children:[s?A.jsx(o_,{className:"w-3.5 h-3.5 text-teal-400"}):A.jsx(l_,{className:"w-3.5 h-3.5 text-zinc-400"}),A.jsx("span",{className:"hidden md:inline",children:s?"432Hz Sound Active":"Enable 432Hz Audio"})]}),A.jsxs("button",{onClick:o,id:"open-prd-spec-nav-btn",className:"flex items-center gap-1.5 px-4 py-1.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-semibold shadow-[0_0_20px_rgba(168,85,247,0.35)] transition-all hover:scale-[1.02]",children:[A.jsx(r_,{className:"w-3.5 h-3.5"}),A.jsx("span",{children:"Inspect PRD Spec"})]})]})]})}),A.jsx("section",{id:"hero-section",className:"relative z-10 min-h-[92vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-12 pb-24",children:A.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[A.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-1.5 bg-teal-500/10 border border-teal-400/30 rounded-full text-xs font-mono tracking-[0.2em] uppercase text-teal-300 shadow-[0_0_25px_rgba(45,212,191,0.15)]",children:[A.jsx("span",{className:"w-2 h-2 rounded-full bg-teal-400 animate-ping"}),A.jsx("span",{children:"Next-Generation Acoustic Intelligence & Spatial Synthesis"})]}),A.jsxs("h1",{className:"text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]",children:["Sound rendered as ",A.jsx("br",{}),A.jsx("span",{className:"bg-gradient-to-r from-teal-300 via-teal-100 to-purple-200 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(45,212,191,0.25)]",children:"viscoelastic geometry."})]}),A.jsx("p",{className:"text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed font-normal",children:"Fonix fuses optical flint glass caustics with sub-millisecond DSP spatial audio. Experience real-time acoustic physics in a seamless 3D WebGL continuum."}),A.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4 pt-4",children:[A.jsxs("a",{href:"#architecture-section",className:"flex items-center gap-2 px-7 py-3.5 bg-teal-400 hover:bg-teal-300 text-black font-bold rounded-2xl text-sm shadow-[0_0_30px_rgba(45,212,191,0.35)] hover:scale-105 active:scale-95 transition-all",children:[A.jsx("span",{children:"Explore Engine Architecture"}),A.jsx(hS,{className:"w-4 h-4"})]}),A.jsxs("a",{href:"#resonance-lab-section",className:"flex items-center gap-2 px-7 py-3.5 bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 text-white font-medium rounded-2xl text-sm transition-all hover:scale-105 backdrop-blur-xl",children:[A.jsx(s_,{className:"w-4 h-4 text-teal-400"}),A.jsx("span",{children:"Interactive Shader Lab"})]})]}),A.jsxs("div",{className:"pt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 font-mono tracking-wider",children:[A.jsxs("div",{className:"flex items-center gap-2 px-3 py-1 bg-white/[0.04] border border-white/10 rounded-full",children:[A.jsx("span",{className:"w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.8)]"}),A.jsxs("span",{children:["WebGL 2.0: Active (",h," FPS)"]})]}),A.jsxs("div",{className:"flex items-center gap-2 px-3 py-1 bg-white/[0.04] border border-white/10 rounded-full",children:[A.jsx("span",{className:"w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]"}),A.jsxs("span",{children:["Refraction IOR: ",e.ior]})]}),A.jsxs("div",{className:"flex items-center gap-2 px-3 py-1 bg-white/[0.04] border border-white/10 rounded-full",children:[A.jsx("span",{className:"w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]"}),A.jsx("span",{children:"Phase Coherence: 99.98%"})]})]})]})}),A.jsxs("section",{id:"architecture-section",className:"relative z-10 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",children:[A.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16 space-y-3",children:[A.jsx("span",{className:"px-3.5 py-1 bg-purple-500/10 border border-purple-400/30 text-purple-300 text-xs font-mono font-semibold uppercase tracking-[0.2em] rounded-full",children:"Section 02 // Spatial Architecture"}),A.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-white tracking-tight",children:"The Three Pillars of Fonix Acoustic Physics"}),A.jsx("p",{className:"text-sm sm:text-base text-zinc-400",children:"As you navigate, the 3D monolith separates into its core computational layers."})]}),A.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[{id:0,icon:DS,title:"Neural Acoustic Mesh",tag:"Layer 01 // Diffraction",desc:"Simulates real-time binaural occlusion and volumetric reverberation using custom GLSL compute shaders.",specs:"64-channel Ray Diffraction • 0.8ms latency"},{id:1,icon:i_,title:"Zero-Latency DSP Kernel",tag:"Layer 02 // Harmonic DSP",desc:"Transforms standard polyphonic audio streams into viscoelastic spatial vectors with 432Hz harmonic alignment.",specs:"48kHz / 24-bit float • WebAssembly SIMD"},{id:2,icon:c_,title:"Optical Dispersion Shader",tag:"Layer 03 // Caustic Glass",desc:"Renders physical flint glass refraction with three-channel RGB wavelength separation and internal specular caustics.",specs:"Abbe Number 32.4 • 0.92 Optical Transmission"}].map(D=>{const O=D.icon,E=p===D.id;return A.jsxs("div",{onClick:()=>{m(D.id),i({...e,distortion:D.id===0?.45:D.id===1?.28:.15,colorScheme:D.id===0?"luminescence":D.id===1?"nebula":"solar"})},className:`p-6 rounded-2xl border transition-all cursor-pointer backdrop-blur-2xl ${E?"bg-white/[0.08] border-teal-400 shadow-[0_0_40px_rgba(45,212,191,0.2)] scale-[1.02]":"bg-white/[0.03] border-white/10 hover:border-white/25 hover:bg-white/[0.06]"}`,children:[A.jsxs("div",{className:"flex items-center justify-between mb-4",children:[A.jsx("div",{className:`p-3 rounded-xl ${E?"bg-teal-500/20 text-teal-300":"bg-white/[0.06] text-zinc-400"}`,children:A.jsx(O,{className:"w-6 h-6"})}),A.jsx("span",{className:"text-[11px] font-mono tracking-wider text-zinc-500",children:D.tag})]}),A.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:D.title}),A.jsx("p",{className:"text-xs text-zinc-400 leading-relaxed mb-4",children:D.desc}),A.jsxs("div",{className:"pt-3 border-t border-white/10 text-[11px] font-mono text-teal-400 flex items-center gap-1.5",children:[A.jsx(Xd,{className:"w-3.5 h-3.5"}),A.jsx("span",{children:D.specs})]})]},D.id)})})]}),A.jsx("section",{id:"telemetry-section",className:"relative z-10 py-20 bg-[#050505]/90 backdrop-blur-3xl border-y border-white/10",children:A.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:A.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6 text-center",children:[A.jsxs("div",{className:"space-y-1 p-4 rounded-2xl bg-white/[0.02] border border-white/5",children:[A.jsx("span",{className:"text-3xl sm:text-4xl lg:text-5xl font-black font-mono text-teal-400 drop-shadow-[0_0_20px_rgba(45,212,191,0.3)]",children:"0.8ms"}),A.jsx("p",{className:"text-xs font-semibold text-white uppercase tracking-widest",children:"DSP Latency"}),A.jsx("p",{className:"text-[11px] text-zinc-500 font-mono",children:"Real-time kernel processing"})]}),A.jsxs("div",{className:"space-y-1 p-4 rounded-2xl bg-white/[0.02] border border-white/5",children:[A.jsx("span",{className:"text-3xl sm:text-4xl lg:text-5xl font-black font-mono text-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]",children:"64 Ch"}),A.jsx("p",{className:"text-xs font-semibold text-white uppercase tracking-widest",children:"Spatial Channels"}),A.jsx("p",{className:"text-[11px] text-zinc-500 font-mono",children:"Full 360° spherical field"})]}),A.jsxs("div",{className:"space-y-1 p-4 rounded-2xl bg-white/[0.02] border border-white/5",children:[A.jsx("span",{className:"text-3xl sm:text-4xl lg:text-5xl font-black font-mono text-amber-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]",children:"99.98%"}),A.jsx("p",{className:"text-xs font-semibold text-white uppercase tracking-widest",children:"Phase Coherence"}),A.jsx("p",{className:"text-[11px] text-zinc-500 font-mono",children:"Zero harmonic cancellation"})]}),A.jsxs("div",{className:"space-y-1 p-4 rounded-2xl bg-white/[0.02] border border-white/5",children:[A.jsx("span",{className:"text-3xl sm:text-4xl lg:text-5xl font-black font-mono text-teal-300 drop-shadow-[0_0_20px_rgba(45,212,191,0.3)]",children:"60 FPS"}),A.jsx("p",{className:"text-xs font-semibold text-white uppercase tracking-widest",children:"Locked 3D Pipeline"}),A.jsx("p",{className:"text-[11px] text-zinc-500 font-mono",children:"<11ms GPU frame budget"})]})]})})}),A.jsxs("section",{id:"resonance-lab-section",className:"relative z-10 py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto",children:[A.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-12 space-y-3",children:[A.jsx("span",{className:"px-3.5 py-1 bg-teal-500/10 border border-teal-400/30 text-teal-300 text-xs font-mono font-semibold uppercase tracking-[0.2em] rounded-full",children:"Section 04 // Interactive Calibration Lab"}),A.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-white tracking-tight",children:"Live 3D Material & Physics Sandbox"}),A.jsx("p",{className:"text-sm sm:text-base text-zinc-400",children:"Tweak refractive transmission, IOR, harmonic wave amplitude, and velocity in real-time. Export the exact Three.js configuration."})]}),A.jsx(c2,{config:e,onChange:i,fps:h})]}),A.jsx("section",{id:"developer-section",className:"relative z-10 py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto",children:A.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[A.jsxs("div",{className:"space-y-6",children:[A.jsx("span",{className:"px-3.5 py-1 bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-mono font-semibold uppercase tracking-[0.2em] rounded-full",children:"Section 05 // Integration Architecture"}),A.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight",children:"One Unified API for Web, Native & XR Environments"}),A.jsx("p",{className:"text-sm text-zinc-400 leading-relaxed",children:"Integrate Fonix's viscoelastic sound engine directly into your React, Three.js, C++, or Unreal Engine 5 pipelines with minimal computational footprint."}),A.jsxs("div",{className:"space-y-3 text-xs",children:[A.jsxs("div",{className:"flex items-center gap-2.5 text-zinc-300",children:[A.jsx(zs,{className:"w-4 h-4 text-teal-400"}),A.jsx("span",{children:"Zero runtime asset downloads — 100% procedural WebGL"})]}),A.jsxs("div",{className:"flex items-center gap-2.5 text-zinc-300",children:[A.jsx(zs,{className:"w-4 h-4 text-teal-400"}),A.jsx("span",{children:"Multi-threaded WebAudio / WebWorker DSP calculations"})]}),A.jsxs("div",{className:"flex items-center gap-2.5 text-zinc-300",children:[A.jsx(zs,{className:"w-4 h-4 text-teal-400"}),A.jsx("span",{children:"Native spatial audio support for Apple VisionOS & Meta Quest 3"})]})]})]}),A.jsxs("div",{className:"bg-black/90 border border-white/15 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl",children:[A.jsxs("div",{className:"px-4 py-3 bg-white/[0.04] border-b border-white/10 flex items-center justify-between",children:[A.jsxs("div",{className:"flex items-center gap-2",children:[A.jsx("div",{className:"w-3 h-3 rounded-full bg-rose-500/80"}),A.jsx("div",{className:"w-3 h-3 rounded-full bg-amber-500/80"}),A.jsx("div",{className:"w-3 h-3 rounded-full bg-teal-400/80"}),A.jsx("span",{className:"ml-2 text-xs font-mono text-zinc-400",children:"fonix-pipeline.ts"})]}),A.jsxs("div",{className:"flex items-center gap-2",children:[A.jsx("div",{className:"flex bg-black/60 p-0.5 rounded-lg border border-white/10 text-[11px]",children:["ts","cpp","unreal"].map(D=>A.jsx("button",{onClick:()=>g(D),className:`px-2.5 py-1 rounded-md uppercase font-mono transition-colors ${v===D?"bg-teal-500/20 text-teal-300 border border-teal-500/30":"text-zinc-500 hover:text-zinc-300"}`,children:D},D))}),A.jsx("button",{onClick:C,className:"p-1.5 text-zinc-400 hover:text-white rounded-md bg-white/[0.06] hover:bg-white/[0.12] transition-colors",title:"Copy snippet",children:b?A.jsx(zs,{className:"w-3.5 h-3.5 text-teal-400"}):A.jsx(jc,{className:"w-3.5 h-3.5"})})]})]}),A.jsx("div",{className:"p-4 font-mono text-xs text-zinc-300 overflow-x-auto leading-relaxed bg-[#050505]/70",children:A.jsxs("pre",{className:"text-teal-300",children:[v==="ts"&&`import { FonixSpatialEngine } from '@fonix/spatial-core';

// Initialize 64-channel 432Hz acoustic pipeline
const engine = new FonixSpatialEngine({
  sampleRate: 48000,
  latencyMode: 'ultra-low', // 0.8ms
  dispersionRefraction: 1.52,
  spatialResolution: 64,
});

await engine.bindAudioContext(audioCtx);
engine.synthesizeKineticResonance();`,v==="cpp"&&`#include <fonix/spatial_dsp.hpp>

fonix::SpatialPipeline pipeline(48000, 64);
pipeline.set_viscoelastic_damping(0.05f);
pipeline.process_multichannel_stream(input_buffer, output_buffer);`,v==="unreal"&&`// Unreal Engine 5 Fonix Spatial Node
UFonixSpatialSubsystem* FonixAudio = 
  GEngine->GetEngineSubsystem<UFonixSpatialSubsystem>();

FonixAudio->EnableHarmonicDiffraction(
  EChromaticModel::FlintGlass
);`]})})]})]})}),A.jsx("section",{id:"cta-section",className:"relative z-10 py-28 px-4 sm:px-6 lg:px-8 text-center",children:A.jsxs("div",{className:"max-w-3xl mx-auto bg-white/[0.03] border border-white/15 rounded-3xl p-8 sm:p-12 backdrop-blur-3xl shadow-[0_0_80px_rgba(45,212,191,0.1)] space-y-6",children:[A.jsx("div",{className:"inline-flex p-3 rounded-2xl bg-teal-500/10 border border-teal-400/30 text-teal-400 shadow-[0_0_20px_rgba(45,212,191,0.2)]",children:A.jsx(Qg,{className:"w-6 h-6 animate-pulse"})}),A.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-white tracking-tight",children:"Ready to Build with Fonix Spatial Intelligence?"}),A.jsx("p",{className:"text-sm text-zinc-400 max-w-xl mx-auto",children:"Join leading acoustic studios, game architects, and spatial hardware developers pioneering the future of 3D audio."}),N?A.jsxs("div",{className:"p-4 bg-teal-500/10 border border-teal-400/30 rounded-2xl text-teal-300 text-sm font-medium flex items-center justify-center gap-2",children:[A.jsx(Xd,{className:"w-5 h-5 text-teal-400"}),A.jsx("span",{children:"Access key dispatched. Check your inbox for the developer SDK bundle."})]}):A.jsxs("form",{onSubmit:F,className:"flex flex-col sm:flex-row gap-3 max-w-md mx-auto",children:[A.jsx("input",{type:"email",placeholder:"Enter enterprise email...",required:!0,value:_,onChange:D=>U(D.target.value),className:"flex-1 px-4 py-3 bg-black/60 border border-white/15 rounded-xl text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-teal-400/60 transition-colors"}),A.jsx("button",{type:"submit",id:"request-developer-access-btn",className:"px-6 py-3 bg-teal-400 hover:bg-teal-300 text-black font-bold rounded-xl text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(45,212,191,0.3)]",children:"Request SDK"})]}),A.jsx("div",{className:"pt-4 flex flex-wrap items-center justify-center gap-4 text-xs",children:A.jsx("button",{onClick:o,className:"text-teal-400 hover:text-teal-300 font-medium underline underline-offset-4 tracking-wide",children:"Read full AI Studio PRD Specification →"})})]})}),A.jsx("footer",{className:"relative z-10 border-t border-white/10 bg-[#030303] py-12 px-4 sm:px-6 lg:px-8 text-zinc-500 text-xs font-mono",children:A.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4",children:[A.jsxs("div",{className:"flex items-center gap-2",children:[A.jsx("span",{className:"font-bold text-white tracking-widest",children:"FONIX"}),A.jsx("span",{children:"— Spatial Sound Synthesis & Computational 3D Architecture"})]}),A.jsxs("div",{className:"flex items-center gap-4 text-zinc-400",children:[A.jsx("span",{children:"v1.0.0-PROD"}),A.jsx("span",{children:"•"}),A.jsx("span",{children:"WebGL 2.0 Physical Shaders"}),A.jsx("span",{children:"•"}),A.jsx("span",{children:"© 2026 Fonix Acoustic Inc."})]})]})})]})},e_=()=>{const[o,e]=ct.useState("all"),[i,s]=ct.useState(""),[l,c]=ct.useState(!1),[d,p]=ct.useState({"executive-summary":!0,"visual-direction":!0,"motion-interaction":!0,"page-structure":!0,"technical-performance":!0,differentiation:!0}),m=g=>{p(b=>({...b,[g]:!b[g]}))},h=()=>{navigator.clipboard.writeText(Wd),c(!0),setTimeout(()=>c(!1),2200)},y=()=>{const g=new Blob([Wd],{type:"text/markdown;charset=utf-8"}),b=URL.createObjectURL(g),T=document.createElement("a");T.href=b,T.download="FONIX_PRD_DOCUMENT_v1.0.md",document.body.appendChild(T),T.click(),document.body.removeChild(T),URL.revokeObjectURL(b)},v=GS.filter(g=>{const b=o==="all"||g.audience===o||g.audience==="all",T=i===""||g.title.toLowerCase().includes(i.toLowerCase())||g.summary.toLowerCase().includes(i.toLowerCase())||g.content.some(N=>N.heading.toLowerCase().includes(i.toLowerCase())||N.paragraphs.some(S=>S.toLowerCase().includes(i.toLowerCase())));return b&&T});return A.jsxs("div",{id:"prd-master-document-view",className:"w-full max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-zinc-200",children:[A.jsxs("div",{className:"bg-[#050505]/85 border border-white/20 rounded-3xl p-6 sm:p-8 backdrop-blur-3xl shadow-[0_0_80px_rgba(45,212,191,0.1)] relative overflow-hidden mb-8",children:[A.jsx("div",{className:"absolute -right-16 -top-16 w-64 h-64 bg-teal-900/20 rounded-full blur-3xl pointer-events-none"}),A.jsx("div",{className:"absolute -left-16 -bottom-16 w-64 h-64 bg-purple-900/20 rounded-full blur-3xl pointer-events-none"}),A.jsxs("div",{className:"relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6",children:[A.jsxs("div",{className:"space-y-2",children:[A.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[A.jsxs("span",{className:"px-3.5 py-1 bg-teal-500/15 border border-teal-400/30 text-teal-300 text-xs font-mono font-semibold uppercase tracking-[0.2em] rounded-full flex items-center gap-1.5 shadow-[0_0_15px_rgba(45,212,191,0.2)]",children:[A.jsx(a_,{className:"w-3.5 h-3.5"}),"Official Studio PRD"]}),A.jsx("span",{className:"px-2.5 py-0.5 bg-white/[0.06] border border-white/15 text-zinc-300 text-xs font-mono rounded-full",children:ws.version}),A.jsxs("span",{className:"px-2.5 py-0.5 bg-teal-500/10 border border-teal-400/20 text-teal-300 text-xs font-medium font-mono rounded-full flex items-center gap-1",children:[A.jsx(Xd,{className:"w-3 h-3 text-teal-400"}),ws.status]})]}),A.jsx("h1",{className:"text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight",children:ws.title}),A.jsxs("p",{className:"text-sm sm:text-base text-zinc-400 max-w-3xl leading-relaxed",children:[ws.tagline," — Detailed architectural design brief and technical blueprint for AI Studio implementation."]})]}),A.jsxs("div",{className:"flex flex-wrap items-center gap-3 self-start md:self-center",children:[A.jsxs("button",{onClick:h,id:"copy-prd-markdown-btn",className:"flex items-center gap-2 px-5 py-2.5 bg-teal-400 hover:bg-teal-300 text-black font-bold rounded-xl text-xs sm:text-sm transition-all shadow-[0_0_25px_rgba(45,212,191,0.3)] hover:scale-[1.02] active:scale-[0.98]",children:[l?A.jsx(zs,{className:"w-4 h-4 text-black"}):A.jsx(jc,{className:"w-4 h-4 text-black"}),A.jsx("span",{children:l?"PRD Copied to Clipboard!":"Copy Full PRD (Markdown)"})]}),A.jsxs("button",{onClick:y,id:"download-prd-file-btn",className:"flex items-center gap-2 px-4 py-2.5 bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white font-medium rounded-xl text-xs sm:text-sm transition-all",children:[A.jsx(bS,{className:"w-4 h-4 text-zinc-400"}),A.jsx("span",{children:"Download .md"})]})]})]}),A.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 mt-6 border-t border-white/10 text-xs font-mono",children:[A.jsxs("div",{children:[A.jsx("span",{className:"text-zinc-500 block",children:"Target Studio"}),A.jsx("span",{className:"text-zinc-200 font-medium",children:ws.targetStudio})]}),A.jsxs("div",{children:[A.jsx("span",{className:"text-zinc-500 block",children:"Author & Discipline"}),A.jsx("span",{className:"text-zinc-200 font-medium",children:ws.author})]}),A.jsxs("div",{children:[A.jsx("span",{className:"text-zinc-500 block",children:"Target Timeline"}),A.jsx("span",{className:"text-zinc-200 font-medium",children:ws.targetDate})]}),A.jsxs("div",{children:[A.jsx("span",{className:"text-zinc-500 block",children:"Document Scope"}),A.jsx("span",{className:"text-zinc-200 font-medium",children:"6 Comprehensive Sections"})]})]})]}),A.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 mb-8",children:[A.jsx("div",{className:"flex items-center gap-1.5 p-1.5 bg-[#050505]/80 border border-white/15 rounded-2xl w-full sm:w-auto overflow-x-auto backdrop-blur-2xl",children:[{id:"all",label:"Complete PRD",icon:mS},{id:"3d-artists",label:"3D Art & Shaders",icon:TS},{id:"designers",label:"Motion & UX",icon:c_},{id:"developers",label:"WebGL & Engineering",icon:i_}].map(g=>{const b=g.icon,T=o===g.id;return A.jsxs("button",{onClick:()=>e(g.id),className:`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${T?"bg-white/[0.1] text-teal-300 shadow-sm border border-teal-400/30":"text-zinc-400 hover:text-white hover:bg-white/[0.04]"}`,children:[A.jsx(b,{className:"w-3.5 h-3.5"}),A.jsx("span",{children:g.label})]},g.id)})}),A.jsxs("div",{className:"relative w-full sm:w-72",children:[A.jsx(PS,{className:"w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"}),A.jsx("input",{type:"text",placeholder:"Search specs, shaders, metrics...",value:i,onChange:g=>s(g.target.value),className:"w-full pl-9 pr-4 py-2 bg-[#050505]/80 border border-white/15 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-teal-400/60 transition-colors backdrop-blur-2xl font-mono"}),i&&A.jsx("button",{onClick:()=>s(""),className:"absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-500 hover:text-white",children:"Clear"})]})]}),A.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-8",children:[A.jsxs("div",{className:"p-4 bg-white/[0.03] border border-white/10 rounded-2xl backdrop-blur-xl",children:[A.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono font-semibold text-teal-400 mb-2",children:[A.jsx("span",{className:"w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.8)]"}),A.jsx("span",{children:"Core Color Tokens"})]}),A.jsxs("div",{className:"grid grid-cols-4 gap-2 text-[10px] text-center font-mono",children:[A.jsxs("div",{className:"bg-[#050505] border border-white/15 p-2 rounded-lg text-zinc-400",children:["#050505",A.jsx("br",{}),A.jsx("span",{className:"text-[9px] text-zinc-500",children:"Obsidian"})]}),A.jsxs("div",{className:"bg-[#2DD4BF] p-2 rounded-lg text-black font-bold",children:["#2DD4BF",A.jsx("br",{}),A.jsx("span",{className:"text-[9px] text-zinc-900",children:"Lumens"})]}),A.jsxs("div",{className:"bg-[#A855F7] p-2 rounded-lg text-white font-bold",children:["#A855F7",A.jsx("br",{}),A.jsx("span",{className:"text-[9px] text-zinc-100",children:"Nebula"})]}),A.jsxs("div",{className:"bg-[#F59E0B] p-2 rounded-lg text-black font-bold",children:["#F59E0B",A.jsx("br",{}),A.jsx("span",{className:"text-[9px] text-zinc-900",children:"Amber"})]})]})]}),A.jsxs("div",{className:"p-4 bg-white/[0.03] border border-white/10 rounded-2xl backdrop-blur-xl",children:[A.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono font-semibold text-purple-400 mb-2",children:[A.jsx("span",{className:"w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]"}),A.jsx("span",{children:"Target WebGL Performance"})]}),A.jsxs("div",{className:"flex justify-between items-center text-xs font-mono bg-black/60 p-2.5 rounded-lg border border-white/10",children:[A.jsxs("div",{children:[A.jsx("span",{className:"text-teal-400 font-bold block",children:"60 FPS"}),A.jsx("span",{className:"text-[10px] text-zinc-500",children:"<11ms frame"})]}),A.jsxs("div",{children:[A.jsx("span",{className:"text-purple-300 font-bold block",children:"<240 KB"}),A.jsx("span",{className:"text-[10px] text-zinc-500",children:"3D Payload"})]}),A.jsxs("div",{children:[A.jsx("span",{className:"text-amber-400 font-bold block",children:"<14"}),A.jsx("span",{className:"text-[10px] text-zinc-500",children:"Draw Calls"})]})]})]}),A.jsxs("div",{className:"p-4 bg-white/[0.03] border border-white/10 rounded-2xl backdrop-blur-xl",children:[A.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono font-semibold text-amber-400 mb-2",children:[A.jsx("span",{className:"w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]"}),A.jsx("span",{children:"Motion Core Signature"})]}),A.jsxs("p",{className:"text-xs text-zinc-300 leading-relaxed",children:[A.jsx("strong",{className:"text-white",children:"Viscoelastic Inertia"})," with 432Hz harmonic dampening and continuous spatial background thread across all sections."]})]})]}),A.jsx("div",{className:"space-y-6",children:v.map(g=>{const b=d[g.id]??!0;return A.jsxs("div",{id:`prd-section-${g.id}`,className:"bg-[#050505]/80 border border-white/15 rounded-3xl overflow-hidden backdrop-blur-3xl transition-all shadow-[0_0_40px_rgba(0,0,0,0.5)]",children:[A.jsxs("button",{onClick:()=>m(g.id),className:"w-full px-6 sm:px-8 py-5 flex items-center justify-between text-left hover:bg-white/[0.03] transition-colors",children:[A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsx("span",{className:"px-3 py-1 bg-white/[0.06] text-teal-300 text-[11px] font-mono font-semibold rounded-lg uppercase tracking-widest border border-white/10",children:g.badge}),A.jsx("h2",{className:"text-lg sm:text-xl font-bold text-white tracking-tight",children:g.title})]}),A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsx("span",{className:"text-xs font-mono text-zinc-500 hidden sm:inline",children:b?"Collapse":"Expand"}),A.jsx("div",{className:`w-6 h-6 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-zinc-400 text-xs transition-transform duration-200 ${b?"rotate-180":""}`,children:"▼"})]})]}),b&&A.jsxs("div",{className:"px-6 sm:px-8 pb-8 pt-2 border-t border-white/10 space-y-6 text-sm text-zinc-300",children:[A.jsx("p",{className:"text-zinc-400 italic text-xs leading-relaxed border-l-2 border-teal-400/50 pl-3",children:g.summary}),g.content.map((T,N)=>A.jsxs("div",{className:"space-y-4 pt-2",children:[A.jsxs("h3",{className:"text-base font-semibold text-white tracking-tight flex items-center gap-2",children:[A.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_6px_rgba(45,212,191,0.8)]"}),T.heading]}),T.paragraphs.map((S,_)=>A.jsx("p",{className:"leading-relaxed text-zinc-300 font-normal",children:S},_)),T.specs&&T.specs.length>0&&A.jsx("div",{className:"bg-black/60 rounded-2xl border border-white/10 overflow-hidden my-4",children:A.jsxs("table",{className:"w-full text-xs text-left",children:[A.jsx("thead",{className:"bg-white/[0.04] text-zinc-400 font-mono border-b border-white/10",children:A.jsxs("tr",{children:[A.jsx("th",{className:"py-2.5 px-4",children:"Parameter / Property"}),A.jsx("th",{className:"py-2.5 px-4",children:"Requirement / Value"}),A.jsx("th",{className:"py-2.5 px-4",children:"Implementation Notes"})]})}),A.jsx("tbody",{className:"divide-y divide-white/5 font-sans",children:T.specs.map((S,_)=>A.jsxs("tr",{className:"hover:bg-white/[0.02]",children:[A.jsx("td",{className:"py-2.5 px-4 font-medium text-white",children:S.label}),A.jsx("td",{className:"py-2.5 px-4 font-mono text-teal-300 font-semibold",children:S.value}),A.jsx("td",{className:"py-2.5 px-4 text-zinc-400",children:S.note||"—"})]},_))})]})}),T.bulletPoints&&T.bulletPoints.length>0&&A.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 my-3",children:T.bulletPoints.map((S,_)=>A.jsxs("div",{className:"p-4 bg-white/[0.02] border border-white/10 rounded-2xl space-y-1",children:[A.jsxs("h4",{className:"font-semibold text-zinc-200 text-xs flex items-center gap-1.5",children:[A.jsx("span",{className:"text-teal-400 font-bold",children:"▪"}),S.title]}),A.jsx("p",{className:"text-xs text-zinc-400 leading-relaxed",children:S.desc})]},_))}),T.callout&&A.jsxs("div",{className:"p-4 bg-teal-950/20 border border-teal-400/30 rounded-2xl text-xs text-teal-200 flex items-start gap-2.5 my-3 shadow-[0_0_20px_rgba(45,212,191,0.08)]",children:[A.jsx(r_,{className:"w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5"}),A.jsx("p",{className:"leading-relaxed",children:T.callout.text})]})]},N))]})]},g.id)})})]})};function f2(){const[o,e]=ct.useState("website"),[i,s]=ct.useState(!1),[l,c]=ct.useState({roughness:.12,metalness:.1,transmission:.92,ior:1.52,thickness:1.4,chromaticAberration:.04,distortion:.28,wireframe:!1,colorScheme:"obsidian",speed:1,audioReactivity:1}),d=()=>{const p=Y_.toggle();s(p),c(m=>({...m,audioReactivity:p?2.2:1,speed:p?1.4:1}))};return A.jsxs("div",{className:"min-h-screen bg-[#050505] text-[#f0f0f0] antialiased font-sans selection:bg-teal-500/30 selection:text-teal-200",children:[A.jsx(VS,{viewMode:o,onViewModeChange:e,isAudioPlaying:i,onToggleAudio:d}),o==="website"&&A.jsx("main",{className:"w-full",children:A.jsx($x,{onOpenPRD:()=>e("prd"),materialConfig:l,onMaterialChange:c})}),o==="prd"&&A.jsx("main",{className:"min-h-screen pt-20 pb-20 bg-[#050505]",children:A.jsx(e_,{})}),o==="split"&&A.jsxs("main",{className:"min-h-screen pt-16 flex flex-col lg:flex-row h-screen overflow-hidden",children:[A.jsx("div",{className:"flex-1 h-full overflow-y-auto border-r border-white/10 bg-[#050505]",children:A.jsx($x,{onOpenPRD:()=>e("prd"),materialConfig:l,onMaterialChange:c})}),A.jsx("div",{className:"flex-1 h-full overflow-y-auto bg-[#050505] p-4 lg:p-6 border-l border-white/10",children:A.jsx(e_,{})})]})]})}rS.createRoot(document.getElementById("root")).render(A.jsx(ct.StrictMode,{children:A.jsx(f2,{})}));
