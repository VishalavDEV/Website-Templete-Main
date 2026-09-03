(function(){const j=document.createElement("link").relList;if(j&&j.supports&&j.supports("modulepreload"))return;for(const E of document.querySelectorAll('link[rel="modulepreload"]'))v(E);new MutationObserver(E=>{for(const y of E)if(y.type==="childList")for(const b of y.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&v(b)}).observe(document,{childList:!0,subtree:!0});function d(E){const y={};return E.integrity&&(y.integrity=E.integrity),E.referrerPolicy&&(y.referrerPolicy=E.referrerPolicy),E.crossOrigin==="use-credentials"?y.credentials="include":E.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function v(E){if(E.ep)return;E.ep=!0;const y=d(E);fetch(E.href,y)}})();function Dc(g){return g&&g.__esModule&&Object.prototype.hasOwnProperty.call(g,"default")?g.default:g}var Ci={exports:{}},xn={},Ti={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zc;function Ad(){if(zc)return K;zc=1;var g=Symbol.for("react.element"),j=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),b=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),U=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),B=Symbol.iterator;function $(f){return f===null||typeof f!="object"?null:(f=B&&f[B]||f["@@iterator"],typeof f=="function"?f:null)}var J={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,T={};function C(f,w,q){this.props=f,this.context=w,this.refs=T,this.updater=q||J}C.prototype.isReactComponent={},C.prototype.setState=function(f,w){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,w,"setState")},C.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function ye(){}ye.prototype=C.prototype;function me(f,w,q){this.props=f,this.context=w,this.refs=T,this.updater=q||J}var Ee=me.prototype=new ye;Ee.constructor=me,_(Ee,C.prototype),Ee.isPureReactComponent=!0;var Q=Array.isArray,ce=Object.prototype.hasOwnProperty,he={current:null},Oe={key:!0,ref:!0,__self:!0,__source:!0};function Ke(f,w,q){var X,ee={},te=null,le=null;if(w!=null)for(X in w.ref!==void 0&&(le=w.ref),w.key!==void 0&&(te=""+w.key),w)ce.call(w,X)&&!Oe.hasOwnProperty(X)&&(ee[X]=w[X]);var ne=arguments.length-2;if(ne===1)ee.children=q;else if(1<ne){for(var ue=Array(ne),Ve=0;Ve<ne;Ve++)ue[Ve]=arguments[Ve+2];ee.children=ue}if(f&&f.defaultProps)for(X in ne=f.defaultProps,ne)ee[X]===void 0&&(ee[X]=ne[X]);return{$$typeof:g,type:f,key:te,ref:le,props:ee,_owner:he.current}}function Tt(f,w){return{$$typeof:g,type:f.type,key:w,ref:f.ref,props:f.props,_owner:f._owner}}function xt(f){return typeof f=="object"&&f!==null&&f.$$typeof===g}function Qt(f){var w={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function(q){return w[q]})}var dt=/\/+/g;function We(f,w){return typeof f=="object"&&f!==null&&f.key!=null?Qt(""+f.key):w.toString(36)}function nt(f,w,q,X,ee){var te=typeof f;(te==="undefined"||te==="boolean")&&(f=null);var le=!1;if(f===null)le=!0;else switch(te){case"string":case"number":le=!0;break;case"object":switch(f.$$typeof){case g:case j:le=!0}}if(le)return le=f,ee=ee(le),f=X===""?"."+We(le,0):X,Q(ee)?(q="",f!=null&&(q=f.replace(dt,"$&/")+"/"),nt(ee,w,q,"",function(Ve){return Ve})):ee!=null&&(xt(ee)&&(ee=Tt(ee,q+(!ee.key||le&&le.key===ee.key?"":(""+ee.key).replace(dt,"$&/")+"/")+f)),w.push(ee)),1;if(le=0,X=X===""?".":X+":",Q(f))for(var ne=0;ne<f.length;ne++){te=f[ne];var ue=X+We(te,ne);le+=nt(te,w,q,ue,ee)}else if(ue=$(f),typeof ue=="function")for(f=ue.call(f),ne=0;!(te=f.next()).done;)te=te.value,ue=X+We(te,ne++),le+=nt(te,w,q,ue,ee);else if(te==="object")throw w=String(f),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.");return le}function ft(f,w,q){if(f==null)return f;var X=[],ee=0;return nt(f,X,"","",function(te){return w.call(q,te,ee++)}),X}function Ae(f){if(f._status===-1){var w=f._result;w=w(),w.then(function(q){(f._status===0||f._status===-1)&&(f._status=1,f._result=q)},function(q){(f._status===0||f._status===-1)&&(f._status=2,f._result=q)}),f._status===-1&&(f._status=0,f._result=w)}if(f._status===1)return f._result.default;throw f._result}var ge={current:null},z={transition:null},Y={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:z,ReactCurrentOwner:he};function M(){throw Error("act(...) is not supported in production builds of React.")}return K.Children={map:ft,forEach:function(f,w,q){ft(f,function(){w.apply(this,arguments)},q)},count:function(f){var w=0;return ft(f,function(){w++}),w},toArray:function(f){return ft(f,function(w){return w})||[]},only:function(f){if(!xt(f))throw Error("React.Children.only expected to receive a single React element child.");return f}},K.Component=C,K.Fragment=d,K.Profiler=E,K.PureComponent=me,K.StrictMode=v,K.Suspense=I,K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,K.act=M,K.cloneElement=function(f,w,q){if(f==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+f+".");var X=_({},f.props),ee=f.key,te=f.ref,le=f._owner;if(w!=null){if(w.ref!==void 0&&(te=w.ref,le=he.current),w.key!==void 0&&(ee=""+w.key),f.type&&f.type.defaultProps)var ne=f.type.defaultProps;for(ue in w)ce.call(w,ue)&&!Oe.hasOwnProperty(ue)&&(X[ue]=w[ue]===void 0&&ne!==void 0?ne[ue]:w[ue])}var ue=arguments.length-2;if(ue===1)X.children=q;else if(1<ue){ne=Array(ue);for(var Ve=0;Ve<ue;Ve++)ne[Ve]=arguments[Ve+2];X.children=ne}return{$$typeof:g,type:f.type,key:ee,ref:te,props:X,_owner:le}},K.createContext=function(f){return f={$$typeof:b,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},f.Provider={$$typeof:y,_context:f},f.Consumer=f},K.createElement=Ke,K.createFactory=function(f){var w=Ke.bind(null,f);return w.type=f,w},K.createRef=function(){return{current:null}},K.forwardRef=function(f){return{$$typeof:R,render:f}},K.isValidElement=xt,K.lazy=function(f){return{$$typeof:A,_payload:{_status:-1,_result:f},_init:Ae}},K.memo=function(f,w){return{$$typeof:U,type:f,compare:w===void 0?null:w}},K.startTransition=function(f){var w=z.transition;z.transition={};try{f()}finally{z.transition=w}},K.unstable_act=M,K.useCallback=function(f,w){return ge.current.useCallback(f,w)},K.useContext=function(f){return ge.current.useContext(f)},K.useDebugValue=function(){},K.useDeferredValue=function(f){return ge.current.useDeferredValue(f)},K.useEffect=function(f,w){return ge.current.useEffect(f,w)},K.useId=function(){return ge.current.useId()},K.useImperativeHandle=function(f,w,q){return ge.current.useImperativeHandle(f,w,q)},K.useInsertionEffect=function(f,w){return ge.current.useInsertionEffect(f,w)},K.useLayoutEffect=function(f,w){return ge.current.useLayoutEffect(f,w)},K.useMemo=function(f,w){return ge.current.useMemo(f,w)},K.useReducer=function(f,w,q){return ge.current.useReducer(f,w,q)},K.useRef=function(f){return ge.current.useRef(f)},K.useState=function(f){return ge.current.useState(f)},K.useSyncExternalStore=function(f,w,q){return ge.current.useSyncExternalStore(f,w,q)},K.useTransition=function(){return ge.current.useTransition()},K.version="18.3.1",K}var Rc;function _i(){return Rc||(Rc=1,Ti.exports=Ad()),Ti.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ic;function Dd(){if(Ic)return xn;Ic=1;var g=_i(),j=Symbol.for("react.element"),d=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,E=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function b(R,I,U){var A,B={},$=null,J=null;U!==void 0&&($=""+U),I.key!==void 0&&($=""+I.key),I.ref!==void 0&&(J=I.ref);for(A in I)v.call(I,A)&&!y.hasOwnProperty(A)&&(B[A]=I[A]);if(R&&R.defaultProps)for(A in I=R.defaultProps,I)B[A]===void 0&&(B[A]=I[A]);return{$$typeof:j,type:R,key:$,ref:J,props:B,_owner:E.current}}return xn.Fragment=d,xn.jsx=b,xn.jsxs=b,xn}var Pc;function Fd(){return Pc||(Pc=1,Ci.exports=Dd()),Ci.exports}var i=Fd(),H=_i();const Ud=Dc(H);var Io={},zi={exports:{}},$e={},Ri={exports:{}},Ii={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lc;function Hd(){return Lc||(Lc=1,(function(g){function j(z,Y){var M=z.length;z.push(Y);e:for(;0<M;){var f=M-1>>>1,w=z[f];if(0<E(w,Y))z[f]=Y,z[M]=w,M=f;else break e}}function d(z){return z.length===0?null:z[0]}function v(z){if(z.length===0)return null;var Y=z[0],M=z.pop();if(M!==Y){z[0]=M;e:for(var f=0,w=z.length,q=w>>>1;f<q;){var X=2*(f+1)-1,ee=z[X],te=X+1,le=z[te];if(0>E(ee,M))te<w&&0>E(le,ee)?(z[f]=le,z[te]=M,f=te):(z[f]=ee,z[X]=M,f=X);else if(te<w&&0>E(le,M))z[f]=le,z[te]=M,f=te;else break e}}return Y}function E(z,Y){var M=z.sortIndex-Y.sortIndex;return M!==0?M:z.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var y=performance;g.unstable_now=function(){return y.now()}}else{var b=Date,R=b.now();g.unstable_now=function(){return b.now()-R}}var I=[],U=[],A=1,B=null,$=3,J=!1,_=!1,T=!1,C=typeof setTimeout=="function"?setTimeout:null,ye=typeof clearTimeout=="function"?clearTimeout:null,me=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ee(z){for(var Y=d(U);Y!==null;){if(Y.callback===null)v(U);else if(Y.startTime<=z)v(U),Y.sortIndex=Y.expirationTime,j(I,Y);else break;Y=d(U)}}function Q(z){if(T=!1,Ee(z),!_)if(d(I)!==null)_=!0,Ae(ce);else{var Y=d(U);Y!==null&&ge(Q,Y.startTime-z)}}function ce(z,Y){_=!1,T&&(T=!1,ye(Ke),Ke=-1),J=!0;var M=$;try{for(Ee(Y),B=d(I);B!==null&&(!(B.expirationTime>Y)||z&&!Qt());){var f=B.callback;if(typeof f=="function"){B.callback=null,$=B.priorityLevel;var w=f(B.expirationTime<=Y);Y=g.unstable_now(),typeof w=="function"?B.callback=w:B===d(I)&&v(I),Ee(Y)}else v(I);B=d(I)}if(B!==null)var q=!0;else{var X=d(U);X!==null&&ge(Q,X.startTime-Y),q=!1}return q}finally{B=null,$=M,J=!1}}var he=!1,Oe=null,Ke=-1,Tt=5,xt=-1;function Qt(){return!(g.unstable_now()-xt<Tt)}function dt(){if(Oe!==null){var z=g.unstable_now();xt=z;var Y=!0;try{Y=Oe(!0,z)}finally{Y?We():(he=!1,Oe=null)}}else he=!1}var We;if(typeof me=="function")We=function(){me(dt)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,ft=nt.port2;nt.port1.onmessage=dt,We=function(){ft.postMessage(null)}}else We=function(){C(dt,0)};function Ae(z){Oe=z,he||(he=!0,We())}function ge(z,Y){Ke=C(function(){z(g.unstable_now())},Y)}g.unstable_IdlePriority=5,g.unstable_ImmediatePriority=1,g.unstable_LowPriority=4,g.unstable_NormalPriority=3,g.unstable_Profiling=null,g.unstable_UserBlockingPriority=2,g.unstable_cancelCallback=function(z){z.callback=null},g.unstable_continueExecution=function(){_||J||(_=!0,Ae(ce))},g.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Tt=0<z?Math.floor(1e3/z):5},g.unstable_getCurrentPriorityLevel=function(){return $},g.unstable_getFirstCallbackNode=function(){return d(I)},g.unstable_next=function(z){switch($){case 1:case 2:case 3:var Y=3;break;default:Y=$}var M=$;$=Y;try{return z()}finally{$=M}},g.unstable_pauseExecution=function(){},g.unstable_requestPaint=function(){},g.unstable_runWithPriority=function(z,Y){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var M=$;$=z;try{return Y()}finally{$=M}},g.unstable_scheduleCallback=function(z,Y,M){var f=g.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?f+M:f):M=f,z){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=M+w,z={id:A++,callback:Y,priorityLevel:z,startTime:M,expirationTime:w,sortIndex:-1},M>f?(z.sortIndex=M,j(U,z),d(I)===null&&z===d(U)&&(T?(ye(Ke),Ke=-1):T=!0,ge(Q,M-f))):(z.sortIndex=w,j(I,z),_||J||(_=!0,Ae(ce))),z},g.unstable_shouldYield=Qt,g.unstable_wrapCallback=function(z){var Y=$;return function(){var M=$;$=Y;try{return z.apply(this,arguments)}finally{$=M}}}})(Ii)),Ii}var _c;function Bd(){return _c||(_c=1,Ri.exports=Hd()),Ri.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mc;function $d(){if(Mc)return $e;Mc=1;var g=_i(),j=Bd();function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v=new Set,E={};function y(e,t){b(e,t),b(e+"Capture",t)}function b(e,t){for(E[e]=t,e=0;e<t.length;e++)v.add(t[e])}var R=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),I=Object.prototype.hasOwnProperty,U=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,A={},B={};function $(e){return I.call(B,e)?!0:I.call(A,e)?!1:U.test(e)?B[e]=!0:(A[e]=!0,!1)}function J(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _(e,t,r,n){if(t===null||typeof t>"u"||J(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function T(e,t,r,n,o,l,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=a}var C={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){C[e]=new T(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];C[t]=new T(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){C[e]=new T(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){C[e]=new T(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){C[e]=new T(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){C[e]=new T(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){C[e]=new T(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){C[e]=new T(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){C[e]=new T(e,5,!1,e.toLowerCase(),null,!1,!1)});var ye=/[\-:]([a-z])/g;function me(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ye,me);C[t]=new T(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ye,me);C[t]=new T(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ye,me);C[t]=new T(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){C[e]=new T(e,1,!1,e.toLowerCase(),null,!1,!1)}),C.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){C[e]=new T(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ee(e,t,r,n){var o=C.hasOwnProperty(t)?C[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_(t,r,o,n)&&(r=null),n||o===null?$(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,n=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Q=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ce=Symbol.for("react.element"),he=Symbol.for("react.portal"),Oe=Symbol.for("react.fragment"),Ke=Symbol.for("react.strict_mode"),Tt=Symbol.for("react.profiler"),xt=Symbol.for("react.provider"),Qt=Symbol.for("react.context"),dt=Symbol.for("react.forward_ref"),We=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),ft=Symbol.for("react.memo"),Ae=Symbol.for("react.lazy"),ge=Symbol.for("react.offscreen"),z=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var M=Object.assign,f;function w(e){if(f===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);f=t&&t[1]||""}return`
`+f+e}var q=!1;function X(e,t){if(!e||q)return"";q=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var n=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){n=h}e.call(t.prototype)}else{try{throw Error()}catch(h){n=h}e()}}catch(h){if(h&&n&&typeof h.stack=="string"){for(var o=h.stack.split(`
`),l=n.stack.split(`
`),a=o.length-1,s=l.length-1;1<=a&&0<=s&&o[a]!==l[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==l[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==l[s]){var c=`
`+o[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=s);break}}}finally{q=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?w(e):""}function ee(e){switch(e.tag){case 5:return w(e.type);case 16:return w("Lazy");case 13:return w("Suspense");case 19:return w("SuspenseList");case 0:case 2:case 15:return e=X(e.type,!1),e;case 11:return e=X(e.type.render,!1),e;case 1:return e=X(e.type,!0),e;default:return""}}function te(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Oe:return"Fragment";case he:return"Portal";case Tt:return"Profiler";case Ke:return"StrictMode";case We:return"Suspense";case nt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qt:return(e.displayName||"Context")+".Consumer";case xt:return(e._context.displayName||"Context")+".Provider";case dt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ft:return t=e.displayName||null,t!==null?t:te(e.type)||"Memo";case Ae:t=e._payload,e=e._init;try{return te(e(t))}catch{}}return null}function le(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(t);case 8:return t===Ke?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ne(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ue(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ve(e){var t=ue(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,l=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){n=""+a,l.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wn(e){e._valueTracker||(e._valueTracker=Ve(e))}function Mi(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=ue(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Sn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function _o(e,t){var r=t.checked;return M({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Oi(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=ne(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ai(e,t){t=t.checked,t!=null&&Ee(e,"checked",t,!1)}function Mo(e,t){Ai(e,t);var r=ne(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Oo(e,t.type,r):t.hasOwnProperty("defaultValue")&&Oo(e,t.type,ne(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Di(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Oo(e,t,r){(t!=="number"||Sn(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Lr=Array.isArray;function sr(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+ne(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ao(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(d(91));return M({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fi(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(d(92));if(Lr(r)){if(1<r.length)throw Error(d(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:ne(r)}}function Ui(e,t){var r=ne(t.value),n=ne(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Hi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bi(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Do(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bi(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var kn,$i=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(kn=kn||document.createElement("div"),kn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=kn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function _r(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hc=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(e){Hc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mr[t]=Mr[e]})});function Wi(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Mr.hasOwnProperty(e)&&Mr[e]?(""+t).trim():t+"px"}function Vi(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,o=Wi(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}var Bc=M({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fo(e,t){if(t){if(Bc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(d(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(d(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(d(61))}if(t.style!=null&&typeof t.style!="object")throw Error(d(62))}}function Uo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ho=null;function Bo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $o=null,cr=null,ur=null;function Yi(e){if(e=nn(e)){if(typeof $o!="function")throw Error(d(280));var t=e.stateNode;t&&(t=Vn(t),$o(e.stateNode,e.type,t))}}function Gi(e){cr?ur?ur.push(e):ur=[e]:cr=e}function Qi(){if(cr){var e=cr,t=ur;if(ur=cr=null,Yi(e),t)for(e=0;e<t.length;e++)Yi(t[e])}}function qi(e,t){return e(t)}function Ki(){}var Wo=!1;function Xi(e,t,r){if(Wo)return e(t,r);Wo=!0;try{return qi(e,t,r)}finally{Wo=!1,(cr!==null||ur!==null)&&(Ki(),Qi())}}function Or(e,t){var r=e.stateNode;if(r===null)return null;var n=Vn(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(d(231,t,typeof r));return r}var Vo=!1;if(R)try{var Ar={};Object.defineProperty(Ar,"passive",{get:function(){Vo=!0}}),window.addEventListener("test",Ar,Ar),window.removeEventListener("test",Ar,Ar)}catch{Vo=!1}function $c(e,t,r,n,o,l,a,s,c){var h=Array.prototype.slice.call(arguments,3);try{t.apply(r,h)}catch(S){this.onError(S)}}var Dr=!1,jn=null,En=!1,Yo=null,Wc={onError:function(e){Dr=!0,jn=e}};function Vc(e,t,r,n,o,l,a,s,c){Dr=!1,jn=null,$c.apply(Wc,arguments)}function Yc(e,t,r,n,o,l,a,s,c){if(Vc.apply(this,arguments),Dr){if(Dr){var h=jn;Dr=!1,jn=null}else throw Error(d(198));En||(En=!0,Yo=h)}}function qt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Ji(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zi(e){if(qt(e)!==e)throw Error(d(188))}function Gc(e){var t=e.alternate;if(!t){if(t=qt(e),t===null)throw Error(d(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(o===null)break;var l=o.alternate;if(l===null){if(n=o.return,n!==null){r=n;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===r)return Zi(o),e;if(l===n)return Zi(o),t;l=l.sibling}throw Error(d(188))}if(r.return!==n.return)r=o,n=l;else{for(var a=!1,s=o.child;s;){if(s===r){a=!0,r=o,n=l;break}if(s===n){a=!0,n=o,r=l;break}s=s.sibling}if(!a){for(s=l.child;s;){if(s===r){a=!0,r=l,n=o;break}if(s===n){a=!0,n=l,r=o;break}s=s.sibling}if(!a)throw Error(d(189))}}if(r.alternate!==n)throw Error(d(190))}if(r.tag!==3)throw Error(d(188));return r.stateNode.current===r?e:t}function ea(e){return e=Gc(e),e!==null?ta(e):null}function ta(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ta(e);if(t!==null)return t;e=e.sibling}return null}var ra=j.unstable_scheduleCallback,na=j.unstable_cancelCallback,Qc=j.unstable_shouldYield,qc=j.unstable_requestPaint,xe=j.unstable_now,Kc=j.unstable_getCurrentPriorityLevel,Go=j.unstable_ImmediatePriority,oa=j.unstable_UserBlockingPriority,Nn=j.unstable_NormalPriority,Xc=j.unstable_LowPriority,la=j.unstable_IdlePriority,bn=null,pt=null;function Jc(e){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(bn,e,void 0,(e.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:tu,Zc=Math.log,eu=Math.LN2;function tu(e){return e>>>=0,e===0?32:31-(Zc(e)/eu|0)|0}var Cn=64,Tn=4194304;function Fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zn(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,o=e.suspendedLanes,l=e.pingedLanes,a=r&268435455;if(a!==0){var s=a&~o;s!==0?n=Fr(s):(l&=a,l!==0&&(n=Fr(l)))}else a=r&~o,a!==0?n=Fr(a):l!==0&&(n=Fr(l));if(n===0)return 0;if(t!==0&&t!==n&&(t&o)===0&&(o=n&-n,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if((n&4)!==0&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-ot(t),o=1<<r,n|=e[r],t&=~o;return n}function ru(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nu(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var a=31-ot(l),s=1<<a,c=o[a];c===-1?((s&r)===0||(s&n)!==0)&&(o[a]=ru(s,t)):c<=t&&(e.expiredLanes|=s),l&=~s}}function Qo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ia(){var e=Cn;return Cn<<=1,(Cn&4194240)===0&&(Cn=64),e}function qo(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Ur(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ot(t),e[t]=r}function ou(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-ot(r),l=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~l}}function Ko(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-ot(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var oe=0;function aa(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var sa,Xo,ca,ua,da,Jo=!1,Rn=[],zt=null,Rt=null,It=null,Hr=new Map,Br=new Map,Pt=[],lu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fa(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":Hr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Br.delete(t.pointerId)}}function $r(e,t,r,n,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:l,targetContainers:[o]},t!==null&&(t=nn(t),t!==null&&Xo(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function iu(e,t,r,n,o){switch(t){case"focusin":return zt=$r(zt,e,t,r,n,o),!0;case"dragenter":return Rt=$r(Rt,e,t,r,n,o),!0;case"mouseover":return It=$r(It,e,t,r,n,o),!0;case"pointerover":var l=o.pointerId;return Hr.set(l,$r(Hr.get(l)||null,e,t,r,n,o)),!0;case"gotpointercapture":return l=o.pointerId,Br.set(l,$r(Br.get(l)||null,e,t,r,n,o)),!0}return!1}function pa(e){var t=Kt(e.target);if(t!==null){var r=qt(t);if(r!==null){if(t=r.tag,t===13){if(t=Ji(r),t!==null){e.blockedOn=t,da(e.priority,function(){ca(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function In(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=el(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Ho=n,r.target.dispatchEvent(n),Ho=null}else return t=nn(r),t!==null&&Xo(t),e.blockedOn=r,!1;t.shift()}return!0}function ma(e,t,r){In(e)&&r.delete(t)}function au(){Jo=!1,zt!==null&&In(zt)&&(zt=null),Rt!==null&&In(Rt)&&(Rt=null),It!==null&&In(It)&&(It=null),Hr.forEach(ma),Br.forEach(ma)}function Wr(e,t){e.blockedOn===t&&(e.blockedOn=null,Jo||(Jo=!0,j.unstable_scheduleCallback(j.unstable_NormalPriority,au)))}function Vr(e){function t(o){return Wr(o,e)}if(0<Rn.length){Wr(Rn[0],e);for(var r=1;r<Rn.length;r++){var n=Rn[r];n.blockedOn===e&&(n.blockedOn=null)}}for(zt!==null&&Wr(zt,e),Rt!==null&&Wr(Rt,e),It!==null&&Wr(It,e),Hr.forEach(t),Br.forEach(t),r=0;r<Pt.length;r++)n=Pt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Pt.length&&(r=Pt[0],r.blockedOn===null);)pa(r),r.blockedOn===null&&Pt.shift()}var dr=Q.ReactCurrentBatchConfig,Pn=!0;function su(e,t,r,n){var o=oe,l=dr.transition;dr.transition=null;try{oe=1,Zo(e,t,r,n)}finally{oe=o,dr.transition=l}}function cu(e,t,r,n){var o=oe,l=dr.transition;dr.transition=null;try{oe=4,Zo(e,t,r,n)}finally{oe=o,dr.transition=l}}function Zo(e,t,r,n){if(Pn){var o=el(e,t,r,n);if(o===null)vl(e,t,n,Ln,r),fa(e,n);else if(iu(o,e,t,r,n))n.stopPropagation();else if(fa(e,n),t&4&&-1<lu.indexOf(e)){for(;o!==null;){var l=nn(o);if(l!==null&&sa(l),l=el(e,t,r,n),l===null&&vl(e,t,n,Ln,r),l===o)break;o=l}o!==null&&n.stopPropagation()}else vl(e,t,n,null,r)}}var Ln=null;function el(e,t,r,n){if(Ln=null,e=Bo(n),e=Kt(e),e!==null)if(t=qt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Ji(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ln=e,null}function ha(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kc()){case Go:return 1;case oa:return 4;case Nn:case Xc:return 16;case la:return 536870912;default:return 16}default:return 16}}var Lt=null,tl=null,_n=null;function ga(){if(_n)return _n;var e,t=tl,r=t.length,n,o="value"in Lt?Lt.value:Lt.textContent,l=o.length;for(e=0;e<r&&t[e]===o[e];e++);var a=r-e;for(n=1;n<=a&&t[r-n]===o[l-n];n++);return _n=o.slice(e,1<n?1-n:void 0)}function Mn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function On(){return!0}function va(){return!1}function Ye(e){function t(r,n,o,l,a){this._reactName=r,this._targetInst=o,this.type=n,this.nativeEvent=l,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?On:va,this.isPropagationStopped=va,this}return M(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=On)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=On)},persist:function(){},isPersistent:On}),t}var fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rl=Ye(fr),Yr=M({},fr,{view:0,detail:0}),uu=Ye(Yr),nl,ol,Gr,An=M({},Yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:il,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gr&&(Gr&&e.type==="mousemove"?(nl=e.screenX-Gr.screenX,ol=e.screenY-Gr.screenY):ol=nl=0,Gr=e),nl)},movementY:function(e){return"movementY"in e?e.movementY:ol}}),ya=Ye(An),du=M({},An,{dataTransfer:0}),fu=Ye(du),pu=M({},Yr,{relatedTarget:0}),ll=Ye(pu),mu=M({},fr,{animationName:0,elapsedTime:0,pseudoElement:0}),hu=Ye(mu),gu=M({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vu=Ye(gu),yu=M({},fr,{data:0}),xa=Ye(yu),xu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Su={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ku(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Su[e])?!!t[e]:!1}function il(){return ku}var ju=M({},Yr,{key:function(e){if(e.key){var t=xu[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:il,charCode:function(e){return e.type==="keypress"?Mn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Eu=Ye(ju),Nu=M({},An,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wa=Ye(Nu),bu=M({},Yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:il}),Cu=Ye(bu),Tu=M({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),zu=Ye(Tu),Ru=M({},An,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Iu=Ye(Ru),Pu=[9,13,27,32],al=R&&"CompositionEvent"in window,Qr=null;R&&"documentMode"in document&&(Qr=document.documentMode);var Lu=R&&"TextEvent"in window&&!Qr,Sa=R&&(!al||Qr&&8<Qr&&11>=Qr),ka=" ",ja=!1;function Ea(e,t){switch(e){case"keyup":return Pu.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Na(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pr=!1;function _u(e,t){switch(e){case"compositionend":return Na(t);case"keypress":return t.which!==32?null:(ja=!0,ka);case"textInput":return e=t.data,e===ka&&ja?null:e;default:return null}}function Mu(e,t){if(pr)return e==="compositionend"||!al&&Ea(e,t)?(e=ga(),_n=tl=Lt=null,pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sa&&t.locale!=="ko"?null:t.data;default:return null}}var Ou={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ba(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ou[e.type]:t==="textarea"}function Ca(e,t,r,n){Gi(n),t=Bn(t,"onChange"),0<t.length&&(r=new rl("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var qr=null,Kr=null;function Au(e){Va(e,0)}function Dn(e){var t=yr(e);if(Mi(t))return e}function Du(e,t){if(e==="change")return t}var Ta=!1;if(R){var sl;if(R){var cl="oninput"in document;if(!cl){var za=document.createElement("div");za.setAttribute("oninput","return;"),cl=typeof za.oninput=="function"}sl=cl}else sl=!1;Ta=sl&&(!document.documentMode||9<document.documentMode)}function Ra(){qr&&(qr.detachEvent("onpropertychange",Ia),Kr=qr=null)}function Ia(e){if(e.propertyName==="value"&&Dn(Kr)){var t=[];Ca(t,Kr,e,Bo(e)),Xi(Au,t)}}function Fu(e,t,r){e==="focusin"?(Ra(),qr=t,Kr=r,qr.attachEvent("onpropertychange",Ia)):e==="focusout"&&Ra()}function Uu(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Dn(Kr)}function Hu(e,t){if(e==="click")return Dn(t)}function Bu(e,t){if(e==="input"||e==="change")return Dn(t)}function $u(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var lt=typeof Object.is=="function"?Object.is:$u;function Xr(e,t){if(lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!I.call(t,o)||!lt(e[o],t[o]))return!1}return!0}function Pa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function La(e,t){var r=Pa(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Pa(r)}}function _a(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_a(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ma(){for(var e=window,t=Sn();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Sn(e.document)}return t}function ul(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wu(e){var t=Ma(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&_a(r.ownerDocument.documentElement,r)){if(n!==null&&ul(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,l=Math.min(n.start,o);n=n.end===void 0?l:Math.min(n.end,o),!e.extend&&l>n&&(o=n,n=l,l=o),o=La(r,l);var a=La(r,n);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vu=R&&"documentMode"in document&&11>=document.documentMode,mr=null,dl=null,Jr=null,fl=!1;function Oa(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;fl||mr==null||mr!==Sn(n)||(n=mr,"selectionStart"in n&&ul(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Jr&&Xr(Jr,n)||(Jr=n,n=Bn(dl,"onSelect"),0<n.length&&(t=new rl("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=mr)))}function Fn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var hr={animationend:Fn("Animation","AnimationEnd"),animationiteration:Fn("Animation","AnimationIteration"),animationstart:Fn("Animation","AnimationStart"),transitionend:Fn("Transition","TransitionEnd")},pl={},Aa={};R&&(Aa=document.createElement("div").style,"AnimationEvent"in window||(delete hr.animationend.animation,delete hr.animationiteration.animation,delete hr.animationstart.animation),"TransitionEvent"in window||delete hr.transitionend.transition);function Un(e){if(pl[e])return pl[e];if(!hr[e])return e;var t=hr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Aa)return pl[e]=t[r];return e}var Da=Un("animationend"),Fa=Un("animationiteration"),Ua=Un("animationstart"),Ha=Un("transitionend"),Ba=new Map,$a="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _t(e,t){Ba.set(e,t),y(t,[e])}for(var ml=0;ml<$a.length;ml++){var hl=$a[ml],Yu=hl.toLowerCase(),Gu=hl[0].toUpperCase()+hl.slice(1);_t(Yu,"on"+Gu)}_t(Da,"onAnimationEnd"),_t(Fa,"onAnimationIteration"),_t(Ua,"onAnimationStart"),_t("dblclick","onDoubleClick"),_t("focusin","onFocus"),_t("focusout","onBlur"),_t(Ha,"onTransitionEnd"),b("onMouseEnter",["mouseout","mouseover"]),b("onMouseLeave",["mouseout","mouseover"]),b("onPointerEnter",["pointerout","pointerover"]),b("onPointerLeave",["pointerout","pointerover"]),y("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),y("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),y("onBeforeInput",["compositionend","keypress","textInput","paste"]),y("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),y("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),y("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qu=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zr));function Wa(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Yc(n,t,void 0,e),e.currentTarget=null}function Va(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var l=void 0;if(t)for(var a=n.length-1;0<=a;a--){var s=n[a],c=s.instance,h=s.currentTarget;if(s=s.listener,c!==l&&o.isPropagationStopped())break e;Wa(o,s,h),l=c}else for(a=0;a<n.length;a++){if(s=n[a],c=s.instance,h=s.currentTarget,s=s.listener,c!==l&&o.isPropagationStopped())break e;Wa(o,s,h),l=c}}}if(En)throw e=Yo,En=!1,Yo=null,e}function ae(e,t){var r=t[jl];r===void 0&&(r=t[jl]=new Set);var n=e+"__bubble";r.has(n)||(Ya(t,e,2,!1),r.add(n))}function gl(e,t,r){var n=0;t&&(n|=4),Ya(r,e,n,t)}var Hn="_reactListening"+Math.random().toString(36).slice(2);function en(e){if(!e[Hn]){e[Hn]=!0,v.forEach(function(r){r!=="selectionchange"&&(Qu.has(r)||gl(r,!1,e),gl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hn]||(t[Hn]=!0,gl("selectionchange",!1,t))}}function Ya(e,t,r,n){switch(ha(t)){case 1:var o=su;break;case 4:o=cu;break;default:o=Zo}r=o.bind(null,t,r,e),o=void 0,!Vo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function vl(e,t,r,n,o){var l=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var s=n.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=n.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;a=a.return}for(;s!==null;){if(a=Kt(s),a===null)return;if(c=a.tag,c===5||c===6){n=l=a;continue e}s=s.parentNode}}n=n.return}Xi(function(){var h=l,S=Bo(r),k=[];e:{var x=Ba.get(e);if(x!==void 0){var P=rl,O=e;switch(e){case"keypress":if(Mn(r)===0)break e;case"keydown":case"keyup":P=Eu;break;case"focusin":O="focus",P=ll;break;case"focusout":O="blur",P=ll;break;case"beforeblur":case"afterblur":P=ll;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=ya;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=fu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=Cu;break;case Da:case Fa:case Ua:P=hu;break;case Ha:P=zu;break;case"scroll":P=uu;break;case"wheel":P=Iu;break;case"copy":case"cut":case"paste":P=vu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=wa}var D=(t&4)!==0,we=!D&&e==="scroll",p=D?x!==null?x+"Capture":null:x;D=[];for(var u=h,m;u!==null;){m=u;var N=m.stateNode;if(m.tag===5&&N!==null&&(m=N,p!==null&&(N=Or(u,p),N!=null&&D.push(tn(u,N,m)))),we)break;u=u.return}0<D.length&&(x=new P(x,O,null,r,S),k.push({event:x,listeners:D}))}}if((t&7)===0){e:{if(x=e==="mouseover"||e==="pointerover",P=e==="mouseout"||e==="pointerout",x&&r!==Ho&&(O=r.relatedTarget||r.fromElement)&&(Kt(O)||O[wt]))break e;if((P||x)&&(x=S.window===S?S:(x=S.ownerDocument)?x.defaultView||x.parentWindow:window,P?(O=r.relatedTarget||r.toElement,P=h,O=O?Kt(O):null,O!==null&&(we=qt(O),O!==we||O.tag!==5&&O.tag!==6)&&(O=null)):(P=null,O=h),P!==O)){if(D=ya,N="onMouseLeave",p="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(D=wa,N="onPointerLeave",p="onPointerEnter",u="pointer"),we=P==null?x:yr(P),m=O==null?x:yr(O),x=new D(N,u+"leave",P,r,S),x.target=we,x.relatedTarget=m,N=null,Kt(S)===h&&(D=new D(p,u+"enter",O,r,S),D.target=m,D.relatedTarget=we,N=D),we=N,P&&O)t:{for(D=P,p=O,u=0,m=D;m;m=gr(m))u++;for(m=0,N=p;N;N=gr(N))m++;for(;0<u-m;)D=gr(D),u--;for(;0<m-u;)p=gr(p),m--;for(;u--;){if(D===p||p!==null&&D===p.alternate)break t;D=gr(D),p=gr(p)}D=null}else D=null;P!==null&&Ga(k,x,P,D,!1),O!==null&&we!==null&&Ga(k,we,O,D,!0)}}e:{if(x=h?yr(h):window,P=x.nodeName&&x.nodeName.toLowerCase(),P==="select"||P==="input"&&x.type==="file")var F=Du;else if(ba(x))if(Ta)F=Bu;else{F=Uu;var W=Fu}else(P=x.nodeName)&&P.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(F=Hu);if(F&&(F=F(e,h))){Ca(k,F,r,S);break e}W&&W(e,x,h),e==="focusout"&&(W=x._wrapperState)&&W.controlled&&x.type==="number"&&Oo(x,"number",x.value)}switch(W=h?yr(h):window,e){case"focusin":(ba(W)||W.contentEditable==="true")&&(mr=W,dl=h,Jr=null);break;case"focusout":Jr=dl=mr=null;break;case"mousedown":fl=!0;break;case"contextmenu":case"mouseup":case"dragend":fl=!1,Oa(k,r,S);break;case"selectionchange":if(Vu)break;case"keydown":case"keyup":Oa(k,r,S)}var V;if(al)e:{switch(e){case"compositionstart":var G="onCompositionStart";break e;case"compositionend":G="onCompositionEnd";break e;case"compositionupdate":G="onCompositionUpdate";break e}G=void 0}else pr?Ea(e,r)&&(G="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(G="onCompositionStart");G&&(Sa&&r.locale!=="ko"&&(pr||G!=="onCompositionStart"?G==="onCompositionEnd"&&pr&&(V=ga()):(Lt=S,tl="value"in Lt?Lt.value:Lt.textContent,pr=!0)),W=Bn(h,G),0<W.length&&(G=new xa(G,e,null,r,S),k.push({event:G,listeners:W}),V?G.data=V:(V=Na(r),V!==null&&(G.data=V)))),(V=Lu?_u(e,r):Mu(e,r))&&(h=Bn(h,"onBeforeInput"),0<h.length&&(S=new xa("onBeforeInput","beforeinput",null,r,S),k.push({event:S,listeners:h}),S.data=V))}Va(k,t)})}function tn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Bn(e,t){for(var r=t+"Capture",n=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Or(e,r),l!=null&&n.unshift(tn(e,l,o)),l=Or(e,t),l!=null&&n.push(tn(e,l,o))),e=e.return}return n}function gr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ga(e,t,r,n,o){for(var l=t._reactName,a=[];r!==null&&r!==n;){var s=r,c=s.alternate,h=s.stateNode;if(c!==null&&c===n)break;s.tag===5&&h!==null&&(s=h,o?(c=Or(r,l),c!=null&&a.unshift(tn(r,c,s))):o||(c=Or(r,l),c!=null&&a.push(tn(r,c,s)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}var qu=/\r\n?/g,Ku=/\u0000|\uFFFD/g;function Qa(e){return(typeof e=="string"?e:""+e).replace(qu,`
`).replace(Ku,"")}function $n(e,t,r){if(t=Qa(t),Qa(e)!==t&&r)throw Error(d(425))}function Wn(){}var yl=null,xl=null;function wl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sl=typeof setTimeout=="function"?setTimeout:void 0,Xu=typeof clearTimeout=="function"?clearTimeout:void 0,qa=typeof Promise=="function"?Promise:void 0,Ju=typeof queueMicrotask=="function"?queueMicrotask:typeof qa<"u"?function(e){return qa.resolve(null).then(e).catch(Zu)}:Sl;function Zu(e){setTimeout(function(){throw e})}function kl(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(n===0){e.removeChild(o),Vr(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=o}while(r);Vr(t)}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ka(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var vr=Math.random().toString(36).slice(2),mt="__reactFiber$"+vr,rn="__reactProps$"+vr,wt="__reactContainer$"+vr,jl="__reactEvents$"+vr,ed="__reactListeners$"+vr,td="__reactHandles$"+vr;function Kt(e){var t=e[mt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[wt]||r[mt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Ka(e);e!==null;){if(r=e[mt])return r;e=Ka(e)}return t}e=r,r=e.parentNode}return null}function nn(e){return e=e[mt]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(d(33))}function Vn(e){return e[rn]||null}var El=[],xr=-1;function Ot(e){return{current:e}}function se(e){0>xr||(e.current=El[xr],El[xr]=null,xr--)}function ie(e,t){xr++,El[xr]=e.current,e.current=t}var At={},Re=Ot(At),De=Ot(!1),Xt=At;function wr(e,t){var r=e.type.contextTypes;if(!r)return At;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in r)o[l]=t[l];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Fe(e){return e=e.childContextTypes,e!=null}function Yn(){se(De),se(Re)}function Xa(e,t,r){if(Re.current!==At)throw Error(d(168));ie(Re,t),ie(De,r)}function Ja(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(d(108,le(e)||"Unknown",o));return M({},r,n)}function Gn(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||At,Xt=Re.current,ie(Re,e),ie(De,De.current),!0}function Za(e,t,r){var n=e.stateNode;if(!n)throw Error(d(169));r?(e=Ja(e,t,Xt),n.__reactInternalMemoizedMergedChildContext=e,se(De),se(Re),ie(Re,e)):se(De),ie(De,r)}var St=null,Qn=!1,Nl=!1;function es(e){St===null?St=[e]:St.push(e)}function rd(e){Qn=!0,es(e)}function Dt(){if(!Nl&&St!==null){Nl=!0;var e=0,t=oe;try{var r=St;for(oe=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}St=null,Qn=!1}catch(o){throw St!==null&&(St=St.slice(e+1)),ra(Go,Dt),o}finally{oe=t,Nl=!1}}return null}var Sr=[],kr=0,qn=null,Kn=0,Xe=[],Je=0,Jt=null,kt=1,jt="";function Zt(e,t){Sr[kr++]=Kn,Sr[kr++]=qn,qn=e,Kn=t}function ts(e,t,r){Xe[Je++]=kt,Xe[Je++]=jt,Xe[Je++]=Jt,Jt=e;var n=kt;e=jt;var o=32-ot(n)-1;n&=~(1<<o),r+=1;var l=32-ot(t)+o;if(30<l){var a=o-o%5;l=(n&(1<<a)-1).toString(32),n>>=a,o-=a,kt=1<<32-ot(t)+o|r<<o|n,jt=l+e}else kt=1<<l|r<<o|n,jt=e}function bl(e){e.return!==null&&(Zt(e,1),ts(e,1,0))}function Cl(e){for(;e===qn;)qn=Sr[--kr],Sr[kr]=null,Kn=Sr[--kr],Sr[kr]=null;for(;e===Jt;)Jt=Xe[--Je],Xe[Je]=null,jt=Xe[--Je],Xe[Je]=null,kt=Xe[--Je],Xe[Je]=null}var Ge=null,Qe=null,de=!1,it=null;function rs(e,t){var r=rt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function ns(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ge=e,Qe=Mt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ge=e,Qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Jt!==null?{id:kt,overflow:jt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=rt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Ge=e,Qe=null,!0):!1;default:return!1}}function Tl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zl(e){if(de){var t=Qe;if(t){var r=t;if(!ns(e,t)){if(Tl(e))throw Error(d(418));t=Mt(r.nextSibling);var n=Ge;t&&ns(e,t)?rs(n,r):(e.flags=e.flags&-4097|2,de=!1,Ge=e)}}else{if(Tl(e))throw Error(d(418));e.flags=e.flags&-4097|2,de=!1,Ge=e}}}function os(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ge=e}function Xn(e){if(e!==Ge)return!1;if(!de)return os(e),de=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wl(e.type,e.memoizedProps)),t&&(t=Qe)){if(Tl(e))throw ls(),Error(d(418));for(;t;)rs(e,t),t=Mt(t.nextSibling)}if(os(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Qe=Mt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Qe=null}}else Qe=Ge?Mt(e.stateNode.nextSibling):null;return!0}function ls(){for(var e=Qe;e;)e=Mt(e.nextSibling)}function jr(){Qe=Ge=null,de=!1}function Rl(e){it===null?it=[e]:it.push(e)}var nd=Q.ReactCurrentBatchConfig;function on(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(d(309));var n=r.stateNode}if(!n)throw Error(d(147,e));var o=n,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(a){var s=o.refs;a===null?delete s[l]:s[l]=a},t._stringRef=l,t)}if(typeof e!="string")throw Error(d(284));if(!r._owner)throw Error(d(290,e))}return e}function Jn(e,t){throw e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function is(e){var t=e._init;return t(e._payload)}function as(e){function t(p,u){if(e){var m=p.deletions;m===null?(p.deletions=[u],p.flags|=16):m.push(u)}}function r(p,u){if(!e)return null;for(;u!==null;)t(p,u),u=u.sibling;return null}function n(p,u){for(p=new Map;u!==null;)u.key!==null?p.set(u.key,u):p.set(u.index,u),u=u.sibling;return p}function o(p,u){return p=Yt(p,u),p.index=0,p.sibling=null,p}function l(p,u,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<u?(p.flags|=2,u):m):(p.flags|=2,u)):(p.flags|=1048576,u)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,u,m,N){return u===null||u.tag!==6?(u=Si(m,p.mode,N),u.return=p,u):(u=o(u,m),u.return=p,u)}function c(p,u,m,N){var F=m.type;return F===Oe?S(p,u,m.props.children,N,m.key):u!==null&&(u.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Ae&&is(F)===u.type)?(N=o(u,m.props),N.ref=on(p,u,m),N.return=p,N):(N=jo(m.type,m.key,m.props,null,p.mode,N),N.ref=on(p,u,m),N.return=p,N)}function h(p,u,m,N){return u===null||u.tag!==4||u.stateNode.containerInfo!==m.containerInfo||u.stateNode.implementation!==m.implementation?(u=ki(m,p.mode,N),u.return=p,u):(u=o(u,m.children||[]),u.return=p,u)}function S(p,u,m,N,F){return u===null||u.tag!==7?(u=ar(m,p.mode,N,F),u.return=p,u):(u=o(u,m),u.return=p,u)}function k(p,u,m){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Si(""+u,p.mode,m),u.return=p,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case ce:return m=jo(u.type,u.key,u.props,null,p.mode,m),m.ref=on(p,null,u),m.return=p,m;case he:return u=ki(u,p.mode,m),u.return=p,u;case Ae:var N=u._init;return k(p,N(u._payload),m)}if(Lr(u)||Y(u))return u=ar(u,p.mode,m,null),u.return=p,u;Jn(p,u)}return null}function x(p,u,m,N){var F=u!==null?u.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return F!==null?null:s(p,u,""+m,N);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ce:return m.key===F?c(p,u,m,N):null;case he:return m.key===F?h(p,u,m,N):null;case Ae:return F=m._init,x(p,u,F(m._payload),N)}if(Lr(m)||Y(m))return F!==null?null:S(p,u,m,N,null);Jn(p,m)}return null}function P(p,u,m,N,F){if(typeof N=="string"&&N!==""||typeof N=="number")return p=p.get(m)||null,s(u,p,""+N,F);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case ce:return p=p.get(N.key===null?m:N.key)||null,c(u,p,N,F);case he:return p=p.get(N.key===null?m:N.key)||null,h(u,p,N,F);case Ae:var W=N._init;return P(p,u,m,W(N._payload),F)}if(Lr(N)||Y(N))return p=p.get(m)||null,S(u,p,N,F,null);Jn(u,N)}return null}function O(p,u,m,N){for(var F=null,W=null,V=u,G=u=0,Ce=null;V!==null&&G<m.length;G++){V.index>G?(Ce=V,V=null):Ce=V.sibling;var re=x(p,V,m[G],N);if(re===null){V===null&&(V=Ce);break}e&&V&&re.alternate===null&&t(p,V),u=l(re,u,G),W===null?F=re:W.sibling=re,W=re,V=Ce}if(G===m.length)return r(p,V),de&&Zt(p,G),F;if(V===null){for(;G<m.length;G++)V=k(p,m[G],N),V!==null&&(u=l(V,u,G),W===null?F=V:W.sibling=V,W=V);return de&&Zt(p,G),F}for(V=n(p,V);G<m.length;G++)Ce=P(V,p,G,m[G],N),Ce!==null&&(e&&Ce.alternate!==null&&V.delete(Ce.key===null?G:Ce.key),u=l(Ce,u,G),W===null?F=Ce:W.sibling=Ce,W=Ce);return e&&V.forEach(function(Gt){return t(p,Gt)}),de&&Zt(p,G),F}function D(p,u,m,N){var F=Y(m);if(typeof F!="function")throw Error(d(150));if(m=F.call(m),m==null)throw Error(d(151));for(var W=F=null,V=u,G=u=0,Ce=null,re=m.next();V!==null&&!re.done;G++,re=m.next()){V.index>G?(Ce=V,V=null):Ce=V.sibling;var Gt=x(p,V,re.value,N);if(Gt===null){V===null&&(V=Ce);break}e&&V&&Gt.alternate===null&&t(p,V),u=l(Gt,u,G),W===null?F=Gt:W.sibling=Gt,W=Gt,V=Ce}if(re.done)return r(p,V),de&&Zt(p,G),F;if(V===null){for(;!re.done;G++,re=m.next())re=k(p,re.value,N),re!==null&&(u=l(re,u,G),W===null?F=re:W.sibling=re,W=re);return de&&Zt(p,G),F}for(V=n(p,V);!re.done;G++,re=m.next())re=P(V,p,G,re.value,N),re!==null&&(e&&re.alternate!==null&&V.delete(re.key===null?G:re.key),u=l(re,u,G),W===null?F=re:W.sibling=re,W=re);return e&&V.forEach(function(Od){return t(p,Od)}),de&&Zt(p,G),F}function we(p,u,m,N){if(typeof m=="object"&&m!==null&&m.type===Oe&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ce:e:{for(var F=m.key,W=u;W!==null;){if(W.key===F){if(F=m.type,F===Oe){if(W.tag===7){r(p,W.sibling),u=o(W,m.props.children),u.return=p,p=u;break e}}else if(W.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Ae&&is(F)===W.type){r(p,W.sibling),u=o(W,m.props),u.ref=on(p,W,m),u.return=p,p=u;break e}r(p,W);break}else t(p,W);W=W.sibling}m.type===Oe?(u=ar(m.props.children,p.mode,N,m.key),u.return=p,p=u):(N=jo(m.type,m.key,m.props,null,p.mode,N),N.ref=on(p,u,m),N.return=p,p=N)}return a(p);case he:e:{for(W=m.key;u!==null;){if(u.key===W)if(u.tag===4&&u.stateNode.containerInfo===m.containerInfo&&u.stateNode.implementation===m.implementation){r(p,u.sibling),u=o(u,m.children||[]),u.return=p,p=u;break e}else{r(p,u);break}else t(p,u);u=u.sibling}u=ki(m,p.mode,N),u.return=p,p=u}return a(p);case Ae:return W=m._init,we(p,u,W(m._payload),N)}if(Lr(m))return O(p,u,m,N);if(Y(m))return D(p,u,m,N);Jn(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,u!==null&&u.tag===6?(r(p,u.sibling),u=o(u,m),u.return=p,p=u):(r(p,u),u=Si(m,p.mode,N),u.return=p,p=u),a(p)):r(p,u)}return we}var Er=as(!0),ss=as(!1),Zn=Ot(null),eo=null,Nr=null,Il=null;function Pl(){Il=Nr=eo=null}function Ll(e){var t=Zn.current;se(Zn),e._currentValue=t}function _l(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function br(e,t){eo=e,Il=Nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ue=!0),e.firstContext=null)}function Ze(e){var t=e._currentValue;if(Il!==e)if(e={context:e,memoizedValue:t,next:null},Nr===null){if(eo===null)throw Error(d(308));Nr=e,eo.dependencies={lanes:0,firstContext:e}}else Nr=Nr.next=e;return t}var er=null;function Ml(e){er===null?er=[e]:er.push(e)}function cs(e,t,r,n){var o=t.interleaved;return o===null?(r.next=r,Ml(t)):(r.next=o.next,o.next=r),t.interleaved=r,Et(e,n)}function Et(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Ft=!1;function Ol(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function us(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ut(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Z&2)!==0){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,Et(e,r)}return o=n.interleaved,o===null?(t.next=t,Ml(n)):(t.next=o.next,o.next=t),n.interleaved=t,Et(e,r)}function to(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Ko(e,r)}}function ds(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var o=null,l=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};l===null?o=l=a:l=l.next=a,r=r.next}while(r!==null);l===null?o=l=t:l=l.next=t}else o=l=t;r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ro(e,t,r,n){var o=e.updateQueue;Ft=!1;var l=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var c=s,h=c.next;c.next=null,a===null?l=h:a.next=h,a=c;var S=e.alternate;S!==null&&(S=S.updateQueue,s=S.lastBaseUpdate,s!==a&&(s===null?S.firstBaseUpdate=h:s.next=h,S.lastBaseUpdate=c))}if(l!==null){var k=o.baseState;a=0,S=h=c=null,s=l;do{var x=s.lane,P=s.eventTime;if((n&x)===x){S!==null&&(S=S.next={eventTime:P,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var O=e,D=s;switch(x=t,P=r,D.tag){case 1:if(O=D.payload,typeof O=="function"){k=O.call(P,k,x);break e}k=O;break e;case 3:O.flags=O.flags&-65537|128;case 0:if(O=D.payload,x=typeof O=="function"?O.call(P,k,x):O,x==null)break e;k=M({},k,x);break e;case 2:Ft=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,x=o.effects,x===null?o.effects=[s]:x.push(s))}else P={eventTime:P,lane:x,tag:s.tag,payload:s.payload,callback:s.callback,next:null},S===null?(h=S=P,c=k):S=S.next=P,a|=x;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;x=s,s=x.next,x.next=null,o.lastBaseUpdate=x,o.shared.pending=null}}while(!0);if(S===null&&(c=k),o.baseState=c,o.firstBaseUpdate=h,o.lastBaseUpdate=S,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);nr|=a,e.lanes=a,e.memoizedState=k}}function fs(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=r,typeof o!="function")throw Error(d(191,o));o.call(n)}}}var ln={},ht=Ot(ln),an=Ot(ln),sn=Ot(ln);function tr(e){if(e===ln)throw Error(d(174));return e}function Al(e,t){switch(ie(sn,t),ie(an,e),ie(ht,ln),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Do(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Do(t,e)}se(ht),ie(ht,t)}function Cr(){se(ht),se(an),se(sn)}function ps(e){tr(sn.current);var t=tr(ht.current),r=Do(t,e.type);t!==r&&(ie(an,e),ie(ht,r))}function Dl(e){an.current===e&&(se(ht),se(an))}var fe=Ot(0);function no(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fl=[];function Ul(){for(var e=0;e<Fl.length;e++)Fl[e]._workInProgressVersionPrimary=null;Fl.length=0}var oo=Q.ReactCurrentDispatcher,Hl=Q.ReactCurrentBatchConfig,rr=0,pe=null,ke=null,Ne=null,lo=!1,cn=!1,un=0,od=0;function Ie(){throw Error(d(321))}function Bl(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!lt(e[r],t[r]))return!1;return!0}function $l(e,t,r,n,o,l){if(rr=l,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oo.current=e===null||e.memoizedState===null?sd:cd,e=r(n,o),cn){l=0;do{if(cn=!1,un=0,25<=l)throw Error(d(301));l+=1,Ne=ke=null,t.updateQueue=null,oo.current=ud,e=r(n,o)}while(cn)}if(oo.current=so,t=ke!==null&&ke.next!==null,rr=0,Ne=ke=pe=null,lo=!1,t)throw Error(d(300));return e}function Wl(){var e=un!==0;return un=0,e}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?pe.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function et(){if(ke===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=Ne===null?pe.memoizedState:Ne.next;if(t!==null)Ne=t,ke=e;else{if(e===null)throw Error(d(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Ne===null?pe.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function dn(e,t){return typeof t=="function"?t(e):t}function Vl(e){var t=et(),r=t.queue;if(r===null)throw Error(d(311));r.lastRenderedReducer=e;var n=ke,o=n.baseQueue,l=r.pending;if(l!==null){if(o!==null){var a=o.next;o.next=l.next,l.next=a}n.baseQueue=o=l,r.pending=null}if(o!==null){l=o.next,n=n.baseState;var s=a=null,c=null,h=l;do{var S=h.lane;if((rr&S)===S)c!==null&&(c=c.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),n=h.hasEagerState?h.eagerState:e(n,h.action);else{var k={lane:S,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};c===null?(s=c=k,a=n):c=c.next=k,pe.lanes|=S,nr|=S}h=h.next}while(h!==null&&h!==l);c===null?a=n:c.next=s,lt(n,t.memoizedState)||(Ue=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){o=e;do l=o.lane,pe.lanes|=l,nr|=l,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Yl(e){var t=et(),r=t.queue;if(r===null)throw Error(d(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,l=t.memoizedState;if(o!==null){r.pending=null;var a=o=o.next;do l=e(l,a.action),a=a.next;while(a!==o);lt(l,t.memoizedState)||(Ue=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),r.lastRenderedState=l}return[l,n]}function ms(){}function hs(e,t){var r=pe,n=et(),o=t(),l=!lt(n.memoizedState,o);if(l&&(n.memoizedState=o,Ue=!0),n=n.queue,Gl(ys.bind(null,r,n,e),[e]),n.getSnapshot!==t||l||Ne!==null&&Ne.memoizedState.tag&1){if(r.flags|=2048,fn(9,vs.bind(null,r,n,o,t),void 0,null),be===null)throw Error(d(349));(rr&30)!==0||gs(r,t,o)}return o}function gs(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function vs(e,t,r,n){t.value=r,t.getSnapshot=n,xs(t)&&ws(e)}function ys(e,t,r){return r(function(){xs(t)&&ws(e)})}function xs(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!lt(e,r)}catch{return!0}}function ws(e){var t=Et(e,1);t!==null&&ut(t,e,1,-1)}function Ss(e){var t=gt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dn,lastRenderedState:e},t.queue=e,e=e.dispatch=ad.bind(null,pe,e),[t.memoizedState,e]}function fn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function ks(){return et().memoizedState}function io(e,t,r,n){var o=gt();pe.flags|=e,o.memoizedState=fn(1|t,r,void 0,n===void 0?null:n)}function ao(e,t,r,n){var o=et();n=n===void 0?null:n;var l=void 0;if(ke!==null){var a=ke.memoizedState;if(l=a.destroy,n!==null&&Bl(n,a.deps)){o.memoizedState=fn(t,r,l,n);return}}pe.flags|=e,o.memoizedState=fn(1|t,r,l,n)}function js(e,t){return io(8390656,8,e,t)}function Gl(e,t){return ao(2048,8,e,t)}function Es(e,t){return ao(4,2,e,t)}function Ns(e,t){return ao(4,4,e,t)}function bs(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cs(e,t,r){return r=r!=null?r.concat([e]):null,ao(4,4,bs.bind(null,t,e),r)}function Ql(){}function Ts(e,t){var r=et();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Bl(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function zs(e,t){var r=et();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Bl(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Rs(e,t,r){return(rr&21)===0?(e.baseState&&(e.baseState=!1,Ue=!0),e.memoizedState=r):(lt(r,t)||(r=ia(),pe.lanes|=r,nr|=r,e.baseState=!0),t)}function ld(e,t){var r=oe;oe=r!==0&&4>r?r:4,e(!0);var n=Hl.transition;Hl.transition={};try{e(!1),t()}finally{oe=r,Hl.transition=n}}function Is(){return et().memoizedState}function id(e,t,r){var n=Wt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Ps(e))Ls(t,r);else if(r=cs(e,t,r,n),r!==null){var o=Me();ut(r,e,n,o),_s(r,t,n)}}function ad(e,t,r){var n=Wt(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ps(e))Ls(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var a=t.lastRenderedState,s=l(a,r);if(o.hasEagerState=!0,o.eagerState=s,lt(s,a)){var c=t.interleaved;c===null?(o.next=o,Ml(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}r=cs(e,t,o,n),r!==null&&(o=Me(),ut(r,e,n,o),_s(r,t,n))}}function Ps(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function Ls(e,t){cn=lo=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function _s(e,t,r){if((r&4194240)!==0){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Ko(e,r)}}var so={readContext:Ze,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},sd={readContext:Ze,useCallback:function(e,t){return gt().memoizedState=[e,t===void 0?null:t],e},useContext:Ze,useEffect:js,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,io(4194308,4,bs.bind(null,t,e),r)},useLayoutEffect:function(e,t){return io(4194308,4,e,t)},useInsertionEffect:function(e,t){return io(4,2,e,t)},useMemo:function(e,t){var r=gt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=gt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=id.bind(null,pe,e),[n.memoizedState,e]},useRef:function(e){var t=gt();return e={current:e},t.memoizedState=e},useState:Ss,useDebugValue:Ql,useDeferredValue:function(e){return gt().memoizedState=e},useTransition:function(){var e=Ss(!1),t=e[0];return e=ld.bind(null,e[1]),gt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=pe,o=gt();if(de){if(r===void 0)throw Error(d(407));r=r()}else{if(r=t(),be===null)throw Error(d(349));(rr&30)!==0||gs(n,t,r)}o.memoizedState=r;var l={value:r,getSnapshot:t};return o.queue=l,js(ys.bind(null,n,l,e),[e]),n.flags|=2048,fn(9,vs.bind(null,n,l,r,t),void 0,null),r},useId:function(){var e=gt(),t=be.identifierPrefix;if(de){var r=jt,n=kt;r=(n&~(1<<32-ot(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=un++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=od++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},cd={readContext:Ze,useCallback:Ts,useContext:Ze,useEffect:Gl,useImperativeHandle:Cs,useInsertionEffect:Es,useLayoutEffect:Ns,useMemo:zs,useReducer:Vl,useRef:ks,useState:function(){return Vl(dn)},useDebugValue:Ql,useDeferredValue:function(e){var t=et();return Rs(t,ke.memoizedState,e)},useTransition:function(){var e=Vl(dn)[0],t=et().memoizedState;return[e,t]},useMutableSource:ms,useSyncExternalStore:hs,useId:Is,unstable_isNewReconciler:!1},ud={readContext:Ze,useCallback:Ts,useContext:Ze,useEffect:Gl,useImperativeHandle:Cs,useInsertionEffect:Es,useLayoutEffect:Ns,useMemo:zs,useReducer:Yl,useRef:ks,useState:function(){return Yl(dn)},useDebugValue:Ql,useDeferredValue:function(e){var t=et();return ke===null?t.memoizedState=e:Rs(t,ke.memoizedState,e)},useTransition:function(){var e=Yl(dn)[0],t=et().memoizedState;return[e,t]},useMutableSource:ms,useSyncExternalStore:hs,useId:Is,unstable_isNewReconciler:!1};function at(e,t){if(e&&e.defaultProps){t=M({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ql(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:M({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var co={isMounted:function(e){return(e=e._reactInternals)?qt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Me(),o=Wt(e),l=Nt(n,o);l.payload=t,r!=null&&(l.callback=r),t=Ut(e,l,o),t!==null&&(ut(t,e,o,n),to(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Me(),o=Wt(e),l=Nt(n,o);l.tag=1,l.payload=t,r!=null&&(l.callback=r),t=Ut(e,l,o),t!==null&&(ut(t,e,o,n),to(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Me(),n=Wt(e),o=Nt(r,n);o.tag=2,t!=null&&(o.callback=t),t=Ut(e,o,n),t!==null&&(ut(t,e,n,r),to(t,e,n))}};function Ms(e,t,r,n,o,l,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,l,a):t.prototype&&t.prototype.isPureReactComponent?!Xr(r,n)||!Xr(o,l):!0}function Os(e,t,r){var n=!1,o=At,l=t.contextType;return typeof l=="object"&&l!==null?l=Ze(l):(o=Fe(t)?Xt:Re.current,n=t.contextTypes,l=(n=n!=null)?wr(e,o):At),t=new t(r,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=co,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function As(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&co.enqueueReplaceState(t,t.state,null)}function Kl(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs={},Ol(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Ze(l):(l=Fe(t)?Xt:Re.current,o.context=wr(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(ql(e,t,l,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&co.enqueueReplaceState(o,o.state,null),ro(e,r,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Tr(e,t){try{var r="",n=t;do r+=ee(n),n=n.return;while(n);var o=r}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Xl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Jl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var dd=typeof WeakMap=="function"?WeakMap:Map;function Ds(e,t,r){r=Nt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){vo||(vo=!0,pi=n),Jl(e,t)},r}function Fs(e,t,r){r=Nt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){Jl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(r.callback=function(){Jl(e,t),typeof n!="function"&&(Bt===null?Bt=new Set([this]):Bt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}function Us(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new dd;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=Nd.bind(null,e,t,r),t.then(e,e))}function Hs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Bs(e,t,r,n,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Nt(-1,1),t.tag=2,Ut(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var fd=Q.ReactCurrentOwner,Ue=!1;function _e(e,t,r,n){t.child=e===null?ss(t,null,r,n):Er(t,e.child,r,n)}function $s(e,t,r,n,o){r=r.render;var l=t.ref;return br(t,o),n=$l(e,t,r,n,l,o),r=Wl(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,bt(e,t,o)):(de&&r&&bl(t),t.flags|=1,_e(e,t,n,o),t.child)}function Ws(e,t,r,n,o){if(e===null){var l=r.type;return typeof l=="function"&&!wi(l)&&l.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=l,Vs(e,t,l,n,o)):(e=jo(r.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&o)===0){var a=l.memoizedProps;if(r=r.compare,r=r!==null?r:Xr,r(a,n)&&e.ref===t.ref)return bt(e,t,o)}return t.flags|=1,e=Yt(l,n),e.ref=t.ref,e.return=t,t.child=e}function Vs(e,t,r,n,o){if(e!==null){var l=e.memoizedProps;if(Xr(l,n)&&e.ref===t.ref)if(Ue=!1,t.pendingProps=n=l,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Ue=!0);else return t.lanes=e.lanes,bt(e,t,o)}return Zl(e,t,r,n,o)}function Ys(e,t,r){var n=t.pendingProps,o=n.children,l=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(Rr,qe),qe|=r;else{if((r&1073741824)===0)return e=l!==null?l.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie(Rr,qe),qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=l!==null?l.baseLanes:r,ie(Rr,qe),qe|=n}else l!==null?(n=l.baseLanes|r,t.memoizedState=null):n=r,ie(Rr,qe),qe|=n;return _e(e,t,o,r),t.child}function Gs(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Zl(e,t,r,n,o){var l=Fe(r)?Xt:Re.current;return l=wr(t,l),br(t,o),r=$l(e,t,r,n,l,o),n=Wl(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,bt(e,t,o)):(de&&n&&bl(t),t.flags|=1,_e(e,t,r,o),t.child)}function Qs(e,t,r,n,o){if(Fe(r)){var l=!0;Gn(t)}else l=!1;if(br(t,o),t.stateNode===null)fo(e,t),Os(t,r,n),Kl(t,r,n,o),n=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var c=a.context,h=r.contextType;typeof h=="object"&&h!==null?h=Ze(h):(h=Fe(r)?Xt:Re.current,h=wr(t,h));var S=r.getDerivedStateFromProps,k=typeof S=="function"||typeof a.getSnapshotBeforeUpdate=="function";k||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==n||c!==h)&&As(t,a,n,h),Ft=!1;var x=t.memoizedState;a.state=x,ro(t,n,a,o),c=t.memoizedState,s!==n||x!==c||De.current||Ft?(typeof S=="function"&&(ql(t,r,S,n),c=t.memoizedState),(s=Ft||Ms(t,r,s,n,x,c,h))?(k||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),a.props=n,a.state=c,a.context=h,n=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,us(e,t),s=t.memoizedProps,h=t.type===t.elementType?s:at(t.type,s),a.props=h,k=t.pendingProps,x=a.context,c=r.contextType,typeof c=="object"&&c!==null?c=Ze(c):(c=Fe(r)?Xt:Re.current,c=wr(t,c));var P=r.getDerivedStateFromProps;(S=typeof P=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==k||x!==c)&&As(t,a,n,c),Ft=!1,x=t.memoizedState,a.state=x,ro(t,n,a,o);var O=t.memoizedState;s!==k||x!==O||De.current||Ft?(typeof P=="function"&&(ql(t,r,P,n),O=t.memoizedState),(h=Ft||Ms(t,r,h,n,x,O,c)||!1)?(S||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,O,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,O,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=O),a.props=n,a.state=O,a.context=c,n=h):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),n=!1)}return ei(e,t,r,n,l,o)}function ei(e,t,r,n,o,l){Gs(e,t);var a=(t.flags&128)!==0;if(!n&&!a)return o&&Za(t,r,!1),bt(e,t,l);n=t.stateNode,fd.current=t;var s=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&a?(t.child=Er(t,e.child,null,l),t.child=Er(t,null,s,l)):_e(e,t,s,l),t.memoizedState=n.state,o&&Za(t,r,!0),t.child}function qs(e){var t=e.stateNode;t.pendingContext?Xa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Xa(e,t.context,!1),Al(e,t.containerInfo)}function Ks(e,t,r,n,o){return jr(),Rl(o),t.flags|=256,_e(e,t,r,n),t.child}var ti={dehydrated:null,treeContext:null,retryLane:0};function ri(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xs(e,t,r){var n=t.pendingProps,o=fe.current,l=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ie(fe,o&1),e===null)return zl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=n.children,e=n.fallback,l?(n=t.mode,l=t.child,a={mode:"hidden",children:a},(n&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=a):l=Eo(a,n,0,null),e=ar(e,n,r,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ri(r),t.memoizedState=ti,e):ni(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return pd(e,t,a,n,s,o,r);if(l){l=n.fallback,a=t.mode,o=e.child,s=o.sibling;var c={mode:"hidden",children:n.children};return(a&1)===0&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=Yt(o,c),n.subtreeFlags=o.subtreeFlags&14680064),s!==null?l=Yt(s,l):(l=ar(l,a,r,null),l.flags|=2),l.return=t,n.return=t,n.sibling=l,t.child=n,n=l,l=t.child,a=e.child.memoizedState,a=a===null?ri(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},l.memoizedState=a,l.childLanes=e.childLanes&~r,t.memoizedState=ti,n}return l=e.child,e=l.sibling,n=Yt(l,{mode:"visible",children:n.children}),(t.mode&1)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function ni(e,t){return t=Eo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function uo(e,t,r,n){return n!==null&&Rl(n),Er(t,e.child,null,r),e=ni(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pd(e,t,r,n,o,l,a){if(r)return t.flags&256?(t.flags&=-257,n=Xl(Error(d(422))),uo(e,t,a,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=n.fallback,o=t.mode,n=Eo({mode:"visible",children:n.children},o,0,null),l=ar(l,o,a,null),l.flags|=2,n.return=t,l.return=t,n.sibling=l,t.child=n,(t.mode&1)!==0&&Er(t,e.child,null,a),t.child.memoizedState=ri(a),t.memoizedState=ti,l);if((t.mode&1)===0)return uo(e,t,a,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var s=n.dgst;return n=s,l=Error(d(419)),n=Xl(l,n,void 0),uo(e,t,a,n)}if(s=(a&e.childLanes)!==0,Ue||s){if(n=be,n!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(n.suspendedLanes|a))!==0?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Et(e,o),ut(n,e,o,-1))}return xi(),n=Xl(Error(d(421))),uo(e,t,a,n)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=bd.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Qe=Mt(o.nextSibling),Ge=t,de=!0,it=null,e!==null&&(Xe[Je++]=kt,Xe[Je++]=jt,Xe[Je++]=Jt,kt=e.id,jt=e.overflow,Jt=t),t=ni(t,n.children),t.flags|=4096,t)}function Js(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),_l(e.return,t,r)}function oi(e,t,r,n,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=n,l.tail=r,l.tailMode=o)}function Zs(e,t,r){var n=t.pendingProps,o=n.revealOrder,l=n.tail;if(_e(e,t,n.children,r),n=fe.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Js(e,r,t);else if(e.tag===19)Js(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(ie(fe,n),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&no(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),oi(t,!1,o,r,l);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&no(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}oi(t,!0,r,null,l);break;case"together":oi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function bt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),nr|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,r=Yt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Yt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function md(e,t,r){switch(t.tag){case 3:qs(t),jr();break;case 5:ps(t);break;case 1:Fe(t.type)&&Gn(t);break;case 4:Al(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;ie(Zn,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(ie(fe,fe.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Xs(e,t,r):(ie(fe,fe.current&1),e=bt(e,t,r),e!==null?e.sibling:null);ie(fe,fe.current&1);break;case 19:if(n=(r&t.childLanes)!==0,(e.flags&128)!==0){if(n)return Zs(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ie(fe,fe.current),n)break;return null;case 22:case 23:return t.lanes=0,Ys(e,t,r)}return bt(e,t,r)}var ec,li,tc,rc;ec=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},li=function(){},tc=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,tr(ht.current);var l=null;switch(r){case"input":o=_o(e,o),n=_o(e,n),l=[];break;case"select":o=M({},o,{value:void 0}),n=M({},n,{value:void 0}),l=[];break;case"textarea":o=Ao(e,o),n=Ao(e,n),l=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Wn)}Fo(r,n);var a;r=null;for(h in o)if(!n.hasOwnProperty(h)&&o.hasOwnProperty(h)&&o[h]!=null)if(h==="style"){var s=o[h];for(a in s)s.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(E.hasOwnProperty(h)?l||(l=[]):(l=l||[]).push(h,null));for(h in n){var c=n[h];if(s=o!=null?o[h]:void 0,n.hasOwnProperty(h)&&c!==s&&(c!=null||s!=null))if(h==="style")if(s){for(a in s)!s.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in c)c.hasOwnProperty(a)&&s[a]!==c[a]&&(r||(r={}),r[a]=c[a])}else r||(l||(l=[]),l.push(h,r)),r=c;else h==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(l=l||[]).push(h,c)):h==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(h,""+c):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(E.hasOwnProperty(h)?(c!=null&&h==="onScroll"&&ae("scroll",e),l||s===c||(l=[])):(l=l||[]).push(h,c))}r&&(l=l||[]).push("style",r);var h=l;(t.updateQueue=h)&&(t.flags|=4)}},rc=function(e,t,r,n){r!==n&&(t.flags|=4)};function pn(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function hd(e,t,r){var n=t.pendingProps;switch(Cl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return Fe(t.type)&&Yn(),Pe(t),null;case 3:return n=t.stateNode,Cr(),se(De),se(Re),Ul(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Xn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,it!==null&&(gi(it),it=null))),li(e,t),Pe(t),null;case 5:Dl(t);var o=tr(sn.current);if(r=t.type,e!==null&&t.stateNode!=null)tc(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(d(166));return Pe(t),null}if(e=tr(ht.current),Xn(t)){n=t.stateNode,r=t.type;var l=t.memoizedProps;switch(n[mt]=t,n[rn]=l,e=(t.mode&1)!==0,r){case"dialog":ae("cancel",n),ae("close",n);break;case"iframe":case"object":case"embed":ae("load",n);break;case"video":case"audio":for(o=0;o<Zr.length;o++)ae(Zr[o],n);break;case"source":ae("error",n);break;case"img":case"image":case"link":ae("error",n),ae("load",n);break;case"details":ae("toggle",n);break;case"input":Oi(n,l),ae("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!l.multiple},ae("invalid",n);break;case"textarea":Fi(n,l),ae("invalid",n)}Fo(r,l),o=null;for(var a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="children"?typeof s=="string"?n.textContent!==s&&(l.suppressHydrationWarning!==!0&&$n(n.textContent,s,e),o=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&$n(n.textContent,s,e),o=["children",""+s]):E.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ae("scroll",n)}switch(r){case"input":wn(n),Di(n,l,!0);break;case"textarea":wn(n),Hi(n);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(n.onclick=Wn)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bi(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=a.createElement(r,{is:n.is}):(e=a.createElement(r),r==="select"&&(a=e,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):e=a.createElementNS(e,r),e[mt]=t,e[rn]=n,ec(e,t,!1,!1),t.stateNode=e;e:{switch(a=Uo(r,n),r){case"dialog":ae("cancel",e),ae("close",e),o=n;break;case"iframe":case"object":case"embed":ae("load",e),o=n;break;case"video":case"audio":for(o=0;o<Zr.length;o++)ae(Zr[o],e);o=n;break;case"source":ae("error",e),o=n;break;case"img":case"image":case"link":ae("error",e),ae("load",e),o=n;break;case"details":ae("toggle",e),o=n;break;case"input":Oi(e,n),o=_o(e,n),ae("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=M({},n,{value:void 0}),ae("invalid",e);break;case"textarea":Fi(e,n),o=Ao(e,n),ae("invalid",e);break;default:o=n}Fo(r,o),s=o;for(l in s)if(s.hasOwnProperty(l)){var c=s[l];l==="style"?Vi(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&$i(e,c)):l==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&_r(e,c):typeof c=="number"&&_r(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(E.hasOwnProperty(l)?c!=null&&l==="onScroll"&&ae("scroll",e):c!=null&&Ee(e,l,c,a))}switch(r){case"input":wn(e),Di(e,n,!1);break;case"textarea":wn(e),Hi(e);break;case"option":n.value!=null&&e.setAttribute("value",""+ne(n.value));break;case"select":e.multiple=!!n.multiple,l=n.value,l!=null?sr(e,!!n.multiple,l,!1):n.defaultValue!=null&&sr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Wn)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Pe(t),null;case 6:if(e&&t.stateNode!=null)rc(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(d(166));if(r=tr(sn.current),tr(ht.current),Xn(t)){if(n=t.stateNode,r=t.memoizedProps,n[mt]=t,(l=n.nodeValue!==r)&&(e=Ge,e!==null))switch(e.tag){case 3:$n(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$n(n.nodeValue,r,(e.mode&1)!==0)}l&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[mt]=t,t.stateNode=n}return Pe(t),null;case 13:if(se(fe),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(de&&Qe!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ls(),jr(),t.flags|=98560,l=!1;else if(l=Xn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(d(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(d(317));l[mt]=t}else jr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Pe(t),l=!1}else it!==null&&(gi(it),it=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(fe.current&1)!==0?je===0&&(je=3):xi())),t.updateQueue!==null&&(t.flags|=4),Pe(t),null);case 4:return Cr(),li(e,t),e===null&&en(t.stateNode.containerInfo),Pe(t),null;case 10:return Ll(t.type._context),Pe(t),null;case 17:return Fe(t.type)&&Yn(),Pe(t),null;case 19:if(se(fe),l=t.memoizedState,l===null)return Pe(t),null;if(n=(t.flags&128)!==0,a=l.rendering,a===null)if(n)pn(l,!1);else{if(je!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=no(e),a!==null){for(t.flags|=128,pn(l,!1),n=a.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)l=r,e=n,l.flags&=14680066,a=l.alternate,a===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,e=a.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ie(fe,fe.current&1|2),t.child}e=e.sibling}l.tail!==null&&xe()>Ir&&(t.flags|=128,n=!0,pn(l,!1),t.lanes=4194304)}else{if(!n)if(e=no(a),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),pn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!de)return Pe(t),null}else 2*xe()-l.renderingStartTime>Ir&&r!==1073741824&&(t.flags|=128,n=!0,pn(l,!1),t.lanes=4194304);l.isBackwards?(a.sibling=t.child,t.child=a):(r=l.last,r!==null?r.sibling=a:t.child=a,l.last=a)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=xe(),t.sibling=null,r=fe.current,ie(fe,n?r&1|2:r&1),t):(Pe(t),null);case 22:case 23:return yi(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&(t.mode&1)!==0?(qe&1073741824)!==0&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),null;case 24:return null;case 25:return null}throw Error(d(156,t.tag))}function gd(e,t){switch(Cl(t),t.tag){case 1:return Fe(t.type)&&Yn(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Cr(),se(De),se(Re),Ul(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Dl(t),null;case 13:if(se(fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));jr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(fe),null;case 4:return Cr(),null;case 10:return Ll(t.type._context),null;case 22:case 23:return yi(),null;case 24:return null;default:return null}}var po=!1,Le=!1,vd=typeof WeakSet=="function"?WeakSet:Set,L=null;function zr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){ve(e,t,n)}else r.current=null}function ii(e,t,r){try{r()}catch(n){ve(e,t,n)}}var nc=!1;function yd(e,t){if(yl=Pn,e=Ma(),ul(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var o=n.anchorOffset,l=n.focusNode;n=n.focusOffset;try{r.nodeType,l.nodeType}catch{r=null;break e}var a=0,s=-1,c=-1,h=0,S=0,k=e,x=null;t:for(;;){for(var P;k!==r||o!==0&&k.nodeType!==3||(s=a+o),k!==l||n!==0&&k.nodeType!==3||(c=a+n),k.nodeType===3&&(a+=k.nodeValue.length),(P=k.firstChild)!==null;)x=k,k=P;for(;;){if(k===e)break t;if(x===r&&++h===o&&(s=a),x===l&&++S===n&&(c=a),(P=k.nextSibling)!==null)break;k=x,x=k.parentNode}k=P}r=s===-1||c===-1?null:{start:s,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(xl={focusedElem:e,selectionRange:r},Pn=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var O=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(O!==null){var D=O.memoizedProps,we=O.memoizedState,p=t.stateNode,u=p.getSnapshotBeforeUpdate(t.elementType===t.type?D:at(t.type,D),we);p.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(d(163))}}catch(N){ve(t,t.return,N)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return O=nc,nc=!1,O}function mn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&ii(t,r,l)}o=o.next}while(o!==n)}}function mo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function ai(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function oc(e){var t=e.alternate;t!==null&&(e.alternate=null,oc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mt],delete t[rn],delete t[jl],delete t[ed],delete t[td])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lc(e){return e.tag===5||e.tag===3||e.tag===4}function ic(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function si(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Wn));else if(n!==4&&(e=e.child,e!==null))for(si(e,t,r),e=e.sibling;e!==null;)si(e,t,r),e=e.sibling}function ci(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(ci(e,t,r),e=e.sibling;e!==null;)ci(e,t,r),e=e.sibling}var Te=null,st=!1;function Ht(e,t,r){for(r=r.child;r!==null;)ac(e,t,r),r=r.sibling}function ac(e,t,r){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(bn,r)}catch{}switch(r.tag){case 5:Le||zr(r,t);case 6:var n=Te,o=st;Te=null,Ht(e,t,r),Te=n,st=o,Te!==null&&(st?(e=Te,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Te.removeChild(r.stateNode));break;case 18:Te!==null&&(st?(e=Te,r=r.stateNode,e.nodeType===8?kl(e.parentNode,r):e.nodeType===1&&kl(e,r),Vr(e)):kl(Te,r.stateNode));break;case 4:n=Te,o=st,Te=r.stateNode.containerInfo,st=!0,Ht(e,t,r),Te=n,st=o;break;case 0:case 11:case 14:case 15:if(!Le&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var l=o,a=l.destroy;l=l.tag,a!==void 0&&((l&2)!==0||(l&4)!==0)&&ii(r,t,a),o=o.next}while(o!==n)}Ht(e,t,r);break;case 1:if(!Le&&(zr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){ve(r,t,s)}Ht(e,t,r);break;case 21:Ht(e,t,r);break;case 22:r.mode&1?(Le=(n=Le)||r.memoizedState!==null,Ht(e,t,r),Le=n):Ht(e,t,r);break;default:Ht(e,t,r)}}function sc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new vd),t.forEach(function(n){var o=Cd.bind(null,e,n);r.has(n)||(r.add(n),n.then(o,o))})}}function ct(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];try{var l=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Te=s.stateNode,st=!1;break e;case 3:Te=s.stateNode.containerInfo,st=!0;break e;case 4:Te=s.stateNode.containerInfo,st=!0;break e}s=s.return}if(Te===null)throw Error(d(160));ac(l,a,o),Te=null,st=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(h){ve(o,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)cc(t,e),t=t.sibling}function cc(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ct(t,e),vt(e),n&4){try{mn(3,e,e.return),mo(3,e)}catch(D){ve(e,e.return,D)}try{mn(5,e,e.return)}catch(D){ve(e,e.return,D)}}break;case 1:ct(t,e),vt(e),n&512&&r!==null&&zr(r,r.return);break;case 5:if(ct(t,e),vt(e),n&512&&r!==null&&zr(r,r.return),e.flags&32){var o=e.stateNode;try{_r(o,"")}catch(D){ve(e,e.return,D)}}if(n&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,a=r!==null?r.memoizedProps:l,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Ai(o,l),Uo(s,a);var h=Uo(s,l);for(a=0;a<c.length;a+=2){var S=c[a],k=c[a+1];S==="style"?Vi(o,k):S==="dangerouslySetInnerHTML"?$i(o,k):S==="children"?_r(o,k):Ee(o,S,k,h)}switch(s){case"input":Mo(o,l);break;case"textarea":Ui(o,l);break;case"select":var x=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var P=l.value;P!=null?sr(o,!!l.multiple,P,!1):x!==!!l.multiple&&(l.defaultValue!=null?sr(o,!!l.multiple,l.defaultValue,!0):sr(o,!!l.multiple,l.multiple?[]:"",!1))}o[rn]=l}catch(D){ve(e,e.return,D)}}break;case 6:if(ct(t,e),vt(e),n&4){if(e.stateNode===null)throw Error(d(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(D){ve(e,e.return,D)}}break;case 3:if(ct(t,e),vt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Vr(t.containerInfo)}catch(D){ve(e,e.return,D)}break;case 4:ct(t,e),vt(e);break;case 13:ct(t,e),vt(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(fi=xe())),n&4&&sc(e);break;case 22:if(S=r!==null&&r.memoizedState!==null,e.mode&1?(Le=(h=Le)||S,ct(t,e),Le=h):ct(t,e),vt(e),n&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!S&&(e.mode&1)!==0)for(L=e,S=e.child;S!==null;){for(k=L=S;L!==null;){switch(x=L,P=x.child,x.tag){case 0:case 11:case 14:case 15:mn(4,x,x.return);break;case 1:zr(x,x.return);var O=x.stateNode;if(typeof O.componentWillUnmount=="function"){n=x,r=x.return;try{t=n,O.props=t.memoizedProps,O.state=t.memoizedState,O.componentWillUnmount()}catch(D){ve(n,r,D)}}break;case 5:zr(x,x.return);break;case 22:if(x.memoizedState!==null){fc(k);continue}}P!==null?(P.return=x,L=P):fc(k)}S=S.sibling}e:for(S=null,k=e;;){if(k.tag===5){if(S===null){S=k;try{o=k.stateNode,h?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=k.stateNode,c=k.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=Wi("display",a))}catch(D){ve(e,e.return,D)}}}else if(k.tag===6){if(S===null)try{k.stateNode.nodeValue=h?"":k.memoizedProps}catch(D){ve(e,e.return,D)}}else if((k.tag!==22&&k.tag!==23||k.memoizedState===null||k===e)&&k.child!==null){k.child.return=k,k=k.child;continue}if(k===e)break e;for(;k.sibling===null;){if(k.return===null||k.return===e)break e;S===k&&(S=null),k=k.return}S===k&&(S=null),k.sibling.return=k.return,k=k.sibling}}break;case 19:ct(t,e),vt(e),n&4&&sc(e);break;case 21:break;default:ct(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(lc(r)){var n=r;break e}r=r.return}throw Error(d(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(_r(o,""),n.flags&=-33);var l=ic(e);ci(e,l,o);break;case 3:case 4:var a=n.stateNode.containerInfo,s=ic(e);si(e,s,a);break;default:throw Error(d(161))}}catch(c){ve(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xd(e,t,r){L=e,uc(e)}function uc(e,t,r){for(var n=(e.mode&1)!==0;L!==null;){var o=L,l=o.child;if(o.tag===22&&n){var a=o.memoizedState!==null||po;if(!a){var s=o.alternate,c=s!==null&&s.memoizedState!==null||Le;s=po;var h=Le;if(po=a,(Le=c)&&!h)for(L=o;L!==null;)a=L,c=a.child,a.tag===22&&a.memoizedState!==null?pc(o):c!==null?(c.return=a,L=c):pc(o);for(;l!==null;)L=l,uc(l),l=l.sibling;L=o,po=s,Le=h}dc(e)}else(o.subtreeFlags&8772)!==0&&l!==null?(l.return=o,L=l):dc(e)}}function dc(e){for(;L!==null;){var t=L;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Le||mo(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Le)if(r===null)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:at(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&fs(t,l,n);break;case 3:var a=t.updateQueue;if(a!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}fs(t,a,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var S=h.memoizedState;if(S!==null){var k=S.dehydrated;k!==null&&Vr(k)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(d(163))}Le||t.flags&512&&ai(t)}catch(x){ve(t,t.return,x)}}if(t===e){L=null;break}if(r=t.sibling,r!==null){r.return=t.return,L=r;break}L=t.return}}function fc(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var r=t.sibling;if(r!==null){r.return=t.return,L=r;break}L=t.return}}function pc(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{mo(4,t)}catch(c){ve(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(c){ve(t,o,c)}}var l=t.return;try{ai(t)}catch(c){ve(t,l,c)}break;case 5:var a=t.return;try{ai(t)}catch(c){ve(t,a,c)}}}catch(c){ve(t,t.return,c)}if(t===e){L=null;break}var s=t.sibling;if(s!==null){s.return=t.return,L=s;break}L=t.return}}var wd=Math.ceil,ho=Q.ReactCurrentDispatcher,ui=Q.ReactCurrentOwner,tt=Q.ReactCurrentBatchConfig,Z=0,be=null,Se=null,ze=0,qe=0,Rr=Ot(0),je=0,hn=null,nr=0,go=0,di=0,gn=null,He=null,fi=0,Ir=1/0,Ct=null,vo=!1,pi=null,Bt=null,yo=!1,$t=null,xo=0,vn=0,mi=null,wo=-1,So=0;function Me(){return(Z&6)!==0?xe():wo!==-1?wo:wo=xe()}function Wt(e){return(e.mode&1)===0?1:(Z&2)!==0&&ze!==0?ze&-ze:nd.transition!==null?(So===0&&(So=ia()),So):(e=oe,e!==0||(e=window.event,e=e===void 0?16:ha(e.type)),e)}function ut(e,t,r,n){if(50<vn)throw vn=0,mi=null,Error(d(185));Ur(e,r,n),((Z&2)===0||e!==be)&&(e===be&&((Z&2)===0&&(go|=r),je===4&&Vt(e,ze)),Be(e,n),r===1&&Z===0&&(t.mode&1)===0&&(Ir=xe()+500,Qn&&Dt()))}function Be(e,t){var r=e.callbackNode;nu(e,t);var n=zn(e,e===be?ze:0);if(n===0)r!==null&&na(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&na(r),t===1)e.tag===0?rd(hc.bind(null,e)):es(hc.bind(null,e)),Ju(function(){(Z&6)===0&&Dt()}),r=null;else{switch(aa(n)){case 1:r=Go;break;case 4:r=oa;break;case 16:r=Nn;break;case 536870912:r=la;break;default:r=Nn}r=jc(r,mc.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function mc(e,t){if(wo=-1,So=0,(Z&6)!==0)throw Error(d(327));var r=e.callbackNode;if(Pr()&&e.callbackNode!==r)return null;var n=zn(e,e===be?ze:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||t)t=ko(e,n);else{t=n;var o=Z;Z|=2;var l=vc();(be!==e||ze!==t)&&(Ct=null,Ir=xe()+500,lr(e,t));do try{jd();break}catch(s){gc(e,s)}while(!0);Pl(),ho.current=l,Z=o,Se!==null?t=0:(be=null,ze=0,t=je)}if(t!==0){if(t===2&&(o=Qo(e),o!==0&&(n=o,t=hi(e,o))),t===1)throw r=hn,lr(e,0),Vt(e,n),Be(e,xe()),r;if(t===6)Vt(e,n);else{if(o=e.current.alternate,(n&30)===0&&!Sd(o)&&(t=ko(e,n),t===2&&(l=Qo(e),l!==0&&(n=l,t=hi(e,l))),t===1))throw r=hn,lr(e,0),Vt(e,n),Be(e,xe()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(d(345));case 2:ir(e,He,Ct);break;case 3:if(Vt(e,n),(n&130023424)===n&&(t=fi+500-xe(),10<t)){if(zn(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){Me(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Sl(ir.bind(null,e,He,Ct),t);break}ir(e,He,Ct);break;case 4:if(Vt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var a=31-ot(n);l=1<<a,a=t[a],a>o&&(o=a),n&=~l}if(n=o,n=xe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*wd(n/1960))-n,10<n){e.timeoutHandle=Sl(ir.bind(null,e,He,Ct),n);break}ir(e,He,Ct);break;case 5:ir(e,He,Ct);break;default:throw Error(d(329))}}}return Be(e,xe()),e.callbackNode===r?mc.bind(null,e):null}function hi(e,t){var r=gn;return e.current.memoizedState.isDehydrated&&(lr(e,t).flags|=256),e=ko(e,t),e!==2&&(t=He,He=r,t!==null&&gi(t)),e}function gi(e){He===null?He=e:He.push.apply(He,e)}function Sd(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var o=r[n],l=o.getSnapshot;o=o.value;try{if(!lt(l(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vt(e,t){for(t&=~di,t&=~go,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-ot(t),n=1<<r;e[r]=-1,t&=~n}}function hc(e){if((Z&6)!==0)throw Error(d(327));Pr();var t=zn(e,0);if((t&1)===0)return Be(e,xe()),null;var r=ko(e,t);if(e.tag!==0&&r===2){var n=Qo(e);n!==0&&(t=n,r=hi(e,n))}if(r===1)throw r=hn,lr(e,0),Vt(e,t),Be(e,xe()),r;if(r===6)throw Error(d(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ir(e,He,Ct),Be(e,xe()),null}function vi(e,t){var r=Z;Z|=1;try{return e(t)}finally{Z=r,Z===0&&(Ir=xe()+500,Qn&&Dt())}}function or(e){$t!==null&&$t.tag===0&&(Z&6)===0&&Pr();var t=Z;Z|=1;var r=tt.transition,n=oe;try{if(tt.transition=null,oe=1,e)return e()}finally{oe=n,tt.transition=r,Z=t,(Z&6)===0&&Dt()}}function yi(){qe=Rr.current,se(Rr)}function lr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Xu(r)),Se!==null)for(r=Se.return;r!==null;){var n=r;switch(Cl(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Yn();break;case 3:Cr(),se(De),se(Re),Ul();break;case 5:Dl(n);break;case 4:Cr();break;case 13:se(fe);break;case 19:se(fe);break;case 10:Ll(n.type._context);break;case 22:case 23:yi()}r=r.return}if(be=e,Se=e=Yt(e.current,null),ze=qe=t,je=0,hn=null,di=go=nr=0,He=gn=null,er!==null){for(t=0;t<er.length;t++)if(r=er[t],n=r.interleaved,n!==null){r.interleaved=null;var o=n.next,l=r.pending;if(l!==null){var a=l.next;l.next=o,n.next=a}r.pending=n}er=null}return e}function gc(e,t){do{var r=Se;try{if(Pl(),oo.current=so,lo){for(var n=pe.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}lo=!1}if(rr=0,Ne=ke=pe=null,cn=!1,un=0,ui.current=null,r===null||r.return===null){je=1,hn=t,Se=null;break}e:{var l=e,a=r.return,s=r,c=t;if(t=ze,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var h=c,S=s,k=S.tag;if((S.mode&1)===0&&(k===0||k===11||k===15)){var x=S.alternate;x?(S.updateQueue=x.updateQueue,S.memoizedState=x.memoizedState,S.lanes=x.lanes):(S.updateQueue=null,S.memoizedState=null)}var P=Hs(a);if(P!==null){P.flags&=-257,Bs(P,a,s,l,t),P.mode&1&&Us(l,h,t),t=P,c=h;var O=t.updateQueue;if(O===null){var D=new Set;D.add(c),t.updateQueue=D}else O.add(c);break e}else{if((t&1)===0){Us(l,h,t),xi();break e}c=Error(d(426))}}else if(de&&s.mode&1){var we=Hs(a);if(we!==null){(we.flags&65536)===0&&(we.flags|=256),Bs(we,a,s,l,t),Rl(Tr(c,s));break e}}l=c=Tr(c,s),je!==4&&(je=2),gn===null?gn=[l]:gn.push(l),l=a;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var p=Ds(l,c,t);ds(l,p);break e;case 1:s=c;var u=l.type,m=l.stateNode;if((l.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Bt===null||!Bt.has(m)))){l.flags|=65536,t&=-t,l.lanes|=t;var N=Fs(l,s,t);ds(l,N);break e}}l=l.return}while(l!==null)}xc(r)}catch(F){t=F,Se===r&&r!==null&&(Se=r=r.return);continue}break}while(!0)}function vc(){var e=ho.current;return ho.current=so,e===null?so:e}function xi(){(je===0||je===3||je===2)&&(je=4),be===null||(nr&268435455)===0&&(go&268435455)===0||Vt(be,ze)}function ko(e,t){var r=Z;Z|=2;var n=vc();(be!==e||ze!==t)&&(Ct=null,lr(e,t));do try{kd();break}catch(o){gc(e,o)}while(!0);if(Pl(),Z=r,ho.current=n,Se!==null)throw Error(d(261));return be=null,ze=0,je}function kd(){for(;Se!==null;)yc(Se)}function jd(){for(;Se!==null&&!Qc();)yc(Se)}function yc(e){var t=kc(e.alternate,e,qe);e.memoizedProps=e.pendingProps,t===null?xc(e):Se=t,ui.current=null}function xc(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=hd(r,t,qe),r!==null){Se=r;return}}else{if(r=gd(r,t),r!==null){r.flags&=32767,Se=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{je=6,Se=null;return}}if(t=t.sibling,t!==null){Se=t;return}Se=t=e}while(t!==null);je===0&&(je=5)}function ir(e,t,r){var n=oe,o=tt.transition;try{tt.transition=null,oe=1,Ed(e,t,r,n)}finally{tt.transition=o,oe=n}return null}function Ed(e,t,r,n){do Pr();while($t!==null);if((Z&6)!==0)throw Error(d(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(d(177));e.callbackNode=null,e.callbackPriority=0;var l=r.lanes|r.childLanes;if(ou(e,l),e===be&&(Se=be=null,ze=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||yo||(yo=!0,jc(Nn,function(){return Pr(),null})),l=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||l){l=tt.transition,tt.transition=null;var a=oe;oe=1;var s=Z;Z|=4,ui.current=null,yd(e,r),cc(r,e),Wu(xl),Pn=!!yl,xl=yl=null,e.current=r,xd(r),qc(),Z=s,oe=a,tt.transition=l}else e.current=r;if(yo&&(yo=!1,$t=e,xo=o),l=e.pendingLanes,l===0&&(Bt=null),Jc(r.stateNode),Be(e,xe()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],n(o.value,{componentStack:o.stack,digest:o.digest});if(vo)throw vo=!1,e=pi,pi=null,e;return(xo&1)!==0&&e.tag!==0&&Pr(),l=e.pendingLanes,(l&1)!==0?e===mi?vn++:(vn=0,mi=e):vn=0,Dt(),null}function Pr(){if($t!==null){var e=aa(xo),t=tt.transition,r=oe;try{if(tt.transition=null,oe=16>e?16:e,$t===null)var n=!1;else{if(e=$t,$t=null,xo=0,(Z&6)!==0)throw Error(d(331));var o=Z;for(Z|=4,L=e.current;L!==null;){var l=L,a=l.child;if((L.flags&16)!==0){var s=l.deletions;if(s!==null){for(var c=0;c<s.length;c++){var h=s[c];for(L=h;L!==null;){var S=L;switch(S.tag){case 0:case 11:case 15:mn(8,S,l)}var k=S.child;if(k!==null)k.return=S,L=k;else for(;L!==null;){S=L;var x=S.sibling,P=S.return;if(oc(S),S===h){L=null;break}if(x!==null){x.return=P,L=x;break}L=P}}}var O=l.alternate;if(O!==null){var D=O.child;if(D!==null){O.child=null;do{var we=D.sibling;D.sibling=null,D=we}while(D!==null)}}L=l}}if((l.subtreeFlags&2064)!==0&&a!==null)a.return=l,L=a;else e:for(;L!==null;){if(l=L,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:mn(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,L=p;break e}L=l.return}}var u=e.current;for(L=u;L!==null;){a=L;var m=a.child;if((a.subtreeFlags&2064)!==0&&m!==null)m.return=a,L=m;else e:for(a=u;L!==null;){if(s=L,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:mo(9,s)}}catch(F){ve(s,s.return,F)}if(s===a){L=null;break e}var N=s.sibling;if(N!==null){N.return=s.return,L=N;break e}L=s.return}}if(Z=o,Dt(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(bn,e)}catch{}n=!0}return n}finally{oe=r,tt.transition=t}}return!1}function wc(e,t,r){t=Tr(r,t),t=Ds(e,t,1),e=Ut(e,t,1),t=Me(),e!==null&&(Ur(e,1,t),Be(e,t))}function ve(e,t,r){if(e.tag===3)wc(e,e,r);else for(;t!==null;){if(t.tag===3){wc(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Bt===null||!Bt.has(n))){e=Tr(r,e),e=Fs(t,e,1),t=Ut(t,e,1),e=Me(),t!==null&&(Ur(t,1,e),Be(t,e));break}}t=t.return}}function Nd(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&r,be===e&&(ze&r)===r&&(je===4||je===3&&(ze&130023424)===ze&&500>xe()-fi?lr(e,0):di|=r),Be(e,t)}function Sc(e,t){t===0&&((e.mode&1)===0?t=1:(t=Tn,Tn<<=1,(Tn&130023424)===0&&(Tn=4194304)));var r=Me();e=Et(e,t),e!==null&&(Ur(e,t,r),Be(e,r))}function bd(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Sc(e,r)}function Cd(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(d(314))}n!==null&&n.delete(t),Sc(e,r)}var kc;kc=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||De.current)Ue=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return Ue=!1,md(e,t,r);Ue=(e.flags&131072)!==0}else Ue=!1,de&&(t.flags&1048576)!==0&&ts(t,Kn,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;fo(e,t),e=t.pendingProps;var o=wr(t,Re.current);br(t,r),o=$l(null,t,n,e,o,r);var l=Wl();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Fe(n)?(l=!0,Gn(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ol(t),o.updater=co,t.stateNode=o,o._reactInternals=t,Kl(t,n,e,r),t=ei(null,t,n,!0,l,r)):(t.tag=0,de&&l&&bl(t),_e(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(fo(e,t),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=zd(n),e=at(n,e),o){case 0:t=Zl(null,t,n,e,r);break e;case 1:t=Qs(null,t,n,e,r);break e;case 11:t=$s(null,t,n,e,r);break e;case 14:t=Ws(null,t,n,at(n.type,e),r);break e}throw Error(d(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:at(n,o),Zl(e,t,n,o,r);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:at(n,o),Qs(e,t,n,o,r);case 3:e:{if(qs(t),e===null)throw Error(d(387));n=t.pendingProps,l=t.memoizedState,o=l.element,us(e,t),ro(t,n,null,r);var a=t.memoizedState;if(n=a.element,l.isDehydrated)if(l={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Tr(Error(d(423)),t),t=Ks(e,t,n,r,o);break e}else if(n!==o){o=Tr(Error(d(424)),t),t=Ks(e,t,n,r,o);break e}else for(Qe=Mt(t.stateNode.containerInfo.firstChild),Ge=t,de=!0,it=null,r=ss(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(jr(),n===o){t=bt(e,t,r);break e}_e(e,t,n,r)}t=t.child}return t;case 5:return ps(t),e===null&&zl(t),n=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,a=o.children,wl(n,o)?a=null:l!==null&&wl(n,l)&&(t.flags|=32),Gs(e,t),_e(e,t,a,r),t.child;case 6:return e===null&&zl(t),null;case 13:return Xs(e,t,r);case 4:return Al(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Er(t,null,n,r):_e(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:at(n,o),$s(e,t,n,o,r);case 7:return _e(e,t,t.pendingProps,r),t.child;case 8:return _e(e,t,t.pendingProps.children,r),t.child;case 12:return _e(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,l=t.memoizedProps,a=o.value,ie(Zn,n._currentValue),n._currentValue=a,l!==null)if(lt(l.value,a)){if(l.children===o.children&&!De.current){t=bt(e,t,r);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){a=l.child;for(var c=s.firstContext;c!==null;){if(c.context===n){if(l.tag===1){c=Nt(-1,r&-r),c.tag=2;var h=l.updateQueue;if(h!==null){h=h.shared;var S=h.pending;S===null?c.next=c:(c.next=S.next,S.next=c),h.pending=c}}l.lanes|=r,c=l.alternate,c!==null&&(c.lanes|=r),_l(l.return,r,t),s.lanes|=r;break}c=c.next}}else if(l.tag===10)a=l.type===t.type?null:l.child;else if(l.tag===18){if(a=l.return,a===null)throw Error(d(341));a.lanes|=r,s=a.alternate,s!==null&&(s.lanes|=r),_l(a,r,t),a=l.sibling}else a=l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===t){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}_e(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,br(t,r),o=Ze(o),n=n(o),t.flags|=1,_e(e,t,n,r),t.child;case 14:return n=t.type,o=at(n,t.pendingProps),o=at(n.type,o),Ws(e,t,n,o,r);case 15:return Vs(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:at(n,o),fo(e,t),t.tag=1,Fe(n)?(e=!0,Gn(t)):e=!1,br(t,r),Os(t,n,o),Kl(t,n,o,r),ei(null,t,n,!0,e,r);case 19:return Zs(e,t,r);case 22:return Ys(e,t,r)}throw Error(d(156,t.tag))};function jc(e,t){return ra(e,t)}function Td(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,r,n){return new Td(e,t,r,n)}function wi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zd(e){if(typeof e=="function")return wi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===dt)return 11;if(e===ft)return 14}return 2}function Yt(e,t){var r=e.alternate;return r===null?(r=rt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function jo(e,t,r,n,o,l){var a=2;if(n=e,typeof e=="function")wi(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Oe:return ar(r.children,o,l,t);case Ke:a=8,o|=8;break;case Tt:return e=rt(12,r,t,o|2),e.elementType=Tt,e.lanes=l,e;case We:return e=rt(13,r,t,o),e.elementType=We,e.lanes=l,e;case nt:return e=rt(19,r,t,o),e.elementType=nt,e.lanes=l,e;case ge:return Eo(r,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xt:a=10;break e;case Qt:a=9;break e;case dt:a=11;break e;case ft:a=14;break e;case Ae:a=16,n=null;break e}throw Error(d(130,e==null?e:typeof e,""))}return t=rt(a,r,t,o),t.elementType=e,t.type=n,t.lanes=l,t}function ar(e,t,r,n){return e=rt(7,e,n,t),e.lanes=r,e}function Eo(e,t,r,n){return e=rt(22,e,n,t),e.elementType=ge,e.lanes=r,e.stateNode={isHidden:!1},e}function Si(e,t,r){return e=rt(6,e,null,t),e.lanes=r,e}function ki(e,t,r){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Rd(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qo(0),this.expirationTimes=qo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qo(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ji(e,t,r,n,o,l,a,s,c){return e=new Rd(e,t,r,s,c),t===1?(t=1,l===!0&&(t|=8)):t=0,l=rt(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ol(l),e}function Id(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:he,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Ec(e){if(!e)return At;e=e._reactInternals;e:{if(qt(e)!==e||e.tag!==1)throw Error(d(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(d(171))}if(e.tag===1){var r=e.type;if(Fe(r))return Ja(e,r,t)}return t}function Nc(e,t,r,n,o,l,a,s,c){return e=ji(r,n,!0,e,o,l,a,s,c),e.context=Ec(null),r=e.current,n=Me(),o=Wt(r),l=Nt(n,o),l.callback=t??null,Ut(r,l,o),e.current.lanes=o,Ur(e,o,n),Be(e,n),e}function No(e,t,r,n){var o=t.current,l=Me(),a=Wt(o);return r=Ec(r),t.context===null?t.context=r:t.pendingContext=r,t=Nt(l,a),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Ut(o,t,a),e!==null&&(ut(e,o,a,l),to(e,o,a)),a}function bo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Ei(e,t){bc(e,t),(e=e.alternate)&&bc(e,t)}function Pd(){return null}var Cc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ni(e){this._internalRoot=e}Co.prototype.render=Ni.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));No(e,t,null,null)},Co.prototype.unmount=Ni.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;or(function(){No(null,e,null,null)}),t[wt]=null}};function Co(e){this._internalRoot=e}Co.prototype.unstable_scheduleHydration=function(e){if(e){var t=ua();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Pt.length&&t!==0&&t<Pt[r].priority;r++);Pt.splice(r,0,e),r===0&&pa(e)}};function bi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function To(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Tc(){}function Ld(e,t,r,n,o){if(o){if(typeof n=="function"){var l=n;n=function(){var h=bo(a);l.call(h)}}var a=Nc(t,n,e,0,null,!1,!1,"",Tc);return e._reactRootContainer=a,e[wt]=a.current,en(e.nodeType===8?e.parentNode:e),or(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var s=n;n=function(){var h=bo(c);s.call(h)}}var c=ji(e,0,!1,null,null,!1,!1,"",Tc);return e._reactRootContainer=c,e[wt]=c.current,en(e.nodeType===8?e.parentNode:e),or(function(){No(t,c,r,n)}),c}function zo(e,t,r,n,o){var l=r._reactRootContainer;if(l){var a=l;if(typeof o=="function"){var s=o;o=function(){var c=bo(a);s.call(c)}}No(t,a,e,o)}else a=Ld(r,t,e,o,n);return bo(a)}sa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Fr(t.pendingLanes);r!==0&&(Ko(t,r|1),Be(t,xe()),(Z&6)===0&&(Ir=xe()+500,Dt()))}break;case 13:or(function(){var n=Et(e,1);if(n!==null){var o=Me();ut(n,e,1,o)}}),Ei(e,1)}},Xo=function(e){if(e.tag===13){var t=Et(e,134217728);if(t!==null){var r=Me();ut(t,e,134217728,r)}Ei(e,134217728)}},ca=function(e){if(e.tag===13){var t=Wt(e),r=Et(e,t);if(r!==null){var n=Me();ut(r,e,t,n)}Ei(e,t)}},ua=function(){return oe},da=function(e,t){var r=oe;try{return oe=e,t()}finally{oe=r}},$o=function(e,t,r){switch(t){case"input":if(Mo(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=Vn(n);if(!o)throw Error(d(90));Mi(n),Mo(n,o)}}}break;case"textarea":Ui(e,r);break;case"select":t=r.value,t!=null&&sr(e,!!r.multiple,t,!1)}},qi=vi,Ki=or;var _d={usingClientEntryPoint:!1,Events:[nn,yr,Vn,Gi,Qi,vi]},yn={findFiberByHostInstance:Kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Md={bundleType:yn.bundleType,version:yn.version,rendererPackageName:yn.rendererPackageName,rendererConfig:yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Q.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ea(e),e===null?null:e.stateNode},findFiberByHostInstance:yn.findFiberByHostInstance||Pd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ro.isDisabled&&Ro.supportsFiber)try{bn=Ro.inject(Md),pt=Ro}catch{}}return $e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_d,$e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bi(t))throw Error(d(200));return Id(e,t,null,r)},$e.createRoot=function(e,t){if(!bi(e))throw Error(d(299));var r=!1,n="",o=Cc;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ji(e,1,!1,null,null,r,!1,n,o),e[wt]=t.current,en(e.nodeType===8?e.parentNode:e),new Ni(t)},$e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=ea(t),e=e===null?null:e.stateNode,e},$e.flushSync=function(e){return or(e)},$e.hydrate=function(e,t,r){if(!To(t))throw Error(d(200));return zo(null,e,t,!0,r)},$e.hydrateRoot=function(e,t,r){if(!bi(e))throw Error(d(405));var n=r!=null&&r.hydratedSources||null,o=!1,l="",a=Cc;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),t=Nc(t,null,e,1,r??null,o,!1,l,a),e[wt]=t.current,en(e),n)for(e=0;e<n.length;e++)r=n[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new Co(t)},$e.render=function(e,t,r){if(!To(t))throw Error(d(200));return zo(null,e,t,!1,r)},$e.unmountComponentAtNode=function(e){if(!To(e))throw Error(d(40));return e._reactRootContainer?(or(function(){zo(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1},$e.unstable_batchedUpdates=vi,$e.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!To(r))throw Error(d(200));if(e==null||e._reactInternals===void 0)throw Error(d(38));return zo(e,t,r,!1,n)},$e.version="18.3.1-next-f1338f8080-20240426",$e}var Oc;function Wd(){if(Oc)return zi.exports;Oc=1;function g(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g)}catch(j){console.error(j)}}return g(),zi.exports=$d(),zi.exports}var Ac;function Vd(){if(Ac)return Io;Ac=1;var g=Wd();return Io.createRoot=g.createRoot,Io.hydrateRoot=g.hydrateRoot,Io}var Yd=Vd();const Gd=Dc(Yd),Qd=`
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&family=Oswald:wght@500;600;700&family=Syne:wght@500;700;800&display=swap');

:root {
  /* 03 — Core Architectural Palette */
  --bg-primary: #EEE9E1;
  --color-ivory: #F8F5EF;
  --color-stone: #C9C1B5;
  --color-clay: #A96750;
  --color-rust: #874C3C;
  --color-deep-brown: #302825;
  --color-muted: #6E6862;
  --color-border: #CFC7BC;
  --color-border-light: rgba(207, 199, 188, 0.45);

  /* 28 — Architectural Typography System */
  --font-primary-sans: 'Inter', 'Manrope', -apple-system, sans-serif;
  --font-display: 'Manrope', 'Syne', sans-serif;
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-condensed: 'Oswald', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Fluid Architectural Scale */
  --text-hero: clamp(2.8rem, 6.2vw, 6.8rem);
  --text-manifesto: clamp(2.25rem, 5vw, 5rem);
  --text-h1: clamp(2.4rem, 5vw + 0.5rem, 5.2rem);
  --text-h2: clamp(1.75rem, 3.2vw + 0.2rem, 3.25rem);
  --text-h3: clamp(1.2rem, 1.8vw, 2rem);
  --text-body: clamp(0.95rem, 1vw, 1.125rem);
  --text-meta: clamp(0.7rem, 0.75vw, 0.82rem);

  /* Layout & Grid Dimensions */
  --grid-margin: clamp(1.25rem, 3.5vw, 4.5rem);
  --grid-gutter: clamp(1rem, 2vw, 2.5rem);
  --header-height: 84px;

  /* 30 — Motion Language: Slow, intentional and precise */
  --ease-architectural: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-smooth: cubic-bezier(0.25, 0.1, 0.25, 1);
  --duration-slow: 0.8s;
  --duration-base: 0.4s;
  --duration-fast: 0.2s;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
  background-color: var(--bg-primary);
  color: var(--color-deep-brown);
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-body);
  background-color: var(--bg-primary);
  color: var(--color-deep-brown);
  line-height: 1.5;
  overflow-x: hidden;
  position: relative;
  min-height: 100vh;
  cursor: default;
}

::selection {
  background-color: var(--color-clay);
  color: var(--color-ivory);
}

/* 33 — Accessible Focus States */
:focus-visible {
  outline: 2px solid var(--color-clay) !important;
  outline-offset: 3px !important;
}

/* Subtle architectural paper texture overlay */
.paper-texture {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 999;
  opacity: 0.038;
  mix-blend-mode: multiply;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}

/* Architectural grid overlay lines */
.architectural-grid-lines {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 0 var(--grid-margin);
  opacity: 0.35;
}

.architectural-grid-lines .col-line {
  border-right: 1px solid var(--color-border);
  height: 100%;
}

.architectural-grid-lines .col-line:first-child {
  border-left: 1px solid var(--color-border);
}

/* ==========================================================================
   31 — CUSTOM CURSOR (Small circle, VIEW, OPEN, EXPLORE)
   ========================================================================== */
.arch-cursor-follower {
  position: fixed;
  top: 0;
  left: 0;
  width: 28px;
  height: 28px;
  border: 1px solid rgba(48, 40, 37, 0.45);
  border-radius: 50%;
  pointer-events: none;
  z-index: 1000;
  transform: translate(-50%, -50%);
  transition: width 0.35s var(--ease-architectural),
              height 0.35s var(--ease-architectural),
              border-color 0.3s ease,
              background-color 0.35s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.arch-cursor-dot {
  position: fixed;
  top: 0;
  left: 0;
  width: 4px;
  height: 4px;
  background-color: var(--color-clay);
  border-radius: 50%;
  pointer-events: none;
  z-index: 1001;
  transform: translate(-50%, -50%);
  transition: opacity 0.2s ease;
}

.cursor-label-text {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.15em;
  font-weight: 700;
  color: var(--color-ivory);
  text-transform: uppercase;
  pointer-events: none;
}

.arch-cursor-follower.mode-view {
  width: 68px;
  height: 68px;
  background-color: rgba(135, 76, 60, 0.85);
  border-color: var(--color-rust);
  backdrop-filter: blur(4px);
}

.arch-cursor-follower.mode-open {
  width: 62px;
  height: 62px;
  background-color: rgba(48, 40, 37, 0.88);
  border-color: var(--color-deep-brown);
  backdrop-filter: blur(4px);
}

.arch-cursor-follower.mode-explore {
  width: 80px;
  height: 80px;
  background-color: rgba(169, 103, 80, 0.88);
  border-color: var(--color-clay);
  backdrop-filter: blur(4px);
}

.arch-cursor-follower.mode-active {
  width: 48px;
  height: 48px;
  background-color: rgba(201, 193, 181, 0.25);
  border-color: var(--color-clay);
}

a {
  color: inherit;
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-smooth);
}

button {
  font-family: inherit;
  border: none;
  background: none;
  cursor: pointer;
}

img {
  max-width: 100%;
  display: block;
  user-select: none;
}

/* ==========================================================================
   NAVIGATION
   ========================================================================== */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--grid-margin);
  background: rgba(238, 233, 225, 0.95);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--color-border);
  transition: background 0.4s var(--ease-architectural),
              box-shadow 0.4s var(--ease-architectural);
}

