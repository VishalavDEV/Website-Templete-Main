(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const C of document.querySelectorAll('link[rel="modulepreload"]'))d(C);new MutationObserver(C=>{for(const U of C)if(U.type==="childList")for(const V of U.addedNodes)V.tagName==="LINK"&&V.rel==="modulepreload"&&d(V)}).observe(document,{childList:!0,subtree:!0});function E(C){const U={};return C.integrity&&(U.integrity=C.integrity),C.referrerPolicy&&(U.referrerPolicy=C.referrerPolicy),C.crossOrigin==="use-credentials"?U.credentials="include":C.crossOrigin==="anonymous"?U.credentials="omit":U.credentials="same-origin",U}function d(C){if(C.ep)return;C.ep=!0;const U=E(C);fetch(C.href,U)}})();var ou={exports:{}},zn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd;function hp(){if(zd)return zn;zd=1;var g=Symbol.for("react.transitional.element"),A=Symbol.for("react.fragment");function E(d,C,U){var V=null;if(U!==void 0&&(V=""+U),C.key!==void 0&&(V=""+C.key),"key"in C){U={};for(var le in C)le!=="key"&&(U[le]=C[le])}else U=C;return C=U.ref,{$$typeof:g,type:d,key:V,ref:C!==void 0?C:null,props:U}}return zn.Fragment=A,zn.jsx=E,zn.jsxs=E,zn}var Ed;function pp(){return Ed||(Ed=1,ou.exports=hp()),ou.exports}var c=pp(),ru={exports:{}},q={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ad;function gp(){if(Ad)return q;Ad=1;var g=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),V=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),B=Symbol.for("react.activity"),w=Symbol.iterator;function ve(f){return f===null||typeof f!="object"?null:(f=w&&f[w]||f["@@iterator"],typeof f=="function"?f:null)}var Ee={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ne=Object.assign,ba={};function qe(f,z,O){this.props=f,this.context=z,this.refs=ba,this.updater=O||Ee}qe.prototype.isReactComponent={},qe.prototype.setState=function(f,z){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,z,"setState")},qe.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function Fa(){}Fa.prototype=qe.prototype;function ke(f,z,O){this.props=f,this.context=z,this.refs=ba,this.updater=O||Ee}var oa=ke.prototype=new Fa;oa.constructor=ke,Ne(oa,qe.prototype),oa.isPureReactComponent=!0;var Ea=Array.isArray;function Xe(){}var F={H:null,A:null,T:null,S:null},Qe=Object.prototype.hasOwnProperty;function Aa(f,z,O){var R=O.ref;return{$$typeof:g,type:f,key:z,ref:R!==void 0?R:null,props:O}}function Qt(f,z){return Aa(f.type,z,f.props)}function Ta(f){return typeof f=="object"&&f!==null&&f.$$typeof===g}function Ve(f){var z={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function(O){return z[O]})}var St=/\/+/g;function Ra(f,z){return typeof f=="object"&&f!==null&&f.key!=null?Ve(""+f.key):z.toString(36)}function Na(f){switch(f.status){case"fulfilled":return f.value;case"rejected":throw f.reason;default:switch(typeof f.status=="string"?f.then(Xe,Xe):(f.status="pending",f.then(function(z){f.status==="pending"&&(f.status="fulfilled",f.value=z)},function(z){f.status==="pending"&&(f.status="rejected",f.reason=z)})),f.status){case"fulfilled":return f.value;case"rejected":throw f.reason}}throw f}function N(f,z,O,R,L){var Z=typeof f;(Z==="undefined"||Z==="boolean")&&(f=null);var ne=!1;if(f===null)ne=!0;else switch(Z){case"bigint":case"string":case"number":ne=!0;break;case"object":switch(f.$$typeof){case g:case A:ne=!0;break;case G:return ne=f._init,N(ne(f._payload),z,O,R,L)}}if(ne)return L=L(f),ne=R===""?"."+Ra(f,0):R,Ea(L)?(O="",ne!=null&&(O=ne.replace(St,"$&/")+"/"),N(L,z,O,"",function(Cl){return Cl})):L!=null&&(Ta(L)&&(L=Qt(L,O+(L.key==null||f&&f.key===L.key?"":(""+L.key).replace(St,"$&/")+"/")+ne)),z.push(L)),1;ne=0;var Ge=R===""?".":R+":";if(Ea(f))for(var je=0;je<f.length;je++)R=f[je],Z=Ge+Ra(R,je),ne+=N(R,z,O,Z,L);else if(je=ve(f),typeof je=="function")for(f=je.call(f),je=0;!(R=f.next()).done;)R=R.value,Z=Ge+Ra(R,je++),ne+=N(R,z,O,Z,L);else if(Z==="object"){if(typeof f.then=="function")return N(Na(f),z,O,R,L);throw z=String(f),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return ne}function T(f,z,O){if(f==null)return f;var R=[],L=0;return N(f,R,"","",function(Z){return z.call(O,Z,L++)}),R}function Y(f){if(f._status===-1){var z=f._result;z=z(),z.then(function(O){(f._status===0||f._status===-1)&&(f._status=1,f._result=O)},function(O){(f._status===0||f._status===-1)&&(f._status=2,f._result=O)}),f._status===-1&&(f._status=0,f._result=z)}if(f._status===1)return f._result.default;throw f._result}var se=typeof reportError=="function"?reportError:function(f){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof f=="object"&&f!==null&&typeof f.message=="string"?String(f.message):String(f),error:f});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",f);return}console.error(f)},de={map:T,forEach:function(f,z,O){T(f,function(){z.apply(this,arguments)},O)},count:function(f){var z=0;return T(f,function(){z++}),z},toArray:function(f){return T(f,function(z){return z})||[]},only:function(f){if(!Ta(f))throw Error("React.Children.only expected to receive a single React element child.");return f}};return q.Activity=B,q.Children=de,q.Component=qe,q.Fragment=E,q.Profiler=C,q.PureComponent=ke,q.StrictMode=d,q.Suspense=M,q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,q.__COMPILER_RUNTIME={__proto__:null,c:function(f){return F.H.useMemoCache(f)}},q.cache=function(f){return function(){return f.apply(null,arguments)}},q.cacheSignal=function(){return null},q.cloneElement=function(f,z,O){if(f==null)throw Error("The argument must be a React element, but you passed "+f+".");var R=Ne({},f.props),L=f.key;if(z!=null)for(Z in z.key!==void 0&&(L=""+z.key),z)!Qe.call(z,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&z.ref===void 0||(R[Z]=z[Z]);var Z=arguments.length-2;if(Z===1)R.children=O;else if(1<Z){for(var ne=Array(Z),Ge=0;Ge<Z;Ge++)ne[Ge]=arguments[Ge+2];R.children=ne}return Aa(f.type,L,R)},q.createContext=function(f){return f={$$typeof:V,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null},f.Provider=f,f.Consumer={$$typeof:U,_context:f},f},q.createElement=function(f,z,O){var R,L={},Z=null;if(z!=null)for(R in z.key!==void 0&&(Z=""+z.key),z)Qe.call(z,R)&&R!=="key"&&R!=="__self"&&R!=="__source"&&(L[R]=z[R]);var ne=arguments.length-2;if(ne===1)L.children=O;else if(1<ne){for(var Ge=Array(ne),je=0;je<ne;je++)Ge[je]=arguments[je+2];L.children=Ge}if(f&&f.defaultProps)for(R in ne=f.defaultProps,ne)L[R]===void 0&&(L[R]=ne[R]);return Aa(f,Z,L)},q.createRef=function(){return{current:null}},q.forwardRef=function(f){return{$$typeof:le,render:f}},q.isValidElement=Ta,q.lazy=function(f){return{$$typeof:G,_payload:{_status:-1,_result:f},_init:Y}},q.memo=function(f,z){return{$$typeof:y,type:f,compare:z===void 0?null:z}},q.startTransition=function(f){var z=F.T,O={};F.T=O;try{var R=f(),L=F.S;L!==null&&L(O,R),typeof R=="object"&&R!==null&&typeof R.then=="function"&&R.then(Xe,se)}catch(Z){se(Z)}finally{z!==null&&O.types!==null&&(z.types=O.types),F.T=z}},q.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},q.use=function(f){return F.H.use(f)},q.useActionState=function(f,z,O){return F.H.useActionState(f,z,O)},q.useCallback=function(f,z){return F.H.useCallback(f,z)},q.useContext=function(f){return F.H.useContext(f)},q.useDebugValue=function(){},q.useDeferredValue=function(f,z){return F.H.useDeferredValue(f,z)},q.useEffect=function(f,z){return F.H.useEffect(f,z)},q.useEffectEvent=function(f){return F.H.useEffectEvent(f)},q.useId=function(){return F.H.useId()},q.useImperativeHandle=function(f,z,O){return F.H.useImperativeHandle(f,z,O)},q.useInsertionEffect=function(f,z){return F.H.useInsertionEffect(f,z)},q.useLayoutEffect=function(f,z){return F.H.useLayoutEffect(f,z)},q.useMemo=function(f,z){return F.H.useMemo(f,z)},q.useOptimistic=function(f,z){return F.H.useOptimistic(f,z)},q.useReducer=function(f,z,O){return F.H.useReducer(f,z,O)},q.useRef=function(f){return F.H.useRef(f)},q.useState=function(f){return F.H.useState(f)},q.useSyncExternalStore=function(f,z,O){return F.H.useSyncExternalStore(f,z,O)},q.useTransition=function(){return F.H.useTransition()},q.version="19.2.8",q}var Td;function vu(){return Td||(Td=1,ru.exports=gp()),ru.exports}var be=vu(),fu={exports:{}},En={},du={exports:{}},mu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Md;function vp(){return Md||(Md=1,(function(g){function A(N,T){var Y=N.length;N.push(T);e:for(;0<Y;){var se=Y-1>>>1,de=N[se];if(0<C(de,T))N[se]=T,N[Y]=de,Y=se;else break e}}function E(N){return N.length===0?null:N[0]}function d(N){if(N.length===0)return null;var T=N[0],Y=N.pop();if(Y!==T){N[0]=Y;e:for(var se=0,de=N.length,f=de>>>1;se<f;){var z=2*(se+1)-1,O=N[z],R=z+1,L=N[R];if(0>C(O,Y))R<de&&0>C(L,O)?(N[se]=L,N[R]=Y,se=R):(N[se]=O,N[z]=Y,se=z);else if(R<de&&0>C(L,Y))N[se]=L,N[R]=Y,se=R;else break e}}return T}function C(N,T){var Y=N.sortIndex-T.sortIndex;return Y!==0?Y:N.id-T.id}if(g.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var U=performance;g.unstable_now=function(){return U.now()}}else{var V=Date,le=V.now();g.unstable_now=function(){return V.now()-le}}var M=[],y=[],G=1,B=null,w=3,ve=!1,Ee=!1,Ne=!1,ba=!1,qe=typeof setTimeout=="function"?setTimeout:null,Fa=typeof clearTimeout=="function"?clearTimeout:null,ke=typeof setImmediate<"u"?setImmediate:null;function oa(N){for(var T=E(y);T!==null;){if(T.callback===null)d(y);else if(T.startTime<=N)d(y),T.sortIndex=T.expirationTime,A(M,T);else break;T=E(y)}}function Ea(N){if(Ne=!1,oa(N),!Ee)if(E(M)!==null)Ee=!0,Xe||(Xe=!0,Ve());else{var T=E(y);T!==null&&Na(Ea,T.startTime-N)}}var Xe=!1,F=-1,Qe=5,Aa=-1;function Qt(){return ba?!0:!(g.unstable_now()-Aa<Qe)}function Ta(){if(ba=!1,Xe){var N=g.unstable_now();Aa=N;var T=!0;try{e:{Ee=!1,Ne&&(Ne=!1,Fa(F),F=-1),ve=!0;var Y=w;try{a:{for(oa(N),B=E(M);B!==null&&!(B.expirationTime>N&&Qt());){var se=B.callback;if(typeof se=="function"){B.callback=null,w=B.priorityLevel;var de=se(B.expirationTime<=N);if(N=g.unstable_now(),typeof de=="function"){B.callback=de,oa(N),T=!0;break a}B===E(M)&&d(M),oa(N)}else d(M);B=E(M)}if(B!==null)T=!0;else{var f=E(y);f!==null&&Na(Ea,f.startTime-N),T=!1}}break e}finally{B=null,w=Y,ve=!1}T=void 0}}finally{T?Ve():Xe=!1}}}var Ve;if(typeof ke=="function")Ve=function(){ke(Ta)};else if(typeof MessageChannel<"u"){var St=new MessageChannel,Ra=St.port2;St.port1.onmessage=Ta,Ve=function(){Ra.postMessage(null)}}else Ve=function(){qe(Ta,0)};function Na(N,T){F=qe(function(){N(g.unstable_now())},T)}g.unstable_IdlePriority=5,g.unstable_ImmediatePriority=1,g.unstable_LowPriority=4,g.unstable_NormalPriority=3,g.unstable_Profiling=null,g.unstable_UserBlockingPriority=2,g.unstable_cancelCallback=function(N){N.callback=null},g.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Qe=0<N?Math.floor(1e3/N):5},g.unstable_getCurrentPriorityLevel=function(){return w},g.unstable_next=function(N){switch(w){case 1:case 2:case 3:var T=3;break;default:T=w}var Y=w;w=T;try{return N()}finally{w=Y}},g.unstable_requestPaint=function(){ba=!0},g.unstable_runWithPriority=function(N,T){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Y=w;w=N;try{return T()}finally{w=Y}},g.unstable_scheduleCallback=function(N,T,Y){var se=g.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?se+Y:se):Y=se,N){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=Y+de,N={id:G++,callback:T,priorityLevel:N,startTime:Y,expirationTime:de,sortIndex:-1},Y>se?(N.sortIndex=Y,A(y,N),E(M)===null&&N===E(y)&&(Ne?(Fa(F),F=-1):Ne=!0,Na(Ea,Y-se))):(N.sortIndex=de,A(M,N),Ee||ve||(Ee=!0,Xe||(Xe=!0,Ve()))),N},g.unstable_shouldYield=Qt,g.unstable_wrapCallback=function(N){var T=w;return function(){var Y=w;w=T;try{return N.apply(this,arguments)}finally{w=Y}}}})(mu)),mu}var Od;function xp(){return Od||(Od=1,du.exports=vp()),du.exports}var hu={exports:{}},Ye={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cd;function yp(){if(Cd)return Ye;Cd=1;var g=vu();function A(M){var y="https://react.dev/errors/"+M;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var G=2;G<arguments.length;G++)y+="&args[]="+encodeURIComponent(arguments[G])}return"Minified React error #"+M+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function E(){}var d={d:{f:E,r:function(){throw Error(A(522))},D:E,C:E,L:E,m:E,X:E,S:E,M:E},p:0,findDOMNode:null},C=Symbol.for("react.portal");function U(M,y,G){var B=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:C,key:B==null?null:""+B,children:M,containerInfo:y,implementation:G}}var V=g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function le(M,y){if(M==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Ye.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Ye.createPortal=function(M,y){var G=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(A(299));return U(M,y,null,G)},Ye.flushSync=function(M){var y=V.T,G=d.p;try{if(V.T=null,d.p=2,M)return M()}finally{V.T=y,d.p=G,d.d.f()}},Ye.preconnect=function(M,y){typeof M=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,d.d.C(M,y))},Ye.prefetchDNS=function(M){typeof M=="string"&&d.d.D(M)},Ye.preinit=function(M,y){if(typeof M=="string"&&y&&typeof y.as=="string"){var G=y.as,B=le(G,y.crossOrigin),w=typeof y.integrity=="string"?y.integrity:void 0,ve=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;G==="style"?d.d.S(M,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:B,integrity:w,fetchPriority:ve}):G==="script"&&d.d.X(M,{crossOrigin:B,integrity:w,fetchPriority:ve,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Ye.preinitModule=function(M,y){if(typeof M=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var G=le(y.as,y.crossOrigin);d.d.M(M,{crossOrigin:G,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&d.d.M(M)},Ye.preload=function(M,y){if(typeof M=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var G=y.as,B=le(G,y.crossOrigin);d.d.L(M,G,{crossOrigin:B,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Ye.preloadModule=function(M,y){if(typeof M=="string")if(y){var G=le(y.as,y.crossOrigin);d.d.m(M,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:G,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else d.d.m(M)},Ye.requestFormReset=function(M){d.d.r(M)},Ye.unstable_batchedUpdates=function(M,y){return M(y)},Ye.useFormState=function(M,y,G){return V.H.useFormState(M,y,G)},Ye.useFormStatus=function(){return V.H.useHostTransitionStatus()},Ye.version="19.2.8",Ye}var Dd;function bp(){if(Dd)return hu.exports;Dd=1;function g(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g)}catch(A){console.error(A)}}return g(),hu.exports=yp(),hu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd;function Np(){if(Rd)return En;Rd=1;var g=xp(),A=vu(),E=bp();function d(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function C(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function U(e){var a=e,t=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(t=a.return),e=a.return;while(e)}return a.tag===3?t:null}function V(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function le(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function M(e){if(U(e)!==e)throw Error(d(188))}function y(e){var a=e.alternate;if(!a){if(a=U(e),a===null)throw Error(d(188));return a!==e?null:e}for(var t=e,l=a;;){var n=t.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){t=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===t)return M(n),e;if(i===l)return M(n),a;i=i.sibling}throw Error(d(188))}if(t.return!==l.return)t=n,l=i;else{for(var s=!1,u=n.child;u;){if(u===t){s=!0,t=n,l=i;break}if(u===l){s=!0,l=n,t=i;break}u=u.sibling}if(!s){for(u=i.child;u;){if(u===t){s=!0,t=i,l=n;break}if(u===l){s=!0,l=i,t=n;break}u=u.sibling}if(!s)throw Error(d(189))}}if(t.alternate!==l)throw Error(d(190))}if(t.tag!==3)throw Error(d(188));return t.stateNode.current===t?e:a}function G(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=G(e),a!==null)return a;e=e.sibling}return null}var B=Object.assign,w=Symbol.for("react.element"),ve=Symbol.for("react.transitional.element"),Ee=Symbol.for("react.portal"),Ne=Symbol.for("react.fragment"),ba=Symbol.for("react.strict_mode"),qe=Symbol.for("react.profiler"),Fa=Symbol.for("react.consumer"),ke=Symbol.for("react.context"),oa=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Xe=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),Qe=Symbol.for("react.lazy"),Aa=Symbol.for("react.activity"),Qt=Symbol.for("react.memo_cache_sentinel"),Ta=Symbol.iterator;function Ve(e){return e===null||typeof e!="object"?null:(e=Ta&&e[Ta]||e["@@iterator"],typeof e=="function"?e:null)}var St=Symbol.for("react.client.reference");function Ra(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===St?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ne:return"Fragment";case qe:return"Profiler";case ba:return"StrictMode";case Ea:return"Suspense";case Xe:return"SuspenseList";case Aa:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Ee:return"Portal";case ke:return e.displayName||"Context";case Fa:return(e._context.displayName||"Context")+".Consumer";case oa:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return a=e.displayName||null,a!==null?a:Ra(e.type)||"Memo";case Qe:a=e._payload,e=e._init;try{return Ra(e(a))}catch{}}return null}var Na=Array.isArray,N=A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=E.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},se=[],de=-1;function f(e){return{current:e}}function z(e){0>de||(e.current=se[de],se[de]=null,de--)}function O(e,a){de++,se[de]=e.current,e.current=a}var R=f(null),L=f(null),Z=f(null),ne=f(null);function Ge(e,a){switch(O(Z,a),O(L,e),O(R,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?Kf(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=Kf(a),e=Jf(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}z(R),O(R,e)}function je(){z(R),z(L),z(Z)}function Cl(e){e.memoizedState!==null&&O(ne,e);var a=R.current,t=Jf(a,e.type);a!==t&&(O(L,e),O(R,t))}function An(e){L.current===e&&(z(R),z(L)),ne.current===e&&(z(ne),bn._currentValue=Y)}var Vi,Nu;function zt(e){if(Vi===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);Vi=a&&a[1]||"",Nu=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Vi+e+Nu}var Zi=!1;function Ki(e,a){if(!e||Zi)return"";Zi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(x){var v=x}Reflect.construct(e,[],S)}else{try{S.call()}catch(x){v=x}e.call(S.prototype)}}else{try{throw Error()}catch(x){v=x}(S=e())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(x){if(x&&v&&typeof x.stack=="string")return[x.stack,v.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),s=i[0],u=i[1];if(s&&u){var o=s.split(`
`),p=u.split(`
`);for(n=l=0;l<o.length&&!o[l].includes("DetermineComponentFrameRoot");)l++;for(;n<p.length&&!p[n].includes("DetermineComponentFrameRoot");)n++;if(l===o.length||n===p.length)for(l=o.length-1,n=p.length-1;1<=l&&0<=n&&o[l]!==p[n];)n--;for(;1<=l&&0<=n;l--,n--)if(o[l]!==p[n]){if(l!==1||n!==1)do if(l--,n--,0>n||o[l]!==p[n]){var b=`
`+o[l].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),b}while(1<=l&&0<=n);break}}}finally{Zi=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?zt(t):""}function Vd(e,a){switch(e.tag){case 26:case 27:case 5:return zt(e.type);case 16:return zt("Lazy");case 13:return e.child!==a&&a!==null?zt("Suspense Fallback"):zt("Suspense");case 19:return zt("SuspenseList");case 0:case 15:return Ki(e.type,!1);case 11:return Ki(e.type.render,!1);case 1:return Ki(e.type,!0);case 31:return zt("Activity");default:return""}}function ju(e){try{var a="",t=null;do a+=Vd(e,t),t=e,e=e.return;while(e);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ji=Object.prototype.hasOwnProperty,Wi=g.unstable_scheduleCallback,$i=g.unstable_cancelCallback,Zd=g.unstable_shouldYield,Kd=g.unstable_requestPaint,Pe=g.unstable_now,Jd=g.unstable_getCurrentPriorityLevel,Su=g.unstable_ImmediatePriority,zu=g.unstable_UserBlockingPriority,Tn=g.unstable_NormalPriority,Wd=g.unstable_LowPriority,Eu=g.unstable_IdlePriority,$d=g.log,Fd=g.unstable_setDisableYieldValue,Dl=null,ea=null;function Ia(e){if(typeof $d=="function"&&Fd(e),ea&&typeof ea.setStrictMode=="function")try{ea.setStrictMode(Dl,e)}catch{}}var aa=Math.clz32?Math.clz32:em,Id=Math.log,Pd=Math.LN2;function em(e){return e>>>=0,e===0?32:31-(Id(e)/Pd|0)|0}var Mn=256,On=262144,Cn=4194304;function Et(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dn(e,a,t){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var u=l&134217727;return u!==0?(l=u&~i,l!==0?n=Et(l):(s&=u,s!==0?n=Et(s):t||(t=u&~e,t!==0&&(n=Et(t))))):(u=l&~i,u!==0?n=Et(u):s!==0?n=Et(s):t||(t=l&~e,t!==0&&(n=Et(t)))),n===0?0:a!==0&&a!==n&&(a&i)===0&&(i=n&-n,t=a&-a,i>=t||i===32&&(t&4194048)!==0)?a:n}function Rl(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function am(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Au(){var e=Cn;return Cn<<=1,(Cn&62914560)===0&&(Cn=4194304),e}function Fi(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function _l(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function tm(e,a,t,l,n,i){var s=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var u=e.entanglements,o=e.expirationTimes,p=e.hiddenUpdates;for(t=s&~t;0<t;){var b=31-aa(t),S=1<<b;u[b]=0,o[b]=-1;var v=p[b];if(v!==null)for(p[b]=null,b=0;b<v.length;b++){var x=v[b];x!==null&&(x.lane&=-536870913)}t&=~S}l!==0&&Tu(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(s&~a))}function Tu(e,a,t){e.pendingLanes|=a,e.suspendedLanes&=~a;var l=31-aa(a);e.entangledLanes|=a,e.entanglements[l]=e.entanglements[l]|1073741824|t&261930}function Mu(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var l=31-aa(t),n=1<<l;n&a|e[l]&a&&(e[l]|=a),t&=~n}}function Ou(e,a){var t=a&-a;return t=(t&42)!==0?1:Ii(t),(t&(e.suspendedLanes|a))!==0?0:t}function Ii(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Pi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Cu(){var e=T.p;return e!==0?e:(e=window.event,e===void 0?32:vd(e.type))}function Du(e,a){var t=T.p;try{return T.p=e,a()}finally{T.p=t}}var Pa=Math.random().toString(36).slice(2),_e="__reactFiber$"+Pa,Ze="__reactProps$"+Pa,Vt="__reactContainer$"+Pa,ec="__reactEvents$"+Pa,lm="__reactListeners$"+Pa,nm="__reactHandles$"+Pa,Ru="__reactResources$"+Pa,Ul="__reactMarker$"+Pa;function ac(e){delete e[_e],delete e[Ze],delete e[ec],delete e[lm],delete e[nm]}function Zt(e){var a=e[_e];if(a)return a;for(var t=e.parentNode;t;){if(a=t[Vt]||t[_e]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=ad(e);e!==null;){if(t=e[_e])return t;e=ad(e)}return a}e=t,t=e.parentNode}return null}function Kt(e){if(e=e[_e]||e[Vt]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function Hl(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(d(33))}function Jt(e){var a=e[Ru];return a||(a=e[Ru]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function De(e){e[Ul]=!0}var _u=new Set,Uu={};function At(e,a){Wt(e,a),Wt(e+"Capture",a)}function Wt(e,a){for(Uu[e]=a,e=0;e<a.length;e++)_u.add(a[e])}var im=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hu={},Bu={};function cm(e){return Ji.call(Bu,e)?!0:Ji.call(Hu,e)?!1:im.test(e)?Bu[e]=!0:(Hu[e]=!0,!1)}function Rn(e,a,t){if(cm(a))if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+t)}}function _n(e,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+t)}}function _a(e,a,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(a,t,""+l)}}function ra(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wu(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function sm(e,a,t){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return n.call(this)},set:function(s){t=""+s,i.call(this,s)}}),Object.defineProperty(e,a,{enumerable:l.enumerable}),{getValue:function(){return t},setValue:function(s){t=""+s},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function tc(e){if(!e._valueTracker){var a=wu(e)?"checked":"value";e._valueTracker=sm(e,a,""+e[a])}}function ku(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),l="";return e&&(l=wu(e)?e.checked?"true":"false":e.value),e=l,e!==t?(a.setValue(e),!0):!1}function Un(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var um=/[\n"\\]/g;function fa(e){return e.replace(um,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function lc(e,a,t,l,n,i,s,u){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),a!=null?s==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+ra(a)):e.value!==""+ra(a)&&(e.value=""+ra(a)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),a!=null?nc(e,s,ra(a)):t!=null?nc(e,s,ra(t)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+ra(u):e.removeAttribute("name")}function Yu(e,a,t,l,n,i,s,u){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),a!=null||t!=null){if(!(i!=="submit"&&i!=="reset"||a!=null)){tc(e);return}t=t!=null?""+ra(t):"",a=a!=null?""+ra(a):t,u||a===e.value||(e.value=a),e.defaultValue=a}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=u?e.checked:!!l,e.defaultChecked=!!l,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),tc(e)}function nc(e,a,t){a==="number"&&Un(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function $t(e,a,t,l){if(e=e.options,a){a={};for(var n=0;n<t.length;n++)a["$"+t[n]]=!0;for(t=0;t<e.length;t++)n=a.hasOwnProperty("$"+e[t].value),e[t].selected!==n&&(e[t].selected=n),n&&l&&(e[t].defaultSelected=!0)}else{for(t=""+ra(t),a=null,n=0;n<e.length;n++){if(e[n].value===t){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}a!==null||e[n].disabled||(a=e[n])}a!==null&&(a.selected=!0)}}function qu(e,a,t){if(a!=null&&(a=""+ra(a),a!==e.value&&(e.value=a),t==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=t!=null?""+ra(t):""}function Gu(e,a,t,l){if(a==null){if(l!=null){if(t!=null)throw Error(d(92));if(Na(l)){if(1<l.length)throw Error(d(93));l=l[0]}t=l}t==null&&(t=""),a=t}t=ra(a),e.defaultValue=t,l=e.textContent,l===t&&l!==""&&l!==null&&(e.value=l),tc(e)}function Ft(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=a;return}}e.textContent=a}var om=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Lu(e,a,t){var l=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?l?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":l?e.setProperty(a,t):typeof t!="number"||t===0||om.has(a)?a==="float"?e.cssFloat=t:e[a]=(""+t).trim():e[a]=t+"px"}function Xu(e,a,t){if(a!=null&&typeof a!="object")throw Error(d(62));if(e=e.style,t!=null){for(var l in t)!t.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in a)l=a[n],a.hasOwnProperty(n)&&t[n]!==l&&Lu(e,n,l)}else for(var i in a)a.hasOwnProperty(i)&&Lu(e,i,a[i])}function ic(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Hn(e){return fm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ua(){}var cc=null;function sc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var It=null,Pt=null;function Qu(e){var a=Kt(e);if(a&&(e=a.stateNode)){var t=e[Ze]||null;e:switch(e=a.stateNode,a.type){case"input":if(lc(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+fa(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var l=t[a];if(l!==e&&l.form===e.form){var n=l[Ze]||null;if(!n)throw Error(d(90));lc(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(a=0;a<t.length;a++)l=t[a],l.form===e.form&&ku(l)}break e;case"textarea":qu(e,t.value,t.defaultValue);break e;case"select":a=t.value,a!=null&&$t(e,!!t.multiple,a,!1)}}}var uc=!1;function Vu(e,a,t){if(uc)return e(a,t);uc=!0;try{var l=e(a);return l}finally{if(uc=!1,(It!==null||Pt!==null)&&(ji(),It&&(a=It,e=Pt,Pt=It=null,Qu(a),e)))for(a=0;a<e.length;a++)Qu(e[a])}}function Bl(e,a){var t=e.stateNode;if(t===null)return null;var l=t[Ze]||null;if(l===null)return null;t=l[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(d(231,a,typeof t));return t}var Ha=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oc=!1;if(Ha)try{var wl={};Object.defineProperty(wl,"passive",{get:function(){oc=!0}}),window.addEventListener("test",wl,wl),window.removeEventListener("test",wl,wl)}catch{oc=!1}var et=null,rc=null,Bn=null;function Zu(){if(Bn)return Bn;var e,a=rc,t=a.length,l,n="value"in et?et.value:et.textContent,i=n.length;for(e=0;e<t&&a[e]===n[e];e++);var s=t-e;for(l=1;l<=s&&a[t-l]===n[i-l];l++);return Bn=n.slice(e,1<l?1-l:void 0)}function wn(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function kn(){return!0}function Ku(){return!1}function Ke(e){function a(t,l,n,i,s){this._reactName=t,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?kn:Ku,this.isPropagationStopped=Ku,this}return B(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=kn)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=kn)},persist:function(){},isPersistent:kn}),a}var Tt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yn=Ke(Tt),kl=B({},Tt,{view:0,detail:0}),dm=Ke(kl),fc,dc,Yl,qn=B({},kl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yl&&(Yl&&e.type==="mousemove"?(fc=e.screenX-Yl.screenX,dc=e.screenY-Yl.screenY):dc=fc=0,Yl=e),fc)},movementY:function(e){return"movementY"in e?e.movementY:dc}}),Ju=Ke(qn),mm=B({},qn,{dataTransfer:0}),hm=Ke(mm),pm=B({},kl,{relatedTarget:0}),mc=Ke(pm),gm=B({},Tt,{animationName:0,elapsedTime:0,pseudoElement:0}),vm=Ke(gm),xm=B({},Tt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ym=Ke(xm),bm=B({},Tt,{data:0}),Wu=Ke(bm),Nm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zm(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=Sm[e])?!!a[e]:!1}function hc(){return zm}var Em=B({},kl,{key:function(e){if(e.key){var a=Nm[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=wn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hc,charCode:function(e){return e.type==="keypress"?wn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Am=Ke(Em),Tm=B({},qn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$u=Ke(Tm),Mm=B({},kl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hc}),Om=Ke(Mm),Cm=B({},Tt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dm=Ke(Cm),Rm=B({},qn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_m=Ke(Rm),Um=B({},Tt,{newState:0,oldState:0}),Hm=Ke(Um),Bm=[9,13,27,32],pc=Ha&&"CompositionEvent"in window,ql=null;Ha&&"documentMode"in document&&(ql=document.documentMode);var wm=Ha&&"TextEvent"in window&&!ql,Fu=Ha&&(!pc||ql&&8<ql&&11>=ql),Iu=" ",Pu=!1;function eo(e,a){switch(e){case"keyup":return Bm.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ao(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var el=!1;function km(e,a){switch(e){case"compositionend":return ao(a);case"keypress":return a.which!==32?null:(Pu=!0,Iu);case"textInput":return e=a.data,e===Iu&&Pu?null:e;default:return null}}function Ym(e,a){if(el)return e==="compositionend"||!pc&&eo(e,a)?(e=Zu(),Bn=rc=et=null,el=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Fu&&a.locale!=="ko"?null:a.data;default:return null}}var qm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function to(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!qm[e.type]:a==="textarea"}function lo(e,a,t,l){It?Pt?Pt.push(l):Pt=[l]:It=l,a=Oi(a,"onChange"),0<a.length&&(t=new Yn("onChange","change",null,t,l),e.push({event:t,listeners:a}))}var Gl=null,Ll=null;function Gm(e){Gf(e,0)}function Gn(e){var a=Hl(e);if(ku(a))return e}function no(e,a){if(e==="change")return a}var io=!1;if(Ha){var gc;if(Ha){var vc="oninput"in document;if(!vc){var co=document.createElement("div");co.setAttribute("oninput","return;"),vc=typeof co.oninput=="function"}gc=vc}else gc=!1;io=gc&&(!document.documentMode||9<document.documentMode)}function so(){Gl&&(Gl.detachEvent("onpropertychange",uo),Ll=Gl=null)}function uo(e){if(e.propertyName==="value"&&Gn(Ll)){var a=[];lo(a,Ll,e,sc(e)),Vu(Gm,a)}}function Lm(e,a,t){e==="focusin"?(so(),Gl=a,Ll=t,Gl.attachEvent("onpropertychange",uo)):e==="focusout"&&so()}function Xm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gn(Ll)}function Qm(e,a){if(e==="click")return Gn(a)}function Vm(e,a){if(e==="input"||e==="change")return Gn(a)}function Zm(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var ta=typeof Object.is=="function"?Object.is:Zm;function Xl(e,a){if(ta(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var t=Object.keys(e),l=Object.keys(a);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var n=t[l];if(!Ji.call(a,n)||!ta(e[n],a[n]))return!1}return!0}function oo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ro(e,a){var t=oo(e);e=0;for(var l;t;){if(t.nodeType===3){if(l=e+t.textContent.length,e<=a&&l>=a)return{node:t,offset:a-e};e=l}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=oo(t)}}function fo(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?fo(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function mo(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Un(e.document);a instanceof e.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)e=a.contentWindow;else break;a=Un(e.document)}return a}function xc(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var Km=Ha&&"documentMode"in document&&11>=document.documentMode,al=null,yc=null,Ql=null,bc=!1;function ho(e,a,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;bc||al==null||al!==Un(l)||(l=al,"selectionStart"in l&&xc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ql&&Xl(Ql,l)||(Ql=l,l=Oi(yc,"onSelect"),0<l.length&&(a=new Yn("onSelect","select",null,a,t),e.push({event:a,listeners:l}),a.target=al)))}function Mt(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var tl={animationend:Mt("Animation","AnimationEnd"),animationiteration:Mt("Animation","AnimationIteration"),animationstart:Mt("Animation","AnimationStart"),transitionrun:Mt("Transition","TransitionRun"),transitionstart:Mt("Transition","TransitionStart"),transitioncancel:Mt("Transition","TransitionCancel"),transitionend:Mt("Transition","TransitionEnd")},Nc={},po={};Ha&&(po=document.createElement("div").style,"AnimationEvent"in window||(delete tl.animationend.animation,delete tl.animationiteration.animation,delete tl.animationstart.animation),"TransitionEvent"in window||delete tl.transitionend.transition);function Ot(e){if(Nc[e])return Nc[e];if(!tl[e])return e;var a=tl[e],t;for(t in a)if(a.hasOwnProperty(t)&&t in po)return Nc[e]=a[t];return e}var go=Ot("animationend"),vo=Ot("animationiteration"),xo=Ot("animationstart"),Jm=Ot("transitionrun"),Wm=Ot("transitionstart"),$m=Ot("transitioncancel"),yo=Ot("transitionend"),bo=new Map,jc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");jc.push("scrollEnd");function ja(e,a){bo.set(e,a),At(a,[e])}var Ln=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},da=[],ll=0,Sc=0;function Xn(){for(var e=ll,a=Sc=ll=0;a<e;){var t=da[a];da[a++]=null;var l=da[a];da[a++]=null;var n=da[a];da[a++]=null;var i=da[a];if(da[a++]=null,l!==null&&n!==null){var s=l.pending;s===null?n.next=n:(n.next=s.next,s.next=n),l.pending=n}i!==0&&No(t,n,i)}}function Qn(e,a,t,l){da[ll++]=e,da[ll++]=a,da[ll++]=t,da[ll++]=l,Sc|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function zc(e,a,t,l){return Qn(e,a,t,l),Vn(e)}function Ct(e,a){return Qn(e,null,null,a),Vn(e)}function No(e,a,t){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t);for(var n=!1,i=e.return;i!==null;)i.childLanes|=t,l=i.alternate,l!==null&&(l.childLanes|=t),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&a!==null&&(n=31-aa(t),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[a]:l.push(a),a.lane=t|536870912),i):null}function Vn(e){if(50<mn)throw mn=0,_s=null,Error(d(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var nl={};function Fm(e,a,t,l){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function la(e,a,t,l){return new Fm(e,a,t,l)}function Ec(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ba(e,a){var t=e.alternate;return t===null?(t=la(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function jo(e,a){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function Zn(e,a,t,l,n,i){var s=0;if(l=e,typeof e=="function")Ec(e)&&(s=1);else if(typeof e=="string")s=tp(e,t,R.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Aa:return e=la(31,t,a,n),e.elementType=Aa,e.lanes=i,e;case Ne:return Dt(t.children,n,i,a);case ba:s=8,n|=24;break;case qe:return e=la(12,t,a,n|2),e.elementType=qe,e.lanes=i,e;case Ea:return e=la(13,t,a,n),e.elementType=Ea,e.lanes=i,e;case Xe:return e=la(19,t,a,n),e.elementType=Xe,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ke:s=10;break e;case Fa:s=9;break e;case oa:s=11;break e;case F:s=14;break e;case Qe:s=16,l=null;break e}s=29,t=Error(d(130,e===null?"null":typeof e,"")),l=null}return a=la(s,t,a,n),a.elementType=e,a.type=l,a.lanes=i,a}function Dt(e,a,t,l){return e=la(7,e,l,a),e.lanes=t,e}function Ac(e,a,t){return e=la(6,e,null,a),e.lanes=t,e}function So(e){var a=la(18,null,null,0);return a.stateNode=e,a}function Tc(e,a,t){return a=la(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var zo=new WeakMap;function ma(e,a){if(typeof e=="object"&&e!==null){var t=zo.get(e);return t!==void 0?t:(a={value:e,source:a,stack:ju(a)},zo.set(e,a),a)}return{value:e,source:a,stack:ju(a)}}var il=[],cl=0,Kn=null,Vl=0,ha=[],pa=0,at=null,Ma=1,Oa="";function wa(e,a){il[cl++]=Vl,il[cl++]=Kn,Kn=e,Vl=a}function Eo(e,a,t){ha[pa++]=Ma,ha[pa++]=Oa,ha[pa++]=at,at=e;var l=Ma;e=Oa;var n=32-aa(l)-1;l&=~(1<<n),t+=1;var i=32-aa(a)+n;if(30<i){var s=n-n%5;i=(l&(1<<s)-1).toString(32),l>>=s,n-=s,Ma=1<<32-aa(a)+n|t<<n|l,Oa=i+e}else Ma=1<<i|t<<n|l,Oa=e}function Mc(e){e.return!==null&&(wa(e,1),Eo(e,1,0))}function Oc(e){for(;e===Kn;)Kn=il[--cl],il[cl]=null,Vl=il[--cl],il[cl]=null;for(;e===at;)at=ha[--pa],ha[pa]=null,Oa=ha[--pa],ha[pa]=null,Ma=ha[--pa],ha[pa]=null}function Ao(e,a){ha[pa++]=Ma,ha[pa++]=Oa,ha[pa++]=at,Ma=a.id,Oa=a.overflow,at=e}var Ue=null,he=null,I=!1,tt=null,ga=!1,Cc=Error(d(519));function lt(e){var a=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zl(ma(a,e)),Cc}function To(e){var a=e.stateNode,t=e.type,l=e.memoizedProps;switch(a[_e]=e,a[Ze]=l,t){case"dialog":J("cancel",a),J("close",a);break;case"iframe":case"object":case"embed":J("load",a);break;case"video":case"audio":for(t=0;t<pn.length;t++)J(pn[t],a);break;case"source":J("error",a);break;case"img":case"image":case"link":J("error",a),J("load",a);break;case"details":J("toggle",a);break;case"input":J("invalid",a),Yu(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":J("invalid",a);break;case"textarea":J("invalid",a),Gu(a,l.value,l.defaultValue,l.children)}t=l.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||l.suppressHydrationWarning===!0||Vf(a.textContent,t)?(l.popover!=null&&(J("beforetoggle",a),J("toggle",a)),l.onScroll!=null&&J("scroll",a),l.onScrollEnd!=null&&J("scrollend",a),l.onClick!=null&&(a.onclick=Ua),a=!0):a=!1,a||lt(e,!0)}function Mo(e){for(Ue=e.return;Ue;)switch(Ue.tag){case 5:case 31:case 13:ga=!1;return;case 27:case 3:ga=!0;return;default:Ue=Ue.return}}function sl(e){if(e!==Ue)return!1;if(!I)return Mo(e),I=!0,!1;var a=e.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Js(e.type,e.memoizedProps)),t=!t),t&&he&&lt(e),Mo(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));he=ed(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));he=ed(e)}else a===27?(a=he,vt(e.type)?(e=Ps,Ps=null,he=e):he=a):he=Ue?xa(e.stateNode.nextSibling):null;return!0}function Rt(){he=Ue=null,I=!1}function Dc(){var e=tt;return e!==null&&(Fe===null?Fe=e:Fe.push.apply(Fe,e),tt=null),e}function Zl(e){tt===null?tt=[e]:tt.push(e)}var Rc=f(null),_t=null,ka=null;function nt(e,a,t){O(Rc,a._currentValue),a._currentValue=t}function Ya(e){e._currentValue=Rc.current,z(Rc)}function _c(e,a,t){for(;e!==null;){var l=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),e===t)break;e=e.return}}function Uc(e,a,t,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var s=n.child;i=i.firstContext;e:for(;i!==null;){var u=i;i=n;for(var o=0;o<a.length;o++)if(u.context===a[o]){i.lanes|=t,u=i.alternate,u!==null&&(u.lanes|=t),_c(i.return,t,e),l||(s=null);break e}i=u.next}}else if(n.tag===18){if(s=n.return,s===null)throw Error(d(341));s.lanes|=t,i=s.alternate,i!==null&&(i.lanes|=t),_c(s,t,e),s=null}else s=n.child;if(s!==null)s.return=n;else for(s=n;s!==null;){if(s===e){s=null;break}if(n=s.sibling,n!==null){n.return=s.return,s=n;break}s=s.return}n=s}}function ul(e,a,t,l){e=null;for(var n=a,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var s=n.alternate;if(s===null)throw Error(d(387));if(s=s.memoizedProps,s!==null){var u=n.type;ta(n.pendingProps.value,s.value)||(e!==null?e.push(u):e=[u])}}else if(n===ne.current){if(s=n.alternate,s===null)throw Error(d(387));s.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(bn):e=[bn])}n=n.return}e!==null&&Uc(a,e,t,l),a.flags|=262144}function Jn(e){for(e=e.firstContext;e!==null;){if(!ta(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ut(e){_t=e,ka=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function He(e){return Oo(_t,e)}function Wn(e,a){return _t===null&&Ut(e),Oo(e,a)}function Oo(e,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},ka===null){if(e===null)throw Error(d(308));ka=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else ka=ka.next=a;return t}var Im=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(t,l){e.push(l)}};this.abort=function(){a.aborted=!0,e.forEach(function(t){return t()})}},Pm=g.unstable_scheduleCallback,eh=g.unstable_NormalPriority,Ae={$$typeof:ke,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hc(){return{controller:new Im,data:new Map,refCount:0}}function Kl(e){e.refCount--,e.refCount===0&&Pm(eh,function(){e.controller.abort()})}var Jl=null,Bc=0,ol=0,rl=null;function ah(e,a){if(Jl===null){var t=Jl=[];Bc=0,ol=Ys(),rl={status:"pending",value:void 0,then:function(l){t.push(l)}}}return Bc++,a.then(Co,Co),a}function Co(){if(--Bc===0&&Jl!==null){rl!==null&&(rl.status="fulfilled");var e=Jl;Jl=null,ol=0,rl=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function th(e,a){var t=[],l={status:"pending",value:null,reason:null,then:function(n){t.push(n)}};return e.then(function(){l.status="fulfilled",l.value=a;for(var n=0;n<t.length;n++)(0,t[n])(a)},function(n){for(l.status="rejected",l.reason=n,n=0;n<t.length;n++)(0,t[n])(void 0)}),l}var Do=N.S;N.S=function(e,a){pf=Pe(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&ah(e,a),Do!==null&&Do(e,a)};var Ht=f(null);function wc(){var e=Ht.current;return e!==null?e:me.pooledCache}function $n(e,a){a===null?O(Ht,Ht.current):O(Ht,a.pool)}function Ro(){var e=wc();return e===null?null:{parent:Ae._currentValue,pool:e}}var fl=Error(d(460)),kc=Error(d(474)),Fn=Error(d(542)),In={then:function(){}};function _o(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Uo(e,a,t){switch(t=e[t],t===void 0?e.push(a):t!==a&&(a.then(Ua,Ua),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Bo(e),e;default:if(typeof a.status=="string")a.then(Ua,Ua);else{if(e=me,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=a,e.status="pending",e.then(function(l){if(a.status==="pending"){var n=a;n.status="fulfilled",n.value=l}},function(l){if(a.status==="pending"){var n=a;n.status="rejected",n.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Bo(e),e}throw wt=a,fl}}function Bt(e){try{var a=e._init;return a(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(wt=t,fl):t}}var wt=null;function Ho(){if(wt===null)throw Error(d(459));var e=wt;return wt=null,e}function Bo(e){if(e===fl||e===Fn)throw Error(d(483))}var dl=null,Wl=0;function Pn(e){var a=Wl;return Wl+=1,dl===null&&(dl=[]),Uo(dl,e,a)}function $l(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function ei(e,a){throw a.$$typeof===w?Error(d(525)):(e=Object.prototype.toString.call(a),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function wo(e){function a(m,r){if(e){var h=m.deletions;h===null?(m.deletions=[r],m.flags|=16):h.push(r)}}function t(m,r){if(!e)return null;for(;r!==null;)a(m,r),r=r.sibling;return null}function l(m){for(var r=new Map;m!==null;)m.key!==null?r.set(m.key,m):r.set(m.index,m),m=m.sibling;return r}function n(m,r){return m=Ba(m,r),m.index=0,m.sibling=null,m}function i(m,r,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<r?(m.flags|=67108866,r):h):(m.flags|=67108866,r)):(m.flags|=1048576,r)}function s(m){return e&&m.alternate===null&&(m.flags|=67108866),m}function u(m,r,h,j){return r===null||r.tag!==6?(r=Ac(h,m.mode,j),r.return=m,r):(r=n(r,h),r.return=m,r)}function o(m,r,h,j){var H=h.type;return H===Ne?b(m,r,h.props.children,j,h.key):r!==null&&(r.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Qe&&Bt(H)===r.type)?(r=n(r,h.props),$l(r,h),r.return=m,r):(r=Zn(h.type,h.key,h.props,null,m.mode,j),$l(r,h),r.return=m,r)}function p(m,r,h,j){return r===null||r.tag!==4||r.stateNode.containerInfo!==h.containerInfo||r.stateNode.implementation!==h.implementation?(r=Tc(h,m.mode,j),r.return=m,r):(r=n(r,h.children||[]),r.return=m,r)}function b(m,r,h,j,H){return r===null||r.tag!==7?(r=Dt(h,m.mode,j,H),r.return=m,r):(r=n(r,h),r.return=m,r)}function S(m,r,h){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=Ac(""+r,m.mode,h),r.return=m,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case ve:return h=Zn(r.type,r.key,r.props,null,m.mode,h),$l(h,r),h.return=m,h;case Ee:return r=Tc(r,m.mode,h),r.return=m,r;case Qe:return r=Bt(r),S(m,r,h)}if(Na(r)||Ve(r))return r=Dt(r,m.mode,h,null),r.return=m,r;if(typeof r.then=="function")return S(m,Pn(r),h);if(r.$$typeof===ke)return S(m,Wn(m,r),h);ei(m,r)}return null}function v(m,r,h,j){var H=r!==null?r.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return H!==null?null:u(m,r,""+h,j);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ve:return h.key===H?o(m,r,h,j):null;case Ee:return h.key===H?p(m,r,h,j):null;case Qe:return h=Bt(h),v(m,r,h,j)}if(Na(h)||Ve(h))return H!==null?null:b(m,r,h,j,null);if(typeof h.then=="function")return v(m,r,Pn(h),j);if(h.$$typeof===ke)return v(m,r,Wn(m,h),j);ei(m,h)}return null}function x(m,r,h,j,H){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return m=m.get(h)||null,u(r,m,""+j,H);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case ve:return m=m.get(j.key===null?h:j.key)||null,o(r,m,j,H);case Ee:return m=m.get(j.key===null?h:j.key)||null,p(r,m,j,H);case Qe:return j=Bt(j),x(m,r,h,j,H)}if(Na(j)||Ve(j))return m=m.get(h)||null,b(r,m,j,H,null);if(typeof j.then=="function")return x(m,r,h,Pn(j),H);if(j.$$typeof===ke)return x(m,r,h,Wn(r,j),H);ei(r,j)}return null}function D(m,r,h,j){for(var H=null,ee=null,_=r,Q=r=0,$=null;_!==null&&Q<h.length;Q++){_.index>Q?($=_,_=null):$=_.sibling;var ae=v(m,_,h[Q],j);if(ae===null){_===null&&(_=$);break}e&&_&&ae.alternate===null&&a(m,_),r=i(ae,r,Q),ee===null?H=ae:ee.sibling=ae,ee=ae,_=$}if(Q===h.length)return t(m,_),I&&wa(m,Q),H;if(_===null){for(;Q<h.length;Q++)_=S(m,h[Q],j),_!==null&&(r=i(_,r,Q),ee===null?H=_:ee.sibling=_,ee=_);return I&&wa(m,Q),H}for(_=l(_);Q<h.length;Q++)$=x(_,m,Q,h[Q],j),$!==null&&(e&&$.alternate!==null&&_.delete($.key===null?Q:$.key),r=i($,r,Q),ee===null?H=$:ee.sibling=$,ee=$);return e&&_.forEach(function(jt){return a(m,jt)}),I&&wa(m,Q),H}function k(m,r,h,j){if(h==null)throw Error(d(151));for(var H=null,ee=null,_=r,Q=r=0,$=null,ae=h.next();_!==null&&!ae.done;Q++,ae=h.next()){_.index>Q?($=_,_=null):$=_.sibling;var jt=v(m,_,ae.value,j);if(jt===null){_===null&&(_=$);break}e&&_&&jt.alternate===null&&a(m,_),r=i(jt,r,Q),ee===null?H=jt:ee.sibling=jt,ee=jt,_=$}if(ae.done)return t(m,_),I&&wa(m,Q),H;if(_===null){for(;!ae.done;Q++,ae=h.next())ae=S(m,ae.value,j),ae!==null&&(r=i(ae,r,Q),ee===null?H=ae:ee.sibling=ae,ee=ae);return I&&wa(m,Q),H}for(_=l(_);!ae.done;Q++,ae=h.next())ae=x(_,m,Q,ae.value,j),ae!==null&&(e&&ae.alternate!==null&&_.delete(ae.key===null?Q:ae.key),r=i(ae,r,Q),ee===null?H=ae:ee.sibling=ae,ee=ae);return e&&_.forEach(function(mp){return a(m,mp)}),I&&wa(m,Q),H}function re(m,r,h,j){if(typeof h=="object"&&h!==null&&h.type===Ne&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ve:e:{for(var H=h.key;r!==null;){if(r.key===H){if(H=h.type,H===Ne){if(r.tag===7){t(m,r.sibling),j=n(r,h.props.children),j.return=m,m=j;break e}}else if(r.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Qe&&Bt(H)===r.type){t(m,r.sibling),j=n(r,h.props),$l(j,h),j.return=m,m=j;break e}t(m,r);break}else a(m,r);r=r.sibling}h.type===Ne?(j=Dt(h.props.children,m.mode,j,h.key),j.return=m,m=j):(j=Zn(h.type,h.key,h.props,null,m.mode,j),$l(j,h),j.return=m,m=j)}return s(m);case Ee:e:{for(H=h.key;r!==null;){if(r.key===H)if(r.tag===4&&r.stateNode.containerInfo===h.containerInfo&&r.stateNode.implementation===h.implementation){t(m,r.sibling),j=n(r,h.children||[]),j.return=m,m=j;break e}else{t(m,r);break}else a(m,r);r=r.sibling}j=Tc(h,m.mode,j),j.return=m,m=j}return s(m);case Qe:return h=Bt(h),re(m,r,h,j)}if(Na(h))return D(m,r,h,j);if(Ve(h)){if(H=Ve(h),typeof H!="function")throw Error(d(150));return h=H.call(h),k(m,r,h,j)}if(typeof h.then=="function")return re(m,r,Pn(h),j);if(h.$$typeof===ke)return re(m,r,Wn(m,h),j);ei(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,r!==null&&r.tag===6?(t(m,r.sibling),j=n(r,h),j.return=m,m=j):(t(m,r),j=Ac(h,m.mode,j),j.return=m,m=j),s(m)):t(m,r)}return function(m,r,h,j){try{Wl=0;var H=re(m,r,h,j);return dl=null,H}catch(_){if(_===fl||_===Fn)throw _;var ee=la(29,_,null,m.mode);return ee.lanes=j,ee.return=m,ee}finally{}}}var kt=wo(!0),ko=wo(!1),it=!1;function Yc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qc(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ct(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function st(e,a,t){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(te&2)!==0){var n=l.pending;return n===null?a.next=a:(a.next=n.next,n.next=a),l.pending=a,a=Vn(e),No(e,null,t),a}return Qn(e,l,a,t),Vn(e)}function Fl(e,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var l=a.lanes;l&=e.pendingLanes,t|=l,a.lanes=t,Mu(e,t)}}function Gc(e,a){var t=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var n=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var s={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};i===null?n=i=s:i=i.next=s,t=t.next}while(t!==null);i===null?n=i=a:i=i.next=a}else n=i=a;t={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}var Lc=!1;function Il(){if(Lc){var e=rl;if(e!==null)throw e}}function Pl(e,a,t,l){Lc=!1;var n=e.updateQueue;it=!1;var i=n.firstBaseUpdate,s=n.lastBaseUpdate,u=n.shared.pending;if(u!==null){n.shared.pending=null;var o=u,p=o.next;o.next=null,s===null?i=p:s.next=p,s=o;var b=e.alternate;b!==null&&(b=b.updateQueue,u=b.lastBaseUpdate,u!==s&&(u===null?b.firstBaseUpdate=p:u.next=p,b.lastBaseUpdate=o))}if(i!==null){var S=n.baseState;s=0,b=p=o=null,u=i;do{var v=u.lane&-536870913,x=v!==u.lane;if(x?(W&v)===v:(l&v)===v){v!==0&&v===ol&&(Lc=!0),b!==null&&(b=b.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var D=e,k=u;v=a;var re=t;switch(k.tag){case 1:if(D=k.payload,typeof D=="function"){S=D.call(re,S,v);break e}S=D;break e;case 3:D.flags=D.flags&-65537|128;case 0:if(D=k.payload,v=typeof D=="function"?D.call(re,S,v):D,v==null)break e;S=B({},S,v);break e;case 2:it=!0}}v=u.callback,v!==null&&(e.flags|=64,x&&(e.flags|=8192),x=n.callbacks,x===null?n.callbacks=[v]:x.push(v))}else x={lane:v,tag:u.tag,payload:u.payload,callback:u.callback,next:null},b===null?(p=b=x,o=S):b=b.next=x,s|=v;if(u=u.next,u===null){if(u=n.shared.pending,u===null)break;x=u,u=x.next,x.next=null,n.lastBaseUpdate=x,n.shared.pending=null}}while(!0);b===null&&(o=S),n.baseState=o,n.firstBaseUpdate=p,n.lastBaseUpdate=b,i===null&&(n.shared.lanes=0),dt|=s,e.lanes=s,e.memoizedState=S}}function Yo(e,a){if(typeof e!="function")throw Error(d(191,e));e.call(a)}function qo(e,a){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Yo(t[e],a)}var ml=f(null),ai=f(0);function Go(e,a){e=Ja,O(ai,e),O(ml,a),Ja=e|a.baseLanes}function Xc(){O(ai,Ja),O(ml,ml.current)}function Qc(){Ja=ai.current,z(ml),z(ai)}var na=f(null),va=null;function ut(e){var a=e.alternate;O(Se,Se.current&1),O(na,e),va===null&&(a===null||ml.current!==null||a.memoizedState!==null)&&(va=e)}function Vc(e){O(Se,Se.current),O(na,e),va===null&&(va=e)}function Lo(e){e.tag===22?(O(Se,Se.current),O(na,e),va===null&&(va=e)):ot()}function ot(){O(Se,Se.current),O(na,na.current)}function ia(e){z(na),va===e&&(va=null),z(Se)}var Se=f(0);function ti(e){for(var a=e;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Fs(t)||Is(t)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var qa=0,X=null,ue=null,Te=null,li=!1,hl=!1,Yt=!1,ni=0,en=0,pl=null,lh=0;function xe(){throw Error(d(321))}function Zc(e,a){if(a===null)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!ta(e[t],a[t]))return!1;return!0}function Kc(e,a,t,l,n,i){return qa=i,X=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,N.H=e===null||e.memoizedState===null?Er:us,Yt=!1,i=t(l,n),Yt=!1,hl&&(i=Qo(a,t,l,n)),Xo(e),i}function Xo(e){N.H=ln;var a=ue!==null&&ue.next!==null;if(qa=0,Te=ue=X=null,li=!1,en=0,pl=null,a)throw Error(d(300));e===null||Me||(e=e.dependencies,e!==null&&Jn(e)&&(Me=!0))}function Qo(e,a,t,l){X=e;var n=0;do{if(hl&&(pl=null),en=0,hl=!1,25<=n)throw Error(d(301));if(n+=1,Te=ue=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}N.H=Ar,i=a(t,l)}while(hl);return i}function nh(){var e=N.H,a=e.useState()[0];return a=typeof a.then=="function"?an(a):a,e=e.useState()[0],(ue!==null?ue.memoizedState:null)!==e&&(X.flags|=1024),a}function Jc(){var e=ni!==0;return ni=0,e}function Wc(e,a,t){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t}function $c(e){if(li){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}li=!1}qa=0,Te=ue=X=null,hl=!1,en=ni=0,pl=null}function Le(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?X.memoizedState=Te=e:Te=Te.next=e,Te}function ze(){if(ue===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var a=Te===null?X.memoizedState:Te.next;if(a!==null)Te=a,ue=e;else{if(e===null)throw X.alternate===null?Error(d(467)):Error(d(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},Te===null?X.memoizedState=Te=e:Te=Te.next=e}return Te}function ii(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function an(e){var a=en;return en+=1,pl===null&&(pl=[]),e=Uo(pl,e,a),a=X,(Te===null?a.memoizedState:Te.next)===null&&(a=a.alternate,N.H=a===null||a.memoizedState===null?Er:us),e}function ci(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return an(e);if(e.$$typeof===ke)return He(e)}throw Error(d(438,String(e)))}function Fc(e){var a=null,t=X.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var l=X.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(n){return n.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=ii(),X.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(e),l=0;l<e;l++)t[l]=Qt;return a.index++,t}function Ga(e,a){return typeof a=="function"?a(e):a}function si(e){var a=ze();return Ic(a,ue,e)}function Ic(e,a,t){var l=e.queue;if(l===null)throw Error(d(311));l.lastRenderedReducer=t;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var s=n.next;n.next=i.next,i.next=s}a.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{a=n.next;var u=s=null,o=null,p=a,b=!1;do{var S=p.lane&-536870913;if(S!==p.lane?(W&S)===S:(qa&S)===S){var v=p.revertLane;if(v===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),S===ol&&(b=!0);else if((qa&v)===v){p=p.next,v===ol&&(b=!0);continue}else S={lane:0,revertLane:p.revertLane,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},o===null?(u=o=S,s=i):o=o.next=S,X.lanes|=v,dt|=v;S=p.action,Yt&&t(i,S),i=p.hasEagerState?p.eagerState:t(i,S)}else v={lane:S,revertLane:p.revertLane,gesture:p.gesture,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},o===null?(u=o=v,s=i):o=o.next=v,X.lanes|=S,dt|=S;p=p.next}while(p!==null&&p!==a);if(o===null?s=i:o.next=u,!ta(i,e.memoizedState)&&(Me=!0,b&&(t=rl,t!==null)))throw t;e.memoizedState=i,e.baseState=s,e.baseQueue=o,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Pc(e){var a=ze(),t=a.queue;if(t===null)throw Error(d(311));t.lastRenderedReducer=e;var l=t.dispatch,n=t.pending,i=a.memoizedState;if(n!==null){t.pending=null;var s=n=n.next;do i=e(i,s.action),s=s.next;while(s!==n);ta(i,a.memoizedState)||(Me=!0),a.memoizedState=i,a.baseQueue===null&&(a.baseState=i),t.lastRenderedState=i}return[i,l]}function Vo(e,a,t){var l=X,n=ze(),i=I;if(i){if(t===void 0)throw Error(d(407));t=t()}else t=a();var s=!ta((ue||n).memoizedState,t);if(s&&(n.memoizedState=t,Me=!0),n=n.queue,ts(Jo.bind(null,l,n,e),[e]),n.getSnapshot!==a||s||Te!==null&&Te.memoizedState.tag&1){if(l.flags|=2048,gl(9,{destroy:void 0},Ko.bind(null,l,n,t,a),null),me===null)throw Error(d(349));i||(qa&127)!==0||Zo(l,a,t)}return t}function Zo(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},a=X.updateQueue,a===null?(a=ii(),X.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))}function Ko(e,a,t,l){a.value=t,a.getSnapshot=l,Wo(a)&&$o(e)}function Jo(e,a,t){return t(function(){Wo(a)&&$o(e)})}function Wo(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!ta(e,t)}catch{return!0}}function $o(e){var a=Ct(e,2);a!==null&&Ie(a,e,2)}function es(e){var a=Le();if(typeof e=="function"){var t=e;if(e=t(),Yt){Ia(!0);try{t()}finally{Ia(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:e},a}function Fo(e,a,t,l){return e.baseState=t,Ic(e,ue,typeof l=="function"?l:Ga)}function ih(e,a,t,l,n){if(ri(e))throw Error(d(485));if(e=a.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};N.T!==null?t(!0):i.isTransition=!1,l(i),t=a.pending,t===null?(i.next=a.pending=i,Io(a,i)):(i.next=t.next,a.pending=t.next=i)}}function Io(e,a){var t=a.action,l=a.payload,n=e.state;if(a.isTransition){var i=N.T,s={};N.T=s;try{var u=t(n,l),o=N.S;o!==null&&o(s,u),Po(e,a,u)}catch(p){as(e,a,p)}finally{i!==null&&s.types!==null&&(i.types=s.types),N.T=i}}else try{i=t(n,l),Po(e,a,i)}catch(p){as(e,a,p)}}function Po(e,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(l){er(e,a,l)},function(l){return as(e,a,l)}):er(e,a,t)}function er(e,a,t){a.status="fulfilled",a.value=t,ar(a),e.state=t,a=e.pending,a!==null&&(t=a.next,t===a?e.pending=null:(t=t.next,a.next=t,Io(e,t)))}function as(e,a,t){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=t,ar(a),a=a.next;while(a!==l)}e.action=null}function ar(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function tr(e,a){return a}function lr(e,a){if(I){var t=me.formState;if(t!==null){e:{var l=X;if(I){if(he){a:{for(var n=he,i=ga;n.nodeType!==8;){if(!i){n=null;break a}if(n=xa(n.nextSibling),n===null){n=null;break a}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){he=xa(n.nextSibling),l=n.data==="F!";break e}}lt(l)}l=!1}l&&(a=t[0])}}return t=Le(),t.memoizedState=t.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:a},t.queue=l,t=jr.bind(null,X,l),l.dispatch=t,l=es(!1),i=ss.bind(null,X,!1,l.queue),l=Le(),n={state:a,dispatch:null,action:e,pending:null},l.queue=n,t=ih.bind(null,X,n,i,t),n.dispatch=t,l.memoizedState=e,[a,t,!1]}function nr(e){var a=ze();return ir(a,ue,e)}function ir(e,a,t){if(a=Ic(e,a,tr)[0],e=si(Ga)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=an(a)}catch(s){throw s===fl?Fn:s}else l=a;a=ze();var n=a.queue,i=n.dispatch;return t!==a.memoizedState&&(X.flags|=2048,gl(9,{destroy:void 0},ch.bind(null,n,t),null)),[l,i,e]}function ch(e,a){e.action=a}function cr(e){var a=ze(),t=ue;if(t!==null)return ir(a,t,e);ze(),a=a.memoizedState,t=ze();var l=t.queue.dispatch;return t.memoizedState=e,[a,l,!1]}function gl(e,a,t,l){return e={tag:e,create:t,deps:l,inst:a,next:null},a=X.updateQueue,a===null&&(a=ii(),X.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=e.next=e:(l=t.next,t.next=e,e.next=l,a.lastEffect=e),e}function sr(){return ze().memoizedState}function ui(e,a,t,l){var n=Le();X.flags|=e,n.memoizedState=gl(1|a,{destroy:void 0},t,l===void 0?null:l)}function oi(e,a,t,l){var n=ze();l=l===void 0?null:l;var i=n.memoizedState.inst;ue!==null&&l!==null&&Zc(l,ue.memoizedState.deps)?n.memoizedState=gl(a,i,t,l):(X.flags|=e,n.memoizedState=gl(1|a,i,t,l))}function ur(e,a){ui(8390656,8,e,a)}function ts(e,a){oi(2048,8,e,a)}function sh(e){X.flags|=4;var a=X.updateQueue;if(a===null)a=ii(),X.updateQueue=a,a.events=[e];else{var t=a.events;t===null?a.events=[e]:t.push(e)}}function or(e){var a=ze().memoizedState;return sh({ref:a,nextImpl:e}),function(){if((te&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}function rr(e,a){return oi(4,2,e,a)}function fr(e,a){return oi(4,4,e,a)}function dr(e,a){if(typeof a=="function"){e=e();var t=a(e);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function mr(e,a,t){t=t!=null?t.concat([e]):null,oi(4,4,dr.bind(null,a,e),t)}function ls(){}function hr(e,a){var t=ze();a=a===void 0?null:a;var l=t.memoizedState;return a!==null&&Zc(a,l[1])?l[0]:(t.memoizedState=[e,a],e)}function pr(e,a){var t=ze();a=a===void 0?null:a;var l=t.memoizedState;if(a!==null&&Zc(a,l[1]))return l[0];if(l=e(),Yt){Ia(!0);try{e()}finally{Ia(!1)}}return t.memoizedState=[l,a],l}function ns(e,a,t){return t===void 0||(qa&1073741824)!==0&&(W&261930)===0?e.memoizedState=a:(e.memoizedState=t,e=vf(),X.lanes|=e,dt|=e,t)}function gr(e,a,t,l){return ta(t,a)?t:ml.current!==null?(e=ns(e,t,l),ta(e,a)||(Me=!0),e):(qa&42)===0||(qa&1073741824)!==0&&(W&261930)===0?(Me=!0,e.memoizedState=t):(e=vf(),X.lanes|=e,dt|=e,a)}function vr(e,a,t,l,n){var i=T.p;T.p=i!==0&&8>i?i:8;var s=N.T,u={};N.T=u,ss(e,!1,a,t);try{var o=n(),p=N.S;if(p!==null&&p(u,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var b=th(o,l);tn(e,a,b,ua(e))}else tn(e,a,l,ua(e))}catch(S){tn(e,a,{then:function(){},status:"rejected",reason:S},ua())}finally{T.p=i,s!==null&&u.types!==null&&(s.types=u.types),N.T=s}}function uh(){}function is(e,a,t,l){if(e.tag!==5)throw Error(d(476));var n=xr(e).queue;vr(e,n,a,Y,t===null?uh:function(){return yr(e),t(l)})}function xr(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:Y},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:t},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function yr(e){var a=xr(e);a.next===null&&(a=e.alternate.memoizedState),tn(e,a.next.queue,{},ua())}function cs(){return He(bn)}function br(){return ze().memoizedState}function Nr(){return ze().memoizedState}function oh(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var t=ua();e=ct(t);var l=st(a,e,t);l!==null&&(Ie(l,a,t),Fl(l,a,t)),a={cache:Hc()},e.payload=a;return}a=a.return}}function rh(e,a,t){var l=ua();t={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},ri(e)?Sr(a,t):(t=zc(e,a,t,l),t!==null&&(Ie(t,e,l),zr(t,a,l)))}function jr(e,a,t){var l=ua();tn(e,a,t,l)}function tn(e,a,t,l){var n={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(ri(e))Sr(a,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=a.lastRenderedReducer,i!==null))try{var s=a.lastRenderedState,u=i(s,t);if(n.hasEagerState=!0,n.eagerState=u,ta(u,s))return Qn(e,a,n,0),me===null&&Xn(),!1}catch{}finally{}if(t=zc(e,a,n,l),t!==null)return Ie(t,e,l),zr(t,a,l),!0}return!1}function ss(e,a,t,l){if(l={lane:2,revertLane:Ys(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ri(e)){if(a)throw Error(d(479))}else a=zc(e,t,l,2),a!==null&&Ie(a,e,2)}function ri(e){var a=e.alternate;return e===X||a!==null&&a===X}function Sr(e,a){hl=li=!0;var t=e.pending;t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function zr(e,a,t){if((t&4194048)!==0){var l=a.lanes;l&=e.pendingLanes,t|=l,a.lanes=t,Mu(e,t)}}var ln={readContext:He,use:ci,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useLayoutEffect:xe,useInsertionEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useSyncExternalStore:xe,useId:xe,useHostTransitionStatus:xe,useFormState:xe,useActionState:xe,useOptimistic:xe,useMemoCache:xe,useCacheRefresh:xe};ln.useEffectEvent=xe;var Er={readContext:He,use:ci,useCallback:function(e,a){return Le().memoizedState=[e,a===void 0?null:a],e},useContext:He,useEffect:ur,useImperativeHandle:function(e,a,t){t=t!=null?t.concat([e]):null,ui(4194308,4,dr.bind(null,a,e),t)},useLayoutEffect:function(e,a){return ui(4194308,4,e,a)},useInsertionEffect:function(e,a){ui(4,2,e,a)},useMemo:function(e,a){var t=Le();a=a===void 0?null:a;var l=e();if(Yt){Ia(!0);try{e()}finally{Ia(!1)}}return t.memoizedState=[l,a],l},useReducer:function(e,a,t){var l=Le();if(t!==void 0){var n=t(a);if(Yt){Ia(!0);try{t(a)}finally{Ia(!1)}}}else n=a;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=rh.bind(null,X,e),[l.memoizedState,e]},useRef:function(e){var a=Le();return e={current:e},a.memoizedState=e},useState:function(e){e=es(e);var a=e.queue,t=jr.bind(null,X,a);return a.dispatch=t,[e.memoizedState,t]},useDebugValue:ls,useDeferredValue:function(e,a){var t=Le();return ns(t,e,a)},useTransition:function(){var e=es(!1);return e=vr.bind(null,X,e.queue,!0,!1),Le().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,t){var l=X,n=Le();if(I){if(t===void 0)throw Error(d(407));t=t()}else{if(t=a(),me===null)throw Error(d(349));(W&127)!==0||Zo(l,a,t)}n.memoizedState=t;var i={value:t,getSnapshot:a};return n.queue=i,ur(Jo.bind(null,l,i,e),[e]),l.flags|=2048,gl(9,{destroy:void 0},Ko.bind(null,l,i,t,a),null),t},useId:function(){var e=Le(),a=me.identifierPrefix;if(I){var t=Oa,l=Ma;t=(l&~(1<<32-aa(l)-1)).toString(32)+t,a="_"+a+"R_"+t,t=ni++,0<t&&(a+="H"+t.toString(32)),a+="_"}else t=lh++,a="_"+a+"r_"+t.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:cs,useFormState:lr,useActionState:lr,useOptimistic:function(e){var a=Le();a.memoizedState=a.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=ss.bind(null,X,!0,t),t.dispatch=a,[e,a]},useMemoCache:Fc,useCacheRefresh:function(){return Le().memoizedState=oh.bind(null,X)},useEffectEvent:function(e){var a=Le(),t={impl:e};return a.memoizedState=t,function(){if((te&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}},us={readContext:He,use:ci,useCallback:hr,useContext:He,useEffect:ts,useImperativeHandle:mr,useInsertionEffect:rr,useLayoutEffect:fr,useMemo:pr,useReducer:si,useRef:sr,useState:function(){return si(Ga)},useDebugValue:ls,useDeferredValue:function(e,a){var t=ze();return gr(t,ue.memoizedState,e,a)},useTransition:function(){var e=si(Ga)[0],a=ze().memoizedState;return[typeof e=="boolean"?e:an(e),a]},useSyncExternalStore:Vo,useId:br,useHostTransitionStatus:cs,useFormState:nr,useActionState:nr,useOptimistic:function(e,a){var t=ze();return Fo(t,ue,e,a)},useMemoCache:Fc,useCacheRefresh:Nr};us.useEffectEvent=or;var Ar={readContext:He,use:ci,useCallback:hr,useContext:He,useEffect:ts,useImperativeHandle:mr,useInsertionEffect:rr,useLayoutEffect:fr,useMemo:pr,useReducer:Pc,useRef:sr,useState:function(){return Pc(Ga)},useDebugValue:ls,useDeferredValue:function(e,a){var t=ze();return ue===null?ns(t,e,a):gr(t,ue.memoizedState,e,a)},useTransition:function(){var e=Pc(Ga)[0],a=ze().memoizedState;return[typeof e=="boolean"?e:an(e),a]},useSyncExternalStore:Vo,useId:br,useHostTransitionStatus:cs,useFormState:cr,useActionState:cr,useOptimistic:function(e,a){var t=ze();return ue!==null?Fo(t,ue,e,a):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Fc,useCacheRefresh:Nr};Ar.useEffectEvent=or;function os(e,a,t,l){a=e.memoizedState,t=t(l,a),t=t==null?a:B({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var rs={enqueueSetState:function(e,a,t){e=e._reactInternals;var l=ua(),n=ct(l);n.payload=a,t!=null&&(n.callback=t),a=st(e,n,l),a!==null&&(Ie(a,e,l),Fl(a,e,l))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var l=ua(),n=ct(l);n.tag=1,n.payload=a,t!=null&&(n.callback=t),a=st(e,n,l),a!==null&&(Ie(a,e,l),Fl(a,e,l))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=ua(),l=ct(t);l.tag=2,a!=null&&(l.callback=a),a=st(e,l,t),a!==null&&(Ie(a,e,t),Fl(a,e,t))}};function Tr(e,a,t,l,n,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,s):a.prototype&&a.prototype.isPureReactComponent?!Xl(t,l)||!Xl(n,i):!0}function Mr(e,a,t,l){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,l),a.state!==e&&rs.enqueueReplaceState(a,a.state,null)}function qt(e,a){var t=a;if("ref"in a){t={};for(var l in a)l!=="ref"&&(t[l]=a[l])}if(e=e.defaultProps){t===a&&(t=B({},t));for(var n in e)t[n]===void 0&&(t[n]=e[n])}return t}function Or(e){Ln(e)}function Cr(e){console.error(e)}function Dr(e){Ln(e)}function fi(e,a){try{var t=e.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function Rr(e,a,t){try{var l=e.onCaughtError;l(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function fs(e,a,t){return t=ct(t),t.tag=3,t.payload={element:null},t.callback=function(){fi(e,a)},t}function _r(e){return e=ct(e),e.tag=3,e}function Ur(e,a,t,l){var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){Rr(a,t,l)}}var s=t.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Rr(a,t,l),typeof n!="function"&&(mt===null?mt=new Set([this]):mt.add(this));var u=l.stack;this.componentDidCatch(l.value,{componentStack:u!==null?u:""})})}function fh(e,a,t,l,n){if(t.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=t.alternate,a!==null&&ul(a,t,n,!0),t=na.current,t!==null){switch(t.tag){case 31:case 13:return va===null?Si():t.alternate===null&&ye===0&&(ye=3),t.flags&=-257,t.flags|=65536,t.lanes=n,l===In?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([l]):a.add(l),Bs(e,l,n)),!1;case 22:return t.flags|=65536,l===In?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([l]):t.add(l)),Bs(e,l,n)),!1}throw Error(d(435,t.tag))}return Bs(e,l,n),Si(),!1}if(I)return a=na.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=n,l!==Cc&&(e=Error(d(422),{cause:l}),Zl(ma(e,t)))):(l!==Cc&&(a=Error(d(423),{cause:l}),Zl(ma(a,t))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=ma(l,t),n=fs(e.stateNode,l,n),Gc(e,n),ye!==4&&(ye=2)),!1;var i=Error(d(520),{cause:l});if(i=ma(i,t),dn===null?dn=[i]:dn.push(i),ye!==4&&(ye=2),a===null)return!0;l=ma(l,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,e=n&-n,t.lanes|=e,e=fs(t.stateNode,l,e),Gc(t,e),!1;case 1:if(a=t.type,i=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(mt===null||!mt.has(i))))return t.flags|=65536,n&=-n,t.lanes|=n,n=_r(n),Ur(n,e,t,l),Gc(t,n),!1}t=t.return}while(t!==null);return!1}var ds=Error(d(461)),Me=!1;function Be(e,a,t,l){a.child=e===null?ko(a,null,t,l):kt(a,e.child,t,l)}function Hr(e,a,t,l,n){t=t.render;var i=a.ref;if("ref"in l){var s={};for(var u in l)u!=="ref"&&(s[u]=l[u])}else s=l;return Ut(a),l=Kc(e,a,t,s,i,n),u=Jc(),e!==null&&!Me?(Wc(e,a,n),La(e,a,n)):(I&&u&&Mc(a),a.flags|=1,Be(e,a,l,n),a.child)}function Br(e,a,t,l,n){if(e===null){var i=t.type;return typeof i=="function"&&!Ec(i)&&i.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=i,wr(e,a,i,l,n)):(e=Zn(t.type,null,l,a,a.mode,n),e.ref=a.ref,e.return=a,a.child=e)}if(i=e.child,!bs(e,n)){var s=i.memoizedProps;if(t=t.compare,t=t!==null?t:Xl,t(s,l)&&e.ref===a.ref)return La(e,a,n)}return a.flags|=1,e=Ba(i,l),e.ref=a.ref,e.return=a,a.child=e}function wr(e,a,t,l,n){if(e!==null){var i=e.memoizedProps;if(Xl(i,l)&&e.ref===a.ref)if(Me=!1,a.pendingProps=l=i,bs(e,n))(e.flags&131072)!==0&&(Me=!0);else return a.lanes=e.lanes,La(e,a,n)}return ms(e,a,t,l,n)}function kr(e,a,t,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((a.flags&128)!==0){if(i=i!==null?i.baseLanes|t:t,e!==null){for(l=a.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,a.child=null;return Yr(e,a,i,t,l)}if((t&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&$n(a,i!==null?i.cachePool:null),i!==null?Go(a,i):Xc(),Lo(a);else return l=a.lanes=536870912,Yr(e,a,i!==null?i.baseLanes|t:t,t,l)}else i!==null?($n(a,i.cachePool),Go(a,i),ot(),a.memoizedState=null):(e!==null&&$n(a,null),Xc(),ot());return Be(e,a,n,t),a.child}function nn(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Yr(e,a,t,l,n){var i=wc();return i=i===null?null:{parent:Ae._currentValue,pool:i},a.memoizedState={baseLanes:t,cachePool:i},e!==null&&$n(a,null),Xc(),Lo(a),e!==null&&ul(e,a,l,!0),a.childLanes=n,null}function di(e,a){return a=hi({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function qr(e,a,t){return kt(a,e.child,null,t),e=di(a,a.pendingProps),e.flags|=2,ia(a),a.memoizedState=null,e}function dh(e,a,t){var l=a.pendingProps,n=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(I){if(l.mode==="hidden")return e=di(a,l),a.lanes=536870912,nn(null,e);if(Vc(a),(e=he)?(e=Pf(e,ga),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:at!==null?{id:Ma,overflow:Oa}:null,retryLane:536870912,hydrationErrors:null},t=So(e),t.return=a,a.child=t,Ue=a,he=null)):e=null,e===null)throw lt(a);return a.lanes=536870912,null}return di(a,l)}var i=e.memoizedState;if(i!==null){var s=i.dehydrated;if(Vc(a),n)if(a.flags&256)a.flags&=-257,a=qr(e,a,t);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(d(558));else if(Me||ul(e,a,t,!1),n=(t&e.childLanes)!==0,Me||n){if(l=me,l!==null&&(s=Ou(l,t),s!==0&&s!==i.retryLane))throw i.retryLane=s,Ct(e,s),Ie(l,e,s),ds;Si(),a=qr(e,a,t)}else e=i.treeContext,he=xa(s.nextSibling),Ue=a,I=!0,tt=null,ga=!1,e!==null&&Ao(a,e),a=di(a,l),a.flags|=4096;return a}return e=Ba(e.child,{mode:l.mode,children:l.children}),e.ref=a.ref,a.child=e,e.return=a,e}function mi(e,a){var t=a.ref;if(t===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(d(284));(e===null||e.ref!==t)&&(a.flags|=4194816)}}function ms(e,a,t,l,n){return Ut(a),t=Kc(e,a,t,l,void 0,n),l=Jc(),e!==null&&!Me?(Wc(e,a,n),La(e,a,n)):(I&&l&&Mc(a),a.flags|=1,Be(e,a,t,n),a.child)}function Gr(e,a,t,l,n,i){return Ut(a),a.updateQueue=null,t=Qo(a,l,t,n),Xo(e),l=Jc(),e!==null&&!Me?(Wc(e,a,i),La(e,a,i)):(I&&l&&Mc(a),a.flags|=1,Be(e,a,t,i),a.child)}function Lr(e,a,t,l,n){if(Ut(a),a.stateNode===null){var i=nl,s=t.contextType;typeof s=="object"&&s!==null&&(i=He(s)),i=new t(l,i),a.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=rs,a.stateNode=i,i._reactInternals=a,i=a.stateNode,i.props=l,i.state=a.memoizedState,i.refs={},Yc(a),s=t.contextType,i.context=typeof s=="object"&&s!==null?He(s):nl,i.state=a.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(os(a,t,s,l),i.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&rs.enqueueReplaceState(i,i.state,null),Pl(a,l,i,n),Il(),i.state=a.memoizedState),typeof i.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(e===null){i=a.stateNode;var u=a.memoizedProps,o=qt(t,u);i.props=o;var p=i.context,b=t.contextType;s=nl,typeof b=="object"&&b!==null&&(s=He(b));var S=t.getDerivedStateFromProps;b=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function",u=a.pendingProps!==u,b||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u||p!==s)&&Mr(a,i,l,s),it=!1;var v=a.memoizedState;i.state=v,Pl(a,l,i,n),Il(),p=a.memoizedState,u||v!==p||it?(typeof S=="function"&&(os(a,t,S,l),p=a.memoizedState),(o=it||Tr(a,t,o,l,v,p,s))?(b||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(a.flags|=4194308)):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=p),i.props=l,i.state=p,i.context=s,l=o):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{i=a.stateNode,qc(e,a),s=a.memoizedProps,b=qt(t,s),i.props=b,S=a.pendingProps,v=i.context,p=t.contextType,o=nl,typeof p=="object"&&p!==null&&(o=He(p)),u=t.getDerivedStateFromProps,(p=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==S||v!==o)&&Mr(a,i,l,o),it=!1,v=a.memoizedState,i.state=v,Pl(a,l,i,n),Il();var x=a.memoizedState;s!==S||v!==x||it||e!==null&&e.dependencies!==null&&Jn(e.dependencies)?(typeof u=="function"&&(os(a,t,u,l),x=a.memoizedState),(b=it||Tr(a,t,b,l,v,x,o)||e!==null&&e.dependencies!==null&&Jn(e.dependencies))?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,x,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,x,o)),typeof i.componentDidUpdate=="function"&&(a.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=x),i.props=l,i.state=x,i.context=o,l=b):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(a.flags|=1024),l=!1)}return i=l,mi(e,a),l=(a.flags&128)!==0,i||l?(i=a.stateNode,t=l&&typeof t.getDerivedStateFromError!="function"?null:i.render(),a.flags|=1,e!==null&&l?(a.child=kt(a,e.child,null,n),a.child=kt(a,null,t,n)):Be(e,a,t,n),a.memoizedState=i.state,e=a.child):e=La(e,a,n),e}function Xr(e,a,t,l){return Rt(),a.flags|=256,Be(e,a,t,l),a.child}var hs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ps(e){return{baseLanes:e,cachePool:Ro()}}function gs(e,a,t){return e=e!==null?e.childLanes&~t:0,a&&(e|=sa),e}function Qr(e,a,t){var l=a.pendingProps,n=!1,i=(a.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(Se.current&2)!==0),s&&(n=!0,a.flags&=-129),s=(a.flags&32)!==0,a.flags&=-33,e===null){if(I){if(n?ut(a):ot(),(e=he)?(e=Pf(e,ga),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:at!==null?{id:Ma,overflow:Oa}:null,retryLane:536870912,hydrationErrors:null},t=So(e),t.return=a,a.child=t,Ue=a,he=null)):e=null,e===null)throw lt(a);return Is(e)?a.lanes=32:a.lanes=536870912,null}var u=l.children;return l=l.fallback,n?(ot(),n=a.mode,u=hi({mode:"hidden",children:u},n),l=Dt(l,n,t,null),u.return=a,l.return=a,u.sibling=l,a.child=u,l=a.child,l.memoizedState=ps(t),l.childLanes=gs(e,s,t),a.memoizedState=hs,nn(null,l)):(ut(a),vs(a,u))}var o=e.memoizedState;if(o!==null&&(u=o.dehydrated,u!==null)){if(i)a.flags&256?(ut(a),a.flags&=-257,a=xs(e,a,t)):a.memoizedState!==null?(ot(),a.child=e.child,a.flags|=128,a=null):(ot(),u=l.fallback,n=a.mode,l=hi({mode:"visible",children:l.children},n),u=Dt(u,n,t,null),u.flags|=2,l.return=a,u.return=a,l.sibling=u,a.child=l,kt(a,e.child,null,t),l=a.child,l.memoizedState=ps(t),l.childLanes=gs(e,s,t),a.memoizedState=hs,a=nn(null,l));else if(ut(a),Is(u)){if(s=u.nextSibling&&u.nextSibling.dataset,s)var p=s.dgst;s=p,l=Error(d(419)),l.stack="",l.digest=s,Zl({value:l,source:null,stack:null}),a=xs(e,a,t)}else if(Me||ul(e,a,t,!1),s=(t&e.childLanes)!==0,Me||s){if(s=me,s!==null&&(l=Ou(s,t),l!==0&&l!==o.retryLane))throw o.retryLane=l,Ct(e,l),Ie(s,e,l),ds;Fs(u)||Si(),a=xs(e,a,t)}else Fs(u)?(a.flags|=192,a.child=e.child,a=null):(e=o.treeContext,he=xa(u.nextSibling),Ue=a,I=!0,tt=null,ga=!1,e!==null&&Ao(a,e),a=vs(a,l.children),a.flags|=4096);return a}return n?(ot(),u=l.fallback,n=a.mode,o=e.child,p=o.sibling,l=Ba(o,{mode:"hidden",children:l.children}),l.subtreeFlags=o.subtreeFlags&65011712,p!==null?u=Ba(p,u):(u=Dt(u,n,t,null),u.flags|=2),u.return=a,l.return=a,l.sibling=u,a.child=l,nn(null,l),l=a.child,u=e.child.memoizedState,u===null?u=ps(t):(n=u.cachePool,n!==null?(o=Ae._currentValue,n=n.parent!==o?{parent:o,pool:o}:n):n=Ro(),u={baseLanes:u.baseLanes|t,cachePool:n}),l.memoizedState=u,l.childLanes=gs(e,s,t),a.memoizedState=hs,nn(e.child,l)):(ut(a),t=e.child,e=t.sibling,t=Ba(t,{mode:"visible",children:l.children}),t.return=a,t.sibling=null,e!==null&&(s=a.deletions,s===null?(a.deletions=[e],a.flags|=16):s.push(e)),a.child=t,a.memoizedState=null,t)}function vs(e,a){return a=hi({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function hi(e,a){return e=la(22,e,null,a),e.lanes=0,e}function xs(e,a,t){return kt(a,e.child,null,t),e=vs(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Vr(e,a,t){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a),_c(e.return,a,t)}function ys(e,a,t,l,n,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:n,treeForkCount:i}:(s.isBackwards=a,s.rendering=null,s.renderingStartTime=0,s.last=l,s.tail=t,s.tailMode=n,s.treeForkCount=i)}function Zr(e,a,t){var l=a.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var s=Se.current,u=(s&2)!==0;if(u?(s=s&1|2,a.flags|=128):s&=1,O(Se,s),Be(e,a,l,t),l=I?Vl:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vr(e,t,a);else if(e.tag===19)Vr(e,t,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(t=a.child,n=null;t!==null;)e=t.alternate,e!==null&&ti(e)===null&&(n=t),t=t.sibling;t=n,t===null?(n=a.child,a.child=null):(n=t.sibling,t.sibling=null),ys(a,!1,n,t,i,l);break;case"backwards":case"unstable_legacy-backwards":for(t=null,n=a.child,a.child=null;n!==null;){if(e=n.alternate,e!==null&&ti(e)===null){a.child=n;break}e=n.sibling,n.sibling=t,t=n,n=e}ys(a,!0,t,null,i,l);break;case"together":ys(a,!1,null,null,void 0,l);break;default:a.memoizedState=null}return a.child}function La(e,a,t){if(e!==null&&(a.dependencies=e.dependencies),dt|=a.lanes,(t&a.childLanes)===0)if(e!==null){if(ul(e,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(d(153));if(a.child!==null){for(e=a.child,t=Ba(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=Ba(e,e.pendingProps),t.return=a;t.sibling=null}return a.child}function bs(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&Jn(e)))}function mh(e,a,t){switch(a.tag){case 3:Ge(a,a.stateNode.containerInfo),nt(a,Ae,e.memoizedState.cache),Rt();break;case 27:case 5:Cl(a);break;case 4:Ge(a,a.stateNode.containerInfo);break;case 10:nt(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Vc(a),null;break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(ut(a),a.flags|=128,null):(t&a.child.childLanes)!==0?Qr(e,a,t):(ut(a),e=La(e,a,t),e!==null?e.sibling:null);ut(a);break;case 19:var n=(e.flags&128)!==0;if(l=(t&a.childLanes)!==0,l||(ul(e,a,t,!1),l=(t&a.childLanes)!==0),n){if(l)return Zr(e,a,t);a.flags|=128}if(n=a.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),O(Se,Se.current),l)break;return null;case 22:return a.lanes=0,kr(e,a,t,a.pendingProps);case 24:nt(a,Ae,e.memoizedState.cache)}return La(e,a,t)}function Kr(e,a,t){if(e!==null)if(e.memoizedProps!==a.pendingProps)Me=!0;else{if(!bs(e,t)&&(a.flags&128)===0)return Me=!1,mh(e,a,t);Me=(e.flags&131072)!==0}else Me=!1,I&&(a.flags&1048576)!==0&&Eo(a,Vl,a.index);switch(a.lanes=0,a.tag){case 16:e:{var l=a.pendingProps;if(e=Bt(a.elementType),a.type=e,typeof e=="function")Ec(e)?(l=qt(e,l),a.tag=1,a=Lr(null,a,e,l,t)):(a.tag=0,a=ms(null,a,e,l,t));else{if(e!=null){var n=e.$$typeof;if(n===oa){a.tag=11,a=Hr(null,a,e,l,t);break e}else if(n===F){a.tag=14,a=Br(null,a,e,l,t);break e}}throw a=Ra(e)||e,Error(d(306,a,""))}}return a;case 0:return ms(e,a,a.type,a.pendingProps,t);case 1:return l=a.type,n=qt(l,a.pendingProps),Lr(e,a,l,n,t);case 3:e:{if(Ge(a,a.stateNode.containerInfo),e===null)throw Error(d(387));l=a.pendingProps;var i=a.memoizedState;n=i.element,qc(e,a),Pl(a,l,null,t);var s=a.memoizedState;if(l=s.cache,nt(a,Ae,l),l!==i.cache&&Uc(a,[Ae],t,!0),Il(),l=s.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:s.cache},a.updateQueue.baseState=i,a.memoizedState=i,a.flags&256){a=Xr(e,a,l,t);break e}else if(l!==n){n=ma(Error(d(424)),a),Zl(n),a=Xr(e,a,l,t);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(he=xa(e.firstChild),Ue=a,I=!0,tt=null,ga=!0,t=ko(a,null,l,t),a.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Rt(),l===n){a=La(e,a,t);break e}Be(e,a,l,t)}a=a.child}return a;case 26:return mi(e,a),e===null?(t=id(a.type,null,a.pendingProps,null))?a.memoizedState=t:I||(t=a.type,e=a.pendingProps,l=Ci(Z.current).createElement(t),l[_e]=a,l[Ze]=e,we(l,t,e),De(l),a.stateNode=l):a.memoizedState=id(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Cl(a),e===null&&I&&(l=a.stateNode=td(a.type,a.pendingProps,Z.current),Ue=a,ga=!0,n=he,vt(a.type)?(Ps=n,he=xa(l.firstChild)):he=n),Be(e,a,a.pendingProps.children,t),mi(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&I&&((n=l=he)&&(l=Xh(l,a.type,a.pendingProps,ga),l!==null?(a.stateNode=l,Ue=a,he=xa(l.firstChild),ga=!1,n=!0):n=!1),n||lt(a)),Cl(a),n=a.type,i=a.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,Js(n,i)?l=null:s!==null&&Js(n,s)&&(a.flags|=32),a.memoizedState!==null&&(n=Kc(e,a,nh,null,null,t),bn._currentValue=n),mi(e,a),Be(e,a,l,t),a.child;case 6:return e===null&&I&&((e=t=he)&&(t=Qh(t,a.pendingProps,ga),t!==null?(a.stateNode=t,Ue=a,he=null,e=!0):e=!1),e||lt(a)),null;case 13:return Qr(e,a,t);case 4:return Ge(a,a.stateNode.containerInfo),l=a.pendingProps,e===null?a.child=kt(a,null,l,t):Be(e,a,l,t),a.child;case 11:return Hr(e,a,a.type,a.pendingProps,t);case 7:return Be(e,a,a.pendingProps,t),a.child;case 8:return Be(e,a,a.pendingProps.children,t),a.child;case 12:return Be(e,a,a.pendingProps.children,t),a.child;case 10:return l=a.pendingProps,nt(a,a.type,l.value),Be(e,a,l.children,t),a.child;case 9:return n=a.type._context,l=a.pendingProps.children,Ut(a),n=He(n),l=l(n),a.flags|=1,Be(e,a,l,t),a.child;case 14:return Br(e,a,a.type,a.pendingProps,t);case 15:return wr(e,a,a.type,a.pendingProps,t);case 19:return Zr(e,a,t);case 31:return dh(e,a,t);case 22:return kr(e,a,t,a.pendingProps);case 24:return Ut(a),l=He(Ae),e===null?(n=wc(),n===null&&(n=me,i=Hc(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=t),n=i),a.memoizedState={parent:l,cache:n},Yc(a),nt(a,Ae,n)):((e.lanes&t)!==0&&(qc(e,a),Pl(a,null,null,t),Il()),n=e.memoizedState,i=a.memoizedState,n.parent!==l?(n={parent:l,cache:l},a.memoizedState=n,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=n),nt(a,Ae,l)):(l=i.cache,nt(a,Ae,l),l!==n.cache&&Uc(a,[Ae],t,!0))),Be(e,a,a.pendingProps.children,t),a.child;case 29:throw a.pendingProps}throw Error(d(156,a.tag))}function Xa(e){e.flags|=4}function Ns(e,a,t,l,n){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Nf())e.flags|=8192;else throw wt=In,kc}else e.flags&=-16777217}function Jr(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!rd(a))if(Nf())e.flags|=8192;else throw wt=In,kc}function pi(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Au():536870912,e.lanes|=a,bl|=a)}function cn(e,a){if(!I)switch(e.tailMode){case"hidden":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function pe(e){var a=e.alternate!==null&&e.alternate.child===e.child,t=0,l=0;if(a)for(var n=e.child;n!==null;)t|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)t|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=t,a}function hh(e,a,t){var l=a.pendingProps;switch(Oc(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(a),null;case 1:return pe(a),null;case 3:return t=a.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),Ya(Ae),je(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(sl(a)?Xa(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Dc())),pe(a),null;case 26:var n=a.type,i=a.memoizedState;return e===null?(Xa(a),i!==null?(pe(a),Jr(a,i)):(pe(a),Ns(a,n,null,l,t))):i?i!==e.memoizedState?(Xa(a),pe(a),Jr(a,i)):(pe(a),a.flags&=-16777217):(e=e.memoizedProps,e!==l&&Xa(a),pe(a),Ns(a,n,e,l,t)),null;case 27:if(An(a),t=Z.current,n=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&Xa(a);else{if(!l){if(a.stateNode===null)throw Error(d(166));return pe(a),null}e=R.current,sl(a)?To(a):(e=td(n,l,t),a.stateNode=e,Xa(a))}return pe(a),null;case 5:if(An(a),n=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&Xa(a);else{if(!l){if(a.stateNode===null)throw Error(d(166));return pe(a),null}if(i=R.current,sl(a))To(a);else{var s=Ci(Z.current);switch(i){case 1:i=s.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=s.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=s.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?s.createElement("select",{is:l.is}):s.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?s.createElement(n,{is:l.is}):s.createElement(n)}}i[_e]=a,i[Ze]=l;e:for(s=a.child;s!==null;){if(s.tag===5||s.tag===6)i.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===a)break e;for(;s.sibling===null;){if(s.return===null||s.return===a)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}a.stateNode=i;e:switch(we(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Xa(a)}}return pe(a),Ns(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,t),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==l&&Xa(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(d(166));if(e=Z.current,sl(a)){if(e=a.stateNode,t=a.memoizedProps,l=null,n=Ue,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[_e]=a,e=!!(e.nodeValue===t||l!==null&&l.suppressHydrationWarning===!0||Vf(e.nodeValue,t)),e||lt(a,!0)}else e=Ci(e).createTextNode(l),e[_e]=a,a.stateNode=e}return pe(a),null;case 31:if(t=a.memoizedState,e===null||e.memoizedState!==null){if(l=sl(a),t!==null){if(e===null){if(!l)throw Error(d(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[_e]=a}else Rt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;pe(a),e=!1}else t=Dc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return a.flags&256?(ia(a),a):(ia(a),null);if((a.flags&128)!==0)throw Error(d(558))}return pe(a),null;case 13:if(l=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=sl(a),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(d(318));if(n=a.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));n[_e]=a}else Rt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;pe(a),n=!1}else n=Dc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return a.flags&256?(ia(a),a):(ia(a),null)}return ia(a),(a.flags&128)!==0?(a.lanes=t,a):(t=l!==null,e=e!==null&&e.memoizedState!==null,t&&(l=a.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),t!==e&&t&&(a.child.flags|=8192),pi(a,a.updateQueue),pe(a),null);case 4:return je(),e===null&&Xs(a.stateNode.containerInfo),pe(a),null;case 10:return Ya(a.type),pe(a),null;case 19:if(z(Se),l=a.memoizedState,l===null)return pe(a),null;if(n=(a.flags&128)!==0,i=l.rendering,i===null)if(n)cn(l,!1);else{if(ye!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(i=ti(e),i!==null){for(a.flags|=128,cn(l,!1),e=i.updateQueue,a.updateQueue=e,pi(a,e),a.subtreeFlags=0,e=t,t=a.child;t!==null;)jo(t,e),t=t.sibling;return O(Se,Se.current&1|2),I&&wa(a,l.treeForkCount),a.child}e=e.sibling}l.tail!==null&&Pe()>bi&&(a.flags|=128,n=!0,cn(l,!1),a.lanes=4194304)}else{if(!n)if(e=ti(i),e!==null){if(a.flags|=128,n=!0,e=e.updateQueue,a.updateQueue=e,pi(a,e),cn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!I)return pe(a),null}else 2*Pe()-l.renderingStartTime>bi&&t!==536870912&&(a.flags|=128,n=!0,cn(l,!1),a.lanes=4194304);l.isBackwards?(i.sibling=a.child,a.child=i):(e=l.last,e!==null?e.sibling=i:a.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Pe(),e.sibling=null,t=Se.current,O(Se,n?t&1|2:t&1),I&&wa(a,l.treeForkCount),e):(pe(a),null);case 22:case 23:return ia(a),Qc(),l=a.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(t&536870912)!==0&&(a.flags&128)===0&&(pe(a),a.subtreeFlags&6&&(a.flags|=8192)):pe(a),t=a.updateQueue,t!==null&&pi(a,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==t&&(a.flags|=2048),e!==null&&z(Ht),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),Ya(Ae),pe(a),null;case 25:return null;case 30:return null}throw Error(d(156,a.tag))}function ph(e,a){switch(Oc(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Ya(Ae),je(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return An(a),null;case 31:if(a.memoizedState!==null){if(ia(a),a.alternate===null)throw Error(d(340));Rt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(ia(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(d(340));Rt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return z(Se),null;case 4:return je(),null;case 10:return Ya(a.type),null;case 22:case 23:return ia(a),Qc(),e!==null&&z(Ht),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Ya(Ae),null;case 25:return null;default:return null}}function Wr(e,a){switch(Oc(a),a.tag){case 3:Ya(Ae),je();break;case 26:case 27:case 5:An(a);break;case 4:je();break;case 31:a.memoizedState!==null&&ia(a);break;case 13:ia(a);break;case 19:z(Se);break;case 10:Ya(a.type);break;case 22:case 23:ia(a),Qc(),e!==null&&z(Ht);break;case 24:Ya(Ae)}}function sn(e,a){try{var t=a.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var n=l.next;t=n;do{if((t.tag&e)===e){l=void 0;var i=t.create,s=t.inst;l=i(),s.destroy=l}t=t.next}while(t!==n)}}catch(u){ce(a,a.return,u)}}function rt(e,a,t){try{var l=a.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var s=l.inst,u=s.destroy;if(u!==void 0){s.destroy=void 0,n=a;var o=t,p=u;try{p()}catch(b){ce(n,o,b)}}}l=l.next}while(l!==i)}}catch(b){ce(a,a.return,b)}}function $r(e){var a=e.updateQueue;if(a!==null){var t=e.stateNode;try{qo(a,t)}catch(l){ce(e,e.return,l)}}}function Fr(e,a,t){t.props=qt(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(l){ce(e,a,l)}}function un(e,a){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof t=="function"?e.refCleanup=t(l):t.current=l}}catch(n){ce(e,a,n)}}function Ca(e,a){var t=e.ref,l=e.refCleanup;if(t!==null)if(typeof l=="function")try{l()}catch(n){ce(e,a,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(n){ce(e,a,n)}else t.current=null}function Ir(e){var a=e.type,t=e.memoizedProps,l=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&l.focus();break e;case"img":t.src?l.src=t.src:t.srcSet&&(l.srcset=t.srcSet)}}catch(n){ce(e,e.return,n)}}function js(e,a,t){try{var l=e.stateNode;wh(l,e.type,t,a),l[Ze]=a}catch(n){ce(e,e.return,n)}}function Pr(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&vt(e.type)||e.tag===4}function Ss(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pr(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&vt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zs(e,a,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(e),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=Ua));else if(l!==4&&(l===27&&vt(e.type)&&(t=e.stateNode,a=null),e=e.child,e!==null))for(zs(e,a,t),e=e.sibling;e!==null;)zs(e,a,t),e=e.sibling}function gi(e,a,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?t.insertBefore(e,a):t.appendChild(e);else if(l!==4&&(l===27&&vt(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(gi(e,a,t),e=e.sibling;e!==null;)gi(e,a,t),e=e.sibling}function ef(e){var a=e.stateNode,t=e.memoizedProps;try{for(var l=e.type,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);we(a,l,t),a[_e]=e,a[Ze]=t}catch(i){ce(e,e.return,i)}}var Qa=!1,Oe=!1,Es=!1,af=typeof WeakSet=="function"?WeakSet:Set,Re=null;function gh(e,a){if(e=e.containerInfo,Zs=wi,e=mo(e),xc(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var s=0,u=-1,o=-1,p=0,b=0,S=e,v=null;a:for(;;){for(var x;S!==t||n!==0&&S.nodeType!==3||(u=s+n),S!==i||l!==0&&S.nodeType!==3||(o=s+l),S.nodeType===3&&(s+=S.nodeValue.length),(x=S.firstChild)!==null;)v=S,S=x;for(;;){if(S===e)break a;if(v===t&&++p===n&&(u=s),v===i&&++b===l&&(o=s),(x=S.nextSibling)!==null)break;S=v,v=S.parentNode}S=x}t=u===-1||o===-1?null:{start:u,end:o}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ks={focusedElem:e,selectionRange:t},wi=!1,Re=a;Re!==null;)if(a=Re,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,Re=e;else for(;Re!==null;){switch(a=Re,i=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)n=e[t],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,t=a,n=i.memoizedProps,i=i.memoizedState,l=t.stateNode;try{var D=qt(t.type,n);e=l.getSnapshotBeforeUpdate(D,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(k){ce(t,t.return,k)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,t=e.nodeType,t===9)$s(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":$s(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=a.sibling,e!==null){e.return=a.return,Re=e;break}Re=a.return}}function tf(e,a,t){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Za(e,t),l&4&&sn(5,t);break;case 1:if(Za(e,t),l&4)if(e=t.stateNode,a===null)try{e.componentDidMount()}catch(s){ce(t,t.return,s)}else{var n=qt(t.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(n,a,e.__reactInternalSnapshotBeforeUpdate)}catch(s){ce(t,t.return,s)}}l&64&&$r(t),l&512&&un(t,t.return);break;case 3:if(Za(e,t),l&64&&(e=t.updateQueue,e!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{qo(e,a)}catch(s){ce(t,t.return,s)}}break;case 27:a===null&&l&4&&ef(t);case 26:case 5:Za(e,t),a===null&&l&4&&Ir(t),l&512&&un(t,t.return);break;case 12:Za(e,t);break;case 31:Za(e,t),l&4&&cf(e,t);break;case 13:Za(e,t),l&4&&sf(e,t),l&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=Eh.bind(null,t),Vh(e,t))));break;case 22:if(l=t.memoizedState!==null||Qa,!l){a=a!==null&&a.memoizedState!==null||Oe,n=Qa;var i=Oe;Qa=l,(Oe=a)&&!i?Ka(e,t,(t.subtreeFlags&8772)!==0):Za(e,t),Qa=n,Oe=i}break;case 30:break;default:Za(e,t)}}function lf(e){var a=e.alternate;a!==null&&(e.alternate=null,lf(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&ac(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ge=null,Je=!1;function Va(e,a,t){for(t=t.child;t!==null;)nf(e,a,t),t=t.sibling}function nf(e,a,t){if(ea&&typeof ea.onCommitFiberUnmount=="function")try{ea.onCommitFiberUnmount(Dl,t)}catch{}switch(t.tag){case 26:Oe||Ca(t,a),Va(e,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Oe||Ca(t,a);var l=ge,n=Je;vt(t.type)&&(ge=t.stateNode,Je=!1),Va(e,a,t),vn(t.stateNode),ge=l,Je=n;break;case 5:Oe||Ca(t,a);case 6:if(l=ge,n=Je,ge=null,Va(e,a,t),ge=l,Je=n,ge!==null)if(Je)try{(ge.nodeType===9?ge.body:ge.nodeName==="HTML"?ge.ownerDocument.body:ge).removeChild(t.stateNode)}catch(i){ce(t,a,i)}else try{ge.removeChild(t.stateNode)}catch(i){ce(t,a,i)}break;case 18:ge!==null&&(Je?(e=ge,Ff(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Ml(e)):Ff(ge,t.stateNode));break;case 4:l=ge,n=Je,ge=t.stateNode.containerInfo,Je=!0,Va(e,a,t),ge=l,Je=n;break;case 0:case 11:case 14:case 15:rt(2,t,a),Oe||rt(4,t,a),Va(e,a,t);break;case 1:Oe||(Ca(t,a),l=t.stateNode,typeof l.componentWillUnmount=="function"&&Fr(t,a,l)),Va(e,a,t);break;case 21:Va(e,a,t);break;case 22:Oe=(l=Oe)||t.memoizedState!==null,Va(e,a,t),Oe=l;break;default:Va(e,a,t)}}function cf(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ml(e)}catch(t){ce(a,a.return,t)}}}function sf(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ml(e)}catch(t){ce(a,a.return,t)}}function vh(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new af),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new af),a;default:throw Error(d(435,e.tag))}}function vi(e,a){var t=vh(e);a.forEach(function(l){if(!t.has(l)){t.add(l);var n=Ah.bind(null,e,l);l.then(n,n)}})}function We(e,a){var t=a.deletions;if(t!==null)for(var l=0;l<t.length;l++){var n=t[l],i=e,s=a,u=s;e:for(;u!==null;){switch(u.tag){case 27:if(vt(u.type)){ge=u.stateNode,Je=!1;break e}break;case 5:ge=u.stateNode,Je=!1;break e;case 3:case 4:ge=u.stateNode.containerInfo,Je=!0;break e}u=u.return}if(ge===null)throw Error(d(160));nf(i,s,n),ge=null,Je=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)uf(a,e),a=a.sibling}var Sa=null;function uf(e,a){var t=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:We(a,e),$e(e),l&4&&(rt(3,e,e.return),sn(3,e),rt(5,e,e.return));break;case 1:We(a,e),$e(e),l&512&&(Oe||t===null||Ca(t,t.return)),l&64&&Qa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?l:t.concat(l))));break;case 26:var n=Sa;if(We(a,e),$e(e),l&512&&(Oe||t===null||Ca(t,t.return)),l&4){var i=t!==null?t.memoizedState:null;if(l=e.memoizedState,t===null)if(l===null)if(e.stateNode===null){e:{l=e.type,t=e.memoizedProps,n=n.ownerDocument||n;a:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Ul]||i[_e]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),we(i,l,t),i[_e]=e,De(i),l=i;break e;case"link":var s=ud("link","href",n).get(l+(t.href||""));if(s){for(var u=0;u<s.length;u++)if(i=s[u],i.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&i.getAttribute("rel")===(t.rel==null?null:t.rel)&&i.getAttribute("title")===(t.title==null?null:t.title)&&i.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){s.splice(u,1);break a}}i=n.createElement(l),we(i,l,t),n.head.appendChild(i);break;case"meta":if(s=ud("meta","content",n).get(l+(t.content||""))){for(u=0;u<s.length;u++)if(i=s[u],i.getAttribute("content")===(t.content==null?null:""+t.content)&&i.getAttribute("name")===(t.name==null?null:t.name)&&i.getAttribute("property")===(t.property==null?null:t.property)&&i.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&i.getAttribute("charset")===(t.charSet==null?null:t.charSet)){s.splice(u,1);break a}}i=n.createElement(l),we(i,l,t),n.head.appendChild(i);break;default:throw Error(d(468,l))}i[_e]=e,De(i),l=i}e.stateNode=l}else od(n,e.type,e.stateNode);else e.stateNode=sd(n,l,e.memoizedProps);else i!==l?(i===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):i.count--,l===null?od(n,e.type,e.stateNode):sd(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&js(e,e.memoizedProps,t.memoizedProps)}break;case 27:We(a,e),$e(e),l&512&&(Oe||t===null||Ca(t,t.return)),t!==null&&l&4&&js(e,e.memoizedProps,t.memoizedProps);break;case 5:if(We(a,e),$e(e),l&512&&(Oe||t===null||Ca(t,t.return)),e.flags&32){n=e.stateNode;try{Ft(n,"")}catch(D){ce(e,e.return,D)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,js(e,n,t!==null?t.memoizedProps:n)),l&1024&&(Es=!0);break;case 6:if(We(a,e),$e(e),l&4){if(e.stateNode===null)throw Error(d(162));l=e.memoizedProps,t=e.stateNode;try{t.nodeValue=l}catch(D){ce(e,e.return,D)}}break;case 3:if(_i=null,n=Sa,Sa=Di(a.containerInfo),We(a,e),Sa=n,$e(e),l&4&&t!==null&&t.memoizedState.isDehydrated)try{Ml(a.containerInfo)}catch(D){ce(e,e.return,D)}Es&&(Es=!1,of(e));break;case 4:l=Sa,Sa=Di(e.stateNode.containerInfo),We(a,e),$e(e),Sa=l;break;case 12:We(a,e),$e(e);break;case 31:We(a,e),$e(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,vi(e,l)));break;case 13:We(a,e),$e(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(yi=Pe()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,vi(e,l)));break;case 22:n=e.memoizedState!==null;var o=t!==null&&t.memoizedState!==null,p=Qa,b=Oe;if(Qa=p||n,Oe=b||o,We(a,e),Oe=b,Qa=p,$e(e),l&8192)e:for(a=e.stateNode,a._visibility=n?a._visibility&-2:a._visibility|1,n&&(t===null||o||Qa||Oe||Gt(e)),t=null,a=e;;){if(a.tag===5||a.tag===26){if(t===null){o=t=a;try{if(i=o.stateNode,n)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{u=o.stateNode;var S=o.memoizedProps.style,v=S!=null&&S.hasOwnProperty("display")?S.display:null;u.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(D){ce(o,o.return,D)}}}else if(a.tag===6){if(t===null){o=a;try{o.stateNode.nodeValue=n?"":o.memoizedProps}catch(D){ce(o,o.return,D)}}}else if(a.tag===18){if(t===null){o=a;try{var x=o.stateNode;n?If(x,!0):If(o.stateNode,!1)}catch(D){ce(o,o.return,D)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;t===a&&(t=null),a=a.return}t===a&&(t=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=e.updateQueue,l!==null&&(t=l.retryQueue,t!==null&&(l.retryQueue=null,vi(e,t))));break;case 19:We(a,e),$e(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,vi(e,l)));break;case 30:break;case 21:break;default:We(a,e),$e(e)}}function $e(e){var a=e.flags;if(a&2){try{for(var t,l=e.return;l!==null;){if(Pr(l)){t=l;break}l=l.return}if(t==null)throw Error(d(160));switch(t.tag){case 27:var n=t.stateNode,i=Ss(e);gi(e,i,n);break;case 5:var s=t.stateNode;t.flags&32&&(Ft(s,""),t.flags&=-33);var u=Ss(e);gi(e,u,s);break;case 3:case 4:var o=t.stateNode.containerInfo,p=Ss(e);zs(e,p,o);break;default:throw Error(d(161))}}catch(b){ce(e,e.return,b)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function of(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;of(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function Za(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)tf(e,a.alternate,a),a=a.sibling}function Gt(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:rt(4,a,a.return),Gt(a);break;case 1:Ca(a,a.return);var t=a.stateNode;typeof t.componentWillUnmount=="function"&&Fr(a,a.return,t),Gt(a);break;case 27:vn(a.stateNode);case 26:case 5:Ca(a,a.return),Gt(a);break;case 22:a.memoizedState===null&&Gt(a);break;case 30:Gt(a);break;default:Gt(a)}e=e.sibling}}function Ka(e,a,t){for(t=t&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,n=e,i=a,s=i.flags;switch(i.tag){case 0:case 11:case 15:Ka(n,i,t),sn(4,i);break;case 1:if(Ka(n,i,t),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(p){ce(l,l.return,p)}if(l=i,n=l.updateQueue,n!==null){var u=l.stateNode;try{var o=n.shared.hiddenCallbacks;if(o!==null)for(n.shared.hiddenCallbacks=null,n=0;n<o.length;n++)Yo(o[n],u)}catch(p){ce(l,l.return,p)}}t&&s&64&&$r(i),un(i,i.return);break;case 27:ef(i);case 26:case 5:Ka(n,i,t),t&&l===null&&s&4&&Ir(i),un(i,i.return);break;case 12:Ka(n,i,t);break;case 31:Ka(n,i,t),t&&s&4&&cf(n,i);break;case 13:Ka(n,i,t),t&&s&4&&sf(n,i);break;case 22:i.memoizedState===null&&Ka(n,i,t),un(i,i.return);break;case 30:break;default:Ka(n,i,t)}a=a.sibling}}function As(e,a){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&Kl(t))}function Ts(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Kl(e))}function za(e,a,t,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)rf(e,a,t,l),a=a.sibling}function rf(e,a,t,l){var n=a.flags;switch(a.tag){case 0:case 11:case 15:za(e,a,t,l),n&2048&&sn(9,a);break;case 1:za(e,a,t,l);break;case 3:za(e,a,t,l),n&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Kl(e)));break;case 12:if(n&2048){za(e,a,t,l),e=a.stateNode;try{var i=a.memoizedProps,s=i.id,u=i.onPostCommit;typeof u=="function"&&u(s,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(o){ce(a,a.return,o)}}else za(e,a,t,l);break;case 31:za(e,a,t,l);break;case 13:za(e,a,t,l);break;case 23:break;case 22:i=a.stateNode,s=a.alternate,a.memoizedState!==null?i._visibility&2?za(e,a,t,l):on(e,a):i._visibility&2?za(e,a,t,l):(i._visibility|=2,vl(e,a,t,l,(a.subtreeFlags&10256)!==0||!1)),n&2048&&As(s,a);break;case 24:za(e,a,t,l),n&2048&&Ts(a.alternate,a);break;default:za(e,a,t,l)}}function vl(e,a,t,l,n){for(n=n&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var i=e,s=a,u=t,o=l,p=s.flags;switch(s.tag){case 0:case 11:case 15:vl(i,s,u,o,n),sn(8,s);break;case 23:break;case 22:var b=s.stateNode;s.memoizedState!==null?b._visibility&2?vl(i,s,u,o,n):on(i,s):(b._visibility|=2,vl(i,s,u,o,n)),n&&p&2048&&As(s.alternate,s);break;case 24:vl(i,s,u,o,n),n&&p&2048&&Ts(s.alternate,s);break;default:vl(i,s,u,o,n)}a=a.sibling}}function on(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=e,l=a,n=l.flags;switch(l.tag){case 22:on(t,l),n&2048&&As(l.alternate,l);break;case 24:on(t,l),n&2048&&Ts(l.alternate,l);break;default:on(t,l)}a=a.sibling}}var rn=8192;function xl(e,a,t){if(e.subtreeFlags&rn)for(e=e.child;e!==null;)ff(e,a,t),e=e.sibling}function ff(e,a,t){switch(e.tag){case 26:xl(e,a,t),e.flags&rn&&e.memoizedState!==null&&lp(t,Sa,e.memoizedState,e.memoizedProps);break;case 5:xl(e,a,t);break;case 3:case 4:var l=Sa;Sa=Di(e.stateNode.containerInfo),xl(e,a,t),Sa=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=rn,rn=16777216,xl(e,a,t),rn=l):xl(e,a,t));break;default:xl(e,a,t)}}function df(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function fn(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var l=a[t];Re=l,hf(l,e)}df(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)mf(e),e=e.sibling}function mf(e){switch(e.tag){case 0:case 11:case 15:fn(e),e.flags&2048&&rt(9,e,e.return);break;case 3:fn(e);break;case 12:fn(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,xi(e)):fn(e);break;default:fn(e)}}function xi(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var l=a[t];Re=l,hf(l,e)}df(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:rt(8,a,a.return),xi(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,xi(a));break;default:xi(a)}e=e.sibling}}function hf(e,a){for(;Re!==null;){var t=Re;switch(t.tag){case 0:case 11:case 15:rt(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var l=t.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Kl(t.memoizedState.cache)}if(l=t.child,l!==null)l.return=t,Re=l;else e:for(t=e;Re!==null;){l=Re;var n=l.sibling,i=l.return;if(lf(l),l===t){Re=null;break e}if(n!==null){n.return=i,Re=n;break e}Re=i}}}var xh={getCacheForType:function(e){var a=He(Ae),t=a.data.get(e);return t===void 0&&(t=e(),a.data.set(e,t)),t},cacheSignal:function(){return He(Ae).controller.signal}},yh=typeof WeakMap=="function"?WeakMap:Map,te=0,me=null,K=null,W=0,ie=0,ca=null,ft=!1,yl=!1,Ms=!1,Ja=0,ye=0,dt=0,Lt=0,Os=0,sa=0,bl=0,dn=null,Fe=null,Cs=!1,yi=0,pf=0,bi=1/0,Ni=null,mt=null,Ce=0,ht=null,Nl=null,Wa=0,Ds=0,Rs=null,gf=null,mn=0,_s=null;function ua(){return(te&2)!==0&&W!==0?W&-W:N.T!==null?Ys():Cu()}function vf(){if(sa===0)if((W&536870912)===0||I){var e=On;On<<=1,(On&3932160)===0&&(On=262144),sa=e}else sa=536870912;return e=na.current,e!==null&&(e.flags|=32),sa}function Ie(e,a,t){(e===me&&(ie===2||ie===9)||e.cancelPendingCommit!==null)&&(jl(e,0),pt(e,W,sa,!1)),_l(e,t),((te&2)===0||e!==me)&&(e===me&&((te&2)===0&&(Lt|=t),ye===4&&pt(e,W,sa,!1)),Da(e))}function xf(e,a,t){if((te&6)!==0)throw Error(d(327));var l=!t&&(a&127)===0&&(a&e.expiredLanes)===0||Rl(e,a),n=l?jh(e,a):Hs(e,a,!0),i=l;do{if(n===0){yl&&!l&&pt(e,a,0,!1);break}else{if(t=e.current.alternate,i&&!bh(t)){n=Hs(e,a,!1),i=!1;continue}if(n===2){if(i=a,e.errorRecoveryDisabledLanes&i)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){a=s;e:{var u=e;n=dn;var o=u.current.memoizedState.isDehydrated;if(o&&(jl(u,s).flags|=256),s=Hs(u,s,!1),s!==2){if(Ms&&!o){u.errorRecoveryDisabledLanes|=i,Lt|=i,n=4;break e}i=Fe,Fe=n,i!==null&&(Fe===null?Fe=i:Fe.push.apply(Fe,i))}n=s}if(i=!1,n!==2)continue}}if(n===1){jl(e,0),pt(e,a,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(d(345));case 4:if((a&4194048)!==a)break;case 6:pt(l,a,sa,!ft);break e;case 2:Fe=null;break;case 3:case 5:break;default:throw Error(d(329))}if((a&62914560)===a&&(n=yi+300-Pe(),10<n)){if(pt(l,a,sa,!ft),Dn(l,0,!0)!==0)break e;Wa=a,l.timeoutHandle=Wf(yf.bind(null,l,t,Fe,Ni,Cs,a,sa,Lt,bl,ft,i,"Throttled",-0,0),n);break e}yf(l,t,Fe,Ni,Cs,a,sa,Lt,bl,ft,i,null,-0,0)}}break}while(!0);Da(e)}function yf(e,a,t,l,n,i,s,u,o,p,b,S,v,x){if(e.timeoutHandle=-1,S=a.subtreeFlags,S&8192||(S&16785408)===16785408){S={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ua},ff(a,i,S);var D=(i&62914560)===i?yi-Pe():(i&4194048)===i?pf-Pe():0;if(D=np(S,D),D!==null){Wa=i,e.cancelPendingCommit=D(Tf.bind(null,e,a,i,t,l,n,s,u,o,b,S,null,v,x)),pt(e,i,s,!p);return}}Tf(e,a,i,t,l,n,s,u,o)}function bh(e){for(var a=e;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var l=0;l<t.length;l++){var n=t[l],i=n.getSnapshot;n=n.value;try{if(!ta(i(),n))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function pt(e,a,t,l){a&=~Os,a&=~Lt,e.suspendedLanes|=a,e.pingedLanes&=~a,l&&(e.warmLanes|=a),l=e.expirationTimes;for(var n=a;0<n;){var i=31-aa(n),s=1<<i;l[i]=-1,n&=~s}t!==0&&Tu(e,t,a)}function ji(){return(te&6)===0?(hn(0),!1):!0}function Us(){if(K!==null){if(ie===0)var e=K.return;else e=K,ka=_t=null,$c(e),dl=null,Wl=0,e=K;for(;e!==null;)Wr(e.alternate,e),e=e.return;K=null}}function jl(e,a){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,qh(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Wa=0,Us(),me=e,K=t=Ba(e.current,null),W=a,ie=0,ca=null,ft=!1,yl=Rl(e,a),Ms=!1,bl=sa=Os=Lt=dt=ye=0,Fe=dn=null,Cs=!1,(a&8)!==0&&(a|=a&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=a;0<l;){var n=31-aa(l),i=1<<n;a|=e[n],l&=~i}return Ja=a,Xn(),t}function bf(e,a){X=null,N.H=ln,a===fl||a===Fn?(a=Ho(),ie=3):a===kc?(a=Ho(),ie=4):ie=a===ds?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,ca=a,K===null&&(ye=1,fi(e,ma(a,e.current)))}function Nf(){var e=na.current;return e===null?!0:(W&4194048)===W?va===null:(W&62914560)===W||(W&536870912)!==0?e===va:!1}function jf(){var e=N.H;return N.H=ln,e===null?ln:e}function Sf(){var e=N.A;return N.A=xh,e}function Si(){ye=4,ft||(W&4194048)!==W&&na.current!==null||(yl=!0),(dt&134217727)===0&&(Lt&134217727)===0||me===null||pt(me,W,sa,!1)}function Hs(e,a,t){var l=te;te|=2;var n=jf(),i=Sf();(me!==e||W!==a)&&(Ni=null,jl(e,a)),a=!1;var s=ye;e:do try{if(ie!==0&&K!==null){var u=K,o=ca;switch(ie){case 8:Us(),s=6;break e;case 3:case 2:case 9:case 6:na.current===null&&(a=!0);var p=ie;if(ie=0,ca=null,Sl(e,u,o,p),t&&yl){s=0;break e}break;default:p=ie,ie=0,ca=null,Sl(e,u,o,p)}}Nh(),s=ye;break}catch(b){bf(e,b)}while(!0);return a&&e.shellSuspendCounter++,ka=_t=null,te=l,N.H=n,N.A=i,K===null&&(me=null,W=0,Xn()),s}function Nh(){for(;K!==null;)zf(K)}function jh(e,a){var t=te;te|=2;var l=jf(),n=Sf();me!==e||W!==a?(Ni=null,bi=Pe()+500,jl(e,a)):yl=Rl(e,a);e:do try{if(ie!==0&&K!==null){a=K;var i=ca;a:switch(ie){case 1:ie=0,ca=null,Sl(e,a,i,1);break;case 2:case 9:if(_o(i)){ie=0,ca=null,Ef(a);break}a=function(){ie!==2&&ie!==9||me!==e||(ie=7),Da(e)},i.then(a,a);break e;case 3:ie=7;break e;case 4:ie=5;break e;case 7:_o(i)?(ie=0,ca=null,Ef(a)):(ie=0,ca=null,Sl(e,a,i,7));break;case 5:var s=null;switch(K.tag){case 26:s=K.memoizedState;case 5:case 27:var u=K;if(s?rd(s):u.stateNode.complete){ie=0,ca=null;var o=u.sibling;if(o!==null)K=o;else{var p=u.return;p!==null?(K=p,zi(p)):K=null}break a}}ie=0,ca=null,Sl(e,a,i,5);break;case 6:ie=0,ca=null,Sl(e,a,i,6);break;case 8:Us(),ye=6;break e;default:throw Error(d(462))}}Sh();break}catch(b){bf(e,b)}while(!0);return ka=_t=null,N.H=l,N.A=n,te=t,K!==null?0:(me=null,W=0,Xn(),ye)}function Sh(){for(;K!==null&&!Zd();)zf(K)}function zf(e){var a=Kr(e.alternate,e,Ja);e.memoizedProps=e.pendingProps,a===null?zi(e):K=a}function Ef(e){var a=e,t=a.alternate;switch(a.tag){case 15:case 0:a=Gr(t,a,a.pendingProps,a.type,void 0,W);break;case 11:a=Gr(t,a,a.pendingProps,a.type.render,a.ref,W);break;case 5:$c(a);default:Wr(t,a),a=K=jo(a,Ja),a=Kr(t,a,Ja)}e.memoizedProps=e.pendingProps,a===null?zi(e):K=a}function Sl(e,a,t,l){ka=_t=null,$c(a),dl=null,Wl=0;var n=a.return;try{if(fh(e,n,a,t,W)){ye=1,fi(e,ma(t,e.current)),K=null;return}}catch(i){if(n!==null)throw K=n,i;ye=1,fi(e,ma(t,e.current)),K=null;return}a.flags&32768?(I||l===1?e=!0:yl||(W&536870912)!==0?e=!1:(ft=e=!0,(l===2||l===9||l===3||l===6)&&(l=na.current,l!==null&&l.tag===13&&(l.flags|=16384))),Af(a,e)):zi(a)}function zi(e){var a=e;do{if((a.flags&32768)!==0){Af(a,ft);return}e=a.return;var t=hh(a.alternate,a,Ja);if(t!==null){K=t;return}if(a=a.sibling,a!==null){K=a;return}K=a=e}while(a!==null);ye===0&&(ye=5)}function Af(e,a){do{var t=ph(e.alternate,e);if(t!==null){t.flags&=32767,K=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(e=e.sibling,e!==null)){K=e;return}K=e=t}while(e!==null);ye=6,K=null}function Tf(e,a,t,l,n,i,s,u,o){e.cancelPendingCommit=null;do Ei();while(Ce!==0);if((te&6)!==0)throw Error(d(327));if(a!==null){if(a===e.current)throw Error(d(177));if(i=a.lanes|a.childLanes,i|=Sc,tm(e,t,i,s,u,o),e===me&&(K=me=null,W=0),Nl=a,ht=e,Wa=t,Ds=i,Rs=n,gf=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Th(Tn,function(){return Rf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=N.T,N.T=null,n=T.p,T.p=2,s=te,te|=4;try{gh(e,a,t)}finally{te=s,T.p=n,N.T=l}}Ce=1,Mf(),Of(),Cf()}}function Mf(){if(Ce===1){Ce=0;var e=ht,a=Nl,t=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||t){t=N.T,N.T=null;var l=T.p;T.p=2;var n=te;te|=4;try{uf(a,e);var i=Ks,s=mo(e.containerInfo),u=i.focusedElem,o=i.selectionRange;if(s!==u&&u&&u.ownerDocument&&fo(u.ownerDocument.documentElement,u)){if(o!==null&&xc(u)){var p=o.start,b=o.end;if(b===void 0&&(b=p),"selectionStart"in u)u.selectionStart=p,u.selectionEnd=Math.min(b,u.value.length);else{var S=u.ownerDocument||document,v=S&&S.defaultView||window;if(v.getSelection){var x=v.getSelection(),D=u.textContent.length,k=Math.min(o.start,D),re=o.end===void 0?k:Math.min(o.end,D);!x.extend&&k>re&&(s=re,re=k,k=s);var m=ro(u,k),r=ro(u,re);if(m&&r&&(x.rangeCount!==1||x.anchorNode!==m.node||x.anchorOffset!==m.offset||x.focusNode!==r.node||x.focusOffset!==r.offset)){var h=S.createRange();h.setStart(m.node,m.offset),x.removeAllRanges(),k>re?(x.addRange(h),x.extend(r.node,r.offset)):(h.setEnd(r.node,r.offset),x.addRange(h))}}}}for(S=[],x=u;x=x.parentNode;)x.nodeType===1&&S.push({element:x,left:x.scrollLeft,top:x.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<S.length;u++){var j=S[u];j.element.scrollLeft=j.left,j.element.scrollTop=j.top}}wi=!!Zs,Ks=Zs=null}finally{te=n,T.p=l,N.T=t}}e.current=a,Ce=2}}function Of(){if(Ce===2){Ce=0;var e=ht,a=Nl,t=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||t){t=N.T,N.T=null;var l=T.p;T.p=2;var n=te;te|=4;try{tf(e,a.alternate,a)}finally{te=n,T.p=l,N.T=t}}Ce=3}}function Cf(){if(Ce===4||Ce===3){Ce=0,Kd();var e=ht,a=Nl,t=Wa,l=gf;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Ce=5:(Ce=0,Nl=ht=null,Df(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(mt=null),Pi(t),a=a.stateNode,ea&&typeof ea.onCommitFiberRoot=="function")try{ea.onCommitFiberRoot(Dl,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=N.T,n=T.p,T.p=2,N.T=null;try{for(var i=e.onRecoverableError,s=0;s<l.length;s++){var u=l[s];i(u.value,{componentStack:u.stack})}}finally{N.T=a,T.p=n}}(Wa&3)!==0&&Ei(),Da(e),n=e.pendingLanes,(t&261930)!==0&&(n&42)!==0?e===_s?mn++:(mn=0,_s=e):mn=0,hn(0)}}function Df(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,Kl(a)))}function Ei(){return Mf(),Of(),Cf(),Rf()}function Rf(){if(Ce!==5)return!1;var e=ht,a=Ds;Ds=0;var t=Pi(Wa),l=N.T,n=T.p;try{T.p=32>t?32:t,N.T=null,t=Rs,Rs=null;var i=ht,s=Wa;if(Ce=0,Nl=ht=null,Wa=0,(te&6)!==0)throw Error(d(331));var u=te;if(te|=4,mf(i.current),rf(i,i.current,s,t),te=u,hn(0,!1),ea&&typeof ea.onPostCommitFiberRoot=="function")try{ea.onPostCommitFiberRoot(Dl,i)}catch{}return!0}finally{T.p=n,N.T=l,Df(e,a)}}function _f(e,a,t){a=ma(t,a),a=fs(e.stateNode,a,2),e=st(e,a,2),e!==null&&(_l(e,2),Da(e))}function ce(e,a,t){if(e.tag===3)_f(e,e,t);else for(;a!==null;){if(a.tag===3){_f(a,e,t);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(mt===null||!mt.has(l))){e=ma(t,e),t=_r(2),l=st(a,t,2),l!==null&&(Ur(t,l,a,e),_l(l,2),Da(l));break}}a=a.return}}function Bs(e,a,t){var l=e.pingCache;if(l===null){l=e.pingCache=new yh;var n=new Set;l.set(a,n)}else n=l.get(a),n===void 0&&(n=new Set,l.set(a,n));n.has(t)||(Ms=!0,n.add(t),e=zh.bind(null,e,a,t),a.then(e,e))}function zh(e,a,t){var l=e.pingCache;l!==null&&l.delete(a),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,me===e&&(W&t)===t&&(ye===4||ye===3&&(W&62914560)===W&&300>Pe()-yi?(te&2)===0&&jl(e,0):Os|=t,bl===W&&(bl=0)),Da(e)}function Uf(e,a){a===0&&(a=Au()),e=Ct(e,a),e!==null&&(_l(e,a),Da(e))}function Eh(e){var a=e.memoizedState,t=0;a!==null&&(t=a.retryLane),Uf(e,t)}function Ah(e,a){var t=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(t=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(d(314))}l!==null&&l.delete(a),Uf(e,t)}function Th(e,a){return Wi(e,a)}var Ai=null,zl=null,ws=!1,Ti=!1,ks=!1,gt=0;function Da(e){e!==zl&&e.next===null&&(zl===null?Ai=zl=e:zl=zl.next=e),Ti=!0,ws||(ws=!0,Oh())}function hn(e,a){if(!ks&&Ti){ks=!0;do for(var t=!1,l=Ai;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var s=l.suspendedLanes,u=l.pingedLanes;i=(1<<31-aa(42|e)+1)-1,i&=n&~(s&~u),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(t=!0,kf(l,i))}else i=W,i=Dn(l,l===me?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Rl(l,i)||(t=!0,kf(l,i));l=l.next}while(t);ks=!1}}function Mh(){Hf()}function Hf(){Ti=ws=!1;var e=0;gt!==0&&Yh()&&(e=gt);for(var a=Pe(),t=null,l=Ai;l!==null;){var n=l.next,i=Bf(l,a);i===0?(l.next=null,t===null?Ai=n:t.next=n,n===null&&(zl=t)):(t=l,(e!==0||(i&3)!==0)&&(Ti=!0)),l=n}Ce!==0&&Ce!==5||hn(e),gt!==0&&(gt=0)}function Bf(e,a){for(var t=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var s=31-aa(i),u=1<<s,o=n[s];o===-1?((u&t)===0||(u&l)!==0)&&(n[s]=am(u,a)):o<=a&&(e.expiredLanes|=u),i&=~u}if(a=me,t=W,t=Dn(e,e===a?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,t===0||e===a&&(ie===2||ie===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&$i(l),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Rl(e,t)){if(a=t&-t,a===e.callbackPriority)return a;switch(l!==null&&$i(l),Pi(t)){case 2:case 8:t=zu;break;case 32:t=Tn;break;case 268435456:t=Eu;break;default:t=Tn}return l=wf.bind(null,e),t=Wi(t,l),e.callbackPriority=a,e.callbackNode=t,a}return l!==null&&l!==null&&$i(l),e.callbackPriority=2,e.callbackNode=null,2}function wf(e,a){if(Ce!==0&&Ce!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Ei()&&e.callbackNode!==t)return null;var l=W;return l=Dn(e,e===me?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(xf(e,l,a),Bf(e,Pe()),e.callbackNode!=null&&e.callbackNode===t?wf.bind(null,e):null)}function kf(e,a){if(Ei())return null;xf(e,a,!0)}function Oh(){Gh(function(){(te&6)!==0?Wi(Su,Mh):Hf()})}function Ys(){if(gt===0){var e=ol;e===0&&(e=Mn,Mn<<=1,(Mn&261888)===0&&(Mn=256)),gt=e}return gt}function Yf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Hn(""+e)}function qf(e,a){var t=a.ownerDocument.createElement("input");return t.name=a.name,t.value=a.value,e.id&&t.setAttribute("form",e.id),a.parentNode.insertBefore(t,a),e=new FormData(e),t.parentNode.removeChild(t),e}function Ch(e,a,t,l,n){if(a==="submit"&&t&&t.stateNode===n){var i=Yf((n[Ze]||null).action),s=l.submitter;s&&(a=(a=s[Ze]||null)?Yf(a.formAction):s.getAttribute("formAction"),a!==null&&(i=a,s=null));var u=new Yn("action","action",null,l,n);e.push({event:u,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(gt!==0){var o=s?qf(n,s):new FormData(n);is(t,{pending:!0,data:o,method:n.method,action:i},null,o)}}else typeof i=="function"&&(u.preventDefault(),o=s?qf(n,s):new FormData(n),is(t,{pending:!0,data:o,method:n.method,action:i},i,o))},currentTarget:n}]})}}for(var qs=0;qs<jc.length;qs++){var Gs=jc[qs],Dh=Gs.toLowerCase(),Rh=Gs[0].toUpperCase()+Gs.slice(1);ja(Dh,"on"+Rh)}ja(go,"onAnimationEnd"),ja(vo,"onAnimationIteration"),ja(xo,"onAnimationStart"),ja("dblclick","onDoubleClick"),ja("focusin","onFocus"),ja("focusout","onBlur"),ja(Jm,"onTransitionRun"),ja(Wm,"onTransitionStart"),ja($m,"onTransitionCancel"),ja(yo,"onTransitionEnd"),Wt("onMouseEnter",["mouseout","mouseover"]),Wt("onMouseLeave",["mouseout","mouseover"]),Wt("onPointerEnter",["pointerout","pointerover"]),Wt("onPointerLeave",["pointerout","pointerover"]),At("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),At("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),At("onBeforeInput",["compositionend","keypress","textInput","paste"]),At("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),At("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),At("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_h=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pn));function Gf(e,a){a=(a&4)!==0;for(var t=0;t<e.length;t++){var l=e[t],n=l.event;l=l.listeners;e:{var i=void 0;if(a)for(var s=l.length-1;0<=s;s--){var u=l[s],o=u.instance,p=u.currentTarget;if(u=u.listener,o!==i&&n.isPropagationStopped())break e;i=u,n.currentTarget=p;try{i(n)}catch(b){Ln(b)}n.currentTarget=null,i=o}else for(s=0;s<l.length;s++){if(u=l[s],o=u.instance,p=u.currentTarget,u=u.listener,o!==i&&n.isPropagationStopped())break e;i=u,n.currentTarget=p;try{i(n)}catch(b){Ln(b)}n.currentTarget=null,i=o}}}}function J(e,a){var t=a[ec];t===void 0&&(t=a[ec]=new Set);var l=e+"__bubble";t.has(l)||(Lf(a,e,2,!1),t.add(l))}function Ls(e,a,t){var l=0;a&&(l|=4),Lf(t,e,l,a)}var Mi="_reactListening"+Math.random().toString(36).slice(2);function Xs(e){if(!e[Mi]){e[Mi]=!0,_u.forEach(function(t){t!=="selectionchange"&&(_h.has(t)||Ls(t,!1,e),Ls(t,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Mi]||(a[Mi]=!0,Ls("selectionchange",!1,a))}}function Lf(e,a,t,l){switch(vd(a)){case 2:var n=sp;break;case 8:n=up;break;default:n=nu}t=n.bind(null,a,t,e),n=void 0,!oc||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(a,t,{capture:!0,passive:n}):e.addEventListener(a,t,!0):n!==void 0?e.addEventListener(a,t,{passive:n}):e.addEventListener(a,t,!1)}function Qs(e,a,t,l,n){var i=l;if((a&1)===0&&(a&2)===0&&l!==null)e:for(;;){if(l===null)return;var s=l.tag;if(s===3||s===4){var u=l.stateNode.containerInfo;if(u===n)break;if(s===4)for(s=l.return;s!==null;){var o=s.tag;if((o===3||o===4)&&s.stateNode.containerInfo===n)return;s=s.return}for(;u!==null;){if(s=Zt(u),s===null)return;if(o=s.tag,o===5||o===6||o===26||o===27){l=i=s;continue e}u=u.parentNode}}l=l.return}Vu(function(){var p=i,b=sc(t),S=[];e:{var v=bo.get(e);if(v!==void 0){var x=Yn,D=e;switch(e){case"keypress":if(wn(t)===0)break e;case"keydown":case"keyup":x=Am;break;case"focusin":D="focus",x=mc;break;case"focusout":D="blur",x=mc;break;case"beforeblur":case"afterblur":x=mc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Ju;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=hm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Om;break;case go:case vo:case xo:x=vm;break;case yo:x=Dm;break;case"scroll":case"scrollend":x=dm;break;case"wheel":x=_m;break;case"copy":case"cut":case"paste":x=ym;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=$u;break;case"toggle":case"beforetoggle":x=Hm}var k=(a&4)!==0,re=!k&&(e==="scroll"||e==="scrollend"),m=k?v!==null?v+"Capture":null:v;k=[];for(var r=p,h;r!==null;){var j=r;if(h=j.stateNode,j=j.tag,j!==5&&j!==26&&j!==27||h===null||m===null||(j=Bl(r,m),j!=null&&k.push(gn(r,j,h))),re)break;r=r.return}0<k.length&&(v=new x(v,D,null,t,b),S.push({event:v,listeners:k}))}}if((a&7)===0){e:{if(v=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",v&&t!==cc&&(D=t.relatedTarget||t.fromElement)&&(Zt(D)||D[Vt]))break e;if((x||v)&&(v=b.window===b?b:(v=b.ownerDocument)?v.defaultView||v.parentWindow:window,x?(D=t.relatedTarget||t.toElement,x=p,D=D?Zt(D):null,D!==null&&(re=U(D),k=D.tag,D!==re||k!==5&&k!==27&&k!==6)&&(D=null)):(x=null,D=p),x!==D)){if(k=Ju,j="onMouseLeave",m="onMouseEnter",r="mouse",(e==="pointerout"||e==="pointerover")&&(k=$u,j="onPointerLeave",m="onPointerEnter",r="pointer"),re=x==null?v:Hl(x),h=D==null?v:Hl(D),v=new k(j,r+"leave",x,t,b),v.target=re,v.relatedTarget=h,j=null,Zt(b)===p&&(k=new k(m,r+"enter",D,t,b),k.target=h,k.relatedTarget=re,j=k),re=j,x&&D)a:{for(k=Uh,m=x,r=D,h=0,j=m;j;j=k(j))h++;j=0;for(var H=r;H;H=k(H))j++;for(;0<h-j;)m=k(m),h--;for(;0<j-h;)r=k(r),j--;for(;h--;){if(m===r||r!==null&&m===r.alternate){k=m;break a}m=k(m),r=k(r)}k=null}else k=null;x!==null&&Xf(S,v,x,k,!1),D!==null&&re!==null&&Xf(S,re,D,k,!0)}}e:{if(v=p?Hl(p):window,x=v.nodeName&&v.nodeName.toLowerCase(),x==="select"||x==="input"&&v.type==="file")var ee=no;else if(to(v))if(io)ee=Vm;else{ee=Xm;var _=Lm}else x=v.nodeName,!x||x.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?p&&ic(p.elementType)&&(ee=no):ee=Qm;if(ee&&(ee=ee(e,p))){lo(S,ee,t,b);break e}_&&_(e,v,p),e==="focusout"&&p&&v.type==="number"&&p.memoizedProps.value!=null&&nc(v,"number",v.value)}switch(_=p?Hl(p):window,e){case"focusin":(to(_)||_.contentEditable==="true")&&(al=_,yc=p,Ql=null);break;case"focusout":Ql=yc=al=null;break;case"mousedown":bc=!0;break;case"contextmenu":case"mouseup":case"dragend":bc=!1,ho(S,t,b);break;case"selectionchange":if(Km)break;case"keydown":case"keyup":ho(S,t,b)}var Q;if(pc)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else el?eo(e,t)&&($="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&($="onCompositionStart");$&&(Fu&&t.locale!=="ko"&&(el||$!=="onCompositionStart"?$==="onCompositionEnd"&&el&&(Q=Zu()):(et=b,rc="value"in et?et.value:et.textContent,el=!0)),_=Oi(p,$),0<_.length&&($=new Wu($,e,null,t,b),S.push({event:$,listeners:_}),Q?$.data=Q:(Q=ao(t),Q!==null&&($.data=Q)))),(Q=wm?km(e,t):Ym(e,t))&&($=Oi(p,"onBeforeInput"),0<$.length&&(_=new Wu("onBeforeInput","beforeinput",null,t,b),S.push({event:_,listeners:$}),_.data=Q)),Ch(S,e,p,t,b)}Gf(S,a)})}function gn(e,a,t){return{instance:e,listener:a,currentTarget:t}}function Oi(e,a){for(var t=a+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Bl(e,t),n!=null&&l.unshift(gn(e,n,i)),n=Bl(e,a),n!=null&&l.push(gn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function Uh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xf(e,a,t,l,n){for(var i=a._reactName,s=[];t!==null&&t!==l;){var u=t,o=u.alternate,p=u.stateNode;if(u=u.tag,o!==null&&o===l)break;u!==5&&u!==26&&u!==27||p===null||(o=p,n?(p=Bl(t,i),p!=null&&s.unshift(gn(t,p,o))):n||(p=Bl(t,i),p!=null&&s.push(gn(t,p,o)))),t=t.return}s.length!==0&&e.push({event:a,listeners:s})}var Hh=/\r\n?/g,Bh=/\u0000|\uFFFD/g;function Qf(e){return(typeof e=="string"?e:""+e).replace(Hh,`
`).replace(Bh,"")}function Vf(e,a){return a=Qf(a),Qf(e)===a}function oe(e,a,t,l,n,i){switch(t){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||Ft(e,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&Ft(e,""+l);break;case"className":_n(e,"class",l);break;case"tabIndex":_n(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":_n(e,t,l);break;case"style":Xu(e,l,i);break;case"data":if(a!=="object"){_n(e,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||t!=="href")){e.removeAttribute(t);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=Hn(""+l),e.setAttribute(t,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(t==="formAction"?(a!=="input"&&oe(e,a,"name",n.name,n,null),oe(e,a,"formEncType",n.formEncType,n,null),oe(e,a,"formMethod",n.formMethod,n,null),oe(e,a,"formTarget",n.formTarget,n,null)):(oe(e,a,"encType",n.encType,n,null),oe(e,a,"method",n.method,n,null),oe(e,a,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=Hn(""+l),e.setAttribute(t,l);break;case"onClick":l!=null&&(e.onclick=Ua);break;case"onScroll":l!=null&&J("scroll",e);break;case"onScrollEnd":l!=null&&J("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(t=l.__html,t!=null){if(n.children!=null)throw Error(d(60));e.innerHTML=t}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}t=Hn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""+l):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":l===!0?e.setAttribute(t,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,l):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(t,l):e.removeAttribute(t);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(t):e.setAttribute(t,l);break;case"popover":J("beforetoggle",e),J("toggle",e),Rn(e,"popover",l);break;case"xlinkActuate":_a(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":_a(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":_a(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":_a(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":_a(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":_a(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":_a(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":_a(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":_a(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Rn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=rm.get(t)||t,Rn(e,t,l))}}function Vs(e,a,t,l,n,i){switch(t){case"style":Xu(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(t=l.__html,t!=null){if(n.children!=null)throw Error(d(60));e.innerHTML=t}}break;case"children":typeof l=="string"?Ft(e,l):(typeof l=="number"||typeof l=="bigint")&&Ft(e,""+l);break;case"onScroll":l!=null&&J("scroll",e);break;case"onScrollEnd":l!=null&&J("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Ua);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Uu.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(n=t.endsWith("Capture"),a=t.slice(2,n?t.length-7:void 0),i=e[Ze]||null,i=i!=null?i[t]:null,typeof i=="function"&&e.removeEventListener(a,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(a,l,n);break e}t in e?e[t]=l:l===!0?e.setAttribute(t,""):Rn(e,t,l)}}}function we(e,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":J("error",e),J("load",e);var l=!1,n=!1,i;for(i in t)if(t.hasOwnProperty(i)){var s=t[i];if(s!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,a));default:oe(e,a,i,s,t,null)}}n&&oe(e,a,"srcSet",t.srcSet,t,null),l&&oe(e,a,"src",t.src,t,null);return;case"input":J("invalid",e);var u=i=s=n=null,o=null,p=null;for(l in t)if(t.hasOwnProperty(l)){var b=t[l];if(b!=null)switch(l){case"name":n=b;break;case"type":s=b;break;case"checked":o=b;break;case"defaultChecked":p=b;break;case"value":i=b;break;case"defaultValue":u=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(d(137,a));break;default:oe(e,a,l,b,t,null)}}Yu(e,i,u,o,p,s,n,!1);return;case"select":J("invalid",e),l=s=i=null;for(n in t)if(t.hasOwnProperty(n)&&(u=t[n],u!=null))switch(n){case"value":i=u;break;case"defaultValue":s=u;break;case"multiple":l=u;default:oe(e,a,n,u,t,null)}a=i,t=s,e.multiple=!!l,a!=null?$t(e,!!l,a,!1):t!=null&&$t(e,!!l,t,!0);return;case"textarea":J("invalid",e),i=n=l=null;for(s in t)if(t.hasOwnProperty(s)&&(u=t[s],u!=null))switch(s){case"value":l=u;break;case"defaultValue":n=u;break;case"children":i=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(d(91));break;default:oe(e,a,s,u,t,null)}Gu(e,l,n,i);return;case"option":for(o in t)if(t.hasOwnProperty(o)&&(l=t[o],l!=null))switch(o){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:oe(e,a,o,l,t,null)}return;case"dialog":J("beforetoggle",e),J("toggle",e),J("cancel",e),J("close",e);break;case"iframe":case"object":J("load",e);break;case"video":case"audio":for(l=0;l<pn.length;l++)J(pn[l],e);break;case"image":J("error",e),J("load",e);break;case"details":J("toggle",e);break;case"embed":case"source":case"link":J("error",e),J("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in t)if(t.hasOwnProperty(p)&&(l=t[p],l!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,a));default:oe(e,a,p,l,t,null)}return;default:if(ic(a)){for(b in t)t.hasOwnProperty(b)&&(l=t[b],l!==void 0&&Vs(e,a,b,l,t,void 0));return}}for(u in t)t.hasOwnProperty(u)&&(l=t[u],l!=null&&oe(e,a,u,l,t,null))}function wh(e,a,t,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,s=null,u=null,o=null,p=null,b=null;for(x in t){var S=t[x];if(t.hasOwnProperty(x)&&S!=null)switch(x){case"checked":break;case"value":break;case"defaultValue":o=S;default:l.hasOwnProperty(x)||oe(e,a,x,null,l,S)}}for(var v in l){var x=l[v];if(S=t[v],l.hasOwnProperty(v)&&(x!=null||S!=null))switch(v){case"type":i=x;break;case"name":n=x;break;case"checked":p=x;break;case"defaultChecked":b=x;break;case"value":s=x;break;case"defaultValue":u=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(d(137,a));break;default:x!==S&&oe(e,a,v,x,l,S)}}lc(e,s,u,o,p,b,i,n);return;case"select":x=s=u=v=null;for(i in t)if(o=t[i],t.hasOwnProperty(i)&&o!=null)switch(i){case"value":break;case"multiple":x=o;default:l.hasOwnProperty(i)||oe(e,a,i,null,l,o)}for(n in l)if(i=l[n],o=t[n],l.hasOwnProperty(n)&&(i!=null||o!=null))switch(n){case"value":v=i;break;case"defaultValue":u=i;break;case"multiple":s=i;default:i!==o&&oe(e,a,n,i,l,o)}a=u,t=s,l=x,v!=null?$t(e,!!t,v,!1):!!l!=!!t&&(a!=null?$t(e,!!t,a,!0):$t(e,!!t,t?[]:"",!1));return;case"textarea":x=v=null;for(u in t)if(n=t[u],t.hasOwnProperty(u)&&n!=null&&!l.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:oe(e,a,u,null,l,n)}for(s in l)if(n=l[s],i=t[s],l.hasOwnProperty(s)&&(n!=null||i!=null))switch(s){case"value":v=n;break;case"defaultValue":x=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(d(91));break;default:n!==i&&oe(e,a,s,n,l,i)}qu(e,v,x);return;case"option":for(var D in t)if(v=t[D],t.hasOwnProperty(D)&&v!=null&&!l.hasOwnProperty(D))switch(D){case"selected":e.selected=!1;break;default:oe(e,a,D,null,l,v)}for(o in l)if(v=l[o],x=t[o],l.hasOwnProperty(o)&&v!==x&&(v!=null||x!=null))switch(o){case"selected":e.selected=v&&typeof v!="function"&&typeof v!="symbol";break;default:oe(e,a,o,v,l,x)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var k in t)v=t[k],t.hasOwnProperty(k)&&v!=null&&!l.hasOwnProperty(k)&&oe(e,a,k,null,l,v);for(p in l)if(v=l[p],x=t[p],l.hasOwnProperty(p)&&v!==x&&(v!=null||x!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(d(137,a));break;default:oe(e,a,p,v,l,x)}return;default:if(ic(a)){for(var re in t)v=t[re],t.hasOwnProperty(re)&&v!==void 0&&!l.hasOwnProperty(re)&&Vs(e,a,re,void 0,l,v);for(b in l)v=l[b],x=t[b],!l.hasOwnProperty(b)||v===x||v===void 0&&x===void 0||Vs(e,a,b,v,l,x);return}}for(var m in t)v=t[m],t.hasOwnProperty(m)&&v!=null&&!l.hasOwnProperty(m)&&oe(e,a,m,null,l,v);for(S in l)v=l[S],x=t[S],!l.hasOwnProperty(S)||v===x||v==null&&x==null||oe(e,a,S,v,l,x)}function Zf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function kh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,t=performance.getEntriesByType("resource"),l=0;l<t.length;l++){var n=t[l],i=n.transferSize,s=n.initiatorType,u=n.duration;if(i&&u&&Zf(s)){for(s=0,u=n.responseEnd,l+=1;l<t.length;l++){var o=t[l],p=o.startTime;if(p>u)break;var b=o.transferSize,S=o.initiatorType;b&&Zf(S)&&(o=o.responseEnd,s+=b*(o<u?1:(u-p)/(o-p)))}if(--l,a+=8*(i+s)/(n.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Zs=null,Ks=null;function Ci(e){return e.nodeType===9?e:e.ownerDocument}function Kf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Jf(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function Js(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Ws=null;function Yh(){var e=window.event;return e&&e.type==="popstate"?e===Ws?!1:(Ws=e,!0):(Ws=null,!1)}var Wf=typeof setTimeout=="function"?setTimeout:void 0,qh=typeof clearTimeout=="function"?clearTimeout:void 0,$f=typeof Promise=="function"?Promise:void 0,Gh=typeof queueMicrotask=="function"?queueMicrotask:typeof $f<"u"?function(e){return $f.resolve(null).then(e).catch(Lh)}:Wf;function Lh(e){setTimeout(function(){throw e})}function vt(e){return e==="head"}function Ff(e,a){var t=a,l=0;do{var n=t.nextSibling;if(e.removeChild(t),n&&n.nodeType===8)if(t=n.data,t==="/$"||t==="/&"){if(l===0){e.removeChild(n),Ml(a);return}l--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")l++;else if(t==="html")vn(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,vn(t);for(var i=t.firstChild;i;){var s=i.nextSibling,u=i.nodeName;i[Ul]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&i.rel.toLowerCase()==="stylesheet"||t.removeChild(i),i=s}}else t==="body"&&vn(e.ownerDocument.body);t=n}while(t);Ml(a)}function If(e,a){var t=e;e=0;do{var l=t.nextSibling;if(t.nodeType===1?a?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(a?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=l}while(t)}function $s(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":$s(t),ac(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function Xh(e,a,t,l){for(;e.nodeType===1;){var n=t;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ul])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=xa(e.nextSibling),e===null)break}return null}function Qh(e,a,t){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=xa(e.nextSibling),e===null))return null;return e}function Pf(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=xa(e.nextSibling),e===null))return null;return e}function Fs(e){return e.data==="$?"||e.data==="$~"}function Is(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Vh(e,a){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||t.readyState!=="loading")a();else{var l=function(){a(),t.removeEventListener("DOMContentLoaded",l)};t.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function xa(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var Ps=null;function ed(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(a===0)return xa(e.nextSibling);a--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||a++}e=e.nextSibling}return null}function ad(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(a===0)return e;a--}else t!=="/$"&&t!=="/&"||a++}e=e.previousSibling}return null}function td(e,a,t){switch(a=Ci(t),e){case"html":if(e=a.documentElement,!e)throw Error(d(452));return e;case"head":if(e=a.head,!e)throw Error(d(453));return e;case"body":if(e=a.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function vn(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);ac(e)}var ya=new Map,ld=new Set;function Di(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $a=T.d;T.d={f:Zh,r:Kh,D:Jh,C:Wh,L:$h,m:Fh,X:Ph,S:Ih,M:ep};function Zh(){var e=$a.f(),a=ji();return e||a}function Kh(e){var a=Kt(e);a!==null&&a.tag===5&&a.type==="form"?yr(a):$a.r(e)}var El=typeof document>"u"?null:document;function nd(e,a,t){var l=El;if(l&&typeof a=="string"&&a){var n=fa(a);n='link[rel="'+e+'"][href="'+n+'"]',typeof t=="string"&&(n+='[crossorigin="'+t+'"]'),ld.has(n)||(ld.add(n),e={rel:e,crossOrigin:t,href:a},l.querySelector(n)===null&&(a=l.createElement("link"),we(a,"link",e),De(a),l.head.appendChild(a)))}}function Jh(e){$a.D(e),nd("dns-prefetch",e,null)}function Wh(e,a){$a.C(e,a),nd("preconnect",e,a)}function $h(e,a,t){$a.L(e,a,t);var l=El;if(l&&e&&a){var n='link[rel="preload"][as="'+fa(a)+'"]';a==="image"&&t&&t.imageSrcSet?(n+='[imagesrcset="'+fa(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(n+='[imagesizes="'+fa(t.imageSizes)+'"]')):n+='[href="'+fa(e)+'"]';var i=n;switch(a){case"style":i=Al(e);break;case"script":i=Tl(e)}ya.has(i)||(e=B({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:e,as:a},t),ya.set(i,e),l.querySelector(n)!==null||a==="style"&&l.querySelector(xn(i))||a==="script"&&l.querySelector(yn(i))||(a=l.createElement("link"),we(a,"link",e),De(a),l.head.appendChild(a)))}}function Fh(e,a){$a.m(e,a);var t=El;if(t&&e){var l=a&&typeof a.as=="string"?a.as:"script",n='link[rel="modulepreload"][as="'+fa(l)+'"][href="'+fa(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Tl(e)}if(!ya.has(i)&&(e=B({rel:"modulepreload",href:e},a),ya.set(i,e),t.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(yn(i)))return}l=t.createElement("link"),we(l,"link",e),De(l),t.head.appendChild(l)}}}function Ih(e,a,t){$a.S(e,a,t);var l=El;if(l&&e){var n=Jt(l).hoistableStyles,i=Al(e);a=a||"default";var s=n.get(i);if(!s){var u={loading:0,preload:null};if(s=l.querySelector(xn(i)))u.loading=5;else{e=B({rel:"stylesheet",href:e,"data-precedence":a},t),(t=ya.get(i))&&eu(e,t);var o=s=l.createElement("link");De(o),we(o,"link",e),o._p=new Promise(function(p,b){o.onload=p,o.onerror=b}),o.addEventListener("load",function(){u.loading|=1}),o.addEventListener("error",function(){u.loading|=2}),u.loading|=4,Ri(s,a,l)}s={type:"stylesheet",instance:s,count:1,state:u},n.set(i,s)}}}function Ph(e,a){$a.X(e,a);var t=El;if(t&&e){var l=Jt(t).hoistableScripts,n=Tl(e),i=l.get(n);i||(i=t.querySelector(yn(n)),i||(e=B({src:e,async:!0},a),(a=ya.get(n))&&au(e,a),i=t.createElement("script"),De(i),we(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function ep(e,a){$a.M(e,a);var t=El;if(t&&e){var l=Jt(t).hoistableScripts,n=Tl(e),i=l.get(n);i||(i=t.querySelector(yn(n)),i||(e=B({src:e,async:!0,type:"module"},a),(a=ya.get(n))&&au(e,a),i=t.createElement("script"),De(i),we(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function id(e,a,t,l){var n=(n=Z.current)?Di(n):null;if(!n)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(a=Al(t.href),t=Jt(n).hoistableStyles,l=t.get(a),l||(l={type:"style",instance:null,count:0,state:null},t.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Al(t.href);var i=Jt(n).hoistableStyles,s=i.get(e);if(s||(n=n.ownerDocument||n,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,s),(i=n.querySelector(xn(e)))&&!i._p&&(s.instance=i,s.state.loading=5),ya.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},ya.set(e,t),i||ap(n,e,t,s.state))),a&&l===null)throw Error(d(528,""));return s}if(a&&l!==null)throw Error(d(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Tl(t),t=Jt(n).hoistableScripts,l=t.get(a),l||(l={type:"script",instance:null,count:0,state:null},t.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function Al(e){return'href="'+fa(e)+'"'}function xn(e){return'link[rel="stylesheet"]['+e+"]"}function cd(e){return B({},e,{"data-precedence":e.precedence,precedence:null})}function ap(e,a,t,l){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=e.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),we(a,"link",t),De(a),e.head.appendChild(a))}function Tl(e){return'[src="'+fa(e)+'"]'}function yn(e){return"script[async]"+e}function sd(e,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var l=e.querySelector('style[data-href~="'+fa(t.href)+'"]');if(l)return a.instance=l,De(l),l;var n=B({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),De(l),we(l,"style",n),Ri(l,t.precedence,e),a.instance=l;case"stylesheet":n=Al(t.href);var i=e.querySelector(xn(n));if(i)return a.state.loading|=4,a.instance=i,De(i),i;l=cd(t),(n=ya.get(n))&&eu(l,n),i=(e.ownerDocument||e).createElement("link"),De(i);var s=i;return s._p=new Promise(function(u,o){s.onload=u,s.onerror=o}),we(i,"link",l),a.state.loading|=4,Ri(i,t.precedence,e),a.instance=i;case"script":return i=Tl(t.src),(n=e.querySelector(yn(i)))?(a.instance=n,De(n),n):(l=t,(n=ya.get(i))&&(l=B({},t),au(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),De(n),we(n,"link",l),e.head.appendChild(n),a.instance=n);case"void":return null;default:throw Error(d(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,Ri(l,t.precedence,e));return a.instance}function Ri(e,a,t){for(var l=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,s=0;s<l.length;s++){var u=l[s];if(u.dataset.precedence===a)i=u;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(e,a.firstChild))}function eu(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function au(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var _i=null;function ud(e,a,t){if(_i===null){var l=new Map,n=_i=new Map;n.set(t,l)}else n=_i,l=n.get(t),l||(l=new Map,n.set(t,l));if(l.has(e))return l;for(l.set(e,null),t=t.getElementsByTagName(e),n=0;n<t.length;n++){var i=t[n];if(!(i[Ul]||i[_e]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(a)||"";s=e+s;var u=l.get(s);u?u.push(i):l.set(s,[i])}}return l}function od(e,a,t){e=e.ownerDocument||e,e.head.insertBefore(t,a==="title"?e.querySelector("head > title"):null)}function tp(e,a,t){if(t===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function rd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function lp(e,a,t,l){if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=Al(l.href),i=a.querySelector(xn(n));if(i){a=i._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=Ui.bind(e),a.then(e,e)),t.state.loading|=4,t.instance=i,De(i);return}i=a.ownerDocument||a,l=cd(l),(n=ya.get(n))&&eu(l,n),i=i.createElement("link"),De(i);var s=i;s._p=new Promise(function(u,o){s.onload=u,s.onerror=o}),we(i,"link",l),t.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,a),(a=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=Ui.bind(e),a.addEventListener("load",t),a.addEventListener("error",t))}}var tu=0;function np(e,a){return e.stylesheets&&e.count===0&&Bi(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var l=setTimeout(function(){if(e.stylesheets&&Bi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+a);0<e.imgBytes&&tu===0&&(tu=62500*kh());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Bi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>tu?50:800)+a);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Ui(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Bi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Hi=null;function Bi(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Hi=new Map,a.forEach(ip,e),Hi=null,Ui.call(e))}function ip(e,a){if(!(a.state.loading&4)){var t=Hi.get(e);if(t)var l=t.get(null);else{t=new Map,Hi.set(e,t);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var s=n[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(t.set(s.dataset.precedence,s),l=s)}l&&t.set(null,l)}n=a.instance,s=n.getAttribute("data-precedence"),i=t.get(s)||l,i===l&&t.set(null,n),t.set(s,n),this.count++,l=Ui.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),a.state.loading|=4}}var bn={$$typeof:ke,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function cp(e,a,t,l,n,i,s,u,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Fi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fi(0),this.hiddenUpdates=Fi(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function fd(e,a,t,l,n,i,s,u,o,p,b,S){return e=new cp(e,a,t,s,o,p,b,S,u),a=1,i===!0&&(a|=24),i=la(3,null,null,a),e.current=i,i.stateNode=e,a=Hc(),a.refCount++,e.pooledCache=a,a.refCount++,i.memoizedState={element:l,isDehydrated:t,cache:a},Yc(i),e}function dd(e){return e?(e=nl,e):nl}function md(e,a,t,l,n,i){n=dd(n),l.context===null?l.context=n:l.pendingContext=n,l=ct(a),l.payload={element:t},i=i===void 0?null:i,i!==null&&(l.callback=i),t=st(e,l,a),t!==null&&(Ie(t,e,a),Fl(t,e,a))}function hd(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<a?t:a}}function lu(e,a){hd(e,a),(e=e.alternate)&&hd(e,a)}function pd(e){if(e.tag===13||e.tag===31){var a=Ct(e,67108864);a!==null&&Ie(a,e,67108864),lu(e,67108864)}}function gd(e){if(e.tag===13||e.tag===31){var a=ua();a=Ii(a);var t=Ct(e,a);t!==null&&Ie(t,e,a),lu(e,a)}}var wi=!0;function sp(e,a,t,l){var n=N.T;N.T=null;var i=T.p;try{T.p=2,nu(e,a,t,l)}finally{T.p=i,N.T=n}}function up(e,a,t,l){var n=N.T;N.T=null;var i=T.p;try{T.p=8,nu(e,a,t,l)}finally{T.p=i,N.T=n}}function nu(e,a,t,l){if(wi){var n=iu(l);if(n===null)Qs(e,a,l,ki,t),xd(e,l);else if(rp(n,e,a,t,l))l.stopPropagation();else if(xd(e,l),a&4&&-1<op.indexOf(e)){for(;n!==null;){var i=Kt(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=Et(i.pendingLanes);if(s!==0){var u=i;for(u.pendingLanes|=2,u.entangledLanes|=2;s;){var o=1<<31-aa(s);u.entanglements[1]|=o,s&=~o}Da(i),(te&6)===0&&(bi=Pe()+500,hn(0))}}break;case 31:case 13:u=Ct(i,2),u!==null&&Ie(u,i,2),ji(),lu(i,2)}if(i=iu(l),i===null&&Qs(e,a,l,ki,t),i===n)break;n=i}n!==null&&l.stopPropagation()}else Qs(e,a,l,null,t)}}function iu(e){return e=sc(e),cu(e)}var ki=null;function cu(e){if(ki=null,e=Zt(e),e!==null){var a=U(e);if(a===null)e=null;else{var t=a.tag;if(t===13){if(e=V(a),e!==null)return e;e=null}else if(t===31){if(e=le(a),e!==null)return e;e=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return ki=e,null}function vd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Jd()){case Su:return 2;case zu:return 8;case Tn:case Wd:return 32;case Eu:return 268435456;default:return 32}default:return 32}}var su=!1,xt=null,yt=null,bt=null,Nn=new Map,jn=new Map,Nt=[],op="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xd(e,a){switch(e){case"focusin":case"focusout":xt=null;break;case"dragenter":case"dragleave":yt=null;break;case"mouseover":case"mouseout":bt=null;break;case"pointerover":case"pointerout":Nn.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":jn.delete(a.pointerId)}}function Sn(e,a,t,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:a,domEventName:t,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},a!==null&&(a=Kt(a),a!==null&&pd(a)),e):(e.eventSystemFlags|=l,a=e.targetContainers,n!==null&&a.indexOf(n)===-1&&a.push(n),e)}function rp(e,a,t,l,n){switch(a){case"focusin":return xt=Sn(xt,e,a,t,l,n),!0;case"dragenter":return yt=Sn(yt,e,a,t,l,n),!0;case"mouseover":return bt=Sn(bt,e,a,t,l,n),!0;case"pointerover":var i=n.pointerId;return Nn.set(i,Sn(Nn.get(i)||null,e,a,t,l,n)),!0;case"gotpointercapture":return i=n.pointerId,jn.set(i,Sn(jn.get(i)||null,e,a,t,l,n)),!0}return!1}function yd(e){var a=Zt(e.target);if(a!==null){var t=U(a);if(t!==null){if(a=t.tag,a===13){if(a=V(t),a!==null){e.blockedOn=a,Du(e.priority,function(){gd(t)});return}}else if(a===31){if(a=le(t),a!==null){e.blockedOn=a,Du(e.priority,function(){gd(t)});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yi(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var t=iu(e.nativeEvent);if(t===null){t=e.nativeEvent;var l=new t.constructor(t.type,t);cc=l,t.target.dispatchEvent(l),cc=null}else return a=Kt(t),a!==null&&pd(a),e.blockedOn=t,!1;a.shift()}return!0}function bd(e,a,t){Yi(e)&&t.delete(a)}function fp(){su=!1,xt!==null&&Yi(xt)&&(xt=null),yt!==null&&Yi(yt)&&(yt=null),bt!==null&&Yi(bt)&&(bt=null),Nn.forEach(bd),jn.forEach(bd)}function qi(e,a){e.blockedOn===a&&(e.blockedOn=null,su||(su=!0,g.unstable_scheduleCallback(g.unstable_NormalPriority,fp)))}var Gi=null;function Nd(e){Gi!==e&&(Gi=e,g.unstable_scheduleCallback(g.unstable_NormalPriority,function(){Gi===e&&(Gi=null);for(var a=0;a<e.length;a+=3){var t=e[a],l=e[a+1],n=e[a+2];if(typeof l!="function"){if(cu(l||t)===null)continue;break}var i=Kt(t);i!==null&&(e.splice(a,3),a-=3,is(i,{pending:!0,data:n,method:t.method,action:l},l,n))}}))}function Ml(e){function a(o){return qi(o,e)}xt!==null&&qi(xt,e),yt!==null&&qi(yt,e),bt!==null&&qi(bt,e),Nn.forEach(a),jn.forEach(a);for(var t=0;t<Nt.length;t++){var l=Nt[t];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Nt.length&&(t=Nt[0],t.blockedOn===null);)yd(t),t.blockedOn===null&&Nt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(l=0;l<t.length;l+=3){var n=t[l],i=t[l+1],s=n[Ze]||null;if(typeof i=="function")s||Nd(t);else if(s){var u=null;if(i&&i.hasAttribute("formAction")){if(n=i,s=i[Ze]||null)u=s.formAction;else if(cu(n)!==null)continue}else u=s.action;typeof u=="function"?t[l+1]=u:(t.splice(l,3),l-=3),Nd(t)}}}function jd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(s){return n=s})},focusReset:"manual",scroll:"manual"})}function a(){n!==null&&(n(),n=null),l||setTimeout(t,20)}function t(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(t,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),n!==null&&(n(),n=null)}}}function uu(e){this._internalRoot=e}Li.prototype.render=uu.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(d(409));var t=a.current,l=ua();md(t,l,e,a,null,null)},Li.prototype.unmount=uu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;md(e.current,2,null,e,null,null),ji(),a[Vt]=null}};function Li(e){this._internalRoot=e}Li.prototype.unstable_scheduleHydration=function(e){if(e){var a=Cu();e={blockedOn:null,target:e,priority:a};for(var t=0;t<Nt.length&&a!==0&&a<Nt[t].priority;t++);Nt.splice(t,0,e),t===0&&yd(e)}};var Sd=A.version;if(Sd!=="19.2.8")throw Error(d(527,Sd,"19.2.8"));T.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=y(a),e=e!==null?G(e):null,e=e===null?null:e.stateNode,e};var dp={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xi.isDisabled&&Xi.supportsFiber)try{Dl=Xi.inject(dp),ea=Xi}catch{}}return En.createRoot=function(e,a){if(!C(e))throw Error(d(299));var t=!1,l="",n=Or,i=Cr,s=Dr;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError)),a=fd(e,1,!1,null,null,t,l,null,n,i,s,jd),e[Vt]=a.current,Xs(e),new uu(a)},En.hydrateRoot=function(e,a,t){if(!C(e))throw Error(d(299));var l=!1,n="",i=Or,s=Cr,u=Dr,o=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError),t.formState!==void 0&&(o=t.formState)),a=fd(e,1,!0,a,t??null,l,n,o,i,s,u,jd),a.context=dd(null),t=a.current,l=ua(),l=Ii(l),n=ct(l),n.callback=null,st(t,n,l),t=l,a.current.lanes=t,_l(a,t),Da(a),e[Vt]=a.current,Xs(e),new Li(a)},En.version="19.2.8",En}var _d;function jp(){if(_d)return fu.exports;_d=1;function g(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g)}catch(A){console.error(A)}}return g(),fu.exports=Np(),fu.exports}var Sp=jp();/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=g=>g.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ep=g=>g.replace(/^([A-Z])|[\s-_]+(\w)/g,(A,E,d)=>d?d.toUpperCase():E.toLowerCase()),Ud=g=>{const A=Ep(g);return A.charAt(0).toUpperCase()+A.slice(1)},Bd=(...g)=>g.filter((A,E,d)=>!!A&&A.trim()!==""&&d.indexOf(A)===E).join(" ").trim(),Ap=g=>{for(const A in g)if(A.startsWith("aria-")||A==="role"||A==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Tp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=be.forwardRef(({color:g="currentColor",size:A=24,strokeWidth:E=2,absoluteStrokeWidth:d,className:C="",children:U,iconNode:V,...le},M)=>be.createElement("svg",{ref:M,...Tp,width:A,height:A,stroke:g,strokeWidth:d?Number(E)*24/Number(A):E,className:Bd("lucide",C),...!U&&!Ap(le)&&{"aria-hidden":"true"},...le},[...V.map(([y,G])=>be.createElement(y,G)),...Array.isArray(U)?U:[U]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=(g,A)=>{const E=be.forwardRef(({className:d,...C},U)=>be.createElement(Mp,{ref:U,iconNode:A,className:Bd(`lucide-${zp(Ud(g))}`,`lucide-${g}`,d),...C}));return E.displayName=Ud(g),E};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]],Cp=P("arrow-down-right",Op);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Rp=P("arrow-right",Dp);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],xu=P("arrow-up-right",_p);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],wd=P("award",Up);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Bp=P("book-open",Hp);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],kp=P("building-2",wp);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],qp=P("calendar",Yp);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Lp=P("check",Gp);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Qp=P("chevron-left",Xp);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Zp=P("chevron-right",Vp);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Jp=P("circle-alert",Kp);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],kd=P("circle-check",Wp);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Fp=P("clock",$p);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],yu=P("compass",Ip);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],e0=P("cpu",Pp);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]],t0=P("crosshair",a0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],pu=P("download",l0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],i0=P("eye",n0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=[["path",{d:"M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z",key:"18jl4k"}],["path",{d:"M16 8 2 22",key:"vp34q"}],["path",{d:"M17.5 15H9",key:"1oz8nu"}]],s0=P("feather",c0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],o0=P("file-text",u0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],f0=P("funnel",r0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],m0=P("graduation-cap",d0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Yd=P("globe",h0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],g0=P("layers",p0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],x0=P("layout-grid",v0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],qd=P("mail",y0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Xt=P("map-pin",b0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],j0=P("phone",N0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],z0=P("printer",S0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],A0=P("send",E0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],bu=P("sparkles",T0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],O0=P("wrench",M0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Qi=P("x",C0),fe={name:"Adrian Vale",profession:"Architect & Spatial Designer",specialization:"Sustainable Architecture, Urban Spaces & Human-Centered Design",experienceYears:"11+ Years",location:"Copenhagen, Denmark",tagline:"Designing spaces where people, nature, and cities can coexist.",heroStatement:"An independent architect focused on sustainable environments, public spaces, and architecture shaped by human experience.",coordinates:"55.6761° N, 12.5683° E",gridRef:"GRID / A-04",profileYear:"PROFILE / 2026",locationTag:"COPENHAGEN / DK",email:"hello@adrianvale.example",phone:"+45 31 92 84 00",studioAddress:"Strandgade 44, 1401 København K, Denmark",disclaimer:"Fictional Resume/CV template created for demonstration purposes. All names, organizations, projects, images, and content are fictional."},Ol={sectionNum:"01",title:"The Practice",quote:"Architecture should belong to its surroundings before it belongs to itself.",essay:"In an era of accelerating climate transformation and urban density, my practice champions a return to material honesty, micro-climatic intelligence, and civic intimacy. I approach architecture not as an isolated sculptural object, but as a living spatial canvas—one that listens to prevailing coastal winds, captures low Nordic sunlight, and encourages unscripted human connection. Every project begins with rigorous environmental research before a single line is drawn.",materialImage:"images/philosophy.jpg",principles:[{number:"01",title:"PLACE",subtitle:"Contextual Environmental Integration",description:"Understanding the environment before designing within it. Conducting solar analysis, wind vector modeling, and regional material mapping."},{number:"02",title:"PEOPLE",subtitle:"Human-Centered Spatial Flow",description:"Creating spaces shaped around human behavior, tactile warmth, and experience. Prioritizing spatial clarity, natural acoustics, and intuitive navigation."},{number:"03",title:"TIME",subtitle:"Adaptive Circular Longevity",description:"Designing architecture that can gracefully adapt, age, and remain meaningful over decades through modular construction and circular materials."}]},gu=[{id:"proj-01",num:"01",name:"NORDHAVEN COMMONS",category:"Mixed-Use",type:"Mixed-Use Community Space",year:"2025",location:"Nordhaven District, Copenhagen, DK",status:"Under Construction (Completion 2026)",image:"images/nordhaven.jpg",shortDescription:"A fictional community-focused mixed-use environment designed around shared courtyards, natural daylighting, and adaptable public gathering spaces.",fullOverview:"Nordhaven Commons reinvents the traditional Scandinavian harbor block into an open civic ecosystem. Composed of mass-timber volumes surrounding a microclimate-protected public garden, the project integrates public workshops, organic market stalls, co-working studios, and 48 low-carbon residences.",designConcept:"Passive solar thermal chimneying and timber colonnades frame views of the harbor while shielding exterior seating from harsh northern sea breezes.",materials:["Cross-Laminated Timber","Triple Low-E Glazing","Recycled Basalt Paving","Zinc Roofing"],metrics:{area:"14,200 m²",carbonReduction:"58% Embodied CO₂",energyRating:"Net Zero Operational",yearCompleted:"2025-2026"},diagrams:[{label:"AXONOMETRIC SOLAR CHIMNEY",detail:"Natural convective air movement through central atrium"},{label:"TIMBER JOINERY SPECIFICATION",detail:"Glue-free demountable timber-to-steel node joints"}]},{id:"proj-02",num:"02",name:"THE VERDE LIBRARY",category:"Cultural",type:"Public Cultural Space",year:"2024",location:"Østerbro, Copenhagen, DK",status:"Completed",image:"images/verde.jpg",shortDescription:"A fictional public library integrating landscape, cascading daylight, acoustic wood volumes, and community learning spaces.",fullOverview:"Designed as a 'living room for the city,' The Verde Library bridges a public municipal park with a historic neighborhood. Featuring a multi-story indoor botanical atrium, quiet subterranean reading vaults, and flexible media labs, the interior creates a seamless sensory transition between nature and literature.",designConcept:"Light-funneling skylights direct soft north light deep into reading zones, eliminating harsh glare while fostering deep concentration.",materials:["Danish White Ash","Acoustic Recycled Wood Fiber","Structural Double Glass","Living Hydroponic Moss Panels"],metrics:{area:"8,500 m²",carbonReduction:"44% Embodied CO₂",energyRating:"Nordic Swan Certified",yearCompleted:"2024"},diagrams:[{label:"DAYLIGHT LUX MAPPING",detail:"Uniform 450 Lux diffuse light distribution"},{label:"ACOUSTIC INSULATION BUFFER",detail:"Triple-layer sound attenuation wall assemblies"}]},{id:"proj-03",num:"03",name:"TIDEHOUSE",category:"Residential",type:"Coastal Residential Architecture",year:"2023",location:"Skagen Coastline, Denmark",status:"Built",image:"images/tidehouse.jpg",shortDescription:"A fictional coastal residence exploring climate-responsive monolithic concrete, dark zinc, and open spatial ocean views.",fullOverview:"Perched along the exposed granite rocks of the Skagen coast, Tidehouse is engineered to withstand extreme sea salt exposure and heavy storms while providing an ultra-serene sanctuary. Cantilevered living quarters hover above the tidal zone, framing uninterrupted views of the Kattegat horizon.",designConcept:"A dual-wing geometry buffers cold North Sea winds on the seaward facade while carving out a sunlit, sheltered south-facing inner patio.",materials:["Board-Formed Concrete","Pre-Weathered Dark Zinc","Thermally Modified Ash Decking","Triple-Pane Marine Glass"],metrics:{area:"420 m²",carbonReduction:"35% Embodied CO₂",energyRating:"Passive House Standard",yearCompleted:"2023"},diagrams:[{label:"FOUNDATION TIDE ANCHORING",detail:"Direct granite bedrock anchor pin system"},{label:"THERMAL ENVELOPE SECTIONS",detail:"300mm continuous insulation cavity"}]},{id:"proj-04",num:"04",name:"AXIS COURTYARD",category:"Urban Renewal",type:"Urban Regeneration",year:"2022",location:"Nørrebro, Copenhagen, DK",status:"Completed",image:"images/axis.jpg",shortDescription:"A fictional urban renewal concept focused on transforming underused industrial warehouse yards into vibrant community public plazas.",fullOverview:"Axis Courtyard adaptive-reuse masterplan revitalizes a former 19th-century textile factory site. By retaining historic red-brick facades and inserting elevated steel bridges, rainwater retention ponds, and terraced seating, the site was transformed into a thriving pedestrian district.",designConcept:"Combining historic industrial texture with refined modern transparency to foster creative industries and community gathering.",materials:["Reclaimed 1890s Red Brick","Weathered Corten Steel","Granite Cobblestone","Laminated Birch Panels"],metrics:{area:"19,800 m² Masterplan",carbonReduction:"72% Saved vs Demolition",energyRating:"BREEAM Outstanding",yearCompleted:"2022"},diagrams:[{label:"RAINWATER DRAINAGE RUNOFF",detail:"100% onsite storm water bio-swale retention"},{label:"FACADE STABILIZATION TRUSS",detail:"Historic brick wall bracing methodology"}]},{id:"proj-05",num:"05",name:"FIELD STUDIO",category:"Workplace",type:"Creative Workspace",year:"2021",location:"Zealand Meadow, Denmark",status:"Completed",image:"images/field.jpg",shortDescription:"A fictional low-impact workspace designed for flexible creative collaboration amidst wild Danish meadow landscapes.",fullOverview:"Constructed on a rural agrarian estate, Field Studio serves as an off-grid research lodge and architectural workshop. Utilizing locally sourced rammed earth from excavation and untreated larch timber, the structure leaves a minimal physical footprint.",designConcept:"Harmonizing building elevation with the natural meadow horizon line, allowing native wildflowers and seasonal grasses to sweep directly against glass facades.",materials:["Locally Rammed Earth","Untreated Larch Siding","Photovoltaic Roof Glass","Polished Lime Plaster"],metrics:{area:"350 m²",carbonReduction:"82% Carbon Negative Structure",energyRating:"Off-Grid Solar + Geothermal",yearCompleted:"2021"},diagrams:[{label:"RAMMED EARTH STRATIGRAPHY",detail:"Soil-binder mix ratio & thermal mass performance"},{label:"MEADOW ECOSYSTEM BUFFER",detail:"Zero-runoff peripheral drainage channel"}]}],Gd=[{period:"2022 — PRESENT",role:"Lead Architect",company:"Atelier Northline",location:"Copenhagen, Denmark",type:"Fictional Architecture Practice",coordinates:"CPH / 55.68° N",description:"Heading architectural concept development and sustainable urban initiatives across Scandinavia.",responsibilities:["Leading multidisciplinary design teams on mass-timber mixed-use developments","Directing client keynote presentations, municipal zoning negotiations, and environmental approvals","Integrating parametric daylight modeling and LCA carbon accounting into early schematic phases","Mentoring 12 studio architects and establishing sustainable material specification standards"]},{period:"2018 — 2022",role:"Senior Architect",company:"Formline Collective",location:"Stockholm, Sweden",type:"Fictional Architecture Studio",coordinates:"STO / 59.32° N",description:"Managed public cultural infrastructure projects and residential masterplans.",responsibilities:["Principal design lead for public library and community space competitions","Supervised BIM coordination models (Revit/Rhino) from schematic design through site execution","Engineered high-performance building envelopes for extreme Scandinavian winter climates","Collaborated directly with structural engineers, landscape architects, and municipal planning boards"]},{period:"2015 — 2018",role:"Architectural Designer",company:"Urban Frame Studio",location:"Copenhagen, Denmark",type:"Fictional Architecture Organization",coordinates:"CPH / 55.67° N",description:"Focused on adaptive-reuse urban renewal projects and detailed facade drafting.",responsibilities:["Developed detailed CD packages, facade joinery sections, and structural detailing","Authored material sustainability audit reports for heritage building restorations","Created high-end architectural renders, physical timber models, and client presentation boards","Conducted weekly site inspections and contractor coordination meetings"]},{period:"2013 — 2015",role:"Junior Architectural Designer",company:"Contour Works",location:"Aarhus, Denmark",type:"Fictional Organization",coordinates:"AAR / 56.16° N",description:"Assisted senior partners with competition entries, physical modeling, and site analysis.",responsibilities:["Fabricated precision basswood and acrylic architectural competition models","Executed 3D CAD modeling, shadow analysis, and site topography mapping","Assisted with environmental impact documentation and client workshop prep"]}],Ld=[{category:"ARCHITECTURAL DESIGN",code:"SEC / 01",skills:[{name:"Concept Development",level:"Expert",spec:"Schematic & Spatial Ideation"},{name:"Spatial Planning",level:"Expert",spec:"Volumetric Efficiency & Circulation"},{name:"Sustainable Design",level:"Expert",spec:"Passive Solar & Mass Timber"},{name:"Urban Analysis",level:"Advanced",spec:"Pedestrian Flow & Microclimate"}]},{category:"DIGITAL TOOLS",code:"SEC / 02",skills:[{name:"BIM Modeling",level:"Expert",spec:"Autodesk Revit & ArchiCAD"},{name:"3D Visualization",level:"Expert",spec:"Rhino 3D, V-Ray & Enscape"},{name:"CAD Documentation",level:"Expert",spec:"AutoCAD & Technical Sections"},{name:"Parametric Design",level:"Advanced",spec:"Grasshopper & Generative Scripts"}]},{category:"PROJECT DEVELOPMENT",code:"SEC / 03",skills:[{name:"Design Coordination",level:"Expert",spec:"MEP & Structural Integration"},{name:"Material Research",level:"Expert",spec:"Circular & Low-Carbon Spec"},{name:"Site Analysis",level:"Advanced",spec:"Topography & Solar Mapping"},{name:"Presentation Design",level:"Expert",spec:"Editorial Portfolio & Keynote"}]},{category:"PROFESSIONAL SKILLS",code:"SEC / 04",skills:[{name:"Team Leadership",level:"Expert",spec:"Studio Direction & Mentorship"},{name:"Client Communication",level:"Expert",spec:"Keynote & Stakeholder Mgmt"},{name:"Design Strategy",level:"Expert",spec:"Competition & Feasibility Lead"},{name:"Creative Direction",level:"Expert",spec:"Brand & Spatial Storytelling"}]}],Xd=[{degree:"Master of Architecture (M.Arch)",institution:"Nordic Institute of Spatial Design",year:"2011 — 2013",type:"Fictional Academic Institution",location:"Copenhagen, Denmark",focus:"Sustainable Architecture & Urban Systems",thesis:"Thesis: 'Passive Solar Integration in High-Latitude Community Housing'",honors:"Graduated with First Class Distinction & Excellence Award"},{degree:"Bachelor of Architectural Studies (B.AS)",institution:"Scandinavian School of Built Environments",year:"2008 — 2011",type:"Fictional Academic Institution",location:"Aarhus, Denmark",focus:"Vernacular Construction & Material Science",thesis:"Valedictorian Project: 'Demountable Timber Joinery Systems for Reusable Structures'",honors:"Dean's Honor List (All Semesters)"}],Hd={projects:[{code:"RES / 2025",title:"LIVING CITIES",year:"2025",subtitle:"Research into adaptable public environments and post-industrial urban re-wilding.",summary:"An investigation into how modular wooden structural infills can revitalize decommissioned shipping piers across Northern Europe."},{code:"RES / 2023",title:"MATERIAL FUTURES",year:"2023",subtitle:"A fictional exploration of sustainable construction materials & bio-composites.",summary:"Comparative carbon-footprint lifecycle assessment measuring rammed earth, hempcrete, and cross-laminated timber against standard concrete."},{code:"RES / 2021",title:"WATER & CITY",year:"2021",subtitle:"A fictional study about urban environments near changing coastline ecosystems.",summary:"Spatial strategies for amphibious coastal housing modules resilient to a 1.5m sea-level rise along Nordic coastlines."}],exhibitions:[{title:"Spatial Futures",location:"Copenhagen",year:"2025",role:"Lead Visual Contributor & Guest Lecturer"},{title:"Common Ground",location:"Rotterdam",year:"2023",role:"Group Exhibition on Social Housing Architecture"},{title:"Material Conversations",location:"Helsinki",year:"2021",role:"Pavilion Installation: Reclaimed Wood & Glass"}]},Qd=[{year:"2025",title:"Emerging Practice Recognition",organization:"Northern Spatial Forum",location:"Stockholm, Sweden",projectRef:"Nordhaven Commons"},{year:"2024",title:"Sustainable Design Award",organization:"European Built Environment Assembly",location:"Berlin, Germany",projectRef:"The Verde Library"},{year:"2022",title:"Public Space Innovation Recognition",organization:"Urban Futures Collective",location:"Copenhagen, Denmark",projectRef:"Axis Courtyard"},{year:"2020",title:"Nordic Young Architect Fellowship",organization:"Scandinavian Architectural Trust",location:"Oslo, Norway",projectRef:"Research Portfolio"}];function D0({onOpenCV:g}){const[A,E]=be.useState(!1),[d,C]=be.useState(!1),[U,V]=be.useState("profile");be.useEffect(()=>{const y=()=>{window.scrollY>40?E(!0):E(!1);const G=["profile","practice","projects","experience","expertise","education","research","contact"],B=window.scrollY+200;for(const w of G){const ve=document.getElementById(w);if(ve){const Ee=ve.offsetTop,Ne=ve.offsetHeight;if(B>=Ee&&B<Ee+Ne){V(w);break}}}};return window.addEventListener("scroll",y),()=>window.removeEventListener("scroll",y)},[]);const le=[{id:"profile",label:"Profile"},{id:"practice",label:"Practice"},{id:"projects",label:"Projects"},{id:"experience",label:"Experience"},{id:"expertise",label:"Expertise"},{id:"education",label:"Education"},{id:"contact",label:"Contact"}],M=y=>{C(!1);const G=document.getElementById(y);if(G){const w=document.body.getBoundingClientRect().top,Ne=G.getBoundingClientRect().top-w-80;window.scrollTo({top:Ne,behavior:"smooth"})}};return c.jsxs(c.Fragment,{children:[c.jsx("header",{className:`sticky-nav ${A?"scrolled":""}`,children:c.jsxs("div",{className:"container nav-container",children:[c.jsxs("div",{className:"nav-brand",onClick:()=>M("profile"),children:[c.jsx("div",{className:"monogram-box",children:"AV"}),c.jsxs("div",{className:"brand-text",children:[c.jsx("span",{className:"brand-name",children:fe.name}),c.jsx("span",{className:"brand-title",children:"ARCHITECT / SPATIAL DESIGNER"})]})]}),c.jsx("nav",{className:"desktop-nav",children:le.map(y=>c.jsx("button",{onClick:()=>M(y.id),className:`nav-link ${U===y.id?"active":""}`,children:y.label},y.id))}),c.jsxs("div",{className:"nav-actions",children:[c.jsxs("button",{className:"btn-outline cv-btn",onClick:g,children:[c.jsx(pu,{size:14}),c.jsx("span",{children:"Download CV"})]}),c.jsx("button",{className:"mobile-toggle",onClick:()=>C(!d),"aria-label":"Toggle Navigation Menu",children:d?c.jsx(Qi,{size:24}):c.jsx(yu,{size:22})})]})]})}),d&&c.jsxs("div",{className:"mobile-overlay",children:[c.jsx("div",{className:"mobile-overlay-grid"}),c.jsxs("div",{className:"mobile-overlay-header",children:[c.jsx("div",{className:"monogram-box",children:"AV"}),c.jsx("span",{className:"mono-text",children:"COPENHAGEN / DK — 2026"}),c.jsx("button",{className:"mobile-close",onClick:()=>C(!1),children:c.jsx(Qi,{size:28})})]}),c.jsxs("div",{className:"mobile-nav-content",children:[c.jsx("span",{className:"section-label",children:"NAVIGATION MATRIX"}),c.jsx("nav",{className:"mobile-links",children:le.map((y,G)=>c.jsxs("button",{onClick:()=>M(y.id),className:`mobile-link ${U===y.id?"active":""}`,children:[c.jsxs("span",{className:"link-num",children:["0",G+1]}),c.jsx("span",{className:"link-text",children:y.label}),c.jsx(xu,{size:20,className:"link-arrow"})]},y.id))}),c.jsxs("div",{className:"mobile-overlay-footer",children:[c.jsxs("button",{className:"btn-primary full-width",onClick:()=>{C(!1),g()},children:[c.jsx(pu,{size:16}),c.jsx("span",{children:"DOWNLOAD COMPLETE CV"})]}),c.jsx("p",{className:"mono-text legal-note",children:fe.disclaimer})]})]})]}),c.jsx("style",{children:`
        .sticky-nav {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          height: var(--header-height);
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-light);
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .sticky-nav.scrolled {
          background-color: rgba(255, 255, 255, 0.98);
          border-bottom-color: var(--border-medium);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 16px;
          cursor: pointer;
        }

        .monogram-box {
          width: 42px;
          height: 42px;
          background-color: var(--accent-charcoal);
          color: var(--bg-pure);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.1rem;
          letter-spacing: -0.05em;
          transition: transform 0.3s ease;
        }

        .nav-brand:hover .monogram-box {
          background-color: var(--accent-green);
          transform: rotate(90deg);
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: var(--text-main);
          line-height: 1.1;
        }

        .brand-title {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-link {
          background: none;
          border: none;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-muted);
          cursor: pointer;
          padding: 8px 0;
          position: relative;
          transition: color 0.25s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--accent-green);
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: var(--text-main);
        }

        .nav-link.active {
          color: var(--accent-green);
          font-weight: 700;
        }

        .nav-link.active::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .cv-btn {
          padding: 10px 20px;
          font-size: 0.75rem;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: 1px solid var(--border-light);
          padding: 10px;
          color: var(--text-main);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .mobile-toggle:hover {
          background-color: var(--bg-gray);
        }

        /* Mobile Overlay */
        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--bg-pure);
          z-index: 9999;
          display: flex;
          flex-direction: column;
          padding: 24px;
          animation: slideDown 0.3s ease forwards;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .mobile-overlay-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--border-light);
        }

        .mobile-close {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-main);
        }

        .mobile-nav-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 40px 0 20px;
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 24px;
        }

        .mobile-link {
          display: flex;
          align-items: center;
          gap: 20px;
          background: none;
          border: none;
          border-bottom: 1px solid var(--border-light);
          padding: 16px 0;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .link-num {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--accent-green);
        }

        .link-text {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-main);
          flex: 1;
        }

        .mobile-link.active .link-text {
          color: var(--accent-green);
        }

        .mobile-overlay-footer {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: auto;
        }

        .full-width {
          width: 100%;
        }

        .legal-note {
          font-size: 0.65rem;
          text-align: center;
          opacity: 0.6;
        }

        @media (max-width: 1024px) {
          .desktop-nav {
            display: none;
          }
          .mobile-toggle {
            display: flex;
          }
        }
      `})]})}function R0({onOpenCV:g,onExploreProjects:A}){return c.jsxs("section",{id:"profile",className:"arch-section hero-section",children:[c.jsx("div",{className:"arch-grid-lines"}),c.jsxs("div",{className:"container hero-container",children:[c.jsxs("div",{className:"hero-left",children:[c.jsx("div",{className:"hero-badge",children:c.jsx("span",{className:"section-label",children:"ARCHITECT / SPATIAL DESIGNER"})}),c.jsxs("h1",{className:"hero-title display-title",children:[c.jsx("span",{className:"name-first",children:"ADRIAN"}),c.jsx("span",{className:"name-last",children:"VALE"})]}),c.jsx("div",{className:"hero-subtitle-box",children:c.jsx("p",{className:"hero-subtitle",children:fe.tagline})}),c.jsxs("p",{className:"hero-statement",children:['"',fe.heroStatement,'"']}),c.jsxs("div",{className:"hero-actions",children:[c.jsxs("button",{className:"btn-primary",onClick:A,children:[c.jsx("span",{children:"View Selected Projects"}),c.jsx(Cp,{size:18})]}),c.jsxs("button",{className:"btn-outline",onClick:g,children:[c.jsx(pu,{size:16}),c.jsx("span",{children:"Download CV"})]})]}),c.jsxs("div",{className:"hero-metadata-grid",children:[c.jsxs("div",{className:"meta-card",children:[c.jsxs("div",{className:"meta-header",children:[c.jsx(Xt,{size:14,className:"meta-icon"}),c.jsx("span",{className:"mono-text",children:"LOCATION"})]}),c.jsx("span",{className:"meta-value",children:fe.location})]}),c.jsxs("div",{className:"meta-card",children:[c.jsxs("div",{className:"meta-header",children:[c.jsx(wd,{size:14,className:"meta-icon"}),c.jsx("span",{className:"mono-text",children:"EXPERIENCE"})]}),c.jsx("span",{className:"meta-value",children:fe.experienceYears})]}),c.jsxs("div",{className:"meta-card full-width-meta",children:[c.jsxs("div",{className:"meta-header",children:[c.jsx(g0,{size:14,className:"meta-icon"}),c.jsx("span",{className:"mono-text",children:"PRIMARY FOCUS"})]}),c.jsx("span",{className:"meta-value",children:fe.specialization})]})]})]}),c.jsx("div",{className:"hero-right",children:c.jsxs("div",{className:"portrait-wrapper",children:[c.jsx("div",{className:"arch-corner-tick tick-tl"}),c.jsx("div",{className:"arch-corner-tick tick-tr"}),c.jsx("div",{className:"arch-corner-tick tick-bl"}),c.jsx("div",{className:"arch-corner-tick tick-br"}),c.jsxs("div",{className:"portrait-tag tag-top-left",children:[c.jsx(t0,{size:12}),c.jsx("span",{children:fe.gridRef})]}),c.jsx("div",{className:"portrait-tag tag-top-right",children:c.jsx("span",{children:fe.profileYear})}),c.jsx("div",{className:"portrait-tag tag-bottom-left",children:c.jsx("span",{children:fe.coordinates})}),c.jsx("div",{className:"portrait-tag tag-bottom-right",children:c.jsx("span",{children:fe.locationTag})}),c.jsxs("div",{className:"portrait-image-container",children:[c.jsx("img",{src:"images/portrait.jpg",alt:"Adrian Vale — Fictional Architect Portrait",className:"portrait-img"}),c.jsx("div",{className:"portrait-grid-overlay"})]}),c.jsx("div",{className:"portrait-caption",children:c.jsx("span",{className:"mono-text",children:"FIG 0.1 — ARCHITECTURAL STUDIO / COPENHAGEN"})})]})})]}),c.jsx("style",{children:`
        .hero-section {
          padding-top: 60px;
          padding-bottom: 120px;
          background: linear-gradient(180deg, var(--bg-pure) 0%, var(--bg-warm) 100%);
          overflow: hidden;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-left {
          display: flex;
          flex-direction: column;
        }

        .hero-badge {
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: clamp(3.8rem, 7vw, 6.5rem);
          line-height: 0.92;
          margin-bottom: 28px;
          display: flex;
          flex-direction: column;
          color: var(--accent-charcoal);
        }

        .name-first {
          font-weight: 800;
        }

        .name-last {
          font-weight: 400;
          color: var(--accent-green);
          letter-spacing: -0.04em;
        }

        .hero-subtitle-box {
          border-left: 3px solid var(--accent-green);
          padding-left: 20px;
          margin-bottom: 24px;
        }

        .hero-subtitle {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 600;
          color: var(--text-main);
          letter-spacing: -0.01em;
          line-height: 1.3;
        }

        .hero-statement {
          font-size: 1.1rem;
          color: var(--text-muted);
          max-width: 580px;
          line-height: 1.7;
          margin-bottom: 40px;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 50px;
          flex-wrap: wrap;
        }

        .hero-metadata-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          padding-top: 32px;
          border-top: 1px solid var(--border-light);
        }

        .meta-card {
          background-color: var(--bg-pure);
          border: 1px solid var(--border-light);
          padding: 16px 20px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .full-width-meta {
          grid-column: 1 / -1;
        }

        .meta-header {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--accent-green);
        }

        .meta-icon {
          color: var(--accent-green);
        }

        .meta-value {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-main);
        }

        /* HERO RIGHT: PORTRAIT */
        .hero-right {
          position: relative;
        }

        .portrait-wrapper {
          position: relative;
          padding: 24px;
          background-color: var(--bg-pure);
          border: 1px solid var(--border-light);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05);
        }

        .portrait-image-container {
          position: relative;
          aspect-ratio: 3/4;
          overflow: hidden;
          border: 1px solid var(--border-medium);
        }

        .portrait-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: contrast(1.03) brightness(1.02);
          transition: transform 0.6s ease;
        }

        .portrait-wrapper:hover .portrait-img {
          transform: scale(1.03);
        }

        .portrait-grid-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(0deg, rgba(20, 20, 20, 0.2) 0%, transparent 40%);
        }

        .portrait-tag {
          position: absolute;
          background-color: var(--accent-charcoal);
          color: var(--bg-pure);
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          padding: 6px 12px;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .tag-top-left { top: 8px; left: 8px; }
        .tag-top-right { top: 8px; right: 8px; background-color: var(--bg-pure); color: var(--text-main); border: 1px solid var(--border-medium); }
        .tag-bottom-left { bottom: 44px; left: 8px; background-color: var(--bg-pure); color: var(--text-main); border: 1px solid var(--border-medium); }
        .tag-bottom-right { bottom: 44px; right: 8px; background-color: var(--accent-green); }

        .portrait-caption {
          margin-top: 14px;
          text-align: center;
          padding-top: 10px;
          border-top: 1px dashed var(--border-light);
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .hero-right {
            max-width: 500px;
            margin: 0 auto;
            width: 100%;
          }
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 3.2rem;
          }
          .hero-subtitle {
            font-size: 1.3rem;
          }
          .hero-metadata-grid {
            grid-template-columns: 1fr;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .hero-actions button {
            width: 100%;
          }
        }
      `})]})}function _0(){const g=A=>A===0?c.jsx(yu,{size:20}):A===1?c.jsx(s0,{size:20}):c.jsx(Fp,{size:20});return c.jsxs("section",{id:"practice",className:"arch-section philosophy-section",children:[c.jsx("div",{className:"arch-grid-lines"}),c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header-bar",children:[c.jsxs("div",{className:"header-left",children:[c.jsx("span",{className:"section-number",children:Ol.sectionNum}),c.jsxs("div",{className:"header-titles",children:[c.jsx("span",{className:"section-label",children:"PHILOSOPHY & APPROACH"}),c.jsx("h2",{className:"section-title display-title",children:Ol.title})]})]}),c.jsx("div",{className:"header-line"})]}),c.jsxs("div",{className:"quote-banner",children:[c.jsx("div",{className:"quote-mark",children:"“"}),c.jsx("h3",{className:"hero-quote-text",children:Ol.quote})]}),c.jsxs("div",{className:"philosophy-grid",children:[c.jsxs("div",{className:"essay-column",children:[c.jsx("h4",{className:"essay-headline",children:"Spatial design as a dialogue between natural ecology and urban culture."}),c.jsx("p",{className:"essay-paragraph",children:Ol.essay}),c.jsx("p",{className:"essay-paragraph secondary",children:"By prioritizing low-carbon bio-materials, natural ventilation stacks, and circular building components, my practice delivers projects that age gracefully. We reject superficial trends in favor of structural clarity, volumetric warmth, and acoustic serenity."}),c.jsxs("div",{className:"philosophy-tags",children:[c.jsx("span",{className:"tag-item",children:"#SUSTAINABILITY"}),c.jsx("span",{className:"tag-item",children:"#MASS_TIMBER"}),c.jsx("span",{className:"tag-item",children:"#PASSIVE_SOLAR"}),c.jsx("span",{className:"tag-item",children:"#HUMAN_SCALE"})]})]}),c.jsx("div",{className:"visual-column",children:c.jsxs("div",{className:"material-image-frame",children:[c.jsx("div",{className:"arch-corner-tick tick-tl"}),c.jsx("div",{className:"arch-corner-tick tick-tr"}),c.jsx("div",{className:"arch-corner-tick tick-bl"}),c.jsx("div",{className:"arch-corner-tick tick-br"}),c.jsx("img",{src:Ol.materialImage,alt:"Architectural Material Tactility Study",className:"material-img"}),c.jsxs("div",{className:"material-overlay-tag",children:[c.jsx(bu,{size:14}),c.jsx("span",{children:"MATERIAL STUDY / OAK, CAST CONCRETE & BRONZE"})]})]})})]}),c.jsxs("div",{className:"principles-container",children:[c.jsxs("div",{className:"principles-label-row",children:[c.jsx("span",{className:"mono-text",children:"CORE PRACTICE PRINCIPLES"}),c.jsx("div",{className:"line-anim"})]}),c.jsx("div",{className:"principles-grid",children:Ol.principles.map((A,E)=>c.jsxs("div",{className:"principle-card arch-card",children:[c.jsx("div",{className:"arch-corner-tick tick-tl"}),c.jsx("div",{className:"arch-corner-tick tick-tr"}),c.jsx("div",{className:"arch-corner-tick tick-bl"}),c.jsx("div",{className:"arch-corner-tick tick-br"}),c.jsxs("div",{className:"principle-top",children:[c.jsxs("span",{className:"principle-num",children:["0",E+1," — ",A.title]}),c.jsx("div",{className:"principle-icon",children:g(E)})]}),c.jsx("h4",{className:"principle-title",children:A.subtitle}),c.jsx("p",{className:"principle-desc",children:A.description})]},A.number))})]})]}),c.jsx("style",{children:`
        .philosophy-section {
          background-color: var(--bg-pure);
          border-bottom: 1px solid var(--border-light);
        }

        .section-header-bar {
          display: flex;
          align-items: flex-end;
          gap: 32px;
          margin-bottom: 60px;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .header-titles {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .section-title {
          font-size: 2.4rem;
          color: var(--accent-charcoal);
        }

        .header-line {
          flex: 1;
          height: 1px;
          background-color: var(--border-medium);
          margin-bottom: 12px;
        }

        /* QUOTE BANNER */
        .quote-banner {
          background-color: var(--bg-warm);
          border: 1px solid var(--border-light);
          border-left: 4px solid var(--accent-green);
          padding: 48px 56px;
          margin-bottom: 70px;
          position: relative;
        }

        .quote-mark {
          position: absolute;
          top: 10px;
          left: 20px;
          font-family: var(--font-display);
          font-size: 5rem;
          color: var(--border-medium);
          opacity: 0.4;
          line-height: 1;
          pointer-events: none;
        }

        .hero-quote-text {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 700;
          color: var(--accent-charcoal);
          line-height: 1.25;
          letter-spacing: -0.02em;
          position: relative;
          z-index: 1;
        }

        /* PHILOSOPHY GRID */
        .philosophy-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 80px;
        }

        .essay-headline {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent-charcoal);
          margin-bottom: 20px;
          line-height: 1.35;
        }

        .essay-paragraph {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.75;
          margin-bottom: 20px;
        }

        .essay-paragraph.secondary {
          font-size: 0.98rem;
          color: var(--text-light);
        }

        .philosophy-tags {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 30px;
        }

        .tag-item {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          letter-spacing: 0.08em;
          padding: 6px 12px;
          background-color: var(--bg-gray);
          color: var(--accent-green);
          border: 1px solid var(--border-light);
        }

        /* MATERIAL VISUAL FRAME */
        .material-image-frame {
          position: relative;
          padding: 16px;
          background-color: var(--bg-warm);
          border: 1px solid var(--border-light);
        }

        .material-img {
          width: 100%;
          aspect-ratio: 4/3;
          object-fit: cover;
          display: block;
          border: 1px solid var(--border-medium);
          filter: contrast(1.02);
        }

        .material-overlay-tag {
          position: absolute;
          bottom: 28px;
          left: 28px;
          right: 28px;
          background-color: rgba(20, 20, 20, 0.9);
          color: var(--bg-pure);
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.08em;
          padding: 10px 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          backdrop-filter: blur(4px);
        }

        /* THREE PRINCIPLES GRID */
        .principles-container {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .principles-label-row {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .principles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .principle-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .principle-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .principle-num {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--accent-green);
        }

        .principle-icon {
          color: var(--accent-charcoal);
          padding: 8px;
          background-color: var(--bg-gray);
        }

        .principle-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 12px;
        }

        .principle-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .philosophy-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .principles-grid {
            grid-template-columns: 1fr;
          }
          .quote-banner {
            padding: 32px;
          }
        }
      `})]})}function U0({onSelectProject:g}){const[A,E]=be.useState("All"),[d,C]=be.useState(null),[U,V]=be.useState({x:0,y:0}),[le,M]=be.useState(!1),y=["All","Mixed-Use","Cultural","Residential","Urban Renewal","Workplace"],G=A==="All"?gu:gu.filter(w=>w.category===A),B=w=>{V({x:w.clientX,y:w.clientY})};return c.jsxs("section",{id:"projects",className:"arch-section projects-section",onMouseMove:B,children:[c.jsx("div",{className:"arch-grid-lines"}),le&&c.jsxs("div",{className:"custom-cursor-tag",style:{left:`${U.x}px`,top:`${U.y}px`},children:[c.jsx(i0,{size:12}),c.jsxs("span",{children:["EXPLORE ",d==null?void 0:d.num]})]}),c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header-bar",children:[c.jsxs("div",{className:"header-left",children:[c.jsx("span",{className:"section-number",children:"02"}),c.jsxs("div",{className:"header-titles",children:[c.jsx("span",{className:"section-label",children:"SELECTED WORKS"}),c.jsx("h2",{className:"section-title display-title",children:"Featured Projects"})]})]}),c.jsx("div",{className:"header-line"})]}),c.jsxs("div",{className:"filter-bar",children:[c.jsxs("div",{className:"filter-label",children:[c.jsx(f0,{size:14}),c.jsx("span",{className:"mono-text",children:"FILTER BY TYPOLOGY:"})]}),c.jsx("div",{className:"filter-buttons",children:y.map(w=>c.jsx("button",{onClick:()=>E(w),className:`filter-btn ${A===w?"active":""}`,children:w},w))})]}),c.jsx("div",{className:"projects-gallery-list",children:G.map((w,ve)=>{const Ee=ve%5===0,Ne=ve%5===1,ba=ve%5===2,qe=ve%5===3;return c.jsxs("div",{className:`project-layout-item ${Ee?"layout-full":Ne?"layout-split":ba?"layout-horizontal":qe?"layout-asymmetric":"layout-standard"}`,onClick:()=>g(w),onMouseEnter:()=>{C(w),M(!0)},onMouseLeave:()=>{C(null),M(!1)},children:[c.jsx("div",{className:"arch-corner-tick tick-tl"}),c.jsx("div",{className:"arch-corner-tick tick-tr"}),c.jsx("div",{className:"arch-corner-tick tick-bl"}),c.jsx("div",{className:"arch-corner-tick tick-br"}),c.jsxs("div",{className:"project-image-box",children:[c.jsx("img",{src:w.image,alt:w.name,className:"project-img"}),c.jsxs("div",{className:"image-overlay-bar",children:[c.jsxs("span",{className:"mono-text",children:["SPEC / ",w.year]}),c.jsx("span",{className:"mono-text",children:w.location})]})]}),c.jsxs("div",{className:"project-content-box",children:[c.jsxs("div",{className:"project-top-row",children:[c.jsxs("span",{className:"project-index-num",children:["PROJECT ",w.num]}),c.jsx("span",{className:"project-category-badge",children:w.type})]}),c.jsx("h3",{className:"project-title display-title",children:w.name}),c.jsx("p",{className:"project-description",children:w.shortDescription}),c.jsxs("div",{className:"project-mini-specs",children:[c.jsxs("div",{className:"mini-spec-col",children:[c.jsx("span",{className:"mini-label",children:"PRIMARY MATERIALS"}),c.jsx("span",{className:"mini-val",children:w.materials.slice(0,2).join(", ")})]}),c.jsxs("div",{className:"mini-spec-col",children:[c.jsx("span",{className:"mini-label",children:"STATUS"}),c.jsx("span",{className:"mini-val highlight",children:w.status})]})]}),c.jsxs("div",{className:"project-action-row",children:[c.jsxs("span",{className:"explore-link",children:["Explore Project Blueprint",c.jsx(xu,{size:16,className:"arrow-icon"})]}),c.jsx("span",{className:"mono-text year-tag",children:w.year})]})]})]},w.id)})})]}),c.jsx("style",{children:`
        .projects-section {
          background-color: var(--bg-warm);
        }

        .filter-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          background-color: var(--bg-pure);
          border: 1px solid var(--border-light);
          margin-bottom: 50px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .filter-label {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--accent-green);
        }

        .filter-buttons {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .filter-btn {
          background: none;
          border: 1px solid var(--border-light);
          padding: 8px 16px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-btn:hover {
          border-color: var(--border-dark);
          color: var(--text-main);
        }

        .filter-btn.active {
          background-color: var(--accent-charcoal);
          color: var(--bg-pure);
          border-color: var(--accent-charcoal);
        }

        /* PROJECTS GALLERY CONTAINER */
        .projects-gallery-list {
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        .project-layout-item {
          background-color: var(--bg-pure);
          border: 1px solid var(--border-light);
          padding: 32px;
          position: relative;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          display: grid;
          gap: 36px;
        }

        .project-layout-item:hover {
          border-color: var(--accent-charcoal);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.06);
        }

        .project-image-box {
          position: relative;
          overflow: hidden;
          border: 1px solid var(--border-medium);
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-layout-item:hover .project-img {
          transform: scale(1.04);
        }

        .image-overlay-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 12px 20px;
          background: linear-gradient(180deg, transparent 0%, rgba(20, 20, 20, 0.8) 100%);
          color: var(--bg-pure);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .image-overlay-bar .mono-text {
          color: #ffffff;
        }

        .project-content-box {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .project-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .project-index-num {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--accent-green);
        }

        .project-category-badge {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          padding: 4px 10px;
          background-color: var(--bg-gray);
          color: var(--text-muted);
          border: 1px solid var(--border-light);
        }

        .project-title {
          font-size: 2.2rem;
          color: var(--accent-charcoal);
          margin-bottom: 16px;
          transition: color 0.3s ease;
        }

        .project-layout-item:hover .project-title {
          color: var(--accent-green);
        }

        .project-description {
          font-size: 1.02rem;
          color: var(--text-muted);
          line-height: 1.65;
          margin-bottom: 24px;
        }

        .project-mini-specs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          padding: 16px;
          background-color: var(--bg-warm);
          border: 1px solid var(--border-light);
          margin-bottom: 24px;
        }

        .mini-spec-col {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .mini-label {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--text-light);
        }

        .mini-val {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .mini-val.highlight {
          color: var(--accent-green);
        }

        .project-action-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 16px;
          border-top: 1px solid var(--border-light);
        }

        .explore-link {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--accent-charcoal);
          display: flex;
          align-items: center;
          gap: 6px;
          transition: transform 0.3s ease;
        }

        .arrow-icon {
          transition: transform 0.3s ease;
        }

        .project-layout-item:hover .arrow-icon {
          transform: translate(3px, -3px);
          color: var(--accent-green);
        }

        /* LAYOUT VARIATIONS */
        /* 1. Full-width Hero Layout */
        .layout-full {
          grid-template-columns: 1fr;
        }
        .layout-full .project-image-box {
          height: 480px;
        }

        /* 2. Split 50/50 Layout */
        .layout-split {
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
        }
        .layout-split .project-image-box {
          height: 420px;
        }

        /* 3. Horizontal Offset Layout */
        .layout-horizontal {
          grid-template-columns: 0.85fr 1.15fr;
          align-items: center;
        }
        .layout-horizontal .project-image-box {
          height: 380px;
          order: 2;
        }
        .layout-horizontal .project-content-box {
          order: 1;
        }

        /* 4. Asymmetric Layout */
        .layout-asymmetric {
          grid-template-columns: 1.2fr 0.8fr;
        }
        .layout-asymmetric .project-image-box {
          height: 440px;
        }

        @media (max-width: 1024px) {
          .project-layout-item {
            grid-template-columns: 1fr !important;
          }
          .layout-horizontal .project-image-box {
            order: 1 !important;
          }
          .layout-horizontal .project-content-box {
            order: 2 !important;
          }
          .project-image-box {
            height: 320px !important;
          }
        }
      `})]})}function H0({project:g,onClose:A}){var E,d,C,U,V,le;return be.useEffect(()=>{const M=y=>{y.key==="Escape"&&A()};return window.addEventListener("keydown",M),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",M),document.body.style.overflow="auto"}},[A]),g?c.jsxs("div",{className:"modal-backdrop",onClick:A,children:[c.jsxs("div",{className:"project-modal-card",onClick:M=>M.stopPropagation(),children:[c.jsxs("div",{className:"modal-top-bar",children:[c.jsxs("div",{className:"top-bar-left",children:[c.jsxs("span",{className:"modal-project-num",children:["PROJECT ",g.num]}),c.jsx("span",{className:"top-bar-divider",children:"|"}),c.jsx("span",{className:"mono-text",children:g.category})]}),c.jsx("button",{className:"modal-close-btn",onClick:A,"aria-label":"Close modal",children:c.jsx(Qi,{size:22})})]}),c.jsxs("div",{className:"modal-scroll-content",children:[c.jsxs("div",{className:"modal-hero-image-wrap",children:[c.jsx("img",{src:g.image,alt:g.name,className:"modal-hero-img"}),c.jsxs("div",{className:"modal-hero-overlay",children:[c.jsx("h2",{className:"modal-project-title display-title",children:g.name}),c.jsxs("div",{className:"modal-meta-pills",children:[c.jsxs("span",{className:"meta-pill",children:[c.jsx(Xt,{size:12})," ",g.location]}),c.jsxs("span",{className:"meta-pill",children:[c.jsx(qp,{size:12})," ",g.year]}),c.jsxs("span",{className:"meta-pill badge-green",children:[c.jsx(bu,{size:12})," ",g.status]})]})]})]}),c.jsxs("div",{className:"modal-grid",children:[c.jsxs("div",{className:"modal-left",children:[c.jsxs("div",{className:"modal-section-block",children:[c.jsx("h3",{className:"block-title",children:"PROJECT OVERVIEW"}),c.jsx("p",{className:"block-text",children:g.fullOverview})]}),c.jsxs("div",{className:"modal-section-block",children:[c.jsx("h3",{className:"block-title",children:"ARCHITECTURAL DESIGN CONCEPT"}),c.jsx("p",{className:"block-text",children:g.designConcept})]}),c.jsxs("div",{className:"blueprint-diagram-box",children:[c.jsxs("div",{className:"diagram-header",children:[c.jsx("span",{className:"mono-text",children:"ARCHITECTURAL BLUEPRINT SPECIFICATION // AXONOMETRIC"}),c.jsx(yu,{size:14,className:"icon-green"})]}),c.jsx("div",{className:"blueprint-svg-container",children:c.jsxs("svg",{className:"blueprint-svg",viewBox:"0 0 400 180",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("pattern",{id:"grid",width:"20",height:"20",patternUnits:"userSpaceOnUse",children:c.jsx("path",{d:"M 20 0 L 0 0 0 20",fill:"none",stroke:"#e0e0e0",strokeWidth:"0.5"})}),c.jsx("rect",{width:"100%",height:"100%",fill:"url(#grid)"}),c.jsxs("g",{stroke:"#1B3629",strokeWidth:"1.5",fill:"none",children:[c.jsx("polygon",{points:"120,130 240,160 320,110 200,80",fill:"rgba(27,54,41,0.05)"}),c.jsx("polygon",{points:"120,130 200,80 200,30 120,80",fill:"rgba(27,54,41,0.08)"}),c.jsx("polygon",{points:"200,80 320,110 320,60 200,30",fill:"rgba(27,54,41,0.03)"}),c.jsx("line",{x1:"240",y1:"160",x2:"240",y2:"110",strokeDasharray:"3,3"}),c.jsx("line",{x1:"120",y1:"130",x2:"240",y2:"160",stroke:"#1B3629"}),c.jsx("line",{x1:"240",y1:"160",x2:"320",y2:"110",stroke:"#1B3629"}),c.jsx("line",{x1:"320",y1:"110",x2:"320",y2:"60",stroke:"#1B3629"}),c.jsx("line",{x1:"120",y1:"80",x2:"200",y2:"30",stroke:"#1B3629"}),c.jsx("line",{x1:"200",y1:"30",x2:"320",y2:"60",stroke:"#1B3629"}),c.jsx("line",{x1:"110",y1:"135",x2:"190",y2:"85",stroke:"#B05844",strokeWidth:"1",strokeDasharray:"2,2"}),c.jsx("text",{x:"140",y:"100",fill:"#B05844",fontSize:"10",fontFamily:"JetBrains Mono",children:"34.5m SOLAR AXIS"})]})]})}),c.jsx("div",{className:"diagram-footer",children:(E=g.diagrams)==null?void 0:E.map((M,y)=>c.jsxs("div",{className:"diagram-item",children:[c.jsxs("span",{className:"diag-label",children:[M.label,":"]}),c.jsx("span",{className:"diag-detail",children:M.detail})]},y))})]})]}),c.jsxs("div",{className:"modal-right",children:[c.jsxs("div",{className:"arch-card modal-side-card",children:[c.jsx("div",{className:"arch-corner-tick tick-tl"}),c.jsx("div",{className:"arch-corner-tick tick-tr"}),c.jsx("div",{className:"arch-corner-tick tick-bl"}),c.jsx("div",{className:"arch-corner-tick tick-br"}),c.jsx("h4",{className:"side-card-title",children:"PROJECT SPECIFICATIONS"}),c.jsxs("div",{className:"specs-list",children:[c.jsxs("div",{className:"spec-row",children:[c.jsx("span",{className:"spec-label",children:"Gross Floor Area"}),c.jsx("span",{className:"spec-val",children:(d=g.metrics)==null?void 0:d.area})]}),c.jsxs("div",{className:"spec-row",children:[c.jsx("span",{className:"spec-label",children:"Carbon Reduction"}),c.jsx("span",{className:"spec-val highlight",children:(C=g.metrics)==null?void 0:C.carbonReduction})]}),c.jsxs("div",{className:"spec-row",children:[c.jsx("span",{className:"spec-label",children:"Energy Standard"}),c.jsx("span",{className:"spec-val",children:(U=g.metrics)==null?void 0:U.energyRating})]}),c.jsxs("div",{className:"spec-row",children:[c.jsx("span",{className:"spec-label",children:"Timeline"}),c.jsx("span",{className:"spec-val",children:(V=g.metrics)==null?void 0:V.yearCompleted})]})]})]}),c.jsxs("div",{className:"arch-card modal-side-card",children:[c.jsx("h4",{className:"side-card-title",children:"SPECIFIED MATERIAL PALETTE"}),c.jsx("div",{className:"materials-list",children:(le=g.materials)==null?void 0:le.map((M,y)=>c.jsxs("div",{className:"mat-item",children:[c.jsx(kd,{size:14,className:"mat-icon"}),c.jsx("span",{children:M})]},y))})]}),c.jsx("div",{className:"modal-cta-box",children:c.jsxs("button",{className:"btn-primary full-width",onClick:A,children:[c.jsx("span",{children:"Return to Portfolio"}),c.jsx(Rp,{size:16})]})})]})]})]})]}),c.jsx("style",{children:`
        .project-modal-card {
          width: 100%;
          max-width: 1100px;
          max-height: 90vh;
          background-color: var(--bg-pure);
          border: 1px solid var(--border-dark);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          animation: modalPop 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes modalPop {
          from { opacity: 0; transform: scale(0.96) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .modal-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 28px;
          border-bottom: 1px solid var(--border-light);
          background-color: var(--bg-warm);
        }

        .top-bar-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .modal-project-num {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--accent-green);
        }

        .top-bar-divider {
          color: var(--border-medium);
        }

        .modal-close-btn {
          background: none;
          border: 1px solid var(--border-medium);
          padding: 6px;
          cursor: pointer;
          color: var(--text-main);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .modal-close-btn:hover {
          background-color: var(--accent-charcoal);
          color: var(--bg-pure);
        }

        .modal-scroll-content {
          overflow-y: auto;
          padding: 32px;
        }

        .modal-hero-image-wrap {
          position: relative;
          width: 100%;
          height: 380px;
          overflow: hidden;
          margin-bottom: 36px;
          border: 1px solid var(--border-medium);
        }

        .modal-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(18, 18, 18, 0.85) 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 32px;
          color: var(--bg-pure);
        }

        .modal-project-title {
          font-size: 2.5rem;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .modal-meta-pills {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .meta-pill {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          padding: 6px 14px;
          background-color: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(4px);
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .badge-green {
          background-color: var(--accent-green);
        }

        .modal-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 36px;
        }

        .modal-section-block {
          margin-bottom: 32px;
        }

        .block-title {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          color: var(--accent-green);
          margin-bottom: 12px;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 8px;
        }

        .block-text {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.7;
        }

        /* BLUEPRINT WIREFRAME */
        .blueprint-diagram-box {
          background-color: var(--bg-warm);
          border: 1px solid var(--border-light);
          padding: 20px;
          margin-top: 24px;
        }

        .diagram-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--border-light);
        }

        .icon-green {
          color: var(--accent-green);
        }

        .blueprint-svg-container {
          background-color: var(--bg-pure);
          border: 1px solid var(--border-medium);
          height: 180px;
          overflow: hidden;
        }

        .blueprint-svg {
          width: 100%;
          height: 100%;
        }

        .diagram-footer {
          margin-top: 14px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .diagram-item {
          display: flex;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
        }

        .diag-label {
          color: var(--accent-green);
          font-weight: 700;
        }

        .diag-detail {
          color: var(--text-muted);
        }

        /* RIGHT SIDE CARDS */
        .modal-side-card {
          margin-bottom: 24px;
        }

        .side-card-title {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          color: var(--text-main);
          margin-bottom: 16px;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--border-light);
        }

        .specs-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .spec-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.88rem;
        }

        .spec-label {
          color: var(--text-muted);
        }

        .spec-val {
          font-family: var(--font-mono);
          font-weight: 600;
          color: var(--text-main);
        }

        .spec-val.highlight {
          color: var(--accent-green);
        }

        .materials-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .mat-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .mat-icon {
          color: var(--accent-green);
        }

        .modal-cta-box {
          margin-top: 28px;
        }

        @media (max-width: 900px) {
          .modal-grid {
            grid-template-columns: 1fr;
          }
          .modal-hero-image-wrap {
            height: 260px;
          }
        }
      `})]}):null}function B0(){const g=be.useRef(null),A=E=>{if(g.current){const d=E==="left"?-380:380;g.current.scrollBy({left:d,behavior:"smooth"})}};return c.jsxs("section",{id:"experience",className:"arch-section experience-section",children:[c.jsx("div",{className:"arch-grid-lines"}),c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header-bar",children:[c.jsxs("div",{className:"header-left",children:[c.jsx("span",{className:"section-number",children:"03"}),c.jsxs("div",{className:"header-titles",children:[c.jsx("span",{className:"section-label",children:"CAREER TRAJECTORY"}),c.jsx("h2",{className:"section-title display-title",children:"Professional Experience"})]})]}),c.jsxs("div",{className:"timeline-nav-buttons",children:[c.jsx("button",{className:"timeline-scroll-btn",onClick:()=>A("left"),"aria-label":"Scroll left",children:c.jsx(Qp,{size:20})}),c.jsx("button",{className:"timeline-scroll-btn",onClick:()=>A("right"),"aria-label":"Scroll right",children:c.jsx(Zp,{size:20})})]})]}),c.jsxs("div",{className:"timeline-outer-wrapper",children:[c.jsx("div",{className:"timeline-track-line"}),c.jsx("div",{className:"timeline-scroll-container",ref:g,children:Gd.map((E,d)=>c.jsxs("div",{className:"timeline-node-card arch-card",children:[c.jsx("div",{className:"arch-corner-tick tick-tl"}),c.jsx("div",{className:"arch-corner-tick tick-tr"}),c.jsx("div",{className:"arch-corner-tick tick-bl"}),c.jsx("div",{className:"arch-corner-tick tick-br"}),c.jsxs("div",{className:"node-pin-container",children:[c.jsx("div",{className:"node-pin"}),c.jsx("span",{className:"mono-text coord-text",children:E.coordinates})]}),c.jsxs("div",{className:"node-header",children:[c.jsx("span",{className:"node-period",children:E.period}),c.jsx("span",{className:"node-company-type",children:E.type})]}),c.jsx("h3",{className:"node-role",children:E.role}),c.jsxs("div",{className:"node-company-row",children:[c.jsx(kp,{size:16,className:"company-icon"}),c.jsx("span",{className:"company-name",children:E.company}),c.jsx("span",{className:"bullet-sep",children:"•"}),c.jsx(Xt,{size:14,className:"location-icon"}),c.jsx("span",{className:"location-text",children:E.location})]}),c.jsx("p",{className:"node-summary",children:E.description}),c.jsxs("div",{className:"responsibilities-list",children:[c.jsx("span",{className:"mono-text list-title",children:"KEY DELIVERABLES:"}),E.responsibilities.map((C,U)=>c.jsxs("div",{className:"resp-item",children:[c.jsx(Lp,{size:12,className:"resp-icon"}),c.jsx("span",{children:C})]},U))]})]},d))})]})]}),c.jsx("style",{children:`
        .experience-section {
          background-color: var(--bg-pure);
          border-bottom: 1px solid var(--border-light);
          overflow: hidden;
        }

        .timeline-nav-buttons {
          display: flex;
          gap: 10px;
        }

        .timeline-scroll-btn {
          width: 44px;
          height: 44px;
          background-color: var(--bg-pure);
          border: 1px solid var(--border-medium);
          color: var(--text-main);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .timeline-scroll-btn:hover {
          background-color: var(--accent-charcoal);
          color: var(--bg-pure);
          border-color: var(--accent-charcoal);
        }

        /* TIMELINE TRACK */
        .timeline-outer-wrapper {
          position: relative;
          padding-top: 40px;
        }

        .timeline-track-line {
          position: absolute;
          top: 70px;
          left: 0;
          right: 0;
          height: 2px;
          background-color: var(--border-medium);
          z-index: 1;
        }

        .timeline-scroll-container {
          display: flex;
          gap: 32px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding-bottom: 30px;
          padding-top: 10px;
          position: relative;
          z-index: 2;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
        }

        .timeline-node-card {
          flex: 0 0 380px;
          scroll-snap-align: start;
          display: flex;
          flex-direction: column;
          background-color: var(--bg-pure);
          margin-top: 30px;
          border-top: 3px solid var(--accent-green);
        }

        .node-pin-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: -46px;
          margin-bottom: 20px;
          position: relative;
        }

        .node-pin {
          width: 16px;
          height: 16px;
          background-color: var(--accent-green);
          border: 3px solid var(--bg-pure);
          outline: 1px solid var(--accent-green);
          border-radius: 50%;
        }

        .coord-text {
          font-size: 0.68rem;
          color: var(--text-light);
        }

        .node-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .node-period {
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--accent-charcoal);
        }

        .node-company-type {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--accent-green);
          background-color: var(--bg-gray);
          padding: 4px 8px;
        }

        .node-role {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--accent-green);
          margin-bottom: 8px;
        }

        .node-company-row {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-light);
        }

        .company-icon, .location-icon {
          color: var(--accent-charcoal);
        }

        .bullet-sep {
          color: var(--border-medium);
        }

        .node-summary {
          font-size: 0.95rem;
          color: var(--text-main);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .responsibilities-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px dashed var(--border-light);
        }

        .list-title {
          font-size: 0.7rem;
          color: var(--text-light);
        }

        .resp-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.45;
        }

        .resp-icon {
          color: var(--accent-green);
          margin-top: 3px;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .timeline-node-card {
            flex: 0 0 300px;
          }
        }
      `})]})}function w0(){const g=A=>A===0?c.jsx(x0,{size:18}):A===1?c.jsx(e0,{size:18}):A===2?c.jsx(O0,{size:18}):c.jsx(bu,{size:18});return c.jsxs("section",{id:"expertise",className:"arch-section expertise-section",children:[c.jsx("div",{className:"arch-grid-lines"}),c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header-bar",children:[c.jsxs("div",{className:"header-left",children:[c.jsx("span",{className:"section-number",children:"04"}),c.jsxs("div",{className:"header-titles",children:[c.jsx("span",{className:"section-label",children:"TECHNICAL COMPETENCIES"}),c.jsx("h2",{className:"section-title display-title",children:"Design Tools & Expertise"})]})]}),c.jsx("div",{className:"header-line"})]}),c.jsx("div",{className:"expertise-matrix-grid",children:Ld.map((A,E)=>c.jsxs("div",{className:"expertise-cat-block arch-card",children:[c.jsx("div",{className:"arch-corner-tick tick-tl"}),c.jsx("div",{className:"arch-corner-tick tick-tr"}),c.jsx("div",{className:"arch-corner-tick tick-bl"}),c.jsx("div",{className:"arch-corner-tick tick-br"}),c.jsxs("div",{className:"cat-header",children:[c.jsxs("div",{className:"cat-title-left",children:[c.jsx("div",{className:"cat-icon",children:g(E)}),c.jsx("h3",{className:"cat-name",children:A.category})]}),c.jsx("span",{className:"mono-text cat-code",children:A.code})]}),c.jsx("div",{className:"skills-modular-list",children:A.skills.map((d,C)=>c.jsxs("div",{className:"skill-module-item",children:[c.jsxs("div",{className:"module-top",children:[c.jsx("span",{className:"skill-name",children:d.name}),c.jsx("span",{className:"skill-level-badge",children:d.level})]}),c.jsx("span",{className:"skill-spec-text",children:d.spec})]},C))})]},A.category))})]}),c.jsx("style",{children:`
        .expertise-section {
          background-color: var(--bg-warm);
          border-bottom: 1px solid var(--border-light);
        }

        .expertise-matrix-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .expertise-cat-block {
          background-color: var(--bg-pure);
          display: flex;
          flex-direction: column;
        }

        .cat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 20px;
          margin-bottom: 24px;
          border-bottom: 1px solid var(--border-light);
        }

        .cat-title-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .cat-icon {
          color: var(--accent-green);
          padding: 8px;
          background-color: var(--bg-gray);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cat-name {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--accent-charcoal);
          letter-spacing: -0.01em;
        }

        .cat-code {
          color: var(--accent-green);
        }

        .skills-modular-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .skill-module-item {
          background-color: var(--bg-warm);
          border: 1px solid var(--border-light);
          padding: 14px 16px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          transition: all 0.2s ease;
        }

        .skill-module-item:hover {
          border-color: var(--accent-green);
          background-color: var(--bg-pure);
        }

        .module-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .skill-name {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .skill-level-badge {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          padding: 3px 8px;
          background-color: var(--accent-charcoal);
          color: var(--bg-pure);
          letter-spacing: 0.05em;
        }

        .skill-spec-text {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        @media (max-width: 1024px) {
          .expertise-matrix-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .skills-modular-list {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function k0(){return c.jsxs("section",{id:"education",className:"arch-section education-section",children:[c.jsx("div",{className:"arch-grid-lines"}),c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header-bar",children:[c.jsxs("div",{className:"header-left",children:[c.jsx("span",{className:"section-number",children:"05"}),c.jsxs("div",{className:"header-titles",children:[c.jsx("span",{className:"section-label",children:"ACADEMIC BACKGROUND"}),c.jsx("h2",{className:"section-title display-title",children:"Academic Foundation"})]})]}),c.jsx("div",{className:"header-line"})]}),c.jsx("div",{className:"education-grid",children:Xd.map((g,A)=>c.jsxs("div",{className:"education-card arch-card",children:[c.jsx("div",{className:"arch-corner-tick tick-tl"}),c.jsx("div",{className:"arch-corner-tick tick-tr"}),c.jsx("div",{className:"arch-corner-tick tick-bl"}),c.jsx("div",{className:"arch-corner-tick tick-br"}),c.jsxs("div",{className:"edu-top-bar",children:[c.jsx("div",{className:"edu-icon-wrap",children:c.jsx(m0,{size:24})}),c.jsx("div",{className:"edu-year-tag",children:c.jsx("span",{className:"mono-text",children:g.year})})]}),c.jsx("h3",{className:"edu-degree",children:g.degree}),c.jsxs("div",{className:"edu-institution-row",children:[c.jsx("span",{className:"inst-name",children:g.institution}),c.jsx("span",{className:"bullet-sep",children:"•"}),c.jsx("span",{className:"inst-loc",children:g.location})]}),c.jsxs("div",{className:"edu-details-box",children:[c.jsxs("div",{className:"detail-item",children:[c.jsx(Bp,{size:14,className:"detail-icon"}),c.jsx("span",{className:"detail-label",children:"Specialization:"}),c.jsx("span",{className:"detail-text",children:g.focus})]}),c.jsxs("div",{className:"detail-item",children:[c.jsx(wd,{size:14,className:"detail-icon"}),c.jsx("span",{className:"detail-label",children:"Distinction:"}),c.jsx("span",{className:"detail-text highlight",children:g.honors})]})]}),c.jsxs("div",{className:"edu-thesis-box",children:[c.jsx("span",{className:"mono-text thesis-label",children:"ACADEMIC THESIS"}),c.jsxs("p",{className:"thesis-text",children:['"',g.thesis,'"']})]}),c.jsx("div",{className:"edu-type-footer",children:c.jsx("span",{className:"mono-text",children:g.type})})]},A))})]}),c.jsx("style",{children:`
        .education-section {
          background-color: var(--bg-pure);
          border-bottom: 1px solid var(--border-light);
        }

        .education-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 36px;
        }

        .education-card {
          background-color: var(--bg-pure);
          display: flex;
          flex-direction: column;
        }

        .edu-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }

        .edu-icon-wrap {
          width: 50px;
          height: 50px;
          background-color: var(--accent-charcoal);
          color: var(--bg-pure);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .edu-year-tag {
          padding: 6px 14px;
          background-color: var(--bg-gray);
          border: 1px solid var(--border-light);
        }

        .edu-degree {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--accent-charcoal);
          margin-bottom: 10px;
          line-height: 1.25;
        }

        .edu-institution-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.95rem;
          color: var(--accent-green);
          font-weight: 600;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-light);
        }

        .edu-details-box {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }

        .detail-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.9rem;
        }

        .detail-icon {
          color: var(--accent-green);
          margin-top: 3px;
          flex-shrink: 0;
        }

        .detail-label {
          font-weight: 600;
          color: var(--text-main);
        }

        .detail-text {
          color: var(--text-muted);
        }

        .detail-text.highlight {
          color: var(--accent-green);
          font-weight: 600;
        }

        .edu-thesis-box {
          background-color: var(--bg-warm);
          border-left: 3px solid var(--accent-green);
          padding: 16px 20px;
          margin-top: auto;
          margin-bottom: 20px;
        }

        .thesis-label {
          font-size: 0.68rem;
          color: var(--accent-green);
          margin-bottom: 6px;
          display: block;
        }

        .thesis-text {
          font-size: 0.9rem;
          font-style: italic;
          color: var(--text-main);
          line-height: 1.5;
        }

        .edu-type-footer {
          padding-top: 14px;
          border-top: 1px dashed var(--border-light);
          text-align: right;
        }

        @media (max-width: 900px) {
          .education-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function Y0(){return c.jsxs("section",{id:"research",className:"arch-section research-section",children:[c.jsx("div",{className:"arch-grid-lines"}),c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header-bar",children:[c.jsxs("div",{className:"header-left",children:[c.jsx("span",{className:"section-number",children:"06"}),c.jsxs("div",{className:"header-titles",children:[c.jsx("span",{className:"section-label",children:"ACADEMIC & PUBLIC ENGAGEMENT"}),c.jsx("h2",{className:"section-title display-title",children:"Research & Public Work"})]})]}),c.jsx("div",{className:"header-line"})]}),c.jsx("div",{className:"research-posters-grid",children:Hd.projects.map(g=>c.jsxs("div",{className:"poster-card arch-card",children:[c.jsx("div",{className:"arch-corner-tick tick-tl"}),c.jsx("div",{className:"arch-corner-tick tick-tr"}),c.jsx("div",{className:"arch-corner-tick tick-bl"}),c.jsx("div",{className:"arch-corner-tick tick-br"}),c.jsxs("div",{className:"poster-top-bar",children:[c.jsx("span",{className:"mono-text poster-code",children:g.code}),c.jsx("span",{className:"mono-text poster-year",children:g.year})]}),c.jsx("h3",{className:"poster-title display-title",children:g.title}),c.jsx("div",{className:"poster-subtitle-box",children:c.jsx("p",{className:"poster-subtitle",children:g.subtitle})}),c.jsx("p",{className:"poster-summary",children:g.summary}),c.jsxs("div",{className:"poster-footer",children:[c.jsx("span",{className:"mono-text poster-status",children:"PUBLISHED MONOGRAPH"}),c.jsx(o0,{size:16,className:"poster-icon"})]})]},g.code))}),c.jsxs("div",{className:"exhibitions-block",children:[c.jsxs("div",{className:"exhibitions-header",children:[c.jsx("h3",{className:"exhibitions-title",children:"SELECTED EXHIBITIONS & CURATED PAVILIONS"}),c.jsx("span",{className:"mono-text",children:"2021 — 2025"})]}),c.jsx("div",{className:"exhibitions-list",children:Hd.exhibitions.map((g,A)=>c.jsxs("div",{className:"exhibition-row",children:[c.jsxs("div",{className:"exh-left",children:[c.jsx("span",{className:"exh-year",children:g.year}),c.jsx("span",{className:"bullet-sep",children:"•"}),c.jsx("h4",{className:"exh-name",children:g.title})]}),c.jsxs("div",{className:"exh-right",children:[c.jsxs("div",{className:"exh-loc",children:[c.jsx(Xt,{size:14}),c.jsx("span",{children:g.location})]}),c.jsx("span",{className:"exh-role",children:g.role}),c.jsx(xu,{size:16,className:"exh-arrow"})]})]},A))})]})]}),c.jsx("style",{children:`
        .research-section {
          background-color: var(--bg-warm);
          border-bottom: 1px solid var(--border-light);
        }

        .research-posters-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-bottom: 70px;
        }

        .poster-card {
          background-color: var(--bg-pure);
          display: flex;
          flex-direction: column;
          padding: 36px 28px;
          border: 1px solid var(--border-light);
          position: relative;
          transition: all 0.3s ease;
        }

        .poster-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent-charcoal);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.05);
        }

        .poster-top-bar {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-light);
        }

        .poster-code {
          color: var(--accent-green);
          font-weight: 700;
        }

        .poster-year {
          color: var(--text-light);
        }

        .poster-title {
          font-size: 2.2rem;
          line-height: 1;
          color: var(--accent-charcoal);
          margin-bottom: 16px;
        }

        .poster-subtitle-box {
          border-left: 2px solid var(--accent-green);
          padding-left: 12px;
          margin-bottom: 16px;
        }

        .poster-subtitle {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-main);
          line-height: 1.4;
        }

        .poster-summary {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 28px;
        }

        .poster-footer {
          margin-top: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 16px;
          border-top: 1px dashed var(--border-light);
        }

        .poster-status {
          font-size: 0.68rem;
          color: var(--accent-green);
        }

        .poster-icon {
          color: var(--accent-charcoal);
        }

        /* EXHIBITIONS BLOCK */
        .exhibitions-block {
          background-color: var(--bg-pure);
          border: 1px solid var(--border-light);
          padding: 40px;
        }

        .exhibitions-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 28px;
          padding-bottom: 16px;
          border-bottom: 2px solid var(--accent-charcoal);
        }

        .exhibitions-title {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--accent-charcoal);
        }

        .exhibitions-list {
          display: flex;
          flex-direction: column;
        }

        .exhibition-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 0;
          border-bottom: 1px solid var(--border-light);
          transition: background-color 0.2s ease;
        }

        .exhibition-row:last-child {
          border-bottom: none;
        }

        .exh-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .exh-year {
          font-family: var(--font-mono);
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--accent-green);
        }

        .exh-name {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .exh-right {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .exh-loc {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .exh-role {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .exh-arrow {
          color: var(--accent-charcoal);
          transition: transform 0.2s ease;
        }

        .exhibition-row:hover .exh-arrow {
          transform: translate(3px, -3px);
          color: var(--accent-green);
        }

        @media (max-width: 1024px) {
          .research-posters-grid {
            grid-template-columns: 1fr;
          }
          .exhibition-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .exh-right {
            gap: 16px;
            flex-wrap: wrap;
          }
        }
      `})]})}function q0(){return c.jsxs("section",{id:"recognition",className:"arch-section recognition-section",children:[c.jsx("div",{className:"arch-grid-lines"}),c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header-bar",children:[c.jsxs("div",{className:"header-left",children:[c.jsx("span",{className:"section-number",children:"07"}),c.jsxs("div",{className:"header-titles",children:[c.jsx("span",{className:"section-label",children:"AWARDS & HONORS"}),c.jsx("h2",{className:"section-title display-title",children:"Recognition"})]})]}),c.jsx("div",{className:"header-line"})]}),c.jsx("div",{className:"recognition-list",children:Qd.map((g,A)=>c.jsxs("div",{className:"award-row",children:[c.jsx("div",{className:"award-year-col",children:c.jsx("span",{className:"award-year-text",children:g.year})}),c.jsxs("div",{className:"award-info-col",children:[c.jsx("h3",{className:"award-title-text",children:g.title}),c.jsxs("div",{className:"award-org-meta",children:[c.jsx("span",{className:"award-org-name",children:g.organization}),c.jsx("span",{className:"bullet-sep",children:"•"}),c.jsx(Xt,{size:12,className:"meta-icon"}),c.jsx("span",{className:"award-location",children:g.location})]})]}),c.jsxs("div",{className:"award-project-ref",children:[c.jsx("span",{className:"mono-text ref-label",children:"NOMINATED PROJECT:"}),c.jsx("span",{className:"ref-name",children:g.projectRef})]})]},A))}),c.jsxs("div",{className:"recognition-disclaimer-box",children:[c.jsx(Jp,{size:18,className:"disclaimer-icon"}),c.jsx("p",{className:"disclaimer-text",children:'"All awards, honors, and organizations displayed in this template are fictional demonstration content."'})]})]}),c.jsx("style",{children:`
        .recognition-section {
          background-color: var(--bg-pure);
          border-bottom: 1px solid var(--border-light);
        }

        .recognition-list {
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border-light);
          background-color: var(--bg-pure);
          margin-bottom: 40px;
        }

        .award-row {
          display: grid;
          grid-template-columns: 140px 1.5fr 1fr;
          gap: 32px;
          align-items: center;
          padding: 28px 36px;
          border-bottom: 1px solid var(--border-light);
          transition: background-color 0.2s ease;
        }

        .award-row:last-child {
          border-bottom: none;
        }

        .award-row:hover {
          background-color: var(--bg-warm);
        }

        .award-year-text {
          font-family: var(--font-display);
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--accent-green);
          line-height: 1;
        }

        .award-title-text {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--accent-charcoal);
          margin-bottom: 6px;
        }

        .award-org-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .award-org-name {
          font-weight: 600;
          color: var(--text-main);
        }

        .award-project-ref {
          display: flex;
          flex-direction: column;
          gap: 4px;
          background-color: var(--bg-gray);
          padding: 12px 18px;
          border-left: 2px solid var(--accent-green);
        }

        .ref-label {
          font-size: 0.65rem;
          color: var(--accent-green);
        }

        .ref-name {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .recognition-disclaimer-box {
          display: flex;
          align-items: center;
          gap: 14px;
          background-color: var(--bg-warm);
          border: 1px solid var(--border-light);
          padding: 18px 24px;
        }

        .disclaimer-icon {
          color: var(--accent-terracotta);
          flex-shrink: 0;
        }

        .disclaimer-text {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-muted);
          margin: 0;
        }

        @media (max-width: 900px) {
          .award-row {
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 24px;
          }
        }
      `})]})}function G0(){const[g,A]=be.useState(!1),[E,d]=be.useState({name:"",email:"",projectType:"Architectural Design",message:""}),C=V=>{d({...E,[V.target.name]:V.target.value})},U=V=>{V.preventDefault(),E.name&&E.email&&E.message&&A(!0)};return c.jsxs("section",{id:"contact",className:"arch-section contact-section",children:[c.jsx("div",{className:"contact-grid-anim"}),c.jsxs("div",{className:"container relative-z",children:[c.jsxs("div",{className:"contact-top-banner",children:[c.jsx("span",{className:"section-label",children:"GET IN TOUCH"}),c.jsxs("h2",{className:"contact-heading display-title",children:["Let's Shape ",c.jsx("br",{}),"What Comes Next."]}),c.jsx("p",{className:"contact-subhead",children:'"Open to architectural collaborations, design conversations, and future-focused projects."'})]}),c.jsxs("div",{className:"contact-main-grid",children:[c.jsxs("div",{className:"contact-info-panel arch-card",children:[c.jsx("div",{className:"arch-corner-tick tick-tl"}),c.jsx("div",{className:"arch-corner-tick tick-tr"}),c.jsx("div",{className:"arch-corner-tick tick-bl"}),c.jsx("div",{className:"arch-corner-tick tick-br"}),c.jsx("h3",{className:"info-panel-title",children:"STUDIO DIRECTORY"}),c.jsxs("div",{className:"info-blocks-list",children:[c.jsxs("div",{className:"info-block-item",children:[c.jsx("span",{className:"mono-text block-label",children:"EMAIL INQUIRIES"}),c.jsxs("a",{href:`mailto:${fe.email}`,className:"info-value-link",children:[c.jsx(qd,{size:16}),c.jsx("span",{children:fe.email})]})]}),c.jsxs("div",{className:"info-block-item",children:[c.jsx("span",{className:"mono-text block-label",children:"STUDIO LOCATION"}),c.jsxs("div",{className:"info-value-text",children:[c.jsx(Xt,{size:16}),c.jsx("span",{children:fe.studioAddress})]})]}),c.jsxs("div",{className:"info-block-item",children:[c.jsx("span",{className:"mono-text block-label",children:"NETWORK & ARCHIVE"}),c.jsxs("div",{className:"info-value-text",children:[c.jsx(Yd,{size:16}),c.jsx("span",{children:"Copenhagen Architectural Registry / AV-2026"})]})]})]}),c.jsxs("div",{className:"studio-availability-box",children:[c.jsx("div",{className:"pulse-dot"}),c.jsx("span",{className:"mono-text",children:"ACCEPTING SELECT COMMISSIONS FOR 2026/2027"})]})]}),c.jsxs("div",{className:"contact-form-panel arch-card",children:[c.jsx("div",{className:"arch-corner-tick tick-tl"}),c.jsx("div",{className:"arch-corner-tick tick-tr"}),c.jsx("div",{className:"arch-corner-tick tick-bl"}),c.jsx("div",{className:"arch-corner-tick tick-br"}),g?c.jsxs("div",{className:"form-success-state",children:[c.jsx(kd,{size:48,className:"success-icon"}),c.jsx("h3",{className:"success-title",children:"Message Transmitted"}),c.jsxs("p",{className:"success-text",children:["Thank you, ",E.name,'. Your architectural inquiry regarding "',E.projectType,'" has been received. Adrian will respond within 48 business hours.']}),c.jsx("button",{className:"btn-outline",onClick:()=>{A(!1),d({name:"",email:"",projectType:"Architectural Design",message:""})},children:"Send Another Inquiry"})]}):c.jsxs("form",{onSubmit:U,className:"underline-form",children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"mono-text input-label",children:"01 // YOUR NAME"}),c.jsx("input",{type:"text",name:"name",required:!0,placeholder:"e.g. Elena Rostova",value:E.name,onChange:C,className:"underline-input"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"mono-text input-label",children:"02 // EMAIL ADDRESS"}),c.jsx("input",{type:"email",name:"email",required:!0,placeholder:"e.g. elena@studio.example",value:E.email,onChange:C,className:"underline-input"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"mono-text input-label",children:"03 // PROJECT TYPOLOGY"}),c.jsxs("select",{name:"projectType",value:E.projectType,onChange:C,className:"underline-select",children:[c.jsx("option",{value:"Architectural Design",children:"Architectural Design & Planning"}),c.jsx("option",{value:"Urban Regeneration",children:"Urban Regeneration / Masterplan"}),c.jsx("option",{value:"Sustainability Advisory",children:"Sustainability & Material Research"}),c.jsx("option",{value:"Public Keynote / Jury",children:"Public Keynote / Guest Lecture"})]})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"mono-text input-label",children:"04 // PROJECT DETAILS & SCOPE"}),c.jsx("textarea",{name:"message",required:!0,rows:"4",placeholder:"Describe site context, timeline, or collaboration parameters...",value:E.message,onChange:C,className:"underline-textarea"})]}),c.jsxs("button",{type:"submit",className:"btn-primary full-width submit-btn",children:[c.jsx("span",{children:"Begin a Conversation"}),c.jsx(A0,{size:16})]})]})]})]})]}),c.jsx("style",{children:`
        .contact-section {
          background-color: var(--bg-warm);
          padding-top: 120px;
          padding-bottom: 140px;
        }

        .contact-grid-anim {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image: 
            linear-gradient(to right, rgba(27, 54, 41, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(27, 54, 41, 0.04) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridPan 60s linear infinite;
        }

        @keyframes gridPan {
          from { background-position: 0 0; }
          to { background-position: 500px 500px; }
        }

        .relative-z {
          position: relative;
          z-index: 2;
        }

        .contact-top-banner {
          margin-bottom: 60px;
        }

        .contact-heading {
          font-size: clamp(3rem, 6vw, 5rem);
          line-height: 0.95;
          margin-top: 16px;
          margin-bottom: 24px;
          color: var(--accent-charcoal);
        }

        .contact-subhead {
          font-size: 1.2rem;
          color: var(--text-muted);
          max-width: 620px;
          line-height: 1.6;
        }

        .contact-main-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 40px;
        }

        /* INFO PANEL */
        .contact-info-panel {
          background-color: var(--bg-pure);
          display: flex;
          flex-direction: column;
          padding: 40px;
        }

        .info-panel-title {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          color: var(--accent-green);
          margin-bottom: 32px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-light);
        }

        .info-blocks-list {
          display: flex;
          flex-direction: column;
          gap: 32px;
          margin-bottom: 40px;
        }

        .info-block-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .block-label {
          font-size: 0.7rem;
          color: var(--text-light);
        }

        .info-value-link {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--accent-charcoal);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: color 0.2s ease;
        }

        .info-value-link:hover {
          color: var(--accent-green);
        }

        .info-value-text {
          font-size: 1rem;
          color: var(--text-main);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .studio-availability-box {
          margin-top: auto;
          padding: 16px 20px;
          background-color: var(--bg-warm);
          border: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .pulse-dot {
          width: 10px;
          height: 10px;
          background-color: var(--accent-green);
          border-radius: 50%;
          box-shadow: 0 0 0 0 rgba(27, 54, 41, 0.4);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(27, 54, 41, 0.4); }
          70% { box-shadow: 0 0 0 8px rgba(27, 54, 41, 0); }
          100% { box-shadow: 0 0 0 0 rgba(27, 54, 41, 0); }
        }

        /* FORM PANEL */
        .contact-form-panel {
          background-color: var(--bg-pure);
          padding: 40px;
        }

        .underline-form {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .input-label {
          font-size: 0.72rem;
          color: var(--accent-green);
        }

        .underline-input, .underline-select, .underline-textarea {
          width: 100%;
          border: none;
          border-bottom: 2px solid var(--border-medium);
          padding: 12px 0;
          font-family: var(--font-body);
          font-size: 1.05rem;
          color: var(--text-main);
          background: transparent;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .underline-input:focus, .underline-select:focus, .underline-textarea:focus {
          border-color: var(--accent-green);
        }

        .underline-select {
          cursor: pointer;
        }

        .submit-btn {
          margin-top: 16px;
        }

        .form-success-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 40px 20px;
        }

        .success-icon {
          color: var(--accent-green);
          margin-bottom: 20px;
        }

        .success-title {
          font-size: 1.8rem;
          color: var(--accent-charcoal);
          margin-bottom: 14px;
        }

        .success-text {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 30px;
        }

        @media (max-width: 900px) {
          .contact-main-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function L0(){const g=A=>{const E=document.getElementById(A);if(E){const C=document.body.getBoundingClientRect().top,le=E.getBoundingClientRect().top-C-80;window.scrollTo({top:le,behavior:"smooth"})}};return c.jsxs("footer",{className:"arch-footer",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"footer-top-grid",children:[c.jsxs("div",{className:"footer-left",children:[c.jsxs("div",{className:"footer-brand",children:[c.jsx("div",{className:"monogram-box",children:"AV"}),c.jsxs("div",{className:"brand-text",children:[c.jsx("span",{className:"brand-name",children:fe.name}),c.jsx("span",{className:"brand-title",children:fe.profession})]})]}),c.jsx("p",{className:"footer-tagline",children:fe.tagline})]}),c.jsxs("div",{className:"footer-center",children:[c.jsxs("div",{className:"footer-nav-col",children:[c.jsx("span",{className:"mono-text nav-col-title",children:"NAVIGATION"}),c.jsx("button",{onClick:()=>g("profile"),className:"footer-nav-link",children:"Profile"}),c.jsx("button",{onClick:()=>g("practice"),className:"footer-nav-link",children:"Practice Philosophy"}),c.jsx("button",{onClick:()=>g("projects"),className:"footer-nav-link",children:"Selected Works"}),c.jsx("button",{onClick:()=>g("experience"),className:"footer-nav-link",children:"Career Experience"})]}),c.jsxs("div",{className:"footer-nav-col",children:[c.jsx("span",{className:"mono-text nav-col-title",children:"ARCHIVE"}),c.jsx("button",{onClick:()=>g("expertise"),className:"footer-nav-link",children:"Design Expertise"}),c.jsx("button",{onClick:()=>g("education"),className:"footer-nav-link",children:"Academic Foundation"}),c.jsx("button",{onClick:()=>g("research"),className:"footer-nav-link",children:"Research & Public Work"}),c.jsx("button",{onClick:()=>g("contact"),className:"footer-nav-link",children:"Contact Studio"})]})]}),c.jsx("div",{className:"footer-right",children:c.jsxs("div",{className:"spec-card",children:[c.jsx("span",{className:"mono-text",children:"LOCATION MATRIX"}),c.jsx("span",{className:"spec-val",children:"Copenhagen / Denmark"}),c.jsx("span",{className:"mono-text mt-12",children:"SYSTEM REVISION"}),c.jsx("span",{className:"spec-val",children:"ARCH-VER 2026.04"})]})})]}),c.jsxs("div",{className:"footer-bottom-bar",children:[c.jsxs("span",{className:"copyright-text",children:["© 2026 ",fe.name,". All Rights Reserved."]}),c.jsxs("p",{className:"legal-disclaimer",children:['"',fe.disclaimer,'"']})]})]}),c.jsx("style",{children:`
        .arch-footer {
          background-color: var(--bg-pure);
          border-top: 1px solid var(--border-dark);
          padding-top: 80px;
          padding-bottom: 40px;
        }

        .footer-top-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr 0.8fr;
          gap: 60px;
          margin-bottom: 60px;
        }

        .footer-left {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .footer-tagline {
          font-size: 0.95rem;
          color: var(--text-muted);
          max-width: 320px;
          line-height: 1.5;
        }

        .footer-center {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .footer-nav-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .nav-col-title {
          font-size: 0.7rem;
          color: var(--accent-green);
          margin-bottom: 6px;
        }

        .footer-nav-link {
          background: none;
          border: none;
          text-align: left;
          font-size: 0.9rem;
          color: var(--text-muted);
          cursor: pointer;
          padding: 0;
          transition: color 0.2s ease;
        }

        .footer-nav-link:hover {
          color: var(--accent-green);
        }

        .footer-right {
          display: flex;
          flex-direction: column;
        }

        .spec-card {
          background-color: var(--bg-warm);
          border: 1px solid var(--border-light);
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .mt-12 {
          margin-top: 12px;
        }

        .spec-val {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--accent-charcoal);
        }

        .footer-bottom-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 32px;
          border-top: 1px solid var(--border-light);
          flex-wrap: wrap;
          gap: 16px;
        }

        .copyright-text {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--accent-charcoal);
          font-weight: 600;
        }

        .legal-disclaimer {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--text-light);
          max-width: 600px;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .footer-top-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `})]})}function X0({onClose:g}){const A=()=>{window.print()};return c.jsxs("div",{className:"modal-backdrop no-print-backdrop",onClick:g,children:[c.jsxs("div",{className:"cv-modal-card",onClick:E=>E.stopPropagation(),children:[c.jsxs("div",{className:"cv-top-bar no-print",children:[c.jsx("div",{className:"cv-top-title",children:c.jsx("span",{className:"mono-text",children:"ADRIAN VALE — CURRICULUM VITAE (PDF / PRINT VIEW)"})}),c.jsxs("div",{className:"cv-top-actions",children:[c.jsxs("button",{className:"btn-primary print-action-btn",onClick:A,children:[c.jsx(z0,{size:16}),c.jsx("span",{children:"Print / Download PDF"})]}),c.jsx("button",{className:"modal-close-btn",onClick:g,"aria-label":"Close CV Modal",children:c.jsx(Qi,{size:20})})]})]}),c.jsxs("div",{className:"cv-document-body",id:"printable-cv",children:[c.jsxs("header",{className:"cv-doc-header",children:[c.jsxs("div",{className:"header-main",children:[c.jsx("h1",{className:"cv-name",children:fe.name}),c.jsx("h2",{className:"cv-title-sub",children:fe.profession}),c.jsxs("p",{className:"cv-tagline-text",children:['"',fe.tagline,'"']})]}),c.jsxs("div",{className:"header-contact-meta",children:[c.jsxs("div",{className:"meta-item",children:[c.jsx(Xt,{size:12})," ",fe.location]}),c.jsxs("div",{className:"meta-item",children:[c.jsx(qd,{size:12})," ",fe.email]}),c.jsxs("div",{className:"meta-item",children:[c.jsx(j0,{size:12})," ",fe.phone]}),c.jsxs("div",{className:"meta-item",children:[c.jsx(Yd,{size:12})," adrianvale.example"]})]})]}),c.jsx("hr",{className:"cv-divider"}),c.jsxs("section",{className:"cv-sec",children:[c.jsx("h3",{className:"cv-sec-title",children:"PROFESSIONAL PROFILE"}),c.jsxs("p",{className:"cv-summary-text",children:[fe.heroStatement," With over ",fe.experienceYears," of experience heading sustainable mass-timber developments, public cultural pavilions, and urban regeneration masterplans in Denmark and Sweden, Adrian Vale synthesizes ecological site analysis, human ergonomics, and parametric daylighting."]})]}),c.jsxs("section",{className:"cv-sec",children:[c.jsx("h3",{className:"cv-sec-title",children:"CAREER EXPERIENCE"}),c.jsx("div",{className:"cv-items-stack",children:Gd.map((E,d)=>c.jsxs("div",{className:"cv-exp-item",children:[c.jsxs("div",{className:"exp-line-header",children:[c.jsxs("div",{className:"exp-role-co",children:[c.jsx("span",{className:"exp-role-title",children:E.role})," — ",c.jsx("span",{className:"exp-co",children:E.company})]}),c.jsx("span",{className:"exp-date",children:E.period})]}),c.jsxs("div",{className:"exp-loc-line",children:[E.location," | ",E.type]}),c.jsx("ul",{className:"exp-bullets",children:E.responsibilities.map((C,U)=>c.jsx("li",{children:C},U))})]},d))})]}),c.jsxs("section",{className:"cv-sec",children:[c.jsx("h3",{className:"cv-sec-title",children:"ACADEMIC FOUNDATION"}),c.jsx("div",{className:"cv-items-stack",children:Xd.map((E,d)=>c.jsxs("div",{className:"cv-edu-item",children:[c.jsxs("div",{className:"exp-line-header",children:[c.jsx("span",{className:"exp-role-title",children:E.degree}),c.jsx("span",{className:"exp-date",children:E.year})]}),c.jsxs("div",{className:"exp-loc-line",children:[E.institution," — ",E.location]}),c.jsxs("div",{className:"edu-note",children:[E.thesis," (",E.honors,")"]})]},d))})]}),c.jsxs("section",{className:"cv-sec",children:[c.jsx("h3",{className:"cv-sec-title",children:"SELECTED ARCHITECTURAL WORKS"}),c.jsx("div",{className:"cv-projects-grid",children:gu.map(E=>c.jsxs("div",{className:"cv-proj-row",children:[c.jsxs("span",{className:"p-num",children:["PROJ ",E.num]}),c.jsxs("div",{className:"p-details",children:[c.jsxs("span",{className:"p-name",children:[E.name," (",E.year,")"]}),c.jsxs("span",{className:"p-type",children:[E.type," — ",E.location]})]})]},E.id))})]}),c.jsxs("section",{className:"cv-sec",children:[c.jsx("h3",{className:"cv-sec-title",children:"TECHNICAL EXPERTISE & TOOLS"}),c.jsx("div",{className:"cv-skills-grid",children:Ld.map((E,d)=>c.jsxs("div",{className:"cv-skill-cat",children:[c.jsxs("span",{className:"cat-hdr",children:[E.category,":"]}),c.jsx("span",{className:"cat-items",children:E.skills.map(C=>C.name).join(", ")})]},d))})]}),c.jsxs("section",{className:"cv-sec",children:[c.jsx("h3",{className:"cv-sec-title",children:"RECOGNITION & AWARDS"}),c.jsx("div",{className:"cv-awards-list",children:Qd.map((E,d)=>c.jsxs("div",{className:"cv-award-item",children:[c.jsx("span",{className:"a-year",children:E.year})," — ",c.jsx("span",{className:"a-title",children:E.title})," (",E.organization,")"]},d))})]}),c.jsx("footer",{className:"cv-doc-footer",children:c.jsxs("p",{className:"cv-legal",children:['"',fe.disclaimer,'"']})})]})]}),c.jsx("style",{children:`
        .cv-modal-card {
          width: 100%;
          max-width: 900px;
          max-height: 92vh;
          background-color: #ffffff;
          border: 1px solid var(--border-dark);
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.4);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        .cv-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 28px;
          background-color: var(--bg-warm);
          border-bottom: 1px solid var(--border-medium);
        }

        .cv-top-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .print-action-btn {
          padding: 10px 20px;
          font-size: 0.75rem;
        }

        .cv-document-body {
          overflow-y: auto;
          padding: 50px 60px;
          background-color: #ffffff;
          color: #1a1a1a;
          font-family: 'Plus Jakarta Sans', sans-serif;
          line-height: 1.5;
        }

        .cv-doc-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
        }

        .cv-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2.4rem;
          font-weight: 800;
          color: #141414;
          letter-spacing: -0.02em;
          margin-bottom: 4px;
        }

        .cv-title-sub {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.9rem;
          color: #1B3629;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin-bottom: 8px;
        }

        .cv-tagline-text {
          font-size: 0.95rem;
          font-style: italic;
          color: #555555;
        }

        .header-contact-meta {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          color: #444444;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .cv-divider {
          border: none;
          border-top: 2px solid #141414;
          margin: 20px 0 28px;
        }

        .cv-sec {
          margin-bottom: 28px;
        }

        .cv-sec-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.82rem;
          font-weight: 700;
          color: #1B3629;
          letter-spacing: 0.1em;
          border-bottom: 1px solid #d0cec5;
          padding-bottom: 6px;
          margin-bottom: 14px;
        }

        .cv-summary-text {
          font-size: 0.92rem;
          color: #333333;
          line-height: 1.6;
        }

        .cv-items-stack {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .exp-line-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.98rem;
        }

        .exp-role-title {
          font-weight: 700;
          color: #141414;
        }

        .exp-co {
          color: #1B3629;
          font-weight: 600;
        }

        .exp-date {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          color: #666666;
        }

        .exp-loc-line {
          font-size: 0.82rem;
          color: #666666;
          margin-bottom: 8px;
        }

        .exp-bullets {
          padding-left: 20px;
          font-size: 0.86rem;
          color: #444444;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .edu-note {
          font-size: 0.85rem;
          font-style: italic;
          color: #555555;
        }

        .cv-projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .cv-proj-row {
          display: flex;
          gap: 12px;
          font-size: 0.85rem;
          background-color: #faf9f5;
          padding: 8px 12px;
          border: 1px solid #eae8e3;
        }

        .p-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.72rem;
          color: #1B3629;
          font-weight: 700;
        }

        .p-details {
          display: flex;
          flex-direction: column;
        }

        .p-name {
          font-weight: 700;
          color: #141414;
        }

        .p-type {
          font-size: 0.75rem;
          color: #666666;
        }

        .cv-skills-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 0.85rem;
        }

        .cat-hdr {
          font-weight: 700;
          color: #141414;
          margin-right: 8px;
        }

        .cat-items {
          color: #444444;
        }

        .cv-awards-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 0.86rem;
        }

        .a-year {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
          color: #1B3629;
        }

        .a-title {
          font-weight: 600;
          color: #141414;
        }

        .cv-doc-footer {
          margin-top: 36px;
          padding-top: 16px;
          border-top: 1px dashed #cccccc;
          text-align: center;
        }

        .cv-legal {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          color: #777777;
        }

        /* PRINT STYLES */
        @media print {
          .no-print, .no-print-backdrop {
            background: none !important;
            padding: 0 !important;
          }
          .cv-modal-card {
            max-width: 100% !important;
            max-height: none !important;
            box-shadow: none !important;
            border: none !important;
          }
          .cv-document-body {
            padding: 0 !important;
            overflow: visible !important;
          }
        }
      `})]})}function Q0(){const[g,A]=be.useState(!1);return be.useEffect(()=>{const E=setTimeout(()=>{A(!0)},100);return()=>clearTimeout(E)},[]),c.jsxs("div",{className:`grid-drawing-layer ${g?"grid-active":""}`,children:[c.jsx("div",{className:"grid-line vertical line-v-1"}),c.jsx("div",{className:"grid-line vertical line-v-2"}),c.jsx("div",{className:"grid-line vertical line-v-3"}),c.jsx("div",{className:"grid-line horizontal line-h-1"}),c.jsx("div",{className:"grid-line horizontal line-h-2"}),c.jsx("style",{children:`
        .grid-drawing-layer {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          opacity: 0;
          transition: opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .grid-drawing-layer.grid-active {
          opacity: 1;
        }

        .grid-line {
          position: absolute;
          background-color: rgba(20, 20, 20, 0.035);
          transition: transform 1.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .grid-line.vertical {
          width: 1px;
          top: 0;
          bottom: 0;
          transform: scaleY(0);
        }

        .grid-line.horizontal {
          height: 1px;
          left: 0;
          right: 0;
          transform: scaleX(0);
        }

        .grid-active .line-v-1 {
          left: 10%;
          transform: scaleY(1);
          transition-delay: 0.1s;
        }

        .grid-active .line-v-2 {
          left: 50%;
          transform: scaleY(1);
          transition-delay: 0.3s;
        }

        .grid-active .line-v-3 {
          left: 90%;
          transform: scaleY(1);
          transition-delay: 0.5s;
        }

        .grid-active .line-h-1 {
          top: 25%;
          transform: scaleX(1);
          transition-delay: 0.2s;
        }

        .grid-active .line-h-2 {
          top: 75%;
          transform: scaleX(1);
          transition-delay: 0.4s;
        }
      `})]})}function V0(){const[g,A]=be.useState(null),[E,d]=be.useState(!1),C=()=>{const U=document.getElementById("projects");if(U){const le=document.body.getBoundingClientRect().top,G=U.getBoundingClientRect().top-le-80;window.scrollTo({top:G,behavior:"smooth"})}};return c.jsxs("div",{className:"app-root",children:[c.jsx(Q0,{}),c.jsx(D0,{onOpenCV:()=>d(!0)}),c.jsxs("main",{className:"main-content",children:[c.jsx(R0,{onOpenCV:()=>d(!0),onExploreProjects:C}),c.jsx(_0,{}),c.jsx(U0,{onSelectProject:U=>A(U)}),c.jsx(B0,{}),c.jsx(w0,{}),c.jsx(k0,{}),c.jsx(Y0,{}),c.jsx(q0,{}),c.jsx(G0,{})]}),c.jsx(L0,{}),g&&c.jsx(H0,{project:g,onClose:()=>A(null)}),E&&c.jsx(X0,{onClose:()=>d(!1)})]})}Sp.createRoot(document.getElementById("root")).render(c.jsx(be.StrictMode,{children:c.jsx(V0,{})}));
