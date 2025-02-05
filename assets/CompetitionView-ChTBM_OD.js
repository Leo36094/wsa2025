import{g as d,S as f}from"./ScrollTrigger-FjUmd4ZA.js";import{d as g,r as p,o as C,a as k,b as _,c as m,e as o,t as s,n as y,u as c,F as w,_ as u,h as S,i as F,f as I,j as b,k as v,g as $}from"./index-CXqatqFc.js";const A={class:"competition-banner"},P={class:"first-slide__title"},R={class:"first-slide",id:"firstSlide"},T={class:"first-slide__photos"},V={class:"left-photo-container"},z={class:"right-photo-container"},B={class:"second-slide"},L={class:"image-row",ref:"topRow",id:"topRow"},M=["src"],N={"data-aos":"fade-up","data-aos-delay":"500",class:"top-first-rest",ref:"topFirstRest"},W=["src"],Y=["src"],j={class:"host-copy"},E={class:"welcome-title","data-aos":"fade-right","data-aos-delay":"500"},X={class:"title"},q={class:"subtitle"},D={class:"welcome-desc"},G={class:"image-row",ref:"bottomRow"},K={"data-aos":"fade-up","data-aos-offset":"100",class:"bottom-rest",ref:"bottomRest"},U=["src"],H=["src"],J=["src"],O=g({__name:"CompetitionBanner",setup(i){const t=p(null),r=p(null),a=p(null),n=p(null),e=Array.from({length:6},(l,h)=>`/wsa2025/images/wsa/competition_section01_${(h+1).toString().padStart(2,"0")}.jpg`);return C(()=>{d.registerPlugin(f),f.matchMedia({"(min-width: 1024px)":function(){d.from(t.value,{duration:.5,opacity:0,y:150}),d.from(r.value,{duration:1,opacity:0,y:150});const l=d.timeline({scrollTrigger:{trigger:".second-slide",start:"20% 100%",end:"50% 50%",scrub:!0,toggleActions:"play reverse play reverse"}});l.to(t.value,{scale:.5,duration:.15,opacity:0,y:100,onComplete:()=>{t.value.style.opacity="0"},onReverseComplete:()=>{t.value.style.opacity="1"}},"#leftphoto"),l.to(r.value,{scale:.5,duration:.15,opacity:0,y:1e3,onComplete:()=>{t.value.style.opacity="0"},onReverseComplete:()=>{t.value.style.opacity="1"}},"#rightPhoto"),d.to(a.value,{scrollTrigger:{trigger:a.value,start:"top top",end:"100% 50%",scrub:1},x:0,y:0,opacity:1,scale:1,duration:2}),n.value&&d.from(n.value,{y:-500,scale:1.2,opacity:0,duration:1,scrollTrigger:{trigger:n.value,start:"top 80%",end:"center center",scrub:!0,toggleActions:"play none none reverse"}})}})}),k(()=>{f.getAll().forEach(l=>l.kill())}),(l,h)=>(_(),m(w,null,[o("div",A,[o("div",P,[o("h1",null,s(l.$t("competition.title")),1)]),o("div",R,[o("div",T,[o("div",V,[o("div",{ref_key:"leftPhoto",ref:t,id:"leftphoto",class:"photo-item photo-item--left",style:y({backgroundImage:`url(${c(e)[0]})`})},null,4)]),o("div",z,[o("div",{ref_key:"rightPhoto",ref:r,id:"rightPhoto",class:"photo-item photo-item--right",style:y({backgroundImage:`url(${c(e)[1]})`})},null,4)])])])]),o("div",B,[o("div",L,[o("img",{ref_key:"topFirst",ref:a,id:"topFirst",class:"image-item",src:c(e)[0],alt:"banner2"},null,8,M),o("div",N,[o("img",{class:"image-item",src:c(e)[2],alt:"banner2"},null,8,W),o("img",{class:"image-item",src:c(e)[3],alt:"banner3"},null,8,Y)],512)],512),o("div",j,[h[0]||(h[0]=o("div",{"data-aos":"example-anim1","data-aos-delay":"500",class:"welcome-img"},null,-1)),o("div",E,[o("h4",X,s(l.$t("competition.title_tag")),1),o("h2",q,s(l.$t("competition.title_competition")),1)]),o("p",D,s(l.$t("competition.content")),1)]),o("div",G,[o("div",K,[o("img",{class:"image-item",src:c(e)[4],alt:"banner4"},null,8,U),o("img",{class:"image-item",src:c(e)[5],alt:"banner5"},null,8,H)],512),o("img",{id:"secondLast",ref_key:"secondLast",ref:n,class:"image-item",src:c(e)[1],alt:"banner5"},null,8,J)],512)])],64))}}),Q=u(O,[["__scopeId","data-v-5eda2cb2"]]),Z={class:"competition-schedule"},x={class:"schedule-container"},oo={class:"schedule"},to={class:"schedule__title"},so={class:"bar bar--header"},io={class:"bar__col"},eo={class:"bar__col"},lo={class:"bar__col"},ao={class:"bar__col"},no={class:"date"},co={class:"date__month"},ro={class:"date__num"},_o={class:"date__day"},mo={class:"bar__col"},ho={class:"code"},po={class:"bar__col"},uo={class:"activity"},fo=g({__name:"CompetitionSchedule",setup(i){const{t}=S(),r=F(()=>Array.from({length:8},(a,n)=>({date:t("competition.schedule_date"+(n+1)).split(" "),code:t("competition.schedule_code"+(n+1)),activity:t("competition.schedule_activity"+(n+1))})));return(a,n)=>(_(),m("div",Z,[o("div",x,[o("div",oo,[o("h2",to,s(a.$t("competition.schedule_title")),1),o("div",so,[o("div",io,s(a.$t("competition.schedule_date")),1),o("div",eo,s(a.$t("competition.schedule_code")),1),o("div",lo,s(a.$t("competition.schedule_activity")),1)]),(_(!0),m(w,null,I(r.value,(e,l)=>(_(),m("div",{class:"bar bar--item",key:l},[o("div",ao,[o("div",no,[o("div",co,s(e.date[0]),1),o("div",ro,s(e.date[1]),1),o("div",_o,s(e.date[2]),1)])]),o("div",mo,[o("p",ho,s(e.code),1)]),o("div",po,[o("p",uo,s(e.activity),1)])]))),128))])])]))}}),vo=u(fo,[["__scopeId","data-v-5a478a67"]]),$o={},go={class:"location"},yo={class:"location-container"},bo={class:"location-subtitle"},wo={class:"location-title"},Co={class:"info-bar"},ko={class:"info-bar__desc"},So={class:"info-bar"},Fo={class:"info-bar__detail"},Io={class:"hall-info"},Ao={class:"location-row"},Po={class:"floor-name"},Ro={class:"location-row location-row--with-list"},To={class:"floor-name"},Vo={class:"floor-name__list"},zo={class:"info-bar"},Bo={class:"info-bar__detail"},Lo={class:"hall-info"},Mo={class:"location-row"},No={class:"floor-name"},Wo={class:"location-row location-row--with-list"},Yo={class:"floor-name"},jo={class:"floor-name__list"},Eo={class:"location-row location-row--with-list"},Xo={class:"floor-name"},qo={class:"floor-name__list"};function Do(i,t){return _(),m("div",go,[o("div",yo,[o("header",null,[o("h4",bo,s(i.$t("competition.location_subtitle")),1),o("h2",wo,s(i.$t("competition.location_title")),1)]),o("div",Co,[t[0]||(t[0]=o("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.3358992883273!2d121.61554097708489!3d25.056601877801867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab57f02092dd%3A0x87862fa2121f7e46!2z5Y-w5YyX5Y2X5riv5bGV6Ka96aSoMemkqA!5e0!3m2!1szh-TW!2stw!4v1738190342523!5m2!1szh-TW!2stw",width:"600",height:"356",style:{border:"0"},class:"info-bar__map",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},null,-1)),o("p",ko,s(i.$t("competition.location_map_desc")),1)]),o("div",So,[t[4]||(t[4]=o("div",{class:"info-bar__img info-bar__img--hall1"},null,-1)),o("div",Fo,[o("div",Io,[t[1]||(t[1]=o("img",{class:"hall-info__pin",src:b,alt:"map-pin"},null,-1)),o("span",null,s(i.$t("competition.location_hall1")),1)]),o("div",Ao,[t[2]||(t[2]=o("div",{class:"floor"},"4F",-1)),o("div",Po,s(i.$t("competition.location_hall1_floor1")),1)]),o("div",Ro,[t[3]||(t[3]=o("div",{class:"floor"},"1F",-1)),o("div",To,[v(s(i.$t("competition.location_hall1_floor2"))+" ",1),o("ul",Vo,[o("li",null,s(i.$t("competition.location_hall1_floor2_list1")),1),o("li",null,s(i.$t("competition.location_hall1_floor2_list2")),1),o("li",null,s(i.$t("competition.location_hall1_floor2_list3")),1)])])])])]),o("div",zo,[t[9]||(t[9]=o("div",{class:"info-bar__img info-bar__img--hall2"},null,-1)),o("div",Bo,[o("div",Lo,[t[5]||(t[5]=o("img",{class:"hall-info__pin",src:b,alt:"map-pin"},null,-1)),o("span",null,s(i.$t("competition.location_hall2")),1)]),o("div",Mo,[t[6]||(t[6]=o("div",{class:"floor"},"7F",-1)),o("div",No,s(i.$t("competition.location_hall2_floor1")),1)]),o("div",Wo,[t[7]||(t[7]=o("div",{class:"floor"},"4F",-1)),o("div",Yo,[v(s(i.$t("competition.location_hall2_floor2"))+" ",1),o("ul",jo,[o("li",null,s(i.$t("competition.location_hall2_floor2_list1")),1),o("li",null,s(i.$t("competition.location_hall2_floor2_list2")),1)])])]),o("div",Eo,[t[8]||(t[8]=o("div",{class:"floor"},"1F",-1)),o("div",Xo,[v(s(i.$t("competition.location_hall2_floor3"))+" ",1),o("ul",qo,[o("li",null,s(i.$t("competition.location_hall2_floor3_list1")),1),o("li",null,s(i.$t("competition.location_hall2_floor3_list2")),1)])])])])])])])}const Go=u($o,[["render",Do],["__scopeId","data-v-87b66178"]]),Ko={class:"competition"},Uo=g({__name:"CompetitionView",setup(i){return(t,r)=>(_(),m("div",Ko,[$(Q),$(vo),$(Go)]))}}),Oo=u(Uo,[["__scopeId","data-v-50eda33d"]]);export{Oo as default};
