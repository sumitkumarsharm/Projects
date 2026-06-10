var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function w(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function T(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?T(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(w(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=se(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var E=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},D={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!w(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=D,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=w,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,E)}catch(e){E(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.7`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,w());else{var t=n(l);t!==null&&ae(x,t.startTime-e)}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ae(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?w():ee=!1}}}var w;if(typeof y==`function`)w=function(){y(re)};else if(typeof MessageChannel<`u`){var T=new MessageChannel,ie=T.port2;T.port1.onmessage=re,w=function(){ie.postMessage(null)}}else w=function(){_(re,0)};function ae(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,ae(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,w()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.7`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),w=Symbol.for(`react.lazy`),T=Symbol.for(`react.activity`),ie=Symbol.for(`react.memo_cache_sentinel`),ae=Symbol.iterator;function oe(e){return typeof e!=`object`||!e?null:(e=ae&&e[ae]||e[`@@iterator`],typeof e==`function`?e:null)}var se=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case T:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case w:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var le=Array.isArray,E=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},de=[],fe=-1;function pe(e){return{current:e}}function me(e){0>fe||(e.current=de[fe],de[fe]=null,fe--)}function O(e,t){fe++,de[fe]=e.current,e.current=t}var he=pe(null),ge=pe(null),_e=pe(null),ve=pe(null);function ye(e,t){switch(O(_e,t),O(ge,e),O(he,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}me(he),O(he,e)}function be(){me(he),me(ge),me(_e)}function xe(e){e.memoizedState!==null&&O(ve,e);var t=he.current,n=Hd(t,e.type);t!==n&&(O(ge,e),O(he,n))}function Se(e){ge.current===e&&(me(he),me(ge)),ve.current===e&&(me(ve),Qf._currentValue=ue)}var Ce,we;function Te(e){if(Ce===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ce=t&&t[1]||``,we=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ce+e+we}var Ee=!1;function De(e,t){if(!e||Ee)return``;Ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ee=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Te(n):``}function Oe(e,t){switch(e.tag){case 26:case 27:case 5:return Te(e.type);case 16:return Te(`Lazy`);case 13:return e.child!==t&&t!==null?Te(`Suspense Fallback`):Te(`Suspense`);case 19:return Te(`SuspenseList`);case 0:case 15:return De(e.type,!1);case 11:return De(e.type.render,!1);case 1:return De(e.type,!0);case 31:return Te(`Activity`);default:return``}}function ke(e){try{var t=``,n=null;do t+=Oe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ae=Object.prototype.hasOwnProperty,je=t.unstable_scheduleCallback,Me=t.unstable_cancelCallback,Ne=t.unstable_shouldYield,Pe=t.unstable_requestPaint,Fe=t.unstable_now,Ie=t.unstable_getCurrentPriorityLevel,Le=t.unstable_ImmediatePriority,Re=t.unstable_UserBlockingPriority,ze=t.unstable_NormalPriority,Be=t.unstable_LowPriority,Ve=t.unstable_IdlePriority,He=t.log,Ue=t.unstable_setDisableYieldValue,We=null,Ge=null;function Ke(e){if(typeof He==`function`&&Ue(e),Ge&&typeof Ge.setStrictMode==`function`)try{Ge.setStrictMode(We,e)}catch{}}var qe=Math.clz32?Math.clz32:Xe,Je=Math.log,Ye=Math.LN2;function Xe(e){return e>>>=0,e===0?32:31-(Je(e)/Ye|0)|0}var Ze=256,Qe=262144,$e=4194304;function et(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=et(n))):i=et(o):i=et(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=et(n))):i=et(o)):i=et(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function nt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function it(){var e=$e;return $e<<=1,!($e&62914560)&&($e=4194304),e}function at(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ot(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function st(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-qe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ct(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ct(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-qe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function lt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ut(e,t){var n=t&-t;return n=n&42?1:dt(n),(n&(e.suspendedLanes|t))===0?n:0}function dt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ft(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function pt(){var e=D.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function mt(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var ht=Math.random().toString(36).slice(2),gt=`__reactFiber$`+ht,_t=`__reactProps$`+ht,vt=`__reactContainer$`+ht,yt=`__reactEvents$`+ht,bt=`__reactListeners$`+ht,xt=`__reactHandles$`+ht,St=`__reactResources$`+ht,Ct=`__reactMarker$`+ht;function wt(e){delete e[gt],delete e[_t],delete e[yt],delete e[bt],delete e[xt]}function Tt(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[gt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Et(e){if(e=e[gt]||e[vt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Dt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Ot(e){var t=e[St];return t||=e[St]={hoistableStyles:new Map,hoistableScripts:new Map},t}function k(e){e[Ct]=!0}var kt=new Set,At={};function jt(e,t){Mt(e,t),Mt(e+`Capture`,t)}function Mt(e,t){for(At[e]=t,e=0;e<t.length;e++)kt.add(t[e])}var Nt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Pt={},Ft={};function It(e){return Ae.call(Ft,e)?!0:Ae.call(Pt,e)?!1:Nt.test(e)?Ft[e]=!0:(Pt[e]=!0,!1)}function Lt(e,t,n){if(It(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Rt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function zt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Bt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Vt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ht(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ut(e){if(!e._valueTracker){var t=Vt(e)?`checked`:`value`;e._valueTracker=Ht(e,t,``+e[t])}}function Wt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Vt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Gt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Kt=/[\n"\\]/g;function qt(e){return e.replace(Kt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Jt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Bt(t)):e.value!==``+Bt(t)&&(e.value=``+Bt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Xt(e,o,Bt(n)):Xt(e,o,Bt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Bt(s):e.removeAttribute(`name`)}function Yt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ut(e);return}n=n==null?``:``+Bt(n),t=t==null?n:``+Bt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ut(e)}function Xt(e,t,n){t===`number`&&Gt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qt(e,t,n){if(t!=null&&(t=``+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Bt(n)}function $t(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(le(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Bt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ut(e)}function en(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function nn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||tn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function rn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&nn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&nn(e,o,t[o])}function an(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var on=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),sn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cn(e){return sn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function ln(){}var un=null;function dn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,pn=null;function mn(e){var t=Et(e);if(t&&(e=t.stateNode)){var n=e[_t]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Jt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+qt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[_t]||null;if(!a)throw Error(i(90));Jt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Wt(r)}break a;case`textarea`:Qt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}}}var hn=!1;function gn(e,t,n){if(hn)return e(t,n);hn=!0;try{return e(t)}finally{if(hn=!1,(fn!==null||pn!==null)&&(bu(),fn&&(t=fn,e=pn,pn=fn=null,mn(t),e)))for(t=0;t<e.length;t++)mn(e[t])}}function _n(e,t){var n=e.stateNode;if(n===null)return null;var r=n[_t]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var vn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),yn=!1;if(vn)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){yn=!0}}),window.addEventListener(`test`,bn,bn),window.removeEventListener(`test`,bn,bn)}catch{yn=!1}var xn=null,Sn=null,Cn=null;function wn(){if(Cn)return Cn;var e,t=Sn,n=t.length,r,i=`value`in xn?xn.value:xn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Cn=i.slice(e,1<r?1-r:void 0)}function Tn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function En(){return!0}function Dn(){return!1}function On(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?En:Dn,this.isPropagationStopped=Dn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=En)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=En)},persist:function(){},isPersistent:En}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=On(kn),jn=h({},kn,{view:0,detail:0}),Mn=On(jn),Nn,Pn,Fn,In=h({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Fn&&(Fn&&e.type===`mousemove`?(Nn=e.screenX-Fn.screenX,Pn=e.screenY-Fn.screenY):Pn=Nn=0,Fn=e),Nn)},movementY:function(e){return`movementY`in e?e.movementY:Pn}}),Ln=On(In),Rn=On(h({},In,{dataTransfer:0})),zn=On(h({},jn,{relatedTarget:0})),Bn=On(h({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Vn=On(h({},kn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Hn=On(h({},kn,{data:0})),Un={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Wn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Gn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gn[e])?!!t[e]:!1}function qn(){return Kn}var Jn=On(h({},jn,{key:function(e){if(e.key){var t=Un[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Tn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Wn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qn,charCode:function(e){return e.type===`keypress`?Tn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Tn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Yn=On(h({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Xn=On(h({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qn})),Zn=On(h({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Qn=On(h({},In,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),$n=On(h({},kn,{newState:0,oldState:0})),er=[9,13,27,32],tr=vn&&`CompositionEvent`in window,nr=null;vn&&`documentMode`in document&&(nr=document.documentMode);var rr=vn&&`TextEvent`in window&&!nr,ir=vn&&(!tr||nr&&8<nr&&11>=nr),ar=` `,or=!1;function sr(e,t){switch(e){case`keyup`:return er.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function cr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var lr=!1;function ur(e,t){switch(e){case`compositionend`:return cr(t);case`keypress`:return t.which===32?(or=!0,ar):null;case`textInput`:return e=t.data,e===ar&&or?null:e;default:return null}}function dr(e,t){if(lr)return e===`compositionend`||!tr&&sr(e,t)?(e=wn(),Cn=Sn=xn=null,lr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ir&&t.locale!==`ko`?null:t.data;default:return null}}var fr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!fr[e.type]:t===`textarea`}function mr(e,t,n,r){fn?pn?pn.push(r):pn=[r]:fn=r,t=Ed(t,`onChange`),0<t.length&&(n=new An(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var hr=null,gr=null;function _r(e){yd(e,0)}function vr(e){if(Wt(Dt(e)))return e}function yr(e,t){if(e===`change`)return t}var br=!1;if(vn){var xr;if(vn){var Sr=`oninput`in document;if(!Sr){var Cr=document.createElement(`div`);Cr.setAttribute(`oninput`,`return;`),Sr=typeof Cr.oninput==`function`}xr=Sr}else xr=!1;br=xr&&(!document.documentMode||9<document.documentMode)}function wr(){hr&&(hr.detachEvent(`onpropertychange`,Tr),gr=hr=null)}function Tr(e){if(e.propertyName===`value`&&vr(gr)){var t=[];mr(t,gr,e,dn(e)),gn(_r,t)}}function Er(e,t,n){e===`focusin`?(wr(),hr=t,gr=n,hr.attachEvent(`onpropertychange`,Tr)):e===`focusout`&&wr()}function Dr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return vr(gr)}function Or(e,t){if(e===`click`)return vr(t)}function kr(e,t){if(e===`input`||e===`change`)return vr(t)}function Ar(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var jr=typeof Object.is==`function`?Object.is:Ar;function Mr(e,t){if(jr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ae.call(t,i)||!jr(e[i],t[i]))return!1}return!0}function Nr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pr(e,t){var n=Nr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Nr(n)}}function Fr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ir(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gt(e.document)}return t}function Lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Rr=vn&&`documentMode`in document&&11>=document.documentMode,zr=null,Br=null,Vr=null,Hr=!1;function Ur(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hr||zr==null||zr!==Gt(r)||(r=zr,`selectionStart`in r&&Lr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vr&&Mr(Vr,r)||(Vr=r,r=Ed(Br,`onSelect`),0<r.length&&(t=new An(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=zr)))}function Wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Gr={animationend:Wr(`Animation`,`AnimationEnd`),animationiteration:Wr(`Animation`,`AnimationIteration`),animationstart:Wr(`Animation`,`AnimationStart`),transitionrun:Wr(`Transition`,`TransitionRun`),transitionstart:Wr(`Transition`,`TransitionStart`),transitioncancel:Wr(`Transition`,`TransitionCancel`),transitionend:Wr(`Transition`,`TransitionEnd`)},Kr={},qr={};vn&&(qr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),`TransitionEvent`in window||delete Gr.transitionend.transition);function Jr(e){if(Kr[e])return Kr[e];if(!Gr[e])return e;var t=Gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qr)return Kr[e]=t[n];return e}var Yr=Jr(`animationend`),Xr=Jr(`animationiteration`),Zr=Jr(`animationstart`),Qr=Jr(`transitionrun`),$r=Jr(`transitionstart`),ei=Jr(`transitioncancel`),ti=Jr(`transitionend`),ni=new Map,ri=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ri.push(`scrollEnd`);function ii(e,t){ni.set(e,t),jt(t,[e])}var ai=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},oi=[],si=0,ci=0;function li(){for(var e=si,t=ci=si=0;t<e;){var n=oi[t];oi[t++]=null;var r=oi[t];oi[t++]=null;var i=oi[t];oi[t++]=null;var a=oi[t];if(oi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&pi(n,i,a)}}function ui(e,t,n,r){oi[si++]=e,oi[si++]=t,oi[si++]=n,oi[si++]=r,ci|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function di(e,t,n,r){return ui(e,t,n,r),mi(e)}function fi(e,t){return ui(e,null,null,t),mi(e)}function pi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-qe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function mi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var hi={};function gi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _i(e,t,n,r){return new gi(e,t,n,r)}function vi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yi(e,t){var n=e.alternate;return n===null?(n=_i(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function bi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function xi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)vi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,he.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case T:return e=_i(31,n,t,a),e.elementType=T,e.lanes=o,e;case y:return Si(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=_i(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case te:return e=_i(13,n,t,a),e.elementType=te,e.lanes=o,e;case ne:return e=_i(19,n,t,a),e.elementType=ne,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case re:s=14;break a;case w:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=_i(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Si(e,t,n,r){return e=_i(7,e,r,t),e.lanes=n,e}function Ci(e,t,n){return e=_i(6,e,null,t),e.lanes=n,e}function wi(e){var t=_i(18,null,null,0);return t.stateNode=e,t}function Ti(e,t,n){return t=_i(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ei=new WeakMap;function Di(e,t){if(typeof e==`object`&&e){var n=Ei.get(e);return n===void 0?(t={value:e,source:t,stack:ke(t)},Ei.set(e,t),t):n}return{value:e,source:t,stack:ke(t)}}var Oi=[],ki=0,Ai=null,ji=0,Mi=[],Ni=0,Pi=null,Fi=1,Ii=``;function Li(e,t){Oi[ki++]=ji,Oi[ki++]=Ai,Ai=e,ji=t}function Ri(e,t,n){Mi[Ni++]=Fi,Mi[Ni++]=Ii,Mi[Ni++]=Pi,Pi=e;var r=Fi;e=Ii;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var a=32-qe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Fi=1<<32-qe(t)+i|n<<i|r,Ii=a+e}else Fi=1<<a|n<<i|r,Ii=e}function zi(e){e.return!==null&&(Li(e,1),Ri(e,1,0))}function Bi(e){for(;e===Ai;)Ai=Oi[--ki],Oi[ki]=null,ji=Oi[--ki],Oi[ki]=null;for(;e===Pi;)Pi=Mi[--Ni],Mi[Ni]=null,Ii=Mi[--Ni],Mi[Ni]=null,Fi=Mi[--Ni],Mi[Ni]=null}function Vi(e,t){Mi[Ni++]=Fi,Mi[Ni++]=Ii,Mi[Ni++]=Pi,Fi=t.id,Ii=t.overflow,Pi=e}var Hi=null,A=null,j=!1,Ui=null,Wi=!1,Gi=Error(i(519));function Ki(e){throw Qi(Di(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Gi}function qi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[gt]=e,t[_t]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),$t(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=ln),t=!0):t=!1,t||Ki(e,!0)}function Ji(e){for(Hi=e.return;Hi;)switch(Hi.tag){case 5:case 31:case 13:Wi=!1;return;case 27:case 3:Wi=!0;return;default:Hi=Hi.return}}function Yi(e){if(e!==Hi)return!1;if(!j)return Ji(e),j=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&A&&Ki(e),Ji(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));A=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));A=uf(e)}else t===27?(t=A,Zd(e.type)?(e=lf,lf=null,A=e):A=t):A=Hi?cf(e.stateNode.nextSibling):null;return!0}function Xi(){A=Hi=null,j=!1}function Zi(){var e=Ui;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Ui=null),e}function Qi(e){Ui===null?Ui=[e]:Ui.push(e)}var $i=pe(null),ea=null,ta=null;function na(e,t,n){O($i,t._currentValue),t._currentValue=n}function ra(e){e._currentValue=$i.current,me($i)}function ia(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function aa(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ia(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ia(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function oa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;jr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ve.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&aa(t,e,n,r),t.flags|=262144}function sa(e){for(e=e.firstContext;e!==null;){if(!jr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ca(e){ea=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function la(e){return da(ea,e)}function ua(e,t){return ea===null&&ca(e),da(e,t)}function da(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ta===null){if(e===null)throw Error(i(308));ta=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ta=ta.next=t;return n}var fa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},pa=t.unstable_scheduleCallback,ma=t.unstable_NormalPriority,M={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ha(){return{controller:new fa,data:new Map,refCount:0}}function ga(e){e.refCount--,e.refCount===0&&pa(ma,function(){e.controller.abort()})}var _a=null,va=0,ya=0,ba=null;function xa(e,t){if(_a===null){var n=_a=[];va=0,ya=dd(),ba={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return va++,t.then(Sa,Sa),t}function Sa(){if(--va===0&&_a!==null){ba!==null&&(ba.status=`fulfilled`);var e=_a;_a=null,ya=0,ba=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ca(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var wa=E.S;E.S=function(e,t){tu=Fe(),typeof t==`object`&&t&&typeof t.then==`function`&&xa(e,t),wa!==null&&wa(e,t)};var Ta=pe(null);function Ea(){var e=Ta.current;return e===null?G.pooledCache:e}function Da(e,t){t===null?O(Ta,Ta.current):O(Ta,t.pool)}function Oa(){var e=Ea();return e===null?null:{parent:M._currentValue,pool:e}}var ka=Error(i(460)),Aa=Error(i(474)),ja=Error(i(542)),Ma={then:function(){}};function Na(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Pa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ln,ln),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e;default:if(typeof t.status==`string`)t.then(ln,ln);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e}throw Ia=t,ka}}function Fa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ia=e,ka):e}}var Ia=null;function La(){if(Ia===null)throw Error(i(459));var e=Ia;return Ia=null,e}function Ra(e){if(e===ka||e===ja)throw Error(i(483))}var za=null,Ba=0;function Va(e){var t=Ba;return Ba+=1,za===null&&(za=[]),Pa(za,e,t)}function Ha(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ua(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Wa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=yi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Ci(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===w&&Fa(i)===t.type)?(t=a(t,n.props),Ha(t,n),t.return=e,t):(t=xi(n.type,n.key,n.props,null,e.mode,r),Ha(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ti(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Si(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Ci(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=xi(t.type,t.key,t.props,null,e.mode,n),Ha(n,t),n.return=e,n;case v:return t=Ti(t,e.mode,n),t.return=e,t;case w:return t=Fa(t),f(e,t,n)}if(le(t)||oe(t))return t=Si(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Va(t),n);if(t.$$typeof===S)return f(e,ua(e,t),n);Ua(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case w:return n=Fa(n),p(e,t,n,r)}if(le(n)||oe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Va(n),r);if(n.$$typeof===S)return p(e,t,ua(e,n),r);Ua(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case w:return r=Fa(r),m(e,t,n,r,i)}if(le(r)||oe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Va(r),i);if(r.$$typeof===S)return m(e,t,n,ua(t,r),i);Ua(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),j&&Li(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return j&&Li(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),j&&Li(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),j&&Li(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return j&&Li(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),j&&Li(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===w&&Fa(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ha(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=Si(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=xi(o.type,o.key,o.props,null,e.mode,c),Ha(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Ti(o,e.mode,c),c.return=e,e=c}return s(e);case w:return o=Fa(o),b(e,r,o,c)}if(le(o))return h(e,r,o,c);if(oe(o)){if(l=oe(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Va(o),c);if(o.$$typeof===S)return b(e,r,ua(e,o),c);Ua(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Ci(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ba=0;var i=b(e,t,n,r);return za=null,i}catch(t){if(t===ka||t===ja)throw t;var a=_i(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ga=Wa(!0),Ka=Wa(!1),qa=!1;function Ja(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ya(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Za(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=mi(e),pi(e,null,n),t}return ui(e,r,t,n),mi(e)}function Qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}function $a(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var eo=!1;function to(){if(eo){var e=ba;if(e!==null)throw e}}function no(e,t,n,r){eo=!1;var i=e.updateQueue;qa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===ya&&(eo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:qa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function ro(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function io(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ro(n[e],t)}var ao=pe(null),oo=pe(0);function so(e,t){e=Gl,O(oo,e),O(ao,t),Gl=e|t.baseLanes}function co(){O(oo,Gl),O(ao,ao.current)}function lo(){Gl=oo.current,me(ao),me(oo)}var uo=pe(null),fo=null;function po(e){var t=e.alternate;O(N,N.current&1),O(uo,e),fo===null&&(t===null||ao.current!==null||t.memoizedState!==null)&&(fo=e)}function mo(e){O(N,N.current),O(uo,e),fo===null&&(fo=e)}function ho(e){e.tag===22?(O(N,N.current),O(uo,e),fo===null&&(fo=e)):go(e)}function go(){O(N,N.current),O(uo,uo.current)}function _o(e){me(uo),fo===e&&(fo=null),me(N)}var N=pe(0);function vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yo=0,P=null,F=null,I=null,bo=!1,xo=!1,So=!1,Co=0,wo=0,To=null,Eo=0;function L(){throw Error(i(321))}function Do(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jr(e[n],t[n]))return!1;return!0}function Oo(e,t,n,r,i,a){return yo=a,P=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Ws:Gs,So=!1,a=n(r,i),So=!1,xo&&(a=Ao(t,n,r,i)),ko(e),a}function ko(e){E.H=Us;var t=F!==null&&F.next!==null;if(yo=0,I=F=P=null,bo=!1,wo=0,To=null,t)throw Error(i(300));e===null||z||(e=e.dependencies,e!==null&&sa(e)&&(z=!0))}function Ao(e,t,n,r){P=e;var a=0;do{if(xo&&(To=null),wo=0,xo=!1,25<=a)throw Error(i(301));if(a+=1,I=F=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}E.H=Ks,o=t(n,r)}while(xo);return o}function jo(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?Lo(t):t,e=e.useState()[0],(F===null?null:F.memoizedState)!==e&&(P.flags|=1024),t}function Mo(){var e=Co!==0;return Co=0,e}function No(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Po(e){if(bo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}bo=!1}yo=0,I=F=P=null,xo=!1,wo=Co=0,To=null}function Fo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return I===null?P.memoizedState=I=e:I=I.next=e,I}function R(){if(F===null){var e=P.alternate;e=e===null?null:e.memoizedState}else e=F.next;var t=I===null?P.memoizedState:I.next;if(t!==null)I=t,F=e;else{if(e===null)throw P.alternate===null?Error(i(467)):Error(i(310));F=e,e={memoizedState:F.memoizedState,baseState:F.baseState,baseQueue:F.baseQueue,queue:F.queue,next:null},I===null?P.memoizedState=I=e:I=I.next=e}return I}function Io(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Lo(e){var t=wo;return wo+=1,To===null&&(To=[]),e=Pa(To,e,t),t=P,(I===null?t.memoizedState:I.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Ws:Gs),e}function Ro(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Lo(e);if(e.$$typeof===S)return la(e)}throw Error(i(438,String(e)))}function zo(e){var t=null,n=P.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=P.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Io(),P.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function Bo(e,t){return typeof t==`function`?t(e):t}function Vo(e){return Ho(R(),F,e)}function Ho(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(yo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ya&&(d=!0);else if((yo&p)===p){u=u.next,p===ya&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,P.lanes|=p,Kl|=p;f=u.action,So&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,P.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!jr(o,e.memoizedState)&&(z=!0,d&&(n=ba,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Uo(e){var t=R(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);jr(o,t.memoizedState)||(z=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Wo(e,t,n){var r=P,a=R(),o=j;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!jr((F||a).memoizedState,n);if(s&&(a.memoizedState=n,z=!0),a=a.queue,hs(qo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||I!==null&&I.memoizedState.tag&1){if(r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,a,n,t),null),G===null)throw Error(i(349));o||yo&127||Go(r,t,n)}return n}function Go(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=P.updateQueue,t===null?(t=Io(),P.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ko(e,t,n,r){t.value=n,t.getSnapshot=r,Jo(t)&&Yo(e)}function qo(e,t,n){return n(function(){Jo(t)&&Yo(e)})}function Jo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jr(e,n)}catch{return!0}}function Yo(e){var t=fi(e,2);t!==null&&hu(t,e,2)}function Xo(e){var t=Fo();if(typeof e==`function`){var n=e;if(e=n(),So){Ke(!0);try{n()}finally{Ke(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:e},t}function Zo(e,t,n,r){return e.baseState=n,Ho(e,F,typeof r==`function`?r:Bo)}function Qo(e,t,n,r,a){if(Bs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};E.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,$o(t,o)):(o.next=n.next,t.pending=n.next=o)}}function $o(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),es(e,t,s)}catch(n){ns(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),es(e,t,a)}catch(n){ns(e,t,n)}}function es(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ts(e,t,n)},function(n){return ns(e,t,n)}):ts(e,t,n)}function ts(e,t,n){t.status=`fulfilled`,t.value=n,rs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,$o(e,n)))}function ns(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,rs(t),t=t.next;while(t!==r)}e.action=null}function rs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function is(e,t){return t}function as(e,t){if(j){var n=G.formState;if(n!==null){a:{var r=P;if(j){if(A){b:{for(var i=A,a=Wi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){A=cf(i.nextSibling),r=i.data===`F!`;break a}}Ki(r)}r=!1}r&&(t=n[0])}}return n=Fo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:t},n.queue=r,n=Ls.bind(null,P,r),r.dispatch=n,r=Xo(!1),a=zs.bind(null,P,!1,r.queue),r=Fo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Qo.bind(null,P,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function os(e){return ss(R(),F,e)}function ss(e,t,n){if(t=Ho(e,t,is)[0],e=Vo(Bo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Lo(t)}catch(e){throw e===ka?ja:e}else r=t;t=R();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(P.flags|=2048,us(9,{destroy:void 0},cs.bind(null,i,n),null)),[r,a,e]}function cs(e,t){e.action=t}function ls(e){var t=R(),n=F;if(n!==null)return ss(t,n,e);R(),t=t.memoizedState,n=R();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function us(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=P.updateQueue,t===null&&(t=Io(),P.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ds(){return R().memoizedState}function fs(e,t,n,r){var i=Fo();P.flags|=e,i.memoizedState=us(1|t,{destroy:void 0},n,r===void 0?null:r)}function ps(e,t,n,r){var i=R();r=r===void 0?null:r;var a=i.memoizedState.inst;F!==null&&r!==null&&Do(r,F.memoizedState.deps)?i.memoizedState=us(t,a,n,r):(P.flags|=e,i.memoizedState=us(1|t,a,n,r))}function ms(e,t){fs(8390656,8,e,t)}function hs(e,t){ps(2048,8,e,t)}function gs(e){P.flags|=4;var t=P.updateQueue;if(t===null)t=Io(),P.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function _s(e){var t=R().memoizedState;return gs({ref:t,nextImpl:e}),function(){if(W&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function vs(e,t){return ps(4,2,e,t)}function ys(e,t){return ps(4,4,e,t)}function bs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xs(e,t,n){n=n==null?null:n.concat([e]),ps(4,4,bs.bind(null,t,e),n)}function Ss(){}function Cs(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Do(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ws(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Do(t,r[1]))return r[0];if(r=e(),So){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r}function Ts(e,t,n){return n===void 0||yo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),P.lanes|=e,Kl|=e,n)}function Es(e,t,n,r){return jr(n,t)?n:ao.current===null?!(yo&42)||yo&1073741824&&!(q&261930)?(z=!0,e.memoizedState=n):(e=mu(),P.lanes|=e,Kl|=e,t):(e=Ts(e,n,r),jr(e,t)||(z=!0),e)}function Ds(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};E.T=s,zs(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Rs(e,t,Ca(c,r),pu(e)):Rs(e,t,r,pu(e))}catch(n){Rs(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function Os(){}function ks(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=As(e).queue;Ds(e,a,t,ue,n===null?Os:function(){return js(e),n(r)})}function As(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function js(e){var t=As(e);t.next===null&&(t=e.alternate.memoizedState),Rs(e,t.next.queue,{},pu())}function Ms(){return la(Qf)}function Ns(){return R().memoizedState}function Ps(){return R().memoizedState}function Fs(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Xa(n);var r=Za(t,e,n);r!==null&&(hu(r,t,n),Qa(r,t,n)),t={cache:ha()},e.payload=t;return}t=t.return}}function Is(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Bs(e)?Vs(t,n):(n=di(e,t,n,r),n!==null&&(hu(n,e,r),Hs(n,t,r)))}function Ls(e,t,n){Rs(e,t,n,pu())}function Rs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bs(e))Vs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,jr(s,o))return ui(e,t,i,0),G===null&&li(),!1}catch{}if(n=di(e,t,i,r),n!==null)return hu(n,e,r),Hs(n,t,r),!0}return!1}function zs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Bs(e)){if(t)throw Error(i(479))}else t=di(e,n,r,2),t!==null&&hu(t,e,2)}function Bs(e){var t=e.alternate;return e===P||t!==null&&t===P}function Vs(e,t){xo=bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}var Us={readContext:la,use:Ro,useCallback:L,useContext:L,useEffect:L,useImperativeHandle:L,useLayoutEffect:L,useInsertionEffect:L,useMemo:L,useReducer:L,useRef:L,useState:L,useDebugValue:L,useDeferredValue:L,useTransition:L,useSyncExternalStore:L,useId:L,useHostTransitionStatus:L,useFormState:L,useActionState:L,useOptimistic:L,useMemoCache:L,useCacheRefresh:L};Us.useEffectEvent=L;var Ws={readContext:la,use:Ro,useCallback:function(e,t){return Fo().memoizedState=[e,t===void 0?null:t],e},useContext:la,useEffect:ms,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),fs(4194308,4,bs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fs(4194308,4,e,t)},useInsertionEffect:function(e,t){fs(4,2,e,t)},useMemo:function(e,t){var n=Fo();t=t===void 0?null:t;var r=e();if(So){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Fo();if(n!==void 0){var i=n(t);if(So){Ke(!0);try{n(t)}finally{Ke(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Is.bind(null,P,e),[r.memoizedState,e]},useRef:function(e){var t=Fo();return e={current:e},t.memoizedState=e},useState:function(e){e=Xo(e);var t=e.queue,n=Ls.bind(null,P,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ss,useDeferredValue:function(e,t){return Ts(Fo(),e,t)},useTransition:function(){var e=Xo(!1);return e=Ds.bind(null,P,e.queue,!0,!1),Fo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=P,a=Fo();if(j){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),G===null)throw Error(i(349));q&127||Go(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ms(qo.bind(null,r,o,e),[e]),r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,o,n,t),null),n},useId:function(){var e=Fo(),t=G.identifierPrefix;if(j){var n=Ii,r=Fi;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Co++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Eo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ms,useFormState:as,useActionState:as,useOptimistic:function(e){var t=Fo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=zs.bind(null,P,!0,n),n.dispatch=t,[e,t]},useMemoCache:zo,useCacheRefresh:function(){return Fo().memoizedState=Fs.bind(null,P)},useEffectEvent:function(e){var t=Fo(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Gs={readContext:la,use:Ro,useCallback:Cs,useContext:la,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Vo,useRef:ds,useState:function(){return Vo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){return Es(R(),F.memoizedState,e,t)},useTransition:function(){var e=Vo(Bo)[0],t=R().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:os,useActionState:os,useOptimistic:function(e,t){return Zo(R(),F,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Gs.useEffectEvent=_s;var Ks={readContext:la,use:Ro,useCallback:Cs,useContext:la,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Uo,useRef:ds,useState:function(){return Uo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){var n=R();return F===null?Ts(n,e,t):Es(n,F.memoizedState,e,t)},useTransition:function(){var e=Uo(Bo)[0],t=R().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:ls,useActionState:ls,useOptimistic:function(e,t){var n=R();return F===null?(n.baseState=e,[e,n.queue.dispatch]):Zo(n,F,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Ks.useEffectEvent=_s;function qs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Js={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Xa(r);i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(hu(t,e,r),Qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Xa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(hu(t,e,r),Qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Xa(n);r.tag=2,t!=null&&(r.callback=t),t=Za(e,r,n),t!==null&&(hu(t,e,n),Qa(t,e,n))}};function Ys(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Mr(n,r)||!Mr(i,a):!0}function Xs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Js.enqueueReplaceState(t,t.state,null)}function Zs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Qs(e){ai(e)}function $s(e){console.error(e)}function ec(e){ai(e)}function tc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function rc(e,t,n){return n=Xa(n),n.tag=3,n.payload={element:null},n.callback=function(){tc(e,t)},n}function ic(e){return e=Xa(e),e.tag=3,e}function ac(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){nc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){nc(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function oc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&oa(t,n,a,!0),n=uo.current,n!==null){switch(n.tag){case 31:case 13:return fo===null?Du():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(j)return t=uo.current,t===null?(r!==Gi&&(t=Error(i(423),{cause:r}),Qi(Di(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Di(r,n),a=rc(e.stateNode,r,a),$a(e,a),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Gi&&(e=Error(i(422),{cause:r}),Qi(Di(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Di(o,n),Zl===null?Zl=[o]:Zl.push(o),Y!==4&&(Y=2),t===null)return!0;r=Di(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=rc(n.stateNode,r,e),$a(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(iu===null||!iu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ic(a),ac(a,e,n,r),$a(n,a),!1}n=n.return}while(n!==null);return!1}var sc=Error(i(461)),z=!1;function cc(e,t,n,r){t.child=e===null?Ka(t,null,n,r):Ga(t,e.child,n,r)}function lc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ca(t),r=Oo(e,t,n,o,a,i),s=Mo(),e!==null&&!z?(No(e,t,i),Nc(e,t,i)):(j&&s&&zi(t),t.flags|=1,cc(e,t,r,i),t.child)}function uc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!vi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,dc(e,t,a,r,i)):(e=xi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Pc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Mr:n,n(o,r)&&e.ref===t.ref)return Nc(e,t,i)}return t.flags|=1,e=yi(a,r),e.ref=t.ref,e.return=t,t.child=e}function dc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Mr(a,r)&&e.ref===t.ref)if(z=!1,t.pendingProps=r=a,Pc(e,i))e.flags&131072&&(z=!0);else return t.lanes=e.lanes,Nc(e,t,i)}return yc(e,t,n,r,i)}function fc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return mc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Da(t,a===null?null:a.cachePool),a===null?co():so(t,a),ho(t);else return r=t.lanes=536870912,mc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Da(t,null),co(),go(t)):(Da(t,a.cachePool),so(t,a),go(t),t.memoizedState=null);return cc(e,t,i,n),t.child}function pc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function mc(e,t,n,r,i){var a=Ea();return a=a===null?null:{parent:M._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Da(t,null),co(),ho(t),e!==null&&oa(e,t,r,!0),t.childLanes=i,null}function hc(e,t){return t=Oc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function gc(e,t,n){return Ga(t,e.child,null,n),e=hc(t,t.pendingProps),e.flags|=2,_o(t),t.memoizedState=null,e}function _c(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(j){if(r.mode===`hidden`)return e=hc(t,r),t.lanes=536870912,pc(null,e);if(mo(t),(e=A)?(e=rf(e,Wi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pi===null?null:{id:Fi,overflow:Ii},retryLane:536870912,hydrationErrors:null},n=wi(e),n.return=t,t.child=n,Hi=t,A=null)):e=null,e===null)throw Ki(t);return t.lanes=536870912,null}return hc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(mo(t),a)if(t.flags&256)t.flags&=-257,t=gc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(z||oa(e,t,n,!1),a=(n&e.childLanes)!==0,z||a){if(r=G,r!==null&&(s=ut(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,fi(e,s),hu(r,e,s),sc;Du(),t=gc(e,t,n)}else e=o.treeContext,A=cf(s.nextSibling),Hi=t,j=!0,Ui=null,Wi=!1,e!==null&&Vi(t,e),t=hc(t,r),t.flags|=4096;return t}return e=yi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function vc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function yc(e,t,n,r,i){return ca(t),n=Oo(e,t,n,r,void 0,i),r=Mo(),e!==null&&!z?(No(e,t,i),Nc(e,t,i)):(j&&r&&zi(t),t.flags|=1,cc(e,t,n,i),t.child)}function bc(e,t,n,r,i,a){return ca(t),t.updateQueue=null,n=Ao(t,r,n,i),ko(e),r=Mo(),e!==null&&!z?(No(e,t,a),Nc(e,t,a)):(j&&r&&zi(t),t.flags|=1,cc(e,t,n,a),t.child)}function xc(e,t,n,r,i){if(ca(t),t.stateNode===null){var a=hi,o=n.contextType;typeof o==`object`&&o&&(a=la(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Js,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ja(t),o=n.contextType,a.context=typeof o==`object`&&o?la(o):hi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(qs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Js.enqueueReplaceState(a,a.state,null),no(t,r,a,i),to(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Zs(n,s);a.props=c;var l=a.context,u=n.contextType;o=hi,typeof u==`object`&&u&&(o=la(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Xs(t,a,r,o),qa=!1;var f=t.memoizedState;a.state=f,no(t,r,a,i),to(),l=t.memoizedState,s||f!==l||qa?(typeof d==`function`&&(qs(t,n,d,r),l=t.memoizedState),(c=qa||Ys(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ya(e,t),o=t.memoizedProps,u=Zs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=hi,typeof l==`object`&&l&&(c=la(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Xs(t,a,r,c),qa=!1,f=t.memoizedState,a.state=f,no(t,r,a,i),to();var p=t.memoizedState;o!==d||f!==p||qa||e!==null&&e.dependencies!==null&&sa(e.dependencies)?(typeof s==`function`&&(qs(t,n,s,r),p=t.memoizedState),(u=qa||Ys(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&sa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,vc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ga(t,e.child,null,i),t.child=Ga(t,null,n,i)):cc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Nc(e,t,i),e}function Sc(e,t,n,r){return Xi(),t.flags|=256,cc(e,t,n,r),t.child}var Cc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wc(e){return{baseLanes:e,cachePool:Oa()}}function Tc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Ec(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(N.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(j){if(a?po(t):go(t),(e=A)?(e=rf(e,Wi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pi===null?null:{id:Fi,overflow:Ii},retryLane:536870912,hydrationErrors:null},n=wi(e),n.return=t,t.child=n,Hi=t,A=null)):e=null,e===null)throw Ki(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(go(t),a=t.mode,c=Oc({mode:`hidden`,children:c},a),r=Si(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,s,n),t.memoizedState=Cc,pc(null,r)):(po(t),Dc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(po(t),t.flags&=-257,t=kc(e,t,n)):t.memoizedState===null?(go(t),c=r.fallback,a=t.mode,r=Oc({mode:`visible`,children:r.children},a),c=Si(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ga(t,e.child,null,n),r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,s,n),t.memoizedState=Cc,t=pc(null,r)):(go(t),t.child=e.child,t.flags|=128,t=null);else if(po(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Qi({value:r,source:null,stack:null}),t=kc(e,t,n)}else if(z||oa(e,t,n,!1),s=(n&e.childLanes)!==0,z||s){if(s=G,s!==null&&(r=ut(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,fi(e,r),hu(s,e,r),sc;af(c)||Du(),t=kc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,A=cf(c.nextSibling),Hi=t,j=!0,Ui=null,Wi=!1,e!==null&&Vi(t,e),t=Dc(t,r.children),t.flags|=4096);return t}return a?(go(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=yi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=Si(c,a,n,null),c.flags|=2):c=yi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,pc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=wc(n):(a=c.cachePool,a===null?a=Oa():(l=M._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Tc(e,s,n),t.memoizedState=Cc,pc(e.child,r)):(po(t),n=e.child,e=n.sibling,n=yi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Dc(e,t){return t=Oc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Oc(e,t){return e=_i(22,e,null,t),e.lanes=0,e}function kc(e,t,n){return Ga(t,e.child,null,n),e=Dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ac(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ia(e.return,t,n)}function jc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Mc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=N.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,O(N,o),cc(e,t,r,n),r=j?ji:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ac(e,n,t);else if(e.tag===19)Ac(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&vo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),jc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&vo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}jc(t,!0,n,null,a,r);break;case`together`:jc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Nc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(oa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=yi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&sa(e))):!0}function Fc(e,t,n){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),na(t,M,e.memoizedState.cache),Xi();break;case 27:case 5:xe(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:na(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,mo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(po(t),e=Nc(e,t,n),e===null?null:e.sibling):Ec(e,t,n):(po(t),t.flags|=128,null);po(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(oa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Mc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(N,N.current),r)break;return null;case 22:return t.lanes=0,fc(e,t,n,t.pendingProps);case 24:na(t,M,e.memoizedState.cache)}return Nc(e,t,n)}function Ic(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)z=!0;else{if(!Pc(e,n)&&!(t.flags&128))return z=!1,Fc(e,t,n);z=!!(e.flags&131072)}else z=!1,j&&t.flags&1048576&&Ri(t,ji,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Fa(t.elementType),t.type=e,typeof e==`function`)vi(e)?(r=Zs(e,r),t.tag=1,t=xc(null,t,e,r,n)):(t.tag=0,t=yc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=lc(null,t,e,r,n);break a}else if(a===re){t.tag=14,t=uc(null,t,e,r,n);break a}}throw t=ce(e)||e,Error(i(306,t,``))}}return t;case 0:return yc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Zs(r,t.pendingProps),xc(e,t,r,a,n);case 3:a:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ya(e,t),no(t,r,null,n);var s=t.memoizedState;if(r=s.cache,na(t,M,r),r!==o.cache&&aa(t,[M],n,!0),to(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Sc(e,t,r,n);break a}else if(r!==a){a=Di(Error(i(424)),t),Qi(a),t=Sc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(A=cf(e.firstChild),Hi=t,j=!0,Ui=null,Wi=!0,n=Ka(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Xi(),r===a){t=Nc(e,t,n);break a}cc(e,t,r,n)}t=t.child}return t;case 26:return vc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:j||(n=t.type,e=t.pendingProps,r=Bd(_e.current).createElement(n),r[gt]=t,r[_t]=e,Pd(r,n,e),k(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xe(t),e===null&&j&&(r=t.stateNode=ff(t.type,t.pendingProps,_e.current),Hi=t,Wi=!0,a=A,Zd(t.type)?(lf=a,A=cf(r.firstChild)):A=a),cc(e,t,t.pendingProps.children,n),vc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&j&&((a=r=A)&&(r=tf(r,t.type,t.pendingProps,Wi),r===null?a=!1:(t.stateNode=r,Hi=t,A=cf(r.firstChild),Wi=!1,a=!0)),a||Ki(t)),xe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Oo(e,t,jo,null,null,n),Qf._currentValue=a),vc(e,t),cc(e,t,r,n),t.child;case 6:return e===null&&j&&((e=n=A)&&(n=nf(n,t.pendingProps,Wi),n===null?e=!1:(t.stateNode=n,Hi=t,A=null,e=!0)),e||Ki(t)),null;case 13:return Ec(e,t,n);case 4:return ye(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ga(t,null,r,n):cc(e,t,r,n),t.child;case 11:return lc(e,t,t.type,t.pendingProps,n);case 7:return cc(e,t,t.pendingProps,n),t.child;case 8:return cc(e,t,t.pendingProps.children,n),t.child;case 12:return cc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,na(t,t.type,r.value),cc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ca(t),a=la(a),r=r(a),t.flags|=1,cc(e,t,r,n),t.child;case 14:return uc(e,t,t.type,t.pendingProps,n);case 15:return dc(e,t,t.type,t.pendingProps,n);case 19:return Mc(e,t,n);case 31:return _c(e,t,n);case 22:return fc(e,t,n,t.pendingProps);case 24:return ca(t),r=la(M),e===null?(a=Ea(),a===null&&(a=G,o=ha(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ja(t),na(t,M,a)):((e.lanes&n)!==0&&(Ya(e,t),no(t,null,null,n),to()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,na(t,M,r),r!==a.cache&&aa(t,[M],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),na(t,M,r))),cc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Lc(e){e.flags|=4}function Rc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ia=Ma,Aa}else e.flags&=-16777217}function zc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Ia=Ma,Aa}function Bc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:it(),e.lanes|=t,Xl|=t)}function Vc(e,t){if(!j)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function B(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hc(e,t,n){var r=t.pendingProps;switch(Bi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return B(t),null;case 1:return B(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ra(M),be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Yi(t)?Lc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Zi())),B(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Lc(t),o===null?(B(t),Rc(t,a,null,r,n)):(B(t),zc(t,o))):o?o===e.memoizedState?(B(t),t.flags&=-16777217):(Lc(t),B(t),zc(t,o)):(e=e.memoizedProps,e!==r&&Lc(t),B(t),Rc(t,a,e,r,n)),null;case 27:if(Se(t),n=_e.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return B(t),null}e=he.current,Yi(t)?qi(t,e):(e=ff(a,r,n),t.stateNode=e,Lc(t))}return B(t),null;case 5:if(Se(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return B(t),null}if(o=he.current,Yi(t))qi(t,o);else{var s=Bd(_e.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[gt]=t,o[_t]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Lc(t)}}return B(t),Rc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=_e.current,Yi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Hi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[gt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ki(t,!0)}else e=Bd(e).createTextNode(r),e[gt]=t,t.stateNode=e}return B(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Yi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[gt]=t}else Xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),e=!1}else n=Zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(_o(t),t):(_o(t),null);if(t.flags&128)throw Error(i(558))}return B(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Yi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[gt]=t}else Xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),a=!1}else a=Zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(_o(t),t):(_o(t),null)}return _o(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Bc(t,t.updateQueue),B(t),null);case 4:return be(),e===null&&Sd(t.stateNode.containerInfo),B(t),null;case 10:return ra(t.type),B(t),null;case 19:if(me(N),r=t.memoizedState,r===null)return B(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Vc(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=vo(e),o!==null){for(t.flags|=128,Vc(r,!1),e=o.updateQueue,t.updateQueue=e,Bc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)bi(n,e),n=n.sibling;return O(N,N.current&1|2),j&&Li(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Fe()>nu&&(t.flags|=128,a=!0,Vc(r,!1),t.lanes=4194304)}else{if(!a)if(e=vo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Bc(t,e),Vc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!j)return B(t),null}else 2*Fe()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,a=!0,Vc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(B(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Fe(),e.sibling=null,n=N.current,O(N,a?n&1|2:n&1),j&&Li(t,r.treeForkCount),e);case 22:case 23:return _o(t),lo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(B(t),t.subtreeFlags&6&&(t.flags|=8192)):B(t),n=t.updateQueue,n!==null&&Bc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&me(Ta),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ra(M),B(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Uc(e,t){switch(Bi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ra(M),be(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Se(t),null;case 31:if(t.memoizedState!==null){if(_o(t),t.alternate===null)throw Error(i(340));Xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(_o(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(N),null;case 4:return be(),null;case 10:return ra(t.type),null;case 22:case 23:return _o(t),lo(),e!==null&&me(Ta),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ra(M),null;case 25:return null;default:return null}}function Wc(e,t){switch(Bi(t),t.tag){case 3:ra(M),be();break;case 26:case 27:case 5:Se(t);break;case 4:be();break;case 31:t.memoizedState!==null&&_o(t);break;case 13:_o(t);break;case 19:me(N);break;case 10:ra(t.type);break;case 22:case 23:_o(t),lo(),e!==null&&me(Ta);break;case 24:ra(M)}}function Gc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Kc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function qc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{io(t,n)}catch(t){Z(e,e.return,t)}}}function Jc(e,t,n){n.props=Zs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Yc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Xc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Zc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Qc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[_t]=t}catch(t){Z(e,e.return,t)}}function $c(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function el(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||$c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ln));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(nl(e,t,n),e=e.sibling;e!==null;)nl(e,t,n),e=e.sibling}function rl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[gt]=e,t[_t]=n}catch(t){Z(e,e.return,t)}}var il=!1,V=!1,al=!1,ol=typeof WeakSet==`function`?WeakSet:Set,H=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=Ir(e),Lr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,H=t;H!==null;)if(t=H,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,H=e;else for(;H!==null;){switch(t=H,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Zs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Gc(5,n);break;case 1:if(Sl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Zs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&qc(n),r&512&&Yc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{io(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&rl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Zc(n),r&512&&Yc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||il,!r){t=t!==null&&t.memoizedState!==null||V,i=il;var a=V;il=r,(V=t)&&!a?wl(e,n,(n.subtreeFlags&8772)!=0):Sl(e,n),il=i,V=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&wt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount==`function`)try{Ge.onCommitFiberUnmount(We,n)}catch{}switch(n.tag){case 26:V||Xc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:V||Xc(n,t);var r=U,i=ul;Zd(n.type)&&(U=n.stateNode,ul=!1),dl(e,t,n),pf(n.stateNode),U=r,ul=i;break;case 5:V||Xc(n,t);case 6:if(r=U,i=ul,U=null,dl(e,t,n),U=r,ul=i,U!==null)if(ul)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:U!==null&&(ul?(e=U,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(U,n.stateNode));break;case 4:r=U,i=ul,U=n.stateNode.containerInfo,ul=!0,dl(e,t,n),U=r,ul=i;break;case 0:case 11:case 14:case 15:Kc(2,n,t),V||Kc(4,n,t),dl(e,t,n);break;case 1:V||(Xc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Jc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:V=(r=V)||n.memoizedState!==null,dl(e,t,n),V=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ol),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ol),t;default:throw Error(i(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){U=c.stateNode,ul=!1;break a}break;case 5:U=c.stateNode,ul=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(U===null)throw Error(i(160));fl(o,s,a),U=null,ul=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Kc(3,e,e.return),Gc(3,e),Kc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),r&64&&il&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=vl;if(_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[Ct]||o[gt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[gt]=e,k(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[gt]=e,k(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Qc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),n!==null&&r&4&&Qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),e.flags&32){a=e.stateNode;try{en(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Qc(e,a,n===null?a:n.memoizedProps)),r&1024&&(al=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=vl,vl=gf(t.containerInfo),_l(t,e),vl=a,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}al&&(al=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Fe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=il,d=V;if(il=u||a,V=d||l,_l(t,e),V=d,il=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||il||V||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if($c(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;nl(e,el(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(en(o,``),n.flags&=-33),nl(e,el(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;tl(e,el(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Kc(4,t,t.return),Cl(t);break;case 1:Xc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Jc(t,t.return,n),Cl(t);break;case 27:pf(t.stateNode);case 26:case 5:Xc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Gc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)ro(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&qc(a),Yc(a,a.return);break;case 27:rl(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Zc(a),Yc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),Yc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ga(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Gc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Gc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Kc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Kc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;H!==null;){var n=H;switch(n.tag){case 0:case 11:case 15:Kc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ga(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,H=r;else a:for(n=e;H!==null;){r=H;var i=r.sibling,a=r.return;if(ll(r),r===n){H=null;break a}if(i!==null){i.return=a,H=i;break a}H=a}}}var zl={getCacheForType:function(e){var t=la(M),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return la(M).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Y=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,X=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return W&2&&q!==0?q&-q:E.T===null?pt():dd()}function mu(){if(Yl===0)if(!(q&536870912)||j){var e=Qe;Qe<<=1,!(Qe&3932160)&&(Qe=262144),Yl=e}else Yl=536870912;return e=uo.current,e!==null&&(e.flags|=32),Yl}function hu(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,q,Yl,!1)),ot(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ql|=n),Y===4&&yu(e,q,Yl,!1)),rd(e))}function gu(e,t,n){if(W&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||nt(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Ul&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=o,ql|=o,a=4;break a}o=Ql,Ql=a,o!==null&&(Ql===null?Ql=o:Ql.push.apply(Ql,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Yl,!Hl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=eu+300-Fe(),10<a)){if(yu(r,t,Yl,!Hl),tt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,o,`Throttled`,-0,0),a);break a}_u(r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ln},Nl(t,a,d);var m=(a&62914560)===a?eu-Fe():(a&4194048)===a?tu-Fe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!jr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-qe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ct(e,n,t)}function bu(){return W&6?!0:(id(0,!1),!1)}function xu(){if(K!==null){if(J===0)var e=K.return;else e=K,ta=ea=null,Po(e),za=null,Ba=0,e=K;for(;e!==null;)Wc(e.alternate,e),e=e.return;K=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),G=e,K=n=yi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=nt(e,t),Wl=!1,Xl=Yl=Jl=ql=Kl=Y=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-qe(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,li(),n}function Cu(e,t){P=null,E.H=Us,t===ka||t===ja?(t=La(),J=3):t===Aa?(t=La(),J=4):J=t===sc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Y=1,tc(e,Di(t,e.current)))}function wu(){var e=uo.current;return e===null?!0:(q&4194048)===q?fo===null:(q&62914560)===q||q&536870912?e===fo:!1}function Tu(){var e=E.H;return E.H=Us,e===null?Us:e}function Eu(){var e=E.A;return E.A=zl,e}function Du(){Y=4,Hl||(q&4194048)!==q&&uo.current!==null||(Ul=!0),!(Kl&134217727)&&!(ql&134217727)||G===null||yu(G,q,Yl,!1)}function Ou(e,t,n){var r=W;W|=2;var i=Tu(),a=Eu();(G!==e||q!==t)&&(ru=null,Su(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:uo.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Pu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Pu(e,s,c,l)}}ku(),o=Y;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,ta=ea=null,W=r,E.H=i,E.A=a,K===null&&(G=null,q=0,li()),o}function ku(){for(;K!==null;)Mu(K)}function Au(e,t){var n=W;W|=2;var r=Tu(),a=Eu();G!==e||q!==t?(ru=null,nu=Fe()+500,Su(e,t)):Ul=nt(e,t);a:do try{if(J!==0&&K!==null){t=K;var o=Vl;b:switch(J){case 1:J=0,Vl=null,Pu(e,t,o,1);break;case 2:case 9:if(Na(o)){J=0,Vl=null,Nu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),rd(e)},o.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:Na(o)?(J=0,Vl=null,Nu(t)):(J=0,Vl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(K.tag){case 26:s=K.memoizedState;case 5:case 27:var c=K;if(s?Wf(s):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Fu(u))}break b}}J=0,Vl=null,Pu(e,t,o,5);break;case 6:J=0,Vl=null,Pu(e,t,o,6);break;case 8:xu(),Y=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return ta=ea=null,E.H=r,E.A=a,W=n,K===null?(G=null,q=0,li(),Y):0}function ju(){for(;K!==null&&!Ne();)Mu(K)}function Mu(e){var t=Ic(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=bc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=bc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:Po(t);default:Wc(n,t),t=K=bi(t,Gl),t=Ic(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Pu(e,t,n,r){ta=ea=null,Po(t),za=null,Ba=0;var i=t.return;try{if(oc(e,i,t,n,q)){Y=1,tc(e,Di(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,tc(e,Di(n,e.current)),K=null;return}t.flags&32768?(j||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=uo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Hl);return}e=t.return;var n=Hc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Iu(e,t){do{var n=Uc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(X!==0);if(W&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ci,st(e,n,o,s,c,l),e===G&&(K=G=null,q=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(ze,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=E.T,E.T=null,a=D.p,D.p=2,s=W,W|=4;try{sl(e,t,n)}finally{W=s,D.p=a,E.T=r}}X=1,Ru(),zu(),Bu()}}function Ru(){if(X===1){X=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=W;W|=4;try{yl(t,e);var a=zd,o=Ir(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Fr(s.ownerDocument.documentElement,s)){if(c!==null&&Lr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Pr(s,h),v=Pr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{W=i,D.p=r,E.T=n}}e.current=t,X=2}}function zu(){if(X===2){X=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=W;W|=4;try{cl(e,t.alternate,t)}finally{W=i,D.p=r,E.T=n}}X=3}}function Bu(){if(X===4||X===3){X=0,Pe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?X=5:(X=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),ft(n),t=t.stateNode,Ge&&typeof Ge.onCommitFiberRoot==`function`)try{Ge.onCommitFiberRoot(We,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=E.T,i=D.p,D.p=2,E.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{E.T=t,D.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ga(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(X!==5)return!1;var e=au,t=cu;cu=0;var n=ft(su),r=E.T,a=D.p;try{D.p=32>n?32:n,E.T=null,n=lu,lu=null;var o=au,s=su;if(X=0,ou=au=null,su=0,W&6)throw Error(i(331));var c=W;if(W|=4,Il(o.current),Ol(o,o.current,s,n),W=c,id(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot==`function`)try{Ge.onPostCommitFiberRoot(We,o)}catch{}return!0}finally{D.p=a,E.T=r,Vu(e,t)}}function Wu(e,t,n){t=Di(n,t),t=rc(e.stateNode,t,2),e=Za(e,t,2),e!==null&&(ot(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Di(n,e),n=ic(2),r=Za(t,n,2),r!==null&&(ac(n,r,t,e),ot(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>Fe()-eu?!(W&2)&&Su(e,0):Jl|=n,Xl===q&&(Xl=0)),rd(e)}function qu(e,t){t===0&&(t=it()),e=fi(e,t),e!==null&&(ot(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return je(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-qe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=q,a=tt(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||nt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Fe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}X!==0&&X!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-qe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=rt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=tt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Me(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||nt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Me(r),ft(n)){case 2:case 8:n=Re;break;case 32:n=ze;break;case 268435456:n=Ve;break;default:n=ze}return r=cd.bind(null,e),n=je(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Me(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=q;return r=tt(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Fe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){W&6?je(Le,ad):od()})}function dd(){if(nd===0){var e=ya;e===0&&(e=Ze,Ze<<=1,!(Ze&261888)&&(Ze=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:cn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[_t]||null).action),o=r.submitter;o&&(t=(t=o[_t]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new An(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);ks(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),ks(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ri.length;hd++){var gd=ri[hd];ii(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ii(Yr,`onAnimationEnd`),ii(Xr,`onAnimationIteration`),ii(Zr,`onAnimationStart`),ii(`dblclick`,`onDoubleClick`),ii(`focusin`,`onFocus`),ii(`focusout`,`onBlur`),ii(Qr,`onTransitionRun`),ii($r,`onTransitionStart`),ii(ei,`onTransitionCancel`),ii(ti,`onTransitionEnd`),Mt(`onMouseEnter`,[`mouseout`,`mouseover`]),Mt(`onMouseLeave`,[`mouseout`,`mouseover`]),Mt(`onPointerEnter`,[`pointerout`,`pointerover`]),Mt(`onPointerLeave`,[`pointerout`,`pointerover`]),jt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),jt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),jt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),jt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ai(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ai(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[yt];n===void 0&&(n=t[yt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,kt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!yn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Tt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}gn(function(){var r=a,i=dn(n),s=[];a:{var c=ni.get(e);if(c!==void 0){var l=An,u=e;switch(e){case`keypress`:if(Tn(n)===0)break a;case`keydown`:case`keyup`:l=Jn;break;case`focusin`:u=`focus`,l=zn;break;case`focusout`:u=`blur`,l=zn;break;case`beforeblur`:case`afterblur`:l=zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Ln;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Rn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Xn;break;case Yr:case Xr:case Zr:l=Bn;break;case ti:l=Zn;break;case`scroll`:case`scrollend`:l=Mn;break;case`wheel`:l=Qn;break;case`copy`:case`cut`:case`paste`:l=Vn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Yn;break;case`toggle`:case`beforetoggle`:l=$n}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=_n(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==un&&(u=n.relatedTarget||n.fromElement)&&(Tt(u)||u[vt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Tt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Ln,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Yn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Dt(l),h=u==null?c:Dt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Tt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Dt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=yr;else if(pr(c))if(br)v=kr;else{v=Dr;var y=Er}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&an(r.elementType)&&(v=yr):v=Or;if(v&&=v(e,r)){mr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Xt(c,`number`,c.value)}switch(y=r?Dt(r):window,e){case`focusin`:(pr(y)||y.contentEditable===`true`)&&(zr=y,Br=r,Vr=null);break;case`focusout`:Vr=Br=zr=null;break;case`mousedown`:Hr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Hr=!1,Ur(s,n,i);break;case`selectionchange`:if(Rr)break;case`keydown`:case`keyup`:Ur(s,n,i)}var b;if(tr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else lr?sr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(ir&&n.locale!==`ko`&&(lr||x!==`onCompositionStart`?x===`onCompositionEnd`&&lr&&(b=wn()):(xn=i,Sn=`value`in xn?xn.value:xn.textContent,lr=!0)),y=Ed(r,x),0<y.length&&(x=new Hn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=cr(n),b!==null&&(x.data=b)))),(b=rr?ur(e,n):dr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Hn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=_n(e,n),i!=null&&r.unshift(Td(e,i,a)),i=_n(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=_n(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=_n(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||en(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&en(e,``+r);break;case`className`:Rt(e,`class`,r);break;case`tabIndex`:Rt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Rt(e,n,r);break;case`style`:rn(e,r,o);break;case`data`:if(t!==`object`){Rt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=cn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Lt(e,`popover`,r);break;case`xlinkActuate`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Lt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=on.get(n)||n,Lt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:rn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?en(e,r):(typeof r==`number`||typeof r==`bigint`)&&en(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!At.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[_t]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Lt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Yt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Zt(e,!!r,n,!0):Zt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}$t(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(an(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Jt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Zt(e,!!n,n?[]:``,!1):Zt(e,!!n,t,!0)):Zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Qt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(an(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Ct]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),wt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[Ct])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);wt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=D.d;D.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Et(e);t!==null&&t.tag===5&&t.type===`form`?js(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=qt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),k(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+qt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+qt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+qt(n.imageSizes)+`"]`)):i+=`[href="`+qt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),k(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+qt(r)+`"][href="`+qt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),k(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Ot(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);k(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),k(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),k(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=_e.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Ot(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Ot(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Ot(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+qt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),k(t),e.head.appendChild(t))}function Pf(e){return`[src="`+qt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+qt(n.href)+`"]`);if(r)return t.instance=r,k(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),k(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,k(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),k(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,k(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),k(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ct]||a[gt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,k(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),k(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=at(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=at(0),this.hiddenUpdates=at(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=_i(3,null,null,t),e.current=a,a.stateNode=e,t=ha(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ja(a),e}function tp(e){return e?(e=hi,e):hi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Xa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Za(e,r,t),n!==null&&(hu(n,e,t),Qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=fi(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=dt(t);var n=fi(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,up(e,t,n,r)}finally{D.p=a,E.T=i}}function lp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,up(e,t,n,r)}finally{D.p=a,E.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Et(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=et(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-qe(o);s.entanglements[1]|=c,o&=~c}rd(a),!(W&6)&&(nu=Fe()+500,id(0,!1))}}break;case 31:case 13:s=fi(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=dn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Tt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ie()){case Le:return 2;case Re:return 8;case ze:case Be:return 32;case Ve:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Et(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Tt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);un=r,n.target.dispatchEvent(r),un=null}else return t=Et(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Et(n);a!==null&&(e.splice(t,3),t-=3,ks(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[_t]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[_t]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[vt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=pt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.7`)throw Error(i(527,Lp,`19.2.7`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{We=zp.inject(Rp),Ge=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Qs,s=$s,c=ec;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[vt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u()),v=c(g()),y=/^[#=_-]{4,}$/,b=/^(Example|Output|Note|Syntax|Ans|Assignment|Step\s*\d+|Download from here|Installation Doc)/i;function x(e){return y.test(e.trim())}function ee(e){let t=e.trim();return!(!t||b.test(t)||t.length<4||t.length>90||/^[0-9]+[.)]?$/.test(t)||/^[{}\]]+$/.test(t)||/->/.test(t)||/%/.test(t)||/^[a-e]\./i.test(t)||/^\d+\./.test(t)||/public class/i.test(t)||/package /i.test(t))}function S(e){return e.replace(/\s+/g,` `).trim()}function C(e){let t=e.content.split(/\n{2,}/).map(e=>e.trim()).filter(Boolean),n=[],r=[],i=0,a=2400,o=()=>{r.length&&(n.push(r.join(`

`)),r=[],i=0)};for(let e of t){let t=e.length;if(t>a){let t=e.split(`
`),i=[],s=0;for(let e of t)i.length&&s+e.length>a&&(r.length&&o(),n.push(i.join(`
`)),i=[],s=0),i.push(e),s+=e.length;i.length&&(r.length&&o(),n.push(i.join(`
`)));continue}r.length&&i+t>a&&o(),r.push(e),i+=t}return o(),n.length<=1?[e]:n.map((t,r)=>({...e,title:`${e.title} (${r+1}/${n.length})`,content:t}))}function te(e,t){let n=e.map((e,n)=>`${n+t}. ${e.title}`),r=[];for(let e=0;e<n.length;e+=22)r.push({type:`contents`,title:e===0?`Notebook Contents`:`Notebook Contents Continued`,content:n.slice(e,e+22).join(`
`)});return r}function ne(e){let t=e.replace(/\r\n/g,`
`).split(`
`),n=[],r=`Java Notes`,i=[],a=()=>{let e=i.join(`
`).trim();if(!e){i=[];return}n.push({type:`section`,title:S(r),content:e}),i=[]};for(let e=0;e<t.length;e+=1){let n=t[e],o=n.trim(),s=t[e-1]?.trim()??``,c=t[e+1]?.trim()??``,l=o&&x(s)&&x(c),u=o&&c&&x(c);if(!(o&&x(o))){if((l||u)&&ee(o)){a(),r=o,u&&!l&&(e+=1);continue}i.push(n)}}a();let o=n.flatMap(C),s=e.split(`
`).length,c=Math.ceil(o.length/22);return[{type:`cover`,title:`Core Java Notes`,content:[`Pocket notebook edition`,``,`Chapters: ${o.length}`,`Lines of notes: ${s}`,``,`Use Previous and Next to flip pages.`,`Use the chapter jump to move faster.`,``,`Your original note stays intact inside this notebook.`].join(`
`)},...te(o,c+2),...o]}var re=`###############################################\r
Core Java Notes  - 17th June 2025  - 10th June\r
###############################################\r
\r
What is a class?\r
------------------------\r
-> Class helps us to create object in java\r
-> In java we use class keyword to create class.\r
-> Keyword should be in lower case\r
Example :\r
\r
class A {\r
\r
}\r
-> We define the boundary of class using flower brackets\r
\r
Class Naming Convention\r
#######################\r
-> Class name should always start with upper case\r
-> If the class has more than one word then use camel casing, that is\r
first letter of every word should be in upper case\r
\r
\r
Example: Correct\r
-------\r
class Bank {\r
\r
}\r
Example: Correct\r
-------\r
class BankAccountNumber {\r
\r
}\r
Example: InCorrect\r
-------\r
class Bank Account Number {\r
\r
}\r
\r
Example:\r
----------\r
-> Snake Casing-->Should not use for java\r
-> Will Execute without any error\r
\r
public class Bank_Account_Number {\r
 \r
}\r
\r
Example: Class name cannot start with a number\r
----------------------------------------------\r
-> Will give error\r
public class 1Bank {\r
  public static void main(String[] args){\r
     \r
  }\r
}\r
\r
Example:Class name can start with a character follwed by Number\r
---------\r
public class Bank1 {\r
  public static void main(String[] args){\r
     \r
  }\r
}\r
\r
Note:\r
1. Donot use specials characters like #,@ % & etc while creating class\r
2. $Class name will execute. But never create a class with special character $\r
\r
\r
Example:Correct, but not recommended\r
___________\r
public class $A {\r
	public static void main(String[] args) {\r
	\r
	}\r
}\r
\r
Example: For Creating objects in java\r
---------------------------------------\r
\r
public class A {\r
  public static void main(String[] args){\r
     A a1 = new A();\r
     A a2 = new A();\r
     System.out.println(a1);\r
     System.out.println(a2);\r
  }\r
}\r
\r
new keyword:\r
##############\r
\r
-> Using new keyword we send request to class to create object\r
-> Once object is created new keyword will get objects's address and stores that in a reference variable\r
\r
Syntax to create object:\r
-------------------------\r
ClassName variableName = new ClassName();\r
\r
\r
Non-static Variable/ Instance Variable /Object Variables\r
############################################################\r
1. We should create non static variable inside class outside method without using static keyword\r
2. Without creating object we cannot access non static variable\r
\r
\r
Example 1:\r
-----------\r
package p1;\r
public class A {\r
	int x = 10;\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
		System.out.println(a1.x);\r
	}\r
}\r
Ouput: 10\r
\r
\r
Example 2:\r
----------\r
\r
public class A {\r
	int x = 10;\r
	int y = 20;\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
		System.out.println(a1.x);\r
		System.out.println(a1.y);\r
	}\r
}\r
Output:\r
10\r
20\r
\r
-----------------------------------------------------------------\r
3. Every time we create object non-static variable copy is loaded to that object\r
4. Copy of variable in these object's are different. That is if you change the value of variable in one object, those changes cannot be seen in another object\r
\r
Example :\r
----------\r
package p1;\r
public class A {\r
	int x = 10;\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
		System.out.println(a1.x);//10\r
		a1.x = 20;\r
		System.out.println(a1.x);//20\r
		A a2 = new A();\r
		System.out.println(a2.x);//10\r
	}\r
}\r
Output:\r
------\r
10\r
20\r
10\r
\r
5. It is not mandatory to initialize non-static variable. Depending on data type automatically default value will get stored in it.\r
\r
Example:\r
---------\r
public class A {\r
	int x ;\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
		System.out.println(a1.x);\r
		\r
	}\r
}\r
\r
Ouput: 0\r
\r
Static variables:\r
#################\r
\r
1. We should create static variables inside class but outside method with static keyword\r
2. To access static variable we will use below Options\r
a. ClassName.variableName\r
b. variableName (Contraints)\r
c. objectAddress.variableName (Wrong Appraoch but will work)\r
3. It is not mandatory to initialize static variable. Depending on data type automatically default value will get stored in it.\r
\r
Example 1:\r
----------\r
package p1;\r
public class A {\r
	static int x=10;\r
	public static void main(String[] args) {\r
		System.out.println(A.x);\r
		System.out.println(x);\r
		\r
		A a1 = new A();\r
		System.out.println(a1.x);//A.x\r
	}\r
	\r
}\r
Output:\r
10\r
10\r
10\r
\r
Example 2:\r
-----------\r
package p1;\r
public class A {\r
	static int x=10;\r
	public static void main(String[] args) {\r
		System.out.println(A.x);//10\r
		A.x = 100;\r
		System.out.println(A.x);\r
		System.out.println(A.x);\r
	}\r
	\r
}\r
Output:\r
10\r
100\r
100\r
\r
Example 3:\r
----------\r
package p1;\r
public class A {\r
	static int x;\r
	public static void main(String[] args) {\r
		System.out.println(A.x);//0\r
	}\r
	\r
}\r
Output:\r
0\r
\r
Note:\r
------\r
Example 1:\r
-----------\r
package p1;\r
public class A {\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
		a1.test();\r
	}\r
	public void test() {\r
		System.out.println(100);\r
	}\r
	\r
}\r
Output:\r
100\r
\r
Example 2:\r
---------\r
package p1;\r
public class A {\r
	public static void main(String[] args) {\r
		A.test();\r
	}\r
	public static void test() {\r
		System.out.println(100);\r
	}\r
	\r
}\r
Output:\r
100\r
\r
Types of variables in java\r
############################\r
\r
1. Local Variable\r
######################\r
a. Local vaiables should be created inside methods\r
b. We should use local variable within the created method only\r
c. Without initializing if you are using local variable then you will get an error\r
\r
Example 1:\r
------------\r
package p1;\r
public class A {\r
	\r
	public static void main(String[] args) {\r
		int x = 10;\r
		System.out.println(x);\r
	}\r
}\r
Output:\r
10\r
\r
Example 2:\r
-----------\r
package p1;\r
public class A {\r
	\r
	public static void main(String[] args) {\r
		int x = 10;//Created\r
		System.out.println(x);//Using, Correct\r
	}\r
	public void test() {\r
		System.out.println(x);//Error\r
	}\r
}\r
\r
Example 3:\r
----------\r
package p1;\r
public class A {\r
	\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
		a1.test();\r
	}\r
	public void test() {\r
		int x = 10;//Local, Created\r
		System.out.println(x);//Using, Correct\r
	}\r
}\r
Output:\r
10\r
\r
Example 4:\r
----------\r
package p1;\r
public class A {\r
	\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
		a1.test();\r
		System.out.println(x);//Error\r
	}\r
	public void test() {\r
		int x = 10;//Local, Created\r
		System.out.println(x);//Using, Correct\r
	}\r
}\r
\r
Example 5:\r
----------\r
package p1;\r
public class A {\r
	\r
	public static void main(String[] args) {\r
		int x;//Not Initialized\r
		System.out.println(x);//Error\r
	}\r
}\r
\r
2. Static variable:\r
 These variables has global access\r
\r
Example 1:\r
---------\r
package p1;\r
public class A {\r
	static int x = 10;\r
	public static void main(String[] args) {\r
		System.out.println(A.x);\r
		A a1 = new A();\r
		a1.test();\r
	}\r
	public void test() {//Non static\r
		System.out.println(A.x);\r
	}\r
}\r
Output:\r
10\r
10\r
\r
3. Non-static variable / instance variable\r
\r
4. Reference Variable\r
#####################\r
a. Can hold either Object address or null value\r
\r
Example 1:\r
----------\r
package p1;\r
public class A {\r
	public static void main(String[] args) {\r
		A a1 = null; //Object is not created, but reference variable is created\r
		A a2 = new A();//Storing Object address inside a2\r
		\r
		System.out.println(a1);\r
		System.out.println(a2);\r
	}\r
}\r
Ouput:\r
null\r
p1.A@4517d9a3\r
\r
b. Datatype of reference variable is class name\r
Example 2: A x;\r
\r
Example 3:\r
In the below example "a1" is created inside main and hence it is a local variable. We cannot access that outside main method\r
\r
package p1;\r
public class A {\r
	public static void main(String[] args) {\r
		A a1 = new A();//local, created\r
		System.out.println(a1);//Using, Correct\r
	}\r
	public void test() {\r
		System.out.println(a1);//Error\r
	}\r
}\r
\r
\r
Example 4:\r
Error because "a1" is local variable and not initialized\r
\r
public class A {\r
	\r
	public static void main(String[] args) {\r
		A a1;\r
		System.out.println(a1);//Error\r
	}\r
}\r
Example 5: If we donot initialize static reference variable then by default null value will get stored in it\r
\r
Example:\r
public class A {\r
	static A a1;\r
	public static void main(String[] args) {\r
		System.out.println(a1);\r
	}\r
	\r
	\r
}\r
\r
Example:\r
public class A {\r
	static A a1;\r
	public static void main(String[] args) {\r
		System.out.println(a1);//null\r
		a1 = new A();//Creating Object\r
		a1.test();//Calling test\r
	}\r
	public void test() {\r
		System.out.println(a1);//Pring object address\r
	}\r
	\r
	\r
}\r
\r
Note:\r
Stack - > LIFO (Last In First Out)\r
Heap - > Objects are created inside heap memory\r
Garbage Collector - > Manages Memory to avoid overflow of memory by constantly removing objects that is not is use from heap memory\r
\r
Heap and stack memory\r
#####################\r
\r
###############\r
methods in java\r
###############\r
1. void keyword: A void method cannot return any value\r
\r
Example 1:\r
----------\r
public class C {\r
	public static void main(String[] args) {\r
		\r
	}\r
	\r
	public void test() {\r
		return 100;//Error\r
	}\r
}\r
\r
Example 2:\r
-----------\r
public class C {\r
	public static void main(String[] args) {\r
		C c1 = new C();\r
		int x = c1.test();\r
		System.out.println(x);\r
	}\r
	\r
	public int test() {\r
		return 100;\r
	}\r
}\r
Output: 100\r
\r
Example:\r
----------\r
public class C {\r
	public static void main(String[] args) {\r
		C c1 = new C();\r
		String x = c1.test();\r
		System.out.println(x);\r
	}\r
	\r
	public String test() {\r
		return "mike";\r
	}\r
}\r
Output:\r
mike\r
\r
return keyword versus return "value"\r
#####################################\r
return keyword:\r
-> A method has to be void\r
-> It is optional\r
-> it will return control to method calling statement\r
\r
Example:\r
-------\r
\r
public class C {\r
	public static void main(String[] args) {\r
	  C c1 = new C();\r
	  c1.test();\r
	}\r
	\r
	public void test() {\r
		System.out.println(100);\r
		return;\r
	}\r
}\r
Output: 100\r
\r
Note: if we write code after return keyword, then that code will 100% not run. This error is called as unreachable code error\r
\r
Example\r
-------\r
public class A {\r
	public static void main(String[] args) {\r
		A a1  = new A();\r
		a1.test();\r
	}\r
	public void test() {\r
		System.out.println(100);\r
		return;\r
		System.out.println(200);//Unreachable code error\r
	}\r
}\r
\r
return "value"\r
---------------\r
-> The method has to be not a void method\r
-> It is mandatory to use return "value" statement inside not a void method\r
-> It will return control and value to method calling statement\r
\r
Example\r
-------\r
\r
Example:\r
public class C {\r
	public static void main(String[] args) {\r
	 \r
	}\r
	\r
	public int test() {//Error\r
		\r
	}\r
}\r
Output: Error because return "value" statement is missing inside test method\r
\r
Example:\r
public class C {\r
	public static void main(String[] args) {\r
	 \r
	}\r
	\r
	public int test() {\r
		return 100;\r
		System.out.println(300);\r
	}\r
}\r
Output: Unreachable code error\r
\r
Method Arguments\r
##################\r
-> Using method arguments we supply values to method when we are calling it\r
-> The method argument is a local variable\r
-> arguments inside the method values that you supply to the method should match\r
\r
\r
Example 1:\r
-------\r
public class C {\r
	public static void main(String[] args) {\r
	  C c1 = new C();\r
	  c1.test(100);\r
	}\r
	\r
	public void test(int x) {\r
		System.out.println(x);\r
	}\r
}\r
Output:\r
100\r
\r
Example 2:\r
--------\r
public class C {\r
	public static void main(String[] args) {\r
	  C c1 = new C();\r
	  c1.test(100,"mike");\r
	}\r
	\r
	public void test(int x,String y) {\r
		System.out.println(x);\r
	}\r
}\r
\r
Note: When method argument type is Object, then we can supply any kind of value to it\r
\r
Example 3:\r
--------\r
public class C {\r
	public static void main(String[] args) {\r
	  C c1 = new C();\r
	  c1.test('a');\r
	}\r
	\r
	public void test(Object x) {\r
		System.out.println(x);\r
	}\r
}\r
\r
Example 4:\r
----------\r
public class A {\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
		a1.test(1,2,3,4,5);\r
	}\r
	public void test(int ...x) {//Local variable\r
		System.out.println(x[0]);\r
		System.out.println(x[1]);\r
		System.out.println(x[2]);\r
		System.out.println(x[3]);\r
		System.out.println(x[4]);\r
	}\r
}\r
Output:\r
1\r
2\r
3\r
4\r
5\r
\r
Example 5:\r
--------\r
public class A {\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
		a1.test("mike",1,2,3,4,5);\r
	}\r
	public void test(String y, int ...x) {//Local variable\r
		System.out.println(x[0]);\r
		System.out.println(x[1]);\r
		System.out.println(x[2]);\r
		System.out.println(x[3]);\r
		System.out.println(x[4]);\r
		System.out.println(y);\r
	}\r
}\r
Output:\r
1\r
2\r
3\r
4\r
5\r
mike\r
\r
Static Methods\r
###############\r
\r
public class A {\r
	public static void main(String[] args) {\r
		A.test();		\r
	}\r
	public static void test() {\r
		System.out.println(100);\r
	}\r
}\r
Output:\r
100\r
\r
Example 2:\r
-----------\r
\r
public class A {\r
	public static void main(String[] args) {\r
		int x = A.test();	\r
		System.out.println(x);\r
	}\r
	public static int test() {\r
		return 100;\r
	}\r
}\r
Output:\r
100\r
\r
Example 3:\r
----------\r
public class A {\r
	public static void main(String[] args) {\r
		int x = A.test(100,200);	\r
		System.out.println(x);\r
	}\r
	public static int test(int a, int b) {\r
		return a+b;\r
	}\r
}\r
Output:\r
300\r
\r
Example 4:\r
-----------\r
public class A {\r
	public static void main(String[] args) {\r
		A.test();\r
		A.test();\r
		A.test();\r
	}\r
	public static void test() {\r
		System.out.println(100);\r
	}\r
}\r
Output:\r
100\r
100\r
100\r
\r
Datatypes in java\r
##################\r
Storing integer Values:\r
------------------------------------\r
1. byte - 1 byte - default value: 0\r
2. short - 2 bytes - default value: 0\r
3. int - 4 bytes - default value: 0\r
4. long - 8 byte - default value: 0\r
\r
Floating Value\r
-------------------------------\r
1. float - 4 bytes - default value: 0.0\r
2. double - 8 bytes - default value: 0.0\r
\r
boolean(true/false)\r
----------------------------\r
1. boolean - NA - default: false\r
\r
character values\r
-----------------------\r
1. char - 2 bytes - default: blank space\r
\r
String - Class\r
---------------\r
String - NA - dynamic - default: null\r
Note:\r
byte: -128 to 127 (8-bit signed two's complement integer)\r
short: -32,768 to 32,767 (16-bit signed two's complement integer)\r
int: -2,147,483,648 to 2,147,483,647 (32-bit signed two's complement integer)\r
long: -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 (64-bit signed two's complement integer)\r
float: Approximately ±3.40282347E+38F (32-bit IEEE 754 single-precision floating-point)\r
double: Approximately ±1.79769313486231570E+308 (64-bit IEEE 754 double-precision floating-point)\r
char: 0 to 65,535 (16-bit unsigned Unicode character)\r
boolean: true or false (size is not precisely defined, often considered 1 bit)\r
\r
Datatypes example:\r
---------------------\r
public class C {\r
	static byte x1 ;\r
	static short x2 ;\r
	static int x3 = 23_567 ;\r
	static long x4=9632629033L ;\r
	static float x5=10.3F ;\r
	static double x6 ;\r
	static char x7 ;\r
	static boolean x8 ;\r
	static String x9;\r
	\r
	public static void main(String[] args) {\r
		System.out.println(x1);\r
		System.out.println(x2);\r
		System.out.println(x3);\r
		System.out.println(x4);\r
		System.out.println(x5);\r
		System.out.println(x6);\r
		System.out.println(x7);\r
		System.out.println(x8);\r
		System.out.println(x9);\r
	}\r
	\r
}\r
\r
New type introduced in java version 10\r
---------------------------------------\r
var type\r
#########\r
-> This was introduced in java version 10\r
-> It gives dynamic datatype concept. Depending on the value stored inside variable, dataype is allocated to it internally\r
\r
Example 1:\r
----------\r
public class A {\r
	\r
	public static void main(String[] args) {\r
		var x1 = 100;\r
		var x2 = 10.3F;\r
		var x3 = "mike";\r
		var x4 = false;\r
		var x5 = new A();\r
		var x6 = 'a';\r
		\r
		System.out.println(x1);\r
		System.out.println(x2);\r
		System.out.println(x3);\r
		System.out.println(x4);\r
		System.out.println(x5);\r
		System.out.println(x6);\r
	}\r
}\r
Output:\r
100\r
10.3\r
mike\r
false\r
p1.A@79fc0f2f\r
a\r
\r
-> var type can only be local variable\r
-> It cannot be static / non-static variable\r
-> It cannot be method argument\r
-> It cannot be method return type\r
\r
Example:\r
--------\r
public class C {\r
	var x1;//Error\r
	static var x2;//Error\r
	public static void main(String[] args) {\r
		var x5 = 100;//Correct\r
	}\r
	public var test(var x3) {//Error\r
		\r
	}\r
	\r
}\r
\r
######################\r
Constructors in java\r
######################\r
\r
-> Should have same name as that of class\r
-> It is always void by default\r
\r
Example 1:\r
----------\r
public class A {\r
	A(){\r
		return 100;//--->Error because constructor is always void\r
	}\r
	public static void main(String[] args) {\r
		\r
	}\r
}\r
Example 2:\r
----------\r
-> To call a constructor we have to create object.\r
-> Whenever we create object constructor is being called\r
-> Only after constructor calling object will get initialized. Initialization of object means loading of non static members to it\r
-> Note: Constructors are never loaded to the object\r
public class A {\r
	A(){\r
		System.out.println(100);\r
	}\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
		A a2 = new A();\r
		A a3 = new A();\r
	}\r
}\r
Output:\r
100\r
100\r
100\r
\r
Example 1:Example for default constructor\r
public class A {//--->Correct\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
	}\r
\r
}\r
Default Constructors in java\r
Note: When we run the above progam the following things will happen\r
Step 1: When program is compliled, It will generate byte code that is stored inside a A.class file\r
Step 2: As the program does not have constructor mentioned, then during compilation automatically "empty body no args constructor" will be added in .class file and hence object initialization will take place. This concept is called as default constructor\r
Note: \r
1. Default constructors are not applicable when object with values are created\r
2. Default constructors are not applicable when object with and without values are created  together\r
\r
Example 2:\r
\r
public class A {\r
\r
public static void main(String[] args) {\r
		A a1 = new A(100);//Default constructor not applicable, hence error\r
	}\r
\r
}\r
\r
public class A {\r
A(int x){\r
}\r
public static void main(String[] args) {\r
        A a1 = new A();//Default constructor not applicable, hence error\r
		A a1 = new A(100);\r
	}\r
\r
}\r
\r
-> If you mention return type for a constructor. Then it is treated as a method\r
\r
Example 4:\r
----------\r
public class C {\r
	void C(){\r
		System.out.println(100);\r
	}\r
	public static void main(String[] args) {\r
		C c1 = new C();\r
	}\r
	\r
}\r
\r
Ouput: No Output, because void C() is a method\r
\r
Example 5: \r
Note :\r
-> Method name can be same as class name\r
-> Variable name can be same as class name\r
\r
public class A {\r
	int A=1000;\r
	void A(){//-->Non static Method\r
		System.out.println(100);\r
	}\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
		a1.A();\r
		System.out.println(a1.A);\r
	}\r
}\r
\r
Output:\r
100\r
1000\r
\r
Contructor Overloading:\r
-------------------------\r
Here we create more than one constructor in same class provided they have different number of arguments or different type of arguments\r
\r
Example 1:\r
-----------\r
public class A {\r
	A(){//args=0\r
		System.out.println("A");\r
	}\r
	A(int x){//args=1\r
		System.out.println(x);\r
	}\r
	A(int x,int y){//args=2\r
		System.out.println(x);\r
		System.out.println(y);\r
	}\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
		A a2 = new A(100);\r
		A a3 = new A(200,300);\r
	}\r
	\r
}\r
Output:\r
A\r
100\r
200\r
300\r
\r
Example 2:\r
----------\r
public class A {\r
	A(int x){//args=1, type=int\r
		System.out.println(x);\r
	}\r
	A(float x){//args=1, type=float\r
		System.out.println(x);\r
	}\r
	\r
	public static void main(String[] args) {\r
		A a1 = new A(100);\r
		A a2 = new A(10.3f);\r
	}\r
	\r
}\r
Output:\r
100\r
10.3\r
\r
Example:\r
---------\r
public class A {\r
	A(int x){//noOfArgs=1, type=int\r
		System.out.println(x);\r
	}\r
	A(String x, int y){//noOfArgs=2, type=String, int\r
		System.out.println(x);\r
		System.out.println(y);\r
	}\r
	public static void main(String[] args) {\r
		A a1 = new A("mike",100);\r
		A a2 = new A(500);\r
		\r
	}\r
}\r
\r
Output:\r
-------\r
mike\r
100\r
500\r
\r
############\r
this keyword\r
#############\r
-> this keyword is a special reference variable that hold's object's address\r
\r
Example 1:\r
---------\r
public class A {\r
\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
		System.out.println(a1);\r
		a1.test();\r
	}\r
	public void test() {\r
		System.out.println(this);\r
	}\r
}\r
Output:\r
p1.A@79fc0f2f\r
p1.A@79fc0f2f\r
\r
-> Using this keyword we can access non-static members of the class\r
Example 2:\r
--------\r
\r
public class A {\r
	int x = 10;\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
		System.out.println(a1.x);\r
		a1.test();\r
	}\r
	public void test() {\r
		System.out.println(this.x);\r
	}\r
}\r
Output:\r
10\r
10\r
\r
Example 3:\r
----------\r
public class A {\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
		a1.test1();\r
	}\r
	public void test1() {\r
		this.test2();\r
	}\r
	public void test2() {\r
		System.out.println(100);\r
	}\r
}\r
Output:\r
100\r
\r
-> We cannot use this keyword inside "static method"\r
\r
Example 4:\r
-----------\r
\r
public class A {\r
	public static void main(String[] args) {\r
		System.out.println(this);//-->Error, cannot be used inside static method\r
	}\r
	public static void test() {\r
		System.out.println(this);//-->Error, cannot be used inside static method\r
	}\r
	\r
}\r
\r
Example 5:\r
---------------\r
public class A {\r
	int x = 10;\r
	int y = 10;\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
		a1.test();\r
		\r
	}\r
	public void test() {\r
		System.out.println(this.x);\r
		System.out.println(this.y);\r
	}\r
	\r
}\r
Output\r
10\r
10\r
\r
-> this keyword hold's current object address that is executing\r
\r
Example:\r
-------\r
public class A {\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
		a1.test();\r
		\r
		A a2 = new A();\r
		a2.test();\r
		a1.test();\r
		\r
	}\r
	public void test() {\r
		System.out.println(this);\r
	}\r
	\r
}\r
Output:\r
p1.A@79fc0f2f\r
p1.A@50040f0c\r
p1.A@79fc0f2f\r
\r
this()- This syntax is used to call constructor\r
--------------------------------------------\r
-> Using this() keyword we can call a constructor\r
\r
\r
Example:\r
-------\r
public class A {\r
	A(){\r
		System.out.println("A");\r
	}\r
	A(int x){\r
		this();\r
	}\r
	public static void main(String[] args) {\r
	   A a1 = new A(100);\r
	}\r
	\r
}\r
Output:\r
A\r
\r
-> While calling a constructor using this() keyword, ensure calling is done from another constructor only\r
\r
Example:\r
--------\r
public class A {\r
	A(){\r
		System.out.println("A");\r
	}\r
	A(int x){\r
		this();\r
	}\r
	public static void main(String[] args) {\r
	   A a1 = new A(100);\r
	}\r
	public void test() {\r
		this();//Error, we cannot call constructor from method\r
	}\r
	\r
}\r
\r
Example:\r
---------\r
public class A {\r
	A(int x){\r
		System.out.println(x);\r
	}\r
	A(){\r
		this(100);\r
	}\r
	public static void main(String[] args) {\r
	   A a1 = new A();\r
	}\r
	\r
	\r
}\r
Output\r
100\r
\r
-> While calling a constructor using this() keyword ensure it is always first statement inside another constructor\r
\r
Example:\r
---------\r
public class A {\r
	A(int x){\r
		System.out.println(x);\r
	}\r
	A(){\r
		System.out.println(200);\r
		this(100);//Error because it cannot be second statement while calling constructor\r
		\r
	}\r
	public static void main(String[] args) {\r
	   A a1 = new A();\r
	}\r
	\r
	\r
}\r
\r
Example:\r
---------\r
public class A {\r
	int x;//-->0\r
	A(int x){////Step 4-->x=100\r
		this.x=x;//Step 5\r
		System.out.println(this.x);//Step 6===>100\r
	}\r
	A(){//Step 2\r
		this(100);//Step 3\r
	}\r
	public static void main(String[] args) {\r
	   A a1 = new A();//Step 1\r
	}\r
	\r
	\r
}\r
\r
Constructor Chaining\r
---------------------\r
-> When we call one constructor from another constructor it will form chain like flow structure. This is called as constructor chaining\r
-> This can be achieved by using this() keyword or Creating Object in another constructor\r
\r
Example 1:\r
----------\r
public class A {\r
	A(){\r
		System.out.println("A");\r
	}\r
	A(int x){\r
		this();\r
	}\r
	public static void main(String[] args) {\r
		A a1 = new A(100);\r
	}\r
}\r
\r
Example 2:\r
-----------\r
public class A {\r
	A(){\r
		System.out.println("A");\r
	}\r
	A(int x){\r
		A a2 = new A();\r
	}\r
	public static void main(String[] args) {\r
		A a1 = new A(100);\r
	}\r
}\r
\r
###############################\r
Important Shortcuts in eclipse\r
################################\r
1. Ctrl + Space\r
⚡ Content Assist — suggests code completions.\r
\r
Example: \r
a. syso  (do control+ space bar)\r
b. main (do control+ space bar)\r
\r
2. Ctrl + 1\r
💡 Quick fix — suggests solutions for errors or warnings.\r
\r
Example: String x = 100; (Press control + 1 to get solutions to fix problem) \r
\r
3. Ctrl + O\r
🧭 Quick outline — shows methods/fields of the current class.\r
\r
Example:\r
public class Animal {\r
\r
    private String name;\r
    private int age;\r
   \r
    public Animal(String name, int age) {\r
        this.name = name;\r
        this.age = age;\r
    }\r
\r
    public void eat() {\r
        System.out.println(name + " is eating.");\r
    }\r
\r
    public void sleep() {\r
    	\r
        System.out.println(name + " is sleeping.");\r
    }\r
\r
    private void breathe() {\r
    	System.out.println(name + " is breathing.");\r
    }\r
}\r
\r
-> in the above file when pressed Control + O we will get soo all  content of like like shown below:\r
\r
Animal \r
-> name\r
-> age\r
-> Animal(String name, int age)\r
-> eat()\r
-> sleep() etc.....\r
\r
4. F3\r
🔄 Go to the declaration of a variable, method, or class.\r
\r
Example: \r
public class Animal {\r
\r
    private String name;// Will show this step, as variable is declared here\r
    private int age;\r
   \r
    public Animal(String name, int age) {\r
        this.name = name; // When placed cusor on this.name, and pressed f3\r
        this.age = age;\r
    }\r
\r
    public void eat() {\r
        System.out.println(name + " is eating.");\r
    }\r
\r
    public void sleep() {\r
    	\r
        System.out.println(name + " is sleeping.");\r
    }\r
\r
    private void breathe() {\r
    	System.out.println(name + " is breathing.");\r
    }\r
}\r
\r
5. Ctrl + .\r
➡️ Jump to the next error or warning in the file.\r
public class Dog {\r
	\r
	int x//This is your first error. When pressed control + .\r
	\r
	public static void main(String[] args) {\r
		int y//It will take you to this error\r
	}\r
\r
}\r
##########################\r
Packages in java\r
###########################\r
a. Packages are folders created in java to store programs in organized manner\r
b. This will make maintainance of the project easy\r
c. Naming Convention for packages\r
-> Package name cannot be keyword like - new , static, public , in etc...\r
-> Donot start package name with capital letters\r
-> Package name not to be given as java\r
\r
d. When you create a class inside package, we have to define package keyword in our program as shown below:\r
\r
Example:\r
package p1;\r
public class A {\r
\r
}\r
\r
e. Create 2 classes in same package and perform inheritance. Import is not required\r
Example:\r
package p1;\r
public class A {\r
\r
}\r
\r
package p1;\r
public class B extends A {\r
\r
}\r
f. Create 2 classes in different package and perform inheritance. "Import required"\r
\r
Example:\r
package p1;\r
public class A {\r
\r
}\r
\r
package p2;\r
import p1.A;\r
public class C extends A{\r
\r
}\r
\r
Example :\r
package p1;\r
public class A {\r
\r
}\r
package p1;\r
public class B {\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
	}\r
}\r
\r
Example:\r
package p1;\r
public class A {\r
\r
}\r
\r
package p1;\r
public class B {\r
	\r
}\r
\r
package p2;\r
import p1.*;\r
public class C {\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
		B b1 = new B();\r
	}\r
}\r
\r
Example:\r
package p1;\r
public class A {\r
\r
}\r
\r
package p2;\r
public class A {\r
	\r
}\r
\r
package p3;\r
public class B {\r
	public static void main(String[] args) {\r
		p1.A a1 = new p1.A();//---> p2\r
		p2.A a2 = new p2.A();//---> p1\r
	}\r
}\r
\r
---------------------------------------\r
Example:\r
\r
package p1;\r
public class A {\r
\r
}\r
\r
package p2;\r
public class A {\r
	\r
}\r
\r
package p3;\r
import p2.A;\r
public class B {\r
	public static void main(String[] args) {\r
		p1.A a1 = new p1.A();//---> p2\r
		A a2 = new A();//---> p1\r
	}\r
}\r
\r
Example\r
--------\r
package com.tcs.service;\r
\r
public class EmailService {\r
	public void sendEmail() {\r
		System.out.println("Sending Email....");\r
	}\r
}\r
package com.tcs.auth;\r
\r
import com.tcs.service.EmailService;\r
\r
public class MainClass {\r
	public static void main(String[] args) {\r
		EmailService es = new EmailService();\r
		es.sendEmail();\r
	}\r
}\r
Output:\r
Sending Email....\r
\r
#######################################\r
Object Oriented Programming -  Pillars\r
########################################\r
\r
a. inheritance\r
b. polymorphism\r
c. encapsulation\r
d. abstraction\r
\r
\r
a. inheritance\r
######################\r
-> Here we inherit the members of parent class to child class so that we can re-use those members\r
Example 1:\r
---------\r
package app_java_1;\r
public class Animal {\r
	public void eat() {\r
		System.out.println("Eating");\r
	}\r
	public void sleep() {\r
		System.out.println("sleeping");\r
	}\r
}\r
\r
package app_java_1;\r
public class Dog extends Animal{\r
	public static void main(String[] args) {\r
		Dog d = new Dog();\r
		d.eat();\r
		d.sleep();\r
	}\r
}\r
Output:\r
------\r
Eating\r
sleeping\r
\r
Example 2:\r
package app_java_1;\r
public class Animal {\r
	public void eat() {\r
		System.out.println("Eating");\r
	}\r
	public void sleep() {\r
		System.out.println("sleeping");\r
	}\r
}\r
Animal.java\r
\r
package app_java_1;\r
public class Dog extends Animal{\r
	//eat(),sleep()--->Animal\r
}\r
Dog.java\r
\r
package app_java_1;\r
public class Cat extends Animal{\r
	//eat(),sleep()--->Animal\r
}\r
Cat.java\r
\r
package app_java_1;\r
public class Cow extends Animal{\r
	//eat(),sleep()--->Animal\r
}\r
Cow.java\r
\r
package app_java_1;\r
public class Root {\r
	public static void main(String[] args) {\r
		Dog d = new Dog();\r
		d.eat();\r
		d.sleep();\r
		System.out.println("_______");\r
		Cat cat = new Cat();\r
		cat.eat();\r
		cat.sleep();\r
		System.out.println("_______");\r
		Cow cow = new Cow();\r
		cow.eat();\r
		cow.sleep();\r
	}\r
}\r
Root.java\r
\r
Example 3: Multilevel inheritance\r
-----------------------------------\r
\r
package app_java_1;\r
public class A {\r
	public void test1() {\r
		System.out.println(1);\r
	}\r
}\r
\r
package app_java_1;\r
//test1, test2\r
public class B extends A{\r
	public void test2() {\r
		System.out.println(2);\r
	}\r
}\r
package app_java_1;\r
\r
public class C extends B{\r
	public static void main(String[] args) {\r
		C c1 = new C();\r
		c1.test1();\r
		c1.test2();\r
	}\r
}\r
output:\r
1\r
2\r
\r
################################################################################################\r
What is mulitlpe inheritance?\r
Answer: When a child class has more than one parent class, it is called as mulitple inheritance\r
#################################################################################################\r
\r
Note: Java classes does not support mulitple inheritance because of diamond problem\r
diamond problem: Suppose we inherit a method from A->B->D  and Same method is inherited from A->C->D, then confusion from which parent class method is inherited to child class D. This is called as DIAMOND PROBLEM. Hence in java classes does not support multiple inheritance\r
\r
Note: We can do mulitple inheritance on interface. But will explain this during interfaces concept\r
\r
Example 4:Mulitple inheritance error\r
------------------------------------------\r
package app_java_1;\r
public class A {\r
	\r
}\r
\r
package app_java_1;\r
public class B{\r
	\r
}\r
package app_java_1;\r
public class C extends A,B{//Error\r
	\r
}\r
\r
Example 4: Inheritance between classes present inside different packages\r
----------------------------------------\r
package p1;\r
public class A {\r
	public void test() {\r
		System.out.println(1);\r
	}\r
}\r
package p2;\r
import p1.A;\r
public class B extends A{\r
	public static void main(String[] args) {\r
		B b1 = new B();\r
		b1.test();\r
	}\r
}\r
\r
Example on non sub class: When in your project we have two class and no inheritance is happening between them then it is called as non-sub class\r
--------------------------------------------------------------------------------------------------------\r
\r
Example on non sub class: When in your project we have two class and no inheritance is happening between them then it is called as non-sub class\r
--------------------------------------------------------------------------------------------------------\r
package p1;\r
public class A {\r
	public void test() {\r
		System.out.println(1);\r
	}\r
}\r
package p2;\r
import p1.A;\r
public class B {\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
		a1.test();\r
	}\r
}\r
------------------------------------------------------------\r
Output: 1\r
\r
###############################\r
Access Specifiers in java\r
###############################\r
--------------------------------------------------------------------\r
Questions:\r
1. What happens when a variable is  private/default/protected/public\r
2. What happens when a constructor is  private/default/protected/public\r
3. What happens when a class is  private/default/protected/public\r
4. What happens when a interface is  private/default/protected/public\r
----------------------------------------------------------------------\r
\r
\r
-> They define the visibility of variables, methods, class & interface.\r
\r
------------------------------------------------------------------------------\r
a. private: When a variable / method is made private then we can access that in same class but not outside class\r
----------------------------------------------------------------------------------\r
\r
Example 1:\r
package p1;\r
public class A {\r
	private int x=10;\r
	private void test() {\r
		System.out.println(1);\r
	}\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
		System.out.println(a1.x);\r
		a1.test();\r
	}\r
}\r
Output:\r
10\r
1\r
\r
Example 2:\r
package p1;\r
public class A {\r
	private int x=10;\r
	private void test() {\r
		System.out.println(1);\r
	}\r
}\r
package p1;\r
public class B extends A{\r
	public static void main(String[] args) {\r
		B b1 = new B();\r
		System.out.println(b1.x);//Error\r
		b1.test();//Error\r
	}\r
}\r
\r
Example 3:\r
package p1;\r
public class A {\r
	private int x=10;\r
	private void test() {\r
		System.out.println(1);\r
	}\r
	\r
}\r
package p1;\r
\r
public class B {\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
		System.out.println(a1.x);//Error\r
		a1.test();//Error\r
	}\r
}\r
\r
Example 4:\r
package p1;\r
public class A {\r
	private int x=10;\r
	private void test() {\r
		System.out.println(1);\r
	}\r
	\r
}\r
package p2;\r
import p1.A;\r
public class C extends A {\r
	public static void main(String[] args) {\r
		C c1 = new C();\r
		System.out.println(c1.x);//-->Error\r
		c1.test();//-->Error\r
	}\r
}\r
Example 5:\r
package p1;\r
public class A {\r
	private int x=10;\r
	private void test() {\r
		System.out.println(1);\r
	}\r
	\r
}\r
package p2;\r
import p1.A;\r
public class C  {\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
		System.out.println(a1.x);//-->Error\r
		a1.test();//-->Error\r
	}\r
}\r
\r
------------------------------------------------------------------------\r
b. default: A variable/method with default access specifier can work only inside same class or same package, but cannot be accessed in different package\r
Example 1:\r
------------\r
\r
package p1;\r
public class A {\r
	int x=10;\r
	void test() {\r
		System.out.println(1);\r
	}\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
		System.out.println(a1.x);\r
		a1.test();\r
	}\r
	\r
}\r
Example 2:\r
---------------------------------------------\r
package p1;\r
public class A {\r
	int x=10;\r
	void test() {\r
		System.out.println(1);\r
	}\r
	\r
}\r
package p1;\r
public class B extends A{\r
	public static void main(String[] args) {\r
		B b1 = new B();\r
		System.out.println(b1.x);\r
		b1.test();\r
	}\r
}\r
Output:\r
10\r
1\r
\r
-----------------------------------------------------------------------\r
Example 3:\r
------------\r
package p1;\r
public class A {\r
	int x=10;\r
	void test() {\r
		System.out.println(1);\r
	}\r
	\r
}\r
package p1;\r
public class B {\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
		System.out.println(a1.x);\r
		a1.test();\r
	}\r
}\r
\r
-----------------------------------------------------------------\r
Example 4:\r
------------------------\r
package p1;\r
public class A {\r
	int x=10;\r
	void test() {\r
		System.out.println(1);\r
	}\r
	\r
}\r
package p2;\r
import p1.A;\r
public class C  extends A{\r
	public static void main(String[] args) {\r
		C c1 = new C();\r
		System.out.println(c1.x);//-->Error\r
		c1.test();//-->Error\r
	}\r
}\r
\r
--------------------------------------------------------\r
Example 5:\r
----------------\r
package p1;\r
public class A {\r
	int x=10;\r
	void test() {\r
		System.out.println(1);\r
	}\r
	\r
}\r
package p2;\r
import p1.A;\r
public class C {\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
		System.out.println(a1.x);//--->Error\r
		a1.test();//--->Error\r
	}\r
}\r
\r
c. protected: We can access variables/methods in same class/same package and inside different package only when inheritance is done\r
\r
Example 1:\r
-------------\r
package p1;\r
public class A {\r
	protected int x=10;\r
	protected void test() {\r
		System.out.println(1);\r
	}\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
		System.out.println(a1.x);\r
		a1.test();\r
	}\r
	\r
}\r
Ouput:\r
10\r
1\r
\r
Example 2:\r
------------------\r
package p1;\r
public class A {\r
	protected int x=10;\r
	protected void test() {\r
		System.out.println(1);\r
	}\r
}\r
package p1;\r
public class B extends A{\r
	public static void main(String[] args) {\r
		B b1 = new B();\r
		System.out.println(b1.x);\r
		b1.test();\r
	}\r
}\r
Output:\r
10\r
1\r
\r
Example 3:\r
----------\r
package p1;\r
public class A {\r
	protected int x=10;\r
	protected void test() {\r
		System.out.println(1);\r
	}\r
}\r
package p1;\r
public class B {\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
		System.out.println(a1.x);\r
		a1.test();\r
	}\r
}\r
Ouput:\r
10\r
1\r
Example 4: \r
-----------\r
package p1;\r
public class A {\r
	protected int x=10;\r
	protected void test() {\r
		System.out.println(1);\r
	}\r
}\r
package p2;\r
import p1.A;\r
public class C extends A{\r
	public static void main(String[] args) {\r
		C c1 = new C();\r
		System.out.println(c1.x);\r
		c1.test();\r
	}\r
}\r
Ouput:\r
10\r
1\r
Example 5:\r
--------------\r
package p1;\r
public class A {\r
	protected int x=10;\r
	protected void test() {\r
		System.out.println(1);\r
	}\r
}\r
package p2;\r
import p1.A;\r
public class C {\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
		System.out.println(a1.x);//----> Error\r
		a1.test();//----> Error\r
	}\r
}\r
------------------------------------------------------\r
d. public: When we make variable/method public then we can access that in sam class/same package/different package\r
\r
Example 1:\r
package p1;\r
public class A {\r
	public int x=10;\r
	public void test() {\r
		System.out.println(1);\r
	}\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
		System.out.println(a1.x);\r
		a1.test();\r
	}\r
}\r
Ouput:\r
10\r
1\r
\r
Example 2:\r
-----------\r
package p1;\r
public class A {\r
	public int x=10;\r
	public void test() {\r
		System.out.println(1);\r
	}\r
	\r
}\r
package p1;\r
public class B extends A{\r
	public static void main(String[] args) {\r
		B b1 = new B();\r
		System.out.println(b1.x);\r
		b1.test();\r
	}\r
}\r
Ouput:\r
10\r
1\r
Example 3:\r
-------------------------------------------\r
\r
package p1;\r
public class A {\r
	public int x=10;\r
	public void test() {\r
		System.out.println(1);\r
	}\r
	\r
}\r
package p1;\r
public class B {\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
		System.out.println(a1.x);\r
		a1.test();\r
	}\r
}\r
Output:\r
10\r
1\r
\r
Example 4:\r
--------------\r
package p1;\r
public class A {\r
	public int x=10;\r
	public void test() {\r
		System.out.println(1);\r
	}\r
	\r
}\r
package p2;\r
import p1.A;\r
public class C extends A {\r
	public static void main(String[] args) {\r
		C c1 = new C();\r
		System.out.println(c1.x);\r
		c1.test();\r
	}\r
}\r
Output:\r
10\r
1\r
\r
Example 5:\r
------------\r
package p1;\r
public class A {\r
	public int x=10;\r
	public void test() {\r
		System.out.println(1);\r
	}\r
	\r
}\r
package p2;\r
import p1.A;\r
public class C {\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
		System.out.println(a1.x);\r
		a1.test();\r
	}\r
}\r
Output:\r
10\r
1\r
########################################################\r
Access Specifier on Constructors\r
#######################################################\r
\r
Can we Inherit Constructor?\r
Answer: We cannot inherit constructor\r
\r
a. private Constructor\r
----------------------------\r
-> If a constructor is made private then its object cannot be created outside the class\r
\r
Example 1:\r
package p1;\r
public class A {\r
	private A() {\r
		\r
	}\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
	}\r
	\r
}\r
package p1;\r
public class B {\r
	public static void main(String[] args) {\r
		A a1 = new A();//--->Error\r
	}\r
}\r
package p2;\r
import p1.A;\r
public class C {\r
	public static void main(String[] args) {\r
		A a1 = new A();//-->Error\r
	}\r
}\r
\r
-> When a constructor is made private then inheritance of that class is not allowed\r
(Note: Construct are not inherit)\r
\r
Example 2:\r
----------\r
package p1;\r
public class A {\r
	private A() {\r
		\r
	}\r
	\r
}\r
package p1;\r
public class B extends A{//-->Error\r
	\r
}\r
package p2;\r
import p1.A;\r
public class C extends A{//-->Error\r
	\r
}\r
\r
b. default Constructor\r
-------------------------\r
-> If a constructor is made default then its object can be created in same class/same package but not outside the package\r
\r
Example 1:\r
----------\r
package p1;\r
public class A {\r
	A() {\r
		\r
	}\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
	}\r
}\r
package p1;\r
public class B {\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
	}\r
}\r
package p2;\r
import p1.A;\r
public class C{\r
	public static void main(String[] args) {\r
		A a1 = new A();//-->Error\r
	}\r
}\r
\r
-> When a constructor is made default then inheritance of that class is  allowed only in same package but not outside the package\r
(Note: Construct are not inherit)\r
\r
Example 2:\r
----------\r
package p1;\r
public class A {\r
	A() {\r
		\r
	}\r
	\r
}\r
package p1;\r
public class B extends A {\r
	\r
}\r
package p2;\r
import p1.A;\r
public class C extends A{//-->Error\r
	\r
}\r
\r
e. protected Constructor\r
--------------------------\r
-> If a constructor is made protected then its object can be created in same class/same package but not outside the package \r
\r
Example 1:\r
---------\r
package p1;\r
public class A {\r
	protected A() {\r
		\r
	}\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
	}\r
}\r
package p1;\r
public class B  {\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
	}\r
}\r
package p2;\r
import p1.A;\r
public class C {\r
	public static void main(String[] args) {\r
		A a1 = new A();//-->Error\r
	}\r
}\r
\r
-> When a constructor is made protected then inheritance of that class is  allowed in same package / outside the package (both)\r
(Note: Construct are not inherit)\r
\r
Example 2:\r
----------\r
package p1;\r
public class A {\r
	protected A() {\r
		\r
	}\r
	\r
}\r
package p1;\r
public class B extends A {\r
	\r
}\r
package p2;\r
import p1.A;\r
public class C extends A {\r
	\r
}\r
\r
e. public Constructor\r
------------------------\r
-> If a constructor is made public then its object can be created in same class/same package and outside the package also\r
\r
Example 1:\r
---------\r
package p1;\r
public class A {\r
	public A() {\r
		\r
	}\r
	public static void main(String[] args) {\r
		 A a1 = new A();\r
	}\r
}\r
package p1;\r
public class B  {\r
	public static void main(String[] args) {\r
		 A a1 = new A();\r
	}\r
}\r
package p2;\r
import p1.A;\r
public class C  {\r
	public static void main(String[] args) {\r
		 A a1 = new A();\r
	}\r
}\r
\r
-> When a constructor is made public then inheritance of that class is  allowed in same package / outside the package (both)\r
(Note: Construct are not inherit)\r
\r
Example 2:\r
----------\r
package p1;\r
public class A {\r
	public A() {\r
		\r
	}\r
	\r
}\r
package p1;\r
public class B extends A {\r
	\r
}\r
package p2;\r
import p1.A;\r
public class C extends A {\r
	\r
}\r
\r
########################################\r
Access Specifier on Class\r
########################################\r
-> A class can be only public / default\r
-> A class cannot be private / protected\r
\r
What happens when a class is made default?\r
Answer:\r
->  It's object can be created in same class/same package but not inside different package\r
-> Inheritance is allowed in same package\r
\r
Example 1:\r
package p1;\r
class A {\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
	}\r
}\r
package p1;\r
public class B {\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
	}\r
}\r
package p2;\r
import p1.A;//--->Error\r
public class C {\r
	public static void main(String[] args) {\r
		A a1 = new A();//--->Error\r
	}\r
}\r
\r
Example 2:\r
package p1;\r
class A {\r
	\r
}\r
package p1;\r
public class B extends A{\r
	\r
}\r
package p2;\r
import p1.A;//-->Error\r
public class C extends A{//-->Error\r
	\r
}\r
\r
--------------------------------------------------------------]\r
What happens when a class is made public?\r
Answer:\r
->  It's object can be created in same class/same package & inside different package\r
-> Inheritance is allowed in same package & inside different package\r
\r
Example 1:\r
----------\r
package p1;\r
public class A {\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
	}\r
}\r
package p1;\r
public class B{\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
	}\r
}\r
package p2;\r
import p1.A;\r
public class C{\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
	}\r
}\r
\r
Example 2:\r
-----------------\r
\r
package p1;\r
public class A {\r
	\r
}\r
package p1;\r
public class B extends A{\r
	\r
}\r
package p2;\r
import p1.A;\r
public class C extends A{\r
	\r
}\r
\r
Note: A class cannot be made private\r
---------------------------------------\r
Example :\r
package p1;\r
private class A {//-->Error\r
	\r
}\r
\r
Note: A class cannot be made protected\r
---------------------------------------\r
Example :\r
package p1;\r
protected class A {//-->Error\r
	\r
}\r
\r
\r
\r
########################################\r
Polymorphism in java\r
#########################################\r
\r
Here we develop a feature such that it can take more than one form depending on the situation\r
Note: Polymorphism is applicable only on methods and not variables\r
\r
\r
Two types of polymorphism\r
\r
a. Overriding (Run time polymorphism): \r
-> Here we modify the logic of inherited method in child class\r
\r
Example 1:\r
-----------\r
package p1;\r
public class GoldAccount {\r
	public void onlineBanking() {\r
		System.out.println("yes");\r
	}\r
	public void rateOfInterest() {\r
		System.out.println("nill");\r
	}\r
}\r
GoldAccount.java\r
\r
package p1;\r
public class PlatinumAccount extends GoldAccount {\r
	public void rateOfInterest() {\r
		System.out.println("6% PA");\r
	}\r
	public static void main(String[] args) {\r
		PlatinumAccount p = new PlatinumAccount();\r
		p.onlineBanking();\r
		p.rateOfInterest();//-->6% PA\r
		System.out.println("--------");\r
		GoldAccount g = new GoldAccount();\r
		g.onlineBanking();\r
		g.rateOfInterest();//-->nill\r
	}\r
}\r
PlatinumAccount.java\r
\r
Output:\r
yes\r
6% PA\r
--------\r
yes\r
nill\r
\r
Example 2:\r
-> In version java 5 , A concept of annotations was introduced\r
-> Annotations can instruct compiler to perform a specific task\r
-> @AnnotationName\r
-> @Override: This annotation instructs compiler to check whether overriding is happening or not\r
\r
###################################\r
Note: \r
a. Compile Time: Here our java compiler converts .java files to .class files(byte code)\r
b. Run Time: Here we run .class file(byte code using Java Runtime Environment-JRE).\r
#################################\r
\r
package p1;\r
	public class GoldAccount {\r
		\r
		public void rateOfInterest() {\r
			System.out.println("nill");\r
		}\r
	}\r
