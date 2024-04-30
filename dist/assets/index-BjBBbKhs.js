function kg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var fr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Bl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Tg={exports:{}},Fl={},Ig={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Va=Symbol.for("react.element"),Hx=Symbol.for("react.portal"),Wx=Symbol.for("react.fragment"),Kx=Symbol.for("react.strict_mode"),Yx=Symbol.for("react.profiler"),qx=Symbol.for("react.provider"),Gx=Symbol.for("react.context"),Xx=Symbol.for("react.forward_ref"),Qx=Symbol.for("react.suspense"),Jx=Symbol.for("react.memo"),Zx=Symbol.for("react.lazy"),sp=Symbol.iterator;function e2(e){return e===null||typeof e!="object"?null:(e=sp&&e[sp]||e["@@iterator"],typeof e=="function"?e:null)}var Pg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ng=Object.assign,jg={};function _o(e,t,n){this.props=e,this.context=t,this.refs=jg,this.updater=n||Pg}_o.prototype.isReactComponent={};_o.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_o.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Rg(){}Rg.prototype=_o.prototype;function Wd(e,t,n){this.props=e,this.context=t,this.refs=jg,this.updater=n||Pg}var Kd=Wd.prototype=new Rg;Kd.constructor=Wd;Ng(Kd,_o.prototype);Kd.isPureReactComponent=!0;var lp=Array.isArray,Ag=Object.prototype.hasOwnProperty,Yd={current:null},Og={key:!0,ref:!0,__self:!0,__source:!0};function Lg(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Ag.call(t,r)&&!Og.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),p=0;p<l;p++)c[p]=arguments[p+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Va,type:e,key:o,ref:a,props:i,_owner:Yd.current}}function t2(e,t){return{$$typeof:Va,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function qd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Va}function n2(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var cp=/\/+/g;function Hc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?n2(""+e.key):t.toString(36)}function Ds(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Va:case Hx:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Hc(a,0):r,lp(i)?(n="",e!=null&&(n=e.replace(cp,"$&/")+"/"),Ds(i,t,n,"",function(p){return p})):i!=null&&(qd(i)&&(i=t2(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(cp,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",lp(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+Hc(o,l);a+=Ds(o,t,n,c,i)}else if(c=e2(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+Hc(o,l++),a+=Ds(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function fs(e,t,n){if(e==null)return e;var r=[],i=0;return Ds(e,r,"","",function(o){return t.call(n,o,i++)}),r}function r2(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var St={current:null},Ms={transition:null},i2={ReactCurrentDispatcher:St,ReactCurrentBatchConfig:Ms,ReactCurrentOwner:Yd};de.Children={map:fs,forEach:function(e,t,n){fs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return fs(e,function(){t++}),t},toArray:function(e){return fs(e,function(t){return t})||[]},only:function(e){if(!qd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};de.Component=_o;de.Fragment=Wx;de.Profiler=Yx;de.PureComponent=Wd;de.StrictMode=Kx;de.Suspense=Qx;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=i2;de.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ng({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Yd.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Ag.call(t,c)&&!Og.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var p=0;p<c;p++)l[p]=arguments[p+2];r.children=l}return{$$typeof:Va,type:e.type,key:i,ref:o,props:r,_owner:a}};de.createContext=function(e){return e={$$typeof:Gx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qx,_context:e},e.Consumer=e};de.createElement=Lg;de.createFactory=function(e){var t=Lg.bind(null,e);return t.type=e,t};de.createRef=function(){return{current:null}};de.forwardRef=function(e){return{$$typeof:Xx,render:e}};de.isValidElement=qd;de.lazy=function(e){return{$$typeof:Zx,_payload:{_status:-1,_result:e},_init:r2}};de.memo=function(e,t){return{$$typeof:Jx,type:e,compare:t===void 0?null:t}};de.startTransition=function(e){var t=Ms.transition;Ms.transition={};try{e()}finally{Ms.transition=t}};de.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};de.useCallback=function(e,t){return St.current.useCallback(e,t)};de.useContext=function(e){return St.current.useContext(e)};de.useDebugValue=function(){};de.useDeferredValue=function(e){return St.current.useDeferredValue(e)};de.useEffect=function(e,t){return St.current.useEffect(e,t)};de.useId=function(){return St.current.useId()};de.useImperativeHandle=function(e,t,n){return St.current.useImperativeHandle(e,t,n)};de.useInsertionEffect=function(e,t){return St.current.useInsertionEffect(e,t)};de.useLayoutEffect=function(e,t){return St.current.useLayoutEffect(e,t)};de.useMemo=function(e,t){return St.current.useMemo(e,t)};de.useReducer=function(e,t,n){return St.current.useReducer(e,t,n)};de.useRef=function(e){return St.current.useRef(e)};de.useState=function(e){return St.current.useState(e)};de.useSyncExternalStore=function(e,t,n){return St.current.useSyncExternalStore(e,t,n)};de.useTransition=function(){return St.current.useTransition()};de.version="18.3.0";Ig.exports=de;var I=Ig.exports;const ue=Bl(I),Pu=kg({__proto__:null,default:ue},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o2=I,a2=Symbol.for("react.element"),s2=Symbol.for("react.fragment"),l2=Object.prototype.hasOwnProperty,c2=o2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u2={key:!0,ref:!0,__self:!0,__source:!0};function Dg(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)l2.call(t,r)&&!u2.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:a2,type:e,key:o,ref:a,props:i,_owner:c2.current}}Fl.Fragment=s2;Fl.jsx=Dg;Fl.jsxs=Dg;Tg.exports=Fl;var d=Tg.exports,Nu={},Mg={exports:{}},Ft={},Bg={exports:{}},Fg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,X){var J=R.length;R.push(X);e:for(;0<J;){var ie=J-1>>>1,ne=R[ie];if(0<i(ne,X))R[ie]=X,R[J]=ne,J=ie;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var X=R[0],J=R.pop();if(J!==X){R[0]=J;e:for(var ie=0,ne=R.length,N=ne>>>1;ie<N;){var Se=2*(ie+1)-1,ye=R[Se],Ce=Se+1,De=R[Ce];if(0>i(ye,J))Ce<ne&&0>i(De,ye)?(R[ie]=De,R[Ce]=J,ie=Ce):(R[ie]=ye,R[Se]=J,ie=Se);else if(Ce<ne&&0>i(De,J))R[ie]=De,R[Ce]=J,ie=Ce;else break e}}return X}function i(R,X){var J=R.sortIndex-X.sortIndex;return J!==0?J:R.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],p=[],m=1,g=null,y=3,C=!1,E=!1,S=!1,P=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(R){for(var X=n(p);X!==null;){if(X.callback===null)r(p);else if(X.startTime<=R)r(p),X.sortIndex=X.expirationTime,t(c,X);else break;X=n(p)}}function T(R){if(S=!1,x(R),!E)if(n(c)!==null)E=!0,gt(L);else{var X=n(p);X!==null&&We(T,X.startTime-R)}}function L(R,X){E=!1,S&&(S=!1,w(A),A=-1),C=!0;var J=y;try{for(x(X),g=n(c);g!==null&&(!(g.expirationTime>X)||R&&!Q());){var ie=g.callback;if(typeof ie=="function"){g.callback=null,y=g.priorityLevel;var ne=ie(g.expirationTime<=X);X=e.unstable_now(),typeof ne=="function"?g.callback=ne:g===n(c)&&r(c),x(X)}else r(c);g=n(c)}if(g!==null)var N=!0;else{var Se=n(p);Se!==null&&We(T,Se.startTime-X),N=!1}return N}finally{g=null,y=J,C=!1}}var M=!1,b=null,A=-1,F=5,z=-1;function Q(){return!(e.unstable_now()-z<F)}function oe(){if(b!==null){var R=e.unstable_now();z=R;var X=!0;try{X=b(!0,R)}finally{X?he():(M=!1,b=null)}}else M=!1}var he;if(typeof v=="function")he=function(){v(oe)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,He=_e.port2;_e.port1.onmessage=oe,he=function(){He.postMessage(null)}}else he=function(){P(oe,0)};function gt(R){b=R,M||(M=!0,he())}function We(R,X){A=P(function(){R(e.unstable_now())},X)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){E||C||(E=!0,gt(L))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(R){switch(y){case 1:case 2:case 3:var X=3;break;default:X=y}var J=y;y=X;try{return R()}finally{y=J}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,X){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var J=y;y=R;try{return X()}finally{y=J}},e.unstable_scheduleCallback=function(R,X,J){var ie=e.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ie+J:ie):J=ie,R){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=J+ne,R={id:m++,callback:X,priorityLevel:R,startTime:J,expirationTime:ne,sortIndex:-1},J>ie?(R.sortIndex=J,t(p,R),n(c)===null&&R===n(p)&&(S?(w(A),A=-1):S=!0,We(T,J-ie))):(R.sortIndex=ne,t(c,R),E||C||(E=!0,gt(L))),R},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(R){var X=y;return function(){var J=y;y=X;try{return R.apply(this,arguments)}finally{y=J}}}})(Fg);Bg.exports=Fg;var d2=Bg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f2=I,Bt=d2;function U(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ug=new Set,ha={};function wi(e,t){co(e,t),co(e+"Capture",t)}function co(e,t){for(ha[e]=t,e=0;e<t.length;e++)Ug.add(t[e])}var Qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ju=Object.prototype.hasOwnProperty,h2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,up={},dp={};function p2(e){return ju.call(dp,e)?!0:ju.call(up,e)?!1:h2.test(e)?dp[e]=!0:(up[e]=!0,!1)}function m2(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function g2(e,t,n,r){if(t===null||typeof t>"u"||m2(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Et(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){lt[e]=new Et(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];lt[t]=new Et(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){lt[e]=new Et(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){lt[e]=new Et(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){lt[e]=new Et(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){lt[e]=new Et(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){lt[e]=new Et(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){lt[e]=new Et(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){lt[e]=new Et(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gd=/[\-:]([a-z])/g;function Xd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Gd,Xd);lt[t]=new Et(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Gd,Xd);lt[t]=new Et(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Gd,Xd);lt[t]=new Et(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){lt[e]=new Et(e,1,!1,e.toLowerCase(),null,!1,!1)});lt.xlinkHref=new Et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){lt[e]=new Et(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qd(e,t,n,r){var i=lt.hasOwnProperty(t)?lt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(g2(t,n,i,r)&&(n=null),r||i===null?p2(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var rr=f2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hs=Symbol.for("react.element"),Bi=Symbol.for("react.portal"),Fi=Symbol.for("react.fragment"),Jd=Symbol.for("react.strict_mode"),Ru=Symbol.for("react.profiler"),zg=Symbol.for("react.provider"),$g=Symbol.for("react.context"),Zd=Symbol.for("react.forward_ref"),Au=Symbol.for("react.suspense"),Ou=Symbol.for("react.suspense_list"),ef=Symbol.for("react.memo"),gr=Symbol.for("react.lazy"),Vg=Symbol.for("react.offscreen"),fp=Symbol.iterator;function Do(e){return e===null||typeof e!="object"?null:(e=fp&&e[fp]||e["@@iterator"],typeof e=="function"?e:null)}var Le=Object.assign,Wc;function qo(e){if(Wc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Wc=t&&t[1]||""}return`
`+Wc+e}var Kc=!1;function Yc(e,t){if(!e||Kc)return"";Kc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var i=p.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{Kc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?qo(e):""}function v2(e){switch(e.tag){case 5:return qo(e.type);case 16:return qo("Lazy");case 13:return qo("Suspense");case 19:return qo("SuspenseList");case 0:case 2:case 15:return e=Yc(e.type,!1),e;case 11:return e=Yc(e.type.render,!1),e;case 1:return e=Yc(e.type,!0),e;default:return""}}function Lu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Fi:return"Fragment";case Bi:return"Portal";case Ru:return"Profiler";case Jd:return"StrictMode";case Au:return"Suspense";case Ou:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $g:return(e.displayName||"Context")+".Consumer";case zg:return(e._context.displayName||"Context")+".Provider";case Zd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ef:return t=e.displayName||null,t!==null?t:Lu(e.type)||"Memo";case gr:t=e._payload,e=e._init;try{return Lu(e(t))}catch{}}return null}function y2(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lu(t);case 8:return t===Jd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Lr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function w2(e){var t=Hg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ps(e){e._valueTracker||(e._valueTracker=w2(e))}function Wg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Hg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function rl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Du(e,t){var n=t.checked;return Le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function hp(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Lr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Kg(e,t){t=t.checked,t!=null&&Qd(e,"checked",t,!1)}function Mu(e,t){Kg(e,t);var n=Lr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Bu(e,t.type,n):t.hasOwnProperty("defaultValue")&&Bu(e,t.type,Lr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function pp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Bu(e,t,n){(t!=="number"||rl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Go=Array.isArray;function Ji(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Lr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Fu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(U(91));return Le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function mp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(U(92));if(Go(n)){if(1<n.length)throw Error(U(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Lr(n)}}function Yg(e,t){var n=Lr(t.value),r=Lr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function gp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ms,Gg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ms=ms||document.createElement("div"),ms.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ms.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function pa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ta={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},x2=["Webkit","ms","Moz","O"];Object.keys(ta).forEach(function(e){x2.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ta[t]=ta[e]})});function Xg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ta.hasOwnProperty(e)&&ta[e]?(""+t).trim():t+"px"}function Qg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Xg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var b2=Le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zu(e,t){if(t){if(b2[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(U(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(U(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(U(61))}if(t.style!=null&&typeof t.style!="object")throw Error(U(62))}}function $u(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vu=null;function tf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hu=null,Zi=null,eo=null;function vp(e){if(e=Ka(e)){if(typeof Hu!="function")throw Error(U(280));var t=e.stateNode;t&&(t=Hl(t),Hu(e.stateNode,e.type,t))}}function Jg(e){Zi?eo?eo.push(e):eo=[e]:Zi=e}function Zg(){if(Zi){var e=Zi,t=eo;if(eo=Zi=null,vp(e),t)for(e=0;e<t.length;e++)vp(t[e])}}function e0(e,t){return e(t)}function t0(){}var qc=!1;function n0(e,t,n){if(qc)return e(t,n);qc=!0;try{return e0(e,t,n)}finally{qc=!1,(Zi!==null||eo!==null)&&(t0(),Zg())}}function ma(e,t){var n=e.stateNode;if(n===null)return null;var r=Hl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(U(231,t,typeof n));return n}var Wu=!1;if(Qn)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){Wu=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{Wu=!1}function _2(e,t,n,r,i,o,a,l,c){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(m){this.onError(m)}}var na=!1,il=null,ol=!1,Ku=null,S2={onError:function(e){na=!0,il=e}};function E2(e,t,n,r,i,o,a,l,c){na=!1,il=null,_2.apply(S2,arguments)}function C2(e,t,n,r,i,o,a,l,c){if(E2.apply(this,arguments),na){if(na){var p=il;na=!1,il=null}else throw Error(U(198));ol||(ol=!0,Ku=p)}}function xi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function r0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function yp(e){if(xi(e)!==e)throw Error(U(188))}function k2(e){var t=e.alternate;if(!t){if(t=xi(e),t===null)throw Error(U(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return yp(i),e;if(o===r)return yp(i),t;o=o.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?e:t}function i0(e){return e=k2(e),e!==null?o0(e):null}function o0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=o0(e);if(t!==null)return t;e=e.sibling}return null}var a0=Bt.unstable_scheduleCallback,wp=Bt.unstable_cancelCallback,T2=Bt.unstable_shouldYield,I2=Bt.unstable_requestPaint,Ve=Bt.unstable_now,P2=Bt.unstable_getCurrentPriorityLevel,nf=Bt.unstable_ImmediatePriority,s0=Bt.unstable_UserBlockingPriority,al=Bt.unstable_NormalPriority,N2=Bt.unstable_LowPriority,l0=Bt.unstable_IdlePriority,Ul=null,In=null;function j2(e){if(In&&typeof In.onCommitFiberRoot=="function")try{In.onCommitFiberRoot(Ul,e,void 0,(e.current.flags&128)===128)}catch{}}var hn=Math.clz32?Math.clz32:O2,R2=Math.log,A2=Math.LN2;function O2(e){return e>>>=0,e===0?32:31-(R2(e)/A2|0)|0}var gs=64,vs=4194304;function Xo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function sl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Xo(l):(o&=a,o!==0&&(r=Xo(o)))}else a=n&~i,a!==0?r=Xo(a):o!==0&&(r=Xo(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-hn(t),i=1<<n,r|=e[n],t&=~i;return r}function L2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function D2(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-hn(o),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=L2(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function Yu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function c0(){var e=gs;return gs<<=1,!(gs&4194240)&&(gs=64),e}function Gc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ha(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-hn(t),e[t]=n}function M2(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-hn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function rf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-hn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var we=0;function u0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var d0,of,f0,h0,p0,qu=!1,ys=[],Cr=null,kr=null,Tr=null,ga=new Map,va=new Map,yr=[],B2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xp(e,t){switch(e){case"focusin":case"focusout":Cr=null;break;case"dragenter":case"dragleave":kr=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":ga.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":va.delete(t.pointerId)}}function Bo(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ka(t),t!==null&&of(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function F2(e,t,n,r,i){switch(t){case"focusin":return Cr=Bo(Cr,e,t,n,r,i),!0;case"dragenter":return kr=Bo(kr,e,t,n,r,i),!0;case"mouseover":return Tr=Bo(Tr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ga.set(o,Bo(ga.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,va.set(o,Bo(va.get(o)||null,e,t,n,r,i)),!0}return!1}function m0(e){var t=ti(e.target);if(t!==null){var n=xi(t);if(n!==null){if(t=n.tag,t===13){if(t=r0(n),t!==null){e.blockedOn=t,p0(e.priority,function(){f0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Vu=r,n.target.dispatchEvent(r),Vu=null}else return t=Ka(n),t!==null&&of(t),e.blockedOn=n,!1;t.shift()}return!0}function bp(e,t,n){Bs(e)&&n.delete(t)}function U2(){qu=!1,Cr!==null&&Bs(Cr)&&(Cr=null),kr!==null&&Bs(kr)&&(kr=null),Tr!==null&&Bs(Tr)&&(Tr=null),ga.forEach(bp),va.forEach(bp)}function Fo(e,t){e.blockedOn===t&&(e.blockedOn=null,qu||(qu=!0,Bt.unstable_scheduleCallback(Bt.unstable_NormalPriority,U2)))}function ya(e){function t(i){return Fo(i,e)}if(0<ys.length){Fo(ys[0],e);for(var n=1;n<ys.length;n++){var r=ys[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Cr!==null&&Fo(Cr,e),kr!==null&&Fo(kr,e),Tr!==null&&Fo(Tr,e),ga.forEach(t),va.forEach(t),n=0;n<yr.length;n++)r=yr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<yr.length&&(n=yr[0],n.blockedOn===null);)m0(n),n.blockedOn===null&&yr.shift()}var to=rr.ReactCurrentBatchConfig,ll=!0;function z2(e,t,n,r){var i=we,o=to.transition;to.transition=null;try{we=1,af(e,t,n,r)}finally{we=i,to.transition=o}}function $2(e,t,n,r){var i=we,o=to.transition;to.transition=null;try{we=4,af(e,t,n,r)}finally{we=i,to.transition=o}}function af(e,t,n,r){if(ll){var i=Gu(e,t,n,r);if(i===null)ou(e,t,r,cl,n),xp(e,r);else if(F2(i,e,t,n,r))r.stopPropagation();else if(xp(e,r),t&4&&-1<B2.indexOf(e)){for(;i!==null;){var o=Ka(i);if(o!==null&&d0(o),o=Gu(e,t,n,r),o===null&&ou(e,t,r,cl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ou(e,t,r,null,n)}}var cl=null;function Gu(e,t,n,r){if(cl=null,e=tf(r),e=ti(e),e!==null)if(t=xi(e),t===null)e=null;else if(n=t.tag,n===13){if(e=r0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return cl=e,null}function g0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(P2()){case nf:return 1;case s0:return 4;case al:case N2:return 16;case l0:return 536870912;default:return 16}default:return 16}}var _r=null,sf=null,Fs=null;function v0(){if(Fs)return Fs;var e,t=sf,n=t.length,r,i="value"in _r?_r.value:_r.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Fs=i.slice(e,1<r?1-r:void 0)}function Us(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ws(){return!0}function _p(){return!1}function Ut(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ws:_p,this.isPropagationStopped=_p,this}return Le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ws)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ws)},persist:function(){},isPersistent:ws}),t}var So={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lf=Ut(So),Wa=Le({},So,{view:0,detail:0}),V2=Ut(Wa),Xc,Qc,Uo,zl=Le({},Wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Uo&&(Uo&&e.type==="mousemove"?(Xc=e.screenX-Uo.screenX,Qc=e.screenY-Uo.screenY):Qc=Xc=0,Uo=e),Xc)},movementY:function(e){return"movementY"in e?e.movementY:Qc}}),Sp=Ut(zl),H2=Le({},zl,{dataTransfer:0}),W2=Ut(H2),K2=Le({},Wa,{relatedTarget:0}),Jc=Ut(K2),Y2=Le({},So,{animationName:0,elapsedTime:0,pseudoElement:0}),q2=Ut(Y2),G2=Le({},So,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),X2=Ut(G2),Q2=Le({},So,{data:0}),Ep=Ut(Q2),J2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=eb[e])?!!t[e]:!1}function cf(){return tb}var nb=Le({},Wa,{key:function(e){if(e.key){var t=J2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Us(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Z2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cf,charCode:function(e){return e.type==="keypress"?Us(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Us(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rb=Ut(nb),ib=Le({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cp=Ut(ib),ob=Le({},Wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cf}),ab=Ut(ob),sb=Le({},So,{propertyName:0,elapsedTime:0,pseudoElement:0}),lb=Ut(sb),cb=Le({},zl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ub=Ut(cb),db=[9,13,27,32],uf=Qn&&"CompositionEvent"in window,ra=null;Qn&&"documentMode"in document&&(ra=document.documentMode);var fb=Qn&&"TextEvent"in window&&!ra,y0=Qn&&(!uf||ra&&8<ra&&11>=ra),kp=" ",Tp=!1;function w0(e,t){switch(e){case"keyup":return db.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function x0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ui=!1;function hb(e,t){switch(e){case"compositionend":return x0(t);case"keypress":return t.which!==32?null:(Tp=!0,kp);case"textInput":return e=t.data,e===kp&&Tp?null:e;default:return null}}function pb(e,t){if(Ui)return e==="compositionend"||!uf&&w0(e,t)?(e=v0(),Fs=sf=_r=null,Ui=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return y0&&t.locale!=="ko"?null:t.data;default:return null}}var mb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ip(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!mb[e.type]:t==="textarea"}function b0(e,t,n,r){Jg(r),t=ul(t,"onChange"),0<t.length&&(n=new lf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ia=null,wa=null;function gb(e){R0(e,0)}function $l(e){var t=Vi(e);if(Wg(t))return e}function vb(e,t){if(e==="change")return t}var _0=!1;if(Qn){var Zc;if(Qn){var eu="oninput"in document;if(!eu){var Pp=document.createElement("div");Pp.setAttribute("oninput","return;"),eu=typeof Pp.oninput=="function"}Zc=eu}else Zc=!1;_0=Zc&&(!document.documentMode||9<document.documentMode)}function Np(){ia&&(ia.detachEvent("onpropertychange",S0),wa=ia=null)}function S0(e){if(e.propertyName==="value"&&$l(wa)){var t=[];b0(t,wa,e,tf(e)),n0(gb,t)}}function yb(e,t,n){e==="focusin"?(Np(),ia=t,wa=n,ia.attachEvent("onpropertychange",S0)):e==="focusout"&&Np()}function wb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $l(wa)}function xb(e,t){if(e==="click")return $l(t)}function bb(e,t){if(e==="input"||e==="change")return $l(t)}function _b(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gn=typeof Object.is=="function"?Object.is:_b;function xa(e,t){if(gn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ju.call(t,i)||!gn(e[i],t[i]))return!1}return!0}function jp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rp(e,t){var n=jp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jp(n)}}function E0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?E0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function C0(){for(var e=window,t=rl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=rl(e.document)}return t}function df(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sb(e){var t=C0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&E0(n.ownerDocument.documentElement,n)){if(r!==null&&df(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Rp(n,o);var a=Rp(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Eb=Qn&&"documentMode"in document&&11>=document.documentMode,zi=null,Xu=null,oa=null,Qu=!1;function Ap(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qu||zi==null||zi!==rl(r)||(r=zi,"selectionStart"in r&&df(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),oa&&xa(oa,r)||(oa=r,r=ul(Xu,"onSelect"),0<r.length&&(t=new lf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=zi)))}function xs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $i={animationend:xs("Animation","AnimationEnd"),animationiteration:xs("Animation","AnimationIteration"),animationstart:xs("Animation","AnimationStart"),transitionend:xs("Transition","TransitionEnd")},tu={},k0={};Qn&&(k0=document.createElement("div").style,"AnimationEvent"in window||(delete $i.animationend.animation,delete $i.animationiteration.animation,delete $i.animationstart.animation),"TransitionEvent"in window||delete $i.transitionend.transition);function Vl(e){if(tu[e])return tu[e];if(!$i[e])return e;var t=$i[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in k0)return tu[e]=t[n];return e}var T0=Vl("animationend"),I0=Vl("animationiteration"),P0=Vl("animationstart"),N0=Vl("transitionend"),j0=new Map,Op="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(e,t){j0.set(e,t),wi(t,[e])}for(var nu=0;nu<Op.length;nu++){var ru=Op[nu],Cb=ru.toLowerCase(),kb=ru[0].toUpperCase()+ru.slice(1);Mr(Cb,"on"+kb)}Mr(T0,"onAnimationEnd");Mr(I0,"onAnimationIteration");Mr(P0,"onAnimationStart");Mr("dblclick","onDoubleClick");Mr("focusin","onFocus");Mr("focusout","onBlur");Mr(N0,"onTransitionEnd");co("onMouseEnter",["mouseout","mouseover"]);co("onMouseLeave",["mouseout","mouseover"]);co("onPointerEnter",["pointerout","pointerover"]);co("onPointerLeave",["pointerout","pointerover"]);wi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wi("onBeforeInput",["compositionend","keypress","textInput","paste"]);wi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tb=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qo));function Lp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,C2(r,t,void 0,e),e.currentTarget=null}function R0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,p=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;Lp(i,l,p),o=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,p=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;Lp(i,l,p),o=c}}}if(ol)throw e=Ku,ol=!1,Ku=null,e}function Ie(e,t){var n=t[nd];n===void 0&&(n=t[nd]=new Set);var r=e+"__bubble";n.has(r)||(A0(t,e,2,!1),n.add(r))}function iu(e,t,n){var r=0;t&&(r|=4),A0(n,e,r,t)}var bs="_reactListening"+Math.random().toString(36).slice(2);function ba(e){if(!e[bs]){e[bs]=!0,Ug.forEach(function(n){n!=="selectionchange"&&(Tb.has(n)||iu(n,!1,e),iu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bs]||(t[bs]=!0,iu("selectionchange",!1,t))}}function A0(e,t,n,r){switch(g0(t)){case 1:var i=z2;break;case 4:i=$2;break;default:i=af}n=i.bind(null,t,n,e),i=void 0,!Wu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ou(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=ti(l),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}l=l.parentNode}}r=r.return}n0(function(){var p=o,m=tf(n),g=[];e:{var y=j0.get(e);if(y!==void 0){var C=lf,E=e;switch(e){case"keypress":if(Us(n)===0)break e;case"keydown":case"keyup":C=rb;break;case"focusin":E="focus",C=Jc;break;case"focusout":E="blur",C=Jc;break;case"beforeblur":case"afterblur":C=Jc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=W2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=ab;break;case T0:case I0:case P0:C=q2;break;case N0:C=lb;break;case"scroll":C=V2;break;case"wheel":C=ub;break;case"copy":case"cut":case"paste":C=X2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Cp}var S=(t&4)!==0,P=!S&&e==="scroll",w=S?y!==null?y+"Capture":null:y;S=[];for(var v=p,x;v!==null;){x=v;var T=x.stateNode;if(x.tag===5&&T!==null&&(x=T,w!==null&&(T=ma(v,w),T!=null&&S.push(_a(v,T,x)))),P)break;v=v.return}0<S.length&&(y=new C(y,E,null,n,m),g.push({event:y,listeners:S}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",y&&n!==Vu&&(E=n.relatedTarget||n.fromElement)&&(ti(E)||E[Jn]))break e;if((C||y)&&(y=m.window===m?m:(y=m.ownerDocument)?y.defaultView||y.parentWindow:window,C?(E=n.relatedTarget||n.toElement,C=p,E=E?ti(E):null,E!==null&&(P=xi(E),E!==P||E.tag!==5&&E.tag!==6)&&(E=null)):(C=null,E=p),C!==E)){if(S=Sp,T="onMouseLeave",w="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(S=Cp,T="onPointerLeave",w="onPointerEnter",v="pointer"),P=C==null?y:Vi(C),x=E==null?y:Vi(E),y=new S(T,v+"leave",C,n,m),y.target=P,y.relatedTarget=x,T=null,ti(m)===p&&(S=new S(w,v+"enter",E,n,m),S.target=x,S.relatedTarget=P,T=S),P=T,C&&E)t:{for(S=C,w=E,v=0,x=S;x;x=Di(x))v++;for(x=0,T=w;T;T=Di(T))x++;for(;0<v-x;)S=Di(S),v--;for(;0<x-v;)w=Di(w),x--;for(;v--;){if(S===w||w!==null&&S===w.alternate)break t;S=Di(S),w=Di(w)}S=null}else S=null;C!==null&&Dp(g,y,C,S,!1),E!==null&&P!==null&&Dp(g,P,E,S,!0)}}e:{if(y=p?Vi(p):window,C=y.nodeName&&y.nodeName.toLowerCase(),C==="select"||C==="input"&&y.type==="file")var L=vb;else if(Ip(y))if(_0)L=bb;else{L=wb;var M=yb}else(C=y.nodeName)&&C.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(L=xb);if(L&&(L=L(e,p))){b0(g,L,n,m);break e}M&&M(e,y,p),e==="focusout"&&(M=y._wrapperState)&&M.controlled&&y.type==="number"&&Bu(y,"number",y.value)}switch(M=p?Vi(p):window,e){case"focusin":(Ip(M)||M.contentEditable==="true")&&(zi=M,Xu=p,oa=null);break;case"focusout":oa=Xu=zi=null;break;case"mousedown":Qu=!0;break;case"contextmenu":case"mouseup":case"dragend":Qu=!1,Ap(g,n,m);break;case"selectionchange":if(Eb)break;case"keydown":case"keyup":Ap(g,n,m)}var b;if(uf)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Ui?w0(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(y0&&n.locale!=="ko"&&(Ui||A!=="onCompositionStart"?A==="onCompositionEnd"&&Ui&&(b=v0()):(_r=m,sf="value"in _r?_r.value:_r.textContent,Ui=!0)),M=ul(p,A),0<M.length&&(A=new Ep(A,e,null,n,m),g.push({event:A,listeners:M}),b?A.data=b:(b=x0(n),b!==null&&(A.data=b)))),(b=fb?hb(e,n):pb(e,n))&&(p=ul(p,"onBeforeInput"),0<p.length&&(m=new Ep("onBeforeInput","beforeinput",null,n,m),g.push({event:m,listeners:p}),m.data=b))}R0(g,t)})}function _a(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ul(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ma(e,n),o!=null&&r.unshift(_a(e,o,i)),o=ma(e,t),o!=null&&r.push(_a(e,o,i))),e=e.return}return r}function Di(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Dp(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,p=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&p!==null&&(l=p,i?(c=ma(n,o),c!=null&&a.unshift(_a(n,c,l))):i||(c=ma(n,o),c!=null&&a.push(_a(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Ib=/\r\n?/g,Pb=/\u0000|\uFFFD/g;function Mp(e){return(typeof e=="string"?e:""+e).replace(Ib,`
`).replace(Pb,"")}function _s(e,t,n){if(t=Mp(t),Mp(e)!==t&&n)throw Error(U(425))}function dl(){}var Ju=null,Zu=null;function ed(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var td=typeof setTimeout=="function"?setTimeout:void 0,Nb=typeof clearTimeout=="function"?clearTimeout:void 0,Bp=typeof Promise=="function"?Promise:void 0,jb=typeof queueMicrotask=="function"?queueMicrotask:typeof Bp<"u"?function(e){return Bp.resolve(null).then(e).catch(Rb)}:td;function Rb(e){setTimeout(function(){throw e})}function au(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ya(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ya(t)}function Ir(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Fp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Eo=Math.random().toString(36).slice(2),Tn="__reactFiber$"+Eo,Sa="__reactProps$"+Eo,Jn="__reactContainer$"+Eo,nd="__reactEvents$"+Eo,Ab="__reactListeners$"+Eo,Ob="__reactHandles$"+Eo;function ti(e){var t=e[Tn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Jn]||n[Tn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Fp(e);e!==null;){if(n=e[Tn])return n;e=Fp(e)}return t}e=n,n=e.parentNode}return null}function Ka(e){return e=e[Tn]||e[Jn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(U(33))}function Hl(e){return e[Sa]||null}var rd=[],Hi=-1;function Br(e){return{current:e}}function Pe(e){0>Hi||(e.current=rd[Hi],rd[Hi]=null,Hi--)}function Te(e,t){Hi++,rd[Hi]=e.current,e.current=t}var Dr={},pt=Br(Dr),It=Br(!1),ui=Dr;function uo(e,t){var n=e.type.contextTypes;if(!n)return Dr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Pt(e){return e=e.childContextTypes,e!=null}function fl(){Pe(It),Pe(pt)}function Up(e,t,n){if(pt.current!==Dr)throw Error(U(168));Te(pt,t),Te(It,n)}function O0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(U(108,y2(e)||"Unknown",i));return Le({},n,r)}function hl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dr,ui=pt.current,Te(pt,e),Te(It,It.current),!0}function zp(e,t,n){var r=e.stateNode;if(!r)throw Error(U(169));n?(e=O0(e,t,ui),r.__reactInternalMemoizedMergedChildContext=e,Pe(It),Pe(pt),Te(pt,e)):Pe(It),Te(It,n)}var Un=null,Wl=!1,su=!1;function L0(e){Un===null?Un=[e]:Un.push(e)}function Lb(e){Wl=!0,L0(e)}function Fr(){if(!su&&Un!==null){su=!0;var e=0,t=we;try{var n=Un;for(we=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Un=null,Wl=!1}catch(i){throw Un!==null&&(Un=Un.slice(e+1)),a0(nf,Fr),i}finally{we=t,su=!1}}return null}var Wi=[],Ki=0,pl=null,ml=0,Yt=[],qt=0,di=null,Vn=1,Hn="";function Jr(e,t){Wi[Ki++]=ml,Wi[Ki++]=pl,pl=e,ml=t}function D0(e,t,n){Yt[qt++]=Vn,Yt[qt++]=Hn,Yt[qt++]=di,di=e;var r=Vn;e=Hn;var i=32-hn(r)-1;r&=~(1<<i),n+=1;var o=32-hn(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Vn=1<<32-hn(t)+i|n<<i|r,Hn=o+e}else Vn=1<<o|n<<i|r,Hn=e}function ff(e){e.return!==null&&(Jr(e,1),D0(e,1,0))}function hf(e){for(;e===pl;)pl=Wi[--Ki],Wi[Ki]=null,ml=Wi[--Ki],Wi[Ki]=null;for(;e===di;)di=Yt[--qt],Yt[qt]=null,Hn=Yt[--qt],Yt[qt]=null,Vn=Yt[--qt],Yt[qt]=null}var Dt=null,Ot=null,je=!1,dn=null;function M0(e,t){var n=Xt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $p(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Dt=e,Ot=Ir(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Dt=e,Ot=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=di!==null?{id:Vn,overflow:Hn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Xt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Dt=e,Ot=null,!0):!1;default:return!1}}function id(e){return(e.mode&1)!==0&&(e.flags&128)===0}function od(e){if(je){var t=Ot;if(t){var n=t;if(!$p(e,t)){if(id(e))throw Error(U(418));t=Ir(n.nextSibling);var r=Dt;t&&$p(e,t)?M0(r,n):(e.flags=e.flags&-4097|2,je=!1,Dt=e)}}else{if(id(e))throw Error(U(418));e.flags=e.flags&-4097|2,je=!1,Dt=e}}}function Vp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Dt=e}function Ss(e){if(e!==Dt)return!1;if(!je)return Vp(e),je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ed(e.type,e.memoizedProps)),t&&(t=Ot)){if(id(e))throw B0(),Error(U(418));for(;t;)M0(e,t),t=Ir(t.nextSibling)}if(Vp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(U(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ot=Ir(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ot=null}}else Ot=Dt?Ir(e.stateNode.nextSibling):null;return!0}function B0(){for(var e=Ot;e;)e=Ir(e.nextSibling)}function fo(){Ot=Dt=null,je=!1}function pf(e){dn===null?dn=[e]:dn.push(e)}var Db=rr.ReactCurrentBatchConfig;function zo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,e))}return e}function Es(e,t){throw e=Object.prototype.toString.call(t),Error(U(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Hp(e){var t=e._init;return t(e._payload)}function F0(e){function t(w,v){if(e){var x=w.deletions;x===null?(w.deletions=[v],w.flags|=16):x.push(v)}}function n(w,v){if(!e)return null;for(;v!==null;)t(w,v),v=v.sibling;return null}function r(w,v){for(w=new Map;v!==null;)v.key!==null?w.set(v.key,v):w.set(v.index,v),v=v.sibling;return w}function i(w,v){return w=Rr(w,v),w.index=0,w.sibling=null,w}function o(w,v,x){return w.index=x,e?(x=w.alternate,x!==null?(x=x.index,x<v?(w.flags|=2,v):x):(w.flags|=2,v)):(w.flags|=1048576,v)}function a(w){return e&&w.alternate===null&&(w.flags|=2),w}function l(w,v,x,T){return v===null||v.tag!==6?(v=pu(x,w.mode,T),v.return=w,v):(v=i(v,x),v.return=w,v)}function c(w,v,x,T){var L=x.type;return L===Fi?m(w,v,x.props.children,T,x.key):v!==null&&(v.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===gr&&Hp(L)===v.type)?(T=i(v,x.props),T.ref=zo(w,v,x),T.return=w,T):(T=Ys(x.type,x.key,x.props,null,w.mode,T),T.ref=zo(w,v,x),T.return=w,T)}function p(w,v,x,T){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=mu(x,w.mode,T),v.return=w,v):(v=i(v,x.children||[]),v.return=w,v)}function m(w,v,x,T,L){return v===null||v.tag!==7?(v=li(x,w.mode,T,L),v.return=w,v):(v=i(v,x),v.return=w,v)}function g(w,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=pu(""+v,w.mode,x),v.return=w,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case hs:return x=Ys(v.type,v.key,v.props,null,w.mode,x),x.ref=zo(w,null,v),x.return=w,x;case Bi:return v=mu(v,w.mode,x),v.return=w,v;case gr:var T=v._init;return g(w,T(v._payload),x)}if(Go(v)||Do(v))return v=li(v,w.mode,x,null),v.return=w,v;Es(w,v)}return null}function y(w,v,x,T){var L=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return L!==null?null:l(w,v,""+x,T);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case hs:return x.key===L?c(w,v,x,T):null;case Bi:return x.key===L?p(w,v,x,T):null;case gr:return L=x._init,y(w,v,L(x._payload),T)}if(Go(x)||Do(x))return L!==null?null:m(w,v,x,T,null);Es(w,x)}return null}function C(w,v,x,T,L){if(typeof T=="string"&&T!==""||typeof T=="number")return w=w.get(x)||null,l(v,w,""+T,L);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case hs:return w=w.get(T.key===null?x:T.key)||null,c(v,w,T,L);case Bi:return w=w.get(T.key===null?x:T.key)||null,p(v,w,T,L);case gr:var M=T._init;return C(w,v,x,M(T._payload),L)}if(Go(T)||Do(T))return w=w.get(x)||null,m(v,w,T,L,null);Es(v,T)}return null}function E(w,v,x,T){for(var L=null,M=null,b=v,A=v=0,F=null;b!==null&&A<x.length;A++){b.index>A?(F=b,b=null):F=b.sibling;var z=y(w,b,x[A],T);if(z===null){b===null&&(b=F);break}e&&b&&z.alternate===null&&t(w,b),v=o(z,v,A),M===null?L=z:M.sibling=z,M=z,b=F}if(A===x.length)return n(w,b),je&&Jr(w,A),L;if(b===null){for(;A<x.length;A++)b=g(w,x[A],T),b!==null&&(v=o(b,v,A),M===null?L=b:M.sibling=b,M=b);return je&&Jr(w,A),L}for(b=r(w,b);A<x.length;A++)F=C(b,w,A,x[A],T),F!==null&&(e&&F.alternate!==null&&b.delete(F.key===null?A:F.key),v=o(F,v,A),M===null?L=F:M.sibling=F,M=F);return e&&b.forEach(function(Q){return t(w,Q)}),je&&Jr(w,A),L}function S(w,v,x,T){var L=Do(x);if(typeof L!="function")throw Error(U(150));if(x=L.call(x),x==null)throw Error(U(151));for(var M=L=null,b=v,A=v=0,F=null,z=x.next();b!==null&&!z.done;A++,z=x.next()){b.index>A?(F=b,b=null):F=b.sibling;var Q=y(w,b,z.value,T);if(Q===null){b===null&&(b=F);break}e&&b&&Q.alternate===null&&t(w,b),v=o(Q,v,A),M===null?L=Q:M.sibling=Q,M=Q,b=F}if(z.done)return n(w,b),je&&Jr(w,A),L;if(b===null){for(;!z.done;A++,z=x.next())z=g(w,z.value,T),z!==null&&(v=o(z,v,A),M===null?L=z:M.sibling=z,M=z);return je&&Jr(w,A),L}for(b=r(w,b);!z.done;A++,z=x.next())z=C(b,w,A,z.value,T),z!==null&&(e&&z.alternate!==null&&b.delete(z.key===null?A:z.key),v=o(z,v,A),M===null?L=z:M.sibling=z,M=z);return e&&b.forEach(function(oe){return t(w,oe)}),je&&Jr(w,A),L}function P(w,v,x,T){if(typeof x=="object"&&x!==null&&x.type===Fi&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case hs:e:{for(var L=x.key,M=v;M!==null;){if(M.key===L){if(L=x.type,L===Fi){if(M.tag===7){n(w,M.sibling),v=i(M,x.props.children),v.return=w,w=v;break e}}else if(M.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===gr&&Hp(L)===M.type){n(w,M.sibling),v=i(M,x.props),v.ref=zo(w,M,x),v.return=w,w=v;break e}n(w,M);break}else t(w,M);M=M.sibling}x.type===Fi?(v=li(x.props.children,w.mode,T,x.key),v.return=w,w=v):(T=Ys(x.type,x.key,x.props,null,w.mode,T),T.ref=zo(w,v,x),T.return=w,w=T)}return a(w);case Bi:e:{for(M=x.key;v!==null;){if(v.key===M)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(w,v.sibling),v=i(v,x.children||[]),v.return=w,w=v;break e}else{n(w,v);break}else t(w,v);v=v.sibling}v=mu(x,w.mode,T),v.return=w,w=v}return a(w);case gr:return M=x._init,P(w,v,M(x._payload),T)}if(Go(x))return E(w,v,x,T);if(Do(x))return S(w,v,x,T);Es(w,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(w,v.sibling),v=i(v,x),v.return=w,w=v):(n(w,v),v=pu(x,w.mode,T),v.return=w,w=v),a(w)):n(w,v)}return P}var ho=F0(!0),U0=F0(!1),gl=Br(null),vl=null,Yi=null,mf=null;function gf(){mf=Yi=vl=null}function vf(e){var t=gl.current;Pe(gl),e._currentValue=t}function ad(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function no(e,t){vl=e,mf=Yi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Tt=!0),e.firstContext=null)}function Jt(e){var t=e._currentValue;if(mf!==e)if(e={context:e,memoizedValue:t,next:null},Yi===null){if(vl===null)throw Error(U(308));Yi=e,vl.dependencies={lanes:0,firstContext:e}}else Yi=Yi.next=e;return t}var ni=null;function yf(e){ni===null?ni=[e]:ni.push(e)}function z0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,yf(t)):(n.next=i.next,i.next=n),t.interleaved=n,Zn(e,r)}function Zn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var vr=!1;function wf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Pr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,fe&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Zn(e,n)}return i=r.interleaved,i===null?(t.next=t,yf(r)):(t.next=i.next,i.next=t),r.interleaved=t,Zn(e,n)}function zs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,rf(e,n)}}function Wp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function yl(e,t,n,r){var i=e.updateQueue;vr=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,p=c.next;c.next=null,a===null?o=p:a.next=p,a=c;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==a&&(l===null?m.firstBaseUpdate=p:l.next=p,m.lastBaseUpdate=c))}if(o!==null){var g=i.baseState;a=0,m=p=c=null,l=o;do{var y=l.lane,C=l.eventTime;if((r&y)===y){m!==null&&(m=m.next={eventTime:C,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var E=e,S=l;switch(y=t,C=n,S.tag){case 1:if(E=S.payload,typeof E=="function"){g=E.call(C,g,y);break e}g=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=S.payload,y=typeof E=="function"?E.call(C,g,y):E,y==null)break e;g=Le({},g,y);break e;case 2:vr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else C={eventTime:C,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(p=m=C,c=g):m=m.next=C,a|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(m===null&&(c=g),i.baseState=c,i.firstBaseUpdate=p,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);hi|=a,e.lanes=a,e.memoizedState=g}}function Kp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var Ya={},Pn=Br(Ya),Ea=Br(Ya),Ca=Br(Ya);function ri(e){if(e===Ya)throw Error(U(174));return e}function xf(e,t){switch(Te(Ca,t),Te(Ea,e),Te(Pn,Ya),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Uu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Uu(t,e)}Pe(Pn),Te(Pn,t)}function po(){Pe(Pn),Pe(Ea),Pe(Ca)}function V0(e){ri(Ca.current);var t=ri(Pn.current),n=Uu(t,e.type);t!==n&&(Te(Ea,e),Te(Pn,n))}function bf(e){Ea.current===e&&(Pe(Pn),Pe(Ea))}var Ae=Br(0);function wl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var lu=[];function _f(){for(var e=0;e<lu.length;e++)lu[e]._workInProgressVersionPrimary=null;lu.length=0}var $s=rr.ReactCurrentDispatcher,cu=rr.ReactCurrentBatchConfig,fi=0,Oe=null,Je=null,tt=null,xl=!1,aa=!1,ka=0,Mb=0;function ut(){throw Error(U(321))}function Sf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gn(e[n],t[n]))return!1;return!0}function Ef(e,t,n,r,i,o){if(fi=o,Oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$s.current=e===null||e.memoizedState===null?zb:$b,e=n(r,i),aa){o=0;do{if(aa=!1,ka=0,25<=o)throw Error(U(301));o+=1,tt=Je=null,t.updateQueue=null,$s.current=Vb,e=n(r,i)}while(aa)}if($s.current=bl,t=Je!==null&&Je.next!==null,fi=0,tt=Je=Oe=null,xl=!1,t)throw Error(U(300));return e}function Cf(){var e=ka!==0;return ka=0,e}function En(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?Oe.memoizedState=tt=e:tt=tt.next=e,tt}function Zt(){if(Je===null){var e=Oe.alternate;e=e!==null?e.memoizedState:null}else e=Je.next;var t=tt===null?Oe.memoizedState:tt.next;if(t!==null)tt=t,Je=e;else{if(e===null)throw Error(U(310));Je=e,e={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},tt===null?Oe.memoizedState=tt=e:tt=tt.next=e}return tt}function Ta(e,t){return typeof t=="function"?t(e):t}function uu(e){var t=Zt(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=Je,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,c=null,p=o;do{var m=p.lane;if((fi&m)===m)c!==null&&(c=c.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var g={lane:m,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};c===null?(l=c=g,a=r):c=c.next=g,Oe.lanes|=m,hi|=m}p=p.next}while(p!==null&&p!==o);c===null?a=r:c.next=l,gn(r,t.memoizedState)||(Tt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Oe.lanes|=o,hi|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function du(e){var t=Zt(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);gn(o,t.memoizedState)||(Tt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function H0(){}function W0(e,t){var n=Oe,r=Zt(),i=t(),o=!gn(r.memoizedState,i);if(o&&(r.memoizedState=i,Tt=!0),r=r.queue,kf(q0.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||tt!==null&&tt.memoizedState.tag&1){if(n.flags|=2048,Ia(9,Y0.bind(null,n,r,i,t),void 0,null),nt===null)throw Error(U(349));fi&30||K0(n,t,i)}return i}function K0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Oe.updateQueue,t===null?(t={lastEffect:null,stores:null},Oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Y0(e,t,n,r){t.value=n,t.getSnapshot=r,G0(t)&&X0(e)}function q0(e,t,n){return n(function(){G0(t)&&X0(e)})}function G0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gn(e,n)}catch{return!0}}function X0(e){var t=Zn(e,1);t!==null&&pn(t,e,1,-1)}function Yp(e){var t=En();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:e},t.queue=e,e=e.dispatch=Ub.bind(null,Oe,e),[t.memoizedState,e]}function Ia(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Oe.updateQueue,t===null?(t={lastEffect:null,stores:null},Oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Q0(){return Zt().memoizedState}function Vs(e,t,n,r){var i=En();Oe.flags|=e,i.memoizedState=Ia(1|t,n,void 0,r===void 0?null:r)}function Kl(e,t,n,r){var i=Zt();r=r===void 0?null:r;var o=void 0;if(Je!==null){var a=Je.memoizedState;if(o=a.destroy,r!==null&&Sf(r,a.deps)){i.memoizedState=Ia(t,n,o,r);return}}Oe.flags|=e,i.memoizedState=Ia(1|t,n,o,r)}function qp(e,t){return Vs(8390656,8,e,t)}function kf(e,t){return Kl(2048,8,e,t)}function J0(e,t){return Kl(4,2,e,t)}function Z0(e,t){return Kl(4,4,e,t)}function ev(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function tv(e,t,n){return n=n!=null?n.concat([e]):null,Kl(4,4,ev.bind(null,t,e),n)}function Tf(){}function nv(e,t){var n=Zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Sf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function rv(e,t){var n=Zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Sf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function iv(e,t,n){return fi&21?(gn(n,t)||(n=c0(),Oe.lanes|=n,hi|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Tt=!0),e.memoizedState=n)}function Bb(e,t){var n=we;we=n!==0&&4>n?n:4,e(!0);var r=cu.transition;cu.transition={};try{e(!1),t()}finally{we=n,cu.transition=r}}function ov(){return Zt().memoizedState}function Fb(e,t,n){var r=jr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},av(e))sv(t,n);else if(n=z0(e,t,n,r),n!==null){var i=_t();pn(n,e,r,i),lv(n,t,r)}}function Ub(e,t,n){var r=jr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(av(e))sv(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,gn(l,a)){var c=t.interleaved;c===null?(i.next=i,yf(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=z0(e,t,i,r),n!==null&&(i=_t(),pn(n,e,r,i),lv(n,t,r))}}function av(e){var t=e.alternate;return e===Oe||t!==null&&t===Oe}function sv(e,t){aa=xl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function lv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,rf(e,n)}}var bl={readContext:Jt,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useInsertionEffect:ut,useLayoutEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useMutableSource:ut,useSyncExternalStore:ut,useId:ut,unstable_isNewReconciler:!1},zb={readContext:Jt,useCallback:function(e,t){return En().memoizedState=[e,t===void 0?null:t],e},useContext:Jt,useEffect:qp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Vs(4194308,4,ev.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vs(4,2,e,t)},useMemo:function(e,t){var n=En();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=En();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Fb.bind(null,Oe,e),[r.memoizedState,e]},useRef:function(e){var t=En();return e={current:e},t.memoizedState=e},useState:Yp,useDebugValue:Tf,useDeferredValue:function(e){return En().memoizedState=e},useTransition:function(){var e=Yp(!1),t=e[0];return e=Bb.bind(null,e[1]),En().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Oe,i=En();if(je){if(n===void 0)throw Error(U(407));n=n()}else{if(n=t(),nt===null)throw Error(U(349));fi&30||K0(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,qp(q0.bind(null,r,o,e),[e]),r.flags|=2048,Ia(9,Y0.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=En(),t=nt.identifierPrefix;if(je){var n=Hn,r=Vn;n=(r&~(1<<32-hn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ka++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Mb++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$b={readContext:Jt,useCallback:nv,useContext:Jt,useEffect:kf,useImperativeHandle:tv,useInsertionEffect:J0,useLayoutEffect:Z0,useMemo:rv,useReducer:uu,useRef:Q0,useState:function(){return uu(Ta)},useDebugValue:Tf,useDeferredValue:function(e){var t=Zt();return iv(t,Je.memoizedState,e)},useTransition:function(){var e=uu(Ta)[0],t=Zt().memoizedState;return[e,t]},useMutableSource:H0,useSyncExternalStore:W0,useId:ov,unstable_isNewReconciler:!1},Vb={readContext:Jt,useCallback:nv,useContext:Jt,useEffect:kf,useImperativeHandle:tv,useInsertionEffect:J0,useLayoutEffect:Z0,useMemo:rv,useReducer:du,useRef:Q0,useState:function(){return du(Ta)},useDebugValue:Tf,useDeferredValue:function(e){var t=Zt();return Je===null?t.memoizedState=e:iv(t,Je.memoizedState,e)},useTransition:function(){var e=du(Ta)[0],t=Zt().memoizedState;return[e,t]},useMutableSource:H0,useSyncExternalStore:W0,useId:ov,unstable_isNewReconciler:!1};function sn(e,t){if(e&&e.defaultProps){t=Le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function sd(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Yl={isMounted:function(e){return(e=e._reactInternals)?xi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=_t(),i=jr(e),o=qn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Pr(e,o,i),t!==null&&(pn(t,e,i,r),zs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=_t(),i=jr(e),o=qn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Pr(e,o,i),t!==null&&(pn(t,e,i,r),zs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_t(),r=jr(e),i=qn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Pr(e,i,r),t!==null&&(pn(t,e,r,n),zs(t,e,r))}};function Gp(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!xa(n,r)||!xa(i,o):!0}function cv(e,t,n){var r=!1,i=Dr,o=t.contextType;return typeof o=="object"&&o!==null?o=Jt(o):(i=Pt(t)?ui:pt.current,r=t.contextTypes,o=(r=r!=null)?uo(e,i):Dr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Yl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Xp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Yl.enqueueReplaceState(t,t.state,null)}function ld(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},wf(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Jt(o):(o=Pt(t)?ui:pt.current,i.context=uo(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(sd(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Yl.enqueueReplaceState(i,i.state,null),yl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function mo(e,t){try{var n="",r=t;do n+=v2(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function fu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function cd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Hb=typeof WeakMap=="function"?WeakMap:Map;function uv(e,t,n){n=qn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Sl||(Sl=!0,wd=r),cd(e,t)},n}function dv(e,t,n){n=qn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){cd(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){cd(e,t),typeof r!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Qp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Hb;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=i_.bind(null,e,t,n),t.then(e,e))}function Jp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Zp(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=qn(-1,1),t.tag=2,Pr(n,t,1))),n.lanes|=1),e)}var Wb=rr.ReactCurrentOwner,Tt=!1;function xt(e,t,n,r){t.child=e===null?U0(t,null,n,r):ho(t,e.child,n,r)}function em(e,t,n,r,i){n=n.render;var o=t.ref;return no(t,i),r=Ef(e,t,n,r,o,i),n=Cf(),e!==null&&!Tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,er(e,t,i)):(je&&n&&ff(t),t.flags|=1,xt(e,t,r,i),t.child)}function tm(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Lf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,fv(e,t,o,r,i)):(e=Ys(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:xa,n(a,r)&&e.ref===t.ref)return er(e,t,i)}return t.flags|=1,e=Rr(o,r),e.ref=t.ref,e.return=t,t.child=e}function fv(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(xa(o,r)&&e.ref===t.ref)if(Tt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Tt=!0);else return t.lanes=e.lanes,er(e,t,i)}return ud(e,t,n,r,i)}function hv(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(Gi,At),At|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Te(Gi,At),At|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Te(Gi,At),At|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Te(Gi,At),At|=r;return xt(e,t,i,n),t.child}function pv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ud(e,t,n,r,i){var o=Pt(n)?ui:pt.current;return o=uo(t,o),no(t,i),n=Ef(e,t,n,r,o,i),r=Cf(),e!==null&&!Tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,er(e,t,i)):(je&&r&&ff(t),t.flags|=1,xt(e,t,n,i),t.child)}function nm(e,t,n,r,i){if(Pt(n)){var o=!0;hl(t)}else o=!1;if(no(t,i),t.stateNode===null)Hs(e,t),cv(t,n,r),ld(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,p=n.contextType;typeof p=="object"&&p!==null?p=Jt(p):(p=Pt(n)?ui:pt.current,p=uo(t,p));var m=n.getDerivedStateFromProps,g=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==p)&&Xp(t,a,r,p),vr=!1;var y=t.memoizedState;a.state=y,yl(t,r,a,i),c=t.memoizedState,l!==r||y!==c||It.current||vr?(typeof m=="function"&&(sd(t,n,m,r),c=t.memoizedState),(l=vr||Gp(t,n,l,r,y,c,p))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=p,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,$0(e,t),l=t.memoizedProps,p=t.type===t.elementType?l:sn(t.type,l),a.props=p,g=t.pendingProps,y=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Jt(c):(c=Pt(n)?ui:pt.current,c=uo(t,c));var C=n.getDerivedStateFromProps;(m=typeof C=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==g||y!==c)&&Xp(t,a,r,c),vr=!1,y=t.memoizedState,a.state=y,yl(t,r,a,i);var E=t.memoizedState;l!==g||y!==E||It.current||vr?(typeof C=="function"&&(sd(t,n,C,r),E=t.memoizedState),(p=vr||Gp(t,n,p,r,y,E,c)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,E,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,E,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=E),a.props=r,a.state=E,a.context=c,r=p):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return dd(e,t,n,r,o,i)}function dd(e,t,n,r,i,o){pv(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&zp(t,n,!1),er(e,t,o);r=t.stateNode,Wb.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=ho(t,e.child,null,o),t.child=ho(t,null,l,o)):xt(e,t,l,o),t.memoizedState=r.state,i&&zp(t,n,!0),t.child}function mv(e){var t=e.stateNode;t.pendingContext?Up(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Up(e,t.context,!1),xf(e,t.containerInfo)}function rm(e,t,n,r,i){return fo(),pf(i),t.flags|=256,xt(e,t,n,r),t.child}var fd={dehydrated:null,treeContext:null,retryLane:0};function hd(e){return{baseLanes:e,cachePool:null,transitions:null}}function gv(e,t,n){var r=t.pendingProps,i=Ae.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Te(Ae,i&1),e===null)return od(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Xl(a,r,0,null),e=li(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=hd(n),t.memoizedState=fd,e):If(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Kb(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Rr(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Rr(l,o):(o=li(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?hd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=fd,r}return o=e.child,e=o.sibling,r=Rr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function If(e,t){return t=Xl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Cs(e,t,n,r){return r!==null&&pf(r),ho(t,e.child,null,n),e=If(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Kb(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=fu(Error(U(422))),Cs(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Xl({mode:"visible",children:r.children},i,0,null),o=li(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ho(t,e.child,null,a),t.child.memoizedState=hd(a),t.memoizedState=fd,o);if(!(t.mode&1))return Cs(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(U(419)),r=fu(o,r,void 0),Cs(e,t,a,r)}if(l=(a&e.childLanes)!==0,Tt||l){if(r=nt,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Zn(e,i),pn(r,e,i,-1))}return Of(),r=fu(Error(U(421))),Cs(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=o_.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ot=Ir(i.nextSibling),Dt=t,je=!0,dn=null,e!==null&&(Yt[qt++]=Vn,Yt[qt++]=Hn,Yt[qt++]=di,Vn=e.id,Hn=e.overflow,di=t),t=If(t,r.children),t.flags|=4096,t)}function im(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ad(e.return,t,n)}function hu(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function vv(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(xt(e,t,r.children,n),r=Ae.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&im(e,n,t);else if(e.tag===19)im(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Te(Ae,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&wl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),hu(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&wl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}hu(t,!0,n,null,o);break;case"together":hu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function er(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),hi|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(U(153));if(t.child!==null){for(e=t.child,n=Rr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Rr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Yb(e,t,n){switch(t.tag){case 3:mv(t),fo();break;case 5:V0(t);break;case 1:Pt(t.type)&&hl(t);break;case 4:xf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Te(gl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Te(Ae,Ae.current&1),t.flags|=128,null):n&t.child.childLanes?gv(e,t,n):(Te(Ae,Ae.current&1),e=er(e,t,n),e!==null?e.sibling:null);Te(Ae,Ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return vv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Te(Ae,Ae.current),r)break;return null;case 22:case 23:return t.lanes=0,hv(e,t,n)}return er(e,t,n)}var yv,pd,wv,xv;yv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pd=function(){};wv=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ri(Pn.current);var o=null;switch(n){case"input":i=Du(e,i),r=Du(e,r),o=[];break;case"select":i=Le({},i,{value:void 0}),r=Le({},r,{value:void 0}),o=[];break;case"textarea":i=Fu(e,i),r=Fu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=dl)}zu(n,r);var a;n=null;for(p in i)if(!r.hasOwnProperty(p)&&i.hasOwnProperty(p)&&i[p]!=null)if(p==="style"){var l=i[p];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(ha.hasOwnProperty(p)?o||(o=[]):(o=o||[]).push(p,null));for(p in r){var c=r[p];if(l=i!=null?i[p]:void 0,r.hasOwnProperty(p)&&c!==l&&(c!=null||l!=null))if(p==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(p,n)),n=c;else p==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(p,c)):p==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(p,""+c):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(ha.hasOwnProperty(p)?(c!=null&&p==="onScroll"&&Ie("scroll",e),o||l===c||(o=[])):(o=o||[]).push(p,c))}n&&(o=o||[]).push("style",n);var p=o;(t.updateQueue=p)&&(t.flags|=4)}};xv=function(e,t,n,r){n!==r&&(t.flags|=4)};function $o(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function dt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function qb(e,t,n){var r=t.pendingProps;switch(hf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(t),null;case 1:return Pt(t.type)&&fl(),dt(t),null;case 3:return r=t.stateNode,po(),Pe(It),Pe(pt),_f(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ss(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,dn!==null&&(_d(dn),dn=null))),pd(e,t),dt(t),null;case 5:bf(t);var i=ri(Ca.current);if(n=t.type,e!==null&&t.stateNode!=null)wv(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(U(166));return dt(t),null}if(e=ri(Pn.current),Ss(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Tn]=t,r[Sa]=o,e=(t.mode&1)!==0,n){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(i=0;i<Qo.length;i++)Ie(Qo[i],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":hp(r,o),Ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ie("invalid",r);break;case"textarea":mp(r,o),Ie("invalid",r)}zu(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&_s(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&_s(r.textContent,l,e),i=["children",""+l]):ha.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Ie("scroll",r)}switch(n){case"input":ps(r),pp(r,o,!0);break;case"textarea":ps(r),gp(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=dl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Tn]=t,e[Sa]=r,yv(e,t,!1,!1),t.stateNode=e;e:{switch(a=$u(n,r),n){case"dialog":Ie("cancel",e),Ie("close",e),i=r;break;case"iframe":case"object":case"embed":Ie("load",e),i=r;break;case"video":case"audio":for(i=0;i<Qo.length;i++)Ie(Qo[i],e);i=r;break;case"source":Ie("error",e),i=r;break;case"img":case"image":case"link":Ie("error",e),Ie("load",e),i=r;break;case"details":Ie("toggle",e),i=r;break;case"input":hp(e,r),i=Du(e,r),Ie("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Le({},r,{value:void 0}),Ie("invalid",e);break;case"textarea":mp(e,r),i=Fu(e,r),Ie("invalid",e);break;default:i=r}zu(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?Qg(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Gg(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&pa(e,c):typeof c=="number"&&pa(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ha.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Ie("scroll",e):c!=null&&Qd(e,o,c,a))}switch(n){case"input":ps(e),pp(e,r,!1);break;case"textarea":ps(e),gp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Lr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ji(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ji(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=dl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return dt(t),null;case 6:if(e&&t.stateNode!=null)xv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(U(166));if(n=ri(Ca.current),ri(Pn.current),Ss(t)){if(r=t.stateNode,n=t.memoizedProps,r[Tn]=t,(o=r.nodeValue!==n)&&(e=Dt,e!==null))switch(e.tag){case 3:_s(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_s(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tn]=t,t.stateNode=r}return dt(t),null;case 13:if(Pe(Ae),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&Ot!==null&&t.mode&1&&!(t.flags&128))B0(),fo(),t.flags|=98560,o=!1;else if(o=Ss(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(U(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(U(317));o[Tn]=t}else fo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;dt(t),o=!1}else dn!==null&&(_d(dn),dn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ae.current&1?Ze===0&&(Ze=3):Of())),t.updateQueue!==null&&(t.flags|=4),dt(t),null);case 4:return po(),pd(e,t),e===null&&ba(t.stateNode.containerInfo),dt(t),null;case 10:return vf(t.type._context),dt(t),null;case 17:return Pt(t.type)&&fl(),dt(t),null;case 19:if(Pe(Ae),o=t.memoizedState,o===null)return dt(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)$o(o,!1);else{if(Ze!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=wl(e),a!==null){for(t.flags|=128,$o(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Te(Ae,Ae.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ve()>go&&(t.flags|=128,r=!0,$o(o,!1),t.lanes=4194304)}else{if(!r)if(e=wl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),$o(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!je)return dt(t),null}else 2*Ve()-o.renderingStartTime>go&&n!==1073741824&&(t.flags|=128,r=!0,$o(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ve(),t.sibling=null,n=Ae.current,Te(Ae,r?n&1|2:n&1),t):(dt(t),null);case 22:case 23:return Af(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?At&1073741824&&(dt(t),t.subtreeFlags&6&&(t.flags|=8192)):dt(t),null;case 24:return null;case 25:return null}throw Error(U(156,t.tag))}function Gb(e,t){switch(hf(t),t.tag){case 1:return Pt(t.type)&&fl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return po(),Pe(It),Pe(pt),_f(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return bf(t),null;case 13:if(Pe(Ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(U(340));fo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Pe(Ae),null;case 4:return po(),null;case 10:return vf(t.type._context),null;case 22:case 23:return Af(),null;case 24:return null;default:return null}}var ks=!1,ht=!1,Xb=typeof WeakSet=="function"?WeakSet:Set,K=null;function qi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Be(e,t,r)}else n.current=null}function md(e,t,n){try{n()}catch(r){Be(e,t,r)}}var om=!1;function Qb(e,t){if(Ju=ll,e=C0(),df(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,p=0,m=0,g=e,y=null;t:for(;;){for(var C;g!==n||i!==0&&g.nodeType!==3||(l=a+i),g!==o||r!==0&&g.nodeType!==3||(c=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(C=g.firstChild)!==null;)y=g,g=C;for(;;){if(g===e)break t;if(y===n&&++p===i&&(l=a),y===o&&++m===r&&(c=a),(C=g.nextSibling)!==null)break;g=y,y=g.parentNode}g=C}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zu={focusedElem:e,selectionRange:n},ll=!1,K=t;K!==null;)if(t=K,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,K=e;else for(;K!==null;){t=K;try{var E=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var S=E.memoizedProps,P=E.memoizedState,w=t.stateNode,v=w.getSnapshotBeforeUpdate(t.elementType===t.type?S:sn(t.type,S),P);w.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(T){Be(t,t.return,T)}if(e=t.sibling,e!==null){e.return=t.return,K=e;break}K=t.return}return E=om,om=!1,E}function sa(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&md(t,n,o)}i=i.next}while(i!==r)}}function ql(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function gd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function bv(e){var t=e.alternate;t!==null&&(e.alternate=null,bv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Tn],delete t[Sa],delete t[nd],delete t[Ab],delete t[Ob])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _v(e){return e.tag===5||e.tag===3||e.tag===4}function am(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_v(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=dl));else if(r!==4&&(e=e.child,e!==null))for(vd(e,t,n),e=e.sibling;e!==null;)vd(e,t,n),e=e.sibling}function yd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(yd(e,t,n),e=e.sibling;e!==null;)yd(e,t,n),e=e.sibling}var ot=null,cn=!1;function hr(e,t,n){for(n=n.child;n!==null;)Sv(e,t,n),n=n.sibling}function Sv(e,t,n){if(In&&typeof In.onCommitFiberUnmount=="function")try{In.onCommitFiberUnmount(Ul,n)}catch{}switch(n.tag){case 5:ht||qi(n,t);case 6:var r=ot,i=cn;ot=null,hr(e,t,n),ot=r,cn=i,ot!==null&&(cn?(e=ot,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ot.removeChild(n.stateNode));break;case 18:ot!==null&&(cn?(e=ot,n=n.stateNode,e.nodeType===8?au(e.parentNode,n):e.nodeType===1&&au(e,n),ya(e)):au(ot,n.stateNode));break;case 4:r=ot,i=cn,ot=n.stateNode.containerInfo,cn=!0,hr(e,t,n),ot=r,cn=i;break;case 0:case 11:case 14:case 15:if(!ht&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&md(n,t,a),i=i.next}while(i!==r)}hr(e,t,n);break;case 1:if(!ht&&(qi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Be(n,t,l)}hr(e,t,n);break;case 21:hr(e,t,n);break;case 22:n.mode&1?(ht=(r=ht)||n.memoizedState!==null,hr(e,t,n),ht=r):hr(e,t,n);break;default:hr(e,t,n)}}function sm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Xb),t.forEach(function(r){var i=a_.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function an(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:ot=l.stateNode,cn=!1;break e;case 3:ot=l.stateNode.containerInfo,cn=!0;break e;case 4:ot=l.stateNode.containerInfo,cn=!0;break e}l=l.return}if(ot===null)throw Error(U(160));Sv(o,a,i),ot=null,cn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(p){Be(i,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ev(t,e),t=t.sibling}function Ev(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(an(t,e),_n(e),r&4){try{sa(3,e,e.return),ql(3,e)}catch(S){Be(e,e.return,S)}try{sa(5,e,e.return)}catch(S){Be(e,e.return,S)}}break;case 1:an(t,e),_n(e),r&512&&n!==null&&qi(n,n.return);break;case 5:if(an(t,e),_n(e),r&512&&n!==null&&qi(n,n.return),e.flags&32){var i=e.stateNode;try{pa(i,"")}catch(S){Be(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Kg(i,o),$u(l,a);var p=$u(l,o);for(a=0;a<c.length;a+=2){var m=c[a],g=c[a+1];m==="style"?Qg(i,g):m==="dangerouslySetInnerHTML"?Gg(i,g):m==="children"?pa(i,g):Qd(i,m,g,p)}switch(l){case"input":Mu(i,o);break;case"textarea":Yg(i,o);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var C=o.value;C!=null?Ji(i,!!o.multiple,C,!1):y!==!!o.multiple&&(o.defaultValue!=null?Ji(i,!!o.multiple,o.defaultValue,!0):Ji(i,!!o.multiple,o.multiple?[]:"",!1))}i[Sa]=o}catch(S){Be(e,e.return,S)}}break;case 6:if(an(t,e),_n(e),r&4){if(e.stateNode===null)throw Error(U(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(S){Be(e,e.return,S)}}break;case 3:if(an(t,e),_n(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ya(t.containerInfo)}catch(S){Be(e,e.return,S)}break;case 4:an(t,e),_n(e);break;case 13:an(t,e),_n(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(jf=Ve())),r&4&&sm(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ht=(p=ht)||m,an(t,e),ht=p):an(t,e),_n(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!m&&e.mode&1)for(K=e,m=e.child;m!==null;){for(g=K=m;K!==null;){switch(y=K,C=y.child,y.tag){case 0:case 11:case 14:case 15:sa(4,y,y.return);break;case 1:qi(y,y.return);var E=y.stateNode;if(typeof E.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,E.props=t.memoizedProps,E.state=t.memoizedState,E.componentWillUnmount()}catch(S){Be(r,n,S)}}break;case 5:qi(y,y.return);break;case 22:if(y.memoizedState!==null){cm(g);continue}}C!==null?(C.return=y,K=C):cm(g)}m=m.sibling}e:for(m=null,g=e;;){if(g.tag===5){if(m===null){m=g;try{i=g.stateNode,p?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=g.stateNode,c=g.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Xg("display",a))}catch(S){Be(e,e.return,S)}}}else if(g.tag===6){if(m===null)try{g.stateNode.nodeValue=p?"":g.memoizedProps}catch(S){Be(e,e.return,S)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;m===g&&(m=null),g=g.return}m===g&&(m=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:an(t,e),_n(e),r&4&&sm(e);break;case 21:break;default:an(t,e),_n(e)}}function _n(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_v(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(pa(i,""),r.flags&=-33);var o=am(e);yd(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=am(e);vd(e,l,a);break;default:throw Error(U(161))}}catch(c){Be(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Jb(e,t,n){K=e,Cv(e)}function Cv(e,t,n){for(var r=(e.mode&1)!==0;K!==null;){var i=K,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||ks;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||ht;l=ks;var p=ht;if(ks=a,(ht=c)&&!p)for(K=i;K!==null;)a=K,c=a.child,a.tag===22&&a.memoizedState!==null?um(i):c!==null?(c.return=a,K=c):um(i);for(;o!==null;)K=o,Cv(o),o=o.sibling;K=i,ks=l,ht=p}lm(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,K=o):lm(e)}}function lm(e){for(;K!==null;){var t=K;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ht||ql(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ht)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:sn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Kp(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Kp(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var m=p.memoizedState;if(m!==null){var g=m.dehydrated;g!==null&&ya(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}ht||t.flags&512&&gd(t)}catch(y){Be(t,t.return,y)}}if(t===e){K=null;break}if(n=t.sibling,n!==null){n.return=t.return,K=n;break}K=t.return}}function cm(e){for(;K!==null;){var t=K;if(t===e){K=null;break}var n=t.sibling;if(n!==null){n.return=t.return,K=n;break}K=t.return}}function um(e){for(;K!==null;){var t=K;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ql(4,t)}catch(c){Be(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Be(t,i,c)}}var o=t.return;try{gd(t)}catch(c){Be(t,o,c)}break;case 5:var a=t.return;try{gd(t)}catch(c){Be(t,a,c)}}}catch(c){Be(t,t.return,c)}if(t===e){K=null;break}var l=t.sibling;if(l!==null){l.return=t.return,K=l;break}K=t.return}}var Zb=Math.ceil,_l=rr.ReactCurrentDispatcher,Pf=rr.ReactCurrentOwner,Qt=rr.ReactCurrentBatchConfig,fe=0,nt=null,Xe=null,st=0,At=0,Gi=Br(0),Ze=0,Pa=null,hi=0,Gl=0,Nf=0,la=null,kt=null,jf=0,go=1/0,Fn=null,Sl=!1,wd=null,Nr=null,Ts=!1,Sr=null,El=0,ca=0,xd=null,Ws=-1,Ks=0;function _t(){return fe&6?Ve():Ws!==-1?Ws:Ws=Ve()}function jr(e){return e.mode&1?fe&2&&st!==0?st&-st:Db.transition!==null?(Ks===0&&(Ks=c0()),Ks):(e=we,e!==0||(e=window.event,e=e===void 0?16:g0(e.type)),e):1}function pn(e,t,n,r){if(50<ca)throw ca=0,xd=null,Error(U(185));Ha(e,n,r),(!(fe&2)||e!==nt)&&(e===nt&&(!(fe&2)&&(Gl|=n),Ze===4&&wr(e,st)),Nt(e,r),n===1&&fe===0&&!(t.mode&1)&&(go=Ve()+500,Wl&&Fr()))}function Nt(e,t){var n=e.callbackNode;D2(e,t);var r=sl(e,e===nt?st:0);if(r===0)n!==null&&wp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&wp(n),t===1)e.tag===0?Lb(dm.bind(null,e)):L0(dm.bind(null,e)),jb(function(){!(fe&6)&&Fr()}),n=null;else{switch(u0(r)){case 1:n=nf;break;case 4:n=s0;break;case 16:n=al;break;case 536870912:n=l0;break;default:n=al}n=Av(n,kv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function kv(e,t){if(Ws=-1,Ks=0,fe&6)throw Error(U(327));var n=e.callbackNode;if(ro()&&e.callbackNode!==n)return null;var r=sl(e,e===nt?st:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Cl(e,r);else{t=r;var i=fe;fe|=2;var o=Iv();(nt!==e||st!==t)&&(Fn=null,go=Ve()+500,si(e,t));do try{n_();break}catch(l){Tv(e,l)}while(!0);gf(),_l.current=o,fe=i,Xe!==null?t=0:(nt=null,st=0,t=Ze)}if(t!==0){if(t===2&&(i=Yu(e),i!==0&&(r=i,t=bd(e,i))),t===1)throw n=Pa,si(e,0),wr(e,r),Nt(e,Ve()),n;if(t===6)wr(e,r);else{if(i=e.current.alternate,!(r&30)&&!e_(i)&&(t=Cl(e,r),t===2&&(o=Yu(e),o!==0&&(r=o,t=bd(e,o))),t===1))throw n=Pa,si(e,0),wr(e,r),Nt(e,Ve()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(U(345));case 2:Zr(e,kt,Fn);break;case 3:if(wr(e,r),(r&130023424)===r&&(t=jf+500-Ve(),10<t)){if(sl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){_t(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=td(Zr.bind(null,e,kt,Fn),t);break}Zr(e,kt,Fn);break;case 4:if(wr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-hn(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Zb(r/1960))-r,10<r){e.timeoutHandle=td(Zr.bind(null,e,kt,Fn),r);break}Zr(e,kt,Fn);break;case 5:Zr(e,kt,Fn);break;default:throw Error(U(329))}}}return Nt(e,Ve()),e.callbackNode===n?kv.bind(null,e):null}function bd(e,t){var n=la;return e.current.memoizedState.isDehydrated&&(si(e,t).flags|=256),e=Cl(e,t),e!==2&&(t=kt,kt=n,t!==null&&_d(t)),e}function _d(e){kt===null?kt=e:kt.push.apply(kt,e)}function e_(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!gn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wr(e,t){for(t&=~Nf,t&=~Gl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-hn(t),r=1<<n;e[n]=-1,t&=~r}}function dm(e){if(fe&6)throw Error(U(327));ro();var t=sl(e,0);if(!(t&1))return Nt(e,Ve()),null;var n=Cl(e,t);if(e.tag!==0&&n===2){var r=Yu(e);r!==0&&(t=r,n=bd(e,r))}if(n===1)throw n=Pa,si(e,0),wr(e,t),Nt(e,Ve()),n;if(n===6)throw Error(U(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Zr(e,kt,Fn),Nt(e,Ve()),null}function Rf(e,t){var n=fe;fe|=1;try{return e(t)}finally{fe=n,fe===0&&(go=Ve()+500,Wl&&Fr())}}function pi(e){Sr!==null&&Sr.tag===0&&!(fe&6)&&ro();var t=fe;fe|=1;var n=Qt.transition,r=we;try{if(Qt.transition=null,we=1,e)return e()}finally{we=r,Qt.transition=n,fe=t,!(fe&6)&&Fr()}}function Af(){At=Gi.current,Pe(Gi)}function si(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Nb(n)),Xe!==null)for(n=Xe.return;n!==null;){var r=n;switch(hf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fl();break;case 3:po(),Pe(It),Pe(pt),_f();break;case 5:bf(r);break;case 4:po();break;case 13:Pe(Ae);break;case 19:Pe(Ae);break;case 10:vf(r.type._context);break;case 22:case 23:Af()}n=n.return}if(nt=e,Xe=e=Rr(e.current,null),st=At=t,Ze=0,Pa=null,Nf=Gl=hi=0,kt=la=null,ni!==null){for(t=0;t<ni.length;t++)if(n=ni[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}ni=null}return e}function Tv(e,t){do{var n=Xe;try{if(gf(),$s.current=bl,xl){for(var r=Oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xl=!1}if(fi=0,tt=Je=Oe=null,aa=!1,ka=0,Pf.current=null,n===null||n.return===null){Ze=1,Pa=t,Xe=null;break}e:{var o=e,a=n.return,l=n,c=t;if(t=st,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var p=c,m=l,g=m.tag;if(!(m.mode&1)&&(g===0||g===11||g===15)){var y=m.alternate;y?(m.updateQueue=y.updateQueue,m.memoizedState=y.memoizedState,m.lanes=y.lanes):(m.updateQueue=null,m.memoizedState=null)}var C=Jp(a);if(C!==null){C.flags&=-257,Zp(C,a,l,o,t),C.mode&1&&Qp(o,p,t),t=C,c=p;var E=t.updateQueue;if(E===null){var S=new Set;S.add(c),t.updateQueue=S}else E.add(c);break e}else{if(!(t&1)){Qp(o,p,t),Of();break e}c=Error(U(426))}}else if(je&&l.mode&1){var P=Jp(a);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Zp(P,a,l,o,t),pf(mo(c,l));break e}}o=c=mo(c,l),Ze!==4&&(Ze=2),la===null?la=[o]:la.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var w=uv(o,c,t);Wp(o,w);break e;case 1:l=c;var v=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Nr===null||!Nr.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var T=dv(o,l,t);Wp(o,T);break e}}o=o.return}while(o!==null)}Nv(n)}catch(L){t=L,Xe===n&&n!==null&&(Xe=n=n.return);continue}break}while(!0)}function Iv(){var e=_l.current;return _l.current=bl,e===null?bl:e}function Of(){(Ze===0||Ze===3||Ze===2)&&(Ze=4),nt===null||!(hi&268435455)&&!(Gl&268435455)||wr(nt,st)}function Cl(e,t){var n=fe;fe|=2;var r=Iv();(nt!==e||st!==t)&&(Fn=null,si(e,t));do try{t_();break}catch(i){Tv(e,i)}while(!0);if(gf(),fe=n,_l.current=r,Xe!==null)throw Error(U(261));return nt=null,st=0,Ze}function t_(){for(;Xe!==null;)Pv(Xe)}function n_(){for(;Xe!==null&&!T2();)Pv(Xe)}function Pv(e){var t=Rv(e.alternate,e,At);e.memoizedProps=e.pendingProps,t===null?Nv(e):Xe=t,Pf.current=null}function Nv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Gb(n,t),n!==null){n.flags&=32767,Xe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ze=6,Xe=null;return}}else if(n=qb(n,t,At),n!==null){Xe=n;return}if(t=t.sibling,t!==null){Xe=t;return}Xe=t=e}while(t!==null);Ze===0&&(Ze=5)}function Zr(e,t,n){var r=we,i=Qt.transition;try{Qt.transition=null,we=1,r_(e,t,n,r)}finally{Qt.transition=i,we=r}return null}function r_(e,t,n,r){do ro();while(Sr!==null);if(fe&6)throw Error(U(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(U(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(M2(e,o),e===nt&&(Xe=nt=null,st=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ts||(Ts=!0,Av(al,function(){return ro(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Qt.transition,Qt.transition=null;var a=we;we=1;var l=fe;fe|=4,Pf.current=null,Qb(e,n),Ev(n,e),Sb(Zu),ll=!!Ju,Zu=Ju=null,e.current=n,Jb(n),I2(),fe=l,we=a,Qt.transition=o}else e.current=n;if(Ts&&(Ts=!1,Sr=e,El=i),o=e.pendingLanes,o===0&&(Nr=null),j2(n.stateNode),Nt(e,Ve()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Sl)throw Sl=!1,e=wd,wd=null,e;return El&1&&e.tag!==0&&ro(),o=e.pendingLanes,o&1?e===xd?ca++:(ca=0,xd=e):ca=0,Fr(),null}function ro(){if(Sr!==null){var e=u0(El),t=Qt.transition,n=we;try{if(Qt.transition=null,we=16>e?16:e,Sr===null)var r=!1;else{if(e=Sr,Sr=null,El=0,fe&6)throw Error(U(331));var i=fe;for(fe|=4,K=e.current;K!==null;){var o=K,a=o.child;if(K.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var p=l[c];for(K=p;K!==null;){var m=K;switch(m.tag){case 0:case 11:case 15:sa(8,m,o)}var g=m.child;if(g!==null)g.return=m,K=g;else for(;K!==null;){m=K;var y=m.sibling,C=m.return;if(bv(m),m===p){K=null;break}if(y!==null){y.return=C,K=y;break}K=C}}}var E=o.alternate;if(E!==null){var S=E.child;if(S!==null){E.child=null;do{var P=S.sibling;S.sibling=null,S=P}while(S!==null)}}K=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,K=a;else e:for(;K!==null;){if(o=K,o.flags&2048)switch(o.tag){case 0:case 11:case 15:sa(9,o,o.return)}var w=o.sibling;if(w!==null){w.return=o.return,K=w;break e}K=o.return}}var v=e.current;for(K=v;K!==null;){a=K;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,K=x;else e:for(a=v;K!==null;){if(l=K,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ql(9,l)}}catch(L){Be(l,l.return,L)}if(l===a){K=null;break e}var T=l.sibling;if(T!==null){T.return=l.return,K=T;break e}K=l.return}}if(fe=i,Fr(),In&&typeof In.onPostCommitFiberRoot=="function")try{In.onPostCommitFiberRoot(Ul,e)}catch{}r=!0}return r}finally{we=n,Qt.transition=t}}return!1}function fm(e,t,n){t=mo(n,t),t=uv(e,t,1),e=Pr(e,t,1),t=_t(),e!==null&&(Ha(e,1,t),Nt(e,t))}function Be(e,t,n){if(e.tag===3)fm(e,e,n);else for(;t!==null;){if(t.tag===3){fm(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nr===null||!Nr.has(r))){e=mo(n,e),e=dv(t,e,1),t=Pr(t,e,1),e=_t(),t!==null&&(Ha(t,1,e),Nt(t,e));break}}t=t.return}}function i_(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=_t(),e.pingedLanes|=e.suspendedLanes&n,nt===e&&(st&n)===n&&(Ze===4||Ze===3&&(st&130023424)===st&&500>Ve()-jf?si(e,0):Nf|=n),Nt(e,t)}function jv(e,t){t===0&&(e.mode&1?(t=vs,vs<<=1,!(vs&130023424)&&(vs=4194304)):t=1);var n=_t();e=Zn(e,t),e!==null&&(Ha(e,t,n),Nt(e,n))}function o_(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jv(e,n)}function a_(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(t),jv(e,n)}var Rv;Rv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||It.current)Tt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Tt=!1,Yb(e,t,n);Tt=!!(e.flags&131072)}else Tt=!1,je&&t.flags&1048576&&D0(t,ml,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hs(e,t),e=t.pendingProps;var i=uo(t,pt.current);no(t,n),i=Ef(null,t,r,e,i,n);var o=Cf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pt(r)?(o=!0,hl(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wf(t),i.updater=Yl,t.stateNode=i,i._reactInternals=t,ld(t,r,e,n),t=dd(null,t,r,!0,o,n)):(t.tag=0,je&&o&&ff(t),xt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=l_(r),e=sn(r,e),i){case 0:t=ud(null,t,r,e,n);break e;case 1:t=nm(null,t,r,e,n);break e;case 11:t=em(null,t,r,e,n);break e;case 14:t=tm(null,t,r,sn(r.type,e),n);break e}throw Error(U(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:sn(r,i),ud(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:sn(r,i),nm(e,t,r,i,n);case 3:e:{if(mv(t),e===null)throw Error(U(387));r=t.pendingProps,o=t.memoizedState,i=o.element,$0(e,t),yl(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=mo(Error(U(423)),t),t=rm(e,t,r,n,i);break e}else if(r!==i){i=mo(Error(U(424)),t),t=rm(e,t,r,n,i);break e}else for(Ot=Ir(t.stateNode.containerInfo.firstChild),Dt=t,je=!0,dn=null,n=U0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fo(),r===i){t=er(e,t,n);break e}xt(e,t,r,n)}t=t.child}return t;case 5:return V0(t),e===null&&od(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,ed(r,i)?a=null:o!==null&&ed(r,o)&&(t.flags|=32),pv(e,t),xt(e,t,a,n),t.child;case 6:return e===null&&od(t),null;case 13:return gv(e,t,n);case 4:return xf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ho(t,null,r,n):xt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:sn(r,i),em(e,t,r,i,n);case 7:return xt(e,t,t.pendingProps,n),t.child;case 8:return xt(e,t,t.pendingProps.children,n),t.child;case 12:return xt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,Te(gl,r._currentValue),r._currentValue=a,o!==null)if(gn(o.value,a)){if(o.children===i.children&&!It.current){t=er(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=qn(-1,n&-n),c.tag=2;var p=o.updateQueue;if(p!==null){p=p.shared;var m=p.pending;m===null?c.next=c:(c.next=m.next,m.next=c),p.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ad(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(U(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),ad(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}xt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,no(t,n),i=Jt(i),r=r(i),t.flags|=1,xt(e,t,r,n),t.child;case 14:return r=t.type,i=sn(r,t.pendingProps),i=sn(r.type,i),tm(e,t,r,i,n);case 15:return fv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:sn(r,i),Hs(e,t),t.tag=1,Pt(r)?(e=!0,hl(t)):e=!1,no(t,n),cv(t,r,i),ld(t,r,i,n),dd(null,t,r,!0,e,n);case 19:return vv(e,t,n);case 22:return hv(e,t,n)}throw Error(U(156,t.tag))};function Av(e,t){return a0(e,t)}function s_(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(e,t,n,r){return new s_(e,t,n,r)}function Lf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function l_(e){if(typeof e=="function")return Lf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Zd)return 11;if(e===ef)return 14}return 2}function Rr(e,t){var n=e.alternate;return n===null?(n=Xt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ys(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Lf(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Fi:return li(n.children,i,o,t);case Jd:a=8,i|=8;break;case Ru:return e=Xt(12,n,t,i|2),e.elementType=Ru,e.lanes=o,e;case Au:return e=Xt(13,n,t,i),e.elementType=Au,e.lanes=o,e;case Ou:return e=Xt(19,n,t,i),e.elementType=Ou,e.lanes=o,e;case Vg:return Xl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case zg:a=10;break e;case $g:a=9;break e;case Zd:a=11;break e;case ef:a=14;break e;case gr:a=16,r=null;break e}throw Error(U(130,e==null?e:typeof e,""))}return t=Xt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function li(e,t,n,r){return e=Xt(7,e,r,t),e.lanes=n,e}function Xl(e,t,n,r){return e=Xt(22,e,r,t),e.elementType=Vg,e.lanes=n,e.stateNode={isHidden:!1},e}function pu(e,t,n){return e=Xt(6,e,null,t),e.lanes=n,e}function mu(e,t,n){return t=Xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function c_(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gc(0),this.expirationTimes=Gc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Df(e,t,n,r,i,o,a,l,c){return e=new c_(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Xt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wf(o),e}function u_(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ov(e){if(!e)return Dr;e=e._reactInternals;e:{if(xi(e)!==e||e.tag!==1)throw Error(U(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(U(171))}if(e.tag===1){var n=e.type;if(Pt(n))return O0(e,n,t)}return t}function Lv(e,t,n,r,i,o,a,l,c){return e=Df(n,r,!0,e,i,o,a,l,c),e.context=Ov(null),n=e.current,r=_t(),i=jr(n),o=qn(r,i),o.callback=t??null,Pr(n,o,i),e.current.lanes=i,Ha(e,i,r),Nt(e,r),e}function Ql(e,t,n,r){var i=t.current,o=_t(),a=jr(i);return n=Ov(n),t.context===null?t.context=n:t.pendingContext=n,t=qn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Pr(i,t,a),e!==null&&(pn(e,i,a,o),zs(e,i,a)),a}function kl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Mf(e,t){hm(e,t),(e=e.alternate)&&hm(e,t)}function d_(){return null}var Dv=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bf(e){this._internalRoot=e}Jl.prototype.render=Bf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(U(409));Ql(e,t,null,null)};Jl.prototype.unmount=Bf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pi(function(){Ql(null,e,null,null)}),t[Jn]=null}};function Jl(e){this._internalRoot=e}Jl.prototype.unstable_scheduleHydration=function(e){if(e){var t=h0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yr.length&&t!==0&&t<yr[n].priority;n++);yr.splice(n,0,e),n===0&&m0(e)}};function Ff(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Zl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function pm(){}function f_(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var p=kl(a);o.call(p)}}var a=Lv(t,r,e,0,null,!1,!1,"",pm);return e._reactRootContainer=a,e[Jn]=a.current,ba(e.nodeType===8?e.parentNode:e),pi(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var p=kl(c);l.call(p)}}var c=Df(e,0,!1,null,null,!1,!1,"",pm);return e._reactRootContainer=c,e[Jn]=c.current,ba(e.nodeType===8?e.parentNode:e),pi(function(){Ql(t,c,n,r)}),c}function ec(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var c=kl(a);l.call(c)}}Ql(t,a,e,i)}else a=f_(n,t,e,i,r);return kl(a)}d0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Xo(t.pendingLanes);n!==0&&(rf(t,n|1),Nt(t,Ve()),!(fe&6)&&(go=Ve()+500,Fr()))}break;case 13:pi(function(){var r=Zn(e,1);if(r!==null){var i=_t();pn(r,e,1,i)}}),Mf(e,1)}};of=function(e){if(e.tag===13){var t=Zn(e,134217728);if(t!==null){var n=_t();pn(t,e,134217728,n)}Mf(e,134217728)}};f0=function(e){if(e.tag===13){var t=jr(e),n=Zn(e,t);if(n!==null){var r=_t();pn(n,e,t,r)}Mf(e,t)}};h0=function(){return we};p0=function(e,t){var n=we;try{return we=e,t()}finally{we=n}};Hu=function(e,t,n){switch(t){case"input":if(Mu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Hl(r);if(!i)throw Error(U(90));Wg(r),Mu(r,i)}}}break;case"textarea":Yg(e,n);break;case"select":t=n.value,t!=null&&Ji(e,!!n.multiple,t,!1)}};e0=Rf;t0=pi;var h_={usingClientEntryPoint:!1,Events:[Ka,Vi,Hl,Jg,Zg,Rf]},Vo={findFiberByHostInstance:ti,bundleType:0,version:"18.3.0",rendererPackageName:"react-dom"},p_={bundleType:Vo.bundleType,version:Vo.version,rendererPackageName:Vo.rendererPackageName,rendererConfig:Vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=i0(e),e===null?null:e.stateNode},findFiberByHostInstance:Vo.findFiberByHostInstance||d_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.0-next-8a015b68cc-20240425"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Is=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Is.isDisabled&&Is.supportsFiber)try{Ul=Is.inject(p_),In=Is}catch{}}Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h_;Ft.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ff(t))throw Error(U(200));return u_(e,t,null,n)};Ft.createRoot=function(e,t){if(!Ff(e))throw Error(U(299));var n=!1,r="",i=Dv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Df(e,1,!1,null,null,n,!1,r,i),e[Jn]=t.current,ba(e.nodeType===8?e.parentNode:e),new Bf(t)};Ft.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(U(188)):(e=Object.keys(e).join(","),Error(U(268,e)));return e=i0(t),e=e===null?null:e.stateNode,e};Ft.flushSync=function(e){return pi(e)};Ft.hydrate=function(e,t,n){if(!Zl(t))throw Error(U(200));return ec(null,e,t,!0,n)};Ft.hydrateRoot=function(e,t,n){if(!Ff(e))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Dv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Lv(t,null,e,1,n??null,i,!1,o,a),e[Jn]=t.current,ba(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Jl(t)};Ft.render=function(e,t,n){if(!Zl(t))throw Error(U(200));return ec(null,e,t,!1,n)};Ft.unmountComponentAtNode=function(e){if(!Zl(e))throw Error(U(40));return e._reactRootContainer?(pi(function(){ec(null,null,e,!1,function(){e._reactRootContainer=null,e[Jn]=null})}),!0):!1};Ft.unstable_batchedUpdates=Rf;Ft.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Zl(n))throw Error(U(200));if(e==null||e._reactInternals===void 0)throw Error(U(38));return ec(e,t,n,!1,r)};Ft.version="18.3.0-next-8a015b68cc-20240425";function Mv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mv)}catch(e){console.error(e)}}Mv(),Mg.exports=Ft;var Uf=Mg.exports;const m_=Bl(Uf),g_=kg({__proto__:null,default:m_},[Uf]);var mm=Uf;Nu.createRoot=mm.createRoot,Nu.hydrateRoot=mm.hydrateRoot;/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Re(){return Re=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Re.apply(this,arguments)}var $e;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})($e||($e={}));const gm="popstate";function v_(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Na("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:mi(i)}return w_(t,n,null,e)}function re(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function vo(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function y_(){return Math.random().toString(36).substr(2,8)}function vm(e,t){return{usr:e.state,key:e.key,idx:t}}function Na(e,t,n,r){return n===void 0&&(n=null),Re({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ir(t):t,{state:n,key:t&&t.key||r||y_()})}function mi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ir(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function w_(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=$e.Pop,c=null,p=m();p==null&&(p=0,a.replaceState(Re({},a.state,{idx:p}),""));function m(){return(a.state||{idx:null}).idx}function g(){l=$e.Pop;let P=m(),w=P==null?null:P-p;p=P,c&&c({action:l,location:S.location,delta:w})}function y(P,w){l=$e.Push;let v=Na(S.location,P,w);n&&n(v,P),p=m()+1;let x=vm(v,p),T=S.createHref(v);try{a.pushState(x,"",T)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(T)}o&&c&&c({action:l,location:S.location,delta:1})}function C(P,w){l=$e.Replace;let v=Na(S.location,P,w);n&&n(v,P),p=m();let x=vm(v,p),T=S.createHref(v);a.replaceState(x,"",T),o&&c&&c({action:l,location:S.location,delta:0})}function E(P){let w=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof P=="string"?P:mi(P);return v=v.replace(/ $/,"%20"),re(w,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,w)}let S={get action(){return l},get location(){return e(i,a)},listen(P){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(gm,g),c=P,()=>{i.removeEventListener(gm,g),c=null}},createHref(P){return t(i,P)},createURL:E,encodeLocation(P){let w=E(P);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:y,replace:C,go(P){return a.go(P)}};return S}var Ne;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ne||(Ne={}));const x_=new Set(["lazy","caseSensitive","path","id","index","children"]);function b_(e){return e.index===!0}function Sd(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,o)=>{let a=[...n,o],l=typeof i.id=="string"?i.id:a.join("-");if(re(i.index!==!0||!i.children,"Cannot specify children on an index route"),re(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),b_(i)){let c=Re({},i,t(i),{id:l});return r[l]=c,c}else{let c=Re({},i,t(i),{id:l,children:void 0});return r[l]=c,i.children&&(c.children=Sd(i.children,t,a,r)),c}})}function Xi(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?ir(t):t,i=tr(r.pathname||"/",n);if(i==null)return null;let o=Bv(e);S_(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=O_(i);a=R_(o[l],c)}return a}function __(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function Bv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&(re(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let p=Gn([r,c.relativePath]),m=n.concat(c);o.children&&o.children.length>0&&(re(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),Bv(o.children,t,m,p)),!(o.path==null&&!o.index)&&t.push({path:p,score:N_(p,o.index),routesMeta:m})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let c of Fv(o.path))i(o,a,c)}),t}function Fv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Fv(r.join("/")),l=[];return l.push(...a.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function S_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:j_(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const E_=/^:[\w-]+$/,C_=3,k_=2,T_=1,I_=10,P_=-2,ym=e=>e==="*";function N_(e,t){let n=e.split("/"),r=n.length;return n.some(ym)&&(r+=P_),t&&(r+=k_),n.filter(i=>!ym(i)).reduce((i,o)=>i+(E_.test(o)?C_:o===""?T_:I_),r)}function j_(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function R_(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],c=a===n.length-1,p=i==="/"?t:t.slice(i.length)||"/",m=Ed({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},p);if(!m)return null;Object.assign(r,m.params);let g=l.route;o.push({params:r,pathname:Gn([i,m.pathname]),pathnameBase:M_(Gn([i,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(i=Gn([i,m.pathnameBase]))}return o}function Ed(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=A_(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((p,m,g)=>{let{paramName:y,isOptional:C}=m;if(y==="*"){let S=l[g]||"";a=o.slice(0,o.length-S.length).replace(/(.)\/+$/,"$1")}const E=l[g];return C&&!E?p[y]=void 0:p[y]=(E||"").replace(/%2F/g,"/"),p},{}),pathname:o,pathnameBase:a,pattern:e}}function A_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),vo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function O_(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return vo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function tr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function L_(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ir(e):e;return{pathname:n?n.startsWith("/")?n:D_(n,t):t,search:B_(r),hash:F_(i)}}function D_(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function gu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Uv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function tc(e,t){let n=Uv(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function nc(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ir(e):(i=Re({},e),re(!i.pathname||!i.pathname.includes("?"),gu("?","pathname","search",i)),re(!i.pathname||!i.pathname.includes("#"),gu("#","pathname","hash",i)),re(!i.search||!i.search.includes("#"),gu("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(a==null)l=n;else{let g=t.length-1;if(!r&&a.startsWith("..")){let y=a.split("/");for(;y[0]==="..";)y.shift(),g-=1;i.pathname=y.join("/")}l=g>=0?t[g]:"/"}let c=L_(i,l),p=a&&a!=="/"&&a.endsWith("/"),m=(o||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(p||m)&&(c.pathname+="/"),c}const Gn=e=>e.join("/").replace(/\/\/+/g,"/"),M_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),B_=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,F_=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class zf{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function $f(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const zv=["post","put","patch","delete"],U_=new Set(zv),z_=["get",...zv],$_=new Set(z_),V_=new Set([301,302,303,307,308]),H_=new Set([307,308]),vu={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},W_={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Ho={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Vf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,K_=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),$v="remix-router-transitions";function Y_(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;re(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let k=e.detectErrorBoundary;i=j=>({hasErrorBoundary:k(j)})}else i=K_;let o={},a=Sd(e.routes,i,void 0,o),l,c=e.basename||"/",p=e.unstable_dataStrategy||Q_,m=Re({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,unstable_skipActionErrorRevalidation:!1},e.future),g=null,y=new Set,C=null,E=null,S=null,P=e.hydrationData!=null,w=Xi(a,e.history.location,c),v=null;if(w==null){let k=Kt(404,{pathname:e.history.location.pathname}),{matches:j,route:D}=Im(a);w=j,v={[D.id]:k}}let x,T=w.some(k=>k.route.lazy),L=w.some(k=>k.route.loader);if(T)x=!1;else if(!L)x=!0;else if(m.v7_partialHydration){let k=e.hydrationData?e.hydrationData.loaderData:null,j=e.hydrationData?e.hydrationData.errors:null,D=$=>$.route.loader?typeof $.route.loader=="function"&&$.route.loader.hydrate===!0?!1:k&&k[$.route.id]!==void 0||j&&j[$.route.id]!==void 0:!0;if(j){let $=w.findIndex(B=>j[B.route.id]!==void 0);x=w.slice(0,$+1).every(D)}else x=w.every(D)}else x=e.hydrationData!=null;let M,b={historyAction:e.history.action,location:e.history.location,matches:w,initialized:x,navigation:vu,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||v,fetchers:new Map,blockers:new Map},A=$e.Pop,F=!1,z,Q=!1,oe=new Map,he=null,_e=!1,He=!1,gt=[],We=[],R=new Map,X=0,J=-1,ie=new Map,ne=new Set,N=new Map,Se=new Map,ye=new Set,Ce=new Map,De=new Map,Ke=!1;function On(){if(g=e.history.listen(k=>{let{action:j,location:D,delta:$}=k;if(Ke){Ke=!1;return}vo(De.size===0||$!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let B=Ti({currentLocation:b.location,nextLocation:D,historyAction:j});if(B&&$!=null){Ke=!0,e.history.go($*-1),ki(B,{state:"blocked",location:D,proceed(){ki(B,{state:"proceeding",proceed:void 0,reset:void 0,location:D}),e.history.go($)},reset(){let Z=new Map(b.blockers);Z.set(B,Ho),vt({blockers:Z})}});return}return nn(j,D)}),n){cS(t,oe);let k=()=>uS(t,oe);t.addEventListener("pagehide",k),he=()=>t.removeEventListener("pagehide",k)}return b.initialized||nn($e.Pop,b.location,{initialHydration:!0}),M}function rs(){g&&g(),he&&he(),y.clear(),z&&z.abort(),b.fetchers.forEach((k,j)=>rn(j)),b.blockers.forEach((k,j)=>Ci(j))}function Oc(k){return y.add(k),()=>y.delete(k)}function vt(k,j){j===void 0&&(j={}),b=Re({},b,k);let D=[],$=[];m.v7_fetcherPersist&&b.fetchers.forEach((B,Z)=>{B.state==="idle"&&(ye.has(Z)?$.push(Z):D.push(Z))}),[...y].forEach(B=>B(b,{deletedFetchers:$,unstable_viewTransitionOpts:j.viewTransitionOpts,unstable_flushSync:j.flushSync===!0})),m.v7_fetcherPersist&&(D.forEach(B=>b.fetchers.delete(B)),$.forEach(B=>rn(B)))}function vn(k,j,D){var $,B;let{flushSync:Z}=D===void 0?{}:D,Y=b.actionData!=null&&b.navigation.formMethod!=null&&un(b.navigation.formMethod)&&b.navigation.state==="loading"&&(($=k.state)==null?void 0:$._isRedirect)!==!0,H;j.actionData?Object.keys(j.actionData).length>0?H=j.actionData:H=null:Y?H=b.actionData:H=null;let G=j.loaderData?km(b.loaderData,j.loaderData,j.matches||[],j.errors):b.loaderData,q=b.blockers;q.size>0&&(q=new Map(q),q.forEach((ee,ae)=>q.set(ae,Ho)));let Fe=F===!0||b.navigation.formMethod!=null&&un(b.navigation.formMethod)&&((B=k.state)==null?void 0:B._isRedirect)!==!0;l&&(a=l,l=void 0),_e||A===$e.Pop||(A===$e.Push?e.history.push(k,k.state):A===$e.Replace&&e.history.replace(k,k.state));let Ye;if(A===$e.Pop){let ee=oe.get(b.location.pathname);ee&&ee.has(k.pathname)?Ye={currentLocation:b.location,nextLocation:k}:oe.has(k.pathname)&&(Ye={currentLocation:k,nextLocation:b.location})}else if(Q){let ee=oe.get(b.location.pathname);ee?ee.add(k.pathname):(ee=new Set([k.pathname]),oe.set(b.location.pathname,ee)),Ye={currentLocation:b.location,nextLocation:k}}vt(Re({},j,{actionData:H,loaderData:G,historyAction:A,location:k,initialized:!0,navigation:vu,revalidation:"idle",restoreScrollPosition:Vt(k,j.matches||b.matches),preventScrollReset:Fe,blockers:q}),{viewTransitionOpts:Ye,flushSync:Z===!0}),A=$e.Pop,F=!1,Q=!1,_e=!1,He=!1,gt=[],We=[]}async function bi(k,j){if(typeof k=="number"){e.history.go(k);return}let D=Cd(b.location,b.matches,c,m.v7_prependBasename,k,m.v7_relativeSplatPath,j==null?void 0:j.fromRouteId,j==null?void 0:j.relative),{path:$,submission:B,error:Z}=wm(m.v7_normalizeFormMethod,!1,D,j),Y=b.location,H=Na(b.location,$,j&&j.state);H=Re({},H,e.history.encodeLocation(H));let G=j&&j.replace!=null?j.replace:void 0,q=$e.Push;G===!0?q=$e.Replace:G===!1||B!=null&&un(B.formMethod)&&B.formAction===b.location.pathname+b.location.search&&(q=$e.Replace);let Fe=j&&"preventScrollReset"in j?j.preventScrollReset===!0:void 0,Ye=(j&&j.unstable_flushSync)===!0,ee=Ti({currentLocation:Y,nextLocation:H,historyAction:q});if(ee){ki(ee,{state:"blocked",location:H,proceed(){ki(ee,{state:"proceeding",proceed:void 0,reset:void 0,location:H}),bi(k,j)},reset(){let ae=new Map(b.blockers);ae.set(ee,Ho),vt({blockers:ae})}});return}return await nn(q,H,{submission:B,pendingError:Z,preventScrollReset:Fe,replace:j&&j.replace,enableViewTransition:j&&j.unstable_viewTransition,flushSync:Ye})}function Hr(){if(Si(),vt({revalidation:"loading"}),b.navigation.state!=="submitting"){if(b.navigation.state==="idle"){nn(b.historyAction,b.location,{startUninterruptedRevalidation:!0});return}nn(A||b.historyAction,b.navigation.location,{overrideNavigation:b.navigation})}}async function nn(k,j,D){z&&z.abort(),z=null,A=k,_e=(D&&D.startUninterruptedRevalidation)===!0,wt(b.location,b.matches),F=(D&&D.preventScrollReset)===!0,Q=(D&&D.enableViewTransition)===!0;let $=l||a,B=D&&D.overrideNavigation,Z=Xi($,j,c),Y=(D&&D.flushSync)===!0;if(!Z){let ee=Kt(404,{pathname:j.pathname}),{matches:ae,route:qe}=Im($);qr(),vn(j,{matches:ae,loaderData:{},errors:{[qe.id]:ee}},{flushSync:Y});return}if(b.initialized&&!He&&rS(b.location,j)&&!(D&&D.submission&&un(D.submission.formMethod))){vn(j,{matches:Z},{flushSync:Y});return}z=new AbortController;let H=Mi(e.history,j,z.signal,D&&D.submission),G;if(D&&D.pendingError)G=[ua(Z).route.id,{type:Ne.error,error:D.pendingError}];else if(D&&D.submission&&un(D.submission.formMethod)){let ee=await ct(H,j,D.submission,Z,{replace:D.replace,flushSync:Y});if(ee.shortCircuited)return;G=ee.pendingActionResult,B=yu(j,D.submission),Y=!1,H=Mi(e.history,H.url,H.signal)}let{shortCircuited:q,loaderData:Fe,errors:Ye}=await Wr(H,j,Z,B,D&&D.submission,D&&D.fetcherSubmission,D&&D.replace,D&&D.initialHydration===!0,Y,G);q||(z=null,vn(j,Re({matches:Z},Tm(G),{loaderData:Fe,errors:Ye})))}async function ct(k,j,D,$,B){B===void 0&&(B={}),Si();let Z=sS(j,D);vt({navigation:Z},{flushSync:B.flushSync===!0});let Y,H=Td($,j);if(!H.route.action&&!H.route.lazy)Y={type:Ne.error,error:Kt(405,{method:k.method,pathname:j.pathname,routeId:H.route.id})};else if(Y=(await sr("action",k,[H],$))[0],k.signal.aborted)return{shortCircuited:!0};if(oi(Y)){let G;return B&&B.replace!=null?G=B.replace:G=Sm(Y.response.headers.get("Location"),new URL(k.url),c)===b.location.pathname+b.location.search,await Yr(k,Y,{submission:D,replace:G}),{shortCircuited:!0}}if(ii(Y))throw Kt(400,{type:"defer-action"});if(Gt(Y)){let G=ua($,H.route.id);return(B&&B.replace)!==!0&&(A=$e.Push),{pendingActionResult:[G.route.id,Y]}}return{pendingActionResult:[H.route.id,Y]}}async function Wr(k,j,D,$,B,Z,Y,H,G,q){let Fe=$||yu(j,B),Ye=B||Z||jm(Fe),ee=l||a,[ae,qe]=xm(e.history,b,D,Ye,j,m.v7_partialHydration&&H===!0,m.unstable_skipActionErrorRevalidation,He,gt,We,ye,N,ne,ee,c,q);if(qr(ce=>!(D&&D.some(it=>it.route.id===ce))||ae&&ae.some(it=>it.route.id===ce)),J=++X,ae.length===0&&qe.length===0){let ce=lr();return vn(j,Re({matches:D,loaderData:{},errors:q&&Gt(q[1])?{[q[0]]:q[1].error}:null},Tm(q),ce?{fetchers:new Map(b.fetchers)}:{}),{flushSync:G}),{shortCircuited:!0}}if(!_e&&(!m.v7_partialHydration||!H)){qe.forEach(it=>{let Ct=b.fetchers.get(it.key),Qe=Wo(void 0,Ct?Ct.data:void 0);b.fetchers.set(it.key,Qe)});let ce;q&&!Gt(q[1])?ce={[q[0]]:q[1].data}:b.actionData&&(Object.keys(b.actionData).length===0?ce=null:ce=b.actionData),vt(Re({navigation:Fe},ce!==void 0?{actionData:ce}:{},qe.length>0?{fetchers:new Map(b.fetchers)}:{}),{flushSync:G})}qe.forEach(ce=>{R.has(ce.key)&&wn(ce.key),ce.controller&&R.set(ce.key,ce.controller)});let cr=()=>qe.forEach(ce=>wn(ce.key));z&&z.signal.addEventListener("abort",cr);let{loaderResults:on,fetcherResults:xn}=await _i(b.matches,D,ae,qe,k);if(k.signal.aborted)return{shortCircuited:!0};z&&z.signal.removeEventListener("abort",cr),qe.forEach(ce=>R.delete(ce.key));let ur=Pm([...on,...xn]);if(ur){if(ur.idx>=ae.length){let ce=qe[ur.idx-ae.length].key;ne.add(ce)}return await Yr(k,ur.result,{replace:Y}),{shortCircuited:!0}}let{loaderData:Mn,errors:Ht}=Cm(b,D,ae,on,q,qe,xn,Ce);Ce.forEach((ce,it)=>{ce.subscribe(Ct=>{(Ct||ce.done)&&Ce.delete(it)})}),m.v7_partialHydration&&H&&b.errors&&Object.entries(b.errors).filter(ce=>{let[it]=ce;return!ae.some(Ct=>Ct.route.id===it)}).forEach(ce=>{let[it,Ct]=ce;Ht=Object.assign(Ht||{},{[it]:Ct})});let Pi=lr(),Wt=Ro(J),Ni=Pi||Wt||qe.length>0;return Re({loaderData:Mn,errors:Ht},Ni?{fetchers:new Map(b.fetchers)}:{})}function yt(k,j,D,$){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");R.has(k)&&wn(k);let B=($&&$.unstable_flushSync)===!0,Z=l||a,Y=Cd(b.location,b.matches,c,m.v7_prependBasename,D,m.v7_relativeSplatPath,j,$==null?void 0:$.relative),H=Xi(Z,Y,c);if(!H){yn(k,j,Kt(404,{pathname:Y}),{flushSync:B});return}let{path:G,submission:q,error:Fe}=wm(m.v7_normalizeFormMethod,!0,Y,$);if(Fe){yn(k,j,Fe,{flushSync:B});return}let Ye=Td(H,G);if(F=($&&$.preventScrollReset)===!0,q&&un(q.formMethod)){pe(k,j,G,Ye,H,B,q);return}N.set(k,{routeId:j,path:G}),Kr(k,j,G,Ye,H,B,q)}async function pe(k,j,D,$,B,Z,Y){if(Si(),N.delete(k),!$.route.action&&!$.route.lazy){let Qe=Kt(405,{method:Y.formMethod,pathname:D,routeId:j});yn(k,j,Qe,{flushSync:Z});return}let H=b.fetchers.get(k);$t(k,lS(Y,H),{flushSync:Z});let G=new AbortController,q=Mi(e.history,D,G.signal,Y);R.set(k,G);let Fe=X,ee=(await sr("action",q,[$],B))[0];if(q.signal.aborted){R.get(k)===G&&R.delete(k);return}if(m.v7_fetcherPersist&&ye.has(k)){if(oi(ee)||Gt(ee)){$t(k,mr(void 0));return}}else{if(oi(ee))if(R.delete(k),J>Fe){$t(k,mr(void 0));return}else return ne.add(k),$t(k,Wo(Y)),Yr(q,ee,{fetcherSubmission:Y});if(Gt(ee)){yn(k,j,ee.error);return}}if(ii(ee))throw Kt(400,{type:"defer-action"});let ae=b.navigation.location||b.location,qe=Mi(e.history,ae,G.signal),cr=l||a,on=b.navigation.state!=="idle"?Xi(cr,b.navigation.location,c):b.matches;re(on,"Didn't find any matches after fetcher action");let xn=++X;ie.set(k,xn);let ur=Wo(Y,ee.data);b.fetchers.set(k,ur);let[Mn,Ht]=xm(e.history,b,on,Y,ae,!1,m.unstable_skipActionErrorRevalidation,He,gt,We,ye,N,ne,cr,c,[$.route.id,ee]);Ht.filter(Qe=>Qe.key!==k).forEach(Qe=>{let Bn=Qe.key,os=b.fetchers.get(Bn),Dc=Wo(void 0,os?os.data:void 0);b.fetchers.set(Bn,Dc),R.has(Bn)&&wn(Bn),Qe.controller&&R.set(Bn,Qe.controller)}),vt({fetchers:new Map(b.fetchers)});let Pi=()=>Ht.forEach(Qe=>wn(Qe.key));G.signal.addEventListener("abort",Pi);let{loaderResults:Wt,fetcherResults:Ni}=await _i(b.matches,on,Mn,Ht,qe);if(G.signal.aborted)return;G.signal.removeEventListener("abort",Pi),ie.delete(k),R.delete(k),Ht.forEach(Qe=>R.delete(Qe.key));let ce=Pm([...Wt,...Ni]);if(ce){if(ce.idx>=Mn.length){let Qe=Ht[ce.idx-Mn.length].key;ne.add(Qe)}return Yr(qe,ce.result)}let{loaderData:it,errors:Ct}=Cm(b,b.matches,Mn,Wt,void 0,Ht,Ni,Ce);if(b.fetchers.has(k)){let Qe=mr(ee.data);b.fetchers.set(k,Qe)}Ro(xn),b.navigation.state==="loading"&&xn>J?(re(A,"Expected pending action"),z&&z.abort(),vn(b.navigation.location,{matches:on,loaderData:it,errors:Ct,fetchers:new Map(b.fetchers)})):(vt({errors:Ct,loaderData:km(b.loaderData,it,on,Ct),fetchers:new Map(b.fetchers)}),He=!1)}async function Kr(k,j,D,$,B,Z,Y){let H=b.fetchers.get(k);$t(k,Wo(Y,H?H.data:void 0),{flushSync:Z});let G=new AbortController,q=Mi(e.history,D,G.signal);R.set(k,G);let Fe=X,ee=(await sr("loader",q,[$],B))[0];if(ii(ee)&&(ee=await Kv(ee,q.signal,!0)||ee),R.get(k)===G&&R.delete(k),!q.signal.aborted){if(ye.has(k)){$t(k,mr(void 0));return}if(oi(ee))if(J>Fe){$t(k,mr(void 0));return}else{ne.add(k),await Yr(q,ee);return}if(Gt(ee)){yn(k,j,ee.error);return}re(!ii(ee),"Unhandled fetcher deferred data"),$t(k,mr(ee.data))}}async function Yr(k,j,D){let{submission:$,fetcherSubmission:B,replace:Z}=D===void 0?{}:D;j.response.headers.has("X-Remix-Revalidate")&&(He=!0);let Y=j.response.headers.get("Location");re(Y,"Expected a Location header on the redirect Response"),Y=Sm(Y,new URL(k.url),c);let H=Na(b.location,Y,{_isRedirect:!0});if(n){let ae=!1;if(j.response.headers.has("X-Remix-Reload-Document"))ae=!0;else if(Vf.test(Y)){const qe=e.history.createURL(Y);ae=qe.origin!==t.location.origin||tr(qe.pathname,c)==null}if(ae){Z?t.location.replace(Y):t.location.assign(Y);return}}z=null;let G=Z===!0?$e.Replace:$e.Push,{formMethod:q,formAction:Fe,formEncType:Ye}=b.navigation;!$&&!B&&q&&Fe&&Ye&&($=jm(b.navigation));let ee=$||B;if(H_.has(j.response.status)&&ee&&un(ee.formMethod))await nn(G,H,{submission:Re({},ee,{formAction:Y}),preventScrollReset:F});else{let ae=yu(H,$);await nn(G,H,{overrideNavigation:ae,fetcherSubmission:B,preventScrollReset:F})}}async function sr(k,j,D,$){try{let B=await J_(p,k,j,D,$,o,i);return await Promise.all(B.map((Z,Y)=>{if(iS(Z)){let H=Z.result;return{type:Ne.redirect,response:tS(H,j,D[Y].route.id,$,c,m.v7_relativeSplatPath)}}return eS(Z)}))}catch(B){return D.map(()=>({type:Ne.error,error:B}))}}async function _i(k,j,D,$,B){let[Z,...Y]=await Promise.all([D.length?sr("loader",B,D,j):[],...$.map(H=>{if(H.matches&&H.match&&H.controller){let G=Mi(e.history,H.path,H.controller.signal);return sr("loader",G,[H.match],H.matches).then(q=>q[0])}else return Promise.resolve({type:Ne.error,error:Kt(404,{pathname:H.path})})})]);return await Promise.all([Nm(k,D,Z,Z.map(()=>B.signal),!1,b.loaderData),Nm(k,$.map(H=>H.match),Y,$.map(H=>H.controller?H.controller.signal:null),!0)]),{loaderResults:Z,fetcherResults:Y}}function Si(){He=!0,gt.push(...qr()),N.forEach((k,j)=>{R.has(j)&&(We.push(j),wn(j))})}function $t(k,j,D){D===void 0&&(D={}),b.fetchers.set(k,j),vt({fetchers:new Map(b.fetchers)},{flushSync:(D&&D.flushSync)===!0})}function yn(k,j,D,$){$===void 0&&($={});let B=ua(b.matches,j);rn(k),vt({errors:{[B.route.id]:D},fetchers:new Map(b.fetchers)},{flushSync:($&&$.flushSync)===!0})}function Rt(k){return m.v7_fetcherPersist&&(Se.set(k,(Se.get(k)||0)+1),ye.has(k)&&ye.delete(k)),b.fetchers.get(k)||W_}function rn(k){let j=b.fetchers.get(k);R.has(k)&&!(j&&j.state==="loading"&&ie.has(k))&&wn(k),N.delete(k),ie.delete(k),ne.delete(k),ye.delete(k),b.fetchers.delete(k)}function Ln(k){if(m.v7_fetcherPersist){let j=(Se.get(k)||0)-1;j<=0?(Se.delete(k),ye.add(k)):Se.set(k,j)}else rn(k);vt({fetchers:new Map(b.fetchers)})}function wn(k){let j=R.get(k);re(j,"Expected fetch controller: "+k),j.abort(),R.delete(k)}function Dn(k){for(let j of k){let D=Rt(j),$=mr(D.data);b.fetchers.set(j,$)}}function lr(){let k=[],j=!1;for(let D of ne){let $=b.fetchers.get(D);re($,"Expected fetcher: "+D),$.state==="loading"&&(ne.delete(D),k.push(D),j=!0)}return Dn(k),j}function Ro(k){let j=[];for(let[D,$]of ie)if($<k){let B=b.fetchers.get(D);re(B,"Expected fetcher: "+D),B.state==="loading"&&(wn(D),ie.delete(D),j.push(D))}return Dn(j),j.length>0}function Ei(k,j){let D=b.blockers.get(k)||Ho;return De.get(k)!==j&&De.set(k,j),D}function Ci(k){b.blockers.delete(k),De.delete(k)}function ki(k,j){let D=b.blockers.get(k)||Ho;re(D.state==="unblocked"&&j.state==="blocked"||D.state==="blocked"&&j.state==="blocked"||D.state==="blocked"&&j.state==="proceeding"||D.state==="blocked"&&j.state==="unblocked"||D.state==="proceeding"&&j.state==="unblocked","Invalid blocker state transition: "+D.state+" -> "+j.state);let $=new Map(b.blockers);$.set(k,j),vt({blockers:$})}function Ti(k){let{currentLocation:j,nextLocation:D,historyAction:$}=k;if(De.size===0)return;De.size>1&&vo(!1,"A router only supports one blocker at a time");let B=Array.from(De.entries()),[Z,Y]=B[B.length-1],H=b.blockers.get(Z);if(!(H&&H.state==="proceeding")&&Y({currentLocation:j,nextLocation:D,historyAction:$}))return Z}function qr(k){let j=[];return Ce.forEach((D,$)=>{(!k||k($))&&(D.cancel(),j.push($),Ce.delete($))}),j}function Ii(k,j,D){if(C=k,S=j,E=D||null,!P&&b.navigation===vu){P=!0;let $=Vt(b.location,b.matches);$!=null&&vt({restoreScrollPosition:$})}return()=>{C=null,S=null,E=null}}function is(k,j){return E&&E(k,j.map($=>__($,b.loaderData)))||k.key}function wt(k,j){if(C&&S){let D=is(k,j);C[D]=S()}}function Vt(k,j){if(C){let D=is(k,j),$=C[D];if(typeof $=="number")return $}return null}function Lc(k){o={},l=Sd(k,i,void 0,o)}return M={get basename(){return c},get future(){return m},get state(){return b},get routes(){return a},get window(){return t},initialize:On,subscribe:Oc,enableScrollRestoration:Ii,navigate:bi,fetch:yt,revalidate:Hr,createHref:k=>e.history.createHref(k),encodeLocation:k=>e.history.encodeLocation(k),getFetcher:Rt,deleteFetcher:Ln,dispose:rs,getBlocker:Ei,deleteBlocker:Ci,_internalFetchControllers:R,_internalActiveDeferreds:Ce,_internalSetRoutes:Lc},M}function q_(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Cd(e,t,n,r,i,o,a,l){let c,p;if(a){c=[];for(let g of t)if(c.push(g),g.route.id===a){p=g;break}}else c=t,p=t[t.length-1];let m=nc(i||".",tc(c,o),tr(e.pathname,n)||e.pathname,l==="path");return i==null&&(m.search=e.search,m.hash=e.hash),(i==null||i===""||i===".")&&p&&p.route.index&&!Hf(m.search)&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(m.pathname=m.pathname==="/"?n:Gn([n,m.pathname])),mi(m)}function wm(e,t,n,r){if(!r||!q_(r))return{path:n};if(r.formMethod&&!aS(r.formMethod))return{path:n,error:Kt(405,{method:r.formMethod})};let i=()=>({path:n,error:Kt(400,{type:"invalid-body"})}),o=r.formMethod||"get",a=e?o.toUpperCase():o.toLowerCase(),l=Hv(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!un(a))return i();let y=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((C,E)=>{let[S,P]=E;return""+C+S+"="+P+`
`},""):String(r.body);return{path:n,submission:{formMethod:a,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:y}}}else if(r.formEncType==="application/json"){if(!un(a))return i();try{let y=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:a,formAction:l,formEncType:r.formEncType,formData:void 0,json:y,text:void 0}}}catch{return i()}}}re(typeof FormData=="function","FormData is not available in this environment");let c,p;if(r.formData)c=kd(r.formData),p=r.formData;else if(r.body instanceof FormData)c=kd(r.body),p=r.body;else if(r.body instanceof URLSearchParams)c=r.body,p=Em(c);else if(r.body==null)c=new URLSearchParams,p=new FormData;else try{c=new URLSearchParams(r.body),p=Em(c)}catch{return i()}let m={formMethod:a,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:p,json:void 0,text:void 0};if(un(m.formMethod))return{path:n,submission:m};let g=ir(n);return t&&g.search&&Hf(g.search)&&c.append("index",""),g.search="?"+c,{path:mi(g),submission:m}}function G_(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function xm(e,t,n,r,i,o,a,l,c,p,m,g,y,C,E,S){let P=S?Gt(S[1])?S[1].error:S[1].data:void 0,w=e.createURL(t.location),v=e.createURL(i),x=S&&Gt(S[1])?S[0]:void 0,T=x?G_(n,x):n,L=S?S[1].statusCode:void 0,M=a&&L&&L>=400,b=T.filter((F,z)=>{let{route:Q}=F;if(Q.lazy)return!0;if(Q.loader==null)return!1;if(o)return typeof Q.loader!="function"||Q.loader.hydrate?!0:t.loaderData[Q.id]===void 0&&(!t.errors||t.errors[Q.id]===void 0);if(X_(t.loaderData,t.matches[z],F)||c.some(_e=>_e===F.route.id))return!0;let oe=t.matches[z],he=F;return bm(F,Re({currentUrl:w,currentParams:oe.params,nextUrl:v,nextParams:he.params},r,{actionResult:P,unstable_actionStatus:L,defaultShouldRevalidate:M?!1:l||w.pathname+w.search===v.pathname+v.search||w.search!==v.search||Vv(oe,he)}))}),A=[];return g.forEach((F,z)=>{if(o||!n.some(He=>He.route.id===F.routeId)||m.has(z))return;let Q=Xi(C,F.path,E);if(!Q){A.push({key:z,routeId:F.routeId,path:F.path,matches:null,match:null,controller:null});return}let oe=t.fetchers.get(z),he=Td(Q,F.path),_e=!1;y.has(z)?_e=!1:p.includes(z)?_e=!0:oe&&oe.state!=="idle"&&oe.data===void 0?_e=l:_e=bm(he,Re({currentUrl:w,currentParams:t.matches[t.matches.length-1].params,nextUrl:v,nextParams:n[n.length-1].params},r,{actionResult:P,unstable_actionStatus:L,defaultShouldRevalidate:M?!1:l})),_e&&A.push({key:z,routeId:F.routeId,path:F.path,matches:Q,match:he,controller:new AbortController})}),[b,A]}function X_(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function Vv(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function bm(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function _m(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];re(i,"No route found in manifest");let o={};for(let a in r){let c=i[a]!==void 0&&a!=="hasErrorBoundary";vo(!c,'Route "'+i.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!c&&!x_.has(a)&&(o[a]=r[a])}Object.assign(i,o),Object.assign(i,Re({},t(i),{lazy:void 0}))}function Q_(e){return Promise.all(e.matches.map(t=>t.resolve()))}async function J_(e,t,n,r,i,o,a,l){let c=r.reduce((g,y)=>g.add(y.route.id),new Set),p=new Set,m=await e({matches:i.map(g=>{let y=c.has(g.route.id);return Re({},g,{shouldLoad:y,resolve:E=>(p.add(g.route.id),y?Z_(t,n,g,o,a,E,l):Promise.resolve({type:Ne.data,result:void 0}))})}),request:n,params:i[0].params,context:l});return i.forEach(g=>re(p.has(g.route.id),'`match.resolve()` was not called for route id "'+g.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),m.filter((g,y)=>c.has(i[y].route.id))}async function Z_(e,t,n,r,i,o,a){let l,c,p=m=>{let g,y=new Promise((S,P)=>g=P);c=()=>g(),t.signal.addEventListener("abort",c);let C=S=>typeof m!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+n.route.id+"]"))):m({request:t,params:n.params,context:a},...S!==void 0?[S]:[]),E;return o?E=o(S=>C(S)):E=(async()=>{try{return{type:"data",result:await C()}}catch(S){return{type:"error",result:S}}})(),Promise.race([E,y])};try{let m=n.route[e];if(n.route.lazy)if(m){let g,[y]=await Promise.all([p(m).catch(C=>{g=C}),_m(n.route,i,r)]);if(g!==void 0)throw g;l=y}else if(await _m(n.route,i,r),m=n.route[e],m)l=await p(m);else if(e==="action"){let g=new URL(t.url),y=g.pathname+g.search;throw Kt(405,{method:t.method,pathname:y,routeId:n.route.id})}else return{type:Ne.data,result:void 0};else if(m)l=await p(m);else{let g=new URL(t.url),y=g.pathname+g.search;throw Kt(404,{pathname:y})}re(l.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(m){return{type:Ne.error,result:m}}finally{c&&t.signal.removeEventListener("abort",c)}return l}async function eS(e){let{result:t,type:n,status:r}=e;if(Wv(t)){let a;try{let l=t.headers.get("Content-Type");l&&/\bapplication\/json\b/.test(l)?t.body==null?a=null:a=await t.json():a=await t.text()}catch(l){return{type:Ne.error,error:l}}return n===Ne.error?{type:Ne.error,error:new zf(t.status,t.statusText,a),statusCode:t.status,headers:t.headers}:{type:Ne.data,data:a,statusCode:t.status,headers:t.headers}}if(n===Ne.error)return{type:Ne.error,error:t,statusCode:$f(t)?t.status:r};if(oS(t)){var i,o;return{type:Ne.deferred,deferredData:t,statusCode:(i=t.init)==null?void 0:i.status,headers:((o=t.init)==null?void 0:o.headers)&&new Headers(t.init.headers)}}return{type:Ne.data,data:t,statusCode:r}}function tS(e,t,n,r,i,o){let a=e.headers.get("Location");if(re(a,"Redirects returned/thrown from loaders/actions must have a Location header"),!Vf.test(a)){let l=r.slice(0,r.findIndex(c=>c.route.id===n)+1);a=Cd(new URL(t.url),l,i,!0,a,o),e.headers.set("Location",a)}return e}function Sm(e,t,n){if(Vf.test(e)){let r=e,i=r.startsWith("//")?new URL(t.protocol+r):new URL(r),o=tr(i.pathname,n)!=null;if(i.origin===t.origin&&o)return i.pathname+i.search+i.hash}return e}function Mi(e,t,n,r){let i=e.createURL(Hv(t)).toString(),o={signal:n};if(r&&un(r.formMethod)){let{formMethod:a,formEncType:l}=r;o.method=a.toUpperCase(),l==="application/json"?(o.headers=new Headers({"Content-Type":l}),o.body=JSON.stringify(r.json)):l==="text/plain"?o.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?o.body=kd(r.formData):o.body=r.formData}return new Request(i,o)}function kd(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function Em(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function nS(e,t,n,r,i,o){let a={},l=null,c,p=!1,m={},g=r&&Gt(r[1])?r[1].error:void 0;return n.forEach((y,C)=>{let E=t[C].route.id;if(re(!oi(y),"Cannot handle redirect results in processLoaderData"),Gt(y)){let S=y.error;if(g!==void 0&&(S=g,g=void 0),l=l||{},o)l[E]=S;else{let P=ua(e,E);l[P.route.id]==null&&(l[P.route.id]=S)}a[E]=void 0,p||(p=!0,c=$f(y.error)?y.error.status:500),y.headers&&(m[E]=y.headers)}else ii(y)?(i.set(E,y.deferredData),a[E]=y.deferredData.data,y.statusCode!=null&&y.statusCode!==200&&!p&&(c=y.statusCode),y.headers&&(m[E]=y.headers)):(a[E]=y.data,y.statusCode&&y.statusCode!==200&&!p&&(c=y.statusCode),y.headers&&(m[E]=y.headers))}),g!==void 0&&r&&(l={[r[0]]:g},a[r[0]]=void 0),{loaderData:a,errors:l,statusCode:c||200,loaderHeaders:m}}function Cm(e,t,n,r,i,o,a,l){let{loaderData:c,errors:p}=nS(t,n,r,i,l,!1);for(let m=0;m<o.length;m++){let{key:g,match:y,controller:C}=o[m];re(a!==void 0&&a[m]!==void 0,"Did not find corresponding fetcher result");let E=a[m];if(!(C&&C.signal.aborted))if(Gt(E)){let S=ua(e.matches,y==null?void 0:y.route.id);p&&p[S.route.id]||(p=Re({},p,{[S.route.id]:E.error})),e.fetchers.delete(g)}else if(oi(E))re(!1,"Unhandled fetcher revalidation redirect");else if(ii(E))re(!1,"Unhandled fetcher deferred data");else{let S=mr(E.data);e.fetchers.set(g,S)}}return{loaderData:c,errors:p}}function km(e,t,n,r){let i=Re({},t);for(let o of n){let a=o.route.id;if(t.hasOwnProperty(a)?t[a]!==void 0&&(i[a]=t[a]):e[a]!==void 0&&o.route.loader&&(i[a]=e[a]),r&&r.hasOwnProperty(a))break}return i}function Tm(e){return e?Gt(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function ua(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Im(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Kt(e,t){let{pathname:n,routeId:r,method:i,type:o}=t===void 0?{}:t,a="Unknown Server Error",l="Unknown @remix-run/router error";return e===400?(a="Bad Request",i&&n&&r?l="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"?l="defer() is not supported in actions":o==="invalid-body"&&(l="Unable to encode submission body")):e===403?(a="Forbidden",l='Route "'+r+'" does not match URL "'+n+'"'):e===404?(a="Not Found",l='No route matches URL "'+n+'"'):e===405&&(a="Method Not Allowed",i&&n&&r?l="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(l='Invalid request method "'+i.toUpperCase()+'"')),new zf(e||500,a,new Error(l),!0)}function Pm(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(oi(n))return{result:n,idx:t}}}function Hv(e){let t=typeof e=="string"?ir(e):e;return mi(Re({},t,{hash:""}))}function rS(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function iS(e){return Wv(e.result)&&V_.has(e.result.status)}function ii(e){return e.type===Ne.deferred}function Gt(e){return e.type===Ne.error}function oi(e){return(e&&e.type)===Ne.redirect}function oS(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function Wv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function aS(e){return $_.has(e.toLowerCase())}function un(e){return U_.has(e.toLowerCase())}async function Nm(e,t,n,r,i,o){for(let a=0;a<n.length;a++){let l=n[a],c=t[a];if(!c)continue;let p=e.find(g=>g.route.id===c.route.id),m=p!=null&&!Vv(p,c)&&(o&&o[c.route.id])!==void 0;if(ii(l)&&(i||m)){let g=r[a];re(g,"Expected an AbortSignal for revalidating fetcher deferred result"),await Kv(l,g,i).then(y=>{y&&(n[a]=y||n[a])})}}}async function Kv(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Ne.data,data:e.deferredData.unwrappedData}}catch(i){return{type:Ne.error,error:i}}return{type:Ne.data,data:e.deferredData.data}}}function Hf(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Td(e,t){let n=typeof t=="string"?ir(t).search:t.search;if(e[e.length-1].route.index&&Hf(n||""))return e[e.length-1];let r=Uv(e);return r[r.length-1]}function jm(e){let{formMethod:t,formAction:n,formEncType:r,text:i,formData:o,json:a}=e;if(!(!t||!n||!r)){if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:o,json:void 0,text:void 0};if(a!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:a,text:void 0}}}function yu(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function sS(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Wo(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function lS(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function mr(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function cS(e,t){try{let n=e.sessionStorage.getItem($v);if(n){let r=JSON.parse(n);for(let[i,o]of Object.entries(r||{}))o&&Array.isArray(o)&&t.set(i,new Set(o||[]))}}catch{}}function uS(e,t){if(t.size>0){let n={};for(let[r,i]of t)n[r]=[...i];try{e.sessionStorage.setItem($v,JSON.stringify(n))}catch(r){vo(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ja(){return ja=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ja.apply(this,arguments)}const qa=I.createContext(null),Wf=I.createContext(null),or=I.createContext(null),rc=I.createContext(null),An=I.createContext({outlet:null,matches:[],isDataRoute:!1}),Yv=I.createContext(null);function dS(e,t){let{relative:n}=t===void 0?{}:t;Co()||re(!1);let{basename:r,navigator:i}=I.useContext(or),{hash:o,pathname:a,search:l}=ic(e,{relative:n}),c=a;return r!=="/"&&(c=a==="/"?r:Gn([r,a])),i.createHref({pathname:c,search:l,hash:o})}function Co(){return I.useContext(rc)!=null}function ko(){return Co()||re(!1),I.useContext(rc).location}function qv(e){I.useContext(or).static||I.useLayoutEffect(e)}function Kf(){let{isDataRoute:e}=I.useContext(An);return e?ES():fS()}function fS(){Co()||re(!1);let e=I.useContext(qa),{basename:t,future:n,navigator:r}=I.useContext(or),{matches:i}=I.useContext(An),{pathname:o}=ko(),a=JSON.stringify(tc(i,n.v7_relativeSplatPath)),l=I.useRef(!1);return qv(()=>{l.current=!0}),I.useCallback(function(p,m){if(m===void 0&&(m={}),!l.current)return;if(typeof p=="number"){r.go(p);return}let g=nc(p,JSON.parse(a),o,m.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:Gn([t,g.pathname])),(m.replace?r.replace:r.push)(g,m.state,m)},[t,r,a,o,e])}const hS=I.createContext(null);function pS(e){let t=I.useContext(An).outlet;return t&&I.createElement(hS.Provider,{value:e},t)}function Gv(){let{matches:e}=I.useContext(An),t=e[e.length-1];return t?t.params:{}}function ic(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=I.useContext(or),{matches:i}=I.useContext(An),{pathname:o}=ko(),a=JSON.stringify(tc(i,r.v7_relativeSplatPath));return I.useMemo(()=>nc(e,JSON.parse(a),o,n==="path"),[e,a,o,n])}function mS(e,t,n,r){Co()||re(!1);let{navigator:i}=I.useContext(or),{matches:o}=I.useContext(An),a=o[o.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let p=ko(),m;if(t){var g;let P=typeof t=="string"?ir(t):t;c==="/"||(g=P.pathname)!=null&&g.startsWith(c)||re(!1),m=P}else m=p;let y=m.pathname||"/",C=y;if(c!=="/"){let P=c.replace(/^\//,"").split("/");C="/"+y.replace(/^\//,"").split("/").slice(P.length).join("/")}let E=Xi(e,{pathname:C}),S=xS(E&&E.map(P=>Object.assign({},P,{params:Object.assign({},l,P.params),pathname:Gn([c,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?c:Gn([c,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),o,n,r);return t&&S?I.createElement(rc.Provider,{value:{location:ja({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:$e.Pop}},S):S}function gS(){let e=SS(),t=$f(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},t),n?I.createElement("pre",{style:i},n):null,null)}const vS=I.createElement(gS,null);class yS extends I.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?I.createElement(An.Provider,{value:this.props.routeContext},I.createElement(Yv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function wS(e){let{routeContext:t,match:n,children:r}=e,i=I.useContext(qa);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(An.Provider,{value:t},r)}function xS(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let m=a.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);m>=0||re(!1),a=a.slice(0,Math.min(a.length,m+1))}let c=!1,p=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<a.length;m++){let g=a[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=m),g.route.id){let{loaderData:y,errors:C}=n,E=g.route.loader&&y[g.route.id]===void 0&&(!C||C[g.route.id]===void 0);if(g.route.lazy||E){c=!0,p>=0?a=a.slice(0,p+1):a=[a[0]];break}}}return a.reduceRight((m,g,y)=>{let C,E=!1,S=null,P=null;n&&(C=l&&g.route.id?l[g.route.id]:void 0,S=g.route.errorElement||vS,c&&(p<0&&y===0?(CS("route-fallback",!1),E=!0,P=null):p===y&&(E=!0,P=g.route.hydrateFallbackElement||null)));let w=t.concat(a.slice(0,y+1)),v=()=>{let x;return C?x=S:E?x=P:g.route.Component?x=I.createElement(g.route.Component,null):g.route.element?x=g.route.element:x=m,I.createElement(wS,{match:g,routeContext:{outlet:m,matches:w,isDataRoute:n!=null},children:x})};return n&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?I.createElement(yS,{location:n.location,revalidation:n.revalidation,component:S,error:C,children:v(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):v()},null)}var Xv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Xv||{}),yo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(yo||{});function bS(e){let t=I.useContext(qa);return t||re(!1),t}function Qv(e){let t=I.useContext(Wf);return t||re(!1),t}function _S(e){let t=I.useContext(An);return t||re(!1),t}function Yf(e){let t=_S(),n=t.matches[t.matches.length-1];return n.route.id||re(!1),n.route.id}function To(){let e=Qv(yo.UseLoaderData),t=Yf(yo.UseLoaderData);if(e.errors&&e.errors[t]!=null){console.error("You cannot `useLoaderData` in an errorElement (routeId: "+t+")");return}return e.loaderData[t]}function SS(){var e;let t=I.useContext(Yv),n=Qv(yo.UseRouteError),r=Yf(yo.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function ES(){let{router:e}=bS(Xv.UseNavigateStable),t=Yf(yo.UseNavigateStable),n=I.useRef(!1);return qv(()=>{n.current=!0}),I.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ja({fromRouteId:t},o)))},[e,t])}const Rm={};function CS(e,t,n){!t&&!Rm[e]&&(Rm[e]=!0)}function kS(e){let{to:t,replace:n,state:r,relative:i}=e;Co()||re(!1);let{future:o,static:a}=I.useContext(or),{matches:l}=I.useContext(An),{pathname:c}=ko(),p=Kf(),m=nc(t,tc(l,o.v7_relativeSplatPath),c,i==="path"),g=JSON.stringify(m);return I.useEffect(()=>p(JSON.parse(g),{replace:n,state:r,relative:i}),[p,g,i,n,r]),null}function TS(e){return pS(e.context)}function IS(e){let{basename:t="/",children:n=null,location:r,navigationType:i=$e.Pop,navigator:o,static:a=!1,future:l}=e;Co()&&re(!1);let c=t.replace(/^\/*/,"/"),p=I.useMemo(()=>({basename:c,navigator:o,static:a,future:ja({v7_relativeSplatPath:!1},l)}),[c,l,o,a]);typeof r=="string"&&(r=ir(r));let{pathname:m="/",search:g="",hash:y="",state:C=null,key:E="default"}=r,S=I.useMemo(()=>{let P=tr(m,c);return P==null?null:{location:{pathname:P,search:g,hash:y,state:C,key:E},navigationType:i}},[c,m,g,y,C,E,i]);return S==null?null:I.createElement(or.Provider,{value:p},I.createElement(rc.Provider,{children:n,value:S}))}new Promise(()=>{});function PS(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:I.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:I.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:I.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wo(){return wo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wo.apply(this,arguments)}function Jv(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function NS(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function jS(e,t){return e.button===0&&(!t||t==="_self")&&!NS(e)}const RS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],AS=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],OS="6";try{window.__reactRouterVersion=OS}catch{}function LS(e,t){return Y_({basename:t==null?void 0:t.basename,future:wo({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:v_({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||DS(),routes:e,mapRouteProperties:PS,unstable_dataStrategy:t==null?void 0:t.unstable_dataStrategy,window:t==null?void 0:t.window}).initialize()}function DS(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=wo({},t,{errors:MS(t.errors)})),t}function MS(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new zf(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let o=window[i.__subType];if(typeof o=="function")try{let a=new o(i.message);a.stack="",n[r]=a}catch{}}if(n[r]==null){let o=new Error(i.message);o.stack="",n[r]=o}}else n[r]=i;return n}const Zv=I.createContext({isTransitioning:!1}),BS=I.createContext(new Map),FS="startTransition",Am=Pu[FS],US="flushSync",Om=g_[US];function zS(e){Am?Am(e):e()}function Ko(e){Om?Om(e):e()}let $S=class{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function VS(e){let{fallbackElement:t,router:n,future:r}=e,[i,o]=I.useState(n.state),[a,l]=I.useState(),[c,p]=I.useState({isTransitioning:!1}),[m,g]=I.useState(),[y,C]=I.useState(),[E,S]=I.useState(),P=I.useRef(new Map),{v7_startTransition:w}=r||{},v=I.useCallback(b=>{w?zS(b):b()},[w]),x=I.useCallback((b,A)=>{let{deletedFetchers:F,unstable_flushSync:z,unstable_viewTransitionOpts:Q}=A;F.forEach(he=>P.current.delete(he)),b.fetchers.forEach((he,_e)=>{he.data!==void 0&&P.current.set(_e,he.data)});let oe=n.window==null||typeof n.window.document.startViewTransition!="function";if(!Q||oe){z?Ko(()=>o(b)):v(()=>o(b));return}if(z){Ko(()=>{y&&(m&&m.resolve(),y.skipTransition()),p({isTransitioning:!0,flushSync:!0,currentLocation:Q.currentLocation,nextLocation:Q.nextLocation})});let he=n.window.document.startViewTransition(()=>{Ko(()=>o(b))});he.finished.finally(()=>{Ko(()=>{g(void 0),C(void 0),l(void 0),p({isTransitioning:!1})})}),Ko(()=>C(he));return}y?(m&&m.resolve(),y.skipTransition(),S({state:b,currentLocation:Q.currentLocation,nextLocation:Q.nextLocation})):(l(b),p({isTransitioning:!0,flushSync:!1,currentLocation:Q.currentLocation,nextLocation:Q.nextLocation}))},[n.window,y,m,P,v]);I.useLayoutEffect(()=>n.subscribe(x),[n,x]),I.useEffect(()=>{c.isTransitioning&&!c.flushSync&&g(new $S)},[c]),I.useEffect(()=>{if(m&&a&&n.window){let b=a,A=m.promise,F=n.window.document.startViewTransition(async()=>{v(()=>o(b)),await A});F.finished.finally(()=>{g(void 0),C(void 0),l(void 0),p({isTransitioning:!1})}),C(F)}},[v,a,m,n.window]),I.useEffect(()=>{m&&a&&i.location.key===a.location.key&&m.resolve()},[m,y,i.location,a]),I.useEffect(()=>{!c.isTransitioning&&E&&(l(E.state),p({isTransitioning:!0,flushSync:!1,currentLocation:E.currentLocation,nextLocation:E.nextLocation}),S(void 0))},[c.isTransitioning,E]),I.useEffect(()=>{},[]);let T=I.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:b=>n.navigate(b),push:(b,A,F)=>n.navigate(b,{state:A,preventScrollReset:F==null?void 0:F.preventScrollReset}),replace:(b,A,F)=>n.navigate(b,{replace:!0,state:A,preventScrollReset:F==null?void 0:F.preventScrollReset})}),[n]),L=n.basename||"/",M=I.useMemo(()=>({router:n,navigator:T,static:!1,basename:L}),[n,T,L]);return I.createElement(I.Fragment,null,I.createElement(qa.Provider,{value:M},I.createElement(Wf.Provider,{value:i},I.createElement(BS.Provider,{value:P.current},I.createElement(Zv.Provider,{value:c},I.createElement(IS,{basename:L,location:i.location,navigationType:i.historyAction,navigator:T,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?I.createElement(HS,{routes:n.routes,future:n.future,state:i}):t))))),null)}function HS(e){let{routes:t,future:n,state:r}=e;return mS(t,void 0,r,n)}const WS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",KS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Nn=I.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:c,to:p,preventScrollReset:m,unstable_viewTransition:g}=t,y=Jv(t,RS),{basename:C}=I.useContext(or),E,S=!1;if(typeof p=="string"&&KS.test(p)&&(E=p,WS))try{let x=new URL(window.location.href),T=p.startsWith("//")?new URL(x.protocol+p):new URL(p),L=tr(T.pathname,C);T.origin===x.origin&&L!=null?p=L+T.search+T.hash:S=!0}catch{}let P=dS(p,{relative:i}),w=qS(p,{replace:a,state:l,target:c,preventScrollReset:m,relative:i,unstable_viewTransition:g});function v(x){r&&r(x),x.defaultPrevented||w(x)}return I.createElement("a",wo({},y,{href:E||P,onClick:S||o?r:v,ref:n,target:c}))}),Qr=I.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:l,to:c,unstable_viewTransition:p,children:m}=t,g=Jv(t,AS),y=ic(c,{relative:g.relative}),C=ko(),E=I.useContext(Wf),{navigator:S,basename:P}=I.useContext(or),w=E!=null&&GS(y)&&p===!0,v=S.encodeLocation?S.encodeLocation(y).pathname:y.pathname,x=C.pathname,T=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;i||(x=x.toLowerCase(),T=T?T.toLowerCase():null,v=v.toLowerCase()),T&&P&&(T=tr(T,P)||T);const L=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let M=x===v||!a&&x.startsWith(v)&&x.charAt(L)==="/",b=T!=null&&(T===v||!a&&T.startsWith(v)&&T.charAt(v.length)==="/"),A={isActive:M,isPending:b,isTransitioning:w},F=M?r:void 0,z;typeof o=="function"?z=o(A):z=[o,M?"active":null,b?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let Q=typeof l=="function"?l(A):l;return I.createElement(Nn,wo({},g,{"aria-current":F,className:z,ref:n,style:Q,to:c,unstable_viewTransition:p}),typeof m=="function"?m(A):m)});var Id;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Id||(Id={}));var Lm;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Lm||(Lm={}));function YS(e){let t=I.useContext(qa);return t||re(!1),t}function qS(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a,unstable_viewTransition:l}=t===void 0?{}:t,c=Kf(),p=ko(),m=ic(e,{relative:a});return I.useCallback(g=>{if(jS(g,n)){g.preventDefault();let y=r!==void 0?r:mi(p)===mi(m);c(e,{replace:y,state:i,preventScrollReset:o,relative:a,unstable_viewTransition:l})}},[p,c,m,r,i,n,e,o,a,l])}function GS(e,t){t===void 0&&(t={});let n=I.useContext(Zv);n==null&&re(!1);let{basename:r}=YS(Id.useViewTransitionState),i=ic(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=tr(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=tr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ed(i.pathname,a)!=null||Ed(i.pathname,o)!=null}var Dm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},XS=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],a=e[n++],l=e[n++],c=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const o=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},ty={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],a=i+1<e.length,l=a?e[i+1]:0,c=i+2<e.length,p=c?e[i+2]:0,m=o>>2,g=(o&3)<<4|l>>4;let y=(l&15)<<2|p>>6,C=p&63;c||(C=64,a||(y=64)),r.push(n[m],n[g],n[y],n[C])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ey(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):XS(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],l=i<e.length?n[e.charAt(i)]:0;++i;const p=i<e.length?n[e.charAt(i)]:64;++i;const g=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||l==null||p==null||g==null)throw new QS;const y=o<<2|l>>4;if(r.push(y),p!==64){const C=l<<4&240|p>>2;if(r.push(C),g!==64){const E=p<<6&192|g;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class QS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const JS=function(e){const t=ey(e);return ty.encodeByteArray(t,!0)},ny=function(e){return JS(e).replace(/\./g,"")},ry=function(e){try{return ty.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE=()=>ZS().__FIREBASE_DEFAULTS__,tE=()=>{if(typeof process>"u"||typeof Dm>"u")return;const e=Dm.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},nE=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&ry(e[1]);return t&&JSON.parse(t)},qf=()=>{try{return eE()||tE()||nE()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},rE=e=>{var t,n;return(n=(t=qf())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},iy=()=>{var e;return(e=qf())===null||e===void 0?void 0:e.config},oy=e=>{var t;return(t=qf())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())}function aE(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function sE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lE(){const e=mt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function cE(){try{return typeof indexedDB=="object"}catch{return!1}}function uE(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE="FirebaseError";class Ur extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=dE,Object.setPrototypeOf(this,Ur.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ga.prototype.create)}}class Ga{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?fE(o,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new Ur(i,l,r)}}function fE(e,t){return e.replace(hE,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const hE=/\{\$([^}]+)}/g;function pE(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Tl(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],a=t[i];if(Mm(o)&&Mm(a)){if(!Tl(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Mm(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Jo(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function Zo(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function mE(e,t){const n=new gE(e,t);return n.subscribe.bind(n)}class gE{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");vE(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=wu),i.error===void 0&&(i.error=wu),i.complete===void 0&&(i.complete=wu);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vE(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function wu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(e){return e&&e._delegate?e._delegate:e}class xo{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new iE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(xE(t))try{this.getOrInitializeService({instanceIdentifier:ei})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=ei){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ei){return this.instances.has(t)}getOptions(t=ei){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wE(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ei){return this.component?this.component.multipleInstances?t:ei:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wE(e){return e===ei?void 0:e}function xE(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new yE(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Ee||(Ee={}));const _E={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},SE=Ee.INFO,EE={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},CE=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=EE[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ay{constructor(t){this.name=t,this._logLevel=SE,this._logHandler=CE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ee))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?_E[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...t),this._logHandler(this,Ee.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...t),this._logHandler(this,Ee.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...t),this._logHandler(this,Ee.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...t),this._logHandler(this,Ee.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...t),this._logHandler(this,Ee.ERROR,...t)}}const kE=(e,t)=>t.some(n=>e instanceof n);let Bm,Fm;function TE(){return Bm||(Bm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function IE(){return Fm||(Fm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sy=new WeakMap,Pd=new WeakMap,ly=new WeakMap,xu=new WeakMap,Gf=new WeakMap;function PE(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",a)},o=()=>{n(Ar(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&sy.set(n,e)}).catch(()=>{}),Gf.set(t,e),t}function NE(e){if(Pd.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",a),e.removeEventListener("abort",a)},o=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",a),e.addEventListener("abort",a)});Pd.set(e,t)}let Nd={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Pd.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ly.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ar(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function jE(e){Nd=e(Nd)}function RE(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(bu(this),t,...n);return ly.set(r,t.sort?t.sort():[t]),Ar(r)}:IE().includes(e)?function(...t){return e.apply(bu(this),t),Ar(sy.get(this))}:function(...t){return Ar(e.apply(bu(this),t))}}function AE(e){return typeof e=="function"?RE(e):(e instanceof IDBTransaction&&NE(e),kE(e,TE())?new Proxy(e,Nd):e)}function Ar(e){if(e instanceof IDBRequest)return PE(e);if(xu.has(e))return xu.get(e);const t=AE(e);return t!==e&&(xu.set(e,t),Gf.set(t,e)),t}const bu=e=>Gf.get(e);function OE(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),l=Ar(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Ar(a.result),c.oldVersion,c.newVersion,Ar(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{o&&c.addEventListener("close",()=>o()),i&&c.addEventListener("versionchange",p=>i(p.oldVersion,p.newVersion,p))}).catch(()=>{}),l}const LE=["get","getKey","getAll","getAllKeys","count"],DE=["put","add","delete","clear"],_u=new Map;function Um(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(_u.get(t))return _u.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=DE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||LE.includes(n)))return;const o=async function(a,...l){const c=this.transaction(a,i?"readwrite":"readonly");let p=c.store;return r&&(p=p.index(l.shift())),(await Promise.all([p[n](...l),i&&c.done]))[0]};return _u.set(t,o),o}jE(e=>({...e,get:(t,n,r)=>Um(t,n)||e.get(t,n,r),has:(t,n)=>!!Um(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(BE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function BE(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const jd="@firebase/app",zm="0.10.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=new ay("@firebase/app"),FE="@firebase/app-compat",UE="@firebase/analytics-compat",zE="@firebase/analytics",$E="@firebase/app-check-compat",VE="@firebase/app-check",HE="@firebase/auth",WE="@firebase/auth-compat",KE="@firebase/database",YE="@firebase/database-compat",qE="@firebase/functions",GE="@firebase/functions-compat",XE="@firebase/installations",QE="@firebase/installations-compat",JE="@firebase/messaging",ZE="@firebase/messaging-compat",eC="@firebase/performance",tC="@firebase/performance-compat",nC="@firebase/remote-config",rC="@firebase/remote-config-compat",iC="@firebase/storage",oC="@firebase/storage-compat",aC="@firebase/firestore",sC="@firebase/firestore-compat",lC="firebase",cC="10.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd="[DEFAULT]",uC={[jd]:"fire-core",[FE]:"fire-core-compat",[zE]:"fire-analytics",[UE]:"fire-analytics-compat",[VE]:"fire-app-check",[$E]:"fire-app-check-compat",[HE]:"fire-auth",[WE]:"fire-auth-compat",[KE]:"fire-rtdb",[YE]:"fire-rtdb-compat",[qE]:"fire-fn",[GE]:"fire-fn-compat",[XE]:"fire-iid",[QE]:"fire-iid-compat",[JE]:"fire-fcm",[ZE]:"fire-fcm-compat",[eC]:"fire-perf",[tC]:"fire-perf-compat",[nC]:"fire-rc",[rC]:"fire-rc-compat",[iC]:"fire-gcs",[oC]:"fire-gcs-compat",[aC]:"fire-fst",[sC]:"fire-fst-compat","fire-js":"fire-js",[lC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=new Map,dC=new Map,Ad=new Map;function $m(e,t){try{e.container.addComponent(t)}catch(n){gi.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ra(e){const t=e.name;if(Ad.has(t))return gi.debug(`There were multiple attempts to register component ${t}.`),!1;Ad.set(t,e);for(const n of Il.values())$m(n,e);for(const n of dC.values())$m(n,e);return!0}function cy(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function fn(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Or=new Ga("app","Firebase",fC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xo("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Or.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa=cC;function uy(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Rd,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Or.create("bad-app-name",{appName:String(i)});if(n||(n=iy()),!n)throw Or.create("no-options");const o=Il.get(i);if(o){if(Tl(n,o.options)&&Tl(r,o.config))return o;throw Or.create("duplicate-app",{appName:i})}const a=new bE(i);for(const c of Ad.values())a.addComponent(c);const l=new hC(n,r,a);return Il.set(i,l),l}function pC(e=Rd){const t=Il.get(e);if(!t&&e===Rd&&iy())return uy();if(!t)throw Or.create("no-app",{appName:e});return t}function io(e,t,n){var r;let i=(r=uC[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const l=[`Unable to register library "${i}" with version "${t}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),gi.warn(l.join(" "));return}Ra(new xo(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC="firebase-heartbeat-database",gC=1,Aa="firebase-heartbeat-store";let Su=null;function dy(){return Su||(Su=OE(mC,gC,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Aa)}catch(n){console.warn(n)}}}}).catch(e=>{throw Or.create("idb-open",{originalErrorMessage:e.message})})),Su}async function vC(e){try{const n=(await dy()).transaction(Aa),r=await n.objectStore(Aa).get(fy(e));return await n.done,r}catch(t){if(t instanceof Ur)gi.warn(t.message);else{const n=Or.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});gi.warn(n.message)}}}async function Vm(e,t){try{const r=(await dy()).transaction(Aa,"readwrite");await r.objectStore(Aa).put(t,fy(e)),await r.done}catch(n){if(n instanceof Ur)gi.warn(n.message);else{const r=Or.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});gi.warn(r.message)}}}function fy(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=1024,wC=30*24*60*60*1e3;class xC{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _C(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Hm();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=wC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Hm(),{heartbeatsToSend:r,unsentEntries:i}=bC(this._heartbeatsCache.heartbeats),o=ny(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Hm(){return new Date().toISOString().substring(0,10)}function bC(e,t=yC){const n=[];let r=e.slice();for(const i of e){const o=n.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Wm(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Wm(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _C{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cE()?uE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await vC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vm(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vm(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Wm(e){return ny(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(e){Ra(new xo("platform-logger",t=>new ME(t),"PRIVATE")),Ra(new xo("heartbeat",t=>new xC(t),"PRIVATE")),io(jd,zm,e),io(jd,zm,"esm2017"),io("fire-js","")}SC("");function Xf(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function hy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const EC=hy,py=new Ga("auth","Firebase",hy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl=new ay("@firebase/auth");function CC(e,...t){Pl.logLevel<=Ee.WARN&&Pl.warn(`Auth (${Qa}): ${e}`,...t)}function qs(e,...t){Pl.logLevel<=Ee.ERROR&&Pl.error(`Auth (${Qa}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(e,...t){throw Jf(e,...t)}function mn(e,...t){return Jf(e,...t)}function Qf(e,t,n){const r=Object.assign(Object.assign({},EC()),{[t]:n});return new Ga("auth","Firebase",r).create(t,{appName:e.name})}function Xn(e){return Qf(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kC(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&en(e,"argument-error"),Qf(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Jf(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return py.create(e,...t)}function te(e,t,...n){if(!e)throw Jf(t,...n)}function Wn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw qs(t),new Error(t)}function nr(e,t){e||Wn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function TC(){return Km()==="http:"||Km()==="https:"}function Km(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(TC()||aE()||"connection"in navigator)?navigator.onLine:!0}function PC(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t,n){this.shortDelay=t,this.longDelay=n,nr(n>t,"Short delay should be less than long delay!"),this.isMobile=oE()||sE()}get(){return IC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(e,t){nr(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=new Ja(3e4,6e4);function zr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function $r(e,t,n,r,i={}){return gy(e,i,async()=>{let o={},a={};r&&(t==="GET"?a=r:o={body:JSON.stringify(r)});const l=Xa(Object.assign({key:e.config.apiKey},a)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),my.fetch()(vy(e,e.config.apiHost,n,l),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},o))})}async function gy(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},NC),t);try{const i=new AC(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Ps(e,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[c,p]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ps(e,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Ps(e,"email-already-in-use",a);if(c==="USER_DISABLED")throw Ps(e,"user-disabled",a);const m=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw Qf(e,m,p);en(e,m)}}catch(i){if(i instanceof Ur)throw i;en(e,"network-request-failed",{message:String(i)})}}async function Za(e,t,n,r,i={}){const o=await $r(e,t,n,r,i);return"mfaPendingCredential"in o&&en(e,"multi-factor-auth-required",{_serverResponse:o}),o}function vy(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Zf(e.config,i):`${e.config.apiScheme}://${i}`}function RC(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class AC{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(mn(this.auth,"network-request-failed")),jC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ps(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=mn(e,t,r);return i.customData._tokenResponse=n,i}function Ym(e){return e!==void 0&&e.enterprise!==void 0}class OC{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return RC(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function LC(e,t){return $r(e,"GET","/v2/recaptchaConfig",zr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DC(e,t){return $r(e,"POST","/v1/accounts:delete",t)}async function yy(e,t){return $r(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function MC(e,t=!1){const n=ar(e),r=await n.getIdToken(t),i=eh(r);te(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:da(Eu(i.auth_time)),issuedAtTime:da(Eu(i.iat)),expirationTime:da(Eu(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Eu(e){return Number(e)*1e3}function eh(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return qs("JWT malformed, contained fewer than 3 sections"),null;try{const i=ry(n);return i?JSON.parse(i):(qs("Failed to decode base64 JWT payload"),null)}catch(i){return qs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function qm(e){const t=eh(e);return te(t,"internal-error"),te(typeof t.exp<"u","internal-error"),te(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oa(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Ur&&BC(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function BC({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=da(this.lastLoginAt),this.creationTime=da(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nl(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Oa(e,yy(n,{idToken:r}));te(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const a=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?wy(o.providerUserInfo):[],l=zC(e.providerData,a),c=e.isAnonymous,p=!(e.email&&o.passwordHash)&&!(l!=null&&l.length),m=c?p:!1,g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Ld(o.createdAt,o.lastLoginAt),isAnonymous:m};Object.assign(e,g)}async function UC(e){const t=ar(e);await Nl(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function zC(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function wy(e){return e.map(t=>{var{providerId:n}=t,r=Xf(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $C(e,t){const n=await gy(e,{},async()=>{const r=Xa({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,a=vy(e,i,"/v1/token",`key=${o}`),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",my.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function VC(e,t){return $r(e,"POST","/v2/accounts:revokeToken",zr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){te(t.idToken,"internal-error"),te(typeof t.idToken<"u","internal-error"),te(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):qm(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){te(t.length!==0,"internal-error");const n=qm(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await $C(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,a=new oo;return r&&(te(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(te(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),o&&(te(typeof o=="number","internal-error",{appName:t}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new oo,this.toJSON())}_performRefresh(){return Wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(e,t){te(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Kn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=Xf(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new FC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Ld(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Oa(this,this.stsTokenManager.getToken(this.auth,t));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return MC(this,t)}reload(){return UC(this)}_assign(t){this!==t&&(te(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Kn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Nl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fn(this.auth.app))return Promise.reject(Xn(this.auth));const t=await this.getIdToken();return await Oa(this,DC(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,a,l,c,p,m;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,C=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,E=(a=n.photoURL)!==null&&a!==void 0?a:void 0,S=(l=n.tenantId)!==null&&l!==void 0?l:void 0,P=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,w=(p=n.createdAt)!==null&&p!==void 0?p:void 0,v=(m=n.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:x,emailVerified:T,isAnonymous:L,providerData:M,stsTokenManager:b}=n;te(x&&b,t,"internal-error");const A=oo.fromJSON(this.name,b);te(typeof x=="string",t,"internal-error"),pr(g,t.name),pr(y,t.name),te(typeof T=="boolean",t,"internal-error"),te(typeof L=="boolean",t,"internal-error"),pr(C,t.name),pr(E,t.name),pr(S,t.name),pr(P,t.name),pr(w,t.name),pr(v,t.name);const F=new Kn({uid:x,auth:t,email:y,emailVerified:T,displayName:g,isAnonymous:L,photoURL:E,phoneNumber:C,tenantId:S,stsTokenManager:A,createdAt:w,lastLoginAt:v});return M&&Array.isArray(M)&&(F.providerData=M.map(z=>Object.assign({},z))),P&&(F._redirectEventId=P),F}static async _fromIdTokenResponse(t,n,r=!1){const i=new oo;i.updateFromServerResponse(n);const o=new Kn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Nl(o),o}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];te(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?wy(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),l=new oo;l.updateFromIdToken(r);const c=new Kn({uid:i.localId,auth:t,stsTokenManager:l,isAnonymous:a}),p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Ld(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(c,p),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm=new Map;function Yn(e){nr(e instanceof Function,"Expected a class definition");let t=Gm.get(e);return t?(nr(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Gm.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}xy.type="NONE";const Xm=xy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(e,t,n){return`firebase:${e}:${t}:${n}`}class ao{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Gs(this.userKey,i.apiKey,o),this.fullPersistenceKey=Gs("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Kn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new ao(Yn(Xm),t,r);const i=(await Promise.all(n.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let o=i[0]||Yn(Xm);const a=Gs(r,t.config.apiKey,t.name);let l=null;for(const p of n)try{const m=await p._get(a);if(m){const g=Kn._fromJSON(t,m);p!==o&&(l=g),o=p;break}}catch{}const c=i.filter(p=>p._shouldAllowMigration);return!o._shouldAllowMigration||!c.length?new ao(o,t,r):(o=c[0],l&&await o._set(a,l.toJSON()),await Promise.all(n.map(async p=>{if(p!==o)try{await p._remove(a)}catch{}})),new ao(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Sy(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(by(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Cy(t))return"Blackberry";if(ky(t))return"Webos";if(th(t))return"Safari";if((t.includes("chrome/")||_y(t))&&!t.includes("edge/"))return"Chrome";if(Ey(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function by(e=mt()){return/firefox\//i.test(e)}function th(e=mt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function _y(e=mt()){return/crios\//i.test(e)}function Sy(e=mt()){return/iemobile/i.test(e)}function Ey(e=mt()){return/android/i.test(e)}function Cy(e=mt()){return/blackberry/i.test(e)}function ky(e=mt()){return/webos/i.test(e)}function oc(e=mt()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function HC(e=mt()){var t;return oc(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function WC(){return lE()&&document.documentMode===10}function Ty(e=mt()){return oc(e)||Ey(e)||ky(e)||Cy(e)||/windows phone/i.test(e)||Sy(e)}function KC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(e,t=[]){let n;switch(e){case"Browser":n=Qm(mt());break;case"Worker":n=`${Qm(mt())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qa}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((a,l)=>{try{const c=t(o);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qC(e,t={}){return $r(e,"GET","/v2/passwordPolicy",zr(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC=6;class XC{constructor(t){var n,r,i,o;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:GC,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsUppercaseLetter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jm(this),this.idTokenSubscription=new Jm(this),this.beforeStateQueue=new YC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=py,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Yn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ao.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await yy(this,{idToken:t}),r=await Kn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(fn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!a||a===l)&&(c!=null&&c.user)&&(i=c.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Nl(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=PC()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(fn(this.app))return Promise.reject(Xn(this));const n=t?ar(t):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&te(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return fn(this.app)?Promise.reject(Xn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return fn(this.app)?Promise.reject(Xn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await qC(this),n=new XC(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ga("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await VC(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Yn(t)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await ao.create(this,[Yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,i);return()=>{a=!0,c()}}else{const c=t.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Iy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&CC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Vr(e){return ar(e)}class Jm{constructor(t){this.auth=t,this.observer=null,this.addObserver=mE(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ac={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function JC(e){ac=e}function Py(e){return ac.loadJS(e)}function ZC(){return ac.recaptchaEnterpriseScript}function ek(){return ac.gapiScript}function tk(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const nk="recaptcha-enterprise",rk="NO_RECAPTCHA";class ik{constructor(t){this.type=nk,this.auth=Vr(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,l)=>{LC(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const p=new OC(c);return o.tenantId==null?o._agentRecaptchaConfig=p:o._tenantRecaptchaConfigs[o.tenantId]=p,a(p.siteKey)}}).catch(c=>{l(c)})})}function i(o,a,l){const c=window.grecaptcha;Ym(c)?c.enterprise.ready(()=>{c.enterprise.execute(o,{action:t}).then(p=>{a(p)}).catch(()=>{a(rk)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,a)=>{r(this.auth).then(l=>{if(!n&&Ym(window.grecaptcha))i(l,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=ZC();c.length!==0&&(c+=l),Py(c).then(()=>{i(l,o,a)}).catch(p=>{a(p)})}}).catch(l=>{a(l)})})}}async function Zm(e,t,n,r=!1){const i=new ik(e);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},t);return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Dd(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Zm(e,t,n,n==="getOobCode");return r(e,o)}else return r(e,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Zm(e,t,n,n==="getOobCode");return r(e,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ok(e,t){const n=cy(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Tl(o,t??{}))return i;en(i,"already-initialized")}return n.initialize({options:t})}function ak(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Yn);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function sk(e,t,n){const r=Vr(e);te(r._canInitEmulator,r,"emulator-config-failed"),te(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=Ny(t),{host:a,port:l}=lk(t),c=l===null?"":`:${l}`;r.config.emulator={url:`${o}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ck()}function Ny(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function lk(e){const t=Ny(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:eg(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:eg(a)}}}function eg(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function ck(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Wn("not implemented")}_getIdTokenResponse(t){return Wn("not implemented")}_linkToIdToken(t,n){return Wn("not implemented")}_getReauthenticationResolver(t){return Wn("not implemented")}}async function uk(e,t){return $r(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dk(e,t){return Za(e,"POST","/v1/accounts:signInWithPassword",zr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fk(e,t){return Za(e,"POST","/v1/accounts:signInWithEmailLink",zr(e,t))}async function hk(e,t){return Za(e,"POST","/v1/accounts:signInWithEmailLink",zr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La extends nh{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new La(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new La(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dd(t,n,"signInWithPassword",dk);case"emailLink":return fk(t,{email:this._email,oobCode:this._password});default:en(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dd(t,r,"signUpPassword",uk);case"emailLink":return hk(t,{idToken:n,email:this._email,oobCode:this._password});default:en(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function so(e,t){return Za(e,"POST","/v1/accounts:signInWithIdp",zr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk="http://localhost";class vi extends nh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new vi(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):en("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=Xf(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new vi(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return so(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,so(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,so(t,n)}buildRequest(){const t={requestUri:pk,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Xa(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gk(e){const t=Jo(Zo(e)).link,n=t?Jo(Zo(t)).deep_link_id:null,r=Jo(Zo(e)).deep_link_id;return(r?Jo(Zo(r)).link:null)||r||n||t||e}class rh{constructor(t){var n,r,i,o,a,l;const c=Jo(Zo(t)),p=(n=c.apiKey)!==null&&n!==void 0?n:null,m=(r=c.oobCode)!==null&&r!==void 0?r:null,g=mk((i=c.mode)!==null&&i!==void 0?i:null);te(p&&m&&g,"argument-error"),this.apiKey=p,this.operation=g,this.code=m,this.continueUrl=(o=c.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(t){const n=gk(t);try{return new rh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(){this.providerId=Io.PROVIDER_ID}static credential(t,n){return La._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=rh.parseLink(n);return te(r,"argument-error"),La._fromEmailAndCode(t,r.code,r.tenantId)}}Io.PROVIDER_ID="password";Io.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Io.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends ih{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends es{constructor(){super("facebook.com")}static credential(t){return vi._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return xr.credentialFromTaggedObject(t)}static credentialFromError(t){return xr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return xr.credential(t.oauthAccessToken)}catch{return null}}}xr.FACEBOOK_SIGN_IN_METHOD="facebook.com";xr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends es{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return vi._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return zn.credentialFromTaggedObject(t)}static credentialFromError(t){return zn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.GOOGLE_SIGN_IN_METHOD="google.com";zn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends es{constructor(){super("github.com")}static credential(t){return vi._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return $n.credentialFromTaggedObject(t)}static credentialFromError(t){return $n.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return $n.credential(t.oauthAccessToken)}catch{return null}}}$n.GITHUB_SIGN_IN_METHOD="github.com";$n.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends es{constructor(){super("twitter.com")}static credential(t,n){return vi._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return br.credentialFromTaggedObject(t)}static credentialFromError(t){return br.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return br.credential(n,r)}catch{return null}}}br.TWITTER_SIGN_IN_METHOD="twitter.com";br.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vk(e,t){return Za(e,"POST","/v1/accounts:signUp",zr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await Kn._fromIdTokenResponse(t,r,i),a=tg(r);return new yi({user:o,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=tg(r);return new yi({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function tg(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl extends Ur{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,jl.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new jl(t,n,r,i)}}function jy(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?jl._fromErrorAndOperation(e,o,t,r):o})}async function yk(e,t,n=!1){const r=await Oa(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return yi._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wk(e,t,n=!1){const{auth:r}=e;if(fn(r.app))return Promise.reject(Xn(r));const i="reauthenticate";try{const o=await Oa(e,jy(r,i,t,e),n);te(o.idToken,r,"internal-error");const a=eh(o.idToken);te(a,r,"internal-error");const{sub:l}=a;return te(e.uid===l,r,"user-mismatch"),yi._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&en(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ry(e,t,n=!1){if(fn(e.app))return Promise.reject(Xn(e));const r="signIn",i=await jy(e,r,t),o=await yi._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function xk(e,t){return Ry(Vr(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ay(e){const t=Vr(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function bk(e,t,n){if(fn(e.app))return Promise.reject(Xn(e));const r=Vr(e),a=await Dd(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",vk).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Ay(e),c}),l=await yi._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function _k(e,t,n){return fn(e.app)?Promise.reject(Xn(e)):xk(ar(e),Io.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ay(e),r})}function Sk(e,t,n,r){return ar(e).onIdTokenChanged(t,n,r)}function Ek(e,t,n){return ar(e).beforeAuthStateChanged(t,n)}function Ck(e,t,n,r){return ar(e).onAuthStateChanged(t,n,r)}function kk(e){return ar(e).signOut()}const Rl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Rl,"1"),this.storage.removeItem(Rl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(){const e=mt();return th(e)||oc(e)}const Ik=1e3,Pk=10;class Ly extends Oy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Tk()&&KC(),this.fallbackToPolling=Ty(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(t.newValue!==a)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);WC()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Pk):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Ik)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Ly.type="LOCAL";const Nk=Ly;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy extends Oy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Dy.type="SESSION";const My=Dy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jk(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new sc(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async p=>p(n.origin,o)),c=await jk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((l,c)=>{const p=oh("",20);i.port1.start();const m=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(g){const y=g;if(y.data.eventId===p)switch(y.data.status){case"ack":clearTimeout(m),o=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(y.data.response);break;default:clearTimeout(m),clearTimeout(o),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:p,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(){return window}function Ak(e){jn().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(){return typeof jn().WorkerGlobalScope<"u"&&typeof jn().importScripts=="function"}async function Ok(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Lk(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Dk(){return By()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy="firebaseLocalStorageDb",Mk=1,Al="firebaseLocalStorage",Uy="fbase_key";class ts{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function lc(e,t){return e.transaction([Al],t?"readwrite":"readonly").objectStore(Al)}function Bk(){const e=indexedDB.deleteDatabase(Fy);return new ts(e).toPromise()}function Md(){const e=indexedDB.open(Fy,Mk);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Al,{keyPath:Uy})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Al)?t(r):(r.close(),await Bk(),t(await Md()))})})}async function ng(e,t,n){const r=lc(e,!0).put({[Uy]:t,value:n});return new ts(r).toPromise()}async function Fk(e,t){const n=lc(e,!1).get(t),r=await new ts(n).toPromise();return r===void 0?null:r.value}function rg(e,t){const n=lc(e,!0).delete(t);return new ts(n).toPromise()}const Uk=800,zk=3;class zy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Md(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>zk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return By()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sc._getInstance(Dk()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Ok(),!this.activeServiceWorker)return;this.sender=new Rk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Lk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Md();return await ng(t,Rl,"1"),await rg(t,Rl),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ng(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Fk(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>rg(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=lc(i,!1).getAll();return new ts(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Uk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zy.type="LOCAL";const $k=zy;new Ja(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(e,t){return t?Yn(t):(te(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah extends nh{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return so(t,this._buildIdpRequest())}_linkToIdToken(t,n){return so(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return so(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Vk(e){return Ry(e.auth,new ah(e),e.bypassAuthState)}function Hk(e){const{auth:t,user:n}=e;return te(n,t,"internal-error"),wk(n,new ah(e),e.bypassAuthState)}async function Wk(e){const{auth:t,user:n}=e;return te(n,t,"internal-error"),yk(n,new ah(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:a,type:l}=t;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(p){this.reject(p)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Vk;case"linkViaPopup":case"linkViaRedirect":return Wk;case"reauthViaPopup":case"reauthViaRedirect":return Hk;default:en(this.auth,"internal-error")}}resolve(t){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk=new Ja(2e3,1e4);async function ig(e,t,n){if(fn(e.app))return Promise.reject(mn(e,"operation-not-supported-in-this-environment"));const r=Vr(e);kC(e,t,ih);const i=$y(r,n);return new ai(r,"signInViaPopup",t,i).executeNotNull()}class ai extends Vy{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,ai.currentPopupAction&&ai.currentPopupAction.cancel(),ai.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return te(t,this.auth,"internal-error"),t}async onExecution(){nr(this.filter.length===1,"Popup operations only handle one event");const t=oh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ai.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Kk.get())};t()}}ai.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk="pendingRedirect",Xs=new Map;class qk extends Vy{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Xs.get(this.auth._key());if(!t){try{const r=await Gk(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Xs.set(this.auth._key(),t)}return this.bypassAuthState||Xs.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Gk(e,t){const n=Jk(t),r=Qk(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Xk(e,t){Xs.set(e._key(),t)}function Qk(e){return Yn(e._redirectPersistence)}function Jk(e){return Gs(Yk,e.config.apiKey,e.name)}async function Zk(e,t,n=!1){if(fn(e.app))return Promise.reject(Xn(e));const r=Vr(e),i=$y(r,t),a=await new qk(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT=10*60*1e3;class tT{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!nT(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Hy(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(mn(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=eT&&this.cachedEventUids.clear(),this.cachedEventUids.has(og(t))}saveEventToCache(t){this.cachedEventUids.add(og(t)),this.lastProcessedEventTime=Date.now()}}function og(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Hy({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function nT(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hy(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rT(e,t={}){return $r(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oT=/^https?/;async function aT(e){if(e.config.emulator)return;const{authorizedDomains:t}=await rT(e);for(const n of t)try{if(sT(n))return}catch{}en(e,"unauthorized-domain")}function sT(e){const t=Od(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!oT.test(n))return!1;if(iT.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT=new Ja(3e4,6e4);function ag(){const e=jn().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function cT(e){return new Promise((t,n)=>{var r,i,o;function a(){ag(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ag(),n(mn(e,"network-request-failed"))},timeout:lT.get()})}if(!((i=(r=jn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=jn().gapi)===null||o===void 0)&&o.load)a();else{const l=tk("iframefcb");return jn()[l]=()=>{gapi.load?a():n(mn(e,"network-request-failed"))},Py(`${ek()}?onload=${l}`).catch(c=>n(c))}}).catch(t=>{throw Qs=null,t})}let Qs=null;function uT(e){return Qs=Qs||cT(e),Qs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT=new Ja(5e3,15e3),fT="__/auth/iframe",hT="emulator/auth/iframe",pT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gT(e){const t=e.config;te(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Zf(t,hT):`https://${e.config.authDomain}/${fT}`,r={apiKey:t.apiKey,appName:e.name,v:Qa},i=mT.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Xa(r).slice(1)}`}async function vT(e){const t=await uT(e),n=jn().gapi;return te(n,e,"internal-error"),t.open({where:document.body,url:gT(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pT,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=mn(e,"network-request-failed"),l=jn().setTimeout(()=>{o(a)},dT.get());function c(){jn().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wT=500,xT=600,bT="_blank",_T="http://localhost";class sg{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ST(e,t,n,r=wT,i=xT){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},yT),{width:r.toString(),height:i.toString(),top:o,left:a}),p=mt().toLowerCase();n&&(l=_y(p)?bT:n),by(p)&&(t=t||_T,c.scrollbars="yes");const m=Object.entries(c).reduce((y,[C,E])=>`${y}${C}=${E},`,"");if(HC(p)&&l!=="_self")return ET(t||"",l),new sg(null);const g=window.open(t||"",l,m);te(g,e,"popup-blocked");try{g.focus()}catch{}return new sg(g)}function ET(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT="__/auth/handler",kT="emulator/auth/handler",TT=encodeURIComponent("fac");async function lg(e,t,n,r,i,o){te(e.config.authDomain,e,"auth-domain-config-required"),te(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Qa,eventId:i};if(t instanceof ih){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",pE(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[m,g]of Object.entries(o||{}))a[m]=g}if(t instanceof es){const m=t.getScopes().filter(g=>g!=="");m.length>0&&(a.scopes=m.join(","))}e.tenantId&&(a.tid=e.tenantId);const l=a;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const c=await e._getAppCheckToken(),p=c?`#${TT}=${encodeURIComponent(c)}`:"";return`${IT(e)}?${Xa(l).slice(1)}${p}`}function IT({config:e}){return e.emulator?Zf(e,kT):`https://${e.authDomain}/${CT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu="webStorageSupport";class PT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=My,this._completeRedirectFn=Zk,this._overrideRedirectResult=Xk}async _openPopup(t,n,r,i){var o;nr((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await lg(t,n,r,Od(),i);return ST(t,a,oh())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await lg(t,n,r,Od(),i);return Ak(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(nr(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await vT(t),r=new tT(t);return n.register("authEvent",i=>(te(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Cu,{type:Cu},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Cu];a!==void 0&&n(!!a),en(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=aT(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ty()||th()||oc()}}const NT=PT;var cg="@firebase/auth",ug="1.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function AT(e){Ra(new xo("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;te(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Iy(e)},p=new QC(r,i,o,c);return ak(p,n),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Ra(new xo("auth-internal",t=>{const n=Vr(t.getProvider("auth").getImmediate());return(r=>new jT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),io(cg,ug,RT(e)),io(cg,ug,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=5*60,LT=oy("authIdTokenMaxAge")||OT;let dg=null;const DT=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>LT)return;const i=n==null?void 0:n.token;dg!==i&&(dg=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function MT(e=pC()){const t=cy(e,"auth");if(t.isInitialized())return t.getImmediate();const n=ok(e,{popupRedirectResolver:NT,persistence:[$k,Nk,My]}),r=oy("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=DT(o.toString());Ek(n,a,()=>a(n.currentUser)),Sk(n,l=>a(l))}}const i=rE("auth");return i&&sk(n,`http://${i}`),n}function BT(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}JC({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=mn("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",BT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});AT("Browser");var Wy={exports:{}},FT="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",UT=FT,zT=UT;function Ky(){}function Yy(){}Yy.resetWarningCache=Ky;var $T=function(){function e(r,i,o,a,l,c){if(c!==zT){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Yy,resetWarningCache:Ky};return n.PropTypes=n,n};Wy.exports=$T();var VT=Wy.exports;const HT=Bl(VT);var WT="firebase",KT="10.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */io(WT,KT,"app");const YT={apiKey:"AIzaSyBzReEw6iDrO-CPoyQCcwq8Q2qQilKiS94",authDomain:"assignment-10-3798d.firebaseapp.com",projectId:"assignment-10-3798d",storageBucket:"assignment-10-3798d.appspot.com",messagingSenderId:"33345532421",appId:"1:33345532421:web:daddcca47fc06a7c20a26c"},qT=uy(YT),Qi=MT(qT),Po=I.createContext(null),qy=({children:e})=>{const[t,n]=I.useState(null),a={user:t,createUser:(l,c)=>bk(Qi,l,c),signInuser:(l,c)=>_k(Qi,l,c),logOut:()=>kk(Qi)};return I.useEffect(()=>{const l=Ck(Qi,c=>{n(c),console.log("Current value of the current user : ",c)});return()=>{l()}},[]),d.jsx(Po.Provider,{value:a,children:e})};qy.propTypes={children:HT.node};var Js={},Gy;Object.defineProperty(Js,"__esModule",{value:!0});var ea=d,Sn=I,ln=function(){return ln=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},ln.apply(this,arguments)};function GT(e,t){var n,r;switch(t.type){case"TYPE":return ln(ln({},e),{speed:t.speed,text:(n=t.payload)===null||n===void 0?void 0:n.substring(0,e.text.length+1)});case"DELAY":return ln(ln({},e),{speed:t.payload});case"DELETE":return ln(ln({},e),{speed:t.speed,text:(r=t.payload)===null||r===void 0?void 0:r.substring(0,e.text.length-1)});case"COUNT":return ln(ln({},e),{count:e.count+1});default:return e}}var fg=function(e){var t=e.words,n=t===void 0?["Hello World!","This is","a simple Typewriter"]:t,r=e.loop,i=r===void 0?1:r,o=e.typeSpeed,a=o===void 0?80:o,l=e.deleteSpeed,c=l===void 0?50:l,p=e.delaySpeed,m=p===void 0?1500:p,g=e.onLoopDone,y=e.onType,C=e.onDelete,E=e.onDelay,S=Sn.useReducer(GT,{speed:a,text:"",count:0}),P=S[0],w=P.speed,v=P.text,x=P.count,T=S[1],L=Sn.useRef(0),M=Sn.useRef(!1),b=Sn.useRef(!1),A=Sn.useRef(!1),F=Sn.useRef(!1),z=Sn.useCallback(function(){var Q=x%n.length,oe=n[Q];b.current?(T({type:"DELETE",payload:oe,speed:c}),v===""&&(b.current=!1,T({type:"COUNT"}))):(T({type:"TYPE",payload:oe,speed:a}),A.current=!0,v===oe&&(T({type:"DELAY",payload:m}),A.current=!1,F.current=!0,setTimeout(function(){F.current=!1,b.current=!0},m),i>0&&(L.current+=1,L.current/n.length===i&&(F.current=!1,M.current=!0)))),A.current&&y&&y(L.current),b.current&&C&&C(),F.current&&E&&E()},[x,m,c,i,a,n,v,y,C,E]);return Sn.useEffect(function(){var Q=setTimeout(z,w);return M.current&&clearTimeout(Q),function(){return clearTimeout(Q)}},[z,w]),Sn.useEffect(function(){g&&M.current&&g()},[g]),[v,{isType:A.current,isDelay:F.current,isDelete:b.current,isDone:M.current}]},XT="styles-module_blinkingCursor__yugAC",QT="styles-module_blinking__9VXRT";(function(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}})(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");var hg=Sn.memo(function(e){var t=e.cursorBlinking,n=t===void 0||t,r=e.cursorStyle,i=r===void 0?"|":r,o=e.cursorColor,a=o===void 0?"inherit":o;return ea.jsx("span",ln({style:{color:a},className:"".concat(XT," ").concat(n?QT:"")},{children:i}))});Js.Cursor=hg,Gy=Js.Typewriter=function(e){var t=e.words,n=t===void 0?["Hello World!","This is","a simple Typewriter"]:t,r=e.loop,i=r===void 0?1:r,o=e.typeSpeed,a=o===void 0?80:o,l=e.deleteSpeed,c=l===void 0?50:l,p=e.delaySpeed,m=p===void 0?1500:p,g=e.cursor,y=g!==void 0&&g,C=e.cursorStyle,E=C===void 0?"|":C,S=e.cursorColor,P=S===void 0?"inherit":S,w=e.cursorBlinking,v=w===void 0||w,x=e.onLoopDone,T=e.onType,L=e.onDelay,M=e.onDelete,b=fg({words:n,loop:i,typeSpeed:a,deleteSpeed:c,delaySpeed:m,onLoopDone:x,onType:T,onDelay:L,onDelete:M})[0];return ea.jsxs(ea.Fragment,{children:[ea.jsx("span",{children:b}),y&&ea.jsx(hg,{cursorStyle:E,cursorColor:P,cursorBlinking:v})]})},Js.useTypewriter=fg;const JT=()=>{const{user:e,logOut:t}=I.useContext(Po),n=()=>{t().then(()=>console.log("log out successfully")).catch(i=>console.log(i.message))},r=d.jsxs(d.Fragment,{children:[d.jsx("li",{children:d.jsx(Qr,{to:"/",children:"Home"})}),d.jsx("li",{children:d.jsx(Qr,{to:"/allTouristSpot",children:"All Tourists Spot"})}),d.jsx("li",{children:d.jsx(Qr,{to:"/addTouristSpot",children:"Add Tourists Spot"})}),d.jsx("li",{children:d.jsx(Qr,{to:"/MyList",children:"My List"})}),d.jsx("li",{children:d.jsx(Qr,{to:"/Login",children:"Login"})}),d.jsx("li",{children:d.jsx(Qr,{to:"/Register",children:"Register"})}),d.jsx("li",{children:d.jsx(Qr,{to:"/Not_Founded_Page",children:"Not_Founded_Page"})})]});return d.jsx("div",{className:"mx-10",children:d.jsxs("div",{className:"navbar",children:[d.jsxs("div",{className:"navbar-start",children:[d.jsxs("div",{className:"dropdown",children:[d.jsx("div",{tabIndex:0,role:"button",className:"btn btn-ghost lg:hidden",children:d.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h8m-8 6h16"})})}),d.jsx("ul",{tabIndex:0,className:"menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52",children:r})]}),d.jsxs("a",{className:"btn btn-ghost text-xl",children:[d.jsx(Gy,{words:["VoyageHub"],loop:50,cursor:!0,cursorStyle:"_",typeSpeed:70,deleteSpeed:50,delaySpeed:1e3})," "]})]}),d.jsx("div",{className:"navbar-center hidden lg:flex",children:d.jsx("ul",{className:"menu menu-horizontal px-1",children:r})}),d.jsx("div",{className:"navbar-end",children:e?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"tooltip  hover:tooltip-open","data-tip":e.displayName,children:d.jsx("span",{children:d.jsx("img",{src:e.photoURL,className:"ml-12 w-1/2 md:w-2/3"})})}),d.jsx("a",{onClick:n,className:"btn btn-sm",children:"Log out"})]}):d.jsx(d.Fragment,{children:d.jsx(Nn,{to:"/Login",children:d.jsx("button",{className:"btn btn-secondary",children:"Log in"})})})})]})})},ZT=()=>d.jsxs("div",{className:"mt-20 mx-10",children:[d.jsx("hr",{}),d.jsxs("footer",{className:"footer grid-rows-2 md:justify-between mb-0 mt-10 justify-center p-20 bg-gray-800 text-neutral-content",children:[d.jsxs("nav",{children:[d.jsx("h6",{className:"footer-title",children:"Services"}),d.jsx("a",{className:"link link-hover",children:"Special Guide"}),d.jsx("a",{className:"link link-hover",children:"VIP Security"}),d.jsx("a",{className:"link link-hover",children:"Choices spot"})]}),d.jsxs("nav",{children:[d.jsx("h6",{className:"footer-title",children:"Company"}),d.jsx("a",{className:"link link-hover",children:"About us"}),d.jsx("a",{className:"link link-hover",children:"Contact"}),d.jsx("a",{className:"link link-hover",children:"Press offer"})]}),d.jsxs("nav",{children:[d.jsx("h6",{className:"footer-title",children:"Legal"}),d.jsx("a",{className:"link link-hover",children:"Terms of use"}),d.jsx("a",{className:"link link-hover",children:"Privacy policy"}),d.jsx("a",{className:"link link-hover",children:"Cookie policy"})]}),d.jsxs("nav",{children:[d.jsx("h6",{className:"footer-title",children:"Social"}),d.jsx("a",{className:"link link-hover",children:"Twitter"}),d.jsx("a",{className:"link link-hover",children:"Instagram"}),d.jsx("a",{className:"link link-hover",children:"Facebook"}),d.jsx("a",{className:"link link-hover",children:"Github"})]}),d.jsxs("nav",{children:[d.jsx("h6",{className:"footer-title",children:"Explore"}),d.jsx("a",{className:"link link-hover",children:"Features"}),d.jsx("a",{className:"link link-hover",children:"Enterprise"}),d.jsx("a",{className:"link link-hover",children:"Security"}),d.jsx("a",{className:"link link-hover",children:"Pricing"})]}),d.jsxs("nav",{children:[d.jsx("h6",{className:"footer-title",children:"Apps"}),d.jsx("a",{className:"link link-hover",children:"Mac"}),d.jsx("a",{className:"link link-hover",children:"Windows"}),d.jsx("a",{className:"link link-hover",children:"iPhone"}),d.jsx("a",{className:"link link-hover",children:"Android"})]})]})]});var Xy={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},pg=ue.createContext&&ue.createContext(Xy),eI=["attr","size","title"];function tI(e,t){if(e==null)return{};var n=nI(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function nI(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Ol(){return Ol=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ol.apply(this,arguments)}function mg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ll(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?mg(Object(n),!0).forEach(function(r){rI(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function rI(e,t,n){return t=iI(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function iI(e){var t=oI(e,"string");return typeof t=="symbol"?t:String(t)}function oI(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Qy(e){return e&&e.map((t,n)=>ue.createElement(t.tag,Ll({key:n},t.attr),Qy(t.child)))}function No(e){return t=>ue.createElement(aI,Ol({attr:Ll({},e.attr)},t),Qy(e.child))}function aI(e){var t=n=>{var{attr:r,size:i,title:o}=e,a=tI(e,eI),l=i||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),ue.createElement("svg",Ol({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:c,style:Ll(Ll({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&ue.createElement("title",null,o),e.children)};return pg!==void 0?ue.createElement(pg.Consumer,null,n=>t(n)):t(Xy)}function sI(e){return No({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M14 2c1.82 0 3.53.5 5 1.35-2.99 1.73-5 4.95-5 8.65s2.01 6.92 5 8.65A9.973 9.973 0 0 1 14 22C8.48 22 4 17.52 4 12S8.48 2 14 2z"},child:[]}]})(e)}function lI(e){return No({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M9.37 5.51A7.35 7.35 0 0 0 9.1 7.5c0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0 1 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"},child:[]}]})(e)}const cI=()=>{const[e,t]=I.useState(!1),n=()=>{t(!e)};return d.jsx("div",{className:`bg-${e?"gray-800":"white"} ${e?"text-blue-700":"black"} transition-colors duration-500 w-screen`,children:d.jsxs("div",{className:"",children:[d.jsx("button",{onClick:n,className:"bg-blue-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded",children:e?d.jsx(lI,{}):d.jsx(sI,{})}),d.jsx(JT,{}),d.jsx(TS,{}),d.jsx(ZT,{})]})})},uI=()=>d.jsxs("div",{className:"grid md:grid-cols-2 gap-10 mb-10",children:[d.jsxs("div",{className:"card card-side shadow-xl flex md:flex-row flex-col justify-center bg-slate-400",children:[d.jsx("figure",{children:d.jsx("img",{src:"https://i.ibb.co/hfNZCX7/350b8188dc1170be76479bebaa1db9c3.jpg",alt:"Movie",className:"h-72 rounded-3xl"})}),d.jsx("div",{className:"card-body",children:d.jsxs("h2",{className:"w-72 font-bold",children:[`"Choosing [VoyageHub] for our travel needs was one of the best decisions we've ever made! From start to finish, they exceeded our expectations and made our vacation an absolute dream come true." --- `,d.jsx("span",{className:"font-bold text-xl",children:"Brad Pitt"})]})})]}),d.jsxs("div",{className:"card card-side  shadow-xl flex md:flex-row flex-col justify-center bg-slate-400",children:[d.jsx("figure",{children:d.jsx("img",{src:"https://variety.com/wp-content/uploads/2018/06/depp.jpg?w=681&h=383&crop=1&resize=681%2C383",alt:"Movie",className:"h-72 rounded-3xl"})}),d.jsx("div",{className:"card-body",children:d.jsxs("h2",{className:"w-72 font-bold ",children:[`"We had the pleasure of booking our recent vacation with [Company Name], and it was an experience we'll never forget. From the moment we contacted them to inquire about their services, we were met with professionalism, enthusiasm, and a genuine desire to make our trip unforgettable." --- `,d.jsx("span",{className:"font-bold text-xl",children:"Jhony Depp"})]})})]})]}),Jy=({tspot:e})=>{const{_id:t,image:n,tourists_spot_name:r,country_name:i,location:o,short_description:a,average_cost:l,seasonality:c,total_visitors_per_year:p,travel_time:m}=e;return d.jsx("div",{children:d.jsx("div",{className:"my-10",children:d.jsx("div",{className:"py-4 px-4 rounded-xl  w-full md:w-96 bg-base-100 shadow-xl text-white text-center font-bold border-2 border-black",children:d.jsxs("div",{className:"bg-gray-800 shadow-xl rounded-2xl px-2 py-3 border-2 border-black",children:[d.jsx("figure",{className:"px-10 md:pt-5 flex justify-center",children:d.jsx("img",{src:n,alt:"img",className:"rounded-xl h-36 w-48"})}),d.jsx("div",{className:"card-body items-center text-center",children:d.jsx("h2",{className:"card-title underline",children:r})}),d.jsxs("div",{className:"flex flex-col justify-center gap-2 py-2",children:[d.jsxs("h3",{className:"",children:["Cost : ",l]}),d.jsxs("h3",{className:"",children:["Total_visitors : ",p]}),d.jsxs("h3",{className:"",children:["Travel_time: ",m]}),d.jsxs("h3",{className:"",children:["Seasonality : ",c]})]}),d.jsx("div",{className:"card-actions flex justify-center gap-2 py-5",children:d.jsx(Nn,{to:`/ViewDetails/${t}`,children:d.jsx("button",{className:"btn btn-primary",children:"View Details"})})})]})})})})},dI=()=>d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5",children:[d.jsxs("div",{className:"card w-96 bg-base-100 shadow-xl bg-purple-400",children:[d.jsx("figure",{className:"px-10 pt-10",children:d.jsx("img",{src:"https://i.ibb.co/ypDmBjd/file-small.jpg",alt:"Buses",className:"rounded-xl w-96 h-44"})}),d.jsxs("div",{className:"card-body items-center text-center",children:[d.jsx("h2",{className:"card-title text-3xl font-bold",children:"Buses"}),d.jsx("p",{className:"font-bold",children:"Explore our convenient bus services for hassle-free travel to various destinations. Enjoy comfortable seating, scenic routes, and affordable fares."}),d.jsx("div",{className:"card-actions",children:d.jsx(Nn,{to:"/AllTouristSpot",children:d.jsx("button",{className:"btn btn-primary",children:"See our spots"})})})]})]}),d.jsxs("div",{className:"card w-96 bg-base-100 shadow-xl bg-purple-400",children:[d.jsx("figure",{className:"px-10 pt-10",children:d.jsx("img",{src:"https://i.ibb.co/3Mb8gTv/Hdhut-blogspot-com-14.jpg",alt:"Boats",className:"rounded-xl w-96 h-44"})}),d.jsxs("div",{className:"card-body items-center text-center",children:[d.jsx("h2",{className:"card-title text-3xl font-bold",children:"Boats"}),d.jsx("p",{className:"font-bold",children:"Embark on an unforgettable journey with our boat transportation services. Cruise along scenic waterways, explore remote islands, and enjoy unparalleled views of the sea."}),d.jsx("div",{className:"card-actions",children:d.jsx(Nn,{to:"/AllTouristSpot",children:d.jsx("button",{className:"btn btn-primary",children:"See our spots"})})})]})]}),d.jsxs("div",{className:"card w-96 bg-base-100 shadow-xl bg-purple-400",children:[d.jsx("figure",{className:"px-10 pt-10",children:d.jsx("img",{src:"https://i.ibb.co/dp7NYrk/Plane-Pictures.jpg",alt:"Boats",className:"rounded-xl w-96 h-44"})}),d.jsxs("div",{className:"card-body items-center text-center",children:[d.jsx("h2",{className:"card-title text-3xl font-bold",children:"Air planes"}),d.jsx("p",{className:"font-bold",children:"Experience seamless air travel with our comprehensive airplane services. Fly to domestic and international destinations with ease, enjoying comfort, convenience, and exceptional service."}),d.jsx("div",{className:"card-actions",children:d.jsx(Nn,{to:"/AllTouristSpot",children:d.jsx("button",{className:"btn btn-primary",children:"See our spots"})})})]})]})]}),fI=()=>d.jsxs("div",{className:"mx-10",children:[d.jsxs("div",{className:"carousel w-full relative",children:[d.jsxs("div",{id:"item1",className:"carousel-item w-full h-screen relative text-center",children:[d.jsx("img",{src:"https://i.ibb.co/3NCD2r3/Coxs-Bazar-Exclusive-picture-coxsbazarcity-com-21.jpg",className:"absolute inset-0 w-full h-full object-cover",alt:"Cox's Bazar"}),d.jsxs("div",{className:"absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50",children:[d.jsx("p",{className:"text-white text-2xl font-bold",children:"Cox's Bazar"}),d.jsx("p",{className:"text-white md:text-xl md:w-2/6 px-5",children:"Cox's Bazar is not just a destination; it's an experience that leaves an indelible mark on the hearts of all who visit"})]})]}),d.jsxs("div",{id:"item2",className:"carousel-item w-full h-screen relative",children:[d.jsx("img",{src:"https://i.ibb.co/Cv918PV/Rangerwood-Machan-Kerala-BB41020171.webp",className:"absolute inset-0 w-full h-full object-cover",alt:"Rangamati"}),d.jsxs("div",{className:"absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50",children:[d.jsx("p",{className:"text-white text-xl font-bold",children:"Rangamati"}),d.jsx("p",{className:"text-white md:text-xl md:w-2/6 px-5",children:"Exploring Rangamati is like embarking on a journey of discovery, where every turn reveals a new wonder to behold."})]})]}),d.jsxs("div",{id:"item3",className:"carousel-item w-full h-screen relative",children:[d.jsx("img",{src:"https://i.ibb.co/2d8YKtT/Getty-Images-673149202-594874ac5f9b58d58a4c274a.jpg",className:"absolute inset-0 w-full h-full object-cover",alt:"Image 3"}),d.jsxs("div",{className:"absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50",children:[d.jsx("p",{className:"text-white text-xl font-bold",children:"Cameron Highlands"}),d.jsx("p",{className:"text-white md:text-xl md:w-2/6 px-5",children:"Nestled amidst the lush hills of Malaysia, is a verdant paradise that enchants visitors with its serene beauty and refreshing climate"})]})]}),d.jsxs("div",{id:"item4",className:"carousel-item w-full h-screen relative",children:[d.jsx("img",{src:"https://i.ibb.co/Rj1k7r9/HERO-Bangkok-Tips-Hero-shutterstock-367503629.jpg",className:"absolute inset-0 w-full h-full object-cover",alt:"Image 4"}),d.jsxs("div",{className:"absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50",children:[d.jsx("p",{className:"text-white text-xl font-bold",children:"Bangkok"}),d.jsx("p",{className:"text-white md:text-xl md:w-2/6 px-5",children:"The vibrant heart of Thailand, is a city that dazzles with its unique blend of tradition and modernity."})]})]})]}),d.jsxs("div",{className:"flex justify-center w-full py-2 gap-2",children:[d.jsx("a",{href:"#item1",className:"btn btn-xs",children:"1"}),d.jsx("a",{href:"#item2",className:"btn btn-xs",children:"2"}),d.jsx("a",{href:"#item3",className:"btn btn-xs",children:"3"}),d.jsx("a",{href:"#item4",className:"btn btn-xs",children:"4"})]})]}),Zy=()=>d.jsx("div",{children:d.jsx("div",{className:"grid md:gap-10 mx-5 ",children:d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 shadow-2xl gap-5 ",children:[d.jsxs("div",{className:"w-96 rounded-xl bg-purple-300 shadow-xl",children:[d.jsx("figure",{className:"px-10 pt-10",children:d.jsx("img",{src:"https://www.theflagman.co.uk/wp-content/uploads/2016/09/flag-of-bangladesh.jpg",alt:"Shoes",className:"rounded-xl"})}),d.jsxs("div",{className:"card-body items-center text-justify",children:[d.jsx("h2",{className:"card-title",children:"Bangladesh"}),d.jsx("p",{children:"Bangladesh, nestled in South Asia, boasts a rich tapestry of culture, history, and natural beauty. With its vibrant cities, lush landscapes, and the mighty rivers that crisscross the land, Bangladesh is a land of contrasts"})]})]}),d.jsxs("div",{className:" rounded-xl w-96 bg-purple-300 shadow-xl",children:[d.jsx("figure",{className:"px-10 pt-10",children:d.jsx("img",{src:"https://www.medianigeria.com/wp-content/uploads/2018/02/Thailand-Flag.png",alt:"Shoes",className:"rounded-xl"})}),d.jsxs("div",{className:"card-body items-center text-justify",children:[d.jsx("h2",{className:"card-title",children:"Thailand"}),d.jsx("p",{children:' Thailand, known as the "Land of Smiles," is a captivating blend of ancient temples, bustling markets, and stunning tropical beaches. From the vibrant streets of Bangkok, with its lively street food scene.'})]})]}),d.jsxs("div",{className:" rounded-xl w-96 bg-purple-300 shadow-xl",children:[d.jsx("figure",{className:"px-10 pt-10",children:d.jsx("img",{src:"https://www.worldatlas.com/r/w2000-h1125-q90/upload/9f/69/0a/id-flag.jpg",alt:"Shoes",className:"rounded-xl"})}),d.jsxs("div",{className:"card-body items-center text-justify",children:[d.jsx("h2",{className:"card-title",children:"Indonesia"}),d.jsx("p",{children:"Indonesia, the world's largest archipelago, is a mosaic of over 17,000 islands, each offering its own unique charm. From the stunning beaches of Bali, where surfers ride the waves and sun-seekers lounge on pristine sands."})]})]}),d.jsxs("div",{className:" w-96 rounded-xl bg-purple-300 shadow-xl",children:[d.jsx("figure",{className:"px-10 pt-10",children:d.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/2800px-Flag_of_Malaysia.svg.png",alt:"Shoes",className:"rounded-xl"})}),d.jsxs("div",{className:"card-body items-center text-justify",children:[d.jsx("h2",{className:"card-title",children:"Malaysia"}),d.jsx("p",{children:"Malaysia, situated in Southeast Asia, is a melting pot of cultures, cuisines, and landscapes. Its capital, Kuala Lumpur, is a dynamic metropolis where towering skyscrapers stand alongside colonial architecture and bustling street markets."})]})]}),d.jsxs("div",{className:"rounded-xl w-96 bg-purple-300 shadow-xl",children:[d.jsx("figure",{className:"px-10 pt-10",children:d.jsx("img",{src:"https://cdn.wallpapersafari.com/46/13/xUjeCI.jpg",alt:"Shoes",className:"rounded-xl"})}),d.jsxs("div",{className:"card-body items-center text-justify",children:[d.jsx("h2",{className:"card-title",children:"Vietnam"}),d.jsx("p",{children:"Vietnam, a land of breathtaking natural beauty and rich history, captivates visitors with its stunning landscapes, bustling cities, and vibrant culture. From the ancient streets of Hanoi, where cyclo drivers weave through a maze of narrow alleys."})]})]}),d.jsxs("div",{className:"rounded-xl w-96 bg-purple-300 shadow-xl",children:[d.jsx("figure",{className:"px-10 pt-10",children:d.jsx("img",{src:"https://s1.bwallpapers.com/wallpapers/2014/05/29/cambodia-flag_12123641.gif",alt:"Shoes",className:"rounded-xl"})}),d.jsxs("div",{className:"card-body items-center text-justify",children:[d.jsx("h2",{className:"card-title",children:"Cambodia"}),d.jsx("p",{children:"Cambodia, home to the magnificent temples of Angkor Wat and a history that stretches back millennia, is a land of ancient wonders and timeless beauty. The bustling capital, Phnom Penh, offers a glimpse into Cambodia's past with its ornate palaces and somber memorials."})]})]})]})})}),hI=()=>{const e=To(),[t,n]=I.useState(!0);I.useEffect(()=>{setTimeout(()=>{r()},3e3)},[]);const r=()=>{n(!1)};return d.jsxs("div",{children:[d.jsx(fI,{}),d.jsx("div",{className:"mx-10",children:d.jsxs("div",{children:[d.jsx("h3",{className:"text-3xl mt-20 font-bold underline text-center",children:"Tourist Spot"}),d.jsx("br",{}),d.jsx("br",{}),t?d.jsx("span",{className:"loading loading-bars loading-lg"}):d.jsx("div",{className:"grid md:grid-cols-3 md:gap-10 ",children:e.map(i=>d.jsx(Jy,{tspot:i},i._id))}),d.jsx("h3",{className:"text-3xl text-center font-bold underline my-10",children:"Countries"}),d.jsx("div",{className:"",children:d.jsx(Zy,{})}),d.jsx("h3",{className:"text-3xl text-center font-bold underline my-10",children:"Our Transport Services"}),d.jsx("div",{className:"",children:d.jsx(dI,{})}),d.jsx("h3",{className:"text-3xl text-center font-bold underline my-20",children:"Our Advisors"}),d.jsx("div",{className:"",children:d.jsx(uI,{})})]})})]})};function pI(e){return No({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function mI(e){return No({tag:"svg",attr:{viewBox:"0 0 488 512"},child:[{tag:"path",attr:{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"},child:[]}]})(e)}function gI(e){return No({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"},child:[]}]})(e)}function vI(e){return No({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(e)}function ew(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=ew(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Er(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=ew(e))&&(r&&(r+=" "),r+=t);return r}const Da=e=>typeof e=="number"&&!isNaN(e),ci=e=>typeof e=="string",Lt=e=>typeof e=="function",Zs=e=>ci(e)||Lt(e)?e:null,Bd=e=>I.isValidElement(e)||ci(e)||Lt(e)||Da(e);function yI(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function cc(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:o=300}=e;return function(a){let{children:l,position:c,preventExitTransition:p,done:m,nodeRef:g,isIn:y,playToast:C}=a;const E=r?`${t}--${c}`:t,S=r?`${n}--${c}`:n,P=I.useRef(0);return I.useLayoutEffect(()=>{const w=g.current,v=E.split(" "),x=T=>{T.target===g.current&&(C(),w.removeEventListener("animationend",x),w.removeEventListener("animationcancel",x),P.current===0&&T.type!=="animationcancel"&&w.classList.remove(...v))};w.classList.add(...v),w.addEventListener("animationend",x),w.addEventListener("animationcancel",x)},[]),I.useEffect(()=>{const w=g.current,v=()=>{w.removeEventListener("animationend",v),i?yI(w,m,o):m()};y||(p?v():(P.current=1,w.className+=` ${S}`,w.addEventListener("animationend",v)))},[y]),ue.createElement(ue.Fragment,null,l)}}function gg(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const bt=new Map;let Ma=[];const Fd=new Set,wI=e=>Fd.forEach(t=>t(e)),tw=()=>bt.size>0;function nw(e,t){var n;if(t)return!((n=bt.get(t))==null||!n.isToastActive(e));let r=!1;return bt.forEach(i=>{i.isToastActive(e)&&(r=!0)}),r}function rw(e,t){Bd(e)&&(tw()||Ma.push({content:e,options:t}),bt.forEach(n=>{n.buildToast(e,t)}))}function vg(e,t){bt.forEach(n=>{t!=null&&t!=null&&t.containerId?(t==null?void 0:t.containerId)===n.id&&n.toggle(e,t==null?void 0:t.id):n.toggle(e,t==null?void 0:t.id)})}function xI(e){const{subscribe:t,getSnapshot:n,setProps:r}=I.useRef(function(o){const a=o.containerId||1;return{subscribe(l){const c=function(m,g,y){let C=1,E=0,S=[],P=[],w=[],v=g;const x=new Map,T=new Set,L=()=>{w=Array.from(x.values()),T.forEach(A=>A())},M=A=>{P=A==null?[]:P.filter(F=>F!==A),L()},b=A=>{const{toastId:F,onOpen:z,updateId:Q,children:oe}=A.props,he=Q==null;A.staleId&&x.delete(A.staleId),x.set(F,A),P=[...P,A.props.toastId].filter(_e=>_e!==A.staleId),L(),y(gg(A,he?"added":"updated")),he&&Lt(z)&&z(I.isValidElement(oe)&&oe.props)};return{id:m,props:v,observe:A=>(T.add(A),()=>T.delete(A)),toggle:(A,F)=>{x.forEach(z=>{F!=null&&F!==z.props.toastId||Lt(z.toggle)&&z.toggle(A)})},removeToast:M,toasts:x,clearQueue:()=>{E-=S.length,S=[]},buildToast:(A,F)=>{if((ne=>{let{containerId:N,toastId:Se,updateId:ye}=ne;const Ce=N?N!==m:m!==1,De=x.has(Se)&&ye==null;return Ce||De})(F))return;const{toastId:z,updateId:Q,data:oe,staleId:he,delay:_e}=F,He=()=>{M(z)},gt=Q==null;gt&&E++;const We={...v,style:v.toastStyle,key:C++,...Object.fromEntries(Object.entries(F).filter(ne=>{let[N,Se]=ne;return Se!=null})),toastId:z,updateId:Q,data:oe,closeToast:He,isIn:!1,className:Zs(F.className||v.toastClassName),bodyClassName:Zs(F.bodyClassName||v.bodyClassName),progressClassName:Zs(F.progressClassName||v.progressClassName),autoClose:!F.isLoading&&(R=F.autoClose,X=v.autoClose,R===!1||Da(R)&&R>0?R:X),deleteToast(){const ne=x.get(z),{onClose:N,children:Se}=ne.props;Lt(N)&&N(I.isValidElement(Se)&&Se.props),y(gg(ne,"removed")),x.delete(z),E--,E<0&&(E=0),S.length>0?b(S.shift()):L()}};var R,X;We.closeButton=v.closeButton,F.closeButton===!1||Bd(F.closeButton)?We.closeButton=F.closeButton:F.closeButton===!0&&(We.closeButton=!Bd(v.closeButton)||v.closeButton);let J=A;I.isValidElement(A)&&!ci(A.type)?J=I.cloneElement(A,{closeToast:He,toastProps:We,data:oe}):Lt(A)&&(J=A({closeToast:He,toastProps:We,data:oe}));const ie={content:J,props:We,staleId:he};v.limit&&v.limit>0&&E>v.limit&&gt?S.push(ie):Da(_e)?setTimeout(()=>{b(ie)},_e):b(ie)},setProps(A){v=A},setToggle:(A,F)=>{x.get(A).toggle=F},isToastActive:A=>P.some(F=>F===A),getSnapshot:()=>v.newestOnTop?w.reverse():w}}(a,o,wI);bt.set(a,c);const p=c.observe(l);return Ma.forEach(m=>rw(m.content,m.options)),Ma=[],()=>{p(),bt.delete(a)}},setProps(l){var c;(c=bt.get(a))==null||c.setProps(l)},getSnapshot(){var l;return(l=bt.get(a))==null?void 0:l.getSnapshot()}}}(e)).current;r(e);const i=I.useSyncExternalStore(t,n,n);return{getToastToRender:function(o){if(!i)return[];const a=new Map;return i.forEach(l=>{const{position:c}=l.props;a.has(c)||a.set(c,[]),a.get(c).push(l)}),Array.from(a,l=>o(l[0],l[1]))},isToastActive:nw,count:i==null?void 0:i.length}}function bI(e){const[t,n]=I.useState(!1),[r,i]=I.useState(!1),o=I.useRef(null),a=I.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:c,closeToast:p,onClick:m,closeOnClick:g}=e;var y,C;function E(){n(!0)}function S(){n(!1)}function P(x){const T=o.current;a.canDrag&&T&&(a.didMove=!0,t&&S(),a.delta=e.draggableDirection==="x"?x.clientX-a.start:x.clientY-a.start,a.start!==x.clientX&&(a.canCloseOnClick=!1),T.style.transform=`translate3d(${e.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`},0)`,T.style.opacity=""+(1-Math.abs(a.delta/a.removalDistance)))}function w(){document.removeEventListener("pointermove",P),document.removeEventListener("pointerup",w);const x=o.current;if(a.canDrag&&a.didMove&&x){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance)return i(!0),e.closeToast(),void e.collapseAll();x.style.transition="transform 0.2s, opacity 0.2s",x.style.removeProperty("transform"),x.style.removeProperty("opacity")}}(C=bt.get((y={id:e.toastId,containerId:e.containerId,fn:n}).containerId||1))==null||C.setToggle(y.id,y.fn),I.useEffect(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||S(),window.addEventListener("focus",E),window.addEventListener("blur",S),()=>{window.removeEventListener("focus",E),window.removeEventListener("blur",S)}},[e.pauseOnFocusLoss]);const v={onPointerDown:function(x){if(e.draggable===!0||e.draggable===x.pointerType){a.didMove=!1,document.addEventListener("pointermove",P),document.addEventListener("pointerup",w);const T=o.current;a.canCloseOnClick=!0,a.canDrag=!0,T.style.transition="none",e.draggableDirection==="x"?(a.start=x.clientX,a.removalDistance=T.offsetWidth*(e.draggablePercent/100)):(a.start=x.clientY,a.removalDistance=T.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(x){const{top:T,bottom:L,left:M,right:b}=o.current.getBoundingClientRect();x.nativeEvent.type!=="touchend"&&e.pauseOnHover&&x.clientX>=M&&x.clientX<=b&&x.clientY>=T&&x.clientY<=L?S():E()}};return l&&c&&(v.onMouseEnter=S,e.stacked||(v.onMouseLeave=E)),g&&(v.onClick=x=>{m&&m(x),a.canCloseOnClick&&p()}),{playToast:E,pauseToast:S,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:v}}function _I(e){let{delay:t,isRunning:n,closeToast:r,type:i="default",hide:o,className:a,style:l,controlledProgress:c,progress:p,rtl:m,isIn:g,theme:y}=e;const C=o||c&&p===0,E={...l,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused"};c&&(E.transform=`scaleX(${p})`);const S=Er("Toastify__progress-bar",c?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${y}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":m}),P=Lt(a)?a({rtl:m,type:i,defaultClassName:S}):Er(S,a),w={[c&&p>=1?"onTransitionEnd":"onAnimationEnd"]:c&&p<1?null:()=>{g&&r()}};return ue.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":C},ue.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${y} Toastify__progress-bar--${i}`}),ue.createElement("div",{role:"progressbar","aria-hidden":C?"true":"false","aria-label":"notification timer",className:P,style:E,...w}))}let SI=1;const iw=()=>""+SI++;function EI(e){return e&&(ci(e.toastId)||Da(e.toastId))?e.toastId:iw()}function fa(e,t){return rw(e,t),t.toastId}function Dl(e,t){return{...t,type:t&&t.type||e,toastId:EI(t)}}function Ns(e){return(t,n)=>fa(t,Dl(e,n))}function ge(e,t){return fa(e,Dl("default",t))}ge.loading=(e,t)=>fa(e,Dl("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),ge.promise=function(e,t,n){let r,{pending:i,error:o,success:a}=t;i&&(r=ci(i)?ge.loading(i,n):ge.loading(i.render,{...n,...i}));const l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=(m,g,y)=>{if(g==null)return void ge.dismiss(r);const C={type:m,...l,...n,data:y},E=ci(g)?{render:g}:g;return r?ge.update(r,{...C,...E}):ge(E.render,{...C,...E}),y},p=Lt(e)?e():e;return p.then(m=>c("success",a,m)).catch(m=>c("error",o,m)),p},ge.success=Ns("success"),ge.info=Ns("info"),ge.error=Ns("error"),ge.warning=Ns("warning"),ge.warn=ge.warning,ge.dark=(e,t)=>fa(e,Dl("default",{theme:"dark",...t})),ge.dismiss=function(e){(function(t){var n;if(tw()){if(t==null||ci(n=t)||Da(n))bt.forEach(r=>{r.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){const r=bt.get(t.containerId);r?r.removeToast(t.id):bt.forEach(i=>{i.removeToast(t.id)})}}else Ma=Ma.filter(r=>t!=null&&r.options.toastId!==t)})(e)},ge.clearWaitingQueue=function(e){e===void 0&&(e={}),bt.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},ge.isActive=nw,ge.update=function(e,t){t===void 0&&(t={});const n=((r,i)=>{var o;let{containerId:a}=i;return(o=bt.get(a||1))==null?void 0:o.toasts.get(r)})(e,t);if(n){const{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:iw()};o.toastId!==e&&(o.staleId=e);const a=o.render||i;delete o.render,fa(a,o)}},ge.done=e=>{ge.update(e,{progress:1})},ge.onChange=function(e){return Fd.add(e),()=>{Fd.delete(e)}},ge.play=e=>vg(!0,e),ge.pause=e=>vg(!1,e);const CI=typeof window<"u"?I.useLayoutEffect:I.useEffect,js=e=>{let{theme:t,type:n,isLoading:r,...i}=e;return ue.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...i})},ku={info:function(e){return ue.createElement(js,{...e},ue.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return ue.createElement(js,{...e},ue.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return ue.createElement(js,{...e},ue.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return ue.createElement(js,{...e},ue.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return ue.createElement("div",{className:"Toastify__spinner"})}},kI=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:o}=bI(e),{closeButton:a,children:l,autoClose:c,onClick:p,type:m,hideProgressBar:g,closeToast:y,transition:C,position:E,className:S,style:P,bodyClassName:w,bodyStyle:v,progressClassName:x,progressStyle:T,updateId:L,role:M,progress:b,rtl:A,toastId:F,deleteToast:z,isIn:Q,isLoading:oe,closeOnClick:he,theme:_e}=e,He=Er("Toastify__toast",`Toastify__toast-theme--${_e}`,`Toastify__toast--${m}`,{"Toastify__toast--rtl":A},{"Toastify__toast--close-on-click":he}),gt=Lt(S)?S({rtl:A,position:E,type:m,defaultClassName:He}):Er(He,S),We=function(ie){let{theme:ne,type:N,isLoading:Se,icon:ye}=ie,Ce=null;const De={theme:ne,type:N};return ye===!1||(Lt(ye)?Ce=ye({...De,isLoading:Se}):I.isValidElement(ye)?Ce=I.cloneElement(ye,De):Se?Ce=ku.spinner():(Ke=>Ke in ku)(N)&&(Ce=ku[N](De))),Ce}(e),R=!!b||!c,X={closeToast:y,type:m,theme:_e};let J=null;return a===!1||(J=Lt(a)?a(X):I.isValidElement(a)?I.cloneElement(a,X):function(ie){let{closeToast:ne,theme:N,ariaLabel:Se="close"}=ie;return ue.createElement("button",{className:`Toastify__close-button Toastify__close-button--${N}`,type:"button",onClick:ye=>{ye.stopPropagation(),ne(ye)},"aria-label":Se},ue.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},ue.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(X)),ue.createElement(C,{isIn:Q,done:z,position:E,preventExitTransition:n,nodeRef:r,playToast:o},ue.createElement("div",{id:F,onClick:p,"data-in":Q,className:gt,...i,style:P,ref:r},ue.createElement("div",{...Q&&{role:M},className:Lt(w)?w({type:m}):Er("Toastify__toast-body",w),style:v},We!=null&&ue.createElement("div",{className:Er("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!oe})},We),ue.createElement("div",null,l)),J,ue.createElement(_I,{...L&&!R?{key:`pb-${L}`}:{},rtl:A,theme:_e,delay:c,isRunning:t,isIn:Q,closeToast:y,hide:g,type:m,style:T,className:x,controlledProgress:R,progress:b||0})))},uc=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},TI=cc(uc("bounce",!0));cc(uc("slide",!0));cc(uc("zoom"));cc(uc("flip"));const II={position:"top-right",transition:TI,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function PI(e){let t={...II,...e};const n=e.stacked,[r,i]=I.useState(!0),o=I.useRef(null),{getToastToRender:a,isToastActive:l,count:c}=xI(t),{className:p,style:m,rtl:g,containerId:y}=t;function C(S){const P=Er("Toastify__toast-container",`Toastify__toast-container--${S}`,{"Toastify__toast-container--rtl":g});return Lt(p)?p({position:S,rtl:g,defaultClassName:P}):Er(P,Zs(p))}function E(){n&&(i(!0),ge.play())}return CI(()=>{if(n){var S;const P=o.current.querySelectorAll('[data-in="true"]'),w=12,v=(S=t.position)==null?void 0:S.includes("top");let x=0,T=0;Array.from(P).reverse().forEach((L,M)=>{const b=L;b.classList.add("Toastify__toast--stacked"),M>0&&(b.dataset.collapsed=`${r}`),b.dataset.pos||(b.dataset.pos=v?"top":"bot");const A=x*(r?.2:1)+(r?0:w*M);b.style.setProperty("--y",`${v?A:-1*A}px`),b.style.setProperty("--g",`${w}`),b.style.setProperty("--s",""+(1-(r?T:0))),x+=b.offsetHeight,T+=.025})}},[r,c,n]),ue.createElement("div",{ref:o,className:"Toastify",id:y,onMouseEnter:()=>{n&&(i(!1),ge.pause())},onMouseLeave:E},a((S,P)=>{const w=P.length?{...m}:{...m,pointerEvents:"none"};return ue.createElement("div",{className:C(S),style:w,key:`container-${S}`},P.map(v=>{let{content:x,props:T}=v;return ue.createElement(kI,{...T,stacked:n,collapseAll:E,isIn:l(T.toastId,T.containerId),style:T.style,key:`toast-${T.key}`},x)}))}))}const NI=()=>{const{signInuser:e}=I.useContext(Po),t=Kf(),n=l=>{l.preventDefault();const c=l.target.email.value,p=l.target.password.value;console.log(c,p),e(c,p).then(m=>{console.log(m.user),l.target.reset(),t("/")}).catch(m=>{ge(m.message)})},r=new zn,i=()=>{ig(Qi,r).then(l=>{console.log(l.user),t("/")}).catch(l=>console.log(l.message))},o=new $n,a=()=>{ig(Qi,o).then(l=>{console.log(l.user),t("/")}).catch(l=>console.log(l.message))};return d.jsx("div",{className:"hero my-0 md:my-5 md:py-10",children:d.jsxs("div",{className:"hero-content flex-col shadow-3xl bg-red-300 rounded-2xl",children:[d.jsx("div",{className:"text-center lg:text-left",children:d.jsx("h1",{className:"text-2xl md:text-3xl md:py-10 font-bold ",children:"Login now!"})}),d.jsxs("div",{className:"card shrink-0 w-full max-w-sm shadow-2xl bg-gray-300 py-10",children:[d.jsxs("form",{className:"card-body max-w-56 md:max-w-full",onSubmit:n,children:[d.jsxs("div",{className:"form-control",children:[d.jsx("label",{className:"label",children:d.jsx("span",{className:"label-text",children:"Email"})}),d.jsx("input",{type:"email",name:"email",placeholder:"email",className:"input input-bordered",required:!0})]}),d.jsxs("div",{className:"form-control",children:[d.jsx("label",{className:"label",children:d.jsx("span",{className:"label-text",children:"Password"})}),d.jsx("input",{type:"password",name:"password",placeholder:"password",className:"input input-bordered",required:!0})]}),d.jsx("div",{className:"form-control mt-6",children:d.jsx("button",{className:"btn btn-primary",children:"Login"})})]}),d.jsxs("div",{className:"flex gap-5 justify-center mb-5 text-center",children:[d.jsx("button",{onClick:i,className:"text-xl py-1 px-2 border-2 border-black rounded-lg",children:d.jsx(mI,{})}),d.jsx("button",{onClick:a,className:"text-xl py-1 px-2 border-2 border-black rounded-lg",children:d.jsx(pI,{})})]}),d.jsxs("p",{className:"text-center",children:["New here ? Please ",d.jsx(Nn,{to:"/Register",children:d.jsx("button",{className:"bg-blue-700 text-white font-bold py-1 px-2 rounded-lg",children:"Register"})})]})]})]})})},jI=()=>{const{createUser:e}=I.useContext(Po),[t,n]=I.useState(!1),r=i=>{i.preventDefault();const o=i.target.name.value,a=i.target.email.value,l=i.target.photourl.value,c=i.target.password.value;if(console.log(a,c,o,l),/[A-Z]/.test(c))if(/[a-z]/.test(c)){if(c.length<6){ge("Password should be at least 6 letters");return}}else{ge("password should have one lowercase letter");return}else{ge("Password should have one uppercase letter.");return}e(a,c).then(p=>{console.log(p.user),ge("Registered succesfullly")}).catch(p=>{ge(p.message)})};return d.jsxs("div",{className:"hero min-h-screen bg-red-300 my-5 py-5  md:my-10 md:py-10 rounded-3xl",children:[d.jsxs("div",{className:"hero-content flex-col",children:[d.jsx("div",{className:"text-center lg:text-left",children:d.jsx("h1",{className:"text-3xl md:text-5xl font-bold",children:"Register now!"})}),d.jsxs("div",{className:"card shrink-2 w-full max-w-sm shadow-2xl bg-base-100",children:[d.jsxs("form",{className:"card-body max-w-56 md:max-w-full",onSubmit:r,children:[d.jsxs("div",{className:"form-control shadow-inner",children:[d.jsx("label",{className:"label",children:d.jsx("span",{className:"label-text",children:"Name"})}),d.jsx("input",{type:"text",name:"name",placeholder:"name",className:"input input-bordered",required:!0})]}),d.jsxs("div",{className:"form-control",children:[d.jsx("label",{className:"label",children:d.jsx("span",{className:"label-text",children:"Email"})}),d.jsx("input",{type:"email",name:"email",placeholder:"email",className:"input input-bordered",required:!0})]}),d.jsxs("div",{className:"form-control",children:[d.jsx("label",{className:"label",children:d.jsx("span",{className:"label-text",children:"PhotoURL"})}),d.jsx("input",{type:"text",name:"photourl",placeholder:"photourl",className:"input input-bordered",required:!0})]}),d.jsxs("div",{className:"form-control",children:[d.jsx("label",{className:"label",children:d.jsx("span",{className:"label-text",children:"Password"})}),d.jsx("input",{type:t?"text":"password",placeholder:"Enter your password",id:"p",name:"password",className:"border-2 border-black py-2 px-3",required:!0}),d.jsx("span",{onClick:()=>n(!t),className:"absolute bottom-64 mb-1 md:mb-0 left-48 md:bottom-60 md:left-64 ",children:t?d.jsx(gI,{}):d.jsx(vI,{})}),d.jsx("br",{}),d.jsx("br",{})]}),d.jsx("div",{className:"form-control mt-6",children:d.jsx("button",{className:"btn btn-primary",children:"Submit"})})]}),d.jsxs("p",{children:["Already Have an account ? Please ",d.jsx(Nn,{to:"/Login",children:d.jsx("button",{className:"bg-blue-700 text-white font-bold py-1 px-2 rounded-lg",children:"Login"})})]})]})]}),d.jsx(PI,{})]})};function RI(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function AI(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var OI=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(AI(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=RI(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),ft="-ms-",Ml="-moz-",me="-webkit-",ow="comm",sh="rule",lh="decl",LI="@import",aw="@keyframes",DI="@layer",MI=Math.abs,dc=String.fromCharCode,BI=Object.assign;function FI(e,t){return at(e,0)^45?(((t<<2^at(e,0))<<2^at(e,1))<<2^at(e,2))<<2^at(e,3):0}function sw(e){return e.trim()}function UI(e,t){return(e=t.exec(e))?e[0]:e}function ve(e,t,n){return e.replace(t,n)}function Ud(e,t){return e.indexOf(t)}function at(e,t){return e.charCodeAt(t)|0}function Ba(e,t,n){return e.slice(t,n)}function Cn(e){return e.length}function ch(e){return e.length}function Rs(e,t){return t.push(e),e}function zI(e,t){return e.map(t).join("")}var fc=1,bo=1,lw=0,jt=0,Ge=0,jo="";function hc(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:fc,column:bo,length:a,return:""}}function Yo(e,t){return BI(hc("",null,null,"",null,null,0),e,{length:-e.length},t)}function $I(){return Ge}function VI(){return Ge=jt>0?at(jo,--jt):0,bo--,Ge===10&&(bo=1,fc--),Ge}function Mt(){return Ge=jt<lw?at(jo,jt++):0,bo++,Ge===10&&(bo=1,fc++),Ge}function Rn(){return at(jo,jt)}function el(){return jt}function ns(e,t){return Ba(jo,e,t)}function Fa(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function cw(e){return fc=bo=1,lw=Cn(jo=e),jt=0,[]}function uw(e){return jo="",e}function tl(e){return sw(ns(jt-1,zd(e===91?e+2:e===40?e+1:e)))}function HI(e){for(;(Ge=Rn())&&Ge<33;)Mt();return Fa(e)>2||Fa(Ge)>3?"":" "}function WI(e,t){for(;--t&&Mt()&&!(Ge<48||Ge>102||Ge>57&&Ge<65||Ge>70&&Ge<97););return ns(e,el()+(t<6&&Rn()==32&&Mt()==32))}function zd(e){for(;Mt();)switch(Ge){case e:return jt;case 34:case 39:e!==34&&e!==39&&zd(Ge);break;case 40:e===41&&zd(e);break;case 92:Mt();break}return jt}function KI(e,t){for(;Mt()&&e+Ge!==57;)if(e+Ge===84&&Rn()===47)break;return"/*"+ns(t,jt-1)+"*"+dc(e===47?e:Mt())}function YI(e){for(;!Fa(Rn());)Mt();return ns(e,jt)}function qI(e){return uw(nl("",null,null,null,[""],e=cw(e),0,[0],e))}function nl(e,t,n,r,i,o,a,l,c){for(var p=0,m=0,g=a,y=0,C=0,E=0,S=1,P=1,w=1,v=0,x="",T=i,L=o,M=r,b=x;P;)switch(E=v,v=Mt()){case 40:if(E!=108&&at(b,g-1)==58){Ud(b+=ve(tl(v),"&","&\f"),"&\f")!=-1&&(w=-1);break}case 34:case 39:case 91:b+=tl(v);break;case 9:case 10:case 13:case 32:b+=HI(E);break;case 92:b+=WI(el()-1,7);continue;case 47:switch(Rn()){case 42:case 47:Rs(GI(KI(Mt(),el()),t,n),c);break;default:b+="/"}break;case 123*S:l[p++]=Cn(b)*w;case 125*S:case 59:case 0:switch(v){case 0:case 125:P=0;case 59+m:w==-1&&(b=ve(b,/\f/g,"")),C>0&&Cn(b)-g&&Rs(C>32?wg(b+";",r,n,g-1):wg(ve(b," ","")+";",r,n,g-2),c);break;case 59:b+=";";default:if(Rs(M=yg(b,t,n,p,m,i,l,x,T=[],L=[],g),o),v===123)if(m===0)nl(b,t,M,M,T,o,g,l,L);else switch(y===99&&at(b,3)===110?100:y){case 100:case 108:case 109:case 115:nl(e,M,M,r&&Rs(yg(e,M,M,0,0,i,l,x,i,T=[],g),L),i,L,g,l,r?T:L);break;default:nl(b,M,M,M,[""],L,0,l,L)}}p=m=C=0,S=w=1,x=b="",g=a;break;case 58:g=1+Cn(b),C=E;default:if(S<1){if(v==123)--S;else if(v==125&&S++==0&&VI()==125)continue}switch(b+=dc(v),v*S){case 38:w=m>0?1:(b+="\f",-1);break;case 44:l[p++]=(Cn(b)-1)*w,w=1;break;case 64:Rn()===45&&(b+=tl(Mt())),y=Rn(),m=g=Cn(x=b+=YI(el())),v++;break;case 45:E===45&&Cn(b)==2&&(S=0)}}return o}function yg(e,t,n,r,i,o,a,l,c,p,m){for(var g=i-1,y=i===0?o:[""],C=ch(y),E=0,S=0,P=0;E<r;++E)for(var w=0,v=Ba(e,g+1,g=MI(S=a[E])),x=e;w<C;++w)(x=sw(S>0?y[w]+" "+v:ve(v,/&\f/g,y[w])))&&(c[P++]=x);return hc(e,t,n,i===0?sh:l,c,p,m)}function GI(e,t,n){return hc(e,t,n,ow,dc($I()),Ba(e,2,-2),0)}function wg(e,t,n,r){return hc(e,t,n,lh,Ba(e,0,r),Ba(e,r+1,-1),r)}function lo(e,t){for(var n="",r=ch(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function XI(e,t,n,r){switch(e.type){case DI:if(e.children.length)break;case LI:case lh:return e.return=e.return||e.value;case ow:return"";case aw:return e.return=e.value+"{"+lo(e.children,r)+"}";case sh:e.value=e.props.join(",")}return Cn(n=lo(e.children,r))?e.return=e.value+"{"+n+"}":""}function QI(e){var t=ch(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function JI(e){return function(t){t.root||(t=t.return)&&e(t)}}function ZI(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var e3=function(t,n,r){for(var i=0,o=0;i=o,o=Rn(),i===38&&o===12&&(n[r]=1),!Fa(o);)Mt();return ns(t,jt)},t3=function(t,n){var r=-1,i=44;do switch(Fa(i)){case 0:i===38&&Rn()===12&&(n[r]=1),t[r]+=e3(jt-1,n,r);break;case 2:t[r]+=tl(i);break;case 4:if(i===44){t[++r]=Rn()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=dc(i)}while(i=Mt());return t},n3=function(t,n){return uw(t3(cw(t),n))},xg=new WeakMap,r3=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!xg.get(r))&&!i){xg.set(t,!0);for(var o=[],a=n3(n,o),l=r.props,c=0,p=0;c<a.length;c++)for(var m=0;m<l.length;m++,p++)t.props[p]=o[c]?a[c].replace(/&\f/g,l[m]):l[m]+" "+a[c]}}},i3=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function dw(e,t){switch(FI(e,t)){case 5103:return me+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return me+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return me+e+Ml+e+ft+e+e;case 6828:case 4268:return me+e+ft+e+e;case 6165:return me+e+ft+"flex-"+e+e;case 5187:return me+e+ve(e,/(\w+).+(:[^]+)/,me+"box-$1$2"+ft+"flex-$1$2")+e;case 5443:return me+e+ft+"flex-item-"+ve(e,/flex-|-self/,"")+e;case 4675:return me+e+ft+"flex-line-pack"+ve(e,/align-content|flex-|-self/,"")+e;case 5548:return me+e+ft+ve(e,"shrink","negative")+e;case 5292:return me+e+ft+ve(e,"basis","preferred-size")+e;case 6060:return me+"box-"+ve(e,"-grow","")+me+e+ft+ve(e,"grow","positive")+e;case 4554:return me+ve(e,/([^-])(transform)/g,"$1"+me+"$2")+e;case 6187:return ve(ve(ve(e,/(zoom-|grab)/,me+"$1"),/(image-set)/,me+"$1"),e,"")+e;case 5495:case 3959:return ve(e,/(image-set\([^]*)/,me+"$1$`$1");case 4968:return ve(ve(e,/(.+:)(flex-)?(.*)/,me+"box-pack:$3"+ft+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+me+e+e;case 4095:case 3583:case 4068:case 2532:return ve(e,/(.+)-inline(.+)/,me+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Cn(e)-1-t>6)switch(at(e,t+1)){case 109:if(at(e,t+4)!==45)break;case 102:return ve(e,/(.+:)(.+)-([^]+)/,"$1"+me+"$2-$3$1"+Ml+(at(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ud(e,"stretch")?dw(ve(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(at(e,t+1)!==115)break;case 6444:switch(at(e,Cn(e)-3-(~Ud(e,"!important")&&10))){case 107:return ve(e,":",":"+me)+e;case 101:return ve(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+me+(at(e,14)===45?"inline-":"")+"box$3$1"+me+"$2$3$1"+ft+"$2box$3")+e}break;case 5936:switch(at(e,t+11)){case 114:return me+e+ft+ve(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return me+e+ft+ve(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return me+e+ft+ve(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return me+e+ft+e+e}return e}var o3=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case lh:t.return=dw(t.value,t.length);break;case aw:return lo([Yo(t,{value:ve(t.value,"@","@"+me)})],i);case sh:if(t.length)return zI(t.props,function(o){switch(UI(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return lo([Yo(t,{props:[ve(o,/:(read-\w+)/,":"+Ml+"$1")]})],i);case"::placeholder":return lo([Yo(t,{props:[ve(o,/:(plac\w+)/,":"+me+"input-$1")]}),Yo(t,{props:[ve(o,/:(plac\w+)/,":"+Ml+"$1")]}),Yo(t,{props:[ve(o,/:(plac\w+)/,ft+"input-$1")]})],i)}return""})}},a3=[o3],s3=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(S){var P=S.getAttribute("data-emotion");P.indexOf(" ")!==-1&&(document.head.appendChild(S),S.setAttribute("data-s",""))})}var i=t.stylisPlugins||a3,o={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(S){for(var P=S.getAttribute("data-emotion").split(" "),w=1;w<P.length;w++)o[P[w]]=!0;l.push(S)});var c,p=[r3,i3];{var m,g=[XI,JI(function(S){m.insert(S)})],y=QI(p.concat(i,g)),C=function(P){return lo(qI(P),y)};c=function(P,w,v,x){m=v,C(P?P+"{"+w.styles+"}":w.styles),x&&(E.inserted[w.name]=!0)}}var E={key:n,sheet:new OI({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:c};return E.sheet.hydrate(l),E},fw={exports:{}},xe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rt=typeof Symbol=="function"&&Symbol.for,uh=rt?Symbol.for("react.element"):60103,dh=rt?Symbol.for("react.portal"):60106,pc=rt?Symbol.for("react.fragment"):60107,mc=rt?Symbol.for("react.strict_mode"):60108,gc=rt?Symbol.for("react.profiler"):60114,vc=rt?Symbol.for("react.provider"):60109,yc=rt?Symbol.for("react.context"):60110,fh=rt?Symbol.for("react.async_mode"):60111,wc=rt?Symbol.for("react.concurrent_mode"):60111,xc=rt?Symbol.for("react.forward_ref"):60112,bc=rt?Symbol.for("react.suspense"):60113,l3=rt?Symbol.for("react.suspense_list"):60120,_c=rt?Symbol.for("react.memo"):60115,Sc=rt?Symbol.for("react.lazy"):60116,c3=rt?Symbol.for("react.block"):60121,u3=rt?Symbol.for("react.fundamental"):60117,d3=rt?Symbol.for("react.responder"):60118,f3=rt?Symbol.for("react.scope"):60119;function zt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case uh:switch(e=e.type,e){case fh:case wc:case pc:case gc:case mc:case bc:return e;default:switch(e=e&&e.$$typeof,e){case yc:case xc:case Sc:case _c:case vc:return e;default:return t}}case dh:return t}}}function hw(e){return zt(e)===wc}xe.AsyncMode=fh;xe.ConcurrentMode=wc;xe.ContextConsumer=yc;xe.ContextProvider=vc;xe.Element=uh;xe.ForwardRef=xc;xe.Fragment=pc;xe.Lazy=Sc;xe.Memo=_c;xe.Portal=dh;xe.Profiler=gc;xe.StrictMode=mc;xe.Suspense=bc;xe.isAsyncMode=function(e){return hw(e)||zt(e)===fh};xe.isConcurrentMode=hw;xe.isContextConsumer=function(e){return zt(e)===yc};xe.isContextProvider=function(e){return zt(e)===vc};xe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===uh};xe.isForwardRef=function(e){return zt(e)===xc};xe.isFragment=function(e){return zt(e)===pc};xe.isLazy=function(e){return zt(e)===Sc};xe.isMemo=function(e){return zt(e)===_c};xe.isPortal=function(e){return zt(e)===dh};xe.isProfiler=function(e){return zt(e)===gc};xe.isStrictMode=function(e){return zt(e)===mc};xe.isSuspense=function(e){return zt(e)===bc};xe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===pc||e===wc||e===gc||e===mc||e===bc||e===l3||typeof e=="object"&&e!==null&&(e.$$typeof===Sc||e.$$typeof===_c||e.$$typeof===vc||e.$$typeof===yc||e.$$typeof===xc||e.$$typeof===u3||e.$$typeof===d3||e.$$typeof===f3||e.$$typeof===c3)};xe.typeOf=zt;fw.exports=xe;var h3=fw.exports,pw=h3,p3={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},m3={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},mw={};mw[pw.ForwardRef]=p3;mw[pw.Memo]=m3;var g3=!0;function gw(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var hh=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||g3===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},vw=function(t,n,r){hh(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function v3(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var y3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},w3=/[A-Z]|^ms/g,x3=/_EMO_([^_]+?)_([^]*?)_EMO_/g,yw=function(t){return t.charCodeAt(1)===45},bg=function(t){return t!=null&&typeof t!="boolean"},Tu=ZI(function(e){return yw(e)?e:e.replace(w3,"-$&").toLowerCase()}),_g=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(x3,function(r,i,o){return kn={name:i,styles:o,next:kn},i})}return y3[t]!==1&&!yw(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ua(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return kn={name:n.name,styles:n.styles,next:kn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)kn={name:r.name,styles:r.styles,next:kn},r=r.next;var i=n.styles+";";return i}return b3(e,t,n)}case"function":{if(e!==void 0){var o=kn,a=n(e);return kn=o,Ua(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function b3(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Ua(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":bg(a)&&(r+=Tu(o)+":"+_g(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)bg(a[l])&&(r+=Tu(o)+":"+_g(o,a[l])+";");else{var c=Ua(e,t,a);switch(o){case"animation":case"animationName":{r+=Tu(o)+":"+c+";";break}default:r+=o+"{"+c+"}"}}}return r}var Sg=/label:\s*([^\s;\n{]+)\s*(;|$)/g,kn,ph=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";kn=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=Ua(r,n,a)):o+=a[0];for(var l=1;l<t.length;l++)o+=Ua(r,n,t[l]),i&&(o+=a[l]);Sg.lastIndex=0;for(var c="",p;(p=Sg.exec(o))!==null;)c+="-"+p[1];var m=v3(o)+c;return{name:m,styles:o,next:kn}},_3=function(t){return t()},S3=Pu.useInsertionEffect?Pu.useInsertionEffect:!1,ww=S3||_3,mh={}.hasOwnProperty,xw=I.createContext(typeof HTMLElement<"u"?s3({key:"css"}):null);xw.Provider;var bw=function(t){return I.forwardRef(function(n,r){var i=I.useContext(xw);return t(n,i,r)})},_w=I.createContext({}),$d="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",E3=function(t,n){var r={};for(var i in n)mh.call(n,i)&&(r[i]=n[i]);return r[$d]=t,r},C3=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return hh(n,r,i),ww(function(){return vw(n,r,i)}),null},k3=bw(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[$d],o=[r],a="";typeof e.className=="string"?a=gw(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var l=ph(o,void 0,I.useContext(_w));a+=t.key+"-"+l.name;var c={};for(var p in e)mh.call(e,p)&&p!=="css"&&p!==$d&&(c[p]=e[p]);return c.ref=n,c.className=a,I.createElement(I.Fragment,null,I.createElement(C3,{cache:t,serialized:l,isStringTag:typeof i=="string"}),I.createElement(i,c))}),T3=k3,I3=d.Fragment;function et(e,t,n){return mh.call(t,"css")?d.jsx(T3,E3(e,t),n):d.jsx(e,t,n)}function Sw(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return ph(t)}var V=function(){var t=Sw.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},P3=function e(t){for(var n=t.length,r=0,i="";r<n;r++){var o=t[r];if(o!=null){var a=void 0;switch(typeof o){case"boolean":break;case"object":{if(Array.isArray(o))a=e(o);else{a="";for(var l in o)o[l]&&l&&(a&&(a+=" "),a+=l)}break}default:a=o}a&&(i&&(i+=" "),i+=a)}}return i};function N3(e,t,n){var r=[],i=gw(e,r,n);return r.length<2?n:i+t(r)}var j3=function(t){var n=t.cache,r=t.serializedArr;return ww(function(){for(var i=0;i<r.length;i++)vw(n,r[i],!1)}),null},Iu=bw(function(e,t){var n=!1,r=[],i=function(){for(var p=arguments.length,m=new Array(p),g=0;g<p;g++)m[g]=arguments[g];var y=ph(m,t.registered);return r.push(y),hh(t,y,!1),t.key+"-"+y.name},o=function(){for(var p=arguments.length,m=new Array(p),g=0;g<p;g++)m[g]=arguments[g];return N3(t.registered,i,P3(m))},a={css:i,cx:o,theme:I.useContext(_w)},l=e.children(a);return n=!0,I.createElement(I.Fragment,null,I.createElement(j3,{cache:t,serializedArr:r}),l)}),R3=Object.defineProperty,A3=(e,t,n)=>t in e?R3(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,As=(e,t,n)=>(A3(e,typeof t!="symbol"?t+"":t,n),n),Vd=new Map,Os=new WeakMap,Eg=0,O3=void 0;function L3(e){return e?(Os.has(e)||(Eg+=1,Os.set(e,Eg.toString())),Os.get(e)):"0"}function D3(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?L3(e.root):e[t]}`).toString()}function M3(e){const t=D3(e);let n=Vd.get(t);if(!n){const r=new Map;let i;const o=new IntersectionObserver(a=>{a.forEach(l=>{var c;const p=l.isIntersecting&&i.some(m=>l.intersectionRatio>=m);e.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=p),(c=r.get(l.target))==null||c.forEach(m=>{m(p,l)})})},e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},Vd.set(t,n)}return n}function Ew(e,t,n={},r=O3){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const c=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:c,intersectionRect:c,rootBounds:c}),()=>{}}const{id:i,observer:o,elements:a}=M3(n),l=a.get(e)||[];return a.has(e)||a.set(e,l),l.push(t),o.observe(e),function(){l.splice(l.indexOf(t),1),l.length===0&&(a.delete(e),o.unobserve(e)),a.size===0&&(o.disconnect(),Vd.delete(i))}}function B3(e){return typeof e.children!="function"}var Cg=class extends I.Component{constructor(e){super(e),As(this,"node",null),As(this,"_unobserveCb",null),As(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),As(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),B3(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i,fallbackInView:o}=this.props;this._unobserveCb=Ew(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:C,entry:E}=this.state;return e({inView:C,entry:E,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:i,rootMargin:o,onChange:a,skip:l,trackVisibility:c,delay:p,initialInView:m,fallbackInView:g,...y}=this.props;return I.createElement(t||"div",{ref:this.handleNode,...y},e)}};function Cw({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:i,triggerOnce:o,skip:a,initialInView:l,fallbackInView:c,onChange:p}={}){var m;const[g,y]=I.useState(null),C=I.useRef(),[E,S]=I.useState({inView:!!l,entry:void 0});C.current=p,I.useEffect(()=>{if(a||!g)return;let x;return x=Ew(g,(T,L)=>{S({inView:T,entry:L}),C.current&&C.current(T,L),L.isIntersecting&&o&&x&&(x(),x=void 0)},{root:i,rootMargin:r,threshold:e,trackVisibility:n,delay:t},c),()=>{x&&x()}},[Array.isArray(e)?e.toString():e,g,i,r,o,a,n,c,t]);const P=(m=E.entry)==null?void 0:m.target,w=I.useRef();!g&&P&&!o&&!a&&w.current!==P&&(w.current=P,S({inView:!!l,entry:void 0}));const v=[y,E.inView,E.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}var kw={exports:{}},be={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gh=Symbol.for("react.element"),vh=Symbol.for("react.portal"),Ec=Symbol.for("react.fragment"),Cc=Symbol.for("react.strict_mode"),kc=Symbol.for("react.profiler"),Tc=Symbol.for("react.provider"),Ic=Symbol.for("react.context"),F3=Symbol.for("react.server_context"),Pc=Symbol.for("react.forward_ref"),Nc=Symbol.for("react.suspense"),jc=Symbol.for("react.suspense_list"),Rc=Symbol.for("react.memo"),Ac=Symbol.for("react.lazy"),U3=Symbol.for("react.offscreen"),Tw;Tw=Symbol.for("react.module.reference");function tn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case gh:switch(e=e.type,e){case Ec:case kc:case Cc:case Nc:case jc:return e;default:switch(e=e&&e.$$typeof,e){case F3:case Ic:case Pc:case Ac:case Rc:case Tc:return e;default:return t}}case vh:return t}}}be.ContextConsumer=Ic;be.ContextProvider=Tc;be.Element=gh;be.ForwardRef=Pc;be.Fragment=Ec;be.Lazy=Ac;be.Memo=Rc;be.Portal=vh;be.Profiler=kc;be.StrictMode=Cc;be.Suspense=Nc;be.SuspenseList=jc;be.isAsyncMode=function(){return!1};be.isConcurrentMode=function(){return!1};be.isContextConsumer=function(e){return tn(e)===Ic};be.isContextProvider=function(e){return tn(e)===Tc};be.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===gh};be.isForwardRef=function(e){return tn(e)===Pc};be.isFragment=function(e){return tn(e)===Ec};be.isLazy=function(e){return tn(e)===Ac};be.isMemo=function(e){return tn(e)===Rc};be.isPortal=function(e){return tn(e)===vh};be.isProfiler=function(e){return tn(e)===kc};be.isStrictMode=function(e){return tn(e)===Cc};be.isSuspense=function(e){return tn(e)===Nc};be.isSuspenseList=function(e){return tn(e)===jc};be.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ec||e===kc||e===Cc||e===Nc||e===jc||e===U3||typeof e=="object"&&e!==null&&(e.$$typeof===Ac||e.$$typeof===Rc||e.$$typeof===Tc||e.$$typeof===Ic||e.$$typeof===Pc||e.$$typeof===Tw||e.getModuleId!==void 0)};be.typeOf=tn;kw.exports=be;var z3=kw.exports;V`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;V`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;V`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;V`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;V`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;V`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;V`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;V`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;V`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;V`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;V`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;V`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;V`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const $3=V`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,V3=V`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,H3=V`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,W3=V`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,K3=V`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,yh=V`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Y3=V`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,q3=V`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,G3=V`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,X3=V`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Q3=V`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,J3=V`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Z3=V`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function eP({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=yh,iterationCount:i=1}){return Sw`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${i};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function tP(e){return e==null}function nP(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Iw(e,t){return n=>n?e():t()}function za(e){return Iw(e,()=>null)}function Hd(e){return za(()=>({opacity:0}))(e)}const Pw=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:i=1e3,fraction:o=0,keyframes:a=yh,triggerOnce:l=!1,className:c,style:p,childClassName:m,childStyle:g,children:y,onVisibilityChange:C}=e,E=I.useMemo(()=>eP({keyframes:a,duration:i}),[i,a]);return tP(y)?null:nP(y)?et(iP,{...e,animationStyles:E,children:String(y)}):z3.isFragment(y)?et(Nw,{...e,animationStyles:E}):et(I3,{children:I.Children.map(y,(S,P)=>{if(!I.isValidElement(S))return null;const w=r+(t?P*i*n:0);switch(S.type){case"ol":case"ul":return et(Iu,{children:({cx:v})=>et(S.type,{...S.props,className:v(c,S.props.className),style:Object.assign({},p,S.props.style),children:et(Pw,{...e,children:S.props.children})})});case"li":return et(Cg,{threshold:o,triggerOnce:l,onChange:C,children:({inView:v,ref:x})=>et(Iu,{children:({cx:T})=>et(S.type,{...S.props,ref:x,className:T(m,S.props.className),css:za(()=>E)(v),style:Object.assign({},g,S.props.style,Hd(!v),{animationDelay:w+"ms"})})})});default:return et(Cg,{threshold:o,triggerOnce:l,onChange:C,children:({inView:v,ref:x})=>et("div",{ref:x,className:c,css:za(()=>E)(v),style:Object.assign({},p,Hd(!v),{animationDelay:w+"ms"}),children:et(Iu,{children:({cx:T})=>et(S.type,{...S.props,className:T(m,S.props.className),style:Object.assign({},g,S.props.style)})})})})}})})},rP={display:"inline-block",whiteSpace:"pre"},iP=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:i=0,duration:o=1e3,fraction:a=0,triggerOnce:l=!1,className:c,style:p,children:m,onVisibilityChange:g}=e,{ref:y,inView:C}=Cw({triggerOnce:l,threshold:a,onChange:g});return Iw(()=>et("div",{ref:y,className:c,style:Object.assign({},p,rP),children:m.split("").map((E,S)=>et("span",{css:za(()=>t)(C),style:{animationDelay:i+S*o*r+"ms"},children:E},S))}),()=>et(Nw,{...e,children:m}))(n)},Nw=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:i,style:o,children:a,onVisibilityChange:l}=e,{ref:c,inView:p}=Cw({triggerOnce:r,threshold:n,onChange:l});return et("div",{ref:c,className:i,css:za(()=>t)(p),style:Object.assign({},o,Hd(!p)),children:a})};V`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;V`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;V`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;V`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;V`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;V`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;V`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;V`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;V`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;V`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const oP=V`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,aP=V`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,sP=V`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,lP=V`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,cP=V`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,uP=V`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,dP=V`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,fP=V`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,hP=V`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,pP=V`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,mP=V`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,gP=V`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,vP=V`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function yP(e,t,n){switch(n){case"bottom-left":return t?aP:V3;case"bottom-right":return t?sP:H3;case"down":return e?t?cP:K3:t?lP:W3;case"left":return e?t?dP:Y3:t?uP:yh;case"right":return e?t?hP:G3:t?fP:q3;case"top-left":return t?pP:X3;case"top-right":return t?mP:Q3;case"up":return e?t?vP:Z3:t?gP:J3;default:return t?oP:$3}}const wP=e=>{const{big:t=!1,direction:n,reverse:r=!1,...i}=e,o=I.useMemo(()=>yP(t,r,n),[t,n,r]);return et(Pw,{keyframes:o,...i})};V`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;V`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;V`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;V`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;V`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;V`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;V`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;V`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;V`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;V`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;V`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;V`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;V`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;V`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;V`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;V`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;V`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;V`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;V`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;V`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;V`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;V`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;V`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;V`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;V`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;V`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;V`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;V`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;V`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;V`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;V`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;V`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;V`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;V`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;V`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;V`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;V`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const xP=()=>{const e=To(),[t,n]=I.useState([]),[r,i]=I.useState("asc"),o=()=>{const m=[...t];r==="asc"?m.sort((g,y)=>g.average_cost-y.average_cost):m.sort((g,y)=>y.average_cost-g.average_cost),n(m)},a=m=>{i(m.target.value),o()},[l,c]=I.useState(!0);I.useEffect(()=>{setTimeout(()=>{p()},2e3)},[]);const p=()=>{c(!1)};return d.jsxs("div",{className:"mx-10",children:[d.jsxs("h3",{className:"text-3xl font-bold underline text-center",children:["Tourist Spot : ",e.length]}),d.jsx("br",{}),d.jsx("br",{}),d.jsx("label",{htmlFor:"sort",className:"text-center",children:"Sort by Average Cost:"}),d.jsxs("select",{id:"sort",onChange:a,value:r,className:"",children:[d.jsx("option",{value:"asc",children:"Low to High"}),d.jsx("option",{value:"desc",children:"High to Low"})]}),d.jsx("br",{}),d.jsx("br",{}),l?d.jsx("span",{className:"loading loading-bars loading-lg text-center"}):d.jsx(wP,{children:d.jsx("div",{className:"grid md:grid-cols-3 md:gap-10 mx-5 ",children:e.map(m=>d.jsx(Jy,{tspot:m},m._id))})})]})};var jw={exports:{}};/*!
* sweetalert2 v11.10.8
* Released under the MIT License.
*/(function(e,t){(function(n,r){e.exports=r()})(fr,function(){function n(h,s,u){if(typeof h=="function"?h===s:h.has(s))return arguments.length<3?s:u;throw new TypeError("Private element is not present on this object")}function r(h,s,u){return s=P(s),x(h,l()?Reflect.construct(s,u||[],P(h).constructor):s.apply(h,u))}function i(h,s){return h.get(n(h,s))}function o(h,s,u){return h.set(n(h,s),u),u}function a(h,s,u){if(l())return Reflect.construct.apply(null,arguments);var f=[null];f.push.apply(f,s);var _=new(h.bind.apply(h,f));return u&&w(_,u.prototype),_}function l(){try{var h=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(l=function(){return!!h})()}function c(h,s){var u=h==null?null:typeof Symbol<"u"&&h[Symbol.iterator]||h["@@iterator"];if(u!=null){var f,_,O,W,se=[],le=!0,Me=!1;try{if(O=(u=u.call(h)).next,s===0){if(Object(u)!==u)return;le=!1}else for(;!(le=(f=O.call(u)).done)&&(se.push(f.value),se.length!==s);le=!0);}catch(Lo){Me=!0,_=Lo}finally{try{if(!le&&u.return!=null&&(W=u.return(),Object(W)!==W))return}finally{if(Me)throw _}}return se}}function p(h,s){if(typeof h!="object"||!h)return h;var u=h[Symbol.toPrimitive];if(u!==void 0){var f=u.call(h,s||"default");if(typeof f!="object")return f;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(h)}function m(h){var s=p(h,"string");return typeof s=="symbol"?s:s+""}function g(h){"@babel/helpers - typeof";return g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},g(h)}function y(h,s){if(!(h instanceof s))throw new TypeError("Cannot call a class as a function")}function C(h,s){for(var u=0;u<s.length;u++){var f=s[u];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(h,m(f.key),f)}}function E(h,s,u){return s&&C(h.prototype,s),u&&C(h,u),Object.defineProperty(h,"prototype",{writable:!1}),h}function S(h,s){if(typeof s!="function"&&s!==null)throw new TypeError("Super expression must either be null or a function");h.prototype=Object.create(s&&s.prototype,{constructor:{value:h,writable:!0,configurable:!0}}),Object.defineProperty(h,"prototype",{writable:!1}),s&&w(h,s)}function P(h){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(u){return u.__proto__||Object.getPrototypeOf(u)},P(h)}function w(h,s){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(f,_){return f.__proto__=_,f},w(h,s)}function v(h){if(h===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return h}function x(h,s){if(s&&(typeof s=="object"||typeof s=="function"))return s;if(s!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return v(h)}function T(h,s){for(;!Object.prototype.hasOwnProperty.call(h,s)&&(h=P(h),h!==null););return h}function L(){return typeof Reflect<"u"&&Reflect.get?L=Reflect.get.bind():L=function(s,u,f){var _=T(s,u);if(_){var O=Object.getOwnPropertyDescriptor(_,u);return O.get?O.get.call(arguments.length<3?s:f):O.value}},L.apply(this,arguments)}function M(h,s){return F(h)||c(h,s)||Q(h,s)||_e()}function b(h){return A(h)||z(h)||Q(h)||he()}function A(h){if(Array.isArray(h))return oe(h)}function F(h){if(Array.isArray(h))return h}function z(h){if(typeof Symbol<"u"&&h[Symbol.iterator]!=null||h["@@iterator"]!=null)return Array.from(h)}function Q(h,s){if(h){if(typeof h=="string")return oe(h,s);var u=Object.prototype.toString.call(h).slice(8,-1);if(u==="Object"&&h.constructor&&(u=h.constructor.name),u==="Map"||u==="Set")return Array.from(h);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return oe(h,s)}}function oe(h,s){(s==null||s>h.length)&&(s=h.length);for(var u=0,f=new Array(s);u<s;u++)f[u]=h[u];return f}function he(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _e(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function He(h,s){if(s.has(h))throw new TypeError("Cannot initialize the same private elements twice on an object")}function gt(h,s,u){He(h,s),s.set(h,u)}var We=100,R={},X=function(){R.previousActiveElement instanceof HTMLElement?(R.previousActiveElement.focus(),R.previousActiveElement=null):document.body&&document.body.focus()},J=function(s){return new Promise(function(u){if(!s)return u();var f=window.scrollX,_=window.scrollY;R.restoreFocusTimeout=setTimeout(function(){X(),u()},We),window.scrollTo(f,_)})},ie="swal2-",ne=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"],N=ne.reduce(function(h,s){return h[s]=ie+s,h},{}),Se=["success","warning","info","question","error"],ye=Se.reduce(function(h,s){return h[s]=ie+s,h},{}),Ce="SweetAlert2:",De=function(s){return s.charAt(0).toUpperCase()+s.slice(1)},Ke=function(s){console.warn("".concat(Ce," ").concat(g(s)==="object"?s.join(" "):s))},On=function(s){console.error("".concat(Ce," ").concat(s))},rs=[],Oc=function(s){rs.includes(s)||(rs.push(s),Ke(s))},vt=function(s,u){Oc('"'.concat(s,'" is deprecated and will be removed in the next major release. Please use "').concat(u,'" instead.'))},vn=function(s){return typeof s=="function"?s():s},bi=function(s){return s&&typeof s.toPromise=="function"},Hr=function(s){return bi(s)?s.toPromise():Promise.resolve(s)},nn=function(s){return s&&Promise.resolve(s)===s},ct=function(){return document.body.querySelector(".".concat(N.container))},Wr=function(s){var u=ct();return u?u.querySelector(s):null},yt=function(s){return Wr(".".concat(s))},pe=function(){return yt(N.popup)},Kr=function(){return yt(N.icon)},Yr=function(){return yt(N["icon-content"])},sr=function(){return yt(N.title)},_i=function(){return yt(N["html-container"])},Si=function(){return yt(N.image)},$t=function(){return yt(N["progress-steps"])},yn=function(){return yt(N["validation-message"])},Rt=function(){return Wr(".".concat(N.actions," .").concat(N.confirm))},rn=function(){return Wr(".".concat(N.actions," .").concat(N.cancel))},Ln=function(){return Wr(".".concat(N.actions," .").concat(N.deny))},wn=function(){return yt(N["input-label"])},Dn=function(){return Wr(".".concat(N.loader))},lr=function(){return yt(N.actions)},Ro=function(){return yt(N.footer)},Ei=function(){return yt(N["timer-progress-bar"])},Ci=function(){return yt(N.close)},ki=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,Ti=function(){var s=pe();if(!s)return[];var u=s.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),f=Array.from(u).sort(function(W,se){var le=parseInt(W.getAttribute("tabindex")||"0"),Me=parseInt(se.getAttribute("tabindex")||"0");return le>Me?1:le<Me?-1:0}),_=s.querySelectorAll(ki),O=Array.from(_).filter(function(W){return W.getAttribute("tabindex")!=="-1"});return b(new Set(f.concat(O))).filter(function(W){return ae(W)})},qr=function(){return Vt(document.body,N.shown)&&!Vt(document.body,N["toast-shown"])&&!Vt(document.body,N["no-backdrop"])},Ii=function(){var s=pe();return s?Vt(s,N.toast):!1},is=function(){var s=pe();return s?s.hasAttribute("data-loading"):!1},wt=function(s,u){if(s.textContent="",u){var f=new DOMParser,_=f.parseFromString(u,"text/html"),O=_.querySelector("head");O&&Array.from(O.childNodes).forEach(function(se){s.appendChild(se)});var W=_.querySelector("body");W&&Array.from(W.childNodes).forEach(function(se){se instanceof HTMLVideoElement||se instanceof HTMLAudioElement?s.appendChild(se.cloneNode(!0)):s.appendChild(se)})}},Vt=function(s,u){if(!u)return!1;for(var f=u.split(/\s+/),_=0;_<f.length;_++)if(!s.classList.contains(f[_]))return!1;return!0},Lc=function(s,u){Array.from(s.classList).forEach(function(f){!Object.values(N).includes(f)&&!Object.values(ye).includes(f)&&!Object.values(u.showClass||{}).includes(f)&&s.classList.remove(f)})},k=function(s,u,f){if(Lc(s,u),u.customClass&&u.customClass[f]){if(typeof u.customClass[f]!="string"&&!u.customClass[f].forEach){Ke("Invalid type of customClass.".concat(f,'! Expected string or iterable object, got "').concat(g(u.customClass[f]),'"'));return}B(s,u.customClass[f])}},j=function(s,u){if(!u)return null;switch(u){case"select":case"textarea":case"file":return s.querySelector(".".concat(N.popup," > .").concat(N[u]));case"checkbox":return s.querySelector(".".concat(N.popup," > .").concat(N.checkbox," input"));case"radio":return s.querySelector(".".concat(N.popup," > .").concat(N.radio," input:checked"))||s.querySelector(".".concat(N.popup," > .").concat(N.radio," input:first-child"));case"range":return s.querySelector(".".concat(N.popup," > .").concat(N.range," input"));default:return s.querySelector(".".concat(N.popup," > .").concat(N.input))}},D=function(s){if(s.focus(),s.type!=="file"){var u=s.value;s.value="",s.value=u}},$=function(s,u,f){!s||!u||(typeof u=="string"&&(u=u.split(/\s+/).filter(Boolean)),u.forEach(function(_){Array.isArray(s)?s.forEach(function(O){f?O.classList.add(_):O.classList.remove(_)}):f?s.classList.add(_):s.classList.remove(_)}))},B=function(s,u){$(s,u,!0)},Z=function(s,u){$(s,u,!1)},Y=function(s,u){for(var f=Array.from(s.children),_=0;_<f.length;_++){var O=f[_];if(O instanceof HTMLElement&&Vt(O,u))return O}},H=function(s,u,f){f==="".concat(parseInt(f))&&(f=parseInt(f)),f||parseInt(f)===0?s.style.setProperty(u,typeof f=="number"?"".concat(f,"px"):f):s.style.removeProperty(u)},G=function(s){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";s&&(s.style.display=u)},q=function(s){s&&(s.style.display="none")},Fe=function(s){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"block";s&&new MutationObserver(function(){ee(s,s.innerHTML,u)}).observe(s,{childList:!0,subtree:!0})},Ye=function(s,u,f,_){var O=s.querySelector(u);O&&O.style.setProperty(f,_)},ee=function(s,u){var f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";u?G(s,f):q(s)},ae=function(s){return!!(s&&(s.offsetWidth||s.offsetHeight||s.getClientRects().length))},qe=function(){return!ae(Rt())&&!ae(Ln())&&!ae(rn())},cr=function(s){return s.scrollHeight>s.clientHeight},on=function(s){var u=window.getComputedStyle(s),f=parseFloat(u.getPropertyValue("animation-duration")||"0"),_=parseFloat(u.getPropertyValue("transition-duration")||"0");return f>0||_>0},xn=function(s){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,f=Ei();f&&ae(f)&&(u&&(f.style.transition="none",f.style.width="100%"),setTimeout(function(){f.style.transition="width ".concat(s/1e3,"s linear"),f.style.width="0%"},10))},ur=function(){var s=Ei();if(s){var u=parseInt(window.getComputedStyle(s).width);s.style.removeProperty("transition"),s.style.width="100%";var f=parseInt(window.getComputedStyle(s).width),_=u/f*100;s.style.width="".concat(_,"%")}},Mn=function(){return typeof window>"u"||typeof document>"u"},Ht=`
 <div aria-labelledby="`.concat(N.title,'" aria-describedby="').concat(N["html-container"],'" class="').concat(N.popup,`" tabindex="-1">
   <button type="button" class="`).concat(N.close,`"></button>
   <ul class="`).concat(N["progress-steps"],`"></ul>
   <div class="`).concat(N.icon,`"></div>
   <img class="`).concat(N.image,`" />
   <h2 class="`).concat(N.title,'" id="').concat(N.title,`"></h2>
   <div class="`).concat(N["html-container"],'" id="').concat(N["html-container"],`"></div>
   <input class="`).concat(N.input,'" id="').concat(N.input,`" />
   <input type="file" class="`).concat(N.file,`" />
   <div class="`).concat(N.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(N.select,'" id="').concat(N.select,`"></select>
   <div class="`).concat(N.radio,`"></div>
   <label class="`).concat(N.checkbox,`">
     <input type="checkbox" id="`).concat(N.checkbox,`" />
     <span class="`).concat(N.label,`"></span>
   </label>
   <textarea class="`).concat(N.textarea,'" id="').concat(N.textarea,`"></textarea>
   <div class="`).concat(N["validation-message"],'" id="').concat(N["validation-message"],`"></div>
   <div class="`).concat(N.actions,`">
     <div class="`).concat(N.loader,`"></div>
     <button type="button" class="`).concat(N.confirm,`"></button>
     <button type="button" class="`).concat(N.deny,`"></button>
     <button type="button" class="`).concat(N.cancel,`"></button>
   </div>
   <div class="`).concat(N.footer,`"></div>
   <div class="`).concat(N["timer-progress-bar-container"],`">
     <div class="`).concat(N["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),Pi=function(){var s=ct();return s?(s.remove(),Z([document.documentElement,document.body],[N["no-backdrop"],N["toast-shown"],N["has-column"]]),!0):!1},Wt=function(){R.currentInstance.resetValidationMessage()},Ni=function(){var s=pe(),u=Y(s,N.input),f=Y(s,N.file),_=s.querySelector(".".concat(N.range," input")),O=s.querySelector(".".concat(N.range," output")),W=Y(s,N.select),se=s.querySelector(".".concat(N.checkbox," input")),le=Y(s,N.textarea);u.oninput=Wt,f.onchange=Wt,W.onchange=Wt,se.onchange=Wt,le.oninput=Wt,_.oninput=function(){Wt(),O.value=_.value},_.onchange=function(){Wt(),O.value=_.value}},ce=function(s){return typeof s=="string"?document.querySelector(s):s},it=function(s){var u=pe();u.setAttribute("role",s.toast?"alert":"dialog"),u.setAttribute("aria-live",s.toast?"polite":"assertive"),s.toast||u.setAttribute("aria-modal","true")},Ct=function(s){window.getComputedStyle(s).direction==="rtl"&&B(ct(),N.rtl)},Qe=function(s){var u=Pi();if(Mn()){On("SweetAlert2 requires document to initialize");return}var f=document.createElement("div");f.className=N.container,u&&B(f,N["no-transition"]),wt(f,Ht);var _=ce(s.target);_.appendChild(f),it(s),Ct(_),Ni()},Bn=function(s,u){s instanceof HTMLElement?u.appendChild(s):g(s)==="object"?os(s,u):s&&wt(u,s)},os=function(s,u){s.jquery?Dc(u,s):wt(u,s.toString())},Dc=function(s,u){if(s.textContent="",0 in u)for(var f=0;f in u;f++)s.appendChild(u[f].cloneNode(!0));else s.appendChild(u.cloneNode(!0))},Gr=function(){if(Mn())return!1;var h=document.createElement("div");return typeof h.style.webkitAnimation<"u"?"webkitAnimationEnd":typeof h.style.animation<"u"?"animationend":!1}(),Rw=function(s,u){var f=lr(),_=Dn();!f||!_||(!u.showConfirmButton&&!u.showDenyButton&&!u.showCancelButton?q(f):G(f),k(f,u,"actions"),Aw(f,_,u),wt(_,u.loaderHtml||""),k(_,u,"loader"))};function Aw(h,s,u){var f=Rt(),_=Ln(),O=rn();!f||!_||!O||(Mc(f,"confirm",u),Mc(_,"deny",u),Mc(O,"cancel",u),Ow(f,_,O,u),u.reverseButtons&&(u.toast?(h.insertBefore(O,f),h.insertBefore(_,f)):(h.insertBefore(O,s),h.insertBefore(_,s),h.insertBefore(f,s))))}function Ow(h,s,u,f){if(!f.buttonsStyling){Z([h,s,u],N.styled);return}B([h,s,u],N.styled),f.confirmButtonColor&&(h.style.backgroundColor=f.confirmButtonColor,B(h,N["default-outline"])),f.denyButtonColor&&(s.style.backgroundColor=f.denyButtonColor,B(s,N["default-outline"])),f.cancelButtonColor&&(u.style.backgroundColor=f.cancelButtonColor,B(u,N["default-outline"]))}function Mc(h,s,u){var f=De(s);ee(h,u["show".concat(f,"Button")],"inline-block"),wt(h,u["".concat(s,"ButtonText")]||""),h.setAttribute("aria-label",u["".concat(s,"ButtonAriaLabel")]||""),h.className=N[s],k(h,u,"".concat(s,"Button"))}var Lw=function(s,u){var f=Ci();f&&(wt(f,u.closeButtonHtml||""),k(f,u,"closeButton"),ee(f,u.showCloseButton),f.setAttribute("aria-label",u.closeButtonAriaLabel||""))},Dw=function(s,u){var f=ct();f&&(Mw(f,u.backdrop),Bw(f,u.position),Fw(f,u.grow),k(f,u,"container"))};function Mw(h,s){typeof s=="string"?h.style.background=s:s||B([document.documentElement,document.body],N["no-backdrop"])}function Bw(h,s){s&&(s in N?B(h,N[s]):(Ke('The "position" parameter is not valid, defaulting to "center"'),B(h,N.center)))}function Fw(h,s){s&&B(h,N["grow-".concat(s)])}var ke={innerParams:new WeakMap,domCache:new WeakMap},Uw=["input","file","range","select","radio","checkbox","textarea"],zw=function(s,u){var f=pe();if(f){var _=ke.innerParams.get(s),O=!_||u.input!==_.input;Uw.forEach(function(W){var se=Y(f,N[W]);se&&(Hw(W,u.inputAttributes),se.className=N[W],O&&q(se))}),u.input&&(O&&$w(u),Ww(u))}},$w=function(s){if(s.input){if(!Ue[s.input]){On("Unexpected type of input! Expected ".concat(Object.keys(Ue).join(" | "),', got "').concat(s.input,'"'));return}var u=wh(s.input),f=Ue[s.input](u,s);G(u),s.inputAutoFocus&&setTimeout(function(){D(f)})}},Vw=function(s){for(var u=0;u<s.attributes.length;u++){var f=s.attributes[u].name;["id","type","value","style"].includes(f)||s.removeAttribute(f)}},Hw=function(s,u){var f=j(pe(),s);if(f){Vw(f);for(var _ in u)f.setAttribute(_,u[_])}},Ww=function(s){var u=wh(s.input);g(s.customClass)==="object"&&B(u,s.customClass.input)},Bc=function(s,u){(!s.placeholder||u.inputPlaceholder)&&(s.placeholder=u.inputPlaceholder)},Ao=function(s,u,f){if(f.inputLabel){var _=document.createElement("label"),O=N["input-label"];_.setAttribute("for",s.id),_.className=O,g(f.customClass)==="object"&&B(_,f.customClass.inputLabel),_.innerText=f.inputLabel,u.insertAdjacentElement("beforebegin",_)}},wh=function(s){return Y(pe(),N[s]||N.input)},as=function(s,u){["string","number"].includes(g(u))?s.value="".concat(u):nn(u)||Ke('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(g(u),'"'))},Ue={};Ue.text=Ue.email=Ue.password=Ue.number=Ue.tel=Ue.url=Ue.search=Ue.date=Ue["datetime-local"]=Ue.time=Ue.week=Ue.month=function(h,s){return as(h,s.inputValue),Ao(h,h,s),Bc(h,s),h.type=s.input,h},Ue.file=function(h,s){return Ao(h,h,s),Bc(h,s),h},Ue.range=function(h,s){var u=h.querySelector("input"),f=h.querySelector("output");return as(u,s.inputValue),u.type=s.input,as(f,s.inputValue),Ao(u,h,s),h},Ue.select=function(h,s){if(h.textContent="",s.inputPlaceholder){var u=document.createElement("option");wt(u,s.inputPlaceholder),u.value="",u.disabled=!0,u.selected=!0,h.appendChild(u)}return Ao(h,h,s),h},Ue.radio=function(h){return h.textContent="",h},Ue.checkbox=function(h,s){var u=j(pe(),"checkbox");u.value="1",u.checked=!!s.inputValue;var f=h.querySelector("span");return wt(f,s.inputPlaceholder),u},Ue.textarea=function(h,s){as(h,s.inputValue),Bc(h,s),Ao(h,h,s);var u=function(_){return parseInt(window.getComputedStyle(_).marginLeft)+parseInt(window.getComputedStyle(_).marginRight)};return setTimeout(function(){if("MutationObserver"in window){var f=parseInt(window.getComputedStyle(pe()).width),_=function(){if(document.body.contains(h)){var W=h.offsetWidth+u(h);W>f?pe().style.width="".concat(W,"px"):H(pe(),"width",s.width)}};new MutationObserver(_).observe(h,{attributes:!0,attributeFilter:["style"]})}}),h};var Kw=function(s,u){var f=_i();f&&(Fe(f),k(f,u,"htmlContainer"),u.html?(Bn(u.html,f),G(f,"block")):u.text?(f.textContent=u.text,G(f,"block")):q(f),zw(s,u))},Yw=function(s,u){var f=Ro();f&&(Fe(f),ee(f,u.footer,"block"),u.footer&&Bn(u.footer,f),k(f,u,"footer"))},qw=function(s,u){var f=ke.innerParams.get(s),_=Kr();if(_){if(f&&u.icon===f.icon){bh(_,u),xh(_,u);return}if(!u.icon&&!u.iconHtml){q(_);return}if(u.icon&&Object.keys(ye).indexOf(u.icon)===-1){On('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(u.icon,'"')),q(_);return}G(_),bh(_,u),xh(_,u),B(_,u.showClass&&u.showClass.icon)}},xh=function(s,u){for(var f=0,_=Object.entries(ye);f<_.length;f++){var O=M(_[f],2),W=O[0],se=O[1];u.icon!==W&&Z(s,se)}B(s,u.icon&&ye[u.icon]),Jw(s,u),Gw(),k(s,u,"icon")},Gw=function(){var s=pe();if(s)for(var u=window.getComputedStyle(s).getPropertyValue("background-color"),f=s.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),_=0;_<f.length;_++)f[_].style.backgroundColor=u},Xw=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,Qw=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,bh=function(s,u){if(!(!u.icon&&!u.iconHtml)){var f=s.innerHTML,_="";if(u.iconHtml)_=_h(u.iconHtml);else if(u.icon==="success")_=Xw,f=f.replace(/ style=".*?"/g,"");else if(u.icon==="error")_=Qw;else if(u.icon){var O={question:"?",warning:"!",info:"i"};_=_h(O[u.icon])}f.trim()!==_.trim()&&wt(s,_)}},Jw=function(s,u){if(u.iconColor){s.style.color=u.iconColor,s.style.borderColor=u.iconColor;for(var f=0,_=[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"];f<_.length;f++){var O=_[f];Ye(s,O,"background-color",u.iconColor)}Ye(s,".swal2-success-ring","border-color",u.iconColor)}},_h=function(s){return'<div class="'.concat(N["icon-content"],'">').concat(s,"</div>")},Zw=function(s,u){var f=Si();if(f){if(!u.imageUrl){q(f);return}G(f,""),f.setAttribute("src",u.imageUrl),f.setAttribute("alt",u.imageAlt||""),H(f,"width",u.imageWidth),H(f,"height",u.imageHeight),f.className=N.image,k(f,u,"image")}},e1=function(s,u){var f=ct(),_=pe();if(!(!f||!_)){if(u.toast){H(f,"width",u.width),_.style.width="100%";var O=Dn();O&&_.insertBefore(O,Kr())}else H(_,"width",u.width);H(_,"padding",u.padding),u.color&&(_.style.color=u.color),u.background&&(_.style.background=u.background),q(yn()),t1(_,u)}},t1=function(s,u){var f=u.showClass||{};s.className="".concat(N.popup," ").concat(ae(s)?f.popup:""),u.toast?(B([document.documentElement,document.body],N["toast-shown"]),B(s,N.toast)):B(s,N.modal),k(s,u,"popup"),typeof u.customClass=="string"&&B(s,u.customClass),u.icon&&B(s,N["icon-".concat(u.icon)])},n1=function(s,u){var f=$t();if(f){var _=u.progressSteps,O=u.currentProgressStep;if(!_||_.length===0||O===void 0){q(f);return}G(f),f.textContent="",O>=_.length&&Ke("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),_.forEach(function(W,se){var le=r1(W);if(f.appendChild(le),se===O&&B(le,N["active-progress-step"]),se!==_.length-1){var Me=i1(u);f.appendChild(Me)}})}},r1=function(s){var u=document.createElement("li");return B(u,N["progress-step"]),wt(u,s),u},i1=function(s){var u=document.createElement("li");return B(u,N["progress-step-line"]),s.progressStepsDistance&&H(u,"width",s.progressStepsDistance),u},o1=function(s,u){var f=sr();f&&(Fe(f),ee(f,u.title||u.titleText,"block"),u.title&&Bn(u.title,f),u.titleText&&(f.innerText=u.titleText),k(f,u,"title"))},Sh=function(s,u){e1(s,u),Dw(s,u),n1(s,u),qw(s,u),Zw(s,u),o1(s,u),Lw(s,u),Kw(s,u),Rw(s,u),Yw(s,u);var f=pe();typeof u.didRender=="function"&&f&&u.didRender(f)},a1=function(){return ae(pe())},Eh=function(){var s;return(s=Rt())===null||s===void 0?void 0:s.click()},s1=function(){var s;return(s=Ln())===null||s===void 0?void 0:s.click()},l1=function(){var s;return(s=rn())===null||s===void 0?void 0:s.click()},ji=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Ch=function(s){s.keydownTarget&&s.keydownHandlerAdded&&(s.keydownTarget.removeEventListener("keydown",s.keydownHandler,{capture:s.keydownListenerCapture}),s.keydownHandlerAdded=!1)},c1=function(s,u,f){Ch(s),u.toast||(s.keydownHandler=function(_){return d1(u,_,f)},s.keydownTarget=u.keydownListenerCapture?window:pe(),s.keydownListenerCapture=u.keydownListenerCapture,s.keydownTarget.addEventListener("keydown",s.keydownHandler,{capture:s.keydownListenerCapture}),s.keydownHandlerAdded=!0)},Fc=function(s,u){var f,_=Ti();if(_.length){s=s+u,s===_.length?s=0:s===-1&&(s=_.length-1),_[s].focus();return}(f=pe())===null||f===void 0||f.focus()},kh=["ArrowRight","ArrowDown"],u1=["ArrowLeft","ArrowUp"],d1=function(s,u,f){s&&(u.isComposing||u.keyCode===229||(s.stopKeydownPropagation&&u.stopPropagation(),u.key==="Enter"?f1(u,s):u.key==="Tab"?h1(u):[].concat(kh,u1).includes(u.key)?p1(u.key):u.key==="Escape"&&m1(u,s,f)))},f1=function(s,u){if(vn(u.allowEnterKey)){var f=j(pe(),u.input);if(s.target&&f&&s.target instanceof HTMLElement&&s.target.outerHTML===f.outerHTML){if(["textarea","file"].includes(u.input))return;Eh(),s.preventDefault()}}},h1=function(s){for(var u=s.target,f=Ti(),_=-1,O=0;O<f.length;O++)if(u===f[O]){_=O;break}s.shiftKey?Fc(_,-1):Fc(_,1),s.stopPropagation(),s.preventDefault()},p1=function(s){var u=lr(),f=Rt(),_=Ln(),O=rn();if(!(!u||!f||!_||!O)){var W=[f,_,O];if(!(document.activeElement instanceof HTMLElement&&!W.includes(document.activeElement))){var se=kh.includes(s)?"nextElementSibling":"previousElementSibling",le=document.activeElement;if(le){for(var Me=0;Me<u.children.length;Me++){if(le=le[se],!le)return;if(le instanceof HTMLButtonElement&&ae(le))break}le instanceof HTMLButtonElement&&le.focus()}}}},m1=function(s,u,f){vn(u.allowEscapeKey)&&(s.preventDefault(),f(ji.esc))},Ri={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},g1=function(){var s=ct(),u=Array.from(document.body.children);u.forEach(function(f){f.contains(s)||(f.hasAttribute("aria-hidden")&&f.setAttribute("data-previous-aria-hidden",f.getAttribute("aria-hidden")||""),f.setAttribute("aria-hidden","true"))})},Th=function(){var s=Array.from(document.body.children);s.forEach(function(u){u.hasAttribute("data-previous-aria-hidden")?(u.setAttribute("aria-hidden",u.getAttribute("data-previous-aria-hidden")||""),u.removeAttribute("data-previous-aria-hidden")):u.removeAttribute("aria-hidden")})},Ih=typeof window<"u"&&!!window.GestureEvent,v1=function(){if(Ih&&!Vt(document.body,N.iosfix)){var s=document.body.scrollTop;document.body.style.top="".concat(s*-1,"px"),B(document.body,N.iosfix),y1()}},y1=function(){var s=ct();if(s){var u;s.ontouchstart=function(f){u=w1(f)},s.ontouchmove=function(f){u&&(f.preventDefault(),f.stopPropagation())}}},w1=function(s){var u=s.target,f=ct(),_=_i();return!f||!_||x1(s)||b1(s)?!1:u===f||!cr(f)&&u instanceof HTMLElement&&u.tagName!=="INPUT"&&u.tagName!=="TEXTAREA"&&!(cr(_)&&_.contains(u))},x1=function(s){return s.touches&&s.touches.length&&s.touches[0].touchType==="stylus"},b1=function(s){return s.touches&&s.touches.length>1},_1=function(){if(Vt(document.body,N.iosfix)){var s=parseInt(document.body.style.top,10);Z(document.body,N.iosfix),document.body.style.top="",document.body.scrollTop=s*-1}},S1=function(){var s=document.createElement("div");s.className=N["scrollbar-measure"],document.body.appendChild(s);var u=s.getBoundingClientRect().width-s.clientWidth;return document.body.removeChild(s),u},Ai=null,E1=function(s){Ai===null&&(document.body.scrollHeight>window.innerHeight||s==="scroll")&&(Ai=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(Ai+S1(),"px"))},C1=function(){Ai!==null&&(document.body.style.paddingRight="".concat(Ai,"px"),Ai=null)};function Ph(h,s,u,f){Ii()?jh(h,f):(J(u).then(function(){return jh(h,f)}),Ch(R)),Ih?(s.setAttribute("style","display:none !important"),s.removeAttribute("class"),s.innerHTML=""):s.remove(),qr()&&(C1(),_1(),Th()),k1()}function k1(){Z([document.documentElement,document.body],[N.shown,N["height-auto"],N["no-backdrop"],N["toast-shown"]])}function dr(h){h=I1(h);var s=Ri.swalPromiseResolve.get(this),u=T1(this);this.isAwaitingPromise?h.isDismissed||(Oo(this),s(h)):u&&s(h)}var T1=function(s){var u=pe();if(!u)return!1;var f=ke.innerParams.get(s);if(!f||Vt(u,f.hideClass.popup))return!1;Z(u,f.showClass.popup),B(u,f.hideClass.popup);var _=ct();return Z(_,f.showClass.backdrop),B(_,f.hideClass.backdrop),P1(s,u,f),!0};function Nh(h){var s=Ri.swalPromiseReject.get(this);Oo(this),s&&s(h)}var Oo=function(s){s.isAwaitingPromise&&(delete s.isAwaitingPromise,ke.innerParams.get(s)||s._destroy())},I1=function(s){return typeof s>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},s)},P1=function(s,u,f){var _=ct(),O=Gr&&on(u);typeof f.willClose=="function"&&f.willClose(u),O?N1(s,u,_,f.returnFocus,f.didClose):Ph(s,_,f.returnFocus,f.didClose)},N1=function(s,u,f,_,O){Gr&&(R.swalCloseEventFinishedCallback=Ph.bind(null,s,f,_,O),u.addEventListener(Gr,function(W){W.target===u&&(R.swalCloseEventFinishedCallback(),delete R.swalCloseEventFinishedCallback)}))},jh=function(s,u){setTimeout(function(){typeof u=="function"&&u.bind(s.params)(),s._destroy&&s._destroy()})},Oi=function(s){var u=pe();if(u||new ds,u=pe(),!!u){var f=Dn();Ii()?q(Kr()):j1(u,s),G(f),u.setAttribute("data-loading","true"),u.setAttribute("aria-busy","true"),u.focus()}},j1=function(s,u){var f=lr(),_=Dn();!f||!_||(!u&&ae(Rt())&&(u=Rt()),G(f),u&&(q(u),_.setAttribute("data-button-to-replace",u.className),f.insertBefore(_,u)),B([s,f],N.loading))},R1=function(s,u){u.input==="select"||u.input==="radio"?M1(s,u):["text","email","number","tel","textarea"].some(function(f){return f===u.input})&&(bi(u.inputValue)||nn(u.inputValue))&&(Oi(Rt()),B1(s,u))},A1=function(s,u){var f=s.getInput();if(!f)return null;switch(u.input){case"checkbox":return O1(f);case"radio":return L1(f);case"file":return D1(f);default:return u.inputAutoTrim?f.value.trim():f.value}},O1=function(s){return s.checked?1:0},L1=function(s){return s.checked?s.value:null},D1=function(s){return s.files&&s.files.length?s.getAttribute("multiple")!==null?s.files:s.files[0]:null},M1=function(s,u){var f=pe();if(f){var _=function(W){u.input==="select"?F1(f,Rh(W),u):u.input==="radio"&&U1(f,Rh(W),u)};bi(u.inputOptions)||nn(u.inputOptions)?(Oi(Rt()),Hr(u.inputOptions).then(function(O){s.hideLoading(),_(O)})):g(u.inputOptions)==="object"?_(u.inputOptions):On("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(g(u.inputOptions)))}},B1=function(s,u){var f=s.getInput();f&&(q(f),Hr(u.inputValue).then(function(_){f.value=u.input==="number"?"".concat(parseFloat(_)||0):"".concat(_),G(f),f.focus(),s.hideLoading()}).catch(function(_){On("Error in inputValue promise: ".concat(_)),f.value="",G(f),f.focus(),s.hideLoading()}))};function F1(h,s,u){var f=Y(h,N.select);if(f){var _=function(W,se,le){var Me=document.createElement("option");Me.value=le,wt(Me,se),Me.selected=Ah(le,u.inputValue),W.appendChild(Me)};s.forEach(function(O){var W=O[0],se=O[1];if(Array.isArray(se)){var le=document.createElement("optgroup");le.label=W,le.disabled=!1,f.appendChild(le),se.forEach(function(Me){return _(le,Me[1],Me[0])})}else _(f,se,W)}),f.focus()}}function U1(h,s,u){var f=Y(h,N.radio);if(f){s.forEach(function(O){var W=O[0],se=O[1],le=document.createElement("input"),Me=document.createElement("label");le.type="radio",le.name=N.radio,le.value=W,Ah(W,u.inputValue)&&(le.checked=!0);var Lo=document.createElement("span");wt(Lo,se),Lo.className=N.label,Me.appendChild(le),Me.appendChild(Lo),f.appendChild(Me)});var _=f.querySelectorAll("input");_.length&&_[0].focus()}}var Rh=function h(s){var u=[];return s instanceof Map?s.forEach(function(f,_){var O=f;g(O)==="object"&&(O=h(O)),u.push([_,O])}):Object.keys(s).forEach(function(f){var _=s[f];g(_)==="object"&&(_=h(_)),u.push([f,_])}),u},Ah=function(s,u){return!!u&&u.toString()===s.toString()},ss=void 0,z1=function(s){var u=ke.innerParams.get(s);s.disableButtons(),u.input?Oh(s,"confirm"):zc(s,!0)},$1=function(s){var u=ke.innerParams.get(s);s.disableButtons(),u.returnInputValueOnDeny?Oh(s,"deny"):Uc(s,!1)},V1=function(s,u){s.disableButtons(),u(ji.cancel)},Oh=function(s,u){var f=ke.innerParams.get(s);if(!f.input){On('The "input" parameter is needed to be set when using returnInputValueOn'.concat(De(u)));return}var _=s.getInput(),O=A1(s,f);f.inputValidator?H1(s,O,u):_&&!_.checkValidity()?(s.enableButtons(),s.showValidationMessage(f.validationMessage||_.validationMessage)):u==="deny"?Uc(s,O):zc(s,O)},H1=function(s,u,f){var _=ke.innerParams.get(s);s.disableInput();var O=Promise.resolve().then(function(){return Hr(_.inputValidator(u,_.validationMessage))});O.then(function(W){s.enableButtons(),s.enableInput(),W?s.showValidationMessage(W):f==="deny"?Uc(s,u):zc(s,u)})},Uc=function(s,u){var f=ke.innerParams.get(s||ss);if(f.showLoaderOnDeny&&Oi(Ln()),f.preDeny){s.isAwaitingPromise=!0;var _=Promise.resolve().then(function(){return Hr(f.preDeny(u,f.validationMessage))});_.then(function(O){O===!1?(s.hideLoading(),Oo(s)):s.close({isDenied:!0,value:typeof O>"u"?u:O})}).catch(function(O){return Dh(s||ss,O)})}else s.close({isDenied:!0,value:u})},Lh=function(s,u){s.close({isConfirmed:!0,value:u})},Dh=function(s,u){s.rejectPromise(u)},zc=function(s,u){var f=ke.innerParams.get(s||ss);if(f.showLoaderOnConfirm&&Oi(),f.preConfirm){s.resetValidationMessage(),s.isAwaitingPromise=!0;var _=Promise.resolve().then(function(){return Hr(f.preConfirm(u,f.validationMessage))});_.then(function(O){ae(yn())||O===!1?(s.hideLoading(),Oo(s)):Lh(s,typeof O>"u"?u:O)}).catch(function(O){return Dh(s||ss,O)})}else Lh(s,u)};function ls(){var h=ke.innerParams.get(this);if(h){var s=ke.domCache.get(this);q(s.loader),Ii()?h.icon&&G(Kr()):W1(s),Z([s.popup,s.actions],N.loading),s.popup.removeAttribute("aria-busy"),s.popup.removeAttribute("data-loading"),s.confirmButton.disabled=!1,s.denyButton.disabled=!1,s.cancelButton.disabled=!1}}var W1=function(s){var u=s.popup.getElementsByClassName(s.loader.getAttribute("data-button-to-replace"));u.length?G(u[0],"inline-block"):qe()&&q(s.actions)};function Mh(){var h=ke.innerParams.get(this),s=ke.domCache.get(this);return s?j(s.popup,h.input):null}function Bh(h,s,u){var f=ke.domCache.get(h);s.forEach(function(_){f[_].disabled=u})}function Fh(h,s){var u=pe();if(!(!u||!h))if(h.type==="radio")for(var f=u.querySelectorAll('[name="'.concat(N.radio,'"]')),_=0;_<f.length;_++)f[_].disabled=s;else h.disabled=s}function Uh(){Bh(this,["confirmButton","denyButton","cancelButton"],!1)}function zh(){Bh(this,["confirmButton","denyButton","cancelButton"],!0)}function $h(){Fh(this.getInput(),!1)}function Vh(){Fh(this.getInput(),!0)}function Hh(h){var s=ke.domCache.get(this),u=ke.innerParams.get(this);wt(s.validationMessage,h),s.validationMessage.className=N["validation-message"],u.customClass&&u.customClass.validationMessage&&B(s.validationMessage,u.customClass.validationMessage),G(s.validationMessage);var f=this.getInput();f&&(f.setAttribute("aria-invalid","true"),f.setAttribute("aria-describedby",N["validation-message"]),D(f),B(f,N.inputerror))}function Wh(){var h=ke.domCache.get(this);h.validationMessage&&q(h.validationMessage);var s=this.getInput();s&&(s.removeAttribute("aria-invalid"),s.removeAttribute("aria-describedby"),Z(s,N.inputerror))}var Li={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},K1=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],Y1={},q1=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Kh=function(s){return Object.prototype.hasOwnProperty.call(Li,s)},Yh=function(s){return K1.indexOf(s)!==-1},qh=function(s){return Y1[s]},G1=function(s){Kh(s)||Ke('Unknown parameter "'.concat(s,'"'))},X1=function(s){q1.includes(s)&&Ke('The parameter "'.concat(s,'" is incompatible with toasts'))},Q1=function(s){var u=qh(s);u&&vt(s,u)},J1=function(s){s.backdrop===!1&&s.allowOutsideClick&&Ke('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(var u in s)G1(u),s.toast&&X1(u),Q1(u)};function Gh(h){var s=pe(),u=ke.innerParams.get(this);if(!s||Vt(s,u.hideClass.popup)){Ke("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}var f=Z1(h),_=Object.assign({},u,f);Sh(this,_),ke.innerParams.set(this,_),Object.defineProperties(this,{params:{value:Object.assign({},this.params,h),writable:!1,enumerable:!0}})}var Z1=function(s){var u={};return Object.keys(s).forEach(function(f){Yh(f)?u[f]=s[f]:Ke("Invalid parameter to update: ".concat(f))}),u};function Xh(){var h=ke.domCache.get(this),s=ke.innerParams.get(this);if(!s){Qh(this);return}h.popup&&R.swalCloseEventFinishedCallback&&(R.swalCloseEventFinishedCallback(),delete R.swalCloseEventFinishedCallback),typeof s.didDestroy=="function"&&s.didDestroy(),ex(this)}var ex=function(s){Qh(s),delete s.params,delete R.keydownHandler,delete R.keydownTarget,delete R.currentInstance},Qh=function(s){s.isAwaitingPromise?($c(ke,s),s.isAwaitingPromise=!0):($c(Ri,s),$c(ke,s),delete s.isAwaitingPromise,delete s.disableButtons,delete s.enableButtons,delete s.getInput,delete s.disableInput,delete s.enableInput,delete s.hideLoading,delete s.disableLoading,delete s.showValidationMessage,delete s.resetValidationMessage,delete s.close,delete s.closePopup,delete s.closeModal,delete s.closeToast,delete s.rejectPromise,delete s.update,delete s._destroy)},$c=function(s,u){for(var f in s)s[f].delete(u)},tx=Object.freeze({__proto__:null,_destroy:Xh,close:dr,closeModal:dr,closePopup:dr,closeToast:dr,disableButtons:zh,disableInput:Vh,disableLoading:ls,enableButtons:Uh,enableInput:$h,getInput:Mh,handleAwaitingPromise:Oo,hideLoading:ls,rejectPromise:Nh,resetValidationMessage:Wh,showValidationMessage:Hh,update:Gh}),nx=function(s,u,f){s.toast?rx(s,u,f):(ox(u),ax(u),sx(s,u,f))},rx=function(s,u,f){u.popup.onclick=function(){s&&(ix(s)||s.timer||s.input)||f(ji.close)}},ix=function(s){return!!(s.showConfirmButton||s.showDenyButton||s.showCancelButton||s.showCloseButton)},cs=!1,ox=function(s){s.popup.onmousedown=function(){s.container.onmouseup=function(u){s.container.onmouseup=function(){},u.target===s.container&&(cs=!0)}}},ax=function(s){s.container.onmousedown=function(u){u.target===s.container&&u.preventDefault(),s.popup.onmouseup=function(f){s.popup.onmouseup=function(){},(f.target===s.popup||f.target instanceof HTMLElement&&s.popup.contains(f.target))&&(cs=!0)}}},sx=function(s,u,f){u.container.onclick=function(_){if(cs){cs=!1;return}_.target===u.container&&vn(s.allowOutsideClick)&&f(ji.backdrop)}},lx=function(s){return g(s)==="object"&&s.jquery},Jh=function(s){return s instanceof Element||lx(s)},cx=function(s){var u={};return g(s[0])==="object"&&!Jh(s[0])?Object.assign(u,s[0]):["title","html","icon"].forEach(function(f,_){var O=s[_];typeof O=="string"||Jh(O)?u[f]=O:O!==void 0&&On("Unexpected type of ".concat(f,'! Expected "string" or "Element", got ').concat(g(O)))}),u};function ux(){for(var h=this,s=arguments.length,u=new Array(s),f=0;f<s;f++)u[f]=arguments[f];return a(h,u)}function dx(h){var s=function(u){function f(){return y(this,f),r(this,f,arguments)}return S(f,u),E(f,[{key:"_main",value:function(O,W){return L(P(f.prototype),"_main",this).call(this,O,Object.assign({},h,W))}}])}(this);return s}var fx=function(){return R.timeout&&R.timeout.getTimerLeft()},Zh=function(){if(R.timeout)return ur(),R.timeout.stop()},ep=function(){if(R.timeout){var s=R.timeout.start();return xn(s),s}},hx=function(){var s=R.timeout;return s&&(s.running?Zh():ep())},px=function(s){if(R.timeout){var u=R.timeout.increase(s);return xn(u,!0),u}},mx=function(){return!!(R.timeout&&R.timeout.isRunning())},tp=!1,Vc={};function gx(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";Vc[h]=this,tp||(document.body.addEventListener("click",vx),tp=!0)}var vx=function(s){for(var u=s.target;u&&u!==document;u=u.parentNode)for(var f in Vc){var _=u.getAttribute(f);if(_){Vc[f].fire({template:_});return}}},yx=Object.freeze({__proto__:null,argsToParams:cx,bindClickHandler:gx,clickCancel:l1,clickConfirm:Eh,clickDeny:s1,enableLoading:Oi,fire:ux,getActions:lr,getCancelButton:rn,getCloseButton:Ci,getConfirmButton:Rt,getContainer:ct,getDenyButton:Ln,getFocusableElements:Ti,getFooter:Ro,getHtmlContainer:_i,getIcon:Kr,getIconContent:Yr,getImage:Si,getInputLabel:wn,getLoader:Dn,getPopup:pe,getProgressSteps:$t,getTimerLeft:fx,getTimerProgressBar:Ei,getTitle:sr,getValidationMessage:yn,increaseTimer:px,isDeprecatedParameter:qh,isLoading:is,isTimerRunning:mx,isUpdatableParameter:Yh,isValidParameter:Kh,isVisible:a1,mixin:dx,resumeTimer:ep,showLoading:Oi,stopTimer:Zh,toggleTimer:hx}),wx=function(){function h(s,u){y(this,h),this.callback=s,this.remaining=u,this.running=!1,this.start()}return E(h,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}},{key:"increase",value:function(u){var f=this.running;return f&&this.stop(),this.remaining+=u,f&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}])}(),np=["swal-title","swal-html","swal-footer"],xx=function(s){var u=typeof s.template=="string"?document.querySelector(s.template):s.template;if(!u)return{};var f=u.content;Ix(f);var _=Object.assign(bx(f),_x(f),Sx(f),Ex(f),Cx(f),kx(f),Tx(f,np));return _},bx=function(s){var u={},f=Array.from(s.querySelectorAll("swal-param"));return f.forEach(function(_){Xr(_,["name","value"]);var O=_.getAttribute("name"),W=_.getAttribute("value");typeof Li[O]=="boolean"?u[O]=W!=="false":g(Li[O])==="object"?u[O]=JSON.parse(W):u[O]=W}),u},_x=function(s){var u={},f=Array.from(s.querySelectorAll("swal-function-param"));return f.forEach(function(_){var O=_.getAttribute("name"),W=_.getAttribute("value");u[O]=new Function("return ".concat(W))()}),u},Sx=function(s){var u={},f=Array.from(s.querySelectorAll("swal-button"));return f.forEach(function(_){Xr(_,["type","color","aria-label"]);var O=_.getAttribute("type");u["".concat(O,"ButtonText")]=_.innerHTML,u["show".concat(De(O),"Button")]=!0,_.hasAttribute("color")&&(u["".concat(O,"ButtonColor")]=_.getAttribute("color")),_.hasAttribute("aria-label")&&(u["".concat(O,"ButtonAriaLabel")]=_.getAttribute("aria-label"))}),u},Ex=function(s){var u={},f=s.querySelector("swal-image");return f&&(Xr(f,["src","width","height","alt"]),f.hasAttribute("src")&&(u.imageUrl=f.getAttribute("src")),f.hasAttribute("width")&&(u.imageWidth=f.getAttribute("width")),f.hasAttribute("height")&&(u.imageHeight=f.getAttribute("height")),f.hasAttribute("alt")&&(u.imageAlt=f.getAttribute("alt"))),u},Cx=function(s){var u={},f=s.querySelector("swal-icon");return f&&(Xr(f,["type","color"]),f.hasAttribute("type")&&(u.icon=f.getAttribute("type")),f.hasAttribute("color")&&(u.iconColor=f.getAttribute("color")),u.iconHtml=f.innerHTML),u},kx=function(s){var u={},f=s.querySelector("swal-input");f&&(Xr(f,["type","label","placeholder","value"]),u.input=f.getAttribute("type")||"text",f.hasAttribute("label")&&(u.inputLabel=f.getAttribute("label")),f.hasAttribute("placeholder")&&(u.inputPlaceholder=f.getAttribute("placeholder")),f.hasAttribute("value")&&(u.inputValue=f.getAttribute("value")));var _=Array.from(s.querySelectorAll("swal-input-option"));return _.length&&(u.inputOptions={},_.forEach(function(O){Xr(O,["value"]);var W=O.getAttribute("value"),se=O.innerHTML;u.inputOptions[W]=se})),u},Tx=function(s,u){var f={};for(var _ in u){var O=u[_],W=s.querySelector(O);W&&(Xr(W,[]),f[O.replace(/^swal-/,"")]=W.innerHTML.trim())}return f},Ix=function(s){var u=np.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(s.children).forEach(function(f){var _=f.tagName.toLowerCase();u.includes(_)||Ke("Unrecognized element <".concat(_,">"))})},Xr=function(s,u){Array.from(s.attributes).forEach(function(f){u.indexOf(f.name)===-1&&Ke(['Unrecognized attribute "'.concat(f.name,'" on <').concat(s.tagName.toLowerCase(),">."),"".concat(u.length?"Allowed attributes are: ".concat(u.join(", ")):"To set the value, use HTML within the element.")])})},rp=10,Px=function(s){var u=ct(),f=pe();typeof s.willOpen=="function"&&s.willOpen(f);var _=window.getComputedStyle(document.body),O=_.overflowY;Ax(u,f,s),setTimeout(function(){jx(u,f)},rp),qr()&&(Rx(u,s.scrollbarPadding,O),g1()),!Ii()&&!R.previousActiveElement&&(R.previousActiveElement=document.activeElement),typeof s.didOpen=="function"&&setTimeout(function(){return s.didOpen(f)}),Z(u,N["no-transition"])},Nx=function h(s){var u=pe();if(!(s.target!==u||!Gr)){var f=ct();u.removeEventListener(Gr,h),f.style.overflowY="auto"}},jx=function(s,u){Gr&&on(u)?(s.style.overflowY="hidden",u.addEventListener(Gr,Nx)):s.style.overflowY="auto"},Rx=function(s,u,f){v1(),u&&f!=="hidden"&&E1(f),setTimeout(function(){s.scrollTop=0})},Ax=function(s,u,f){B(s,f.showClass.backdrop),f.animation?(u.style.setProperty("opacity","0","important"),G(u,"grid"),setTimeout(function(){B(u,f.showClass.popup),u.style.removeProperty("opacity")},rp)):G(u,"grid"),B([document.documentElement,document.body],N.shown),f.heightAuto&&f.backdrop&&!f.toast&&B([document.documentElement,document.body],N["height-auto"])},ip={email:function(s,u){return/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(s)?Promise.resolve():Promise.resolve(u||"Invalid email address")},url:function(s,u){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(s)?Promise.resolve():Promise.resolve(u||"Invalid URL")}};function Ox(h){h.inputValidator||(h.input==="email"&&(h.inputValidator=ip.email),h.input==="url"&&(h.inputValidator=ip.url))}function Lx(h){(!h.target||typeof h.target=="string"&&!document.querySelector(h.target)||typeof h.target!="string"&&!h.target.appendChild)&&(Ke('Target parameter is not valid, defaulting to "body"'),h.target="body")}function Dx(h){Ox(h),h.showLoaderOnConfirm&&!h.preConfirm&&Ke(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Lx(h),typeof h.title=="string"&&(h.title=h.title.split(`
`).join("<br />")),Qe(h)}var bn,us=new WeakMap,ze=function(){function h(){if(y(this,h),gt(this,us,void 0),!(typeof window>"u")){bn=this;for(var s=arguments.length,u=new Array(s),f=0;f<s;f++)u[f]=arguments[f];var _=Object.freeze(this.constructor.argsToParams(u));this.params=_,this.isAwaitingPromise=!1,o(us,this,this._main(bn.params))}}return E(h,[{key:"_main",value:function(u){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(J1(Object.assign({},f,u)),R.currentInstance){var _=Ri.swalPromiseResolve.get(R.currentInstance),O=R.currentInstance.isAwaitingPromise;R.currentInstance._destroy(),O||_({isDismissed:!0}),qr()&&Th()}R.currentInstance=bn;var W=Bx(u,f);Dx(W),Object.freeze(W),R.timeout&&(R.timeout.stop(),delete R.timeout),clearTimeout(R.restoreFocusTimeout);var se=Fx(bn);return Sh(bn,W),ke.innerParams.set(bn,W),Mx(bn,se,W)}},{key:"then",value:function(u){return i(us,this).then(u)}},{key:"finally",value:function(u){return i(us,this).finally(u)}}])}(),Mx=function(s,u,f){return new Promise(function(_,O){var W=function(le){s.close({isDismissed:!0,dismiss:le})};Ri.swalPromiseResolve.set(s,_),Ri.swalPromiseReject.set(s,O),u.confirmButton.onclick=function(){z1(s)},u.denyButton.onclick=function(){$1(s)},u.cancelButton.onclick=function(){V1(s,W)},u.closeButton.onclick=function(){W(ji.close)},nx(f,u,W),c1(R,f,W),R1(s,f),Px(f),Ux(R,f,W),zx(u,f),setTimeout(function(){u.container.scrollTop=0})})},Bx=function(s,u){var f=xx(s),_=Object.assign({},Li,u,f,s);return _.showClass=Object.assign({},Li.showClass,_.showClass),_.hideClass=Object.assign({},Li.hideClass,_.hideClass),_.animation===!1&&(_.showClass={backdrop:"swal2-noanimation"},_.hideClass={}),_},Fx=function(s){var u={popup:pe(),container:ct(),actions:lr(),confirmButton:Rt(),denyButton:Ln(),cancelButton:rn(),loader:Dn(),closeButton:Ci(),validationMessage:yn(),progressSteps:$t()};return ke.domCache.set(s,u),u},Ux=function(s,u,f){var _=Ei();q(_),u.timer&&(s.timeout=new wx(function(){f("timer"),delete s.timeout},u.timer),u.timerProgressBar&&(G(_),k(_,u,"timerProgressBar"),setTimeout(function(){s.timeout&&s.timeout.running&&xn(u.timer)})))},zx=function(s,u){if(!u.toast){if(!vn(u.allowEnterKey)){Vx();return}$x(s,u)||Fc(-1,1)}},$x=function(s,u){return u.focusDeny&&ae(s.denyButton)?(s.denyButton.focus(),!0):u.focusCancel&&ae(s.cancelButton)?(s.cancelButton.focus(),!0):u.focusConfirm&&ae(s.confirmButton)?(s.confirmButton.focus(),!0):!1},Vx=function(){document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){var op=new Date,ap=localStorage.getItem("swal-initiation");ap?(op.getTime()-Date.parse(ap))/(1e3*60*60*24)>3&&setTimeout(function(){document.body.style.pointerEvents="none";var h=document.createElement("audio");h.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",h.loop=!0,document.body.appendChild(h),setTimeout(function(){h.play().catch(function(){})},2500)},500):localStorage.setItem("swal-initiation","".concat(op))}ze.prototype.disableButtons=zh,ze.prototype.enableButtons=Uh,ze.prototype.getInput=Mh,ze.prototype.disableInput=Vh,ze.prototype.enableInput=$h,ze.prototype.hideLoading=ls,ze.prototype.disableLoading=ls,ze.prototype.showValidationMessage=Hh,ze.prototype.resetValidationMessage=Wh,ze.prototype.close=dr,ze.prototype.closePopup=dr,ze.prototype.closeModal=dr,ze.prototype.closeToast=dr,ze.prototype.rejectPromise=Nh,ze.prototype.update=Gh,ze.prototype._destroy=Xh,Object.assign(ze,yx),Object.keys(tx).forEach(function(h){ze[h]=function(){if(bn&&bn[h]){var s;return(s=bn)[h].apply(s,arguments)}return null}}),ze.DismissReason=ji,ze.version="11.10.8";var ds=ze;return ds.default=ds,ds}),typeof fr<"u"&&fr.Sweetalert2&&(fr.swal=fr.sweetAlert=fr.Swal=fr.SweetAlert=fr.Sweetalert2),typeof document<"u"&&function(n,r){var i=n.createElement("style");if(n.getElementsByTagName("head")[0].appendChild(i),i.styleSheet)i.styleSheet.disabled||(i.styleSheet.cssText=r);else try{i.innerHTML=r}catch{i.innerText=r}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')})(jw);var bP=jw.exports;const $a=Bl(bP),_P=()=>{const e=t=>{t.preventDefault();const n=t.target,r=n.image.value,i=n.tourists_spot_name.value,o=n.country_name.value,a=n.location.value,l=n.short_description.value,c=n.average_cost.value,p=n.seasonality.value,m=n.total_visitors_per_year.value,g=n.travel_time.value,y=n.user_name.value,C=n.user_email.value,E={image:r,tourists_spot_name:i,country_name:o,location:a,short_description:l,average_cost:c,seasonality:p,total_visitors_per_year:m,travel_time:g,user_name:y,user_email:C};console.log(E),fetch("https://assignment-10-server-sable.vercel.app/TouristSpots",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(E)}).then(S=>S.json()).then(S=>{console.log(S),S.insertedId&&$a.fire({title:"Success!",text:"new spot added successfully",icon:"success",confirmButtonText:"Cool"})}),fetch("https://assignment-10-server-sable.vercel.app/Country_collection",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(E)}).then(S=>S.json()).then(S=>{console.log(S),S.insertedId&&$a.fire({title:"Success!",text:"new spot added successfully",icon:"success",confirmButtonText:"Cool"})})};return d.jsxs("div",{className:"bg-purple-500 my-5 py-10 rounded-3xl mx-20",children:[d.jsx("h2",{className:"text-center font-bold text-3xl",children:"Add Tourist Spot"}),d.jsx("div",{className:"flex justify-center py-10 mx-10 md:mx-0",children:d.jsxs("form",{onSubmit:e,className:"text-justify grid md:grid-cols-2 gap-10 md:gap-20 font-bold text-gray-900",children:[d.jsxs("div",{className:"flex flex-col md:justify-between",children:[d.jsx("label",{children:"Image URL:"}),d.jsx("input",{type:"text",name:"image",className:"py-2 px-2 rounded-md"})]}),d.jsxs("div",{className:"flex flex-col justify-between",children:[d.jsx("label",{children:"Tourist Spot Name:"}),d.jsx("input",{type:"text",name:"tourists_spot_name",className:"py-2 px-2 rounded-md"})]}),d.jsxs("div",{className:"flex flex-col justify-between",children:[d.jsx("label",{children:"Country Name:"}),d.jsxs("select",{name:"country_name",className:"py-2 px-2 rounded-md",children:[d.jsx("option",{value:"",children:"Select Country"}),d.jsx("option",{value:"Bangladesh",children:"Bangladesh"}),d.jsx("option",{value:"Malaysia",children:"Malaysia"}),d.jsx("option",{value:"Thailand",children:"Thailand"}),d.jsx("option",{value:"Indonesia",children:"Indonesia"}),d.jsx("option",{value:"Vietnam",children:" Vietnam "}),d.jsx("option",{value:"Combodia",children:" Combodia "})]})]}),d.jsxs("div",{className:"flex flex-col  md:flex-row justify-between",children:[d.jsx("label",{children:"Location:"}),d.jsx("input",{type:"text",name:"location",className:"py-2 px-2 rounded-md"})]}),d.jsxs("div",{className:"flex flex-col md:flex-row justify-between",children:[d.jsx("label",{children:"Short Description:"}),d.jsx("input",{type:"text",name:"short_description",className:"py-2 px-2 rounded-md"})]}),d.jsxs("div",{className:"flex flex-col md:flex-row justify-between",children:[d.jsx("label",{children:"Average Cost:"}),d.jsx("input",{type:"text",name:"average_cost",className:"py-2 px-2 rounded-md"})]}),d.jsxs("div",{className:"flex flex-col md:flex-row justify-between",children:[d.jsx("label",{children:"Seasonality:"}),d.jsxs("select",{name:"seasonality",className:"py-2 px-2 rounded-md",children:[d.jsx("option",{value:"",children:"Season"}),d.jsx("option",{value:"Winter",children:"Winter"}),d.jsx("option",{value:"Summer",children:"Summer"})]})]}),d.jsxs("div",{className:"flex flex-col md:flex-row justify-between",children:[d.jsx("label",{children:"Travel Time:"}),d.jsx("input",{type:"text",name:"travel_time",className:"py-2 px-2 rounded-md"})]}),d.jsxs("div",{className:"flex flex-col md:flex-row justify-between",children:[d.jsx("label",{children:"Total Visitors Per Year:"}),d.jsx("input",{type:"text",name:"total_visitors_per_year",className:"py-2 px-2 rounded-md"})]}),d.jsxs("div",{className:"flex flex-col md:flex-row justify-between",children:[d.jsx("label",{children:"User Email:"}),d.jsx("input",{type:"email",name:"user_email",className:"py-2 px-2 rounded-md"})]}),d.jsxs("div",{className:"flex flex-col md:flex-row justify-between",children:[d.jsx("label",{children:"User Name:"}),d.jsx("input",{type:"text",name:"user_name",className:"py-2 px-2 rounded-md"})]}),d.jsx("input",{type:"submit",value:"Add",className:"w-full bg-slate-300 rounded-md hover:text-white hover:bg-transparent hover:border-2 hover:border-white"})]})})]})},SP=({spt:e,spot:t,setSpot:n})=>{const{image:r,tourists_spot_name:i,country_name:o,location:a,short_description:l,average_cost:c,seasonality:p,total_visitors_per_year:m,travel_time:g,user_name:y,user_email:C,_id:E}=e;I.useContext(Po);const S=P=>{console.log(P),$a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(w=>{w.isConfirmed&&fetch(`https://assignment-10-server-sable.vercel.app/TouristSpots/${P}`,{method:"DELETE"}).then(v=>v.json()).then(v=>{if(v.deletedCount>0){$a.fire({title:"Deleted!",text:"Your file has been deleted.",icon:"success"});const x=[];t.forEach(T=>{T._id!==P&&x.push(T)}),n(x)}})})};return d.jsx("div",{children:d.jsx("table",{children:d.jsx("tbody",{children:d.jsxs("tr",{className:"flex md:flex-row gap-2 md:gap-10 my-5 md:my-10 text-center",children:[d.jsx("th",{children:i}),d.jsx("th",{children:o}),d.jsx("th",{children:g}),d.jsx("th",{children:c}),d.jsxs("th",{children:[d.jsx(Nn,{to:`/UpdateData/${E}`,children:d.jsx("button",{className:"btn btn-primary mr-2",children:"Update"})}),d.jsx("button",{onClick:()=>S(E),className:"btn btn-primary",children:"Delete"})]})]})})})})},EP=()=>{const e=To(),[t,n]=I.useState(e);return d.jsxs("div",{className:"flex flex-col justify-center items-center",children:[d.jsx("h2",{className:"font-bold text-xl md:text-3xl mt-5",children:"Your Tourist Spots"}),d.jsxs("table",{className:"text-center mx-5",children:[d.jsx("thead",{className:"",children:d.jsxs("tr",{className:"flex gap-2 md:gap-10 my-5 md:my-10",children:[d.jsx("th",{children:"Name"}),d.jsx("th",{children:"Country"}),d.jsx("th",{children:"Travel_time"}),d.jsx("th",{children:"Cost"}),d.jsx("th",{className:"md:ml-40",children:"Actions"})]})}),d.jsx("tbody",{children:e.map(r=>d.jsx(SP,{spt:r,spot:t,setSpot:n},r._id))})]})]})},CP=()=>{const e=To(),{id:t}=Gv(),n=e.find(E=>E._id==t),{image:r,tourists_spot_name:i,country_name:o,location:a,short_description:l,average_cost:c,seasonality:p,total_visitors_per_year:m,travel_time:g,user_name:y,user_email:C}=n;return d.jsx("div",{children:d.jsx("div",{className:" px-4 py-5 rounded-2xl mx-auto text-white text-center",children:d.jsxs("div",{className:"bg-purple-600 px-5 pb-10 pt-10  rounded-2xl",children:[d.jsxs("div",{className:"flex justify-center mb-10",children:[d.jsx("img",{src:r,alt:"estate",className:" h-48"}),d.jsx("br",{})]}),d.jsxs("div",{className:"text-gray-300 flex gap-5 font-semibold justify-center mb-10",children:[d.jsxs("h3",{className:"text-xl md:text-3xl",children:["#",i]}),d.jsxs("h3",{className:"text-xl md:text-3xl",children:["#",o]})]}),d.jsxs("div",{className:"font-bold text-center text-gray-300",children:[d.jsx("span",{className:"underline text-xl",children:"Location"})," : ",a]}),d.jsx("br",{}),d.jsxs("div",{className:"font-bold text-center text-gray-300",children:[d.jsx("span",{className:"underline text-xl",children:"Short Description"})," : ",l]}),d.jsxs("h3",{className:"text-2xl text-gray-300 font-semibold my-8 mb-10",children:["Total Visitors per Year: ",m]}),d.jsxs("h2",{className:"text-xl font-semibold my-4 text-gray-200",children:["Travel_time: ",g]}),d.jsxs("h2",{className:"text-xl font-semibold my-4 text-gray-200",children:["Average_cost: ",c]}),d.jsxs("h2",{className:"text-xl font-semibold my-4 text-gray-200",children:["Seasonality: ",p]}),d.jsxs("div",{className:"flex flex-col justify-center md:text-xl gap-4 border-2 border-white py-2 px-2 font-bold mt-10",children:[d.jsxs("h3",{children:["User name : ",y]}),d.jsxs("h3",{children:["User email : ",C]})]})]})})})},Ls=({children:e})=>{const{user:t}=I.useContext(Po);return t?e:d.jsx(kS,{to:"/Login"})},kP=()=>{const e=To(),{_id:t,image:n,tourists_spot_name:r,country_name:i,location:o,short_description:a,average_cost:l,seasonality:c,total_visitors_per_year:p,travel_time:m}=e,g=y=>{y.preventDefault();const C=y.target,E=C.image.value,S=C.tourists_spot_name.value,P=C.country_name.value,w=C.location.value,v=C.short_description.value,x=C.average_cost.value,T=C.seasonality.value,L=C.total_visitors_per_year.value,M=C.travel_time.value,b={image:E,tourists_spot_name:S,country_name:P,location:w,short_description:v,average_cost:x,seasonality:T,total_visitors_per_year:L,travel_time:M};console.log(b),fetch(`https://assignment-10-server-sable.vercel.app/TouristSpots/${t}`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(b)}).then(A=>A.json()).then(A=>{console.log(A),A.modifiedCount>0&&$a.fire({title:"Success!",text:"Updated successfully",icon:"success",confirmButtonText:"Cool"})})};return d.jsxs("div",{className:"bg-blue-300 my-20 py-10 rounded-3xl",children:[d.jsx("h2",{className:"text-center font-bold text-3xl",children:"Update Tourist Spot"}),d.jsx("div",{className:"flex justify-center py-10 mx-10 md:mx-0",children:d.jsxs("form",{onSubmit:g,className:"text-justify grid md:grid-cols-2 gap-10 md:gap-20 font-bold text-gray-900",children:[d.jsxs("div",{className:"flex md:justify-between",children:[d.jsx("label",{children:"Image URL:"}),d.jsx("input",{type:"text",name:"image",defaultValue:n,className:"py-2 px-2 rounded-md"})]}),d.jsxs("div",{className:"flex justify-between",children:[d.jsx("label",{children:"Tourist Spot Name:"}),d.jsx("input",{type:"text",name:"tourists_spot_name",defaultValue:r,className:"py-2 px-2 rounded-md"})]}),d.jsxs("div",{className:"flex justify-between",children:[d.jsx("label",{children:"Country Name:"}),d.jsxs("select",{name:"country_name",className:"py-2 px-2 rounded-md",defaultValue:i,children:[d.jsx("option",{value:"",children:"Select Country"}),d.jsx("option",{value:"Bangladesh",children:"Bangladesh"}),d.jsx("option",{value:"Malaysia",children:"Malaysia"}),d.jsx("option",{value:"Thailand",children:"Thailand"}),d.jsx("option",{value:"Indonesia",children:"Indonesia"}),d.jsx("option",{value:"Vietnam",children:" Vietnam "}),d.jsx("option",{value:"Combodia",children:" Combodia "})]})]}),d.jsxs("div",{className:"flex justify-between",children:[d.jsx("label",{children:"Location:"}),d.jsx("input",{type:"text",name:"location",defaultValue:o,className:"py-2 px-2 rounded-md"})]}),d.jsxs("div",{className:"flex justify-between",children:[d.jsx("label",{children:"Short Description:"}),d.jsx("input",{type:"text",name:"short_description",defaultValue:a,className:"py-2 px-2 rounded-md"})]}),d.jsxs("div",{className:"flex justify-between",children:[d.jsx("label",{children:"Average Cost:"}),d.jsx("input",{type:"text",name:"average_cost",defaultValue:l,className:"py-2 px-2 rounded-md"})]}),d.jsxs("div",{className:"flex justify-between",children:[d.jsx("label",{children:"Seasonality:"}),d.jsxs("select",{name:"seasonality",className:"py-2 px-2 rounded-md",defaultValue:c,children:[d.jsx("option",{value:"",children:"Season"}),d.jsx("option",{value:"Winter",children:"Winter"}),d.jsx("option",{value:"Summer",children:"Summer"})]})]}),d.jsxs("div",{className:"flex justify-between",children:[d.jsx("label",{children:"Travel Time:"}),d.jsx("input",{type:"text",name:"travel_time",defaultValue:m,className:"py-2 px-2 rounded-md"})]}),d.jsxs("div",{className:"flex justify-between",children:[d.jsx("label",{children:"Total Visitors Per Year:"}),d.jsx("input",{type:"text",name:"total_visitors_per_year",defaultValue:p,className:"py-2 px-2 rounded-md"})]}),d.jsx("input",{type:"submit",value:"Update",className:"w-full bg-slate-300 rounded-md hover:text-white hover:bg-transparent hover:border-2 hover:border-white"})]})})]})},TP=()=>d.jsxs("div",{className:"container mx-auto mt-8 text-center",children:[d.jsx("h1",{className:"text-4xl font-bold mb-4",children:"404 - Page Not Found"}),d.jsx("p",{className:"text-lg mb-4",children:"Oops! The page you're looking for does not exist."}),d.jsx(Nn,{to:"/",className:"inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"Go Back Home"})]}),IP=()=>{const e=To(),{id:t}=Gv();console.log(e,t),e.find(C=>C._id==t);const{image:n,tourists_spot_name:r,country_name:i,location:o,short_description:a,average_cost:l,seasonality:c,total_visitors_per_year:p,travel_time:m,user_name:g,user_email:y}=e;return d.jsx("div",{children:d.jsx("div",{className:" px-4 py-5 rounded-2xl mx-auto text-white",children:d.jsxs("div",{className:"bg-purple-600 px-5 pb-10 pt-10  rounded-2xl",children:[d.jsxs("div",{className:"flex justify-center mb-10",children:[d.jsx("img",{src:n,alt:"",className:" h-48"}),d.jsx("br",{})]}),d.jsxs("div",{className:"text-gray-300 flex gap-5 font-semibold justify-center mb-10",children:[d.jsxs("h3",{className:"text-xl md:text-3xl",children:["#",r]}),d.jsxs("h3",{className:"text-xl md:text-3xl",children:["#",i]})]}),d.jsxs("div",{className:"font-bold text-center text-gray-300",children:[d.jsx("span",{className:"underline text-xl",children:"Location"})," : ",o]}),d.jsx("br",{}),d.jsxs("div",{className:"font-bold text-center text-gray-300",children:[d.jsx("span",{className:"underline text-xl",children:"Short Description"})," : ",a]}),d.jsxs("h3",{className:"text-2xl text-gray-300 font-semibold my-8 mb-10",children:["Total Visitors per Year: ",p]}),d.jsxs("h2",{className:"text-xl font-semibold my-4 text-gray-200",children:["Travel_time: ",m]}),d.jsxs("h2",{className:"text-xl font-semibold my-4 text-gray-200",children:["Average_cost: ",l]}),d.jsxs("h2",{className:"text-xl font-semibold my-4 text-gray-200",children:["Seasonality: ",c]}),d.jsxs("div",{className:"flex flex-col justify-center md:text-xl gap-4 border-2 border-white py-2 px-2 font-bold mt-10",children:[d.jsxs("h3",{children:["User name : ",g]}),d.jsxs("h3",{children:["User email : ",y]})]})]})})})},PP=LS([{path:"/",element:d.jsx(cI,{}),children:[{path:"/",element:d.jsx(hI,{}),loader:()=>fetch("https://assignment-10-server-sable.vercel.app/TouristSpots")},{path:"/Login",element:d.jsx(NI,{})},{path:"/Register",element:d.jsx(jI,{})},{path:"allTouristSpot",element:d.jsx(xP,{}),loader:()=>fetch("https://assignment-10-server-sable.vercel.app/TouristSpots")},{path:"addTouristSpot",element:d.jsx(Ls,{children:d.jsx(_P,{})})},{path:"MyList",element:d.jsx(Ls,{children:d.jsx(EP,{})}),loader:()=>fetch("https://assignment-10-server-sable.vercel.app/TouristSpots")},{path:"ViewDetails/:id",element:d.jsx(Ls,{children:d.jsx(CP,{})}),loader:()=>fetch("https://assignment-10-server-sable.vercel.app/TouristSpots")},{path:"UpdateData/:id",element:d.jsx(Ls,{children:d.jsx(kP,{})}),loader:({params:e})=>fetch(`https://assignment-10-server-sable.vercel.app/TouristSpots/${e.id}`)},{path:"Not_Founded_Page",element:d.jsx(TP,{})},{path:"Country",element:d.jsx(Zy,{}),loader:()=>fetch("https://assignment-10-server-sable.vercel.app/Country_collection")},{path:"ViewDetailsCountry/:id",element:d.jsx(IP,{}),loader:()=>fetch("https://assignment-10-server-sable.vercel.app/Country_collection")}]}]);Nu.createRoot(document.getElementById("root")).render(d.jsx(ue.StrictMode,{children:d.jsx(qy,{children:d.jsx(VS,{router:PP})})}));
