if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const t=e=>n(e,c),l={module:{uri:c},exports:o,require:t};i[c]=Promise.all(s.map((e=>l[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"0da9a918cac3602c720697e436cee44c"},{url:"assets/index-BdgsriQ2.js",revision:null},{url:"assets/index-Bv4ncVg6.css",revision:null},{url:"index.html",revision:"d1cc2921b9ade5c243a77038053ca8bf"},{url:"registerSW.js",revision:"5570337ce51945fb4fa38297517faa03"},{url:"maskable-icon-512x512.png",revision:"13672286b1edf9e14ec684139518eb30"},{url:"pwa-192x192.png",revision:"412d841c5eb8454cb5479897c45758b6"},{url:"pwa-512x512.png",revision:"3cf13447b230b16a370877c496260349"},{url:"pwa-64x64.png",revision:"cc88b2305c049efff161cccc8c978fe0"},{url:"manifest.webmanifest",revision:"8724b5cefa8ff3044568e65b69a9afdc"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