GoldAccount.java\r
\r
package p1;\r
public class PlatinumAccount extends GoldAccount {\r
	@Override\r
	public void rateOfInterests() {//-->Error because method name mismatch\r
		System.out.println("6% PA");\r
	}\r
	\r
}\r
PlatinumAccount.java\r
\r
Example 3:\r
---------\r
Question: Access Specifier should it be same or can be different during Overriding?\r
Answer: During Overriding we can increase the scope of access specifier but we cannot reduce the scope of access specifier\r
package p1;\r
public class GoldAccount {\r
\r
	void rateOfInterest() {\r
		System.out.println("nill");\r
	}\r
}\r
GoldAccount.java\r
\r
package p1;\r
public class PlatinumAccount extends GoldAccount {\r
//No Error Because default scope is increase to public	\r
	@Override\r
	public void rateOfInterest() {\r
		System.out.println("6% PA");\r
	}\r
\r
}\r
PlatinumAccount.java\r
\r
Example 4:\r
----------\r
package p1;\r
public class GoldAccount {\r
\r
	public void rateOfInterest() {\r
		System.out.println("nill");\r
	}\r
}\r
\r
package p1;\r
public class PlatinumAccount extends GoldAccount {\r
//Error Because public scope is reduced to default\r
	@Override\r
	void rateOfInterest() {\r
		System.out.println("6% PA");\r
	}\r
\r
}\r
\r
Example 5:\r
-----------\r
package p1;\r
public class GoldAccount {\r
\r
	void rateOfInterest() {\r
		System.out.println("nill");\r
	}\r
}\r
\r
package p1;\r
public class PlatinumAccount extends GoldAccount {\r
//No Error Because default scope is increased to protected\r
	@Override\r
	protected void rateOfInterest() {\r
		System.out.println("6% PA");\r
	}\r
}\r
Example 6:\r
-----------\r
package p1;\r
public class GoldAccount {\r
\r
	private void rateOfInterest() {\r
		System.out.println("nill");\r
	}\r
}\r
\r
package p1;\r
public class PlatinumAccount extends GoldAccount {\r
//Error Because private methods we cannot inherit\r
//Without inheritance Overriding cannot be done\r
	\r
	@Override\r
	protected void rateOfInterest() {\r
		System.out.println("6% PA");\r
	}\r
\r
}\r
\r
####################################\r
Note: \r
-> Static members cannot be inherited\r
Example :\r
package p1;\r
public class GoldAccount {\r
	static int x = 100;\r
	public static void rateOfInterest() {\r
		System.out.println("nill");\r
	}\r
}\r
package p1;\r
\r
public class PlatinumAccount extends GoldAccount {\r
	\r
	public static void main(String[] args) {\r
		PlatinumAccount.rateOfInterest();\r
		System.out.println(PlatinumAccount.x);\r
		//GoldAccount.rateOfInterest();\r
		//GoldAccount.x\r
	}\r
\r
}\r
//PlatinumAccount.rateOfInterest()---->Converted to ------>GoldAccount.rateOfInterest();\r
//PlatinumAccount.x--->Converted---->GoldAccount.x\r
//Hence we are getting output\r
\r
################################################\r
Question : Can we Override static methods?\r
-> We cannot override static methods, as we cannot inherit static methods\r
########################################\r
\r
################################################\r
Question : Can we Override static methods?\r
-> We cannot override static methods, as we cannot inherit static methods\r
########################################\r
\r
Example 1:\r
package p1;\r
public class GoldAccount {\r
	\r
	public static void test() {\r
		System.out.println(100);\r
	}\r
}\r
package p1;\r
\r
public class PlatinumAccount extends GoldAccount {\r
	\r
	@Override\r
	public static void test() {//--->Error, cannot override static methods\r
		System.out.println(100);\r
	}\r
\r
}\r
\r
Example 2: During Overriding method return type should match\r
\r
Example 2: During Overriding method return type should match\r
package p1;\r
public class GoldAccount {\r
	\r
	public int test() {\r
		return 100;\r
	}\r
}\r
package p1;\r
\r
public class PlatinumAccount extends GoldAccount {\r
	\r
	@Override\r
	public void test() {//-> Error because method return type is not matching \r
		System.out.println(100);\r
	}\r
\r
}\r
\r
b. Overloading (Compile time polymorphism)\r
-> Here we develop more than one method with same name in same class provided they have different number of arguments or different type of arguments\r
\r
Example:\r
-> I want to send email with attachment & Also an email to be sent without attachment\r
-> Email feature is taking more than one form\r
\r
package p1;\r
\r
public class EmailService {\r
	public void sendEmail(String to, String subject, String message) {\r
		System.out.println("Email sending....");\r
	}\r
	public void sendEmail(String to, String subject, String message, String filePath) {\r
		System.out.println("Email sending with attachment.....");\r
	}\r
	public static void main(String[] args) {\r
		EmailService service = new EmailService();\r
		service.sendEmail("mike@gmail.com", "Welcome", "Some Message","G:\\\\image.png");\r
	}\r
}\r
\r
################################\r
Final Keyword\r
################################\r
-> If you make a variable final then we cannot change it's value(Just like constant variables)\r
-> If you make static/non-static variable final then initialization is mandatory\r
-> If you make a method final then overriding is not allowed\r
-> If you make a class final then inheritance is not allowed\r
\r
\r
Example 1: \r
----------\r
package p1;\r
\r
public class A {\r
	public static void main(String[] args) {\r
		final int x = 10;\r
		x=20;//-->Cannot change the value of final variable\r
		System.out.println(x);\r
	}\r
}\r
\r
package p1;\r
\r
public class A {\r
	final int x;//->final mandatory to be initialized\r
	final static int y;//->final mandatory to be initialized\r
	//These above errors are called as blank field errors\r
	public static void main(String[] args) {\r
		\r
	}\r
}\r
\r
Example 3:\r
----------\r
package p1;\r
\r
public class A {\r
	final public void test() {\r
		System.out.println(100);\r
	}\r
}\r
package p1;\r
\r
public class B extends A{\r
	@Override\r
	public void test() {//--> Error because we cannot override final methods\r
		System.out.println(100);\r
	}\r
}\r
\r
Example 4:\r
----------\r
package p1;\r
\r
final public class A {\r
	\r
}\r
package p1;\r
\r
public class B extends A{//---> Error because we cannot inherit final class\r
	\r
}\r
\r
#####################################\r
interfaces in java - abstraction\r
#######################################\r
-> An interface can consist of only incomplete methods/abstract methods in it ( Java Version 7)\r
-> All Variables in an interface by default are final & static\r
-> Interfaces defines what needs to be developed and not how it is to be developed\r
-> Interfaces are like contract that a class follows, and the class has to implements these methods\r
-> An Object of interface cannot be created. Because objects cannot have incomplete methods in it\r
-> loosely coupled\r
-> It forces all the implementation classes to have same method name resulting in good design\r
\r
Example 1:\r
---------\r
package p1;\r
\r
public interface A {\r
\r
	public void test1() {//-->Error because complete methods are not allowed in an interface\r
		\r
	}\r
}\r
\r
Example 2:\r
-----------\r
package p1;\r
\r
public interface A {\r
	public void test1() ;\r
}\r
\r
Example 3:\r
----------\r
package p1;\r
\r
public interface NotificationService {\r
\r
	//What needs to be implemented\r
	public void emailService();\r
	public void whatsAppService();\r
	public void smsService();\r
}\r
\r
package p1;\r
\r
public class NotificationServiceImpl \r
implements NotificationService\r
{\r
	//How it will be implemented\r
	@Override\r
	public void emailService() {\r
		System.out.println("Email Sending");\r
	}\r
	@Override\r
	public void whatsAppService() {\r
		System.out.println("Whats app Sending");\r
	}\r
	@Override\r
	public void smsService() {\r
		System.out.println("SMS Sending");\r
	}\r
	public static void main(String[] args) {\r
		NotificationServiceImpl impl = new NotificationServiceImpl();\r
		impl.emailService();\r
		impl.smsService();\r
		impl.whatsAppService();\r
	}\r
}\r
\r
Example 4:\r
----------\r
package p1;\r
\r
public interface PropertyService {\r
\r
	public void addProperty();\r
	public void updateProperty();\r
	public void deleteProperty();\r
	public void searchProperty();\r
}\r
package p1;\r
\r
public class PropertyServiceImpl \r
implements PropertyService\r
{\r
	@Override\r
	public void addProperty() {\r
		System.out.println("Added Property");\r
	}\r
	@Override\r
	public void updateProperty() {\r
		System.out.println("Updated Property");\r
	}\r
	@Override\r
	public void deleteProperty() {\r
		System.out.println("Deleted Property");\r
	}\r
	@Override\r
	public void searchProperty() {\r
		System.out.println("Search Property");\r
	}\r
	public static void main(String[] args) {\r
		PropertyServiceImpl service = new PropertyServiceImpl();\r
		service.addProperty();\r
		service.updateProperty();\r
		service.deleteProperty();\r
		service.searchProperty();\r
	}\r
	\r
}\r
\r
#############################\r
Note: Drawback of inheritance\r
#############################\r
-> Inheritance results in tightly couple programming.\r
\r
Example:\r
---------\r
package p1;\r
\r
public class Dog {\r
\r
	public void noise() {\r
		System.out.println("Bow Bow");\r
	}\r
}\r
\r
package p1;\r
\r
public class Cat extends Dog{\r
	public static void main(String[] args) {\r
		Cat c = new Cat();\r
		c.noise();\r
	}\r
}\r
\r
Example 5:\r
----------\r
package p1;\r
\r
public interface Calculator {\r
	public void add(int x, int y);\r
	public void mul(int x, int y);\r
}\r
\r
package p1;\r
public class OrdinaryCalc implements Calculator{\r
\r
	@Override\r
	public void add(int x, int y) {\r
		System.out.println(x+y);\r
	}\r
	\r
	@Override\r
	public void mul(int x, int y) {\r
		System.out.println(x*y);\r
	}\r
\r
}\r
\r
package p1;\r
\r
public class SciCalc implements Calculator{\r
\r
	@Override\r
	public void add(int x, int y) {\r
		System.out.println(x*x+y*y);\r
	}\r
	\r
	@Override\r
	public void mul(int x, int y) {\r
		int num1 = x*x;\r
		int num2 = y*y;\r
		System.out.println(num1*num2);\r
	}\r
\r
}\r
package p1;\r
\r
public class MainCalc {\r
	public static void main(String[] args) {\r
		OrdinaryCalc oc = new OrdinaryCalc();\r
		oc.add(10, 20);\r
		oc.mul(10, 20);\r
		\r
		SciCalc sc = new SciCalc();\r
		sc.add(10, 20);\r
		sc.mul(10, 20);\r
		\r
		\r
	}\r
}\r
\r
Advantages of interfaces\r
---------------------------\r
\r
\r
1. abstraction: hiding of implementation details. That is we define what needs to be developed and not how it needs to be developed\r
2. It imposes contract on a class to implement all methods of an interface\r
3. Results in good design\r
4. loosely coupled\r
\r
-> All Variables by default in an interface are final and static\r
----------------------------------------------------------------\r
package p1;\r
\r
//-> All variables in the given program are final & static\r
//-> Hence intialization is mandatory\r
public interface A {\r
	int MAX_VAL=100;\r
	static final int MIN_VAL=0;\r
}\r
package p1;\r
\r
public class B {\r
	public static void main(String[] args) {\r
		System.out.println(A.MAX_VAL);\r
		System.out.println(A.MIN_VAL);\r
	}\r
}\r
Output:\r
100\r
0\r
\r
#################################################\r
Note:\r
-> Class to Class Inheritance --> extends\r
-> interface to interface Inheritance --> extends\r
-> interface to class Inheritance --> implements\r
#################################################\r
\r
\r
Example 1:\r
---------\r
package p1;\r
\r
public interface A {\r
	public void test1();\r
}\r
package p1;\r
\r
public interface B extends A{\r
	public void test2();\r
}\r
package p1;\r
\r
public class C implements B {\r
\r
	@Override\r
	public void test1() {\r
		System.out.println("From test1");\r
	}\r
\r
	@Override\r
	public void test2() {\r
		System.out.println("From test2");\r
	}\r
	public static void main(String[] args) {\r
		C c1 = new C();\r
		c1.test1();\r
		c1.test2();\r
	}\r
\r
}\r
\r
Example 2:\r
-----------\r
package p1;\r
\r
public interface A {\r
	public void test2();\r
}\r
package p1;\r
\r
public interface B {\r
	public void test1();\r
}\r
package p1;\r
\r
public interface C extends  A,B {\r
\r
	\r
}\r
\r
Example 3:\r
----------\r
-> If you do mulitple inheritance on a class then it's parent should be interfaces only\r
\r
package p1;\r
public interface A {\r
	public void test2();\r
}\r
\r
package p1;\r
public interface B {\r
	public void test1();\r
}\r
\r
package p1;\r
public class C implements  A,B {\r
\r
	@Override\r
	public void test1() {\r
		System.out.println("From test1");\r
	}\r
\r
	@Override\r
	public void test2() {\r
		System.out.println("From test2");		\r
	}\r
	public static void main(String[] args) {\r
		C c1 = new C();\r
		c1.test1();\r
		c1.test2();\r
	}\r
	\r
}\r
\r
Example 4:\r
----------\r
-> On class can we perform extends implements together - yes\r
-> But ensure extends is used first and then implements\r
\r
package p1;\r
public interface A {\r
	public void test2();\r
}\r
\r
package p1;\r
public class B {\r
	public void test1() {\r
		System.out.println("From test1");\r
	}\r
}\r
\r
package p1;\r
public class C extends B  implements  A {\r
	@Override\r
	public void test2() {\r
		System.out.println("From test2");		\r
	}\r
	public static void main(String[] args) {\r
		C c1 = new C();\r
		c1.test1();\r
		c1.test2();\r
	}\r
}\r
\r
###############################################################\r
Question: Can i develop incomplete static method in an interface?\r
Answer: We cannot inherit static method & override, hence incomplete static methods are not allowed in an interface\r
\r
Example:\r
package p1;\r
public interface A {\r
	public static void test2();//-------> Error\r
}\r
\r
Note: In an interface a method can only be public/default, it cannot be private/protected\r
Example\r
--------\r
package p1;\r
\r
public interface A {\r
	protected void test1();//----->Error\r
	private void test2();//--->Error\r
	void test3();//----->No Error\r
	public void test4();//--->No Error\r
}\r
\r
Example 2:\r
---------\r
package p1;\r
\r
public interface A {\r
	\r
}\r
\r
package p1;\r
//An object of interface cannot be created\r
//Reference variable of interface can be created\r
public class B {\r
	public static void main(String[] args) {\r
		A a1 = new A();//--->Error\r
		A a2;//--->No Error\r
	}\r
}\r
\r
##################\r
What are marker interface?\r
Answer: Empty Interface is called as marker interface in java\r
#########################\r
\r
Java 8 Features\r
###################\r
1. default keyword:\r
-> Using default keyword we can create complete methods inside interface. This was introduced in java version 8\r
\r
Example 1:\r
--------\r
package p1;\r
public interface A {\r
	default public void test1() {\r
		System.out.println("From test1");\r
	}\r
}\r
\r
package p1;\r
public class B implements A {\r
	public static void main(String[] args) {\r
		B b1 = new B();\r
		b1.test1();\r
	}		\r
}\r
Output:\r
From test1\r
\r
Example 2:\r
----------\r
package p1;\r
public interface A {\r
	default public void test1() {\r
		System.out.println("From test1");\r
	}\r
	public void test2();\r
}\r
\r
package p1;\r
public class B implements A {\r
	public static void main(String[] args) {\r
		B b1 = new B();\r
		b1.test1();\r
		b1.test2();\r
	}\r
	@Override\r
	public void test2() {\r
		System.out.println("From test2");\r
	}		\r
}\r
Output:\r
-------\r
From test1\r
From test2\r
\r
\r
2. Functional Interface:\r
---------------------------\r
-> A functional interface should consist of exactly one incomplete method inside it\r
-> Inside functional interface we can develop any number of complete methods using default keyword\r
-> During inheritance/multiple inheritance if more than one method is inherited to Functional Interface then you will get error. As shown in below examples \r
\r
Example 1:\r
--------------------\r
@FunctionalInterface\r
public interface A {//Error-> Because cannot have ZERO incomplete method\r
}\r
\r
Example 2:\r
----------\r
@FunctionalInterface\r
public interface A {\r
	public void test1();\r
}\r
\r
Output: \r
No Error because it has exactly one incomplete method\r
\r
Example 3:\r
----------\r
@FunctionalInterface\r
public interface A {//Error->A functional interface should consist of exactly one //incomplete method inside it\r
	public void test1();\r
	public void test2();\r
}\r
\r
public static void main(String[] args) {\r
		B b1 = new B();\r
		b1.test1();\r
		b1.test2();\r
		b1.test3();\r
		b1.test4();\r
	}\r
