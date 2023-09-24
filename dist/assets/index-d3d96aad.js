function dS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function fS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Sv={exports:{}},Du={},Av={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=Symbol.for("react.element"),pS=Symbol.for("react.portal"),mS=Symbol.for("react.fragment"),gS=Symbol.for("react.strict_mode"),yS=Symbol.for("react.profiler"),_S=Symbol.for("react.provider"),vS=Symbol.for("react.context"),wS=Symbol.for("react.forward_ref"),ES=Symbol.for("react.suspense"),TS=Symbol.for("react.memo"),IS=Symbol.for("react.lazy"),cg=Symbol.iterator;function SS(t){return t===null||typeof t!="object"?null:(t=cg&&t[cg]||t["@@iterator"],typeof t=="function"?t:null)}var Pv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rv=Object.assign,Cv={};function Is(t,e,n){this.props=t,this.context=e,this.refs=Cv,this.updater=n||Pv}Is.prototype.isReactComponent={};Is.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Is.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function kv(){}kv.prototype=Is.prototype;function Vf(t,e,n){this.props=t,this.context=e,this.refs=Cv,this.updater=n||Pv}var Mf=Vf.prototype=new kv;Mf.constructor=Vf;Rv(Mf,Is.prototype);Mf.isPureReactComponent=!0;var hg=Array.isArray,xv=Object.prototype.hasOwnProperty,jf={current:null},Nv={key:!0,ref:!0,__self:!0,__source:!0};function Dv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)xv.call(e,r)&&!Nv.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:aa,type:t,key:s,ref:o,props:i,_owner:jf.current}}function AS(t,e){return{$$typeof:aa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ff(t){return typeof t=="object"&&t!==null&&t.$$typeof===aa}function PS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var dg=/\/+/g;function zc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?PS(""+t.key):e.toString(36)}function hl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case aa:case pS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+zc(o,0):r,hg(i)?(n="",t!=null&&(n=t.replace(dg,"$&/")+"/"),hl(i,e,n,"",function(u){return u})):i!=null&&(Ff(i)&&(i=AS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(dg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",hg(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+zc(s,a);o+=hl(s,e,n,l,i)}else if(l=SS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+zc(s,a++),o+=hl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function La(t,e,n){if(t==null)return t;var r=[],i=0;return hl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function RS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ft={current:null},dl={transition:null},CS={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:dl,ReactCurrentOwner:jf};Q.Children={map:La,forEach:function(t,e,n){La(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return La(t,function(){e++}),e},toArray:function(t){return La(t,function(e){return e})||[]},only:function(t){if(!Ff(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Q.Component=Is;Q.Fragment=mS;Q.Profiler=yS;Q.PureComponent=Vf;Q.StrictMode=gS;Q.Suspense=ES;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CS;Q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Rv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=jf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)xv.call(e,l)&&!Nv.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:aa,type:t.type,key:i,ref:s,props:r,_owner:o}};Q.createContext=function(t){return t={$$typeof:vS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:_S,_context:t},t.Consumer=t};Q.createElement=Dv;Q.createFactory=function(t){var e=Dv.bind(null,t);return e.type=t,e};Q.createRef=function(){return{current:null}};Q.forwardRef=function(t){return{$$typeof:wS,render:t}};Q.isValidElement=Ff;Q.lazy=function(t){return{$$typeof:IS,_payload:{_status:-1,_result:t},_init:RS}};Q.memo=function(t,e){return{$$typeof:TS,type:t,compare:e===void 0?null:e}};Q.startTransition=function(t){var e=dl.transition;dl.transition={};try{t()}finally{dl.transition=e}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(t,e){return ft.current.useCallback(t,e)};Q.useContext=function(t){return ft.current.useContext(t)};Q.useDebugValue=function(){};Q.useDeferredValue=function(t){return ft.current.useDeferredValue(t)};Q.useEffect=function(t,e){return ft.current.useEffect(t,e)};Q.useId=function(){return ft.current.useId()};Q.useImperativeHandle=function(t,e,n){return ft.current.useImperativeHandle(t,e,n)};Q.useInsertionEffect=function(t,e){return ft.current.useInsertionEffect(t,e)};Q.useLayoutEffect=function(t,e){return ft.current.useLayoutEffect(t,e)};Q.useMemo=function(t,e){return ft.current.useMemo(t,e)};Q.useReducer=function(t,e,n){return ft.current.useReducer(t,e,n)};Q.useRef=function(t){return ft.current.useRef(t)};Q.useState=function(t){return ft.current.useState(t)};Q.useSyncExternalStore=function(t,e,n){return ft.current.useSyncExternalStore(t,e,n)};Q.useTransition=function(){return ft.current.useTransition()};Q.version="18.2.0";Av.exports=Q;var T=Av.exports;const K=fS(T),kS=dS({__proto__:null,default:K},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xS=T,NS=Symbol.for("react.element"),DS=Symbol.for("react.fragment"),OS=Object.prototype.hasOwnProperty,bS=xS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,LS={key:!0,ref:!0,__self:!0,__source:!0};function Ov(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)OS.call(e,r)&&!LS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:NS,type:t,key:s,ref:o,props:i,_owner:bS.current}}Du.Fragment=DS;Du.jsx=Ov;Du.jsxs=Ov;Sv.exports=Du;var f=Sv.exports,td={},bv={exports:{}},Ot={},Lv={exports:{}},Vv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(x,j){var q=x.length;x.push(j);e:for(;0<q;){var ge=q-1>>>1,Le=x[ge];if(0<i(Le,j))x[ge]=j,x[q]=Le,q=ge;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var j=x[0],q=x.pop();if(q!==j){x[0]=q;e:for(var ge=0,Le=x.length,Oa=Le>>>1;ge<Oa;){var Fr=2*(ge+1)-1,Bc=x[Fr],Ur=Fr+1,ba=x[Ur];if(0>i(Bc,q))Ur<Le&&0>i(ba,Bc)?(x[ge]=ba,x[Ur]=q,ge=Ur):(x[ge]=Bc,x[Fr]=q,ge=Fr);else if(Ur<Le&&0>i(ba,q))x[ge]=ba,x[Ur]=q,ge=Ur;else break e}}return j}function i(x,j){var q=x.sortIndex-j.sortIndex;return q!==0?q:x.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,g=!1,_=!1,v=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(x){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=x)r(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(u)}}function w(x){if(v=!1,y(x),!_)if(n(l)!==null)_=!0,re(I);else{var j=n(u);j!==null&&Ae(w,j.startTime-x)}}function I(x,j){_=!1,v&&(v=!1,m(C),C=-1),g=!0;var q=d;try{for(y(j),h=n(l);h!==null&&(!(h.expirationTime>j)||x&&!ie());){var ge=h.callback;if(typeof ge=="function"){h.callback=null,d=h.priorityLevel;var Le=ge(h.expirationTime<=j);j=t.unstable_now(),typeof Le=="function"?h.callback=Le:h===n(l)&&r(l),y(j)}else r(l);h=n(l)}if(h!==null)var Oa=!0;else{var Fr=n(u);Fr!==null&&Ae(w,Fr.startTime-j),Oa=!1}return Oa}finally{h=null,d=q,g=!1}}var A=!1,k=null,C=-1,U=5,L=-1;function ie(){return!(t.unstable_now()-L<U)}function X(){if(k!==null){var x=t.unstable_now();L=x;var j=!0;try{j=k(!0,x)}finally{j?O():(A=!1,k=null)}}else A=!1}var O;if(typeof p=="function")O=function(){p(X)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,pe=Z.port2;Z.port1.onmessage=X,O=function(){pe.postMessage(null)}}else O=function(){E(X,0)};function re(x){k=x,A||(A=!0,O())}function Ae(x,j){C=E(function(){x(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(x){x.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,re(I))},t.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<x?Math.floor(1e3/x):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(x){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var q=d;d=j;try{return x()}finally{d=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(x,j){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var q=d;d=x;try{return j()}finally{d=q}},t.unstable_scheduleCallback=function(x,j,q){var ge=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ge+q:ge):q=ge,x){case 1:var Le=-1;break;case 2:Le=250;break;case 5:Le=1073741823;break;case 4:Le=1e4;break;default:Le=5e3}return Le=q+Le,x={id:c++,callback:j,priorityLevel:x,startTime:q,expirationTime:Le,sortIndex:-1},q>ge?(x.sortIndex=q,e(u,x),n(l)===null&&x===n(u)&&(v?(m(C),C=-1):v=!0,Ae(w,q-ge))):(x.sortIndex=Le,e(l,x),_||g||(_=!0,re(I))),x},t.unstable_shouldYield=ie,t.unstable_wrapCallback=function(x){var j=d;return function(){var q=d;d=j;try{return x.apply(this,arguments)}finally{d=q}}}})(Vv);Lv.exports=Vv;var VS=Lv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mv=T,Nt=VS;function R(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jv=new Set,Ao={};function wi(t,e){as(t,e),as(t+"Capture",e)}function as(t,e){for(Ao[t]=e,t=0;t<e.length;t++)jv.add(e[t])}var Mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nd=Object.prototype.hasOwnProperty,MS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fg={},pg={};function jS(t){return nd.call(pg,t)?!0:nd.call(fg,t)?!1:MS.test(t)?pg[t]=!0:(fg[t]=!0,!1)}function FS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function US(t,e,n,r){if(e===null||typeof e>"u"||FS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ke[t]=new pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ke[e]=new pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ke[t]=new pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ke[t]=new pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ke[t]=new pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ke[t]=new pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ke[t]=new pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ke[t]=new pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ke[t]=new pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Uf=/[\-:]([a-z])/g;function $f(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Uf,$f);Ke[e]=new pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Uf,$f);Ke[e]=new pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Uf,$f);Ke[e]=new pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ke[t]=new pt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ke[t]=new pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Bf(t,e,n,r){var i=Ke.hasOwnProperty(e)?Ke[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(US(e,n,i,r)&&(n=null),r||i===null?jS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Wn=Mv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Va=Symbol.for("react.element"),Vi=Symbol.for("react.portal"),Mi=Symbol.for("react.fragment"),zf=Symbol.for("react.strict_mode"),rd=Symbol.for("react.profiler"),Fv=Symbol.for("react.provider"),Uv=Symbol.for("react.context"),Hf=Symbol.for("react.forward_ref"),id=Symbol.for("react.suspense"),sd=Symbol.for("react.suspense_list"),qf=Symbol.for("react.memo"),Yn=Symbol.for("react.lazy"),$v=Symbol.for("react.offscreen"),mg=Symbol.iterator;function Ls(t){return t===null||typeof t!="object"?null:(t=mg&&t[mg]||t["@@iterator"],typeof t=="function"?t:null)}var ve=Object.assign,Hc;function Ks(t){if(Hc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Hc=e&&e[1]||""}return`
`+Hc+t}var qc=!1;function Wc(t,e){if(!t||qc)return"";qc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{qc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ks(t):""}function $S(t){switch(t.tag){case 5:return Ks(t.type);case 16:return Ks("Lazy");case 13:return Ks("Suspense");case 19:return Ks("SuspenseList");case 0:case 2:case 15:return t=Wc(t.type,!1),t;case 11:return t=Wc(t.type.render,!1),t;case 1:return t=Wc(t.type,!0),t;default:return""}}function od(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Mi:return"Fragment";case Vi:return"Portal";case rd:return"Profiler";case zf:return"StrictMode";case id:return"Suspense";case sd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Uv:return(t.displayName||"Context")+".Consumer";case Fv:return(t._context.displayName||"Context")+".Provider";case Hf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case qf:return e=t.displayName||null,e!==null?e:od(t.type)||"Memo";case Yn:e=t._payload,t=t._init;try{return od(t(e))}catch{}}return null}function BS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return od(e);case 8:return e===zf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zS(t){var e=Bv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ma(t){t._valueTracker||(t._valueTracker=zS(t))}function zv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Bv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Dl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ad(t,e){var n=e.checked;return ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function gg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Hv(t,e){e=e.checked,e!=null&&Bf(t,"checked",e,!1)}function ld(t,e){Hv(t,e);var n=Ir(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ud(t,e.type,n):e.hasOwnProperty("defaultValue")&&ud(t,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function yg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ud(t,e,n){(e!=="number"||Dl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Gs=Array.isArray;function Qi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ir(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function cd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(R(91));return ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _g(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(R(92));if(Gs(n)){if(1<n.length)throw Error(R(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ir(n)}}function qv(t,e){var n=Ir(e.value),r=Ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function vg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Wv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Wv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ja,Kv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ja=ja||document.createElement("div"),ja.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ja.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Po(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var so={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},HS=["Webkit","ms","Moz","O"];Object.keys(so).forEach(function(t){HS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),so[e]=so[t]})});function Gv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||so.hasOwnProperty(t)&&so[t]?(""+e).trim():e+"px"}function Qv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Gv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var qS=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dd(t,e){if(e){if(qS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(R(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(R(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(R(61))}if(e.style!=null&&typeof e.style!="object")throw Error(R(62))}}function fd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pd=null;function Wf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var md=null,Yi=null,Xi=null;function wg(t){if(t=ca(t)){if(typeof md!="function")throw Error(R(280));var e=t.stateNode;e&&(e=Mu(e),md(t.stateNode,t.type,e))}}function Yv(t){Yi?Xi?Xi.push(t):Xi=[t]:Yi=t}function Xv(){if(Yi){var t=Yi,e=Xi;if(Xi=Yi=null,wg(t),e)for(t=0;t<e.length;t++)wg(e[t])}}function Jv(t,e){return t(e)}function Zv(){}var Kc=!1;function e0(t,e,n){if(Kc)return t(e,n);Kc=!0;try{return Jv(t,e,n)}finally{Kc=!1,(Yi!==null||Xi!==null)&&(Zv(),Xv())}}function Ro(t,e){var n=t.stateNode;if(n===null)return null;var r=Mu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(R(231,e,typeof n));return n}var gd=!1;if(Mn)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){gd=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{gd=!1}function WS(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var oo=!1,Ol=null,bl=!1,yd=null,KS={onError:function(t){oo=!0,Ol=t}};function GS(t,e,n,r,i,s,o,a,l){oo=!1,Ol=null,WS.apply(KS,arguments)}function QS(t,e,n,r,i,s,o,a,l){if(GS.apply(this,arguments),oo){if(oo){var u=Ol;oo=!1,Ol=null}else throw Error(R(198));bl||(bl=!0,yd=u)}}function Ei(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function t0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Eg(t){if(Ei(t)!==t)throw Error(R(188))}function YS(t){var e=t.alternate;if(!e){if(e=Ei(t),e===null)throw Error(R(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Eg(i),t;if(s===r)return Eg(i),e;s=s.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?t:e}function n0(t){return t=YS(t),t!==null?r0(t):null}function r0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=r0(t);if(e!==null)return e;t=t.sibling}return null}var i0=Nt.unstable_scheduleCallback,Tg=Nt.unstable_cancelCallback,XS=Nt.unstable_shouldYield,JS=Nt.unstable_requestPaint,Pe=Nt.unstable_now,ZS=Nt.unstable_getCurrentPriorityLevel,Kf=Nt.unstable_ImmediatePriority,s0=Nt.unstable_UserBlockingPriority,Ll=Nt.unstable_NormalPriority,eA=Nt.unstable_LowPriority,o0=Nt.unstable_IdlePriority,Ou=null,gn=null;function tA(t){if(gn&&typeof gn.onCommitFiberRoot=="function")try{gn.onCommitFiberRoot(Ou,t,void 0,(t.current.flags&128)===128)}catch{}}var Jt=Math.clz32?Math.clz32:iA,nA=Math.log,rA=Math.LN2;function iA(t){return t>>>=0,t===0?32:31-(nA(t)/rA|0)|0}var Fa=64,Ua=4194304;function Qs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Qs(a):(s&=o,s!==0&&(r=Qs(s)))}else o=n&~i,o!==0?r=Qs(o):s!==0&&(r=Qs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Jt(e),i=1<<n,r|=t[n],e&=~i;return r}function sA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Jt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=sA(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function _d(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function a0(){var t=Fa;return Fa<<=1,!(Fa&4194240)&&(Fa=64),t}function Gc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function la(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jt(e),t[e]=n}function aA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Jt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Gf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Jt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var se=0;function l0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var u0,Qf,c0,h0,d0,vd=!1,$a=[],ur=null,cr=null,hr=null,Co=new Map,ko=new Map,Jn=[],lA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ig(t,e){switch(t){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":Co.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(e.pointerId)}}function Ms(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ca(e),e!==null&&Qf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function uA(t,e,n,r,i){switch(e){case"focusin":return ur=Ms(ur,t,e,n,r,i),!0;case"dragenter":return cr=Ms(cr,t,e,n,r,i),!0;case"mouseover":return hr=Ms(hr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Co.set(s,Ms(Co.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ko.set(s,Ms(ko.get(s)||null,t,e,n,r,i)),!0}return!1}function f0(t){var e=qr(t.target);if(e!==null){var n=Ei(e);if(n!==null){if(e=n.tag,e===13){if(e=t0(n),e!==null){t.blockedOn=e,d0(t.priority,function(){c0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);pd=r,n.target.dispatchEvent(r),pd=null}else return e=ca(n),e!==null&&Qf(e),t.blockedOn=n,!1;e.shift()}return!0}function Sg(t,e,n){fl(t)&&n.delete(e)}function cA(){vd=!1,ur!==null&&fl(ur)&&(ur=null),cr!==null&&fl(cr)&&(cr=null),hr!==null&&fl(hr)&&(hr=null),Co.forEach(Sg),ko.forEach(Sg)}function js(t,e){t.blockedOn===e&&(t.blockedOn=null,vd||(vd=!0,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,cA)))}function xo(t){function e(i){return js(i,t)}if(0<$a.length){js($a[0],t);for(var n=1;n<$a.length;n++){var r=$a[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ur!==null&&js(ur,t),cr!==null&&js(cr,t),hr!==null&&js(hr,t),Co.forEach(e),ko.forEach(e),n=0;n<Jn.length;n++)r=Jn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Jn.length&&(n=Jn[0],n.blockedOn===null);)f0(n),n.blockedOn===null&&Jn.shift()}var Ji=Wn.ReactCurrentBatchConfig,Ml=!0;function hA(t,e,n,r){var i=se,s=Ji.transition;Ji.transition=null;try{se=1,Yf(t,e,n,r)}finally{se=i,Ji.transition=s}}function dA(t,e,n,r){var i=se,s=Ji.transition;Ji.transition=null;try{se=4,Yf(t,e,n,r)}finally{se=i,Ji.transition=s}}function Yf(t,e,n,r){if(Ml){var i=wd(t,e,n,r);if(i===null)ih(t,e,r,jl,n),Ig(t,r);else if(uA(i,t,e,n,r))r.stopPropagation();else if(Ig(t,r),e&4&&-1<lA.indexOf(t)){for(;i!==null;){var s=ca(i);if(s!==null&&u0(s),s=wd(t,e,n,r),s===null&&ih(t,e,r,jl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ih(t,e,r,null,n)}}var jl=null;function wd(t,e,n,r){if(jl=null,t=Wf(r),t=qr(t),t!==null)if(e=Ei(t),e===null)t=null;else if(n=e.tag,n===13){if(t=t0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return jl=t,null}function p0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ZS()){case Kf:return 1;case s0:return 4;case Ll:case eA:return 16;case o0:return 536870912;default:return 16}default:return 16}}var ir=null,Xf=null,pl=null;function m0(){if(pl)return pl;var t,e=Xf,n=e.length,r,i="value"in ir?ir.value:ir.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return pl=i.slice(t,1<r?1-r:void 0)}function ml(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ba(){return!0}function Ag(){return!1}function bt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ba:Ag,this.isPropagationStopped=Ag,this}return ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ba)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ba)},persist:function(){},isPersistent:Ba}),e}var Ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jf=bt(Ss),ua=ve({},Ss,{view:0,detail:0}),fA=bt(ua),Qc,Yc,Fs,bu=ve({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fs&&(Fs&&t.type==="mousemove"?(Qc=t.screenX-Fs.screenX,Yc=t.screenY-Fs.screenY):Yc=Qc=0,Fs=t),Qc)},movementY:function(t){return"movementY"in t?t.movementY:Yc}}),Pg=bt(bu),pA=ve({},bu,{dataTransfer:0}),mA=bt(pA),gA=ve({},ua,{relatedTarget:0}),Xc=bt(gA),yA=ve({},Ss,{animationName:0,elapsedTime:0,pseudoElement:0}),_A=bt(yA),vA=ve({},Ss,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),wA=bt(vA),EA=ve({},Ss,{data:0}),Rg=bt(EA),TA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},IA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},SA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function AA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=SA[t])?!!e[t]:!1}function Zf(){return AA}var PA=ve({},ua,{key:function(t){if(t.key){var e=TA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?IA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zf,charCode:function(t){return t.type==="keypress"?ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),RA=bt(PA),CA=ve({},bu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cg=bt(CA),kA=ve({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zf}),xA=bt(kA),NA=ve({},Ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),DA=bt(NA),OA=ve({},bu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bA=bt(OA),LA=[9,13,27,32],ep=Mn&&"CompositionEvent"in window,ao=null;Mn&&"documentMode"in document&&(ao=document.documentMode);var VA=Mn&&"TextEvent"in window&&!ao,g0=Mn&&(!ep||ao&&8<ao&&11>=ao),kg=String.fromCharCode(32),xg=!1;function y0(t,e){switch(t){case"keyup":return LA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ji=!1;function MA(t,e){switch(t){case"compositionend":return _0(e);case"keypress":return e.which!==32?null:(xg=!0,kg);case"textInput":return t=e.data,t===kg&&xg?null:t;default:return null}}function jA(t,e){if(ji)return t==="compositionend"||!ep&&y0(t,e)?(t=m0(),pl=Xf=ir=null,ji=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return g0&&e.locale!=="ko"?null:e.data;default:return null}}var FA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ng(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!FA[t.type]:e==="textarea"}function v0(t,e,n,r){Yv(r),e=Fl(e,"onChange"),0<e.length&&(n=new Jf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var lo=null,No=null;function UA(t){x0(t,0)}function Lu(t){var e=$i(t);if(zv(e))return t}function $A(t,e){if(t==="change")return e}var w0=!1;if(Mn){var Jc;if(Mn){var Zc="oninput"in document;if(!Zc){var Dg=document.createElement("div");Dg.setAttribute("oninput","return;"),Zc=typeof Dg.oninput=="function"}Jc=Zc}else Jc=!1;w0=Jc&&(!document.documentMode||9<document.documentMode)}function Og(){lo&&(lo.detachEvent("onpropertychange",E0),No=lo=null)}function E0(t){if(t.propertyName==="value"&&Lu(No)){var e=[];v0(e,No,t,Wf(t)),e0(UA,e)}}function BA(t,e,n){t==="focusin"?(Og(),lo=e,No=n,lo.attachEvent("onpropertychange",E0)):t==="focusout"&&Og()}function zA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Lu(No)}function HA(t,e){if(t==="click")return Lu(e)}function qA(t,e){if(t==="input"||t==="change")return Lu(e)}function WA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var en=typeof Object.is=="function"?Object.is:WA;function Do(t,e){if(en(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!nd.call(e,i)||!en(t[i],e[i]))return!1}return!0}function bg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lg(t,e){var n=bg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bg(n)}}function T0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?T0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function I0(){for(var t=window,e=Dl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Dl(t.document)}return e}function tp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function KA(t){var e=I0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&T0(n.ownerDocument.documentElement,n)){if(r!==null&&tp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Lg(n,s);var o=Lg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var GA=Mn&&"documentMode"in document&&11>=document.documentMode,Fi=null,Ed=null,uo=null,Td=!1;function Vg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Td||Fi==null||Fi!==Dl(r)||(r=Fi,"selectionStart"in r&&tp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),uo&&Do(uo,r)||(uo=r,r=Fl(Ed,"onSelect"),0<r.length&&(e=new Jf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Fi)))}function za(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ui={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionend:za("Transition","TransitionEnd")},eh={},S0={};Mn&&(S0=document.createElement("div").style,"AnimationEvent"in window||(delete Ui.animationend.animation,delete Ui.animationiteration.animation,delete Ui.animationstart.animation),"TransitionEvent"in window||delete Ui.transitionend.transition);function Vu(t){if(eh[t])return eh[t];if(!Ui[t])return t;var e=Ui[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in S0)return eh[t]=e[n];return t}var A0=Vu("animationend"),P0=Vu("animationiteration"),R0=Vu("animationstart"),C0=Vu("transitionend"),k0=new Map,Mg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(t,e){k0.set(t,e),wi(e,[t])}for(var th=0;th<Mg.length;th++){var nh=Mg[th],QA=nh.toLowerCase(),YA=nh[0].toUpperCase()+nh.slice(1);kr(QA,"on"+YA)}kr(A0,"onAnimationEnd");kr(P0,"onAnimationIteration");kr(R0,"onAnimationStart");kr("dblclick","onDoubleClick");kr("focusin","onFocus");kr("focusout","onBlur");kr(C0,"onTransitionEnd");as("onMouseEnter",["mouseout","mouseover"]);as("onMouseLeave",["mouseout","mouseover"]);as("onPointerEnter",["pointerout","pointerover"]);as("onPointerLeave",["pointerout","pointerover"]);wi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wi("onBeforeInput",["compositionend","keypress","textInput","paste"]);wi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ys="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),XA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ys));function jg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,QS(r,e,void 0,t),t.currentTarget=null}function x0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;jg(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;jg(i,a,u),s=l}}}if(bl)throw t=yd,bl=!1,yd=null,t}function le(t,e){var n=e[Rd];n===void 0&&(n=e[Rd]=new Set);var r=t+"__bubble";n.has(r)||(N0(e,t,2,!1),n.add(r))}function rh(t,e,n){var r=0;e&&(r|=4),N0(n,t,r,e)}var Ha="_reactListening"+Math.random().toString(36).slice(2);function Oo(t){if(!t[Ha]){t[Ha]=!0,jv.forEach(function(n){n!=="selectionchange"&&(XA.has(n)||rh(n,!1,t),rh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ha]||(e[Ha]=!0,rh("selectionchange",!1,e))}}function N0(t,e,n,r){switch(p0(e)){case 1:var i=hA;break;case 4:i=dA;break;default:i=Yf}n=i.bind(null,e,n,t),i=void 0,!gd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ih(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=qr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}e0(function(){var u=s,c=Wf(n),h=[];e:{var d=k0.get(t);if(d!==void 0){var g=Jf,_=t;switch(t){case"keypress":if(ml(n)===0)break e;case"keydown":case"keyup":g=RA;break;case"focusin":_="focus",g=Xc;break;case"focusout":_="blur",g=Xc;break;case"beforeblur":case"afterblur":g=Xc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Pg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=mA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=xA;break;case A0:case P0:case R0:g=_A;break;case C0:g=DA;break;case"scroll":g=fA;break;case"wheel":g=bA;break;case"copy":case"cut":case"paste":g=wA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Cg}var v=(e&4)!==0,E=!v&&t==="scroll",m=v?d!==null?d+"Capture":null:d;v=[];for(var p=u,y;p!==null;){y=p;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,m!==null&&(w=Ro(p,m),w!=null&&v.push(bo(p,w,y)))),E)break;p=p.return}0<v.length&&(d=new g(d,_,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==pd&&(_=n.relatedTarget||n.fromElement)&&(qr(_)||_[jn]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?qr(_):null,_!==null&&(E=Ei(_),_!==E||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(v=Pg,w="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(v=Cg,w="onPointerLeave",m="onPointerEnter",p="pointer"),E=g==null?d:$i(g),y=_==null?d:$i(_),d=new v(w,p+"leave",g,n,c),d.target=E,d.relatedTarget=y,w=null,qr(c)===u&&(v=new v(m,p+"enter",_,n,c),v.target=y,v.relatedTarget=E,w=v),E=w,g&&_)t:{for(v=g,m=_,p=0,y=v;y;y=Ni(y))p++;for(y=0,w=m;w;w=Ni(w))y++;for(;0<p-y;)v=Ni(v),p--;for(;0<y-p;)m=Ni(m),y--;for(;p--;){if(v===m||m!==null&&v===m.alternate)break t;v=Ni(v),m=Ni(m)}v=null}else v=null;g!==null&&Fg(h,d,g,v,!1),_!==null&&E!==null&&Fg(h,E,_,v,!0)}}e:{if(d=u?$i(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var I=$A;else if(Ng(d))if(w0)I=qA;else{I=zA;var A=BA}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(I=HA);if(I&&(I=I(t,u))){v0(h,I,n,c);break e}A&&A(t,d,u),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&ud(d,"number",d.value)}switch(A=u?$i(u):window,t){case"focusin":(Ng(A)||A.contentEditable==="true")&&(Fi=A,Ed=u,uo=null);break;case"focusout":uo=Ed=Fi=null;break;case"mousedown":Td=!0;break;case"contextmenu":case"mouseup":case"dragend":Td=!1,Vg(h,n,c);break;case"selectionchange":if(GA)break;case"keydown":case"keyup":Vg(h,n,c)}var k;if(ep)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else ji?y0(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(g0&&n.locale!=="ko"&&(ji||C!=="onCompositionStart"?C==="onCompositionEnd"&&ji&&(k=m0()):(ir=c,Xf="value"in ir?ir.value:ir.textContent,ji=!0)),A=Fl(u,C),0<A.length&&(C=new Rg(C,t,null,n,c),h.push({event:C,listeners:A}),k?C.data=k:(k=_0(n),k!==null&&(C.data=k)))),(k=VA?MA(t,n):jA(t,n))&&(u=Fl(u,"onBeforeInput"),0<u.length&&(c=new Rg("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=k))}x0(h,e)})}function bo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Fl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ro(t,n),s!=null&&r.unshift(bo(t,s,i)),s=Ro(t,e),s!=null&&r.push(bo(t,s,i))),t=t.return}return r}function Ni(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Fg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ro(n,s),l!=null&&o.unshift(bo(n,l,a))):i||(l=Ro(n,s),l!=null&&o.push(bo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var JA=/\r\n?/g,ZA=/\u0000|\uFFFD/g;function Ug(t){return(typeof t=="string"?t:""+t).replace(JA,`
`).replace(ZA,"")}function qa(t,e,n){if(e=Ug(e),Ug(t)!==e&&n)throw Error(R(425))}function Ul(){}var Id=null,Sd=null;function Ad(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Pd=typeof setTimeout=="function"?setTimeout:void 0,eP=typeof clearTimeout=="function"?clearTimeout:void 0,$g=typeof Promise=="function"?Promise:void 0,tP=typeof queueMicrotask=="function"?queueMicrotask:typeof $g<"u"?function(t){return $g.resolve(null).then(t).catch(nP)}:Pd;function nP(t){setTimeout(function(){throw t})}function sh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),xo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xo(e)}function dr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Bg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var As=Math.random().toString(36).slice(2),cn="__reactFiber$"+As,Lo="__reactProps$"+As,jn="__reactContainer$"+As,Rd="__reactEvents$"+As,rP="__reactListeners$"+As,iP="__reactHandles$"+As;function qr(t){var e=t[cn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[jn]||n[cn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Bg(t);t!==null;){if(n=t[cn])return n;t=Bg(t)}return e}t=n,n=t.parentNode}return null}function ca(t){return t=t[cn]||t[jn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function $i(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(R(33))}function Mu(t){return t[Lo]||null}var Cd=[],Bi=-1;function xr(t){return{current:t}}function he(t){0>Bi||(t.current=Cd[Bi],Cd[Bi]=null,Bi--)}function ae(t,e){Bi++,Cd[Bi]=t.current,t.current=e}var Sr={},st=xr(Sr),vt=xr(!1),ii=Sr;function ls(t,e){var n=t.type.contextTypes;if(!n)return Sr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function wt(t){return t=t.childContextTypes,t!=null}function $l(){he(vt),he(st)}function zg(t,e,n){if(st.current!==Sr)throw Error(R(168));ae(st,e),ae(vt,n)}function D0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(R(108,BS(t)||"Unknown",i));return ve({},n,r)}function Bl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Sr,ii=st.current,ae(st,t),ae(vt,vt.current),!0}function Hg(t,e,n){var r=t.stateNode;if(!r)throw Error(R(169));n?(t=D0(t,e,ii),r.__reactInternalMemoizedMergedChildContext=t,he(vt),he(st),ae(st,t)):he(vt),ae(vt,n)}var Rn=null,ju=!1,oh=!1;function O0(t){Rn===null?Rn=[t]:Rn.push(t)}function sP(t){ju=!0,O0(t)}function Nr(){if(!oh&&Rn!==null){oh=!0;var t=0,e=se;try{var n=Rn;for(se=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Rn=null,ju=!1}catch(i){throw Rn!==null&&(Rn=Rn.slice(t+1)),i0(Kf,Nr),i}finally{se=e,oh=!1}}return null}var zi=[],Hi=0,zl=null,Hl=0,Vt=[],Mt=0,si=null,kn=1,xn="";function $r(t,e){zi[Hi++]=Hl,zi[Hi++]=zl,zl=t,Hl=e}function b0(t,e,n){Vt[Mt++]=kn,Vt[Mt++]=xn,Vt[Mt++]=si,si=t;var r=kn;t=xn;var i=32-Jt(r)-1;r&=~(1<<i),n+=1;var s=32-Jt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,kn=1<<32-Jt(e)+i|n<<i|r,xn=s+t}else kn=1<<s|n<<i|r,xn=t}function np(t){t.return!==null&&($r(t,1),b0(t,1,0))}function rp(t){for(;t===zl;)zl=zi[--Hi],zi[Hi]=null,Hl=zi[--Hi],zi[Hi]=null;for(;t===si;)si=Vt[--Mt],Vt[Mt]=null,xn=Vt[--Mt],Vt[Mt]=null,kn=Vt[--Mt],Vt[Mt]=null}var xt=null,Rt=null,me=!1,Qt=null;function L0(t,e){var n=Ft(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function qg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xt=t,Rt=dr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xt=t,Rt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=si!==null?{id:kn,overflow:xn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ft(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xt=t,Rt=null,!0):!1;default:return!1}}function kd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xd(t){if(me){var e=Rt;if(e){var n=e;if(!qg(t,e)){if(kd(t))throw Error(R(418));e=dr(n.nextSibling);var r=xt;e&&qg(t,e)?L0(r,n):(t.flags=t.flags&-4097|2,me=!1,xt=t)}}else{if(kd(t))throw Error(R(418));t.flags=t.flags&-4097|2,me=!1,xt=t}}}function Wg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xt=t}function Wa(t){if(t!==xt)return!1;if(!me)return Wg(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ad(t.type,t.memoizedProps)),e&&(e=Rt)){if(kd(t))throw V0(),Error(R(418));for(;e;)L0(t,e),e=dr(e.nextSibling)}if(Wg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(R(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rt=dr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rt=null}}else Rt=xt?dr(t.stateNode.nextSibling):null;return!0}function V0(){for(var t=Rt;t;)t=dr(t.nextSibling)}function us(){Rt=xt=null,me=!1}function ip(t){Qt===null?Qt=[t]:Qt.push(t)}var oP=Wn.ReactCurrentBatchConfig;function Kt(t,e){if(t&&t.defaultProps){e=ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ql=xr(null),Wl=null,qi=null,sp=null;function op(){sp=qi=Wl=null}function ap(t){var e=ql.current;he(ql),t._currentValue=e}function Nd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Zi(t,e){Wl=t,sp=qi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yt=!0),t.firstContext=null)}function Bt(t){var e=t._currentValue;if(sp!==t)if(t={context:t,memoizedValue:e,next:null},qi===null){if(Wl===null)throw Error(R(308));qi=t,Wl.dependencies={lanes:0,firstContext:t}}else qi=qi.next=t;return e}var Wr=null;function lp(t){Wr===null?Wr=[t]:Wr.push(t)}function M0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,lp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Fn(t,r)}function Fn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xn=!1;function up(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function j0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function fr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Fn(t,n)}return i=r.interleaved,i===null?(e.next=e,lp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Fn(t,n)}function gl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gf(t,n)}}function Kg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Kl(t,e,n,r){var i=t.updateQueue;Xn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,v=a;switch(d=e,g=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){h=_.call(g,h,d);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,d=typeof _=="function"?_.call(g,h,d):_,d==null)break e;h=ve({},h,d);break e;case 2:Xn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ai|=o,t.lanes=o,t.memoizedState=h}}function Gg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var F0=new Mv.Component().refs;function Dd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Fu={isMounted:function(t){return(t=t._reactInternals)?Ei(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ht(),i=mr(t),s=bn(r,i);s.payload=e,n!=null&&(s.callback=n),e=fr(t,s,i),e!==null&&(Zt(e,t,i,r),gl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ht(),i=mr(t),s=bn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=fr(t,s,i),e!==null&&(Zt(e,t,i,r),gl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ht(),r=mr(t),i=bn(n,r);i.tag=2,e!=null&&(i.callback=e),e=fr(t,i,r),e!==null&&(Zt(e,t,r,n),gl(e,t,r))}};function Qg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Do(n,r)||!Do(i,s):!0}function U0(t,e,n){var r=!1,i=Sr,s=e.contextType;return typeof s=="object"&&s!==null?s=Bt(s):(i=wt(e)?ii:st.current,r=e.contextTypes,s=(r=r!=null)?ls(t,i):Sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Fu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Yg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Fu.enqueueReplaceState(e,e.state,null)}function Od(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=F0,up(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Bt(s):(s=wt(e)?ii:st.current,i.context=ls(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Dd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Fu.enqueueReplaceState(i,i.state,null),Kl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Us(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===F0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,t))}return t}function Ka(t,e){throw t=Object.prototype.toString.call(e),Error(R(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xg(t){var e=t._init;return e(t._payload)}function $0(t){function e(m,p){if(t){var y=m.deletions;y===null?(m.deletions=[p],m.flags|=16):y.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=gr(m,p),m.index=0,m.sibling=null,m}function s(m,p,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<p?(m.flags|=2,p):y):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,y,w){return p===null||p.tag!==6?(p=fh(y,m.mode,w),p.return=m,p):(p=i(p,y),p.return=m,p)}function l(m,p,y,w){var I=y.type;return I===Mi?c(m,p,y.props.children,w,y.key):p!==null&&(p.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Yn&&Xg(I)===p.type)?(w=i(p,y.props),w.ref=Us(m,p,y),w.return=m,w):(w=Tl(y.type,y.key,y.props,null,m.mode,w),w.ref=Us(m,p,y),w.return=m,w)}function u(m,p,y,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=ph(y,m.mode,w),p.return=m,p):(p=i(p,y.children||[]),p.return=m,p)}function c(m,p,y,w,I){return p===null||p.tag!==7?(p=ei(y,m.mode,w,I),p.return=m,p):(p=i(p,y),p.return=m,p)}function h(m,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=fh(""+p,m.mode,y),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Va:return y=Tl(p.type,p.key,p.props,null,m.mode,y),y.ref=Us(m,null,p),y.return=m,y;case Vi:return p=ph(p,m.mode,y),p.return=m,p;case Yn:var w=p._init;return h(m,w(p._payload),y)}if(Gs(p)||Ls(p))return p=ei(p,m.mode,y,null),p.return=m,p;Ka(m,p)}return null}function d(m,p,y,w){var I=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return I!==null?null:a(m,p,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Va:return y.key===I?l(m,p,y,w):null;case Vi:return y.key===I?u(m,p,y,w):null;case Yn:return I=y._init,d(m,p,I(y._payload),w)}if(Gs(y)||Ls(y))return I!==null?null:c(m,p,y,w,null);Ka(m,y)}return null}function g(m,p,y,w,I){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(y)||null,a(p,m,""+w,I);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Va:return m=m.get(w.key===null?y:w.key)||null,l(p,m,w,I);case Vi:return m=m.get(w.key===null?y:w.key)||null,u(p,m,w,I);case Yn:var A=w._init;return g(m,p,y,A(w._payload),I)}if(Gs(w)||Ls(w))return m=m.get(y)||null,c(p,m,w,I,null);Ka(p,w)}return null}function _(m,p,y,w){for(var I=null,A=null,k=p,C=p=0,U=null;k!==null&&C<y.length;C++){k.index>C?(U=k,k=null):U=k.sibling;var L=d(m,k,y[C],w);if(L===null){k===null&&(k=U);break}t&&k&&L.alternate===null&&e(m,k),p=s(L,p,C),A===null?I=L:A.sibling=L,A=L,k=U}if(C===y.length)return n(m,k),me&&$r(m,C),I;if(k===null){for(;C<y.length;C++)k=h(m,y[C],w),k!==null&&(p=s(k,p,C),A===null?I=k:A.sibling=k,A=k);return me&&$r(m,C),I}for(k=r(m,k);C<y.length;C++)U=g(k,m,C,y[C],w),U!==null&&(t&&U.alternate!==null&&k.delete(U.key===null?C:U.key),p=s(U,p,C),A===null?I=U:A.sibling=U,A=U);return t&&k.forEach(function(ie){return e(m,ie)}),me&&$r(m,C),I}function v(m,p,y,w){var I=Ls(y);if(typeof I!="function")throw Error(R(150));if(y=I.call(y),y==null)throw Error(R(151));for(var A=I=null,k=p,C=p=0,U=null,L=y.next();k!==null&&!L.done;C++,L=y.next()){k.index>C?(U=k,k=null):U=k.sibling;var ie=d(m,k,L.value,w);if(ie===null){k===null&&(k=U);break}t&&k&&ie.alternate===null&&e(m,k),p=s(ie,p,C),A===null?I=ie:A.sibling=ie,A=ie,k=U}if(L.done)return n(m,k),me&&$r(m,C),I;if(k===null){for(;!L.done;C++,L=y.next())L=h(m,L.value,w),L!==null&&(p=s(L,p,C),A===null?I=L:A.sibling=L,A=L);return me&&$r(m,C),I}for(k=r(m,k);!L.done;C++,L=y.next())L=g(k,m,C,L.value,w),L!==null&&(t&&L.alternate!==null&&k.delete(L.key===null?C:L.key),p=s(L,p,C),A===null?I=L:A.sibling=L,A=L);return t&&k.forEach(function(X){return e(m,X)}),me&&$r(m,C),I}function E(m,p,y,w){if(typeof y=="object"&&y!==null&&y.type===Mi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Va:e:{for(var I=y.key,A=p;A!==null;){if(A.key===I){if(I=y.type,I===Mi){if(A.tag===7){n(m,A.sibling),p=i(A,y.props.children),p.return=m,m=p;break e}}else if(A.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Yn&&Xg(I)===A.type){n(m,A.sibling),p=i(A,y.props),p.ref=Us(m,A,y),p.return=m,m=p;break e}n(m,A);break}else e(m,A);A=A.sibling}y.type===Mi?(p=ei(y.props.children,m.mode,w,y.key),p.return=m,m=p):(w=Tl(y.type,y.key,y.props,null,m.mode,w),w.ref=Us(m,p,y),w.return=m,m=w)}return o(m);case Vi:e:{for(A=y.key;p!==null;){if(p.key===A)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(m,p.sibling),p=i(p,y.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=ph(y,m.mode,w),p.return=m,m=p}return o(m);case Yn:return A=y._init,E(m,p,A(y._payload),w)}if(Gs(y))return _(m,p,y,w);if(Ls(y))return v(m,p,y,w);Ka(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,y),p.return=m,m=p):(n(m,p),p=fh(y,m.mode,w),p.return=m,m=p),o(m)):n(m,p)}return E}var cs=$0(!0),B0=$0(!1),ha={},yn=xr(ha),Vo=xr(ha),Mo=xr(ha);function Kr(t){if(t===ha)throw Error(R(174));return t}function cp(t,e){switch(ae(Mo,e),ae(Vo,t),ae(yn,ha),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=hd(e,t)}he(yn),ae(yn,e)}function hs(){he(yn),he(Vo),he(Mo)}function z0(t){Kr(Mo.current);var e=Kr(yn.current),n=hd(e,t.type);e!==n&&(ae(Vo,t),ae(yn,n))}function hp(t){Vo.current===t&&(he(yn),he(Vo))}var ye=xr(0);function Gl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ah=[];function dp(){for(var t=0;t<ah.length;t++)ah[t]._workInProgressVersionPrimary=null;ah.length=0}var yl=Wn.ReactCurrentDispatcher,lh=Wn.ReactCurrentBatchConfig,oi=0,_e=null,De=null,Me=null,Ql=!1,co=!1,jo=0,aP=0;function Ge(){throw Error(R(321))}function fp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!en(t[n],e[n]))return!1;return!0}function pp(t,e,n,r,i,s){if(oi=s,_e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,yl.current=t===null||t.memoizedState===null?hP:dP,t=n(r,i),co){s=0;do{if(co=!1,jo=0,25<=s)throw Error(R(301));s+=1,Me=De=null,e.updateQueue=null,yl.current=fP,t=n(r,i)}while(co)}if(yl.current=Yl,e=De!==null&&De.next!==null,oi=0,Me=De=_e=null,Ql=!1,e)throw Error(R(300));return t}function mp(){var t=jo!==0;return jo=0,t}function un(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?_e.memoizedState=Me=t:Me=Me.next=t,Me}function zt(){if(De===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var e=Me===null?_e.memoizedState:Me.next;if(e!==null)Me=e,De=t;else{if(t===null)throw Error(R(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Me===null?_e.memoizedState=Me=t:Me=Me.next=t}return Me}function Fo(t,e){return typeof e=="function"?e(t):e}function uh(t){var e=zt(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=De,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((oi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,_e.lanes|=c,ai|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,en(r,e.memoizedState)||(yt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,_e.lanes|=s,ai|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ch(t){var e=zt(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);en(s,e.memoizedState)||(yt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function H0(){}function q0(t,e){var n=_e,r=zt(),i=e(),s=!en(r.memoizedState,i);if(s&&(r.memoizedState=i,yt=!0),r=r.queue,gp(G0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,Uo(9,K0.bind(null,n,r,i,e),void 0,null),Fe===null)throw Error(R(349));oi&30||W0(n,e,i)}return i}function W0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function K0(t,e,n,r){e.value=n,e.getSnapshot=r,Q0(e)&&Y0(t)}function G0(t,e,n){return n(function(){Q0(e)&&Y0(t)})}function Q0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!en(t,n)}catch{return!0}}function Y0(t){var e=Fn(t,1);e!==null&&Zt(e,t,1,-1)}function Jg(t){var e=un();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:t},e.queue=t,t=t.dispatch=cP.bind(null,_e,t),[e.memoizedState,t]}function Uo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function X0(){return zt().memoizedState}function _l(t,e,n,r){var i=un();_e.flags|=t,i.memoizedState=Uo(1|e,n,void 0,r===void 0?null:r)}function Uu(t,e,n,r){var i=zt();r=r===void 0?null:r;var s=void 0;if(De!==null){var o=De.memoizedState;if(s=o.destroy,r!==null&&fp(r,o.deps)){i.memoizedState=Uo(e,n,s,r);return}}_e.flags|=t,i.memoizedState=Uo(1|e,n,s,r)}function Zg(t,e){return _l(8390656,8,t,e)}function gp(t,e){return Uu(2048,8,t,e)}function J0(t,e){return Uu(4,2,t,e)}function Z0(t,e){return Uu(4,4,t,e)}function ew(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function tw(t,e,n){return n=n!=null?n.concat([t]):null,Uu(4,4,ew.bind(null,e,t),n)}function yp(){}function nw(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function rw(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function iw(t,e,n){return oi&21?(en(n,e)||(n=a0(),_e.lanes|=n,ai|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yt=!0),t.memoizedState=n)}function lP(t,e){var n=se;se=n!==0&&4>n?n:4,t(!0);var r=lh.transition;lh.transition={};try{t(!1),e()}finally{se=n,lh.transition=r}}function sw(){return zt().memoizedState}function uP(t,e,n){var r=mr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ow(t))aw(e,n);else if(n=M0(t,e,n,r),n!==null){var i=ht();Zt(n,t,r,i),lw(n,e,r)}}function cP(t,e,n){var r=mr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ow(t))aw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,en(a,o)){var l=e.interleaved;l===null?(i.next=i,lp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=M0(t,e,i,r),n!==null&&(i=ht(),Zt(n,t,r,i),lw(n,e,r))}}function ow(t){var e=t.alternate;return t===_e||e!==null&&e===_e}function aw(t,e){co=Ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function lw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gf(t,n)}}var Yl={readContext:Bt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},hP={readContext:Bt,useCallback:function(t,e){return un().memoizedState=[t,e===void 0?null:e],t},useContext:Bt,useEffect:Zg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,_l(4194308,4,ew.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _l(4194308,4,t,e)},useInsertionEffect:function(t,e){return _l(4,2,t,e)},useMemo:function(t,e){var n=un();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=un();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=uP.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var e=un();return t={current:t},e.memoizedState=t},useState:Jg,useDebugValue:yp,useDeferredValue:function(t){return un().memoizedState=t},useTransition:function(){var t=Jg(!1),e=t[0];return t=lP.bind(null,t[1]),un().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=_e,i=un();if(me){if(n===void 0)throw Error(R(407));n=n()}else{if(n=e(),Fe===null)throw Error(R(349));oi&30||W0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Zg(G0.bind(null,r,s,t),[t]),r.flags|=2048,Uo(9,K0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=un(),e=Fe.identifierPrefix;if(me){var n=xn,r=kn;n=(r&~(1<<32-Jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=jo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=aP++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},dP={readContext:Bt,useCallback:nw,useContext:Bt,useEffect:gp,useImperativeHandle:tw,useInsertionEffect:J0,useLayoutEffect:Z0,useMemo:rw,useReducer:uh,useRef:X0,useState:function(){return uh(Fo)},useDebugValue:yp,useDeferredValue:function(t){var e=zt();return iw(e,De.memoizedState,t)},useTransition:function(){var t=uh(Fo)[0],e=zt().memoizedState;return[t,e]},useMutableSource:H0,useSyncExternalStore:q0,useId:sw,unstable_isNewReconciler:!1},fP={readContext:Bt,useCallback:nw,useContext:Bt,useEffect:gp,useImperativeHandle:tw,useInsertionEffect:J0,useLayoutEffect:Z0,useMemo:rw,useReducer:ch,useRef:X0,useState:function(){return ch(Fo)},useDebugValue:yp,useDeferredValue:function(t){var e=zt();return De===null?e.memoizedState=t:iw(e,De.memoizedState,t)},useTransition:function(){var t=ch(Fo)[0],e=zt().memoizedState;return[t,e]},useMutableSource:H0,useSyncExternalStore:q0,useId:sw,unstable_isNewReconciler:!1};function ds(t,e){try{var n="",r=e;do n+=$S(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function hh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function bd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var pP=typeof WeakMap=="function"?WeakMap:Map;function uw(t,e,n){n=bn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Jl||(Jl=!0,Hd=r),bd(t,e)},n}function cw(t,e,n){n=bn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){bd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){bd(t,e),typeof r!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ey(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new pP;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=CP.bind(null,t,e,n),e.then(t,t))}function ty(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ny(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bn(-1,1),e.tag=2,fr(n,e,1))),n.lanes|=1),t)}var mP=Wn.ReactCurrentOwner,yt=!1;function ut(t,e,n,r){e.child=t===null?B0(e,null,n,r):cs(e,t.child,n,r)}function ry(t,e,n,r,i){n=n.render;var s=e.ref;return Zi(e,i),r=pp(t,e,n,r,s,i),n=mp(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Un(t,e,i)):(me&&n&&np(e),e.flags|=1,ut(t,e,r,i),e.child)}function iy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ap(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,hw(t,e,s,r,i)):(t=Tl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Do,n(o,r)&&t.ref===e.ref)return Un(t,e,i)}return e.flags|=1,t=gr(s,r),t.ref=e.ref,t.return=e,e.child=t}function hw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Do(s,r)&&t.ref===e.ref)if(yt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(yt=!0);else return e.lanes=t.lanes,Un(t,e,i)}return Ld(t,e,n,r,i)}function dw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(Ki,Pt),Pt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ae(Ki,Pt),Pt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ae(Ki,Pt),Pt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ae(Ki,Pt),Pt|=r;return ut(t,e,i,n),e.child}function fw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ld(t,e,n,r,i){var s=wt(n)?ii:st.current;return s=ls(e,s),Zi(e,i),n=pp(t,e,n,r,s,i),r=mp(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Un(t,e,i)):(me&&r&&np(e),e.flags|=1,ut(t,e,n,i),e.child)}function sy(t,e,n,r,i){if(wt(n)){var s=!0;Bl(e)}else s=!1;if(Zi(e,i),e.stateNode===null)vl(t,e),U0(e,n,r),Od(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Bt(u):(u=wt(n)?ii:st.current,u=ls(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Yg(e,o,r,u),Xn=!1;var d=e.memoizedState;o.state=d,Kl(e,r,o,i),l=e.memoizedState,a!==r||d!==l||vt.current||Xn?(typeof c=="function"&&(Dd(e,n,c,r),l=e.memoizedState),(a=Xn||Qg(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,j0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Kt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Bt(l):(l=wt(n)?ii:st.current,l=ls(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Yg(e,o,r,l),Xn=!1,d=e.memoizedState,o.state=d,Kl(e,r,o,i);var _=e.memoizedState;a!==h||d!==_||vt.current||Xn?(typeof g=="function"&&(Dd(e,n,g,r),_=e.memoizedState),(u=Xn||Qg(e,n,u,r,d,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Vd(t,e,n,r,s,i)}function Vd(t,e,n,r,i,s){fw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Hg(e,n,!1),Un(t,e,s);r=e.stateNode,mP.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=cs(e,t.child,null,s),e.child=cs(e,null,a,s)):ut(t,e,a,s),e.memoizedState=r.state,i&&Hg(e,n,!0),e.child}function pw(t){var e=t.stateNode;e.pendingContext?zg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zg(t,e.context,!1),cp(t,e.containerInfo)}function oy(t,e,n,r,i){return us(),ip(i),e.flags|=256,ut(t,e,n,r),e.child}var Md={dehydrated:null,treeContext:null,retryLane:0};function jd(t){return{baseLanes:t,cachePool:null,transitions:null}}function mw(t,e,n){var r=e.pendingProps,i=ye.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ae(ye,i&1),t===null)return xd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=zu(o,r,0,null),t=ei(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=jd(n),e.memoizedState=Md,t):_p(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return gP(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=gr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=gr(a,s):(s=ei(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?jd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Md,r}return s=t.child,t=s.sibling,r=gr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function _p(t,e){return e=zu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ga(t,e,n,r){return r!==null&&ip(r),cs(e,t.child,null,n),t=_p(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function gP(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=hh(Error(R(422))),Ga(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=zu({mode:"visible",children:r.children},i,0,null),s=ei(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&cs(e,t.child,null,o),e.child.memoizedState=jd(o),e.memoizedState=Md,s);if(!(e.mode&1))return Ga(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(R(419)),r=hh(s,r,void 0),Ga(t,e,o,r)}if(a=(o&t.childLanes)!==0,yt||a){if(r=Fe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Fn(t,i),Zt(r,t,i,-1))}return Sp(),r=hh(Error(R(421))),Ga(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=kP.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Rt=dr(i.nextSibling),xt=e,me=!0,Qt=null,t!==null&&(Vt[Mt++]=kn,Vt[Mt++]=xn,Vt[Mt++]=si,kn=t.id,xn=t.overflow,si=e),e=_p(e,r.children),e.flags|=4096,e)}function ay(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Nd(t.return,e,n)}function dh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function gw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ut(t,e,r.children,n),r=ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ay(t,n,e);else if(t.tag===19)ay(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ae(ye,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Gl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),dh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Gl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}dh(e,!0,n,null,s);break;case"together":dh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function vl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Un(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ai|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(R(153));if(e.child!==null){for(t=e.child,n=gr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=gr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function yP(t,e,n){switch(e.tag){case 3:pw(e),us();break;case 5:z0(e);break;case 1:wt(e.type)&&Bl(e);break;case 4:cp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ae(ql,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ae(ye,ye.current&1),e.flags|=128,null):n&e.child.childLanes?mw(t,e,n):(ae(ye,ye.current&1),t=Un(t,e,n),t!==null?t.sibling:null);ae(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return gw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,dw(t,e,n)}return Un(t,e,n)}var yw,Fd,_w,vw;yw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fd=function(){};_w=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Kr(yn.current);var s=null;switch(n){case"input":i=ad(t,i),r=ad(t,r),s=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),s=[];break;case"textarea":i=cd(t,i),r=cd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ul)}dd(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ao.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ao.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&le("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};vw=function(t,e,n,r){n!==r&&(e.flags|=4)};function $s(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Qe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function _P(t,e,n){var r=e.pendingProps;switch(rp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(e),null;case 1:return wt(e.type)&&$l(),Qe(e),null;case 3:return r=e.stateNode,hs(),he(vt),he(st),dp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Wa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qt!==null&&(Kd(Qt),Qt=null))),Fd(t,e),Qe(e),null;case 5:hp(e);var i=Kr(Mo.current);if(n=e.type,t!==null&&e.stateNode!=null)_w(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(R(166));return Qe(e),null}if(t=Kr(yn.current),Wa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[cn]=e,r[Lo]=s,t=(e.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(i=0;i<Ys.length;i++)le(Ys[i],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":gg(r,s),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},le("invalid",r);break;case"textarea":_g(r,s),le("invalid",r)}dd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&qa(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&qa(r.textContent,a,t),i=["children",""+a]):Ao.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&le("scroll",r)}switch(n){case"input":Ma(r),yg(r,s,!0);break;case"textarea":Ma(r),vg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ul)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Wv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[cn]=e,t[Lo]=r,yw(t,e,!1,!1),e.stateNode=t;e:{switch(o=fd(n,r),n){case"dialog":le("cancel",t),le("close",t),i=r;break;case"iframe":case"object":case"embed":le("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ys.length;i++)le(Ys[i],t);i=r;break;case"source":le("error",t),i=r;break;case"img":case"image":case"link":le("error",t),le("load",t),i=r;break;case"details":le("toggle",t),i=r;break;case"input":gg(t,r),i=ad(t,r),le("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),le("invalid",t);break;case"textarea":_g(t,r),i=cd(t,r),le("invalid",t);break;default:i=r}dd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Qv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Kv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Po(t,l):typeof l=="number"&&Po(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ao.hasOwnProperty(s)?l!=null&&s==="onScroll"&&le("scroll",t):l!=null&&Bf(t,s,l,o))}switch(n){case"input":Ma(t),yg(t,r,!1);break;case"textarea":Ma(t),vg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ir(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Qi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Qi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ul)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qe(e),null;case 6:if(t&&e.stateNode!=null)vw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(R(166));if(n=Kr(Mo.current),Kr(yn.current),Wa(e)){if(r=e.stateNode,n=e.memoizedProps,r[cn]=e,(s=r.nodeValue!==n)&&(t=xt,t!==null))switch(t.tag){case 3:qa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&qa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[cn]=e,e.stateNode=r}return Qe(e),null;case 13:if(he(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&Rt!==null&&e.mode&1&&!(e.flags&128))V0(),us(),e.flags|=98560,s=!1;else if(s=Wa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(R(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(R(317));s[cn]=e}else us(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qe(e),s=!1}else Qt!==null&&(Kd(Qt),Qt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ye.current&1?Oe===0&&(Oe=3):Sp())),e.updateQueue!==null&&(e.flags|=4),Qe(e),null);case 4:return hs(),Fd(t,e),t===null&&Oo(e.stateNode.containerInfo),Qe(e),null;case 10:return ap(e.type._context),Qe(e),null;case 17:return wt(e.type)&&$l(),Qe(e),null;case 19:if(he(ye),s=e.memoizedState,s===null)return Qe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)$s(s,!1);else{if(Oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Gl(t),o!==null){for(e.flags|=128,$s(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ae(ye,ye.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pe()>fs&&(e.flags|=128,r=!0,$s(s,!1),e.lanes=4194304)}else{if(!r)if(t=Gl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$s(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!me)return Qe(e),null}else 2*Pe()-s.renderingStartTime>fs&&n!==1073741824&&(e.flags|=128,r=!0,$s(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pe(),e.sibling=null,n=ye.current,ae(ye,r?n&1|2:n&1),e):(Qe(e),null);case 22:case 23:return Ip(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Pt&1073741824&&(Qe(e),e.subtreeFlags&6&&(e.flags|=8192)):Qe(e),null;case 24:return null;case 25:return null}throw Error(R(156,e.tag))}function vP(t,e){switch(rp(e),e.tag){case 1:return wt(e.type)&&$l(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return hs(),he(vt),he(st),dp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hp(e),null;case 13:if(he(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(R(340));us()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return he(ye),null;case 4:return hs(),null;case 10:return ap(e.type._context),null;case 22:case 23:return Ip(),null;case 24:return null;default:return null}}var Qa=!1,Je=!1,wP=typeof WeakSet=="function"?WeakSet:Set,b=null;function Wi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(t,e,r)}else n.current=null}function Ud(t,e,n){try{n()}catch(r){Ee(t,e,r)}}var ly=!1;function EP(t,e){if(Id=Ml,t=I0(),tp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sd={focusedElem:t,selectionRange:n},Ml=!1,b=e;b!==null;)if(e=b,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,b=t;else for(;b!==null;){e=b;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,E=_.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:Kt(e.type,v),E);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(w){Ee(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,b=t;break}b=e.return}return _=ly,ly=!1,_}function ho(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ud(e,n,s)}i=i.next}while(i!==r)}}function $u(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function $d(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ww(t){var e=t.alternate;e!==null&&(t.alternate=null,ww(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[cn],delete e[Lo],delete e[Rd],delete e[rP],delete e[iP])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ew(t){return t.tag===5||t.tag===3||t.tag===4}function uy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ew(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ul));else if(r!==4&&(t=t.child,t!==null))for(Bd(t,e,n),t=t.sibling;t!==null;)Bd(t,e,n),t=t.sibling}function zd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(zd(t,e,n),t=t.sibling;t!==null;)zd(t,e,n),t=t.sibling}var Be=null,Gt=!1;function Kn(t,e,n){for(n=n.child;n!==null;)Tw(t,e,n),n=n.sibling}function Tw(t,e,n){if(gn&&typeof gn.onCommitFiberUnmount=="function")try{gn.onCommitFiberUnmount(Ou,n)}catch{}switch(n.tag){case 5:Je||Wi(n,e);case 6:var r=Be,i=Gt;Be=null,Kn(t,e,n),Be=r,Gt=i,Be!==null&&(Gt?(t=Be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(Gt?(t=Be,n=n.stateNode,t.nodeType===8?sh(t.parentNode,n):t.nodeType===1&&sh(t,n),xo(t)):sh(Be,n.stateNode));break;case 4:r=Be,i=Gt,Be=n.stateNode.containerInfo,Gt=!0,Kn(t,e,n),Be=r,Gt=i;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ud(n,e,o),i=i.next}while(i!==r)}Kn(t,e,n);break;case 1:if(!Je&&(Wi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ee(n,e,a)}Kn(t,e,n);break;case 21:Kn(t,e,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,Kn(t,e,n),Je=r):Kn(t,e,n);break;default:Kn(t,e,n)}}function cy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new wP),e.forEach(function(r){var i=xP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Wt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Be=a.stateNode,Gt=!1;break e;case 3:Be=a.stateNode.containerInfo,Gt=!0;break e;case 4:Be=a.stateNode.containerInfo,Gt=!0;break e}a=a.return}if(Be===null)throw Error(R(160));Tw(s,o,i),Be=null,Gt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ee(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Iw(e,t),e=e.sibling}function Iw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wt(e,t),ln(t),r&4){try{ho(3,t,t.return),$u(3,t)}catch(v){Ee(t,t.return,v)}try{ho(5,t,t.return)}catch(v){Ee(t,t.return,v)}}break;case 1:Wt(e,t),ln(t),r&512&&n!==null&&Wi(n,n.return);break;case 5:if(Wt(e,t),ln(t),r&512&&n!==null&&Wi(n,n.return),t.flags&32){var i=t.stateNode;try{Po(i,"")}catch(v){Ee(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Hv(i,s),fd(a,o);var u=fd(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Qv(i,h):c==="dangerouslySetInnerHTML"?Kv(i,h):c==="children"?Po(i,h):Bf(i,c,h,u)}switch(a){case"input":ld(i,s);break;case"textarea":qv(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Qi(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?Qi(i,!!s.multiple,s.defaultValue,!0):Qi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Lo]=s}catch(v){Ee(t,t.return,v)}}break;case 6:if(Wt(e,t),ln(t),r&4){if(t.stateNode===null)throw Error(R(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Ee(t,t.return,v)}}break;case 3:if(Wt(e,t),ln(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xo(e.containerInfo)}catch(v){Ee(t,t.return,v)}break;case 4:Wt(e,t),ln(t);break;case 13:Wt(e,t),ln(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ep=Pe())),r&4&&cy(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Je=(u=Je)||c,Wt(e,t),Je=u):Wt(e,t),ln(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(b=t,c=t.child;c!==null;){for(h=b=c;b!==null;){switch(d=b,g=d.child,d.tag){case 0:case 11:case 14:case 15:ho(4,d,d.return);break;case 1:Wi(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){Ee(r,n,v)}}break;case 5:Wi(d,d.return);break;case 22:if(d.memoizedState!==null){dy(h);continue}}g!==null?(g.return=d,b=g):dy(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Gv("display",o))}catch(v){Ee(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){Ee(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Wt(e,t),ln(t),r&4&&cy(t);break;case 21:break;default:Wt(e,t),ln(t)}}function ln(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ew(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Po(i,""),r.flags&=-33);var s=uy(t);zd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=uy(t);Bd(t,a,o);break;default:throw Error(R(161))}}catch(l){Ee(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function TP(t,e,n){b=t,Sw(t)}function Sw(t,e,n){for(var r=(t.mode&1)!==0;b!==null;){var i=b,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Qa;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Je;a=Qa;var u=Je;if(Qa=o,(Je=l)&&!u)for(b=i;b!==null;)o=b,l=o.child,o.tag===22&&o.memoizedState!==null?fy(i):l!==null?(l.return=o,b=l):fy(i);for(;s!==null;)b=s,Sw(s),s=s.sibling;b=i,Qa=a,Je=u}hy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,b=s):hy(t)}}function hy(t){for(;b!==null;){var e=b;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Je||$u(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Je)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Kt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Gg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Gg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&xo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Je||e.flags&512&&$d(e)}catch(d){Ee(e,e.return,d)}}if(e===t){b=null;break}if(n=e.sibling,n!==null){n.return=e.return,b=n;break}b=e.return}}function dy(t){for(;b!==null;){var e=b;if(e===t){b=null;break}var n=e.sibling;if(n!==null){n.return=e.return,b=n;break}b=e.return}}function fy(t){for(;b!==null;){var e=b;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{$u(4,e)}catch(l){Ee(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ee(e,i,l)}}var s=e.return;try{$d(e)}catch(l){Ee(e,s,l)}break;case 5:var o=e.return;try{$d(e)}catch(l){Ee(e,o,l)}}}catch(l){Ee(e,e.return,l)}if(e===t){b=null;break}var a=e.sibling;if(a!==null){a.return=e.return,b=a;break}b=e.return}}var IP=Math.ceil,Xl=Wn.ReactCurrentDispatcher,vp=Wn.ReactCurrentOwner,Ut=Wn.ReactCurrentBatchConfig,ee=0,Fe=null,ke=null,qe=0,Pt=0,Ki=xr(0),Oe=0,$o=null,ai=0,Bu=0,wp=0,fo=null,mt=null,Ep=0,fs=1/0,An=null,Jl=!1,Hd=null,pr=null,Ya=!1,sr=null,Zl=0,po=0,qd=null,wl=-1,El=0;function ht(){return ee&6?Pe():wl!==-1?wl:wl=Pe()}function mr(t){return t.mode&1?ee&2&&qe!==0?qe&-qe:oP.transition!==null?(El===0&&(El=a0()),El):(t=se,t!==0||(t=window.event,t=t===void 0?16:p0(t.type)),t):1}function Zt(t,e,n,r){if(50<po)throw po=0,qd=null,Error(R(185));la(t,n,r),(!(ee&2)||t!==Fe)&&(t===Fe&&(!(ee&2)&&(Bu|=n),Oe===4&&Zn(t,qe)),Et(t,r),n===1&&ee===0&&!(e.mode&1)&&(fs=Pe()+500,ju&&Nr()))}function Et(t,e){var n=t.callbackNode;oA(t,e);var r=Vl(t,t===Fe?qe:0);if(r===0)n!==null&&Tg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Tg(n),e===1)t.tag===0?sP(py.bind(null,t)):O0(py.bind(null,t)),tP(function(){!(ee&6)&&Nr()}),n=null;else{switch(l0(r)){case 1:n=Kf;break;case 4:n=s0;break;case 16:n=Ll;break;case 536870912:n=o0;break;default:n=Ll}n=Dw(n,Aw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Aw(t,e){if(wl=-1,El=0,ee&6)throw Error(R(327));var n=t.callbackNode;if(es()&&t.callbackNode!==n)return null;var r=Vl(t,t===Fe?qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=eu(t,r);else{e=r;var i=ee;ee|=2;var s=Rw();(Fe!==t||qe!==e)&&(An=null,fs=Pe()+500,Zr(t,e));do try{PP();break}catch(a){Pw(t,a)}while(1);op(),Xl.current=s,ee=i,ke!==null?e=0:(Fe=null,qe=0,e=Oe)}if(e!==0){if(e===2&&(i=_d(t),i!==0&&(r=i,e=Wd(t,i))),e===1)throw n=$o,Zr(t,0),Zn(t,r),Et(t,Pe()),n;if(e===6)Zn(t,r);else{if(i=t.current.alternate,!(r&30)&&!SP(i)&&(e=eu(t,r),e===2&&(s=_d(t),s!==0&&(r=s,e=Wd(t,s))),e===1))throw n=$o,Zr(t,0),Zn(t,r),Et(t,Pe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(R(345));case 2:Br(t,mt,An);break;case 3:if(Zn(t,r),(r&130023424)===r&&(e=Ep+500-Pe(),10<e)){if(Vl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ht(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Pd(Br.bind(null,t,mt,An),e);break}Br(t,mt,An);break;case 4:if(Zn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Jt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*IP(r/1960))-r,10<r){t.timeoutHandle=Pd(Br.bind(null,t,mt,An),r);break}Br(t,mt,An);break;case 5:Br(t,mt,An);break;default:throw Error(R(329))}}}return Et(t,Pe()),t.callbackNode===n?Aw.bind(null,t):null}function Wd(t,e){var n=fo;return t.current.memoizedState.isDehydrated&&(Zr(t,e).flags|=256),t=eu(t,e),t!==2&&(e=mt,mt=n,e!==null&&Kd(e)),t}function Kd(t){mt===null?mt=t:mt.push.apply(mt,t)}function SP(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!en(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zn(t,e){for(e&=~wp,e&=~Bu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jt(e),r=1<<n;t[n]=-1,e&=~r}}function py(t){if(ee&6)throw Error(R(327));es();var e=Vl(t,0);if(!(e&1))return Et(t,Pe()),null;var n=eu(t,e);if(t.tag!==0&&n===2){var r=_d(t);r!==0&&(e=r,n=Wd(t,r))}if(n===1)throw n=$o,Zr(t,0),Zn(t,e),Et(t,Pe()),n;if(n===6)throw Error(R(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Br(t,mt,An),Et(t,Pe()),null}function Tp(t,e){var n=ee;ee|=1;try{return t(e)}finally{ee=n,ee===0&&(fs=Pe()+500,ju&&Nr())}}function li(t){sr!==null&&sr.tag===0&&!(ee&6)&&es();var e=ee;ee|=1;var n=Ut.transition,r=se;try{if(Ut.transition=null,se=1,t)return t()}finally{se=r,Ut.transition=n,ee=e,!(ee&6)&&Nr()}}function Ip(){Pt=Ki.current,he(Ki)}function Zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,eP(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(rp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$l();break;case 3:hs(),he(vt),he(st),dp();break;case 5:hp(r);break;case 4:hs();break;case 13:he(ye);break;case 19:he(ye);break;case 10:ap(r.type._context);break;case 22:case 23:Ip()}n=n.return}if(Fe=t,ke=t=gr(t.current,null),qe=Pt=e,Oe=0,$o=null,wp=Bu=ai=0,mt=fo=null,Wr!==null){for(e=0;e<Wr.length;e++)if(n=Wr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Wr=null}return t}function Pw(t,e){do{var n=ke;try{if(op(),yl.current=Yl,Ql){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ql=!1}if(oi=0,Me=De=_e=null,co=!1,jo=0,vp.current=null,n===null||n.return===null){Oe=1,$o=e,ke=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=qe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=ty(o);if(g!==null){g.flags&=-257,ny(g,o,a,s,e),g.mode&1&&ey(s,u,e),e=g,l=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(l),e.updateQueue=v}else _.add(l);break e}else{if(!(e&1)){ey(s,u,e),Sp();break e}l=Error(R(426))}}else if(me&&a.mode&1){var E=ty(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),ny(E,o,a,s,e),ip(ds(l,a));break e}}s=l=ds(l,a),Oe!==4&&(Oe=2),fo===null?fo=[s]:fo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=uw(s,l,e);Kg(s,m);break e;case 1:a=l;var p=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(pr===null||!pr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=cw(s,a,e);Kg(s,w);break e}}s=s.return}while(s!==null)}kw(n)}catch(I){e=I,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(1)}function Rw(){var t=Xl.current;return Xl.current=Yl,t===null?Yl:t}function Sp(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Fe===null||!(ai&268435455)&&!(Bu&268435455)||Zn(Fe,qe)}function eu(t,e){var n=ee;ee|=2;var r=Rw();(Fe!==t||qe!==e)&&(An=null,Zr(t,e));do try{AP();break}catch(i){Pw(t,i)}while(1);if(op(),ee=n,Xl.current=r,ke!==null)throw Error(R(261));return Fe=null,qe=0,Oe}function AP(){for(;ke!==null;)Cw(ke)}function PP(){for(;ke!==null&&!XS();)Cw(ke)}function Cw(t){var e=Nw(t.alternate,t,Pt);t.memoizedProps=t.pendingProps,e===null?kw(t):ke=e,vp.current=null}function kw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=vP(n,e),n!==null){n.flags&=32767,ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Oe=6,ke=null;return}}else if(n=_P(n,e,Pt),n!==null){ke=n;return}if(e=e.sibling,e!==null){ke=e;return}ke=e=t}while(e!==null);Oe===0&&(Oe=5)}function Br(t,e,n){var r=se,i=Ut.transition;try{Ut.transition=null,se=1,RP(t,e,n,r)}finally{Ut.transition=i,se=r}return null}function RP(t,e,n,r){do es();while(sr!==null);if(ee&6)throw Error(R(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(R(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(aA(t,s),t===Fe&&(ke=Fe=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ya||(Ya=!0,Dw(Ll,function(){return es(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ut.transition,Ut.transition=null;var o=se;se=1;var a=ee;ee|=4,vp.current=null,EP(t,n),Iw(n,t),KA(Sd),Ml=!!Id,Sd=Id=null,t.current=n,TP(n),JS(),ee=a,se=o,Ut.transition=s}else t.current=n;if(Ya&&(Ya=!1,sr=t,Zl=i),s=t.pendingLanes,s===0&&(pr=null),tA(n.stateNode),Et(t,Pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Jl)throw Jl=!1,t=Hd,Hd=null,t;return Zl&1&&t.tag!==0&&es(),s=t.pendingLanes,s&1?t===qd?po++:(po=0,qd=t):po=0,Nr(),null}function es(){if(sr!==null){var t=l0(Zl),e=Ut.transition,n=se;try{if(Ut.transition=null,se=16>t?16:t,sr===null)var r=!1;else{if(t=sr,sr=null,Zl=0,ee&6)throw Error(R(331));var i=ee;for(ee|=4,b=t.current;b!==null;){var s=b,o=s.child;if(b.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(b=u;b!==null;){var c=b;switch(c.tag){case 0:case 11:case 15:ho(8,c,s)}var h=c.child;if(h!==null)h.return=c,b=h;else for(;b!==null;){c=b;var d=c.sibling,g=c.return;if(ww(c),c===u){b=null;break}if(d!==null){d.return=g,b=d;break}b=g}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var E=v.sibling;v.sibling=null,v=E}while(v!==null)}}b=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,b=o;else e:for(;b!==null;){if(s=b,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ho(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,b=m;break e}b=s.return}}var p=t.current;for(b=p;b!==null;){o=b;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,b=y;else e:for(o=p;b!==null;){if(a=b,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:$u(9,a)}}catch(I){Ee(a,a.return,I)}if(a===o){b=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,b=w;break e}b=a.return}}if(ee=i,Nr(),gn&&typeof gn.onPostCommitFiberRoot=="function")try{gn.onPostCommitFiberRoot(Ou,t)}catch{}r=!0}return r}finally{se=n,Ut.transition=e}}return!1}function my(t,e,n){e=ds(n,e),e=uw(t,e,1),t=fr(t,e,1),e=ht(),t!==null&&(la(t,1,e),Et(t,e))}function Ee(t,e,n){if(t.tag===3)my(t,t,n);else for(;e!==null;){if(e.tag===3){my(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pr===null||!pr.has(r))){t=ds(n,t),t=cw(e,t,1),e=fr(e,t,1),t=ht(),e!==null&&(la(e,1,t),Et(e,t));break}}e=e.return}}function CP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ht(),t.pingedLanes|=t.suspendedLanes&n,Fe===t&&(qe&n)===n&&(Oe===4||Oe===3&&(qe&130023424)===qe&&500>Pe()-Ep?Zr(t,0):wp|=n),Et(t,e)}function xw(t,e){e===0&&(t.mode&1?(e=Ua,Ua<<=1,!(Ua&130023424)&&(Ua=4194304)):e=1);var n=ht();t=Fn(t,e),t!==null&&(la(t,e,n),Et(t,n))}function kP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),xw(t,n)}function xP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(e),xw(t,n)}var Nw;Nw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vt.current)yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yt=!1,yP(t,e,n);yt=!!(t.flags&131072)}else yt=!1,me&&e.flags&1048576&&b0(e,Hl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;vl(t,e),t=e.pendingProps;var i=ls(e,st.current);Zi(e,n),i=pp(null,e,r,t,i,n);var s=mp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wt(r)?(s=!0,Bl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,up(e),i.updater=Fu,e.stateNode=i,i._reactInternals=e,Od(e,r,t,n),e=Vd(null,e,r,!0,s,n)):(e.tag=0,me&&s&&np(e),ut(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(vl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=DP(r),t=Kt(r,t),i){case 0:e=Ld(null,e,r,t,n);break e;case 1:e=sy(null,e,r,t,n);break e;case 11:e=ry(null,e,r,t,n);break e;case 14:e=iy(null,e,r,Kt(r.type,t),n);break e}throw Error(R(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),Ld(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),sy(t,e,r,i,n);case 3:e:{if(pw(e),t===null)throw Error(R(387));r=e.pendingProps,s=e.memoizedState,i=s.element,j0(t,e),Kl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ds(Error(R(423)),e),e=oy(t,e,r,n,i);break e}else if(r!==i){i=ds(Error(R(424)),e),e=oy(t,e,r,n,i);break e}else for(Rt=dr(e.stateNode.containerInfo.firstChild),xt=e,me=!0,Qt=null,n=B0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(us(),r===i){e=Un(t,e,n);break e}ut(t,e,r,n)}e=e.child}return e;case 5:return z0(e),t===null&&xd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ad(r,i)?o=null:s!==null&&Ad(r,s)&&(e.flags|=32),fw(t,e),ut(t,e,o,n),e.child;case 6:return t===null&&xd(e),null;case 13:return mw(t,e,n);case 4:return cp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=cs(e,null,r,n):ut(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),ry(t,e,r,i,n);case 7:return ut(t,e,e.pendingProps,n),e.child;case 8:return ut(t,e,e.pendingProps.children,n),e.child;case 12:return ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ae(ql,r._currentValue),r._currentValue=o,s!==null)if(en(s.value,o)){if(s.children===i.children&&!vt.current){e=Un(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=bn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Nd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(R(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Nd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ut(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Zi(e,n),i=Bt(i),r=r(i),e.flags|=1,ut(t,e,r,n),e.child;case 14:return r=e.type,i=Kt(r,e.pendingProps),i=Kt(r.type,i),iy(t,e,r,i,n);case 15:return hw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),vl(t,e),e.tag=1,wt(r)?(t=!0,Bl(e)):t=!1,Zi(e,n),U0(e,r,i),Od(e,r,i,n),Vd(null,e,r,!0,t,n);case 19:return gw(t,e,n);case 22:return dw(t,e,n)}throw Error(R(156,e.tag))};function Dw(t,e){return i0(t,e)}function NP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(t,e,n,r){return new NP(t,e,n,r)}function Ap(t){return t=t.prototype,!(!t||!t.isReactComponent)}function DP(t){if(typeof t=="function")return Ap(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Hf)return 11;if(t===qf)return 14}return 2}function gr(t,e){var n=t.alternate;return n===null?(n=Ft(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Tl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ap(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Mi:return ei(n.children,i,s,e);case zf:o=8,i|=8;break;case rd:return t=Ft(12,n,e,i|2),t.elementType=rd,t.lanes=s,t;case id:return t=Ft(13,n,e,i),t.elementType=id,t.lanes=s,t;case sd:return t=Ft(19,n,e,i),t.elementType=sd,t.lanes=s,t;case $v:return zu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Fv:o=10;break e;case Uv:o=9;break e;case Hf:o=11;break e;case qf:o=14;break e;case Yn:o=16,r=null;break e}throw Error(R(130,t==null?t:typeof t,""))}return e=Ft(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ei(t,e,n,r){return t=Ft(7,t,r,e),t.lanes=n,t}function zu(t,e,n,r){return t=Ft(22,t,r,e),t.elementType=$v,t.lanes=n,t.stateNode={isHidden:!1},t}function fh(t,e,n){return t=Ft(6,t,null,e),t.lanes=n,t}function ph(t,e,n){return e=Ft(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function OP(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gc(0),this.expirationTimes=Gc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pp(t,e,n,r,i,s,o,a,l){return t=new OP(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ft(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},up(s),t}function bP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Ow(t){if(!t)return Sr;t=t._reactInternals;e:{if(Ei(t)!==t||t.tag!==1)throw Error(R(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(R(171))}if(t.tag===1){var n=t.type;if(wt(n))return D0(t,n,e)}return e}function bw(t,e,n,r,i,s,o,a,l){return t=Pp(n,r,!0,t,i,s,o,a,l),t.context=Ow(null),n=t.current,r=ht(),i=mr(n),s=bn(r,i),s.callback=e??null,fr(n,s,i),t.current.lanes=i,la(t,i,r),Et(t,r),t}function Hu(t,e,n,r){var i=e.current,s=ht(),o=mr(i);return n=Ow(n),e.context===null?e.context=n:e.pendingContext=n,e=bn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=fr(i,e,o),t!==null&&(Zt(t,i,o,s),gl(t,i,o)),o}function tu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function gy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Rp(t,e){gy(t,e),(t=t.alternate)&&gy(t,e)}function LP(){return null}var Lw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cp(t){this._internalRoot=t}qu.prototype.render=Cp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(R(409));Hu(t,e,null,null)};qu.prototype.unmount=Cp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;li(function(){Hu(null,t,null,null)}),e[jn]=null}};function qu(t){this._internalRoot=t}qu.prototype.unstable_scheduleHydration=function(t){if(t){var e=h0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Jn.length&&e!==0&&e<Jn[n].priority;n++);Jn.splice(n,0,t),n===0&&f0(t)}};function kp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function yy(){}function VP(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=tu(o);s.call(u)}}var o=bw(e,r,t,0,null,!1,!1,"",yy);return t._reactRootContainer=o,t[jn]=o.current,Oo(t.nodeType===8?t.parentNode:t),li(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=tu(l);a.call(u)}}var l=Pp(t,0,!1,null,null,!1,!1,"",yy);return t._reactRootContainer=l,t[jn]=l.current,Oo(t.nodeType===8?t.parentNode:t),li(function(){Hu(e,l,n,r)}),l}function Ku(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=tu(o);a.call(l)}}Hu(e,o,t,i)}else o=VP(n,e,t,i,r);return tu(o)}u0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Qs(e.pendingLanes);n!==0&&(Gf(e,n|1),Et(e,Pe()),!(ee&6)&&(fs=Pe()+500,Nr()))}break;case 13:li(function(){var r=Fn(t,1);if(r!==null){var i=ht();Zt(r,t,1,i)}}),Rp(t,1)}};Qf=function(t){if(t.tag===13){var e=Fn(t,134217728);if(e!==null){var n=ht();Zt(e,t,134217728,n)}Rp(t,134217728)}};c0=function(t){if(t.tag===13){var e=mr(t),n=Fn(t,e);if(n!==null){var r=ht();Zt(n,t,e,r)}Rp(t,e)}};h0=function(){return se};d0=function(t,e){var n=se;try{return se=t,e()}finally{se=n}};md=function(t,e,n){switch(e){case"input":if(ld(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Mu(r);if(!i)throw Error(R(90));zv(r),ld(r,i)}}}break;case"textarea":qv(t,n);break;case"select":e=n.value,e!=null&&Qi(t,!!n.multiple,e,!1)}};Jv=Tp;Zv=li;var MP={usingClientEntryPoint:!1,Events:[ca,$i,Mu,Yv,Xv,Tp]},Bs={findFiberByHostInstance:qr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},jP={bundleType:Bs.bundleType,version:Bs.version,rendererPackageName:Bs.rendererPackageName,rendererConfig:Bs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=n0(t),t===null?null:t.stateNode},findFiberByHostInstance:Bs.findFiberByHostInstance||LP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xa.isDisabled&&Xa.supportsFiber)try{Ou=Xa.inject(jP),gn=Xa}catch{}}Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MP;Ot.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kp(e))throw Error(R(200));return bP(t,e,null,n)};Ot.createRoot=function(t,e){if(!kp(t))throw Error(R(299));var n=!1,r="",i=Lw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Pp(t,1,!1,null,null,n,!1,r,i),t[jn]=e.current,Oo(t.nodeType===8?t.parentNode:t),new Cp(e)};Ot.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(R(188)):(t=Object.keys(t).join(","),Error(R(268,t)));return t=n0(e),t=t===null?null:t.stateNode,t};Ot.flushSync=function(t){return li(t)};Ot.hydrate=function(t,e,n){if(!Wu(e))throw Error(R(200));return Ku(null,t,e,!0,n)};Ot.hydrateRoot=function(t,e,n){if(!kp(t))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Lw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=bw(e,null,t,1,n??null,i,!1,s,o),t[jn]=e.current,Oo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new qu(e)};Ot.render=function(t,e,n){if(!Wu(e))throw Error(R(200));return Ku(null,t,e,!1,n)};Ot.unmountComponentAtNode=function(t){if(!Wu(t))throw Error(R(40));return t._reactRootContainer?(li(function(){Ku(null,null,t,!1,function(){t._reactRootContainer=null,t[jn]=null})}),!0):!1};Ot.unstable_batchedUpdates=Tp;Ot.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Wu(n))throw Error(R(200));if(t==null||t._reactInternals===void 0)throw Error(R(38));return Ku(t,e,n,!1,r)};Ot.version="18.2.0-next-9e3b772b8-20220608";function Vw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vw)}catch(t){console.error(t)}}Vw(),bv.exports=Ot;var FP=bv.exports,_y=FP;td.createRoot=_y.createRoot,td.hydrateRoot=_y.hydrateRoot;/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bo(){return Bo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bo.apply(this,arguments)}var or;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(or||(or={}));const vy="popstate";function UP(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Gd("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:nu(i)}return BP(e,n,null,t)}function Ne(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function xp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function $P(){return Math.random().toString(36).substr(2,8)}function wy(t,e){return{usr:t.state,key:t.key,idx:e}}function Gd(t,e,n,r){return n===void 0&&(n=null),Bo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ps(e):e,{state:n,key:e&&e.key||r||$P()})}function nu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ps(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function BP(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=or.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Bo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=or.Pop;let E=c(),m=E==null?null:E-u;u=E,l&&l({action:a,location:v.location,delta:m})}function d(E,m){a=or.Push;let p=Gd(v.location,E,m);n&&n(p,E),u=c()+1;let y=wy(p,u),w=v.createHref(p);try{o.pushState(y,"",w)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(w)}s&&l&&l({action:a,location:v.location,delta:1})}function g(E,m){a=or.Replace;let p=Gd(v.location,E,m);n&&n(p,E),u=c();let y=wy(p,u),w=v.createHref(p);o.replaceState(y,"",w),s&&l&&l({action:a,location:v.location,delta:0})}function _(E){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof E=="string"?E:nu(E);return Ne(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let v={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(vy,h),l=E,()=>{i.removeEventListener(vy,h),l=null}},createHref(E){return e(i,E)},createURL:_,encodeLocation(E){let m=_(E);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:g,go(E){return o.go(E)}};return v}var Ey;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ey||(Ey={}));function zP(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ps(e):e,i=Np(r.pathname||"/",n);if(i==null)return null;let s=Mw(t);HP(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=ZP(s[a],nR(i));return o}function Mw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ne(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=yr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Ne(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Mw(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:XP(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of jw(s.path))i(s,o,l)}),e}function jw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=jw(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function HP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:JP(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const qP=/^:\w+$/,WP=3,KP=2,GP=1,QP=10,YP=-2,Ty=t=>t==="*";function XP(t,e){let n=t.split("/"),r=n.length;return n.some(Ty)&&(r+=YP),e&&(r+=KP),n.filter(i=>!Ty(i)).reduce((i,s)=>i+(qP.test(s)?WP:s===""?GP:QP),r)}function JP(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function ZP(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=eR({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:yr([i,c.pathname]),pathnameBase:oR(yr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=yr([i,c.pathnameBase]))}return s}function eR(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=tR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=rR(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function tR(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),xp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function nR(t){try{return decodeURI(t)}catch(e){return xp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function rR(t,e){try{return decodeURIComponent(t)}catch(n){return xp(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Np(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function iR(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ps(t):t;return{pathname:n?n.startsWith("/")?n:sR(n,e):e,search:aR(r),hash:lR(i)}}function sR(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function mh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Fw(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Uw(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ps(t):(i=Bo({},t),Ne(!i.pathname||!i.pathname.includes("?"),mh("?","pathname","search",i)),Ne(!i.pathname||!i.pathname.includes("#"),mh("#","pathname","hash",i)),Ne(!i.search||!i.search.includes("#"),mh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=iR(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const yr=t=>t.join("/").replace(/\/\/+/g,"/"),oR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),aR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,lR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function uR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const $w=["post","put","patch","delete"];new Set($w);const cR=["get",...$w];new Set(cR);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ru(){return ru=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ru.apply(this,arguments)}const Dp=T.createContext(null),Bw=T.createContext(null),Ti=T.createContext(null),Gu=T.createContext(null),Dr=T.createContext({outlet:null,matches:[],isDataRoute:!1}),zw=T.createContext(null);function hR(t,e){let{relative:n}=e===void 0?{}:e;da()||Ne(!1);let{basename:r,navigator:i}=T.useContext(Ti),{hash:s,pathname:o,search:a}=Op(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:yr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function da(){return T.useContext(Gu)!=null}function fa(){return da()||Ne(!1),T.useContext(Gu).location}function Hw(t){T.useContext(Ti).static||T.useLayoutEffect(t)}function sn(){let{isDataRoute:t}=T.useContext(Dr);return t?AR():dR()}function dR(){da()||Ne(!1);let t=T.useContext(Dp),{basename:e,navigator:n}=T.useContext(Ti),{matches:r}=T.useContext(Dr),{pathname:i}=fa(),s=JSON.stringify(Fw(r).map(l=>l.pathnameBase)),o=T.useRef(!1);return Hw(()=>{o.current=!0}),T.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Uw(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:yr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function fR(){let{matches:t}=T.useContext(Dr),e=t[t.length-1];return e?e.params:{}}function Op(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=T.useContext(Dr),{pathname:i}=fa(),s=JSON.stringify(Fw(r).map(o=>o.pathnameBase));return T.useMemo(()=>Uw(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function pR(t,e){return mR(t,e)}function mR(t,e,n){da()||Ne(!1);let{navigator:r}=T.useContext(Ti),{matches:i}=T.useContext(Dr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=fa(),u;if(e){var c;let v=typeof e=="string"?Ps(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||Ne(!1),u=v}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",g=zP(t,{pathname:d}),_=wR(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:yr([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:yr([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&_?T.createElement(Gu.Provider,{value:{location:ru({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:or.Pop}},_):_}function gR(){let t=SR(),e=uR(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},e),n?T.createElement("pre",{style:i},n):null,s)}const yR=T.createElement(gR,null);class _R extends T.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?T.createElement(Dr.Provider,{value:this.props.routeContext},T.createElement(zw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vR(t){let{routeContext:e,match:n,children:r}=t,i=T.useContext(Dp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Dr.Provider,{value:e},r)}function wR(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Ne(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||yR);let d=e.concat(s.slice(0,u+1)),g=()=>{let _;return c?_=h:l.route.Component?_=T.createElement(l.route.Component,null):l.route.element?_=l.route.element:_=a,T.createElement(vR,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:_})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?T.createElement(_R,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:g(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):g()},null)}var qw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(qw||{}),iu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(iu||{});function ER(t){let e=T.useContext(Dp);return e||Ne(!1),e}function TR(t){let e=T.useContext(Bw);return e||Ne(!1),e}function IR(t){let e=T.useContext(Dr);return e||Ne(!1),e}function Ww(t){let e=IR(),n=e.matches[e.matches.length-1];return n.route.id||Ne(!1),n.route.id}function SR(){var t;let e=T.useContext(zw),n=TR(iu.UseRouteError),r=Ww(iu.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function AR(){let{router:t}=ER(qw.UseNavigateStable),e=Ww(iu.UseNavigateStable),n=T.useRef(!1);return Hw(()=>{n.current=!0}),T.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ru({fromRouteId:e},s)))},[t,e])}function At(t){Ne(!1)}function PR(t){let{basename:e="/",children:n=null,location:r,navigationType:i=or.Pop,navigator:s,static:o=!1}=t;da()&&Ne(!1);let a=e.replace(/^\/*/,"/"),l=T.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Ps(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:g="default"}=r,_=T.useMemo(()=>{let v=Np(u,a);return v==null?null:{location:{pathname:v,search:c,hash:h,state:d,key:g},navigationType:i}},[a,u,c,h,d,g,i]);return _==null?null:T.createElement(Ti.Provider,{value:l},T.createElement(Gu.Provider,{children:n,value:_}))}function RR(t){let{children:e,location:n}=t;return pR(Qd(e),n)}new Promise(()=>{});function Qd(t,e){e===void 0&&(e=[]);let n=[];return T.Children.forEach(t,(r,i)=>{if(!T.isValidElement(r))return;let s=[...e,i];if(r.type===T.Fragment){n.push.apply(n,Qd(r.props.children,s));return}r.type!==At&&Ne(!1),!r.props.index||!r.props.children||Ne(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Qd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function su(){return su=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},su.apply(this,arguments)}function Kw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function CR(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function kR(t,e){return t.button===0&&(!e||e==="_self")&&!CR(t)}const xR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],NR=["aria-current","caseSensitive","className","end","style","to","children"],DR="startTransition",Iy=kS[DR];function OR(t){let{basename:e,children:n,future:r,window:i}=t,s=T.useRef();s.current==null&&(s.current=UP({window:i,v5Compat:!0}));let o=s.current,[a,l]=T.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=T.useCallback(h=>{u&&Iy?Iy(()=>l(h)):l(h)},[l,u]);return T.useLayoutEffect(()=>o.listen(c),[o,c]),T.createElement(PR,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const bR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",LR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gw=T.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=Kw(e,xR),{basename:d}=T.useContext(Ti),g,_=!1;if(typeof u=="string"&&LR.test(u)&&(g=u,bR))try{let p=new URL(window.location.href),y=u.startsWith("//")?new URL(p.protocol+u):new URL(u),w=Np(y.pathname,d);y.origin===p.origin&&w!=null?u=w+y.search+y.hash:_=!0}catch{}let v=hR(u,{relative:i}),E=VR(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function m(p){r&&r(p),p.defaultPrevented||E(p)}return T.createElement("a",su({},h,{href:g||v,onClick:_||s?r:m,ref:n,target:l}))}),Gn=T.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=Kw(e,NR),h=Op(l,{relative:c.relative}),d=fa(),g=T.useContext(Bw),{navigator:_}=T.useContext(Ti),v=_.encodeLocation?_.encodeLocation(h).pathname:h.pathname,E=d.pathname,m=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;i||(E=E.toLowerCase(),m=m?m.toLowerCase():null,v=v.toLowerCase());let p=E===v||!o&&E.startsWith(v)&&E.charAt(v.length)==="/",y=m!=null&&(m===v||!o&&m.startsWith(v)&&m.charAt(v.length)==="/"),w=p?r:void 0,I;typeof s=="function"?I=s({isActive:p,isPending:y}):I=[s,p?"active":null,y?"pending":null].filter(Boolean).join(" ");let A=typeof a=="function"?a({isActive:p,isPending:y}):a;return T.createElement(Gw,su({},c,{"aria-current":w,className:I,ref:n,style:A,to:l}),typeof u=="function"?u({isActive:p,isPending:y}):u)});var Sy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Sy||(Sy={}));var Ay;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ay||(Ay={}));function VR(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=sn(),l=fa(),u=Op(t,{relative:o});return T.useCallback(c=>{if(kR(c,n)){c.preventDefault();let h=r!==void 0?r:nu(l)===nu(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}function Qw(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=Qw(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function ar(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=Qw(t))&&(r&&(r+=" "),r+=e);return r}const mo=t=>typeof t=="number"&&!isNaN(t),ui=t=>typeof t=="string",_t=t=>typeof t=="function",Il=t=>ui(t)||_t(t)?t:null,gh=t=>T.isValidElement(t)||ui(t)||_t(t)||mo(t);function MR(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function Qu(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(o){let{children:a,position:l,preventExitTransition:u,done:c,nodeRef:h,isIn:d}=o;const g=r?`${e}--${l}`:e,_=r?`${n}--${l}`:n,v=T.useRef(0);return T.useLayoutEffect(()=>{const E=h.current,m=g.split(" "),p=y=>{y.target===h.current&&(E.dispatchEvent(new Event("d")),E.removeEventListener("animationend",p),E.removeEventListener("animationcancel",p),v.current===0&&y.type!=="animationcancel"&&E.classList.remove(...m))};E.classList.add(...m),E.addEventListener("animationend",p),E.addEventListener("animationcancel",p)},[]),T.useEffect(()=>{const E=h.current,m=()=>{E.removeEventListener("animationend",m),i?MR(E,c,s):c()};d||(u?m():(v.current=1,E.className+=` ${_}`,E.addEventListener("animationend",m)))},[d]),K.createElement(K.Fragment,null,a)}}function Py(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const Lt={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},Ja=t=>{let{theme:e,type:n,...r}=t;return K.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},yh={info:function(t){return K.createElement(Ja,{...t},K.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return K.createElement(Ja,{...t},K.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return K.createElement(Ja,{...t},K.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return K.createElement(Ja,{...t},K.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return K.createElement("div",{className:"Toastify__spinner"})}};function jR(t){const[,e]=T.useReducer(g=>g+1,0),[n,r]=T.useState([]),i=T.useRef(null),s=T.useRef(new Map).current,o=g=>n.indexOf(g)!==-1,a=T.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:o,getToast:g=>s.get(g)}).current;function l(g){let{containerId:_}=g;const{limit:v}=a.props;!v||_&&a.containerId!==_||(a.count-=a.queue.length,a.queue=[])}function u(g){r(_=>g==null?[]:_.filter(v=>v!==g))}function c(){const{toastContent:g,toastProps:_,staleId:v}=a.queue.shift();d(g,_,v)}function h(g,_){let{delay:v,staleId:E,...m}=_;if(!gh(g)||function(X){return!i.current||a.props.enableMultiContainer&&X.containerId!==a.props.containerId||s.has(X.toastId)&&X.updateId==null}(m))return;const{toastId:p,updateId:y,data:w}=m,{props:I}=a,A=()=>u(p),k=y==null;k&&a.count++;const C={...I,style:I.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(m).filter(X=>{let[O,Z]=X;return Z!=null})),toastId:p,updateId:y,data:w,closeToast:A,isIn:!1,className:Il(m.className||I.toastClassName),bodyClassName:Il(m.bodyClassName||I.bodyClassName),progressClassName:Il(m.progressClassName||I.progressClassName),autoClose:!m.isLoading&&(U=m.autoClose,L=I.autoClose,U===!1||mo(U)&&U>0?U:L),deleteToast(){const X=Py(s.get(p),"removed");s.delete(p),Lt.emit(4,X);const O=a.queue.length;if(a.count=p==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),O>0){const Z=p==null?a.props.limit:1;if(O===1||Z===1)a.displayedToast++,c();else{const pe=Z>O?O:Z;a.displayedToast=pe;for(let re=0;re<pe;re++)c()}}else e()}};var U,L;C.iconOut=function(X){let{theme:O,type:Z,isLoading:pe,icon:re}=X,Ae=null;const x={theme:O,type:Z};return re===!1||(_t(re)?Ae=re(x):T.isValidElement(re)?Ae=T.cloneElement(re,x):ui(re)||mo(re)?Ae=re:pe?Ae=yh.spinner():(j=>j in yh)(Z)&&(Ae=yh[Z](x))),Ae}(C),_t(m.onOpen)&&(C.onOpen=m.onOpen),_t(m.onClose)&&(C.onClose=m.onClose),C.closeButton=I.closeButton,m.closeButton===!1||gh(m.closeButton)?C.closeButton=m.closeButton:m.closeButton===!0&&(C.closeButton=!gh(I.closeButton)||I.closeButton);let ie=g;T.isValidElement(g)&&!ui(g.type)?ie=T.cloneElement(g,{closeToast:A,toastProps:C,data:w}):_t(g)&&(ie=g({closeToast:A,toastProps:C,data:w})),I.limit&&I.limit>0&&a.count>I.limit&&k?a.queue.push({toastContent:ie,toastProps:C,staleId:E}):mo(v)?setTimeout(()=>{d(ie,C,E)},v):d(ie,C,E)}function d(g,_,v){const{toastId:E}=_;v&&s.delete(v);const m={content:g,props:_};s.set(E,m),r(p=>[...p,E].filter(y=>y!==v)),Lt.emit(4,Py(m,m.props.updateId==null?"added":"updated"))}return T.useEffect(()=>(a.containerId=t.containerId,Lt.cancelEmit(3).on(0,h).on(1,g=>i.current&&u(g)).on(5,l).emit(2,a),()=>{s.clear(),Lt.emit(3,a)}),[]),T.useEffect(()=>{a.props=t,a.isToastActive=o,a.displayedToast=n.length}),{getToastToRender:function(g){const _=new Map,v=Array.from(s.values());return t.newestOnTop&&v.reverse(),v.forEach(E=>{const{position:m}=E.props;_.has(m)||_.set(m,[]),_.get(m).push(E)}),Array.from(_,E=>g(E[0],E[1]))},containerRef:i,isToastActive:o}}function Ry(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function Cy(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function FR(t){const[e,n]=T.useState(!1),[r,i]=T.useState(!1),s=T.useRef(null),o=T.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=T.useRef(t),{autoClose:l,pauseOnHover:u,closeToast:c,onClick:h,closeOnClick:d}=t;function g(w){if(t.draggable){w.nativeEvent.type==="touchstart"&&w.nativeEvent.preventDefault(),o.didMove=!1,document.addEventListener("mousemove",m),document.addEventListener("mouseup",p),document.addEventListener("touchmove",m),document.addEventListener("touchend",p);const I=s.current;o.canCloseOnClick=!0,o.canDrag=!0,o.boundingRect=I.getBoundingClientRect(),I.style.transition="",o.x=Ry(w.nativeEvent),o.y=Cy(w.nativeEvent),t.draggableDirection==="x"?(o.start=o.x,o.removalDistance=I.offsetWidth*(t.draggablePercent/100)):(o.start=o.y,o.removalDistance=I.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function _(w){if(o.boundingRect){const{top:I,bottom:A,left:k,right:C}=o.boundingRect;w.nativeEvent.type!=="touchend"&&t.pauseOnHover&&o.x>=k&&o.x<=C&&o.y>=I&&o.y<=A?E():v()}}function v(){n(!0)}function E(){n(!1)}function m(w){const I=s.current;o.canDrag&&I&&(o.didMove=!0,e&&E(),o.x=Ry(w),o.y=Cy(w),o.delta=t.draggableDirection==="x"?o.x-o.start:o.y-o.start,o.start!==o.x&&(o.canCloseOnClick=!1),I.style.transform=`translate${t.draggableDirection}(${o.delta}px)`,I.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function p(){document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",p),document.removeEventListener("touchmove",m),document.removeEventListener("touchend",p);const w=s.current;if(o.canDrag&&o.didMove&&w){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),void t.closeToast();w.style.transition="transform 0.2s, opacity 0.2s",w.style.transform=`translate${t.draggableDirection}(0)`,w.style.opacity="1"}}T.useEffect(()=>{a.current=t}),T.useEffect(()=>(s.current&&s.current.addEventListener("d",v,{once:!0}),_t(t.onOpen)&&t.onOpen(T.isValidElement(t.children)&&t.children.props),()=>{const w=a.current;_t(w.onClose)&&w.onClose(T.isValidElement(w.children)&&w.children.props)}),[]),T.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||E(),window.addEventListener("focus",v),window.addEventListener("blur",E)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",v),window.removeEventListener("blur",E))}),[t.pauseOnFocusLoss]);const y={onMouseDown:g,onTouchStart:g,onMouseUp:_,onTouchEnd:_};return l&&u&&(y.onMouseEnter=E,y.onMouseLeave=v),d&&(y.onClick=w=>{h&&h(w),o.canCloseOnClick&&c()}),{playToast:v,pauseToast:E,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:y}}function Yw(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return K.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),e(i)},"aria-label":r},K.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},K.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function UR(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:a,controlledProgress:l,progress:u,rtl:c,isIn:h,theme:d}=t;const g=s||l&&u===0,_={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:g?0:1};l&&(_.transform=`scaleX(${u})`);const v=ar("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${d}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":c}),E=_t(o)?o({rtl:c,type:i,defaultClassName:v}):ar(v,o);return K.createElement("div",{role:"progressbar","aria-hidden":g?"true":"false","aria-label":"notification timer",className:E,style:_,[l&&u>=1?"onTransitionEnd":"onAnimationEnd"]:l&&u<1?null:()=>{h&&r()}})}const $R=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i}=FR(t),{closeButton:s,children:o,autoClose:a,onClick:l,type:u,hideProgressBar:c,closeToast:h,transition:d,position:g,className:_,style:v,bodyClassName:E,bodyStyle:m,progressClassName:p,progressStyle:y,updateId:w,role:I,progress:A,rtl:k,toastId:C,deleteToast:U,isIn:L,isLoading:ie,iconOut:X,closeOnClick:O,theme:Z}=t,pe=ar("Toastify__toast",`Toastify__toast-theme--${Z}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":O}),re=_t(_)?_({rtl:k,position:g,type:u,defaultClassName:pe}):ar(pe,_),Ae=!!A||!a,x={closeToast:h,type:u,theme:Z};let j=null;return s===!1||(j=_t(s)?s(x):T.isValidElement(s)?T.cloneElement(s,x):Yw(x)),K.createElement(d,{isIn:L,done:U,position:g,preventExitTransition:n,nodeRef:r},K.createElement("div",{id:C,onClick:l,className:re,...i,style:v,ref:r},K.createElement("div",{...L&&{role:I},className:_t(E)?E({type:u}):ar("Toastify__toast-body",E),style:m},X!=null&&K.createElement("div",{className:ar("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!ie})},X),K.createElement("div",null,o)),j,K.createElement(UR,{...w&&!Ae?{key:`pb-${w}`}:{},rtl:k,theme:Z,delay:a,isRunning:e,isIn:L,closeToast:h,hide:c,type:u,style:y,className:p,controlledProgress:Ae,progress:A||0})))},Yu=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},BR=Qu(Yu("bounce",!0));Qu(Yu("slide",!0));Qu(Yu("zoom"));Qu(Yu("flip"));const Yd=T.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=jR(t),{className:s,style:o,rtl:a,containerId:l}=t;function u(c){const h=ar("Toastify__toast-container",`Toastify__toast-container--${c}`,{"Toastify__toast-container--rtl":a});return _t(s)?s({position:c,rtl:a,defaultClassName:h}):ar(h,Il(s))}return T.useEffect(()=>{e&&(e.current=r.current)},[]),K.createElement("div",{ref:r,className:"Toastify",id:l},n((c,h)=>{const d=h.length?{...o}:{...o,pointerEvents:"none"};return K.createElement("div",{className:u(c),style:d,key:`container-${c}`},h.map((g,_)=>{let{content:v,props:E}=g;return K.createElement($R,{...E,isIn:i(E.toastId),style:{...E.style,"--nth":_+1,"--len":h.length},key:`toast-${E.key}`},v)}))}))});Yd.displayName="ToastContainer",Yd.defaultProps={position:"top-right",transition:BR,autoClose:5e3,closeButton:Yw,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let _h,zr=new Map,Xs=[],zR=1;function Xw(){return""+zR++}function HR(t){return t&&(ui(t.toastId)||mo(t.toastId))?t.toastId:Xw()}function go(t,e){return zr.size>0?Lt.emit(0,t,e):Xs.push({content:t,options:e}),e.toastId}function ou(t,e){return{...e,type:e&&e.type||t,toastId:HR(e)}}function Za(t){return(e,n)=>go(e,ou(t,n))}function F(t,e){return go(t,ou("default",e))}F.loading=(t,e)=>go(t,ou("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),F.promise=function(t,e,n){let r,{pending:i,error:s,success:o}=e;i&&(r=ui(i)?F.loading(i,n):F.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(c,h,d)=>{if(h==null)return void F.dismiss(r);const g={type:c,...a,...n,data:d},_=ui(h)?{render:h}:h;return r?F.update(r,{...g,..._}):F(_.render,{...g,..._}),d},u=_t(t)?t():t;return u.then(c=>l("success",o,c)).catch(c=>l("error",s,c)),u},F.success=Za("success"),F.info=Za("info"),F.error=Za("error"),F.warning=Za("warning"),F.warn=F.warning,F.dark=(t,e)=>go(t,ou("default",{theme:"dark",...e})),F.dismiss=t=>{zr.size>0?Lt.emit(1,t):Xs=Xs.filter(e=>t!=null&&e.options.toastId!==t)},F.clearWaitingQueue=function(t){return t===void 0&&(t={}),Lt.emit(5,t)},F.isActive=t=>{let e=!1;return zr.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},F.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,i){let{containerId:s}=i;const o=zr.get(s||_h);return o&&o.getToast(r)}(t,e);if(n){const{props:r,content:i}=n,s={delay:100,...r,...e,toastId:e.toastId||t,updateId:Xw()};s.toastId!==t&&(s.staleId=t);const o=s.render||i;delete s.render,go(o,s)}},0)},F.done=t=>{F.update(t,{progress:1})},F.onChange=t=>(Lt.on(4,t),()=>{Lt.off(4,t)}),F.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},F.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Lt.on(2,t=>{_h=t.containerId||t,zr.set(_h,t),Xs.forEach(e=>{Lt.emit(0,e.content,e.options)}),Xs=[]}).on(3,t=>{zr.delete(t.containerId||t),zr.size===0&&Lt.off(0).off(1).off(5)});/**
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
 *//**
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
 */const Jw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},qR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Zw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[c],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new WR;const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const _=u<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class WR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const KR=function(t){const e=Jw(t);return Zw.encodeByteArray(e,!0)},au=function(t){return KR(t).replace(/\./g,"")},eE=function(t){try{return Zw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function GR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const QR=()=>GR().__FIREBASE_DEFAULTS__,YR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},XR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&eE(t[1]);return e&&JSON.parse(e)},Xu=()=>{try{return QR()||YR()||XR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},tE=t=>{var e,n;return(n=(e=Xu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},nE=t=>{const e=tE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},rE=()=>{var t;return(t=Xu())===null||t===void 0?void 0:t.config},iE=t=>{var e;return(e=Xu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class JR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function sE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[au(JSON.stringify(n)),au(JSON.stringify(o)),a].join(".")}/**
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
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ZR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function eC(){var t;const e=(t=Xu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function tC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function nC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rC(){const t=ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function oE(){try{return typeof indexedDB=="object"}catch{return!1}}function aE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function iC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const sC="FirebaseError";class on extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=sC,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ii.prototype.create)}}class Ii{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?oC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new on(i,a,r)}}function oC(t,e){return t.replace(aC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const aC=/\{\$([^}]+)}/g;function lC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function lu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(ky(s)&&ky(o)){if(!lu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ky(t){return t!==null&&typeof t=="object"}/**
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
 */function pa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Js(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Zs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function uC(t,e){const n=new cC(t,e);return n.subscribe.bind(n)}class cC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");hC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=vh),i.error===void 0&&(i.error=vh),i.complete===void 0&&(i.complete=vh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vh(){}/**
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
 */function fe(t){return t&&t._delegate?t._delegate:t}class Ht{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Hr="[DEFAULT]";/**
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
 */class dC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new JR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pC(e))try{this.getOrInitializeService({instanceIdentifier:Hr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hr){return this.instances.has(e)}getOptions(e=Hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Hr){return this.component?this.component.multipleInstances?e:Hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fC(t){return t===Hr?void 0:t}function pC(t){return t.instantiationMode==="EAGER"}/**
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
 */class mC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const gC={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},yC=Y.INFO,_C={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},vC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=_C[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bp{constructor(e){this.name=e,this._logLevel=yC,this._logHandler=vC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const wC=(t,e)=>e.some(n=>t instanceof n);let xy,Ny;function EC(){return xy||(xy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function TC(){return Ny||(Ny=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lE=new WeakMap,Xd=new WeakMap,uE=new WeakMap,wh=new WeakMap,Lp=new WeakMap;function IC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(_r(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&lE.set(n,t)}).catch(()=>{}),Lp.set(e,t),e}function SC(t){if(Xd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Xd.set(t,e)}let Jd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||uE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _r(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function AC(t){Jd=t(Jd)}function PC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Eh(this),e,...n);return uE.set(r,e.sort?e.sort():[e]),_r(r)}:TC().includes(t)?function(...e){return t.apply(Eh(this),e),_r(lE.get(this))}:function(...e){return _r(t.apply(Eh(this),e))}}function RC(t){return typeof t=="function"?PC(t):(t instanceof IDBTransaction&&SC(t),wC(t,EC())?new Proxy(t,Jd):t)}function _r(t){if(t instanceof IDBRequest)return IC(t);if(wh.has(t))return wh.get(t);const e=RC(t);return e!==t&&(wh.set(t,e),Lp.set(e,t)),e}const Eh=t=>Lp.get(t);function CC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=_r(o);return r&&o.addEventListener("upgradeneeded",l=>{r(_r(o.result),l.oldVersion,l.newVersion,_r(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const kC=["get","getKey","getAll","getAllKeys","count"],xC=["put","add","delete","clear"],Th=new Map;function Dy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Th.get(e))return Th.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=xC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||kC.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Th.set(e,s),s}AC(t=>({...t,get:(e,n,r)=>Dy(e,n)||t.get(e,n,r),has:(e,n)=>!!Dy(e,n)||t.has(e,n)}));/**
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
 */class NC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(DC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function DC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zd="@firebase/app",Oy="0.9.19";/**
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
 */const ci=new bp("@firebase/app"),OC="@firebase/app-compat",bC="@firebase/analytics-compat",LC="@firebase/analytics",VC="@firebase/app-check-compat",MC="@firebase/app-check",jC="@firebase/auth",FC="@firebase/auth-compat",UC="@firebase/database",$C="@firebase/database-compat",BC="@firebase/functions",zC="@firebase/functions-compat",HC="@firebase/installations",qC="@firebase/installations-compat",WC="@firebase/messaging",KC="@firebase/messaging-compat",GC="@firebase/performance",QC="@firebase/performance-compat",YC="@firebase/remote-config",XC="@firebase/remote-config-compat",JC="@firebase/storage",ZC="@firebase/storage-compat",ek="@firebase/firestore",tk="@firebase/firestore-compat",nk="firebase",rk="10.4.0";/**
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
 */const ef="[DEFAULT]",ik={[Zd]:"fire-core",[OC]:"fire-core-compat",[LC]:"fire-analytics",[bC]:"fire-analytics-compat",[MC]:"fire-app-check",[VC]:"fire-app-check-compat",[jC]:"fire-auth",[FC]:"fire-auth-compat",[UC]:"fire-rtdb",[$C]:"fire-rtdb-compat",[BC]:"fire-fn",[zC]:"fire-fn-compat",[HC]:"fire-iid",[qC]:"fire-iid-compat",[WC]:"fire-fcm",[KC]:"fire-fcm-compat",[GC]:"fire-perf",[QC]:"fire-perf-compat",[YC]:"fire-rc",[XC]:"fire-rc-compat",[JC]:"fire-gcs",[ZC]:"fire-gcs-compat",[ek]:"fire-fst",[tk]:"fire-fst-compat","fire-js":"fire-js",[nk]:"fire-js-all"};/**
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
 */const uu=new Map,tf=new Map;function sk(t,e){try{t.container.addComponent(e)}catch(n){ci.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function tn(t){const e=t.name;if(tf.has(e))return ci.debug(`There were multiple attempts to register component ${e}.`),!1;tf.set(e,t);for(const n of uu.values())sk(n,t);return!0}function Si(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const ok={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},vr=new Ii("app","Firebase",ok);/**
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
 */class ak{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ht("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ai=rk;function cE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ef,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw vr.create("bad-app-name",{appName:String(i)});if(n||(n=rE()),!n)throw vr.create("no-options");const s=uu.get(i);if(s){if(lu(n,s.options)&&lu(r,s.config))return s;throw vr.create("duplicate-app",{appName:i})}const o=new mC(i);for(const l of tf.values())o.addComponent(l);const a=new ak(n,r,o);return uu.set(i,a),a}function Ju(t=ef){const e=uu.get(t);if(!e&&t===ef&&rE())return cE();if(!e)throw vr.create("no-app",{appName:t});return e}function Tt(t,e,n){var r;let i=(r=ik[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ci.warn(a.join(" "));return}tn(new Ht(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const lk="firebase-heartbeat-database",uk=1,zo="firebase-heartbeat-store";let Ih=null;function hE(){return Ih||(Ih=CC(lk,uk,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(zo)}}}).catch(t=>{throw vr.create("idb-open",{originalErrorMessage:t.message})})),Ih}async function ck(t){try{return await(await hE()).transaction(zo).objectStore(zo).get(dE(t))}catch(e){if(e instanceof on)ci.warn(e.message);else{const n=vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ci.warn(n.message)}}}async function by(t,e){try{const r=(await hE()).transaction(zo,"readwrite");await r.objectStore(zo).put(e,dE(t)),await r.done}catch(n){if(n instanceof on)ci.warn(n.message);else{const r=vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ci.warn(r.message)}}}function dE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const hk=1024,dk=30*24*60*60*1e3;class fk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ly();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=dk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ly(),{heartbeatsToSend:n,unsentEntries:r}=pk(this._heartbeatsCache.heartbeats),i=au(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ly(){return new Date().toISOString().substring(0,10)}function pk(t,e=hk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Vy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Vy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class mk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oE()?aE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ck(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return by(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return by(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Vy(t){return au(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function gk(t){tn(new Ht("platform-logger",e=>new NC(e),"PRIVATE")),tn(new Ht("heartbeat",e=>new fk(e),"PRIVATE")),Tt(Zd,Oy,t),Tt(Zd,Oy,"esm2017"),Tt("fire-js","")}gk("");var yk="firebase",_k="10.4.0";/**
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
 */Tt(yk,_k,"app");var vk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,Vp=Vp||{},z=vk||self;function Zu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ma(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function wk(t){return Object.prototype.hasOwnProperty.call(t,Sh)&&t[Sh]||(t[Sh]=++Ek)}var Sh="closure_uid_"+(1e9*Math.random()>>>0),Ek=0;function Tk(t,e,n){return t.call.apply(t.bind,arguments)}function Ik(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function tt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?tt=Tk:tt=Ik,tt.apply(null,arguments)}function el(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function $e(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Or(){this.s=this.s,this.o=this.o}var Sk=0;Or.prototype.s=!1;Or.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Sk!=0)&&wk(this)};Or.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const fE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Mp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function My(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Zu(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function nt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}nt.prototype.h=function(){this.defaultPrevented=!0};var Ak=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",()=>{},e),z.removeEventListener("test",()=>{},e)}catch{}return t}();function Ho(t){return/^[\s\xa0]*$/.test(t)}function ec(){var t=z.navigator;return t&&(t=t.userAgent)?t:""}function hn(t){return ec().indexOf(t)!=-1}function jp(t){return jp[" "](t),t}jp[" "]=function(){};function Pk(t,e){var n=_x;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var Rk=hn("Opera"),ps=hn("Trident")||hn("MSIE"),pE=hn("Edge"),nf=pE||ps,mE=hn("Gecko")&&!(ec().toLowerCase().indexOf("webkit")!=-1&&!hn("Edge"))&&!(hn("Trident")||hn("MSIE"))&&!hn("Edge"),Ck=ec().toLowerCase().indexOf("webkit")!=-1&&!hn("Edge");function gE(){var t=z.document;return t?t.documentMode:void 0}var rf;e:{var Ah="",Ph=function(){var t=ec();if(mE)return/rv:([^\);]+)(\)|;)/.exec(t);if(pE)return/Edge\/([\d\.]+)/.exec(t);if(ps)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Ck)return/WebKit\/(\S+)/.exec(t);if(Rk)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ph&&(Ah=Ph?Ph[1]:""),ps){var Rh=gE();if(Rh!=null&&Rh>parseFloat(Ah)){rf=String(Rh);break e}}rf=Ah}var sf;if(z.document&&ps){var jy=gE();sf=jy||parseInt(rf,10)||void 0}else sf=void 0;var kk=sf;function qo(t,e){if(nt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(mE){e:{try{jp(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:xk[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&qo.$.h.call(this)}}$e(qo,nt);var xk={2:"touch",3:"pen",4:"mouse"};qo.prototype.h=function(){qo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ga="closure_listenable_"+(1e6*Math.random()|0),Nk=0;function Dk(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++Nk,this.fa=this.ia=!1}function tc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Fp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Ok(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function yE(t){const e={};for(const n in t)e[n]=t[n];return e}const Fy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _E(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Fy.length;s++)n=Fy[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function nc(t){this.src=t,this.g={},this.h=0}nc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=af(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Dk(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function of(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=fE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(tc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function af(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Up="closure_lm_"+(1e6*Math.random()|0),Ch={};function vE(t,e,n,r,i){if(r&&r.once)return EE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)vE(t,e[s],n,r,i);return null}return n=zp(n),t&&t[ga]?t.O(e,n,ma(r)?!!r.capture:!!r,i):wE(t,e,n,!1,r,i)}function wE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ma(i)?!!i.capture:!!i,a=Bp(t);if(a||(t[Up]=a=new nc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=bk(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Ak||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(IE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function bk(){function t(n){return e.call(t.src,t.listener,n)}const e=Lk;return t}function EE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)EE(t,e[s],n,r,i);return null}return n=zp(n),t&&t[ga]?t.P(e,n,ma(r)?!!r.capture:!!r,i):wE(t,e,n,!0,r,i)}function TE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)TE(t,e[s],n,r,i);else r=ma(r)?!!r.capture:!!r,n=zp(n),t&&t[ga]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=af(s,n,r,i),-1<n&&(tc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Bp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=af(e,n,r,i)),(n=-1<t?e[t]:null)&&$p(n))}function $p(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ga])of(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(IE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Bp(e))?(of(n,t),n.h==0&&(n.src=null,e[Up]=null)):tc(t)}}}function IE(t){return t in Ch?Ch[t]:Ch[t]="on"+t}function Lk(t,e){if(t.fa)t=!0;else{e=new qo(e,this);var n=t.listener,r=t.la||t.src;t.ia&&$p(t),t=n.call(r,e)}return t}function Bp(t){return t=t[Up],t instanceof nc?t:null}var kh="__closure_events_fn_"+(1e9*Math.random()>>>0);function zp(t){return typeof t=="function"?t:(t[kh]||(t[kh]=function(e){return t.handleEvent(e)}),t[kh])}function Ue(){Or.call(this),this.i=new nc(this),this.S=this,this.J=null}$e(Ue,Or);Ue.prototype[ga]=!0;Ue.prototype.removeEventListener=function(t,e,n,r){TE(this,t,e,n,r)};function We(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new nt(e,t);else if(e instanceof nt)e.target=e.target||t;else{var i=e;e=new nt(r,t),_E(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=tl(o,r,!0,e)&&i}if(o=e.g=t,i=tl(o,r,!0,e)&&i,i=tl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=tl(o,r,!1,e)&&i}Ue.prototype.N=function(){if(Ue.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)tc(n[r]);delete t.g[e],t.h--}}this.J=null};Ue.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ue.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function tl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&of(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Hp=z.JSON.stringify;class Vk{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Mk(){var t=qp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class jk{constructor(){this.h=this.g=null}add(e,n){const r=SE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var SE=new Vk(()=>new Fk,t=>t.reset());class Fk{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Uk(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function $k(t){z.setTimeout(()=>{throw t},0)}let Wo,Ko=!1,qp=new jk,AE=()=>{const t=z.Promise.resolve(void 0);Wo=()=>{t.then(Bk)}};var Bk=()=>{for(var t;t=Mk();){try{t.h.call(t.g)}catch(n){$k(n)}var e=SE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ko=!1};function rc(t,e){Ue.call(this),this.h=t||1,this.g=e||z,this.j=tt(this.qb,this),this.l=Date.now()}$e(rc,Ue);N=rc.prototype;N.ga=!1;N.T=null;N.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),We(this,"tick"),this.ga&&(Wp(this),this.start()))}};N.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Wp(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}N.N=function(){rc.$.N.call(this),Wp(this),delete this.g};function Kp(t,e,n){if(typeof t=="function")n&&(t=tt(t,n));else if(t&&typeof t.handleEvent=="function")t=tt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function PE(t){t.g=Kp(()=>{t.g=null,t.i&&(t.i=!1,PE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class zk extends Or{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:PE(this)}N(){super.N(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Go(t){Or.call(this),this.h=t,this.g={}}$e(Go,Or);var Uy=[];function RE(t,e,n,r){Array.isArray(n)||(n&&(Uy[0]=n.toString()),n=Uy);for(var i=0;i<n.length;i++){var s=vE(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function CE(t){Fp(t.g,function(e,n){this.g.hasOwnProperty(n)&&$p(e)},t),t.g={}}Go.prototype.N=function(){Go.$.N.call(this),CE(this)};Go.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ic(){this.g=!0}ic.prototype.Ea=function(){this.g=!1};function Hk(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function qk(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Gi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Kk(t,n)+(r?" "+r:"")})}function Wk(t,e){t.info(function(){return"TIMEOUT: "+e})}ic.prototype.info=function(){};function Kk(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Hp(n)}catch{return e}}var Pi={},$y=null;function sc(){return $y=$y||new Ue}Pi.Ta="serverreachability";function kE(t){nt.call(this,Pi.Ta,t)}$e(kE,nt);function Qo(t){const e=sc();We(e,new kE(e))}Pi.STAT_EVENT="statevent";function xE(t,e){nt.call(this,Pi.STAT_EVENT,t),this.stat=e}$e(xE,nt);function ct(t){const e=sc();We(e,new xE(e,t))}Pi.Ua="timingevent";function NE(t,e){nt.call(this,Pi.Ua,t),this.size=e}$e(NE,nt);function ya(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var oc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},DE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Gp(){}Gp.prototype.h=null;function By(t){return t.h||(t.h=t.i())}function OE(){}var _a={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Qp(){nt.call(this,"d")}$e(Qp,nt);function Yp(){nt.call(this,"c")}$e(Yp,nt);var lf;function ac(){}$e(ac,Gp);ac.prototype.g=function(){return new XMLHttpRequest};ac.prototype.i=function(){return{}};lf=new ac;function va(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Go(this),this.P=Gk,t=nf?125:void 0,this.V=new rc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new bE}function bE(){this.i=null,this.g="",this.h=!1}var Gk=45e3,uf={},cu={};N=va.prototype;N.setTimeout=function(t){this.P=t};function cf(t,e,n){t.L=1,t.v=uc($n(e)),t.s=n,t.S=!0,LE(t,null)}function LE(t,e){t.G=Date.now(),wa(t),t.A=$n(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),zE(n.i,"t",r),t.C=0,n=t.l.J,t.h=new bE,t.g=c1(t.l,n?e:null,!t.s),0<t.O&&(t.M=new zk(tt(t.Pa,t,t.g),t.O)),RE(t.U,t.g,"readystatechange",t.nb),e=t.I?yE(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Qo(),Hk(t.j,t.u,t.A,t.m,t.W,t.s)}N.nb=function(t){t=t.target;const e=this.M;e&&dn(t)==3?e.l():this.Pa(t)};N.Pa=function(t){try{if(t==this.g)e:{const c=dn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||nf||this.g&&(this.h.h||this.g.ja()||Wy(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Qo(3):Qo(2)),lc(this);var n=this.g.da();this.ca=n;t:if(VE(this)){var r=Wy(this.g);t="";var i=r.length,s=dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gr(this),yo(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,qk(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ho(a)){var u=a;break t}}u=null}if(n=u)Gi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,hf(this,n);else{this.i=!1,this.o=3,ct(12),Gr(this),yo(this);break e}}this.S?(ME(this,c,o),nf&&this.i&&c==3&&(RE(this.U,this.V,"tick",this.mb),this.V.start())):(Gi(this.j,this.m,o,null),hf(this,o)),c==4&&Gr(this),this.i&&!this.J&&(c==4?o1(this.l,this):(this.i=!1,wa(this)))}else mx(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ct(12)):(this.o=0,ct(13)),Gr(this),yo(this)}}}catch{}finally{}};function VE(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function ME(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=Qk(t,n),i==cu){e==4&&(t.o=4,ct(14),r=!1),Gi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==uf){t.o=4,ct(15),Gi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Gi(t.j,t.m,i,null),hf(t,i);VE(t)&&i!=cu&&i!=uf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ct(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),nm(e),e.M=!0,ct(11))):(Gi(t.j,t.m,n,"[Invalid Chunked Response]"),Gr(t),yo(t))}N.mb=function(){if(this.g){var t=dn(this.g),e=this.g.ja();this.C<e.length&&(lc(this),ME(this,t,e),this.i&&t!=4&&wa(this))}};function Qk(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?cu:(n=Number(e.substring(n,r)),isNaN(n)?uf:(r+=1,r+n>e.length?cu:(e=e.slice(r,r+n),t.C=r+n,e)))}N.cancel=function(){this.J=!0,Gr(this)};function wa(t){t.Y=Date.now()+t.P,jE(t,t.P)}function jE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ya(tt(t.lb,t),e)}function lc(t){t.B&&(z.clearTimeout(t.B),t.B=null)}N.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Wk(this.j,this.A),this.L!=2&&(Qo(),ct(17)),Gr(this),this.o=2,yo(this)):jE(this,this.Y-t)};function yo(t){t.l.H==0||t.J||o1(t.l,t)}function Gr(t){lc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Wp(t.V),CE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function hf(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||df(n.i,t))){if(!t.K&&df(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)fu(n),fc(n);else break e;tm(n),ct(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=ya(tt(n.ib,n),6e3));if(1>=WE(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Qr(n,11)}else if((t.K||n.g==t)&&fu(n),!Ho(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const _=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var s=r.i;s.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Xp(s,s.h),s.h=null))}if(r.F){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,ue(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=u1(r,r.J?r.pa:null,r.Y),o.K){KE(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(lc(a),wa(a)),r.g=o}else i1(r);0<n.j.length&&pc(n)}else u[0]!="stop"&&u[0]!="close"||Qr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Qr(n,7):em(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Qo(4)}catch{}}function Yk(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Zu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Xk(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Zu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function FE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Zu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Xk(t),r=Yk(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var UE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jk(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ti(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ti){this.h=t.h,hu(this,t.j),this.s=t.s,this.g=t.g,du(this,t.m),this.l=t.l;var e=t.i,n=new Yo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),zy(this,n),this.o=t.o}else t&&(e=String(t).match(UE))?(this.h=!1,hu(this,e[1]||"",!0),this.s=eo(e[2]||""),this.g=eo(e[3]||"",!0),du(this,e[4]),this.l=eo(e[5]||"",!0),zy(this,e[6]||"",!0),this.o=eo(e[7]||"")):(this.h=!1,this.i=new Yo(null,this.h))}ti.prototype.toString=function(){var t=[],e=this.j;e&&t.push(to(e,Hy,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(to(e,Hy,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(to(n,n.charAt(0)=="/"?tx:ex,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",to(n,rx)),t.join("")};function $n(t){return new ti(t)}function hu(t,e,n){t.j=n?eo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function du(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function zy(t,e,n){e instanceof Yo?(t.i=e,ix(t.i,t.h)):(n||(e=to(e,nx)),t.i=new Yo(e,t.h))}function ue(t,e,n){t.i.set(e,n)}function uc(t){return ue(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function eo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function to(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Zk),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Zk(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Hy=/[#\/\?@]/g,ex=/[#\?:]/g,tx=/[#\?]/g,nx=/[#\?@]/g,rx=/#/g;function Yo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function br(t){t.g||(t.g=new Map,t.h=0,t.i&&Jk(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=Yo.prototype;N.add=function(t,e){br(this),this.i=null,t=Rs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function $E(t,e){br(t),e=Rs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function BE(t,e){return br(t),e=Rs(t,e),t.g.has(e)}N.forEach=function(t,e){br(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};N.ta=function(){br(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};N.Z=function(t){br(this);let e=[];if(typeof t=="string")BE(this,t)&&(e=e.concat(this.g.get(Rs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return br(this),this.i=null,t=Rs(this,t),BE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function zE(t,e,n){$E(t,e),0<n.length&&(t.i=null,t.g.set(Rs(t,e),Mp(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Rs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ix(t,e){e&&!t.j&&(br(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&($E(this,r),zE(this,i,n))},t)),t.j=e}var sx=class{constructor(t,e){this.g=t,this.map=e}};function HE(t){this.l=t||ox,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ka&&z.g.Ka()&&z.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ox=10;function qE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function WE(t){return t.h?1:t.g?t.g.size:0}function df(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Xp(t,e){t.g?t.g.add(e):t.h=e}function KE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}HE.prototype.cancel=function(){if(this.i=GE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function GE(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Mp(t.i)}var ax=class{stringify(t){return z.JSON.stringify(t,void 0)}parse(t){return z.JSON.parse(t,void 0)}};function lx(){this.g=new ax}function ux(t,e,n){const r=n||"";try{FE(t,function(i,s){let o=i;ma(i)&&(o=Hp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function cx(t,e){const n=new ic;if(z.Image){const r=new Image;r.onload=el(nl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=el(nl,n,r,"TestLoadImage: error",!1,e),r.onabort=el(nl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=el(nl,n,r,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function nl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function cc(t){this.l=t.ec||null,this.j=t.ob||!1}$e(cc,Gp);cc.prototype.g=function(){return new hc(this.l,this.j)};cc.prototype.i=function(t){return function(){return t}}({});function hc(t,e){Ue.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Jp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$e(hc,Ue);var Jp=0;N=hc.prototype;N.open=function(t,e){if(this.readyState!=Jp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Xo(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||z).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ea(this)),this.readyState=Jp};N.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Xo(this)),this.g&&(this.readyState=3,Xo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;QE(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function QE(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}N.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ea(this):Xo(this),this.readyState==3&&QE(this)}};N.Za=function(t){this.g&&(this.response=this.responseText=t,Ea(this))};N.Ya=function(t){this.g&&(this.response=t,Ea(this))};N.ka=function(){this.g&&Ea(this)};function Ea(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Xo(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Xo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(hc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var hx=z.JSON.parse;function Te(t){Ue.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=YE,this.L=this.M=!1}$e(Te,Ue);var YE="",dx=/^https?$/i,fx=["POST","PUT"];N=Te.prototype;N.Oa=function(t){this.M=t};N.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():lf.g(),this.C=this.u?By(this.u):By(lf),this.g.onreadystatechange=tt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){qy(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=z.FormData&&t instanceof z.FormData,!(0<=fE(fx,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ZE(this),0<this.B&&((this.L=px(this.g))?(this.g.timeout=this.B,this.g.ontimeout=tt(this.ua,this)):this.A=Kp(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){qy(this,s)}};function px(t){return ps&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.ua=function(){typeof Vp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,We(this,"timeout"),this.abort(8))};function qy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,XE(t),dc(t)}function XE(t){t.F||(t.F=!0,We(t,"complete"),We(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,We(this,"complete"),We(this,"abort"),dc(this))};N.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),dc(this,!0)),Te.$.N.call(this)};N.La=function(){this.s||(this.G||this.v||this.l?JE(this):this.kb())};N.kb=function(){JE(this)};function JE(t){if(t.h&&typeof Vp<"u"&&(!t.C[1]||dn(t)!=4||t.da()!=2)){if(t.v&&dn(t)==4)Kp(t.La,0,t);else if(We(t,"readystatechange"),dn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(UE)[1]||null;!i&&z.self&&z.self.location&&(i=z.self.location.protocol.slice(0,-1)),r=!dx.test(i?i.toLowerCase():"")}n=r}if(n)We(t,"complete"),We(t,"success");else{t.m=6;try{var s=2<dn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",XE(t)}}finally{dc(t)}}}}function dc(t,e){if(t.g){ZE(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||We(t,"ready");try{n.onreadystatechange=r}catch{}}}function ZE(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}N.isActive=function(){return!!this.g};function dn(t){return t.g?t.g.readyState:0}N.da=function(){try{return 2<dn(this)?this.g.status:-1}catch{return-1}};N.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),hx(e)}};function Wy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case YE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function mx(t){const e={};t=(t.g&&2<=dn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ho(t[r]))continue;var n=Uk(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}Ok(e,function(r){return r.join(", ")})}N.Ia=function(){return this.m};N.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function e1(t){let e="";return Fp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Zp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=e1(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ue(t,e,n))}function zs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function t1(t){this.Ga=0,this.j=[],this.l=new ic,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=zs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=zs("baseRetryDelayMs",5e3,t),this.hb=zs("retryDelaySeedMs",1e4,t),this.eb=zs("forwardChannelMaxRetries",2,t),this.xa=zs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new HE(t&&t.concurrentRequestLimit),this.Ja=new lx,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}N=t1.prototype;N.ra=8;N.H=1;function em(t){if(n1(t),t.H==3){var e=t.W++,n=$n(t.I);if(ue(n,"SID",t.K),ue(n,"RID",e),ue(n,"TYPE","terminate"),Ta(t,n),e=new va(t,t.l,e),e.L=2,e.v=uc($n(n)),n=!1,z.navigator&&z.navigator.sendBeacon)try{n=z.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&z.Image&&(new Image().src=e.v,n=!0),n||(e.g=c1(e.l,null),e.g.ha(e.v)),e.G=Date.now(),wa(e)}l1(t)}function fc(t){t.g&&(nm(t),t.g.cancel(),t.g=null)}function n1(t){fc(t),t.u&&(z.clearTimeout(t.u),t.u=null),fu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function pc(t){if(!qE(t.i)&&!t.m){t.m=!0;var e=t.Na;Wo||AE(),Ko||(Wo(),Ko=!0),qp.add(e,t),t.C=0}}function gx(t,e){return WE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ya(tt(t.Na,t,e),a1(t,t.C)),t.C++,!0)}N.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new va(this,this.l,t);let s=this.s;if(this.U&&(s?(s=yE(s),_E(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=r1(this,i,e),n=$n(this.I),ue(n,"RID",t),ue(n,"CVER",22),this.F&&ue(n,"X-HTTP-Session-Id",this.F),Ta(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(e1(s)))+"&"+e:this.o&&Zp(n,this.o,s)),Xp(this.i,i),this.bb&&ue(n,"TYPE","init"),this.P?(ue(n,"$req",e),ue(n,"SID","null"),i.aa=!0,cf(i,n,null)):cf(i,n,e),this.H=2}}else this.H==3&&(t?Ky(this,t):this.j.length==0||qE(this.i)||Ky(this))};function Ky(t,e){var n;e?n=e.m:n=t.W++;const r=$n(t.I);ue(r,"SID",t.K),ue(r,"RID",n),ue(r,"AID",t.V),Ta(t,r),t.o&&t.s&&Zp(r,t.o,t.s),n=new va(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=r1(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Xp(t.i,n),cf(n,r,e)}function Ta(t,e){t.na&&Fp(t.na,function(n,r){ue(e,r,n)}),t.h&&FE({},function(n,r){ue(e,r,n)})}function r1(t,e,n){n=Math.min(t.j.length,n);var r=t.h?tt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{ux(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function i1(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Wo||AE(),Ko||(Wo(),Ko=!0),qp.add(e,t),t.A=0}}function tm(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ya(tt(t.Ma,t),a1(t,t.A)),t.A++,!0)}N.Ma=function(){if(this.u=null,s1(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ya(tt(this.jb,this),t)}};N.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ct(10),fc(this),s1(this))};function nm(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function s1(t){t.g=new va(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=$n(t.wa);ue(e,"RID","rpc"),ue(e,"SID",t.K),ue(e,"AID",t.V),ue(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ue(e,"TO",t.qa),ue(e,"TYPE","xmlhttp"),Ta(t,e),t.o&&t.s&&Zp(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=uc($n(e)),n.s=null,n.S=!0,LE(n,t)}N.ib=function(){this.v!=null&&(this.v=null,fc(this),tm(this),ct(19))};function fu(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function o1(t,e){var n=null;if(t.g==e){fu(t),nm(t),t.g=null;var r=2}else if(df(t.i,e))n=e.F,KE(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=sc(),We(r,new NE(r,n)),pc(t)}else i1(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&gx(t,e)||r==2&&tm(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Qr(t,5);break;case 4:Qr(t,10);break;case 3:Qr(t,6);break;default:Qr(t,2)}}}function a1(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Qr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=tt(t.pb,t);n||(n=new ti("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||hu(n,"https"),uc(n)),cx(n.toString(),r)}else ct(2);t.H=0,t.h&&t.h.za(e),l1(t),n1(t)}N.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ct(2)):(this.l.info("Failed to ping google.com"),ct(1))};function l1(t){if(t.H=0,t.ma=[],t.h){const e=GE(t.i);(e.length!=0||t.j.length!=0)&&(My(t.ma,e),My(t.ma,t.j),t.i.i.length=0,Mp(t.j),t.j.length=0),t.h.ya()}}function u1(t,e,n){var r=n instanceof ti?$n(n):new ti(n);if(r.g!="")e&&(r.g=e+"."+r.g),du(r,r.m);else{var i=z.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ti(null);r&&hu(s,r),e&&(s.g=e),i&&du(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ue(r,n,e),ue(r,"VER",t.ra),Ta(t,r),r}function c1(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Te(new cc({ob:!0})):new Te(t.va),e.Oa(t.J),e}N.isActive=function(){return!!this.h&&this.h.isActive(this)};function h1(){}N=h1.prototype;N.Ba=function(){};N.Aa=function(){};N.za=function(){};N.ya=function(){};N.isActive=function(){return!0};N.Va=function(){};function pu(){if(ps&&!(10<=Number(kk)))throw Error("Environmental error: no available transport.")}pu.prototype.g=function(t,e){return new Dt(t,e)};function Dt(t,e){Ue.call(this),this.g=new t1(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ho(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ho(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Cs(this)}$e(Dt,Ue);Dt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ct(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=u1(t,null,t.Y),pc(t)};Dt.prototype.close=function(){em(this.g)};Dt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Hp(t),t=n);e.j.push(new sx(e.fb++,t)),e.H==3&&pc(e)};Dt.prototype.N=function(){this.g.h=null,delete this.j,em(this.g),delete this.g,Dt.$.N.call(this)};function d1(t){Qp.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}$e(d1,Qp);function f1(){Yp.call(this),this.status=1}$e(f1,Yp);function Cs(t){this.g=t}$e(Cs,h1);Cs.prototype.Ba=function(){We(this.g,"a")};Cs.prototype.Aa=function(t){We(this.g,new d1(t))};Cs.prototype.za=function(t){We(this.g,new f1)};Cs.prototype.ya=function(){We(this.g,"b")};function yx(){this.blockSize=-1}function nn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}$e(nn,yx);nn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function xh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}nn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)xh(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){xh(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){xh(this,r),i=0;break}}this.h=i,this.i+=e};nn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function oe(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var _x={};function rm(t){return-128<=t&&128>t?Pk(t,function(e){return new oe([e|0],0>e?-1:0)}):new oe([t|0],0>t?-1:0)}function fn(t){if(isNaN(t)||!isFinite(t))return ts;if(0>t)return He(fn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=ff;return new oe(e,0)}function p1(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return He(p1(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=fn(Math.pow(e,8)),r=ts,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=fn(Math.pow(e,s)),r=r.R(s).add(fn(o))):(r=r.R(n),r=r.add(fn(o)))}return r}var ff=4294967296,ts=rm(0),pf=rm(1),Gy=rm(16777216);N=oe.prototype;N.ea=function(){if(jt(this))return-He(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:ff+r)*e,e*=ff}return t};N.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Nn(this))return"0";if(jt(this))return"-"+He(this).toString(t);for(var e=fn(Math.pow(t,6)),n=this,r="";;){var i=gu(n,e).g;n=mu(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Nn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};N.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Nn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function jt(t){return t.h==-1}N.X=function(t){return t=mu(this,t),jt(t)?-1:Nn(t)?0:1};function He(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new oe(n,~t.h).add(pf)}N.abs=function(){return jt(this)?He(this):this};N.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new oe(n,n[n.length-1]&-2147483648?-1:0)};function mu(t,e){return t.add(He(e))}N.R=function(t){if(Nn(this)||Nn(t))return ts;if(jt(this))return jt(t)?He(this).R(He(t)):He(He(this).R(t));if(jt(t))return He(this.R(He(t)));if(0>this.X(Gy)&&0>t.X(Gy))return fn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,rl(n,2*r+2*i),n[2*r+2*i+1]+=s*l,rl(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,rl(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,rl(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new oe(n,0)};function rl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Hs(t,e){this.g=t,this.h=e}function gu(t,e){if(Nn(e))throw Error("division by zero");if(Nn(t))return new Hs(ts,ts);if(jt(t))return e=gu(He(t),e),new Hs(He(e.g),He(e.h));if(jt(e))return e=gu(t,He(e)),new Hs(He(e.g),e.h);if(30<t.g.length){if(jt(t)||jt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=pf,r=e;0>=r.X(t);)n=Qy(n),r=Qy(r);var i=Di(n,1),s=Di(r,1);for(r=Di(r,2),n=Di(n,2);!Nn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Di(r,1),n=Di(n,1)}return e=mu(t,i.R(e)),new Hs(i,e)}for(i=ts;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=fn(n),o=s.R(e);jt(o)||0<o.X(t);)n-=r,s=fn(n),o=s.R(e);Nn(s)&&(s=pf),i=i.add(s),t=mu(t,o)}return new Hs(i,t)}N.gb=function(t){return gu(this,t).h};N.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new oe(n,this.h&t.h)};N.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new oe(n,this.h|t.h)};N.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new oe(n,this.h^t.h)};function Qy(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new oe(n,t.h)}function Di(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new oe(i,t.h)}pu.prototype.createWebChannel=pu.prototype.g;Dt.prototype.send=Dt.prototype.u;Dt.prototype.open=Dt.prototype.m;Dt.prototype.close=Dt.prototype.close;oc.NO_ERROR=0;oc.TIMEOUT=8;oc.HTTP_ERROR=6;DE.COMPLETE="complete";OE.EventType=_a;_a.OPEN="a";_a.CLOSE="b";_a.ERROR="c";_a.MESSAGE="d";Ue.prototype.listen=Ue.prototype.O;Te.prototype.listenOnce=Te.prototype.P;Te.prototype.getLastError=Te.prototype.Sa;Te.prototype.getLastErrorCode=Te.prototype.Ia;Te.prototype.getStatus=Te.prototype.da;Te.prototype.getResponseJson=Te.prototype.Wa;Te.prototype.getResponseText=Te.prototype.ja;Te.prototype.send=Te.prototype.ha;Te.prototype.setWithCredentials=Te.prototype.Oa;nn.prototype.digest=nn.prototype.l;nn.prototype.reset=nn.prototype.reset;nn.prototype.update=nn.prototype.j;oe.prototype.add=oe.prototype.add;oe.prototype.multiply=oe.prototype.R;oe.prototype.modulo=oe.prototype.gb;oe.prototype.compare=oe.prototype.X;oe.prototype.toNumber=oe.prototype.ea;oe.prototype.toString=oe.prototype.toString;oe.prototype.getBits=oe.prototype.D;oe.fromNumber=fn;oe.fromString=p1;var vx=function(){return new pu},wx=function(){return sc()},Nh=oc,Ex=DE,Tx=Pi,Yy={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},il=OE,Ix=Te,Sx=nn,ns=oe;const Xy="@firebase/firestore";/**
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
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
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
 */let ks="10.4.0";/**
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
 */const hi=new bp("@firebase/firestore");function qs(){return hi.logLevel}function V(t,...e){if(hi.logLevel<=Y.DEBUG){const n=e.map(im);hi.debug(`Firestore (${ks}): ${t}`,...n)}}function Bn(t,...e){if(hi.logLevel<=Y.ERROR){const n=e.map(im);hi.error(`Firestore (${ks}): ${t}`,...n)}}function ms(t,...e){if(hi.logLevel<=Y.WARN){const n=e.map(im);hi.warn(`Firestore (${ks}): ${t}`,...n)}}function im(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function B(t="Unexpected state"){const e=`FIRESTORE (${ks}) INTERNAL ASSERTION FAILED: `+t;throw Bn(e),new Error(e)}function de(t,e){t||B()}function W(t,e){return t}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends on{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ln{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class m1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ax{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class Px{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Rx{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Ln;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ln,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ln)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string"),new m1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string"),new Xe(e)}}class Cx{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class kx{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Cx(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Nx{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(de(typeof n.token=="string"),this.R=n.token,new xx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Dx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class g1{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Dx(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function te(t,e){return t<e?-1:t>e?1:0}function gs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new D(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new D(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new D(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class H{constructor(e){this.timestamp=e}static fromTimestamp(e){return new H(e)}static min(){return new H(new be(0,0))}static max(){return new H(new be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Jo{constructor(e,n,r){n===void 0?n=0:n>e.length&&B(),r===void 0?r=e.length-n:r>e.length-n&&B(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Jo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Jo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ce extends Jo{construct(e,n,r){return new ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new D(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ce(n)}static emptyPath(){return new ce([])}}const Ox=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends Jo{construct(e,n,r){return new et(e,n,r)}static isValidIdentifier(e){return Ox.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new et(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new D(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new D(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new D(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new D(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(n)}static emptyPath(){return new et([])}}/**
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
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(ce.fromString(e))}static fromName(e){return new M(ce.fromString(e).popFirst(5))}static empty(){return new M(ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new ce(e.slice()))}}function bx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=H.fromTimestamp(r===1e9?new be(n+1,0):new be(n,r));return new Ar(i,M.empty(),e)}function Lx(t){return new Ar(t.readTime,t.key,-1)}class Ar{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ar(H.min(),M.empty(),-1)}static max(){return new Ar(H.max(),M.empty(),-1)}}function Vx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=M.comparator(t.documentKey,e.documentKey),n!==0?n:te(t.largestBatchId,e.largestBatchId))}/**
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
 */const Mx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ia(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==Mx)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&B(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new P((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):P.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):P.reject(n)}static resolve(e){return new P((n,r)=>{n(e)})}static reject(e){return new P((n,r)=>{r(e)})}static waitFor(e){return new P((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=P.resolve(!1);for(const r of e)n=n.next(i=>i?P.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new P((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new P((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Sa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class sm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}sm.ae=-1;function mc(t){return t==null}function yu(t){return t===0&&1/t==-1/0}function Fx(t){return typeof t=="number"&&Number.isInteger(t)&&!yu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Jy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ri(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function y1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class we{constructor(e,n){this.comparator=e,this.root=n||ze.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new sl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new sl(this.root,e,this.comparator,!1)}getReverseIterator(){return new sl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new sl(this.root,e,this.comparator,!0)}}class sl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ze.RED,this.left=i??ze.EMPTY,this.right=s??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ze(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ze.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw B();const e=this.left.check();if(e!==this.right.check())throw B();return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw B()}get value(){throw B()}get color(){throw B()}get left(){throw B()}get right(){throw B()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class rt{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zy(this.data.getIterator())}getIteratorFrom(e){return new Zy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new rt(this.comparator);return n.data=e,n}}class Zy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ct{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new Ct([])}unionWith(e){let n=new rt(et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ct(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return gs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class _1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new _1("Invalid base64 string: "+s):s}}(e);return new at(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const Ux=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pr(t){if(de(!!t),typeof t=="string"){let e=0;const n=Ux.exec(t);if(de(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function di(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
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
 */function om(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function am(t){const e=t.mapValue.fields.__previous_value__;return om(e)?am(e):e}function Zo(t){const e=Pr(t.mapValue.fields.__local_write_time__.timestampValue);return new be(e.seconds,e.nanos)}/**
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
 */class $x{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class ea{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ea("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ea&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ol={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function fi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?om(t)?4:Bx(t)?9007199254740991:10:B()}function Tn(t,e){if(t===e)return!0;const n=fi(t);if(n!==fi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Zo(t).isEqual(Zo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Pr(i.timestampValue),a=Pr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return di(i.bytesValue).isEqual(di(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ce(i.geoPointValue.latitude)===Ce(s.geoPointValue.latitude)&&Ce(i.geoPointValue.longitude)===Ce(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ce(i.integerValue)===Ce(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ce(i.doubleValue),a=Ce(s.doubleValue);return o===a?yu(o)===yu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return gs(t.arrayValue.values||[],e.arrayValue.values||[],Tn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Jy(o)!==Jy(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Tn(o[l],a[l])))return!1;return!0}(t,e);default:return B()}}function ta(t,e){return(t.values||[]).find(n=>Tn(n,e))!==void 0}function ys(t,e){if(t===e)return 0;const n=fi(t),r=fi(e);if(n!==r)return te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return te(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ce(s.integerValue||s.doubleValue),l=Ce(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return e_(t.timestampValue,e.timestampValue);case 4:return e_(Zo(t),Zo(e));case 5:return te(t.stringValue,e.stringValue);case 6:return function(s,o){const a=di(s),l=di(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=te(a[u],l[u]);if(c!==0)return c}return te(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=te(Ce(s.latitude),Ce(o.latitude));return a!==0?a:te(Ce(s.longitude),Ce(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=ys(a[u],l[u]);if(c)return c}return te(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===ol.mapValue&&o===ol.mapValue)return 0;if(s===ol.mapValue)return 1;if(o===ol.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=te(l[h],c[h]);if(d!==0)return d;const g=ys(a[l[h]],u[c[h]]);if(g!==0)return g}return te(l.length,c.length)}(t.mapValue,e.mapValue);default:throw B()}}function e_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return te(t,e);const n=Pr(t),r=Pr(e),i=te(n.seconds,r.seconds);return i!==0?i:te(n.nanos,r.nanos)}function _s(t){return mf(t)}function mf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Pr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return di(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return M.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=mf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${mf(n.fields[o])}`;return i+"}"}(t.mapValue):B()}function t_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function gf(t){return!!t&&"integerValue"in t}function lm(t){return!!t&&"arrayValue"in t}function n_(t){return!!t&&"nullValue"in t}function r_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Sl(t){return!!t&&"mapValue"in t}function _o(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ri(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=_o(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=_o(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Bx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class gt{constructor(e){this.value=e}static empty(){return new gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Sl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=_o(n)}setAll(e){let n=et.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=_o(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Sl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Sl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ri(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new gt(_o(this.value))}}function v1(t){const e=[];return Ri(t.fields,(n,r)=>{const i=new et([n]);if(Sl(r)){const s=v1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ct(e)}/**
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
 */class Ze{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ze(e,0,H.min(),H.min(),H.min(),gt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ze(e,1,n,H.min(),r,i,0)}static newNoDocument(e,n){return new Ze(e,2,n,H.min(),H.min(),gt.empty(),0)}static newUnknownDocument(e,n){return new Ze(e,3,n,H.min(),H.min(),gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class _u{constructor(e,n){this.position=e,this.inclusive=n}}function i_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=M.comparator(M.fromName(o.referenceValue),n.key):r=ys(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function s_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Tn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class rs{constructor(e,n="asc"){this.field=e,this.dir=n}}function zx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class w1{}class xe extends w1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new qx(e,n,r):n==="array-contains"?new Gx(e,r):n==="in"?new Qx(e,r):n==="not-in"?new Yx(e,r):n==="array-contains-any"?new Xx(e,r):new xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Wx(e,r):new Kx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ys(n,this.value)):n!==null&&fi(this.value)===fi(n)&&this.matchesComparison(ys(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class rn extends w1{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new rn(e,n)}matches(e){return E1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function E1(t){return t.op==="and"}function T1(t){return Hx(t)&&E1(t)}function Hx(t){for(const e of t.filters)if(e instanceof rn)return!1;return!0}function yf(t){if(t instanceof xe)return t.field.canonicalString()+t.op.toString()+_s(t.value);if(T1(t))return t.filters.map(e=>yf(e)).join(",");{const e=t.filters.map(n=>yf(n)).join(",");return`${t.op}(${e})`}}function I1(t,e){return t instanceof xe?function(r,i){return i instanceof xe&&r.op===i.op&&r.field.isEqual(i.field)&&Tn(r.value,i.value)}(t,e):t instanceof rn?function(r,i){return i instanceof rn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&I1(o,i.filters[a]),!0):!1}(t,e):void B()}function S1(t){return t instanceof xe?function(n){return`${n.field.canonicalString()} ${n.op} ${_s(n.value)}`}(t):t instanceof rn?function(n){return n.op.toString()+" {"+n.getFilters().map(S1).join(" ,")+"}"}(t):"Filter"}class qx extends xe{constructor(e,n,r){super(e,n,r),this.key=M.fromName(r.referenceValue)}matches(e){const n=M.comparator(e.key,this.key);return this.matchesComparison(n)}}class Wx extends xe{constructor(e,n){super(e,"in",n),this.keys=A1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Kx extends xe{constructor(e,n){super(e,"not-in",n),this.keys=A1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function A1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>M.fromName(r.referenceValue))}class Gx extends xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return lm(n)&&ta(n.arrayValue,this.value)}}class Qx extends xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ta(this.value.arrayValue,n)}}class Yx extends xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ta(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ta(this.value.arrayValue,n)}}class Xx extends xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!lm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ta(this.value.arrayValue,r))}}/**
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
 */class Jx{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function o_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Jx(t,e,n,r,i,s,o)}function um(t){const e=W(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>yf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),mc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>_s(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>_s(r)).join(",")),e.he=n}return e.he}function cm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!zx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!I1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!s_(t.startAt,e.startAt)&&s_(t.endAt,e.endAt)}function _f(t){return M.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class xs{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Zx(t,e,n,r,i,s,o,a){return new xs(t,e,n,r,i,s,o,a)}function gc(t){return new xs(t)}function a_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function hm(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function yc(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function P1(t){return t.collectionGroup!==null}function vo(t){const e=W(t);if(e.Pe===null){e.Pe=[];const n=yc(e),r=hm(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new rs(n)),e.Pe.push(new rs(et.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new rs(et.keyField(),s))}}}return e.Pe}function _n(t){const e=W(t);return e.Ie||(e.Ie=eN(e,vo(t))),e.Ie}function eN(t,e){if(t.limitType==="F")return o_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new rs(i.field,s)});const n=t.endAt?new _u(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new _u(t.startAt.position,t.startAt.inclusive):null;return o_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function vf(t,e){e.getFirstInequalityField(),yc(t);const n=t.filters.concat([e]);return new xs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function wf(t,e,n){return new xs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function _c(t,e){return cm(_n(t),_n(e))&&t.limitType===e.limitType}function R1(t){return`${um(_n(t))}|lt:${t.limitType}`}function Oi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>S1(i)).join(", ")}]`),mc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>_s(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>_s(i)).join(",")),`Target(${r})`}(_n(t))}; limitType=${t.limitType})`}function vc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):M.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of vo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=i_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,vo(r),i)||r.endAt&&!function(o,a,l){const u=i_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,vo(r),i))}(t,e)}function tN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function C1(t){return(e,n)=>{let r=!1;for(const i of vo(t)){const s=nN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function nN(t,e,n){const r=t.field.isKeyField()?M.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?ys(l,u):B()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return B()}}/**
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
 */class Ns{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ri(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return y1(this.inner)}size(){return this.innerSize}}/**
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
 */const rN=new we(M.comparator);function zn(){return rN}const k1=new we(M.comparator);function no(...t){let e=k1;for(const n of t)e=e.insert(n.key,n);return e}function x1(t){let e=k1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Yr(){return wo()}function N1(){return wo()}function wo(){return new Ns(t=>t.toString(),(t,e)=>t.isEqual(e))}const iN=new we(M.comparator),sN=new rt(M.comparator);function G(...t){let e=sN;for(const n of t)e=e.add(n);return e}const oN=new rt(te);function aN(){return oN}/**
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
 */function D1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yu(e)?"-0":e}}function O1(t){return{integerValue:""+t}}function lN(t,e){return Fx(e)?O1(e):D1(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class wc{constructor(){this._=void 0}}function uN(t,e,n){return t instanceof vu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&om(s)&&(s=am(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof vs?L1(t,e):t instanceof na?V1(t,e):function(i,s){const o=b1(i,s),a=l_(o)+l_(i.Te);return gf(o)&&gf(i.Te)?O1(a):D1(i.serializer,a)}(t,e)}function cN(t,e,n){return t instanceof vs?L1(t,e):t instanceof na?V1(t,e):n}function b1(t,e){return t instanceof wu?function(r){return gf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class vu extends wc{}class vs extends wc{constructor(e){super(),this.elements=e}}function L1(t,e){const n=M1(e);for(const r of t.elements)n.some(i=>Tn(i,r))||n.push(r);return{arrayValue:{values:n}}}class na extends wc{constructor(e){super(),this.elements=e}}function V1(t,e){let n=M1(e);for(const r of t.elements)n=n.filter(i=>!Tn(i,r));return{arrayValue:{values:n}}}class wu extends wc{constructor(e,n){super(),this.serializer=e,this.Te=n}}function l_(t){return Ce(t.integerValue||t.doubleValue)}function M1(t){return lm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class hN{constructor(e,n){this.field=e,this.transform=n}}function dN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof vs&&i instanceof vs||r instanceof na&&i instanceof na?gs(r.elements,i.elements,Tn):r instanceof wu&&i instanceof wu?Tn(r.Te,i.Te):r instanceof vu&&i instanceof vu}(t.transform,e.transform)}class fN{constructor(e,n){this.version=e,this.transformResults=n}}class $t{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new $t}static exists(e){return new $t(void 0,e)}static updateTime(e){return new $t(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Al(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ec{}function j1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new dm(t.key,$t.none()):new Aa(t.key,t.data,$t.none());{const n=t.data,r=gt.empty();let i=new rt(et.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Lr(t.key,r,new Ct(i.toArray()),$t.none())}}function pN(t,e,n){t instanceof Aa?function(i,s,o){const a=i.value.clone(),l=c_(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Lr?function(i,s,o){if(!Al(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=c_(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(F1(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Eo(t,e,n,r){return t instanceof Aa?function(s,o,a,l){if(!Al(s.precondition,o))return a;const u=s.value.clone(),c=h_(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Lr?function(s,o,a,l){if(!Al(s.precondition,o))return a;const u=h_(s.fieldTransforms,l,o),c=o.data;return c.setAll(F1(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Al(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function mN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=b1(r.transform,i||null);s!=null&&(n===null&&(n=gt.empty()),n.set(r.field,s))}return n||null}function u_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&gs(r,i,(s,o)=>dN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Aa extends Ec{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Lr extends Ec{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function F1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function c_(t,e,n){const r=new Map;de(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,cN(o,a,n[i]))}return r}function h_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,uN(s,o,e))}return r}class dm extends Ec{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gN extends Ec{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class yN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&pN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Eo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Eo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=N1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=j1(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(H.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),G())}isEqual(e){return this.batchId===e.batchId&&gs(this.mutations,e.mutations,(n,r)=>u_(n,r))&&gs(this.baseMutations,e.baseMutations,(n,r)=>u_(n,r))}}class fm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){de(e.mutations.length===r.length);let i=function(){return iN}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new fm(e,n,r,i)}}/**
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
 */class _N{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class vN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Re,J;function wN(t){switch(t){default:return B();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function U1(t){if(t===void 0)return Bn("GRPC error has no .code"),S.UNKNOWN;switch(t){case Re.OK:return S.OK;case Re.CANCELLED:return S.CANCELLED;case Re.UNKNOWN:return S.UNKNOWN;case Re.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Re.INTERNAL:return S.INTERNAL;case Re.UNAVAILABLE:return S.UNAVAILABLE;case Re.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Re.NOT_FOUND:return S.NOT_FOUND;case Re.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Re.ABORTED:return S.ABORTED;case Re.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Re.DATA_LOSS:return S.DATA_LOSS;default:return B()}}(J=Re||(Re={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function EN(){return new TextEncoder}/**
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
 */const TN=new ns([4294967295,4294967295],0);function d_(t){const e=EN().encode(t),n=new Sx;return n.update(e),new Uint8Array(n.digest())}function f_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ns([n,r],0),new ns([i,s],0)]}class pm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ro(`Invalid padding: ${n}`);if(r<0)throw new ro(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ro(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ro(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=ns.fromNumber(this.Ae)}Ve(e,n,r){let i=e.add(n.multiply(ns.fromNumber(r)));return i.compare(TN)===1&&(i=new ns([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=d_(e),[r,i]=f_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);if(!this.me(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new pm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=d_(e),[r,i]=f_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ro extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Tc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Pa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Tc(H.min(),i,new we(te),zn(),G())}}class Pa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Pa(r,n,G(),G(),G())}}/**
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
 */class Pl{constructor(e,n,r,i){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=i}}class $1{constructor(e,n){this.targetId=e,this.ye=n}}class B1{constructor(e,n,r=at.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class p_{constructor(){this.we=0,this.Se=g_(),this.be=at.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=G(),n=G(),r=G();return this.Se.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:B()}}),new Pa(this.be,this.De,e,n,r)}Oe(){this.Ce=!1,this.Se=g_()}Ne(e,n){this.Ce=!0,this.Se=this.Se.insert(e,n)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class IN{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=zn(),this.Ue=m_(),this.We=new we(te)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:B()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,i)=>{this.Ye(i)&&n(i)})}Xe(e){const n=e.targetId,r=e.ye.count,i=this.et(n);if(i){const s=i.target;if(_f(s))if(r===0){const o=new M(s.path);this.je(n,o,Ze.newNoDocument(o,H.min()))}else de(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),l=a?this.rt(a,e,o):1;if(l!==0){this.Ze(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,u)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=di(r).toUint8Array()}catch(l){if(l instanceof _1)return ms("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new pm(o,i,s)}catch(l){return ms(l instanceof ro?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.je(n,s,null),i++)}),i}_t(e){const n=new Map;this.Ke.forEach((s,o)=>{const a=this.et(o);if(a){if(s.current&&_f(a.target)){const l=new M(a.target.path);this.$e.get(l)!==null||this.ut(o,l)||this.je(o,l,Ze.newNoDocument(l,e))}s.Fe&&(n.set(o,s.xe()),s.Oe())}});let r=G();this.Ue.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.et(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.$e.forEach((s,o)=>o.setReadTime(e));const i=new Tc(e,n,this.We,this.$e,r);return this.$e=zn(),this.Ue=m_(),this.We=new we(te),i}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const i=this.Je(e);this.ut(e,n)?i.Ne(n,1):i.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new p_,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new rt(te),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new p_),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function m_(){return new we(M.comparator)}function g_(){return new we(M.comparator)}const SN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),AN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),PN=(()=>({and:"AND",or:"OR"}))();class RN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ef(t,e){return t.useProto3Json||mc(e)?e:{value:e}}function Eu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function z1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function CN(t,e){return Eu(t,e.toTimestamp())}function vn(t){return de(!!t),H.fromTimestamp(function(n){const r=Pr(n);return new be(r.seconds,r.nanos)}(t))}function mm(t,e){return function(r){return new ce(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function H1(t){const e=ce.fromString(t);return de(G1(e)),e}function Tf(t,e){return mm(t.databaseId,e.path)}function Dh(t,e){const n=H1(e);if(n.get(1)!==t.databaseId.projectId)throw new D(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new D(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new M(q1(n))}function If(t,e){return mm(t.databaseId,e)}function kN(t){const e=H1(t);return e.length===4?ce.emptyPath():q1(e)}function Sf(t){return new ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function q1(t){return de(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function y_(t,e,n){return{name:Tf(t,e),fields:n.value.mapValue.fields}}function xN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:B()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(de(c===void 0||typeof c=="string"),at.fromBase64String(c||"")):(de(c===void 0||c instanceof Uint8Array),at.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?S.UNKNOWN:U1(u.code);return new D(c,u.message||"")}(o);n=new B1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Dh(t,r.document.name),s=vn(r.document.updateTime),o=r.document.createTime?vn(r.document.createTime):H.min(),a=new gt({mapValue:{fields:r.document.fields}}),l=Ze.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Pl(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Dh(t,r.document),s=r.readTime?vn(r.readTime):H.min(),o=Ze.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Pl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Dh(t,r.document),s=r.removedTargetIds||[];n=new Pl([],s,i,null)}else{if(!("filter"in e))return B();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new vN(i,s),a=r.targetId;n=new $1(a,o)}}return n}function NN(t,e){let n;if(e instanceof Aa)n={update:y_(t,e.key,e.value)};else if(e instanceof dm)n={delete:Tf(t,e.key)};else if(e instanceof Lr)n={update:y_(t,e.key,e.data),updateMask:UN(e.fieldMask)};else{if(!(e instanceof gN))return B();n={verify:Tf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof vu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof vs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof na)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof wu)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw B()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:CN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:B()}(t,e.precondition)),n}function DN(t,e){return t&&t.length>0?(de(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?vn(i.updateTime):vn(s);return o.isEqual(H.min())&&(o=vn(s)),new fN(o,i.transformResults||[])}(n,e))):[]}function ON(t,e){return{documents:[If(t,e.path)]}}function bN(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=If(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=If(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return K1(rn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:bi(h.field),direction:MN(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Ef(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function LN(t){let e=kN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){de(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=W1(h);return d instanceof rn&&T1(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(_){return new rs(Li(_.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,mc(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,g=h.values||[];return new _u(g,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,g=h.values||[];return new _u(g,d)}(n.endAt)),Zx(e,i,o,s,a,"F",l,u)}function VN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function W1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Li(n.unaryFilter.field);return xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Li(n.unaryFilter.field);return xe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Li(n.unaryFilter.field);return xe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Li(n.unaryFilter.field);return xe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return B()}}(t):t.fieldFilter!==void 0?function(n){return xe.create(Li(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return B()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return rn.create(n.compositeFilter.filters.map(r=>W1(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return B()}}(n.compositeFilter.op))}(t):B()}function MN(t){return SN[t]}function jN(t){return AN[t]}function FN(t){return PN[t]}function bi(t){return{fieldPath:t.canonicalString()}}function Li(t){return et.fromServerFormat(t.fieldPath)}function K1(t){return t instanceof xe?function(n){if(n.op==="=="){if(r_(n.value))return{unaryFilter:{field:bi(n.field),op:"IS_NAN"}};if(n_(n.value))return{unaryFilter:{field:bi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(r_(n.value))return{unaryFilter:{field:bi(n.field),op:"IS_NOT_NAN"}};if(n_(n.value))return{unaryFilter:{field:bi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bi(n.field),op:jN(n.op),value:n.value}}}(t):t instanceof rn?function(n){const r=n.getFilters().map(i=>K1(i));return r.length===1?r[0]:{compositeFilter:{op:FN(n.op),filters:r}}}(t):B()}function UN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function G1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class lr{constructor(e,n,r,i,s=H.min(),o=H.min(),a=at.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class $N{constructor(e){this.ht=e}}function BN(t){const e=LN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?wf(e,e.limit,"L"):e}/**
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
 */class zN{constructor(){this.an=new HN}addToCollectionParentIndex(e,n){return this.an.add(n),P.resolve()}getCollectionParents(e,n){return P.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return P.resolve()}deleteFieldIndex(e,n){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,n){return P.resolve()}getDocumentsMatchingTarget(e,n){return P.resolve(null)}getIndexType(e,n){return P.resolve(0)}getFieldIndexes(e,n){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,n){return P.resolve(Ar.min())}getMinOffsetFromCollectionGroup(e,n){return P.resolve(Ar.min())}updateCollectionGroup(e,n,r){return P.resolve()}updateIndexEntries(e,n){return P.resolve()}}class HN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new rt(ce.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new rt(ce.comparator)).toArray()}}/**
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
 */class ws{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new ws(0)}static Ln(){return new ws(-1)}}/**
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
 */class qN{constructor(){this.changes=new Ns(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?P.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class WN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class KN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Eo(r.mutation,i,Ct.empty(),be.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,G()).next(()=>r))}getLocalViewOfDocuments(e,n,r=G()){const i=Yr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=no();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Yr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,G()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=zn();const o=wo(),a=function(){return wo()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Lr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Eo(c.mutation,u,c.mutation.getFieldMask(),be.now())):o.set(u.key,Ct.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new WN(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=wo();let i=new we((o,a)=>o-a),s=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Ct.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||G()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=N1();c.forEach(d=>{if(!s.has(d)){const g=j1(n.get(d),r.get(d));g!==null&&h.set(d,g),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return P.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return M.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):P1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):P.resolve(Yr());let a=-1,l=s;return o.next(u=>P.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?P.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,G())).next(c=>({batchId:a,changes:x1(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new M(n)).next(r=>{let i=no();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=no();return this.indexManager.getCollectionParents(e,s).next(a=>P.forEach(a,l=>{const u=function(h,d){return new xs(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,Ze.newInvalidDocument(c)))});let a=no();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Eo(c.mutation,u,Ct.empty(),be.now()),vc(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class GN{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return P.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:vn(i.createTime)}}(n)),P.resolve()}getNamedQuery(e,n){return P.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(i){return{name:i.name,query:BN(i.bundledQuery),readTime:vn(i.readTime)}}(n)),P.resolve()}}/**
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
 */class QN{constructor(){this.overlays=new we(M.comparator),this.Pr=new Map}getOverlay(e,n){return P.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Yr();return P.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.It(e,n,s)}),P.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),P.resolve()}getOverlaysForCollection(e,n,r){const i=Yr(),s=n.length+1,o=new M(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return P.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new we((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Yr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Yr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return P.resolve(a)}It(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new _N(n,r));let s=this.Pr.get(n);s===void 0&&(s=G(),this.Pr.set(n,s)),this.Pr.set(n,s.add(r.key))}}/**
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
 */class gm{constructor(){this.Ir=new rt(Ve.dr),this.Tr=new rt(Ve.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new Ve(e,n);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new Ve(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new M(new ce([])),r=new Ve(n,e),i=new Ve(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const n=new M(new ce([])),r=new Ve(n,e),i=new Ve(n,e+1);let s=G();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ve(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,n){this.key=e,this.yr=n}static dr(e,n){return M.comparator(e.key,n.key)||te(e.yr,n.yr)}static Er(e,n){return te(e.yr,n.yr)||M.comparator(e.key,n.key)}}/**
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
 */class YN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new rt(Ve.dr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new yN(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Sr=this.Sr.add(new Ve(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,n){return P.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Dr(r),s=i<0?0:i;return P.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ve(n,0),i=new Ve(n,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],o=>{const a=this.br(o.yr);s.push(a)}),P.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new rt(te);return n.forEach(i=>{const s=new Ve(i,0),o=new Ve(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],a=>{r=r.add(a.yr)})}),P.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;M.isDocumentKey(s)||(s=s.child(""));const o=new Ve(new M(s),0);let a=new rt(te);return this.Sr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.yr)),!0)},o),P.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.br(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){de(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return P.forEach(n.mutations,i=>{const s=new Ve(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new Ve(n,0),i=this.Sr.firstAfterOrEqual(r);return P.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class XN{constructor(e){this.Fr=e,this.docs=function(){return new we(M.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return P.resolve(r?r.document.mutableCopy():Ze.newInvalidDocument(n))}getEntries(e,n){let r=zn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ze.newInvalidDocument(i))}),P.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=zn();const o=n.path,a=new M(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Vx(Lx(c),r)<=0||(i.has(c.key)||vc(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return P.resolve(s)}getAllFromCollectionGroup(e,n,r,i){B()}Mr(e,n){return P.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new JN(this)}getSize(e){return P.resolve(this.size)}}class JN extends qN{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),P.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
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
 */class ZN{constructor(e){this.persistence=e,this.Or=new Ns(n=>um(n),cm),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Nr=0,this.Br=new gm,this.targetCount=0,this.Lr=ws.Bn()}forEachTarget(e,n){return this.Or.forEach((r,i)=>n(i)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),P.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new ws(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,P.resolve()}updateTargetData(e,n){return this.Qn(n),P.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),P.waitFor(s).next(()=>i)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return P.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Ar(n,r),P.resolve()}removeMatchingKeys(e,n,r){this.Br.Vr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),P.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.mr(n),P.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.pr(n);return P.resolve(r)}containsKey(e,n){return P.resolve(this.Br.containsKey(n))}}/**
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
 */class e2{constructor(e,n){this.kr={},this.overlays={},this.qr=new sm(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new ZN(this),this.indexManager=new zN,this.remoteDocumentCache=function(i){return new XN(i)}(r=>this.referenceDelegate.$r(r)),this.serializer=new $N(n),this.Ur=new GN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new QN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new YN(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,n,r){V("MemoryPersistence","Starting transaction:",e);const i=new t2(this.qr.next());return this.referenceDelegate.Wr(),r(i).next(s=>this.referenceDelegate.Gr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}zr(e,n){return P.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class t2 extends jx{constructor(e){super(),this.currentSequenceNumber=e}}class ym{constructor(e){this.persistence=e,this.jr=new gm,this.Hr=null}static Jr(e){return new ym(e)}get Yr(){if(this.Hr)return this.Hr;throw B()}addReference(e,n,r){return this.jr.addReference(r,n),this.Yr.delete(r.toString()),P.resolve()}removeReference(e,n,r){return this.jr.removeReference(r,n),this.Yr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,n){return this.Yr.add(n.toString()),P.resolve()}removeTarget(e,n){this.jr.mr(n.targetId).forEach(i=>this.Yr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Yr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Wr(){this.Hr=new Set}Gr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Yr,r=>{const i=M.fromPath(r);return this.Zr(e,i).next(s=>{s||n.removeEntry(i,H.min())})}).next(()=>(this.Hr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zr(e,n).next(r=>{r?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(e){return 0}Zr(e,n){return P.or([()=>P.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zr(e,n)])}}/**
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
 */class _m{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Qi=r,this.Ki=i}static $i(e,n){let r=G(),i=G();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new _m(e,n.fromCache,r,i)}}/**
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
 */class n2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class r2{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,n){this.ji=e,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Hi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new n2;return this.Yi(e,n,o).next(a=>{if(s.result=a,this.Wi)return this.Zi(e,n,o,a.size)})}).next(()=>s.result)}Zi(e,n,r,i){return r.documentReadCount<this.Gi?(qs()<=Y.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",Oi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),P.resolve()):(qs()<=Y.DEBUG&&V("QueryEngine","Query:",Oi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.zi*i?(qs()<=Y.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",Oi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_n(n))):P.resolve())}Hi(e,n){if(a_(n))return P.resolve(null);let r=_n(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=wf(n,null,"F"),r=_n(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=G(...s);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Xi(n,a);return this.es(n,u,o,l.readTime)?this.Hi(e,wf(n,null,"F")):this.ts(e,u,n,l)}))})))}Ji(e,n,r,i){return a_(n)||i.isEqual(H.min())?P.resolve(null):this.ji.getDocuments(e,r).next(s=>{const o=this.Xi(n,s);return this.es(n,o,r,i)?P.resolve(null):(qs()<=Y.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Oi(n)),this.ts(e,o,n,bx(i,-1)).next(a=>a))})}Xi(e,n){let r=new rt(C1(e));return n.forEach((i,s)=>{vc(e,s)&&(r=r.add(s))}),r}es(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Yi(e,n,r){return qs()<=Y.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Oi(n)),this.ji.getDocumentsMatchingQuery(e,n,Ar.min(),r)}ts(e,n,r,i){return this.ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class i2{constructor(e,n,r,i){this.persistence=e,this.ns=n,this.serializer=i,this.rs=new we(te),this.ss=new Ns(s=>um(s),cm),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new KN(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.rs))}}function s2(t,e,n,r){return new i2(t,e,n,r)}async function Q1(t,e){const n=W(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.us(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=G();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({cs:u,removedBatchIds:o,addedBatchIds:a}))})})}function o2(t,e){const n=W(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n._s.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let g=P.resolve();return d.forEach(_=>{g=g.next(()=>c.getEntry(l,_)).next(v=>{const E=u.docVersions.get(_);de(E!==null),v.version.compareTo(E)<0&&(h.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),c.addEntry(v)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=G();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Y1(t){const e=W(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Kr.getLastRemoteSnapshotVersion(n))}function a2(t,e){const n=W(t),r=e.snapshotVersion;let i=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n._s.newChangeBuffer({trackRemovals:!0});i=n.rs;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Kr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Kr.addMatchingKeys(s,c.addedDocuments,h)));let g=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(at.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(v,E,m){return v.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(d,g,c)&&a.push(n.Kr.updateTargetData(s,g))});let l=zn(),u=G();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(l2(s,o,e.documentUpdates).next(c=>{l=c.ls,u=c.hs})),!r.isEqual(H.min())){const c=n.Kr.getLastRemoteSnapshotVersion(s).next(h=>n.Kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return P.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.rs=i,s))}function l2(t,e,n){let r=G(),i=G();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=zn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(H.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ls:o,hs:i}})}function u2(t,e){const n=W(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function c2(t,e){const n=W(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Kr.getTargetData(r,e).next(s=>s?(i=s,P.resolve(i)):n.Kr.allocateTargetId(r).next(o=>(i=new lr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.rs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.rs=n.rs.insert(r.targetId,r),n.ss.set(e,r.targetId)),r})}async function Af(t,e,n){const r=W(t),i=r.rs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Sa(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.rs=r.rs.remove(e),r.ss.delete(i.target)}function __(t,e,n){const r=W(t);let i=H.min(),s=G();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const h=W(l),d=h.ss.get(c);return d!==void 0?P.resolve(h.rs.get(d)):h.Kr.getTargetData(u,c)}(r,o,_n(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ns.getDocumentsMatchingQuery(o,e,n?i:H.min(),n?s:G())).next(a=>(h2(r,tN(e),a),{documents:a,Ps:s})))}function h2(t,e,n){let r=t.os.get(e)||H.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.os.set(e,r)}class v_{constructor(){this.activeTargetIds=aN()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class d2{constructor(){this.ro=new v_,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,n,r){this.io[e]=n}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new v_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class f2{so(e){}shutdown(){}}/**
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
 */class w_{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let al=null;function Oh(){return al===null?al=function(){return 268435456+Math.round(2147483648*Math.random())}():al++,"0x"+al.toString(16)}/**
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
 */const p2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class m2{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
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
 */const Ye="WebChannelConnection";class g2 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo=`projects/${i}/databases/${s}`,this.wo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get So(){return!1}bo(n,r,i,s,o){const a=Oh(),l=this.Do(n,r);V("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(u,s,o),this.vo(n,l,u,i).then(c=>(V("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw ms("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Fo(n,r,i,s,o,a){return this.bo(n,r,i,s,o)}Co(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ks}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Do(n,r){const i=p2[n];return`${this.po}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,i){const s=Oh();return new Promise((o,a)=>{const l=new Ix;l.setWithCredentials(!0),l.listenOnce(Ex.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Nh.NO_ERROR:const c=l.getResponseJson();V(Ye,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Nh.TIMEOUT:V(Ye,`RPC '${e}' ${s} timed out`),a(new D(S.DEADLINE_EXCEEDED,"Request time out"));break;case Nh.HTTP_ERROR:const h=l.getStatus();if(V(Ye,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const _=function(E){const m=E.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(m)>=0?m:S.UNKNOWN}(g.status);a(new D(_,g.message))}else a(new D(S.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new D(S.UNAVAILABLE,"Connection failed."));break;default:B()}}finally{V(Ye,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);V(Ye,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Mo(e,n,r){const i=Oh(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=vx(),a=wx(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Co(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");V(Ye,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,g=!1;const _=new m2({ho:E=>{g?V(Ye,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(d||(V(Ye,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),V(Ye,`RPC '${e}' stream ${i} sending:`,E),h.send(E))},Po:()=>h.close()}),v=(E,m,p)=>{E.listen(m,y=>{try{p(y)}catch(w){setTimeout(()=>{throw w},0)}})};return v(h,il.EventType.OPEN,()=>{g||V(Ye,`RPC '${e}' stream ${i} transport opened.`)}),v(h,il.EventType.CLOSE,()=>{g||(g=!0,V(Ye,`RPC '${e}' stream ${i} transport closed`),_.mo())}),v(h,il.EventType.ERROR,E=>{g||(g=!0,ms(Ye,`RPC '${e}' stream ${i} transport errored:`,E),_.mo(new D(S.UNAVAILABLE,"The operation could not be completed")))}),v(h,il.EventType.MESSAGE,E=>{var m;if(!g){const p=E.data[0];de(!!p);const y=p,w=y.error||((m=y[0])===null||m===void 0?void 0:m.error);if(w){V(Ye,`RPC '${e}' stream ${i} received error:`,w);const I=w.status;let A=function(U){const L=Re[U];if(L!==void 0)return U1(L)}(I),k=w.message;A===void 0&&(A=S.INTERNAL,k="Unknown error status: "+I+" with message "+w.message),g=!0,_.mo(new D(A,k)),h.close()}else V(Ye,`RPC '${e}' stream ${i} received:`,p),_.fo(p)}}),v(a,Tx.STAT_EVENT,E=>{E.stat===Yy.PROXY?V(Ye,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===Yy.NOPROXY&&V(Ye,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.Vo()},0),_}}function bh(){return typeof document<"u"?document:null}/**
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
 */function Ic(t){return new RN(t,!0)}/**
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
 */class X1{constructor(e,n,r=1e3,i=1.5,s=6e4){this._i=e,this.timerId=n,this.xo=r,this.Oo=i,this.No=s,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),i=Math.max(0,n-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,i,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
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
 */class J1{constructor(e,n,r,i,s,o,a,l){this._i=e,this.Uo=r,this.Wo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new X1(e,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(Bn(n.toString()),Bn("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Go===n&&this.__(r,i)},r=>{e(()=>{const i=new D(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(i)})})}__(e,n){const r=this.o_(this.Go);this.stream=this.u_(e,n),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(i=>{r(()=>this.a_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return n=>{this._i.enqueueAndForget(()=>this.Go===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class y2 extends J1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}u_(e,n){return this.connection.Mo("Listen",e,n)}onMessage(e){this.Ho.reset();const n=xN(this.serializer,e),r=function(s){if(!("targetChange"in s))return H.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?H.min():o.readTime?vn(o.readTime):H.min()}(e);return this.listener.c_(n,r)}l_(e){const n={};n.database=Sf(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=_f(l)?{documents:ON(s,l)}:{query:bN(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=z1(s,o.resumeToken);const u=Ef(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(H.min())>0){a.readTime=Eu(s,o.snapshotVersion.toTimestamp());const u=Ef(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=VN(this.serializer,e);r&&(n.labels=r),this.n_(n)}h_(e){const n={};n.database=Sf(this.serializer),n.removeTarget=e,this.n_(n)}}class _2 extends J1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,n){return this.connection.Mo("Write",e,n)}onMessage(e){if(de(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const n=DN(e.writeResults,e.commitTime),r=vn(e.commitTime);return this.listener.T_(r,n)}return de(!e.writeResults||e.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=Sf(this.serializer),this.n_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>NN(this.serializer,r))};this.n_(n)}}/**
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
 */class v2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.R_=!1}V_(){if(this.R_)throw new D(S.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.bo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(S.UNKNOWN,i.toString())})}Fo(e,n,r,i){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new D(S.UNKNOWN,s.toString())})}terminate(){this.R_=!0}}class w2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(Bn(n),this.p_=!1):V("OnlineStateTracker",n)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
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
 */class E2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=s,this.x_.so(o=>{r.enqueueAndForget(async()=>{Ci(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=W(l);u.F_.add(4),await Ra(u),u.O_.set("Unknown"),u.F_.delete(4),await Sc(u)}(this))})}),this.O_=new w2(r,i)}}async function Sc(t){if(Ci(t))for(const e of t.M_)await e(!0)}async function Ra(t){for(const e of t.M_)await e(!1)}function Z1(t,e){const n=W(t);n.v_.has(e.targetId)||(n.v_.set(e.targetId,e),Em(n)?wm(n):Ds(n).Yo()&&vm(n,e))}function eT(t,e){const n=W(t),r=Ds(n);n.v_.delete(e),r.Yo()&&tT(n,e),n.v_.size===0&&(r.Yo()?r.e_():Ci(n)&&n.O_.set("Unknown"))}function vm(t,e){if(t.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ds(t).l_(e)}function tT(t,e){t.N_.Le(e),Ds(t).h_(e)}function wm(t){t.N_=new IN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.v_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),Ds(t).start(),t.O_.y_()}function Em(t){return Ci(t)&&!Ds(t).Jo()&&t.v_.size>0}function Ci(t){return W(t).F_.size===0}function nT(t){t.N_=void 0}async function T2(t){t.v_.forEach((e,n)=>{vm(t,e)})}async function I2(t,e){nT(t),Em(t)?(t.O_.b_(e),wm(t)):t.O_.set("Unknown")}async function S2(t,e,n){if(t.O_.set("Online"),e instanceof B1&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.v_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.v_.delete(a),i.N_.removeTarget(a))}(t,e)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Tu(t,r)}else if(e instanceof Pl?t.N_.Ge(e):e instanceof $1?t.N_.Xe(e):t.N_.He(e),!n.isEqual(H.min()))try{const r=await Y1(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.N_._t(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.v_.get(u);c&&s.v_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.v_.get(l);if(!c)return;s.v_.set(l,c.withResumeToken(at.EMPTY_BYTE_STRING,c.snapshotVersion)),tT(s,l);const h=new lr(c.target,l,u,c.sequenceNumber);vm(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await Tu(t,r)}}async function Tu(t,e,n){if(!Sa(e))throw e;t.F_.add(1),await Ra(t),t.O_.set("Offline"),n||(n=()=>Y1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await Sc(t)})}function rT(t,e){return e().catch(n=>Tu(t,n,e))}async function Ac(t){const e=W(t),n=Rr(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;A2(e);)try{const i=await u2(e.localStore,r);if(i===null){e.C_.length===0&&n.e_();break}r=i.batchId,P2(e,i)}catch(i){await Tu(e,i)}iT(e)&&sT(e)}function A2(t){return Ci(t)&&t.C_.length<10}function P2(t,e){t.C_.push(e);const n=Rr(t);n.Yo()&&n.I_&&n.d_(e.mutations)}function iT(t){return Ci(t)&&!Rr(t).Jo()&&t.C_.length>0}function sT(t){Rr(t).start()}async function R2(t){Rr(t).A_()}async function C2(t){const e=Rr(t);for(const n of t.C_)e.d_(n.mutations)}async function k2(t,e,n){const r=t.C_.shift(),i=fm.from(r,e,n);await rT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ac(t)}async function x2(t,e){e&&Rr(t).I_&&await async function(r,i){if(function(o){return wN(o)&&o!==S.ABORTED}(i.code)){const s=r.C_.shift();Rr(r).Xo(),await rT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ac(r)}}(t,e),iT(t)&&sT(t)}async function E_(t,e){const n=W(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=Ci(n);n.F_.add(3),await Ra(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await Sc(n)}async function N2(t,e){const n=W(t);e?(n.F_.delete(2),await Sc(n)):e||(n.F_.add(2),await Ra(n),n.O_.set("Unknown"))}function Ds(t){return t.B_||(t.B_=function(n,r,i){const s=W(n);return s.V_(),new y2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Io:T2.bind(null,t),Eo:I2.bind(null,t),c_:S2.bind(null,t)}),t.M_.push(async e=>{e?(t.B_.Xo(),Em(t)?wm(t):t.O_.set("Unknown")):(await t.B_.stop(),nT(t))})),t.B_}function Rr(t){return t.L_||(t.L_=function(n,r,i){const s=W(n);return s.V_(),new _2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Io:R2.bind(null,t),Eo:x2.bind(null,t),E_:C2.bind(null,t),T_:k2.bind(null,t)}),t.M_.push(async e=>{e?(t.L_.Xo(),await Ac(t)):(await t.L_.stop(),t.C_.length>0&&(V("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))})),t.L_}/**
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
 */class Tm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ln,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Tm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Im(t,e){if(Bn("AsyncQueue",`${e}: ${t}`),Sa(t))return new D(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class is{constructor(e){this.comparator=e?(n,r)=>e(n,r)||M.comparator(n.key,r.key):(n,r)=>M.comparator(n.key,r.key),this.keyedMap=no(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new is(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof is)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new is;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class T_{constructor(){this.k_=new we(M.comparator)}track(e){const n=e.doc.key,r=this.k_.get(n);r?e.type!==0&&r.type===3?this.k_=this.k_.insert(n,e):e.type===3&&r.type!==1?this.k_=this.k_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.k_=this.k_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.k_=this.k_.remove(n):e.type===1&&r.type===2?this.k_=this.k_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):B():this.k_=this.k_.insert(n,e)}q_(){const e=[];return this.k_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Es{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Es(e,n,is.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_c(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class D2{constructor(){this.Q_=void 0,this.listeners=[]}}class O2{constructor(){this.queries=new Ns(e=>R1(e),_c),this.onlineState="Unknown",this.K_=new Set}}async function Sm(t,e){const n=W(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new D2),i)try{s.Q_=await n.onListen(r)}catch(o){const a=Im(o,`Initialization of query '${Oi(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.U_(n.onlineState),s.Q_&&e.W_(s.Q_)&&Pm(n)}async function Am(t,e){const n=W(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function b2(t,e){const n=W(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.W_(i)&&(r=!0);o.Q_=i}}r&&Pm(n)}function L2(t,e,n){const r=W(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Pm(t){t.K_.forEach(e=>{e.next()})}class Rm{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Es(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=Es.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
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
 */class oT{constructor(e){this.key=e}}class aT{constructor(e){this.key=e}}class V2{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=G(),this.mutatedKeys=G(),this.ua=C1(e),this.ca=new is(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new T_,i=n?n.ca:this.ca;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),g=vc(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let E=!1;d&&g?d.data.isEqual(g.data)?_!==v&&(r.track({type:3,doc:g}),E=!0):this.Ia(d,g)||(r.track({type:2,doc:g}),E=!0,(l&&this.ua(g,l)>0||u&&this.ua(g,u)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),E=!0):d&&!g&&(r.track({type:1,doc:d}),E=!0,(l||u)&&(a=!0)),E&&(g?(o=o.add(g),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ca:o,Pa:r,es:a,mutatedKeys:s}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const s=e.Pa.q_();s.sort((u,c)=>function(d,g){const _=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B()}};return _(d)-_(g)}(u.type,c.type)||this.ua(u.doc,c.doc)),this.da(r);const o=n?this.Ta():[],a=this.aa.size===0&&this.current?1:0,l=a!==this._a;return this._a=a,s.length!==0||l?{snapshot:new Es(this.query,e.ca,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new T_,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=G(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new aT(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new oT(r))}),n}Ra(e){this.oa=e.Ps,this.aa=G();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return Es.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class M2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class j2{constructor(e){this.key=e,this.ma=!1}}class F2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Ns(a=>R1(a),_c),this.pa=new Map,this.ya=new Set,this.wa=new we(M.comparator),this.Sa=new Map,this.ba=new gm,this.Da={},this.Ca=new Map,this.va=ws.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function U2(t,e){const n=Y2(t);let r,i;const s=n.ga.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await c2(n.localStore,_n(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await $2(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Z1(n.remoteStore,o)}return i}async function $2(t,e,n,r,i){t.Ma=(h,d,g)=>async function(v,E,m,p){let y=E.view.ha(m);y.es&&(y=await __(v.localStore,E.query,!1).then(({documents:A})=>E.view.ha(A,y)));const w=p&&p.targetChanges.get(E.targetId),I=E.view.applyChanges(y,v.isPrimaryClient,w);return S_(v,E.targetId,I.Ea),I.snapshot}(t,h,d,g);const s=await __(t.localStore,e,!0),o=new V2(e,s.Ps),a=o.ha(s.documents),l=Pa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);S_(t,n,u.Ea);const c=new M2(e,n,o);return t.ga.set(e,c),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),u.snapshot}async function B2(t,e){const n=W(t),r=n.ga.get(e),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(s=>!_c(s,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Af(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),eT(n.remoteStore,r.targetId),Pf(n,r.targetId)}).catch(Ia)):(Pf(n,r.targetId),await Af(n.localStore,r.targetId,!0))}async function z2(t,e,n){const r=X2(t);try{const i=await function(o,a){const l=W(o),u=be.now(),c=a.reduce((g,_)=>g.add(_.key),G());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let _=zn(),v=G();return l._s.getEntries(g,c).next(E=>{_=E,_.forEach((m,p)=>{p.isValidDocument()||(v=v.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,_)).next(E=>{h=E;const m=[];for(const p of a){const y=mN(p,h.get(p.key).overlayedDocument);y!=null&&m.push(new Lr(p.key,y,v1(y.value.mapValue),$t.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,m,a)}).next(E=>{d=E;const m=E.applyToLocalDocumentSet(h,v);return l.documentOverlayCache.saveOverlays(g,E.batchId,m)})}).then(()=>({batchId:d.batchId,changes:x1(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Da[o.currentUser.toKey()];u||(u=new we(te)),u=u.insert(a,l),o.Da[o.currentUser.toKey()]=u}(r,i.batchId,n),await Ca(r,i.changes),await Ac(r.remoteStore)}catch(i){const s=Im(i,"Failed to persist write");n.reject(s)}}async function lT(t,e){const n=W(t);try{const r=await a2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Sa.get(s);o&&(de(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?de(o.ma):i.removedDocuments.size>0&&(de(o.ma),o.ma=!1))}),await Ca(n,r,e)}catch(r){await Ia(r)}}function I_(t,e,n){const r=W(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=W(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.U_(a)&&(u=!0)}),u&&Pm(l)}(r.eventManager,e),i.length&&r.fa.c_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function H2(t,e,n){const r=W(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Sa.get(e),s=i&&i.key;if(s){let o=new we(M.comparator);o=o.insert(s,Ze.newNoDocument(s,H.min()));const a=G().add(s),l=new Tc(H.min(),new Map,new we(te),o,a);await lT(r,l),r.wa=r.wa.remove(s),r.Sa.delete(e),Cm(r)}else await Af(r.localStore,e,!1).then(()=>Pf(r,e,n)).catch(Ia)}async function q2(t,e){const n=W(t),r=e.batch.batchId;try{const i=await o2(n.localStore,e);cT(n,r,null),uT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ca(n,i)}catch(i){await Ia(i)}}async function W2(t,e,n){const r=W(t);try{const i=await function(o,a){const l=W(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(de(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);cT(r,e,n),uT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ca(r,i)}catch(i){await Ia(i)}}function uT(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function cT(t,e,n){const r=W(t);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}function Pf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.mr(e).forEach(r=>{t.ba.containsKey(r)||hT(t,r)})}function hT(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(eT(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),Cm(t))}function S_(t,e,n){for(const r of n)r instanceof oT?(t.ba.addReference(r.key,e),K2(t,r)):r instanceof aT?(V("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||hT(t,r.key)):B()}function K2(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(V("SyncEngine","New document in limbo: "+n),t.ya.add(r),Cm(t))}function Cm(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new M(ce.fromString(e)),r=t.va.next();t.Sa.set(r,new j2(n)),t.wa=t.wa.insert(n,r),Z1(t.remoteStore,new lr(_n(gc(n.path)),r,"TargetPurposeLimboResolution",sm.ae))}}async function Ca(t,e,n){const r=W(t),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=_m.$i(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fa.c_(i),await async function(l,u){const c=W(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>P.forEach(u,d=>P.forEach(d.Qi,g=>c.persistence.referenceDelegate.addReference(h,d.targetId,g)).next(()=>P.forEach(d.Ki,g=>c.persistence.referenceDelegate.removeReference(h,d.targetId,g)))))}catch(h){if(!Sa(h))throw h;V("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const g=c.rs.get(d),_=g.snapshotVersion,v=g.withLastLimboFreeSnapshotVersion(_);c.rs=c.rs.insert(d,v)}}}(r.localStore,s))}async function G2(t,e){const n=W(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const r=await Q1(n.localStore,e);n.currentUser=e,function(s,o){s.Ca.forEach(a=>{a.forEach(l=>{l.reject(new D(S.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ca(n,r.cs)}}function Q2(t,e){const n=W(t),r=n.Sa.get(e);if(r&&r.ma)return G().add(r.key);{let i=G();const s=n.pa.get(e);if(!s)return i;for(const o of s){const a=n.ga.get(o);i=i.unionWith(a.view.la)}return i}}function Y2(t){const e=W(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=lT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Q2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=H2.bind(null,e),e.fa.c_=b2.bind(null,e.eventManager),e.fa.xa=L2.bind(null,e.eventManager),e}function X2(t){const e=W(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=q2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=W2.bind(null,e),e}class A_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ic(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return s2(this.persistence,new r2,e.initialUser,this.serializer)}createPersistence(e){return new e2(ym.Jr,this.serializer)}createSharedClientState(e){return new d2}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class J2{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>I_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=G2.bind(null,this.syncEngine),await N2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new O2}()}createDatastore(e){const n=Ic(e.databaseInfo.databaseId),r=function(s){return new g2(s)}(e.databaseInfo);return function(s,o,a,l){return new v2(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new E2(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>I_(this.syncEngine,n,0),function(){return w_.C()?new w_:new f2}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new F2(i,s,o,a,l,u);return c&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=W(n);V("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await Ra(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
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
 */class km{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):Bn("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Z2{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Xe.UNAUTHENTICATED,this.clientId=g1.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{V("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(V("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new D(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ln;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Im(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Lh(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Q1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function P_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await tD(t);V("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>E_(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>E_(e.remoteStore,s)),t._onlineComponents=e}function eD(t){return t.name==="FirebaseError"?t.code===S.FAILED_PRECONDITION||t.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function tD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await Lh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!eD(n))throw n;ms("Error using user provided cache. Falling back to memory cache: "+n),await Lh(t,new A_)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await Lh(t,new A_);return t._offlineComponents}async function dT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await P_(t,t._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await P_(t,new J2))),t._onlineComponents}function nD(t){return dT(t).then(e=>e.syncEngine)}async function Iu(t){const e=await dT(t),n=e.eventManager;return n.onListen=U2.bind(null,e.syncEngine),n.onUnlisten=B2.bind(null,e.syncEngine),n}function rD(t,e,n={}){const r=new Ln;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new km({next:d=>{o.enqueueAndForget(()=>Am(s,h));const g=d.docs.has(a);!g&&d.fromCache?u.reject(new D(S.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&d.fromCache&&l&&l.source==="server"?u.reject(new D(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Rm(gc(a.path),c,{includeMetadataChanges:!0,Z_:!0});return Sm(s,h)}(await Iu(t),t.asyncQueue,e,n,r)),r.promise}function iD(t,e,n={}){const r=new Ln;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new km({next:d=>{o.enqueueAndForget(()=>Am(s,h)),d.fromCache&&l.source==="server"?u.reject(new D(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Rm(a,c,{includeMetadataChanges:!0,Z_:!0});return Sm(s,h)}(await Iu(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function fT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const R_=new Map;/**
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
 */function pT(t,e,n){if(!n)throw new D(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sD(t,e,n,r){if(e===!0&&r===!0)throw new D(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function C_(t){if(!M.isDocumentKey(t))throw new D(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function k_(t){if(M.isDocumentKey(t))throw new D(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Pc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":B()}function It(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new D(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Pc(t);throw new D(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class x_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new D(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new D(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Rc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new x_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new D(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new D(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new x_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ax;switch(r.type){case"firstParty":return new kx(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=R_.get(n);r&&(V("ComponentProvider","Removing Datastore"),R_.delete(n),r.terminate())}(this),Promise.resolve()}}function oD(t,e,n,r={}){var i;const s=(t=It(t,Rc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ms("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Xe.MOCK_USER;else{a=sE(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new D(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Xe(u)}t._authCredentials=new Px(new m1(a,l))}}/**
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
 */class Vr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Vr(this.firestore,e,this._query)}}class it{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new it(this.firestore,e,this._key)}}class wr extends Vr{constructor(e,n,r){super(e,n,gc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new it(this.firestore,null,new M(e))}withConverter(e){return new wr(this.firestore,e,this._path)}}function St(t,e,...n){if(t=fe(t),pT("collection","path",e),t instanceof Rc){const r=ce.fromString(e,...n);return k_(r),new wr(t,null,r)}{if(!(t instanceof it||t instanceof wr))throw new D(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ce.fromString(e,...n));return k_(r),new wr(t.firestore,null,r)}}function je(t,e,...n){if(t=fe(t),arguments.length===1&&(e=g1.V()),pT("doc","path",e),t instanceof Rc){const r=ce.fromString(e,...n);return C_(r),new it(t,null,new M(r))}{if(!(t instanceof it||t instanceof wr))throw new D(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ce.fromString(e,...n));return C_(r),new it(t.firestore,t instanceof wr?t.converter:null,new M(r))}}/**
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
 */class aD{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new X1(this,"async_queue_retry"),this.ou=()=>{const n=bh();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=bh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=bh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new Ln;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!Sa(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Bn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(e,n,r){this._u(),this.su.indexOf(e)>-1&&(n=0);const i=Tm.createAndSchedule(this,e,n,r,s=>this.cu(s));return this.tu.push(i),i}_u(){this.nu&&B()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}function N_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Hn extends Rc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new aD}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||mT(this),this._firestoreClient.terminate()}}function lD(t,e){const n=typeof t=="object"?t:Ju(),r=typeof t=="string"?t:e||"(default)",i=Si(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=nE("firestore");s&&oD(i,...s)}return i}function Cc(t){return t._firestoreClient||mT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function mT(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new $x(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,fT(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Z2(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Ts{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ts(at.fromBase64String(e))}catch(n){throw new D(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ts(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class kc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new D(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class xc{constructor(e){this._methodName=e}}/**
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
 */class xm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new D(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new D(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}}/**
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
 */const uD=/^__.*__$/;class cD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Lr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Aa(e,this.data,n,this.fieldTransforms)}}class gT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Lr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function yT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B()}}class Nc{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.du(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new Nc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Ru:!1});return i.Vu(e),i}mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Ru:!1});return i.du(),i}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return Su(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(e.length===0)throw this.gu("Document fields must not be empty");if(yT(this.Tu)&&uD.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class hD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ic(e)}wu(e,n,r,i=!1){return new Nc({Tu:e,methodName:n,yu:r,path:et.emptyPath(),Ru:!1,pu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Dc(t){const e=t._freezeSettings(),n=Ic(t._databaseId);return new hD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function _T(t,e,n,r,i,s={}){const o=t.wu(s.merge||s.mergeFields?2:0,e,n,i);Nm("Data must be an object, but it was:",o,r);const a=vT(r,o);let l,u;if(s.merge)l=new Ct(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Rf(e,h,n);if(!o.contains(d))throw new D(S.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);ET(c,d)||c.push(d)}l=new Ct(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new cD(new gt(a),l,u)}class Oc extends xc{_toFieldTransform(e){if(e.Tu!==2)throw e.Tu===1?e.gu(`${this._methodName}() can only appear at the top level of your update data`):e.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Oc}}function dD(t,e,n){return new Nc({Tu:3,yu:e.settings.yu,methodName:t._methodName,Ru:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class fD extends xc{constructor(e,n){super(e),this.Su=n}_toFieldTransform(e){const n=dD(this,e,!0),r=this.Su.map(s=>Os(s,n)),i=new vs(r);return new hN(e.path,i)}isEqual(e){return this===e}}function pD(t,e,n,r){const i=t.wu(1,e,n);Nm("Data must be an object, but it was:",i,r);const s=[],o=gt.empty();Ri(r,(l,u)=>{const c=Dm(e,l,n);u=fe(u);const h=i.mu(c);if(u instanceof Oc)s.push(c);else{const d=Os(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Ct(s);return new gT(o,a,i.fieldTransforms)}function mD(t,e,n,r,i,s){const o=t.wu(1,e,n),a=[Rf(e,r,n)],l=[i];if(s.length%2!=0)throw new D(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Rf(e,s[d])),l.push(s[d+1]);const u=[],c=gt.empty();for(let d=a.length-1;d>=0;--d)if(!ET(u,a[d])){const g=a[d];let _=l[d];_=fe(_);const v=o.mu(g);if(_ instanceof Oc)u.push(g);else{const E=Os(_,v);E!=null&&(u.push(g),c.set(g,E))}}const h=new Ct(u);return new gT(c,h,o.fieldTransforms)}function gD(t,e,n,r=!1){return Os(n,t.wu(r?4:3,e))}function Os(t,e){if(wT(t=fe(t)))return Nm("Unsupported field value:",e,t),vT(t,e);if(t instanceof xc)return function(r,i){if(!yT(i.Tu))throw i.gu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.gu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ru&&e.Tu!==4)throw e.gu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Os(a,i.fu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return lN(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=be.fromDate(r);return{timestampValue:Eu(i.serializer,s)}}if(r instanceof be){const s=new be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Eu(i.serializer,s)}}if(r instanceof xm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ts)return{bytesValue:z1(i.serializer,r._byteString)};if(r instanceof it){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:mm(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.gu(`Unsupported field value: ${Pc(r)}`)}(t,e)}function vT(t,e){const n={};return y1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ri(t,(r,i)=>{const s=Os(i,e.Au(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function wT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof be||t instanceof xm||t instanceof Ts||t instanceof it||t instanceof xc)}function Nm(t,e,n){if(!wT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Pc(n);throw r==="an object"?e.gu(t+" a custom object"):e.gu(t+" "+r)}}function Rf(t,e,n){if((e=fe(e))instanceof kc)return e._internalPath;if(typeof e=="string")return Dm(t,e);throw Su("Field path arguments must be of type string or ",t,!1,void 0,n)}const yD=new RegExp("[~\\*/\\[\\]]");function Dm(t,e,n){if(e.search(yD)>=0)throw Su(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new kc(...e.split("."))._internalPath}catch{throw Su(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Su(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new D(S.INVALID_ARGUMENT,a+t+l)}function ET(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class TT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _D(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(bc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _D extends TT{data(){return super.data()}}function bc(t,e){return typeof e=="string"?Dm(t,e):e instanceof kc?e._internalPath:e._delegate._internalPath}/**
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
 */function IT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new D(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Om{}class ST extends Om{}function In(t,e,...n){let r=[];e instanceof Om&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof bm).length,a=s.filter(l=>l instanceof Lc).length;if(o>1||o>0&&a>0)throw new D(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Lc extends ST{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Lc(e,n,r)}_apply(e){const n=this._parse(e);return PT(e._query,n),new Vr(e.firestore,e.converter,vf(e._query,n))}_parse(e){const n=Dc(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new D(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){O_(h,c);const g=[];for(const _ of h)g.push(D_(l,s,_));d={arrayValue:{values:g}}}else d=D_(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||O_(h,c),d=gD(a,o,h,c==="in"||c==="not-in");return xe.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Cr(t,e,n){const r=e,i=bc("where",t);return Lc._create(i,r,n)}class bm extends Om{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new bm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:rn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)PT(o,l),o=vf(o,l)}(e._query,n),new Vr(e.firestore,e.converter,vf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Lm extends ST{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Lm(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new D(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new D(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new rs(s,o);return function(u,c){if(hm(u)===null){const h=yc(u);h!==null&&RT(u,h,c.field)}}(i,a),a}(e._query,this._field,this._direction);return new Vr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new xs(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function AT(t,e="asc"){const n=e,r=bc("orderBy",t);return Lm._create(r,n)}function D_(t,e,n){if(typeof(n=fe(n))=="string"){if(n==="")throw new D(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!P1(e)&&n.indexOf("/")!==-1)throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ce.fromString(n));if(!M.isDocumentKey(r))throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return t_(t,new M(r))}if(n instanceof it)return t_(t,n._key);throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Pc(n)}.`)}function O_(t,e){if(!Array.isArray(t)||t.length===0)throw new D(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function PT(t,e){if(e.isInequality()){const r=yc(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new D(S.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=hm(t);s!==null&&RT(t,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new D(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function RT(t,e,n){if(!n.isEqual(e))throw new D(S.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class vD{convertValue(e,n="none"){switch(fi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(di(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw B()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ri(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new xm(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=am(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Zo(e));default:return null}}convertTimestamp(e){const n=Pr(e);return new be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ce.fromString(e);de(G1(r));const i=new ea(r.get(1),r.get(3)),s=new M(r.popFirst(5));return i.isEqual(n)||Bn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function CT(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class io{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kT extends TT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Rl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(bc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Rl extends kT{data(e={}){return super.data(e)}}class xT{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new io(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Rl(this._firestore,this._userDataWriter,r.key,r,new io(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new D(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Rl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new io(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Rl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new io(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:wD(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function wD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B()}}/**
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
 */function pn(t){t=It(t,it);const e=It(t.firestore,Hn);return rD(Cc(e),t._key).then(n=>OT(e,t,n))}class Vm extends vD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ts(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new it(this.firestore,null,n)}}function Sn(t){t=It(t,Vr);const e=It(t.firestore,Hn),n=Cc(e),r=new Vm(e);return IT(t._query),iD(n,t._query).then(i=>new xT(e,r,t,i))}function b_(t,e,n){t=It(t,it);const r=It(t.firestore,Hn),i=CT(t.converter,e,n);return Vc(r,[_T(Dc(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,$t.none())])}function Yt(t,e,n,...r){t=It(t,it);const i=It(t.firestore,Hn),s=Dc(i);let o;return o=typeof(e=fe(e))=="string"||e instanceof kc?mD(s,"updateDoc",t._key,e,n,r):pD(s,"updateDoc",t._key,e),Vc(i,[o.toMutation(t._key,$t.exists(!0))])}function NT(t){return Vc(It(t.firestore,Hn),[new dm(t._key,$t.none())])}function DT(t,e){const n=It(t.firestore,Hn),r=je(t),i=CT(t.converter,e);return Vc(n,[_T(Dc(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,$t.exists(!1))]).then(()=>r)}function ED(t,...e){var n,r,i;t=fe(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||N_(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(N_(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof it)u=It(t.firestore,Hn),c=gc(t._key.path),l={next:h=>{e[o]&&e[o](OT(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=It(t,Vr);u=It(h.firestore,Hn),c=h._query;const d=new Vm(u);l={next:g=>{e[o]&&e[o](new xT(u,d,h,g))},error:e[o+1],complete:e[o+2]},IT(t._query)}return function(d,g,_,v){const E=new km(v),m=new Rm(g,E,_);return d.asyncQueue.enqueueAndForget(async()=>Sm(await Iu(d),m)),()=>{E.La(),d.asyncQueue.enqueueAndForget(async()=>Am(await Iu(d),m))}}(Cc(u),c,a,l)}function Vc(t,e){return function(r,i){const s=new Ln;return r.asyncQueue.enqueueAndForget(async()=>z2(await nD(r),i,s)),s.promise}(Cc(t),e)}function OT(t,e,n){const r=n.docs.get(e._key),i=new Vm(t);return new kT(t,i,e._key,r,new io(n.hasPendingWrites,n.fromCache),e.converter)}function To(...t){return new fD("arrayUnion",t)}(function(e,n=!0){(function(i){ks=i})(Ai),tn(new Ht("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Hn(new Rx(r.getProvider("auth-internal")),new Nx(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new D(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ea(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Tt(Xy,"4.2.0",e),Tt(Xy,"4.2.0","esm2017")})();const TD=(t,e)=>e.some(n=>t instanceof n);let L_,V_;function ID(){return L_||(L_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function SD(){return V_||(V_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bT=new WeakMap,Cf=new WeakMap,LT=new WeakMap,Vh=new WeakMap,Mm=new WeakMap;function AD(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Er(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&bT.set(n,t)}).catch(()=>{}),Mm.set(e,t),e}function PD(t){if(Cf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Cf.set(t,e)}let kf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Cf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||LT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function RD(t){kf=t(kf)}function CD(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Mh(this),e,...n);return LT.set(r,e.sort?e.sort():[e]),Er(r)}:SD().includes(t)?function(...e){return t.apply(Mh(this),e),Er(bT.get(this))}:function(...e){return Er(t.apply(Mh(this),e))}}function kD(t){return typeof t=="function"?CD(t):(t instanceof IDBTransaction&&PD(t),TD(t,ID())?new Proxy(t,kf):t)}function Er(t){if(t instanceof IDBRequest)return AD(t);if(Vh.has(t))return Vh.get(t);const e=kD(t);return e!==t&&(Vh.set(t,e),Mm.set(e,t)),e}const Mh=t=>Mm.get(t);function xD(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Er(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Er(o.result),l.oldVersion,l.newVersion,Er(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const ND=["get","getKey","getAll","getAllKeys","count"],DD=["put","add","delete","clear"],jh=new Map;function M_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(jh.get(e))return jh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=DD.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ND.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return jh.set(e,s),s}RD(t=>({...t,get:(e,n,r)=>M_(e,n)||t.get(e,n,r),has:(e,n)=>!!M_(e,n)||t.has(e,n)}));const VT="@firebase/installations",jm="0.6.4";/**
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
 */const MT=1e4,jT=`w:${jm}`,FT="FIS_v2",OD="https://firebaseinstallations.googleapis.com/v1",bD=60*60*1e3,LD="installations",VD="Installations";/**
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
 */const MD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},pi=new Ii(LD,VD,MD);function UT(t){return t instanceof on&&t.code.includes("request-failed")}/**
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
 */function $T({projectId:t}){return`${OD}/projects/${t}/installations`}function BT(t){return{token:t.token,requestStatus:2,expiresIn:FD(t.expiresIn),creationTime:Date.now()}}async function zT(t,e){const r=(await e.json()).error;return pi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function HT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function jD(t,{refreshToken:e}){const n=HT(t);return n.append("Authorization",UD(e)),n}async function qT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function FD(t){return Number(t.replace("s","000"))}function UD(t){return`${FT} ${t}`}/**
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
 */async function $D({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=$T(t),i=HT(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:FT,appId:t.appId,sdkVersion:jT},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await qT(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:BT(u.authToken)}}else throw await zT("Create Installation",l)}/**
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
 */function WT(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function BD(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const zD=/^[cdef][\w-]{21}$/,xf="";function HD(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=qD(t);return zD.test(n)?n:xf}catch{return xf}}function qD(t){return BD(t).substr(0,22)}/**
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
 */function Mc(t){return`${t.appName}!${t.appId}`}/**
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
 */const KT=new Map;function GT(t,e){const n=Mc(t);QT(n,e),WD(n,e)}function QT(t,e){const n=KT.get(t);if(n)for(const r of n)r(e)}function WD(t,e){const n=KD();n&&n.postMessage({key:t,fid:e}),GD()}let Xr=null;function KD(){return!Xr&&"BroadcastChannel"in self&&(Xr=new BroadcastChannel("[Firebase] FID Change"),Xr.onmessage=t=>{QT(t.data.key,t.data.fid)}),Xr}function GD(){KT.size===0&&Xr&&(Xr.close(),Xr=null)}/**
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
 */const QD="firebase-installations-database",YD=1,mi="firebase-installations-store";let Fh=null;function Fm(){return Fh||(Fh=xD(QD,YD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(mi)}}})),Fh}async function Au(t,e){const n=Mc(t),i=(await Fm()).transaction(mi,"readwrite"),s=i.objectStore(mi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&GT(t,e.fid),e}async function YT(t){const e=Mc(t),r=(await Fm()).transaction(mi,"readwrite");await r.objectStore(mi).delete(e),await r.done}async function jc(t,e){const n=Mc(t),i=(await Fm()).transaction(mi,"readwrite"),s=i.objectStore(mi),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&GT(t,a.fid),a}/**
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
 */async function Um(t){let e;const n=await jc(t.appConfig,r=>{const i=XD(r),s=JD(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===xf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function XD(t){const e=t||{fid:HD(),registrationStatus:0};return XT(e)}function JD(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(pi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=ZD(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:eO(t)}:{installationEntry:e}}async function ZD(t,e){try{const n=await $D(t,e);return Au(t.appConfig,n)}catch(n){throw UT(n)&&n.customData.serverCode===409?await YT(t.appConfig):await Au(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function eO(t){let e=await j_(t.appConfig);for(;e.registrationStatus===1;)await WT(100),e=await j_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Um(t);return r||n}return e}function j_(t){return jc(t,e=>{if(!e)throw pi.create("installation-not-found");return XT(e)})}function XT(t){return tO(t)?{fid:t.fid,registrationStatus:0}:t}function tO(t){return t.registrationStatus===1&&t.registrationTime+MT<Date.now()}/**
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
 */async function nO({appConfig:t,heartbeatServiceProvider:e},n){const r=rO(t,n),i=jD(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:jT,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await qT(()=>fetch(r,a));if(l.ok){const u=await l.json();return BT(u)}else throw await zT("Generate Auth Token",l)}function rO(t,{fid:e}){return`${$T(t)}/${e}/authTokens:generate`}/**
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
 */async function $m(t,e=!1){let n;const r=await jc(t.appConfig,s=>{if(!JT(s))throw pi.create("not-registered");const o=s.authToken;if(!e&&oO(o))return s;if(o.requestStatus===1)return n=iO(t,e),s;{if(!navigator.onLine)throw pi.create("app-offline");const a=lO(s);return n=sO(t,a),a}});return n?await n:r.authToken}async function iO(t,e){let n=await F_(t.appConfig);for(;n.authToken.requestStatus===1;)await WT(100),n=await F_(t.appConfig);const r=n.authToken;return r.requestStatus===0?$m(t,e):r}function F_(t){return jc(t,e=>{if(!JT(e))throw pi.create("not-registered");const n=e.authToken;return uO(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function sO(t,e){try{const n=await nO(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Au(t.appConfig,r),n}catch(n){if(UT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await YT(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Au(t.appConfig,r)}throw n}}function JT(t){return t!==void 0&&t.registrationStatus===2}function oO(t){return t.requestStatus===2&&!aO(t)}function aO(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+bD}function lO(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function uO(t){return t.requestStatus===1&&t.requestTime+MT<Date.now()}/**
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
 */async function cO(t){const e=t,{installationEntry:n,registrationPromise:r}=await Um(e);return r?r.catch(console.error):$m(e).catch(console.error),n.fid}/**
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
 */async function hO(t,e=!1){const n=t;return await dO(n),(await $m(n,e)).token}async function dO(t){const{registrationPromise:e}=await Um(t);e&&await e}/**
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
 */function fO(t){if(!t||!t.options)throw Uh("App Configuration");if(!t.name)throw Uh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Uh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Uh(t){return pi.create("missing-app-config-values",{valueName:t})}/**
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
 */const ZT="installations",pO="installations-internal",mO=t=>{const e=t.getProvider("app").getImmediate(),n=fO(e),r=Si(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},gO=t=>{const e=t.getProvider("app").getImmediate(),n=Si(e,ZT).getImmediate();return{getId:()=>cO(n),getToken:i=>hO(n,i)}};function yO(){tn(new Ht(ZT,mO,"PUBLIC")),tn(new Ht(pO,gO,"PRIVATE"))}yO();Tt(VT,jm);Tt(VT,jm,"esm2017");const _O=(t,e)=>e.some(n=>t instanceof n);let U_,$_;function vO(){return U_||(U_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wO(){return $_||($_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const eI=new WeakMap,Nf=new WeakMap,tI=new WeakMap,$h=new WeakMap,Bm=new WeakMap;function EO(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Vn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&eI.set(n,t)}).catch(()=>{}),Bm.set(e,t),e}function TO(t){if(Nf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Nf.set(t,e)}let Df={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||tI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function IO(t){Df=t(Df)}function SO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Bh(this),e,...n);return tI.set(r,e.sort?e.sort():[e]),Vn(r)}:wO().includes(t)?function(...e){return t.apply(Bh(this),e),Vn(eI.get(this))}:function(...e){return Vn(t.apply(Bh(this),e))}}function AO(t){return typeof t=="function"?SO(t):(t instanceof IDBTransaction&&TO(t),_O(t,vO())?new Proxy(t,Df):t)}function Vn(t){if(t instanceof IDBRequest)return EO(t);if($h.has(t))return $h.get(t);const e=AO(t);return e!==t&&($h.set(t,e),Bm.set(e,t)),e}const Bh=t=>Bm.get(t);function nI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Vn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Vn(o.result),l.oldVersion,l.newVersion,Vn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}function zh(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",()=>e()),Vn(n).then(()=>{})}const PO=["get","getKey","getAll","getAllKeys","count"],RO=["put","add","delete","clear"],Hh=new Map;function B_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Hh.get(e))return Hh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=RO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||PO.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Hh.set(e,s),s}IO(t=>({...t,get:(e,n,r)=>B_(e,n)||t.get(e,n,r),has:(e,n)=>!!B_(e,n)||t.has(e,n)}));/**
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
 */const CO="/firebase-messaging-sw.js",kO="/firebase-cloud-messaging-push-scope",rI="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",xO="https://fcmregistrations.googleapis.com/v1",iI="google.c.a.c_id",NO="google.c.a.c_l",DO="google.c.a.ts",OO="google.c.a.e";var z_;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(z_||(z_={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var ra;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(ra||(ra={}));/**
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
 */function Pn(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function bO(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const qh="fcm_token_details_db",LO=5,H_="fcm_token_object_Store";async function VO(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(qh))return null;let e=null;return(await nI(qh,LO,{upgrade:async(r,i,s,o)=>{var a;if(i<2||!r.objectStoreNames.contains(H_))return;const l=o.objectStore(H_),u=await l.index("fcmSenderId").get(t);if(await l.clear(),!!u){if(i===2){const c=u;if(!c.auth||!c.p256dh||!c.endpoint)return;e={token:c.fcmToken,createTime:(a=c.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:typeof c.vapidKey=="string"?c.vapidKey:Pn(c.vapidKey)}}}else if(i===3){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:Pn(c.auth),p256dh:Pn(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:Pn(c.vapidKey)}}}else if(i===4){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:Pn(c.auth),p256dh:Pn(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:Pn(c.vapidKey)}}}}}})).close(),await zh(qh),await zh("fcm_vapid_details_db"),await zh("undefined"),MO(e)?e:null}function MO(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const jO="firebase-messaging-database",FO=1,gi="firebase-messaging-store";let Wh=null;function zm(){return Wh||(Wh=nI(jO,FO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(gi)}}})),Wh}async function sI(t){const e=qm(t),r=await(await zm()).transaction(gi).objectStore(gi).get(e);if(r)return r;{const i=await VO(t.appConfig.senderId);if(i)return await Hm(t,i),i}}async function Hm(t,e){const n=qm(t),i=(await zm()).transaction(gi,"readwrite");return await i.objectStore(gi).put(e,n),await i.done,e}async function UO(t){const e=qm(t),r=(await zm()).transaction(gi,"readwrite");await r.objectStore(gi).delete(e),await r.done}function qm({appConfig:t}){return t.appId}/**
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
 */const $O={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},dt=new Ii("messaging","Messaging",$O);/**
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
 */async function BO(t,e){const n=await Km(t),r=aI(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Wm(t.appConfig),i)).json()}catch(o){throw dt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw dt.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw dt.create("token-subscribe-no-token");return s.token}async function zO(t,e){const n=await Km(t),r=aI(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Wm(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw dt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw dt.create("token-update-failed",{errorInfo:o})}if(!s.token)throw dt.create("token-update-no-token");return s.token}async function oI(t,e){const r={method:"DELETE",headers:await Km(t)};try{const s=await(await fetch(`${Wm(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw dt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw dt.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Wm({projectId:t}){return`${xO}/projects/${t}/registrations`}async function Km({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function aI({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==rI&&(i.web.applicationPubKey=r),i}/**
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
 */const HO=7*24*60*60*1e3;async function qO(t){const e=await GO(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Pn(e.getKey("auth")),p256dh:Pn(e.getKey("p256dh"))},r=await sI(t.firebaseDependencies);if(r){if(QO(r.subscriptionOptions,n))return Date.now()>=r.createTime+HO?KO(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await oI(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return q_(t.firebaseDependencies,n)}else return q_(t.firebaseDependencies,n)}async function WO(t){const e=await sI(t.firebaseDependencies);e&&(await oI(t.firebaseDependencies,e.token),await UO(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function KO(t,e){try{const n=await zO(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Hm(t.firebaseDependencies,r),n}catch(n){throw await WO(t),n}}async function q_(t,e){const r={token:await BO(t,e),createTime:Date.now(),subscriptionOptions:e};return await Hm(t,r),r.token}async function GO(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:bO(e)})}function QO(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
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
 */function W_(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return YO(e,t),XO(e,t),JO(e,t),e}function YO(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function XO(t,e){e.data&&(t.data=e.data)}function JO(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;a&&(t.fcmOptions.link=a);const l=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;l&&(t.fcmOptions.analyticsLabel=l)}/**
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
 */function ZO(t){return typeof t=="object"&&!!t&&iI in t}/**
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
 */lI("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");lI("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function lI(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
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
 */function eb(t){if(!t||!t.options)throw Kh("App Configuration Object");if(!t.name)throw Kh("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Kh(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Kh(t){return dt.create("missing-app-config-values",{valueName:t})}/**
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
 */class tb{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=eb(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function nb(t){try{t.swRegistration=await navigator.serviceWorker.register(CO,{scope:kO}),t.swRegistration.update().catch(()=>{})}catch(e){throw dt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function rb(t,e){if(!e&&!t.swRegistration&&await nb(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw dt.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function ib(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=rI)}/**
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
 */async function uI(t,e){if(!navigator)throw dt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw dt.create("permission-blocked");return await ib(t,e==null?void 0:e.vapidKey),await rb(t,e==null?void 0:e.serviceWorkerRegistration),qO(t)}/**
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
 */async function sb(t,e,n){const r=ob(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[iI],message_name:n[NO],message_time:n[DO],message_device_time:Math.floor(Date.now()/1e3)})}function ob(t){switch(t){case ra.NOTIFICATION_CLICKED:return"notification_open";case ra.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function ab(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===ra.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(W_(n)):t.onMessageHandler.next(W_(n)));const r=n.data;ZO(r)&&r[OO]==="1"&&await sb(t,n.messageType,r)}const K_="@firebase/messaging",G_="0.12.4";/**
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
 */const lb=t=>{const e=new tb(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>ab(e,n)),e},ub=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>uI(e,r)}};function cb(){tn(new Ht("messaging",lb,"PUBLIC")),tn(new Ht("messaging-internal",ub,"PRIVATE")),Tt(K_,G_),Tt(K_,G_,"esm2017")}/**
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
 */async function hb(){try{await aE()}catch{return!1}return typeof window<"u"&&oE()&&iC()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function db(t=Ju()){return hb().then(e=>{if(!e)throw dt.create("unsupported-browser")},e=>{throw dt.create("indexed-db-unsupported")}),Si(fe(t),"messaging").getImmediate()}async function fb(t,e){return t=fe(t),uI(t,e)}cb();function Gm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Q_(t){return t!==void 0&&t.enterprise!==void 0}class pb{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function cI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mb=cI,hI=new Ii("auth","Firebase",cI());/**
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
 */const Pu=new bp("@firebase/auth");function gb(t,...e){Pu.logLevel<=Y.WARN&&Pu.warn(`Auth (${Ai}): ${t}`,...e)}function Cl(t,...e){Pu.logLevel<=Y.ERROR&&Pu.error(`Auth (${Ai}): ${t}`,...e)}/**
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
 */function qt(t,...e){throw Qm(t,...e)}function wn(t,...e){return Qm(t,...e)}function dI(t,e,n){const r=Object.assign(Object.assign({},mb()),{[e]:n});return new Ii("auth","Firebase",r).create(e,{appName:t.name})}function yb(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&qt(t,"argument-error"),dI(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Qm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return hI.create(t,...e)}function $(t,e,...n){if(!t)throw Qm(e,...n)}function Dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Cl(e),new Error(e)}function qn(t,e){t||Dn(e)}/**
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
 */function Of(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function _b(){return Y_()==="http:"||Y_()==="https:"}function Y_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function vb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_b()||tC()||"connection"in navigator)?navigator.onLine:!0}function wb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ka{constructor(e,n){this.shortDelay=e,this.longDelay=n,qn(n>e,"Short delay should be less than long delay!"),this.isMobile=ZR()||nC()}get(){return vb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ym(t,e){qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class fI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Eb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Tb=new ka(3e4,6e4);function ki(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function xi(t,e,n,r,i={}){return pI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=pa(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),fI.fetch()(mI(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function pI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Eb),e);try{const i=new Ib(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ll(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ll(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ll(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ll(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw dI(t,c,u);qt(t,c)}}catch(i){if(i instanceof on)throw i;qt(t,"network-request-failed",{message:String(i)})}}async function xa(t,e,n,r,i={}){const s=await xi(t,e,n,r,i);return"mfaPendingCredential"in s&&qt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function mI(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ym(t.config,i):`${t.config.apiScheme}://${i}`}class Ib{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wn(this.auth,"network-request-failed")),Tb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ll(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=wn(t,e,r);return i.customData._tokenResponse=n,i}async function Sb(t,e){return xi(t,"GET","/v2/recaptchaConfig",ki(t,e))}/**
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
 */async function Ab(t,e){return xi(t,"POST","/v1/accounts:delete",e)}async function Pb(t,e){return xi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Io(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Rb(t,e=!1){const n=fe(t),r=await n.getIdToken(e),i=Xm(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Io(Gh(i.auth_time)),issuedAtTime:Io(Gh(i.iat)),expirationTime:Io(Gh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Gh(t){return Number(t)*1e3}function Xm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Cl("JWT malformed, contained fewer than 3 sections"),null;try{const i=eE(n);return i?JSON.parse(i):(Cl("Failed to decode base64 JWT payload"),null)}catch(i){return Cl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Cb(t){const e=Xm(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ia(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof on&&kb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function kb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class xb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class gI{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Io(this.lastLoginAt),this.creationTime=Io(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ru(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ia(t,Pb(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ob(s.providerUserInfo):[],a=Db(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new gI(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function Nb(t){const e=fe(t);await Ru(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Db(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ob(t){return t.map(e=>{var{providerId:n}=e,r=Gm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function bb(t,e){const n=await pI(t,{},async()=>{const r=pa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=mI(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class sa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Cb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await bb(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new sa;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new sa,this.toJSON())}_performRefresh(){return Dn("not implemented")}}/**
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
 */function Qn(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ni{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Gm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new gI(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ia(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Rb(this,e)}reload(){return Nb(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ni(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ru(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ia(this,Ab(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:w,isAnonymous:I,providerData:A,stsTokenManager:k}=n;$(y&&k,e,"internal-error");const C=sa.fromJSON(this.name,k);$(typeof y=="string",e,"internal-error"),Qn(h,e.name),Qn(d,e.name),$(typeof w=="boolean",e,"internal-error"),$(typeof I=="boolean",e,"internal-error"),Qn(g,e.name),Qn(_,e.name),Qn(v,e.name),Qn(E,e.name),Qn(m,e.name),Qn(p,e.name);const U=new ni({uid:y,auth:e,email:d,emailVerified:w,displayName:h,isAnonymous:I,photoURL:_,phoneNumber:g,tenantId:v,stsTokenManager:C,createdAt:m,lastLoginAt:p});return A&&Array.isArray(A)&&(U.providerData=A.map(L=>Object.assign({},L))),E&&(U._redirectEventId=E),U}static async _fromIdTokenResponse(e,n,r=!1){const i=new sa;i.updateFromServerResponse(n);const s=new ni({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ru(s),s}}/**
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
 */const X_=new Map;function On(t){qn(t instanceof Function,"Expected a class definition");let e=X_.get(t);return e?(qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,X_.set(t,e),e)}/**
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
 */class yI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}yI.type="NONE";const J_=yI;/**
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
 */function kl(t,e,n){return`firebase:${t}:${e}:${n}`}class ss{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=kl(this.userKey,i.apiKey,s),this.fullPersistenceKey=kl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ni._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ss(On(J_),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||On(J_);const o=kl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=ni._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ss(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ss(s,e,r))}}/**
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
 */function Z_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_I(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(TI(e))return"Blackberry";if(II(e))return"Webos";if(Jm(e))return"Safari";if((e.includes("chrome/")||vI(e))&&!e.includes("edge/"))return"Chrome";if(EI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _I(t=ot()){return/firefox\//i.test(t)}function Jm(t=ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vI(t=ot()){return/crios\//i.test(t)}function wI(t=ot()){return/iemobile/i.test(t)}function EI(t=ot()){return/android/i.test(t)}function TI(t=ot()){return/blackberry/i.test(t)}function II(t=ot()){return/webos/i.test(t)}function Fc(t=ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Lb(t=ot()){var e;return Fc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Vb(){return rC()&&document.documentMode===10}function SI(t=ot()){return Fc(t)||EI(t)||II(t)||TI(t)||/windows phone/i.test(t)||wI(t)}function Mb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function AI(t,e=[]){let n;switch(t){case"Browser":n=Z_(ot());break;case"Worker":n=`${Z_(ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ai}/${r}`}/**
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
 */class jb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Fb(t,e={}){return xi(t,"GET","/v2/passwordPolicy",ki(t,e))}/**
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
 */const Ub=6;class $b{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Ub,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Bb{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ev(this),this.idTokenSubscription=new ev(this),this.beforeStateQueue=new jb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=On(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ss.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ru(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?fe(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(On(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Fb(this),n=new $b(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ii("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&On(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await ss.create(this,[On(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=AI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&gb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Mr(t){return fe(t)}class ev{constructor(e){this.auth=e,this.observer=null,this.addObserver=uC(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function zb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function PI(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=wn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",zb().appendChild(r)})}function Hb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const qb="https://www.google.com/recaptcha/enterprise.js?render=",Wb="recaptcha-enterprise",Kb="NO_RECAPTCHA";class Gb{constructor(e){this.type=Wb,this.auth=Mr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Sb(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new pb(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Q_(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(Kb)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Q_(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}PI(qb+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Cu(t,e,n,r=!1){const i=new Gb(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */function Qb(t,e){const n=Si(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(lu(s,e??{}))return i;qt(i,"already-initialized")}return n.initialize({options:e})}function Yb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(On);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Xb(t,e,n){const r=Mr(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=RI(e),{host:o,port:a}=Jb(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Zb()}function RI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Jb(t){const e=RI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:tv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:tv(o)}}}function tv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Zb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Zm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dn("not implemented")}_getIdTokenResponse(e){return Dn("not implemented")}_linkToIdToken(e,n){return Dn("not implemented")}_getReauthenticationResolver(e){return Dn("not implemented")}}async function eL(t,e){return xi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Qh(t,e){return xa(t,"POST","/v1/accounts:signInWithPassword",ki(t,e))}/**
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
 */async function tL(t,e){return xa(t,"POST","/v1/accounts:signInWithEmailLink",ki(t,e))}async function nL(t,e){return xa(t,"POST","/v1/accounts:signInWithEmailLink",ki(t,e))}/**
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
 */class oa extends Zm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new oa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new oa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Cu(e,r,"signInWithPassword");return Qh(e,i)}else return Qh(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Cu(e,r,"signInWithPassword");return Qh(e,s)}else return Promise.reject(i)});case"emailLink":return tL(e,{email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return eL(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return nL(e,{idToken:n,email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function os(t,e){return xa(t,"POST","/v1/accounts:signInWithIdp",ki(t,e))}/**
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
 */const rL="http://localhost";class yi extends Zm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new yi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Gm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new yi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return os(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,os(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,os(e,n)}buildRequest(){const e={requestUri:rL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=pa(n)}return e}}/**
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
 */function iL(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sL(t){const e=Js(Zs(t)).link,n=e?Js(Zs(e)).deep_link_id:null,r=Js(Zs(t)).deep_link_id;return(r?Js(Zs(r)).link:null)||r||n||e||t}class eg{constructor(e){var n,r,i,s,o,a;const l=Js(Zs(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=iL((i=l.mode)!==null&&i!==void 0?i:null);$(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=sL(e);try{return new eg(n)}catch{return null}}}/**
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
 */class bs{constructor(){this.providerId=bs.PROVIDER_ID}static credential(e,n){return oa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=eg.parseLink(n);return $(r,"argument-error"),oa._fromEmailAndCode(e,r.code,r.tenantId)}}bs.PROVIDER_ID="password";bs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class tg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Na extends tg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class er extends Na{constructor(){super("facebook.com")}static credential(e){return yi._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.FACEBOOK_SIGN_IN_METHOD="facebook.com";er.PROVIDER_ID="facebook.com";/**
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
 */class Xt extends Na{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return yi._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Xt.credential(n,r)}catch{return null}}}Xt.GOOGLE_SIGN_IN_METHOD="google.com";Xt.PROVIDER_ID="google.com";/**
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
 */class tr extends Na{constructor(){super("github.com")}static credential(e){return yi._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.GITHUB_SIGN_IN_METHOD="github.com";tr.PROVIDER_ID="github.com";/**
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
 */class nr extends Na{constructor(){super("twitter.com")}static credential(e,n){return yi._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return nr.credential(n,r)}catch{return null}}}nr.TWITTER_SIGN_IN_METHOD="twitter.com";nr.PROVIDER_ID="twitter.com";/**
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
 */async function Yh(t,e){return xa(t,"POST","/v1/accounts:signUp",ki(t,e))}/**
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
 */class _i{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ni._fromIdTokenResponse(e,r,i),o=nv(r);return new _i({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=nv(r);return new _i({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function nv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ku extends on{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ku.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ku(e,n,r,i)}}function CI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ku._fromErrorAndOperation(t,s,e,r):s})}async function oL(t,e,n=!1){const r=await ia(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _i._forOperation(t,"link",r)}/**
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
 */async function aL(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ia(t,CI(r,i,e,t),n);$(s.idToken,r,"internal-error");const o=Xm(s.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),_i._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&qt(r,"user-mismatch"),s}}/**
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
 */async function kI(t,e,n=!1){const r="signIn",i=await CI(t,r,e),s=await _i._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function lL(t,e){return kI(Mr(t),e)}/**
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
 */async function xI(t){const e=Mr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function uL(t,e,n){var r;const i=Mr(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Cu(i,s,"signUpPassword");o=Yh(i,u)}else o=Yh(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Cu(i,s,"signUpPassword");return Yh(i,c)}throw u});const a=await o.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&xI(t),u}),l=await _i._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function Xh(t,e,n){return lL(fe(t),bs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&xI(t),r})}function cL(t,e,n,r){return fe(t).onIdTokenChanged(e,n,r)}function hL(t,e,n){return fe(t).beforeAuthStateChanged(e,n)}function dL(t,e,n,r){return fe(t).onAuthStateChanged(e,n,r)}function fL(t){return fe(t).signOut()}const xu="__sak";/**
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
 */class NI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xu,"1"),this.storage.removeItem(xu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function pL(){const t=ot();return Jm(t)||Fc(t)}const mL=1e3,gL=10;class DI extends NI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=pL()&&Mb(),this.fallbackToPolling=SI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Vb()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,gL):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},mL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}DI.type="LOCAL";const yL=DI;/**
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
 */class OI extends NI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}OI.type="SESSION";const bI=OI;/**
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
 */function _L(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Uc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Uc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await _L(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Uc.receivers=[];/**
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
 */function ng(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class vL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=ng("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function En(){return window}function wL(t){En().location.href=t}/**
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
 */function LI(){return typeof En().WorkerGlobalScope<"u"&&typeof En().importScripts=="function"}async function EL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function IL(){return LI()?self:null}/**
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
 */const VI="firebaseLocalStorageDb",SL=1,Nu="firebaseLocalStorage",MI="fbase_key";class Da{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $c(t,e){return t.transaction([Nu],e?"readwrite":"readonly").objectStore(Nu)}function AL(){const t=indexedDB.deleteDatabase(VI);return new Da(t).toPromise()}function bf(){const t=indexedDB.open(VI,SL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Nu,{keyPath:MI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Nu)?e(r):(r.close(),await AL(),e(await bf()))})})}async function rv(t,e,n){const r=$c(t,!0).put({[MI]:e,value:n});return new Da(r).toPromise()}async function PL(t,e){const n=$c(t,!1).get(e),r=await new Da(n).toPromise();return r===void 0?null:r.value}function iv(t,e){const n=$c(t,!0).delete(e);return new Da(n).toPromise()}const RL=800,CL=3;class jI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>CL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return LI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Uc._getInstance(IL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await EL(),!this.activeServiceWorker)return;this.sender=new vL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||TL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bf();return await rv(e,xu,"1"),await iv(e,xu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>rv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>PL(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>iv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=$c(i,!1).getAll();return new Da(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jI.type="LOCAL";const kL=jI;new ka(3e4,6e4);/**
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
 */function FI(t,e){return e?On(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class rg extends Zm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return os(e,this._buildIdpRequest())}_linkToIdToken(e,n){return os(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return os(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xL(t){return kI(t.auth,new rg(t),t.bypassAuthState)}function NL(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),aL(n,new rg(t),t.bypassAuthState)}async function DL(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),oL(n,new rg(t),t.bypassAuthState)}/**
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
 */class UI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xL;case"linkViaPopup":case"linkViaRedirect":return DL;case"reauthViaPopup":case"reauthViaRedirect":return NL;default:qt(this.auth,"internal-error")}}resolve(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const OL=new ka(2e3,1e4);async function ig(t,e,n){const r=Mr(t);yb(t,e,tg);const i=FI(r,n);return new Jr(r,"signInViaPopup",e,i).executeNotNull()}class Jr extends UI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Jr.currentPopupAction&&Jr.currentPopupAction.cancel(),Jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){qn(this.filter.length===1,"Popup operations only handle one event");const e=ng();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,OL.get())};e()}}Jr.currentPopupAction=null;/**
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
 */const bL="pendingRedirect",xl=new Map;class LL extends UI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=xl.get(this.auth._key());if(!e){try{const r=await VL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}xl.set(this.auth._key(),e)}return this.bypassAuthState||xl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function VL(t,e){const n=FL(e),r=jL(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function ML(t,e){xl.set(t._key(),e)}function jL(t){return On(t._redirectPersistence)}function FL(t){return kl(bL,t.config.apiKey,t.name)}async function UL(t,e,n=!1){const r=Mr(t),i=FI(r,e),o=await new LL(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const $L=10*60*1e3;class BL{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!$I(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(wn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$L&&this.cachedEventUids.clear(),this.cachedEventUids.has(sv(e))}saveEventToCache(e){this.cachedEventUids.add(sv(e)),this.lastProcessedEventTime=Date.now()}}function sv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $I({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $I(t);default:return!1}}/**
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
 */async function HL(t,e={}){return xi(t,"GET","/v1/projects",e)}/**
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
 */const qL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,WL=/^https?/;async function KL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await HL(t);for(const n of e)try{if(GL(n))return}catch{}qt(t,"unauthorized-domain")}function GL(t){const e=Of(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!WL.test(n))return!1;if(qL.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const QL=new ka(3e4,6e4);function ov(){const t=En().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function YL(t){return new Promise((e,n)=>{var r,i,s;function o(){ov(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ov(),n(wn(t,"network-request-failed"))},timeout:QL.get()})}if(!((i=(r=En().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=En().gapi)===null||s===void 0)&&s.load)o();else{const a=Hb("iframefcb");return En()[a]=()=>{gapi.load?o():n(wn(t,"network-request-failed"))},PI(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Nl=null,e})}let Nl=null;function XL(t){return Nl=Nl||YL(t),Nl}/**
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
 */const JL=new ka(5e3,15e3),ZL="__/auth/iframe",eV="emulator/auth/iframe",tV={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nV=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rV(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ym(e,eV):`https://${t.config.authDomain}/${ZL}`,r={apiKey:e.apiKey,appName:t.name,v:Ai},i=nV.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${pa(r).slice(1)}`}async function iV(t){const e=await XL(t),n=En().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:rV(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tV,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=wn(t,"network-request-failed"),a=En().setTimeout(()=>{s(o)},JL.get());function l(){En().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const sV={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oV=500,aV=600,lV="_blank",uV="http://localhost";class av{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cV(t,e,n,r=oV,i=aV){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},sV),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ot().toLowerCase();n&&(a=vI(u)?lV:n),_I(u)&&(e=e||uV,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,_])=>`${d}${g}=${_},`,"");if(Lb(u)&&a!=="_self")return hV(e||"",a),new av(null);const h=window.open(e||"",a,c);$(h,t,"popup-blocked");try{h.focus()}catch{}return new av(h)}function hV(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const dV="__/auth/handler",fV="emulator/auth/handler",pV=encodeURIComponent("fac");async function lv(t,e,n,r,i,s){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ai,eventId:i};if(e instanceof tg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",lC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Na){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${pV}=${encodeURIComponent(l)}`:"";return`${mV(t)}?${pa(a).slice(1)}${u}`}function mV({config:t}){return t.emulator?Ym(t,fV):`https://${t.authDomain}/${dV}`}/**
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
 */const Jh="webStorageSupport";class gV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bI,this._completeRedirectFn=UL,this._overrideRedirectResult=ML}async _openPopup(e,n,r,i){var s;qn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await lv(e,n,r,Of(),i);return cV(e,o,ng())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await lv(e,n,r,Of(),i);return wL(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(qn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await iV(e),r=new BL(e);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jh,{type:Jh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Jh];o!==void 0&&n(!!o),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=KL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return SI()||Jm()||Fc()}}const yV=gV;var uv="@firebase/auth",cv="1.3.0";/**
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
 */class _V{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function vV(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function wV(t){tn(new Ht("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:AI(t)},u=new Bb(r,i,s,l);return Yb(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),tn(new Ht("auth-internal",e=>{const n=Mr(e.getProvider("auth").getImmediate());return(r=>new _V(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tt(uv,cv,vV(t)),Tt(uv,cv,"esm2017")}/**
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
 */const EV=5*60,TV=iE("authIdTokenMaxAge")||EV;let hv=null;const IV=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>TV)return;const i=n==null?void 0:n.token;hv!==i&&(hv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function SV(t=Ju()){const e=Si(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Qb(t,{popupRedirectResolver:yV,persistence:[kL,yL,bI]}),r=iE("authTokenSyncURL");if(r){const s=IV(r);hL(n,s,()=>s(n.currentUser)),cL(n,o=>s(o))}const i=tE("auth");return i&&Xb(n,`http://${i}`),n}wV("Browser");const AV={apiKey:"AIzaSyAAWaJtxlPgeSNNgqTxggi68VZgANhHDtA",authDomain:"codefury6.firebaseapp.com",projectId:"codefury6",storageBucket:"codefury6.appspot.com",messagingSenderId:"33403590710",appId:"1:33403590710:web:f0513ee9157d77d6d5e097"},BI=cE(AV),Cn=SV(),ne=lD(BI),PV=db(BI),zI=T.createContext();function an(){return T.useContext(zI)}function RV({children:t}){const e=sn(),[n,r]=T.useState(null),[i,s]=T.useState(!0);function o(_,v,E,m){return uL(Cn,v,E)}function a(_,v){return Xh(Cn,_,v)}function l(_,v){async function E(){const p=In(St(ne,"professionals"),Cr("email","==",_)),y=await Sn(p);return y.empty?!1:y}E().then(p=>{if(p)if(p.docs[0].data().verified===!1)F.error("Your account is not verified yet. Please wait for an admin to verify your account.");else return Xh(Cn,_,v);else return Xh(Cn,_,v)})}function u(_,v){try{return b_(je(ne,"users",_),v)}catch(E){console.error("Error adding user to Firestore:",E)}}function c(_,v){try{return b_(je(ne,"professionals",_),v)}catch(E){console.error("Error adding professional to Firestore:",E)}}async function h(_){const v=je(ne,"professionals",_),E=await pn(v);return E.exists()?E:!1}function d(){fL(Cn),e("/login")}T.useEffect(()=>dL(Cn,v=>{r(v),s(!1)}),[]);const g={currentUser:n,loginMain:a,signup:o,login:l,logout:d,addUserToFirestore:u,addProfessionalToFirestore:c,checkProfessional:h};return f.jsx(zI.Provider,{value:g,children:!i&&t})}const CV=()=>{const{currentUser:t,logout:e}=an(),[n,r]=T.useState(!1),i=()=>{r(!n)};return f.jsx("nav",{className:"bg-primary text-background p-4 md:p-4",children:f.jsxs("div",{className:"container mx-auto max-w-10xl flex justify-between items-center",children:[f.jsx("div",{className:"flex items-center",children:f.jsxs("div",{className:"flex flex-col",children:[f.jsx(Gw,{to:"/",className:"text-2xl font-bold",children:"Wellify"}),f.jsx("button",{type:"button",className:"block mt-2 text-gray-500 hover:text-white focus:text-white focus:outline-none sm:hidden",onClick:i,children:f.jsx("svg",{className:"h-6 w-6 fill-current",viewBox:"0 0 24 24"})})]})}),f.jsx("ul",{className:`${n?"block":"hidden"} sm:flex sm:items-center sm:ml-6 space-x-4`,children:t?f.jsxs(f.Fragment,{children:[f.jsx("li",{children:f.jsx(Gn,{to:"/",children:"Feed"})}),f.jsx("li",{children:f.jsx(Gn,{to:"/aroundme",children:"Around Me"})}),f.jsx("li",{children:f.jsx(Gn,{to:"/search/therapists",children:"Search"})}),f.jsx("li",{children:f.jsx(Gn,{to:"/gratitudejournal",children:"Gratitude Journal"})}),f.jsx("li",{className:"cursor-pointer",onClick:e,children:"Logout"}),f.jsx("li",{className:"flex items-center",children:t.photoURL?f.jsx("img",{src:t.photoURL,alt:"Profile",className:"h-8 w-8 md:h-10 md:w-10 rounded-full object-cover"}):t.displayName?`Hello, ${t.displayName}`:`Hello, ${t.email.split("@")[0]}`})]}):f.jsxs(f.Fragment,{children:[f.jsx("li",{children:f.jsx(Gn,{to:"/",children:"Home"})}),f.jsx("li",{children:f.jsx(Gn,{to:"/signup",children:"Sign Up"})}),f.jsx("li",{children:f.jsx(Gn,{to:"/login",children:"Login"})}),f.jsx("li",{children:f.jsx(Gn,{to:"/admin",children:"Admin"})})]})})]})})},kV=()=>{const[t,e]=T.useState(""),[n,r]=T.useState(""),i=sn(),{login:s,currentUser:o,checkProfessional:a}=an();T.useEffect(()=>{o&&i("/")},[o]);const l=async c=>{c.preventDefault();try{await s(t,n),o&&F.success("Logged in successfully!")}catch(h){console.error(h.message),F.error("Error logging in. Please check your email and password.")}},u=async()=>{const c=new Xt;try{await ig(Cn,c),F.success("Logged in with Google successfully!"),i("/")}catch(h){console.error(h.message),F.error("Error logging in with Google. Please try again.")}};return f.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:f.jsxs("div",{className:"bg-white p-8 rounded-lg shadow-lg w-96",children:[f.jsx("h2",{className:"text-3xl font-semibold mb-6 text-center",children:"Login"}),f.jsxs("form",{onSubmit:l,children:[f.jsx("div",{className:"mb-4",children:f.jsx("input",{type:"email",placeholder:"Email",value:t,onChange:c=>e(c.target.value),className:"w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"})}),f.jsx("div",{className:"mb-6",children:f.jsx("input",{type:"password",placeholder:"Password",value:n,onChange:c=>r(c.target.value),className:"w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"})}),f.jsx("button",{type:"submit",className:"w-full bg-primary text-background py-3 rounded-md focus:outline-none",children:"Login"})]}),f.jsx("button",{onClick:u,className:"w-full mt-4 bg-secondary text-primary py-3 rounded-md hover:bg-accent hover:text-secondary focus:outline-none",children:"Login with Google"})]})})};/**
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
 */const HI="firebasestorage.googleapis.com",qI="storageBucket",xV=2*60*1e3,NV=10*60*1e3;/**
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
 */class Se extends on{constructor(e,n,r=0){super(Zh(e),`Firebase Storage: ${n} (${Zh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Se.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Zh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ie;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ie||(Ie={}));function Zh(t){return"storage/"+t}function sg(){const t="An unknown error occurred, please check the error payload for server response.";return new Se(Ie.UNKNOWN,t)}function DV(t){return new Se(Ie.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function OV(t){return new Se(Ie.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function bV(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Se(Ie.UNAUTHENTICATED,t)}function LV(){return new Se(Ie.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function VV(t){return new Se(Ie.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function MV(){return new Se(Ie.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function jV(){return new Se(Ie.CANCELED,"User canceled the upload/download.")}function FV(t){return new Se(Ie.INVALID_URL,"Invalid URL '"+t+"'.")}function UV(t){return new Se(Ie.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function $V(){return new Se(Ie.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+qI+"' property when initializing the app?")}function BV(){return new Se(Ie.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function zV(){return new Se(Ie.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function HV(t){return new Se(Ie.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Lf(t){return new Se(Ie.INVALID_ARGUMENT,t)}function WI(){return new Se(Ie.APP_DELETED,"The Firebase app was deleted.")}function qV(t){return new Se(Ie.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function So(t,e){return new Se(Ie.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ws(t){throw new Se(Ie.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class kt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=kt.makeFromUrl(e,n)}catch{return new kt(e,"")}if(r.path==="")return r;throw UV(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(w){w.path_=decodeURIComponent(w.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),_={bucket:1,path:3},v=n===HI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",m=new RegExp(`^https?://${v}/${i}/${E}`,"i"),y=[{regex:a,indices:l,postModify:s},{regex:g,indices:_,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let w=0;w<y.length;w++){const I=y[w],A=I.regex.exec(e);if(A){const k=A[I.indices.bucket];let C=A[I.indices.path];C||(C=""),r=new kt(k,C),I.postModify(r);break}}if(r==null)throw FV(e);return r}}class WV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function KV(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...E){u||(u=!0,e.apply(null,E))}function h(E){i=setTimeout(()=>{i=null,t(g,l())},E)}function d(){s&&clearTimeout(s)}function g(E,...m){if(u){d();return}if(E){d(),c.call(null,E,...m);return}if(l()||o){d(),c.call(null,E,...m);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,h(y)}let _=!1;function v(E){_||(_=!0,d(),!u&&(i!==null?(E||(a=2),clearTimeout(i),h(0)):E||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function GV(t){t(!1)}/**
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
 */function QV(t){return t!==void 0}function YV(t){return typeof t=="object"&&!Array.isArray(t)}function og(t){return typeof t=="string"||t instanceof String}function dv(t){return ag()&&t instanceof Blob}function ag(){return typeof Blob<"u"&&!eC()}function fv(t,e,n,r){if(r<e)throw Lf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Lf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function lg(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function KI(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var ri;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ri||(ri={}));/**
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
 */function XV(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class JV{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,_)=>{this.resolve_=g,this.reject_=_,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ul(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ri.NO_ERROR,l=s.getStatus();if(!a||XV(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===ri.ABORT;r(!1,new ul(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new ul(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());QV(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=sg();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?WI():jV();o(l)}else{const l=MV();o(l)}};this.canceled_?n(!1,new ul(!1,null,!0)):this.backoffId_=KV(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&GV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ul{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function ZV(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function eM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function tM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function nM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function rM(t,e,n,r,i,s,o=!0){const a=KI(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return tM(u,e),ZV(u,n),eM(u,s),nM(u,r),new JV(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function iM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function sM(...t){const e=iM();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(ag())return new Blob(t);throw new Se(Ie.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function oM(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function aM(t){if(typeof atob>"u")throw HV("base-64");return atob(t)}/**
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
 */const mn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ed{constructor(e,n){this.data=e,this.contentType=n||null}}function lM(t,e){switch(t){case mn.RAW:return new ed(GI(e));case mn.BASE64:case mn.BASE64URL:return new ed(QI(t,e));case mn.DATA_URL:return new ed(cM(e),hM(e))}throw sg()}function GI(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function uM(t){let e;try{e=decodeURIComponent(t)}catch{throw So(mn.DATA_URL,"Malformed data URL.")}return GI(e)}function QI(t,e){switch(t){case mn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw So(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case mn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw So(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=aM(e)}catch(i){throw i.message.includes("polyfill")?i:So(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class YI{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw So(mn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=dM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function cM(t){const e=new YI(t);return e.base64?QI(mn.BASE64,e.rest):uM(e.rest)}function hM(t){return new YI(t).contentType}function dM(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class rr{constructor(e,n){let r=0,i="";dv(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(dv(this.data_)){const r=this.data_,i=oM(r,e,n);return i===null?null:new rr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new rr(r,!0)}}static getBlob(...e){if(ag()){const n=e.map(r=>r instanceof rr?r.data_:r);return new rr(sM.apply(null,n))}else{const n=e.map(o=>og(o)?lM(mn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new rr(i,!0)}}uploadData(){return this.data_}}/**
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
 */function XI(t){let e;try{e=JSON.parse(t)}catch{return null}return YV(e)?e:null}/**
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
 */function fM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function pM(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function JI(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function mM(t,e){return e}class lt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||mM}}let cl=null;function gM(t){return!og(t)||t.length<2?t:JI(t)}function ZI(){if(cl)return cl;const t=[];t.push(new lt("bucket")),t.push(new lt("generation")),t.push(new lt("metageneration")),t.push(new lt("name","fullPath",!0));function e(s,o){return gM(o)}const n=new lt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new lt("size");return i.xform=r,t.push(i),t.push(new lt("timeCreated")),t.push(new lt("updated")),t.push(new lt("md5Hash",null,!0)),t.push(new lt("cacheControl",null,!0)),t.push(new lt("contentDisposition",null,!0)),t.push(new lt("contentEncoding",null,!0)),t.push(new lt("contentLanguage",null,!0)),t.push(new lt("contentType",null,!0)),t.push(new lt("metadata","customMetadata",!0)),cl=t,cl}function yM(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new kt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function _M(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return yM(r,t),r}function eS(t,e,n){const r=XI(e);return r===null?null:_M(t,r,n)}function vM(t,e,n,r){const i=XI(e);if(i===null||!og(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),g=lg(d,n,r),_=KI({alt:"media",token:u});return g+_})[0]}function wM(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class tS{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function nS(t){if(!t)throw sg()}function EM(t,e){function n(r,i){const s=eS(t,i,e);return nS(s!==null),s}return n}function TM(t,e){function n(r,i){const s=eS(t,i,e);return nS(s!==null),vM(s,i,t.host,t._protocol)}return n}function rS(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=LV():i=bV():n.getStatus()===402?i=OV(t.bucket):n.getStatus()===403?i=VV(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function IM(t){const e=rS(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=DV(t.path)),s.serverResponse=i.serverResponse,s}return n}function SM(t,e,n){const r=e.fullServerUrl(),i=lg(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new tS(i,s,TM(t,n),o);return a.errorHandler=IM(e),a}function AM(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function PM(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=AM(null,e)),r}function RM(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let y="";for(let w=0;w<2;w++)y=y+Math.random().toString().slice(2);return y}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=PM(e,r,i),c=wM(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",g=rr.getBlob(h,r,d);if(g===null)throw BV();const _={name:u.fullPath},v=lg(s,t.host,t._protocol),E="POST",m=t.maxUploadRetryTime,p=new tS(v,E,EM(t,n),m);return p.urlParams=_,p.headers=o,p.body=g.uploadData(),p.errorHandler=rS(e),p}class CM{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ri.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ri.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ri.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Ws("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ws("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ws("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ws("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ws("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class kM extends CM{initXhr(){this.xhr_.responseType="text"}}function iS(){return new kM}/**
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
 */class vi{constructor(e,n){this._service=e,n instanceof kt?this._location=n:this._location=kt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new vi(e,n)}get root(){const e=new kt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return JI(this._location.path)}get storage(){return this._service}get parent(){const e=fM(this._location.path);if(e===null)return null;const n=new kt(this._location.bucket,e);return new vi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw qV(e)}}function xM(t,e,n){t._throwIfRoot("uploadBytes");const r=RM(t.storage,t._location,ZI(),new rr(e,!0),n);return t.storage.makeRequestWithTokens(r,iS).then(i=>({metadata:i,ref:t}))}function NM(t){t._throwIfRoot("getDownloadURL");const e=SM(t.storage,t._location,ZI());return t.storage.makeRequestWithTokens(e,iS).then(n=>{if(n===null)throw zV();return n})}function DM(t,e){const n=pM(t._location.path,e),r=new kt(t._location.bucket,n);return new vi(t.storage,r)}/**
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
 */function OM(t){return/^[A-Za-z]+:\/\//.test(t)}function bM(t,e){return new vi(t,e)}function sS(t,e){if(t instanceof ug){const n=t;if(n._bucket==null)throw $V();const r=new vi(n,n._bucket);return e!=null?sS(r,e):r}else return e!==void 0?DM(t,e):t}function LM(t,e){if(e&&OM(e)){if(t instanceof ug)return bM(t,e);throw Lf("To use ref(service, url), the first argument must be a Storage instance.")}else return sS(t,e)}function pv(t,e){const n=e==null?void 0:e[qI];return n==null?null:kt.makeFromBucketSpec(n,t)}function VM(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:sE(i,t.app.options.projectId))}class ug{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=HI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=xV,this._maxUploadRetryTime=NV,this._requests=new Set,i!=null?this._bucket=kt.makeFromBucketSpec(i,this._host):this._bucket=pv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=kt.makeFromBucketSpec(this._url,e):this._bucket=pv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){fv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){fv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new vi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new WV(WI());{const o=rM(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const mv="@firebase/storage",gv="0.11.2";/**
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
 */const oS="storage";function yv(t,e,n){return t=fe(t),xM(t,e,n)}function _v(t){return t=fe(t),NM(t)}function vv(t,e){return t=fe(t),LM(t,e)}function wv(t=Ju(),e){t=fe(t);const r=Si(t,oS).getImmediate({identifier:e}),i=nE("storage");return i&&MM(r,...i),r}function MM(t,e,n,r={}){VM(t,e,n,r)}function jM(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new ug(n,r,i,e,Ai)}function FM(){tn(new Ht(oS,jM,"PUBLIC").setMultipleInstances(!0)),Tt(mv,gv,""),Tt(mv,gv,"esm2017")}FM();const UM="AIzaSyCDmLZdj1tNlKcpB3sVDageyWgFxU2sB44",$M="https://maps.googleapis.com/maps/api/js";function BM(t){return new Promise(e=>{const n=document.createElement("script");Object.assign(n,{type:"text/javascript",async:!0,src:t}),n.addEventListener("load",()=>e(n)),document.head.appendChild(n)})}function zM({address:t,setAddress:e}){const n=T.useRef(null),r=T.useCallback(()=>{if(!n.current)return;const o=new window.google.maps.places.Autocomplete(n.current);o.setFields(["geometry","formatted_address","name"]),o.addListener("place_changed",()=>s(o))},[]),i=()=>{if(window.google)return Promise.resolve();const o=`${$M}?key=${UM}&libraries=places&v=weekly`;return BM(o)},s=o=>{const a=o.getPlace();e({name:a.name,location:a.formatted_address,coordinates:{latitude:a.geometry.location.lat(),longitude:a.geometry.location.lng()}})};return T.useEffect(()=>{i().then(()=>r())},[r]),f.jsx("input",{ref:n,defaultValue:t.name,type:"text",placeholder:"Search location...."})}const HM=()=>{const{signup:t,addUserToFirestore:e,addProfessionalToFirestore:n}=an(),[r,i]=T.useState(""),[s,o]=T.useState(""),[a,l]=T.useState(""),[u,c]=T.useState(""),[h,d]=T.useState(null),g=sn(),[_,v]=T.useState(!1),[E,m]=T.useState(""),[p,y]=T.useState(""),[w,I]=T.useState(""),[A,k]=T.useState(""),C=async()=>{v(O=>!O)},U=async O=>{if(O.preventDefault(),!r||!s||!a||!u||!h){F.error("Please fill in all fields");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)){F.error("Invalid email address");return}if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(a)){F.error("Password must contain at least 8 characters, including at least 1 uppercase letter, 1 lowercase letter, and 1 number");return}if(a!==u){F.error("Passwords do not match");return}try{const re=wv(),Ae=vv(re,`profilePictures/${r}`);await yv(Ae,h);const x=await _v(Ae),q=(await t(s,r,a,u)).user.uid;await n(q,{name:s,email:r,profilePicture:x,licenseNumber:E,location:p,description:w,gender:A,verified:!1}),F.success("Signed up successfully!"),F.warning("Please wait for an admin to verify your account.")}catch(re){console.error(re.message),F.error("Error signing up. Please try again.")}},L=async O=>{const Z=O.target.files[0];d(Z)},ie=async O=>{if(O.preventDefault(),!r||!s||!a||!u||!h){F.error("Please fill in all fields");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)){F.error("Invalid email address");return}if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(a)){F.error("Password must contain at least 8 characters, including at least 1 uppercase letter, 1 lowercase letter, and 1 number");return}if(a!==u){F.error("Passwords do not match");return}try{const re=wv(),Ae=vv(re,`profilePictures/${r}`);await yv(Ae,h);const x=await _v(Ae),q=(await t(s,r,a,u)).user.uid;await e(q,{name:s,email:r,profilePicture:x}),F.success("Signed up successfully!"),g("/")}catch(re){console.error(re.message),F.error("Error signing up. Please try again.")}},X=async()=>{const O=new Xt;try{const Z=await ig(Cn,O),pe=Z.user.uid,re={name:Z.user.displayName,profilePicture:Z.user.photoURL,email:Z.user.email};await e(pe,re),F.success("Signed up with Google successfully!"),g("/")}catch(Z){console.error(Z.message),F.error("Error signing up with Google. Please try again.")}};return _?f.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:f.jsxs("div",{className:"bg-white p-8 rounded-lg shadow-lg w-96",children:[f.jsx("h2",{className:"text-3xl font-semibold mb-6 text-center",children:"Sign Up"}),f.jsx("h3",{className:"text-l mb-6 font-light text-center",children:"Registered Mental Health Professional"}),f.jsxs("form",{onSubmit:U,children:[f.jsx("div",{className:"mb-4",children:f.jsx("input",{type:"text",placeholder:"Name",value:s,onChange:O=>o(O.target.value),className:"w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"})}),f.jsx("div",{className:"mb-4",children:f.jsxs("select",{id:"genderSelect",value:A,onChange:O=>k(O.target.value),className:"w-full p-3 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300",children:[f.jsx("option",{value:"",className:"font-light",children:"Select Gender"}),f.jsx("option",{value:"male",children:"Male"}),f.jsx("option",{value:"female",children:"Female"}),f.jsx("option",{value:"other",children:"Other"})]})}),f.jsx("div",{className:"mb-4",children:f.jsx("input",{type:"email",placeholder:"Contact Email",value:r,onChange:O=>i(O.target.value),className:"w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"})}),f.jsx("div",{className:"mb-4",children:f.jsx("input",{type:"password",placeholder:"Password",value:a,onChange:O=>l(O.target.value),className:"w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"})}),f.jsx("div",{className:"mb-4",children:f.jsx("input",{type:"password",placeholder:"Confirm Password",value:u,onChange:O=>c(O.target.value),className:"w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"})}),f.jsx("div",{className:"mb-4",children:f.jsx("input",{type:"text",placeholder:"License Number",value:E,onChange:O=>m(O.target.value),className:"w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"})}),f.jsx("div",{className:"mb-4",children:f.jsx(zM,{address:p,setAddress:y})}),f.jsx("div",{className:"mb-4",children:f.jsx("input",{type:"text",placeholder:"Description",value:w,onChange:O=>I(O.target.value),className:"w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"})}),f.jsxs("div",{className:"mb-4 flex items-center justify-center",children:[f.jsx("p",{className:"w-1/3 text-l font-light text-left",children:"Profile Picture"}),f.jsx("input",{type:"file",id:"profilePicture",onChange:L,className:"w-1/3 text-l p-1 pr-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"})]}),h&&f.jsx("img",{src:URL.createObjectURL(h),alt:"profile",className:"w-1/3 h-1/3 mx-auto mb-6 rounded-full"}),f.jsx("button",{type:"submit",className:"w-full bg-primary text-background py-3 rounded-md focus:outline-none",children:"Sign Up"})]}),f.jsx("p",{className:"mt-12 text-sm text-center font-light hover:underline hover:cursor-pointer",onClick:C,children:" Signup as a user"})]})}):f.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:f.jsxs("div",{className:"bg-white p-8 rounded-lg shadow-lg w-96",children:[f.jsx("h2",{className:"text-3xl font-semibold mb-6 text-center",children:"Sign Up"}),f.jsx("h3",{className:"text-l mb-6 font-light text-center",children:"New User"}),f.jsxs("form",{onSubmit:ie,children:[f.jsx("div",{className:"mb-4",children:f.jsx("input",{type:"text",placeholder:"Name",value:s,onChange:O=>o(O.target.value),className:"w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"})}),f.jsx("div",{className:"mb-4",children:f.jsx("input",{type:"email",placeholder:"Email",value:r,onChange:O=>i(O.target.value),className:"w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"})}),f.jsxs("div",{className:"mb-4 flex items-center justify-center",children:[f.jsx("p",{className:"w-1/3 text-l font-light text-left",children:"Profile Picture"}),f.jsx("input",{type:"file",id:"profilePicture",onChange:L,className:"w-1/3 text-l p-1 pr-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"})]}),h&&f.jsx("img",{src:URL.createObjectURL(h),alt:"profile",className:"w-1/3 h-1/3 mx-auto mb-4 rounded-full"}),f.jsx("div",{className:"mb-6",children:f.jsx("input",{type:"password",placeholder:"Password",value:a,onChange:O=>l(O.target.value),className:"w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"})}),f.jsx("div",{className:"mb-6",children:f.jsx("input",{type:"password",placeholder:"Confirm Password",value:u,onChange:O=>c(O.target.value),className:"w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"})}),f.jsx("button",{type:"submit",className:"w-full bg-primary text-background py-3 rounded-md focus:outline-none",children:"Sign Up"})]}),f.jsx("button",{onClick:X,className:"w-full mt-4 bg-secondary text-primary py-3 rounded-md hover:bg-accent hover:text-secondary focus:outline-none",children:"Sign Up with Google"}),f.jsx("p",{className:"mt-12 text-sm text-center font-light hover:underline hover:cursor-pointer",onClick:C,children:" Signup as a registered mental health professional"})]})})},qM=()=>{const[t,e]=T.useState(""),[n,r]=T.useState(""),i=sn(),{loginMain:s,logout:o}=an(),a=async u=>{u.preventDefault();try{const c=In(St(ne,"admins"),Cr("email","==",t));if((await Sn(c))._snapshot.docChanges.length==1)await s(t,n);else throw new Error("No admin access!");F.success("Logged in successfully!"),i("/admin")}catch(c){console.error(c.message),c.message.startsWith("No")?F.error(c.message):F.error("Error logging in. Please check your email and password.")}},l=async()=>{const u=new Xt;try{const c=await ig(Cn,u),h=In(St(ne,"admins"),Cr("email","==",c._tokenResponse.email));if((await Sn(h))._snapshot.docChanges.length==1)F.success("Logged in with Google successfully!");else throw o(),new Error("No admin access!");i("/admin")}catch(c){console.error(c.message),F.error("Error logging in with Google. Please try again.")}};return f.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:f.jsxs("div",{className:"bg-white p-8 rounded-lg shadow-lg w-96",children:[f.jsx("h2",{className:"text-3xl font-semibold mb-6 text-center",children:"Admin Login"}),f.jsxs("form",{onSubmit:a,children:[f.jsx("div",{className:"mb-4",children:f.jsx("input",{type:"email",placeholder:"Email",value:t,onChange:u=>e(u.target.value),className:"w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"})}),f.jsx("div",{className:"mb-6",children:f.jsx("input",{type:"password",placeholder:"Password",value:n,onChange:u=>r(u.target.value),className:"w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"})}),f.jsx("button",{type:"submit",className:"w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none",children:"Login"})]}),f.jsx("button",{onClick:l,className:"w-full mt-4 bg-red-500 text-white py-3 rounded-md hover:bg-red-600 focus:outline-none",children:"Login with Google"})]})})},Ev=()=>{const[t,e]=T.useState([]),{currentUser:n}=an(),r=sn(),i=async()=>{const a=St(ne,"professionals"),l=await Sn(a),u=[];l.forEach(c=>{u.push({id:c.id,...c.data()})}),console.log(u),e(u)};T.useEffect(()=>{n==null&&r("/admin/login"),i()},[n]);const s=async(a,l)=>{const u=je(ne,"professionals",a);await Yt(u,{verified:l}),i()},o=async a=>{const l=je(ne,"professionals",a);await NT(l),i()};return f.jsxs("div",{className:"container mx-auto px-6 mt-10",children:[f.jsx("h1",{className:"text-3xl font-semibold mb-4 mx-auto text-center",children:"Admin Dashboard"}),f.jsx("div",{className:"overflow-x-auto",children:f.jsxs("table",{className:"min-w-full border-collapse overflow-hidden bg-white rounded-lg shadow-md",children:[f.jsx("thead",{className:"bg-gray-800 text-white",children:f.jsxs("tr",{children:[f.jsx("th",{className:"py-3 px-6 text-left",children:"PFP"}),f.jsx("th",{className:"py-3 px-6 text-left",children:"Name"}),f.jsx("th",{className:"py-3 px-6 text-left",children:"Location"}),f.jsx("th",{className:"py-3 px-6 text-left",children:"Description"}),f.jsx("th",{className:"py-3 px-6 text-left",children:"License No."}),f.jsx("th",{className:"py-3 px-6 text-left",children:"Gender"}),f.jsx("th",{className:"py-3 px-6 text-left",children:"Email"}),f.jsx("th",{className:"py-3 px-6 text-left",children:"Status"}),f.jsx("th",{className:"py-3 px-6 text-left",children:"Actions"})]})}),f.jsx("tbody",{className:"text-gray-600",children:t.map(a=>{var l;return f.jsxs("tr",{children:[f.jsx("td",{className:"py-3 px-6 text-left",children:a.profilePicture&&f.jsx("img",{src:a.profilePicture,alt:"Profile",className:"h-10 w-10 rounded-full object-cover"})}),f.jsx("td",{className:"py-3 px-6",children:a.name}),f.jsx("td",{className:"py-3 px-6",children:(l=a==null?void 0:a.location)==null?void 0:l.name}),f.jsx("td",{className:"py-3 px-6",children:a.description}),f.jsx("td",{className:"py-3 px-6",children:a.licenseNumber}),f.jsx("td",{className:"py-3 px-6",children:a.gender}),f.jsx("td",{className:"py-3 px-6",children:a.email}),f.jsx("td",{className:"py-3 px-6",children:f.jsx("span",{className:`py-1 px-3 rounded-full text-xs ${a.verified===!0?"bg-green-500 text-white":"bg-red-500 text-white"}`,children:a.verified===!0?"Verified":"Unverified"})}),f.jsxs("td",{className:"py-3 px-6",children:[f.jsx("button",{onClick:()=>s(a.id,a.verified!==!0),className:"text-blue-500 py-1 px-1 rounded-md hover:bg-blue-600 transition duration-300",children:a.verified===!1?"✅":"❌"}),f.jsx("button",{onClick:()=>o(a.id),className:"text-red-500 py-1  rounded-md hover:bg-red-600 transition duration-300",children:"🗑️"})]})]},a.id)})})]})})]})},WM=()=>{const t=async()=>{try{if(await Notification.requestPermission()==="granted"){console.log("Notification permission granted.");const n=await fb(PV,{vapidKey:"BIA-xYE1j_hzmBdhPqXzDrkPbGhmWhglksWotrVel-POX-kb2kqFVTj78Z5RMwrpI7-zNOO1VrQ7aiNE8S7cOP4"});console.log("FCM Token:",n)}else console.log("Notification permission denied.")}catch(e){console.error("Error requesting notification permission:",e)}};return f.jsx("div",{children:f.jsx("button",{className:"text-xs text-secondary",onClick:()=>t(),children:"Request Notification Permission"})})},KM=()=>f.jsxs("div",{className:"bg-background text-text flex flex-col",children:[f.jsxs("main",{className:"flex-grow",children:[f.jsxs("section",{className:"container mt-0 mx-auto p-40 pt-20 text-center text-white",children:[f.jsx("img",{src:"/Wellify-logos_transparent.png",alt:"Wellify",className:"w-1/8 mx-auto mb-8 mt-0"}),f.jsx("h1",{className:"text-4xl text-text font-extrabold mb-4",children:"Connect with Mental Health Professionals"}),f.jsxs("p",{className:"text-lg text-primary mb-8",children:["Discover a supportive community of mental health professionals and resources for your well-being.",f.jsx(WM,{})]}),f.jsx("a",{href:"#features",className:"bg-primary hover:bg-text text-white py-2 px-6 rounded-full text-lg transition duration-300",children:"Explore Features"})]}),f.jsx("section",{id:"features",className:"bg-white py-12",children:f.jsxs("div",{className:"container mx-auto text-center",children:[f.jsx("h2",{className:"text-3xl font-extrabold mb-5",children:"Key Features"}),f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:gap-y-20 lg:p-16 lg:gap-x-40",children:[f.jsxs("div",{className:"p-4 rounded-lg shadow-lg",children:[f.jsx("h3",{className:"text-6xl font-semibold mb-2",children:"👩‍⚕️"}),f.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Find Professionals"}),f.jsx("p",{className:"text-gray-700",children:"Easily connect with mental health professionals based on your preferences."})]}),f.jsxs("div",{className:"p-4 rounded-lg shadow-lg",children:[f.jsx("h3",{className:"text-6xl font-semibold mb-2",children:"✨"}),f.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Engage with Posts"}),f.jsx("p",{className:"text-gray-700",children:"Like, comment, and engage with posts from professionals in the community."})]}),f.jsxs("div",{className:"p-4 rounded-lg shadow-lg",children:[f.jsx("h3",{className:"text-6xl font-semibold mb-2",children:"📝"}),f.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Gratitude Journal"}),f.jsx("p",{className:"text-gray-700",children:"Practice gratitude and improve your mental health and well-being."})]}),f.jsxs("div",{className:"p-4 rounded-lg shadow-lg",children:[f.jsx("h3",{className:"text-6xl font-semibold mb-2",children:"🔍"}),f.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Locate Nearby"}),f.jsx("p",{className:"text-gray-700",children:"Discover mental health professionals nearby for in-person support."})]})]})]})}),f.jsx("section",{id:"blogs",className:"bg-background  py-12 text-white",children:f.jsxs("div",{className:"container mx-auto text-center",children:[f.jsx("h2",{className:"text-3xl text-text font-extrabold mb-8",children:"Explore Our Blogs"}),f.jsx("p",{className:"text-lg text-primary mb-8",children:"Stay informed with our latest articles and resources on mental health and well-being."}),f.jsx("a",{href:"#",className:"bg-white hover:bg-gray-200 text-blue-500 py-2 px-6 rounded-full text-lg transition duration-300",children:"Read Blogs"})]})})]}),f.jsx("footer",{className:"bg-white py-4 text-center",children:f.jsx("p",{className:"text-gray-800 text-sm",children:"© 2023 Wellify. All rights not reserved."})})]}),aS=T.createContext(),GM=()=>T.useContext(aS),QM=({children:t})=>{const[e,n]=T.useState(JSON.parse(localStorage.getItem("followStatus"))||{});T.useEffect(()=>{localStorage.setItem("followStatus",JSON.stringify(e))},[e]);const r=i=>{n(s=>({...s,[i]:!s[i]}))};return f.jsx(aS.Provider,{value:{followStatus:e,toggleFollowStatus:r},children:t})};var lS={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Tv=K.createContext&&K.createContext(lS),Tr=globalThis&&globalThis.__assign||function(){return Tr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Tr.apply(this,arguments)},YM=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function uS(t){return t&&t.map(function(e,n){return K.createElement(e.tag,Tr({key:n},e.attr),uS(e.child))})}function jr(t){return function(e){return K.createElement(XM,Tr({attr:Tr({},t.attr)},e),uS(t.child))}}function XM(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=YM(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),K.createElement("svg",Tr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Tr(Tr({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&K.createElement("title",null,s),t.children)};return Tv!==void 0?K.createElement(Tv.Consumer,null,function(n){return e(n)}):e(lS)}function JM(t){return jr({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFCDD2",d:"M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z"}}]})(t)}function ZM(t){return jr({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#F44336",d:"M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z"}}]})(t)}function e4(t){return jr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM20 4v13.17L18.83 16H4V4h16zM6 12h12v2H6zm0-3h12v2H6zm0-3h12v2H6z"}}]})(t)}function t4(t){return jr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M8 8H6v7c0 1.1.9 2 2 2h9v-2H8V8z"}},{tag:"path",attr:{d:"M20 3h-8c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 8h-8V7h8v4zM4 12H2v7c0 1.1.9 2 2 2h9v-2H4v-7z"}}]})(t)}function n4(t){return jr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M22 4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4zm-2 13.17L18.83 16H4V4h16v13.17zM13 5h-2v4H7v2h4v4h2v-4h4V9h-4z"}}]})(t)}function r4(t){return jr({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]})(t)}function i4(t){return jr({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8Z"}},{tag:"path",attr:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8Z"}}]})(t)}const cS=({post:t,user:e,authorId:n,showCase:r})=>{const[i,s]=T.useState(""),[o,a]=T.useState(t.comments),[l,u]=T.useState(!1),[c,h]=T.useState(t.likes),{followStatus:d,toggleFollowStatus:g}=GM(),_=d[t.userId]||!1,v=e.uid,E=sn(),m=async()=>{if(!i)return;St(ne,"posts");const w={text:i,userId:e.uid,timestamp:new Date};let I=je(ne,"users",e.uid),A=await pn(I);if(console.log(A.exists()),A.exists()){const C=A.data();w.name=C.name,w.profilePicture=C.profilePicture}else{I=je(ne,"professionals",e.uid),A=await pn(I),console.log(A.exists());const C=A.data();w.name=C.name,w.profilePicture=C.profilePicture}const k=je(ne,"posts",t.id);await Yt(k,{comments:To(w)}),a([...o,w]),s("")},p=async()=>{const w=je(ne,"posts",t.id),I=c.includes(e.uid)?c.filter(A=>A!==e.uid):[...c,e.uid];await Yt(w,{likes:I}),console.log(I),h(I)},y=async()=>{var L,ie,X;console.log(v),console.log(t.userId,e.uid);const w=je(ne,"professionals",t.userId),A=(await pn(w)).data(),k=je(ne,"users",e.uid),U=(await pn(k)).data();if(console.log(t),(L=U==null?void 0:U.following)!=null&&L.includes(t.userId)){const O=(ie=U==null?void 0:U.following)==null?void 0:ie.filter(pe=>pe!==t.userId),Z=(X=A==null?void 0:A.followers)==null?void 0:X.filter(pe=>pe!==e.uid);await Yt(k,{following:O}),await Yt(w,{followers:Z})}else await Yt(k,{following:To(t.userId)}),await Yt(w,{followers:To(e.uid)});g(t.userId)};return f.jsxs("div",{className:"border rounded-lg mb-5 mt-5 md:w-1/2 mx-auto bg-white shadow-lg",children:[f.jsxs("div",{className:"flex justify-between bg-blue-100",children:[f.jsxs("div",{className:" p-3 flex",children:[f.jsx("img",{src:t.profilePicture,alt:"Profile",className:"h-10 w-10 rounded-full object-cover my-auto"}),f.jsxs("div",{className:"ml-3",children:[f.jsx("p",{className:"hover:underline hover:cursor-pointer",onClick:()=>E(`/professional/${n}`),children:t.name}),f.jsx("span",{className:"text-xs text-gray-500",children:new Date(t.timestamp.toDate()).toDateString()})]})]}),r?f.jsx("div",{}):t.userId!=e.uid&&f.jsxs("button",{className:"flex items-center text-md mr-5",type:"button",onClick:y,children:[_?f.jsx("span",{className:"px-1",children:"Following "}):f.jsx("span",{className:"px-1",children:"Follow"}),_?f.jsx(r4,{}):f.jsx(i4,{})]})]}),f.jsxs("div",{children:[f.jsx("p",{className:"mb-2 pb-10 pt-4 px-2",children:t.text}),f.jsxs("div",{className:" flex mt-2 mx-2 px-2 w-full text-left",children:[f.jsx("input",{type:"text",className:"w-full p-2 border rounded-lg",placeholder:"Add a comment...",value:i,onChange:w=>s(w.target.value)}),f.jsx("button",{className:" py-1 px-2 mt-2 mx-2 rounded hover:bg-blue-100 transition duration-300",onClick:m,children:f.jsx(n4,{})})]}),f.jsxs("div",{className:"flex items-center text-center mx-5 mb-3",children:[f.jsx("button",{className:"text-sm mr-2",onClick:p,children:c.includes(e.uid)?f.jsx(ZM,{}):f.jsx(JM,{})}),f.jsx("span",{className:"text-sm",children:c.length}),f.jsx("button",{className:" py-1 px-2 mt-2 rounded hover:bg-blue-100 transition duration-100",onClick:w=>u(I=>!I),children:f.jsx(e4,{})}),f.jsx("span",{className:"text-sm",children:o.length}),f.jsx("div",{className:"mt-2"})]}),l&&(o.length>0?o.map((w,I)=>f.jsxs("div",{className:"ml-3 mt-5 mb-4",children:[f.jsx("p",{className:"bg-feedbg w-max py-2 px-4 rounded-3xl",children:w.name}),f.jsx("span",{className:"text-xs text-gray-500",children:new Date(t.timestamp.toDate()).toDateString()}),f.jsx("div",{className:"ml-2 mt-2",children:f.jsx("p",{children:w.text})})]})):f.jsx("p",{className:"block mb-1 w-max",children:"No comments :("}))]})]})};function s4(t){return jr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"}}]})(t)}const hS=()=>{const t=sn();return f.jsxs("section",{className:"flex-row bg-blue-500 text-white py-1 px-3 mt-7 ml-2 mb-2 rounded-full hover:bg-blue-600 transition duration-300 text-center w-24 mx-auto",children:[f.jsx("button",{onClick:e=>t("/create-post"),children:f.jsx("p",{className:"mr-2",children:f.jsx(s4,{})})}),f.jsx("button",{onClick:e=>t("/"),children:f.jsx("p",{className:"ml-2",children:f.jsx(t4,{})})})]})},o4=()=>{const[t,e]=T.useState("");T.useState("");const{currentUser:n}=an(),r=async()=>{if(!t)return;const i=St(ne,"posts"),s={text:t,userId:n.uid,timestamp:new Date,likes:[],comments:[]},o=je(ne,"professionals",n.uid),l=(await pn(o)).data();s.name=l.name,s.gender=l.licenseNumber,s.address=l.location.location,s.addressName=l.location.name,s.profilePicture=l.profilePicture,await DT(i,s),e("")};return f.jsxs("div",{className:"container mx-auto p-8 h-screen bg-feedbg",children:[f.jsx(hS,{}),f.jsx("h1",{className:"text-2xl font-bold text-center p-10",children:"Post it!"}),f.jsxs("div",{className:"mb-4 w-2/3 mx-auto bg-white",children:[f.jsx("textarea",{className:"w-full p-2 border rounded",rows:"4",placeholder:"Create a new post...",value:t,onChange:i=>e(i.target.value)}),f.jsx("button",{className:"bg-blue-500 text-white py-1 px-4 mx-4 my-2 rounded hover:bg-blue-600 transition duration-300",onClick:r,children:"Post"})]})]})},a4=({user:t,isProfessional:e})=>{const[n,r]=T.useState([]);return T.useEffect(()=>{(async()=>{const s=St(ne,"posts"),o=In(s,AT("timestamp","desc")),a=await Sn(o),l=[];a.forEach(c=>{const h=je(ne,"professionals",c.data().userId),d=pn(h).then(g=>g.data()).then(g=>{var _;return{id:c.id,isFollowing:(_=g==null?void 0:g.followers)==null?void 0:_.includes(t.uid),...c.data()}});l.push(d)});const u=await Promise.all(l);r(u)})()},[t]),f.jsxs("div",{className:"container mx-auto p-8 bg-feedbg h-screen",children:[f.jsx("h2",{className:"text-5xl font-bold mb-8",style:{marginLeft:"25vw"},children:"Feed"}),e&&f.jsx(hS,{}),n.map(i=>f.jsx(cS,{post:i,user:t,authorId:i.userId,showCase:!1},i.id))]})};function l4(){const{checkProfessional:t,currentUser:e}=an(),[n,r]=T.useState(!1);return T.useEffect(()=>{async function i(){let s=await t(e==null?void 0:e.uid);r(!!s)}e&&i()},[e]),f.jsxs("div",{children:[!e&&f.jsx(KM,{}),e&&f.jsx(a4,{isProfessional:n,user:e})]})}function u4(){const t=sn(),{currentUser:e,checkProfessional:n}=an(),[r,i]=T.useState(""),[s,o]=T.useState(""),[a,l]=T.useState(null);return T.useEffect(()=>{e||t("/login")},[e]),T.useEffect(()=>{async function u(c){const h=In(St(ne,c),Cr("email","==",e==null?void 0:e.email)),d=await Sn(h);if(d.empty){console.log("No matching document found.");return}const g=d.docs[0].data();i(g.email),o(g.name),l(g.profilePicture)}e&&n(e.uid).then(h=>{u(h?"professionals":"users")})},[e]),f.jsxs("div",{className:"w-1/2 bg-white rounded-lg shadow-lg p-6",children:[f.jsxs("h1",{className:"text-2xl font-bold mb-4",children:[s,"'sProfile"]}),f.jsxs("div",{className:"flex items-center mb-4",children:[f.jsx("img",{src:a,alt:"profile",className:"w-16 h-16 rounded-full mr-4"}),f.jsxs("div",{children:[f.jsx("p",{className:"text-lg font-medium",children:s}),f.jsx("p",{className:"text-gray-600",children:r})]})]})]})}function Iv(t,e,n,r){const s=(n-t)*Math.PI/180,o=(r-e)*Math.PI/180,a=Math.sin(s/2)*Math.sin(s/2)+Math.cos(t*Math.PI/180)*Math.cos(n*Math.PI/180)*Math.sin(o/2)*Math.sin(o/2);return 6371*(2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a)))}const c4=()=>{const[t,e]=T.useState([]),[n,r]=T.useState(null),i=sn();return T.useEffect(()=>{(async()=>{try{const o=await Sn(In(St(ne,"professionals")));console.log(o.docs);const a=o.docs.map(l=>({id:l.id,...l.data()}));console.log(a),e(a)}catch(o){console.error("Error fetching profiles:",o)}})()},[]),T.useEffect(()=>{"geolocation"in navigator?navigator.geolocation.getCurrentPosition(s=>{const{latitude:o,longitude:a}=s.coords;console.log("User's location:",o,a),r({latitude:o,longitude:a})},s=>{console.error("Error getting location:",s)}):console.error("Geolocation not available in this browser.")},[]),T.useEffect(()=>{if(n&&t.length>0){const s=t.sort((o,a)=>{const l=Iv(n.latitude,n.longitude,o.latitude,o.longitude),u=Iv(n.latitude,n.longitude,a.latitude,a.longitude);return l-u});e(s)}},[n,t]),f.jsxs(K.Fragment,{children:[f.jsx("h2",{className:"text-5xl font-bold mb-8 mt-10 text-center",children:"Therapists Around Me"}),f.jsx("div",{className:"container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:t.map((s,o)=>f.jsxs("div",{className:"bg-white p-4 shadow rounded-lg",children:[s.profilePicture&&f.jsx("div",{className:"mb-2",children:f.jsx("img",{src:s.profilePicture,alt:`Profile of ${s.name}`,className:"rounded-full h-16 w-16 object-cover mx-auto"})}),f.jsx("h2",{className:"text-lg font-semibold text-center",onClick:()=>i(`/professional/${s.id}`),children:s.name}),f.jsxs("p",{className:"text-gray-500 text-center",children:["📍",s.location.name]}),f.jsx("p",{className:"text-center text-gray-400",children:f.jsx("a",{className:" hover:underline",href:`mailto:${s.email}`,children:s.email})}),f.jsx("p",{className:"text-text text-center mt-2",children:s.description})]},o))})]})},h4=()=>{const[t,e]=T.useState(""),[n,r]=T.useState([]),[i,s]=T.useState(!1),o=async()=>{const a=In(St(ne,"professionals"),Cr("name","==",t)),l=In(St(ne,"professionals"),Cr("location.name","==",t));try{const u=await Sn(a),c=await Sn(l),h=u.docs.map(d=>d.data()).concat(c.docs.map(d=>d.data()));r(h),s(!0)}catch(u){console.error("Error searching for professionals:",u)}};return f.jsxs("div",{className:"container mx-auto p-4",children:[f.jsx("h2",{className:"text-5xl font-bold mb-8",children:"Find a Therapist"}),f.jsx("div",{className:"mb-4",children:f.jsx("input",{type:"text",placeholder:"Search by name or location",className:"w-1/2 p-2 border rounded",value:t,onChange:a=>e(a.target.value)})}),f.jsx("button",{className:"bg-primary text-white p-2 rounded",onClick:o,children:"Search"}),i&&f.jsx("div",{className:"container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:n.map((a,l)=>f.jsxs("div",{className:"bg-white p-4 shadow rounded-lg",children:[a.profilePicture&&f.jsx("div",{className:"mb-2",children:f.jsx("img",{src:a.profilePicture,alt:`Profile of ${a.name}`,className:"rounded-full h-16 w-16 object-cover mx-auto"})}),f.jsx("h2",{className:"text-lg font-semibold text-center",children:a.name}),f.jsxs("p",{className:"text-gray-500 text-center",children:["📍",a.location.name]}),f.jsx("p",{className:"text-center text-gray-400",children:f.jsx("a",{className:" hover:underline",href:`mailto:${a.email}`,children:a.email})}),f.jsx("p",{className:"text-text text-center mt-2",children:a.description})]},l))})]})};function d4(){sn();const{currentUser:t,checkProfessional:e}=an(),[n,r]=T.useState(""),[i,s]=T.useState(""),[o,a]=T.useState(null),[l,u]=T.useState(""),[c,h]=T.useState("");T.useState(""),T.useState("");const[d,g]=T.useState(""),[_,v]=T.useState([]),[E,m]=T.useState([]),[p,y]=T.useState(null),w=fR().id,[I,A]=T.useState(!0),[k,C]=T.useState(!1);T.useEffect(()=>{const L=je(ne,"professionals",w);(async()=>{try{const X=await pn(L);if(X.exists()){const O=X.data();O.verified?(A(!1),y(O),r(O.email),s(O.name),a(O.profilePicture),u(O.location.name),g(O.description),h(O.gender),v(O.followers)):A(!0)}else A(!0)}catch{A(!0)}})()},[]),T.useEffect(()=>{const L=In(St(ne,"posts"),Cr("userId","==",w),AT("timestamp","desc"));(async()=>{const X=await Sn(L);console.log(X.docs);const O=X.docs.map(Z=>({id:Z.id,...Z.data()}));m(O),console.log(O)})()},[]);const U=async()=>{var re;const L=je(ne,"professionals",w),X=(await pn(L)).data(),O=je(ne,"users",t.uid),pe=(await pn(O)).data();if(console.log(E),(re=pe==null?void 0:pe.following)!=null&&re.includes(p.userId)){const Ae=pe==null?void 0:pe.following.filter(j=>j!==w),x=X==null?void 0:X.followers.filter(j=>j!==t.uid);await Yt(O,{following:Ae}),await Yt(L,{followers:x}),C(!1)}else await Yt(O,{following:To(w)}),await Yt(L,{followers:To(t.uid)}),C(!0)};return I?f.jsx("div",{className:"w-1/2 bg-white rounded-lg shadow-lg p-6",children:f.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Profile not found"})}):f.jsxs(K.Fragment,{children:[f.jsxs("h1",{className:"text-4xl ml-4 md:ml-80 font-bold mb-10 mt-8",children:[i,"'s Profile"]}),f.jsx("div",{className:"w-full md:w-1/2 px-4 md:px-auto mx-auto mt-5 bg-white rounded-lg shadow-lg p-6",children:f.jsxs("div",{className:"flex flex-col md:flex-row items-center mb-4 md:ml-5",children:[f.jsx("img",{src:o,alt:"profile",className:"w-16 h-16 rounded-full mr-4"}),f.jsxs("div",{className:"flex flex-col items-start",children:[f.jsx("p",{className:"text-lg font-medium",children:i}),f.jsx("p",{className:"text-gray-600",children:c==="male"?"👨 "+c:c==="female"?"👩 "+c:"🧑 "+c}),f.jsxs("p",{className:"text-gray-600",children:["📧 ",f.jsx("a",{className:"hover:underline",href:`mailto:${n}`,children:n})]}),f.jsxs("p",{className:"text-gray-600",children:["📍 ",l]}),f.jsx("p",{className:"text-text mt-5",children:d})]}),f.jsxs("div",{className:"flex flex-col items-center md:items-start align-center justify-center ml-5",children:[f.jsx("button",{onClick:U,className:"ml-0 md:ml-20 mt-4 md:mt-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg",children:k?"- Unfollow":"+ Follow"}),f.jsxs("p",{className:"ml-3 md:ml-0 mt-2 md:mt-0 mr-0 pl-20 text-center text-gray-600",children:[" ",_.length," Followers"]})]})]})}),f.jsxs("div",{className:"mt-8",children:[f.jsx("h1",{className:"text-4xl ml-4 md:ml-80 font-bold mb-10 mt-8",children:"Posts"}),E.map((L,ie)=>f.jsx(cS,{post:L,user:p,authorId:w,showCase:!0},ie))]})]})}const f4=()=>{const{currentUser:t}=an(),[e,n]=T.useState([]),[r,i]=T.useState({title:"",body:""});T.useEffect(()=>{const a=In(St(ne,"gratitudeItems"),Cr("userId","==",t.uid)),l=ED(a,u=>{const c=u.docs.map(h=>({id:h.id,...h.data()}));n(c)});return()=>l()},[t]);const s=async()=>{const a=new Date,l=a.toLocaleDateString(),u=a.toLocaleTimeString();await DT(St(ne,"gratitudeItems"),{userId:t.uid,title:r.title,body:r.body,date:l,time:u}),i({title:"",body:""})},o=async a=>{await NT(je(ne,"gratitudeItems",a))};return f.jsxs("div",{className:"max-w-md mx-auto mt-10",children:[f.jsx("h2",{className:"text-5xl font-bold mb-8",children:"Gratitude Journal"}),f.jsxs("div",{className:"mt-5 mb-10 flex flex-col",children:[f.jsx("input",{type:"text",value:r.title,onChange:a=>i({...r,title:a.target.value}),placeholder:"Title",className:"rounded-lg border-gray-300 border p-2 mb-2"}),f.jsx("textarea",{value:r.body,onChange:a=>i({...r,body:a.target.value}),placeholder:"Write something you're grateful for",className:"rounded-lg border-gray-300 border p-2 mb-2"}),f.jsx("button",{onClick:s,className:"bg-green-500 hover:bg-green-600 text-white rounded-lg px-3 py-1",children:"Add"})]}),f.jsx("ul",{className:"space-y-2",children:e.map(a=>f.jsxs("li",{className:"flex justify-between items-center bg-white rounded-lg shadow-md p-4",children:[f.jsxs("div",{children:[f.jsx("h5",{className:"text-xl font-bold",children:a.title}),f.jsxs("span",{className:"text-sm text-gray-500 block",children:[a.date," ",a.time]}),f.jsx("span",{className:"text-md",children:a.body})]}),f.jsx("button",{onClick:()=>o(a.id),className:"bg-red-500 hover:bg-red-400 text-white rounded-lg px-3 py-1 ml-4",children:"🗑️"})]},a.id))})]})};function p4(){const{currentUser:t}=an();return f.jsxs(f.Fragment,{children:[f.jsx(CV,{}),f.jsxs(RR,{children:[f.jsx(At,{path:"/",element:f.jsx(l4,{})}),f.jsx(At,{path:"/login",element:f.jsx(kV,{})}),!t&&f.jsx(At,{path:"/signup",element:f.jsx(HM,{})}),!t&&f.jsx(At,{path:"/admin/login",element:f.jsx(qM,{})}),t&&f.jsx(At,{path:"/admin/",element:f.jsx(Ev,{})}),t&&f.jsx(At,{path:"/profile",element:f.jsx(u4,{})}),t&&f.jsx(At,{path:"/create-post",element:f.jsx(o4,{})}),!t&&f.jsx(At,{path:"/admin",element:f.jsx(Ev,{})}),t&&f.jsx(At,{path:"/aroundme",element:f.jsx(c4,{})}),t&&f.jsx(At,{path:"/search/therapists",element:f.jsx(h4,{})}),f.jsx(At,{path:"/professional/:id",element:f.jsx(d4,{})}),f.jsx(At,{path:"/gratitudejournal",element:f.jsx(f4,{})})]}),f.jsx(Yd,{position:"top-right"})]})}function m4(){return f.jsx(OR,{children:f.jsx(RV,{children:f.jsx(QM,{children:f.jsx(p4,{})})})})}td.createRoot(document.getElementById("root")).render(f.jsx(K.StrictMode,{children:f.jsx(m4,{})}));
