(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();var cr={exports:{}},Ni={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym=Symbol.for("react.transitional.element"),bm=Symbol.for("react.fragment");function sr(e,a,t){var l=null;if(t!==void 0&&(l=""+t),a.key!==void 0&&(l=""+a.key),"key"in a){t={};for(var n in a)n!=="key"&&(t[n]=a[n])}else t=a;return a=t.ref,{$$typeof:ym,type:e,key:l,ref:a!==void 0?a:null,props:t}}Ni.Fragment=bm;Ni.jsx=sr;Ni.jsxs=sr;cr.exports=Ni;var c=cr.exports,ur={exports:{}},T={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zs=Symbol.for("react.transitional.element"),Nm=Symbol.for("react.portal"),jm=Symbol.for("react.fragment"),Sm=Symbol.for("react.strict_mode"),zm=Symbol.for("react.profiler"),Em=Symbol.for("react.consumer"),Am=Symbol.for("react.context"),Tm=Symbol.for("react.forward_ref"),Mm=Symbol.for("react.suspense"),Om=Symbol.for("react.memo"),or=Symbol.for("react.lazy"),Cm=Symbol.for("react.activity"),Ou=Symbol.iterator;function Dm(e){return e===null||typeof e!="object"?null:(e=Ou&&e[Ou]||e["@@iterator"],typeof e=="function"?e:null)}var rr={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fr=Object.assign,dr={};function nl(e,a,t){this.props=e,this.context=a,this.refs=dr,this.updater=t||rr}nl.prototype.isReactComponent={};nl.prototype.setState=function(e,a){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,a,"setState")};nl.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function mr(){}mr.prototype=nl.prototype;function Es(e,a,t){this.props=e,this.context=a,this.refs=dr,this.updater=t||rr}var As=Es.prototype=new mr;As.constructor=Es;fr(As,nl.prototype);As.isPureReactComponent=!0;var Cu=Array.isArray;function Ac(){}var I={H:null,A:null,T:null,S:null},hr=Object.prototype.hasOwnProperty;function Ts(e,a,t){var l=t.ref;return{$$typeof:zs,type:e,key:a,ref:l!==void 0?l:null,props:t}}function _m(e,a){return Ts(e.type,a,e.props)}function Ms(e){return typeof e=="object"&&e!==null&&e.$$typeof===zs}function Rm(e){var a={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return a[t]})}var Du=/\/+/g;function Gi(e,a){return typeof e=="object"&&e!==null&&e.key!=null?Rm(""+e.key):a.toString(36)}function Um(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Ac,Ac):(e.status="pending",e.then(function(a){e.status==="pending"&&(e.status="fulfilled",e.value=a)},function(a){e.status==="pending"&&(e.status="rejected",e.reason=a)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Et(e,a,t,l,n){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"bigint":case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case zs:case Nm:s=!0;break;case or:return s=e._init,Et(s(e._payload),a,t,l,n)}}if(s)return n=n(e),s=l===""?"."+Gi(e,0):l,Cu(n)?(t="",s!=null&&(t=s.replace(Du,"$&/")+"/"),Et(n,a,t,"",function(d){return d})):n!=null&&(Ms(n)&&(n=_m(n,t+(n.key==null||e&&e.key===n.key?"":(""+n.key).replace(Du,"$&/")+"/")+s)),a.push(n)),1;s=0;var u=l===""?".":l+":";if(Cu(e))for(var o=0;o<e.length;o++)l=e[o],i=u+Gi(l,o),s+=Et(l,a,t,i,n);else if(o=Dm(e),typeof o=="function")for(e=o.call(e),o=0;!(l=e.next()).done;)l=l.value,i=u+Gi(l,o++),s+=Et(l,a,t,i,n);else if(i==="object"){if(typeof e.then=="function")return Et(Um(e),a,t,l,n);throw a=String(e),Error("Objects are not valid as a React child (found: "+(a==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.")}return s}function hn(e,a,t){if(e==null)return e;var l=[],n=0;return Et(e,l,"","",function(i){return a.call(t,i,n++)}),l}function Hm(e){if(e._status===-1){var a=e._result;a=a(),a.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=a)}if(e._status===1)return e._result.default;throw e._result}var _u=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},wm={map:hn,forEach:function(e,a,t){hn(e,function(){a.apply(this,arguments)},t)},count:function(e){var a=0;return hn(e,function(){a++}),a},toArray:function(e){return hn(e,function(a){return a})||[]},only:function(e){if(!Ms(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Activity=Cm;T.Children=wm;T.Component=nl;T.Fragment=jm;T.Profiler=zm;T.PureComponent=Es;T.StrictMode=Sm;T.Suspense=Mm;T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I;T.__COMPILER_RUNTIME={__proto__:null,c:function(e){return I.H.useMemoCache(e)}};T.cache=function(e){return function(){return e.apply(null,arguments)}};T.cacheSignal=function(){return null};T.cloneElement=function(e,a,t){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var l=fr({},e.props),n=e.key;if(a!=null)for(i in a.key!==void 0&&(n=""+a.key),a)!hr.call(a,i)||i==="key"||i==="__self"||i==="__source"||i==="ref"&&a.ref===void 0||(l[i]=a[i]);var i=arguments.length-2;if(i===1)l.children=t;else if(1<i){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+2];l.children=s}return Ts(e.type,n,l)};T.createContext=function(e){return e={$$typeof:Am,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:Em,_context:e},e};T.createElement=function(e,a,t){var l,n={},i=null;if(a!=null)for(l in a.key!==void 0&&(i=""+a.key),a)hr.call(a,l)&&l!=="key"&&l!=="__self"&&l!=="__source"&&(n[l]=a[l]);var s=arguments.length-2;if(s===1)n.children=t;else if(1<s){for(var u=Array(s),o=0;o<s;o++)u[o]=arguments[o+2];n.children=u}if(e&&e.defaultProps)for(l in s=e.defaultProps,s)n[l]===void 0&&(n[l]=s[l]);return Ts(e,i,n)};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:Tm,render:e}};T.isValidElement=Ms;T.lazy=function(e){return{$$typeof:or,_payload:{_status:-1,_result:e},_init:Hm}};T.memo=function(e,a){return{$$typeof:Om,type:e,compare:a===void 0?null:a}};T.startTransition=function(e){var a=I.T,t={};I.T=t;try{var l=e(),n=I.S;n!==null&&n(t,l),typeof l=="object"&&l!==null&&typeof l.then=="function"&&l.then(Ac,_u)}catch(i){_u(i)}finally{a!==null&&t.types!==null&&(a.types=t.types),I.T=a}};T.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()};T.use=function(e){return I.H.use(e)};T.useActionState=function(e,a,t){return I.H.useActionState(e,a,t)};T.useCallback=function(e,a){return I.H.useCallback(e,a)};T.useContext=function(e){return I.H.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e,a){return I.H.useDeferredValue(e,a)};T.useEffect=function(e,a){return I.H.useEffect(e,a)};T.useEffectEvent=function(e){return I.H.useEffectEvent(e)};T.useId=function(){return I.H.useId()};T.useImperativeHandle=function(e,a,t){return I.H.useImperativeHandle(e,a,t)};T.useInsertionEffect=function(e,a){return I.H.useInsertionEffect(e,a)};T.useLayoutEffect=function(e,a){return I.H.useLayoutEffect(e,a)};T.useMemo=function(e,a){return I.H.useMemo(e,a)};T.useOptimistic=function(e,a){return I.H.useOptimistic(e,a)};T.useReducer=function(e,a,t){return I.H.useReducer(e,a,t)};T.useRef=function(e){return I.H.useRef(e)};T.useState=function(e){return I.H.useState(e)};T.useSyncExternalStore=function(e,a,t){return I.H.useSyncExternalStore(e,a,t)};T.useTransition=function(){return I.H.useTransition()};T.version="19.2.8";ur.exports=T;var J=ur.exports,pr={exports:{}},ji={},gr={exports:{}},vr={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function a(j,_){var D=j.length;j.push(_);e:for(;0<D;){var le=D-1>>>1,de=j[le];if(0<n(de,_))j[le]=_,j[D]=de,D=le;else break e}}function t(j){return j.length===0?null:j[0]}function l(j){if(j.length===0)return null;var _=j[0],D=j.pop();if(D!==_){j[0]=D;e:for(var le=0,de=j.length,fn=de>>>1;le<fn;){var dn=2*(le+1)-1,qi=j[dn],et=dn+1,mn=j[et];if(0>n(qi,D))et<de&&0>n(mn,qi)?(j[le]=mn,j[et]=D,le=et):(j[le]=qi,j[dn]=D,le=dn);else if(et<de&&0>n(mn,D))j[le]=mn,j[et]=D,le=et;else break e}}return _}function n(j,_){var D=j.sortIndex-_.sortIndex;return D!==0?D:j.id-_.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,u=s.now();e.unstable_now=function(){return s.now()-u}}var o=[],d=[],g=1,v=null,f=3,p=!1,b=!1,S=!1,H=!1,m=typeof setTimeout=="function"?setTimeout:null,r=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;function x(j){for(var _=t(d);_!==null;){if(_.callback===null)l(d);else if(_.startTime<=j)l(d),_.sortIndex=_.expirationTime,a(o,_);else break;_=t(d)}}function z(j){if(S=!1,x(j),!b)if(t(o)!==null)b=!0,O||(O=!0,Aa());else{var _=t(d);_!==null&&Li(z,_.startTime-j)}}var O=!1,N=-1,A=5,C=-1;function B(){return H?!0:!(e.unstable_now()-C<A)}function qe(){if(H=!1,O){var j=e.unstable_now();C=j;var _=!0;try{e:{b=!1,S&&(S=!1,r(N),N=-1),p=!0;var D=f;try{a:{for(x(j),v=t(o);v!==null&&!(v.expirationTime>j&&B());){var le=v.callback;if(typeof le=="function"){v.callback=null,f=v.priorityLevel;var de=le(v.expirationTime<=j);if(j=e.unstable_now(),typeof de=="function"){v.callback=de,x(j),_=!0;break a}v===t(o)&&l(o),x(j)}else l(o);v=t(o)}if(v!==null)_=!0;else{var fn=t(d);fn!==null&&Li(z,fn.startTime-j),_=!1}}break e}finally{v=null,f=D,p=!1}_=void 0}}finally{_?Aa():O=!1}}}var Aa;if(typeof h=="function")Aa=function(){h(qe)};else if(typeof MessageChannel<"u"){var Mu=new MessageChannel,xm=Mu.port2;Mu.port1.onmessage=qe,Aa=function(){xm.postMessage(null)}}else Aa=function(){m(qe,0)};function Li(j,_){N=m(function(){j(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(j){switch(f){case 1:case 2:case 3:var _=3;break;default:_=f}var D=f;f=_;try{return j()}finally{f=D}},e.unstable_requestPaint=function(){H=!0},e.unstable_runWithPriority=function(j,_){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var D=f;f=j;try{return _()}finally{f=D}},e.unstable_scheduleCallback=function(j,_,D){var le=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?le+D:le):D=le,j){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=D+de,j={id:g++,callback:_,priorityLevel:j,startTime:D,expirationTime:de,sortIndex:-1},D>le?(j.sortIndex=D,a(d,j),t(o)===null&&j===t(d)&&(S?(r(N),N=-1):S=!0,Li(z,D-le))):(j.sortIndex=de,a(o,j),b||p||(b=!0,O||(O=!0,Aa()))),j},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(j){var _=f;return function(){var D=f;f=_;try{return j.apply(this,arguments)}finally{f=D}}}})(vr);gr.exports=vr;var Bm=gr.exports,xr={exports:{}},Se={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km=J;function yr(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ta(){}var je={d:{f:Ta,r:function(){throw Error(yr(522))},D:Ta,C:Ta,L:Ta,m:Ta,X:Ta,S:Ta,M:Ta},p:0,findDOMNode:null},Ym=Symbol.for("react.portal");function Lm(e,a,t){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ym,key:l==null?null:""+l,children:e,containerInfo:a,implementation:t}}var zl=km.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Si(e,a){if(e==="font")return"";if(typeof a=="string")return a==="use-credentials"?a:""}Se.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=je;Se.createPortal=function(e,a){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)throw Error(yr(299));return Lm(e,a,null,t)};Se.flushSync=function(e){var a=zl.T,t=je.p;try{if(zl.T=null,je.p=2,e)return e()}finally{zl.T=a,je.p=t,je.d.f()}};Se.preconnect=function(e,a){typeof e=="string"&&(a?(a=a.crossOrigin,a=typeof a=="string"?a==="use-credentials"?a:"":void 0):a=null,je.d.C(e,a))};Se.prefetchDNS=function(e){typeof e=="string"&&je.d.D(e)};Se.preinit=function(e,a){if(typeof e=="string"&&a&&typeof a.as=="string"){var t=a.as,l=Si(t,a.crossOrigin),n=typeof a.integrity=="string"?a.integrity:void 0,i=typeof a.fetchPriority=="string"?a.fetchPriority:void 0;t==="style"?je.d.S(e,typeof a.precedence=="string"?a.precedence:void 0,{crossOrigin:l,integrity:n,fetchPriority:i}):t==="script"&&je.d.X(e,{crossOrigin:l,integrity:n,fetchPriority:i,nonce:typeof a.nonce=="string"?a.nonce:void 0})}};Se.preinitModule=function(e,a){if(typeof e=="string")if(typeof a=="object"&&a!==null){if(a.as==null||a.as==="script"){var t=Si(a.as,a.crossOrigin);je.d.M(e,{crossOrigin:t,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0})}}else a==null&&je.d.M(e)};Se.preload=function(e,a){if(typeof e=="string"&&typeof a=="object"&&a!==null&&typeof a.as=="string"){var t=a.as,l=Si(t,a.crossOrigin);je.d.L(e,t,{crossOrigin:l,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0,type:typeof a.type=="string"?a.type:void 0,fetchPriority:typeof a.fetchPriority=="string"?a.fetchPriority:void 0,referrerPolicy:typeof a.referrerPolicy=="string"?a.referrerPolicy:void 0,imageSrcSet:typeof a.imageSrcSet=="string"?a.imageSrcSet:void 0,imageSizes:typeof a.imageSizes=="string"?a.imageSizes:void 0,media:typeof a.media=="string"?a.media:void 0})}};Se.preloadModule=function(e,a){if(typeof e=="string")if(a){var t=Si(a.as,a.crossOrigin);je.d.m(e,{as:typeof a.as=="string"&&a.as!=="script"?a.as:void 0,crossOrigin:t,integrity:typeof a.integrity=="string"?a.integrity:void 0})}else je.d.m(e)};Se.requestFormReset=function(e){je.d.r(e)};Se.unstable_batchedUpdates=function(e,a){return e(a)};Se.useFormState=function(e,a,t){return zl.H.useFormState(e,a,t)};Se.useFormStatus=function(){return zl.H.useHostTransitionStatus()};Se.version="19.2.8";function br(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(br)}catch(e){console.error(e)}}br(),xr.exports=Se;var qm=xr.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fe=Bm,Nr=J,Gm=qm;function y(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function jr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Il(e){var a=e,t=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,a.flags&4098&&(t=a.return),e=a.return;while(e)}return a.tag===3?t:null}function Sr(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function zr(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function Ru(e){if(Il(e)!==e)throw Error(y(188))}function Xm(e){var a=e.alternate;if(!a){if(a=Il(e),a===null)throw Error(y(188));return a!==e?null:e}for(var t=e,l=a;;){var n=t.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){t=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===t)return Ru(n),e;if(i===l)return Ru(n),a;i=i.sibling}throw Error(y(188))}if(t.return!==l.return)t=n,l=i;else{for(var s=!1,u=n.child;u;){if(u===t){s=!0,t=n,l=i;break}if(u===l){s=!0,l=n,t=i;break}u=u.sibling}if(!s){for(u=i.child;u;){if(u===t){s=!0,t=i,l=n;break}if(u===l){s=!0,l=i,t=n;break}u=u.sibling}if(!s)throw Error(y(189))}}if(t.alternate!==l)throw Error(y(190))}if(t.tag!==3)throw Error(y(188));return t.stateNode.current===t?e:a}function Er(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=Er(e),a!==null)return a;e=e.sibling}return null}var P=Object.assign,Qm=Symbol.for("react.element"),pn=Symbol.for("react.transitional.element"),yl=Symbol.for("react.portal"),Mt=Symbol.for("react.fragment"),Ar=Symbol.for("react.strict_mode"),Tc=Symbol.for("react.profiler"),Tr=Symbol.for("react.consumer"),ha=Symbol.for("react.context"),Os=Symbol.for("react.forward_ref"),Mc=Symbol.for("react.suspense"),Oc=Symbol.for("react.suspense_list"),Cs=Symbol.for("react.memo"),Ma=Symbol.for("react.lazy"),Cc=Symbol.for("react.activity"),Vm=Symbol.for("react.memo_cache_sentinel"),Uu=Symbol.iterator;function dl(e){return e===null||typeof e!="object"?null:(e=Uu&&e[Uu]||e["@@iterator"],typeof e=="function"?e:null)}var Zm=Symbol.for("react.client.reference");function Dc(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Zm?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mt:return"Fragment";case Tc:return"Profiler";case Ar:return"StrictMode";case Mc:return"Suspense";case Oc:return"SuspenseList";case Cc:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case yl:return"Portal";case ha:return e.displayName||"Context";case Tr:return(e._context.displayName||"Context")+".Consumer";case Os:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Cs:return a=e.displayName||null,a!==null?a:Dc(e.type)||"Memo";case Ma:a=e._payload,e=e._init;try{return Dc(e(a))}catch{}}return null}var bl=Array.isArray,E=Nr.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=Gm.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ct={pending:!1,data:null,method:null,action:null},_c=[],Ot=-1;function ia(e){return{current:e}}function pe(e){0>Ot||(e.current=_c[Ot],_c[Ot]=null,Ot--)}function $(e,a){Ot++,_c[Ot]=e.current,e.current=a}var na=ia(null),kl=ia(null),Ya=ia(null),Vn=ia(null);function Zn(e,a){switch($(Ya,a),$(kl,e),$(na,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?qo(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=qo(a),e=Jd(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}pe(na),$(na,e)}function Kt(){pe(na),pe(kl),pe(Ya)}function Rc(e){e.memoizedState!==null&&$(Vn,e);var a=na.current,t=Jd(a,e.type);a!==t&&($(kl,e),$(na,t))}function Kn(e){kl.current===e&&(pe(na),pe(kl)),Vn.current===e&&(pe(Vn),$l._currentValue=ct)}var Xi,Hu;function tt(e){if(Xi===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);Xi=a&&a[1]||"",Hu=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xi+e+Hu}var Qi=!1;function Vi(e,a){if(!e||Qi)return"";Qi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var v=function(){throw Error()};if(Object.defineProperty(v.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(v,[])}catch(p){var f=p}Reflect.construct(e,[],v)}else{try{v.call()}catch(p){f=p}e.call(v.prototype)}}else{try{throw Error()}catch(p){f=p}(v=e())&&typeof v.catch=="function"&&v.catch(function(){})}}catch(p){if(p&&f&&typeof p.stack=="string")return[p.stack,f.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),s=i[0],u=i[1];if(s&&u){var o=s.split(`
`),d=u.split(`
`);for(n=l=0;l<o.length&&!o[l].includes("DetermineComponentFrameRoot");)l++;for(;n<d.length&&!d[n].includes("DetermineComponentFrameRoot");)n++;if(l===o.length||n===d.length)for(l=o.length-1,n=d.length-1;1<=l&&0<=n&&o[l]!==d[n];)n--;for(;1<=l&&0<=n;l--,n--)if(o[l]!==d[n]){if(l!==1||n!==1)do if(l--,n--,0>n||o[l]!==d[n]){var g=`
`+o[l].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=l&&0<=n);break}}}finally{Qi=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?tt(t):""}function Km(e,a){switch(e.tag){case 26:case 27:case 5:return tt(e.type);case 16:return tt("Lazy");case 13:return e.child!==a&&a!==null?tt("Suspense Fallback"):tt("Suspense");case 19:return tt("SuspenseList");case 0:case 15:return Vi(e.type,!1);case 11:return Vi(e.type.render,!1);case 1:return Vi(e.type,!0);case 31:return tt("Activity");default:return""}}function wu(e){try{var a="",t=null;do a+=Km(e,t),t=e,e=e.return;while(e);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Uc=Object.prototype.hasOwnProperty,Ds=fe.unstable_scheduleCallback,Zi=fe.unstable_cancelCallback,Jm=fe.unstable_shouldYield,$m=fe.unstable_requestPaint,He=fe.unstable_now,Wm=fe.unstable_getCurrentPriorityLevel,Mr=fe.unstable_ImmediatePriority,Or=fe.unstable_UserBlockingPriority,Jn=fe.unstable_NormalPriority,Fm=fe.unstable_LowPriority,Cr=fe.unstable_IdlePriority,Im=fe.log,Pm=fe.unstable_setDisableYieldValue,Pl=null,we=null;function Ua(e){if(typeof Im=="function"&&Pm(e),we&&typeof we.setStrictMode=="function")try{we.setStrictMode(Pl,e)}catch{}}var Be=Math.clz32?Math.clz32:th,eh=Math.log,ah=Math.LN2;function th(e){return e>>>=0,e===0?32:31-(eh(e)/ah|0)|0}var gn=256,vn=262144,xn=4194304;function lt(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function zi(e,a,t){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var u=l&134217727;return u!==0?(l=u&~i,l!==0?n=lt(l):(s&=u,s!==0?n=lt(s):t||(t=u&~e,t!==0&&(n=lt(t))))):(u=l&~i,u!==0?n=lt(u):s!==0?n=lt(s):t||(t=l&~e,t!==0&&(n=lt(t)))),n===0?0:a!==0&&a!==n&&!(a&i)&&(i=n&-n,t=a&-a,i>=t||i===32&&(t&4194048)!==0)?a:n}function en(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function lh(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dr(){var e=xn;return xn<<=1,!(xn&62914560)&&(xn=4194304),e}function Ki(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function an(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function nh(e,a,t,l,n,i){var s=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var u=e.entanglements,o=e.expirationTimes,d=e.hiddenUpdates;for(t=s&~t;0<t;){var g=31-Be(t),v=1<<g;u[g]=0,o[g]=-1;var f=d[g];if(f!==null)for(d[g]=null,g=0;g<f.length;g++){var p=f[g];p!==null&&(p.lane&=-536870913)}t&=~v}l!==0&&_r(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(s&~a))}function _r(e,a,t){e.pendingLanes|=a,e.suspendedLanes&=~a;var l=31-Be(a);e.entangledLanes|=a,e.entanglements[l]=e.entanglements[l]|1073741824|t&261930}function Rr(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var l=31-Be(t),n=1<<l;n&a|e[l]&a&&(e[l]|=a),t&=~n}}function Ur(e,a){var t=a&-a;return t=t&42?1:_s(t),t&(e.suspendedLanes|a)?0:t}function _s(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Rs(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Hr(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:im(e.type))}function Bu(e,a){var t=q.p;try{return q.p=e,a()}finally{q.p=t}}var Ia=Math.random().toString(36).slice(2),ve="__reactFiber$"+Ia,Oe="__reactProps$"+Ia,il="__reactContainer$"+Ia,Hc="__reactEvents$"+Ia,ih="__reactListeners$"+Ia,ch="__reactHandles$"+Ia,ku="__reactResources$"+Ia,tn="__reactMarker$"+Ia;function Us(e){delete e[ve],delete e[Oe],delete e[Hc],delete e[ih],delete e[ch]}function Ct(e){var a=e[ve];if(a)return a;for(var t=e.parentNode;t;){if(a=t[il]||t[ve]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=Zo(e);e!==null;){if(t=e[ve])return t;e=Zo(e)}return a}e=t,t=e.parentNode}return null}function cl(e){if(e=e[ve]||e[il]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function Nl(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(y(33))}function Lt(e){var a=e[ku];return a||(a=e[ku]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function he(e){e[tn]=!0}var wr=new Set,Br={};function gt(e,a){Jt(e,a),Jt(e+"Capture",a)}function Jt(e,a){for(Br[e]=a,e=0;e<a.length;e++)wr.add(a[e])}var sh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Yu={},Lu={};function uh(e){return Uc.call(Lu,e)?!0:Uc.call(Yu,e)?!1:sh.test(e)?Lu[e]=!0:(Yu[e]=!0,!1)}function Cn(e,a,t){if(uh(a))if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+t)}}function yn(e,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+t)}}function sa(e,a,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(a,t,""+l)}}function Xe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kr(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function oh(e,a,t){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return n.call(this)},set:function(s){t=""+s,i.call(this,s)}}),Object.defineProperty(e,a,{enumerable:l.enumerable}),{getValue:function(){return t},setValue:function(s){t=""+s},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function wc(e){if(!e._valueTracker){var a=kr(e)?"checked":"value";e._valueTracker=oh(e,a,""+e[a])}}function Yr(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),l="";return e&&(l=kr(e)?e.checked?"true":"false":e.value),e=l,e!==t?(a.setValue(e),!0):!1}function $n(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var rh=/[\n"\\]/g;function Ze(e){return e.replace(rh,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Bc(e,a,t,l,n,i,s,u){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),a!=null?s==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+Xe(a)):e.value!==""+Xe(a)&&(e.value=""+Xe(a)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),a!=null?kc(e,s,Xe(a)):t!=null?kc(e,s,Xe(t)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+Xe(u):e.removeAttribute("name")}function Lr(e,a,t,l,n,i,s,u){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),a!=null||t!=null){if(!(i!=="submit"&&i!=="reset"||a!=null)){wc(e);return}t=t!=null?""+Xe(t):"",a=a!=null?""+Xe(a):t,u||a===e.value||(e.value=a),e.defaultValue=a}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=u?e.checked:!!l,e.defaultChecked=!!l,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),wc(e)}function kc(e,a,t){a==="number"&&$n(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function qt(e,a,t,l){if(e=e.options,a){a={};for(var n=0;n<t.length;n++)a["$"+t[n]]=!0;for(t=0;t<e.length;t++)n=a.hasOwnProperty("$"+e[t].value),e[t].selected!==n&&(e[t].selected=n),n&&l&&(e[t].defaultSelected=!0)}else{for(t=""+Xe(t),a=null,n=0;n<e.length;n++){if(e[n].value===t){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}a!==null||e[n].disabled||(a=e[n])}a!==null&&(a.selected=!0)}}function qr(e,a,t){if(a!=null&&(a=""+Xe(a),a!==e.value&&(e.value=a),t==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=t!=null?""+Xe(t):""}function Gr(e,a,t,l){if(a==null){if(l!=null){if(t!=null)throw Error(y(92));if(bl(l)){if(1<l.length)throw Error(y(93));l=l[0]}t=l}t==null&&(t=""),a=t}t=Xe(a),e.defaultValue=t,l=e.textContent,l===t&&l!==""&&l!==null&&(e.value=l),wc(e)}function $t(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=a;return}}e.textContent=a}var fh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qu(e,a,t){var l=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?l?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":l?e.setProperty(a,t):typeof t!="number"||t===0||fh.has(a)?a==="float"?e.cssFloat=t:e[a]=(""+t).trim():e[a]=t+"px"}function Xr(e,a,t){if(a!=null&&typeof a!="object")throw Error(y(62));if(e=e.style,t!=null){for(var l in t)!t.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in a)l=a[n],a.hasOwnProperty(n)&&t[n]!==l&&qu(e,n,l)}else for(var i in a)a.hasOwnProperty(i)&&qu(e,i,a[i])}function Hs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),mh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Dn(e){return mh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function pa(){}var Yc=null;function ws(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dt=null,Gt=null;function Gu(e){var a=cl(e);if(a&&(e=a.stateNode)){var t=e[Oe]||null;e:switch(e=a.stateNode,a.type){case"input":if(Bc(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Ze(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var l=t[a];if(l!==e&&l.form===e.form){var n=l[Oe]||null;if(!n)throw Error(y(90));Bc(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(a=0;a<t.length;a++)l=t[a],l.form===e.form&&Yr(l)}break e;case"textarea":qr(e,t.value,t.defaultValue);break e;case"select":a=t.value,a!=null&&qt(e,!!t.multiple,a,!1)}}}var Ji=!1;function Qr(e,a,t){if(Ji)return e(a,t);Ji=!0;try{var l=e(a);return l}finally{if(Ji=!1,(Dt!==null||Gt!==null)&&(wi(),Dt&&(a=Dt,e=Gt,Gt=Dt=null,Gu(a),e)))for(a=0;a<e.length;a++)Gu(e[a])}}function Yl(e,a){var t=e.stateNode;if(t===null)return null;var l=t[Oe]||null;if(l===null)return null;t=l[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(y(231,a,typeof t));return t}var ba=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lc=!1;if(ba)try{var ml={};Object.defineProperty(ml,"passive",{get:function(){Lc=!0}}),window.addEventListener("test",ml,ml),window.removeEventListener("test",ml,ml)}catch{Lc=!1}var Ha=null,Bs=null,_n=null;function Vr(){if(_n)return _n;var e,a=Bs,t=a.length,l,n="value"in Ha?Ha.value:Ha.textContent,i=n.length;for(e=0;e<t&&a[e]===n[e];e++);var s=t-e;for(l=1;l<=s&&a[t-l]===n[i-l];l++);return _n=n.slice(e,1<l?1-l:void 0)}function Rn(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function bn(){return!0}function Xu(){return!1}function Ce(e){function a(t,l,n,i,s){this._reactName=t,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?bn:Xu,this.isPropagationStopped=Xu,this}return P(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=bn)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=bn)},persist:function(){},isPersistent:bn}),a}var vt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ei=Ce(vt),ln=P({},vt,{view:0,detail:0}),hh=Ce(ln),$i,Wi,hl,Ai=P({},ln,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ks,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hl&&(hl&&e.type==="mousemove"?($i=e.screenX-hl.screenX,Wi=e.screenY-hl.screenY):Wi=$i=0,hl=e),$i)},movementY:function(e){return"movementY"in e?e.movementY:Wi}}),Qu=Ce(Ai),ph=P({},Ai,{dataTransfer:0}),gh=Ce(ph),vh=P({},ln,{relatedTarget:0}),Fi=Ce(vh),xh=P({},vt,{animationName:0,elapsedTime:0,pseudoElement:0}),yh=Ce(xh),bh=P({},vt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nh=Ce(bh),jh=P({},vt,{data:0}),Vu=Ce(jh),Sh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Eh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ah(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=Eh[e])?!!a[e]:!1}function ks(){return Ah}var Th=P({},ln,{key:function(e){if(e.key){var a=Sh[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=Rn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ks,charCode:function(e){return e.type==="keypress"?Rn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mh=Ce(Th),Oh=P({},Ai,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zu=Ce(Oh),Ch=P({},ln,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ks}),Dh=Ce(Ch),_h=P({},vt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rh=Ce(_h),Uh=P({},Ai,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hh=Ce(Uh),wh=P({},vt,{newState:0,oldState:0}),Bh=Ce(wh),kh=[9,13,27,32],Ys=ba&&"CompositionEvent"in window,El=null;ba&&"documentMode"in document&&(El=document.documentMode);var Yh=ba&&"TextEvent"in window&&!El,Zr=ba&&(!Ys||El&&8<El&&11>=El),Ku=" ",Ju=!1;function Kr(e,a){switch(e){case"keyup":return kh.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _t=!1;function Lh(e,a){switch(e){case"compositionend":return Jr(a);case"keypress":return a.which!==32?null:(Ju=!0,Ku);case"textInput":return e=a.data,e===Ku&&Ju?null:e;default:return null}}function qh(e,a){if(_t)return e==="compositionend"||!Ys&&Kr(e,a)?(e=Vr(),_n=Bs=Ha=null,_t=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Zr&&a.locale!=="ko"?null:a.data;default:return null}}var Gh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $u(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!Gh[e.type]:a==="textarea"}function $r(e,a,t,l){Dt?Gt?Gt.push(l):Gt=[l]:Dt=l,a=mi(a,"onChange"),0<a.length&&(t=new Ei("onChange","change",null,t,l),e.push({event:t,listeners:a}))}var Al=null,Ll=null;function Xh(e){Vd(e,0)}function Ti(e){var a=Nl(e);if(Yr(a))return e}function Wu(e,a){if(e==="change")return a}var Wr=!1;if(ba){var Ii;if(ba){var Pi="oninput"in document;if(!Pi){var Fu=document.createElement("div");Fu.setAttribute("oninput","return;"),Pi=typeof Fu.oninput=="function"}Ii=Pi}else Ii=!1;Wr=Ii&&(!document.documentMode||9<document.documentMode)}function Iu(){Al&&(Al.detachEvent("onpropertychange",Fr),Ll=Al=null)}function Fr(e){if(e.propertyName==="value"&&Ti(Ll)){var a=[];$r(a,Ll,e,ws(e)),Qr(Xh,a)}}function Qh(e,a,t){e==="focusin"?(Iu(),Al=a,Ll=t,Al.attachEvent("onpropertychange",Fr)):e==="focusout"&&Iu()}function Vh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ti(Ll)}function Zh(e,a){if(e==="click")return Ti(a)}function Kh(e,a){if(e==="input"||e==="change")return Ti(a)}function Jh(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var Ye=typeof Object.is=="function"?Object.is:Jh;function ql(e,a){if(Ye(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var t=Object.keys(e),l=Object.keys(a);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var n=t[l];if(!Uc.call(a,n)||!Ye(e[n],a[n]))return!1}return!0}function Pu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function eo(e,a){var t=Pu(e);e=0;for(var l;t;){if(t.nodeType===3){if(l=e+t.textContent.length,e<=a&&l>=a)return{node:t,offset:a-e};e=l}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Pu(t)}}function Ir(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Ir(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function Pr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=$n(e.document);a instanceof e.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)e=a.contentWindow;else break;a=$n(e.document)}return a}function Ls(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var $h=ba&&"documentMode"in document&&11>=document.documentMode,Rt=null,qc=null,Tl=null,Gc=!1;function ao(e,a,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Gc||Rt==null||Rt!==$n(l)||(l=Rt,"selectionStart"in l&&Ls(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Tl&&ql(Tl,l)||(Tl=l,l=mi(qc,"onSelect"),0<l.length&&(a=new Ei("onSelect","select",null,a,t),e.push({event:a,listeners:l}),a.target=Rt)))}function at(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var Ut={animationend:at("Animation","AnimationEnd"),animationiteration:at("Animation","AnimationIteration"),animationstart:at("Animation","AnimationStart"),transitionrun:at("Transition","TransitionRun"),transitionstart:at("Transition","TransitionStart"),transitioncancel:at("Transition","TransitionCancel"),transitionend:at("Transition","TransitionEnd")},ec={},ef={};ba&&(ef=document.createElement("div").style,"AnimationEvent"in window||(delete Ut.animationend.animation,delete Ut.animationiteration.animation,delete Ut.animationstart.animation),"TransitionEvent"in window||delete Ut.transitionend.transition);function xt(e){if(ec[e])return ec[e];if(!Ut[e])return e;var a=Ut[e],t;for(t in a)if(a.hasOwnProperty(t)&&t in ef)return ec[e]=a[t];return e}var af=xt("animationend"),tf=xt("animationiteration"),lf=xt("animationstart"),Wh=xt("transitionrun"),Fh=xt("transitionstart"),Ih=xt("transitioncancel"),nf=xt("transitionend"),cf=new Map,Xc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xc.push("scrollEnd");function ea(e,a){cf.set(e,a),gt(a,[e])}var Wn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ge=[],Ht=0,qs=0;function Mi(){for(var e=Ht,a=qs=Ht=0;a<e;){var t=Ge[a];Ge[a++]=null;var l=Ge[a];Ge[a++]=null;var n=Ge[a];Ge[a++]=null;var i=Ge[a];if(Ge[a++]=null,l!==null&&n!==null){var s=l.pending;s===null?n.next=n:(n.next=s.next,s.next=n),l.pending=n}i!==0&&sf(t,n,i)}}function Oi(e,a,t,l){Ge[Ht++]=e,Ge[Ht++]=a,Ge[Ht++]=t,Ge[Ht++]=l,qs|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Gs(e,a,t,l){return Oi(e,a,t,l),Fn(e)}function yt(e,a){return Oi(e,null,null,a),Fn(e)}function sf(e,a,t){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t);for(var n=!1,i=e.return;i!==null;)i.childLanes|=t,l=i.alternate,l!==null&&(l.childLanes|=t),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&a!==null&&(n=31-Be(t),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[a]:l.push(a),a.lane=t|536870912),i):null}function Fn(e){if(50<wl)throw wl=0,rs=null,Error(y(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var wt={};function Ph(e,a,t,l){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Re(e,a,t,l){return new Ph(e,a,t,l)}function Xs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function va(e,a){var t=e.alternate;return t===null?(t=Re(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function uf(e,a){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function Un(e,a,t,l,n,i){var s=0;if(l=e,typeof e=="function")Xs(e)&&(s=1);else if(typeof e=="string")s=n0(e,t,na.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Cc:return e=Re(31,t,a,n),e.elementType=Cc,e.lanes=i,e;case Mt:return st(t.children,n,i,a);case Ar:s=8,n|=24;break;case Tc:return e=Re(12,t,a,n|2),e.elementType=Tc,e.lanes=i,e;case Mc:return e=Re(13,t,a,n),e.elementType=Mc,e.lanes=i,e;case Oc:return e=Re(19,t,a,n),e.elementType=Oc,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ha:s=10;break e;case Tr:s=9;break e;case Os:s=11;break e;case Cs:s=14;break e;case Ma:s=16,l=null;break e}s=29,t=Error(y(130,e===null?"null":typeof e,"")),l=null}return a=Re(s,t,a,n),a.elementType=e,a.type=l,a.lanes=i,a}function st(e,a,t,l){return e=Re(7,e,l,a),e.lanes=t,e}function ac(e,a,t){return e=Re(6,e,null,a),e.lanes=t,e}function of(e){var a=Re(18,null,null,0);return a.stateNode=e,a}function tc(e,a,t){return a=Re(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var to=new WeakMap;function Ke(e,a){if(typeof e=="object"&&e!==null){var t=to.get(e);return t!==void 0?t:(a={value:e,source:a,stack:wu(a)},to.set(e,a),a)}return{value:e,source:a,stack:wu(a)}}var Bt=[],kt=0,In=null,Gl=0,Qe=[],Ve=0,Ja=null,aa=1,ta="";function da(e,a){Bt[kt++]=Gl,Bt[kt++]=In,In=e,Gl=a}function rf(e,a,t){Qe[Ve++]=aa,Qe[Ve++]=ta,Qe[Ve++]=Ja,Ja=e;var l=aa;e=ta;var n=32-Be(l)-1;l&=~(1<<n),t+=1;var i=32-Be(a)+n;if(30<i){var s=n-n%5;i=(l&(1<<s)-1).toString(32),l>>=s,n-=s,aa=1<<32-Be(a)+n|t<<n|l,ta=i+e}else aa=1<<i|t<<n|l,ta=e}function Qs(e){e.return!==null&&(da(e,1),rf(e,1,0))}function Vs(e){for(;e===In;)In=Bt[--kt],Bt[kt]=null,Gl=Bt[--kt],Bt[kt]=null;for(;e===Ja;)Ja=Qe[--Ve],Qe[Ve]=null,ta=Qe[--Ve],Qe[Ve]=null,aa=Qe[--Ve],Qe[Ve]=null}function ff(e,a){Qe[Ve++]=aa,Qe[Ve++]=ta,Qe[Ve++]=Ja,aa=a.id,ta=a.overflow,Ja=e}var xe=null,F=null,k=!1,La=null,Je=!1,Qc=Error(y(519));function $a(e){var a=Error(y(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xl(Ke(a,e)),Qc}function lo(e){var a=e.stateNode,t=e.type,l=e.memoizedProps;switch(a[ve]=e,a[Oe]=l,t){case"dialog":R("cancel",a),R("close",a);break;case"iframe":case"object":case"embed":R("load",a);break;case"video":case"audio":for(t=0;t<Kl.length;t++)R(Kl[t],a);break;case"source":R("error",a);break;case"img":case"image":case"link":R("error",a),R("load",a);break;case"details":R("toggle",a);break;case"input":R("invalid",a),Lr(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":R("invalid",a);break;case"textarea":R("invalid",a),Gr(a,l.value,l.defaultValue,l.children)}t=l.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||l.suppressHydrationWarning===!0||Kd(a.textContent,t)?(l.popover!=null&&(R("beforetoggle",a),R("toggle",a)),l.onScroll!=null&&R("scroll",a),l.onScrollEnd!=null&&R("scrollend",a),l.onClick!=null&&(a.onclick=pa),a=!0):a=!1,a||$a(e,!0)}function no(e){for(xe=e.return;xe;)switch(xe.tag){case 5:case 31:case 13:Je=!1;return;case 27:case 3:Je=!0;return;default:xe=xe.return}}function jt(e){if(e!==xe)return!1;if(!k)return no(e),k=!0,!1;var a=e.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||ps(e.type,e.memoizedProps)),t=!t),t&&F&&$a(e),no(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));F=Vo(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));F=Vo(e)}else a===27?(a=F,Pa(e.type)?(e=ys,ys=null,F=e):F=a):F=xe?We(e.stateNode.nextSibling):null;return!0}function ft(){F=xe=null,k=!1}function lc(){var e=La;return e!==null&&(Te===null?Te=e:Te.push.apply(Te,e),La=null),e}function Xl(e){La===null?La=[e]:La.push(e)}var Vc=ia(null),bt=null,ga=null;function Ca(e,a,t){$(Vc,a._currentValue),a._currentValue=t}function xa(e){e._currentValue=Vc.current,pe(Vc)}function Zc(e,a,t){for(;e!==null;){var l=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),e===t)break;e=e.return}}function Kc(e,a,t,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var s=n.child;i=i.firstContext;e:for(;i!==null;){var u=i;i=n;for(var o=0;o<a.length;o++)if(u.context===a[o]){i.lanes|=t,u=i.alternate,u!==null&&(u.lanes|=t),Zc(i.return,t,e),l||(s=null);break e}i=u.next}}else if(n.tag===18){if(s=n.return,s===null)throw Error(y(341));s.lanes|=t,i=s.alternate,i!==null&&(i.lanes|=t),Zc(s,t,e),s=null}else s=n.child;if(s!==null)s.return=n;else for(s=n;s!==null;){if(s===e){s=null;break}if(n=s.sibling,n!==null){n.return=s.return,s=n;break}s=s.return}n=s}}function sl(e,a,t,l){e=null;for(var n=a,i=!1;n!==null;){if(!i){if(n.flags&524288)i=!0;else if(n.flags&262144)break}if(n.tag===10){var s=n.alternate;if(s===null)throw Error(y(387));if(s=s.memoizedProps,s!==null){var u=n.type;Ye(n.pendingProps.value,s.value)||(e!==null?e.push(u):e=[u])}}else if(n===Vn.current){if(s=n.alternate,s===null)throw Error(y(387));s.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push($l):e=[$l])}n=n.return}e!==null&&Kc(a,e,t,l),a.flags|=262144}function Pn(e){for(e=e.firstContext;e!==null;){if(!Ye(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function dt(e){bt=e,ga=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ye(e){return df(bt,e)}function Nn(e,a){return bt===null&&dt(e),df(e,a)}function df(e,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},ga===null){if(e===null)throw Error(y(308));ga=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else ga=ga.next=a;return t}var ep=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(t,l){e.push(l)}};this.abort=function(){a.aborted=!0,e.forEach(function(t){return t()})}},ap=fe.unstable_scheduleCallback,tp=fe.unstable_NormalPriority,ue={$$typeof:ha,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zs(){return{controller:new ep,data:new Map,refCount:0}}function nn(e){e.refCount--,e.refCount===0&&ap(tp,function(){e.controller.abort()})}var Ml=null,Jc=0,Wt=0,Xt=null;function lp(e,a){if(Ml===null){var t=Ml=[];Jc=0,Wt=vu(),Xt={status:"pending",value:void 0,then:function(l){t.push(l)}}}return Jc++,a.then(io,io),a}function io(){if(--Jc===0&&Ml!==null){Xt!==null&&(Xt.status="fulfilled");var e=Ml;Ml=null,Wt=0,Xt=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function np(e,a){var t=[],l={status:"pending",value:null,reason:null,then:function(n){t.push(n)}};return e.then(function(){l.status="fulfilled",l.value=a;for(var n=0;n<t.length;n++)(0,t[n])(a)},function(n){for(l.status="rejected",l.reason=n,n=0;n<t.length;n++)(0,t[n])(void 0)}),l}var co=E.S;E.S=function(e,a){Ad=He(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&lp(e,a),co!==null&&co(e,a)};var ut=ia(null);function Ks(){var e=ut.current;return e!==null?e:K.pooledCache}function Hn(e,a){a===null?$(ut,ut.current):$(ut,a.pool)}function mf(){var e=Ks();return e===null?null:{parent:ue._currentValue,pool:e}}var ul=Error(y(460)),Js=Error(y(474)),Ci=Error(y(542)),ei={then:function(){}};function so(e){return e=e.status,e==="fulfilled"||e==="rejected"}function hf(e,a,t){switch(t=e[t],t===void 0?e.push(a):t!==a&&(a.then(pa,pa),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,oo(e),e;default:if(typeof a.status=="string")a.then(pa,pa);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(y(482));e=a,e.status="pending",e.then(function(l){if(a.status==="pending"){var n=a;n.status="fulfilled",n.value=l}},function(l){if(a.status==="pending"){var n=a;n.status="rejected",n.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,oo(e),e}throw ot=a,ul}}function nt(e){try{var a=e._init;return a(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(ot=t,ul):t}}var ot=null;function uo(){if(ot===null)throw Error(y(459));var e=ot;return ot=null,e}function oo(e){if(e===ul||e===Ci)throw Error(y(483))}var Qt=null,Ql=0;function jn(e){var a=Ql;return Ql+=1,Qt===null&&(Qt=[]),hf(Qt,e,a)}function pl(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function Sn(e,a){throw a.$$typeof===Qm?Error(y(525)):(e=Object.prototype.toString.call(a),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function pf(e){function a(m,r){if(e){var h=m.deletions;h===null?(m.deletions=[r],m.flags|=16):h.push(r)}}function t(m,r){if(!e)return null;for(;r!==null;)a(m,r),r=r.sibling;return null}function l(m){for(var r=new Map;m!==null;)m.key!==null?r.set(m.key,m):r.set(m.index,m),m=m.sibling;return r}function n(m,r){return m=va(m,r),m.index=0,m.sibling=null,m}function i(m,r,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<r?(m.flags|=67108866,r):h):(m.flags|=67108866,r)):(m.flags|=1048576,r)}function s(m){return e&&m.alternate===null&&(m.flags|=67108866),m}function u(m,r,h,x){return r===null||r.tag!==6?(r=ac(h,m.mode,x),r.return=m,r):(r=n(r,h),r.return=m,r)}function o(m,r,h,x){var z=h.type;return z===Mt?g(m,r,h.props.children,x,h.key):r!==null&&(r.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Ma&&nt(z)===r.type)?(r=n(r,h.props),pl(r,h),r.return=m,r):(r=Un(h.type,h.key,h.props,null,m.mode,x),pl(r,h),r.return=m,r)}function d(m,r,h,x){return r===null||r.tag!==4||r.stateNode.containerInfo!==h.containerInfo||r.stateNode.implementation!==h.implementation?(r=tc(h,m.mode,x),r.return=m,r):(r=n(r,h.children||[]),r.return=m,r)}function g(m,r,h,x,z){return r===null||r.tag!==7?(r=st(h,m.mode,x,z),r.return=m,r):(r=n(r,h),r.return=m,r)}function v(m,r,h){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=ac(""+r,m.mode,h),r.return=m,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case pn:return h=Un(r.type,r.key,r.props,null,m.mode,h),pl(h,r),h.return=m,h;case yl:return r=tc(r,m.mode,h),r.return=m,r;case Ma:return r=nt(r),v(m,r,h)}if(bl(r)||dl(r))return r=st(r,m.mode,h,null),r.return=m,r;if(typeof r.then=="function")return v(m,jn(r),h);if(r.$$typeof===ha)return v(m,Nn(m,r),h);Sn(m,r)}return null}function f(m,r,h,x){var z=r!==null?r.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return z!==null?null:u(m,r,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case pn:return h.key===z?o(m,r,h,x):null;case yl:return h.key===z?d(m,r,h,x):null;case Ma:return h=nt(h),f(m,r,h,x)}if(bl(h)||dl(h))return z!==null?null:g(m,r,h,x,null);if(typeof h.then=="function")return f(m,r,jn(h),x);if(h.$$typeof===ha)return f(m,r,Nn(m,h),x);Sn(m,h)}return null}function p(m,r,h,x,z){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return m=m.get(h)||null,u(r,m,""+x,z);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case pn:return m=m.get(x.key===null?h:x.key)||null,o(r,m,x,z);case yl:return m=m.get(x.key===null?h:x.key)||null,d(r,m,x,z);case Ma:return x=nt(x),p(m,r,h,x,z)}if(bl(x)||dl(x))return m=m.get(h)||null,g(r,m,x,z,null);if(typeof x.then=="function")return p(m,r,h,jn(x),z);if(x.$$typeof===ha)return p(m,r,h,Nn(r,x),z);Sn(r,x)}return null}function b(m,r,h,x){for(var z=null,O=null,N=r,A=r=0,C=null;N!==null&&A<h.length;A++){N.index>A?(C=N,N=null):C=N.sibling;var B=f(m,N,h[A],x);if(B===null){N===null&&(N=C);break}e&&N&&B.alternate===null&&a(m,N),r=i(B,r,A),O===null?z=B:O.sibling=B,O=B,N=C}if(A===h.length)return t(m,N),k&&da(m,A),z;if(N===null){for(;A<h.length;A++)N=v(m,h[A],x),N!==null&&(r=i(N,r,A),O===null?z=N:O.sibling=N,O=N);return k&&da(m,A),z}for(N=l(N);A<h.length;A++)C=p(N,m,A,h[A],x),C!==null&&(e&&C.alternate!==null&&N.delete(C.key===null?A:C.key),r=i(C,r,A),O===null?z=C:O.sibling=C,O=C);return e&&N.forEach(function(qe){return a(m,qe)}),k&&da(m,A),z}function S(m,r,h,x){if(h==null)throw Error(y(151));for(var z=null,O=null,N=r,A=r=0,C=null,B=h.next();N!==null&&!B.done;A++,B=h.next()){N.index>A?(C=N,N=null):C=N.sibling;var qe=f(m,N,B.value,x);if(qe===null){N===null&&(N=C);break}e&&N&&qe.alternate===null&&a(m,N),r=i(qe,r,A),O===null?z=qe:O.sibling=qe,O=qe,N=C}if(B.done)return t(m,N),k&&da(m,A),z;if(N===null){for(;!B.done;A++,B=h.next())B=v(m,B.value,x),B!==null&&(r=i(B,r,A),O===null?z=B:O.sibling=B,O=B);return k&&da(m,A),z}for(N=l(N);!B.done;A++,B=h.next())B=p(N,m,A,B.value,x),B!==null&&(e&&B.alternate!==null&&N.delete(B.key===null?A:B.key),r=i(B,r,A),O===null?z=B:O.sibling=B,O=B);return e&&N.forEach(function(Aa){return a(m,Aa)}),k&&da(m,A),z}function H(m,r,h,x){if(typeof h=="object"&&h!==null&&h.type===Mt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case pn:e:{for(var z=h.key;r!==null;){if(r.key===z){if(z=h.type,z===Mt){if(r.tag===7){t(m,r.sibling),x=n(r,h.props.children),x.return=m,m=x;break e}}else if(r.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Ma&&nt(z)===r.type){t(m,r.sibling),x=n(r,h.props),pl(x,h),x.return=m,m=x;break e}t(m,r);break}else a(m,r);r=r.sibling}h.type===Mt?(x=st(h.props.children,m.mode,x,h.key),x.return=m,m=x):(x=Un(h.type,h.key,h.props,null,m.mode,x),pl(x,h),x.return=m,m=x)}return s(m);case yl:e:{for(z=h.key;r!==null;){if(r.key===z)if(r.tag===4&&r.stateNode.containerInfo===h.containerInfo&&r.stateNode.implementation===h.implementation){t(m,r.sibling),x=n(r,h.children||[]),x.return=m,m=x;break e}else{t(m,r);break}else a(m,r);r=r.sibling}x=tc(h,m.mode,x),x.return=m,m=x}return s(m);case Ma:return h=nt(h),H(m,r,h,x)}if(bl(h))return b(m,r,h,x);if(dl(h)){if(z=dl(h),typeof z!="function")throw Error(y(150));return h=z.call(h),S(m,r,h,x)}if(typeof h.then=="function")return H(m,r,jn(h),x);if(h.$$typeof===ha)return H(m,r,Nn(m,h),x);Sn(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,r!==null&&r.tag===6?(t(m,r.sibling),x=n(r,h),x.return=m,m=x):(t(m,r),x=ac(h,m.mode,x),x.return=m,m=x),s(m)):t(m,r)}return function(m,r,h,x){try{Ql=0;var z=H(m,r,h,x);return Qt=null,z}catch(N){if(N===ul||N===Ci)throw N;var O=Re(29,N,null,m.mode);return O.lanes=x,O.return=m,O}finally{}}}var mt=pf(!0),gf=pf(!1),Oa=!1;function $s(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $c(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function qa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ga(e,a,t){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,L&2){var n=l.pending;return n===null?a.next=a:(a.next=n.next,n.next=a),l.pending=a,a=Fn(e),sf(e,null,t),a}return Oi(e,l,a,t),Fn(e)}function Ol(e,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var l=a.lanes;l&=e.pendingLanes,t|=l,a.lanes=t,Rr(e,t)}}function nc(e,a){var t=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var n=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var s={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};i===null?n=i=s:i=i.next=s,t=t.next}while(t!==null);i===null?n=i=a:i=i.next=a}else n=i=a;t={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}var Wc=!1;function Cl(){if(Wc){var e=Xt;if(e!==null)throw e}}function Dl(e,a,t,l){Wc=!1;var n=e.updateQueue;Oa=!1;var i=n.firstBaseUpdate,s=n.lastBaseUpdate,u=n.shared.pending;if(u!==null){n.shared.pending=null;var o=u,d=o.next;o.next=null,s===null?i=d:s.next=d,s=o;var g=e.alternate;g!==null&&(g=g.updateQueue,u=g.lastBaseUpdate,u!==s&&(u===null?g.firstBaseUpdate=d:u.next=d,g.lastBaseUpdate=o))}if(i!==null){var v=n.baseState;s=0,g=d=o=null,u=i;do{var f=u.lane&-536870913,p=f!==u.lane;if(p?(w&f)===f:(l&f)===f){f!==0&&f===Wt&&(Wc=!0),g!==null&&(g=g.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var b=e,S=u;f=a;var H=t;switch(S.tag){case 1:if(b=S.payload,typeof b=="function"){v=b.call(H,v,f);break e}v=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=S.payload,f=typeof b=="function"?b.call(H,v,f):b,f==null)break e;v=P({},v,f);break e;case 2:Oa=!0}}f=u.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=n.callbacks,p===null?n.callbacks=[f]:p.push(f))}else p={lane:f,tag:u.tag,payload:u.payload,callback:u.callback,next:null},g===null?(d=g=p,o=v):g=g.next=p,s|=f;if(u=u.next,u===null){if(u=n.shared.pending,u===null)break;p=u,u=p.next,p.next=null,n.lastBaseUpdate=p,n.shared.pending=null}}while(!0);g===null&&(o=v),n.baseState=o,n.firstBaseUpdate=d,n.lastBaseUpdate=g,i===null&&(n.shared.lanes=0),Fa|=s,e.lanes=s,e.memoizedState=v}}function vf(e,a){if(typeof e!="function")throw Error(y(191,e));e.call(a)}function xf(e,a){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)vf(t[e],a)}var Ft=ia(null),ai=ia(0);function ro(e,a){e=za,$(ai,e),$(Ft,a),za=e|a.baseLanes}function Fc(){$(ai,za),$(Ft,Ft.current)}function Ws(){za=ai.current,pe(Ft),pe(ai)}var Le=ia(null),$e=null;function Da(e){var a=e.alternate;$(ne,ne.current&1),$(Le,e),$e===null&&(a===null||Ft.current!==null||a.memoizedState!==null)&&($e=e)}function Ic(e){$(ne,ne.current),$(Le,e),$e===null&&($e=e)}function yf(e){e.tag===22?($(ne,ne.current),$(Le,e),$e===null&&($e=e)):_a()}function _a(){$(ne,ne.current),$(Le,Le.current)}function _e(e){pe(Le),$e===e&&($e=null),pe(ne)}var ne=ia(0);function ti(e){for(var a=e;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||vs(t)||xs(t)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if(a.flags&128)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Na=0,M=null,Z=null,ce=null,li=!1,Vt=!1,ht=!1,ni=0,Vl=0,Zt=null,ip=0;function ae(){throw Error(y(321))}function Fs(e,a){if(a===null)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!Ye(e[t],a[t]))return!1;return!0}function Is(e,a,t,l,n,i){return Na=i,M=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,E.H=e===null||e.memoizedState===null?Wf:ou,ht=!1,i=t(l,n),ht=!1,Vt&&(i=Nf(a,t,l,n)),bf(e),i}function bf(e){E.H=Zl;var a=Z!==null&&Z.next!==null;if(Na=0,ce=Z=M=null,li=!1,Vl=0,Zt=null,a)throw Error(y(300));e===null||oe||(e=e.dependencies,e!==null&&Pn(e)&&(oe=!0))}function Nf(e,a,t,l){M=e;var n=0;do{if(Vt&&(Zt=null),Vl=0,Vt=!1,25<=n)throw Error(y(301));if(n+=1,ce=Z=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}E.H=Ff,i=a(t,l)}while(Vt);return i}function cp(){var e=E.H,a=e.useState()[0];return a=typeof a.then=="function"?cn(a):a,e=e.useState()[0],(Z!==null?Z.memoizedState:null)!==e&&(M.flags|=1024),a}function Ps(){var e=ni!==0;return ni=0,e}function eu(e,a,t){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t}function au(e){if(li){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}li=!1}Na=0,ce=Z=M=null,Vt=!1,Vl=ni=0,Zt=null}function Ne(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?M.memoizedState=ce=e:ce=ce.next=e,ce}function ie(){if(Z===null){var e=M.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var a=ce===null?M.memoizedState:ce.next;if(a!==null)ce=a,Z=e;else{if(e===null)throw M.alternate===null?Error(y(467)):Error(y(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},ce===null?M.memoizedState=ce=e:ce=ce.next=e}return ce}function Di(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function cn(e){var a=Vl;return Vl+=1,Zt===null&&(Zt=[]),e=hf(Zt,e,a),a=M,(ce===null?a.memoizedState:ce.next)===null&&(a=a.alternate,E.H=a===null||a.memoizedState===null?Wf:ou),e}function _i(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return cn(e);if(e.$$typeof===ha)return ye(e)}throw Error(y(438,String(e)))}function tu(e){var a=null,t=M.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var l=M.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(n){return n.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=Di(),M.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(e),l=0;l<e;l++)t[l]=Vm;return a.index++,t}function ja(e,a){return typeof a=="function"?a(e):a}function wn(e){var a=ie();return lu(a,Z,e)}function lu(e,a,t){var l=e.queue;if(l===null)throw Error(y(311));l.lastRenderedReducer=t;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var s=n.next;n.next=i.next,i.next=s}a.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{a=n.next;var u=s=null,o=null,d=a,g=!1;do{var v=d.lane&-536870913;if(v!==d.lane?(w&v)===v:(Na&v)===v){var f=d.revertLane;if(f===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),v===Wt&&(g=!0);else if((Na&f)===f){d=d.next,f===Wt&&(g=!0);continue}else v={lane:0,revertLane:d.revertLane,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},o===null?(u=o=v,s=i):o=o.next=v,M.lanes|=f,Fa|=f;v=d.action,ht&&t(i,v),i=d.hasEagerState?d.eagerState:t(i,v)}else f={lane:v,revertLane:d.revertLane,gesture:d.gesture,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},o===null?(u=o=f,s=i):o=o.next=f,M.lanes|=v,Fa|=v;d=d.next}while(d!==null&&d!==a);if(o===null?s=i:o.next=u,!Ye(i,e.memoizedState)&&(oe=!0,g&&(t=Xt,t!==null)))throw t;e.memoizedState=i,e.baseState=s,e.baseQueue=o,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function ic(e){var a=ie(),t=a.queue;if(t===null)throw Error(y(311));t.lastRenderedReducer=e;var l=t.dispatch,n=t.pending,i=a.memoizedState;if(n!==null){t.pending=null;var s=n=n.next;do i=e(i,s.action),s=s.next;while(s!==n);Ye(i,a.memoizedState)||(oe=!0),a.memoizedState=i,a.baseQueue===null&&(a.baseState=i),t.lastRenderedState=i}return[i,l]}function jf(e,a,t){var l=M,n=ie(),i=k;if(i){if(t===void 0)throw Error(y(407));t=t()}else t=a();var s=!Ye((Z||n).memoizedState,t);if(s&&(n.memoizedState=t,oe=!0),n=n.queue,nu(Ef.bind(null,l,n,e),[e]),n.getSnapshot!==a||s||ce!==null&&ce.memoizedState.tag&1){if(l.flags|=2048,It(9,{destroy:void 0},zf.bind(null,l,n,t,a),null),K===null)throw Error(y(349));i||Na&127||Sf(l,a,t)}return t}function Sf(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},a=M.updateQueue,a===null?(a=Di(),M.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))}function zf(e,a,t,l){a.value=t,a.getSnapshot=l,Af(a)&&Tf(e)}function Ef(e,a,t){return t(function(){Af(a)&&Tf(e)})}function Af(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!Ye(e,t)}catch{return!0}}function Tf(e){var a=yt(e,2);a!==null&&Me(a,e,2)}function Pc(e){var a=Ne();if(typeof e=="function"){var t=e;if(e=t(),ht){Ua(!0);try{t()}finally{Ua(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:e},a}function Mf(e,a,t,l){return e.baseState=t,lu(e,Z,typeof l=="function"?l:ja)}function sp(e,a,t,l,n){if(Ui(e))throw Error(y(485));if(e=a.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};E.T!==null?t(!0):i.isTransition=!1,l(i),t=a.pending,t===null?(i.next=a.pending=i,Of(a,i)):(i.next=t.next,a.pending=t.next=i)}}function Of(e,a){var t=a.action,l=a.payload,n=e.state;if(a.isTransition){var i=E.T,s={};E.T=s;try{var u=t(n,l),o=E.S;o!==null&&o(s,u),fo(e,a,u)}catch(d){es(e,a,d)}finally{i!==null&&s.types!==null&&(i.types=s.types),E.T=i}}else try{i=t(n,l),fo(e,a,i)}catch(d){es(e,a,d)}}function fo(e,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(l){mo(e,a,l)},function(l){return es(e,a,l)}):mo(e,a,t)}function mo(e,a,t){a.status="fulfilled",a.value=t,Cf(a),e.state=t,a=e.pending,a!==null&&(t=a.next,t===a?e.pending=null:(t=t.next,a.next=t,Of(e,t)))}function es(e,a,t){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=t,Cf(a),a=a.next;while(a!==l)}e.action=null}function Cf(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function Df(e,a){return a}function ho(e,a){if(k){var t=K.formState;if(t!==null){e:{var l=M;if(k){if(F){a:{for(var n=F,i=Je;n.nodeType!==8;){if(!i){n=null;break a}if(n=We(n.nextSibling),n===null){n=null;break a}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){F=We(n.nextSibling),l=n.data==="F!";break e}}$a(l)}l=!1}l&&(a=t[0])}}return t=Ne(),t.memoizedState=t.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Df,lastRenderedState:a},t.queue=l,t=Kf.bind(null,M,l),l.dispatch=t,l=Pc(!1),i=uu.bind(null,M,!1,l.queue),l=Ne(),n={state:a,dispatch:null,action:e,pending:null},l.queue=n,t=sp.bind(null,M,n,i,t),n.dispatch=t,l.memoizedState=e,[a,t,!1]}function po(e){var a=ie();return _f(a,Z,e)}function _f(e,a,t){if(a=lu(e,a,Df)[0],e=wn(ja)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=cn(a)}catch(s){throw s===ul?Ci:s}else l=a;a=ie();var n=a.queue,i=n.dispatch;return t!==a.memoizedState&&(M.flags|=2048,It(9,{destroy:void 0},up.bind(null,n,t),null)),[l,i,e]}function up(e,a){e.action=a}function go(e){var a=ie(),t=Z;if(t!==null)return _f(a,t,e);ie(),a=a.memoizedState,t=ie();var l=t.queue.dispatch;return t.memoizedState=e,[a,l,!1]}function It(e,a,t,l){return e={tag:e,create:t,deps:l,inst:a,next:null},a=M.updateQueue,a===null&&(a=Di(),M.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=e.next=e:(l=t.next,t.next=e,e.next=l,a.lastEffect=e),e}function Rf(){return ie().memoizedState}function Bn(e,a,t,l){var n=Ne();M.flags|=e,n.memoizedState=It(1|a,{destroy:void 0},t,l===void 0?null:l)}function Ri(e,a,t,l){var n=ie();l=l===void 0?null:l;var i=n.memoizedState.inst;Z!==null&&l!==null&&Fs(l,Z.memoizedState.deps)?n.memoizedState=It(a,i,t,l):(M.flags|=e,n.memoizedState=It(1|a,i,t,l))}function vo(e,a){Bn(8390656,8,e,a)}function nu(e,a){Ri(2048,8,e,a)}function op(e){M.flags|=4;var a=M.updateQueue;if(a===null)a=Di(),M.updateQueue=a,a.events=[e];else{var t=a.events;t===null?a.events=[e]:t.push(e)}}function Uf(e){var a=ie().memoizedState;return op({ref:a,nextImpl:e}),function(){if(L&2)throw Error(y(440));return a.impl.apply(void 0,arguments)}}function Hf(e,a){return Ri(4,2,e,a)}function wf(e,a){return Ri(4,4,e,a)}function Bf(e,a){if(typeof a=="function"){e=e();var t=a(e);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function kf(e,a,t){t=t!=null?t.concat([e]):null,Ri(4,4,Bf.bind(null,a,e),t)}function iu(){}function Yf(e,a){var t=ie();a=a===void 0?null:a;var l=t.memoizedState;return a!==null&&Fs(a,l[1])?l[0]:(t.memoizedState=[e,a],e)}function Lf(e,a){var t=ie();a=a===void 0?null:a;var l=t.memoizedState;if(a!==null&&Fs(a,l[1]))return l[0];if(l=e(),ht){Ua(!0);try{e()}finally{Ua(!1)}}return t.memoizedState=[l,a],l}function cu(e,a,t){return t===void 0||Na&1073741824&&!(w&261930)?e.memoizedState=a:(e.memoizedState=t,e=Md(),M.lanes|=e,Fa|=e,t)}function qf(e,a,t,l){return Ye(t,a)?t:Ft.current!==null?(e=cu(e,t,l),Ye(e,a)||(oe=!0),e):!(Na&42)||Na&1073741824&&!(w&261930)?(oe=!0,e.memoizedState=t):(e=Md(),M.lanes|=e,Fa|=e,a)}function Gf(e,a,t,l,n){var i=q.p;q.p=i!==0&&8>i?i:8;var s=E.T,u={};E.T=u,uu(e,!1,a,t);try{var o=n(),d=E.S;if(d!==null&&d(u,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var g=np(o,l);_l(e,a,g,ke(e))}else _l(e,a,l,ke(e))}catch(v){_l(e,a,{then:function(){},status:"rejected",reason:v},ke())}finally{q.p=i,s!==null&&u.types!==null&&(s.types=u.types),E.T=s}}function rp(){}function as(e,a,t,l){if(e.tag!==5)throw Error(y(476));var n=Xf(e).queue;Gf(e,n,a,ct,t===null?rp:function(){return Qf(e),t(l)})}function Xf(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:ct,baseState:ct,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:ct},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:t},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function Qf(e){var a=Xf(e);a.next===null&&(a=e.alternate.memoizedState),_l(e,a.next.queue,{},ke())}function su(){return ye($l)}function Vf(){return ie().memoizedState}function Zf(){return ie().memoizedState}function fp(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var t=ke();e=qa(t);var l=Ga(a,e,t);l!==null&&(Me(l,a,t),Ol(l,a,t)),a={cache:Zs()},e.payload=a;return}a=a.return}}function dp(e,a,t){var l=ke();t={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Ui(e)?Jf(a,t):(t=Gs(e,a,t,l),t!==null&&(Me(t,e,l),$f(t,a,l)))}function Kf(e,a,t){var l=ke();_l(e,a,t,l)}function _l(e,a,t,l){var n={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ui(e))Jf(a,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=a.lastRenderedReducer,i!==null))try{var s=a.lastRenderedState,u=i(s,t);if(n.hasEagerState=!0,n.eagerState=u,Ye(u,s))return Oi(e,a,n,0),K===null&&Mi(),!1}catch{}finally{}if(t=Gs(e,a,n,l),t!==null)return Me(t,e,l),$f(t,a,l),!0}return!1}function uu(e,a,t,l){if(l={lane:2,revertLane:vu(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ui(e)){if(a)throw Error(y(479))}else a=Gs(e,t,l,2),a!==null&&Me(a,e,2)}function Ui(e){var a=e.alternate;return e===M||a!==null&&a===M}function Jf(e,a){Vt=li=!0;var t=e.pending;t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function $f(e,a,t){if(t&4194048){var l=a.lanes;l&=e.pendingLanes,t|=l,a.lanes=t,Rr(e,t)}}var Zl={readContext:ye,use:_i,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useLayoutEffect:ae,useInsertionEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useSyncExternalStore:ae,useId:ae,useHostTransitionStatus:ae,useFormState:ae,useActionState:ae,useOptimistic:ae,useMemoCache:ae,useCacheRefresh:ae};Zl.useEffectEvent=ae;var Wf={readContext:ye,use:_i,useCallback:function(e,a){return Ne().memoizedState=[e,a===void 0?null:a],e},useContext:ye,useEffect:vo,useImperativeHandle:function(e,a,t){t=t!=null?t.concat([e]):null,Bn(4194308,4,Bf.bind(null,a,e),t)},useLayoutEffect:function(e,a){return Bn(4194308,4,e,a)},useInsertionEffect:function(e,a){Bn(4,2,e,a)},useMemo:function(e,a){var t=Ne();a=a===void 0?null:a;var l=e();if(ht){Ua(!0);try{e()}finally{Ua(!1)}}return t.memoizedState=[l,a],l},useReducer:function(e,a,t){var l=Ne();if(t!==void 0){var n=t(a);if(ht){Ua(!0);try{t(a)}finally{Ua(!1)}}}else n=a;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=dp.bind(null,M,e),[l.memoizedState,e]},useRef:function(e){var a=Ne();return e={current:e},a.memoizedState=e},useState:function(e){e=Pc(e);var a=e.queue,t=Kf.bind(null,M,a);return a.dispatch=t,[e.memoizedState,t]},useDebugValue:iu,useDeferredValue:function(e,a){var t=Ne();return cu(t,e,a)},useTransition:function(){var e=Pc(!1);return e=Gf.bind(null,M,e.queue,!0,!1),Ne().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,t){var l=M,n=Ne();if(k){if(t===void 0)throw Error(y(407));t=t()}else{if(t=a(),K===null)throw Error(y(349));w&127||Sf(l,a,t)}n.memoizedState=t;var i={value:t,getSnapshot:a};return n.queue=i,vo(Ef.bind(null,l,i,e),[e]),l.flags|=2048,It(9,{destroy:void 0},zf.bind(null,l,i,t,a),null),t},useId:function(){var e=Ne(),a=K.identifierPrefix;if(k){var t=ta,l=aa;t=(l&~(1<<32-Be(l)-1)).toString(32)+t,a="_"+a+"R_"+t,t=ni++,0<t&&(a+="H"+t.toString(32)),a+="_"}else t=ip++,a="_"+a+"r_"+t.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:su,useFormState:ho,useActionState:ho,useOptimistic:function(e){var a=Ne();a.memoizedState=a.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=uu.bind(null,M,!0,t),t.dispatch=a,[e,a]},useMemoCache:tu,useCacheRefresh:function(){return Ne().memoizedState=fp.bind(null,M)},useEffectEvent:function(e){var a=Ne(),t={impl:e};return a.memoizedState=t,function(){if(L&2)throw Error(y(440));return t.impl.apply(void 0,arguments)}}},ou={readContext:ye,use:_i,useCallback:Yf,useContext:ye,useEffect:nu,useImperativeHandle:kf,useInsertionEffect:Hf,useLayoutEffect:wf,useMemo:Lf,useReducer:wn,useRef:Rf,useState:function(){return wn(ja)},useDebugValue:iu,useDeferredValue:function(e,a){var t=ie();return qf(t,Z.memoizedState,e,a)},useTransition:function(){var e=wn(ja)[0],a=ie().memoizedState;return[typeof e=="boolean"?e:cn(e),a]},useSyncExternalStore:jf,useId:Vf,useHostTransitionStatus:su,useFormState:po,useActionState:po,useOptimistic:function(e,a){var t=ie();return Mf(t,Z,e,a)},useMemoCache:tu,useCacheRefresh:Zf};ou.useEffectEvent=Uf;var Ff={readContext:ye,use:_i,useCallback:Yf,useContext:ye,useEffect:nu,useImperativeHandle:kf,useInsertionEffect:Hf,useLayoutEffect:wf,useMemo:Lf,useReducer:ic,useRef:Rf,useState:function(){return ic(ja)},useDebugValue:iu,useDeferredValue:function(e,a){var t=ie();return Z===null?cu(t,e,a):qf(t,Z.memoizedState,e,a)},useTransition:function(){var e=ic(ja)[0],a=ie().memoizedState;return[typeof e=="boolean"?e:cn(e),a]},useSyncExternalStore:jf,useId:Vf,useHostTransitionStatus:su,useFormState:go,useActionState:go,useOptimistic:function(e,a){var t=ie();return Z!==null?Mf(t,Z,e,a):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:tu,useCacheRefresh:Zf};Ff.useEffectEvent=Uf;function cc(e,a,t,l){a=e.memoizedState,t=t(l,a),t=t==null?a:P({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ts={enqueueSetState:function(e,a,t){e=e._reactInternals;var l=ke(),n=qa(l);n.payload=a,t!=null&&(n.callback=t),a=Ga(e,n,l),a!==null&&(Me(a,e,l),Ol(a,e,l))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var l=ke(),n=qa(l);n.tag=1,n.payload=a,t!=null&&(n.callback=t),a=Ga(e,n,l),a!==null&&(Me(a,e,l),Ol(a,e,l))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=ke(),l=qa(t);l.tag=2,a!=null&&(l.callback=a),a=Ga(e,l,t),a!==null&&(Me(a,e,t),Ol(a,e,t))}};function xo(e,a,t,l,n,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,s):a.prototype&&a.prototype.isPureReactComponent?!ql(t,l)||!ql(n,i):!0}function yo(e,a,t,l){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,l),a.state!==e&&ts.enqueueReplaceState(a,a.state,null)}function pt(e,a){var t=a;if("ref"in a){t={};for(var l in a)l!=="ref"&&(t[l]=a[l])}if(e=e.defaultProps){t===a&&(t=P({},t));for(var n in e)t[n]===void 0&&(t[n]=e[n])}return t}function If(e){Wn(e)}function Pf(e){console.error(e)}function ed(e){Wn(e)}function ii(e,a){try{var t=e.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function bo(e,a,t){try{var l=e.onCaughtError;l(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function ls(e,a,t){return t=qa(t),t.tag=3,t.payload={element:null},t.callback=function(){ii(e,a)},t}function ad(e){return e=qa(e),e.tag=3,e}function td(e,a,t,l){var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){bo(a,t,l)}}var s=t.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){bo(a,t,l),typeof n!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var u=l.stack;this.componentDidCatch(l.value,{componentStack:u!==null?u:""})})}function mp(e,a,t,l,n){if(t.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=t.alternate,a!==null&&sl(a,t,n,!0),t=Le.current,t!==null){switch(t.tag){case 31:case 13:return $e===null?ri():t.alternate===null&&te===0&&(te=3),t.flags&=-257,t.flags|=65536,t.lanes=n,l===ei?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([l]):a.add(l),vc(e,l,n)),!1;case 22:return t.flags|=65536,l===ei?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([l]):t.add(l)),vc(e,l,n)),!1}throw Error(y(435,t.tag))}return vc(e,l,n),ri(),!1}if(k)return a=Le.current,a!==null?(!(a.flags&65536)&&(a.flags|=256),a.flags|=65536,a.lanes=n,l!==Qc&&(e=Error(y(422),{cause:l}),Xl(Ke(e,t)))):(l!==Qc&&(a=Error(y(423),{cause:l}),Xl(Ke(a,t))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=Ke(l,t),n=ls(e.stateNode,l,n),nc(e,n),te!==4&&(te=2)),!1;var i=Error(y(520),{cause:l});if(i=Ke(i,t),Hl===null?Hl=[i]:Hl.push(i),te!==4&&(te=2),a===null)return!0;l=Ke(l,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,e=n&-n,t.lanes|=e,e=ls(t.stateNode,l,e),nc(t,e),!1;case 1:if(a=t.type,i=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Xa===null||!Xa.has(i))))return t.flags|=65536,n&=-n,t.lanes|=n,n=ad(n),td(n,e,t,l),nc(t,n),!1}t=t.return}while(t!==null);return!1}var ru=Error(y(461)),oe=!1;function ge(e,a,t,l){a.child=e===null?gf(a,null,t,l):mt(a,e.child,t,l)}function No(e,a,t,l,n){t=t.render;var i=a.ref;if("ref"in l){var s={};for(var u in l)u!=="ref"&&(s[u]=l[u])}else s=l;return dt(a),l=Is(e,a,t,s,i,n),u=Ps(),e!==null&&!oe?(eu(e,a,n),Sa(e,a,n)):(k&&u&&Qs(a),a.flags|=1,ge(e,a,l,n),a.child)}function jo(e,a,t,l,n){if(e===null){var i=t.type;return typeof i=="function"&&!Xs(i)&&i.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=i,ld(e,a,i,l,n)):(e=Un(t.type,null,l,a,a.mode,n),e.ref=a.ref,e.return=a,a.child=e)}if(i=e.child,!fu(e,n)){var s=i.memoizedProps;if(t=t.compare,t=t!==null?t:ql,t(s,l)&&e.ref===a.ref)return Sa(e,a,n)}return a.flags|=1,e=va(i,l),e.ref=a.ref,e.return=a,a.child=e}function ld(e,a,t,l,n){if(e!==null){var i=e.memoizedProps;if(ql(i,l)&&e.ref===a.ref)if(oe=!1,a.pendingProps=l=i,fu(e,n))e.flags&131072&&(oe=!0);else return a.lanes=e.lanes,Sa(e,a,n)}return ns(e,a,t,l,n)}function nd(e,a,t,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if(a.flags&128){if(i=i!==null?i.baseLanes|t:t,e!==null){for(l=a.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,a.child=null;return So(e,a,i,t,l)}if(t&536870912)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&Hn(a,i!==null?i.cachePool:null),i!==null?ro(a,i):Fc(),yf(a);else return l=a.lanes=536870912,So(e,a,i!==null?i.baseLanes|t:t,t,l)}else i!==null?(Hn(a,i.cachePool),ro(a,i),_a(),a.memoizedState=null):(e!==null&&Hn(a,null),Fc(),_a());return ge(e,a,n,t),a.child}function jl(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function So(e,a,t,l,n){var i=Ks();return i=i===null?null:{parent:ue._currentValue,pool:i},a.memoizedState={baseLanes:t,cachePool:i},e!==null&&Hn(a,null),Fc(),yf(a),e!==null&&sl(e,a,l,!0),a.childLanes=n,null}function kn(e,a){return a=ci({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function zo(e,a,t){return mt(a,e.child,null,t),e=kn(a,a.pendingProps),e.flags|=2,_e(a),a.memoizedState=null,e}function hp(e,a,t){var l=a.pendingProps,n=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(k){if(l.mode==="hidden")return e=kn(a,l),a.lanes=536870912,jl(null,e);if(Ic(a),(e=F)?(e=Wd(e,Je),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Ja!==null?{id:aa,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},t=of(e),t.return=a,a.child=t,xe=a,F=null)):e=null,e===null)throw $a(a);return a.lanes=536870912,null}return kn(a,l)}var i=e.memoizedState;if(i!==null){var s=i.dehydrated;if(Ic(a),n)if(a.flags&256)a.flags&=-257,a=zo(e,a,t);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(y(558));else if(oe||sl(e,a,t,!1),n=(t&e.childLanes)!==0,oe||n){if(l=K,l!==null&&(s=Ur(l,t),s!==0&&s!==i.retryLane))throw i.retryLane=s,yt(e,s),Me(l,e,s),ru;ri(),a=zo(e,a,t)}else e=i.treeContext,F=We(s.nextSibling),xe=a,k=!0,La=null,Je=!1,e!==null&&ff(a,e),a=kn(a,l),a.flags|=4096;return a}return e=va(e.child,{mode:l.mode,children:l.children}),e.ref=a.ref,a.child=e,e.return=a,e}function Yn(e,a){var t=a.ref;if(t===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(y(284));(e===null||e.ref!==t)&&(a.flags|=4194816)}}function ns(e,a,t,l,n){return dt(a),t=Is(e,a,t,l,void 0,n),l=Ps(),e!==null&&!oe?(eu(e,a,n),Sa(e,a,n)):(k&&l&&Qs(a),a.flags|=1,ge(e,a,t,n),a.child)}function Eo(e,a,t,l,n,i){return dt(a),a.updateQueue=null,t=Nf(a,l,t,n),bf(e),l=Ps(),e!==null&&!oe?(eu(e,a,i),Sa(e,a,i)):(k&&l&&Qs(a),a.flags|=1,ge(e,a,t,i),a.child)}function Ao(e,a,t,l,n){if(dt(a),a.stateNode===null){var i=wt,s=t.contextType;typeof s=="object"&&s!==null&&(i=ye(s)),i=new t(l,i),a.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ts,a.stateNode=i,i._reactInternals=a,i=a.stateNode,i.props=l,i.state=a.memoizedState,i.refs={},$s(a),s=t.contextType,i.context=typeof s=="object"&&s!==null?ye(s):wt,i.state=a.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(cc(a,t,s,l),i.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&ts.enqueueReplaceState(i,i.state,null),Dl(a,l,i,n),Cl(),i.state=a.memoizedState),typeof i.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(e===null){i=a.stateNode;var u=a.memoizedProps,o=pt(t,u);i.props=o;var d=i.context,g=t.contextType;s=wt,typeof g=="object"&&g!==null&&(s=ye(g));var v=t.getDerivedStateFromProps;g=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function",u=a.pendingProps!==u,g||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u||d!==s)&&yo(a,i,l,s),Oa=!1;var f=a.memoizedState;i.state=f,Dl(a,l,i,n),Cl(),d=a.memoizedState,u||f!==d||Oa?(typeof v=="function"&&(cc(a,t,v,l),d=a.memoizedState),(o=Oa||xo(a,t,o,l,f,d,s))?(g||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(a.flags|=4194308)):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=d),i.props=l,i.state=d,i.context=s,l=o):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{i=a.stateNode,$c(e,a),s=a.memoizedProps,g=pt(t,s),i.props=g,v=a.pendingProps,f=i.context,d=t.contextType,o=wt,typeof d=="object"&&d!==null&&(o=ye(d)),u=t.getDerivedStateFromProps,(d=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==v||f!==o)&&yo(a,i,l,o),Oa=!1,f=a.memoizedState,i.state=f,Dl(a,l,i,n),Cl();var p=a.memoizedState;s!==v||f!==p||Oa||e!==null&&e.dependencies!==null&&Pn(e.dependencies)?(typeof u=="function"&&(cc(a,t,u,l),p=a.memoizedState),(g=Oa||xo(a,t,g,l,f,p,o)||e!==null&&e.dependencies!==null&&Pn(e.dependencies))?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,p,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,p,o)),typeof i.componentDidUpdate=="function"&&(a.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=p),i.props=l,i.state=p,i.context=o,l=g):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(a.flags|=1024),l=!1)}return i=l,Yn(e,a),l=(a.flags&128)!==0,i||l?(i=a.stateNode,t=l&&typeof t.getDerivedStateFromError!="function"?null:i.render(),a.flags|=1,e!==null&&l?(a.child=mt(a,e.child,null,n),a.child=mt(a,null,t,n)):ge(e,a,t,n),a.memoizedState=i.state,e=a.child):e=Sa(e,a,n),e}function To(e,a,t,l){return ft(),a.flags|=256,ge(e,a,t,l),a.child}var sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function uc(e){return{baseLanes:e,cachePool:mf()}}function oc(e,a,t){return e=e!==null?e.childLanes&~t:0,a&&(e|=Ue),e}function id(e,a,t){var l=a.pendingProps,n=!1,i=(a.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(ne.current&2)!==0),s&&(n=!0,a.flags&=-129),s=(a.flags&32)!==0,a.flags&=-33,e===null){if(k){if(n?Da(a):_a(),(e=F)?(e=Wd(e,Je),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Ja!==null?{id:aa,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},t=of(e),t.return=a,a.child=t,xe=a,F=null)):e=null,e===null)throw $a(a);return xs(e)?a.lanes=32:a.lanes=536870912,null}var u=l.children;return l=l.fallback,n?(_a(),n=a.mode,u=ci({mode:"hidden",children:u},n),l=st(l,n,t,null),u.return=a,l.return=a,u.sibling=l,a.child=u,l=a.child,l.memoizedState=uc(t),l.childLanes=oc(e,s,t),a.memoizedState=sc,jl(null,l)):(Da(a),is(a,u))}var o=e.memoizedState;if(o!==null&&(u=o.dehydrated,u!==null)){if(i)a.flags&256?(Da(a),a.flags&=-257,a=rc(e,a,t)):a.memoizedState!==null?(_a(),a.child=e.child,a.flags|=128,a=null):(_a(),u=l.fallback,n=a.mode,l=ci({mode:"visible",children:l.children},n),u=st(u,n,t,null),u.flags|=2,l.return=a,u.return=a,l.sibling=u,a.child=l,mt(a,e.child,null,t),l=a.child,l.memoizedState=uc(t),l.childLanes=oc(e,s,t),a.memoizedState=sc,a=jl(null,l));else if(Da(a),xs(u)){if(s=u.nextSibling&&u.nextSibling.dataset,s)var d=s.dgst;s=d,l=Error(y(419)),l.stack="",l.digest=s,Xl({value:l,source:null,stack:null}),a=rc(e,a,t)}else if(oe||sl(e,a,t,!1),s=(t&e.childLanes)!==0,oe||s){if(s=K,s!==null&&(l=Ur(s,t),l!==0&&l!==o.retryLane))throw o.retryLane=l,yt(e,l),Me(s,e,l),ru;vs(u)||ri(),a=rc(e,a,t)}else vs(u)?(a.flags|=192,a.child=e.child,a=null):(e=o.treeContext,F=We(u.nextSibling),xe=a,k=!0,La=null,Je=!1,e!==null&&ff(a,e),a=is(a,l.children),a.flags|=4096);return a}return n?(_a(),u=l.fallback,n=a.mode,o=e.child,d=o.sibling,l=va(o,{mode:"hidden",children:l.children}),l.subtreeFlags=o.subtreeFlags&65011712,d!==null?u=va(d,u):(u=st(u,n,t,null),u.flags|=2),u.return=a,l.return=a,l.sibling=u,a.child=l,jl(null,l),l=a.child,u=e.child.memoizedState,u===null?u=uc(t):(n=u.cachePool,n!==null?(o=ue._currentValue,n=n.parent!==o?{parent:o,pool:o}:n):n=mf(),u={baseLanes:u.baseLanes|t,cachePool:n}),l.memoizedState=u,l.childLanes=oc(e,s,t),a.memoizedState=sc,jl(e.child,l)):(Da(a),t=e.child,e=t.sibling,t=va(t,{mode:"visible",children:l.children}),t.return=a,t.sibling=null,e!==null&&(s=a.deletions,s===null?(a.deletions=[e],a.flags|=16):s.push(e)),a.child=t,a.memoizedState=null,t)}function is(e,a){return a=ci({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function ci(e,a){return e=Re(22,e,null,a),e.lanes=0,e}function rc(e,a,t){return mt(a,e.child,null,t),e=is(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Mo(e,a,t){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a),Zc(e.return,a,t)}function fc(e,a,t,l,n,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:n,treeForkCount:i}:(s.isBackwards=a,s.rendering=null,s.renderingStartTime=0,s.last=l,s.tail=t,s.tailMode=n,s.treeForkCount=i)}function cd(e,a,t){var l=a.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var s=ne.current,u=(s&2)!==0;if(u?(s=s&1|2,a.flags|=128):s&=1,$(ne,s),ge(e,a,l,t),l=k?Gl:0,!u&&e!==null&&e.flags&128)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mo(e,t,a);else if(e.tag===19)Mo(e,t,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(t=a.child,n=null;t!==null;)e=t.alternate,e!==null&&ti(e)===null&&(n=t),t=t.sibling;t=n,t===null?(n=a.child,a.child=null):(n=t.sibling,t.sibling=null),fc(a,!1,n,t,i,l);break;case"backwards":case"unstable_legacy-backwards":for(t=null,n=a.child,a.child=null;n!==null;){if(e=n.alternate,e!==null&&ti(e)===null){a.child=n;break}e=n.sibling,n.sibling=t,t=n,n=e}fc(a,!0,t,null,i,l);break;case"together":fc(a,!1,null,null,void 0,l);break;default:a.memoizedState=null}return a.child}function Sa(e,a,t){if(e!==null&&(a.dependencies=e.dependencies),Fa|=a.lanes,!(t&a.childLanes))if(e!==null){if(sl(e,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(y(153));if(a.child!==null){for(e=a.child,t=va(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=va(e,e.pendingProps),t.return=a;t.sibling=null}return a.child}function fu(e,a){return e.lanes&a?!0:(e=e.dependencies,!!(e!==null&&Pn(e)))}function pp(e,a,t){switch(a.tag){case 3:Zn(a,a.stateNode.containerInfo),Ca(a,ue,e.memoizedState.cache),ft();break;case 27:case 5:Rc(a);break;case 4:Zn(a,a.stateNode.containerInfo);break;case 10:Ca(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Ic(a),null;break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(Da(a),a.flags|=128,null):t&a.child.childLanes?id(e,a,t):(Da(a),e=Sa(e,a,t),e!==null?e.sibling:null);Da(a);break;case 19:var n=(e.flags&128)!==0;if(l=(t&a.childLanes)!==0,l||(sl(e,a,t,!1),l=(t&a.childLanes)!==0),n){if(l)return cd(e,a,t);a.flags|=128}if(n=a.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),$(ne,ne.current),l)break;return null;case 22:return a.lanes=0,nd(e,a,t,a.pendingProps);case 24:Ca(a,ue,e.memoizedState.cache)}return Sa(e,a,t)}function sd(e,a,t){if(e!==null)if(e.memoizedProps!==a.pendingProps)oe=!0;else{if(!fu(e,t)&&!(a.flags&128))return oe=!1,pp(e,a,t);oe=!!(e.flags&131072)}else oe=!1,k&&a.flags&1048576&&rf(a,Gl,a.index);switch(a.lanes=0,a.tag){case 16:e:{var l=a.pendingProps;if(e=nt(a.elementType),a.type=e,typeof e=="function")Xs(e)?(l=pt(e,l),a.tag=1,a=Ao(null,a,e,l,t)):(a.tag=0,a=ns(null,a,e,l,t));else{if(e!=null){var n=e.$$typeof;if(n===Os){a.tag=11,a=No(null,a,e,l,t);break e}else if(n===Cs){a.tag=14,a=jo(null,a,e,l,t);break e}}throw a=Dc(e)||e,Error(y(306,a,""))}}return a;case 0:return ns(e,a,a.type,a.pendingProps,t);case 1:return l=a.type,n=pt(l,a.pendingProps),Ao(e,a,l,n,t);case 3:e:{if(Zn(a,a.stateNode.containerInfo),e===null)throw Error(y(387));l=a.pendingProps;var i=a.memoizedState;n=i.element,$c(e,a),Dl(a,l,null,t);var s=a.memoizedState;if(l=s.cache,Ca(a,ue,l),l!==i.cache&&Kc(a,[ue],t,!0),Cl(),l=s.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:s.cache},a.updateQueue.baseState=i,a.memoizedState=i,a.flags&256){a=To(e,a,l,t);break e}else if(l!==n){n=Ke(Error(y(424)),a),Xl(n),a=To(e,a,l,t);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(F=We(e.firstChild),xe=a,k=!0,La=null,Je=!0,t=gf(a,null,l,t),a.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(ft(),l===n){a=Sa(e,a,t);break e}ge(e,a,l,t)}a=a.child}return a;case 26:return Yn(e,a),e===null?(t=Jo(a.type,null,a.pendingProps,null))?a.memoizedState=t:k||(t=a.type,e=a.pendingProps,l=hi(Ya.current).createElement(t),l[ve]=a,l[Oe]=e,be(l,t,e),he(l),a.stateNode=l):a.memoizedState=Jo(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Rc(a),e===null&&k&&(l=a.stateNode=Fd(a.type,a.pendingProps,Ya.current),xe=a,Je=!0,n=F,Pa(a.type)?(ys=n,F=We(l.firstChild)):F=n),ge(e,a,a.pendingProps.children,t),Yn(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&k&&((n=l=F)&&(l=Vp(l,a.type,a.pendingProps,Je),l!==null?(a.stateNode=l,xe=a,F=We(l.firstChild),Je=!1,n=!0):n=!1),n||$a(a)),Rc(a),n=a.type,i=a.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,ps(n,i)?l=null:s!==null&&ps(n,s)&&(a.flags|=32),a.memoizedState!==null&&(n=Is(e,a,cp,null,null,t),$l._currentValue=n),Yn(e,a),ge(e,a,l,t),a.child;case 6:return e===null&&k&&((e=t=F)&&(t=Zp(t,a.pendingProps,Je),t!==null?(a.stateNode=t,xe=a,F=null,e=!0):e=!1),e||$a(a)),null;case 13:return id(e,a,t);case 4:return Zn(a,a.stateNode.containerInfo),l=a.pendingProps,e===null?a.child=mt(a,null,l,t):ge(e,a,l,t),a.child;case 11:return No(e,a,a.type,a.pendingProps,t);case 7:return ge(e,a,a.pendingProps,t),a.child;case 8:return ge(e,a,a.pendingProps.children,t),a.child;case 12:return ge(e,a,a.pendingProps.children,t),a.child;case 10:return l=a.pendingProps,Ca(a,a.type,l.value),ge(e,a,l.children,t),a.child;case 9:return n=a.type._context,l=a.pendingProps.children,dt(a),n=ye(n),l=l(n),a.flags|=1,ge(e,a,l,t),a.child;case 14:return jo(e,a,a.type,a.pendingProps,t);case 15:return ld(e,a,a.type,a.pendingProps,t);case 19:return cd(e,a,t);case 31:return hp(e,a,t);case 22:return nd(e,a,t,a.pendingProps);case 24:return dt(a),l=ye(ue),e===null?(n=Ks(),n===null&&(n=K,i=Zs(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=t),n=i),a.memoizedState={parent:l,cache:n},$s(a),Ca(a,ue,n)):(e.lanes&t&&($c(e,a),Dl(a,null,null,t),Cl()),n=e.memoizedState,i=a.memoizedState,n.parent!==l?(n={parent:l,cache:l},a.memoizedState=n,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=n),Ca(a,ue,l)):(l=i.cache,Ca(a,ue,l),l!==n.cache&&Kc(a,[ue],t,!0))),ge(e,a,a.pendingProps.children,t),a.child;case 29:throw a.pendingProps}throw Error(y(156,a.tag))}function ua(e){e.flags|=4}function dc(e,a,t,l,n){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Dd())e.flags|=8192;else throw ot=ei,Js}else e.flags&=-16777217}function Oo(e,a){if(a.type!=="stylesheet"||a.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!em(a))if(Dd())e.flags|=8192;else throw ot=ei,Js}function zn(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Dr():536870912,e.lanes|=a,Pt|=a)}function gl(e,a){if(!k)switch(e.tailMode){case"hidden":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function W(e){var a=e.alternate!==null&&e.alternate.child===e.child,t=0,l=0;if(a)for(var n=e.child;n!==null;)t|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)t|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=t,a}function gp(e,a,t){var l=a.pendingProps;switch(Vs(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return W(a),null;case 1:return W(a),null;case 3:return t=a.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),xa(ue),Kt(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(jt(a)?ua(a):e===null||e.memoizedState.isDehydrated&&!(a.flags&256)||(a.flags|=1024,lc())),W(a),null;case 26:var n=a.type,i=a.memoizedState;return e===null?(ua(a),i!==null?(W(a),Oo(a,i)):(W(a),dc(a,n,null,l,t))):i?i!==e.memoizedState?(ua(a),W(a),Oo(a,i)):(W(a),a.flags&=-16777217):(e=e.memoizedProps,e!==l&&ua(a),W(a),dc(a,n,e,l,t)),null;case 27:if(Kn(a),t=Ya.current,n=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&ua(a);else{if(!l){if(a.stateNode===null)throw Error(y(166));return W(a),null}e=na.current,jt(a)?lo(a):(e=Fd(n,l,t),a.stateNode=e,ua(a))}return W(a),null;case 5:if(Kn(a),n=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&ua(a);else{if(!l){if(a.stateNode===null)throw Error(y(166));return W(a),null}if(i=na.current,jt(a))lo(a);else{var s=hi(Ya.current);switch(i){case 1:i=s.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=s.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=s.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?s.createElement("select",{is:l.is}):s.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?s.createElement(n,{is:l.is}):s.createElement(n)}}i[ve]=a,i[Oe]=l;e:for(s=a.child;s!==null;){if(s.tag===5||s.tag===6)i.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===a)break e;for(;s.sibling===null;){if(s.return===null||s.return===a)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}a.stateNode=i;e:switch(be(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ua(a)}}return W(a),dc(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,t),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==l&&ua(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(y(166));if(e=Ya.current,jt(a)){if(e=a.stateNode,t=a.memoizedProps,l=null,n=xe,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[ve]=a,e=!!(e.nodeValue===t||l!==null&&l.suppressHydrationWarning===!0||Kd(e.nodeValue,t)),e||$a(a,!0)}else e=hi(e).createTextNode(l),e[ve]=a,a.stateNode=e}return W(a),null;case 31:if(t=a.memoizedState,e===null||e.memoizedState!==null){if(l=jt(a),t!==null){if(e===null){if(!l)throw Error(y(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(557));e[ve]=a}else ft(),!(a.flags&128)&&(a.memoizedState=null),a.flags|=4;W(a),e=!1}else t=lc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return a.flags&256?(_e(a),a):(_e(a),null);if(a.flags&128)throw Error(y(558))}return W(a),null;case 13:if(l=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=jt(a),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(y(318));if(n=a.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(y(317));n[ve]=a}else ft(),!(a.flags&128)&&(a.memoizedState=null),a.flags|=4;W(a),n=!1}else n=lc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return a.flags&256?(_e(a),a):(_e(a),null)}return _e(a),a.flags&128?(a.lanes=t,a):(t=l!==null,e=e!==null&&e.memoizedState!==null,t&&(l=a.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),t!==e&&t&&(a.child.flags|=8192),zn(a,a.updateQueue),W(a),null);case 4:return Kt(),e===null&&xu(a.stateNode.containerInfo),W(a),null;case 10:return xa(a.type),W(a),null;case 19:if(pe(ne),l=a.memoizedState,l===null)return W(a),null;if(n=(a.flags&128)!==0,i=l.rendering,i===null)if(n)gl(l,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=a.child;e!==null;){if(i=ti(e),i!==null){for(a.flags|=128,gl(l,!1),e=i.updateQueue,a.updateQueue=e,zn(a,e),a.subtreeFlags=0,e=t,t=a.child;t!==null;)uf(t,e),t=t.sibling;return $(ne,ne.current&1|2),k&&da(a,l.treeForkCount),a.child}e=e.sibling}l.tail!==null&&He()>ui&&(a.flags|=128,n=!0,gl(l,!1),a.lanes=4194304)}else{if(!n)if(e=ti(i),e!==null){if(a.flags|=128,n=!0,e=e.updateQueue,a.updateQueue=e,zn(a,e),gl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!k)return W(a),null}else 2*He()-l.renderingStartTime>ui&&t!==536870912&&(a.flags|=128,n=!0,gl(l,!1),a.lanes=4194304);l.isBackwards?(i.sibling=a.child,a.child=i):(e=l.last,e!==null?e.sibling=i:a.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=He(),e.sibling=null,t=ne.current,$(ne,n?t&1|2:t&1),k&&da(a,l.treeForkCount),e):(W(a),null);case 22:case 23:return _e(a),Ws(),l=a.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?t&536870912&&!(a.flags&128)&&(W(a),a.subtreeFlags&6&&(a.flags|=8192)):W(a),t=a.updateQueue,t!==null&&zn(a,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==t&&(a.flags|=2048),e!==null&&pe(ut),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),xa(ue),W(a),null;case 25:return null;case 30:return null}throw Error(y(156,a.tag))}function vp(e,a){switch(Vs(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return xa(ue),Kt(),e=a.flags,e&65536&&!(e&128)?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return Kn(a),null;case 31:if(a.memoizedState!==null){if(_e(a),a.alternate===null)throw Error(y(340));ft()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(_e(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(y(340));ft()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return pe(ne),null;case 4:return Kt(),null;case 10:return xa(a.type),null;case 22:case 23:return _e(a),Ws(),e!==null&&pe(ut),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return xa(ue),null;case 25:return null;default:return null}}function ud(e,a){switch(Vs(a),a.tag){case 3:xa(ue),Kt();break;case 26:case 27:case 5:Kn(a);break;case 4:Kt();break;case 31:a.memoizedState!==null&&_e(a);break;case 13:_e(a);break;case 19:pe(ne);break;case 10:xa(a.type);break;case 22:case 23:_e(a),Ws(),e!==null&&pe(ut);break;case 24:xa(ue)}}function sn(e,a){try{var t=a.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var n=l.next;t=n;do{if((t.tag&e)===e){l=void 0;var i=t.create,s=t.inst;l=i(),s.destroy=l}t=t.next}while(t!==n)}}catch(u){X(a,a.return,u)}}function Wa(e,a,t){try{var l=a.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var s=l.inst,u=s.destroy;if(u!==void 0){s.destroy=void 0,n=a;var o=t,d=u;try{d()}catch(g){X(n,o,g)}}}l=l.next}while(l!==i)}}catch(g){X(a,a.return,g)}}function od(e){var a=e.updateQueue;if(a!==null){var t=e.stateNode;try{xf(a,t)}catch(l){X(e,e.return,l)}}}function rd(e,a,t){t.props=pt(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(l){X(e,a,l)}}function Rl(e,a){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof t=="function"?e.refCleanup=t(l):t.current=l}}catch(n){X(e,a,n)}}function la(e,a){var t=e.ref,l=e.refCleanup;if(t!==null)if(typeof l=="function")try{l()}catch(n){X(e,a,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(n){X(e,a,n)}else t.current=null}function fd(e){var a=e.type,t=e.memoizedProps,l=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&l.focus();break e;case"img":t.src?l.src=t.src:t.srcSet&&(l.srcset=t.srcSet)}}catch(n){X(e,e.return,n)}}function mc(e,a,t){try{var l=e.stateNode;Yp(l,e.type,t,a),l[Oe]=a}catch(n){X(e,e.return,n)}}function dd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Pa(e.type)||e.tag===4}function hc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Pa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cs(e,a,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(e),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=pa));else if(l!==4&&(l===27&&Pa(e.type)&&(t=e.stateNode,a=null),e=e.child,e!==null))for(cs(e,a,t),e=e.sibling;e!==null;)cs(e,a,t),e=e.sibling}function si(e,a,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?t.insertBefore(e,a):t.appendChild(e);else if(l!==4&&(l===27&&Pa(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(si(e,a,t),e=e.sibling;e!==null;)si(e,a,t),e=e.sibling}function md(e){var a=e.stateNode,t=e.memoizedProps;try{for(var l=e.type,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);be(a,l,t),a[ve]=e,a[Oe]=t}catch(i){X(e,e.return,i)}}var ma=!1,se=!1,pc=!1,Co=typeof WeakSet=="function"?WeakSet:Set,me=null;function xp(e,a){if(e=e.containerInfo,ms=xi,e=Pr(e),Ls(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var s=0,u=-1,o=-1,d=0,g=0,v=e,f=null;a:for(;;){for(var p;v!==t||n!==0&&v.nodeType!==3||(u=s+n),v!==i||l!==0&&v.nodeType!==3||(o=s+l),v.nodeType===3&&(s+=v.nodeValue.length),(p=v.firstChild)!==null;)f=v,v=p;for(;;){if(v===e)break a;if(f===t&&++d===n&&(u=s),f===i&&++g===l&&(o=s),(p=v.nextSibling)!==null)break;v=f,f=v.parentNode}v=p}t=u===-1||o===-1?null:{start:u,end:o}}else t=null}t=t||{start:0,end:0}}else t=null;for(hs={focusedElem:e,selectionRange:t},xi=!1,me=a;me!==null;)if(a=me,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,me=e;else for(;me!==null;){switch(a=me,i=a.alternate,e=a.flags,a.tag){case 0:if(e&4&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)n=e[t],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&i!==null){e=void 0,t=a,n=i.memoizedProps,i=i.memoizedState,l=t.stateNode;try{var b=pt(t.type,n);e=l.getSnapshotBeforeUpdate(b,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(S){X(t,t.return,S)}}break;case 3:if(e&1024){if(e=a.stateNode.containerInfo,t=e.nodeType,t===9)gs(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":gs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(y(163))}if(e=a.sibling,e!==null){e.return=a.return,me=e;break}me=a.return}}function hd(e,a,t){var l=t.flags;switch(t.tag){case 0:case 11:case 15:ra(e,t),l&4&&sn(5,t);break;case 1:if(ra(e,t),l&4)if(e=t.stateNode,a===null)try{e.componentDidMount()}catch(s){X(t,t.return,s)}else{var n=pt(t.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(n,a,e.__reactInternalSnapshotBeforeUpdate)}catch(s){X(t,t.return,s)}}l&64&&od(t),l&512&&Rl(t,t.return);break;case 3:if(ra(e,t),l&64&&(e=t.updateQueue,e!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{xf(e,a)}catch(s){X(t,t.return,s)}}break;case 27:a===null&&l&4&&md(t);case 26:case 5:ra(e,t),a===null&&l&4&&fd(t),l&512&&Rl(t,t.return);break;case 12:ra(e,t);break;case 31:ra(e,t),l&4&&vd(e,t);break;case 13:ra(e,t),l&4&&xd(e,t),l&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=Tp.bind(null,t),Kp(e,t))));break;case 22:if(l=t.memoizedState!==null||ma,!l){a=a!==null&&a.memoizedState!==null||se,n=ma;var i=se;ma=l,(se=a)&&!i?fa(e,t,(t.subtreeFlags&8772)!==0):ra(e,t),ma=n,se=i}break;case 30:break;default:ra(e,t)}}function pd(e){var a=e.alternate;a!==null&&(e.alternate=null,pd(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Us(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ee=null,Ae=!1;function oa(e,a,t){for(t=t.child;t!==null;)gd(e,a,t),t=t.sibling}function gd(e,a,t){if(we&&typeof we.onCommitFiberUnmount=="function")try{we.onCommitFiberUnmount(Pl,t)}catch{}switch(t.tag){case 26:se||la(t,a),oa(e,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:se||la(t,a);var l=ee,n=Ae;Pa(t.type)&&(ee=t.stateNode,Ae=!1),oa(e,a,t),Bl(t.stateNode),ee=l,Ae=n;break;case 5:se||la(t,a);case 6:if(l=ee,n=Ae,ee=null,oa(e,a,t),ee=l,Ae=n,ee!==null)if(Ae)try{(ee.nodeType===9?ee.body:ee.nodeName==="HTML"?ee.ownerDocument.body:ee).removeChild(t.stateNode)}catch(i){X(t,a,i)}else try{ee.removeChild(t.stateNode)}catch(i){X(t,a,i)}break;case 18:ee!==null&&(Ae?(e=ee,Xo(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),ll(e)):Xo(ee,t.stateNode));break;case 4:l=ee,n=Ae,ee=t.stateNode.containerInfo,Ae=!0,oa(e,a,t),ee=l,Ae=n;break;case 0:case 11:case 14:case 15:Wa(2,t,a),se||Wa(4,t,a),oa(e,a,t);break;case 1:se||(la(t,a),l=t.stateNode,typeof l.componentWillUnmount=="function"&&rd(t,a,l)),oa(e,a,t);break;case 21:oa(e,a,t);break;case 22:se=(l=se)||t.memoizedState!==null,oa(e,a,t),se=l;break;default:oa(e,a,t)}}function vd(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ll(e)}catch(t){X(a,a.return,t)}}}function xd(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ll(e)}catch(t){X(a,a.return,t)}}function yp(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new Co),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new Co),a;default:throw Error(y(435,e.tag))}}function En(e,a){var t=yp(e);a.forEach(function(l){if(!t.has(l)){t.add(l);var n=Mp.bind(null,e,l);l.then(n,n)}})}function ze(e,a){var t=a.deletions;if(t!==null)for(var l=0;l<t.length;l++){var n=t[l],i=e,s=a,u=s;e:for(;u!==null;){switch(u.tag){case 27:if(Pa(u.type)){ee=u.stateNode,Ae=!1;break e}break;case 5:ee=u.stateNode,Ae=!1;break e;case 3:case 4:ee=u.stateNode.containerInfo,Ae=!0;break e}u=u.return}if(ee===null)throw Error(y(160));gd(i,s,n),ee=null,Ae=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)yd(a,e),a=a.sibling}var Pe=null;function yd(e,a){var t=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ze(a,e),Ee(e),l&4&&(Wa(3,e,e.return),sn(3,e),Wa(5,e,e.return));break;case 1:ze(a,e),Ee(e),l&512&&(se||t===null||la(t,t.return)),l&64&&ma&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?l:t.concat(l))));break;case 26:var n=Pe;if(ze(a,e),Ee(e),l&512&&(se||t===null||la(t,t.return)),l&4){var i=t!==null?t.memoizedState:null;if(l=e.memoizedState,t===null)if(l===null)if(e.stateNode===null){e:{l=e.type,t=e.memoizedProps,n=n.ownerDocument||n;a:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[tn]||i[ve]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),be(i,l,t),i[ve]=e,he(i),l=i;break e;case"link":var s=Wo("link","href",n).get(l+(t.href||""));if(s){for(var u=0;u<s.length;u++)if(i=s[u],i.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&i.getAttribute("rel")===(t.rel==null?null:t.rel)&&i.getAttribute("title")===(t.title==null?null:t.title)&&i.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){s.splice(u,1);break a}}i=n.createElement(l),be(i,l,t),n.head.appendChild(i);break;case"meta":if(s=Wo("meta","content",n).get(l+(t.content||""))){for(u=0;u<s.length;u++)if(i=s[u],i.getAttribute("content")===(t.content==null?null:""+t.content)&&i.getAttribute("name")===(t.name==null?null:t.name)&&i.getAttribute("property")===(t.property==null?null:t.property)&&i.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&i.getAttribute("charset")===(t.charSet==null?null:t.charSet)){s.splice(u,1);break a}}i=n.createElement(l),be(i,l,t),n.head.appendChild(i);break;default:throw Error(y(468,l))}i[ve]=e,he(i),l=i}e.stateNode=l}else Fo(n,e.type,e.stateNode);else e.stateNode=$o(n,l,e.memoizedProps);else i!==l?(i===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):i.count--,l===null?Fo(n,e.type,e.stateNode):$o(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&mc(e,e.memoizedProps,t.memoizedProps)}break;case 27:ze(a,e),Ee(e),l&512&&(se||t===null||la(t,t.return)),t!==null&&l&4&&mc(e,e.memoizedProps,t.memoizedProps);break;case 5:if(ze(a,e),Ee(e),l&512&&(se||t===null||la(t,t.return)),e.flags&32){n=e.stateNode;try{$t(n,"")}catch(b){X(e,e.return,b)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,mc(e,n,t!==null?t.memoizedProps:n)),l&1024&&(pc=!0);break;case 6:if(ze(a,e),Ee(e),l&4){if(e.stateNode===null)throw Error(y(162));l=e.memoizedProps,t=e.stateNode;try{t.nodeValue=l}catch(b){X(e,e.return,b)}}break;case 3:if(Gn=null,n=Pe,Pe=pi(a.containerInfo),ze(a,e),Pe=n,Ee(e),l&4&&t!==null&&t.memoizedState.isDehydrated)try{ll(a.containerInfo)}catch(b){X(e,e.return,b)}pc&&(pc=!1,bd(e));break;case 4:l=Pe,Pe=pi(e.stateNode.containerInfo),ze(a,e),Ee(e),Pe=l;break;case 12:ze(a,e),Ee(e);break;case 31:ze(a,e),Ee(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,En(e,l)));break;case 13:ze(a,e),Ee(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Hi=He()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,En(e,l)));break;case 22:n=e.memoizedState!==null;var o=t!==null&&t.memoizedState!==null,d=ma,g=se;if(ma=d||n,se=g||o,ze(a,e),se=g,ma=d,Ee(e),l&8192)e:for(a=e.stateNode,a._visibility=n?a._visibility&-2:a._visibility|1,n&&(t===null||o||ma||se||it(e)),t=null,a=e;;){if(a.tag===5||a.tag===26){if(t===null){o=t=a;try{if(i=o.stateNode,n)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{u=o.stateNode;var v=o.memoizedProps.style,f=v!=null&&v.hasOwnProperty("display")?v.display:null;u.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(b){X(o,o.return,b)}}}else if(a.tag===6){if(t===null){o=a;try{o.stateNode.nodeValue=n?"":o.memoizedProps}catch(b){X(o,o.return,b)}}}else if(a.tag===18){if(t===null){o=a;try{var p=o.stateNode;n?Qo(p,!0):Qo(o.stateNode,!1)}catch(b){X(o,o.return,b)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;t===a&&(t=null),a=a.return}t===a&&(t=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=e.updateQueue,l!==null&&(t=l.retryQueue,t!==null&&(l.retryQueue=null,En(e,t))));break;case 19:ze(a,e),Ee(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,En(e,l)));break;case 30:break;case 21:break;default:ze(a,e),Ee(e)}}function Ee(e){var a=e.flags;if(a&2){try{for(var t,l=e.return;l!==null;){if(dd(l)){t=l;break}l=l.return}if(t==null)throw Error(y(160));switch(t.tag){case 27:var n=t.stateNode,i=hc(e);si(e,i,n);break;case 5:var s=t.stateNode;t.flags&32&&($t(s,""),t.flags&=-33);var u=hc(e);si(e,u,s);break;case 3:case 4:var o=t.stateNode.containerInfo,d=hc(e);cs(e,d,o);break;default:throw Error(y(161))}}catch(g){X(e,e.return,g)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function bd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;bd(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function ra(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)hd(e,a.alternate,a),a=a.sibling}function it(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:Wa(4,a,a.return),it(a);break;case 1:la(a,a.return);var t=a.stateNode;typeof t.componentWillUnmount=="function"&&rd(a,a.return,t),it(a);break;case 27:Bl(a.stateNode);case 26:case 5:la(a,a.return),it(a);break;case 22:a.memoizedState===null&&it(a);break;case 30:it(a);break;default:it(a)}e=e.sibling}}function fa(e,a,t){for(t=t&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,n=e,i=a,s=i.flags;switch(i.tag){case 0:case 11:case 15:fa(n,i,t),sn(4,i);break;case 1:if(fa(n,i,t),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(d){X(l,l.return,d)}if(l=i,n=l.updateQueue,n!==null){var u=l.stateNode;try{var o=n.shared.hiddenCallbacks;if(o!==null)for(n.shared.hiddenCallbacks=null,n=0;n<o.length;n++)vf(o[n],u)}catch(d){X(l,l.return,d)}}t&&s&64&&od(i),Rl(i,i.return);break;case 27:md(i);case 26:case 5:fa(n,i,t),t&&l===null&&s&4&&fd(i),Rl(i,i.return);break;case 12:fa(n,i,t);break;case 31:fa(n,i,t),t&&s&4&&vd(n,i);break;case 13:fa(n,i,t),t&&s&4&&xd(n,i);break;case 22:i.memoizedState===null&&fa(n,i,t),Rl(i,i.return);break;case 30:break;default:fa(n,i,t)}a=a.sibling}}function du(e,a){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&nn(t))}function mu(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&nn(e))}function Ie(e,a,t,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Nd(e,a,t,l),a=a.sibling}function Nd(e,a,t,l){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Ie(e,a,t,l),n&2048&&sn(9,a);break;case 1:Ie(e,a,t,l);break;case 3:Ie(e,a,t,l),n&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&nn(e)));break;case 12:if(n&2048){Ie(e,a,t,l),e=a.stateNode;try{var i=a.memoizedProps,s=i.id,u=i.onPostCommit;typeof u=="function"&&u(s,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(o){X(a,a.return,o)}}else Ie(e,a,t,l);break;case 31:Ie(e,a,t,l);break;case 13:Ie(e,a,t,l);break;case 23:break;case 22:i=a.stateNode,s=a.alternate,a.memoizedState!==null?i._visibility&2?Ie(e,a,t,l):Ul(e,a):i._visibility&2?Ie(e,a,t,l):(i._visibility|=2,At(e,a,t,l,(a.subtreeFlags&10256)!==0||!1)),n&2048&&du(s,a);break;case 24:Ie(e,a,t,l),n&2048&&mu(a.alternate,a);break;default:Ie(e,a,t,l)}}function At(e,a,t,l,n){for(n=n&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var i=e,s=a,u=t,o=l,d=s.flags;switch(s.tag){case 0:case 11:case 15:At(i,s,u,o,n),sn(8,s);break;case 23:break;case 22:var g=s.stateNode;s.memoizedState!==null?g._visibility&2?At(i,s,u,o,n):Ul(i,s):(g._visibility|=2,At(i,s,u,o,n)),n&&d&2048&&du(s.alternate,s);break;case 24:At(i,s,u,o,n),n&&d&2048&&mu(s.alternate,s);break;default:At(i,s,u,o,n)}a=a.sibling}}function Ul(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=e,l=a,n=l.flags;switch(l.tag){case 22:Ul(t,l),n&2048&&du(l.alternate,l);break;case 24:Ul(t,l),n&2048&&mu(l.alternate,l);break;default:Ul(t,l)}a=a.sibling}}var Sl=8192;function St(e,a,t){if(e.subtreeFlags&Sl)for(e=e.child;e!==null;)jd(e,a,t),e=e.sibling}function jd(e,a,t){switch(e.tag){case 26:St(e,a,t),e.flags&Sl&&e.memoizedState!==null&&i0(t,Pe,e.memoizedState,e.memoizedProps);break;case 5:St(e,a,t);break;case 3:case 4:var l=Pe;Pe=pi(e.stateNode.containerInfo),St(e,a,t),Pe=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Sl,Sl=16777216,St(e,a,t),Sl=l):St(e,a,t));break;default:St(e,a,t)}}function Sd(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function vl(e){var a=e.deletions;if(e.flags&16){if(a!==null)for(var t=0;t<a.length;t++){var l=a[t];me=l,Ed(l,e)}Sd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zd(e),e=e.sibling}function zd(e){switch(e.tag){case 0:case 11:case 15:vl(e),e.flags&2048&&Wa(9,e,e.return);break;case 3:vl(e);break;case 12:vl(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Ln(e)):vl(e);break;default:vl(e)}}function Ln(e){var a=e.deletions;if(e.flags&16){if(a!==null)for(var t=0;t<a.length;t++){var l=a[t];me=l,Ed(l,e)}Sd(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:Wa(8,a,a.return),Ln(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,Ln(a));break;default:Ln(a)}e=e.sibling}}function Ed(e,a){for(;me!==null;){var t=me;switch(t.tag){case 0:case 11:case 15:Wa(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var l=t.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:nn(t.memoizedState.cache)}if(l=t.child,l!==null)l.return=t,me=l;else e:for(t=e;me!==null;){l=me;var n=l.sibling,i=l.return;if(pd(l),l===t){me=null;break e}if(n!==null){n.return=i,me=n;break e}me=i}}}var bp={getCacheForType:function(e){var a=ye(ue),t=a.data.get(e);return t===void 0&&(t=e(),a.data.set(e,t)),t},cacheSignal:function(){return ye(ue).controller.signal}},Np=typeof WeakMap=="function"?WeakMap:Map,L=0,K=null,U=null,w=0,G=0,De=null,wa=!1,ol=!1,hu=!1,za=0,te=0,Fa=0,rt=0,pu=0,Ue=0,Pt=0,Hl=null,Te=null,ss=!1,Hi=0,Ad=0,ui=1/0,oi=null,Xa=null,re=0,Qa=null,el=null,ya=0,us=0,os=null,Td=null,wl=0,rs=null;function ke(){return L&2&&w!==0?w&-w:E.T!==null?vu():Hr()}function Md(){if(Ue===0)if(!(w&536870912)||k){var e=vn;vn<<=1,!(vn&3932160)&&(vn=262144),Ue=e}else Ue=536870912;return e=Le.current,e!==null&&(e.flags|=32),Ue}function Me(e,a,t){(e===K&&(G===2||G===9)||e.cancelPendingCommit!==null)&&(al(e,0),Ba(e,w,Ue,!1)),an(e,t),(!(L&2)||e!==K)&&(e===K&&(!(L&2)&&(rt|=t),te===4&&Ba(e,w,Ue,!1)),ca(e))}function Od(e,a,t){if(L&6)throw Error(y(327));var l=!t&&(a&127)===0&&(a&e.expiredLanes)===0||en(e,a),n=l?zp(e,a):gc(e,a,!0),i=l;do{if(n===0){ol&&!l&&Ba(e,a,0,!1);break}else{if(t=e.current.alternate,i&&!jp(t)){n=gc(e,a,!1),i=!1;continue}if(n===2){if(i=a,e.errorRecoveryDisabledLanes&i)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){a=s;e:{var u=e;n=Hl;var o=u.current.memoizedState.isDehydrated;if(o&&(al(u,s).flags|=256),s=gc(u,s,!1),s!==2){if(hu&&!o){u.errorRecoveryDisabledLanes|=i,rt|=i,n=4;break e}i=Te,Te=n,i!==null&&(Te===null?Te=i:Te.push.apply(Te,i))}n=s}if(i=!1,n!==2)continue}}if(n===1){al(e,0),Ba(e,a,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(y(345));case 4:if((a&4194048)!==a)break;case 6:Ba(l,a,Ue,!wa);break e;case 2:Te=null;break;case 3:case 5:break;default:throw Error(y(329))}if((a&62914560)===a&&(n=Hi+300-He(),10<n)){if(Ba(l,a,Ue,!wa),zi(l,0,!0)!==0)break e;ya=a,l.timeoutHandle=$d(Do.bind(null,l,t,Te,oi,ss,a,Ue,rt,Pt,wa,i,"Throttled",-0,0),n);break e}Do(l,t,Te,oi,ss,a,Ue,rt,Pt,wa,i,null,-0,0)}}break}while(!0);ca(e)}function Do(e,a,t,l,n,i,s,u,o,d,g,v,f,p){if(e.timeoutHandle=-1,v=a.subtreeFlags,v&8192||(v&16785408)===16785408){v={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:pa},jd(a,i,v);var b=(i&62914560)===i?Hi-He():(i&4194048)===i?Ad-He():0;if(b=c0(v,b),b!==null){ya=i,e.cancelPendingCommit=b(Ro.bind(null,e,a,i,t,l,n,s,u,o,g,v,null,f,p)),Ba(e,i,s,!d);return}}Ro(e,a,i,t,l,n,s,u,o)}function jp(e){for(var a=e;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var l=0;l<t.length;l++){var n=t[l],i=n.getSnapshot;n=n.value;try{if(!Ye(i(),n))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Ba(e,a,t,l){a&=~pu,a&=~rt,e.suspendedLanes|=a,e.pingedLanes&=~a,l&&(e.warmLanes|=a),l=e.expirationTimes;for(var n=a;0<n;){var i=31-Be(n),s=1<<i;l[i]=-1,n&=~s}t!==0&&_r(e,t,a)}function wi(){return L&6?!0:(un(0),!1)}function gu(){if(U!==null){if(G===0)var e=U.return;else e=U,ga=bt=null,au(e),Qt=null,Ql=0,e=U;for(;e!==null;)ud(e.alternate,e),e=e.return;U=null}}function al(e,a){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,Gp(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),ya=0,gu(),K=e,U=t=va(e.current,null),w=a,G=0,De=null,wa=!1,ol=en(e,a),hu=!1,Pt=Ue=pu=rt=Fa=te=0,Te=Hl=null,ss=!1,a&8&&(a|=a&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=a;0<l;){var n=31-Be(l),i=1<<n;a|=e[n],l&=~i}return za=a,Mi(),t}function Cd(e,a){M=null,E.H=Zl,a===ul||a===Ci?(a=uo(),G=3):a===Js?(a=uo(),G=4):G=a===ru?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,De=a,U===null&&(te=1,ii(e,Ke(a,e.current)))}function Dd(){var e=Le.current;return e===null?!0:(w&4194048)===w?$e===null:(w&62914560)===w||w&536870912?e===$e:!1}function _d(){var e=E.H;return E.H=Zl,e===null?Zl:e}function Rd(){var e=E.A;return E.A=bp,e}function ri(){te=4,wa||(w&4194048)!==w&&Le.current!==null||(ol=!0),!(Fa&134217727)&&!(rt&134217727)||K===null||Ba(K,w,Ue,!1)}function gc(e,a,t){var l=L;L|=2;var n=_d(),i=Rd();(K!==e||w!==a)&&(oi=null,al(e,a)),a=!1;var s=te;e:do try{if(G!==0&&U!==null){var u=U,o=De;switch(G){case 8:gu(),s=6;break e;case 3:case 2:case 9:case 6:Le.current===null&&(a=!0);var d=G;if(G=0,De=null,Yt(e,u,o,d),t&&ol){s=0;break e}break;default:d=G,G=0,De=null,Yt(e,u,o,d)}}Sp(),s=te;break}catch(g){Cd(e,g)}while(!0);return a&&e.shellSuspendCounter++,ga=bt=null,L=l,E.H=n,E.A=i,U===null&&(K=null,w=0,Mi()),s}function Sp(){for(;U!==null;)Ud(U)}function zp(e,a){var t=L;L|=2;var l=_d(),n=Rd();K!==e||w!==a?(oi=null,ui=He()+500,al(e,a)):ol=en(e,a);e:do try{if(G!==0&&U!==null){a=U;var i=De;a:switch(G){case 1:G=0,De=null,Yt(e,a,i,1);break;case 2:case 9:if(so(i)){G=0,De=null,_o(a);break}a=function(){G!==2&&G!==9||K!==e||(G=7),ca(e)},i.then(a,a);break e;case 3:G=7;break e;case 4:G=5;break e;case 7:so(i)?(G=0,De=null,_o(a)):(G=0,De=null,Yt(e,a,i,7));break;case 5:var s=null;switch(U.tag){case 26:s=U.memoizedState;case 5:case 27:var u=U;if(s?em(s):u.stateNode.complete){G=0,De=null;var o=u.sibling;if(o!==null)U=o;else{var d=u.return;d!==null?(U=d,Bi(d)):U=null}break a}}G=0,De=null,Yt(e,a,i,5);break;case 6:G=0,De=null,Yt(e,a,i,6);break;case 8:gu(),te=6;break e;default:throw Error(y(462))}}Ep();break}catch(g){Cd(e,g)}while(!0);return ga=bt=null,E.H=l,E.A=n,L=t,U!==null?0:(K=null,w=0,Mi(),te)}function Ep(){for(;U!==null&&!Jm();)Ud(U)}function Ud(e){var a=sd(e.alternate,e,za);e.memoizedProps=e.pendingProps,a===null?Bi(e):U=a}function _o(e){var a=e,t=a.alternate;switch(a.tag){case 15:case 0:a=Eo(t,a,a.pendingProps,a.type,void 0,w);break;case 11:a=Eo(t,a,a.pendingProps,a.type.render,a.ref,w);break;case 5:au(a);default:ud(t,a),a=U=uf(a,za),a=sd(t,a,za)}e.memoizedProps=e.pendingProps,a===null?Bi(e):U=a}function Yt(e,a,t,l){ga=bt=null,au(a),Qt=null,Ql=0;var n=a.return;try{if(mp(e,n,a,t,w)){te=1,ii(e,Ke(t,e.current)),U=null;return}}catch(i){if(n!==null)throw U=n,i;te=1,ii(e,Ke(t,e.current)),U=null;return}a.flags&32768?(k||l===1?e=!0:ol||w&536870912?e=!1:(wa=e=!0,(l===2||l===9||l===3||l===6)&&(l=Le.current,l!==null&&l.tag===13&&(l.flags|=16384))),Hd(a,e)):Bi(a)}function Bi(e){var a=e;do{if(a.flags&32768){Hd(a,wa);return}e=a.return;var t=gp(a.alternate,a,za);if(t!==null){U=t;return}if(a=a.sibling,a!==null){U=a;return}U=a=e}while(a!==null);te===0&&(te=5)}function Hd(e,a){do{var t=vp(e.alternate,e);if(t!==null){t.flags&=32767,U=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(e=e.sibling,e!==null)){U=e;return}U=e=t}while(e!==null);te=6,U=null}function Ro(e,a,t,l,n,i,s,u,o){e.cancelPendingCommit=null;do ki();while(re!==0);if(L&6)throw Error(y(327));if(a!==null){if(a===e.current)throw Error(y(177));if(i=a.lanes|a.childLanes,i|=qs,nh(e,t,i,s,u,o),e===K&&(U=K=null,w=0),el=a,Qa=e,ya=t,us=i,os=n,Td=l,a.subtreeFlags&10256||a.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Op(Jn,function(){return Ld(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(a.flags&13878)!==0,a.subtreeFlags&13878||l){l=E.T,E.T=null,n=q.p,q.p=2,s=L,L|=4;try{xp(e,a,t)}finally{L=s,q.p=n,E.T=l}}re=1,wd(),Bd(),kd()}}function wd(){if(re===1){re=0;var e=Qa,a=el,t=(a.flags&13878)!==0;if(a.subtreeFlags&13878||t){t=E.T,E.T=null;var l=q.p;q.p=2;var n=L;L|=4;try{yd(a,e);var i=hs,s=Pr(e.containerInfo),u=i.focusedElem,o=i.selectionRange;if(s!==u&&u&&u.ownerDocument&&Ir(u.ownerDocument.documentElement,u)){if(o!==null&&Ls(u)){var d=o.start,g=o.end;if(g===void 0&&(g=d),"selectionStart"in u)u.selectionStart=d,u.selectionEnd=Math.min(g,u.value.length);else{var v=u.ownerDocument||document,f=v&&v.defaultView||window;if(f.getSelection){var p=f.getSelection(),b=u.textContent.length,S=Math.min(o.start,b),H=o.end===void 0?S:Math.min(o.end,b);!p.extend&&S>H&&(s=H,H=S,S=s);var m=eo(u,S),r=eo(u,H);if(m&&r&&(p.rangeCount!==1||p.anchorNode!==m.node||p.anchorOffset!==m.offset||p.focusNode!==r.node||p.focusOffset!==r.offset)){var h=v.createRange();h.setStart(m.node,m.offset),p.removeAllRanges(),S>H?(p.addRange(h),p.extend(r.node,r.offset)):(h.setEnd(r.node,r.offset),p.addRange(h))}}}}for(v=[],p=u;p=p.parentNode;)p.nodeType===1&&v.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<v.length;u++){var x=v[u];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}xi=!!ms,hs=ms=null}finally{L=n,q.p=l,E.T=t}}e.current=a,re=2}}function Bd(){if(re===2){re=0;var e=Qa,a=el,t=(a.flags&8772)!==0;if(a.subtreeFlags&8772||t){t=E.T,E.T=null;var l=q.p;q.p=2;var n=L;L|=4;try{hd(e,a.alternate,a)}finally{L=n,q.p=l,E.T=t}}re=3}}function kd(){if(re===4||re===3){re=0,$m();var e=Qa,a=el,t=ya,l=Td;a.subtreeFlags&10256||a.flags&10256?re=5:(re=0,el=Qa=null,Yd(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Xa=null),Rs(t),a=a.stateNode,we&&typeof we.onCommitFiberRoot=="function")try{we.onCommitFiberRoot(Pl,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=E.T,n=q.p,q.p=2,E.T=null;try{for(var i=e.onRecoverableError,s=0;s<l.length;s++){var u=l[s];i(u.value,{componentStack:u.stack})}}finally{E.T=a,q.p=n}}ya&3&&ki(),ca(e),n=e.pendingLanes,t&261930&&n&42?e===rs?wl++:(wl=0,rs=e):wl=0,un(0)}}function Yd(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,nn(a)))}function ki(){return wd(),Bd(),kd(),Ld()}function Ld(){if(re!==5)return!1;var e=Qa,a=us;us=0;var t=Rs(ya),l=E.T,n=q.p;try{q.p=32>t?32:t,E.T=null,t=os,os=null;var i=Qa,s=ya;if(re=0,el=Qa=null,ya=0,L&6)throw Error(y(331));var u=L;if(L|=4,zd(i.current),Nd(i,i.current,s,t),L=u,un(0,!1),we&&typeof we.onPostCommitFiberRoot=="function")try{we.onPostCommitFiberRoot(Pl,i)}catch{}return!0}finally{q.p=n,E.T=l,Yd(e,a)}}function Uo(e,a,t){a=Ke(t,a),a=ls(e.stateNode,a,2),e=Ga(e,a,2),e!==null&&(an(e,2),ca(e))}function X(e,a,t){if(e.tag===3)Uo(e,e,t);else for(;a!==null;){if(a.tag===3){Uo(a,e,t);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Xa===null||!Xa.has(l))){e=Ke(t,e),t=ad(2),l=Ga(a,t,2),l!==null&&(td(t,l,a,e),an(l,2),ca(l));break}}a=a.return}}function vc(e,a,t){var l=e.pingCache;if(l===null){l=e.pingCache=new Np;var n=new Set;l.set(a,n)}else n=l.get(a),n===void 0&&(n=new Set,l.set(a,n));n.has(t)||(hu=!0,n.add(t),e=Ap.bind(null,e,a,t),a.then(e,e))}function Ap(e,a,t){var l=e.pingCache;l!==null&&l.delete(a),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,K===e&&(w&t)===t&&(te===4||te===3&&(w&62914560)===w&&300>He()-Hi?!(L&2)&&al(e,0):pu|=t,Pt===w&&(Pt=0)),ca(e)}function qd(e,a){a===0&&(a=Dr()),e=yt(e,a),e!==null&&(an(e,a),ca(e))}function Tp(e){var a=e.memoizedState,t=0;a!==null&&(t=a.retryLane),qd(e,t)}function Mp(e,a){var t=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(t=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(y(314))}l!==null&&l.delete(a),qd(e,t)}function Op(e,a){return Ds(e,a)}var fi=null,Tt=null,fs=!1,di=!1,xc=!1,ka=0;function ca(e){e!==Tt&&e.next===null&&(Tt===null?fi=Tt=e:Tt=Tt.next=e),di=!0,fs||(fs=!0,Dp())}function un(e,a){if(!xc&&di){xc=!0;do for(var t=!1,l=fi;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var s=l.suspendedLanes,u=l.pingedLanes;i=(1<<31-Be(42|e)+1)-1,i&=n&~(s&~u),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(t=!0,Ho(l,i))}else i=w,i=zi(l,l===K?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),!(i&3)||en(l,i)||(t=!0,Ho(l,i));l=l.next}while(t);xc=!1}}function Cp(){Gd()}function Gd(){di=fs=!1;var e=0;ka!==0&&qp()&&(e=ka);for(var a=He(),t=null,l=fi;l!==null;){var n=l.next,i=Xd(l,a);i===0?(l.next=null,t===null?fi=n:t.next=n,n===null&&(Tt=t)):(t=l,(e!==0||i&3)&&(di=!0)),l=n}re!==0&&re!==5||un(e),ka!==0&&(ka=0)}function Xd(e,a){for(var t=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var s=31-Be(i),u=1<<s,o=n[s];o===-1?(!(u&t)||u&l)&&(n[s]=lh(u,a)):o<=a&&(e.expiredLanes|=u),i&=~u}if(a=K,t=w,t=zi(e,e===a?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,t===0||e===a&&(G===2||G===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Zi(l),e.callbackNode=null,e.callbackPriority=0;if(!(t&3)||en(e,t)){if(a=t&-t,a===e.callbackPriority)return a;switch(l!==null&&Zi(l),Rs(t)){case 2:case 8:t=Or;break;case 32:t=Jn;break;case 268435456:t=Cr;break;default:t=Jn}return l=Qd.bind(null,e),t=Ds(t,l),e.callbackPriority=a,e.callbackNode=t,a}return l!==null&&l!==null&&Zi(l),e.callbackPriority=2,e.callbackNode=null,2}function Qd(e,a){if(re!==0&&re!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(ki()&&e.callbackNode!==t)return null;var l=w;return l=zi(e,e===K?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Od(e,l,a),Xd(e,He()),e.callbackNode!=null&&e.callbackNode===t?Qd.bind(null,e):null)}function Ho(e,a){if(ki())return null;Od(e,a,!0)}function Dp(){Xp(function(){L&6?Ds(Mr,Cp):Gd()})}function vu(){if(ka===0){var e=Wt;e===0&&(e=gn,gn<<=1,!(gn&261888)&&(gn=256)),ka=e}return ka}function wo(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Dn(""+e)}function Bo(e,a){var t=a.ownerDocument.createElement("input");return t.name=a.name,t.value=a.value,e.id&&t.setAttribute("form",e.id),a.parentNode.insertBefore(t,a),e=new FormData(e),t.parentNode.removeChild(t),e}function _p(e,a,t,l,n){if(a==="submit"&&t&&t.stateNode===n){var i=wo((n[Oe]||null).action),s=l.submitter;s&&(a=(a=s[Oe]||null)?wo(a.formAction):s.getAttribute("formAction"),a!==null&&(i=a,s=null));var u=new Ei("action","action",null,l,n);e.push({event:u,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ka!==0){var o=s?Bo(n,s):new FormData(n);as(t,{pending:!0,data:o,method:n.method,action:i},null,o)}}else typeof i=="function"&&(u.preventDefault(),o=s?Bo(n,s):new FormData(n),as(t,{pending:!0,data:o,method:n.method,action:i},i,o))},currentTarget:n}]})}}for(var yc=0;yc<Xc.length;yc++){var bc=Xc[yc],Rp=bc.toLowerCase(),Up=bc[0].toUpperCase()+bc.slice(1);ea(Rp,"on"+Up)}ea(af,"onAnimationEnd");ea(tf,"onAnimationIteration");ea(lf,"onAnimationStart");ea("dblclick","onDoubleClick");ea("focusin","onFocus");ea("focusout","onBlur");ea(Wh,"onTransitionRun");ea(Fh,"onTransitionStart");ea(Ih,"onTransitionCancel");ea(nf,"onTransitionEnd");Jt("onMouseEnter",["mouseout","mouseover"]);Jt("onMouseLeave",["mouseout","mouseover"]);Jt("onPointerEnter",["pointerout","pointerover"]);Jt("onPointerLeave",["pointerout","pointerover"]);gt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gt("onBeforeInput",["compositionend","keypress","textInput","paste"]);gt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Kl));function Vd(e,a){a=(a&4)!==0;for(var t=0;t<e.length;t++){var l=e[t],n=l.event;l=l.listeners;e:{var i=void 0;if(a)for(var s=l.length-1;0<=s;s--){var u=l[s],o=u.instance,d=u.currentTarget;if(u=u.listener,o!==i&&n.isPropagationStopped())break e;i=u,n.currentTarget=d;try{i(n)}catch(g){Wn(g)}n.currentTarget=null,i=o}else for(s=0;s<l.length;s++){if(u=l[s],o=u.instance,d=u.currentTarget,u=u.listener,o!==i&&n.isPropagationStopped())break e;i=u,n.currentTarget=d;try{i(n)}catch(g){Wn(g)}n.currentTarget=null,i=o}}}}function R(e,a){var t=a[Hc];t===void 0&&(t=a[Hc]=new Set);var l=e+"__bubble";t.has(l)||(Zd(a,e,2,!1),t.add(l))}function Nc(e,a,t){var l=0;a&&(l|=4),Zd(t,e,l,a)}var An="_reactListening"+Math.random().toString(36).slice(2);function xu(e){if(!e[An]){e[An]=!0,wr.forEach(function(t){t!=="selectionchange"&&(Hp.has(t)||Nc(t,!1,e),Nc(t,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[An]||(a[An]=!0,Nc("selectionchange",!1,a))}}function Zd(e,a,t,l){switch(im(a)){case 2:var n=o0;break;case 8:n=r0;break;default:n=ju}t=n.bind(null,a,t,e),n=void 0,!Lc||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(a,t,{capture:!0,passive:n}):e.addEventListener(a,t,!0):n!==void 0?e.addEventListener(a,t,{passive:n}):e.addEventListener(a,t,!1)}function jc(e,a,t,l,n){var i=l;if(!(a&1)&&!(a&2)&&l!==null)e:for(;;){if(l===null)return;var s=l.tag;if(s===3||s===4){var u=l.stateNode.containerInfo;if(u===n)break;if(s===4)for(s=l.return;s!==null;){var o=s.tag;if((o===3||o===4)&&s.stateNode.containerInfo===n)return;s=s.return}for(;u!==null;){if(s=Ct(u),s===null)return;if(o=s.tag,o===5||o===6||o===26||o===27){l=i=s;continue e}u=u.parentNode}}l=l.return}Qr(function(){var d=i,g=ws(t),v=[];e:{var f=cf.get(e);if(f!==void 0){var p=Ei,b=e;switch(e){case"keypress":if(Rn(t)===0)break e;case"keydown":case"keyup":p=Mh;break;case"focusin":b="focus",p=Fi;break;case"focusout":b="blur",p=Fi;break;case"beforeblur":case"afterblur":p=Fi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Qu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=gh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Dh;break;case af:case tf:case lf:p=yh;break;case nf:p=Rh;break;case"scroll":case"scrollend":p=hh;break;case"wheel":p=Hh;break;case"copy":case"cut":case"paste":p=Nh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Zu;break;case"toggle":case"beforetoggle":p=Bh}var S=(a&4)!==0,H=!S&&(e==="scroll"||e==="scrollend"),m=S?f!==null?f+"Capture":null:f;S=[];for(var r=d,h;r!==null;){var x=r;if(h=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||h===null||m===null||(x=Yl(r,m),x!=null&&S.push(Jl(r,x,h))),H)break;r=r.return}0<S.length&&(f=new p(f,b,null,t,g),v.push({event:f,listeners:S}))}}if(!(a&7)){e:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&t!==Yc&&(b=t.relatedTarget||t.fromElement)&&(Ct(b)||b[il]))break e;if((p||f)&&(f=g.window===g?g:(f=g.ownerDocument)?f.defaultView||f.parentWindow:window,p?(b=t.relatedTarget||t.toElement,p=d,b=b?Ct(b):null,b!==null&&(H=Il(b),S=b.tag,b!==H||S!==5&&S!==27&&S!==6)&&(b=null)):(p=null,b=d),p!==b)){if(S=Qu,x="onMouseLeave",m="onMouseEnter",r="mouse",(e==="pointerout"||e==="pointerover")&&(S=Zu,x="onPointerLeave",m="onPointerEnter",r="pointer"),H=p==null?f:Nl(p),h=b==null?f:Nl(b),f=new S(x,r+"leave",p,t,g),f.target=H,f.relatedTarget=h,x=null,Ct(g)===d&&(S=new S(m,r+"enter",b,t,g),S.target=h,S.relatedTarget=H,x=S),H=x,p&&b)a:{for(S=wp,m=p,r=b,h=0,x=m;x;x=S(x))h++;x=0;for(var z=r;z;z=S(z))x++;for(;0<h-x;)m=S(m),h--;for(;0<x-h;)r=S(r),x--;for(;h--;){if(m===r||r!==null&&m===r.alternate){S=m;break a}m=S(m),r=S(r)}S=null}else S=null;p!==null&&ko(v,f,p,S,!1),b!==null&&H!==null&&ko(v,H,b,S,!0)}}e:{if(f=d?Nl(d):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var O=Wu;else if($u(f))if(Wr)O=Kh;else{O=Vh;var N=Qh}else p=f.nodeName,!p||p.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?d&&Hs(d.elementType)&&(O=Wu):O=Zh;if(O&&(O=O(e,d))){$r(v,O,t,g);break e}N&&N(e,f,d),e==="focusout"&&d&&f.type==="number"&&d.memoizedProps.value!=null&&kc(f,"number",f.value)}switch(N=d?Nl(d):window,e){case"focusin":($u(N)||N.contentEditable==="true")&&(Rt=N,qc=d,Tl=null);break;case"focusout":Tl=qc=Rt=null;break;case"mousedown":Gc=!0;break;case"contextmenu":case"mouseup":case"dragend":Gc=!1,ao(v,t,g);break;case"selectionchange":if($h)break;case"keydown":case"keyup":ao(v,t,g)}var A;if(Ys)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else _t?Kr(e,t)&&(C="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(C="onCompositionStart");C&&(Zr&&t.locale!=="ko"&&(_t||C!=="onCompositionStart"?C==="onCompositionEnd"&&_t&&(A=Vr()):(Ha=g,Bs="value"in Ha?Ha.value:Ha.textContent,_t=!0)),N=mi(d,C),0<N.length&&(C=new Vu(C,e,null,t,g),v.push({event:C,listeners:N}),A?C.data=A:(A=Jr(t),A!==null&&(C.data=A)))),(A=Yh?Lh(e,t):qh(e,t))&&(C=mi(d,"onBeforeInput"),0<C.length&&(N=new Vu("onBeforeInput","beforeinput",null,t,g),v.push({event:N,listeners:C}),N.data=A)),_p(v,e,d,t,g)}Vd(v,a)})}function Jl(e,a,t){return{instance:e,listener:a,currentTarget:t}}function mi(e,a){for(var t=a+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Yl(e,t),n!=null&&l.unshift(Jl(e,n,i)),n=Yl(e,a),n!=null&&l.push(Jl(e,n,i))),e.tag===3)return l;e=e.return}return[]}function wp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ko(e,a,t,l,n){for(var i=a._reactName,s=[];t!==null&&t!==l;){var u=t,o=u.alternate,d=u.stateNode;if(u=u.tag,o!==null&&o===l)break;u!==5&&u!==26&&u!==27||d===null||(o=d,n?(d=Yl(t,i),d!=null&&s.unshift(Jl(t,d,o))):n||(d=Yl(t,i),d!=null&&s.push(Jl(t,d,o)))),t=t.return}s.length!==0&&e.push({event:a,listeners:s})}var Bp=/\r\n?/g,kp=/\u0000|\uFFFD/g;function Yo(e){return(typeof e=="string"?e:""+e).replace(Bp,`
`).replace(kp,"")}function Kd(e,a){return a=Yo(a),Yo(e)===a}function Q(e,a,t,l,n,i){switch(t){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||$t(e,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&$t(e,""+l);break;case"className":yn(e,"class",l);break;case"tabIndex":yn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":yn(e,t,l);break;case"style":Xr(e,l,i);break;case"data":if(a!=="object"){yn(e,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||t!=="href")){e.removeAttribute(t);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=Dn(""+l),e.setAttribute(t,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(t==="formAction"?(a!=="input"&&Q(e,a,"name",n.name,n,null),Q(e,a,"formEncType",n.formEncType,n,null),Q(e,a,"formMethod",n.formMethod,n,null),Q(e,a,"formTarget",n.formTarget,n,null)):(Q(e,a,"encType",n.encType,n,null),Q(e,a,"method",n.method,n,null),Q(e,a,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=Dn(""+l),e.setAttribute(t,l);break;case"onClick":l!=null&&(e.onclick=pa);break;case"onScroll":l!=null&&R("scroll",e);break;case"onScrollEnd":l!=null&&R("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(y(61));if(t=l.__html,t!=null){if(n.children!=null)throw Error(y(60));e.innerHTML=t}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}t=Dn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""+l):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":l===!0?e.setAttribute(t,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,l):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(t,l):e.removeAttribute(t);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(t):e.setAttribute(t,l);break;case"popover":R("beforetoggle",e),R("toggle",e),Cn(e,"popover",l);break;case"xlinkActuate":sa(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":sa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":sa(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":sa(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":sa(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":sa(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":sa(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":sa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":sa(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Cn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=dh.get(t)||t,Cn(e,t,l))}}function ds(e,a,t,l,n,i){switch(t){case"style":Xr(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(y(61));if(t=l.__html,t!=null){if(n.children!=null)throw Error(y(60));e.innerHTML=t}}break;case"children":typeof l=="string"?$t(e,l):(typeof l=="number"||typeof l=="bigint")&&$t(e,""+l);break;case"onScroll":l!=null&&R("scroll",e);break;case"onScrollEnd":l!=null&&R("scrollend",e);break;case"onClick":l!=null&&(e.onclick=pa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Br.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(n=t.endsWith("Capture"),a=t.slice(2,n?t.length-7:void 0),i=e[Oe]||null,i=i!=null?i[t]:null,typeof i=="function"&&e.removeEventListener(a,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(a,l,n);break e}t in e?e[t]=l:l===!0?e.setAttribute(t,""):Cn(e,t,l)}}}function be(e,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":R("error",e),R("load",e);var l=!1,n=!1,i;for(i in t)if(t.hasOwnProperty(i)){var s=t[i];if(s!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(y(137,a));default:Q(e,a,i,s,t,null)}}n&&Q(e,a,"srcSet",t.srcSet,t,null),l&&Q(e,a,"src",t.src,t,null);return;case"input":R("invalid",e);var u=i=s=n=null,o=null,d=null;for(l in t)if(t.hasOwnProperty(l)){var g=t[l];if(g!=null)switch(l){case"name":n=g;break;case"type":s=g;break;case"checked":o=g;break;case"defaultChecked":d=g;break;case"value":i=g;break;case"defaultValue":u=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(y(137,a));break;default:Q(e,a,l,g,t,null)}}Lr(e,i,u,o,d,s,n,!1);return;case"select":R("invalid",e),l=s=i=null;for(n in t)if(t.hasOwnProperty(n)&&(u=t[n],u!=null))switch(n){case"value":i=u;break;case"defaultValue":s=u;break;case"multiple":l=u;default:Q(e,a,n,u,t,null)}a=i,t=s,e.multiple=!!l,a!=null?qt(e,!!l,a,!1):t!=null&&qt(e,!!l,t,!0);return;case"textarea":R("invalid",e),i=n=l=null;for(s in t)if(t.hasOwnProperty(s)&&(u=t[s],u!=null))switch(s){case"value":l=u;break;case"defaultValue":n=u;break;case"children":i=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(y(91));break;default:Q(e,a,s,u,t,null)}Gr(e,l,n,i);return;case"option":for(o in t)if(t.hasOwnProperty(o)&&(l=t[o],l!=null))switch(o){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Q(e,a,o,l,t,null)}return;case"dialog":R("beforetoggle",e),R("toggle",e),R("cancel",e),R("close",e);break;case"iframe":case"object":R("load",e);break;case"video":case"audio":for(l=0;l<Kl.length;l++)R(Kl[l],e);break;case"image":R("error",e),R("load",e);break;case"details":R("toggle",e);break;case"embed":case"source":case"link":R("error",e),R("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in t)if(t.hasOwnProperty(d)&&(l=t[d],l!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(y(137,a));default:Q(e,a,d,l,t,null)}return;default:if(Hs(a)){for(g in t)t.hasOwnProperty(g)&&(l=t[g],l!==void 0&&ds(e,a,g,l,t,void 0));return}}for(u in t)t.hasOwnProperty(u)&&(l=t[u],l!=null&&Q(e,a,u,l,t,null))}function Yp(e,a,t,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,s=null,u=null,o=null,d=null,g=null;for(p in t){var v=t[p];if(t.hasOwnProperty(p)&&v!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":o=v;default:l.hasOwnProperty(p)||Q(e,a,p,null,l,v)}}for(var f in l){var p=l[f];if(v=t[f],l.hasOwnProperty(f)&&(p!=null||v!=null))switch(f){case"type":i=p;break;case"name":n=p;break;case"checked":d=p;break;case"defaultChecked":g=p;break;case"value":s=p;break;case"defaultValue":u=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(y(137,a));break;default:p!==v&&Q(e,a,f,p,l,v)}}Bc(e,s,u,o,d,g,i,n);return;case"select":p=s=u=f=null;for(i in t)if(o=t[i],t.hasOwnProperty(i)&&o!=null)switch(i){case"value":break;case"multiple":p=o;default:l.hasOwnProperty(i)||Q(e,a,i,null,l,o)}for(n in l)if(i=l[n],o=t[n],l.hasOwnProperty(n)&&(i!=null||o!=null))switch(n){case"value":f=i;break;case"defaultValue":u=i;break;case"multiple":s=i;default:i!==o&&Q(e,a,n,i,l,o)}a=u,t=s,l=p,f!=null?qt(e,!!t,f,!1):!!l!=!!t&&(a!=null?qt(e,!!t,a,!0):qt(e,!!t,t?[]:"",!1));return;case"textarea":p=f=null;for(u in t)if(n=t[u],t.hasOwnProperty(u)&&n!=null&&!l.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:Q(e,a,u,null,l,n)}for(s in l)if(n=l[s],i=t[s],l.hasOwnProperty(s)&&(n!=null||i!=null))switch(s){case"value":f=n;break;case"defaultValue":p=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(y(91));break;default:n!==i&&Q(e,a,s,n,l,i)}qr(e,f,p);return;case"option":for(var b in t)if(f=t[b],t.hasOwnProperty(b)&&f!=null&&!l.hasOwnProperty(b))switch(b){case"selected":e.selected=!1;break;default:Q(e,a,b,null,l,f)}for(o in l)if(f=l[o],p=t[o],l.hasOwnProperty(o)&&f!==p&&(f!=null||p!=null))switch(o){case"selected":e.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:Q(e,a,o,f,l,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var S in t)f=t[S],t.hasOwnProperty(S)&&f!=null&&!l.hasOwnProperty(S)&&Q(e,a,S,null,l,f);for(d in l)if(f=l[d],p=t[d],l.hasOwnProperty(d)&&f!==p&&(f!=null||p!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(y(137,a));break;default:Q(e,a,d,f,l,p)}return;default:if(Hs(a)){for(var H in t)f=t[H],t.hasOwnProperty(H)&&f!==void 0&&!l.hasOwnProperty(H)&&ds(e,a,H,void 0,l,f);for(g in l)f=l[g],p=t[g],!l.hasOwnProperty(g)||f===p||f===void 0&&p===void 0||ds(e,a,g,f,l,p);return}}for(var m in t)f=t[m],t.hasOwnProperty(m)&&f!=null&&!l.hasOwnProperty(m)&&Q(e,a,m,null,l,f);for(v in l)f=l[v],p=t[v],!l.hasOwnProperty(v)||f===p||f==null&&p==null||Q(e,a,v,f,l,p)}function Lo(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Lp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,t=performance.getEntriesByType("resource"),l=0;l<t.length;l++){var n=t[l],i=n.transferSize,s=n.initiatorType,u=n.duration;if(i&&u&&Lo(s)){for(s=0,u=n.responseEnd,l+=1;l<t.length;l++){var o=t[l],d=o.startTime;if(d>u)break;var g=o.transferSize,v=o.initiatorType;g&&Lo(v)&&(o=o.responseEnd,s+=g*(o<u?1:(u-d)/(o-d)))}if(--l,a+=8*(i+s)/(n.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ms=null,hs=null;function hi(e){return e.nodeType===9?e:e.ownerDocument}function qo(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Jd(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function ps(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Sc=null;function qp(){var e=window.event;return e&&e.type==="popstate"?e===Sc?!1:(Sc=e,!0):(Sc=null,!1)}var $d=typeof setTimeout=="function"?setTimeout:void 0,Gp=typeof clearTimeout=="function"?clearTimeout:void 0,Go=typeof Promise=="function"?Promise:void 0,Xp=typeof queueMicrotask=="function"?queueMicrotask:typeof Go<"u"?function(e){return Go.resolve(null).then(e).catch(Qp)}:$d;function Qp(e){setTimeout(function(){throw e})}function Pa(e){return e==="head"}function Xo(e,a){var t=a,l=0;do{var n=t.nextSibling;if(e.removeChild(t),n&&n.nodeType===8)if(t=n.data,t==="/$"||t==="/&"){if(l===0){e.removeChild(n),ll(a);return}l--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")l++;else if(t==="html")Bl(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Bl(t);for(var i=t.firstChild;i;){var s=i.nextSibling,u=i.nodeName;i[tn]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&i.rel.toLowerCase()==="stylesheet"||t.removeChild(i),i=s}}else t==="body"&&Bl(e.ownerDocument.body);t=n}while(t);ll(a)}function Qo(e,a){var t=e;e=0;do{var l=t.nextSibling;if(t.nodeType===1?a?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(a?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=l}while(t)}function gs(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":gs(t),Us(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function Vp(e,a,t,l){for(;e.nodeType===1;){var n=t;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[tn])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=We(e.nextSibling),e===null)break}return null}function Zp(e,a,t){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=We(e.nextSibling),e===null))return null;return e}function Wd(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=We(e.nextSibling),e===null))return null;return e}function vs(e){return e.data==="$?"||e.data==="$~"}function xs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Kp(e,a){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||t.readyState!=="loading")a();else{var l=function(){a(),t.removeEventListener("DOMContentLoaded",l)};t.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function We(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var ys=null;function Vo(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(a===0)return We(e.nextSibling);a--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||a++}e=e.nextSibling}return null}function Zo(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(a===0)return e;a--}else t!=="/$"&&t!=="/&"||a++}e=e.previousSibling}return null}function Fd(e,a,t){switch(a=hi(t),e){case"html":if(e=a.documentElement,!e)throw Error(y(452));return e;case"head":if(e=a.head,!e)throw Error(y(453));return e;case"body":if(e=a.body,!e)throw Error(y(454));return e;default:throw Error(y(451))}}function Bl(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Us(e)}var Fe=new Map,Ko=new Set;function pi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ea=q.d;q.d={f:Jp,r:$p,D:Wp,C:Fp,L:Ip,m:Pp,X:a0,S:e0,M:t0};function Jp(){var e=Ea.f(),a=wi();return e||a}function $p(e){var a=cl(e);a!==null&&a.tag===5&&a.type==="form"?Qf(a):Ea.r(e)}var rl=typeof document>"u"?null:document;function Id(e,a,t){var l=rl;if(l&&typeof a=="string"&&a){var n=Ze(a);n='link[rel="'+e+'"][href="'+n+'"]',typeof t=="string"&&(n+='[crossorigin="'+t+'"]'),Ko.has(n)||(Ko.add(n),e={rel:e,crossOrigin:t,href:a},l.querySelector(n)===null&&(a=l.createElement("link"),be(a,"link",e),he(a),l.head.appendChild(a)))}}function Wp(e){Ea.D(e),Id("dns-prefetch",e,null)}function Fp(e,a){Ea.C(e,a),Id("preconnect",e,a)}function Ip(e,a,t){Ea.L(e,a,t);var l=rl;if(l&&e&&a){var n='link[rel="preload"][as="'+Ze(a)+'"]';a==="image"&&t&&t.imageSrcSet?(n+='[imagesrcset="'+Ze(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(n+='[imagesizes="'+Ze(t.imageSizes)+'"]')):n+='[href="'+Ze(e)+'"]';var i=n;switch(a){case"style":i=tl(e);break;case"script":i=fl(e)}Fe.has(i)||(e=P({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:e,as:a},t),Fe.set(i,e),l.querySelector(n)!==null||a==="style"&&l.querySelector(on(i))||a==="script"&&l.querySelector(rn(i))||(a=l.createElement("link"),be(a,"link",e),he(a),l.head.appendChild(a)))}}function Pp(e,a){Ea.m(e,a);var t=rl;if(t&&e){var l=a&&typeof a.as=="string"?a.as:"script",n='link[rel="modulepreload"][as="'+Ze(l)+'"][href="'+Ze(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=fl(e)}if(!Fe.has(i)&&(e=P({rel:"modulepreload",href:e},a),Fe.set(i,e),t.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(rn(i)))return}l=t.createElement("link"),be(l,"link",e),he(l),t.head.appendChild(l)}}}function e0(e,a,t){Ea.S(e,a,t);var l=rl;if(l&&e){var n=Lt(l).hoistableStyles,i=tl(e);a=a||"default";var s=n.get(i);if(!s){var u={loading:0,preload:null};if(s=l.querySelector(on(i)))u.loading=5;else{e=P({rel:"stylesheet",href:e,"data-precedence":a},t),(t=Fe.get(i))&&yu(e,t);var o=s=l.createElement("link");he(o),be(o,"link",e),o._p=new Promise(function(d,g){o.onload=d,o.onerror=g}),o.addEventListener("load",function(){u.loading|=1}),o.addEventListener("error",function(){u.loading|=2}),u.loading|=4,qn(s,a,l)}s={type:"stylesheet",instance:s,count:1,state:u},n.set(i,s)}}}function a0(e,a){Ea.X(e,a);var t=rl;if(t&&e){var l=Lt(t).hoistableScripts,n=fl(e),i=l.get(n);i||(i=t.querySelector(rn(n)),i||(e=P({src:e,async:!0},a),(a=Fe.get(n))&&bu(e,a),i=t.createElement("script"),he(i),be(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function t0(e,a){Ea.M(e,a);var t=rl;if(t&&e){var l=Lt(t).hoistableScripts,n=fl(e),i=l.get(n);i||(i=t.querySelector(rn(n)),i||(e=P({src:e,async:!0,type:"module"},a),(a=Fe.get(n))&&bu(e,a),i=t.createElement("script"),he(i),be(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Jo(e,a,t,l){var n=(n=Ya.current)?pi(n):null;if(!n)throw Error(y(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(a=tl(t.href),t=Lt(n).hoistableStyles,l=t.get(a),l||(l={type:"style",instance:null,count:0,state:null},t.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=tl(t.href);var i=Lt(n).hoistableStyles,s=i.get(e);if(s||(n=n.ownerDocument||n,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,s),(i=n.querySelector(on(e)))&&!i._p&&(s.instance=i,s.state.loading=5),Fe.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Fe.set(e,t),i||l0(n,e,t,s.state))),a&&l===null)throw Error(y(528,""));return s}if(a&&l!==null)throw Error(y(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=fl(t),t=Lt(n).hoistableScripts,l=t.get(a),l||(l={type:"script",instance:null,count:0,state:null},t.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(y(444,e))}}function tl(e){return'href="'+Ze(e)+'"'}function on(e){return'link[rel="stylesheet"]['+e+"]"}function Pd(e){return P({},e,{"data-precedence":e.precedence,precedence:null})}function l0(e,a,t,l){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=e.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),be(a,"link",t),he(a),e.head.appendChild(a))}function fl(e){return'[src="'+Ze(e)+'"]'}function rn(e){return"script[async]"+e}function $o(e,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var l=e.querySelector('style[data-href~="'+Ze(t.href)+'"]');if(l)return a.instance=l,he(l),l;var n=P({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),he(l),be(l,"style",n),qn(l,t.precedence,e),a.instance=l;case"stylesheet":n=tl(t.href);var i=e.querySelector(on(n));if(i)return a.state.loading|=4,a.instance=i,he(i),i;l=Pd(t),(n=Fe.get(n))&&yu(l,n),i=(e.ownerDocument||e).createElement("link"),he(i);var s=i;return s._p=new Promise(function(u,o){s.onload=u,s.onerror=o}),be(i,"link",l),a.state.loading|=4,qn(i,t.precedence,e),a.instance=i;case"script":return i=fl(t.src),(n=e.querySelector(rn(i)))?(a.instance=n,he(n),n):(l=t,(n=Fe.get(i))&&(l=P({},t),bu(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),he(n),be(n,"link",l),e.head.appendChild(n),a.instance=n);case"void":return null;default:throw Error(y(443,a.type))}else a.type==="stylesheet"&&!(a.state.loading&4)&&(l=a.instance,a.state.loading|=4,qn(l,t.precedence,e));return a.instance}function qn(e,a,t){for(var l=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,s=0;s<l.length;s++){var u=l[s];if(u.dataset.precedence===a)i=u;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(e,a.firstChild))}function yu(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function bu(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var Gn=null;function Wo(e,a,t){if(Gn===null){var l=new Map,n=Gn=new Map;n.set(t,l)}else n=Gn,l=n.get(t),l||(l=new Map,n.set(t,l));if(l.has(e))return l;for(l.set(e,null),t=t.getElementsByTagName(e),n=0;n<t.length;n++){var i=t[n];if(!(i[tn]||i[ve]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(a)||"";s=e+s;var u=l.get(s);u?u.push(i):l.set(s,[i])}}return l}function Fo(e,a,t){e=e.ownerDocument||e,e.head.insertBefore(t,a==="title"?e.querySelector("head > title"):null)}function n0(e,a,t){if(t===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function em(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function i0(e,a,t,l){if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&!(t.state.loading&4)){if(t.instance===null){var n=tl(l.href),i=a.querySelector(on(n));if(i){a=i._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=gi.bind(e),a.then(e,e)),t.state.loading|=4,t.instance=i,he(i);return}i=a.ownerDocument||a,l=Pd(l),(n=Fe.get(n))&&yu(l,n),i=i.createElement("link"),he(i);var s=i;s._p=new Promise(function(u,o){s.onload=u,s.onerror=o}),be(i,"link",l),t.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,a),(a=t.state.preload)&&!(t.state.loading&3)&&(e.count++,t=gi.bind(e),a.addEventListener("load",t),a.addEventListener("error",t))}}var zc=0;function c0(e,a){return e.stylesheets&&e.count===0&&Xn(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var l=setTimeout(function(){if(e.stylesheets&&Xn(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+a);0<e.imgBytes&&zc===0&&(zc=62500*Lp());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xn(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>zc?50:800)+a);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function gi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xn(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var vi=null;function Xn(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,vi=new Map,a.forEach(s0,e),vi=null,gi.call(e))}function s0(e,a){if(!(a.state.loading&4)){var t=vi.get(e);if(t)var l=t.get(null);else{t=new Map,vi.set(e,t);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var s=n[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(t.set(s.dataset.precedence,s),l=s)}l&&t.set(null,l)}n=a.instance,s=n.getAttribute("data-precedence"),i=t.get(s)||l,i===l&&t.set(null,n),t.set(s,n),this.count++,l=gi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),a.state.loading|=4}}var $l={$$typeof:ha,Provider:null,Consumer:null,_currentValue:ct,_currentValue2:ct,_threadCount:0};function u0(e,a,t,l,n,i,s,u,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ki(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ki(0),this.hiddenUpdates=Ki(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function am(e,a,t,l,n,i,s,u,o,d,g,v){return e=new u0(e,a,t,s,o,d,g,v,u),a=1,i===!0&&(a|=24),i=Re(3,null,null,a),e.current=i,i.stateNode=e,a=Zs(),a.refCount++,e.pooledCache=a,a.refCount++,i.memoizedState={element:l,isDehydrated:t,cache:a},$s(i),e}function tm(e){return e?(e=wt,e):wt}function lm(e,a,t,l,n,i){n=tm(n),l.context===null?l.context=n:l.pendingContext=n,l=qa(a),l.payload={element:t},i=i===void 0?null:i,i!==null&&(l.callback=i),t=Ga(e,l,a),t!==null&&(Me(t,e,a),Ol(t,e,a))}function Io(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<a?t:a}}function Nu(e,a){Io(e,a),(e=e.alternate)&&Io(e,a)}function nm(e){if(e.tag===13||e.tag===31){var a=yt(e,67108864);a!==null&&Me(a,e,67108864),Nu(e,67108864)}}function Po(e){if(e.tag===13||e.tag===31){var a=ke();a=_s(a);var t=yt(e,a);t!==null&&Me(t,e,a),Nu(e,a)}}var xi=!0;function o0(e,a,t,l){var n=E.T;E.T=null;var i=q.p;try{q.p=2,ju(e,a,t,l)}finally{q.p=i,E.T=n}}function r0(e,a,t,l){var n=E.T;E.T=null;var i=q.p;try{q.p=8,ju(e,a,t,l)}finally{q.p=i,E.T=n}}function ju(e,a,t,l){if(xi){var n=bs(l);if(n===null)jc(e,a,l,yi,t),er(e,l);else if(d0(n,e,a,t,l))l.stopPropagation();else if(er(e,l),a&4&&-1<f0.indexOf(e)){for(;n!==null;){var i=cl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=lt(i.pendingLanes);if(s!==0){var u=i;for(u.pendingLanes|=2,u.entangledLanes|=2;s;){var o=1<<31-Be(s);u.entanglements[1]|=o,s&=~o}ca(i),!(L&6)&&(ui=He()+500,un(0))}}break;case 31:case 13:u=yt(i,2),u!==null&&Me(u,i,2),wi(),Nu(i,2)}if(i=bs(l),i===null&&jc(e,a,l,yi,t),i===n)break;n=i}n!==null&&l.stopPropagation()}else jc(e,a,l,null,t)}}function bs(e){return e=ws(e),Su(e)}var yi=null;function Su(e){if(yi=null,e=Ct(e),e!==null){var a=Il(e);if(a===null)e=null;else{var t=a.tag;if(t===13){if(e=Sr(a),e!==null)return e;e=null}else if(t===31){if(e=zr(a),e!==null)return e;e=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return yi=e,null}function im(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Wm()){case Mr:return 2;case Or:return 8;case Jn:case Fm:return 32;case Cr:return 268435456;default:return 32}default:return 32}}var Ns=!1,Va=null,Za=null,Ka=null,Wl=new Map,Fl=new Map,Ra=[],f0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function er(e,a){switch(e){case"focusin":case"focusout":Va=null;break;case"dragenter":case"dragleave":Za=null;break;case"mouseover":case"mouseout":Ka=null;break;case"pointerover":case"pointerout":Wl.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fl.delete(a.pointerId)}}function xl(e,a,t,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:a,domEventName:t,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},a!==null&&(a=cl(a),a!==null&&nm(a)),e):(e.eventSystemFlags|=l,a=e.targetContainers,n!==null&&a.indexOf(n)===-1&&a.push(n),e)}function d0(e,a,t,l,n){switch(a){case"focusin":return Va=xl(Va,e,a,t,l,n),!0;case"dragenter":return Za=xl(Za,e,a,t,l,n),!0;case"mouseover":return Ka=xl(Ka,e,a,t,l,n),!0;case"pointerover":var i=n.pointerId;return Wl.set(i,xl(Wl.get(i)||null,e,a,t,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Fl.set(i,xl(Fl.get(i)||null,e,a,t,l,n)),!0}return!1}function cm(e){var a=Ct(e.target);if(a!==null){var t=Il(a);if(t!==null){if(a=t.tag,a===13){if(a=Sr(t),a!==null){e.blockedOn=a,Bu(e.priority,function(){Po(t)});return}}else if(a===31){if(a=zr(t),a!==null){e.blockedOn=a,Bu(e.priority,function(){Po(t)});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qn(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var t=bs(e.nativeEvent);if(t===null){t=e.nativeEvent;var l=new t.constructor(t.type,t);Yc=l,t.target.dispatchEvent(l),Yc=null}else return a=cl(t),a!==null&&nm(a),e.blockedOn=t,!1;a.shift()}return!0}function ar(e,a,t){Qn(e)&&t.delete(a)}function m0(){Ns=!1,Va!==null&&Qn(Va)&&(Va=null),Za!==null&&Qn(Za)&&(Za=null),Ka!==null&&Qn(Ka)&&(Ka=null),Wl.forEach(ar),Fl.forEach(ar)}function Tn(e,a){e.blockedOn===a&&(e.blockedOn=null,Ns||(Ns=!0,fe.unstable_scheduleCallback(fe.unstable_NormalPriority,m0)))}var Mn=null;function tr(e){Mn!==e&&(Mn=e,fe.unstable_scheduleCallback(fe.unstable_NormalPriority,function(){Mn===e&&(Mn=null);for(var a=0;a<e.length;a+=3){var t=e[a],l=e[a+1],n=e[a+2];if(typeof l!="function"){if(Su(l||t)===null)continue;break}var i=cl(t);i!==null&&(e.splice(a,3),a-=3,as(i,{pending:!0,data:n,method:t.method,action:l},l,n))}}))}function ll(e){function a(o){return Tn(o,e)}Va!==null&&Tn(Va,e),Za!==null&&Tn(Za,e),Ka!==null&&Tn(Ka,e),Wl.forEach(a),Fl.forEach(a);for(var t=0;t<Ra.length;t++){var l=Ra[t];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ra.length&&(t=Ra[0],t.blockedOn===null);)cm(t),t.blockedOn===null&&Ra.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(l=0;l<t.length;l+=3){var n=t[l],i=t[l+1],s=n[Oe]||null;if(typeof i=="function")s||tr(t);else if(s){var u=null;if(i&&i.hasAttribute("formAction")){if(n=i,s=i[Oe]||null)u=s.formAction;else if(Su(n)!==null)continue}else u=s.action;typeof u=="function"?t[l+1]=u:(t.splice(l,3),l-=3),tr(t)}}}function sm(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(s){return n=s})},focusReset:"manual",scroll:"manual"})}function a(){n!==null&&(n(),n=null),l||setTimeout(t,20)}function t(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(t,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),n!==null&&(n(),n=null)}}}function zu(e){this._internalRoot=e}Yi.prototype.render=zu.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(y(409));var t=a.current,l=ke();lm(t,l,e,a,null,null)};Yi.prototype.unmount=zu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;lm(e.current,2,null,e,null,null),wi(),a[il]=null}};function Yi(e){this._internalRoot=e}Yi.prototype.unstable_scheduleHydration=function(e){if(e){var a=Hr();e={blockedOn:null,target:e,priority:a};for(var t=0;t<Ra.length&&a!==0&&a<Ra[t].priority;t++);Ra.splice(t,0,e),t===0&&cm(e)}};var lr=Nr.version;if(lr!=="19.2.8")throw Error(y(527,lr,"19.2.8"));q.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Xm(a),e=e!==null?Er(e):null,e=e===null?null:e.stateNode,e};var h0={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:E,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var On=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!On.isDisabled&&On.supportsFiber)try{Pl=On.inject(h0),we=On}catch{}}ji.createRoot=function(e,a){if(!jr(e))throw Error(y(299));var t=!1,l="",n=If,i=Pf,s=ed;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError)),a=am(e,1,!1,null,null,t,l,null,n,i,s,sm),e[il]=a.current,xu(e),new zu(a)};ji.hydrateRoot=function(e,a,t){if(!jr(e))throw Error(y(299));var l=!1,n="",i=If,s=Pf,u=ed,o=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError),t.formState!==void 0&&(o=t.formState)),a=am(e,1,!0,a,t??null,l,n,o,i,s,u,sm),a.context=tm(null),t=a.current,l=ke(),l=_s(l),n=qa(l),n.callback=null,Ga(t,n,l),t=l,a.current.lanes=t,an(a,t),ca(a),e[il]=a.current,xu(e),new Yi(a)};ji.version="19.2.8";function um(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(um)}catch(e){console.error(e)}}um(),pr.exports=ji;var p0=pr.exports;/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=(...e)=>e.filter((a,t,l)=>!!a&&a.trim()!==""&&l.indexOf(a)===t).join(" ").trim();/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,t,l)=>l?l.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=e=>{const a=v0(e);return a.charAt(0).toUpperCase()+a.slice(1)};/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ec={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=e=>{for(const a in e)if(a.startsWith("aria-")||a==="role"||a==="title")return!0;return!1},y0=J.createContext({}),b0=()=>J.useContext(y0),N0=J.forwardRef(({color:e,size:a,strokeWidth:t,absoluteStrokeWidth:l,className:n="",children:i,iconNode:s,...u},o)=>{const{size:d=24,strokeWidth:g=2,absoluteStrokeWidth:v=!1,color:f="currentColor",className:p=""}=b0()??{},b=l??v?Number(t??g)*24/Number(a??d):t??g;return J.createElement("svg",{ref:o,...Ec,width:a??d??Ec.width,height:a??d??Ec.height,stroke:e??f,strokeWidth:b,className:om("lucide",p,n),...!i&&!x0(u)&&{"aria-hidden":"true"},...u},[...s.map(([S,H])=>J.createElement(S,H)),...Array.isArray(i)?i:[i]])});/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=(e,a)=>{const t=J.forwardRef(({className:l,...n},i)=>J.createElement(N0,{ref:i,iconNode:a,className:om(`lucide-${g0(nr(e))}`,`lucide-${e}`,l),...n}));return t.displayName=nr(e),t};/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]],S0=Y("arrow-down-right",j0);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],E0=Y("arrow-right",z0);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Eu=Y("arrow-up-right",A0);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],rm=Y("award",T0);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]],O0=Y("book-open",M0);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],D0=Y("building-2",C0);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]],R0=Y("calendar",_0);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],H0=Y("check",U0);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],B0=Y("chevron-left",w0);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Y0=Y("chevron-right",k0);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],q0=Y("circle-alert",L0);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],fm=Y("circle-check",G0);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],Q0=Y("clock",X0);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]],Au=Y("compass",V0);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],K0=Y("cpu",Z0);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]],$0=Y("crosshair",J0);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],js=Y("download",W0);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],I0=Y("eye",F0);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=[["path",{d:"M14.086 18.412A2 2 0 0112.67 19H5v-7.672a2 2 0 01.586-1.414L11.75 3.75a6 6 0 118.49 8.49z",key:"1nq9jb"}],["path",{d:"M16 8 2 22",key:"vp34q"}],["path",{d:"M17.488 15H9",key:"16yirz"}]],eg=Y("feather",P0);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],tg=Y("file-text",ag);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],ng=Y("funnel",lg);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],dm=Y("globe",ig);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],sg=Y("graduation-cap",cg);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],og=Y("layers",ug);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],fg=Y("layout-grid",rg);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],mm=Y("mail",dg);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Nt=Y("map-pin",mg);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],pg=Y("phone",hg);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],vg=Y("printer",gg);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],yg=Y("send",xg);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Tu=Y("sparkles",bg);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],jg=Y("wrench",Ng);/**
 * @license lucide-react v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],bi=Y("x",Sg),V={name:"Adrian Vale",profession:"Architect & Spatial Designer",specialization:"Sustainable Architecture, Urban Spaces & Human-Centered Design",experienceYears:"11+ Years",location:"Copenhagen, Denmark",tagline:"Designing spaces where people, nature, and cities can coexist.",heroStatement:"An independent architect focused on sustainable environments, public spaces, and architecture shaped by human experience.",coordinates:"55.6761° N, 12.5683° E",gridRef:"GRID / A-04",profileYear:"PROFILE / 2026",locationTag:"COPENHAGEN / DK",email:"hello@adrianvale.example",phone:"+45 31 92 84 00",studioAddress:"Strandgade 44, 1401 København K, Denmark",disclaimer:"Fictional Resume/CV template created for demonstration purposes. All names, organizations, projects, images, and content are fictional."},zt={sectionNum:"01",title:"The Practice",quote:"Architecture should belong to its surroundings before it belongs to itself.",essay:"In an era of accelerating climate transformation and urban density, my practice champions a return to material honesty, micro-climatic intelligence, and civic intimacy. I approach architecture not as an isolated sculptural object, but as a living spatial canvas—one that listens to prevailing coastal winds, captures low Nordic sunlight, and encourages unscripted human connection. Every project begins with rigorous environmental research before a single line is drawn.",materialImage:"/images/philosophy.jpg",principles:[{number:"01",title:"PLACE",subtitle:"Contextual Environmental Integration",description:"Understanding the environment before designing within it. Conducting solar analysis, wind vector modeling, and regional material mapping."},{number:"02",title:"PEOPLE",subtitle:"Human-Centered Spatial Flow",description:"Creating spaces shaped around human behavior, tactile warmth, and experience. Prioritizing spatial clarity, natural acoustics, and intuitive navigation."},{number:"03",title:"TIME",subtitle:"Adaptive Circular Longevity",description:"Designing architecture that can gracefully adapt, age, and remain meaningful over decades through modular construction and circular materials."}]},Ss=[{id:"proj-01",num:"01",name:"NORDHAVEN COMMONS",category:"Mixed-Use",type:"Mixed-Use Community Space",year:"2025",location:"Nordhaven District, Copenhagen, DK",status:"Under Construction (Completion 2026)",image:"/images/nordhaven.jpg",shortDescription:"A fictional community-focused mixed-use environment designed around shared courtyards, natural daylighting, and adaptable public gathering spaces.",fullOverview:"Nordhaven Commons reinvents the traditional Scandinavian harbor block into an open civic ecosystem. Composed of mass-timber volumes surrounding a microclimate-protected public garden, the project integrates public workshops, organic market stalls, co-working studios, and 48 low-carbon residences.",designConcept:"Passive solar thermal chimneying and timber colonnades frame views of the harbor while shielding exterior seating from harsh northern sea breezes.",materials:["Cross-Laminated Timber","Triple Low-E Glazing","Recycled Basalt Paving","Zinc Roofing"],metrics:{area:"14,200 m²",carbonReduction:"58% Embodied CO₂",energyRating:"Net Zero Operational",yearCompleted:"2025-2026"},diagrams:[{label:"AXONOMETRIC SOLAR CHIMNEY",detail:"Natural convective air movement through central atrium"},{label:"TIMBER JOINERY SPECIFICATION",detail:"Glue-free demountable timber-to-steel node joints"}]},{id:"proj-02",num:"02",name:"THE VERDE LIBRARY",category:"Cultural",type:"Public Cultural Space",year:"2024",location:"Østerbro, Copenhagen, DK",status:"Completed",image:"/images/verde.jpg",shortDescription:"A fictional public library integrating landscape, cascading daylight, acoustic wood volumes, and community learning spaces.",fullOverview:"Designed as a 'living room for the city,' The Verde Library bridges a public municipal park with a historic neighborhood. Featuring a multi-story indoor botanical atrium, quiet subterranean reading vaults, and flexible media labs, the interior creates a seamless sensory transition between nature and literature.",designConcept:"Light-funneling skylights direct soft north light deep into reading zones, eliminating harsh glare while fostering deep concentration.",materials:["Danish White Ash","Acoustic Recycled Wood Fiber","Structural Double Glass","Living Hydroponic Moss Panels"],metrics:{area:"8,500 m²",carbonReduction:"44% Embodied CO₂",energyRating:"Nordic Swan Certified",yearCompleted:"2024"},diagrams:[{label:"DAYLIGHT LUX MAPPING",detail:"Uniform 450 Lux diffuse light distribution"},{label:"ACOUSTIC INSULATION BUFFER",detail:"Triple-layer sound attenuation wall assemblies"}]},{id:"proj-03",num:"03",name:"TIDEHOUSE",category:"Residential",type:"Coastal Residential Architecture",year:"2023",location:"Skagen Coastline, Denmark",status:"Built",image:"/images/tidehouse.jpg",shortDescription:"A fictional coastal residence exploring climate-responsive monolithic concrete, dark zinc, and open spatial ocean views.",fullOverview:"Perched along the exposed granite rocks of the Skagen coast, Tidehouse is engineered to withstand extreme sea salt exposure and heavy storms while providing an ultra-serene sanctuary. Cantilevered living quarters hover above the tidal zone, framing uninterrupted views of the Kattegat horizon.",designConcept:"A dual-wing geometry buffers cold North Sea winds on the seaward facade while carving out a sunlit, sheltered south-facing inner patio.",materials:["Board-Formed Concrete","Pre-Weathered Dark Zinc","Thermally Modified Ash Decking","Triple-Pane Marine Glass"],metrics:{area:"420 m²",carbonReduction:"35% Embodied CO₂",energyRating:"Passive House Standard",yearCompleted:"2023"},diagrams:[{label:"FOUNDATION TIDE ANCHORING",detail:"Direct granite bedrock anchor pin system"},{label:"THERMAL ENVELOPE SECTIONS",detail:"300mm continuous insulation cavity"}]},{id:"proj-04",num:"04",name:"AXIS COURTYARD",category:"Urban Renewal",type:"Urban Regeneration",year:"2022",location:"Nørrebro, Copenhagen, DK",status:"Completed",image:"/images/axis.jpg",shortDescription:"A fictional urban renewal concept focused on transforming underused industrial warehouse yards into vibrant community public plazas.",fullOverview:"Axis Courtyard adaptive-reuse masterplan revitalizes a former 19th-century textile factory site. By retaining historic red-brick facades and inserting elevated steel bridges, rainwater retention ponds, and terraced seating, the site was transformed into a thriving pedestrian district.",designConcept:"Combining historic industrial texture with refined modern transparency to foster creative industries and community gathering.",materials:["Reclaimed 1890s Red Brick","Weathered Corten Steel","Granite Cobblestone","Laminated Birch Panels"],metrics:{area:"19,800 m² Masterplan",carbonReduction:"72% Saved vs Demolition",energyRating:"BREEAM Outstanding",yearCompleted:"2022"},diagrams:[{label:"RAINWATER DRAINAGE RUNOFF",detail:"100% onsite storm water bio-swale retention"},{label:"FACADE STABILIZATION TRUSS",detail:"Historic brick wall bracing methodology"}]},{id:"proj-05",num:"05",name:"FIELD STUDIO",category:"Workplace",type:"Creative Workspace",year:"2021",location:"Zealand Meadow, Denmark",status:"Completed",image:"/images/field.jpg",shortDescription:"A fictional low-impact workspace designed for flexible creative collaboration amidst wild Danish meadow landscapes.",fullOverview:"Constructed on a rural agrarian estate, Field Studio serves as an off-grid research lodge and architectural workshop. Utilizing locally sourced rammed earth from excavation and untreated larch timber, the structure leaves a minimal physical footprint.",designConcept:"Harmonizing building elevation with the natural meadow horizon line, allowing native wildflowers and seasonal grasses to sweep directly against glass facades.",materials:["Locally Rammed Earth","Untreated Larch Siding","Photovoltaic Roof Glass","Polished Lime Plaster"],metrics:{area:"350 m²",carbonReduction:"82% Carbon Negative Structure",energyRating:"Off-Grid Solar + Geothermal",yearCompleted:"2021"},diagrams:[{label:"RAMMED EARTH STRATIGRAPHY",detail:"Soil-binder mix ratio & thermal mass performance"},{label:"MEADOW ECOSYSTEM BUFFER",detail:"Zero-runoff peripheral drainage channel"}]}],hm=[{period:"2022 — PRESENT",role:"Lead Architect",company:"Atelier Northline",location:"Copenhagen, Denmark",type:"Fictional Architecture Practice",coordinates:"CPH / 55.68° N",description:"Heading architectural concept development and sustainable urban initiatives across Scandinavia.",responsibilities:["Leading multidisciplinary design teams on mass-timber mixed-use developments","Directing client keynote presentations, municipal zoning negotiations, and environmental approvals","Integrating parametric daylight modeling and LCA carbon accounting into early schematic phases","Mentoring 12 studio architects and establishing sustainable material specification standards"]},{period:"2018 — 2022",role:"Senior Architect",company:"Formline Collective",location:"Stockholm, Sweden",type:"Fictional Architecture Studio",coordinates:"STO / 59.32° N",description:"Managed public cultural infrastructure projects and residential masterplans.",responsibilities:["Principal design lead for public library and community space competitions","Supervised BIM coordination models (Revit/Rhino) from schematic design through site execution","Engineered high-performance building envelopes for extreme Scandinavian winter climates","Collaborated directly with structural engineers, landscape architects, and municipal planning boards"]},{period:"2015 — 2018",role:"Architectural Designer",company:"Urban Frame Studio",location:"Copenhagen, Denmark",type:"Fictional Architecture Organization",coordinates:"CPH / 55.67° N",description:"Focused on adaptive-reuse urban renewal projects and detailed facade drafting.",responsibilities:["Developed detailed CD packages, facade joinery sections, and structural detailing","Authored material sustainability audit reports for heritage building restorations","Created high-end architectural renders, physical timber models, and client presentation boards","Conducted weekly site inspections and contractor coordination meetings"]},{period:"2013 — 2015",role:"Junior Architectural Designer",company:"Contour Works",location:"Aarhus, Denmark",type:"Fictional Organization",coordinates:"AAR / 56.16° N",description:"Assisted senior partners with competition entries, physical modeling, and site analysis.",responsibilities:["Fabricated precision basswood and acrylic architectural competition models","Executed 3D CAD modeling, shadow analysis, and site topography mapping","Assisted with environmental impact documentation and client workshop prep"]}],pm=[{category:"ARCHITECTURAL DESIGN",code:"SEC / 01",skills:[{name:"Concept Development",level:"Expert",spec:"Schematic & Spatial Ideation"},{name:"Spatial Planning",level:"Expert",spec:"Volumetric Efficiency & Circulation"},{name:"Sustainable Design",level:"Expert",spec:"Passive Solar & Mass Timber"},{name:"Urban Analysis",level:"Advanced",spec:"Pedestrian Flow & Microclimate"}]},{category:"DIGITAL TOOLS",code:"SEC / 02",skills:[{name:"BIM Modeling",level:"Expert",spec:"Autodesk Revit & ArchiCAD"},{name:"3D Visualization",level:"Expert",spec:"Rhino 3D, V-Ray & Enscape"},{name:"CAD Documentation",level:"Expert",spec:"AutoCAD & Technical Sections"},{name:"Parametric Design",level:"Advanced",spec:"Grasshopper & Generative Scripts"}]},{category:"PROJECT DEVELOPMENT",code:"SEC / 03",skills:[{name:"Design Coordination",level:"Expert",spec:"MEP & Structural Integration"},{name:"Material Research",level:"Expert",spec:"Circular & Low-Carbon Spec"},{name:"Site Analysis",level:"Advanced",spec:"Topography & Solar Mapping"},{name:"Presentation Design",level:"Expert",spec:"Editorial Portfolio & Keynote"}]},{category:"PROFESSIONAL SKILLS",code:"SEC / 04",skills:[{name:"Team Leadership",level:"Expert",spec:"Studio Direction & Mentorship"},{name:"Client Communication",level:"Expert",spec:"Keynote & Stakeholder Mgmt"},{name:"Design Strategy",level:"Expert",spec:"Competition & Feasibility Lead"},{name:"Creative Direction",level:"Expert",spec:"Brand & Spatial Storytelling"}]}],gm=[{degree:"Master of Architecture (M.Arch)",institution:"Nordic Institute of Spatial Design",year:"2011 — 2013",type:"Fictional Academic Institution",location:"Copenhagen, Denmark",focus:"Sustainable Architecture & Urban Systems",thesis:"Thesis: 'Passive Solar Integration in High-Latitude Community Housing'",honors:"Graduated with First Class Distinction & Excellence Award"},{degree:"Bachelor of Architectural Studies (B.AS)",institution:"Scandinavian School of Built Environments",year:"2008 — 2011",type:"Fictional Academic Institution",location:"Aarhus, Denmark",focus:"Vernacular Construction & Material Science",thesis:"Valedictorian Project: 'Demountable Timber Joinery Systems for Reusable Structures'",honors:"Dean's Honor List (All Semesters)"}],ir={projects:[{code:"RES / 2025",title:"LIVING CITIES",year:"2025",subtitle:"Research into adaptable public environments and post-industrial urban re-wilding.",summary:"An investigation into how modular wooden structural infills can revitalize decommissioned shipping piers across Northern Europe."},{code:"RES / 2023",title:"MATERIAL FUTURES",year:"2023",subtitle:"A fictional exploration of sustainable construction materials & bio-composites.",summary:"Comparative carbon-footprint lifecycle assessment measuring rammed earth, hempcrete, and cross-laminated timber against standard concrete."},{code:"RES / 2021",title:"WATER & CITY",year:"2021",subtitle:"A fictional study about urban environments near changing coastline ecosystems.",summary:"Spatial strategies for amphibious coastal housing modules resilient to a 1.5m sea-level rise along Nordic coastlines."}],exhibitions:[{title:"Spatial Futures",location:"Copenhagen",year:"2025",role:"Lead Visual Contributor & Guest Lecturer"},{title:"Common Ground",location:"Rotterdam",year:"2023",role:"Group Exhibition on Social Housing Architecture"},{title:"Material Conversations",location:"Helsinki",year:"2021",role:"Pavilion Installation: Reclaimed Wood & Glass"}]},vm=[{year:"2025",title:"Emerging Practice Recognition",organization:"Northern Spatial Forum",location:"Stockholm, Sweden",projectRef:"Nordhaven Commons"},{year:"2024",title:"Sustainable Design Award",organization:"European Built Environment Assembly",location:"Berlin, Germany",projectRef:"The Verde Library"},{year:"2022",title:"Public Space Innovation Recognition",organization:"Urban Futures Collective",location:"Copenhagen, Denmark",projectRef:"Axis Courtyard"},{year:"2020",title:"Nordic Young Architect Fellowship",organization:"Scandinavian Architectural Trust",location:"Oslo, Norway",projectRef:"Research Portfolio"}];function zg({onOpenCV:e}){const[a,t]=J.useState(!1),[l,n]=J.useState(!1),[i,s]=J.useState("profile");J.useEffect(()=>{const d=()=>{window.scrollY>40?t(!0):t(!1);const g=["profile","practice","projects","experience","expertise","education","research","contact"],v=window.scrollY+200;for(const f of g){const p=document.getElementById(f);if(p){const b=p.offsetTop,S=p.offsetHeight;if(v>=b&&v<b+S){s(f);break}}}};return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[]);const u=[{id:"profile",label:"Profile"},{id:"practice",label:"Practice"},{id:"projects",label:"Projects"},{id:"experience",label:"Experience"},{id:"expertise",label:"Expertise"},{id:"education",label:"Education"},{id:"contact",label:"Contact"}],o=d=>{n(!1);const g=document.getElementById(d);if(g){const f=document.body.getBoundingClientRect().top,S=g.getBoundingClientRect().top-f-80;window.scrollTo({top:S,behavior:"smooth"})}};return c.jsxs(c.Fragment,{children:[c.jsx("header",{className:`sticky-nav ${a?"scrolled":""}`,children:c.jsxs("div",{className:"container nav-container",children:[c.jsxs("div",{className:"nav-brand",onClick:()=>o("profile"),children:[c.jsx("div",{className:"monogram-box",children:"AV"}),c.jsxs("div",{className:"brand-text",children:[c.jsx("span",{className:"brand-name",children:V.name}),c.jsx("span",{className:"brand-title",children:"ARCHITECT / SPATIAL DESIGNER"})]})]}),c.jsx("nav",{className:"desktop-nav",children:u.map(d=>c.jsx("button",{onClick:()=>o(d.id),className:`nav-link ${i===d.id?"active":""}`,children:d.label},d.id))}),c.jsxs("div",{className:"nav-actions",children:[c.jsxs("button",{className:"btn-outline cv-btn",onClick:e,children:[c.jsx(js,{size:14}),c.jsx("span",{children:"Download CV"})]}),c.jsx("button",{className:"mobile-toggle",onClick:()=>n(!l),"aria-label":"Toggle Navigation Menu",children:l?c.jsx(bi,{size:24}):c.jsx(Au,{size:22})})]})]})}),l&&c.jsxs("div",{className:"mobile-overlay",children:[c.jsx("div",{className:"mobile-overlay-grid"}),c.jsxs("div",{className:"mobile-overlay-header",children:[c.jsx("div",{className:"monogram-box",children:"AV"}),c.jsx("span",{className:"mono-text",children:"COPENHAGEN / DK — 2026"}),c.jsx("button",{className:"mobile-close",onClick:()=>n(!1),children:c.jsx(bi,{size:28})})]}),c.jsxs("div",{className:"mobile-nav-content",children:[c.jsx("span",{className:"section-label",children:"NAVIGATION MATRIX"}),c.jsx("nav",{className:"mobile-links",children:u.map((d,g)=>c.jsxs("button",{onClick:()=>o(d.id),className:`mobile-link ${i===d.id?"active":""}`,children:[c.jsxs("span",{className:"link-num",children:["0",g+1]}),c.jsx("span",{className:"link-text",children:d.label}),c.jsx(Eu,{size:20,className:"link-arrow"})]},d.id))}),c.jsxs("div",{className:"mobile-overlay-footer",children:[c.jsxs("button",{className:"btn-primary full-width",onClick:()=>{n(!1),e()},children:[c.jsx(js,{size:16}),c.jsx("span",{children:"DOWNLOAD COMPLETE CV"})]}),c.jsx("p",{className:"mono-text legal-note",children:V.disclaimer})]})]})]}),c.jsx("style",{children:`
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
      `})]})}function Eg({onOpenCV:e,onExploreProjects:a}){return c.jsxs("section",{id:"profile",className:"arch-section hero-section",children:[c.jsx("div",{className:"arch-grid-lines"}),c.jsxs("div",{className:"container hero-container",children:[c.jsxs("div",{className:"hero-left",children:[c.jsx("div",{className:"hero-badge",children:c.jsx("span",{className:"section-label",children:"ARCHITECT / SPATIAL DESIGNER"})}),c.jsxs("h1",{className:"hero-title display-title",children:[c.jsx("span",{className:"name-first",children:"ADRIAN"}),c.jsx("span",{className:"name-last",children:"VALE"})]}),c.jsx("div",{className:"hero-subtitle-box",children:c.jsx("p",{className:"hero-subtitle",children:V.tagline})}),c.jsxs("p",{className:"hero-statement",children:['"',V.heroStatement,'"']}),c.jsxs("div",{className:"hero-actions",children:[c.jsxs("button",{className:"btn-primary",onClick:a,children:[c.jsx("span",{children:"View Selected Projects"}),c.jsx(S0,{size:18})]}),c.jsxs("button",{className:"btn-outline",onClick:e,children:[c.jsx(js,{size:16}),c.jsx("span",{children:"Download CV"})]})]}),c.jsxs("div",{className:"hero-metadata-grid",children:[c.jsxs("div",{className:"meta-card",children:[c.jsxs("div",{className:"meta-header",children:[c.jsx(Nt,{size:14,className:"meta-icon"}),c.jsx("span",{className:"mono-text",children:"LOCATION"})]}),c.jsx("span",{className:"meta-value",children:V.location})]}),c.jsxs("div",{className:"meta-card",children:[c.jsxs("div",{className:"meta-header",children:[c.jsx(rm,{size:14,className:"meta-icon"}),c.jsx("span",{className:"mono-text",children:"EXPERIENCE"})]}),c.jsx("span",{className:"meta-value",children:V.experienceYears})]}),c.jsxs("div",{className:"meta-card full-width-meta",children:[c.jsxs("div",{className:"meta-header",children:[c.jsx(og,{size:14,className:"meta-icon"}),c.jsx("span",{className:"mono-text",children:"PRIMARY FOCUS"})]}),c.jsx("span",{className:"meta-value",children:V.specialization})]})]})]}),c.jsx("div",{className:"hero-right",children:c.jsxs("div",{className:"portrait-wrapper",children:[c.jsx("div",{className:"arch-corner-tick tick-tl"}),c.jsx("div",{className:"arch-corner-tick tick-tr"}),c.jsx("div",{className:"arch-corner-tick tick-bl"}),c.jsx("div",{className:"arch-corner-tick tick-br"}),c.jsxs("div",{className:"portrait-tag tag-top-left",children:[c.jsx($0,{size:12}),c.jsx("span",{children:V.gridRef})]}),c.jsx("div",{className:"portrait-tag tag-top-right",children:c.jsx("span",{children:V.profileYear})}),c.jsx("div",{className:"portrait-tag tag-bottom-left",children:c.jsx("span",{children:V.coordinates})}),c.jsx("div",{className:"portrait-tag tag-bottom-right",children:c.jsx("span",{children:V.locationTag})}),c.jsxs("div",{className:"portrait-image-container",children:[c.jsx("img",{src:"/images/portrait.jpg",alt:"Adrian Vale — Fictional Architect Portrait",className:"portrait-img"}),c.jsx("div",{className:"portrait-grid-overlay"})]}),c.jsx("div",{className:"portrait-caption",children:c.jsx("span",{className:"mono-text",children:"FIG 0.1 — ARCHITECTURAL STUDIO / COPENHAGEN"})})]})})]}),c.jsx("style",{children:`
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
      `})]})}function Ag(){const e=a=>a===0?c.jsx(Au,{size:20}):a===1?c.jsx(eg,{size:20}):c.jsx(Q0,{size:20});return c.jsxs("section",{id:"practice",className:"arch-section philosophy-section",children:[c.jsx("div",{className:"arch-grid-lines"}),c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header-bar",children:[c.jsxs("div",{className:"header-left",children:[c.jsx("span",{className:"section-number",children:zt.sectionNum}),c.jsxs("div",{className:"header-titles",children:[c.jsx("span",{className:"section-label",children:"PHILOSOPHY & APPROACH"}),c.jsx("h2",{className:"section-title display-title",children:zt.title})]})]}),c.jsx("div",{className:"header-line"})]}),c.jsxs("div",{className:"quote-banner",children:[c.jsx("div",{className:"quote-mark",children:"“"}),c.jsx("h3",{className:"hero-quote-text",children:zt.quote})]}),c.jsxs("div",{className:"philosophy-grid",children:[c.jsxs("div",{className:"essay-column",children:[c.jsx("h4",{className:"essay-headline",children:"Spatial design as a dialogue between natural ecology and urban culture."}),c.jsx("p",{className:"essay-paragraph",children:zt.essay}),c.jsx("p",{className:"essay-paragraph secondary",children:"By prioritizing low-carbon bio-materials, natural ventilation stacks, and circular building components, my practice delivers projects that age gracefully. We reject superficial trends in favor of structural clarity, volumetric warmth, and acoustic serenity."}),c.jsxs("div",{className:"philosophy-tags",children:[c.jsx("span",{className:"tag-item",children:"#SUSTAINABILITY"}),c.jsx("span",{className:"tag-item",children:"#MASS_TIMBER"}),c.jsx("span",{className:"tag-item",children:"#PASSIVE_SOLAR"}),c.jsx("span",{className:"tag-item",children:"#HUMAN_SCALE"})]})]}),c.jsx("div",{className:"visual-column",children:c.jsxs("div",{className:"material-image-frame",children:[c.jsx("div",{className:"arch-corner-tick tick-tl"}),c.jsx("div",{className:"arch-corner-tick tick-tr"}),c.jsx("div",{className:"arch-corner-tick tick-bl"}),c.jsx("div",{className:"arch-corner-tick tick-br"}),c.jsx("img",{src:zt.materialImage,alt:"Architectural Material Tactility Study",className:"material-img"}),c.jsxs("div",{className:"material-overlay-tag",children:[c.jsx(Tu,{size:14}),c.jsx("span",{children:"MATERIAL STUDY / OAK, CAST CONCRETE & BRONZE"})]})]})})]}),c.jsxs("div",{className:"principles-container",children:[c.jsxs("div",{className:"principles-label-row",children:[c.jsx("span",{className:"mono-text",children:"CORE PRACTICE PRINCIPLES"}),c.jsx("div",{className:"line-anim"})]}),c.jsx("div",{className:"principles-grid",children:zt.principles.map((a,t)=>c.jsxs("div",{className:"principle-card arch-card",children:[c.jsx("div",{className:"arch-corner-tick tick-tl"}),c.jsx("div",{className:"arch-corner-tick tick-tr"}),c.jsx("div",{className:"arch-corner-tick tick-bl"}),c.jsx("div",{className:"arch-corner-tick tick-br"}),c.jsxs("div",{className:"principle-top",children:[c.jsxs("span",{className:"principle-num",children:["0",t+1," — ",a.title]}),c.jsx("div",{className:"principle-icon",children:e(t)})]}),c.jsx("h4",{className:"principle-title",children:a.subtitle}),c.jsx("p",{className:"principle-desc",children:a.description})]},a.number))})]})]}),c.jsx("style",{children:`
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
      `})]})}function Tg({onSelectProject:e}){const[a,t]=J.useState("All"),[l,n]=J.useState(null),[i,s]=J.useState({x:0,y:0}),[u,o]=J.useState(!1),d=["All","Mixed-Use","Cultural","Residential","Urban Renewal","Workplace"],g=a==="All"?Ss:Ss.filter(f=>f.category===a),v=f=>{s({x:f.clientX,y:f.clientY})};return c.jsxs("section",{id:"projects",className:"arch-section projects-section",onMouseMove:v,children:[c.jsx("div",{className:"arch-grid-lines"}),u&&c.jsxs("div",{className:"custom-cursor-tag",style:{left:`${i.x}px`,top:`${i.y}px`},children:[c.jsx(I0,{size:12}),c.jsxs("span",{children:["EXPLORE ",l==null?void 0:l.num]})]}),c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header-bar",children:[c.jsxs("div",{className:"header-left",children:[c.jsx("span",{className:"section-number",children:"02"}),c.jsxs("div",{className:"header-titles",children:[c.jsx("span",{className:"section-label",children:"SELECTED WORKS"}),c.jsx("h2",{className:"section-title display-title",children:"Featured Projects"})]})]}),c.jsx("div",{className:"header-line"})]}),c.jsxs("div",{className:"filter-bar",children:[c.jsxs("div",{className:"filter-label",children:[c.jsx(ng,{size:14}),c.jsx("span",{className:"mono-text",children:"FILTER BY TYPOLOGY:"})]}),c.jsx("div",{className:"filter-buttons",children:d.map(f=>c.jsx("button",{onClick:()=>t(f),className:`filter-btn ${a===f?"active":""}`,children:f},f))})]}),c.jsx("div",{className:"projects-gallery-list",children:g.map((f,p)=>{const b=p%5===0,S=p%5===1,H=p%5===2,m=p%5===3;return c.jsxs("div",{className:`project-layout-item ${b?"layout-full":S?"layout-split":H?"layout-horizontal":m?"layout-asymmetric":"layout-standard"}`,onClick:()=>e(f),onMouseEnter:()=>{n(f),o(!0)},onMouseLeave:()=>{n(null),o(!1)},children:[c.jsx("div",{className:"arch-corner-tick tick-tl"}),c.jsx("div",{className:"arch-corner-tick tick-tr"}),c.jsx("div",{className:"arch-corner-tick tick-bl"}),c.jsx("div",{className:"arch-corner-tick tick-br"}),c.jsxs("div",{className:"project-image-box",children:[c.jsx("img",{src:f.image,alt:f.name,className:"project-img"}),c.jsxs("div",{className:"image-overlay-bar",children:[c.jsxs("span",{className:"mono-text",children:["SPEC / ",f.year]}),c.jsx("span",{className:"mono-text",children:f.location})]})]}),c.jsxs("div",{className:"project-content-box",children:[c.jsxs("div",{className:"project-top-row",children:[c.jsxs("span",{className:"project-index-num",children:["PROJECT ",f.num]}),c.jsx("span",{className:"project-category-badge",children:f.type})]}),c.jsx("h3",{className:"project-title display-title",children:f.name}),c.jsx("p",{className:"project-description",children:f.shortDescription}),c.jsxs("div",{className:"project-mini-specs",children:[c.jsxs("div",{className:"mini-spec-col",children:[c.jsx("span",{className:"mini-label",children:"PRIMARY MATERIALS"}),c.jsx("span",{className:"mini-val",children:f.materials.slice(0,2).join(", ")})]}),c.jsxs("div",{className:"mini-spec-col",children:[c.jsx("span",{className:"mini-label",children:"STATUS"}),c.jsx("span",{className:"mini-val highlight",children:f.status})]})]}),c.jsxs("div",{className:"project-action-row",children:[c.jsxs("span",{className:"explore-link",children:["Explore Project Blueprint",c.jsx(Eu,{size:16,className:"arrow-icon"})]}),c.jsx("span",{className:"mono-text year-tag",children:f.year})]})]})]},f.id)})})]}),c.jsx("style",{children:`
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
      `})]})}function Mg({project:e,onClose:a}){var t,l,n,i,s,u;return J.useEffect(()=>{const o=d=>{d.key==="Escape"&&a()};return window.addEventListener("keydown",o),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",o),document.body.style.overflow="auto"}},[a]),e?c.jsxs("div",{className:"modal-backdrop",onClick:a,children:[c.jsxs("div",{className:"project-modal-card",onClick:o=>o.stopPropagation(),children:[c.jsxs("div",{className:"modal-top-bar",children:[c.jsxs("div",{className:"top-bar-left",children:[c.jsxs("span",{className:"modal-project-num",children:["PROJECT ",e.num]}),c.jsx("span",{className:"top-bar-divider",children:"|"}),c.jsx("span",{className:"mono-text",children:e.category})]}),c.jsx("button",{className:"modal-close-btn",onClick:a,"aria-label":"Close modal",children:c.jsx(bi,{size:22})})]}),c.jsxs("div",{className:"modal-scroll-content",children:[c.jsxs("div",{className:"modal-hero-image-wrap",children:[c.jsx("img",{src:e.image,alt:e.name,className:"modal-hero-img"}),c.jsxs("div",{className:"modal-hero-overlay",children:[c.jsx("h2",{className:"modal-project-title display-title",children:e.name}),c.jsxs("div",{className:"modal-meta-pills",children:[c.jsxs("span",{className:"meta-pill",children:[c.jsx(Nt,{size:12})," ",e.location]}),c.jsxs("span",{className:"meta-pill",children:[c.jsx(R0,{size:12})," ",e.year]}),c.jsxs("span",{className:"meta-pill badge-green",children:[c.jsx(Tu,{size:12})," ",e.status]})]})]})]}),c.jsxs("div",{className:"modal-grid",children:[c.jsxs("div",{className:"modal-left",children:[c.jsxs("div",{className:"modal-section-block",children:[c.jsx("h3",{className:"block-title",children:"PROJECT OVERVIEW"}),c.jsx("p",{className:"block-text",children:e.fullOverview})]}),c.jsxs("div",{className:"modal-section-block",children:[c.jsx("h3",{className:"block-title",children:"ARCHITECTURAL DESIGN CONCEPT"}),c.jsx("p",{className:"block-text",children:e.designConcept})]}),c.jsxs("div",{className:"blueprint-diagram-box",children:[c.jsxs("div",{className:"diagram-header",children:[c.jsx("span",{className:"mono-text",children:"ARCHITECTURAL BLUEPRINT SPECIFICATION // AXONOMETRIC"}),c.jsx(Au,{size:14,className:"icon-green"})]}),c.jsx("div",{className:"blueprint-svg-container",children:c.jsxs("svg",{className:"blueprint-svg",viewBox:"0 0 400 180",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("pattern",{id:"grid",width:"20",height:"20",patternUnits:"userSpaceOnUse",children:c.jsx("path",{d:"M 20 0 L 0 0 0 20",fill:"none",stroke:"#e0e0e0",strokeWidth:"0.5"})}),c.jsx("rect",{width:"100%",height:"100%",fill:"url(#grid)"}),c.jsxs("g",{stroke:"#1B3629",strokeWidth:"1.5",fill:"none",children:[c.jsx("polygon",{points:"120,130 240,160 320,110 200,80",fill:"rgba(27,54,41,0.05)"}),c.jsx("polygon",{points:"120,130 200,80 200,30 120,80",fill:"rgba(27,54,41,0.08)"}),c.jsx("polygon",{points:"200,80 320,110 320,60 200,30",fill:"rgba(27,54,41,0.03)"}),c.jsx("line",{x1:"240",y1:"160",x2:"240",y2:"110",strokeDasharray:"3,3"}),c.jsx("line",{x1:"120",y1:"130",x2:"240",y2:"160",stroke:"#1B3629"}),c.jsx("line",{x1:"240",y1:"160",x2:"320",y2:"110",stroke:"#1B3629"}),c.jsx("line",{x1:"320",y1:"110",x2:"320",y2:"60",stroke:"#1B3629"}),c.jsx("line",{x1:"120",y1:"80",x2:"200",y2:"30",stroke:"#1B3629"}),c.jsx("line",{x1:"200",y1:"30",x2:"320",y2:"60",stroke:"#1B3629"}),c.jsx("line",{x1:"110",y1:"135",x2:"190",y2:"85",stroke:"#B05844",strokeWidth:"1",strokeDasharray:"2,2"}),c.jsx("text",{x:"140",y:"100",fill:"#B05844",fontSize:"10",fontFamily:"JetBrains Mono",children:"34.5m SOLAR AXIS"})]})]})}),c.jsx("div",{className:"diagram-footer",children:(t=e.diagrams)==null?void 0:t.map((o,d)=>c.jsxs("div",{className:"diagram-item",children:[c.jsxs("span",{className:"diag-label",children:[o.label,":"]}),c.jsx("span",{className:"diag-detail",children:o.detail})]},d))})]})]}),c.jsxs("div",{className:"modal-right",children:[c.jsxs("div",{className:"arch-card modal-side-card",children:[c.jsx("div",{className:"arch-corner-tick tick-tl"}),c.jsx("div",{className:"arch-corner-tick tick-tr"}),c.jsx("div",{className:"arch-corner-tick tick-bl"}),c.jsx("div",{className:"arch-corner-tick tick-br"}),c.jsx("h4",{className:"side-card-title",children:"PROJECT SPECIFICATIONS"}),c.jsxs("div",{className:"specs-list",children:[c.jsxs("div",{className:"spec-row",children:[c.jsx("span",{className:"spec-label",children:"Gross Floor Area"}),c.jsx("span",{className:"spec-val",children:(l=e.metrics)==null?void 0:l.area})]}),c.jsxs("div",{className:"spec-row",children:[c.jsx("span",{className:"spec-label",children:"Carbon Reduction"}),c.jsx("span",{className:"spec-val highlight",children:(n=e.metrics)==null?void 0:n.carbonReduction})]}),c.jsxs("div",{className:"spec-row",children:[c.jsx("span",{className:"spec-label",children:"Energy Standard"}),c.jsx("span",{className:"spec-val",children:(i=e.metrics)==null?void 0:i.energyRating})]}),c.jsxs("div",{className:"spec-row",children:[c.jsx("span",{className:"spec-label",children:"Timeline"}),c.jsx("span",{className:"spec-val",children:(s=e.metrics)==null?void 0:s.yearCompleted})]})]})]}),c.jsxs("div",{className:"arch-card modal-side-card",children:[c.jsx("h4",{className:"side-card-title",children:"SPECIFIED MATERIAL PALETTE"}),c.jsx("div",{className:"materials-list",children:(u=e.materials)==null?void 0:u.map((o,d)=>c.jsxs("div",{className:"mat-item",children:[c.jsx(fm,{size:14,className:"mat-icon"}),c.jsx("span",{children:o})]},d))})]}),c.jsx("div",{className:"modal-cta-box",children:c.jsxs("button",{className:"btn-primary full-width",onClick:a,children:[c.jsx("span",{children:"Return to Portfolio"}),c.jsx(E0,{size:16})]})})]})]})]})]}),c.jsx("style",{children:`
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
      `})]}):null}function Og(){const e=J.useRef(null),a=t=>{if(e.current){const l=t==="left"?-380:380;e.current.scrollBy({left:l,behavior:"smooth"})}};return c.jsxs("section",{id:"experience",className:"arch-section experience-section",children:[c.jsx("div",{className:"arch-grid-lines"}),c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header-bar",children:[c.jsxs("div",{className:"header-left",children:[c.jsx("span",{className:"section-number",children:"03"}),c.jsxs("div",{className:"header-titles",children:[c.jsx("span",{className:"section-label",children:"CAREER TRAJECTORY"}),c.jsx("h2",{className:"section-title display-title",children:"Professional Experience"})]})]}),c.jsxs("div",{className:"timeline-nav-buttons",children:[c.jsx("button",{className:"timeline-scroll-btn",onClick:()=>a("left"),"aria-label":"Scroll left",children:c.jsx(B0,{size:20})}),c.jsx("button",{className:"timeline-scroll-btn",onClick:()=>a("right"),"aria-label":"Scroll right",children:c.jsx(Y0,{size:20})})]})]}),c.jsxs("div",{className:"timeline-outer-wrapper",children:[c.jsx("div",{className:"timeline-track-line"}),c.jsx("div",{className:"timeline-scroll-container",ref:e,children:hm.map((t,l)=>c.jsxs("div",{className:"timeline-node-card arch-card",children:[c.jsx("div",{className:"arch-corner-tick tick-tl"}),c.jsx("div",{className:"arch-corner-tick tick-tr"}),c.jsx("div",{className:"arch-corner-tick tick-bl"}),c.jsx("div",{className:"arch-corner-tick tick-br"}),c.jsxs("div",{className:"node-pin-container",children:[c.jsx("div",{className:"node-pin"}),c.jsx("span",{className:"mono-text coord-text",children:t.coordinates})]}),c.jsxs("div",{className:"node-header",children:[c.jsx("span",{className:"node-period",children:t.period}),c.jsx("span",{className:"node-company-type",children:t.type})]}),c.jsx("h3",{className:"node-role",children:t.role}),c.jsxs("div",{className:"node-company-row",children:[c.jsx(D0,{size:16,className:"company-icon"}),c.jsx("span",{className:"company-name",children:t.company}),c.jsx("span",{className:"bullet-sep",children:"•"}),c.jsx(Nt,{size:14,className:"location-icon"}),c.jsx("span",{className:"location-text",children:t.location})]}),c.jsx("p",{className:"node-summary",children:t.description}),c.jsxs("div",{className:"responsibilities-list",children:[c.jsx("span",{className:"mono-text list-title",children:"KEY DELIVERABLES:"}),t.responsibilities.map((n,i)=>c.jsxs("div",{className:"resp-item",children:[c.jsx(H0,{size:12,className:"resp-icon"}),c.jsx("span",{children:n})]},i))]})]},l))})]})]}),c.jsx("style",{children:`
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
      `})]})}function Cg(){const e=a=>a===0?c.jsx(fg,{size:18}):a===1?c.jsx(K0,{size:18}):a===2?c.jsx(jg,{size:18}):c.jsx(Tu,{size:18});return c.jsxs("section",{id:"expertise",className:"arch-section expertise-section",children:[c.jsx("div",{className:"arch-grid-lines"}),c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header-bar",children:[c.jsxs("div",{className:"header-left",children:[c.jsx("span",{className:"section-number",children:"04"}),c.jsxs("div",{className:"header-titles",children:[c.jsx("span",{className:"section-label",children:"TECHNICAL COMPETENCIES"}),c.jsx("h2",{className:"section-title display-title",children:"Design Tools & Expertise"})]})]}),c.jsx("div",{className:"header-line"})]}),c.jsx("div",{className:"expertise-matrix-grid",children:pm.map((a,t)=>c.jsxs("div",{className:"expertise-cat-block arch-card",children:[c.jsx("div",{className:"arch-corner-tick tick-tl"}),c.jsx("div",{className:"arch-corner-tick tick-tr"}),c.jsx("div",{className:"arch-corner-tick tick-bl"}),c.jsx("div",{className:"arch-corner-tick tick-br"}),c.jsxs("div",{className:"cat-header",children:[c.jsxs("div",{className:"cat-title-left",children:[c.jsx("div",{className:"cat-icon",children:e(t)}),c.jsx("h3",{className:"cat-name",children:a.category})]}),c.jsx("span",{className:"mono-text cat-code",children:a.code})]}),c.jsx("div",{className:"skills-modular-list",children:a.skills.map((l,n)=>c.jsxs("div",{className:"skill-module-item",children:[c.jsxs("div",{className:"module-top",children:[c.jsx("span",{className:"skill-name",children:l.name}),c.jsx("span",{className:"skill-level-badge",children:l.level})]}),c.jsx("span",{className:"skill-spec-text",children:l.spec})]},n))})]},a.category))})]}),c.jsx("style",{children:`
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
      `})]})}function Dg(){return c.jsxs("section",{id:"education",className:"arch-section education-section",children:[c.jsx("div",{className:"arch-grid-lines"}),c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header-bar",children:[c.jsxs("div",{className:"header-left",children:[c.jsx("span",{className:"section-number",children:"05"}),c.jsxs("div",{className:"header-titles",children:[c.jsx("span",{className:"section-label",children:"ACADEMIC BACKGROUND"}),c.jsx("h2",{className:"section-title display-title",children:"Academic Foundation"})]})]}),c.jsx("div",{className:"header-line"})]}),c.jsx("div",{className:"education-grid",children:gm.map((e,a)=>c.jsxs("div",{className:"education-card arch-card",children:[c.jsx("div",{className:"arch-corner-tick tick-tl"}),c.jsx("div",{className:"arch-corner-tick tick-tr"}),c.jsx("div",{className:"arch-corner-tick tick-bl"}),c.jsx("div",{className:"arch-corner-tick tick-br"}),c.jsxs("div",{className:"edu-top-bar",children:[c.jsx("div",{className:"edu-icon-wrap",children:c.jsx(sg,{size:24})}),c.jsx("div",{className:"edu-year-tag",children:c.jsx("span",{className:"mono-text",children:e.year})})]}),c.jsx("h3",{className:"edu-degree",children:e.degree}),c.jsxs("div",{className:"edu-institution-row",children:[c.jsx("span",{className:"inst-name",children:e.institution}),c.jsx("span",{className:"bullet-sep",children:"•"}),c.jsx("span",{className:"inst-loc",children:e.location})]}),c.jsxs("div",{className:"edu-details-box",children:[c.jsxs("div",{className:"detail-item",children:[c.jsx(O0,{size:14,className:"detail-icon"}),c.jsx("span",{className:"detail-label",children:"Specialization:"}),c.jsx("span",{className:"detail-text",children:e.focus})]}),c.jsxs("div",{className:"detail-item",children:[c.jsx(rm,{size:14,className:"detail-icon"}),c.jsx("span",{className:"detail-label",children:"Distinction:"}),c.jsx("span",{className:"detail-text highlight",children:e.honors})]})]}),c.jsxs("div",{className:"edu-thesis-box",children:[c.jsx("span",{className:"mono-text thesis-label",children:"ACADEMIC THESIS"}),c.jsxs("p",{className:"thesis-text",children:['"',e.thesis,'"']})]}),c.jsx("div",{className:"edu-type-footer",children:c.jsx("span",{className:"mono-text",children:e.type})})]},a))})]}),c.jsx("style",{children:`
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
      `})]})}function _g(){return c.jsxs("section",{id:"research",className:"arch-section research-section",children:[c.jsx("div",{className:"arch-grid-lines"}),c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header-bar",children:[c.jsxs("div",{className:"header-left",children:[c.jsx("span",{className:"section-number",children:"06"}),c.jsxs("div",{className:"header-titles",children:[c.jsx("span",{className:"section-label",children:"ACADEMIC & PUBLIC ENGAGEMENT"}),c.jsx("h2",{className:"section-title display-title",children:"Research & Public Work"})]})]}),c.jsx("div",{className:"header-line"})]}),c.jsx("div",{className:"research-posters-grid",children:ir.projects.map(e=>c.jsxs("div",{className:"poster-card arch-card",children:[c.jsx("div",{className:"arch-corner-tick tick-tl"}),c.jsx("div",{className:"arch-corner-tick tick-tr"}),c.jsx("div",{className:"arch-corner-tick tick-bl"}),c.jsx("div",{className:"arch-corner-tick tick-br"}),c.jsxs("div",{className:"poster-top-bar",children:[c.jsx("span",{className:"mono-text poster-code",children:e.code}),c.jsx("span",{className:"mono-text poster-year",children:e.year})]}),c.jsx("h3",{className:"poster-title display-title",children:e.title}),c.jsx("div",{className:"poster-subtitle-box",children:c.jsx("p",{className:"poster-subtitle",children:e.subtitle})}),c.jsx("p",{className:"poster-summary",children:e.summary}),c.jsxs("div",{className:"poster-footer",children:[c.jsx("span",{className:"mono-text poster-status",children:"PUBLISHED MONOGRAPH"}),c.jsx(tg,{size:16,className:"poster-icon"})]})]},e.code))}),c.jsxs("div",{className:"exhibitions-block",children:[c.jsxs("div",{className:"exhibitions-header",children:[c.jsx("h3",{className:"exhibitions-title",children:"SELECTED EXHIBITIONS & CURATED PAVILIONS"}),c.jsx("span",{className:"mono-text",children:"2021 — 2025"})]}),c.jsx("div",{className:"exhibitions-list",children:ir.exhibitions.map((e,a)=>c.jsxs("div",{className:"exhibition-row",children:[c.jsxs("div",{className:"exh-left",children:[c.jsx("span",{className:"exh-year",children:e.year}),c.jsx("span",{className:"bullet-sep",children:"•"}),c.jsx("h4",{className:"exh-name",children:e.title})]}),c.jsxs("div",{className:"exh-right",children:[c.jsxs("div",{className:"exh-loc",children:[c.jsx(Nt,{size:14}),c.jsx("span",{children:e.location})]}),c.jsx("span",{className:"exh-role",children:e.role}),c.jsx(Eu,{size:16,className:"exh-arrow"})]})]},a))})]})]}),c.jsx("style",{children:`
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
      `})]})}function Rg(){return c.jsxs("section",{id:"recognition",className:"arch-section recognition-section",children:[c.jsx("div",{className:"arch-grid-lines"}),c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header-bar",children:[c.jsxs("div",{className:"header-left",children:[c.jsx("span",{className:"section-number",children:"07"}),c.jsxs("div",{className:"header-titles",children:[c.jsx("span",{className:"section-label",children:"AWARDS & HONORS"}),c.jsx("h2",{className:"section-title display-title",children:"Recognition"})]})]}),c.jsx("div",{className:"header-line"})]}),c.jsx("div",{className:"recognition-list",children:vm.map((e,a)=>c.jsxs("div",{className:"award-row",children:[c.jsx("div",{className:"award-year-col",children:c.jsx("span",{className:"award-year-text",children:e.year})}),c.jsxs("div",{className:"award-info-col",children:[c.jsx("h3",{className:"award-title-text",children:e.title}),c.jsxs("div",{className:"award-org-meta",children:[c.jsx("span",{className:"award-org-name",children:e.organization}),c.jsx("span",{className:"bullet-sep",children:"•"}),c.jsx(Nt,{size:12,className:"meta-icon"}),c.jsx("span",{className:"award-location",children:e.location})]})]}),c.jsxs("div",{className:"award-project-ref",children:[c.jsx("span",{className:"mono-text ref-label",children:"NOMINATED PROJECT:"}),c.jsx("span",{className:"ref-name",children:e.projectRef})]})]},a))}),c.jsxs("div",{className:"recognition-disclaimer-box",children:[c.jsx(q0,{size:18,className:"disclaimer-icon"}),c.jsx("p",{className:"disclaimer-text",children:'"All awards, honors, and organizations displayed in this template are fictional demonstration content."'})]})]}),c.jsx("style",{children:`
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
      `})]})}function Ug(){const[e,a]=J.useState(!1),[t,l]=J.useState({name:"",email:"",projectType:"Architectural Design",message:""}),n=s=>{l({...t,[s.target.name]:s.target.value})},i=s=>{s.preventDefault(),t.name&&t.email&&t.message&&a(!0)};return c.jsxs("section",{id:"contact",className:"arch-section contact-section",children:[c.jsx("div",{className:"contact-grid-anim"}),c.jsxs("div",{className:"container relative-z",children:[c.jsxs("div",{className:"contact-top-banner",children:[c.jsx("span",{className:"section-label",children:"GET IN TOUCH"}),c.jsxs("h2",{className:"contact-heading display-title",children:["Let's Shape ",c.jsx("br",{}),"What Comes Next."]}),c.jsx("p",{className:"contact-subhead",children:'"Open to architectural collaborations, design conversations, and future-focused projects."'})]}),c.jsxs("div",{className:"contact-main-grid",children:[c.jsxs("div",{className:"contact-info-panel arch-card",children:[c.jsx("div",{className:"arch-corner-tick tick-tl"}),c.jsx("div",{className:"arch-corner-tick tick-tr"}),c.jsx("div",{className:"arch-corner-tick tick-bl"}),c.jsx("div",{className:"arch-corner-tick tick-br"}),c.jsx("h3",{className:"info-panel-title",children:"STUDIO DIRECTORY"}),c.jsxs("div",{className:"info-blocks-list",children:[c.jsxs("div",{className:"info-block-item",children:[c.jsx("span",{className:"mono-text block-label",children:"EMAIL INQUIRIES"}),c.jsxs("a",{href:`mailto:${V.email}`,className:"info-value-link",children:[c.jsx(mm,{size:16}),c.jsx("span",{children:V.email})]})]}),c.jsxs("div",{className:"info-block-item",children:[c.jsx("span",{className:"mono-text block-label",children:"STUDIO LOCATION"}),c.jsxs("div",{className:"info-value-text",children:[c.jsx(Nt,{size:16}),c.jsx("span",{children:V.studioAddress})]})]}),c.jsxs("div",{className:"info-block-item",children:[c.jsx("span",{className:"mono-text block-label",children:"NETWORK & ARCHIVE"}),c.jsxs("div",{className:"info-value-text",children:[c.jsx(dm,{size:16}),c.jsx("span",{children:"Copenhagen Architectural Registry / AV-2026"})]})]})]}),c.jsxs("div",{className:"studio-availability-box",children:[c.jsx("div",{className:"pulse-dot"}),c.jsx("span",{className:"mono-text",children:"ACCEPTING SELECT COMMISSIONS FOR 2026/2027"})]})]}),c.jsxs("div",{className:"contact-form-panel arch-card",children:[c.jsx("div",{className:"arch-corner-tick tick-tl"}),c.jsx("div",{className:"arch-corner-tick tick-tr"}),c.jsx("div",{className:"arch-corner-tick tick-bl"}),c.jsx("div",{className:"arch-corner-tick tick-br"}),e?c.jsxs("div",{className:"form-success-state",children:[c.jsx(fm,{size:48,className:"success-icon"}),c.jsx("h3",{className:"success-title",children:"Message Transmitted"}),c.jsxs("p",{className:"success-text",children:["Thank you, ",t.name,'. Your architectural inquiry regarding "',t.projectType,'" has been received. Adrian will respond within 48 business hours.']}),c.jsx("button",{className:"btn-outline",onClick:()=>{a(!1),l({name:"",email:"",projectType:"Architectural Design",message:""})},children:"Send Another Inquiry"})]}):c.jsxs("form",{onSubmit:i,className:"underline-form",children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"mono-text input-label",children:"01 // YOUR NAME"}),c.jsx("input",{type:"text",name:"name",required:!0,placeholder:"e.g. Elena Rostova",value:t.name,onChange:n,className:"underline-input"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"mono-text input-label",children:"02 // EMAIL ADDRESS"}),c.jsx("input",{type:"email",name:"email",required:!0,placeholder:"e.g. elena@studio.example",value:t.email,onChange:n,className:"underline-input"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"mono-text input-label",children:"03 // PROJECT TYPOLOGY"}),c.jsxs("select",{name:"projectType",value:t.projectType,onChange:n,className:"underline-select",children:[c.jsx("option",{value:"Architectural Design",children:"Architectural Design & Planning"}),c.jsx("option",{value:"Urban Regeneration",children:"Urban Regeneration / Masterplan"}),c.jsx("option",{value:"Sustainability Advisory",children:"Sustainability & Material Research"}),c.jsx("option",{value:"Public Keynote / Jury",children:"Public Keynote / Guest Lecture"})]})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"mono-text input-label",children:"04 // PROJECT DETAILS & SCOPE"}),c.jsx("textarea",{name:"message",required:!0,rows:"4",placeholder:"Describe site context, timeline, or collaboration parameters...",value:t.message,onChange:n,className:"underline-textarea"})]}),c.jsxs("button",{type:"submit",className:"btn-primary full-width submit-btn",children:[c.jsx("span",{children:"Begin a Conversation"}),c.jsx(yg,{size:16})]})]})]})]})]}),c.jsx("style",{children:`
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
      `})]})}function Hg(){const e=a=>{const t=document.getElementById(a);if(t){const n=document.body.getBoundingClientRect().top,u=t.getBoundingClientRect().top-n-80;window.scrollTo({top:u,behavior:"smooth"})}};return c.jsxs("footer",{className:"arch-footer",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"footer-top-grid",children:[c.jsxs("div",{className:"footer-left",children:[c.jsxs("div",{className:"footer-brand",children:[c.jsx("div",{className:"monogram-box",children:"AV"}),c.jsxs("div",{className:"brand-text",children:[c.jsx("span",{className:"brand-name",children:V.name}),c.jsx("span",{className:"brand-title",children:V.profession})]})]}),c.jsx("p",{className:"footer-tagline",children:V.tagline})]}),c.jsxs("div",{className:"footer-center",children:[c.jsxs("div",{className:"footer-nav-col",children:[c.jsx("span",{className:"mono-text nav-col-title",children:"NAVIGATION"}),c.jsx("button",{onClick:()=>e("profile"),className:"footer-nav-link",children:"Profile"}),c.jsx("button",{onClick:()=>e("practice"),className:"footer-nav-link",children:"Practice Philosophy"}),c.jsx("button",{onClick:()=>e("projects"),className:"footer-nav-link",children:"Selected Works"}),c.jsx("button",{onClick:()=>e("experience"),className:"footer-nav-link",children:"Career Experience"})]}),c.jsxs("div",{className:"footer-nav-col",children:[c.jsx("span",{className:"mono-text nav-col-title",children:"ARCHIVE"}),c.jsx("button",{onClick:()=>e("expertise"),className:"footer-nav-link",children:"Design Expertise"}),c.jsx("button",{onClick:()=>e("education"),className:"footer-nav-link",children:"Academic Foundation"}),c.jsx("button",{onClick:()=>e("research"),className:"footer-nav-link",children:"Research & Public Work"}),c.jsx("button",{onClick:()=>e("contact"),className:"footer-nav-link",children:"Contact Studio"})]})]}),c.jsx("div",{className:"footer-right",children:c.jsxs("div",{className:"spec-card",children:[c.jsx("span",{className:"mono-text",children:"LOCATION MATRIX"}),c.jsx("span",{className:"spec-val",children:"Copenhagen / Denmark"}),c.jsx("span",{className:"mono-text mt-12",children:"SYSTEM REVISION"}),c.jsx("span",{className:"spec-val",children:"ARCH-VER 2026.04"})]})})]}),c.jsxs("div",{className:"footer-bottom-bar",children:[c.jsxs("span",{className:"copyright-text",children:["© 2026 ",V.name,". All Rights Reserved."]}),c.jsxs("p",{className:"legal-disclaimer",children:['"',V.disclaimer,'"']})]})]}),c.jsx("style",{children:`
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
      `})]})}function wg({onClose:e}){const a=()=>{window.print()};return c.jsxs("div",{className:"modal-backdrop no-print-backdrop",onClick:e,children:[c.jsxs("div",{className:"cv-modal-card",onClick:t=>t.stopPropagation(),children:[c.jsxs("div",{className:"cv-top-bar no-print",children:[c.jsx("div",{className:"cv-top-title",children:c.jsx("span",{className:"mono-text",children:"ADRIAN VALE — CURRICULUM VITAE (PDF / PRINT VIEW)"})}),c.jsxs("div",{className:"cv-top-actions",children:[c.jsxs("button",{className:"btn-primary print-action-btn",onClick:a,children:[c.jsx(vg,{size:16}),c.jsx("span",{children:"Print / Download PDF"})]}),c.jsx("button",{className:"modal-close-btn",onClick:e,"aria-label":"Close CV Modal",children:c.jsx(bi,{size:20})})]})]}),c.jsxs("div",{className:"cv-document-body",id:"printable-cv",children:[c.jsxs("header",{className:"cv-doc-header",children:[c.jsxs("div",{className:"header-main",children:[c.jsx("h1",{className:"cv-name",children:V.name}),c.jsx("h2",{className:"cv-title-sub",children:V.profession}),c.jsxs("p",{className:"cv-tagline-text",children:['"',V.tagline,'"']})]}),c.jsxs("div",{className:"header-contact-meta",children:[c.jsxs("div",{className:"meta-item",children:[c.jsx(Nt,{size:12})," ",V.location]}),c.jsxs("div",{className:"meta-item",children:[c.jsx(mm,{size:12})," ",V.email]}),c.jsxs("div",{className:"meta-item",children:[c.jsx(pg,{size:12})," ",V.phone]}),c.jsxs("div",{className:"meta-item",children:[c.jsx(dm,{size:12})," adrianvale.example"]})]})]}),c.jsx("hr",{className:"cv-divider"}),c.jsxs("section",{className:"cv-sec",children:[c.jsx("h3",{className:"cv-sec-title",children:"PROFESSIONAL PROFILE"}),c.jsxs("p",{className:"cv-summary-text",children:[V.heroStatement," With over ",V.experienceYears," of experience heading sustainable mass-timber developments, public cultural pavilions, and urban regeneration masterplans in Denmark and Sweden, Adrian Vale synthesizes ecological site analysis, human ergonomics, and parametric daylighting."]})]}),c.jsxs("section",{className:"cv-sec",children:[c.jsx("h3",{className:"cv-sec-title",children:"CAREER EXPERIENCE"}),c.jsx("div",{className:"cv-items-stack",children:hm.map((t,l)=>c.jsxs("div",{className:"cv-exp-item",children:[c.jsxs("div",{className:"exp-line-header",children:[c.jsxs("div",{className:"exp-role-co",children:[c.jsx("span",{className:"exp-role-title",children:t.role})," — ",c.jsx("span",{className:"exp-co",children:t.company})]}),c.jsx("span",{className:"exp-date",children:t.period})]}),c.jsxs("div",{className:"exp-loc-line",children:[t.location," | ",t.type]}),c.jsx("ul",{className:"exp-bullets",children:t.responsibilities.map((n,i)=>c.jsx("li",{children:n},i))})]},l))})]}),c.jsxs("section",{className:"cv-sec",children:[c.jsx("h3",{className:"cv-sec-title",children:"ACADEMIC FOUNDATION"}),c.jsx("div",{className:"cv-items-stack",children:gm.map((t,l)=>c.jsxs("div",{className:"cv-edu-item",children:[c.jsxs("div",{className:"exp-line-header",children:[c.jsx("span",{className:"exp-role-title",children:t.degree}),c.jsx("span",{className:"exp-date",children:t.year})]}),c.jsxs("div",{className:"exp-loc-line",children:[t.institution," — ",t.location]}),c.jsxs("div",{className:"edu-note",children:[t.thesis," (",t.honors,")"]})]},l))})]}),c.jsxs("section",{className:"cv-sec",children:[c.jsx("h3",{className:"cv-sec-title",children:"SELECTED ARCHITECTURAL WORKS"}),c.jsx("div",{className:"cv-projects-grid",children:Ss.map(t=>c.jsxs("div",{className:"cv-proj-row",children:[c.jsxs("span",{className:"p-num",children:["PROJ ",t.num]}),c.jsxs("div",{className:"p-details",children:[c.jsxs("span",{className:"p-name",children:[t.name," (",t.year,")"]}),c.jsxs("span",{className:"p-type",children:[t.type," — ",t.location]})]})]},t.id))})]}),c.jsxs("section",{className:"cv-sec",children:[c.jsx("h3",{className:"cv-sec-title",children:"TECHNICAL EXPERTISE & TOOLS"}),c.jsx("div",{className:"cv-skills-grid",children:pm.map((t,l)=>c.jsxs("div",{className:"cv-skill-cat",children:[c.jsxs("span",{className:"cat-hdr",children:[t.category,":"]}),c.jsx("span",{className:"cat-items",children:t.skills.map(n=>n.name).join(", ")})]},l))})]}),c.jsxs("section",{className:"cv-sec",children:[c.jsx("h3",{className:"cv-sec-title",children:"RECOGNITION & AWARDS"}),c.jsx("div",{className:"cv-awards-list",children:vm.map((t,l)=>c.jsxs("div",{className:"cv-award-item",children:[c.jsx("span",{className:"a-year",children:t.year})," — ",c.jsx("span",{className:"a-title",children:t.title})," (",t.organization,")"]},l))})]}),c.jsx("footer",{className:"cv-doc-footer",children:c.jsxs("p",{className:"cv-legal",children:['"',V.disclaimer,'"']})})]})]}),c.jsx("style",{children:`
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
      `})]})}function Bg(){const[e,a]=J.useState(!1);return J.useEffect(()=>{const t=setTimeout(()=>{a(!0)},100);return()=>clearTimeout(t)},[]),c.jsxs("div",{className:`grid-drawing-layer ${e?"grid-active":""}`,children:[c.jsx("div",{className:"grid-line vertical line-v-1"}),c.jsx("div",{className:"grid-line vertical line-v-2"}),c.jsx("div",{className:"grid-line vertical line-v-3"}),c.jsx("div",{className:"grid-line horizontal line-h-1"}),c.jsx("div",{className:"grid-line horizontal line-h-2"}),c.jsx("style",{children:`
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
      `})]})}function kg(){const[e,a]=J.useState(null),[t,l]=J.useState(!1),n=()=>{const i=document.getElementById("projects");if(i){const u=document.body.getBoundingClientRect().top,g=i.getBoundingClientRect().top-u-80;window.scrollTo({top:g,behavior:"smooth"})}};return c.jsxs("div",{className:"app-root",children:[c.jsx(Bg,{}),c.jsx(zg,{onOpenCV:()=>l(!0)}),c.jsxs("main",{className:"main-content",children:[c.jsx(Eg,{onOpenCV:()=>l(!0),onExploreProjects:n}),c.jsx(Ag,{}),c.jsx(Tg,{onSelectProject:i=>a(i)}),c.jsx(Og,{}),c.jsx(Cg,{}),c.jsx(Dg,{}),c.jsx(_g,{}),c.jsx(Rg,{}),c.jsx(Ug,{})]}),c.jsx(Hg,{}),e&&c.jsx(Mg,{project:e,onClose:()=>a(null)}),t&&c.jsx(wg,{onClose:()=>l(!1)})]})}p0.createRoot(document.getElementById("root")).render(c.jsx(J.StrictMode,{children:c.jsx(kg,{})}));
