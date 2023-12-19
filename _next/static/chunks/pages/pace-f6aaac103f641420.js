(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[550],{4445:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pace",function(){return t(6620)}])},6620:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return S}});var i=t(5893),s=t(9845),c=t(6783);function a(e,n,t,i,s,c,a){try{var r=e[c](a),o=r.value}catch(l){t(l);return}r.done?n(o):Promise.resolve(o).then(i,s)}function r(e){return function(){var n=this,t=arguments;return new Promise(function(i,s){var c=e.apply(n,t);function r(e){a(c,i,s,r,o,"next",e)}function o(e){a(c,i,s,r,o,"throw",e)}r(void 0)})}}var o,l,u=t(655),m=t(7294),_=t(4184),d=t.n(_),h=t(9909),p=t.n(h);r(function(e){var n,t,i;return(0,u.__generator)(this,function(t){return n=e.paceSec,[2,e.timeSec/n]})});var f,x=(l=r(function(e){var n,t,i,s,c;return(0,u.__generator)(this,function(t){return n=e.distanceKm,s=Math.floor((i=e.timeSec/n)/60),c=i%60,[2,{fullSec:i,format:{min:s,sec:c}}]})}),function(e){return l.apply(this,arguments)}),v=(f=r(function(e){var n,t,i,s,c,a;return(0,u.__generator)(this,function(t){return s=Math.floor((i=(n=e.distanceKm)*e.paceSec)/3600),c=Math.floor(i%3600/60),a=i%60,[2,{fullSec:i,format:{hours:s,min:c,sec:a}}]})}),function(e){return f.apply(this,arguments)}),j=function(e,n){return Array.from({length:n-e+1},function(n,t){return t+e})},w=function(){var e,n,t,s=(0,m.useState)(10),c=s[0],a=s[1],o=(0,m.useState)({minutes:4,seconds:0}),l=o[0],_=o[1],h=(0,m.useState)({hours:0,minutes:40,seconds:0}),f=h[0],w=h[1],S={minutes:1,seconds:1},b=(e=r(function(e){var n,t;return(0,u.__generator)(this,function(n){switch(n.label){case 0:return a(e),f.hours,f.minutes,f.seconds,[4,v({distanceKm:e,paceSec:60*l.minutes+l.seconds})];case 1:return w({hours:(t=n.sent()).format.hours,minutes:t.format.min,seconds:t.format.sec}),[2]}})}),function(n){return e.apply(this,arguments)}),N=(n=r(function(e,n){var t,i,s;return(0,u.__generator)(this,function(a){switch(a.label){case 0:return _(t={minutes:null!==e?e:l.minutes,seconds:null!==n?n:l.seconds}),i=60*t.minutes+t.seconds,f.hours,f.minutes,f.seconds,[4,v({distanceKm:c,paceSec:i})];case 1:return w({hours:(s=a.sent()).format.hours,minutes:s.format.min,seconds:s.format.sec}),[2]}})}),function(e,t){return n.apply(this,arguments)}),g=(t=r(function(e,n,t){var i,s,a;return(0,u.__generator)(this,function(s){switch(s.label){case 0:return w(i={hours:null!==e?e:f.hours,minutes:null!==n?n:f.minutes,seconds:null!==t?t:f.seconds}),[4,x({distanceKm:c,timeSec:60*i.hours+60*i.minutes+i.seconds})];case 1:return _({minutes:(a=s.sent()).format.min,seconds:a.format.sec}),[2]}})}),function(e,n,i){return t.apply(this,arguments)});return(0,i.jsxs)("section",{className:p().PaceCalcSection,children:[(0,i.jsx)("h1",{className:p().title,children:(0,i.jsx)("span",{style:{color:"#b406db"},children:"Pace calculator"})}),(0,i.jsxs)("div",{className:p().fields,children:[(0,i.jsxs)("div",{className:p().field,children:[(0,i.jsx)("label",{children:"Distance"}),(0,i.jsx)("input",{value:"".concat(c),onChange:function(e){return b(+e.target.value)},type:"number",id:"inputDistance",min:1,max:320,step:.1}),(0,i.jsx)("div",{children:"km"})]}),(0,i.jsxs)("div",{className:p().field,children:[(0,i.jsx)("label",{children:"Pace"}),(0,i.jsxs)("div",{className:p().inputsGroup,children:[(0,i.jsx)("select",{value:"".concat(l.minutes),onChange:function(e){return N(+e.target.value,null)},type:"number",id:"inputPaceMin",min:0,max:30,step:S.minutes,className:p().input_paceMinutes,children:j(0,30).map(function(e,n){return(0,i.jsx)("option",{children:e},"".concat(e,"_").concat(n))})}),(0,i.jsx)("span",{children:":"}),(0,i.jsx)("select",{value:"".concat(l.seconds),onChange:function(e){return N(null,+e.target.value)},type:"number",id:"inputPaceSec",min:0,max:59,step:S.seconds,className:p().input_paceSeconds,children:j(0,59).map(function(e,n){return(0,i.jsx)("option",{children:e},"".concat(e,"_").concat(n))})})]}),(0,i.jsxs)("div",{children:["min / ","km"]})]}),(0,i.jsxs)("div",{className:p().field,children:[(0,i.jsx)("label",{children:"Time"}),(0,i.jsxs)("div",{className:p().inputsGroup,children:[(0,i.jsx)("select",{value:"".concat(f.hours),onChange:function(e){return g(+e.target.value,null,null)},type:"number",id:"inputTimeHours",min:0,max:23,step:1,children:j(0,23).map(function(e,n){return(0,i.jsx)("option",{children:e},"".concat(e,"_").concat(n))})}),(0,i.jsx)("span",{children:":"}),(0,i.jsx)("select",{value:"".concat(f.minutes),onChange:function(e){return g(null,+e.target.value,null)},type:"number",id:"inputTimeMinutes",min:0,max:23,step:1,children:j(0,59).map(function(e,n){return(0,i.jsx)("option",{children:e},"".concat(e,"_").concat(n))})}),(0,i.jsx)("span",{children:":"}),(0,i.jsx)("select",{value:"".concat(f.seconds),onChange:function(e){return g(null,null,+e.target.value)},type:"number",id:"inputTimeSec",min:0,max:23,step:1,children:j(0,59).map(function(e,n){return(0,i.jsx)("option",{children:e},"".concat(e,"_").concat(n))})})]}),(0,i.jsx)("div",{children:"hours : minutes : seconds"})]})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{className:p().samplesLabel,children:"km"}),(0,i.jsx)("div",{className:d()(p().btns),children:[1,2,3,5,8,10,15,21.0975,30,42.195].map(function(e,n){return(0,i.jsx)("button",{className:d()(p().btnDistanceSamples,c===e&&p().active),onClick:function(n){return b(e)},children:e},"".concat(e,"_").concat(n))})})]})]})},S=function(){return(0,i.jsx)(s.A,{children:(0,i.jsx)(c.W,{children:(0,i.jsx)(w,{})})})}},8716:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var i=t(5893),s=t(7935),c=t.n(s),a=t(231),r=t(8193),o=[{label:"Email",url:"mailto:artem.ude@gmail.com",title:"artem.ude@gmail.com",options:{newWindow:!0},icon:(0,i.jsx)(r.Dme,{size:24})},{label:"LinkedIn",url:"https://www.linkedin.com/in/artemshar/",title:"@artemshar",options:{newWindow:!0},icon:(0,i.jsx)(a.ltd,{size:24})},{label:"Twitter",url:"https://twitter.com/artem_shar",title:"@artem_shar",options:{newWindow:!0},icon:(0,i.jsx)(a.LCd,{size:24})},{label:"Facebook",url:"https://www.facebook.com/artemsss/",title:"@artemsss",options:{newWindow:!0},icon:(0,i.jsx)(a.Am9,{size:24})},{label:"Telegram",url:"https://t.me/artemshar",title:"t.me/artemshar",options:{newWindow:!0},icon:(0,i.jsx)(a.Ww5,{size:24})},{label:"GitHub",url:"https://github.com/artemshar",title:"@artemshar",options:{newWindow:!0},icon:(0,i.jsx)(a.hJX,{size:24})},{label:"ProductHunt",url:"https://www.producthunt.com/@artemshar",title:"@artemshared",options:{newWindow:!0},icon:(0,i.jsx)(a.M56,{size:24})},],l=function(){return(0,i.jsx)("div",{id:"contacts",className:c().contacts,children:(0,i.jsx)("ul",{className:c().contacts__list,children:o.map(function(e){return(0,i.jsx)("li",{className:c().contacts__item,children:(0,i.jsx)("a",{className:c().contacts__itemLink,href:e.url,rel:"noreferrer",target:e.options.newWindow?"_blank":"",children:e.icon})},e.url)})})})}},6783:function(e,n,t){"use strict";t.d(n,{W:function(){return o},Z:function(){return l}});var i=t(5893),s=t(8694),c=t.n(s),a=t(4184),r=t.n(a),o=function(e){var n=e.children,t=e.width;return(0,i.jsx)("div",{className:r()(c().container,"small"===t&&c().small),children:n})},l=o},9845:function(e,n,t){"use strict";t.d(n,{A:function(){return D}});var i=t(5893),s=t(4184),c=t.n(s),a=t(9008),r=t.n(a),o=t(9473),l=o.v9,u=t(2336),m=t(7320),_=t.n(m),d=t(8716),h=t(6783),p=t(7294),f=function(){var e=(0,p.useCallback)(function(){var e=new Date().getFullYear();return(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{title:"God, bless the earth and people so that there will never be war and senseless death.",children:"\uD83C\uDF0D"})," ",e]})},[]);return(0,i.jsx)("footer",{className:_().footer,children:(0,i.jsxs)(h.Z,{children:[(0,i.jsxs)("div",{className:_().column,children:[(0,i.jsx)("h3",{className:_().title,children:"LINKS & CONTACTS"}),(0,i.jsx)(d.Z,{})]}),(0,i.jsx)("div",{children:e()})]})})},x=t(1664),v=t.n(x),j=t(1163),w=t(7908),S=t.n(w),b=t(2817),N=t.n(b),g=t(4731),C=function(){var e=l(u.qm),n=(0,o.I0)(),t=function(){var t=e.theme===g.yU.DARK?g.yU.LIGHT:g.yU.DARK;n((0,u.X8)(t))};return(0,i.jsx)("div",{className:c()(N().themeSwitcher,e,N()[e.theme]),onClick:t,children:(0,i.jsx)("div",{className:N().themeSwitcher__radio})})},k=[{url:"/",title:"/",options:{newWindow:!1},icon:t(231).QBi},{url:"/#contacts",title:"Contacts",options:{newWindow:!1}},],y=[],P=function(){var e=(0,j.useRouter)();return(0,i.jsxs)("header",{className:S().header,children:[(0,i.jsx)(h.W,{children:(0,i.jsxs)("nav",{className:S().nav,children:[(0,i.jsx)("ul",{className:S().nav__list,children:k.map(function(n){return(0,i.jsx)("li",{className:c()(S().nav__item,e.asPath===n.url&&S().nav__item_active),children:(0,i.jsx)(v(),{href:n.url,target:n.options.newWindow?"_blank":"",children:(0,i.jsxs)("a",{className:S().nav__itemLink,children:[n.icon&&(0,i.jsx)(n.icon,{style:{marginRight:"0.5rem"}}),n.title]})})},n.url+n.title)})}),(0,i.jsx)("ul",{className:S().nav__list,children:y.map(function(n){return(0,i.jsx)("li",{className:c()(S().nav__item,e.asPath===n.url&&S().nav__item_active),children:(0,i.jsx)(v(),{href:n.url,target:n.options.newWindow?"_blank":"",children:(0,i.jsxs)("a",{className:S().nav__itemLink,children:[n.icon&&(0,i.jsx)(n.icon,{style:{marginRight:"0.5rem"}}),n.title]})})},n.url+n.title)})})]})}),(0,i.jsx)(C,{})]})},L=t(4204),T=t.n(L),W=function(){return(0,i.jsxs)(r(),{children:[(0,i.jsx)("meta",{charSet:"UTF-8"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,i.jsx)("meta",{name:"description",content:"Artem Shar | Web / Front-End / Fullstack Development"}),(0,i.jsx)("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.99em%22 font-size=%2280%22>☁️</text></svg>"}),(0,i.jsx)("title",{children:"Artem Shar | FE Development"})]})},D=function(e){var n=e.children,t=e.className,s=e.classNameMain,a=l(u.qm).theme.toLowerCase();return(0,i.jsxs)("div",{className:c()(T().wrapper,t,a),children:[(0,i.jsx)(W,{}),(0,i.jsx)(P,{}),(0,i.jsx)("main",{className:c()(T().main,s),children:n}),(0,i.jsx)(f,{})]})}},7935:function(e){e.exports={contacts__list:"Contacts_contacts__list__GBA6x",contacts__item:"Contacts_contacts__item__rSFNM",contacts__itemLink:"Contacts_contacts__itemLink__Z3aLd"}},2817:function(e){e.exports={themeSwitcher:"ThemeSwitcher_themeSwitcher__3ppfH",themeSwitcher__radio:"ThemeSwitcher_themeSwitcher__radio__Gbv0_",DARK:"ThemeSwitcher_DARK__ENafB",LIGHT:"ThemeSwitcher_LIGHT__kLVfZ"}},8694:function(e){e.exports={container:"Container_container__hLzfs",small:"Container_small__tns52"}},7320:function(e){e.exports={footer:"Footer_footer__LyqoE",column:"Footer_column__fIaab",title:"Footer_title__4_ybK"}},7908:function(e){e.exports={header:"Header_header__jtMDd",nav:"Header_nav__pEi2X",nav__list:"Header_nav__list___5Wm2",nav__item:"Header_nav__item__HFm1L",nav__item_active:"Header_nav__item_active__jkJ3n",nav__itemLink:"Header_nav__itemLink__eEwpk"}},4204:function(e){e.exports={wrapper:"Layout_wrapper__kfZ1l",main:"Layout_main__oc42n"}},9909:function(e){e.exports={PaceCalcSection:"PaceCalcSection_PaceCalcSection__GzdhV",title:"PaceCalcSection_title__0CAsg",fields:"PaceCalcSection_fields__qC1Cn",field:"PaceCalcSection_field__HoVXv",inputsGroup:"PaceCalcSection_inputsGroup__GyrIK",input_paceMinutes:"PaceCalcSection_input_paceMinutes__VF_mF",input_paceSeconds:"PaceCalcSection_input_paceSeconds__uOz9m",btns:"PaceCalcSection_btns__NKcx1",btnDistanceSamples:"PaceCalcSection_btnDistanceSamples__fxmoT",active:"PaceCalcSection_active__ggl9N",samplesLabel:"PaceCalcSection_samplesLabel__mU3vk"}}},function(e){e.O(0,[778,617,169,774,888,179],function(){return e(e.s=4445)}),_N_E=e.O()}]);