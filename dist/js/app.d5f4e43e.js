(function(){"use strict";var n={9648:function(n,t,e){var r=e(9242),o=e(3396),i=e(7139),u=e(4870),a=e(8541),l={__name:"TheList",setup(n){const t=(0,u.iH)([]),e=async(n="https://swapi.dev/api/people")=>{const t=await fetch(n),e=await t.json();return console.log(e.results),e.results};return(0,o.bv)((async()=>{t.value=await e()})),(n,e)=>((0,o.wg)(),(0,o.iD)("div",null,[(0,o.Uk)(" THE LIST "),(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.value,(n=>((0,o.wg)(),(0,o.iD)("li",{key:n.name},(0,i.zw)(n.name),1)))),128))])]))}};const c=l;var s=c,f={__name:"App",setup(n){const t="item",{cookies:e}=(0,a.fP)(),r=e.get(t),l=localStorage.getItem(t)||"none",c=sessionStorage.getItem(t)||"none";return(n,t)=>((0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",null,[(0,o._)("div",null,"Cookie item: "+(0,i.zw)((0,u.SU)(r)),1),(0,o._)("div",null,"localStore item: "+(0,i.zw)((0,u.SU)(l)),1),(0,o._)("div",null,"sessionStore item: "+(0,i.zw)((0,u.SU)(c)),1)]),(0,o.Wm)(s)]))}};const v=f;var p=v;(0,r.ri)(p).mount("#app")}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return n[r](i,i.exports,e),i.exports}e.m=n,function(){var n=[];e.O=function(t,r,o,i){if(!r){var u=1/0;for(s=0;s<n.length;s++){r=n[s][0],o=n[s][1],i=n[s][2];for(var a=!0,l=0;l<r.length;l++)(!1&i||u>=i)&&Object.keys(e.O).every((function(n){return e.O[n](r[l])}))?r.splice(l--,1):(a=!1,i<u&&(u=i));if(a){n.splice(s--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var s=n.length;s>0&&n[s-1][2]>i;s--)n[s]=n[s-1];n[s]=[r,o,i]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,r){var o,i,u=r[0],a=r[1],l=r[2],c=0;if(u.some((function(t){return 0!==n[t]}))){for(o in a)e.o(a,o)&&(e.m[o]=a[o]);if(l)var s=l(e)}for(t&&t(r);c<u.length;c++)i=u[c],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(s)},r=self["webpackChunkpoc_iframe_list"]=self["webpackChunkpoc_iframe_list"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(9648)}));r=e.O(r)})();
//# sourceMappingURL=app.d5f4e43e.js.map