.site-header.scrolled {
  background: rgba(248, 245, 239, 0.96);
  box-shadow: 0 8px 24px rgba(48, 40, 37, 0.05);
}

.brand-container {
  display: flex;
  flex-direction: column;
}

.brand-title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-deep-brown);
  line-height: 1;
}

.brand-tagline {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-muted);
  margin-top: 4px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: clamp(1.5rem, 3vw, 3.5rem);
  list-style: none;
}

.nav-item a {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-deep-brown);
  position: relative;
  padding: 6px 0;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: color 0.3s ease;
}

.nav-item a:hover {
  color: var(--color-clay);
}

.nav-item a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-clay);
  transition: width 0.35s var(--ease-architectural);
}

.nav-item a.active::after {
  width: 100%;
}

.nav-item a.active {
  color: var(--color-clay);
}

.nav-cta-wrapper {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.btn-cta-nav {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--color-deep-brown);
  border: 1px solid var(--color-deep-brown);
  padding: 10px 22px;
  position: relative;
  overflow: hidden;
  background-color: transparent;
  transition: color 0.4s var(--ease-architectural), border-color 0.4s var(--ease-architectural);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-cta-nav::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-deep-brown);
  transform: translateY(100%);
  transition: transform 0.4s var(--ease-architectural);
  z-index: -1;
}

