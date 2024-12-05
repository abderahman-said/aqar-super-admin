"use strict";(self.webpackChunkaqar_super_admin=self.webpackChunkaqar_super_admin||[]).push([[3851],{4882:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});var r=t(2791),i=t(9434),l=t(5923),a=t(7689),c=t(4866),s=t(4420),o=t(184);const u=()=>{var e,n,t,u,d,m,p;const h=(0,i.I0)(),f=(0,r.useRef)(null),{getInfoUserData:g}=(0,i.v9)((e=>e.LocationsSlice)),{id:v}=(0,a.UO)();return(0,r.useEffect)((()=>{v&&h((0,l.Se)(v))}),[h,v]),(0,o.jsxs)("div",{className:"container-fluid",children:[(0,o.jsx)(c.F,{ref:f}),(0,o.jsx)("div",{className:"title_page",children:(0,o.jsx)("h3",{children:"User Details"})}),(0,o.jsxs)("div",{className:"grid info_details",children:[(0,o.jsx)("div",{className:"col-6",children:(0,o.jsxs)("div",{className:"title_page",children:[(null===g||void 0===g?void 0:g.name)&&(0,o.jsxs)("div",{className:"flex align-items-center w-100 justify-content-between gap-3",children:[(0,o.jsx)("h5",{children:"Name"}),(0,o.jsx)("h6",{children:g.name})]}),(null===g||void 0===g?void 0:g.email)&&(0,o.jsxs)("div",{className:"flex align-items-center w-100 justify-content-between gap-3",children:[(0,o.jsx)("h5",{children:"Email"}),(0,o.jsx)("h6",{children:g.email})]}),(null===g||void 0===g?void 0:g.phone)&&(0,o.jsxs)("div",{className:"flex align-items-center w-100 justify-content-between gap-3",children:[(0,o.jsx)("h5",{children:"Phone"}),(0,o.jsx)("h6",{children:g.phone})]}),(null===g||void 0===g?void 0:g.role)&&(0,o.jsxs)("div",{className:"flex align-items-center w-100 justify-content-between gap-3",children:[(0,o.jsx)("h5",{children:"Role"}),(0,o.jsx)("h6",{children:g.role})]}),void 0!==(null===g||void 0===g?void 0:g.verified)&&(0,o.jsxs)("div",{className:"flex align-items-center w-100 justify-content-between gap-3",children:[(0,o.jsx)("h5",{children:"Verified"}),(0,o.jsx)("h6",{className:g.verified?"active":"noactive",children:g.verified?"Yes":"No"})]}),(null===g||void 0===g?void 0:g.description)&&(0,o.jsxs)("div",{className:"flex align-items-center w-100 justify-content-between gap-3",children:[(0,o.jsx)("h5",{children:"Description"}),(0,o.jsx)("h6",{children:g.description})]}),void 0!==(null===g||void 0===g?void 0:g.views)&&(0,o.jsxs)("div",{className:"flex align-items-center w-100 justify-content-between gap-3",children:[(0,o.jsx)("h5",{children:"Views"}),(0,o.jsx)("h6",{children:g.views})]})]})}),(0,o.jsx)("div",{className:"col-6",children:(0,o.jsxs)("div",{className:"title_page",children:[(null===g||void 0===g||null===(e=g.servicesArea)||void 0===e?void 0:e.length)>0&&(0,o.jsxs)("div",{className:"flex align-items-center w-100 justify-content-between gap-3",children:[(0,o.jsx)("h5",{children:"Service Area"}),(0,o.jsx)("h6",{children:g.servicesArea.map((e=>e.name.en)).join(", ")})]}),(null===g||void 0===g?void 0:g.createdAt)&&(0,o.jsxs)("div",{className:"flex align-items-center w-100 justify-content-between gap-3",children:[(0,o.jsx)("h5",{children:"Created At"}),(0,o.jsx)("h6",{children:new Date(g.createdAt).toLocaleDateString()})]}),(null===g||void 0===g?void 0:g.updatedAt)&&(0,o.jsxs)("div",{className:"flex align-items-center w-100 justify-content-between gap-3",children:[(0,o.jsx)("h5",{children:"Updated At"}),(0,o.jsx)("h6",{children:new Date(g.updatedAt).toLocaleDateString()})]}),(null===g||void 0===g||null===(n=g.agency)||void 0===n?void 0:n.name)&&(0,o.jsxs)("div",{className:"flex align-items-center w-100 justify-content-between gap-3",children:[(0,o.jsx)("h5",{children:"Agency Name"}),(0,o.jsx)("h6",{children:g.agency.name})]}),(null===g||void 0===g||null===(t=g.agency)||void 0===t?void 0:t.description)&&(0,o.jsxs)("div",{className:"flex align-items-center w-100 justify-content-between gap-3",children:[(0,o.jsx)("h5",{children:"Agency Description"}),(0,o.jsx)("h6",{children:g.agency.description})]}),(null===g||void 0===g||null===(u=g.agency)||void 0===u?void 0:u.logo)&&(0,o.jsxs)("div",{className:"flex align-items-center w-100 justify-content-between gap-3",children:[(0,o.jsx)("h5",{children:"Agency Logo"}),(0,o.jsx)("h6",{children:(0,o.jsx)(s.E,{src:null===(d=g.agency.logo)||void 0===d?void 0:d.link,alt:"Agency Logo",className:"property-thumbnail",width:"50",height:"50",preview:!0})})]}),(null===g||void 0===g?void 0:g.photo)&&(0,o.jsxs)("div",{className:"flex align-items-center w-100 justify-content-between gap-3",children:[(0,o.jsx)("h5",{children:"Photo"}),(0,o.jsx)("h6",{children:(0,o.jsx)(s.E,{src:null===(m=g.photo)||void 0===m?void 0:m.link,alt:"User Photo",className:"property-thumbnail",width:"50",height:"50",preview:!0})})]}),(null===g||void 0===g||null===(p=g.languages)||void 0===p?void 0:p.length)>0&&(0,o.jsxs)("div",{className:"flex align-items-center w-100 justify-content-between gap-3",children:[(0,o.jsx)("h5",{children:"Languages"}),(0,o.jsx)("h6",{children:g.languages.join(", ")})]})]})})]})]})}},4420:(e,n,t)=>{t.d(n,{E:()=>p});var r=t(2791),i=t(7890),l=t(5106),a=t(2062),c=t(9022),s=t(5854);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function d(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,l,a,c=[],s=!0,o=!1;try{if(l=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;s=!1}else for(;!(s=(r=l.call(t)).done)&&(c.push(r.value),c.length!==n);s=!0);}catch(u){o=!0,i=u}finally{try{if(!s&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(o)throw i}}return c}}(e,n)||function(e,n){if(e){if("string"===typeof e)return u(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m={defaultProps:{__TYPE:"Image",alt:null,className:null,downloadable:!1,height:null,imageClassName:null,imageStyle:null,onError:null,onHide:null,onShow:null,preview:!1,src:null,template:null,width:null,zoomSrc:null,children:void 0},getProps:function(e){return s.gb.getMergedProps(e,m.defaultProps)},getOtherProps:function(e){return s.gb.getDiffProps(e,m.defaultProps)}},p=r.memo(r.forwardRef((function(e,n){var t=m.getProps(e),u=d(r.useState(!1),2),p=u[0],h=u[1],f=d(r.useState(!1),2),g=f[0],v=f[1],x=d(r.useState(0),2),j=x[0],y=x[1],w=d(r.useState(1),2),b=w[0],N=w[1],E=r.useRef(null),k=r.useRef(null),S=r.useRef(null),A=r.useRef(null),P=r.useRef(!1),C=function(){t.preview&&(h(!0),setTimeout((function(){v(!0)}),25))},O=function(){P.current||(v(!1),y(0),N(1)),P.current=!1},R=function(){P.current=!0},D=function(){var e=t.alt,n=t.src;s.p7.saveAs({name:e,src:n}),P.current=!0},L=function(){y((function(e){return e+90})),P.current=!0},T=function(){y((function(e){return e-90})),P.current=!0},I=function(){N((function(e){return e+.1})),P.current=!0},_=function(){N((function(e){return e-.1})),P.current=!0},H=function(){s.P9.set("modal",S.current,i.ZP.autoZIndex,i.ZP.zIndex.modal)},U=function(){t.onShow&&t.onShow()},q=function(){s.p7.addClass(S.current,"p-component-overlay-leave")},z=function(){t.onHide&&t.onHide()},W=function(){s.P9.clear(S.current),h(!1)};(0,a.zq)((function(){S.current&&s.P9.clear(S.current)}));r.useImperativeHandle(n,(function(){return{props:t,show:C,hide:O,getElement:function(){return E.current},getImage:function(){return k.current}}}));var Y=t.src,Z=t.alt,M=t.width,X=t.height,J=m.getOtherProps(t),K=(0,s.AK)("p-image p-component",t.className,{"p-image-preview-container":t.preview}),V=function(){var e=t.downloadable,n={transform:"rotate("+j+"deg) scale("+b+")"},a=b<=.5||b>=1.5;return r.createElement("div",{ref:S,className:"p-image-mask p-component-overlay p-component-overlay-enter",onClick:O},r.createElement("div",{className:"p-image-toolbar"},e&&r.createElement("button",{className:"p-image-action p-link",onClick:D,type:"button"},r.createElement("i",{className:"pi pi-download"})),r.createElement("button",{className:"p-image-action p-link",onClick:L,type:"button"},r.createElement("i",{className:"pi pi-refresh"})),r.createElement("button",{className:"p-image-action p-link",onClick:T,type:"button"},r.createElement("i",{className:"pi pi-undo"})),r.createElement("button",{className:"p-image-action p-link",onClick:_,type:"button",disabled:a},r.createElement("i",{className:"pi pi-search-minus"})),r.createElement("button",{className:"p-image-action p-link",onClick:I,type:"button",disabled:a},r.createElement("i",{className:"pi pi-search-plus"})),r.createElement("button",{className:"p-image-action p-link",type:"button","aria-label":(0,i.qJ)("close")},r.createElement("i",{className:"pi pi-times"}))),r.createElement(l.K,{nodeRef:A,classNames:"p-image-preview",in:g,timeout:{enter:150,exit:150},unmountOnExit:!0,onEntering:H,onEntered:U,onExit:q,onExiting:z,onExited:W},r.createElement("div",{ref:A},r.createElement("img",{src:t.zoomSrc||t.src,className:"p-image-preview",style:n,onClick:R,alt:t.alt}))))}(),F=t.template?s.gb.getJSXElement(t.template,t):r.createElement("i",{className:"p-image-preview-icon pi pi-eye"}),$=t.preview?r.createElement("div",{className:"p-image-preview-indicator",onClick:C},F):null,B=t.src&&r.createElement("img",{ref:k,src:Y,className:t.imageClassName,width:M,height:X,style:t.imageStyle,alt:Z,onError:t.onError});return r.createElement("span",o({ref:E,className:K},J),B,$,p&&r.createElement(c.h,{element:V,appendTo:document.body}))})));p.displayName="Image"},9411:(e,n,t)=>{t.d(n,{H:()=>c});var r=t(2791),i=t(7890),l=t(2062),a=t(5854),c=r.memo(r.forwardRef((function(){var e=r.useRef(null),n=r.useRef(null),t=function(){return e.current&&e.current.parentElement},c=function(){n.current&&(n.current.addEventListener("mousedown",o),a.p7.isTouchDevice()&&n.current.addEventListener("touchstart",s))},s=function(t){var r=a.p7.getOffset(n.current),i=t.targetTouches[0].pageX-r.left+document.body.scrollTop-a.p7.getWidth(e.current)/2,l=t.targetTouches[0].pageY-r.top+document.body.scrollLeft-a.p7.getHeight(e.current)/2;u(i,l)},o=function(t){if(!a.p7.isTouchDevice()){var r=a.p7.getOffset(n.current),i=t.pageX-r.left+document.body.scrollTop-a.p7.getWidth(e.current)/2,l=t.pageY-r.top+document.body.scrollLeft-a.p7.getHeight(e.current)/2;u(i,l)}},u=function(t,r){if(e.current&&"none"!==getComputedStyle(e.current,null).display){if(a.p7.removeClass(e.current,"p-ink-active"),!a.p7.getHeight(e.current)&&!a.p7.getWidth(e.current)){var i=Math.max(a.p7.getOuterWidth(n.current),a.p7.getOuterHeight(n.current));e.current.style.height=i+"px",e.current.style.width=i+"px"}e.current.style.top=r+"px",e.current.style.left=t+"px",a.p7.addClass(e.current,"p-ink-active")}};return(0,l.nw)((function(){e.current&&(n.current=t(),c())})),(0,l.rf)((function(){e.current&&!n.current&&(n.current=t(),c())})),(0,l.zq)((function(){e.current&&(n.current=null,n.current&&(n.current.removeEventListener("mousedown",o),a.p7.isTouchDevice()&&n.current.removeEventListener("touchstart",s)))})),i.ZP.ripple?r.createElement("span",{role:"presentation",ref:e,className:"p-ink",onAnimationEnd:function(e){a.p7.removeClass(e.currentTarget,"p-ink-active")}}):null})));c.displayName="Ripple"}}]);
//# sourceMappingURL=3851.6a93c4fd.chunk.js.map