(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Bv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Bp={exports:{}},ll={},zp={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mo=Symbol.for("react.element"),zv=Symbol.for("react.portal"),Hv=Symbol.for("react.fragment"),Gv=Symbol.for("react.strict_mode"),Vv=Symbol.for("react.profiler"),Wv=Symbol.for("react.provider"),jv=Symbol.for("react.context"),Xv=Symbol.for("react.forward_ref"),qv=Symbol.for("react.suspense"),Yv=Symbol.for("react.memo"),$v=Symbol.for("react.lazy"),ef=Symbol.iterator;function Kv(t){return t===null||typeof t!="object"?null:(t=ef&&t[ef]||t["@@iterator"],typeof t=="function"?t:null)}var Hp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gp=Object.assign,Vp={};function Ss(t,e,n){this.props=t,this.context=e,this.refs=Vp,this.updater=n||Hp}Ss.prototype.isReactComponent={};Ss.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ss.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Wp(){}Wp.prototype=Ss.prototype;function Wu(t,e,n){this.props=t,this.context=e,this.refs=Vp,this.updater=n||Hp}var ju=Wu.prototype=new Wp;ju.constructor=Wu;Gp(ju,Ss.prototype);ju.isPureReactComponent=!0;var tf=Array.isArray,jp=Object.prototype.hasOwnProperty,Xu={current:null},Xp={key:!0,ref:!0,__self:!0,__source:!0};function qp(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)jp.call(e,i)&&!Xp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Mo,type:t,key:s,ref:o,props:r,_owner:Xu.current}}function Zv(t,e){return{$$typeof:Mo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Mo}function Qv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var nf=/\/+/g;function Dl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Qv(""+t.key):e.toString(36)}function _a(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Mo:case zv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Dl(o,0):i,tf(r)?(n="",t!=null&&(n=t.replace(nf,"$&/")+"/"),_a(r,e,n,"",function(c){return c})):r!=null&&(qu(r)&&(r=Zv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(nf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",tf(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Dl(s,a);o+=_a(s,e,n,l,r)}else if(l=Kv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Dl(s,a++),o+=_a(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function No(t,e,n){if(t==null)return t;var i=[],r=0;return _a(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Jv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kt={current:null},xa={transition:null},e_={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:xa,ReactCurrentOwner:Xu};function Yp(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:No,forEach:function(t,e,n){No(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return No(t,function(){e++}),e},toArray:function(t){return No(t,function(e){return e})||[]},only:function(t){if(!qu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=Ss;je.Fragment=Hv;je.Profiler=Vv;je.PureComponent=Wu;je.StrictMode=Gv;je.Suspense=qv;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e_;je.act=Yp;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Gp({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Xu.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)jp.call(e,l)&&!Xp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Mo,type:t.type,key:r,ref:s,props:i,_owner:o}};je.createContext=function(t){return t={$$typeof:jv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Wv,_context:t},t.Consumer=t};je.createElement=qp;je.createFactory=function(t){var e=qp.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:Xv,render:t}};je.isValidElement=qu;je.lazy=function(t){return{$$typeof:$v,_payload:{_status:-1,_result:t},_init:Jv}};je.memo=function(t,e){return{$$typeof:Yv,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=xa.transition;xa.transition={};try{t()}finally{xa.transition=e}};je.unstable_act=Yp;je.useCallback=function(t,e){return Kt.current.useCallback(t,e)};je.useContext=function(t){return Kt.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return Kt.current.useDeferredValue(t)};je.useEffect=function(t,e){return Kt.current.useEffect(t,e)};je.useId=function(){return Kt.current.useId()};je.useImperativeHandle=function(t,e,n){return Kt.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return Kt.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return Kt.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return Kt.current.useMemo(t,e)};je.useReducer=function(t,e,n){return Kt.current.useReducer(t,e,n)};je.useRef=function(t){return Kt.current.useRef(t)};je.useState=function(t){return Kt.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return Kt.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return Kt.current.useTransition()};je.version="18.3.1";zp.exports=je;var Se=zp.exports;const t_=Bv(Se);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n_=Se,i_=Symbol.for("react.element"),r_=Symbol.for("react.fragment"),s_=Object.prototype.hasOwnProperty,o_=n_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a_={key:!0,ref:!0,__self:!0,__source:!0};function $p(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)s_.call(e,i)&&!a_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:i_,type:t,key:s,ref:o,props:r,_owner:o_.current}}ll.Fragment=r_;ll.jsx=$p;ll.jsxs=$p;Bp.exports=ll;var y=Bp.exports,zc={},Kp={exports:{}},gn={},Zp={exports:{}},Qp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,k){var B=D.length;D.push(k);e:for(;0<B;){var Y=B-1>>>1,Z=D[Y];if(0<r(Z,k))D[Y]=k,D[B]=Z,B=Y;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var k=D[0],B=D.pop();if(B!==k){D[0]=B;e:for(var Y=0,Z=D.length,X=Z>>>1;Y<X;){var K=2*(Y+1)-1,oe=D[K],he=K+1,pe=D[he];if(0>r(oe,B))he<Z&&0>r(pe,oe)?(D[Y]=pe,D[he]=B,Y=he):(D[Y]=oe,D[K]=B,Y=K);else if(he<Z&&0>r(pe,B))D[Y]=pe,D[he]=B,Y=he;else break e}}return k}function r(D,k){var B=D.sortIndex-k.sortIndex;return B!==0?B:D.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,h=null,f=3,m=!1,_=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var k=n(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=D)i(c),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(c)}}function S(D){if(x=!1,v(D),!_)if(n(l)!==null)_=!0,q(b);else{var k=n(c);k!==null&&$(S,k.startTime-D)}}function b(D,k){_=!1,x&&(x=!1,u(N),N=-1),m=!0;var B=f;try{for(v(k),h=n(l);h!==null&&(!(h.expirationTime>k)||D&&!G());){var Y=h.callback;if(typeof Y=="function"){h.callback=null,f=h.priorityLevel;var Z=Y(h.expirationTime<=k);k=t.unstable_now(),typeof Z=="function"?h.callback=Z:h===n(l)&&i(l),v(k)}else i(l);h=n(l)}if(h!==null)var X=!0;else{var K=n(c);K!==null&&$(S,K.startTime-k),X=!1}return X}finally{h=null,f=B,m=!1}}var A=!1,C=null,N=-1,M=5,T=-1;function G(){return!(t.unstable_now()-T<M)}function j(){if(C!==null){var D=t.unstable_now();T=D;var k=!0;try{k=C(!0,D)}finally{k?Q():(A=!1,C=null)}}else A=!1}var Q;if(typeof g=="function")Q=function(){g(j)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,F=P.port2;P.port1.onmessage=j,Q=function(){F.postMessage(null)}}else Q=function(){p(j,0)};function q(D){C=D,A||(A=!0,Q())}function $(D,k){N=p(function(){D(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,q(b))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var k=3;break;default:k=f}var B=f;f=k;try{return D()}finally{f=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,k){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var B=f;f=D;try{return k()}finally{f=B}},t.unstable_scheduleCallback=function(D,k,B){var Y=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?Y+B:Y):B=Y,D){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=B+Z,D={id:d++,callback:k,priorityLevel:D,startTime:B,expirationTime:Z,sortIndex:-1},B>Y?(D.sortIndex=B,e(c,D),n(l)===null&&D===n(c)&&(x?(u(N),N=-1):x=!0,$(S,B-Y))):(D.sortIndex=Z,e(l,D),_||m||(_=!0,q(b))),D},t.unstable_shouldYield=G,t.unstable_wrapCallback=function(D){var k=f;return function(){var B=f;f=k;try{return D.apply(this,arguments)}finally{f=B}}}})(Qp);Zp.exports=Qp;var l_=Zp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c_=Se,mn=l_;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jp=new Set,no={};function Er(t,e){us(t,e),us(t+"Capture",e)}function us(t,e){for(no[t]=e,t=0;t<e.length;t++)Jp.add(e[t])}var fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hc=Object.prototype.hasOwnProperty,u_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rf={},sf={};function d_(t){return Hc.call(sf,t)?!0:Hc.call(rf,t)?!1:u_.test(t)?sf[t]=!0:(rf[t]=!0,!1)}function f_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function h_(t,e,n,i){if(e===null||typeof e>"u"||f_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ut[t]=new Zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ut[e]=new Zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ut[t]=new Zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ut[t]=new Zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ut[t]=new Zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ut[t]=new Zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ut[t]=new Zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ut[t]=new Zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ut[t]=new Zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Yu=/[\-:]([a-z])/g;function $u(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Yu,$u);Ut[e]=new Zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Yu,$u);Ut[e]=new Zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Yu,$u);Ut[e]=new Zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ut[t]=new Zt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ut.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ut[t]=new Zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ku(t,e,n,i){var r=Ut.hasOwnProperty(e)?Ut[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(h_(e,n,r,i)&&(n=null),i||r===null?d_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var vi=c_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Do=Symbol.for("react.element"),Gr=Symbol.for("react.portal"),Vr=Symbol.for("react.fragment"),Zu=Symbol.for("react.strict_mode"),Gc=Symbol.for("react.profiler"),em=Symbol.for("react.provider"),tm=Symbol.for("react.context"),Qu=Symbol.for("react.forward_ref"),Vc=Symbol.for("react.suspense"),Wc=Symbol.for("react.suspense_list"),Ju=Symbol.for("react.memo"),Ti=Symbol.for("react.lazy"),nm=Symbol.for("react.offscreen"),of=Symbol.iterator;function Rs(t){return t===null||typeof t!="object"?null:(t=of&&t[of]||t["@@iterator"],typeof t=="function"?t:null)}var ft=Object.assign,Il;function Gs(t){if(Il===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Il=e&&e[1]||""}return`
`+Il+t}var Ul=!1;function Ol(t,e){if(!t||Ul)return"";Ul=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ul=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Gs(t):""}function p_(t){switch(t.tag){case 5:return Gs(t.type);case 16:return Gs("Lazy");case 13:return Gs("Suspense");case 19:return Gs("SuspenseList");case 0:case 2:case 15:return t=Ol(t.type,!1),t;case 11:return t=Ol(t.type.render,!1),t;case 1:return t=Ol(t.type,!0),t;default:return""}}function jc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vr:return"Fragment";case Gr:return"Portal";case Gc:return"Profiler";case Zu:return"StrictMode";case Vc:return"Suspense";case Wc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case tm:return(t.displayName||"Context")+".Consumer";case em:return(t._context.displayName||"Context")+".Provider";case Qu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ju:return e=t.displayName||null,e!==null?e:jc(t.type)||"Memo";case Ti:e=t._payload,t=t._init;try{return jc(t(e))}catch{}}return null}function m_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jc(e);case 8:return e===Zu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Vi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function im(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function g_(t){var e=im(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Io(t){t._valueTracker||(t._valueTracker=g_(t))}function rm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=im(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Pa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xc(t,e){var n=e.checked;return ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function af(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Vi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function sm(t,e){e=e.checked,e!=null&&Ku(t,"checked",e,!1)}function qc(t,e){sm(t,e);var n=Vi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yc(t,e.type,Vi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function lf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yc(t,e,n){(e!=="number"||Pa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Vs=Array.isArray;function ns(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Vi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function $c(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return ft({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function cf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(Vs(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Vi(n)}}function om(t,e){var n=Vi(e.value),i=Vi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function uf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function am(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?am(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Uo,lm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Uo=Uo||document.createElement("div"),Uo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Uo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function io(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},v_=["Webkit","ms","Moz","O"];Object.keys(Xs).forEach(function(t){v_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xs[e]=Xs[t]})});function cm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xs.hasOwnProperty(t)&&Xs[t]?(""+e).trim():e+"px"}function um(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=cm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var __=ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zc(t,e){if(e){if(__[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function Qc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jc=null;function ed(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var eu=null,is=null,rs=null;function df(t){if(t=wo(t)){if(typeof eu!="function")throw Error(te(280));var e=t.stateNode;e&&(e=hl(e),eu(t.stateNode,t.type,e))}}function dm(t){is?rs?rs.push(t):rs=[t]:is=t}function fm(){if(is){var t=is,e=rs;if(rs=is=null,df(t),e)for(t=0;t<e.length;t++)df(e[t])}}function hm(t,e){return t(e)}function pm(){}var Fl=!1;function mm(t,e,n){if(Fl)return t(e,n);Fl=!0;try{return hm(t,e,n)}finally{Fl=!1,(is!==null||rs!==null)&&(pm(),fm())}}function ro(t,e){var n=t.stateNode;if(n===null)return null;var i=hl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var tu=!1;if(fi)try{var bs={};Object.defineProperty(bs,"passive",{get:function(){tu=!0}}),window.addEventListener("test",bs,bs),window.removeEventListener("test",bs,bs)}catch{tu=!1}function x_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var qs=!1,Na=null,Da=!1,nu=null,y_={onError:function(t){qs=!0,Na=t}};function S_(t,e,n,i,r,s,o,a,l){qs=!1,Na=null,x_.apply(y_,arguments)}function M_(t,e,n,i,r,s,o,a,l){if(S_.apply(this,arguments),qs){if(qs){var c=Na;qs=!1,Na=null}else throw Error(te(198));Da||(Da=!0,nu=c)}}function Tr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function gm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ff(t){if(Tr(t)!==t)throw Error(te(188))}function E_(t){var e=t.alternate;if(!e){if(e=Tr(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return ff(r),t;if(s===i)return ff(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function vm(t){return t=E_(t),t!==null?_m(t):null}function _m(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=_m(t);if(e!==null)return e;t=t.sibling}return null}var xm=mn.unstable_scheduleCallback,hf=mn.unstable_cancelCallback,T_=mn.unstable_shouldYield,w_=mn.unstable_requestPaint,vt=mn.unstable_now,A_=mn.unstable_getCurrentPriorityLevel,td=mn.unstable_ImmediatePriority,ym=mn.unstable_UserBlockingPriority,Ia=mn.unstable_NormalPriority,C_=mn.unstable_LowPriority,Sm=mn.unstable_IdlePriority,cl=null,Yn=null;function R_(t){if(Yn&&typeof Yn.onCommitFiberRoot=="function")try{Yn.onCommitFiberRoot(cl,t,void 0,(t.current.flags&128)===128)}catch{}}var kn=Math.clz32?Math.clz32:P_,b_=Math.log,L_=Math.LN2;function P_(t){return t>>>=0,t===0?32:31-(b_(t)/L_|0)|0}var Oo=64,Fo=4194304;function Ws(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ua(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ws(a):(s&=o,s!==0&&(i=Ws(s)))}else o=n&~r,o!==0?i=Ws(o):s!==0&&(i=Ws(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-kn(e),r=1<<n,i|=t[n],e&=~r;return i}function N_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function D_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-kn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=N_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function iu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Mm(){var t=Oo;return Oo<<=1,!(Oo&4194240)&&(Oo=64),t}function kl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Eo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-kn(e),t[e]=n}function I_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-kn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function nd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-kn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var $e=0;function Em(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Tm,id,wm,Am,Cm,ru=!1,ko=[],Ni=null,Di=null,Ii=null,so=new Map,oo=new Map,Ai=[],U_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pf(t,e){switch(t){case"focusin":case"focusout":Ni=null;break;case"dragenter":case"dragleave":Di=null;break;case"mouseover":case"mouseout":Ii=null;break;case"pointerover":case"pointerout":so.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(e.pointerId)}}function Ls(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=wo(e),e!==null&&id(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function O_(t,e,n,i,r){switch(e){case"focusin":return Ni=Ls(Ni,t,e,n,i,r),!0;case"dragenter":return Di=Ls(Di,t,e,n,i,r),!0;case"mouseover":return Ii=Ls(Ii,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return so.set(s,Ls(so.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,oo.set(s,Ls(oo.get(s)||null,t,e,n,i,r)),!0}return!1}function Rm(t){var e=ar(t.target);if(e!==null){var n=Tr(e);if(n!==null){if(e=n.tag,e===13){if(e=gm(n),e!==null){t.blockedOn=e,Cm(t.priority,function(){wm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ya(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=su(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Jc=i,n.target.dispatchEvent(i),Jc=null}else return e=wo(n),e!==null&&id(e),t.blockedOn=n,!1;e.shift()}return!0}function mf(t,e,n){ya(t)&&n.delete(e)}function F_(){ru=!1,Ni!==null&&ya(Ni)&&(Ni=null),Di!==null&&ya(Di)&&(Di=null),Ii!==null&&ya(Ii)&&(Ii=null),so.forEach(mf),oo.forEach(mf)}function Ps(t,e){t.blockedOn===e&&(t.blockedOn=null,ru||(ru=!0,mn.unstable_scheduleCallback(mn.unstable_NormalPriority,F_)))}function ao(t){function e(r){return Ps(r,t)}if(0<ko.length){Ps(ko[0],t);for(var n=1;n<ko.length;n++){var i=ko[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ni!==null&&Ps(Ni,t),Di!==null&&Ps(Di,t),Ii!==null&&Ps(Ii,t),so.forEach(e),oo.forEach(e),n=0;n<Ai.length;n++)i=Ai[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ai.length&&(n=Ai[0],n.blockedOn===null);)Rm(n),n.blockedOn===null&&Ai.shift()}var ss=vi.ReactCurrentBatchConfig,Oa=!0;function k_(t,e,n,i){var r=$e,s=ss.transition;ss.transition=null;try{$e=1,rd(t,e,n,i)}finally{$e=r,ss.transition=s}}function B_(t,e,n,i){var r=$e,s=ss.transition;ss.transition=null;try{$e=4,rd(t,e,n,i)}finally{$e=r,ss.transition=s}}function rd(t,e,n,i){if(Oa){var r=su(t,e,n,i);if(r===null)Yl(t,e,i,Fa,n),pf(t,i);else if(O_(r,t,e,n,i))i.stopPropagation();else if(pf(t,i),e&4&&-1<U_.indexOf(t)){for(;r!==null;){var s=wo(r);if(s!==null&&Tm(s),s=su(t,e,n,i),s===null&&Yl(t,e,i,Fa,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Yl(t,e,i,null,n)}}var Fa=null;function su(t,e,n,i){if(Fa=null,t=ed(i),t=ar(t),t!==null)if(e=Tr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=gm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fa=t,null}function bm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(A_()){case td:return 1;case ym:return 4;case Ia:case C_:return 16;case Sm:return 536870912;default:return 16}default:return 16}}var Ri=null,sd=null,Sa=null;function Lm(){if(Sa)return Sa;var t,e=sd,n=e.length,i,r="value"in Ri?Ri.value:Ri.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Sa=r.slice(t,1<i?1-i:void 0)}function Ma(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Bo(){return!0}function gf(){return!1}function vn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Bo:gf,this.isPropagationStopped=gf,this}return ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bo)},persist:function(){},isPersistent:Bo}),e}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},od=vn(Ms),To=ft({},Ms,{view:0,detail:0}),z_=vn(To),Bl,zl,Ns,ul=ft({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ad,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ns&&(Ns&&t.type==="mousemove"?(Bl=t.screenX-Ns.screenX,zl=t.screenY-Ns.screenY):zl=Bl=0,Ns=t),Bl)},movementY:function(t){return"movementY"in t?t.movementY:zl}}),vf=vn(ul),H_=ft({},ul,{dataTransfer:0}),G_=vn(H_),V_=ft({},To,{relatedTarget:0}),Hl=vn(V_),W_=ft({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),j_=vn(W_),X_=ft({},Ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),q_=vn(X_),Y_=ft({},Ms,{data:0}),_f=vn(Y_),$_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Z_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Z_[t])?!!e[t]:!1}function ad(){return Q_}var J_=ft({},To,{key:function(t){if(t.key){var e=$_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ma(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?K_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ad,charCode:function(t){return t.type==="keypress"?Ma(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ma(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),e0=vn(J_),t0=ft({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xf=vn(t0),n0=ft({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ad}),i0=vn(n0),r0=ft({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),s0=vn(r0),o0=ft({},ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),a0=vn(o0),l0=[9,13,27,32],ld=fi&&"CompositionEvent"in window,Ys=null;fi&&"documentMode"in document&&(Ys=document.documentMode);var c0=fi&&"TextEvent"in window&&!Ys,Pm=fi&&(!ld||Ys&&8<Ys&&11>=Ys),yf=" ",Sf=!1;function Nm(t,e){switch(t){case"keyup":return l0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wr=!1;function u0(t,e){switch(t){case"compositionend":return Dm(e);case"keypress":return e.which!==32?null:(Sf=!0,yf);case"textInput":return t=e.data,t===yf&&Sf?null:t;default:return null}}function d0(t,e){if(Wr)return t==="compositionend"||!ld&&Nm(t,e)?(t=Lm(),Sa=sd=Ri=null,Wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Pm&&e.locale!=="ko"?null:e.data;default:return null}}var f0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!f0[t.type]:e==="textarea"}function Im(t,e,n,i){dm(i),e=ka(e,"onChange"),0<e.length&&(n=new od("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var $s=null,lo=null;function h0(t){jm(t,0)}function dl(t){var e=qr(t);if(rm(e))return t}function p0(t,e){if(t==="change")return e}var Um=!1;if(fi){var Gl;if(fi){var Vl="oninput"in document;if(!Vl){var Ef=document.createElement("div");Ef.setAttribute("oninput","return;"),Vl=typeof Ef.oninput=="function"}Gl=Vl}else Gl=!1;Um=Gl&&(!document.documentMode||9<document.documentMode)}function Tf(){$s&&($s.detachEvent("onpropertychange",Om),lo=$s=null)}function Om(t){if(t.propertyName==="value"&&dl(lo)){var e=[];Im(e,lo,t,ed(t)),mm(h0,e)}}function m0(t,e,n){t==="focusin"?(Tf(),$s=e,lo=n,$s.attachEvent("onpropertychange",Om)):t==="focusout"&&Tf()}function g0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dl(lo)}function v0(t,e){if(t==="click")return dl(e)}function _0(t,e){if(t==="input"||t==="change")return dl(e)}function x0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zn=typeof Object.is=="function"?Object.is:x0;function co(t,e){if(zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Hc.call(e,r)||!zn(t[r],e[r]))return!1}return!0}function wf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Af(t,e){var n=wf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wf(n)}}function Fm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Fm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function km(){for(var t=window,e=Pa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Pa(t.document)}return e}function cd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function y0(t){var e=km(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Fm(n.ownerDocument.documentElement,n)){if(i!==null&&cd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Af(n,s);var o=Af(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var S0=fi&&"documentMode"in document&&11>=document.documentMode,jr=null,ou=null,Ks=null,au=!1;function Cf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;au||jr==null||jr!==Pa(i)||(i=jr,"selectionStart"in i&&cd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ks&&co(Ks,i)||(Ks=i,i=ka(ou,"onSelect"),0<i.length&&(e=new od("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=jr)))}function zo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Xr={animationend:zo("Animation","AnimationEnd"),animationiteration:zo("Animation","AnimationIteration"),animationstart:zo("Animation","AnimationStart"),transitionend:zo("Transition","TransitionEnd")},Wl={},Bm={};fi&&(Bm=document.createElement("div").style,"AnimationEvent"in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),"TransitionEvent"in window||delete Xr.transitionend.transition);function fl(t){if(Wl[t])return Wl[t];if(!Xr[t])return t;var e=Xr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Bm)return Wl[t]=e[n];return t}var zm=fl("animationend"),Hm=fl("animationiteration"),Gm=fl("animationstart"),Vm=fl("transitionend"),Wm=new Map,Rf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xi(t,e){Wm.set(t,e),Er(e,[t])}for(var jl=0;jl<Rf.length;jl++){var Xl=Rf[jl],M0=Xl.toLowerCase(),E0=Xl[0].toUpperCase()+Xl.slice(1);Xi(M0,"on"+E0)}Xi(zm,"onAnimationEnd");Xi(Hm,"onAnimationIteration");Xi(Gm,"onAnimationStart");Xi("dblclick","onDoubleClick");Xi("focusin","onFocus");Xi("focusout","onBlur");Xi(Vm,"onTransitionEnd");us("onMouseEnter",["mouseout","mouseover"]);us("onMouseLeave",["mouseout","mouseover"]);us("onPointerEnter",["pointerout","pointerover"]);us("onPointerLeave",["pointerout","pointerover"]);Er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Er("onBeforeInput",["compositionend","keypress","textInput","paste"]);Er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),T0=new Set("cancel close invalid load scroll toggle".split(" ").concat(js));function bf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,M_(i,e,void 0,t),t.currentTarget=null}function jm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;bf(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;bf(r,a,c),s=l}}}if(Da)throw t=nu,Da=!1,nu=null,t}function it(t,e){var n=e[fu];n===void 0&&(n=e[fu]=new Set);var i=t+"__bubble";n.has(i)||(Xm(e,t,2,!1),n.add(i))}function ql(t,e,n){var i=0;e&&(i|=4),Xm(n,t,i,e)}var Ho="_reactListening"+Math.random().toString(36).slice(2);function uo(t){if(!t[Ho]){t[Ho]=!0,Jp.forEach(function(n){n!=="selectionchange"&&(T0.has(n)||ql(n,!1,t),ql(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ho]||(e[Ho]=!0,ql("selectionchange",!1,e))}}function Xm(t,e,n,i){switch(bm(e)){case 1:var r=k_;break;case 4:r=B_;break;default:r=rd}n=r.bind(null,e,n,t),r=void 0,!tu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Yl(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ar(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}mm(function(){var c=s,d=ed(n),h=[];e:{var f=Wm.get(t);if(f!==void 0){var m=od,_=t;switch(t){case"keypress":if(Ma(n)===0)break e;case"keydown":case"keyup":m=e0;break;case"focusin":_="focus",m=Hl;break;case"focusout":_="blur",m=Hl;break;case"beforeblur":case"afterblur":m=Hl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=vf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=G_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=i0;break;case zm:case Hm:case Gm:m=j_;break;case Vm:m=s0;break;case"scroll":m=z_;break;case"wheel":m=a0;break;case"copy":case"cut":case"paste":m=q_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=xf}var x=(e&4)!==0,p=!x&&t==="scroll",u=x?f!==null?f+"Capture":null:f;x=[];for(var g=c,v;g!==null;){v=g;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,u!==null&&(S=ro(g,u),S!=null&&x.push(fo(g,S,v)))),p)break;g=g.return}0<x.length&&(f=new m(f,_,null,n,d),h.push({event:f,listeners:x}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Jc&&(_=n.relatedTarget||n.fromElement)&&(ar(_)||_[hi]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?ar(_):null,_!==null&&(p=Tr(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(x=vf,S="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=xf,S="onPointerLeave",u="onPointerEnter",g="pointer"),p=m==null?f:qr(m),v=_==null?f:qr(_),f=new x(S,g+"leave",m,n,d),f.target=p,f.relatedTarget=v,S=null,ar(d)===c&&(x=new x(u,g+"enter",_,n,d),x.target=v,x.relatedTarget=p,S=x),p=S,m&&_)t:{for(x=m,u=_,g=0,v=x;v;v=wr(v))g++;for(v=0,S=u;S;S=wr(S))v++;for(;0<g-v;)x=wr(x),g--;for(;0<v-g;)u=wr(u),v--;for(;g--;){if(x===u||u!==null&&x===u.alternate)break t;x=wr(x),u=wr(u)}x=null}else x=null;m!==null&&Lf(h,f,m,x,!1),_!==null&&p!==null&&Lf(h,p,_,x,!0)}}e:{if(f=c?qr(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var b=p0;else if(Mf(f))if(Um)b=_0;else{b=g0;var A=m0}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=v0);if(b&&(b=b(t,c))){Im(h,b,n,d);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Yc(f,"number",f.value)}switch(A=c?qr(c):window,t){case"focusin":(Mf(A)||A.contentEditable==="true")&&(jr=A,ou=c,Ks=null);break;case"focusout":Ks=ou=jr=null;break;case"mousedown":au=!0;break;case"contextmenu":case"mouseup":case"dragend":au=!1,Cf(h,n,d);break;case"selectionchange":if(S0)break;case"keydown":case"keyup":Cf(h,n,d)}var C;if(ld)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Wr?Nm(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Pm&&n.locale!=="ko"&&(Wr||N!=="onCompositionStart"?N==="onCompositionEnd"&&Wr&&(C=Lm()):(Ri=d,sd="value"in Ri?Ri.value:Ri.textContent,Wr=!0)),A=ka(c,N),0<A.length&&(N=new _f(N,t,null,n,d),h.push({event:N,listeners:A}),C?N.data=C:(C=Dm(n),C!==null&&(N.data=C)))),(C=c0?u0(t,n):d0(t,n))&&(c=ka(c,"onBeforeInput"),0<c.length&&(d=new _f("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=C))}jm(h,e)})}function fo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ka(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ro(t,n),s!=null&&i.unshift(fo(t,s,r)),s=ro(t,e),s!=null&&i.push(fo(t,s,r))),t=t.return}return i}function wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Lf(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ro(n,s),l!=null&&o.unshift(fo(n,l,a))):r||(l=ro(n,s),l!=null&&o.push(fo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var w0=/\r\n?/g,A0=/\u0000|\uFFFD/g;function Pf(t){return(typeof t=="string"?t:""+t).replace(w0,`
`).replace(A0,"")}function Go(t,e,n){if(e=Pf(e),Pf(t)!==e&&n)throw Error(te(425))}function Ba(){}var lu=null,cu=null;function uu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var du=typeof setTimeout=="function"?setTimeout:void 0,C0=typeof clearTimeout=="function"?clearTimeout:void 0,Nf=typeof Promise=="function"?Promise:void 0,R0=typeof queueMicrotask=="function"?queueMicrotask:typeof Nf<"u"?function(t){return Nf.resolve(null).then(t).catch(b0)}:du;function b0(t){setTimeout(function(){throw t})}function $l(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ao(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ao(e)}function Ui(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Df(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Es=Math.random().toString(36).slice(2),qn="__reactFiber$"+Es,ho="__reactProps$"+Es,hi="__reactContainer$"+Es,fu="__reactEvents$"+Es,L0="__reactListeners$"+Es,P0="__reactHandles$"+Es;function ar(t){var e=t[qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[hi]||n[qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Df(t);t!==null;){if(n=t[qn])return n;t=Df(t)}return e}t=n,n=t.parentNode}return null}function wo(t){return t=t[qn]||t[hi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function hl(t){return t[ho]||null}var hu=[],Yr=-1;function qi(t){return{current:t}}function st(t){0>Yr||(t.current=hu[Yr],hu[Yr]=null,Yr--)}function nt(t,e){Yr++,hu[Yr]=t.current,t.current=e}var Wi={},Gt=qi(Wi),tn=qi(!1),mr=Wi;function ds(t,e){var n=t.type.contextTypes;if(!n)return Wi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function nn(t){return t=t.childContextTypes,t!=null}function za(){st(tn),st(Gt)}function If(t,e,n){if(Gt.current!==Wi)throw Error(te(168));nt(Gt,e),nt(tn,n)}function qm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,m_(t)||"Unknown",r));return ft({},n,i)}function Ha(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Wi,mr=Gt.current,nt(Gt,t),nt(tn,tn.current),!0}function Uf(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=qm(t,e,mr),i.__reactInternalMemoizedMergedChildContext=t,st(tn),st(Gt),nt(Gt,t)):st(tn),nt(tn,n)}var si=null,pl=!1,Kl=!1;function Ym(t){si===null?si=[t]:si.push(t)}function N0(t){pl=!0,Ym(t)}function Yi(){if(!Kl&&si!==null){Kl=!0;var t=0,e=$e;try{var n=si;for($e=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}si=null,pl=!1}catch(r){throw si!==null&&(si=si.slice(t+1)),xm(td,Yi),r}finally{$e=e,Kl=!1}}return null}var $r=[],Kr=0,Ga=null,Va=0,yn=[],Sn=0,gr=null,li=1,ci="";function tr(t,e){$r[Kr++]=Va,$r[Kr++]=Ga,Ga=t,Va=e}function $m(t,e,n){yn[Sn++]=li,yn[Sn++]=ci,yn[Sn++]=gr,gr=t;var i=li;t=ci;var r=32-kn(i)-1;i&=~(1<<r),n+=1;var s=32-kn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,li=1<<32-kn(e)+r|n<<r|i,ci=s+t}else li=1<<s|n<<r|i,ci=t}function ud(t){t.return!==null&&(tr(t,1),$m(t,1,0))}function dd(t){for(;t===Ga;)Ga=$r[--Kr],$r[Kr]=null,Va=$r[--Kr],$r[Kr]=null;for(;t===gr;)gr=yn[--Sn],yn[Sn]=null,ci=yn[--Sn],yn[Sn]=null,li=yn[--Sn],yn[Sn]=null}var hn=null,fn=null,ot=!1,In=null;function Km(t,e){var n=Tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Of(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hn=t,fn=Ui(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hn=t,fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=gr!==null?{id:li,overflow:ci}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,hn=t,fn=null,!0):!1;default:return!1}}function pu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function mu(t){if(ot){var e=fn;if(e){var n=e;if(!Of(t,e)){if(pu(t))throw Error(te(418));e=Ui(n.nextSibling);var i=hn;e&&Of(t,e)?Km(i,n):(t.flags=t.flags&-4097|2,ot=!1,hn=t)}}else{if(pu(t))throw Error(te(418));t.flags=t.flags&-4097|2,ot=!1,hn=t}}}function Ff(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hn=t}function Vo(t){if(t!==hn)return!1;if(!ot)return Ff(t),ot=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!uu(t.type,t.memoizedProps)),e&&(e=fn)){if(pu(t))throw Zm(),Error(te(418));for(;e;)Km(t,e),e=Ui(e.nextSibling)}if(Ff(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){fn=Ui(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}fn=null}}else fn=hn?Ui(t.stateNode.nextSibling):null;return!0}function Zm(){for(var t=fn;t;)t=Ui(t.nextSibling)}function fs(){fn=hn=null,ot=!1}function fd(t){In===null?In=[t]:In.push(t)}var D0=vi.ReactCurrentBatchConfig;function Ds(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function Wo(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function kf(t){var e=t._init;return e(t._payload)}function Qm(t){function e(u,g){if(t){var v=u.deletions;v===null?(u.deletions=[g],u.flags|=16):v.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=Bi(u,g),u.index=0,u.sibling=null,u}function s(u,g,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<g?(u.flags|=2,g):v):(u.flags|=2,g)):(u.flags|=1048576,g)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,g,v,S){return g===null||g.tag!==6?(g=ic(v,u.mode,S),g.return=u,g):(g=r(g,v),g.return=u,g)}function l(u,g,v,S){var b=v.type;return b===Vr?d(u,g,v.props.children,S,v.key):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ti&&kf(b)===g.type)?(S=r(g,v.props),S.ref=Ds(u,g,v),S.return=u,S):(S=ba(v.type,v.key,v.props,null,u.mode,S),S.ref=Ds(u,g,v),S.return=u,S)}function c(u,g,v,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=rc(v,u.mode,S),g.return=u,g):(g=r(g,v.children||[]),g.return=u,g)}function d(u,g,v,S,b){return g===null||g.tag!==7?(g=dr(v,u.mode,S,b),g.return=u,g):(g=r(g,v),g.return=u,g)}function h(u,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=ic(""+g,u.mode,v),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Do:return v=ba(g.type,g.key,g.props,null,u.mode,v),v.ref=Ds(u,null,g),v.return=u,v;case Gr:return g=rc(g,u.mode,v),g.return=u,g;case Ti:var S=g._init;return h(u,S(g._payload),v)}if(Vs(g)||Rs(g))return g=dr(g,u.mode,v,null),g.return=u,g;Wo(u,g)}return null}function f(u,g,v,S){var b=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:a(u,g,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Do:return v.key===b?l(u,g,v,S):null;case Gr:return v.key===b?c(u,g,v,S):null;case Ti:return b=v._init,f(u,g,b(v._payload),S)}if(Vs(v)||Rs(v))return b!==null?null:d(u,g,v,S,null);Wo(u,v)}return null}function m(u,g,v,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(v)||null,a(g,u,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Do:return u=u.get(S.key===null?v:S.key)||null,l(g,u,S,b);case Gr:return u=u.get(S.key===null?v:S.key)||null,c(g,u,S,b);case Ti:var A=S._init;return m(u,g,v,A(S._payload),b)}if(Vs(S)||Rs(S))return u=u.get(v)||null,d(g,u,S,b,null);Wo(g,S)}return null}function _(u,g,v,S){for(var b=null,A=null,C=g,N=g=0,M=null;C!==null&&N<v.length;N++){C.index>N?(M=C,C=null):M=C.sibling;var T=f(u,C,v[N],S);if(T===null){C===null&&(C=M);break}t&&C&&T.alternate===null&&e(u,C),g=s(T,g,N),A===null?b=T:A.sibling=T,A=T,C=M}if(N===v.length)return n(u,C),ot&&tr(u,N),b;if(C===null){for(;N<v.length;N++)C=h(u,v[N],S),C!==null&&(g=s(C,g,N),A===null?b=C:A.sibling=C,A=C);return ot&&tr(u,N),b}for(C=i(u,C);N<v.length;N++)M=m(C,u,N,v[N],S),M!==null&&(t&&M.alternate!==null&&C.delete(M.key===null?N:M.key),g=s(M,g,N),A===null?b=M:A.sibling=M,A=M);return t&&C.forEach(function(G){return e(u,G)}),ot&&tr(u,N),b}function x(u,g,v,S){var b=Rs(v);if(typeof b!="function")throw Error(te(150));if(v=b.call(v),v==null)throw Error(te(151));for(var A=b=null,C=g,N=g=0,M=null,T=v.next();C!==null&&!T.done;N++,T=v.next()){C.index>N?(M=C,C=null):M=C.sibling;var G=f(u,C,T.value,S);if(G===null){C===null&&(C=M);break}t&&C&&G.alternate===null&&e(u,C),g=s(G,g,N),A===null?b=G:A.sibling=G,A=G,C=M}if(T.done)return n(u,C),ot&&tr(u,N),b;if(C===null){for(;!T.done;N++,T=v.next())T=h(u,T.value,S),T!==null&&(g=s(T,g,N),A===null?b=T:A.sibling=T,A=T);return ot&&tr(u,N),b}for(C=i(u,C);!T.done;N++,T=v.next())T=m(C,u,N,T.value,S),T!==null&&(t&&T.alternate!==null&&C.delete(T.key===null?N:T.key),g=s(T,g,N),A===null?b=T:A.sibling=T,A=T);return t&&C.forEach(function(j){return e(u,j)}),ot&&tr(u,N),b}function p(u,g,v,S){if(typeof v=="object"&&v!==null&&v.type===Vr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Do:e:{for(var b=v.key,A=g;A!==null;){if(A.key===b){if(b=v.type,b===Vr){if(A.tag===7){n(u,A.sibling),g=r(A,v.props.children),g.return=u,u=g;break e}}else if(A.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ti&&kf(b)===A.type){n(u,A.sibling),g=r(A,v.props),g.ref=Ds(u,A,v),g.return=u,u=g;break e}n(u,A);break}else e(u,A);A=A.sibling}v.type===Vr?(g=dr(v.props.children,u.mode,S,v.key),g.return=u,u=g):(S=ba(v.type,v.key,v.props,null,u.mode,S),S.ref=Ds(u,g,v),S.return=u,u=S)}return o(u);case Gr:e:{for(A=v.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(u,g.sibling),g=r(g,v.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=rc(v,u.mode,S),g.return=u,u=g}return o(u);case Ti:return A=v._init,p(u,g,A(v._payload),S)}if(Vs(v))return _(u,g,v,S);if(Rs(v))return x(u,g,v,S);Wo(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,v),g.return=u,u=g):(n(u,g),g=ic(v,u.mode,S),g.return=u,u=g),o(u)):n(u,g)}return p}var hs=Qm(!0),Jm=Qm(!1),Wa=qi(null),ja=null,Zr=null,hd=null;function pd(){hd=Zr=ja=null}function md(t){var e=Wa.current;st(Wa),t._currentValue=e}function gu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function os(t,e){ja=t,hd=Zr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(en=!0),t.firstContext=null)}function An(t){var e=t._currentValue;if(hd!==t)if(t={context:t,memoizedValue:e,next:null},Zr===null){if(ja===null)throw Error(te(308));Zr=t,ja.dependencies={lanes:0,firstContext:t}}else Zr=Zr.next=t;return e}var lr=null;function gd(t){lr===null?lr=[t]:lr.push(t)}function eg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,gd(e)):(n.next=r.next,r.next=n),e.interleaved=n,pi(t,i)}function pi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var wi=!1;function vd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function di(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Oi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,pi(t,n)}return r=i.interleaved,r===null?(e.next=e,gd(i)):(e.next=r.next,r.next=e),i.interleaved=e,pi(t,n)}function Ea(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,nd(t,n)}}function Bf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Xa(t,e,n,i){var r=t.updateQueue;wi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,d=c=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,x=a;switch(f=e,m=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){h=_.call(m,h,f);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,f=typeof _=="function"?_.call(m,h,f):_,f==null)break e;h=ft({},h,f);break e;case 2:wi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=m,l=h):d=d.next=m,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);_r|=o,t.lanes=o,t.memoizedState=h}}function zf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var Ao={},$n=qi(Ao),po=qi(Ao),mo=qi(Ao);function cr(t){if(t===Ao)throw Error(te(174));return t}function _d(t,e){switch(nt(mo,e),nt(po,t),nt($n,Ao),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Kc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Kc(e,t)}st($n),nt($n,e)}function ps(){st($n),st(po),st(mo)}function ng(t){cr(mo.current);var e=cr($n.current),n=Kc(e,t.type);e!==n&&(nt(po,t),nt($n,n))}function xd(t){po.current===t&&(st($n),st(po))}var ut=qi(0);function qa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zl=[];function yd(){for(var t=0;t<Zl.length;t++)Zl[t]._workInProgressVersionPrimary=null;Zl.length=0}var Ta=vi.ReactCurrentDispatcher,Ql=vi.ReactCurrentBatchConfig,vr=0,dt=null,St=null,Rt=null,Ya=!1,Zs=!1,go=0,I0=0;function Ft(){throw Error(te(321))}function Sd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zn(t[n],e[n]))return!1;return!0}function Md(t,e,n,i,r,s){if(vr=s,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ta.current=t===null||t.memoizedState===null?k0:B0,t=n(i,r),Zs){s=0;do{if(Zs=!1,go=0,25<=s)throw Error(te(301));s+=1,Rt=St=null,e.updateQueue=null,Ta.current=z0,t=n(i,r)}while(Zs)}if(Ta.current=$a,e=St!==null&&St.next!==null,vr=0,Rt=St=dt=null,Ya=!1,e)throw Error(te(300));return t}function Ed(){var t=go!==0;return go=0,t}function jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?dt.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function Cn(){if(St===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=Rt===null?dt.memoizedState:Rt.next;if(e!==null)Rt=e,St=t;else{if(t===null)throw Error(te(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Rt===null?dt.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function vo(t,e){return typeof e=="function"?e(t):e}function Jl(t){var e=Cn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=St,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((vr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,dt.lanes|=d,_r|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,zn(i,e.memoizedState)||(en=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,dt.lanes|=s,_r|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ec(t){var e=Cn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);zn(s,e.memoizedState)||(en=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function ig(){}function rg(t,e){var n=dt,i=Cn(),r=e(),s=!zn(i.memoizedState,r);if(s&&(i.memoizedState=r,en=!0),i=i.queue,Td(ag.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Rt!==null&&Rt.memoizedState.tag&1){if(n.flags|=2048,_o(9,og.bind(null,n,i,r,e),void 0,null),bt===null)throw Error(te(349));vr&30||sg(n,e,r)}return r}function sg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function og(t,e,n,i){e.value=n,e.getSnapshot=i,lg(e)&&cg(t)}function ag(t,e,n){return n(function(){lg(e)&&cg(t)})}function lg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zn(t,n)}catch{return!0}}function cg(t){var e=pi(t,1);e!==null&&Bn(e,t,1,-1)}function Hf(t){var e=jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:t},e.queue=t,t=t.dispatch=F0.bind(null,dt,t),[e.memoizedState,t]}function _o(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function ug(){return Cn().memoizedState}function wa(t,e,n,i){var r=jn();dt.flags|=t,r.memoizedState=_o(1|e,n,void 0,i===void 0?null:i)}function ml(t,e,n,i){var r=Cn();i=i===void 0?null:i;var s=void 0;if(St!==null){var o=St.memoizedState;if(s=o.destroy,i!==null&&Sd(i,o.deps)){r.memoizedState=_o(e,n,s,i);return}}dt.flags|=t,r.memoizedState=_o(1|e,n,s,i)}function Gf(t,e){return wa(8390656,8,t,e)}function Td(t,e){return ml(2048,8,t,e)}function dg(t,e){return ml(4,2,t,e)}function fg(t,e){return ml(4,4,t,e)}function hg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function pg(t,e,n){return n=n!=null?n.concat([t]):null,ml(4,4,hg.bind(null,e,t),n)}function wd(){}function mg(t,e){var n=Cn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Sd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function gg(t,e){var n=Cn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Sd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function vg(t,e,n){return vr&21?(zn(n,e)||(n=Mm(),dt.lanes|=n,_r|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,en=!0),t.memoizedState=n)}function U0(t,e){var n=$e;$e=n!==0&&4>n?n:4,t(!0);var i=Ql.transition;Ql.transition={};try{t(!1),e()}finally{$e=n,Ql.transition=i}}function _g(){return Cn().memoizedState}function O0(t,e,n){var i=ki(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},xg(t))yg(e,n);else if(n=eg(t,e,n,i),n!==null){var r=$t();Bn(n,t,i,r),Sg(n,e,i)}}function F0(t,e,n){var i=ki(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(xg(t))yg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,zn(a,o)){var l=e.interleaved;l===null?(r.next=r,gd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=eg(t,e,r,i),n!==null&&(r=$t(),Bn(n,t,i,r),Sg(n,e,i))}}function xg(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function yg(t,e){Zs=Ya=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Sg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,nd(t,n)}}var $a={readContext:An,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},k0={readContext:An,useCallback:function(t,e){return jn().memoizedState=[t,e===void 0?null:e],t},useContext:An,useEffect:Gf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,wa(4194308,4,hg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wa(4194308,4,t,e)},useInsertionEffect:function(t,e){return wa(4,2,t,e)},useMemo:function(t,e){var n=jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=O0.bind(null,dt,t),[i.memoizedState,t]},useRef:function(t){var e=jn();return t={current:t},e.memoizedState=t},useState:Hf,useDebugValue:wd,useDeferredValue:function(t){return jn().memoizedState=t},useTransition:function(){var t=Hf(!1),e=t[0];return t=U0.bind(null,t[1]),jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=dt,r=jn();if(ot){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),bt===null)throw Error(te(349));vr&30||sg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Gf(ag.bind(null,i,s,t),[t]),i.flags|=2048,_o(9,og.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=jn(),e=bt.identifierPrefix;if(ot){var n=ci,i=li;n=(i&~(1<<32-kn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=go++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=I0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},B0={readContext:An,useCallback:mg,useContext:An,useEffect:Td,useImperativeHandle:pg,useInsertionEffect:dg,useLayoutEffect:fg,useMemo:gg,useReducer:Jl,useRef:ug,useState:function(){return Jl(vo)},useDebugValue:wd,useDeferredValue:function(t){var e=Cn();return vg(e,St.memoizedState,t)},useTransition:function(){var t=Jl(vo)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:ig,useSyncExternalStore:rg,useId:_g,unstable_isNewReconciler:!1},z0={readContext:An,useCallback:mg,useContext:An,useEffect:Td,useImperativeHandle:pg,useInsertionEffect:dg,useLayoutEffect:fg,useMemo:gg,useReducer:ec,useRef:ug,useState:function(){return ec(vo)},useDebugValue:wd,useDeferredValue:function(t){var e=Cn();return St===null?e.memoizedState=t:vg(e,St.memoizedState,t)},useTransition:function(){var t=ec(vo)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:ig,useSyncExternalStore:rg,useId:_g,unstable_isNewReconciler:!1};function Nn(t,e){if(t&&t.defaultProps){e=ft({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function vu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var gl={isMounted:function(t){return(t=t._reactInternals)?Tr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=$t(),r=ki(t),s=di(i,r);s.payload=e,n!=null&&(s.callback=n),e=Oi(t,s,r),e!==null&&(Bn(e,t,r,i),Ea(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=$t(),r=ki(t),s=di(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Oi(t,s,r),e!==null&&(Bn(e,t,r,i),Ea(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$t(),i=ki(t),r=di(n,i);r.tag=2,e!=null&&(r.callback=e),e=Oi(t,r,i),e!==null&&(Bn(e,t,i,n),Ea(e,t,i))}};function Vf(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!co(n,i)||!co(r,s):!0}function Mg(t,e,n){var i=!1,r=Wi,s=e.contextType;return typeof s=="object"&&s!==null?s=An(s):(r=nn(e)?mr:Gt.current,i=e.contextTypes,s=(i=i!=null)?ds(t,r):Wi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=gl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Wf(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&gl.enqueueReplaceState(e,e.state,null)}function _u(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},vd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=An(s):(s=nn(e)?mr:Gt.current,r.context=ds(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&gl.enqueueReplaceState(r,r.state,null),Xa(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ms(t,e){try{var n="",i=e;do n+=p_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function tc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var H0=typeof WeakMap=="function"?WeakMap:Map;function Eg(t,e,n){n=di(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Za||(Za=!0,bu=i),xu(t,e)},n}function Tg(t,e,n){n=di(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){xu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xu(t,e),typeof i!="function"&&(Fi===null?Fi=new Set([this]):Fi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function jf(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new H0;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=tx.bind(null,t,e,n),e.then(t,t))}function Xf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qf(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=di(-1,1),e.tag=2,Oi(n,e,1))),n.lanes|=1),t)}var G0=vi.ReactCurrentOwner,en=!1;function Xt(t,e,n,i){e.child=t===null?Jm(e,null,n,i):hs(e,t.child,n,i)}function Yf(t,e,n,i,r){n=n.render;var s=e.ref;return os(e,r),i=Md(t,e,n,i,s,r),n=Ed(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,mi(t,e,r)):(ot&&n&&ud(e),e.flags|=1,Xt(t,e,i,r),e.child)}function $f(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Dd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,wg(t,e,s,i,r)):(t=ba(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:co,n(o,i)&&t.ref===e.ref)return mi(t,e,r)}return e.flags|=1,t=Bi(s,i),t.ref=e.ref,t.return=e,e.child=t}function wg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(co(s,i)&&t.ref===e.ref)if(en=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(en=!0);else return e.lanes=t.lanes,mi(t,e,r)}return yu(t,e,n,i,r)}function Ag(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(Jr,cn),cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(Jr,cn),cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,nt(Jr,cn),cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,nt(Jr,cn),cn|=i;return Xt(t,e,r,n),e.child}function Cg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function yu(t,e,n,i,r){var s=nn(n)?mr:Gt.current;return s=ds(e,s),os(e,r),n=Md(t,e,n,i,s,r),i=Ed(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,mi(t,e,r)):(ot&&i&&ud(e),e.flags|=1,Xt(t,e,n,r),e.child)}function Kf(t,e,n,i,r){if(nn(n)){var s=!0;Ha(e)}else s=!1;if(os(e,r),e.stateNode===null)Aa(t,e),Mg(e,n,i),_u(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=An(c):(c=nn(n)?mr:Gt.current,c=ds(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Wf(e,o,i,c),wi=!1;var f=e.memoizedState;o.state=f,Xa(e,i,o,r),l=e.memoizedState,a!==i||f!==l||tn.current||wi?(typeof d=="function"&&(vu(e,n,d,i),l=e.memoizedState),(a=wi||Vf(e,n,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,tg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Nn(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=An(l):(l=nn(n)?mr:Gt.current,l=ds(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Wf(e,o,i,l),wi=!1,f=e.memoizedState,o.state=f,Xa(e,i,o,r);var _=e.memoizedState;a!==h||f!==_||tn.current||wi?(typeof m=="function"&&(vu(e,n,m,i),_=e.memoizedState),(c=wi||Vf(e,n,c,i,f,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Su(t,e,n,i,s,r)}function Su(t,e,n,i,r,s){Cg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Uf(e,n,!1),mi(t,e,s);i=e.stateNode,G0.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=hs(e,t.child,null,s),e.child=hs(e,null,a,s)):Xt(t,e,a,s),e.memoizedState=i.state,r&&Uf(e,n,!0),e.child}function Rg(t){var e=t.stateNode;e.pendingContext?If(t,e.pendingContext,e.pendingContext!==e.context):e.context&&If(t,e.context,!1),_d(t,e.containerInfo)}function Zf(t,e,n,i,r){return fs(),fd(r),e.flags|=256,Xt(t,e,n,i),e.child}var Mu={dehydrated:null,treeContext:null,retryLane:0};function Eu(t){return{baseLanes:t,cachePool:null,transitions:null}}function bg(t,e,n){var i=e.pendingProps,r=ut.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),nt(ut,r&1),t===null)return mu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xl(o,i,0,null),t=dr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Eu(n),e.memoizedState=Mu,t):Ad(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return V0(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Bi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Bi(a,s):(s=dr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Eu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Mu,i}return s=t.child,t=s.sibling,i=Bi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ad(t,e){return e=xl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function jo(t,e,n,i){return i!==null&&fd(i),hs(e,t.child,null,n),t=Ad(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function V0(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=tc(Error(te(422))),jo(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=xl({mode:"visible",children:i.children},r,0,null),s=dr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&hs(e,t.child,null,o),e.child.memoizedState=Eu(o),e.memoizedState=Mu,s);if(!(e.mode&1))return jo(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=tc(s,i,void 0),jo(t,e,o,i)}if(a=(o&t.childLanes)!==0,en||a){if(i=bt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,pi(t,r),Bn(i,t,r,-1))}return Nd(),i=tc(Error(te(421))),jo(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=nx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,fn=Ui(r.nextSibling),hn=e,ot=!0,In=null,t!==null&&(yn[Sn++]=li,yn[Sn++]=ci,yn[Sn++]=gr,li=t.id,ci=t.overflow,gr=e),e=Ad(e,i.children),e.flags|=4096,e)}function Qf(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),gu(t.return,e,n)}function nc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Lg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Xt(t,e,i.children,n),i=ut.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qf(t,n,e);else if(t.tag===19)Qf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(nt(ut,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&qa(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),nc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&qa(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}nc(e,!0,n,null,s);break;case"together":nc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Aa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function mi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),_r|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=Bi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Bi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function W0(t,e,n){switch(e.tag){case 3:Rg(e),fs();break;case 5:ng(e);break;case 1:nn(e.type)&&Ha(e);break;case 4:_d(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt(Wa,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(ut,ut.current&1),e.flags|=128,null):n&e.child.childLanes?bg(t,e,n):(nt(ut,ut.current&1),t=mi(t,e,n),t!==null?t.sibling:null);nt(ut,ut.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Lg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(ut,ut.current),i)break;return null;case 22:case 23:return e.lanes=0,Ag(t,e,n)}return mi(t,e,n)}var Pg,Tu,Ng,Dg;Pg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Tu=function(){};Ng=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,cr($n.current);var s=null;switch(n){case"input":r=Xc(t,r),i=Xc(t,i),s=[];break;case"select":r=ft({},r,{value:void 0}),i=ft({},i,{value:void 0}),s=[];break;case"textarea":r=$c(t,r),i=$c(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ba)}Zc(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(no.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(no.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&it("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Dg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Is(t,e){if(!ot)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function j0(t,e,n){var i=e.pendingProps;switch(dd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return nn(e.type)&&za(),kt(e),null;case 3:return i=e.stateNode,ps(),st(tn),st(Gt),yd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Vo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,In!==null&&(Nu(In),In=null))),Tu(t,e),kt(e),null;case 5:xd(e);var r=cr(mo.current);if(n=e.type,t!==null&&e.stateNode!=null)Ng(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return kt(e),null}if(t=cr($n.current),Vo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[qn]=e,i[ho]=s,t=(e.mode&1)!==0,n){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<js.length;r++)it(js[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":af(i,s),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},it("invalid",i);break;case"textarea":cf(i,s),it("invalid",i)}Zc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Go(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Go(i.textContent,a,t),r=["children",""+a]):no.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&it("scroll",i)}switch(n){case"input":Io(i),lf(i,s,!0);break;case"textarea":Io(i),uf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ba)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=am(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[qn]=e,t[ho]=i,Pg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Qc(n,i),n){case"dialog":it("cancel",t),it("close",t),r=i;break;case"iframe":case"object":case"embed":it("load",t),r=i;break;case"video":case"audio":for(r=0;r<js.length;r++)it(js[r],t);r=i;break;case"source":it("error",t),r=i;break;case"img":case"image":case"link":it("error",t),it("load",t),r=i;break;case"details":it("toggle",t),r=i;break;case"input":af(t,i),r=Xc(t,i),it("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ft({},i,{value:void 0}),it("invalid",t);break;case"textarea":cf(t,i),r=$c(t,i),it("invalid",t);break;default:r=i}Zc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?um(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&lm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&io(t,l):typeof l=="number"&&io(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(no.hasOwnProperty(s)?l!=null&&s==="onScroll"&&it("scroll",t):l!=null&&Ku(t,s,l,o))}switch(n){case"input":Io(t),lf(t,i,!1);break;case"textarea":Io(t),uf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Vi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ns(t,!!i.multiple,s,!1):i.defaultValue!=null&&ns(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ba)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(t&&e.stateNode!=null)Dg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=cr(mo.current),cr($n.current),Vo(e)){if(i=e.stateNode,n=e.memoizedProps,i[qn]=e,(s=i.nodeValue!==n)&&(t=hn,t!==null))switch(t.tag){case 3:Go(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Go(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[qn]=e,e.stateNode=i}return kt(e),null;case 13:if(st(ut),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ot&&fn!==null&&e.mode&1&&!(e.flags&128))Zm(),fs(),e.flags|=98560,s=!1;else if(s=Vo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[qn]=e}else fs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),s=!1}else In!==null&&(Nu(In),In=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ut.current&1?Mt===0&&(Mt=3):Nd())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return ps(),Tu(t,e),t===null&&uo(e.stateNode.containerInfo),kt(e),null;case 10:return md(e.type._context),kt(e),null;case 17:return nn(e.type)&&za(),kt(e),null;case 19:if(st(ut),s=e.memoizedState,s===null)return kt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Is(s,!1);else{if(Mt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=qa(t),o!==null){for(e.flags|=128,Is(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(ut,ut.current&1|2),e.child}t=t.sibling}s.tail!==null&&vt()>gs&&(e.flags|=128,i=!0,Is(s,!1),e.lanes=4194304)}else{if(!i)if(t=qa(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Is(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ot)return kt(e),null}else 2*vt()-s.renderingStartTime>gs&&n!==1073741824&&(e.flags|=128,i=!0,Is(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=vt(),e.sibling=null,n=ut.current,nt(ut,i?n&1|2:n&1),e):(kt(e),null);case 22:case 23:return Pd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?cn&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function X0(t,e){switch(dd(e),e.tag){case 1:return nn(e.type)&&za(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ps(),st(tn),st(Gt),yd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return xd(e),null;case 13:if(st(ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));fs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return st(ut),null;case 4:return ps(),null;case 10:return md(e.type._context),null;case 22:case 23:return Pd(),null;case 24:return null;default:return null}}var Xo=!1,Ht=!1,q0=typeof WeakSet=="function"?WeakSet:Set,fe=null;function Qr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){mt(t,e,i)}else n.current=null}function wu(t,e,n){try{n()}catch(i){mt(t,e,i)}}var Jf=!1;function Y0(t,e){if(lu=Oa,t=km(),cd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)f=h,h=m;for(;;){if(h===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++d===i&&(l=o),(m=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(cu={focusedElem:t,selectionRange:n},Oa=!1,fe=e;fe!==null;)if(e=fe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,fe=t;else for(;fe!==null;){e=fe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,p=_.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:Nn(e.type,x),p);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(S){mt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,fe=t;break}fe=e.return}return _=Jf,Jf=!1,_}function Qs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&wu(e,n,s)}r=r.next}while(r!==i)}}function vl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Au(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ig(t){var e=t.alternate;e!==null&&(t.alternate=null,Ig(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qn],delete e[ho],delete e[fu],delete e[L0],delete e[P0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ug(t){return t.tag===5||t.tag===3||t.tag===4}function eh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ug(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ba));else if(i!==4&&(t=t.child,t!==null))for(Cu(t,e,n),t=t.sibling;t!==null;)Cu(t,e,n),t=t.sibling}function Ru(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ru(t,e,n),t=t.sibling;t!==null;)Ru(t,e,n),t=t.sibling}var Lt=null,Dn=!1;function _i(t,e,n){for(n=n.child;n!==null;)Og(t,e,n),n=n.sibling}function Og(t,e,n){if(Yn&&typeof Yn.onCommitFiberUnmount=="function")try{Yn.onCommitFiberUnmount(cl,n)}catch{}switch(n.tag){case 5:Ht||Qr(n,e);case 6:var i=Lt,r=Dn;Lt=null,_i(t,e,n),Lt=i,Dn=r,Lt!==null&&(Dn?(t=Lt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Lt.removeChild(n.stateNode));break;case 18:Lt!==null&&(Dn?(t=Lt,n=n.stateNode,t.nodeType===8?$l(t.parentNode,n):t.nodeType===1&&$l(t,n),ao(t)):$l(Lt,n.stateNode));break;case 4:i=Lt,r=Dn,Lt=n.stateNode.containerInfo,Dn=!0,_i(t,e,n),Lt=i,Dn=r;break;case 0:case 11:case 14:case 15:if(!Ht&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&wu(n,e,o),r=r.next}while(r!==i)}_i(t,e,n);break;case 1:if(!Ht&&(Qr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){mt(n,e,a)}_i(t,e,n);break;case 21:_i(t,e,n);break;case 22:n.mode&1?(Ht=(i=Ht)||n.memoizedState!==null,_i(t,e,n),Ht=i):_i(t,e,n);break;default:_i(t,e,n)}}function th(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new q0),e.forEach(function(i){var r=ix.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Rn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Lt=a.stateNode,Dn=!1;break e;case 3:Lt=a.stateNode.containerInfo,Dn=!0;break e;case 4:Lt=a.stateNode.containerInfo,Dn=!0;break e}a=a.return}if(Lt===null)throw Error(te(160));Og(s,o,r),Lt=null,Dn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Fg(e,t),e=e.sibling}function Fg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Rn(e,t),Wn(t),i&4){try{Qs(3,t,t.return),vl(3,t)}catch(x){mt(t,t.return,x)}try{Qs(5,t,t.return)}catch(x){mt(t,t.return,x)}}break;case 1:Rn(e,t),Wn(t),i&512&&n!==null&&Qr(n,n.return);break;case 5:if(Rn(e,t),Wn(t),i&512&&n!==null&&Qr(n,n.return),t.flags&32){var r=t.stateNode;try{io(r,"")}catch(x){mt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&sm(r,s),Qc(a,o);var c=Qc(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?um(r,h):d==="dangerouslySetInnerHTML"?lm(r,h):d==="children"?io(r,h):Ku(r,d,h,c)}switch(a){case"input":qc(r,s);break;case"textarea":om(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ns(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?ns(r,!!s.multiple,s.defaultValue,!0):ns(r,!!s.multiple,s.multiple?[]:"",!1))}r[ho]=s}catch(x){mt(t,t.return,x)}}break;case 6:if(Rn(e,t),Wn(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){mt(t,t.return,x)}}break;case 3:if(Rn(e,t),Wn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ao(e.containerInfo)}catch(x){mt(t,t.return,x)}break;case 4:Rn(e,t),Wn(t);break;case 13:Rn(e,t),Wn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(bd=vt())),i&4&&th(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ht=(c=Ht)||d,Rn(e,t),Ht=c):Rn(e,t),Wn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(fe=t,d=t.child;d!==null;){for(h=fe=d;fe!==null;){switch(f=fe,m=f.child,f.tag){case 0:case 11:case 14:case 15:Qs(4,f,f.return);break;case 1:Qr(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){mt(i,n,x)}}break;case 5:Qr(f,f.return);break;case 22:if(f.memoizedState!==null){ih(h);continue}}m!==null?(m.return=f,fe=m):ih(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=cm("display",o))}catch(x){mt(t,t.return,x)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(x){mt(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Rn(e,t),Wn(t),i&4&&th(t);break;case 21:break;default:Rn(e,t),Wn(t)}}function Wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ug(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(io(r,""),i.flags&=-33);var s=eh(t);Ru(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=eh(t);Cu(t,a,o);break;default:throw Error(te(161))}}catch(l){mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $0(t,e,n){fe=t,kg(t)}function kg(t,e,n){for(var i=(t.mode&1)!==0;fe!==null;){var r=fe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Xo;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ht;a=Xo;var c=Ht;if(Xo=o,(Ht=l)&&!c)for(fe=r;fe!==null;)o=fe,l=o.child,o.tag===22&&o.memoizedState!==null?rh(r):l!==null?(l.return=o,fe=l):rh(r);for(;s!==null;)fe=s,kg(s),s=s.sibling;fe=r,Xo=a,Ht=c}nh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,fe=s):nh(t)}}function nh(t){for(;fe!==null;){var e=fe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ht||vl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ht)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Nn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&zf(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zf(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&ao(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Ht||e.flags&512&&Au(e)}catch(f){mt(e,e.return,f)}}if(e===t){fe=null;break}if(n=e.sibling,n!==null){n.return=e.return,fe=n;break}fe=e.return}}function ih(t){for(;fe!==null;){var e=fe;if(e===t){fe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,fe=n;break}fe=e.return}}function rh(t){for(;fe!==null;){var e=fe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{vl(4,e)}catch(l){mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){mt(e,r,l)}}var s=e.return;try{Au(e)}catch(l){mt(e,s,l)}break;case 5:var o=e.return;try{Au(e)}catch(l){mt(e,o,l)}}}catch(l){mt(e,e.return,l)}if(e===t){fe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,fe=a;break}fe=e.return}}var K0=Math.ceil,Ka=vi.ReactCurrentDispatcher,Cd=vi.ReactCurrentOwner,wn=vi.ReactCurrentBatchConfig,qe=0,bt=null,yt=null,Nt=0,cn=0,Jr=qi(0),Mt=0,xo=null,_r=0,_l=0,Rd=0,Js=null,Jt=null,bd=0,gs=1/0,ri=null,Za=!1,bu=null,Fi=null,qo=!1,bi=null,Qa=0,eo=0,Lu=null,Ca=-1,Ra=0;function $t(){return qe&6?vt():Ca!==-1?Ca:Ca=vt()}function ki(t){return t.mode&1?qe&2&&Nt!==0?Nt&-Nt:D0.transition!==null?(Ra===0&&(Ra=Mm()),Ra):(t=$e,t!==0||(t=window.event,t=t===void 0?16:bm(t.type)),t):1}function Bn(t,e,n,i){if(50<eo)throw eo=0,Lu=null,Error(te(185));Eo(t,n,i),(!(qe&2)||t!==bt)&&(t===bt&&(!(qe&2)&&(_l|=n),Mt===4&&Ci(t,Nt)),rn(t,i),n===1&&qe===0&&!(e.mode&1)&&(gs=vt()+500,pl&&Yi()))}function rn(t,e){var n=t.callbackNode;D_(t,e);var i=Ua(t,t===bt?Nt:0);if(i===0)n!==null&&hf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&hf(n),e===1)t.tag===0?N0(sh.bind(null,t)):Ym(sh.bind(null,t)),R0(function(){!(qe&6)&&Yi()}),n=null;else{switch(Em(i)){case 1:n=td;break;case 4:n=ym;break;case 16:n=Ia;break;case 536870912:n=Sm;break;default:n=Ia}n=Xg(n,Bg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Bg(t,e){if(Ca=-1,Ra=0,qe&6)throw Error(te(327));var n=t.callbackNode;if(as()&&t.callbackNode!==n)return null;var i=Ua(t,t===bt?Nt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ja(t,i);else{e=i;var r=qe;qe|=2;var s=Hg();(bt!==t||Nt!==e)&&(ri=null,gs=vt()+500,ur(t,e));do try{J0();break}catch(a){zg(t,a)}while(!0);pd(),Ka.current=s,qe=r,yt!==null?e=0:(bt=null,Nt=0,e=Mt)}if(e!==0){if(e===2&&(r=iu(t),r!==0&&(i=r,e=Pu(t,r))),e===1)throw n=xo,ur(t,0),Ci(t,i),rn(t,vt()),n;if(e===6)Ci(t,i);else{if(r=t.current.alternate,!(i&30)&&!Z0(r)&&(e=Ja(t,i),e===2&&(s=iu(t),s!==0&&(i=s,e=Pu(t,s))),e===1))throw n=xo,ur(t,0),Ci(t,i),rn(t,vt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:nr(t,Jt,ri);break;case 3:if(Ci(t,i),(i&130023424)===i&&(e=bd+500-vt(),10<e)){if(Ua(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){$t(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=du(nr.bind(null,t,Jt,ri),e);break}nr(t,Jt,ri);break;case 4:if(Ci(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-kn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*K0(i/1960))-i,10<i){t.timeoutHandle=du(nr.bind(null,t,Jt,ri),i);break}nr(t,Jt,ri);break;case 5:nr(t,Jt,ri);break;default:throw Error(te(329))}}}return rn(t,vt()),t.callbackNode===n?Bg.bind(null,t):null}function Pu(t,e){var n=Js;return t.current.memoizedState.isDehydrated&&(ur(t,e).flags|=256),t=Ja(t,e),t!==2&&(e=Jt,Jt=n,e!==null&&Nu(e)),t}function Nu(t){Jt===null?Jt=t:Jt.push.apply(Jt,t)}function Z0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!zn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ci(t,e){for(e&=~Rd,e&=~_l,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-kn(e),i=1<<n;t[n]=-1,e&=~i}}function sh(t){if(qe&6)throw Error(te(327));as();var e=Ua(t,0);if(!(e&1))return rn(t,vt()),null;var n=Ja(t,e);if(t.tag!==0&&n===2){var i=iu(t);i!==0&&(e=i,n=Pu(t,i))}if(n===1)throw n=xo,ur(t,0),Ci(t,e),rn(t,vt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,nr(t,Jt,ri),rn(t,vt()),null}function Ld(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(gs=vt()+500,pl&&Yi())}}function xr(t){bi!==null&&bi.tag===0&&!(qe&6)&&as();var e=qe;qe|=1;var n=wn.transition,i=$e;try{if(wn.transition=null,$e=1,t)return t()}finally{$e=i,wn.transition=n,qe=e,!(qe&6)&&Yi()}}function Pd(){cn=Jr.current,st(Jr)}function ur(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,C0(n)),yt!==null)for(n=yt.return;n!==null;){var i=n;switch(dd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&za();break;case 3:ps(),st(tn),st(Gt),yd();break;case 5:xd(i);break;case 4:ps();break;case 13:st(ut);break;case 19:st(ut);break;case 10:md(i.type._context);break;case 22:case 23:Pd()}n=n.return}if(bt=t,yt=t=Bi(t.current,null),Nt=cn=e,Mt=0,xo=null,Rd=_l=_r=0,Jt=Js=null,lr!==null){for(e=0;e<lr.length;e++)if(n=lr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}lr=null}return t}function zg(t,e){do{var n=yt;try{if(pd(),Ta.current=$a,Ya){for(var i=dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ya=!1}if(vr=0,Rt=St=dt=null,Zs=!1,go=0,Cd.current=null,n===null||n.return===null){Mt=1,xo=e,yt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Nt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Xf(o);if(m!==null){m.flags&=-257,qf(m,o,a,s,e),m.mode&1&&jf(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){jf(s,c,e),Nd();break e}l=Error(te(426))}}else if(ot&&a.mode&1){var p=Xf(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),qf(p,o,a,s,e),fd(ms(l,a));break e}}s=l=ms(l,a),Mt!==4&&(Mt=2),Js===null?Js=[s]:Js.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Eg(s,l,e);Bf(s,u);break e;case 1:a=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Fi===null||!Fi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Tg(s,a,e);Bf(s,S);break e}}s=s.return}while(s!==null)}Vg(n)}catch(b){e=b,yt===n&&n!==null&&(yt=n=n.return);continue}break}while(!0)}function Hg(){var t=Ka.current;return Ka.current=$a,t===null?$a:t}function Nd(){(Mt===0||Mt===3||Mt===2)&&(Mt=4),bt===null||!(_r&268435455)&&!(_l&268435455)||Ci(bt,Nt)}function Ja(t,e){var n=qe;qe|=2;var i=Hg();(bt!==t||Nt!==e)&&(ri=null,ur(t,e));do try{Q0();break}catch(r){zg(t,r)}while(!0);if(pd(),qe=n,Ka.current=i,yt!==null)throw Error(te(261));return bt=null,Nt=0,Mt}function Q0(){for(;yt!==null;)Gg(yt)}function J0(){for(;yt!==null&&!T_();)Gg(yt)}function Gg(t){var e=jg(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?Vg(t):yt=e,Cd.current=null}function Vg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=X0(n,e),n!==null){n.flags&=32767,yt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Mt=6,yt=null;return}}else if(n=j0(n,e,cn),n!==null){yt=n;return}if(e=e.sibling,e!==null){yt=e;return}yt=e=t}while(e!==null);Mt===0&&(Mt=5)}function nr(t,e,n){var i=$e,r=wn.transition;try{wn.transition=null,$e=1,ex(t,e,n,i)}finally{wn.transition=r,$e=i}return null}function ex(t,e,n,i){do as();while(bi!==null);if(qe&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(I_(t,s),t===bt&&(yt=bt=null,Nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qo||(qo=!0,Xg(Ia,function(){return as(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=wn.transition,wn.transition=null;var o=$e;$e=1;var a=qe;qe|=4,Cd.current=null,Y0(t,n),Fg(n,t),y0(cu),Oa=!!lu,cu=lu=null,t.current=n,$0(n),w_(),qe=a,$e=o,wn.transition=s}else t.current=n;if(qo&&(qo=!1,bi=t,Qa=r),s=t.pendingLanes,s===0&&(Fi=null),R_(n.stateNode),rn(t,vt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Za)throw Za=!1,t=bu,bu=null,t;return Qa&1&&t.tag!==0&&as(),s=t.pendingLanes,s&1?t===Lu?eo++:(eo=0,Lu=t):eo=0,Yi(),null}function as(){if(bi!==null){var t=Em(Qa),e=wn.transition,n=$e;try{if(wn.transition=null,$e=16>t?16:t,bi===null)var i=!1;else{if(t=bi,bi=null,Qa=0,qe&6)throw Error(te(331));var r=qe;for(qe|=4,fe=t.current;fe!==null;){var s=fe,o=s.child;if(fe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(fe=c;fe!==null;){var d=fe;switch(d.tag){case 0:case 11:case 15:Qs(8,d,s)}var h=d.child;if(h!==null)h.return=d,fe=h;else for(;fe!==null;){d=fe;var f=d.sibling,m=d.return;if(Ig(d),d===c){fe=null;break}if(f!==null){f.return=m,fe=f;break}fe=m}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}fe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,fe=o;else e:for(;fe!==null;){if(s=fe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Qs(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,fe=u;break e}fe=s.return}}var g=t.current;for(fe=g;fe!==null;){o=fe;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,fe=v;else e:for(o=g;fe!==null;){if(a=fe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:vl(9,a)}}catch(b){mt(a,a.return,b)}if(a===o){fe=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,fe=S;break e}fe=a.return}}if(qe=r,Yi(),Yn&&typeof Yn.onPostCommitFiberRoot=="function")try{Yn.onPostCommitFiberRoot(cl,t)}catch{}i=!0}return i}finally{$e=n,wn.transition=e}}return!1}function oh(t,e,n){e=ms(n,e),e=Eg(t,e,1),t=Oi(t,e,1),e=$t(),t!==null&&(Eo(t,1,e),rn(t,e))}function mt(t,e,n){if(t.tag===3)oh(t,t,n);else for(;e!==null;){if(e.tag===3){oh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Fi===null||!Fi.has(i))){t=ms(n,t),t=Tg(e,t,1),e=Oi(e,t,1),t=$t(),e!==null&&(Eo(e,1,t),rn(e,t));break}}e=e.return}}function tx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=$t(),t.pingedLanes|=t.suspendedLanes&n,bt===t&&(Nt&n)===n&&(Mt===4||Mt===3&&(Nt&130023424)===Nt&&500>vt()-bd?ur(t,0):Rd|=n),rn(t,e)}function Wg(t,e){e===0&&(t.mode&1?(e=Fo,Fo<<=1,!(Fo&130023424)&&(Fo=4194304)):e=1);var n=$t();t=pi(t,e),t!==null&&(Eo(t,e,n),rn(t,n))}function nx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Wg(t,n)}function ix(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),Wg(t,n)}var jg;jg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tn.current)en=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return en=!1,W0(t,e,n);en=!!(t.flags&131072)}else en=!1,ot&&e.flags&1048576&&$m(e,Va,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Aa(t,e),t=e.pendingProps;var r=ds(e,Gt.current);os(e,n),r=Md(null,e,i,t,r,n);var s=Ed();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nn(i)?(s=!0,Ha(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,vd(e),r.updater=gl,e.stateNode=r,r._reactInternals=e,_u(e,i,t,n),e=Su(null,e,i,!0,s,n)):(e.tag=0,ot&&s&&ud(e),Xt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Aa(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=sx(i),t=Nn(i,t),r){case 0:e=yu(null,e,i,t,n);break e;case 1:e=Kf(null,e,i,t,n);break e;case 11:e=Yf(null,e,i,t,n);break e;case 14:e=$f(null,e,i,Nn(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),yu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Kf(t,e,i,r,n);case 3:e:{if(Rg(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,tg(t,e),Xa(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ms(Error(te(423)),e),e=Zf(t,e,i,n,r);break e}else if(i!==r){r=ms(Error(te(424)),e),e=Zf(t,e,i,n,r);break e}else for(fn=Ui(e.stateNode.containerInfo.firstChild),hn=e,ot=!0,In=null,n=Jm(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fs(),i===r){e=mi(t,e,n);break e}Xt(t,e,i,n)}e=e.child}return e;case 5:return ng(e),t===null&&mu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,uu(i,r)?o=null:s!==null&&uu(i,s)&&(e.flags|=32),Cg(t,e),Xt(t,e,o,n),e.child;case 6:return t===null&&mu(e),null;case 13:return bg(t,e,n);case 4:return _d(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=hs(e,null,i,n):Xt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Yf(t,e,i,r,n);case 7:return Xt(t,e,e.pendingProps,n),e.child;case 8:return Xt(t,e,e.pendingProps.children,n),e.child;case 12:return Xt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,nt(Wa,i._currentValue),i._currentValue=o,s!==null)if(zn(s.value,o)){if(s.children===r.children&&!tn.current){e=mi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=di(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),gu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),gu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Xt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,os(e,n),r=An(r),i=i(r),e.flags|=1,Xt(t,e,i,n),e.child;case 14:return i=e.type,r=Nn(i,e.pendingProps),r=Nn(i.type,r),$f(t,e,i,r,n);case 15:return wg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Aa(t,e),e.tag=1,nn(i)?(t=!0,Ha(e)):t=!1,os(e,n),Mg(e,i,r),_u(e,i,r,n),Su(null,e,i,!0,t,n);case 19:return Lg(t,e,n);case 22:return Ag(t,e,n)}throw Error(te(156,e.tag))};function Xg(t,e){return xm(t,e)}function rx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(t,e,n,i){return new rx(t,e,n,i)}function Dd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sx(t){if(typeof t=="function")return Dd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qu)return 11;if(t===Ju)return 14}return 2}function Bi(t,e){var n=t.alternate;return n===null?(n=Tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ba(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Dd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Vr:return dr(n.children,r,s,e);case Zu:o=8,r|=8;break;case Gc:return t=Tn(12,n,e,r|2),t.elementType=Gc,t.lanes=s,t;case Vc:return t=Tn(13,n,e,r),t.elementType=Vc,t.lanes=s,t;case Wc:return t=Tn(19,n,e,r),t.elementType=Wc,t.lanes=s,t;case nm:return xl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case em:o=10;break e;case tm:o=9;break e;case Qu:o=11;break e;case Ju:o=14;break e;case Ti:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=Tn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function dr(t,e,n,i){return t=Tn(7,t,i,e),t.lanes=n,t}function xl(t,e,n,i){return t=Tn(22,t,i,e),t.elementType=nm,t.lanes=n,t.stateNode={isHidden:!1},t}function ic(t,e,n){return t=Tn(6,t,null,e),t.lanes=n,t}function rc(t,e,n){return e=Tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ox(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kl(0),this.expirationTimes=kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Id(t,e,n,i,r,s,o,a,l){return t=new ox(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vd(s),t}function ax(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function qg(t){if(!t)return Wi;t=t._reactInternals;e:{if(Tr(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(nn(n))return qm(t,n,e)}return e}function Yg(t,e,n,i,r,s,o,a,l){return t=Id(n,i,!0,t,r,s,o,a,l),t.context=qg(null),n=t.current,i=$t(),r=ki(n),s=di(i,r),s.callback=e??null,Oi(n,s,r),t.current.lanes=r,Eo(t,r,i),rn(t,i),t}function yl(t,e,n,i){var r=e.current,s=$t(),o=ki(r);return n=qg(n),e.context===null?e.context=n:e.pendingContext=n,e=di(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Oi(r,e,o),t!==null&&(Bn(t,r,o,s),Ea(t,r,o)),o}function el(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ah(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ud(t,e){ah(t,e),(t=t.alternate)&&ah(t,e)}function lx(){return null}var $g=typeof reportError=="function"?reportError:function(t){console.error(t)};function Od(t){this._internalRoot=t}Sl.prototype.render=Od.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));yl(t,e,null,null)};Sl.prototype.unmount=Od.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;xr(function(){yl(null,t,null,null)}),e[hi]=null}};function Sl(t){this._internalRoot=t}Sl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Am();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ai.length&&e!==0&&e<Ai[n].priority;n++);Ai.splice(n,0,t),n===0&&Rm(t)}};function Fd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ml(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function lh(){}function cx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=el(o);s.call(c)}}var o=Yg(e,i,t,0,null,!1,!1,"",lh);return t._reactRootContainer=o,t[hi]=o.current,uo(t.nodeType===8?t.parentNode:t),xr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=el(l);a.call(c)}}var l=Id(t,0,!1,null,null,!1,!1,"",lh);return t._reactRootContainer=l,t[hi]=l.current,uo(t.nodeType===8?t.parentNode:t),xr(function(){yl(e,l,n,i)}),l}function El(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=el(o);a.call(l)}}yl(e,o,t,r)}else o=cx(n,e,t,r,i);return el(o)}Tm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ws(e.pendingLanes);n!==0&&(nd(e,n|1),rn(e,vt()),!(qe&6)&&(gs=vt()+500,Yi()))}break;case 13:xr(function(){var i=pi(t,1);if(i!==null){var r=$t();Bn(i,t,1,r)}}),Ud(t,1)}};id=function(t){if(t.tag===13){var e=pi(t,134217728);if(e!==null){var n=$t();Bn(e,t,134217728,n)}Ud(t,134217728)}};wm=function(t){if(t.tag===13){var e=ki(t),n=pi(t,e);if(n!==null){var i=$t();Bn(n,t,e,i)}Ud(t,e)}};Am=function(){return $e};Cm=function(t,e){var n=$e;try{return $e=t,e()}finally{$e=n}};eu=function(t,e,n){switch(e){case"input":if(qc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=hl(i);if(!r)throw Error(te(90));rm(i),qc(i,r)}}}break;case"textarea":om(t,n);break;case"select":e=n.value,e!=null&&ns(t,!!n.multiple,e,!1)}};hm=Ld;pm=xr;var ux={usingClientEntryPoint:!1,Events:[wo,qr,hl,dm,fm,Ld]},Us={findFiberByHostInstance:ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dx={bundleType:Us.bundleType,version:Us.version,rendererPackageName:Us.rendererPackageName,rendererConfig:Us.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=vm(t),t===null?null:t.stateNode},findFiberByHostInstance:Us.findFiberByHostInstance||lx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yo.isDisabled&&Yo.supportsFiber)try{cl=Yo.inject(dx),Yn=Yo}catch{}}gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ux;gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fd(e))throw Error(te(200));return ax(t,e,null,n)};gn.createRoot=function(t,e){if(!Fd(t))throw Error(te(299));var n=!1,i="",r=$g;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Id(t,1,!1,null,null,n,!1,i,r),t[hi]=e.current,uo(t.nodeType===8?t.parentNode:t),new Od(e)};gn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=vm(e),t=t===null?null:t.stateNode,t};gn.flushSync=function(t){return xr(t)};gn.hydrate=function(t,e,n){if(!Ml(e))throw Error(te(200));return El(null,t,e,!0,n)};gn.hydrateRoot=function(t,e,n){if(!Fd(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=$g;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Yg(e,null,t,1,n??null,r,!1,s,o),t[hi]=e.current,uo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Sl(e)};gn.render=function(t,e,n){if(!Ml(e))throw Error(te(200));return El(null,t,e,!1,n)};gn.unmountComponentAtNode=function(t){if(!Ml(t))throw Error(te(40));return t._reactRootContainer?(xr(function(){El(null,null,t,!1,function(){t._reactRootContainer=null,t[hi]=null})}),!0):!1};gn.unstable_batchedUpdates=Ld;gn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ml(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return El(t,e,n,!1,i)};gn.version="18.3.1-next-f1338f8080-20240426";function Kg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kg)}catch(t){console.error(t)}}Kg(),Kp.exports=gn;var fx=Kp.exports,ch=fx;zc.createRoot=ch.createRoot,zc.hydrateRoot=ch.hydrateRoot;/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=t=>{const e=px(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var sc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},gx=Se.createContext({}),vx=()=>Se.useContext(gx),_x=Se.forwardRef(({color:t,size:e,strokeWidth:n,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>{const{size:c=24,strokeWidth:d=2,absoluteStrokeWidth:h=!1,color:f="currentColor",className:m=""}=vx()??{},_=i??h?Number(n??d)*24/Number(e??c):n??d;return Se.createElement("svg",{ref:l,...sc,width:e??c??sc.width,height:e??c??sc.height,stroke:t??f,strokeWidth:_,className:Zg("lucide",m,r),...!s&&!mx(a)&&{"aria-hidden":"true"},...a},[...o.map(([x,p])=>Se.createElement(x,p)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=(t,e)=>{const n=Se.forwardRef(({className:i,...r},s)=>Se.createElement(_x,{ref:s,iconNode:e,className:Zg(`lucide-${hx(uh(t))}`,`lucide-${t}`,i),...r}));return n.displayName=uh(t),n};/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],tl=Hn("arrow-right",xx);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],Sx=Hn("building-2",yx);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=[["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3",key:"cabbwy"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",key:"1uxh74"}]],Ex=Hn("building",Mx);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],wx=Hn("clock",Tx);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]],Cx=Hn("compass",Ax);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],bx=Hn("moon",Rx);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Px=Hn("phone",Lx);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Dx=Hn("play",Nx);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Ux=Hn("shield-check",Ix);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Fx=Hn("sun",Ox);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],Bx=Hn("wrench",kx);function zx({onOpenQuote:t,theme:e,onToggleTheme:n}){const[i,r]=Se.useState(!1);return Se.useEffect(()=>{const s=()=>{r(window.scrollY>60)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]),y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"buildhub-top-bar",children:y.jsxs("div",{className:"container top-bar-inner",children:[y.jsxs("div",{className:"top-bar-left",children:[y.jsx("span",{className:"top-nav-link",style:{cursor:"pointer"},children:"‹ TEMPLATES CATALOG"}),y.jsx("span",{className:"sep",children:"|"}),y.jsx("a",{href:"#home",className:"top-nav-link",children:"MAIN PORTAL"})]}),y.jsxs("div",{className:"top-bar-right",children:[y.jsxs("button",{className:"theme-toggle-pill",onClick:n,title:"Toggle Light / Dark Mode",style:{cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"},children:[e==="light"?y.jsx(bx,{size:14}):y.jsx(Fx,{size:14}),y.jsx("span",{children:e==="light"?"DARK MODE":"LIGHT MODE"})]}),y.jsx("span",{className:"tpl-tag",children:"REACT + SPRING BOOT 3 • 3D BIM"})]})]})}),y.jsx("header",{className:`site-header ${i?"scrolled":""}`,id:"siteHeader",children:y.jsx("div",{className:"container",children:y.jsxs("div",{className:"nav-inner",children:[y.jsxs("a",{href:"#home",className:"brand-logo",children:[y.jsx("div",{className:"logo-icon",children:y.jsxs("svg",{width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",children:[y.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5z"}),y.jsx("path",{d:"M2 17l10 5 10-5"}),y.jsx("path",{d:"M2 12l10 5 10-5"})]})}),y.jsxs("div",{className:"logo-text",children:[y.jsx("span",{className:"logo-main",children:"BUILDHUB"}),y.jsx("span",{className:"logo-sub",children:"CONSTRUCTIONS"})]})]}),y.jsxs("ul",{className:"nav-menu",children:[y.jsx("li",{children:y.jsx("a",{href:"#home",className:"nav-link active",children:"HOME"})}),y.jsx("li",{children:y.jsx("a",{href:"#bim3d",className:"nav-link",children:"3D DIGITAL TWIN"})}),y.jsx("li",{children:y.jsx("a",{href:"#services",className:"nav-link",children:"SERVICES"})}),y.jsx("li",{children:y.jsx("a",{href:"#projects",className:"nav-link",children:"PROJECTS"})}),y.jsxs("li",{className:"nav-dropdown",children:[y.jsxs("a",{href:"#calculator",className:"nav-link nav-dropdown-toggle",children:["PAGES ",y.jsx("span",{className:"dropdown-arrow",children:"▼"})]}),y.jsxs("ul",{className:"dropdown-menu",children:[y.jsx("li",{className:"dropdown-item",children:y.jsxs("a",{href:"#bim3d",children:[y.jsx("span",{children:"3D BIM Model"})," ",y.jsx("span",{children:"›"})]})}),y.jsx("li",{className:"dropdown-item",children:y.jsxs("a",{href:"#calculator",children:[y.jsx("span",{children:"Cost Calculator"})," ",y.jsx("span",{children:"›"})]})}),y.jsx("li",{className:"dropdown-item",children:y.jsxs("a",{href:"#about",children:[y.jsx("span",{children:"Why Choose Us"})," ",y.jsx("span",{children:"›"})]})})]})]}),y.jsx("li",{children:y.jsx("a",{href:"#calculator",className:"nav-link",children:"ESTIMATOR"})})]}),y.jsxs("div",{className:"nav-actions",children:[y.jsxs("div",{className:"contact-pill trigger-callback-modal",onClick:t,title:"Click to schedule instant callback",style:{cursor:"pointer"},children:[y.jsx("div",{className:"contact-icon-circle",children:y.jsx(Px,{size:16})}),y.jsxs("div",{className:"contact-text",children:[y.jsx("span",{className:"phone-number",children:"+1 (234) 567-8900"}),y.jsx("span",{className:"phone-sub",children:"Call Us Anytime"})]})]}),y.jsxs("button",{className:"btn btn-primary",onClick:t,children:["GET A QUOTE",y.jsx(tl,{size:16})]})]})]})})})]})}function Hx({onOpenVideo:t}){return y.jsxs("section",{className:"hero",id:"home",children:[y.jsxs("div",{className:"scroll-indicator left",children:[y.jsx("div",{className:"tick"}),"SCROLL DOWN"]}),y.jsxs("div",{className:"scroll-indicator right",children:[y.jsx("div",{className:"tick"}),"SCROLL DOWN"]}),y.jsxs("div",{className:"hero-grid",children:[y.jsxs("div",{className:"hero-text left",children:[y.jsx("span",{className:"eyebrow",children:"Since 2008"}),y.jsxs("h2",{children:["We Build",y.jsx("br",{}),"Every Structure"]})]}),y.jsxs("div",{className:"hero-image-wrap",children:[y.jsx("div",{className:"glow-ring"}),y.jsx("img",{src:"./assets/images/hero-villa.jpg",alt:"BuildHub Landmark Villa"})]}),y.jsxs("div",{className:"hero-text right",children:[y.jsx("span",{className:"eyebrow",children:"Precision Engineering"}),y.jsxs("h2",{children:["To Stand The",y.jsx("br",{}),"Test Of Time"]})]})]}),y.jsx("div",{className:"bottom-tag",children:"© BuildHub Constructions • Premier Architecture"}),y.jsx("div",{className:"bottom-cta",children:y.jsx("a",{href:"#bim3d",children:"View Our Work & 3D BIM →"})})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kd="160",Gx=0,dh=1,Vx=2,Qg=1,Wx=2,ii=3,ji=0,sn=1,oi=2,zi=0,ls=1,fh=2,hh=3,ph=4,jx=5,sr=100,Xx=101,qx=102,mh=103,gh=104,Yx=200,$x=201,Kx=202,Zx=203,Du=204,Iu=205,Qx=206,Jx=207,ey=208,ty=209,ny=210,iy=211,ry=212,sy=213,oy=214,ay=0,ly=1,cy=2,nl=3,uy=4,dy=5,fy=6,hy=7,Jg=0,py=1,my=2,Hi=0,gy=1,vy=2,_y=3,xy=4,yy=5,Sy=6,ev=300,vs=301,_s=302,Uu=303,Ou=304,Tl=306,Fu=1e3,On=1001,ku=1002,qt=1003,vh=1004,oc=1005,Mn=1006,My=1007,yo=1008,Gi=1009,Ey=1010,Ty=1011,Bd=1012,tv=1013,Li=1014,Pi=1015,So=1016,nv=1017,iv=1018,fr=1020,wy=1021,Fn=1023,Ay=1024,Cy=1025,hr=1026,xs=1027,Ry=1028,rv=1029,by=1030,sv=1031,ov=1033,ac=33776,lc=33777,cc=33778,uc=33779,_h=35840,xh=35841,yh=35842,Sh=35843,av=36196,Mh=37492,Eh=37496,Th=37808,wh=37809,Ah=37810,Ch=37811,Rh=37812,bh=37813,Lh=37814,Ph=37815,Nh=37816,Dh=37817,Ih=37818,Uh=37819,Oh=37820,Fh=37821,dc=36492,kh=36494,Bh=36495,Ly=36283,zh=36284,Hh=36285,Gh=36286,lv=3e3,pr=3001,Py=3200,Ny=3201,cv=0,Dy=1,En="",Pt="srgb",gi="srgb-linear",zd="display-p3",wl="display-p3-linear",il="linear",rt="srgb",rl="rec709",sl="p3",Ar=7680,Vh=519,Iy=512,Uy=513,Oy=514,uv=515,Fy=516,ky=517,By=518,zy=519,Wh=35044,jh="300 es",Bu=1035,ui=2e3,ol=2001;class Ts{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fc=Math.PI/180,zu=180/Math.PI;function Co(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Yt(t,e,n){return Math.max(e,Math.min(n,t))}function Hy(t,e){return(t%e+e)%e}function hc(t,e,n){return(1-n)*t+n*e}function Xh(t){return(t&t-1)===0&&t!==0}function Hu(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Os(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],m=i[5],_=i[8],x=r[0],p=r[3],u=r[6],g=r[1],v=r[4],S=r[7],b=r[2],A=r[5],C=r[8];return s[0]=o*x+a*g+l*b,s[3]=o*p+a*v+l*A,s[6]=o*u+a*S+l*C,s[1]=c*x+d*g+h*b,s[4]=c*p+d*v+h*A,s[7]=c*u+d*S+h*C,s[2]=f*x+m*g+_*b,s[5]=f*p+m*v+_*A,s[8]=f*u+m*S+_*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,f=a*l-d*s,m=c*s-o*l,_=n*h+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(r*c-d*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(d*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=m*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(pc.makeScale(e,n)),this}rotate(e){return this.premultiply(pc.makeRotation(-e)),this}translate(e,n){return this.premultiply(pc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pc=new Ge;function dv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function al(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Gy(){const t=al("canvas");return t.style.display="block",t}const qh={};function to(t){t in qh||(qh[t]=!0,console.warn(t))}const Yh=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$h=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$o={[gi]:{transfer:il,primaries:rl,toReference:t=>t,fromReference:t=>t},[Pt]:{transfer:rt,primaries:rl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[wl]:{transfer:il,primaries:sl,toReference:t=>t.applyMatrix3($h),fromReference:t=>t.applyMatrix3(Yh)},[zd]:{transfer:rt,primaries:sl,toReference:t=>t.convertSRGBToLinear().applyMatrix3($h),fromReference:t=>t.applyMatrix3(Yh).convertLinearToSRGB()}},Vy=new Set([gi,wl]),Qe={enabled:!0,_workingColorSpace:gi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Vy.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=$o[e].toReference,r=$o[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return $o[t].primaries},getTransfer:function(t){return t===En?il:$o[t].transfer}};function cs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function mc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Cr;class fv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Cr===void 0&&(Cr=al("canvas")),Cr.width=e.width,Cr.height=e.height;const i=Cr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Cr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=al("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=cs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(cs(n[i]/255)*255):n[i]=cs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wy=0;class hv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wy++}),this.uuid=Co(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(gc(r[o].image)):s.push(gc(r[o]))}else s=gc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function gc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?fv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jy=0;class pn extends Ts{constructor(e=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,i=On,r=On,s=Mn,o=yo,a=Fn,l=Gi,c=pn.DEFAULT_ANISOTROPY,d=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=Co(),this.name="",this.source=new hv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(to("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===pr?Pt:En),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ev)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fu:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case ku:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fu:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case ku:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return to("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Pt?pr:lv}set encoding(e){to("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===pr?Pt:En}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=ev;pn.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,n=0,i=0,r=1){at.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],m=l[5],_=l[9],x=l[2],p=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+x)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,S=(m+1)/2,b=(u+1)/2,A=(d+f)/4,C=(h+x)/4,N=(_+p)/4;return v>S&&v>b?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=C/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=N/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=C/s,r=N/s),this.set(i,r,s,n),this}let g=Math.sqrt((p-_)*(p-_)+(h-x)*(h-x)+(f-d)*(f-d));return Math.abs(g)<.001&&(g=1),this.x=(p-_)/g,this.y=(h-x)/g,this.z=(f-d)/g,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xy extends Ts{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new at(0,0,e,n),this.scissorTest=!1,this.viewport=new at(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(to("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===pr?Pt:En),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new pn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new hv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yr extends Xy{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class pv extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qy extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ro{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const f=s[o+0],m=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=m,e[n+2]=_,e[n+3]=x;return}if(h!==x||l!==f||c!==m||d!==_){let p=1-a;const u=l*f+c*m+d*_+h*x,g=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const b=Math.sqrt(v),A=Math.atan2(b,u*g);p=Math.sin(p*A)/b,a=Math.sin(a*A)/b}const S=a*g;if(l=l*p+f*S,c=c*p+m*S,d=d*p+_*S,h=h*p+x*S,p===1-a){const b=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=b,c*=b,d*=b,h*=b}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[o],f=s[o+1],m=s[o+2],_=s[o+3];return e[n]=a*_+d*h+l*m-c*f,e[n+1]=l*_+d*f+c*h-a*m,e[n+2]=c*_+d*m+a*f-l*h,e[n+3]=d*_-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),h=a(s/2),f=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*d*h+c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h-f*m*_;break;case"YXZ":this._x=f*d*h+c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h+f*m*_;break;case"ZXY":this._x=f*d*h-c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h-f*m*_;break;case"ZYX":this._x=f*d*h-c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h+f*m*_;break;case"YZX":this._x=f*d*h+c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h-f*m*_;break;case"XZY":this._x=f*d*h-c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(d-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-n)*d)/c,f=Math.sin(n*d)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,n=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Kh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Kh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*d,this.y=i+l*d+a*c-s*h,this.z=r+l*h+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vc.copy(this).projectOnVector(e),this.sub(vc)}reflect(e){return this.sub(vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vc=new I,Kh=new Ro;class bo{constructor(e=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bn):bn.fromBufferAttribute(s,o),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ko.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ko.copy(i.boundingBox)),Ko.applyMatrix4(e.matrixWorld),this.union(Ko)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),Zo.subVectors(this.max,Fs),Rr.subVectors(e.a,Fs),br.subVectors(e.b,Fs),Lr.subVectors(e.c,Fs),xi.subVectors(br,Rr),yi.subVectors(Lr,br),Zi.subVectors(Rr,Lr);let n=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-Zi.z,Zi.y,xi.z,0,-xi.x,yi.z,0,-yi.x,Zi.z,0,-Zi.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-Zi.y,Zi.x,0];return!_c(n,Rr,br,Lr,Zo)||(n=[1,0,0,0,1,0,0,0,1],!_c(n,Rr,br,Lr,Zo))?!1:(Qo.crossVectors(xi,yi),n=[Qo.x,Qo.y,Qo.z],_c(n,Rr,br,Lr,Zo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qn=[new I,new I,new I,new I,new I,new I,new I,new I],bn=new I,Ko=new bo,Rr=new I,br=new I,Lr=new I,xi=new I,yi=new I,Zi=new I,Fs=new I,Zo=new I,Qo=new I,Qi=new I;function _c(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Qi.fromArray(t,s);const a=r.x*Math.abs(Qi.x)+r.y*Math.abs(Qi.y)+r.z*Math.abs(Qi.z),l=e.dot(Qi),c=n.dot(Qi),d=i.dot(Qi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Yy=new bo,ks=new I,xc=new I;class Al{constructor(e=new I,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Yy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const n=ks.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ks,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(xc)),this.expandByPoint(ks.copy(e.center).sub(xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new I,yc=new I,Jo=new I,Si=new I,Sc=new I,ea=new I,Mc=new I;class mv{constructor(e=new I,n=new I(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Jn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,n),Jn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){yc.copy(e).add(n).multiplyScalar(.5),Jo.copy(n).sub(e).normalize(),Si.copy(this.origin).sub(yc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Jo),a=Si.dot(this.direction),l=-Si.dot(Jo),c=Si.lengthSq(),d=Math.abs(1-o*o);let h,f,m,_;if(d>0)if(h=o*l-a,f=o*a-l,_=s*d,h>=0)if(f>=-_)if(f<=_){const x=1/d;h*=x,f*=x,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(yc).addScaledVector(Jo,f),m}intersectSphere(e,n){Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),r=Jn.dot(Jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,n,i,r,s){Sc.subVectors(n,e),ea.subVectors(i,e),Mc.crossVectors(Sc,ea);let o=this.direction.dot(Mc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Si.subVectors(this.origin,e);const l=a*this.direction.dot(ea.crossVectors(Si,ea));if(l<0)return null;const c=a*this.direction.dot(Sc.cross(Si));if(c<0||l+c>o)return null;const d=-a*Si.dot(Mc);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,n,i,r,s,o,a,l,c,d,h,f,m,_,x,p){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,h,f,m,_,x,p)}set(e,n,i,r,s,o,a,l,c,d,h,f,m,_,x,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=m,u[7]=_,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Pr.setFromMatrixColumn(e,0).length(),s=1/Pr.setFromMatrixColumn(e,1).length(),o=1/Pr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*d,m=o*h,_=a*d,x=a*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=m+_*c,n[5]=f-x*c,n[9]=-a*l,n[2]=x-f*c,n[6]=_+m*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*d,m=l*h,_=c*d,x=c*h;n[0]=f+x*a,n[4]=_*a-m,n[8]=o*c,n[1]=o*h,n[5]=o*d,n[9]=-a,n[2]=m*a-_,n[6]=x+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*d,m=l*h,_=c*d,x=c*h;n[0]=f-x*a,n[4]=-o*h,n[8]=_+m*a,n[1]=m+_*a,n[5]=o*d,n[9]=x-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*d,m=o*h,_=a*d,x=a*h;n[0]=l*d,n[4]=_*c-m,n[8]=f*c+x,n[1]=l*h,n[5]=x*c+f,n[9]=m*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,_=a*l,x=a*c;n[0]=l*d,n[4]=x-f*h,n[8]=_*h+m,n[1]=h,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=m*h+_,n[10]=f-x*h}else if(e.order==="XZY"){const f=o*l,m=o*c,_=a*l,x=a*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+x,n[5]=o*d,n[9]=m*h-_,n[2]=_*h-m,n[6]=a*d,n[10]=x*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose($y,e,Ky)}lookAt(e,n,i){const r=this.elements;return an.subVectors(e,n),an.lengthSq()===0&&(an.z=1),an.normalize(),Mi.crossVectors(i,an),Mi.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Mi.crossVectors(i,an)),Mi.normalize(),ta.crossVectors(an,Mi),r[0]=Mi.x,r[4]=ta.x,r[8]=an.x,r[1]=Mi.y,r[5]=ta.y,r[9]=an.y,r[2]=Mi.z,r[6]=ta.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],m=i[13],_=i[2],x=i[6],p=i[10],u=i[14],g=i[3],v=i[7],S=i[11],b=i[15],A=r[0],C=r[4],N=r[8],M=r[12],T=r[1],G=r[5],j=r[9],Q=r[13],P=r[2],F=r[6],q=r[10],$=r[14],D=r[3],k=r[7],B=r[11],Y=r[15];return s[0]=o*A+a*T+l*P+c*D,s[4]=o*C+a*G+l*F+c*k,s[8]=o*N+a*j+l*q+c*B,s[12]=o*M+a*Q+l*$+c*Y,s[1]=d*A+h*T+f*P+m*D,s[5]=d*C+h*G+f*F+m*k,s[9]=d*N+h*j+f*q+m*B,s[13]=d*M+h*Q+f*$+m*Y,s[2]=_*A+x*T+p*P+u*D,s[6]=_*C+x*G+p*F+u*k,s[10]=_*N+x*j+p*q+u*B,s[14]=_*M+x*Q+p*$+u*Y,s[3]=g*A+v*T+S*P+b*D,s[7]=g*C+v*G+S*F+b*k,s[11]=g*N+v*j+S*q+b*B,s[15]=g*M+v*Q+S*$+b*Y,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],m=e[14],_=e[3],x=e[7],p=e[11],u=e[15];return _*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*m-i*l*m)+x*(+n*l*m-n*c*f+s*o*f-r*o*m+r*c*d-s*l*d)+p*(+n*c*h-n*a*m-s*o*h+i*o*m+s*a*d-i*c*d)+u*(-r*a*d-n*l*h+n*a*f+r*o*h-i*o*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],m=e[11],_=e[12],x=e[13],p=e[14],u=e[15],g=h*p*c-x*f*c+x*l*m-a*p*m-h*l*u+a*f*u,v=_*f*c-d*p*c-_*l*m+o*p*m+d*l*u-o*f*u,S=d*x*c-_*h*c+_*a*m-o*x*m-d*a*u+o*h*u,b=_*h*l-d*x*l-_*a*f+o*x*f+d*a*p-o*h*p,A=n*g+i*v+r*S+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=g*C,e[1]=(x*f*s-h*p*s-x*r*m+i*p*m+h*r*u-i*f*u)*C,e[2]=(a*p*s-x*l*s+x*r*c-i*p*c-a*r*u+i*l*u)*C,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*m-i*l*m)*C,e[4]=v*C,e[5]=(d*p*s-_*f*s+_*r*m-n*p*m-d*r*u+n*f*u)*C,e[6]=(_*l*s-o*p*s-_*r*c+n*p*c+o*r*u-n*l*u)*C,e[7]=(o*f*s-d*l*s+d*r*c-n*f*c-o*r*m+n*l*m)*C,e[8]=S*C,e[9]=(_*h*s-d*x*s-_*i*m+n*x*m+d*i*u-n*h*u)*C,e[10]=(o*x*s-_*a*s+_*i*c-n*x*c-o*i*u+n*a*u)*C,e[11]=(d*a*s-o*h*s-d*i*c+n*h*c+o*i*m-n*a*m)*C,e[12]=b*C,e[13]=(d*x*r-_*h*r+_*i*f-n*x*f-d*i*p+n*h*p)*C,e[14]=(_*a*r-o*x*r-_*i*l+n*x*l+o*i*p-n*a*p)*C,e[15]=(o*h*r-d*a*r+d*i*l-n*h*l-o*i*f+n*a*f)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,h=a+a,f=s*c,m=s*d,_=s*h,x=o*d,p=o*h,u=a*h,g=l*c,v=l*d,S=l*h,b=i.x,A=i.y,C=i.z;return r[0]=(1-(x+u))*b,r[1]=(m+S)*b,r[2]=(_-v)*b,r[3]=0,r[4]=(m-S)*A,r[5]=(1-(f+u))*A,r[6]=(p+g)*A,r[7]=0,r[8]=(_+v)*C,r[9]=(p-g)*C,r[10]=(1-(f+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Pr.set(r[0],r[1],r[2]).length();const o=Pr.set(r[4],r[5],r[6]).length(),a=Pr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);const c=1/s,d=1/o,h=1/a;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=d,Ln.elements[5]*=d,Ln.elements[6]*=d,Ln.elements[8]*=h,Ln.elements[9]*=h,Ln.elements[10]*=h,n.setFromRotationMatrix(Ln),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ui){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let m,_;if(a===ui)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ol)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ui){const l=this.elements,c=1/(n-e),d=1/(i-r),h=1/(o-s),f=(n+e)*c,m=(i+r)*d;let _,x;if(a===ui)_=(o+s)*h,x=-2*h;else if(a===ol)_=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Pr=new I,Ln=new _t,$y=new I(0,0,0),Ky=new I(1,1,1),Mi=new I,ta=new I,an=new I,Zh=new _t,Qh=new Ro;class Cl{constructor(e=0,n=0,i=0,r=Cl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Zh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Qh.setFromEuler(this),this.setFromQuaternion(Qh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cl.DEFAULT_ORDER="XYZ";class gv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zy=0;const Jh=new I,Nr=new Ro,ei=new _t,na=new I,Bs=new I,Qy=new I,Jy=new Ro,ep=new I(1,0,0),tp=new I(0,1,0),np=new I(0,0,1),eS={type:"added"},tS={type:"removed"};class Dt extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=Co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new I,n=new Cl,i=new Ro,r=new I(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new Ge}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Nr.setFromAxisAngle(e,n),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(e,n){return Nr.setFromAxisAngle(e,n),this.quaternion.premultiply(Nr),this}rotateX(e){return this.rotateOnAxis(ep,e)}rotateY(e){return this.rotateOnAxis(tp,e)}rotateZ(e){return this.rotateOnAxis(np,e)}translateOnAxis(e,n){return Jh.copy(e).applyQuaternion(this.quaternion),this.position.add(Jh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ep,e)}translateY(e){return this.translateOnAxis(tp,e)}translateZ(e){return this.translateOnAxis(np,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?na.copy(e):na.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Bs,na,this.up):ei.lookAt(na,Bs,this.up),this.quaternion.setFromRotationMatrix(ei),r&&(ei.extractRotation(r.matrixWorld),Nr.setFromRotationMatrix(ei),this.quaternion.premultiply(Nr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(eS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(tS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,Qy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,Jy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Dt.DEFAULT_UP=new I(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new I,ti=new I,Ec=new I,ni=new I,Dr=new I,Ir=new I,ip=new I,Tc=new I,wc=new I,Ac=new I;let ia=!1;class Un{constructor(e=new I,n=new I,i=new I){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Pn.subVectors(e,n),r.cross(Pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Pn.subVectors(r,n),ti.subVectors(i,n),Ec.subVectors(e,n);const o=Pn.dot(Pn),a=Pn.dot(ti),l=Pn.dot(Ec),c=ti.dot(ti),d=ti.dot(Ec),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-a*d)*f,_=(o*d-a*l)*f;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getUV(e,n,i,r,s,o,a,l){return ia===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ia=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ni.x),l.addScaledVector(o,ni.y),l.addScaledVector(a,ni.z),l)}static isFrontFacing(e,n,i,r){return Pn.subVectors(i,n),ti.subVectors(e,n),Pn.cross(ti).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Pn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Un.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return ia===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ia=!0),Un.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Un.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Dr.subVectors(r,i),Ir.subVectors(s,i),Tc.subVectors(e,i);const l=Dr.dot(Tc),c=Ir.dot(Tc);if(l<=0&&c<=0)return n.copy(i);wc.subVectors(e,r);const d=Dr.dot(wc),h=Ir.dot(wc);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Dr,o);Ac.subVectors(e,s);const m=Dr.dot(Ac),_=Ir.dot(Ac);if(_>=0&&m<=_)return n.copy(s);const x=m*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Ir,a);const p=d*_-m*h;if(p<=0&&h-d>=0&&m-_>=0)return ip.subVectors(s,r),a=(h-d)/(h-d+(m-_)),n.copy(r).addScaledVector(ip,a);const u=1/(p+x+f);return o=x*u,a=f*u,n.copy(i).addScaledVector(Dr,o).addScaledVector(Ir,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},ra={h:0,s:0,l:0};function Cc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class We{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=Hy(e,1),n=Yt(n,0,1),i=Yt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Cc(o,s,e+1/3),this.g=Cc(o,s,e),this.b=Cc(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=Pt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Pt){const i=vv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}copyLinearToSRGB(e){return this.r=mc(e.r),this.g=mc(e.g),this.b=mc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return Qe.fromWorkingColorSpace(zt.copy(this),e),Math.round(Yt(zt.r*255,0,255))*65536+Math.round(Yt(zt.g*255,0,255))*256+Math.round(Yt(zt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(zt.copy(this),n);const i=zt.r,r=zt.g,s=zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(zt.copy(this),n),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Pt){Qe.fromWorkingColorSpace(zt.copy(this),e);const n=zt.r,i=zt.g,r=zt.b;return e!==Pt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+n,Ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ei),e.getHSL(ra);const i=hc(Ei.h,ra.h,n),r=hc(Ei.s,ra.s,n),s=hc(Ei.l,ra.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new We;We.NAMES=vv;let nS=0;class ws extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=Co(),this.name="",this.type="Material",this.blending=ls,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Du,this.blendDst=Iu,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=nl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(i.blending=this.blending),this.side!==ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Du&&(i.blendSrc=this.blendSrc),this.blendDst!==Iu&&(i.blendDst=this.blendDst),this.blendEquation!==sr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==nl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hd extends ws{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Jg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new I,sa=new Xe;class Kn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Wh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)sa.fromBufferAttribute(this,n),sa.applyMatrix3(e),this.setXY(n,sa.x,sa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix3(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix4(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyNormalMatrix(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.transformDirection(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Os(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Qt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Os(n,this.array)),n}setX(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Os(n,this.array)),n}setY(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Os(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Os(n,this.array)),n}setW(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array),s=Qt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wh&&(e.usage=this.usage),e}}class _v extends Kn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class xv extends Kn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class It extends Kn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let iS=0;const xn=new _t,Rc=new Dt,Ur=new I,ln=new bo,zs=new bo,Ct=new I;class Gn extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iS++}),this.uuid=Co(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dv(e)?xv:_v)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,n,i){return xn.makeTranslation(e,n,i),this.applyMatrix4(xn),this}scale(e,n,i){return xn.makeScale(e,n,i),this.applyMatrix4(xn),this}lookAt(e){return Rc.lookAt(e),Rc.updateMatrix(),this.applyMatrix4(Rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new It(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Al);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];zs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(ln.min,zs.min),ln.expandByPoint(Ct),Ct.addVectors(ln.max,zs.max),ln.expandByPoint(Ct)):(ln.expandByPoint(zs.min),ln.expandByPoint(zs.max))}ln.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Ct.fromBufferAttribute(a,c),l&&(Ur.fromBufferAttribute(e,c),Ct.add(Ur)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let T=0;T<a;T++)c[T]=new I,d[T]=new I;const h=new I,f=new I,m=new I,_=new Xe,x=new Xe,p=new Xe,u=new I,g=new I;function v(T,G,j){h.fromArray(r,T*3),f.fromArray(r,G*3),m.fromArray(r,j*3),_.fromArray(o,T*2),x.fromArray(o,G*2),p.fromArray(o,j*2),f.sub(h),m.sub(h),x.sub(_),p.sub(_);const Q=1/(x.x*p.y-p.x*x.y);isFinite(Q)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar(Q),g.copy(m).multiplyScalar(x.x).addScaledVector(f,-p.x).multiplyScalar(Q),c[T].add(u),c[G].add(u),c[j].add(u),d[T].add(g),d[G].add(g),d[j].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let T=0,G=S.length;T<G;++T){const j=S[T],Q=j.start,P=j.count;for(let F=Q,q=Q+P;F<q;F+=3)v(i[F+0],i[F+1],i[F+2])}const b=new I,A=new I,C=new I,N=new I;function M(T){C.fromArray(s,T*3),N.copy(C);const G=c[T];b.copy(G),b.sub(C.multiplyScalar(C.dot(G))).normalize(),A.crossVectors(N,G);const Q=A.dot(d[T])<0?-1:1;l[T*4]=b.x,l[T*4+1]=b.y,l[T*4+2]=b.z,l[T*4+3]=Q}for(let T=0,G=S.length;T<G;++T){const j=S[T],Q=j.start,P=j.count;for(let F=Q,q=Q+P;F<q;F+=3)M(i[F+0]),M(i[F+1]),M(i[F+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,d=new I,h=new I;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,p),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(d),l.add(d),c.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ct.fromBufferAttribute(e,n),Ct.normalize(),e.setXYZ(n,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,f=new c.constructor(l.length*d);let m=0,_=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*d;for(let u=0;u<d;u++)f[_++]=c[m++]}return new Kn(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Gn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const f=c[d],m=e(f,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rp=new _t,Ji=new mv,oa=new Al,sp=new I,Or=new I,Fr=new I,kr=new I,bc=new I,aa=new I,la=new Xe,ca=new Xe,ua=new Xe,op=new I,ap=new I,lp=new I,da=new I,fa=new I;class dn extends Dt{constructor(e=new Gn,n=new Hd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){aa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(bc.fromBufferAttribute(h,e),o?aa.addScaledVector(bc,d):aa.addScaledVector(bc.sub(n),d))}n.add(aa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(s),Ji.copy(e.ray).recast(e.near),!(oa.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(oa,sp)===null||Ji.origin.distanceToSquared(sp)>(e.far-e.near)**2))&&(rp.copy(s).invert(),Ji.copy(e.ray).applyMatrix4(rp),!(i.boundingBox!==null&&Ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ji)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const p=f[_],u=o[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=g,b=v;S<b;S+=3){const A=a.getX(S),C=a.getX(S+1),N=a.getX(S+2);r=ha(this,u,e,i,c,d,h,A,C,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){const g=a.getX(p),v=a.getX(p+1),S=a.getX(p+2);r=ha(this,o,e,i,c,d,h,g,v,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const p=f[_],u=o[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=g,b=v;S<b;S+=3){const A=S,C=S+1,N=S+2;r=ha(this,u,e,i,c,d,h,A,C,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){const g=p,v=p+1,S=p+2;r=ha(this,o,e,i,c,d,h,g,v,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function rS(t,e,n,i,r,s,o,a){let l;if(e.side===sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ji,a),l===null)return null;fa.copy(a),fa.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(fa);return c<n.near||c>n.far?null:{distance:c,point:fa.clone(),object:t}}function ha(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Or),t.getVertexPosition(l,Fr),t.getVertexPosition(c,kr);const d=rS(t,e,n,i,Or,Fr,kr,da);if(d){r&&(la.fromBufferAttribute(r,a),ca.fromBufferAttribute(r,l),ua.fromBufferAttribute(r,c),d.uv=Un.getInterpolation(da,Or,Fr,kr,la,ca,ua,new Xe)),s&&(la.fromBufferAttribute(s,a),ca.fromBufferAttribute(s,l),ua.fromBufferAttribute(s,c),d.uv1=Un.getInterpolation(da,Or,Fr,kr,la,ca,ua,new Xe),d.uv2=d.uv1),o&&(op.fromBufferAttribute(o,a),ap.fromBufferAttribute(o,l),lp.fromBufferAttribute(o,c),d.normal=Un.getInterpolation(da,Or,Fr,kr,op,ap,lp,new I),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new I,materialIndex:0};Un.getNormal(Or,Fr,kr,h.normal),d.face=h}return d}class Sr extends Gn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(d,3)),this.setAttribute("uv",new It(h,2));function _(x,p,u,g,v,S,b,A,C,N,M){const T=S/C,G=b/N,j=S/2,Q=b/2,P=A/2,F=C+1,q=N+1;let $=0,D=0;const k=new I;for(let B=0;B<q;B++){const Y=B*G-Q;for(let Z=0;Z<F;Z++){const X=Z*T-j;k[x]=X*g,k[p]=Y*v,k[u]=P,c.push(k.x,k.y,k.z),k[x]=0,k[p]=0,k[u]=A>0?1:-1,d.push(k.x,k.y,k.z),h.push(Z/C),h.push(1-B/N),$+=1}}for(let B=0;B<N;B++)for(let Y=0;Y<C;Y++){const Z=f+Y+F*B,X=f+Y+F*(B+1),K=f+(Y+1)+F*(B+1),oe=f+(Y+1)+F*B;l.push(Z,X,oe),l.push(X,K,oe),D+=6}a.addGroup(m,D,M),m+=D,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ys(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function jt(t){const e={};for(let n=0;n<t.length;n++){const i=ys(t[n]);for(const r in i)e[r]=i[r]}return e}function sS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function yv(t){return t.getRenderTarget()===null?t.outputColorSpace:Qe.workingColorSpace}const oS={clone:ys,merge:jt};var aS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mr extends ws{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aS,this.fragmentShader=lS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=sS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Sv extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=ui}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class un extends Sv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=zu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zu*2*Math.atan(Math.tan(fc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(fc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Br=-90,zr=1;class cS extends Dt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new un(Br,zr,e,n);r.layers=this.layers,this.add(r);const s=new un(Br,zr,e,n);s.layers=this.layers,this.add(s);const o=new un(Br,zr,e,n);o.layers=this.layers,this.add(o);const a=new un(Br,zr,e,n);a.layers=this.layers,this.add(a);const l=new un(Br,zr,e,n);l.layers=this.layers,this.add(l);const c=new un(Br,zr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ol)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Mv extends pn{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:vs,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uS extends yr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(to("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===pr?Pt:En),this.texture=new Mv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Mn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Sr(5,5,5),s=new Mr({name:"CubemapFromEquirect",uniforms:ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:zi});s.uniforms.tEquirect.value=n;const o=new dn(r,s),a=n.minFilter;return n.minFilter===yo&&(n.minFilter=Mn),new cS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Lc=new I,dS=new I,fS=new Ge;class ir{constructor(e=new I(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Lc.subVectors(i,n).cross(dS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Lc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||fS.getNormalMatrix(e),r=this.coplanarPoint(Lc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const er=new Al,pa=new I;class Gd{constructor(e=new ir,n=new ir,i=new ir,r=new ir,s=new ir,o=new ir){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ui){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],h=r[6],f=r[7],m=r[8],_=r[9],x=r[10],p=r[11],u=r[12],g=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,p-m,S-u).normalize(),i[1].setComponents(l+s,f+c,p+m,S+u).normalize(),i[2].setComponents(l+o,f+d,p+_,S+g).normalize(),i[3].setComponents(l-o,f-d,p-_,S-g).normalize(),i[4].setComponents(l-a,f-h,p-x,S-v).normalize(),n===ui)i[5].setComponents(l+a,f+h,p+x,S+v).normalize();else if(n===ol)i[5].setComponents(a,h,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(er)}intersectsSprite(e){return er.center.set(0,0,0),er.radius=.7071067811865476,er.applyMatrix4(e.matrixWorld),this.intersectsSphere(er)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(pa.x=r.normal.x>0?e.max.x:e.min.x,pa.y=r.normal.y>0?e.max.y:e.min.y,pa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ev(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function hS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const h=c.array,f=c.usage,m=h.byteLength,_=t.createBuffer();t.bindBuffer(d,_),t.bufferData(d,h,f),c.onUploadCallback();let x;if(h instanceof Float32Array)x=t.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=t.SHORT;else if(h instanceof Uint32Array)x=t.UNSIGNED_INT;else if(h instanceof Int32Array)x=t.INT;else if(h instanceof Int8Array)x=t.BYTE;else if(h instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,d,h){const f=d.array,m=d._updateRange,_=d.updateRanges;if(t.bindBuffer(h,c),m.count===-1&&_.length===0&&t.bufferSubData(h,0,f),_.length!==0){for(let x=0,p=_.length;x<p;x++){const u=_[x];n?t.bufferSubData(h,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):t.bufferSubData(h,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):t.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,d),h.version=c.version}}return{get:o,remove:a,update:l}}class Vd extends Gn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,h=e/a,f=n/l,m=[],_=[],x=[],p=[];for(let u=0;u<d;u++){const g=u*f-o;for(let v=0;v<c;v++){const S=v*h-s;_.push(S,-g,0),x.push(0,0,1),p.push(v/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<a;g++){const v=g+c*u,S=g+c*(u+1),b=g+1+c*(u+1),A=g+1+c*u;m.push(v,S,A),m.push(S,b,A)}this.setIndex(m),this.setAttribute("position",new It(_,3)),this.setAttribute("normal",new It(x,3)),this.setAttribute("uv",new It(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vd(e.width,e.height,e.widthSegments,e.heightSegments)}}var pS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mS=`#ifdef USE_ALPHAHASH
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
#endif`,gS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_S=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,xS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yS=`#ifdef USE_AOMAP
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
#endif`,SS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,MS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,ES=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,TS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,CS=`#ifdef USE_IRIDESCENCE
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
#endif`,RS=`#ifdef USE_BUMPMAP
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
#endif`,bS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,LS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,IS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,US=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,OS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,FS=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,kS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,BS=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,VS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WS="gl_FragColor = linearToOutputTexel( gl_FragColor );",jS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,XS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,YS=`#ifdef USE_ENVMAP
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
#endif`,$S=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ZS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tM=`#ifdef USE_GRADIENTMAP
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
}`,nM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,iM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oM=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,aM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,lM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,hM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pM=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,gM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_M=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,yM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,SM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,MM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,EM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,TM=`#if defined( USE_POINTS_UV )
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
#endif`,wM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,CM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,bM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,LM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,PM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,NM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,DM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,OM=`#ifdef USE_NORMALMAP
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
#endif`,FM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,VM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$M=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,KM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ZM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,QM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,JM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eE=`#ifdef USE_SKINNING
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
#endif`,tE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nE=`#ifdef USE_SKINNING
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
#endif`,iE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sE=`#if defined( TONE_MAPPING )
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,aE=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lE=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pE=`uniform sampler2D t2D;
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
}`,mE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_E=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xE=`#include <common>
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
}`,yE=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,SE=`#define DISTANCE
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
}`,ME=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
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
}`,wE=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AE=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CE=`#include <common>
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
}`,RE=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,bE=`#define LAMBERT
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
}`,LE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,PE=`#define MATCAP
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
}`,NE=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,DE=`#define NORMAL
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
}`,IE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,UE=`#define PHONG
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
}`,OE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,kE=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,BE=`#define TOON
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
}`,zE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,HE=`uniform float size;
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
}`,GE=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,VE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
#include <packing>
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
}`,jE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,XE=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Oe={alphahash_fragment:pS,alphahash_pars_fragment:mS,alphamap_fragment:gS,alphamap_pars_fragment:vS,alphatest_fragment:_S,alphatest_pars_fragment:xS,aomap_fragment:yS,aomap_pars_fragment:SS,batching_pars_vertex:MS,batching_vertex:ES,begin_vertex:TS,beginnormal_vertex:wS,bsdfs:AS,iridescence_fragment:CS,bumpmap_pars_fragment:RS,clipping_planes_fragment:bS,clipping_planes_pars_fragment:LS,clipping_planes_pars_vertex:PS,clipping_planes_vertex:NS,color_fragment:DS,color_pars_fragment:IS,color_pars_vertex:US,color_vertex:OS,common:FS,cube_uv_reflection_fragment:kS,defaultnormal_vertex:BS,displacementmap_pars_vertex:zS,displacementmap_vertex:HS,emissivemap_fragment:GS,emissivemap_pars_fragment:VS,colorspace_fragment:WS,colorspace_pars_fragment:jS,envmap_fragment:XS,envmap_common_pars_fragment:qS,envmap_pars_fragment:YS,envmap_pars_vertex:$S,envmap_physical_pars_fragment:aM,envmap_vertex:KS,fog_vertex:ZS,fog_pars_vertex:QS,fog_fragment:JS,fog_pars_fragment:eM,gradientmap_pars_fragment:tM,lightmap_fragment:nM,lightmap_pars_fragment:iM,lights_lambert_fragment:rM,lights_lambert_pars_fragment:sM,lights_pars_begin:oM,lights_toon_fragment:lM,lights_toon_pars_fragment:cM,lights_phong_fragment:uM,lights_phong_pars_fragment:dM,lights_physical_fragment:fM,lights_physical_pars_fragment:hM,lights_fragment_begin:pM,lights_fragment_maps:mM,lights_fragment_end:gM,logdepthbuf_fragment:vM,logdepthbuf_pars_fragment:_M,logdepthbuf_pars_vertex:xM,logdepthbuf_vertex:yM,map_fragment:SM,map_pars_fragment:MM,map_particle_fragment:EM,map_particle_pars_fragment:TM,metalnessmap_fragment:wM,metalnessmap_pars_fragment:AM,morphcolor_vertex:CM,morphnormal_vertex:RM,morphtarget_pars_vertex:bM,morphtarget_vertex:LM,normal_fragment_begin:PM,normal_fragment_maps:NM,normal_pars_fragment:DM,normal_pars_vertex:IM,normal_vertex:UM,normalmap_pars_fragment:OM,clearcoat_normal_fragment_begin:FM,clearcoat_normal_fragment_maps:kM,clearcoat_pars_fragment:BM,iridescence_pars_fragment:zM,opaque_fragment:HM,packing:GM,premultiplied_alpha_fragment:VM,project_vertex:WM,dithering_fragment:jM,dithering_pars_fragment:XM,roughnessmap_fragment:qM,roughnessmap_pars_fragment:YM,shadowmap_pars_fragment:$M,shadowmap_pars_vertex:KM,shadowmap_vertex:ZM,shadowmask_pars_fragment:QM,skinbase_vertex:JM,skinning_pars_vertex:eE,skinning_vertex:tE,skinnormal_vertex:nE,specularmap_fragment:iE,specularmap_pars_fragment:rE,tonemapping_fragment:sE,tonemapping_pars_fragment:oE,transmission_fragment:aE,transmission_pars_fragment:lE,uv_pars_fragment:cE,uv_pars_vertex:uE,uv_vertex:dE,worldpos_vertex:fE,background_vert:hE,background_frag:pE,backgroundCube_vert:mE,backgroundCube_frag:gE,cube_vert:vE,cube_frag:_E,depth_vert:xE,depth_frag:yE,distanceRGBA_vert:SE,distanceRGBA_frag:ME,equirect_vert:EE,equirect_frag:TE,linedashed_vert:wE,linedashed_frag:AE,meshbasic_vert:CE,meshbasic_frag:RE,meshlambert_vert:bE,meshlambert_frag:LE,meshmatcap_vert:PE,meshmatcap_frag:NE,meshnormal_vert:DE,meshnormal_frag:IE,meshphong_vert:UE,meshphong_frag:OE,meshphysical_vert:FE,meshphysical_frag:kE,meshtoon_vert:BE,meshtoon_frag:zE,points_vert:HE,points_frag:GE,shadow_vert:VE,shadow_frag:WE,sprite_vert:jE,sprite_frag:XE},se={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Xn={basic:{uniforms:jt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:jt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new We(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:jt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:jt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:jt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new We(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:jt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:jt([se.points,se.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:jt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:jt([se.common,se.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:jt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:jt([se.sprite,se.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:jt([se.common,se.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:jt([se.lights,se.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Xn.physical={uniforms:jt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const ma={r:0,b:0,g:0};function qE(t,e,n,i,r,s,o){const a=new We(0);let l=s===!0?0:1,c,d,h=null,f=0,m=null;function _(p,u){let g=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?n:e).get(v)),v===null?x(a,l):v&&v.isColor&&(x(v,1),g=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Tl)?(d===void 0&&(d=new dn(new Sr(1,1,1),new Mr({name:"BackgroundCubeMaterial",uniforms:ys(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(b,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=Qe.getTransfer(v.colorSpace)!==rt,(h!==v||f!==v.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,h=v,f=v.version,m=t.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new dn(new Vd(2,2),new Mr({name:"BackgroundMaterial",uniforms:ys(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(v.colorSpace)!==rt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function x(p,u){p.getRGB(ma,yv(t)),i.buffers.color.setClear(ma.r,ma.g,ma.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(a,l)},render:_}}function YE(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,d=!1;function h(P,F,q,$,D){let k=!1;if(o){const B=x($,q,F);c!==B&&(c=B,m(c.object)),k=u(P,$,q,D),k&&g(P,$,q,D)}else{const B=F.wireframe===!0;(c.geometry!==$.id||c.program!==q.id||c.wireframe!==B)&&(c.geometry=$.id,c.program=q.id,c.wireframe=B,k=!0)}D!==null&&n.update(D,t.ELEMENT_ARRAY_BUFFER),(k||d)&&(d=!1,N(P,F,q,$),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(D).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(P){return i.isWebGL2?t.bindVertexArray(P):s.bindVertexArrayOES(P)}function _(P){return i.isWebGL2?t.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function x(P,F,q){const $=q.wireframe===!0;let D=a[P.id];D===void 0&&(D={},a[P.id]=D);let k=D[F.id];k===void 0&&(k={},D[F.id]=k);let B=k[$];return B===void 0&&(B=p(f()),k[$]=B),B}function p(P){const F=[],q=[],$=[];for(let D=0;D<r;D++)F[D]=0,q[D]=0,$[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:q,attributeDivisors:$,object:P,attributes:{},index:null}}function u(P,F,q,$){const D=c.attributes,k=F.attributes;let B=0;const Y=q.getAttributes();for(const Z in Y)if(Y[Z].location>=0){const K=D[Z];let oe=k[Z];if(oe===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor)),K===void 0||K.attribute!==oe||oe&&K.data!==oe.data)return!0;B++}return c.attributesNum!==B||c.index!==$}function g(P,F,q,$){const D={},k=F.attributes;let B=0;const Y=q.getAttributes();for(const Z in Y)if(Y[Z].location>=0){let K=k[Z];K===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(K=P.instanceColor));const oe={};oe.attribute=K,K&&K.data&&(oe.data=K.data),D[Z]=oe,B++}c.attributes=D,c.attributesNum=B,c.index=$}function v(){const P=c.newAttributes;for(let F=0,q=P.length;F<q;F++)P[F]=0}function S(P){b(P,0)}function b(P,F){const q=c.newAttributes,$=c.enabledAttributes,D=c.attributeDivisors;q[P]=1,$[P]===0&&(t.enableVertexAttribArray(P),$[P]=1),D[P]!==F&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,F),D[P]=F)}function A(){const P=c.newAttributes,F=c.enabledAttributes;for(let q=0,$=F.length;q<$;q++)F[q]!==P[q]&&(t.disableVertexAttribArray(q),F[q]=0)}function C(P,F,q,$,D,k,B){B===!0?t.vertexAttribIPointer(P,F,q,D,k):t.vertexAttribPointer(P,F,q,$,D,k)}function N(P,F,q,$){if(i.isWebGL2===!1&&(P.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const D=$.attributes,k=q.getAttributes(),B=F.defaultAttributeValues;for(const Y in k){const Z=k[Y];if(Z.location>=0){let X=D[Y];if(X===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(X=P.instanceColor)),X!==void 0){const K=X.normalized,oe=X.itemSize,he=n.get(X);if(he===void 0)continue;const pe=he.buffer,be=he.type,Le=he.bytesPerElement,Ee=i.isWebGL2===!0&&(be===t.INT||be===t.UNSIGNED_INT||X.gpuType===tv);if(X.isInterleavedBufferAttribute){const ue=X.data,O=ue.stride,Ke=X.offset;if(ue.isInstancedInterleavedBuffer){for(let _e=0;_e<Z.locationSize;_e++)b(Z.location+_e,ue.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let _e=0;_e<Z.locationSize;_e++)S(Z.location+_e);t.bindBuffer(t.ARRAY_BUFFER,pe);for(let _e=0;_e<Z.locationSize;_e++)C(Z.location+_e,oe/Z.locationSize,be,K,O*Le,(Ke+oe/Z.locationSize*_e)*Le,Ee)}else{if(X.isInstancedBufferAttribute){for(let ue=0;ue<Z.locationSize;ue++)b(Z.location+ue,X.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ue=0;ue<Z.locationSize;ue++)S(Z.location+ue);t.bindBuffer(t.ARRAY_BUFFER,pe);for(let ue=0;ue<Z.locationSize;ue++)C(Z.location+ue,oe/Z.locationSize,be,K,oe*Le,oe/Z.locationSize*ue*Le,Ee)}}else if(B!==void 0){const K=B[Y];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(Z.location,K);break;case 3:t.vertexAttrib3fv(Z.location,K);break;case 4:t.vertexAttrib4fv(Z.location,K);break;default:t.vertexAttrib1fv(Z.location,K)}}}}A()}function M(){j();for(const P in a){const F=a[P];for(const q in F){const $=F[q];for(const D in $)_($[D].object),delete $[D];delete F[q]}delete a[P]}}function T(P){if(a[P.id]===void 0)return;const F=a[P.id];for(const q in F){const $=F[q];for(const D in $)_($[D].object),delete $[D];delete F[q]}delete a[P.id]}function G(P){for(const F in a){const q=a[F];if(q[P.id]===void 0)continue;const $=q[P.id];for(const D in $)_($[D].object),delete $[D];delete q[P.id]}}function j(){Q(),d=!0,c!==l&&(c=l,m(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:j,resetDefaultState:Q,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:G,initAttributes:v,enableAttribute:S,disableUnusedAttributes:A}}function $E(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}function a(d,h){t.drawArrays(s,d,h),n.update(h,s,1)}function l(d,h,f){if(f===0)return;let m,_;if(r)m=t,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](s,d,h,f),n.update(h,s,f)}function c(d,h,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<f;_++)this.render(d[_],h[_]);else{m.multiDrawArraysWEBGL(s,d,0,h,0,f);let _=0;for(let x=0;x<f;x++)_+=h[x];n.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function KE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,S=o||e.has("OES_texture_float"),b=v&&S,A=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:g,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:b,maxSamples:A}}function ZE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ir,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,u=t.get(h);if(!r||_===null||_.length===0||s&&!p)s?d(null):c();else{const g=s?0:i,v=g*4;let S=u.clippingState||null;l.value=S,S=d(_,f,v,m);for(let b=0;b!==v;++b)S[b]=n[b];u.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,m,_){const x=h!==null?h.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const u=m+x*4,g=f.matrixWorldInverse;a.getNormalMatrix(g),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,S=m;v!==x;++v,S+=4)o.copy(h[v]).applyMatrix4(g,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function QE(t){let e=new WeakMap;function n(o,a){return a===Uu?o.mapping=vs:a===Ou&&(o.mapping=_s),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Uu||a===Ou)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new uS(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Tv extends Sv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const es=4,cp=[.125,.215,.35,.446,.526,.582],or=20,Pc=new Tv,up=new We;let Nc=null,Dc=0,Ic=0;const rr=(1+Math.sqrt(5))/2,Hr=1/rr,dp=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,rr,Hr),new I(0,rr,-Hr),new I(Hr,0,rr),new I(-Hr,0,rr),new I(rr,Hr,0),new I(-rr,Hr,0)];class fp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Nc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nc,Dc,Ic),e.scissorTest=!1,ga(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===vs||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:So,format:Fn,colorSpace:gi,depthBuffer:!1},r=hp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=JE(s)),this._blurMaterial=eT(s,e,n)}return r}_compileMaterial(e){const n=new dn(this._lodPlanes[0],e);this._renderer.compile(n,Pc)}_sceneToCubeUV(e,n,i,r){const a=new un(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(up),d.toneMapping=Hi,d.autoClear=!1;const m=new Hd({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),_=new dn(new Sr,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(up),x=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):g===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;ga(r,g*v,u>2?v:0,v,v),d.setRenderTarget(r),x&&d.render(_,a),d.render(e,a)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===vs||e.mapping===_s;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new dn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ga(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Pc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=dp[(r-1)%dp.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new dn(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*or-1),x=s/_,p=isFinite(s)?1+Math.floor(d*x):or;p>or&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${or}`);const u=[];let g=0;for(let C=0;C<or;++C){const N=C/x,M=Math.exp(-N*N/2);u.push(M),C===0?g+=M:C<p&&(g+=2*M)}for(let C=0;C<u.length;C++)u[C]=u[C]/g;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-i;const S=this._sizeLods[r],b=3*S*(r>v-es?r-v+es:0),A=4*(this._cubeSize-S);ga(n,b,A,3*S,2*S),l.setRenderTarget(n),l.render(h,Pc)}}function JE(t){const e=[],n=[],i=[];let r=t;const s=t-es+1+cp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-es?l=cp[o-t+es-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,_=6,x=3,p=2,u=1,g=new Float32Array(x*_*m),v=new Float32Array(p*_*m),S=new Float32Array(u*_*m);for(let A=0;A<m;A++){const C=A%3*2/3-1,N=A>2?0:-1,M=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];g.set(M,x*_*A),v.set(f,p*_*A);const T=[A,A,A,A,A,A];S.set(T,u*_*A)}const b=new Gn;b.setAttribute("position",new Kn(g,x)),b.setAttribute("uv",new Kn(v,p)),b.setAttribute("faceIndex",new Kn(S,u)),e.push(b),r>es&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function hp(t,e,n){const i=new yr(t,e,n);return i.texture.mapping=Tl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ga(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function eT(t,e,n){const i=new Float32Array(or),r=new I(0,1,0);return new Mr({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Wd(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function pp(){return new Mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wd(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function mp(){return new Mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Wd(){return`

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
	`}function tT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Uu||l===Ou,d=l===vs||l===_s;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new fp(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||d&&h&&r(h)){n===null&&(n=new fp(t));const f=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function nT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function iT(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const x=f.morphAttributes[_];for(let p=0,u=x.length;p<u;p++)e.remove(x[p])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const x=m[_];for(let p=0,u=x.length;p<u;p++)e.update(x[p],t.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,_=h.attributes.position;let x=0;if(m!==null){const g=m.array;x=m.version;for(let v=0,S=g.length;v<S;v+=3){const b=g[v+0],A=g[v+1],C=g[v+2];f.push(b,A,A,C,C,b)}}else if(_!==void 0){const g=_.array;x=_.version;for(let v=0,S=g.length/3-1;v<S;v+=3){const b=v+0,A=v+1,C=v+2;f.push(b,A,A,C,C,b)}}else return;const p=new(dv(f)?xv:_v)(f,1);p.version=x;const u=s.get(h);u&&e.remove(u),s.set(h,p)}function d(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function rT(t,e,n,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function d(m,_){t.drawElements(s,_,a,m*l),n.update(_,s,1)}function h(m,_,x){if(x===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,_,a,m*l,x),n.update(_,s,x)}function f(m,_,x){if(x===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<x;u++)this.render(m[u]/l,_[u]);else{p.multiDrawElementsWEBGL(s,_,0,a,m,0,x);let u=0;for(let g=0;g<x;g++)u+=_[g];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=f}function sT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function oT(t,e){return t[0]-e[0]}function aT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function lT(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new at,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let p=s.get(d);if(p===void 0||p.count!==x){let F=function(){Q.dispose(),s.delete(d),d.removeEventListener("dispose",F)};var m=F;p!==void 0&&p.texture.dispose();const v=d.morphAttributes.position!==void 0,S=d.morphAttributes.normal!==void 0,b=d.morphAttributes.color!==void 0,A=d.morphAttributes.position||[],C=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let M=0;v===!0&&(M=1),S===!0&&(M=2),b===!0&&(M=3);let T=d.attributes.position.count*M,G=1;T>e.maxTextureSize&&(G=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const j=new Float32Array(T*G*4*x),Q=new pv(j,T,G,x);Q.type=Pi,Q.needsUpdate=!0;const P=M*4;for(let q=0;q<x;q++){const $=A[q],D=C[q],k=N[q],B=T*G*4*q;for(let Y=0;Y<$.count;Y++){const Z=Y*P;v===!0&&(o.fromBufferAttribute($,Y),j[B+Z+0]=o.x,j[B+Z+1]=o.y,j[B+Z+2]=o.z,j[B+Z+3]=0),S===!0&&(o.fromBufferAttribute(D,Y),j[B+Z+4]=o.x,j[B+Z+5]=o.y,j[B+Z+6]=o.z,j[B+Z+7]=0),b===!0&&(o.fromBufferAttribute(k,Y),j[B+Z+8]=o.x,j[B+Z+9]=o.y,j[B+Z+10]=o.z,j[B+Z+11]=k.itemSize===4?o.w:1)}}p={count:x,texture:Q,size:new Xe(T,G)},s.set(d,p),d.addEventListener("dispose",F)}let u=0;for(let v=0;v<f.length;v++)u+=f[v];const g=d.morphTargetsRelative?1:1-u;h.getUniforms().setValue(t,"morphTargetBaseInfluence",g),h.getUniforms().setValue(t,"morphTargetInfluences",f),h.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const _=f===void 0?0:f.length;let x=i[d.id];if(x===void 0||x.length!==_){x=[];for(let S=0;S<_;S++)x[S]=[S,0];i[d.id]=x}for(let S=0;S<_;S++){const b=x[S];b[0]=S,b[1]=f[S]}x.sort(aT);for(let S=0;S<8;S++)S<_&&x[S][1]?(a[S][0]=x[S][0],a[S][1]=x[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(oT);const p=d.morphAttributes.position,u=d.morphAttributes.normal;let g=0;for(let S=0;S<8;S++){const b=a[S],A=b[0],C=b[1];A!==Number.MAX_SAFE_INTEGER&&C?(p&&d.getAttribute("morphTarget"+S)!==p[A]&&d.setAttribute("morphTarget"+S,p[A]),u&&d.getAttribute("morphNormal"+S)!==u[A]&&d.setAttribute("morphNormal"+S,u[A]),r[S]=C,g+=C):(p&&d.hasAttribute("morphTarget"+S)===!0&&d.deleteAttribute("morphTarget"+S),u&&d.hasAttribute("morphNormal"+S)===!0&&d.deleteAttribute("morphNormal"+S),r[S]=0)}const v=d.morphTargetsRelative?1:1-g;h.getUniforms().setValue(t,"morphTargetBaseInfluence",v),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function cT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class wv extends pn{constructor(e,n,i,r,s,o,a,l,c,d){if(d=d!==void 0?d:hr,d!==hr&&d!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===hr&&(i=Li),i===void 0&&d===xs&&(i=fr),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:qt,this.minFilter=l!==void 0?l:qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Av=new pn,Cv=new wv(1,1);Cv.compareFunction=uv;const Rv=new pv,bv=new qy,Lv=new Mv,gp=[],vp=[],_p=new Float32Array(16),xp=new Float32Array(9),yp=new Float32Array(4);function As(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=gp[r];if(s===void 0&&(s=new Float32Array(r),gp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Et(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Tt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Rl(t,e){let n=vp[e];n===void 0&&(n=new Int32Array(e),vp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function uT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function dT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2fv(this.addr,e),Tt(n,e)}}function fT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Et(n,e))return;t.uniform3fv(this.addr,e),Tt(n,e)}}function hT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4fv(this.addr,e),Tt(n,e)}}function pT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Tt(n,e)}else{if(Et(n,i))return;yp.set(i),t.uniformMatrix2fv(this.addr,!1,yp),Tt(n,i)}}function mT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Tt(n,e)}else{if(Et(n,i))return;xp.set(i),t.uniformMatrix3fv(this.addr,!1,xp),Tt(n,i)}}function gT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Tt(n,e)}else{if(Et(n,i))return;_p.set(i),t.uniformMatrix4fv(this.addr,!1,_p),Tt(n,i)}}function vT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function _T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2iv(this.addr,e),Tt(n,e)}}function xT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3iv(this.addr,e),Tt(n,e)}}function yT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4iv(this.addr,e),Tt(n,e)}}function ST(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function MT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2uiv(this.addr,e),Tt(n,e)}}function ET(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3uiv(this.addr,e),Tt(n,e)}}function TT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4uiv(this.addr,e),Tt(n,e)}}function wT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Cv:Av;n.setTexture2D(e||s,r)}function AT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||bv,r)}function CT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Lv,r)}function RT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Rv,r)}function bT(t){switch(t){case 5126:return uT;case 35664:return dT;case 35665:return fT;case 35666:return hT;case 35674:return pT;case 35675:return mT;case 35676:return gT;case 5124:case 35670:return vT;case 35667:case 35671:return _T;case 35668:case 35672:return xT;case 35669:case 35673:return yT;case 5125:return ST;case 36294:return MT;case 36295:return ET;case 36296:return TT;case 35678:case 36198:case 36298:case 36306:case 35682:return wT;case 35679:case 36299:case 36307:return AT;case 35680:case 36300:case 36308:case 36293:return CT;case 36289:case 36303:case 36311:case 36292:return RT}}function LT(t,e){t.uniform1fv(this.addr,e)}function PT(t,e){const n=As(e,this.size,2);t.uniform2fv(this.addr,n)}function NT(t,e){const n=As(e,this.size,3);t.uniform3fv(this.addr,n)}function DT(t,e){const n=As(e,this.size,4);t.uniform4fv(this.addr,n)}function IT(t,e){const n=As(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function UT(t,e){const n=As(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function OT(t,e){const n=As(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function FT(t,e){t.uniform1iv(this.addr,e)}function kT(t,e){t.uniform2iv(this.addr,e)}function BT(t,e){t.uniform3iv(this.addr,e)}function zT(t,e){t.uniform4iv(this.addr,e)}function HT(t,e){t.uniform1uiv(this.addr,e)}function GT(t,e){t.uniform2uiv(this.addr,e)}function VT(t,e){t.uniform3uiv(this.addr,e)}function WT(t,e){t.uniform4uiv(this.addr,e)}function jT(t,e,n){const i=this.cache,r=e.length,s=Rl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Av,s[o])}function XT(t,e,n){const i=this.cache,r=e.length,s=Rl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||bv,s[o])}function qT(t,e,n){const i=this.cache,r=e.length,s=Rl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Lv,s[o])}function YT(t,e,n){const i=this.cache,r=e.length,s=Rl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Rv,s[o])}function $T(t){switch(t){case 5126:return LT;case 35664:return PT;case 35665:return NT;case 35666:return DT;case 35674:return IT;case 35675:return UT;case 35676:return OT;case 5124:case 35670:return FT;case 35667:case 35671:return kT;case 35668:case 35672:return BT;case 35669:case 35673:return zT;case 5125:return HT;case 36294:return GT;case 36295:return VT;case 36296:return WT;case 35678:case 36198:case 36298:case 36306:case 35682:return jT;case 35679:case 36299:case 36307:return XT;case 35680:case 36300:case 36308:case 36293:return qT;case 36289:case 36303:case 36311:case 36292:return YT}}class KT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=bT(n.type)}}class ZT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=$T(n.type)}}class QT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Uc=/(\w+)(\])?(\[|\.)?/g;function Sp(t,e){t.seq.push(e),t.map[e.id]=e}function JT(t,e,n){const i=t.name,r=i.length;for(Uc.lastIndex=0;;){const s=Uc.exec(i),o=Uc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Sp(n,c===void 0?new KT(a,t,e):new ZT(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new QT(a),Sp(n,h)),n=h}}}class La{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);JT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Mp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const e1=37297;let t1=0;function n1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function i1(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===sl&&n===rl?i="LinearDisplayP3ToLinearSRGB":e===rl&&n===sl&&(i="LinearSRGBToLinearDisplayP3"),t){case gi:case wl:return[i,"LinearTransferOETF"];case Pt:case zd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Ep(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+n1(t.getShaderSource(e),o)}else return r}function r1(t,e){const n=i1(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function s1(t,e){let n;switch(e){case gy:n="Linear";break;case vy:n="Reinhard";break;case _y:n="OptimizedCineon";break;case xy:n="ACESFilmic";break;case Sy:n="AgX";break;case yy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function o1(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ts).join(`
`)}function a1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ts).join(`
`)}function l1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function c1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ts(t){return t!==""}function Tp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const u1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gu(t){return t.replace(u1,f1)}const d1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function f1(t,e){let n=Oe[e];if(n===void 0){const i=d1.get(e);if(i!==void 0)n=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Gu(n)}const h1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ap(t){return t.replace(h1,p1)}function p1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Cp(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function m1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Qg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Wx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function g1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case vs:case _s:e="ENVMAP_TYPE_CUBE";break;case Tl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function v1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case _s:e="ENVMAP_MODE_REFRACTION";break}return e}function _1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Jg:e="ENVMAP_BLENDING_MULTIPLY";break;case py:e="ENVMAP_BLENDING_MIX";break;case my:e="ENVMAP_BLENDING_ADD";break}return e}function x1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function y1(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=m1(n),c=g1(n),d=v1(n),h=_1(n),f=x1(n),m=n.isWebGL2?"":o1(n),_=a1(n),x=l1(s),p=r.createProgram();let u,g,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ts).join(`
`),u.length>0&&(u+=`
`),g=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ts).join(`
`),g.length>0&&(g+=`
`)):(u=[Cp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ts).join(`
`),g=[m,Cp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Hi?"#define TONE_MAPPING":"",n.toneMapping!==Hi?Oe.tonemapping_pars_fragment:"",n.toneMapping!==Hi?s1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,r1("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ts).join(`
`)),o=Gu(o),o=Tp(o,n),o=wp(o,n),a=Gu(a),a=Tp(a,n),a=wp(a,n),o=Ap(o),a=Ap(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,g=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const S=v+u+o,b=v+g+a,A=Mp(r,r.VERTEX_SHADER,S),C=Mp(r,r.FRAGMENT_SHADER,b);r.attachShader(p,A),r.attachShader(p,C),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function N(j){if(t.debug.checkShaderErrors){const Q=r.getProgramInfoLog(p).trim(),P=r.getShaderInfoLog(A).trim(),F=r.getShaderInfoLog(C).trim();let q=!0,$=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,A,C);else{const D=Ep(r,A,"vertex"),k=Ep(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+D+`
`+k)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(P===""||F==="")&&($=!1);$&&(j.diagnostics={runnable:q,programLog:Q,vertexShader:{log:P,prefix:u},fragmentShader:{log:F,prefix:g}})}r.deleteShader(A),r.deleteShader(C),M=new La(r,p),T=c1(r,p)}let M;this.getUniforms=function(){return M===void 0&&N(this),M};let T;this.getAttributes=function(){return T===void 0&&N(this),T};let G=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=r.getProgramParameter(p,e1)),G},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=t1++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=C,this}let S1=0;class M1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new E1(e),n.set(e,i)),i}}class E1{constructor(e){this.id=S1++,this.code=e,this.usedTimes=0}}function T1(t,e,n,i,r,s,o){const a=new gv,l=new M1,c=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function p(M,T,G,j,Q){const P=j.fog,F=Q.geometry,q=M.isMeshStandardMaterial?j.environment:null,$=(M.isMeshStandardMaterial?n:e).get(M.envMap||q),D=$&&$.mapping===Tl?$.image.height:null,k=_[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const B=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Y=B!==void 0?B.length:0;let Z=0;F.morphAttributes.position!==void 0&&(Z=1),F.morphAttributes.normal!==void 0&&(Z=2),F.morphAttributes.color!==void 0&&(Z=3);let X,K,oe,he;if(k){const Vt=Xn[k];X=Vt.vertexShader,K=Vt.fragmentShader}else X=M.vertexShader,K=M.fragmentShader,l.update(M),oe=l.getVertexShaderID(M),he=l.getFragmentShaderID(M);const pe=t.getRenderTarget(),be=Q.isInstancedMesh===!0,Le=Q.isBatchedMesh===!0,Ee=!!M.map,ue=!!M.matcap,O=!!$,Ke=!!M.aoMap,_e=!!M.lightMap,Ne=!!M.bumpMap,ve=!!M.normalMap,lt=!!M.displacementMap,Fe=!!M.emissiveMap,R=!!M.metalnessMap,E=!!M.roughnessMap,H=M.anisotropy>0,ne=M.clearcoat>0,ee=M.iridescence>0,ie=M.sheen>0,xe=M.transmission>0,ce=H&&!!M.anisotropyMap,me=ne&&!!M.clearcoatMap,Ae=ne&&!!M.clearcoatNormalMap,ke=ne&&!!M.clearcoatRoughnessMap,J=ee&&!!M.iridescenceMap,Ze=ee&&!!M.iridescenceThicknessMap,Ve=ie&&!!M.sheenColorMap,Pe=ie&&!!M.sheenRoughnessMap,Me=!!M.specularMap,ge=!!M.specularColorMap,Ue=!!M.specularIntensityMap,Ye=xe&&!!M.transmissionMap,ht=xe&&!!M.thicknessMap,ze=!!M.gradientMap,re=!!M.alphaMap,L=M.alphaTest>0,ae=!!M.alphaHash,le=!!M.extensions,Ce=!!F.attributes.uv1,Te=!!F.attributes.uv2,Je=!!F.attributes.uv3;let et=Hi;return M.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(et=t.toneMapping),{isWebGL2:d,shaderID:k,shaderType:M.type,shaderName:M.name,vertexShader:X,fragmentShader:K,defines:M.defines,customVertexShaderID:oe,customFragmentShaderID:he,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Le,instancing:be,instancingColor:be&&Q.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:pe===null?t.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:gi,map:Ee,matcap:ue,envMap:O,envMapMode:O&&$.mapping,envMapCubeUVHeight:D,aoMap:Ke,lightMap:_e,bumpMap:Ne,normalMap:ve,displacementMap:f&&lt,emissiveMap:Fe,normalMapObjectSpace:ve&&M.normalMapType===Dy,normalMapTangentSpace:ve&&M.normalMapType===cv,metalnessMap:R,roughnessMap:E,anisotropy:H,anisotropyMap:ce,clearcoat:ne,clearcoatMap:me,clearcoatNormalMap:Ae,clearcoatRoughnessMap:ke,iridescence:ee,iridescenceMap:J,iridescenceThicknessMap:Ze,sheen:ie,sheenColorMap:Ve,sheenRoughnessMap:Pe,specularMap:Me,specularColorMap:ge,specularIntensityMap:Ue,transmission:xe,transmissionMap:Ye,thicknessMap:ht,gradientMap:ze,opaque:M.transparent===!1&&M.blending===ls,alphaMap:re,alphaTest:L,alphaHash:ae,combine:M.combine,mapUv:Ee&&x(M.map.channel),aoMapUv:Ke&&x(M.aoMap.channel),lightMapUv:_e&&x(M.lightMap.channel),bumpMapUv:Ne&&x(M.bumpMap.channel),normalMapUv:ve&&x(M.normalMap.channel),displacementMapUv:lt&&x(M.displacementMap.channel),emissiveMapUv:Fe&&x(M.emissiveMap.channel),metalnessMapUv:R&&x(M.metalnessMap.channel),roughnessMapUv:E&&x(M.roughnessMap.channel),anisotropyMapUv:ce&&x(M.anisotropyMap.channel),clearcoatMapUv:me&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&x(M.sheenRoughnessMap.channel),specularMapUv:Me&&x(M.specularMap.channel),specularColorMapUv:ge&&x(M.specularColorMap.channel),specularIntensityMapUv:Ue&&x(M.specularIntensityMap.channel),transmissionMapUv:Ye&&x(M.transmissionMap.channel),thicknessMapUv:ht&&x(M.thicknessMap.channel),alphaMapUv:re&&x(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ve||H),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Ce,vertexUv2s:Te,vertexUv3s:Je,pointsUvs:Q.isPoints===!0&&!!F.attributes.uv&&(Ee||re),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:Q.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:Z,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&G.length>0,shadowMapType:t.shadowMap.type,toneMapping:et,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ee&&M.map.isVideoTexture===!0&&Qe.getTransfer(M.map.colorSpace)===rt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===oi,flipSided:M.side===sn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:le&&M.extensions.derivatives===!0,extensionFragDepth:le&&M.extensions.fragDepth===!0,extensionDrawBuffers:le&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const G in M.defines)T.push(G),T.push(M.defines[G]);return M.isRawShaderMaterial===!1&&(g(T,M),v(T,M),T.push(t.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function g(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function v(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function S(M){const T=_[M.type];let G;if(T){const j=Xn[T];G=oS.clone(j.uniforms)}else G=M.uniforms;return G}function b(M,T){let G;for(let j=0,Q=c.length;j<Q;j++){const P=c[j];if(P.cacheKey===T){G=P,++G.usedTimes;break}}return G===void 0&&(G=new y1(t,T,M,s),c.push(G)),G}function A(M){if(--M.usedTimes===0){const T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),M.destroy()}}function C(M){l.remove(M)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:S,acquireProgram:b,releaseProgram:A,releaseShaderCache:C,programs:c,dispose:N}}function w1(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function A1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Rp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function bp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,m,_,x,p){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:x,group:p},t[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=m,u.groupOrder=_,u.renderOrder=h.renderOrder,u.z=x,u.group=p),e++,u}function a(h,f,m,_,x,p){const u=o(h,f,m,_,x,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(h,f,m,_,x,p){const u=o(h,f,m,_,x,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,f){n.length>1&&n.sort(h||A1),i.length>1&&i.sort(f||Rp),r.length>1&&r.sort(f||Rp)}function d(){for(let h=e,f=t.length;h<f;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function C1(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new bp,t.set(i,[o])):r>=s.length?(o=new bp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function R1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new I,color:new We};break;case"SpotLight":n={position:new I,direction:new I,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new We,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new We,groundColor:new We};break;case"RectAreaLight":n={color:new We,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function b1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let L1=0;function P1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function N1(t,e){const n=new R1,i=b1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new I);const s=new I,o=new _t,a=new _t;function l(d,h){let f=0,m=0,_=0;for(let j=0;j<9;j++)r.probe[j].set(0,0,0);let x=0,p=0,u=0,g=0,v=0,S=0,b=0,A=0,C=0,N=0,M=0;d.sort(P1);const T=h===!0?Math.PI:1;for(let j=0,Q=d.length;j<Q;j++){const P=d[j],F=P.color,q=P.intensity,$=P.distance,D=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=F.r*q*T,m+=F.g*q*T,_+=F.b*q*T;else if(P.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(P.sh.coefficients[k],q);M++}else if(P.isDirectionalLight){const k=n.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity*T),P.castShadow){const B=P.shadow,Y=i.get(P);Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,r.directionalShadow[x]=Y,r.directionalShadowMap[x]=D,r.directionalShadowMatrix[x]=P.shadow.matrix,S++}r.directional[x]=k,x++}else if(P.isSpotLight){const k=n.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(F).multiplyScalar(q*T),k.distance=$,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,r.spot[u]=k;const B=P.shadow;if(P.map&&(r.spotLightMap[C]=P.map,C++,B.updateMatrices(P),P.castShadow&&N++),r.spotLightMatrix[u]=B.matrix,P.castShadow){const Y=i.get(P);Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,r.spotShadow[u]=Y,r.spotShadowMap[u]=D,A++}u++}else if(P.isRectAreaLight){const k=n.get(P);k.color.copy(F).multiplyScalar(q),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),r.rectArea[g]=k,g++}else if(P.isPointLight){const k=n.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity*T),k.distance=P.distance,k.decay=P.decay,P.castShadow){const B=P.shadow,Y=i.get(P);Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,Y.shadowCameraNear=B.camera.near,Y.shadowCameraFar=B.camera.far,r.pointShadow[p]=Y,r.pointShadowMap[p]=D,r.pointShadowMatrix[p]=P.shadow.matrix,b++}r.point[p]=k,p++}else if(P.isHemisphereLight){const k=n.get(P);k.skyColor.copy(P.color).multiplyScalar(q*T),k.groundColor.copy(P.groundColor).multiplyScalar(q*T),r.hemi[v]=k,v++}}g>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=_;const G=r.hash;(G.directionalLength!==x||G.pointLength!==p||G.spotLength!==u||G.rectAreaLength!==g||G.hemiLength!==v||G.numDirectionalShadows!==S||G.numPointShadows!==b||G.numSpotShadows!==A||G.numSpotMaps!==C||G.numLightProbes!==M)&&(r.directional.length=x,r.spot.length=u,r.rectArea.length=g,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=A+C-N,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=M,G.directionalLength=x,G.pointLength=p,G.spotLength=u,G.rectAreaLength=g,G.hemiLength=v,G.numDirectionalShadows=S,G.numPointShadows=b,G.numSpotShadows=A,G.numSpotMaps=C,G.numLightProbes=M,r.version=L1++)}function c(d,h){let f=0,m=0,_=0,x=0,p=0;const u=h.matrixWorldInverse;for(let g=0,v=d.length;g<v;g++){const S=d[g];if(S.isDirectionalLight){const b=r.directional[f];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),f++}else if(S.isSpotLight){const b=r.spot[_];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(u),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),_++}else if(S.isRectAreaLight){const b=r.rectArea[x];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(u),a.identity(),o.copy(S.matrixWorld),o.premultiply(u),a.extractRotation(o),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){const b=r.point[m];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(u),m++}else if(S.isHemisphereLight){const b=r.hemi[p];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function Lp(t,e){const n=new N1(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function c(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function D1(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Lp(t,e),n.set(s,[l])):o>=a.length?(l=new Lp(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class I1 extends ws{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Py,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class U1 extends ws{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const O1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function k1(t,e,n){let i=new Gd;const r=new Xe,s=new Xe,o=new at,a=new I1({depthPacking:Ny}),l=new U1,c={},d=n.maxTextureSize,h={[ji]:sn,[sn]:ji,[oi]:oi},f=new Mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:O1,fragmentShader:F1}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Gn;_.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new dn(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qg;let u=this.type;this.render=function(A,C,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const M=t.getRenderTarget(),T=t.getActiveCubeFace(),G=t.getActiveMipmapLevel(),j=t.state;j.setBlending(zi),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const Q=u!==ii&&this.type===ii,P=u===ii&&this.type!==ii;for(let F=0,q=A.length;F<q;F++){const $=A[F],D=$.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const k=D.getFrameExtents();if(r.multiply(k),s.copy(D.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/k.x),r.x=s.x*k.x,D.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/k.y),r.y=s.y*k.y,D.mapSize.y=s.y)),D.map===null||Q===!0||P===!0){const Y=this.type!==ii?{minFilter:qt,magFilter:qt}:{};D.map!==null&&D.map.dispose(),D.map=new yr(r.x,r.y,Y),D.map.texture.name=$.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const B=D.getViewportCount();for(let Y=0;Y<B;Y++){const Z=D.getViewport(Y);o.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),j.viewport(o),D.updateMatrices($,Y),i=D.getFrustum(),S(C,N,D.camera,$,this.type)}D.isPointLightShadow!==!0&&this.type===ii&&g(D,N),D.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(M,T,G)};function g(A,C){const N=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new yr(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(C,null,N,f,x,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(C,null,N,m,x,null)}function v(A,C,N,M){let T=null;const G=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(G!==void 0)T=G;else if(T=N.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const j=T.uuid,Q=C.uuid;let P=c[j];P===void 0&&(P={},c[j]=P);let F=P[Q];F===void 0&&(F=T.clone(),P[Q]=F,C.addEventListener("dispose",b)),T=F}if(T.visible=C.visible,T.wireframe=C.wireframe,M===ii?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:h[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,N.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const j=t.properties.get(T);j.light=N}return T}function S(A,C,N,M,T){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===ii)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const Q=e.update(A),P=A.material;if(Array.isArray(P)){const F=Q.groups;for(let q=0,$=F.length;q<$;q++){const D=F[q],k=P[D.materialIndex];if(k&&k.visible){const B=v(A,k,M,T);A.onBeforeShadow(t,A,C,N,Q,B,D),t.renderBufferDirect(N,null,Q,B,A,D),A.onAfterShadow(t,A,C,N,Q,B,D)}}}else if(P.visible){const F=v(A,P,M,T);A.onBeforeShadow(t,A,C,N,Q,F,null),t.renderBufferDirect(N,null,Q,F,A,null),A.onAfterShadow(t,A,C,N,Q,F,null)}}const j=A.children;for(let Q=0,P=j.length;Q<P;Q++)S(j[Q],C,N,M,T)}function b(A){A.target.removeEventListener("dispose",b);for(const N in c){const M=c[N],T=A.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function B1(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const ae=new at;let le=null;const Ce=new at(0,0,0,0);return{setMask:function(Te){le!==Te&&!L&&(t.colorMask(Te,Te,Te,Te),le=Te)},setLocked:function(Te){L=Te},setClear:function(Te,Je,et,wt,Vt){Vt===!0&&(Te*=wt,Je*=wt,et*=wt),ae.set(Te,Je,et,wt),Ce.equals(ae)===!1&&(t.clearColor(Te,Je,et,wt),Ce.copy(ae))},reset:function(){L=!1,le=null,Ce.set(-1,0,0,0)}}}function s(){let L=!1,ae=null,le=null,Ce=null;return{setTest:function(Te){Te?Le(t.DEPTH_TEST):Ee(t.DEPTH_TEST)},setMask:function(Te){ae!==Te&&!L&&(t.depthMask(Te),ae=Te)},setFunc:function(Te){if(le!==Te){switch(Te){case ay:t.depthFunc(t.NEVER);break;case ly:t.depthFunc(t.ALWAYS);break;case cy:t.depthFunc(t.LESS);break;case nl:t.depthFunc(t.LEQUAL);break;case uy:t.depthFunc(t.EQUAL);break;case dy:t.depthFunc(t.GEQUAL);break;case fy:t.depthFunc(t.GREATER);break;case hy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}le=Te}},setLocked:function(Te){L=Te},setClear:function(Te){Ce!==Te&&(t.clearDepth(Te),Ce=Te)},reset:function(){L=!1,ae=null,le=null,Ce=null}}}function o(){let L=!1,ae=null,le=null,Ce=null,Te=null,Je=null,et=null,wt=null,Vt=null;return{setTest:function(tt){L||(tt?Le(t.STENCIL_TEST):Ee(t.STENCIL_TEST))},setMask:function(tt){ae!==tt&&!L&&(t.stencilMask(tt),ae=tt)},setFunc:function(tt,Wt,Vn){(le!==tt||Ce!==Wt||Te!==Vn)&&(t.stencilFunc(tt,Wt,Vn),le=tt,Ce=Wt,Te=Vn)},setOp:function(tt,Wt,Vn){(Je!==tt||et!==Wt||wt!==Vn)&&(t.stencilOp(tt,Wt,Vn),Je=tt,et=Wt,wt=Vn)},setLocked:function(tt){L=tt},setClear:function(tt){Vt!==tt&&(t.clearStencil(tt),Vt=tt)},reset:function(){L=!1,ae=null,le=null,Ce=null,Te=null,Je=null,et=null,wt=null,Vt=null}}}const a=new r,l=new s,c=new o,d=new WeakMap,h=new WeakMap;let f={},m={},_=new WeakMap,x=[],p=null,u=!1,g=null,v=null,S=null,b=null,A=null,C=null,N=null,M=new We(0,0,0),T=0,G=!1,j=null,Q=null,P=null,F=null,q=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,k=0;const B=t.getParameter(t.VERSION);B.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(B)[1]),D=k>=1):B.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),D=k>=2);let Y=null,Z={};const X=t.getParameter(t.SCISSOR_BOX),K=t.getParameter(t.VIEWPORT),oe=new at().fromArray(X),he=new at().fromArray(K);function pe(L,ae,le,Ce){const Te=new Uint8Array(4),Je=t.createTexture();t.bindTexture(L,Je),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let et=0;et<le;et++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(ae,0,t.RGBA,1,1,Ce,0,t.RGBA,t.UNSIGNED_BYTE,Te):t.texImage2D(ae+et,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Te);return Je}const be={};be[t.TEXTURE_2D]=pe(t.TEXTURE_2D,t.TEXTURE_2D,1),be[t.TEXTURE_CUBE_MAP]=pe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(be[t.TEXTURE_2D_ARRAY]=pe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),be[t.TEXTURE_3D]=pe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Le(t.DEPTH_TEST),l.setFunc(nl),Fe(!1),R(dh),Le(t.CULL_FACE),ve(zi);function Le(L){f[L]!==!0&&(t.enable(L),f[L]=!0)}function Ee(L){f[L]!==!1&&(t.disable(L),f[L]=!1)}function ue(L,ae){return m[L]!==ae?(t.bindFramebuffer(L,ae),m[L]=ae,i&&(L===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=ae),L===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=ae)),!0):!1}function O(L,ae){let le=x,Ce=!1;if(L)if(le=_.get(ae),le===void 0&&(le=[],_.set(ae,le)),L.isWebGLMultipleRenderTargets){const Te=L.texture;if(le.length!==Te.length||le[0]!==t.COLOR_ATTACHMENT0){for(let Je=0,et=Te.length;Je<et;Je++)le[Je]=t.COLOR_ATTACHMENT0+Je;le.length=Te.length,Ce=!0}}else le[0]!==t.COLOR_ATTACHMENT0&&(le[0]=t.COLOR_ATTACHMENT0,Ce=!0);else le[0]!==t.BACK&&(le[0]=t.BACK,Ce=!0);Ce&&(n.isWebGL2?t.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function Ke(L){return p!==L?(t.useProgram(L),p=L,!0):!1}const _e={[sr]:t.FUNC_ADD,[Xx]:t.FUNC_SUBTRACT,[qx]:t.FUNC_REVERSE_SUBTRACT};if(i)_e[mh]=t.MIN,_e[gh]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(_e[mh]=L.MIN_EXT,_e[gh]=L.MAX_EXT)}const Ne={[Yx]:t.ZERO,[$x]:t.ONE,[Kx]:t.SRC_COLOR,[Du]:t.SRC_ALPHA,[ny]:t.SRC_ALPHA_SATURATE,[ey]:t.DST_COLOR,[Qx]:t.DST_ALPHA,[Zx]:t.ONE_MINUS_SRC_COLOR,[Iu]:t.ONE_MINUS_SRC_ALPHA,[ty]:t.ONE_MINUS_DST_COLOR,[Jx]:t.ONE_MINUS_DST_ALPHA,[iy]:t.CONSTANT_COLOR,[ry]:t.ONE_MINUS_CONSTANT_COLOR,[sy]:t.CONSTANT_ALPHA,[oy]:t.ONE_MINUS_CONSTANT_ALPHA};function ve(L,ae,le,Ce,Te,Je,et,wt,Vt,tt){if(L===zi){u===!0&&(Ee(t.BLEND),u=!1);return}if(u===!1&&(Le(t.BLEND),u=!0),L!==jx){if(L!==g||tt!==G){if((v!==sr||A!==sr)&&(t.blendEquation(t.FUNC_ADD),v=sr,A=sr),tt)switch(L){case ls:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case fh:t.blendFunc(t.ONE,t.ONE);break;case hh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ph:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ls:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case fh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case hh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ph:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,b=null,C=null,N=null,M.set(0,0,0),T=0,g=L,G=tt}return}Te=Te||ae,Je=Je||le,et=et||Ce,(ae!==v||Te!==A)&&(t.blendEquationSeparate(_e[ae],_e[Te]),v=ae,A=Te),(le!==S||Ce!==b||Je!==C||et!==N)&&(t.blendFuncSeparate(Ne[le],Ne[Ce],Ne[Je],Ne[et]),S=le,b=Ce,C=Je,N=et),(wt.equals(M)===!1||Vt!==T)&&(t.blendColor(wt.r,wt.g,wt.b,Vt),M.copy(wt),T=Vt),g=L,G=!1}function lt(L,ae){L.side===oi?Ee(t.CULL_FACE):Le(t.CULL_FACE);let le=L.side===sn;ae&&(le=!le),Fe(le),L.blending===ls&&L.transparent===!1?ve(zi):ve(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Ce=L.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),H(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Le(t.SAMPLE_ALPHA_TO_COVERAGE):Ee(t.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(L){j!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),j=L)}function R(L){L!==Gx?(Le(t.CULL_FACE),L!==Q&&(L===dh?t.cullFace(t.BACK):L===Vx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ee(t.CULL_FACE),Q=L}function E(L){L!==P&&(D&&t.lineWidth(L),P=L)}function H(L,ae,le){L?(Le(t.POLYGON_OFFSET_FILL),(F!==ae||q!==le)&&(t.polygonOffset(ae,le),F=ae,q=le)):Ee(t.POLYGON_OFFSET_FILL)}function ne(L){L?Le(t.SCISSOR_TEST):Ee(t.SCISSOR_TEST)}function ee(L){L===void 0&&(L=t.TEXTURE0+$-1),Y!==L&&(t.activeTexture(L),Y=L)}function ie(L,ae,le){le===void 0&&(Y===null?le=t.TEXTURE0+$-1:le=Y);let Ce=Z[le];Ce===void 0&&(Ce={type:void 0,texture:void 0},Z[le]=Ce),(Ce.type!==L||Ce.texture!==ae)&&(Y!==le&&(t.activeTexture(le),Y=le),t.bindTexture(L,ae||be[L]),Ce.type=L,Ce.texture=ae)}function xe(){const L=Z[Y];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ce(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ke(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ze(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ve(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pe(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ue(L){oe.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),oe.copy(L))}function Ye(L){he.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),he.copy(L))}function ht(L,ae){let le=h.get(ae);le===void 0&&(le=new WeakMap,h.set(ae,le));let Ce=le.get(L);Ce===void 0&&(Ce=t.getUniformBlockIndex(ae,L.name),le.set(L,Ce))}function ze(L,ae){const Ce=h.get(ae).get(L);d.get(ae)!==Ce&&(t.uniformBlockBinding(ae,Ce,L.__bindingPointIndex),d.set(ae,Ce))}function re(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},Y=null,Z={},m={},_=new WeakMap,x=[],p=null,u=!1,g=null,v=null,S=null,b=null,A=null,C=null,N=null,M=new We(0,0,0),T=0,G=!1,j=null,Q=null,P=null,F=null,q=null,oe.set(0,0,t.canvas.width,t.canvas.height),he.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Le,disable:Ee,bindFramebuffer:ue,drawBuffers:O,useProgram:Ke,setBlending:ve,setMaterial:lt,setFlipSided:Fe,setCullFace:R,setLineWidth:E,setPolygonOffset:H,setScissorTest:ne,activeTexture:ee,bindTexture:ie,unbindTexture:xe,compressedTexImage2D:ce,compressedTexImage3D:me,texImage2D:Me,texImage3D:ge,updateUBOMapping:ht,uniformBlockBinding:ze,texStorage2D:Ve,texStorage3D:Pe,texSubImage2D:Ae,texSubImage3D:ke,compressedTexSubImage2D:J,compressedTexSubImage3D:Ze,scissor:Ue,viewport:Ye,reset:re}}function z1(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,E){return m?new OffscreenCanvas(R,E):al("canvas")}function x(R,E,H,ne){let ee=1;if((R.width>ne||R.height>ne)&&(ee=ne/Math.max(R.width,R.height)),ee<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ie=E?Hu:Math.floor,xe=ie(ee*R.width),ce=ie(ee*R.height);h===void 0&&(h=_(xe,ce));const me=H?_(xe,ce):h;return me.width=xe,me.height=ce,me.getContext("2d").drawImage(R,0,0,xe,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+xe+"x"+ce+")."),me}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function p(R){return Xh(R.width)&&Xh(R.height)}function u(R){return a?!1:R.wrapS!==On||R.wrapT!==On||R.minFilter!==qt&&R.minFilter!==Mn}function g(R,E){return R.generateMipmaps&&E&&R.minFilter!==qt&&R.minFilter!==Mn}function v(R){t.generateMipmap(R)}function S(R,E,H,ne,ee=!1){if(a===!1)return E;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ie=E;if(E===t.RED&&(H===t.FLOAT&&(ie=t.R32F),H===t.HALF_FLOAT&&(ie=t.R16F),H===t.UNSIGNED_BYTE&&(ie=t.R8)),E===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(ie=t.R8UI),H===t.UNSIGNED_SHORT&&(ie=t.R16UI),H===t.UNSIGNED_INT&&(ie=t.R32UI),H===t.BYTE&&(ie=t.R8I),H===t.SHORT&&(ie=t.R16I),H===t.INT&&(ie=t.R32I)),E===t.RG&&(H===t.FLOAT&&(ie=t.RG32F),H===t.HALF_FLOAT&&(ie=t.RG16F),H===t.UNSIGNED_BYTE&&(ie=t.RG8)),E===t.RGBA){const xe=ee?il:Qe.getTransfer(ne);H===t.FLOAT&&(ie=t.RGBA32F),H===t.HALF_FLOAT&&(ie=t.RGBA16F),H===t.UNSIGNED_BYTE&&(ie=xe===rt?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(ie=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(ie=t.RGB5_A1)}return(ie===t.R16F||ie===t.R32F||ie===t.RG16F||ie===t.RG32F||ie===t.RGBA16F||ie===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function b(R,E,H){return g(R,H)===!0||R.isFramebufferTexture&&R.minFilter!==qt&&R.minFilter!==Mn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function A(R){return R===qt||R===vh||R===oc?t.NEAREST:t.LINEAR}function C(R){const E=R.target;E.removeEventListener("dispose",C),M(E),E.isVideoTexture&&d.delete(E)}function N(R){const E=R.target;E.removeEventListener("dispose",N),G(E)}function M(R){const E=i.get(R);if(E.__webglInit===void 0)return;const H=R.source,ne=f.get(H);if(ne){const ee=ne[E.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&T(R),Object.keys(ne).length===0&&f.delete(H)}i.remove(R)}function T(R){const E=i.get(R);t.deleteTexture(E.__webglTexture);const H=R.source,ne=f.get(H);delete ne[E.__cacheKey],o.memory.textures--}function G(R){const E=R.texture,H=i.get(R),ne=i.get(E);if(ne.__webglTexture!==void 0&&(t.deleteTexture(ne.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(H.__webglFramebuffer[ee]))for(let ie=0;ie<H.__webglFramebuffer[ee].length;ie++)t.deleteFramebuffer(H.__webglFramebuffer[ee][ie]);else t.deleteFramebuffer(H.__webglFramebuffer[ee]);H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer[ee])}else{if(Array.isArray(H.__webglFramebuffer))for(let ee=0;ee<H.__webglFramebuffer.length;ee++)t.deleteFramebuffer(H.__webglFramebuffer[ee]);else t.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&t.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ee=0;ee<H.__webglColorRenderbuffer.length;ee++)H.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(H.__webglColorRenderbuffer[ee]);H.__webglDepthRenderbuffer&&t.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ee=0,ie=E.length;ee<ie;ee++){const xe=i.get(E[ee]);xe.__webglTexture&&(t.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(E[ee])}i.remove(E),i.remove(R)}let j=0;function Q(){j=0}function P(){const R=j;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),j+=1,R}function F(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function q(R,E){const H=i.get(R);if(R.isVideoTexture&&lt(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const ne=R.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(H,R,E);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+E)}function $(R,E){const H=i.get(R);if(R.version>0&&H.__version!==R.version){oe(H,R,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+E)}function D(R,E){const H=i.get(R);if(R.version>0&&H.__version!==R.version){oe(H,R,E);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+E)}function k(R,E){const H=i.get(R);if(R.version>0&&H.__version!==R.version){he(H,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+E)}const B={[Fu]:t.REPEAT,[On]:t.CLAMP_TO_EDGE,[ku]:t.MIRRORED_REPEAT},Y={[qt]:t.NEAREST,[vh]:t.NEAREST_MIPMAP_NEAREST,[oc]:t.NEAREST_MIPMAP_LINEAR,[Mn]:t.LINEAR,[My]:t.LINEAR_MIPMAP_NEAREST,[yo]:t.LINEAR_MIPMAP_LINEAR},Z={[Iy]:t.NEVER,[zy]:t.ALWAYS,[Uy]:t.LESS,[uv]:t.LEQUAL,[Oy]:t.EQUAL,[By]:t.GEQUAL,[Fy]:t.GREATER,[ky]:t.NOTEQUAL};function X(R,E,H){if(H?(t.texParameteri(R,t.TEXTURE_WRAP_S,B[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,B[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,B[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Y[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Y[E.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==On||E.wrapT!==On)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,A(E.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,A(E.minFilter)),E.minFilter!==qt&&E.minFilter!==Mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Z[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===qt||E.minFilter!==oc&&E.minFilter!==yo||E.type===Pi&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===So&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(t.texParameterf(R,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function K(R,E){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",C));const ne=E.source;let ee=f.get(ne);ee===void 0&&(ee={},f.set(ne,ee));const ie=F(E);if(ie!==R.__cacheKey){ee[ie]===void 0&&(ee[ie]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ee[ie].usedTimes++;const xe=ee[R.__cacheKey];xe!==void 0&&(ee[R.__cacheKey].usedTimes--,xe.usedTimes===0&&T(E)),R.__cacheKey=ie,R.__webglTexture=ee[ie].texture}return H}function oe(R,E,H){let ne=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ne=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ne=t.TEXTURE_3D);const ee=K(R,E),ie=E.source;n.bindTexture(ne,R.__webglTexture,t.TEXTURE0+H);const xe=i.get(ie);if(ie.version!==xe.__version||ee===!0){n.activeTexture(t.TEXTURE0+H);const ce=Qe.getPrimaries(Qe.workingColorSpace),me=E.colorSpace===En?null:Qe.getPrimaries(E.colorSpace),Ae=E.colorSpace===En||ce===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const ke=u(E)&&p(E.image)===!1;let J=x(E.image,ke,!1,r.maxTextureSize);J=Fe(E,J);const Ze=p(J)||a,Ve=s.convert(E.format,E.colorSpace);let Pe=s.convert(E.type),Me=S(E.internalFormat,Ve,Pe,E.colorSpace,E.isVideoTexture);X(ne,E,Ze);let ge;const Ue=E.mipmaps,Ye=a&&E.isVideoTexture!==!0&&Me!==av,ht=xe.__version===void 0||ee===!0,ze=b(E,J,Ze);if(E.isDepthTexture)Me=t.DEPTH_COMPONENT,a?E.type===Pi?Me=t.DEPTH_COMPONENT32F:E.type===Li?Me=t.DEPTH_COMPONENT24:E.type===fr?Me=t.DEPTH24_STENCIL8:Me=t.DEPTH_COMPONENT16:E.type===Pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===hr&&Me===t.DEPTH_COMPONENT&&E.type!==Bd&&E.type!==Li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Li,Pe=s.convert(E.type)),E.format===xs&&Me===t.DEPTH_COMPONENT&&(Me=t.DEPTH_STENCIL,E.type!==fr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=fr,Pe=s.convert(E.type))),ht&&(Ye?n.texStorage2D(t.TEXTURE_2D,1,Me,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,Me,J.width,J.height,0,Ve,Pe,null));else if(E.isDataTexture)if(Ue.length>0&&Ze){Ye&&ht&&n.texStorage2D(t.TEXTURE_2D,ze,Me,Ue[0].width,Ue[0].height);for(let re=0,L=Ue.length;re<L;re++)ge=Ue[re],Ye?n.texSubImage2D(t.TEXTURE_2D,re,0,0,ge.width,ge.height,Ve,Pe,ge.data):n.texImage2D(t.TEXTURE_2D,re,Me,ge.width,ge.height,0,Ve,Pe,ge.data);E.generateMipmaps=!1}else Ye?(ht&&n.texStorage2D(t.TEXTURE_2D,ze,Me,J.width,J.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,J.width,J.height,Ve,Pe,J.data)):n.texImage2D(t.TEXTURE_2D,0,Me,J.width,J.height,0,Ve,Pe,J.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ye&&ht&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ze,Me,Ue[0].width,Ue[0].height,J.depth);for(let re=0,L=Ue.length;re<L;re++)ge=Ue[re],E.format!==Fn?Ve!==null?Ye?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,ge.width,ge.height,J.depth,Ve,ge.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,re,Me,ge.width,ge.height,J.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?n.texSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,ge.width,ge.height,J.depth,Ve,Pe,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,re,Me,ge.width,ge.height,J.depth,0,Ve,Pe,ge.data)}else{Ye&&ht&&n.texStorage2D(t.TEXTURE_2D,ze,Me,Ue[0].width,Ue[0].height);for(let re=0,L=Ue.length;re<L;re++)ge=Ue[re],E.format!==Fn?Ve!==null?Ye?n.compressedTexSubImage2D(t.TEXTURE_2D,re,0,0,ge.width,ge.height,Ve,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,re,Me,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?n.texSubImage2D(t.TEXTURE_2D,re,0,0,ge.width,ge.height,Ve,Pe,ge.data):n.texImage2D(t.TEXTURE_2D,re,Me,ge.width,ge.height,0,Ve,Pe,ge.data)}else if(E.isDataArrayTexture)Ye?(ht&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ze,Me,J.width,J.height,J.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Ve,Pe,J.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Me,J.width,J.height,J.depth,0,Ve,Pe,J.data);else if(E.isData3DTexture)Ye?(ht&&n.texStorage3D(t.TEXTURE_3D,ze,Me,J.width,J.height,J.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Ve,Pe,J.data)):n.texImage3D(t.TEXTURE_3D,0,Me,J.width,J.height,J.depth,0,Ve,Pe,J.data);else if(E.isFramebufferTexture){if(ht)if(Ye)n.texStorage2D(t.TEXTURE_2D,ze,Me,J.width,J.height);else{let re=J.width,L=J.height;for(let ae=0;ae<ze;ae++)n.texImage2D(t.TEXTURE_2D,ae,Me,re,L,0,Ve,Pe,null),re>>=1,L>>=1}}else if(Ue.length>0&&Ze){Ye&&ht&&n.texStorage2D(t.TEXTURE_2D,ze,Me,Ue[0].width,Ue[0].height);for(let re=0,L=Ue.length;re<L;re++)ge=Ue[re],Ye?n.texSubImage2D(t.TEXTURE_2D,re,0,0,Ve,Pe,ge):n.texImage2D(t.TEXTURE_2D,re,Me,Ve,Pe,ge);E.generateMipmaps=!1}else Ye?(ht&&n.texStorage2D(t.TEXTURE_2D,ze,Me,J.width,J.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ve,Pe,J)):n.texImage2D(t.TEXTURE_2D,0,Me,Ve,Pe,J);g(E,Ze)&&v(ne),xe.__version=ie.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function he(R,E,H){if(E.image.length!==6)return;const ne=K(R,E),ee=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+H);const ie=i.get(ee);if(ee.version!==ie.__version||ne===!0){n.activeTexture(t.TEXTURE0+H);const xe=Qe.getPrimaries(Qe.workingColorSpace),ce=E.colorSpace===En?null:Qe.getPrimaries(E.colorSpace),me=E.colorSpace===En||xe===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ae=E.isCompressedTexture||E.image[0].isCompressedTexture,ke=E.image[0]&&E.image[0].isDataTexture,J=[];for(let re=0;re<6;re++)!Ae&&!ke?J[re]=x(E.image[re],!1,!0,r.maxCubemapSize):J[re]=ke?E.image[re].image:E.image[re],J[re]=Fe(E,J[re]);const Ze=J[0],Ve=p(Ze)||a,Pe=s.convert(E.format,E.colorSpace),Me=s.convert(E.type),ge=S(E.internalFormat,Pe,Me,E.colorSpace),Ue=a&&E.isVideoTexture!==!0,Ye=ie.__version===void 0||ne===!0;let ht=b(E,Ze,Ve);X(t.TEXTURE_CUBE_MAP,E,Ve);let ze;if(Ae){Ue&&Ye&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ht,ge,Ze.width,Ze.height);for(let re=0;re<6;re++){ze=J[re].mipmaps;for(let L=0;L<ze.length;L++){const ae=ze[L];E.format!==Fn?Pe!==null?Ue?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,L,0,0,ae.width,ae.height,Pe,ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,L,ge,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,L,0,0,ae.width,ae.height,Pe,Me,ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,L,ge,ae.width,ae.height,0,Pe,Me,ae.data)}}}else{ze=E.mipmaps,Ue&&Ye&&(ze.length>0&&ht++,n.texStorage2D(t.TEXTURE_CUBE_MAP,ht,ge,J[0].width,J[0].height));for(let re=0;re<6;re++)if(ke){Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,J[re].width,J[re].height,Pe,Me,J[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ge,J[re].width,J[re].height,0,Pe,Me,J[re].data);for(let L=0;L<ze.length;L++){const le=ze[L].image[re].image;Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,L+1,0,0,le.width,le.height,Pe,Me,le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,L+1,ge,le.width,le.height,0,Pe,Me,le.data)}}else{Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Pe,Me,J[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ge,Pe,Me,J[re]);for(let L=0;L<ze.length;L++){const ae=ze[L];Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,L+1,0,0,Pe,Me,ae.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,L+1,ge,Pe,Me,ae.image[re])}}}g(E,Ve)&&v(t.TEXTURE_CUBE_MAP),ie.__version=ee.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function pe(R,E,H,ne,ee,ie){const xe=s.convert(H.format,H.colorSpace),ce=s.convert(H.type),me=S(H.internalFormat,xe,ce,H.colorSpace);if(!i.get(E).__hasExternalTextures){const ke=Math.max(1,E.width>>ie),J=Math.max(1,E.height>>ie);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,ie,me,ke,J,E.depth,0,xe,ce,null):n.texImage2D(ee,ie,me,ke,J,0,xe,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),ve(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,ee,i.get(H).__webglTexture,0,Ne(E)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ne,ee,i.get(H).__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(R,E,H){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let ne=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(H||ve(E)){const ee=E.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Pi?ne=t.DEPTH_COMPONENT32F:ee.type===Li&&(ne=t.DEPTH_COMPONENT24));const ie=Ne(E);ve(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,ne,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,ne,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,ne,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){const ne=Ne(E);H&&ve(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,t.DEPTH24_STENCIL8,E.width,E.height):ve(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const ne=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ee=0;ee<ne.length;ee++){const ie=ne[ee],xe=s.convert(ie.format,ie.colorSpace),ce=s.convert(ie.type),me=S(ie.internalFormat,xe,ce,ie.colorSpace),Ae=Ne(E);H&&ve(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,me,E.width,E.height):ve(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,me,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,me,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Le(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),q(E.depthTexture,0);const ne=i.get(E.depthTexture).__webglTexture,ee=Ne(E);if(E.depthTexture.format===hr)ve(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(E.depthTexture.format===xs)ve(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ee(R){const E=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Le(E.__webglFramebuffer,R)}else if(H){E.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ne]),E.__webglDepthbuffer[ne]=t.createRenderbuffer(),be(E.__webglDepthbuffer[ne],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),be(E.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(R,E,H){const ne=i.get(R);E!==void 0&&pe(ne.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Ee(R)}function O(R){const E=R.texture,H=i.get(R),ne=i.get(E);R.addEventListener("dispose",N),R.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=E.version,o.memory.textures++);const ee=R.isWebGLCubeRenderTarget===!0,ie=R.isWebGLMultipleRenderTargets===!0,xe=p(R)||a;if(ee){H.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(a&&E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[ce]=[];for(let me=0;me<E.mipmaps.length;me++)H.__webglFramebuffer[ce][me]=t.createFramebuffer()}else H.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let ce=0;ce<E.mipmaps.length;ce++)H.__webglFramebuffer[ce]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(ie)if(r.drawBuffers){const ce=R.texture;for(let me=0,Ae=ce.length;me<Ae;me++){const ke=i.get(ce[me]);ke.__webglTexture===void 0&&(ke.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&ve(R)===!1){const ce=ie?E:[E];H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let me=0;me<ce.length;me++){const Ae=ce[me];H.__webglColorRenderbuffer[me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[me]);const ke=s.convert(Ae.format,Ae.colorSpace),J=s.convert(Ae.type),Ze=S(Ae.internalFormat,ke,J,Ae.colorSpace,R.isXRRenderTarget===!0),Ve=Ne(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,Ze,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,H.__webglColorRenderbuffer[me])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),be(H.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),X(t.TEXTURE_CUBE_MAP,E,xe);for(let ce=0;ce<6;ce++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)pe(H.__webglFramebuffer[ce][me],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,me);else pe(H.__webglFramebuffer[ce],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);g(E,xe)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ie){const ce=R.texture;for(let me=0,Ae=ce.length;me<Ae;me++){const ke=ce[me],J=i.get(ke);n.bindTexture(t.TEXTURE_2D,J.__webglTexture),X(t.TEXTURE_2D,ke,xe),pe(H.__webglFramebuffer,R,ke,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,0),g(ke,xe)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ce=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ce,ne.__webglTexture),X(ce,E,xe),a&&E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)pe(H.__webglFramebuffer[me],R,E,t.COLOR_ATTACHMENT0,ce,me);else pe(H.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,ce,0);g(E,xe)&&v(ce),n.unbindTexture()}R.depthBuffer&&Ee(R)}function Ke(R){const E=p(R)||a,H=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ne=0,ee=H.length;ne<ee;ne++){const ie=H[ne];if(g(ie,E)){const xe=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ce=i.get(ie).__webglTexture;n.bindTexture(xe,ce),v(xe),n.unbindTexture()}}}function _e(R){if(a&&R.samples>0&&ve(R)===!1){const E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],H=R.width,ne=R.height;let ee=t.COLOR_BUFFER_BIT;const ie=[],xe=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=i.get(R),me=R.isWebGLMultipleRenderTargets===!0;if(me)for(let Ae=0;Ae<E.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Ae=0;Ae<E.length;Ae++){ie.push(t.COLOR_ATTACHMENT0+Ae),R.depthBuffer&&ie.push(xe);const ke=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(ke===!1&&(R.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),me&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ce.__webglColorRenderbuffer[Ae]),ke===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[xe]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[xe])),me){const J=i.get(E[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,J,0)}t.blitFramebuffer(0,0,H,ne,0,0,H,ne,ee,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ie)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),me)for(let Ae=0;Ae<E.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,ce.__webglColorRenderbuffer[Ae]);const ke=i.get(E[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function Ne(R){return Math.min(r.maxSamples,R.samples)}function ve(R){const E=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function lt(R){const E=o.render.frame;d.get(R)!==E&&(d.set(R,E),R.update())}function Fe(R,E){const H=R.colorSpace,ne=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Bu||H!==gi&&H!==En&&(Qe.getTransfer(H)===rt?a===!1?e.has("EXT_sRGB")===!0&&ne===Fn?(R.format=Bu,R.minFilter=Mn,R.generateMipmaps=!1):E=fv.sRGBToLinear(E):(ne!==Fn||ee!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}this.allocateTextureUnit=P,this.resetTextureUnits=Q,this.setTexture2D=q,this.setTexture2DArray=$,this.setTexture3D=D,this.setTextureCube=k,this.rebindTextures=ue,this.setupRenderTarget=O,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ve}function H1(t,e,n){const i=n.isWebGL2;function r(s,o=En){let a;const l=Qe.getTransfer(o);if(s===Gi)return t.UNSIGNED_BYTE;if(s===nv)return t.UNSIGNED_SHORT_4_4_4_4;if(s===iv)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Ey)return t.BYTE;if(s===Ty)return t.SHORT;if(s===Bd)return t.UNSIGNED_SHORT;if(s===tv)return t.INT;if(s===Li)return t.UNSIGNED_INT;if(s===Pi)return t.FLOAT;if(s===So)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===wy)return t.ALPHA;if(s===Fn)return t.RGBA;if(s===Ay)return t.LUMINANCE;if(s===Cy)return t.LUMINANCE_ALPHA;if(s===hr)return t.DEPTH_COMPONENT;if(s===xs)return t.DEPTH_STENCIL;if(s===Bu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Ry)return t.RED;if(s===rv)return t.RED_INTEGER;if(s===by)return t.RG;if(s===sv)return t.RG_INTEGER;if(s===ov)return t.RGBA_INTEGER;if(s===ac||s===lc||s===cc||s===uc)if(l===rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ac)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===cc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===uc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ac)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===lc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===cc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===uc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===_h||s===xh||s===yh||s===Sh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===_h)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===xh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===yh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Sh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===av)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Mh||s===Eh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Mh)return l===rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Eh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Th||s===wh||s===Ah||s===Ch||s===Rh||s===bh||s===Lh||s===Ph||s===Nh||s===Dh||s===Ih||s===Uh||s===Oh||s===Fh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Th)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===wh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ah)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ch)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Rh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===bh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Lh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ph)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Nh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Dh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ih)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Uh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Oh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Fh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===dc||s===kh||s===Bh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===dc)return l===rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===kh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Bh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ly||s===zh||s===Hh||s===Gh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===dc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===zh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Hh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Gh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===fr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class G1 extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ai extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const V1={type:"move"};class Oc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),u=this._getHandJoint(c,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(V1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ai;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class W1 extends Ts{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,f=null,m=null,_=null;const x=n.getContextAttributes();let p=null,u=null;const g=[],v=[],S=new Xe;let b=null;const A=new un;A.layers.enable(1),A.viewport=new at;const C=new un;C.layers.enable(2),C.viewport=new at;const N=[A,C],M=new G1;M.layers.enable(1),M.layers.enable(2);let T=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let K=g[X];return K===void 0&&(K=new Oc,g[X]=K),K.getTargetRaySpace()},this.getControllerGrip=function(X){let K=g[X];return K===void 0&&(K=new Oc,g[X]=K),K.getGripSpace()},this.getHand=function(X){let K=g[X];return K===void 0&&(K=new Oc,g[X]=K),K.getHandSpace()};function j(X){const K=v.indexOf(X.inputSource);if(K===-1)return;const oe=g[K];oe!==void 0&&(oe.update(X.inputSource,X.frame,c||o),oe.dispatchEvent({type:X.type,data:X.inputSource}))}function Q(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",P);for(let X=0;X<g.length;X++){const K=v[X];K!==null&&(v[X]=null,g[X].disconnect(K))}T=null,G=null,e.setRenderTarget(p),m=null,f=null,h=null,r=null,u=null,Z.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",P),x.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,K),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new yr(m.framebufferWidth,m.framebufferHeight,{format:Fn,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let K=null,oe=null,he=null;x.depth&&(he=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=x.stencil?xs:hr,oe=x.stencil?fr:Li);const pe={colorFormat:n.RGBA8,depthFormat:he,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(pe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new yr(f.textureWidth,f.textureHeight,{format:Fn,type:Gi,depthTexture:new wv(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const be=e.properties.get(u);be.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Z.setContext(r),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(X){for(let K=0;K<X.removed.length;K++){const oe=X.removed[K],he=v.indexOf(oe);he>=0&&(v[he]=null,g[he].disconnect(oe))}for(let K=0;K<X.added.length;K++){const oe=X.added[K];let he=v.indexOf(oe);if(he===-1){for(let be=0;be<g.length;be++)if(be>=v.length){v.push(oe),he=be;break}else if(v[be]===null){v[be]=oe,he=be;break}if(he===-1)break}const pe=g[he];pe&&pe.connect(oe)}}const F=new I,q=new I;function $(X,K,oe){F.setFromMatrixPosition(K.matrixWorld),q.setFromMatrixPosition(oe.matrixWorld);const he=F.distanceTo(q),pe=K.projectionMatrix.elements,be=oe.projectionMatrix.elements,Le=pe[14]/(pe[10]-1),Ee=pe[14]/(pe[10]+1),ue=(pe[9]+1)/pe[5],O=(pe[9]-1)/pe[5],Ke=(pe[8]-1)/pe[0],_e=(be[8]+1)/be[0],Ne=Le*Ke,ve=Le*_e,lt=he/(-Ke+_e),Fe=lt*-Ke;K.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Fe),X.translateZ(lt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const R=Le+lt,E=Ee+lt,H=Ne-Fe,ne=ve+(he-Fe),ee=ue*Ee/E*R,ie=O*Ee/E*R;X.projectionMatrix.makePerspective(H,ne,ee,ie,R,E),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function D(X,K){K===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(K.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;M.near=C.near=A.near=X.near,M.far=C.far=A.far=X.far,(T!==M.near||G!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,G=M.far);const K=X.parent,oe=M.cameras;D(M,K);for(let he=0;he<oe.length;he++)D(oe[he],K);oe.length===2?$(M,A,C):M.projectionMatrix.copy(A.projectionMatrix),k(X,M,K)};function k(X,K,oe){oe===null?X.matrix.copy(K.matrixWorld):(X.matrix.copy(oe.matrixWorld),X.matrix.invert(),X.matrix.multiply(K.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=zu*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)};let B=null;function Y(X,K){if(d=K.getViewerPose(c||o),_=K,d!==null){const oe=d.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let he=!1;oe.length!==M.cameras.length&&(M.cameras.length=0,he=!0);for(let pe=0;pe<oe.length;pe++){const be=oe[pe];let Le=null;if(m!==null)Le=m.getViewport(be);else{const ue=h.getViewSubImage(f,be);Le=ue.viewport,pe===0&&(e.setRenderTargetTextures(u,ue.colorTexture,f.ignoreDepthValues?void 0:ue.depthStencilTexture),e.setRenderTarget(u))}let Ee=N[pe];Ee===void 0&&(Ee=new un,Ee.layers.enable(pe),Ee.viewport=new at,N[pe]=Ee),Ee.matrix.fromArray(be.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(be.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Le.x,Le.y,Le.width,Le.height),pe===0&&(M.matrix.copy(Ee.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),he===!0&&M.cameras.push(Ee)}}for(let oe=0;oe<g.length;oe++){const he=v[oe],pe=g[oe];he!==null&&pe!==void 0&&pe.update(he,K,c||o)}B&&B(X,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),_=null}const Z=new Ev;Z.setAnimationLoop(Y),this.setAnimationLoop=function(X){B=X},this.dispose=function(){}}}function j1(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,yv(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,g,v,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),h(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,S)):u.isMeshMatcapMaterial?(s(p,u),_(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),x(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,g,v):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===sn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===sn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const g=e.get(u).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*v,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,g,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*g,p.scale.value=v*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,g){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===sn&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){const g=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function X1(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,v){const S=v.program;i.uniformBlockBinding(g,S)}function c(g,v){let S=r[g.id];S===void 0&&(_(g),S=d(g),r[g.id]=S,g.addEventListener("dispose",p));const b=v.program;i.updateUBOMapping(g,b);const A=e.render.frame;s[g.id]!==A&&(f(g),s[g.id]=A)}function d(g){const v=h();g.__bindingPointIndex=v;const S=t.createBuffer(),b=g.__size,A=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,b,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function h(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const v=r[g.id],S=g.uniforms,b=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let A=0,C=S.length;A<C;A++){const N=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,T=N.length;M<T;M++){const G=N[M];if(m(G,A,M,b)===!0){const j=G.__offset,Q=Array.isArray(G.value)?G.value:[G.value];let P=0;for(let F=0;F<Q.length;F++){const q=Q[F],$=x(q);typeof q=="number"||typeof q=="boolean"?(G.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,j+P,G.__data)):q.isMatrix3?(G.__data[0]=q.elements[0],G.__data[1]=q.elements[1],G.__data[2]=q.elements[2],G.__data[3]=0,G.__data[4]=q.elements[3],G.__data[5]=q.elements[4],G.__data[6]=q.elements[5],G.__data[7]=0,G.__data[8]=q.elements[6],G.__data[9]=q.elements[7],G.__data[10]=q.elements[8],G.__data[11]=0):(q.toArray(G.__data,P),P+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,j,G.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,v,S,b){const A=g.value,C=v+"_"+S;if(b[C]===void 0)return typeof A=="number"||typeof A=="boolean"?b[C]=A:b[C]=A.clone(),!0;{const N=b[C];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return b[C]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function _(g){const v=g.uniforms;let S=0;const b=16;for(let C=0,N=v.length;C<N;C++){const M=Array.isArray(v[C])?v[C]:[v[C]];for(let T=0,G=M.length;T<G;T++){const j=M[T],Q=Array.isArray(j.value)?j.value:[j.value];for(let P=0,F=Q.length;P<F;P++){const q=Q[P],$=x(q),D=S%b;D!==0&&b-D<$.boundary&&(S+=b-D),j.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=S,S+=$.storage}}}const A=S%b;return A>0&&(S+=b-A),g.__size=S,g.__cache={},this}function x(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function p(g){const v=g.target;v.removeEventListener("dispose",p);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Pv{constructor(e={}){const{canvas:n=Gy(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pt,this._useLegacyLights=!1,this.toneMapping=Hi,this.toneMappingExposure=1;const v=this;let S=!1,b=0,A=0,C=null,N=-1,M=null;const T=new at,G=new at;let j=null;const Q=new We(0);let P=0,F=n.width,q=n.height,$=1,D=null,k=null;const B=new at(0,0,F,q),Y=new at(0,0,F,q);let Z=!1;const X=new Gd;let K=!1,oe=!1,he=null;const pe=new _t,be=new Xe,Le=new I,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ue(){return C===null?$:1}let O=i;function Ke(w,U){for(let V=0;V<w.length;V++){const W=w[V],z=n.getContext(W,U);if(z!==null)return z}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${kd}`),n.addEventListener("webglcontextlost",re,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",ae,!1),O===null){const U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),O=Ke(U,w),O===null)throw Ke(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let _e,Ne,ve,lt,Fe,R,E,H,ne,ee,ie,xe,ce,me,Ae,ke,J,Ze,Ve,Pe,Me,ge,Ue,Ye;function ht(){_e=new nT(O),Ne=new KE(O,_e,e),_e.init(Ne),ge=new H1(O,_e,Ne),ve=new B1(O,_e,Ne),lt=new sT(O),Fe=new w1,R=new z1(O,_e,ve,Fe,Ne,ge,lt),E=new QE(v),H=new tT(v),ne=new hS(O,Ne),Ue=new YE(O,_e,ne,Ne),ee=new iT(O,ne,lt,Ue),ie=new cT(O,ee,ne,lt),Ve=new lT(O,Ne,R),ke=new ZE(Fe),xe=new T1(v,E,H,_e,Ne,Ue,ke),ce=new j1(v,Fe),me=new C1,Ae=new D1(_e,Ne),Ze=new qE(v,E,H,ve,ie,f,l),J=new k1(v,ie,Ne),Ye=new X1(O,lt,Ne,ve),Pe=new $E(O,_e,lt,Ne),Me=new rT(O,_e,lt,Ne),lt.programs=xe.programs,v.capabilities=Ne,v.extensions=_e,v.properties=Fe,v.renderLists=me,v.shadowMap=J,v.state=ve,v.info=lt}ht();const ze=new W1(v,O);this.xr=ze,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=_e.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=_e.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(F,q,!1))},this.getSize=function(w){return w.set(F,q)},this.setSize=function(w,U,V=!0){if(ze.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,q=U,n.width=Math.floor(w*$),n.height=Math.floor(U*$),V===!0&&(n.style.width=w+"px",n.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(F*$,q*$).floor()},this.setDrawingBufferSize=function(w,U,V){F=w,q=U,$=V,n.width=Math.floor(w*V),n.height=Math.floor(U*V),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(B)},this.setViewport=function(w,U,V,W){w.isVector4?B.set(w.x,w.y,w.z,w.w):B.set(w,U,V,W),ve.viewport(T.copy(B).multiplyScalar($).floor())},this.getScissor=function(w){return w.copy(Y)},this.setScissor=function(w,U,V,W){w.isVector4?Y.set(w.x,w.y,w.z,w.w):Y.set(w,U,V,W),ve.scissor(G.copy(Y).multiplyScalar($).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(w){ve.setScissorTest(Z=w)},this.setOpaqueSort=function(w){D=w},this.setTransparentSort=function(w){k=w},this.getClearColor=function(w){return w.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(w=!0,U=!0,V=!0){let W=0;if(w){let z=!1;if(C!==null){const de=C.texture.format;z=de===ov||de===sv||de===rv}if(z){const de=C.texture.type,ye=de===Gi||de===Li||de===Bd||de===fr||de===nv||de===iv,we=Ze.getClearColor(),Re=Ze.getClearAlpha(),Be=we.r,De=we.g,Ie=we.b;ye?(m[0]=Be,m[1]=De,m[2]=Ie,m[3]=Re,O.clearBufferuiv(O.COLOR,0,m)):(_[0]=Be,_[1]=De,_[2]=Ie,_[3]=Re,O.clearBufferiv(O.COLOR,0,_))}else W|=O.COLOR_BUFFER_BIT}U&&(W|=O.DEPTH_BUFFER_BIT),V&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",re,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",ae,!1),me.dispose(),Ae.dispose(),Fe.dispose(),E.dispose(),H.dispose(),ie.dispose(),Ue.dispose(),Ye.dispose(),xe.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",Vt),ze.removeEventListener("sessionend",tt),he&&(he.dispose(),he=null),Wt.stop()};function re(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=lt.autoReset,U=J.enabled,V=J.autoUpdate,W=J.needsUpdate,z=J.type;ht(),lt.autoReset=w,J.enabled=U,J.autoUpdate=V,J.needsUpdate=W,J.type=z}function ae(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function le(w){const U=w.target;U.removeEventListener("dispose",le),Ce(U)}function Ce(w){Te(w),Fe.remove(w)}function Te(w){const U=Fe.get(w).programs;U!==void 0&&(U.forEach(function(V){xe.releaseProgram(V)}),w.isShaderMaterial&&xe.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,V,W,z,de){U===null&&(U=Ee);const ye=z.isMesh&&z.matrixWorld.determinant()<0,we=Uv(w,U,V,W,z);ve.setMaterial(W,ye);let Re=V.index,Be=1;if(W.wireframe===!0){if(Re=ee.getWireframeAttribute(V),Re===void 0)return;Be=2}const De=V.drawRange,Ie=V.attributes.position;let gt=De.start*Be,on=(De.start+De.count)*Be;de!==null&&(gt=Math.max(gt,de.start*Be),on=Math.min(on,(de.start+de.count)*Be)),Re!==null?(gt=Math.max(gt,0),on=Math.min(on,Re.count)):Ie!=null&&(gt=Math.max(gt,0),on=Math.min(on,Ie.count));const At=on-gt;if(At<0||At===1/0)return;Ue.setup(z,W,we,V,Re);let Zn,ct=Pe;if(Re!==null&&(Zn=ne.get(Re),ct=Me,ct.setIndex(Zn)),z.isMesh)W.wireframe===!0?(ve.setLineWidth(W.wireframeLinewidth*ue()),ct.setMode(O.LINES)):ct.setMode(O.TRIANGLES);else if(z.isLine){let He=W.linewidth;He===void 0&&(He=1),ve.setLineWidth(He*ue()),z.isLineSegments?ct.setMode(O.LINES):z.isLineLoop?ct.setMode(O.LINE_LOOP):ct.setMode(O.LINE_STRIP)}else z.isPoints?ct.setMode(O.POINTS):z.isSprite&&ct.setMode(O.TRIANGLES);if(z.isBatchedMesh)ct.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)ct.renderInstances(gt,At,z.count);else if(V.isInstancedBufferGeometry){const He=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,bl=Math.min(V.instanceCount,He);ct.renderInstances(gt,At,bl)}else ct.render(gt,At)};function Je(w,U,V){w.transparent===!0&&w.side===oi&&w.forceSinglePass===!1?(w.side=sn,w.needsUpdate=!0,Po(w,U,V),w.side=ji,w.needsUpdate=!0,Po(w,U,V),w.side=oi):Po(w,U,V)}this.compile=function(w,U,V=null){V===null&&(V=w),p=Ae.get(V),p.init(),g.push(p),V.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),w!==V&&w.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights(v._useLegacyLights);const W=new Set;return w.traverse(function(z){const de=z.material;if(de)if(Array.isArray(de))for(let ye=0;ye<de.length;ye++){const we=de[ye];Je(we,V,z),W.add(we)}else Je(de,V,z),W.add(de)}),g.pop(),p=null,W},this.compileAsync=function(w,U,V=null){const W=this.compile(w,U,V);return new Promise(z=>{function de(){if(W.forEach(function(ye){Fe.get(ye).currentProgram.isReady()&&W.delete(ye)}),W.size===0){z(w);return}setTimeout(de,10)}_e.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let et=null;function wt(w){et&&et(w)}function Vt(){Wt.stop()}function tt(){Wt.start()}const Wt=new Ev;Wt.setAnimationLoop(wt),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(w){et=w,ze.setAnimationLoop(w),w===null?Wt.stop():Wt.start()},ze.addEventListener("sessionstart",Vt),ze.addEventListener("sessionend",tt),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(U),U=ze.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,U,C),p=Ae.get(w,g.length),p.init(),g.push(p),pe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(pe),oe=this.localClippingEnabled,K=ke.init(this.clippingPlanes,oe),x=me.get(w,u.length),x.init(),u.push(x),Vn(w,U,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(D,k),this.info.render.frame++,K===!0&&ke.beginShadows();const V=p.state.shadowsArray;if(J.render(V,w,U),K===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ze.render(x,w),p.setupLights(v._useLegacyLights),U.isArrayCamera){const W=U.cameras;for(let z=0,de=W.length;z<de;z++){const ye=W[z];Yd(x,w,ye,ye.viewport)}}else Yd(x,w,U);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(v,w,U),Ue.resetDefaultState(),N=-1,M=null,g.pop(),g.length>0?p=g[g.length-1]:p=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function Vn(w,U,V,W){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||X.intersectsSprite(w)){W&&Le.setFromMatrixPosition(w.matrixWorld).applyMatrix4(pe);const ye=ie.update(w),we=w.material;we.visible&&x.push(w,ye,we,V,Le.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||X.intersectsObject(w))){const ye=ie.update(w),we=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Le.copy(w.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Le.copy(ye.boundingSphere.center)),Le.applyMatrix4(w.matrixWorld).applyMatrix4(pe)),Array.isArray(we)){const Re=ye.groups;for(let Be=0,De=Re.length;Be<De;Be++){const Ie=Re[Be],gt=we[Ie.materialIndex];gt&&gt.visible&&x.push(w,ye,gt,V,Le.z,Ie)}}else we.visible&&x.push(w,ye,we,V,Le.z,null)}}const de=w.children;for(let ye=0,we=de.length;ye<we;ye++)Vn(de[ye],U,V,W)}function Yd(w,U,V,W){const z=w.opaque,de=w.transmissive,ye=w.transparent;p.setupLightsView(V),K===!0&&ke.setGlobalState(v.clippingPlanes,V),de.length>0&&Iv(z,de,U,V),W&&ve.viewport(T.copy(W)),z.length>0&&Lo(z,U,V),de.length>0&&Lo(de,U,V),ye.length>0&&Lo(ye,U,V),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Iv(w,U,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const de=Ne.isWebGL2;he===null&&(he=new yr(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?So:Gi,minFilter:yo,samples:de?4:0})),v.getDrawingBufferSize(be),de?he.setSize(be.x,be.y):he.setSize(Hu(be.x),Hu(be.y));const ye=v.getRenderTarget();v.setRenderTarget(he),v.getClearColor(Q),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const we=v.toneMapping;v.toneMapping=Hi,Lo(w,V,W),R.updateMultisampleRenderTarget(he),R.updateRenderTargetMipmap(he);let Re=!1;for(let Be=0,De=U.length;Be<De;Be++){const Ie=U[Be],gt=Ie.object,on=Ie.geometry,At=Ie.material,Zn=Ie.group;if(At.side===oi&&gt.layers.test(W.layers)){const ct=At.side;At.side=sn,At.needsUpdate=!0,$d(gt,V,W,on,At,Zn),At.side=ct,At.needsUpdate=!0,Re=!0}}Re===!0&&(R.updateMultisampleRenderTarget(he),R.updateRenderTargetMipmap(he)),v.setRenderTarget(ye),v.setClearColor(Q,P),v.toneMapping=we}function Lo(w,U,V){const W=U.isScene===!0?U.overrideMaterial:null;for(let z=0,de=w.length;z<de;z++){const ye=w[z],we=ye.object,Re=ye.geometry,Be=W===null?ye.material:W,De=ye.group;we.layers.test(V.layers)&&$d(we,U,V,Re,Be,De)}}function $d(w,U,V,W,z,de){w.onBeforeRender(v,U,V,W,z,de),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(v,U,V,W,w,de),z.transparent===!0&&z.side===oi&&z.forceSinglePass===!1?(z.side=sn,z.needsUpdate=!0,v.renderBufferDirect(V,U,W,z,w,de),z.side=ji,z.needsUpdate=!0,v.renderBufferDirect(V,U,W,z,w,de),z.side=oi):v.renderBufferDirect(V,U,W,z,w,de),w.onAfterRender(v,U,V,W,z,de)}function Po(w,U,V){U.isScene!==!0&&(U=Ee);const W=Fe.get(w),z=p.state.lights,de=p.state.shadowsArray,ye=z.state.version,we=xe.getParameters(w,z.state,de,U,V),Re=xe.getProgramCacheKey(we);let Be=W.programs;W.environment=w.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(w.isMeshStandardMaterial?H:E).get(w.envMap||W.environment),Be===void 0&&(w.addEventListener("dispose",le),Be=new Map,W.programs=Be);let De=Be.get(Re);if(De!==void 0){if(W.currentProgram===De&&W.lightsStateVersion===ye)return Zd(w,we),De}else we.uniforms=xe.getUniforms(w),w.onBuild(V,we,v),w.onBeforeCompile(we,v),De=xe.acquireProgram(we,Re),Be.set(Re,De),W.uniforms=we.uniforms;const Ie=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ie.clippingPlanes=ke.uniform),Zd(w,we),W.needsLights=Fv(w),W.lightsStateVersion=ye,W.needsLights&&(Ie.ambientLightColor.value=z.state.ambient,Ie.lightProbe.value=z.state.probe,Ie.directionalLights.value=z.state.directional,Ie.directionalLightShadows.value=z.state.directionalShadow,Ie.spotLights.value=z.state.spot,Ie.spotLightShadows.value=z.state.spotShadow,Ie.rectAreaLights.value=z.state.rectArea,Ie.ltc_1.value=z.state.rectAreaLTC1,Ie.ltc_2.value=z.state.rectAreaLTC2,Ie.pointLights.value=z.state.point,Ie.pointLightShadows.value=z.state.pointShadow,Ie.hemisphereLights.value=z.state.hemi,Ie.directionalShadowMap.value=z.state.directionalShadowMap,Ie.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ie.spotShadowMap.value=z.state.spotShadowMap,Ie.spotLightMatrix.value=z.state.spotLightMatrix,Ie.spotLightMap.value=z.state.spotLightMap,Ie.pointShadowMap.value=z.state.pointShadowMap,Ie.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=De,W.uniformsList=null,De}function Kd(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=La.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Zd(w,U){const V=Fe.get(w);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function Uv(w,U,V,W,z){U.isScene!==!0&&(U=Ee),R.resetTextureUnits();const de=U.fog,ye=W.isMeshStandardMaterial?U.environment:null,we=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:gi,Re=(W.isMeshStandardMaterial?H:E).get(W.envMap||ye),Be=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,De=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ie=!!V.morphAttributes.position,gt=!!V.morphAttributes.normal,on=!!V.morphAttributes.color;let At=Hi;W.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(At=v.toneMapping);const Zn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ct=Zn!==void 0?Zn.length:0,He=Fe.get(W),bl=p.state.lights;if(K===!0&&(oe===!0||w!==M)){const _n=w===M&&W.id===N;ke.setState(W,w,_n)}let pt=!1;W.version===He.__version?(He.needsLights&&He.lightsStateVersion!==bl.state.version||He.outputColorSpace!==we||z.isBatchedMesh&&He.batching===!1||!z.isBatchedMesh&&He.batching===!0||z.isInstancedMesh&&He.instancing===!1||!z.isInstancedMesh&&He.instancing===!0||z.isSkinnedMesh&&He.skinning===!1||!z.isSkinnedMesh&&He.skinning===!0||z.isInstancedMesh&&He.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&He.instancingColor===!1&&z.instanceColor!==null||He.envMap!==Re||W.fog===!0&&He.fog!==de||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ke.numPlanes||He.numIntersection!==ke.numIntersection)||He.vertexAlphas!==Be||He.vertexTangents!==De||He.morphTargets!==Ie||He.morphNormals!==gt||He.morphColors!==on||He.toneMapping!==At||Ne.isWebGL2===!0&&He.morphTargetsCount!==ct)&&(pt=!0):(pt=!0,He.__version=W.version);let $i=He.currentProgram;pt===!0&&($i=Po(W,U,z));let Qd=!1,Cs=!1,Ll=!1;const Ot=$i.getUniforms(),Ki=He.uniforms;if(ve.useProgram($i.program)&&(Qd=!0,Cs=!0,Ll=!0),W.id!==N&&(N=W.id,Cs=!0),Qd||M!==w){Ot.setValue(O,"projectionMatrix",w.projectionMatrix),Ot.setValue(O,"viewMatrix",w.matrixWorldInverse);const _n=Ot.map.cameraPosition;_n!==void 0&&_n.setValue(O,Le.setFromMatrixPosition(w.matrixWorld)),Ne.logarithmicDepthBuffer&&Ot.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ot.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Cs=!0,Ll=!0)}if(z.isSkinnedMesh){Ot.setOptional(O,z,"bindMatrix"),Ot.setOptional(O,z,"bindMatrixInverse");const _n=z.skeleton;_n&&(Ne.floatVertexTextures?(_n.boneTexture===null&&_n.computeBoneTexture(),Ot.setValue(O,"boneTexture",_n.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(Ot.setOptional(O,z,"batchingTexture"),Ot.setValue(O,"batchingTexture",z._matricesTexture,R));const Pl=V.morphAttributes;if((Pl.position!==void 0||Pl.normal!==void 0||Pl.color!==void 0&&Ne.isWebGL2===!0)&&Ve.update(z,V,$i),(Cs||He.receiveShadow!==z.receiveShadow)&&(He.receiveShadow=z.receiveShadow,Ot.setValue(O,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ki.envMap.value=Re,Ki.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Cs&&(Ot.setValue(O,"toneMappingExposure",v.toneMappingExposure),He.needsLights&&Ov(Ki,Ll),de&&W.fog===!0&&ce.refreshFogUniforms(Ki,de),ce.refreshMaterialUniforms(Ki,W,$,q,he),La.upload(O,Kd(He),Ki,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(La.upload(O,Kd(He),Ki,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ot.setValue(O,"center",z.center),Ot.setValue(O,"modelViewMatrix",z.modelViewMatrix),Ot.setValue(O,"normalMatrix",z.normalMatrix),Ot.setValue(O,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const _n=W.uniformsGroups;for(let Nl=0,kv=_n.length;Nl<kv;Nl++)if(Ne.isWebGL2){const Jd=_n[Nl];Ye.update(Jd,$i),Ye.bind(Jd,$i)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $i}function Ov(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Fv(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,U,V){Fe.get(w.texture).__webglTexture=U,Fe.get(w.depthTexture).__webglTexture=V;const W=Fe.get(w);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,U){const V=Fe.get(w);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,V=0){C=w,b=U,A=V;let W=!0,z=null,de=!1,ye=!1;if(w){const Re=Fe.get(w);Re.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(O.FRAMEBUFFER,null),W=!1):Re.__webglFramebuffer===void 0?R.setupRenderTarget(w):Re.__hasExternalTextures&&R.rebindTextures(w,Fe.get(w.texture).__webglTexture,Fe.get(w.depthTexture).__webglTexture);const Be=w.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ye=!0);const De=Fe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(De[U])?z=De[U][V]:z=De[U],de=!0):Ne.isWebGL2&&w.samples>0&&R.useMultisampledRTT(w)===!1?z=Fe.get(w).__webglMultisampledFramebuffer:Array.isArray(De)?z=De[V]:z=De,T.copy(w.viewport),G.copy(w.scissor),j=w.scissorTest}else T.copy(B).multiplyScalar($).floor(),G.copy(Y).multiplyScalar($).floor(),j=Z;if(ve.bindFramebuffer(O.FRAMEBUFFER,z)&&Ne.drawBuffers&&W&&ve.drawBuffers(w,z),ve.viewport(T),ve.scissor(G),ve.setScissorTest(j),de){const Re=Fe.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,Re.__webglTexture,V)}else if(ye){const Re=Fe.get(w.texture),Be=U||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Re.__webglTexture,V||0,Be)}N=-1},this.readRenderTargetPixels=function(w,U,V,W,z,de,ye){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Fe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){ve.bindFramebuffer(O.FRAMEBUFFER,we);try{const Re=w.texture,Be=Re.format,De=Re.type;if(Be!==Fn&&ge.convert(Be)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=De===So&&(_e.has("EXT_color_buffer_half_float")||Ne.isWebGL2&&_e.has("EXT_color_buffer_float"));if(De!==Gi&&ge.convert(De)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===Pi&&(Ne.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-W&&V>=0&&V<=w.height-z&&O.readPixels(U,V,W,z,ge.convert(Be),ge.convert(De),de)}finally{const Re=C!==null?Fe.get(C).__webglFramebuffer:null;ve.bindFramebuffer(O.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(w,U,V=0){const W=Math.pow(2,-V),z=Math.floor(U.image.width*W),de=Math.floor(U.image.height*W);R.setTexture2D(U,0),O.copyTexSubImage2D(O.TEXTURE_2D,V,0,0,w.x,w.y,z,de),ve.unbindTexture()},this.copyTextureToTexture=function(w,U,V,W=0){const z=U.image.width,de=U.image.height,ye=ge.convert(V.format),we=ge.convert(V.type);R.setTexture2D(V,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment),U.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,W,w.x,w.y,z,de,ye,we,U.image.data):U.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,W,w.x,w.y,U.mipmaps[0].width,U.mipmaps[0].height,ye,U.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,W,w.x,w.y,ye,we,U.image),W===0&&V.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(w,U,V,W,z=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=w.max.x-w.min.x+1,ye=w.max.y-w.min.y+1,we=w.max.z-w.min.z+1,Re=ge.convert(W.format),Be=ge.convert(W.type);let De;if(W.isData3DTexture)R.setTexture3D(W,0),De=O.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)R.setTexture2DArray(W,0),De=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const Ie=O.getParameter(O.UNPACK_ROW_LENGTH),gt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),on=O.getParameter(O.UNPACK_SKIP_PIXELS),At=O.getParameter(O.UNPACK_SKIP_ROWS),Zn=O.getParameter(O.UNPACK_SKIP_IMAGES),ct=V.isCompressedTexture?V.mipmaps[z]:V.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,ct.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ct.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,w.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,w.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,w.min.z),V.isDataTexture||V.isData3DTexture?O.texSubImage3D(De,z,U.x,U.y,U.z,de,ye,we,Re,Be,ct.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(De,z,U.x,U.y,U.z,de,ye,we,Re,ct.data)):O.texSubImage3D(De,z,U.x,U.y,U.z,de,ye,we,Re,Be,ct),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ie),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,gt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,on),O.pixelStorei(O.UNPACK_SKIP_ROWS,At),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Zn),z===0&&W.generateMipmaps&&O.generateMipmap(De),ve.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),ve.unbindTexture()},this.resetState=function(){b=0,A=0,C=null,ve.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===zd?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===wl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Pt?pr:lv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===pr?Pt:gi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class q1 extends Pv{}q1.prototype.isWebGL1Renderer=!0;class Y1 extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Nv extends ws{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pp=new I,Np=new I,Dp=new _t,Fc=new mv,va=new Al;class $1 extends Dt{constructor(e=new Gn,n=new Nv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Pp.fromBufferAttribute(n,r-1),Np.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Pp.distanceTo(Np);e.setAttribute("lineDistance",new It(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),va.copy(i.boundingSphere),va.applyMatrix4(r),va.radius+=s,e.ray.intersectsSphere(va)===!1)return;Dp.copy(r).invert(),Fc.copy(e.ray).applyMatrix4(Dp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,d=new I,h=new I,f=new I,m=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const u=Math.max(0,o.start),g=Math.min(_.count,o.start+o.count);for(let v=u,S=g-1;v<S;v+=m){const b=_.getX(v),A=_.getX(v+1);if(c.fromBufferAttribute(p,b),d.fromBufferAttribute(p,A),Fc.distanceSqToSegment(c,d,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const N=e.ray.origin.distanceTo(f);N<e.near||N>e.far||n.push({distance:N,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let v=u,S=g-1;v<S;v+=m){if(c.fromBufferAttribute(p,v),d.fromBufferAttribute(p,v+1),Fc.distanceSqToSegment(c,d,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||n.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Ip=new I,Up=new I;class K1 extends $1{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Ip.fromBufferAttribute(n,r),Up.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ip.distanceTo(Up);e.setAttribute("lineDistance",new It(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jd extends Gn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],h=[],f=[],m=[];let _=0;const x=[],p=i/2;let u=0;g(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(d),this.setAttribute("position",new It(h,3)),this.setAttribute("normal",new It(f,3)),this.setAttribute("uv",new It(m,2));function g(){const S=new I,b=new I;let A=0;const C=(n-e)/i;for(let N=0;N<=s;N++){const M=[],T=N/s,G=T*(n-e)+e;for(let j=0;j<=r;j++){const Q=j/r,P=Q*l+a,F=Math.sin(P),q=Math.cos(P);b.x=G*F,b.y=-T*i+p,b.z=G*q,h.push(b.x,b.y,b.z),S.set(F,C,q).normalize(),f.push(S.x,S.y,S.z),m.push(Q,1-T),M.push(_++)}x.push(M)}for(let N=0;N<r;N++)for(let M=0;M<s;M++){const T=x[M][N],G=x[M+1][N],j=x[M+1][N+1],Q=x[M][N+1];d.push(T,G,Q),d.push(G,j,Q),A+=6}c.addGroup(u,A,0),u+=A}function v(S){const b=_,A=new Xe,C=new I;let N=0;const M=S===!0?e:n,T=S===!0?1:-1;for(let j=1;j<=r;j++)h.push(0,p*T,0),f.push(0,T,0),m.push(.5,.5),_++;const G=_;for(let j=0;j<=r;j++){const P=j/r*l+a,F=Math.cos(P),q=Math.sin(P);C.x=M*q,C.y=p*T,C.z=M*F,h.push(C.x,C.y,C.z),f.push(0,T,0),A.x=F*.5+.5,A.y=q*.5*T+.5,m.push(A.x,A.y),_++}for(let j=0;j<r;j++){const Q=b+j,P=G+j;S===!0?d.push(P,P+1,Q):d.push(P+1,P,Q),N+=3}c.addGroup(u,N,S===!0?1:2),u+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jd(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xd extends Gn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],h=new I,f=new I,m=[],_=[],x=[],p=[];for(let u=0;u<=i;u++){const g=[],v=u/i;let S=0;u===0&&o===0?S=.5/n:u===i&&l===Math.PI&&(S=-.5/n);for(let b=0;b<=n;b++){const A=b/n;h.x=-e*Math.cos(r+A*s)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(r+A*s)*Math.sin(o+v*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),p.push(A+S,1-v),g.push(c++)}d.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){const v=d[u][g+1],S=d[u][g],b=d[u+1][g],A=d[u+1][g+1];(u!==0||o>0)&&m.push(v,S,A),(u!==i-1||l<Math.PI)&&m.push(S,b,A)}this.setIndex(m),this.setAttribute("position",new It(_,3)),this.setAttribute("normal",new It(x,3)),this.setAttribute("uv",new It(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Vu extends ws{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cv,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Z1 extends Vu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class qd extends Dt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const kc=new _t,Op=new I,Fp=new I;class Dv{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gd,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Op.setFromMatrixPosition(e.matrixWorld),n.position.copy(Op),Fp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Fp),n.updateMatrixWorld(),kc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(kc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const kp=new _t,Hs=new I,Bc=new I;class Q1 extends Dv{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Hs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Hs),Bc.copy(i.position),Bc.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Bc),i.updateMatrixWorld(),r.makeTranslation(-Hs.x,-Hs.y,-Hs.z),kp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kp)}}class J1 extends qd{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Q1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ew extends Dv{constructor(){super(new Tv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tw extends qd{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new ew}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class nw extends qd{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class iw extends K1{constructor(e=10,n=10,i=4473924,r=8947848){i=new We(i),r=new We(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let f=0,m=0,_=-a;f<=n;f++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const x=f===s?i:r;x.toArray(c,m),m+=3,x.toArray(c,m),m+=3,x.toArray(c,m),m+=3,x.toArray(c,m),m+=3}const d=new Gn;d.setAttribute("position",new It(l,3)),d.setAttribute("color",new It(c,3));const h=new Nv({vertexColors:!0,toneMapped:!1});super(d,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kd);function rw({addToast:t}){const e=Se.useRef(null),[n,i]=Se.useState({steel:!0,concrete:!0,glass:!0,lights:!0}),[r,s]=Se.useState("day"),o=Se.useRef(null),a=Se.useRef(null),l=Se.useRef(null),c=Se.useRef(null),d=Se.useRef(null),h=Se.useRef(null),f=Se.useRef(null),m=Se.useRef(null);Se.useEffect(()=>{const p=e.current;if(!p)return;const u=p.clientWidth||600,g=p.clientHeight||500,v=new Y1;o.current=v;const S=new un(45,u/g,.1,1e3);S.position.set(18,14,24),S.lookAt(0,4,0),l.current=S;const b=new Pv({antialias:!0,alpha:!0});b.setSize(u,g),b.setPixelRatio(Math.min(window.devicePixelRatio,2)),p.innerHTML="",p.appendChild(b.domElement),a.current=b;const A=new nw(16777215,.7);v.add(A);const C=new tw(15051068,1.5);C.position.set(20,30,15),v.add(C);const N=new J1(61695,2,40);N.position.set(-15,10,-10),v.add(N);const M=new ai;v.add(M),c.current=M;const T=new ai,G=new Vu({color:1976635,roughness:.4,metalness:.2});for(let ue=0;ue<7;ue++){const O=new Sr(10,.4,8),Ke=new dn(O,G);Ke.position.y=ue*2.2,T.add(Ke)}M.add(T),h.current=T;const j=new ai,Q=new Vu({color:15051068,metalness:.8,roughness:.2});[[-4.5,-3.5],[4.5,-3.5],[-4.5,3.5],[4.5,3.5],[0,-3.5],[0,3.5],[-4.5,0],[4.5,0]].forEach(([ue,O])=>{const Ke=new jd(.15,.15,14,8),_e=new dn(Ke,Q);_e.position.set(ue,6.5,O),j.add(_e)}),M.add(j),d.current=j;const F=new ai,q=new Z1({color:3718648,transparent:!0,opacity:.35,roughness:.1,metalness:.1,transmission:.6,ior:1.5});for(let ue=0;ue<6;ue++){const O=new Sr(9.6,1.8,7.6),Ke=new dn(O,q);Ke.position.y=ue*2.2+1.1,F.add(Ke)}M.add(F),f.current=F;const $=new ai,D=new Hd({color:16765286});for(let ue=0;ue<6;ue++){const O=new Xd(.18,8,8),Ke=new dn(O,D);Ke.position.set(-2,ue*2.2+1.1,0);const _e=new dn(O,D);_e.position.set(2,ue*2.2+1.1,1),$.add(Ke),$.add(_e)}M.add($),m.current=$;const k=new iw(30,20,15051068,1976635);k.position.y=-.2,v.add(k);let B=!1,Y={x:0,y:0};const Z=ue=>{B=!0,Y={x:ue.clientX,y:ue.clientY}},X=ue=>{if(!B)return;const O=ue.clientX-Y.x,Ke=ue.clientY-Y.y;M.rotation.y+=O*.008,M.rotation.x+=Ke*.005,Y={x:ue.clientX,y:ue.clientY}},K=()=>{B=!1},oe=ue=>{ue.touches.length===1&&(B=!0,Y={x:ue.touches[0].clientX,y:ue.touches[0].clientY})},he=ue=>{if(!B||ue.touches.length!==1)return;const O=ue.touches[0].clientX-Y.x;M.rotation.y+=O*.008,Y={x:ue.touches[0].clientX,y:ue.touches[0].clientY}},pe=()=>{B=!1};p.addEventListener("mousedown",Z),window.addEventListener("mousemove",X),window.addEventListener("mouseup",K),p.addEventListener("touchstart",oe),window.addEventListener("touchmove",he),window.addEventListener("touchend",pe);let be;const Le=()=>{be=requestAnimationFrame(Le),B||(M.rotation.y+=.004),b.render(v,S)};Le();const Ee=()=>{if(!p)return;const ue=p.clientWidth,O=p.clientHeight;S.aspect=ue/O,S.updateProjectionMatrix(),b.setSize(ue,O)};return window.addEventListener("resize",Ee),()=>{cancelAnimationFrame(be),window.removeEventListener("resize",Ee),p.removeEventListener("mousedown",Z),window.removeEventListener("mousemove",X),window.removeEventListener("mouseup",K),p.removeEventListener("touchstart",oe),window.removeEventListener("touchmove",he),window.removeEventListener("touchend",pe),b.dispose()}},[]);const _=(p,u)=>{i(g=>{const v=!g[p];return p==="steel"&&d.current&&(d.current.visible=v),p==="concrete"&&h.current&&(h.current.visible=v),p==="glass"&&f.current&&(f.current.visible=v),p==="lights"&&m.current&&(m.current.visible=v),t(`${u}: ${v?"VISIBLE / ON":"HIDDEN / OFF"}`),{...g,[p]:v}})},x=p=>{s(p),a.current&&(p==="day"?(a.current.setClearColor(923694,.3),t("Simulated: Daylight Sun (6500K Ambient)")):p==="sunset"?(a.current.setClearColor(2955018,.7),t("Simulated: Golden Hour Sunset (2800K Warm)")):p==="night"&&(a.current.setClearColor(198156,.95),t("Simulated: Night Architectural LED Mode")))};return y.jsx("section",{className:"bim-visualizer-section",id:"bim3d",children:y.jsxs("div",{className:"container",children:[y.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[y.jsx("div",{className:"section-tag",style:{justifyContent:"center"},children:"INTERACTIVE 3D BIM TECHNOLOGY"}),y.jsx("h2",{className:"section-title",children:"REAL-TIME 3D DIGITAL TWIN VISUALIZER"}),y.jsx("p",{className:"section-desc",style:{margin:"12px auto 0 auto"},children:"Drag to orbit around our procedural architectural BIM model in 3D. Toggle structural steel frames, concrete slabs, glass curtain walls, and interior lighting live."})]}),y.jsxs("div",{className:"bim-wrapper",children:[y.jsx("div",{className:"bim-canvas-container",ref:e,style:{position:"relative"},children:y.jsxs("div",{className:"bim-hud-badge",children:[y.jsx("span",{className:"bim-hud-pulse"}),y.jsx("span",{children:"3D BIM LEVEL 3 • MOUSE DRAG TO ROTATE"})]})}),y.jsxs("div",{className:"bim-controls-panel",children:[y.jsxs("div",{children:[y.jsx("h3",{style:{fontFamily:"Syne, sans-serif",fontSize:"1.25rem",color:"white",marginBottom:"6px"},children:"BIM Structural Layers"}),y.jsx("p",{style:{fontSize:"0.82rem",color:"#94a3b8",marginBottom:"20px"},children:"Isolate key civil and architectural systems in real time:"}),y.jsxs("div",{className:`bim-layer-toggle ${n.steel?"active":""}`,onClick:()=>_("steel","Steel Structural Columns"),style:{cursor:"pointer"},children:[y.jsx("span",{children:"🏗️ Steel Structural Columns"}),y.jsx("span",{className:"gold-text",children:n.steel?"VISIBLE":"HIDDEN"})]}),y.jsxs("div",{className:`bim-layer-toggle ${n.concrete?"active":""}`,onClick:()=>_("concrete","Concrete Floor Slabs"),style:{cursor:"pointer"},children:[y.jsx("span",{children:"🏢 Concrete Floor Slabs (7 Levels)"}),y.jsx("span",{className:"gold-text",children:n.concrete?"VISIBLE":"HIDDEN"})]}),y.jsxs("div",{className:`bim-layer-toggle ${n.glass?"active":""}`,onClick:()=>_("glass","Double-Glazed Glass Curtains"),style:{cursor:"pointer"},children:[y.jsx("span",{children:"🪟 Double-Glazed Glass Curtains"}),y.jsx("span",{className:"gold-text",children:n.glass?"VISIBLE":"HIDDEN"})]}),y.jsxs("div",{className:`bim-layer-toggle ${n.lights?"active":""}`,onClick:()=>_("lights","Interior Lighting & BMS"),style:{cursor:"pointer"},children:[y.jsx("span",{children:"💡 Interior Lighting & BMS Nodes"}),y.jsx("span",{className:"gold-text",children:n.lights?"ON":"OFF"})]})]}),y.jsxs("div",{className:"lighting-sim-box",children:[y.jsx("span",{style:{fontSize:"0.78rem",fontWeight:700,color:"#cbd5e1",textTransform:"uppercase"},children:"3D Lighting Environment Simulation"}),y.jsxs("div",{className:"sim-btns-grid",children:[y.jsx("button",{className:`sim-btn ${r==="day"?"active":""}`,onClick:()=>x("day"),children:"☀️ Day Sun"}),y.jsx("button",{className:`sim-btn ${r==="sunset"?"active":""}`,onClick:()=>x("sunset"),children:"🌅 Sunset"}),y.jsx("button",{className:`sim-btn ${r==="night"?"active":""}`,onClick:()=>x("night"),children:"🌙 Night LED"})]})]})]})]})]})})}function sw(){const t=[{icon:y.jsx(Sx,{size:26}),title:"GENERAL CONSTRUCTION",desc:"End-to-end construction services with superior quality and on-time delivery."},{icon:y.jsx(Cx,{size:26}),title:"DESIGN & BUILD",desc:"Innovative design solutions combined with expert construction and 3D BIM."},{icon:y.jsx(Bx,{size:26}),title:"RENOVATION & REMODELING",desc:"Transforming spaces with modern designs and exceptional craftsmanship."},{icon:y.jsx(Ux,{size:26}),title:"PROJECT MANAGEMENT",desc:"Efficient management ensuring quality, budget, and timely completion."}];return y.jsx("section",{className:"services-strip-section perspective-container",id:"services",children:y.jsx("div",{className:"container",children:y.jsx("div",{className:"services-strip-grid",children:t.map((e,n)=>y.jsxs("div",{className:"service-strip-card tilt-3d",children:[y.jsx("div",{className:"service-icon-box",children:e.icon}),y.jsx("h3",{className:"service-strip-title",children:e.title}),y.jsx("p",{className:"service-strip-desc",children:e.desc})]},n))})})})}function ow({onOpenProjectModal:t,onOpenVideo:e,addToast:n}){const[i,r]=Se.useState([]),[s,o]=Se.useState("all"),[a,l]=Se.useState(!0),c=[{id:1,title:"Commercial Complex",category:"commercial",badge:"Commercial",subtitle:"Modern commercial space",image:"./assets/images/commercial.jpg",gallery:["./assets/images/commercial.jpg","./assets/images/interior.jpg","./assets/images/hero-villa.jpg"],location:"Metropolitan Financial District, NY",area:"145,000 sq ft",duration:"22 Months",architect:"KPF Architects & BuildHub Engineering",client:"Axon Global Holdings",desc:"An iconic 12-story high-performance commercial headquarters featuring energy-efficient double-glazed curtain walls, LEED Gold certification, and advanced HVAC automation.",highlights:["LEED Gold Certified","Seismic Resilience Grade A","Full Smart BMS Automation"]},{id:2,title:"Luxury Villa",category:"villa",badge:"Luxury Villa",subtitle:"Elegant and sustainable design",image:"./assets/images/hero-villa.jpg",gallery:["./assets/images/hero-villa.jpg","./assets/images/interior.jpg","./assets/images/commercial.jpg"],location:"Malibu Coastal Ridge, CA",area:"8,400 sq ft",duration:"14 Months",architect:"Studio Horizon Design",client:"Private Residence",desc:"A bespoke coastal architectural residence featuring expansive cantilevered roofs, heated infinity pool overlooking the ocean, and automated smart solar integration.",highlights:["Custom Cantilever Engineering","Infinity Pool & Spa","Off-grid Solar Battery System"]},{id:3,title:"Residential Apartment",category:"residential",badge:"Residential",subtitle:"Comfortable urban living",image:"./assets/images/residential.jpg",gallery:["./assets/images/residential.jpg","./assets/images/hero-villa.jpg","./assets/images/interior.jpg"],location:"Arbor District, Seattle, WA",area:"54,000 sq ft",duration:"18 Months",architect:"Pacific Urban Architects",client:"Arbor Living Partners",desc:"A 6-story boutique residential complex equipped with wooden louvers, private garden terraces, acoustic insulation, and subterranean parking.",highlights:["Biophilic Façade Design","Soundproof Triple Glazing","Rooftop Community Sky Lounge"]},{id:4,title:"Office Interior",category:"interior",badge:"Office Interior",subtitle:"Functional and aesthetic interiors",image:"./assets/images/interior.jpg",gallery:["./assets/images/interior.jpg","./assets/images/commercial.jpg","./assets/images/hero-villa.jpg"],location:"Midtown Tech Center, Austin, TX",area:"28,000 sq ft",duration:"6 Months",architect:"BuildHub Interior Studio",client:"CloudScale Technologies",desc:"Turnkey interior transformation featuring bespoke fluted walnut acoustic wall paneling, acoustic privacy pods, executive boardrooms, and ergonomic lighting.",highlights:["Acoustic Decibel Rating 48+","Custom Millwork & Glass","Circadian LED Lighting"]}];Se.useEffect(()=>{d(s)},[s]);const d=async f=>{l(!0);try{const m=f==="all"?"/api/projects":`/api/projects?category=${encodeURIComponent(f)}`,_=await fetch(m);if(_.ok){const x=await _.json();r(x&&x.length>0?x:c)}else r(f==="all"?c:c.filter(x=>x.category===f))}catch(m){console.warn("Backend API connection offline, using fallback client data",m),r(f==="all"?c:c.filter(_=>_.category===f))}finally{l(!1)}},h=f=>{o(f)};return y.jsx("section",{className:"projects-section perspective-container",id:"projects",children:y.jsxs("div",{className:"container",children:[y.jsxs("div",{className:"projects-header-row",children:[y.jsxs("div",{children:[y.jsx("div",{className:"section-tag",children:"OUR WORK"}),y.jsx("h2",{className:"section-title",children:"OUR RECENT PROJECTS"})]}),y.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[y.jsxs("button",{className:"btn btn-primary",onClick:e,style:{boxShadow:"0 0 20px rgba(229, 169, 60, 0.4)",display:"flex",alignItems:"center",gap:"6px"},children:[y.jsx(Dx,{size:15,fill:"currentColor"}),y.jsx("span",{children:"WATCH 4K VIDEO TOUR"})]}),y.jsxs("button",{className:"btn btn-outline-gold",onClick:()=>{o("all"),n("Showing all completed architectural masterworks!")},children:[y.jsx("span",{children:"VIEW ALL PROJECTS"}),y.jsx(tl,{size:15})]})]})]}),y.jsx("div",{className:"projects-filter-bar",children:[{key:"all",label:"All Projects"},{key:"commercial",label:"Commercial"},{key:"villa",label:"Luxury Villa"},{key:"residential",label:"Residential"},{key:"interior",label:"Office Interior"}].map(f=>y.jsx("button",{className:`filter-btn ${s===f.key?"active":""}`,onClick:()=>h(f.key),children:f.label},f.key))}),y.jsx("div",{className:"projects-grid",children:i.map(f=>y.jsxs("div",{className:"project-card",onClick:()=>t(f),style:{cursor:"pointer"},children:[y.jsxs("div",{className:"project-img-box",children:[y.jsx("img",{src:f.image,alt:f.title,loading:"lazy"}),y.jsx("span",{className:"project-badge",children:f.badge})]}),y.jsxs("div",{className:"project-info-bar",children:[y.jsxs("div",{className:"project-info-left",children:[y.jsx("div",{className:"project-icon-box",children:y.jsx(Ex,{size:20})}),y.jsxs("div",{className:"project-meta",children:[y.jsx("h4",{className:"project-title",children:f.title}),y.jsx("span",{className:"project-subtitle",children:f.subtitle})]})]}),y.jsx("button",{className:"project-arrow-btn","aria-label":"View Project Details",children:y.jsx(tl,{size:18})})]})]},f.id))})]})})}function aw({onOpenQuote:t}){const[e,n]=Se.useState("residential"),[i,r]=Se.useState(3500),[s,o]=Se.useState(1.25),[a,l]=Se.useState({smartBms:!0,solarArray:!0,infinityPool:!1,acousticGlass:!1}),c={smartBms:25e3,solarArray:2e4,infinityPool:35e3,acousticGlass:18e3},[d,h]=Se.useState({totalBudget:962500,materialsCost:433125,laborCost:336875,designCost:115500,permitCost:77e3,estimatedMonths:15}),f=Se.useCallback(()=>{let _=220;e==="commercial"?_=280:e==="industrial"?_=160:e==="renovation"&&(_=140);let x=0;Object.keys(a).forEach(C=>{a[C]&&(x+=c[C])});const p=i*_*s+x,u=Math.round(p*.45),g=Math.round(p*.35),v=Math.round(p*.12),S=Math.round(p*.08),b=u+g+v+S;let A=Math.round(Math.sqrt(i)/4);return A<4&&(A=4),A>28&&(A=28),{totalBudget:b,materialsCost:u,laborCost:g,designCost:v,permitCost:S,estimatedMonths:A}},[e,i,s,a]);Se.useEffect(()=>{(async()=>{const x=Object.keys(a).filter(p=>a[p]).map(p=>c[p]);try{const p=await fetch("/api/calculator/estimate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({projectType:e,area:i,finishMultiplier:s,addonCosts:x})});if(p.ok){const u=await p.json();h({totalBudget:u.totalBudget,materialsCost:u.materialsCost,laborCost:u.laborCost,designCost:u.designCost,permitCost:u.permitCost,estimatedMonths:u.estimatedMonths});return}}catch{}h(f())})()},[e,i,s,a,f]);const m=_=>{l(x=>({...x,[_]:!x[_]}))};return y.jsx("section",{className:"calculator-section perspective-container",id:"calculator",children:y.jsxs("div",{className:"container",children:[y.jsxs("div",{style:{textAlign:"center",marginBottom:"50px"},children:[y.jsx("div",{className:"section-tag",style:{justifyContent:"center"},children:"INSTANT ESTIMATION"}),y.jsx("h2",{className:"section-title",children:"PROJECT COST CALCULATOR"}),y.jsx("p",{className:"section-desc",style:{margin:"12px auto 0 auto"},children:"Estimate budget, material allocation, and completion timeline for your architectural or commercial project in real time with our Spring Boot estimation engine."})]}),y.jsxs("div",{className:"calc-wrapper tilt-3d",children:[y.jsxs("div",{className:"calc-controls",children:[y.jsxs("div",{className:"calc-field-group",children:[y.jsx("label",{className:"calc-label",children:"1. Select Project Type"}),y.jsx("div",{className:"calc-type-grid",children:[{key:"residential",label:"🏢 Residential / Villa"},{key:"commercial",label:"🏬 Commercial Office"},{key:"industrial",label:"🏗️ Industrial Logistics"},{key:"renovation",label:"🔨 Structural Renovation"}].map(_=>y.jsx("button",{type:"button",className:`calc-type-btn ${e===_.key?"active":""}`,onClick:()=>n(_.key),children:_.label},_.key))})]}),y.jsxs("div",{className:"calc-field-group",children:[y.jsxs("div",{className:"slider-val-display",children:[y.jsx("label",{className:"calc-label",style:{margin:0},children:"2. Built-up Area (Sq Ft)"}),y.jsxs("span",{className:"slider-val-number",children:[i.toLocaleString()," sq ft"]})]}),y.jsx("div",{className:"calc-slider-box",children:y.jsx("input",{type:"range",className:"calc-range-input",min:"800",max:"30000",step:"100",value:i,onChange:_=>r(parseInt(_.target.value,10))})})]}),y.jsxs("div",{className:"calc-field-group",children:[y.jsx("label",{className:"calc-label",children:"3. Finish & Engineering Tier"}),y.jsx("div",{className:"calc-type-grid",children:[{multiplier:1,label:"Standard Grade"},{multiplier:1.25,label:"Premium Luxe"},{multiplier:1.55,label:"Ultra-Luxury Custom"}].map(_=>y.jsx("button",{type:"button",className:`calc-finish-btn ${s===_.multiplier?"active":""}`,onClick:()=>o(_.multiplier),children:_.label},_.multiplier))})]}),y.jsxs("div",{className:"calc-field-group",children:[y.jsx("label",{className:"calc-label",children:"4. Architectural Add-ons"}),y.jsxs("div",{className:"calc-addons-grid",children:[y.jsxs("label",{className:"calc-checkbox-label",children:[y.jsx("input",{type:"checkbox",className:"calc-addon-check",checked:a.smartBms,onChange:()=>m("smartBms")}),y.jsx("span",{children:"Smart BMS & Automation (+$25k)"})]}),y.jsxs("label",{className:"calc-checkbox-label",children:[y.jsx("input",{type:"checkbox",className:"calc-addon-check",checked:a.solarArray,onChange:()=>m("solarArray")}),y.jsx("span",{children:"Solar Array & Battery (+$20k)"})]}),y.jsxs("label",{className:"calc-checkbox-label",children:[y.jsx("input",{type:"checkbox",className:"calc-addon-check",checked:a.infinityPool,onChange:()=>m("infinityPool")}),y.jsx("span",{children:"Infinity Pool / Landscape (+$35k)"})]}),y.jsxs("label",{className:"calc-checkbox-label",children:[y.jsx("input",{type:"checkbox",className:"calc-addon-check",checked:a.acousticGlass,onChange:()=>m("acousticGlass")}),y.jsx("span",{children:"Acoustic Glass Walls (+$18k)"})]})]})]})]}),y.jsxs("div",{className:"calc-result-card",children:[y.jsxs("div",{children:[y.jsxs("div",{className:"calc-result-header",children:[y.jsx("span",{className:"estimate-title",children:"Estimated Budget Range"}),y.jsxs("div",{className:"estimate-amount",children:["$",d.totalBudget.toLocaleString()]}),y.jsxs("div",{className:"estimate-timeline",children:[y.jsx(wx,{size:16}),y.jsxs("span",{children:["Estimated Timeline: ~",d.estimatedMonths," Months"]})]})]}),y.jsxs("ul",{className:"breakdown-list",style:{marginTop:"24px"},children:[y.jsxs("li",{className:"breakdown-item",children:[y.jsx("span",{children:"Materials & Concrete:"}),y.jsxs("span",{children:["$",d.materialsCost.toLocaleString()]})]}),y.jsxs("li",{className:"breakdown-item",children:[y.jsx("span",{children:"Engineering & Labor:"}),y.jsxs("span",{children:["$",d.laborCost.toLocaleString()]})]}),y.jsxs("li",{className:"breakdown-item",children:[y.jsx("span",{children:"Architectural Design & BIM:"}),y.jsxs("span",{children:["$",d.designCost.toLocaleString()]})]}),y.jsxs("li",{className:"breakdown-item",children:[y.jsx("span",{children:"Permits & Compliance:"}),y.jsxs("span",{children:["$",d.permitCost.toLocaleString()]})]})]})]}),y.jsxs("button",{className:"btn btn-primary",onClick:t,style:{width:"100%"},children:["GET OFFICIAL PROPOSAL",y.jsx(tl,{size:16})]})]})]})]})})}function lw({onOpenQuote:t,onOpenVideo:e}){return y.jsx("section",{className:"about-section",id:"about",children:y.jsx("div",{className:"container",children:y.jsxs("div",{className:"about-grid",children:[y.jsxs("div",{className:"about-img-composite",children:[y.jsx("img",{src:"./assets/images/commercial.jpg",alt:"BuildHub Engineering Headquarters",className:"about-main-img"}),y.jsxs("div",{className:"about-floating-badge",children:[y.jsx("div",{className:"about-badge-icon",children:"🏆"}),y.jsxs("div",{className:"about-badge-text",children:[y.jsx("h4",{children:"10-Year Warranty"}),y.jsx("p",{children:"Certified Structural Guarantee"})]})]})]}),y.jsxs("div",{className:"about-text-col",children:[y.jsx("div",{className:"section-tag",children:"WHY CHOOSE BUILDHUB"}),y.jsx("h2",{className:"section-title",children:"ENGINEERING EXCELLENCE & UNCOMPROMISED QUALITY"}),y.jsx("p",{className:"section-desc",children:"With over 15 years of industry leadership, BuildHub Constructions integrates cutting-edge BIM modeling, sustainable green technology, and precision execution to create architectural masterworks."}),y.jsxs("div",{className:"about-features-list",children:[y.jsxs("div",{className:"about-feature-item",children:[y.jsx("span",{className:"check-icon",children:"✓"}),y.jsx("span",{children:"100% On-Time Project Delivery"})]}),y.jsxs("div",{className:"about-feature-item",children:[y.jsx("span",{className:"check-icon",children:"✓"}),y.jsx("span",{children:"LEED Gold & Net-Zero Certified"})]}),y.jsxs("div",{className:"about-feature-item",children:[y.jsx("span",{className:"check-icon",children:"✓"}),y.jsx("span",{children:"Zero-Incident Safety Record (OSHA)"})]}),y.jsxs("div",{className:"about-feature-item",children:[y.jsx("span",{className:"check-icon",children:"✓"}),y.jsx("span",{children:"3D Digital Twin Client Portal"})]})]}),y.jsxs("div",{style:{marginTop:"36px",display:"flex",gap:"16px",flexWrap:"wrap"},children:[y.jsx("button",{className:"btn btn-primary",onClick:t,children:"CONSULT WITH AN ARCHITECT"}),y.jsx("button",{className:"btn btn-secondary",onClick:e,children:"WATCH 4K TOUR ▶"})]})]})]})})})}function cw({addToast:t}){const[e,n]=Se.useState(""),[i,r]=Se.useState(!1),s=async o=>{if(o.preventDefault(),!!e){r(!0);try{(await fetch("/api/newsletter/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})})).ok?(t("Subscribed to BuildHub quarterly 3D architecture updates!"),n("")):(t("Subscribed to quarterly 3D architecture updates!"),n(""))}catch{t("Subscribed to quarterly 3D architecture updates!"),n("")}finally{r(!1)}}};return y.jsx("footer",{className:"site-footer",children:y.jsxs("div",{className:"container",children:[y.jsxs("div",{className:"footer-top-grid",children:[y.jsxs("div",{className:"footer-col",children:[y.jsxs("div",{className:"brand-logo",style:{marginBottom:"18px"},children:[y.jsx("div",{className:"logo-icon",children:"🏗️"}),y.jsxs("div",{className:"logo-text",children:[y.jsx("span",{className:"logo-main",style:{fontSize:"1.15rem"},children:"BUILDHUB"}),y.jsx("span",{className:"logo-sub",children:"CONSTRUCTIONS"})]})]}),y.jsx("p",{children:"Pioneering luxury modern architecture, commercial complexes, and 3D digital twin engineering with 15+ years of uncompromised excellence."})]}),y.jsxs("div",{className:"footer-col",children:[y.jsx("h4",{children:"Capabilities"}),y.jsxs("ul",{className:"footer-links",children:[y.jsx("li",{children:y.jsx("a",{href:"#bim3d",children:"3D BIM Digital Twin"})}),y.jsx("li",{children:y.jsx("a",{href:"#services",children:"General Contracting"})}),y.jsx("li",{children:y.jsx("a",{href:"#services",children:"Design & Build"})}),y.jsx("li",{children:y.jsx("a",{href:"#projects",children:"Luxury Villas"})})]})]}),y.jsxs("div",{className:"footer-col",children:[y.jsx("h4",{children:"Navigation"}),y.jsxs("ul",{className:"footer-links",children:[y.jsx("li",{children:y.jsx("a",{href:"#home",children:"Home Overview"})}),y.jsx("li",{children:y.jsx("a",{href:"#bim3d",children:"3D BIM Model"})}),y.jsx("li",{children:y.jsx("a",{href:"#projects",children:"Recent Portfolio"})}),y.jsx("li",{children:y.jsx("a",{href:"#calculator",children:"Cost Estimator"})})]})]}),y.jsxs("div",{className:"footer-col",children:[y.jsx("h4",{children:"Newsletter"}),y.jsx("p",{children:"Subscribe for quarterly architectural insights and 3D BIM case studies."}),y.jsxs("form",{className:"newsletter-form",onSubmit:s,children:[y.jsx("input",{type:"email",className:"newsletter-input",placeholder:"Your work email...",value:e,onChange:o=>n(o.target.value),required:!0}),y.jsx("button",{type:"submit",className:"btn btn-primary",style:{padding:"12px 18px"},disabled:i,children:i?"...":"JOIN"})]})]})]}),y.jsxs("div",{className:"footer-bottom-row",children:[y.jsx("span",{children:"© 2026 BuildHub Constructions Inc. All Rights Reserved."}),y.jsx("span",{children:"Full Stack: React 18 + Java 21 Spring Boot 3 & Three.js 3D BIM."})]})]})})}function uw({isOpen:t,onClose:e,onOpenQuote:n,addToast:i}){const[r,s]=Se.useState("video"),[o,a]=Se.useState(!0),l=Se.useRef(null),c=Se.useRef(null),d=Se.useRef(null),h=Se.useRef(null),f=Se.useRef(null),m=[{id:"video",label:"🏡 01: Luxury Villa Tour",title:"Malibu Luxury Villa Architectural Drone Tour",desc:"Ultra-HD 4K aerial survey showcasing cantilevered structural engineering and panoramic coastal architecture.",videoSrc:"./assets/videos/luxury-villa.mp4"},{id:"commercial",label:"🏢 02: Commercial Complex",title:"Metropolitan Commercial High-Rise Complex",desc:"Ultra-HD 4K architectural drone survey of a 12-story commercial complex with double-glazed acoustic glass curtain walls.",imageSrc:"./assets/images/commercial.jpg"},{id:"construction",label:"🏗️ 03: Construction Site Drone",title:"Tower Crane & High-Rise Steel Superstructure Survey",desc:"Live high-altitude drone inspection of active tower cranes, jump-form concrete core climbing, and structural steel erection.",imageSrc:"./assets/images/interior.jpg"}],_=m.find(u=>u.id===r)||m[0],x=()=>{if(o)try{d.current||(d.current=new(window.AudioContext||window.webkitAudioContext)),d.current.state==="suspended"&&d.current.resume();const u=[[261.63,329.63,392,493.88,587.33],[220,261.63,329.63,392,440],[174.61,261.63,329.63,369.99,523.25],[164.81,246.94,329.63,392,493.88]],g=u[Math.floor(Math.random()*u.length)],v=d.current.currentTime;g.forEach((S,b)=>{const A=d.current.createOscillator(),C=d.current.createGain(),N=d.current.createBiquadFilter();A.type="sine",A.frequency.setValueAtTime(S,v),N.type="lowpass",N.frequency.setValueAtTime(800,v);const M=b*.18;C.gain.setValueAtTime(0,v+M),C.gain.linearRampToValueAtTime(.035,v+M+1.2),C.gain.exponentialRampToValueAtTime(1e-4,v+M+4.5),A.connect(N),N.connect(C),C.connect(d.current.destination),A.start(v+M),A.stop(v+M+4.8)})}catch(u){console.warn(u)}};if(Se.useEffect(()=>{if(!t){h.current&&clearInterval(h.current),f.current&&cancelAnimationFrame(f.current),c.current&&c.current.pause();return}if(o&&(x(),h.current=setInterval(x,4e3)),r==="video")c.current&&(c.current.currentTime=0,c.current.muted=!0,c.current.play().catch(()=>{}));else{const u=l.current;if(u){const g=u.getContext("2d");u.width=960,u.height=480;const v=new Image;v.src=_.imageSrc;let S=0;const b=()=>{S+=.008,g.clearRect(0,0,960,480);const A=1.08+Math.sin(S*.8)*.06,C=Math.sin(S*.5)*40,N=Math.cos(S*.4)*25,M=960*A,T=480*A,G=(960-M)/2+C,j=(480-T)/2+N;v.complete&&v.naturalWidth>0?g.drawImage(v,G,j,M,T):(g.fillStyle="#060911",g.fillRect(0,0,960,480));const Q=g.createRadialGradient(480,240,150,480,240,520);Q.addColorStop(0,"rgba(0,0,0,0)"),Q.addColorStop(1,"rgba(4,7,13,0.65)"),g.fillStyle=Q,g.fillRect(0,0,960,480),g.strokeStyle=r==="commercial"?"rgba(0, 240, 255, 0.4)":"rgba(229, 169, 60, 0.5)",g.lineWidth=1.5;const P=480+Math.sin(S*1.2)*15,F=240+Math.cos(S*1)*10;g.beginPath(),g.arc(P,F,32,0,Math.PI*2),g.moveTo(P-45,F),g.lineTo(P-15,F),g.moveTo(P+15,F),g.lineTo(P+45,F),g.moveTo(P,F-45),g.lineTo(P,F-15),g.moveTo(P,F+15),g.lineTo(P,F+45),g.stroke(),g.fillStyle=r==="commercial"?"#00f0ff":"#e5a93c",g.font="11px Space Grotesk, monospace";const q=Math.round(145+Math.sin(S)*15),$=(24.5+Math.cos(S)*2.1).toFixed(1);g.fillText(`ALT: ${q}m`,40,240),g.fillText(`SPD: ${$} kts`,40,260),g.fillText("PITCH: -4.2°",840,240),g.fillText("YAW: 128° SE",840,260),f.current=requestAnimationFrame(b)};b()}}return()=>{h.current&&clearInterval(h.current),f.current&&cancelAnimationFrame(f.current)}},[t,r,o]),!t)return null;const p=()=>{a(u=>{const g=!u;return i(g?"Instrumental Ambient Music Enabled":"Music Muted"),g})};return y.jsx("div",{className:"modal-overlay active",style:{zIndex:99999},onClick:u=>{u.target===u.currentTarget&&e()},children:y.jsxs("div",{className:"modal-dialog video-player-modal-dialog",style:{maxWidth:"960px",padding:0,overflow:"hidden",background:"#080d18",border:"1.5px solid var(--gold-primary)",boxShadow:"0 30px 80px rgba(0,0,0,0.95)"},children:[y.jsx("button",{className:"modal-close-btn",onClick:e,style:{zIndex:30,top:"14px",right:"14px",background:"rgba(0,0,0,0.7)",border:"1px solid var(--gold-primary)"},children:"✕"}),y.jsxs("div",{style:{display:"flex",gap:"8px",padding:"14px 20px",background:"#060911",borderBottom:"1px solid var(--border-gold)",overflowX:"auto",alignItems:"center"},children:[y.jsx("span",{style:{fontFamily:"Syne, sans-serif",fontSize:"0.78rem",fontWeight:700,color:"var(--gold-primary)",textTransform:"uppercase",marginRight:"6px",whiteSpace:"nowrap"},children:"SELECT VIDEO:"}),m.map(u=>y.jsx("button",{className:`filter-btn video-stream-tab ${r===u.id?"active":""}`,onClick:()=>{s(u.id),i(`Loaded Channel: ${u.title}`,"info")},children:u.label},u.id))]}),y.jsxs("div",{style:{position:"relative",width:"100%",height:"480px",background:"#000",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"},children:[r==="video"?y.jsx("video",{ref:c,src:"./assets/videos/luxury-villa.mp4",controls:!0,autoPlay:!0,playsInline:!0,loop:!0,muted:!0,style:{width:"100%",height:"100%",objectFit:"cover",background:"#000"}}):y.jsx("canvas",{ref:l,style:{width:"100%",height:"100%",objectFit:"cover"}}),y.jsxs("div",{className:"video-hud-telemetry",style:{pointerEvents:"none",zIndex:10},children:[y.jsxs("span",{children:["📹 4K HDR • 60 FPS • ",_.title.toUpperCase()]}),y.jsx("span",{children:"ALT: 145M | WIND: 8 KTS | GPS: 34.0259° N"})]})]}),y.jsxs("div",{style:{padding:"16px 24px",background:"#060911",display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid rgba(255,255,255,0.08)",flexWrap:"wrap",gap:"12px"},children:[y.jsxs("div",{children:[y.jsx("h4",{style:{fontFamily:"Syne, sans-serif",color:"white",fontSize:"1.05rem",marginBottom:"2px"},children:_.title}),y.jsx("p",{style:{fontSize:"0.78rem",color:"#94a3b8"},children:_.desc})]}),y.jsxs("div",{style:{display:"flex",gap:"10px",flexShrink:0,alignItems:"center"},children:[y.jsxs("button",{className:"btn-outline-gold",onClick:p,style:{padding:"8px 16px",fontSize:"0.78rem",borderRadius:"6px",display:"flex",alignItems:"center",gap:"6px",borderColor:o?"var(--gold-primary)":"#64748b",color:o?"var(--gold-primary)":"#94a3b8"},children:[y.jsx("span",{children:o?"🎵":"🔇"}),y.jsx("span",{children:o?"INSTRUMENTAL MUSIC: ON":"MUSIC MUTED"})]}),y.jsx("button",{className:"btn btn-primary",onClick:()=>{e(),n()},children:"GET PROJECT ESTIMATE"})]})]})]})})}function dw({project:t,onClose:e,onOpenQuote:n,addToast:i}){const[r,s]=Se.useState(0);if(!t)return null;const o=t.gallery&&t.gallery.length>0?t.gallery:[t.image],a=o[r]||t.image,l=h=>{h.stopPropagation(),s((r+1)%o.length)},c=h=>{h.stopPropagation(),s((r-1+o.length)%o.length)},d=()=>{const h=t.highlights?t.highlights.join(`
- `):"",f=`BUILDHUB CONSTRUCTIONS — PROJECT SPECIFICATION
==================================================
Project: ${t.title}
Category: ${t.badge||t.category}
Location: ${t.location}
Area: ${t.area}
Duration: ${t.duration}
Architect: ${t.architect}
Client: ${t.client}

Summary:
${t.desc}

Key Highlights:
- ${h}`,m=new Blob([f],{type:"text/plain;charset=utf-8"}),_=URL.createObjectURL(m),x=document.createElement("a");x.href=_,x.download=`${t.title.toLowerCase().replace(/\s+/g,"-")}-specs.txt`,x.click(),URL.revokeObjectURL(_),i(`Downloaded specification sheet for "${t.title}"!`)};return y.jsx("div",{className:"modal-overlay active",onClick:h=>{h.target===h.currentTarget&&e()},children:y.jsxs("div",{className:"modal-dialog",children:[y.jsx("button",{className:"modal-close-btn",onClick:e,children:"✕"}),y.jsxs("div",{style:{position:"relative",height:"320px",borderRadius:"var(--radius-md)",overflow:"hidden",marginBottom:"24px",border:"1px solid var(--border-gold)"},children:[y.jsx("img",{src:a,alt:t.title,style:{width:"100%",height:"100%",objectFit:"cover"}}),o.length>1&&y.jsxs(y.Fragment,{children:[y.jsx("button",{onClick:c,style:{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)",width:"38px",height:"38px",borderRadius:"50%",background:"rgba(6,9,17,0.8)",border:"1px solid var(--border-gold)",color:"white",fontSize:"1.2rem",cursor:"pointer"},children:"‹"}),y.jsx("button",{onClick:l,style:{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",width:"38px",height:"38px",borderRadius:"50%",background:"rgba(6,9,17,0.8)",border:"1px solid var(--border-gold)",color:"white",fontSize:"1.2rem",cursor:"pointer"},children:"›"})]})]}),y.jsx("h3",{className:"modal-title",children:t.title}),y.jsxs("p",{className:"modal-subtitle",children:[t.subtitle," • ",t.location]}),y.jsx("p",{style:{color:"#cbd5e1",fontSize:"0.95rem",lineHeight:1.65,marginBottom:"24px"},children:t.desc}),y.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"14px",background:"rgba(255,255,255,0.03)",padding:"18px",borderRadius:"var(--radius-md)",marginBottom:"24px",border:"1px solid var(--border-light)"},children:[y.jsxs("div",{children:[y.jsx("span",{style:{fontSize:"0.72rem",color:"#94a3b8",textTransform:"uppercase"},children:"Total Area"}),y.jsx("h5",{style:{fontFamily:"Syne, sans-serif",color:"var(--gold-primary)",fontSize:"1rem"},children:t.area})]}),y.jsxs("div",{children:[y.jsx("span",{style:{fontSize:"0.72rem",color:"#94a3b8",textTransform:"uppercase"},children:"Timeline"}),y.jsx("h5",{style:{fontFamily:"Syne, sans-serif",color:"var(--gold-primary)",fontSize:"1rem"},children:t.duration})]}),y.jsxs("div",{children:[y.jsx("span",{style:{fontSize:"0.72rem",color:"#94a3b8",textTransform:"uppercase"},children:"Architect"}),y.jsx("h5",{style:{fontFamily:"Syne, sans-serif",color:"white",fontSize:"0.9rem"},children:t.architect})]}),y.jsxs("div",{children:[y.jsx("span",{style:{fontSize:"0.72rem",color:"#94a3b8",textTransform:"uppercase"},children:"Client"}),y.jsx("h5",{style:{fontFamily:"Syne, sans-serif",color:"white",fontSize:"0.9rem"},children:t.client})]})]}),y.jsxs("div",{style:{display:"flex",gap:"14px",flexWrap:"wrap"},children:[y.jsx("button",{className:"btn btn-primary",onClick:()=>{e(),n()},children:"REQUEST SIMILAR PROJECT"}),y.jsx("button",{className:"btn btn-secondary",onClick:d,children:"DOWNLOAD SPEC SHEET (TXT)"})]})]})})}function fw({isOpen:t,onClose:e,addToast:n}){const[i,r]=Se.useState({fullName:"",email:"",phone:"",projectCategory:"Luxury Residential / Villa",notes:""}),[s,o]=Se.useState(!1);if(!t)return null;const a=async l=>{l.preventDefault(),o(!0);try{const c=await fetch("/api/quotes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(c.ok){const d=await c.json();n(`Proposal request #${d.quoteId||"BH-01"} received! Our architectural engineer will contact you.`)}else n(`Proposal request received for ${i.fullName}! Our team will contact you shortly.`)}catch{n(`Proposal request received for ${i.fullName}! Our team will contact you shortly.`)}finally{o(!1),e(),r({fullName:"",email:"",phone:"",projectCategory:"Luxury Residential / Villa",notes:""})}};return y.jsx("div",{className:"modal-overlay active",onClick:l=>{l.target===l.currentTarget&&e()},children:y.jsxs("div",{className:"modal-dialog",children:[y.jsx("button",{className:"modal-close-btn",onClick:e,children:"✕"}),y.jsx("div",{className:"section-tag",children:"COMPLIMENTARY FEASIBILITY"}),y.jsx("h3",{className:"modal-title",children:"REQUEST CONSTRUCTION QUOTE"}),y.jsx("p",{className:"modal-subtitle",children:"Fill in your specifications to receive a detailed cost analysis & schedule breakdown from our Spring Boot engineering engine."}),y.jsxs("form",{onSubmit:a,children:[y.jsxs("div",{className:"form-grid-2",children:[y.jsxs("div",{className:"form-group",children:[y.jsx("label",{className:"form-label",children:"Full Name *"}),y.jsx("input",{type:"text",className:"form-input",placeholder:"e.g. Robert Anderson",value:i.fullName,onChange:l=>r({...i,fullName:l.target.value}),required:!0})]}),y.jsxs("div",{className:"form-group",children:[y.jsx("label",{className:"form-label",children:"Email Address *"}),y.jsx("input",{type:"email",className:"form-input",placeholder:"robert@example.com",value:i.email,onChange:l=>r({...i,email:l.target.value}),required:!0})]})]}),y.jsxs("div",{className:"form-grid-2",children:[y.jsxs("div",{className:"form-group",children:[y.jsx("label",{className:"form-label",children:"Phone Number *"}),y.jsx("input",{type:"tel",className:"form-input",placeholder:"+1 (555) 234-5678",value:i.phone,onChange:l=>r({...i,phone:l.target.value}),required:!0})]}),y.jsxs("div",{className:"form-group",children:[y.jsx("label",{className:"form-label",children:"Project Category"}),y.jsxs("select",{className:"form-select",value:i.projectCategory,onChange:l=>r({...i,projectCategory:l.target.value}),children:[y.jsx("option",{children:"Luxury Residential / Villa"}),y.jsx("option",{children:"Commercial Tower / Office"}),y.jsx("option",{children:"Industrial Logistics Facility"}),y.jsx("option",{children:"Turnkey Renovation & Remodel"})]})]})]}),y.jsxs("div",{className:"form-group",children:[y.jsx("label",{className:"form-label",children:"Project Notes & 3D BIM Requests"}),y.jsx("textarea",{className:"form-textarea",rows:"3",placeholder:"Tell us about the property location, timeline, 3D modeling preferences...",value:i.notes,onChange:l=>r({...i,notes:l.target.value})})]}),y.jsx("button",{type:"submit",className:"btn btn-primary",style:{width:"100%"},disabled:s,children:s?"TRANSMITTING REQUEST...":"SUBMIT QUOTE ESTIMATE REQUEST"})]})]})})}function hw({toasts:t}){return!t||t.length===0?null:y.jsx("div",{className:"toast-container",id:"toastContainer",style:{zIndex:999999},children:t.map(e=>y.jsxs("div",{className:"toast",style:{borderColor:e.type==="error"?"#ef4444":"var(--gold-primary)",boxShadow:"0 10px 30px rgba(0,0,0,0.7)",display:"flex",alignItems:"center",gap:"12px"},children:[y.jsx("div",{className:"toast-icon",style:{color:e.type==="error"?"#ef4444":"var(--gold-primary)",fontWeight:"bold",fontSize:"1.2rem"},children:e.type==="error"?"✕":"★"}),y.jsx("div",{style:{color:"var(--text-light)",fontSize:"0.9rem",lineHeight:1.4},children:e.message})]},e.id))})}function pw(){const[t,e]=Se.useState("dark"),[n,i]=Se.useState(!1),[r,s]=Se.useState(!1),[o,a]=Se.useState(null),[l,c]=Se.useState([]),[d,h]=Se.useState(!1);Se.useEffect(()=>{localStorage.getItem("buildhub_theme")==="light"?(e("light"),document.body.classList.add("light-mode")):(e("dark"),document.body.classList.remove("light-mode"));const x=()=>{h(window.scrollY>400)};return window.addEventListener("scroll",x),()=>window.removeEventListener("scroll",x)},[]);const f=()=>{const _=t==="light"?"dark":"light";e(_),localStorage.setItem("buildhub_theme",_),_==="light"?(document.body.classList.add("light-mode"),m("Switched to Light Mode")):(document.body.classList.remove("light-mode"),m("Switched to Dark Mode"))},m=(_,x="info")=>{const p=Date.now()+Math.random();c(u=>[...u,{id:p,message:_,type:x}]),setTimeout(()=>{c(u=>u.filter(g=>g.id!==p))},4e3)};return y.jsxs("div",{className:"buildhub-app",children:[y.jsx(hw,{toasts:l}),y.jsx(zx,{onOpenQuote:()=>s(!0),theme:t,onToggleTheme:f}),y.jsx(Hx,{onOpenVideo:()=>i(!0)}),y.jsx(rw,{addToast:m}),y.jsx(sw,{}),y.jsx(ow,{onOpenProjectModal:_=>a(_),onOpenVideo:()=>i(!0),addToast:m}),y.jsx(aw,{onOpenQuote:()=>s(!0)}),y.jsx(lw,{onOpenQuote:()=>s(!0),onOpenVideo:()=>i(!0)}),y.jsx(cw,{addToast:m}),y.jsx("div",{className:"floating-actions",children:y.jsx("button",{className:"floating-quote-btn",onClick:()=>s(!0),children:y.jsx("span",{children:"⚡ FREE ESTIMATE"})})}),d&&y.jsx("button",{className:"back-to-top-btn visible",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),"aria-label":"Back to top",children:"↑"}),y.jsx(uw,{isOpen:n,onClose:()=>i(!1),onOpenQuote:()=>s(!0),addToast:m}),y.jsx(dw,{project:o,onClose:()=>a(null),onOpenQuote:()=>s(!0),addToast:m}),y.jsx(fw,{isOpen:r,onClose:()=>s(!1),addToast:m})]})}zc.createRoot(document.getElementById("root")).render(y.jsx(t_.StrictMode,{children:y.jsx(pw,{})}));