\r
	@Override\r
	public void test1() {\r
		System.out.println("From test 1");\r
	}\r
		\r
}\r
Output:\r
---------\r
From test 1\r
From Test 2\r
From Test 3\r
From Test 4\r
\r
Example 5:\r
-----------\r
package p1;\r
public interface A {\r
	public void test1();\r
}\r
package p1;\r
@FunctionalInterface\r
public interface B extends A{\r
	\r
}\r
Output: No Error\r
\r
Example 2:\r
----------\r
package p1;\r
public interface A {\r
	public void test1();\r
	public void test2();\r
}\r
package p1;\r
@FunctionalInterface\r
public interface B extends A{\r
	\r
}\r
Output: Error because we are inheriting 2 method to functional interface\r
\r
Example 6:\r
---------\r
package p1;\r
public interface A {\r
	public void test1();\r
	\r
}\r
\r
package p1;\r
@FunctionalInterface\r
public interface B extends A{\r
	public void test2();\r
}\r
Output: Output: Error because we are inheriting 1 method to functional interface  and functional interface has a method which totals to 2 methods in an interface\r
\r
3. lambdas expression - \r
-------------------------\r
-> It was introduced in java 8\r
-> Reduces number of lines of code\r
-> Works with functional interfaces\r
-> We can use lambdas expression in stream API\r
\r
How Lambdas Expression Works?\r
\r
Note: Fuctional Programming defines you say "what you want, not how to do it step-by-step"\r
\r
-> Its creates Annonymous class behind the scene. A class without any name is called Annonymous .\r
-> Then lambdas expression creates an object and load the method by implementing inside object.\r
-> Then we use object reference to call that implemented method\r
\r
Example 1:\r
------------\r
package p1;\r
@FunctionalInterface\r
public interface A {\r
	public void test1();\r
	\r
}\r
package p1;\r
public class B{\r
\r
	public static void main(String[] args) {\r
		A a1 = ()->{\r
			System.out.println(100);\r
		};\r
		a1.test1();\r
	}\r
}\r
\r
Example 2:\r
-----------\r
package p1;\r
@FunctionalInterface\r
public interface A {\r
	public void test1(int x);\r
	\r
}\r
package p1;\r
public class B{\r
	public static void main(String[] args) {\r
		A a1 = (int x)->{\r
			System.out.println(x);\r
		};\r
		a1.test1(100);\r
	}\r
}\r
\r
Example 3:\r
----------\r
package p1;\r
@FunctionalInterface\r
public interface A {\r
	public void test1(int x);\r
	default public void test2() {\r
		System.out.println(2);\r
	}\r
	default public void test3() {\r
		System.out.println(3);\r
	}\r
}\r
package p1;\r
public class B{\r
\r
	public static void main(String[] args) {\r
		A a1 = (int y) -> {\r
			System.out.println(y);\r
		};\r
		a1.test1(100);\r
		a1.test2();\r
		a1.test3();\r
	}\r
}\r
\r
4. stream API\r
---------------------\r
Note: to learn Stream API Complete the following first\r
a. Collection (Data Structure)\r
b. Functional Programming\r
\r
5. Optional class - We have to learn exception concept in java first\r
--------------------------------------------\r
\r
Note:\r
What are marker interfaces in java?\r
-> Empty interfaces in java are called as marker interface\r
\r
Example: For marker interface\r
package p1;\r
public interface A {\r
	\r
}\r
\r
---------------------------------------------------\r
Abstract class in java\r
----------------------------\r
-> We can create both complete / incomplete non static methods\r
-> To define non static incomplete method, it mandatory to use abstract keyword\r
-> In an abstract class we can create both static / non static members\r
-> We cannot create static incomplete methods here but we can create complete static methods\r
-> We can create main method inside abstract class\r
-> We cannot create object of abstract class because abstract class can consist of incomplete methods\r
-> We cannot perform multiple inheritance\r
Example 1:\r
----------\r
package p1;\r
abstract public class A {\r
	public void test1() {\r
		\r
	}\r
	abstract public void test2();\r
	public static void test3() {\r
		\r
	}\r
	public static void test4();//Error\r
	public static void main(String[] args) {\r
		A a1 = new A();//Error\r
	}\r
}\r
\r
Example 2: Error because multiple inheritance cannot be done\r
-------------------------------------------------------------\r
package p1;\r
abstract public class A {\r
	\r
}\r
package p1;\r
abstract public class B{\r
\r
	\r
}\r
package p1;\r
public abstract class C extends A,B{//Error\r
\r
}\r
\r
Difference between interface & abstract class\r
-------------------------------------------------\r
a. interface supports mulitple inheritance but abstract class does not support multiple inheritance\r
b. All variables in an interface by default are final & static whereas inside abstract class we can create static/non static/final variables\r
\r
Example:\r
-------\r
package p1;\r
abstract public class A {\r
	static int x = 10;\r
	public static void test() {\r
		System.out.println(100);\r
	}\r
	public static void main(String[] args) {\r
		System.out.println(A.x);\r
		A.test();\r
	}\r
}\r
Output:\r
10\r
100\r
\r
Example :\r
---------\r
package p1;\r
abstract public class A {\r
	int x = 10;\r
	public void test() {\r
		System.out.println(100);\r
	}\r
}\r
package p1;\r
public class B extends A {\r
	public static void main(String[] args) {\r
		B b1 = new B();\r
		System.out.println(b1.x);\r
		b1.test();\r
	}\r
\r
}\r
Output:\r
10\r
100\r
\r
Example :\r
-----------\r
package p1;\r
\r
public interface A {\r
	public void test1();\r
}\r
\r
public abstract class B implements A{\r
	abstract public void test2();\r
}\r
\r
\r
\r
package p1;\r
public class C extends B{\r
	@Override\r
	public void test1() {\r
		System.out.println("From test1");\r
	}\r
	@Override\r
	public void test2() {\r
		System.out.println("From test2");\r
	}\r
	public static void main(String[] args) {\r
		C c1 = new C();\r
		c1.test1();\r
		c1.test2();\r
	}\r
\r
}\r
Output:\r
From test1\r
From test2\r
\r
#############################################################################\r
Note:In java 8 we can develop complete static methods & main method in an interface\r
#################################################################################\r
\r
package p1;\r
public interface A {\r
	static int x = 100;\r
	public static void test1() {\r
		System.out.println("From test1");\r
	}\r
	public static void main(String[] args) {\r
		System.out.println(A.x);\r
		A.test1();\r
	}\r
}\r
Output:\r
100\r
From test1\r
\r
Exception and Exception Handling In Java\r
-------------------------------\r
-> Unexpected events are called exceptions.\r
-> Exceptions will hault your program execution.\r
-> Exceptions will Occur when bad user input is given\r
\r
Example 1:\r
package p1;\r
\r
public class A {\r
	public static void main(String[] args) {\r
		int x = 10;\r
		int y = 0;\r
		int z = x / y;//Stop Program Here\r
		System.out.println(z);\r
		System.out.println("Welcome");\r
	}\r
}\r
Output:\r
Exception in thread "main" java.lang.ArithmeticException: / by zero\r
	at app_java_1/p1.A.main(A.java:7)\r
