if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const t=e=>s(e,r),l={module:{uri:r},exports:o,require:t};i[r]=Promise.all(n.map((e=>l[e]||t(e)))).then((e=>(c(...e),o)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"0da9a918cac3602c720697e436cee44c"},{url:"assets/index-1x4Q4IMn.css",revision:null},{url:"assets/index-CGOOH3kl.js",revision:null},{url:"index.html",revision:"32a980b6dcc0afeda51c693db80d50fb"},{url:"registerSW.js",revision:"5570337ce51945fb4fa38297517faa03"},{url:"maskable-icon-512x512.png",revision:"13672286b1edf9e14ec684139518eb30"},{url:"pwa-192x192.png",revision:"412d841c5eb8454cb5479897c45758b6"},{url:"pwa-512x512.png",revision:"3cf13447b230b16a370877c496260349"},{url:"pwa-64x64.png",revision:"cc88b2305c049efff161cccc8c978fe0"},{url:"manifest.webmanifest",revision:"4b0f13dc90e86235dd531fdc9c04e13e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
