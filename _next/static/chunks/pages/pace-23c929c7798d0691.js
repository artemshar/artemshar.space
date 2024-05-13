(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[550],{4445:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pace",function(){return n(7577)}])},7577:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return pace}});var a=n(5893),c=n(2313),s=n(2916),l=n(7294),i=n(4184),r=n.n(i),o=n(1003),u=n.n(o);let calcPace=async e=>{let{distanceKm:t,timeSec:n}=e,a=n/t;return{fullSec:a,format:{min:Math.floor(a/60),sec:Math.floor(a%60)}}},calcTime=async e=>{let{distanceKm:t,paceSec:n}=e,a=t*n;return{fullSec:a,format:{hours:Math.floor(a/3600),min:Math.floor(a%3600/60),sec:Math.floor(a%60)}}},range=(e,t)=>Array.from({length:t-e+1},(t,n)=>n+e);var sections_PaceCalcSection=()=>{let[e,t]=(0,l.useState)(10),[n,c]=(0,l.useState)({minutes:4,seconds:0}),[s,i]=(0,l.useState)({hours:0,minutes:40,seconds:0}),handleChangeDistance=async e=>{t(e);let a=60*n.minutes+n.seconds,c=await calcTime({distanceKm:e,paceSec:a});i({hours:c.format.hours,minutes:c.format.min,seconds:c.format.sec})},handleChangePace=async(t,a)=>{let s={minutes:null!==t?t:n.minutes,seconds:null!==a?a:n.seconds};c(s);let l=60*s.minutes+s.seconds,r=await calcTime({distanceKm:e,paceSec:l});i({hours:r.format.hours,minutes:r.format.min,seconds:r.format.sec})},handleChangeTime=async t=>{let{h:n,m:a,s:l}=t,r={hours:null!==n?n:s.hours,minutes:null!==a?a:s.minutes,seconds:null!==l?l:s.seconds};i(r);let o=3600*r.hours+60*r.minutes+r.seconds,u=await calcPace({distanceKm:e,timeSec:o});c({minutes:u.format.min,seconds:u.format.sec})};return(0,a.jsxs)("section",{className:u().PaceCalcSection,children:[(0,a.jsx)("h1",{className:u().title,children:(0,a.jsxs)("span",{children:["Pace ",(0,a.jsx)("br",{})," calculator"]})}),(0,a.jsxs)("div",{className:u().fields,children:[(0,a.jsxs)("div",{className:u().field,children:[(0,a.jsx)("div",{className:r()(u().btns),children:[.1,.2,.4,.8,3,5,10,15,20,21.1,30,42.2].map((t,n,c)=>(0,a.jsx)("button",{className:r()(u().btnDistanceSamples,e===t&&u().active),onClick:e=>handleChangeDistance(t),children:t},"".concat(t,"_").concat(n)))}),(0,a.jsx)("label",{htmlFor:"inputDistance",style:{color:"var(--color-pacer-red)"},children:"Distance"}),(0,a.jsx)("input",{value:"".concat(e),onChange:e=>{120>+e.target.value?handleChangeDistance(+e.target.value):handleChangeDistance(120)},type:"number",id:"inputDistance",min:0,max:120,step:.1,style:{color:"var(--color-pacer-red)"},className:u().input}),(0,a.jsx)("div",{className:u().unit,children:"km"})]}),(0,a.jsxs)("div",{className:u().field,children:[(0,a.jsx)("label",{htmlFor:"inputPaceMin",children:"Pace"}),(0,a.jsxs)("div",{className:u().inputsGroup,children:[(0,a.jsxs)("div",{className:u().select,children:[(0,a.jsx)("div",{className:u().selectValue,style:{color:"var(--color-accent)"},children:n.minutes}),(0,a.jsx)("select",{value:"".concat(n.minutes),onChange:e=>handleChangePace(+e.target.value,null),id:"inputPaceMin",className:u().selectGhost,children:range(0,19).map((e,t)=>(0,a.jsx)("option",{value:e,children:e},"".concat(e,"_").concat(t)))})]}),(0,a.jsx)("span",{className:u().timeColon,style:{color:"var(--color-accent)"},children:":"}),(0,a.jsxs)("div",{className:u().select,children:[(0,a.jsx)("div",{className:u().selectValue,style:{color:"var(--color-accent)"},children:n.seconds}),(0,a.jsx)("select",{value:"".concat(n.seconds),onChange:e=>handleChangePace(null,+e.target.value),id:"inputPaceSec",className:u().selectGhost,children:range(0,59).map((e,t,n)=>(0,a.jsx)("option",{value:e,children:e},"".concat(e,"_").concat(t)))})]})]}),(0,a.jsxs)("div",{className:u().unit,children:["min : sec / ","km"]})]}),(0,a.jsxs)("fieldset",{className:u().field,children:[(0,a.jsx)("label",{style:{color:"var(--color-pacer-green)"},children:"Finish time"}),(0,a.jsxs)("div",{className:u().inputsGroup,style:{color:"var(--color-pacer-green)"},children:[(0,a.jsxs)("div",{className:u().select,children:[(0,a.jsx)("div",{className:u().selectValue,style:{color:"var(--color-pacer-green)"},children:s.hours}),(0,a.jsx)("select",{value:"".concat(s.hours),onChange:e=>handleChangeTime({h:+e.target.value,m:null,s:null}),id:"inputTimeHours",className:u().selectGhost,children:range(0,23).map((e,t)=>(0,a.jsx)("option",{value:e,children:e},"".concat(e,"_").concat(t)))})]}),(0,a.jsx)("span",{className:u().timeColon,children:":"}),(0,a.jsxs)("div",{className:u().select,children:[(0,a.jsx)("div",{className:u().selectValue,style:{color:"var(--color-pacer-green)"},children:s.minutes}),(0,a.jsx)("select",{value:"".concat(s.minutes),onChange:e=>handleChangeTime({h:null,m:+e.target.value,s:null}),id:"inputTimeMinutes",className:u().selectGhost,children:range(0,59).map((e,t)=>(0,a.jsx)("option",{value:e,children:e},"".concat(e,"_").concat(t)))})]}),(0,a.jsx)("span",{className:u().timeColon,style:{color:"var(--color-pacer-green)"},children:":"}),(0,a.jsxs)("div",{className:u().select,children:[(0,a.jsx)("div",{className:u().selectValue,style:{color:"var(--color-pacer-green)"},children:s.seconds}),(0,a.jsx)("select",{value:"".concat(s.seconds),onChange:e=>handleChangeTime({h:null,m:null,s:+e.target.value}),id:"inputTimeSec",className:u().selectGhost,children:range(0,59).map((e,t)=>(0,a.jsx)("option",{value:e,children:e},"".concat(e,"_").concat(t)))})]})]}),(0,a.jsx)("div",{className:u().unit,children:"hours : min : sec"})]})]})]})},pace=()=>(0,a.jsx)(c.A,{children:(0,a.jsx)(s.W,{children:(0,a.jsx)(sections_PaceCalcSection,{})})})},4555:function(e,t,n){"use strict";n.d(t,{z:function(){return Contacts},Z:function(){return o}});var a=n(5893),c=n(7731),s=n.n(c),l=n(231),i=n(8193);let r=[{label:"Email",url:"mailto:artem.ude@gmail.com",title:"artem.ude@gmail.com",options:{newWindow:!0},icon:(0,a.jsx)(i.Dme,{size:24})},{label:"LinkedIn",url:"https://www.linkedin.com/in/artemshar",title:"@artemshar",options:{newWindow:!0},icon:(0,a.jsx)(l.ltd,{size:24})},{label:"Telegram",url:"https://t.me/artemshar",title:"t.me/artemshar",options:{newWindow:!0},icon:(0,a.jsx)(l.Ww5,{size:24})},{label:"GitHub",url:"https://github.com/artemshar",title:"@artemshar",options:{newWindow:!0},icon:(0,a.jsx)(l.hJX,{size:24})},{label:"ProductHunt",url:"https://www.producthunt.com/@artemshar",title:"@artemshared",options:{newWindow:!0},icon:(0,a.jsx)(l.M56,{size:24})}],Contacts=()=>(0,a.jsx)("div",{id:"contacts",className:s().contacts,children:(0,a.jsx)("ul",{className:s().contacts__list,children:r.map(e=>(0,a.jsx)("li",{className:s().contacts__item,children:(0,a.jsx)("a",{className:s().contacts__itemLink,href:e.url,rel:"noreferrer",target:e.options.newWindow?"_blank":"",children:e.icon})},e.url))})});var o=Contacts},2916:function(e,t,n){"use strict";n.d(t,{W:function(){return Container},Z:function(){return r}});var a=n(5893),c=n(2422),s=n.n(c),l=n(4184),i=n.n(l);let Container=e=>{let{children:t,width:n}=e;return(0,a.jsx)("div",{className:i()(s().container,"small"===n&&s().small),children:t})};var r=Container},2313:function(e,t,n){"use strict";n.d(t,{A:function(){return Layout}});var a=n(5893),c=n(4184),s=n.n(c),l=n(9008),i=n.n(l),r=n(9473);let useAppDispatch=()=>(0,r.I0)(),o=r.v9;var u=n(4708),_=n(6854),m=n.n(_),h=n(4555),d=n(2916),x=n(7294);let CurrentYearJSX=()=>{var e;let[t,n]=(0,x.useState)(1),c=[{ea:(0,a.jsx)("span",{children:"\uD83C\uDF0E"})},{ea:(0,a.jsx)("span",{children:"\uD83C\uDF0D"})},{ea:(0,a.jsx)("span",{children:"\uD83C\uDF0F"})}];(0,x.useEffect)(()=>{let e=setInterval(()=>{n(e=>e%3+1)},2e3);return()=>clearInterval(e)},[]);let s=new Date,l=s.getFullYear();return(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{title:"The Earth, it's spinning!",children:null===(e=c[t-1])||void 0===e?void 0:e.ea}),l]})},Footer_Footer=e=>{let{footerContacts:t=!0}=e;return(0,a.jsx)("footer",{className:m().footer,children:(0,a.jsxs)(d.Z,{children:[t&&(0,a.jsxs)("div",{className:m().column,children:[(0,a.jsx)("h3",{className:m().title,children:"Contacts"}),(0,a.jsx)(h.Z,{})]}),(0,a.jsx)("div",{children:(0,a.jsx)("a",{href:"https://youtu.be/7QP2I5AHC4I?si=CcX-PFtPB3nbx7kd",target:"_blanc",title:"Venetian Snares - This Bitter Earth",children:(0,a.jsx)(CurrentYearJSX,{})})})]})})};var v=n(1664),p=n.n(v),j=n(1163),g=n(8270),C=n.n(g),w=n(4685),f=n.n(w),N=n(7300);let ThemeSwitcher_ThemeSwitcher=()=>{let e=o(u.qm),t=useAppDispatch();return(0,a.jsx)("div",{className:s()(f().themeSwitcher,e,f()[e.theme]),onClick:()=>{let n=e.theme===N.yU.DARK?N.yU.LIGHT:N.yU.DARK;t((0,u.X8)(n))},children:(0,a.jsx)("div",{className:f().themeSwitcher__radio})})};var S=n(231),P=n(726),b=n.n(P);let BurgerIcon=e=>{let{className:t,onClick:n,style:c,closeView:l}=e;return(0,a.jsxs)("div",{style:c,onClick:n,className:s()(b().icon_burger,l&&b().close,t),children:[(0,a.jsx)("div",{className:b().line1}),(0,a.jsx)("div",{className:b().line2}),(0,a.jsx)("div",{className:b().line3})]})},y=[{url:"/",title:"home",options:{newWindow:!1},icon:S.QBi},{url:"/contacts",title:"Contacts",options:{newWindow:!1}},{url:"/experience",title:"Experience",options:{newWindow:!1}}],k=[{url:"/pace",title:"Pace calculator",options:{newWindow:!1},icon:S.qyc}],Header_Header=()=>{let e=(0,j.useRouter)(),[t,n]=(0,x.useState)(!1),c=(0,x.useCallback)(()=>y.map(t=>(0,a.jsx)("li",{className:s()(C().nav__item,e.asPath===t.url&&C().nav__item_active),children:(0,a.jsxs)(p(),{className:C().nav__itemLink,href:t.url,target:t.options.newWindow?"_blank":"",children:[t.icon&&(0,a.jsx)(t.icon,{style:{marginRight:"0.5rem"}}),t.title]})},t.url+t.title)),[]),l=(0,x.useCallback)(()=>k.map(t=>(0,a.jsx)("li",{className:s()(C().nav__item,e.asPath===t.url&&C().nav__item_active),children:(0,a.jsxs)(p(),{className:C().nav__itemLink,href:t.url,target:t.options.newWindow?"_blank":"",children:[t.icon&&(0,a.jsx)(t.icon,{style:{marginRight:"0.5rem"}}),t.title]})},t.url+t.title)),[]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("header",{className:s()(C().header,t&&C().open),children:[(0,a.jsx)(d.W,{children:(0,a.jsxs)("nav",{className:C().nav,children:[(0,a.jsx)("ul",{className:C().nav__list,children:c()}),(0,a.jsx)("ul",{className:C().nav__list,children:l()})]})}),(0,a.jsx)(ThemeSwitcher_ThemeSwitcher,{})]}),(0,a.jsx)(BurgerIcon,{className:C().iconBurger,onClick:()=>{n(!t)},closeView:t})]})};var T=n(860),D=n.n(T);let MetaHead=()=>(0,a.jsxs)(i(),{children:[(0,a.jsx)("meta",{charSet:"UTF-8"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,a.jsx)("meta",{name:"description",content:"Artem Shar | Web / Front-End / Fullstack Development"}),(0,a.jsx)("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.99em%22 font-size=%2280%22>⚫</text></svg>"}),(0,a.jsx)("title",{children:"Artem Shar | FE Development"})]}),Layout=e=>{let{children:t,className:n,classNameMain:c,footerContacts:l}=e,i=o(u.qm),r=i.theme.toLowerCase();return(0,a.jsxs)("div",{className:s()(D().wrapper,n,r,r&&D()["".concat(r)]),children:[(0,a.jsx)(MetaHead,{}),(0,a.jsx)(Header_Header,{}),(0,a.jsx)("main",{className:s()(D().main,c),children:t}),(0,a.jsx)(Footer_Footer,{footerContacts:l})]})}},726:function(e){e.exports={icon_burger:"BurgerIcon_icon_burger__KZrIL",line1:"BurgerIcon_line1__ZiYjN",line2:"BurgerIcon_line2__MXkYY",line3:"BurgerIcon_line3__TNKie",close:"BurgerIcon_close__qAnHS"}},7731:function(e){e.exports={contacts:"Contacts_contacts__cflXP",contacts__list:"Contacts_contacts__list__ttF37",contacts__item:"Contacts_contacts__item__uvTCK",contacts__itemLink:"Contacts_contacts__itemLink__kqklr"}},4685:function(e){e.exports={themeSwitcher:"ThemeSwitcher_themeSwitcher__riZg5",themeSwitcher__radio:"ThemeSwitcher_themeSwitcher__radio__o7I2O",DARK:"ThemeSwitcher_DARK__6nrFv",LIGHT:"ThemeSwitcher_LIGHT__zby_6"}},2422:function(e){e.exports={container:"Container_container__FDHk4",small:"Container_small__DB_lb"}},6854:function(e){e.exports={footer:"Footer_footer__fPuQk",column:"Footer_column__I_SdU",title:"Footer_title__CKLXX"}},8270:function(e){e.exports={header:"Header_header__eDAqj",open:"Header_open__2y4EP",nav:"Header_nav__f2MAs",nav__list:"Header_nav__list___w3T9",nav__item:"Header_nav__item__I8i8c",nav__item_active:"Header_nav__item_active__BB1Rw",nav__itemLink:"Header_nav__itemLink__uhj_Z",iconBurger:"Header_iconBurger__vucFi"}},860:function(e){e.exports={wrapper:"Layout_wrapper__MObmA",light:"Layout_light__WZPFR",main:"Layout_main__QJSBj"}},1003:function(e){e.exports={PaceCalcSection:"PaceCalcSection_PaceCalcSection__A0J3U",title:"PaceCalcSection_title__tQJnT",fields:"PaceCalcSection_fields__wWLyd",field:"PaceCalcSection_field__onGIF",input:"PaceCalcSection_input__GEH2n",select:"PaceCalcSection_select__c9yyB",selectValue:"PaceCalcSection_selectValue__dm6hS",selectGhost:"PaceCalcSection_selectGhost__mdp69",unit:"PaceCalcSection_unit__A6u5N",inputsGroup:"PaceCalcSection_inputsGroup__87Ou_",btns:"PaceCalcSection_btns__OAe1L",btnDistanceSamples:"PaceCalcSection_btnDistanceSamples__ahcdQ",active:"PaceCalcSection_active___beuz",timeColon:"PaceCalcSection_timeColon__kW_xY"}}},function(e){e.O(0,[778,617,169,774,888,179],function(){return e(e.s=4445)}),_N_E=e.O()}]);