\r
#######################\r
Exception handling\r
#######################\r
-> To handle exception we will use "try & catch" block in java\r
-> When exception occurs in try block, it will create exception object and that object's address is given to catch block. Catch block will suppress that exception and further code will continue to execute\r
\r
\r
\r
Example :\r
----------\r
package p1;\r
public class A {\r
	public static void main(String[] args) {\r
		try {\r
			int x = 10;\r
			int y = 0;\r
			int z = x/y;\r
			System.out.println(z);\r
		} catch (Exception e) {\r
			e.printStackTrace();\r
		}\r
		System.out.println("Welcome");\r
	}\r
}\r
\r
Types of Exception in java\r
##########################\r
\r
There are two types of exception in java\r
\r
a. Compiletime / Checked Exception - These Exception will occur when .java file is compiled to .class file. That is during compilation we will get this exception\r
\r
b. Runtime / Unchecked Exception - These Exception will occur when we run .class file. That is during runtime\r
\r
Runtime / unchecked Exceptions\r
###############################\r
\r
1. ArithmeticException: This exception will occur when invalid mathematical operations are performed\r
\r
public static void main(String[] args) {\r
		try {\r
			int x = 10;\r
			int y = 0;\r
			int z = x/y;\r
			System.out.println(z);\r
		} catch (ArithmeticException a) {\r
			a.printStackTrace();\r
		}\r
		System.out.println("Welcome");\r
	}\r
}\r
Output:\r
java.lang.ArithmeticException: / by zero\r
	at app_java_1/p1.A.main(A.java:7)\r
