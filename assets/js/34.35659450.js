(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{116:function(t,e,n){"use strict";n.d(e,"b",(function(){return i}));var r=n(23),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},a=n(0),i={Prism:r.a,theme:o};function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var s=/\r\n|\r|\n/,u=function(t){0===t.length?t.push({types:["plain"],content:"\n",empty:!0}):1===t.length&&""===t[0].content&&(t[0].content="\n",t[0].empty=!0)},p=function(t,e){var n=t.length;return n>0&&t[n-1]===e?t:t.concat(e)},d=function(t,e){var n=t.plain,r=Object.create(null),o=t.styles.reduce((function(t,n){var r=n.languages,o=n.style;return r&&!r.includes(e)||n.types.forEach((function(e){var n=c({},t[e],o);t[e]=n})),t}),r);return o.root=n,o.plain=c({},n,{backgroundColor:null}),o};function y(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&-1===e.indexOf(r)&&(n[r]=t[r]);return n}var f=function(t){function e(){for(var e=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];t.apply(this,n),l(this,"getThemeDict",(function(t){if(void 0!==e.themeDict&&t.theme===e.prevTheme&&t.language===e.prevLanguage)return e.themeDict;e.prevTheme=t.theme,e.prevLanguage=t.language;var n=t.theme?d(t.theme,t.language):void 0;return e.themeDict=n})),l(this,"getLineProps",(function(t){var n=t.key,r=t.className,o=t.style,a=c({},y(t,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=e.getThemeDict(e.props);return void 0!==i&&(a.style=i.plain),void 0!==o&&(a.style=void 0!==a.style?c({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),l(this,"getStyleForToken",(function(t){var n=t.types,r=t.empty,o=n.length,a=e.getThemeDict(e.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var i=r?{display:"inline-block"}:{},l=n.map((function(t){return a[t]}));return Object.assign.apply(Object,[i].concat(l))}})),l(this,"getTokenProps",(function(t){var n=t.key,r=t.className,o=t.style,a=t.token,i=c({},y(t,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:e.getStyleForToken(a),key:void 0});return void 0!==o&&(i.style=void 0!==i.style?c({},i.style,o):o),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i})),l(this,"tokenize",(function(t,e,n,r){var o={code:e,grammar:n,language:r,tokens:[]};t.hooks.run("before-tokenize",o);var a=o.tokens=t.tokenize(o.code,o.grammar,o.language);return t.hooks.run("after-tokenize",o),a}))}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.render=function(){var t=this.props,e=t.Prism,n=t.language,r=t.code,o=t.children,a=this.getThemeDict(this.props),i=e.languages[n];return o({tokens:function(t){for(var e=[[]],n=[t],r=[0],o=[t.length],a=0,i=0,l=[],c=[l];i>-1;){for(;(a=r[i]++)<o[i];){var d=void 0,y=e[i],f=n[i][a];if("string"==typeof f?(y=i>0?y:["plain"],d=f):(y=p(y,f.type),f.alias&&(y=p(y,f.alias)),d=f.content),"string"==typeof d){var h=d.split(s),g=h.length;l.push({types:y,content:h[0]});for(var v=1;v<g;v++)u(l),c.push(l=[]),l.push({types:y,content:h[v]})}else i++,e.push(y),n.push(d),r.push(0),o.push(d.length)}i--,e.pop(),n.pop(),r.pop(),o.pop()}return u(l),c}(void 0!==i?this.tokenize(e,r,i,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},e}(a.Component);e.a=f},123:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return i}));var r=n(0),o=n.n(r),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=o.a.createContext&&o.a.createContext(a),l=function(){return(l=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},c=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};function s(t){return t&&t.map((function(t,e){return o.a.createElement(t.tag,l({key:e},t.attr),s(t.child))}))}function u(t){return function(e){return o.a.createElement(p,l({attr:l({},t.attr)},e),s(t.child))}}function p(t){var e=function(e){var n,r=t.attr,a=t.size,i=t.title,s=c(t,["attr","size","title"]),u=a||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),o.a.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,r,s,{className:n,style:l(l({color:t.color||e.color},e.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&o.a.createElement("title",null,i),t.children)};return void 0!==i?o.a.createElement(i.Consumer,null,(function(t){return e(t)})):e(a)}},163:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return a}));var r=n(123);function o(t){return Object(r.a)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"}}]})(t)}function a(t){return Object(r.a)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"}},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"}}]})(t)}},165:function(t,e,n){"use strict";var r=n(0),o=n.n(r),a=n(117),i=n(107),l=n(96),c=n.n(l);const s=37,u=39;e.a=function(t){const{lazy:e,block:n,defaultValue:l,values:p,groupId:d,className:y}=t,{tabGroupChoices:f,setTabGroupChoices:h}=Object(a.a)(),[g,v]=Object(r.useState)(l),m=r.Children.toArray(t.children),b=[];if(null!=d){const t=f[d];null!=t&&t!==g&&p.some((e=>e.value===t))&&v(t)}const k=t=>{const e=t.target,n=b.indexOf(e),r=m[n].props.value;v(r),null!=d&&(h(d,r),setTimeout((()=>{(function(t){const{top:e,left:n,bottom:r,right:o}=t.getBoundingClientRect(),{innerHeight:a,innerWidth:i}=window;return e>=0&&o<=i&&r<=a&&n>=0})(e)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(c.a.tabItemActive),setTimeout((()=>e.classList.remove(c.a.tabItemActive)),2e3))}),150))},O=t=>{var e;let n;switch(t.keyCode){case u:{const e=b.indexOf(t.target)+1;n=b[e]||b[0];break}case s:{const e=b.indexOf(t.target)-1;n=b[e]||b[b.length-1];break}}null===(e=n)||void 0===e||e.focus()};return o.a.createElement("div",{className:"tabs-container"},o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},y)},p.map((({value:t,label:e})=>o.a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:t=>b.push(t),onKeyDown:O,onFocus:k,onClick:k},e)))),e?Object(r.cloneElement)(m.filter((t=>t.props.value===g))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},m.map(((t,e)=>Object(r.cloneElement)(t,{key:e,hidden:t.props.value!==g})))))}},166:function(t,e,n){"use strict";var r=n(0),o=n.n(r);e.a=function({children:t,hidden:e,className:n}){return o.a.createElement("div",{role:"tabpanel",hidden:e,className:n},t)}},169:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return l}));var r=n(123);function o(t){return Object(r.a)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"rect",attr:{width:"384",height:"256",x:"64",y:"176",fill:"none",strokeLinejoin:"round",strokeWidth:"32",rx:"28.87",ry:"28.87"}},{tag:"path",attr:{strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"32",d:"M144 80h224m-256 48h288"}}]})(t)}function a(t){return Object(r.a)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"32",d:"M393.87 190a32.1 32.1 0 01-45.25 0l-26.57-26.57a32.09 32.09 0 010-45.26L382.19 58a1 1 0 00-.3-1.64c-38.82-16.64-89.15-8.16-121.11 23.57-30.58 30.35-32.32 76-21.12 115.84a31.93 31.93 0 01-9.06 32.08L64 380a48.17 48.17 0 1068 68l153.86-167a31.93 31.93 0 0131.6-9.13c39.54 10.59 84.54 8.6 114.72-21.19 32.49-32 39.5-88.56 23.75-120.93a1 1 0 00-1.6-.26z"}},{tag:"circle",attr:{cx:"96",cy:"416",r:"16"}}]})(t)}function i(t){return Object(r.a)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"circle",attr:{cx:"256",cy:"256",r:"26"}},{tag:"circle",attr:{cx:"346",cy:"256",r:"26"}},{tag:"circle",attr:{cx:"166",cy:"256",r:"26"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M160 368L32 256l128-112m192 224l128-112-128-112"}}]})(t)}function l(t){return Object(r.a)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M53.12 199.94l400-151.39a8 8 0 0110.33 10.33l-151.39 400a8 8 0 01-15-.34l-67.4-166.09a16 16 0 00-10.11-10.11L53.46 215a8 8 0 01-.34-15.06zM460 52L227 285"}}]})(t)}}}]);