.btn-cta-nav:hover {
  color: var(--color-ivory);
}

.btn-cta-nav:hover::before {
  transform: translateY(0);
}

.mobile-toggle-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 1px solid var(--color-border);
  padding: 8px;
  z-index: 120;
}

.mobile-toggle-btn span {
  display: block;
  width: 20px;
  height: 1.5px;
  background-color: var(--color-deep-brown);
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.mobile-toggle-btn.open span:first-child {
  transform: translateY(6.5px) rotate(45deg);
}

.mobile-toggle-btn.open span:nth-child(2) {
  opacity: 0;
}

.mobile-toggle-btn.open span:last-child {
  transform: translateY(-6.5px) rotate(-45deg);
}

.mobile-nav-drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 380px;
  height: 100vh;
  background: var(--color-ivory);
  z-index: 110;
  padding: 5.5rem 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-left: 1px solid var(--color-border);
  transform: translateX(100%);
  transition: transform 0.4s var(--ease-architectural);
  box-shadow: -20px 0 60px rgba(48, 40, 37, 0.15);
}

.mobile-nav-drawer.open {
  transform: translateX(0);
}

.mobile-nav-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(48, 40, 37, 0.45);
  backdrop-filter: blur(4px);
  z-index: 105;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.mobile-nav-backdrop.open {
  opacity: 1;
  pointer-events: auto;
}

