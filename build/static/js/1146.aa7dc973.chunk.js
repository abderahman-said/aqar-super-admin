"use strict";(self.webpackChunkaqar_super_admin=self.webpackChunkaqar_super_admin||[]).push([[1146],{2203:(e,t,n)=>{n.d(t,{AR:()=>w,BA:()=>p,EV:()=>s,G3:()=>g,Vn:()=>d,Wn:()=>m,Zm:()=>l,_H:()=>_,cz:()=>h,dK:()=>f,hS:()=>c,jE:()=>v,kR:()=>F,nn:()=>y,tk:()=>u,vs:()=>b});var r=n(8556),a=n(3713),i=n(6491),o=n(2564);const s=async()=>{const{data:e}=await i.Z.get("/agencies/admin/profile");return e.data.user||[]},l=async()=>{const{data:e}=await i.Z.get("/add-types/");return e.data.adTypes||[]},c=async()=>{const{data:e}=await i.Z.get("/locations/emirates");return e.data.emirates||[]},u=async()=>{const{data:e}=await i.Z.get("/stats/dashboard");return e.data||[]},d=()=>(0,r.D)({mutationFn:async e=>(await i.Z.post("/files/upload",e,{headers:{"Content-Type":"multipart/form-data"}})).data,onError:e=>{var t;const n=(null===(t=e.response)||void 0===t?void 0:t.errors[0])||"Upload failed. Please try again.";o.Am.error(n),console.error("Upload failed:",e)}}),p=()=>(0,r.D)({mutationFn:async e=>(await i.Z.post("/files/upload/single/video",e,{headers:{"Content-Type":"multipart/form-data"}})).data,onError:e=>{var t;const n=(null===(t=e.response)||void 0===t?void 0:t.errors[0])||"Upload failed. Please try again.";o.Am.error(n),console.error("Upload failed:",e)}}),m=()=>(0,r.D)({mutationFn:async e=>(await i.Z.put("/agencies/admin/profile",e)).data,onError:e=>{var t,n;const r=null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.errors[0];o.Am.error(r),console.error("Submission failed:",e)}}),_=()=>{const e=(0,a.NL)();return(0,r.D)({mutationFn:async e=>{let{id:t,visibility:n}=e;return(await i.Z.post("/properties/admin/set-visibility/".concat(t),{visibility:n})).data},onSuccess:()=>{o.Am.success("Visibility updated successfully!"),e.invalidateQueries("PropertiesAdmin")},onError:e=>{var t,n;const r=(null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.errors[0])||"An error occurred.";o.Am.error(r),console.error("Submission failed:",e)}})},f=async()=>{const{data:e}=await i.Z.get("/property-properties/types");return e.data.properties||[]},g=async()=>{const{data:e}=await i.Z.get("/properties/admin/my-properties");return e.data.properties||[]},v=async e=>{const{data:t}=await i.Z.get("/properties/admin/".concat(e));return t.data.property||[]},y=()=>(0,r.D)({mutationFn:async e=>(await i.Z.post("/properties/admin",e)).data,onError:e=>{var t,n;const r=(null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.errors[0])||"Submission failed. Please try again.";o.Am.error(r),console.error("Submission failed:",e)}}),h=e=>(0,r.D)({mutationFn:async t=>(await i.Z.put("/properties/admin/".concat(e),t)).data,onError:e=>{var t,n;const r=(null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.errors[0])||"Submission failed. Please try again.";o.Am.error(r),console.error("Submission failed:",e)}}),b=()=>(0,r.D)({mutationFn:async e=>(await i.Z.get("/subscriptions/ad-type/".concat(e))).data.data.subscriptions,onError:e=>{var t,n;const r=(null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.errors[0])||"Submission failed. Please try again.";o.Am.error(r),console.error("Submission failed:",e)}}),w=()=>(0,r.D)({mutationFn:async e=>(await i.Z.post("/property-subscriptions/admin",e)).data.data,onError:e=>{var t,n;const r=(null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.errors[0])||"Submission failed. Please try again.";o.Am.error(r),console.error("Submission failed:",e)}}),F=async e=>(await i.Z.get("/locations/choose-location?query=".concat(e))).data.data.hits},1146:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var r=n(2791),a=n(7616),i=n(9048),o=n(6355),s=n(4420),l=n(2203),c=n(3713),u=n(4893),d=n(3574),p=n(5854);function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i,o,s=[],l=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(u){c=!0,a=u}finally{try{if(!l&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw a}}return s}}(e,t)||function(e,t){if(e){if("string"===typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var g={defaultProps:{__TYPE:"InputSwitch",checked:!1,className:null,disabled:!1,falseValue:!1,id:null,inputId:null,inputRef:null,name:null,onBlur:null,onChange:null,onFocus:null,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,trueValue:!0,children:void 0},getProps:function(e){return p.gb.getMergedProps(e,g.defaultProps)},getOtherProps:function(e){return p.gb.getDiffProps(e,g.defaultProps)}},v=r.memo(r.forwardRef((function(e,t){var n=g.getProps(e),a=f(r.useState(!1),2),i=a[0],o=a[1],s=r.useRef(null),l=r.useRef(n.inputRef),c=n.checked===n.trueValue,u=function(e){if(n.onChange){var t=c?n.falseValue:n.trueValue;n.onChange({originalEvent:e,value:t,stopPropagation:function(){},preventDefault:function(){},target:{name:n.name,id:n.id,value:t}})}};r.useImperativeHandle(t,(function(){return{props:n,focus:function(){return p.p7.focus(l.current)},getElement:function(){return s.current},getInput:function(){return l.current}}})),r.useEffect((function(){p.gb.combinedRefs(l,n.inputRef)}),[l,n.inputRef]);var _=p.gb.isNotEmpty(n.tooltip),v=g.getOtherProps(n),y=p.gb.reduceKeys(v,p.p7.ARIA_PROPS),h=(0,p.AK)("p-inputswitch p-component",{"p-inputswitch-checked":c,"p-disabled":n.disabled,"p-focus":i},n.className);return r.createElement(r.Fragment,null,r.createElement("div",m({ref:s,id:n.id,className:h,style:n.style},v,{onClick:function(e){n.disabled||(u(e),p.p7.focus(l.current),e.preventDefault())},role:"checkbox","aria-checked":c}),r.createElement("div",{className:"p-hidden-accessible"},r.createElement("input",m({ref:l,type:"checkbox",id:n.inputId,name:n.name,checked:c,onChange:u,onFocus:function(e){o(!0),n.onFocus&&n.onFocus(e)},onBlur:function(e){o(!1),n.onBlur&&n.onBlur(e)},disabled:n.disabled,role:"switch",tabIndex:n.tabIndex,"aria-checked":c},y))),r.createElement("span",{className:"p-inputswitch-slider"})),_&&r.createElement(d.u,m({target:s,content:n.tooltip},n.tooltipOptions)))})));v.displayName="InputSwitch";var y=n(5343),h=n(1063),b=n(1087),w=n(4286),F=n(3014),S=n(4866),x=n(5705),E=n(184);const N=()=>{const e=(0,r.useRef)(null),[t,n]=(0,r.useState)(!1),[d,m]=(0,r.useState)(""),_=(0,c.NL)(),{data:f}=(0,u.a)({queryKey:["PropertiesAdmin"],queryFn:l.G3}),{mutate:g}=(0,l.AR)(),{mutate:N}=(0,l._H)(),{mutate:j,data:C}=(0,l.vs)(),A=(0,x.TA)({enableReinitialize:!0,initialValues:{type:""},validate:e=>{const t={};return e.type||(t.type="Type subscription is required."),t},onSubmit:(t,r)=>{let{resetForm:a}=r;const i={property:d,subscription:t.type.id};g(i,{onSuccess:()=>{_.invalidateQueries("PropertiesAdmin"),e.current.show({severity:"success",summary:"Success",detail:"Subscription updated successfully."}),n(!1),a()},onError:()=>{e.current.show({severity:"error",summary:"Error",detail:"Failed to update subscription."})}})}}),P=e=>!(!A.touched[e]||!A.errors[e]);return(0,E.jsxs)("div",{className:"container-fluid",children:[(0,E.jsx)(S.F,{ref:e}),(0,E.jsxs)("div",{className:"title_page",children:[(0,E.jsx)("h3",{children:"My Ads"}),(0,E.jsx)(b.OL,{className:"add_btn",to:"/addAd",children:"Add Ads"})]}),(0,E.jsx)("div",{className:"Tabel_container",children:(0,E.jsxs)(y.w,{value:f||[],paginator:!0,rows:5,className:a.Z.datatable,lazy:!0,children:[(0,E.jsx)(h.s,{field:"title.en",header:"Title"}),(0,E.jsx)(h.s,{field:"price",header:"Price"}),(0,E.jsx)(h.s,{field:"currency.name.en",header:"Currency"}),(0,E.jsx)(h.s,{field:"owner",header:"Owner Name"}),(0,E.jsx)(h.s,{body:e=>(0,E.jsxs)("div",{className:"flex align-items-center gap-3",children:[(0,E.jsx)("span",{className:e.activeSubscription?a.Z.statusNotFinished:a.Z.statusFinished,children:e.activeSubscription?"Active":"Inactive"}),!e.activeSubscription&&(0,E.jsx)("button",{className:"add_btn_2",onClick:()=>{n(!0),m(e.id),j(e.adType)},children:"Activate"})]}),header:"Status"}),(0,E.jsx)(h.s,{header:"Images",body:e=>{var t,n;return(0,E.jsx)(s.E,{src:null===(t=e.images[0])||void 0===t?void 0:t.link,zoomSrc:null===(n=e.images[0])||void 0===n?void 0:n.link,alt:"Property",className:"property-thumbnail",width:50,height:50,preview:!0})},style:{maxWidth:"7rem"}}),(0,E.jsx)(h.s,{body:e=>(0,E.jsx)(b.OL,{to:"/Edit/".concat(e.id,"/").concat(e.title.en.replace(/\s+/g,"-").toLowerCase()),className:a.Z.edit,children:(0,E.jsx)(o.fmQ,{})}),header:"Edit"}),(0,E.jsx)(h.s,{body:e=>(0,E.jsx)(b.OL,{to:"/View/".concat(e.id,"/").concat(e.title.en.replace(/\s+/g,"-").toLowerCase()),className:a.Z.view,children:(0,E.jsx)(o.dSq,{})}),header:"View"}),(0,E.jsx)(h.s,{body:e=>(0,E.jsx)(v,{checked:e.visible,onChange:t=>N({id:e.id,visibility:t.value})}),header:"Visibility"})]})}),(0,E.jsx)(w.V,{visible:t,style:{width:"50vw"},onHide:()=>n(!1),children:(0,E.jsxs)("form",{onSubmit:A.handleSubmit,className:i.Z.Signup_form_container,children:[(0,E.jsx)("div",{className:"grid",children:(0,E.jsx)("div",{className:"col-12",children:(0,E.jsx)("div",{className:i.Z.inputFormik2,children:(0,E.jsxs)("div",{className:i.Z.Signup_container,children:[(0,E.jsx)("label",{htmlFor:"type",children:"Type of Subscription"}),(0,E.jsx)(F.L,{className:(0,p.AK)({"p-invalid":P("type")}),value:A.values.type,onChange:e=>A.setFieldValue("type",e.value),options:C,optionLabel:"name.en",placeholder:"Select a subscription type"}),(k="type",P(k)?(0,E.jsx)("small",{className:"p-error",children:A.errors[k]}):(0,E.jsx)("small",{className:"p-error",children:"\xa0"}))]})})})}),(0,E.jsx)("div",{className:"form-actions",children:(0,E.jsx)("button",{type:"submit",className:"add_btn mx-auto",children:"Save"})})]})})]});var k}},4420:(e,t,n)=>{n.d(t,{E:()=>m});var r=n(2791),a=n(7890),i=n(5106),o=n(2062),s=n(9022),l=n(5854);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i,o,s=[],l=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(u){c=!0,a=u}finally{try{if(!l&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw a}}return s}}(e,t)||function(e,t){if(e){if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p={defaultProps:{__TYPE:"Image",alt:null,className:null,downloadable:!1,height:null,imageClassName:null,imageStyle:null,onError:null,onHide:null,onShow:null,preview:!1,src:null,template:null,width:null,zoomSrc:null,children:void 0},getProps:function(e){return l.gb.getMergedProps(e,p.defaultProps)},getOtherProps:function(e){return l.gb.getDiffProps(e,p.defaultProps)}},m=r.memo(r.forwardRef((function(e,t){var n=p.getProps(e),u=d(r.useState(!1),2),m=u[0],_=u[1],f=d(r.useState(!1),2),g=f[0],v=f[1],y=d(r.useState(0),2),h=y[0],b=y[1],w=d(r.useState(1),2),F=w[0],S=w[1],x=r.useRef(null),E=r.useRef(null),N=r.useRef(null),j=r.useRef(null),C=r.useRef(!1),A=function(){n.preview&&(_(!0),setTimeout((function(){v(!0)}),25))},P=function(){C.current||(v(!1),b(0),S(1)),C.current=!1},k=function(){C.current=!0},I=function(){var e=n.alt,t=n.src;l.p7.saveAs({name:e,src:t}),C.current=!0},O=function(){b((function(e){return e+90})),C.current=!0},Z=function(){b((function(e){return e-90})),C.current=!0},D=function(){S((function(e){return e+.1})),C.current=!0},R=function(){S((function(e){return e-.1})),C.current=!0},T=function(){l.P9.set("modal",N.current,a.ZP.autoZIndex,a.ZP.zIndex.modal)},L=function(){n.onShow&&n.onShow()},V=function(){l.p7.addClass(N.current,"p-component-overlay-leave")},q=function(){n.onHide&&n.onHide()},H=function(){l.P9.clear(N.current),_(!1)};(0,o.zq)((function(){N.current&&l.P9.clear(N.current)}));r.useImperativeHandle(t,(function(){return{props:n,show:A,hide:P,getElement:function(){return x.current},getImage:function(){return E.current}}}));var U=n.src,M=n.alt,K=n.width,z=n.height,B=p.getOtherProps(n),Q=(0,l.AK)("p-image p-component",n.className,{"p-image-preview-container":n.preview}),Y=function(){var e=n.downloadable,t={transform:"rotate("+h+"deg) scale("+F+")"},o=F<=.5||F>=1.5;return r.createElement("div",{ref:N,className:"p-image-mask p-component-overlay p-component-overlay-enter",onClick:P},r.createElement("div",{className:"p-image-toolbar"},e&&r.createElement("button",{className:"p-image-action p-link",onClick:I,type:"button"},r.createElement("i",{className:"pi pi-download"})),r.createElement("button",{className:"p-image-action p-link",onClick:O,type:"button"},r.createElement("i",{className:"pi pi-refresh"})),r.createElement("button",{className:"p-image-action p-link",onClick:Z,type:"button"},r.createElement("i",{className:"pi pi-undo"})),r.createElement("button",{className:"p-image-action p-link",onClick:R,type:"button",disabled:o},r.createElement("i",{className:"pi pi-search-minus"})),r.createElement("button",{className:"p-image-action p-link",onClick:D,type:"button",disabled:o},r.createElement("i",{className:"pi pi-search-plus"})),r.createElement("button",{className:"p-image-action p-link",type:"button","aria-label":(0,a.qJ)("close")},r.createElement("i",{className:"pi pi-times"}))),r.createElement(i.K,{nodeRef:j,classNames:"p-image-preview",in:g,timeout:{enter:150,exit:150},unmountOnExit:!0,onEntering:T,onEntered:L,onExit:V,onExiting:q,onExited:H},r.createElement("div",{ref:j},r.createElement("img",{src:n.zoomSrc||n.src,className:"p-image-preview",style:t,onClick:k,alt:n.alt}))))}(),J=n.template?l.gb.getJSXElement(n.template,n):r.createElement("i",{className:"p-image-preview-icon pi pi-eye"}),W=n.preview?r.createElement("div",{className:"p-image-preview-indicator",onClick:A},J):null,X=n.src&&r.createElement("img",{ref:E,src:U,className:n.imageClassName,width:K,height:z,style:n.imageStyle,alt:M,onError:n.onError});return r.createElement("span",c({ref:x,className:Q},B),X,W,m&&r.createElement(s.h,{element:Y,appendTo:document.body}))})));m.displayName="Image"},7616:(e,t,n)=>{n.d(t,{Z:()=>r});const r={content_cp:"Cp_content_cp__nfXGd",h2:"Cp_h2__Mm64t",view:"Cp_view__NEDf5",del:"Cp_del__CM7al",edit:"Cp_edit__4ElG3",row_details_card:"Cp_row_details_card__cqJ0L",add_btn:"Cp_add_btn__IAiVO",flex_details_card:"Cp_flex_details_card__cmErd",cardDash:"Cp_cardDash__1rcWY",icon:"Cp_icon__6T17q",p:"Cp_p__YI2fv",statusNotFinished:"Cp_statusNotFinished__E6r-P",statusFinished:"Cp_statusFinished__AymY9",itemPayments:"Cp_itemPayments__jYc-D",real_estate_list:"Cp_real_estate_list__wFkwI",title:"Cp_title__ql1oT",des:"Cp_des__2LJQv",item:"Cp_item__3vuvO",count:"Cp_count__D-XXt",label_icon:"Cp_label_icon__5fc+t",label:"Cp_label__Iea3I"}},9048:(e,t,n)=>{n.d(t,{Z:()=>r});const r={FormBody:"Forms_FormBody__7Accf",Signup_form_container:"Forms_Signup_form_container__UfshA",Signup_container:"Forms_Signup_container__14q4v",Dialog_Signup_container:"Forms_Dialog_Signup_container__h0Uf3",labelDocumentsFile:"Forms_labelDocumentsFile__oyS4R",next:"Forms_next__oW+PU",NextDialog:"Forms_NextDialog__efAM9",prev:"Forms_prev__upQOK",user_Info:"Forms_user_Info__2Ow3k",info:"Forms_info__HWb8L",icon:"Forms_icon__x6QtY",Icon_image:"Forms_Icon_image__UOSpS",image_text:"Forms_image_text__2LfcF",text_span:"Forms_text_span__36KNU",text_p:"Forms_text_p__Fyus3",image_show:"Forms_image_show__QMJXM",Images_show_container:"Forms_Images_show_container__X3gub",SignInfo:"Forms_SignInfo__5FhQd",SignupForm:"Forms_SignupForm__Sx6sj",change_store_image:"Forms_change_store_image__jLTHi",tab_icon:"Forms_tab_icon__JTk4R",plusBtn:"Forms_plusBtn__tjerp",inputFormik3:"Forms_inputFormik3__9ODPH",inputFormik4:"Forms_inputFormik4__93ynL",tab_submit:"Forms_tab_submit__C33xC",upload_img:"Forms_upload_img__mheDU",upload_img_2:"Forms_upload_img_2__zmoof",circle:"Forms_circle__3EMwO",blus:"Forms_blus__ALd8K",resha_dialog:"Forms_resha_dialog__WIgHS",edit_img:"Forms_edit_img__mNxYq",data__info:"Forms_data__info__dGk7F"}}}]);
//# sourceMappingURL=1146.aa7dc973.chunk.js.map