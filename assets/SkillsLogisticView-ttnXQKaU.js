import{d as L,o as i,c as a,m as S,_ as b,h as $,i as c,b as T,a as l,t as k,g as v,F as h,r as y,n as f}from"./index-DF_VuEJY.js";import{S as x}from"./SkillTab-BBo2u7sk.js";import{L as r}from"./enum-CA_ituI8.js";const A=L({__name:"IconLogistics",props:{name:{}},setup(p){const n=p,_={[r.AutobodyRepair]:"repair",[r.AutomobileTechnology]:"tech",[r.CarPainting]:"painting"};return(d,m)=>(i(),a("div",{class:S(["skill-icon",_[n.name]])},null,2))}}),M=b(A,[["__scopeId","data-v-048ea8e3"]]),V={class:"skills-manufacturing"},w={class:"skills-manufacturing-container"},B={class:"skills-manufacturing-title"},N={class:"skill-manufacturing-gallery"},O={class:"gallery-container"},j={class:"gallery-image"},z={class:"gallery-copy"},E={class:"icon-button"},F={class:"title"},H=["innerHTML"],D={class:"gallery-image"},g=4,P=L({__name:"SkillsLogisticView",setup(p){const{t:n}=$(),_=c(()=>Object.entries(r).reduce((s,[t,e])=>(s[e]=n(`skills.logistics_${t}`),s),{})),d=c(()=>Object.entries(r).map(([s,t])=>({label:_.value[t],icon:t,id:s}))),m=c(()=>{const s=Math.ceil(d.value.length/g);return Array.from({length:s},(t,e)=>d.value.slice(e*g,(e+1)*g))}),o=T(m.value[0][0]),I=c(()=>o.value.icon),u=c(()=>{const s=n(`skills.logistics_${o.value.id}_copy`),t=n(`skills.logistics_${o.value.id}`),e=Array.from({length:3},(R,q)=>"https://fakeimg.pl/443x250/");return{copy:s,images:e,title:t}});function C(s){o.value=s}return(s,t)=>(i(),a("div",V,[l("div",w,[l("h2",B,k(s.$t("skills.category_logistics")),1),v(x,{"skill-list":m.value,"selected-skill":o.value,onClick:C},null,8,["skill-list","selected-skill"]),l("div",N,[l("div",O,[l("div",j,[(i(!0),a(h,null,y(u.value.images,e=>(i(),a("div",{class:"image-item",style:f({backgroundImage:`url(${e})`})},null,4))),256))]),l("div",z,[l("div",E,[v(M,{name:I.value},null,8,["name"])]),l("h2",F,k(u.value.title),1),l("p",{class:"copy",innerHTML:u.value.copy},null,8,H)]),l("div",D,[(i(!0),a(h,null,y(u.value.images,e=>(i(),a("div",{class:"image-item",style:f({backgroundImage:`url(${e})`})},null,4))),256))])])])])]))}}),Q=b(P,[["__scopeId","data-v-17a7c060"]]);export{Q as default};