.mobile-links-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.mobile-links-list a {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-deep-brown);
  display: flex;
  align-items: baseline;
  gap: 12px;
}

.mobile-links-list a.active {
  color: var(--color-clay);
}

.mobile-links-list .mobile-index {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--color-clay);
}

.mobile-drawer-footer {
  border-top: 1px solid var(--color-border);
  padding-top: 1.25rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-muted);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* ==========================================================================
   HERO — DYNAMIC 2-COLUMN EXHIBITION (LAPTOP & DESKTOP)
   ========================================================================== */
.hero-section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding-top: calc(var(--header-height) + 1.5rem);
  padding-bottom: 2rem;
  padding-left: var(--grid-margin);
  padding-right: var(--grid-margin);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  background-color: var(--bg-primary);
  overflow: hidden;
}

.hero-subbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 0.85rem;
  width: 100%;
  gap: 1rem;
}

.hero-tag-badge {
  display: flex;
  align-items: center;
}

.hero-issue-tag {
  font-family: var(--font-mono);
  font-size: var(--text-meta);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-clay);
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.hero-issue-tag::before {
  content: '';
  display: inline-block;
  width: 14px;
  height: 1px;
  background-color: var(--color-clay);
}

.hero-meta-stamps-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.hero-pill-stamp {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.16em;
  color: var(--color-deep-brown);
  background: rgba(248, 245, 239, 0.85);
  border: 1px solid var(--color-border);
  padding: 4px 10px;
  backdrop-filter: blur(6px);
}