Welcome\r
\r
Example 2: %ZERO\r
----------\r
package p1;\r
public class A {\r
	public static void main(String[] args) {\r
		try {\r
			int x = 11;\r
			int y = 0;\r
			int z = x%y;\r
			System.out.println(z);\r
		} catch (ArithmeticException a) {\r
			a.printStackTrace();\r
		}\r
		System.out.println("Welcome");\r
	}\r
}\r
\r
Output:\r
-------\r
java.lang.ArithmeticException: / by zero\r
	at app_java_1/p1.A.main(A.java:7)\r
Welcome\r
\r
2. Null PointerException: This exception will occur when with null reference variable we try to access non static members of the class\r
Example:\r
--------\r
\r
Example:\r
--------\r
package p1;\r
public class A {\r
	int x = 10;\r
	public static void main(String[] args) {\r
		try {\r
			A a1 = null;\r
			System.out.println(a1.x);\r
		} catch (NullPointerException e) {\r
			e.printStackTrace();\r
		}\r
		System.out.println("Welcome");\r
	}\r
}\r
Output:\r
java.lang.NullPointerException: Cannot read field "x" because "a1" is null\r
	at app_java_1/p1.A.main(A.java:7)\r
Welcome\r
\r
Example \r
----------\r
package p1;\r
public class A {\r
	static int x = 10;\r
	public static void main(String[] args) {\r
		try {\r
			A a1 = null;\r
			System.out.println(a1.x);//A.x\r
		} catch (NullPointerException e) {\r
			e.printStackTrace();\r
		}\r
		System.out.println("Welcome");\r
	}\r
}\r
Output:\r
10\r
Welcome\r
\r
Assignment 1 (Unary Operators): https://www.youtube.com/playlist?list=PLQVUMrcSsQIRZOM2vZoh8bPG1nq6X-nTe\r
Assignment 2(Data types & Type Casting): https://www.youtube.com/watch?v=h3TxueBRxnE\r
\r
Note: Default Constructors in java?\r
During compilation automatically empty body ZERO args constructor is added to .class file when developer doesnot creates a constructor explicitly\r
\r
Example 1:\r
package p1;\r
public class A {\r
	\r
	public static void main(String[] args) {\r
		A a1  = new A();\r
	}\r
}\r
//No Error because default constructor will get created\r
\r
Example 2:\r
package p1;\r
public class A {\r
	\r
	public static void main(String[] args) {\r
		A a1  = new A(100);\r
	}\r
}\r
//Error because default constructor will not get created for constructor with arguments \r
\r
Example 3:\r
---------\r
package p1;\r
public class A {\r
	A(int x){\r
		\r
	}\r
	public static void main(String[] args) {\r
		A a1  = new A(100);\r
		A a2 = new A();\r
	}\r
}\r
//Error because default constructor will not get created when object with and without args are created in same program\r
\r
Note:\r
\r
Primitive    Wrapper Class\r
byte		Byte\r
short		Short\r
int		Integer\r
long		Long\r
float		Float\r
double		Double\r
char		Character\r
\r
Example 1: I want to convert String to Integer\r
\r
public class A {\r
	public static void main(String[] args) {\r
		String x = "100";\r
		int  y = Integer.parseInt(x);\r
		System.out.println(y);\r
	}\r
}\r
Output\r
100\r
\r
Example 3:I want to convert String to Double\r
\r
public class A {\r
	public static void main(String[] args) {\r
		String x = "10.3";\r
		double  y = Double.parseDouble(x);\r
		System.out.println(y);\r
		\r
	}\r
}\r
\r
Example 4:\r
-----------\r
package p1;\r
\r
public class A {\r
	public static void main(String[] args) {\r
		try {\r
			String x = "10.3dasdsd";\r
			double  y = Double.parseDouble(x);\r
			System.out.println(y);\r
		} catch (NumberFormatException e) {\r
			e.printStackTrace();\r
		}\r
		System.out.println("Welcome");\r
		\r
	}\r
}\r
Output:\r
java.lang.NumberFormatException: For input string: "10.3dasdsd"\r
	at java.base/jdk.internal.math.FloatingDecimal.readJavaFormatString(FloatingDecimal.java:2054)\r
	at java.base/jdk.internal.math.FloatingDecimal.parseDouble(FloatingDecimal.java:110)\r
	at java.base/java.lang.Double.parseDouble(Double.java:792)\r
	at app_java_1/p1.A.main(A.java:7)\r
