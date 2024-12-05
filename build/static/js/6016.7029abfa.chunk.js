"use strict";(self.webpackChunkaqar_super_admin=self.webpackChunkaqar_super_admin||[]).push([[6016],{7388:(e,a,s)=>{s.r(a),s.d(a,{default:()=>d});s(2791);var r=s(6856),l=s(71),i=s(7049),o=s(4420),n=s(184);const d=e=>{let{label:a="Upload image",placeholder:s="Upload img",image:d,imageValue:t,onImageUpload:c,onDeleteImage:m,onDeleteImageValue:u}=e;return(0,n.jsxs)("div",{className:i.Z.upLoad,children:[(0,n.jsxs)("label",{htmlFor:"image_upload",children:[a," ",(0,n.jsx)("span",{children:"*"})]}),(0,n.jsx)("div",{className:i.Z.image_container,children:(0,n.jsxs)("div",{id:"image_upload",className:i.Z.image_slot,children:[(0,n.jsx)(r.YFT,{}),s,(0,n.jsx)("input",{type:"file",id:"image_upload",onChange:c})]})}),(0,n.jsxs)("div",{className:"flex gap-3 align-items-center ",children:[t&&(0,n.jsx)("div",{className:i.Z.image_preview,children:(0,n.jsx)("div",{className:i.Z.images_container,children:(0,n.jsx)(o.E,{src:t,loading:"lazy",alt:"uploaded",width:80,height:80})})}),d&&(0,n.jsx)("div",{className:i.Z.image_preview,children:(0,n.jsxs)("div",{className:i.Z.images_container,children:[(0,n.jsx)(o.E,{src:d,loading:"lazy",alt:"uploaded",width:80,height:80}),(0,n.jsx)("button",{type:"button",onClick:m,className:i.Z.delete_button,children:(0,n.jsx)(l.bjh,{})})]})})]})]})}},2203:(e,a,s)=>{s.d(a,{AR:()=>N,BA:()=>u,EV:()=>n,G3:()=>x,Vn:()=>m,Wn:()=>p,Zm:()=>d,_H:()=>h,cz:()=>_,dK:()=>v,hS:()=>t,jE:()=>j,kR:()=>b,nn:()=>g,tk:()=>c,vs:()=>y});var r=s(8556),l=s(3713),i=s(6491),o=s(2564);const n=async()=>{const{data:e}=await i.Z.get("/agencies/admin/profile");return e.data.user||[]},d=async()=>{const{data:e}=await i.Z.get("/add-types/");return e.data.adTypes||[]},t=async()=>{const{data:e}=await i.Z.get("/locations/emirates");return e.data.emirates||[]},c=async()=>{const{data:e}=await i.Z.get("/stats/dashboard");return e.data||[]},m=()=>(0,r.D)({mutationFn:async e=>(await i.Z.post("/files/upload",e,{headers:{"Content-Type":"multipart/form-data"}})).data,onError:e=>{var a;const s=(null===(a=e.response)||void 0===a?void 0:a.errors[0])||"Upload failed. Please try again.";o.Am.error(s),console.error("Upload failed:",e)}}),u=()=>(0,r.D)({mutationFn:async e=>(await i.Z.post("/files/upload/single/video",e,{headers:{"Content-Type":"multipart/form-data"}})).data,onError:e=>{var a;const s=(null===(a=e.response)||void 0===a?void 0:a.errors[0])||"Upload failed. Please try again.";o.Am.error(s),console.error("Upload failed:",e)}}),p=()=>(0,r.D)({mutationFn:async e=>(await i.Z.put("/agencies/admin/profile",e)).data,onError:e=>{var a,s;const r=null===(a=e.response)||void 0===a||null===(s=a.data)||void 0===s?void 0:s.errors[0];o.Am.error(r),console.error("Submission failed:",e)}}),h=()=>{const e=(0,l.NL)();return(0,r.D)({mutationFn:async e=>{let{id:a,visibility:s}=e;return(await i.Z.post("/properties/admin/set-visibility/".concat(a),{visibility:s})).data},onSuccess:()=>{o.Am.success("Visibility updated successfully!"),e.invalidateQueries("PropertiesAdmin")},onError:e=>{var a,s;const r=(null===(a=e.response)||void 0===a||null===(s=a.data)||void 0===s?void 0:s.errors[0])||"An error occurred.";o.Am.error(r),console.error("Submission failed:",e)}})},v=async()=>{const{data:e}=await i.Z.get("/property-properties/types");return e.data.properties||[]},x=async()=>{const{data:e}=await i.Z.get("/properties/admin/my-properties");return e.data.properties||[]},j=async e=>{const{data:a}=await i.Z.get("/properties/admin/".concat(e));return a.data.property||[]},g=()=>(0,r.D)({mutationFn:async e=>(await i.Z.post("/properties/admin",e)).data,onError:e=>{var a,s;const r=(null===(a=e.response)||void 0===a||null===(s=a.data)||void 0===s?void 0:s.errors[0])||"Submission failed. Please try again.";o.Am.error(r),console.error("Submission failed:",e)}}),_=e=>(0,r.D)({mutationFn:async a=>(await i.Z.put("/properties/admin/".concat(e),a)).data,onError:e=>{var a,s;const r=(null===(a=e.response)||void 0===a||null===(s=a.data)||void 0===s?void 0:s.errors[0])||"Submission failed. Please try again.";o.Am.error(r),console.error("Submission failed:",e)}}),y=()=>(0,r.D)({mutationFn:async e=>(await i.Z.get("/subscriptions/ad-type/".concat(e))).data.data.subscriptions,onError:e=>{var a,s;const r=(null===(a=e.response)||void 0===a||null===(s=a.data)||void 0===s?void 0:s.errors[0])||"Submission failed. Please try again.";o.Am.error(r),console.error("Submission failed:",e)}}),N=()=>(0,r.D)({mutationFn:async e=>(await i.Z.post("/property-subscriptions/admin",e)).data.data,onError:e=>{var a,s;const r=(null===(a=e.response)||void 0===a||null===(s=a.data)||void 0===s?void 0:s.errors[0])||"Submission failed. Please try again.";o.Am.error(r),console.error("Submission failed:",e)}}),b=async e=>(await i.Z.get("/locations/choose-location?query=".concat(e))).data.data.hits},6016:(e,a,s)=>{s.r(a),s.d(a,{default:()=>Z});var r=s(2791),l=s(9362),i=s.n(l),o=s(4893),n=s(7689),d=s(2203),t=s(7049),c=s(5705),m=s(184);const u=e=>{var a,s,r,l,i,n,u,p;let{formData:h,setFormData:v,nextStep:x,getPerpose:j}=e;const{data:g}=(0,o.a)({queryKey:["addTypes"],queryFn:d.Zm}),_=(0,c.TA)({initialValues:{purpose:h.purpose,category:h.category,title:{ar:(null===(a=h.title)||void 0===a?void 0:a.ar)||"",en:(null===(s=h.title)||void 0===s?void 0:s.en)||""},measurement:h.measurement,type:h.type,advertiserType:h.advertiserType,adType:h.adType,price:h.price,currency:h.currency,ready:h.ready,commercialProperties:h.commercialProperties||""},validate:e=>{var a,s;let r={};return e.commercialProperties||(r.commercialProperties="commercial Properties is required"),e.adType||(r.adType="ad Type is required"),e.purpose||(r.purpose="Purpose is required"),e.category||(r.category="Category is required"),e.measurement||(r.measurement="measurement is required"),null!==(a=e.title)&&void 0!==a&&a.ar||(r.title={ar:"Ad Title in Arabic is required"}),null!==(s=e.title)&&void 0!==s&&s.en||(r.title={...r.title,en:"Ad Title in English is required"}),e.type||(r.type="property Type is required"),e.advertiserType||(r.advertiserType="Advertiser Type is required"),e.price||(r.price="Total Price is required"),e.currency||(r.currency="Currency is required"),null===e.ready&&(r.ready="Delivery readiness is required"),r},onSubmit:e=>{const a={...h,...e};console.log("Step 1 Form Data:",a),v(a),x()}});return(0,m.jsxs)("form",{onSubmit:_.handleSubmit,className:t.Z.form_contact_home,children:[(0,m.jsxs)("div",{className:"div-flex-co pb-5",children:[(0,m.jsx)("h2",{children:"Publish your advertisement"}),(0,m.jsx)("p",{className:"p-0",children:"Add your advertisement details"})]}),(0,m.jsxs)("div",{className:"grid",children:[(0,m.jsx)("div",{className:"col-12 md:col-12 lg:col-12 ",children:(0,m.jsxs)("div",{className:t.Z.inout_adv,children:[(0,m.jsxs)("label",{children:["Please Select Purpose ",(0,m.jsx)("span",{children:"*"})]}),(0,m.jsxs)("select",{name:"purpose",value:_.values.purpose,onChange:_.handleChange,className:"form-select ".concat(t.Z.formSelect),children:[(0,m.jsx)("option",{value:"",children:"Purpose"}),null===j||void 0===j?void 0:j.map((e=>{var a;return"purpose"===e.type?null===(a=e.properties)||void 0===a?void 0:a.map((e=>{var a;return(0,m.jsx)("option",{value:e._id,children:null===(a=e.name)||void 0===a?void 0:a.en},e._id)})):null}))]}),_.errors.purpose&&(0,m.jsx)("small",{children:_.errors.purpose})]})}),(0,m.jsx)("div",{className:"col-12 md:col-12 lg:col-12 ",children:(0,m.jsxs)("div",{className:t.Z.inout_adv,children:[(0,m.jsxs)("label",{children:["select commercial property ",(0,m.jsx)("span",{children:"*"})]}),(0,m.jsxs)("select",{name:"commercialProperties",value:_.values.commercialProperties,onChange:_.handleChange,className:"form-select ".concat(t.Z.formSelect),children:[(0,m.jsx)("option",{value:"",children:"select commercial property"}),null===j||void 0===j?void 0:j.map((e=>{var a;return"commercial-property"===e.type?null===(a=e.properties)||void 0===a?void 0:a.map((e=>{var a;return(0,m.jsx)("option",{value:e._id,children:null===(a=e.name)||void 0===a?void 0:a.en},e._id)})):null}))]}),_.errors.commercialProperties&&(0,m.jsx)("small",{children:_.errors.commercialProperties})]})}),(0,m.jsx)("div",{className:"col-12 md:col-6 lg:col-6 ",children:(0,m.jsxs)("div",{className:t.Z.inout_adv,children:[(0,m.jsxs)("label",{children:["Select Category ",(0,m.jsx)("span",{children:"*"})]}),(0,m.jsxs)("select",{name:"category",value:_.values.category,onChange:_.handleChange,className:"form-select ".concat(t.Z.formSelect),children:[(0,m.jsx)("option",{value:"",children:"Select Category"}),null===j||void 0===j?void 0:j.map((e=>{var a;return"category"===e.type?null===(a=e.properties)||void 0===a?void 0:a.map((e=>{var a;return(0,m.jsx)("option",{value:e._id,children:null===(a=e.name)||void 0===a?void 0:a.en},e._id)})):null}))]}),_.errors.category&&(0,m.jsx)("small",{children:_.errors.category})]})}),(0,m.jsx)("div",{className:"col-12 md:col-6 lg:col-6 ",children:(0,m.jsxs)("div",{className:t.Z.inout_adv,children:[(0,m.jsxs)("label",{children:["Select ad type ",(0,m.jsx)("span",{children:"*"})]}),(0,m.jsxs)("select",{name:"adType",value:_.values.adType,onChange:_.handleChange,className:"form-select ".concat(t.Z.formSelect),children:[(0,m.jsx)("option",{value:"",children:"Select adType"}),null===g||void 0===g?void 0:g.map((e=>{var a;return(0,m.jsx)("option",{value:e.id,children:null===(a=e.name)||void 0===a?void 0:a.en},e.id)}))]}),_.errors.adType&&(0,m.jsx)("small",{children:_.errors.adType})]})}),(0,m.jsx)("div",{className:"col-12 md:col-6 lg:col-6",children:(0,m.jsxs)("div",{className:t.Z.inout_adv,children:[(0,m.jsxs)("label",{children:["Ad Title En ",(0,m.jsx)("span",{children:"*"})]}),(0,m.jsx)("input",{type:"text",name:"title.en",value:null===(r=_.values.title)||void 0===r?void 0:r.en,onChange:_.handleChange,placeholder:"Ex: Apartment 150 m for sale in Sun street excellent price",required:!0}),(null===(l=_.errors.title)||void 0===l?void 0:l.en)&&(0,m.jsx)("small",{children:null===(i=_.errors.title)||void 0===i?void 0:i.en})]})}),(0,m.jsx)("div",{className:"col-12 md:col-6 lg:col-6",children:(0,m.jsxs)("div",{className:t.Z.inout_adv,children:[(0,m.jsxs)("label",{children:["Ad Title AR ",(0,m.jsx)("span",{children:"*"})]}),(0,m.jsx)("input",{type:"text",name:"title.ar",value:null===(n=_.values.title)||void 0===n?void 0:n.ar,onChange:_.handleChange,placeholder:"Ex: Apartment 150 m for sale in Sun street excellent price",required:!0}),(null===(u=_.errors.title)||void 0===u?void 0:u.ar)&&(0,m.jsx)("small",{children:null===(p=_.errors.title)||void 0===p?void 0:p.ar})]})}),(0,m.jsx)("div",{className:"col-12 md:col-6 lg:col-6",children:(0,m.jsxs)("div",{className:t.Z.inout_adv,children:[(0,m.jsxs)("label",{children:["Advertiser Type ",(0,m.jsx)("span",{children:"*"})]}),(0,m.jsxs)("select",{name:"advertiserType",value:_.values.advertiserType,onChange:_.handleChange,className:"form-select ".concat(t.Z.formSelect),children:[(0,m.jsx)("option",{value:"",children:"Advertiser Type"}),null===j||void 0===j?void 0:j.map((e=>{var a;return"advertiser-type"===e.type?null===(a=e.properties)||void 0===a?void 0:a.map((e=>{var a;return(0,m.jsx)("option",{value:e._id,children:null===(a=e.name)||void 0===a?void 0:a.en},e._id)})):null}))]}),_.errors.advertiserType&&(0,m.jsx)("small",{children:_.errors.advertiserType})]})}),(0,m.jsx)("div",{className:"col-12 md:col-6 lg:col-6",children:(0,m.jsxs)("div",{className:t.Z.inout_adv,children:[(0,m.jsxs)("label",{children:["property Type ",(0,m.jsx)("span",{children:"*"})]}),(0,m.jsxs)("select",{name:"type",value:_.values.type,onChange:_.handleChange,className:"form-select ".concat(t.Z.formSelect),children:[(0,m.jsx)("option",{value:"",children:"property Type"}),null===j||void 0===j?void 0:j.map((e=>{var a;return"property-type"===e.type?null===(a=e.properties)||void 0===a?void 0:a.map((e=>{var a;return(0,m.jsx)("option",{value:e._id,children:null===(a=e.name)||void 0===a?void 0:a.en},e._id)})):null}))]}),_.errors.type&&(0,m.jsx)("small",{children:_.errors.type})]})}),(0,m.jsx)("div",{className:"col-12 md:col-12 lg:col-12 ",children:(0,m.jsxs)("div",{className:t.Z.inout_adv,children:[(0,m.jsxs)("label",{children:["Advertiser Type ",(0,m.jsx)("span",{children:"*"})]}),(0,m.jsxs)("select",{name:"measurement",value:_.values.measurement,onChange:_.handleChange,className:"form-select ".concat(t.Z.formSelect),children:[(0,m.jsx)("option",{value:"",children:"property Type"}),null===j||void 0===j?void 0:j.map((e=>{var a;return"measurement"===e.type?null===(a=e.properties)||void 0===a?void 0:a.map((e=>{var a;return(0,m.jsx)("option",{value:e._id,children:null===(a=e.name)||void 0===a?void 0:a.en},e._id)})):null}))]}),_.errors.measurement&&(0,m.jsx)("small",{children:_.errors.measurement})]})}),(0,m.jsx)("div",{className:"col-12 md:col-6 lg:col-6",children:(0,m.jsxs)("div",{className:t.Z.inout_adv,children:[(0,m.jsxs)("label",{children:["Total Price ",(0,m.jsx)("span",{children:"*"})]}),(0,m.jsx)("input",{type:"number",name:"price",value:_.values.price,onChange:_.handleChange,placeholder:"Enter total price",min:"0",required:!0}),_.errors.price&&(0,m.jsx)("small",{children:_.errors.price})]})}),(0,m.jsx)("div",{className:"col-12 md:col-6 lg:col-6",children:(0,m.jsxs)("div",{className:t.Z.inout_adv,children:[(0,m.jsxs)("label",{children:["Select Currency ",(0,m.jsx)("span",{children:"*"})]}),(0,m.jsxs)("select",{name:"currency",value:_.values.currency,onChange:_.handleChange,className:"form-select ".concat(t.Z.formSelect),children:[(0,m.jsx)("option",{"data-display":"Select Currency",children:"Select Currency"}),null===j||void 0===j?void 0:j.map((e=>{var a;return"currency"===e.type?null===(a=e.properties)||void 0===a?void 0:a.map((e=>{var a;return(0,m.jsx)("option",{value:e._id,children:null===(a=e.name)||void 0===a?void 0:a.en},e._id)})):null}))]}),_.errors.currency&&(0,m.jsx)("small",{children:_.errors.currency})]})}),(0,m.jsx)("div",{className:"col-12 md:col-12 lg:col-12 ",children:(0,m.jsxs)("div",{className:t.Z.inout_adv,children:[(0,m.jsxs)("label",{children:["Delivery Readiness ",(0,m.jsx)("span",{children:"*"})]}),(0,m.jsxs)("div",{className:t.Z.radio_container_size,children:[(0,m.jsx)("div",{className:t.Z.radio_wrapper,children:(0,m.jsxs)("label",{className:t.Z.radio_button,children:[(0,m.jsx)("input",{type:"radio",name:"ready",value:"ready",checked:!0===_.values.ready,onChange:()=>_.setFieldValue("ready",!0)}),(0,m.jsx)("span",{className:t.Z.radio_checkmark}),(0,m.jsx)("span",{className:t.Z.radio_label,children:"Ready"})]})}),(0,m.jsx)("div",{className:t.Z.radio_wrapper,children:(0,m.jsxs)("label",{className:t.Z.radio_button,children:[(0,m.jsx)("input",{type:"radio",name:"ready",value:"unready",checked:!1===_.values.ready,onChange:()=>_.setFieldValue("ready",!1)}),(0,m.jsx)("span",{className:t.Z.radio_checkmark}),(0,m.jsx)("span",{className:t.Z.radio_label,children:"Unready"})]})})]}),_.errors.ready&&(0,m.jsx)("small",{children:_.errors.ready})]})})]}),(0,m.jsx)("div",{className:"flex mt-4 align-items-center justify-content-between",children:(0,m.jsx)("button",{type:"submit",className:"add_btn",children:"Next"})})]})};var p=s(7388);const h=e=>{var a,s;let{formData:l,getPerpose:i,setFormData:o,previousStep:n,nextStep:u}=e;const{mutate:h}=(0,d.Vn)(),[v,x]=(0,r.useState)(null),[j,g]=(0,r.useState)(null),_=(0,c.TA)({initialValues:{description:l.description||{ar:"",en:""},size:l.size||0,rooms:l.rooms||0,bathrooms:l.bathrooms||0,age:l.age||0,serviceCharge:l.serviceCharge||"",furnished:l.furnished||!1,mortageEligable:l.mortageEligable||!1,authQRCode:l.authQRCode||"",propertyNumber:l.propertyNumber||"",authNumber:l.authNumber||""},validate:e=>{var a,s;const r={};return null!==(a=e.description)&&void 0!==a&&a.ar||(r.description={ar:"Property Description in Arabic is required"}),null!==(s=e.description)&&void 0!==s&&s.en||(r.description={...r.description,en:"Property Description in English is required"}),e.authNumber||(r.authNumber="auth Number is required"),e.propertyNumber||(r.propertyNumber="property Number is required"),e.authQRCode||(r.authQRCode="auth QRCode is required"),e.rooms||(r.rooms="rooms is required"),e.bathrooms||(r.bathrooms="bathrooms is required"),e.size||(r.size="Area is required"),e.age||(r.age="Property Age is required"),e.serviceCharge||(r.serviceCharge="Service Charge is required"),"boolean"!==typeof e.furnished&&(r.furnished="furnished selection is required"),"boolean"!==typeof e.mortageEligable&&(r.mortageEligable="Mortgage Eligibility is required"),r},onSubmit:e=>{const a={...l,...e};l.authQRCode===e.authQRCode&&delete a.authQRCode,o(a),u()}}),y=(0,r.useCallback)((async e=>{const a=e.target.files[0];if(a){const e=new FormData;e.append("files",a),await h(e,{onSuccess:e=>{const a=e.data.files[0];x(a.link),_.setFieldValue("authQRCode",a.i)}})}}),[h,_]),N=(0,r.useCallback)((()=>{}),[]),b=(0,r.useCallback)((()=>{x(null),_.setFieldValue("authQRCode","")}),[_]);return(0,m.jsxs)("form",{onSubmit:_.handleSubmit,className:t.Z.form_contact_home,children:[(0,m.jsxs)("div",{className:"div-flex-co pb-5",children:[(0,m.jsx)("h2",{children:"Property Info"}),(0,m.jsx)("p",{className:"p-0",children:"Add your property details"})]}),(0,m.jsxs)("div",{className:"grid ",children:[(0,m.jsx)("div",{className:"col-12 md:col-6 lg:col-6",children:(0,m.jsxs)("div",{className:"".concat(t.Z.inout_icon_textarea," ").concat(t.Z.inout_icon_div),children:[(0,m.jsxs)("label",{htmlFor:"property-description",children:["Property Description EN ",(0,m.jsx)("span",{children:"*"})]}),(0,m.jsx)("textarea",{name:"description.en",placeholder:"Complete description of the property...",rows:"4",id:"property-description",className:"text_area",value:_.values.description.en,onChange:_.handleChange}),(null===(a=_.errors.description)||void 0===a?void 0:a.en)&&(0,m.jsx)("small",{className:"p-error",children:_.errors.description.en})]})}),(0,m.jsx)("div",{className:"col-12 md:col-6 lg:col-6",children:(0,m.jsxs)("div",{className:"".concat(t.Z.inout_icon_textarea," ").concat(t.Z.inout_icon_div),children:[(0,m.jsxs)("label",{htmlFor:"property-description-ar",children:["Property Description AR ",(0,m.jsx)("span",{children:"*"})]}),(0,m.jsx)("textarea",{name:"description.ar",placeholder:"Complete description of the property...",rows:"4",id:"property-description-ar",className:"text_area",value:_.values.description.ar,onChange:_.handleChange}),(null===(s=_.errors.description)||void 0===s?void 0:s.ar)&&(0,m.jsx)("small",{className:"p-error",children:_.errors.description.ar})]})}),(0,m.jsx)("div",{className:"col-12 md:col-6 lg:col-6",children:(0,m.jsxs)("div",{className:t.Z.inout_adv,children:[(0,m.jsxs)("label",{htmlFor:"area",children:["Add Area ",(0,m.jsx)("span",{children:"*"})]}),(0,m.jsx)("input",{name:"size",type:"number",min:"0",placeholder:"Add Area",value:_.values.size,onChange:_.handleChange}),_.errors.size&&(0,m.jsx)("small",{className:"p-error",children:_.errors.size})]})}),(0,m.jsx)("div",{className:"col-12 md:col-6 lg:col-6",children:(0,m.jsxs)("div",{className:t.Z.inout_adv,children:[(0,m.jsxs)("label",{htmlFor:"rooms",children:["Number of rooms ",(0,m.jsx)("span",{children:"*"})]}),(0,m.jsx)("input",{name:"rooms",className:t.Z.input,placeholder:" ",type:"number",value:_.values.rooms,onChange:_.handleChange}),_.errors.rooms&&(0,m.jsx)("small",{className:"p-error",children:_.errors.rooms})]})}),(0,m.jsx)("div",{className:"col-12 md:col-6 lg:col-6",children:(0,m.jsxs)("div",{className:t.Z.inout_adv,children:[(0,m.jsxs)("label",{htmlFor:"bathrooms",children:["Number of bathrooms ",(0,m.jsx)("span",{children:"*"})]}),(0,m.jsx)("input",{name:"bathrooms",className:t.Z.input,placeholder:" ",type:"number",value:_.values.bathrooms,onChange:_.handleChange}),_.errors.bathrooms&&(0,m.jsx)("small",{className:"p-error",children:_.errors.bathrooms})]})}),(0,m.jsx)("div",{className:"col-12 md:col-6 lg:col-6",children:(0,m.jsxs)("div",{className:t.Z.inout_adv,children:[(0,m.jsxs)("label",{htmlFor:"age",children:["Property Age",(0,m.jsx)("span",{children:"*"})]}),(0,m.jsx)("input",{name:"age",className:t.Z.input,placeholder:" ",type:"number",value:_.values.age,onChange:_.handleChange}),_.errors.age&&(0,m.jsx)("small",{className:"p-error",children:_.errors.age})]})}),(0,m.jsx)("div",{className:"col-12 md:col-12 lg:col-12",children:(0,m.jsxs)("div",{className:t.Z.inout_adv,children:[(0,m.jsxs)("label",{htmlFor:"serviceCharge",children:["Service Charge",(0,m.jsx)("span",{children:"*"})]}),(0,m.jsx)("input",{name:"serviceCharge",className:t.Z.input,placeholder:"",type:"number",value:_.values.serviceCharge,onChange:_.handleChange}),_.errors.serviceCharge&&(0,m.jsx)("small",{className:"p-error",children:_.errors.serviceCharge})]})}),(0,m.jsx)("div",{className:"col-12 md:col-12 lg:col-12",children:(0,m.jsxs)("div",{className:t.Z.inout_adv,children:[(0,m.jsxs)("label",{htmlFor:"propertyNumber",children:["property Number",(0,m.jsx)("span",{children:"*"})]}),(0,m.jsx)("input",{name:"propertyNumber",className:t.Z.input,placeholder:"",type:"text",value:_.values.propertyNumber,onChange:_.handleChange}),_.errors.propertyNumber&&(0,m.jsx)("small",{className:"p-error",children:_.errors.propertyNumber})]})}),(0,m.jsx)("div",{className:"col-12 md:col-12 lg:col-12",children:(0,m.jsxs)("div",{className:t.Z.inout_adv,children:[(0,m.jsxs)("label",{htmlFor:"authNumber",children:["auth Number",(0,m.jsx)("span",{children:"*"})]}),(0,m.jsx)("input",{name:"authNumber",className:t.Z.input,placeholder:"",type:"text",value:_.values.authNumber,onChange:_.handleChange}),_.errors.authNumber&&(0,m.jsx)("small",{className:"p-error",children:_.errors.authNumber})]})}),(0,m.jsx)("div",{className:"col-12 md:col-6 lg:col-6",children:(0,m.jsxs)("div",{className:t.Z.inout_adv,children:[(0,m.jsxs)("label",{htmlFor:"furnished",children:["furnished",(0,m.jsx)("span",{children:"*"})]}),(0,m.jsxs)("div",{className:t.Z.radio_container_size,children:[(0,m.jsx)("div",{className:t.Z.radio_wrapper,children:(0,m.jsxs)("label",{className:t.Z.radio_button,children:[(0,m.jsx)("input",{id:"furnished",name:"furnished",type:"radio",value:!0,checked:!0===_.values.furnished,onChange:()=>_.setFieldValue("furnished",!0)}),(0,m.jsx)("span",{className:t.Z.radio_checkmark}),(0,m.jsx)("span",{className:t.Z.radio_label,children:"Furnished"})]})}),(0,m.jsx)("div",{className:t.Z.radio_wrapper,children:(0,m.jsxs)("label",{className:t.Z.radio_button,children:[(0,m.jsx)("input",{id:"unfurnished",name:"furnished",type:"radio",value:!1,checked:!1===_.values.furnished,onChange:()=>_.setFieldValue("furnished",!1)}),(0,m.jsx)("span",{className:t.Z.radio_checkmark}),(0,m.jsx)("span",{className:t.Z.radio_label,children:"Unfurnished"})]})})]}),_.errors.furnished&&(0,m.jsx)("small",{className:"p-error",children:_.errors.furnished})]})}),(0,m.jsx)("div",{className:"col-12 md:col-6 lg:col-6",children:(0,m.jsxs)("div",{className:t.Z.inout_adv,children:[(0,m.jsxs)("label",{htmlFor:"mortageEligable",children:["Mortgage Eligibility",(0,m.jsx)("span",{children:"*"})]}),(0,m.jsxs)("div",{className:t.Z.radio_container_size,children:[(0,m.jsx)("div",{className:t.Z.radio_wrapper,children:(0,m.jsxs)("label",{className:t.Z.radio_button,children:[(0,m.jsx)("input",{id:"eligible",name:"mortageEligable",type:"radio",value:!0,checked:!0===_.values.mortageEligable,onChange:()=>_.setFieldValue("mortageEligable",!0)}),(0,m.jsx)("span",{className:t.Z.radio_checkmark}),(0,m.jsx)("span",{className:t.Z.radio_label,children:"Eligible for Mortgage"})]})}),(0,m.jsx)("div",{className:t.Z.radio_wrapper,children:(0,m.jsxs)("label",{className:t.Z.radio_button,children:[(0,m.jsx)("input",{id:"not-eligible",name:"mortageEligable",type:"radio",value:!1,checked:!1===_.values.mortageEligable,onChange:()=>_.setFieldValue("mortageEligable",!1)}),(0,m.jsx)("span",{className:t.Z.radio_checkmark}),(0,m.jsx)("span",{className:t.Z.radio_label,children:"Not Eligible for Mortgage"})]})})]}),_.errors.mortageEligable&&(0,m.jsx)("small",{className:"p-error",children:_.errors.mortageEligable})]})}),(0,m.jsx)("div",{className:"col-12 md:col-12 lg:col-12",children:(0,m.jsx)(p.default,{label:"Upload Qr code image",placeholder:"Choose image",image:v,imageValue:_.values.authQRCode,onImageUpload:y,onDeleteImage:b,onDeleteImageValue:N})})]}),(0,m.jsxs)("div",{className:"flex mt-4 align-items-center justify-content-between",children:[(0,m.jsx)("div",{onClick:n,className:"btn_2",children:"Previous"}),(0,m.jsx)("button",{type:"submit",className:"add_btn",children:"Next"})]})]})};var v=s(6856),x=s(71),j=s(2564),g=s(8556),_=s(4373),y=s(8617),N=s(6053),b=s(4420);const f=e=>{var a,s,l,i,o,n;let{formData:u,getPerpose:p,setFormData:h,previousStep:f,id:Z,locationView:C=[]}=e;const{mutate:A}=(0,d.Vn)(),{mutate:S}=(0,d.cz)(Z),[D,F]=(0,r.useState)([]),{mutate:P,data:w}=(0,g.D)({mutationFn:d.kR,onSuccess:()=>{},onError:e=>{console.error("Upload failed:",e)}}),E=(0,r.useRef)(null),[T,k]=(0,r.useState)(),[q,z]=(0,r.useState)([]),V=e=>{const{id:a,checked:s}=e.target,r=R.values.amenities;s?R.setFieldValue("amenities",[...r,a]):R.setFieldValue("amenities",r.filter((e=>e!==a)))},R=(0,c.TA)({initialValues:{floors:u.floors||0,finishing:u.finishing||"",customerPaymentMethod:u.customerPaymentMethod||"",addressDetails:u.addressDetails||{ar:"",en:""},space:u.space||0,amenities:u.amenities||[],images:u.images||[],location:u.location||(null===T||void 0===T?void 0:T._id)||"",size:u.size||0},validate:e=>{var a,s;const r={};return e.size||(r.size="size is required"),e.floors||(r.floors="Number of Floors is required"),e.finishing||(r.finishing="Finishing selection is required"),e.customerPaymentMethod||(r.customerPaymentMethod="Payment Method is required"),null!==(a=e.addressDetails)&&void 0!==a&&a.ar||(r.addressDetails={ar:"Property addressDetails is required"}),null!==(s=e.addressDetails)&&void 0!==s&&s.en||(r.addressDetails={...r.addressDetails,en:"Property addressDetails is required"}),e.space||(r.space="Space is required"),console.log("values",e),r},onSubmit:e=>{const a={...u,...e};T||delete a.location,u.images===e.images&&delete a.images,h(a),S(a),j.Am.success("The property has been added successfully.")}}),M=e=>{const a=q.filter(((a,s)=>s!==e));z(a),R.setFieldValue("images",a)},Q=(0,r.useCallback)((e=>{E.current&&!E.current.contains(e.target)&&(F([]),P())}),[P]);return(0,r.useEffect)((()=>(document.addEventListener("mousedown",Q),()=>{document.removeEventListener("mousedown",Q)})),[Q]),console.log("formik2.values.images",R.values.images),(0,m.jsxs)("form",{onSubmit:R.handleSubmit,className:t.Z.form_contact_home,children:[(0,m.jsxs)("div",{className:"div-flex-co pb-5",children:[(0,m.jsx)("h2",{children:"Property Info"}),(0,m.jsx)("p",{className:"p-0",children:"Add your property details"})]}),(0,m.jsxs)("div",{className:"grid",children:[C&&C.length>0&&(0,m.jsxs)("div",{className:t.Z.title_location,children:["Locations:"," ",(0,m.jsxs)("span",{children:[" ",C.map((e=>{var a;return null===e||void 0===e||null===(a=e.name)||void 0===a?void 0:a.en})).join(", ")]})]}),(0,m.jsxs)("div",{className:"col-12 md:col-12 lg:col-12 ",children:[(0,m.jsxs)("label",{htmlFor:"Location",children:["Location ",(0,m.jsx)("span",{children:"*"})]}),(0,m.jsxs)("div",{className:"".concat(t.Z.input_locatin," position-relative ").concat(t.Z.inout_adv),children:[(0,m.jsx)("input",{type:"text",placeholder:"enter Location",className:"form-control ".concat(t.Z.formControl),onChange:async e=>{const a=e.target.value;P(a)}}),(0,m.jsx)("div",{className:t.Z.icon,children:(0,m.jsx)(N.Ts9,{})}),(null===w||void 0===w?void 0:w.length)>0&&(0,m.jsx)("div",{ref:E,className:t.Z.resultSearch,children:w.map((e=>{var a;return(0,m.jsxs)("div",{onClick:()=>(e=>{console.log("location",e),k(e),R.setFieldValue("location",e._id),F([])})(e),className:t.Z.locationItem,children:[(0,m.jsxs)("h6",{children:[e.name.en," ",(0,m.jsx)("br",{}),(0,m.jsxs)("span",{children:["(",null===(a=e.parents)||void 0===a?void 0:a.map((e=>{var a;return null===e||void 0===e||null===(a=e.name)||void 0===a?void 0:a.en})).join(", "),")"]})]}),(null===T||void 0===T?void 0:T._id)===e._id&&(0,m.jsx)(y.lyK,{})]},e._id)}))}),(0,m.jsx)("div",{className:t.Z.selectedLocations,children:T&&(0,m.jsxs)("div",{className:t.Z.selectedLocation,children:[(0,m.jsx)("span",{children:T.name.en}),(0,m.jsx)("button",{type:"button",onClick:()=>k(null),children:(0,m.jsx)(_.j7p,{})})]})})]})]}),(0,m.jsx)("div",{className:"col-12 md:col-6 lg:col-6",children:(0,m.jsxs)("div",{className:t.Z.inout_adv,children:[(0,m.jsxs)("label",{htmlFor:"floors",children:["Number of Floors ",(0,m.jsx)("span",{children:"*"})]}),(0,m.jsx)("input",{name:"floors",className:t.Z.input,placeholder:"add Number of Floors",type:"number",value:R.values.floors,onChange:R.handleChange,onBlur:R.handleBlur}),R.errors.floors&&(0,m.jsx)("small",{className:"p-error",children:R.errors.floors})]})}),(0,m.jsx)("div",{className:"col-12 md:col-6 lg:col-6",children:(0,m.jsxs)("div",{className:t.Z.inout_adv,children:[(0,m.jsxs)("label",{htmlFor:"finishing",children:["Finishing ",(0,m.jsx)("span",{children:"*"})]}),(0,m.jsxs)("select",{name:"finishing",value:R.values.finishing,onChange:R.handleChange,className:"form-select ".concat(t.Z.formSelect),children:[(0,m.jsx)("option",{value:"",children:"Select Finishing"}),null===p||void 0===p?void 0:p.map((e=>{var a;return"finishing"===e.type?null===(a=e.properties)||void 0===a?void 0:a.map((e=>{var a;return(0,m.jsx)("option",{value:e._id,children:null===(a=e.name)||void 0===a?void 0:a.en},e._id)})):null}))]}),R.errors.finishing&&(0,m.jsx)("small",{className:"p-error",children:R.errors.finishing})]})}),(0,m.jsx)("div",{className:"col-12 md:col-12 lg:col-12 ",children:(0,m.jsxs)("div",{className:t.Z.inout_adv,children:[(0,m.jsxs)("label",{htmlFor:"customerPaymentMethod",children:["Payment Method ",(0,m.jsx)("span",{children:"*"})]}),(0,m.jsxs)("select",{name:"customerPaymentMethod",value:R.values.customerPaymentMethod,onChange:R.handleChange,className:"form-select ".concat(t.Z.formSelect),children:[(0,m.jsx)("option",{value:"",children:"Select Payment Method"}),null===p||void 0===p?void 0:p.map((e=>{var a;return"customer-payment-method"===e.type?null===(a=e.properties)||void 0===a?void 0:a.map((e=>{var a;return(0,m.jsx)("option",{value:e._id,children:null===(a=e.name)||void 0===a?void 0:a.en},e._id)})):null}))]}),R.errors.customerPaymentMethod&&(0,m.jsx)("small",{className:"p-error",children:R.errors.customerPaymentMethod})]})}),(0,m.jsx)("div",{className:"col-12 md:col-6 lg:col-6",children:(0,m.jsxs)("div",{className:t.Z.inout_adv,children:[(0,m.jsxs)("label",{htmlFor:"addressDetails",children:["Address Details EN ",(0,m.jsx)("span",{children:"*"})]}),(0,m.jsx)("input",{name:"addressDetails.en",className:t.Z.input,placeholder:"Address details such as: Street / Neighborhood / Compound / Complex.. etc ...",type:"text",value:null===(a=R.values.addressDetails)||void 0===a?void 0:a.en,onChange:R.handleChange,onBlur:R.handleBlur}),(null===(s=R.errors.addressDetails)||void 0===s?void 0:s.en)&&(0,m.jsx)("small",{className:"p-error",children:null===(l=R.errors.addressDetails)||void 0===l?void 0:l.en})]})}),(0,m.jsx)("div",{className:"col-12 md:col-6 lg:col-6",children:(0,m.jsxs)("div",{className:t.Z.inout_adv,children:[(0,m.jsxs)("label",{htmlFor:"addressDetails",children:["Address Details AR ",(0,m.jsx)("span",{children:"*"})]}),(0,m.jsx)("input",{name:"addressDetails.ar",className:t.Z.input,placeholder:"Address details such as: Street / Neighborhood / Compound / Complex.. etc ...",type:"text",value:null===(i=R.values.addressDetails)||void 0===i?void 0:i.ar,onChange:R.handleChange,onBlur:R.handleBlur}),(null===(o=R.errors.addressDetails)||void 0===o?void 0:o.ar)&&(0,m.jsx)("small",{className:"p-error",children:null===(n=R.errors.addressDetails)||void 0===n?void 0:n.ar})]})}),(0,m.jsx)("div",{className:"col-12 md:col-6 lg:col-6",children:(0,m.jsxs)("div",{className:t.Z.inout_adv,children:[(0,m.jsxs)("label",{htmlFor:"space",children:["Space ",(0,m.jsx)("span",{children:"*"})]}),(0,m.jsx)("input",{name:"space",className:t.Z.input,placeholder:"Enter property size",value:R.values.space,onChange:R.handleChange,onBlur:R.handleBlur,type:"number"}),R.errors.space&&(0,m.jsx)("small",{className:"p-error",children:R.errors.space})]})}),(0,m.jsx)("div",{className:"col-12 md:col-6 lg:col-6",children:(0,m.jsxs)("div",{className:t.Z.inout_adv,children:[(0,m.jsxs)("label",{htmlFor:"size",children:["Size ",(0,m.jsx)("span",{children:"*"})]}),(0,m.jsx)("input",{name:"size",className:t.Z.input,placeholder:"",type:"number",value:R.values.size,onChange:R.handleChange,onBlur:R.handleBlur}),R.errors.size&&(0,m.jsx)("small",{className:"p-error",children:R.errors.size})]})}),(0,m.jsxs)("div",{className:"col-12 md:col-12 lg:col-12 ",children:[(0,m.jsxs)("div",{className:t.Z.upLoad,children:[(0,m.jsxs)("label",{htmlFor:"image_upload",children:["Upload Images ",(0,m.jsx)("span",{children:"*"})]}),(0,m.jsx)("div",{className:t.Z.image_container,children:(0,m.jsxs)("div",{id:"image_upload",className:t.Z.image_slot,children:[(0,m.jsx)(v.YFT,{}),"Upload img",(0,m.jsx)("input",{type:"file",id:"image_upload",multiple:!0,onChange:async e=>{const a=Array.from(e.target.files),s=new FormData;a.forEach((e=>{s.append("files",e)})),await A(s,{onSuccess:e=>{const a=e.data.files,s=a.map((e=>e.link)),r=a.map((e=>e.id));z((e=>[...e,...s])),R.setFieldValue("images",[...R.values.images,...r])}})}})]})})]}),q.length>0&&(0,m.jsx)("div",{className:t.Z.image_preview,children:(0,m.jsx)("div",{className:t.Z.images_container,children:q.map(((e,a)=>(0,m.jsxs)("div",{className:t.Z.image_preview_item,children:[(0,m.jsx)(b.E,{src:e,alt:"uploaded-".concat(a),width:80,height:80,loading:"lazy"}),(0,m.jsx)("button",{type:"button",onClick:()=>M(a),className:t.Z.delete_button,children:(0,m.jsx)(x.bjh,{})})]},a)))})}),R.values.images.length>0&&(0,m.jsx)("div",{className:t.Z.image_preview,children:(0,m.jsx)("div",{className:t.Z.images_container,children:R.values.images.map(((e,a)=>(0,m.jsxs)("div",{className:t.Z.image_preview_item,children:[(0,m.jsx)(b.E,{src:e,alt:"uploaded-".concat(a),width:80,height:80,loading:"lazy"}),(0,m.jsx)("button",{type:"button",onClick:()=>M(a),className:t.Z.delete_button,children:(0,m.jsx)(x.bjh,{})})]},a)))})})]}),(0,m.jsx)("div",{className:"col-12 md:col-12 lg:col-12 ",children:(0,m.jsxs)("div",{className:"optionsRoom",children:[(0,m.jsx)("h3",{className:"titleOptions",children:"Amenities"}),(0,m.jsx)("div",{className:"scrollMobile",children:(0,m.jsx)("div",{className:"filterCHECKED",children:null===p||void 0===p?void 0:p.map((e=>{var a;return"amenity"===e.type?null===(a=e.properties)||void 0===a?void 0:a.map((e=>{var a;return(0,m.jsxs)("div",{className:"checkbox-wrapper-46",children:[(0,m.jsx)("input",{type:"checkbox",id:e._id,name:"amenities",className:"inp-cbx",checked:R.values.amenities.includes(e._id),onChange:V}),(0,m.jsxs)("label",{htmlFor:e._id,className:"cbx",children:[(0,m.jsx)("span",{children:(0,m.jsx)("svg",{viewBox:"0 0 12 10",height:"8px",width:"10px",children:(0,m.jsx)("polyline",{points:"1.5 6 4.5 9 10.5 1"})})}),(0,m.jsx)("span",{children:null===(a=e.name)||void 0===a?void 0:a.en})]})]},e._id)})):null}))})})]})})]}),(0,m.jsxs)("div",{className:"flex mt-4 align-items-center justify-content-between",children:[(0,m.jsx)("div",{onClick:f,className:"btn_2",children:"Previous"}),(0,m.jsx)("button",{type:"submit",className:"add_btn",children:"Next"})]})]})};const Z=function(){const{id:e}=(0,n.UO)(),{data:a}=(0,o.a)({queryKey:["Perpose"],queryFn:d.dK}),{data:s}=(0,o.a)({queryKey:["PropertiesDetails",e],queryFn:()=>(0,d.jE)(e),enabled:!!e}),[l,t]=(0,r.useState)({purpose:"",category:"",commercialProperties:"",title:{ar:"",en:""},advertiserType:"",price:"",currency:"",ready:!1,description:{ar:"",en:""},rooms:0,adType:"",bathrooms:0,furnished:!1,mortageEligable:!1,floors:0,finishing:"",customerPaymentMethod:"",addressDetails:{ar:"",en:""},space:0,images:[],propertyNumber:"",authNumber:"",videos:[],tour:"HTTPS:",amenities:[],type:"",measurement:"",age:0,commession:0,serviceCharge:0,size:0,location:""});return console.log("formData",l),(0,r.useEffect)((()=>{s&&t({purpose:null===s||void 0===s?void 0:s.purpose._id,category:null===s||void 0===s?void 0:s.category._id,commercialProperties:null===s||void 0===s?void 0:s.commercialProperties._id,adType:null===s||void 0===s?void 0:s.adType,title:{ar:null===s||void 0===s?void 0:s.title.ar,en:null===s||void 0===s?void 0:s.title.en},advertiserType:null===s||void 0===s?void 0:s.advertiserType._id,price:null===s||void 0===s?void 0:s.price,currency:null===s||void 0===s?void 0:s.currency._id,ready:null===s||void 0===s?void 0:s.ready,description:{ar:null===s||void 0===s?void 0:s.description.ar,en:null===s||void 0===s?void 0:s.description.en},rooms:null===s||void 0===s?void 0:s.rooms,bathrooms:null===s||void 0===s?void 0:s.bathrooms,furnished:null===s||void 0===s?void 0:s.furnished,mortageEligable:null===s||void 0===s?void 0:s.mortageEligable,floors:null===s||void 0===s?void 0:s.floors,finishing:null===s||void 0===s?void 0:s.finishing._id,customerPaymentMethod:null===s||void 0===s?void 0:s.customerPaymentMethod._id,addressDetails:{ar:null===s||void 0===s?void 0:s.addressDetails.ar,en:null===s||void 0===s?void 0:s.addressDetails.en},space:null===s||void 0===s?void 0:s.space,images:null===s||void 0===s?void 0:s.images,authQRCode:null===s||void 0===s?void 0:s.authQRCode,propertyNumber:null===s||void 0===s?void 0:s.propertyNumber,authNumber:null===s||void 0===s?void 0:s.authNumber,videos:null===s||void 0===s?void 0:s.videos,tour:null===s||void 0===s?void 0:s.tour,amenities:null===s||void 0===s?void 0:s.amenities.map((e=>e._id)),type:null===s||void 0===s?void 0:s.type._id,measurement:null===s||void 0===s?void 0:s.measurement._id,age:null===s||void 0===s?void 0:s.age,commession:null===s||void 0===s?void 0:s.commession,serviceCharge:null===s||void 0===s?void 0:s.serviceCharge,size:null===s||void 0===s?void 0:s.size})}),[s]),(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(i(),{children:[(0,m.jsx)(u,{formData:l,getPerpose:a,setFormData:t},"step1-".concat(JSON.stringify(l))),(0,m.jsx)(h,{formData:l,getPerpose:a,setFormData:t},"step2-".concat(JSON.stringify(l))),(0,m.jsx)(f,{formData:l,getPerpose:a,setFormData:t,id:e,locationView:null===s||void 0===s?void 0:s.location},"step3-".concat(JSON.stringify(l)))]})})}},7049:(e,a,s)=>{s.d(a,{Z:()=>r});const r={form_contact_home:"addAd_form_contact_home__XbiCu",formSelect:"addAd_formSelect__SICoj",inout_icon_textarea:"addAd_inout_icon_textarea__Gv9VS",payments:"addAd_payments__WSgJW",hr:"addAd_hr__wrpE8",bold:"addAd_bold__zGqD0",span:"addAd_span__yFHUx",left:"addAd_left__y+3JS",filterSort:"addAd_filterSort__Avvbx",option:"addAd_option__2MXoI",input:"addAd_input__uwNK2",btn_radio:"addAd_btn_radio__qihQ6",nots:"addAd_nots__6ohel",right:"addAd_right__dcHxt",inout_adv:"addAd_inout_adv__sWwqA",radio_container_size:"addAd_radio_container_size__8ugZJ",radio_wrapper:"addAd_radio_wrapper__B3b8s",radio_button:"addAd_radio_button__AacQ7",radio_checkmark:"addAd_radio_checkmark__x6B3-",radio_label:"addAd_radio_label__YO+DC",image_wrapper:"addAd_image_wrapper__GJPDP",image_slot:"addAd_image_slot__M+r09",upLoad:"addAd_upLoad__CiCwX",image_preview:"addAd_image_preview__QmXDC",number_minus_plus:"addAd_number_minus_plus__3rBn0",images_container:"addAd_images_container__6-tvk",div:"addAd_div__2nK+p",image_preview_item:"addAd_image_preview_item__i2LK3",delete_button:"addAd_delete_button__Lb8BQ",inoutIconDiv:"addAd_inoutIconDiv__gGtRX",resultSearch:"addAd_resultSearch__zVcop",selectedLocations:"addAd_selectedLocations__QMTSY",selectedLocation:"addAd_selectedLocation__sqfP0",input_locatin:"addAd_input_locatin__gUGs4",icon:"addAd_icon__ZgAbH",title_location:"addAd_title_location__dna7Q",ul:"addAd_ul__BP2ru",selected:"addAd_selected__1YOhD"}}}]);
//# sourceMappingURL=6016.7029abfa.chunk.js.map