.hero-main-layout {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  align-items: center;
  gap: clamp(2rem, 4.5vw, 5rem);
  width: 100%;
  flex: 1;
  margin: 0.5rem 0;
}

.hero-typography-layer {
  position: relative;
  z-index: 5;
  width: 100%;
  will-change: transform;
}

.hero-title {
  font-family: var(--font-display);
  font-size: var(--text-hero);
  font-weight: 800;
  line-height: 0.88;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  color: var(--color-deep-brown);
  margin: 0;
  display: flex;
  flex-direction: column;
}

.title-line {
  display: block;
  overflow: hidden;
  white-space: nowrap;
}

.title-line span {
  display: inline-block;
}

.title-line.title-accent {
  color: var(--color-rust);
  font-family: var(--font-serif);
  font-weight: 400;
  letter-spacing: -0.01em;
  font-style: italic;
  padding-left: clamp(0.5rem, 2vw, 3rem);
}

.hero-visual-col {
  position: relative;
  width: 100%;
  height: clamp(380px, 56vh, 580px);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform;
}

.hero-visual-frame {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: var(--color-stone);
  border: 1px solid var(--color-border);
  box-shadow: 0 30px 70px -15px rgba(48, 40, 37, 0.18);
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(1.04);
  filter: contrast(1.04) brightness(0.98);
  transition: transform 1.2s var(--ease-architectural);
}

.hero-visual-col:hover .hero-image {
  transform: scale(1.07);
}

.visual-caption-badge {
  position: absolute;
  bottom: 16px;
  right: 16px;
  background: rgba(248, 245, 239, 0.94);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 8px 14px;
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 4;
}

.visual-caption-badge .badge-code {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.16em;
  color: var(--color-deep-brown);
  font-weight: 700;
}

.visual-caption-badge .badge-dot {
  width: 5px;
  height: 5px;
  background-color: var(--color-clay);
  border-radius: 50%;
  animation: pulse-dot 2.5s infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.85); }
}

.hero-metadata-bar {
  position: relative;
  z-index: 6;
  width: 100%;
  display: grid;
  grid-template-columns: 1.5fr 2fr 1fr;
  align-items: flex-end;
  border-top: 1px solid var(--color-border);
  padding-top: clamp(1rem, 1.8vh, 1.5rem);
  gap: var(--grid-gutter);
}

.meta-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.meta-label {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.meta-value {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--color-deep-brown);
  letter-spacing: 0.08em;
}

.meta-swatches {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 2px;
}

.swatch-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--color-muted);
  letter-spacing: 0.06em;
}

.swatch-box {
  width: 8px;
  height: 8px;
  border: 1px solid var(--color-border);
}

.swatch-stone { background-color: var(--color-stone); }
.swatch-clay  { background-color: var(--color-clay); }
.swatch-rust  { background-color: var(--color-rust); }

.hero-scroll-cue {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.scroll-enter-btn {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-deep-brown);
  font-weight: 600;
  transition: color 0.3s ease;
}

.scroll-enter-btn:hover {
  color: var(--color-clay);
}

.scroll-enter-arrow {
  font-size: 1.15rem;
  line-height: 1;
  color: var(--color-clay);
  animation: bounce-subtle 2s infinite ease-in-out;
}

@keyframes bounce-subtle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(5px); }
}

/* ==========================================================================
   MANIFESTO
   ========================================================================== */
.manifesto-section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: clamp(5rem, 12vh, 9rem) var(--grid-margin);
  background-color: #EEE9E1;
  border-top: 1px solid var(--color-border);
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.manifesto-stage {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.manifesto-header-bar {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 1rem;
  margin-bottom: clamp(2.5rem, 5vh, 4rem);
}

.manifesto-headline-block {
  display: flex;
  flex-direction: column;
  gap: clamp(1.75rem, 4vh, 3.5rem);
  margin-bottom: clamp(2.5rem, 5vh, 4rem);
}

.manifesto-statement {
  font-family: var(--font-display);
  font-size: var(--text-manifesto);
  font-weight: 800;
  line-height: 1.02;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: var(--color-deep-brown);
}

.manifesto-statement.statement-contrast {
  color: var(--color-clay);
  font-family: var(--font-serif);
  font-weight: 400;
  font-style: italic;
  letter-spacing: -0.01em;
  line-height: 1.08;
}

.manifesto-word-wrap {
  display: inline-block;
  overflow: hidden;
  margin-right: 0.28em;
  vertical-align: bottom;
}

.manifesto-word {
  display: inline-block;
  transition: opacity 0.7s var(--ease-architectural),
              transform 0.7s var(--ease-architectural),
              filter 0.7s var(--ease-architectural);
  will-change: opacity, transform, filter;
}

.manifesto-word.hidden {
  opacity: 0.12;
  transform: translateY(35%) scale(0.96);
  filter: blur(2px);
}

.manifesto-word.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
}

.manifesto-lead-container {
  max-width: 720px;
  border-left: 2px solid var(--color-clay);
  padding-left: clamp(1.25rem, 2.5vw, 2.25rem);
  margin-top: 1rem;
}

.manifesto-lead-text {
  font-family: var(--font-body);
  font-size: clamp(1.05rem, 1.3vw, 1.35rem);
  font-weight: 400;
  line-height: 1.6;
  color: var(--color-deep-brown);
}

/* ==========================================================================
   FEATURED PROJECT
   ========================================================================== */
.featured-project-section {
  position: relative;
  width: 100%;
  padding: clamp(5rem, 10vh, 8.5rem) var(--grid-margin);
  background-color: var(--color-ivory);
  border-top: 1px solid var(--color-border);
  z-index: 10;
  overflow: hidden;
}

.featured-header-bar {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 1.25rem;
  margin-bottom: clamp(2rem, 4vh, 3.5rem);
}

.featured-canvas-wrapper {
  position: relative;
  width: 100%;
  height: clamp(480px, 70vh, 780px);
  overflow: hidden;
  border: 1px solid var(--color-border);
  background-color: var(--color-deep-brown);
  margin-bottom: clamp(2rem, 3.5vh, 3.5rem);
  box-shadow: 0 40px 100px -25px rgba(48, 40, 37, 0.25);
}

.featured-image-plate {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 35%;
  will-change: transform;
  transform-origin: center center;
  transition: transform 0.15s linear;
}

.featured-overlay-content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: clamp(2rem, 5vw, 4.5rem);
  background: linear-gradient(to top, rgba(48, 40, 37, 0.92) 0%, rgba(48, 40, 37, 0.4) 60%, transparent 100%);
  color: var(--color-ivory);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: var(--grid-gutter);
  z-index: 2;
  will-change: transform;
}

.featured-titles-block {
  max-width: 680px;
}

.featured-location-tag {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-clay);
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

.featured-location-tag::before {
  content: '●';
  font-size: 0.6rem;
  color: var(--color-rust);
}

.featured-project-name {
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 5vw, 4.8rem);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: var(--color-ivory);
  margin-bottom: 1rem;
}

.featured-project-desc {
  font-family: var(--font-body);
  font-size: clamp(0.95rem, 1.15vw, 1.2rem);
  color: var(--color-stone);
  max-width: 520px;
  line-height: 1.55;
}

.btn-explore-project {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--color-ivory);
  background: rgba(169, 103, 80, 0.9);
  border: 1px solid var(--color-clay);
  padding: 16px 32px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  backdrop-filter: blur(8px);
  transition: background 0.35s var(--ease-architectural),
              transform 0.35s var(--ease-architectural),
              box-shadow 0.35s ease;
  white-space: nowrap;
}

.btn-explore-project:hover {
  background: var(--color-rust);
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(135, 76, 60, 0.4);
}

.btn-explore-project .arrow-icon {
  transition: transform 0.3s ease;
}

.btn-explore-project:hover .arrow-icon {
  transform: translateX(4px);
}

.featured-specs-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--grid-gutter);
  border-top: 1px solid var(--color-border);
  padding-top: 2rem;
}

.spec-column {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 1.25rem 0;
  border-left: 1px solid var(--color-border);
  padding-left: 1.5rem;
  transition: transform 0.4s var(--ease-architectural), opacity 0.4s ease;
}

.spec-column:first-child {
  border-left: none;
  padding-left: 0;
}

.spec-num {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--color-clay);
  font-weight: 700;
  letter-spacing: 0.16em;
}

.spec-heading {
  font-family: var(--font-mono);
  font-size: 0.88rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-deep-brown);
}

.spec-sub {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-muted);
  letter-spacing: 0.08em;
}

/* ==========================================================================
   PROJECT OVERLAY / VIEWER
   ========================================================================== */
.project-editorial-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--color-ivory);
  z-index: 2000;
  display: flex;
  flex-direction: column;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s var(--ease-architectural);
  overflow-y: auto;
}

.project-editorial-overlay.open {
  opacity: 1;
  pointer-events: auto;
}

.overlay-header-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem var(--grid-margin);
  border-bottom: 1px solid var(--color-border);
  background: rgba(248, 245, 239, 0.95);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 50;
}

.overlay-project-title {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-deep-brown);
}

.overlay-nav-tabs {
  display: flex;
  align-items: center;
  gap: clamp(1rem, 2.5vw, 2.5rem);
  list-style: none;
}

.overlay-tab-btn {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-muted);
  padding: 6px 0;
  position: relative;
  transition: color 0.3s;
}

.overlay-tab-btn.active {
  color: var(--color-clay);
  font-weight: 700;
}

.overlay-tab-btn.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--color-clay);
}

.overlay-controls {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.overlay-nav-arrow-btn {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-deep-brown);
  border: 1px solid var(--color-border);
  padding: 8px 14px;
  transition: background 0.3s, color 0.3s;
}

.overlay-nav-arrow-btn:hover {
  background: var(--color-deep-brown);
  color: var(--color-ivory);
}

.overlay-close-btn {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 700;
  background: var(--color-deep-brown);
  color: var(--color-ivory);
  border: 1px solid var(--color-deep-brown);
  padding: 8px 18px;
  transition: background 0.3s, border-color 0.3s;
}

.overlay-close-btn:hover {
  background: var(--color-clay);
  border-color: var(--color-clay);
}

.overlay-body-content {
  flex: 1;
  padding: clamp(2rem, 5vh, 4rem) var(--grid-margin);
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: clamp(2rem, 4vw, 5rem);
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
}

.overlay-image-gallery {
  position: relative;
  width: 100%;
  min-height: 500px;
  background: var(--color-stone);
  border: 1px solid var(--color-border);
  overflow: hidden;
}

.overlay-main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 500px;
  max-height: 72vh;
  transition: opacity 0.5s ease;
}

.overlay-slide-counter {
  position: absolute;
  bottom: 16px;
  right: 16px;
  background: rgba(48, 40, 37, 0.85);
  color: var(--color-ivory);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.15em;
  padding: 4px 12px;
  backdrop-filter: blur(6px);
}

.overlay-editorial-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.tab-badge {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--color-clay);
  letter-spacing: 0.22em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
  display: block;
}

.tab-headline {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.2vw, 3rem);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-deep-brown);
  line-height: 1.05;
  margin-bottom: 1.5rem;
}

.tab-paragraph {
  font-family: var(--font-body);
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--color-muted);
  margin-bottom: 2rem;
}

.overlay-meta-table {
  border-top: 1px solid var(--color-border);
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.overlay-meta-row {
  display: flex;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px dashed var(--color-border);
}

.overlay-meta-row .row-label {
  color: var(--color-muted);
  text-transform: uppercase;
}

.overlay-meta-row .row-val {
  color: var(--color-deep-brown);
  font-weight: 600;
}

/* ==========================================================================
   PROJECT INDEX & FLOATING PREVIEW
   ========================================================================== */
.project-index-section {
  position: relative;
  width: 100%;
  padding: clamp(5rem, 10vh, 8.5rem) var(--grid-margin);
  background-color: var(--bg-primary);
  border-top: 1px solid var(--color-border);
  z-index: 10;
}

.index-header-area {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 1.5rem;
  margin-bottom: 2.5rem;
  gap: 2rem;
  flex-wrap: wrap;
}

.index-title-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.index-supertitle {
  font-family: var(--font-mono);
  font-size: var(--text-meta);
  color: var(--color-clay);
  letter-spacing: 0.2em;
  font-weight: 600;
}

.index-main-title {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-deep-brown);
  line-height: 0.95;
  letter-spacing: -0.02em;
}

.project-filters-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.filter-btn {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  padding: 8px 16px;
  border: 1px solid var(--color-border);
  color: var(--color-muted);
  background: transparent;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  border-color: var(--color-deep-brown);
  color: var(--color-deep-brown);
}

.filter-btn.active {
  background: var(--color-deep-brown);
  color: var(--color-ivory);
  border-color: var(--color-deep-brown);
}

.project-vertical-list {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.project-row {
  position: relative;
  display: grid;
  grid-template-columns: 100px 1.5fr 1fr 60px;
  align-items: center;
  padding: clamp(1.5rem, 3vh, 2.5rem) 0;
  border-bottom: 1px solid var(--color-border);
  cursor: pointer;
  transition: transform 0.4s var(--ease-architectural), padding-left 0.4s var(--ease-architectural);
}

.project-row:hover {
  transform: translateX(12px);
  padding-left: 10px;
}

.row-index-num {
  font-family: var(--font-mono);
  font-size: clamp(1.1rem, 1.4vw, 1.6rem);
  font-weight: 700;
  color: var(--color-clay);
  letter-spacing: 0.12em;
  transition: transform 0.4s var(--ease-architectural), color 0.3s;
}

.project-row:hover .row-index-num {
  transform: scale(1.18);
  color: var(--color-rust);
}

.row-name {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 3.2vw, 3.2rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: var(--color-deep-brown);
  transition: color 0.3s ease;
}

.project-row:hover .row-name {
  color: var(--color-rust);
}

.row-category-tag {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-muted);
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0.65;
  transition: opacity 0.3s, color 0.3s;
}

.project-row:hover .row-category-tag {
  opacity: 1;
  color: var(--color-deep-brown);
}

.row-arrow {
  font-family: var(--font-mono);
  font-size: 1.25rem;
  color: var(--color-stone);
  text-align: right;
  transition: transform 0.4s var(--ease-architectural), color 0.3s;
}

.project-row:hover .row-arrow {
  transform: translateX(6px);
  color: var(--color-clay);
}

.project-floating-preview {
  position: fixed;
  top: 0;
  left: 0;
  width: 320px;
  height: 220px;
  pointer-events: none;
  z-index: 950;
  border: 1px solid var(--color-border);
  background: var(--color-stone);
  box-shadow: 0 25px 60px rgba(48, 40, 37, 0.28);
  overflow: hidden;
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.92);
  transition: opacity 0.35s ease, transform 0.35s ease;
  will-change: left, top, opacity, transform;
}

.project-floating-preview.visible {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

.floating-preview-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ==========================================================================
   MATERIAL / PROCESS & TIMELINE
   ========================================================================== */
.material-process-section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: clamp(5rem, 10vh, 8.5rem) var(--grid-margin);
  background-color: var(--color-deep-brown);
  color: var(--color-ivory);
  border-top: 1px solid rgba(248, 245, 239, 0.15);
  z-index: 10;
  display: flex;
  flex-direction: column;
}

.material-header-bar {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid rgba(248, 245, 239, 0.15);
  padding-bottom: 1.25rem;
  margin-bottom: 2.5rem;
}

.material-title-wrap {
  margin-bottom: clamp(1.75rem, 3.5vh, 3rem);
}

.material-section-title {
  font-family: var(--font-display);
  font-size: clamp(2.6rem, 5.5vw, 6rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  line-height: 0.92;
  color: var(--color-ivory);
}

.material-nav-pills {
  display: flex;
  gap: clamp(0.75rem, 1.5vw, 2rem);
  flex-wrap: wrap;
  margin-bottom: clamp(2rem, 4vh, 3.5rem);
  border-bottom: 1px solid rgba(248, 245, 239, 0.12);
  padding-bottom: 1.5rem;
}

.material-tab-btn {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-stone);
  padding: 10px 20px;
  border: 1px solid rgba(248, 245, 239, 0.2);
  background: transparent;
  transition: all 0.3s ease;
  position: relative;
}

.material-tab-btn:hover {
  border-color: var(--color-clay);
  color: var(--color-ivory);
}

.material-tab-btn.active {
  background: var(--color-clay);
  color: var(--color-ivory);
  border-color: var(--color-clay);
  font-weight: 700;
}

.material-hero-surface {
  position: relative;
  width: 100%;
  height: clamp(500px, 68vh, 800px);
  border: 1px solid rgba(248, 245, 239, 0.18);
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  background-color: #1a1614;
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.6);
}

.material-macro-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: background 1s ease, filter 1s ease;
  animation: slow-material-breathe 22s infinite alternate ease-in-out;
}

@keyframes slow-material-breathe {
  0% { transform: scale(1) translate(0, 0); }
  50% { transform: scale(1.05) translate(-1%, 1%); }
  100% { transform: scale(1.02) translate(1%, -1%); }
}

.material-lighting-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 35% 35%, rgba(255, 245, 230, 0.12) 0%, transparent 60%),
              linear-gradient(to top, rgba(26, 22, 20, 0.95) 0%, rgba(26, 22, 20, 0.4) 50%, transparent 100%);
  pointer-events: none;
}

.material-surface-content {
  position: relative;
  z-index: 5;
  width: 100%;
  padding: clamp(2rem, 5vw, 4.5rem);
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: var(--grid-gutter);
  align-items: flex-end;
}

.mat-title {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 5.5vw, 5.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 0.9;
  text-transform: uppercase;
  color: var(--color-ivory);
  margin-bottom: 0.75rem;
}

.mat-essence {
  font-family: var(--font-serif);
  font-size: clamp(1.2rem, 1.8vw, 1.85rem);
  font-style: italic;
  color: var(--color-clay);
  margin-bottom: 1rem;
  letter-spacing: 0.02em;
}

.mat-description {
  font-family: var(--font-body);
  font-size: clamp(0.95rem, 1.15vw, 1.15rem);
  line-height: 1.65;
  color: var(--color-stone);
  max-width: 580px;
}

.mat-metadata-card {
  background: rgba(48, 40, 37, 0.75);
  border: 1px solid rgba(248, 245, 239, 0.15);
  padding: 1.75rem;
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mat-meta-item {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.mat-meta-label {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-clay);
}

.mat-meta-value {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--color-ivory);
}

.drawing-schematic-wrapper {
  background: rgba(48, 40, 37, 0.85);
  border: 1px solid rgba(248, 245, 239, 0.18);
  padding: clamp(1.25rem, 2.5vw, 2rem);
  margin-bottom: 2.5rem;
  position: relative;
}

.schematic-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(248, 245, 239, 0.15);
  padding-bottom: 0.85rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.schematic-breadcrumbs {
  display: flex;
  gap: 10px;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  color: var(--color-stone);
}

.schematic-crumb.active {
  color: var(--color-clay);
  font-weight: 700;
}

.schematic-indicator {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  color: var(--color-muted);
}

.schematic-canvas-box {
  width: 100%;
  height: clamp(260px, 36vh, 380px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.schematic-svg {
  width: 100%;
  height: 100%;
  max-width: 900px;
}

.schematic-layer {
  opacity: 0;
  transition: opacity 0.6s var(--ease-architectural);
}

.schematic-layer.visible {
  opacity: 1;
}

.horizontal-process-timeline {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--grid-gutter);
  border-top: 1px solid rgba(248, 245, 239, 0.18);
  padding-top: 2rem;
}

.timeline-stage-card {
  border: 1px solid rgba(248, 245, 239, 0.12);
  padding: 1.75rem 1.25rem;
  background: rgba(48, 40, 37, 0.4);
  cursor: pointer;
  transition: all 0.35s var(--ease-architectural);
}

.timeline-stage-card:hover,
.timeline-stage-card.active {
  border-color: var(--color-clay);
  background: rgba(169, 103, 80, 0.12);
  transform: translateY(-4px);
}

.stage-top-meta {
  display: flex;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--color-clay);
  margin-bottom: 1rem;
  letter-spacing: 0.16em;
}

.stage-title {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-ivory);
  margin-bottom: 0.5rem;
}

.stage-desc {
  font-family: var(--font-body);
  font-size: 0.85rem;
  line-height: 1.55;
  color: var(--color-stone);
}

/* ==========================================================================
   STUDIO SECTION & LANYARD
   ========================================================================== */
.studio-section {
  position: relative;
  width: 100%;
  padding: clamp(5rem, 10vh, 8.5rem) var(--grid-margin);
  background-color: var(--bg-primary);
  border-top: 1px solid var(--color-border);
  z-index: 10;
}

.studio-hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: clamp(2.5rem, 5vw, 5rem);
  margin-bottom: clamp(3rem, 6vh, 5rem);
}

.studio-editorial-heading {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 4.5vw, 4.8rem);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: var(--color-deep-brown);
  margin-bottom: 1.75rem;
}

.studio-body-p {
  font-family: var(--font-body);
  font-size: clamp(1rem, 1.25vw, 1.3rem);
  line-height: 1.6;
  color: var(--color-deep-brown);
  margin-bottom: 1.25rem;
}

.studio-body-p.sub {
  color: var(--color-muted);
}

.studio-stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--grid-gutter);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  padding: 2rem 0;
  margin-top: 2.5rem;
}

.studio-stat-box {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-number {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.2vw, 3.5rem);
  font-weight: 800;
  color: var(--color-rust);
  line-height: 1;
}

.stat-label {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-deep-brown);
  font-weight: 600;
}

.studio-visual-col {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.studio-layered-visual {
  position: relative;
  width: 100%;
  height: clamp(320px, 42vh, 480px);
  border: 1px solid var(--color-border);
  background: var(--color-stone);
  overflow: hidden;
  box-shadow: 0 30px 80px -20px rgba(48, 40, 37, 0.2);
}

.studio-base-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: contrast(1.06) brightness(0.96);
}

.studio-tracing-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border: 10px solid rgba(248, 245, 239, 0.6);
  display: flex;
  justify-content: space-between;
  padding: 12px;
}

.blueprint-stamp,
.blueprint-stamp-right {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  color: var(--color-deep-brown);
  background: rgba(248, 245, 239, 0.9);
  padding: 4px 8px;
  height: fit-content;
  border: 1px solid var(--color-border);
}

.lanyard-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
}

.lanyard-strap {
  width: 24px;
  height: 50px;
  background: repeating-linear-gradient(
    45deg,
    #302825,
    #302825 6px,
    #A96750 6px,
    #A96750 12px
  );
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.lanyard-clip {
  width: 30px;
  height: 12px;
  background: linear-gradient(to bottom, #d6d0c7, #8c857b);
  border: 1px solid #5a544d;
  border-radius: 2px;
  margin-bottom: -4px;
  z-index: 5;
}

.lanyard-card {
  width: 100%;
  max-width: 320px;
  background: var(--color-ivory);
  border: 1px solid var(--color-border);
  box-shadow: 0 20px 50px rgba(48, 40, 37, 0.2);
  padding: 1.5rem 1.25rem;
  transform-style: preserve-3d;
  cursor: grab;
  position: relative;
}

.lanyard-card.hovered {
  box-shadow: 0 30px 70px rgba(169, 103, 80, 0.3);
}

.lanyard-card-inner {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.card-top-slot {
  width: 40px;
  height: 5px;
  background: var(--color-stone);
  border-radius: 3px;
  margin: 0 auto;
}

.card-badge-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 0.65rem;
}

.card-brand {
  font-family: var(--font-display);
  font-weight: 800;
  letter-spacing: 0.2em;
  font-size: 1.05rem;
  color: var(--color-deep-brown);
}

.card-year {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--color-clay);
  font-weight: 700;
}

.card-pass-type {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.pass-title {
  font-family: var(--font-display);
  font-size: 1.45rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  color: var(--color-deep-brown);
  line-height: 1;
}

.pass-meta {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.18em;
  color: var(--color-clay);
}

.card-barcode-box {
  background: rgba(201, 193, 181, 0.2);
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  border: 1px dashed var(--color-border);
}

.barcode-bars {
  width: 100%;
  height: 24px;
  background: repeating-linear-gradient(
    90deg,
    #302825 0px,
    #302825 3px,
    transparent 3px,
    transparent 5px,
    #302825 5px,
    #302825 8px,
    transparent 8px,
    transparent 10px
  );
}

.barcode-code {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.25em;
  color: var(--color-muted);
}

.card-footer-project {
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-top: 1px solid var(--color-border);
  padding-top: 0.65rem;
}

.proj-label {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.18em;
  color: var(--color-clay);
}

.proj-val {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-deep-brown);
}

.proj-loc {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--color-muted);
}

.studio-team-area {
  border-top: 1px solid var(--color-border);
  padding-top: 3rem;
}

.team-header-line {
  display: flex;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  color: var(--color-clay);
  margin-bottom: 1.75rem;
}

.team-typography-list {
  display: flex;
  flex-direction: column;
}

.team-member-row {
  position: relative;
  display: grid;
  grid-template-columns: 1.3fr 2fr;
  align-items: baseline;
  padding: 2rem 0;
  border-bottom: 1px solid var(--color-border);
  cursor: pointer;
  transition: transform 0.3s var(--ease-architectural);
}

.team-member-row:hover {
  transform: translateX(8px);
}

.member-main-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.member-name {
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 2.3vw, 2.2rem);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-deep-brown);
  letter-spacing: -0.01em;
  transition: color 0.3s;
}

.team-member-row:hover .member-name {
  color: var(--color-clay);
}

.member-role {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-clay);
  font-weight: 600;
}

.member-bio {
  font-family: var(--font-body);
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--color-muted);
  max-width: 600px;
}