Welcome\r
\r
######################\r
What is class upcasting?\r
########################\r
-> Here we store child class object address into parent class reference variable, so that reference variable becomes re-usable\r
\r
Example: Reusing reference variable\r
\r
public class A {\r
	\r
}\r
\r
public class B extends A{\r
\r
}\r
\r
public class C extends A{\r
	public static void main(String[] args) {\r
		A a1 = new B();\r
		System.out.println(a1);\r
		a1 = new C();\r
		System.out.println(a1);\r
	}\r
}\r
\r
Example 2: How we can implement polymorphism for multiple child classes by using same reference variable\r
\r
public class A {\r
	void display() {\r
        System.out.println("Inside class A");\r
    }\r
}\r
\r
public class B extends A{\r
	 @Override\r
	    void display() {\r
	        System.out.println("Inside class B");\r
	    }\r
}\r
\r
public class C extends A{\r
	  @Override\r
	    void display() {\r
	        System.out.println("Inside class C");\r
	    }\r
	public static void main(String[] args) {\r
				\r
		A a1 = new B();\r
		a1.display();    // Calls B's version => "Inside class B"\r
		a1 = new C();\r
		a1.display();    // Calls C's version => "Inside class C"\r
	}\r
}\r
\r
\r
Note:\r
\r
🧠 Why do we do it?\r
1. To reuse the parent class reference for multiple child class objects.\r
2. To enable polymorphism on mulitple child classes.\r
3. To write generic, flexible code that works with different subclasses.\r
\r
Note:\r
instanceof - It will check which class object address is present inside the reference variable\r
\r
\r
Note:\r
instanceof - It will check which class object address is present inside the reference variable\r
\r
Example:\r
\r
public class A {\r
	\r
}\r
\r
public class B extends A{\r
	\r
}\r
\r
public class C extends A{\r
	 \r
	public static void main(String[] args) {\r
				\r
	  A a1 = new B();\r
	  System.out.println(a1 instanceof B);\r
	}\r
}\r
\r
Output:\r
true\r
\r
What is class downcasting?\r
##########################\r
-> Here we store parent class object address into child class reference variable\r
-> To perform downcasting, firstly do upcasting and then perform downcasting\r
Example:\r
---------\r
public class A {\r
	\r
}\r
public class B extends A{\r
	\r
}\r
public class C extends A{\r
	 \r
	public static void main(String[] args) {\r
		\r
		A a1 = new B();\r
		if(a1 instanceof B) {\r
			B b1 = (B)a1;\r
			System.out.println("Downcasting successful!");\r
		}\r
	}\r
}\r
\r
Example:\r
--------\r
public class A {\r
	public void display() {\r
		System.out.println("Inside class A");\r
	}\r
}\r
public class B extends A{\r
	public void showB() {\r
        System.out.println("Inside class B");\r
        }\r
}\r
public class C extends A {\r
	public void showC() {\r
		System.out.println("Inside class C");\r
	}\r
}\r
public class MainClass {\r
	public static void processObject(A obj) {\r
        if (obj instanceof B) {\r
            B b = (B) obj;  // Downcasting to B\r
            b.showB();\r
        } else if (obj instanceof C) {\r
            C c = (C) obj;  // Downcasting to C\r
            c.showC();\r
        } else {\r
            obj.display();\r
        }\r
    }\r
    public static void main(String[] args) {\r
    	processObject(new B());\r
	}\r
}\r
\r
Note:\r
-Using upcasting we can access only parent class members, you cannot access child class members\r
-After upcating to access child class members we have to perform downcasting\r
\r
Example:\r
---------\r
package p1;\r
\r
public class A {\r
	public void display() {\r
		System.out.println("Inside class A");\r
	}\r
}\r
public class B extends A{\r
	public void showB() {\r
       	 System.out.println("Inside class B");\r
        }\r
	public static void main(String[] args) {\r
		A a1 = new B();\r
		if(a1 instanceof B) {\r
			B b1 = (B)a1;\r
			b1.showB();\r
		}\r
		\r
	}\r
}\r
\r
Arrays in java:\r
###############\r
-> In java arrays holds collection of value\r
-> Anything that holds colection of values is called as a data struture\r
-> Array in java is treated as an object\r
-> Arrays starts with index zero\r
-> To store and read values we use this formula in arrays - start_address + index*memory_size\r
-> Memory allocation happens to be in sequence(Continuous).\r
\r
Example 1:\r
----------\r
package p1;\r
public class A {\r
	public static void main(String[] args) {\r
		int[] age = new int[4];\r
		age[0] = 90;\r
		age[1] = 89;\r
		age[2] = 67;\r
		age[3] = 97;\r
	\r
		System.out.println(age[0]);\r
		System.out.println(age[1]);\r
		System.out.println(age[2]);\r
		System.out.println(age[3]);\r
	} \r
	\r
}\r
\r
-> To find size of an array dynamically we will use  public final field "length". When array is created this variable will get initiliazed\r
Example : age.length\r
\r
Example 2:\r
----------\r
package p1;\r
\r
public class A {\r
	public static void main(String[] args) {\r
		int[] age = new int[40];\r
		System.out.println(age.length);\r
	} \r
	\r
}\r
Ouput: 40\r
\r
##########################\r
Unary Operators in java\r
##############################\r
\r
Types:\r
1. Increment Operator\r
   1.1 Post Increment\r
   1.2 Pre Increment\r
