!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).VueSelect=t()}(this,(function(){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function e(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var o=Array(e),r=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,l=i.length;a<l;a++,r++)o[r]=i[a];return o}var t={inheritAttrs:!1,name:"v-input",props:{modelValue:{required:!0,type:String},placeholder:{required:!0,type:String},isDisabled:{required:!0,type:Boolean}},setup:function(e,t){return{handleInput:function(e){t.emit("input",e),t.emit("update:modelValue",e.target.value)},handleChange:function(e){t.emit("change",e),t.emit("update:modelValue",e.target.value)},handleFocus:function(e){t.emit("focus",e)},handleBlur:function(e){t.emit("blur",e)}}},template:'\n    <input\n      v-model="modelValue"\n      :placeholder="placeholder"\n      :disabled="isDisabled"\n      @input="handleInput"\n      @change="handleChange"\n      @focus="handleFocus"\n      @blur="handleBlur"\n    >\n  '},n={name:"v-multiple-select",props:{modelValue:{required:!0,type:Array},options:{required:!0,type:Array},canBeEmpty:{required:!0,type:Boolean},isMultiple:{required:!0,type:Boolean},minLength:{required:!0,type:Number},maxLength:{required:!0,type:Number}},setup:function(e,t){var n=function(t){return e.isMultiple?e.modelValue.some((function(e){return o(t,e)})):o(e.modelValue,t)},o=function(e,t){return e===t};return{handleClick:function(r){e.isMultiple?n(r)?e.modelValue.length>e.minLength&&(t.emit("remove",r),t.emit("update:modelValue",e.modelValue.filter((function(e){return!1===o(e,r)})))):e.modelValue.length<e.maxLength&&(t.emit("select",r),t.emit("update:modelValue",e.modelValue.concat(r))):1===e.modelValue.length?o(e.modelValue[0],r)?e.canBeEmpty&&(t.emit("remove",e.modelValue[0]),t.emit("update:modelValue",[])):(t.emit("remove",e.modelValue[0]),t.emit("update:modelValue",[]),t.emit("select",r),t.emit("update:modelValue",[r])):(t.emit("select",r),t.emit("update:modelValue",[r]))}}},template:'\n    <ul>\n      <template v-for="option of options">\n        <li\n          @click="handleClick(option)"\n        >{{ option }}</li>\n      </template>\n    </ul>\n  '},o="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},r=o.performance||{};r.now||r.mozNow||r.msNow||r.oNow||r.webkitNow;function i(e,t){const n=Object.create(null),o=e.split(",");for(let e=0;e<o.length;e++)n[o[e]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const a=i("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl"),l=Object.freeze({}),c=[],s=()=>{},u=Object.assign,p=Object.prototype.hasOwnProperty,d=(e,t)=>p.call(e,t),f=Array.isArray,h=e=>"function"==typeof e,m=e=>"string"==typeof e,g=e=>"symbol"==typeof e,y=e=>null!==e&&"object"==typeof e,v=Object.prototype.toString,_=e=>(e=>v.call(e))(e).slice(8,-1),w=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},b=/-(\w)/g,S=w(e=>e.replace(b,(e,t)=>t?t.toUpperCase():"")),k=w(e=>e.charAt(0).toUpperCase()+e.slice(1)),V=(e,t)=>e!==t&&(e==e||t==t);let x;const $=new WeakMap,M=[];let E;const R=Symbol("iterate"),O=Symbol("Map key iterate");function I(e,t=l){(function(e){return e&&!0===e._isEffect})(e)&&(e=e.raw);const n=function(e,t){const n=function(){if(!n.active)return t.scheduler?void 0:e();if(!M.includes(n)){F(n);try{return P.push(j),j=!0,M.push(n),E=n,e()}finally{M.pop(),T(),E=M[M.length-1]}}};return n.id=A++,n._isEffect=!0,n.active=!0,n.raw=e,n.deps=[],n.options=t,n}(e,t);return t.lazy||n(),n}function C(e){e.active&&(F(e),e.options.onStop&&e.options.onStop(),e.active=!1)}let A=0;function F(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let j=!0;const P=[];function T(){const e=P.pop();j=void 0===e||e}function N(e,t,n){if(!j||void 0===E)return;let o=$.get(e);o||$.set(e,o=new Map);let r=o.get(n);r||o.set(n,r=new Set),r.has(E)||(r.add(E),E.deps.push(r),E.options.onTrack&&E.options.onTrack({effect:E,target:e,type:t,key:n}))}function U(e,t,n,o,r,i){const a=$.get(e);if(!a)return;const l=new Set,c=e=>{e&&e.forEach(e=>{e===E&&j||l.add(e)})};if("clear"===t)a.forEach(c);else if("length"===n&&f(e))a.forEach((e,t)=>{("length"===t||t>=o)&&c(e)});else{void 0!==n&&c(a.get(n));const o="add"===t||"delete"===t&&!f(e);(o||"set"===t&&e instanceof Map)&&c(a.get(f(e)?"length":R)),o&&e instanceof Map&&c(a.get(O))}l.forEach(a=>{a.options.onTrigger&&a.options.onTrigger({effect:a,target:e,key:n,type:t,newValue:o,oldValue:r,oldTarget:i}),a.options.scheduler?a.options.scheduler(a):a()})}const B=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(g)),D=K(),L=K(!1,!0),q=K(!0),z=K(!0,!0),H={};function K(e=!1,t=!1){return function(n,o,r){if("__v_isReactive"===o)return!e;if("__v_isReadonly"===o)return e;if("__v_raw"===o&&r===(e?n.__v_readonly:n.__v_reactive))return n;const i=f(n);if(i&&d(H,o))return Reflect.get(H,o,r);const a=Reflect.get(n,o,r);return(g(o)?B.has(o):"__proto__"===o||"__v_isRef"===o)?a:(e||N(n,"get",o),t?a:Re(a)?i?a:a.value:y(a)?e?ke(a):Se(a):a)}}["includes","indexOf","lastIndexOf"].forEach(e=>{H[e]=function(...t){const n=Me(this);for(let e=0,t=this.length;e<t;e++)N(n,"get",e+"");const o=n[e](...t);return-1===o||!1===o?n[e](...t.map(Me)):o}});function W(e=!1){return function(t,n,o,r){const i=t[n];if(!e&&(o=Me(o),!f(t)&&Re(i)&&!Re(o)))return i.value=o,!0;const a=d(t,n),l=Reflect.set(t,n,o,r);return t===Me(r)&&(a?V(o,i)&&U(t,"set",n,o,i):U(t,"add",n,o)),l}}function J(e,t){const n=Reflect.has(e,t);return N(e,"has",t),n}function Y(e){return N(e,"iterate",R),Reflect.ownKeys(e)}const G={get:D,set:W(),deleteProperty:function(e,t){const n=d(e,t),o=e[t],r=Reflect.deleteProperty(e,t);return r&&n&&U(e,"delete",t,void 0,o),r},has:J,ownKeys:Y},Q={get:q,has:J,ownKeys:Y,set:(e,t)=>(console.warn(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0),deleteProperty:(e,t)=>(console.warn(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0)},X=(u({},G,{get:L,set:W(!0)}),u({},Q,{get:z})),Z=e=>y(e)?Se(e):e,ee=e=>y(e)?ke(e):e,te=e=>e,ne=e=>Reflect.getPrototypeOf(e);function oe(e,t,n){e=Me(e);const o=Me(t);t!==o&&N(e,"get",t),N(e,"get",o);const{has:r,get:i}=ne(e);return r.call(e,t)?n(i.call(e,t)):r.call(e,o)?n(i.call(e,o)):void 0}function re(e){const t=Me(this),n=Me(e);e!==n&&N(t,"has",e),N(t,"has",n);const o=ne(t).has;return o.call(t,e)||o.call(t,n)}function ie(e){return N(e=Me(e),"iterate",R),Reflect.get(ne(e),"size",e)}function ae(e){e=Me(e);const t=Me(this),n=ne(t),o=n.has.call(t,e),r=n.add.call(t,e);return o||U(t,"add",e,e),r}function le(e,t){t=Me(t);const n=Me(this),{has:o,get:r,set:i}=ne(n);let a=o.call(n,e);a?_e(n,o,e):(e=Me(e),a=o.call(n,e));const l=r.call(n,e),c=i.call(n,e,t);return a?V(t,l)&&U(n,"set",e,t,l):U(n,"add",e,t),c}function ce(e){const t=Me(this),{has:n,get:o,delete:r}=ne(t);let i=n.call(t,e);i?_e(t,n,e):(e=Me(e),i=n.call(t,e));const a=o?o.call(t,e):void 0,l=r.call(t,e);return i&&U(t,"delete",e,void 0,a),l}function se(){const e=Me(this),t=0!==e.size,n=e instanceof Map?new Map(e):new Set(e),o=ne(e).clear.call(e);return t&&U(e,"clear",void 0,void 0,n),o}function ue(e,t){return function(n,o){const r=this,i=Me(r),a=e?ee:t?te:Z;return!e&&N(i,"iterate",R),ne(i).forEach.call(i,(function(e,t){return n.call(o,a(e),a(t),r)}))}}function pe(e,t,n){return function(...o){const r=Me(this),i=r instanceof Map,a="entries"===e||e===Symbol.iterator&&i,l="keys"===e&&i,c=ne(r)[e].apply(r,o),s=t?ee:n?te:Z;return!t&&N(r,"iterate",l?O:R),{next(){const{value:e,done:t}=c.next();return t?{value:e,done:t}:{value:a?[s(e[0]),s(e[1])]:s(e),done:t}},[Symbol.iterator](){return this}}}}function de(e){return function(...t){{const n=t[0]?`on key "${t[0]}" `:"";console.warn(`${k(e)} operation ${n}failed: target is readonly.`,Me(this))}return"delete"!==e&&this}}const fe={get(e){return oe(this,e,Z)},get size(){return ie(this)},has:re,add:ae,set:le,delete:ce,clear:se,forEach:ue(!1,!1)},he={get(e){return oe(this,e,te)},get size(){return ie(this)},has:re,add:ae,set:le,delete:ce,clear:se,forEach:ue(!1,!0)},me={get(e){return oe(this,e,ee)},get size(){return ie(this)},has:re,add:de("add"),set:de("set"),delete:de("delete"),clear:de("clear"),forEach:ue(!0,!1)};function ge(e,t){const n=t?he:e?me:fe;return(t,o,r)=>"__v_isReactive"===o?!e:"__v_isReadonly"===o?e:"__v_raw"===o?t:Reflect.get(d(n,o)&&o in t?n:t,o,r)}["keys","values","entries",Symbol.iterator].forEach(e=>{fe[e]=pe(e,!1,!1),me[e]=pe(e,!0,!1),he[e]=pe(e,!1,!0)});const ye={get:ge(!1,!1)},ve={get:ge(!0,!1)};function _e(e,t,n){const o=Me(n);if(o!==n&&t.call(e,o)){const t=_(e);console.warn(`Reactive ${t} contains both the raw and reactive versions of the same object${"Map"===t?"as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const we=new Set([Set,Map,WeakMap,WeakSet]),be=i("Object,Array,Map,Set,WeakMap,WeakSet");function Se(e){return e&&e.__v_isReadonly?e:xe(e,!1,G,ye)}function ke(e){return xe(e,!0,Q,ve)}function Ve(e){return xe(e,!0,X,ve)}function xe(e,t,n,o){if(!y(e))return console.warn("value cannot be made reactive: "+String(e)),e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const r=t?"__v_readonly":"__v_reactive";if(d(e,r))return e[r];if((i=e).__v_skip||!be(_(i))||Object.isFrozen(i))return e;var i;const a=new Proxy(e,we.has(e.constructor)?o:n);return((e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})})(e,r,a),a}function $e(e){return function(e){return!(!e||!e.__v_isReadonly)}(e)?$e(e.__v_raw):!(!e||!e.__v_isReactive)}function Me(e){return e&&Me(e.__v_raw)||e}const Ee=e=>y(e)?Se(e):e;function Re(e){return!!e&&!0===e.__v_isRef}function Oe(e){return function(e,t=!1){if(Re(e))return e;let n=t?e:Ee(e);const o={__v_isRef:!0,get value(){return N(o,"get","value"),n},set value(r){V(Me(r),e)&&(e=r,n=t?r:Ee(r),U(o,"set","value",{newValue:r}))}};return o}(e)}const Ie=[];function Ce(e,...t){P.push(j),j=!1;const n=Ie.length?Ie[Ie.length-1].component:null,o=n&&n.appContext.config.warnHandler,r=function(){let e=Ie[Ie.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const o=e.component&&e.component.parent;e=o&&o.vnode}return t}();if(o)je(o,n,11,[e+t.join(""),n&&n.proxy,r.map(({vnode:e})=>`at <${yt(n,e.type)}>`).join("\n"),r]);else{const n=["[Vue warn]: "+e,...t];r.length&&n.push("\n",...function(e){const t=[];return e.forEach((e,n)=>{t.push(...0===n?[]:["\n"],...function({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",o=!!e.component&&null==e.component.parent,r=" at <"+yt(e.component,e.type,o),i=">"+n;return e.props?[r,...Ae(e.props),i]:[r+i]}(e))}),t}(r)),console.warn(...n)}T()}function Ae(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(n=>{t.push(...function e(t,n,o){return m(n)?(n=JSON.stringify(n),o?n:[`${t}=${n}`]):"number"==typeof n||"boolean"==typeof n||null==n?o?n:[`${t}=${n}`]:Re(n)?(n=e(t,Me(n.value),!0),o?n:[t+"=Ref<",n,">"]):h(n)?[`${t}=fn${n.name?`<${n.name}>`:""}`]:(n=Me(n),o?n:[t+"=",n])}(n,e[n]))}),n.length>3&&t.push(" ..."),t}const Fe={bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/vue-next"};function je(e,t,n,o){let r;try{r=o?e(...o):e()}catch(e){Te(e,t,n)}return r}function Pe(e,t,n,o){if(h(e)){const i=je(e,t,n,o);return i&&(y(r=i)&&h(r.then)&&h(r.catch))&&i.catch(e=>{Te(e,t,n)}),i}var r;const i=[];for(let r=0;r<e.length;r++)i.push(Pe(e[r],t,n,o));return i}function Te(e,t,n){const o=t?t.vnode:null;if(t){let o=t.parent;const r=t.proxy,i=Fe[n];for(;o;){const t=o.ec;if(t)for(let n=0;n<t.length;n++)if(t[n](e,r,i))return;o=o.parent}const a=t.appContext.config.errorHandler;if(a)return void je(a,null,10,[e,r,i])}!function(e,t,n){{const r=Fe[t];n&&(o=n,Ie.push(o)),Ce("Unhandled error"+(r?" during execution of "+r:"")),console.error(e),n&&Ie.pop()}var o}(e,n,o)}const Ne=[],Ue=[],Be=Promise.resolve();let De=!1,Le=!1,qe=0,ze=null,He=0;function Ke(e){return e?Be.then(e):Be}function We(e){Ne.includes(e,qe)||(Ne.push(e),Ye())}function Je(e){f(e)?Ue.push(...e):ze&&ze.includes(e,He)||Ue.push(e),Ye()}function Ye(){De||Le||(Le=!0,Ke(Qe))}const Ge=e=>null==e.id?1/0:e.id;function Qe(e){for(Le=!1,De=!0,e=e||new Map,Ne.sort((e,t)=>Ge(e)-Ge(t)),qe=0;qe<Ne.length;qe++){const t=Ne[qe];t&&(Xe(e,t),je(t,null,14))}qe=0,Ne.length=0,function(e){if(Ue.length){for(ze=[...new Set(Ue)],Ue.length=0,e=e||new Map,He=0;He<ze.length;He++)Xe(e,ze[He]),ze[He]();ze=null,He=0}}(e),De=!1,(Ne.length||Ue.length)&&Qe(e)}function Xe(e,t){if(e.has(t)){const n=e.get(t);if(n>100)throw new Error("Maximum recursive updates exceeded. You may have code that is mutating state in your component's render function or updated hook or watcher source function.");e.set(t,n+1)}else e.set(t,1)}const Ze=new Set;(void 0!==o?o:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{}).__VUE_HMR_RUNTIME__={createRecord:tt((function(e){if(et.has(e))return!1;return et.set(e,new Set),!0})),rerender:tt((function(e,t){const n=et.get(e);if(!n)return;Array.from(n).forEach(e=>{t&&(e.render=t),e.renderCache=[],e.update()})})),reload:tt((function(e,t){const n=et.get(e);if(!n)return;Array.from(n).forEach(e=>{const n=e.type;if(!Ze.has(n)){u(n,t);for(const e in n)e in t||delete n[e];Ze.add(n),Je(()=>{Ze.delete(n)})}e.parent?We(e.parent.update):e.appContext.reload?e.appContext.reload():"undefined"!=typeof window?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")})}))};const et=new Map;function tt(e){return(t,n)=>{try{return e(t,n)}catch(e){console.error(e),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}function nt(e){if(e.__props)return e.__props;const t=e.props,n={},o=[];let r=!1;if(__VUE_OPTIONS_API__&&!h(e)){const t=e=>{const[t,r]=nt(e);u(n,t),r&&o.push(...r)};e.extends&&(r=!0,t(e.extends)),e.mixins&&(r=!0,e.mixins.forEach(t))}if(!t&&!r)return e.__props=c;if(f(t))for(let e=0;e<t.length;e++){m(t[e])||Ce("props must be strings when using array syntax.",t[e]);const o=S(t[e]);at(o)&&(n[o]=l)}else if(t){y(t)||Ce("invalid props options",t);for(const e in t){const r=S(e);if(at(r)){const i=t[e],a=n[r]=f(i)||h(i)?{type:i}:i;if(a){const e=it(Boolean,a.type),t=it(String,a.type);a[0]=e>-1,a[1]=t<0||e<t,(e>-1||d(a,"default"))&&o.push(r)}}}}const i=[n,o];return e.__props=i,i}function ot(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}function rt(e,t){return ot(e)===ot(t)}function it(e,t){if(f(t)){for(let n=0,o=t.length;n<o;n++)if(rt(t[n],e))return n}else if(h(t))return rt(t,e)?0:-1;return-1}function at(e){return"$"!==e[0]||(Ce(`Invalid prop name: "${e}" is a reserved property.`),!1)}const lt=function(e,t){t&&!t.isResolved?f(e)?t.effects.push(...e):t.effects.push(e):Je(e)},ct={};function st(e,t,{immediate:n,deep:o,flush:r,onTrack:i,onTrigger:a}=l,c=mt){t||(void 0!==n&&Ce('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),void 0!==o&&Ce('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const u=e=>{Ce("Invalid watch source: ",e,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")};let p,d;if(Re(e)?p=()=>e.value:$e(e)?(p=()=>e,o=!0):f(e)?p=()=>e.map(e=>Re(e)?e.value:$e(e)?pt(e):h(e)?je(e,c,2):void u(e)):h(e)?p=t?()=>je(e,c,2):()=>{if(!c||!c.isUnmounted)return d&&d(),je(e,c,3,[m])}:(p=s,u(e)),t&&o){const e=p;p=()=>pt(e())}const m=e=>{d=_.options.onStop=()=>{je(e,c,4)}};let g=f(e)?[]:ct;const y=()=>{if(_.active)if(t){const e=_();(o||V(e,g))&&(d&&d(),Pe(t,c,3,[e,g===ct?void 0:g,m]),g=e)}else _()};let v;"sync"===r?v=y:"pre"===r?(y.id=-1,v=()=>{!c||c.isMounted?We(y):y()}):v=()=>lt(y,c&&c.suspense);const _=I(p,{lazy:!0,onTrack:i,onTrigger:a,scheduler:v});return t?n?y():g=_():_(),()=>{C(_),c&&((e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)})(c.effects,_)}}function ut(e,t,n){const o=this.proxy;return st(m(e)?()=>o[e]:e.bind(o),t.bind(o),n,this)}function pt(e,t=new Set){if(!y(e)||t.has(e))return e;if(t.add(e),f(e))for(let n=0;n<e.length;n++)pt(e[n],t);else if(e instanceof Map)e.forEach((n,o)=>{pt(e.get(o),t)});else if(e instanceof Set)e.forEach(e=>{pt(e,t)});else for(const n in e)pt(e[n],t);return e}function dt(e,t,n){const o=n.appContext.config.optionMergeStrategies;for(const r in t)o&&d(o,r)?e[r]=o[r](e[r],t[r],n.proxy,r):d(e,r)||(e[r]=t[r])}const ft=u(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>Ve(e.props),$attrs:e=>Ve(e.attrs),$slots:e=>Ve(e.slots),$refs:e=>Ve(e.refs),$parent:e=>e.parent&&e.parent.proxy,$root:e=>e.root&&e.root.proxy,$emit:e=>e.emit,$options:e=>__VUE_OPTIONS_API__?function(e){const t=e.type,{__merged:n,mixins:o,extends:r}=t;if(n)return n;const i=e.appContext.mixins;if(!i.length&&!o&&!r)return t;const a={};return i.forEach(t=>dt(a,t,e)),r&&dt(a,r,e),o&&o.forEach(t=>dt(a,t,e)),dt(a,t,e),t.__merged=a}(e):e.type,$forceUpdate:e=>()=>We(e.update),$nextTick:()=>Ke,$watch:e=>__VUE_OPTIONS_API__?ut.bind(e):s}),ht={get({_:e},t){const{ctx:n,setupState:o,data:r,props:i,accessCache:a,type:c,appContext:s}=e;if("__v_skip"===t)return!0;let u;if("$"!==t[0]){const e=a[t];if(void 0!==e)switch(e){case 0:return o[t];case 1:return r[t];case 3:return n[t];case 2:return i[t]}else{if(o!==l&&d(o,t))return a[t]=0,o[t];if(r!==l&&d(r,t))return a[t]=1,r[t];if((u=nt(c)[0])&&d(u,t))return a[t]=2,i[t];if(n!==l&&d(n,t))return a[t]=3,n[t];a[t]=4}}const p=ft[t];let f,h;return p?("$attrs"===t&&N(e,"get",t),p(e)):(f=c.__cssModules)&&(f=f[t])?f:n!==l&&d(n,t)?(a[t]=3,n[t]):(h=s.config.globalProperties,d(h,t)?h[t]:void 0)},set({_:e},t,n){const{data:o,setupState:r,ctx:i}=e;if(r!==l&&d(r,t))r[t]=n;else if(o!==l&&d(o,t))o[t]=n;else if(t in e.props)return Ce(`Attempting to mutate prop "${t}". Props are readonly.`,e),!1;return"$"===t[0]&&t.slice(1)in e?(Ce(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`,e),!1):(t in e.appContext.config.globalProperties?Object.defineProperty(i,t,{enumerable:!0,configurable:!0,value:n}):i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,type:r,appContext:i}},a){let c;return void 0!==n[a]||e!==l&&d(e,a)||t!==l&&d(t,a)||(c=nt(r)[0])&&d(c,a)||d(o,a)||d(ft,a)||d(i.config.globalProperties,a)},ownKeys:e=>(Ce("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e))};u({},ht,{get(e,t){if(t!==Symbol.unscopables)return ht.get(e,t,e)},has(e,t){const n="_"!==t[0]&&!a(t);return!n&&ht.has(e,t)&&Ce(`Property ${JSON.stringify(t)} should not start with _ which is a reserved prefix for Vue internals.`),n}});let mt=null;const gt=/(?:^|[-_])(\w)/g;function yt(e,t,n=!1){let o=h(t)&&t.displayName||t.name;if(!o&&t.__file){const e=t.__file.match(/([^/\\]+)\.vue$/);e&&(o=e[1])}if(!o&&e&&e.parent){const n=e.parent.components;for(const e in n)if(n[e]===t){o=e;break}}return o?o.replace(gt,e=>e.toUpperCase()).replace(/[-_]/g,""):n?"App":"Anonymous"}return function(){const e=x||(x="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==o?o:{});e.__VUE__=!0,e.__VUE_DEVTOOLS_GLOBAL_HOOK__,console.info("You are running a development build of Vue.\nMake sure to use the production build (*.prod.js) when deploying for production.")}(),{inheritAttrs:!1,props:{modelValue:{required:!0},options:{required:!0,type:Array},canBeEmpty:{default:!1,type:Boolean},isMultiple:{default:!1,type:Boolean},minLength:{default:0,type:Number},maxLength:{default:1/0,type:Number},isDisabled:{default:!1,type:Boolean},placeholder:{default:"Select option",type:String}},setup:function(t,n){var o,r,i,a=Oe(""),l=Oe(t.isMultiple?e(t.modelValue):[t.modelValue]);return o=function(){return l},i={deep:!0},h(r=function(){t.isMultiple?n.emit("update:modelValue",e(l.value)):l.value.length?n.emit("update:modelValue",l.value[0]):n.emit("update:modelValue",null)})||Ce("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),st(o,r,i),{searchInputValue:a,handleInputForInput:function(e){n.emit("search-input",e)},handleChangeForInput:function(e){n.emit("search-change",e)},handleFocusForInput:function(e){n.emit("focus",e)},handleBlurForInput:function(e){n.emit("blur",e)},multipleSelectValue:l,handleOpenForDropdown:function(e){n.emit("open",e)},handleCloseForDropdown:function(e){n.emit("close",e)},handleSelectForDropdown:function(e){n.emit("select",e)},handleRemoveForDropdown:function(e){n.emit("remove",e)}}},components:{VInput:t,VMultipleSelect:n},template:'\n    <v-input\n      v-model="searchInputValue"\n      :isDisabled="isDisabled"\n      :placeholder="placeholder"\n      @input="handleInputForInput"\n      @change="handleChangeForInput"\n      @focus="handleFocusForInput"\n      @blur="handleBlurForInput"\n    ></v-input>\n\n    <v-multiple-select\n      v-model="multipleSelectValue"\n      :options="options"\n      :canBeEmpty="canBeEmpty"\n      :isMultiple="isMultiple"\n      :minLength="minLength"\n      :maxLength="maxLength"\n      @open="handleOpenForDropdown"\n      @close="handleCloseForDropdown"\n      @select="handleSelectForDropdown"\n      @remove="handleRemoveForDropdown"\n    ></v-multiple-select>\n  '}}));
