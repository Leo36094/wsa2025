import{d as _,o as t,c as s,a as l,F as d,r as b,z as u,t as v,_ as m}from"./index-DQAQi3d9.js";const g={class:"page-wrapper"},f={class:"page-tab-container"},k=["aria-label"],T=["onClick","onKeydown","aria-label"],h=_({__name:"PageTab",props:{tabs:{},activeTab:{}},emits:["update:activeTab"],setup(y,{emit:r}){const n=r,c=a=>{n("update:activeTab",a)},p=(a,o)=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),n("update:activeTab",o))};return(a,o)=>(t(),s("div",g,[l("div",f,[l("div",{class:"page-tab",role:"tablist","aria-label":a.$t("page_tab_aria_label")},[(t(!0),s(d,null,b(a.tabs,e=>(t(),s("div",{key:e.value,class:u(["page-tab__item",{active:e.value===a.activeTab}]),onClick:i=>c(e.value),onKeydown:i=>p(i,e.value),role:"tab",tabindex:"0","aria-label":e.label},[l("span",null,v(e.label),1)],42,T))),128))],8,k)])]))}}),w=m(h,[["__scopeId","data-v-ff0bc36a"]]);export{w as P};