\r
2. Decrement Operator\r
   2.1 Post Decrement\r
   2.2 Pre Decrement\r
\r
1.1 Post Increment -  Increment the value of the variable next time you see the same variable\r
\r
Example 1:\r
----------\r
package p1;\r
\r
public class A {\r
	public static void main(String[] args) {\r
		int i=0;\r
		int j = i++;\r
		System.out.println(i);\r
		System.out.println(j);\r
	} \r
	\r
}\r
Output:\r
1\r
0\r
\r
Example 2:\r
----------\r
package p1;\r
\r
public class A {\r
	public static void main(String[] args) {\r
		int i=10;\r
		int j = i++ + i++ + i++;\r
		System.out.println(i);\r
		System.out.println(j);\r
	} \r
	\r
}\r
Ouput:\r
13\r
33\r
\r
Example 3:\r
----------\r
package p1;\r
\r
public class A {\r
	public static void main(String[] args) {\r
		int i=10;\r
				\r
		int j = i++ + i++ + i++ + i++ + i++;\r
		System.out.println(i);\r
		System.out.println(j);\r
	} \r
	\r
}\r
Ouput:\r
15\r
60\r
\r
 1.2 Pre Increment - Increment the value of variable in same step\r
\r
Example 1:\r
-----------\r
package p1;\r
\r
public class A {\r
	public static void main(String[] args) {\r
		int i=10;\r
				\r
		int j = ++i;\r
		\r
		System.out.println(i);\r
		System.out.println(j);\r
	} \r
	\r
}\r
Ouput:\r
11\r
11\r
\r
Example 2:\r
----------\r
package p1;\r
\r
public class A {\r
	public static void main(String[] args) {\r
		int i=10;\r
				\r
		int j = ++i + ++i + ++i;\r
		\r
		System.out.println(i);\r
		System.out.println(j);\r
	} \r
	\r
}\r
Ouput:\r
13\r
36\r
\r
Example 3:\r
---------\r
package p1;\r
\r
public class A {\r
	public static void main(String[] args) {\r
		int i=10;\r
				\r
		int j = ++i + i++ + ++i + i++ + ++i;\r
		\r
		System.out.println(i);\r
		System.out.println(j);\r
	} \r
	\r
}\r
Output:\r
15\r
63\r
\r
 2.1 Post Decrement - Here we decrement the value of i by 1 when we next time see the same variable:\r
\r
Example 1:\r
---------\r
package p1;\r
\r
public class A {\r
	public static void main(String[] args) {\r
		int i=10;\r
				\r
		int j = i-- + i--;\r
		\r
		System.out.println(i);\r
		System.out.println(j);\r
	} \r
	\r
}\r
Output:\r
------\r
8\r
19\r
\r
Example 2:\r
-----------\r
package p1;\r
\r
public class A {\r
	public static void main(String[] args) {\r
		int i=10;\r
				\r
		int j = i-- + i++ + i-- + i--;\r
		\r
		System.out.println(i);\r
		System.out.println(j);\r
	} \r
	\r
}\r
Output:\r
8\r
38\r
\r
 2.2 Pre Decrement -  Here we decrement the value of the variable in same step by 1\r
\r
Example 1:\r
----------\r
package p1;\r
\r
public class A {\r
	public static void main(String[] args) {\r
		int i=10;\r
				\r
		int j = --i + --i;\r
		\r
		System.out.println(i);\r
		System.out.println(j);\r
	} \r
	\r
}\r
\r
#################\r
Scanner class - Is used to provide user input\r
################\r
\r
Example 1:\r
----------\r
package p1;\r
import java.util.Scanner;\r
public class A {\r
	public static void main(String[] args) {\r
		\r
		Scanner scan = new Scanner(System.in);\r
		System.out.println("Enter your name:");\r
		String name = scan.next();//Can read one String word only\r
		System.out.println("Your name is "+name);\r
		System.out.println("Enter your age:");\r
		int age = scan.nextInt();//Can read on Integer value only\r
		System.out.println("Your age is "+age);\r
		System.out.println("Enter your weight:");\r
		float weight = scan.nextFloat();//Can read on float values\r
		System.out.println("Your weight is "+weight);\r
		System.out.println("Enter your Answer:");\r
		boolean ans = scan.nextBoolean();//Can read on float values\r
		System.out.println("Your ans is "+ans);\r
		scan.close();\r
		\r
	} \r
	\r
}\r
Output:\r
Enter your name:\r
mike\r
Your name is mike\r
Enter your age:\r
100\r
Your age is 100\r
Enter your weight:\r
98.34\r
Your weight is 98.34\r
Enter your Answer:\r
true\r
Your ans is true\r
\r
Example 2: How to read multiple String words using nextLine() method\r
--------------------------------------------------------------------------\r
package p1;\r
import java.util.Scanner;\r
public class A {\r
	public static void main(String[] args) {\r
		\r
		Scanner scan = new Scanner(System.in);\r
		System.out.println("Enter your name:");\r
		String name = scan.nextLine();//Can read Multiple String words\r
		System.out.println(name);\r
		scan.close();\r
	} \r
	\r
}\r
\r
Assignment 3 (IIB): https://www.youtube.com/watch?v=_3O2bPWckoI&list=PLbLiFkJgsmq6j_fFlZuy0xIs6upvrML26&index=11\r
Assignment 4 (SIB): https://www.youtube.com/watch?v=tQmvABQgi8k&list=PLbLiFkJgsmq6j_fFlZuy0xIs6upvrML26&index=12\r
Assignment 5 (Super keyword): https://www.youtube.com/watch?v=KETJakbA6tw&list=PLbLiFkJgsmq6j_fFlZuy0xIs6upvrML26&index=14\r
\r
##############\r
Loops in java\r
##############\r
1. for loop\r
Example 1;\r
---------\r
public class A {\r
	public static void main(String[] args) {\r
		\r
		for (int i = 0; i < 4; i++) {//0 to 3\r
			System.out.println(i);\r
		}\r
	} \r
	\r
}\r
\r
Example 2:\r
a. User will enter the pin number 1234\r
b. If the entered pin number is valid , then program should print welcome and stop\r
c. If pin number is invalid, user can attempt to enter pin maximum 3 times.\r
d. If All 3 times pin number is invalid then card blocked message we should get\r
\r
Code:\r
package p1;\r
import java.util.Scanner;\r
//break\r
//1. Can be used only inside loops and switch case statements\r
//2. It stops the for loop execution\r
public class A {\r
	public static void main(String[] args) {\r
		Scanner scan = new Scanner(System.in);\r
		\r
		for(int i=0;i<3;i++) {//0 to 2\r
			System.out.println("Enter the pin number");\r
			int pinNumber = scan.nextInt();\r
			if(pinNumber==1234) {\r
				System.out.println("Welcome");\r
				break;\r
			}else {\r
				System.out.println("Invalid Pin number");\r
				if(i==2) {\r
					System.out.println("Card is blocked");\r
				}\r
			}\r
		}\r
		scan.close();\r
	} \r
	\r
}\r
\r
2. while loop\r
Example 1:\r
----------\r
\r
2. while loop\r
Example 1:\r
----------\r
package p1;\r
public class A {\r
	public static void main(String[] args) {\r
		int i=0;\r
		while(i<3) {//If condition true will enter while loop\r
			System.out.println(i);\r
			i++;\r
		}\r
	}\r
	\r
}\r
\r
Example 2:\r
--------\r
a. Enter the amount, and we should get message please collect cash\r
b. Then prompt a message do you want to continue(yes or no)\r
c. If yes, then again enter the amount and we should get message please collect cash\r
d. If you enter no, then program should stop\r
\r
Code\r
___________\r
public class A {\r
	public static void main(String[] args) {\r
		Scanner scan  = new Scanner(System.in);\r
		String cdn = "yes";\r
		while(cdn.equals("yes")) {\r
			System.out.println("Enter the amount");\r
			int amount = scan.nextInt();\r
			System.out.println("Please collect rs. "+amount);\r
			System.out.println("Do you want to continue(yes/no)?");\r
			cdn = scan.next();\r
			\r
			if(!cdn.equals("yes")) {\r
				System.out.println("Thank you. Visit again");\r
			}\r
		}\r
	}\r
}\r
\r
3. do while loop -  Will run first time without condition check. For second iteration condition will be evaluated\r
\r
Example 1:\r
---------\r
package p1;\r
public class A {\r
	public static void main(String[] args) {\r
		int i=100;\r
		do {\r
			System.out.println(i);\r
			i++;\r
		}while(i<3);\r
	}\r
	\r
}\r
\r
Example 2:\r
----------\r
package p1;\r
public class A {\r
	public static void main(String[] args) {\r
		int i=0;\r
		do {\r
			System.out.println(i);\r
			i++;\r
		}while(i<3);\r
	}\r
	\r
}\r
\r
4. for each loop - \r
-> Works only with data structure\r
-> Can only read value of data structure one by one\r
-> Loop will run until all values reading is not completed in the given data structure\r
\r
\r
Example:\r
package p1;\r
public class A {\r
	public static void main(String[] args) {\r
		int[] age = new int[3];\r
		age[0] = 100;\r
		age[1] = 101;\r
		age[2] = 120;\r
		\r
		for(int x:age) {\r
			System.out.println(x);\r
		}\r
	}\r
	\r
}\r
\r
####################\r
Continuation of Arrays:\r
######################\r
\r
Example 1:\r
----------\r
package p1;\r
public class A {\r
	public static void main(String[] args) {\r
		int[] age = new int[3];\r
		age[0] = 100;\r
		age[1] = 101;\r
		age[2] = 120;\r
		\r
		for (int i = 0; i < age.length; i++) {//0 to 2\r
			System.out.println(age[i]);\r
		}\r
	}\r
	\r
}\r
\r
Example\r
--------\r
public class A {\r
	public static void main(String[] args) {\r
		try {\r
			int[] age = new int[3];\r
			age[0] = 100;\r
			age[1] = 101;\r
			age[2] = 120;\r
			age[3] = 103;\r
		} catch (ArrayIndexOutOfBoundsException e) {\r
			e.printStackTrace();\r
		}\r
		System.out.println("Welcome");\r
	}\r
}\r
\r
Output:\r
java.lang.ArrayIndexOutOfBoundsException: Index 3 out of bounds for length 3\r
	at app_java_1/p1.A.main(A.java:9)\r
Welcome\r
\r
####################\r
Continue Keyword in java\r
#####################\r
\r
The continue keyword is used inside loops (for, while, or do-while) to skip the current iteration and jump to the next one.\r
\r
package p1;\r
public class A {\r
	public static void main(String[] args) {\r
		for (int i = 0; i < 5; i++) {\r
			\r
			if(i==3) {\r
				continue;\r
			}\r
			System.out.println(i);//0 1 2 4\r
		}\r
		\r
	}\r
	\r
}\r
Output:\r
0\r
1\r
2\r
4\r
\r
######################\r
else-if ladder statement\r
######################\r
-> If the user enters yes, it should print pass\r
-> If the user enters no, it should print fail\r
-> If the user enters something else, it should print invalid input\r
\r
Example:\r
-------------\r
package p1;\r
\r
import java.util.Scanner;\r
\r
public class A {\r
	public static void main(String[] args) {\r
		Scanner scan = new Scanner(System.in);\r
		System.out.println("Enter the input(yes/no)");\r
		String value = scan.next();\r
		if(value.equals("yes")) {\r
			System.out.println("Pass");\r
		} else if(value.equals("no")) {\r
			System.out.println("Fail");\r
		} else {\r
			System.out.println("Invalid Input");\r
		}\r
	}\r
	\r
}\r
\r
Operators in java Example\r
---------------------------\r
package p1;\r
\r
//Operators in java\r
\r
public class A {\r
	public static void main(String[] args) {\r
		System.out.println(2==3);\r
		System.out.println(2>1);\r
		System.out.println(2<1);\r
		System.out.println(2>=2);\r
		System.out.println(2<=2);\r
		System.out.println(2!=3);\r
		\r
	}\r
}\r
\r
\r
############################\r
Switch Case\r
############################\r
\r
package p1;\r
\r
import java.util.Scanner;\r
\r
public class A {\r
	public static void main(String[] args) {\r
		Scanner scan = new Scanner(System.in);\r
		System.out.println("Enter the floor number");\r
		int key=scan.nextInt();\r
		switch (key) {\r
		case 1:\r
			System.out.println("1st Floor");\r
			break;\r
		case 2:\r
			System.out.println("2nd Floor");\r
			break;\r
		case 3:\r
			System.out.println("3rd Floor");\r
			break;\r
		default:\r
			System.out.println("Invalid input");\r
			break;\r
		}\r
	}\r
	\r
}\r
\r
###########################################\r
Removing Duplicate elements from an array\r
###########################################\r
-> For the below logic array should be sorted\r
\r
Steps\r
------\r
1. Create a temp array which same size as that of x\r
int[] x = {3,3,4,5,6,6,7};\r
int[] temp = new int[x.length];\r
\r
2. Compare i with i+1 of array x, if not equal copy the value from x[i] to temp[j] and increment j by 1\r
\r
3. When you reach last index of array x, copy that value directly to temp[j];\r
\r
Code:\r
package p1;\r
public class A {\r
	public static void main(String[] args) {\r
		int[] x = {3,3,4,5,6,6};\r
		int[] temp = new int[x.length];\r
		int j=0;\r
		for(int i=0;i<x.length-1;i++) {//i=5\r
			if(x[i]!=x[i+1]) {//with index 5 to 6\r
				temp[j] = x[i];\r
				j++;\r
			}\r
		}\r
		temp[j] = x[x.length-1];\r
		\r
		for(int arr:temp) {\r
			System.out.println(arr);\r
		}\r
	}\r
	\r
}\r
##########################\r
Logic For Swapping\r
##########################\r
##########################\r
Logic For Swapping\r
##########################\r
package p1;\r
public class A {\r
	public static void main(String[] args) {\r
		int x = 10;\r
		int y = 20;\r
		int temp;\r
		\r
		temp=y;\r
		y=x;\r
		x=temp;\r
		\r
		System.out.println(x);\r
		System.out.println(y);\r
	}\r
	\r
}\r
\r
\r
\r
\r
######################################\r
Array Sorting\r
###################################\r
\r
-> Compare x[i] > x[i+1], if true swap the element\r
-> End of first round of comparision heavy element will go to the botton of the array\r
-> Compare x[i] > x[i+1], array length-1 times maximum\r
\r
Code:\r
----\r
package p1;\r
public class A {\r
	public static void main(String[] args) {\r
		int[] x = {35,21,22,14};\r
		//x[i]->x\r
		//x[i+1]-> y\r
		int temp;\r
		for(int j=0;j<x.length-1;j++) {//j=0, 1, 2\r
			for(int i=0;i<x.length-1;i++) {//i=0 1 2 , 0 1 2, 0 1 2\r
				if(x[i]>x[i+1]) {\r
					temp = x[i+1];\r
					x[i+1] = x[i];\r
					x[i]= temp;\r
				}\r
			}\r
		}\r
		\r
		for(int arr:x) {\r
			System.out.println(arr);\r
		}\r
	}\r
	\r
}\r
\r
#################\r
1. Sort and remove duplicate elements\r
2. Get Highest & Lowest Value in an array\r
#################\r
\r
######################\r
File Handling in Java\r
#######################\r
\r
Note: Special Characters\r
               System.out.print(200);\r
		System.out.print("\\n");\r
		System.out.print(300);\r
		System.out.print("\\n");\r
		System.out.print(200);\r
		System.out.print("\\t");\r
		System.out.print(300);\r
