(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[550],{4445:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pace",function(){return t(6620)}])},6620:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return N}});var c=t(5893),s=t(9845),a=t(6783);function i(e,n,t,c,s,a,i){try{var r=e[a](i),l=r.value}catch(o){t(o);return}r.done?n(l):Promise.resolve(l).then(c,s)}function r(e){return function(){var n=this,t=arguments;return new Promise(function(c,s){var a=e.apply(n,t);function r(e){i(a,c,s,r,l,"next",e)}function l(e){i(a,c,s,r,l,"throw",e)}r(void 0)})}}var l,o,u=t(655),m=t(7294),h=t(4184),_=t.n(h),d=t(9909),f=t.n(d);r(function(e){var n,t,c;return(0,u.__generator)(this,function(t){return n=e.paceSec,[2,e.timeSec/n]})});var v,p=(o=r(function(e){var n,t,c,s,a;return(0,u.__generator)(this,function(t){return n=e.distanceKm,s=Math.floor((c=e.timeSec/n)/60),a=c%60,[2,{fullSec:c,format:{min:s,sec:Math.floor(a)}}]})}),function(e){return o.apply(this,arguments)}),x=(v=r(function(e){var n,t,c,s,a,i;return(0,u.__generator)(this,function(t){return s=Math.floor((c=(n=e.distanceKm)*e.paceSec)/3600),a=Math.floor(c%3600/60),i=Math.floor(c%60),[2,{fullSec:c,format:{hours:s,min:a,sec:i}}]})}),function(e){return v.apply(this,arguments)}),j=function(e,n){return Array.from({length:n-e+1},function(n,t){return t+e})},w=function(){var e,n,t,s=(0,m.useState)(10),a=s[0],i=s[1],l=(0,m.useState)({minutes:4,seconds:0}),o=l[0],h=l[1],d=(0,m.useState)({hours:0,minutes:40,seconds:0}),v=d[0],w=d[1],N=(e=r(function(e){var n,t;return(0,u.__generator)(this,function(n){switch(n.label){case 0:return i(e),[4,x({distanceKm:e,paceSec:60*o.minutes+o.seconds})];case 1:return w({hours:(t=n.sent()).format.hours,minutes:t.format.min,seconds:t.format.sec}),[2]}})}),function(n){return e.apply(this,arguments)}),C=(n=r(function(e,n){var t,c,s;return(0,u.__generator)(this,function(c){switch(c.label){case 0:return h(t={minutes:null!==e?e:o.minutes,seconds:null!==n?n:o.seconds}),[4,x({distanceKm:a,paceSec:60*t.minutes+t.seconds})];case 1:return w({hours:(s=c.sent()).format.hours,minutes:s.format.min,seconds:s.format.sec}),[2]}})}),function(e,t){return n.apply(this,arguments)}),S=(t=r(function(e){var n,t,c,s,i,r;return(0,u.__generator)(this,function(i){switch(i.label){case 0:return n=e.h,t=e.m,c=e.s,w(s={hours:null!==n?n:v.hours,minutes:null!==t?t:v.minutes,seconds:null!==c?c:v.seconds}),[4,p({distanceKm:a,timeSec:3600*s.hours+60*s.minutes+s.seconds})];case 1:return h({minutes:(r=i.sent()).format.min,seconds:r.format.sec}),[2]}})}),function(e){return t.apply(this,arguments)});return(0,c.jsxs)("section",{className:f().PaceCalcSection,children:[(0,c.jsx)("h1",{className:f().title,children:(0,c.jsxs)("span",{children:["Pace ",(0,c.jsx)("br",{})," calculator"]})}),(0,c.jsxs)("div",{className:f().fields,children:[(0,c.jsxs)("div",{className:f().field,children:[(0,c.jsx)("div",{className:_()(f().btns),children:[.1,.2,.4,.8,3,5,10,15,20,21.1,30,42.2].map(function(e,n,t){return(0,c.jsx)("button",{className:_()(f().btnDistanceSamples,a===e&&f().active),onClick:function(n){return N(e)},children:e},"".concat(e,"_").concat(n))})}),(0,c.jsx)("label",{htmlFor:"inputDistance",style:{color:"var(--color-pacer-red)"},children:"Distance"}),(0,c.jsx)("input",{value:"".concat(a),onChange:function(e){120>+e.target.value?N(+e.target.value):N(120)},type:"number",id:"inputDistance",min:0,max:120,step:.1,style:{color:"var(--color-pacer-red)"},className:f().input}),(0,c.jsx)("div",{className:f().unit,children:"km"})]}),(0,c.jsxs)("div",{className:f().field,children:[(0,c.jsx)("label",{htmlFor:"inputPaceMin",children:"Pace"}),(0,c.jsxs)("div",{className:f().inputsGroup,children:[(0,c.jsxs)("div",{className:f().select,children:[(0,c.jsx)("div",{className:f().selectValue,style:{color:"var(--color-accent)"},children:o.minutes}),(0,c.jsx)("select",{value:"".concat(o.minutes),onChange:function(e){return C(+e.target.value,null)},id:"inputPaceMin",className:f().selectGhost,children:j(0,19).map(function(e,n){return(0,c.jsx)("option",{value:e,children:e},"".concat(e,"_").concat(n))})})]}),(0,c.jsx)("span",{className:f().timeColon,style:{color:"var(--color-accent)"},children:":"}),(0,c.jsxs)("div",{className:f().select,children:[(0,c.jsx)("div",{className:f().selectValue,style:{color:"var(--color-accent)"},children:o.seconds}),(0,c.jsx)("select",{value:"".concat(o.seconds),onChange:function(e){return C(null,+e.target.value)},id:"inputPaceSec",className:f().selectGhost,children:j(0,59).map(function(e,n,t){return(0,c.jsx)("option",{value:e,children:e},"".concat(e,"_").concat(n))})})]})]}),(0,c.jsxs)("div",{className:f().unit,children:["min : sec / ","km"]})]}),(0,c.jsxs)("fieldset",{className:f().field,children:[(0,c.jsx)("label",{style:{color:"var(--color-pacer-green)"},children:"Finish time"}),(0,c.jsxs)("div",{className:f().inputsGroup,style:{color:"var(--color-pacer-green)"},children:[(0,c.jsxs)("div",{className:f().select,children:[(0,c.jsx)("div",{className:f().selectValue,style:{color:"var(--color-pacer-green)"},children:v.hours}),(0,c.jsx)("select",{value:"".concat(v.hours),onChange:function(e){return S({h:+e.target.value,m:null,s:null})},id:"inputTimeHours",className:f().selectGhost,children:j(0,23).map(function(e,n){return(0,c.jsx)("option",{value:e,children:e},"".concat(e,"_").concat(n))})})]}),(0,c.jsx)("span",{className:f().timeColon,children:":"}),(0,c.jsxs)("div",{className:f().select,children:[(0,c.jsx)("div",{className:f().selectValue,style:{color:"var(--color-pacer-green)"},children:v.minutes}),(0,c.jsx)("select",{value:"".concat(v.minutes),onChange:function(e){return S({h:null,m:+e.target.value,s:null})},id:"inputTimeMinutes",className:f().selectGhost,children:j(0,59).map(function(e,n){return(0,c.jsx)("option",{value:e,children:e},"".concat(e,"_").concat(n))})})]}),(0,c.jsx)("span",{className:f().timeColon,style:{color:"var(--color-pacer-green)"},children:":"}),(0,c.jsxs)("div",{className:f().select,children:[(0,c.jsx)("div",{className:f().selectValue,style:{color:"var(--color-pacer-green)"},children:v.seconds}),(0,c.jsx)("select",{value:"".concat(v.seconds),onChange:function(e){return S({h:null,m:null,s:+e.target.value})},id:"inputTimeSec",className:f().selectGhost,children:j(0,59).map(function(e,n){return(0,c.jsx)("option",{value:e,children:e},"".concat(e,"_").concat(n))})})]})]}),(0,c.jsx)("div",{className:f().unit,children:"hours : min : sec"})]})]})]})},N=function(){return(0,c.jsx)(s.A,{children:(0,c.jsx)(a.W,{children:(0,c.jsx)(w,{})})})}},8716:function(e,n,t){"use strict";t.d(n,{z:function(){return o},Z:function(){return u}});var c=t(5893),s=t(7935),a=t.n(s),i=t(231),r=t(8193),l=[{label:"Email",url:"mailto:artem.ude@gmail.com",title:"artem.ude@gmail.com",options:{newWindow:!0},icon:(0,c.jsx)(r.Dme,{size:24})},{label:"LinkedIn",url:"https://www.linkedin.com/in/artemshar/",title:"@artemshar",options:{newWindow:!0},icon:(0,c.jsx)(i.ltd,{size:24})},{label:"Telegram",url:"https://t.me/artemshar",title:"t.me/artemshar",options:{newWindow:!0},icon:(0,c.jsx)(i.Ww5,{size:24})},{label:"GitHub",url:"https://github.com/artemshar",title:"@artemshar",options:{newWindow:!0},icon:(0,c.jsx)(i.hJX,{size:24})},{label:"ProductHunt",url:"https://www.producthunt.com/@artemshar",title:"@artemshared",options:{newWindow:!0},icon:(0,c.jsx)(i.M56,{size:24})},],o=function(){return(0,c.jsx)("div",{id:"contacts",className:a().contacts,children:(0,c.jsx)("ul",{className:a().contacts__list,children:l.map(function(e){return(0,c.jsx)("li",{className:a().contacts__item,children:(0,c.jsx)("a",{className:a().contacts__itemLink,href:e.url,rel:"noreferrer",target:e.options.newWindow?"_blank":"",children:e.icon})},e.url)})})})},u=o},6783:function(e,n,t){"use strict";t.d(n,{W:function(){return l},Z:function(){return o}});var c=t(5893),s=t(8694),a=t.n(s),i=t(4184),r=t.n(i),l=function(e){var n=e.children,t=e.width;return(0,c.jsx)("div",{className:r()(a().container,"small"===t&&a().small),children:n})},o=l},9845:function(e,n,t){"use strict";t.d(n,{A:function(){return W}});var c=t(5893),s=t(4184),a=t.n(s),i=t(9008),r=t.n(i),l=t(9473),o=l.v9,u=t(2336),m=t(7320),h=t.n(m),_=t(8716),d=t(6783),f=t(7294),v=function(){var e,n=(0,f.useState)(1),t=n[0],s=n[1],a=[{ea:(0,c.jsx)("span",{children:"\uD83C\uDF0E"})},{ea:(0,c.jsx)("span",{children:"\uD83C\uDF0D"})},{ea:(0,c.jsx)("span",{children:"\uD83C\uDF0F"})},];(0,f.useEffect)(function(){var e=setInterval(function(){s(function(e){return e%3+1})},2e3);return function(){return clearInterval(e)}},[]);var i=new Date().getFullYear();return(0,c.jsxs)("div",{children:[(0,c.jsx)("span",{title:"The Earth, it's spinning!",children:null===(e=a[t-1])||void 0===e?void 0:e.ea}),i]})},p=function(e){var n=e.footerContacts;return(0,c.jsx)("footer",{className:h().footer,children:(0,c.jsxs)(d.Z,{children:[(void 0===n||n)&&(0,c.jsxs)("div",{className:h().column,children:[(0,c.jsx)("h3",{className:h().title,children:"Contacts"}),(0,c.jsx)(_.Z,{})]}),(0,c.jsx)("div",{children:(0,c.jsx)("a",{href:"https://youtu.be/7QP2I5AHC4I?si=CcX-PFtPB3nbx7kd",target:"_blanc",title:"Venetian Snares - This Bitter Earth",children:(0,c.jsx)(v,{})})})]})})},x=t(1664),j=t.n(x),w=t(1163),N=t(7908),C=t.n(N),S=t(2817),g=t.n(S),b=t(4731),y=function(){var e=o(u.qm),n=(0,l.I0)(),t=function(){var t=e.theme===b.yU.DARK?b.yU.LIGHT:b.yU.DARK;n((0,u.X8)(t))};return(0,c.jsx)("div",{className:a()(g().themeSwitcher,e,g()[e.theme]),onClick:t,children:(0,c.jsx)("div",{className:g().themeSwitcher__radio})})},P=t(231),k=[{url:"/",title:"home",options:{newWindow:!1},icon:P.QBi},{url:"/contacts",title:"Contacts",options:{newWindow:!1}},{url:"/experience",title:"Experience",options:{newWindow:!1}},],D=[{url:"/pace",title:"Pace calculator",options:{newWindow:!1},icon:P.qyc},],L=function(){var e=(0,w.useRouter)();return(0,c.jsxs)("header",{className:C().header,children:[(0,c.jsx)(d.W,{children:(0,c.jsxs)("nav",{className:C().nav,children:[(0,c.jsx)("ul",{className:C().nav__list,children:k.map(function(n){return(0,c.jsx)("li",{className:a()(C().nav__item,e.asPath===n.url&&C().nav__item_active),children:(0,c.jsx)(j(),{href:n.url,target:n.options.newWindow?"_blank":"",children:(0,c.jsxs)("a",{className:C().nav__itemLink,children:[n.icon&&(0,c.jsx)(n.icon,{style:{marginRight:"0.5rem"}}),n.title]})})},n.url+n.title)})}),(0,c.jsx)("ul",{className:C().nav__list,children:D.map(function(n){return(0,c.jsx)("li",{className:a()(C().nav__item,e.asPath===n.url&&C().nav__item_active),children:(0,c.jsx)(j(),{href:n.url,target:n.options.newWindow?"_blank":"",children:(0,c.jsxs)("a",{className:C().nav__itemLink,children:[n.icon&&(0,c.jsx)(n.icon,{style:{marginRight:"0.5rem"}}),n.title]})})},n.url+n.title)})})]})}),(0,c.jsx)(y,{})]})},G=t(4204),E=t.n(G),F=function(){return(0,c.jsxs)(r(),{children:[(0,c.jsx)("meta",{charSet:"UTF-8"}),(0,c.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,c.jsx)("meta",{name:"description",content:"Artem Shar | Web / Front-End / Fullstack Development"}),(0,c.jsx)("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.99em%22 font-size=%2280%22>☁️</text></svg>"}),(0,c.jsx)("title",{children:"Artem Shar | FE Development"})]})},W=function(e){var n=e.children,t=e.className,s=e.classNameMain,i=e.footerContacts,r=o(u.qm).theme.toLowerCase();return(0,c.jsxs)("div",{className:a()(E().wrapper,t,r),children:[(0,c.jsx)(F,{}),(0,c.jsx)(L,{}),(0,c.jsx)("main",{className:a()(E().main,s),children:n}),(0,c.jsx)(p,{footerContacts:i})]})}},7935:function(e){e.exports={contacts__list:"Contacts_contacts__list__GBA6x",contacts__item:"Contacts_contacts__item__rSFNM",contacts__itemLink:"Contacts_contacts__itemLink__Z3aLd"}},2817:function(e){e.exports={themeSwitcher:"ThemeSwitcher_themeSwitcher__3ppfH",themeSwitcher__radio:"ThemeSwitcher_themeSwitcher__radio__Gbv0_",DARK:"ThemeSwitcher_DARK__ENafB",LIGHT:"ThemeSwitcher_LIGHT__kLVfZ"}},8694:function(e){e.exports={container:"Container_container__hLzfs",small:"Container_small__tns52"}},7320:function(e){e.exports={footer:"Footer_footer__LyqoE",column:"Footer_column__fIaab",title:"Footer_title__4_ybK"}},7908:function(e){e.exports={header:"Header_header__jtMDd",nav:"Header_nav__pEi2X",nav__list:"Header_nav__list___5Wm2",nav__item:"Header_nav__item__HFm1L",nav__item_active:"Header_nav__item_active__jkJ3n",nav__itemLink:"Header_nav__itemLink__eEwpk"}},4204:function(e){e.exports={wrapper:"Layout_wrapper__kfZ1l",main:"Layout_main__oc42n"}},9909:function(e){e.exports={PaceCalcSection:"PaceCalcSection_PaceCalcSection__GzdhV",title:"PaceCalcSection_title__0CAsg",fields:"PaceCalcSection_fields__qC1Cn",field:"PaceCalcSection_field__HoVXv",input:"PaceCalcSection_input__lLZ1r",select:"PaceCalcSection_select__JjUXp",selectValue:"PaceCalcSection_selectValue__Sulk_",selectGhost:"PaceCalcSection_selectGhost___AqDJ",unit:"PaceCalcSection_unit__5pE7m",inputsGroup:"PaceCalcSection_inputsGroup__GyrIK",btns:"PaceCalcSection_btns__NKcx1",btnDistanceSamples:"PaceCalcSection_btnDistanceSamples__fxmoT",active:"PaceCalcSection_active__ggl9N",timeColon:"PaceCalcSection_timeColon__w_155"}}},function(e){e.O(0,[778,617,169,774,888,179],function(){return e(e.s=4445)}),_N_E=e.O()}]);