import{d as e,r as t,g as a,a as n,s as l,b as r,u as i,c as o,e as s,o as c,f as u,h as d,w as f,T as p,i as m,j as h,k as v,_ as g,l as b,m as w,n as _,F as y,t as k,p as x,q as E,v as C,x as A,E as V,y as S,z as T,A as F,B as I,C as P,D as R,G as M,H as L,I as O,J as q,K as D,L as z,M as j,N as H,O as N,P as $,Q as U,R as B,S as G,U as W,V as J,W as X,X as Y,Y as K,Z as Q,$ as Z}from"./index.6a7236d4.js";import{_ as ee}from"./index.vue_vue_type_script_setup_true_lang.ebf0b949.js";var te=(e=>(e[e.Mobile=0]="Mobile",e[e.Desktop=1]="Desktop",e))(te||{});const ae=e("app",(()=>{const e=t({opened:"closed"!==a(),withoutAnimation:!1}),r=n(1);return{device:r,sidebar:e,toggleSidebar:t=>{e.opened=!e.opened,e.withoutAnimation=t,e.opened?l("opened"):l("closed")},closeSidebar:t=>{e.opened=!1,e.withoutAnimation=t,l("closed")},toggleDevice:e=>{r.value=e}}})),ne=!0,le=!0,re=!0,ie=!0,oe=!0,se=!0,ce=e("settings",(()=>({fixedHeader:n(re),showSettings:n(ne),showTagsView:n(le),showSidebarLogo:n(ie),showThemeSwitch:n(oe),showScreenfull:n(se)}))),ue={class:"app-main"},de=g(r({__name:"AppMain",setup(e){const t=i(),a=o((()=>t.path));return(e,t)=>{const n=s("router-view");return c(),u("section",ue,[d(n,null,{default:f((({Component:e})=>[d(p,{name:"fade-transform",mode:"out-in"},{default:f((()=>[(c(),m(v(e),{key:h(a)}))])),_:2},1024)])),_:1})])}}}),[["__scopeId","data-v-0058dddf"]]);function fe(e,t){void 0===t&&(t={});for(var a=function(e){for(var t=[],a=0;a<e.length;){var n=e[a];if("*"!==n&&"+"!==n&&"?"!==n)if("\\"!==n)if("{"!==n)if("}"!==n)if(":"!==n)if("("!==n)t.push({type:"CHAR",index:a,value:e[a++]});else{var l=1,r="";if("?"===e[o=a+1])throw new TypeError('Pattern cannot start with "?" at '.concat(o));for(;o<e.length;)if("\\"!==e[o]){if(")"===e[o]){if(0==--l){o++;break}}else if("("===e[o]&&(l++,"?"!==e[o+1]))throw new TypeError("Capturing groups are not allowed at ".concat(o));r+=e[o++]}else r+=e[o++]+e[o++];if(l)throw new TypeError("Unbalanced pattern at ".concat(a));if(!r)throw new TypeError("Missing pattern at ".concat(a));t.push({type:"PATTERN",index:a,value:r}),a=o}else{for(var i="",o=a+1;o<e.length;){var s=e.charCodeAt(o);if(!(s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122||95===s))break;i+=e[o++]}if(!i)throw new TypeError("Missing parameter name at ".concat(a));t.push({type:"NAME",index:a,value:i}),a=o}else t.push({type:"CLOSE",index:a,value:e[a++]});else t.push({type:"OPEN",index:a,value:e[a++]});else t.push({type:"ESCAPED_CHAR",index:a++,value:e[a++]});else t.push({type:"MODIFIER",index:a,value:e[a++]})}return t.push({type:"END",index:a,value:""}),t}(e),n=t.prefixes,l=void 0===n?"./":n,r="[^".concat(function(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}(t.delimiter||"/#?"),"]+?"),i=[],o=0,s=0,c="",u=function(e){if(s<a.length&&a[s].type===e)return a[s++].value},d=function(e){var t=u(e);if(void 0!==t)return t;var n=a[s],l=n.type,r=n.index;throw new TypeError("Unexpected ".concat(l," at ").concat(r,", expected ").concat(e))},f=function(){for(var e,t="";e=u("CHAR")||u("ESCAPED_CHAR");)t+=e;return t};s<a.length;){var p=u("CHAR"),m=u("NAME"),h=u("PATTERN");if(m||h){var v=p||"";-1===l.indexOf(v)&&(c+=v,v=""),c&&(i.push(c),c=""),i.push({name:m||o++,prefix:v,suffix:"",pattern:h||r,modifier:u("MODIFIER")||""})}else{var g=p||u("ESCAPED_CHAR");if(g)c+=g;else if(c&&(i.push(c),c=""),u("OPEN")){v=f();var b=u("NAME")||"",w=u("PATTERN")||"",_=f();d("CLOSE"),i.push({name:b||(w?o++:""),pattern:b&&!w?r:w,prefix:v,suffix:_,modifier:u("MODIFIER")||""})}else d("END")}}return i}function pe(e,t){return function(e,t){void 0===t&&(t={});var a=function(e){return e&&e.sensitive?"":"i"}(t),n=t.encode,l=void 0===n?function(e){return e}:n,r=t.validate,i=void 0===r||r,o=e.map((function(e){if("object"==typeof e)return new RegExp("^(?:".concat(e.pattern,")$"),a)}));return function(t){for(var a="",n=0;n<e.length;n++){var r=e[n];if("string"!=typeof r){var s=t?t[r.name]:void 0,c="?"===r.modifier||"*"===r.modifier,u="*"===r.modifier||"+"===r.modifier;if(Array.isArray(s)){if(!u)throw new TypeError('Expected "'.concat(r.name,'" to not repeat, but got an array'));if(0===s.length){if(c)continue;throw new TypeError('Expected "'.concat(r.name,'" to not be empty'))}for(var d=0;d<s.length;d++){var f=l(s[d],r);if(i&&!o[n].test(f))throw new TypeError('Expected all "'.concat(r.name,'" to match "').concat(r.pattern,'", but got "').concat(f,'"'));a+=r.prefix+f+r.suffix}}else if("string"!=typeof s&&"number"!=typeof s){if(!c){var p=u?"an array":"a string";throw new TypeError('Expected "'.concat(r.name,'" to be ').concat(p))}}else{f=l(String(s),r);if(i&&!o[n].test(f))throw new TypeError('Expected "'.concat(r.name,'" to match "').concat(r.pattern,'", but got "').concat(f,'"'));a+=r.prefix+f+r.suffix}}else a+=r}return a}}(fe(e,t),t)}const me={key:0,class:"no-redirect"},he=["onClick"],ve=g(r({__name:"index",setup(e){const t=i(),a=b(),l=n([]),r=()=>{l.value=t.matched.filter((e=>e.meta&&e.meta.title&&!1!==e.meta.breadcrumb))},o=e=>{const{redirect:n,path:l}=e;n?a.push(n):a.push((e=>{const{params:a}=t;return pe(e)(a)})(l))};return w((()=>t.path),(e=>{e.startsWith("/redirect/")||r()})),r(),(e,t)=>{const a=s("el-breadcrumb-item"),n=s("el-breadcrumb");return c(),m(n,{class:"app-breadcrumb"},{default:f((()=>[(c(!0),u(y,null,_(l.value,((e,t)=>(c(),m(a,{key:e.path},{default:f((()=>["noRedirect"===e.redirect||t===l.value.length-1?(c(),u("span",me,k(e.meta.title),1)):(c(),u("a",{key:1,onClick:x((t=>o(e)),["prevent"])},k(e.meta.title),9,he))])),_:2},1024)))),128))])),_:1})}}}),[["__scopeId","data-v-8ff70186"]]),ge=g(r({__name:"index",props:{isActive:{type:Boolean,default:!1}},emits:["toggle-click"],setup(e,{emit:t}){const a=e,n=()=>{t("toggle-click")};return(e,t)=>{const l=s("el-icon");return c(),u("div",{onClick:n},[d(l,{size:20,class:"icon"},{default:f((()=>[a.isActive?(c(),m(h(E),{key:0})):(c(),m(h(C),{key:1}))])),_:1})])}}}),[["__scopeId","data-v-b698c316"]]),be=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],we=(()=>{if("undefined"==typeof document)return!1;const e=be[0],t={};for(const a of be){if((null==a?void 0:a[1])in document){for(const[n,l]of a.entries())t[e[n]]=l;return t}}return!1})(),_e={change:we.fullscreenchange,error:we.fullscreenerror};let ye={request:(e=document.documentElement,t)=>new Promise(((a,n)=>{const l=()=>{ye.off("change",l),a()};ye.on("change",l);const r=e[we.requestFullscreen](t);r instanceof Promise&&r.then(l).catch(n)})),exit:()=>new Promise(((e,t)=>{if(!ye.isFullscreen)return void e();const a=()=>{ye.off("change",a),e()};ye.on("change",a);const n=document[we.exitFullscreen]();n instanceof Promise&&n.then(a).catch(t)})),toggle:(e,t)=>ye.isFullscreen?ye.exit():ye.request(e,t),onchange(e){ye.on("change",e)},onerror(e){ye.on("error",e)},on(e,t){const a=_e[e];a&&document.addEventListener(a,t,!1)},off(e,t){const a=_e[e];a&&document.removeEventListener(a,t,!1)},raw:we};Object.defineProperties(ye,{isFullscreen:{get:()=>Boolean(document[we.fullscreenElement])},element:{enumerable:!0,get:()=>{var e;return null!=(e=document[we.fullscreenElement])?e:void 0}},isEnabled:{enumerable:!0,get:()=>Boolean(document[we.fullscreenEnabled])}}),we||(ye={isEnabled:!1});const ke=ye,xe=g(r({__name:"index",setup(e){const t=n("全屏"),a=n(!1),l=()=>{ke.isEnabled?ke.toggle():V.warning("您的浏览器无法工作")},r=()=>{a.value=ke.isFullscreen,t.value=ke.isFullscreen?"退出全屏":"全屏"};return ke.on("change",r),A((()=>{ke.isEnabled&&ke.off("change",r)})),(e,n)=>{const r=s("svg-icon"),i=s("el-tooltip");return c(),u("div",{onClick:l},[d(i,{effect:"dark",content:t.value,placement:"bottom"},{default:f((()=>[d(r,{name:a.value?"fullscreen-exit":"fullscreen"},null,8,["name"])])),_:1},8,["content"])])}}}),[["__scopeId","data-v-ecf0ac31"]]);const Ee=g({},[["render",function(e,t){return"欢迎 PR !!!"}]]),Ce={class:"notify"},Ae={class:"notify-history"},Ve=g(r({__name:"index",setup(e){const t=o((()=>{let e=0;for(let t=0;t<l.value.length;t++)e+=l.value[t].list.length;return e})),a=n("通知"),l=n([{name:"通知",type:"primary",list:[]},{name:"消息",type:"danger",list:[]},{name:"待办",type:"warning",list:[]}]),r=()=>{V.success(`跳转到${a.value}历史页面`)};return(e,n)=>{const i=s("el-icon"),o=s("el-tooltip"),p=s("el-badge"),v=s("el-scrollbar"),g=s("el-tab-pane"),b=s("el-tabs"),w=s("el-button"),x=s("el-popover");return c(),u("div",Ce,[d(x,{placement:"bottom",width:350,trigger:"click"},{reference:f((()=>[d(p,{value:h(t),max:99,hidden:0===h(t)},{default:f((()=>[d(o,{effect:"dark",content:"消息通知",placement:"bottom"},{default:f((()=>[d(i,{size:20},{default:f((()=>[d(h(S))])),_:1})])),_:1})])),_:1},8,["value","hidden"])])),default:f((()=>[d(b,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=e=>a.value=e),class:"demo-tabs",stretch:""},{default:f((()=>[(c(!0),u(y,null,_(l.value,((e,t)=>(c(),m(g,{name:e.name,key:t},{label:f((()=>[F(k(e.name)+" ",1),d(p,{value:e.list.length,max:99,type:e.type},null,8,["value","type"])])),default:f((()=>[d(v,{height:"400px"},{default:f((()=>[d(Ee,{list:e.list},null,8,["list"])])),_:2},1024)])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"]),T("div",Ae,[d(w,{link:"",onClick:r},{default:f((()=>[F("查看"+k(a.value)+"历史",1)])),_:1})])])),_:1})])}}}),[["__scopeId","data-v-e7fdcb05"]]),Se={class:"navigation-bar"},Te={class:"right-menu"},Fe={target:"_blank",href:"https://juejin.cn/post/7089377403717287972"},Ie={target:"_blank",href:"https://github.com/un-pany/v3-admin-vite"},Pe={target:"_blank",href:"https://gitee.com/un-pany/v3-admin-vite"},Re={target:"_blank",href:"https://juejin.cn/post/6963876125428678693"},Me={target:"_blank",href:"https://github.com/un-pany/v3-admin/blob/master/README.en.md"},Le={target:"_blank",href:"https://github.com/un-pany/v3-admin"},Oe={target:"_blank",href:"https://gitee.com/un-pany/v3-admin"},qe=(e=>(M("data-v-bf270650"),e=e(),L(),e))((()=>T("span",{style:{display:"block"}},"退出登录",-1))),De=g(r({__name:"index",setup(e){const t=b(),a=ae(),n=ce(),l=I(),r=o((()=>a.sidebar)),i=o((()=>n.showThemeSwitch)),p=o((()=>n.showScreenfull)),v=()=>{a.toggleSidebar(!1)},g=()=>{l.logout(),t.push("/login")};return(e,t)=>{const a=s("el-avatar"),n=s("el-dropdown-item"),l=s("el-dropdown-menu"),o=s("el-dropdown");return c(),u("div",Se,[d(ge,{"is-active":h(r).opened,class:"hamburger",onToggleClick:v},null,8,["is-active"]),d(ve,{class:"breadcrumb"}),T("div",Te,[h(p)?(c(),m(xe,{key:0,class:"right-menu-item"})):P("",!0),h(i)?(c(),m(ee,{key:1,class:"right-menu-item"})):P("",!0),d(Ve,{class:"right-menu-item"}),d(o,{class:"right-menu-item"},{dropdown:f((()=>[d(l,null,{default:f((()=>[T("a",Fe,[d(n,null,{default:f((()=>[F("V3-Admin-Vite 中文文档")])),_:1})]),T("a",Ie,[d(n,null,{default:f((()=>[F("V3-Admin-Vite GitHub")])),_:1})]),T("a",Pe,[d(n,null,{default:f((()=>[F("V3-Admin-Vite Gitee")])),_:1})]),T("a",Re,[d(n,{divided:""},{default:f((()=>[F("V3-Admin 中文文档")])),_:1})]),T("a",Me,[d(n,null,{default:f((()=>[F("V3-Admin English Docs")])),_:1})]),T("a",Le,[d(n,null,{default:f((()=>[F("V3-Admin GitHub")])),_:1})]),T("a",Oe,[d(n,null,{default:f((()=>[F("V3-Admin Gitee")])),_:1})]),d(n,{divided:"",onClick:g},{default:f((()=>[qe])),_:1})])),_:1})])),default:f((()=>[d(a,{icon:h(R),size:34},null,8,["icon"])])),_:1})])])}}}),[["__scopeId","data-v-bf270650"]]),ze=e=>(M("data-v-eb8fd065"),e=e(),L(),e),je={class:"drawer-container"},He=ze((()=>T("h3",{class:"drawer-title"},"系统布局配置",-1))),Ne={class:"drawer-item"},$e=ze((()=>T("span",null,"显示标签栏",-1))),Ue={class:"drawer-item"},Be=ze((()=>T("span",null,"显示侧边栏 Logo",-1))),Ge={class:"drawer-item"},We=ze((()=>T("span",null,"固定 Header",-1))),Je={class:"drawer-item"},Xe=ze((()=>T("span",null,"显示切换主题按钮",-1))),Ye={class:"drawer-item"},Ke=ze((()=>T("span",null,"显示全屏按钮",-1))),Qe=g(r({__name:"index",setup(e){const t=ce();return(e,a)=>{const n=s("el-switch");return c(),u("div",je,[T("div",null,[He,T("div",Ne,[$e,d(n,{modelValue:h(t).showTagsView,"onUpdate:modelValue":a[0]||(a[0]=e=>h(t).showTagsView=e),class:"drawer-switch"},null,8,["modelValue"])]),T("div",Ue,[Be,d(n,{modelValue:h(t).showSidebarLogo,"onUpdate:modelValue":a[1]||(a[1]=e=>h(t).showSidebarLogo=e),class:"drawer-switch"},null,8,["modelValue"])]),T("div",Ge,[We,d(n,{modelValue:h(t).fixedHeader,"onUpdate:modelValue":a[2]||(a[2]=e=>h(t).fixedHeader=e),class:"drawer-switch"},null,8,["modelValue"])]),T("div",Je,[Xe,d(n,{modelValue:h(t).showThemeSwitch,"onUpdate:modelValue":a[3]||(a[3]=e=>h(t).showThemeSwitch=e),class:"drawer-switch"},null,8,["modelValue"])]),T("div",Ye,[Ke,d(n,{modelValue:h(t).showScreenfull,"onUpdate:modelValue":a[4]||(a[4]=e=>h(t).showScreenfull=e),class:"drawer-switch"},null,8,["modelValue"])])])])}}}),[["__scopeId","data-v-eb8fd065"]]),Ze=e=>/^(https?:|mailto:|tel:)/.test(e),et=["href"],tt=r({__name:"SidebarItemLink",props:{to:{type:String,required:!0}},setup(e){const t=e;return(e,a)=>{const n=s("router-link");return h(Ze)(t.to)?(c(),u("a",{key:0,href:t.to,target:"_blank",rel:"noopener"},[O(e.$slots,"default")],8,et)):(c(),m(n,{key:1,to:t.to},{default:f((()=>[O(e.$slots,"default")])),_:3},8,["to"]))}}});function at(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function nt(e,t){for(var a,n="",l=0,r=-1,i=0,o=0;o<=e.length;++o){if(o<e.length)a=e.charCodeAt(o);else{if(47===a)break;a=47}if(47===a){if(r===o-1||1===i);else if(r!==o-1&&2===i){if(n.length<2||2!==l||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var s=n.lastIndexOf("/");if(s!==n.length-1){-1===s?(n="",l=0):l=(n=n.slice(0,s)).length-1-n.lastIndexOf("/"),r=o,i=0;continue}}else if(2===n.length||1===n.length){n="",l=0,r=o,i=0;continue}t&&(n.length>0?n+="/..":n="..",l=2)}else n.length>0?n+="/"+e.slice(r+1,o):n=e.slice(r+1,o),l=o-r-1;r=o,i=0}else 46===a&&-1!==i?++i:i=-1}return n}var lt={resolve:function(){for(var e,t="",a=!1,n=arguments.length-1;n>=-1&&!a;n--){var l;n>=0?l=arguments[n]:(void 0===e&&(e=process.cwd()),l=e),at(l),0!==l.length&&(t=l+"/"+t,a=47===l.charCodeAt(0))}return t=nt(t,!a),a?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(e){if(at(e),0===e.length)return".";var t=47===e.charCodeAt(0),a=47===e.charCodeAt(e.length-1);return 0!==(e=nt(e,!t)).length||t||(e="."),e.length>0&&a&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return at(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var a=arguments[t];at(a),a.length>0&&(void 0===e?e=a:e+="/"+a)}return void 0===e?".":lt.normalize(e)},relative:function(e,t){if(at(e),at(t),e===t)return"";if((e=lt.resolve(e))===(t=lt.resolve(t)))return"";for(var a=1;a<e.length&&47===e.charCodeAt(a);++a);for(var n=e.length,l=n-a,r=1;r<t.length&&47===t.charCodeAt(r);++r);for(var i=t.length-r,o=l<i?l:i,s=-1,c=0;c<=o;++c){if(c===o){if(i>o){if(47===t.charCodeAt(r+c))return t.slice(r+c+1);if(0===c)return t.slice(r+c)}else l>o&&(47===e.charCodeAt(a+c)?s=c:0===c&&(s=0));break}var u=e.charCodeAt(a+c);if(u!==t.charCodeAt(r+c))break;47===u&&(s=c)}var d="";for(c=a+s+1;c<=n;++c)c!==n&&47!==e.charCodeAt(c)||(0===d.length?d+="..":d+="/..");return d.length>0?d+t.slice(r+s):(r+=s,47===t.charCodeAt(r)&&++r,t.slice(r))},_makeLong:function(e){return e},dirname:function(e){if(at(e),0===e.length)return".";for(var t=e.charCodeAt(0),a=47===t,n=-1,l=!0,r=e.length-1;r>=1;--r)if(47===(t=e.charCodeAt(r))){if(!l){n=r;break}}else l=!1;return-1===n?a?"/":".":a&&1===n?"//":e.slice(0,n)},basename:function(e,t){if(void 0!==t&&"string"!=typeof t)throw new TypeError('"ext" argument must be a string');at(e);var a,n=0,l=-1,r=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var i=t.length-1,o=-1;for(a=e.length-1;a>=0;--a){var s=e.charCodeAt(a);if(47===s){if(!r){n=a+1;break}}else-1===o&&(r=!1,o=a+1),i>=0&&(s===t.charCodeAt(i)?-1==--i&&(l=a):(i=-1,l=o))}return n===l?l=o:-1===l&&(l=e.length),e.slice(n,l)}for(a=e.length-1;a>=0;--a)if(47===e.charCodeAt(a)){if(!r){n=a+1;break}}else-1===l&&(r=!1,l=a+1);return-1===l?"":e.slice(n,l)},extname:function(e){at(e);for(var t=-1,a=0,n=-1,l=!0,r=0,i=e.length-1;i>=0;--i){var o=e.charCodeAt(i);if(47!==o)-1===n&&(l=!1,n=i+1),46===o?-1===t?t=i:1!==r&&(r=1):-1!==t&&(r=-1);else if(!l){a=i+1;break}}return-1===t||-1===n||0===r||1===r&&t===n-1&&t===a+1?"":e.slice(t,n)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var a=t.dir||t.root,n=t.base||(t.name||"")+(t.ext||"");return a?a===t.root?a+n:a+e+n:n}("/",e)},parse:function(e){at(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return t;var a,n=e.charCodeAt(0),l=47===n;l?(t.root="/",a=1):a=0;for(var r=-1,i=0,o=-1,s=!0,c=e.length-1,u=0;c>=a;--c)if(47!==(n=e.charCodeAt(c)))-1===o&&(s=!1,o=c+1),46===n?-1===r?r=c:1!==u&&(u=1):-1!==r&&(u=-1);else if(!s){i=c+1;break}return-1===r||-1===o||0===u||1===u&&r===o-1&&r===i+1?-1!==o&&(t.base=t.name=0===i&&l?e.slice(1,o):e.slice(i,o)):(0===i&&l?(t.name=e.slice(1,r),t.base=e.slice(1,o)):(t.name=e.slice(i,r),t.base=e.slice(i,o)),t.ext=e.slice(r,o)),i>0?t.dir=e.slice(0,i-1):l&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};lt.posix=lt;var rt=lt;const it={key:2},ot=g(r({__name:"SidebarItem",props:{item:{type:Object,required:!0},isCollapse:{type:Boolean,default:!1},isFirstLevel:{type:Boolean,default:!0},basePath:{type:String,default:""}},setup(e){const t=e,a=o((()=>t.item.meta&&t.item.meta.alwaysShow)),n=o((()=>{if(t.item.children){return t.item.children.filter((e=>!(e.meta&&e.meta.hidden))).length}return 0})),l=o((()=>{if(n.value>1)return null;if(t.item.children)for(const e of t.item.children)if(!e.meta||!e.meta.hidden)return e;return{...t.item,path:""}})),r=e=>Ze(e)?e:Ze(t.basePath)?t.basePath:rt.resolve(t.basePath,e);return(e,n)=>{var i;const o=s("svg-icon"),p=s("el-menu-item"),g=s("sidebar-item",!0),b=s("el-sub-menu");return(null==(i=t.item.meta)?void 0:i.hidden)?P("",!0):(c(),u("div",{key:0,class:D({"simple-mode":t.isCollapse,"first-level":t.isFirstLevel})},[h(a)||!h(l)||h(l).children?(c(),m(b,{key:1,index:r(t.item.path),"popper-append-to-body":""},{title:f((()=>[t.item.meta&&t.item.meta.svgIcon?(c(),m(o,{key:0,name:t.item.meta.svgIcon},null,8,["name"])):t.item.meta&&t.item.meta.elIcon?(c(),m(v(t.item.meta.elIcon),{key:1,class:"el-icon"})):P("",!0),t.item.meta&&t.item.meta.title?(c(),u("span",it,k(t.item.meta.title),1)):P("",!0)])),default:f((()=>[t.item.children?(c(!0),u(y,{key:0},_(t.item.children,(e=>(c(),m(g,{key:e.path,item:e,"is-collapse":t.isCollapse,"is-first-level":!1,"base-path":r(e.path)},null,8,["item","is-collapse","base-path"])))),128)):P("",!0)])),_:1},8,["index"])):(c(),u(y,{key:0},[h(l).meta?(c(),m(tt,{key:0,to:r(h(l).path)},{default:f((()=>[d(p,{index:r(h(l).path)},q({default:f((()=>[h(l).meta.svgIcon?(c(),m(o,{key:0,name:h(l).meta.svgIcon},null,8,["name"])):h(l).meta.elIcon?(c(),m(v(h(l).meta.elIcon),{key:1,class:"el-icon"})):P("",!0)])),_:2},[h(l).meta.title?{name:"title",fn:f((()=>[F(k(h(l).meta.title),1)])),key:"0"}:void 0]),1032,["index"])])),_:1},8,["to"])):P("",!0)],64))],2))}}}),[["__scopeId","data-v-2f788fbd"]]),st=e=>(M("data-v-7415e5ef"),e=e(),L(),e),ct=st((()=>T("img",{src:"/v3-admin-vite/static/logo.cc70e06e.png",class:"sidebar-logo"},null,-1))),ut=st((()=>T("img",{src:"/v3-admin-vite/static/logo-text-1.b6b0364d.png",class:"sidebar-logo-text"},null,-1))),dt=g(r({__name:"SidebarLogo",props:{collapse:{type:Boolean,default:!0}},setup(e){const t=e;return(e,a)=>{const n=s("router-link");return c(),u("div",{class:D(["sidebar-logo-container",{collapse:t.collapse}])},[d(p,{name:"sidebar-logo-fade"},{default:f((()=>[t.collapse?(c(),m(n,{key:"collapse",to:"/"},{default:f((()=>[ct])),_:1})):(c(),m(n,{key:"expand",to:"/"},{default:f((()=>[ut])),_:1}))])),_:1})],2)}}}),[["__scopeId","data-v-7415e5ef"]]),ft=e=>{let t="";try{t=getComputedStyle(document.documentElement).getPropertyValue(e)}catch(a){console.error(a)}return t},pt=g(r({__name:"index",setup(e){const t=ft("--v3-sidebar-menu-bg-color"),a=ft("--v3-sidebar-menu-text-color"),n=ft("--v3-sidebar-menu-active-text-color"),l=i(),r=ae(),p=z(),v=ce(),{showSidebarLogo:g}=j(v),b=o((()=>{const{meta:e,path:t}=l;return(null==e?void 0:e.activeMenu)?e.activeMenu:t})),w=o((()=>!r.sidebar.opened));return(e,l)=>{const r=s("el-menu"),i=s("el-scrollbar");return c(),u("div",{class:D({"has-logo":h(g)})},[h(g)?(c(),m(dt,{key:0,collapse:h(w)},null,8,["collapse"])):P("",!0),d(i,{"wrap-class":"scrollbar-wrapper"},{default:f((()=>[d(r,{"default-active":h(b),collapse:h(w),"background-color":h(t),"text-color":h(a),"active-text-color":h(n),"unique-opened":!0,"collapse-transition":!1,mode:"vertical"},{default:f((()=>[(c(!0),u(y,null,_(h(p).routes,(e=>(c(),m(ot,{key:e.path,item:e,"base-path":e.path,"is-collapse":h(w)},null,8,["item","base-path","is-collapse"])))),128))])),_:1},8,["default-active","collapse","background-color","text-color","active-text-color"])])),_:1})],2)}}}),[["__scopeId","data-v-add62d2b"]]),mt=e("tags-view",(()=>{const e=n([]);return{visitedViews:e,addVisitedView:t=>{e.value.some(((a,n)=>{if(a.path===t.path)return a.fullPath!==t.fullPath&&(e.value[n]=Object.assign({},t)),!0}))||e.value.push(Object.assign({},t))},delVisitedView:t=>{for(const[a,n]of e.value.entries())if(n.path===t.path){e.value.splice(a,1);break}},delOthersVisitedViews:t=>{e.value=e.value.filter((e=>{var a;return(null==(a=e.meta)?void 0:a.affix)||e.path===t.path}))},delAllVisitedViews:()=>{const t=e.value.filter((e=>{var t;return null==(t=e.meta)?void 0:t.affix}));e.value=t}}})),ht={class:"scroll-container"},vt=g(r({__name:"ScrollPane",setup(e){const t=n(),a=n();let l=0;const r=({scrollLeft:e})=>{l=e},i=e=>{let n=0;const r=a.value.clientWidth,i=t.value.wrap$.clientWidth,o=r-i-l;i>r||(n="left"===e?Math.max(0,l-200):Math.min(l+200,l+o),t.value.setScrollLeft(n))};return(e,n)=>{const l=s("el-icon");return c(),u("div",ht,[d(l,{class:"arrow left",onClick:n[0]||(n[0]=e=>i("left"))},{default:f((()=>[d(h(H))])),_:1}),d(h(N),{ref_key:"scrollbarRef",ref:t,onScroll:r},{default:f((()=>[T("div",{ref_key:"scrollbarContentRef",ref:a,class:"scrollbar-content"},[O(e.$slots,"default",{},void 0,!0)],512)])),_:3},512),d(l,{class:"arrow right",onClick:n[1]||(n[1]=e=>i("right"))},{default:f((()=>[d(h($))])),_:1})])}}}),[["__scopeId","data-v-3e88d80e"]]),gt={class:"tags-view-container"},bt=g(r({__name:"index",setup(e){const t=X(),a=b(),l=i(),r=mt(),o=z(),p=n(!1),v=n(0),g=n(0),E=n({});let C=[];const A=e=>e.path===l.path,V=e=>{var t;return null==(t=e.meta)?void 0:t.affix},S=(e,t="/")=>{let a=[];return e.forEach((e=>{var n;if(null==(n=e.meta)?void 0:n.affix){const n=rt.resolve(t,e.path);a.push({fullPath:n,path:n,name:e.name,meta:{...e.meta}})}if(e.children){const t=S(e.children,e.path);t.length>=1&&(a=a.concat(t))}})),a},I=()=>{l.name&&r.addVisitedView(l)},R=e=>{r.delVisitedView(e),A(e)&&L(r.visitedViews,e)},M=()=>{E.value.fullPath!==l.path&&void 0!==E.value.fullPath&&a.push(E.value.fullPath),r.delOthersVisitedViews(E.value)},L=(e,t)=>{const n=e.slice(-1)[0];void 0!==n&&void 0!==n.fullPath?a.push(n.fullPath):"Dashboard"===t.name?a.push({path:"/redirect"+t.path,query:t.query}):a.push("/")},O=()=>{p.value=!1};return w(l,(()=>{I()}),{deep:!0}),w(p,(e=>{e?document.body.addEventListener("click",O):document.body.removeEventListener("click",O)})),U((()=>{(()=>{C=S(o.routes);for(const e of C)e.name&&r.addVisitedView(e)})(),I()})),(e,n)=>{const i=s("el-icon"),o=s("router-link");return c(),u("div",gt,[d(vt,{class:"tags-view-wrapper"},{default:f((()=>[(c(!0),u(y,null,_(h(r).visitedViews,(e=>(c(),m(o,{key:e.path,class:D([A(e)?"active":"","tags-view-item"]),to:{path:e.path,query:e.query},onMouseup:x((t=>V(e)?"":R(e)),["middle"]),onContextmenu:x((a=>((e,a)=>{const n=t.proxy.$el.getBoundingClientRect().left,l=t.proxy.$el.offsetWidth-105,r=a.clientX-n+15;g.value=r>l?l:r,v.value=a.clientY,p.value=!0,E.value=e})(e,a)),["prevent"])},{default:f((()=>{var t;return[F(k(null==(t=e.meta)?void 0:t.title)+" ",1),V(e)?P("",!0):(c(),m(i,{key:0,size:12,onClick:x((t=>R(e)),["prevent","stop"])},{default:f((()=>[d(h(J))])),_:2},1032,["onClick"]))]})),_:2},1032,["class","to","onMouseup","onContextmenu"])))),128))])),_:1}),B(T("ul",{style:W({left:g.value+"px",top:v.value+"px"}),class:"contextmenu"},[T("li",{onClick:n[0]||(n[0]=e=>{return t=E.value,void a.replace({path:"/redirect"+t.path,query:t.query});var t})},"刷新"),V(E.value)?P("",!0):(c(),u("li",{key:0,onClick:n[1]||(n[1]=e=>R(E.value))},"关闭")),T("li",{onClick:M},"关闭其它"),T("li",{onClick:n[2]||(n[2]=e=>{return t=E.value,r.delAllVisitedViews(),void(C.some((e=>e.path===l.path))||L(r.visitedViews,t));var t})},"关闭所有")],4),[[G,p.value]])])}}}),[["__scopeId","data-v-2f847f82"]]),wt=g(r({__name:"index",props:{buttonTop:{type:Number,default:350}},setup(e){const t=e;Y((e=>({"7cd51d1e":a})));const a=t.buttonTop+"px",l=n(!1);return(e,t)=>{const a=s("el-icon"),n=s("el-drawer");return c(),u(y,null,[T("div",{class:"handle-button",onClick:t[0]||(t[0]=e=>l.value=!0)},[d(a,{size:24},{default:f((()=>[d(h(K))])),_:1})]),d(n,{modelValue:l.value,"onUpdate:modelValue":t[1]||(t[1]=e=>l.value=e),size:"300px","with-header":!1},{default:f((()=>[O(e.$slots,"default",{},void 0,!0)])),_:3},8,["modelValue"])],64)}}}),[["__scopeId","data-v-14d89390"]]),_t=g(r({__name:"index",setup(e){const t=ae(),a=ce();(()=>{const e=i(),t=ae(),a=()=>document.body.getBoundingClientRect().width-1<992,n=()=>{if(!document.hidden){const e=a();t.toggleDevice(e?te.Mobile:te.Desktop),e&&t.closeSidebar(!0)}};w((()=>e.name),(()=>{t.device===te.Mobile&&t.sidebar.opened&&t.closeSidebar(!1)})),Q((()=>{window.addEventListener("resize",n)})),U((()=>{a()&&(t.toggleDevice(te.Mobile),t.closeSidebar(!0))})),Z((()=>{window.removeEventListener("resize",n)}))})();const n=o((()=>({hideSidebar:!t.sidebar.opened,openSidebar:t.sidebar.opened,withoutAnimation:t.sidebar.withoutAnimation,mobile:t.device===te.Mobile}))),l=o((()=>a.showSettings)),r=o((()=>a.showTagsView)),s=o((()=>a.fixedHeader)),p=()=>{t.closeSidebar(!1)};return(e,t)=>(c(),u("div",{class:D([h(n),"app-wrapper"])},[h(n).mobile&&h(n).openSidebar?(c(),u("div",{key:0,class:"drawer-bg",onClick:p})):P("",!0),d(h(pt),{class:"sidebar-container"}),T("div",{class:D([{hasTagsView:h(r)},"main-container"])},[T("div",{class:D({"fixed-header":h(s)})},[d(h(De)),h(r)?(c(),m(h(bt),{key:0})):P("",!0)],2),d(h(de)),h(l)?(c(),m(h(wt),{key:0},{default:f((()=>[d(h(Qe))])),_:1})):P("",!0)],2)],2))}}),[["__scopeId","data-v-566562ee"]]);export{_t as default};