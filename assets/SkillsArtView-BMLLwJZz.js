import{d as I,o as a,c as n,m as C,_ as b,h as T,i as r,b as $,a as l,t as k,g as v,F as h,r as y,n as f}from"./index-DF_VuEJY.js";import{S as L}from"./SkillTab-BBo2u7sk.js";import{A as i}from"./enum-CA_ituI8.js";const x=I({__name:"IconArt",props:{name:{}},setup(p){const o=p,_={[i.Floristry]:"flower",[i.FashionTechnology]:"fashion",[i.GraphicDesignTechnology]:"design",[i.GameArt]:"game"};return(d,m)=>(a(),n("div",{class:C(["skill-icon",_[o.name]])},null,2))}}),w=b(x,[["__scopeId","data-v-9064678c"]]),F={class:"skills-manufacturing"},M={class:"skills-manufacturing-container"},V={class:"skills-manufacturing-title"},B={class:"skill-manufacturing-gallery"},N={class:"gallery-container"},O={class:"gallery-image"},j={class:"gallery-copy"},z={class:"icon-button"},D={class:"title"},E=["innerHTML"],G={class:"gallery-image"},g=4,H=I({__name:"SkillsArtView",setup(p){const{t:o}=T(),_=r(()=>Object.entries(i).reduce((s,[t,e])=>(s[e]=o(`skills.art_${t}`),s),{})),d=r(()=>Object.entries(i).map(([s,t])=>({label:_.value[t],icon:t,id:s}))),m=r(()=>{const s=Math.ceil(d.value.length/g);return Array.from({length:s},(t,e)=>d.value.slice(e*g,(e+1)*g))}),c=$(m.value[0][0]),A=r(()=>c.value.icon),u=r(()=>{const s=o(`skills.art_${c.value.id}_copy`),t=o(`skills.art_${c.value.id}`),e=Array.from({length:3},(q,J)=>"https://fakeimg.pl/443x250/");return{copy:s,images:e,title:t}});function S(s){c.value=s}return(s,t)=>(a(),n("div",F,[l("div",M,[l("h2",V,k(s.$t("skills.category_art")),1),v(L,{"skill-list":m.value,"selected-skill":c.value,onClick:S},null,8,["skill-list","selected-skill"]),l("div",B,[l("div",N,[l("div",O,[(a(!0),n(h,null,y(u.value.images,e=>(a(),n("div",{class:"image-item",style:f({backgroundImage:`url(${e})`})},null,4))),256))]),l("div",j,[l("div",z,[v(w,{name:A.value},null,8,["name"])]),l("h2",D,k(u.value.title),1),l("p",{class:"copy",innerHTML:u.value.copy},null,8,E)]),l("div",G,[(a(!0),n(h,null,y(u.value.images,e=>(a(),n("div",{class:"image-item",style:f({backgroundImage:`url(${e})`})},null,4))),256))])])])])]))}}),R=b(H,[["__scopeId","data-v-3c3ac83e"]]);export{R as default};