\r
a. File\r
-----------\r
Example 1:It holds the given path in variable "f" without check the file exist\r
----------------------------------------------------\r
package p1;\r
import java.io.File;\r
public class A {\r
	public static void main(String[] args) {\r
		File f = new File("E:\\\\april\\\\t1.txt");\r
		System.out.println(f);\r
	}\r
}\r
\r
1. exists() - \r
------------\r
a. It is a non static method present inside File class\r
b. Return type of this method is boolean\r
c. It checks whether the file exists in the given path.\r
d. If file exists, it will return true or else false\r
\r
Example:\r
---------\r
package p1;\r
import java.io.File;\r
public class A {\r
	public static void main(String[] args) {\r
		File f = new File("G:\\\\april\\\\t100.txt");\r
		boolean val = f.exists();\r
		System.out.println(val);\r
	}\r
}\r
\r
2. delete() - \r
------------\r
a. It is a non static method present inside File class\r
b. Return type of this method is boolean\r
c. It deletes the file exists in the given path.\r
d. If file is deleted, it will return true or else false\r
\r
Example:\r
--------\r
package p1;\r
import java.io.File;\r
public class A {\r
	public static void main(String[] args) {\r
		File f = new File("G:\\\\april\\\\t1.txt");\r
		boolean val = f.delete();\r
		System.out.println(val);\r
	}\r
}\r
\r
3.mkdir() - \r
------------\r
a. It is a non static method present inside File class\r
b. Return type of this method is boolean\r
c. It creates folder  in the given path.\r
d. If folder is created, it will return true or else false\r
e. It will not replace existing folder\r
\r
Example:\r
-------\r
package p1;\r
import java.io.File;\r
public class A {\r
	public static void main(String[] args) {\r
		File f = new File("G:\\\\april\\\\p2");\r
		boolean val = f.mkdir();\r
		System.out.println(val);\r
	}\r
}\r
Example: To delete Folder using delete() method\r
------------------------------------------------\r
public class A {\r
	public static void main(String[] args) {\r
		File f = new File("G:\\\\april\\\\p2");\r
		boolean val = f.delete();\r
		System.out.println(val);\r
	}\r
}\r
\r
Note: delete() method can delete folder/file both\r
\r
4.length() - \r
------------\r
a. It is a non static method present inside File class\r
b. Return type of this method is long\r
c. It counts characters with white spaces in the given file.\r
\r
Example- Pankaj Sir academy->18 chars\r
\r
Example:\r
--------\r
package p1;\r
import java.io.File;\r
public class A {\r
	public static void main(String[] args) {\r
		File f = new File("G:\\\\april\\\\t1.txt");\r
		long val = f.length();\r
		System.out.println(val);\r
	}\r
}\r
\r
Note:\r
Compiletime Exception/ Checked Exception\r
_____________________________________________\r
-> These exceptions will occur even when the program is correct/Incorrect\r
-> Handling exception becomes mandatory when it is compile time\r
\r
5. createNewFile()-\r
-------------------\r
a. It is non static method present inside File Class\r
b. It's return type is boolean\r
c. It Throws Compiletime exception. So should be handled before executing the program\r
d. If file is created, it will return true or else false\r
e. Will not replace exisiting file\r
\r
\r
Example:\r
------\r
package p1;\r
import java.io.File;\r
import java.io.IOException;\r
public class A {\r
	public static void main(String[] args) {\r
		try {\r
			File f = new File("G:\\\\april\\\\t1.txt");\r
			boolean val = f.createNewFile();\r
			System.out.println(val);\r
		} catch (IOException e) {\r
			e.printStackTrace();\r
		}\r
	\r
	}\r
}\r
\r
##################\r
IOException in Java\r
############\r
The IOException is a checked exception in Java, part of the java.io package. It is thrown when an Input/Output operation fails or is interrupted.\r
\r
Scenario			Example\r
File not found			Reading a file that doesn't exist\r
File not readable		Permission denied or locked file\r
Network I/O failure		Socket disconnected unexpectedly\r
Stream closed unexpectedly	Trying to read from a closed stream\r
Writing to a full disk		OutputStream write failure\r
\r
6. list()-\r
-------------------\r
a. It is non static method present inside File Class\r
b. It's return type is String[] array\r
c. It gets all files/folders names from a given path\r
\r
Example:\r
-------\r
package p1;\r
import java.io.File;\r
public class A {\r
	public static void main(String[] args) {\r
			File f = new File("G:\\\\april\\\\");\r
			String[] val = f.list();\r
			for(String x: val) {\r
				System.out.println(x);\r
			}\r
			System.out.println(val.length);\r
	}\r
}\r
\r
2. FileReader:\r
#######################\r
-> It can read text file content\r
->read(): int\r
\r
Example 1:\r
-----------\r
package app_java_3;\r
import java.io.FileReader;\r
public class A {\r
	public static void main(String[] args) {\r
		try {\r
			FileReader fr = new FileReader("G:\\\\april\\\\t1.txt");\r
			System.out.println((char)fr.read());\r
		} catch (Exception e) {\r
			e.printStackTrace();\r
		}\r
	}\r
}\r
\r
\r
Example 2:\r
----------\r
\r
package app_java_3;\r
import java.io.File;\r
import java.io.FileReader;\r
public class A {\r
	public static void main(String[] args) {\r
		try {\r
			File f = new File("G:\\\\april\\\\t1.txt");\r
			FileReader fr = new FileReader(f);\r
			for (int i = 0; i < f.length(); i++) {//0 to 3\r
				System.out.print((char)fr.read());\r
			}\r
			fr.close();\r
		} catch (Exception e) {\r
			e.printStackTrace();\r
		}\r
	}\r
}\r
\r
-> read(char[] ch)\r
\r
Example\r
-------\r
package app_java_3;\r
import java.io.File;\r
import java.io.FileReader;\r
public class A {\r
	public static void main(String[] args) {\r
		try {\r
			File f = new File("G:\\\\april\\\\t1.txt");\r
			FileReader fr = new FileReader(f);\r
			char[] ch = new char[(int)f.length()];\r
			fr.read(ch);\r
			\r
			for(char c:ch) {\r
				System.out.print(c);\r
			}\r
			\r
			fr.close();\r
			\r
		} catch (Exception e) {\r
			e.printStackTrace();\r
		}\r
	}\r
}\r
\r
#####################\r
FileWriter class\r
#####################\r
1. It will write content to text file\r
2. If File is not present in given path, it will create a new file\r
3. If the file is present in the given path, then it will replace the existing file by default\r
4. During FileWriter object creation if true is given, then it will not replace existing content of the file. But will create new file if file was not present in given path\r
Example: FileWriter fw = new FileWriter("G:\\\\april\\\\t4.txt",true);\r
5. During FileWriter object creation if false / no boolean value is given, then it will replace existing content of the file and  will create new file if file was not present in given path\r
Example: FileWriter fw = new FileWriter("G:\\\\april\\\\t4.txt",false);\r
Example: FileWriter fw = new FileWriter("G:\\\\april\\\\t4.txt");\r
\r
\r
Example:\r
---------\r
package app_java_3;\r
\r
import java.io.FileWriter;\r
\r
public class A {\r
	public static void main(String[] args) {\r
		try {\r
			FileWriter fw = new FileWriter("G:\\\\april\\\\t4.txt",false);\r
			fw.write(97);//write(int x)\r
			fw.write("100");//write(String x)\r
			\r
			char[] ch = {'a','b','c'};\r
			fw.write(ch);//write(char[] x)\r
			\r
			fw.close();\r
		} catch (Exception e) {\r
			e.printStackTrace();\r
		}\r
	}\r
}\r
\r
Example 2:\r
----------\r
package app_java_3;\r
\r
import java.io.FileWriter;\r
\r
public class A {\r
	public static void main(String[] args) {\r
		try {\r
			FileWriter fw = new FileWriter("G://april//t1.txt");\r
			fw.write("mike");\r
			fw.write("\\n");\r
			fw.write("stallin");\r
			fw.write("\\n");\r
			fw.write("adam");\r
			fw.close();//Save the file content and closes the file\r
		} catch (Exception e) {\r
			e.printStackTrace();\r
		}\r
	}\r
}\r
\r
########################\r
BufferedReader\r
#######################\r
1. This will improve file reading performance\r
2. This should be used with FileReader class, If we use only BufferedReader then FileReading cannot be done\r
3. It has readLine() method. Using this method we can read the entire line from the file\r
\r
Example 1:\r
----------\r
package p1;\r
import java.io.BufferedReader;\r
import java.io.FileReader;\r
public class A {\r
	public static void main(String[] args) {\r
		try {\r
			FileReader fr = new FileReader("G://april//t1.txt");\r
			BufferedReader br = new BufferedReader(fr);\r
			System.out.println((char)br.read());\r
			br.close();\r
			fr.close();\r
		} catch (Exception e) {\r
			e.printStackTrace();\r
		}\r
	}\r
}\r
\r
Example 2:\r
----------\r
package p1;\r
import java.io.BufferedReader;\r
import java.io.FileReader;\r
public class A {\r
	public static void main(String[] args) {\r
		try {\r
			FileReader fr = new FileReader("G://f1//t1.txt");\r
			BufferedReader br = new BufferedReader(fr);\r
			char[] ch = new char[4];\r
			br.read(ch);\r
			for(char c: ch) {\r
				System.out.print(c);\r
			}\r
			br.close();\r
			fr.close();\r
		} catch (Exception e) {\r
			e.printStackTrace();\r
		}\r
	}\r
}\r
\r
Example 3:\r
-----------\r
package p1;\r
import java.io.BufferedReader;\r
import java.io.FileReader;\r
public class A {\r
	public static void main(String[] args) {\r
		try {\r
			FileReader fr = new FileReader("G://f1//t1.txt");\r
			BufferedReader br = new BufferedReader(fr);\r
			for(int i=0;i<3;i++) {\r
				System.out.println(br.readLine());\r
			}\r
			br.close();\r
			fr.close();\r
		} catch (Exception e) {\r
			e.printStackTrace();\r
		}\r
	}\r
}\r
\r
#####################\r
BufferedWriter\r
#####################\r
-> It improves file writing performance\r
-> This should be used with FileWriter class, If we use only BufferedWriter then FileWriting cannot be done\r
-> BufferedWriter class has newline() method\r
Example 1:\r
----------\r
import java.io.BufferedWriter;\r
import java.io.FileWriter;\r
public class A {\r
	public static void main(String[] args) {\r
		try {\r
			FileWriter fw = new FileWriter("G://april//t1.txt",true);\r
			BufferedWriter bw = new BufferedWriter(fw);\r
			bw.write("mike");\r
			bw.newLine();\r
			bw.write(97);\r
			char[] ch = {'b','c','d'};\r
			bw.newLine();\r
			bw.write(ch);\r
			\r
			bw.close();\r
			fw.close();\r
			\r
			\r
		} catch (Exception e) {\r
			e.printStackTrace();\r
		}\r
	}\r
}\r
\r
################################\r
Serialization & Deserialization\r
################################\r
\r
-> Serialization is a process of converting object to byte code and storing that in a file system\r
-> De-Serialization is a process of reading byte code from the file and form Object based on byte code\r
-> To skip writing certain content to object during serialization we can use transient keyword\r
\r
################################\r
Serialization & Deserialization\r
################################\r
\r
-> Serialization is a process of converting object to byte code and storing that in a file system\r
-> De-Serialization is a process of reading byte code from the file and form Object based on byte code\r
-> To skip writing certain content to object during serialization we can use transient keyword\r
\r
Example:\r
--------\r
package p1;\r
import java.io.Serializable;\r
public class A implements Serializable{\r
	String name="mike";\r
	transient String password = "testing";\r
}\r
\r
package p1;\r
import java.io.FileOutputStream;\r
import java.io.ObjectOutputStream;\r
public class B {\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
		try {\r
			FileOutputStream fos = new FileOutputStream("G:\\\\april\\\\file.ser");\r
			ObjectOutputStream oos = new ObjectOutputStream(fos);\r
			oos.writeObject(a1);\r
		\r
			oos.close();\r
			fos.close();\r
		} catch (Exception e) {\r
			\r
			e.printStackTrace();\r
		}\r
		\r
	}\r
}\r
\r
package p1;\r
import java.io.FileInputStream;\r
import java.io.ObjectInputStream;\r
public class C {\r
	public static void main(String[] args) {\r
		try {\r
			FileInputStream fis = new FileInputStream("G:\\\\april\\\\file.ser");\r
			ObjectInputStream ois = new ObjectInputStream(fis);\r
			A a1 = (A)ois.readObject();\r
			System.out.println(a1.name);\r
			System.out.println(a1.password);\r
			\r
			ois.close();\r
		\r
			\r
		} catch (Exception e) {\r
			\r
			e.printStackTrace();\r
		}\r
		\r
	}\r
}\r
\r
##########################################\r
JDBC - Java Database Connnectivity\r
##########################################\r
-> Database: Here we store data in the form of tables permanently\r
-> Popular Databases: MySQl, Postgres, Oracle, SQlServer, MongoDB, Derby, h2Database\r
-> Install MySql Database\r
Download from here: https://dev.mysql.com/downloads/windows/installer/8.0.html\r
-> When you download MySql Workbench you will get the following\r
a. IDE - To Write SQl Query (Structured Query Language)\r
(SQl query is use to interact with the database)\r
b. MySQl Server\r
\r
Installation Doc: https://www.prowesstics.com/blogs/mysql-workbench-installation/\r
\r
-> Launch Mysqlworkbench\r
-> Create psaDB connection\r
-> Create Database: Create Database psaDB\r
-> Connect to Database: use psaDB\r
-> Create Table Student: \r
Create table student(\r
	name varchar(45),\r
    email varchar(128),\r
    mobile varchar(10)\r
)\r
-> Read Table Content: Select * from student\r
-> Insert data to table: insert into student values('mike','mike@gmail.com','9632629033')\r
-> Read Table Content: Select * from student\r
\r
Assignment: Complete SQL Recorded Classes. Access will be given in PSA App. Nearly covered 250+ examples\r
\r
After Installing MySQl Workbench, We can now start with JDBC Concept\r
------------------------------------------------------------------------\r
\r
Example 1: JDBC code to insert data\r
-----------------------------------\r
package jdbc_examples;\r
\r
import java.sql.Connection;\r
import java.sql.DriverManager;\r
import java.sql.Statement;\r
\r
public class A {\r
	public static void main(String[] args) {\r
		try {\r
//Connect to database - use psaDB (SQL)\r
			\r
Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/psadb1","root","test");\r
\r
//Write & execute SQl query\r
Statement stmnt =  con.createStatement();\r
stmnt.executeUpdate("insert into student values('adam','adam@gmail.com','9632629555')");\r
			\r
//Close database connection\r
con.close();\r
} catch (Exception e) {\r
	e.printStackTrace();\r
}\r
}\r
\r
}\r
\r
Example 2: JDBC Code to delete a record\r
---------------------------------------\r
import java.sql.Connection;\r
import java.sql.DriverManager;\r
import java.sql.Statement;\r
\r
public class B {\r
	public static void main(String[] args) {\r
		try {\r
			//Connect to database - use psaDB (SQL)\r
		Connection con = \r
					DriverManager.\r
	getConnection("jdbc:mysql://localhost:3306/psadb1","root","test");\r
					\r
			//Write & execute SQl query\r
			\r
			Statement stmnt =  con.createStatement();\r
			stmnt.executeUpdate("Delete from student where email='adam@gmail.com'");\r
			\r
			//Close database connection\r
			con.close();\r
		} catch (Exception e) {\r
			e.printStackTrace();\r
		}\r
	}\r
\r
}\r
\r
Example 3: JDBC Code to update Record\r
-------------------------------------\r
import java.sql.*;\r
\r
public class C {\r
	public static void main(String[] args) {\r
		try {\r
			//Step Connect to Database\r
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/psadb1", "root", "test");\r
			\r
			//Step 2: Execute SQl Query\r
			Statement stmnt = con.createStatement();\r
			stmnt.executeUpdate("Update student set mobile='9632882052' where email='mike@gmail.com'");\r
			\r
			//Step 3: Close Database Connection\r
			con.close();\r
		} catch (Exception e) {\r
			e.printStackTrace();\r
		}\r
	}\r
}\r
\r
Example 4: JDBC Code to read data from database\r
-----------------------------------------------\r
package p1;\r
\r
import java.sql.*;\r
\r
public class D {\r
	public static void main(String[] args) {\r
		try {\r
			//Step Connect to Database\r
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/psadb1", "root", "test");\r
			\r
			//Step 2: Execute SQl Query\r
			Statement stmnt = con.createStatement();\r
			ResultSet result = stmnt.executeQuery("Select * from student");\r
			\r
			while(result.next()) {\r
				System.out.println(result.getString(1));\r
				System.out.println(result.getString(2));\r
				System.out.println(result.getString(3));\r
			}\r
			\r
			//Step 3: Close Database Connection\r
			con.close();\r
		} catch (Exception e) {\r
			e.printStackTrace();\r
		}\r
	}\r
}\r
\r
###############################################\r
Custom Exceptions in java\r
##############################################\r
"throw keyword is used to throw custom exceptions/builtin exception explicitly"\r
\r
Example 1:\r
package app_java_exceptions;\r
\r
public class InsufficientFunds extends RuntimeException{\r
	public InsufficientFunds(String msg) {\r
		super(msg);\r
	}\r
}\r
package app_java_exceptions;\r
\r
import java.util.Scanner;\r
\r
public class A {\r
	public static void main(String[] args) {\r
		int balance = 250;\r
		Scanner scan = new Scanner(System.in);\r
		System.out.println("Enter the amount");\r
		int amount = scan.nextInt();\r
		if(balance<amount) {\r
			try {\r
				throw new InsufficientFunds("Low Balance");\r
			} catch (InsufficientFunds e) {\r
				System.out.println(e.getMessage());\r
				e.printStackTrace();\r
			}\r
		}else {\r
			System.out.println("Please collect cash!!");\r
		}\r
	}\r
}\r
\r
Example 2:\r
---------\r
package app_java_exceptions;\r
\r
public class BlackListed extends RuntimeException{\r
	public BlackListed(String msg) {\r
		super(msg);\r
	}\r
}\r
\r
package app_java_exceptions;\r
\r
import java.util.Scanner;\r
\r
public class A {\r
	public static void main(String[] args) {\r
		int balance = 250;\r
		Scanner scan = new Scanner(System.in);\r
		System.out.println("Enter the amount");\r
		int amount = scan.nextInt();\r
		if(balance<amount) {\r
			try {\r
				throw new BlackListed("Low Balance");\r
			} catch (BlackListed e) {\r
				System.out.println(e.getMessage());\r
				e.printStackTrace();\r
			}\r
		}else {\r
			System.out.println("Open the gate");\r
		}\r
	}\r
}\r
\r
throws keyword in java\r
###########################\r
-> It will throw method / constructor exceptions to calling statement / compiler\r
\r
package app_java_exceptions;\r
\r
import java.io.FileReader;\r
\r
public class A {\r
	A() throws Exception{\r
		FileReader fr = new FileReader("G:\\\\test\\\\t1.txt");\r
	}\r
	public static void main(String[] args) {\r
	\r
		try {\r
			A a1 = new A();\r
			a1.test();\r
		} catch (Exception e) {\r
			e.printStackTrace();\r
		}\r
	}\r
	\r
	public void test() throws Exception {\r
		FileReader fr = new FileReader("G:\\\\test\\\\t1.txt");\r
	}\r
}\r
\r
Example 2\r
#########\r
package app_java_exceptions;\r
\r
import java.io.FileReader;\r
\r
public class A {\r
	A() throws Exception{\r
		FileReader fr = new FileReader("G:\\\\test\\\\t1.txt");\r
	}\r
	public static void main(String[] args) throws Exception {\r
			A a1 = new A();\r
			a1.test();\r
	}\r
	\r
	public void test() throws Exception {\r
		FileReader fr = new FileReader("G:\\\\test\\\\t1.txt");\r
	}\r
}\r
\r
Multi catch blocks:\r
---------------------\r
\r
-> We can create multiple catch block.\r
-> Always start with child exception class followed by parent exception class\r
\r
Example:\r
---------\r
package p1;\r
\r
public class E {\r
	int x = 10;\r
	public static void main(String[] args) {\r
		try {\r
			Integer.parseInt("ahsjkdhas687");\r
			E a1 = null;\r
			System.out.println(a1.x);\r
			int x = 10/0;\r
		}catch (ArithmeticException e) {\r
			System.out.println(1);\r
		}catch (NullPointerException e) {\r
			System.out.println(2);\r
		}catch (Exception e) {\r
			System.out.println(3);\r
		}\r
		\r
	}\r
}\r
\r
\r
finally block in java\r
###########################\r
\r
-> this is extension of try catch block\r
-> The code that we write in finally block will run 100%, regardless of exception\r
\r
Example:\r
--------\r
public class E {\r
	int x = 10;\r
	public static void main(String[] args) {\r
		try {\r
			int x = 100/0;\r
		}catch (Exception e) {\r
			e.printStackTrace();\r
		}finally {\r
			System.out.println("Finally");\r
		}\r
		\r
	}\r
}\r
Output: Finally\r
\r
Example:\r
--------\r
public class E {\r
	int x = 10;\r
	public static void main(String[] args) {\r
		try {\r
			int x = 100/2;\r
		}catch (Exception e) {\r
			e.printStackTrace();\r
		}finally {\r
			System.out.println("Finally");\r
		}\r
		\r
	}\r
}\r
Output: Finally\r
\r
Example: Can we write only try & catch block: yes\r
--------\r
public class E {\r
	int x = 10;\r
	public static void main(String[] args) {\r
		try {\r
			int x = 100/0;\r
		}finally {\r
			System.out.println("Finally");\r
		}\r
		\r
		System.out.println("Welcome");\r
		\r
	}\r
}\r
Output:\r
Finally\r
Exception in thread "main" java.lang.ArithmeticException: / by zero\r
	at jdbc_examples.E.main(E.java:7)\r
\r
Note: Can u give practical example where finally block can be used?\r
Ans: \r
a. We can peform file closing operation / Database closing Operation\r
\r
Example :\r
package p1;\r
\r
import java.sql.*;\r
\r
public class A {\r
	public static void main(String[] args) {\r
		Connection con = null;\r
		try {\r
			//Step Connect to Database\r
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/psadb1", "root", "test");\r
			\r
			//Step 2: Execute SQl Query\r
			Statement stmnt = con.createStatement();\r
			stmnt.executeUpdate("insert into student values('adam','adam@gmail.com','9632629455')");\r
			\r
			\r
		} catch (Exception e) {\r
			e.printStackTrace();\r
		}finally {\r
			try {\r
				//Step 3: Close Database Connection\r
				con.close();\r
			} catch (Exception e2) {\r
				e2.printStackTrace();\r
			}\r
		}\r
	}\r
}\r
\r
Interview Question:\r
a. Difference between final versus finally versus finalize\r
=============================================================\r
final\r
--------\r
-> final makes variable constant\r
-> final prevents overriding of methods\r
-> final on class stops inheritance\r
\r
finally\r
-------\r
-> this is extension of try catch block\r
-> The code that we write in finally block will run 100%, regardless of exception\r
\r
finalize():\r
----------\r
-> This is a method inside Object class and here Garbage collection logic is implemented\r
-> We can try calling garbage collector using System.gc(). But will not guarantee 100% execution.\r
\r
#########################\r
Encapsulation in Java\r
#########################\r
-> Encapsulation is one of the four fundamental Object-Oriented Programming (OOP) principles in Java (along with inheritance, polymorphism, and abstraction). \r
-> It is the mechanism of wrapping variables and methods together as a single unit and restricting direct access to variables.\r
\r
How to perform Encapsulation:\r
-------------------------------\r
a. Data hiding – Fields (variables) of a class are made private so they cannot be accessed directly from outside the class.\r
\r
Public getter and setter methods – These methods are provided to access and update the value of private fields.\r
\r
Example :\r
-----------\r
public class A {\r
	//Data hiding\r
	private int x;\r
	private int y;\r
	public int getX() {\r
		return x;\r
	}\r
	public void setX(int x) {\r
		this.x = x;\r
	}\r
	public int getY() {\r
		return y;\r
	}\r
	public void setY(int y) {\r
		this.y = y;\r
	}\r
	\r
}\r
\r
\r
public class B {\r
	public static void main(String[] args) {\r
		A a1 = new A();\r
		a1.setX(100);\r
		a1.setY(200);\r
		System.out.println(a1.getX());\r
		System.out.println(a1.getX());\r
	}\r
}\r
\r
#####################\r
Threads in java: - Assignment watch lecture 44 to 49 only. Note further lectures are outdated...\r
##################\r
https://www.youtube.com/watch?v=Uw1tocKJNZw&list=PLbLiFkJgsmq6j_fFlZuy0xIs6upvrML26&index=44\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
`,w=o((e=>{var t=Symbol.for(`react.transitional.element`);function n(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.jsx=n,e.jsxs=n})),T=o(((e,t)=>{t.exports=w()}))();function ie(e,t){return!t||e<0?0:e>t-1?t-1:e}function ae(){let[e]=(0,_.useState)(()=>ne(re)),[t,n]=(0,_.useState)(0),[r,i]=(0,_.useState)(`forward`);function a(t,r){n(n=>ie(t??n,e.length)),i(r)}(0,_.useEffect)(()=>{function e(e){e.key===`ArrowRight`&&a(t+1,`forward`),e.key===`ArrowLeft`&&a(t-1,`backward`)}return window.addEventListener(`keydown`,e),()=>{window.removeEventListener(`keydown`,e)}},[t,a,e.length]);let o=e[t],s=!!o,c=t===0,l=t===e.length-1;return(0,T.jsxs)(`div`,{className:`desk`,children:[(0,T.jsx)(`div`,{className:`desk-glow`,"aria-hidden":`true`}),(0,T.jsxs)(`main`,{className:`workspace`,children:[(0,T.jsxs)(`header`,{className:`workspace-header`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`p`,{className:`eyebrow`,children:`React Notebook`}),(0,T.jsx)(`h1`,{children:`Java Notes Book`}),(0,T.jsx)(`p`,{className:`lead`,children:`A compact notebook with page turning, chapter jumps, and a cleaner book-style layout.`})]}),s?(0,T.jsxs)(`label`,{className:`chapter-picker`,children:[(0,T.jsx)(`span`,{children:`Jump to page`}),(0,T.jsx)(`select`,{value:t,onChange:e=>{let n=Number(e.target.value);a(n,n>t?`forward`:`backward`)},children:e.map((e,t)=>(0,T.jsxs)(`option`,{value:t,children:[t+1,`. `,e.title]},`${e.title}-${t}`))})]}):null]}),(0,T.jsxs)(`section`,{className:`book-frame`,"aria-label":`Notebook`,children:[(0,T.jsxs)(`aside`,{className:`book-spine`,"aria-hidden":`true`,children:[(0,T.jsx)(`div`,{className:`spine-ring-list`,children:Array.from({length:12}).map((e,t)=>(0,T.jsx)(`span`,{className:`spine-ring`},t))}),(0,T.jsx)(`div`,{className:`spine-title`,children:`Core Java Notes`})]}),(0,T.jsxs)(`div`,{className:`book-board`,children:[(0,T.jsx)(`div`,{className:`bookmark`,"aria-hidden":`true`}),(0,T.jsxs)(`article`,{className:`paper-sheet ${r===`forward`?`turn-forward`:`turn-backward`}`,children:[(0,T.jsxs)(`div`,{className:`paper-meta`,children:[(0,T.jsx)(`span`,{className:`chapter-tag chapter-tag-${o?.type??`default`}`,children:o.title}),(0,T.jsx)(`span`,{className:`page-counter`,children:`Page ${t+1} / ${e.length}`})]}),(0,T.jsx)(`div`,{className:`paper-content`,children:(0,T.jsx)(`pre`,{children:o.content})})]},`${t}-${r}`)]})]}),(0,T.jsxs)(`footer`,{className:`book-controls`,children:[(0,T.jsx)(`button`,{className:`page-button`,type:`button`,disabled:c,onClick:()=>a(t-1,`backward`),children:`Previous`}),(0,T.jsxs)(`div`,{className:`page-status`,children:[(0,T.jsx)(`strong`,{children:o.title}),(0,T.jsx)(`span`,{children:`Use arrow keys or buttons to flip pages.`})]}),(0,T.jsx)(`button`,{className:`page-button page-button-primary`,type:`button`,disabled:l,onClick:()=>a(t+1,`forward`),children:`Next`})]})]})]})}v.createRoot(document.getElementById(`root`)).render((0,T.jsx)(_.StrictMode,{children:(0,T.jsx)(ae,{})}));