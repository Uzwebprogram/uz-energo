import{f as a,o as r,c as n,a as e,g as t,E as i,h as m}from"./index-3b9c6b2e.js";const p={class:"basePhotoText grid md:grid-cols-2 gap-12"},_={class:"text-primary"},h={class:"text-secondary"},u={class:"text-secondary space-y-4"},v={key:0,class:"btn"},g={__name:"BasePhotoText",props:["reverse","btn"],setup(l){const o=l,c=a(o.btn||!1),d=a(o.reverse||!1);return(s,f)=>(r(),n("div",p,[e("div",{class:i([d.value?"md:order-last":"order-first","rounded-md"])},[t(s.$slots,"image")],2),e("div",null,[e("h2",_,[t(s.$slots,"title")]),e("p",h,[t(s.$slots,"desc")]),e("ul",u,[t(s.$slots,"descriptions")]),c.value?(r(),n("button",v,[t(s.$slots,"btn")])):m("",!0)])]))}};export{g as _};
