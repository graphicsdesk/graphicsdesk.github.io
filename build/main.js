function e(){}function t(e){return e()}function n(){return Object.create(null)}function s(e){e.forEach(t)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function r(e,t,n,s){return e[1]&&s?function(e,t){for(const n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](s(t))):n.ctx}function i(e,t){e.appendChild(t)}function c(e,t,n){e.insertBefore(t,n||null)}function l(e){e.parentNode.removeChild(e)}function u(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function p(e){return document.createElement(e)}function m(e){return document.createTextNode(e)}function d(){return m(" ")}function h(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function f(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function g(e,t){t=""+t,e.data!==t&&(e.data=t)}function w(e,t,n,s){e.style.setProperty(t,n,s?"important":"")}let b,y;function v(e,t){const n=getComputedStyle(e),s=(parseInt(n.zIndex)||0)-1;"static"===n.position&&(e.style.position="relative");const o=p("iframe");let a;return o.setAttribute("style",`display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: ${s};`),o.setAttribute("aria-hidden","true"),o.tabIndex=-1,!function(){if(void 0===b){b=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){b=!0}}return b}()?(o.src="about:blank",o.onload=()=>{a=h(o.contentWindow,"resize",t)}):(o.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",a=h(window,"message",e=>{e.source===o.contentWindow&&t()})),i(e,o),()=>{l(o),a&&a()}}function $(e,t,n){e.classList[n?"add":"remove"](t)}class k{constructor(e,t=null){this.e=p("div"),this.a=t,this.u(e)}m(e,t=null){for(let n=0;n<this.n.length;n+=1)c(e,this.n[n],t);this.t=e}u(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}p(e){this.d(),this.u(e),this.m(this.t,this.a)}d(){this.n.forEach(l)}}function x(e){y=e}const H=[],A=[],j=[],C=[],M=Promise.resolve();let F=!1;function L(e){j.push(e)}let I=!1;const S=new Set;function D(){if(!I){I=!0;do{for(let e=0;e<H.length;e+=1){const t=H[e];x(t),z(t.$$)}for(H.length=0;A.length;)A.pop()();for(let e=0;e<j.length;e+=1){const t=j[e];S.has(t)||(S.add(t),t())}j.length=0}while(H.length);for(;C.length;)C.pop()();F=!1,I=!1,S.clear()}}function z(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(L)}}const B=new Set;let E;function W(e,t){e&&e.i&&(B.delete(e),e.i(t))}function O(e,t,n,s){if(e&&e.o){if(B.has(e))return;B.add(e),E.c.push(()=>{B.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}}function T(e){e&&e.c()}function N(e,n,a){const{fragment:r,on_mount:i,on_destroy:c,after_update:l}=e.$$;r&&r.m(n,a),L(()=>{const n=i.map(t).filter(o);c?c.push(...n):s(n),e.$$.on_mount=[]}),l.forEach(L)}function Y(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function P(e,t){-1===e.$$.dirty[0]&&(H.push(e),F||(F=!0,M.then(D)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function _(t,o,a,r,i,c,u=[-1]){const p=y;x(t);const m=o.props||{},d=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:n(),dirty:u};let h=!1;if(d.ctx=a?a(t,m,(e,n,...s)=>{const o=s.length?s[0]:n;return d.ctx&&i(d.ctx[e],d.ctx[e]=o)&&(d.bound[e]&&d.bound[e](o),h&&P(t,e)),n}):[],d.update(),h=!0,s(d.before_update),d.fragment=!!r&&r(d.ctx),o.target){if(o.hydrate){const e=function(e){return Array.from(e.childNodes)}(o.target);d.fragment&&d.fragment.l(e),e.forEach(l)}else d.fragment&&d.fragment.c();o.intro&&W(t.$$.fragment),N(t,o.target,o.anchor),D()}x(p)}class J{$destroy(){Y(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function R(e,t,n){const s=e.slice();return s[10]=t[n].name,s[11]=t[n].image,s[12]=t[n].description,s[13]=t[n].url,s[14]=t[n].date,s[15]=t[n].repo,s[16]=t[n].data,s[18]=n,s}function K(e){let t,n,s,o,a,r=e[11].includes(".webp"),u=r&&X(e);return{c(){t=p("picture"),u&&u.c(),n=d(),s=p("img"),s.src!==(o=e[11].replace(".webp",".png"))&&f(s,"src",o),f(s,"alt",a=e[10]),f(s,"class","svelte-tfzusa")},m(e,o){c(e,t,o),u&&u.m(t,null),i(t,n),i(t,s)},p(e,i){1&i&&(r=e[11].includes(".webp")),r?u?u.p(e,i):(u=X(e),u.c(),u.m(t,n)):u&&(u.d(1),u=null),1&i&&s.src!==(o=e[11].replace(".webp",".png"))&&f(s,"src",o),1&i&&a!==(a=e[10])&&f(s,"alt",a)},d(e){e&&l(t),u&&u.d()}}}function U(e){let t,n,s;return{c(){t=p("video"),n=p("source"),n.src!==(s=e[11])&&f(n,"src",s),t.autoplay=!0,t.playsInline=!0,t.muted=!0,t.loop=!0,f(t,"class","svelte-tfzusa")},m(e,s){c(e,t,s),i(t,n)},p(e,t){1&t&&n.src!==(s=e[11])&&f(n,"src",s)},d(e){e&&l(t)}}}function X(e){let t,n;return{c(){t=p("source"),f(t,"srcset",n=e[11]+" 1x"),f(t,"type","image/webp")},m(e,n){c(e,t,n)},p(e,s){1&s&&n!==(n=e[11]+" 1x")&&f(t,"srcset",n)},d(e){e&&l(t)}}}function Q(e){let t,n,s=e[14]+"";return{c(){t=p("span"),n=m(s),f(t,"class","meta svelte-tfzusa")},m(e,s){c(e,t,s),i(t,n)},p(e,t){1&t&&s!==(s=e[14]+"")&&g(n,s)},d(e){e&&l(t)}}}function V(e){let t,n,s,o;return{c(){t=p("span"),n=p("a"),s=m("[repo]"),f(n,"href",o="https://github.com/graphicsdesk/"+e[15]),f(n,"class","svelte-tfzusa"),f(t,"class","meta git svelte-tfzusa")},m(e,o){c(e,t,o),i(t,n),i(n,s)},p(e,t){1&t&&o!==(o="https://github.com/graphicsdesk/"+e[15])&&f(n,"href",o)},d(e){e&&l(t)}}}function Z(e){let t,n,s,o;return{c(){t=p("span"),n=p("a"),s=m("[data]"),f(n,"href",o="https://github.com/graphicsdesk/"+e[16]),f(n,"class","svelte-tfzusa"),f(t,"class","meta git svelte-tfzusa")},m(e,o){c(e,t,o),i(t,n),i(n,s)},p(e,t){1&t&&o!==(o="https://github.com/graphicsdesk/"+e[16])&&f(n,"href",o)},d(e){e&&l(t)}}}function G(e){let t,n,s=e[12]+"";return{c(){t=p("p"),n=m(s),f(t,"class","description svelte-tfzusa")},m(e,s){c(e,t,s),i(t,n)},p(e,t){1&t&&s!==(s=e[12]+"")&&g(n,s)},d(e){e&&l(t)}}}function q(e){let t,n,s,o,a,r,u,m,h,g,b,y,v,$=e[10]+"";function x(e,t){return(null==o||1&t)&&(o=!(!e[11].includes(".mp4")&&!e[11].includes(".mov"))),o?U:K}let H=x(e,-1),A=H(e),j=e[14]&&e[14].length>0&&Q(e),C=e[15]&&V(e),M=e[16]&&Z(e),F=e[12]&&G(e);return{c(){t=p("div"),n=p("a"),s=p("div"),A.c(),a=d(),r=p("p"),m=d(),j&&j.c(),g=d(),C&&C.c(),b=d(),M&&M.c(),y=d(),F&&F.c(),v=d(),f(s,"class","media svelte-tfzusa"),w(s,"height",Math.round(e[3])+"px"),u=new k($,m),f(r,"class","svelte-tfzusa"),f(n,"href",h=e[13]),w(n,"color",e[5](e[18]))},m(e,o){c(e,t,o),i(t,n),i(n,s),A.m(s,null),i(n,a),i(n,r),u.m(r),i(r,m),j&&j.m(r,null),i(t,g),C&&C.m(t,null),i(t,b),M&&M.m(t,null),i(t,y),F&&F.m(t,null),i(t,v)},p(e,o){H===(H=x(e,o))&&A?A.p(e,o):(A.d(1),A=H(e),A&&(A.c(),A.m(s,null))),8&o&&w(s,"height",Math.round(e[3])+"px"),1&o&&$!==($=e[10]+"")&&u.p($),e[14]&&e[14].length>0?j?j.p(e,o):(j=Q(e),j.c(),j.m(r,null)):j&&(j.d(1),j=null),1&o&&h!==(h=e[13])&&f(n,"href",h),e[15]?C?C.p(e,o):(C=V(e),C.c(),C.m(t,b)):C&&(C.d(1),C=null),e[16]?M?M.p(e,o):(M=Z(e),M.c(),M.m(t,y)):M&&(M.d(1),M=null),e[12]?F?F.p(e,o):(F=G(e),F.c(),F.m(t,v)):F&&(F.d(1),F=null)},d(e){e&&l(t),A.d(),j&&j.d(),C&&C.d(),M&&M.d(),F&&F.d()}}}function ee(t){let n,s,o,a=t[0],r=[];for(let e=0;e<a.length;e+=1)r[e]=q(R(t,a,e));return{c(){n=p("div");for(let e=0;e<r.length;e+=1)r[e].c();f(n,"class","grid svelte-tfzusa"),f(n,"style",s="grid-template-columns: "+t[4]+"; column-gap: "+(t[1]>1?ne:0)+"px;\n  "+(1===t[1]&&"text-align: center")),L(()=>t[9].call(n))},m(e,s){c(e,n,s);for(let e=0;e<r.length;e+=1)r[e].m(n,null);o=v(n,t[9].bind(n))},p(e,[t]){if(41&t){let s;for(a=e[0],s=0;s<a.length;s+=1){const o=R(e,a,s);r[s]?r[s].p(o,t):(r[s]=q(o),r[s].c(),r[s].m(n,null))}for(;s<r.length;s+=1)r[s].d(1);r.length=a.length}18&t&&s!==(s="grid-template-columns: "+e[4]+"; column-gap: "+(e[1]>1?ne:0)+"px;\n  "+(1===e[1]&&"text-align: center"))&&f(n,"style",s)},i:e,o:e,d(e){e&&l(n),u(r,e),o()}}}let te=0;const ne=18;function se(e,t,n){let{projects:s}=t,{columns:o=3}=t,a=te;te+=s.length;const r=["#A32251","#0041FF","#1A1A57","#D91F25","#004F50","#EBAB3D"],i=500-100*o;let c,l,u;return e.$set=e=>{"projects"in e&&n(0,s=e.projects),"columns"in e&&n(1,o=e.columns)},e.$$.update=()=>{if(6&e.$$.dirty){let e=(c-ne*(o-1))/o;e<i?(e=c,n(4,u="1fr")):e<i+100?(e=(c-1*ne)/2,n(4,u="1fr 1fr")):n(4,u="1fr ".repeat(o)),n(3,l=e*(2/3))}},[s,o,c,l,u,e=>r[(a+e)%r.length],a,r,i,function(){c=this.clientWidth,n(2,c)}]}class oe extends J{constructor(e){super(),_(this,e,se,ee,a,{projects:0,columns:1})}}function ae(e){let t;return{c(){t=p("hr"),f(t,"id",e[0]),f(t,"class","svelte-xoiyjb")},m(e,n){c(e,t,n)},p(e,n){1&n&&f(t,"id",e[0])},d(e){e&&l(t)}}}function re(e){let t,n,s;const o=e[5].default,a=function(e,t,n,s){if(e){const o=r(e,t,n,s);return e[0](o)}}(o,e,e[4],null);return{c(){t=p("p"),a&&a.c(),n=m(":"),f(t,"class","svelte-xoiyjb"),$(t,"centered",e[3])},m(e,o){c(e,t,o),a&&a.m(t,null),i(t,n),s=!0},p(e,n){a&&a.p&&16&n&&a.p(r(o,e,e[4],null),function(e,t,n,s){if(e[2]&&s){const o=e[2](s(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let s=0;s<n;s+=1)e[s]=t.dirty[s]|o[s];return e}return t.dirty|o}return t.dirty}(o,e[4],n,null)),8&n&&$(t,"centered",e[3])},i(e){s||(W(a,e),s=!0)},o(e){O(a,e),s=!1},d(e){e&&l(t),a&&a.d(e)}}}function ie(e){let t,n,o,a=!e[2]&&ae(e),r=!e[1]&&re(e);return{c(){a&&a.c(),t=d(),r&&r.c(),n=m("")},m(e,s){a&&a.m(e,s),c(e,t,s),r&&r.m(e,s),c(e,n,s),o=!0},p(e,[o]){e[2]?a&&(a.d(1),a=null):a?a.p(e,o):(a=ae(e),a.c(),a.m(t.parentNode,t)),e[1]?r&&(E={r:0,c:[],p:E},O(r,1,1,()=>{r=null}),E.r||s(E.c),E=E.p):r?(r.p(e,o),2&o&&W(r,1)):(r=re(e),r.c(),W(r,1),r.m(n.parentNode,n))},i(e){o||(W(r),o=!0)},o(e){O(r),o=!1},d(e){a&&a.d(e),e&&l(t),r&&r.d(e),e&&l(n)}}}function ce(e,t,n){let{id:s}=t,{empty:o=!1}=t,{hideHr:a=!1}=t,{centered:r=!1}=t,{$$slots:i={},$$scope:c}=t;return e.$set=e=>{"id"in e&&n(0,s=e.id),"empty"in e&&n(1,o=e.empty),"hideHr"in e&&n(2,a=e.hideHr),"centered"in e&&n(3,r=e.centered),"$$scope"in e&&n(4,c=e.$$scope)},[s,o,a,r,c,i]}class le extends J{constructor(e){super(),_(this,e,ce,ie,a,{id:0,empty:1,hideHr:2,centered:3})}}var ue={topLevel:[{name:"The ‘inescapable’ effect of off-campus athletics: How the distance to Baker has shaped Columbia’s recruiting, performance, and sports culture",image:"videos/steph.mov",repo:"off-campus-athletics",url:"https://www.columbiaspectator.com/sports/2020/12/09/the-inescapable-effect-of-off-campus-athletics-how-the-distance-to-baker-has-shaped-columbias-recruiting-performance-and-sports-culture/"},{name:"As COVID-19 cases rise, so does food insecurity among the homeless. Can food providers and shelters keep up?",image:"videos/steph.mov",repo:"food-insecurity",data:"covid-food-insecurity",url:"https://www.columbiaspectator.com/news/2020/11/30/as-covid-19-cases-rise-so-does-food-insecurity-among-the-homeless-can-food-providers-and-shelters-keep-up/"},{name:"Hotly contested city council race draws deep-pocket support from housing industry",image:"videos/steph.mov",repo:"cd7-election-contributions",url:"https://www.columbiaspectator.com/news/2020/11/17/hotly-contested-city-council-race-draws-deep-pocket-support-from-housing-industry/"},{name:"For Athletes, Career Networks Unlock a World of Opportunity in Finance and Consulting",image:"videos/steph.mov",repo:"athlete-tracking-employment",url:"https://www.columbiaspectator.com/the-eye/2020/11/14/for-athletes-career-networks-unlock-a-world-of-opportunity-in-finance-and-consulting/"},{name:"Broken windows policing and gentrification not only harmed the Black community, but also strengthened Columbia’s reputation",image:"videos/steph.mov",repo:"policing-history",data:"property-acquisition",url:"https://www.columbiaspectator.com/news/2020/10/05/broken-windows-policing-and-gentrification-not-only-harmed-the-black-community-but-also-strengthened-columbias-reputation/"},{name:"Columbia wants the best and the brightest students. To keep up with top-ranked schools, it needs the richest too.",image:"https://i.imgur.com/gIjcnke.png",repo:"recession-financial-aid",data:"socioeconomic-diversity",url:"https://www.columbiaspectator.com/news/2020/05/24/columbia-wants-the-best-and-the-brightest-students-to-keep-up-with-top-ranked-schools-it-needs-the-richest-too-2/"},{name:'Uncertainty Looms as Student Jobs are Disappearing During the Great Lockdown <a href="https://pudding.cool/process/pudding-cup-2020/">🏆</a>',repo:"job-loss",image:"https://cloudfront-us-east-1.images.arcpublishing.com/spectator/MJQEFP4WVNASVES4BCIJCHKZKM.gif",url:"https://www.columbiaspectator.com/eye-lead/2020/05/15/uncertainty-looms-as-student-jobs-are-disappearing-during-the-great-lockdown/"},{name:"The U.S. and Ivy League schools were late to respond to COVID-19. Data shows international universities did better.",repo:"ivy-coronavirus-response",data:"covid-cases",image:"https://cloudfront-us-east-1.images.arcpublishing.com/spectator/Q4S24TEP2ZFTNH6P245MIKDQYY.gif",url:"https://www.columbiaspectator.com/news/2020/04/13/the-us-and-ivy-league-schools-were-late-to-respond-to-covid-19-data-shows-international-universities-did-better/"},{name:"Columbia tuition rates are among the highest in the country. Is it worth it?",repo:"earnings",data:"earnings-debt-2019",url:"https://www.columbiaspectator.com/news/2020/01/23/columbia-tuition-rates-are-among-the-highest-in-the-country-is-it-worth-it/",image:"https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/B6WTQOBD75DAPIBQARQWYNJORM.png"},{name:"Segregation exposes Black residents to health risks. Hospitals are disincentivized from treating them.",repo:"low-income-hospitals",data:"hospital-data",url:"https://www.columbiaspectator.com/news/2020/04/18/segregation-exposes-black-residents-to-health-risks-hospitals-are-disincentivized-from-treating-them/",image:"https://cloudfront-us-east-1.images.arcpublishing.com/spectator/57HU2DWODRH55JW4RA35TKNI6A.gif"},{name:"West Harlem residents fall under the most at risk groups for contracting COVID. High poverty rates will make recovery an uphill battle.",repo:"covid-healthcare",url:"https://www.columbiaspectator.com/news/2020/04/13/west-harlem-residents-fall-under-the-most-at-risk-groups-for-contracting-covid-high-poverty-rates-will-make-recovery-an-uphill-battle/",image:"https://cloudfront-us-east-1.images.arcpublishing.com/spectator/UPO4WWVNY5FOZORE2JULYXGOCQ.png"},{name:"[100 words] We asked how COVID-19 has impacted student’s lives. Here are their responses.",repo:"100-words",url:"https://www.columbiaspectator.com/opinion/2020/03/29/100-words-we-asked-how-covid-19-has-impacted-students-lives-here-are-their-responses/",image:"https://cloudfront-us-east-1.images.arcpublishing.com/spectator/ZCN6RYEPTFBF3PFXIYW4KESQRM.gif"},{name:"Community members see long-awaited safety improvements to Morningside Park in aftermath of Majors’ death",repo:"park-lights",url:"https://www.columbiaspectator.com/news/2020/01/30/community-members-see-long-awaited-safety-improvements-to-morningside-park-in-aftermath-of-majors-death/",image:"https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/UYJHXMLRP5BY3LZKKQHK6R4M5Y.png"},{name:"As Majors’ case awaits trial, experts say public urgency has led to unfair treatment of youth suspects",repo:"suspects-disparity",url:"https://www.columbiaspectator.com/news/2020/03/25/as-majors-case-awaits-trial-experts-say-public-urgency-has-led-to-unfair-treatment-of-youth-suspects/",image:"https://cloudfront-us-east-1.images.arcpublishing.com/spectator/FSXAG5N75NAIRG5ULL3MUYAK7M.png"},{name:"‘The next chapter’: Despite history of alumni apathy, Bollinger-era initiatives drive newfound culture of engagement",repo:"giving-day",url:"https://www.columbiaspectator.com/news/2019/10/31/the-next-chapter-despite-history-of-alumni-apathy-bollinger-era-initiatives-drive-newfound-culture-of-engagement/",image:"https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/4E3VGN4BF5HT5EHHDZEI45DCSQ.png"},{name:"As the pandemic rages on, Columbia braces for widespread financial fallout",url:"https://www.columbiaspectator.com/news/2020/04/16/as-the-pandemic-rages-on-columbia-braces-for-widespread-financial-fallout/",image:"https://i.imgur.com/cRmY2zZ.png"},{name:"Students and Faculty Say Gender-Based Harassment and Discrimination at Columbia is Systemic. Why Are They Turning Away From the System Built to Address It?",repo:"eoaa",url:"https://www.columbiaspectator.com/eye-lead/2019/11/15/students-and-faculty-say-gender-based-harassment-and-discrimination-at-columbia-is-systemic-why-are-they-turning-away-from-the-system-built-to-address-it/",image:"https://cloudfront-us-east-1.images.arcpublishing.com/spectator/HPXEFBF3GFDEXDVPMCSOVHYSSI.gif"},{name:"A space built for the community, the Forum remains inaccessible to local residents",url:"https://www.columbiaspectator.com/news/2020/02/06/the-forums-design-prevents-west-harlem-residents-from-occupying-a-space-built-for-the-community/",image:"https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/OC4QIMFHRNCX5FETN4XJAJXM4Q.png"},{name:"With classroom space shortage, Morningside Heights campus forced to expand boundaries",repo:"class-space-fall19",url:"https://www.columbiaspectator.com/news/2019/09/19/with-classroom-space-shortage-morningside-heights-campus-forced-to-expand-boundaries/",image:"https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/ENIHZBUWZFHKLMDXHYROLMOY2I.jpg"},{name:"“Landlords are waiting to pounce”: COVID-19 casts grim future for renters confronted by wave of evictions",url:"https://www.columbiaspectator.com/news/2020/04/28/landlords-are-waiting-to-pounce-covid-19-casts-grim-future-for-renters-confronted-by-wave-of-evictions/",image:"https://cloudfront-us-east-1.images.arcpublishing.com/spectator/REEM6K5BFVHYDA2N23KIL3Y4PU.png"},{name:"Over a fourth of West Harlem did not self-report in the 2010 census. COVID-19 could make numbers worse.",repo:"census-self-response",url:"https://www.columbiaspectator.com/news/2020/04/02/over-a-fourth-of-west-harlem-was-not-self-reported-in-the-2010-census-covid-19-could-make-numbers-worse/",image:"https://cloudfront-us-east-1.images.arcpublishing.com/spectator/7V7J6OIRAFFX7AK2ZU4ZFUP6AQ.png"},{name:"“They don’t follow the rules”: Inside Barnard’s broken relationship with its employee union",url:"https://www.columbiaspectator.com/news/2019/10/17/they-dont-follow-the-rules-inside-barnards-broken-relationship-with-its-employee-union/",image:"https://i.imgur.com/r2JsuXc.png"},{name:"Stacking up: Where do Columbia’s contributions to the community rank among its Ivy peers?",url:"https://www.columbiaspectator.com/news/2019/10/24/stacking-up-where-do-columbias-contributions-to-the-community-rank-among-its-ivy-peers/",image:"https://i.imgur.com/wLqhbyM.png"},{name:"Who are Columbia affiliates backing in 2020? Campaign donation data shows Booker in the lead.",repo:"political-candidates",url:"https://www.columbiaspectator.com/news/2019/11/23/who-are-columbia-affiliates-backing-in-2020-campaign-donation-data-shows-booker-in-the-lead-2/",image:"https://i.imgur.com/rhFFwvJ.png"},{name:"Surveying the Class of 2023",url:"https://github.com/graphicsdesk/survey-2023-print",image:"https://raw.githubusercontent.com/spec-journalism/survey-2023-print/master/ai/map.jpg"},{name:"Decades of Uncertainty: A visual history of the linguistics major through the Spec archives",repo:"linguistics-major",image:"https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/6FWL3IYTB5BLNBDFH5XBXT5JHQ.jpg",url:"https://www.columbiaspectator.com/news/2019/10/18/linguistics-major-visual-history/"},{name:"Sex Diversity Among Graduate Students Is Stagnating",repo:"graduate-sex-diversity",data:"gss-diversity",image:"https://jasonkao.me/images/graduate-sex-diversity.mp4",url:"https://www.columbiaspectator.com/eye-lead/2019/05/04/in-certain-science-and-engineering-fields-sex-diversity-among-graduate-students-is-stagnating-in-others-its-getting-worse/"}],secondLevel:[{name:"More of our Spec work at <code>@graphicsdesk</code>",image:"images/spec.webp",url:"https://github.com/graphicsdesk"}],people:[["Hong Sen Du","hongsendude","HongSenDu"],["Mike Fu",null,"haohaom1"],["Stephanie Lai","stephaniealai"],["Charlotte “The Cursor” Li","shallotly","shallotly"],["Jason Kao","jsonkao","jsonkao"],["Jessica Li","heyjessicali","heyjessicali"],["Ivana Moore",null,"ivanamoore"],["Kelly Pu",null,"kelp1470"],["Raeedah Wahid","raeedahwahid","raeedahw"],["Jun Yi Zhang","jenny_jyzhang","jennyjyzhang"],["Andrew Park",null,"apark2020"],["Deborah Cesarini",null,"deborahcesarini2"],["Elizabeth Commisso",null,"ecommisso"],["Ellen Guo",null,"ellenguo"],["Jefferson Sheng",null,"jsheng37"],["Melissa Wang",null,"mel-wang-wang"],["Michelle Xu",null,"michellexu23"]]};function pe(e,t,n){const s=e.slice();return s[2]=t[n].link,s[3]=t[n].name,s[4]=t[n].twitter,s[5]=t[n].git,s}function me(e){let t;return{c(){t=m("Our people")},m(e,n){c(e,t,n)},d(e){e&&l(t)}}}function de(t){let n,s,o,a,r,u,h,g,w,b=t[3]+"",y=t[4]&&function(t){let n,s,o;return{c(){n=p("a"),s=m("[tw]"),f(n,"class","twitter svelte-19tea9f"),f(n,"href",o="https://twitter.com/"+t[4]),f(n,"target","_blank"),f(n,"rel","noopener noreferrer")},m(e,t){c(e,n,t),i(n,s)},p:e,d(e){e&&l(n)}}}(t),v=t[5]&&function(t){let n,s,o;return{c(){n=p("a"),s=m("[gh]"),f(n,"class","twitter svelte-19tea9f"),f(n,"href",o="https://github.com/"+t[5]),f(n,"target","_blank"),f(n,"rel","noopener noreferrer")},m(e,t){c(e,n,t),i(n,s)},p:e,d(e){e&&l(n)}}}(t);return{c(){n=p("li"),s=p("p"),o=p("a"),a=m(b),u=d(),h=p("span"),y&&y.c(),g=d(),v&&v.c(),w=d(),f(o,"href",r=t[2]),f(o,"target","_blank"),f(o,"rel","noopener noreferrer"),f(s,"class","svelte-19tea9f")},m(e,t){c(e,n,t),i(n,s),i(s,o),i(o,a),i(s,u),i(s,h),y&&y.m(h,null),i(h,g),v&&v.m(h,null),i(n,w)},p(e,t){e[4]&&y.p(e,t),e[5]&&v.p(e,t)},d(e){e&&l(n),y&&y.d(),v&&v.d()}}}function he(e){let t,n,s,o,a,r,m,h,g,b,y,v,k,x,H,A,j;const C=new oe({props:{projects:e[0].topLevel}}),M=new oe({props:{projects:e[0].secondLevel,columns:1}}),F=new le({props:{id:"people",$$slots:{default:[me]},$$scope:{ctx:e}}});let L=e[1],I=[];for(let t=0;t<L.length;t+=1)I[t]=de(pe(e,L,t));const S=new le({props:{empty:!0}});return{c(){t=p("main"),n=p("header"),n.innerHTML='<div class="svelte-19tea9f"><p><b>Spectator Graphics</b></p></div> \n    <div class="svelte-19tea9f"><p>Homepage.</p> \n      <p class="gray svelte-19tea9f"><a href="#people" class="svelte-19tea9f">People.</a></p></div>',s=d(),o=p("p"),o.textContent="Happy Birthday Mel~.",a=d(),r=p("div"),r.innerHTML='<p class="svelte-19tea9f"><b class="svelte-19tea9f">We’re also on GitHub:</b> \n      <a href="https://github.com/graphicsdesk" class="svelte-19tea9f">github.com/graphicsdesk</a></p>',m=d(),T(C.$$.fragment),h=d(),T(M.$$.fragment),g=d(),b=p("footer"),T(F.$$.fragment),y=d(),v=p("div"),k=p("ul");for(let e=0;e<I.length;e+=1)I[e].c();x=d(),T(S.$$.fragment),H=d(),A=p("p"),A.innerHTML='Updated May 2020. <span style="text-transform: none;">\n      You are welcome to use this code/design for your own website under the <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.</span>',f(n,"class","svelte-19tea9f"),f(o,"class","nutgraf svelte-19tea9f"),f(r,"class","nutgraf contact svelte-19tea9f"),$(r,"contactFocused",fe),f(v,"class","buzzwords svelte-19tea9f"),f(A,"class","updated-text svelte-19tea9f"),f(b,"class","svelte-19tea9f"),w(t,"max-width","1200px"),f(t,"class","svelte-19tea9f")},m(e,l){c(e,t,l),i(t,n),i(t,s),i(t,o),i(t,a),i(t,r),i(t,m),N(C,t,null),i(t,h),N(M,t,null),i(t,g),i(t,b),N(F,b,null),i(b,y),i(b,v),i(v,k);for(let e=0;e<I.length;e+=1)I[e].m(k,null);i(b,x),N(S,b,null),i(b,H),i(b,A),j=!0},p(e,[t]){0&t&&$(r,"contactFocused",fe);const n={};1&t&&(n.projects=e[0].topLevel),C.$set(n);const s={};1&t&&(s.projects=e[0].secondLevel),M.$set(s);const o={};if(256&t&&(o.$$scope={dirty:t,ctx:e}),F.$set(o),2&t){let n;for(L=e[1],n=0;n<L.length;n+=1){const s=pe(e,L,n);I[n]?I[n].p(s,t):(I[n]=de(s),I[n].c(),I[n].m(k,null))}for(;n<I.length;n+=1)I[n].d(1);I.length=L.length}},i(e){j||(W(C.$$.fragment,e),W(M.$$.fragment,e),W(F.$$.fragment,e),W(S.$$.fragment,e),j=!0)},o(e){O(C.$$.fragment,e),O(M.$$.fragment,e),O(F.$$.fragment,e),O(S.$$.fragment,e),j=!1},d(e){e&&l(t),Y(C),Y(M),Y(F),u(I,e),Y(S)}}}let fe=!1;function ge(e,t,n){const s=ue.people.map(e=>{let t,n,s=e;return Array.isArray(e)&&(s=e[0],t=e[1],n=e[2]),{name:s,link:"https://www.columbiaspectator.com/contributors/"+s.replace(/“.*” /,"").replace(/\s/g,"-"),twitter:t,git:n}}).sort((e,t)=>e.name>t.name?1:-1);return ue.topLevel=ue.topLevel.map(({url:e,...t})=>({...t,url:e,date:(e.match(/20\d{2}\/\d{2}\/\d{2}/)||[""])[0].replace(/\//g,"-")})),[ue,s]}class we extends J{constructor(e){super(),_(this,e,ge,he,a,{})}}export default function(){"scrollBehavior"in document.documentElement.style||import("./index-c33412cb.js").then(),new we({target:document.body})}
//# sourceMappingURL=main.js.map
