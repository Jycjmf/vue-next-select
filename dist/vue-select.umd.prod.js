!function(e,l){"object"==typeof exports&&"undefined"!=typeof module?module.exports=l(require("vue")):"function"==typeof define&&define.amd?define(["vue"],l):(e="undefined"!=typeof globalThis?globalThis:e||self).VueSelect=l(e.Vue)}(this,(function(e){"use strict";var l={inheritAttrs:!1,name:"vue-input",props:{modelValue:{required:!0,type:String},placeholder:{required:!0,type:String},disabled:{required:!0,type:Boolean}},emits:["update:modelValue","input","change","focus","blur","escape"],setup(l,a){const t=e.ref(null);return{handleInput:e=>{a.emit("input",e),a.emit("update:modelValue",e.target.value)},handleChange:e=>{a.emit("change",e),a.emit("update:modelValue",e.target.value)},handleFocus:e=>{a.emit("focus",e)},handleBlur:e=>{a.emit("blur",e)},input:t,handleEscape:e=>{a.emit("escape",e),t.value.blur()}}}};const a={class:"vue-input"};l.render=function(l,t,o,n,i,u){return e.openBlock(),e.createBlock("div",a,[e.renderSlot(l.$slots,"prepend"),e.createVNode("input",{ref:"input",modelValue:l.modelValue,placeholder:l.placeholder,disabled:l.disabled,onInput:t[1]||(t[1]=(...e)=>l.handleInput(...e)),onChange:t[2]||(t[2]=(...e)=>l.handleChange(...e)),onFocus:t[3]||(t[3]=(...e)=>l.handleFocus(...e)),onBlur:t[4]||(t[4]=(...e)=>l.handleBlur(...e)),onKeyup:t[5]||(t[5]=e.withKeys(e.withModifiers((...e)=>l.handleEscape(...e),["exact"]),["esc"]))},null,40,["modelValue","placeholder","disabled"]),e.renderSlot(l.$slots,"append")])},l.__file="src/components/input.vue";var t={name:"vue-tag",props:{modelValue:{required:!0,type:Array,validator:e=>e.every(e=>void 0!==typeof e.id&&void 0!==e.label&&"boolean"==typeof e.active)}},emits:["click"],setup:(e,l)=>({handleClick:(e,a)=>{l.emit("click",e,a)}})};const o={class:"vue-tag"};t.render=function(l,a,t,n,i,u){return e.openBlock(),e.createBlock("ul",o,[(e.openBlock(!0),e.createBlock(e.Fragment,null,e.renderList(l.modelValue,a=>(e.openBlock(),e.createBlock("li",{key:a.id,onClick:e=>l.handleClick(e,a),class:["vue-tag-item",{active:a.active,inactive:!a.active}]},[e.renderSlot(l.$slots,"default",{option:a},()=>[e.createVNode("span",null,e.toDisplayString(a.label),1)])],10,["onClick"]))),256))])},t.__file="src/components/tag.vue";var n={inheritAttrs:!1,name:"vue-dropdown",props:{modelValue:{required:!0,type:Array,validator:e=>e.every(e=>void 0!==typeof e.id&&void 0!==e.label&&"boolean"==typeof e.active)}},emits:["click"],setup:(e,l)=>({handleClick:(e,a)=>{l.emit("click",e,a)}})};const i={class:"vue-dropdown"};n.render=function(l,a,t,o,n,u){return e.openBlock(),e.createBlock("ul",i,[(e.openBlock(!0),e.createBlock(e.Fragment,null,e.renderList(l.modelValue,a=>(e.openBlock(),e.createBlock("li",{key:a.id,onClick:e=>l.handleClick(e,a),class:["vue-dropdown-item",{active:a.active,inactive:!a.active}]},[e.renderSlot(l.$slots,"default",{option:a},()=>[e.createVNode("span",null,e.toDisplayString(a.label),1)])],10,["onClick"]))),256))])},n.__file="src/components/dropdown.vue";const u=(e,l,{valueBy:a})=>a(e)===a(l),c=(e,l,{valueBy:a})=>void 0!==e.find(e=>u(e,l,{valueBy:a})),r=(e,l,{valueBy:a})=>e.find(e=>a(e)===l),d=(e,l,{max:a,valueBy:t})=>c(e,l,{valueBy:t})||e.length+1>a?e:e.concat(l),s=(e,l,{min:a,valueBy:t})=>!1===c(e,l,{valueBy:t})||e.length-1<a?e:e.filter(e=>!1===u(e,l,{valueBy:t}));var p=({wrapperRef:l,ignoreClasses:a=[]})=>{const t=e=>a.some(l=>e.classList.contains(l)),o=e.ref(!1),n=e=>{if(!e)return;if(!e.target)return;let a=e.target;for(;a;){if(t(a))return;if(a===l.value)return void(o.value=!0);a=a.parentElement}o.value=!1},i=e.computed(()=>{if(!l.value)return;let e=l.value;for(;e.parentElement;)e=e.parentElement;return e}),u=()=>{i.value&&i.value.removeEventListener("click",n),o.value=!1},c=()=>{u(),i.value&&i.value.addEventListener("click",n)};return e.onMounted(c),e.onUnmounted(u),{isFocusing:o,enableFocus:c,disableFocus:u}},v={name:"vue-select",inheritAttrs:!1,props:{modelValue:{required:!0},options:{required:!0,type:Array},visibleOptions:{type:Array},allowEmpty:{default:!1,type:Boolean},multiple:{default:!1,type:Boolean},min:{default:0,type:Number},max:{default:1/0,type:Number},closeOnSelect:{default:!1,type:Boolean},trackBy:{type:[String,Function]},hideSelected:{default:!1,type:Boolean},labelBy:{type:[String,Function]},valueBy:{type:[String,Function]},disabled:{default:!1,type:Boolean},loading:{default:!1,type:Boolean},placeholder:{default:"Select option",type:String},searchable:{default:!1,type:Boolean},taggable:{default:!1,type:Boolean},ellipsis:{default:!1,type:Boolean}},emits:["update:modelValue","select","remove","open","close","search-input","search-change","focus","blur"],setup(l,a){const{trackBy:t,labelBy:o,valueBy:n,min:i,max:u}=(e=>({trackBy:"function"==typeof e.trackBy?e.trackBy:"string"==typeof e.trackBy?l=>e.trackBy.split(".").reduce((e,l)=>e[l],l):e=>e,labelBy:"function"==typeof e.labelBy?e.labelBy:"string"==typeof e.labelBy?l=>e.labelBy.split(".").reduce((e,l)=>e[l],l):e=>e,valueBy:"function"==typeof e.valueBy?e.valueBy:"string"==typeof e.valueBy?l=>e.valueBy.split(".").reduce((e,l)=>e[l],l):e=>e,min:e.multiple?e.min:e.allowEmpty?0:1,max:e.multiple?e.max:1}))(l),v=e.ref(null),{isFocusing:m,disableFocus:y,enableFocus:g}=p({wrapperRef:v,ignoreClasses:["icon-delete"]});e.watch(()=>l.disabled,()=>{l.disabled?y():g()},{immediate:!0});const h=e.ref(null);e.watch(()=>m.value,()=>{l.disabled?m.value=!1:m.value?a.emit("open"):a.emit("close"),setTimeout(()=>f())});const f=()=>{m.value&&h.value&&h.value._&&h.value._.refs.input.focus()},B=e.ref(""),k=e.ref([]);if(l.multiple)l.modelValue.forEach(e=>{const a=r(l.options,e,{valueBy:n});k.value=d(k.value,a,{max:1/0,valueBy:n})});else if(null!==l.modelValue){const e=r(l.options,l.modelValue,{valueBy:n});k.value=d(k.value,e,{max:1/0,valueBy:n})}const I=(e,t)=>{if(!l.disabled)if(t=t.originalOption,c(k.value,t,{valueBy:n}))k.value=s(k.value,t,{min:i,valueBy:n}),a.emit("remove",t);else{if(!l.multiple){const e=k.value[0];k.value=s(k.value,k.value[0],{min:0,valueBy:n}),a.emit("remove",e)}k.value=d(k.value,t,{max:u,valueBy:n}),a.emit("select",t),!0===l.closeOnSelect&&(m.value=!1)}};e.watch(()=>k,()=>{const e=k.value.map(e=>n(e));l.multiple?a.emit("update:modelValue",e):e.length?a.emit("update:modelValue",e[0]):a.emit("update:modelValue",null),f()},{deep:!0});const b=e.computed(()=>{const e=new Set(k.value.map(e=>n(e)));return l.hideSelected&&m.value&&setTimeout(()=>m.value=!0),(l.visibleOptions||l.options).filter(a=>!l.hideSelected||!1===e.has(n(a))).map(l=>({id:t(l),label:o(l),active:e.has(n(l)),originalOption:l}))}),V=e.computed(()=>{const e=new Set(k.value.map(e=>n(e)));return l.options.map(l=>({id:t(l),label:o(l),active:e.has(n(l)),originalOption:l}))});return e.watch(()=>l.options,()=>{const e=new Set(k.value.map(e=>e.value));k.value=l.options.filter(l=>e.has(n(l)))},{deep:!0}),{isFocusing:m,input:h,wrapper:v,close:()=>{setTimeout(()=>{m.value=!1})},searchingInputValue:B,handleInputForInput:e=>{B.value=e.target.value,a.emit("search-input",e)},handleChangeForInput:e=>{B.value=e.target.value,a.emit("search-change",e)},handleFocusForInput:e=>{a.emit("focus",e),console.log("focus")},handleBlurForInput:e=>{a.emit("blur",e),console.log("blur")},handleClickForDropdown:(e,l)=>I(0,l),handleClickForTag:(e,l)=>I(0,l),dropdownSelectedOptions:b,tagSelectedOptions:V,addOrRemoveOption:I,focus:f}},components:{VInput:l,VTag:t,VDropdown:n}};const m={class:"vue-select-header"},y={key:2,class:"icon-loading"},g=e.createVNode("div",null,null,-1),h=e.createVNode("div",null,null,-1),f=e.createVNode("div",null,null,-1),B={key:0,class:"icon-loading"},k=e.createVNode("div",null,null,-1),I=e.createVNode("div",null,null,-1),b=e.createVNode("div",null,null,-1);return v.render=function(l,a,t,o,n,i){const u=e.resolveComponent("v-tag"),c=e.resolveComponent("v-input"),r=e.resolveComponent("v-dropdown");return e.openBlock(),e.createBlock("div",{ref:"wrapper",class:["vue-select",{disabled:l.disabled}],onClick:a[6]||(a[6]=(...e)=>l.focus(...e))},[e.createVNode("div",m,[l.taggable?(e.openBlock(),e.createBlock(e.Fragment,{key:0},[e.createVNode(u,{modelValue:l.tagSelectedOptions,class:["vue-select-tag",{ellipsis:l.ellipsis}]},{default:e.withCtx(({option:a})=>[e.renderSlot(l.$slots,"tag-item",{option:a.originalOption},()=>[e.createVNode("span",null,e.toDisplayString(a.label),1),e.createVNode("img",{src:"data:image/svg+xml;base64,PHN2ZyBpZD0iZGVsZXRlIiBkYXRhLW5hbWU9ImRlbGV0ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHRpdGxlPmRlbGV0ZTwvdGl0bGU+PHBhdGggZD0iTTI1NiwyNEMzODMuOSwyNCw0ODgsMTI4LjEsNDg4LDI1NlMzODMuOSw0ODgsMjU2LDQ4OCwyNC4wNiwzODMuOSwyNC4wNiwyNTYsMTI4LjEsMjQsMjU2LDI0Wk0wLDI1NkMwLDM5Ny4xNiwxMTQuODQsNTEyLDI1Niw1MTJTNTEyLDM5Ny4xNiw1MTIsMjU2LDM5Ny4xNiwwLDI1NiwwLDAsMTE0Ljg0LDAsMjU2WiIgZmlsbD0iIzViNWI1ZiIvPjxwb2x5Z29uIHBvaW50cz0iMzgyIDE3Mi43MiAzMzkuMjkgMTMwLjAxIDI1NiAyMTMuMjkgMTcyLjcyIDEzMC4wMSAxMzAuMDEgMTcyLjcyIDIxMy4yOSAyNTYgMTMwLjAxIDMzOS4yOCAxNzIuNzIgMzgyIDI1NiAyOTguNzEgMzM5LjI5IDM4MS45OSAzODIgMzM5LjI4IDI5OC43MSAyNTYgMzgyIDE3Mi43MiIgZmlsbD0iIzViNWI1ZiIvPjwvc3ZnPg==",alt:"delete tag",class:"icon-delete",onClick:()=>l.addOrRemoveOption(l.$event,a)},null,8,["onClick"])])]),_:1},8,["modelValue","class"]),e.createVNode("span",{class:["icon-arrow-downward",{active:l.isFocusing}],onClick:a[1]||(a[1]=(...e)=>l.close(...e))},null,2)],64)):(e.openBlock(),e.createBlock(e.Fragment,{key:1},[l.searchable?e.createVNode(c,{key:0,ref:"input",modelValue:l.searchingInputValue,"onUpdate:modelValue":a[2]||(a[2]=e=>l.searchingInputValue=e),disabled:l.disabled,placeholder:l.placeholder,onInput:l.handleInputForInput,onChange:l.handleChangeForInput,onFocus:l.handleFocusForInput,onBlur:l.handleBlurForInput,onEscape:l.close,class:"vue-select-input"},null,8,["modelValue","disabled","placeholder","onInput","onChange","onFocus","onBlur","onEscape"]):(e.openBlock(),e.createBlock("div",{key:1,ref:"input"},e.toDisplayString(l.placeholder),513)),l.loading?(e.openBlock(),e.createBlock("span",y,[g,h,f])):(e.openBlock(),e.createBlock("span",{key:3,class:["icon-arrow-downward",{active:l.isFocusing}],onClick:a[3]||(a[3]=(...e)=>l.close(...e))},null,2))],64))]),l.isFocusing?(e.openBlock(),e.createBlock(e.Fragment,{key:0},[l.taggable&&l.searchable?e.createVNode(c,{key:0,ref:"input",modelValue:l.searchingInputValue,"onUpdate:modelValue":a[4]||(a[4]=e=>l.searchingInputValue=e),disabled:l.disabled,placeholder:l.placeholder,onInput:l.handleInputForInput,onChange:l.handleChangeForInput,onFocus:l.handleFocusForInput,onBlur:l.handleBlurForInput,onEscape:l.close,class:"vue-select-input"},{append:e.withCtx(()=>[l.loading?(e.openBlock(),e.createBlock("span",B,[k,I,b])):e.createCommentVNode("v-if",!0)]),_:1},8,["modelValue","disabled","placeholder","onInput","onChange","onFocus","onBlur","onEscape"]):e.createCommentVNode("v-if",!0),e.createVNode(r,{modelValue:l.dropdownSelectedOptions,"onUpdate:modelValue":a[5]||(a[5]=e=>l.dropdownSelectedOptions=e),onClick:l.handleClickForDropdown,class:"vue-select-dropdown"},{default:e.withCtx(({option:a})=>[e.renderSlot(l.$slots,"dropdown-item",{option:a.originalOption},()=>[e.createVNode("span",null,e.toDisplayString(a.label),1)])]),_:1},8,["modelValue","onClick"])],64)):e.createCommentVNode("v-if",!0)],2)},v.__file="src/index.vue",v}));
