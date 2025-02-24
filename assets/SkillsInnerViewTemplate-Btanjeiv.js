import{_ as A,o as e,c as t,a as n,d as x,q as N,w as k,u as r,j as p,V as D,W as P,X as z,Y as E,Z as O,r as w,a0 as F,a1 as H,b as U,t as L,F as S,a2 as q,a3 as W,f,z as X,e as Z,g as Q,n as I,l as R,m as Y,p as G,k as j,A as ee,S as le,s as se}from"./index-DTw7_qyx.js";import{f as ae}from"./free-mode-DhS11xbF.js";import{M as te,C as ie,I as oe,L as ne,a as ce,A as re,J as de}from"./enum-CA_ituI8.js";const ue={},pe={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function me(i,m){return e(),t("svg",pe,m[0]||(m[0]=[n("g",{id:"mdi:keyboard-arrow-down"},[n("path",{id:"Vector",d:"M7.41 8.58008L12 13.1701L16.59 8.58008L18 10.0001L12 16.0001L6 10.0001L7.41 8.58008Z",fill:"white"})],-1)]))}const ke=A(ue,[["render",me]]),_e=x({__name:"FilterDropdown",props:{options:{},valueKey:{},labelKey:{},selectedValue:{},placeholder:{}},emits:["update:modelValue"],setup(i,{emit:m}){const l=i,b=m,y=v=>{b("update:modelValue",v)};return(v,$)=>(e(),N(r(W),{value:v.selectedValue,"onUpdate:modelValue":y},{default:k(()=>[p(r(P),{class:"SelectTrigger","aria-label":"Skill Dropdown"},{default:k(()=>[p(r(D),{placeholder:l.placeholder},null,8,["placeholder"]),p(ke)]),_:1}),p(r(q),null,{default:k(()=>[p(r(z),{class:"SelectContent",position:"popper","side-offset":10,align:"center"},{default:k(()=>[p(r(E),{class:"SelectViewport"},{default:k(()=>[p(r(O),null,{default:k(()=>[(e(!0),t(S,null,w(l.options,(s,u)=>(e(),N(r(F),{key:u,class:"SelectItem",value:s[l.valueKey]},{default:k(()=>[p(r(H),null,{default:k(()=>[U(L(s[l.labelKey]),1)]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["value"]))}}),ve={class:"skill-tab","data-aos":"fade-up","data-aos-delay":"500","data-aos-anchor-placement":"top-bottom"},ge={key:0,class:"skill-tab-container"},fe=["onClick"],ye={key:1,class:"skill-select"},V=4,he=x({__name:"SkillTab",props:{skillList:{},selectedSkill:{},showSelect:{type:Boolean}},emits:["click"],setup(i,{emit:m}){const l=i,b=f(()=>{const s=Math.ceil(l.skillList.length/V);return Array.from({length:s},(u,d)=>l.skillList.slice(d*V,(d+1)*V))}),y=m;function v(s){y("click",s)}function $(s){const u=l.skillList.find(d=>d.id===s);if(u)y("click",u);else throw new Error(`Skill id ${s} not found`)}return(s,u)=>(e(),t("div",ve,[l.showSelect?(e(),t("div",ye,[p(_e,{value:s.selectedSkill.id,options:s.skillList,placeholder:s.selectedSkill.label,valueKey:"id",labelKey:"label",selectedValue:s.selectedSkill.id,"onUpdate:modelValue":$},null,8,["value","options","placeholder","selectedValue"])])):(e(),t("div",ge,[(e(!0),t(S,null,w(b.value,(d,C)=>(e(),t("div",{class:"skill-row",key:C},[(e(!0),t(S,null,w(d,h=>(e(),t("div",{class:X(["skill-col",{"skill-col--selected":l.selectedSkill.id===h.id}]),key:h.id,onClick:M=>v(h)},L(h.label),11,fe))),128))]))),128))]))]))}}),we=A(he,[["__scopeId","data-v-6f57dd37"]]);var o=(i=>(i.Manufacturing="manufacturing",i.Construction="construction",i.IT="it",i.Logistics="logistics",i.Social="social",i.Art="art",i.Juniors="juniors",i))(o||{});const Se={class:"skills-inner-view"},be={class:"skills-inner-view-container"},$e={class:"skills-inner-view-title title-animation"},Ie={class:"skill-inner-view-gallery"},Le={class:"gallery-container"},Ce={class:"gallery-image","data-aos":"fade-up","data-aos-delay":"500"},Me={class:"gallery-copy","data-aos":"fade-up","data-aos-delay":"500","data-aos-anchor-placement":"top-bottom"},Te={class:"title"},Ve=["innerHTML"],Ne={class:"gallery-image","data-aos":"fade-up","data-aos-delay":"500","data-aos-anchor-placement":"top-bottom"},Ae={key:0,class:"skill-swiper"},xe=x({__name:"SkillsInnerViewTemplate",props:{viewName:{}},setup(i){const{t:m}=Z(),l=i,b=j("isMobile"),y=j("isDesktop"),v={[o.Manufacturing]:"01",[o.Construction]:"02",[o.IT]:"03",[o.Logistics]:"04",[o.Social]:"05",[o.Art]:"06",[o.Juniors]:"07"},$={[o.Manufacturing]:te,[o.Construction]:ie,[o.IT]:oe,[o.Logistics]:ne,[o.Social]:ce,[o.Art]:re,[o.Juniors]:de},s=f(()=>Object.entries($[l.viewName]).reduce((a,[c,_])=>(a[_]=m(`skills.${l.viewName}_${c}`),a),{})),u=f(()=>Object.entries($[l.viewName]).map(([a,c])=>({label:s.value[c],icon:c,id:a}))),d=Q(u.value[0]),C=f(()=>{const a=v[l.viewName],c=u.value.length;return Array(c).fill("").map((_,g)=>{const J=`${g+1}`.padStart(2,"0");return`/wsa2025/images/wsa/Skills/skills_${a}_${J}.jpg`})}),h=f(()=>{const a=u.value.findIndex(c=>c.id===d.value.id);return C.value[a]}),M=f(()=>{const a=m(`skills.${l.viewName}_${d.value.id}_copy`),c=m(`skills.${l.viewName}_${d.value.id}`);return{copy:a,title:c}}),T=f(()=>Array(6).fill("").map((a,c)=>`/wsa2025/images/wsa/Skills/skills_group_0${c+1}.jpg`));function B(a){d.value=a}const K={loop:!0,autoplay:{delay:3e3,disableOnInteraction:!0},freemode:!0,spaceBetween:8,slidesPerView:1,breakpoints:{744:{slidesPerView:3}},modules:[ee,ae]};return(a,c)=>(e(),t("div",Se,[n("div",be,[n("h1",$e,[n("span",null,L(a.$t(`skills.category_${a.viewName}`)),1)]),p(we,{"skill-list":u.value,"selected-skill":d.value,onClick:B,"show-select":!!r(b)},null,8,["skill-list","selected-skill","show-select"]),n("div",Ie,[n("div",Le,[n("div",Ce,[(e(!0),t(S,null,w(T.value.slice(0,3),(_,g)=>(e(),t("div",{class:"image-item",style:I({backgroundImage:`url(${_})`}),key:g},null,4))),128))]),n("div",Me,[n("div",{class:"skill-image",style:I({backgroundImage:`url(${h.value})`})},null,4),n("h2",Te,L(M.value.title),1),n("p",{class:"copy",innerHTML:M.value.copy},null,8,Ve)]),n("div",Ne,[(e(!0),t(S,null,w(T.value.slice(3),(_,g)=>(e(),t("div",{class:"image-item",style:I({backgroundImage:`url(${_})`}),key:g},null,4))),128))])]),r(y)?G("",!0):(e(),t("div",Ae,[p(r(se),R(Y(K)),{default:k(()=>[(e(!0),t(S,null,w(T.value,(_,g)=>(e(),N(r(le),{key:g,class:"slide"},{default:k(()=>[n("div",{style:I({backgroundImage:`url(${_})`}),class:"img-slide",alt:"skill image decoration"},null,4)]),_:2},1024))),128))]),_:1},16)]))])])]))}}),Je=A(xe,[["__scopeId","data-v-b29b6468"]]);export{o as I,Je as S};
