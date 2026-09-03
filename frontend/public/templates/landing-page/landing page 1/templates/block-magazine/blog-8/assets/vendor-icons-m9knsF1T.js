import{r as S}from"./vendor-react-uomtdXQY.js";var U={};(function p(h,M,w,A){var _=!!(h.Worker&&h.Blob&&h.Promise&&h.OffscreenCanvas&&h.OffscreenCanvasRenderingContext2D&&h.HTMLCanvasElement&&h.HTMLCanvasElement.prototype.transferControlToOffscreen&&h.URL&&h.URL.createObjectURL),L=typeof Path2D=="function"&&typeof DOMMatrix=="function",F=(function(){if(!h.OffscreenCanvas)return!1;try{var a=new OffscreenCanvas(1,1),e=a.getContext("2d");e.fillRect(0,0,1,1);var r=a.transferToImageBitmap();e.createPattern(r,"no-repeat")}catch{return!1}return!0})();function $(){}function T(a){var e=M.exports.Promise,r=e!==void 0?e:h.Promise;return typeof r=="function"?new r(a):(a($,$),null)}var P=(function(a,e){return{transform:function(r){if(a)return r;if(e.has(r))return e.get(r);var n=new OffscreenCanvas(r.width,r.height),o=n.getContext("2d");return o.drawImage(r,0,0),e.set(r,n),n},clear:function(){e.clear()}}})(F,new Map),E=(function(){var a=Math.floor(16.666666666666668),e,r,n={},o=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(c){var s=Math.random();return n[s]=requestAnimationFrame(function t(i){o===i||o+a-1<i?(o=i,delete n[s],c()):n[s]=requestAnimationFrame(t)}),s},r=function(c){n[c]&&cancelAnimationFrame(n[c])}):(e=function(c){return setTimeout(c,a)},r=function(c){return clearTimeout(c)}),{frame:e,cancel:r}})(),z=(function(){var a,e,r={};function n(o){function c(s,t){o.postMessage({options:s||{},callback:t})}o.init=function(t){var i=t.transferControlToOffscreen();o.postMessage({canvas:i},[i])},o.fire=function(t,i,d){if(e)return c(t,null),e;var v=Math.random().toString(36).slice(2);return e=T(function(f){function m(g){g.data.callback===v&&(delete r[v],o.removeEventListener("message",m),e=null,P.clear(),d(),f())}o.addEventListener("message",m),c(t,v),r[v]=m.bind(null,{data:{callback:v}})}),e},o.reset=function(){o.postMessage({reset:!0});for(var t in r)r[t](),delete r[t]}}return function(){if(a)return a;if(!w&&_){var o=["var CONFETTI, SIZE = {}, module = {};","("+p.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{a=new Worker(URL.createObjectURL(new Blob([o])))}catch(c){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",c),null}n(a)}return a}})(),R={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function j(a,e){return e?e(a):a}function B(a){return a!=null}function y(a,e,r){return j(a&&B(a[e])?a[e]:R[e],r)}function Y(a){return a<0?0:Math.floor(a)}function ee(a,e){return Math.floor(Math.random()*(e-a))+a}function O(a){return parseInt(a,16)}function ae(a){return a.map(re)}function re(a){var e=String(a).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:O(e.substring(0,2)),g:O(e.substring(2,4)),b:O(e.substring(4,6))}}function te(a){var e=y(a,"origin",Object);return e.x=y(e,"x",Number),e.y=y(e,"y",Number),e}function ne(a){a.width=document.documentElement.clientWidth,a.height=document.documentElement.clientHeight}function oe(a){var e=a.getBoundingClientRect();a.width=e.width,a.height=e.height}function ce(a){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=a,e}function se(a,e,r,n,o,c,s,t,i){a.save(),a.translate(e,r),a.rotate(c),a.scale(n,o),a.arc(0,0,1,s,t,i),a.restore()}function ie(a){var e=a.angle*(Math.PI/180),r=a.spread*(Math.PI/180);return{x:a.x,y:a.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:a.startVelocity*.5+Math.random()*a.startVelocity,angle2D:-e+(.5*r-Math.random()*r),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:a.color,shape:a.shape,tick:0,totalTicks:a.ticks,decay:a.decay,drift:a.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:a.gravity*3,ovalScalar:.6,scalar:a.scalar,flat:a.flat}}function le(a,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var r=e.tick++/e.totalTicks,n=e.x+e.random*e.tiltCos,o=e.y+e.random*e.tiltSin,c=e.wobbleX+e.random*e.tiltCos,s=e.wobbleY+e.random*e.tiltSin;if(a.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-r)+")",a.beginPath(),L&&e.shape.type==="path"&&typeof e.shape.path=="string"&&Array.isArray(e.shape.matrix))a.fill(de(e.shape.path,e.shape.matrix,e.x,e.y,Math.abs(c-n)*.1,Math.abs(s-o)*.1,Math.PI/10*e.wobble));else if(e.shape.type==="bitmap"){var t=Math.PI/10*e.wobble,i=Math.abs(c-n)*.1,d=Math.abs(s-o)*.1,v=e.shape.bitmap.width*e.scalar,f=e.shape.bitmap.height*e.scalar,m=new DOMMatrix([Math.cos(t)*i,Math.sin(t)*i,-Math.sin(t)*d,Math.cos(t)*d,e.x,e.y]);m.multiplySelf(new DOMMatrix(e.shape.matrix));var g=a.createPattern(P.transform(e.shape.bitmap),"no-repeat");g.setTransform(m),a.globalAlpha=1-r,a.fillStyle=g,a.fillRect(e.x-v/2,e.y-f/2,v,f),a.globalAlpha=1}else if(e.shape==="circle")a.ellipse?a.ellipse(e.x,e.y,Math.abs(c-n)*e.ovalScalar,Math.abs(s-o)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):se(a,e.x,e.y,Math.abs(c-n)*e.ovalScalar,Math.abs(s-o)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var l=Math.PI/2*3,k=4*e.scalar,b=8*e.scalar,C=e.x,N=e.y,I=5,x=Math.PI/I;I--;)C=e.x+Math.cos(l)*b,N=e.y+Math.sin(l)*b,a.lineTo(C,N),l+=x,C=e.x+Math.cos(l)*k,N=e.y+Math.sin(l)*k,a.lineTo(C,N),l+=x;else a.moveTo(Math.floor(e.x),Math.floor(e.y)),a.lineTo(Math.floor(e.wobbleX),Math.floor(o)),a.lineTo(Math.floor(c),Math.floor(s)),a.lineTo(Math.floor(n),Math.floor(e.wobbleY));return a.closePath(),a.fill(),e.tick<e.totalTicks}function he(a,e,r,n,o){var c=e.slice(),s=a.getContext("2d"),t,i,d=T(function(v){function f(){t=i=null,s.clearRect(0,0,n.width,n.height),P.clear(),o(),v()}function m(){w&&!(n.width===A.width&&n.height===A.height)&&(n.width=a.width=A.width,n.height=a.height=A.height),!n.width&&!n.height&&(r(a),n.width=a.width,n.height=a.height),s.clearRect(0,0,n.width,n.height),c=c.filter(function(g){return le(s,g)}),c.length?t=E.frame(m):f()}t=E.frame(m),i=f});return{addFettis:function(v){return c=c.concat(v),d},canvas:a,promise:d,reset:function(){t&&E.cancel(t),i&&i()}}}function D(a,e){var r=!a,n=!!y(e||{},"resize"),o=!1,c=y(e,"disableForReducedMotion",Boolean),s=_&&!!y(e||{},"useWorker"),t=s?z():null,i=r?ne:oe,d=a&&t?!!a.__confetti_initialized:!1,v=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,f;function m(l,k,b){for(var C=y(l,"particleCount",Y),N=y(l,"angle",Number),I=y(l,"spread",Number),x=y(l,"startVelocity",Number),ye=y(l,"decay",Number),ve=y(l,"gravity",Number),me=y(l,"drift",Number),Z=y(l,"colors",ae),pe=y(l,"ticks",Number),K=y(l,"shapes"),ge=y(l,"scalar"),Me=!!y(l,"flat"),G=te(l),J=C,W=[],ke=a.width*G.x,we=a.height*G.y;J--;)W.push(ie({x:ke,y:we,angle:N,spread:I,startVelocity:x,color:Z[J%Z.length],shape:K[ee(0,K.length)],ticks:pe,decay:ye,gravity:ve,drift:me,scalar:ge,flat:Me}));return f?f.addFettis(W):(f=he(a,W,i,k,b),f.promise)}function g(l){var k=c||y(l,"disableForReducedMotion",Boolean),b=y(l,"zIndex",Number);if(k&&v)return T(function(x){x()});r&&f?a=f.canvas:r&&!a&&(a=ce(b),document.body.appendChild(a)),n&&!d&&i(a);var C={width:a.width,height:a.height};t&&!d&&t.init(a),d=!0,t&&(a.__confetti_initialized=!0);function N(){if(t){var x={getBoundingClientRect:function(){if(!r)return a.getBoundingClientRect()}};i(x),t.postMessage({resize:{width:x.width,height:x.height}});return}C.width=C.height=null}function I(){f=null,n&&(o=!1,h.removeEventListener("resize",N)),r&&a&&(document.body.contains(a)&&document.body.removeChild(a),a=null,d=!1)}return n&&!o&&(o=!0,h.addEventListener("resize",N,!1)),t?t.fire(l,C,I):m(l,C,I)}return g.reset=function(){t&&t.reset(),f&&f.reset()},g}var q;function H(){return q||(q=D(null,{useWorker:!0,resize:!0})),q}function de(a,e,r,n,o,c,s){var t=new Path2D(a),i=new Path2D;i.addPath(t,new DOMMatrix(e));var d=new Path2D;return d.addPath(i,new DOMMatrix([Math.cos(s)*o,Math.sin(s)*o,-Math.sin(s)*c,Math.cos(s)*c,r,n])),d}function ue(a){if(!L)throw new Error("path confetti are not supported in this browser");var e,r;typeof a=="string"?e=a:(e=a.path,r=a.matrix);var n=new Path2D(e),o=document.createElement("canvas"),c=o.getContext("2d");if(!r){for(var s=1e3,t=s,i=s,d=0,v=0,f,m,g=0;g<s;g+=2)for(var l=0;l<s;l+=2)c.isPointInPath(n,g,l,"nonzero")&&(t=Math.min(t,g),i=Math.min(i,l),d=Math.max(d,g),v=Math.max(v,l));f=d-t,m=v-i;var k=10,b=Math.min(k/f,k/m);r=[b,0,0,b,-Math.round(f/2+t)*b,-Math.round(m/2+i)*b]}return{type:"path",path:e,matrix:r}}function fe(a){var e,r=1,n="#000000",o='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof a=="string"?e=a:(e=a.text,r="scalar"in a?a.scalar:r,o="fontFamily"in a?a.fontFamily:o,n="color"in a?a.color:n);var c=10*r,s=""+c+"px "+o,t=new OffscreenCanvas(c,c),i=t.getContext("2d");i.font=s;var d=i.measureText(e),v=Math.ceil(d.actualBoundingBoxRight+d.actualBoundingBoxLeft),f=Math.ceil(d.actualBoundingBoxAscent+d.actualBoundingBoxDescent),m=2,g=d.actualBoundingBoxLeft+m,l=d.actualBoundingBoxAscent+m;v+=m+m,f+=m+m,t=new OffscreenCanvas(v,f),i=t.getContext("2d"),i.font=s,i.fillStyle=n,i.fillText(e,g,l);var k=1/r;return{type:"bitmap",bitmap:t.transferToImageBitmap(),matrix:[k,0,0,k,-v*k/2,-f*k/2]}}M.exports=function(){return H().apply(this,arguments)},M.exports.reset=function(){H().reset()},M.exports.create=D,M.exports.shapeFromPath=ue,M.exports.shapeFromText=fe})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),U,!1);const aa=U.exports;U.exports.create;/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=(...p)=>p.filter((h,M,w)=>!!h&&h.trim()!==""&&w.indexOf(h)===M).join(" ").trim();/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=p=>p.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=p=>p.replace(/^([A-Z])|[\s-_]+(\w)/g,(h,M,w)=>w?w.toUpperCase():M.toLowerCase());/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=p=>{const h=Ce(p);return h.charAt(0).toUpperCase()+h.slice(1)};/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var V={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=p=>{for(const h in p)if(h.startsWith("aria-")||h==="role"||h==="title")return!0;return!1},_e=S.createContext({}),Ne=()=>S.useContext(_e),Ae=S.forwardRef(({color:p,size:h,strokeWidth:M,absoluteStrokeWidth:w,className:A="",children:_,iconNode:L,...F},$)=>{const{size:T=24,strokeWidth:P=2,absoluteStrokeWidth:E=!1,color:z="currentColor",className:R=""}=Ne()??{},j=w??E?Number(M??P)*24/Number(h??T):M??P;return S.createElement("svg",{ref:$,...V,width:h??T??V.width,height:h??T??V.height,stroke:p??z,strokeWidth:j,className:X("lucide",R,A),...!_&&!xe(F)&&{"aria-hidden":"true"},...F},[...L.map(([B,y])=>S.createElement(B,y)),...Array.isArray(_)?_:[_]])});/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=(p,h)=>{const M=S.forwardRef(({className:w,...A},_)=>S.createElement(Ae,{ref:_,iconNode:h,className:X(`lucide-${be(Q(p))}`,`lucide-${p}`,w),...A}));return M.displayName=Q(p),M};/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],ra=u("arrow-left",Te);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],ta=u("arrow-up-right",Ie);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=[["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",key:"oz39mx"}]],na=u("bookmark",Se);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],oa=u("check",Pe);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],ca=u("chevron-right",Ee);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],sa=u("chevron-left",Le);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],ia=u("clock",Fe);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],la=u("cpu",$e);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],ha=u("disc",ze);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],da=u("flame",Re);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],ua=u("heart",je);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],fa=u("layers",Be);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],ya=u("mail",Oe);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],va=u("menu",qe);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],ma=u("message-square",We);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],pa=u("search",Ve);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],ga=u("send",Ue);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],Ma=u("share-2",De);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ka=u("shield-check",He);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],wa=u("sparkles",Ze);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],ba=u("star",Ke);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Ca=u("tag",Ge);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=[["path",{d:"M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2",key:"pwuv1l"}],["path",{d:"M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2",key:"1y54w1"}],["path",{d:"M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3",key:"e30mpu"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3",key:"i0yafy"}]],xa=u("trophy",Je);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],_a=u("volume-2",Qe);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Na=u("x",Xe);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]],Aa=u("zap",Ye);export{ta as A,na as B,sa as C,ha as D,da as F,ua as H,fa as L,va as M,wa as S,xa as T,_a as V,Na as X,Aa as Z,pa as a,ka as b,aa as c,ca as d,ya as e,ga as f,oa as g,Ca as h,ra as i,Ma as j,ia as k,ba as l,ma as m,la as n};