.member-hover-portrait {
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%) scale(0.85);
  width: 76px;
  height: 76px;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.3s var(--ease-architectural);
  box-shadow: 0 10px 25px rgba(48, 40, 37, 0.2);
}

.member-hover-portrait.show {
  opacity: 1;
  transform: translateY(-50%) scale(1);
}

.portrait-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-ivory);
}

.portrait-monogram {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 800;
}

.portrait-fictional-tag {
  font-family: var(--font-mono);
  font-size: 0.45rem;
  letter-spacing: 0.1em;
  opacity: 0.8;
}

/* ==========================================================================
   25 — FINAL CTA SECTION
   ========================================================================== */
.final-cta-section {
  position: relative;
  width: 100%;
  min-height: 80vh;
  padding: clamp(6rem, 12vh, 10rem) var(--grid-margin);
  background-color: var(--bg-primary);
  border-top: 1px solid var(--color-border);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.final-cta-container {
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.final-cta-headline {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 6.5vw, 6.8rem);
  font-weight: 800;
  line-height: 0.92;
  letter-spacing: -0.035em;
  text-transform: uppercase;
  color: var(--color-deep-brown);
  margin-bottom: 1.75rem;
}

.final-cta-sub {
  font-family: var(--font-serif);
  font-size: clamp(1.3rem, 2vw, 2rem);
  font-style: italic;
  color: var(--color-clay);
  max-width: 680px;
  margin-bottom: 3rem;
  line-height: 1.4;
}

.final-cta-buttons {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-cta-primary {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--color-ivory);
  background: var(--color-deep-brown);
  border: 1px solid var(--color-deep-brown);
  padding: 18px 36px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  transition: all 0.4s var(--ease-architectural);
}

.btn-cta-primary:hover {
  background: var(--color-clay);
  border-color: var(--color-clay);
  transform: translateY(-3px);
  box-shadow: 0 16px 40px rgba(169, 103, 80, 0.35);
}

.btn-cta-secondary {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--color-deep-brown);
  border: 1px solid var(--color-deep-brown);
  padding: 18px 36px;
  display: inline-flex;
  align-items: center;
  transition: all 0.4s var(--ease-architectural);
}

.btn-cta-secondary:hover {
  background: var(--color-deep-brown);
  color: var(--color-ivory);
  transform: translateY(-3px);
}

/* ==========================================================================
   26 — PROJECT INQUIRY MODAL
   ========================================================================== */
.inquiry-modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(48, 40, 37, 0.85);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  z-index: 2500;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(1.25rem, 3.5vw, 3rem);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s var(--ease-architectural);
}

.inquiry-modal-backdrop.open {
  opacity: 1;
  pointer-events: auto;
}

.inquiry-modal-sheet {
  position: relative;
  width: 100%;
  max-width: 860px;
  max-height: 90vh;
  background: var(--color-ivory);
  border: 1px solid var(--color-border);
  box-shadow: 0 40px 120px rgba(0, 0, 0, 0.45);
  overflow-y: auto;
  padding: clamp(1.75rem, 4vw, 3.5rem);
  transform: translateY(30px) scale(0.98);
  transition: transform 0.4s var(--ease-architectural);
}

.inquiry-modal-backdrop.open .inquiry-modal-sheet {
  transform: translateY(0) scale(1);
}

.inquiry-close-btn {
  position: sticky;
  top: 0;
  float: right;
  z-index: 20;
  width: 40px;
  height: 40px;
  background: var(--color-deep-brown);
  color: var(--color-ivory);
  border: 1px solid var(--color-deep-brown);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
  margin-top: -0.75rem;
  margin-right: -0.75rem;
}

.inquiry-close-btn:hover {
  background: var(--color-clay);
  transform: rotate(90deg);
}

.inquiry-header {
  margin-bottom: 2rem;
}

.inquiry-eyebrow {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  color: var(--color-clay);
  text-transform: uppercase;
  margin-bottom: 0.4rem;
  display: block;
}

.inquiry-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.8vw, 3.2rem);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-deep-brown);
  line-height: 0.95;
  margin-bottom: 0.65rem;
}

.inquiry-lead {
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: var(--color-muted);
}

.inquiry-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form-field-full {
  grid-column: 1 / -1;
}

.field-label {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-deep-brown);
  font-weight: 600;
}

.field-input,
.field-select,
.field-textarea {
  width: 100%;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--color-deep-brown);
  background: transparent;
  border: 1px solid var(--color-border);
  padding: 12px 14px;
  outline: none;
  transition: border-color 0.3s, background-color 0.3s;
  border-radius: 0;
}

.field-input:focus,
.field-select:focus,
.field-textarea:focus {
  border-color: var(--color-clay);
  background-color: rgba(255, 255, 255, 0.5);
}

.field-input.has-error,
.field-textarea.has-error {
  border-color: #c94030;
}

.field-error {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: #c94030;
  letter-spacing: 0.05em;
}

.form-action-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--color-border);
  padding-top: 1.5rem;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-submit-inquiry {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--color-ivory);
  background: var(--color-deep-brown);
  border: 1px solid var(--color-deep-brown);
  padding: 15px 32px;
  cursor: pointer;
  transition: all 0.3s var(--ease-architectural);
}

.btn-submit-inquiry:hover {
  background: var(--color-clay);
  border-color: var(--color-clay);
}

.btn-submit-inquiry:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.inquiry-disclaimer {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  color: var(--color-muted);
}

.inquiry-success-box {
  padding: 2.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.success-badge {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  color: var(--color-clay);
  margin-bottom: 0.85rem;
}

.success-heading {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 4.5vw, 3.6rem);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-deep-brown);
  margin-bottom: 0.4rem;
}

.success-sub {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-style: italic;
  color: var(--color-rust);
  margin-bottom: 1.25rem;
}

.success-body {
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--color-muted);
  max-width: 520px;
  line-height: 1.6;
}

/* ==========================================================================
   27 — MINIMAL FOOTER
   ========================================================================== */
.site-footer {
  background-color: var(--color-deep-brown);
  color: var(--color-ivory);
  padding: clamp(4.5rem, 8vh, 7rem) var(--grid-margin) 2.5rem;
  border-top: 1px solid rgba(248, 245, 239, 0.12);
  position: relative;
  z-index: 10;
}

.footer-minimal-container {
  display: flex;
  flex-direction: column;
  gap: clamp(3.5rem, 6vh, 5rem);
}

.footer-main-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4rem;
  flex-wrap: wrap;
}

.footer-col-left {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.footer-huge-brand {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 8.5vw, 9.5rem);
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-ivory);
  line-height: 0.85;
}

.footer-tagline-block {
  display: flex;
  flex-direction: column;
  font-family: var(--font-mono);
  font-size: clamp(0.85rem, 1.2vw, 1.25rem);
  letter-spacing: 0.22em;
  color: var(--color-clay);
  line-height: 1.4;
  text-transform: uppercase;
  font-weight: 600;
}

.footer-minimal-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: flex-end;
}

.footer-minimal-links a,
.footer-link-btn {
  font-family: var(--font-mono);
  font-size: clamp(0.9rem, 1.2vw, 1.2rem);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-stone);
  transition: color 0.3s;
}

.footer-minimal-links a:hover,
.footer-link-btn:hover {
  color: var(--color-ivory);
}

.footer-bottom-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.75rem;
  border-top: 1px solid rgba(248, 245, 239, 0.14);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  color: var(--color-stone);
  opacity: 0.75;
}

/* ==========================================================================
   38 — TOAST FEEDBACK
   ========================================================================== */
.monolith-toast {
  position: fixed;
  bottom: 2rem;
  right: var(--grid-margin);
  z-index: 3000;
  pointer-events: none;
  animation: toast-slide-up 0.35s var(--ease-architectural) forwards;
}

