function e(){}function t(e){return e()}function s(){return Object.create(null)}function n(e){e.forEach(t)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function r(e,t,s,n){return e[1]&&n?function(e,t){for(const s in t)e[s]=t[s];return e}(s.ctx.slice(),e[1](n(t))):s.ctx}function i(e,t){e.appendChild(t)}function c(e,t,s){e.insertBefore(t,s||null)}function l(e){e.parentNode.removeChild(e)}function u(e,t){for(let s=0;s<e.length;s+=1)e[s]&&e[s].d(t)}function p(e){return document.createElement(e)}function m(e){return document.createTextNode(e)}function d(){return m(" ")}function h(e,t,s,n){return e.addEventListener(t,s,n),()=>e.removeEventListener(t,s,n)}function f(e,t,s){null==s?e.removeAttribute(t):e.getAttribute(t)!==s&&e.setAttribute(t,s)}function g(e,t){t=""+t,e.data!==t&&(e.data=t)}function w(e,t,s,n){e.style.setProperty(t,s,n?"important":"")}let b,y;function v(e,t){const s=getComputedStyle(e),n=(parseInt(s.zIndex)||0)-1;"static"===s.position&&(e.style.position="relative");const o=p("iframe");let a;return o.setAttribute("style",`display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: ${n};`),o.setAttribute("aria-hidden","true"),o.tabIndex=-1,!function(){if(void 0===b){b=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){b=!0}}return b}()?(o.src="about:blank",o.onload=()=>{a=h(o.contentWindow,"resize",t)}):(o.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",a=h(window,"message",e=>{e.source===o.contentWindow&&t()})),i(e,o),()=>{l(o),a&&a()}}function k(e,t,s){e.classList[s?"add":"remove"](t)}class ${constructor(e,t=null){this.e=p("div"),this.a=t,this.u(e)}m(e,t=null){for(let s=0;s<this.n.length;s+=1)c(e,this.n[s],t);this.t=e}u(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}p(e){this.d(),this.u(e),this.m(this.t,this.a)}d(){this.n.forEach(l)}}function x(e){y=e}const C=[],A=[],H=[],j=[],I=Promise.resolve();let M=!1;function z(e){H.push(e)}let F=!1;const L=new Set;function S(){if(!F){F=!0;do{for(let e=0;e<C.length;e+=1){const t=C[e];x(t),D(t.$$)}for(C.length=0;A.length;)A.pop()();for(let e=0;e<H.length;e+=1){const t=H[e];L.has(t)||(L.add(t),t())}H.length=0}while(C.length);for(;j.length;)j.pop()();M=!1,F=!1,L.clear()}}function D(e){if(null!==e.fragment){e.update(),n(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(z)}}const B=new Set;let E;function W(e,t){e&&e.i&&(B.delete(e),e.i(t))}function O(e,t,s,n){if(e&&e.o){if(B.has(e))return;B.add(e),E.c.push(()=>{B.delete(e),n&&(s&&e.d(1),n())}),e.o(t)}}function T(e){e&&e.c()}function N(e,s,a){const{fragment:r,on_mount:i,on_destroy:c,after_update:l}=e.$$;r&&r.m(s,a),z(()=>{const s=i.map(t).filter(o);c?c.push(...s):n(s),e.$$.on_mount=[]}),l.forEach(z)}function Y(e,t){const s=e.$$;null!==s.fragment&&(n(s.on_destroy),s.fragment&&s.fragment.d(t),s.on_destroy=s.fragment=null,s.ctx=[])}function P(e,t){-1===e.$$.dirty[0]&&(C.push(e),M||(M=!0,I.then(S)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function _(t,o,a,r,i,c,u=[-1]){const p=y;x(t);const m=o.props||{},d=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:i,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:s(),dirty:u};let h=!1;if(d.ctx=a?a(t,m,(e,s,...n)=>{const o=n.length?n[0]:s;return d.ctx&&i(d.ctx[e],d.ctx[e]=o)&&(d.bound[e]&&d.bound[e](o),h&&P(t,e)),s}):[],d.update(),h=!0,n(d.before_update),d.fragment=!!r&&r(d.ctx),o.target){if(o.hydrate){const e=function(e){return Array.from(e.childNodes)}(o.target);d.fragment&&d.fragment.l(e),e.forEach(l)}else d.fragment&&d.fragment.c();o.intro&&W(t.$$.fragment),N(t,o.target,o.anchor),S()}x(p)}class J{$destroy(){Y(this,1),this.$destroy=e}$on(e,t){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const e=s.indexOf(t);-1!==e&&s.splice(e,1)}}$set(){}}function R(e,t,s){const n=e.slice();return n[10]=t[s].name,n[11]=t[s].image,n[12]=t[s].description,n[13]=t[s].url,n[14]=t[s].date,n[15]=t[s].repo,n[16]=t[s].data,n[18]=s,n}function K(e){let t,s,n,o,a,r=e[11].includes(".webp"),u=r&&V(e);return{c(){t=p("picture"),u&&u.c(),s=d(),n=p("img"),n.src!==(o=e[11].replace(".webp",".png"))&&f(n,"src",o),f(n,"alt",a=e[10]),f(n,"class","svelte-tfzusa")},m(e,o){c(e,t,o),u&&u.m(t,null),i(t,s),i(t,n)},p(e,i){1&i&&(r=e[11].includes(".webp")),r?u?u.p(e,i):(u=V(e),u.c(),u.m(t,s)):u&&(u.d(1),u=null),1&i&&n.src!==(o=e[11].replace(".webp",".png"))&&f(n,"src",o),1&i&&a!==(a=e[10])&&f(n,"alt",a)},d(e){e&&l(t),u&&u.d()}}}function U(e){let t,s,n;return{c(){t=p("video"),s=p("source"),s.src!==(n=e[11])&&f(s,"src",n),t.autoplay=!0,t.playsInline=!0,t.muted=!0,t.loop=!0,f(t,"class","svelte-tfzusa")},m(e,n){c(e,t,n),i(t,s)},p(e,t){1&t&&s.src!==(n=e[11])&&f(s,"src",n)},d(e){e&&l(t)}}}function V(e){let t,s;return{c(){t=p("source"),f(t,"srcset",s=e[11]+" 1x"),f(t,"type","image/webp")},m(e,s){c(e,t,s)},p(e,n){1&n&&s!==(s=e[11]+" 1x")&&f(t,"srcset",s)},d(e){e&&l(t)}}}function X(e){let t,s,n=e[14]+"";return{c(){t=p("span"),s=m(n),f(t,"class","meta svelte-tfzusa")},m(e,n){c(e,t,n),i(t,s)},p(e,t){1&t&&n!==(n=e[14]+"")&&g(s,n)},d(e){e&&l(t)}}}function Q(e){let t,s,n,o;return{c(){t=p("span"),s=p("a"),n=m("[repo]"),f(s,"href",o="https://github.com/graphicsdesk/"+e[15]),f(s,"class","svelte-tfzusa"),f(t,"class","meta git svelte-tfzusa")},m(e,o){c(e,t,o),i(t,s),i(s,n)},p(e,t){1&t&&o!==(o="https://github.com/graphicsdesk/"+e[15])&&f(s,"href",o)},d(e){e&&l(t)}}}function Z(e){let t,s,n,o;return{c(){t=p("span"),s=p("a"),n=m("[data]"),f(s,"href",o="https://github.com/graphicsdesk/"+e[16]),f(s,"class","svelte-tfzusa"),f(t,"class","meta git svelte-tfzusa")},m(e,o){c(e,t,o),i(t,s),i(s,n)},p(e,t){1&t&&o!==(o="https://github.com/graphicsdesk/"+e[16])&&f(s,"href",o)},d(e){e&&l(t)}}}function G(e){let t,s,n=e[12]+"";return{c(){t=p("p"),s=m(n),f(t,"class","description svelte-tfzusa")},m(e,n){c(e,t,n),i(t,s)},p(e,t){1&t&&n!==(n=e[12]+"")&&g(s,n)},d(e){e&&l(t)}}}function q(e){let t,s,n,o,a,r,u,m,h,g,b,y,v,k=e[10]+"";function x(e,t){return(null==o||1&t)&&(o=!(!e[11].includes(".mp4")&&!e[11].includes(".mov"))),o?U:K}let C=x(e,-1),A=C(e),H=e[14]&&e[14].length>0&&X(e),j=e[15]&&Q(e),I=e[16]&&Z(e),M=e[12]&&G(e);return{c(){t=p("div"),s=p("a"),n=p("div"),A.c(),a=d(),r=p("p"),m=d(),H&&H.c(),g=d(),j&&j.c(),b=d(),I&&I.c(),y=d(),M&&M.c(),v=d(),f(n,"class","media svelte-tfzusa"),w(n,"height",Math.round(e[3])+"px"),u=new $(k,m),f(r,"class","svelte-tfzusa"),f(s,"href",h=e[13]),w(s,"color",e[5](e[18]))},m(e,o){c(e,t,o),i(t,s),i(s,n),A.m(n,null),i(s,a),i(s,r),u.m(r),i(r,m),H&&H.m(r,null),i(t,g),j&&j.m(t,null),i(t,b),I&&I.m(t,null),i(t,y),M&&M.m(t,null),i(t,v)},p(e,o){C===(C=x(e,o))&&A?A.p(e,o):(A.d(1),A=C(e),A&&(A.c(),A.m(n,null))),8&o&&w(n,"height",Math.round(e[3])+"px"),1&o&&k!==(k=e[10]+"")&&u.p(k),e[14]&&e[14].length>0?H?H.p(e,o):(H=X(e),H.c(),H.m(r,null)):H&&(H.d(1),H=null),1&o&&h!==(h=e[13])&&f(s,"href",h),e[15]?j?j.p(e,o):(j=Q(e),j.c(),j.m(t,b)):j&&(j.d(1),j=null),e[16]?I?I.p(e,o):(I=Z(e),I.c(),I.m(t,y)):I&&(I.d(1),I=null),e[12]?M?M.p(e,o):(M=G(e),M.c(),M.m(t,v)):M&&(M.d(1),M=null)},d(e){e&&l(t),A.d(),H&&H.d(),j&&j.d(),I&&I.d(),M&&M.d()}}}function ee(t){let s,n,o,a=t[0],r=[];for(let e=0;e<a.length;e+=1)r[e]=q(R(t,a,e));return{c(){s=p("div");for(let e=0;e<r.length;e+=1)r[e].c();f(s,"class","grid svelte-tfzusa"),f(s,"style",n="grid-template-columns: "+t[4]+"; column-gap: "+(t[1]>1?se:0)+"px;\n  "+(1===t[1]&&"text-align: center")),z(()=>t[9].call(s))},m(e,n){c(e,s,n);for(let e=0;e<r.length;e+=1)r[e].m(s,null);o=v(s,t[9].bind(s))},p(e,[t]){if(41&t){let n;for(a=e[0],n=0;n<a.length;n+=1){const o=R(e,a,n);r[n]?r[n].p(o,t):(r[n]=q(o),r[n].c(),r[n].m(s,null))}for(;n<r.length;n+=1)r[n].d(1);r.length=a.length}18&t&&n!==(n="grid-template-columns: "+e[4]+"; column-gap: "+(e[1]>1?se:0)+"px;\n  "+(1===e[1]&&"text-align: center"))&&f(s,"style",n)},i:e,o:e,d(e){e&&l(s),u(r,e),o()}}}let te=0;const se=18;function ne(e,t,s){let{projects:n}=t,{columns:o=3}=t,a=te;te+=n.length;const r=["#A32251","#0041FF","#1A1A57","#D91F25","#004F50","#EBAB3D"],i=500-100*o;let c,l,u;return e.$set=e=>{"projects"in e&&s(0,n=e.projects),"columns"in e&&s(1,o=e.columns)},e.$$.update=()=>{if(6&e.$$.dirty){let e=(c-se*(o-1))/o;e<i?(e=c,s(4,u="1fr")):e<i+100?(e=(c-1*se)/2,s(4,u="1fr 1fr")):s(4,u="1fr ".repeat(o)),s(3,l=e*(2/3))}},[n,o,c,l,u,e=>r[(a+e)%r.length],a,r,i,function(){c=this.clientWidth,s(2,c)}]}class oe extends J{constructor(e){super(),_(this,e,ne,ee,a,{projects:0,columns:1})}}function ae(e){let t;return{c(){t=p("hr"),f(t,"id",e[0]),f(t,"class","svelte-xoiyjb")},m(e,s){c(e,t,s)},p(e,s){1&s&&f(t,"id",e[0])},d(e){e&&l(t)}}}function re(e){let t,s,n;const o=e[5].default,a=function(e,t,s,n){if(e){const o=r(e,t,s,n);return e[0](o)}}(o,e,e[4],null);return{c(){t=p("p"),a&&a.c(),s=m(":"),f(t,"class","svelte-xoiyjb"),k(t,"centered",e[3])},m(e,o){c(e,t,o),a&&a.m(t,null),i(t,s),n=!0},p(e,s){a&&a.p&&16&s&&a.p(r(o,e,e[4],null),function(e,t,s,n){if(e[2]&&n){const o=e[2](n(s));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],s=Math.max(t.dirty.length,o.length);for(let n=0;n<s;n+=1)e[n]=t.dirty[n]|o[n];return e}return t.dirty|o}return t.dirty}(o,e[4],s,null)),8&s&&k(t,"centered",e[3])},i(e){n||(W(a,e),n=!0)},o(e){O(a,e),n=!1},d(e){e&&l(t),a&&a.d(e)}}}function ie(e){let t,s,o,a=!e[2]&&ae(e),r=!e[1]&&re(e);return{c(){a&&a.c(),t=d(),r&&r.c(),s=m("")},m(e,n){a&&a.m(e,n),c(e,t,n),r&&r.m(e,n),c(e,s,n),o=!0},p(e,[o]){e[2]?a&&(a.d(1),a=null):a?a.p(e,o):(a=ae(e),a.c(),a.m(t.parentNode,t)),e[1]?r&&(E={r:0,c:[],p:E},O(r,1,1,()=>{r=null}),E.r||n(E.c),E=E.p):r?(r.p(e,o),2&o&&W(r,1)):(r=re(e),r.c(),W(r,1),r.m(s.parentNode,s))},i(e){o||(W(r),o=!0)},o(e){O(r),o=!1},d(e){a&&a.d(e),e&&l(t),r&&r.d(e),e&&l(s)}}}function ce(e,t,s){let{id:n}=t,{empty:o=!1}=t,{hideHr:a=!1}=t,{centered:r=!1}=t,{$$slots:i={},$$scope:c}=t;return e.$set=e=>{"id"in e&&s(0,n=e.id),"empty"in e&&s(1,o=e.empty),"hideHr"in e&&s(2,a=e.hideHr),"centered"in e&&s(3,r=e.centered),"$$scope"in e&&s(4,c=e.$$scope)},[n,o,a,r,c,i]}class le extends J{constructor(e){super(),_(this,e,ce,ie,a,{id:0,empty:1,hideHr:2,centered:3})}}var ue={topLevel:[{name:"International students struggle to learn across time zones as COVID-19 keeps them out of New York City",image:"images/timezone.gif",repo:"timezones-spectate",data:"timezone-data",url:"https://www.columbiaspectator.com/news/2021/03/08/international-students-struggle-to-learn-across-time-zones-as-covid-19-keeps-them-out-of-new-york-city/"},{name:"When restaurants struggle to survive, what does it mean for the community?",image:"videos/steph.mov",repo:"restaurant-table-spectate",url:"https://www.columbiaspectator.com/photo-essays/2021/01/21/when-restaurants-struggle-to-survive-what-does-it-mean-for-the-community/"},{name:"The ‘inescapable’ effect of off-campus athletics: How the distance to Baker has shaped Columbia’s recruiting, performance, and sports culture",image:"videos/steph.mov",repo:"off-campus-athletics",url:"https://www.columbiaspectator.com/sports/2020/12/09/the-inescapable-effect-of-off-campus-athletics-how-the-distance-to-baker-has-shaped-columbias-recruiting-performance-and-sports-culture/"},{name:"As COVID-19 cases rise, so does food insecurity among the homeless. Can food providers and shelters keep up?",image:"videos/steph.mov",repo:"food-insecurity",data:"covid-food-insecurity",url:"https://www.columbiaspectator.com/news/2020/11/30/as-covid-19-cases-rise-so-does-food-insecurity-among-the-homeless-can-food-providers-and-shelters-keep-up/"},{name:"Hotly contested city council race draws deep-pocket support from housing industry",image:"videos/steph.mov",repo:"cd7-election-contributions",url:"https://www.columbiaspectator.com/news/2020/11/17/hotly-contested-city-council-race-draws-deep-pocket-support-from-housing-industry/"},{name:"For Athletes, Career Networks Unlock a World of Opportunity in Finance and Consulting",image:"videos/steph.mov",repo:"athlete-tracking-employment",url:"https://www.columbiaspectator.com/the-eye/2020/11/14/for-athletes-career-networks-unlock-a-world-of-opportunity-in-finance-and-consulting/"},{name:"Columbia canceled housing contracts, so 14,000 students moved into the city. What does this mean for the local housing market?",image:"videos/steph.mov",url:"https://www.columbiaspectator.com/news/2020/11/11/columbia-canceled-housing-contracts-so-14000-students-moved-into-the-city-what-does-this-mean-for-the-local-housing-market/"},{name:"Columbia affiliates donated far more to Biden, but Trump fares better than in 2016",image:"videos/steph.mov",data:"2020-campaign-contributions",url:"https://www.columbiaspectator.com/news/2020/11/06/columbia-affiliates-donated-far-more-to-biden-but-trump-fares-better-than-in-2016/"},{name:"Broken windows policing and gentrification not only harmed the Black community, but also strengthened Columbia’s reputation",image:"videos/steph.mov",repo:"policing-history",data:"property-acquisition",url:"https://www.columbiaspectator.com/news/2020/10/05/broken-windows-policing-and-gentrification-not-only-harmed-the-black-community-but-also-strengthened-columbias-reputation/"},{name:"Columbia wants the best and the brightest students. To keep up with top-ranked schools, it needs the richest too.",image:"https://i.imgur.com/gIjcnke.png",repo:"recession-financial-aid",data:"socioeconomic-diversity",url:"https://www.columbiaspectator.com/news/2020/05/24/columbia-wants-the-best-and-the-brightest-students-to-keep-up-with-top-ranked-schools-it-needs-the-richest-too-2/"},{name:'Uncertainty Looms as Student Jobs are Disappearing During the Great Lockdown <a href="https://pudding.cool/process/pudding-cup-2020/">🏆</a>',repo:"job-loss",image:"https://cloudfront-us-east-1.images.arcpublishing.com/spectator/MJQEFP4WVNASVES4BCIJCHKZKM.gif",url:"https://www.columbiaspectator.com/eye-lead/2020/05/15/uncertainty-looms-as-student-jobs-are-disappearing-during-the-great-lockdown/"},{name:"The U.S. and Ivy League schools were late to respond to COVID-19. Data shows international universities did better.",repo:"ivy-coronavirus-response",data:"covid-cases",image:"https://cloudfront-us-east-1.images.arcpublishing.com/spectator/Q4S24TEP2ZFTNH6P245MIKDQYY.gif",url:"https://www.columbiaspectator.com/news/2020/04/13/the-us-and-ivy-league-schools-were-late-to-respond-to-covid-19-data-shows-international-universities-did-better/"},{name:"Columbia tuition rates are among the highest in the country. Is it worth it?",repo:"earnings",data:"earnings-debt-2019",url:"https://www.columbiaspectator.com/news/2020/01/23/columbia-tuition-rates-are-among-the-highest-in-the-country-is-it-worth-it/",image:"https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/B6WTQOBD75DAPIBQARQWYNJORM.png"},{name:"Segregation exposes Black residents to health risks. Hospitals are disincentivized from treating them.",repo:"low-income-hospitals",data:"hospital-data",url:"https://www.columbiaspectator.com/news/2020/04/18/segregation-exposes-black-residents-to-health-risks-hospitals-are-disincentivized-from-treating-them/",image:"https://cloudfront-us-east-1.images.arcpublishing.com/spectator/57HU2DWODRH55JW4RA35TKNI6A.gif"},{name:"West Harlem residents fall under the most at risk groups for contracting COVID. High poverty rates will make recovery an uphill battle.",repo:"covid-healthcare",url:"https://www.columbiaspectator.com/news/2020/04/13/west-harlem-residents-fall-under-the-most-at-risk-groups-for-contracting-covid-high-poverty-rates-will-make-recovery-an-uphill-battle/",image:"https://cloudfront-us-east-1.images.arcpublishing.com/spectator/UPO4WWVNY5FOZORE2JULYXGOCQ.png"},{name:"[100 words] We asked how COVID-19 has impacted student’s lives. Here are their responses.",repo:"100-words",url:"https://www.columbiaspectator.com/opinion/2020/03/29/100-words-we-asked-how-covid-19-has-impacted-students-lives-here-are-their-responses/",image:"https://cloudfront-us-east-1.images.arcpublishing.com/spectator/ZCN6RYEPTFBF3PFXIYW4KESQRM.gif"},{name:"Community members see long-awaited safety improvements to Morningside Park in aftermath of Majors’ death",repo:"park-lights",url:"https://www.columbiaspectator.com/news/2020/01/30/community-members-see-long-awaited-safety-improvements-to-morningside-park-in-aftermath-of-majors-death/",image:"https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/UYJHXMLRP5BY3LZKKQHK6R4M5Y.png"},{name:"As Majors’ case awaits trial, experts say public urgency has led to unfair treatment of youth suspects",repo:"suspects-disparity",url:"https://www.columbiaspectator.com/news/2020/03/25/as-majors-case-awaits-trial-experts-say-public-urgency-has-led-to-unfair-treatment-of-youth-suspects/",image:"https://cloudfront-us-east-1.images.arcpublishing.com/spectator/FSXAG5N75NAIRG5ULL3MUYAK7M.png"},{name:"‘The next chapter’: Despite history of alumni apathy, Bollinger-era initiatives drive newfound culture of engagement",repo:"giving-day",url:"https://www.columbiaspectator.com/news/2019/10/31/the-next-chapter-despite-history-of-alumni-apathy-bollinger-era-initiatives-drive-newfound-culture-of-engagement/",image:"https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/4E3VGN4BF5HT5EHHDZEI45DCSQ.png"},{name:"As the pandemic rages on, Columbia braces for widespread financial fallout",url:"https://www.columbiaspectator.com/news/2020/04/16/as-the-pandemic-rages-on-columbia-braces-for-widespread-financial-fallout/",image:"https://i.imgur.com/cRmY2zZ.png"},{name:"Students and Faculty Say Gender-Based Harassment and Discrimination at Columbia is Systemic. Why Are They Turning Away From the System Built to Address It?",repo:"eoaa",url:"https://www.columbiaspectator.com/eye-lead/2019/11/15/students-and-faculty-say-gender-based-harassment-and-discrimination-at-columbia-is-systemic-why-are-they-turning-away-from-the-system-built-to-address-it/",image:"https://cloudfront-us-east-1.images.arcpublishing.com/spectator/HPXEFBF3GFDEXDVPMCSOVHYSSI.gif"},{name:"A space built for the community, the Forum remains inaccessible to local residents",url:"https://www.columbiaspectator.com/news/2020/02/06/the-forums-design-prevents-west-harlem-residents-from-occupying-a-space-built-for-the-community/",image:"https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/OC4QIMFHRNCX5FETN4XJAJXM4Q.png"},{name:"With classroom space shortage, Morningside Heights campus forced to expand boundaries",repo:"class-space-fall19",url:"https://www.columbiaspectator.com/news/2019/09/19/with-classroom-space-shortage-morningside-heights-campus-forced-to-expand-boundaries/",image:"https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/ENIHZBUWZFHKLMDXHYROLMOY2I.jpg"},{name:"“Landlords are waiting to pounce”: COVID-19 casts grim future for renters confronted by wave of evictions",url:"https://www.columbiaspectator.com/news/2020/04/28/landlords-are-waiting-to-pounce-covid-19-casts-grim-future-for-renters-confronted-by-wave-of-evictions/",image:"https://cloudfront-us-east-1.images.arcpublishing.com/spectator/REEM6K5BFVHYDA2N23KIL3Y4PU.png"},{name:"Over a fourth of West Harlem did not self-report in the 2010 census. COVID-19 could make numbers worse.",repo:"census-self-response",url:"https://www.columbiaspectator.com/news/2020/04/02/over-a-fourth-of-west-harlem-was-not-self-reported-in-the-2010-census-covid-19-could-make-numbers-worse/",image:"https://cloudfront-us-east-1.images.arcpublishing.com/spectator/7V7J6OIRAFFX7AK2ZU4ZFUP6AQ.png"},{name:"“They don’t follow the rules”: Inside Barnard’s broken relationship with its employee union",url:"https://www.columbiaspectator.com/news/2019/10/17/they-dont-follow-the-rules-inside-barnards-broken-relationship-with-its-employee-union/",image:"https://i.imgur.com/r2JsuXc.png"},{name:"Stacking up: Where do Columbia’s contributions to the community rank among its Ivy peers?",url:"https://www.columbiaspectator.com/news/2019/10/24/stacking-up-where-do-columbias-contributions-to-the-community-rank-among-its-ivy-peers/",image:"https://i.imgur.com/wLqhbyM.png"},{name:"Who are Columbia affiliates backing in 2020? Campaign donation data shows Booker in the lead.",repo:"political-candidates",url:"https://www.columbiaspectator.com/news/2019/11/23/who-are-columbia-affiliates-backing-in-2020-campaign-donation-data-shows-booker-in-the-lead-2/",image:"https://i.imgur.com/rhFFwvJ.png"},{name:"Surveying the Class of 2023",url:"https://github.com/graphicsdesk/survey-2023-print",image:"https://raw.githubusercontent.com/spec-journalism/survey-2023-print/master/ai/map.jpg"},{name:"Decades of Uncertainty: A visual history of the linguistics major through the Spec archives",repo:"linguistics-major",image:"https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/6FWL3IYTB5BLNBDFH5XBXT5JHQ.jpg",url:"https://www.columbiaspectator.com/news/2019/10/18/linguistics-major-visual-history/"},{name:"Sex Diversity Among Graduate Students Is Stagnating",repo:"graduate-sex-diversity",data:"gss-diversity",image:"https://jasonkao.me/images/graduate-sex-diversity.mp4",url:"https://www.columbiaspectator.com/eye-lead/2019/05/04/in-certain-science-and-engineering-fields-sex-diversity-among-graduate-students-is-stagnating-in-others-its-getting-worse/"}],secondLevel:[{name:"More of our Spec work at <code>@graphicsdesk</code>",image:"images/spec.webp",url:"https://github.com/graphicsdesk"}],people:[["Hong Sen Du","hongsendude","HongSenDu"],["Mike Fu",null,"haohaom1"],["Stephanie Lai","stephaniealai"],["Charlotte Li","shallotly","shallotly"],["Jason Kao","jsonkao","jsonkao"],["Jessica Li","heyjessicali","heyjessicali"],["Ivana Moore",null,"ivanamoore"],["Kelly Pu",null,"kelp1470"],["Raeedah Wahid","raeedahwahid","raeedahw"],["Jun Yi Zhang","jenny_jyzhang","jennyjyzhang"],["Andrew Park",null,"apark2020"],["Deborah Cesarini",null,"deborahcesarini2"],["Elizabeth Commisso",null,"ecommisso"],["Ellen Guo",null,"ellenguo"],["Jefferson Sheng",null,"jsheng37"],["Melissa “The Cursor” Wang",null,"mel-wang-wang"],["Michelle Xu",null,"michellexu23"]]};function pe(e,t,s){const n=e.slice();return n[2]=t[s].link,n[3]=t[s].name,n[4]=t[s].twitter,n[5]=t[s].git,n}function me(e){let t;return{c(){t=m("Our people")},m(e,s){c(e,t,s)},d(e){e&&l(t)}}}function de(t){let s,n,o,a,r,u,h,g,w,b=t[3]+"",y=t[4]&&function(t){let s,n,o;return{c(){s=p("a"),n=m("[tw]"),f(s,"class","twitter svelte-19tea9f"),f(s,"href",o="https://twitter.com/"+t[4]),f(s,"target","_blank"),f(s,"rel","noopener noreferrer")},m(e,t){c(e,s,t),i(s,n)},p:e,d(e){e&&l(s)}}}(t),v=t[5]&&function(t){let s,n,o;return{c(){s=p("a"),n=m("[gh]"),f(s,"class","twitter svelte-19tea9f"),f(s,"href",o="https://github.com/"+t[5]),f(s,"target","_blank"),f(s,"rel","noopener noreferrer")},m(e,t){c(e,s,t),i(s,n)},p:e,d(e){e&&l(s)}}}(t);return{c(){s=p("li"),n=p("p"),o=p("a"),a=m(b),u=d(),h=p("span"),y&&y.c(),g=d(),v&&v.c(),w=d(),f(o,"href",r=t[2]),f(o,"target","_blank"),f(o,"rel","noopener noreferrer"),f(n,"class","svelte-19tea9f")},m(e,t){c(e,s,t),i(s,n),i(n,o),i(o,a),i(n,u),i(n,h),y&&y.m(h,null),i(h,g),v&&v.m(h,null),i(s,w)},p(e,t){e[4]&&y.p(e,t),e[5]&&v.p(e,t)},d(e){e&&l(s),y&&y.d(),v&&v.d()}}}function he(e){let t,s,n,o,a,r,m,h,g,b,y,v,$,x,C,A,H;const j=new oe({props:{projects:e[0].topLevel}}),I=new oe({props:{projects:e[0].secondLevel,columns:1}}),M=new le({props:{id:"people",$$slots:{default:[me]},$$scope:{ctx:e}}});let z=e[1],F=[];for(let t=0;t<z.length;t+=1)F[t]=de(pe(e,z,t));const L=new le({props:{empty:!0}});return{c(){t=p("main"),s=p("header"),s.innerHTML='<div class="svelte-19tea9f"><p><b>Spectator Graphics</b></p></div> \n    <div class="svelte-19tea9f"><p>Homepage.</p> \n      <p class="gray svelte-19tea9f"><a href="#people" class="svelte-19tea9f">People.</a></p></div>',n=d(),o=p("p"),o.textContent="A homepage for our open-source graphics, data, analysis and tools.",a=d(),r=p("div"),r.innerHTML='<p class="svelte-19tea9f"><b class="svelte-19tea9f">We’re also on GitHub:</b> \n      <a href="https://github.com/graphicsdesk" class="svelte-19tea9f">github.com/graphicsdesk</a></p>',m=d(),T(j.$$.fragment),h=d(),T(I.$$.fragment),g=d(),b=p("footer"),T(M.$$.fragment),y=d(),v=p("div"),$=p("ul");for(let e=0;e<F.length;e+=1)F[e].c();x=d(),T(L.$$.fragment),C=d(),A=p("p"),A.innerHTML='Updated May 2020. <span style="text-transform: none;">\n      You are welcome to use this code/design for your own website under the <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.</span>',f(s,"class","svelte-19tea9f"),f(o,"class","nutgraf svelte-19tea9f"),f(r,"class","nutgraf contact svelte-19tea9f"),k(r,"contactFocused",fe),f(v,"class","buzzwords svelte-19tea9f"),f(A,"class","updated-text svelte-19tea9f"),f(b,"class","svelte-19tea9f"),w(t,"max-width","1200px"),f(t,"class","svelte-19tea9f")},m(e,l){c(e,t,l),i(t,s),i(t,n),i(t,o),i(t,a),i(t,r),i(t,m),N(j,t,null),i(t,h),N(I,t,null),i(t,g),i(t,b),N(M,b,null),i(b,y),i(b,v),i(v,$);for(let e=0;e<F.length;e+=1)F[e].m($,null);i(b,x),N(L,b,null),i(b,C),i(b,A),H=!0},p(e,[t]){0&t&&k(r,"contactFocused",fe);const s={};1&t&&(s.projects=e[0].topLevel),j.$set(s);const n={};1&t&&(n.projects=e[0].secondLevel),I.$set(n);const o={};if(256&t&&(o.$$scope={dirty:t,ctx:e}),M.$set(o),2&t){let s;for(z=e[1],s=0;s<z.length;s+=1){const n=pe(e,z,s);F[s]?F[s].p(n,t):(F[s]=de(n),F[s].c(),F[s].m($,null))}for(;s<F.length;s+=1)F[s].d(1);F.length=z.length}},i(e){H||(W(j.$$.fragment,e),W(I.$$.fragment,e),W(M.$$.fragment,e),W(L.$$.fragment,e),H=!0)},o(e){O(j.$$.fragment,e),O(I.$$.fragment,e),O(M.$$.fragment,e),O(L.$$.fragment,e),H=!1},d(e){e&&l(t),Y(j),Y(I),Y(M),u(F,e),Y(L)}}}let fe=!1;function ge(e,t,s){const n=ue.people.map(e=>{let t,s,n=e;return Array.isArray(e)&&(n=e[0],t=e[1],s=e[2]),{name:n,link:"https://www.columbiaspectator.com/contributors/"+n.replace(/“.*” /,"").replace(/\s/g,"-"),twitter:t,git:s}}).sort((e,t)=>e.name>t.name?1:-1);return ue.topLevel=ue.topLevel.map(({url:e,...t})=>({...t,url:e,date:(e.match(/20\d{2}\/\d{2}\/\d{2}/)||[""])[0].replace(/\//g,"-")})),[ue,n]}class we extends J{constructor(e){super(),_(this,e,ge,he,a,{})}}export default function(){"scrollBehavior"in document.documentElement.style||import("./index-c33412cb.js").then(),new we({target:document.body})}
//# sourceMappingURL=main.js.map
