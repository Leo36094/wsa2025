import{S as s}from"./enum-CA_ituI8.js";import{d as p,o as r,c as u,n as f,_ as k,s as S,j as d,h as g,a,t as m,R as o,F as h,r as C,y as I}from"./index-CGAJkf4h.js";const v=p({__name:"IconSkills",props:{name:{}},setup(c){const t=c,i={[s.Art]:"icon-art",[s.Construction]:"icon-construction",[s.IT]:"icon-it",[s.Juniors]:"icon-juniors",[s.Logistics]:"icon-logistics",[s.Manufacturing]:"icon-manufacturing",[s.Social]:"icon-social"};return(n,l)=>(r(),u("div",{class:f(["skill-icon",i[t.name]])},null,2))}}),M=k(v,[["__scopeId","data-v-85e842cd"]]),T={class:"skill-panel"},L={class:"skill-name"},A=p({__name:"SkillPanel",props:{skillType:{}},setup(c){const{t}=S(),i=c,n=d(()=>({[s.Manufacturing]:t("skills.category_manufacturing"),[s.Construction]:t("skills.category_construction"),[s.IT]:t("skills.category_it"),[s.Logistics]:t("skills.category_logistics"),[s.Social]:t("skills.category_social"),[s.Art]:t("skills.category_art"),[s.Juniors]:t("skills.category_juniors")})),l=d(()=>n.value[i.skillType]);return(e,y)=>(r(),u("div",T,[g(M,{class:"skill-icon",name:i.skillType},null,8,["name"]),a("p",L,m(l.value),1)]))}}),J=k(A,[["__scopeId","data-v-07cc1d64"]]),N={class:"category"},$={class:"category-container"},x={class:"category-title-container"},V={class:"category-title"},j={class:"skill-list","data-aos":"fade-up","data-aos-delay":"500"},B=p({__name:"SkillsCategoriesView",setup(c){const t=[s.Manufacturing,s.Construction,s.IT,s.Logistics,s.Social,s.Art,s.Juniors],i={[s.Manufacturing]:o.Manufacturing,[s.Construction]:o.Construction,[s.IT]:o.IT,[s.Logistics]:o.Logistics,[s.Social]:o.Social,[s.Art]:o.Art,[s.Juniors]:o.Juniors},n=I(),l=e=>{n.push({name:i[e]})};return(e,y)=>(r(),u("div",N,[a("div",$,[a("div",x,[a("h2",V,m(e.$t("skills.skill_category_title")),1)]),a("div",j,[(r(),u(h,null,C(t,_=>g(J,{class:"skill-item",key:_,"skill-type":_,onClick:()=>l(_)},null,8,["skill-type","onClick"])),64))])])]))}}),w=k(B,[["__scopeId","data-v-85b81f24"]]);export{w as default};