@keyframes toast-slide-up {
  from {
    opacity: 0;
    transform: translateY(14px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.toast-inner {
  background: rgba(48, 40, 37, 0.94);
  color: var(--color-ivory);
  border: 1px solid var(--color-clay);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 10px 18px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 16px 36px rgba(48, 40, 37, 0.3);
}

.toast-dot {
  width: 6px;
  height: 6px;
  background-color: var(--color-clay);
  border-radius: 50%;
  animation: pulse-dot 2s infinite ease-in-out;
}

.toast-label {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 600;
}

/* ==========================================================================
   32 — DYNAMIC RESPONSIVE BREAKPOINTS
   Desktop: 1440px+
   Laptop: 1025px–1439px
   Tablet: 768px–1024px
   Mobile: 360px–767px
   ========================================================================== */
@media (min-width: 1440px) {
  :root {
    --grid-margin: 4.5rem;
    --grid-gutter: 2.75rem;
    --text-hero: clamp(3.2rem, 6vw, 6.6rem);
  }
  .hero-main-layout {
    grid-template-columns: 1.15fr 1fr;
    gap: 5rem;
  }
  .hero-visual-col {
    height: clamp(420px, 60vh, 620px);
  }
}

@media (min-width: 1025px) and (max-width: 1439px) {
  :root {
    --grid-margin: 2.5rem;
    --text-hero: clamp(2.6rem, 5vw, 5.2rem);
  }
  .hero-main-layout {
    grid-template-columns: 1.15fr 1fr;
    gap: 3rem;
  }
  .hero-visual-col {
    height: clamp(340px, 50vh, 480px);
  }
}

/* Tablet (768px–1024px) */
@media (max-width: 1024px) {
  .hero-section {
    min-height: auto;
    padding-top: calc(var(--header-height) + 1.25rem);
    padding-bottom: 2rem;
    gap: 1.5rem;
  }
  .hero-meta-stamps-row {
    display: none;
  }
  .hero-main-layout {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .hero-visual-col {
    height: clamp(280px, 45vh, 400px);
  }
  .hero-title {
    font-size: clamp(2.4rem, 8.5vw, 4rem);
  }
  .title-line.title-accent {
    padding-left: 0;
  }
  .hero-metadata-bar {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
  .meta-swatches-group {
    display: none;
  }
  .horizontal-process-timeline {
    grid-template-columns: repeat(3, 1fr);
  }
  .featured-specs-grid {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
  .overlay-body-content {
    grid-template-columns: 1fr;
  }
  .material-surface-content {
    grid-template-columns: 1fr;
  }
  .project-row {
    grid-template-columns: 70px 1.5fr 1fr 40px;
  }
  .studio-hero-grid {
    grid-template-columns: 1fr;
  }
  .studio-stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .team-member-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .member-hover-portrait {
    display: none;
  }
}

@media (max-width: 900px) {
  .nav-links {
    display: none;
  }
  .mobile-toggle-btn {
    display: flex;
  }
  .btn-cta-nav {
    display: none;
  }
  .featured-overlay-content {
    flex-direction: column;
    align-items: flex-start;
  }
  .btn-explore-project {
    width: 100%;
    justify-content: center;
  }
  .project-floating-preview {
    display: none !important;
  }
  .project-row {
    grid-template-columns: 50px 1fr auto;
  }
  .row-category-tag {
    display: none;
  }
  .arch-cursor-follower, .arch-cursor-dot {
    display: none !important;
  }
  .footer-minimal-links {
    align-items: flex-start;
  }
  .footer-main-row {
    flex-direction: column;
    gap: 2.5rem;
  }
}

/* Mobile (360px–767px) */
@media (max-width: 767px) {
  :root {
    --grid-margin: 1.25rem;
    --header-height: 64px;
  }

  /* Header */
  .site-header {
    height: var(--header-height);
  }
  .brand-title {
    font-size: 1.05rem;
    letter-spacing: 0.2em;
  }
  .brand-tagline {
    display: none;
  }

  /* Hero Section */
  .hero-section {
    padding: calc(var(--header-height) + 1.25rem) var(--grid-margin) 2rem;
    height: auto;
    min-height: auto;
    gap: 1.25rem;
  }
  .hero-subbar {
    padding-bottom: 0.65rem;
  }
  .hero-main-layout {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  .hero-title {
    font-size: clamp(2.35rem, 9.2vw, 3.5rem);
    line-height: 0.94;
    letter-spacing: -0.03em;
  }
  .hero-visual-col {
    height: clamp(220px, 42vh, 310px);
    width: 100%;
    margin: 0.25rem 0;
  }
  .visual-caption-badge {
    bottom: 10px;
    right: 10px;
    padding: 5px 10px;
    font-size: 0.62rem;
  }
  .hero-metadata-bar {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding-top: 1rem;
    margin-top: 0.25rem;
  }
  .hero-scroll-cue {
    justify-content: flex-start;
  }

  /* Section Spacing */
  .manifesto-section {
    padding: 3.25rem var(--grid-margin);
    min-height: auto;
  }
  .manifesto-header-bar {
    margin-bottom: 1.75rem;
  }
  .manifesto-headline-block {
    margin-bottom: 1.75rem;
    gap: 1.25rem;
  }
  .manifesto-statement {
    font-size: clamp(1.75rem, 6.5vw, 2.4rem);
    line-height: 1.06;
  }
  .manifesto-lead-container {
    padding-left: 0.85rem;
    margin-top: 0.75rem;
  }
  .manifesto-lead-text {
    font-size: 0.98rem;
    line-height: 1.55;
  }

  .featured-project-section {
    padding: 3.25rem var(--grid-margin);
  }
  .featured-header-bar {
    margin-bottom: 1.25rem;
  }
  .featured-canvas-wrapper {
    height: clamp(280px, 46vh, 360px);
    margin-bottom: 1.25rem;
  }
  .featured-overlay-content {
    padding: 1.25rem 1rem;
    gap: 0.85rem;
  }
  .featured-project-name {
    font-size: clamp(1.75rem, 6.5vw, 2.3rem);
    margin-bottom: 0.4rem;
  }
  .featured-project-desc {
    font-size: 0.85rem;
    line-height: 1.45;
  }
  .btn-explore-project {
    padding: 12px 20px;
    font-size: 0.75rem;
  }
  .featured-specs-grid {
    grid-template-columns: 1fr;
    padding-top: 1rem;
    gap: 0;
  }
  .spec-column {
    border-left: none;
    padding-left: 0;
    border-top: 1px solid var(--color-border);
    padding: 0.85rem 0;
  }

  /* Horizontal Scrolling Filters */
  .project-index-section {
    padding: 3.25rem var(--grid-margin);
  }
  .index-header-area {
    margin-bottom: 1.5rem;
    padding-bottom: 0.85rem;
    gap: 1rem;
  }
  .index-main-title {
    font-size: clamp(2rem, 7vw, 2.6rem);
  }
  .project-filters-bar {
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    width: 100%;
    padding-bottom: 6px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .project-filters-bar::-webkit-scrollbar {
    display: none;
  }
  .filter-btn {
    flex-shrink: 0;
    padding: 6px 14px;
    font-size: 0.68rem;
  }
  .project-row {
    padding: 1.2rem 0;
    grid-template-columns: 40px 1fr auto;
  }
  .row-index-num {
    font-size: 0.95rem;
  }
  .row-name {
    font-size: clamp(1.2rem, 5vw, 1.7rem);
  }

  /* Materials & Process */
  .material-process-section {
    padding: 3.25rem var(--grid-margin);
    min-height: auto;
  }
  .material-header-bar {
    margin-bottom: 1.25rem;
    padding-bottom: 0.85rem;
  }
  .material-section-title {
    font-size: clamp(1.9rem, 6.5vw, 2.8rem);
  }
  .material-nav-pills {
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    gap: 0.5rem;
  }
  .material-tab-btn {
    padding: 7px 14px;
    font-size: 0.72rem;
  }
  .material-hero-surface {
    height: auto;
    min-height: 420px;
  }
  .material-surface-content {
    padding: 1.25rem;
    gap: 1.25rem;
  }
  .mat-title {
    font-size: clamp(1.9rem, 6.5vw, 2.8rem);
  }
  .mat-essence {
    font-size: 1.15rem;
  }
  .mat-description {
    font-size: 0.9rem;
    line-height: 1.5;
  }
  .mat-metadata-card {
    padding: 1.1rem;
    gap: 0.75rem;
  }
  .drawing-schematic-wrapper {
    padding: 1.1rem;
    margin-bottom: 2rem;
  }
  .schematic-canvas-box {
    height: 200px;
  }
  .schematic-breadcrumbs {
    flex-wrap: wrap;
    gap: 6px;
    font-size: 0.65rem;
  }
  .horizontal-process-timeline {
    grid-template-columns: 1fr;
    padding-top: 1.25rem;
    gap: 0.85rem;
  }
  .timeline-stage-card {
    padding: 1.2rem 1rem;
  }

  /* Studio & Team */
  .studio-section {
    padding: 3.25rem var(--grid-margin);
  }
  .studio-hero-grid {
    gap: 1.75rem;
    margin-bottom: 2rem;
  }
  .studio-editorial-heading {
    font-size: clamp(1.9rem, 6.5vw, 2.6rem);
    margin-bottom: 1rem;
  }
  .studio-body-p {
    font-size: 0.92rem;
    line-height: 1.5;
  }
  .studio-stats-grid {
    padding: 1.25rem 0;
    margin-top: 1.25rem;
    gap: 0.75rem;
  }
  .stat-number {
    font-size: clamp(1.7rem, 6vw, 2.2rem);
  }
  .studio-layered-visual {
    height: 220px;
  }
  .studio-team-area {
    padding-top: 1.75rem;
  }
  .team-member-row {
    padding: 1.25rem 0;
    gap: 0.35rem;
  }
  .member-name {
    font-size: 1.25rem;
  }
  .member-bio {
    font-size: 0.88rem;
  }

  /* Final CTA */
  .final-cta-section {
    padding: 3.5rem var(--grid-margin);
    min-height: auto;
  }
  .final-cta-headline {
    font-size: clamp(2.1rem, 7.5vw, 3rem);
    margin-bottom: 1rem;
  }
  .final-cta-sub {
    font-size: 1.15rem;
    margin-bottom: 1.75rem;
  }
  .final-cta-buttons {
    flex-direction: column;
    width: 100%;
    gap: 0.75rem;
  }
  .btn-cta-primary,
  .btn-cta-secondary {
    width: 100%;
    justify-content: center;
    padding: 14px 24px;
    font-size: 0.78rem;
  }

  /* Modals */
  .inquiry-modal-sheet {
    padding: 1.5rem 1.15rem;
    max-height: 92vh;
  }
  .inquiry-close-btn {
    margin-top: -0.5rem;
    margin-right: -0.5rem;
  }
  .form-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  /* Footer */
  .site-footer {
    padding: 3rem var(--grid-margin) 2rem;
  }
  .footer-minimal-container {
    gap: 2.25rem;
  }
  .footer-huge-brand {
    font-size: clamp(2.8rem, 13vw, 4.5rem);
  }
  .footer-bottom-line {
    flex-direction: column;
    gap: 0.75rem;
    align-items: flex-start;
  }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  .arch-cursor-follower, .arch-cursor-dot {
    display: none !important;
  }
  .manifesto-word {
    opacity: 1 !important;
    transform: none !important;
    filter: none !important;
  }
  .featured-image-plate {
    transform: none !important;
  }
  .material-macro-canvas {
    animation: none !important;
  }
}
`,Fc=H.createContext(void 0),qd=({children:g})=>{const[j,d]=H.useState({message:"",visible:!1}),v=H.useCallback(E=>{d({message:E,visible:!0});const y=setTimeout(()=>{d(b=>({...b,visible:!1}))},2400);return()=>clearTimeout(y)},[]);return i.jsxs(Fc.Provider,{value:{showToast:v},children:[g,j.visible&&i.jsx("div",{className:"monolith-toast",role:"status","aria-live":"polite",children:i.jsxs("div",{className:"toast-inner",children:[i.jsx("span",{className:"toast-dot"}),i.jsx("span",{className:"toast-label",children:j.message})]})})]})},Lo=()=>{const g=H.useContext(Fc);return g||{showToast:()=>{}}},Kd=()=>{const g=H.useRef(null);return H.useEffect(()=>{if(!window.matchMedia("(pointer: fine)").matches||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const j=g.current;if(!j)return;const d=j.getContext("2d");let v=j.width=window.innerWidth,E=j.height=window.innerHeight;const y=()=>{v=j.width=window.innerWidth,E=j.height=window.innerHeight};window.addEventListener("resize",y,{passive:!0});const b=["rgba(169, 103, 80, 0.45)","rgba(135, 76, 60, 0.4)","rgba(201, 193, 181, 0.35)","rgba(248, 245, 239, 0.4)"],R=[];let I=0,U=0;const A=(_,T)=>{const C=Math.random()*Math.PI*2,ye=Math.random()*1.5+.3;R.push({x:_,y:T,vx:Math.cos(C)*ye,vy:Math.sin(C)*ye,size:Math.random()*2.8+1,color:b[Math.floor(Math.random()*b.length)],life:1,decay:Math.random()*.02+.015})},B=_=>{if(Math.hypot(_.clientX-I,_.clientY-U)>6){for(let C=0;C<2;C++)A(_.clientX+(Math.random()-.5)*8,_.clientY+(Math.random()-.5)*8);I=_.clientX,U=_.clientY}};window.addEventListener("mousemove",B,{passive:!0});let $;const J=()=>{d.clearRect(0,0,v,E);for(let _=R.length-1;_>=0;_--){const T=R[_];T.x+=T.vx,T.y+=T.vy,T.life-=T.decay,T.life<=0?R.splice(_,1):(d.save(),d.globalAlpha=T.life,d.fillStyle=T.color,d.beginPath(),d.arc(T.x,T.y,T.size*T.life,0,Math.PI*2),d.fill(),d.restore())}$=requestAnimationFrame(J)};return $=requestAnimationFrame(J),()=>{window.removeEventListener("resize",y),window.removeEventListener("mousemove",B),cancelAnimationFrame($)}},[]),i.jsx("canvas",{ref:g,style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",pointerEvents:"none",zIndex:998},"aria-hidden":"true"})},Xd=({text:g="SPACE"})=>{const j=H.useRef(null),d=H.useRef(null),[v,E]=H.useState(!1);return H.useEffect(()=>{const y=new IntersectionObserver(([b])=>{b.isIntersecting&&E(!0)},{threshold:.3});return d.current&&y.observe(d.current),()=>y.disconnect()},[]),H.useEffect(()=>{const y=j.current;if(!y||!v)return;const b=y.getContext("2d"),R=window.devicePixelRatio||1,I=y.getBoundingClientRect();y.width=I.width*R,y.height=I.height*R,b.scale(R,R);const U=I.width,A=I.height,B=document.createElement("canvas");B.width=U,B.height=A;const $=B.getContext("2d"),J=Math.min(U*.22,160);$.fillStyle="#302825",$.font=`800 ${J}px 'Syne', sans-serif`,$.textAlign="center",$.textBaseline="middle",$.fillText(g,U/2,A/2);const _=$.getImageData(0,0,U,A).data,T=[],C=6;for(let Q=0;Q<A;Q+=C)for(let ce=0;ce<U;ce+=C){const he=(Q*U+ce)*4;_[he+3]>128&&T.push({x:ce,y:Q})}const ye=T.map(Q=>{const ce=Math.random()*Math.PI*2,he=Math.random()*300+150;return{x:U/2+Math.cos(ce)*he,y:A/2+Math.sin(ce)*he,targetX:Q.x,targetY:Q.y,vx:0,vy:0,color:Math.random()>.3?"#302825":"#A96750",size:Math.random()*2+1.2}});let me;const Ee=()=>{b.clearRect(0,0,U,A),ye.forEach(Q=>{const ce=Q.targetX-Q.x,he=Q.targetY-Q.y;Q.vx=(Q.vx+ce*.05)*.85,Q.vy=(Q.vy+he*.05)*.85,Q.x+=Q.vx,Q.y+=Q.vy,b.fillStyle=Q.color,b.beginPath(),b.arc(Q.x,Q.y,Q.size,0,Math.PI*2),b.fill()}),me=requestAnimationFrame(Ee)};return me=requestAnimationFrame(Ee),()=>cancelAnimationFrame(me)},[v,g]),i.jsxs("div",{ref:d,className:"particle-text-transition",style:{position:"relative",width:"100%",height:"clamp(180px, 28vh, 320px)",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",borderTop:"1px solid var(--color-border)",borderBottom:"1px solid var(--color-border)",backgroundColor:"var(--color-ivory)"},"aria-label":`Architectural particle convergence: ${g}`,children:[i.jsx("div",{style:{position:"absolute",top:"12px",left:"var(--grid-margin)",fontFamily:"var(--font-mono)",fontSize:"0.68rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--color-clay)"},children:"[ TECTONIC TRANSITION // 004 ]"}),i.jsx("canvas",{ref:j,style:{width:"100%",height:"100%"}})]})},Jd=()=>{const g=H.useRef(null),j=H.useRef(null),[d,v]=H.useState(""),[E,y]=H.useState("");return H.useEffect(()=>{if(!window.matchMedia("(pointer: fine)").matches)return;let b=window.innerWidth/2,R=window.innerHeight/2,I=b,U=R,A;const B=T=>{b=T.clientX,R=T.clientY,j.current&&(j.current.style.left=`${b}px`,j.current.style.top=`${R}px`)},$=()=>{I+=(b-I)*.16,U+=(R-U)*.16,g.current&&(g.current.style.left=`${I}px`,g.current.style.top=`${U}px`),A=requestAnimationFrame($)};window.addEventListener("mousemove",B,{passive:!0}),A=requestAnimationFrame($);const J=T=>{const C=T.target;if(C.closest(".project-row, .timeline-stage-card")){v("VIEW"),y("view");return}if(C.closest("button, .btn-cta-nav, .btn-cta-large, .btn-explore-project, .scroll-link")){v("OPEN"),y("open");return}if(C.closest(".hero-visual-frame, .featured-canvas-wrapper, .overlay-image-gallery, .studio-layered-visual, .material-hero-surface")){v("EXPLORE"),y("explore");return}if(C.closest("a")){v(""),y("active");return}v(""),y("")},_=T=>{T.relatedTarget||(v(""),y(""))};return document.addEventListener("mouseover",J,{passive:!0}),document.addEventListener("mouseout",_,{passive:!0}),()=>{window.removeEventListener("mousemove",B),document.removeEventListener("mouseover",J),document.removeEventListener("mouseout",_),cancelAnimationFrame(A)}},[]),i.jsxs(i.Fragment,{children:[i.jsx("div",{ref:g,className:`arch-cursor-follower ${E?`mode-${E}`:""}`,"aria-hidden":"true",children:d&&i.jsx("span",{className:"cursor-label-text",children:d})}),i.jsx("div",{ref:j,className:"arch-cursor-dot","aria-hidden":"true"})]})},Zd=({isOpen:g,onClose:j,activeSection:d,onOpenInquiry:v})=>{H.useEffect(()=>{const y=b=>{b.key==="Escape"&&g&&j()};return g?(document.body.style.overflow="hidden",window.addEventListener("keydown",y)):document.body.style.overflow="",()=>{document.body.style.overflow="",window.removeEventListener("keydown",y)}},[g,j]);const E=y=>{y.preventDefault(),j(),v()};return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:`mobile-nav-backdrop ${g?"open":""}`,onClick:j,"aria-hidden":"true"}),i.jsxs("div",{className:`mobile-nav-drawer ${g?"open":""}`,role:"dialog","aria-modal":"true","aria-label":"Mobile Navigation Menu",children:[i.jsxs("div",{className:"brand-container",style:{marginBottom:"3rem"},children:[i.jsx("span",{className:"brand-title",children:"MONOLITH"}),i.jsx("span",{className:"brand-tagline",children:"Spatial Design Studio"})]}),i.jsxs("ul",{className:"mobile-links-list",children:[i.jsx("li",{children:i.jsxs("a",{href:"#featured-project",onClick:j,className:d==="featured-project"?"active":"",children:[i.jsx("span",{className:"mobile-index",children:"01"})," Projects"]})}),i.jsx("li",{children:i.jsxs("a",{href:"#process",onClick:j,className:d==="process"?"active":"",children:[i.jsx("span",{className:"mobile-index",children:"02"})," Process"]})}),i.jsx("li",{children:i.jsxs("a",{href:"#studio",onClick:j,className:d==="studio"?"active":"",children:[i.jsx("span",{className:"mobile-index",children:"03"})," Studio"]})}),i.jsx("li",{children:i.jsxs("a",{href:"#manifesto",onClick:j,className:d==="manifesto"?"active":"",children:[i.jsx("span",{className:"mobile-index",children:"04"})," Manifesto"]})})]}),i.jsxs("div",{className:"mobile-drawer-footer",children:[i.jsx("button",{className:"btn-cta-nav",onClick:E,style:{display:"inline-flex",width:"100%",justifyContent:"center"},children:"Start a Project"}),i.jsx("span",{style:{marginTop:"1rem"},children:"Press ESC to close"})]})]})]})},ef=({onOpenInquiry:g})=>{const[j,d]=H.useState(!1),[v,E]=H.useState("hero"),[y,b]=H.useState(!1),{showToast:R}=Lo();H.useEffect(()=>{const U=()=>{d(window.scrollY>30)},A=document.querySelectorAll("section[id]"),B=new IntersectionObserver($=>{$.forEach(J=>{J.isIntersecting&&E(J.target.getAttribute("id")||"")})},{rootMargin:"-20% 0px -60% 0px"});return A.forEach($=>B.observe($)),window.addEventListener("scroll",U,{passive:!0}),()=>{window.removeEventListener("scroll",U),A.forEach($=>B.unobserve($))}},[]);const I=()=>{const U=!y;b(U),U&&R("MENU OPENED")};return i.jsxs(i.Fragment,{children:[i.jsxs("header",{className:`site-header ${j?"scrolled":""}`,role:"banner",children:[i.jsxs("div",{className:"brand-container",children:[i.jsx("a",{href:"#hero",className:"brand-title",id:"nav-brand",children:"MONOLITH"}),i.jsx("span",{className:"brand-tagline",children:"Architecture Beyond Structure"})]}),i.jsx("nav",{className:"nav-container",role:"navigation","aria-label":"Main Navigation",children:i.jsxs("ul",{className:"nav-links",children:[i.jsx("li",{className:"nav-item",children:i.jsxs("a",{href:"#featured-project",id:"nav-projects",className:v==="featured-project"||v==="project-index"?"active":"",children:[i.jsx("span",{className:"nav-index",children:"01"}),"Projects"]})}),i.jsx("li",{className:"nav-item",children:i.jsxs("a",{href:"#process",id:"nav-process",className:v==="process"?"active":"",children:[i.jsx("span",{className:"nav-index",children:"02"}),"Process"]})}),i.jsx("li",{className:"nav-item",children:i.jsxs("a",{href:"#studio",id:"nav-studio",className:v==="studio"?"active":"",children:[i.jsx("span",{className:"nav-index",children:"03"}),"Studio"]})})]})}),i.jsxs("div",{className:"nav-cta-wrapper",children:[i.jsx("button",{className:"btn-cta-nav",id:"btn-start-project",onClick:g,children:"Start a Project"}),i.jsxs("button",{className:`mobile-toggle-btn ${y?"open":""}`,onClick:I,"aria-label":"Toggle Navigation Menu","aria-expanded":y,children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]})]})]}),i.jsx(Zd,{isOpen:y,onClose:()=>b(!1),activeSection:v,onOpenInquiry:g})]})},tf=()=>{const[g,j]=H.useState({x:0,y:0}),[d,v]=H.useState(0),[E,y]=H.useState(!1),b=H.useRef(null);H.useEffect(()=>{const U=()=>{y(window.innerWidth<1025)};U(),window.addEventListener("resize",U);let A,B=0,$=0,J=0,_=0;const T=me=>{window.innerWidth<1025||(B=(me.clientX/window.innerWidth-.5)*2,$=(me.clientY/window.innerHeight-.5)*2)},C=()=>{v(window.scrollY)},ye=()=>{window.innerWidth>=1025&&(J+=(B-J)*.08,_+=($-_)*.08,j({x:J,y:_})),A=requestAnimationFrame(ye)};return window.addEventListener("mousemove",T,{passive:!0}),window.addEventListener("scroll",C,{passive:!0}),A=requestAnimationFrame(ye),()=>{window.removeEventListener("resize",U),window.removeEventListener("mousemove",T),window.removeEventListener("scroll",C),cancelAnimationFrame(A)}},[]);const R=E?{}:{transform:`translate3d(${g.x*12}px, ${g.y*10-d*.12}px, 0px)`},I=E?{}:{transform:`translate3d(${-g.x*8}px, ${-g.y*6-d*.06}px, 0px)`};return i.jsxs("section",{ref:b,className:"hero-section",id:"hero","aria-label":"Hero Introduction",children:[i.jsxs("div",{className:"hero-subbar",children:[i.jsx("div",{className:"hero-tag-badge",children:i.jsx("span",{className:"hero-issue-tag",children:"01 / 08 — MANIFESTO & ETHOS"})}),i.jsxs("div",{className:"hero-meta-stamps-row",children:[i.jsx("span",{className:"hero-pill-stamp",children:"MONOLITH / 001"}),i.jsx("span",{className:"hero-pill-stamp",children:"EST. 2026 // MONOGRAPH 01"}),i.jsx("span",{className:"hero-pill-stamp",children:"LAT 13°05'  |  LONG 80°16'"})]})]}),i.jsxs("div",{className:"hero-main-layout",children:[i.jsx("div",{className:"hero-typography-layer",style:I,children:i.jsxs("h1",{className:"hero-title",children:[i.jsx("span",{className:"title-line",children:i.jsx("span",{children:"WE BUILD"})}),i.jsx("span",{className:"title-line title-accent",children:i.jsx("span",{children:"SPACES THAT"})}),i.jsx("span",{className:"title-line",children:i.jsx("span",{children:"OUTLIVE"})}),i.jsx("span",{className:"title-line",children:i.jsx("span",{children:"TRENDS."})})]})}),i.jsx("div",{className:"hero-visual-col",style:R,children:i.jsxs("div",{className:"hero-visual-frame",children:[i.jsx("img",{src:"./images/hero.jpg",alt:"Monumental brutalist raw concrete architecture framing geometric shadows",className:"hero-image",loading:"eager"}),i.jsxs("div",{className:"visual-caption-badge",children:[i.jsx("span",{className:"badge-dot"}),i.jsx("span",{className:"badge-code",children:"SCALE 1:1 // RAW CONCRETE"})]})]})})]}),i.jsxs("div",{className:"hero-metadata-bar",children:[i.jsxs("div",{className:"meta-group",children:[i.jsx("span",{className:"meta-label",children:"DISCIPLINES"}),i.jsx("span",{className:"meta-value",children:"Architecture • Interiors • Spatial Design"})]}),i.jsxs("div",{className:"meta-group meta-swatches-group",children:[i.jsx("span",{className:"meta-label",children:"MATERIAL PALETTE"}),i.jsxs("div",{className:"meta-swatches",children:[i.jsxs("span",{className:"swatch-item",children:[i.jsx("span",{className:"swatch-box swatch-stone"})," Stone"]}),i.jsxs("span",{className:"swatch-item",children:[i.jsx("span",{className:"swatch-box swatch-clay"})," Clay"]}),i.jsxs("span",{className:"swatch-item",children:[i.jsx("span",{className:"swatch-box swatch-rust"})," Rust"]})]})]}),i.jsx("div",{className:"hero-scroll-cue",children:i.jsxs("a",{href:"#manifesto",className:"scroll-enter-btn","aria-label":"Scroll to enter manifesto",children:[i.jsx("span",{children:"SCROLL TO ENTER"}),i.jsx("span",{className:"scroll-enter-arrow",children:"↓"})]})})]})]})},rf=()=>{const[g,j]=H.useState(0),d=H.useRef(null);H.useEffect(()=>{const y=()=>{if(!d.current)return;const b=d.current.getBoundingClientRect(),R=window.innerHeight,I=R+b.height,U=R-b.top,A=Math.max(0,Math.min(1,U/I));j(A)};return window.addEventListener("scroll",y,{passive:!0}),y(),()=>window.removeEventListener("scroll",y)},[]);const v=["WE","DON'T","DESIGN","OBJECTS."],E=["WE","DESIGN","EXPERIENCES","THROUGH","SPACE."];return i.jsx("section",{ref:d,className:"manifesto-section",id:"manifesto","aria-label":"Studio Manifesto",children:i.jsxs("div",{className:"manifesto-stage",children:[i.jsxs("div",{className:"manifesto-header-bar",children:[i.jsx("span",{className:"hero-issue-tag",children:"02 / 08 — MANIFESTO"}),i.jsx("span",{className:"meta-label",children:"SPATIAL PHILOSOPHY"})]}),i.jsxs("div",{className:"manifesto-headline-block",children:[i.jsx("h2",{className:"manifesto-statement",children:v.map((y,b)=>{const R=.15+b/v.length*.25,I=g>=R;return i.jsx("span",{className:"manifesto-word-wrap",children:i.jsx("span",{className:`manifesto-word ${I?"visible":"hidden"}`,children:y})},b)})}),i.jsx("h2",{className:"manifesto-statement statement-contrast",children:E.map((y,b)=>{const R=.4+b/E.length*.3,I=g>=R;return i.jsx("span",{className:"manifesto-word-wrap",children:i.jsx("span",{className:`manifesto-word ${I?"visible":"hidden"}`,children:y})},b)})})]}),i.jsx("div",{className:"manifesto-lead-container",children:i.jsx("p",{className:"manifesto-lead-text",children:"We believe architecture should create a relationship between people, material, light and time."})})]})})},yt=[{id:"01",name:"HOUSE OF SILENCE",category:"RESIDENTIAL",location:"Chennai, India",year:"2026",typology:"Monolithic Coastal Sanctuary",footprint:"420 m²",image:"./images/house_of_silence.jpg",description:"A residence shaped around light, shadow and silence along the Bay of Bengal coast.",chapters:{CONCEPT:{headline:"A Monolithic Coastal Sanctuary",paragraph:"Located outside Chennai, House of Silence explores the poetic weight of cast concrete. The architecture withdraws from the chaos of the city to frame quiet horizons, shifting ocean breezes, and an intimate interior courtyard garden.",image:"./images/house_of_silence.jpg",meta:[{label:"Typology",val:"Private Residential Monograph"},{label:"Site Footprint",val:"420 m² on 1,800 m² coastal plot"},{label:"Orientation",val:"East-West solar axis facing the Bay of Bengal"}]},MATERIAL:{headline:"Board-Formed Concrete & Terracotta",paragraph:"Local river sand and granite aggregates were combined into board-formed concrete slabs that will weather naturally in the coastal marine salt air. Hand-pressed terracotta tiles line the inner courtyards to absorb and release heat gradually.",image:"./images/hero.jpg",meta:[{label:"Concrete Mix",val:"Slag cement + coastal granite aggregate"},{label:"Surface Finish",val:"Rough timber board-marked texture"},{label:"Thermal Mass",val:"350mm loadbearing monolithic walls"}]},LIGHT:{headline:"Carving Shadows & Water Reflections",paragraph:"Daylight does not enter directly; it is captured by recessed clerestory cuts and reflected over shallow water channels. The interior shifts from cool dawn shadows into deep amber luminescence by twilight.",image:"./images/house_of_silence_interior.jpg",meta:[{label:"Natural Glazing",val:"Deep overhangs eliminating solar glare"},{label:"Reflecting Pool",val:"Basalt-lined passive cooling channel"},{label:"Illumination",val:"Concealed low-kelvin warm architectural washes"}]},STRUCTURE:{headline:"Massive Cantilevers & Pure Gravity",paragraph:"A structural feat of post-tensioned concrete cantilevers spanning up to 7.8 meters without visible columns. The living pavilion floats above the reflection pools, creating a spatial sensation of weightless mass.",image:"./images/house_of_silence.jpg",meta:[{label:"Span Length",val:"7.8m post-tensioned cantilever slab"},{label:"Structural Core",val:"Monolithic shear walls"},{label:"Foundation",val:"Deep friction piles into coastal strata"}]}}},{id:"02",name:"VOID COURT",category:"CULTURAL",location:"Kyoto, Japan",year:"2025",typology:"Exhibition Pavilion & Meditation Garden",footprint:"850 m²",image:"./images/hero.jpg",description:"A brutalist cultural forum carved with circular oculi opening to rain and sky.",chapters:{CONCEPT:{headline:"The Enclosure of Emptiness",paragraph:"Void Court is an experimental gallery situated on the outskirts of Kyoto. Rather than displaying objects within rooms, the architecture frames changing atmospheric weather as the primary art exhibit.",image:"./images/hero.jpg",meta:[{label:"Typology",val:"Cultural Pavilion"},{label:"Site Footprint",val:"850 m²"},{label:"Material",val:"Dark Basalt & Volcanic Aggregate"}]},MATERIAL:{headline:"Chiseled Volcanic Rock",paragraph:"Unpolished split stone quarried from volcanic strata anchors the perimeter walls.",image:"./images/hero.jpg",meta:[{label:"Stone",val:"Split Basalt"},{label:"Texture",val:"Honed Flamed"}]},LIGHT:{headline:"Oculus Solar Dial",paragraph:"A colossal 12-meter circular aperture in the roof casts an exact geometric ray of sunlight that moves across the interior water court throughout the day.",image:"./images/house_of_silence_interior.jpg",meta:[{label:"Aperture",val:"12m Open Sky Oculus"},{label:"Acoustics",val:"Absorptive Cavity Louvers"}]},STRUCTURE:{headline:"Deep Ring Cantilever",paragraph:"Pre-stressed radial concrete beams support the unsupported oculus rim.",image:"./images/hero.jpg",meta:[{label:"System",val:"Radial Pre-stressed Post-Tension"},{label:"Core",val:"Cast Ring Girders"}]}}},{id:"03",name:"TERRACOTTA HOUSE",category:"RESIDENTIAL",location:"Madurai, India",year:"2026",typology:"Thermal Clay Sanctuary",footprint:"380 m²",image:"./images/house_of_silence_interior.jpg",description:"Hand-pressed clay latticework shielding family chambers from extreme tropical heat.",chapters:{CONCEPT:{headline:"A Living Clay Screen",paragraph:"An exploration of unglazed terracotta jali bricks designed to induce the Venturi effect for passive natural cooling.",image:"./images/house_of_silence_interior.jpg",meta:[{label:"Typology",val:"Thermal Residence"},{label:"Material",val:"Unglazed Red Terracotta"}]},MATERIAL:{headline:"Fired River Silt",paragraph:"Tiles fired in traditional wood kilns with distinctive variations in ochre and sienna.",image:"./images/house_of_silence_interior.jpg",meta:[{label:"Kiln Temp",val:"1050°C"},{label:"Finish",val:"Raw Unglazed"}]},LIGHT:{headline:"Dappled Sunlight Geometry",paragraph:"Thousands of terracotta perforations filter intense direct sun into calming geometric patterns.",image:"./images/house_of_silence.jpg",meta:[{label:"Porosity",val:"38% Void Ratio"}]},STRUCTURE:{headline:"Self-Supporting Masonry Vaults",paragraph:"Catenary barrel vaults spanning between reinforced concrete ring beams.",image:"./images/hero.jpg",meta:[{label:"System",val:"Catenary Tile Arch"}]}}},{id:"04",name:"CONCRETE GARDEN",category:"HOSPITALITY",location:"Goa, India",year:"2025",typology:"Boutique Forest Retreat",footprint:"1,200 m²",image:"./images/house_of_silence.jpg",description:"Interlocking concrete pavilions immersed within a dense coastal canopy.",chapters:{CONCEPT:{headline:"Disappearing into Canopy",paragraph:"Nine individual guest pavilions configured as quiet concrete monoliths scattered across the jungle terrain.",image:"./images/house_of_silence.jpg",meta:[{label:"Typology",val:"Hospitality Pavilion"},{label:"Scale",val:"9 Monolithic Villas"}]},MATERIAL:{headline:"Green Cast Concrete",paragraph:"Oxide-pigmented concrete matching the emerald green of coastal foliage.",image:"./images/hero.jpg",meta:[{label:"Pigment",val:"Chromium Oxide"}]},LIGHT:{headline:"Veranda Deep Shading",paragraph:"Deep 4-meter overhangs create outdoor living verandas protected from monsoon deluges.",image:"./images/house_of_silence_interior.jpg",meta:[{label:"Overhang",val:"4.2m Continuous"}]},STRUCTURE:{headline:"Tree-Safe Pier Foundations",paragraph:"Elevated pile foundations ensuring zero disturbance to mature banyan roots.",image:"./images/house_of_silence.jpg",meta:[{label:"Foundation",val:"Pin Piles"}]}}},{id:"05",name:"FRAME / LIGHT",category:"INTERIOR",location:"Los Angeles, USA",year:"2026",typology:"Sculptural Art Gallery Interior",footprint:"540 m²",image:"./images/hero.jpg",description:"A subterranean exhibition topography sculpted from honed limestone and fluted glass.",chapters:{CONCEPT:{headline:"Sculpting the Subterranean",paragraph:"An underground vault converted into a cathedral of architectural shadow and silence.",image:"./images/hero.jpg",meta:[{label:"Typology",val:"Private Gallery"},{label:"Depth",val:"6m Sub-grade"}]},MATERIAL:{headline:"Honed French Limestone",paragraph:"Large continuous slabs with concealed joints creating seamless stone monolithic planes.",image:"./images/hero.jpg",meta:[{label:"Stone",val:"Pierre de Bourgogne"}]},LIGHT:{headline:"Continuous Perimeter Light Slit",paragraph:"A narrow 150mm light well washing the raw perimeter walls with natural daylight from the courtyard above.",image:"./images/house_of_silence_interior.jpg",meta:[{label:"Glazing Slit",val:"150mm Linear Skylight"}]},STRUCTURE:{headline:"Post-Tensioned Concrete Roof Deck",paragraph:"Heavy structural roof slab supporting an above-ground reflective garden.",image:"./images/hero.jpg",meta:[{label:"Load Capacity",val:"2.5 kN/m²"}]}}}],Uc=({project:g,isOpen:j,onClose:d,onPrevProject:v,onNextProject:E})=>{const[y,b]=H.useState("CONCEPT");if(H.useEffect(()=>{const A=B=>{j&&(B.key==="Escape"&&d(),B.key==="ArrowLeft"&&v&&v(),B.key==="ArrowRight"&&E&&E())};return j?(document.body.style.overflow="hidden",window.addEventListener("keydown",A)):(document.body.style.overflow="",b("CONCEPT")),()=>{document.body.style.overflow="",window.removeEventListener("keydown",A)}},[j,d,v,E]),!j||!g)return null;const R=["CONCEPT","MATERIAL","LIGHT","STRUCTURE"],I=g.chapters[y]||g.chapters.CONCEPT,U=R.indexOf(y)+1;return i.jsxs("div",{className:`project-editorial-overlay ${j?"open":""}`,role:"dialog","aria-modal":"true","aria-label":`${g.name} Editorial Monograph`,children:[i.jsxs("header",{className:"overlay-header-bar",children:[i.jsx("h2",{className:"overlay-project-title",children:g.name}),i.jsx("ul",{className:"overlay-nav-tabs",children:R.map(A=>i.jsx("li",{children:i.jsx("button",{className:`overlay-tab-btn ${y===A?"active":""}`,onClick:()=>b(A),children:A})},A))}),i.jsxs("div",{className:"overlay-controls",children:[v&&i.jsx("button",{className:"overlay-nav-arrow-btn",onClick:v,"aria-label":"Previous project",children:"← PREVIOUS"}),E&&i.jsx("button",{className:"overlay-nav-arrow-btn",onClick:E,"aria-label":"Next project",children:"NEXT →"}),i.jsx("button",{className:"overlay-close-btn",onClick:d,"aria-label":"Close project viewer (ESC)",children:"CLOSE ×"})]})]}),i.jsxs("div",{className:"overlay-body-content",children:[i.jsxs("div",{className:"overlay-image-gallery",children:[i.jsx("img",{src:I.image,alt:`${g.name} - ${y}`,className:"overlay-main-image",loading:"lazy"}),i.jsxs("div",{className:"overlay-slide-counter",children:["CHAPTER 0",U," / 04 — ",y]})]}),i.jsxs("div",{className:"overlay-editorial-text",children:[i.jsxs("div",{children:[i.jsxs("span",{className:"tab-badge",children:[y," // ARCHITECTURAL STUDY"]}),i.jsx("h3",{className:"tab-headline",children:I.headline}),i.jsx("p",{className:"tab-paragraph",children:I.paragraph})]}),i.jsx("div",{className:"overlay-meta-table",children:I.meta.map((A,B)=>i.jsxs("div",{className:"overlay-meta-row",children:[i.jsx("span",{className:"row-label",children:A.label}),i.jsx("span",{className:"row-val",children:A.val})]},B))})]})]})]})},nf=()=>{const[g,j]=H.useState(1),[d,v]=H.useState(!1),E=H.useRef(null),{showToast:y}=Lo(),b=yt[0];H.useEffect(()=>{const I=()=>{if(!E.current)return;const U=E.current.getBoundingClientRect(),A=window.innerHeight;if(U.top<A&&U.bottom>0){const B=(A-U.top)/(A+U.height),$=1+Math.min(Math.max(B*.15,0),.15);j($)}};return window.addEventListener("scroll",I,{passive:!0}),I(),()=>window.removeEventListener("scroll",I)},[]);const R=()=>{v(!0),y("PROJECT OPENED")};return i.jsxs(i.Fragment,{children:[i.jsxs("section",{className:"featured-project-section",id:"featured-project","aria-label":"Featured Architecture Project",children:[i.jsxs("div",{className:"featured-header-bar",children:[i.jsx("span",{className:"hero-issue-tag",children:"03 / 08 — FEATURED MONOGRAPH"}),i.jsx("span",{className:"meta-label",children:"RESIDENTIAL // COASTAL MONOLITH"})]}),i.jsxs("div",{ref:E,className:"featured-canvas-wrapper",children:[i.jsx("img",{src:b.image,alt:"House of Silence coastal brutalist architecture with reflecting pool",className:"featured-image-plate",loading:"lazy",style:{transform:`scale(${g})`}}),i.jsxs("div",{className:"featured-overlay-content",children:[i.jsxs("div",{className:"featured-titles-block",children:[i.jsx("span",{className:"featured-location-tag",children:"CHENNAI, INDIA • 2026"}),i.jsx("h2",{className:"featured-project-name",children:b.name}),i.jsx("p",{className:"featured-project-desc",children:b.description})]}),i.jsxs("button",{className:"btn-explore-project",onClick:R,"aria-label":`Explore ${b.name} Monograph`,children:["EXPLORE PROJECT ",i.jsx("span",{className:"arrow-icon",children:"→"})]})]})]}),i.jsxs("div",{className:"featured-specs-grid",children:[i.jsxs("div",{className:"spec-column",children:[i.jsx("span",{className:"spec-num",children:"01"}),i.jsx("span",{className:"spec-heading",children:"MATERIAL MASS"}),i.jsx("span",{className:"spec-sub",children:"Board-Formed Concrete & Terracotta"})]}),i.jsxs("div",{className:"spec-column",children:[i.jsx("span",{className:"spec-num",children:"02"}),i.jsx("span",{className:"spec-heading",children:"SOLAR DIAL"}),i.jsx("span",{className:"spec-sub",children:"Recessed Light Channels & Courtyards"})]}),i.jsxs("div",{className:"spec-column",children:[i.jsx("span",{className:"spec-num",children:"03"}),i.jsx("span",{className:"spec-heading",children:"ATMOSPHERE"}),i.jsx("span",{className:"spec-sub",children:"Passive Cooling Reflecting Pool"})]}),i.jsxs("div",{className:"spec-column",children:[i.jsx("span",{className:"spec-num",children:"04"}),i.jsx("span",{className:"spec-heading",children:"TECTONICS"}),i.jsx("span",{className:"spec-sub",children:"7.8m Column-Free Cantilever"})]})]})]}),i.jsx(Uc,{project:b,isOpen:d,onClose:()=>v(!1)})]})},of=({categories:g,activeCategory:j,onSelectCategory:d})=>i.jsx("div",{className:"project-filters-bar",role:"tablist","aria-label":"Project Categories",children:g.map(v=>i.jsx("button",{role:"tab","aria-selected":j===v,className:`filter-btn ${j===v?"active":""}`,onClick:()=>d(v),children:v},v))}),lf=()=>{const[g,j]=H.useState("ALL"),[d,v]=H.useState(null),[E,y]=H.useState(null),b=H.useRef(null),{showToast:R}=Lo(),I=["ALL","RESIDENTIAL","CULTURAL","INTERIOR","HOSPITALITY"],U=g==="ALL"?yt:yt.filter(_=>_.category===g);H.useEffect(()=>{let _=0,T=0,C=0,ye=0,me;const Ee=ce=>{C=ce.clientX+24,ye=ce.clientY+24},Q=()=>{_+=(C-_)*.14,T+=(ye-T)*.14,b.current&&(b.current.style.left=`${_}px`,b.current.style.top=`${T}px`),me=requestAnimationFrame(Q)};return window.addEventListener("mousemove",Ee,{passive:!0}),me=requestAnimationFrame(Q),()=>{window.removeEventListener("mousemove",Ee),cancelAnimationFrame(me)}},[]);const A=_=>{j(_),R("FILTER UPDATED")},B=_=>{y(_),R("PROJECT OPENED")},$=()=>{if(!E)return;const T=(yt.findIndex(C=>C.id===E.id)-1+yt.length)%yt.length;y(yt[T])},J=()=>{if(!E)return;const T=(yt.findIndex(C=>C.id===E.id)+1)%yt.length;y(yt[T])};return i.jsxs(i.Fragment,{children:[i.jsxs("section",{className:"project-index-section",id:"project-index","aria-label":"Selected Architecture Work",children:[i.jsxs("div",{className:"index-header-area",children:[i.jsxs("div",{className:"index-title-group",children:[i.jsx("span",{className:"index-supertitle",children:"04 / 08 — CATALOGUE OF WORKS"}),i.jsx("h2",{className:"index-main-title",children:"SELECTED WORK"})]}),i.jsx(of,{categories:I,activeCategory:g,onSelectCategory:A})]}),i.jsx("div",{className:"project-vertical-list",role:"list",children:U.map(_=>i.jsxs("div",{className:"project-row",role:"listitem",tabIndex:0,onMouseEnter:()=>v(_),onMouseLeave:()=>v(null),onClick:()=>B(_),onKeyDown:T=>{(T.key==="Enter"||T.key===" ")&&(T.preventDefault(),B(_))},"aria-label":`${_.name}, category ${_.category}`,children:[i.jsx("span",{className:"row-index-num",children:_.id}),i.jsx("h3",{className:"row-name",children:_.name}),i.jsxs("span",{className:"row-category-tag",children:[i.jsx("span",{children:"//"})," ",_.category]}),i.jsx("span",{className:"row-arrow","aria-hidden":"true",children:"→"})]},_.id))})]}),i.jsx("div",{ref:b,className:`project-floating-preview ${d?"visible":""}`,"aria-hidden":"true",children:d&&i.jsx("img",{src:d.image,alt:"",className:"floating-preview-image"})}),i.jsx(Uc,{project:E,isOpen:!!E,onClose:()=>y(null),onPrevProject:$,onNextProject:J})]})},Pi=[{id:"CONCRETE",name:"CONCRETE",essence:"Permanence. Mass. Brutal Honesty.",description:"Cast in timber formwork, retaining the wood grain and deliberate imperfections of its making. A raw structural mass that anchors silence.",origin:"Limestone Aggregates & Slag",finish:"Timber Board-Formed Rough",compressive:"55 MPa Structural Load",tactile:"Porous, Cool, Unyielding",textureStyle:{backgroundColor:"#2e2b29",backgroundImage:"radial-gradient(circle at 40% 40%, rgba(201, 193, 181, 0.25) 0%, transparent 60%), url('./images/hero.jpg')",backgroundBlendMode:"luminosity, normal",filter:"contrast(1.15) brightness(0.85)"}},{id:"CLAY",name:"CLAY",essence:"Warmth. Imperfection. Memory.",description:"Used to create surfaces that age with the building. Hand-pressed terracotta tiles and sun-baked bricks that absorb coastal heat and release it into the cool night air.",origin:"Riverbed Silt of Thanjavur",finish:"Unglazed Hand-Pressed Matte",compressive:"18 MPa Thermal Cladding",tactile:"Warm, Earthy, Velvety Texture",textureStyle:{backgroundColor:"#522b22",backgroundImage:"radial-gradient(circle at 50% 50%, rgba(169, 103, 80, 0.4) 0%, transparent 70%), linear-gradient(45deg, rgba(135, 76, 60, 0.3) 0%, rgba(48, 40, 37, 0.8) 100%), url('./images/house_of_silence_interior.jpg')",backgroundBlendMode:"overlay, multiply, normal",filter:"sepia(0.35) contrast(1.2) brightness(0.9)"}},{id:"WOOD",name:"WOOD",essence:"Grain. Resonance. Living Breath.",description:"Charred cedar treated with Shou Sugi Ban fire preservation and reclaimed coastal teak. A living organic material that contracts, expands, and hums in sympathy with human touch.",origin:"Salvaged Nilgiri Teak & Hinoki",finish:"Deep Charred Shou Sugi Ban & Linseed Oil",compressive:"Flexible Tensile Joinery",tactile:"Deep Fissured Grain, Velvety Charcoal",textureStyle:{backgroundColor:"#1f1a18",backgroundImage:"repeating-linear-gradient(90deg, rgba(48, 40, 37, 0.9) 0px, rgba(48, 40, 37, 0.9) 3px, rgba(82, 43, 34, 0.6) 4px, rgba(30, 26, 24, 0.9) 8px), url('./images/house_of_silence.jpg')",backgroundBlendMode:"multiply, luminosity",filter:"contrast(1.3) brightness(0.75)"}},{id:"STONE",name:"STONE",essence:"Geological Time. Deep Gravity.",description:"Massive basalt blocks cleaved along natural volcanic rift lines. Providing an unyielding geological datum from which pure architectural volumes emerge.",origin:"Deccan Traps Basalt Formations",finish:"Thermal Split-Face Honed",compressive:"120 MPa High-Density Base",tactile:"Cold, Chiseled, Micro-Granular",textureStyle:{backgroundColor:"#1c1b1a",backgroundImage:"radial-gradient(circle at 60% 30%, rgba(207, 199, 188, 0.25) 0%, transparent 50%), url('./images/hero.jpg')",backgroundBlendMode:"hard-light, normal",filter:"grayscale(0.8) contrast(1.3) brightness(0.8)"}},{id:"GLASS",name:"GLASS",essence:"Transparency. Void. Threshold.",description:"Heavy structural fluted glass that shears coastal daylight into rhythmic vertical louvers, turning tropical rainstorms into painterly watercolor impressions.",origin:"Low-Iron Silica Float Melt",finish:"Fluted Reeded Prism Distortion",compressive:"28mm Triple-Laminated Acoustic",tactile:"Smooth Fluted Ridges, Crystalline",textureStyle:{backgroundColor:"#23282b",backgroundImage:"repeating-linear-gradient(90deg, rgba(238, 233, 225, 0.15) 0px, rgba(238, 233, 225, 0.15) 6px, transparent 6px, transparent 18px), url('./images/house_of_silence.jpg')",backgroundBlendMode:"screen, overlay, luminosity",filter:"contrast(1.2) brightness(0.95)"}},{id:"STEEL",name:"STEEL",essence:"Tension. Blade. Slender Edge.",description:"Hot-rolled unlacquered structural steel that oxidizes with maritime moisture. Extremely thin knife-edge fascias that define crisp shadows against heavy raw concrete.",origin:"Recycled Electric Arc Furnace",finish:"Natural Chemical Gunmetal Patina",compressive:"355 MPa High-Yield Tension",tactile:"Cold, Sharp-Edged, Satin Oxide",textureStyle:{backgroundColor:"#181716",backgroundImage:"linear-gradient(120deg, rgba(135, 76, 60, 0.25) 0%, rgba(30, 26, 24, 0.9) 60%), url('./images/hero.jpg')",backgroundBlendMode:"color-dodge, multiply, normal",filter:"contrast(1.4) brightness(0.7)"}}],af=()=>{const[g,j]=H.useState("CONCRETE"),d=Pi.find(v=>v.id===g)||Pi[0];return i.jsxs("div",{className:"material-explorer-block",children:[i.jsx("div",{className:"material-title-wrap",children:i.jsx("h2",{className:"material-section-title",children:"MATERIAL IS LANGUAGE."})}),i.jsx("div",{className:"material-nav-pills",role:"tablist","aria-label":"Architectural Materials",children:Pi.map(v=>i.jsx("button",{role:"tab","aria-selected":g===v.id,className:`material-tab-btn ${g===v.id?"active":""}`,onClick:()=>j(v.id),children:v.name},v.id))}),i.jsxs("div",{className:"material-hero-surface",children:[i.jsx("div",{className:"material-macro-canvas",style:d.textureStyle,"aria-hidden":"true"}),i.jsx("div",{className:"material-lighting-overlay","aria-hidden":"true"}),i.jsxs("div",{className:"material-surface-content",children:[i.jsxs("div",{className:"mat-text-column",children:[i.jsx("h3",{className:"mat-title",children:d.name}),i.jsx("p",{className:"mat-essence",children:d.essence}),i.jsx("p",{className:"mat-description",children:d.description})]}),i.jsxs("div",{className:"mat-metadata-card",children:[i.jsxs("div",{className:"mat-meta-item",children:[i.jsx("span",{className:"mat-meta-label",children:"GEOLOGICAL ORIGIN"}),i.jsx("span",{className:"mat-meta-value",children:d.origin})]}),i.jsxs("div",{className:"mat-meta-item",children:[i.jsx("span",{className:"mat-meta-label",children:"SURFACE FINISH"}),i.jsx("span",{className:"mat-meta-value",children:d.finish})]}),i.jsxs("div",{className:"mat-meta-item",children:[i.jsx("span",{className:"mat-meta-label",children:"STRUCTURAL COMPRESSIVE"}),i.jsx("span",{className:"mat-meta-value",children:d.compressive})]}),i.jsxs("div",{className:"mat-meta-item",children:[i.jsx("span",{className:"mat-meta-label",children:"TACTILE SENSATION"}),i.jsx("span",{className:"mat-meta-value",children:d.tactile})]})]})]})]})]})},Po=[{id:"01",title:"OBSERVE",desc:"Every project begins with understanding its environment. We map solar trajectories, soil geology, acoustic currents, and local material traditions.",schematic:"SKETCH"},{id:"02",title:"IMAGINE",desc:"Synthesizing light, topography, and human ritual into spatial possibilities. We carve empty negative space before deciding where solid matter resides.",schematic:"GRID"},{id:"03",title:"DRAW",desc:"Translating intangible impulses into rigorous geometric blueprints, dimensional matrices, and structural tension calculations.",schematic:"STRUCTURE"},{id:"04",title:"BUILD",desc:"Direct tectonic engagement with timber formwork, stone carving, and raw monolithic casting. Physical craft confronting immutable gravity.",schematic:"VOLUME"},{id:"05",title:"LIVE",desc:"The finished structure is surrendered to time, ocean breezes, shifting sunlight, and the quiet choreography of everyday human life.",schematic:"SPACE"}],sf=()=>{const[g,j]=H.useState("01"),d=Po.find(v=>v.id===g)||Po[0];return i.jsxs("div",{className:"process-timeline-block",style:{marginTop:"5rem"},children:[i.jsxs("div",{className:"section-header-bar",style:{borderColor:"rgba(248, 245, 239, 0.18)",marginBottom:"3rem"},children:[i.jsx("span",{className:"section-number",style:{color:"var(--color-clay)"},children:"05 / 08"}),i.jsx("span",{className:"section-category",style:{color:"var(--color-stone)"},children:"Methodology & Spatial Genesis"})]}),i.jsx("div",{className:"material-title-wrap",children:i.jsxs("h2",{className:"material-section-title",children:["FROM",i.jsx("br",{}),"IDEA",i.jsx("br",{}),"TO",i.jsx("br",{}),"SPACE."]})}),i.jsxs("div",{className:"drawing-schematic-wrapper","aria-label":"Technical Architectural Drawing Animation",children:[i.jsxs("div",{className:"schematic-header",children:[i.jsx("div",{className:"schematic-breadcrumbs",children:Po.map(v=>i.jsxs("span",{className:`schematic-crumb ${v.id===g?"active":""}`,children:[v.schematic," ",v.id!=="05"?"→":""]},v.id))}),i.jsxs("span",{className:"schematic-indicator",children:["ACTIVE STAGE: ",d.title," // VECTOR BLUEPRINT"]})]}),i.jsx("div",{className:"schematic-canvas-box",children:i.jsxs("svg",{className:"schematic-svg",viewBox:"0 0 800 320",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("line",{x1:"40",y1:"280",x2:"760",y2:"280",stroke:"rgba(248, 245, 239, 0.2)",strokeWidth:"1",strokeDasharray:"4 4"}),i.jsx("line",{x1:"120",y1:"40",x2:"120",y2:"280",stroke:"rgba(248, 245, 239, 0.1)",strokeWidth:"1"}),i.jsx("line",{x1:"400",y1:"40",x2:"400",y2:"280",stroke:"rgba(248, 245, 239, 0.1)",strokeWidth:"1"}),i.jsx("line",{x1:"680",y1:"40",x2:"680",y2:"280",stroke:"rgba(248, 245, 239, 0.1)",strokeWidth:"1"}),i.jsxs("g",{className:`schematic-layer ${g>="01"?"visible":""}`,children:[i.jsx("path",{d:"M120 280 Q 250 180 400 240 T 680 160",stroke:"#C9C1B5",strokeWidth:"1.5",strokeDasharray:"6 3"}),i.jsx("circle",{cx:"120",cy:"280",r:"3",fill:"#C9C1B5"}),i.jsx("circle",{cx:"400",cy:"240",r:"3",fill:"#C9C1B5"}),i.jsx("circle",{cx:"680",cy:"160",r:"3",fill:"#C9C1B5"}),i.jsx("text",{x:"130",y:"270",fill:"rgba(201, 193, 181, 0.7)",fontSize:"10",fontFamily:"var(--font-mono)",children:"DATUM 01"})]}),i.jsxs("g",{className:`schematic-layer ${g>="02"?"visible":""}`,children:[i.jsx("line",{x1:"200",y1:"60",x2:"200",y2:"280",stroke:"rgba(169, 103, 80, 0.4)",strokeWidth:"1"}),i.jsx("line",{x1:"600",y1:"60",x2:"600",y2:"280",stroke:"rgba(169, 103, 80, 0.4)",strokeWidth:"1"}),i.jsx("line",{x1:"140",y1:"140",x2:"660",y2:"140",stroke:"rgba(169, 103, 80, 0.3)",strokeWidth:"1",strokeDasharray:"3 3"}),i.jsx("line",{x1:"140",y1:"210",x2:"660",y2:"210",stroke:"rgba(169, 103, 80, 0.3)",strokeWidth:"1",strokeDasharray:"3 3"}),i.jsx("text",{x:"210",y:"80",fill:"var(--color-clay)",fontSize:"10",fontFamily:"var(--font-mono)",children:"GRID-A"}),i.jsx("text",{x:"540",y:"80",fill:"var(--color-clay)",fontSize:"10",fontFamily:"var(--font-mono)",children:"GRID-B"})]}),i.jsxs("g",{className:`schematic-layer ${g>="03"?"visible":""}`,children:[i.jsx("rect",{x:"220",y:"110",width:"360",height:"170",stroke:"var(--color-ivory)",strokeWidth:"1.5"}),i.jsx("line",{x1:"220",y1:"110",x2:"280",y2:"70",stroke:"var(--color-ivory)",strokeWidth:"1"}),i.jsx("line",{x1:"580",y1:"110",x2:"640",y2:"70",stroke:"var(--color-ivory)",strokeWidth:"1"}),i.jsx("line",{x1:"280",y1:"70",x2:"640",y2:"70",stroke:"var(--color-ivory)",strokeWidth:"1.5"}),i.jsx("line",{x1:"580",y1:"280",x2:"640",y2:"240",stroke:"var(--color-ivory)",strokeWidth:"1"}),i.jsx("line",{x1:"640",y1:"70",x2:"640",y2:"240",stroke:"var(--color-ivory)",strokeWidth:"1"}),i.jsx("line",{x1:"300",y1:"110",x2:"300",y2:"280",stroke:"var(--color-rust)",strokeWidth:"2"}),i.jsx("line",{x1:"500",y1:"110",x2:"500",y2:"280",stroke:"var(--color-rust)",strokeWidth:"2"})]}),i.jsxs("g",{className:`schematic-layer ${g>="04"?"visible":""}`,children:[i.jsx("polygon",{points:"220,110 280,70 640,70 580,110",fill:"rgba(169, 103, 80, 0.2)",stroke:"var(--color-clay)",strokeWidth:"1"}),i.jsx("polygon",{points:"580,110 640,70 640,240 580,280",fill:"rgba(48, 40, 37, 0.4)",stroke:"var(--color-stone)",strokeWidth:"1"}),i.jsx("rect",{x:"180",y:"140",width:"160",height:"60",fill:"rgba(201, 193, 181, 0.15)",stroke:"var(--color-clay)",strokeWidth:"1.2"}),i.jsx("text",{x:"190",y:"175",fill:"var(--color-ivory)",fontSize:"9",fontFamily:"var(--font-mono)",children:"7.8m CANTILEVER"})]}),i.jsxs("g",{className:`schematic-layer ${g==="05"?"visible":""}`,children:[i.jsx("path",{d:"M260 210 L 360 210 L 360 280 L 260 280 Z",fill:"rgba(248, 245, 239, 0.35)"}),i.jsx("circle",{cx:"310",cy:"245",r:"18",fill:"rgba(255, 245, 230, 0.15)"}),i.jsx("line",{x1:"280",y1:"70",x2:"310",y2:"245",stroke:"rgba(255, 245, 230, 0.4)",strokeWidth:"1",strokeDasharray:"4 2"}),i.jsx("line",{x1:"450",y1:"70",x2:"480",y2:"245",stroke:"rgba(255, 245, 230, 0.4)",strokeWidth:"1",strokeDasharray:"4 2"}),i.jsx("text",{x:"270",y:"250",fill:"var(--color-deep-brown)",fontSize:"9",fontFamily:"var(--font-mono)",fontWeight:"700",children:"VOID"})]})]})})]}),i.jsx("div",{className:"horizontal-process-timeline",role:"tablist","aria-label":"Process Stages",children:Po.map(v=>i.jsxs("div",{role:"tab","aria-selected":g===v.id,tabIndex:0,className:`timeline-stage-card ${g===v.id?"active":""}`,onClick:()=>j(v.id),onKeyDown:E=>{(E.key==="Enter"||E.key===" ")&&(E.preventDefault(),j(v.id))},children:[i.jsxs("div",{className:"stage-top-meta",children:[i.jsx("span",{children:v.id}),i.jsx("span",{children:v.schematic})]}),i.jsx("h3",{className:"stage-title",children:v.title}),i.jsx("p",{className:"stage-desc",children:v.desc})]},v.id))})]})},cf=()=>i.jsxs("section",{className:"material-process-section",id:"process","aria-label":"Materials and Process",children:[i.jsxs("div",{className:"material-header-bar",children:[i.jsx("span",{className:"hero-issue-tag",style:{color:"var(--color-clay)"},children:"05 / 08 — TECTONIC STUDY"}),i.jsx("span",{className:"meta-label",style:{color:"var(--color-stone)"},children:"RAW MATERIAL ALCHEMY"})]}),i.jsx(af,{}),i.jsx(sf,{})]}),uf=[{name:"ARUN MEHTA",role:"FOUNDING ARCHITECT",bio:"Trained in Ahmedabad and Zurich. Focuses on structural mass, post-tensioned concrete, and thermal monolithic enclosures.",portraitInitials:"AM",accentColor:"var(--color-clay)"},{name:"MIRA SEN",role:"SPATIAL DESIGN",bio:"Investigates shadow choreography, acoustic reflection, and the transition of natural light across interior thresholds.",portraitInitials:"MS",accentColor:"var(--color-rust)"},{name:"NOAH RAO",role:"MATERIAL RESEARCH",bio:"Leads geological sourcing and earth pigment alchemy, testing volcanic basalt, slag concrete, and coastal river clays.",portraitInitials:"NR",accentColor:"var(--color-deep-brown)"}],df=()=>{const[g,j]=H.useState({x:0,y:0}),[d,v]=H.useState(!1),E=H.useRef(null),y=R=>{if(!E.current)return;const I=E.current.getBoundingClientRect(),U=R.clientX-I.left,A=R.clientY-I.top,B=I.width/2,$=I.height/2,J=(A-$)/$*-18,_=(U-B)/B*18;j({x:J,y:_})},b=()=>{v(!1),j({x:0,y:0})};return i.jsxs("div",{className:"lanyard-container",children:[i.jsx("div",{className:"lanyard-strap"}),i.jsx("div",{className:"lanyard-clip"}),i.jsx("div",{ref:E,className:`lanyard-card ${d?"hovered":""}`,onMouseMove:y,onMouseEnter:()=>v(!0),onMouseLeave:b,style:{transform:`perspective(800px) rotateX(${g.x}deg) rotateY(${g.y}deg)`,transition:d?"transform 0.1s ease-out":"transform 0.5s var(--ease-architectural)"},children:i.jsxs("div",{className:"lanyard-card-inner",children:[i.jsx("div",{className:"card-top-slot"}),i.jsxs("div",{className:"card-badge-header",children:[i.jsx("span",{className:"card-brand",children:"MONOLITH"}),i.jsx("span",{className:"card-year",children:"2026"})]}),i.jsxs("div",{className:"card-pass-type",children:[i.jsx("span",{className:"pass-title",children:"STUDIO PASS"}),i.jsx("span",{className:"pass-meta",children:"EXHIBITION CREDENTIAL"})]}),i.jsxs("div",{className:"card-barcode-box",children:[i.jsx("div",{className:"barcode-bars"}),i.jsx("span",{className:"barcode-code",children:"MLTH-SEC-001"})]}),i.jsxs("div",{className:"card-footer-project",children:[i.jsx("span",{className:"proj-label",children:"FEATURED ACCESS"}),i.jsx("span",{className:"proj-val",children:"PROJECT 001 // HOUSE OF SILENCE"}),i.jsx("span",{className:"proj-loc",children:"CHENNAI, INDIA"})]})]})})]})},ff=()=>{const[g,j]=H.useState({projects:0,disciplines:0,cities:0,philosophy:0}),[d,v]=H.useState(!1),[E,y]=H.useState(null),b=H.useRef(null);return H.useEffect(()=>{const R=new IntersectionObserver(([I])=>{if(I.isIntersecting&&!d){v(!0);const U=1200,A=performance.now(),B=$=>{const J=$-A,_=Math.min(J/U,1),T=1-(1-_)*(1-_);j({projects:Math.floor(T*12),disciplines:Math.floor(T*4),cities:Math.floor(T*7),philosophy:1}),_<1&&requestAnimationFrame(B)};requestAnimationFrame(B)}},{threshold:.3});return b.current&&R.observe(b.current),()=>R.disconnect()},[d]),i.jsxs("section",{className:"studio-section",id:"studio","aria-label":"About the Studio",children:[i.jsxs("div",{className:"section-header-bar",children:[i.jsx("span",{className:"section-number",children:"06 / 08"}),i.jsx("span",{className:"section-category",children:"Studio Collective & Ethos"})]}),i.jsxs("div",{className:"studio-hero-grid",children:[i.jsxs("div",{className:"studio-content-col",children:[i.jsxs("h2",{className:"studio-editorial-heading",children:["A SMALL STUDIO.",i.jsx("br",{}),"A LARGE FIELD."]}),i.jsx("p",{className:"studio-body-p",children:"MONOLITH works across architecture, interiors and experimental spatial design."}),i.jsx("p",{className:"studio-body-p sub",children:"We are interested in the relationship between material, light, landscape and human movement."}),i.jsxs("div",{ref:b,className:"studio-stats-grid",children:[i.jsxs("div",{className:"studio-stat-box",children:[i.jsx("span",{className:"stat-number",children:g.projects<10?`0${g.projects}`:g.projects}),i.jsx("span",{className:"stat-label",children:"PROJECTS"})]}),i.jsxs("div",{className:"studio-stat-box",children:[i.jsxs("span",{className:"stat-number",children:["0",g.disciplines]}),i.jsx("span",{className:"stat-label",children:"DISCIPLINES"})]}),i.jsxs("div",{className:"studio-stat-box",children:[i.jsxs("span",{className:"stat-number",children:["0",g.cities]}),i.jsx("span",{className:"stat-label",children:"CITIES"})]}),i.jsxs("div",{className:"studio-stat-box",children:[i.jsxs("span",{className:"stat-number",children:["0",g.philosophy]}),i.jsx("span",{className:"stat-label",children:"PHILOSOPHY"})]})]})]}),i.jsxs("div",{className:"studio-visual-col",children:[i.jsxs("div",{className:"studio-layered-visual",children:[i.jsx("img",{src:"./images/house_of_silence_interior.jpg",alt:"Architectural studio workshop with models, plans and material samples",className:"studio-base-image",loading:"lazy"}),i.jsxs("div",{className:"studio-tracing-overlay","aria-hidden":"true",children:[i.jsx("span",{className:"blueprint-stamp",children:"WORKSHOP / LAB 01"}),i.jsx("span",{className:"blueprint-stamp-right",children:"SCALE 1:50"})]})]}),i.jsx("div",{className:"studio-lanyard-wrapper",children:i.jsx(df,{})})]})]}),i.jsxs("div",{className:"studio-team-area",children:[i.jsxs("div",{className:"team-header-line",children:[i.jsx("span",{className:"meta-label",children:"LEADERSHIP // FICTIONAL SPATIAL RESEARCHERS"}),i.jsx("span",{className:"meta-label",children:"03 MEMBERS"})]}),i.jsx("div",{className:"team-typography-list",role:"list",children:uf.map(R=>i.jsxs("div",{className:"team-member-row",role:"listitem",onMouseEnter:()=>y(R),onMouseLeave:()=>y(null),tabIndex:0,children:[i.jsxs("div",{className:"member-main-info",children:[i.jsx("h3",{className:"member-name",children:R.name}),i.jsx("span",{className:"member-role",children:R.role})]}),i.jsx("p",{className:"member-bio",children:R.bio}),i.jsx("div",{className:`member-hover-portrait ${(E==null?void 0:E.name)===R.name?"show":""}`,style:{backgroundColor:R.accentColor},"aria-hidden":"true",children:i.jsxs("div",{className:"portrait-inner",children:[i.jsx("span",{className:"portrait-monogram",children:R.portraitInitials}),i.jsx("span",{className:"portrait-fictional-tag",children:"STUDIO ARCHIVE"})]})})]},R.name))})]})]})},Li=({variant:g="primary",children:j,className:d="",...v})=>{let E="btn-cta-primary";return g==="secondary"&&(E="btn-cta-secondary"),g==="nav"&&(E="btn-cta-nav"),g==="explore"&&(E="btn-explore-project"),i.jsx("button",{className:`${E} ${d}`.trim(),...v,children:j})},pf=({onOpenInquiry:g})=>i.jsx("section",{className:"final-cta-section",id:"final-cta","aria-label":"Final Call to Action",children:i.jsxs("div",{className:"final-cta-container",children:[i.jsx("span",{className:"index-supertitle",style:{color:"var(--color-clay)",marginBottom:"1.5rem",display:"block"},children:"07 / 08 — COMMISSIONS"}),i.jsxs("h2",{className:"final-cta-headline",children:["HAVE A SPACE",i.jsx("br",{}),"IN MIND?"]}),i.jsx("p",{className:"final-cta-sub",children:"Let's turn the idea into somewhere real."}),i.jsxs("div",{className:"final-cta-buttons",children:[i.jsx(Li,{variant:"primary",onClick:g,"aria-label":"Open Project Inquiry Form",children:"START A PROJECT →"}),i.jsx("a",{href:"#project-index",className:"btn-cta-secondary","aria-label":"View Selected Work Archive",children:"VIEW SELECTED WORK"})]})]})}),mf=({onOpenInquiry:g})=>i.jsx("footer",{className:"site-footer",id:"footer",role:"contentinfo",children:i.jsxs("div",{className:"footer-minimal-container",children:[i.jsxs("div",{className:"footer-main-row",children:[i.jsxs("div",{className:"footer-col-left",children:[i.jsx("h2",{className:"footer-huge-brand",children:"MONOLITH"}),i.jsxs("div",{className:"footer-tagline-block",children:[i.jsx("span",{children:"ARCHITECTURE"}),i.jsx("span",{children:"BEYOND"}),i.jsx("span",{children:"STRUCTURE."})]})]}),i.jsx("nav",{className:"footer-col-right","aria-label":"Footer Navigation",children:i.jsxs("ul",{className:"footer-minimal-links",children:[i.jsx("li",{children:i.jsx("a",{href:"#featured-project",children:"PROJECTS"})}),i.jsx("li",{children:i.jsx("a",{href:"#process",children:"PROCESS"})}),i.jsx("li",{children:i.jsx("a",{href:"#studio",children:"STUDIO"})}),i.jsx("li",{children:i.jsx("button",{className:"footer-link-btn",onClick:g,"aria-label":"Open Project Inquiry Contact",children:"CONTACT"})})]})})]}),i.jsxs("div",{className:"footer-bottom-line",children:[i.jsx("span",{children:"© 2026 MONOLITH"}),i.jsx("span",{children:"FICTIONAL ARCHITECTURE STUDIO"})]})]})}),hf=({isOpen:g,onClose:j,title:d,children:v,sheetClassName:E="inquiry-modal-sheet"})=>{const y=H.useRef(null);return H.useEffect(()=>{const b=R=>{R.key==="Escape"&&g&&j()};return g?(document.body.style.overflow="hidden",window.addEventListener("keydown",b)):document.body.style.overflow="",()=>{document.body.style.overflow="",window.removeEventListener("keydown",b)}},[g,j]),g?i.jsx("div",{className:`inquiry-modal-backdrop ${g?"open":""}`,onClick:j,role:"dialog","aria-modal":"true","aria-label":d||"Modal Dialog",children:i.jsxs("div",{ref:y,className:E,onClick:b=>b.stopPropagation(),children:[i.jsx("button",{className:"inquiry-close-btn",onClick:j,"aria-label":"Close dialog (ESC)",children:"✕"}),v]})}):null},gf=({isOpen:g,onClose:j})=>{const{showToast:d}=Lo(),[v,E]=H.useState({name:"",email:"",projectType:"Architecture",location:"",budgetRange:"$500K — $1.5M",message:""}),[y,b]=H.useState({}),[R,I]=H.useState(!1),[U,A]=H.useState(!1),B=["Architecture","Interior","Hospitality","Cultural","Experimental","Other"],$=["$250K — $500K","$500K — $1.5M","$1.5M — $3.5M","$3.5M+","Undetermined"],J=()=>{const C={};return v.name.trim()||(C.name="Please provide your name or organization."),v.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)||(C.email="Please enter a valid email address."):C.email="Please provide your email address.",v.location.trim()||(C.location="Please specify the project site or city."),(!v.message.trim()||v.message.trim().length<10)&&(C.message="Please describe the spatial vision (min 10 characters)."),b(C),Object.keys(C).length===0},_=C=>{C.preventDefault(),J()&&(A(!0),setTimeout(()=>{A(!1),I(!0),d("INQUIRY RECEIVED")},600))},T=()=>{j(),setTimeout(()=>{I(!1),b({})},400)};return i.jsx(hf,{isOpen:g,onClose:T,title:"Commission Inquiry Form",children:R?i.jsxs("div",{className:"inquiry-success-box",children:[i.jsx("span",{className:"success-badge",children:"COMMISSION TRANSMITTED // 2026"}),i.jsx("h3",{className:"success-heading",children:"INQUIRY RECEIVED."}),i.jsx("p",{className:"success-sub",children:"We'll be in touch."}),i.jsx("p",{className:"success-body",children:"Our spatial studio will review your site context, topography, and program scope."}),i.jsx(Li,{variant:"primary",onClick:T,style:{marginTop:"2rem"},children:"RETURN TO EXHIBITION"})]}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"inquiry-header",children:[i.jsx("span",{className:"inquiry-eyebrow",children:"COMMISSION // MONOGRAPH INTAKE"}),i.jsx("h2",{className:"inquiry-title",children:"START A PROJECT"}),i.jsx("p",{className:"inquiry-lead",children:"We accept a select number of architectural, interior, and experimental commissions annually."})]}),i.jsxs("form",{onSubmit:_,className:"inquiry-form",noValidate:!0,children:[i.jsxs("div",{className:"form-grid",children:[i.jsxs("div",{className:"form-field",children:[i.jsx("label",{htmlFor:"inquiry-name",className:"field-label",children:"NAME *"}),i.jsx("input",{id:"inquiry-name",type:"text",className:`field-input ${y.name?"has-error":""}`,placeholder:"E.g. Elena Rostova",value:v.name,onChange:C=>E({...v,name:C.target.value}),"aria-invalid":!!y.name}),y.name&&i.jsx("span",{className:"field-error",children:y.name})]}),i.jsxs("div",{className:"form-field",children:[i.jsx("label",{htmlFor:"inquiry-email",className:"field-label",children:"EMAIL *"}),i.jsx("input",{id:"inquiry-email",type:"email",className:`field-input ${y.email?"has-error":""}`,placeholder:"elena@domain.com",value:v.email,onChange:C=>E({...v,email:C.target.value}),"aria-invalid":!!y.email}),y.email&&i.jsx("span",{className:"field-error",children:y.email})]}),i.jsxs("div",{className:"form-field",children:[i.jsx("label",{htmlFor:"inquiry-type",className:"field-label",children:"PROJECT TYPE *"}),i.jsx("select",{id:"inquiry-type",className:"field-select",value:v.projectType,onChange:C=>E({...v,projectType:C.target.value}),children:B.map(C=>i.jsx("option",{value:C,children:C},C))})]}),i.jsxs("div",{className:"form-field",children:[i.jsx("label",{htmlFor:"inquiry-location",className:"field-label",children:"LOCATION *"}),i.jsx("input",{id:"inquiry-location",type:"text",className:`field-input ${y.location?"has-error":""}`,placeholder:"E.g. Kyoto, Japan / Mumbai, India",value:v.location,onChange:C=>E({...v,location:C.target.value}),"aria-invalid":!!y.location}),y.location&&i.jsx("span",{className:"field-error",children:y.location})]}),i.jsxs("div",{className:"form-field form-field-full",children:[i.jsx("label",{htmlFor:"inquiry-budget",className:"field-label",children:"BUDGET RANGE *"}),i.jsx("select",{id:"inquiry-budget",className:"field-select",value:v.budgetRange,onChange:C=>E({...v,budgetRange:C.target.value}),children:$.map(C=>i.jsx("option",{value:C,children:C},C))})]}),i.jsxs("div",{className:"form-field form-field-full",children:[i.jsx("label",{htmlFor:"inquiry-message",className:"field-label",children:"MESSAGE *"}),i.jsx("textarea",{id:"inquiry-message",rows:4,className:`field-textarea ${y.message?"has-error":""}`,placeholder:"Describe your site context, spatial requirements, and timeline...",value:v.message,onChange:C=>E({...v,message:C.target.value}),"aria-invalid":!!y.message}),y.message&&i.jsx("span",{className:"field-error",children:y.message})]})]}),i.jsxs("div",{className:"form-action-row",children:[i.jsx(Li,{type:"submit",variant:"primary",disabled:U,children:U?"TRANSMITTING...":"SEND INQUIRY →"}),i.jsx("span",{className:"inquiry-disclaimer",children:"Frontend simulation • No real data sent"})]})]})]})})},vf=()=>{const[g,j]=H.useState(!1);H.useEffect(()=>{document.title="MONOLITH — Architecture Beyond Structure"},[]);const d=()=>j(!0),v=()=>j(!1);return i.jsxs("div",{className:"monolith-app",children:[i.jsx("style",{dangerouslySetInnerHTML:{__html:Qd}}),i.jsx(Kd,{}),i.jsx("div",{className:"paper-texture","aria-hidden":"true"}),i.jsx("div",{className:"architectural-grid-lines","aria-hidden":"true",children:Array.from({length:12}).map((E,y)=>i.jsx("div",{className:"col-line"},y))}),i.jsx(Jd,{}),i.jsx(ef,{onOpenInquiry:d}),i.jsxs("main",{id:"main-content",children:[i.jsx(tf,{}),i.jsx(rf,{}),i.jsx(nf,{}),i.jsx(Xd,{text:"SPACE"}),i.jsx(lf,{}),i.jsx(cf,{}),i.jsx(ff,{}),i.jsx(pf,{onOpenInquiry:d})]}),i.jsx(mf,{onOpenInquiry:d}),i.jsx(gf,{isOpen:g,onClose:v})]})},yf=()=>i.jsx(qd,{children:i.jsx(vf,{})});Gd.createRoot(document.getElementById("root")).render(i.jsx(Ud.StrictMode,{children:i.jsx(yf,{})}));
